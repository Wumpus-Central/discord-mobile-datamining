// === Module 1572: StaticContainer ===

// Module 1572 (StaticContainer)
import noop from "module_19" /* 19 */;


export const StaticContainer = noop.memo(function StaticContainer(children) {
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
        if (arg0[tmp5] !== arg1[tmp5]) {
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