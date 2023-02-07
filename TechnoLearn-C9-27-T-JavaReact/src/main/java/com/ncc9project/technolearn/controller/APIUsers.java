package com.ncc9project.technolearn.controller;

import com.ncc9project.technolearn.model.Usuario;
import com.ncc9project.technolearn.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("api")
public class APIUsers {

    @Autowired
    UsuarioService usuarioService;



    @GetMapping("/todos")
    public ArrayList<Usuario> getAllUser() {
        return usuarioService.getAlluser();
    }

    @GetMapping("/buscar/{id}")
    public Optional<Usuario> getUserById(@PathVariable("id") long id) {
        return usuarioService.getUserById(id);
    }



}
