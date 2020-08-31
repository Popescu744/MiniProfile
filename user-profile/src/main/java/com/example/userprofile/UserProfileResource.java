package com.example.userprofile;

import java.awt.PageAttributes.MediaType;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;


@CrossOrigin(origins = "*")  
@RestController
public class UserProfileResource {
	
	@Autowired
	UserProfileManagement upm;
	
	@RequestMapping(path="/users", method= RequestMethod.GET)
	public List<UserProfile> getUsers(){
		return upm.getAllUsers();
	}
	
	@GetMapping(path="/users/{id}")
	public   UserProfile getUser(@PathVariable String id){
		return upm.getUser(id);
	}
	
	@PutMapping("/users/{id}" )
	public String setUserProfile(@RequestBody UserProfile user){
		upm.editUserProfile(user);
		return "user updated";
	}
	
	//for future iterations where new users can be inserted 
	//frontend call available in editProfile.js
	@PostMapping("/users" )
	public String createNewProfile(@RequestBody   UserProfile user){
		
		System.out.println(user.id);
		System.out.println(user.name);
		System.out.println(user.description);
		System.out.println(user.link);
		upm.insertUser(user.id, user.name, user.description, user.link);
		return "user updated";
	}
	
}