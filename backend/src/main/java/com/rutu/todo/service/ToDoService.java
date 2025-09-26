package com.rutu.todo.service;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rutu.todo.dto.ToDoDto;
import com.rutu.todo.entity.ToDo;
import com.rutu.todo.repository.ToDoRepository;

@Service
public class ToDoService {
	
	@Autowired
	private ToDoRepository todoRepository;

	public ToDoService(ToDoRepository todoRepository) {
		super();
		this.todoRepository = todoRepository;
	}
	
	//get all task
	public Iterable<ToDoDto> getAllTasks(){
		return todoRepository.findAll().stream().map(t -> new ToDoDto(
				t.getId(),
				t.getName(),
				t.getDate(),
				t.isCompleted()
				)).collect(Collectors.toList());
	}
	
	//add new task
	public ToDoDto addTask(ToDo todo) {
		ToDo dto = todoRepository.save(todo);
		return new ToDoDto(
				dto.getId(),
				dto.getName(),
				dto.getDate(),
				dto.isCompleted()
				);
	}
	
	//delete task
	public void deleteTask(Integer id) {
		todoRepository.deleteById(id);
	}
	
	//update task
	public ToDoDto updateTask(Integer id, ToDo todo) {
		ToDo exist = todoRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Task not found with id" + id));
		
		
		exist.setName(todo.getName());
		exist.setDate(todo.getDate());
		exist.setCompleted(todo.isCompleted());
		
		ToDo updated = todoRepository.save(exist);
		return new ToDoDto(
				updated.getId(),
				updated.getName(),
				updated.getDate(),
				updated.isCompleted()
				);
	}
	
	 //toggle completion status
	public ToDoDto toggleCompletion(Integer id) {
		ToDo exist = todoRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Task not found with id" + id));
		
		exist.setCompleted(!exist.isCompleted());
		ToDo updated = todoRepository.save(exist);
		
		return new ToDoDto(
			updated.getId(),
			updated.getName(),
			updated.getDate(),
			updated.isCompleted()
				);
	}
	

}








