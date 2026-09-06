// === Module 12063: AppsBanner ===

// Module 12063 (AppsBanner)
import util from "util" /* 1114 */;
import BannerBaseDefault from "BannerBase" /* 12061 */;
import OnboardingAppsRocketDefault from "OnboardingAppsRocket" /* 12064 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ rocketIconContainer: { position: "absolute", top: -20 }, rocketIcon: { width: 90, height: 90 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppsBanner.tsx");

export default function AppsBaner() {
  const tmp = closure_5();
  let obj = { style: tmp.rocketIconContainer, children: null };
  obj = { style: tmp.rocketIcon };
  obj.children = jsx(OnboardingAppsRocketDefault, { style: tmp.rocketIcon });
  obj = { image: <View style={tmp.rocketIcon} />, text: null };
  const tmp2 = <View image={<View style={tmp.rocketIcon} />} text={null} />;
  const intl = util.intl;
  obj.text = intl.string(util.t.sjRwMJ);
  return jsx(BannerBaseDefault, { image: <View style={tmp.rocketIcon} />, text: null });
};