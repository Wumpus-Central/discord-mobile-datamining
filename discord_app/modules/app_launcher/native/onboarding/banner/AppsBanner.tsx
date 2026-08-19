// discord_app/modules/app_launcher/native/onboarding/banner/AppsBanner.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import BannerBaseDefault from "BannerBase.tsx";
import SvgComponentDefault from "../../images/OnboardingAppsRocket.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
noopAll;
let closure_5 = createCacheKey.createStyles({ rocketIconContainer: { position: "absolute", top: -20 }, rocketIcon: { width: 90, height: 90 } });
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppsBanner.tsx");

export default function AppsBaner() {
  const tmp = callback();
  { style: tmp.rocketIconContainer, children: jsx(SvgComponentDefault, obj) };
  obj = { image: <View style={tmp.rocketIcon} />, text: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.sjRwMJ);
  return jsx(BannerBaseDefault, { image: <View style={tmp.rocketIcon} />, text: null });
};