// === Module 17393: SimpleGuildContainer ===

// Module 17393 (SimpleGuildContainer)
import react2 from "react" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import MaskedBadgeDefault from "MaskedBadge" /* 7502 */;
import GuildsBarActivityIndicator from "GuildsBarActivityIndicator" /* 16274 */;
import CutoutImageDefault from "CutoutImage" /* 17394 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const GuildsBarActivityIndicatorDefault = GuildsBarActivityIndicator;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 48;
const springConfig = { mass: 0.2, damping: 40, stiffness: 300, overshootClamping: true, restSpeedThreshold: 1 };
let closure_11 = createStyles.createStyles({ badgeWrapper: { position: "absolute", right: -4, bottom: 0 } });
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let backgroundColor;
  let badge;
  let tmp4;
  let unread;
  const obj = react2;
  const cResult = obj.c(7);
  ({ badge, unread, backgroundColor } = arg0);
  const tmp3 = closure_11();
  if (badge > 0) {
    if (cResult[0] === backgroundColor) {
      if (cResult[1] === badge) {
        let tmp5;
        if (cResult[2] === unread) {
          tmp5 = cResult[3];
        }
        if (cResult[4] === tmp3.badgeWrapper) {
          let tmp9;
          if (cResult[5] === tmp5) {
            tmp9 = cResult[6];
          }
          tmp4 = tmp9;
        }
        const obj2 = { style: tmp3.badgeWrapper, children: tmp5 };
        const tmp12 = metroRequire(hasOwnProperty, obj2);
        cResult[4] = tmp3.badgeWrapper;
        cResult[5] = tmp5;
        cResult[6] = tmp12;
        tmp9 = tmp12;
      }
    }
    const obj3 = { value: badge, unread, backgroundColor };
    const tmp8 = metroRequire(MaskedBadgeDefault, obj3);
    cResult[0] = backgroundColor;
    cResult[1] = badge;
    cResult[2] = unread;
    cResult[3] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp4 = null;
  }
  return tmp4;
}) : ((backgroundColor) => {
  let badge;
  let obj2;
  let tmp2;
  let unread;
  ({ badge, unread } = backgroundColor);
  backgroundColor = backgroundColor.backgroundColor;
  if (badge > 0) {
    const obj = { style: tmp.badgeWrapper, children: metroRequire(MaskedBadgeDefault, obj2) };
    obj2 = { value: badge, unread, backgroundColor };
    tmp2 = metroRequire(hasOwnProperty, obj);
  } else {
    tmp2 = null;
  }
  return tmp2;
}));
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let activityIndicatorState;
  let backgroundColor;
  let guildId;
  let tmp10;
  const obj = react2;
  const cResult = obj.c(12);
  ({ guildId, activityIndicatorState, backgroundColor } = arg0);
  let source;
  if (activityIndicatorState != null) {
    source = activityIndicatorState.source;
  }
  if (null != source) {
    let tmp11;
    if (cResult[0] !== backgroundColor) {
      const obj2 = { backgroundColor };
      cResult[0] = backgroundColor;
      cResult[1] = obj2;
      tmp11 = obj2;
    } else {
      tmp11 = cResult[1];
    }
    if (cResult[2] === activityIndicatorState.IconComponent) {
      if (cResult[3] === activityIndicatorState.isCurrentUserConnected) {
        if (cResult[4] === activityIndicatorState.source) {
          let tmp12;
          if (cResult[5] === tmp11) {
            tmp12 = cResult[6];
          }
          tmp10 = tmp12;
        }
      }
    }
    const obj3 = { style: tmp11, source: null, IconComponent: null, isCurrentUserConnected: null };
    ({ source: obj5.source, IconComponent: obj5.IconComponent, isCurrentUserConnected: obj5.isCurrentUserConnected } = activityIndicatorState);
    const tmp14 = metroRequire(GuildsBarActivityIndicator.GuildsBarActivityIndicatorBase, obj3);
    cResult[2] = activityIndicatorState.IconComponent;
    cResult[3] = activityIndicatorState.isCurrentUserConnected;
    cResult[4] = activityIndicatorState.source;
    cResult[5] = tmp11;
    cResult[6] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp10 = null;
    if (null != guildId) {
      let tmp5;
      if (cResult[7] !== backgroundColor) {
        const obj4 = { backgroundColor };
        cResult[7] = backgroundColor;
        cResult[8] = obj4;
        tmp5 = obj4;
      } else {
        tmp5 = cResult[8];
      }
      if (cResult[9] === guildId) {
        let tmp6;
        if (cResult[10] === tmp5) {
          tmp6 = cResult[11];
        }
        tmp10 = tmp6;
      }
      const obj9 = { guildId, style: tmp5 };
      const tmp9 = metroRequire(GuildsBarActivityIndicatorDefault, obj9);
      cResult[9] = guildId;
      cResult[10] = tmp5;
      cResult[11] = tmp9;
      tmp6 = tmp9;
    }
  }
  return tmp10;
}) : ((arg0) => {
  let activityIndicatorState;
  let backgroundColor;
  let guildId;
  let obj4;
  let obj7;
  let tmp2;
  ({ guildId, activityIndicatorState, backgroundColor } = arg0);
  let source;
  if (activityIndicatorState != null) {
    source = activityIndicatorState.source;
  }
  if (null != source) {
    const obj2 = { style: obj4, source: null, IconComponent: null, isCurrentUserConnected: null };
    obj4 = { backgroundColor };
    ({ source: obj3.source, IconComponent: obj3.IconComponent, isCurrentUserConnected: obj3.isCurrentUserConnected } = activityIndicatorState);
    tmp2 = metroRequire(GuildsBarActivityIndicator.GuildsBarActivityIndicatorBase, obj2);
  } else {
    tmp2 = null;
    if (null != guildId) {
      const obj = { guildId, style: obj7 };
      obj7 = { backgroundColor };
      tmp2 = metroRequire(GuildsBarActivityIndicatorDefault, obj);
    }
  }
  return tmp2;
}));
const __initData = { code: "function SimpleGuildContainerTsx1(){const{targetRadius}=this.__closure;return targetRadius;}" };
const __initData2 = { code: "function SimpleGuildContainerTsx2(){const{selected}=this.__closure;return selected?1:0;}" };
const __initData3 = { code: "function SimpleGuildContainerTsx3(){const{withSpring,toRadius,springConfig,GUILD_SIZE,iconBackground}=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),width:GUILD_SIZE,height:GUILD_SIZE,overflow:\"hidden\",backgroundColor:iconBackground.color};}" };
const __initData4 = { code: "function SimpleGuildContainerTsx4(){const{withSpring,toRadius,springConfig,interpolate,toStrokeWidth,borderColor,GUILD_SIZE}=this.__closure;return{borderRadius:withSpring(toRadius.get()+2,springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,2]),springConfig),borderColor:borderColor,position:\"absolute\",top:-2,left:-2,width:GUILD_SIZE+4,height:GUILD_SIZE+4};}" };
const __initData5 = { code: "function SimpleGuildContainerTsx5(){const{withSpring,toRadius,springConfig,interpolate,toStrokeWidth,backgroundColor,GUILD_SIZE}=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,3]),springConfig),borderColor:backgroundColor,position:\"absolute\",top:0,left:0,width:GUILD_SIZE,height:GUILD_SIZE};}" };
const __initData6 = { code: "function SimpleGuildContainerTsx6(){const{targetRadius}=this.__closure;return targetRadius;}" };
const __initData7 = { code: "function SimpleGuildContainerTsx7(){const{selected}=this.__closure;return selected?1:0;}" };
const __initData8 = { code: "function SimpleGuildContainerTsx8(){const{withSpring,toRadius,springConfig,GUILD_SIZE,iconBackground}=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),width:GUILD_SIZE,height:GUILD_SIZE,overflow:'hidden',backgroundColor:iconBackground.color};}" };
const __initData9 = { code: "function SimpleGuildContainerTsx9(){const{withSpring,toRadius,springConfig,interpolate,toStrokeWidth,borderColor,GUILD_SIZE}=this.__closure;return{borderRadius:withSpring(toRadius.get()+2,springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,2]),springConfig),borderColor:borderColor,position:'absolute',top:-2,left:-2,width:GUILD_SIZE+4,height:GUILD_SIZE+4};}" };
const __initData10 = { code: "function SimpleGuildContainerTsx10(){const{withSpring,toRadius,springConfig,interpolate,toStrokeWidth,backgroundColor,GUILD_SIZE}=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,3]),springConfig),borderColor:backgroundColor,position:'absolute',top:0,left:0,width:GUILD_SIZE,height:GUILD_SIZE};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let activityIndicatorState;
  let backgroundColor;
  let badge;
  let borderRadius;
  let children;
  let guildIconRef;
  let guildId;
  let iconBackground;
  let items;
  let obj8;
  let onAccessibilityAction;
  let onLayout;
  let onLongPress;
  let onPress;
  let selected;
  let style;
  let unread;
  const obj = selected(iconBackground[5]);
  const cResult = obj.c(31);
  ({ guildIconRef, guildId, style, children, selected } = arg0);
  ({ borderRadius, badge, unread, backgroundColor } = arg0);
  ({ activityIndicatorState, accessibilityLabel, onAccessibilityAction, onLayout, onPress, onLongPress } = arg0);
  iconBackground = backgroundColor(iconBackground[9])().iconBackground;
  if (selected) {
    borderRadius = backgroundColor(tmp2[8]).radii.lg;
  } else if (borderRadius == null) {
    borderRadius = 24;
  }
  const fn = function t() {
    return borderRadius;
  };
  fn.__closure = { targetRadius: borderRadius };
  fn.__workletHash = 5259600477627;
  fn.__initData = __initData;
  const tmpResult = selected(iconBackground[12]);
  const derivedValue = tmpResult.useDerivedValue(fn);
  const fn2 = function l() {
    let num = 0;
    if (selected) {
      num = 1;
    }
    return num;
  };
  fn2.__closure = { selected };
  fn2.__workletHash = 12318204664732;
  fn2.__initData = __initData2;
  const tmpResult5 = selected(iconBackground[12]);
  const derivedValue1 = tmpResult5.useDerivedValue(fn2);
  const fn3 = function _() {
    let obj2;
    size = { borderRadius: obj2.withSpring(derivedValue.get(), springConfig), width: height, height, overflow: "hidden", backgroundColor: iconBackground.color };
    obj2 = spring;
    return size;
  };
  const tmpResult6 = selected(iconBackground[12]);
  let obj2 = { withSpring: selected(tmp2[13]).withSpring, toRadius: derivedValue, springConfig, GUILD_SIZE: v48, iconBackground };
  fn3.__closure = obj2;
  fn3.__workletHash = 2705390387971;
  fn3.__initData = __initData3;
  const animatedStyle = tmpResult6.useAnimatedStyle(fn3);
  const BRAND_500 = backgroundColor(tmp2[8]).unsafe_rawColors.BRAND_500;
  const tmpResult7 = selected(iconBackground[12]);
  class R {
    constructor() {
      let obj2;
      let obj3;
      let withSpring;
      size = { borderRadius: obj2.withSpring(derivedValue.get() + 2, springConfig), borderWidth: withSpring(obj3.interpolate(derivedValue1.get(), [0, 1], [0, 2]), springConfig), borderColor: BRAND_500, position: "absolute", top: -2, left: -2, width: 52, height: 52 };
      obj2 = spring;
      withSpring = spring.withSpring;
      spring;
      obj3 = ReanimatedRexport;
      return size;
    }
  }
  let obj3 = { withSpring: selected(tmp2[13]).withSpring, toRadius: derivedValue, springConfig, interpolate: selected(tmp2[12]).interpolate, toStrokeWidth: derivedValue1, borderColor: BRAND_500, GUILD_SIZE: v48 };
  R.__closure = obj3;
  R.__workletHash = 4411446600230;
  R.__initData = __initData4;
  const animatedStyle1 = tmpResult7.useAnimatedStyle(R);
  const tmpResult8 = selected(iconBackground[12]);
  class D {
    constructor() {
      let obj2;
      let obj3;
      let withSpring;
      size = { borderRadius: obj2.withSpring(derivedValue.get(), springConfig), borderWidth: withSpring(obj3.interpolate(derivedValue1.get(), [0, 1], [0, 3]), springConfig), borderColor: backgroundColor, position: "absolute", top: 0, left: 0, width: height, height };
      obj2 = spring;
      withSpring = spring.withSpring;
      spring;
      obj3 = ReanimatedRexport;
      return size;
    }
  }
  D.__closure = { withSpring: selected(iconBackground[13]).withSpring, toRadius: derivedValue, springConfig, interpolate: selected(iconBackground[12]).interpolate, toStrokeWidth: derivedValue1, backgroundColor, GUILD_SIZE: v48 };
  D.__workletHash = 4716643044607;
  D.__initData = __initData5;
  ({ withSpring: selected(iconBackground[13]).withSpring, toRadius: derivedValue, springConfig, interpolate: selected(iconBackground[12]).interpolate, toStrokeWidth: derivedValue1, backgroundColor, GUILD_SIZE: v48 });
  const animatedStyle2 = tmpResult8.useAnimatedStyle(D);
  if (cResult[0] === animatedStyle) {
    let tmp11;
    let tmp13;
    let tmp16;
    if (cResult[1] === children) {
      tmp11 = cResult[2];
    }
    if (cResult[3] !== animatedStyle2) {
      const obj5 = { style: animatedStyle2 };
      const tmp15 = BRAND_500(backgroundColor(iconBackground[12]).View, obj5);
      let num = 3;
      cResult[3] = animatedStyle2;
      cResult[4] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[4];
    }
    if (cResult[5] !== animatedStyle1) {
      const obj6 = { style: animatedStyle1 };
      const tmp18 = BRAND_500(backgroundColor(iconBackground[12]).View, obj6);
      cResult[5] = animatedStyle1;
      cResult[6] = tmp18;
      tmp16 = tmp18;
    } else {
      tmp16 = cResult[6];
    }
    if (cResult[7] === activityIndicatorState) {
      if (cResult[8] === backgroundColor) {
        let tmp19;
        if (cResult[9] === guildId) {
          tmp19 = cResult[10];
        }
        if (cResult[11] === backgroundColor) {
          if (cResult[12] === badge) {
            let tmp23;
            if (cResult[13] === unread) {
              tmp23 = cResult[14];
            }
            if (cResult[15] === tmp11) {
              if (cResult[16] === tmp13) {
                if (cResult[17] === tmp16) {
                  if (cResult[18] === tmp19) {
                    let tmp27;
                    let tmp35;
                    if (cResult[19] === tmp23) {
                      tmp27 = cResult[20];
                    }
                    if (cResult[21] === accessibilityLabel) {
                      if (cResult[22] === tmp27) {
                        if (cResult[23] === guildIconRef) {
                          if (cResult[24] === onAccessibilityAction) {
                            if (cResult[25] === onLayout) {
                              if (cResult[26] === onLongPress) {
                                if (cResult[27] === onPress) {
                                  if (cResult[28] === selected) {
                                    let tmp31;
                                    if (cResult[29] === style) {
                                      tmp31 = cResult[30];
                                    }
                                    return tmp31;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    if (null != onPress) {
                      const obj7 = { ref: guildIconRef, style, onPress, onLongPress, accessibilityRole: "button", accessible: true, accessibilityLabel, accessibilityState: obj8, onAccessibilityAction, onLayout, children: tmp27 };
                      obj8 = { selected };
                      tmp35 = BRAND_500(derivedValue, obj7);
                    } else {
                      const obj9 = { style, children: tmp27 };
                      tmp35 = BRAND_500(derivedValue1, obj9);
                    }
                    cResult[21] = accessibilityLabel;
                    cResult[22] = tmp27;
                    cResult[23] = guildIconRef;
                    cResult[24] = onAccessibilityAction;
                    cResult[25] = onLayout;
                    cResult[26] = onLongPress;
                    cResult[27] = onPress;
                    cResult[28] = selected;
                    cResult[29] = style;
                    cResult[30] = tmp35;
                    tmp31 = tmp35;
                  }
                }
              }
            }
            const obj10 = { children: items };
            items = [tmp11, tmp13, tmp16, tmp19, tmp23];
            const tmp30 = closure_8(closure_7, obj10);
            cResult[15] = tmp11;
            cResult[16] = tmp13;
            cResult[17] = tmp16;
            cResult[18] = tmp19;
            cResult[19] = tmp23;
            cResult[20] = tmp30;
            tmp27 = tmp30;
          }
        }
        const obj11 = { backgroundColor, badge, unread };
        const tmp26 = BRAND_500(closure_12, obj11);
        cResult[11] = backgroundColor;
        cResult[12] = badge;
        cResult[13] = unread;
        cResult[14] = tmp26;
        tmp23 = tmp26;
      }
    }
    const obj12 = { backgroundColor, guildId, activityIndicatorState };
    const tmp22 = BRAND_500(closure_13, obj12);
    cResult[7] = activityIndicatorState;
    cResult[8] = backgroundColor;
    cResult[9] = guildId;
    cResult[10] = tmp22;
    tmp19 = tmp22;
  }
  const tmp12 = BRAND_500(backgroundColor(iconBackground[12]).View, { style: animatedStyle, children });
  cResult[0] = animatedStyle;
  cResult[1] = children;
  cResult[2] = tmp12;
  tmp11 = tmp12;
}) : ((arg0) => {
  let accessibilityLabel;
  let activityIndicatorState;
  let backgroundColor;
  let badge;
  let borderRadius;
  let children;
  let folder;
  let guildIconRef;
  let guildId;
  let items;
  let obj11;
  let onAccessibilityAction;
  let onLayout;
  let onLongPress;
  let onPress;
  let selected;
  let style;
  let tmp9Result;
  let unread;
  let usingCutout;
  ({ style, selected } = arg0);
  ({ size, borderRadius, backgroundColor } = arg0);
  ({ folder, usingCutout, onPress } = arg0);
  let iconBackground;
  borderRadius = undefined;
  let derivedValue;
  let derivedValue1;
  let BRAND_500;
  const tmp = backgroundColor;
  ({ guildIconRef, guildId, children, badge, unread, activityIndicatorState, accessibilityLabel, onAccessibilityAction, onLayout, onLongPress } = arg0);
  iconBackground = backgroundColor(iconBackground[9])().iconBackground;
  if (selected) {
    borderRadius = tmp(tmp2[8]).radii.lg;
  } else if (borderRadius == null) {
    borderRadius = 24;
  }
  const obj = selected(iconBackground[12]);
  class H {
    constructor() {
      return borderRadius;
    }
  }
  H.__closure = { targetRadius: borderRadius };
  H.__workletHash = 11611600000124;
  H.__initData = __initData6;
  derivedValue = obj.useDerivedValue(H);
  let obj2 = selected(tmp2[12]);
  class P {
    constructor() {
      let num = 0;
      if (selected) {
        num = 1;
      }
      return num;
    }
  }
  P.__closure = { selected };
  P.__workletHash = 11046475911641;
  P.__initData = __initData7;
  derivedValue1 = obj2.useDerivedValue(P);
  let obj3 = selected(tmp2[12]);
  const fn = function z() {
    let obj2;
    size = { borderRadius: obj2.withSpring(derivedValue.get(), springConfig), width: height, height, overflow: "hidden", backgroundColor: iconBackground.color };
    obj2 = spring;
    return size;
  };
  fn.__closure = { withSpring: selected(iconBackground[13]).withSpring, toRadius: derivedValue, springConfig, GUILD_SIZE: v48, iconBackground };
  fn.__workletHash = 13191597685992;
  fn.__initData = __initData8;
  ({ withSpring: selected(iconBackground[13]).withSpring, toRadius: derivedValue, springConfig, GUILD_SIZE: v48, iconBackground });
  const animatedStyle = obj3.useAnimatedStyle(fn);
  BRAND_500 = tmp(tmp2[8]).unsafe_rawColors.BRAND_500;
  const obj5 = selected(iconBackground[12]);
  class N {
    constructor() {
      let obj2;
      let obj3;
      let withSpring;
      size = { borderRadius: obj2.withSpring(derivedValue.get() + 2, springConfig), borderWidth: withSpring(obj3.interpolate(derivedValue1.get(), [0, 1], [0, 2]), springConfig), borderColor: BRAND_500, position: "absolute", top: -2, left: -2, width: 52, height: 52 };
      obj2 = spring;
      withSpring = spring.withSpring;
      spring;
      obj3 = ReanimatedRexport;
      return size;
    }
  }
  N.__closure = { withSpring: selected(iconBackground[13]).withSpring, toRadius: derivedValue, springConfig, interpolate: selected(iconBackground[12]).interpolate, toStrokeWidth: derivedValue1, borderColor: BRAND_500, GUILD_SIZE: v48 };
  N.__workletHash = 2608591861643;
  N.__initData = __initData9;
  ({ withSpring: selected(iconBackground[13]).withSpring, toRadius: derivedValue, springConfig, interpolate: selected(iconBackground[12]).interpolate, toStrokeWidth: derivedValue1, borderColor: BRAND_500, GUILD_SIZE: v48 });
  const animatedStyle1 = obj5.useAnimatedStyle(N);
  const fn2 = function j() {
    let obj2;
    let obj3;
    let withSpring;
    size = { borderRadius: obj2.withSpring(derivedValue.get(), springConfig), borderWidth: withSpring(obj3.interpolate(derivedValue1.get(), [0, 1], [0, 3]), springConfig), borderColor: backgroundColor, position: "absolute", top: 0, left: 0, width: height, height };
    obj2 = spring;
    withSpring = spring.withSpring;
    spring;
    obj3 = ReanimatedRexport;
    return size;
  };
  const obj7 = selected(iconBackground[12]);
  fn2.__closure = { withSpring: selected(iconBackground[13]).withSpring, toRadius: derivedValue, springConfig, interpolate: selected(iconBackground[12]).interpolate, toStrokeWidth: derivedValue1, backgroundColor, GUILD_SIZE: v48 };
  fn2.__workletHash = 7298518847115;
  fn2.__initData = __initData10;
  const obj9 = { children: items };
  ({ withSpring: selected(iconBackground[13]).withSpring, toRadius: derivedValue, springConfig, interpolate: selected(iconBackground[12]).interpolate, toStrokeWidth: derivedValue1, backgroundColor, GUILD_SIZE: v48 });
  const animatedStyle2 = obj7.useAnimatedStyle(fn2);
  items = [BRAND_500(tmp(iconBackground[12]).View, { style: animatedStyle, children }), BRAND_500(tmp(iconBackground[12]).View, { style: animatedStyle2 }), BRAND_500(tmp(iconBackground[12]).View, { style: animatedStyle1 }), BRAND_500(closure_13, { backgroundColor, guildId, activityIndicatorState }), BRAND_500(closure_12, { backgroundColor, badge, unread })];
  const tmp10 = closure_8(closure_7, obj9);
  if (null != onPress) {
    const obj10 = { ref: guildIconRef, style, onPress, onLongPress, accessibilityRole: "button", accessible: true, accessibilityLabel, accessibilityState: obj11, onAccessibilityAction, onLayout, children: tmp10 };
    obj11 = { selected };
    tmp9Result = tmp9(derivedValue, obj10);
  } else {
    const obj12 = { style, children: tmp10 };
    tmp9Result = tmp9(derivedValue1, obj12);
  }
  return tmp9Result;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/launchpad/native/shared/SimpleGuildContainer.tsx");

export const SimpleGuildContainer = function SimpleGuildContainer(selected) {
  let accessibilityLabel;
  let children;
  let guildIconRef;
  let guildId;
  let items2;
  let items3;
  let obj5;
  let onAccessibilityAction;
  let onLayout;
  let str;
  let style;
  selected = selected.selected;
  let num = selected.size;
  ({ guildIconRef, guildId, style, children } = selected);
  if (num === undefined) {
    num = 48;
  }
  let borderRadius = selected.borderRadius;
  if (borderRadius === undefined) {
    let num2 = 24;
    if (selected) {
      let tmp = num;
      num2 = num(borderRadius[8]).radii.lg;
    }
    borderRadius = num2;
  }
  const badge = selected.badge;
  const unread = selected.unread;
  const backgroundColor = selected.backgroundColor;
  let flag = selected.folder;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = selected.usingCutout;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const activityIndicatorState = selected.activityIndicatorState;
  ({ accessibilityLabel, onAccessibilityAction, onLayout } = selected);
  const tmp3 = num(borderRadius[9])();
  const iconStroke = tmp3.iconStroke;
  const iconBackground = tmp3.iconBackground;
  let obj = selected(borderRadius[10]);
  const token = obj.useToken(num(borderRadius[8]).colors.BACKGROUND_BRAND);
  let obj2 = badge;
  let items = [selected, flag2, , , , , , , ];
  let source;
  const useMemo = badge.useMemo;
  if (activityIndicatorState != null) {
    source = activityIndicatorState.source;
  }
  items[2] = source;
  items[3] = badge;
  items[4] = unread;
  items[5] = num;
  items[6] = token;
  items[7] = borderRadius;
  items[8] = backgroundColor;
  const items1 = [borderRadius, flag2, num, iconStroke];
  const memo = useMemo(() => {
    let items;
    let num4;
    let num5;
    let size1;
    let tmp = null;
    if (selected) {
      let tmp13Result;
      if (flag2) {
        let source;
        const obj2 = { style: { position: "absolute", top: -2, left: -2 }, cutoutTopRightSize: num4, cutoutTopRightInsetX: 8, cutoutTopRightInsetY: 8, cutoutBottomRightSize: num5, cutoutBottomRightInsetX: 6, cutoutBottomRightInsetY: 7, imageSize: num + 4, imageBackgroundColor: token, imageBorderRadius: borderRadius + 2, clipInnerAmount: num };
        const tmp16 = CutoutImageDefault;
        if (activityIndicatorState != null) {
          source = activityIndicatorState.source;
        }
        num4 = 0;
        if (null != source) {
          num4 = 13;
        }
        num5 = 13;
        if (badge <= 0) {
          let num6 = 0;
          if (unread) {
            num6 = 11;
          }
          num5 = num6;
        }
        tmp13Result = metroRequire(tmp16, obj2);
      } else {
        const obj3 = { style: size };
        size = { borderRadius: borderRadius + 2, borderWidth: 2, borderColor: token, position: "absolute", top: -2, left: -2, width: 2 + 4, height: 2 + 4 };
        const obj = { children: items };
        items = [metroRequire(hasOwnProperty, obj3), ];
        const obj4 = { style: size1 };
        size1 = { borderRadius, borderWidth: 3, borderColor: backgroundColor, position: "absolute", top: 0, left: 0, width: 2, height: 2 };
        items[1] = metroRequire(hasOwnProperty, obj4);
        tmp13Result = metroImportAll(metroImportDefault, obj);
      }
      tmp = tmp13Result;
    }
    return tmp;
  }, items);
  let obj3 = { style, accessible: true, accessibilityState: { selected }, accessibilityRole: "button", accessibilityLabel, accessibilityActions: items2, onAccessibilityAction, children: items3 };
  items2 = [{ name: "activate" }];
  let obj4 = { ref: guildIconRef, onLayout, style: obj5, children };
  obj5 = { borderRadius, overflow: "hidden", backgroundColor: str };
  str = "transparent";
  const memo1 = obj2.useMemo(() => {
    let tmp = null;
    if (!flag2) {
      const obj = { style: size };
      size = { position: "absolute", borderWidth: 1, borderColor: iconStroke.color, borderRadius, width: num, height: num };
      tmp = metroRequire(hasOwnProperty, obj);
    }
    return tmp;
  }, items1);
  const tmp8 = iconStroke;
  if (!flag2) {
    let color = backgroundColor;
    if (!flag) {
      color = iconBackground.color;
    }
    str = color;
  }
  items3 = [flag2(tmp9, obj4), memo1, memo, flag2(closure_13, { backgroundColor, guildId, activityIndicatorState }), flag2(closure_12, { backgroundColor, badge, unread })];
  return tmp8(backgroundColor, obj3);
};
export const SimpleGuildContainerAnimated = tmp5;