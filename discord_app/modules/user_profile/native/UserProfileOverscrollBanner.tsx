// discord_app/modules/user_profile/native/UserProfileOverscrollBanner.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import set from "../../../utils/PlatformUtils.tsx";
import UserProfileBannerDefault from "UserProfileBanner.tsx";
import _modDef8883 from "../../visual_effect_view/native/VisualEffectViewThemed.tsx";
import { StyleSheet } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import importDefaultResult from "../../reanimated/ReanimatedRexport.tsx";

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