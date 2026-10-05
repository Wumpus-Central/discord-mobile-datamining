// discord_app/modules/app_launcher/native/onboarding/banner/AppsBanner.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import intl2 from "../../../../../intl/index.native.tsx";
import BannerBaseDefault from "BannerBase.tsx";
import OnboardingAppsRocketDefault from "../../images/OnboardingAppsRocket.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({
  rocketIconContainer: { position: "absolute", top: -20 },
  rocketIcon: { width: 90, height: 90 },
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(8);
      const tmp4 = closure_5();
      if (cResult[0] !== tmp4.rocketIcon) {
        const tmp8 = jsx(OnboardingAppsRocketDefault, { style: tmp4.rocketIcon });
        cResult[0] = tmp4.rocketIcon;
        cResult[1] = tmp8;
        tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.rocketIconContainer) {
        let tmp9;
        let tmp12;
        let tmp14;
        if (cResult[3] === tmp5) {
          tmp9 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl2.intl;
          const stringResult = intl.string(intl2.t.sjRwMJ);
          cResult[5] = stringResult;
          tmp12 = stringResult;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] !== tmp9) {
          const tmp17 = jsx(BannerBaseDefault, { image: tmp9, text: tmp12 });
          cResult[6] = tmp9;
          cResult[7] = tmp17;
          tmp14 = tmp17;
        } else {
          tmp14 = cResult[7];
        }
        return tmp14;
      }
      const tmp10 = <View style={tmp4.rocketIconContainer}>{tmp5}</View>;
      cResult[2] = tmp4.rocketIconContainer;
      cResult[3] = tmp5;
      cResult[4] = tmp10;
      tmp9 = tmp10;
    }
  : () => {
      const tmp = closure_5();
      BannerBaseDefault;
      const intl = intl2.intl;
      return <tmp3 image={<View style={tmp.rocketIconContainer}>{null}</View>} text={intl.string(intl2.t.sjRwMJ)} />;
    };
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppsBanner.tsx");

export default tmp3;
