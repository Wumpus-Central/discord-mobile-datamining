// === Module 6397: ScrollAnchor ===

// Module 6397 (ScrollAnchor)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 6392 */;
import _slicedToArray_mod from "_slicedToArray" /* 6342 */;
import react_mod from "react" /* 19 */;

let c3;
let closure_4;
let hasOwnProperty;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ useImperativeHandle: c3, useMemo: closure_4, useState: hasOwnProperty } = react);
react = react_mod;
const jsx = Fragment.jsx;

export const ScrollAnchor = function ScrollAnchor(horizontal) {
  let closure_2;
  let first;
  horizontal = horizontal.horizontal;
  first = undefined;
  _slicedToArray = undefined;
  const scrollAnchorRef = horizontal.scrollAnchorRef;
  [first, _slicedToArray] = closure_5(1000000);
  closure_3(scrollAnchorRef, () => ({
    scrollBy(diff) {
      let closure_0 = diff;
      closure_1_2((arg0) => arg0 + closure_0);
    }
  }), []);
  const items = [first, horizontal];
  return closure_4(() => {
    let num2;
    let num = 0;
    const CompatView = react_native.CompatView;
    if (!horizontal) {
      num = first;
    }
    const style = { position: "absolute", height: 0, top: num, left: num2 };
    num2 = 0;
    if (horizontal) {
      num2 = first;
    }
    return <CompatView style={style} />;
  }, items);
};