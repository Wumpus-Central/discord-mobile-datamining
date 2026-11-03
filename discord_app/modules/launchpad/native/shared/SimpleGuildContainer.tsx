// discord_app/modules/launchpad/native/shared/SimpleGuildContainer.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import MaskedBadgeDefault from "../../../main_tabs_v2/native/shared_components/MaskedBadge.tsx";
import GuildsBarActivityIndicator from "../../../guilds_bar/native/GuildsBarActivityIndicator.tsx";
import useSimpleGuildDefaultColorsDefault from "useSimpleGuildDefaultColors.tsx";
import CutoutImageDefault from "CutoutImage.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;
const GuildsBarActivityIndicatorDefault = GuildsBarActivityIndicator;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = { mass: 0.2, damping: 40, stiffness: 300, overshootClamping: true };
const createStyles = fn(5141);
let closure_10 = createStyles.createStyles({ badgeWrapper: { position: "absolute", right: -4, bottom: 0 } });
let closure_11 = noop.memo(function SimpleGuildContainerBadge(backgroundColor) {
  ({ badge, unread } = backgroundColor);
  if (badge > 0) {
    const obj = { style: tmp.badgeWrapper, children: null };
    const obj2 = { value: badge, unread, backgroundColor: backgroundColor.backgroundColor };
    obj.children = timestampProducer(MaskedBadgeDefault, obj2);
    let tmp2 = timestampProducer(borderColor, obj);
  } else {
    tmp2 = null;
  }
  return tmp2;
});
let closure_12 = noop.memo(function SimpleGuildActivityIndicator(arg0) {
  ({ guildId, activityIndicatorState, backgroundColor } = arg0);
  let source;
  if (activityIndicatorState != null) {
    source = activityIndicatorState.source;
  }
  if (null != source) {
    const obj2 = { style: null, source: null, IconComponent: null, isCurrentUserConnected: null };
    const obj4 = { backgroundColor };
    obj2.style = obj4;
    ({
      source: obj3.source,
      IconComponent: obj3.IconComponent,
      isCurrentUserConnected: obj3.isCurrentUserConnected,
    } = activityIndicatorState);
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
let closure_13 = {
  code: "(function SimpleGuildContainerTsx1(){let[targetRadius]=this.__closure;return targetRadius;})",
};
let closure_14 = { code: "(function SimpleGuildContainerTsx2(){let[selected]=this.__closure;return selected?1:0;})" };
let closure_15 = {
  code: "(function SimpleGuildContainerTsx3(){let[withSpring,toRadius,springConfig,GUILD_SIZE,iconBackground]=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),width:GUILD_SIZE,height:GUILD_SIZE,overflow:'hidden',backgroundColor:iconBackground.color};})",
};
let closure_16 = {
  code: "(function SimpleGuildContainerTsx4(){let[withSpring,toRadius,springConfig,interpolate,toStrokeWidth,borderColor,GUILD_SIZE]=this.__closure;return{borderRadius:withSpring(toRadius.get()+2,springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,2]),springConfig),borderColor:borderColor,position:'absolute',top:-2,left:-2,width:GUILD_SIZE+4,height:GUILD_SIZE+4};})",
};
let closure_17 = {
  code: "(function SimpleGuildContainerTsx5(){let[withSpring,toRadius,springConfig,interpolate,toStrokeWidth,backgroundColor,GUILD_SIZE]=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,3]),springConfig),borderColor:backgroundColor,position:'absolute',top:0,left:0,width:GUILD_SIZE,height:GUILD_SIZE};})",
};
let size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/SimpleGuildContainer.tsx");

export function SimpleGuildContainer(selected) {
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
  items = [selected, flag2, , , , , , ,];
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
      const obj2 = {
        style: { position: "absolute", top: -2, left: -2 },
        cutoutTopRightSize: null,
        cutoutTopRightInsetX: 8,
        cutoutTopRightInsetY: 8,
        cutoutBottomRightSize: null,
        cutoutBottomRightInsetX: 6,
        cutoutBottomRightInsetY: 7,
        imageSize: null,
        imageBackgroundColor: null,
        imageBorderRadius: null,
        clipInnerAmount: null,
      };
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
      const size = {
        borderRadius: borderRadius + 2,
        borderWidth: 2,
        borderColor: token,
        position: "absolute",
        top: -2,
        left: -2,
        width: 2 + 4,
        height: 2 + 4,
      };
      obj3.style = size;
      items = [timestampProducer(borderColor, obj3)];
      const obj4 = { style: null };
      const size1 = {
        borderRadius,
        borderWidth: 3,
        borderColor: backgroundColor,
        position: "absolute",
        top: 0,
        left: 0,
        width: 2,
        height: 2,
      };
      obj4.style = size1;
      items[1] = timestampProducer(borderColor, obj4);
      obj.children = items;
      tmp13Result = React6(React5, obj);
    }
  }, items);
  let obj3 = {
    style,
    accessible: true,
    accessibilityState: { selected },
    accessibilityRole: "button",
    accessibilityLabel,
    accessibilityActions: null,
    onAccessibilityAction,
    children: null,
  };
  const items2 = [{ name: "activate" }];
  obj3.accessibilityActions = items2;
  let obj4 = { ref: guildIconRef, onLayout, style: null, children: null };
  const obj5 = { borderRadius, overflow: "hidden", backgroundColor: null };
  let str = "transparent";
  const memo1 = badge.useMemo(() => {
    let tmp = null;
    if (!flag2) {
      const obj = { style: null };
      const size = {
        position: "absolute",
        borderWidth: 1,
        borderColor: iconStroke.color,
        borderRadius,
        width: num,
        height: num,
      };
      obj.style = size;
      tmp = timestampProducer(borderColor, obj);
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
  const items3 = [
    flag2(backgroundColor, obj4),
    memo1,
    memo,
    flag2(closure_12, { backgroundColor, guildId, activityIndicatorState }),
    flag2(closure_11, { backgroundColor, badge, unread }),
  ];
  obj3.children = items3;
  return iconStroke(backgroundColor, obj3);
}
export function SimpleGuildContainerAnimated(arg0) {
  ({ style, selected, size, borderRadius, backgroundColor, folder, usingCutout, onPress } = arg0);
  ({
    guildIconRef,
    guildId,
    children,
    badge,
    unread,
    activityIndicatorState,
    accessibilityLabel,
    onAccessibilityAction,
    onLayout,
    onLongPress,
  } = arg0);
  if (selected) {
    borderRadius = nativeDefault.radii.lg;
  } else if (borderRadius == null) {
    borderRadius = 24;
  }
  items = [closure_13, borderRadius];
  c0 = undefined;
  [tmp5, tmp6] = items;
  class SimpleGuildContainerTsx1 {
    constructor() {
      return closure_0;
    }
  }
  const items1 = [tmp6];
  SimpleGuildContainerTsx1.__closure = items1;
  SimpleGuildContainerTsx1.__workletHash = 4420638679650;
  SimpleGuildContainerTsx1.__initData = tmp5;
  const derivedValue = _mod1652.useDerivedValue(SimpleGuildContainerTsx1);
  const items2 = [closure_14, selected];
  c0 = undefined;
  [tmp8, tmp9] = items2;
  class SimpleGuildContainerTsx2 {
    constructor() {
      num = 0;
      if (closure_0) {
        num = 1;
      }
      return num;
    }
  }
  const items3 = [tmp9];
  SimpleGuildContainerTsx2.__closure = items3;
  SimpleGuildContainerTsx2.__workletHash = 17443294777509;
  SimpleGuildContainerTsx2.__initData = tmp8;
  const derivedValue1 = _mod1652.useDerivedValue(SimpleGuildContainerTsx2);
  const tmp4Result = _mod1652;
  const items4 = [
    closure_15,
    spring_spring.withSpring,
    derivedValue,
    closure_9,
    48,
    useSimpleGuildDefaultColorsDefault().iconBackground,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items4;
  class SimpleGuildContainerTsx3 {
    constructor() {
      size = {
        borderRadius: closure_0(closure_1.get(), closure_2),
        width: closure_3,
        height: closure_3,
        overflow: "hidden",
        backgroundColor: closure_4.color,
      };
      return size;
    }
  }
  const items5 = [tmp13, tmp14, tmp15, tmp16, tmp17];
  SimpleGuildContainerTsx3.__closure = items5;
  SimpleGuildContainerTsx3.__workletHash = 1759111490266;
  SimpleGuildContainerTsx3.__initData = tmp12;
  const animatedStyle = _mod1652.useAnimatedStyle(SimpleGuildContainerTsx3);
  const tmp4Result4 = _mod1652;
  const items6 = [
    closure_16,
    spring_spring.withSpring,
    derivedValue,
    closure_9,
    _mod1652.interpolate,
    derivedValue1,
    nativeDefault.unsafe_rawColors.BRAND_500,
    48,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items6;
  class SimpleGuildContainerTsx4 {
    constructor() {
      size = {
        borderRadius: closure_0(closure_1.get() + 2, closure_2),
        borderWidth: closure_0(closure_3(closure_4.get(), [0, 1], [0, 2]), closure_2),
        borderColor: closure_5,
        position: "absolute",
        top: -2,
        left: -2,
        width: closure_6 + 4,
        height: closure_6 + 4,
      };
      return size;
    }
  }
  const items7 = [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26];
  SimpleGuildContainerTsx4.__closure = items7;
  SimpleGuildContainerTsx4.__workletHash = 3131949958271;
  SimpleGuildContainerTsx4.__initData = tmp19;
  const animatedStyle1 = _mod1652.useAnimatedStyle(SimpleGuildContainerTsx4);
  const tmp4Result5 = _mod1652;
  const items8 = [
    closure_17,
    spring_spring.withSpring,
    derivedValue,
    closure_9,
    _mod1652.interpolate,
    derivedValue1,
    backgroundColor,
    48,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35] = items8;
  class SimpleGuildContainerTsx5 {
    constructor() {
      size = {
        borderRadius: closure_0(closure_1.get(), closure_2),
        borderWidth: closure_0(closure_3(closure_4.get(), [0, 1], [0, 3]), closure_2),
        borderColor: closure_5,
        position: "absolute",
        top: 0,
        left: 0,
        width: closure_6,
        height: closure_6,
      };
      return size;
    }
  }
  const items9 = [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35];
  SimpleGuildContainerTsx5.__closure = items9;
  SimpleGuildContainerTsx5.__workletHash = 976976510918;
  SimpleGuildContainerTsx5.__initData = tmp28;
  const obj2 = { children: null };
  const animatedStyle2 = _mod1652.useAnimatedStyle(SimpleGuildContainerTsx5);
  const items10 = [
    timestampProducer(_modDef1652.View, { style: animatedStyle, children }),
    timestampProducer(_modDef1652.View, { style: animatedStyle2 }),
    timestampProducer(_modDef1652.View, { style: animatedStyle1 }),
    timestampProducer(closure_12, { backgroundColor, guildId, activityIndicatorState }),
    timestampProducer(closure_11, { backgroundColor, badge, unread }),
  ];
  obj2.children = items10;
  const tmp38 = React6(React5, obj2);
  if (null != onPress) {
    const obj3 = {
      ref: guildIconRef,
      style,
      onPress,
      onLongPress,
      accessibilityRole: "button",
      accessible: true,
      accessibilityLabel,
      accessibilityState: null,
      onAccessibilityAction: null,
      onLayout: null,
      children: null,
    };
    const obj4 = { selected };
    obj3.accessibilityState = obj4;
    obj3.onAccessibilityAction = onAccessibilityAction;
    obj3.onLayout = onLayout;
    obj3.children = tmp38;
    let tmp37Result = timestampProducer(React4, obj3);
  } else {
    const obj5 = { style, children: tmp38 };
    tmp37Result = timestampProducer(borderColor, obj5);
  }
  return tmp37Result;
}
