// === Module 11552: AppsBaner ===

// Module 11552 (AppsBaner)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import BannerBaseDefault from "BannerBase" /* 11550 */;
import SvgComponentDefault from "SvgComponent" /* 11553 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
noopAll;
let closure_5 = createCacheKey.createStyles({ rocketIconContainer: { position: "absolute", top: -20 }, rocketIcon: { width: 90, height: 90 } });
const result = require("set").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppsBanner.tsx");

export default function AppsBaner() {
  const tmp = callback();
  obj = { style: tmp.rocketIconContainer, children: jsx(SvgComponentDefault, obj) };
  obj = { style: tmp.rocketIcon };
  obj = { image: <View style={tmp.rocketIcon} />, text: null };
  const tmp2 = <View image={<View style={tmp.rocketIcon} />} text={null} />;
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.sjRwMJ);
  return jsx(BannerBaseDefault, { image: <View style={tmp.rocketIcon} />, text: null });
};