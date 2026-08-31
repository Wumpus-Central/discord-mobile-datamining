// === Module 8882: UserProfileOverscrollBanner ===

// Module 8882 (UserProfileOverscrollBanner)
import noopAll from "noop" /* 19 */;
import set from "set" /* 500 */;
import UserProfileBannerDefault from "UserProfileBanner" /* 8520 */;
import _modDef8883 from "module_8883" /* 8883 */;
import { StyleSheet } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import importDefaultResult from "module_4187" /* 4187 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = importDefaultResult.createAnimatedComponent(_modDef8883);
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileOverscrollBanner.tsx");

export default function UserProfileOverscrollBanner(arg0) {
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur, privateBanner } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let obj = { style: bannerAnimatedStyle, children: null };
  const items = [privateBanner, ];
  obj = { style: bannerImageAnimatedStyle, children: null };
  obj = {};
  const merged1 = Object.assign(merged);
  const items1 = [callback(UserProfileBannerDefault, obj), ];
  const tmp3 = callback;
  const tmp4 = UserProfileBannerDefault;
  let tmp3Result = set.isIOS() && showBlur;
  if (tmp3Result) {
    obj1 = { animatedProps: null, style: null };
    obj1[0] = blurAnimatedProps;
    obj1[1] = StyleSheet.absoluteFillObject;
    tmp3Result = tmp3(closure_6, obj1);
  }
  items1[1] = tmp3Result;
  obj[1] = items1;
  items[1] = closure_5(importDefaultResult.View, obj);
  obj[1] = items;
  return closure_5(importDefaultResult.View, obj);
};