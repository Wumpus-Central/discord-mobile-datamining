// === Module 12205: AppsBanner ===

// Module 12205 (AppsBanner)
import util from "util" /* 1115 */;
import BannerBaseDefault from "BannerBase" /* 12203 */;
import OnboardingAppsRocketDefault from "OnboardingAppsRocket" /* 12206 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let closure_5 = createStyles.createStyles({ rocketIconContainer: { position: "absolute", top: -20 }, rocketIcon: { width: 90, height: 90 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppsBanner.tsx");

export default function AppsBaner() {
  const tmp = closure_5();
  const obj = { style: tmp.rocketIconContainer, children: jsx(OnboardingAppsRocketDefault, { style: tmp.rocketIcon }) };
  const obj3 = { image: <View style={tmp.rocketIconContainer}>{jsx(OnboardingAppsRocketDefault, { style: tmp.rocketIcon })}</View>, text: null };
  const obj2 = { style: tmp.rocketIcon };
  const tmp2 = <View style={tmp.rocketIconContainer}>{jsx(OnboardingAppsRocketDefault, { style: tmp.rocketIcon })}</View>;
  const intl = util.intl;
  obj3.text = intl.string(util.t.sjRwMJ);
  return jsx(BannerBaseDefault, { image: <View style={tmp.rocketIconContainer}>{jsx(OnboardingAppsRocketDefault, { style: tmp.rocketIcon })}</View>, text: null });
};