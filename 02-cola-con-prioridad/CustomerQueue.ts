import { Customer } from "./Customer";
import { Heap } from "./Heap";
import { Queue } from "./Queue";

export class CustomerQueue {
  heap = new Heap();
  map = new Map<number, Queue<Customer>>();

  queue(name: string, priority: number) {
    let pri = priority;

    // Manejar prioridades fuera de rango como clientes regulares
    if (priority < 1 || priority > 3) {
      pri = 3;
    }

    const customer = new Customer(name);
    let queue = this.map.get(pri);

    if (!queue) {
      queue = new Queue<Customer>();
      this.heap.insert(pri);
      this.map.set(pri, queue);
    }

    queue.enqueue(customer);
  }

  dequeue() {
    const priority = this.heap.peek();
    if (priority === null) return null;

    const queue = this.map.get(priority);
    if (!queue) return null;

    const customer = queue.dequeue();

    if (!customer) return null;

    if (queue.empty()) {
      this.heap.remove();
      this.map.delete(priority);
    }

    return customer.getName();
  }
}
