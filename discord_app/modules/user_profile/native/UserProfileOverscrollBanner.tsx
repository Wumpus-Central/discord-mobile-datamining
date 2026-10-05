// === Module 7916: UserProfileOverscrollBanner ===

// Module 7916 (UserProfileOverscrollBanner)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import VisualEffectViewThemedDefault from "VisualEffectViewThemed" /* 7917 */;
import UserProfileBannerDefault from "UserProfileBanner" /* 7918 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let closure_3 = ["bannerAnimatedStyle", "bannerImageAnimatedStyle", "blurAnimatedProps", "showBlur", "privateBanner"];
const StyleSheet = react_native.StyleSheet;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const VisualEffectViewThemed = ReanimatedRexport.createAnimatedComponent(VisualEffectViewThemedDefault);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let items;
  let items1;
  let privateBanner;
  let showBlur;
  let tmp13;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(20);
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
    tmp9 = showBlur;
    tmp8 = privateBanner;
    tmp7 = blurAnimatedProps;
    tmp6 = tmp12;
    tmp5 = bannerImageAnimatedStyle;
    tmp4 = bannerAnimatedStyle;
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
    const tmp16 = UserProfileBannerDefault;
    const merged = Object.assign(tmp6);
    const tmp20 = metroRequire(tmp16, obj2);
    cResult[7] = tmp6;
    cResult[8] = tmp20;
    tmp13 = tmp20;
  } else {
    tmp13 = cResult[8];
  }
  if (cResult[9] === tmp7) {
    let tmp21;
    if (cResult[10] === tmp9) {
      tmp21 = cResult[11];
    }
    if (cResult[12] === tmp5) {
      if (cResult[13] === tmp13) {
        let tmp26;
        if (cResult[14] === tmp21) {
          tmp26 = cResult[15];
        }
        if (cResult[16] === tmp4) {
          if (cResult[17] === tmp8) {
            let tmp30;
            if (cResult[18] === tmp26) {
              tmp30 = cResult[19];
            }
            return tmp30;
          }
        }
        const obj3 = { style: tmp4, children: items };
        items = [tmp8, tmp26];
        const tmp33 = metroImportDefault(ReanimatedRexport.View, obj3);
        cResult[16] = tmp4;
        cResult[17] = tmp8;
        cResult[18] = tmp26;
        cResult[19] = tmp33;
        tmp30 = tmp33;
      }
    }
    const obj4 = { style: tmp5, children: items1 };
    items1 = [tmp13, tmp21];
    const tmp29 = metroImportDefault(ReanimatedRexport.View, obj4);
    cResult[12] = tmp5;
    cResult[13] = tmp13;
    cResult[14] = tmp21;
    cResult[15] = tmp29;
    tmp26 = tmp29;
  }
  const tmpResult = PlatformUtils;
  let tmp22 = tmpResult.isIOS() && tmp9;
  if (tmp22) {
    const obj5 = { animatedProps: tmp7, style: StyleSheet.absoluteFillObject };
    tmp22 = metroRequire(VisualEffectViewThemed, obj5);
  }
  cResult[9] = tmp7;
  cResult[10] = tmp9;
  cResult[11] = tmp22;
  tmp21 = tmp22;
}) : ((arg0) => {
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let items;
  let items1;
  let privateBanner;
  let showBlur;
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur, privateBanner } = arg0);
  const merged = Object.assign(arg0, Object.assign({ bannerAnimatedStyle: 0, bannerImageAnimatedStyle: 0, blurAnimatedProps: 0, showBlur: 0, privateBanner: 0 }));
  const obj = { style: bannerAnimatedStyle, children: items };
  items = [privateBanner, ];
  const View = ReanimatedRexport.View;
  const obj2 = { style: bannerImageAnimatedStyle, children: items1 };
  const View2 = ReanimatedRexport.View;
  const obj3 = {};
  const tmp4 = UserProfileBannerDefault;
  const merged1 = Object.assign(merged);
  items1 = [metroRequire(tmp4, obj3), ];
  const obj4 = PlatformUtils;
  let tmp3Result = obj4.isIOS() && showBlur;
  if (tmp3Result) {
    const obj5 = { animatedProps: blurAnimatedProps, style: StyleSheet.absoluteFillObject };
    tmp3Result = metroRequire(VisualEffectViewThemed, obj5);
  }
  items1[1] = tmp3Result;
  items[1] = metroImportDefault(View2, obj2);
  return metroImportDefault(View, obj);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileOverscrollBanner.tsx");

export default tmp4;