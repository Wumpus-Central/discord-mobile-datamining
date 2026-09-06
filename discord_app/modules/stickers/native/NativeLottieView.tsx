// discord_app/modules/stickers/native/NativeLottieView.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import codegenNativeCommandsDefault from "../../../../_runtime/00113_codegenNativeCommands.js";
import LottieNodeNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/LottieNodeNativeComponent.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
      closure_5.setup(ref.current, asset, url, width, height, tmp, animating, accessibilityLabel);
    }
  }, items);
  obj = { ref, style: { width, height, opacity } };
  return <closure_4 ref={ref} style={{ width, height, opacity }} />;
}
export { NativeLottieRenderMode };
