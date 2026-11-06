// discord_app/modules/activities/panel/native/ActivityPanelFocusedView.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef1652 from "../../../../../_runtime/metro/01652__.js";
import EmbeddedActivityViewDefault from "../../native/EmbeddedActivityView.tsx";
import useAnimatedKeyboardHeightDefault from "../../../keyboard/native/useAnimatedKeyboardHeight.tsx";
import ActivityPanelStateContextDefault from "ActivityPanelStateContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import EmbeddedActivitiesStore from "../../EmbeddedActivitiesStore.tsx";

const require = fn;
class BaseActivityPanelFocusedView {
  constructor(arg0) {
    ({ transitionState, updateActivityPanelModeToPIP } = global);
    closure_0 = updateActivityPanelModeToPIP;
    ({ hasActivity, context } = global);
    closure_1 = undefined;
    closure_2 = undefined;
    tmp = closure_0;
    tmp2 = closure_2;
    ({ children, header, transitionCleanUp } = global);
    obj = closure_0(closure_2[14]);
    items = [];
    items[0] = closure_4;
    stateFromStores = obj.useStateFromStores(items, () => _undefined5.useReducedMotion);
    tmp4 = closure_19();
    closure_1 = tmp4;
    tmp5 = closure_1;
    tmp6 = closure_1(closure_2[15])();
    obj2 = closure_3;
    tmp7 = closure_1(closure_2[13])();
    context1 = closure_3.useContext(context);
    ({ wrapperDimensions, wrapperOffset } = context1);
    obj3 = closure_0(closure_2[16]);
    lockedWebView = obj3.useLockedWebView({ transitionState, hasActivity, context });
    ({ shown, renderWebView } = lockedWebView);
    tmp10 = closure_1(closure_2[17])();
    obj4 = closure_0(closure_2[18]);
    items1 = [, , , , , , , , , , , , , , , , , , ,];
    items1[0] = closure_21;
    items1[1] = wrapperDimensions;
    items1[2] = closure_1(closure_2[12]).radii.lg;
    items1[3] = closure_14;
    items1[4] = tmp10;
    items1[5] = tmp6;
    items1[6] = tmp7;
    items1[7] = shown;
    items1[8] = wrapperOffset;
    items1[9] = closure_20;
    items1[10] = transitionState;
    tmp11 = closure_14;
    items1[11] = closure_0(closure_2[19]).TransitionStates;
    items1[12] = closure_0(closure_2[20]).scheduleOnRN;
    items1[13] = transitionCleanUp;
    items1[14] = stateFromStores;
    items1[15] = closure_0(closure_2[21]).withTiming;
    items1[16] = closure_18;
    items1[17] = closure_0(closure_2[22]).withSpring;
    items1[18] = closure_7;
    items1[19] = closure_8;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    closure_13 = undefined;
    closure_14 = undefined;
    closure_15 = undefined;
    closure_16 = undefined;
    closure_17 = undefined;
    closure_18 = undefined;
    [
      tmp13,
      tmp14,
      tmp15,
      tmp16,
      tmp17,
      tmp18,
      tmp19,
      tmp20,
      tmp21,
      tmp22,
      tmp23,
      tmp24,
      tmp25,
      tmp26,
      tmp27,
      tmp28,
      tmp29,
      tmp30,
      tmp31,
      tmp32,
    ] = items1;
    class ActivityPanelFocusedViewTsx2 {
      constructor() {
        tmp = closure_0;
        num = 0;
        if (!closure_0.isWindowLandscape) {
          num = closure_1;
        }
        num2 = 0;
        if (closure_2) {
          tmp2 = closure_3;
          num2 = closure_3.get();
        }
        tmp3 = closure_4;
        num3 = 0;
        diff = closure_4.height - num2;
        if (!tmp.isWindowLandscape) {
          tmp5 = closure_5;
          num3 = closure_5.top;
        }
        obj = closure_6;
        diff1 = diff - num3;
        if (closure_6.get()) {
          tmp7 = closure_7;
          height = closure_7.get().y;
        } else {
          height = tmp3.height;
        }
        items = [, , , ,];
        items[0] = closure_8;
        items[1] = closure_9;
        items[2] = closure_10;
        items[3] = closure_11;
        items[4] = closure_12;
        [tmp10, tmp11, tmp12, tmp13, tmp14] = items;
        transitionComplete = function transitionComplete() {
          let flag = arg0;
          if (arg0 === undefined) {
            flag = false;
          }
          if (flag) {
            flag = _undefined === constants.YEETED;
          }
          if (flag) {
            _undefined3(_undefined4);
          }
        };
        items1 = [, , ,];
        items1[0] = tmp11;
        items1[1] = tmp12;
        items1[2] = tmp13;
        items1[3] = tmp14;
        transitionComplete.__closure = items1;
        transitionComplete.__workletHash = 7132668688042;
        transitionComplete.__initData = tmp10;
        tmp15 = closure_13;
        num4 = 0;
        tmp8 = closure_9;
        tmp9 = closure_10;
        if (closure_13) {
          num4 = 0;
          if (obj.get()) {
            tmp16 = closure_7;
            num5 = 1;
            num4 = 1 - closure_7.get().y / tmp3.height;
          }
        }
        num6 = 1;
        if (tmp15) {
          tmp18 = closure_15;
          tmp17 = closure_14;
          str = "animate-always";
          str2 = "animate-always";
          if (obj.get()) {
            tmp19 = closure_7;
            str2 = "animate-always";
            if (closure_7.get().gestureActive) {
              str2 = "animate-never";
            }
          }
          tmp20 = num4;
          tmp21 = tmp18;
          tmp22 = str2;
          tmp23 = transitionComplete;
          num6 = tmp17(num4, tmp18, str2, transitionComplete);
        }
        size = {
          opacity: num6,
          transform: null,
          top: null,
          width: null,
          height: null,
          borderTopStartRadius: null,
          borderTopEndRadius: null,
        };
        if (tmp15) {
          obj1 = { translateY: null };
          obj1.translateY = 0;
          items2 = [];
          items2[0] = obj1;
          size.transform = items2;
          num7 = 0;
          if (!tmp.isWindowLandscape) {
            tmp31 = closure_5;
            num7 = closure_5.top;
          }
          size.top = num7;
          size.width = closure_4.width;
          size.height = diff1;
          size.borderTopStartRadius = num;
          size.borderTopEndRadius = num;
          return size;
        } else {
          tmp25 = closure_7;
          tmp24 = closure_16;
          if (!closure_7.get().gestureActive) {
            tmp26 = closure_18;
            str3 = "animate-always";
            tmp27 = height;
            tmp28 = tmp26;
            tmp29 = transitionComplete;
            tmp24Result = tmp24(height, tmp26, "animate-always", transitionComplete);
          }
          tmp26 = closure_17;
        }
        return;
      }
    }
    items2 = [, , , , , , , , , , , , , , , , , ,];
    items2[0] = tmp14;
    items2[1] = tmp15;
    items2[2] = tmp16;
    items2[3] = tmp17;
    items2[4] = tmp18;
    items2[5] = tmp19;
    items2[6] = tmp20;
    items2[7] = tmp21;
    items2[8] = tmp22;
    items2[9] = tmp23;
    items2[10] = tmp24;
    items2[11] = tmp25;
    items2[12] = tmp26;
    items2[13] = tmp27;
    items2[14] = tmp28;
    items2[15] = tmp29;
    items2[16] = tmp30;
    items2[17] = tmp31;
    items2[18] = tmp32;
    ActivityPanelFocusedViewTsx2.__closure = items2;
    ActivityPanelFocusedViewTsx2.__workletHash = 7761703212669;
    ActivityPanelFocusedViewTsx2.__initData = tmp13;
    tmp12 = closure_8;
    animatedStyle = obj4.useAnimatedStyle(ActivityPanelFocusedViewTsx2);
    closure_2 = animatedStyle;
    tmpResult = tmp(tmp2[18]);
    items3 = [, , , , ,];
    items3[0] = closure_22;
    items3[1] = wrapperOffset;
    items3[2] = shown;
    items3[3] = tmp6;
    items3[4] = tmp(tmp2[22]).withSpring;
    items3[5] = tmp12;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    [tmp34, tmp35, tmp36, tmp37, tmp38, tmp39] = items3;
    class ActivityPanelFocusedViewTsx3 {
      constructor() {
        obj = closure_0;
        if (closure_0.get().gestureActive) {
          tmp2 = closure_2;
          num2 = 1;
          num = 1 - obj.get().y / closure_2.height;
        } else {
          tmp = closure_1;
          num = 0;
          if (closure_1.get()) {
            num = 1;
          }
        }
        obj1 = { opacity: closure_3(num, closure_4) };
        return obj1;
      }
    }
    items4 = [, , , ,];
    items4[0] = tmp35;
    items4[1] = tmp36;
    items4[2] = tmp37;
    items4[3] = tmp38;
    items4[4] = tmp39;
    ActivityPanelFocusedViewTsx3.__closure = items4;
    ActivityPanelFocusedViewTsx3.__workletHash = 3768147706260;
    ActivityPanelFocusedViewTsx3.__initData = tmp34;
    items5 = [,];
    items5[0] = animatedStyle;
    items5[1] = tmp4.wrapper;
    animatedStyle1 = tmpResult.useAnimatedStyle(ActivityPanelFocusedViewTsx3);
    memo = obj2.useMemo(() => {
      items = [_undefined2.wrapper, c2];
      return items;
    }, items5);
    tmpResult1 = tmp(tmp2[18]);
    items6 = [, , ,];
    items6[0] = closure_23;
    items6[1] = tmp11;
    items6[2] = tmp10;
    items6[3] = wrapperDimensions;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    [tmp42, tmp43, tmp44, tmp45] = items6;
    class ActivityPanelFocusedViewTsx4 {
      constructor() {
        num = 0;
        if (closure_0) {
          tmp = closure_1;
          num = closure_1.get();
        }
        size = { width: closure_2.width, height: closure_2.height - num };
        return size;
      }
    }
    items7 = [, ,];
    items7[0] = tmp43;
    items7[1] = tmp44;
    items7[2] = tmp45;
    ActivityPanelFocusedViewTsx4.__closure = items7;
    ActivityPanelFocusedViewTsx4.__workletHash = 13360956680222;
    ActivityPanelFocusedViewTsx4.__initData = tmp42;
    items8 = [];
    items8[0] = updateActivityPanelModeToPIP;
    animatedStyle2 = tmpResult1.useAnimatedStyle(ActivityPanelFocusedViewTsx4);
    tmp48 = closure_17;
    callback = obj2.useCallback(() => {
      _undefined();
    }, items8);
    obj1 = { theme: closure_13.DARK, children: null };
    tmp49 = closure_16;
    obj11 = { style: null, pointerEvents: "none" };
    items9 = [,];
    items9[0] = tmp4.shade;
    items9[1] = animatedStyle1;
    obj11.style = items9;
    items10 = [,];
    items10[0] = closure_16(tmp5(tmp2[18]).View, obj11);
    obj12 = {
      style: memo,
      nativeID: "activity-panel-focused-view",
      accessibilityViewIsModal: true,
      onAccessibilityEscape: callback,
      children: null,
    };
    obj13 = { style: animatedStyle2, children: null };
    tmp50 = null;
    if (renderWebView) {
      tmp50 = null;
      if (hasActivity) {
        tmp50 = children;
      }
    }
    obj13.children = tmp50;
    items11 = [,];
    items11[0] = tmp49(tmp5(tmp2[18]).View, obj13);
    items11[1] = header;
    obj12.children = items11;
    items10[1] = tmp48(tmp(tmp2[23]).AccessibilityViewAnimated, obj12);
    obj1.children = items10;
    return tmp48(tmp(tmp2[19]).ThemeContextProvider, obj1);
  }
}
const ActivityPanelConstants = fn(5811);
({
  ACTIVITY_LAYOUT_PHYSICS_GESTURE: metroImportDefault,
  ACTIVITY_LAYOUT_PHYSICS_DEFAULT: closure_8,
  ActivityPanelModes: closure_9,
} = ActivityPanelConstants);
const ActivityPanelNativeConstants = fn(19298);
({
  DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG: closure_10,
  DEFAULT_PORTRAIT_LETTERBOX_CONFIG: closure_11,
  DEFAULT_LANDSCAPE_PILLERBOX_CONFIG: closure_12,
} = ActivityPanelNativeConstants);
let ThemeTypes = fn(1072).ThemeTypes;
const IS_IOS = fn(11381).IS_IOS;
const ActivityLayoutMode = fn(11864).ActivityLayoutMode;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
let closure_18 = { duration: 300 };
const createStyles = fn(5170);
let obj = {
  wrapper: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  },
  shade: null,
};
let obj4 = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj4.backgroundColor = nativeDefault.colors.BLACK;
obj.shade = obj4;
const expandedHeight = createStyles.createStyles(obj);
let closure_20 = {
  code: "(function transitionComplete_ActivityPanelFocusedViewTsx1(finished=false){let[transitionState,TransitionStates,scheduleOnRN,transitionCleanUp]=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(transitionCleanUp);}})",
};
let closure_21 = {
  code: "(function ActivityPanelFocusedViewTsx2(){let[wrapperDimensions,lg,IS_IOS,animatedKeyboardHeight,windowDimensions,safeArea,shown,wrapperOffset,_worklet_7132668688042_init_data,transitionState,TransitionStates,scheduleOnRN,transitionCleanUp,reduceMotion,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT]=this.__closure;const topBorderRadius=!wrapperDimensions.isWindowLandscape?lg:0;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const width=windowDimensions.width;const height=windowDimensions.height-keyboardHeight-(!wrapperDimensions.isWindowLandscape?safeArea.top:0);const y=shown.get()?wrapperOffset.get().y:windowDimensions.height;const transitionComplete=function transitionComplete_ActivityPanelFocusedViewTsx1Factory([_worklet_7132668688042_init_data,transitionState,TransitionStates,scheduleOnRN,transitionCleanUp]){const transitionComplete=function(finished=false){if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(transitionCleanUp);}};transitionComplete.__closure=[transitionState,TransitionStates,scheduleOnRN,transitionCleanUp];transitionComplete.__workletHash=7132668688042;transitionComplete.__initData=_worklet_7132668688042_init_data;return transitionComplete;}([_worklet_7132668688042_init_data,transitionState,TransitionStates,scheduleOnRN,transitionCleanUp]);const targetOpacity=reduceMotion&&shown.get()?1-wrapperOffset.get().y/windowDimensions.height:0;return{opacity:reduceMotion?withTiming(targetOpacity,REDUCED_MOTION_TIMING,shown.get()&&wrapperOffset.get().gestureActive?'animate-never':'animate-always',transitionComplete):1,transform:[{translateY:!reduceMotion?withSpring(y,wrapperOffset.get().gestureActive&&transitionState!==TransitionStates.YEETED?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',transitionComplete):0}],top:!wrapperDimensions.isWindowLandscape?safeArea.top:0,width:width,height:height,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius};})",
};
let closure_22 = {
  code: "(function ActivityPanelFocusedViewTsx3(){let[wrapperOffset,shown,windowDimensions,withSpring,ACTIVITY_LAYOUT_PHYSICS_DEFAULT]=this.__closure;const opacity=function(){if(!wrapperOffset.get().gestureActive){return shown.get()?1:0;}return 1-wrapperOffset.get().y/windowDimensions.height;}();return{opacity:withSpring(opacity,ACTIVITY_LAYOUT_PHYSICS_DEFAULT)};})",
};
let closure_23 = {
  code: "(function ActivityPanelFocusedViewTsx4(){let[IS_IOS,animatedKeyboardHeight,wrapperDimensions]=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;return{width:wrapperDimensions.width,height:wrapperDimensions.height-keyboardHeight};})",
};
let obj3 = {
  position: "absolute",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelFocusedView.tsx");

export default noop.memo(function ActivityPanelFocusedView(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let channel;
  let portraitSafeAreasConfig;
  let memo;
  let memo1;
  let updateActivityPanelModeToPIP;
  items = [memo1, memo];
  const stateFromStoresObject = transitionState(channel[14]).useStateFromStoresObject(items, () => {
    const connectedActivityLocation = memo1.getConnectedActivityLocation();
    const selfEmbeddedActivityForLocation = memo1.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    const obj = transitionState(channel[24]);
    return {
      channel: memo.getChannel(
        transitionState(channel[24]).getEmbeddedActivityLocationChannelId(connectedActivityLocation),
      ),
      hasActivity: null != selfEmbeddedActivityForLocation,
    };
  }, []);
  channel = stateFromStoresObject.channel;
  const hasActivity = stateFromStoresObject.hasActivity;
  closure_129_1 = undefined;
  let obj = transitionState(channel[14]);
  const tmp3 = transitionCleanUp(channel[13])();
  closure_129_0 = tmp3;
  const wrapperDimensions = hasActivity.useContext(transitionCleanUp(channel[25])).wrapperDimensions;
  const isLandscape = wrapperDimensions.isLandscape;
  let isWindowLandscape = !isLandscape;
  if (!isLandscape) {
    isWindowLandscape = wrapperDimensions.isWindowLandscape;
  }
  closure_129_1 = isWindowLandscape;
  const tmp5 = wrapperDimensions.isLandscape && !wrapperDimensions.isWindowLandscape ? closure_11 : closure_10;
  const items1 = [tmp3.right, isWindowLandscape];
  memo = obj2.useMemo(() => {
    if (transitionCleanUp) {
      let obj = application_id;
    } else {
      obj = { right: null };
      const obj2 = { disable: false, override: null };
      const _Math = Math;
      obj2.override = Math.max(64, transitionState.right);
      obj.right = obj2;
    }
    return obj;
  }, items1);
  portraitSafeAreasConfig = tmp5;
  memo1 = obj2.useMemo(() => closure_1_16(transitionCleanUp(channel[26]), {}), []);
  updateActivityPanelModeToPIP = obj2.useCallback(() => {
    const result = transitionState(channel[27]).updateActivityPanelMode(constants.PIP);
  }, []);
  const items2 = [
    transitionState,
    transitionCleanUp,
    updateActivityPanelModeToPIP,
    hasActivity,
    memo1,
    channel,
    tmp5,
    memo,
  ];
  return hasActivity.useMemo(() => {
    const obj = {
      transitionState,
      transitionCleanUp,
      updateActivityPanelModeToPIP,
      hasActivity,
      context: ActivityPanelStateContextDefault,
      header: memo1,
      children: value2(EmbeddedActivityViewDefault, {
        channel,
        layoutMode: ActivityLayoutMode.FOCUSED,
        portraitSafeAreasConfig,
        landscapeSafeAreasConfig: memo,
      }),
    };
    return value2(BaseActivityPanelFocusedView, obj);
  }, items2);
});
export function useBaseActivityPanelFocusedView(context) {
  let isWindowLandscape;
  const tmp = isWindowLandscape(1627)();
  closure_0 = tmp;
  const wrapperDimensions = noop.useContext(context.context).wrapperDimensions;
  const isLandscape = wrapperDimensions.isLandscape;
  isWindowLandscape = !isLandscape;
  if (!isLandscape) {
    isWindowLandscape = wrapperDimensions.isWindowLandscape;
  }
  const obj2 = {
    portraitSafeAreasConfig:
      wrapperDimensions.isLandscape && !wrapperDimensions.isWindowLandscape ? closure_11 : closure_10,
    landscapeSafeAreasConfig: null,
  };
  items = [tmp.right, isWindowLandscape];
  obj2.landscapeSafeAreasConfig = noop.useMemo(() => {
    if (transitionCleanUp) {
      let obj = application_id;
    } else {
      obj = { right: null };
      const obj2 = { disable: false, override: null };
      const _Math = Math;
      obj2.override = Math.max(64, transitionState.right);
      obj.right = obj2;
    }
    return obj;
  }, items);
  return obj2;
}
export { BaseActivityPanelFocusedView };
