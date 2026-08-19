// _runtime/01418_availableTypedArrays.js
import _mod1419 from "metro/01419__.js";

if (typeof globalThis !== "undefined") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  const items = [];
  for (let num = 0; num < _mod1419.length; num = num + 1) {
    if (typeof global[_mod1419[num]] === "function") {
      items[items.length] = _mod1419[num];
    }
  }
  return items;
};