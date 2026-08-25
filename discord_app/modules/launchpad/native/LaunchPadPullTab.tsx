// === Module 16314: LAUNCH_PAD_PULL_TAB_BORDER_RADIUS ===

// Module 16314 (LAUNCH_PAD_PULL_TAB_BORDER_RADIUS)
import ThemesDefault from "Themes" /* 712 */;
import { Pressable } from "get ActivityIndicator" /* 17 */;
import LAUNCH_PAD_SPRING_CONFIG from "LAUNCH_PAD_SPRING_CONFIG" /* 10512 */;
import { CHAT_INPUT_HEIGHT } from "TextAreaCta" /* 11530 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
({ LAUNCH_PAD_MARGIN: c4, LAUNCH_PAD_PULL_TAB_BORDER_RADIUS } = LAUNCH_PAD_SPRING_CONFIG);
const LAUNCH_PAD_PULL_TAB_HEIGHT = LAUNCH_PAD_SPRING_CONFIG.LAUNCH_PAD_PULL_TAB_HEIGHT;
({ LAUNCH_PAD_PULL_TAB_HIT_SLOP: error, LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET: closure_8, LAUNCH_PAD_PULL_TAB_SCALE_FACTOR: c9, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET: c10, LAUNCH_PAD_PULL_TAB_WIDTH, LAUNCH_PAD_SPRING_CONFIG: unpackModuleId } = LAUNCH_PAD_SPRING_CONFIG);
let obj = { pullTab: null, pullTabButton: null, pullTabOpened: null, pullTabClosed: null };
obj = { position: "absolute", right: 0, width: LAUNCH_PAD_PULL_TAB_WIDTH, height: LAUNCH_PAD_PULL_TAB_HEIGHT, borderTopLeftRadius: LAUNCH_PAD_PULL_TAB_BORDER_RADIUS, borderBottomLeftRadius: LAUNCH_PAD_PULL_TAB_BORDER_RADIUS, borderWidth: 1, borderTopWidth: 1, borderColor: "rgba(0, 0, 0, 0.08)" };
const merged = Object.assign(ThemesDefault.shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj[0] = obj;
obj[1] = { width: LAUNCH_PAD_PULL_TAB_WIDTH, height: LAUNCH_PAD_PULL_TAB_HEIGHT, justifyContent: "center", alignItems: "center" };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[2] = createCacheKey;
obj[3] = { backgroundColor: ThemesDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND };
let closure_14 = createCacheKey.createStyles(obj);
let closure_15 = { code: "function LaunchPadPullTabTsx1(){const{keyboardHeight}=this.__closure;return keyboardHeight.get();}" };
let closure_16 = { code: "function LaunchPadPullTabTsx2(keyboardHeight,keyboardHeightPrev){const{launchPadSharedState,updaters,keyboardHeightOpened,launchPadPullTabState,CHAT_INPUT_HEIGHT,LAUNCH_PAD_MARGIN,getWindowDimensionsWorklet,LAUNCH_PAD_PULL_TAB_HEIGHT,LAUNCH_PAD_PULL_TAB_SCALE_OFFSET}=this.__closure;if(launchPadSharedState.get()!==0){updaters.setLaunchPadPullTabMinimized(false);return;}if(keyboardHeightPrev==null||keyboardHeight===keyboardHeightPrev){return;}if(keyboardHeight<keyboardHeightPrev){var _keyboardHeightOpened;if(keyboardHeight===0){updaters.setLaunchPadPullTabMinimized(false);}if(keyboardHeightOpened.get()==null){keyboardHeightOpened.set(keyboardHeightPrev);}const keyboardClosePercent=1-keyboardHeight/((_keyboardHeightOpened=keyboardHeightOpened.get())!==null&&_keyboardHeightOpened!==void 0?_keyboardHeightOpened:keyboardHeightPrev);const keyboardOffsetRetractionAmount=launchPadPullTabState.get().offset*keyboardClosePercent;updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position+keyboardOffsetRetractionAmount,launchPadPullTabState.get().offset-keyboardOffsetRetractionAmount);}else{updaters.setLaunchPadPullTabMinimized(true);if(keyboardHeightOpened.get()!=null){keyboardHeightOpened.set(undefined);}const keyboardWithChatInput=keyboardHeight+CHAT_INPUT_HEIGHT+LAUNCH_PAD_MARGIN*2;const spaceUnderPullTab=getWindowDimensionsWorklet({ignoreKeyboard:true}).height-(launchPadPullTabState.get().position+LAUNCH_PAD_PULL_TAB_HEIGHT+LAUNCH_PAD_PULL_TAB_SCALE_OFFSET);const offset=spaceUnderPullTab>keyboardWithChatInput?0:keyboardWithChatInput-spaceUnderPullTab;if(offset>0){updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position-offset,launchPadPullTabState.get().offset+offset);}}}" };
let closure_17 = { code: "function LaunchPadPullTabTsx3(){const{isMinimized,gestureState,LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET,interpolate,launchPadSharedState,windowDimensions,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_BORDER_RADIUS,interpolateColor,LAUNCH_PAD_MARGIN,backgroundColorStart,backgroundColorEnd,withSpring,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;let translateX=isMinimized.get()&&!gestureState.get().active?LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET:interpolate(launchPadSharedState.get(),[0,1],[0,-(windowDimensions.get().width-16)]);if(launchPadSharedState.get()>0.9){translateX=-windowDimensions.get().width;}else if(gestureState.get().active){if(gestureState.get().requiresPop){translateX+=gestureState.get().positionOffsetX*0.3;}else{translateX-=4;}}const translateY=launchPadPullTabState.get().position;const borderRadius=launchPadSharedState.get()<=0&&!gestureState.get().active?0:LAUNCH_PAD_PULL_TAB_BORDER_RADIUS;const backgroundColor=interpolateColor(launchPadSharedState.get()*windowDimensions.get().width,[0,LAUNCH_PAD_MARGIN],[backgroundColorStart,backgroundColorEnd]);return{transform:[{translateX:withSpring(translateX,LAUNCH_PAD_SPRING_CONFIG)},{translateY:withSpring(translateY,LAUNCH_PAD_SPRING_CONFIG)},{scale:withSpring(launchPadPullTabState.get().scale,LAUNCH_PAD_SPRING_CONFIG)}],borderTopRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),borderBottomRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),backgroundColor:backgroundColor};}" };
let obj2 = { backgroundColor: ThemesDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND };
const memoResult = importAllResult.memo(function LaunchPadPullTab(launchPadSharedState) {
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const launchPadPullTabState = launchPadSharedState.launchPadPullTabState;
  const gestureState = launchPadSharedState.gestureState;
  let updaters = gestureState;
  updaters = launchPadSharedState.updaters;
  closure_3 = updaters;
  let sharedValue;
  let backgroundColor;
  let backgroundColor2;
  closure_7 = undefined;
  const tmp = callback();
  const tmp2 = launchPadPullTabState(updaters[9])();
  sharedValue = tmp2;
  backgroundColor = tmp.pullTabClosed.backgroundColor;
  backgroundColor2 = tmp.pullTabOpened.backgroundColor;
  const tmp3 = launchPadPullTabState(updaters[10])({ launchPadSharedState, launchPadPullTabState });
  closure_7 = tmp3;
  let obj = launchPadSharedState(updaters[8]);
  class U {
    constructor() {
      if (closure_7.get()) {
        tmp = updaters;
        if (!updaters.get().active) {
          interpolateResult = closure_1_8;
        }
        obj2 = launchPadSharedState;
        num = 0.9;
        if (launchPadSharedState.get() > 0.9) {
          tmp6 = closure_4;
          tmp4 = -closure_4.get().width;
        } else {
          obj3 = updaters;
          tmp4 = interpolateResult;
          if (updaters.get().active) {
            if (obj3.get().requiresPop) {
              num3 = 0.3;
              sum = interpolateResult + 0.3 * obj3.get().positionOffsetX;
            } else {
              num2 = 4;
              sum = interpolateResult - 4;
            }
            tmp4 = sum;
          }
        }
        obj4 = launchPadPullTabState;
        num4 = 0;
        if (obj2.get() > 0) {
          num5 = backgroundColor;
        } else {
          tmp7 = updaters;
          num5 = 0;
        }
        tmp8 = launchPadSharedState;
        tmp9 = updaters;
        obj5 = launchPadSharedState(updaters[8]);
        tmp11 = closure_4;
        value = obj2.get();
        tmp12 = closure_4;
        items = [0];
        items[1] = closure_4;
        tmp13 = backgroundColor;
        items1 = [, ];
        items1[0] = backgroundColor;
        tmp14 = backgroundColor;
        items1[1] = backgroundColor;
        obj = { transform: null, borderTopRightRadius: null, borderBottomRightRadius: null, backgroundColor: null };
        obj1 = { translateX: null };
        tmp16 = launchPadSharedState;
        tmp17 = updaters;
        interpolateColorResult = obj5.interpolateColor(value * closure_4.get().width, items, items1);
        obj8 = launchPadSharedState(updaters[11]);
        tmp18 = closure_1_11;
        obj1[0] = obj8.withSpring(tmp4, closure_1_11);
        items2 = [, , ];
        items2[0] = obj1;
        obj2 = { translateY: null };
        tmp19 = launchPadSharedState;
        tmp20 = updaters;
        obj10 = launchPadSharedState(updaters[11]);
        obj2[0] = obj10.withSpring(launchPadPullTabState.get().position, closure_1_11);
        items2[1] = obj2;
        obj3 = { scale: null };
        tmp21 = launchPadSharedState;
        tmp22 = updaters;
        obj12 = launchPadSharedState(updaters[11]);
        obj3[0] = obj12.withSpring(obj4.get().scale, closure_1_11);
        items2[2] = obj3;
        obj[0] = items2;
        tmp23 = launchPadSharedState;
        tmp24 = updaters;
        obj13 = launchPadSharedState(updaters[11]);
        obj[1] = obj13.withSpring(num5, closure_1_11);
        tmp25 = launchPadSharedState;
        tmp26 = updaters;
        obj14 = launchPadSharedState(updaters[11]);
        obj[2] = obj14.withSpring(num5, closure_1_11);
        obj[3] = interpolateColorResult;
        return obj;
      }
      obj = launchPadSharedState(updaters[8]);
      value1 = launchPadSharedState.get();
      items3 = [0];
      items3[1] = -closure_4.get().width - 16;
      interpolateResult = obj.interpolate(value1, [0, 1], items3);
      return;
    }
  }
  obj = { isMinimized: tmp3, gestureState, LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET: closure_8, interpolate: launchPadSharedState(updaters[8]).interpolate, launchPadSharedState, windowDimensions: tmp2, launchPadPullTabState, LAUNCH_PAD_PULL_TAB_BORDER_RADIUS: backgroundColor, interpolateColor: launchPadSharedState(updaters[8]).interpolateColor, LAUNCH_PAD_MARGIN: sharedValue, backgroundColorStart: backgroundColor, backgroundColorEnd: backgroundColor2, withSpring: launchPadSharedState(updaters[11]).withSpring, LAUNCH_PAD_SPRING_CONFIG: closure_11 };
  U.__closure = obj;
  U.__workletHash = 3768918311497;
  U.__initData = closure_17;
  closure_3 = undefined;
  sharedValue = undefined;
  const animatedStyle = obj.useAnimatedStyle(U);
  const tmp5 = launchPadPullTabState(updaters[7])();
  closure_3 = tmp5;
  let obj2 = launchPadSharedState(updaters[8]);
  sharedValue = obj2.useSharedValue(undefined);
  const fn = function _() {
    return store.get();
  };
  fn.__closure = { keyboardHeight: tmp5 };
  fn.__workletHash = 14545769097570;
  fn.__initData = closure_15;
  const fn2 = function s(arg0, arg1) {
    if (0 === launchPadSharedState.get()) {
      if (null != arg1) {
        if (arg0 !== arg1) {
          if (arg0 < arg1) {
            if (0 === arg0) {
              const result = updaters.setLaunchPadPullTabMinimized(false);
            }
            if (null == sharedValue.get()) {
              const result1 = obj3.set(arg1);
            }
            let value = obj3.get();
            if (value == null) {
              value = arg1;
            }
            const diff = 1 - arg0 / value;
            const result2 = launchPadPullTabState.get().offset * diff;
            const sum = launchPadPullTabState.get().position + result2;
            const result3 = updaters.setLaunchPadPullTabPosition(sum, launchPadPullTabState.get().offset - result2);
          } else {
            const result4 = updaters.setLaunchPadPullTabMinimized(true);
            if (null != sharedValue.get()) {
              const result5 = obj5.set(undefined);
            }
            const sum1 = arg0 + closure_1_12 + 2 * sharedValue;
            const diff1 = launchPadSharedState(updaters[9]).getWindowDimensionsWorklet({ ignoreKeyboard: true }).height - (launchPadPullTabState.get().position + backgroundColor2 + closure_1_10);
            let num2 = 0;
            if (diff1 <= sum1) {
              num2 = sum1 - diff1;
            }
            if (0 < num2) {
              const diff2 = obj2.get().position - num2;
              const result6 = obj4.setLaunchPadPullTabPosition(diff2, obj2.get().offset + num2);
            }
            const obj = launchPadSharedState(updaters[9]);
            obj4 = updaters;
            obj5 = sharedValue;
          }
        }
      }
    } else {
      const result7 = updaters.setLaunchPadPullTabMinimized(false);
    }
  };
  obj = { launchPadSharedState, updaters, keyboardHeightOpened: sharedValue, launchPadPullTabState, CHAT_INPUT_HEIGHT, LAUNCH_PAD_MARGIN: sharedValue, getWindowDimensionsWorklet: launchPadSharedState(updaters[9]).getWindowDimensionsWorklet, LAUNCH_PAD_PULL_TAB_HEIGHT: backgroundColor2, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET: closure_10 };
  fn2.__closure = obj;
  fn2.__workletHash = 8060927175361;
  fn2.__initData = closure_16;
  const animatedReaction = launchPadSharedState(updaters[8]).useAnimatedReaction(fn, fn2);
  obj1 = { style: items, children: null };
  items = [tmp.pullTab, animatedStyle];
  obj2 = { accessibilityRole: "button", accessibilityLabel: null, hitSlop: null, style: null, onTouchStart: null, onPress: null, children: null };
  const intl = launchPadSharedState(updaters[12]).intl;
  obj2[1] = intl.string(launchPadSharedState(updaters[12]).t.yTnIfb);
  obj2[2] = closure_7;
  obj2[3] = tmp.pullTabButton;
  obj2[4] = function onTouchStart() {
    const result = store.setLaunchPadPullTabScale(closure_1_9);
  };
  obj2[5] = launchPadPullTabState(updaters[13]);
  obj2[6] = jsx(launchPadSharedState(updaters[14]).ChannelListMagnifyingGlassIcon, { size: "xs" });
  obj1[1] = <closure_3 accessibilityRole="button" accessibilityLabel={null} hitSlop={null} style={null} onTouchStart={null} onPress={null}>{null}</closure_3>;
  return jsx(launchPadPullTabState(updaters[8]).View, { style: items, children: null });
});
let result = require("set").fileFinishedImporting("modules/launchpad/native/LaunchPadPullTab.tsx");

export default memoResult;