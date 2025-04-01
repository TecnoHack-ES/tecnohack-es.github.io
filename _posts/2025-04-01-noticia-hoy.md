---
layout: noticias
title: "Vulnerabilidad Crítica en Apache Tomcat Permite Ejecución Remota de Código: CVE-2025-24813"
date: 2025-04-01
permalink: /vulnerabilidad-apache-tomcat-cve-2025-24813/
description: "Una grave vulnerabilidad en Apache Tomcat ha sido explotada activamente, permitiendo la ejecución remota de código en servidores afectados. Descubre cómo proteger tu sistema."
categories: noticias
tags: [ciberseguridad, vulnerabilidades, Apache Tomcat]
---

## Apache Tomcat bajo ataque: CVE-2025-24813

**Por el equipo de TecnoHack** · Actualización: 01 de abril de 2025  

Apache Tomcat, uno de los servidores de aplicaciones Java más utilizados a nivel mundial, ha sido objeto de una explotación activa debido a una vulnerabilidad crítica identificada como **CVE-2025-24813**. Esta falla permite a atacantes remotos ejecutar código arbitrario en servidores afectados, comprometiendo la integridad y seguridad de los sistemas.

## Detalles de la Vulnerabilidad CVE-2025-24813

La vulnerabilidad afecta a las siguientes versiones de Apache Tomcat:

- **9.0.0-M1 hasta 9.0.98**
- **10.1.0-M1 hasta 10.1.34**
- **11.0.0-M1 hasta 11.0.2**

El problema radica en el manejo de solicitudes PUT parciales y la equivalencia de rutas en Apache Tomcat. Bajo ciertas condiciones específicas, los atacantes pueden aprovechar esta falla para eludir las restricciones de seguridad y ejecutar código sin necesidad de autenticación.

### ¿Por qué es tan peligrosa esta vulnerabilidad?

La CVE-2025-24813 permite la **ejecución remota de código (RCE)**, una de las amenazas más graves en seguridad informática. Si un atacante logra explotar esta vulnerabilidad, podría:

- Tomar control total del servidor Apache Tomcat afectado.
- Instalar malware, ransomware u otras amenazas.
- Filtrar información confidencial almacenada en el servidor.
- Usar el servidor comprometido como plataforma para lanzar ataques adicionales contra otras redes y sistemas.

## Técnicas de Explotación e Impacto

Según informes recientes, la explotación de esta vulnerabilidad implica un proceso en dos etapas:

1. **Carga de Payload Malicioso**: El atacante envía una solicitud PUT con una carga útil Java serializada maliciosamente a un directorio con permisos de escritura en el servidor. Esta carga está diseñada para desencadenar la ejecución remota de código al ser deserializada.

2. **Activación del Payload**: Posteriormente, se envía una solicitud GET con una cookie "JSESSIONID" especialmente diseñada, provocando que el servidor deserialice la carga y ejecute el código arbitrario.

### ¿Cuáles son los objetivos principales de los atacantes?

Los atacantes suelen apuntar a servidores vulnerables por varias razones:

- **Servidores empresariales**: Muchas empresas utilizan Apache Tomcat para alojar aplicaciones internas y externas.
- **Infraestructura crítica**: Algunas agencias gubernamentales y empresas de servicios esenciales dependen de Tomcat.
- **Proveedores de hosting**: Los servidores compartidos pueden ser un objetivo atractivo para propagar malware a múltiples clientes.

## Medidas de Mitigación

Para proteger los sistemas afectados por la CVE-2025-24813, se recomienda encarecidamente:

- **Actualizar Apache Tomcat**: Instalar las versiones corregidas lo antes posible:
  - **9.0.99**
  - **10.1.35**
  - **11.0.3**

- **Implementar Controles de Red**: Mientras se realiza la actualización, restringir el acceso al servidor Tomcat mediante controles a nivel de red puede proporcionar una protección temporal.

- **Deshabilitar Métodos HTTP Innecesarios**: Limitar los métodos HTTP permitidos y reforzar las políticas de acceso puede reducir la superficie de ataque.

- **Monitoreo Continuo**: Implementar sistemas de monitoreo para detectar actividades sospechosas y utilizar firewalls de aplicaciones web (WAF) para bloquear tráfico malicioso.

### Buenas prácticas adicionales para administradores

- **Realizar auditorías de seguridad periódicas** para detectar configuraciones inseguras.
- **Implementar autenticación multifactor (MFA)** en las cuentas administrativas.
- **Limitar permisos de escritura** en carpetas sensibles para evitar la subida de archivos maliciosos.
- **Configurar un entorno de pruebas aislado** para analizar nuevas versiones antes de implementarlas en producción.

## Conclusión

La vulnerabilidad **CVE-2025-24813** en Apache Tomcat representa una amenaza significativa para la seguridad de los servidores que ejecutan versiones afectadas. Es imperativo que los administradores de sistemas tomen medidas inmediatas para actualizar sus instalaciones y aplicar las mitigaciones recomendadas, garantizando así la integridad y seguridad de sus infraestructuras.

Con ataques cada vez más sofisticados, la prevención y la actualización constante son clave para evitar ser víctima de una brecha de seguridad. No esperes a que sea demasiado tarde: **actúa ahora y protege tu servidor Apache Tomcat.**
