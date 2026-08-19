// === Module 8985: UserProfileOverscrollBanner ===

// Module 8985 (UserProfileOverscrollBanner)
import noopAll from "noop" /* 19 */;
import obj132 from "obj132" /* 500 */;
import _modDef8986 from "module_8986" /* 8986 */;
import UserProfileBannerDefault from "UserProfileBanner" /* 8987 */;
import { StyleSheet } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import importDefaultResult from "module_4115" /* 4115 */;

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = importDefaultResult.createAnimatedComponent(_modDef8986);
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfileOverscrollBanner.tsx");

export default function UserProfileOverscrollBanner(arg0) {
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur, privateBanner } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const items = [privateBanner, ];
  const obj = {};
  const merged1 = Object.assign(merged);
  const items1 = [callback(UserProfileBannerDefault, obj), ];
  let tmp3Result = obj132.isIOS() && showBlur;
  if (tmp3Result) {
    obj1 = { animatedProps: null, style: null };
    obj1[0] = blurAnimatedProps;
    obj1[1] = StyleSheet.absoluteFillObject;
    tmp3Result = callback(closure_6, obj1);
  }
  items1[1] = tmp3Result;
  obj[1] = items1;
  items[1] = callback(importDefaultResult.View, obj);
  obj[1] = items;
  return callback(importDefaultResult.View, obj);
};