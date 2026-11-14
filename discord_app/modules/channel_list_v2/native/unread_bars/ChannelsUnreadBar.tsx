// === Module 18899: ChannelsUnreadBar ===

// Module 18899 (ChannelsUnreadBar)
import nativeDefault from "native" /* 575 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 6067 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 9061 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import module_1655 from "module_1655" /* 1655 */;

const require = globalThis.__r;

const require = fn;
const RedesignChannelListConstants = fn(6060);
({ getScaledSearchBarHeight: hasOwnProperty, VIEWABILITY_CONFIG: closure_6 } = RedesignChannelListConstants);
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = module_1655.createAnimatedComponent(fn(17).Pressable);
const createStyles = fn(5306);
let closure_11 = createStyles.createStyles((arg0, arg1) => {
  let num = 5;
  if (arg0) {
    num = 6;
  }
  const obj = { position: "absolute", right: "50%", zIndex: 1, marginVertical: 12, marginHorizontal: 0, paddingRight: 9, paddingLeft: num, paddingVertical: 4, minHeight: 24, flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.round, backgroundColor: null, elevation: 4, shadowColor: null, shadowOffset: null, shadowOpacity: 0.08, shadowRadius: 4, borderWidth: 1, borderColor: null };
  const tmp3 = nativeDefault;
  if (arg0) {
    let RED_400 = tmp3.unsafe_rawColors.RED_400;
  } else {
    colors = tmp3.colors;
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
  obj2.text = { marginTop: num2, marginLeft: 2, marginRight: 0 };
  return obj2;
});
let c12 = "body-xs/semibold";
let closure_13 = { code: "(function ChannelsUnreadBarTsx1(){let[shown,position,scrollPosition,listPaddingTop,searchBarHeight,justReachedEnd,scheduleOnRN,resetReachedEnd,height,MARGIN,guildChannelsListUnreadBarInsetEnd,width,withSpring,springStandard,interpolate,pressed,ON_PRESS_SPRING]=this.__closure;const animatedShown=shown&&(position==='top'?scrollPosition!=null&&listPaddingTop!=null&&scrollPosition.get()>listPaddingTop+searchBarHeight:!justReachedEnd);if(justReachedEnd){scheduleOnRN(resetReachedEnd);}const offsetBase=height.get()-MARGIN;const value=animatedShown?position==='bottom'&&guildChannelsListUnreadBarInsetEnd!=null?-guildChannelsListUnreadBarInsetEnd.get():0:offsetBase*(position==='bottom'?1:-1);const opacity=animatedShown?1:0;const scale=width.get()>0?(width.get()+5)/width.get():1;return{opacity:withSpring(opacity,springStandard,'animate-always'),transform:[{translateY:withSpring(value,springStandard)},{translateX:width.get()/2},{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING)}]};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/unread_bars/ChannelsUnreadBar.tsx");

export default noop.memo(function ChannelsUnreadBar(position) {
  position = position.position;
  _require = position;
  const shown = position.shown;
  importDefault = shown;
  const onPress = position.onPress;
  dependencyMap = onPress;
  const isMention = position.isMention;
  _slicedToArray = isMention;
  const endReachedCounter = position.endReachedCounter;
  noop = endReachedCounter;
  const headerHeight = position.headerHeight;
  c5 = headerHeight;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  let flag = isMention;
  ({ guildChannelsListUnreadBarInsetEnd, scrollPosition, listPaddingTop } = position);
  if (isMention == null) {
    flag = false;
  }
  [first, c7] = noop.useState(flag);
  items = [isMention];
  const effect = obj.useEffect(() => {
    if (null != c3) {
      _undefined2(tmp);
    }
  }, items);
  let tmp6 = c11(first, useIsUsingClientThemeDefault());
  const fontScale = require("useFontScale").useFontScale();
  let obj2 = require("useFontScale");
  let sum = require("useScaledTextLineHeight").scaleTextLineHeight(c12, fontScale) + 8;
  const obj3 = require("useScaledTextLineHeight");
  const tmp9 = c12;
  const sharedValue = require("module_1655").useSharedValue(0);
  let obj4 = require("module_1655");
  const sharedValue1 = require("module_1655").useSharedValue(sum);
  let items1 = [sharedValue, sharedValue1];
  const items2 = [shown, first, position];
  const callback = obj.useCallback((nativeEvent) => {
    const width = nativeEvent.nativeEvent.layout.width;
    if (0 !== width) {
      const result = _undefined3.set(width);
    }
    const height = nativeEvent.nativeEvent.layout.height;
    if (0 !== height) {
      const result1 = _undefined4.set(height);
    }
  }, items1);
  const effect1 = obj.useEffect(() => {
    if (c1) {
      const obj2 = { is_mention, position };
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.CHANNEL_LIST_UNREAD_BADGE_VIEWED, obj2);
    }
  }, items2);
  const items3 = [onPress, position, first];
  const callback1 = obj.useCallback(() => {
    AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.CHANNEL_LIST_UNREAD_BADGE_CLICKED, { is_mention, position });
    _undefined();
  }, items3);
  let obj5 = require("module_1655");
  const sharedValue2 = require("module_1655").useSharedValue(0);
  const items4 = [sharedValue2];
  const items5 = [sharedValue2];
  const callback2 = obj.useCallback(() => {
    const result = _undefined5.set(1);
  }, items4);
  const callback3 = obj.useCallback(() => {
    const result = _undefined5.set(0);
  }, items5);
  let obj6 = require("module_1655");
  const youBarTotalHeight = require("useYouBarTotalHeight").useYouBarTotalHeight();
  const items6 = [headerHeight, position, youBarTotalHeight];
  const memo = obj.useMemo(() => {
    if ("bottom" === c0) {
      const obj2 = { bottom };
      let obj = obj2;
    } else {
      obj = { top };
    }
    return obj;
  }, items6);
  let obj7 = require("useYouBarTotalHeight");
  const tmp22 = _slicedToArray(noop.useState(false), 2);
  const items7 = [endReachedCounter];
  const effect2 = obj.useEffect(() => {
    if (null != c4) {
      _undefined6(true);
    }
  }, items7);
  const callback4 = obj.useCallback(() => {
    const timerId = setTimeout(() => {
      _undefined6(false);
    }, timestampProducer.minimumViewTime + 1);
  }, []);
  const tmp21 = c5(fontScale);
  const items8 = [c13, shown, position, scrollPosition, listPaddingTop, tmp21, tmp22[0], require("module_1708").scheduleOnRN, callback4, sharedValue1, 12, guildChannelsListUnreadBarInsetEnd, sharedValue, require("spring/spring").withSpring, require("springPresets").springStandard, require("module_1655").interpolate, sharedValue2, require("springPresets").ON_PRESS_SPRING];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  c15 = undefined;
  c16 = undefined;
  [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42] = items8;
  class ChannelsUnreadBarTsx1 {
    constructor() {
      tmp = closure_0;
      if (!closure_0) {
        tmp11 = closure_5;
        if (closure_5) {
          tmp12 = closure_6;
          tmp13 = closure_7;
          tmp14 = closure_6(closure_7);
        }
        tmp15 = closure_8;
        tmp16 = closure_9;
        tmp18 = closure_1;
        str2 = "bottom";
        if (tmp) {
          num2 = 0;
          if ("bottom" === tmp18) {
            obj2 = closure_10;
            tmp20 = null;
            num2 = 0;
            if (null != closure_10) {
              num2 = -obj2.get();
            }
          }
          result = num2;
        } else {
          num = -1;
          if ("bottom" === tmp18) {
            num = 1;
          }
          result = tmp17 * num;
        }
        num3 = 0;
        num4 = 0;
        if (tmp) {
          num4 = 1;
        }
        obj3 = closure_11;
        num5 = 1;
        if (closure_11.get() > 0) {
          num6 = 5;
          sum = obj3.get() + 5;
          num5 = sum / obj3.get();
        }
        obj1 = { opacity: null, transform: null };
        tmp22 = closure_12;
        tmp23 = closure_13;
        str3 = "animate-always";
        obj1.opacity = closure_12(num4, closure_13, "animate-always");
        obj8 = { translateY: null };
        obj8.translateY = closure_12(result, closure_13);
        items = [, , ];
        items[0] = obj8;
        obj9 = { translateX: null };
        num7 = 2;
        obj9.translateX = obj3.get() / 2;
        items[1] = obj9;
        obj10 = { scale: null };
        tmp24 = closure_14;
        tmp25 = closure_15;
        items1 = [1];
        items1[1] = num5;
        tmp26 = closure_16;
        obj10.scale = closure_12(closure_14(closure_15.get(), [0, 1], items1), closure_16);
        items[2] = obj10;
        obj1.transform = items;
        return obj1;
      } else {
        tmp2 = closure_1;
        str = "top";
        if ("top" === closure_1) {
          obj = closure_2;
          tmp5 = null;
          tmp6 = null != closure_2;
          if (tmp6) {
            tmp7 = closure_3;
            tmp6 = null != closure_3;
          }
          if (tmp6) {
            tmp8 = closure_3;
            tmp9 = closure_4;
            tmp6 = obj.get() > closure_3 + closure_4;
          }
          tmp4 = tmp6;
        } else {
          tmp3 = closure_5;
          tmp4 = !closure_5;
        }
        tmp10 = tmp4;
      }
      return;
    }
  }
  const items9 = [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42];
  ChannelsUnreadBarTsx1.__closure = items9;
  ChannelsUnreadBarTsx1.__workletHash = 15777306615393;
  ChannelsUnreadBarTsx1.__initData = tmp25;
  const animatedStyle = require("module_1655").useAnimatedStyle(ChannelsUnreadBarTsx1);
  if (first) {
    let ArrowSmallUpIcon = tmp7(8087).AtIcon;
  } else if ("bottom" === position) {
    ArrowSmallUpIcon = tmp7(14033).ArrowSmallDownIcon;
  } else {
    ArrowSmallUpIcon = tmp7(14031).ArrowSmallUpIcon;
  }
  const tmp4Result = nativeDefault;
  if (first) {
    let MOBILE_UNREADBAR_TEXT_DEFAULT = tmp4Result.unsafe_rawColors.WHITE;
  } else {
    MOBILE_UNREADBAR_TEXT_DEFAULT = tmp4Result.colors.MOBILE_UNREADBAR_TEXT_DEFAULT;
  }
  const obj9 = { style: null, pointerEvents: null, accessibilityRole: "button", onPress: null, onPressIn: null, onPressOut: null, hitSlop: 12, onLayout: null, children: null };
  const items10 = [tmp6.unreadBar, memo, animatedStyle];
  obj9.style = items10;
  let str2 = "none";
  const obj8 = require("module_1655");
  if (shown) {
    str2 = "auto";
  }
  obj9.pointerEvents = str2;
  obj9.onPress = callback1;
  obj9.onPressIn = callback2;
  obj9.onPressOut = callback3;
  obj9.onLayout = callback;
  const items11 = [c8(ArrowSmallUpIcon, { color: MOBILE_UNREADBAR_TEXT_DEFAULT, size: "xxs" }), ];
  const obj10 = { style: tmp6.text, variant: tmp9, color: null, maxFontSizeMultiplier: 1.5, children: null };
  let str3 = "mobile-unreadbar-text-default";
  if (first) {
    str3 = "text-overlay-light";
  }
  obj10.color = str3;
  const intl = tmp7(1113).intl;
  const tmp44Result = c8(ArrowSmallUpIcon, { color: MOBILE_UNREADBAR_TEXT_DEFAULT, size: "xxs" });
  const tmp47 = c9;
  const tmp48 = c10;
  obj10.children = intl.string(require("util").t.y2b7CA).toLocaleUpperCase(require("util").intl.currentLocale);
  items11[1] = c8(require("Text/Text").Text, obj10);
  obj9.children = items11;
  return tmp47(tmp48, obj9);
});