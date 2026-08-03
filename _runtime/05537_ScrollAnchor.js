// === Module 5537: ScrollAnchor ===

// Module 5537 (ScrollAnchor)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import "noop";
import { jsx } from "jsxProd";

let c3;
let c4;
let c5;
const require = arg1;
({ useImperativeHandle: c3, useMemo: c4, useState: c5 } = noop);

export const ScrollAnchor = function ScrollAnchor(horizontal) {
  horizontal = horizontal.horizontal;
  let first;
  let callback;
  const tmp = callback(callback4(1000000), 2);
  first = tmp[0];
  callback = tmp[1];
  callback2(horizontal.scrollAnchorRef, () => ({
    scrollBy(diff) {
      let closure_0 = diff;
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
    return outer1_6(horizontal(first[3]).CompatView, { style });
  }, items);
};