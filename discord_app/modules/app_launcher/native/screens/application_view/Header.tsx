// discord_app/modules/app_launcher/native/screens/application_view/Header.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import ToastUtils from "../../../../toast/native/ToastUtils.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import ClipboardUtils from "../../../../../utils/ClipboardUtils.native.tsx";
import useAvatarColorDefault from "../../../../avatar/useAvatarColor.tsx";
import AppLauncherUtils from "../../../utils/AppLauncherUtils.tsx";
import getApplicationInstallURL2 from "../../../../applications/getApplicationInstallURL.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import UserStore from "../../../../../stores/UserStore.tsx";
import AppLauncherStore from "../../../AppLauncherStore.tsx";
import AppLauncherNativeConstants from "../../AppLauncherNativeConstants.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let application, dependencyMap, importDefault;

let DEFAULT_CONTENT_PADDING;
let SCREEN_BACKGROUND_COLOR;
let metroImportAll;
let metroImportDefault;
let rect;
let rect1;
let rect2;
let size;
let tmp5;
const ReanimatedRexportDefault = tmp5(4612);
const AssetRegistryDefault = tmp5(4840);
const EntityBorderAppIconDefault = tmp5(11670);
const AppLauncherBackButtonDefault = tmp5(11755);
const AppDetailsOverflowMenuDefault = tmp5(11757);
let View = react_native.View;
({ DEFAULT_CONTENT_PADDING, SCREEN_BACKGROUND_COLOR } = AppLauncherNativeConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const xl = nativeDefault.radii.xl;
let c10 = 105;
let createStyles = createStyles_mod;
let obj = {
  headerContainer: { position: "absolute", top: -16, left: 0, right: 0, minHeight: 161 },
  expandedHeaderBanner: { height: 105 },
  appIconMask: rect,
  collapsedHeaderBanner: rect1,
  collapsedHeaderBannerOverlay: {
    backgroundColor: "black",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  loadingIcon: size,
  actionsWrapper: rect2,
};
rect = {
  position: "absolute",
  padding: 4,
  bottom: -40,
  left: 16,
  backgroundColor: SCREEN_BACKGROUND_COLOR,
  borderRadius: nativeDefault.radii.xl + 4,
};
createStyles = createStyles.createStyles;
rect1 = {
  height: 56,
  justifyContent: "space-between",
  alignItems: "center",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  flexDirection: "row",
  paddingHorizontal: DEFAULT_CONTENT_PADDING,
  paddingTop: 16,
  paddingBottom: nativeDefault.space.PX_12,
};
size = { height: 72, width: 72, borderRadius: xl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
rect2 = {
  flexDirection: "row",
  display: "flex",
  gap: nativeDefault.space.PX_16,
  position: "absolute",
  right: nativeDefault.space.PX_12,
  top: nativeDefault.space.PX_12,
  alignItems: "center",
  justifyContent: "center",
};
let closure_11 = createStyles(obj);
const __initData = {
  code: 'function HeaderTsx1(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,-HEADER_SCROLL_RANGE],"clamp")}]};}',
};
const __initData2 = {
  code: "function HeaderTsx2(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,-HEADER_SCROLL_RANGE],'clamp')}]};}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (scrollOffsetY) => {
      let tmp3;
      let obj = scrollOffsetY(576);
      const cResult = obj.c(2);
      scrollOffsetY = scrollOffsetY.scrollOffsetY;
      let obj2 = scrollOffsetY(4612);
      const fn = function n() {
        let items;
        let items1;
        let obj3;
        const obj = { transform: items1 };
        const obj2 = { translateY: obj3.interpolate(scrollOffsetY.get(), items, [0, -105], "clamp") };
        items = [0, c10];
        items1 = [obj2];
        obj3 = ReanimatedRexport;
        return obj;
      };
      let obj3 = { interpolate: scrollOffsetY(4612).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
      fn.__closure = obj3;
      fn.__workletHash = 1624319834028;
      fn.__initData = __initData;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      if (cResult[0] !== animatedStyle) {
        const obj4 = { style: animatedStyle };
        cResult[0] = animatedStyle;
        cResult[1] = obj4;
        tmp3 = obj4;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : (scrollOffsetY) => {
      let fn;
      let obj2;
      scrollOffsetY = scrollOffsetY.scrollOffsetY;
      let obj = { style: obj2.useAnimatedStyle(fn) };
      obj2 = scrollOffsetY(4612);
      fn = function n() {
        let items;
        let items1;
        let obj3;
        const obj = { transform: items1 };
        const obj2 = { translateY: obj3.interpolate(scrollOffsetY.get(), items, [0, -105], "clamp") };
        items = [0, c10];
        items1 = [obj2];
        obj3 = ReanimatedRexport;
        return obj;
      };
      let obj3 = { interpolate: scrollOffsetY(4612).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
      fn.__closure = obj3;
      fn.__workletHash = 2569159867119;
      fn.__initData = __initData2;
      return obj;
    };
const __initData3 = {
  code: 'function HeaderTsx3(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,HEADER_SCROLL_RANGE],"clamp")}]};}',
};
const __initData4 = {
  code: 'function HeaderTsx4(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[16,0],"clamp")}],opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,1],"clamp")};}',
};
const __initData5 = {
  code: "function HeaderTsx5(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,HEADER_SCROLL_RANGE],'clamp')}]};}",
};
const __initData6 = {
  code: "function HeaderTsx6(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[16,0],'clamp')}],opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,1],'clamp')};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (scrollOffsetY) => {
      let obj = scrollOffsetY(576);
      const cResult = obj.c(3);
      scrollOffsetY = scrollOffsetY.scrollOffsetY;
      let obj2 = scrollOffsetY(4612);
      const fn = function n() {
        let items;
        let items1;
        let items2;
        let obj3;
        const obj = { transform: items2 };
        const obj2 = { translateY: obj3.interpolate(scrollOffsetY.get(), items, items1, "clamp") };
        items = [0, c10];
        items1 = [0, c10];
        items2 = [obj2];
        obj3 = ReanimatedRexport;
        return obj;
      };
      let obj3 = { interpolate: scrollOffsetY(4612).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
      fn.__closure = obj3;
      fn.__workletHash = 2970610906275;
      fn.__initData = __initData3;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      let obj4 = scrollOffsetY(4612);
      const fn2 = function l() {
        let items;
        let items1;
        let items2;
        let obj3;
        let obj4;
        const obj = { transform: items1, opacity: obj4.interpolate(scrollOffsetY.get(), items2, [0, 1], "clamp") };
        const obj2 = { translateY: obj3.interpolate(scrollOffsetY.get(), items, [16, 0], "clamp") };
        items = [52.5, c10];
        items1 = [obj2];
        items2 = [52.5, c10];
        obj3 = ReanimatedRexport;
        obj4 = ReanimatedRexport;
        return obj;
      };
      fn2.__closure = { interpolate: scrollOffsetY(4612).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
      fn2.__workletHash = 15470059704100;
      fn2.__initData = __initData4;
      ({ interpolate: scrollOffsetY(4612).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE });
      const animatedStyle1 = obj4.useAnimatedStyle(fn2);
      if (cResult[0] === animatedStyle) {
        let tmp4;
        if (cResult[1] === animatedStyle1) {
          tmp4 = cResult[2];
        }
        return tmp4;
      }
      const obj6 = { headerStyle: animatedStyle, nameStyle: animatedStyle1 };
      cResult[0] = animatedStyle;
      cResult[1] = animatedStyle1;
      cResult[2] = obj6;
      tmp4 = obj6;
    }
  : (scrollOffsetY) => {
      let fn;
      let fn2;
      let obj2;
      let obj4;
      scrollOffsetY = scrollOffsetY.scrollOffsetY;
      let obj = { headerStyle: obj2.useAnimatedStyle(fn), nameStyle: obj4.useAnimatedStyle(fn2) };
      obj2 = scrollOffsetY(4612);
      fn = function n() {
        let items;
        let items1;
        let items2;
        let obj3;
        const obj = { transform: items2 };
        const obj2 = { translateY: obj3.interpolate(scrollOffsetY.get(), items, items1, "clamp") };
        items = [0, c10];
        items1 = [0, c10];
        items2 = [obj2];
        obj3 = ReanimatedRexport;
        return obj;
      };
      let obj3 = { interpolate: scrollOffsetY(4612).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
      fn.__closure = obj3;
      fn.__workletHash = 11916253250213;
      fn.__initData = __initData5;
      obj4 = scrollOffsetY(4612);
      fn2 = function l() {
        let items;
        let items1;
        let items2;
        let obj3;
        let obj4;
        const obj = { transform: items1, opacity: obj4.interpolate(scrollOffsetY.get(), items2, [0, 1], "clamp") };
        const obj2 = { translateY: obj3.interpolate(scrollOffsetY.get(), items, [16, 0], "clamp") };
        items = [52.5, c10];
        items1 = [obj2];
        items2 = [52.5, c10];
        obj3 = ReanimatedRexport;
        obj4 = ReanimatedRexport;
        return obj;
      };
      fn2.__closure = { interpolate: scrollOffsetY(4612).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
      fn2.__workletHash = 10128442993702;
      fn2.__initData = __initData6;
      ({ interpolate: scrollOffsetY(4612).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE });
      return obj;
    };
const __initData7 = {
  code: 'function HeaderTsx7(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,0.5],"clamp")};}',
};
const __initData8 = {
  code: "function HeaderTsx8(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,0.5],'clamp')};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (scrollOffsetY) => {
      let tmp3;
      let obj = scrollOffsetY(576);
      const cResult = obj.c(2);
      scrollOffsetY = scrollOffsetY.scrollOffsetY;
      let obj2 = scrollOffsetY(4612);
      const fn = function n() {
        let items;
        let obj2;
        const obj = { opacity: obj2.interpolate(scrollOffsetY.get(), items, [0, 0.5], "clamp") };
        items = [52.5, c10];
        obj2 = ReanimatedRexport;
        return obj;
      };
      fn.__closure = { interpolate: scrollOffsetY(4612).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
      fn.__workletHash = 17064912182733;
      fn.__initData = __initData7;
      ({ interpolate: scrollOffsetY(4612).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE });
      const animatedStyle = obj2.useAnimatedStyle(fn);
      if (cResult[0] !== animatedStyle) {
        const obj4 = { style: animatedStyle };
        cResult[0] = animatedStyle;
        cResult[1] = obj4;
        tmp3 = obj4;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : (scrollOffsetY) => {
      let fn;
      let obj2;
      scrollOffsetY = scrollOffsetY.scrollOffsetY;
      let obj = { style: obj2.useAnimatedStyle(fn) };
      obj2 = scrollOffsetY(4612);
      fn = function n() {
        let items;
        let obj2;
        const obj = { opacity: obj2.interpolate(scrollOffsetY.get(), items, [0, 0.5], "clamp") };
        items = [52.5, c10];
        obj2 = ReanimatedRexport;
        return obj;
      };
      fn.__closure = { interpolate: scrollOffsetY(4612).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
      fn.__workletHash = 14182047849602;
      fn.__initData = __initData8;
      ({ interpolate: scrollOffsetY(4612).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE });
      return obj;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (application) => {
      let closure_2;
      let id;
      let intl;
      let items1;
      let items2;
      let items3;
      let items4;
      let onAddAppMenuClick;
      let onPressBack;
      let scrollOffsetY;
      let tmp19;
      let tmp4;
      let tmp5;
      let tmp9;
      let obj = application(576);
      const cResult = obj.c(65);
      application = application.application;
      ({ onPressBack, scrollOffsetY, onAddAppMenuClick } = application);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AppLauncherStore];
        const fn = function c() {
          return AppLauncherStore.entrypoint();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = fn;
        tmp4 = items;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = application(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      const tmp8 = closure_11();
      if (cResult[2] !== application) {
        let appLauncherIconSource = null;
        if (null != application) {
          const tmpResult6 = application(11665);
          appLauncherIconSource = tmpResult6.getAppLauncherIconSource(application);
        }
        cResult[2] = application;
        cResult[3] = appLauncherIconSource;
        tmp9 = appLauncherIconSource;
      } else {
        tmp9 = cResult[3];
      }
      const tmpResult7 = application(4580);
      let str = tmpResult7.useToken(stateFromStores(587).colors.BACKGROUND_BASE_LOW);
      let tmp13 = tmp9;
      const tmp12 = stateFromStores(7815);
      if (typeof tmp9 !== "number") {
        let uri;
        if (tmp9 != null) {
          uri = tmp9.uri;
        }
        tmp13 = uri;
      }
      if (str == null) {
        str = "";
      }
      const tmp12Result = tmp12(tmp13, str);
      if (cResult[4] === tmp9) {
        let tmp16;
        let tmp22;
        let tmp25;
        let tmp28;
        let tmp31;
        let tmp32;
        let tmp34;
        if (cResult[5] === tmp8.loadingIcon) {
          tmp16 = cResult[6];
        }
        if (cResult[7] !== scrollOffsetY) {
          let obj2 = { scrollOffsetY };
          cResult[7] = scrollOffsetY;
          cResult[8] = obj2;
          tmp22 = obj2;
        } else {
          tmp22 = cResult[8];
        }
        const tmp24 = closure_14(tmp22);
        if (cResult[9] !== scrollOffsetY) {
          let obj3 = { scrollOffsetY };
          cResult[9] = scrollOffsetY;
          cResult[10] = obj3;
          tmp25 = obj3;
        } else {
          tmp25 = cResult[10];
        }
        const tmp27 = closure_19(tmp25);
        if (cResult[11] !== scrollOffsetY) {
          let obj4 = { scrollOffsetY };
          cResult[11] = scrollOffsetY;
          cResult[12] = obj4;
          tmp28 = obj4;
        } else {
          tmp28 = cResult[12];
        }
        const tmp30 = closure_22(tmp28);
        if (cResult[13] !== application) {
          let str2 = "";
          if (null != application) {
            const tmpResult8 = application(8794);
            str2 = tmpResult8.getSectionName(application);
          }
          cResult[13] = application;
          cResult[14] = str2;
          tmp31 = str2;
        } else {
          tmp31 = cResult[14];
        }
        if (cResult[15] !== application) {
          let result = null != application && "flags" in application;
          if (result) {
            const tmpResult9 = application(2016);
            result = tmpResult9.supportsEmbeddedSurface(application, tmp(8514).EmbeddedSurfaceType.MAIN);
          }
          cResult[15] = application;
          cResult[16] = result;
          tmp32 = result;
        } else {
          tmp32 = cResult[16];
        }
        dependencyMap = tmp32;
        const _Symbol = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const currentUser = UserStore.getCurrentUser();
          cResult[17] = currentUser;
          tmp34 = currentUser;
        } else {
          tmp34 = cResult[17];
        }
        id = tmp34;
        if (cResult[18] === tmp24.style) {
          let tmp37;
          let tmp38;
          if (cResult[19] === tmp8.headerContainer) {
            tmp37 = cResult[20];
          }
          if (cResult[21] !== tmp12Result) {
            const obj5 = { backgroundColor: tmp12Result };
            cResult[21] = tmp12Result;
            cResult[22] = obj5;
            tmp38 = obj5;
          } else {
            tmp38 = cResult[22];
          }
          if (cResult[23] === tmp8.expandedHeaderBanner) {
            let tmp39;
            if (cResult[24] === tmp38) {
              tmp39 = cResult[25];
            }
            if (cResult[26] === tmp16) {
              let tmp40;
              if (cResult[27] === tmp8.appIconMask) {
                tmp40 = cResult[28];
              }
              if (cResult[29] === tmp39) {
                let tmp44;
                let tmp48;
                if (cResult[30] === tmp40) {
                  tmp44 = cResult[31];
                }
                if (cResult[32] !== tmp12Result) {
                  const obj6 = { backgroundColor: tmp12Result };
                  cResult[32] = tmp12Result;
                  cResult[33] = obj6;
                  tmp48 = obj6;
                } else {
                  tmp48 = cResult[33];
                }
                if (cResult[34] === tmp27.headerStyle) {
                  if (cResult[35] === tmp8.collapsedHeaderBanner) {
                    let tmp49;
                    if (cResult[36] === tmp48) {
                      tmp49 = cResult[37];
                    }
                    if (cResult[38] === tmp30.style) {
                      let tmp50;
                      let tmp53;
                      let tmp56;
                      if (cResult[39] === tmp8.collapsedHeaderBannerOverlay) {
                        tmp50 = cResult[40];
                      }
                      if (cResult[41] !== onPressBack) {
                        const obj7 = { onPress: onPressBack };
                        const tmp55 = closure_7(stateFromStores(11755), obj7);
                        cResult[41] = onPressBack;
                        cResult[42] = tmp55;
                        tmp53 = tmp55;
                      } else {
                        tmp53 = cResult[42];
                      }
                      if (cResult[43] !== tmp31) {
                        const obj8 = { variant: "heading-lg/bold", color: "text-overlay-light", children: tmp31 };
                        const tmp58 = closure_7(application(4886).Heading, obj8);
                        cResult[43] = tmp31;
                        cResult[44] = tmp58;
                        tmp56 = tmp58;
                      } else {
                        tmp56 = cResult[44];
                      }
                      if (cResult[45] === tmp27.nameStyle) {
                        let tmp59;
                        let tmp62;
                        if (cResult[46] === tmp56) {
                          tmp59 = cResult[47];
                        }
                        const _Symbol2 = Symbol;
                        if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
                          const tmp64 = closure_7(application(1188).Spacer, { size: 32, pointerEvents: "none" });
                          cResult[48] = tmp64;
                          tmp62 = tmp64;
                        } else {
                          tmp62 = cResult[48];
                        }
                        if (cResult[49] === tmp49) {
                          if (cResult[50] === tmp50) {
                            if (cResult[51] === tmp53) {
                              let tmp65;
                              if (cResult[52] === tmp59) {
                                tmp65 = cResult[53];
                              }
                              if (cResult[54] === application) {
                                if (cResult[55] === stateFromStores) {
                                  if (cResult[56] === tmp32) {
                                    if (cResult[57] === onAddAppMenuClick) {
                                      let tmp68;
                                      if (cResult[58] === tmp8.actionsWrapper) {
                                        tmp68 = cResult[59];
                                      }
                                      if (cResult[60] === tmp37) {
                                        if (cResult[61] === tmp44) {
                                          if (cResult[62] === tmp65) {
                                            let tmp73;
                                            if (cResult[63] === tmp68) {
                                              tmp73 = cResult[64];
                                            }
                                            return tmp73;
                                          }
                                        }
                                      }
                                      const obj9 = { style: tmp37, pointerEvents: "box-none", children: items1 };
                                      items1 = [tmp44, tmp65, tmp68];
                                      const tmp75 = closure_8(stateFromStores(4612).View, obj9);
                                      cResult[60] = tmp37;
                                      cResult[61] = tmp44;
                                      cResult[62] = tmp65;
                                      cResult[63] = tmp68;
                                      cResult[64] = tmp75;
                                      tmp73 = tmp75;
                                    }
                                  }
                                }
                              }
                              let tmp69 = null;
                              if (null != application) {
                                tmp69 = null;
                                const tmpResult10 = application(8794);
                                if (tmpResult10.isRealApplication(application)) {
                                  const obj10 = { style: tmp8.actionsWrapper, children: items2 };
                                  const obj11 = {
                                    size: "sm",
                                    variant: "secondary-overlay",
                                    icon: stateFromStores(4840),
                                    onPress() {
                                      let activityLaunchURL;
                                      const obj = AnalyticsUtilsDefault;
                                      const obj2 = { application_id: application.id, source: stateFromStores };
                                      obj.track(AnalyticEvents.APP_LAUNCHER_APPLICATION_LINK_COPIED, obj2);
                                      const copy = ClipboardUtils.copy;
                                      ClipboardUtils;
                                      const tmp6 = getApplicationInstallURL2;
                                      if (closure_2) {
                                        const obj3 = { applicationId: application.id, referrerId: id };
                                        id = undefined;
                                        const getActivityLaunchURL = tmp6.getActivityLaunchURL;
                                        if (id != null) {
                                          id = id.id;
                                        }
                                        activityLaunchURL = getActivityLaunchURL(obj3);
                                      } else {
                                        const getApplicationInstallURL = tmp6.getApplicationInstallURL;
                                        const obj4 = { id: application.id };
                                        const tmp4Result = AppLauncherUtils;
                                        const merged = Object.assign(tmp4Result.getInstallAppProps(application));
                                        activityLaunchURL = getApplicationInstallURL(obj4);
                                      }
                                      copy(activityLaunchURL);
                                      const tmp4Result2 = ToastUtils;
                                      tmp4Result2.presentLinkCopied();
                                    },
                                    accessibilityLabel: intl.string(application(1126).t.XWDihq),
                                    maxFontSizeMultiplier: 1.5,
                                  };
                                  const IconButton = tmp(7575).IconButton;
                                  intl = tmp(1126).intl;
                                  items2 = [closure_7(IconButton, obj11)];
                                  const obj12 = { application, onAddAppMenuClick };
                                  items2[1] = closure_7(stateFromStores(11757), obj12);
                                  tmp69 = closure_8(id, obj10);
                                }
                              }
                              cResult[54] = application;
                              cResult[55] = stateFromStores;
                              cResult[56] = tmp32;
                              cResult[57] = onAddAppMenuClick;
                              cResult[58] = tmp8.actionsWrapper;
                              cResult[59] = tmp69;
                              tmp68 = tmp69;
                            }
                          }
                        }
                        const obj13 = { style: tmp49, pointerEvents: "box-none", children: items3 };
                        items3 = [tmp50, tmp53, tmp59, tmp62];
                        const tmp67 = closure_8(stateFromStores(4612).View, obj13);
                        cResult[49] = tmp49;
                        cResult[50] = tmp50;
                        cResult[51] = tmp53;
                        cResult[52] = tmp59;
                        cResult[53] = tmp67;
                        tmp65 = tmp67;
                      }
                      const obj14 = { style: tmp27.nameStyle, pointerEvents: "none", children: tmp56 };
                      const tmp61 = closure_7(stateFromStores(4612).View, obj14);
                      cResult[45] = tmp27.nameStyle;
                      cResult[46] = tmp56;
                      cResult[47] = tmp61;
                      tmp59 = tmp61;
                    }
                    const obj15 = { style: items4, pointerEvents: "none" };
                    items4 = [tmp8.collapsedHeaderBannerOverlay, tmp30.style];
                    const tmp52 = closure_7(stateFromStores(4612).View, obj15);
                    cResult[38] = tmp30.style;
                    cResult[39] = tmp8.collapsedHeaderBannerOverlay;
                    cResult[40] = tmp52;
                    tmp50 = tmp52;
                  }
                }
                const items5 = [tmp8.collapsedHeaderBanner, tmp48, tmp27.headerStyle];
                cResult[34] = tmp27.headerStyle;
                cResult[35] = tmp8.collapsedHeaderBanner;
                cResult[36] = tmp48;
                cResult[37] = items5;
                tmp49 = items5;
              }
              const obj16 = { style: tmp39, pointerEvents: "none", children: tmp40 };
              const tmp47 = closure_7(id, obj16);
              cResult[29] = tmp39;
              cResult[30] = tmp40;
              cResult[31] = tmp47;
              tmp44 = tmp47;
            }
            const obj17 = { style: tmp8.appIconMask, children: tmp16 };
            const tmp43 = closure_7(id, obj17);
            cResult[26] = tmp16;
            cResult[27] = tmp8.appIconMask;
            cResult[28] = tmp43;
            tmp40 = tmp43;
          }
          const items6 = [tmp8.expandedHeaderBanner, tmp38];
          cResult[23] = tmp8.expandedHeaderBanner;
          cResult[24] = tmp38;
          cResult[25] = items6;
          tmp39 = items6;
        }
        const items7 = [tmp8.headerContainer, tmp24.style];
        cResult[18] = tmp24.style;
        cResult[19] = tmp8.headerContainer;
        cResult[20] = items7;
        tmp37 = items7;
      }
      if (null != tmp9) {
        const obj18 = { iconSource: tmp9, iconBorderRadius: xl, iconSize: 72 };
        tmp19 = closure_7(tmp11(11670), obj18);
      } else {
        const obj19 = { style: tmp8.loadingIcon };
        tmp19 = closure_7(id, obj19);
      }
      cResult[4] = tmp9;
      cResult[5] = tmp8.loadingIcon;
      cResult[6] = tmp19;
      tmp16 = tmp19;
    }
  : (application) => {
      let c2;
      let intl;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let obj6;
      let onAddAppMenuClick;
      let onPressBack;
      let source;
      let tmp12;
      let tmp13;
      application = application.application;
      const scrollOffsetY = application.scrollOffsetY;
      dependencyMap = undefined;
      let id;
      ({ onPressBack, onAddAppMenuClick } = application);
      let obj = application(504);
      const items = [AppLauncherStore];
      importDefault = obj.useStateFromStores(items, () => AppLauncherStore.entrypoint());
      const tmp3 = closure_11();
      let appLauncherIconSource = null;
      if (null != application) {
        const tmpResult = application(11665);
        appLauncherIconSource = tmpResult.getAppLauncherIconSource(application);
      }
      const tmpResult5 = application(4580);
      let str = tmpResult5.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
      let tmp7 = appLauncherIconSource;
      let tmp6 = useAvatarColorDefault;
      if (typeof appLauncherIconSource !== "number") {
        let uri;
        if (appLauncherIconSource != null) {
          uri = appLauncherIconSource.uri;
        }
        tmp7 = uri;
      }
      if (str == null) {
        str = "";
      }
      const tmp6Result = tmp6(tmp7, str);
      if (null != appLauncherIconSource) {
        let obj2 = { iconSource: appLauncherIconSource, iconBorderRadius: xl, iconSize: 72 };
        tmp12 = closure_7(EntityBorderAppIconDefault, obj2);
        tmp13 = closure_7;
      } else {
        let obj3 = { style: tmp3.loadingIcon };
        tmp12 = closure_7(id, obj3);
        tmp13 = closure_7;
      }
      const tmp16 = closure_14({ scrollOffsetY });
      const tmp17 = closure_19({ scrollOffsetY });
      let str2 = "";
      const tmp18 = closure_22({ scrollOffsetY });
      if (null != application) {
        const tmpResult6 = application(8794);
        str2 = tmpResult6.getSectionName(application);
      }
      let result = null != application && "flags" in application;
      if (result) {
        const tmpResult7 = application(2016);
        result = tmpResult7.supportsEmbeddedSurface(application, tmp(8514).EmbeddedSurfaceType.MAIN);
      }
      dependencyMap = result;
      id = UserStore.getCurrentUser();
      let obj4 = { style: items1, pointerEvents: "box-none", children: items3 };
      items1 = [tmp3.headerContainer, tmp16.style];
      const obj5 = { style: items2, pointerEvents: "none", children: tmp13(id, obj6) };
      items2 = [tmp3.expandedHeaderBanner, { backgroundColor: tmp6Result }];
      obj6 = { style: tmp3.appIconMask, children: tmp12 };
      View = ReanimatedRexportDefault.View;
      items3 = [tmp13(id, obj5), ,];
      const obj7 = { style: items4, pointerEvents: "box-none", children: items6 };
      items4 = [tmp3.collapsedHeaderBanner, { backgroundColor: tmp6Result }, tmp17.headerStyle];
      const View2 = ReanimatedRexportDefault.View;
      const obj8 = { style: items5, pointerEvents: "none" };
      items5 = [tmp3.collapsedHeaderBannerOverlay, tmp18.style];
      items6 = [
        tmp13(ReanimatedRexportDefault.View, obj8),
        tmp13(AppLauncherBackButtonDefault, { onPress: onPressBack }),
        ,
      ];
      const obj9 = {
        style: tmp17.nameStyle,
        pointerEvents: "none",
        children: tmp13(application(4886).Heading, {
          variant: "heading-lg/bold",
          color: "text-overlay-light",
          children: str2,
        }),
      };
      const View3 = ReanimatedRexportDefault.View;
      items6[2] = tmp13(View3, obj9);
      items6[3] = tmp13(application(1188).Spacer, { size: 32, pointerEvents: "none" });
      items3[1] = closure_8(View2, obj7);
      let tmp20Result = null;
      const tmp21 = id;
      if (null != application) {
        tmp20Result = null;
        const tmpResult8 = application(8794);
        if (tmpResult8.isRealApplication(application)) {
          const obj10 = { style: tmp3.actionsWrapper, children: items7 };
          const obj11 = {
            size: "sm",
            variant: "secondary-overlay",
            icon: AssetRegistryDefault,
            onPress() {
              let activityLaunchURL;
              const obj = AnalyticsUtilsDefault;
              const obj2 = { application_id: application.id, source };
              obj.track(AnalyticEvents.APP_LAUNCHER_APPLICATION_LINK_COPIED, obj2);
              const copy = ClipboardUtils.copy;
              ClipboardUtils;
              const tmp6 = getApplicationInstallURL2;
              if (c2) {
                const obj3 = { applicationId: application.id, referrerId: id };
                id = undefined;
                const getActivityLaunchURL = tmp6.getActivityLaunchURL;
                if (id != null) {
                  id = id.id;
                }
                activityLaunchURL = getActivityLaunchURL(obj3);
              } else {
                const getApplicationInstallURL = tmp6.getApplicationInstallURL;
                const obj4 = { id: application.id };
                const tmp4Result = AppLauncherUtils;
                const merged = Object.assign(tmp4Result.getInstallAppProps(application));
                activityLaunchURL = getApplicationInstallURL(obj4);
              }
              copy(activityLaunchURL);
              const tmp4Result2 = ToastUtils;
              tmp4Result2.presentLinkCopied();
            },
            accessibilityLabel: intl.string(application(1126).t.XWDihq),
            maxFontSizeMultiplier: 1.5,
          };
          const IconButton = tmp(7575).IconButton;
          intl = tmp(1126).intl;
          items7 = [tmp13(IconButton, obj11)];
          const obj12 = { application, onAddAppMenuClick };
          items7[1] = tmp13(AppDetailsOverflowMenuDefault, obj12);
          tmp20Result = closure_8(tmp21, obj10);
        }
      }
      items3[2] = tmp20Result;
      return closure_8(View, obj4);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/Header.tsx");

export default tmp6;
export const SHEET_HANDLE_CONTAINER_HEIGHT = 16;
export const EXPANDED_HEADER_HEIGHT = 161;
