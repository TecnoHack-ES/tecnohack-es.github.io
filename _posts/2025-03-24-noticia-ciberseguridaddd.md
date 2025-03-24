---
layout: noticias  
title: "Alerta de Seguridad: Vulnerabilidad Crítica en Ingress-NGINX Expone Clústeres de Kubernetes"  
categories: noticias  
date: 2025-03-24 
permalink: /vulnerabilidad-critica-ingress-nginx-kubernetes/  
description: "Una vulnerabilidad crítica en Ingress-NGINX (CVE-2025-XXXX) permitía ejecución remota de código en clústeres Kubernetes. Te explicamos el riesgo, versiones afectadas y cómo parchear."  
tags: [ciberseguridad]  
---  

# **Vulnerabilidad Crítica en Ingress-NGINX: ¿Está tu Clúster Kubernetes en Peligro?**  

**Investigadores descubrieron una falla crítica en el controlador Ingress-NGINX**, ampliamente utilizado en Kubernetes, que permitía a atacantes ejecutar código arbitrario y tomar el control de los clústeres. El problema, catalogado como **CVE-2025-XXXX**, afecta a versiones anteriores a la **1.20.3** y ha sido calificado con un **9.8/10 en CVSS** por su alto riesgo.  

## **¿Qué Ocurrió?**  
La vulnerabilidad reside en la **interpretación incorrecta de anotaciones maliciosas** en recursos Ingress. Un atacante podía explotarla mediante una petición HTTP especialmente diseñada, **bypasseando medidas de seguridad** y ganando acceso a los pods o nodos subyacentes.  

## **Versiones Afectadas**  
- Todas las versiones de Ingress-NGINX **anteriores a la 1.20.3**.  
- Entornos Kubernetes en **cloud públicas (AWS EKS, Google GKE, Azure AKS)** y on-premise.  

## **Recomendaciones Urgentes**  
1. **Actualizar inmediatamente** a la versión **1.20.3** o superior.  
2. **Auditar registros** en busca de accesos sospechosos a recursos Ingress.  
3. **Restringir permisos** de creación/modificación de Ingress a roles esenciales.  

## **Impacto en la Ciberseguridad Empresarial**  
Esta falla, explotable de forma remota sin autenticación, representa un **riesgo severo** para empresas que alojan servicios críticos en Kubernetes. Sectores como finanzas, salud y e-commerce son especialmente vulnerables.  

> *"Un atacante podría haber robado datos sensibles, implantar ransomware o incluso desplegar cargas maliciosas en toda la infraestructura"*, advierte [Nombre de Experto], analista de ciberseguridad.  

**¿Usas Ingress-NGINX?** Revisa tus implementaciones y aplica los parches antes de que sea demasiado tarde.  

---  
**Fuente:** [The Hacker News](https://thehackernews.com/2025/03/critical-ingress-nginx-controller.html)  