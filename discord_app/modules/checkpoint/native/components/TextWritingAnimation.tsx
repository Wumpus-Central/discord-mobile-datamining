// === Module 15263: TextWritingAnimation ===

// Module 15263 (TextWritingAnimation)
import _slicedToArray from "module_32" /* 32 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;

let require = fn;
const noop = fn(19);
({ useEffect: closure_4, useState: hasOwnProperty } = noop);
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4836);
let closure_10 = createStyles.createStyles({ hiddenText: { opacity: 0 }, animatedText: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/TextWritingAnimation.tsx");

export default function TextWritingAnimation(arg0) {
  ({ style, textStyle, text } = arg0);
  require = text;
  ({ variant, adjustsFontSizeToFit, lineClamp, delay } = arg0);
  if (delay === undefined) {
    delay = 0;
  }
  let stateFromStores;
  _slicedToArray = undefined;
  const tmp = closure_10();
  const items = [AccessibilityStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp4 = _slicedToArray(closure_5(0), 2);
  _slicedToArray = tmp4[1];
  const items1 = [delay, stateFromStores, text];
  closure_4(() => {
    if (!handleAnimationFrame) {
      const _Date = Date;
      closure_0 = Date.now() + closure_1;
      let _requestAnimationFrame = requestAnimationFrame;
      handleAnimationFrame = function handleAnimationFrame() {
        const bound = Math.max(Math.min((Date.now() - closure_0) / 400, 1), 0);
        closure_3(Math.floor(bound * text.length));
        if (bound < 1) {
          const _requestAnimationFrame = requestAnimationFrame;
          closure_1 = requestAnimationFrame(handleAnimationFrame);
        }
      };
      closure_1 = requestAnimationFrame(handleAnimationFrame);
      return () => cancelAnimationFrame(closure_1);
    }
  }, items1);
  if (stateFromStores) {
    const obj2 = { style, children: null };
    const obj3 = { style: textStyle, variant, adjustsFontSizeToFit, lineClamp, children: text };
    obj2.children = closure_8(delay(tmp2[7]), obj3);
    let tmp11 = closure_8(View, obj2);
  } else {
    const obj4 = { style, children: null };
    const obj5 = { style: null, variant: null, adjustsFontSizeToFit: null, lineClamp: null, children: null };
    const items2 = [tmp.hiddenText, textStyle];
    obj5.style = items2;
    obj5.variant = variant;
    obj5.adjustsFontSizeToFit = adjustsFontSizeToFit;
    obj5.lineClamp = lineClamp;
    obj5.children = text;
    const items3 = [closure_8(delay(tmp2[7]), obj5), ];
    const obj6 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", style: null, variant: null, adjustsFontSizeToFit: null, lineClamp: null, children: null };
    const items4 = [tmp.animatedText, textStyle];
    obj6.style = items4;
    obj6.variant = variant;
    obj6.adjustsFontSizeToFit = adjustsFontSizeToFit;
    obj6.lineClamp = lineClamp;
    obj6.children = text.substring(0, tmp4[0]);
    items3[1] = closure_8(delay(tmp2[7]), obj6);
    obj4.children = items3;
    tmp11 = closure_9(View, obj4);
    const tmp10 = delay(tmp2[7]);
  }
  return tmp11;
};
export const DURATION = 400;