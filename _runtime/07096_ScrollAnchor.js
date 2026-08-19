// === Module 7096: ScrollAnchor ===

// Module 7096 (ScrollAnchor)
import noopDefault from "noop" /* 19 */;
import _slicedToArray from "_slicedToArray" /* 7041 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
({ useImperativeHandle: c3, useMemo: c4, useState: c5 } = noop);
noopDefault;

export const ScrollAnchor = function ScrollAnchor(horizontal) {
  horizontal = horizontal.horizontal;
  let callback;
  const tmp = callback(callback4(1000000), 2);
  const first = tmp[0];
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
    return jsx(horizontal(first[3]).CompatView, { style });
  }, items);
};