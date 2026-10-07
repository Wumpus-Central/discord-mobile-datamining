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
const RedesignChannelListConstants = fn(11711);
({ getScaledSearchBarHeight: hasOwnProperty, VIEWABILITY_CONFIG: metroRequire } = RedesignChannelListConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = ReanimatedRexport.createAnimatedComponent(fn(17).Pressable);
let c11 = 12;
const createStyles = fn(4896);
let closure_12 = createStyles.createStyles((arg0, arg1) => {
  const obj = {
    position: "absolute",
    right: "50%",
    zIndex: 1,
    marginVertical,
    marginHorizontal: 0,
    paddingRight: 9,
    paddingLeft: null,
    paddingVertical: 4,
    minHeight: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: null,
    backgroundColor: null,
    elevation: 4,
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: 0.08,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: null,
  };
  let num = 5;
  if (arg0) {
    num = 6;
  }
  obj.paddingLeft = num;
  obj.borderRadius = nativeDefault.radii.round;
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
let c13 = "text-xs/bold";
let closure_14 = {
  code: 'function ChannelsUnreadBarTsx1(){const{shown,position,scrollPosition,listPaddingTop,searchBarHeight,justReachedEnd,runOnJS,resetReachedEnd,height,MARGIN,guildChannelsListUnreadBarInsetEnd,width,withSpring,springStandard,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const animatedShown=shown&&(position==="top"?scrollPosition!=null&&listPaddingTop!=null&&scrollPosition.get()>listPaddingTop+searchBarHeight:!justReachedEnd);if(justReachedEnd){runOnJS(resetReachedEnd)();}const offsetBase=height.get()-MARGIN;const value=animatedShown?position==="bottom"&&guildChannelsListUnreadBarInsetEnd!=null?-guildChannelsListUnreadBarInsetEnd.get():0:offsetBase*(position==="bottom"?1:-1);const opacity=animatedShown?1:0;const scale=width.get()>0?(width.get()+5)/width.get():1;return{opacity:withSpring(opacity,springStandard,"animate-always"),transform:[{translateY:withSpring(value,springStandard)},{translateX:width.get()/2},{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING)}]};}',
};
let __initData = {
  code: "function ChannelsUnreadBarTsx2(){const{shown,position,scrollPosition,listPaddingTop,searchBarHeight,justReachedEnd,runOnJS,resetReachedEnd,height,MARGIN,guildChannelsListUnreadBarInsetEnd,width,withSpring,springStandard,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const animatedShown=shown&&(position==='top'?scrollPosition!=null&&listPaddingTop!=null&&scrollPosition.get()>listPaddingTop+searchBarHeight:!justReachedEnd);if(justReachedEnd){runOnJS(resetReachedEnd)();}const offsetBase=height.get()-MARGIN;const value=animatedShown?position==='bottom'&&guildChannelsListUnreadBarInsetEnd!=null?-guildChannelsListUnreadBarInsetEnd.get():0:offsetBase*(position==='bottom'?1:-1);const opacity=animatedShown?1:0;const scale=width.get()>0?(width.get()+5)/width.get():1;return{opacity:withSpring(opacity,springStandard,'animate-always'),transform:[{translateY:withSpring(value,springStandard)},{translateX:width.get()/2},{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING)}]};}",
};
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/unread_bars/ChannelsUnreadBar.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (position) => {
        const cResult = position(onPress[11]).c(46);
        position = position.position;
        const shown = position.shown;
        onPress = position.onPress;
        const isMention = position.isMention;
        noop = position.guildChannelsListUnreadBarInsetEnd;
        const scrollPosition = position.scrollPosition;
        const listPaddingTop = position.listPaddingTop;
        const endReachedCounter = position.endReachedCounter;
        let flag = isMention;
        if (isMention == null) {
          flag = false;
        }
        let tmp4 = isMention(noop.useState(flag), 2);
        is_mention = tmp4[0];
        closure_9 = tmp4[1];
        if (cResult[0] !== isMention) {
          const fn = function o() {
            if (null != isMention) {
              closure_9(tmp);
            }
          };
          let items = [isMention];
          cResult[0] = isMention;
          cResult[1] = fn;
          cResult[2] = items;
          let tmp7 = items;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[1];
          tmp7 = cResult[2];
        }
        const effect = obj2.useEffect(tmp6, tmp7);
        closure_12(is_mention, shown(onPress[12])());
        let obj = position(onPress[11]);
        const fontScale = position(onPress[13]).useFontScale();
        const tmpResult = position(onPress[13]);
        let sum = position(onPress[14]).scaleTextLineHeight(c13, fontScale) + 8;
        const tmpResult4 = position(onPress[14]);
        const sharedValue = position(onPress[6]).useSharedValue(0);
        const tmpResult5 = position(onPress[6]);
        const sharedValue1 = position(onPress[6]).useSharedValue(sum);
        if (cResult[3] === sharedValue1) {
          if (cResult[6] === is_mention) {
            if (cResult[7] === position) {
              if (cResult[8] === shown) {
                let tmp15 = cResult[9];
                let tmp16 = cResult[10];
              }
              const effect1 = obj2.useEffect(tmp15, tmp16);
              class F {
                constructor() {
                  if (shown) {
                    tmp = closure_1;
                    tmp2 = closure_2;
                    obj = closure_1(closure_2[15]);
                    tmp3 = AnalyticEvents;
                    obj1 = { is_mention: null, position: null };
                    tmp4 = closure_8;
                    obj1.is_mention = closure_8;
                    tmp5 = position;
                    obj1.position = position;
                    trackWithMetadataResult = obj.trackWithMetadata(
                      AnalyticEvents.CHANNEL_LIST_UNREAD_BADGE_VIEWED,
                      obj1,
                    );
                  }
                  return;
                }
              }
              class W {
                constructor() {
                  obj = closure_1(closure_2[15]);
                  obj1 = { is_mention: closure_8, position };
                  trackWithMetadataResult = obj.trackWithMetadata(
                    AnalyticEvents.CHANNEL_LIST_UNREAD_BADGE_CLICKED,
                    obj1,
                  );
                  tmp2 = onPress();
                  return;
                }
              }
              cResult[11] = is_mention;
              cResult[12] = onPress;
              cResult[13] = position;
              cResult[14] = W;
            }
          }
          class F {
            constructor() {
              if (shown) {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[15]);
                tmp3 = AnalyticEvents;
                obj1 = { is_mention: null, position: null };
                tmp4 = closure_8;
                obj1.is_mention = closure_8;
                tmp5 = position;
                obj1.position = position;
                trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.CHANNEL_LIST_UNREAD_BADGE_VIEWED, obj1);
              }
              return;
            }
          }
          tmp17[0] = shown;
          tmp17[1] = is_mention;
          tmp17[2] = position;
          cResult[6] = is_mention;
          cResult[7] = position;
          cResult[8] = shown;
          cResult[9] = F;
          cResult[10] = tmp17;
          tmp16 = tmp17;
          tmp15 = F;
        }
        class D {
          constructor(arg0) {
            width = position.nativeEvent.layout.width;
            if (0 !== width) {
              tmp = closure_10;
              result = closure_10.set(width);
            }
            height = position.nativeEvent.layout.height;
            if (0 !== height) {
              tmp3 = closure_11;
              result1 = closure_11.set(height);
            }
            return;
          }
        }
        cResult[3] = sharedValue1;
        cResult[4] = sharedValue;
        cResult[5] = D;
        const tmpResult6 = position(onPress[6]);
      }
    : (position) => {
        position = position.position;
        const shown = position.shown;
        const onPress = position.onPress;
        const isMention = position.isMention;
        const guildChannelsListUnreadBarInsetEnd = position.guildChannelsListUnreadBarInsetEnd;
        const scrollPosition = position.scrollPosition;
        const listPaddingTop = position.listPaddingTop;
        const endReachedCounter = position.endReachedCounter;
        const headerHeight = position.headerHeight;
        is_mention = undefined;
        closure_10 = undefined;
        let sharedValue;
        let sharedValue1;
        let sharedValue2;
        let youBarTotalHeight;
        __initData = undefined;
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
        let tmp6 = sharedValue1(is_mention, shown(onPress[12])());
        const fontScale = position(onPress[13]).useFontScale();
        let obj2 = position(onPress[13]);
        let tmp4 = shown;
        let sum = position(onPress[14]).scaleTextLineHeight(sharedValue2, fontScale) + 8;
        const obj3 = position(onPress[14]);
        const tmp9 = sharedValue2;
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
        youBarTotalHeight = position(onPress[16]).useYouBarTotalHeight();
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
        __initData = tmp21;
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
          }, timestampProducer.minimumViewTime + 1);
        }, []);
        let obj7 = position(onPress[16]);
        const fn = function q() {
          if (!shown) {
            if (first1) {
              ReanimatedRexport2.runOnJS(callback4)();
            }
            if (shown) {
              let num2 = 0;
              if ("bottom" === position) {
                num2 = 0;
                if (null != guildChannelsListUnreadBarInsetEnd) {
                  num2 = -guildChannelsListUnreadBarInsetEnd.get();
                }
              }
              let result = num2;
            } else {
              let num = -1;
              if ("bottom" === position) {
                num = 1;
              }
              result = tmp18 * num;
            }
            let num4 = 0;
            if (shown) {
              num4 = 1;
            }
            let num5 = 1;
            if (sharedValue.get() > 0) {
              const sum = sharedValue.get() + 5;
              num5 = sum / sharedValue.get();
            }
            const obj5 = {
              opacity: spring.withSpring(num4, springPresets.springStandard, "animate-always"),
              transform: null,
            };
            const obj7 = { translateY: null };
            obj7.translateY = spring.withSpring(result, springPresets.springStandard);
            const items = [obj7, ,];
            const obj9 = { translateX: sharedValue.get() / 2 };
            items[1] = obj9;
            const obj10 = { scale: null };
            const obj11 = spring;
            const items1 = [1, num5];
            obj10.scale = obj11.withSpring(
              ReanimatedRexport2.interpolate(sharedValue2.get(), [0, 1], items1),
              springPresets.ON_PRESS_SPRING,
            );
            items[2] = obj10;
            obj5.transform = items;
            return obj5;
          } else if ("top" === position) {
            let tmp6 = null != scrollPosition;
            if (tmp6) {
              tmp6 = null != listPaddingTop;
            }
            if (tmp6) {
              tmp6 = scrollPosition.get() > listPaddingTop + closure_15;
            }
          } else {
            const tmp4 = !first1;
          }
        };
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
          MARGIN: sharedValue,
          guildChannelsListUnreadBarInsetEnd,
          width: sharedValue,
          withSpring: position(onPress[17]).withSpring,
          springStandard: position(onPress[18]).springStandard,
          interpolate: position(onPress[6]).interpolate,
          pressed: sharedValue2,
          ON_PRESS_SPRING: position(onPress[18]).ON_PRESS_SPRING,
        };
        fn.__closure = size;
        fn.__workletHash = 5832028896538;
        fn.__initData = __initData;
        const animatedStyle = position(onPress[6]).useAnimatedStyle(fn);
        if (is_mention) {
          let ArrowSmallUpIcon = tmp7(tmp5[19]).AtIcon;
        } else if ("bottom" === position) {
          ArrowSmallUpIcon = tmp7(tmp5[20]).ArrowSmallDownIcon;
        } else {
          ArrowSmallUpIcon = tmp7(tmp5[21]).ArrowSmallUpIcon;
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
          hitSlop: null,
          onLayout: null,
          children: null,
        };
        const items8 = [tmp6.unreadBar, memo, animatedStyle];
        obj9.style = items8;
        let str2 = "none";
        let obj8 = position(onPress[6]);
        const tmp26 = sharedValue;
        if (shown) {
          str2 = "auto";
        }
        obj9.pointerEvents = str2;
        obj9.onPress = callback1;
        obj9.onPressIn = callback2;
        obj9.onPressOut = callback3;
        obj9.hitSlop = tmp26;
        obj9.onLayout = callback;
        const items9 = [headerHeight(ArrowSmallUpIcon, { color: MOBILE_UNREADBAR_TEXT_DEFAULT, size: "xxs" })];
        let obj10 = { style: tmp6.text, variant: tmp9, color: null, maxFontSizeMultiplier: 1.5, children: null };
        let str3 = "mobile-unreadbar-text-default";
        if (is_mention) {
          str3 = "text-overlay-light";
        }
        obj10.color = str3;
        const intl = tmp7(tmp5[22]).intl;
        obj10.children = intl.string(position(onPress[22]).t.y2b7CA);
        items9[1] = headerHeight(position(onPress[23]).Text, obj10);
        obj9.children = items9;
        return is_mention(closure_10, obj9);
      },
);
