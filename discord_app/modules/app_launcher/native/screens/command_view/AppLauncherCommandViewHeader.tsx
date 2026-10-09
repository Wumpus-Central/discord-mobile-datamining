// === Module 11796: AppLauncherCommandViewHeader ===

// Module 11796 (AppLauncherCommandViewHeader)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import FastImageDefault from "FastImage" /* 6163 */;
import useAvatarColorDefault from "useAvatarColor" /* 8252 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 11681 */;
import AppLauncherBackButtonDefault from "AppLauncherBackButton" /* 11773 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const AppLauncherNativeConstants = fn(1502);
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const sum = fn(11773).BACK_BUTTON_SIZE + 2 * DEFAULT_CONTENT_PADDING + 36 + 4;
const TOTAL_SCROLL_RANGE = sum - 56;
const createStyles = fn(5091);
let obj2 = { headerContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", position: "absolute", top: -16, left: 0, right: 0, padding: DEFAULT_CONTENT_PADDING, zIndex: 1 }, loadingHeaderContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, appIconMask: null, appIcon: null, loadingIcon: null, appSmallName: null, icon: null, headerBannerOverlay: null };
const rect = { position: "absolute", padding: 4, bottom: -36, left: "50%", backgroundColor: AppLauncherNativeConstants.SCREEN_BACKGROUND_COLOR, borderRadius: nativeDefault.radii.xl + 4 };
obj2.appIconMask = rect;
let size = { width: 72, height: 72, borderRadius: nativeDefault.radii.xl };
obj2.appIcon = size;
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.loadingIcon = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.appSmallName = { textAlign: "center", pointerEvents: "none", flexGrow: 1, marginHorizontal: 8 };
let obj5 = { transform: null };
let items = [{ rotate: "180deg" }];
obj5.transform = items;
obj2.icon = obj5;
obj2.headerBannerOverlay = { backgroundColor: "black", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
const styles = createStyles.createStyles(obj2);
const __initData = { code: "function AppLauncherCommandViewHeaderTsx1(){const{interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,1],\"clamp\"),transform:[{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[12,0],\"clamp\")}]};}" };
const __initData2 = { code: "function AppLauncherCommandViewHeaderTsx2(){const{APP_ICON_SIZE,APP_ICON_BORDER_WIDTH,DEFAULT_CONTENT_PADDING,interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{transform:[{translateX:-APP_ICON_SIZE/2-APP_ICON_BORDER_WIDTH+DEFAULT_CONTENT_PADDING},{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,-APP_ICON_SIZE/2],\"clamp\")},{scale:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],\"clamp\")}],opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],\"clamp\")};}" };
const __initData3 = { code: "function AppLauncherCommandViewHeaderTsx3(){const{interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,0.5],\"clamp\")};}" };
const __initData4 = { code: "function AppLauncherCommandViewHeaderTsx4(){const{interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,1],'clamp'),transform:[{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[12,0],'clamp')}]};}" };
const __initData5 = { code: "function AppLauncherCommandViewHeaderTsx5(){const{APP_ICON_SIZE,APP_ICON_BORDER_WIDTH,DEFAULT_CONTENT_PADDING,interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{transform:[{translateX:-APP_ICON_SIZE/2-APP_ICON_BORDER_WIDTH+DEFAULT_CONTENT_PADDING},{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,-APP_ICON_SIZE/2],'clamp')},{scale:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],'clamp')}],opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],'clamp')};}" };
const __initData6 = { code: "function AppLauncherCommandViewHeaderTsx6(){const{interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,0.5],'clamp')};}" };
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
const sum1 = sum + -16;
size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/AppLauncherCommandViewHeader.tsx");

export const COLLAPSED_HEADER_HEIGHT = 56;
export const EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT = sum1;
export const useStyles = styles;
export const AppLauncherCommandViewHeader = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherCommandViewHeader(section) {
  const cResult = scrollOffsetY(576).c(37);
  ({ command, onPressBack, scrollOffsetY } = section);
  section = section.section;
  const tmp4 = styles();
  let application;
  if (section != null) {
    application = section.application;
  }
  if (cResult[0] !== application) {
    const appLauncherIconSource = scrollOffsetY(11681).getAppLauncherIconSource(application);
    cResult[0] = application;
    cResult[1] = appLauncherIconSource;
    loadingIcon = appLauncherIconSource;
    const tmpResult = scrollOffsetY(11681);
  } else {
    loadingIcon = cResult[1];
  }
  let obj = scrollOffsetY(576);
  class I {
    constructor() {
      obj = { opacity: null, transform: null };
      obj2 = closure_0(closure_2[10]);
      items = [0];
      items[1] = closure_8;
      obj.opacity = obj2.interpolate(scrollOffsetY.get(), items, [0, 1], "clamp");
      obj1 = { translateY: null };
      obj4 = closure_0(closure_2[10]);
      items1 = [0];
      items1[1] = closure_8;
      obj1.translateY = obj4.interpolate(scrollOffsetY.get(), items1, [12, 0], "clamp");
      items2 = [];
      items2[0] = obj1;
      obj.transform = items2;
      return obj;
    }
  }
  const tmpResult5 = scrollOffsetY(4811);
  I.__closure = { interpolate: scrollOffsetY(4811).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  I.__workletHash = 12508066849017;
  I.__initData = __initData;
  const animatedStyle = tmpResult5.useAnimatedStyle(I);
  let obj2 = { interpolate: scrollOffsetY(4811).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  class S {
    constructor() {
      obj = { transform: null, opacity: null };
      obj1 = { translateX: -40 + DEFAULT_CONTENT_PADDING };
      items = [, , ];
      items[0] = obj1;
      obj8 = { translateY: null };
      obj4 = closure_0(closure_2[10]);
      items1 = [0];
      items1[1] = closure_8;
      obj8.translateY = obj4.interpolate(scrollOffsetY.get(), items1, [0, -36], "clamp");
      items[1] = obj8;
      obj9 = { scale: null };
      obj6 = closure_0(closure_2[10]);
      items2 = [0];
      items2[1] = closure_8;
      obj9.scale = obj6.interpolate(scrollOffsetY.get(), items2, [1, 0], "clamp");
      items[2] = obj9;
      obj.transform = items;
      obj7 = closure_0(closure_2[10]);
      items3 = [0];
      items3[1] = closure_8;
      obj.opacity = obj7.interpolate(scrollOffsetY.get(), items3, [1, 0], "clamp");
      return obj;
    }
  }
  const tmpResult6 = scrollOffsetY(4811);
  S.__closure = { APP_ICON_SIZE: 72, APP_ICON_BORDER_WIDTH: 4, DEFAULT_CONTENT_PADDING, interpolate: scrollOffsetY(4811).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  S.__workletHash = 12727209734626;
  S.__initData = __initData2;
  const animatedStyle1 = tmpResult6.useAnimatedStyle(S);
  let obj3 = { APP_ICON_SIZE: 72, APP_ICON_BORDER_WIDTH: 4, DEFAULT_CONTENT_PADDING, interpolate: scrollOffsetY(4811).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  class D {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[10]);
      items = [0];
      items[1] = closure_8;
      obj.opacity = obj2.interpolate(scrollOffsetY.get(), items, [0, 0.5], "clamp");
      return obj;
    }
  }
  const tmpResult7 = scrollOffsetY(4811);
  D.__closure = { interpolate: scrollOffsetY(4811).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  D.__workletHash = 5435153794228;
  D.__initData = __initData3;
  const animatedStyle2 = tmpResult7.useAnimatedStyle(D);
  let obj4 = { interpolate: scrollOffsetY(4811).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  let str = scrollOffsetY(4779).useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let tmp12 = loadingIcon;
  const tmpResult8 = scrollOffsetY(4779);
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
  let loadingHeaderContainer = useAvatarColorDefault(tmp12, str);
  if (cResult[2] === loadingIcon) {
    if (cResult[3] === tmp4.appIcon) {
      if (cResult[4] === tmp4.loadingIcon) {
        if (cResult[6] === loadingHeaderContainer) {
          if (cResult[7] === command) {
            if (cResult[8] === tmp4.loadingHeaderContainer) {
              if (cResult[10] === tmp4.headerContainer) {
                if (cResult[11] === tmp19) {
                  let tmp21 = cResult[12];
                }
                if (cResult[13] === animatedStyle2) {
                  if (cResult[14] === tmp4.headerBannerOverlay) {
                    let tmp22 = cResult[15];
                  }
                  if (cResult[16] !== onPressBack) {
                    let obj5 = { onPress: onPressBack };
                    const tmp27 = closure_6(AppLauncherBackButtonDefault, obj5);
                    cResult[16] = onPressBack;
                    cResult[17] = tmp27;
                    let tmp25 = tmp27;
                  } else {
                    tmp25 = cResult[17];
                  }
                  if (cResult[18] === animatedStyle) {
                    if (cResult[19] === tmp4.appSmallName) {
                      let tmp28 = cResult[20];
                    }
                    let displayName;
                    if (command != null) {
                      displayName = command.displayName;
                    }
                    if (cResult[21] === tmp28) {
                      if (cResult[22] === displayName) {
                        let tmp30 = cResult[23];
                      }
                      const _Symbol = Symbol;
                      if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                        const tmp36 = closure_6(scrollOffsetY(1200).Spacer, { size: 32 });
                        cResult[24] = tmp36;
                        let tmp34 = tmp36;
                      } else {
                        tmp34 = cResult[24];
                      }
                      if (cResult[25] === animatedStyle1) {
                        if (cResult[26] === tmp4.appIconMask) {
                          let tmp37 = cResult[27];
                        }
                        if (cResult[28] === tmp14) {
                          if (cResult[29] === tmp37) {
                            let tmp38 = cResult[30];
                          }
                          if (cResult[31] === tmp30) {
                            if (cResult[32] === tmp38) {
                              if (cResult[33] === tmp21) {
                                if (cResult[34] === tmp22) {
                                  if (cResult[35] === tmp25) {
                                    let tmp41 = cResult[36];
                                  }
                                  return tmp41;
                                }
                              }
                            }
                          }
                          let obj6 = { style: tmp21, children: null };
                          let items = [tmp22, tmp25, tmp30, tmp34, tmp38];
                          obj6.children = items;
                          const tmp44 = closure_7(View, obj6);
                          cResult[31] = tmp30;
                          cResult[32] = tmp38;
                          class I {
                            constructor() {
                              obj = { opacity: null, transform: null };
                              obj2 = closure_0(closure_2[10]);
                              items = [0];
                              items[1] = closure_8;
                              obj.opacity = obj2.interpolate(scrollOffsetY.get(), items, [0, 1], "clamp");
                              obj1 = { translateY: null };
                              obj4 = closure_0(closure_2[10]);
                              items1 = [0];
                              items1[1] = closure_8;
                              obj1.translateY = obj4.interpolate(scrollOffsetY.get(), items1, [12, 0], "clamp");
                              items2 = [];
                              items2[0] = obj1;
                              obj.transform = items2;
                              return obj;
                            }
                          }
                          cResult[34] = tmp22;
                          cResult[35] = tmp25;
                          cResult[36] = tmp44;
                          tmp41 = tmp44;
                        }
                        const obj7 = { style: tmp37, children: tmp14 };
                        const tmp40 = closure_6(ReanimatedRexportDefault.View, obj7);
                        cResult[28] = tmp14;
                        cResult[29] = tmp37;
                        cResult[30] = tmp40;
                        tmp38 = tmp40;
                      }
                      let items1 = [tmp4.appIconMask, animatedStyle1];
                      cResult[25] = animatedStyle1;
                      cResult[26] = tmp4.appIconMask;
                      cResult[27] = items1;
                      tmp37 = items1;
                    }
                    const obj8 = { lineClamp: 1, animated: true, style: tmp28, variant: "heading-lg/bold", color: "text-overlay-light", children: displayName };
                    const tmp32 = closure_6(scrollOffsetY(5087).Text, obj8);
                    cResult[21] = tmp28;
                    cResult[22] = displayName;
                    cResult[23] = tmp32;
                    tmp30 = tmp32;
                  }
                  let items2 = [tmp4.appSmallName, animatedStyle];
                  cResult[18] = animatedStyle;
                  cResult[19] = tmp4.appSmallName;
                  cResult[20] = items2;
                  tmp28 = items2;
                }
                const obj9 = { style: null };
                let items3 = [tmp4.headerBannerOverlay, animatedStyle2];
                obj9.style = items3;
                const tmp24 = closure_6(ReanimatedRexportDefault.View, obj9);
                cResult[13] = animatedStyle2;
                cResult[14] = tmp4.headerBannerOverlay;
                cResult[15] = tmp24;
                tmp22 = tmp24;
              }
              const items4 = [tmp4.headerContainer, cResult[9]];
              cResult[10] = tmp4.headerContainer;
              cResult[11] = cResult[9];
              cResult[12] = items4;
              tmp21 = items4;
            }
          }
        }
        if (null == command) {
          let prop = tmp4.loadingHeaderContainer;
        } else {
          prop = { backgroundColor: loadingHeaderContainer };
        }
        cResult[6] = loadingHeaderContainer;
        cResult[7] = command;
        loadingHeaderContainer = tmp4.loadingHeaderContainer;
        cResult[8] = loadingHeaderContainer;
        cResult[9] = prop;
      }
    }
  }
  if (null != loadingIcon) {
    const obj10 = { style: tmp4.appIcon, source: loadingIcon };
    let tmp17 = closure_6(FastImageDefault, obj10);
  } else {
    const obj11 = { style: null };
    const items5 = [, ];
    ({ appIcon: arr[0], loadingIcon: arr[1] } = tmp4);
    obj11.style = items5;
    tmp17 = closure_6(View, obj11);
  }
  cResult[2] = loadingIcon;
  ({ appIcon: tmp3[3], loadingIcon } = tmp4);
  cResult[4] = loadingIcon;
  cResult[5] = tmp17;
}) : (function AppLauncherCommandViewHeader(onPress) {
  ({ command, scrollOffsetY } = onPress);
  const section = onPress.section;
  const tmp = styles();
  let items = [section];
  const memo = noop.useMemo(() => {
    let application;
    if (section != null) {
      application = section.application;
    }
    return AppLauncherNativeUtils.getAppLauncherIconSource(application);
  }, items);
  class A {
    constructor() {
      obj = { opacity: null, transform: null };
      obj2 = closure_0(closure_2[10]);
      items = [0];
      items[1] = closure_8;
      obj.opacity = obj2.interpolate(scrollOffsetY.get(), items, [0, 1], "clamp");
      obj1 = { translateY: null };
      obj4 = closure_0(closure_2[10]);
      items1 = [0];
      items1[1] = closure_8;
      obj1.translateY = obj4.interpolate(scrollOffsetY.get(), items1, [12, 0], "clamp");
      items2 = [];
      items2[0] = obj1;
      obj.transform = items2;
      return obj;
    }
  }
  let obj = scrollOffsetY(4811);
  A.__closure = { interpolate: scrollOffsetY(4811).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  A.__workletHash = 7452027319932;
  A.__initData = __initData4;
  const animatedStyle = obj.useAnimatedStyle(A);
  let obj2 = { interpolate: scrollOffsetY(4811).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  class C {
    constructor() {
      obj = { transform: null, opacity: null };
      obj1 = { translateX: -40 + DEFAULT_CONTENT_PADDING };
      items = [, , ];
      items[0] = obj1;
      obj8 = { translateY: null };
      obj4 = closure_0(closure_2[10]);
      items1 = [0];
      items1[1] = closure_8;
      obj8.translateY = obj4.interpolate(scrollOffsetY.get(), items1, [0, -36], "clamp");
      items[1] = obj8;
      obj9 = { scale: null };
      obj6 = closure_0(closure_2[10]);
      items2 = [0];
      items2[1] = closure_8;
      obj9.scale = obj6.interpolate(scrollOffsetY.get(), items2, [1, 0], "clamp");
      items[2] = obj9;
      obj.transform = items;
      obj7 = closure_0(closure_2[10]);
      items3 = [0];
      items3[1] = closure_8;
      obj.opacity = obj7.interpolate(scrollOffsetY.get(), items3, [1, 0], "clamp");
      return obj;
    }
  }
  let obj3 = scrollOffsetY(4811);
  C.__closure = { APP_ICON_SIZE: 72, APP_ICON_BORDER_WIDTH: 4, DEFAULT_CONTENT_PADDING, interpolate: scrollOffsetY(4811).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  C.__workletHash = 3695464152805;
  C.__initData = __initData5;
  const animatedStyle1 = obj3.useAnimatedStyle(C);
  let obj4 = { APP_ICON_SIZE: 72, APP_ICON_BORDER_WIDTH: 4, DEFAULT_CONTENT_PADDING, interpolate: scrollOffsetY(4811).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  const fn = function f() {
    const obj = { opacity: null };
    const items = [0, closure_8];
    obj.opacity = ReanimatedRexport.interpolate(scrollOffsetY.get(), items, [0, 0.5], "clamp");
    return obj;
  };
  let obj5 = scrollOffsetY(4811);
  fn.__closure = { interpolate: scrollOffsetY(4811).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  fn.__workletHash = 10778290362673;
  fn.__initData = __initData6;
  const animatedStyle2 = obj5.useAnimatedStyle(fn);
  let obj6 = { interpolate: scrollOffsetY(4811).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  let str = scrollOffsetY(4779).useToken(section(587).colors.BACKGROUND_BASE_LOW);
  const obj7 = scrollOffsetY(4779);
  if (typeof memo !== "number") {
    let uri;
    if (memo != null) {
      uri = memo.uri;
    }
  }
  if (str == null) {
    str = "";
  }
  const tmp9 = section(8252);
  if (null != memo) {
    const obj8 = { style: tmp.appIcon, source: memo };
    let tmp15 = closure_6(tmp8(6163), obj8);
    let tmp16 = closure_6;
  } else {
    const obj9 = { style: null };
    let items1 = [, ];
    ({ appIcon: arr2[0], loadingIcon: arr2[1] } = tmp);
    obj9.style = items1;
    tmp15 = closure_6(View, obj9);
    tmp16 = closure_6;
  }
  let items2 = [tmp.headerContainer, ];
  if (null == command) {
    let prop = tmp.loadingHeaderContainer;
  } else {
    prop = { backgroundColor: tmp9Result };
  }
  const obj10 = { style: items2, children: null };
  items2[1] = prop;
  const obj11 = { style: null };
  let items3 = [tmp.headerBannerOverlay, animatedStyle2];
  obj11.style = items3;
  const items4 = [tmp16(section(4811).View, obj11), tmp16(section(11773), { onPress: onPress.onPressBack }), , , ];
  const obj12 = { lineClamp: 1, animated: true, style: null, variant: "heading-lg/bold", color: "text-overlay-light", children: null };
  const items5 = [tmp.appSmallName, animatedStyle];
  obj12.style = items5;
  let displayName;
  if (command != null) {
    displayName = command.displayName;
  }
  obj12.children = displayName;
  items4[2] = tmp16(scrollOffsetY(5087).Text, obj12);
  items4[3] = tmp16(scrollOffsetY(1200).Spacer, { size: 32 });
  const obj13 = { style: null, children: tmp15 };
  const items6 = [tmp.appIconMask, animatedStyle1];
  obj13.style = items6;
  items4[4] = tmp16(section(4811).View, obj13);
  obj10.children = items4;
  return closure_7(View, obj10);
});