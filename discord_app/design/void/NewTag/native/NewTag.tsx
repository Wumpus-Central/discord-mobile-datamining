// discord_app/design/void/NewTag/native/NewTag.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/05612_LinearGradient.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import createStyles from "../../../components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let Platform;
let hasOwnProperty;
let obj2;
let closure_3 = ["containerStyle", "textStyle", "variant", "color", "gradient", "borderRadius", "colors"];
({ View: hasOwnProperty, Platform } = react_native);
const HorizontalGradient = Constants.HorizontalGradient;
const jsx = Fragment.jsx;
let obj = { tagContainer: obj2, tagText: { textTransform: "uppercase" } };
obj2 = {
  height: "auto",
  backgroundColor: nativeDefault.unsafe_rawColors.RED_400,
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 4,
  marginBottom: 2,
  borderRadius: nativeDefault.radii.round,
};
let closure_8 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let borderRadius;
      let color;
      let colors;
      let containerStyle;
      let gradient;
      let sm;
      let textStyle;
      let tmp10;
      let tmp16;
      let tmp31;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      let variant;
      const obj = react2;
      const cResult = obj.c(47);
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
        tmp10 = textStyle;
        tmp9 = tmp13;
        tmp8 = colors;
        sm = borderRadius;
        tmp7 = gradient;
        tmp6 = color;
        tmp5 = variant;
        tmp4 = containerStyle;
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
      const tmp14 = undefined !== tmp7 && tmp7;
      if (undefined === sm) {
        sm = nativeDefault.radii.sm;
      }
      if (cResult[9] !== tmp8) {
        let tmp17 = tmp8;
        if (undefined === tmp8) {
          const items = [
            nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE,
            nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK,
          ];
          tmp17 = items;
        }
        cResult[9] = tmp8;
        cResult[10] = tmp17;
        tmp16 = tmp17;
      } else {
        tmp16 = cResult[10];
      }
      const tmp19 = closure_8();
      if (tmp14) {
        let tmp35;
        if (cResult[11] !== sm) {
          const obj2 = { borderRadius: sm, marginLeft: nativeDefault.space.PX_4 };
          cResult[11] = sm;
          cResult[12] = obj2;
          tmp35 = obj2;
        } else {
          tmp35 = cResult[12];
        }
        if (cResult[13] === tmp4) {
          let tmp37;
          if (cResult[14] === tmp19.tagContainer) {
            tmp37 = cResult[15];
          }
          if (cResult[16] === tmp19.tagText) {
            let tmp38;
            let tmp40;
            if (cResult[17] === tmp10) {
              tmp38 = cResult[18];
            }
            const _Symbol2 = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = intl3.intl;
              const stringResult = intl2.string(intl3.t.y2b7CA);
              cResult[19] = stringResult;
              tmp40 = stringResult;
            } else {
              tmp40 = cResult[19];
            }
            if (cResult[20] === str2) {
              if (cResult[21] === tmp38) {
                if (cResult[22] === tmp9) {
                  let tmp42;
                  if (cResult[23] === str) {
                    tmp42 = cResult[24];
                  }
                  if (cResult[25] === tmp42) {
                    let tmp48;
                    if (cResult[26] === tmp37) {
                      tmp48 = cResult[27];
                    }
                    if (cResult[28] === tmp16) {
                      if (cResult[29] === tmp48) {
                        let tmp52;
                        if (cResult[30] === tmp35) {
                          tmp52 = cResult[31];
                        }
                        tmp31 = tmp52;
                      }
                    }
                    ({ START: obj7.start, END: obj7.end } = HorizontalGradient);
                    const tmp56 = jsx(LinearGradientDefault, {
                      style: tmp35,
                      start: null,
                      end: null,
                      colors: tmp16,
                      children: tmp48,
                    });
                    cResult[28] = tmp16;
                    cResult[29] = tmp48;
                    cResult[30] = tmp35;
                    cResult[31] = tmp56;
                    tmp52 = tmp56;
                  }
                  const tmp51 = <hasOwnProperty style={tmp37}>{tmp42}</hasOwnProperty>;
                  cResult[25] = tmp42;
                  cResult[26] = tmp37;
                  cResult[27] = tmp51;
                  tmp48 = tmp51;
                }
              }
            }
            const Text2 = Text_Text.Text;
            const merged = Object.assign(tmp9);
            const tmp47 = (
              <Text2 variant={str} color={str2} style={tmp38}>
                {tmp40}
              </Text2>
            );
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
          let tmp20;
          if (cResult[33] === tmp19.tagContainer) {
            tmp20 = cResult[34];
          }
          if (cResult[35] === tmp19.tagText) {
            let tmp21;
            let tmp23;
            if (cResult[36] === tmp10) {
              tmp21 = cResult[37];
            }
            const _Symbol = Symbol;
            if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = intl3.intl;
              const stringResult1 = intl.string(intl3.t.y2b7CA);
              cResult[38] = stringResult1;
              tmp23 = stringResult1;
            } else {
              tmp23 = cResult[38];
            }
            if (cResult[39] === str2) {
              if (cResult[40] === tmp21) {
                if (cResult[41] === tmp9) {
                  let tmp25;
                  if (cResult[42] === str) {
                    tmp25 = cResult[43];
                  }
                  if (cResult[44] === tmp25) {
                    if (cResult[45] === tmp20) {
                      tmp31 = cResult[46];
                    }
                  }
                  const tmp34 = <hasOwnProperty style={tmp20}>{tmp25}</hasOwnProperty>;
                  cResult[44] = tmp25;
                  cResult[45] = tmp20;
                  cResult[46] = tmp34;
                  tmp31 = tmp34;
                }
              }
            }
            const Text = Text_Text.Text;
            const merged1 = Object.assign(tmp9);
            const tmp30 = (
              <Text variant={str} color={str2} style={tmp21}>
                {tmp23}
              </Text>
            );
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
      return tmp31;
    }
  : (color) => {
      let containerStyle;
      let intl;
      let intl2;
      let items2;
      let items4;
      let textStyle;
      let tmp7Result;
      let variant;
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
        const items = [
          nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE,
          nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK,
        ];
        colors = items;
      }
      const merged = Object.assign(
        color,
        Object.assign({
          containerStyle: 0,
          textStyle: 0,
          variant: 0,
          color: 0,
          gradient: 0,
          borderRadius: 0,
          colors: 0,
        }),
      );
      const tmp6 = closure_8();
      if (flag) {
        const obj4 = { borderRadius: sm, marginLeft: nativeDefault.space.PX_4 };
        LinearGradientDefault;
        ({ START: obj3.start, END: obj3.end } = HorizontalGradient);
        const items1 = [tmp6.tagContainer, containerStyle];
        ({ variant, color: str, style: items2, children: intl2.string(intl3.t.y2b7CA) });
        const Text2 = Text_Text.Text;
        const merged1 = Object.assign(merged);
        items2 = [tmp6.tagText, textStyle];
        intl2 = intl3.intl;
        tmp7Result = (
          <tmp17 style={obj4} start={null} end={null} colors={colors}>
            {null}
          </tmp17>
        );
      } else {
        const items3 = [tmp6.tagContainer, containerStyle];
        ({ variant, color: str, style: items4, children: intl.string(intl3.t.y2b7CA) });
        const Text = Text_Text.Text;
        const merged2 = Object.assign(merged);
        items4 = [tmp6.tagText, textStyle];
        intl = intl3.intl;
        tmp7Result = <hasOwnProperty style={items3}>{null}</hasOwnProperty>;
      }
      return tmp7Result;
    };
const result = size.fileFinishedImporting("design/void/NewTag/native/NewTag.tsx");

export default tmp4;
