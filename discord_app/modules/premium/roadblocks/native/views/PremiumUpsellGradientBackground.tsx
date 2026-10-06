// discord_app/modules/premium/roadblocks/native/views/PremiumUpsellGradientBackground.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import ConstantsIOS from "../../../../../ConstantsIOS.tsx";
import LinearGradientDefault from "../../../../../../_runtime/05612_LinearGradient.js";
import ColorConstants from "../../../../colors/native/ColorConstants.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let useTier0UpsellContent;

let obj2;
const StyleSheet = react_native.StyleSheet;
const Gradients = ColorConstants.Gradients;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { gradient: obj2 };
createStyles = createStyles.createStyles;
obj2 = { opacity: 0.1 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_5 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (useTier0UpsellContent) => {
      let PREMIUM_TIER_2_TRI_COLOR;
      const obj = react2;
      const cResult = obj.c(3);
      useTier0UpsellContent = useTier0UpsellContent.useTier0UpsellContent;
      const tmp4 = closure_5();
      if (true === useTier0UpsellContent) {
        PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
      } else {
        PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
      }
      if (cResult[0] === tmp4.gradient) {
        let tmp7;
        if (cResult[1] === PREMIUM_TIER_2_TRI_COLOR) {
          tmp7 = cResult[2];
        }
        return tmp7;
      }
      LinearGradientDefault;
      const tmp9 = (
        <tmp8
          style={tmp4.gradient}
          start={ConstantsIOS.HorizontalGradient.START}
          end={ConstantsIOS.HorizontalGradient.END}
          colors={PREMIUM_TIER_2_TRI_COLOR}
        />
      );
      cResult[0] = tmp4.gradient;
      cResult[1] = PREMIUM_TIER_2_TRI_COLOR;
      cResult[2] = tmp9;
      tmp7 = tmp9;
    }
  : (useTier0UpsellContent) => {
      let PREMIUM_TIER_2_TRI_COLOR;
      useTier0UpsellContent = useTier0UpsellContent.useTier0UpsellContent;
      LinearGradientDefault;
      if (true === useTier0UpsellContent) {
        PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
      } else {
        PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
      }
      return (
        <tmp3
          style={closure_5().gradient}
          start={ConstantsIOS.HorizontalGradient.START}
          end={ConstantsIOS.HorizontalGradient.END}
          colors={PREMIUM_TIER_2_TRI_COLOR}
        />
      );
    };
const result = size.fileFinishedImporting(
  "modules/premium/roadblocks/native/views/PremiumUpsellGradientBackground.tsx",
);

export const PremiumUpsellGradientBackground = tmp5;
