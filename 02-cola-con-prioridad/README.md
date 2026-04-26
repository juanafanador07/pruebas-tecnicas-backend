# 01. Anagramas

## Contexto

Estás construyendo un módulo para manejar el sistema de atención al cliente de un banco. Los clientes llegan a una cola para ser atendidos, pero no todos tienen la misma prioridad: hay clientes regulares, preferenciales y VIP.

El sistema debe procesar a los clientes en orden de prioridad, y si dos clientes tienen la misma prioridad, por orden de llegada.

## Problema

Implementa una clase CustomerQueue con los siguientes métodos:

```python
class CustomerQueue:
    def enqueue(self, name: str, priority: int) -> None:
        ...

    def dequeue(self) -> Optional[str]:
        ...
```

## Requisitos técnicos

- La prioridad más alta es el número más bajo (es decir, 1 es VIP, 2 es preferencial, 3 es regular).
- `enqueue(nombre, prioridad)` agrega un cliente a la cola con su nivel de prioridad.
- `dequeue()` remueve y retorna el nombre del siguiente cliente a atender, según las reglas de prioridad.
- Si la cola está vacía, `dequeue()` debe retornar None.

## Solución

Se implementa una cola de prioridad a través de tres estructuras de datos:

- Una cola simple `Queue<Customer>` para almacenar el listado de clientes de que comparten un mismo nivel de prioridad
- Un mapa `Map<number, Queue<Customer>>` donde la `key` es la prioridad y el valor es la cola asociada, permite acceder rápidamente a los clientes de cada nivel de prioridad.
- Un min-heap que guarda los niveles de prioridad, facilitando la obtención de la prioridad más alta (la menor en valor).

### Inserción

Primero se consulta el `Map` para obtener la `Queue` correspondiente al nivel de prioridad del cliente.

- Si ya existe, se agrega a la cola.
- Si no existe, se crea una nueva cola, donde se inserta el `Customer`. Luego se registra la prioridad en el `Heap`, y en el `Map` se guarda la cola recién creada usando como `key` el nivel de prioridad.

### Eliminación

Se consulta el nivel de prioridad en el `Map`

- Si la cola no existe, se devuelve `null`.
- Si la cola existe, se desencola un `Customer` y se retorna.

Se debe tener en cuenta que al momento de desencolar, si la cola queda vacia, se debe eliminar el nivel de prioridad del `Heap` y del `Map`

## Ejecución

```bash
git clone https://github.com/juanafanador07/pruebas-tecnicas-backend.git
npm install
npm run test:priority-queue
```
