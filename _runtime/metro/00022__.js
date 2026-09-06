// === Module 22: ? ===

// Module 22
function jsxProd(type, key, arg2) {
  let text = null;
  if (undefined !== arg2) {
    text = `${arg2}`;
  }
  if (undefined !== key.key) {
    text = `${key.key}`;
  }
  let tmp3 = key;
  if ("key" in key) {
    const obj = {};
    tmp3 = obj;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp3 = obj;
      while (keys[tmp] !== undefined) {
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
  const element = { $$typeof: _typeof, type, key: text, ref: null, props: null };
  let tmp7 = null;
  if (undefined !== tmp3.ref) {
    tmp7 = ref;
  }
  element.ref = tmp7;
  element.props = tmp3;
  return element;
}
const _typeof = Symbol.for("react.transitional.element");

export const Fragment = Symbol.for("react.fragment");
export const jsx = jsxProd;
export const jsxs = jsxProd;