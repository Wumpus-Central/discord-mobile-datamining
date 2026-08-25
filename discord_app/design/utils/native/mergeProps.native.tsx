// === Module 4105: chainCallbacks ===

// Module 4105 (chainCallbacks)
import set from "set" /* 2 */;

function chainCallbacks(arg0, arg1) {
  closure_0 = [...arguments];
  return () => {
    const items = [...arguments];
    for (const item10008 of closure_0) {
      if (typeof item10008 === "function") {
        let tmp2 = item10008;
        let items1 = [];
        let tmp3 = items1;
        let tmp4 = items;
        let num = 0;
        let arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
        let tmp6 = tmp;
        let tmp7 = items1;
        let applyResult = HermesBuiltin.apply(items1, undefined);
      }
      continue;
    }
  };
}
const result = set.fileFinishedImporting("design/utils/native/mergeProps.native.tsx");

export { chainCallbacks };
export const mergeRefs = function mergeRefs(ref, ref2) {
  const items = [...arguments];
  return 1 === items.length ? items[0] : ((current) => {
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (typeof nextResult === "function") {
        let tmp5 = nextResult;
        let tmp3Result = tmp3(current);
      } else {
        let tmp7 = nextResult;
        if (null != tmp3) {
          let tmp4 = nextResult;
          tmp3.current = current;
        }
      }
      continue;
    }
  });
};
export const mergeProps = function mergeProps(inputProps, focusProps, arg2) {
  const items = [...arguments];
  const obj = {};
  const merged = Object.assign(items[0]);
  for (let num = 1; num < items.length; num = num + 1) {
    let tmp2 = items[num];
    let tmp3 = tmp2;
    let tmp4 = num;
    for (const key10021 in tmp2) {
      let tmp7 = key10021;
      let obj2 = obj[key10021];
      let tmp8 = tmp2[key10021];
      if (typeof obj2 === "function") {
        if (typeof tmp8 === "function") {
          if ("o" === key10021[0]) {
            if ("n" === key10021[1]) {
              if (key10021.charCodeAt(2) >= 65) {
                if (key10021.charCodeAt(2) <= 90) {
                  let tmp6 = chainCallbacks;
                  obj[key10021] = chainCallbacks(obj2, tmp8);
                  continue;
                }
              }
            }
          }
        }
      }
      if ("style" === key10021) {
        let combined = obj2.concat(tmp8);
      } else {
        combined = obj2;
        if (undefined !== tmp8) {
          combined = tmp8;
        }
      }
      obj[key10021] = combined;
      continue;
    }
  }
  return obj;
};