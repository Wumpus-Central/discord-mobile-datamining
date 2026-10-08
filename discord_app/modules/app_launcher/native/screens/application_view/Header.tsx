// === Module 11835: application_view/Header ===

// Module 11835 (application_view/Header)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import ToastUtils from "ToastUtils" /* 4765 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import ClipboardUtils from "ClipboardUtils" /* 6872 */;
import useAvatarColorDefault from "useAvatarColor" /* 8244 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9185 */;
import AppLauncherBackButtonDefault from "AppLauncherBackButton" /* 11836 */;
import getApplicationInstallURL from "getApplicationInstallURL" /* 11837 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1389 */;
import AppLauncherStore from "AppLauncherStore" /* 11791 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const AppLauncherNativeConstants = fn(1501);
({ DEFAULT_CONTENT_PADDING, SCREEN_BACKGROUND_COLOR } = AppLauncherNativeConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const xl = nativeDefault.radii.xl;
let c10 = 105;
const createStyles = fn(5090);
let obj2 = { headerContainer: { position: "absolute", top: -16, left: 0, right: 0, minHeight: 161 }, expandedHeaderBanner: { height: 105 }, appIconMask: null, collapsedHeaderBanner: null, collapsedHeaderBannerOverlay: null, loadingIcon: null, actionsWrapper: null };
const rect = { position: "absolute", padding: 4, bottom: -40, left: 16, backgroundColor: SCREEN_BACKGROUND_COLOR, borderRadius: nativeDefault.radii.xl + 4 };
obj2.appIconMask = rect;
const rect1 = { height: 56, justifyContent: "space-between", alignItems: "center", position: "absolute", top: 0, left: 0, right: 0, flexDirection: "row", paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: 16, paddingBottom: nativeDefault.space.PX_12 };
obj2.collapsedHeaderBanner = rect1;
obj2.collapsedHeaderBannerOverlay = { backgroundColor: "black", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
let size = { height: 72, width: 72, borderRadius: xl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.loadingIcon = size;
const rect2 = { flexDirection: "row", display: "flex", gap: nativeDefault.space.PX_16, position: "absolute", right: nativeDefault.space.PX_12, top: nativeDefault.space.PX_12, alignItems: "center", justifyContent: "center" };
obj2.actionsWrapper = rect2;
let closure_11 = createStyles.createStyles(obj2);
const __initData = { code: "function HeaderTsx1(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,-HEADER_SCROLL_RANGE],\"clamp\")}]};}" };
const __initData2 = { code: "function HeaderTsx2(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,-HEADER_SCROLL_RANGE],'clamp')}]};}" };
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function useContainerAnimation(scrollOffsetY) {
  const cResult = scrollOffsetY(576).c(2);
  scrollOffsetY = scrollOffsetY.scrollOffsetY;
  let obj = scrollOffsetY(576);
  const fn = function n() {
    const obj = { transform: null };
    const obj2 = { translateY: null };
    const items = [0, c10];
    obj2.translateY = ReanimatedRexport.interpolate(scrollOffsetY.get(), items, [0, -105], "clamp");
    const items1 = [obj2];
    obj.transform = items1;
    return obj;
  };
  let obj2 = scrollOffsetY(4810);
  fn.__closure = { interpolate: scrollOffsetY(4810).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn.__workletHash = 1624319834028;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] !== animatedStyle) {
    const obj4 = { style: animatedStyle };
    cResult[0] = animatedStyle;
    cResult[1] = obj4;
    let tmp3 = obj4;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function useContainerAnimation(scrollOffsetY) {
  scrollOffsetY = scrollOffsetY.scrollOffsetY;
  let obj = { style: null };
  const fn = function n() {
    const obj = { transform: null };
    const obj2 = { translateY: null };
    const items = [0, c10];
    obj2.translateY = ReanimatedRexport.interpolate(scrollOffsetY.get(), items, [0, -105], "clamp");
    const items1 = [obj2];
    obj.transform = items1;
    return obj;
  };
  let obj2 = scrollOffsetY(4810);
  fn.__closure = { interpolate: scrollOffsetY(4810).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn.__workletHash = 2569159867119;
  fn.__initData = __initData2;
  obj.style = obj2.useAnimatedStyle(fn);
  return obj;
});
const __initData3 = { code: "function HeaderTsx3(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,HEADER_SCROLL_RANGE],\"clamp\")}]};}" };
const __initData4 = { code: "function HeaderTsx4(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[16,0],\"clamp\")}],opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,1],\"clamp\")};}" };
const __initData5 = { code: "function HeaderTsx5(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,HEADER_SCROLL_RANGE],'clamp')}]};}" };
const __initData6 = { code: "function HeaderTsx6(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[16,0],'clamp')}],opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,1],'clamp')};}" };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCollapsedHeaderAnimation(scrollOffsetY) {
  const cResult = scrollOffsetY(576).c(3);
  scrollOffsetY = scrollOffsetY.scrollOffsetY;
  let obj = scrollOffsetY(576);
  const fn = function n() {
    const obj = { transform: null };
    const obj2 = { translateY: null };
    const items = [0, c10];
    const items1 = [0, c10];
    obj2.translateY = ReanimatedRexport.interpolate(scrollOffsetY.get(), items, items1, "clamp");
    const items2 = [obj2];
    obj.transform = items2;
    return obj;
  };
  let obj2 = scrollOffsetY(4810);
  fn.__closure = { interpolate: scrollOffsetY(4810).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn.__workletHash = 2970610906275;
  fn.__initData = __initData3;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj3 = { interpolate: scrollOffsetY(4810).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  const fn2 = function l() {
    const obj = { transform: null, opacity: null };
    const obj2 = { translateY: null };
    const items = [52.5, c10];
    obj2.translateY = ReanimatedRexport.interpolate(scrollOffsetY.get(), items, [16, 0], "clamp");
    const items1 = [obj2];
    obj.transform = items1;
    const items2 = [52.5, c10];
    obj.opacity = ReanimatedRexport.interpolate(scrollOffsetY.get(), items2, [0, 1], "clamp");
    return obj;
  };
  const obj4 = scrollOffsetY(4810);
  fn2.__closure = { interpolate: scrollOffsetY(4810).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn2.__workletHash = 15470059704100;
  fn2.__initData = __initData4;
  const animatedStyle1 = obj4.useAnimatedStyle(fn2);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === animatedStyle1) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const obj6 = { headerStyle: animatedStyle, nameStyle: animatedStyle1 };
  cResult[0] = animatedStyle;
  cResult[1] = animatedStyle1;
  cResult[2] = obj6;
  tmp4 = obj6;
}) : (function useCollapsedHeaderAnimation(scrollOffsetY) {
  scrollOffsetY = scrollOffsetY.scrollOffsetY;
  let obj = { headerStyle: null, nameStyle: null };
  const fn = function n() {
    const obj = { transform: null };
    const obj2 = { translateY: null };
    const items = [0, c10];
    const items1 = [0, c10];
    obj2.translateY = ReanimatedRexport.interpolate(scrollOffsetY.get(), items, items1, "clamp");
    const items2 = [obj2];
    obj.transform = items2;
    return obj;
  };
  let obj2 = scrollOffsetY(4810);
  fn.__closure = { interpolate: scrollOffsetY(4810).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn.__workletHash = 11916253250213;
  fn.__initData = __initData5;
  obj.headerStyle = obj2.useAnimatedStyle(fn);
  let obj3 = { interpolate: scrollOffsetY(4810).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  const fn2 = function l() {
    const obj = { transform: null, opacity: null };
    const obj2 = { translateY: null };
    const items = [52.5, c10];
    obj2.translateY = ReanimatedRexport.interpolate(scrollOffsetY.get(), items, [16, 0], "clamp");
    const items1 = [obj2];
    obj.transform = items1;
    const items2 = [52.5, c10];
    obj.opacity = ReanimatedRexport.interpolate(scrollOffsetY.get(), items2, [0, 1], "clamp");
    return obj;
  };
  const obj4 = scrollOffsetY(4810);
  fn2.__closure = { interpolate: scrollOffsetY(4810).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn2.__workletHash = 10128442993702;
  fn2.__initData = __initData6;
  obj.nameStyle = obj4.useAnimatedStyle(fn2);
  return obj;
});
const __initData7 = { code: "function HeaderTsx7(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,0.5],\"clamp\")};}" };
const __initData8 = { code: "function HeaderTsx8(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,0.5],'clamp')};}" };
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCollapsedHeaderBannerOverlayAnimation(scrollOffsetY) {
  const cResult = scrollOffsetY(576).c(2);
  scrollOffsetY = scrollOffsetY.scrollOffsetY;
  let obj = scrollOffsetY(576);
  const fn = function n() {
    const obj = { opacity: null };
    const items = [52.5, c10];
    obj.opacity = ReanimatedRexport.interpolate(scrollOffsetY.get(), items, [0, 0.5], "clamp");
    return obj;
  };
  const obj2 = scrollOffsetY(4810);
  fn.__closure = { interpolate: scrollOffsetY(4810).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn.__workletHash = 17064912182733;
  fn.__initData = __initData7;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] !== animatedStyle) {
    const obj4 = { style: animatedStyle };
    cResult[0] = animatedStyle;
    cResult[1] = obj4;
    let tmp3 = obj4;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function useCollapsedHeaderBannerOverlayAnimation(scrollOffsetY) {
  scrollOffsetY = scrollOffsetY.scrollOffsetY;
  let obj = { style: null };
  const fn = function n() {
    const obj = { opacity: null };
    const items = [52.5, c10];
    obj.opacity = ReanimatedRexport.interpolate(scrollOffsetY.get(), items, [0, 0.5], "clamp");
    return obj;
  };
  const obj2 = scrollOffsetY(4810);
  fn.__closure = { interpolate: scrollOffsetY(4810).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn.__workletHash = 14182047849602;
  fn.__initData = __initData8;
  obj.style = obj2.useAnimatedStyle(fn);
  return obj;
});
ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/Header.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function Header(application) {
  const cResult = application(576).c(65);
  application = application.application;
  ({ onPressBack, scrollOffsetY, onAddAppMenuClick } = application);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AppLauncherStore];
    const fn = function c() {
      return AppLauncherStore.entrypoint();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = application(576);
  const stateFromStores = application(504).useStateFromStores(tmp4, tmp5);
  const tmp8 = closure_11();
  if (cResult[2] !== application) {
    let appLauncherIconSource = null;
    if (null != application) {
      appLauncherIconSource = tmp(11744).getAppLauncherIconSource(application);
      const tmpResult6 = tmp(11744);
    }
    cResult[2] = application;
    cResult[3] = appLauncherIconSource;
    let loadingIcon = appLauncherIconSource;
  } else {
    loadingIcon = cResult[3];
  }
  const tmpResult = application(504);
  let str = application(4778).useToken(stateFromStores(587).colors.BACKGROUND_BASE_LOW);
  let tmp12 = loadingIcon;
  const tmpResult7 = application(4778);
  if (typeof loadingIcon !== "number") {
    let uri;
    if (loadingIcon != null) {
      uri = loadingIcon.uri;
    }
    tmp12 = uri;
  }
  if (str == null) {
    str = "";
  }
  const tmp11Result = stateFromStores(8244)(tmp12, str);
  if (cResult[4] === loadingIcon) {
    if (cResult[5] === tmp8.loadingIcon) {
      if (cResult[7] !== scrollOffsetY) {
        let obj2 = { scrollOffsetY };
        cResult[7] = scrollOffsetY;
        cResult[8] = obj2;
        let tmp21 = obj2;
      } else {
        tmp21 = cResult[8];
      }
      const tmp23 = closure_14(tmp21);
      if (cResult[9] !== scrollOffsetY) {
        let obj3 = { scrollOffsetY };
        cResult[9] = scrollOffsetY;
        cResult[10] = obj3;
        let tmp24 = obj3;
      } else {
        tmp24 = cResult[10];
      }
      const tmp26 = closure_19(tmp24);
      if (cResult[11] !== scrollOffsetY) {
        let obj4 = { scrollOffsetY };
        cResult[11] = scrollOffsetY;
        cResult[12] = obj4;
        let tmp27 = obj4;
      } else {
        tmp27 = cResult[12];
      }
      const tmp29 = closure_22(tmp27);
      if (cResult[13] !== application) {
        let str2 = "";
        if (null != application) {
          str2 = tmp(9185).getSectionName(application);
          const tmpResult8 = tmp(9185);
        }
        cResult[13] = application;
        cResult[14] = str2;
        let tmp30 = str2;
      } else {
        tmp30 = cResult[14];
      }
      if (cResult[15] !== application) {
        let result = null != application;
        if (result) {
          result = "flags" in application;
        }
        if (result) {
          result = tmp(2028).supportsEmbeddedSurface(application, tmp(8586).EmbeddedSurfaceType.MAIN);
          const tmpResult9 = tmp(2028);
        }
        cResult[15] = application;
        cResult[16] = result;
        let tmp31 = result;
      } else {
        tmp31 = cResult[16];
      }
      dependencyMap = tmp31;
      const _Symbol = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const currentUser = UserStore.getCurrentUser();
        cResult[17] = currentUser;
        let tmp33 = currentUser;
      } else {
        tmp33 = cResult[17];
      }
      let id = tmp33;
      if (cResult[18] === tmp23.style) {
        if (cResult[19] === tmp8.headerContainer) {
          let tmp36 = cResult[20];
        }
        if (cResult[21] !== tmp11Result) {
          let obj5 = { backgroundColor: tmp11Result };
          cResult[21] = tmp11Result;
          cResult[22] = obj5;
          let tmp37 = obj5;
        } else {
          tmp37 = cResult[22];
        }
        if (cResult[23] === tmp8.expandedHeaderBanner) {
          if (cResult[24] === tmp37) {
            let tmp38 = cResult[25];
          }
          if (cResult[26] === tmp15) {
            if (cResult[27] === tmp8.appIconMask) {
              let tmp39 = cResult[28];
            }
            if (cResult[29] === tmp38) {
              if (cResult[30] === tmp39) {
                let tmp43 = cResult[31];
              }
              if (cResult[32] !== tmp11Result) {
                let obj6 = { backgroundColor: tmp11Result };
                cResult[32] = tmp11Result;
                cResult[33] = obj6;
                let tmp47 = obj6;
              } else {
                tmp47 = cResult[33];
              }
              if (cResult[34] === tmp26.headerStyle) {
                if (cResult[35] === tmp8.collapsedHeaderBanner) {
                  if (cResult[36] === tmp47) {
                    let tmp48 = cResult[37];
                  }
                  if (cResult[38] === tmp29.style) {
                    if (cResult[39] === tmp8.collapsedHeaderBannerOverlay) {
                      let tmp49 = cResult[40];
                    }
                    if (cResult[41] !== onPressBack) {
                      const obj7 = { onPress: onPressBack };
                      const tmp54 = closure_7(tmp10(11836), obj7);
                      cResult[41] = onPressBack;
                      cResult[42] = tmp54;
                      let tmp52 = tmp54;
                    } else {
                      tmp52 = cResult[42];
                    }
                    if (cResult[43] !== tmp30) {
                      const obj8 = { variant: "heading-lg/bold", color: "text-overlay-light", children: tmp30 };
                      const tmp57 = closure_7(tmp(5086).Heading, obj8);
                      cResult[43] = tmp30;
                      cResult[44] = tmp57;
                      let tmp55 = tmp57;
                    } else {
                      tmp55 = cResult[44];
                    }
                    if (cResult[45] === tmp26.nameStyle) {
                      if (cResult[46] === tmp55) {
                        let tmp58 = cResult[47];
                      }
                      const _Symbol2 = Symbol;
                      if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
                        const tmp63 = closure_7(tmp(1200).Spacer, { size: 32, pointerEvents: "none" });
                        cResult[48] = tmp63;
                        let tmp61 = tmp63;
                      } else {
                        tmp61 = cResult[48];
                      }
                      if (cResult[49] === tmp48) {
                        if (cResult[50] === tmp49) {
                          if (cResult[51] === tmp52) {
                            if (cResult[52] === tmp58) {
                              let tmp64 = cResult[53];
                            }
                            if (cResult[54] === application) {
                              if (cResult[55] === stateFromStores) {
                                if (cResult[56] === tmp31) {
                                  if (cResult[57] === onAddAppMenuClick) {
                                    if (cResult[58] === tmp8.actionsWrapper) {
                                      let tmp67 = cResult[59];
                                    }
                                    if (cResult[60] === tmp36) {
                                      if (cResult[61] === tmp43) {
                                        if (cResult[62] === tmp64) {
                                          if (cResult[63] === tmp67) {
                                            let tmp72 = cResult[64];
                                          }
                                          return tmp72;
                                        }
                                      }
                                    }
                                    const obj9 = { style: tmp36, pointerEvents: "box-none", children: null };
                                    const items1 = [tmp43, tmp64, tmp67];
                                    obj9.children = items1;
                                    const tmp74 = closure_8(tmp10(4810).View, obj9);
                                    cResult[60] = tmp36;
                                    cResult[61] = tmp43;
                                    cResult[62] = tmp64;
                                    cResult[63] = tmp67;
                                    cResult[64] = tmp74;
                                    tmp72 = tmp74;
                                  }
                                }
                              }
                            }
                            let tmp68 = null;
                            if (null != application) {
                              tmp68 = null;
                              if (tmpResult10.isRealApplication(application)) {
                                const obj10 = { style: tmp8.actionsWrapper, children: null };
                                const obj11 = {
                                  size: "sm",
                                  variant: "secondary-overlay",
                                  icon: tmp10(5040),
                                  onPress() {
                                                                  AnalyticsUtilsDefault.track(AnalyticEvents.APP_LAUNCHER_APPLICATION_LINK_COPIED, { application_id: application.id, source: stateFromStores });
                                                                  const obj2 = { application_id: application.id, source: stateFromStores };
                                                                  const obj4 = getApplicationInstallURL;
                                                                  if (closure_2) {
                                                                    const obj5 = { applicationId: application.id, referrerId: null };
                                                                    id = undefined;
                                                                    if (id != null) {
                                                                      id = id.id;
                                                                    }
                                                                    obj5.referrerId = id;
                                                                    let activityLaunchURL = obj4.getActivityLaunchURL(obj5);
                                                                  } else {
                                                                    const obj6 = { id: application.id };
                                                                    const merged = Object.assign(AppLauncherUtils.getInstallAppProps(application));
                                                                    activityLaunchURL = obj4.getApplicationInstallURL(obj6);
                                                                    const tmp4Result = AppLauncherUtils;
                                                                  }
                                                                  ClipboardUtils.copy(activityLaunchURL);
                                                                  ToastUtils.presentLinkCopied();
                                                                  const tmp4Result2 = ToastUtils;
                                                                },
                                  accessibilityLabel: null,
                                  maxFontSizeMultiplier: 1.5
                                };
                                const intl = tmp(1126).intl;
                                obj11.accessibilityLabel = intl.string(tmp(1126).t.XWDihq);
                                const items2 = [closure_7(tmp(8106).IconButton, obj11), ];
                                const obj12 = { application, onAddAppMenuClick };
                                items2[1] = closure_7(tmp10(11838), obj12);
                                obj10.children = items2;
                                tmp68 = closure_8(id, obj10);
                              }
                              tmpResult10 = tmp(9185);
                            }
                            cResult[54] = application;
                            cResult[55] = stateFromStores;
                            cResult[56] = tmp31;
                            cResult[57] = onAddAppMenuClick;
                            cResult[58] = tmp8.actionsWrapper;
                            cResult[59] = tmp68;
                            tmp67 = tmp68;
                          }
                        }
                      }
                      const obj13 = { style: tmp48, pointerEvents: "box-none", children: null };
                      const items3 = [tmp49, tmp52, tmp58, tmp61];
                      obj13.children = items3;
                      const tmp66 = closure_8(tmp10(4810).View, obj13);
                      cResult[49] = tmp48;
                      cResult[50] = tmp49;
                      cResult[51] = tmp52;
                      cResult[52] = tmp58;
                      cResult[53] = tmp66;
                      tmp64 = tmp66;
                    }
                    const obj14 = { style: tmp26.nameStyle, pointerEvents: "none", children: tmp55 };
                    const tmp60 = closure_7(tmp10(4810).View, obj14);
                    cResult[45] = tmp26.nameStyle;
                    cResult[46] = tmp55;
                    cResult[47] = tmp60;
                    tmp58 = tmp60;
                  }
                  const obj15 = { style: null, pointerEvents: "none" };
                  const items4 = [tmp8.collapsedHeaderBannerOverlay, tmp29.style];
                  obj15.style = items4;
                  const tmp51 = closure_7(tmp10(4810).View, obj15);
                  cResult[38] = tmp29.style;
                  cResult[39] = tmp8.collapsedHeaderBannerOverlay;
                  cResult[40] = tmp51;
                  tmp49 = tmp51;
                }
              }
              const items5 = [tmp8.collapsedHeaderBanner, tmp47, tmp26.headerStyle];
              cResult[34] = tmp26.headerStyle;
              cResult[35] = tmp8.collapsedHeaderBanner;
              cResult[36] = tmp47;
              cResult[37] = items5;
              tmp48 = items5;
            }
            const obj16 = { style: tmp38, pointerEvents: "none", children: tmp39 };
            const tmp46 = closure_7(id, obj16);
            cResult[29] = tmp38;
            cResult[30] = tmp39;
            cResult[31] = tmp46;
            tmp43 = tmp46;
          }
          const obj17 = { style: tmp8.appIconMask, children: tmp15 };
          const tmp42 = closure_7(id, obj17);
          cResult[26] = tmp15;
          cResult[27] = tmp8.appIconMask;
          cResult[28] = tmp42;
          tmp39 = tmp42;
        }
        const items6 = [tmp8.expandedHeaderBanner, tmp37];
        cResult[23] = tmp8.expandedHeaderBanner;
        cResult[24] = tmp37;
        cResult[25] = items6;
        tmp38 = items6;
      }
      const items7 = [tmp8.headerContainer, tmp23.style];
      cResult[18] = tmp23.style;
      cResult[19] = tmp8.headerContainer;
      cResult[20] = items7;
      tmp36 = items7;
    }
  }
  if (null != loadingIcon) {
    const obj18 = { iconSource: loadingIcon, iconBorderRadius: xl, iconSize: 72 };
    let tmp18 = closure_7(tmp10(11749), obj18);
  } else {
    const obj19 = { style: tmp8.loadingIcon };
    tmp18 = closure_7(id, obj19);
  }
  cResult[4] = loadingIcon;
  loadingIcon = tmp8.loadingIcon;
  cResult[5] = loadingIcon;
  cResult[6] = tmp18;
  const tmp11 = stateFromStores(8244);
}) : (function Header(application) {
  application = application.application;
  const scrollOffsetY = application.scrollOffsetY;
  dependencyMap = undefined;
  let id;
  ({ onPressBack, onAddAppMenuClick } = application);
  const items = [AppLauncherStore];
  importDefault = application(504).useStateFromStores(items, () => AppLauncherStore.entrypoint());
  const tmp3 = closure_11();
  let appLauncherIconSource = null;
  if (null != application) {
    appLauncherIconSource = tmp(11744).getAppLauncherIconSource(application);
    const tmpResult = tmp(11744);
  }
  let obj = application(504);
  let str = application(4778).useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let tmp7 = appLauncherIconSource;
  const tmpResult5 = application(4778);
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
  const tmp6Result = useAvatarColorDefault(tmp7, str);
  if (null != appLauncherIconSource) {
    let obj2 = { iconSource: appLauncherIconSource, iconBorderRadius: xl, iconSize: 72 };
    let tmp12 = closure_7(tmp5(11749), obj2);
    let tmp13 = closure_7;
  } else {
    let obj3 = { style: tmp3.loadingIcon };
    tmp12 = closure_7(id, obj3);
    tmp13 = closure_7;
  }
  const tmp17 = closure_19({ scrollOffsetY });
  let str2 = "";
  const tmp16 = closure_14({ scrollOffsetY });
  if (null != application) {
    str2 = tmp(9185).getSectionName(application);
    const tmpResult6 = tmp(9185);
  }
  let result = null != application;
  if (result) {
    result = "flags" in application;
  }
  if (result) {
    result = tmp(2028).supportsEmbeddedSurface(application, tmp(8586).EmbeddedSurfaceType.MAIN);
    const tmpResult7 = tmp(2028);
  }
  dependencyMap = result;
  id = UserStore.getCurrentUser();
  let obj4 = { style: null, pointerEvents: "box-none", children: null };
  const items1 = [tmp3.headerContainer, tmp16.style];
  obj4.style = items1;
  let obj5 = { style: null, pointerEvents: "none", children: tmp13(id, { style: tmp3.appIconMask, children: tmp12 }) };
  const items2 = [tmp3.expandedHeaderBanner, { backgroundColor: tmp6Result }];
  obj5.style = items2;
  const items3 = [tmp13(id, obj5), , ];
  const obj7 = { style: null, pointerEvents: "box-none", children: null };
  const items4 = [tmp3.collapsedHeaderBanner, { backgroundColor: tmp6Result }, tmp17.headerStyle];
  obj7.style = items4;
  const obj8 = { style: null, pointerEvents: "none" };
  const items5 = [tmp3.collapsedHeaderBannerOverlay, closure_22({ scrollOffsetY }).style];
  obj8.style = items5;
  const items6 = [tmp13(ReanimatedRexportDefault.View, obj8), tmp13(AppLauncherBackButtonDefault, { onPress: onPressBack }), , ];
  let obj6 = { style: tmp3.appIconMask, children: tmp12 };
  const tmp18 = closure_22({ scrollOffsetY });
  const tmp21 = id;
  items6[2] = tmp13(ReanimatedRexportDefault.View, { style: tmp17.nameStyle, pointerEvents: "none", children: tmp13(application(5086).Heading, { variant: "heading-lg/bold", color: "text-overlay-light", children: str2 }) });
  items6[3] = tmp13(application(1200).Spacer, { size: 32, pointerEvents: "none" });
  obj7.children = items6;
  items3[1] = closure_8(ReanimatedRexportDefault.View, obj7);
  let tmp20Result = null;
  if (null != application) {
    tmp20Result = null;
    if (tmpResult8.isRealApplication(application)) {
      const obj10 = { style: tmp3.actionsWrapper, children: null };
      const obj11 = {
        size: "sm",
        variant: "secondary-overlay",
        icon: tmp5(5040),
        onPress() {
              AnalyticsUtilsDefault.track(AnalyticEvents.APP_LAUNCHER_APPLICATION_LINK_COPIED, { application_id: application.id, source });
              const obj2 = { application_id: application.id, source };
              const obj4 = getApplicationInstallURL;
              if (c2) {
                const obj5 = { applicationId: application.id, referrerId: null };
                id = undefined;
                if (id != null) {
                  id = id.id;
                }
                obj5.referrerId = id;
                let activityLaunchURL = obj4.getActivityLaunchURL(obj5);
              } else {
                const obj6 = { id: application.id };
                const merged = Object.assign(AppLauncherUtils.getInstallAppProps(application));
                activityLaunchURL = obj4.getApplicationInstallURL(obj6);
                const tmp4Result = AppLauncherUtils;
              }
              ClipboardUtils.copy(activityLaunchURL);
              ToastUtils.presentLinkCopied();
              const tmp4Result2 = ToastUtils;
            },
        accessibilityLabel: null,
        maxFontSizeMultiplier: 1.5
      };
      const intl = tmp(1126).intl;
      obj11.accessibilityLabel = intl.string(tmp(1126).t.XWDihq);
      const items7 = [tmp13(tmp(8106).IconButton, obj11), ];
      const obj12 = { application, onAddAppMenuClick };
      items7[1] = tmp13(tmp5(11838), obj12);
      obj10.children = items7;
      tmp20Result = closure_8(tmp21, obj10);
    }
    tmpResult8 = tmp(9185);
  }
  items3[2] = tmp20Result;
  obj4.children = items3;
  return closure_8(ReanimatedRexportDefault.View, obj4);
});
export const SHEET_HANDLE_CONTAINER_HEIGHT = 16;
export const EXPANDED_HEADER_HEIGHT = 161;