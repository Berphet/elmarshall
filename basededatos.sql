-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3307
-- Tiempo de generación: 30-04-2021 a las 06:46:26
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `marshall`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `apunte`
--

DROP TABLE IF EXISTS `apunte`;
CREATE TABLE IF NOT EXISTS `apunte` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `contenido_id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `url` varchar(500) NOT NULL,
  `tipo_apunte` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `contenido_id` (`contenido_id`),
  KEY `tipo_apunte` (`tipo_apunte`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contenido`
--

DROP TABLE IF EXISTS `contenido`;
CREATE TABLE IF NOT EXISTS `contenido` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `descripcion` text NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `fecha_actualizacion` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_de_apunte`
--

DROP TABLE IF EXISTS `tipo_de_apunte`;
CREATE TABLE IF NOT EXISTS `tipo_de_apunte` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_apunte` int(11) NOT NULL,
  `formato` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `correo` varchar(200) NOT NULL,
  `clave` varchar(200) NOT NULL,
  `creacion_clave` datetime NOT NULL,
  `expira_clave` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
