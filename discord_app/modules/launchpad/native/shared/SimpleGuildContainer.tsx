// discord_app/modules/launchpad/native/shared/SimpleGuildContainer.tsx
import MaskedBadgeDefault from "../../../main_tabs_v2/native/shared_components/MaskedBadge.tsx";
import getMediaIcon from "../../../guilds_bar/native/GuildsBarActivityIndicator.tsx";
import getMediaIconDefault from "../../../guilds_bar/native/GuildsBarActivityIndicator.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
let c3 = importAllResult;
({ Pressable: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, Fragment: error, jsxs: closure_8 } = jsxProd);
let c9 = 48;
let closure_10 = { mass: 0.2, damping: 40, stiffness: 300, overshootClamping: true, restSpeedThreshold: 1 };
let closure_11 = createCacheKey.createStyles({ badgeWrapper: { position: "absolute", right: -4, bottom: 0 } });
let closure_12 = importAllResult.memo((backgroundColor) => {
  ({ badge, unread } = backgroundColor);
  if (badge > 0) {
    let obj = { style: null, children: null };
    obj[0] = tmp.badgeWrapper;
    obj = { value: null, unread: null, backgroundColor: null };
    obj[0] = badge;
    obj[1] = unread;
    obj[2] = backgroundColor.backgroundColor;
    obj[1] = callback(MaskedBadgeDefault, obj);
    let tmp2 = callback(closure_5, obj);
  } else {
    tmp2 = null;
  }
  return tmp2;
});
let closure_13 = importAllResult.memo((arg0) => {
  ({ guildId, activityIndicatorState, backgroundColor } = arg0);
  let source;
  if (activityIndicatorState != null) {
    source = activityIndicatorState.source;
  }
  if (null != source) {
    let obj = { style: null, source: null, IconComponent: null, isCurrentUserConnected: null };
    obj = { backgroundColor: null };
    obj[0] = backgroundColor;
    obj[0] = obj;
    ({ source: obj3[1], IconComponent: obj3[2], isCurrentUserConnected: obj3[3] } = activityIndicatorState);
    let tmp2 = callback(getMediaIcon.GuildsBarActivityIndicatorBase, obj);
  } else {
    tmp2 = null;
    if (null != guildId) {
      obj = { guildId: null, style: null };
      obj[0] = guildId;
      obj1 = { backgroundColor: null };
      obj1[0] = backgroundColor;
      obj[1] = obj1;
      tmp2 = callback(getMediaIconDefault, obj);
    }
  }
  return tmp2;
});
let closure_14 = { code: "function SimpleGuildContainerTsx1(){const{targetRadius}=this.__closure;return targetRadius;}" };
let closure_15 = { code: "function SimpleGuildContainerTsx2(){const{selected}=this.__closure;return selected?1:0;}" };
let closure_16 = { code: "function SimpleGuildContainerTsx3(){const{withSpring,toRadius,springConfig,GUILD_SIZE,iconBackground}=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),width:GUILD_SIZE,height:GUILD_SIZE,overflow:'hidden',backgroundColor:iconBackground.color};}" };
let closure_17 = { code: "function SimpleGuildContainerTsx4(){const{withSpring,toRadius,springConfig,interpolate,toStrokeWidth,borderColor,GUILD_SIZE}=this.__closure;return{borderRadius:withSpring(toRadius.get()+2,springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,2]),springConfig),borderColor:borderColor,position:'absolute',top:-2,left:-2,width:GUILD_SIZE+4,height:GUILD_SIZE+4};}" };
let closure_18 = { code: "function SimpleGuildContainerTsx5(){const{withSpring,toRadius,springConfig,interpolate,toStrokeWidth,backgroundColor,GUILD_SIZE}=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,3]),springConfig),borderColor:backgroundColor,position:'absolute',top:0,left:0,width:GUILD_SIZE,height:GUILD_SIZE};}" };
const result = require("set").fileFinishedImporting("modules/launchpad/native/shared/SimpleGuildContainer.tsx");

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
  let iconStroke;
  let token;
  ({ accessibilityLabel, onAccessibilityAction, onLayout } = selected);
  const tmp3 = num(borderRadius[7])();
  iconStroke = tmp3.iconStroke;
  let obj = selected(borderRadius[8]);
  token = obj.useToken(num(borderRadius[6]).colors.BACKGROUND_BRAND);
  obj1 = badge;
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
      let obj = { style: null, cutoutTopRightSize: null, cutoutTopRightInsetX: 8, cutoutTopRightInsetY: 8, cutoutBottomRightSize: null, cutoutBottomRightInsetX: 6, cutoutBottomRightInsetY: 7, imageSize: null, imageBackgroundColor: null, imageBorderRadius: null, clipInnerAmount: null };
      obj[0] = { position: "absolute", top: -2, left: -2 };
      let source;
      if (activityIndicatorState != tmp) {
        source = activityIndicatorState.source;
      }
      let num4 = 0;
      if (tmp != source) {
        num4 = 13;
      }
      obj[1] = num4;
      tmp = badge > 0;
      let num5 = 13;
      if (!tmp) {
        let num6 = 0;
        if (unread) {
          num6 = 11;
        }
        num5 = num6;
      }
      obj[4] = num5;
      obj[7] = num + 4;
      obj[8] = token;
      obj[9] = borderRadius + 2;
      obj[10] = num;
      let tmp13Result = flag2(num(borderRadius[9]), obj);
      const tmp13 = flag2;
      const tmp16 = num(borderRadius[9]);
    } else {
      obj = { children: null };
      obj = { style: null };
      obj1 = { borderRadius: null, borderWidth: 2, borderColor: null, position: "absolute", top: -2, left: -2, width: null, height: null };
      obj1[0] = borderRadius + 2;
      obj1[2] = token;
      obj1[6] = 2 + 4;
      obj1[7] = 2 + 4;
      obj[0] = obj1;
      const items = [flag2(backgroundColor, obj), ];
      const obj2 = { style: null };
      const obj3 = { borderRadius: null, borderWidth: 3, borderColor: null, position: "absolute", top: 0, left: 0, width: null, height: null };
      obj3[0] = borderRadius;
      obj3[2] = backgroundColor;
      obj3[6] = 2;
      obj3[7] = 2;
      obj2[0] = obj3;
      items[1] = flag2(backgroundColor, obj2);
      obj[0] = items;
      tmp13Result = iconStroke(activityIndicatorState, obj);
    }
  }, items);
  obj = { style, accessible: true, accessibilityState: { selected }, accessibilityRole: "button", accessibilityLabel, accessibilityActions: items2, onAccessibilityAction, children: null };
  items2 = [{ name: "activate" }];
  obj = { ref: guildIconRef, onLayout, style: null, children: null };
  obj1 = { borderRadius, overflow: "hidden", backgroundColor: null };
  let str = "transparent";
  const memo1 = obj1.useMemo(() => {
    let tmp = null;
    if (!flag2) {
      let obj = { style: null };
      obj = { position: "absolute", borderWidth: 1, borderColor: null, borderRadius: null, width: null, height: null };
      obj[2] = iconStroke.color;
      obj[3] = borderRadius;
      obj[4] = num;
      obj[5] = num;
      obj[0] = obj;
      tmp = flag2(backgroundColor, obj);
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
  obj1[2] = str;
  obj[2] = obj1;
  obj[3] = children;
  const items3 = [flag2(backgroundColor, obj), memo1, memo, flag2(closure_13, { backgroundColor, guildId, activityIndicatorState }), flag2(closure_12, { backgroundColor, badge, unread })];
  obj[7] = items3;
  return iconStroke(backgroundColor, obj);
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
  let obj = selected(tmp2[10]);
  class V {
    constructor() {
      return c3;
    }
  }
  V.__closure = { targetRadius: borderRadius };
  V.__workletHash = 5259600477627;
  V.__initData = closure_14;
  derivedValue = obj.useDerivedValue(V);
  obj1 = selected(tmp2[10]);
  const fn = function z() {
    let num = 0;
    if (selected) {
      num = 1;
    }
    return num;
  };
  fn.__closure = { selected };
  fn.__workletHash = 12318204664732;
  fn.__initData = closure_15;
  derivedValue1 = obj1.useDerivedValue(fn);
  let obj2 = selected(tmp2[10]);
  class H {
    constructor() {
      obj = { borderRadius: null, width: null, height: null, overflow: "hidden", backgroundColor: null };
      obj2 = selected(iconBackground[11]);
      obj[0] = obj2.withSpring(closure_4.get(), closure_1_10);
      obj[1] = closure_1_9;
      obj[2] = closure_1_9;
      obj[4] = iconBackground.color;
      return obj;
    }
  }
  obj = { withSpring: selected(tmp2[11]).withSpring, toRadius: derivedValue, springConfig: closure_10, GUILD_SIZE: c9, iconBackground };
  H.__closure = obj;
  H.__workletHash = 11339684212259;
  H.__initData = closure_16;
  const animatedStyle = obj2.useAnimatedStyle(H);
  BRAND_500 = tmp(tmp2[6]).unsafe_rawColors.BRAND_500;
  let obj4 = selected(tmp2[10]);
  const fn2 = function j() {
    const obj = { borderRadius: selected(iconBackground[11]).withSpring(derivedValue.get() + 2, closure_1_10), borderWidth: null, borderColor: null, position: "absolute", top: -2, left: -2, width: 52, height: 52 };
    const obj2 = selected(iconBackground[11]);
    const obj3 = selected(iconBackground[11]);
    obj[1] = obj3.withSpring(selected(iconBackground[10]).interpolate(derivedValue1.get(), [0, 1], [0, 2]), closure_1_10);
    obj[2] = BRAND_500;
    return obj;
  };
  obj = { withSpring: selected(tmp2[11]).withSpring, toRadius: derivedValue, springConfig: closure_10, interpolate: selected(tmp2[10]).interpolate, toStrokeWidth: derivedValue1, borderColor: BRAND_500, GUILD_SIZE: c9 };
  fn2.__closure = obj;
  fn2.__workletHash = 1481885125958;
  fn2.__initData = closure_17;
  const animatedStyle1 = obj4.useAnimatedStyle(fn2);
  class M {
    constructor() {
      obj = { borderRadius: null, borderWidth: null, borderColor: null, position: "absolute", top: 0, left: 0, width: null, height: null };
      obj2 = selected(iconBackground[11]);
      obj[0] = obj2.withSpring(closure_4.get(), closure_1_10);
      obj3 = selected(iconBackground[11]);
      obj4 = selected(iconBackground[10]);
      obj[1] = obj3.withSpring(obj4.interpolate(closure_5.get(), [0, 1], [0, 3]), closure_1_10);
      obj[2] = backgroundColor;
      obj[6] = closure_1_9;
      obj[7] = closure_1_9;
      return obj;
    }
  }
  obj1 = { withSpring: selected(tmp2[11]).withSpring, toRadius: derivedValue, springConfig: closure_10, interpolate: selected(tmp2[10]).interpolate, toStrokeWidth: derivedValue1, backgroundColor, GUILD_SIZE: c9 };
  M.__closure = obj1;
  M.__workletHash = 11592745547551;
  M.__initData = closure_18;
  obj2 = { children: null };
  const animatedStyle2 = selected(iconBackground[10]).useAnimatedStyle(M);
  const items = [BRAND_500(backgroundColor(iconBackground[10]).View, { style: animatedStyle, children }), BRAND_500(backgroundColor(iconBackground[10]).View, { style: animatedStyle2 }), BRAND_500(backgroundColor(iconBackground[10]).View, { style: animatedStyle1 }), BRAND_500(closure_13, { backgroundColor, guildId, activityIndicatorState }), BRAND_500(closure_12, { backgroundColor, badge, unread })];
  obj2[0] = items;
  const tmp10 = callback2(closure_7, obj2);
  if (null != onPress) {
    let obj3 = { ref: null, style: null, onPress: null, onLongPress: null, accessibilityRole: "button", accessible: true, accessibilityLabel: null, accessibilityState: null, onAccessibilityAction: null, onLayout: null, children: null };
    obj3[0] = guildIconRef;
    obj3[1] = style;
    obj3[2] = onPress;
    obj3[3] = onLongPress;
    obj3[6] = accessibilityLabel;
    obj4 = { selected: null };
    obj4[0] = selected;
    obj3[7] = obj4;
    obj3[8] = onAccessibilityAction;
    obj3[9] = onLayout;
    obj3[10] = tmp10;
    let tmp9Result = tmp9(derivedValue, obj3);
  } else {
    const obj5 = { style: null, children: null };
    obj5[0] = style;
    obj5[1] = tmp10;
    tmp9Result = tmp9(derivedValue1, obj5);
  }
  return tmp9Result;
};