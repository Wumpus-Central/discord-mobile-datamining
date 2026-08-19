// discord_app/modules/user_profile/native/UserProfileOverscrollBanner.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import obj132 from "../../../utils/PlatformUtils.tsx";
import _modDef8986 from "../../visual_effect_view/native/VisualEffectViewThemed.tsx";
import UserProfileBannerDefault from "UserProfileBanner.tsx";
import { StyleSheet } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import importDefaultResult from "../../reanimated/ReanimatedRexport.tsx";

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