package com.example.userprofile;


//basic 
public class UserProfile {

	String id= "";
	String name="";
	String description="";
	String link="";
	
	//constructors
	

	public UserProfile(){
		
	}
	
	public UserProfile(String i, String n, String d, String l){
		id= i;
		name = n;
		description = d;
		link = l;
	}
	
	//getters
	public String getId(){
		return id;
	}

	public String getName(){
		return name;
	}
	
	public String getDescription(){
		return description;
	}

	public String getLink(){
		return link;
	}
	
	//setters
	public void setName(String n){
		name = n;
	}
	
	public void setDescription(String d){
		description = d;
	}
	
	public void setLink(String l){
		link = l;
	}
}