// === Module 5738: react ===

// Module 5738 (react)
import Fragment from "Fragment" /* 21 */;
import react_mod from "react" /* 19 */;

let _window;
let c2;
let map;
function Suspender(freeze) {
  const f90863 = (current) => {
    ref1.current = current;
  };
  freeze = freeze.freeze;
  const children = freeze.children;
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  const tmp2 = null === ref.current && freeze;
  if (tmp2) {
    const self = this;
    const self2 = this;
    ref.current = new Promise(f90863);
    const promise = new Promise(f90863);
  }
  const tmp6 = freeze || null == ref1.current;
  if (!tmp6) {
    ref1.current();
    ref1.current = null;
  }
  if (null !== ref.current) {
    React2(ref.current);
  }
  if (!freeze) {
    ref.current = null;
  }
  return <map>{children}</map>;
}
let react = react_mod;
({ Suspense: _window, Fragment: map, use: c2 } = react);
react = react_mod;
const jsx = Fragment.jsx;

export const Freeze = function Freeze(placeholder) {
  let children;
  let freeze;
  placeholder = placeholder.placeholder;
  ({ freeze, children } = placeholder);
  if (placeholder === undefined) {
    placeholder = null;
  }
  return <React fallback={placeholder}><Suspender freeze={freeze}>{children}</Suspender></React>;
};