CREATE DATABASE `webII`;

CREATE TABLE `webII`.`usuario` (
	idUsuario INT(11) PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR(50) NULL DEFAULT NULL,
    senhaUsuario VARCHAR(50) NULL DEFAULT NULL
);