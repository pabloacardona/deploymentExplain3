# Paso 4 · Desplegar con la CLI de Vercel

**Objetivo:** publicar tu web desde la terminal, sin pasar por GitHub.

> CLI = *Command Line Interface*: programa que se maneja escribiendo comandos.

## Instalar

Necesitas [Node.js](https://nodejs.org) (versión LTS). Comprueba:

```powershell
node --version
```

Instala la CLI de Vercel:

```powershell
npm i -g vercel
vercel --version
```

## Iniciar sesión

```powershell
vercel login
```

Elige tu método (GitHub, correo...). Se abre el navegador para confirmar.

## Desplegar (preview)

En la carpeta del proyecto:

```powershell
vercel
```

La CLI hace preguntas. Respuestas para este proyecto:

| Pregunta | Respuesta |
|----------|-----------|
| Set up and deploy? | `y` |
| Which scope? | tu cuenta |
| Link to existing project? | `n` |
| Project name? | `mi-primera-web-vercel` |
| In which directory is your code located? | `./` |
| Want to modify settings? | `n` |

Al terminar muestra una URL de **Preview** (versión de prueba).

## Desplegar a producción

```powershell
vercel --prod
```

**Debes ver:** una URL de **Production** (`https://mi-primera-web-vercel.vercel.app`).

## Preview vs producción

| Comando | Resultado |
|---------|-----------|
| `vercel` | Preview: URL única de prueba. |
| `vercel --prod` | Producción: URL oficial. |

## Qué crea la CLI

Una carpeta `.vercel/` con el enlace a tu proyecto. Ya está en `.gitignore`: no la subas a GitHub.

## Alternativa sin instalar nada

**Vercel Drop** permite arrastrar una carpeta o `.zip` al navegador para desplegar. Útil para pruebas rápidas.

## Errores típicos

- **`vercel` no se reconoce:** reinicia la terminal tras instalar.
- **`npm` no se reconoce:** instala Node.js.
- **Error de permisos en PowerShell:** abre PowerShell como administrador o ejecuta `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`.

## Resumen

- `npm i -g vercel` → `vercel login` → `vercel` → `vercel --prod`.
- No necesitas GitHub, pero pierdes el despliegue automático.

Siguiente: [Paso 5 · Actualizar](05-actualizar.md)
