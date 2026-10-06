// discord_app/design/void/BetaTag/native/BetaTag.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/05612_LinearGradient.js";
import ColorConstants from "../../../../modules/colors/native/ColorConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let obj2;
const View = react_native.View;
const Gradients = ColorConstants.Gradients;
const jsx = Fragment.jsx;
let obj = { container: obj2, text: { textTransform: "uppercase" } };
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: nativeDefault.radii.lg,
  marginLeft: 8,
  paddingHorizontal: 8,
  justifyContent: "center",
};
let closure_6 = createStyles.createStyles(obj);
let obj3 = { SMALL: "small", MEDIUM: "medium" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let gradient;
      let style;
      let textStyle;
      const obj = react2;
      const cResult = obj.c(26);
      ({ style, textStyle, size, gradient } = arg0);
      if (undefined === size) {
        size = obj3.MEDIUM;
      }
      const tmp5 = undefined !== gradient && gradient;
      const tmp6 = closure_6();
      let str = "text-xs/bold";
      if (obj3.SMALL !== size) {
        if (obj3.MEDIUM === size) {
          str = "text-sm/bold";
        }
      }
      if (tmp5) {
        if (cResult[0] === style) {
          let tmp19;
          if (cResult[1] === tmp6.container) {
            tmp19 = cResult[2];
          }
          if (cResult[3] === tmp6.text) {
            let tmp20;
            let tmp22;
            if (cResult[4] === textStyle) {
              tmp20 = cResult[5];
            }
            const _Symbol2 = Symbol;
            if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = intl3.intl;
              const stringResult = intl2.string(intl3.t.oW0eUd);
              cResult[6] = stringResult;
              tmp22 = stringResult;
            } else {
              tmp22 = cResult[6];
            }
            if (cResult[7] === tmp20) {
              let tmp24;
              if (cResult[8] === str) {
                tmp24 = cResult[9];
              }
              if (cResult[10] === tmp19) {
                let tmp27;
                if (cResult[11] === tmp24) {
                  tmp27 = cResult[12];
                }
                return tmp27;
              }
              LinearGradientDefault;
              const tmp32 = (
                <tmp30
                  style={tmp19}
                  start={ConstantsIOS.HorizontalGradient.START}
                  end={ConstantsIOS.HorizontalGradient.END}
                  colors={Gradients.PREMIUM_TIER_2_TRI_COLOR}
                >
                  {tmp24}
                </tmp30>
              );
              cResult[10] = tmp19;
              cResult[11] = tmp24;
              cResult[12] = tmp32;
              tmp27 = tmp32;
            }
            const tmp26 = jsx(Text_Text.Text, {
              variant: str,
              color: "text-overlay-light",
              style: tmp20,
              children: tmp22,
            });
            cResult[7] = tmp20;
            cResult[8] = str;
            cResult[9] = tmp26;
            tmp24 = tmp26;
          }
          const items = [tmp6.text, textStyle];
          cResult[3] = tmp6.text;
          cResult[4] = textStyle;
          cResult[5] = items;
          tmp20 = items;
        }
        const items1 = [tmp6.container, style];
        cResult[0] = style;
        cResult[1] = tmp6.container;
        cResult[2] = items1;
        tmp19 = items1;
      } else {
        if (cResult[13] === style) {
          let tmp7;
          if (cResult[14] === tmp6.container) {
            tmp7 = cResult[15];
          }
          if (cResult[16] === tmp6.text) {
            let tmp8;
            let tmp10;
            if (cResult[17] === textStyle) {
              tmp8 = cResult[18];
            }
            const _Symbol = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = intl3.intl;
              const stringResult1 = intl.string(intl3.t.oW0eUd);
              cResult[19] = stringResult1;
              tmp10 = stringResult1;
            } else {
              tmp10 = cResult[19];
            }
            if (cResult[20] === tmp8) {
              let tmp12;
              if (cResult[21] === str) {
                tmp12 = cResult[22];
              }
              if (cResult[23] === tmp7) {
                let tmp15;
                if (cResult[24] === tmp12) {
                  tmp15 = cResult[25];
                }
                return tmp15;
              }
              const tmp18 = <View style={tmp7}>{tmp12}</View>;
              cResult[23] = tmp7;
              cResult[24] = tmp12;
              cResult[25] = tmp18;
              tmp15 = tmp18;
            }
            const tmp14 = jsx(Text_Text.Text, {
              variant: str,
              color: "text-overlay-light",
              style: tmp8,
              children: tmp10,
            });
            cResult[20] = tmp8;
            cResult[21] = str;
            cResult[22] = tmp14;
            tmp12 = tmp14;
          }
          const items2 = [tmp6.text, textStyle];
          cResult[16] = tmp6.text;
          cResult[17] = textStyle;
          cResult[18] = items2;
          tmp8 = items2;
        }
        const items3 = [tmp6.container, style];
        cResult[13] = style;
        cResult[14] = tmp6.container;
        cResult[15] = items3;
        tmp7 = items3;
      }
    }
  : (gradient) => {
      let intl;
      let intl2;
      let items1;
      let items3;
      let style;
      let textStyle;
      let tmp3Result;
      ({ style, textStyle, size } = gradient);
      if (size === undefined) {
        size = obj3.MEDIUM;
      }
      let flag = gradient.gradient;
      if (flag === undefined) {
        flag = false;
      }
      const tmp2 = closure_6();
      let str = "text-xs/bold";
      if (obj3.SMALL !== size) {
        if (obj3.MEDIUM === size) {
          str = "text-sm/bold";
        }
      }
      if (flag) {
        const items = [tmp2.container, style];
        LinearGradientDefault;
        obj3 = { variant: str, color: "text-overlay-light", style: items1, children: intl2.string(intl3.t.oW0eUd) };
        items1 = [tmp2.text, textStyle];
        const Text2 = Text_Text.Text;
        intl2 = intl3.intl;
        tmp3Result = (
          <tmp10
            style={items}
            start={ConstantsIOS.HorizontalGradient.START}
            end={ConstantsIOS.HorizontalGradient.END}
            colors={Gradients.PREMIUM_TIER_2_TRI_COLOR}
          >
            {null}
          </tmp10>
        );
      } else {
        const items2 = [tmp2.container, style];
        ({ variant: str, color: "text-overlay-light", style: items3, children: intl.string(intl3.t.oW0eUd) });
        items3 = [tmp2.text, textStyle];
        const Text = Text_Text.Text;
        intl = intl3.intl;
        tmp3Result = <View style={items2}>{null}</View>;
      }
      return tmp3Result;
    };
let size = size_mod;
const result = size.fileFinishedImporting("design/void/BetaTag/native/BetaTag.tsx");

export default tmp3;
export const BetaSizes = obj3;
