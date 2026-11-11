# Paso 3 · Desplegar desde el dashboard de Vercel

**Objetivo:** publicar tu web con unos pocos clics y obtener tu URL.

## Pasos

### 1. Crear cuenta

1. Ve a [vercel.com/signup](https://vercel.com/signup).
2. Elige el plan **Hobby** (gratuito, para proyectos personales).
3. Pulsa **Continue with GitHub** y autoriza. Así Vercel puede ver tus repos.

### 2. Importar el proyecto

1. En el dashboard pulsa **Add New… → Project**.
2. En **Import Git Repository** busca `mi-primera-web-vercel`.
3. Pulsa **Import**.
   - Si no aparece, pulsa **Adjust GitHub App Permissions** y da acceso a ese repo.

### 3. Configurar (casi nada)

| Campo | Valor |
|-------|-------|
| Project Name | `mi-primera-web-vercel` (será parte de la URL) |
| Framework Preset | **Other** (Vercel lo detecta solo) |
| Root Directory | `./` |
| Build Command | vacío |
| Output Directory | vacío |

Nuestra web es estática: no hay nada que construir.

### 4. Desplegar

1. Pulsa **Deploy**.
2. Espera unos segundos. Vercel copia tus archivos y los publica.
3. Aparece una pantalla de felicitación con una miniatura de tu web.
4. Pulsa la miniatura o **Visit**.

**Debes ver:** tu página en una URL tipo `https://mi-primera-web-vercel.vercel.app`.

## Qué pasó por dentro

```
Vercel lee tu repo en GitHub
   -> copia los archivos
   -> los reparte por su CDN
   -> te da la URL pública
```

Además, Vercel quedó conectado a tu repo: **cada push futuro se despliega solo** (ver [Paso 5](05-actualizar.md)).

## Comprobación

- Abre la URL en el móvil o pídesela a un amigo.
- Pulsa el botón: si cuenta, JS funciona en producción.

## Errores típicos

- **404 NOT_FOUND:** falta `index.html` en la raíz del repo.
- **No veo mi repo:** da permisos en GitHub App Permissions.

Más en [Problemas comunes](06-problemas-comunes.md).

## Resumen

- Cuenta Vercel con GitHub → Add New Project → Import → Deploy.
- Resultado: URL pública `.vercel.app`.
- Vercel vigila el repo y redespliega en cada push.

Siguiente: [Paso 4 · CLI](04-vercel-cli.md) (opcional) o [Paso 5 · Actualizar](05-actualizar.md)
