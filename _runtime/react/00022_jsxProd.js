// _runtime/react/00022_jsxProd.js
function jsxProd(type, key) {
  let text = null;
  if (undefined !== arg2) {
    text = `${arg2}`;
  }
  if (undefined !== key.key) {
    text = `${key.key}`;
  }
  let tmp3 = key;
  if ("key" in key) {
    let obj = {};
    tmp3 = obj;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp3 = obj;
      while (keys[tmp] !== undefined) {
        let tmp8 = tmp6;
        if ("key" === tmp6) {
          continue;
        } else {
          obj[tmp6] = key[tmp6];
          continue;
        }
        continue;
      }
    }
  }
  obj = { $$typeof: closure_0, type, key: text, ref: null, props: null };
  let tmp7 = null;
  if (undefined !== tmp3.ref) {
    tmp7 = ref;
  }
  obj[3] = tmp7;
  obj[4] = tmp3;
  return obj;
}
let closure_0 = Symbol.for("react.transitional.element");
arg5.Fragment = Symbol.for("react.fragment");
arg5.jsx = jsxProd;
arg5.jsxs = jsxProd;
