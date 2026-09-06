// === Module 7999: NativeLottieView ===

// Module 7999 (NativeLottieView)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import codegenNativeCommandsDefault from "codegenNativeCommands" /* 113 */;
import LottieNodeNativeComponentDefault from "LottieNodeNativeComponent" /* 8000 */;
import noop from "module_19" /* 19 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import size from "module_2" /* 2 */;

({ useEffect: closure_0, useRef: closure_1 } = noop);
let jsx = jsxProd.jsx;
if (PlatformUtils.isAndroid()) {
  let importDefaultResult = LottieNodeNativeComponentDefault;
} else {
  importDefaultResult = _mod17.requireNativeComponent("NativeLottieNode");
}
let closure_5 = codegenNativeCommandsDefault({ supportedCommands: ["setup"] });
const NativeLottieRenderMode = { LOOP: 0, [0]: "LOOP", STILL: 1, [1]: "STILL", ONCE: 2, [2]: "ONCE" };
const result = size.fileFinishedImporting("modules/stickers/native/NativeLottieView.tsx");

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
  let size;
  const ref = size.useRef(null);
  size = { asset, url, width, height, animating: flag, accessibilityLabel: accessibilityLabel.accessibilityLabel };
  jsx = ref(size);
  LOOP(() => {
    closure_3.current = size;
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
      closure_5.setup(ref.current, asset, url, width, height, LOOP, animating, accessibilityLabel);
    }
  }, items);
  obj = { ref, style: { width, height, opacity } };
  return <closure_4 ref={ref} style={{ width, height, opacity }} />;
};
export { NativeLottieRenderMode };