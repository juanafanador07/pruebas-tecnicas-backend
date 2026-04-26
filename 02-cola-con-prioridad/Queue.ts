import { Node } from "./Node";

export class Queue<T> {
  private first: Node<T> | null = null;
  private last: Node<T> | null = null;
  private size = 0;

  enqueue(value: T) {
    const newNode = new Node(value);

    if (this.first === null || this.last === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.setNext(newNode);
      this.last = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (this.first === null || this.last === null) {
      return null;
    }

    const oldFirst = this.first;
    this.first = oldFirst.getNext();

    if (this.first === null) {
      this.last = null;
    }

    this.size--;
    return oldFirst.getValue();
  }

  empty() {
    return this.size === 0;
  }
}
