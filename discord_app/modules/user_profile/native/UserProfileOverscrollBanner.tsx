// discord_app/modules/user_profile/native/UserProfileOverscrollBanner.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import VisualEffectViewThemedDefault from "../../visual_effect_view/native/VisualEffectViewThemed.tsx";
import UserProfileBannerDefault from "UserProfileBanner.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import 01655__ from "../../../../_runtime/metro/01655__.js";

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const VisualEffectViewThemed = module_1655.createAnimatedComponent(VisualEffectViewThemedDefault);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileOverscrollBanner.tsx");

export default function UserProfileOverscrollBanner(arg0) {
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur } = arg0);
  const merged = Object.assign(arg0, Object.assign({ bannerAnimatedStyle: 0, bannerImageAnimatedStyle: 0, blurAnimatedProps: 0, showBlur: 0 }));
  const obj = { style: bannerAnimatedStyle, children: null };
  const obj2 = { style: bannerImageAnimatedStyle, children: null };
  const merged1 = Object.assign(merged);
  items = [React4(UserProfileBannerDefault, {}), ];
  const obj3 = {};
  let tmp2Result = PlatformUtils.isIOS() && showBlur;
  if (tmp2Result) {
    const obj5 = { animatedProps: blurAnimatedProps, style: StyleSheet.absoluteFillObject };
    tmp2Result = React4(VisualEffectViewThemed, obj5);
  }
  items[1] = tmp2Result;
  obj2.children = items;
  obj.children = hasOwnProperty(module_1655.View, obj2);
  return React4(module_1655.View, obj);
};