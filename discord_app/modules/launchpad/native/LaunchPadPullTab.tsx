// discord_app/modules/launchpad/native/LaunchPadPullTab.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef1652 from "../../../../_runtime/metro/01652__.js";
import useAnimatedKeyboardHeightDefault from "../../keyboard/native/useAnimatedKeyboardHeight.tsx";
import useWindowDimensionsSharedValueDefault from "../../screen/useWindowDimensionsSharedValue.native.tsx";
import showLaunchPadDefault from "showLaunchPad.tsx";
import useLaunchPadPullTabMinimizedDefault from "useLaunchPadPullTabMinimized.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const Pressable = fn(17).Pressable;
const LaunchPadConstants = fn(12313);
({ LAUNCH_PAD_MARGIN: closure_4, LAUNCH_PAD_PULL_TAB_BORDER_RADIUS } = LaunchPadConstants);
const LAUNCH_PAD_PULL_TAB_HEIGHT = LaunchPadConstants.LAUNCH_PAD_PULL_TAB_HEIGHT;
({
  LAUNCH_PAD_PULL_TAB_HIT_SLOP: metroImportDefault,
  LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET: closure_8,
  LAUNCH_PAD_PULL_TAB_SCALE_FACTOR: closure_9,
  LAUNCH_PAD_PULL_TAB_SCALE_OFFSET: closure_10,
  LAUNCH_PAD_PULL_TAB_WIDTH,
  LAUNCH_PAD_SPRING_CONFIG: closure_11,
} = LaunchPadConstants);
const CHAT_INPUT_HEIGHT = fn(13703).CHAT_INPUT_HEIGHT;
let jsx = fn(21).jsx;
const createStyles = fn(5243);
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
let closure_15 = {
  code: "(function LaunchPadPullTabTsx1(){let[keyboardHeight]=this.__closure;return keyboardHeight.get();})",
};
let closure_16 = {
  code: "(function LaunchPadPullTabTsx2(keyboardHeight,keyboardHeightPrev){let[launchPadSharedState,updaters,keyboardHeightOpened,launchPadPullTabState,CHAT_INPUT_HEIGHT,LAUNCH_PAD_MARGIN,getWindowDimensionsWorklet,LAUNCH_PAD_PULL_TAB_HEIGHT,LAUNCH_PAD_PULL_TAB_SCALE_OFFSET]=this.__closure;if(launchPadSharedState.get()!==0){updaters.setLaunchPadPullTabMinimized(false);return;}if(keyboardHeightPrev==null||keyboardHeight===keyboardHeightPrev){return;}if(keyboardHeight<keyboardHeightPrev){var _keyboardHeightOpened;if(keyboardHeight===0){updaters.setLaunchPadPullTabMinimized(false);}if(keyboardHeightOpened.get()==null){keyboardHeightOpened.set(keyboardHeightPrev);}const keyboardClosePercent=1-keyboardHeight/((_keyboardHeightOpened=keyboardHeightOpened.get())!==null&&_keyboardHeightOpened!==void 0?_keyboardHeightOpened:keyboardHeightPrev);const keyboardOffsetRetractionAmount=launchPadPullTabState.get().offset*keyboardClosePercent;updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position+keyboardOffsetRetractionAmount,launchPadPullTabState.get().offset-keyboardOffsetRetractionAmount);}else{updaters.setLaunchPadPullTabMinimized(true);if(keyboardHeightOpened.get()!=null){keyboardHeightOpened.set(undefined);}const keyboardWithChatInput=keyboardHeight+CHAT_INPUT_HEIGHT+LAUNCH_PAD_MARGIN*2;const spaceUnderPullTab=getWindowDimensionsWorklet({ignoreKeyboard:true}).height-(launchPadPullTabState.get().position+LAUNCH_PAD_PULL_TAB_HEIGHT+LAUNCH_PAD_PULL_TAB_SCALE_OFFSET);const offset=spaceUnderPullTab>keyboardWithChatInput?0:keyboardWithChatInput-spaceUnderPullTab;if(offset>0){updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position-offset,launchPadPullTabState.get().offset+offset);}}})",
};
let closure_17 = {
  code: "(function LaunchPadPullTabTsx3(){let[isMinimized,gestureState,LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET,interpolate,launchPadSharedState,windowDimensions,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_BORDER_RADIUS,interpolateColor,LAUNCH_PAD_MARGIN,backgroundColorStart,backgroundColorEnd,withSpring,LAUNCH_PAD_SPRING_CONFIG]=this.__closure;let translateX=isMinimized.get()&&!gestureState.get().active?LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET:interpolate(launchPadSharedState.get(),[0,1],[0,-(windowDimensions.get().width-16)]);if(launchPadSharedState.get()>0.9){translateX=-windowDimensions.get().width;}else if(gestureState.get().active){if(gestureState.get().requiresPop){translateX+=gestureState.get().positionOffsetX*0.3;}else{translateX-=4;}}const translateY=launchPadPullTabState.get().position;const borderRadius=launchPadSharedState.get()<=0&&!gestureState.get().active?0:LAUNCH_PAD_PULL_TAB_BORDER_RADIUS;const backgroundColor=interpolateColor(launchPadSharedState.get()*windowDimensions.get().width,[0,LAUNCH_PAD_MARGIN],[backgroundColorStart,backgroundColorEnd]);return{transform:[{translateX:withSpring(translateX,LAUNCH_PAD_SPRING_CONFIG)},{translateY:withSpring(translateY,LAUNCH_PAD_SPRING_CONFIG)},{scale:withSpring(launchPadPullTabState.get().scale,LAUNCH_PAD_SPRING_CONFIG)}],borderTopRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),borderBottomRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),backgroundColor:backgroundColor};})",
};
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND };
size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadPullTab.tsx");

export default noop.memo(function LaunchPadPullTab(gestureState) {
  ({ launchPadSharedState, launchPadPullTabState, updaters } = gestureState);
  _require = updaters;
  const tmp = closure_14();
  let tmp4 = useWindowDimensionsSharedValueDefault();
  const tmp5 = useLaunchPadPullTabMinimizedDefault({ launchPadSharedState, launchPadPullTabState });
  items = [
    closure_17,
    tmp5,
    gestureState.gestureState,
    c8,
    require("../../../../_runtime/metro/01652__.js").interpolate,
    launchPadSharedState,
    tmp4,
    launchPadPullTabState,
    c5,
    require("../../../../_runtime/metro/01652__.js").interpolateColor,
    c4,
    tmp.pullTabClosed.backgroundColor,
    tmp.pullTabOpened.backgroundColor,
    require("spring/spring").withSpring,
    c11,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  hitSlop = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  jsx = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22] = items;
  class LaunchPadPullTabTsx3 {
    constructor() {
      if (closure_0.get()) {
        tmp = closure_1;
        if (!closure_1.get().active) {
          tmp2 = closure_2;
        }
        obj = closure_4;
        num = 0.9;
        if (closure_4.get() > 0.9) {
          tmp6 = closure_5;
          tmp4 = -closure_5.get().width;
        } else {
          obj2 = closure_1;
          tmp4 = tmp2;
          if (closure_1.get().active) {
            if (obj2.get().requiresPop) {
              num3 = 0.3;
              sum = tmp2 + 0.3 * obj2.get().positionOffsetX;
            } else {
              num2 = 4;
              sum = tmp2 - 4;
            }
            tmp4 = sum;
          }
        }
        obj3 = closure_6;
        num4 = 0;
        if (obj.get() > 0) {
          num5 = closure_7;
        } else {
          tmp7 = closure_1;
          num5 = 0;
        }
        tmp8 = closure_8;
        tmp10 = closure_5;
        value = obj.get();
        tmp11 = closure_9;
        items = [0];
        items[1] = closure_9;
        tmp12 = closure_10;
        items1 = [,];
        items1[0] = closure_10;
        tmp13 = closure_11;
        items1[1] = closure_11;
        obj1 = { transform: null, borderTopRightRadius: null, borderBottomRightRadius: null, backgroundColor: null };
        obj8 = { translateX: null };
        tmp15 = closure_12;
        tmp16 = closure_13;
        tmp14 = closure_8(value * closure_5.get().width, items, items1);
        obj8.translateX = closure_12(tmp4, closure_13);
        items2 = [, ,];
        items2[0] = obj8;
        obj9 = { translateY: null };
        obj9.translateY = closure_12(closure_6.get().position, closure_13);
        items2[1] = obj9;
        obj10 = { scale: null };
        obj10.scale = closure_12(obj3.get().scale, closure_13);
        items2[2] = obj10;
        obj1.transform = items2;
        obj1.borderTopRightRadius = closure_12(num5, closure_13);
        obj1.borderBottomRightRadius = closure_12(num5, closure_13);
        obj1.backgroundColor = tmp14;
        return obj1;
      }
      value1 = closure_4.get();
      items3 = [0];
      items3[1] = -closure_5.get().width - 16;
      tmp2 = closure_3(value1, [0, 1], items3);
      return;
    }
  }
  let items1 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22];
  LaunchPadPullTabTsx3.__closure = items1;
  LaunchPadPullTabTsx3.__workletHash = 9280703221520;
  LaunchPadPullTabTsx3.__initData = tmp8;
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(LaunchPadPullTabTsx3);
  const obj = require("../../../../_runtime/metro/01652__.js");
  const tmp7 = c4;
  const tmp24 = useAnimatedKeyboardHeightDefault();
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(undefined);
  const tmp6Result = require("../../../../_runtime/metro/01652__.js");
  let items2 = [closure_15, tmp24];
  _require = undefined;
  [tmp26, tmp27] = items2;
  class LaunchPadPullTabTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  let items3 = [tmp27];
  LaunchPadPullTabTsx1.__closure = items3;
  LaunchPadPullTabTsx1.__workletHash = 13083151348443;
  LaunchPadPullTabTsx1.__initData = tmp26;
  const items4 = [
    closure_16,
    launchPadSharedState,
    updaters,
    sharedValue,
    launchPadPullTabState,
    c12,
    tmp7,
    require("useWindowDimensionsSharedValue").getWindowDimensionsWorklet,
    c6,
    c10,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  hitSlop = undefined;
  c8 = undefined;
  [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37] = items4;
  class LaunchPadPullTabTsx2 {
    constructor(arg0, arg1) {
      if (0 === closure_0.get()) {
        tmp3 = arg1;
        tmp4 = null;
        if (null != arg1) {
          tmp23 = gestureState;
          if (gestureState !== arg1) {
            if (gestureState < arg1) {
              if (0 === gestureState) {
                tmp13 = closure_1;
                flag2 = false;
                result = closure_1.setLaunchPadPullTabMinimized(false);
              }
              obj2 = closure_2;
              if (null == closure_2.get()) {
                result1 = obj2.set(arg1);
              }
              value = obj2.get();
              if (value == null) {
                value = arg1;
              }
              num3 = 1;
              tmp18 = closure_3;
              diff = 1 - gestureState / value;
              result2 = closure_3.get().offset * diff;
              tmp20 = closure_1;
              sum = closure_3.get().position + result2;
              result3 = closure_1.setLaunchPadPullTabPosition(sum, closure_3.get().offset - result2);
            } else {
              obj3 = closure_1;
              flag3 = true;
              result4 = closure_1.setLaunchPadPullTabMinimized(true);
              obj4 = closure_2;
              if (null != closure_2.get()) {
                result5 = obj4.set(undefined);
              }
              tmp6 = closure_4;
              tmp7 = closure_5;
              num = 2;
              sum1 = gestureState + closure_4 + 2 * closure_5;
              tmp9 = closure_6;
              obj = closure_3;
              tmp10 = closure_7;
              tmp11 = closure_8;
              diff1 = closure_6({ ignoreKeyboard: true }).height - (closure_3.get().position + closure_7 + closure_8);
              num2 = 0;
              if (diff1 <= sum1) {
                num2 = sum1 - diff1;
              }
              if (0 < num2) {
                diff2 = obj.get().position - num2;
                result6 = obj3.setLaunchPadPullTabPosition(diff2, obj.get().offset + num2);
              }
            }
          }
        }
      } else {
        tmp = closure_1;
        flag = false;
        result7 = closure_1.setLaunchPadPullTabMinimized(false);
      }
      return;
    }
  }
  const items5 = [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37];
  LaunchPadPullTabTsx2.__closure = items5;
  LaunchPadPullTabTsx2.__workletHash = 14150743699512;
  LaunchPadPullTabTsx2.__initData = tmp28;
  const animatedReaction = require("../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    LaunchPadPullTabTsx1,
    LaunchPadPullTabTsx2,
  );
  const obj2 = { style: null, children: null };
  const items6 = [tmp.pullTab, animatedStyle];
  obj2.style = items6;
  const obj3 = {
    accessibilityRole: "button",
    accessibilityLabel: null,
    hitSlop: null,
    style: null,
    onTouchStart: null,
    onPress: null,
    children: null,
  };
  const intl = tmp6(1113).intl;
  obj3.accessibilityLabel = intl.string(require("util").t.yTnIfb);
  obj3.hitSlop = hitSlop;
  obj3.style = tmp.pullTabButton;
  obj3.onTouchStart = function onTouchStart() {
    const result = _undefined.setLaunchPadPullTabScale(React6);
  };
  obj3.onPress = showLaunchPadDefault;
  obj3.children = jsx(require("ChannelListMagnifyingGlassIcon").ChannelListMagnifyingGlassIcon, { size: "xs" });
  obj2.children = (
    <c3
      accessibilityRole="button"
      accessibilityLabel={null}
      hitSlop={null}
      style={null}
      onTouchStart={null}
      onPress={null}
    >
      {null}
    </c3>
  );
  return jsx(_modDef1652.View, { style: null, children: null });
});
