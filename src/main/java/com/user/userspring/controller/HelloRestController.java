package com.user.userspring.controller;


import com.user.userspring.Person;
import com.user.userspring.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello/*")
public class HelloRestController {
    @Autowired
    private PersonService personService;

    @GetMapping(value = "/hello/person")
    public Person getLoginPerson(){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Object obj = auth.getPrincipal();
        String name = ((UserDetails) obj).getUsername();
        Person loginPerson = personService.findByGivenName(name);
        return loginPerson;
    }
}
