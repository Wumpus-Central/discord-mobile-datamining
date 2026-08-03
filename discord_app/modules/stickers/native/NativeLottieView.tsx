import noop from "noop";
import closure_2 from "noop";
import { jsx } from "jsxProd";
import set from "set";
import set from "jsxProd";

let c0;
let closure_1;
({ useEffect: c0, useRef: closure_1 } = noop);
if (set.isAndroid()) {
  let importDefaultResult = require("__INTERNAL_VIEW_CONFIG");
} else {
  importDefaultResult = require("get ActivityIndicator").requireNativeComponent("NativeLottieNode");
}
let c4 = importDefaultResult;
let closure_5 = require("codegenNativeCommands")({ supportedCommands: ["setup"] });
let obj = { LOOP: 0, [0]: "LOOP", STILL: 1, [1]: "STILL", ONCE: 2, [2]: "ONCE" };
const result = set.fileFinishedImporting("modules/stickers/native/NativeLottieView.tsx");

export default function NativeLottieView(accessibilityLabel) {
  let asset;
  let height;
  let opacity;
  let url;
  let width;
  ({ width, height, opacity } = accessibilityLabel);
  ({ asset, url } = accessibilityLabel);
  if (opacity === undefined) {
    opacity = 1;
  }
  let LOOP = accessibilityLabel.renderMode;
  if (LOOP === undefined) {
    LOOP = obj.LOOP;
  }
  let flag = accessibilityLabel.animating;
  if (flag === undefined) {
    flag = true;
  }
  let ref;
  obj = undefined;
  let jsx;
  ref = obj.useRef(null);
  obj = { asset, url, width, height, animating: flag, accessibilityLabel: accessibilityLabel.accessibilityLabel };
  jsx = ref(obj);
  LOOP(() => {
    closure_3.current = obj;
  });
  const items = [LOOP];
  LOOP(() => {
    let accessibilityLabel;
    let animating;
    let asset;
    let height;
    let url;
    let width;
    ({ asset, url, width, height, animating, accessibilityLabel } = ref.current);
    let tmp2 = "" !== url;
    if (tmp2) {
      tmp2 = 0 !== width;
    }
    if (tmp2) {
      tmp2 = 0 !== height;
    }
    if (tmp2) {
      outer1_5.setup(ref.current, asset, url, width, height, tmp, animating, accessibilityLabel);
    }
  }, items);
  return <closure_4 ref={ref} style={{ width, height, opacity }} />;
};
export const NativeLottieRenderMode = obj;