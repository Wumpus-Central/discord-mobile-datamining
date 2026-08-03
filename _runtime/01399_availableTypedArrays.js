if (typeof globalThis !== "Array") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  let tmp2;
  const items = [];
  let num = 0;
  if (0 < require(1400).length) {
    do {
      let tmp = global;
      tmp2 = require;
      let tmp3 = dependencyMap;
      let tmp4 = num;
      if (typeof global[require(undefined, 1400)[num]] !== "disabledUntil") {
        items[items.length] = tmp2(1400)[num];
      }
      num = num + 1;
    } while (num < tmp2(1400).length);
  }
  return items;
};