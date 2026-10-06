// discord_app/design/void/Checkbox/native/Checkbox.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import AssetRegistryDefault from "../../../../../_runtime/13920_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../_runtime/13921_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let style;

const Image = react_native.Image;
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (style) => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(4);
      style = style.style;
      if (style.selected) {
        let tmp8;
        if (cResult[0] !== style) {
          const tmp12 = <Image style={style} source={AssetRegistryDefault} />;
          cResult[0] = style;
          cResult[1] = tmp12;
          tmp8 = tmp12;
        } else {
          tmp8 = cResult[1];
        }
        tmp3 = tmp8;
      } else if (cResult[2] !== style) {
        const tmp7 = <Image style={style} source={AssetRegistryDefault2} />;
        cResult[2] = style;
        cResult[3] = tmp7;
        tmp3 = tmp7;
      } else {
        tmp3 = cResult[3];
      }
      return tmp3;
    }
  : (style) => {
      let tmp5;
      const obj = { style: style.style, source: null };
      if (style.selected) {
        obj.source = AssetRegistryDefault;
        tmp5 = obj;
      } else {
        obj.source = AssetRegistryDefault2;
        tmp5 = obj;
      }
      return <Image {...tmp5} />;
    };
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default tmp3;
