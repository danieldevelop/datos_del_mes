# Datos del Mes | APX Schooll - Nivel 0

Aplicación que muestra información importante de un mes en particular. Para esto, la aplicación recibe 
el **_numero del mes_** como argumento y muestra la siguiente información:

- Número del mes
- Nombre del mes.
- Cantidad de días que tiene el mes.
- Evento del mes.

## **⚠️ IMPORTANTE**

Es necesario contar minimamente con la última versión estable de NodeJS y NPM. Asegúrate de contar con 
ella para poder instalar correctamente las dependecias necesarias para correr el proyecto. Actualmente 
las versiónes necesarias son:

-  **Node**: 16.20.2 o mayor
-  **NPM**:  8.19.4 o mayor

Para verificar que versión tienes instalada:

```bash
node -v
npm -v
```

## **📋 PARA COMENZAR...**

1. Deberás forkear este repositorio para tener una copia del mismo en tu cuenta personal de GitHub.

2. Clona el repositorio en tu computadora para comenzar a trabajar. En tu terminal, ejecuta el siguiente comando:

   ```bash
   git clone https://github.com/danieldevelop/datos_del_mes.git
   ```

3. Una vez que hayas clonado el repositorio, deberás instalar las dependencias necesarias para correr el proyecto. 
    En tu terminal, ejecuta el siguiente comando:

   ```bash
    npm install
    ```

## **📁 INSTRUCCIONES**

1. Una vez que hayas instalado las dependencias, podrás correr el proyecto. En tu terminal, ejecuta el siguiente comando:

   ```bash
    node index.js 3
    ```
2. Si todo ha salido bien, deberías ver en tu terminal la información del mes que has ingresado como argumento.

    - Nunmero del mes: 3
    - Nombre del mes: Marzo
    - Cantidad de días: 31
    - Evento del mes: Día de la Mujer y Semana Santa

## **📦 ESTRUCTURA DEL PROYECTO**

El proyecto cuenta con la siguiente estructura de archivos:

```bash
.
├── node_modules > (dependencias)
├── calendario2024.js > (archivo con la información de los meses)
├── index.js > (archivo principal)
├── package.json
├── package-lock.json
└── README.md
```

### License

**Free Software** | [MIT](https://opensource.org/licenses/MIT)