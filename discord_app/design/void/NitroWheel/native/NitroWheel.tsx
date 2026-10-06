// discord_app/design/void/NitroWheel/native/NitroWheel.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import AssetRegistryDefault from "../../../../../_runtime/08894_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let style;

const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (style) => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(2);
      style = style.style;
      if (cResult[0] !== style) {
        FastImageDefault;
        const tmp7 = <tmp6 source={AssetRegistryDefault} style={style} resizeMode="contain" />;
        cResult[0] = style;
        cResult[1] = tmp7;
        tmp3 = tmp7;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : (style) => {
      style = style.style;
      FastImageDefault;
      return <tmp source={AssetRegistryDefault} style={style} resizeMode="contain" />;
    };
const result = size.fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default tmp3;
