// === Module 8244: UserProfileOverscrollBanner ===

// Module 8244 (UserProfileOverscrollBanner)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import VisualEffectViewThemedDefault from "VisualEffectViewThemed" /* 8245 */;
import UserProfileBannerDefault from "UserProfileBanner" /* 8246 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const VisualEffectViewThemed = ReanimatedRexport.createAnimatedComponent(VisualEffectViewThemedDefault);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileOverscrollBanner.tsx");

export default function UserProfileOverscrollBanner(arg0) {
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur, privateBanner } = arg0);
  const merged = Object.assign(arg0, Object.assign({ bannerAnimatedStyle: 0, bannerImageAnimatedStyle: 0, blurAnimatedProps: 0, showBlur: 0, privateBanner: 0 }));
  let obj = { style: bannerAnimatedStyle, children: null };
  const items = [privateBanner, ];
  obj = { style: bannerImageAnimatedStyle, children: null };
  obj = {};
  const merged1 = Object.assign(merged);
  const items1 = [React4(UserProfileBannerDefault, obj), ];
  let tmp3Result = PlatformUtils.isIOS() && showBlur;
  if (tmp3Result) {
    const obj1 = { animatedProps: blurAnimatedProps, style: StyleSheet.absoluteFillObject };
    tmp3Result = React4(VisualEffectViewThemed, obj1);
  }
  items1[1] = tmp3Result;
  obj.children = items1;
  items[1] = hasOwnProperty(ReanimatedRexport.View, obj);
  obj.children = items;
  return hasOwnProperty(ReanimatedRexport.View, obj);
};