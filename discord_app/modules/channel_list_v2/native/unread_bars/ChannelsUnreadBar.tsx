// discord_app/modules/channel_list_v2/native/unread_bars/ChannelsUnreadBar.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "ArrowSmallUpIcon";
import hairlineWidth from "hairlineWidth";
import { AnalyticEvents } from "ME";
import jsxProd from "getSystemLocale";
import createCacheKey from "createCacheKey";
import importDefaultResult from "module_4116";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";

let c5;
let c9;
let closure_6;
let metroImportAll;
const require = arg1;
let c4 = importAllResult;
({ getScaledSearchBarHeight: c5, VIEWABILITY_CONFIG: closure_6 } = hairlineWidth);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let closure_10 = require("module_4116").createAnimatedComponent(require("AtIcon").Pressable);
let closure_11 = createCacheKey.createStyles((arg0, arg1) => {
  let num = 5;
  if (arg0) {
    num = 6;
  }
  let obj = { position: "absolute", right: "50%", zIndex: 1, marginVertical: 12, marginHorizontal: 0, paddingRight: 9, paddingLeft: num, paddingVertical: 4, minHeight: 24, flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: Themes.radii.round, backgroundColor: null, elevation: 4, shadowColor: null, shadowOffset: null, shadowOpacity: 0.08, shadowRadius: 4, borderWidth: 1, borderColor: null };
  const tmp3 = Themes;
  if (arg0) {
    let RED_400 = tmp3.unsafe_rawColors.RED_400;
  } else {
    const colors = tmp3.colors;
    RED_400 = arg1 ? colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT : colors.BACKGROUND_SURFACE_HIGHEST;
  }
  obj = { unreadBar: null, text: null };
  obj[13] = RED_400;
  obj[15] = Themes.colors.BLACK;
  obj[16] = { width: 0, height: 1 };
  obj[20] = Themes.colors.BORDER_SUBTLE;
  obj[0] = obj;
  let num2 = 0;
  if (obj3.isAndroid()) {
    num2 = -1;
  }
  obj[1] = { textTransform: "uppercase", marginTop: num2, marginLeft: 2, marginRight: 0 };
  return obj;
});
let c12 = "text-xs/bold";
let closure_13 = { code: "function ChannelsUnreadBarTsx1(){const{shown,position,scrollPosition,listPaddingTop,searchBarHeight,justReachedEnd,runOnJS,resetReachedEnd,height,MARGIN,guildChannelsListUnreadBarInsetEnd,width,withSpring,springStandard,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const animatedShown=shown&&(position==='top'?scrollPosition!=null&&listPaddingTop!=null&&scrollPosition.get()>listPaddingTop+searchBarHeight:!justReachedEnd);if(justReachedEnd){runOnJS(resetReachedEnd)();}const offsetBase=height.get()-MARGIN;const value=animatedShown?position==='bottom'&&guildChannelsListUnreadBarInsetEnd!=null?-guildChannelsListUnreadBarInsetEnd.get():0:offsetBase*(position==='bottom'?1:-1);const opacity=animatedShown?1:0;const scale=width.get()>0?(width.get()+5)/width.get():1;return{opacity:withSpring(opacity,springStandard,'animate-always'),transform:[{translateY:withSpring(value,springStandard)},{translateX:width.get()/2},{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING)}]};}" };
const memoResult = importAllResult.memo(function ChannelsUnreadBar(position) {
  position = position.position;
  const shown = position.shown;
  const onPress = position.onPress;
  const isMention = position.isMention;
  const guildChannelsListUnreadBarInsetEnd = position.guildChannelsListUnreadBarInsetEnd;
  const scrollPosition = position.scrollPosition;
  const listPaddingTop = position.listPaddingTop;
  const endReachedCounter = position.endReachedCounter;
  const headerHeight = position.headerHeight;
  let first;
  let closure_10;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let youBarTotalHeight;
  let c15;
  let first1;
  let closure_17;
  let callback4;
  let obj = guildChannelsListUnreadBarInsetEnd;
  let flag = isMention;
  if (isMention == null) {
    flag = false;
  }
  const tmp = isMention(guildChannelsListUnreadBarInsetEnd.useState(flag), 2);
  first = tmp[0];
  closure_10 = tmp[1];
  let items = [isMention];
  const effect = obj.useEffect(() => {
    if (null != isMention) {
      callback(tmp);
    }
  }, items);
  let tmp6 = sharedValue(first, shown(onPress[10])());
  let obj1 = position(onPress[11]);
  const fontScale = obj1.useFontScale();
  let sum = position(onPress[12]).scaleTextLineHeight(sharedValue1, fontScale) + 8;
  const obj3 = position(onPress[12]);
  let tmp4 = shown;
  const tmp9 = sharedValue1;
  sharedValue = position(onPress[6]).useSharedValue(0);
  const obj4 = position(onPress[6]);
  sharedValue1 = position(onPress[6]).useSharedValue(sum);
  let items1 = [sharedValue, sharedValue1];
  const items2 = [shown, first, position];
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
      let obj = shown(onPress[13]);
      obj = { is_mention: null, position: null };
      obj[0] = first;
      obj[1] = position;
      obj.trackWithMetadata(endReachedCounter.CHANNEL_LIST_UNREAD_BADGE_VIEWED, obj);
    }
  }, items2);
  const items3 = [onPress, position, first];
  const callback1 = obj.useCallback(() => {
    let obj = shown(onPress[13]);
    obj = { is_mention: first, position };
    obj.trackWithMetadata(endReachedCounter.CHANNEL_LIST_UNREAD_BADGE_CLICKED, obj);
    onPress();
  }, items3);
  const obj5 = position(onPress[6]);
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
      let obj = { bottom: null };
      obj[0] = youBarTotalHeight;
    } else {
      obj = { top: null };
      obj[0] = headerHeight;
    }
    return obj;
  }, items6);
  const tmp21 = scrollPosition(fontScale);
  c15 = tmp21;
  const tmp22 = isMention(obj.useState(false), 2);
  first1 = tmp22[0];
  closure_17 = tmp22[1];
  const items7 = [endReachedCounter];
  const effect2 = obj.useEffect(() => {
    if (null != endReachedCounter) {
      callback2(true);
    }
  }, items7);
  callback4 = obj.useCallback(() => {
    const timerId = setTimeout(() => {
      callback(false);
    }, listPaddingTop.minimumViewTime + 1);
  }, []);
  const obj7 = position(onPress[14]);
  class X {
    constructor() {
      tmp = shown;
      if (!shown) {
        tmp11 = c16;
        if (c16) {
          tmp12 = position;
          tmp13 = onPress;
          obj2 = position(onPress[6]);
          tmp14 = c18;
          tmp15 = obj2.runOnJS(c18)();
        }
        tmp16 = c12;
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
        obj4 = c11;
        num6 = 1;
        if (c11.get() > 0) {
          num7 = 5;
          sum = obj4.get() + 5;
          num6 = sum / obj4.get();
        }
        obj = { opacity: null, transform: null };
        tmp22 = position;
        tmp23 = onPress;
        obj6 = position(onPress[15]);
        tmp24 = position;
        tmp25 = onPress;
        str3 = "animate-always";
        obj[0] = obj6.withSpring(num5, position(onPress[16]).springStandard, "animate-always");
        obj1 = { translateY: null };
        tmp26 = position;
        tmp27 = onPress;
        obj8 = position(onPress[15]);
        tmp28 = position;
        tmp29 = onPress;
        obj1[0] = obj8.withSpring(result, position(onPress[16]).springStandard);
        items = [, , ];
        items[0] = obj1;
        obj2 = { translateX: null };
        num8 = 2;
        obj2[0] = obj4.get() / 2;
        items[1] = obj2;
        obj3 = { scale: null };
        tmp30 = position;
        tmp31 = onPress;
        obj11 = position(onPress[15]);
        tmp32 = position;
        tmp33 = onPress;
        obj12 = position(onPress[6]);
        tmp34 = c13;
        items1 = [1];
        items1[1] = num6;
        tmp36 = position;
        tmp37 = onPress;
        interpolateResult = obj12.interpolate(c13.get(), [0, 1], items1);
        obj3[0] = obj11.withSpring(interpolateResult, position(onPress[16]).ON_PRESS_SPRING);
        items[2] = obj3;
        obj[1] = items;
        return obj;
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
            tmp9 = useMemo;
            tmp6 = obj.get() > listPaddingTop + useMemo;
          }
          tmp4 = tmp6;
        } else {
          tmp3 = c16;
          tmp4 = !c16;
        }
        tmp10 = tmp4;
      }
      return;
    }
  }
  obj = { shown, position, scrollPosition, listPaddingTop, searchBarHeight: tmp21, justReachedEnd: first1, runOnJS: position(onPress[6]).runOnJS, resetReachedEnd: callback4, height: sharedValue1, MARGIN: 12, guildChannelsListUnreadBarInsetEnd, width: sharedValue, withSpring: position(onPress[15]).withSpring, springStandard: position(onPress[16]).springStandard, interpolate: position(onPress[6]).interpolate, pressed: sharedValue2, ON_PRESS_SPRING: position(onPress[16]).ON_PRESS_SPRING };
  X.__closure = obj;
  X.__workletHash = 978162815161;
  X.__initData = sharedValue2;
  const animatedStyle = position(onPress[6]).useAnimatedStyle(X);
  if (first) {
    let ArrowSmallUpIcon = tmp7(tmp5[17]).AtIcon;
  } else if ("bottom" === position) {
    ArrowSmallUpIcon = tmp7(tmp5[18]).ArrowSmallDownIcon;
  } else {
    ArrowSmallUpIcon = tmp7(tmp5[19]).ArrowSmallUpIcon;
  }
  const tmp4Result = tmp4(onPress[8]);
  if (first) {
    let MOBILE_UNREADBAR_TEXT_DEFAULT = tmp4Result.unsafe_rawColors.WHITE;
  } else {
    MOBILE_UNREADBAR_TEXT_DEFAULT = tmp4Result.colors.MOBILE_UNREADBAR_TEXT_DEFAULT;
  }
  obj = { style: items8, pointerEvents: null, accessibilityRole: "button", onPress: null, onPressIn: null, onPressOut: null, hitSlop: 12, onLayout: null, children: null };
  items8 = [tmp6.unreadBar, memo, animatedStyle];
  let str2 = "none";
  let obj8 = position(onPress[6]);
  if (shown) {
    str2 = "auto";
  }
  obj[1] = str2;
  obj[3] = callback1;
  obj[4] = callback2;
  obj[5] = callback3;
  obj[7] = callback;
  const items9 = [headerHeight(ArrowSmallUpIcon, { color: MOBILE_UNREADBAR_TEXT_DEFAULT, size: "xxs" }), ];
  obj1 = { style: tmp6.text, variant: tmp9, color: null, maxFontSizeMultiplier: 1.5, children: null };
  let str3 = "mobile-unreadbar-text-default";
  if (first) {
    str3 = "text-overlay-light";
  }
  obj1[2] = str3;
  const intl = tmp7(tmp5[21]).intl;
  obj1[4] = intl.string(position(onPress[21]).t.y2b7CA);
  items9[1] = headerHeight(position(onPress[20]).Text, obj1);
  obj[8] = items9;
  return first(closure_10, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/channel_list_v2/native/unread_bars/ChannelsUnreadBar.tsx");

export default memoResult;