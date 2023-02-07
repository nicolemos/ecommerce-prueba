package com.ncc9project.technolearn.service;

import com.ncc9project.technolearn.model.Usuario;

import java.util.ArrayList;
import java.util.Optional;

public interface UsuarioService {

    ArrayList<Usuario> getAlluser();
    Optional<Usuario> getUserById(long id);

}
