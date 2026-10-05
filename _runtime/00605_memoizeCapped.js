// === Module 605: memoizeCapped ===

// Module 605 (memoizeCapped)
import memoize from "memoize" /* 606 */;


export default function memoizeCapped(arg0) {
  const tmp = memoize(arg0, (arg0) => {
    if (500 === cache.size) {
      cache.clear();
    }
    return arg0;
  });
  const cache = tmp.cache;
  return tmp;
};