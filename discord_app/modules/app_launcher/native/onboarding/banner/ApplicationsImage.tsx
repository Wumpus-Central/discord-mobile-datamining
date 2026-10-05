// discord_app/modules/app_launcher/native/onboarding/banner/ApplicationsImage.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import AppLauncherNativeUtils from "../../AppLauncherNativeUtils.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let items;
let items1;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
const View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { appIconContainer: obj2, appIconLeftContainer: obj3, appIconRightContainer: obj4, appIcon: size };
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: nativeDefault.radii.sm + 3,
  position: "absolute",
  padding: 3,
};
createStyles = createStyles.createStyles;
obj3 = { transform: items };
items = [{ rotate: "-10deg" }];
obj4 = { left: nativeDefault.space.PX_32, transform: items1 };
items1 = [{ rotate: "15deg" }];
size = { borderRadius: nativeDefault.radii.sm, width: 36, height: 36 };
let closure_7 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let firstApplication;
      let items;
      let secondApplication;
      let tmp5;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(25);
      ({ firstApplication, secondApplication } = arg0);
      const tmp4 = closure_7();
      if (cResult[0] !== firstApplication) {
        let appLauncherIconSource = null;
        if (null != firstApplication) {
          const tmpResult = AppLauncherNativeUtils;
          appLauncherIconSource = tmpResult.getAppLauncherIconSource(firstApplication);
        }
        cResult[0] = firstApplication;
        cResult[1] = appLauncherIconSource;
        tmp5 = appLauncherIconSource;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== secondApplication) {
        let appLauncherIconSource1 = null;
        if (null != secondApplication) {
          const tmpResult2 = AppLauncherNativeUtils;
          appLauncherIconSource1 = tmpResult2.getAppLauncherIconSource(secondApplication);
        }
        cResult[2] = secondApplication;
        cResult[3] = appLauncherIconSource1;
        tmp7 = appLauncherIconSource1;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === tmp5) {
        let tmp9;
        if (cResult[5] === tmp4.appIcon) {
          tmp9 = cResult[6];
        }
        if (cResult[7] === tmp7) {
          let tmp13;
          if (cResult[8] === tmp4.appIcon) {
            tmp13 = cResult[9];
          }
          if (cResult[10] === tmp4.appIconContainer) {
            let tmp18;
            if (cResult[11] === tmp4.appIconLeftContainer) {
              tmp18 = cResult[12];
            }
            if (cResult[13] === tmp13) {
              let tmp19;
              if (cResult[14] === tmp18) {
                tmp19 = cResult[15];
              }
              if (cResult[16] === tmp4.appIconContainer) {
                let tmp23;
                if (cResult[17] === tmp4.appIconRightContainer) {
                  tmp23 = cResult[18];
                }
                if (cResult[19] === tmp9) {
                  let tmp24;
                  if (cResult[20] === tmp23) {
                    tmp24 = cResult[21];
                  }
                  if (cResult[22] === tmp19) {
                    let tmp28;
                    if (cResult[23] === tmp24) {
                      tmp28 = cResult[24];
                    }
                    return tmp28;
                  }
                  const obj2 = { children: items };
                  items = [tmp19, tmp24];
                  const tmp31 = metroRequire(hasOwnProperty, obj2);
                  cResult[22] = tmp19;
                  cResult[23] = tmp24;
                  cResult[24] = tmp31;
                  tmp28 = tmp31;
                }
                const obj3 = { style: tmp23, children: tmp9 };
                const tmp27 = React3(View, obj3);
                cResult[19] = tmp9;
                cResult[20] = tmp23;
                cResult[21] = tmp27;
                tmp24 = tmp27;
              }
              const items1 = [,];
              ({ appIconContainer: arr2[0], appIconRightContainer: arr2[1] } = tmp4);
              cResult[16] = tmp4.appIconContainer;
              cResult[17] = tmp4.appIconRightContainer;
              cResult[18] = items1;
              tmp23 = items1;
            }
            const obj4 = { style: tmp18, children: tmp13 };
            const tmp22 = React3(View, obj4);
            cResult[13] = tmp13;
            cResult[14] = tmp18;
            cResult[15] = tmp22;
            tmp19 = tmp22;
          }
          const items2 = [,];
          ({ appIconContainer: arr[0], appIconLeftContainer: arr[1] } = tmp4);
          cResult[10] = tmp4.appIconContainer;
          cResult[11] = tmp4.appIconLeftContainer;
          cResult[12] = items2;
          tmp18 = items2;
        }
        let tmp15 = null != tmp7;
        if (tmp15) {
          const obj5 = { style: tmp4.appIcon, source: tmp7 };
          tmp15 = React3(FastImageDefault, obj5);
        }
        cResult[7] = tmp7;
        cResult[8] = tmp4.appIcon;
        cResult[9] = tmp15;
        tmp13 = tmp15;
      }
      let tmp10 = null != tmp5;
      if (tmp10) {
        const obj6 = { style: tmp4.appIcon, source: tmp5 };
        tmp10 = React3(FastImageDefault, obj6);
      }
      cResult[4] = tmp5;
      cResult[5] = tmp4.appIcon;
      cResult[6] = tmp10;
      tmp9 = tmp10;
    }
  : (arg0) => {
      let firstApplication;
      let items;
      let items1;
      let items2;
      let secondApplication;
      ({ firstApplication, secondApplication } = arg0);
      const tmp = closure_7();
      let appLauncherIconSource = null;
      if (null != firstApplication) {
        const obj = AppLauncherNativeUtils;
        appLauncherIconSource = obj.getAppLauncherIconSource(firstApplication);
      }
      let appLauncherIconSource1 = null;
      if (null != secondApplication) {
        const obj2 = AppLauncherNativeUtils;
        appLauncherIconSource1 = obj2.getAppLauncherIconSource(secondApplication);
      }
      let tmp8 = null != appLauncherIconSource;
      if (tmp8) {
        const obj3 = { style: tmp.appIcon, source: appLauncherIconSource };
        tmp8 = React3(FastImageDefault, obj3);
      }
      let tmp12 = null != appLauncherIconSource1;
      if (tmp12) {
        const obj4 = { style: tmp.appIcon, source: appLauncherIconSource1 };
        tmp12 = React3(FastImageDefault, obj4);
      }
      const obj6 = { style: items, children: tmp12 };
      items = [,];
      const obj5 = { children: items1 };
      ({ appIconContainer: arr[0], appIconLeftContainer: arr[1] } = tmp);
      items1 = [React3(View, obj6)];
      const obj7 = { style: items2, children: tmp8 };
      items2 = [,];
      ({ appIconContainer: arr3[0], appIconRightContainer: arr3[1] } = tmp);
      items1[1] = React3(View, obj7);
      return metroRequire(hasOwnProperty, obj5);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/ApplicationsImage.tsx");

export default tmp5;
export const APP_ICON_SIZE = 36;
