// === Module 17223: SimpleGuildContainer ===

// Module 17223 (SimpleGuildContainer)
import ReanimatedRexport from "ReanimatedRexport" /* 4376 */;
import spring from "spring" /* 5061 */;
import MaskedBadgeDefault from "MaskedBadge" /* 7989 */;
import GuildsBarActivityIndicator from "GuildsBarActivityIndicator" /* 16494 */;
import CutoutImageDefault from "CutoutImage" /* 17224 */;
import noop from "module_19" /* 19 */;

const GuildsBarActivityIndicatorDefault = GuildsBarActivityIndicator;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = 48;
const springConfig = { mass: 0.2, damping: 40, stiffness: 300, overshootClamping: true, restSpeedThreshold: 1 };
const createStyles = fn(4640);
let closure_11 = createStyles.createStyles({ badgeWrapper: { position: "absolute", right: -4, bottom: 0 } });
let closure_12 = noop.memo((backgroundColor) => {
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
});
let closure_13 = noop.memo((arg0) => {
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
});
const __initData = { code: "function SimpleGuildContainerTsx1(){const{targetRadius}=this.__closure;return targetRadius;}" };
const __initData2 = { code: "function SimpleGuildContainerTsx2(){const{selected}=this.__closure;return selected?1:0;}" };
const __initData3 = { code: "function SimpleGuildContainerTsx3(){const{withSpring,toRadius,springConfig,GUILD_SIZE,iconBackground}=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),width:GUILD_SIZE,height:GUILD_SIZE,overflow:'hidden',backgroundColor:iconBackground.color};}" };
const __initData4 = { code: "function SimpleGuildContainerTsx4(){const{withSpring,toRadius,springConfig,interpolate,toStrokeWidth,borderColor,GUILD_SIZE}=this.__closure;return{borderRadius:withSpring(toRadius.get()+2,springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,2]),springConfig),borderColor:borderColor,position:'absolute',top:-2,left:-2,width:GUILD_SIZE+4,height:GUILD_SIZE+4};}" };
const __initData5 = { code: "function SimpleGuildContainerTsx5(){const{withSpring,toRadius,springConfig,interpolate,toStrokeWidth,backgroundColor,GUILD_SIZE}=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,3]),springConfig),borderColor:backgroundColor,position:'absolute',top:0,left:0,width:GUILD_SIZE,height:GUILD_SIZE};}" };
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
      num2 = num(borderRadius[6]).radii.lg;
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
  const tmp3 = num(borderRadius[7])();
  const iconStroke = tmp3.iconStroke;
  const token = selected(borderRadius[8]).useToken(num(borderRadius[6]).colors.BACKGROUND_BRAND);
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
      tmp13Result = React6(React5, obj);
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
export const SimpleGuildContainerAnimated = function SimpleGuildContainerAnimated(arg0) {
  ({ style, selected } = arg0);
  ({ size, borderRadius, backgroundColor } = arg0);
  ({ folder, usingCutout, onPress } = arg0);
  let iconBackground;
  borderRadius = undefined;
  let derivedValue;
  let derivedValue1;
  let BRAND_500;
  ({ guildIconRef, guildId, children, badge, unread, activityIndicatorState, accessibilityLabel, onAccessibilityAction, onLayout, onLongPress } = arg0);
  iconBackground = backgroundColor(iconBackground[7])().iconBackground;
  if (selected) {
    borderRadius = tmp(tmp2[6]).radii.lg;
  } else if (borderRadius == null) {
    borderRadius = 24;
  }
  class V {
    constructor() {
      return c3;
    }
  }
  V.__closure = { targetRadius: borderRadius };
  V.__workletHash = 5259600477627;
  V.__initData = __initData;
  derivedValue = selected(iconBackground[10]).useDerivedValue(V);
  const obj = selected(iconBackground[10]);
  const fn = function z() {
    let num = 0;
    if (selected) {
      num = 1;
    }
    return num;
  };
  fn.__closure = { selected };
  fn.__workletHash = 12318204664732;
  fn.__initData = __initData2;
  derivedValue1 = selected(iconBackground[10]).useDerivedValue(fn);
  let obj2 = selected(iconBackground[10]);
  class H {
    constructor() {
      size = { borderRadius: null, width: null, height: null, overflow: "hidden", backgroundColor: null };
      obj2 = closure_0(closure_2[11]);
      size.borderRadius = obj2.withSpring(closure_4.get(), closure_10);
      size.width = c9;
      size.height = c9;
      size.backgroundColor = iconBackground.color;
      return size;
    }
  }
  let obj3 = selected(iconBackground[10]);
  H.__closure = { withSpring: selected(iconBackground[11]).withSpring, toRadius: derivedValue, springConfig, GUILD_SIZE: v48, iconBackground };
  H.__workletHash = 11339684212259;
  H.__initData = __initData3;
  const animatedStyle = obj3.useAnimatedStyle(H);
  BRAND_500 = tmp(tmp2[6]).unsafe_rawColors.BRAND_500;
  const obj4 = { withSpring: selected(iconBackground[11]).withSpring, toRadius: derivedValue, springConfig, GUILD_SIZE: v48, iconBackground };
  const fn2 = function j() {
    const size = { borderRadius: spring.withSpring(derivedValue.get() + 2, closure_10), borderWidth: null, borderColor: null, position: "absolute", top: -2, left: -2, width: 52, height: 52 };
    const obj3 = spring;
    size.borderWidth = obj3.withSpring(ReanimatedRexport.interpolate(derivedValue1.get(), [0, 1], [0, 2]), closure_10);
    size.borderColor = BRAND_500;
    return size;
  };
  const obj5 = selected(iconBackground[10]);
  fn2.__closure = { withSpring: selected(iconBackground[11]).withSpring, toRadius: derivedValue, springConfig, interpolate: selected(iconBackground[10]).interpolate, toStrokeWidth: derivedValue1, borderColor: BRAND_500, GUILD_SIZE: v48 };
  fn2.__workletHash = 1481885125958;
  fn2.__initData = __initData4;
  const animatedStyle1 = obj5.useAnimatedStyle(fn2);
  const obj6 = { withSpring: selected(iconBackground[11]).withSpring, toRadius: derivedValue, springConfig, interpolate: selected(iconBackground[10]).interpolate, toStrokeWidth: derivedValue1, borderColor: BRAND_500, GUILD_SIZE: v48 };
  class M {
    constructor() {
      size = { borderRadius: null, borderWidth: null, borderColor: null, position: "absolute", top: 0, left: 0, width: null, height: null };
      obj2 = closure_0(closure_2[11]);
      size.borderRadius = obj2.withSpring(closure_4.get(), closure_10);
      obj3 = closure_0(closure_2[11]);
      obj4 = closure_0(closure_2[10]);
      size.borderWidth = obj3.withSpring(obj4.interpolate(closure_5.get(), [0, 1], [0, 3]), closure_10);
      size.borderColor = backgroundColor;
      size.width = c9;
      size.height = c9;
      return size;
    }
  }
  const obj7 = selected(iconBackground[10]);
  M.__closure = { withSpring: selected(iconBackground[11]).withSpring, toRadius: derivedValue, springConfig, interpolate: selected(iconBackground[10]).interpolate, toStrokeWidth: derivedValue1, backgroundColor, GUILD_SIZE: v48 };
  M.__workletHash = 11592745547551;
  M.__initData = __initData5;
  const obj9 = { children: null };
  const animatedStyle2 = obj7.useAnimatedStyle(M);
  const items = [BRAND_500(backgroundColor(iconBackground[10]).View, { style: animatedStyle, children }), BRAND_500(backgroundColor(iconBackground[10]).View, { style: animatedStyle2 }), BRAND_500(backgroundColor(iconBackground[10]).View, { style: animatedStyle1 }), BRAND_500(closure_13, { backgroundColor, guildId, activityIndicatorState }), BRAND_500(closure_12, { backgroundColor, badge, unread })];
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
};