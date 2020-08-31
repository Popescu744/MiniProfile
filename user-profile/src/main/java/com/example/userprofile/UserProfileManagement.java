package com.example.userprofile;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class UserProfileManagement {

	private static List<UserProfile> users = new ArrayList<UserProfile>();

	public UserProfileManagement(){

		users.add( new UserProfile("0","John Smith", "linkedin/jsmith", "basic user profile"));
		//users.add( new UserProfile("1","Barbara B", "bb.com", "basic user profile"));
		//users.add( new UserProfile("2","Joaquin Pheonix", "joker.com", "premium user"));
	}
	
	public List<UserProfile> getAllUsers(){
		return users;
	}
	
	public UserProfile getUser(String id){
		return users.get(Integer.parseInt(id));
	}
	
	public UserProfile editUserProfile(UserProfile user){
	
		users.get(Integer.parseInt(user.getId())).setName(user.getName());;
		users.get(Integer.parseInt(user.getId())).setDescription(user.getDescription());;
		users.get(Integer.parseInt(user.getId())).setLink(user.getLink());;		
		
		return users.get(Integer.parseInt(user.getId()));
	}
	
	
	public List<UserProfile> insertUser(String i, String n, String d, String l){
		
		users.add(new UserProfile(i,n,d,l));
		
		return users;
	}
	
}