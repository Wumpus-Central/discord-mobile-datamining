// === Module 10124: merge ===

// Module 10124 (merge)
import set2 from "set" /* 2 */;

function merge() {
  let items = [...arguments];
  return items.reduce((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    if (Array.isArray(arg1)) {
      const _TypeError = TypeError;
      const typeError = new TypeError("Arguments provided to ts-deepmerge must be objects, not arrays.");
      throw typeError;
    } else {
      let _Object = Object;
      const keys = Object.keys(arg1);
      const item = keys.forEach((arg0) => {
        const items = ["__proto__", "constructor", "prototype"];
        if (!items.includes(arg0)) {
          let tmp = globalThis;
          const _Array = Array;
          if (Array.isArray(lib[arg0])) {
            const _Array2 = Array;
            let tmp3 = dependencyMap;
            if (Array.isArray(dependencyMap[arg0])) {
              if (lib.options.mergeArrays) {
                const _Array3 = tmp.Array;
                tmp = new.target;
                const set = new tmp.Set(tmp2[arg0].concat(tmp3[arg0]));
                tmp3 = set;
                let fromResult = _Array3.from(set);
                obj = tmp2[arg0];
              } else {
                fromResult = tmp3[arg0];
              }
              tmp2[arg0] = fromResult;
            }
          }
          let flag = false;
          if (typeof lib[arg0] === "object") {
            flag = false;
            if (null !== tmp4) {
              const _Object = Object;
              if (typeof Object.getPrototypeOf === "function") {
                const _Object2 = Object;
                const prototypeOf = Object.getPrototypeOf(tmp4);
                const _Object3 = Object;
                flag = prototypeOf === Object.prototype || null === prototypeOf;
                const tmp6 = prototypeOf === Object.prototype || null === prototypeOf;
              } else {
                const _Object7 = Object;
                const call = toString.call;
                flag = "[object Object]" === (typeof call === "unknown" ? toString() : call(tmp4));
              }
            }
          }
          if (flag) {
            let flag2 = false;
            if (typeof dependencyMap[arg0] === "object") {
              flag2 = false;
              if (null !== tmp8) {
                const _Object4 = Object;
                if (typeof Object.getPrototypeOf === "function") {
                  const _Object5 = Object;
                  const prototypeOf1 = Object.getPrototypeOf(tmp8);
                  const _Object6 = Object;
                  flag2 = prototypeOf1 === Object.prototype || null === prototypeOf1;
                  const tmp10 = prototypeOf1 === Object.prototype || null === prototypeOf1;
                } else {
                  const _Object8 = Object;
                  const call2 = toString2.call;
                  flag2 = "[object Object]" === (typeof call2 === "unknown" ? toString2() : call2(tmp8));
                }
              }
            }
            if (flag2) {
              tmp2[arg0] = lib(tmp2[arg0], tmp7[arg0]);
            }
            tmp7 = dependencyMap;
          }
          lib[arg0] = dependencyMap[arg0];
        }
      });
      return arg0;
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
const result = set2.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/utils/deepmerge.tsx");

export default merge;