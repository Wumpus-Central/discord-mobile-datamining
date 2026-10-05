// discord_app/modules/premium/native/components/PillText.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/05605_LinearGradient.js";
import usePremiumPrimaryGradientColorsDefault from "../usePremiumPrimaryGradientColors.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj2;
const HorizontalGradient = Constants.HorizontalGradient;
const jsx = Fragment.jsx;
let obj = { pillTextContainer: obj2, pillText: { textTransform: "uppercase" } };
obj2 = { paddingHorizontal: 8, borderRadius: nativeDefault.radii.lg, justifyContent: "center" };
let closure_5 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let pillText;
      let style;
      const obj = react;
      const cResult = obj.c(10);
      ({ pillText, style } = arg0);
      const tmp4 = closure_5();
      const tmp6 = usePremiumPrimaryGradientColorsDefault();
      if (cResult[0] === style) {
        let tmp7;
        if (cResult[1] === tmp4.pillTextContainer) {
          tmp7 = cResult[2];
        }
        if (cResult[3] === pillText) {
          let tmp8;
          if (cResult[4] === tmp4.pillText) {
            tmp8 = cResult[5];
          }
          if (cResult[6] === tmp6) {
            if (cResult[7] === tmp7) {
              let tmp11;
              if (cResult[8] === tmp8) {
                tmp11 = cResult[9];
              }
              return tmp11;
            }
          }
          ({ START: obj3.start, END: obj3.end } = HorizontalGradient);
          const tmp14 = jsx(LinearGradientDefault, {
            style: tmp7,
            start: null,
            end: null,
            colors: tmp6,
            children: tmp8,
          });
          cResult[6] = tmp6;
          cResult[7] = tmp7;
          cResult[8] = tmp8;
          cResult[9] = tmp14;
          tmp11 = tmp14;
        }
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
  : (arg0) => {
      let pillText;
      let style;
      ({ pillText, style } = arg0);
      const tmp = closure_5();
      const items = [tmp.pillTextContainer, style];
      LinearGradientDefault;
      return (
        <tmp3
          style={items}
          start={HorizontalGradient.START}
          end={HorizontalGradient.END}
          colors={usePremiumPrimaryGradientColorsDefault()}
        >
          {null}
        </tmp3>
      );
    };
const result = size.fileFinishedImporting("modules/premium/native/components/PillText.tsx");

export default tmp2;
