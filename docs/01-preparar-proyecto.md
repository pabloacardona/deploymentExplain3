# Paso 1 · Preparar el proyecto

**Objetivo:** ver la web funcionando en tu ordenador antes de publicarla.

## Los 3 archivos

| Archivo | Para qué sirve |
|---------|----------------|
| `index.html` | Estructura y texto. **Vercel busca este nombre**: debe llamarse así. |
| `style.css` | Colores y diseño. |
| `script.js` | Comportamiento (el botón contador). |

> `index.html` en la raíz es lo único obligatorio. Sin él, Vercel mostrará un error 404.

## Pasos

1. Abre la carpeta del proyecto.
2. Haz doble clic en `index.html`. Se abre en el navegador.
3. Pulsa el botón.

**Debes ver:** el título "¡Hola, mundo!" y un botón cuyo número sube al pulsarlo.

## Opcional: servidor local

Un servidor local imita mejor cómo se verá en internet.

```powershell
npx serve .
```

Abre la dirección que aparece (normalmente `http://localhost:3000`). Para parar: `Ctrl + C`.

## ¿Doble clic o `npx serve`?

- **Doble clic:** el navegador lee el archivo del disco (`file:///C:/...`). No hay servidor.
- **`npx serve`:** un programa levanta un servidor HTTP local y el navegador pide `http://localhost:3000`, igual que haría con una web en internet.

Para esta web el resultado es el mismo. Pero con `http://` te comportas como en producción (Vercel): rutas, mayúsculas/minúsculas y `/` → `index.html`. Con `file://` el navegador bloquea cosas como `fetch()` a archivos locales o módulos ES (`type="module"`).

### Qué significa `npx serve .`

| Parte | Significado |
|-------|-------------|
| `npx` | Viene con Node.js. Ejecuta un paquete de npm sin instalarlo de forma global. |
| `serve` | Paquete servidor de archivos estáticos (creado por Vercel). |
| `.` | Carpeta actual. |

### ¿Tiene que ver con Vite?

Se parecen, pero no son lo mismo. Ambos sirven archivos por HTTP; Vite además empaqueta y transforma el código.

| | `serve` | Vite |
|---|---|---|
| Sirve archivos por HTTP | Sí | Sí |
| Empaqueta (bundle) | No | Sí |
| Transforma código (TypeScript, JSX, Vue) | No | Sí |
| Recarga en vivo al editar | No | Sí |
| Genera carpeta `dist` para producción | No | Sí (`vite build`) |

Nuestra web es HTML/CSS/JS plano: no hay nada que transformar, por eso `serve` basta y Vercel la publica **sin build**. Con Vite, Vercel ejecutaría `vite build` y publicaría la carpeta `dist/`; ahí sí importan *Build Command* y *Output Directory*.

## Errores típicos

- **Página sin estilos:** `style.css` no está en la misma carpeta que `index.html`.
- **Botón no responde:** revisa que `script.js` esté en la misma carpeta.

## Resumen

- Tu web = 3 archivos en una carpeta.
- `index.html` en la raíz es obligatorio.
- Ya funciona en local; falta publicarla.

Siguiente: [Paso 2 · GitHub](02-github.md)
