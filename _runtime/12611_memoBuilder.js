// _runtime/12611_memoBuilder.js

export const memoBuilder = function memoBuilder() {
  let closure_0 = typeof WeakSet === "function";
  if (closure_0) {
    const _WeakSet = WeakSet;
    const self = this;
    const self2 = this;
    let weakSet = new WeakSet();
  } else {
    weakSet = [];
  }
  const items = [
    function memoize(arg0) {
      if (closure_0) {
        let flag3 = weakSet.has(arg0);
        if (!flag3) {
          weakSet.add(arg0);
          flag3 = false;
        }
        return flag3;
      } else {
        let num = 0;
        let arr2 = weakSet;
        if (0 < weakSet.length) {
          while (weakSet[num] !== arg0) {
            num = num + 1;
            arr2 = weakSet;
          }
          return true;
        }
        arr2.push(arg0);
        return false;
      }
    },
    function unmemoize(arg0) {
      if (closure_0) {
        weakSet.delete(arg0);
      } else {
        let num = 0;
        if (0 < weakSet.length) {
          while (weakSet[num] !== arg0) {
            num = num + 1;
          }
          weakSet.splice(num, 1);
        }
      }
    },
  ];
  return items;
};
