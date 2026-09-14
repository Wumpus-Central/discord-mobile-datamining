// discord_app/modules/channel_list_v2/native/unread_bars/ChannelsUnreadBar.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../design/animation/reanimated/spring/springPresets.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
const RedesignChannelListConstants = fn(10246);
({ getScaledSearchBarHeight: hasOwnProperty, VIEWABILITY_CONFIG: metroRequire } = RedesignChannelListConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = ReanimatedRexport.createAnimatedComponent(fn(17).Pressable);
const createStyles = fn(4636);
let closure_11 = createStyles.createStyles((arg0, arg1) => {
  let num = 5;
  if (arg0) {
    num = 6;
  }
  const obj = {
    position: "absolute",
    right: "50%",
    zIndex: 1,
    marginVertical: 12,
    marginHorizontal: 0,
    paddingRight: 9,
    paddingLeft: num,
    paddingVertical: 4,
    minHeight: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: nativeDefault.radii.round,
    backgroundColor: null,
    elevation: 4,
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: 0.08,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: null,
  };
  const tmp3 = nativeDefault;
  if (arg0) {
    let RED_400 = tmp3.unsafe_rawColors.RED_400;
  } else {
    const colors = tmp3.colors;
    RED_400 = arg1 ? colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT : colors.BACKGROUND_SURFACE_HIGHEST;
  }
  const obj2 = { unreadBar: null, text: null };
  obj.backgroundColor = RED_400;
  obj.shadowColor = nativeDefault.colors.BLACK;
  obj.shadowOffset = { width: 0, height: 1 };
  obj.borderColor = nativeDefault.colors.BORDER_SUBTLE;
  obj2.unreadBar = obj;
  let num2 = 0;
  if (obj3.isAndroid()) {
    num2 = -1;
  }
  obj2.text = { textTransform: "uppercase", marginTop: num2, marginLeft: 2, marginRight: 0 };
  return obj2;
});
let c12 = "text-xs/bold";
let closure_13 = {
  code: "function ChannelsUnreadBarTsx1(){const{shown,position,scrollPosition,listPaddingTop,searchBarHeight,justReachedEnd,runOnJS,resetReachedEnd,height,MARGIN,guildChannelsListUnreadBarInsetEnd,width,withSpring,springStandard,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const animatedShown=shown&&(position==='top'?scrollPosition!=null&&listPaddingTop!=null&&scrollPosition.get()>listPaddingTop+searchBarHeight:!justReachedEnd);if(justReachedEnd){runOnJS(resetReachedEnd)();}const offsetBase=height.get()-MARGIN;const value=animatedShown?position==='bottom'&&guildChannelsListUnreadBarInsetEnd!=null?-guildChannelsListUnreadBarInsetEnd.get():0:offsetBase*(position==='bottom'?1:-1);const opacity=animatedShown?1:0;const scale=width.get()>0?(width.get()+5)/width.get():1;return{opacity:withSpring(opacity,springStandard,'animate-always'),transform:[{translateY:withSpring(value,springStandard)},{translateX:width.get()/2},{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING)}]};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/unread_bars/ChannelsUnreadBar.tsx");

export default noop.memo(function ChannelsUnreadBar(position) {
  position = position.position;
  const shown = position.shown;
  const onPress = position.onPress;
  const isMention = position.isMention;
  const guildChannelsListUnreadBarInsetEnd = position.guildChannelsListUnreadBarInsetEnd;
  const scrollPosition = position.scrollPosition;
  const listPaddingTop = position.listPaddingTop;
  const endReachedCounter = position.endReachedCounter;
  const headerHeight = position.headerHeight;
  let is_mention;
  closure_10 = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let youBarTotalHeight;
  closure_15 = undefined;
  let first1;
  closure_17 = undefined;
  let callback4;
  let flag = isMention;
  if (isMention == null) {
    flag = false;
  }
  const tmp = isMention(guildChannelsListUnreadBarInsetEnd.useState(flag), 2);
  is_mention = tmp[0];
  closure_10 = tmp[1];
  let items = [isMention];
  const effect = obj.useEffect(() => {
    if (null != isMention) {
      closure_10(tmp);
    }
  }, items);
  let tmp6 = sharedValue(is_mention, shown(onPress[10])());
  const fontScale = position(onPress[11]).useFontScale();
  let obj2 = position(onPress[11]);
  let tmp4 = shown;
  let sum = position(onPress[12]).scaleTextLineHeight(sharedValue1, fontScale) + 8;
  const obj3 = position(onPress[12]);
  const tmp9 = sharedValue1;
  sharedValue = position(onPress[6]).useSharedValue(0);
  const obj4 = position(onPress[6]);
  sharedValue1 = position(onPress[6]).useSharedValue(sum);
  let items1 = [sharedValue, sharedValue1];
  const items2 = [shown, is_mention, position];
  const callback = obj.useCallback((nativeEvent) => {
    const width = nativeEvent.nativeEvent.layout.width;
    if (0 !== width) {
      const result = sharedValue.set(width);
    }
    const height = nativeEvent.nativeEvent.layout.height;
    if (0 !== height) {
      const result1 = sharedValue1.set(height);
    }
  }, items1);
  const effect1 = obj.useEffect(() => {
    if (shown) {
      const obj2 = { is_mention, position };
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.CHANNEL_LIST_UNREAD_BADGE_VIEWED, obj2);
    }
  }, items2);
  const items3 = [onPress, position, is_mention];
  const callback1 = obj.useCallback(() => {
    AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.CHANNEL_LIST_UNREAD_BADGE_CLICKED, {
      is_mention,
      position,
    });
    onPress();
  }, items3);
  let obj5 = position(onPress[6]);
  sharedValue2 = position(onPress[6]).useSharedValue(0);
  const items4 = [sharedValue2];
  const items5 = [sharedValue2];
  const callback2 = obj.useCallback(() => {
    const result = sharedValue2.set(1);
  }, items4);
  const callback3 = obj.useCallback(() => {
    const result = sharedValue2.set(0);
  }, items5);
  let obj6 = position(onPress[6]);
  youBarTotalHeight = position(onPress[14]).useYouBarTotalHeight();
  const items6 = [headerHeight, position, youBarTotalHeight];
  const memo = obj.useMemo(() => {
    if ("bottom" === position) {
      const obj2 = { bottom: youBarTotalHeight };
      let obj = obj2;
    } else {
      obj = { top: headerHeight };
    }
    return obj;
  }, items6);
  const tmp21 = scrollPosition(fontScale);
  closure_15 = tmp21;
  const tmp22 = isMention(guildChannelsListUnreadBarInsetEnd.useState(false), 2);
  first1 = tmp22[0];
  closure_17 = tmp22[1];
  const items7 = [endReachedCounter];
  const effect2 = obj.useEffect(() => {
    if (null != endReachedCounter) {
      closure_17(true);
    }
  }, items7);
  callback4 = obj.useCallback(() => {
    const timerId = setTimeout(() => {
      closure_1_17(false);
    }, minimumViewTime.minimumViewTime + 1);
  }, []);
  let obj7 = position(onPress[14]);
  class X {
    constructor() {
      tmp = shown;
      if (!shown) {
        tmp11 = closure_16;
        if (closure_16) {
          tmp12 = closure_0;
          tmp13 = closure_2;
          obj2 = closure_0(closure_2[6]);
          tmp14 = closure_18;
          tmp15 = obj2.runOnJS(closure_18)();
        }
        tmp16 = closure_12;
        num = 12;
        tmp18 = position;
        str2 = "bottom";
        if (tmp) {
          num3 = 0;
          if ("bottom" === tmp18) {
            obj3 = closure_4;
            tmp20 = null;
            num3 = 0;
            if (null != closure_4) {
              num3 = -obj3.get();
            }
          }
          result = num3;
        } else {
          num2 = -1;
          if ("bottom" === tmp18) {
            num2 = 1;
          }
          result = tmp17 * num2;
        }
        num4 = 0;
        num5 = 0;
        if (tmp) {
          num5 = 1;
        }
        obj4 = closure_11;
        num6 = 1;
        if (closure_11.get() > 0) {
          num7 = 5;
          sum = obj4.get() + 5;
          num6 = sum / obj4.get();
        }
        obj1 = { opacity: null, transform: null };
        tmp22 = closure_0;
        tmp23 = closure_2;
        obj6 = closure_0(closure_2[15]);
        tmp24 = closure_0;
        tmp25 = closure_2;
        str3 = "animate-always";
        obj1.opacity = obj6.withSpring(num5, closure_0(closure_2[16]).springStandard, "animate-always");
        obj13 = { translateY: null };
        tmp26 = closure_0;
        tmp27 = closure_2;
        obj8 = closure_0(closure_2[15]);
        tmp28 = closure_0;
        tmp29 = closure_2;
        obj13.translateY = obj8.withSpring(result, closure_0(closure_2[16]).springStandard);
        items = [, ,];
        items[0] = obj13;
        obj14 = { translateX: null };
        num8 = 2;
        obj14.translateX = obj4.get() / 2;
        items[1] = obj14;
        obj15 = { scale: null };
        tmp30 = closure_0;
        tmp31 = closure_2;
        obj11 = closure_0(closure_2[15]);
        tmp32 = closure_0;
        tmp33 = closure_2;
        obj12 = closure_0(closure_2[6]);
        tmp34 = closure_13;
        items1 = [1];
        items1[1] = num6;
        tmp36 = closure_0;
        tmp37 = closure_2;
        interpolateResult = obj12.interpolate(closure_13.get(), [0, 1], items1);
        obj15.scale = obj11.withSpring(interpolateResult, closure_0(closure_2[16]).ON_PRESS_SPRING);
        items[2] = obj15;
        obj1.transform = items;
        return obj1;
      } else {
        tmp2 = position;
        str = "top";
        if ("top" === position) {
          obj = scrollPosition;
          tmp5 = null;
          tmp6 = null != scrollPosition;
          if (tmp6) {
            tmp7 = listPaddingTop;
            tmp6 = null != listPaddingTop;
          }
          if (tmp6) {
            tmp8 = listPaddingTop;
            tmp9 = closure_15;
            tmp6 = obj.get() > listPaddingTop + closure_15;
          }
          tmp4 = tmp6;
        } else {
          tmp3 = closure_16;
          tmp4 = !closure_16;
        }
        tmp10 = tmp4;
      }
      return;
    }
  }
  const size = {
    shown,
    position,
    scrollPosition,
    listPaddingTop,
    searchBarHeight: tmp21,
    justReachedEnd: first1,
    runOnJS: position(onPress[6]).runOnJS,
    resetReachedEnd: callback4,
    height: sharedValue1,
    MARGIN: 12,
    guildChannelsListUnreadBarInsetEnd,
    width: sharedValue,
    withSpring: position(onPress[15]).withSpring,
    springStandard: position(onPress[16]).springStandard,
    interpolate: position(onPress[6]).interpolate,
    pressed: sharedValue2,
    ON_PRESS_SPRING: position(onPress[16]).ON_PRESS_SPRING,
  };
  X.__closure = size;
  X.__workletHash = 978162815161;
  X.__initData = sharedValue2;
  const animatedStyle = position(onPress[6]).useAnimatedStyle(X);
  if (is_mention) {
    let ArrowSmallUpIcon = tmp7(tmp5[17]).AtIcon;
  } else if ("bottom" === position) {
    ArrowSmallUpIcon = tmp7(tmp5[18]).ArrowSmallDownIcon;
  } else {
    ArrowSmallUpIcon = tmp7(tmp5[19]).ArrowSmallUpIcon;
  }
  const tmp4Result = tmp4(onPress[8]);
  if (is_mention) {
    let MOBILE_UNREADBAR_TEXT_DEFAULT = tmp4Result.unsafe_rawColors.WHITE;
  } else {
    MOBILE_UNREADBAR_TEXT_DEFAULT = tmp4Result.colors.MOBILE_UNREADBAR_TEXT_DEFAULT;
  }
  let obj9 = {
    style: null,
    pointerEvents: null,
    accessibilityRole: "button",
    onPress: null,
    onPressIn: null,
    onPressOut: null,
    hitSlop: 12,
    onLayout: null,
    children: null,
  };
  const items8 = [tmp6.unreadBar, memo, animatedStyle];
  obj9.style = items8;
  let str2 = "none";
  let obj8 = position(onPress[6]);
  if (shown) {
    str2 = "auto";
  }
  obj9.pointerEvents = str2;
  obj9.onPress = callback1;
  obj9.onPressIn = callback2;
  obj9.onPressOut = callback3;
  obj9.onLayout = callback;
  const items9 = [headerHeight(ArrowSmallUpIcon, { color: MOBILE_UNREADBAR_TEXT_DEFAULT, size: "xxs" })];
  let obj10 = { style: tmp6.text, variant: tmp9, color: null, maxFontSizeMultiplier: 1.5, children: null };
  let str3 = "mobile-unreadbar-text-default";
  if (is_mention) {
    str3 = "text-overlay-light";
  }
  obj10.color = str3;
  const intl = tmp7(tmp5[21]).intl;
  obj10.children = intl.string(position(onPress[21]).t.y2b7CA);
  items9[1] = headerHeight(position(onPress[20]).Text, obj10);
  obj9.children = items9;
  return is_mention(closure_10, obj9);
});
