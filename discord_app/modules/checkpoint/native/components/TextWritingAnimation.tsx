// discord_app/modules/checkpoint/native/components/TextWritingAnimation.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_1;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let _slicedToArray = _slicedToArray_mod;
({ useEffect: closure_4, useState: hasOwnProperty } = react);
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({
  hiddenText: { opacity: 0 },
  animatedText: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/TextWritingAnimation.tsx");

export default function TextWritingAnimation(arg0) {
  let adjustsFontSizeToFit;
  let closure_3;
  let delay;
  let first;
  let items2;
  let items3;
  let items4;
  let lineClamp;
  let obj3;
  let style;
  let text;
  let textStyle;
  let tmp12;
  let useReducedMotion;
  let variant;
  ({ style, textStyle, text } = arg0);
  require = text;
  ({ variant, adjustsFontSizeToFit, lineClamp, delay } = arg0);
  if (delay === undefined) {
    delay = 0;
  }
  let stateFromStores;
  _slicedToArray = undefined;
  let tmp = closure_10();
  const tmp2 = stateFromStores;
  const items = [AccessibilityStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  [first, _slicedToArray] = closure_5(0);
  const items1 = [delay, stateFromStores, text];
  closure_4(() => {
    let handleAnimationFrame;
    const tmp = handleAnimationFrame;
    if (!tmp) {
      const _Date = Date;
      let closure_0 = Date.now() + closure_1;
      let _requestAnimationFrame = requestAnimationFrame;
      handleAnimationFrame = function handleAnimationFrame() {
        const bound = Math.max(Math.min((Date.now() - closure_0) / 400, 1), 0);
        closure_3(Math.floor(bound * require.length));
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
    const obj2 = { style, children: closure_8(delay(tmp2[7]), obj3) };
    obj3 = { style: textStyle, variant, adjustsFontSizeToFit, lineClamp, children: text };
    tmp12 = closure_8(View, obj2);
  } else {
    const obj5 = { style: items2, variant, adjustsFontSizeToFit, lineClamp, children: text };
    items2 = [tmp.hiddenText, textStyle];
    const obj4 = { style, children: items3 };
    items3 = [closure_8(delay(tmp2[7]), obj5)];
    const obj6 = {
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      style: items4,
      variant,
      adjustsFontSizeToFit,
      lineClamp,
      children: text.substring(0, first),
    };
    items4 = [tmp.animatedText, textStyle];
    const tmp11 = delay(tmp2[7]);
    items3[1] = closure_8(tmp11, obj6);
    tmp12 = closure_9(View, obj4);
  }
  return tmp12;
}
export const DURATION = 400;
