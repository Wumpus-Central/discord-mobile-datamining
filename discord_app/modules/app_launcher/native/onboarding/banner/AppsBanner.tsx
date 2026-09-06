// discord_app/modules/app_launcher/native/onboarding/banner/AppsBanner.tsx
import util from "../../../../../intl/index.native.tsx";
import BannerBaseDefault from "BannerBase.tsx";
import OnboardingAppsRocketDefault from "../../images/OnboardingAppsRocket.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({
  rocketIconContainer: { position: "absolute", top: -20 },
  rocketIcon: { width: 90, height: 90 },
});
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
}
