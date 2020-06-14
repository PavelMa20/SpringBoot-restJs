package com.user.userspring.controller;


import com.user.userspring.Person;
import com.user.userspring.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/admin/*")
public class PersonRestController {

    @Autowired
    private PersonService personService;

    @GetMapping(value = "admin/all")
    public ResponseEntity<List<Person>> getList() {

           ResponseEntity<List<Person>> responseEntity = new ResponseEntity(personService.listPersons(), HttpStatus.OK);
           return responseEntity;
    }

    @PostMapping(value = "admin/add")
    public ResponseEntity<Person> addPerson(@RequestBody Person person){
        personService.addPerson(person);
        return new ResponseEntity<Person>(HttpStatus.OK);
    }
    @PostMapping(value = "admin/get")
    public ResponseEntity<Person> getPerson(@RequestBody Long id) {
        ResponseEntity<Person> personResponseEntity = new ResponseEntity<Person>( personService.getPersonById(id),HttpStatus.OK);
        return personResponseEntity;
    }

    @PostMapping(value = "admin/update")
    public ResponseEntity<Person> updatePerson(@RequestBody Person person){
        personService.updatePerson(person);
        return new ResponseEntity<Person>(HttpStatus.OK);
    }

    @PostMapping(value = "admin/delete")
    public ResponseEntity<Void> deletePerson(@RequestBody Long id) throws Exception {
        personService.removePerson(id);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @GetMapping(value = "admin/panel")
    public Person getLoginPerson(){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Object obj = auth.getPrincipal();
        String name = ((UserDetails) obj).getUsername();
        Person loginPerson = personService.findByGivenName(name);
        return loginPerson;
    }

}

