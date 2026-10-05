// === Module 17387: LaunchPadPullTab ===

// Module 17387 (LaunchPadPullTab)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import ChatInputConstants from "ChatInputConstants" /* 11576 */;
import useWindowDimensionsSharedValue from "useWindowDimensionsSharedValue" /* 11647 */;
import react from "react" /* 19 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11125 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let hitSlop, num, num3, num4, obj1, obj13, obj14, obj15, tmp10, tmp11, tmp13, tmp14, tmp15, tmp18, tmp20, tmp21, tmp22, tmp24, tmp25, tmp26, tmp27, tmp28, tmp9, value1;

let LAUNCH_PAD_PULL_TAB_BORDER_RADIUS;
let LAUNCH_PAD_PULL_TAB_WIDTH;
let c10;
let c9;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
let unpackModuleId;
const Pressable = react_native.Pressable;
({ LAUNCH_PAD_MARGIN: closure_4, LAUNCH_PAD_PULL_TAB_BORDER_RADIUS } = LaunchPadConstants);
const LAUNCH_PAD_PULL_TAB_HEIGHT = LaunchPadConstants.LAUNCH_PAD_PULL_TAB_HEIGHT;
({ LAUNCH_PAD_PULL_TAB_HIT_SLOP: metroImportDefault, LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET: metroImportAll, LAUNCH_PAD_PULL_TAB_SCALE_FACTOR: c9, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET: c10, LAUNCH_PAD_PULL_TAB_WIDTH, LAUNCH_PAD_SPRING_CONFIG: unpackModuleId } = LaunchPadConstants);
const CHAT_INPUT_HEIGHT = ChatInputConstants.CHAT_INPUT_HEIGHT;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { pullTab: size, pullTabButton: { width: LAUNCH_PAD_PULL_TAB_WIDTH, height: LAUNCH_PAD_PULL_TAB_HEIGHT, justifyContent: "center", alignItems: "center" }, pullTabOpened: obj2, pullTabClosed: obj3 };
size = { position: "absolute", right: 0, width: LAUNCH_PAD_PULL_TAB_WIDTH, height: LAUNCH_PAD_PULL_TAB_HEIGHT, borderTopLeftRadius: LAUNCH_PAD_PULL_TAB_BORDER_RADIUS, borderBottomLeftRadius: LAUNCH_PAD_PULL_TAB_BORDER_RADIUS, borderWidth: 1, borderTopWidth: 1, borderColor: "rgba(0, 0, 0, 0.08)" };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj3 = { backgroundColor: nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND };
let closure_14 = createStyles(obj);
const __initData = { code: "function LaunchPadPullTabTsx1(){const{keyboardHeight}=this.__closure;return keyboardHeight.get();}" };
const __initData2 = { code: "function LaunchPadPullTabTsx2(keyboardHeight_0,keyboardHeightPrev){const{launchPadSharedState,updaters,keyboardHeightOpened,launchPadPullTabState,CHAT_INPUT_HEIGHT,LAUNCH_PAD_MARGIN,getWindowDimensionsWorklet,LAUNCH_PAD_PULL_TAB_HEIGHT,LAUNCH_PAD_PULL_TAB_SCALE_OFFSET}=this.__closure;if(launchPadSharedState.get()!==0){updaters.setLaunchPadPullTabMinimized(false);return;}if(keyboardHeightPrev==null||keyboardHeight_0===keyboardHeightPrev){return;}if(keyboardHeight_0<keyboardHeightPrev){var _keyboardHeightOpened;if(keyboardHeight_0===0){updaters.setLaunchPadPullTabMinimized(false);}if(keyboardHeightOpened.get()==null){keyboardHeightOpened.set(keyboardHeightPrev);}const keyboardClosePercent=1-keyboardHeight_0/((_keyboardHeightOpened=keyboardHeightOpened.get())!==null&&_keyboardHeightOpened!==void 0?_keyboardHeightOpened:keyboardHeightPrev);const keyboardOffsetRetractionAmount=launchPadPullTabState.get().offset*keyboardClosePercent;updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position+keyboardOffsetRetractionAmount,launchPadPullTabState.get().offset-keyboardOffsetRetractionAmount);}else{updaters.setLaunchPadPullTabMinimized(true);if(keyboardHeightOpened.get()!=null){keyboardHeightOpened.set(undefined);}const keyboardWithChatInput=keyboardHeight_0+CHAT_INPUT_HEIGHT+LAUNCH_PAD_MARGIN*2;const spaceUnderPullTab=getWindowDimensionsWorklet({ignoreKeyboard:true}).height-(launchPadPullTabState.get().position+LAUNCH_PAD_PULL_TAB_HEIGHT+LAUNCH_PAD_PULL_TAB_SCALE_OFFSET);const offset=spaceUnderPullTab>keyboardWithChatInput?0:keyboardWithChatInput-spaceUnderPullTab;if(offset>0){updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position-offset,launchPadPullTabState.get().offset+offset);}}}" };
const __initData3 = { code: "function LaunchPadPullTabTsx3(){const{keyboardHeight}=this.__closure;return keyboardHeight.get();}" };
const __initData4 = { code: "function LaunchPadPullTabTsx4(keyboardHeight_0,keyboardHeightPrev){const{launchPadSharedState,updaters,keyboardHeightOpened,launchPadPullTabState,CHAT_INPUT_HEIGHT,LAUNCH_PAD_MARGIN,getWindowDimensionsWorklet,LAUNCH_PAD_PULL_TAB_HEIGHT,LAUNCH_PAD_PULL_TAB_SCALE_OFFSET}=this.__closure;if(launchPadSharedState.get()!==0){updaters.setLaunchPadPullTabMinimized(false);return;}if(keyboardHeightPrev==null||keyboardHeight_0===keyboardHeightPrev){return;}if(keyboardHeight_0<keyboardHeightPrev){var _keyboardHeightOpened;if(keyboardHeight_0===0){updaters.setLaunchPadPullTabMinimized(false);}if(keyboardHeightOpened.get()==null){keyboardHeightOpened.set(keyboardHeightPrev);}const keyboardClosePercent=1-keyboardHeight_0/((_keyboardHeightOpened=keyboardHeightOpened.get())!==null&&_keyboardHeightOpened!==void 0?_keyboardHeightOpened:keyboardHeightPrev);const keyboardOffsetRetractionAmount=launchPadPullTabState.get().offset*keyboardClosePercent;updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position+keyboardOffsetRetractionAmount,launchPadPullTabState.get().offset-keyboardOffsetRetractionAmount);}else{updaters.setLaunchPadPullTabMinimized(true);if(keyboardHeightOpened.get()!=null){keyboardHeightOpened.set(undefined);}const keyboardWithChatInput=keyboardHeight_0+CHAT_INPUT_HEIGHT+LAUNCH_PAD_MARGIN*2;const spaceUnderPullTab=getWindowDimensionsWorklet({ignoreKeyboard:true}).height-(launchPadPullTabState.get().position+LAUNCH_PAD_PULL_TAB_HEIGHT+LAUNCH_PAD_PULL_TAB_SCALE_OFFSET);const offset=spaceUnderPullTab>keyboardWithChatInput?0:keyboardWithChatInput-spaceUnderPullTab;if(offset>0){updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position-offset,launchPadPullTabState.get().offset+offset);}}}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((launchPadSharedState) => {
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const launchPadPullTabState = launchPadSharedState.launchPadPullTabState;
  const updaters = launchPadSharedState.updaters;
  const tmp = launchPadPullTabState(updaters[8])();
  let closure_3 = tmp;
  let obj = launchPadSharedState(updaters[9]);
  const sharedValue = obj.useSharedValue(undefined);
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
            let value = sharedValue.get();
            if (value == null) {
              value = arg1;
            }
            const diff = 1 - arg0 / value;
            const result2 = launchPadPullTabState.get().offset * diff;
            const setLaunchPadPullTabPosition = updaters.setLaunchPadPullTabPosition;
            const sum = launchPadPullTabState.get().position + result2;
            const result3 = setLaunchPadPullTabPosition(sum, launchPadPullTabState.get().offset - result2);
          } else {
            const result4 = updaters.setLaunchPadPullTabMinimized(true);
            if (null != sharedValue.get()) {
              const result5 = sharedValue.set(undefined);
            }
            const sum1 = arg0 + CHAT_INPUT_HEIGHT + 2 * closure_4;
            const obj = useWindowDimensionsSharedValue;
            const diff1 = obj.getWindowDimensionsWorklet({ ignoreKeyboard: true }).height - (launchPadPullTabState.get().position + LAUNCH_PAD_PULL_TAB_HEIGHT + c10);
            let num2 = 0;
            if (diff1 <= sum1) {
              num2 = sum1 - diff1;
            }
            if (0 < num2) {
              const setLaunchPadPullTabPosition2 = updaters.setLaunchPadPullTabPosition;
              const diff2 = launchPadPullTabState.get().position - num2;
              const result6 = setLaunchPadPullTabPosition2(diff2, launchPadPullTabState.get().offset + num2);
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
  ({ launchPadSharedState, updaters, keyboardHeightOpened: sharedValue, launchPadPullTabState, CHAT_INPUT_HEIGHT, LAUNCH_PAD_MARGIN: sharedValue, getWindowDimensionsWorklet: launchPadSharedState(updaters[10]).getWindowDimensionsWorklet, LAUNCH_PAD_PULL_TAB_HEIGHT, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET });
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
}) : ((launchPadSharedState) => {
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const launchPadPullTabState = launchPadSharedState.launchPadPullTabState;
  const updaters = launchPadSharedState.updaters;
  const tmp = launchPadPullTabState(updaters[8])();
  let closure_3 = tmp;
  let obj = launchPadSharedState(updaters[9]);
  const sharedValue = obj.useSharedValue(undefined);
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
            let value = sharedValue.get();
            if (value == null) {
              value = arg1;
            }
            const diff = 1 - arg0 / value;
            const result2 = launchPadPullTabState.get().offset * diff;
            const setLaunchPadPullTabPosition = updaters.setLaunchPadPullTabPosition;
            const sum = launchPadPullTabState.get().position + result2;
            const result3 = setLaunchPadPullTabPosition(sum, launchPadPullTabState.get().offset - result2);
          } else {
            const result4 = updaters.setLaunchPadPullTabMinimized(true);
            if (null != sharedValue.get()) {
              const result5 = sharedValue.set(undefined);
            }
            const sum1 = arg0 + CHAT_INPUT_HEIGHT + 2 * closure_4;
            const obj = useWindowDimensionsSharedValue;
            const diff1 = obj.getWindowDimensionsWorklet({ ignoreKeyboard: true }).height - (launchPadPullTabState.get().position + LAUNCH_PAD_PULL_TAB_HEIGHT + c10);
            let num2 = 0;
            if (diff1 <= sum1) {
              num2 = sum1 - diff1;
            }
            if (0 < num2) {
              const setLaunchPadPullTabPosition2 = updaters.setLaunchPadPullTabPosition;
              const diff2 = launchPadPullTabState.get().position - num2;
              const result6 = setLaunchPadPullTabPosition2(diff2, launchPadPullTabState.get().offset + num2);
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
  ({ launchPadSharedState, updaters, keyboardHeightOpened: sharedValue, launchPadPullTabState, CHAT_INPUT_HEIGHT, LAUNCH_PAD_MARGIN: sharedValue, getWindowDimensionsWorklet: launchPadSharedState(updaters[10]).getWindowDimensionsWorklet, LAUNCH_PAD_PULL_TAB_HEIGHT, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET });
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
});
const __initData5 = { code: "function LaunchPadPullTabTsx5(){const{isMinimized,gestureState,LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET,interpolate,launchPadSharedState,windowDimensions,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_BORDER_RADIUS,interpolateColor,LAUNCH_PAD_MARGIN,backgroundColorStart,backgroundColorEnd,withSpring,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;let translateX=isMinimized.get()&&!gestureState.get().active?LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET:interpolate(launchPadSharedState.get(),[0,1],[0,-(windowDimensions.get().width-16)]);if(launchPadSharedState.get()>0.9){translateX=-windowDimensions.get().width;}else{if(gestureState.get().active){if(gestureState.get().requiresPop){translateX=translateX+gestureState.get().positionOffsetX*0.3;}else{translateX=translateX-4;}}}const translateY=launchPadPullTabState.get().position;const borderRadius=launchPadSharedState.get()<=0&&!gestureState.get().active?0:LAUNCH_PAD_PULL_TAB_BORDER_RADIUS;const backgroundColor=interpolateColor(launchPadSharedState.get()*windowDimensions.get().width,[0,LAUNCH_PAD_MARGIN],[backgroundColorStart,backgroundColorEnd]);return{transform:[{translateX:withSpring(translateX,LAUNCH_PAD_SPRING_CONFIG)},{translateY:withSpring(translateY,LAUNCH_PAD_SPRING_CONFIG)},{scale:withSpring(launchPadPullTabState.get().scale,LAUNCH_PAD_SPRING_CONFIG)}],borderTopRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),borderBottomRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),backgroundColor:backgroundColor};}" };
const __initData6 = { code: "function LaunchPadPullTabTsx6(){const{isMinimized,gestureState,LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET,interpolate,launchPadSharedState,windowDimensions,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_BORDER_RADIUS,interpolateColor,LAUNCH_PAD_MARGIN,backgroundColorStart,backgroundColorEnd,withSpring,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;let translateX=isMinimized.get()&&!gestureState.get().active?LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET:interpolate(launchPadSharedState.get(),[0,1],[0,-(windowDimensions.get().width-16)]);if(launchPadSharedState.get()>0.9){translateX=-windowDimensions.get().width;}else if(gestureState.get().active){if(gestureState.get().requiresPop){translateX+=gestureState.get().positionOffsetX*0.3;}else{translateX-=4;}}const translateY=launchPadPullTabState.get().position;const borderRadius=launchPadSharedState.get()<=0&&!gestureState.get().active?0:LAUNCH_PAD_PULL_TAB_BORDER_RADIUS;const backgroundColor=interpolateColor(launchPadSharedState.get()*windowDimensions.get().width,[0,LAUNCH_PAD_MARGIN],[backgroundColorStart,backgroundColorEnd]);return{transform:[{translateX:withSpring(translateX,LAUNCH_PAD_SPRING_CONFIG)},{translateY:withSpring(translateY,LAUNCH_PAD_SPRING_CONFIG)},{scale:withSpring(launchPadPullTabState.get().scale,LAUNCH_PAD_SPRING_CONFIG)}],borderTopRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),borderBottomRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),backgroundColor:backgroundColor};}" };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((launchPadSharedState) => {
  let closure_4;
  let closure_7;
  let gestureState;
  let tmp33;
  const obj = launchPadSharedState(gestureState[11]);
  const cResult = obj.c(20);
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const launchPadPullTabState = launchPadSharedState.launchPadPullTabState;
  gestureState = launchPadSharedState.gestureState;
  const updaters = launchPadSharedState.updaters;
  const tmp4 = closure_14();
  let tmp5 = launchPadPullTabState;
  const tmp6 = launchPadPullTabState(gestureState[10])();
  LAUNCH_PAD_MARGIN = tmp6;
  const backgroundColor = tmp4.pullTabClosed.backgroundColor;
  const backgroundColor2 = tmp4.pullTabOpened.backgroundColor;
  if (cResult[0] === launchPadPullTabState) {
    let tmp7;
    if (cResult[1] === launchPadSharedState) {
      tmp7 = cResult[2];
    }
    const tmp8 = tmp5(gestureState[12])(tmp7);
    hitSlop = tmp8;
    const tmpResult = launchPadSharedState(gestureState[9]);
    class D {
      constructor() {
        if (closure_7.get()) {
          tmp = gestureState;
          if (!gestureState.get().active) {
            interpolateResult = closure_8;
          }
          obj = launchPadSharedState;
          num = 0.9;
          if (launchPadSharedState.get() > 0.9) {
            tmp7 = closure_4;
            tmp5 = -closure_4.get().width;
          } else {
            obj2 = gestureState;
            tmp5 = interpolateResult;
            if (gestureState.get().active) {
              if (obj2.get().requiresPop) {
                num3 = 0.3;
                sum = interpolateResult + 0.3 * obj2.get().positionOffsetX;
              } else {
                num2 = 4;
                sum = interpolateResult - 4;
              }
              tmp5 = sum;
            }
          }
          obj3 = launchPadPullTabState;
          position = launchPadPullTabState.get().position;
          num4 = 0;
          if (obj.get() > 0) {
            num5 = closure_5;
          } else {
            tmp8 = gestureState;
            num5 = 0;
          }
          tmp9 = closure_0;
          tmp10 = closure_2;
          tmp11 = closure_0(closure_2[9]);
          interpolateColor = tmp11.interpolateColor;
          tmp13 = closure_4;
          value = obj.get();
          tmp14 = LAUNCH_PAD_MARGIN;
          items = [0];
          items[1] = LAUNCH_PAD_MARGIN;
          tmp15 = backgroundColor;
          items1 = [, ];
          items1[0] = backgroundColor;
          tmp16 = backgroundColor;
          items1[1] = backgroundColor;
          obj1 = { transform: null, borderTopRightRadius: null, borderBottomRightRadius: null, backgroundColor: null };
          obj13 = { translateX: null };
          tmp18 = closure_0;
          tmp19 = closure_2;
          interpolateColorResult = interpolateColor(value * closure_4.get().width, items, items1);
          obj6 = closure_0(closure_2[13]);
          tmp20 = LAUNCH_PAD_SPRING_CONFIG;
          obj13.translateX = obj6.withSpring(tmp5, LAUNCH_PAD_SPRING_CONFIG);
          items2 = [, , ];
          items2[0] = obj13;
          obj14 = { translateY: null };
          tmp21 = closure_0;
          tmp22 = closure_2;
          obj8 = closure_0(closure_2[13]);
          obj14.translateY = obj8.withSpring(position, LAUNCH_PAD_SPRING_CONFIG);
          items2[1] = obj14;
          obj15 = { scale: null };
          tmp23 = closure_0;
          tmp24 = closure_2;
          obj10 = closure_0(closure_2[13]);
          obj15.scale = obj10.withSpring(obj3.get().scale, LAUNCH_PAD_SPRING_CONFIG);
          items2[2] = obj15;
          obj1.transform = items2;
          tmp25 = closure_0;
          tmp26 = closure_2;
          obj11 = closure_0(closure_2[13]);
          obj1.borderTopRightRadius = obj11.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
          tmp27 = closure_0;
          tmp28 = closure_2;
          obj12 = closure_0(closure_2[13]);
          obj1.borderBottomRightRadius = obj12.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
          obj1.backgroundColor = interpolateColorResult;
          return obj1;
        }
        tmp3 = closure_0(closure_2[9]);
        interpolate = tmp3.interpolate;
        value1 = launchPadSharedState.get();
        items3 = [0];
        items3[1] = -closure_4.get().width - 16;
        interpolateResult = interpolate(value1, [0, 1], items3);
        return;
      }
    }
    const useAnimatedStyle = tmpResult.useAnimatedStyle;
    D.__closure = { isMinimized: tmp8, gestureState, LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET, interpolate: launchPadSharedState(gestureState[9]).interpolate, launchPadSharedState, windowDimensions: tmp6, launchPadPullTabState, LAUNCH_PAD_PULL_TAB_BORDER_RADIUS: backgroundColor, interpolateColor: launchPadSharedState(gestureState[9]).interpolateColor, LAUNCH_PAD_MARGIN, backgroundColorStart: backgroundColor, backgroundColorEnd: backgroundColor2, withSpring: launchPadSharedState(gestureState[13]).withSpring, LAUNCH_PAD_SPRING_CONFIG };
    D.__workletHash = 13547259922441;
    D.__initData = __initData5;
    const obj2 = { isMinimized: tmp8, gestureState, LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET, interpolate: launchPadSharedState(gestureState[9]).interpolate, launchPadSharedState, windowDimensions: tmp6, launchPadPullTabState, LAUNCH_PAD_PULL_TAB_BORDER_RADIUS: backgroundColor, interpolateColor: launchPadSharedState(gestureState[9]).interpolateColor, LAUNCH_PAD_MARGIN, backgroundColorStart: backgroundColor, backgroundColorEnd: backgroundColor2, withSpring: launchPadSharedState(gestureState[13]).withSpring, LAUNCH_PAD_SPRING_CONFIG };
    const animatedStyle = useAnimatedStyle(D);
    if (cResult[3] === launchPadPullTabState) {
      if (cResult[4] === launchPadSharedState) {
        let tmp16;
        if (cResult[5] === updaters) {
          tmp16 = cResult[6];
        }
        closure_19(tmp16);
        if (cResult[7] === animatedStyle) {
          let tmp19;
          let tmp23;
          if (cResult[8] === tmp4.pullTab) {
            tmp19 = cResult[9];
          }
          const _Symbol = Symbol;
          class D {
            constructor() {
              if (closure_7.get()) {
                tmp = gestureState;
                if (!gestureState.get().active) {
                  interpolateResult = closure_8;
                }
                obj = launchPadSharedState;
                num = 0.9;
                if (launchPadSharedState.get() > 0.9) {
                  tmp7 = closure_4;
                  tmp5 = -closure_4.get().width;
                } else {
                  obj2 = gestureState;
                  tmp5 = interpolateResult;
                  if (gestureState.get().active) {
                    if (obj2.get().requiresPop) {
                      num3 = 0.3;
                      sum = interpolateResult + 0.3 * obj2.get().positionOffsetX;
                    } else {
                      num2 = 4;
                      sum = interpolateResult - 4;
                    }
                    tmp5 = sum;
                  }
                }
                obj3 = launchPadPullTabState;
                position = launchPadPullTabState.get().position;
                num4 = 0;
                if (obj.get() > 0) {
                  num5 = closure_5;
                } else {
                  tmp8 = gestureState;
                  num5 = 0;
                }
                tmp9 = closure_0;
                tmp10 = closure_2;
                tmp11 = closure_0(closure_2[9]);
                interpolateColor = tmp11.interpolateColor;
                tmp13 = closure_4;
                value = obj.get();
                tmp14 = LAUNCH_PAD_MARGIN;
                items = [0];
                items[1] = LAUNCH_PAD_MARGIN;
                tmp15 = backgroundColor;
                items1 = [, ];
                items1[0] = backgroundColor;
                tmp16 = backgroundColor;
                items1[1] = backgroundColor;
                obj1 = { transform: null, borderTopRightRadius: null, borderBottomRightRadius: null, backgroundColor: null };
                obj13 = { translateX: null };
                tmp18 = closure_0;
                tmp19 = closure_2;
                interpolateColorResult = interpolateColor(value * closure_4.get().width, items, items1);
                obj6 = closure_0(closure_2[13]);
                tmp20 = LAUNCH_PAD_SPRING_CONFIG;
                obj13.translateX = obj6.withSpring(tmp5, LAUNCH_PAD_SPRING_CONFIG);
                items2 = [, , ];
                items2[0] = obj13;
                obj14 = { translateY: null };
                tmp21 = closure_0;
                tmp22 = closure_2;
                obj8 = closure_0(closure_2[13]);
                obj14.translateY = obj8.withSpring(position, LAUNCH_PAD_SPRING_CONFIG);
                items2[1] = obj14;
                obj15 = { scale: null };
                tmp23 = closure_0;
                tmp24 = closure_2;
                obj10 = closure_0(closure_2[13]);
                obj15.scale = obj10.withSpring(obj3.get().scale, LAUNCH_PAD_SPRING_CONFIG);
                items2[2] = obj15;
                obj1.transform = items2;
                tmp25 = closure_0;
                tmp26 = closure_2;
                obj11 = closure_0(closure_2[13]);
                obj1.borderTopRightRadius = obj11.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
                tmp27 = closure_0;
                tmp28 = closure_2;
                obj12 = closure_0(closure_2[13]);
                obj1.borderBottomRightRadius = obj12.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
                obj1.backgroundColor = interpolateColorResult;
                return obj1;
              }
              tmp3 = closure_0(closure_2[9]);
              interpolate = tmp3.interpolate;
              value1 = launchPadSharedState.get();
              items3 = [0];
              items3[1] = -closure_4.get().width - 16;
              interpolateResult = interpolate(value1, [0, 1], items3);
              return;
            }
          }
          if (tmp21 === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[14]).intl;
            const stringResult = intl.string(launchPadSharedState(gestureState[14]).t.yTnIfb);
            class D {
              constructor() {
                if (closure_7.get()) {
                  tmp = gestureState;
                  if (!gestureState.get().active) {
                    interpolateResult = closure_8;
                  }
                  obj = launchPadSharedState;
                  num = 0.9;
                  if (launchPadSharedState.get() > 0.9) {
                    tmp7 = closure_4;
                    tmp5 = -closure_4.get().width;
                  } else {
                    obj2 = gestureState;
                    tmp5 = interpolateResult;
                    if (gestureState.get().active) {
                      if (obj2.get().requiresPop) {
                        num3 = 0.3;
                        sum = interpolateResult + 0.3 * obj2.get().positionOffsetX;
                      } else {
                        num2 = 4;
                        sum = interpolateResult - 4;
                      }
                      tmp5 = sum;
                    }
                  }
                  obj3 = launchPadPullTabState;
                  position = launchPadPullTabState.get().position;
                  num4 = 0;
                  if (obj.get() > 0) {
                    num5 = closure_5;
                  } else {
                    tmp8 = gestureState;
                    num5 = 0;
                  }
                  tmp9 = closure_0;
                  tmp10 = closure_2;
                  tmp11 = closure_0(closure_2[9]);
                  interpolateColor = tmp11.interpolateColor;
                  tmp13 = closure_4;
                  value = obj.get();
                  tmp14 = LAUNCH_PAD_MARGIN;
                  items = [0];
                  items[1] = LAUNCH_PAD_MARGIN;
                  tmp15 = backgroundColor;
                  items1 = [, ];
                  items1[0] = backgroundColor;
                  tmp16 = backgroundColor;
                  items1[1] = backgroundColor;
                  obj1 = { transform: null, borderTopRightRadius: null, borderBottomRightRadius: null, backgroundColor: null };
                  obj13 = { translateX: null };
                  tmp18 = closure_0;
                  tmp19 = closure_2;
                  interpolateColorResult = interpolateColor(value * closure_4.get().width, items, items1);
                  obj6 = closure_0(closure_2[13]);
                  tmp20 = LAUNCH_PAD_SPRING_CONFIG;
                  obj13.translateX = obj6.withSpring(tmp5, LAUNCH_PAD_SPRING_CONFIG);
                  items2 = [, , ];
                  items2[0] = obj13;
                  obj14 = { translateY: null };
                  tmp21 = closure_0;
                  tmp22 = closure_2;
                  obj8 = closure_0(closure_2[13]);
                  obj14.translateY = obj8.withSpring(position, LAUNCH_PAD_SPRING_CONFIG);
                  items2[1] = obj14;
                  obj15 = { scale: null };
                  tmp23 = closure_0;
                  tmp24 = closure_2;
                  obj10 = closure_0(closure_2[13]);
                  obj15.scale = obj10.withSpring(obj3.get().scale, LAUNCH_PAD_SPRING_CONFIG);
                  items2[2] = obj15;
                  obj1.transform = items2;
                  tmp25 = closure_0;
                  tmp26 = closure_2;
                  obj11 = closure_0(closure_2[13]);
                  obj1.borderTopRightRadius = obj11.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
                  tmp27 = closure_0;
                  tmp28 = closure_2;
                  obj12 = closure_0(closure_2[13]);
                  obj1.borderBottomRightRadius = obj12.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
                  obj1.backgroundColor = interpolateColorResult;
                  return obj1;
                }
                tmp3 = closure_0(closure_2[9]);
                interpolate = tmp3.interpolate;
                value1 = launchPadSharedState.get();
                items3 = [0];
                items3[1] = -closure_4.get().width - 16;
                interpolateResult = interpolate(value1, [0, 1], items3);
                return;
              }
            }
            tmp23 = stringResult;
          } else {
            tmp23 = cResult[10];
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
                  obj = launchPadSharedState;
                  num = 0.9;
                  if (launchPadSharedState.get() > 0.9) {
                    tmp7 = closure_4;
                    tmp5 = -closure_4.get().width;
                  } else {
                    obj2 = gestureState;
                    tmp5 = interpolateResult;
                    if (gestureState.get().active) {
                      if (obj2.get().requiresPop) {
                        num3 = 0.3;
                        sum = interpolateResult + 0.3 * obj2.get().positionOffsetX;
                      } else {
                        num2 = 4;
                        sum = interpolateResult - 4;
                      }
                      tmp5 = sum;
                    }
                  }
                  obj3 = launchPadPullTabState;
                  position = launchPadPullTabState.get().position;
                  num4 = 0;
                  if (obj.get() > 0) {
                    num5 = closure_5;
                  } else {
                    tmp8 = gestureState;
                    num5 = 0;
                  }
                  tmp9 = closure_0;
                  tmp10 = closure_2;
                  tmp11 = closure_0(closure_2[9]);
                  interpolateColor = tmp11.interpolateColor;
                  tmp13 = closure_4;
                  value = obj.get();
                  tmp14 = LAUNCH_PAD_MARGIN;
                  items = [0];
                  items[1] = LAUNCH_PAD_MARGIN;
                  tmp15 = backgroundColor;
                  items1 = [, ];
                  items1[0] = backgroundColor;
                  tmp16 = backgroundColor;
                  items1[1] = backgroundColor;
                  obj1 = { transform: null, borderTopRightRadius: null, borderBottomRightRadius: null, backgroundColor: null };
                  obj13 = { translateX: null };
                  tmp18 = closure_0;
                  tmp19 = closure_2;
                  interpolateColorResult = interpolateColor(value * closure_4.get().width, items, items1);
                  obj6 = closure_0(closure_2[13]);
                  tmp20 = LAUNCH_PAD_SPRING_CONFIG;
                  obj13.translateX = obj6.withSpring(tmp5, LAUNCH_PAD_SPRING_CONFIG);
                  items2 = [, , ];
                  items2[0] = obj13;
                  obj14 = { translateY: null };
                  tmp21 = closure_0;
                  tmp22 = closure_2;
                  obj8 = closure_0(closure_2[13]);
                  obj14.translateY = obj8.withSpring(position, LAUNCH_PAD_SPRING_CONFIG);
                  items2[1] = obj14;
                  obj15 = { scale: null };
                  tmp23 = closure_0;
                  tmp24 = closure_2;
                  obj10 = closure_0(closure_2[13]);
                  obj15.scale = obj10.withSpring(obj3.get().scale, LAUNCH_PAD_SPRING_CONFIG);
                  items2[2] = obj15;
                  obj1.transform = items2;
                  tmp25 = closure_0;
                  tmp26 = closure_2;
                  obj11 = closure_0(closure_2[13]);
                  obj1.borderTopRightRadius = obj11.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
                  tmp27 = closure_0;
                  tmp28 = closure_2;
                  obj12 = closure_0(closure_2[13]);
                  obj1.borderBottomRightRadius = obj12.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
                  obj1.backgroundColor = interpolateColorResult;
                  return obj1;
                }
                tmp3 = closure_0(closure_2[9]);
                interpolate = tmp3.interpolate;
                value1 = launchPadSharedState.get();
                items3 = [0];
                items3[1] = -closure_4.get().width - 16;
                interpolateResult = interpolate(value1, [0, 1], items3);
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
            cResult[13] = jsx(launchPadSharedState(gestureState[15]).ChannelListMagnifyingGlassIcon, { size: "xs" });
            jsx(launchPadSharedState(gestureState[15]).ChannelListMagnifyingGlassIcon, { size: "xs" });
            class D {
              constructor() {
                if (closure_7.get()) {
                  tmp = gestureState;
                  if (!gestureState.get().active) {
                    interpolateResult = closure_8;
                  }
                  obj = launchPadSharedState;
                  num = 0.9;
                  if (launchPadSharedState.get() > 0.9) {
                    tmp7 = closure_4;
                    tmp5 = -closure_4.get().width;
                  } else {
                    obj2 = gestureState;
                    tmp5 = interpolateResult;
                    if (gestureState.get().active) {
                      if (obj2.get().requiresPop) {
                        num3 = 0.3;
                        sum = interpolateResult + 0.3 * obj2.get().positionOffsetX;
                      } else {
                        num2 = 4;
                        sum = interpolateResult - 4;
                      }
                      tmp5 = sum;
                    }
                  }
                  obj3 = launchPadPullTabState;
                  position = launchPadPullTabState.get().position;
                  num4 = 0;
                  if (obj.get() > 0) {
                    num5 = closure_5;
                  } else {
                    tmp8 = gestureState;
                    num5 = 0;
                  }
                  tmp9 = closure_0;
                  tmp10 = closure_2;
                  tmp11 = closure_0(closure_2[9]);
                  interpolateColor = tmp11.interpolateColor;
                  tmp13 = closure_4;
                  value = obj.get();
                  tmp14 = LAUNCH_PAD_MARGIN;
                  items = [0];
                  items[1] = LAUNCH_PAD_MARGIN;
                  tmp15 = backgroundColor;
                  items1 = [, ];
                  items1[0] = backgroundColor;
                  tmp16 = backgroundColor;
                  items1[1] = backgroundColor;
                  obj1 = { transform: null, borderTopRightRadius: null, borderBottomRightRadius: null, backgroundColor: null };
                  obj13 = { translateX: null };
                  tmp18 = closure_0;
                  tmp19 = closure_2;
                  interpolateColorResult = interpolateColor(value * closure_4.get().width, items, items1);
                  obj6 = closure_0(closure_2[13]);
                  tmp20 = LAUNCH_PAD_SPRING_CONFIG;
                  obj13.translateX = obj6.withSpring(tmp5, LAUNCH_PAD_SPRING_CONFIG);
                  items2 = [, , ];
                  items2[0] = obj13;
                  obj14 = { translateY: null };
                  tmp21 = closure_0;
                  tmp22 = closure_2;
                  obj8 = closure_0(closure_2[13]);
                  obj14.translateY = obj8.withSpring(position, LAUNCH_PAD_SPRING_CONFIG);
                  items2[1] = obj14;
                  obj15 = { scale: null };
                  tmp23 = closure_0;
                  tmp24 = closure_2;
                  obj10 = closure_0(closure_2[13]);
                  obj15.scale = obj10.withSpring(obj3.get().scale, LAUNCH_PAD_SPRING_CONFIG);
                  items2[2] = obj15;
                  obj1.transform = items2;
                  tmp25 = closure_0;
                  tmp26 = closure_2;
                  obj11 = closure_0(closure_2[13]);
                  obj1.borderTopRightRadius = obj11.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
                  tmp27 = closure_0;
                  tmp28 = closure_2;
                  obj12 = closure_0(closure_2[13]);
                  obj1.borderBottomRightRadius = obj12.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
                  obj1.backgroundColor = interpolateColorResult;
                  return obj1;
                }
                tmp3 = closure_0(closure_2[9]);
                interpolate = tmp3.interpolate;
                value1 = launchPadSharedState.get();
                items3 = [0];
                items3[1] = -closure_4.get().width - 16;
                interpolateResult = interpolate(value1, [0, 1], items3);
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
          if (cResult[14] === tmp4.pullTabButton) {
            class O {
              constructor() {
                result = updaters.setLaunchPadPullTabScale(closure_9);
                return;
              }
            }
            if (cResult[17] === tmp19) {
              class O {
                constructor() {
                  result = updaters.setLaunchPadPullTabScale(closure_9);
                  return;
                }
              }
              return tmp33;
            }
            class D {
              constructor() {
                if (closure_7.get()) {
                  tmp = gestureState;
                  if (!gestureState.get().active) {
                    interpolateResult = closure_8;
                  }
                  obj = launchPadSharedState;
                  num = 0.9;
                  if (launchPadSharedState.get() > 0.9) {
                    tmp7 = closure_4;
                    tmp5 = -closure_4.get().width;
                  } else {
                    obj2 = gestureState;
                    tmp5 = interpolateResult;
                    if (gestureState.get().active) {
                      if (obj2.get().requiresPop) {
                        num3 = 0.3;
                        sum = interpolateResult + 0.3 * obj2.get().positionOffsetX;
                      } else {
                        num2 = 4;
                        sum = interpolateResult - 4;
                      }
                      tmp5 = sum;
                    }
                  }
                  obj3 = launchPadPullTabState;
                  position = launchPadPullTabState.get().position;
                  num4 = 0;
                  if (obj.get() > 0) {
                    num5 = closure_5;
                  } else {
                    tmp8 = gestureState;
                    num5 = 0;
                  }
                  tmp9 = closure_0;
                  tmp10 = closure_2;
                  tmp11 = closure_0(closure_2[9]);
                  interpolateColor = tmp11.interpolateColor;
                  tmp13 = closure_4;
                  value = obj.get();
                  tmp14 = LAUNCH_PAD_MARGIN;
                  items = [0];
                  items[1] = LAUNCH_PAD_MARGIN;
                  tmp15 = backgroundColor;
                  items1 = [, ];
                  items1[0] = backgroundColor;
                  tmp16 = backgroundColor;
                  items1[1] = backgroundColor;
                  obj1 = { transform: null, borderTopRightRadius: null, borderBottomRightRadius: null, backgroundColor: null };
                  obj13 = { translateX: null };
                  tmp18 = closure_0;
                  tmp19 = closure_2;
                  interpolateColorResult = interpolateColor(value * closure_4.get().width, items, items1);
                  obj6 = closure_0(closure_2[13]);
                  tmp20 = LAUNCH_PAD_SPRING_CONFIG;
                  obj13.translateX = obj6.withSpring(tmp5, LAUNCH_PAD_SPRING_CONFIG);
                  items2 = [, , ];
                  items2[0] = obj13;
                  obj14 = { translateY: null };
                  tmp21 = closure_0;
                  tmp22 = closure_2;
                  obj8 = closure_0(closure_2[13]);
                  obj14.translateY = obj8.withSpring(position, LAUNCH_PAD_SPRING_CONFIG);
                  items2[1] = obj14;
                  obj15 = { scale: null };
                  tmp23 = closure_0;
                  tmp24 = closure_2;
                  obj10 = closure_0(closure_2[13]);
                  obj15.scale = obj10.withSpring(obj3.get().scale, LAUNCH_PAD_SPRING_CONFIG);
                  items2[2] = obj15;
                  obj1.transform = items2;
                  tmp25 = closure_0;
                  tmp26 = closure_2;
                  obj11 = closure_0(closure_2[13]);
                  obj1.borderTopRightRadius = obj11.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
                  tmp27 = closure_0;
                  tmp28 = closure_2;
                  obj12 = closure_0(closure_2[13]);
                  obj1.borderBottomRightRadius = obj12.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
                  obj1.backgroundColor = interpolateColorResult;
                  return obj1;
                }
                tmp3 = closure_0(closure_2[9]);
                interpolate = tmp3.interpolate;
                value1 = launchPadSharedState.get();
                items3 = [0];
                items3[1] = -closure_4.get().width - 16;
                interpolateResult = interpolate(value1, [0, 1], items3);
                return;
              }
            }
            const tmp35 = jsx(tmp5(gestureState[9]).View, { style: null, children: tmp28 });
            cResult[17] = tmp19;
            cResult[18] = tmp28;
            cResult[19] = tmp35;
            tmp33 = tmp35;
          }
          const tmp32 = <updaters accessibilityRole="button" accessibilityLabel={tmp23} hitSlop={hitSlop} style={tmp4.pullTabButton} onTouchStart={O} onPress={tmp5(gestureState[16])}>{tmp26}</updaters>;
          cResult[14] = tmp4.pullTabButton;
          cResult[15] = O;
          cResult[16] = tmp32;
        }
        class D {
          constructor() {
            if (closure_7.get()) {
              tmp = gestureState;
              if (!gestureState.get().active) {
                interpolateResult = closure_8;
              }
              obj = launchPadSharedState;
              num = 0.9;
              if (launchPadSharedState.get() > 0.9) {
                tmp7 = closure_4;
                tmp5 = -closure_4.get().width;
              } else {
                obj2 = gestureState;
                tmp5 = interpolateResult;
                if (gestureState.get().active) {
                  if (obj2.get().requiresPop) {
                    num3 = 0.3;
                    sum = interpolateResult + 0.3 * obj2.get().positionOffsetX;
                  } else {
                    num2 = 4;
                    sum = interpolateResult - 4;
                  }
                  tmp5 = sum;
                }
              }
              obj3 = launchPadPullTabState;
              position = launchPadPullTabState.get().position;
              num4 = 0;
              if (obj.get() > 0) {
                num5 = closure_5;
              } else {
                tmp8 = gestureState;
                num5 = 0;
              }
              tmp9 = closure_0;
              tmp10 = closure_2;
              tmp11 = closure_0(closure_2[9]);
              interpolateColor = tmp11.interpolateColor;
              tmp13 = closure_4;
              value = obj.get();
              tmp14 = LAUNCH_PAD_MARGIN;
              items = [0];
              items[1] = LAUNCH_PAD_MARGIN;
              tmp15 = backgroundColor;
              items1 = [, ];
              items1[0] = backgroundColor;
              tmp16 = backgroundColor;
              items1[1] = backgroundColor;
              obj1 = { transform: null, borderTopRightRadius: null, borderBottomRightRadius: null, backgroundColor: null };
              obj13 = { translateX: null };
              tmp18 = closure_0;
              tmp19 = closure_2;
              interpolateColorResult = interpolateColor(value * closure_4.get().width, items, items1);
              obj6 = closure_0(closure_2[13]);
              tmp20 = LAUNCH_PAD_SPRING_CONFIG;
              obj13.translateX = obj6.withSpring(tmp5, LAUNCH_PAD_SPRING_CONFIG);
              items2 = [, , ];
              items2[0] = obj13;
              obj14 = { translateY: null };
              tmp21 = closure_0;
              tmp22 = closure_2;
              obj8 = closure_0(closure_2[13]);
              obj14.translateY = obj8.withSpring(position, LAUNCH_PAD_SPRING_CONFIG);
              items2[1] = obj14;
              obj15 = { scale: null };
              tmp23 = closure_0;
              tmp24 = closure_2;
              obj10 = closure_0(closure_2[13]);
              obj15.scale = obj10.withSpring(obj3.get().scale, LAUNCH_PAD_SPRING_CONFIG);
              items2[2] = obj15;
              obj1.transform = items2;
              tmp25 = closure_0;
              tmp26 = closure_2;
              obj11 = closure_0(closure_2[13]);
              obj1.borderTopRightRadius = obj11.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
              tmp27 = closure_0;
              tmp28 = closure_2;
              obj12 = closure_0(closure_2[13]);
              obj1.borderBottomRightRadius = obj12.withSpring(num5, LAUNCH_PAD_SPRING_CONFIG);
              obj1.backgroundColor = interpolateColorResult;
              return obj1;
            }
            tmp3 = closure_0(closure_2[9]);
            interpolate = tmp3.interpolate;
            value1 = launchPadSharedState.get();
            items3 = [0];
            items3[1] = -closure_4.get().width - 16;
            interpolateResult = interpolate(value1, [0, 1], items3);
            return;
          }
        }
        tmp20[0] = tmp4.pullTab;
        tmp20[1] = animatedStyle;
        cResult[7] = animatedStyle;
        cResult[8] = tmp4.pullTab;
        cResult[9] = tmp20;
        tmp19 = tmp20;
      }
    }
    let obj5 = { launchPadSharedState, launchPadPullTabState, updaters };
    cResult[3] = launchPadPullTabState;
    cResult[4] = launchPadSharedState;
    cResult[5] = updaters;
    let num5 = 6;
    cResult[6] = obj5;
    tmp16 = obj5;
  }
  let obj6 = { launchPadSharedState, launchPadPullTabState };
  cResult[0] = launchPadPullTabState;
  cResult[1] = launchPadSharedState;
  cResult[2] = obj6;
  tmp7 = obj6;
}) : ((launchPadSharedState) => {
  let closure_4;
  let closure_7;
  let intl;
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
    let interpolateColorResult;
    let items2;
    let obj10;
    let obj11;
    let obj12;
    let obj6;
    let obj8;
    if (closure_7.get()) {
      let interpolateResult;
      let tmp5;
      let num5;
      if (!gestureState.get().active) {
        interpolateResult = metroImportAll;
      }
      if (launchPadSharedState.get() > 0.9) {
        tmp5 = -closure_4.get().width;
      } else {
        tmp5 = interpolateResult;
        if (gestureState.get().active) {
          let sum;
          if (gestureState.get().requiresPop) {
            sum = interpolateResult + 0.3 * gestureState.get().positionOffsetX;
          } else {
            sum = interpolateResult - 4;
          }
          tmp5 = sum;
        }
      }
      const position = launchPadPullTabState.get().position;
      if (launchPadSharedState.get() > 0) {
        num5 = LAUNCH_PAD_PULL_TAB_BORDER_RADIUS;
      } else {
        num5 = 0;
      }
      const interpolateColor = ReanimatedRexport.interpolateColor;
      ReanimatedRexport;
      const value = launchPadSharedState.get();
      const items = [0, closure_4];
      const items1 = [backgroundColor, backgroundColor2];
      const obj4 = { transform: items2, borderTopRightRadius: obj11.withSpring(num5, unpackModuleId), borderBottomRightRadius: obj12.withSpring(num5, unpackModuleId), backgroundColor: interpolateColorResult };
      const obj5 = { translateX: obj6.withSpring(tmp5, unpackModuleId) };
      interpolateColorResult = interpolateColor(value * closure_4.get().width, items, items1);
      items2 = [obj5, , ];
      obj6 = spring;
      const obj7 = { translateY: obj8.withSpring(position, unpackModuleId) };
      items2[1] = obj7;
      obj8 = spring;
      const obj9 = { scale: obj10.withSpring(launchPadPullTabState.get().scale, unpackModuleId) };
      items2[2] = obj9;
      obj10 = spring;
      obj11 = spring;
      obj12 = spring;
      return obj4;
    }
    const interpolate = ReanimatedRexport.interpolate;
    ReanimatedRexport;
    const value2 = launchPadSharedState.get();
    const items3 = [0, -closure_4.get().width - 16];
    interpolateResult = interpolate(value2, [0, 1], items3);
  };
  const obj = launchPadSharedState(gestureState[9]);
  fn.__closure = { isMinimized: tmp3, gestureState, LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET, interpolate: launchPadSharedState(gestureState[9]).interpolate, launchPadSharedState, windowDimensions: tmp2, launchPadPullTabState, LAUNCH_PAD_PULL_TAB_BORDER_RADIUS: backgroundColor, interpolateColor: launchPadSharedState(gestureState[9]).interpolateColor, LAUNCH_PAD_MARGIN, backgroundColorStart: backgroundColor, backgroundColorEnd: backgroundColor2, withSpring: launchPadSharedState(gestureState[13]).withSpring, LAUNCH_PAD_SPRING_CONFIG };
  fn.__workletHash = 6656606263756;
  fn.__initData = __initData6;
  ({ isMinimized: tmp3, gestureState, LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET, interpolate: launchPadSharedState(gestureState[9]).interpolate, launchPadSharedState, windowDimensions: tmp2, launchPadPullTabState, LAUNCH_PAD_PULL_TAB_BORDER_RADIUS: backgroundColor, interpolateColor: launchPadSharedState(gestureState[9]).interpolateColor, LAUNCH_PAD_MARGIN, backgroundColorStart: backgroundColor, backgroundColorEnd: backgroundColor2, withSpring: launchPadSharedState(gestureState[13]).withSpring, LAUNCH_PAD_SPRING_CONFIG });
  const animatedStyle = obj.useAnimatedStyle(fn);
  let tmp5 = closure_19({ launchPadSharedState, launchPadPullTabState, updaters });
  let items = [tmp.pullTab, animatedStyle];
  let obj4 = {
    accessibilityRole: "button",
    accessibilityLabel: intl.string(launchPadSharedState(gestureState[14]).t.yTnIfb),
    hitSlop,
    style: tmp.pullTabButton,
    onTouchStart() {
      const result = updaters.setLaunchPadPullTabScale(React4);
    },
    onPress: launchPadPullTabState(gestureState[16]),
    children: null
  };
  const View = launchPadPullTabState(gestureState[9]).View;
  intl = launchPadSharedState(gestureState[14]).intl;
  return <View style={items}>{null}</View>;
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadPullTab.tsx");

export default memoResult;