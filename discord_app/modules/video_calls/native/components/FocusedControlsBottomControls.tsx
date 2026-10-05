// discord_app/modules/video_calls/native/components/FocusedControlsBottomControls.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import native from "../../../../design/void/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import CallPTTButton from "../../../../components_native/calls/CallPTTButton.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import ChannelCallStore from "../ChannelCallStore.tsx";
import ChannelCallConstants from "../ChannelCallConstants.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import TextStyles from "../../../rebrand/native/TextStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const ReanimatedRexportDefault = ReanimatedRexport;
const CallPTTButtonDefault = CallPTTButton;
let height, set, set2, width;

let Fonts;
let StyleSheet;
let c10;
let c9;
let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let rect;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({
  View: hasOwnProperty,
  TouchableWithoutFeedback: metroRequire,
  ScrollView: metroImportDefault,
  StyleSheet,
} = react_native);
({ clearFocusTimer: metroImportAll, resetFocusTimer: c9 } = ChannelCallStore);
({ BOX_MODE_THRESHOLD_WIDTH: c10, BOX_MODE_ACTIONSHEET_HEIGHT: unpackModuleId } = ChannelCallConstants);
({ ComponentActions: closure_12, Fonts } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let c15 = 500;
let c16 = 20;
function EXTENDED_CONTROLS_OFFSET_Y(arg0) {}
function EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y(arg0) {}
let createStyles = createStyles_mod;
let obj = {
  bottomDrawerContainer: rect,
  visualEffectView: obj2,
  visualEffectViewBackground: { backgroundColor: "rgba(0, 0, 0, .15)" },
  expandedControlsContainer: { marginHorizontal: 16 },
  aboveActionBarContainer: { position: "absolute", left: 0, right: 0, top: -32, paddingTop: 4, paddingBottom: 8 },
  aboveActionBarChildrenContainer: { position: "absolute", left: 16, right: 16, top: -64 },
  ptbButton: { margin: 0, marginHorizontal: 16, marginBottom: 8 },
  tooltipStyle: { alignSelf: "center", position: "absolute", top: -28 },
  containerStyle: { paddingHorizontal: 8, paddingVertical: 4 },
  labelStyle: obj3,
};
rect = { position: "absolute", left: 0, right: 0, bottom: 0, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj2 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = {};
const DISPLAY_EXTRABOLD = Fonts.DISPLAY_EXTRABOLD;
const merged1 = Object.assign(
  TextStyles(DISPLAY_EXTRABOLD, nativeDefault.unsafe_rawColors.WHITE, 12, { uppercase: true }),
);
let closure_19 = createStyles(obj);
let obj4 = { easing: native.STANDARD_EASING, duration: 250 };
let obj5 = { easing: native.STANDARD_EASING, duration: 400 };
const __initData = {
  code: 'function FocusedControlsBottomControlsTsx1(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;const opacity=Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1);return{opacity:opacity,pointerEvents:opacity===0?"none":"auto"};}',
};
const __initData2 = {
  code: "function FocusedControlsBottomControlsTsx2(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;const opacity=Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1);return{opacity:opacity,pointerEvents:opacity===0?'none':'auto'};}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (positionY) => {
      let availableHeight;
      let bottom;
      let closure_4;
      let expandedControls;
      let scrollEnabled;
      let obj = availableHeight(bottom[13]);
      const cResult = obj.c(19);
      ({ expandedControls, availableHeight } = positionY);
      positionY = positionY.positionY;
      const tmp4 = closure_19();
      bottom = positionY(bottom[14])().bottom;
      const tmp6 = scrollEnabled(width.useState(false), 2);
      scrollEnabled = tmp6[0];
      width = tmp6[1];
      const tmp5 = positionY;
      if (cResult[0] === availableHeight) {
        if (cResult[1] === bottom) {
          let tmp8;
          let tmp12;
          if (cResult[2] === scrollEnabled) {
            tmp8 = cResult[3];
          }
          const tmpResult = availableHeight(bottom[15]);
          class I {
            constructor() {
              let str;
              const bound = Math.min((-1 * positionY.get()) / c16, 1);
              const obj = { opacity: bound, pointerEvents: str };
              str = "auto";
              if (0 === bound) {
                str = "none";
              }
              return obj;
            }
          }
          const obj2 = { positionY, EXPANDED_DRAWER_SHOW_POSITION };
          I.__closure = obj2;
          I.__workletHash = 5181322553799;
          I.__initData = __initData;
          const animatedStyle = tmpResult.useAnimatedStyle(I);
          if (cResult[4] !== availableHeight) {
            const obj3 = { height: availableHeight };
            class I {
              constructor() {
                let str;
                const bound = Math.min((-1 * positionY.get()) / c16, 1);
                const obj = { opacity: bound, pointerEvents: str };
                str = "auto";
                if (0 === bound) {
                  str = "none";
                }
                return obj;
              }
            }
            cResult[4] = availableHeight;
            cResult[5] = obj3;
            tmp12 = obj3;
          } else {
            tmp12 = cResult[5];
          }
          if (cResult[6] === animatedStyle) {
            let tmp13;
            if (cResult[7] === tmp4.expandedControlsContainer) {
              tmp13 = cResult[8];
            }
            if (cResult[9] === expandedControls) {
              if (cResult[10] === tmp8) {
                let tmp14;
                if (cResult[11] === tmp13) {
                  tmp14 = cResult[12];
                }
                if (cResult[13] === scrollEnabled) {
                  let tmp16;
                  if (cResult[14] === tmp14) {
                    tmp16 = cResult[15];
                  }
                  if (cResult[16] === tmp12) {
                    let tmp19;
                    if (cResult[17] === tmp16) {
                      tmp19 = cResult[18];
                    }
                    return tmp19;
                  }
                  class I {
                    constructor() {
                      let str;
                      const bound = Math.min((-1 * positionY.get()) / c16, 1);
                      const obj = { opacity: bound, pointerEvents: str };
                      str = "auto";
                      if (0 === bound) {
                        str = "none";
                      }
                      return obj;
                    }
                  }
                  obj4 = { style: tmp12, children: tmp16 };
                  const tmp21 = closure_13(closure_5, obj4);
                  cResult[16] = tmp12;
                  cResult[17] = tmp16;
                  cResult[18] = tmp21;
                  tmp19 = tmp21;
                }
                class I {
                  constructor() {
                    let str;
                    const bound = Math.min((-1 * positionY.get()) / c16, 1);
                    const obj = { opacity: bound, pointerEvents: str };
                    str = "auto";
                    if (0 === bound) {
                      str = "none";
                    }
                    return obj;
                  }
                }
                obj5 = { scrollEnabled, children: tmp14 };
                const tmp18 = closure_13(closure_7, obj5);
                cResult[13] = scrollEnabled;
                cResult[14] = tmp14;
                cResult[15] = tmp18;
                tmp16 = tmp18;
              }
            }
            class I {
              constructor() {
                let str;
                const bound = Math.min((-1 * positionY.get()) / c16, 1);
                const obj = { opacity: bound, pointerEvents: str };
                str = "auto";
                if (0 === bound) {
                  str = "none";
                }
                return obj;
              }
            }
            const obj6 = { style: tmp13, onLayout: tmp8, children: expandedControls };
            const tmp15 = closure_13(tmp5(bottom[15]).View, obj6);
            cResult[9] = expandedControls;
            cResult[10] = tmp8;
            cResult[11] = tmp13;
            cResult[12] = tmp15;
            tmp14 = tmp15;
          }
          const items = [tmp4.expandedControlsContainer, animatedStyle];
          cResult[6] = animatedStyle;
          cResult[7] = tmp4.expandedControlsContainer;
          cResult[8] = items;
          tmp13 = items;
        }
      }
      const fn = function l(nativeEvent) {
        if (nativeEvent.nativeEvent.layout.height > availableHeight - bottom !== first) {
          closure_4(nativeEvent.nativeEvent.layout.height > availableHeight - bottom);
        }
      };
      cResult[0] = availableHeight;
      cResult[1] = bottom;
      cResult[2] = scrollEnabled;
      cResult[3] = fn;
      tmp8 = fn;
    }
  : (availableHeight) => {
      let closure_4;
      let items1;
      availableHeight = availableHeight.availableHeight;
      const positionY = availableHeight.positionY;
      let bottom;
      let scrollEnabled;
      width = undefined;
      const expandedControls = availableHeight.expandedControls;
      const tmp = closure_19();
      bottom = positionY(bottom[14])().bottom;
      const tmp2 = scrollEnabled(width.useState(false), 2);
      scrollEnabled = tmp2[0];
      width = tmp2[1];
      const items = [availableHeight, bottom, scrollEnabled];
      const callback = width.useCallback((nativeEvent) => {
        if (nativeEvent.nativeEvent.layout.height > availableHeight - bottom !== first) {
          closure_4(nativeEvent.nativeEvent.layout.height > availableHeight - bottom);
        }
      }, items);
      let obj = availableHeight(bottom[15]);
      const fn = function u() {
        let str;
        const bound = Math.min((-1 * positionY.get()) / c16, 1);
        const obj = { opacity: bound, pointerEvents: str };
        str = "auto";
        if (0 === bound) {
          str = "none";
        }
        return obj;
      };
      const obj2 = { positionY, EXPANDED_DRAWER_SHOW_POSITION };
      fn.__closure = obj2;
      fn.__workletHash = 7351861170276;
      fn.__initData = __initData2;
      const obj3 = { style: { height: availableHeight }, children: closure_13(closure_7, obj4) };
      obj4 = { scrollEnabled, children: closure_13(positionY(bottom[15]).View, obj5) };
      const animatedStyle = obj.useAnimatedStyle(fn);
      obj5 = { style: items1, onLayout: callback, children: expandedControls };
      items1 = [tmp.expandedControlsContainer, animatedStyle];
      return closure_13(closure_5, obj3);
    };
const __initData3 = {
  code: "function FocusedControlsBottomControlsTsx3(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;return{opacity:1-Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1)};}",
};
const __initData4 = {
  code: "function FocusedControlsBottomControlsTsx4(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;return{opacity:1-Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1)};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? (positionY) => {
      let containerStyle;
      let labelStyle;
      let tooltipStyle;
      let obj = positionY(576);
      const cResult = obj.c(8);
      positionY = positionY.positionY;
      const tmp4 = closure_19();
      const obj2 = positionY(9616);
      const canShowTooltip = obj2.useCanShowTooltip(positionY(1105).TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS, true);
      const fn = function o() {
        const obj = { opacity: 1 - Math.min((-1 * positionY.get()) / c16, 1) };
        return obj;
      };
      obj4 = { positionY, EXPANDED_DRAWER_SHOW_POSITION };
      fn.__closure = obj4;
      fn.__workletHash = 15386908151356;
      fn.__initData = __initData3;
      const obj3 = positionY(4612);
      const animatedStyle = obj3.useAnimatedStyle(fn);
      if (canShowTooltip) {
        let first;
        const _Symbol = Symbol;
        ({ tooltipStyle, containerStyle, labelStyle } = tmp4);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(positionY(1126).t.zYzy2i);
          cResult[0] = stringResult;
          first = stringResult;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === tmp4.containerStyle) {
          if (cResult[2] === tmp4.labelStyle) {
            let tmp11;
            if (cResult[3] === tmp4.tooltipStyle) {
              tmp11 = cResult[4];
            }
            if (cResult[5] === animatedStyle) {
              let tmp14;
              if (cResult[6] === tmp11) {
                tmp14 = cResult[7];
              }
              return tmp14;
            }
            obj5 = { style: animatedStyle, children: tmp11 };
            const tmp17 = closure_13(ReanimatedRexportDefault.View, obj5);
            cResult[5] = animatedStyle;
            cResult[6] = tmp11;
            cResult[7] = tmp17;
            tmp14 = tmp17;
          }
        }
        const obj6 = {
          style: tooltipStyle,
          arrowPosition: positionY(1188).TooltipArrowPositions.CENTER,
          arrowDirection: positionY(1188).TooltipArrowDirections.DOWN,
          arrowWidth: 8,
          arrowHeight: 4,
          containerStyle,
          labelStyle,
          label: first,
        };
        const Tooltip = tmp(1188).Tooltip;
        const tmp13 = closure_13(Tooltip, obj6);
        cResult[1] = tmp4.containerStyle;
        cResult[2] = tmp4.labelStyle;
        cResult[3] = tmp4.tooltipStyle;
        cResult[4] = tmp13;
        tmp11 = tmp13;
      } else {
        return null;
      }
    }
  : (positionY) => {
      let Tooltip;
      let intl;
      let obj7;
      positionY = positionY.positionY;
      const tmp = closure_19();
      let obj = positionY(9616);
      const canShowTooltip = obj.useCanShowTooltip(positionY(1105).TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS, true);
      positionY(4612);
      const fn = function o() {
        const obj = { opacity: 1 - Math.min((-1 * positionY.get()) / c16, 1) };
        return obj;
      };
      const obj2 = { positionY, EXPANDED_DRAWER_SHOW_POSITION };
      fn.__closure = obj2;
      fn.__workletHash = 13795512875803;
      fn.__initData = __initData4;
      let tmp7 = null;
      if (canShowTooltip) {
        const obj3 = { style: tmp6, children: closure_13(Tooltip, obj7) };
        const View = ReanimatedRexportDefault.View;
        obj7 = {
          style: tmp.tooltipStyle,
          arrowPosition: positionY(1188).TooltipArrowPositions.CENTER,
          arrowDirection: positionY(1188).TooltipArrowDirections.DOWN,
          arrowWidth: 8,
          arrowHeight: 4,
          containerStyle: null,
          labelStyle: null,
          label: intl.string(positionY(1126).t.zYzy2i),
        };
        Tooltip = tmp2(1188).Tooltip;
        ({ containerStyle: obj4.containerStyle, labelStyle: obj4.labelStyle } = tmp);
        intl = tmp2(1126).intl;
        tmp7 = closure_13(View, obj3);
      }
      return tmp7;
    };
const __initData5 = {
  code: "function FocusedControlsBottomControlsTsx5(){const{offsetY,EXPANDED_DRAWER_SHOW_POSITION,positionY}=this.__closure;const maxHeightRange=offsetY/3-EXPANDED_DRAWER_SHOW_POSITION;const opacity=2-Math.max(Math.abs(positionY.get())/maxHeightRange,0);return{opacity:opacity};}",
};
const __initData6 = {
  code: "function FocusedControlsBottomControlsTsx6(){const{offsetY,EXPANDED_DRAWER_SHOW_POSITION,positionY}=this.__closure;const maxHeightRange=offsetY/3-EXPANDED_DRAWER_SHOW_POSITION;const opacity=2-Math.max(Math.abs(positionY.get())/maxHeightRange,0);return{opacity:opacity};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled()
  ? (positionY) => {
      let aboveActionBar;
      let isExpanded;
      let items;
      let items1;
      let onPressHeader;
      let tmp11;
      let tmp6;
      let tmp7;
      let obj = positionY(576);
      const cResult = obj.c(17);
      const tmp = positionY;
      positionY = positionY.positionY;
      const offsetY = positionY.offsetY;
      ({ aboveActionBar, onPressHeader, isExpanded } = positionY);
      const tmp4 = closure_19();
      const fn = function o() {
        const obj = { opacity: 2 - Math.max(Math.abs(positionY.get()) / (offsetY / 3 - c16), 0) };
        return obj;
      };
      const obj3 = { offsetY, EXPANDED_DRAWER_SHOW_POSITION, positionY };
      fn.__closure = obj3;
      fn.__workletHash = 16821998405506;
      fn.__initData = __initData5;
      const obj2 = positionY(4612);
      const animatedStyle = obj2.useAnimatedStyle(fn);
      if (cResult[0] !== isExpanded) {
        obj4 = { expanded: isExpanded };
        cResult[0] = isExpanded;
        cResult[1] = obj4;
        tmp6 = obj4;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== positionY) {
        obj5 = { positionY };
        const tmp10 = closure_13(closure_27, obj5);
        cResult[2] = positionY;
        cResult[3] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp13 = closure_13(tmp(6649).ActionSheetHeaderBar, {});
        cResult[4] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] === aboveActionBar) {
        if (cResult[6] === animatedStyle) {
          let tmp14;
          if (cResult[7] === tmp4.aboveActionBarChildrenContainer) {
            tmp14 = cResult[8];
          }
          if (cResult[9] === tmp4.aboveActionBarContainer) {
            if (cResult[10] === tmp7) {
              let tmp18;
              if (cResult[11] === tmp14) {
                tmp18 = cResult[12];
              }
              if (cResult[13] === onPressHeader) {
                if (cResult[14] === tmp6) {
                  let tmp22;
                  if (cResult[15] === tmp18) {
                    tmp22 = cResult[16];
                  }
                  return tmp22;
                }
              }
              const obj6 = {
                accessible: true,
                onPress: onPressHeader,
                accessibilityRole: "button",
                accessibilityLabel: "Group DM",
                accessibilityHint: "Press to start a new conversation",
                accessibilityState: tmp6,
                children: tmp18,
              };
              const tmp25 = closure_13(closure_6, obj6);
              cResult[13] = onPressHeader;
              cResult[14] = tmp6;
              cResult[15] = tmp18;
              cResult[16] = tmp25;
              tmp22 = tmp25;
            }
          }
          const obj7 = { style: tmp4.aboveActionBarContainer, children: items };
          items = [tmp7, tmp11, tmp14];
          const tmp21 = closure_14(closure_5, obj7);
          cResult[9] = tmp4.aboveActionBarContainer;
          cResult[10] = tmp7;
          cResult[11] = tmp14;
          cResult[12] = tmp21;
          tmp18 = tmp21;
        }
      }
      let tmp15 = null != aboveActionBar;
      if (tmp15) {
        const obj8 = { style: items1, children: aboveActionBar };
        items1 = [tmp4.aboveActionBarChildrenContainer, animatedStyle];
        tmp15 = closure_13(offsetY(4612).View, obj8);
      }
      cResult[5] = aboveActionBar;
      cResult[6] = animatedStyle;
      cResult[7] = tmp4.aboveActionBarChildrenContainer;
      cResult[8] = tmp15;
      tmp14 = tmp15;
    }
  : (positionY) => {
      let isExpanded;
      let items;
      let items1;
      let onPressHeader;
      positionY = positionY.positionY;
      const offsetY = positionY.offsetY;
      const aboveActionBar = positionY.aboveActionBar;
      ({ onPressHeader, isExpanded } = positionY);
      const tmp = closure_19();
      let obj = positionY(4612);
      const fn = function u() {
        const obj = { opacity: 2 - Math.max(Math.abs(positionY.get()) / (offsetY / 3 - c16), 0) };
        return obj;
      };
      const obj2 = { offsetY, EXPANDED_DRAWER_SHOW_POSITION, positionY };
      fn.__closure = obj2;
      fn.__workletHash = 15125248924641;
      fn.__initData = __initData6;
      const obj3 = {
        accessible: true,
        onPress: onPressHeader,
        accessibilityRole: "button",
        accessibilityLabel: "Group DM",
        accessibilityHint: "Press to start a new conversation",
        accessibilityState: { expanded: isExpanded },
        children: closure_14(closure_5, obj4),
      };
      obj4 = { style: tmp.aboveActionBarContainer, children: items };
      const animatedStyle = obj.useAnimatedStyle(fn);
      items = [closure_13(closure_27, { positionY }), closure_13(positionY(6649).ActionSheetHeaderBar, {})];
      let tmp4Result = null != aboveActionBar;
      if (tmp4Result) {
        obj5 = { style: items1, children: aboveActionBar };
        items1 = [tmp.aboveActionBarChildrenContainer, animatedStyle];
        tmp4Result = closure_13(offsetY(4612).View, obj5);
      }
      items[2] = tmp4Result;
      return closure_13(closure_6, obj3);
    };
const __initData7 = {
  code: "function FocusedControlsBottomControlsTsx7(){const{isLandscapeMode,controlMaxHeight,landscapeOffsetY,portraitOffsetY}=this.__closure;return isLandscapeMode?controlMaxHeight-landscapeOffsetY:controlMaxHeight-portraitOffsetY;}",
};
let closure_32 = {
  code: "function FocusedControlsBottomControlsTsx8(){const{drawerOpen,positionY,maxHeight,velocity,MIN_GESTURE_TRIGGER_VELOCITY,CLOSE_DRAWER_POSITION,runOnJS,handleOpen,startY,withTiming,TIMING_CONFIG,TooltipActionCreators,TooltipNames,TIMING_CONFIG_EXIT,resetFocusTimer,handleClose}=this.__closure;var _velocity$get,_velocity$get2;const isDrawerAlreadyOpen=drawerOpen.get();const isPassedTriggerThreshold=positionY.get()*-1>=maxHeight.get()/2;const isHighOpenVelocity=((_velocity$get=velocity.get())!==null&&_velocity$get!==void 0?_velocity$get:0)*-1>=MIN_GESTURE_TRIGGER_VELOCITY;const isHighCloseVelocity=((_velocity$get2=velocity.get())!==null&&_velocity$get2!==void 0?_velocity$get2:0)>=MIN_GESTURE_TRIGGER_VELOCITY;const isLowerThanMinHeight=positionY.get()>CLOSE_DRAWER_POSITION;const openDrawer=function openDrawer(){runOnJS(handleOpen)();startY.set(-maxHeight.get());positionY.set(withTiming(startY.get(),TIMING_CONFIG));drawerOpen.set(true);runOnJS(TooltipActionCreators.acknowledgeTooltip)(TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);};const closeDrawer=function closeDrawer(){startY.set(0);positionY.set(withTiming(CLOSE_DRAWER_POSITION,TIMING_CONFIG_EXIT));drawerOpen.set(false);runOnJS(resetFocusTimer)();runOnJS(handleClose)();};if(isHighOpenVelocity&&!isDrawerAlreadyOpen||isPassedTriggerThreshold&&!isDrawerAlreadyOpen){openDrawer();}else{if(isLowerThanMinHeight||isHighCloseVelocity&&isDrawerAlreadyOpen){closeDrawer();}else{if(isPassedTriggerThreshold){openDrawer();}else{closeDrawer();}}}}",
};
let closure_33 = {
  code: "function FocusedControlsBottomControlsTsx9(event){const{velocity,positionY,maxHeight,startY}=this.__closure;var _startY$get;velocity.set(event.velocityY);if(positionY.get()*-1>maxHeight.get()+16){return;}positionY.set(((_startY$get=startY.get())!==null&&_startY$get!==void 0?_startY$get:0)+event.translationY);}",
};
let closure_34 = {
  code: "function FocusedControlsBottomControlsTsx10(){const{runOnJS,clearFocusTimer,drawerOpen,positionY,CLOSE_DRAWER_POSITION,velocity,startY}=this.__closure;runOnJS(clearFocusTimer)();drawerOpen.set(positionY.get()!==CLOSE_DRAWER_POSITION);velocity.set(0);if(positionY.get()==null||!drawerOpen.get()){startY.set(0);}}",
};
const __initData8 = {
  code: "function FocusedControlsBottomControlsTsx11(){const{isLandscapeMode,controlMaxHeight,landscapeOffsetY,portraitOffsetY}=this.__closure;return isLandscapeMode?controlMaxHeight-landscapeOffsetY:controlMaxHeight-portraitOffsetY;}",
};
const __initData9 = {
  code: "function FocusedControlsBottomControlsTsx12(){const{drawerOpen,positionY,maxHeight,velocity,MIN_GESTURE_TRIGGER_VELOCITY,CLOSE_DRAWER_POSITION,runOnJS,handleOpen,startY,withTiming,TIMING_CONFIG,TooltipActionCreators,TooltipNames,TIMING_CONFIG_EXIT,resetFocusTimer,handleClose}=this.__closure;var _velocity$get,_velocity$get2;const isDrawerAlreadyOpen=drawerOpen.get();const isPassedTriggerThreshold=positionY.get()*-1>=maxHeight.get()/2;const isHighOpenVelocity=((_velocity$get=velocity.get())!==null&&_velocity$get!==void 0?_velocity$get:0)*-1>=MIN_GESTURE_TRIGGER_VELOCITY;const isHighCloseVelocity=((_velocity$get2=velocity.get())!==null&&_velocity$get2!==void 0?_velocity$get2:0)>=MIN_GESTURE_TRIGGER_VELOCITY;const isLowerThanMinHeight=positionY.get()>CLOSE_DRAWER_POSITION;function openDrawer(){runOnJS(handleOpen)();startY.set(-maxHeight.get());positionY.set(withTiming(startY.get(),TIMING_CONFIG));drawerOpen.set(true);runOnJS(TooltipActionCreators.acknowledgeTooltip)(TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);}function closeDrawer(){startY.set(0);positionY.set(withTiming(CLOSE_DRAWER_POSITION,TIMING_CONFIG_EXIT));drawerOpen.set(false);runOnJS(resetFocusTimer)();runOnJS(handleClose)();}if(isHighOpenVelocity&&!isDrawerAlreadyOpen||isPassedTriggerThreshold&&!isDrawerAlreadyOpen){openDrawer();}else if(isLowerThanMinHeight||isHighCloseVelocity&&isDrawerAlreadyOpen){closeDrawer();}else if(isPassedTriggerThreshold){openDrawer();}else{closeDrawer();}}",
};
const __initData10 = {
  code: "function FocusedControlsBottomControlsTsx13(event){const{velocity,positionY,maxHeight,startY}=this.__closure;var _startY$get;velocity.set(event.velocityY);if(positionY.get()*-1>maxHeight.get()+16){return;}positionY.set(((_startY$get=startY.get())!==null&&_startY$get!==void 0?_startY$get:0)+event.translationY);}",
};
const __initData11 = {
  code: "function FocusedControlsBottomControlsTsx14(){const{runOnJS,clearFocusTimer,drawerOpen,positionY,CLOSE_DRAWER_POSITION,velocity,startY}=this.__closure;runOnJS(clearFocusTimer)();drawerOpen.set(positionY.get()!==CLOSE_DRAWER_POSITION);velocity.set(0);if(positionY.get()==null||!drawerOpen.get()){startY.set(0);}}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_39 = ReactCompilerGating.isReactCompilerEnabled()
  ? (controlMaxHeight) => {
      let portraitOffsetY;
      let obj = controlMaxHeight(portraitOffsetY[13]);
      const cResult = obj.c(14);
      controlMaxHeight = controlMaxHeight.controlMaxHeight;
      const isLandscapeMode = controlMaxHeight.isLandscapeMode;
      portraitOffsetY = controlMaxHeight.portraitOffsetY;
      const landscapeOffsetY = controlMaxHeight.landscapeOffsetY;
      const onClose = controlMaxHeight.onClose;
      const onOpen = controlMaxHeight.onOpen;
      let tmp2 = landscapeOffsetY(onClose.useState(false), 2);
      const first = tmp2[0];
      let closure_7 = tmp2[1];
      let obj2 = controlMaxHeight(portraitOffsetY[15]);
      const sharedValue = obj2.useSharedValue(0);
      let obj3 = controlMaxHeight(portraitOffsetY[15]);
      const fn = function s() {
        let diff;
        if (isLandscapeMode) {
          diff = controlMaxHeight - landscapeOffsetY;
        } else {
          diff = controlMaxHeight - portraitOffsetY;
        }
        return diff;
      };
      fn.__closure = { isLandscapeMode, controlMaxHeight, landscapeOffsetY, portraitOffsetY };
      fn.__workletHash = 16220091635392;
      fn.__initData = __initData7;
      const derivedValue = obj3.useDerivedValue(fn);
      obj4 = controlMaxHeight(portraitOffsetY[15]);
      const sharedValue1 = obj4.useSharedValue(0);
      obj5 = controlMaxHeight(portraitOffsetY[15]);
      const sharedValue2 = obj5.useSharedValue(false);
      let obj6 = controlMaxHeight(portraitOffsetY[15]);
      const sharedValue3 = obj6.useSharedValue(0);
      if (cResult[0] === derivedValue) {
        if (cResult[3] === first) {
          let tmp10;
          if (cResult[4] === onOpen) {
            tmp10 = cResult[5];
          }
          let closure_13 = tmp10;
          class N {
            constructor() {
              if (!first) {
                if (onOpen != null) {
                  tmp2();
                }
                closure_7(true);
              }
            }
          }
          class L {
            constructor() {
              if (first) {
                if (onClose != null) {
                  tmp2();
                }
                closure_7(false);
              }
            }
          }
          cResult[6] = first;
          cResult[7] = onClose;
          cResult[8] = L;
        }
        class N {
          constructor() {
            if (!first) {
              if (onOpen != null) {
                tmp2();
              }
              closure_7(true);
            }
          }
        }
        cResult[3] = first;
        let num = 4;
        cResult[4] = onOpen;
        let num2 = 5;
        cResult[5] = N;
        tmp10 = N;
      }
      const fn2 = function l() {
        let num = 0;
        const tmp2 = 0 !== sharedValue.get();
        if (!tmp2) {
          num = -derivedValue.get();
        }
        set = sharedValue.set;
        const obj = timing;
        const result = set(obj.withTiming(num, obj4));
        if (tmp2) {
          derivedValue();
        } else {
          metroImportAll();
        }
        closure_7(!tmp2);
      };
      cResult[0] = derivedValue;
      cResult[1] = sharedValue;
      cResult[2] = fn2;
    }
  : (controlMaxHeight) => {
      let closure_5;
      let react;
      controlMaxHeight = controlMaxHeight.controlMaxHeight;
      const isLandscapeMode = controlMaxHeight.isLandscapeMode;
      const portraitOffsetY = controlMaxHeight.portraitOffsetY;
      const landscapeOffsetY = controlMaxHeight.landscapeOffsetY;
      ({ onClose: react, onOpen: closure_5 } = controlMaxHeight);
      let derivedValue;
      let sharedValue1;
      let sharedValue2;
      let sharedValue3;
      function handleOpen() {
        if (!first) {
          if (height != null) {
            tmp2();
          }
          closure_7(true);
        }
      }
      function handleClose() {
        if (first) {
          if (width != null) {
            tmp2();
          }
          closure_7(false);
        }
      }
      const tmp = landscapeOffsetY(react.useState(false), 2);
      const first = tmp[0];
      let closure_7 = tmp[1];
      let obj = controlMaxHeight(portraitOffsetY[15]);
      const sharedValue = obj.useSharedValue(0);
      let obj2 = controlMaxHeight(portraitOffsetY[15]);
      class O {
        constructor() {
          let diff;
          if (isLandscapeMode) {
            diff = controlMaxHeight - landscapeOffsetY;
          } else {
            diff = controlMaxHeight - portraitOffsetY;
          }
          return diff;
        }
      }
      O.__closure = { isLandscapeMode, controlMaxHeight, landscapeOffsetY, portraitOffsetY };
      O.__workletHash = 9835520937079;
      O.__initData = __initData8;
      derivedValue = obj2.useDerivedValue(O);
      let obj3 = controlMaxHeight(portraitOffsetY[15]);
      sharedValue1 = obj3.useSharedValue(0);
      obj4 = controlMaxHeight(portraitOffsetY[15]);
      sharedValue2 = obj4.useSharedValue(false);
      obj5 = controlMaxHeight(portraitOffsetY[15]);
      sharedValue3 = obj5.useSharedValue(0);
      const items = [sharedValue, derivedValue];
      const callback = react.useCallback(() => {
        let num = 0;
        const tmp2 = 0 !== sharedValue.get();
        if (!tmp2) {
          num = -derivedValue.get();
        }
        set = sharedValue.set;
        const obj = timing;
        const result = set(obj.withTiming(num, obj4));
        if (tmp2) {
          derivedValue();
        } else {
          metroImportAll();
        }
        closure_7(!tmp2);
      }, items);
      const Gesture = controlMaxHeight(portraitOffsetY[21]).Gesture;
      const PanResult = Gesture.Pan();
      class N {
        constructor() {
          const obj = ReanimatedRexport;
          obj.runOnJS(metroImportAll)();
          const result = sharedValue2.set(0 !== sharedValue.get());
          const result1 = sharedValue3.set(0);
          const tmp4 = null != sharedValue.get() && sharedValue2.get();
          if (!tmp4) {
            const result2 = sharedValue1.set(0);
          }
        }
      }
      let obj6 = {
        runOnJS: controlMaxHeight(portraitOffsetY[15]).runOnJS,
        clearFocusTimer: sharedValue,
        drawerOpen: sharedValue2,
        positionY: sharedValue,
        CLOSE_DRAWER_POSITION: 0,
        velocity: sharedValue3,
        startY: sharedValue1,
      };
      N.__closure = obj6;
      N.__workletHash = 535397777506;
      N.__initData = __initData11;
      const onStartResult = PanResult.onStart(N);
      class H {
        constructor(velocityY) {
          const result = sharedValue3.set(velocityY.velocityY);
          const result1 = -1 * sharedValue.get();
          if (result1 <= derivedValue.get() + 16) {
            set = sharedValue.set;
            let num = sharedValue1.get();
            if (num == null) {
              num = 0;
            }
            const result2 = set(num + velocityY.translationY);
          }
        }
      }
      H.__closure = { velocity: sharedValue3, positionY: sharedValue, maxHeight: derivedValue, startY: sharedValue1 };
      H.__workletHash = 2475240610523;
      H.__initData = __initData10;
      const fn = function b() {
        const value = sharedValue2.get();
        let result = -1 * sharedValue.get();
        let result1 = derivedValue.get() / 2;
        let num = sharedValue3.get();
        if (num == null) {
          num = 0;
        }
        let result2 = -1 * num;
        let num2 = sharedValue3.get();
        if (num2 == null) {
          num2 = 0;
        }
        function openDrawer() {
          const obj = controlMaxHeight(portraitOffsetY[15]);
          obj.runOnJS(handleOpen)();
          const result = sharedValue1.set(-derivedValue.get());
          const obj2 = controlMaxHeight(portraitOffsetY[20]);
          const result1 = set(obj2.withTiming(sharedValue1.get(), obj4));
          const result2 = sharedValue2.set(true);
          const obj3 = controlMaxHeight(portraitOffsetY[15]);
          const runOnJSResult = obj3.runOnJS(isLandscapeMode(portraitOffsetY[22]).acknowledgeTooltip);
          runOnJSResult(controlMaxHeight(portraitOffsetY[17]).TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);
        }
        if (result2 < c15) {
          if (!tmp8) {
            if (result1 <= result) {
              openDrawer();
            } else {
              const result3 = sharedValue1.set(0);
              set2 = sharedValue.set;
              const obj6 = timing;
              set2(obj6.withTiming(0, obj5));
              const result4 = sharedValue2.set(false);
              const obj7 = ReanimatedRexport;
              obj7.runOnJS(c9)();
              const obj8 = ReanimatedRexport;
              obj8.runOnJS(handleClose)();
            }
          }
          const result5 = sharedValue1.set(0);
          set = sharedValue.set;
          let obj3 = timing;
          const result6 = set(obj3.withTiming(0, obj5));
          const result7 = sharedValue2.set(false);
          obj4 = ReanimatedRexport;
          obj4.runOnJS(c9)();
          obj5 = ReanimatedRexport;
          obj5.runOnJS(handleClose)();
        }
        openDrawer();
      };
      const onUpdateResult = onStartResult.onUpdate(H);
      let obj7 = {
        drawerOpen: sharedValue2,
        positionY: sharedValue,
        maxHeight: derivedValue,
        velocity: sharedValue3,
        MIN_GESTURE_TRIGGER_VELOCITY,
        CLOSE_DRAWER_POSITION: 0,
        runOnJS: controlMaxHeight(portraitOffsetY[15]).runOnJS,
        handleOpen,
        startY: sharedValue1,
        withTiming: controlMaxHeight(portraitOffsetY[20]).withTiming,
        TIMING_CONFIG: obj4,
        TooltipActionCreators: isLandscapeMode(portraitOffsetY[22]),
        TooltipNames: controlMaxHeight(portraitOffsetY[17]).TooltipNames,
        TIMING_CONFIG_EXIT: obj5,
        resetFocusTimer: derivedValue,
        handleClose,
      };
      fn.__closure = obj7;
      fn.__workletHash = 14860505928213;
      fn.__initData = __initData9;
      const items1 = [sharedValue, onUpdateResult.onEnd(fn), callback, first];
      return items1;
    };
const __initData12 = {
  code: 'function FocusedControlsBottomControlsTsx15(){const{reveal,controlHeightWithOffset,sheetHeight,isLandscapeMode,safeAreaRight,sheetWidth,withTiming,TIMING_CONFIG}=this.__closure;const revealOffset=reveal?0:controlHeightWithOffset;return{position:"absolute",height:sheetHeight,overflow:"hidden",bottom:isLandscapeMode?16:0,right:isLandscapeMode?16+safeAreaRight:0,borderRadius:isLandscapeMode?8:0,width:sheetWidth,transform:[{translateY:withTiming(revealOffset,TIMING_CONFIG)}]};}',
};
const __initData13 = {
  code: "function FocusedControlsBottomControlsTsx16(){const{sheetHeight,offsetY,positionY}=this.__closure;return{height:sheetHeight,transform:[{translateY:offsetY+positionY.get()}]};}",
};
const __initData14 = {
  code: "function FocusedControlsBottomControlsTsx17(){const{reveal,controlHeightWithOffset,sheetHeight,isLandscapeMode,safeAreaRight,sheetWidth,withTiming,TIMING_CONFIG}=this.__closure;const revealOffset=reveal?0:controlHeightWithOffset;return{position:'absolute',height:sheetHeight,overflow:'hidden',bottom:isLandscapeMode?16:0,right:isLandscapeMode?16+safeAreaRight:0,borderRadius:isLandscapeMode?8:0,width:sheetWidth,transform:[{translateY:withTiming(revealOffset,TIMING_CONFIG)}]};}",
};
const __initData15 = {
  code: "function FocusedControlsBottomControlsTsx18(){const{sheetHeight,offsetY,positionY}=this.__closure;return{height:sheetHeight,transform:[{translateY:offsetY+positionY.get()}]};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onDrawerOpen) => {
      let aboveActionBar;
      let actionBarControlsHeight;
      let bottom;
      let children;
      let closure_3;
      let diff2;
      let expandedControls;
      let items2;
      let onDrawerClose;
      let reveal;
      let right;
      let obj = reveal(right[13]);
      const cResult = obj.c(60);
      ({ children, expandedControls, actionBarControlsHeight, reveal } = onDrawerOpen);
      ({ aboveActionBar, onDrawerClose } = onDrawerOpen);
      onDrawerOpen = onDrawerOpen.onDrawerOpen;
      const tmp4 = closure_19();
      const tmp6 = onDrawerClose(right[14])();
      ({ bottom, right } = tmp6);
      const top = tmp6.top;
      size = onDrawerClose(right[23])();
      height = size.height;
      _slicedToArray = tmp7;
      const tmp8 = onDrawerClose(right[24])();
      width = tmp8;
      let bound = height;
      if (size.width > closure_10) {
        const _Math = Math;
        bound = Math.min(closure_11, height);
      }
      let sum = actionBarControlsHeight;
      if (size.width <= closure_10) {
        sum = actionBarControlsHeight + bottom;
      }
      let closure_6 = sum;
      const diff = bound - sum;
      let closure_7 = diff;
      const diff1 = bound - sum;
      if (size.width > closure_10) {
        if (typeof EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y === "function") {
          let num3 = 54;
          diff2 = diff1 - (top + 54 + 12);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if (typeof EXTENDED_CONTROLS_OFFSET_Y === "function") {
        let num = 54;
        const sum1 = top + 54;
        let num2 = 16;
        const tmpResult = reveal(right[7]);
        if (tmpResult.isIOS()) {
          num2 = 48;
        }
        diff2 = diff1 - (sum1 + num2);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      if (typeof EXTENDED_CONTROLS_OFFSET_Y === "function") {
        let tmp21;
        let tmp24;
        let num5 = 54;
        const sum2 = top + 54;
        let num7 = 16;
        const tmpResult5 = reveal(right[7]);
        if (tmpResult5.isIOS()) {
          num7 = 48;
        }
        const sum3 = sum2 + num7 + bottom;
        if (cResult[0] !== top) {
          if (typeof EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y === "function") {
            const sum4 = top + 54 + 12;
            cResult[0] = top;
            cResult[1] = sum4;
            tmp21 = sum4;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          tmp21 = cResult[1];
        }
        if (cResult[2] !== onDrawerClose) {
          const fn = function l() {
            let tmp;
            if (onDrawerClose != null) {
              tmp = onDrawerClose();
            }
            return tmp;
          };
          cResult[2] = onDrawerClose;
          cResult[3] = fn;
          tmp24 = fn;
        } else {
          tmp24 = cResult[3];
        }
        if (cResult[4] === size.width > closure_10) {
          if (cResult[5] === diff) {
            if (cResult[6] === onDrawerOpen) {
              if (cResult[7] === sum3) {
                if (cResult[8] === tmp21) {
                  let tmp25;
                  let tmp37;
                  if (cResult[9] === tmp24) {
                    tmp25 = cResult[10];
                  }
                  const tmp28 = _slicedToArray(closure_39(tmp25), 4);
                  const positionY = tmp28[0];
                  let closure_9 = tmp31;
                  const tmpResult6 = reveal(right[15]);
                  class X {
                    constructor() {
                      let items;
                      let num2;
                      let num3;
                      let num5;
                      let obj3;
                      let num = 0;
                      if (!reveal) {
                        num = closure_6;
                      }
                      size = {
                        position: "absolute",
                        height: bound,
                        overflow: "hidden",
                        bottom: num2,
                        right: num3,
                        borderRadius: num5,
                        width,
                        transform: items,
                      };
                      num2 = 0;
                      if (closure_3) {
                        num2 = 16;
                      }
                      num3 = 0;
                      if (closure_3) {
                        num3 = 16 + right;
                      }
                      num5 = 0;
                      if (closure_3) {
                        num5 = 8;
                      }
                      const obj = { translateY: obj3.withTiming(num, obj4) };
                      items = [obj];
                      obj3 = timing;
                      return size;
                    }
                  }
                  const obj2 = {
                    reveal,
                    controlHeightWithOffset: sum,
                    sheetHeight: bound,
                    isLandscapeMode: size.width > closure_10,
                    safeAreaRight: right,
                    sheetWidth: tmp8,
                    withTiming: reveal(right[20]).withTiming,
                    TIMING_CONFIG: obj4,
                  };
                  const useAnimatedStyle = tmpResult6.useAnimatedStyle;
                  X.__closure = obj2;
                  X.__workletHash = 1100882862174;
                  X.__initData = __initData12;
                  const animatedStyle = useAnimatedStyle(X);
                  if (cResult[11] !== positionY) {
                    const fn2 = function $() {
                      set = first.set;
                      const obj = timing;
                      const result = set(obj.withTiming(0, obj5));
                    };
                    cResult[11] = positionY;
                    cResult[12] = fn2;
                    tmp37 = fn2;
                  } else {
                    tmp37 = cResult[12];
                  }
                  if (cResult[13] === size.width > closure_10) {
                    let tmp38;
                    if (cResult[14] === positionY) {
                      tmp38 = cResult[15];
                    }
                    const effect = width.useEffect(tmp37, tmp38);
                    if (cResult[16] === positionY) {
                      let tmp40;
                      let tmp41;
                      let tmp44;
                      let tmp43;
                      let tmp49;
                      let tmp48;
                      if (cResult[17] === reveal) {
                        tmp40 = cResult[18];
                        tmp41 = cResult[19];
                      }
                      const effect1 = obj6.useEffect(tmp40, tmp41);
                      if (cResult[20] !== positionY) {
                        function ee() {
                          function handleSelectActivity() {
                            const obj = reveal(right[20]);
                            const result = set(obj.withTiming(0, obj5));
                          }
                          let ComponentDispatch = reveal(right[25]).ComponentDispatch;
                          const subscription = ComponentDispatch.subscribe(
                            constants.SELECT_ACTIVITY,
                            handleSelectActivity,
                          );
                          return () => {
                            const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                            ComponentDispatch.unsubscribe(constants.SELECT_ACTIVITY, handleSelectActivity);
                          };
                        }
                        let items = [positionY];
                        class K {
                          constructor() {
                            if (reveal) {
                              const result = first.set(0);
                            }
                          }
                        }
                        cResult[21] = items;
                        cResult[22] = ee;
                        tmp44 = ee;
                        tmp43 = items;
                      } else {
                        tmp43 = cResult[21];
                        tmp44 = cResult[22];
                      }
                      const effect2 = obj6.useEffect(tmp44, tmp43);
                      class K {
                        constructor() {
                          if (reveal) {
                            const result = first.set(0);
                          }
                        }
                      }
                      function le() {
                        let items;
                        const obj = { height: bound, transform: items };
                        items = [{ translateY: closure_7 + first.get() }];
                        ({ translateY: closure_7 + first.get() });
                        return obj;
                      }
                      let obj3 = { sheetHeight: bound, offsetY: diff, positionY };
                      le.__closure = obj3;
                      class X {
                        constructor() {
                          let items;
                          let num2;
                          let num3;
                          let num5;
                          let obj3;
                          let num = 0;
                          if (!reveal) {
                            num = closure_6;
                          }
                          size = {
                            position: "absolute",
                            height: bound,
                            overflow: "hidden",
                            bottom: num2,
                            right: num3,
                            borderRadius: num5,
                            width,
                            transform: items,
                          };
                          num2 = 0;
                          if (closure_3) {
                            num2 = 16;
                          }
                          num3 = 0;
                          if (closure_3) {
                            num3 = 16 + right;
                          }
                          num5 = 0;
                          if (closure_3) {
                            num5 = 8;
                          }
                          const obj = { translateY: obj3.withTiming(num, obj4) };
                          items = [obj];
                          obj3 = timing;
                          return size;
                        }
                      }
                      le.__initData = __initData13;
                      const animatedStyle1 = obj7.useAnimatedStyle(le);
                      if (cResult[23] !== tmp28[2]) {
                        function ce() {
                          let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                          const subscription = ComponentDispatch.subscribe(
                            constants.TOGGLE_CALL_CONTROL_DRAWER,
                            closure_9,
                          );
                          return () => {
                            const ComponentDispatch = reveal(right[25]).ComponentDispatch;
                            ComponentDispatch.unsubscribe(constants.TOGGLE_CALL_CONTROL_DRAWER, closure_1_9);
                          };
                        }
                        const items1 = [tmp28[2]];
                        class K {
                          constructor() {
                            if (reveal) {
                              const result = first.set(0);
                            }
                          }
                        }
                        cResult[24] = ce;
                        cResult[25] = items1;
                        tmp49 = items1;
                        tmp48 = ce;
                      } else {
                        tmp48 = cResult[24];
                        tmp49 = cResult[25];
                      }
                      const effect3 = obj6.useEffect(tmp48, tmp49);
                      const tmpResult7 = reveal(right[26]);
                      const theme = tmpResult7.useThemeContext().theme;
                      if (cResult[26] === animatedStyle1) {
                        let tmp51;
                        if (cResult[27] === tmp4.bottomDrawerContainer) {
                          tmp51 = cResult[28];
                        }
                        if (cResult[29] === tmp4.visualEffectViewBackground) {
                          let tmp52;
                          if (cResult[30] === theme) {
                            tmp52 = cResult[31];
                          }
                          if (cResult[32] === tmp4.visualEffectView) {
                            let tmp55;
                            if (cResult[33] === tmp52) {
                              tmp55 = cResult[34];
                            }
                            if (cResult[35] === tmp55) {
                              let tmp56;
                              if (cResult[36] === theme) {
                                tmp56 = cResult[37];
                              }
                              if (cResult[38] === aboveActionBar) {
                                if (cResult[39] === tmp28[3]) {
                                  if (cResult[40] === diff) {
                                    if (cResult[41] === positionY) {
                                      let tmp59;
                                      if (cResult[42] === tmp28[2]) {
                                        tmp59 = cResult[43];
                                      }
                                      if (cResult[44] === diff2) {
                                        if (cResult[45] === expandedControls) {
                                          let tmp64;
                                          if (cResult[46] === positionY) {
                                            tmp64 = cResult[47];
                                          }
                                          if (cResult[48] === children) {
                                            if (cResult[49] === tmp51) {
                                              if (cResult[50] === tmp56) {
                                                if (cResult[51] === tmp59) {
                                                  let tmp69;
                                                  if (cResult[52] === tmp64) {
                                                    tmp69 = cResult[53];
                                                  }
                                                  if (cResult[54] === tmp28[1]) {
                                                    if (cResult[57] === animatedStyle) {
                                                      let tmp75;
                                                      if (cResult[58] === tmp72) {
                                                        tmp75 = cResult[59];
                                                      }
                                                      return tmp75;
                                                    }
                                                    obj4 = { style: null, pointerEvents: "box-none", children: tmp72 };
                                                    class K {
                                                      constructor() {
                                                        if (reveal) {
                                                          const result = first.set(0);
                                                        }
                                                      }
                                                    }
                                                    cResult[57] = animatedStyle;
                                                    cResult[58] = tmp72;
                                                    const tmp77 = closure_13(onDrawerClose(right[15]).View, obj4);
                                                    class X {
                                                      constructor() {
                                                        let items;
                                                        let num2;
                                                        let num3;
                                                        let num5;
                                                        let obj3;
                                                        let num = 0;
                                                        if (!reveal) {
                                                          num = closure_6;
                                                        }
                                                        size = {
                                                          position: "absolute",
                                                          height: bound,
                                                          overflow: "hidden",
                                                          bottom: num2,
                                                          right: num3,
                                                          borderRadius: num5,
                                                          width,
                                                          transform: items,
                                                        };
                                                        num2 = 0;
                                                        if (closure_3) {
                                                          num2 = 16;
                                                        }
                                                        num3 = 0;
                                                        if (closure_3) {
                                                          num3 = 16 + right;
                                                        }
                                                        num5 = 0;
                                                        if (closure_3) {
                                                          num5 = 8;
                                                        }
                                                        const obj = { translateY: obj3.withTiming(num, obj4) };
                                                        items = [obj];
                                                        obj3 = timing;
                                                        return size;
                                                      }
                                                    }
                                                    tmp75 = tmp77;
                                                  }
                                                  obj5 = { gesture: null, children: tmp69 };
                                                  class K {
                                                    constructor() {
                                                      if (reveal) {
                                                        const result = first.set(0);
                                                      }
                                                    }
                                                  }
                                                  cResult[54] = tmp28[1];
                                                  cResult[55] = tmp69;
                                                  cResult[56] = closure_13(reveal(right[21]).GestureDetector, obj5);
                                                  closure_13(reveal(right[21]).GestureDetector, obj5);
                                                  class X {
                                                    constructor() {
                                                      let items;
                                                      let num2;
                                                      let num3;
                                                      let num5;
                                                      let obj3;
                                                      let num = 0;
                                                      if (!reveal) {
                                                        num = closure_6;
                                                      }
                                                      size = {
                                                        position: "absolute",
                                                        height: bound,
                                                        overflow: "hidden",
                                                        bottom: num2,
                                                        right: num3,
                                                        borderRadius: num5,
                                                        width,
                                                        transform: items,
                                                      };
                                                      num2 = 0;
                                                      if (closure_3) {
                                                        num2 = 16;
                                                      }
                                                      num3 = 0;
                                                      if (closure_3) {
                                                        num3 = 16 + right;
                                                      }
                                                      num5 = 0;
                                                      if (closure_3) {
                                                        num5 = 8;
                                                      }
                                                      const obj = { translateY: obj3.withTiming(num, obj4) };
                                                      items = [obj];
                                                      obj3 = timing;
                                                      return size;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          const obj8 = { style: null, children: items2 };
                                          class K {
                                            constructor() {
                                              if (reveal) {
                                                const result = first.set(0);
                                              }
                                            }
                                          }
                                          items2 = [tmp56, tmp59, children, tmp64];
                                          const tmp71 = closure_14(onDrawerClose(right[15]).View, obj8);
                                          class X {
                                            constructor() {
                                              let items;
                                              let num2;
                                              let num3;
                                              let num5;
                                              let obj3;
                                              let num = 0;
                                              if (!reveal) {
                                                num = closure_6;
                                              }
                                              size = {
                                                position: "absolute",
                                                height: bound,
                                                overflow: "hidden",
                                                bottom: num2,
                                                right: num3,
                                                borderRadius: num5,
                                                width,
                                                transform: items,
                                              };
                                              num2 = 0;
                                              if (closure_3) {
                                                num2 = 16;
                                              }
                                              num3 = 0;
                                              if (closure_3) {
                                                num3 = 16 + right;
                                              }
                                              num5 = 0;
                                              if (closure_3) {
                                                num5 = 8;
                                              }
                                              const obj = { translateY: obj3.withTiming(num, obj4) };
                                              items = [obj];
                                              obj3 = timing;
                                              return size;
                                            }
                                          }
                                          cResult[48] = children;
                                          cResult[49] = tmp51;
                                          cResult[50] = tmp56;
                                          cResult[51] = tmp59;
                                          cResult[52] = tmp64;
                                          cResult[53] = tmp71;
                                          tmp69 = tmp71;
                                        }
                                      }
                                      class K {
                                        constructor() {
                                          if (reveal) {
                                            const result = first.set(0);
                                          }
                                        }
                                      }
                                      tmp67[0] = expandedControls;
                                      tmp67[1] = diff2;
                                      tmp67[2] = positionY;
                                      const tmp68 = closure_13(closure_24, tmp67);
                                      cResult[44] = diff2;
                                      class X {
                                        constructor() {
                                          let items;
                                          let num2;
                                          let num3;
                                          let num5;
                                          let obj3;
                                          let num = 0;
                                          if (!reveal) {
                                            num = closure_6;
                                          }
                                          size = {
                                            position: "absolute",
                                            height: bound,
                                            overflow: "hidden",
                                            bottom: num2,
                                            right: num3,
                                            borderRadius: num5,
                                            width,
                                            transform: items,
                                          };
                                          num2 = 0;
                                          if (closure_3) {
                                            num2 = 16;
                                          }
                                          num3 = 0;
                                          if (closure_3) {
                                            num3 = 16 + right;
                                          }
                                          num5 = 0;
                                          if (closure_3) {
                                            num5 = 8;
                                          }
                                          const obj = { translateY: obj3.withTiming(num, obj4) };
                                          items = [obj];
                                          obj3 = timing;
                                          return size;
                                        }
                                      }
                                      cResult[46] = positionY;
                                      cResult[47] = tmp68;
                                      tmp64 = tmp68;
                                    }
                                  }
                                }
                              }
                              class K {
                                constructor() {
                                  if (reveal) {
                                    const result = first.set(0);
                                  }
                                }
                              }
                              tmp62[0] = tmp28[2];
                              tmp62[1] = aboveActionBar;
                              tmp62[2] = positionY;
                              tmp62[3] = diff;
                              tmp62[4] = tmp28[3];
                              const tmp63 = closure_13(closure_30, tmp62);
                              class X {
                                constructor() {
                                  let items;
                                  let num2;
                                  let num3;
                                  let num5;
                                  let obj3;
                                  let num = 0;
                                  if (!reveal) {
                                    num = closure_6;
                                  }
                                  size = {
                                    position: "absolute",
                                    height: bound,
                                    overflow: "hidden",
                                    bottom: num2,
                                    right: num3,
                                    borderRadius: num5,
                                    width,
                                    transform: items,
                                  };
                                  num2 = 0;
                                  if (closure_3) {
                                    num2 = 16;
                                  }
                                  num3 = 0;
                                  if (closure_3) {
                                    num3 = 16 + right;
                                  }
                                  num5 = 0;
                                  if (closure_3) {
                                    num5 = 8;
                                  }
                                  const obj = { translateY: obj3.withTiming(num, obj4) };
                                  items = [obj];
                                  obj3 = timing;
                                  return size;
                                }
                              }
                              cResult[39] = tmp28[3];
                              cResult[40] = diff;
                              cResult[41] = positionY;
                              cResult[42] = tmp28[2];
                              cResult[43] = tmp63;
                              tmp59 = tmp63;
                            }
                            const obj9 = { blurTheme: null, style: tmp55 };
                            class K {
                              constructor() {
                                if (reveal) {
                                  const result = first.set(0);
                                }
                              }
                            }
                            cResult[35] = tmp55;
                            cResult[36] = theme;
                            const tmp58 = closure_13(onDrawerClose(right[28]), obj9);
                            class X {
                              constructor() {
                                let items;
                                let num2;
                                let num3;
                                let num5;
                                let obj3;
                                let num = 0;
                                if (!reveal) {
                                  num = closure_6;
                                }
                                size = {
                                  position: "absolute",
                                  height: bound,
                                  overflow: "hidden",
                                  bottom: num2,
                                  right: num3,
                                  borderRadius: num5,
                                  width,
                                  transform: items,
                                };
                                num2 = 0;
                                if (closure_3) {
                                  num2 = 16;
                                }
                                num3 = 0;
                                if (closure_3) {
                                  num3 = 16 + right;
                                }
                                num5 = 0;
                                if (closure_3) {
                                  num5 = 8;
                                }
                                const obj = { translateY: obj3.withTiming(num, obj4) };
                                items = [obj];
                                obj3 = timing;
                                return size;
                              }
                            }
                            tmp56 = tmp58;
                          }
                          const items3 = [tmp4.visualEffectView];
                          class K {
                            constructor() {
                              if (reveal) {
                                const result = first.set(0);
                              }
                            }
                          }
                          cResult[32] = tmp4.visualEffectView;
                          cResult[33] = tmp52;
                          cResult[34] = items3;
                          tmp55 = items3;
                        }
                        reveal(right[27]);
                        class K {
                          constructor() {
                            if (reveal) {
                              const result = first.set(0);
                            }
                          }
                        }
                        cResult[29] = tmp4.visualEffectViewBackground;
                        cResult[30] = theme;
                        cResult[31] = null;
                        tmp52 = tmp54;
                      }
                      const items4 = [tmp4.bottomDrawerContainer, animatedStyle1];
                      cResult[26] = animatedStyle1;
                      cResult[27] = tmp4.bottomDrawerContainer;
                      cResult[28] = items4;
                      tmp51 = items4;
                    }
                    class K {
                      constructor() {
                        if (reveal) {
                          const result = first.set(0);
                        }
                      }
                    }
                    const items5 = [reveal, positionY];
                    cResult[16] = positionY;
                    cResult[17] = reveal;
                    class X {
                      constructor() {
                        let items;
                        let num2;
                        let num3;
                        let num5;
                        let obj3;
                        let num = 0;
                        if (!reveal) {
                          num = closure_6;
                        }
                        size = {
                          position: "absolute",
                          height: bound,
                          overflow: "hidden",
                          bottom: num2,
                          right: num3,
                          borderRadius: num5,
                          width,
                          transform: items,
                        };
                        num2 = 0;
                        if (closure_3) {
                          num2 = 16;
                        }
                        num3 = 0;
                        if (closure_3) {
                          num3 = 16 + right;
                        }
                        num5 = 0;
                        if (closure_3) {
                          num5 = 8;
                        }
                        const obj = { translateY: obj3.withTiming(num, obj4) };
                        items = [obj];
                        obj3 = timing;
                        return size;
                      }
                    }
                    cResult[19] = items5;
                    tmp41 = items5;
                    tmp40 = K;
                  }
                  const items6 = [size.width > closure_10, positionY];
                  cResult[13] = size.width > closure_10;
                  cResult[14] = positionY;
                  cResult[15] = items6;
                  tmp38 = items6;
                }
              }
            }
          }
        }
        const obj10 = {
          controlMaxHeight: diff,
          isLandscapeMode: null,
          portraitOffsetY: sum3,
          landscapeOffsetY: tmp21,
          onClose: tmp24,
          onOpen: onDrawerOpen,
        };
        cResult[4] = size.width > closure_10;
        cResult[5] = diff;
        cResult[6] = onDrawerOpen;
        cResult[7] = sum3;
        cResult[8] = tmp21;
        cResult[9] = tmp24;
        cResult[10] = obj10;
        tmp25 = obj10;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  : (onDrawerClose) => {
      let GestureDetector;
      let View2;
      let aboveActionBar;
      let actionBarControlsHeight;
      let bottom;
      let children;
      let closure_3;
      let diff2;
      let expandedControls;
      let items4;
      let items5;
      let items6;
      let obj7;
      let obj8;
      let onDrawerOpen;
      let reveal;
      let right;
      ({ actionBarControlsHeight, reveal } = onDrawerClose);
      onDrawerClose = onDrawerClose.onDrawerClose;
      right = undefined;
      let c6;
      let c7;
      let positionY;
      let closure_9;
      ({ children, expandedControls, aboveActionBar, onDrawerOpen } = onDrawerClose);
      let tmp = closure_19();
      const tmp4 = onDrawerClose(right[14])();
      ({ bottom, right } = tmp4);
      const top = tmp4.top;
      size = onDrawerClose(right[23])();
      height = size.height;
      _slicedToArray = tmp5;
      const tmp6 = onDrawerClose(right[24])();
      width = tmp6;
      let bound = height;
      if (size.width > closure_10) {
        const _Math = Math;
        bound = Math.min(closure_11, height);
      }
      let sum = actionBarControlsHeight;
      if (size.width <= closure_10) {
        sum = actionBarControlsHeight + bottom;
      }
      c6 = sum;
      const diff = bound - sum;
      c7 = diff;
      const diff1 = bound - sum;
      if (size.width > closure_10) {
        if (typeof EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y === "function") {
          let num3 = 54;
          diff2 = diff1 - (top + 54 + 12);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if (typeof EXTENDED_CONTROLS_OFFSET_Y === "function") {
        let num = 54;
        const sum1 = top + 54;
        let obj = reveal(tmp3[7]);
        let num2 = 16;
        if (obj.isIOS()) {
          num2 = 48;
        }
        diff2 = diff1 - (sum1 + num2);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      const obj2 = {
        controlMaxHeight: diff,
        isLandscapeMode: tmp5,
        portraitOffsetY: null,
        landscapeOffsetY: null,
        onClose: null,
        onOpen: null,
      };
      if (typeof EXTENDED_CONTROLS_OFFSET_Y === "function") {
        let num5 = 54;
        const sum2 = top + 54;
        let obj3 = reveal(tmp3[7]);
        let num6 = 16;
        if (obj3.isIOS()) {
          num6 = 48;
        }
        obj2.portraitOffsetY = sum2 + num6 + bottom;
        if (typeof EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y === "function") {
          obj2.landscapeOffsetY = top + 54 + 12;
          obj2.onClose = function onClose() {
            let tmp;
            if (onDrawerClose != null) {
              tmp = onDrawerClose();
            }
            return tmp;
          };
          obj2.onOpen = onDrawerOpen;
          const tmp23 = _slicedToArray(tmp18(obj2), 4);
          positionY = tmp23[0];
          closure_9 = tmp26;
          const fn = function p() {
            let items;
            let num2;
            let num3;
            let num5;
            let obj3;
            let num = 0;
            if (!reveal) {
              num = c6;
            }
            size = {
              position: "absolute",
              height: bound,
              overflow: "hidden",
              bottom: num2,
              right: num3,
              borderRadius: num5,
              width,
              transform: items,
            };
            num2 = 0;
            if (closure_3) {
              num2 = 16;
            }
            num3 = 0;
            if (closure_3) {
              num3 = 16 + right;
            }
            num5 = 0;
            if (closure_3) {
              num5 = 8;
            }
            const obj = { translateY: obj3.withTiming(num, obj4) };
            items = [obj];
            obj3 = timing;
            return size;
          };
          const tmp25 = tmp23[1];
          const tmp27 = tmp23[3];
          obj4 = {
            reveal,
            controlHeightWithOffset: sum,
            sheetHeight: bound,
            isLandscapeMode: size.width > closure_10,
            safeAreaRight: right,
            sheetWidth: tmp6,
            withTiming: reveal(right[20]).withTiming,
            TIMING_CONFIG: obj4,
          };
          const useAnimatedStyle = reveal(right[15]).useAnimatedStyle;
          reveal(right[15]);
          fn.__closure = obj4;
          fn.__workletHash = 15679717820444;
          fn.__initData = __initData14;
          let items = [size.width > closure_10, positionY];
          const animatedStyle = useAnimatedStyle(fn);
          const effect = width.useEffect(() => {
            set = first.set;
            const obj = timing;
            const result = set(obj.withTiming(0, obj5));
          }, items);
          const items1 = [reveal, positionY];
          const effect1 = width.useEffect(() => {
            if (reveal) {
              const result = first.set(0);
            }
          }, items1);
          const items2 = [positionY];
          const effect2 = width.useEffect(() => {
            function handleSelectActivity() {
              const obj = reveal(right[20]);
              const result = set(obj.withTiming(0, obj5));
            }
            let ComponentDispatch = reveal(right[25]).ComponentDispatch;
            const subscription = ComponentDispatch.subscribe(constants.SELECT_ACTIVITY, handleSelectActivity);
            return () => {
              const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
              ComponentDispatch.unsubscribe(constants.SELECT_ACTIVITY, handleSelectActivity);
            };
          }, items2);
          const tmp20Result4 = reveal(right[15]);
          class U {
            constructor() {
              let items;
              const obj = { height: bound, transform: items };
              items = [{ translateY: c7 + first.get() }];
              ({ translateY: c7 + first.get() });
              return obj;
            }
          }
          obj5 = { sheetHeight: bound, offsetY: diff, positionY };
          U.__closure = obj5;
          U.__workletHash = 12567422561237;
          U.__initData = __initData15;
          const items3 = [tmp23[2]];
          const animatedStyle1 = tmp20Result4.useAnimatedStyle(U);
          const effect3 = width.useEffect(() => {
            let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
            const subscription = ComponentDispatch.subscribe(constants.TOGGLE_CALL_CONTROL_DRAWER, closure_9);
            return () => {
              const ComponentDispatch = reveal(right[25]).ComponentDispatch;
              ComponentDispatch.unsubscribe(constants.TOGGLE_CALL_CONTROL_DRAWER, closure_1_9);
            };
          }, items3);
          const tmp20Result5 = reveal(right[26]);
          const theme = tmp20Result5.useThemeContext().theme;
          const obj6 = { style: animatedStyle, pointerEvents: "box-none", children: closure_13(GestureDetector, obj7) };
          const View = tmp2(tmp3[15]).View;
          obj7 = { gesture: tmp25, children: closure_14(View2, obj8) };
          GestureDetector = reveal(tmp3[21]).GestureDetector;
          obj8 = { style: items4, children: items6 };
          items4 = [tmp.bottomDrawerContainer, animatedStyle1];
          View2 = tmp2(tmp3[15]).View;
          const obj9 = { blurTheme: theme, style: items5 };
          items5 = [tmp.visualEffectView];
          let prop = null;
          const tmp2Result = onDrawerClose(right[28]);
          const tmp20Result6 = reveal(right[27]);
          if (tmp20Result6.isThemeLight(theme)) {
            prop = tmp.visualEffectViewBackground;
          }
          items5[1] = prop;
          items6 = [closure_13(tmp2Result, obj9), , ,];
          const obj10 = { onPressHeader: tmp23[2], aboveActionBar, positionY, offsetY: diff, isExpanded: tmp27 };
          items6[1] = closure_13(closure_30, obj10);
          items6[2] = children;
          const obj11 = { expandedControls, availableHeight: diff2, positionY };
          items6[3] = closure_13(closure_24, obj11);
          return closure_13(View, obj6);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
let closure_44 = tmp11;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let actionBar;
      let children;
      let closure_129_0;
      let expandedControls;
      let first;
      let header;
      let items;
      let omitPTT;
      let onDrawerClose;
      let onDrawerOpen;
      let reveal;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(16);
      ({ children, actionBar, expandedControls, reveal, header, onDrawerClose, omitPTT, onDrawerOpen } = arg0);
      const tmp5 = closure_19();
      [tmp7, closure_129_0] = react.useState(0);
      _slicedToArray(react.useState(0), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l(nativeEvent) {
          closure_1_0(nativeEvent.nativeEvent.layout.height);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === (undefined !== omitPTT && omitPTT)) {
        let tmp9;
        if (cResult[2] === tmp5) {
          tmp9 = cResult[3];
        }
        if (cResult[4] === actionBar) {
          if (cResult[5] === header) {
            let tmp16;
            if (cResult[6] === tmp9) {
              tmp16 = cResult[7];
            }
            if (cResult[8] === tmp7) {
              if (cResult[9] === children) {
                if (cResult[10] === expandedControls) {
                  if (cResult[11] === onDrawerClose) {
                    if (cResult[12] === onDrawerOpen) {
                      if (cResult[13] === reveal) {
                        let tmp20;
                        if (cResult[14] === tmp16) {
                          tmp20 = cResult[15];
                        }
                        return tmp20;
                      }
                    }
                  }
                }
              }
            }
            const obj2 = {
              aboveActionBar: children,
              actionBarControlsHeight: tmp7,
              expandedControls,
              reveal,
              onDrawerClose,
              onDrawerOpen,
              children: tmp16,
            };
            const tmp23 = map1(closure_44, obj2);
            cResult[8] = tmp7;
            cResult[9] = children;
            cResult[10] = expandedControls;
            cResult[11] = onDrawerClose;
            cResult[12] = onDrawerOpen;
            cResult[13] = reveal;
            cResult[14] = tmp16;
            cResult[15] = tmp23;
            tmp20 = tmp23;
          }
        }
        const obj3 = { onLayout: first, children: items };
        items = [header, actionBar, tmp9];
        const tmp19 = authStore2(hasOwnProperty, obj3);
        cResult[4] = actionBar;
        cResult[5] = header;
        cResult[6] = tmp9;
        cResult[7] = tmp19;
        tmp16 = tmp19;
      }
      let tmp10 = null;
      if (!(undefined !== omitPTT && omitPTT)) {
        obj4 = {
          look: CallPTTButton.CallPTTButtonLooks.BLUR,
          style: tmp5.ptbButton,
          sendCallback: metroImportAll,
          stopCallback,
        };
        const tmp13 = CallPTTButtonDefault;
        tmp10 = map1(tmp13, obj4);
      }
      cResult[1] = undefined !== omitPTT && omitPTT;
      cResult[2] = tmp5;
      cResult[3] = tmp10;
      tmp9 = tmp10;
    }
  : (omitPTT) => {
      let actionBar;
      let c0;
      let children;
      let expandedControls;
      let header;
      let items;
      let obj2;
      let onDrawerClose;
      let reveal;
      let tmp3;
      let flag = omitPTT.omitPTT;
      ({ children, actionBar, expandedControls, reveal, header, onDrawerClose } = omitPTT);
      if (flag === undefined) {
        flag = false;
      }
      c0 = undefined;
      const onDrawerOpen = omitPTT.onDrawerOpen;
      const tmp = closure_19();
      [tmp3, c0] = react.useState(0);
      const obj = {
        aboveActionBar: children,
        actionBarControlsHeight: tmp3,
        expandedControls,
        reveal,
        onDrawerClose,
        onDrawerOpen,
        children: authStore2(hasOwnProperty, obj2),
      };
      _slicedToArray(react.useState(0), 2);
      obj2 = {
        onLayout: react.useCallback((nativeEvent) => {
          _undefined(nativeEvent.nativeEvent.layout.height);
        }, []),
        children: items,
      };
      items = [header, actionBar];
      let tmp4Result = null;
      if (!flag) {
        const obj3 = {
          look: CallPTTButton.CallPTTButtonLooks.BLUR,
          style: tmp.ptbButton,
          sendCallback: metroImportAll,
          stopCallback,
        };
        const tmp11 = CallPTTButtonDefault;
        tmp4Result = map1(tmp11, obj3);
      }
      items[2] = tmp4Result;
      return map1(closure_44, obj);
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/video_calls/native/components/FocusedControlsBottomControls.tsx");

export default tmp12;
export const FOCUSED_CONTROLS_HEADER_HEIGHT = 54;
export const FocusedControlsBottomDrawer = tmp11;
