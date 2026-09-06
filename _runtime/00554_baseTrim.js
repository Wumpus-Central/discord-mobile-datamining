// _runtime/00554_baseTrim.js
import trimmedEndIndex from "00555_trimmedEndIndex.js";

const re2 = /^\s+/;

export default function baseTrim(arr) {
  let replaced = arr;
  if (arr) {
    replaced = arr.slice(0, trimmedEndIndex(arr) + 1).replace(re2, "");
    const str = arr.slice(0, trimmedEndIndex(arr) + 1);
  }
  return replaced;
}
