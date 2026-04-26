export class Heap {
  private heap: number[] = [];

  private heapifyUp(index: number) {
    const parentIndex = Math.floor(index / 2);

    if (this.heap[index] < this.heap[parentIndex]) {
      this.swap(index, parentIndex);

      this.heapifyUp(parentIndex);
    }
  }

  private heapifyDown(index: number) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;

    const value = this.heap[index];
    const leftValue = this.heap[leftIndex] ?? Number.MAX_SAFE_INTEGER;
    const rightValue = this.heap[rightIndex] ?? Number.MAX_SAFE_INTEGER;

    const smallestChildIndex = leftValue <= rightValue ? leftIndex : rightIndex;
    const smallestChildValue = Math.min(leftValue, rightValue);

    if (value > smallestChildValue) {
      this.swap(index, smallestChildIndex);
      this.heapifyDown(smallestChildIndex);
    }
  }

  private swap(a: number, b: number) {
    const val = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = val;
  }

  insert(value: number) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  remove() {
    if (this.heap.length === 0) return null;

    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();

    if (this.heap.length > 0) {
      this.heapifyDown(0);
    }

    return item;
  }
  peek() {
    if (this.heap.length === 0) return null;

    return this.heap[0];
  }
}
