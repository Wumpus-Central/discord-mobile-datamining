// discord_app/modules/stickers/native/NativeLottieView.tsx
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import codegenNativeCommandsDefault from "../../../../_runtime/00113_codegenNativeCommands.js";
import __INTERNAL_VIEW_CONFIGDefault from "../../../../discord_common/js/packages/rtn-codegen/js/LottieNodeNativeComponent.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import noop2 from "../../../../_runtime/00019_noop.js";
import obj132 from "../../../utils/PlatformUtils.tsx";

({ useEffect: c0, useRef: closure_1 } = noop);
let jsx = jsxProd.jsx;
if (obj132.isAndroid()) {
  let importDefaultResult = __INTERNAL_VIEW_CONFIGDefault;
} else {
  importDefaultResult = get_ActivityIndicator.requireNativeComponent("NativeLottieNode");
}
let c4 = importDefaultResult;
let closure_5 = codegenNativeCommandsDefault({ supportedCommands: ["setup"] });
let obj = { LOOP: 0, [0]: "LOOP", STILL: 1, [1]: "STILL", ONCE: 2, [2]: "ONCE" };
const result = obj132.fileFinishedImporting("modules/stickers/native/NativeLottieView.tsx");

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
  obj = undefined;
  const ref = obj.useRef(null);
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
      closure_1_5.setup(ref.current, asset, url, width, height, LOOP, animating, accessibilityLabel);
    }
  }, items);
  return <closure_4 ref={ref} style={{ width, height, opacity }} />;
};
export const NativeLottieRenderMode = obj;