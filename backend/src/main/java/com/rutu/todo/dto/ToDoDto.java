package com.rutu.todo.dto;

import java.time.LocalDateTime;

public class ToDoDto {
	
	private Integer id;
	private String name;
	private LocalDateTime date;
	 private boolean isCompleted;

	public ToDoDto() {

	}

	public ToDoDto(Integer id, String name, LocalDateTime date, boolean isCompleted) {
		super();
		this.id = id;
		this.name = name;
		this.date = date;
		this.isCompleted = isCompleted;
		
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}
	
	public boolean isCompleted() {
		return isCompleted;
	}

	public void setCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}

}
