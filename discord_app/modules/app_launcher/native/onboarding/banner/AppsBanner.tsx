// === Module 11677: AppsBanner ===

// Module 11677 (AppsBanner)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import BannerBaseDefault from "BannerBase" /* 11675 */;
import OnboardingAppsRocketDefault from "OnboardingAppsRocket" /* 11678 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ rocketIconContainer: { position: "absolute", top: -20 }, rocketIcon: { width: 90, height: 90 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
  const tmp = closure_5();
  BannerBaseDefault;
  const intl = intl2.intl;
  return <tmp3 image={<View style={tmp.rocketIconContainer}>{null}</View>} text={intl.string(intl2.t.sjRwMJ)} />;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppsBanner.tsx");

export default tmp3;