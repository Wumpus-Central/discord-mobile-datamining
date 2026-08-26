// === Module 8326: NativeLottieView ===

// Module 8326 (NativeLottieView)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import codegenNativeCommandsDefault from "codegenNativeCommands" /* 113 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 8327 */;
import noop from "noop" /* 19 */;
import closure_2 from "noop" /* 19 */;
import set from "set" /* 500 */;

({ useEffect: c0, useRef: closure_1 } = noop);
let jsx = jsxProd.jsx;
if (set.isAndroid()) {
  let importDefaultResult = __INTERNAL_VIEW_CONFIGDefault;
} else {
  importDefaultResult = get_ActivityIndicator.requireNativeComponent("NativeLottieNode");
}
let c4 = importDefaultResult;
let closure_5 = codegenNativeCommandsDefault({ supportedCommands: ["setup"] });
let obj = { LOOP: 0, [0]: "LOOP", STILL: 1, [1]: "STILL", ONCE: 2, [2]: "ONCE" };
const result = set.fileFinishedImporting("modules/stickers/native/NativeLottieView.tsx");

export default function NativeLottieView(accessibilityLabel) {
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
  jsx = undefined;
  ref = obj.useRef(null);
  obj = { asset, url, width, height, animating: flag, accessibilityLabel: accessibilityLabel.accessibilityLabel };
  jsx = ref(obj);
  LOOP(() => {
    closure_3.current = obj;
  });
  const items = [LOOP];
  LOOP(() => {
    ({ asset, url, width, height, animating, accessibilityLabel } = ref.current);
    let tmp2 = "" !== url;
    if (tmp2) {
      tmp2 = 0 !== width;
    }
    if (tmp2) {
      tmp2 = 0 !== height;
    }
    if (tmp2) {
      closure_1_5.setup(ref.current, asset, url, width, height, tmp, animating, accessibilityLabel);
    }
  }, items);
  return <closure_4 ref={ref} style={{ width, height, opacity }} />;
};
export const NativeLottieRenderMode = obj;