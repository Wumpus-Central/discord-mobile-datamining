// discord_app/modules/app_launcher/native/onboarding/banner/AppsBanner.tsx
import c from "../../../../../../_runtime/00576_c.js";
import util from "../../../../../intl/index.native.tsx";
import BannerBaseDefault from "BannerBase.tsx";
import OnboardingAppsRocketDefault from "../../images/OnboardingAppsRocket.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_5 = createStyles.createStyles({
  rocketIconContainer: { position: "absolute", top: -20 },
  rocketIcon: { width: 90, height: 90 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppsBanner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AppsBaner() {
      const cResult = c.c(8);
      const tmp4 = closure_5();
      if (cResult[0] !== tmp4.rocketIcon) {
        const obj2 = { style: tmp4.rocketIcon };
        const tmp8 = jsx(OnboardingAppsRocketDefault, { style: tmp4.rocketIcon });
        cResult[0] = tmp4.rocketIcon;
        cResult[1] = tmp8;
        let tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.rocketIconContainer) {
        if (cResult[3] === tmp5) {
          let tmp9 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t.sjRwMJ);
          cResult[5] = stringResult;
          let tmp12 = stringResult;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] !== tmp9) {
          const obj3 = { image: tmp9, text: tmp12 };
          const tmp17 = jsx(BannerBaseDefault, { image: tmp9, text: tmp12 });
          cResult[6] = tmp9;
          cResult[7] = tmp17;
          let tmp14 = tmp17;
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
      const obj4 = { style: tmp4.rocketIconContainer, children: tmp5 };
    }
  : function AppsBaner() {
      const tmp = closure_5();
      const obj = {
        style: tmp.rocketIconContainer,
        children: jsx(OnboardingAppsRocketDefault, { style: tmp.rocketIcon }),
      };
      const obj3 = {
        image: (
          <View style={tmp.rocketIconContainer}>{jsx(OnboardingAppsRocketDefault, { style: tmp.rocketIcon })}</View>
        ),
        text: null,
      };
      const obj2 = { style: tmp.rocketIcon };
      const tmp2 = (
        <View style={tmp.rocketIconContainer}>{jsx(OnboardingAppsRocketDefault, { style: tmp.rocketIcon })}</View>
      );
      const intl = util.intl;
      obj3.text = intl.string(util.t.sjRwMJ);
      return jsx(BannerBaseDefault, {
        image: (
          <View style={tmp.rocketIconContainer}>{jsx(OnboardingAppsRocketDefault, { style: tmp.rocketIcon })}</View>
        ),
        text: null,
      });
    };
