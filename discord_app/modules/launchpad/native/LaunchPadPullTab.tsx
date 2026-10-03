// === Module 17363: LaunchPadPullTab ===

// Module 17363 (LaunchPadPullTab)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import useWindowDimensionsSharedValue from "useWindowDimensionsSharedValue" /* 11647 */;
import noop from "module_19" /* 19 */;

require = fn;
const Pressable = fn(17).Pressable;
const LaunchPadConstants = fn(11125);
({ LAUNCH_PAD_MARGIN: closure_4, LAUNCH_PAD_PULL_TAB_BORDER_RADIUS } = LaunchPadConstants);
const LAUNCH_PAD_PULL_TAB_HEIGHT = LaunchPadConstants.LAUNCH_PAD_PULL_TAB_HEIGHT;
({ LAUNCH_PAD_PULL_TAB_HIT_SLOP: closure_7, LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET: closure_8, LAUNCH_PAD_PULL_TAB_SCALE_FACTOR: closure_9, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET: c10, LAUNCH_PAD_PULL_TAB_WIDTH, LAUNCH_PAD_SPRING_CONFIG: closure_11 } = LaunchPadConstants);
const CHAT_INPUT_HEIGHT = fn(11576).CHAT_INPUT_HEIGHT;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj = { pullTab: null, pullTabButton: null, pullTabOpened: null, pullTabClosed: null };
let size = { position: "absolute", right: 0, width: LAUNCH_PAD_PULL_TAB_WIDTH, height: LAUNCH_PAD_PULL_TAB_HEIGHT, borderTopLeftRadius: LAUNCH_PAD_PULL_TAB_BORDER_RADIUS, borderBottomLeftRadius: LAUNCH_PAD_PULL_TAB_BORDER_RADIUS, borderWidth: 1, borderTopWidth: 1, borderColor: "rgba(0, 0, 0, 0.08)" };
const merged = Object.assign(nativeDefault.shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj.pullTab = size;
obj.pullTabButton = { width: LAUNCH_PAD_PULL_TAB_WIDTH, height: LAUNCH_PAD_PULL_TAB_HEIGHT, justifyContent: "center", alignItems: "center" };
obj.pullTabOpened = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.pullTabClosed = { backgroundColor: nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND };
let closure_14 = createStyles.createStyles(obj);
const __initData = { code: "function LaunchPadPullTabTsx1(){const{keyboardHeight}=this.__closure;return keyboardHeight.get();}" };
const __initData2 = { code: "function LaunchPadPullTabTsx2(keyboardHeight_0,keyboardHeightPrev){const{launchPadSharedState,updaters,keyboardHeightOpened,launchPadPullTabState,CHAT_INPUT_HEIGHT,LAUNCH_PAD_MARGIN,getWindowDimensionsWorklet,LAUNCH_PAD_PULL_TAB_HEIGHT,LAUNCH_PAD_PULL_TAB_SCALE_OFFSET}=this.__closure;if(launchPadSharedState.get()!==0){updaters.setLaunchPadPullTabMinimized(false);return;}if(keyboardHeightPrev==null||keyboardHeight_0===keyboardHeightPrev){return;}if(keyboardHeight_0<keyboardHeightPrev){var _keyboardHeightOpened;if(keyboardHeight_0===0){updaters.setLaunchPadPullTabMinimized(false);}if(keyboardHeightOpened.get()==null){keyboardHeightOpened.set(keyboardHeightPrev);}const keyboardClosePercent=1-keyboardHeight_0/((_keyboardHeightOpened=keyboardHeightOpened.get())!==null&&_keyboardHeightOpened!==void 0?_keyboardHeightOpened:keyboardHeightPrev);const keyboardOffsetRetractionAmount=launchPadPullTabState.get().offset*keyboardClosePercent;updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position+keyboardOffsetRetractionAmount,launchPadPullTabState.get().offset-keyboardOffsetRetractionAmount);}else{updaters.setLaunchPadPullTabMinimized(true);if(keyboardHeightOpened.get()!=null){keyboardHeightOpened.set(undefined);}const keyboardWithChatInput=keyboardHeight_0+CHAT_INPUT_HEIGHT+LAUNCH_PAD_MARGIN*2;const spaceUnderPullTab=getWindowDimensionsWorklet({ignoreKeyboard:true}).height-(launchPadPullTabState.get().position+LAUNCH_PAD_PULL_TAB_HEIGHT+LAUNCH_PAD_PULL_TAB_SCALE_OFFSET);const offset=spaceUnderPullTab>keyboardWithChatInput?0:keyboardWithChatInput-spaceUnderPullTab;if(offset>0){updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position-offset,launchPadPullTabState.get().offset+offset);}}}" };
const __initData3 = { code: "function LaunchPadPullTabTsx3(){const{keyboardHeight}=this.__closure;return keyboardHeight.get();}" };
const __initData4 = { code: "function LaunchPadPullTabTsx4(keyboardHeight_0,keyboardHeightPrev){const{launchPadSharedState,updaters,keyboardHeightOpened,launchPadPullTabState,CHAT_INPUT_HEIGHT,LAUNCH_PAD_MARGIN,getWindowDimensionsWorklet,LAUNCH_PAD_PULL_TAB_HEIGHT,LAUNCH_PAD_PULL_TAB_SCALE_OFFSET}=this.__closure;if(launchPadSharedState.get()!==0){updaters.setLaunchPadPullTabMinimized(false);return;}if(keyboardHeightPrev==null||keyboardHeight_0===keyboardHeightPrev){return;}if(keyboardHeight_0<keyboardHeightPrev){var _keyboardHeightOpened;if(keyboardHeight_0===0){updaters.setLaunchPadPullTabMinimized(false);}if(keyboardHeightOpened.get()==null){keyboardHeightOpened.set(keyboardHeightPrev);}const keyboardClosePercent=1-keyboardHeight_0/((_keyboardHeightOpened=keyboardHeightOpened.get())!==null&&_keyboardHeightOpened!==void 0?_keyboardHeightOpened:keyboardHeightPrev);const keyboardOffsetRetractionAmount=launchPadPullTabState.get().offset*keyboardClosePercent;updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position+keyboardOffsetRetractionAmount,launchPadPullTabState.get().offset-keyboardOffsetRetractionAmount);}else{updaters.setLaunchPadPullTabMinimized(true);if(keyboardHeightOpened.get()!=null){keyboardHeightOpened.set(undefined);}const keyboardWithChatInput=keyboardHeight_0+CHAT_INPUT_HEIGHT+LAUNCH_PAD_MARGIN*2;const spaceUnderPullTab=getWindowDimensionsWorklet({ignoreKeyboard:true}).height-(launchPadPullTabState.get().position+LAUNCH_PAD_PULL_TAB_HEIGHT+LAUNCH_PAD_PULL_TAB_SCALE_OFFSET);const offset=spaceUnderPullTab>keyboardWithChatInput?0:keyboardWithChatInput-spaceUnderPullTab;if(offset>0){updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position-offset,launchPadPullTabState.get().offset+offset);}}}" };
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((launchPadSharedState) => {
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const launchPadPullTabState = launchPadSharedState.launchPadPullTabState;
  const updaters = launchPadSharedState.updaters;
  const tmp = launchPadPullTabState(updaters[8])();
  closure_3 = tmp;
  const sharedValue = launchPadSharedState(updaters[9]).useSharedValue(undefined);
  let obj = launchPadSharedState(updaters[9]);
  const fn = function o() {
    return closure_3.get();
  };
  fn.__closure = { keyboardHeight: tmp };
  fn.__workletHash = 14545769097570;
  fn.__initData = __initData;
  const fn2 = function n(arg0, arg1) {
    if (0 === launchPadSharedState.get()) {
      if (null != arg1) {
        if (arg0 !== arg1) {
          if (arg0 < arg1) {
            if (0 === arg0) {
              const result = updaters.setLaunchPadPullTabMinimized(false);
            }
            if (null == sharedValue.get()) {
              const result1 = sharedValue.set(arg1);
            }
            value = sharedValue.get();
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
              const result5 = sharedValue.set(undefined);
            }
            const sum1 = arg0 + CHAT_INPUT_HEIGHT + 2 * LAUNCH_PAD_MARGIN;
            const diff1 = useWindowDimensionsSharedValue.getWindowDimensionsWorklet({ ignoreKeyboard: true }).height - (launchPadPullTabState.get().position + LAUNCH_PAD_PULL_TAB_HEIGHT + LAUNCH_PAD_PULL_TAB_SCALE_OFFSET);
            let num2 = 0;
            if (diff1 <= sum1) {
              num2 = sum1 - diff1;
            }
            if (0 < num2) {
              const diff2 = launchPadPullTabState.get().position - num2;
              const result6 = updaters.setLaunchPadPullTabPosition(diff2, launchPadPullTabState.get().offset + num2);
            }
          }
        }
      }
    } else {
      const result7 = updaters.setLaunchPadPullTabMinimized(false);
    }
  };
  const obj2 = launchPadSharedState(updaters[9]);
  fn2.__closure = { launchPadSharedState, updaters, keyboardHeightOpened: sharedValue, launchPadPullTabState, CHAT_INPUT_HEIGHT, LAUNCH_PAD_MARGIN: sharedValue, getWindowDimensionsWorklet: launchPadSharedState(updaters[10]).getWindowDimensionsWorklet, LAUNCH_PAD_PULL_TAB_HEIGHT, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET };
  fn2.__workletHash = 12531173913505;
  fn2.__initData = __initData2;
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
}) : ((launchPadSharedState) => {
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const launchPadPullTabState = launchPadSharedState.launchPadPullTabState;
  const updaters = launchPadSharedState.updaters;
  const tmp = launchPadPullTabState(updaters[8])();
  closure_3 = tmp;
  const sharedValue = launchPadSharedState(updaters[9]).useSharedValue(undefined);
  let obj = launchPadSharedState(updaters[9]);
  const fn = function _() {
    return closure_3.get();
  };
  fn.__closure = { keyboardHeight: tmp };
  fn.__workletHash = 3691583703776;
  fn.__initData = __initData3;
  const fn2 = function s(arg0, arg1) {
    if (0 === launchPadSharedState.get()) {
      if (null != arg1) {
        if (arg0 !== arg1) {
          if (arg0 < arg1) {
            if (0 === arg0) {
              const result = updaters.setLaunchPadPullTabMinimized(false);
            }
            if (null == sharedValue.get()) {
              const result1 = sharedValue.set(arg1);
            }
            value = sharedValue.get();
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
              const result5 = sharedValue.set(undefined);
            }
            const sum1 = arg0 + CHAT_INPUT_HEIGHT + 2 * LAUNCH_PAD_MARGIN;
            const diff1 = useWindowDimensionsSharedValue.getWindowDimensionsWorklet({ ignoreKeyboard: true }).height - (launchPadPullTabState.get().position + LAUNCH_PAD_PULL_TAB_HEIGHT + LAUNCH_PAD_PULL_TAB_SCALE_OFFSET);
            let num2 = 0;
            if (diff1 <= sum1) {
              num2 = sum1 - diff1;
            }
            if (0 < num2) {
              const diff2 = launchPadPullTabState.get().position - num2;
              const result6 = updaters.setLaunchPadPullTabPosition(diff2, launchPadPullTabState.get().offset + num2);
            }
          }
        }
      }
    } else {
      const result7 = updaters.setLaunchPadPullTabMinimized(false);
    }
  };
  const obj2 = launchPadSharedState(updaters[9]);
  fn2.__closure = { launchPadSharedState, updaters, keyboardHeightOpened: sharedValue, launchPadPullTabState, CHAT_INPUT_HEIGHT, LAUNCH_PAD_MARGIN: sharedValue, getWindowDimensionsWorklet: launchPadSharedState(updaters[10]).getWindowDimensionsWorklet, LAUNCH_PAD_PULL_TAB_HEIGHT, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET };
  fn2.__workletHash = 8123589881383;
  fn2.__initData = __initData4;
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
});
const __initData5 = { code: "function LaunchPadPullTabTsx5(){const{isMinimized,gestureState,LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET,interpolate,launchPadSharedState,windowDimensions,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_BORDER_RADIUS,interpolateColor,LAUNCH_PAD_MARGIN,backgroundColorStart,backgroundColorEnd,withSpring,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;let translateX=isMinimized.get()&&!gestureState.get().active?LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET:interpolate(launchPadSharedState.get(),[0,1],[0,-(windowDimensions.get().width-16)]);if(launchPadSharedState.get()>0.9){translateX=-windowDimensions.get().width;}else{if(gestureState.get().active){if(gestureState.get().requiresPop){translateX=translateX+gestureState.get().positionOffsetX*0.3;}else{translateX=translateX-4;}}}const translateY=launchPadPullTabState.get().position;const borderRadius=launchPadSharedState.get()<=0&&!gestureState.get().active?0:LAUNCH_PAD_PULL_TAB_BORDER_RADIUS;const backgroundColor=interpolateColor(launchPadSharedState.get()*windowDimensions.get().width,[0,LAUNCH_PAD_MARGIN],[backgroundColorStart,backgroundColorEnd]);return{transform:[{translateX:withSpring(translateX,LAUNCH_PAD_SPRING_CONFIG)},{translateY:withSpring(translateY,LAUNCH_PAD_SPRING_CONFIG)},{scale:withSpring(launchPadPullTabState.get().scale,LAUNCH_PAD_SPRING_CONFIG)}],borderTopRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),borderBottomRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),backgroundColor:backgroundColor};}" };
const __initData6 = { code: "function LaunchPadPullTabTsx6(){const{isMinimized,gestureState,LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET,interpolate,launchPadSharedState,windowDimensions,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_BORDER_RADIUS,interpolateColor,LAUNCH_PAD_MARGIN,backgroundColorStart,backgroundColorEnd,withSpring,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;let translateX=isMinimized.get()&&!gestureState.get().active?LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET:interpolate(launchPadSharedState.get(),[0,1],[0,-(windowDimensions.get().width-16)]);if(launchPadSharedState.get()>0.9){translateX=-windowDimensions.get().width;}else if(gestureState.get().active){if(gestureState.get().requiresPop){translateX+=gestureState.get().positionOffsetX*0.3;}else{translateX-=4;}}const translateY=launchPadPullTabState.get().position;const borderRadius=launchPadSharedState.get()<=0&&!gestureState.get().active?0:LAUNCH_PAD_PULL_TAB_BORDER_RADIUS;const backgroundColor=interpolateColor(launchPadSharedState.get()*windowDimensions.get().width,[0,LAUNCH_PAD_MARGIN],[backgroundColorStart,backgroundColorEnd]);return{transform:[{translateX:withSpring(translateX,LAUNCH_PAD_SPRING_CONFIG)},{translateY:withSpring(translateY,LAUNCH_PAD_SPRING_CONFIG)},{scale:withSpring(launchPadPullTabState.get().scale,LAUNCH_PAD_SPRING_CONFIG)}],borderTopRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),borderBottomRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),backgroundColor:backgroundColor};}" };
ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND };
size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadPullTab.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((launchPadSharedState) => {
  const cResult = launchPadSharedState(gestureState[11]).c(20);
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const launchPadPullTabState = launchPadSharedState.launchPadPullTabState;
  gestureState = launchPadSharedState.gestureState;
  const updaters = launchPadSharedState.updaters;
  let tmp4 = closure_14();
  const tmp6 = launchPadPullTabState(gestureState[10])();
  LAUNCH_PAD_MARGIN = tmp6;
  const backgroundColor = tmp4.pullTabClosed.backgroundColor;
  const backgroundColor2 = tmp4.pullTabOpened.backgroundColor;
  if (cResult[0] === launchPadPullTabState) {
    if (cResult[1] === launchPadSharedState) {
      let tmp7 = cResult[2];
    }
    const tmp8 = tmp5(tmp2[12])(tmp7);
    hitSlop = tmp8;
    class D {
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
          obj5 = closure_0(closure_2[9]);
          tmp11 = closure_4;
          value = obj2.get();
          tmp12 = LAUNCH_PAD_MARGIN;
          items = [0];
          items[1] = LAUNCH_PAD_MARGIN;
          tmp13 = backgroundColor;
          items1 = [, ];
          items1[0] = backgroundColor;
          tmp14 = backgroundColor;
          items1[1] = backgroundColor;
          obj1 = { transform: null, borderTopRightRadius: null, borderBottomRightRadius: null, backgroundColor: null };
          obj15 = { translateX: null };
          tmp16 = closure_0;
          tmp17 = closure_2;
          interpolateColorResult = obj5.interpolateColor(value * closure_4.get().width, items, items1);
          obj8 = closure_0(closure_2[13]);
          tmp18 = LAUNCH_PAD_SPRING_CONFIG;
          obj15.translateX = obj8.withSpring(tmp4, LAUNCH_PAD_SPRING_CONFIG);
          items2 = [, , ];
          items2[0] = obj15;
          obj16 = { translateY: null };
          tmp19 = closure_0;
          tmp20 = closure_2;
          obj10 = closure_0(closure_2[13]);
          obj16.translateY = obj10.withSpring(launchPadPullTabState.get().position, LAUNCH_PAD_SPRING_CONFIG);
          items2[1] = obj16;
          obj17 = { scale: null };
          tmp21 = closure_0;
          tmp22 = closure_2;
          obj12 = closure_0(closure_2[13]);
          obj17.scale = obj12.withSpring(obj4.get().scale, LAUNCH_PAD_SPRING_CONFIG);
          items2[2] = obj17;
          obj1.transform = items2;
          tmp23 = closure_0;
          tmp24 = closure_2;
          obj13 = closure_0(closure_2[13]);
          obj1.borderTopRightRadius = obj13.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
          tmp25 = closure_0;
          tmp26 = closure_2;
          obj14 = closure_0(closure_2[13]);
          obj1.borderBottomRightRadius = obj14.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
          obj1.backgroundColor = interpolateColorResult;
          return obj1;
        }
        obj = closure_0(closure_2[9]);
        value1 = launchPadSharedState.get();
        items3 = [0];
        items3[1] = -closure_4.get().width - 16;
        interpolateResult = obj.interpolate(value1, [0, 1], items3);
        return;
      }
    }
    const obj2 = { isMinimized: tmp8, gestureState, LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET, interpolate: tmp(tmp2[9]).interpolate, launchPadSharedState, windowDimensions: tmp6, launchPadPullTabState, LAUNCH_PAD_PULL_TAB_BORDER_RADIUS: backgroundColor, interpolateColor: tmp(tmp2[9]).interpolateColor, LAUNCH_PAD_MARGIN, backgroundColorStart: backgroundColor, backgroundColorEnd: backgroundColor2, withSpring: tmp(tmp2[13]).withSpring, LAUNCH_PAD_SPRING_CONFIG };
    D.__closure = obj2;
    D.__workletHash = 13547259922441;
    D.__initData = __initData5;
    const animatedStyle = tmp(tmp2[9]).useAnimatedStyle(D);
    if (cResult[3] === launchPadPullTabState) {
      if (cResult[4] === launchPadSharedState) {
        if (cResult[5] === updaters) {
          let tmp15 = cResult[6];
        }
        closure_19(tmp15);
        if (cResult[7] === animatedStyle) {
          if (cResult[8] === tmp4.pullTab) {
            let tmp18 = cResult[9];
          }
          const _Symbol = Symbol;
          class D {
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
                obj5 = closure_0(closure_2[9]);
                tmp11 = closure_4;
                value = obj2.get();
                tmp12 = LAUNCH_PAD_MARGIN;
                items = [0];
                items[1] = LAUNCH_PAD_MARGIN;
                tmp13 = backgroundColor;
                items1 = [, ];
                items1[0] = backgroundColor;
                tmp14 = backgroundColor;
                items1[1] = backgroundColor;
                obj1 = { transform: null, borderTopRightRadius: null, borderBottomRightRadius: null, backgroundColor: null };
                obj15 = { translateX: null };
                tmp16 = closure_0;
                tmp17 = closure_2;
                interpolateColorResult = obj5.interpolateColor(value * closure_4.get().width, items, items1);
                obj8 = closure_0(closure_2[13]);
                tmp18 = LAUNCH_PAD_SPRING_CONFIG;
                obj15.translateX = obj8.withSpring(tmp4, LAUNCH_PAD_SPRING_CONFIG);
                items2 = [, , ];
                items2[0] = obj15;
                obj16 = { translateY: null };
                tmp19 = closure_0;
                tmp20 = closure_2;
                obj10 = closure_0(closure_2[13]);
                obj16.translateY = obj10.withSpring(launchPadPullTabState.get().position, LAUNCH_PAD_SPRING_CONFIG);
                items2[1] = obj16;
                obj17 = { scale: null };
                tmp21 = closure_0;
                tmp22 = closure_2;
                obj12 = closure_0(closure_2[13]);
                obj17.scale = obj12.withSpring(obj4.get().scale, LAUNCH_PAD_SPRING_CONFIG);
                items2[2] = obj17;
                obj1.transform = items2;
                tmp23 = closure_0;
                tmp24 = closure_2;
                obj13 = closure_0(closure_2[13]);
                obj1.borderTopRightRadius = obj13.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
                tmp25 = closure_0;
                tmp26 = closure_2;
                obj14 = closure_0(closure_2[13]);
                obj1.borderBottomRightRadius = obj14.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
                obj1.backgroundColor = interpolateColorResult;
                return obj1;
              }
              obj = closure_0(closure_2[9]);
              value1 = launchPadSharedState.get();
              items3 = [0];
              items3[1] = -closure_4.get().width - 16;
              interpolateResult = obj.interpolate(value1, [0, 1], items3);
              return;
            }
          }
          if (tmp20 === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[14]).intl;
            class D {
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
                  obj5 = closure_0(closure_2[9]);
                  tmp11 = closure_4;
                  value = obj2.get();
                  tmp12 = LAUNCH_PAD_MARGIN;
                  items = [0];
                  items[1] = LAUNCH_PAD_MARGIN;
                  tmp13 = backgroundColor;
                  items1 = [, ];
                  items1[0] = backgroundColor;
                  tmp14 = backgroundColor;
                  items1[1] = backgroundColor;
                  obj1 = { transform: null, borderTopRightRadius: null, borderBottomRightRadius: null, backgroundColor: null };
                  obj15 = { translateX: null };
                  tmp16 = closure_0;
                  tmp17 = closure_2;
                  interpolateColorResult = obj5.interpolateColor(value * closure_4.get().width, items, items1);
                  obj8 = closure_0(closure_2[13]);
                  tmp18 = LAUNCH_PAD_SPRING_CONFIG;
                  obj15.translateX = obj8.withSpring(tmp4, LAUNCH_PAD_SPRING_CONFIG);
                  items2 = [, , ];
                  items2[0] = obj15;
                  obj16 = { translateY: null };
                  tmp19 = closure_0;
                  tmp20 = closure_2;
                  obj10 = closure_0(closure_2[13]);
                  obj16.translateY = obj10.withSpring(launchPadPullTabState.get().position, LAUNCH_PAD_SPRING_CONFIG);
                  items2[1] = obj16;
                  obj17 = { scale: null };
                  tmp21 = closure_0;
                  tmp22 = closure_2;
                  obj12 = closure_0(closure_2[13]);
                  obj17.scale = obj12.withSpring(obj4.get().scale, LAUNCH_PAD_SPRING_CONFIG);
                  items2[2] = obj17;
                  obj1.transform = items2;
                  tmp23 = closure_0;
                  tmp24 = closure_2;
                  obj13 = closure_0(closure_2[13]);
                  obj1.borderTopRightRadius = obj13.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
                  tmp25 = closure_0;
                  tmp26 = closure_2;
                  obj14 = closure_0(closure_2[13]);
                  obj1.borderBottomRightRadius = obj14.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
                  obj1.backgroundColor = interpolateColorResult;
                  return obj1;
                }
                obj = closure_0(closure_2[9]);
                value1 = launchPadSharedState.get();
                items3 = [0];
                items3[1] = -closure_4.get().width - 16;
                interpolateResult = obj.interpolate(value1, [0, 1], items3);
                return;
              }
            }
            let tmp22 = intl.string(tmp(tmp2[14]).t.yTnIfb);
            const stringResult = intl.string(tmp(tmp2[14]).t.yTnIfb);
          } else {
            tmp22 = cResult[10];
          }
          if (cResult[11] !== updaters) {
            class O {
              constructor() {
                result = updaters.setLaunchPadPullTabScale(closure_9);
                return;
              }
            }
            cResult[11] = updaters;
            class D {
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
                  obj5 = closure_0(closure_2[9]);
                  tmp11 = closure_4;
                  value = obj2.get();
                  tmp12 = LAUNCH_PAD_MARGIN;
                  items = [0];
                  items[1] = LAUNCH_PAD_MARGIN;
                  tmp13 = backgroundColor;
                  items1 = [, ];
                  items1[0] = backgroundColor;
                  tmp14 = backgroundColor;
                  items1[1] = backgroundColor;
                  obj1 = { transform: null, borderTopRightRadius: null, borderBottomRightRadius: null, backgroundColor: null };
                  obj15 = { translateX: null };
                  tmp16 = closure_0;
                  tmp17 = closure_2;
                  interpolateColorResult = obj5.interpolateColor(value * closure_4.get().width, items, items1);
                  obj8 = closure_0(closure_2[13]);
                  tmp18 = LAUNCH_PAD_SPRING_CONFIG;
                  obj15.translateX = obj8.withSpring(tmp4, LAUNCH_PAD_SPRING_CONFIG);
                  items2 = [, , ];
                  items2[0] = obj15;
                  obj16 = { translateY: null };
                  tmp19 = closure_0;
                  tmp20 = closure_2;
                  obj10 = closure_0(closure_2[13]);
                  obj16.translateY = obj10.withSpring(launchPadPullTabState.get().position, LAUNCH_PAD_SPRING_CONFIG);
                  items2[1] = obj16;
                  obj17 = { scale: null };
                  tmp21 = closure_0;
                  tmp22 = closure_2;
                  obj12 = closure_0(closure_2[13]);
                  obj17.scale = obj12.withSpring(obj4.get().scale, LAUNCH_PAD_SPRING_CONFIG);
                  items2[2] = obj17;
                  obj1.transform = items2;
                  tmp23 = closure_0;
                  tmp24 = closure_2;
                  obj13 = closure_0(closure_2[13]);
                  obj1.borderTopRightRadius = obj13.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
                  tmp25 = closure_0;
                  tmp26 = closure_2;
                  obj14 = closure_0(closure_2[13]);
                  obj1.borderBottomRightRadius = obj14.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
                  obj1.backgroundColor = interpolateColorResult;
                  return obj1;
                }
                obj = closure_0(closure_2[9]);
                value1 = launchPadSharedState.get();
                items3 = [0];
                items3[1] = -closure_4.get().width - 16;
                interpolateResult = obj.interpolate(value1, [0, 1], items3);
                return;
              }
            }
          } else {
            class O {
              constructor() {
                result = updaters.setLaunchPadPullTabScale(closure_9);
                return;
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
              constructor() {
                result = updaters.setLaunchPadPullTabScale(closure_9);
                return;
              }
            }
            cResult[13] = jsx(tmp(tmp2[15]).ChannelListMagnifyingGlassIcon, { size: "xs" });
            class D {
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
                  obj5 = closure_0(closure_2[9]);
                  tmp11 = closure_4;
                  value = obj2.get();
                  tmp12 = LAUNCH_PAD_MARGIN;
                  items = [0];
                  items[1] = LAUNCH_PAD_MARGIN;
                  tmp13 = backgroundColor;
                  items1 = [, ];
                  items1[0] = backgroundColor;
                  tmp14 = backgroundColor;
                  items1[1] = backgroundColor;
                  obj1 = { transform: null, borderTopRightRadius: null, borderBottomRightRadius: null, backgroundColor: null };
                  obj15 = { translateX: null };
                  tmp16 = closure_0;
                  tmp17 = closure_2;
                  interpolateColorResult = obj5.interpolateColor(value * closure_4.get().width, items, items1);
                  obj8 = closure_0(closure_2[13]);
                  tmp18 = LAUNCH_PAD_SPRING_CONFIG;
                  obj15.translateX = obj8.withSpring(tmp4, LAUNCH_PAD_SPRING_CONFIG);
                  items2 = [, , ];
                  items2[0] = obj15;
                  obj16 = { translateY: null };
                  tmp19 = closure_0;
                  tmp20 = closure_2;
                  obj10 = closure_0(closure_2[13]);
                  obj16.translateY = obj10.withSpring(launchPadPullTabState.get().position, LAUNCH_PAD_SPRING_CONFIG);
                  items2[1] = obj16;
                  obj17 = { scale: null };
                  tmp21 = closure_0;
                  tmp22 = closure_2;
                  obj12 = closure_0(closure_2[13]);
                  obj17.scale = obj12.withSpring(obj4.get().scale, LAUNCH_PAD_SPRING_CONFIG);
                  items2[2] = obj17;
                  obj1.transform = items2;
                  tmp23 = closure_0;
                  tmp24 = closure_2;
                  obj13 = closure_0(closure_2[13]);
                  obj1.borderTopRightRadius = obj13.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
                  tmp25 = closure_0;
                  tmp26 = closure_2;
                  obj14 = closure_0(closure_2[13]);
                  obj1.borderBottomRightRadius = obj14.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
                  obj1.backgroundColor = interpolateColorResult;
                  return obj1;
                }
                obj = closure_0(closure_2[9]);
                value1 = launchPadSharedState.get();
                items3 = [0];
                items3[1] = -closure_4.get().width - 16;
                interpolateResult = obj.interpolate(value1, [0, 1], items3);
                return;
              }
            }
            const tmp26 = jsx(tmp(tmp2[15]).ChannelListMagnifyingGlassIcon, { size: "xs" });
          } else {
            class O {
              constructor() {
                result = updaters.setLaunchPadPullTabScale(closure_9);
                return;
              }
            }
          }
          if (cResult[14] === tmp4.pullTabButton) {
            class O {
              constructor() {
                result = updaters.setLaunchPadPullTabScale(closure_9);
                return;
              }
            }
            if (cResult[17] === tmp18) {
              class O {
                constructor() {
                  result = updaters.setLaunchPadPullTabScale(closure_9);
                  return;
                }
              }
              return tmp32;
            }
            const obj3 = { style: null, children: null };
            class D {
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
                  obj5 = closure_0(closure_2[9]);
                  tmp11 = closure_4;
                  value = obj2.get();
                  tmp12 = LAUNCH_PAD_MARGIN;
                  items = [0];
                  items[1] = LAUNCH_PAD_MARGIN;
                  tmp13 = backgroundColor;
                  items1 = [, ];
                  items1[0] = backgroundColor;
                  tmp14 = backgroundColor;
                  items1[1] = backgroundColor;
                  obj1 = { transform: null, borderTopRightRadius: null, borderBottomRightRadius: null, backgroundColor: null };
                  obj15 = { translateX: null };
                  tmp16 = closure_0;
                  tmp17 = closure_2;
                  interpolateColorResult = obj5.interpolateColor(value * closure_4.get().width, items, items1);
                  obj8 = closure_0(closure_2[13]);
                  tmp18 = LAUNCH_PAD_SPRING_CONFIG;
                  obj15.translateX = obj8.withSpring(tmp4, LAUNCH_PAD_SPRING_CONFIG);
                  items2 = [, , ];
                  items2[0] = obj15;
                  obj16 = { translateY: null };
                  tmp19 = closure_0;
                  tmp20 = closure_2;
                  obj10 = closure_0(closure_2[13]);
                  obj16.translateY = obj10.withSpring(launchPadPullTabState.get().position, LAUNCH_PAD_SPRING_CONFIG);
                  items2[1] = obj16;
                  obj17 = { scale: null };
                  tmp21 = closure_0;
                  tmp22 = closure_2;
                  obj12 = closure_0(closure_2[13]);
                  obj17.scale = obj12.withSpring(obj4.get().scale, LAUNCH_PAD_SPRING_CONFIG);
                  items2[2] = obj17;
                  obj1.transform = items2;
                  tmp23 = closure_0;
                  tmp24 = closure_2;
                  obj13 = closure_0(closure_2[13]);
                  obj1.borderTopRightRadius = obj13.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
                  tmp25 = closure_0;
                  tmp26 = closure_2;
                  obj14 = closure_0(closure_2[13]);
                  obj1.borderBottomRightRadius = obj14.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
                  obj1.backgroundColor = interpolateColorResult;
                  return obj1;
                }
                obj = closure_0(closure_2[9]);
                value1 = launchPadSharedState.get();
                items3 = [0];
                items3[1] = -closure_4.get().width - 16;
                interpolateResult = obj.interpolate(value1, [0, 1], items3);
                return;
              }
            }
            obj3.children = tmp27;
            const tmp34 = jsx(tmp5(tmp2[9]).View, { style: null, children: null });
            cResult[17] = tmp18;
            cResult[18] = tmp27;
            cResult[19] = tmp34;
            tmp32 = tmp34;
          }
          const obj4 = { accessibilityRole: "button", accessibilityLabel: tmp22, hitSlop, style: tmp4.pullTabButton, onTouchStart: O, onPress: tmp5(tmp2[16]), children: tmp25 };
          const tmp31 = <updaters accessibilityRole="button" accessibilityLabel={tmp22} hitSlop={hitSlop} style={tmp4.pullTabButton} onTouchStart={O} onPress={tmp5(tmp2[16])}>{tmp25}</updaters>;
          cResult[14] = tmp4.pullTabButton;
          cResult[15] = O;
          cResult[16] = tmp31;
        }
        class D {
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
              obj5 = closure_0(closure_2[9]);
              tmp11 = closure_4;
              value = obj2.get();
              tmp12 = LAUNCH_PAD_MARGIN;
              items = [0];
              items[1] = LAUNCH_PAD_MARGIN;
              tmp13 = backgroundColor;
              items1 = [, ];
              items1[0] = backgroundColor;
              tmp14 = backgroundColor;
              items1[1] = backgroundColor;
              obj1 = { transform: null, borderTopRightRadius: null, borderBottomRightRadius: null, backgroundColor: null };
              obj15 = { translateX: null };
              tmp16 = closure_0;
              tmp17 = closure_2;
              interpolateColorResult = obj5.interpolateColor(value * closure_4.get().width, items, items1);
              obj8 = closure_0(closure_2[13]);
              tmp18 = LAUNCH_PAD_SPRING_CONFIG;
              obj15.translateX = obj8.withSpring(tmp4, LAUNCH_PAD_SPRING_CONFIG);
              items2 = [, , ];
              items2[0] = obj15;
              obj16 = { translateY: null };
              tmp19 = closure_0;
              tmp20 = closure_2;
              obj10 = closure_0(closure_2[13]);
              obj16.translateY = obj10.withSpring(launchPadPullTabState.get().position, LAUNCH_PAD_SPRING_CONFIG);
              items2[1] = obj16;
              obj17 = { scale: null };
              tmp21 = closure_0;
              tmp22 = closure_2;
              obj12 = closure_0(closure_2[13]);
              obj17.scale = obj12.withSpring(obj4.get().scale, LAUNCH_PAD_SPRING_CONFIG);
              items2[2] = obj17;
              obj1.transform = items2;
              tmp23 = closure_0;
              tmp24 = closure_2;
              obj13 = closure_0(closure_2[13]);
              obj1.borderTopRightRadius = obj13.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
              tmp25 = closure_0;
              tmp26 = closure_2;
              obj14 = closure_0(closure_2[13]);
              obj1.borderBottomRightRadius = obj14.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
              obj1.backgroundColor = interpolateColorResult;
              return obj1;
            }
            obj = closure_0(closure_2[9]);
            value1 = launchPadSharedState.get();
            items3 = [0];
            items3[1] = -closure_4.get().width - 16;
            interpolateResult = obj.interpolate(value1, [0, 1], items3);
            return;
          }
        }
        tmp19[0] = tmp4.pullTab;
        tmp19[1] = animatedStyle;
        cResult[7] = animatedStyle;
        cResult[8] = tmp4.pullTab;
        cResult[9] = tmp19;
        tmp18 = tmp19;
      }
    }
    let obj5 = { launchPadSharedState, launchPadPullTabState, updaters };
    cResult[3] = launchPadPullTabState;
    cResult[4] = launchPadSharedState;
    cResult[5] = updaters;
    cResult[6] = obj5;
    tmp15 = obj5;
    const tmpResult = tmp(tmp2[9]);
  }
  let obj6 = { launchPadSharedState, launchPadPullTabState };
  cResult[0] = launchPadPullTabState;
  cResult[1] = launchPadSharedState;
  cResult[2] = obj6;
  tmp7 = obj6;
  let obj = launchPadSharedState(gestureState[11]);
}) : ((launchPadSharedState) => {
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const launchPadPullTabState = launchPadSharedState.launchPadPullTabState;
  const gestureState = launchPadSharedState.gestureState;
  const updaters = launchPadSharedState.updaters;
  const tmp = closure_14();
  const tmp2 = launchPadPullTabState(gestureState[10])();
  LAUNCH_PAD_MARGIN = tmp2;
  const backgroundColor = tmp.pullTabClosed.backgroundColor;
  const backgroundColor2 = tmp.pullTabOpened.backgroundColor;
  const tmp3 = launchPadPullTabState(gestureState[12])({ launchPadSharedState, launchPadPullTabState });
  hitSlop = tmp3;
  const fn = function b() {
    if (closure_7.get()) {
      if (!gestureState.get().active) {
        let interpolateResult = LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET;
      }
      if (launchPadSharedState.get() > 0.9) {
        let tmp4 = -closure_4.get().width;
      } else {
        tmp4 = interpolateResult;
        if (gestureState.get().active) {
          if (gestureState.get().requiresPop) {
            let sum = interpolateResult + 0.3 * gestureState.get().positionOffsetX;
          } else {
            sum = interpolateResult - 4;
          }
          tmp4 = sum;
        }
      }
      if (launchPadSharedState.get() > 0) {
        let num5 = LAUNCH_PAD_PULL_TAB_BORDER_RADIUS;
      } else {
        num5 = 0;
      }
      value = launchPadSharedState.get();
      const items = [0, LAUNCH_PAD_MARGIN];
      const items1 = [backgroundColor, backgroundColor2];
      const obj6 = { transform: null, borderTopRightRadius: null, borderBottomRightRadius: null, backgroundColor: null };
      const obj7 = { translateX: null };
      const interpolateColorResult = ReanimatedRexport.interpolateColor(value * closure_4.get().width, items, items1);
      obj7.translateX = spring.withSpring(tmp4, LAUNCH_PAD_SPRING_CONFIG);
      const items2 = [obj7, , ];
      const obj9 = { translateY: null };
      obj9.translateY = spring.withSpring(launchPadPullTabState.get().position, LAUNCH_PAD_SPRING_CONFIG);
      items2[1] = obj9;
      const obj11 = { scale: null };
      obj11.scale = spring.withSpring(launchPadPullTabState.get().scale, LAUNCH_PAD_SPRING_CONFIG);
      items2[2] = obj11;
      obj6.transform = items2;
      obj6.borderTopRightRadius = spring.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
      obj6.borderBottomRightRadius = spring.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
      obj6.backgroundColor = interpolateColorResult;
      return obj6;
    }
    value2 = launchPadSharedState.get();
    const items3 = [0, -closure_4.get().width - 16];
    interpolateResult = ReanimatedRexport.interpolate(value2, [0, 1], items3);
  };
  let obj = launchPadSharedState(gestureState[9]);
  fn.__closure = { isMinimized: tmp3, gestureState, LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET, interpolate: launchPadSharedState(gestureState[9]).interpolate, launchPadSharedState, windowDimensions: tmp2, launchPadPullTabState, LAUNCH_PAD_PULL_TAB_BORDER_RADIUS: backgroundColor, interpolateColor: launchPadSharedState(gestureState[9]).interpolateColor, LAUNCH_PAD_MARGIN, backgroundColorStart: backgroundColor, backgroundColorEnd: backgroundColor2, withSpring: launchPadSharedState(gestureState[13]).withSpring, LAUNCH_PAD_SPRING_CONFIG };
  fn.__workletHash = 6656606263756;
  fn.__initData = __initData6;
  const animatedStyle = obj.useAnimatedStyle(fn);
  closure_19({ launchPadSharedState, launchPadPullTabState, updaters });
  const obj3 = { style: null, children: null };
  let items = [tmp.pullTab, animatedStyle];
  obj3.style = items;
  const obj4 = { accessibilityRole: "button", accessibilityLabel: null, hitSlop: null, style: null, onTouchStart: null, onPress: null, children: null };
  const intl = launchPadSharedState(gestureState[14]).intl;
  obj4.accessibilityLabel = intl.string(launchPadSharedState(gestureState[14]).t.yTnIfb);
  obj4.hitSlop = hitSlop;
  obj4.style = tmp.pullTabButton;
  obj4.onTouchStart = function onTouchStart() {
    const result = updaters.setLaunchPadPullTabScale(options);
  };
  obj4.onPress = launchPadPullTabState(gestureState[16]);
  obj4.children = jsx(launchPadSharedState(gestureState[15]).ChannelListMagnifyingGlassIcon, { size: "xs" });
  obj3.children = <updaters accessibilityRole="button" accessibilityLabel={null} hitSlop={null} style={null} onTouchStart={null} onPress={null}>{null}</updaters>;
  return jsx(launchPadPullTabState(gestureState[9]).View, { style: null, children: null });
}));