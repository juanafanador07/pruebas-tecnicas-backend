import { expect, test } from "vitest";
import { groupAnagrams } from "./groupAnagrams";

test("Basic anagrams", () => {
  const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const output = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];

  expect(groupAnagrams(input)).toStrictEqual(output);
});

test("One element", () => {
  const input = ["eat"];
  const output = [["eat"]];

  expect(groupAnagrams(input)).toStrictEqual(output);
});

test("Has no anagram", () => {
  const input = ["abc", "def", "ghi", "jkh"];
  const output = input.map((i) => [i]);
  expect(groupAnagrams(input)).toStrictEqual(output);
});

test("Empty List", () => {
  expect(groupAnagrams([])).toStrictEqual([]);
});

test("Duplicates", () => {
  const input = ["abc", "bca", "abc"];
  const output = [["abc", "bca", "abc"]];

  expect(groupAnagrams(input)).toStrictEqual(output);
});

test("Mixed grouped and single", () => {
  const input = ["abc", "def", "cab", "xyz"];
  const output = [["abc", "cab"], ["def"], ["xyz"]];

  expect(groupAnagrams(input)).toStrictEqual(output);
});

test("Empty strings", () => {
  const input = ["", "", "a"];
  const output = [["", ""], ["a"]];

  expect(groupAnagrams(input)).toStrictEqual(output);
});

test("Long strings", () => {
  const input = [
    "aaaaaaaaaabbbbbbbbbbcccccccccc",
    "ccccccccccbbbbbbbbbbaaaaaaaaaa",
    "xyzxyzxyzxyzxyzxyzxyzxyzxyzxyz",
    "zyxzyxzyxzyxzyxzyxzyxzyxzyxzyx",
  ];

  const output = [
    ["aaaaaaaaaabbbbbbbbbbcccccccccc", "ccccccccccbbbbbbbbbbaaaaaaaaaa"],
    ["xyzxyzxyzxyzxyzxyzxyzxyzxyzxyz", "zyxzyxzyxzyxzyxzyxzyxzyxzyxzyx"],
  ];

  expect(groupAnagrams(input)).toStrictEqual(output);
});

test("Match uppercase and lowercase", () => {
  const input = ["Eat", "Tea", "ate", "BAT", "tab"];

  const output = [
    ["Eat", "Tea", "ate"],
    ["BAT", "tab"],
  ];

  expect(groupAnagrams(input)).toStrictEqual(output);
});

test("Ignore Special characters", () => {
  const input = ["abc!", "cba", "b@a#c", "xyz", "zyx!!"];

  const output = [
    ["abc!", "cba", "b@a#c"],
    ["xyz", "zyx!!"],
  ];

  expect(groupAnagrams(input)).toStrictEqual(output);
});
