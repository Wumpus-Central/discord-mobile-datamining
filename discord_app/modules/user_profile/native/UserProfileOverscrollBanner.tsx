// === Module 8200: UserProfileOverscrollBanner ===

// Module 8200 (UserProfileOverscrollBanner)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import VisualEffectViewThemedDefault from "VisualEffectViewThemed" /* 8201 */;
import UserProfileBannerDefault from "UserProfileBanner" /* 8202 */;
import noop from "module_19" /* 19 */;
import module_1653 from "module_1653" /* 1653 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const VisualEffectViewThemed = module_1653.createAnimatedComponent(VisualEffectViewThemedDefault);
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
  obj.children = hasOwnProperty(module_1653.View, obj2);
  return React4(module_1653.View, obj);
};