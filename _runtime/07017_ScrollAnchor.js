// === Module 7017: ScrollAnchor ===

// Module 7017 (ScrollAnchor)
import CompatView from "CompatView" /* 7012 */;
import _slicedToArray from "module_6962" /* 6962 */;
import noop_mod from "module_19" /* 19 */;

require = fn;
let noop = fn(19);
({ useImperativeHandle: c3, useMemo: closure_4, useState: hasOwnProperty } = noop);
let noop = noop_mod;
const jsx = fn(21).jsx;

export const ScrollAnchor = function ScrollAnchor(horizontal) {
  horizontal = horizontal.horizontal;
  first = undefined;
  _slicedToArray = undefined;
  [first, _slicedToArray] = closure_5(1000000);
  closure_3(horizontal.scrollAnchorRef, () => ({
    scrollBy(diff) {
      closure_0 = diff;
      closure_1_2((arg0) => arg0 + closure_0);
    }
  }), []);
  const items = [first, horizontal];
  return closure_4(() => {
    let num = 0;
    if (!horizontal) {
      num = first;
    }
    const style = { position: "absolute", height: 0, top: num, left: null };
    let num2 = 0;
    if (horizontal) {
      num2 = first;
    }
    style.left = num2;
    return jsx(CompatView.CompatView, { style });
  }, items);
};