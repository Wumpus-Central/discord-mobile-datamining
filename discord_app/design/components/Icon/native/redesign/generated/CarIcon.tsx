// discord_app/design/components/Icon/native/redesign/generated/CarIcon.tsx
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import BaseIconImage2 from "../../BaseIconImage.tsx";
import AssetRegistry from "../../../../../../../_runtime/15442_AssetRegistry.js";
import _objectWithoutProperties from "../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let closure_3 = ["style", "color"];
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let INTERACTIVE_ICON_DEFAULT;
      let color;
      let style;
      let tmp10;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(9);
      if (cResult[0] !== arg0) {
        ({ style, color } = arg0);
        const tmp8 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = tmp8;
        cResult[2] = style;
        cResult[3] = color;
        INTERACTIVE_ICON_DEFAULT = color;
        tmp5 = style;
        tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        INTERACTIVE_ICON_DEFAULT = cResult[3];
      }
      if (undefined === INTERACTIVE_ICON_DEFAULT) {
        INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = AssetRegistry;
        cResult[4] = tmpResult;
        tmp10 = tmpResult;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === INTERACTIVE_ICON_DEFAULT) {
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
      const tmp14 = <BaseIconImage source={tmp10} color={INTERACTIVE_ICON_DEFAULT} style={tmp5} />;
      cResult[5] = INTERACTIVE_ICON_DEFAULT;
      cResult[6] = tmp4;
      cResult[7] = tmp5;
      cResult[8] = tmp14;
      tmp12 = tmp14;
    }
  : (color) => {
      let INTERACTIVE_ICON_DEFAULT = color.color;
      const style = color.style;
      if (INTERACTIVE_ICON_DEFAULT === undefined) {
        INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
      }
      const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
      const BaseIconImage = BaseIconImage2.BaseIconImage;
      const merged1 = Object.assign(merged);
      return <BaseIconImage source={AssetRegistry} color={INTERACTIVE_ICON_DEFAULT} style={style} />;
    };
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/CarIcon.tsx");

export const CarIcon = tmp3;
