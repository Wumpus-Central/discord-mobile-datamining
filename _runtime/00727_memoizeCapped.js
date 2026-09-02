// === Module 727: memoizeCapped ===

// Module 727 (memoizeCapped)

export default function memoizeCapped(arg0) {
  const tmp = cache(728)(arg0, (arg0) => {
    if (500 === cache.size) {
      cache.clear();
    }
    return arg0;
  });
  cache = tmp.cache;
  return tmp;
};