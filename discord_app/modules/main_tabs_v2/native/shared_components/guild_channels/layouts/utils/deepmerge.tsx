// === Module 10058: merge ===

// Module 10058 (merge)
import obj132 from "obj132" /* 2 */;

function merge() {
  let items = [...arguments];
  return items.reduce((acc, item, index) => {
    closure_0 = acc;
    closure_1 = item;
    if (Array.isArray(item)) {
      const _TypeError = TypeError;
      const typeError = new TypeError("Arguments provided to ts-deepmerge must be objects, not arrays.");
      throw typeError;
    } else {
      let _Object = Object;
      const keys = Object.keys(item);
      item = keys.forEach((item, index) => {
        const items = ["__proto__", "constructor", "prototype"];
        if (!items.includes(item)) {
          let tmp = globalThis;
          const _Array = Array;
          if (Array.isArray(acc[item])) {
            const _Array2 = Array;
            let tmp3 = item;
            if (Array.isArray(item[item])) {
              if (acc.options.mergeArrays) {
                const _Array3 = tmp.Array;
                tmp = new.target;
                const set = new tmp.Set(acc[item].concat(tmp3[item]));
                tmp3 = set;
                let fromResult = _Array3.from(set);
              } else {
                fromResult = tmp3[item];
              }
              acc[item] = fromResult;
            }
          }
          let flag = false;
          if (typeof acc[item] === "object") {
            flag = false;
            if (null !== tmp4) {
              const _Object = Object;
              if (typeof Object.getPrototypeOf === "function") {
                const _Object2 = Object;
                const prototypeOf = Object.getPrototypeOf(tmp4);
                const _Object3 = Object;
                flag = prototypeOf === Object.prototype || null === prototypeOf;
              } else {
                const _Object7 = Object;
                const call = toString.call;
                flag = "[object Object]" === (typeof call === "unknown" ? toString() : call(tmp4));
              }
            }
          }
          if (flag) {
            let flag2 = false;
            if (typeof item[item] === "object") {
              flag2 = false;
              if (null !== tmp8) {
                const _Object4 = Object;
                if (typeof Object.getPrototypeOf === "function") {
                  const _Object5 = Object;
                  const prototypeOf1 = Object.getPrototypeOf(tmp8);
                  const _Object6 = Object;
                  flag2 = prototypeOf1 === Object.prototype || null === prototypeOf1;
                } else {
                  const _Object8 = Object;
                  const call2 = toString2.call;
                  flag2 = "[object Object]" === (typeof call2 === "unknown" ? toString2() : call2(tmp8));
                }
              }
            }
            if (flag2) {
              acc[item] = acc(acc[item], item[item]);
            }
          }
          acc[item] = item[item];
        }
      });
      return acc;
    }
  }, {});
}
let obj = { mergeArrays: true };
merge.options = obj;
merge.withOptions = (arg0) => {
  const substr = [...arguments].slice();
  obj = { mergeArrays: true };
  const merged = Object.assign(arg0);
  merge.options = obj;
  merge.options = obj;
  return merge(...substr);
};
const result = obj132.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/utils/deepmerge.tsx");

export default merge;