// discord_app/modules/launchpad/native/LaunchPadPullTab.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import useWindowDimensionsSharedValue from "../../screen/useWindowDimensionsSharedValue.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const Pressable = fn(17).Pressable;
const LaunchPadConstants = fn(11710);
({ LAUNCH_PAD_MARGIN: closure_4, LAUNCH_PAD_PULL_TAB_BORDER_RADIUS } = LaunchPadConstants);
const LAUNCH_PAD_PULL_TAB_HEIGHT = LaunchPadConstants.LAUNCH_PAD_PULL_TAB_HEIGHT;
({
  LAUNCH_PAD_PULL_TAB_HIT_SLOP: closure_7,
  LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET: closure_8,
  LAUNCH_PAD_PULL_TAB_SCALE_FACTOR: closure_9,
  LAUNCH_PAD_PULL_TAB_SCALE_OFFSET: c10,
  LAUNCH_PAD_PULL_TAB_WIDTH,
  LAUNCH_PAD_SPRING_CONFIG: closure_11,
} = LaunchPadConstants);
const CHAT_INPUT_HEIGHT = fn(12204).CHAT_INPUT_HEIGHT;
const jsx = fn(21).jsx;
const createStyles = fn(4722);
let obj = { pullTab: null, pullTabButton: null, pullTabOpened: null, pullTabClosed: null };
let size = {
  position: "absolute",
  right: 0,
  width: LAUNCH_PAD_PULL_TAB_WIDTH,
  height: LAUNCH_PAD_PULL_TAB_HEIGHT,
  borderTopLeftRadius: LAUNCH_PAD_PULL_TAB_BORDER_RADIUS,
  borderBottomLeftRadius: LAUNCH_PAD_PULL_TAB_BORDER_RADIUS,
  borderWidth: 1,
  borderTopWidth: 1,
  borderColor: "rgba(0, 0, 0, 0.08)",
};
const merged = Object.assign(nativeDefault.shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj.pullTab = size;
obj.pullTabButton = {
  width: LAUNCH_PAD_PULL_TAB_WIDTH,
  height: LAUNCH_PAD_PULL_TAB_HEIGHT,
  justifyContent: "center",
  alignItems: "center",
};
obj.pullTabOpened = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.pullTabClosed = { backgroundColor: nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND };
let closure_14 = createStyles.createStyles(obj);
const __initData = {
  code: "function LaunchPadPullTabTsx1(){const{keyboardHeight}=this.__closure;return keyboardHeight.get();}",
};
const __initData2 = {
  code: "function LaunchPadPullTabTsx2(keyboardHeight,keyboardHeightPrev){const{launchPadSharedState,updaters,keyboardHeightOpened,launchPadPullTabState,CHAT_INPUT_HEIGHT,LAUNCH_PAD_MARGIN,getWindowDimensionsWorklet,LAUNCH_PAD_PULL_TAB_HEIGHT,LAUNCH_PAD_PULL_TAB_SCALE_OFFSET}=this.__closure;if(launchPadSharedState.get()!==0){updaters.setLaunchPadPullTabMinimized(false);return;}if(keyboardHeightPrev==null||keyboardHeight===keyboardHeightPrev){return;}if(keyboardHeight<keyboardHeightPrev){var _keyboardHeightOpened;if(keyboardHeight===0){updaters.setLaunchPadPullTabMinimized(false);}if(keyboardHeightOpened.get()==null){keyboardHeightOpened.set(keyboardHeightPrev);}const keyboardClosePercent=1-keyboardHeight/((_keyboardHeightOpened=keyboardHeightOpened.get())!==null&&_keyboardHeightOpened!==void 0?_keyboardHeightOpened:keyboardHeightPrev);const keyboardOffsetRetractionAmount=launchPadPullTabState.get().offset*keyboardClosePercent;updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position+keyboardOffsetRetractionAmount,launchPadPullTabState.get().offset-keyboardOffsetRetractionAmount);}else{updaters.setLaunchPadPullTabMinimized(true);if(keyboardHeightOpened.get()!=null){keyboardHeightOpened.set(undefined);}const keyboardWithChatInput=keyboardHeight+CHAT_INPUT_HEIGHT+LAUNCH_PAD_MARGIN*2;const spaceUnderPullTab=getWindowDimensionsWorklet({ignoreKeyboard:true}).height-(launchPadPullTabState.get().position+LAUNCH_PAD_PULL_TAB_HEIGHT+LAUNCH_PAD_PULL_TAB_SCALE_OFFSET);const offset=spaceUnderPullTab>keyboardWithChatInput?0:keyboardWithChatInput-spaceUnderPullTab;if(offset>0){updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position-offset,launchPadPullTabState.get().offset+offset);}}}",
};
const __initData3 = {
  code: "function LaunchPadPullTabTsx3(){const{isMinimized,gestureState,LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET,interpolate,launchPadSharedState,windowDimensions,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_BORDER_RADIUS,interpolateColor,LAUNCH_PAD_MARGIN,backgroundColorStart,backgroundColorEnd,withSpring,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;let translateX=isMinimized.get()&&!gestureState.get().active?LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET:interpolate(launchPadSharedState.get(),[0,1],[0,-(windowDimensions.get().width-16)]);if(launchPadSharedState.get()>0.9){translateX=-windowDimensions.get().width;}else if(gestureState.get().active){if(gestureState.get().requiresPop){translateX+=gestureState.get().positionOffsetX*0.3;}else{translateX-=4;}}const translateY=launchPadPullTabState.get().position;const borderRadius=launchPadSharedState.get()<=0&&!gestureState.get().active?0:LAUNCH_PAD_PULL_TAB_BORDER_RADIUS;const backgroundColor=interpolateColor(launchPadSharedState.get()*windowDimensions.get().width,[0,LAUNCH_PAD_MARGIN],[backgroundColorStart,backgroundColorEnd]);return{transform:[{translateX:withSpring(translateX,LAUNCH_PAD_SPRING_CONFIG)},{translateY:withSpring(translateY,LAUNCH_PAD_SPRING_CONFIG)},{scale:withSpring(launchPadPullTabState.get().scale,LAUNCH_PAD_SPRING_CONFIG)}],borderTopRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),borderBottomRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),backgroundColor:backgroundColor};}",
};
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND };
size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadPullTab.tsx");

export default noop.memo(function LaunchPadPullTab(launchPadSharedState) {
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const launchPadPullTabState = launchPadSharedState.launchPadPullTabState;
  const gestureState = launchPadSharedState.gestureState;
  const updaters = launchPadSharedState.updaters;
  const tmp = closure_14();
  const tmp2 = launchPadPullTabState(gestureState[9])();
  LAUNCH_PAD_MARGIN = tmp2;
  const backgroundColor = tmp.pullTabClosed.backgroundColor;
  const backgroundColor2 = tmp.pullTabOpened.backgroundColor;
  const tmp3 = launchPadPullTabState(gestureState[10])({ launchPadSharedState, launchPadPullTabState });
  hitSlop = tmp3;
  class U {
    constructor() {
      if (closure_7.get()) {
        tmp = gestureState;
        if (!gestureState.get().active) {
          interpolateResult = closure_8;
        }
        obj2 = launchPadSharedState;
        num = 0.9;
        if (launchPadSharedState.get() > 0.9) {
          tmp6 = closure_4;
          tmp4 = -closure_4.get().width;
        } else {
          obj3 = gestureState;
          tmp4 = interpolateResult;
          if (gestureState.get().active) {
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
          num5 = closure_5;
        } else {
          tmp7 = gestureState;
          num5 = 0;
        }
        tmp8 = closure_0;
        tmp9 = closure_2;
        obj5 = closure_0(closure_2[8]);
        tmp11 = closure_4;
        value = obj2.get();
        tmp12 = LAUNCH_PAD_MARGIN;
        items = [0];
        items[1] = LAUNCH_PAD_MARGIN;
        tmp13 = backgroundColor;
        items1 = [,];
        items1[0] = backgroundColor;
        tmp14 = backgroundColor;
        items1[1] = backgroundColor;
        obj1 = { transform: null, borderTopRightRadius: null, borderBottomRightRadius: null, backgroundColor: null };
        obj15 = { translateX: null };
        tmp16 = closure_0;
        tmp17 = closure_2;
        interpolateColorResult = obj5.interpolateColor(value * closure_4.get().width, items, items1);
        obj8 = closure_0(closure_2[11]);
        tmp18 = LAUNCH_PAD_SPRING_CONFIG;
        obj15.translateX = obj8.withSpring(tmp4, LAUNCH_PAD_SPRING_CONFIG);
        items2 = [, ,];
        items2[0] = obj15;
        obj16 = { translateY: null };
        tmp19 = closure_0;
        tmp20 = closure_2;
        obj10 = closure_0(closure_2[11]);
        obj16.translateY = obj10.withSpring(launchPadPullTabState.get().position, LAUNCH_PAD_SPRING_CONFIG);
        items2[1] = obj16;
        obj17 = { scale: null };
        tmp21 = closure_0;
        tmp22 = closure_2;
        obj12 = closure_0(closure_2[11]);
        obj17.scale = obj12.withSpring(obj4.get().scale, LAUNCH_PAD_SPRING_CONFIG);
        items2[2] = obj17;
        obj1.transform = items2;
        tmp23 = closure_0;
        tmp24 = closure_2;
        obj13 = closure_0(closure_2[11]);
        obj1.borderTopRightRadius = obj13.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
        tmp25 = closure_0;
        tmp26 = closure_2;
        obj14 = closure_0(closure_2[11]);
        obj1.borderBottomRightRadius = obj14.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
        obj1.backgroundColor = interpolateColorResult;
        return obj1;
      }
      obj = closure_0(closure_2[8]);
      value1 = launchPadSharedState.get();
      items3 = [0];
      items3[1] = -closure_4.get().width - 16;
      interpolateResult = obj.interpolate(value1, [0, 1], items3);
      return;
    }
  }
  let obj = launchPadSharedState(gestureState[8]);
  U.__closure = {
    isMinimized: tmp3,
    gestureState,
    LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET,
    interpolate: launchPadSharedState(gestureState[8]).interpolate,
    launchPadSharedState,
    windowDimensions: tmp2,
    launchPadPullTabState,
    LAUNCH_PAD_PULL_TAB_BORDER_RADIUS: backgroundColor,
    interpolateColor: launchPadSharedState(gestureState[8]).interpolateColor,
    LAUNCH_PAD_MARGIN,
    backgroundColorStart: backgroundColor,
    backgroundColorEnd: backgroundColor2,
    withSpring: launchPadSharedState(gestureState[11]).withSpring,
    LAUNCH_PAD_SPRING_CONFIG,
  };
  U.__workletHash = 3768918311497;
  U.__initData = __initData3;
  closure_129_0 = launchPadSharedState;
  closure_129_1 = launchPadPullTabState;
  closure_129_2 = updaters;
  const animatedStyle = obj.useAnimatedStyle(U);
  const tmp5 = launchPadPullTabState(gestureState[7])();
  closure_129_3 = tmp5;
  const obj2 = {
    isMinimized: tmp3,
    gestureState,
    LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET,
    interpolate: launchPadSharedState(gestureState[8]).interpolate,
    launchPadSharedState,
    windowDimensions: tmp2,
    launchPadPullTabState,
    LAUNCH_PAD_PULL_TAB_BORDER_RADIUS: backgroundColor,
    interpolateColor: launchPadSharedState(gestureState[8]).interpolateColor,
    LAUNCH_PAD_MARGIN,
    backgroundColorStart: backgroundColor,
    backgroundColorEnd: backgroundColor2,
    withSpring: launchPadSharedState(gestureState[11]).withSpring,
    LAUNCH_PAD_SPRING_CONFIG,
  };
  const sharedValue = launchPadSharedState(gestureState[8]).useSharedValue(undefined);
  closure_129_4 = sharedValue;
  const obj3 = launchPadSharedState(gestureState[8]);
  const fn = function _() {
    return updaters.get();
  };
  fn.__closure = { keyboardHeight: tmp5 };
  fn.__workletHash = 14545769097570;
  fn.__initData = __initData;
  const fn2 = function s(arg0, arg1) {
    if (0 === launchPadSharedState.get()) {
      if (null != arg1) {
        if (arg0 !== arg1) {
          if (arg0 < arg1) {
            if (0 === arg0) {
              const result = gestureState.setLaunchPadPullTabMinimized(false);
            }
            if (null == closure_4.get()) {
              const result1 = closure_4.set(arg1);
            }
            value = closure_4.get();
            if (value == null) {
              value = arg1;
            }
            const diff = 1 - arg0 / value;
            const result2 = launchPadPullTabState.get().offset * diff;
            const sum = launchPadPullTabState.get().position + result2;
            const result3 = gestureState.setLaunchPadPullTabPosition(sum, launchPadPullTabState.get().offset - result2);
          } else {
            const result4 = gestureState.setLaunchPadPullTabMinimized(true);
            if (null != closure_4.get()) {
              const result5 = closure_4.set(undefined);
            }
            const sum1 = arg0 + CHAT_INPUT_HEIGHT + 2 * LAUNCH_PAD_MARGIN;
            const diff1 =
              useWindowDimensionsSharedValue.getWindowDimensionsWorklet({ ignoreKeyboard: true }).height -
              (launchPadPullTabState.get().position + LAUNCH_PAD_PULL_TAB_HEIGHT + LAUNCH_PAD_PULL_TAB_SCALE_OFFSET);
            let num2 = 0;
            if (diff1 <= sum1) {
              num2 = sum1 - diff1;
            }
            if (0 < num2) {
              const diff2 = launchPadPullTabState.get().position - num2;
              const result6 = gestureState.setLaunchPadPullTabPosition(
                diff2,
                launchPadPullTabState.get().offset + num2,
              );
            }
          }
        }
      }
    } else {
      const result7 = gestureState.setLaunchPadPullTabMinimized(false);
    }
  };
  const obj4 = launchPadSharedState(gestureState[8]);
  fn2.__closure = {
    launchPadSharedState,
    updaters,
    keyboardHeightOpened: sharedValue,
    launchPadPullTabState,
    CHAT_INPUT_HEIGHT,
    LAUNCH_PAD_MARGIN,
    getWindowDimensionsWorklet: launchPadSharedState(gestureState[9]).getWindowDimensionsWorklet,
    LAUNCH_PAD_PULL_TAB_HEIGHT: backgroundColor2,
    LAUNCH_PAD_PULL_TAB_SCALE_OFFSET,
  };
  fn2.__workletHash = 8060927175361;
  fn2.__initData = __initData2;
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  let obj6 = { style: null, children: null };
  let items = [tmp.pullTab, animatedStyle];
  obj6.style = items;
  let obj7 = {
    accessibilityRole: "button",
    accessibilityLabel: null,
    hitSlop: null,
    style: null,
    onTouchStart: null,
    onPress: null,
    children: null,
  };
  const intl = launchPadSharedState(gestureState[12]).intl;
  obj7.accessibilityLabel = intl.string(launchPadSharedState(gestureState[12]).t.yTnIfb);
  obj7.hitSlop = hitSlop;
  obj7.style = tmp.pullTabButton;
  obj7.onTouchStart = function onTouchStart() {
    const result = updaters.setLaunchPadPullTabScale(React7);
  };
  obj7.onPress = launchPadPullTabState(gestureState[13]);
  obj7.children = jsx(launchPadSharedState(gestureState[14]).ChannelListMagnifyingGlassIcon, { size: "xs" });
  obj6.children = (
    <updaters
      accessibilityRole="button"
      accessibilityLabel={null}
      hitSlop={null}
      style={null}
      onTouchStart={null}
      onPress={null}
    >
      {null}
    </updaters>
  );
  return jsx(launchPadPullTabState(gestureState[8]).View, { style: null, children: null });
});
