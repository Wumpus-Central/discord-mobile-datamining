// _runtime/metro/00593__.js
import memoize from "../00594_memoize.js";

export default function memoizeCapped(arg0) {
  const tmp = memoize(arg0, (arg0) => {
    if (500 === cache.size) {
      cache.clear();
    }
    return arg0;
  });
  const cache = tmp.cache;
  return tmp;
}
