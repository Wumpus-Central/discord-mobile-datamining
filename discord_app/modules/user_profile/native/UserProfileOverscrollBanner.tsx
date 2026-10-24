// === Module 8735: UserProfileOverscrollBanner ===

// Module 8735 (UserProfileOverscrollBanner)
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import VisualEffectViewThemedDefault from "VisualEffectViewThemed" /* 8736 */;
import UserProfileBannerDefault from "UserProfileBanner" /* 8737 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5052 */;

require = fn;
let closure_3 = ["bannerAnimatedStyle", "bannerImageAnimatedStyle", "blurAnimatedProps", "showBlur"];
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const VisualEffectViewThemed = ReanimatedRexport.createAnimatedComponent(VisualEffectViewThemedDefault);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileOverscrollBanner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileOverscrollBanner(arg0) {
  const cResult = c.c(18);
  if (cResult[0] !== arg0) {
    ({ bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = bannerAnimatedStyle;
    cResult[2] = bannerImageAnimatedStyle;
    cResult[3] = tmp11;
    cResult[4] = blurAnimatedProps;
    cResult[5] = showBlur;
    let tmp8 = showBlur;
    let tmp7 = blurAnimatedProps;
    let tmp6 = tmp11;
    let tmp5 = bannerImageAnimatedStyle;
    let tmp4 = bannerAnimatedStyle;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  if (cResult[6] !== tmp6) {
    const obj2 = {};
    const merged = Object.assign(tmp6);
    const tmp19 = timestampProducer(UserProfileBannerDefault, obj2);
    cResult[6] = tmp6;
    cResult[7] = tmp19;
    let tmp12 = tmp19;
  } else {
    tmp12 = cResult[7];
  }
  if (cResult[8] === tmp7) {
    if (cResult[9] === tmp8) {
      let tmp20 = cResult[10];
    }
    if (cResult[11] === tmp5) {
      if (cResult[12] === tmp12) {
        if (cResult[13] === tmp20) {
          let tmp25 = cResult[14];
        }
        if (cResult[15] === tmp4) {
          if (cResult[16] === tmp25) {
            let tmp29 = cResult[17];
          }
          return tmp29;
        }
        const obj3 = { style: tmp4, children: tmp25 };
        const tmp32 = timestampProducer(ReanimatedRexport.View, obj3);
        cResult[15] = tmp4;
        cResult[16] = tmp25;
        cResult[17] = tmp32;
        tmp29 = tmp32;
      }
    }
    const obj4 = { style: tmp5, children: null };
    const items = [tmp12, tmp20];
    obj4.children = items;
    const tmp28 = React5(ReanimatedRexport.View, obj4);
    cResult[11] = tmp5;
    cResult[12] = tmp12;
    cResult[13] = tmp20;
    cResult[14] = tmp28;
    tmp25 = tmp28;
  }
  let tmp21 = PlatformUtils.isIOS() && tmp8;
  if (tmp21) {
    const obj5 = { animatedProps: tmp7, style: StyleSheet.absoluteFillObject };
    tmp21 = timestampProducer(VisualEffectViewThemed, obj5);
  }
  cResult[8] = tmp7;
  cResult[9] = tmp8;
  cResult[10] = tmp21;
  tmp20 = tmp21;
  const tmpResult = PlatformUtils;
}) : (function UserProfileOverscrollBanner(arg0) {
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur } = arg0);
  const merged = Object.assign(arg0, Object.assign({ bannerAnimatedStyle: 0, bannerImageAnimatedStyle: 0, blurAnimatedProps: 0, showBlur: 0 }));
  const obj = { style: bannerAnimatedStyle, children: null };
  const obj2 = { style: bannerImageAnimatedStyle, children: null };
  const merged1 = Object.assign(merged);
  const items = [timestampProducer(UserProfileBannerDefault, {}), ];
  const obj3 = {};
  let tmp2Result = PlatformUtils.isIOS() && showBlur;
  if (tmp2Result) {
    const obj5 = { animatedProps: blurAnimatedProps, style: StyleSheet.absoluteFillObject };
    tmp2Result = timestampProducer(VisualEffectViewThemed, obj5);
  }
  items[1] = tmp2Result;
  obj2.children = items;
  obj.children = React5(ReanimatedRexport.View, obj2);
  return timestampProducer(ReanimatedRexport.View, obj);
});