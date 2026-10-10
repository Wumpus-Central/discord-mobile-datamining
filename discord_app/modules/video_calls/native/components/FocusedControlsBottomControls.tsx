// discord_app/modules/video_calls/native/components/FocusedControlsBottomControls.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import CallPTTButton from "../../../../components_native/calls/CallPTTButton.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import TextStyles from "../../../rebrand/native/TextStyles.tsx";

const ReanimatedRexportDefault = ReanimatedRexport;
const CallPTTButtonDefault = CallPTTButton;

require = fn;
get_ActivityIndicator = fn(17);
({
  View: hasOwnProperty,
  TouchableWithoutFeedback: metroRequire,
  ScrollView: closure_7,
  StyleSheet,
} = get_ActivityIndicator);
const ChannelCallStore = fn(10353);
({ clearFocusTimer: closure_8, resetFocusTimer: closure_9 } = ChannelCallStore);
const ChannelCallConstants = fn(10354);
({ BOX_MODE_THRESHOLD_WIDTH: c10, BOX_MODE_ACTIONSHEET_HEIGHT: closure_11 } = ChannelCallConstants);
const Constants = fn(1085);
({ ComponentActions: closure_12, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let c15 = 500;
let c16 = 20;
function EXTENDED_CONTROLS_OFFSET_Y(arg0) {}
function EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y(arg0) {}
const createStyles = fn(5092);
let obj2 = {
  bottomDrawerContainer: null,
  visualEffectView: null,
  visualEffectViewBackground: null,
  expandedControlsContainer: null,
  aboveActionBarContainer: null,
  aboveActionBarChildrenContainer: null,
  ptbButton: null,
  tooltipStyle: null,
  containerStyle: null,
  labelStyle: null,
};
const rect = { position: "absolute", left: 0, right: 0, bottom: 0, borderRadius: nativeDefault.radii.sm };
obj2.bottomDrawerContainer = rect;
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.borderRadius = nativeDefault.radii.sm;
obj3.overflow = "hidden";
obj2.visualEffectView = obj3;
obj2.visualEffectViewBackground = { backgroundColor: "rgba(0, 0, 0, .15)" };
obj2.expandedControlsContainer = { marginHorizontal: 16 };
obj2.aboveActionBarContainer = { position: "absolute", left: 0, right: 0, top: -32, paddingTop: 4, paddingBottom: 8 };
obj2.aboveActionBarChildrenContainer = { position: "absolute", left: 16, right: 16, top: -64 };
obj2.ptbButton = { margin: 0, marginHorizontal: 16, marginBottom: 8 };
obj2.tooltipStyle = { alignSelf: "center", position: "absolute", top: -28 };
obj2.containerStyle = { paddingHorizontal: 8, paddingVertical: 4 };
const merged1 = Object.assign(
  TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.unsafe_rawColors.WHITE, 12, { uppercase: true }),
);
obj2.labelStyle = {};
let closure_19 = createStyles.createStyles(obj2);
let obj5 = { easing: fn(1200).STANDARD_EASING, duration: 250 };
let obj6 = { easing: fn(1200).STANDARD_EASING, duration: 400 };
const __initData = {
  code: 'function FocusedControlsBottomControlsTsx1(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;const opacity=Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1);return{opacity:opacity,pointerEvents:opacity===0?"none":"auto"};}',
};
const __initData2 = {
  code: "function FocusedControlsBottomControlsTsx2(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;const opacity=Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1);return{opacity:opacity,pointerEvents:opacity===0?'none':'auto'};}",
};
let ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FocusedControlsExpanded(positionY) {
      const cResult = availableHeight(bottom[13]).c(19);
      ({ expandedControls, availableHeight } = positionY);
      positionY = positionY.positionY;
      const tmp4 = closure_19();
      bottom = positionY(bottom[14])().bottom;
      const tmp6 = scrollEnabled(width.useState(false), 2);
      scrollEnabled = tmp6[0];
      width = tmp6[1];
      if (cResult[0] === availableHeight) {
        if (cResult[1] === bottom) {
          if (cResult[2] === scrollEnabled) {
            let tmp8 = cResult[3];
          }
          const fn2 = function w() {
            const bound = Math.min((-1 * positionY.get()) / c16, 1);
            const obj = { opacity: bound, pointerEvents: null };
            let str = "auto";
            if (0 === bound) {
              str = "none";
            }
            obj.pointerEvents = str;
            return obj;
          };
          const obj2 = { positionY, EXPANDED_DRAWER_SHOW_POSITION };
          fn2.__closure = obj2;
          fn2.__workletHash = 5181322553799;
          fn2.__initData = __initData;
          const animatedStyle = availableHeight(tmp2[15]).useAnimatedStyle(fn2);
          if (cResult[4] !== availableHeight) {
            const obj3 = { height: availableHeight };
            cResult[4] = availableHeight;
            cResult[5] = obj3;
            let tmp12 = obj3;
          } else {
            tmp12 = cResult[5];
          }
          if (cResult[6] === animatedStyle) {
            if (cResult[7] === tmp4.expandedControlsContainer) {
              let tmp13 = cResult[8];
            }
            if (cResult[9] === expandedControls) {
              if (cResult[10] === tmp8) {
                if (cResult[11] === tmp13) {
                  let tmp14 = cResult[12];
                }
                if (cResult[13] === scrollEnabled) {
                  if (cResult[14] === tmp14) {
                    let tmp17 = cResult[15];
                  }
                  if (cResult[16] === tmp12) {
                    if (cResult[17] === tmp17) {
                      let tmp21 = cResult[18];
                    }
                    return tmp21;
                  }
                  const obj4 = { style: tmp12, children: tmp17 };
                  const tmp24 = closure_13(closure_5, obj4);
                  cResult[16] = tmp12;
                  cResult[17] = tmp17;
                  cResult[18] = tmp24;
                  tmp21 = tmp24;
                }
                obj5 = { scrollEnabled, children: tmp14 };
                const tmp20 = closure_13(closure_7, obj5);
                cResult[13] = scrollEnabled;
                cResult[14] = tmp14;
                cResult[15] = tmp20;
                tmp17 = tmp20;
              }
            }
            obj6 = { style: tmp13, onLayout: tmp8, children: expandedControls };
            const tmp16 = closure_13(tmp5(tmp2[15]).View, obj6);
            cResult[9] = expandedControls;
            cResult[10] = tmp8;
            cResult[11] = tmp13;
            cResult[12] = tmp16;
            tmp14 = tmp16;
          }
          const items = [tmp4.expandedControlsContainer, animatedStyle];
          cResult[6] = animatedStyle;
          cResult[7] = tmp4.expandedControlsContainer;
          cResult[8] = items;
          tmp13 = items;
          const tmpResult = availableHeight(tmp2[15]);
        }
      }
      const fn = function l(nativeEvent) {
        if (nativeEvent.nativeEvent.layout.height > availableHeight - bottom !== first) {
          closure_4(tmp);
        }
      };
      cResult[0] = availableHeight;
      cResult[1] = bottom;
      cResult[2] = scrollEnabled;
      cResult[3] = fn;
      tmp8 = fn;
      let obj = availableHeight(bottom[13]);
      tmp5 = positionY;
    }
  : function FocusedControlsExpanded(availableHeight) {
      availableHeight = availableHeight.availableHeight;
      const positionY = availableHeight.positionY;
      let bottom;
      let scrollEnabled;
      width = undefined;
      bottom = positionY(bottom[14])().bottom;
      const tmp2 = scrollEnabled(width.useState(false), 2);
      scrollEnabled = tmp2[0];
      width = tmp2[1];
      const items = [availableHeight, bottom, scrollEnabled];
      const callback = width.useCallback((nativeEvent) => {
        if (nativeEvent.nativeEvent.layout.height > availableHeight - bottom !== first) {
          closure_4(tmp);
        }
      }, items);
      const tmp = closure_19();
      const fn = function h() {
        const bound = Math.min((-1 * positionY.get()) / c16, 1);
        const obj = { opacity: bound, pointerEvents: null };
        let str = "auto";
        if (0 === bound) {
          str = "none";
        }
        obj.pointerEvents = str;
        return obj;
      };
      fn.__closure = { positionY, EXPANDED_DRAWER_SHOW_POSITION };
      fn.__workletHash = 7351861170276;
      fn.__initData = __initData2;
      const obj3 = { style: { height: availableHeight }, children: null };
      const obj4 = { scrollEnabled, children: null };
      const animatedStyle = availableHeight(bottom[15]).useAnimatedStyle(fn);
      obj5 = { style: null, onLayout: callback, children: availableHeight.expandedControls };
      const items1 = [tmp.expandedControlsContainer, animatedStyle];
      obj5.style = items1;
      obj4.children = closure_13(positionY(bottom[15]).View, obj5);
      obj3.children = closure_13(closure_7, obj4);
      return closure_13(closure_5, obj3);
    };
const __initData3 = {
  code: "function FocusedControlsBottomControlsTsx3(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;return{opacity:1-Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1)};}",
};
const __initData4 = {
  code: "function FocusedControlsBottomControlsTsx4(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;return{opacity:1-Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1)};}",
};
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FocusedControlsBottomDrawerTooltip(positionY) {
      const cResult = positionY(576).c(8);
      positionY = positionY.positionY;
      const tmp4 = closure_19();
      const obj = positionY(576);
      const canShowTooltip = positionY(11036).useCanShowTooltip(
        positionY(1105).TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS,
        true,
      );
      const obj2 = positionY(11036);
      const fn = function o() {
        return { opacity: 1 - Math.min((-1 * positionY.get()) / c16, 1) };
      };
      fn.__closure = { positionY, EXPANDED_DRAWER_SHOW_POSITION };
      fn.__workletHash = 15386908151356;
      fn.__initData = __initData3;
      const animatedStyle = positionY(4850).useAnimatedStyle(fn);
      if (canShowTooltip) {
        const _Symbol = Symbol;
        ({ tooltipStyle, containerStyle, labelStyle } = tmp4);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.zYzy2i);
          cResult[0] = stringResult;
          let first = stringResult;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === tmp4.containerStyle) {
          if (cResult[2] === tmp4.labelStyle) {
            if (cResult[3] === tmp4.tooltipStyle) {
              let tmp11 = cResult[4];
            }
            if (cResult[5] === animatedStyle) {
              if (cResult[6] === tmp11) {
                let tmp14 = cResult[7];
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
        obj6 = {
          style: tooltipStyle,
          arrowPosition: tmp(1200).TooltipArrowPositions.CENTER,
          arrowDirection: tmp(1200).TooltipArrowDirections.DOWN,
          arrowWidth: 8,
          arrowHeight: 4,
          containerStyle,
          labelStyle,
          label: first,
        };
        const tmp13 = closure_13(tmp(1200).Tooltip, obj6);
        cResult[1] = tmp4.containerStyle;
        cResult[2] = tmp4.labelStyle;
        cResult[3] = tmp4.tooltipStyle;
        cResult[4] = tmp13;
        tmp11 = tmp13;
      } else {
        return null;
      }
      const obj3 = positionY(4850);
      const obj4 = { positionY, EXPANDED_DRAWER_SHOW_POSITION };
    }
  : function FocusedControlsBottomDrawerTooltip(positionY) {
      positionY = positionY.positionY;
      const tmp = closure_19();
      const canShowTooltip = positionY(11036).useCanShowTooltip(
        positionY(1105).TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS,
        true,
      );
      positionY(4850);
      const fn = function o() {
        return { opacity: 1 - Math.min((-1 * positionY.get()) / c16, 1) };
      };
      fn.__closure = { positionY, EXPANDED_DRAWER_SHOW_POSITION };
      fn.__workletHash = 13795512875803;
      fn.__initData = __initData4;
      let tmp7 = null;
      if (canShowTooltip) {
        const obj3 = { style: tmp6, children: null };
        const obj7 = {
          style: tmp.tooltipStyle,
          arrowPosition: tmp2(1200).TooltipArrowPositions.CENTER,
          arrowDirection: tmp2(1200).TooltipArrowDirections.DOWN,
          arrowWidth: 8,
          arrowHeight: 4,
          containerStyle: null,
          labelStyle: null,
          label: null,
        };
        ({ containerStyle: obj4.containerStyle, labelStyle: obj4.labelStyle } = tmp);
        const intl = tmp2(1126).intl;
        obj7.label = intl.string(tmp2(1126).t.zYzy2i);
        obj3.children = closure_13(tmp2(1200).Tooltip, obj7);
        tmp7 = closure_13(ReanimatedRexportDefault.View, obj3);
      }
      return tmp7;
    };
const __initData5 = {
  code: "function FocusedControlsBottomControlsTsx5(){const{offsetY,EXPANDED_DRAWER_SHOW_POSITION,positionY}=this.__closure;const maxHeightRange=offsetY/3-EXPANDED_DRAWER_SHOW_POSITION;const opacity=2-Math.max(Math.abs(positionY.get())/maxHeightRange,0);return{opacity:opacity};}",
};
const __initData6 = {
  code: "function FocusedControlsBottomControlsTsx6(){const{offsetY,EXPANDED_DRAWER_SHOW_POSITION,positionY}=this.__closure;const maxHeightRange=offsetY/3-EXPANDED_DRAWER_SHOW_POSITION;const opacity=2-Math.max(Math.abs(positionY.get())/maxHeightRange,0);return{opacity:opacity};}",
};
ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FocusedControlsAboveActionBarView(positionY) {
      const cResult = positionY(576).c(17);
      positionY = positionY.positionY;
      const offsetY = positionY.offsetY;
      ({ aboveActionBar, onPressHeader, isExpanded } = positionY);
      const tmp4 = closure_19();
      const obj = positionY(576);
      const tmp = positionY;
      const fn = function o() {
        return { opacity: 2 - Math.max(Math.abs(positionY.get()) / (offsetY / 3 - c16), 0) };
      };
      fn.__closure = { offsetY, EXPANDED_DRAWER_SHOW_POSITION, positionY };
      fn.__workletHash = 16821998405506;
      fn.__initData = __initData5;
      const animatedStyle = positionY(4850).useAnimatedStyle(fn);
      if (cResult[0] !== isExpanded) {
        const obj4 = { expanded: isExpanded };
        cResult[0] = isExpanded;
        cResult[1] = obj4;
        let tmp6 = obj4;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== positionY) {
        obj5 = { positionY };
        const tmp10 = closure_13(closure_27, obj5);
        cResult[2] = positionY;
        cResult[3] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp13 = closure_13(tmp(6843).ActionSheetHeaderBar, {});
        cResult[4] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] === aboveActionBar) {
        if (cResult[6] === animatedStyle) {
          if (cResult[7] === tmp4.aboveActionBarChildrenContainer) {
            let tmp14 = cResult[8];
          }
          if (cResult[9] === tmp4.aboveActionBarContainer) {
            if (cResult[10] === tmp7) {
              if (cResult[11] === tmp14) {
                let tmp18 = cResult[12];
              }
              if (cResult[13] === onPressHeader) {
                if (cResult[14] === tmp6) {
                  if (cResult[15] === tmp18) {
                    let tmp22 = cResult[16];
                  }
                  return tmp22;
                }
              }
              obj6 = {
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
          const obj7 = { style: tmp4.aboveActionBarContainer, children: null };
          const items = [tmp7, tmp11, tmp14];
          obj7.children = items;
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
        const obj8 = { style: null, children: null };
        const items1 = [tmp4.aboveActionBarChildrenContainer, animatedStyle];
        obj8.style = items1;
        obj8.children = aboveActionBar;
        tmp15 = closure_13(offsetY(4850).View, obj8);
      }
      cResult[5] = aboveActionBar;
      cResult[6] = animatedStyle;
      cResult[7] = tmp4.aboveActionBarChildrenContainer;
      cResult[8] = tmp15;
      tmp14 = tmp15;
      const obj2 = positionY(4850);
      const obj3 = { offsetY, EXPANDED_DRAWER_SHOW_POSITION, positionY };
    }
  : function FocusedControlsAboveActionBarView(positionY) {
      positionY = positionY.positionY;
      const offsetY = positionY.offsetY;
      const aboveActionBar = positionY.aboveActionBar;
      ({ onPressHeader, isExpanded } = positionY);
      const tmp = closure_19();
      const fn = function h() {
        return { opacity: 2 - Math.max(Math.abs(positionY.get()) / (offsetY / 3 - c16), 0) };
      };
      fn.__closure = { offsetY, EXPANDED_DRAWER_SHOW_POSITION, positionY };
      fn.__workletHash = 15125248924641;
      fn.__initData = __initData6;
      const obj3 = {
        accessible: true,
        onPress: onPressHeader,
        accessibilityRole: "button",
        accessibilityLabel: "Group DM",
        accessibilityHint: "Press to start a new conversation",
        accessibilityState: { expanded: isExpanded },
        children: null,
      };
      const obj4 = { style: tmp.aboveActionBarContainer, children: null };
      const animatedStyle = positionY(4850).useAnimatedStyle(fn);
      const items = [closure_13(closure_27, { positionY }), closure_13(positionY(6843).ActionSheetHeaderBar, {})];
      let tmp4Result = null != aboveActionBar;
      if (tmp4Result) {
        obj5 = { style: null, children: null };
        const items1 = [tmp.aboveActionBarChildrenContainer, animatedStyle];
        obj5.style = items1;
        obj5.children = aboveActionBar;
        tmp4Result = closure_13(offsetY(4850).View, obj5);
      }
      items[2] = tmp4Result;
      obj4.children = items;
      obj3.children = closure_14(closure_5, obj4);
      return closure_13(closure_6, obj3);
    };
const __initData7 = {
  code: "function FocusedControlsBottomControlsTsx7(){const{isLandscapeMode,controlMaxHeight,landscapeOffsetY,portraitOffsetY}=this.__closure;return isLandscapeMode?controlMaxHeight-landscapeOffsetY:controlMaxHeight-portraitOffsetY;}",
};
const __initData8 = {
  code: "function FocusedControlsBottomControlsTsx8(){const{drawerOpen,positionY,maxHeight,velocity,MIN_GESTURE_TRIGGER_VELOCITY,CLOSE_DRAWER_POSITION,runOnJS,handleOpen,startY,withTiming,TIMING_CONFIG,TooltipActionCreators,TooltipNames,TIMING_CONFIG_EXIT,resetFocusTimer,handleClose}=this.__closure;var _velocity$get,_velocity$get2;const isDrawerAlreadyOpen=drawerOpen.get();const isPassedTriggerThreshold=positionY.get()*-1>=maxHeight.get()/2;const isHighOpenVelocity=((_velocity$get=velocity.get())!==null&&_velocity$get!==void 0?_velocity$get:0)*-1>=MIN_GESTURE_TRIGGER_VELOCITY;const isHighCloseVelocity=((_velocity$get2=velocity.get())!==null&&_velocity$get2!==void 0?_velocity$get2:0)>=MIN_GESTURE_TRIGGER_VELOCITY;const isLowerThanMinHeight=positionY.get()>CLOSE_DRAWER_POSITION;const openDrawer=function openDrawer(){runOnJS(handleOpen)();startY.set(-maxHeight.get());positionY.set(withTiming(startY.get(),TIMING_CONFIG));drawerOpen.set(true);runOnJS(TooltipActionCreators.acknowledgeTooltip)(TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);};const closeDrawer=function closeDrawer(){startY.set(0);positionY.set(withTiming(CLOSE_DRAWER_POSITION,TIMING_CONFIG_EXIT));drawerOpen.set(false);runOnJS(resetFocusTimer)();runOnJS(handleClose)();};if(isHighOpenVelocity&&!isDrawerAlreadyOpen||isPassedTriggerThreshold&&!isDrawerAlreadyOpen){openDrawer();}else{if(isLowerThanMinHeight||isHighCloseVelocity&&isDrawerAlreadyOpen){closeDrawer();}else{if(isPassedTriggerThreshold){openDrawer();}else{closeDrawer();}}}}",
};
const __initData9 = {
  code: "function FocusedControlsBottomControlsTsx9(event){const{velocity,positionY,maxHeight,startY}=this.__closure;var _startY$get;velocity.set(event.velocityY);if(positionY.get()*-1>maxHeight.get()+16){return;}positionY.set(((_startY$get=startY.get())!==null&&_startY$get!==void 0?_startY$get:0)+event.translationY);}",
};
const __initData10 = {
  code: "function FocusedControlsBottomControlsTsx10(){const{runOnJS,clearFocusTimer,drawerOpen,positionY,CLOSE_DRAWER_POSITION,velocity,startY}=this.__closure;runOnJS(clearFocusTimer)();drawerOpen.set(positionY.get()!==CLOSE_DRAWER_POSITION);velocity.set(0);if(positionY.get()==null||!drawerOpen.get()){startY.set(0);}}",
};
const __initData11 = {
  code: "function FocusedControlsBottomControlsTsx11(){const{isLandscapeMode,controlMaxHeight,landscapeOffsetY,portraitOffsetY}=this.__closure;return isLandscapeMode?controlMaxHeight-landscapeOffsetY:controlMaxHeight-portraitOffsetY;}",
};
const __initData12 = {
  code: "function FocusedControlsBottomControlsTsx12(){const{drawerOpen,positionY,maxHeight,velocity,MIN_GESTURE_TRIGGER_VELOCITY,CLOSE_DRAWER_POSITION,runOnJS,handleOpen,startY,withTiming,TIMING_CONFIG,TooltipActionCreators,TooltipNames,TIMING_CONFIG_EXIT,resetFocusTimer,handleClose}=this.__closure;var _velocity$get,_velocity$get2;const isDrawerAlreadyOpen=drawerOpen.get();const isPassedTriggerThreshold=positionY.get()*-1>=maxHeight.get()/2;const isHighOpenVelocity=((_velocity$get=velocity.get())!==null&&_velocity$get!==void 0?_velocity$get:0)*-1>=MIN_GESTURE_TRIGGER_VELOCITY;const isHighCloseVelocity=((_velocity$get2=velocity.get())!==null&&_velocity$get2!==void 0?_velocity$get2:0)>=MIN_GESTURE_TRIGGER_VELOCITY;const isLowerThanMinHeight=positionY.get()>CLOSE_DRAWER_POSITION;function openDrawer(){runOnJS(handleOpen)();startY.set(-maxHeight.get());positionY.set(withTiming(startY.get(),TIMING_CONFIG));drawerOpen.set(true);runOnJS(TooltipActionCreators.acknowledgeTooltip)(TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);}function closeDrawer(){startY.set(0);positionY.set(withTiming(CLOSE_DRAWER_POSITION,TIMING_CONFIG_EXIT));drawerOpen.set(false);runOnJS(resetFocusTimer)();runOnJS(handleClose)();}if(isHighOpenVelocity&&!isDrawerAlreadyOpen||isPassedTriggerThreshold&&!isDrawerAlreadyOpen){openDrawer();}else if(isLowerThanMinHeight||isHighCloseVelocity&&isDrawerAlreadyOpen){closeDrawer();}else if(isPassedTriggerThreshold){openDrawer();}else{closeDrawer();}}",
};
const __initData13 = {
  code: "function FocusedControlsBottomControlsTsx13(event){const{velocity,positionY,maxHeight,startY}=this.__closure;var _startY$get;velocity.set(event.velocityY);if(positionY.get()*-1>maxHeight.get()+16){return;}positionY.set(((_startY$get=startY.get())!==null&&_startY$get!==void 0?_startY$get:0)+event.translationY);}",
};
const __initData14 = {
  code: "function FocusedControlsBottomControlsTsx14(){const{runOnJS,clearFocusTimer,drawerOpen,positionY,CLOSE_DRAWER_POSITION,velocity,startY}=this.__closure;runOnJS(clearFocusTimer)();drawerOpen.set(positionY.get()!==CLOSE_DRAWER_POSITION);velocity.set(0);if(positionY.get()==null||!drawerOpen.get()){startY.set(0);}}",
};
ReactCompilerGating = fn(558);
let closure_39 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDrawerGesture(controlMaxHeight) {
      const cResult = controlMaxHeight(portraitOffsetY[13]).c(14);
      controlMaxHeight = controlMaxHeight.controlMaxHeight;
      const isLandscapeMode = controlMaxHeight.isLandscapeMode;
      portraitOffsetY = controlMaxHeight.portraitOffsetY;
      const landscapeOffsetY = controlMaxHeight.landscapeOffsetY;
      const onClose = controlMaxHeight.onClose;
      const onOpen = controlMaxHeight.onOpen;
      let tmp4 = landscapeOffsetY(onClose.useState(false), 2);
      const first = tmp4[0];
      closure_7 = tmp4[1];
      let obj = controlMaxHeight(portraitOffsetY[13]);
      const sharedValue = controlMaxHeight(portraitOffsetY[15]).useSharedValue(0);
      let obj2 = controlMaxHeight(portraitOffsetY[15]);
      const fn = function s() {
        if (isLandscapeMode) {
          let diff = controlMaxHeight - landscapeOffsetY;
        } else {
          diff = controlMaxHeight - portraitOffsetY;
        }
        return diff;
      };
      fn.__closure = { isLandscapeMode, controlMaxHeight, landscapeOffsetY, portraitOffsetY };
      fn.__workletHash = 16220091635392;
      fn.__initData = __initData7;
      const derivedValue = controlMaxHeight(portraitOffsetY[15]).useDerivedValue(fn);
      let obj3 = controlMaxHeight(portraitOffsetY[15]);
      const sharedValue1 = controlMaxHeight(portraitOffsetY[15]).useSharedValue(0);
      obj5 = controlMaxHeight(portraitOffsetY[15]);
      const sharedValue2 = obj5.useSharedValue(false);
      obj6 = controlMaxHeight(portraitOffsetY[15]);
      const sharedValue3 = obj6.useSharedValue(0);
      if (cResult[0] === derivedValue) {
        if (cResult[1] === sharedValue) {
          let tmp11 = cResult[2];
        }
        if (cResult[3] === first) {
          if (cResult[4] === onOpen) {
            let tmp12 = cResult[5];
          }
          closure_13 = tmp12;
          if (cResult[6] === first) {
            if (cResult[7] === onClose) {
              let tmp13 = cResult[8];
            }
            closure_14 = tmp13;
            const Gesture = tmp(tmp2[21]).Gesture;
            class W {
              constructor() {
                obj = closure_0(closure_2[15]);
                tmp = obj.runOnJS(clearFocusTimer)();
                obj2 = closure_11;
                result = closure_11.set(0 !== closure_8.get());
                result1 = closure_12.set(0);
                tmp4 = null != closure_8.get() && obj2.get();
                if (!tmp4) {
                  tmp5 = closure_10;
                  result2 = closure_10.set(0);
                }
                return;
              }
            }
            let obj7 = {
              runOnJS: tmp(tmp2[15]).runOnJS,
              clearFocusTimer: sharedValue,
              drawerOpen: sharedValue2,
              positionY: sharedValue,
              CLOSE_DRAWER_POSITION: 0,
              velocity: sharedValue3,
              startY: sharedValue1,
            };
            W.__closure = obj7;
            W.__workletHash = 3178907529318;
            W.__initData = __initData10;
            const PanResult = Gesture.Pan();
            class G {
              constructor(arg0) {
                result = closure_12.set(controlMaxHeight.velocityY);
                obj = closure_8;
                result1 = -1 * closure_8.get();
                if (result1 <= closure_9.get() + 16) {
                  tmp3 = closure_10;
                  num = closure_10.get();
                  tmp4 = null;
                  if (num == null) {
                    num = 0;
                  }
                  result2 = obj.set(num + controlMaxHeight.translationY);
                }
                return;
              }
            }
            let obj8 = {
              velocity: sharedValue3,
              positionY: sharedValue,
              maxHeight: derivedValue,
              startY: sharedValue1,
            };
            G.__closure = obj8;
            G.__workletHash = 8306201926624;
            G.__initData = __initData9;
            const onStartResult = Gesture.Pan().onStart(W);
            class M {
              constructor() {
                obj = closure_11;
                value = closure_11.get();
                obj2 = closure_8;
                result = -1 * closure_8.get();
                result1 = closure_9.get() / 2;
                obj3 = closure_12;
                num = closure_12.get();
                if (num == null) {
                  num = 0;
                }
                tmp5 = c15;
                result2 = -1 * num;
                num2 = obj3.get();
                if (num2 == null) {
                  num2 = 0;
                }
                tmp6 = num2 >= tmp5;
                openDrawer = function openDrawer() {
                  controlMaxHeight(portraitOffsetY[15]).runOnJS(closure_1_13)();
                  const result = sharedValue1.set(-derivedValue.get());
                  const obj = controlMaxHeight(portraitOffsetY[15]);
                  const result1 = sharedValue.set(
                    controlMaxHeight(portraitOffsetY[20]).withTiming(sharedValue1.get(), obj5),
                  );
                  const result2 = sharedValue2.set(true);
                  const obj2 = controlMaxHeight(portraitOffsetY[20]);
                  const obj3 = controlMaxHeight(portraitOffsetY[15]);
                  controlMaxHeight(portraitOffsetY[15]).runOnJS(
                    isLandscapeMode(portraitOffsetY[22]).acknowledgeTooltip,
                  )(controlMaxHeight(portraitOffsetY[17]).TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);
                };
                if (result2 < tmp5) {
                  if (result1 <= result) {
                    return;
                  }
                  if (!tmp7) {
                    if (tmp6) {
                    }
                    if (result1 <= result) {
                      openDrawerResult = openDrawer();
                    } else {
                      tmp21 = closure_10;
                      result3 = closure_10.set(0);
                      tmp23 = closure_0;
                      tmp24 = closure_2;
                      obj7 = closure_0(closure_2[20]);
                      tmp25 = closure_21;
                      result4 = obj2.set(obj7.withTiming(0, closure_21));
                      flag2 = false;
                      result5 = obj.set(false);
                      obj8 = closure_0(closure_2[15]);
                      tmp28 = resetFocusTimer;
                      tmp29 = obj8.runOnJS(resetFocusTimer)();
                      obj9 = closure_0(closure_2[15]);
                      tmp30 = closure_14;
                      tmp31 = obj9.runOnJS(closure_14)();
                    }
                  }
                  tmp10 = closure_10;
                  result6 = closure_10.set(0);
                  tmp12 = closure_0;
                  tmp13 = closure_2;
                  obj4 = closure_0(closure_2[20]);
                  tmp14 = closure_21;
                  result7 = obj2.set(obj4.withTiming(0, closure_21));
                  flag = false;
                  result8 = obj.set(false);
                  obj5 = closure_0(closure_2[15]);
                  tmp17 = resetFocusTimer;
                  tmp18 = obj5.runOnJS(resetFocusTimer)();
                  obj6 = closure_0(closure_2[15]);
                  tmp19 = closure_14;
                  tmp20 = obj6.runOnJS(closure_14)();
                }
                openDrawerResult1 = openDrawer();
                return;
              }
            }
            let obj9 = {
              drawerOpen: sharedValue2,
              positionY: sharedValue,
              maxHeight: derivedValue,
              velocity: sharedValue3,
              MIN_GESTURE_TRIGGER_VELOCITY,
              CLOSE_DRAWER_POSITION: 0,
              runOnJS: tmp(tmp2[15]).runOnJS,
              handleOpen: tmp12,
              startY: sharedValue1,
              withTiming: tmp(tmp2[20]).withTiming,
              TIMING_CONFIG: obj5,
              TooltipActionCreators: isLandscapeMode(tmp2[22]),
              TooltipNames: tmp(tmp2[17]).TooltipNames,
              TIMING_CONFIG_EXIT: obj6,
              resetFocusTimer: derivedValue,
              handleClose: tmp13,
            };
            M.__closure = obj9;
            M.__workletHash = 15112485511884;
            M.__initData = __initData8;
            const onEndResult = Gesture.Pan().onStart(W).onUpdate(G).onEnd(M);
            if (cResult[9] === onEndResult) {
              if (cResult[10] === first) {
                if (cResult[11] === sharedValue) {
                  if (cResult[12] === tmp11) {
                    let tmp24 = cResult[13];
                  }
                  return tmp24;
                }
              }
            }
            const items = [sharedValue, onEndResult, tmp11, first];
            cResult[9] = onEndResult;
            cResult[10] = first;
            cResult[11] = sharedValue;
            cResult[12] = tmp11;
            cResult[13] = items;
            tmp24 = items;
            const onUpdateResult = Gesture.Pan().onStart(W).onUpdate(G);
          }
          function handleClose() {
            if (first) {
              if (onClose != null) {
                tmp();
              }
              closure_7(false);
            }
          }
          cResult[6] = first;
          cResult[7] = onClose;
          cResult[8] = handleClose;
          tmp13 = handleClose;
        }
        function handleOpen() {
          if (!first) {
            if (onOpen != null) {
              tmp();
            }
            closure_7(true);
          }
        }
        cResult[4] = onOpen;
        cResult[5] = handleOpen;
        tmp12 = handleOpen;
      }
      const fn2 = function l() {
        let num = 0;
        const tmp = 0 !== sharedValue.get();
        if (!tmp) {
          num = -derivedValue.get();
        }
        const result = sharedValue.set(timing.withTiming(num, obj5));
        if (tmp) {
          stopCallback();
        } else {
          sendCallback();
        }
        closure_7(!tmp);
      };
      cResult[0] = derivedValue;
      cResult[1] = sharedValue;
      cResult[2] = fn2;
      tmp11 = fn2;
      let obj4 = controlMaxHeight(portraitOffsetY[15]);
    }
  : function useDrawerGesture(controlMaxHeight) {
      controlMaxHeight = controlMaxHeight.controlMaxHeight;
      const isLandscapeMode = controlMaxHeight.isLandscapeMode;
      const portraitOffsetY = controlMaxHeight.portraitOffsetY;
      const landscapeOffsetY = controlMaxHeight.landscapeOffsetY;
      ({ onClose: noop, onOpen: closure_5 } = controlMaxHeight);
      let derivedValue;
      let sharedValue1;
      let sharedValue2;
      let sharedValue3;
      function handleOpen() {
        if (!first) {
          if (height != null) {
            tmp();
          }
          closure_7(true);
        }
      }
      function handleClose() {
        if (first) {
          if (width != null) {
            tmp();
          }
          closure_7(false);
        }
      }
      let tmp = landscapeOffsetY(noop.useState(false), 2);
      const first = tmp[0];
      closure_7 = tmp[1];
      const sharedValue = controlMaxHeight(portraitOffsetY[15]).useSharedValue(0);
      let obj = controlMaxHeight(portraitOffsetY[15]);
      class O {
        constructor() {
          tmp = controlMaxHeight;
          if (isLandscapeMode) {
            tmp4 = landscapeOffsetY;
            diff = tmp - landscapeOffsetY;
          } else {
            tmp2 = portraitOffsetY;
            diff = tmp - portraitOffsetY;
          }
          return diff;
        }
      }
      O.__closure = { isLandscapeMode, controlMaxHeight, landscapeOffsetY, portraitOffsetY };
      O.__workletHash = 9835520937079;
      O.__initData = __initData11;
      derivedValue = controlMaxHeight(portraitOffsetY[15]).useDerivedValue(O);
      let obj2 = controlMaxHeight(portraitOffsetY[15]);
      sharedValue1 = controlMaxHeight(portraitOffsetY[15]).useSharedValue(0);
      let obj3 = controlMaxHeight(portraitOffsetY[15]);
      sharedValue2 = controlMaxHeight(portraitOffsetY[15]).useSharedValue(false);
      obj5 = controlMaxHeight(portraitOffsetY[15]);
      sharedValue3 = obj5.useSharedValue(0);
      const items = [sharedValue, derivedValue];
      const callback = noop.useCallback(() => {
        let num = 0;
        const tmp = 0 !== sharedValue.get();
        if (!tmp) {
          num = -derivedValue.get();
        }
        const result = sharedValue.set(timing.withTiming(num, obj5));
        if (tmp) {
          stopCallback();
        } else {
          sendCallback();
        }
        closure_7(!tmp);
      }, items);
      const Gesture = controlMaxHeight(portraitOffsetY[21]).Gesture;
      let obj4 = controlMaxHeight(portraitOffsetY[15]);
      class N {
        constructor() {
          obj = closure_0(closure_2[15]);
          tmp = obj.runOnJS(clearFocusTimer)();
          obj2 = closure_11;
          result = closure_11.set(0 !== closure_8.get());
          result1 = closure_12.set(0);
          tmp4 = null != closure_8.get() && obj2.get();
          if (!tmp4) {
            tmp5 = closure_10;
            result2 = closure_10.set(0);
          }
          return;
        }
      }
      obj6 = {
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
      N.__initData = __initData14;
      const PanResult = Gesture.Pan();
      class H {
        constructor(arg0) {
          result = closure_12.set(controlMaxHeight.velocityY);
          obj = closure_8;
          result1 = -1 * closure_8.get();
          if (result1 <= closure_9.get() + 16) {
            tmp3 = closure_10;
            num = closure_10.get();
            tmp4 = null;
            if (num == null) {
              num = 0;
            }
            result2 = obj.set(num + controlMaxHeight.translationY);
          }
          return;
        }
      }
      H.__closure = { velocity: sharedValue3, positionY: sharedValue, maxHeight: derivedValue, startY: sharedValue1 };
      H.__workletHash = 2475240610523;
      H.__initData = __initData13;
      const onStartResult = Gesture.Pan().onStart(N);
      const fn = function b() {
        value = sharedValue2.get();
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
          controlMaxHeight(portraitOffsetY[15]).runOnJS(handleOpen)();
          const result = sharedValue1.set(-derivedValue.get());
          const obj = controlMaxHeight(portraitOffsetY[15]);
          const result1 = sharedValue.set(controlMaxHeight(portraitOffsetY[20]).withTiming(sharedValue1.get(), obj5));
          const result2 = sharedValue2.set(true);
          const obj2 = controlMaxHeight(portraitOffsetY[20]);
          const obj3 = controlMaxHeight(portraitOffsetY[15]);
          controlMaxHeight(portraitOffsetY[15]).runOnJS(isLandscapeMode(portraitOffsetY[22]).acknowledgeTooltip)(
            controlMaxHeight(portraitOffsetY[17]).TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS,
          );
        }
        if (result2 < c15) {
          if (!tmp7) {
            if (result1 <= result) {
              openDrawer();
            } else {
              const result3 = sharedValue1.set(0);
              const result4 = sharedValue.set(timing.withTiming(0, obj6));
              const result5 = sharedValue2.set(false);
              ReanimatedRexport.runOnJS(stopCallback)();
              ReanimatedRexport.runOnJS(handleClose)();
            }
          }
          const result6 = sharedValue1.set(0);
          const result7 = sharedValue.set(timing.withTiming(0, obj6));
          const result8 = sharedValue2.set(false);
          ReanimatedRexport.runOnJS(stopCallback)();
          obj6 = ReanimatedRexport;
          obj6.runOnJS(handleClose)();
        }
        openDrawer();
      };
      const onUpdateResult = Gesture.Pan().onStart(N).onUpdate(H);
      fn.__closure = {
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
        TIMING_CONFIG: obj5,
        TooltipActionCreators: isLandscapeMode(portraitOffsetY[22]),
        TooltipNames: controlMaxHeight(portraitOffsetY[17]).TooltipNames,
        TIMING_CONFIG_EXIT: obj6,
        resetFocusTimer: derivedValue,
        handleClose,
      };
      fn.__workletHash = 14860505928213;
      fn.__initData = __initData12;
      const items1 = [sharedValue, onUpdateResult.onEnd(fn), callback, first];
      return items1;
    };
const __initData15 = {
  code: 'function FocusedControlsBottomControlsTsx15(){const{reveal,controlHeightWithOffset,sheetHeight,isLandscapeMode,safeAreaRight,sheetWidth,withTiming,TIMING_CONFIG}=this.__closure;const revealOffset=reveal?0:controlHeightWithOffset;return{position:"absolute",height:sheetHeight,overflow:"hidden",bottom:isLandscapeMode?16:0,right:isLandscapeMode?16+safeAreaRight:0,borderRadius:isLandscapeMode?8:0,width:sheetWidth,transform:[{translateY:withTiming(revealOffset,TIMING_CONFIG)}]};}',
};
const __initData16 = {
  code: "function FocusedControlsBottomControlsTsx16(){const{sheetHeight,offsetY,positionY}=this.__closure;return{height:sheetHeight,transform:[{translateY:offsetY+positionY.get()}]};}",
};
const __initData17 = {
  code: "function FocusedControlsBottomControlsTsx17(){const{reveal,controlHeightWithOffset,sheetHeight,isLandscapeMode,safeAreaRight,sheetWidth,withTiming,TIMING_CONFIG}=this.__closure;const revealOffset=reveal?0:controlHeightWithOffset;return{position:'absolute',height:sheetHeight,overflow:'hidden',bottom:isLandscapeMode?16:0,right:isLandscapeMode?16+safeAreaRight:0,borderRadius:isLandscapeMode?8:0,width:sheetWidth,transform:[{translateY:withTiming(revealOffset,TIMING_CONFIG)}]};}",
};
const __initData18 = {
  code: "function FocusedControlsBottomControlsTsx18(){const{sheetHeight,offsetY,positionY}=this.__closure;return{height:sheetHeight,transform:[{translateY:offsetY+positionY.get()}]};}",
};
ReactCompilerGating = fn(558);
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FocusedControlsBottomDrawer(onDrawerOpen) {
      const cResult = reveal(right[13]).c(60);
      ({ children, expandedControls, actionBarControlsHeight, reveal } = onDrawerOpen);
      ({ aboveActionBar, onDrawerClose } = onDrawerOpen);
      onDrawerOpen = onDrawerOpen.onDrawerOpen;
      const tmp4 = closure_19();
      const tmp6 = onDrawerClose(right[14])();
      ({ bottom, right } = tmp6);
      const top = tmp6.top;
      let size = onDrawerClose(right[23])();
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
      closure_6 = sum;
      const diff = bound - sum;
      const diff1 = bound - sum;
      if (size.width > closure_10) {
        if (typeof EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y === "function") {
          let diff2 = diff1 - (top + 54 + 12);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if (typeof EXTENDED_CONTROLS_OFFSET_Y === "function") {
        const sum1 = top + 54;
        let num2 = 16;
        if (tmpResult.isIOS()) {
          num2 = 48;
        }
        diff2 = diff1 - (sum1 + num2);
        tmpResult = reveal(right[7]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      if (typeof EXTENDED_CONTROLS_OFFSET_Y === "function") {
        const sum2 = top + 54;
        let num7 = 16;
        if (tmpResult5.isIOS()) {
          num7 = 48;
        }
        const sum3 = sum2 + num7 + bottom;
        if (cResult[0] !== top) {
          if (typeof EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y === "function") {
            const sum4 = top + 54 + 12;
            cResult[0] = top;
            cResult[1] = sum4;
            let tmp21 = sum4;
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
          let tmp24 = fn;
        } else {
          tmp24 = cResult[3];
        }
        if (cResult[4] === tmp7) {
          if (cResult[5] === diff) {
            if (cResult[6] === onDrawerOpen) {
              if (cResult[7] === sum3) {
                if (cResult[8] === tmp21) {
                  if (cResult[9] === tmp24) {
                    let tmp25 = cResult[10];
                  }
                  [positionY] = closure_39(tmp25);
                  closure_9 = tmp31;
                  class X {
                    constructor() {
                      num = 0;
                      if (!reveal) {
                        num = closure_6;
                      }
                      size = {
                        position: "absolute",
                        height: closure_5,
                        overflow: "hidden",
                        bottom: null,
                        right: null,
                        borderRadius: null,
                        width: null,
                        transform: null,
                      };
                      tmp = closure_3;
                      num2 = 0;
                      if (closure_3) {
                        num2 = 16;
                      }
                      size.bottom = num2;
                      num3 = 0;
                      if (tmp) {
                        tmp2 = right;
                        num4 = 16;
                        num3 = 16 + right;
                      }
                      size.right = num3;
                      num5 = 0;
                      if (tmp) {
                        num5 = 8;
                      }
                      size.borderRadius = num5;
                      size.width = closure_4;
                      obj1 = { translateY: null };
                      obj3 = closure_0(closure_2[20]);
                      obj1.translateY = obj3.withTiming(num, closure_20);
                      items = [];
                      items[0] = obj1;
                      size.transform = items;
                      return size;
                    }
                  }
                  const obj2 = {
                    reveal,
                    controlHeightWithOffset: sum,
                    sheetHeight: bound,
                    isLandscapeMode: tmp7,
                    safeAreaRight: right,
                    sheetWidth: tmp8,
                    withTiming: reveal(right[20]).withTiming,
                    TIMING_CONFIG: obj5,
                  };
                  X.__closure = obj2;
                  X.__workletHash = 1100882862174;
                  X.__initData = __initData15;
                  const animatedStyle = reveal(right[15]).useAnimatedStyle(X);
                  if (cResult[11] !== positionY) {
                    const fn2 = function $() {
                      const result = first.set(timing.withTiming(0, obj6));
                    };
                    cResult[11] = positionY;
                    cResult[12] = fn2;
                    let tmp36 = fn2;
                  } else {
                    tmp36 = cResult[12];
                  }
                  if (cResult[13] === tmp7) {
                    if (cResult[14] === positionY) {
                      let tmp37 = cResult[15];
                    }
                    const effect = width.useEffect(tmp36, tmp37);
                    if (cResult[16] === positionY) {
                      if (cResult[17] === reveal) {
                        let tmp39 = cResult[18];
                        let tmp40 = cResult[19];
                      }
                      const effect1 = obj7.useEffect(tmp39, tmp40);
                      if (cResult[20] !== positionY) {
                        function ee() {
                          function handleSelectActivity() {
                            const result = positionY.set(reveal(right[20]).withTiming(0, obj6));
                          }
                          let ComponentDispatch = reveal(right[25]).ComponentDispatch;
                          const subscription = ComponentDispatch.subscribe(
                            constants.SELECT_ACTIVITY,
                            handleSelectActivity,
                          );
                          return () => {
                            const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                            ComponentDispatch.unsubscribe(__initData.SELECT_ACTIVITY, handleSelectActivity);
                          };
                        }
                        let items = [positionY];
                        class K {
                          constructor() {
                            if (reveal) {
                              tmp = closure_8;
                              num = 0;
                              result = closure_8.set(0);
                            }
                            return;
                          }
                        }
                        cResult[21] = items;
                        cResult[22] = ee;
                        let tmp43 = ee;
                        let tmp42 = items;
                      } else {
                        tmp42 = cResult[21];
                        tmp43 = cResult[22];
                      }
                      const effect2 = obj7.useEffect(tmp43, tmp42);
                      class K {
                        constructor() {
                          if (reveal) {
                            tmp = closure_8;
                            num = 0;
                            result = closure_8.set(0);
                          }
                          return;
                        }
                      }
                      function le() {
                        const obj = { height: bound, transform: null };
                        const items = [{ translateY: diff + first.get() }];
                        obj.transform = items;
                        return obj;
                      }
                      const obj3 = { sheetHeight: bound, offsetY: diff, positionY };
                      le.__closure = obj3;
                      class X {
                        constructor() {
                          num = 0;
                          if (!reveal) {
                            num = closure_6;
                          }
                          size = {
                            position: "absolute",
                            height: closure_5,
                            overflow: "hidden",
                            bottom: null,
                            right: null,
                            borderRadius: null,
                            width: null,
                            transform: null,
                          };
                          tmp = closure_3;
                          num2 = 0;
                          if (closure_3) {
                            num2 = 16;
                          }
                          size.bottom = num2;
                          num3 = 0;
                          if (tmp) {
                            tmp2 = right;
                            num4 = 16;
                            num3 = 16 + right;
                          }
                          size.right = num3;
                          num5 = 0;
                          if (tmp) {
                            num5 = 8;
                          }
                          size.borderRadius = num5;
                          size.width = closure_4;
                          obj1 = { translateY: null };
                          obj3 = closure_0(closure_2[20]);
                          obj1.translateY = obj3.withTiming(num, closure_20);
                          items = [];
                          items[0] = obj1;
                          size.transform = items;
                          return size;
                        }
                      }
                      le.__initData = __initData16;
                      const animatedStyle1 = obj8.useAnimatedStyle(le);
                      if (cResult[23] !== tmp31) {
                        function ce() {
                          let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                          const subscription = ComponentDispatch.subscribe(
                            __initData.TOGGLE_CALL_CONTROL_DRAWER,
                            closure_9,
                          );
                          return () => {
                            const ComponentDispatch = reveal(right[25]).ComponentDispatch;
                            ComponentDispatch.unsubscribe(constants.TOGGLE_CALL_CONTROL_DRAWER, closure_1_9);
                          };
                        }
                        const items1 = [tmp31];
                        class K {
                          constructor() {
                            if (reveal) {
                              tmp = closure_8;
                              num = 0;
                              result = closure_8.set(0);
                            }
                            return;
                          }
                        }
                        cResult[24] = ce;
                        cResult[25] = items1;
                        let tmp48 = items1;
                        let tmp47 = ce;
                      } else {
                        tmp47 = cResult[24];
                        tmp48 = cResult[25];
                      }
                      const effect3 = obj7.useEffect(tmp47, tmp48);
                      const theme = reveal(right[26]).useThemeContext().theme;
                      if (cResult[26] === animatedStyle1) {
                        if (cResult[27] === tmp4.bottomDrawerContainer) {
                          let tmp50 = cResult[28];
                        }
                        if (cResult[29] === tmp4.visualEffectViewBackground) {
                          if (cResult[30] === theme) {
                            let tmp51 = cResult[31];
                          }
                          if (cResult[32] === tmp4.visualEffectView) {
                            if (cResult[33] === tmp51) {
                              let tmp54 = cResult[34];
                            }
                            if (cResult[35] === tmp54) {
                              if (cResult[36] === theme) {
                                let tmp55 = cResult[37];
                              }
                              if (cResult[38] === aboveActionBar) {
                                if (cResult[39] === tmp32) {
                                  if (cResult[40] === diff) {
                                    if (cResult[41] === positionY) {
                                      if (cResult[42] === tmp31) {
                                        let tmp58 = cResult[43];
                                      }
                                      if (cResult[44] === diff2) {
                                        if (cResult[45] === expandedControls) {
                                          if (cResult[46] === positionY) {
                                            let tmp63 = cResult[47];
                                          }
                                          if (cResult[48] === children) {
                                            if (cResult[49] === tmp50) {
                                              if (cResult[50] === tmp55) {
                                                if (cResult[51] === tmp58) {
                                                  if (cResult[52] === tmp63) {
                                                    let tmp68 = cResult[53];
                                                  }
                                                  if (cResult[54] === tmp30) {
                                                    if (cResult[57] === animatedStyle) {
                                                      if (cResult[58] === tmp71) {
                                                        let tmp74 = cResult[59];
                                                      }
                                                      return tmp74;
                                                    }
                                                    const obj4 = {
                                                      style: null,
                                                      pointerEvents: "box-none",
                                                      children: null,
                                                    };
                                                    class K {
                                                      constructor() {
                                                        if (reveal) {
                                                          tmp = closure_8;
                                                          num = 0;
                                                          result = closure_8.set(0);
                                                        }
                                                        return;
                                                      }
                                                    }
                                                    obj4.children = tmp71;
                                                    cResult[57] = animatedStyle;
                                                    cResult[58] = tmp71;
                                                    class X {
                                                      constructor() {
                                                        num = 0;
                                                        if (!reveal) {
                                                          num = closure_6;
                                                        }
                                                        size = {
                                                          position: "absolute",
                                                          height: closure_5,
                                                          overflow: "hidden",
                                                          bottom: null,
                                                          right: null,
                                                          borderRadius: null,
                                                          width: null,
                                                          transform: null,
                                                        };
                                                        tmp = closure_3;
                                                        num2 = 0;
                                                        if (closure_3) {
                                                          num2 = 16;
                                                        }
                                                        size.bottom = num2;
                                                        num3 = 0;
                                                        if (tmp) {
                                                          tmp2 = right;
                                                          num4 = 16;
                                                          num3 = 16 + right;
                                                        }
                                                        size.right = num3;
                                                        num5 = 0;
                                                        if (tmp) {
                                                          num5 = 8;
                                                        }
                                                        size.borderRadius = num5;
                                                        size.width = closure_4;
                                                        obj1 = { translateY: null };
                                                        obj3 = closure_0(closure_2[20]);
                                                        obj1.translateY = obj3.withTiming(num, closure_20);
                                                        items = [];
                                                        items[0] = obj1;
                                                        size.transform = items;
                                                        return size;
                                                      }
                                                    }
                                                    tmp74 = closure_13(onDrawerClose(right[15]).View, obj4);
                                                    const tmp76 = closure_13(onDrawerClose(right[15]).View, obj4);
                                                  }
                                                  obj5 = { gesture: null, children: null };
                                                  class K {
                                                    constructor() {
                                                      if (reveal) {
                                                        tmp = closure_8;
                                                        num = 0;
                                                        result = closure_8.set(0);
                                                      }
                                                      return;
                                                    }
                                                  }
                                                  obj5.children = tmp68;
                                                  cResult[54] = tmp30;
                                                  cResult[55] = tmp68;
                                                  cResult[56] = closure_13(reveal(right[21]).GestureDetector, obj5);
                                                  class X {
                                                    constructor() {
                                                      num = 0;
                                                      if (!reveal) {
                                                        num = closure_6;
                                                      }
                                                      size = {
                                                        position: "absolute",
                                                        height: closure_5,
                                                        overflow: "hidden",
                                                        bottom: null,
                                                        right: null,
                                                        borderRadius: null,
                                                        width: null,
                                                        transform: null,
                                                      };
                                                      tmp = closure_3;
                                                      num2 = 0;
                                                      if (closure_3) {
                                                        num2 = 16;
                                                      }
                                                      size.bottom = num2;
                                                      num3 = 0;
                                                      if (tmp) {
                                                        tmp2 = right;
                                                        num4 = 16;
                                                        num3 = 16 + right;
                                                      }
                                                      size.right = num3;
                                                      num5 = 0;
                                                      if (tmp) {
                                                        num5 = 8;
                                                      }
                                                      size.borderRadius = num5;
                                                      size.width = closure_4;
                                                      obj1 = { translateY: null };
                                                      obj3 = closure_0(closure_2[20]);
                                                      obj1.translateY = obj3.withTiming(num, closure_20);
                                                      items = [];
                                                      items[0] = obj1;
                                                      size.transform = items;
                                                      return size;
                                                    }
                                                  }
                                                  const tmp73 = closure_13(reveal(right[21]).GestureDetector, obj5);
                                                }
                                              }
                                            }
                                          }
                                          obj6 = { style: null, children: null };
                                          class K {
                                            constructor() {
                                              if (reveal) {
                                                tmp = closure_8;
                                                num = 0;
                                                result = closure_8.set(0);
                                              }
                                              return;
                                            }
                                          }
                                          const items2 = [tmp55, tmp58, children, tmp63];
                                          obj6.children = items2;
                                          const tmp70 = closure_14(onDrawerClose(right[15]).View, obj6);
                                          class X {
                                            constructor() {
                                              num = 0;
                                              if (!reveal) {
                                                num = closure_6;
                                              }
                                              size = {
                                                position: "absolute",
                                                height: closure_5,
                                                overflow: "hidden",
                                                bottom: null,
                                                right: null,
                                                borderRadius: null,
                                                width: null,
                                                transform: null,
                                              };
                                              tmp = closure_3;
                                              num2 = 0;
                                              if (closure_3) {
                                                num2 = 16;
                                              }
                                              size.bottom = num2;
                                              num3 = 0;
                                              if (tmp) {
                                                tmp2 = right;
                                                num4 = 16;
                                                num3 = 16 + right;
                                              }
                                              size.right = num3;
                                              num5 = 0;
                                              if (tmp) {
                                                num5 = 8;
                                              }
                                              size.borderRadius = num5;
                                              size.width = closure_4;
                                              obj1 = { translateY: null };
                                              obj3 = closure_0(closure_2[20]);
                                              obj1.translateY = obj3.withTiming(num, closure_20);
                                              items = [];
                                              items[0] = obj1;
                                              size.transform = items;
                                              return size;
                                            }
                                          }
                                          cResult[48] = children;
                                          cResult[49] = tmp50;
                                          cResult[50] = tmp55;
                                          cResult[51] = tmp58;
                                          cResult[52] = tmp63;
                                          cResult[53] = tmp70;
                                          tmp68 = tmp70;
                                        }
                                      }
                                      class K {
                                        constructor() {
                                          if (reveal) {
                                            tmp = closure_8;
                                            num = 0;
                                            result = closure_8.set(0);
                                          }
                                          return;
                                        }
                                      }
                                      tmp66[0] = expandedControls;
                                      tmp66[1] = diff2;
                                      tmp66[2] = positionY;
                                      const tmp67 = closure_13(closure_24, tmp66);
                                      cResult[44] = diff2;
                                      class X {
                                        constructor() {
                                          num = 0;
                                          if (!reveal) {
                                            num = closure_6;
                                          }
                                          size = {
                                            position: "absolute",
                                            height: closure_5,
                                            overflow: "hidden",
                                            bottom: null,
                                            right: null,
                                            borderRadius: null,
                                            width: null,
                                            transform: null,
                                          };
                                          tmp = closure_3;
                                          num2 = 0;
                                          if (closure_3) {
                                            num2 = 16;
                                          }
                                          size.bottom = num2;
                                          num3 = 0;
                                          if (tmp) {
                                            tmp2 = right;
                                            num4 = 16;
                                            num3 = 16 + right;
                                          }
                                          size.right = num3;
                                          num5 = 0;
                                          if (tmp) {
                                            num5 = 8;
                                          }
                                          size.borderRadius = num5;
                                          size.width = closure_4;
                                          obj1 = { translateY: null };
                                          obj3 = closure_0(closure_2[20]);
                                          obj1.translateY = obj3.withTiming(num, closure_20);
                                          items = [];
                                          items[0] = obj1;
                                          size.transform = items;
                                          return size;
                                        }
                                      }
                                      cResult[46] = positionY;
                                      cResult[47] = tmp67;
                                      tmp63 = tmp67;
                                    }
                                  }
                                }
                              }
                              class K {
                                constructor() {
                                  if (reveal) {
                                    tmp = closure_8;
                                    num = 0;
                                    result = closure_8.set(0);
                                  }
                                  return;
                                }
                              }
                              tmp61[0] = tmp31;
                              tmp61[1] = aboveActionBar;
                              tmp61[2] = positionY;
                              tmp61[3] = diff;
                              tmp61[4] = tmp32;
                              const tmp62 = closure_13(closure_30, tmp61);
                              class X {
                                constructor() {
                                  num = 0;
                                  if (!reveal) {
                                    num = closure_6;
                                  }
                                  size = {
                                    position: "absolute",
                                    height: closure_5,
                                    overflow: "hidden",
                                    bottom: null,
                                    right: null,
                                    borderRadius: null,
                                    width: null,
                                    transform: null,
                                  };
                                  tmp = closure_3;
                                  num2 = 0;
                                  if (closure_3) {
                                    num2 = 16;
                                  }
                                  size.bottom = num2;
                                  num3 = 0;
                                  if (tmp) {
                                    tmp2 = right;
                                    num4 = 16;
                                    num3 = 16 + right;
                                  }
                                  size.right = num3;
                                  num5 = 0;
                                  if (tmp) {
                                    num5 = 8;
                                  }
                                  size.borderRadius = num5;
                                  size.width = closure_4;
                                  obj1 = { translateY: null };
                                  obj3 = closure_0(closure_2[20]);
                                  obj1.translateY = obj3.withTiming(num, closure_20);
                                  items = [];
                                  items[0] = obj1;
                                  size.transform = items;
                                  return size;
                                }
                              }
                              cResult[39] = tmp32;
                              cResult[40] = diff;
                              cResult[41] = positionY;
                              cResult[42] = tmp31;
                              cResult[43] = tmp62;
                              tmp58 = tmp62;
                            }
                            const obj9 = { blurTheme: null, style: null };
                            class K {
                              constructor() {
                                if (reveal) {
                                  tmp = closure_8;
                                  num = 0;
                                  result = closure_8.set(0);
                                }
                                return;
                              }
                            }
                            obj9.style = tmp54;
                            cResult[35] = tmp54;
                            cResult[36] = theme;
                            class X {
                              constructor() {
                                num = 0;
                                if (!reveal) {
                                  num = closure_6;
                                }
                                size = {
                                  position: "absolute",
                                  height: closure_5,
                                  overflow: "hidden",
                                  bottom: null,
                                  right: null,
                                  borderRadius: null,
                                  width: null,
                                  transform: null,
                                };
                                tmp = closure_3;
                                num2 = 0;
                                if (closure_3) {
                                  num2 = 16;
                                }
                                size.bottom = num2;
                                num3 = 0;
                                if (tmp) {
                                  tmp2 = right;
                                  num4 = 16;
                                  num3 = 16 + right;
                                }
                                size.right = num3;
                                num5 = 0;
                                if (tmp) {
                                  num5 = 8;
                                }
                                size.borderRadius = num5;
                                size.width = closure_4;
                                obj1 = { translateY: null };
                                obj3 = closure_0(closure_2[20]);
                                obj1.translateY = obj3.withTiming(num, closure_20);
                                items = [];
                                items[0] = obj1;
                                size.transform = items;
                                return size;
                              }
                            }
                            tmp55 = closure_13(onDrawerClose(right[28]), obj9);
                            const tmp57 = closure_13(onDrawerClose(right[28]), obj9);
                          }
                          const items3 = [tmp4.visualEffectView];
                          class K {
                            constructor() {
                              if (reveal) {
                                tmp = closure_8;
                                num = 0;
                                result = closure_8.set(0);
                              }
                              return;
                            }
                          }
                          cResult[32] = tmp4.visualEffectView;
                          cResult[33] = tmp51;
                          cResult[34] = items3;
                          tmp54 = items3;
                        }
                        reveal(right[27]);
                        class K {
                          constructor() {
                            if (reveal) {
                              tmp = closure_8;
                              num = 0;
                              result = closure_8.set(0);
                            }
                            return;
                          }
                        }
                        cResult[29] = tmp4.visualEffectViewBackground;
                        cResult[30] = theme;
                        cResult[31] = null;
                        tmp51 = tmp53;
                      }
                      const items4 = [tmp4.bottomDrawerContainer, animatedStyle1];
                      cResult[26] = animatedStyle1;
                      cResult[27] = tmp4.bottomDrawerContainer;
                      cResult[28] = items4;
                      tmp50 = items4;
                      const tmpResult7 = reveal(right[26]);
                    }
                    class K {
                      constructor() {
                        if (reveal) {
                          tmp = closure_8;
                          num = 0;
                          result = closure_8.set(0);
                        }
                        return;
                      }
                    }
                    const items5 = [reveal, positionY];
                    cResult[16] = positionY;
                    cResult[17] = reveal;
                    class X {
                      constructor() {
                        num = 0;
                        if (!reveal) {
                          num = closure_6;
                        }
                        size = {
                          position: "absolute",
                          height: closure_5,
                          overflow: "hidden",
                          bottom: null,
                          right: null,
                          borderRadius: null,
                          width: null,
                          transform: null,
                        };
                        tmp = closure_3;
                        num2 = 0;
                        if (closure_3) {
                          num2 = 16;
                        }
                        size.bottom = num2;
                        num3 = 0;
                        if (tmp) {
                          tmp2 = right;
                          num4 = 16;
                          num3 = 16 + right;
                        }
                        size.right = num3;
                        num5 = 0;
                        if (tmp) {
                          num5 = 8;
                        }
                        size.borderRadius = num5;
                        size.width = closure_4;
                        obj1 = { translateY: null };
                        obj3 = closure_0(closure_2[20]);
                        obj1.translateY = obj3.withTiming(num, closure_20);
                        items = [];
                        items[0] = obj1;
                        size.transform = items;
                        return size;
                      }
                    }
                    cResult[19] = items5;
                    tmp40 = items5;
                    tmp39 = K;
                  }
                  const items6 = [tmp7, positionY];
                  cResult[13] = tmp7;
                  cResult[14] = positionY;
                  cResult[15] = items6;
                  tmp37 = items6;
                  const tmpResult6 = reveal(right[15]);
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
        cResult[4] = tmp7;
        cResult[5] = diff;
        cResult[6] = onDrawerOpen;
        cResult[7] = sum3;
        cResult[8] = tmp21;
        cResult[9] = tmp24;
        cResult[10] = obj10;
        tmp25 = obj10;
        tmpResult5 = reveal(right[7]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      let obj = reveal(right[13]);
    }
  : function FocusedControlsBottomDrawer(onDrawerClose) {
      ({ actionBarControlsHeight, reveal } = onDrawerClose);
      onDrawerClose = onDrawerClose.onDrawerClose;
      right = undefined;
      c6 = undefined;
      c7 = undefined;
      let positionY;
      closure_9 = undefined;
      ({ children, expandedControls, aboveActionBar, onDrawerOpen } = onDrawerClose);
      let tmp = closure_19();
      const tmp4 = onDrawerClose(right[14])();
      ({ bottom, right } = tmp4);
      const top = tmp4.top;
      let size = onDrawerClose(right[23])();
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
          let diff2 = diff1 - (top + 54 + 12);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if (typeof EXTENDED_CONTROLS_OFFSET_Y === "function") {
        const sum1 = top + 54;
        let num2 = 16;
        if (obj.isIOS()) {
          num2 = 48;
        }
        diff2 = diff1 - (sum1 + num2);
        obj = reveal(tmp3[7]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      const obj2 = {
        controlMaxHeight: diff,
        isLandscapeMode: size.width > closure_10,
        portraitOffsetY: null,
        landscapeOffsetY: null,
        onClose: null,
        onOpen: null,
      };
      if (typeof EXTENDED_CONTROLS_OFFSET_Y === "function") {
        const sum2 = top + 54;
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
          closure_9 = tmp25;
          const fn = function p() {
            let num = 0;
            if (!reveal) {
              num = c6;
            }
            const size = {
              position: "absolute",
              height: bound,
              overflow: "hidden",
              bottom: null,
              right: null,
              borderRadius: null,
              width: null,
              transform: null,
            };
            let num2 = 0;
            if (closure_3) {
              num2 = 16;
            }
            size.bottom = num2;
            let num3 = 0;
            if (closure_3) {
              num3 = 16 + right;
            }
            size.right = num3;
            let num5 = 0;
            if (closure_3) {
              num5 = 8;
            }
            size.borderRadius = num5;
            size.width = width;
            const obj = { translateY: timing.withTiming(num, obj5) };
            const items = [obj];
            size.transform = items;
            return size;
          };
          const obj4 = {
            reveal,
            controlHeightWithOffset: sum,
            sheetHeight: bound,
            isLandscapeMode: tmp5,
            safeAreaRight: right,
            sheetWidth: tmp6,
            withTiming: reveal(tmp3[20]).withTiming,
            TIMING_CONFIG: obj5,
          };
          fn.__closure = obj4;
          fn.__workletHash = 15679717820444;
          fn.__initData = __initData17;
          let items = [tmp5, positionY];
          const animatedStyle = reveal(tmp3[15]).useAnimatedStyle(fn);
          const effect = width.useEffect(() => {
            const result = first.set(timing.withTiming(0, obj6));
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
              const result = positionY.set(reveal(right[20]).withTiming(0, obj6));
            }
            let ComponentDispatch = reveal(right[25]).ComponentDispatch;
            const subscription = ComponentDispatch.subscribe(constants.SELECT_ACTIVITY, handleSelectActivity);
            return () => {
              const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
              ComponentDispatch.unsubscribe(__initData.SELECT_ACTIVITY, handleSelectActivity);
            };
          }, items2);
          const tmp20Result = reveal(tmp3[15]);
          class U {
            constructor() {
              obj = { height: closure_5, transform: null };
              obj1 = { translateY: closure_7 + closure_8.get() };
              items = [];
              items[0] = obj1;
              obj.transform = items;
              return obj;
            }
          }
          obj5 = { sheetHeight: bound, offsetY: diff, positionY };
          U.__closure = obj5;
          U.__workletHash = 12567422561237;
          U.__initData = __initData18;
          const items3 = [tmp23[2]];
          const animatedStyle1 = reveal(tmp3[15]).useAnimatedStyle(U);
          const effect3 = width.useEffect(() => {
            let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
            const subscription = ComponentDispatch.subscribe(__initData.TOGGLE_CALL_CONTROL_DRAWER, closure_9);
            return () => {
              const ComponentDispatch = reveal(right[25]).ComponentDispatch;
              ComponentDispatch.unsubscribe(constants.TOGGLE_CALL_CONTROL_DRAWER, closure_1_9);
            };
          }, items3);
          const tmp20Result4 = reveal(tmp3[15]);
          const theme = reveal(tmp3[26]).useThemeContext().theme;
          obj6 = { style: animatedStyle, pointerEvents: "box-none", children: null };
          const obj7 = { gesture: tmp23[1], children: null };
          const obj8 = { style: null, children: null };
          const items4 = [tmp.bottomDrawerContainer, animatedStyle1];
          obj8.style = items4;
          const obj9 = { blurTheme: theme, style: null };
          const items5 = [tmp.visualEffectView];
          const tmp20Result5 = reveal(tmp3[26]);
          const tmp2Result = tmp2(tmp3[28]);
          let prop = null;
          if (tmp20Result6.isThemeLight(theme)) {
            prop = tmp.visualEffectViewBackground;
          }
          items5[1] = prop;
          obj9.style = items5;
          const items6 = [closure_13(tmp2Result, obj9), , ,];
          const obj10 = { onPressHeader: tmp23[2], aboveActionBar, positionY, offsetY: diff, isExpanded: tmp23[3] };
          items6[1] = closure_13(closure_30, obj10);
          items6[2] = children;
          const obj11 = { expandedControls, availableHeight: diff2, positionY };
          items6[3] = closure_13(closure_24, obj11);
          obj8.children = items6;
          obj7.children = closure_14(tmp2(tmp3[15]).View, obj8);
          obj6.children = closure_13(reveal(tmp3[21]).GestureDetector, obj7);
          return closure_13(tmp2(tmp3[15]).View, obj6);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        obj3 = reveal(tmp3[7]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
let closure_44 = tmp10;
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/FocusedControlsBottomControls.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FocusedControlsBottomControls(arg0) {
      const cResult = c.c(16);
      ({ children, actionBar, expandedControls, reveal, header, onDrawerClose, omitPTT, onDrawerOpen } = arg0);
      const tmp5 = closure_19();
      [tmp7, require] = noop.useState(0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l(nativeEvent) {
          _require(nativeEvent.nativeEvent.layout.height);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === (undefined !== omitPTT && omitPTT)) {
        if (cResult[2] === tmp5) {
          let tmp9 = cResult[3];
        }
        if (cResult[4] === actionBar) {
          if (cResult[5] === header) {
            if (cResult[6] === tmp9) {
              let tmp16 = cResult[7];
            }
            if (cResult[8] === tmp7) {
              if (cResult[9] === children) {
                if (cResult[10] === expandedControls) {
                  if (cResult[11] === onDrawerClose) {
                    if (cResult[12] === onDrawerOpen) {
                      if (cResult[13] === reveal) {
                        if (cResult[14] === tmp16) {
                          let tmp20 = cResult[15];
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
        const obj3 = { onLayout: first, children: null };
        const items = [header, actionBar, tmp9];
        obj3.children = items;
        const tmp19 = closure_1_14(height, obj3);
        cResult[4] = actionBar;
        cResult[5] = header;
        cResult[6] = tmp9;
        cResult[7] = tmp19;
        tmp16 = tmp19;
      }
      let tmp10 = null;
      if (!(undefined !== omitPTT && omitPTT)) {
        const obj4 = { look: CallPTTButton.CallPTTButtonLooks.BLUR, style: tmp5.ptbButton, sendCallback, stopCallback };
        tmp10 = map1(CallPTTButtonDefault, obj4);
      }
      cResult[1] = undefined !== omitPTT && omitPTT;
      cResult[2] = tmp5;
      cResult[3] = tmp10;
      tmp9 = tmp10;
      const tmp6 = _slicedToArray(noop.useState(0), 2);
    }
  : function FocusedControlsBottomControls(omitPTT) {
      let flag = omitPTT.omitPTT;
      ({ children, actionBar, expandedControls, reveal, header, onDrawerClose } = omitPTT);
      if (flag === undefined) {
        flag = false;
      }
      c0 = undefined;
      const tmp = closure_19();
      [tmp3, c0] = noop.useState(0);
      const obj = {
        aboveActionBar: children,
        actionBarControlsHeight: tmp3,
        expandedControls,
        reveal,
        onDrawerClose,
        onDrawerOpen: omitPTT.onDrawerOpen,
        children: null,
      };
      const obj2 = {
        onLayout: noop.useCallback((nativeEvent) => {
          _undefined(nativeEvent.nativeEvent.layout.height);
        }, []),
        children: null,
      };
      const items = [header, actionBar];
      let tmp4Result = null;
      if (!flag) {
        const obj3 = { look: CallPTTButton.CallPTTButtonLooks.BLUR, style: tmp.ptbButton, sendCallback, stopCallback };
        tmp4Result = map1(CallPTTButtonDefault, obj3);
      }
      items[2] = tmp4Result;
      obj2.children = items;
      obj.children = closure_1_14(height, obj2);
      return map1(closure_44, obj);
    };
export const FOCUSED_CONTROLS_HEADER_HEIGHT = 54;
export const FocusedControlsBottomDrawer = tmp10;
