// === Module 11239: AppsBaner ===

// Module 11239 (AppsBaner)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import BannerBaseDefault from "BannerBase" /* 11237 */;
import SvgComponentDefault from "SvgComponent" /* 11240 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

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