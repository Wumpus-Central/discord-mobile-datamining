// discord_app/components_native/common/MessageLoadingSpinner.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../_runtime/00576_react.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import useToken2 from "../../design/tokens/native/useToken.tsx";
import ActivityIndicator_ActivityIndicator from "../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import react from "../../../_runtime/00019_react.js";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let color;

const requireNativeComponent = react_native.requireNativeComponent;
const jsx = Fragment.jsx;
let result = null;
if (!PlatformUtils.isAndroid()) {
  result = requireNativeComponent("DCDMessageLoadingSpinner");
}
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (color) => {
      let tmp11;
      const obj = react2;
      const cResult = obj.c(3);
      const useToken = useToken2.useToken;
      color = color.color;
      useToken2;
      if (color == null) {
        color = useToken(nativeDefault.colors.BACKGROUND_BRAND);
      }
      if (cResult[0] === color) {
        let tmp5;
        if (cResult[1] === color) {
          tmp5 = cResult[2];
        }
        return tmp5;
      }
      if (null != result) {
        const merged = Object.assign(color);
        tmp11 = <tmp6 color={color} />;
      } else {
        const ActivityIndicator = ActivityIndicator_ActivityIndicator.ActivityIndicator;
        const merged1 = Object.assign(color);
        tmp11 = <ActivityIndicator animating={color.animate} />;
      }
      cResult[0] = color;
      cResult[1] = color;
      cResult[2] = tmp11;
      tmp5 = tmp11;
    }
  : (color) => {
      let tmp9;
      const useToken = useToken2.useToken;
      color = color.color;
      useToken2;
      if (color == null) {
        color = useToken(nativeDefault.colors.BACKGROUND_BRAND);
      }
      if (null != result) {
        const merged = Object.assign(color);
        tmp9 = <tmp4 color={color} />;
      } else {
        const ActivityIndicator = ActivityIndicator_ActivityIndicator.ActivityIndicator;
        const merged1 = Object.assign(color);
        tmp9 = <ActivityIndicator animating={color.animate} />;
      }
      return tmp9;
    };
const result1 = size.fileFinishedImporting("components_native/common/MessageLoadingSpinner.tsx");

export default tmp4;
