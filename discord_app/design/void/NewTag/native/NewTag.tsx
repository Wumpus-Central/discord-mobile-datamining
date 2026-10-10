// === Module 14380: NewTag ===

// Module 14380 (NewTag)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["containerStyle", "textStyle", "variant", "color", "gradient", "borderRadius", "colors"];
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Platform } = get_ActivityIndicator);
const HorizontalGradient = fn(1085).HorizontalGradient;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { tagContainer: { height: "auto", backgroundColor: nativeDefault.unsafe_rawColors.RED_400, justifyContent: "center", alignItems: "center", paddingHorizontal: 4, marginBottom: 2, borderRadius: nativeDefault.radii.round }, tagText: { textTransform: "uppercase" } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { height: "auto", backgroundColor: nativeDefault.unsafe_rawColors.RED_400, justifyContent: "center", alignItems: "center", paddingHorizontal: 4, marginBottom: 2, borderRadius: nativeDefault.radii.round };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/NewTag/native/NewTag.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function NewTag(arg0) {
  let tmp2 = dependencyMap;
  const cResult = c.c(47);
  if (cResult[0] !== arg0) {
    ({ containerStyle, textStyle, variant, color, gradient, borderRadius, colors } = arg0);
    const tmp13 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = containerStyle;
    cResult[2] = variant;
    cResult[3] = color;
    cResult[4] = gradient;
    cResult[5] = borderRadius;
    cResult[6] = colors;
    cResult[7] = tmp13;
    cResult[8] = textStyle;
    let tmp10 = textStyle;
    let tmp9 = tmp13;
    let tmp8 = colors;
    let sm = borderRadius;
    let tmp7 = gradient;
    let tmp6 = color;
    let tmp5 = variant;
    let tmp4 = containerStyle;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    sm = cResult[5];
    tmp8 = cResult[6];
    tmp9 = cResult[7];
    tmp10 = cResult[8];
  }
  let str = "heading-sm/semibold";
  if (undefined !== tmp5) {
    str = tmp5;
  }
  let str2 = "text-overlay-light";
  if (undefined !== tmp6) {
    str2 = tmp6;
  }
  if (undefined === sm) {
    sm = nativeDefault.radii.sm;
  }
  if (cResult[9] !== tmp8) {
    let tmp17 = tmp8;
    if (undefined === tmp8) {
      const items = [nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE, nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK];
      tmp17 = items;
    }
    cResult[9] = tmp8;
    cResult[10] = tmp17;
    let tmp16 = tmp17;
  } else {
    tmp16 = cResult[10];
  }
  const tmp19 = closure_8();
  if (tmp14) {
    if (cResult[11] !== sm) {
      const obj2 = { borderRadius: sm, marginLeft: nativeDefault.space.PX_4 };
      cResult[11] = sm;
      cResult[12] = obj2;
      let tmp35 = obj2;
    } else {
      tmp35 = cResult[12];
    }
    if (cResult[13] === tmp4) {
      if (cResult[14] === tmp19.tagContainer) {
        let tmp37 = cResult[15];
      }
      if (cResult[16] === tmp19.tagText) {
        if (cResult[17] === tmp10) {
          let tmp38 = cResult[18];
        }
        const _Symbol2 = Symbol;
        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = util.intl;
          const stringResult = intl2.string(util.t.y2b7CA);
          cResult[19] = stringResult;
          let tmp40 = stringResult;
        } else {
          tmp40 = cResult[19];
        }
        if (cResult[20] === str2) {
          if (cResult[21] === tmp38) {
            if (cResult[22] === tmp9) {
              if (cResult[23] === str) {
                let tmp42 = cResult[24];
              }
              if (cResult[25] === tmp42) {
                if (cResult[26] === tmp37) {
                  let tmp48 = cResult[27];
                }
                if (cResult[28] === tmp16) {
                  if (cResult[29] === tmp48) {
                  }
                }
                const obj3 = { style: tmp35, start: null, end: null, colors: null, children: null };
                ({ START: obj7.start, END: obj7.end } = HorizontalGradient);
                obj3.colors = tmp16;
                obj3.children = tmp48;
                tmp2 = jsx(LinearGradientDefault, { style: tmp35, start: null, end: null, colors: null, children: null });
                cResult[28] = tmp16;
                cResult[29] = tmp48;
                cResult[30] = tmp35;
                cResult[31] = tmp2;
              }
              const obj4 = { style: tmp37, children: tmp42 };
              const tmp51 = <hasOwnProperty style={tmp37}>{tmp42}</hasOwnProperty>;
              cResult[25] = tmp42;
              cResult[26] = tmp37;
              cResult[27] = tmp51;
              tmp48 = tmp51;
            }
          }
        }
        const obj5 = { variant: str, color: str2 };
        const merged = Object.assign(tmp9);
        obj5.style = tmp38;
        obj5.children = tmp40;
        const tmp47 = jsx(Text_Text.Text, { variant: str, color: str2 });
        cResult[20] = str2;
        cResult[21] = tmp38;
        cResult[22] = tmp9;
        cResult[23] = str;
        cResult[24] = tmp47;
        tmp42 = tmp47;
      }
      const items1 = [tmp19.tagText, tmp10];
      cResult[16] = tmp19.tagText;
      cResult[17] = tmp10;
      cResult[18] = items1;
      tmp38 = items1;
    }
    const items2 = [tmp19.tagContainer, tmp4];
    cResult[13] = tmp4;
    cResult[14] = tmp19.tagContainer;
    cResult[15] = items2;
    tmp37 = items2;
  } else {
    if (cResult[32] === tmp4) {
      if (cResult[33] === tmp19.tagContainer) {
        let tmp20 = cResult[34];
      }
      if (cResult[35] === tmp19.tagText) {
        if (cResult[36] === tmp10) {
          let tmp21 = cResult[37];
        }
        const _Symbol = Symbol;
        if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult1 = intl.string(util.t.y2b7CA);
          cResult[38] = stringResult1;
          let tmp23 = stringResult1;
        } else {
          tmp23 = cResult[38];
        }
        if (cResult[39] === str2) {
          if (cResult[40] === tmp21) {
            if (cResult[41] === tmp9) {
              if (cResult[42] === str) {
                let tmp25 = cResult[43];
              }
              if (cResult[44] === tmp25) {
                if (cResult[45] === tmp20) {
                  let tmp31 = cResult[46];
                }
                return tmp31;
              }
              const obj6 = { style: tmp20, children: tmp25 };
              const tmp34 = <hasOwnProperty style={tmp20}>{tmp25}</hasOwnProperty>;
              cResult[44] = tmp25;
              cResult[45] = tmp20;
              cResult[46] = tmp34;
              tmp31 = tmp34;
            }
          }
        }
        const obj13 = { variant: str, color: str2 };
        const merged1 = Object.assign(tmp9);
        obj13.style = tmp21;
        obj13.children = tmp23;
        const tmp30 = jsx(Text_Text.Text, { variant: str, color: str2 });
        cResult[39] = str2;
        cResult[40] = tmp21;
        cResult[41] = tmp9;
        cResult[42] = str;
        cResult[43] = tmp30;
        tmp25 = tmp30;
      }
      const items3 = [tmp19.tagText, tmp10];
      cResult[35] = tmp19.tagText;
      cResult[36] = tmp10;
      cResult[37] = items3;
      tmp21 = items3;
    }
    const items4 = [tmp19.tagContainer, tmp4];
    cResult[32] = tmp4;
    cResult[33] = tmp19.tagContainer;
    cResult[34] = items4;
    tmp20 = items4;
  }
  tmp14 = undefined !== tmp7 && tmp7;
}) : (function NewTag(color) {
  ({ containerStyle, textStyle, variant } = color);
  if (variant === undefined) {
    variant = "heading-sm/semibold";
  }
  let str = color.color;
  if (str === undefined) {
    str = "text-overlay-light";
  }
  let flag = color.gradient;
  if (flag === undefined) {
    flag = false;
  }
  let sm = color.borderRadius;
  if (sm === undefined) {
    sm = nativeDefault.radii.sm;
  }
  let colors = color.colors;
  if (colors === undefined) {
    const items = [nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE, nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK];
    colors = items;
  }
  const merged = Object.assign(color, Object.assign({ containerStyle: 0, textStyle: 0, variant: 0, color: 0, gradient: 0, borderRadius: 0, colors: 0 }));
  const tmp6 = closure_8();
  if (flag) {
    const obj2 = { style: null, start: null, end: null, colors: null, children: null };
    const obj4 = { borderRadius: sm, marginLeft: nativeDefault.space.PX_4 };
    obj2.style = obj4;
    ({ START: obj3.start, END: obj3.end } = HorizontalGradient);
    obj2.colors = colors;
    const obj5 = { style: null, children: null };
    const items1 = [tmp6.tagContainer, containerStyle];
    obj5.style = items1;
    const obj6 = { variant, color: str };
    const merged1 = Object.assign(merged);
    const items2 = [tmp6.tagText, textStyle];
    obj6.style = items2;
    const intl2 = util.intl;
    obj6.children = intl2.string(util.t.y2b7CA);
    obj5.children = jsx(Text_Text.Text, { variant, color: str });
    obj2.children = <hasOwnProperty style={null}>{null}</hasOwnProperty>;
    let tmp7Result = jsx(LinearGradientDefault, { style: null, start: null, end: null, colors: null, children: null });
  } else {
    const obj = { style: null, children: null };
    const items3 = [tmp6.tagContainer, containerStyle];
    obj.style = items3;
    const obj11 = { variant, color: str };
    const merged2 = Object.assign(merged);
    const items4 = [tmp6.tagText, textStyle];
    obj11.style = items4;
    const intl = util.intl;
    obj11.children = intl.string(util.t.y2b7CA);
    obj.children = jsx(Text_Text.Text, { variant, color: str });
    tmp7Result = <hasOwnProperty style={null}>{null}</hasOwnProperty>;
  }
  return tmp7Result;
});