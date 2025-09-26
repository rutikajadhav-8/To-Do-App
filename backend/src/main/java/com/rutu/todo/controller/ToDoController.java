package com.rutu.todo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rutu.todo.dto.ToDoDto;
import com.rutu.todo.entity.ToDo;
import com.rutu.todo.service.ToDoService;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:5173")
public class ToDoController {

	private ToDoService todoService;

	public ToDoController(ToDoService todoService) {
		super();
		this.todoService = todoService;
	}
	
	@GetMapping
	public Iterable<ToDoDto> getAllTask(){
		return todoService.getAllTasks();
	}
	
	@PostMapping
	public ToDoDto addTask(@RequestBody ToDo todo) {
		return todoService.addTask(todo);
	}
	
	@DeleteMapping("/{id}")
	public void deleteTask(@PathVariable("id") Integer id) {
		 todoService.deleteTask(id);
	}
	
	@PutMapping("/{id}")
	public ToDoDto updateTask(@PathVariable("id") Integer id, @RequestBody ToDo todo) {
		return todoService.updateTask(id, todo);
	}
	
	@PatchMapping("/toggle/{id}")
	public ToDoDto toggleCompletion(@PathVariable("id") Integer id) {
		return todoService.toggleCompletion(id);
	}
}

