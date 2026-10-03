// === Module 8348: MinecraftNeutralIcon ===

// Module 8348 (MinecraftNeutralIcon)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import BaseIconImage from "BaseIconImage" /* 4579 */;
import _mod8349 from "module_8349" /* 8349 */;
import _mod8350 from "module_8350" /* 8350 */;
import _mod8351 from "module_8351" /* 8351 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["style", "color", "secondaryColor", "tertiaryColor"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/MinecraftNeutralIcon.tsx");

export const MinecraftNeutralIcon = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(31);
  if (cResult[0] !== arg0) {
    ({ style, color, secondaryColor, tertiaryColor } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = tmp10;
    cResult[2] = style;
    cResult[3] = color;
    cResult[4] = secondaryColor;
    cResult[5] = tertiaryColor;
    let tmp7 = tertiaryColor;
    let tmp6 = secondaryColor;
    let INTERACTIVE_ICON_DEFAULT = color;
    let tmp5 = style;
    let tmp4 = tmp10;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    INTERACTIVE_ICON_DEFAULT = cResult[3];
    tmp6 = cResult[4];
    tmp7 = cResult[5];
  }
  if (undefined === INTERACTIVE_ICON_DEFAULT) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  let str = "#000";
  if (undefined !== tmp6) {
    str = tmp6;
  }
  let str2 = "#fff";
  if (undefined !== tmp7) {
    str2 = tmp7;
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = _mod8349;
    cResult[6] = tmpResult;
    let tmp12 = tmpResult;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] === INTERACTIVE_ICON_DEFAULT) {
    if (cResult[8] === tmp4) {
      if (cResult[9] === tmp5) {
        let tmp14 = cResult[10];
      }
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult3 = _mod8350;
        cResult[11] = tmpResult3;
        let tmp17 = tmpResult3;
      } else {
        tmp17 = cResult[11];
      }
      if (cResult[12] !== tmp5) {
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { position: "absolute", top: 0 };
          cResult[14] = obj2;
          let tmp20 = obj2;
        } else {
          tmp20 = cResult[14];
        }
        const items = [tmp5];
        const items1 = [];
        items1[HermesBuiltin.arraySpread(items.flat(), 0)] = tmp20;
        cResult[12] = tmp5;
        cResult[13] = items1;
      } else {
        if (cResult[15] === tmp4) {
          if (cResult[16] === str) {
            if (cResult[17] === tmp19) {
              let tmp23 = cResult[18];
            }
            const _Symbol3 = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const tmpResult4 = _mod8351;
              cResult[19] = tmpResult4;
              let tmp29 = tmpResult4;
            } else {
              tmp29 = cResult[19];
            }
            if (cResult[20] !== tmp5) {
              const _Symbol4 = Symbol;
              if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                const obj3 = { position: "absolute", top: 0 };
                cResult[22] = obj3;
                let tmp32 = obj3;
              } else {
                tmp32 = cResult[22];
              }
              const items2 = [tmp5];
              const items3 = [];
              items3[HermesBuiltin.arraySpread(items2.flat(), 0)] = tmp32;
              cResult[20] = tmp5;
              cResult[21] = items3;
            } else {
              if (cResult[23] === tmp4) {
                if (cResult[24] === tmp31) {
                  if (cResult[25] === str2) {
                    let tmp35 = cResult[26];
                  }
                  if (cResult[27] === tmp35) {
                    if (cResult[28] === tmp14) {
                      if (cResult[29] === tmp23) {
                        let tmp41 = cResult[30];
                      }
                      return tmp41;
                    }
                  }
                  const obj4 = { children: null };
                  const items4 = [tmp14, tmp23, tmp35];
                  obj4.children = items4;
                  const tmp44 = React5(View, obj4);
                  cResult[27] = tmp35;
                  cResult[28] = tmp14;
                  cResult[29] = tmp23;
                  cResult[30] = tmp44;
                  tmp41 = tmp44;
                }
              }
              const obj5 = { source: tmp29, color: str2, style: cResult[21] };
              const merged = Object.assign(tmp4);
              const tmp40 = timestampProducer(BaseIconImage.BaseIconImage, obj5);
              cResult[23] = tmp4;
              cResult[24] = cResult[21];
              cResult[25] = str2;
              cResult[26] = tmp40;
              tmp35 = tmp40;
            }
          }
        }
        const obj6 = { source: tmp17, color: str, style: cResult[13] };
        const merged1 = Object.assign(tmp4);
        const tmp28 = timestampProducer(BaseIconImage.BaseIconImage, obj6);
        cResult[15] = tmp4;
        cResult[16] = str;
        cResult[17] = cResult[13];
        cResult[18] = tmp28;
        tmp23 = tmp28;
      }
    }
  }
  const merged2 = Object.assign(tmp4);
  const tmp16 = timestampProducer(BaseIconImage.BaseIconImage, { source: tmp12, color: INTERACTIVE_ICON_DEFAULT, style: tmp5 });
  cResult[7] = INTERACTIVE_ICON_DEFAULT;
  cResult[8] = tmp4;
  cResult[9] = tmp5;
  cResult[10] = tmp16;
  tmp14 = tmp16;
  const obj7 = { source: tmp12, color: INTERACTIVE_ICON_DEFAULT, style: tmp5 };
}) : ((secondaryColor) => {
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
  const obj = { children: null };
  const merged1 = Object.assign(merged);
  const items = [timestampProducer(BaseIconImage.BaseIconImage, { source: _mod8349, color, style }), , ];
  const obj3 = { source: _mod8350, color: str, style: null };
  const items1 = [style];
  const items2 = [];
  items2[HermesBuiltin.arraySpread(items1.flat(), 0)] = { position: "absolute", top: 0 };
  obj3.style = items2;
  const merged2 = Object.assign(merged);
  items[1] = timestampProducer(BaseIconImage.BaseIconImage, obj3);
  const obj4 = { source: _mod8351, color: str2, style: null };
  const items3 = [style];
  const items4 = [];
  items4[HermesBuiltin.arraySpread(items3.flat(), 0)] = { position: "absolute", top: 0 };
  obj4.style = items4;
  const merged3 = Object.assign(merged);
  items[2] = timestampProducer(BaseIconImage.BaseIconImage, obj4);
  obj.children = items;
  return React5(View, obj);
});