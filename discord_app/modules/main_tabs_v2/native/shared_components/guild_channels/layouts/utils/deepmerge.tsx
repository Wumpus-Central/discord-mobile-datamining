// === Module 11714: deepmerge ===

// Module 11714 (deepmerge)
import size from "module_2" /* 2 */;

let set;

function merge() {
  let items = [...arguments];
  return items.reduce(function(acc, item) {
    if (Array.isArray(item)) {
      const _TypeError = TypeError;
      let self = this;
      let self2 = this;
      const typeError = new TypeError("Arguments provided to ts-deepmerge must be objects, not arrays.");
      throw typeError;
    } else {
      let _Object = Object;
      const keys = Object.keys(item);
      item = keys.forEach(function(item) {
        const items = ["__proto__", "constructor", "prototype"];
        if (!items.includes(item)) {
          const _Array = Array;
          if (Array.isArray(acc[item])) {
            const _Array2 = Array;
            if (Array.isArray(item[item])) {
              let fromResult;
              if (merge.options.mergeArrays) {
                const _Array3 = Array;
                const _Set = Set;
                const self = this;
                const self2 = this;
                const obj = acc[item];
                set = new Set(obj.concat(item[item]));
                fromResult = from(set);
              } else {
                fromResult = item[item];
              }
              acc[item] = fromResult;
            }
          }
          let flag = false;
          if (typeof acc[item] === "object") {
            flag = false;
            if (null !== acc[item]) {
              const _Object = Object;
              if (typeof Object.getPrototypeOf === "function") {
                const _Object2 = Object;
                const prototypeOf = Object.getPrototypeOf(tmp4);
                const _Object3 = Object;
                flag = prototypeOf === Object.prototype || null === prototypeOf;
              } else {
                const _Object7 = Object;
                flag = "[object Object]" === toString.call(tmp4);
              }
            }
          }
          if (flag) {
            let flag2 = false;
            if (typeof item[item] === "object") {
              flag2 = false;
              if (null !== item[item]) {
                const _Object4 = Object;
                if (typeof Object.getPrototypeOf === "function") {
                  const _Object5 = Object;
                  const prototypeOf1 = Object.getPrototypeOf(tmp8);
                  const _Object6 = Object;
                  flag2 = prototypeOf1 === Object.prototype || null === prototypeOf1;
                } else {
                  const _Object8 = Object;
                  const toString2 = Object.prototype.toString;
                  flag2 = "[object Object]" === toString2.call(tmp8);
                }
              }
            }
            if (flag2) {
              acc[item] = merge(acc[item], item[item]);
            }
          }
          acc[item] = item[item];
        }
      });
      return acc;
    }
  }, {});
}
let options = { mergeArrays: true };
merge.options = options;
merge.withOptions = (arg0) => {
  const substr = [...arguments].slice();
  options = { mergeArrays: true };
  const merged = Object.assign(arg0);
  merge.options = options;
  merge.options = options;
  return merge(...substr);
};
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/utils/deepmerge.tsx");

export default merge;