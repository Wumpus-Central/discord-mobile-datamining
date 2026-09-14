// discord_app/modules/user_profile/native/UserProfileOverscrollBanner.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import VisualEffectViewThemedDefault from "../../visual_effect_view/native/VisualEffectViewThemed.tsx";
import UserProfileBannerDefault from "UserProfileBanner.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const VisualEffectViewThemed = ReanimatedRexport.createAnimatedComponent(VisualEffectViewThemedDefault);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileOverscrollBanner.tsx");

export default function UserProfileOverscrollBanner(arg0) {
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur, privateBanner } = arg0);
  const merged = Object.assign(
    arg0,
    Object.assign({
      bannerAnimatedStyle: 0,
      bannerImageAnimatedStyle: 0,
      blurAnimatedProps: 0,
      showBlur: 0,
      privateBanner: 0,
    }),
  );
  const obj = { style: bannerAnimatedStyle, children: null };
  const items = [privateBanner];
  const obj2 = { style: bannerImageAnimatedStyle, children: null };
  const merged1 = Object.assign(merged);
  const items1 = [React4(UserProfileBannerDefault, {})];
  const obj3 = {};
  let tmp3Result = PlatformUtils.isIOS() && showBlur;
  if (tmp3Result) {
    const obj5 = { animatedProps: blurAnimatedProps, style: StyleSheet.absoluteFillObject };
    tmp3Result = React4(VisualEffectViewThemed, obj5);
  }
  items1[1] = tmp3Result;
  obj2.children = items1;
  items[1] = hasOwnProperty(ReanimatedRexport.View, obj2);
  obj.children = items;
  return hasOwnProperty(ReanimatedRexport.View, obj);
}
