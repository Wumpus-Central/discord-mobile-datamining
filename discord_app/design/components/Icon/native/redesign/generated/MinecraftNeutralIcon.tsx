// === Module 8348: MinecraftNeutralIcon ===

// Module 8348 (MinecraftNeutralIcon)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import BaseIconImage4 from "BaseIconImage" /* 4579 */;
import AssetRegistry from "AssetRegistry" /* 8349 */;
import AssetRegistry2 from "AssetRegistry" /* 8350 */;
import AssetRegistry3 from "AssetRegistry" /* 8351 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let closure_3 = ["style", "color", "secondaryColor", "tertiaryColor"];
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let INTERACTIVE_ICON_DEFAULT;
  let color;
  let items4;
  let secondaryColor;
  let style;
  let tertiaryColor;
  let tmp13;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(31);
  if (cResult[0] !== arg0) {
    ({ style, color, secondaryColor, tertiaryColor } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = tmp11;
    cResult[2] = style;
    cResult[3] = color;
    cResult[4] = secondaryColor;
    cResult[5] = tertiaryColor;
    tmp8 = tertiaryColor;
    tmp7 = secondaryColor;
    INTERACTIVE_ICON_DEFAULT = color;
    tmp6 = style;
    tmp5 = tmp11;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
    INTERACTIVE_ICON_DEFAULT = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  if (undefined === INTERACTIVE_ICON_DEFAULT) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  let str = "#000";
  if (undefined !== tmp7) {
    str = tmp7;
  }
  let str2 = "#fff";
  if (undefined !== tmp8) {
    str2 = tmp8;
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp2Result = AssetRegistry;
    cResult[6] = tmp2Result;
    tmp13 = tmp2Result;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] === INTERACTIVE_ICON_DEFAULT) {
    if (cResult[8] === tmp5) {
      let tmp15;
      let tmp18;
      let tmp20;
      if (cResult[9] === tmp6) {
        tmp15 = cResult[10];
      }
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp2Result3 = AssetRegistry2;
        cResult[11] = tmp2Result3;
        tmp18 = tmp2Result3;
      } else {
        tmp18 = cResult[11];
      }
      if (cResult[12] !== tmp6) {
        let tmp21;
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { position: "absolute", top: 0 };
          cResult[14] = obj2;
          tmp21 = obj2;
        } else {
          tmp21 = cResult[14];
        }
        const items = [tmp6];
        const items1 = [];
        items1[HermesBuiltin.arraySpread(items1, items.flat(), 0)] = tmp21;
        cResult[12] = tmp6;
        cResult[13] = items1;
        tmp20 = items1;
      } else {
        tmp20 = cResult[13];
      }
      if (cResult[15] === tmp5) {
        if (cResult[16] === str) {
          let tmp23;
          let tmp29;
          let tmp31;
          if (cResult[17] === tmp20) {
            tmp23 = cResult[18];
          }
          const _Symbol3 = Symbol;
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp2Result4 = AssetRegistry3;
            cResult[19] = tmp2Result4;
            tmp29 = tmp2Result4;
          } else {
            tmp29 = cResult[19];
          }
          if (cResult[20] !== tmp6) {
            let tmp32;
            const _Symbol4 = Symbol;
            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
              const obj3 = { position: "absolute", top: 0 };
              cResult[22] = obj3;
              tmp32 = obj3;
            } else {
              tmp32 = cResult[22];
            }
            const items2 = [tmp6];
            const items3 = [];
            items3[HermesBuiltin.arraySpread(items3, items2.flat(), 0)] = tmp32;
            cResult[20] = tmp6;
            cResult[21] = items3;
            tmp31 = items3;
          } else {
            tmp31 = cResult[21];
          }
          if (cResult[23] === tmp5) {
            if (cResult[24] === tmp31) {
              let tmp34;
              if (cResult[25] === str2) {
                tmp34 = cResult[26];
              }
              if (cResult[27] === tmp34) {
                if (cResult[28] === tmp15) {
                  let tmp40;
                  if (cResult[29] === tmp23) {
                    tmp40 = cResult[30];
                  }
                  return tmp40;
                }
              }
              const obj4 = { children: items4 };
              items4 = [tmp15, tmp23, tmp34];
              const tmp43 = metroImportDefault(View, obj4);
              cResult[27] = tmp34;
              cResult[28] = tmp15;
              cResult[29] = tmp23;
              cResult[30] = tmp43;
              tmp40 = tmp43;
            }
          }
          const obj5 = { source: tmp29, color: str2, style: tmp31 };
          const BaseIconImage3 = BaseIconImage4.BaseIconImage;
          const merged = Object.assign(tmp5);
          const tmp39 = metroRequire(BaseIconImage3, obj5);
          cResult[23] = tmp5;
          cResult[24] = tmp31;
          cResult[25] = str2;
          cResult[26] = tmp39;
          tmp34 = tmp39;
        }
      }
      const obj6 = { source: tmp18, color: str, style: tmp20 };
      const BaseIconImage2 = BaseIconImage4.BaseIconImage;
      const merged1 = Object.assign(tmp5);
      const tmp28 = metroRequire(BaseIconImage2, obj6);
      cResult[15] = tmp5;
      cResult[16] = str;
      cResult[17] = tmp20;
      cResult[18] = tmp28;
      tmp23 = tmp28;
    }
  }
  const obj7 = { source: tmp13, color: INTERACTIVE_ICON_DEFAULT, style: tmp6 };
  const BaseIconImage = BaseIconImage4.BaseIconImage;
  const merged2 = Object.assign(tmp5);
  const tmp17 = metroRequire(BaseIconImage, obj7);
  cResult[7] = INTERACTIVE_ICON_DEFAULT;
  cResult[8] = tmp5;
  cResult[9] = tmp6;
  cResult[10] = tmp17;
  tmp15 = tmp17;
}) : ((secondaryColor) => {
  let color;
  let items;
  let items2;
  let items4;
  let style;
  ({ style, color } = secondaryColor);
  if (color === undefined) {
    color = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  let str = secondaryColor.secondaryColor;
  if (str === undefined) {
    str = "#000";
  }
  let str2 = secondaryColor.tertiaryColor;
  if (str2 === undefined) {
    str2 = "#fff";
  }
  const merged = Object.assign(secondaryColor, Object.assign({ style: 0, color: 0, secondaryColor: 0, tertiaryColor: 0 }));
  const obj = { children: items };
  const obj2 = { source: AssetRegistry, color, style };
  const BaseIconImage = BaseIconImage4.BaseIconImage;
  const merged1 = Object.assign(merged);
  items = [metroRequire(BaseIconImage, obj2), , ];
  const obj3 = { source: AssetRegistry2, color: str, style: items2 };
  const BaseIconImage2 = BaseIconImage4.BaseIconImage;
  const items1 = [style];
  items2 = [];
  items2[HermesBuiltin.arraySpread(items2, items1.flat(), 0)] = { position: "absolute", top: 0 };
  const merged2 = Object.assign(merged);
  items[1] = metroRequire(BaseIconImage2, obj3);
  const obj4 = { source: AssetRegistry3, color: str2, style: items4 };
  const BaseIconImage3 = BaseIconImage4.BaseIconImage;
  const items3 = [style];
  items4 = [];
  items4[HermesBuiltin.arraySpread(items4, items3.flat(), 0)] = { position: "absolute", top: 0 };
  const merged3 = Object.assign(merged);
  items[2] = metroRequire(BaseIconImage3, obj4);
  return metroImportDefault(View, obj);
});
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/MinecraftNeutralIcon.tsx");

export const MinecraftNeutralIcon = tmp4;