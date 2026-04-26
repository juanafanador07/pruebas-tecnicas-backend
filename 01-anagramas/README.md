# 01. Anagramas

## Contexto

Imagina que estás construyendo una herramienta para analizar grandes volúmenes de texto y necesitas una funcionalidad que agrupe palabras que sean anagramas entre sí.

## Problema

Dado un arreglo/lista de palabras, agrupa las que son anagramas en sublistas.

Input:

```
["eat", "tea", "tan", "ate", "nat", "bat"]
```

Output:

```
[
["eat", "tea", "ate"],
["tan", "nat"],
["bat"]
]
```

## Requisitos técnicos

- Debe implementarse una función principal que reciba una lista de palabras (`string[]` o `List[str]`) y retorne una lista de listas de anagramas.
- El algoritmo debe ser eficiente. Se valorará que no sea de complejidad cuadrática innecesaria.
- Se valorará el uso de estructuras de datos apropiadas (Map, defaultdict, etc.)
- Se debe escribir al menos una prueba unitaria para validar el funcionamiento.
- Código limpio, con nombres claros y comentarios si es necesario.

## Solución

Primero se crea un `Map<string, string[]>`, y se empiezan a recorrer las palabras.

Para cada palabra, se genera una `key` conviertiendo sus letras a minúscula y ordenándolas alfabéticamente.

Con esa `key`, se busca en el `Map<string, string[]>` para obtener el arreglo de anagramas para esa palabra. Si no se encuentra, se inicializa un arreglo vacio.

Después, se agrega la palabra al arreglo encontrado.

Al finalizar el recorrido, se transforma el `Map<string, string[]>` en un arreglo, el cual representa la lista final de grupos de anagramas.

## Ejecución

```bash
git clone https://github.com/juanafanador07/pruebas-tecnicas-backend.git
npm install
npm run test:anagram
```
