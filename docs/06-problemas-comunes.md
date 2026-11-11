# Paso 6 · Problemas comunes

## 404: NOT_FOUND

- **Causa:** no hay `index.html` en la raíz, o está dentro de una subcarpeta.
- **Solución:** mueve `index.html` a la raíz del repo, o en Vercel → Settings → General → **Root Directory** indica la subcarpeta.

## Subí cambios y no se ven

1. Comprueba que hiciste `git push` (mira GitHub).
2. En Vercel → **Deployments**: ¿está en **Ready**? ¿O en **Error**?
3. Recarga sin caché: `Ctrl + F5`.
4. ¿Hiciste push a `main`? Otra rama solo crea preview.

## El despliegue falla (Error)

Abre el despliegue y lee **Build Logs**. Para esta web estática no debería haber build; si ves error, revisa que **Build Command** y **Output Directory** estén vacíos.

## Web sin estilos o JS en producción

- Los nombres distinguen mayúsculas: `Style.css` ≠ `style.css`. En Windows funciona en local, en Vercel no.
- Rutas relativas: usa `href="style.css"`, no `C:\...`.

## No encuentro mi repo en Vercel

GitHub → Settings → Applications → Vercel → **Configure** y da acceso al repo.

## Repo privado

Funciona en plan Hobby, pero Vercel necesita permiso sobre ese repo (ver punto anterior).

## Dominio propio (opcional)

1. Compra un dominio en cualquier registrador.
2. Vercel → proyecto → **Settings → Domains → Add**.
3. Sigue las instrucciones DNS que muestra Vercel.

## Configuración avanzada (opcional)

Puedes añadir un archivo `vercel.json` para redirecciones o cabeceras. Esta web **no lo necesita**: Vercel la detecta sola.

## Resumen rápido

| Síntoma | Mira primero |
|---------|--------------|
| 404 | `index.html` en raíz |
| No cambia | `git push` + Deployments |
| Sin estilos | Mayúsculas y rutas |
| No veo repo | Permisos GitHub App |

Volver al [índice](../README.md)
