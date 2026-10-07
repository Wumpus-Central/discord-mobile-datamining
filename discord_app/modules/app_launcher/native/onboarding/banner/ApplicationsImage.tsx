// discord_app/modules/app_launcher/native/onboarding/banner/ApplicationsImage.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import AppLauncherNativeUtils from "../../AppLauncherNativeUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  appIconContainer: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
    borderRadius: nativeDefault.radii.sm + 3,
    position: "absolute",
    padding: 3,
  },
  appIconLeftContainer: null,
  appIconRightContainer: null,
  appIcon: null,
};
let obj4 = { transform: null };
let items = [{ rotate: "-10deg" }];
obj4.transform = items;
obj2.appIconLeftContainer = obj4;
let obj5 = { left: nativeDefault.space.PX_32, transform: null };
let items1 = [{ rotate: "15deg" }];
obj5.transform = items1;
obj2.appIconRightContainer = obj5;
let size = { borderRadius: nativeDefault.radii.sm, width: 36, height: 36 };
obj2.appIcon = size;
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: nativeDefault.radii.sm + 3,
  position: "absolute",
  padding: 3,
};
size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/ApplicationsImage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(25);
      ({ firstApplication, secondApplication } = arg0);
      const tmp4 = closure_7();
      if (cResult[0] !== firstApplication) {
        let appLauncherIconSource = null;
        if (null != firstApplication) {
          appLauncherIconSource = AppLauncherNativeUtils.getAppLauncherIconSource(firstApplication);
          const tmpResult = AppLauncherNativeUtils;
        }
        cResult[0] = firstApplication;
        cResult[1] = appLauncherIconSource;
        let tmp5 = appLauncherIconSource;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== secondApplication) {
        let appLauncherIconSource1 = null;
        if (null != secondApplication) {
          appLauncherIconSource1 = AppLauncherNativeUtils.getAppLauncherIconSource(secondApplication);
          const tmpResult2 = AppLauncherNativeUtils;
        }
        cResult[2] = secondApplication;
        cResult[3] = appLauncherIconSource1;
        let tmp7 = appLauncherIconSource1;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === tmp5) {
        if (cResult[5] === tmp4.appIcon) {
          let tmp9 = cResult[6];
        }
        if (cResult[7] === tmp7) {
          if (cResult[8] === tmp4.appIcon) {
            let tmp13 = cResult[9];
          }
          if (cResult[10] === tmp4.appIconContainer) {
            if (cResult[11] === tmp4.appIconLeftContainer) {
              let tmp18 = cResult[12];
            }
            if (cResult[13] === tmp13) {
              if (cResult[14] === tmp18) {
                let tmp19 = cResult[15];
              }
              if (cResult[16] === tmp4.appIconContainer) {
                if (cResult[17] === tmp4.appIconRightContainer) {
                  let tmp23 = cResult[18];
                }
                if (cResult[19] === tmp9) {
                  if (cResult[20] === tmp23) {
                    let tmp24 = cResult[21];
                  }
                  if (cResult[22] === tmp19) {
                    if (cResult[23] === tmp24) {
                      let tmp28 = cResult[24];
                    }
                    return tmp28;
                  }
                  const obj2 = { children: null };
                  const items = [tmp19, tmp24];
                  obj2.children = items;
                  const tmp31 = timestampProducer(hasOwnProperty, obj2);
                  cResult[22] = tmp19;
                  cResult[23] = tmp24;
                  cResult[24] = tmp31;
                  tmp28 = tmp31;
                }
                const obj3 = { style: tmp23, children: tmp9 };
                const tmp27 = React4(View, obj3);
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
            const tmp22 = React4(View, obj4);
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
          tmp15 = React4(FastImageDefault, obj5);
        }
        cResult[7] = tmp7;
        cResult[8] = tmp4.appIcon;
        cResult[9] = tmp15;
        tmp13 = tmp15;
      }
      let tmp10 = null != tmp5;
      if (tmp10) {
        const obj6 = { style: tmp4.appIcon, source: tmp5 };
        tmp10 = React4(FastImageDefault, obj6);
      }
      cResult[4] = tmp5;
      cResult[5] = tmp4.appIcon;
      cResult[6] = tmp10;
      tmp9 = tmp10;
    }
  : (arg0) => {
      ({ firstApplication, secondApplication } = arg0);
      const tmp = closure_7();
      let appLauncherIconSource = null;
      if (null != firstApplication) {
        appLauncherIconSource = AppLauncherNativeUtils.getAppLauncherIconSource(firstApplication);
      }
      let appLauncherIconSource1 = null;
      if (null != secondApplication) {
        appLauncherIconSource1 = AppLauncherNativeUtils.getAppLauncherIconSource(secondApplication);
      }
      let tmp8 = null != appLauncherIconSource;
      if (tmp8) {
        const obj3 = { style: tmp.appIcon, source: appLauncherIconSource };
        tmp8 = React4(FastImageDefault, obj3);
      }
      let tmp12 = null != appLauncherIconSource1;
      if (tmp12) {
        const obj4 = { style: tmp.appIcon, source: appLauncherIconSource1 };
        tmp12 = React4(FastImageDefault, obj4);
      }
      const obj5 = { children: null };
      const obj6 = { style: null, children: tmp12 };
      const items = [,];
      ({ appIconContainer: arr[0], appIconLeftContainer: arr[1] } = tmp);
      obj6.style = items;
      const items1 = [React4(View, obj6)];
      const obj7 = { style: null, children: tmp8 };
      const items2 = [,];
      ({ appIconContainer: arr3[0], appIconRightContainer: arr3[1] } = tmp);
      obj7.style = items2;
      items1[1] = React4(View, obj7);
      obj5.children = items1;
      return timestampProducer(hasOwnProperty, obj5);
    };
export const APP_ICON_SIZE = 36;
