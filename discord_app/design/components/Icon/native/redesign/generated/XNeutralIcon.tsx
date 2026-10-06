// discord_app/design/components/Icon/native/redesign/generated/XNeutralIcon.tsx
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import BaseIconImage2 from "../../BaseIconImage.tsx";
import AssetRegistry from "../../../../../../../_runtime/07781_AssetRegistry.js";
import _objectWithoutProperties from "../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let closure_2 = ["style", "color"];
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let color;
      let style;
      let tmp10;
      let tmp4;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(9);
      if (cResult[0] !== arg0) {
        ({ style, color } = arg0);
        const tmp9 = _objectWithoutProperties(arg0, closure_2);
        cResult[0] = arg0;
        cResult[1] = tmp9;
        cResult[2] = style;
        cResult[3] = color;
        tmp6 = color;
        tmp5 = style;
        tmp4 = tmp9;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
      }
      let str = "#4E5058";
      if (undefined !== tmp6) {
        str = tmp6;
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = AssetRegistry;
        cResult[4] = tmpResult;
        tmp10 = tmpResult;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === str) {
        if (cResult[6] === tmp4) {
          let tmp12;
          if (cResult[7] === tmp5) {
            tmp12 = cResult[8];
          }
          return tmp12;
        }
      }
      const BaseIconImage = BaseIconImage2.BaseIconImage;
      const merged = Object.assign(tmp4);
      const tmp14 = <BaseIconImage source={tmp10} color={str} style={tmp5} />;
      cResult[5] = str;
      cResult[6] = tmp4;
      cResult[7] = tmp5;
      cResult[8] = tmp14;
      tmp12 = tmp14;
    }
  : (color) => {
      let str = color.color;
      const style = color.style;
      if (str === undefined) {
        str = "#4E5058";
      }
      const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
      const BaseIconImage = BaseIconImage2.BaseIconImage;
      const merged1 = Object.assign(merged);
      return <BaseIconImage source={AssetRegistry} color={str} style={style} />;
    };
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/XNeutralIcon.tsx");

export const XNeutralIcon = tmp3;
