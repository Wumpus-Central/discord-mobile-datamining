// discord_app/design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import BaseIconImage3 from "../../BaseIconImage.tsx";
import AssetRegistry from "../../../../../../../_runtime/04801_AssetRegistry.js";
import AssetRegistry2 from "../../../../../../../_runtime/04802_AssetRegistry.js";
import _objectWithoutProperties from "../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let metroImportDefault;
let metroRequire;
let closure_3 = ["style", "secondaryColor", "color"];
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let INTERACTIVE_ICON_DEFAULT;
      let color;
      let items2;
      let secondaryColor;
      let style;
      let tmp12;
      let tmp5;
      let tmp6;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(21);
      if (cResult[0] !== arg0) {
        ({ style, secondaryColor, color } = arg0);
        const tmp10 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = tmp10;
        cResult[2] = style;
        cResult[3] = secondaryColor;
        cResult[4] = color;
        INTERACTIVE_ICON_DEFAULT = color;
        tmp7 = secondaryColor;
        tmp6 = style;
        tmp5 = tmp10;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
        tmp7 = cResult[3];
        INTERACTIVE_ICON_DEFAULT = cResult[4];
      }
      let str = "transparent";
      if (undefined !== tmp7) {
        str = tmp7;
      }
      if (undefined === INTERACTIVE_ICON_DEFAULT) {
        INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp2Result = AssetRegistry;
        cResult[5] = tmp2Result;
        tmp12 = tmp2Result;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        if (cResult[7] === str) {
          let tmp14;
          let tmp17;
          let tmp19;
          if (cResult[8] === tmp6) {
            tmp14 = cResult[9];
          }
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp2Result2 = AssetRegistry2;
            cResult[10] = tmp2Result2;
            tmp17 = tmp2Result2;
          } else {
            tmp17 = cResult[10];
          }
          if (cResult[11] !== tmp6) {
            let tmp20;
            const _Symbol2 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const obj2 = { position: "absolute", top: 0 };
              cResult[13] = obj2;
              tmp20 = obj2;
            } else {
              tmp20 = cResult[13];
            }
            const items = [tmp6];
            const items1 = [];
            items1[HermesBuiltin.arraySpread(items1, items.flat(), 0)] = tmp20;
            cResult[11] = tmp6;
            cResult[12] = items1;
            tmp19 = items1;
          } else {
            tmp19 = cResult[12];
          }
          if (cResult[14] === INTERACTIVE_ICON_DEFAULT) {
            if (cResult[15] === tmp5) {
              let tmp22;
              if (cResult[16] === tmp19) {
                tmp22 = cResult[17];
              }
              if (cResult[18] === tmp14) {
                let tmp28;
                if (cResult[19] === tmp22) {
                  tmp28 = cResult[20];
                }
                return tmp28;
              }
              const obj3 = { children: items2 };
              items2 = [tmp14, tmp22];
              const tmp31 = metroImportDefault(View, obj3);
              cResult[18] = tmp14;
              cResult[19] = tmp22;
              cResult[20] = tmp31;
              tmp28 = tmp31;
            }
          }
          const obj4 = { source: tmp17, color: INTERACTIVE_ICON_DEFAULT, style: tmp19 };
          const BaseIconImage2 = BaseIconImage3.BaseIconImage;
          const merged = Object.assign(tmp5);
          const tmp27 = metroRequire(BaseIconImage2, obj4);
          cResult[14] = INTERACTIVE_ICON_DEFAULT;
          cResult[15] = tmp5;
          cResult[16] = tmp19;
          cResult[17] = tmp27;
          tmp22 = tmp27;
        }
      }
      const obj5 = { source: tmp12, color: str, style: tmp6 };
      const BaseIconImage = BaseIconImage3.BaseIconImage;
      const merged1 = Object.assign(tmp5);
      const tmp16 = metroRequire(BaseIconImage, obj5);
      cResult[6] = tmp5;
      cResult[7] = str;
      cResult[8] = tmp6;
      cResult[9] = tmp16;
      tmp14 = tmp16;
    }
  : (color) => {
      let items;
      let items2;
      let secondaryColor;
      let style;
      ({ style, secondaryColor } = color);
      if (secondaryColor === undefined) {
        secondaryColor = "transparent";
      }
      let INTERACTIVE_ICON_DEFAULT = color.color;
      if (INTERACTIVE_ICON_DEFAULT === undefined) {
        INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
      }
      const merged = Object.assign(color, Object.assign({ style: 0, secondaryColor: 0, color: 0 }));
      const obj = { children: items };
      const obj2 = { source: AssetRegistry, color: secondaryColor, style };
      const BaseIconImage = BaseIconImage3.BaseIconImage;
      const merged1 = Object.assign(merged);
      items = [metroRequire(BaseIconImage, obj2)];
      const obj3 = { source: AssetRegistry2, color: INTERACTIVE_ICON_DEFAULT, style: items2 };
      const BaseIconImage2 = BaseIconImage3.BaseIconImage;
      const items1 = [style];
      items2 = [];
      items2[HermesBuiltin.arraySpread(items2, items1.flat(), 0)] = { position: "absolute", top: 0 };
      const merged2 = Object.assign(merged);
      items[1] = metroRequire(BaseIconImage2, obj3);
      return metroImportDefault(View, obj);
    };
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx");

export const CircleErrorIcon = tmp4;
