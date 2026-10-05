// discord_app/modules/premium/roadblocks/native/views/PremiumSoundboardFeatureUpsell.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../../../ConstantsIOS.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import EntitlementFeatureNames from "../../../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";
import PremiumFeatureUpsellDefault from "PremiumFeatureUpsell.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let shouldShow;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((arg0) => {
  let rect;
  const obj = { container: rect };
  rect = {
    position: "absolute",
    bottom: arg0 + nativeDefault.space.PX_12,
    left: 0,
    right: 0,
    marginHorizontal: nativeDefault.space.PX_12,
  };
  return obj;
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (shouldShow) => {
      let tmp6;
      const obj = react2;
      const cResult = obj.c(5);
      shouldShow = shouldShow.shouldShow;
      const tmp5 = closure_5(ConstantsIOS.EXPRESSION_FOOTER_HEIGHT + useSafeAreaInsetsDefault().bottom);
      if (cResult[0] !== shouldShow) {
        PremiumFeatureUpsellDefault;
        const tmp9 = (
          <tmp4Result
            shouldShow={shouldShow}
            featureName={EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE}
          />
        );
        cResult[0] = shouldShow;
        cResult[1] = tmp9;
        tmp6 = tmp9;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === tmp5.container) {
        let tmp10;
        if (cResult[3] === tmp6) {
          tmp10 = cResult[4];
        }
        return tmp10;
      }
      const tmp11 = <View style={tmp5.container}>{tmp6}</View>;
      cResult[2] = tmp5.container;
      cResult[3] = tmp6;
      cResult[4] = tmp11;
      tmp10 = tmp11;
    }
  : (shouldShow) => {
      shouldShow = shouldShow.shouldShow;
      ({ shouldShow, featureName: EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE });
      PremiumFeatureUpsellDefault;
      return (
        <View style={closure_5(ConstantsIOS.EXPRESSION_FOOTER_HEIGHT + useSafeAreaInsetsDefault().bottom).container}>
          {null}
        </View>
      );
    };
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumSoundboardFeatureUpsell.tsx");

export default tmp3;
