# ***Reto 3:*** _La zebra de colores_

## ***Problema*** 🧠

TMChein ya se está preparando para las fiestas y quiere empezar a decorar la casa con las luces de navidad.

Quiere comprar una pero sus favoritas son las que tienen dos colores que se van alternando. Como una zebra de dos colores.

Ha hecho que las luces sean Arrays y cada posición un color. Y quiere saber qué luces tienen las zebras más largas y cuál es el último color de esa sucesión de colores. Por ejemplo:

```js
['red', 'blue', 'red', 'blue', 'green'] -> 4, blue
['green', 'red', 'blue', 'gray'] -> 2, gray
['blue', 'blue', 'blue', 'blue'] -> 1, blue
['red', 'green', 'red', 'green', 'red', 'green'] -> 6, green
['blue', 'red', 'blue', 'red', 'gray'] -> 4, red
['red', 'red', 'blue', 'red', 'red', 'red', 'green'] -> 3, red
['red', 'blue', 'red', 'green', 'red', 'green', 'red', 'green'] -> 6, green
```

Fíjate que sólo quiere saber la longitud de cuando dos colores se van alternando.

## ***Pistas*** 🕵️

- Una vez que se rompe la alternancia de los dos colores, deja de contar.
- Recuerda que una zebra de colores es cuando dos colores se alternan una y otra vez.
- Si se repite un color en la posición siguiente o es un tercer color, entonces se deja de contar.
- Lo que queremos calcular es la tira de colores más larga en forma de zebra y el último color de esa tira de colores.

## ***Cómo enviar la solución*** 🥇

Usa el comando "submit" para enviar tu solución con el número de la tira + el último color. Por ejemplo:

```properties
$ submit 62@red
```
