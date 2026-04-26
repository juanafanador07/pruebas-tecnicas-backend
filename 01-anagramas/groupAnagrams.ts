export function groupAnagrams(arr: string[]) {
  const map = new Map<string, string[]>();

  for (const str of arr) {
    const key = getKey(str);
    const anagrams = map.get(key) || [];
    anagrams.push(str);
    map.set(key, anagrams);
  }

  return Array.from(map.entries()).map((v) => v[1]);
}

function getKey(str: string) {
  return str.split("").map(sanitizeChar).sort().join("");
}

function sanitizeChar(char: string) {
  if (char.length === 0) {
    return "";
  }

  let ascii = char.charCodeAt(0);

  // Convertir Mayusculas
  if (ascii >= 65 && ascii <= 90) {
    ascii += 32;
  }

  // Ignorar todo lo que no sean letras minusculas
  if (ascii < 97 || ascii > 122) {
    return "";
  }

  return ascii;
}
