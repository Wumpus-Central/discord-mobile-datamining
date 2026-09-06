// === Module 4923: Suspender ===

// Module 4923 (Suspender)
import jsxProd from "jsxProd" /* 21 */;
import noop from "module_19" /* 19 */;

function Suspender(children) {
  const freeze = children.freeze;
  const ref = noop.useRef(null);
  const ref1 = noop.useRef(null);
  if (tmp2) {
    const promise = new Promise((current) => {
      ref1.current = current;
    });
    ref.current = promise;
  }
  let tmp8 = freeze;
  if (!freeze) {
    tmp8 = null == ref1.current;
  }
  if (!tmp8) {
    ref1.current();
    ref1.current = null;
  }
  if (null !== ref.current) {
    React2(ref.current);
  }
  if (!freeze) {
    ref.current = null;
  }
  return <framebus>{arg0.children}</framebus>;
}
({ Suspense: closure_0, Fragment: closure_1, use: c2 } = noop);
const jsx = jsxProd.jsx;

export const Freeze = function Freeze(placeholder) {
  placeholder = placeholder.placeholder;
  ({ freeze, children } = placeholder);
  if (placeholder === undefined) {
    placeholder = null;
  }
  return <React fallback={placeholder}><Suspender freeze={freeze}>{children}</Suspender></React>;
};