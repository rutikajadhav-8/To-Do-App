package com.rutu.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rutu.todo.entity.ToDo;

public interface ToDoRepository extends JpaRepository<ToDo, Integer>{

}
