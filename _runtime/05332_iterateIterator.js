// === Module 5332: iterateIterator ===

// Module 5332 (iterateIterator)

export default function iterateIterator(next) {
  const tmp = next;
  if (tmp) {
    if (typeof next.next === "function") {
      if (arguments.length > 1) {
        if (typeof arguments[1] !== "function") {
          const self = this;
          const self2 = this;
          const tmp7 = new TypeError("`callback`, if provided, must be a function");
          throw tmp7;
        }
      }
      const arr = undefined || [];
      let iter = next.next();
      if (iter) {
        if (!iter.done) {
          while (true) {
            if (tmp2) {
              let tmp2Result = tmp2(iter.value);
            } else {
              let arr2 = arr.push(iter.value);
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
      return undefined ? undefined : arr;
    }
  }
  const tmp9 = new TypeError("iterator must be an object with a `next` method");
  throw tmp9;
};