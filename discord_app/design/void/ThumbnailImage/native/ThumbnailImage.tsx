// discord_app/design/void/ThumbnailImage/native/ThumbnailImage.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import LocalImageThumbnailNativeComponent from "../../../../../discord_common/js/packages/rtn-codegen/js/LocalImageThumbnailNativeComponent.tsx";
import react from "../../../../../_runtime/00019_react.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

react_native.Image;
const jsx = Fragment.jsx;
if (PlatformUtils.isAndroid()) {
  LocalImageThumbnailNativeComponent.default;
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp2;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] !== arg0) {
        const merged = Object.assign(arg0);
        const tmp8 = <_default />;
        cResult[0] = arg0;
        cResult[1] = tmp8;
        tmp2 = tmp8;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : (arg0) => {
      const merged = Object.assign(arg0);
      return <_default />;
    };
const result = size.fileFinishedImporting("design/void/ThumbnailImage/native/ThumbnailImage.tsx");

export default tmp3;
