// discord_app/modules/voice_panel/native/controls/VoicePanelControls.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import LegacyBaseButton from "../../../../../_runtime/05303_LegacyBaseButton.js";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import native2 from "../../../../design/components/experimental/native.tsx";
import cheapWorkletShallowEqual from "../../../reanimated/native/cheapWorkletShallowEqual.tsx";
import calculateVoicePanelHeaderSpecsDefault from "../header/calculateVoicePanelHeaderSpecs.tsx";
import VoicePanelSheetMorph from "../dock/VoicePanelSheetMorph.tsx";
import roundToNearestPixelDefault from "../utils/roundToNearestPixel.tsx";
import VoicePanelControlsUtils from "../utils/VoicePanelControlsUtils.tsx";
import VoicePanelFloatingCTAUtils from "utils/VoicePanelFloatingCTAUtils.tsx";
import useControlsLockDefault from "useControlsLock.tsx";
import useDrawerToggleDefault from "useDrawerToggle.tsx";
import trackVoicePanelTabOpened from "trackVoicePanelTabOpened.tsx";
import VoicePanelControlUtils from "utils/VoicePanelControlUtils.tsx";
import useConsoleConnectingInfoDefault from "../hooks/useConsoleConnectingInfo.tsx";
import VoicePanelFloatingCTAContainer from "VoicePanelFloatingCTAContainer.tsx";
import VoicePanelConsoleStatus from "VoicePanelConsoleStatus.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const VoicePanelConstants = fn(11223);
({
  UI_SHOW_HIDE_PHYSICS: closure_7,
  MODE_CHANGE_PHYSICS: closure_8,
  BORDER_RADIUS_PHYSICS: closure_9,
  PANEL_CONTROLS_HEIGHT_PHYSICS: c10,
  VoicePanelModes: closure_11,
} = VoicePanelConstants);
const VoicePanelCardConstants = fn(11226);
({ CALL_TILE_GUTTER: closure_12, EDGE_GUTTER: map1 } = VoicePanelCardConstants);
const VoicePanelControlsConstants = fn(11221);
({ CONTROLS_DRAWER_HEADER_EXPANDED_SIZE: closure_14, VoicePanelControlsModes: closure_15 } =
  VoicePanelControlsConstants);
const Constants = fn(1072);
({ ComponentActions: closure_16, ThemeTypes: closure_17 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = jsxProd);
const createStyles = fn(5014);
let obj = { accessibilityWrapper: null, wrapper: null, buttonsWrapper: null, actionSheetDragHandleWrapper: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.zIndex = 1;
obj.accessibilityWrapper = obj3;
let rect = {
  position: "absolute",
  bottom: 0,
  left: "50%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS,
};
obj.wrapper = rect;
const rect1 = {
  position: "absolute",
  left: 0,
  right: 0,
  zIndex: 20,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginHorizontal: nativeDefault.space.PX_16,
};
obj.buttonsWrapper = rect1;
obj.actionSheetDragHandleWrapper = { position: "absolute", top: 0, left: 0, right: 0, zIndex: 21 };
let closure_21 = createStyles.createStyles(obj);
let c22 = 200;
let c23 = 200;
const MetaQuestUtils = fn(1622);
let closure_25 = noop.memo(function Handle(openTab) {
  const tmp = closure_21();
  const tmp2 = useDrawerToggleDefault(openTab.openTab);
  ({ handlePress, accessibilityLabel, ariaHidden } = tmp2);
  return collapsedCategories(hasOwnProperty, {
    style: tmp.actionSheetDragHandleWrapper,
    children: collapsedCategories(native2.ActionSheetDragHandle, {
      onPress: handlePress,
      overlay: true,
      accessibilityLabel,
      "aria-hidden": ariaHidden,
    }),
  });
});
let closure_26 = {
  code: "function VoicePanelControlsTsx1(){const{scrollLock,isDragScrolling,runOnJS,gestureLock}=this.__closure;scrollLock.set(false);isDragScrolling.set(false);runOnJS(gestureLock.unlock)();}",
};
let closure_27 = {
  code: "function VoicePanelControlsTsx2({velocityY:velocityY}){const{wrapperSpecs,wrapperDimensions,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,controlsSpecs,VoicePanelControlsModes,gestureSpecs,scrollLock,isDragScrolling,runOnJS,gestureLock}=this.__closure;const absoluteVelocity=Math.abs(velocityY);let resultingControlMode;if(absoluteVelocity>200&&velocityY<0){wrapperSpecs.set({...wrapperSpecs.get(),height:wrapperDimensions.get().drawerHeight-calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height});if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.DRAWER;}}else if(absoluteVelocity<200&&gestureSpecs.get().isDrawer){if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.DRAWER;}}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.FLOATING_DEFAULT;}}scrollLock.set(false);isDragScrolling.set(false);runOnJS(gestureLock.unlock)(resultingControlMode);}",
};
let closure_28 = {
  code: "function VoicePanelControlsTsx3(){const{scrollLock,isDragScrolling,gestureSpecs,runOnJS,gestureLock}=this.__closure;console.log('ZZZZZ - ControlsGesture.onTouchesCancelled');scrollLock.set(false);isDragScrolling.set(false);gestureSpecs.set({...gestureSpecs.get(),active:false});runOnJS(gestureLock.unlock)();}",
};
let closure_29 = {
  code: "function VoicePanelControlsTsx4(event){const{gestureSpecs,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,wrapperSpecs,getControlsDrawerOpenWidth,windowDimensions,wrapperDimensions,controlsSpecs,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,getControlsDefaultWidth}=this.__closure;const change=event.absoluteY-gestureSpecs.get().absoluteY;const newHeight=gestureSpecs.get().height-gestureSpecs.get().y-change;if(newHeight>gestureSpecs.get().drawerTransitionHeight){if(!gestureSpecs.get().isDrawer){gestureSpecs.set({...gestureSpecs.get(),isDrawer:true});}const headerHeight=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height;wrapperSpecs.set({...wrapperSpecs.get(),x:0,y:0,width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:Math.min(newHeight,wrapperDimensions.get().drawerHeight-headerHeight),drawerMode:true});}else{const progress=newHeight/gestureSpecs.get().drawerTransitionHeight;const floatingHeight=controlsSpecs.get().height;const yOffset=Math.max(newHeight-safeArea.get().bottom-floatingHeight,0)*-1;const newChange=yOffset*(1-progress/1.5);if(gestureSpecs.get().isDrawer){gestureSpecs.set({...gestureSpecs.get(),isDrawer:false});}if(floatingHeight!==wrapperSpecs.get().height&&!wrapperSpecs.get().drawerMode){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}wrapperSpecs.set({...wrapperSpecs.get(),x:0,y:safeArea.get().bottom*-1+newChange,width:getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:floatingHeight,drawerMode:false});}}",
};
let closure_30 = {
  code: "function VoicePanelControlsTsx5(event,manager){const{State,gestureSpecs,controlsSpecs,VoicePanelControlsModes,touchMoveCount,SCROLL_BEGIN_GRACE_TICKS,isDragScrolling,sharedTab,scrollOffsetValue,GESTURE_VERTICAL_MINIMUM,wrapperSpecs,TRANSITIONAL_HEIGHT,INTER_FLOATING_TRANSITIONAL_HEIGHT,tab,runOnJS,openTab,VoicePanelTabAnalyticsSources,scrollLock}=this.__closure;if(event.state!==State.BEGAN||gestureSpecs.get().active)return;if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){manager.fail();return;}touchMoveCount.set(touchMoveCount.get()+1);const isDragging=touchMoveCount.get()<=SCROLL_BEGIN_GRACE_TICKS?true:isDragScrolling.get();const scrollOffset=function(){switch(sharedTab.get()){case'settings':case'app_launcher':return scrollOffsetValue.get();default:return 0;}}();const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const computed=gestureSpecs.get().absoluteY-absoluteY;if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER&&isDragging&&(computed>=0||scrollOffset>0)){return;}if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT&&computed>GESTURE_VERTICAL_MINIMUM||controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER&&(computed<-GESTURE_VERTICAL_MINIMUM||computed>GESTURE_VERTICAL_MINIMUM)){gestureSpecs.set({absoluteX:absoluteX,absoluteY:absoluteY,x:wrapperSpecs.get().x,y:wrapperSpecs.get().y,height:wrapperSpecs.get().height,isDrawer:controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER,active:true,drawerTransitionHeight:TRANSITIONAL_HEIGHT,interFloatingTransitionHeight:INTER_FLOATING_TRANSITIONAL_HEIGHT});if(controlsSpecs.get().mode!==VoicePanelControlsModes.DRAWER&&tab!=='settings'){runOnJS(openTab)({tab:'settings',source:VoicePanelTabAnalyticsSources.GESTURE,disableControlsUpdate:true});}scrollLock.set(true);manager.activate();}else if(Math.abs(computed)>Math.abs(GESTURE_VERTICAL_MINIMUM)){manager.fail();}}",
};
let closure_31 = {
  code: "function VoicePanelControlsTsx6(){const{runOnJS,gestureLock}=this.__closure;runOnJS(gestureLock.lock)();}",
};
let closure_32 = {
  code: "function VoicePanelControlsTsx7(event){const{touchMoveCount,gestureSpecs,wrapperSpecs,controlsSpecs,VoicePanelControlsModes,TRANSITIONAL_HEIGHT,INTER_FLOATING_TRANSITIONAL_HEIGHT}=this.__closure;touchMoveCount.set(0);gestureSpecs.set({absoluteX:event.changedTouches[0].absoluteX,absoluteY:event.changedTouches[0].absoluteY,x:wrapperSpecs.get().x,y:wrapperSpecs.get().y,height:wrapperSpecs.get().height,isDrawer:controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER,active:false,drawerTransitionHeight:TRANSITIONAL_HEIGHT,interFloatingTransitionHeight:INTER_FLOATING_TRANSITIONAL_HEIGHT});}",
};
const __initData = {
  code: "function VoicePanelControlsTsx8(){const{wrapperSpecs}=this.__closure;return wrapperSpecs.get().drawerMode;}",
};
const __initData2 = {
  code: "function VoicePanelControlsTsx9(current,previous){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current===previous)return;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}",
};
const __initData3 = {
  code: "function VoicePanelControlsTsx10(){const{connected,controlsSpecs,mode,windowDimensions,windowDimensionsIgnoringKeyboard,safeArea}=this.__closure;return{connected:connected.get(),currentControlsMode:controlsSpecs.get().mode,mode:mode.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,windowHeightIgnoringKeyboard:windowDimensionsIgnoringKeyboard.get().height,controlsHeightValue:controlsSpecs.get().height,safeArea:safeArea.get()};}",
};
const __initData4 = {
  code: "function VoicePanelControlsTsx11(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,wrapperSpecs,VoicePanelControlsModes,runOnJS,setControlsMode,isScreenReaderEnabled,EDGE_GUTTER,getControlsDefaultWidth,getDrawerSpec,getControlsDrawerOpenWidth}=this.__closure;var _previous$currentCont;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{currentControlsMode:currentControlsMode,mode:mode,windowWidth:windowWidth,windowHeightIgnoringKeyboard:windowHeightIgnoringKeyboard,controlsHeightValue:controlsHeightValue,safeArea:safeArea}=props;switch(mode){case VoicePanelModes.DISMISSED:case VoicePanelModes.PIP:if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}return;case VoicePanelModes.PANEL:default:break;}switch(currentControlsMode){case VoicePanelControlsModes.RESET:runOnJS(setControlsMode)({mode:(_previous$currentCont=previous===null||previous===void 0?void 0:previous.currentControlsMode)!==null&&_previous$currentCont!==void 0?_previous$currentCont:VoicePanelControlsModes.FLOATING_DEFAULT});return;case VoicePanelControlsModes.HIDDEN:if(isScreenReaderEnabled){wrapperSpecs.set({...wrapperSpecs.get(),hidden:false});break;}if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}break;case VoicePanelControlsModes.FLOATING_DEFAULT:wrapperSpecs.set({x:0,y:Math.max(safeArea.bottom,EDGE_GUTTER)*-1,width:getControlsDefaultWidth(windowWidth,safeArea.left,safeArea.right),height:controlsHeightValue,drawerMode:false,hidden:false});break;case VoicePanelControlsModes.DRAWER:const{minHeight:minHeight,maxHeight:maxHeight}=getDrawerSpec(windowHeightIgnoringKeyboard,safeArea.top);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(wrapperSpecs.get().height<=controlsHeightValue){height=maxHeight;}else if(previous!=null&&wrapperSpecs.get().height===getDrawerSpec(previous.windowHeight,previous.safeArea.top).maxHeight){height=maxHeight;}else if(wrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=minHeight;}wrapperSpecs.set({x:0,y:0,width:getControlsDrawerOpenWidth(windowWidth,safeArea.left,safeArea.right),height:height,drawerMode:true,hidden:false});break;}}",
};
let closure_37 = noop.memo(function FloatingBars(controlsSpecs) {
  ({ channelId, wrapperSpecs } = controlsSpecs);
  controlsSpecs = controlsSpecs.controlsSpecs;
  const accessoryHeights = controlsSpecs.accessoryHeights;
  const gestureState = controlsSpecs.gestureState;
  const shouldShowFloatingCTA = VoicePanelFloatingCTAUtils.useShouldShowFloatingCTA(channelId);
  const tmp4 = useControlsLockDefault();
  closure_4 = tmp4;
  const tmp5 = useConsoleConnectingInfoDefault(channelId);
  const isConnectingToConsole = tmp5.isConnectingToConsole;
  const items = [wrapperSpecs, controlsSpecs, accessoryHeights, gestureState];
  const memo = noop.useMemo(() => ({ wrapperSpecs, controlsSpecs, accessoryHeights, gestureState }), items);
  const items1 = [isConnectingToConsole, tmp4];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (isConnectingToConsole) {
      closure_4.lock();
    } else {
      closure_4.unlock();
    }
  }, items1);
  let tmp11;
  if (shouldShowFloatingCTA) {
    tmp11 = memo;
  }
  const items2 = [
    collapsedCategories(native.TransitionItem, {
      item: tmp11,
      renderItem: VoicePanelFloatingCTAContainer.renderVoicePanelFloatingCTA,
    }),
  ];
  let tmp12;
  if (tmp5.isConnectingOrConnectedToConsole) {
    tmp12 = memo;
  }
  const obj3 = { children: null };
  const obj2 = { item: tmp11, renderItem: VoicePanelFloatingCTAContainer.renderVoicePanelFloatingCTA };
  items2[1] = collapsedCategories(native.TransitionItem, {
    item: tmp12,
    renderItem: VoicePanelConsoleStatus.renderVoicePanelConsoleStatus,
  });
  obj3.children = items2;
  return dependencyMap(closure_1_19, obj3);
});
const __initData5 = {
  code: "function VoicePanelControlsTsx12(){const{controlsSpecs,connected,sharedTab,wrapperSpecs,TRANSITIONAL_HEIGHT,CONTROLS_DRAWER_HEADER_EXPANDED_SIZE,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const showPushToTalkText=controlsSpecs.get().pushToTalk&&connected.get();const height=sharedTab.get()==='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?CONTROLS_DRAWER_HEADER_EXPANDED_SIZE:controlsSpecs.get().height;const translateY=function(){return sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?-controlsSpecs.get().height:0;}();return{top:showPushToTalkText?-4:0,height:withSpring(height,MODE_CHANGE_PHYSICS),opacity:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0:1,MODE_CHANGE_PHYSICS),transform:[{translateY:withSpring(translateY,MODE_CHANGE_PHYSICS)},{scale:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0.95:1,MODE_CHANGE_PHYSICS)}]};}",
};
let closure_39 = noop.memo(function VoicePanelButtonsInner(sharedTab) {
  ({ openTab: require, wrapperSpecs } = sharedTab);
  sharedTab = sharedTab.sharedTab;
  let controlsSpecs;
  const ref = controlsSpecs.useRef(true);
  const tmp2 = wrapperSpecs(sharedTab[32])(ref);
  const context = controlsSpecs.useContext(wrapperSpecs(sharedTab[14]));
  controlsSpecs = context.controlsSpecs;
  const connected = context.connected;
  const tmp3 = closure_21();
  const arr = wrapperSpecs(sharedTab[33])();
  const fn = function c() {
    let pushToTalk = controlsSpecs.get().pushToTalk;
    if (pushToTalk) {
      pushToTalk = connected.get();
    }
    if ("settings" === sharedTab.get()) {
      if (wrapperSpecs.get().height >= c22) {
        let height = CONTROLS_DRAWER_HEADER_EXPANDED_SIZE;
      }
      num = 0;
      if ("settings" !== sharedTab.get()) {
        num = 0;
        if (wrapperSpecs.get().height >= c22) {
          num = -controlsSpecs.get().height;
        }
      }
      let num2 = 0;
      if (pushToTalk) {
        num2 = -4;
      }
      const obj3 = {
        top: num2,
        height: spring.withSpring(height, MODE_CHANGE_PHYSICS),
        opacity: null,
        transform: null,
      };
      let num4 = 1;
      if ("settings" !== sharedTab.get()) {
        num4 = 1;
        if (wrapperSpecs.get().height >= c22) {
          num4 = 0;
        }
      }
      obj3.opacity = spring.withSpring(num4, MODE_CHANGE_PHYSICS);
      const obj6 = { translateY: null };
      obj6.translateY = spring.withSpring(num, MODE_CHANGE_PHYSICS);
      const items = [obj6];
      const tmp6Result = spring;
      let num5 = 1;
      if ("settings" !== sharedTab.get()) {
        num5 = 1;
        if (wrapperSpecs.get().height >= c22) {
          num5 = 0.95;
        }
      }
      const obj7 = { scale: spring.withSpring(num5, MODE_CHANGE_PHYSICS) };
      items[1] = obj7;
      obj3.transform = items;
      return obj3;
    }
    height = controlsSpecs.get().height;
  };
  const obj = require("ReanimatedRexport");
  fn.__closure = {
    controlsSpecs,
    connected,
    sharedTab,
    wrapperSpecs,
    TRANSITIONAL_HEIGHT: v200,
    CONTROLS_DRAWER_HEADER_EXPANDED_SIZE,
    withSpring: require("spring").withSpring,
    MODE_CHANGE_PHYSICS,
  };
  fn.__workletHash = 17578996123721;
  fn.__initData = __initData5;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const effect = controlsSpecs.useEffect(() => {
    ref.current = false;
  }, []);
  let obj3 = { skipEntering: tmp2, children: null };
  let obj4 = { style: null, children: null };
  let items = [tmp3.buttonsWrapper, animatedStyle];
  obj4.style = items;
  const obj2 = {
    controlsSpecs,
    connected,
    sharedTab,
    wrapperSpecs,
    TRANSITIONAL_HEIGHT: v200,
    CONTROLS_DRAWER_HEADER_EXPANDED_SIZE,
    withSpring: require("spring").withSpring,
    MODE_CHANGE_PHYSICS,
  };
  obj4.children = arr.map((props) => props.render(props.key, { props, openTab, wrapperSpecs }));
  obj3.children = closure_18(wrapperSpecs(sharedTab[35]), obj4);
  return closure_18(require("ReanimatedRexport").LayoutAnimationConfig, obj3);
});
const __initData6 = {
  code: "function VoicePanelControlsTsx13(){const{wrapperSpecs,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;return wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get();}",
};
const __initData7 = {
  code: "function VoicePanelControlsTsx14(){const{dockJoinMorphOrigin}=this.__closure;return dockJoinMorphOrigin.get()!=null;}",
};
const __initData8 = {
  code: "function VoicePanelControlsTsx15(morphing,previous){const{joinFrozenSpecs,wrapperSpecs}=this.__closure;if(morphing===previous)return;joinFrozenSpecs.set(morphing?{...wrapperSpecs.get()}:null);}",
};
const __initData9 = {
  code: "function VoicePanelControlsTsx16(){const{joinFrozenSpecs,borderRadius,roundToNearestPixel,withSpring,useReducedMotion,offscreenY,UI_SHOW_HIDE_PHYSICS,wrapperSpecs,BORDER_RADIUS_PHYSICS,PANEL_CONTROLS_HEIGHT_PHYSICS,MODE_CHANGE_PHYSICS,isDockEnabled,gestureState,isDockExpanding,SHEET_MORPH_EXPANDING_PANEL_FADE,SHEET_MORPH_DOCKING_PANEL_FADE,dockContentSwap,getSheetMorphFadeProgress,dockMinimizeProgress}=this.__closure;const frozen=joinFrozenSpecs.get();if(frozen!=null){return{borderBottomRightRadius:borderRadius,borderBottomLeftRadius:borderRadius,height:frozen.height,width:frozen.width,marginLeft:roundToNearestPixel(frozen.width/2)*-1,opacity:1,transform:[{translateX:frozen.x},{translateY:withSpring(useReducedMotion.get()?frozen.y:offscreenY.get(),UI_SHOW_HIDE_PHYSICS)}]};}const shared={borderBottomRightRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),borderBottomLeftRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),height:withSpring(wrapperSpecs.get().height,PANEL_CONTROLS_HEIGHT_PHYSICS),width:withSpring(wrapperSpecs.get().width,MODE_CHANGE_PHYSICS),marginLeft:withSpring(roundToNearestPixel(wrapperSpecs.get().width/2)*-1,MODE_CHANGE_PHYSICS)};if(!isDockEnabled){return{...shared,transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?offscreenY.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}const panelFade=isDockExpanding.get()?SHEET_MORPH_EXPANDING_PANEL_FADE:SHEET_MORPH_DOCKING_PANEL_FADE;return{...shared,opacity:withSpring((wrapperSpecs.get().hidden?0:1)*Math.max(dockContentSwap.get(),getSheetMorphFadeProgress(1-dockMinimizeProgress.get(),panelFade.start,panelFade.end)),MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(!useReducedMotion.get()&&wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?offscreenY.get():wrapperSpecs.get().y+dockMinimizeProgress.get()*offscreenY.get(),UI_SHOW_HIDE_PHYSICS)}]};}",
};
const __initData10 = {
  code: "function VoicePanelControlsTsx17(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}",
};
const __initData11 = {
  code: "function VoicePanelControlsTsx18(mode,previousMode){const{isScreenReaderEnabled,VoicePanelControlsModes,runOnJS,setIsDrawer}=this.__closure;if(mode===previousMode||!isScreenReaderEnabled)return;if(mode===VoicePanelControlsModes.DRAWER&&previousMode!==VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(true);}else if(mode!==VoicePanelControlsModes.DRAWER&&previousMode===VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(false);}}",
};
const __initData12 = {
  code: "function VoicePanelControlsTsx19(){const{wrapperSpecs}=this.__closure;return wrapperSpecs.get().drawerMode;}",
};
const __initData13 = {
  code: "function VoicePanelControlsTsx20(drawerMode,previousDrawerMode){const{runOnJS,setIsDrawerActive}=this.__closure;if(drawerMode===previousDrawerMode)return;if(drawerMode){runOnJS(setIsDrawerActive)(true);}else{runOnJS(setIsDrawerActive)(false);}}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControls.tsx");

export default noop.memo(function VoicePanelControls(gestureState) {
  gestureState = gestureState.gestureState;
  let channelId;
  let dockContentSwap;
  let token;
  closure_20 = undefined;
  closure_21 = undefined;
  const isScreenReaderEnabled = gestureState(channelId[23]).useIsScreenReaderEnabled();
  const context = dockContentSwap.useContext(isScreenReaderEnabled(channelId[14]));
  channelId = context.channelId;
  const controlsSpecs = context.controlsSpecs;
  dockContentSwap = context.dockContentSwap;
  const isDockEnabled = context.isDockEnabled;
  const isDockExpanding = context.isDockExpanding;
  const dockJoinMorphOrigin = context.dockJoinMorphOrigin;
  const setControlsMode = context.setControlsMode;
  const dockMinimizeProgress = context.dockMinimizeProgress;
  const useReducedMotion = context.useReducedMotion;
  let tmp6 = closure_21();
  const tmp7 = controlsSpecs(dockContentSwap.useState(null), 2);
  let tab = tmp7[0];
  CALL_TILE_GUTTER = tmp7[1];
  let obj = gestureState(channelId[23]);
  const tmp4 = isScreenReaderEnabled;
  const sharedValue = gestureState(channelId[15]).useSharedValue(tab);
  const layoutEffect = dockContentSwap.useLayoutEffect(() => {
    const result = sharedValue.set(first);
  });
  let obj2 = gestureState(channelId[15]);
  const tmp12 = isScreenReaderEnabled(channelId[37])(channelId);
  const tmp11 = isScreenReaderEnabled(channelId[36])(channelId);
  const maybeFetchSoundboardSounds = gestureState(channelId[38]).useMaybeFetchSoundboardSounds({ shouldFetch: tmp11 });
  let items = [channelId, controlsSpecs, setControlsMode];
  const openTab = dockContentSwap.useCallback((controlsProps) => {
    ({ tab: gestureState, source: isScreenReaderEnabled, disableControlsUpdate } = controlsProps);
    if (disableControlsUpdate === undefined) {
      disableControlsUpdate = false;
    }
    controlsProps = controlsProps.controlsProps;
    gestureState(channelId[39]).batchUpdates(() => {
      tab = false;
      const tmp2 = controlsProps.get().mode !== constants.DRAWER;
      const result = gestureState(channelId[40]).reportJankVoicePanelTabRequest(
        disableControlsUpdate,
        { tab, disableControlsUpdate, controlsProps },
        tmp2,
      );
      gestureRef((arg0) => {
        closure_0 = arg0 !== tab;
        return tab;
      });
      if (!disableControlsUpdate) {
        const obj3 = { mode: constants.DRAWER };
        const merged = Object.assign(controlsProps);
        setControlsMode(obj3);
      }
      let tmp14 = tab;
      if (!tab) {
        tmp14 = tmp2;
      }
      if (tmp14) {
        isScreenReaderEnabled(channelId[19])(disableControlsUpdate, tmp5, closure_1);
      }
      const obj = gestureState(channelId[40]);
      const obj2 = { tab, disableControlsUpdate, controlsProps };
      tmp5 = tab;
    });
  }, items);
  let tmp15 = isScreenReaderEnabled(channelId[41])();
  VoicePanelControlsModes = tmp15;
  let items1 = [channelId, controlsSpecs, openTab, tab];
  const layoutEffect1 = dockContentSwap.useLayoutEffect(() => {
    function handleStoreChange() {
      chatOpen = ChannelRTCStore.getChatOpen(channelId);
      if (chatOpen !== chatOpen) {
        if (chatOpen) {
          const obj = {
            tab: "chat",
            source: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources.STORE,
            controlsProps: { debounce: true },
          };
          callback(obj);
        }
      }
    }
    let chatOpen = isDockExpanding.getChatOpen(channelId);
    if (chatOpen !== chatOpen) {
      if (chatOpen) {
        const obj2 = {
          tab: "chat",
          source: gestureState(channelId[19]).VoicePanelTabAnalyticsSources.STORE,
          controlsProps: { debounce: true },
        };
        callback(obj2);
      }
    }
    isDockExpanding.addChangeListener(handleStoreChange);
    return () => {
      ChannelRTCStore.removeChangeListener(handleStoreChange);
    };
  }, items1);
  let items2 = [openTab];
  const effect = dockContentSwap.useEffect(() => {
    function handleOpenChatTab() {
      callback({ tab: "chat", source: gestureState(channelId[19]).VoicePanelTabAnalyticsSources.HEADER_BUTTON });
    }
    let ComponentDispatch = gestureState(channelId[42]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(sharedValue1.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
    return () => {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(__initData2.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
    };
  }, items2);
  let obj3 = gestureState(channelId[38]);
  const rect = gestureState(channelId[43]).getSafeAreaInsets();
  let obj4 = gestureState(channelId[43]);
  let size = { width: null, height: 0, x: 0, y: 0, drawerMode: false, hidden: false };
  let obj5 = gestureState(channelId[15]);
  let obj7 = gestureState(channelId[21]);
  size.width = obj7.getControlsDefaultWidth(
    gestureState(channelId[44]).getWindowDimensions().width,
    rect.left,
    rect.right,
  );
  const sharedValue1 = obj5.useSharedValue(size);
  let obj8 = gestureState(channelId[44]);
  function we() {
    const sum = sharedValue1.get().height + CALL_TILE_GUTTER;
    return sum + edgeGutter.get();
  }
  we.__closure = { wrapperSpecs: sharedValue1, CALL_TILE_GUTTER, accessoryHeights: tmp15 };
  we.__workletHash = 17164948213111;
  we.__initData = __initData6;
  const derivedValue = gestureState(channelId[15]).useDerivedValue(we);
  let obj6 = { wrapperSpecs: sharedValue1, CALL_TILE_GUTTER, accessoryHeights: tmp15 };
  let obj9 = gestureState(channelId[15]);
  const sharedValue2 = gestureState(channelId[15]).useSharedValue(null);
  let obj11 = gestureState(channelId[15]);
  class Te {
    constructor() {
      return null != dockJoinMorphOrigin.get();
    }
  }
  Te.__closure = { dockJoinMorphOrigin };
  Te.__workletHash = 5329424789919;
  Te.__initData = __initData7;
  class Ee {
    constructor(arg0, arg1) {
      if (gestureState !== arg1) {
        tmp2 = null;
        tmp = closure_18;
        if (gestureState) {
          obj = {};
          tmp3 = closure_16;
          tmp4 = obj;
          merged = Object.assign(closure_16.get());
          tmp2 = obj;
        }
        result = closure_18.set(tmp2);
      }
      return;
    }
  }
  Ee.__closure = { joinFrozenSpecs: sharedValue2, wrapperSpecs: sharedValue1 };
  Ee.__workletHash = 13981879938498;
  Ee.__initData = __initData8;
  const animatedReaction = gestureState(channelId[15]).useAnimatedReaction(Te, Ee);
  let obj12 = gestureState(channelId[15]);
  token = gestureState(channelId[17]).useToken(
    isScreenReaderEnabled(channelId[10]).modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS,
  );
  let obj13 = gestureState(channelId[17]);
  class Ae {
    constructor() {
      point = closure_18.get();
      if (null != point) {
        size = {
          borderBottomRightRadius: null,
          borderBottomLeftRadius: null,
          height: null,
          width: null,
          marginLeft: null,
          opacity: 1,
          transform: null,
        };
        tmp53 = closure_19;
        size.borderBottomRightRadius = closure_19;
        size.borderBottomLeftRadius = closure_19;
        ({ height: obj21.height, width: obj21.width } = point);
        tmp54 = closure_1;
        tmp55 = closure_2;
        num7 = 2;
        num8 = -1;
        size.marginLeft = -1 * closure_1(closure_2[45])(point.width / 2);
        obj1 = { translateX: null };
        obj1.translateX = point.x;
        items = [,];
        items[0] = obj1;
        tmp56 = closure_0;
        tmp57 = closure_2;
        obj23 = closure_0(closure_2[34]);
        tmp58 = useReducedMotion;
        if (useReducedMotion.get()) {
          y2 = point.y;
        } else {
          tmp59 = closure_17;
          y2 = closure_17.get();
        }
        obj27 = { translateY: null };
        tmp60 = UI_SHOW_HIDE_PHYSICS;
        obj27.translateY = obj23.withSpring(y2, UI_SHOW_HIDE_PHYSICS);
        items[1] = obj27;
        size.transform = items;
        return size;
      } else {
        tmp61 = closure_0;
        tmp62 = closure_2;
        obj25 = closure_0(closure_2[34]);
        obj26 = closure_16;
        num = 0;
        if (!closure_16.get().drawerMode) {
          num = closure_19;
        }
        size1 = {
          borderBottomRightRadius: null,
          borderBottomLeftRadius: null,
          height: null,
          width: null,
          marginLeft: null,
        };
        tmp = BORDER_RADIUS_PHYSICS;
        size1.borderBottomRightRadius = obj25.withSpring(num, BORDER_RADIUS_PHYSICS);
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj2 = closure_0(closure_2[34]);
        num2 = 0;
        if (!obj26.get().drawerMode) {
          num2 = closure_19;
        }
        size1.borderBottomLeftRadius = obj2.withSpring(num2, tmp);
        tmp4 = closure_0;
        tmp5 = closure_2;
        obj3 = closure_0(closure_2[34]);
        tmp6 = closure_10;
        size1.height = obj3.withSpring(obj26.get().height, closure_10);
        tmp7 = closure_0;
        tmp8 = closure_2;
        obj4 = closure_0(closure_2[34]);
        tmp9 = MODE_CHANGE_PHYSICS;
        size1.width = obj4.withSpring(obj26.get().width, MODE_CHANGE_PHYSICS);
        tmp10 = closure_0;
        tmp11 = closure_2;
        obj5 = closure_0(closure_2[34]);
        tmp12 = closure_1;
        tmp13 = closure_2;
        tmp14 = closure_1(closure_2[45]);
        num3 = 2;
        num4 = -1;
        size1.marginLeft = obj5.withSpring(-1 * tmp14(obj26.get().width / 2), MODE_CHANGE_PHYSICS);
        tmp15 = isDockEnabled;
        if (isDockEnabled) {
          tmp26 = isDockExpanding;
          tmp28 = closure_0;
          tmp29 = closure_2;
          value = isDockExpanding.get();
          tmp30 = closure_0(closure_2[46]);
          tmp31 = value ? tmp30.SHEET_MORPH_EXPANDING_PANEL_FADE : tmp30.SHEET_MORPH_DOCKING_PANEL_FADE;
          obj28 = {};
          tmp32 = obj28;
          tmp33 = size1;
          merged = Object.assign(size1);
          tmp35 = closure_0;
          tmp36 = closure_2;
          obj13 = closure_0(closure_2[34]);
          num5 = 1;
          num6 = 1;
          if (obj26.get().hidden) {
            num6 = 0;
          }
          tmp37 = globalThis;
          _Math = Math;
          tmp38 = dockContentSwap;
          tmp40 = closure_0;
          tmp41 = closure_2;
          value1 = dockContentSwap.get();
          obj14 = closure_0(closure_2[46]);
          obj15 = dockMinimizeProgress;
          obj28.opacity = obj13.withSpring(
            num6 *
              Math.max(value1, obj14.getSheetMorphFadeProgress(1 - dockMinimizeProgress.get(), tmp31.start, tmp31.end)),
            tmp9,
          );
          obj29 = { translateX: null };
          tmp42 = closure_0;
          tmp43 = closure_2;
          obj17 = closure_0(closure_2[34]);
          tmp44 = UI_SHOW_HIDE_PHYSICS;
          obj29.translateX = obj17.withSpring(obj26.get().x, UI_SHOW_HIDE_PHYSICS);
          items1 = [,];
          items1[0] = obj29;
          tmp45 = closure_0;
          tmp46 = closure_2;
          obj18 = closure_0(closure_2[34]);
          tmp47 = useReducedMotion;
          if (useReducedMotion.get()) {
            obj19 = gestureState;
            if (gestureState.get().active) {
              obj30 = { translateY: null };
              tmp52 = UI_SHOW_HIDE_PHYSICS;
              obj30.translateY = obj18.withSpring(sum, UI_SHOW_HIDE_PHYSICS);
              items1[1] = obj30;
              obj28.transform = items1;
              return obj28;
            }
            tmp51 = closure_17;
            value2 = obj15.get();
            sum = obj26.get().y + value2 * closure_17.get();
          }
          tmp48 = closure_17;
          sum = closure_17.get();
        } else {
          obj31 = {};
          tmp16 = obj31;
          tmp17 = size1;
          merged1 = Object.assign(size1);
          obj32 = { translateX: null };
          tmp19 = closure_0;
          tmp20 = closure_2;
          obj8 = closure_0(closure_2[34]);
          tmp21 = UI_SHOW_HIDE_PHYSICS;
          obj32.translateX = obj8.withSpring(obj26.get().x, UI_SHOW_HIDE_PHYSICS);
          items2 = [,];
          items2[0] = obj32;
          tmp22 = closure_0;
          tmp23 = closure_2;
          obj9 = closure_0(closure_2[34]);
          if (obj26.get().hidden) {
            tmp24 = closure_17;
            y = closure_17.get();
          } else {
            obj10 = gestureState;
            if (gestureState.get().active) {
            }
            y = obj26.get().y;
          }
          obj33 = { translateY: null };
          tmp25 = UI_SHOW_HIDE_PHYSICS;
          obj33.translateY = obj9.withSpring(y, UI_SHOW_HIDE_PHYSICS);
          items2[1] = obj33;
          obj31.transform = items2;
          return obj31;
        }
      }
      return;
    }
  }
  let obj14 = gestureState(channelId[15]);
  Ae.__closure = {
    joinFrozenSpecs: sharedValue2,
    borderRadius: token,
    roundToNearestPixel: isScreenReaderEnabled(channelId[45]),
    withSpring: gestureState(channelId[34]).withSpring,
    useReducedMotion,
    offscreenY: derivedValue,
    UI_SHOW_HIDE_PHYSICS: dockJoinMorphOrigin,
    wrapperSpecs: sharedValue1,
    BORDER_RADIUS_PHYSICS: dockMinimizeProgress,
    PANEL_CONTROLS_HEIGHT_PHYSICS: useReducedMotion,
    MODE_CHANGE_PHYSICS: setControlsMode,
    isDockEnabled,
    gestureState,
    isDockExpanding,
    SHEET_MORPH_EXPANDING_PANEL_FADE: gestureState(channelId[46]).SHEET_MORPH_EXPANDING_PANEL_FADE,
    SHEET_MORPH_DOCKING_PANEL_FADE: gestureState(channelId[46]).SHEET_MORPH_DOCKING_PANEL_FADE,
    dockContentSwap,
    getSheetMorphFadeProgress: gestureState(channelId[46]).getSheetMorphFadeProgress,
    dockMinimizeProgress,
  };
  Ae.__workletHash = 6221421775918;
  Ae.__initData = __initData9;
  const animatedStyle = obj14.useAnimatedStyle(Ae);
  const obj10 = {
    joinFrozenSpecs: sharedValue2,
    borderRadius: token,
    roundToNearestPixel: isScreenReaderEnabled(channelId[45]),
    withSpring: gestureState(channelId[34]).withSpring,
    useReducedMotion,
    offscreenY: derivedValue,
    UI_SHOW_HIDE_PHYSICS: dockJoinMorphOrigin,
    wrapperSpecs: sharedValue1,
    BORDER_RADIUS_PHYSICS: dockMinimizeProgress,
    PANEL_CONTROLS_HEIGHT_PHYSICS: useReducedMotion,
    MODE_CHANGE_PHYSICS: setControlsMode,
    isDockEnabled,
    gestureState,
    isDockExpanding,
    SHEET_MORPH_EXPANDING_PANEL_FADE: gestureState(channelId[46]).SHEET_MORPH_EXPANDING_PANEL_FADE,
    SHEET_MORPH_DOCKING_PANEL_FADE: gestureState(channelId[46]).SHEET_MORPH_DOCKING_PANEL_FADE,
    dockContentSwap,
    getSheetMorphFadeProgress: gestureState(channelId[46]).getSheetMorphFadeProgress,
    dockMinimizeProgress,
  };
  closure_129_0 = tab;
  closure_129_1 = sharedValue;
  closure_129_2 = sharedValue1;
  closure_129_3 = openTab;
  ({ hiddenProps, hiddenStyles } = isScreenReaderEnabled(channelId[47])(context.mode, sharedValue1));
  const context1 = dockContentSwap.useContext(isScreenReaderEnabled(channelId[14]));
  const controlsSpecs2 = context1.controlsSpecs;
  closure_129_4 = controlsSpecs2;
  const windowDimensions = context1.windowDimensions;
  closure_129_5 = windowDimensions;
  const wrapperDimensions = context1.wrapperDimensions;
  closure_129_6 = wrapperDimensions;
  const safeArea = context1.safeArea;
  closure_129_7 = safeArea;
  const tmp24 = isScreenReaderEnabled(channelId[47])(context.mode, sharedValue1);
  let point = {
    absoluteX: 0,
    absoluteY: 0,
    x: 0,
    y: 0,
    height: 0,
    isDrawer: false,
    active: false,
    drawerTransitionHeight: v200,
    interFloatingTransitionHeight,
  };
  const sharedValue3 = gestureState(channelId[15]).useSharedValue(point);
  closure_129_8 = sharedValue3;
  let obj16 = gestureState(channelId[15]);
  const sharedValue4 = gestureState(channelId[15]).useSharedValue(0);
  closure_129_9 = sharedValue4;
  let obj18 = gestureState(channelId[15]);
  const sharedValue5 = gestureState(channelId[15]).useSharedValue(false);
  closure_129_10 = sharedValue5;
  const obj19 = gestureState(channelId[15]);
  const sharedValue6 = gestureState(channelId[15]).useSharedValue(0);
  closure_129_11 = sharedValue6;
  const ref = dockContentSwap.useRef(undefined);
  closure_129_12 = ref;
  let obj20 = gestureState(channelId[15]);
  const sharedValue7 = gestureState(channelId[15]).useSharedValue(false);
  closure_129_13 = sharedValue7;
  const items3 = [ref, sharedValue5, sharedValue7, sharedValue6];
  const memo = dockContentSwap.useMemo(
    () => ({ gestureRef, scrollLocked: sharedValue, scrollOffsetValue, isDragScrolling: useReducedMotion }),
    items3,
  );
  const tmp33 = isScreenReaderEnabled(channelId[16])();
  closure_129_14 = tmp33;
  const obj21 = gestureState(channelId[15]);
  const token1 = gestureState(channelId[17]).useToken(
    isScreenReaderEnabled(channelId[10]).modules.mobile.VOICE_PANEL_GUTTER,
  );
  closure_129_15 = token1;
  const items4 = [
    controlsSpecs2,
    tmp33,
    sharedValue3,
    sharedValue5,
    openTab,
    safeArea,
    sharedValue7,
    sharedValue6,
    sharedValue,
    tab,
    sharedValue4,
    windowDimensions,
    wrapperDimensions,
    sharedValue1,
    token1,
  ];
  const memo1 = dockContentSwap.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const manualActivationResult = Gesture.Pan().manualActivation(true);
    let result = Gesture.Pan().manualActivation(true).maxPointers(1).shouldCancelWhenOutside(false);
    const maxPointersResult = Gesture.Pan().manualActivation(true).maxPointers(1);
    class O {
      constructor(arg0) {
        result = closure_1_9.set(0);
        point = {
          absoluteX: arg0.changedTouches[0].absoluteX,
          absoluteY: arg0.changedTouches[0].absoluteY,
          x: closure_1_2.get().x,
          y: closure_1_2.get().y,
          height: closure_1_2.get().height,
          isDrawer: closure_1_4.get().mode === closure_15.DRAWER,
          active: false,
          drawerTransitionHeight: closure_2_22,
          interFloatingTransitionHeight: closure_2_23,
        };
        result1 = closure_1_8.set(point);
        return;
      }
    }
    O.__closure = {
      touchMoveCount: dockMinimizeProgress,
      gestureSpecs: setControlsMode,
      wrapperSpecs: channelId,
      controlsSpecs: dockContentSwap,
      VoicePanelControlsModes,
      TRANSITIONAL_HEIGHT,
      INTER_FLOATING_TRANSITIONAL_HEIGHT,
    };
    O.__workletHash = 3524850376026;
    O.__initData = __initData7;
    let obj = {
      touchMoveCount: dockMinimizeProgress,
      gestureSpecs: setControlsMode,
      wrapperSpecs: channelId,
      controlsSpecs: dockContentSwap,
      VoicePanelControlsModes,
      TRANSITIONAL_HEIGHT,
      INTER_FLOATING_TRANSITIONAL_HEIGHT,
    };
    const withRefResult = result.withRef(closure_12);
    const fn = function b() {
      gestureState(channelId[15]).runOnJS(callback.lock)();
    };
    const onTouchesDownResult = result.withRef(closure_12).onTouchesDown(O);
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, gestureLock };
    fn.__workletHash = 11720944776433;
    fn.__initData = __initData6;
    let obj2 = { runOnJS: ReanimatedRexport.runOnJS, gestureLock };
    class I {
      constructor(arg0, arg1) {
        tmp = gestureState;
        tmp2 = channelId;
        if (arg0.state === gestureState(channelId[18]).State.BEGAN) {
          obj5 = closure_1_8;
          if (!closure_1_8.get().active) {
            tmp3 = arg1;
            obj = closure_1_4;
            tmp4 = closure_15;
            if (closure_1_4.get().mode !== closure_15.HIDDEN) {
              tmp6 = closure_1_9;
              num = 1;
              result = closure_1_9.set(closure_1_9.get() + 1);
              tmp8 = closure_2_24;
              value = closure_1_9.get() <= closure_2_24;
              if (!value) {
                tmp10 = closure_1_10;
                value = closure_1_10.get();
              }
              tmp11 = closure_1_1;
              value1 = closure_1_1.get();
              str = "settings";
              if ("settings" === value1) {
                tmp13 = closure_1_11;
                num2 = closure_1_11.get();
              } else {
                str2 = "app_launcher";
                num2 = 0;
              }
              ({ absoluteY, absoluteX } = arg0.changedTouches[0]);
              diff = obj5.get().absoluteY - absoluteY;
              tmp15 = obj.get().mode === tmp4.DRAWER && value;
              if (tmp15) {
                num3 = 0;
                tmp16 = diff >= 0 || num2 > 0;
                tmp15 = tmp16;
              }
              if (!tmp15) {
                if (obj.get().mode !== tmp4.FLOATING_DEFAULT) {
                  if (obj.get().mode === tmp4.DRAWER) {
                    num5 = -30;
                    if (diff >= -30) {
                      num6 = 30;
                    }
                  }
                  tmp17 = globalThis;
                  _Math = Math;
                  _Math2 = Math;
                  num7 = 30;
                  absolute = Math.abs(diff);
                  if (absolute > Math.abs(30)) {
                    failResult = arg1.fail();
                  }
                } else {
                  num4 = 30;
                }
                point = {
                  absoluteX: null,
                  absoluteY: null,
                  x: null,
                  y: null,
                  height: null,
                  isDrawer: null,
                  active: true,
                  drawerTransitionHeight: null,
                  interFloatingTransitionHeight: null,
                };
                point.absoluteX = absoluteX;
                point.absoluteY = absoluteY;
                tmp19 = closure_1_2;
                point.x = closure_1_2.get().x;
                point.y = closure_1_2.get().y;
                point.height = closure_1_2.get().height;
                point.isDrawer = obj.get().mode === tmp4.DRAWER;
                tmp20 = closure_2_22;
                point.drawerTransitionHeight = closure_2_22;
                tmp21 = closure_2_23;
                point.interFloatingTransitionHeight = closure_2_23;
                result1 = obj5.set(point);
                tmp23 = obj.get().mode !== tmp4.DRAWER;
                if (tmp23) {
                  tmp24 = closure_1_0;
                  tmp23 = "settings" !== closure_1_0;
                }
                if (tmp23) {
                  tmpResult = tmp(tmp2[15]);
                  tmp25 = closure_1_3;
                  obj1 = { tab: "settings", source: null, disableControlsUpdate: true };
                  runOnJSResult = tmpResult.runOnJS(closure_1_3);
                  obj1.source = tmp(tmp2[19]).VoicePanelTabAnalyticsSources.GESTURE;
                  tmp26Result = runOnJSResult(obj1);
                }
                tmp28 = closure_1_13;
                flag = true;
                result2 = closure_1_13.set(true);
                activateResult = arg1.activate();
              }
            } else {
              failResult1 = arg1.fail();
            }
          }
        }
        return;
      }
    }
    const onStartResult = onTouchesDownResult.onStart(fn);
    I.__closure = {
      State: LegacyBaseButton.State,
      gestureSpecs: setControlsMode,
      controlsSpecs: dockContentSwap,
      VoicePanelControlsModes,
      touchMoveCount: dockMinimizeProgress,
      SCROLL_BEGIN_GRACE_TICKS: num,
      isDragScrolling: useReducedMotion,
      sharedTab: isScreenReaderEnabled,
      scrollOffsetValue,
      GESTURE_VERTICAL_MINIMUM: 30,
      wrapperSpecs: channelId,
      TRANSITIONAL_HEIGHT,
      INTER_FLOATING_TRANSITIONAL_HEIGHT,
      tab: gestureState,
      runOnJS: ReanimatedRexport.runOnJS,
      openTab: controlsSpecs,
      VoicePanelTabAnalyticsSources: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources,
      scrollLock: sharedValue,
    };
    I.__workletHash = 13965683053434;
    I.__initData = __initData5;
    const obj3 = {
      State: LegacyBaseButton.State,
      gestureSpecs: setControlsMode,
      controlsSpecs: dockContentSwap,
      VoicePanelControlsModes,
      touchMoveCount: dockMinimizeProgress,
      SCROLL_BEGIN_GRACE_TICKS: num,
      isDragScrolling: useReducedMotion,
      sharedTab: isScreenReaderEnabled,
      scrollOffsetValue,
      GESTURE_VERTICAL_MINIMUM: 30,
      wrapperSpecs: channelId,
      TRANSITIONAL_HEIGHT,
      INTER_FLOATING_TRANSITIONAL_HEIGHT,
      tab: gestureState,
      runOnJS: ReanimatedRexport.runOnJS,
      openTab: controlsSpecs,
      VoicePanelTabAnalyticsSources: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources,
      scrollLock: sharedValue,
    };
    const fn2 = function p(absoluteY) {
      const diff = absoluteY.absoluteY - setControlsMode.get().absoluteY;
      const diff1 = setControlsMode.get().height - setControlsMode.get().y - diff;
      if (diff1 > setControlsMode.get().drawerTransitionHeight) {
        if (!setControlsMode.get().isDrawer) {
          const obj2 = {};
          const merged = Object.assign(setControlsMode.get());
          obj2.isDrawer = true;
          const result = setControlsMode.set(obj2);
        }
        const obj5 = {};
        const merged1 = Object.assign(closure_1_2.get());
        obj5.x = 0;
        obj5.y = 0;
        const tmp26 = isScreenReaderEnabled(channelId[20]);
        obj5.width = gestureState(channelId[21]).getControlsDrawerOpenWidth(
          isDockEnabled.get().width,
          dockJoinMorphOrigin.get().left,
          dockJoinMorphOrigin.get().right,
        );
        const _Math = Math;
        obj5.height = Math.min(
          diff1,
          isDockExpanding.get().drawerHeight - tmp26(dockJoinMorphOrigin.get(), constants).height,
        );
        obj5.drawerMode = true;
        const result1 = closure_1_2.set(obj5);
        const obj9 = gestureState(channelId[21]);
      } else {
        const result2 = diff1 / setControlsMode.get().drawerTransitionHeight;
        const height = dockContentSwap.get().height;
        const _Math2 = Math;
        const result3 = -1 * Math.max(diff1 - dockJoinMorphOrigin.get().bottom - height, 0);
        if (setControlsMode.get().isDrawer) {
          const obj7 = {};
          const merged2 = Object.assign(setControlsMode.get());
          obj7.isDrawer = false;
          const result4 = setControlsMode.set(obj7);
        }
        if (!tmp6) {
          const obj4 = gestureState(channelId[15]);
          gestureState(channelId[15]).runOnJS(gestureState(channelId[22]).triggerHapticFeedback)(
            gestureState(channelId[22]).HapticFeedbackTypes.IMPACT_MEDIUM,
          );
          const runOnJSResult = gestureState(channelId[15]).runOnJS(gestureState(channelId[22]).triggerHapticFeedback);
        }
        const obj8 = {};
        const merged3 = Object.assign(closure_1_2.get());
        obj8.x = 0;
        obj8.y = -1 * dockJoinMorphOrigin.get().bottom + result3 * (1 - result2 / 1.5);
        tmp6 = height === closure_1_2.get().height || closure_1_2.get().drawerMode;
        obj8.width = gestureState(channelId[21]).getControlsDefaultWidth(
          isDockEnabled.get().width,
          dockJoinMorphOrigin.get().left,
          dockJoinMorphOrigin.get().right,
        );
        obj8.height = height;
        obj8.drawerMode = false;
        const result5 = closure_1_2.set(obj8);
        const obj6 = gestureState(channelId[21]);
      }
    };
    const onTouchesMoveResult = onStartResult.onTouchesMove(I);
    fn2.__closure = {
      gestureSpecs: setControlsMode,
      calculateVoicePanelHeaderSpecs: calculateVoicePanelHeaderSpecsDefault,
      safeArea: dockJoinMorphOrigin,
      edgeGutter,
      wrapperSpecs: channelId,
      getControlsDrawerOpenWidth: VoicePanelControlsUtils.getControlsDrawerOpenWidth,
      windowDimensions: isDockEnabled,
      wrapperDimensions: isDockExpanding,
      controlsSpecs: dockContentSwap,
      runOnJS: ReanimatedRexport.runOnJS,
      triggerHapticFeedback: HapticUtils.triggerHapticFeedback,
      HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes,
      getControlsDefaultWidth: VoicePanelControlsUtils.getControlsDefaultWidth,
    };
    fn2.__workletHash = 10007030283382;
    fn2.__initData = __initData4;
    let obj4 = {
      gestureSpecs: setControlsMode,
      calculateVoicePanelHeaderSpecs: calculateVoicePanelHeaderSpecsDefault,
      safeArea: dockJoinMorphOrigin,
      edgeGutter,
      wrapperSpecs: channelId,
      getControlsDrawerOpenWidth: VoicePanelControlsUtils.getControlsDrawerOpenWidth,
      windowDimensions: isDockEnabled,
      wrapperDimensions: isDockExpanding,
      controlsSpecs: dockContentSwap,
      runOnJS: ReanimatedRexport.runOnJS,
      triggerHapticFeedback: HapticUtils.triggerHapticFeedback,
      HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes,
      getControlsDefaultWidth: VoicePanelControlsUtils.getControlsDefaultWidth,
    };
    const fn3 = function u() {
      const result = sharedValue.set(false);
      const result1 = useReducedMotion.set(false);
      const obj = {};
      const merged = Object.assign(setControlsMode.get());
      obj.active = false;
      const result2 = setControlsMode.set(obj);
      gestureState(channelId[15]).runOnJS(callback.unlock)();
    };
    const onChangeResult = onTouchesMoveResult.onChange(fn2);
    fn3.__closure = {
      scrollLock: sharedValue,
      isDragScrolling: useReducedMotion,
      gestureSpecs: setControlsMode,
      runOnJS: ReanimatedRexport.runOnJS,
      gestureLock,
    };
    fn3.__workletHash = 9808165597638;
    fn3.__initData = __initData3;
    let obj5 = {
      scrollLock: sharedValue,
      isDragScrolling: useReducedMotion,
      gestureSpecs: setControlsMode,
      runOnJS: ReanimatedRexport.runOnJS,
      gestureLock,
    };
    const fn4 = function l(velocityY) {
      velocityY = velocityY.velocityY;
      const absolute = Math.abs(velocityY);
      if (absolute > 200) {
        if (velocityY < 0) {
          const obj = {};
          const merged = Object.assign(closure_1_2.get());
          obj.height =
            isDockExpanding.get().drawerHeight -
            isScreenReaderEnabled(channelId[20])(dockJoinMorphOrigin.get(), closure_1_15).height;
          const result = closure_1_2.set(obj);
          if (dockContentSwap.get().mode === constants.DRAWER) {
            let DRAWER2 = constants.RESET;
          } else {
            DRAWER2 = constants.DRAWER;
          }
          const tmp16 = isScreenReaderEnabled(channelId[20]);
        }
      }
      if (absolute < 200) {
        if (setControlsMode.get().isDrawer) {
          if (dockContentSwap.get().mode === constants.DRAWER) {
            let DRAWER = constants.RESET;
          } else {
            DRAWER = constants.DRAWER;
          }
        }
      }
      if (dockContentSwap.get().mode === constants.FLOATING_DEFAULT) {
        let FLOATING_DEFAULT = constants.RESET;
      } else {
        FLOATING_DEFAULT = constants.FLOATING_DEFAULT;
      }
      const result1 = sharedValue.set(false);
      const result2 = useReducedMotion.set(false);
      gestureState(channelId[15]).runOnJS(callback.unlock)(FLOATING_DEFAULT);
      const obj2 = gestureState(channelId[15]);
    };
    const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(fn3);
    fn4.__closure = {
      wrapperSpecs: channelId,
      wrapperDimensions: isDockExpanding,
      calculateVoicePanelHeaderSpecs: calculateVoicePanelHeaderSpecsDefault,
      safeArea: dockJoinMorphOrigin,
      edgeGutter,
      controlsSpecs: dockContentSwap,
      VoicePanelControlsModes,
      gestureSpecs: setControlsMode,
      scrollLock: sharedValue,
      isDragScrolling: useReducedMotion,
      runOnJS: ReanimatedRexport.runOnJS,
      gestureLock,
    };
    fn4.__workletHash = 12106761920053;
    fn4.__initData = __initData2;
    let obj6 = {
      wrapperSpecs: channelId,
      wrapperDimensions: isDockExpanding,
      calculateVoicePanelHeaderSpecs: calculateVoicePanelHeaderSpecsDefault,
      safeArea: dockJoinMorphOrigin,
      edgeGutter,
      controlsSpecs: dockContentSwap,
      VoicePanelControlsModes,
      gestureSpecs: setControlsMode,
      scrollLock: sharedValue,
      isDragScrolling: useReducedMotion,
      runOnJS: ReanimatedRexport.runOnJS,
      gestureLock,
    };
    const fn5 = function o() {
      const result = sharedValue.set(false);
      const result1 = useReducedMotion.set(false);
      gestureState(channelId[15]).runOnJS(callback.unlock)();
    };
    const onEndResult = onTouchesCancelledResult.onEnd(fn4);
    fn5.__closure = {
      scrollLock: sharedValue,
      isDragScrolling: useReducedMotion,
      runOnJS: ReanimatedRexport.runOnJS,
      gestureLock,
    };
    fn5.__workletHash = 15918380969837;
    fn5.__initData = __initData;
    return onEndResult.onFinalize(fn5);
  }, items4);
  let obj22 = gestureState(channelId[17]);
  let fn = function u() {
    return channelId.get().drawerMode;
  };
  fn.__closure = { wrapperSpecs: sharedValue1 };
  fn.__workletHash = 2949834828607;
  fn.__initData = __initData;
  let fn2 = function l(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = gestureState(channelId[15]);
      gestureState(channelId[15]).runOnJS(gestureState(channelId[22]).triggerHapticFeedback)(
        gestureState(channelId[22]).HapticFeedbackTypes.IMPACT_MEDIUM,
      );
      const runOnJSResult = gestureState(channelId[15]).runOnJS(gestureState(channelId[22]).triggerHapticFeedback);
    }
  };
  const obj23 = gestureState(channelId[15]);
  fn2.__closure = {
    runOnJS: gestureState(channelId[15]).runOnJS,
    triggerHapticFeedback: gestureState(channelId[22]).triggerHapticFeedback,
    HapticFeedbackTypes: gestureState(channelId[22]).HapticFeedbackTypes,
  };
  fn2.__workletHash = 10186886451735;
  fn2.__initData = __initData2;
  const animatedReaction1 = obj23.useAnimatedReaction(fn, fn2);
  closure_130_0 = sharedValue1;
  const obj15 = {
    runOnJS: gestureState(channelId[15]).runOnJS,
    triggerHapticFeedback: gestureState(channelId[22]).triggerHapticFeedback,
    HapticFeedbackTypes: gestureState(channelId[22]).HapticFeedbackTypes,
  };
  const isScreenReaderEnabled1 = gestureState(channelId[23]).useIsScreenReaderEnabled();
  closure_130_1 = isScreenReaderEnabled1;
  const tmp38 = isScreenReaderEnabled(channelId[24])({ ignoreKeyboard: true });
  closure_130_2 = tmp38;
  const context2 = dockContentSwap.useContext(isScreenReaderEnabled(channelId[14]));
  const controlsSpecs3 = context2.controlsSpecs;
  closure_130_3 = controlsSpecs3;
  const windowDimensions2 = context2.windowDimensions;
  closure_130_4 = windowDimensions2;
  const mode = context2.mode;
  closure_130_5 = mode;
  const setControlsMode2 = context2.setControlsMode;
  closure_130_6 = setControlsMode2;
  const safeArea2 = context2.safeArea;
  closure_130_7 = safeArea2;
  const connected = context2.connected;
  closure_130_8 = connected;
  let obj25 = gestureState(channelId[23]);
  let fn3 = function n() {
    return {
      connected: setControlsMode.get(),
      currentControlsMode: controlsSpecs.get().mode,
      mode: isDockEnabled.get(),
      windowWidth: dockContentSwap.get().width,
      windowHeight: dockContentSwap.get().height,
      windowHeightIgnoringKeyboard: channelId.get().height,
      controlsHeightValue: controlsSpecs.get().height,
      safeArea: dockJoinMorphOrigin.get(),
    };
  };
  fn3.__closure = {
    connected,
    controlsSpecs: controlsSpecs3,
    mode,
    windowDimensions: windowDimensions2,
    windowDimensionsIgnoringKeyboard: tmp38,
    safeArea: safeArea2,
  };
  fn3.__workletHash = 11588370229444;
  fn3.__initData = __initData3;
  let fn4 = function s(safeAreaState, currentControlsMode) {
    if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp3)) {
      ({ currentControlsMode, mode, windowWidth, controlsHeightValue, safeArea } = safeAreaState);
      if (constants.DISMISSED !== mode) {
        if (constants.PIP !== mode) {
          const PANEL = constants.PANEL;
          if (VoicePanelControlsModes.RESET === currentControlsMode) {
            let currentControlsMode1;
            const tmpResult = ReanimatedRexport;
            if (currentControlsMode != null) {
              currentControlsMode1 = currentControlsMode.currentControlsMode;
            }
            if (currentControlsMode1 == null) {
              currentControlsMode1 = VoicePanelControlsModes.FLOATING_DEFAULT;
            }
            const obj2 = { mode: currentControlsMode1 };
            ReanimatedRexport.runOnJS(isDockExpanding)(obj2);
            const runOnJSResult = ReanimatedRexport.runOnJS(isDockExpanding);
          } else if (VoicePanelControlsModes.HIDDEN === currentControlsMode) {
            if (isScreenReaderEnabled) {
              const obj3 = {};
              const merged = Object.assign(gestureState.get());
              obj3.hidden = false;
              const result = gestureState.set(obj3);
            } else if (!gestureState.get().hidden) {
              const obj4 = {};
              const merged1 = Object.assign(gestureState.get());
              obj4.hidden = true;
              const result1 = gestureState.set(obj4);
            }
          } else if (VoicePanelControlsModes.FLOATING_DEFAULT === currentControlsMode) {
            const size = { x: 0, y: null, width: null, height: null, drawerMode: false, hidden: false };
            const _Math = Math;
            size.y = -1 * Math.max(safeArea.bottom, map1);
            size.width = VoicePanelControlsUtils.getControlsDefaultWidth(windowWidth, safeArea.left, safeArea.right);
            size.height = controlsHeightValue;
            const result2 = gestureState.set(size);
            const tmpResult5 = VoicePanelControlsUtils;
          } else if (VoicePanelControlsModes.DRAWER === currentControlsMode) {
            const drawerSpec = VoicePanelControlUtils.getDrawerSpec(tmp4, safeArea.top);
            ({ minHeight, maxHeight } = drawerSpec);
            if (gestureState.get().height <= controlsHeightValue) {
              minHeight = maxHeight;
            } else if (null != currentControlsMode) {
              VoicePanelControlUtils;
            }
            const size1 = { x: 0, y: 0, width: null, height: null, drawerMode: true, hidden: false };
            const tmpResult6 = VoicePanelControlUtils;
            size1.width = VoicePanelControlsUtils.getControlsDrawerOpenWidth(
              windowWidth,
              safeArea.left,
              safeArea.right,
            );
            size1.height = minHeight;
            const result3 = gestureState.set(size1);
            const tmpResult8 = VoicePanelControlsUtils;
          }
        }
      }
      if (!gestureState.get().hidden) {
        const obj5 = {};
        const merged2 = Object.assign(gestureState.get());
        obj5.hidden = true;
        const result4 = gestureState.set(obj5);
      }
    }
    obj = cheapWorkletShallowEqual;
    tmp3 = currentControlsMode;
  };
  const obj26 = gestureState(channelId[15]);
  fn4.__closure = {
    cheapWorkletShallowEqual: gestureState(channelId[25]).cheapWorkletShallowEqual,
    VoicePanelModes: tab,
    wrapperSpecs: sharedValue1,
    VoicePanelControlsModes,
    runOnJS: gestureState(channelId[15]).runOnJS,
    setControlsMode: setControlsMode2,
    isScreenReaderEnabled: isScreenReaderEnabled1,
    EDGE_GUTTER: sharedValue,
    getControlsDefaultWidth: gestureState(channelId[21]).getControlsDefaultWidth,
    getDrawerSpec: gestureState(channelId[26]).getDrawerSpec,
    getControlsDrawerOpenWidth: gestureState(channelId[21]).getControlsDrawerOpenWidth,
  };
  fn4.__workletHash = 1154430392188;
  fn4.__initData = __initData4;
  const animatedReaction2 = obj26.useAnimatedReaction(fn3, fn4);
  const tmp41 = controlsSpecs(dockContentSwap.useState(false), 2);
  closure_20 = tmp42;
  let obj17 = {
    cheapWorkletShallowEqual: gestureState(channelId[25]).cheapWorkletShallowEqual,
    VoicePanelModes: tab,
    wrapperSpecs: sharedValue1,
    VoicePanelControlsModes,
    runOnJS: gestureState(channelId[15]).runOnJS,
    setControlsMode: setControlsMode2,
    isScreenReaderEnabled: isScreenReaderEnabled1,
    EDGE_GUTTER: sharedValue,
    getControlsDefaultWidth: gestureState(channelId[21]).getControlsDefaultWidth,
    getDrawerSpec: gestureState(channelId[26]).getDrawerSpec,
    getControlsDrawerOpenWidth: gestureState(channelId[21]).getControlsDrawerOpenWidth,
  };
  function ke() {
    return controlsSpecs.get().mode;
  }
  ke.__closure = { controlsSpecs };
  ke.__workletHash = 2335050944822;
  ke.__initData = __initData10;
  function ve(arg0, arg1) {
    if (tmp) {
      if (arg0 === VoicePanelControlsModes.DRAWER) {
        if (arg1 !== VoicePanelControlsModes.DRAWER) {
          ReanimatedRexport.runOnJS(closure_20)(true);
        }
      }
      if (tmp3) {
        ReanimatedRexport.runOnJS(closure_20)(false);
      }
      tmp3 = arg0 !== VoicePanelControlsModes.DRAWER && arg1 === VoicePanelControlsModes.DRAWER;
    }
    tmp = arg0 !== arg1 && isScreenReaderEnabled;
  }
  const obj28 = gestureState(channelId[15]);
  ve.__closure = {
    isScreenReaderEnabled,
    VoicePanelControlsModes,
    runOnJS: gestureState(channelId[15]).runOnJS,
    setIsDrawer: tmp41[1],
  };
  ve.__workletHash = 12311223811825;
  ve.__initData = __initData11;
  const animatedReaction3 = obj28.useAnimatedReaction(ke, ve);
  const tmp44 = controlsSpecs(dockContentSwap.useState(false), 2);
  closure_21 = tmp45;
  const obj24 = {
    isScreenReaderEnabled,
    VoicePanelControlsModes,
    runOnJS: gestureState(channelId[15]).runOnJS,
    setIsDrawer: tmp41[1],
  };
  class We {
    constructor() {
      return closure_16.get().drawerMode;
    }
  }
  We.__closure = { wrapperSpecs: sharedValue1 };
  We.__workletHash = 2099961350703;
  We.__initData = __initData12;
  class Fe {
    constructor(arg0, arg1) {
      if (gestureState !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[15]);
        tmp3 = closure_21;
        runOnJSResult = obj.runOnJS(closure_21);
        if (gestureState) {
          flag2 = true;
          tmp4Result = runOnJSResult(true);
        } else {
          flag = false;
          tmp4Result1 = runOnJSResult(false);
        }
      }
      return;
    }
  }
  const obj30 = gestureState(channelId[15]);
  Fe.__closure = { runOnJS: gestureState(channelId[15]).runOnJS, setIsDrawerActive: tmp44[1] };
  Fe.__workletHash = 897318946825;
  Fe.__initData = __initData13;
  const animatedReaction4 = obj30.useAnimatedReaction(We, Fe);
  const items5 = [setControlsMode];
  const id = dockContentSwap.useId();
  const callback1 = dockContentSwap.useCallback(() => {
    setControlsMode({ mode: VoicePanelControlsModes.FLOATING_DEFAULT });
  }, items5);
  const obj29 = { value: memo, children: null };
  const items6 = [
    sharedValue2(isScreenReaderEnabled(channelId[49]), { wrapperSpecs: sharedValue1 }),
    sharedValue2(closure_37, {
      channelId,
      wrapperSpecs: sharedValue1,
      controlsSpecs,
      accessoryHeights: tmp15,
      gestureState,
    }),
  ];
  const obj31 = {
    nativeID: id,
    style: tmp6.accessibilityWrapper,
    accessibilityViewIsModal: tmp41[0],
    onAccessibilityEscape: callback1,
    pointerEvents: "box-none",
    children: null,
  };
  const obj27 = { runOnJS: gestureState(channelId[15]).runOnJS, setIsDrawerActive: tmp44[1] };
  const obj32 = { gesture: memo1, children: null };
  const items7 = [tmp6.wrapper, animatedStyle];
  let tmp53;
  const tmp51 = isScreenReaderEnabled(channelId[50]);
  if (!isDockEnabled) {
    tmp53 = hiddenStyles;
  }
  const obj33 = { style: items7, animatedProps: hiddenProps, children: null };
  items7[2] = tmp53;
  let ONYX;
  if (tmp12) {
    if (!tmp44[0]) {
      ONYX = derivedValue.ONYX;
    }
  }
  const obj34 = { theme: ONYX, children: null };
  const items8 = [
    sharedValue2(gestureState(channelId[51]).VoicePanelVisualEffectView, { matchAppTheme: !tmp12 }),
    sharedValue2(closure_39, { openTab, wrapperSpecs: sharedValue1, sharedTab: sharedValue }),
  ];
  obj34.children = items8;
  const items9 = [
    closure_20(gestureState(channelId[29]).ThemeContextProvider, obj34),
    sharedValue2(tmp4(channelId[52]), {
      wrapperSpecs: sharedValue1,
      tab,
      sharedTab: sharedValue,
      gestureSpecs: sharedValue3,
      openTab,
    }),
  ];
  const obj35 = { matchAppTheme: !tmp12 };
  const tmp52 = isScreenReaderEnabled(channelId[35]);
  let tmp50Result = null;
  if (!tmpResult.isMetaQuest()) {
    const obj36 = { openTab };
    tmp50Result = tmp50(closure_25, obj36);
  }
  items9[2] = tmp50Result;
  obj33.children = items9;
  obj32.children = closure_20(tmp52, obj33);
  obj31.children = sharedValue2(gestureState(channelId[18]).GestureDetector, obj32);
  items6[2] = sharedValue2(tmp51, obj31);
  obj29.children = items6;
  return closure_20(gestureState(channelId[48]).ControlsGestureScrollLock.Provider, obj29);
});
