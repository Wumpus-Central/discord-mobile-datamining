// discord_app/modules/premium/native/components/PillText.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/05388_LinearGradient.js";
import usePremiumPrimaryGradientColorsDefault from "../usePremiumPrimaryGradientColors.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const HorizontalGradient = Constants.HorizontalGradient;
const jsx = jsxProd.jsx;
let obj = {
  pillTextContainer: { paddingHorizontal: 8, borderRadius: nativeDefault.radii.lg, justifyContent: "center" },
  pillText: { textTransform: "uppercase" },
};
let closure_5 = createStyles.createStyles(obj);
let obj2 = { paddingHorizontal: 8, borderRadius: nativeDefault.radii.lg, justifyContent: "center" };
const result = size.fileFinishedImporting("modules/premium/native/components/PillText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function PillText(arg0) {
      const cResult = c.c(10);
      ({ pillText, style } = arg0);
      const tmp4 = closure_5();
      const tmp6 = usePremiumPrimaryGradientColorsDefault();
      if (cResult[0] === style) {
        if (cResult[1] === tmp4.pillTextContainer) {
          let tmp7 = cResult[2];
        }
        if (cResult[3] === pillText) {
          if (cResult[4] === tmp4.pillText) {
            let tmp8 = cResult[5];
          }
          if (cResult[6] === tmp6) {
            if (cResult[7] === tmp7) {
              if (cResult[8] === tmp8) {
                let tmp11 = cResult[9];
              }
              return tmp11;
            }
          }
          const obj2 = { style: tmp7, start: null, end: null, colors: null, children: null };
          ({ START: obj3.start, END: obj3.end } = HorizontalGradient);
          obj2.colors = tmp6;
          obj2.children = tmp8;
          const tmp14 = jsx(LinearGradientDefault, {
            style: tmp7,
            start: null,
            end: null,
            colors: null,
            children: null,
          });
          cResult[6] = tmp6;
          cResult[7] = tmp7;
          cResult[8] = tmp8;
          cResult[9] = tmp14;
          tmp11 = tmp14;
        }
        const obj5 = {
          variant: "text-xs/semibold",
          color: "text-overlay-light",
          style: tmp4.pillText,
          children: pillText,
        };
        const tmp10 = jsx(Text_Text.Text, {
          variant: "text-xs/semibold",
          color: "text-overlay-light",
          style: tmp4.pillText,
          children: pillText,
        });
        cResult[3] = pillText;
        cResult[4] = tmp4.pillText;
        cResult[5] = tmp10;
        tmp8 = tmp10;
      }
      const items = [tmp4.pillTextContainer, style];
      cResult[0] = style;
      cResult[1] = tmp4.pillTextContainer;
      cResult[2] = items;
      tmp7 = items;
    }
  : function PillText(arg0) {
      ({ pillText, style } = arg0);
      const tmp = closure_5();
      const obj = {
        style: null,
        start: HorizontalGradient.START,
        end: HorizontalGradient.END,
        colors: usePremiumPrimaryGradientColorsDefault(),
        children: null,
      };
      const items = [tmp.pillTextContainer, style];
      obj.style = items;
      const tmp2 = usePremiumPrimaryGradientColorsDefault();
      obj.children = jsx(Text_Text.Text, {
        variant: "text-xs/semibold",
        color: "text-overlay-light",
        style: tmp.pillText,
        children: pillText,
      });
      return jsx(LinearGradientDefault, {
        style: null,
        start: HorizontalGradient.START,
        end: HorizontalGradient.END,
        colors: usePremiumPrimaryGradientColorsDefault(),
        children: null,
      });
    };
