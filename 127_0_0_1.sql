-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Jun 24, 2021 at 01:31 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `marshall`
--
CREATE DATABASE IF NOT EXISTS `marshall` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `marshall`;

-- --------------------------------------------------------

--
-- Table structure for table `apunte`
--

DROP TABLE IF EXISTS `apunte`;
CREATE TABLE IF NOT EXISTS `apunte` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `contenido_id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `url` varchar(500) NOT NULL,
  `tipo` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `fecha_actualizacion` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `contenido_id` (`contenido_id`),
  KEY `tipo_apunte` (`tipo`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `apunte_tipo`
--

DROP TABLE IF EXISTS `apunte_tipo`;
CREATE TABLE IF NOT EXISTS `apunte_tipo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `fecha_actualizacion` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `contenido`
--

DROP TABLE IF EXISTS `contenido`;
CREATE TABLE IF NOT EXISTS `contenido` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `descripcion` text NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `fecha_actualizacion` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contenido`
--

INSERT INTO `contenido` (`id`, `nombre`, `descripcion`, `fecha_creacion`, `fecha_actualizacion`) VALUES
(1, 'marshall', 'insertando contenido 1 acumulativa up', '2021-06-23 20:11:31', '2021-06-23 21:25:25'),
(2, 'marshall', 'insertando segundo contenido', '2021-06-23 21:29:52', '2021-06-23 21:29:52'),
(3, 'homero', 'insertando tercer contenido', '2021-06-23 21:30:12', '2021-06-23 21:31:24'),
(4, 'barto', 'insertando 4to contenido', '2021-06-23 21:30:37', '2021-06-23 21:30:37'),
(5, 'Mariposon', 'creando un 5to contenido para acumulativa 2', '2021-06-23 20:55:17', '2021-06-23 20:55:28');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `correo` varchar(200) NOT NULL,
  `codigo` varchar(200) NOT NULL,
  `creacion_clave` datetime NOT NULL,
  `expira_clave` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `correo`, `codigo`, `creacion_clave`, `expira_clave`) VALUES
(1, 'marshall', 'marshaxgallardo2@gmail.com', 'probando123', '2021-05-29 20:27:10', '2021-05-29 20:27:10');
--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
