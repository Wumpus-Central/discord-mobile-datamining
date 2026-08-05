// discord_app/modules/app_launcher/native/onboarding/banner/AppsBanner.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { SvgComponent } from "../../images/OnboardingAppsRocket.tsx";
import { BannerBase } from "BannerBase.tsx";

const require = arg1;
let closure_5 = createCacheKey.createStyles({ rocketIconContainer: { position: "absolute", top: -20 }, rocketIcon: { width: 90, height: 90 } });
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppsBanner.tsx");

export default function AppsBaner() {
  const tmp = callback();
  obj = { style: tmp.rocketIconContainer, children: jsx(SvgComponent, obj) };
  obj = { style: tmp.rocketIcon };
  obj = { image: <View style={tmp.rocketIcon} />, text: null };
  const tmp2 = <View image={<View style={tmp.rocketIcon} />} text={null} />;
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl.string(getSystemLocale /* getSystemLocale */.t.sjRwMJ);
  return jsx(BannerBase, { image: <View style={tmp.rocketIcon} />, text: null });
};