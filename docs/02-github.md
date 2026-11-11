# Paso 2 · Subir el código a GitHub

**Objetivo:** guardar tu proyecto en GitHub. Vercel lo leerá desde ahí.

## Antes de empezar

1. Instala [Git](https://git-scm.com/downloads) y comprueba:
   ```powershell
   git --version
   ```
2. Crea cuenta en [github.com](https://github.com).
3. Dile a Git quién eres (una sola vez):
   ```powershell
   git config --global user.name "Tu Nombre"
   git config --global user.email "tu@correo.com"
   ```

## Crear el repositorio vacío en GitHub

1. En GitHub pulsa **+** (arriba a la derecha) → **New repository**.
2. Nombre: `mi-primera-web-vercel`.
3. Elige **Public**.
4. **No marques** README, .gitignore ni licencia (ya los tienes).
5. Pulsa **Create repository**.

GitHub muestra una URL como `https://github.com/TU-USUARIO/mi-primera-web-vercel.git`. Cópiala.

## Subir tu código

Abre la terminal **dentro de la carpeta del proyecto** y ejecuta:

```powershell
git init
git add .
git commit -m "Primera versión de mi web"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/mi-primera-web-vercel.git
git push -u origin main
```

| Comando | Qué hace |
|---------|----------|
| `git init` | Convierte la carpeta en repositorio. |
| `git add .` | Prepara todos los archivos. |
| `git commit -m "..."` | Guarda la "foto" con un mensaje. |
| `git branch -M main` | Nombra la rama principal `main`. |
| `git remote add origin URL` | Conecta con tu repo de GitHub. |
| `git push -u origin main` | Envía el código. |

La primera vez, GitHub pedirá iniciar sesión en el navegador.

**Debes ver:** al recargar la página del repo en GitHub, aparecen `index.html`, `style.css`, `script.js`.

## Errores típicos

- **`git` no se reconoce:** reinicia la terminal tras instalar Git.
- **`remote origin already exists`:** ejecuta `git remote set-url origin URL`.
- **`Authentication failed`:** inicia sesión de nuevo cuando se abra el navegador.

## Resumen

- GitHub guarda tu código en internet.
- Cinco ideas: `init`, `add`, `commit`, `remote`, `push`.

Siguiente: [Paso 3 · Dashboard de Vercel](03-vercel-dashboard.md)
