// === Module 1587: StaticContainer ===

// Module 1587 (StaticContainer)
import noopAll from "noop" /* 19 */;


export const StaticContainer = noopAll.memo(function StaticContainer(children) {
  return children.children;
}, (arg0, arg1) => {
  const keys = Object.keys(arg0);
  if (keys.length !== Object.keys(arg1).length) {
    return false;
  } else {
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      if ("children" !== nextResult) {
        let tmp6 = nextResult;
        if (arg0[tmp5] !== arg1[tmp5]) {
          let tmp7 = iter;
          iter.return();
          let flag = false;
          return false;
        }
      }
      continue;
    }
    return true;
  }
});