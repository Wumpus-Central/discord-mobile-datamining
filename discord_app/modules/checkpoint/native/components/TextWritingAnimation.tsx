// discord_app/modules/checkpoint/native/components/TextWritingAnimation.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

let require = fn;
const noop = fn(19);
({ useContext: closure_4, useEffect: hasOwnProperty, useState: metroRequire } = noop);
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5009);
let closure_11 = createStyles.createStyles({
  hiddenText: { opacity: 0 },
  animatedText: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/TextWritingAnimation.tsx");

export default function TextWritingAnimation(isStepHeading) {
  ({ style, textStyle, text } = isStepHeading);
  require = text;
  ({ variant, adjustsFontSizeToFit, lineClamp, delay } = isStepHeading);
  if (delay === undefined) {
    delay = 0;
  }
  let flag = isStepHeading.isStepHeading;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  _slicedToArray = undefined;
  const tmp = closure_11();
  const tmp4 = closure_4(delay(stateFromStores[6]));
  const items = [AccessibilityStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp6 = _slicedToArray(closure_6(0), 2);
  _slicedToArray = tmp6[1];
  const items1 = [delay, stateFromStores, text];
  closure_5(() => {
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
    const obj3 = { isStepHeading: flag, style: textStyle, variant, adjustsFontSizeToFit, lineClamp, children: text };
    obj2.children = closure_9(tmp2(tmp3[8]), obj3);
    let tmp8Result = closure_9(View, obj2);
  } else {
    let tmp10;
    if (flag) {
      tmp10 = tmp4;
    }
    const obj4 = {
      ref: tmp10,
      accessible: flag,
      accessibilityRole: null,
      accessibilityLabel: null,
      style: null,
      children: null,
    };
    let str;
    if (flag) {
      str = "header";
    }
    obj4.accessibilityRole = str;
    let tmp11;
    if (flag) {
      tmp11 = text;
    }
    obj4.accessibilityLabel = tmp11;
    obj4.style = style;
    const obj5 = {
      accessible: !flag,
      accessibilityElementsHidden: flag,
      importantForAccessibility: null,
      style: null,
      variant: null,
      adjustsFontSizeToFit: null,
      lineClamp: null,
      children: null,
    };
    let str2;
    if (flag) {
      str2 = "no-hide-descendants";
    }
    obj5.importantForAccessibility = str2;
    const items2 = [tmp.hiddenText, textStyle];
    obj5.style = items2;
    obj5.variant = variant;
    obj5.adjustsFontSizeToFit = adjustsFontSizeToFit;
    obj5.lineClamp = lineClamp;
    obj5.children = text;
    const items3 = [closure_9(tmp2(tmp3[8]), obj5)];
    const obj6 = {
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      style: null,
      variant: null,
      adjustsFontSizeToFit: null,
      lineClamp: null,
      children: null,
    };
    const items4 = [tmp.animatedText, textStyle];
    obj6.style = items4;
    obj6.variant = variant;
    obj6.adjustsFontSizeToFit = adjustsFontSizeToFit;
    obj6.lineClamp = lineClamp;
    const tmp14 = !flag;
    const tmp2Result = tmp2(tmp3[8]);
    obj6.children = text.substring(0, tmp6[0]);
    items3[1] = closure_9(tmp2(tmp3[8]), obj6);
    obj4.children = items3;
    tmp8Result = closure_10(View, obj4);
    const tmp2Result2 = tmp2(tmp3[8]);
  }
  return tmp8Result;
}
export const DURATION = 400;
