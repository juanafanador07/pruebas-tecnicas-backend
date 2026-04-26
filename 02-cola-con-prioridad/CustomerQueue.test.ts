import { expect, test } from "vitest";
import { CustomerQueue } from "./CustomerQueue";

test("Enqueue a customer", () => {
  const cq = new CustomerQueue();
  cq.queue("A", 3);
  expect(cq.dequeue()).toEqual("A");
});

test("Dequeue a customer from an empty queue", () => {
  const cq = new CustomerQueue();
  expect(cq.dequeue()).toEqual(null);
});

test("Dequeue till empty", () => {
  const cq = new CustomerQueue();
  cq.queue("A", 1);
  cq.queue("B", 1);
  expect(cq.dequeue()).toEqual("A");
  expect(cq.dequeue()).toEqual("B");
  expect(cq.dequeue()).toEqual(null);
});

test("Enqueue customers of same priority", () => {
  const cq = new CustomerQueue();
  cq.queue("A", 1);
  cq.queue("B", 1);
  cq.queue("C", 1);
  cq.queue("D", 1);
  cq.queue("E", 1);
  cq.queue("F", 1);
  cq.queue("G", 1);
  cq.queue("H", 1);
  cq.queue("I", 1);
  cq.queue("J", 1);
  cq.queue("K", 1);
  expect(cq.dequeue()).toEqual("A");
  expect(cq.dequeue()).toEqual("B");
  expect(cq.dequeue()).toEqual("C");
  expect(cq.dequeue()).toEqual("D");
  expect(cq.dequeue()).toEqual("E");
  expect(cq.dequeue()).toEqual("F");
  expect(cq.dequeue()).toEqual("G");
  expect(cq.dequeue()).toEqual("H");
  expect(cq.dequeue()).toEqual("I");
  expect(cq.dequeue()).toEqual("J");
  expect(cq.dequeue()).toEqual("K");
});

test("Enqueue customers of different priority", () => {
  const cq = new CustomerQueue();
  cq.queue("A", 3);
  cq.queue("B", 2);
  cq.queue("C", 1);
  expect(cq.dequeue()).toEqual("C");
  expect(cq.dequeue()).toEqual("B");
  expect(cq.dequeue()).toEqual("A");
});

test("Mix priority and order", () => {
  const cq = new CustomerQueue();
  cq.queue("A", 3);
  cq.queue("B", 2);
  cq.queue("C", 1);
  cq.queue("D", 2);
  expect(cq.dequeue()).toEqual("C");
  expect(cq.dequeue()).toEqual("B");
  expect(cq.dequeue()).toEqual("D");
  expect(cq.dequeue()).toEqual("A");
  expect(cq.dequeue()).toEqual(null);
});

test("Enqueue and dequeue", () => {
  const cq = new CustomerQueue();
  cq.queue("A", 3);
  cq.queue("B", 2);
  cq.queue("C", 1);
  expect(cq.dequeue()).toEqual("C");
  expect(cq.dequeue()).toEqual("B");
  cq.queue("D", 2);
  cq.queue("E", 1);
  expect(cq.dequeue()).toEqual("E");
  expect(cq.dequeue()).toEqual("D");
  cq.queue("F", 3);
  expect(cq.dequeue()).toEqual("A");
  expect(cq.dequeue()).toEqual("F");
  expect(cq.dequeue()).toEqual(null);
});

test("Threat out of range priority as regular customer", () => {
  const cq = new CustomerQueue();
  cq.queue("A", 4);
  cq.queue("B", 3);
  cq.queue("C", 2);
  cq.queue("D", 1);
  cq.queue("E", 0);
  expect(cq.dequeue()).toEqual("D");
  expect(cq.dequeue()).toEqual("C");
  expect(cq.dequeue()).toEqual("A");
  expect(cq.dequeue()).toEqual("B");
  expect(cq.dequeue()).toEqual("E");
});
