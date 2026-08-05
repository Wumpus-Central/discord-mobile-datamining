// _runtime/00639_baseTrim.js
import { trimmedEndIndex } from "00640_trimmedEndIndex.js";
const re2 = /^\s+/;

export default function baseTrim(arr) {
  let replaced = arr;
  if (arr) {
    replaced = arr.slice(0, trimmedEndIndex(arr) + 1).replace(closure_2, "");
    const str = arr.slice(0, trimmedEndIndex(arr) + 1);
  }
  return replaced;
};