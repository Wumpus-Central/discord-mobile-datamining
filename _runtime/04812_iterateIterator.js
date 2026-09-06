// === Module 4812: iterateIterator ===

// Module 4812 (iterateIterator)

export default function iterateIterator(next) {
  if (next) {
    if (typeof next.next === "function") {
      if (arguments.length > 1) {
        if (typeof arguments[1] !== "function") {
          const tmp8 = new TypeError("`callback`, if provided, must be a function");
          throw tmp8;
        }
      }
      let items = tmp;
      if (!undefined) {
        items = [];
      }
      let iter = next.next();
      if (iter) {
        if (!iter.done) {
          while (true) {
            if (tmp) {
              let tmpResult = tmp(iter.value);
            } else {
              let arr = items.push(iter.value);
            }
            let iter2 = next.next();
            if (!iter2) {
              break;
            } else {
              iter = iter2;
              if (iter2.done) {
                break;
              }
            }
          }
        }
      }
      return undefined ? undefined : items;
    }
  }
  throw new TypeError("iterator must be an object with a `next` method");
};