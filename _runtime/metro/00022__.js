// === Module 22: ? ===

// Module 22
function jsxProd(BaseIconImage, size, key) {
  let tmp7;
  let text = null;
  if (undefined !== key) {
    text = `${key}`;
  }
  if (undefined !== size.key) {
    text = `${size.key}`;
  }
  let tmp3 = size;
  if ("key" in size) {
    const obj = {};
    tmp3 = obj;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp3 = obj;
      while (keys[tmp] !== undefined) {
        if ("key" === tmp6) {
          continue;
        } else {
          obj[tmp6] = size[tmp6];
          continue;
        }
        continue;
      }
    }
  }
  const element = { $$typeof: _typeof, type: BaseIconImage, key: text, ref: tmp7, props: tmp3 };
  tmp7 = null;
  if (undefined !== tmp3.ref) {
    tmp7 = ref;
  }
  return element;
}
const _typeof = Symbol.for("react.transitional.element");

export const Fragment = Symbol.for("react.fragment");
export const jsx = jsxProd;
export const jsxs = jsxProd;