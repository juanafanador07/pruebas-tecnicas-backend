export class Node<T> {
  private value: T;
  private next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }

  setValue(value: T) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  setNext(next: Node<T> | null) {
    this.next = next;
  }

  getNext() {
    return this.next;
  }
}
