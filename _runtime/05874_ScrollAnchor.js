// === Module 5874: ScrollAnchor ===

// Module 5874 (ScrollAnchor)
import noopDefault from "noop" /* 19 */;
import closure_2 from "_slicedToArray" /* 5819 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
({ useImperativeHandle: c3, useMemo: c4, useState: c5 } = noop);
noopDefault;

export const ScrollAnchor = function ScrollAnchor(horizontal) {
  horizontal = horizontal.horizontal;
  let first;
  let callback;
  const tmp = callback(callback4(1000000), 2);
  first = tmp[0];
  callback = tmp[1];
  callback2(horizontal.scrollAnchorRef, () => ({
    scrollBy(diff) {
      closure_0 = diff;
      callback((arg0) => arg0 + closure_0);
    }
  }), []);
  const items = [first, horizontal];
  return callback3(() => {
    let num = 0;
    if (!horizontal) {
      num = first;
    }
    const style = { position: "absolute", height: 0, top: num, left: null };
    let num2 = 0;
    if (horizontal) {
      num2 = first;
    }
    style[3] = num2;
    return closure_1_6(horizontal(first[3]).CompatView, { style });
  }, items);
};