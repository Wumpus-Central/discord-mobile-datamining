import noop from "noop";
import closure_3 from "noop";
import { jsx } from "jsxProd";

let c0;
let closure_1;
let obj1;
function Suspender(children) {
  const freeze = children.freeze;
  let ref1;
  const ref = React.useRef(null);
  ref1 = React.useRef(null);
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
  return <closure_1>{arg0.children}</closure_1>;
}
({ Suspense: c0, Fragment: closure_1, use: obj1 } = noop);

export const Freeze = function Freeze(placeholder) {
  let children;
  let freeze;
  placeholder = placeholder.placeholder;
  ({ freeze, children } = placeholder);
  if (placeholder === undefined) {
    placeholder = null;
  }
  return <closure_0 fallback={placeholder}><Suspender freeze={freeze}>{children}</Suspender></closure_0>;
};