# Paso 5 · Actualizar tu web

**Objetivo:** cambiar la web y ver el cambio online. Entender preview, producción y rollback.

## Ciclo de trabajo

```
editar archivo -> git add -> git commit -> git push -> Vercel despliega solo -> recarga la URL
```

## Ejercicio

1. Abre `index.html`. Cambia `v1` por `v2` y la fecha del pie.
2. Guarda.
3. Envía el cambio:
   ```powershell
   git add .
   git commit -m "Actualizo a v2"
   git push
   ```
4. En el dashboard de Vercel → pestaña **Deployments**: aparece un despliegue nuevo en curso.
5. Cuando diga **Ready**, recarga tu URL (`Ctrl + F5`).

**Debes ver:** "Versión: v2".

> Si usas solo la CLI: ejecuta `vercel --prod` en lugar del `push`.

## Preview deployments

Si haces push a **otra rama** (no `main`), Vercel crea una **preview** con URL propia:

```powershell
git checkout -b prueba-color
# edita style.css
git add .
git commit -m "Pruebo otro color"
git push -u origin prueba-color
```

- La rama `main` → **producción**.
- Cualquier otra rama → **preview** (la ves en Deployments, sin tocar la web oficial).

Cuando te guste, fusiona la rama en `main` (Pull Request en GitHub) y pasará a producción.

## Rollback (volver atrás)

¿Rompiste algo? En **Deployments**:

1. Busca un despliegue anterior que funcionaba.
2. Pulsa los tres puntos `⋯` → **Promote to Production** (o **Instant Rollback**).

La web vuelve a esa versión en segundos.

## Resumen

- `push` a `main` = nueva versión en producción.
- `push` a otra rama = preview.
- Cada despliegue queda guardado: puedes volver atrás.

Siguiente: [Paso 6 · Problemas comunes](06-problemas-comunes.md)
