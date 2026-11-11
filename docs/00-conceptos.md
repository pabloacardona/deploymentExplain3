# Paso 0 · Conceptos básicos

**Objetivo:** entender las palabras que vas a ver, antes de tocar nada.

## La analogía

Tu web es una tienda. Hasta ahora está en **tu casa** (tu ordenador): solo tú entras.
**Vercel** es un local en una calle principal: pones tu tienda ahí y recibe una **dirección** (URL) que cualquiera puede visitar.

## Glosario

| Palabra | Significado simple |
|---------|--------------------|
| **Deploy / despliegue** | Subir tu web a un servidor para que sea pública. |
| **Hosting** | El "local" donde vive tu web (servidor de otra empresa). |
| **Vercel** | Plataforma de hosting. Recibe tu código y lo publica. |
| **URL** | La dirección de tu web, p. ej. `mi-web.vercel.app`. |
| **Repositorio (repo)** | Carpeta de tu proyecto con historial de cambios. |
| **Git** | Programa que guarda ese historial en tu ordenador. |
| **GitHub** | Web donde guardas tu repo en internet. |
| **Commit** | Una "foto" de tu proyecto en un momento. |
| **Push** | Enviar tus commits a GitHub. |
| **Build** | Paso de preparar el proyecto antes de publicarlo. Nuestra web es estática: **no necesita build**. |
| **Producción** | La versión pública y oficial de tu web. |
| **Preview** | Versión de prueba con URL propia, antes de pasar a producción. |
| **CDN** | Red de servidores por el mundo; tu web carga rápido desde el más cercano. |

## Idea clave

```
Escribes código -> lo guardas (commit) -> lo envías (push) -> Vercel lo publica (deploy)
```

## Resumen

- Deploy = poner tu web en internet.
- Vercel te da hosting y una URL gratis.
- Nuestra web es estática: HTML + CSS + JS, sin build.

Siguiente: [Paso 1 · Preparar el proyecto](01-preparar-proyecto.md)
