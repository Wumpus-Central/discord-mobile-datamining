// discord_app/modules/user_profile/native/UserProfileOverscrollBanner.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import VisualEffectViewThemedDefault from "../../visual_effect_view/native/VisualEffectViewThemed.tsx";
import UserProfileBannerDefault from "UserProfileBanner.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let metroImportDefault;
let metroRequire;
let closure_3 = ["bannerAnimatedStyle", "bannerImageAnimatedStyle", "blurAnimatedProps", "showBlur", "privateBanner"];
const StyleSheet = react_native.StyleSheet;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const VisualEffectViewThemed = ReanimatedRexport.createAnimatedComponent(VisualEffectViewThemedDefault);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
    }
  : (arg0) => {
      let bannerAnimatedStyle;
      let bannerImageAnimatedStyle;
      let blurAnimatedProps;
      let items;
      let items1;
      let privateBanner;
      let showBlur;
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
      const obj = { style: bannerAnimatedStyle, children: items };
      items = [privateBanner];
      const View = ReanimatedRexport.View;
      const obj2 = { style: bannerImageAnimatedStyle, children: items1 };
      const View2 = ReanimatedRexport.View;
      const obj3 = {};
      const tmp4 = UserProfileBannerDefault;
      const merged1 = Object.assign(merged);
      items1 = [metroRequire(tmp4, obj3)];
      const obj4 = PlatformUtils;
      let tmp3Result = obj4.isIOS() && showBlur;
      if (tmp3Result) {
        const obj5 = { animatedProps: blurAnimatedProps, style: StyleSheet.absoluteFillObject };
        tmp3Result = metroRequire(VisualEffectViewThemed, obj5);
      }
      items1[1] = tmp3Result;
      items[1] = metroImportDefault(View2, obj2);
      return metroImportDefault(View, obj);
    };
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileOverscrollBanner.tsx");

export default tmp4;
