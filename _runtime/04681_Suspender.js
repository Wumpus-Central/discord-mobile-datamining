// _runtime/04681_Suspender.js
import jsxProd from "react/00021_jsxProd.js";
import noop from "00019_noop.js";
import noop2 from "00019_noop.js";

function Suspender(children) {
  const freeze = children.freeze;
  const ref = React.useRef(null);
  const ref1 = React.useRef(null);
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
    callback(ref.current);
  }
  if (!freeze) {
    ref.current = null;
  }
  return <closure_1>{children.children}</closure_1>;
}
({ Suspense: c0, Fragment: closure_1, use: obj1 } = noop);
const jsx = jsxProd.jsx;

export const Freeze = function Freeze(placeholder) {
  placeholder = placeholder.placeholder;
  ({ freeze, children } = placeholder);
  if (placeholder === undefined) {
    placeholder = null;
  }
  return <closure_0 fallback={placeholder}><Suspender freeze={freeze}>{children}</Suspender></closure_0>;
};