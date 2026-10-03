// discord_app/components_native/common/MessageLoadingSpinner.tsx
import c from "../../../_runtime/00576_c.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../design/tokens/native/useToken.tsx";
import ActivityIndicator_ActivityIndicator from "../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1369);
let result = null;
if (!PlatformUtils.isAndroid()) {
  result = fn(17).requireNativeComponent("DCDMessageLoadingSpinner");
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result1 = size.fileFinishedImporting("components_native/common/MessageLoadingSpinner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (color) => {
      const cResult = c.c(3);
      color = color.color;
      if (color == null) {
        color = obj2.useToken(nativeDefault.colors.BACKGROUND_BRAND);
      }
      if (cResult[0] === color) {
        if (cResult[1] === color) {
          return cResult[2];
        }
      }
      if (null != result) {
        const obj3 = {};
        const merged = Object.assign(color);
        obj3.color = color;
        let tmp9 = <tmp4 />;
      } else {
        const obj4 = { animating: color.animate };
        const merged1 = Object.assign(color);
        tmp9 = jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, { animating: color.animate });
      }
      cResult[0] = color;
      cResult[1] = color;
      cResult[2] = tmp9;
      obj2 = useToken;
    }
  : (color) => {
      color = color.color;
      if (color == null) {
        color = obj.useToken(nativeDefault.colors.BACKGROUND_BRAND);
      }
      if (null != result) {
        const obj2 = {};
        const merged = Object.assign(color);
        obj2.color = color;
        let tmp8 = <tmp3 />;
      } else {
        const obj3 = { animating: color.animate };
        const merged1 = Object.assign(color);
        tmp8 = jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, { animating: color.animate });
      }
      return tmp8;
    };
