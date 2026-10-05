// _runtime/00554_baseTrim.js
import trimmedEndIndex from "00555_trimmedEndIndex.js";

const re2 = /^\s+/;

export default function baseTrim(arr) {
  let replaced = arr;
  if (replaced) {
    const str = arr.slice(0, trimmedEndIndex(arr) + 1);
    replaced = str.replace(re2, "");
  }
  return replaced;
}
