// === Module 17704: SimpleGuildContainer ===

// Module 17704 (SimpleGuildContainer)
import c from "c" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import spring from "spring" /* 5374 */;
import MaskedBadgeDefault from "MaskedBadge" /* 9236 */;
import GuildsBarActivityIndicatorDefault from "GuildsBarActivityIndicator" /* 16574 */;
import CutoutImageDefault from "CutoutImage" /* 17705 */;
import noop from "module_19" /* 19 */;

const GuildsBarActivityIndicator = isCurrentUserConnected(16574);
require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = 48;
const springConfig = { mass: 0.2, damping: 40, stiffness: 300, overshootClamping: true, restSpeedThreshold: 1 };
const createStyles = fn(5090);
let closure_11 = createStyles.createStyles({ badgeWrapper: { position: "absolute", right: -4, bottom: 0 } });
let ReactCompilerGating = fn(558);
let closure_12 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SimpleGuildContainerBadge(arg0) {
  const cResult = c.c(7);
  ({ badge, unread, backgroundColor } = arg0);
  let badgeWrapper = closure_11();
  if (badge <= 0) {
    if (!unread) {
      return null;
    }
  }
  if (cResult[0] === backgroundColor) {
    if (cResult[1] === badge) {
      if (cResult[2] === unread) {
        let tmp4 = cResult[3];
      }
      if (cResult[4] === badgeWrapper.badgeWrapper) {
      }
      const obj2 = { style: badgeWrapper.badgeWrapper, children: tmp4 };
      const tmp9 = timestampProducer(hasOwnProperty, obj2);
      badgeWrapper = badgeWrapper.badgeWrapper;
      cResult[4] = badgeWrapper;
      cResult[5] = tmp4;
      cResult[6] = tmp9;
    }
  }
  const tmp5 = timestampProducer(MaskedBadgeDefault, { value: badge, unread, backgroundColor });
  cResult[0] = backgroundColor;
  cResult[1] = badge;
  cResult[2] = unread;
  cResult[3] = tmp5;
  tmp4 = tmp5;
}) : (function SimpleGuildContainerBadge(backgroundColor) {
  ({ badge, unread } = backgroundColor);
  if (badge > 0) {
    const obj = { style: tmp.badgeWrapper, children: null };
    const obj2 = { value: badge, unread, backgroundColor: backgroundColor.backgroundColor };
    obj.children = timestampProducer(MaskedBadgeDefault, obj2);
    let tmp2 = timestampProducer(hasOwnProperty, obj);
  } else {
    tmp2 = null;
  }
  return tmp2;
}));
ReactCompilerGating = fn(558);
let closure_13 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SimpleGuildActivityIndicator(arg0) {
  isCurrentUserConnected = require;
  let tmp = dependencyMap;
  const cResult = c.c(12);
  ({ guildId, activityIndicatorState, backgroundColor } = arg0);
  let source;
  if (activityIndicatorState != null) {
    source = activityIndicatorState.source;
  }
  if (null != source) {
    if (cResult[0] !== backgroundColor) {
      const obj2 = { backgroundColor };
      cResult[0] = backgroundColor;
      cResult[1] = obj2;
      let tmp10 = obj2;
    } else {
      tmp10 = cResult[1];
    }
    if (cResult[2] === activityIndicatorState.IconComponent) {
      if (cResult[3] === activityIndicatorState.isCurrentUserConnected) {
        if (cResult[4] === activityIndicatorState.source) {
        }
      }
    }
    const obj3 = { style: tmp10, source: null, IconComponent: null, isCurrentUserConnected: null };
    ({ source: obj5.source, IconComponent: obj5.IconComponent, isCurrentUserConnected: obj5.isCurrentUserConnected } = activityIndicatorState);
    tmp = timestampProducer(GuildsBarActivityIndicator.GuildsBarActivityIndicatorBase, obj3);
    ({ IconComponent: tmp2[2], isCurrentUserConnected } = activityIndicatorState);
    cResult[3] = isCurrentUserConnected;
    activityIndicatorState = activityIndicatorState.source;
    cResult[4] = activityIndicatorState;
    cResult[5] = tmp10;
    cResult[6] = tmp;
  } else if (null == guildId) {
    return null;
  } else {
    if (cResult[7] !== backgroundColor) {
      const obj4 = { backgroundColor };
      cResult[7] = backgroundColor;
      cResult[8] = obj4;
      let tmp4 = obj4;
    } else {
      tmp4 = cResult[8];
    }
    if (cResult[9] === guildId) {
    }
    const obj9 = { guildId, style: tmp4 };
    const tmp8 = timestampProducer(GuildsBarActivityIndicatorDefault, obj9);
    cResult[9] = guildId;
    cResult[10] = tmp4;
    cResult[11] = tmp8;
  }
}) : (function SimpleGuildActivityIndicator(arg0) {
  ({ guildId, activityIndicatorState, backgroundColor } = arg0);
  let source;
  if (activityIndicatorState != null) {
    source = activityIndicatorState.source;
  }
  if (null != source) {
    const obj2 = { style: null, source: null, IconComponent: null, isCurrentUserConnected: null };
    const obj4 = { backgroundColor };
    obj2.style = obj4;
    ({ source: obj3.source, IconComponent: obj3.IconComponent, isCurrentUserConnected: obj3.isCurrentUserConnected } = activityIndicatorState);
    let tmp2 = timestampProducer(GuildsBarActivityIndicator.GuildsBarActivityIndicatorBase, obj2);
  } else {
    tmp2 = null;
    if (null != guildId) {
      const obj = { guildId, style: null };
      const obj7 = { backgroundColor };
      obj.style = obj7;
      tmp2 = timestampProducer(GuildsBarActivityIndicatorDefault, obj);
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
ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/SimpleGuildContainer.tsx");

export const SimpleGuildContainer = function SimpleGuildContainer(selected) {
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
  const token = selected(borderRadius[10]).useToken(num(borderRadius[8]).colors.BACKGROUND_BRAND);
  let items = [selected, flag2, , , , , , , ];
  let source;
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
  const memo = badge.useMemo(() => {
    let tmp = null;
    if (!selected) {
      return null;
    } else if (flag2) {
      const obj2 = { style: { position: "absolute", top: -2, left: -2 }, cutoutTopRightSize: null, cutoutTopRightInsetX: 8, cutoutTopRightInsetY: 8, cutoutBottomRightSize: null, cutoutBottomRightInsetX: 6, cutoutBottomRightInsetY: 7, imageSize: null, imageBackgroundColor: null, imageBorderRadius: null, clipInnerAmount: null };
      let source;
      if (activityIndicatorState != tmp) {
        source = activityIndicatorState.source;
      }
      let num4 = 0;
      if (tmp != source) {
        num4 = 13;
      }
      obj2.cutoutTopRightSize = num4;
      tmp = badge > 0;
      let num5 = 13;
      if (!tmp) {
        let num6 = 0;
        if (unread) {
          num6 = 11;
        }
        num5 = num6;
      }
      obj2.cutoutBottomRightSize = num5;
      obj2.imageSize = num + 4;
      obj2.imageBackgroundColor = token;
      obj2.imageBorderRadius = borderRadius + 2;
      obj2.clipInnerAmount = num;
      let tmp13Result = timestampProducer(CutoutImageDefault, obj2);
    } else {
      const obj = { children: null };
      const obj3 = { style: null };
      const size = { borderRadius: borderRadius + 2, borderWidth: 2, borderColor: token, position: "absolute", top: -2, left: -2, width: 2 + 4, height: 2 + 4 };
      obj3.style = size;
      const items = [timestampProducer(hasOwnProperty, obj3), ];
      const obj4 = { style: null };
      const size1 = { borderRadius, borderWidth: 3, borderColor: backgroundColor, position: "absolute", top: 0, left: 0, width: 2, height: 2 };
      obj4.style = size1;
      items[1] = timestampProducer(hasOwnProperty, obj4);
      obj.children = items;
      tmp13Result = closure_2_8(React5, obj);
    }
  }, items);
  let obj3 = { style, accessible: true, accessibilityState: { selected }, accessibilityRole: "button", accessibilityLabel, accessibilityActions: null, onAccessibilityAction, children: null };
  const items2 = [{ name: "activate" }];
  obj3.accessibilityActions = items2;
  let obj4 = { ref: guildIconRef, onLayout, style: null, children: null };
  const obj5 = { borderRadius, overflow: "hidden", backgroundColor: null };
  let str = "transparent";
  const memo1 = badge.useMemo(() => {
    let tmp = null;
    if (!flag2) {
      const obj = { style: null };
      const size = { position: "absolute", borderWidth: 1, borderColor: iconStroke.color, borderRadius, width: num, height: num };
      obj.style = size;
      tmp = timestampProducer(hasOwnProperty, obj);
    }
    return tmp;
  }, items1);
  if (!flag2) {
    let color = backgroundColor;
    if (!flag) {
      color = tmp3.iconBackground.color;
    }
    str = color;
  }
  obj5.backgroundColor = str;
  obj4.style = obj5;
  obj4.children = children;
  const items3 = [flag2(backgroundColor, obj4), memo1, memo, flag2(closure_13, { backgroundColor, guildId, activityIndicatorState }), flag2(closure_12, { backgroundColor, badge, unread })];
  obj3.children = items3;
  return iconStroke(backgroundColor, obj3);
};
export const SimpleGuildContainerAnimated = ReactCompilerGating.isReactCompilerEnabled() ? (function SimpleGuildContainerAnimated(arg0) {
  const cResult = selected(iconBackground[5]).c(31);
  ({ guildIconRef, guildId, style, children, selected } = arg0);
  ({ borderRadius, badge, unread, backgroundColor } = arg0);
  ({ activityIndicatorState, accessibilityLabel, onAccessibilityAction, onLayout, onPress, onLongPress } = arg0);
  iconBackground = backgroundColor(iconBackground[9])().iconBackground;
  if (selected) {
    borderRadius = backgroundColor(tmp2[8]).radii.lg;
  } else if (borderRadius == null) {
    borderRadius = 24;
  }
  const obj = selected(iconBackground[5]);
  const fn = function o() {
    return borderRadius;
  };
  fn.__closure = { targetRadius: borderRadius };
  fn.__workletHash = 5259600477627;
  fn.__initData = __initData;
  const derivedValue = selected(iconBackground[12]).useDerivedValue(fn);
  const tmpResult = selected(iconBackground[12]);
  const fn2 = function s() {
    let num = 0;
    if (selected) {
      num = 1;
    }
    return num;
  };
  fn2.__closure = { selected };
  fn2.__workletHash = 12318204664732;
  fn2.__initData = __initData2;
  const derivedValue1 = selected(iconBackground[12]).useDerivedValue(fn2);
  const tmpResult5 = selected(iconBackground[12]);
  class S {
    constructor() {
      size = { borderRadius: null, width: null, height: null, overflow: "hidden", backgroundColor: null };
      obj2 = closure_0(closure_2[13]);
      size.borderRadius = obj2.withSpring(closure_4.get(), closure_10);
      size.width = c9;
      size.height = c9;
      size.backgroundColor = iconBackground.color;
      return size;
    }
  }
  const tmpResult6 = selected(iconBackground[12]);
  S.__closure = { withSpring: selected(iconBackground[13]).withSpring, toRadius: derivedValue, springConfig, GUILD_SIZE: v48, iconBackground };
  S.__workletHash = 2705390387971;
  S.__initData = __initData3;
  const animatedStyle = tmpResult6.useAnimatedStyle(S);
  const BRAND_500 = backgroundColor(tmp2[8]).unsafe_rawColors.BRAND_500;
  let obj2 = { withSpring: selected(iconBackground[13]).withSpring, toRadius: derivedValue, springConfig, GUILD_SIZE: v48, iconBackground };
  class R {
    constructor() {
      size = { borderRadius: null, borderWidth: null, borderColor: null, position: "absolute", top: -2, left: -2, width: 52, height: 52 };
      obj2 = closure_0(closure_2[13]);
      size.borderRadius = obj2.withSpring(closure_4.get() + 2, closure_10);
      obj3 = closure_0(closure_2[13]);
      obj4 = closure_0(closure_2[12]);
      size.borderWidth = obj3.withSpring(obj4.interpolate(closure_5.get(), [0, 1], [0, 2]), closure_10);
      size.borderColor = BRAND_500;
      return size;
    }
  }
  const tmpResult7 = selected(iconBackground[12]);
  R.__closure = { withSpring: selected(iconBackground[13]).withSpring, toRadius: derivedValue, springConfig, interpolate: selected(iconBackground[12]).interpolate, toStrokeWidth: derivedValue1, borderColor: BRAND_500, GUILD_SIZE: v48 };
  R.__workletHash = 4411446600230;
  R.__initData = __initData4;
  const animatedStyle1 = tmpResult7.useAnimatedStyle(R);
  let obj3 = { withSpring: selected(iconBackground[13]).withSpring, toRadius: derivedValue, springConfig, interpolate: selected(iconBackground[12]).interpolate, toStrokeWidth: derivedValue1, borderColor: BRAND_500, GUILD_SIZE: v48 };
  class G {
    constructor() {
      size = { borderRadius: null, borderWidth: null, borderColor: null, position: "absolute", top: 0, left: 0, width: null, height: null };
      obj2 = closure_0(closure_2[13]);
      size.borderRadius = obj2.withSpring(closure_4.get(), closure_10);
      obj3 = closure_0(closure_2[13]);
      obj4 = closure_0(closure_2[12]);
      size.borderWidth = obj3.withSpring(obj4.interpolate(closure_5.get(), [0, 1], [0, 3]), closure_10);
      size.borderColor = backgroundColor;
      size.width = c9;
      size.height = c9;
      return size;
    }
  }
  const tmpResult8 = selected(iconBackground[12]);
  G.__closure = { withSpring: selected(iconBackground[13]).withSpring, toRadius: derivedValue, springConfig, interpolate: selected(iconBackground[12]).interpolate, toStrokeWidth: derivedValue1, backgroundColor, GUILD_SIZE: v48 };
  G.__workletHash = 4716643044607;
  G.__initData = __initData5;
  const animatedStyle2 = tmpResult8.useAnimatedStyle(G);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === children) {
      let tmp11 = cResult[2];
    }
    if (cResult[3] !== animatedStyle2) {
      const obj5 = { style: animatedStyle2 };
      const tmp15 = BRAND_500(backgroundColor(tmp2[12]).View, obj5);
      cResult[3] = animatedStyle2;
      cResult[4] = tmp15;
      let tmp13 = tmp15;
    } else {
      tmp13 = cResult[4];
    }
    if (cResult[5] !== animatedStyle1) {
      const obj6 = { style: animatedStyle1 };
      const tmp18 = BRAND_500(backgroundColor(tmp2[12]).View, obj6);
      cResult[5] = animatedStyle1;
      cResult[6] = tmp18;
      let tmp16 = tmp18;
    } else {
      tmp16 = cResult[6];
    }
    if (cResult[7] === activityIndicatorState) {
      if (cResult[8] === backgroundColor) {
        if (cResult[9] === guildId) {
          let tmp19 = cResult[10];
        }
        if (cResult[11] === backgroundColor) {
          if (cResult[12] === badge) {
            if (cResult[13] === unread) {
              let tmp23 = cResult[14];
            }
            if (cResult[15] === tmp11) {
              if (cResult[16] === tmp13) {
                if (cResult[17] === tmp16) {
                  if (cResult[18] === tmp19) {
                    if (cResult[19] === tmp23) {
                      let tmp27 = cResult[20];
                    }
                    if (cResult[21] === accessibilityLabel) {
                      if (cResult[22] === tmp27) {
                        if (cResult[23] === guildIconRef) {
                          if (cResult[24] === onAccessibilityAction) {
                            if (cResult[25] === onLayout) {
                              if (cResult[26] === onLongPress) {
                                if (cResult[27] === onPress) {
                                  if (cResult[28] === selected) {
                                    if (cResult[29] === style) {
                                      return cResult[30];
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    if (null != onPress) {
                      const obj7 = { ref: guildIconRef, style, onPress, onLongPress, accessibilityRole: "button", accessible: true, accessibilityLabel, accessibilityState: null, onAccessibilityAction: null, onLayout: null, children: null };
                      const obj8 = { selected };
                      obj7.accessibilityState = obj8;
                      obj7.onAccessibilityAction = onAccessibilityAction;
                      obj7.onLayout = onLayout;
                      obj7.children = tmp27;
                      let tmp34 = BRAND_500(derivedValue, obj7);
                    } else {
                      const obj9 = { style, children: tmp27 };
                      tmp34 = BRAND_500(derivedValue1, obj9);
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
                    cResult[30] = tmp34;
                  }
                }
              }
            }
            const obj10 = { children: null };
            const items = [tmp11, tmp13, tmp16, tmp19, tmp23];
            obj10.children = items;
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
  const obj4 = { withSpring: selected(iconBackground[13]).withSpring, toRadius: derivedValue, springConfig, interpolate: selected(iconBackground[12]).interpolate, toStrokeWidth: derivedValue1, backgroundColor, GUILD_SIZE: v48 };
}) : (function SimpleGuildContainerAnimated(arg0) {
  ({ style, selected } = arg0);
  ({ size, borderRadius, backgroundColor } = arg0);
  ({ folder, usingCutout, onPress } = arg0);
  let iconBackground;
  borderRadius = undefined;
  let derivedValue;
  let derivedValue1;
  let BRAND_500;
  ({ guildIconRef, guildId, children, badge, unread, activityIndicatorState, accessibilityLabel, onAccessibilityAction, onLayout, onLongPress } = arg0);
  iconBackground = backgroundColor(iconBackground[9])().iconBackground;
  if (selected) {
    borderRadius = tmp(tmp2[8]).radii.lg;
  } else if (borderRadius == null) {
    borderRadius = 24;
  }
  class H {
    constructor() {
      return c3;
    }
  }
  H.__closure = { targetRadius: borderRadius };
  H.__workletHash = 11611600000124;
  H.__initData = __initData6;
  derivedValue = selected(iconBackground[12]).useDerivedValue(H);
  const obj = selected(iconBackground[12]);
  class P {
    constructor() {
      num = 0;
      if (selected) {
        num = 1;
      }
      return num;
    }
  }
  P.__closure = { selected };
  P.__workletHash = 11046475911641;
  P.__initData = __initData7;
  derivedValue1 = selected(iconBackground[12]).useDerivedValue(P);
  let obj2 = selected(iconBackground[12]);
  const fn = function z() {
    const size = { borderRadius: spring.withSpring(derivedValue.get(), closure_10), width: height, height, overflow: "hidden", backgroundColor: iconBackground.color };
    return size;
  };
  let obj3 = selected(iconBackground[12]);
  fn.__closure = { withSpring: selected(iconBackground[13]).withSpring, toRadius: derivedValue, springConfig, GUILD_SIZE: v48, iconBackground };
  fn.__workletHash = 13191597685992;
  fn.__initData = __initData8;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  BRAND_500 = tmp(tmp2[8]).unsafe_rawColors.BRAND_500;
  const obj4 = { withSpring: selected(iconBackground[13]).withSpring, toRadius: derivedValue, springConfig, GUILD_SIZE: v48, iconBackground };
  class N {
    constructor() {
      size = { borderRadius: null, borderWidth: null, borderColor: null, position: "absolute", top: -2, left: -2, width: 52, height: 52 };
      obj2 = closure_0(closure_2[13]);
      size.borderRadius = obj2.withSpring(closure_4.get() + 2, closure_10);
      obj3 = closure_0(closure_2[13]);
      obj4 = closure_0(closure_2[12]);
      size.borderWidth = obj3.withSpring(obj4.interpolate(closure_5.get(), [0, 1], [0, 2]), closure_10);
      size.borderColor = BRAND_500;
      return size;
    }
  }
  const obj5 = selected(iconBackground[12]);
  N.__closure = { withSpring: selected(iconBackground[13]).withSpring, toRadius: derivedValue, springConfig, interpolate: selected(iconBackground[12]).interpolate, toStrokeWidth: derivedValue1, borderColor: BRAND_500, GUILD_SIZE: v48 };
  N.__workletHash = 2608591861643;
  N.__initData = __initData9;
  const animatedStyle1 = obj5.useAnimatedStyle(N);
  const obj6 = { withSpring: selected(iconBackground[13]).withSpring, toRadius: derivedValue, springConfig, interpolate: selected(iconBackground[12]).interpolate, toStrokeWidth: derivedValue1, borderColor: BRAND_500, GUILD_SIZE: v48 };
  const fn2 = function j() {
    const size = { borderRadius: spring.withSpring(derivedValue.get(), closure_10), borderWidth: null, borderColor: null, position: "absolute", top: 0, left: 0, width: null, height: null };
    const obj3 = spring;
    size.borderWidth = obj3.withSpring(ReanimatedRexport.interpolate(derivedValue1.get(), [0, 1], [0, 3]), closure_10);
    size.borderColor = backgroundColor;
    size.width = height;
    size.height = height;
    return size;
  };
  const obj7 = selected(iconBackground[12]);
  fn2.__closure = { withSpring: selected(iconBackground[13]).withSpring, toRadius: derivedValue, springConfig, interpolate: selected(iconBackground[12]).interpolate, toStrokeWidth: derivedValue1, backgroundColor, GUILD_SIZE: v48 };
  fn2.__workletHash = 7298518847115;
  fn2.__initData = __initData10;
  const obj9 = { children: null };
  const animatedStyle2 = obj7.useAnimatedStyle(fn2);
  const items = [BRAND_500(backgroundColor(iconBackground[12]).View, { style: animatedStyle, children }), BRAND_500(backgroundColor(iconBackground[12]).View, { style: animatedStyle2 }), BRAND_500(backgroundColor(iconBackground[12]).View, { style: animatedStyle1 }), BRAND_500(closure_13, { backgroundColor, guildId, activityIndicatorState }), BRAND_500(closure_12, { backgroundColor, badge, unread })];
  obj9.children = items;
  const tmp10 = closure_8(closure_7, obj9);
  if (null != onPress) {
    const obj10 = { ref: guildIconRef, style, onPress, onLongPress, accessibilityRole: "button", accessible: true, accessibilityLabel, accessibilityState: null, onAccessibilityAction: null, onLayout: null, children: null };
    const obj11 = { selected };
    obj10.accessibilityState = obj11;
    obj10.onAccessibilityAction = onAccessibilityAction;
    obj10.onLayout = onLayout;
    obj10.children = tmp10;
    let tmp9Result = tmp9(derivedValue, obj10);
  } else {
    const obj12 = { style, children: tmp10 };
    tmp9Result = tmp9(derivedValue1, obj12);
  }
  return tmp9Result;
});