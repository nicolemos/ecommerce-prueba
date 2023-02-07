package com.ncc9project.technolearn.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "usuario")
public class Usuario {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        @Getter @Setter @Column(name = "id_usuario")
        private long id;

        @Getter @Setter @Column(name = "nombre_completo")
        private String nombre;

        @Getter @Setter @Column(name = "email")
        private String email;

        @Getter @Setter @Column(name = "usuario")
        private String usuario;

        @Getter @Setter @Column(name = "cursos_usuario")
        private String cursosUsuario;

        @Getter @Setter @Column(name = "contraseña")
        private String password;

}
