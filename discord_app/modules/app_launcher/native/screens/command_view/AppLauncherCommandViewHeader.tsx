// === Module 11792: AppLauncherCommandViewHeader ===

// Module 11792 (AppLauncherCommandViewHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import FastImageDefault from "FastImage" /* 5981 */;
import useAvatarColorDefault from "useAvatarColor" /* 7826 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 11679 */;
import AppLauncherBackButton from "AppLauncherBackButton" /* 11769 */;
import react from "react" /* 19 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1489 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
const AppLauncherBackButtonDefault = AppLauncherBackButton;
let obj1, section;

let items;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let rect;
let size;
const View = react_native.View;
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const SCREEN_BACKGROUND_COLOR = AppLauncherNativeConstants.SCREEN_BACKGROUND_COLOR;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const sum = AppLauncherBackButton.BACK_BUTTON_SIZE + 2 * DEFAULT_CONTENT_PADDING + 36 + 4;
const TOTAL_SCROLL_RANGE = sum - 56;
let createStyles = createStyles_mod;
let obj = { headerContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", position: "absolute", top: -16, left: 0, right: 0, padding: DEFAULT_CONTENT_PADDING, zIndex: 1 }, loadingHeaderContainer: obj2, appIconMask: rect, appIcon: size, loadingIcon: obj3, appSmallName: { textAlign: "center", pointerEvents: "none", flexGrow: 1, marginHorizontal: 8 }, icon: obj4, headerBannerOverlay: { backgroundColor: "black", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
rect = { position: "absolute", padding: 4, bottom: -36, left: "50%", backgroundColor: SCREEN_BACKGROUND_COLOR, borderRadius: nativeDefault.radii.xl + 4 };
size = { width: 72, height: 72, borderRadius: nativeDefault.radii.xl };
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj4 = { transform: items };
items = [{ rotate: "180deg" }];
const styles = createStyles(obj);
const __initData = { code: "function AppLauncherCommandViewHeaderTsx1(){const{interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,1],\"clamp\"),transform:[{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[12,0],\"clamp\")}]};}" };
const __initData2 = { code: "function AppLauncherCommandViewHeaderTsx2(){const{APP_ICON_SIZE,APP_ICON_BORDER_WIDTH,DEFAULT_CONTENT_PADDING,interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{transform:[{translateX:-APP_ICON_SIZE/2-APP_ICON_BORDER_WIDTH+DEFAULT_CONTENT_PADDING},{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,-APP_ICON_SIZE/2],\"clamp\")},{scale:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],\"clamp\")}],opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],\"clamp\")};}" };
const __initData3 = { code: "function AppLauncherCommandViewHeaderTsx3(){const{interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,0.5],\"clamp\")};}" };
const __initData4 = { code: "function AppLauncherCommandViewHeaderTsx4(){const{interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,1],'clamp'),transform:[{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[12,0],'clamp')}]};}" };
const __initData5 = { code: "function AppLauncherCommandViewHeaderTsx5(){const{APP_ICON_SIZE,APP_ICON_BORDER_WIDTH,DEFAULT_CONTENT_PADDING,interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{transform:[{translateX:-APP_ICON_SIZE/2-APP_ICON_BORDER_WIDTH+DEFAULT_CONTENT_PADDING},{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,-APP_ICON_SIZE/2],'clamp')},{scale:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],'clamp')}],opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],'clamp')};}" };
const __initData6 = { code: "function AppLauncherCommandViewHeaderTsx6(){const{interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,0.5],'clamp')};}" };
const sum1 = sum + -16;
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((section) => {
  let command;
  let items;
  let items3;
  let items5;
  let onPressBack;
  let scrollOffsetY;
  let tmp19;
  let tmp6;
  let obj = scrollOffsetY(576);
  const cResult = obj.c(37);
  ({ command, onPressBack, scrollOffsetY } = section);
  section = section.section;
  const tmp4 = styles();
  let application;
  if (section != null) {
    application = section.application;
  }
  if (cResult[0] !== application) {
    const tmpResult = scrollOffsetY(11679);
    const appLauncherIconSource = tmpResult.getAppLauncherIconSource(application);
    cResult[0] = application;
    cResult[1] = appLauncherIconSource;
    tmp6 = appLauncherIconSource;
  } else {
    tmp6 = cResult[1];
  }
  const tmpResult5 = scrollOffsetY(4618);
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
  let obj2 = { interpolate: scrollOffsetY(4618).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  I.__closure = obj2;
  I.__workletHash = 12508066849017;
  I.__initData = __initData;
  const animatedStyle = tmpResult5.useAnimatedStyle(I);
  const tmpResult6 = scrollOffsetY(4618);
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
  let obj3 = { APP_ICON_SIZE: 72, APP_ICON_BORDER_WIDTH: 4, DEFAULT_CONTENT_PADDING, interpolate: scrollOffsetY(4618).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  S.__closure = obj3;
  S.__workletHash = 12727209734626;
  S.__initData = __initData2;
  const animatedStyle1 = tmpResult6.useAnimatedStyle(S);
  const tmpResult7 = scrollOffsetY(4618);
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
  let obj4 = { interpolate: scrollOffsetY(4618).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  D.__closure = obj4;
  D.__workletHash = 5435153794228;
  D.__initData = __initData3;
  const animatedStyle2 = tmpResult7.useAnimatedStyle(D);
  const tmpResult8 = scrollOffsetY(4586);
  let str = tmpResult8.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let tmp13 = tmp6;
  const tmp12 = useAvatarColorDefault;
  if (typeof tmp6 !== "number") {
    let uri;
    if (tmp6 != null) {
      uri = tmp6.uri;
    }
    tmp13 = uri;
  }
  if (str == null) {
    str = "";
  }
  const tmp12Result = tmp12(tmp13, str);
  if (cResult[2] === tmp6) {
    if (cResult[3] === tmp4.appIcon) {
      let tmp16;
      let prop;
      if (cResult[4] === tmp4.loadingIcon) {
        tmp16 = cResult[5];
      }
      if (cResult[6] === tmp12Result) {
        if (cResult[7] === command) {
          let tmp21;
          if (cResult[8] === tmp4.loadingHeaderContainer) {
            tmp21 = cResult[9];
          }
          if (cResult[10] === tmp4.headerContainer) {
            let tmp22;
            if (cResult[11] === tmp21) {
              tmp22 = cResult[12];
            }
            if (cResult[13] === animatedStyle2) {
              let tmp23;
              let tmp26;
              if (cResult[14] === tmp4.headerBannerOverlay) {
                tmp23 = cResult[15];
              }
              if (cResult[16] !== onPressBack) {
                let obj5 = { onPress: onPressBack };
                const tmp28 = closure_6(AppLauncherBackButtonDefault, obj5);
                cResult[16] = onPressBack;
                cResult[17] = tmp28;
                tmp26 = tmp28;
              } else {
                tmp26 = cResult[17];
              }
              if (cResult[18] === animatedStyle) {
                let tmp29;
                if (cResult[19] === tmp4.appSmallName) {
                  tmp29 = cResult[20];
                }
                let displayName;
                if (command != null) {
                  displayName = command.displayName;
                }
                if (cResult[21] === tmp29) {
                  let tmp31;
                  let tmp35;
                  if (cResult[22] === displayName) {
                    tmp31 = cResult[23];
                  }
                  const _Symbol = Symbol;
                  if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp37 = closure_6(scrollOffsetY(1188).Spacer, { size: 32 });
                    cResult[24] = tmp37;
                    tmp35 = tmp37;
                  } else {
                    tmp35 = cResult[24];
                  }
                  if (cResult[25] === animatedStyle1) {
                    let tmp38;
                    if (cResult[26] === tmp4.appIconMask) {
                      tmp38 = cResult[27];
                    }
                    if (cResult[28] === tmp16) {
                      let tmp39;
                      if (cResult[29] === tmp38) {
                        tmp39 = cResult[30];
                      }
                      if (cResult[31] === tmp31) {
                        if (cResult[32] === tmp39) {
                          if (cResult[33] === tmp22) {
                            if (cResult[34] === tmp23) {
                              let tmp42;
                              if (cResult[35] === tmp26) {
                                tmp42 = cResult[36];
                              }
                              return tmp42;
                            }
                          }
                        }
                      }
                      let obj6 = { style: tmp22, children: items };
                      items = [tmp23, tmp26, tmp31, tmp35, tmp39];
                      const tmp45 = closure_7(View, obj6);
                      cResult[31] = tmp31;
                      cResult[32] = tmp39;
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
                      cResult[34] = tmp23;
                      cResult[35] = tmp26;
                      cResult[36] = tmp45;
                      tmp42 = tmp45;
                    }
                    let obj7 = { style: tmp38, children: tmp16 };
                    const tmp41 = closure_6(ReanimatedRexportDefault.View, obj7);
                    cResult[28] = tmp16;
                    cResult[29] = tmp38;
                    cResult[30] = tmp41;
                    tmp39 = tmp41;
                  }
                  let items1 = [tmp4.appIconMask, animatedStyle1];
                  cResult[25] = animatedStyle1;
                  cResult[26] = tmp4.appIconMask;
                  cResult[27] = items1;
                  tmp38 = items1;
                }
                const obj8 = { lineClamp: 1, animated: true, style: tmp29, variant: "heading-lg/bold", color: "text-overlay-light", children: displayName };
                const tmp33 = closure_6(scrollOffsetY(4892).Text, obj8);
                cResult[21] = tmp29;
                cResult[22] = displayName;
                cResult[23] = tmp33;
                tmp31 = tmp33;
              }
              let items2 = [tmp4.appSmallName, animatedStyle];
              cResult[18] = animatedStyle;
              cResult[19] = tmp4.appSmallName;
              cResult[20] = items2;
              tmp29 = items2;
            }
            const obj9 = { style: items3 };
            items3 = [tmp4.headerBannerOverlay, animatedStyle2];
            const tmp25 = closure_6(ReanimatedRexportDefault.View, obj9);
            cResult[13] = animatedStyle2;
            cResult[14] = tmp4.headerBannerOverlay;
            cResult[15] = tmp25;
            tmp23 = tmp25;
          }
          const items4 = [tmp4.headerContainer, tmp21];
          cResult[10] = tmp4.headerContainer;
          cResult[11] = tmp21;
          cResult[12] = items4;
          tmp22 = items4;
        }
      }
      if (null == command) {
        prop = tmp4.loadingHeaderContainer;
      } else {
        prop = { backgroundColor: tmp12Result };
      }
      cResult[6] = tmp12Result;
      cResult[7] = command;
      cResult[8] = tmp4.loadingHeaderContainer;
      cResult[9] = prop;
      tmp21 = prop;
    }
  }
  if (null != tmp6) {
    const obj10 = { style: tmp4.appIcon, source: tmp6 };
    tmp19 = closure_6(FastImageDefault, obj10);
  } else {
    const obj11 = { style: items5 };
    items5 = [, ];
    ({ appIcon: arr[0], loadingIcon: arr[1] } = tmp4);
    tmp19 = closure_6(View, obj11);
  }
  cResult[2] = tmp6;
  cResult[3] = tmp4.appIcon;
  cResult[4] = tmp4.loadingIcon;
  cResult[5] = tmp19;
  tmp16 = tmp19;
}) : ((section) => {
  let command;
  let displayName;
  let items1;
  let items3;
  let items4;
  let items5;
  let items6;
  let prop;
  let scrollOffsetY;
  let tmp15;
  let tmp16;
  ({ command, scrollOffsetY } = section);
  section = section.section;
  const onPressBack = section.onPressBack;
  const tmp = styles();
  let items = [section];
  const memo = react.useMemo(() => {
    let application;
    const getAppLauncherIconSource = AppLauncherNativeUtils.getAppLauncherIconSource;
    AppLauncherNativeUtils;
    if (section != null) {
      application = section.application;
    }
    return getAppLauncherIconSource(application);
  }, items);
  let obj = scrollOffsetY(4618);
  class A {
    constructor() {
      let items;
      let items1;
      let items2;
      let obj2;
      let obj4;
      const obj = { opacity: obj2.interpolate(scrollOffsetY.get(), items, [0, 1], "clamp"), transform: items2 };
      items = [0, TOTAL_SCROLL_RANGE];
      obj2 = ReanimatedRexport;
      const obj3 = { translateY: obj4.interpolate(scrollOffsetY.get(), items1, [12, 0], "clamp") };
      items1 = [0, TOTAL_SCROLL_RANGE];
      items2 = [obj3];
      obj4 = ReanimatedRexport;
      return obj;
    }
  }
  let obj2 = { interpolate: scrollOffsetY(4618).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  A.__closure = obj2;
  A.__workletHash = 7452027319932;
  A.__initData = __initData4;
  const animatedStyle = obj.useAnimatedStyle(A);
  let obj3 = scrollOffsetY(4618);
  class C {
    constructor() {
      let items;
      let items1;
      let items2;
      let items3;
      let obj4;
      let obj6;
      let obj7;
      const obj = { transform: items, opacity: obj7.interpolate(scrollOffsetY.get(), items3, [1, 0], "clamp") };
      items = [, , ];
      const obj2 = { translateX: -40 + DEFAULT_CONTENT_PADDING };
      items[0] = obj2;
      const obj3 = { translateY: obj4.interpolate(scrollOffsetY.get(), items1, [0, -36], "clamp") };
      items1 = [0, TOTAL_SCROLL_RANGE];
      items[1] = obj3;
      obj4 = ReanimatedRexport;
      const obj5 = { scale: obj6.interpolate(scrollOffsetY.get(), items2, [1, 0], "clamp") };
      items2 = [0, TOTAL_SCROLL_RANGE];
      items[2] = obj5;
      items3 = [0, TOTAL_SCROLL_RANGE];
      obj6 = ReanimatedRexport;
      obj7 = ReanimatedRexport;
      return obj;
    }
  }
  let obj4 = { APP_ICON_SIZE: 72, APP_ICON_BORDER_WIDTH: 4, DEFAULT_CONTENT_PADDING, interpolate: scrollOffsetY(4618).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  C.__closure = obj4;
  C.__workletHash = 3695464152805;
  C.__initData = __initData5;
  const animatedStyle1 = obj3.useAnimatedStyle(C);
  let obj5 = scrollOffsetY(4618);
  const fn = function f() {
    let items;
    let obj2;
    const obj = { opacity: obj2.interpolate(scrollOffsetY.get(), items, [0, 0.5], "clamp") };
    items = [0, TOTAL_SCROLL_RANGE];
    obj2 = ReanimatedRexport;
    return obj;
  };
  let obj6 = { interpolate: scrollOffsetY(4618).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  fn.__closure = obj6;
  fn.__workletHash = 10778290362673;
  fn.__initData = __initData6;
  const animatedStyle2 = obj5.useAnimatedStyle(fn);
  let obj7 = scrollOffsetY(4586);
  let str = obj7.useToken(section(587).colors.BACKGROUND_BASE_LOW);
  let tmp10 = memo;
  const tmp9 = section(7826);
  if (typeof memo !== "number") {
    let uri;
    if (memo != null) {
      uri = memo.uri;
    }
    tmp10 = uri;
  }
  if (str == null) {
    str = "";
  }
  const tmp9Result = tmp9(tmp10, str);
  if (null != memo) {
    const obj8 = { style: tmp.appIcon, source: memo };
    tmp15 = closure_6(tmp8(5981), obj8);
    tmp16 = closure_6;
  } else {
    const obj9 = { style: items1 };
    items1 = [, ];
    ({ appIcon: arr2[0], loadingIcon: arr2[1] } = tmp);
    tmp15 = closure_6(View, obj9);
    tmp16 = closure_6;
  }
  let items2 = [tmp.headerContainer, ];
  if (null == command) {
    prop = tmp.loadingHeaderContainer;
  } else {
    prop = { backgroundColor: tmp9Result };
  }
  const obj10 = { style: items2, children: items4 };
  items2[1] = prop;
  const obj11 = { style: items3 };
  items3 = [tmp.headerBannerOverlay, animatedStyle2];
  items4 = [tmp16(section(4618).View, obj11), tmp16(section(11769), { onPress: onPressBack }), , , ];
  const obj12 = { lineClamp: 1, animated: true, style: items5, variant: "heading-lg/bold", color: "text-overlay-light", children: displayName };
  items5 = [tmp.appSmallName, animatedStyle];
  displayName = undefined;
  const Text = scrollOffsetY(4892).Text;
  if (command != null) {
    displayName = command.displayName;
  }
  items4[2] = tmp16(Text, obj12);
  items4[3] = tmp16(scrollOffsetY(1188).Spacer, { size: 32 });
  const obj13 = { style: items6, children: tmp15 };
  items6 = [tmp.appIconMask, animatedStyle1];
  items4[4] = tmp16(section(4618).View, obj13);
  return closure_7(View, obj10);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/AppLauncherCommandViewHeader.tsx");

export const COLLAPSED_HEADER_HEIGHT = 56;
export const EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT = sum1;
export const useStyles = styles;
export const AppLauncherCommandViewHeader = tmp7;