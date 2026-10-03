// === Module 7916: UserProfileOverscrollBanner ===

// Module 7916 (UserProfileOverscrollBanner)
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import VisualEffectViewThemedDefault from "VisualEffectViewThemed" /* 7917 */;
import UserProfileBannerDefault from "UserProfileBanner" /* 7918 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;

require = fn;
let closure_3 = ["bannerAnimatedStyle", "bannerImageAnimatedStyle", "blurAnimatedProps", "showBlur", "privateBanner"];
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const VisualEffectViewThemed = ReanimatedRexport.createAnimatedComponent(VisualEffectViewThemedDefault);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileOverscrollBanner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(20);
  if (cResult[0] !== arg0) {
    ({ bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur, privateBanner } = arg0);
    const tmp12 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = bannerAnimatedStyle;
    cResult[2] = bannerImageAnimatedStyle;
    cResult[3] = tmp12;
    cResult[4] = blurAnimatedProps;
    cResult[5] = privateBanner;
    cResult[6] = showBlur;
    let tmp9 = showBlur;
    let tmp8 = privateBanner;
    let tmp7 = blurAnimatedProps;
    let tmp6 = tmp12;
    let tmp5 = bannerImageAnimatedStyle;
    let tmp4 = bannerAnimatedStyle;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
  }
  if (cResult[7] !== tmp6) {
    const obj2 = {};
    const merged = Object.assign(tmp6);
    const tmp20 = timestampProducer(UserProfileBannerDefault, obj2);
    cResult[7] = tmp6;
    cResult[8] = tmp20;
    let tmp13 = tmp20;
  } else {
    tmp13 = cResult[8];
  }
  if (cResult[9] === tmp7) {
    if (cResult[10] === tmp9) {
      let tmp21 = cResult[11];
    }
    if (cResult[12] === tmp5) {
      if (cResult[13] === tmp13) {
        if (cResult[14] === tmp21) {
          let tmp26 = cResult[15];
        }
        if (cResult[16] === tmp4) {
          if (cResult[17] === tmp8) {
            if (cResult[18] === tmp26) {
              let tmp30 = cResult[19];
            }
            return tmp30;
          }
        }
        const obj3 = { style: tmp4, children: null };
        const items = [tmp8, tmp26];
        obj3.children = items;
        const tmp33 = React5(ReanimatedRexport.View, obj3);
        cResult[16] = tmp4;
        cResult[17] = tmp8;
        cResult[18] = tmp26;
        cResult[19] = tmp33;
        tmp30 = tmp33;
      }
    }
    const obj4 = { style: tmp5, children: null };
    const items1 = [tmp13, tmp21];
    obj4.children = items1;
    const tmp29 = React5(ReanimatedRexport.View, obj4);
    cResult[12] = tmp5;
    cResult[13] = tmp13;
    cResult[14] = tmp21;
    cResult[15] = tmp29;
    tmp26 = tmp29;
  }
  let tmp22 = PlatformUtils.isIOS() && tmp9;
  if (tmp22) {
    const obj5 = { animatedProps: tmp7, style: StyleSheet.absoluteFillObject };
    tmp22 = timestampProducer(VisualEffectViewThemed, obj5);
  }
  cResult[9] = tmp7;
  cResult[10] = tmp9;
  cResult[11] = tmp22;
  tmp21 = tmp22;
  const tmpResult = PlatformUtils;
}) : ((arg0) => {
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur, privateBanner } = arg0);
  const merged = Object.assign(arg0, Object.assign({ bannerAnimatedStyle: 0, bannerImageAnimatedStyle: 0, blurAnimatedProps: 0, showBlur: 0, privateBanner: 0 }));
  const obj = { style: bannerAnimatedStyle, children: null };
  const items = [privateBanner, ];
  const obj2 = { style: bannerImageAnimatedStyle, children: null };
  const merged1 = Object.assign(merged);
  const items1 = [timestampProducer(UserProfileBannerDefault, {}), ];
  const obj3 = {};
  let tmp3Result = PlatformUtils.isIOS() && showBlur;
  if (tmp3Result) {
    const obj5 = { animatedProps: blurAnimatedProps, style: StyleSheet.absoluteFillObject };
    tmp3Result = timestampProducer(VisualEffectViewThemed, obj5);
  }
  items1[1] = tmp3Result;
  obj2.children = items1;
  items[1] = React5(ReanimatedRexport.View, obj2);
  obj.children = items;
  return React5(ReanimatedRexport.View, obj);
});