package com.user.userspring.controller;


import com.user.userspring.Person;
import com.user.userspring.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class PersonController {


    @Autowired
    private PersonService personService;


    @RequestMapping("/admin")
    public String viewHomePage() {

        return "admin";
    }

    @RequestMapping(value = "/hello")
    public String helloPerson() {

        return "hello";
    }



    @RequestMapping("/admin/new")
    public String showNewPersonPage(Model model) {
        Person person = new Person();
        model.addAttribute("person", person);

        return "new_person";
    }

   /* @RequestMapping(value = "/admin/add", method = RequestMethod.POST)
    public String addPerson(@ModelAttribute("newPerson") Person person) {
      //  person.setRoles(Collections.singleton(new Role("USER")));
        personService.addPerson(person);

        return "redirect:/admin?id=1";
    }*/

    /*@RequestMapping(value = "/admin/update", method = RequestMethod.POST)
    public String  updatePerson(@ModelAttribute("person") Person person) {
        personService.updatePerson(person);

        return "redirect:/admin?id=1";
    }*/

    @RequestMapping("/admin/edit")
    public ModelAndView showEditPersonPage(@RequestParam(name = "id") long id) {
        ModelAndView mav = new ModelAndView("edit_person");
        Person person = personService.getPersonById(id);
        mav.addObject("person", person);

        return mav;
    }

   /* @RequestMapping("/admin/delete")
    public String deletePerson(@RequestParam(name = "id") long id) throws Exception {
        personService.removePerson(id);
        return "redirect:/admin?id=1";
    }*/



    @RequestMapping(value = "login", method = RequestMethod.GET)
    public String loginPage() {
        return "login";
    }



}
