// discord_app/design/void/BetaTag/native/BetaTag.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/05605_LinearGradient.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Gradients = fn(6938).Gradients;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = {
  container: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
    borderRadius: nativeDefault.radii.lg,
    marginLeft: 8,
    paddingHorizontal: 8,
    justifyContent: "center",
  },
  text: { textTransform: "uppercase" },
};
let closure_6 = createStyles.createStyles(obj2);
let obj4 = { SMALL: "small", MEDIUM: "medium" };
const ReactCompilerGating = fn(558);
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: nativeDefault.radii.lg,
  marginLeft: 8,
  paddingHorizontal: 8,
  justifyContent: "center",
};
const size = fn(2);
const result = size.fileFinishedImporting("design/void/BetaTag/native/BetaTag.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(26);
      ({ style, textStyle, size, gradient } = arg0);
      if (undefined === size) {
        size = obj4.MEDIUM;
      }
      const tmp6 = closure_6();
      let str = "text-xs/bold";
      if (obj4.SMALL !== size) {
        if (obj4.MEDIUM === size) {
          str = "text-sm/bold";
        }
      }
      if (tmp5) {
        if (cResult[0] === style) {
          if (cResult[1] === tmp6.container) {
            let tmp19 = cResult[2];
          }
          if (cResult[3] === tmp6.text) {
            if (cResult[4] === textStyle) {
              let tmp20 = cResult[5];
            }
            const _Symbol2 = Symbol;
            if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = util.intl;
              const stringResult = intl2.string(util.t.oW0eUd);
              cResult[6] = stringResult;
              let tmp22 = stringResult;
            } else {
              tmp22 = cResult[6];
            }
            if (cResult[7] === tmp20) {
              if (cResult[8] === str) {
                let tmp24 = cResult[9];
              }
              if (cResult[10] === tmp19) {
                if (cResult[11] === tmp24) {
                  let tmp27 = cResult[12];
                }
                return tmp27;
              }
              const obj2 = {
                style: tmp19,
                start: ConstantsIOS.HorizontalGradient.START,
                end: ConstantsIOS.HorizontalGradient.END,
                colors: Gradients.PREMIUM_TIER_2_TRI_COLOR,
                children: tmp24,
              };
              const tmp32 = jsx(LinearGradientDefault, {
                style: tmp19,
                start: ConstantsIOS.HorizontalGradient.START,
                end: ConstantsIOS.HorizontalGradient.END,
                colors: Gradients.PREMIUM_TIER_2_TRI_COLOR,
                children: tmp24,
              });
              cResult[10] = tmp19;
              cResult[11] = tmp24;
              cResult[12] = tmp32;
              tmp27 = tmp32;
            }
            const obj3 = { variant: str, color: "text-overlay-light", style: tmp20, children: tmp22 };
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
          if (cResult[14] === tmp6.container) {
            let tmp7 = cResult[15];
          }
          if (cResult[16] === tmp6.text) {
            if (cResult[17] === textStyle) {
              let tmp8 = cResult[18];
            }
            const _Symbol = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = util.intl;
              const stringResult1 = intl.string(util.t.oW0eUd);
              cResult[19] = stringResult1;
              let tmp10 = stringResult1;
            } else {
              tmp10 = cResult[19];
            }
            if (cResult[20] === tmp8) {
              if (cResult[21] === str) {
                let tmp12 = cResult[22];
              }
              if (cResult[23] === tmp7) {
                if (cResult[24] === tmp12) {
                  let tmp15 = cResult[25];
                }
                return tmp15;
              }
              obj4 = { style: tmp7, children: tmp12 };
              const tmp18 = <View style={tmp7}>{tmp12}</View>;
              cResult[23] = tmp7;
              cResult[24] = tmp12;
              cResult[25] = tmp18;
              tmp15 = tmp18;
            }
            const obj5 = { variant: str, color: "text-overlay-light", style: tmp8, children: tmp10 };
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
      tmp5 = undefined !== gradient && gradient;
    }
  : (gradient) => {
      ({ style, textStyle, size } = gradient);
      if (size === undefined) {
        size = obj4.MEDIUM;
      }
      let flag = gradient.gradient;
      if (flag === undefined) {
        flag = false;
      }
      const tmp2 = closure_6();
      let str = "text-xs/bold";
      if (obj4.SMALL !== size) {
        if (obj4.MEDIUM === size) {
          str = "text-sm/bold";
        }
      }
      if (flag) {
        const obj2 = { style: null, start: null, end: null, colors: null, children: null };
        const items = [tmp2.container, style];
        obj2.style = items;
        obj2.start = ConstantsIOS.HorizontalGradient.START;
        obj2.end = ConstantsIOS.HorizontalGradient.END;
        obj2.colors = Gradients.PREMIUM_TIER_2_TRI_COLOR;
        const obj3 = { variant: str, color: "text-overlay-light", style: null, children: null };
        const items1 = [tmp2.text, textStyle];
        obj3.style = items1;
        const intl2 = util.intl;
        obj3.children = intl2.string(util.t.oW0eUd);
        obj2.children = jsx(Text_Text.Text, { variant: str, color: "text-overlay-light", style: null, children: null });
        let tmp3Result = jsx(LinearGradientDefault, {
          style: null,
          start: null,
          end: null,
          colors: null,
          children: null,
        });
      } else {
        const obj = { style: null, children: null };
        const items2 = [tmp2.container, style];
        obj.style = items2;
        obj4 = { variant: str, color: "text-overlay-light", style: null, children: null };
        const items3 = [tmp2.text, textStyle];
        obj4.style = items3;
        const intl = util.intl;
        obj4.children = intl.string(util.t.oW0eUd);
        obj.children = jsx(Text_Text.Text, { variant: str, color: "text-overlay-light", style: null, children: null });
        tmp3Result = <View style={null}>{null}</View>;
      }
      return tmp3Result;
    };
export const BetaSizes = obj4;
