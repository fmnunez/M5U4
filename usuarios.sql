-- Estructura de la tabla usuarios
CREATE TABLE IF NOT EXISTS usuarios (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 usuario VARCHAR(250) NOT NULL,
 password VARCHAR(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
-- Usuario de prueba: usuario 'flavia' / clave '1234' (guardada en MD5)
INSERT INTO usuarios (usuario, password) VALUES ('flavia', MD5('1234'));
