// === Module 19917: VoicePanelControls ===

// Module 19917 (VoicePanelControls)
import nativeDefault from "native" /* 575 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import native from "native" /* 5314 */;
import HapticUtils from "HapticUtils" /* 5491 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5535 */;
import spring_spring from "spring/spring" /* 5876 */;
import useRefValueDefault from "useRefValue" /* 7352 */;
import native2 from "native" /* 7932 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10509 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11924 */;
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs" /* 11931 */;
import useWindowDimensionsSharedValueDefault from "useWindowDimensionsSharedValue" /* 13708 */;
import VoicePanelControlsUtils from "VoicePanelControlsUtils" /* 14568 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 19740 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 19755 */;
import useControlsLockDefault from "useControlsLock" /* 19795 */;
import trackVoicePanelTabOpened from "trackVoicePanelTabOpened" /* 19804 */;
import VoicePanelAccessibilityViewDefault from "VoicePanelAccessibilityView" /* 19897 */;
import useDrawerToggleDefault from "useDrawerToggle" /* 19918 */;
import useConsoleConnectingInfoDefault from "useConsoleConnectingInfo" /* 19920 */;
import VoicePanelFloatingCTAContainer from "VoicePanelFloatingCTAContainer" /* 19924 */;
import useControlsHiddenPresentationDefault from "useControlsHiddenPresentation" /* 19925 */;
import VoicePanelConsoleStatus from "VoicePanelConsoleStatus" /* 19926 */;
import useControlsButtonsDefault from "useControlsButtons" /* 19929 */;
import useShowConnectedControlsDefault from "useShowConnectedControls" /* 19952 */;
import useControlAccessoryHeightDefault from "useControlAccessoryHeight" /* 19954 */;
import VoicePanelControlsDimOverlayDefault from "VoicePanelControlsDimOverlay" /* 19955 */;
import VoicePanelControlsDrawerDefault from "VoicePanelControlsDrawer" /* 19956 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6953 */;

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const VoicePanelConstants = fn(11925);
({ UI_SHOW_HIDE_PHYSICS: metroImportDefault, MODE_CHANGE_PHYSICS: closure_8, BORDER_RADIUS_PHYSICS: closure_9, PANEL_CONTROLS_HEIGHT_PHYSICS: closure_10, VoicePanelModes: closure_11 } = VoicePanelConstants);
const VoicePanelCardConstants = fn(11928);
({ CALL_TILE_GUTTER: closure_12, EDGE_GUTTER: map1 } = VoicePanelCardConstants);
const VoicePanelControlsConstants = fn(11923);
({ CONTROLS_DRAWER_HEADER_EXPANDED_SIZE: closure_14, VoicePanelControlsModes: closure_15 } = VoicePanelControlsConstants);
const Constants = fn(1072);
({ ComponentActions: closure_16, ThemeTypes: closure_17 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = jsxProd);
const createStyles = fn(5243);
let obj = { accessibilityWrapper: null, wrapper: null, buttonsWrapper: null, actionSheetDragHandleWrapper: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.zIndex = 1;
obj.accessibilityWrapper = obj3;
let rect = { position: "absolute", bottom: 0, left: "50%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS };
obj.wrapper = rect;
const rect1 = { position: "absolute", left: 0, right: 0, zIndex: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: nativeDefault.space.PX_16 };
obj.buttonsWrapper = rect1;
obj.actionSheetDragHandleWrapper = { position: "absolute", top: 0, left: 0, right: 0, zIndex: 21 };
let closure_21 = createStyles.createStyles(obj);
let c22 = 200;
let c23 = 200;
const MetaQuestUtils = fn(1624);
let closure_25 = noop.memo(function Handle(openTab) {
  const tmp = closure_21();
  const tmp2 = useDrawerToggleDefault(openTab.openTab);
  ({ handlePress, accessibilityLabel, ariaHidden } = tmp2);
  return collapsedCategories(hasOwnProperty, { style: tmp.actionSheetDragHandleWrapper, children: collapsedCategories(native2.ActionSheetDragHandle, { onPress: handlePress, overlay: true, accessibilityLabel, "aria-hidden": ariaHidden }) });
});
let closure_26 = { code: "(function VoicePanelControlsTsx1(event){let[touchMoveCount,gestureSpecs,wrapperSpecs,controlsSpecs,VoicePanelControlsModes,TRANSITIONAL_HEIGHT,INTER_FLOATING_TRANSITIONAL_HEIGHT]=this.__closure;touchMoveCount.set(0);gestureSpecs.set({absoluteX:event.changedTouches[0].absoluteX,absoluteY:event.changedTouches[0].absoluteY,x:wrapperSpecs.get().x,y:wrapperSpecs.get().y,height:wrapperSpecs.get().height,isDrawer:controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER,active:false,drawerTransitionHeight:TRANSITIONAL_HEIGHT,interFloatingTransitionHeight:INTER_FLOATING_TRANSITIONAL_HEIGHT});})" };
let closure_27 = { code: "(function VoicePanelControlsTsx2(){let[scheduleOnRN,gestureLock]=this.__closure;scheduleOnRN(gestureLock.lock);})" };
let closure_28 = { code: "(function VoicePanelControlsTsx3(event,manager){let[State,gestureSpecs,controlsSpecs,VoicePanelControlsModes,touchMoveCount,SCROLL_BEGIN_GRACE_TICKS,isDragScrolling,sharedTab,scrollOffsetValue,GESTURE_VERTICAL_MINIMUM,wrapperSpecs,TRANSITIONAL_HEIGHT,INTER_FLOATING_TRANSITIONAL_HEIGHT,tab,scheduleOnRN,openTab,VoicePanelTabAnalyticsSources,scrollLock]=this.__closure;if(event.state!==State.BEGAN||gestureSpecs.get().active)return;if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){manager.fail();return;}touchMoveCount.set(touchMoveCount.get()+1);const isDragging=touchMoveCount.get()<=SCROLL_BEGIN_GRACE_TICKS?true:isDragScrolling.get();const scrollOffset=function(){switch(sharedTab.get()){case'settings':case'app_launcher':return scrollOffsetValue.get();default:return 0;}}();const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const computed=gestureSpecs.get().absoluteY-absoluteY;if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER&&isDragging&&(computed>=0||scrollOffset>0)){return;}if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT&&computed>GESTURE_VERTICAL_MINIMUM||controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER&&(computed<-GESTURE_VERTICAL_MINIMUM||computed>GESTURE_VERTICAL_MINIMUM)){gestureSpecs.set({absoluteX:absoluteX,absoluteY:absoluteY,x:wrapperSpecs.get().x,y:wrapperSpecs.get().y,height:wrapperSpecs.get().height,isDrawer:controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER,active:true,drawerTransitionHeight:TRANSITIONAL_HEIGHT,interFloatingTransitionHeight:INTER_FLOATING_TRANSITIONAL_HEIGHT});if(controlsSpecs.get().mode!==VoicePanelControlsModes.DRAWER&&tab!=='settings'){scheduleOnRN(openTab,{tab:'settings',source:VoicePanelTabAnalyticsSources.GESTURE,disableControlsUpdate:true});}scrollLock.set(true);manager.activate();}else if(Math.abs(computed)>Math.abs(GESTURE_VERTICAL_MINIMUM)){manager.fail();}})" };
let closure_29 = { code: "(function VoicePanelControlsTsx4(event){let[gestureSpecs,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,wrapperSpecs,getControlsDrawerOpenWidth,windowDimensions,wrapperDimensions,controlsSpecs,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,getControlsDefaultWidth]=this.__closure;const change=event.absoluteY-gestureSpecs.get().absoluteY;const newHeight=gestureSpecs.get().height-gestureSpecs.get().y-change;if(newHeight>gestureSpecs.get().drawerTransitionHeight){if(!gestureSpecs.get().isDrawer){gestureSpecs.set({...gestureSpecs.get(),isDrawer:true});}const headerHeight=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height;wrapperSpecs.set({...wrapperSpecs.get(),x:0,y:0,width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:Math.min(newHeight,wrapperDimensions.get().drawerHeight-headerHeight),drawerMode:true});}else{const progress=newHeight/gestureSpecs.get().drawerTransitionHeight;const floatingHeight=controlsSpecs.get().height;const yOffset=Math.max(newHeight-safeArea.get().bottom-floatingHeight,0)*-1;const newChange=yOffset*(1-progress/1.5);if(gestureSpecs.get().isDrawer){gestureSpecs.set({...gestureSpecs.get(),isDrawer:false});}if(floatingHeight!==wrapperSpecs.get().height&&!wrapperSpecs.get().drawerMode){scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);}wrapperSpecs.set({...wrapperSpecs.get(),x:0,y:safeArea.get().bottom*-1+newChange,width:getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:floatingHeight,drawerMode:false});}})" };
let closure_30 = { code: "(function VoicePanelControlsTsx5(){let[scrollLock,isDragScrolling,gestureSpecs,scheduleOnRN,gestureLock]=this.__closure;console.log('ZZZZZ - ControlsGesture.onTouchesCancelled');scrollLock.set(false);isDragScrolling.set(false);gestureSpecs.set({...gestureSpecs.get(),active:false});scheduleOnRN(gestureLock.unlock);})" };
let closure_31 = { code: "(function VoicePanelControlsTsx6({velocityY:velocityY}){let[wrapperSpecs,wrapperDimensions,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,controlsSpecs,VoicePanelControlsModes,gestureSpecs,scrollLock,isDragScrolling,scheduleOnRN,gestureLock]=this.__closure;const absoluteVelocity=Math.abs(velocityY);let resultingControlMode;if(absoluteVelocity>200&&velocityY<0){wrapperSpecs.set({...wrapperSpecs.get(),height:wrapperDimensions.get().drawerHeight-calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height});if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.DRAWER;}}else if(absoluteVelocity<200&&gestureSpecs.get().isDrawer){if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.DRAWER;}}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.FLOATING_DEFAULT;}}scrollLock.set(false);isDragScrolling.set(false);scheduleOnRN(gestureLock.unlock,resultingControlMode);})" };
let closure_32 = { code: "(function VoicePanelControlsTsx7(){let[scrollLock,isDragScrolling,scheduleOnRN,gestureLock]=this.__closure;scrollLock.set(false);isDragScrolling.set(false);scheduleOnRN(gestureLock.unlock);})" };
let closure_33 = { code: "(function VoicePanelControlsTsx8(){let[wrapperSpecs]=this.__closure;return wrapperSpecs.get().drawerMode;})" };
let closure_34 = { code: "(function VoicePanelControlsTsx9(current,previous){let[scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes]=this.__closure;if(current===previous)return;scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);})" };
let closure_35 = { code: "(function VoicePanelControlsTsx10(){let[connected,controlsSpecs,mode,windowDimensions,windowDimensionsIgnoringKeyboard,safeArea]=this.__closure;return{connected:connected.get(),currentControlsMode:controlsSpecs.get().mode,mode:mode.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,windowHeightIgnoringKeyboard:windowDimensionsIgnoringKeyboard.get().height,controlsHeightValue:controlsSpecs.get().height,safeArea:safeArea.get()};})" };
let closure_36 = { code: "(function VoicePanelControlsTsx11(props,previous){let[cheapWorkletShallowEqual,VoicePanelModes,wrapperSpecs,VoicePanelControlsModes,scheduleOnRN,setControlsMode,isScreenReaderEnabled,EDGE_GUTTER,getControlsDefaultWidth,getDrawerSpec,getControlsDrawerOpenWidth]=this.__closure;var _previous$currentCont;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{currentControlsMode:currentControlsMode,mode:mode,windowWidth:windowWidth,windowHeightIgnoringKeyboard:windowHeightIgnoringKeyboard,controlsHeightValue:controlsHeightValue,safeArea:safeArea}=props;switch(mode){case VoicePanelModes.DISMISSED:case VoicePanelModes.PIP:if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}return;case VoicePanelModes.PANEL:default:break;}switch(currentControlsMode){case VoicePanelControlsModes.RESET:scheduleOnRN(setControlsMode,{mode:(_previous$currentCont=previous===null||previous===void 0?void 0:previous.currentControlsMode)!==null&&_previous$currentCont!==void 0?_previous$currentCont:VoicePanelControlsModes.FLOATING_DEFAULT});return;case VoicePanelControlsModes.HIDDEN:if(isScreenReaderEnabled){wrapperSpecs.set({...wrapperSpecs.get(),hidden:false});break;}if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}break;case VoicePanelControlsModes.FLOATING_DEFAULT:wrapperSpecs.set({x:0,y:Math.max(safeArea.bottom,EDGE_GUTTER)*-1,width:getControlsDefaultWidth(windowWidth,safeArea.left,safeArea.right),height:controlsHeightValue,drawerMode:false,hidden:false});break;case VoicePanelControlsModes.DRAWER:const{minHeight:minHeight,maxHeight:maxHeight}=getDrawerSpec(windowHeightIgnoringKeyboard,safeArea.top);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(wrapperSpecs.get().height<=controlsHeightValue){height=maxHeight;}else if(previous!=null&&wrapperSpecs.get().height===getDrawerSpec(previous.windowHeight,previous.safeArea.top).maxHeight){height=maxHeight;}else if(wrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=minHeight;}wrapperSpecs.set({x:0,y:0,width:getControlsDrawerOpenWidth(windowWidth,safeArea.left,safeArea.right),height:height,drawerMode:true,hidden:false});break;}})" };
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
  items = [wrapperSpecs, controlsSpecs, accessoryHeights, gestureState];
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
  const items2 = [collapsedCategories(native.TransitionItem, { item: tmp11, renderItem: VoicePanelFloatingCTAContainer.renderVoicePanelFloatingCTA }), ];
  let tmp12;
  if (tmp5.isConnectingOrConnectedToConsole) {
    tmp12 = memo;
  }
  const obj3 = { children: null };
  const obj2 = { item: tmp11, renderItem: VoicePanelFloatingCTAContainer.renderVoicePanelFloatingCTA };
  items2[1] = collapsedCategories(native.TransitionItem, { item: tmp12, renderItem: VoicePanelConsoleStatus.renderVoicePanelConsoleStatus });
  obj3.children = items2;
  return dependencyMap(expandedHeight, obj3);
});
let closure_38 = { code: "(function VoicePanelControlsTsx12(){let[controlsSpecs,connected,sharedTab,wrapperSpecs,TRANSITIONAL_HEIGHT,CONTROLS_DRAWER_HEADER_EXPANDED_SIZE,withSpring,MODE_CHANGE_PHYSICS]=this.__closure;const showPushToTalkText=controlsSpecs.get().pushToTalk&&connected.get();const height=sharedTab.get()==='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?CONTROLS_DRAWER_HEADER_EXPANDED_SIZE:controlsSpecs.get().height;const translateY=function(){return sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?-controlsSpecs.get().height:0;}();return{top:showPushToTalkText?-4:0,height:withSpring(height,MODE_CHANGE_PHYSICS),opacity:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0:1,MODE_CHANGE_PHYSICS),transform:[{translateY:withSpring(translateY,MODE_CHANGE_PHYSICS)},{scale:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0.95:1,MODE_CHANGE_PHYSICS)}]};})" };
let closure_39 = noop.memo(function VoicePanelButtonsInner(sharedTab) {
  ({ openTab: c0, wrapperSpecs } = sharedTab);
  const ref = noop.useRef(true);
  const tmp4 = useRefValueDefault(ref);
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ controlsSpecs, connected } = context);
  const tmp5 = closure_21();
  const arr = useControlsButtonsDefault();
  items = [closure_38, controlsSpecs, connected, sharedTab.sharedTab, wrapperSpecs, c22, gesture, spring_spring.withSpring, React5];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
  class VoicePanelControlsTsx12 {
    constructor() {
      obj = closure_0;
      pushToTalk = closure_0.get().pushToTalk;
      if (pushToTalk) {
        tmp = closure_1;
        pushToTalk = closure_1.get();
      }
      obj2 = closure_2;
      if ("settings" === closure_2.get()) {
        tmp2 = closure_3;
        tmp3 = closure_4;
        if (closure_3.get().height >= closure_4) {
          height = closure_5;
        }
        num = 0;
        if ("settings" !== obj2.get()) {
          tmp4 = closure_3;
          tmp5 = closure_4;
          num = 0;
          if (closure_3.get().height >= closure_4) {
            num = -obj.get().height;
          }
        }
        num2 = 0;
        if (pushToTalk) {
          num2 = -4;
        }
        obj1 = { top: null, height: null, opacity: null, transform: null };
        obj1.top = num2;
        tmp6 = closure_6;
        tmp7 = closure_7;
        obj1.height = closure_6(height, closure_7);
        num3 = 1;
        num4 = 1;
        if ("settings" !== obj2.get()) {
          tmp8 = closure_3;
          tmp9 = closure_4;
          num4 = 1;
          if (closure_3.get().height >= closure_4) {
            num4 = 0;
          }
        }
        obj1.opacity = tmp6(num4, tmp7);
        obj6 = { translateY: null };
        obj6.translateY = tmp6(num, tmp7);
        items = [, ];
        items[0] = obj6;
        num5 = 1;
        if ("settings" !== obj2.get()) {
          tmp10 = closure_3;
          tmp11 = closure_4;
          num5 = 1;
          if (closure_3.get().height >= closure_4) {
            num5 = 0.95;
          }
        }
        obj7 = { scale: null };
        obj7.scale = tmp6(num5, tmp7);
        items[1] = obj7;
        obj1.transform = items;
        return obj1;
      }
      height = obj.get().height;
      return;
    }
  }
  const items1 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
  VoicePanelControlsTsx12.__closure = items1;
  VoicePanelControlsTsx12.__workletHash = 5526761748144;
  VoicePanelControlsTsx12.__initData = tmp8;
  const animatedStyle = _mod1652.useAnimatedStyle(VoicePanelControlsTsx12);
  const effect = noop.useEffect(() => {
    c2.current = false;
  }, []);
  let obj3 = { skipEntering: tmp4, children: null };
  let obj4 = { style: null, children: arr.map((props) => props.render(props.key, { props, openTab, wrapperSpecs })) };
  const items2 = [tmp5.buttonsWrapper, animatedStyle];
  obj4.style = items2;
  obj3.children = collapsedCategories(_modDef1652.View, obj4);
  return collapsedCategories(_mod1652.LayoutAnimationConfig, obj3);
});
let closure_40 = { code: "(function VoicePanelControlsTsx13(){let[wrapperSpecs,CALL_TILE_GUTTER,accessoryHeights]=this.__closure;return wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get();})" };
let closure_41 = { code: "(function VoicePanelControlsTsx14(){let[dockJoinMorphOrigin]=this.__closure;return dockJoinMorphOrigin.get()!=null;})" };
let closure_42 = { code: "(function VoicePanelControlsTsx15(morphing,previous){let[joinFrozenSpecs,wrapperSpecs]=this.__closure;if(morphing===previous)return;joinFrozenSpecs.set(morphing?{...wrapperSpecs.get()}:null);})" };
let closure_43 = { code: "(function VoicePanelControlsTsx16(){let[joinFrozenSpecs,borderRadius,roundToNearestPixel,withSpring,useReducedMotion,offscreenY,UI_SHOW_HIDE_PHYSICS,wrapperSpecs,BORDER_RADIUS_PHYSICS,PANEL_CONTROLS_HEIGHT_PHYSICS,MODE_CHANGE_PHYSICS,isDockEnabled,gestureState,isDockExpanding,SHEET_MORPH_EXPANDING_PANEL_FADE,SHEET_MORPH_DOCKING_PANEL_FADE,dockContentSwap,getSheetMorphFadeProgress,dockMinimizeProgress]=this.__closure;const frozen=joinFrozenSpecs.get();if(frozen!=null){return{borderBottomRightRadius:borderRadius,borderBottomLeftRadius:borderRadius,height:frozen.height,width:frozen.width,marginLeft:roundToNearestPixel(frozen.width/2)*-1,opacity:1,transform:[{translateX:frozen.x},{translateY:withSpring(useReducedMotion.get()?frozen.y:offscreenY.get(),UI_SHOW_HIDE_PHYSICS)}]};}const shared={borderBottomRightRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),borderBottomLeftRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),height:withSpring(wrapperSpecs.get().height,PANEL_CONTROLS_HEIGHT_PHYSICS),width:withSpring(wrapperSpecs.get().width,MODE_CHANGE_PHYSICS),marginLeft:withSpring(roundToNearestPixel(wrapperSpecs.get().width/2)*-1,MODE_CHANGE_PHYSICS)};if(!isDockEnabled){return{...shared,transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?offscreenY.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}const panelFade=isDockExpanding.get()?SHEET_MORPH_EXPANDING_PANEL_FADE:SHEET_MORPH_DOCKING_PANEL_FADE;return{...shared,opacity:withSpring((wrapperSpecs.get().hidden?0:1)*Math.max(dockContentSwap.get(),getSheetMorphFadeProgress(1-dockMinimizeProgress.get(),panelFade.start,panelFade.end)),MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(!useReducedMotion.get()&&wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?offscreenY.get():wrapperSpecs.get().y+dockMinimizeProgress.get()*offscreenY.get(),UI_SHOW_HIDE_PHYSICS)}]};})" };
let closure_44 = { code: "(function VoicePanelControlsTsx17(){let[controlsSpecs]=this.__closure;return controlsSpecs.get().mode;})" };
let closure_45 = { code: "(function VoicePanelControlsTsx18(mode,previousMode){let[isScreenReaderEnabled,VoicePanelControlsModes,scheduleOnRN,setIsDrawer]=this.__closure;if(mode===previousMode||!isScreenReaderEnabled)return;if(mode===VoicePanelControlsModes.DRAWER&&previousMode!==VoicePanelControlsModes.DRAWER){scheduleOnRN(setIsDrawer,true);}else if(mode!==VoicePanelControlsModes.DRAWER&&previousMode===VoicePanelControlsModes.DRAWER){scheduleOnRN(setIsDrawer,false);}})" };
let closure_46 = { code: "(function VoicePanelControlsTsx19(){let[wrapperSpecs]=this.__closure;return wrapperSpecs.get().drawerMode;})" };
let closure_47 = { code: "(function VoicePanelControlsTsx20(drawerMode,previousDrawerMode){let[scheduleOnRN,setIsDrawerActive]=this.__closure;if(drawerMode===previousDrawerMode)return;if(drawerMode){scheduleOnRN(setIsDrawerActive,true);}else{scheduleOnRN(setIsDrawerActive,false);}})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControls.tsx");

export default noop.memo(function VoicePanelControls(gestureState) {
  gestureState = gestureState.gestureState;
  _require = undefined;
  c3 = undefined;
  noop = undefined;
  const isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  const context = noop.useContext(VoicePanelStateContextDefault);
  const channelId = context.channelId;
  _require = channelId;
  const controlsSpecs = context.controlsSpecs;
  ({ isDockEnabled, setControlsMode } = context);
  ({ dockContentSwap, isDockExpanding, dockJoinMorphOrigin, mode, dockMinimizeProgress, useReducedMotion } = context);
  let tmp6 = closure_21();
  const tmp8 = c3(noop.useState(null), 2);
  const first = tmp8[0];
  c3 = first;
  noop = tmp8[1];
  let obj = require("useIsScreenReaderEnabled");
  const sharedValue = require("module_1652").useSharedValue(first);
  c5 = sharedValue;
  const layoutEffect = noop.useLayoutEffect(() => {
    const result = drawerTransitionHeight.set(c3);
  });
  let obj3 = require("module_1652");
  let tmp13 = useShowConnectedControlsDefault(channelId);
  let tmp12 = useIsConnectedToVoiceChannelDefault(channelId);
  const maybeFetchSoundboardSounds = require("SoundboardHooks").useMaybeFetchSoundboardSounds({ shouldFetch: tmp12 });
  items = [channelId, controlsSpecs, setControlsMode];
  const callback = noop.useCallback((controlsProps) => {
    ({ tab: c0, source: c1, disableControlsUpdate } = controlsProps);
    if (disableControlsUpdate === undefined) {
      disableControlsUpdate = false;
    }
    controlsProps = controlsProps.controlsProps;
    _undefined(_undefined3[39]).batchUpdates(() => {
      tab = false;
      const tmp2 = _undefined2.get().mode !== constants.DRAWER;
      const result = tab(disableControlsUpdate[40]).reportJankVoicePanelTabRequest(closure_1_0, { tab, disableControlsUpdate, controlsProps }, tmp2);
      _undefined5((arg0) => {
        closure_0 = arg0 !== tab;
        return tab;
      });
      if (!disableControlsUpdate) {
        const obj3 = { mode: constants.DRAWER };
        const merged = Object.assign(controlsProps);
        disableControlsUpdate(obj3);
      }
      let tmp14 = tab;
      if (!tab) {
        tmp14 = tmp2;
      }
      if (tmp14) {
        c1(disableControlsUpdate[20])(closure_1_0, tmp5, closure_1);
      }
      const obj = tab(disableControlsUpdate[40]);
      const obj2 = { tab, disableControlsUpdate, controlsProps };
      tmp5 = tab;
    });
  }, items);
  c6 = callback;
  const tmp16 = useControlAccessoryHeightDefault();
  let items1 = [channelId, controlsSpecs, callback, first];
  const layoutEffect1 = noop.useLayoutEffect(() => {
    function handleStoreChange() {
      chatOpen = ChannelRTCStore.getChatOpen(c0);
      if (chatOpen !== chatOpen) {
        if (chatOpen) {
          const obj = { tab: "chat", source: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources.STORE, controlsProps: { debounce: true } };
          c6(obj);
        }
      }
    }
    chatOpen = interFloatingTransitionHeight.getChatOpen(chatOpen);
    if (chatOpen !== chatOpen) {
      if (chatOpen) {
        const obj2 = { tab: "chat", source: _undefined(_undefined3[20]).VoicePanelTabAnalyticsSources.STORE, controlsProps: { debounce: true } };
        interFloatingTransitionHeight(obj2);
      }
    }
    interFloatingTransitionHeight.addChangeListener(handleStoreChange);
    return () => {
      ChannelRTCStore.removeChangeListener(handleStoreChange);
    };
  }, items1);
  let items2 = [callback];
  const effect = noop.useEffect(() => {
    function handleOpenChatTab(source) {
      source = undefined;
      if (source != null) {
        source = source.source;
      }
      if (source == null) {
        source = handleOpenChatTab(19804).VoicePanelTabAnalyticsSources.HEADER_BUTTON;
      }
      interFloatingTransitionHeight({ tab: "chat", source });
    }
    function handleOpenAppLauncherTab(source) {
      source = undefined;
      if (source != null) {
        source = source.source;
      }
      if (source == null) {
        source = handleOpenChatTab(19804).VoicePanelTabAnalyticsSources.HEADER_BUTTON;
      }
      interFloatingTransitionHeight({ tab: "app_launcher", source });
    }
    let ComponentDispatch = _undefined(_undefined3[42]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(_undefined12.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
    let ComponentDispatch2 = _undefined(_undefined3[42]).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(_undefined12.VOICE_PANEL_OPEN_APP_LAUNCHER_TAB, handleOpenAppLauncherTab);
    return () => {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(closure_3_16.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
      const ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch2.unsubscribe(closure_3_16.VOICE_PANEL_OPEN_APP_LAUNCHER_TAB, handleOpenAppLauncherTab);
    };
  }, items2);
  let obj4 = require("SoundboardHooks");
  const rect = require("useSafeAreaInsets").getSafeAreaInsets();
  let obj5 = require("useSafeAreaInsets");
  let size = { width: null, height: 0, x: 0, y: 0, drawerMode: false, hidden: false };
  let obj6 = require("module_1652");
  let obj8 = require("VoicePanelControlsUtils");
  size.width = obj8.getControlsDefaultWidth(require("useWindowDimensions").getWindowDimensions().width, rect.left, rect.right);
  const sharedValue1 = obj6.useSharedValue(size);
  const obj9 = require("useWindowDimensions");
  let items3 = [closure_40, sharedValue1, c12, tmp16];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp20, tmp21, tmp22, tmp23] = items3;
  class VoicePanelControlsTsx13 {
    constructor() {
      sum = closure_0.get().height + closure_1;
      return sum + closure_2.get();
    }
  }
  let items4 = [tmp21, tmp22, tmp23];
  VoicePanelControlsTsx13.__closure = items4;
  VoicePanelControlsTsx13.__workletHash = 3098126671150;
  VoicePanelControlsTsx13.__initData = tmp20;
  const derivedValue = require("module_1652").useDerivedValue(VoicePanelControlsTsx13);
  let obj10 = require("module_1652");
  const sharedValue2 = require("module_1652").useSharedValue(null);
  const tmpResult = require("module_1652");
  let items5 = [closure_41, dockJoinMorphOrigin];
  _require = undefined;
  [tmp26, tmp27] = items5;
  class VoicePanelControlsTsx14 {
    constructor() {
      return null != closure_0.get();
    }
  }
  let items6 = [tmp27];
  VoicePanelControlsTsx14.__closure = items6;
  VoicePanelControlsTsx14.__workletHash = 6544063200230;
  VoicePanelControlsTsx14.__initData = tmp26;
  let items7 = [closure_42, sharedValue2, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  [tmp28, tmp29, tmp30] = items7;
  class VoicePanelControlsTsx15 {
    constructor(arg0, arg1) {
      if (gestureState !== arg1) {
        tmp2 = null;
        tmp = closure_0;
        if (gestureState) {
          obj = {};
          tmp3 = closure_1;
          tmp4 = obj;
          merged = Object.assign(closure_1.get());
          tmp2 = obj;
        }
        result = closure_0.set(tmp2);
      }
      return;
    }
  }
  let items8 = [tmp29, tmp30];
  VoicePanelControlsTsx15.__closure = items8;
  VoicePanelControlsTsx15.__workletHash = 5348461441179;
  VoicePanelControlsTsx15.__initData = tmp28;
  const animatedReaction = require("module_1652").useAnimatedReaction(VoicePanelControlsTsx14, VoicePanelControlsTsx15);
  const tmpResult16 = require("module_1652");
  const token = require("useToken").useToken(tmp4(575).modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS);
  const tmpResult17 = require("useToken");
  let items9 = [closure_43, sharedValue2, token, roundToNearestPixelDefault, require("spring/spring").withSpring, useReducedMotion, derivedValue, c7, sharedValue1, c9, c10, c8, isDockEnabled, gestureState, isDockExpanding, require("VoicePanelSheetMorph").SHEET_MORPH_EXPANDING_PANEL_FADE, require("VoicePanelSheetMorph").SHEET_MORPH_DOCKING_PANEL_FADE, dockContentSwap, require("VoicePanelSheetMorph").getSheetMorphFadeProgress, dockMinimizeProgress];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  c15 = undefined;
  c16 = undefined;
  c17 = undefined;
  c18 = undefined;
  [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52] = items9;
  class VoicePanelControlsTsx16 {
    constructor() {
      point = closure_0.get();
      if (null != point) {
        size = { borderBottomRightRadius: null, borderBottomLeftRadius: null, height: null, width: null, marginLeft: null, opacity: 1, transform: null };
        tmp26 = closure_1;
        size.borderBottomRightRadius = closure_1;
        size.borderBottomLeftRadius = closure_1;
        ({ height: obj11.height, width: obj11.width } = point);
        tmp27 = closure_2;
        num7 = 2;
        num8 = -1;
        size.marginLeft = -1 * closure_2(point.width / 2);
        obj1 = { translateX: null };
        obj1.translateX = point.x;
        items = [, ];
        items[0] = obj1;
        tmp29 = closure_4;
        tmp28 = closure_3;
        if (closure_4.get()) {
          y2 = point.y;
        } else {
          tmp30 = closure_5;
          y2 = closure_5.get();
        }
        obj15 = { translateY: null };
        tmp31 = closure_6;
        obj15.translateY = tmp28(y2, closure_6);
        items[1] = obj15;
        size.transform = items;
        return size;
      } else {
        tmp32 = closure_3;
        obj14 = closure_7;
        num = 0;
        if (!closure_7.get().drawerMode) {
          num = closure_1;
        }
        size1 = { borderBottomRightRadius: null, borderBottomLeftRadius: null, height: null, width: null, marginLeft: null };
        tmp = closure_8;
        size1.borderBottomRightRadius = tmp32(num, closure_8);
        num2 = 0;
        if (!obj14.get().drawerMode) {
          num2 = closure_1;
        }
        size1.borderBottomLeftRadius = tmp32(num2, tmp);
        tmp2 = closure_9;
        size1.height = tmp32(obj14.get().height, closure_9);
        tmp3 = closure_10;
        size1.width = tmp32(obj14.get().width, closure_10);
        tmp4 = closure_2;
        num3 = 2;
        num4 = -1;
        size1.marginLeft = tmp32(-1 * closure_2(obj14.get().width / 2), closure_10);
        tmp5 = closure_11;
        if (closure_11) {
          tmp11 = closure_13;
          tmp12 = closure_13.get() ? closure_14 : closure_15;
          obj16 = {};
          tmp13 = obj16;
          tmp14 = size1;
          merged = Object.assign(size1);
          num5 = 1;
          num6 = 1;
          if (obj14.get().hidden) {
            num6 = 0;
          }
          tmp16 = globalThis;
          _Math = Math;
          tmp17 = closure_16;
          tmp19 = closure_17;
          obj7 = closure_18;
          value = closure_16.get();
          obj16.opacity = tmp32(num6 * Math.max(value, closure_17(1 - closure_18.get(), tmp12.start, tmp12.end)), tmp3);
          obj17 = { translateX: null };
          tmp20 = closure_6;
          obj17.translateX = tmp32(obj14.get().x, closure_6);
          items1 = [, ];
          items1[0] = obj17;
          tmp21 = closure_4;
          if (closure_4.get()) {
            obj9 = closure_12;
            if (closure_12.get().active) {
              obj18 = { translateY: null };
              obj18.translateY = tmp32(sum, tmp20);
              items1[1] = obj18;
              obj16.transform = items1;
              return obj16;
            }
            tmp25 = closure_5;
            value1 = obj7.get();
            sum = obj14.get().y + value1 * closure_5.get();
          }
          tmp22 = closure_5;
          sum = closure_5.get();
        } else {
          obj19 = {};
          tmp6 = obj19;
          tmp7 = size1;
          merged1 = Object.assign(size1);
          obj20 = { translateX: null };
          tmp9 = closure_6;
          obj20.translateX = tmp32(obj14.get().x, closure_6);
          items2 = [, ];
          items2[0] = obj20;
          if (obj14.get().hidden) {
            tmp10 = closure_5;
            y = closure_5.get();
          } else {
            obj4 = closure_12;
            if (closure_12.get().active) {
            }
            y = obj14.get().y;
          }
          obj21 = { translateY: null };
          obj21.translateY = tmp32(y, tmp9);
          items2[1] = obj21;
          obj19.transform = items2;
          return obj19;
        }
      }
      return;
    }
  }
  let items10 = [tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52];
  VoicePanelControlsTsx16.__closure = items10;
  VoicePanelControlsTsx16.__workletHash = 13552589010327;
  VoicePanelControlsTsx16.__initData = tmp33;
  const animatedStyle = require("module_1652").useAnimatedStyle(VoicePanelControlsTsx16);
  const tmpResult18 = require("module_1652");
  closure_129_0 = first;
  closure_129_1 = sharedValue;
  closure_129_2 = sharedValue1;
  closure_129_3 = callback;
  ({ hiddenProps, hiddenStyles } = useControlsHiddenPresentationDefault(mode, sharedValue1));
  const context1 = obj2.useContext(tmp4(11924));
  const controlsSpecs2 = context1.controlsSpecs;
  closure_129_4 = controlsSpecs2;
  const windowDimensions = context1.windowDimensions;
  closure_129_5 = windowDimensions;
  const wrapperDimensions = context1.wrapperDimensions;
  closure_129_6 = wrapperDimensions;
  const safeArea = context1.safeArea;
  closure_129_7 = safeArea;
  const tmp54 = useControlsHiddenPresentationDefault(mode, sharedValue1);
  let point = { absoluteX: 0, absoluteY: 0, x: 0, y: 0, height: 0, isDrawer: false, active: false, drawerTransitionHeight, interFloatingTransitionHeight };
  const sharedValue3 = require("module_1652").useSharedValue(point);
  closure_129_8 = sharedValue3;
  const tmpResult19 = require("module_1652");
  const sharedValue4 = require("module_1652").useSharedValue(0);
  closure_129_9 = sharedValue4;
  const tmpResult20 = require("module_1652");
  const sharedValue5 = require("module_1652").useSharedValue(false);
  closure_129_10 = sharedValue5;
  const tmpResult21 = require("module_1652");
  const sharedValue6 = require("module_1652").useSharedValue(0);
  closure_129_11 = sharedValue6;
  const ref = noop.useRef(undefined);
  closure_129_12 = ref;
  const tmpResult22 = require("module_1652");
  const sharedValue7 = require("module_1652").useSharedValue(false);
  closure_129_13 = sharedValue7;
  let items11 = [ref, sharedValue5, sharedValue7, sharedValue6];
  const memo = obj2.useMemo(() => ({ gestureRef: _undefined10, scrollLocked, scrollOffsetValue: _undefined9, isDragScrolling }), items11);
  const tmp63 = useControlsLockDefault();
  closure_129_14 = tmp63;
  const tmpResult23 = require("module_1652");
  const token1 = require("useToken").useToken(tmp4(575).modules.mobile.VOICE_PANEL_GUTTER);
  closure_129_15 = token1;
  let items12 = [controlsSpecs2, tmp63, sharedValue3, sharedValue5, callback, safeArea, sharedValue7, sharedValue6, sharedValue, first, sharedValue4, windowDimensions, wrapperDimensions, sharedValue1, token1];
  const memo1 = obj2.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const manualActivationResult = Gesture.Pan().manualActivation(true);
    let result = Gesture.Pan().manualActivation(true).maxPointers(1).shouldCancelWhenOutside(false);
    const maxPointersResult = Gesture.Pan().manualActivation(true).maxPointers(1);
    items = [closure_26, c9, c8, c2, c4, constants, c22, c23];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items;
    class VoicePanelControlsTsx1 {
      constructor(arg0) {
        result = closure_0.set(0);
        point = { absoluteX: arg0.changedTouches[0].absoluteX, absoluteY: arg0.changedTouches[0].absoluteY, x: closure_2.get().x, y: closure_2.get().y, height: closure_2.get().height, isDrawer: closure_3.get().mode === closure_4.DRAWER, active: false, drawerTransitionHeight: closure_5, interFloatingTransitionHeight: closure_6 };
        result1 = closure_1.set(point);
        return;
      }
    }
    const items1 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
    VoicePanelControlsTsx1.__closure = items1;
    VoicePanelControlsTsx1.__workletHash = 1951912306053;
    VoicePanelControlsTsx1.__initData = tmp10;
    const tmp3 = c9;
    const withRefResult = result.withRef(c12);
    const items2 = [closure_27, _mod1705.scheduleOnRN, c14];
    c0 = undefined;
    c1 = undefined;
    [tmp19, tmp20, tmp21] = items2;
    class VoicePanelControlsTsx2 {
      constructor() {
        tmp = closure_0(closure_1.lock);
        return;
      }
    }
    const items3 = [tmp20, tmp21];
    VoicePanelControlsTsx2.__closure = items3;
    VoicePanelControlsTsx2.__workletHash = 13169296755053;
    VoicePanelControlsTsx2.__initData = tmp19;
    const onTouchesDownResult = result.withRef(c12).onTouchesDown(VoicePanelControlsTsx1);
    const items4 = [closure_28, LegacyBaseButton.State, c8, c4, constants, tmp3, num, c10, c1, c11, 30, c2, c22, c23, c0, _mod1705.scheduleOnRN, c3, trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources, c13];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    c9 = undefined;
    c10 = undefined;
    c11 = undefined;
    c12 = undefined;
    c13 = undefined;
    c14 = undefined;
    c15 = undefined;
    c16 = undefined;
    c17 = undefined;
    [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42] = items4;
    class VoicePanelControlsTsx3 {
      constructor(arg0, arg1) {
        if (arg0.state === closure_0.BEGAN) {
          obj4 = closure_1;
          if (!closure_1.get().active) {
            tmp = arg1;
            obj = closure_2;
            tmp2 = closure_3;
            if (closure_2.get().mode !== closure_3.HIDDEN) {
              tmp4 = closure_4;
              num = 1;
              result = closure_4.set(closure_4.get() + 1);
              tmp6 = closure_5;
              value = closure_4.get() <= closure_5;
              if (!value) {
                tmp8 = closure_6;
                value = closure_6.get();
              }
              tmp9 = closure_7;
              value1 = closure_7.get();
              str = "settings";
              if ("settings" === value1) {
                tmp11 = closure_8;
                num2 = closure_8.get();
              } else {
                str2 = "app_launcher";
                num2 = 0;
              }
              ({ absoluteY, absoluteX } = arg0.changedTouches[0]);
              diff = obj4.get().absoluteY - absoluteY;
              tmp13 = obj.get().mode === tmp2.DRAWER && value;
              if (tmp13) {
                num3 = 0;
                tmp14 = diff >= 0 || num2 > 0;
                tmp13 = tmp14;
              }
              if (!tmp13) {
                if (obj.get().mode !== tmp2.FLOATING_DEFAULT) {
                  if (obj.get().mode === tmp2.DRAWER) {
                    if (diff >= -closure_9) {
                    }
                  }
                  tmp16 = globalThis;
                  _Math = Math;
                  _Math2 = Math;
                  tmp18 = closure_9;
                  absolute = Math.abs(diff);
                  if (absolute > Math.abs(closure_9)) {
                    failResult = arg1.fail();
                  }
                } else {
                  tmp15 = closure_9;
                }
                point = { absoluteX: null, absoluteY: null, x: null, y: null, height: null, isDrawer: null, active: true, drawerTransitionHeight: null, interFloatingTransitionHeight: null };
                point.absoluteX = absoluteX;
                point.absoluteY = absoluteY;
                tmp19 = closure_10;
                point.x = closure_10.get().x;
                point.y = closure_10.get().y;
                point.height = closure_10.get().height;
                point.isDrawer = obj.get().mode === tmp2.DRAWER;
                tmp20 = closure_11;
                point.drawerTransitionHeight = closure_11;
                tmp21 = closure_12;
                point.interFloatingTransitionHeight = closure_12;
                result1 = obj4.set(point);
                tmp23 = obj.get().mode !== tmp2.DRAWER;
                if (tmp23) {
                  tmp24 = closure_13;
                  tmp23 = "settings" !== closure_13;
                }
                if (tmp23) {
                  tmp25 = closure_14;
                  tmp26 = closure_15;
                  obj1 = { tab: "settings", source: null, disableControlsUpdate: true };
                  tmp27 = closure_16;
                  obj1.source = closure_16.GESTURE;
                  tmp28 = closure_14(closure_15, obj1);
                }
                tmp29 = closure_17;
                flag = true;
                result2 = closure_17.set(true);
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
    const items5 = [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42];
    VoicePanelControlsTsx3.__closure = items5;
    VoicePanelControlsTsx3.__workletHash = 4250755132616;
    VoicePanelControlsTsx3.__initData = tmp24;
    const onStartResult = result.withRef(c12).onTouchesDown(VoicePanelControlsTsx1).onStart(VoicePanelControlsTsx2);
    const items6 = [closure_29, c8, calculateVoicePanelHeaderSpecsDefault, c7, c15, c2, VoicePanelControlsUtils.getControlsDrawerOpenWidth, c5, c6, c4, _mod1705.scheduleOnRN, HapticUtils.triggerHapticFeedback, HapticUtils.HapticFeedbackTypes, VoicePanelControlsUtils.getControlsDefaultWidth];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    c9 = undefined;
    c10 = undefined;
    c11 = undefined;
    c12 = undefined;
    [tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60] = items6;
    class VoicePanelControlsTsx4 {
      constructor(arg0) {
        obj = closure_0;
        diff = arg0.absoluteY - closure_0.get().absoluteY;
        diff1 = closure_0.get().height - closure_0.get().y - diff;
        if (diff1 > closure_0.get().drawerTransitionHeight) {
          if (!obj.get().isDrawer) {
            obj1 = {};
            tmp16 = obj1;
            merged = Object.assign(obj.get());
            flag3 = true;
            obj1.isDrawer = true;
            result = obj.set(obj1);
          }
          tmp19 = closure_1;
          tmp20 = closure_2;
          tmp21 = closure_3;
          tmp22 = closure_4;
          obj8 = {};
          tmp23 = obj8;
          merged1 = Object.assign(closure_4.get());
          num3 = 0;
          obj8.x = 0;
          obj8.y = 0;
          tmp25 = closure_5;
          tmp26 = closure_6;
          obj8.width = closure_5(closure_6.get().width, closure_2.get().left, closure_2.get().right);
          tmp27 = globalThis;
          _Math = Math;
          tmp28 = closure_7;
          obj8.height = Math.min(diff1, closure_7.get().drawerHeight - closure_1(closure_2.get(), closure_3).height);
          flag4 = true;
          obj8.drawerMode = true;
          result1 = closure_4.set(obj8);
        } else {
          tmp31 = closure_8;
          result2 = diff1 / obj.get().drawerTransitionHeight;
          height = closure_8.get().height;
          tmp32 = globalThis;
          _Math2 = Math;
          obj7 = closure_2;
          num4 = 0;
          num5 = -1;
          result3 = -1 * Math.max(diff1 - closure_2.get().bottom - height, 0);
          if (obj.get().isDrawer) {
            obj9 = {};
            tmp3 = obj9;
            merged2 = Object.assign(obj.get());
            flag = false;
            obj9.isDrawer = false;
            result4 = obj.set(obj9);
          }
          obj3 = closure_4;
          tmp6 = height === closure_4.get().height || obj3.get().drawerMode;
          if (!tmp6) {
            tmp7 = closure_9;
            tmp8 = closure_10;
            tmp9 = closure_11;
            tmp10 = closure_9(closure_10, closure_11.IMPACT_MEDIUM);
          }
          obj10 = {};
          tmp11 = obj10;
          merged3 = Object.assign(obj3.get());
          obj10.x = 0;
          num = 1.5;
          num2 = 1;
          obj10.y = -1 * obj7.get().bottom + result3 * (1 - result2 / 1.5);
          tmp13 = closure_12;
          tmp14 = closure_6;
          obj10.width = closure_12(closure_6.get().width, obj7.get().left, obj7.get().right);
          obj10.height = height;
          flag2 = false;
          obj10.drawerMode = false;
          result5 = obj3.set(obj10);
        }
        return;
      }
    }
    const items7 = [tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60];
    VoicePanelControlsTsx4.__closure = items7;
    VoicePanelControlsTsx4.__workletHash = 2574699763426;
    VoicePanelControlsTsx4.__initData = tmp47;
    const onTouchesMoveResult = result.withRef(c12).onTouchesDown(VoicePanelControlsTsx1).onStart(VoicePanelControlsTsx2).onTouchesMove(VoicePanelControlsTsx3);
    const tmp44 = c7;
    const tmp45 = c15;
    const tmp46 = c6;
    const items8 = [closure_30, c13, c10, c8, _mod1705.scheduleOnRN, c14];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp61, tmp62, tmp63, tmp64, tmp65, tmp66] = items8;
    class VoicePanelControlsTsx5 {
      constructor() {
        result = closure_0.set(false);
        result1 = closure_1.set(false);
        obj = {};
        merged = Object.assign(closure_2.get());
        obj.active = false;
        result2 = closure_2.set(obj);
        tmp5 = closure_3(closure_4.unlock);
        return;
      }
    }
    const items9 = [tmp62, tmp63, tmp64, tmp65, tmp66];
    VoicePanelControlsTsx5.__closure = items9;
    VoicePanelControlsTsx5.__workletHash = 2432447436376;
    VoicePanelControlsTsx5.__initData = tmp61;
    const onChangeResult = result.withRef(c12).onTouchesDown(VoicePanelControlsTsx1).onStart(VoicePanelControlsTsx2).onTouchesMove(VoicePanelControlsTsx3).onChange(VoicePanelControlsTsx4);
    const items10 = [closure_31, c2, tmp46, calculateVoicePanelHeaderSpecsDefault, tmp44, tmp45, c4, constants, c8, c13, c10, _mod1705.scheduleOnRN, c14];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    c9 = undefined;
    c10 = undefined;
    c11 = undefined;
    [tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79] = items10;
    class VoicePanelControlsTsx6 {
      constructor(arg0) {
        velocityY = arg0.velocityY;
        absolute = Math.abs(velocityY);
        if (absolute > 200) {
          num = 0;
          if (velocityY < 0) {
            tmp8 = closure_0;
            obj = {};
            tmp9 = obj;
            merged = Object.assign(closure_0.get());
            tmp11 = closure_1;
            tmp12 = closure_2;
            tmp13 = closure_3;
            tmp14 = closure_4;
            obj.height = closure_1.get().drawerHeight - closure_2(closure_3.get(), closure_4).height;
            result = closure_0.set(obj);
            tmp16 = closure_5;
            tmp17 = closure_6;
            tmp18 = closure_5.get().mode === closure_6.DRAWER ? tmp17.RESET : tmp17.DRAWER;
          }
        }
        if (absolute < 200) {
          tmp2 = closure_7;
          if (closure_7.get().isDrawer) {
            tmp5 = closure_5;
            tmp6 = closure_6;
            tmp7 = closure_5.get().mode === closure_6.DRAWER ? tmp6.RESET : tmp6.DRAWER;
          }
        }
        tmp3 = closure_6;
        tmp4 = closure_5.get().mode === closure_6.FLOATING_DEFAULT ? tmp3.RESET : tmp3.FLOATING_DEFAULT;
        result1 = closure_8.set(false);
        result2 = closure_9.set(false);
        tmp21 = closure_10(closure_11.unlock, tmp4);
        return;
      }
    }
    const items11 = [tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79];
    VoicePanelControlsTsx6.__closure = items11;
    VoicePanelControlsTsx6.__workletHash = 17280746684389;
    VoicePanelControlsTsx6.__initData = tmp67;
    const onTouchesCancelledResult = result.withRef(c12).onTouchesDown(VoicePanelControlsTsx1).onStart(VoicePanelControlsTsx2).onTouchesMove(VoicePanelControlsTsx3).onChange(VoicePanelControlsTsx4).onTouchesCancelled(VoicePanelControlsTsx5);
    const items12 = [closure_32, c13, c10, _mod1705.scheduleOnRN, c14];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    [tmp80, tmp81, tmp82, tmp83, tmp84] = items12;
    class VoicePanelControlsTsx7 {
      constructor() {
        result = closure_0.set(false);
        result1 = closure_1.set(false);
        tmp3 = closure_2(closure_3.unlock);
        return;
      }
    }
    const items13 = [tmp81, tmp82, tmp83, tmp84];
    VoicePanelControlsTsx7.__closure = items13;
    VoicePanelControlsTsx7.__workletHash = 12829173539187;
    VoicePanelControlsTsx7.__initData = tmp80;
    return result.withRef(c12).onTouchesDown(VoicePanelControlsTsx1).onStart(VoicePanelControlsTsx2).onTouchesMove(VoicePanelControlsTsx3).onChange(VoicePanelControlsTsx4).onTouchesCancelled(VoicePanelControlsTsx5).onEnd(VoicePanelControlsTsx6).onFinalize(VoicePanelControlsTsx7);
  }, items12);
  const tmpResult24 = require("useToken");
  let items13 = [closure_33, sharedValue1];
  _require = undefined;
  [tmp66, tmp67] = items13;
  class VoicePanelControlsTsx8 {
    constructor() {
      return closure_0.get().drawerMode;
    }
  }
  const items14 = [tmp67];
  VoicePanelControlsTsx8.__closure = items14;
  VoicePanelControlsTsx8.__workletHash = 16418343056070;
  VoicePanelControlsTsx8.__initData = tmp66;
  const items15 = [closure_34, require("module_1705").scheduleOnRN, require("HapticUtils").triggerHapticFeedback, require("HapticUtils").HapticFeedbackTypes];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp68, tmp69, tmp70, tmp71] = items15;
  class VoicePanelControlsTsx9 {
    constructor(arg0, arg1) {
      if (gestureState !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp4 = closure_0(closure_1, closure_2.IMPACT_MEDIUM);
      }
      return;
    }
  }
  const items16 = [tmp69, tmp70, tmp71];
  VoicePanelControlsTsx9.__closure = items16;
  VoicePanelControlsTsx9.__workletHash = 1613558861571;
  VoicePanelControlsTsx9.__initData = tmp68;
  const animatedReaction1 = require("module_1652").useAnimatedReaction(VoicePanelControlsTsx8, VoicePanelControlsTsx9);
  const tmpResult25 = require("module_1652");
  const isScreenReaderEnabled1 = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  const tmpResult26 = require("useIsScreenReaderEnabled");
  const context2 = obj2.useContext(tmp4(11924));
  ({ controlsSpecs: controlsSpecs3, windowDimensions: windowDimensions2, mode: mode2, setControlsMode: setControlsMode2, safeArea: safeArea2, connected } = context2);
  const tmp74 = useWindowDimensionsSharedValueDefault({ ignoreKeyboard: true });
  const items17 = [closure_35, connected, controlsSpecs3, mode2, windowDimensions2, tmp74, safeArea2];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  c5 = undefined;
  [tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82] = items17;
  class VoicePanelControlsTsx10 {
    constructor() {
      obj = { connected: closure_0.get(), currentControlsMode: closure_1.get().mode, mode: closure_2.get(), windowWidth: closure_3.get().width, windowHeight: closure_3.get().height, windowHeightIgnoringKeyboard: closure_4.get().height, controlsHeightValue: closure_1.get().height, safeArea: closure_5.get() };
      return obj;
    }
  }
  const items18 = [tmp77, tmp78, tmp79, tmp80, tmp81, tmp82];
  VoicePanelControlsTsx10.__closure = items18;
  VoicePanelControlsTsx10.__workletHash = 5812012898269;
  VoicePanelControlsTsx10.__initData = tmp76;
  const items19 = [closure_36, require("cheapWorkletShallowEqual").cheapWorkletShallowEqual, c11, sharedValue1, c15, require("module_1705").scheduleOnRN, setControlsMode2, isScreenReaderEnabled1, c13, require("VoicePanelControlsUtils").getControlsDefaultWidth, require("VoicePanelControlUtils").getDrawerSpec, require("VoicePanelControlsUtils").getControlsDrawerOpenWidth];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  [tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95] = items19;
  class VoicePanelControlsTsx11 {
    constructor(arg0, arg1) {
      tmp2 = arg1;
      tmp = closure_0;
      if (!tmp(gestureState, tmp2)) {
        ({ currentControlsMode, mode, windowWidth, controlsHeightValue, safeArea } = gestureState);
        tmp4 = closure_1;
        if (closure_1.DISMISSED !== mode) {
          if (tmp4.PIP !== mode) {
            PANEL = tmp4.PANEL;
            tmp26 = closure_3;
            if (closure_3.RESET === currentControlsMode) {
              currentControlsMode1 = undefined;
              tmp19 = closure_4;
              tmp20 = closure_5;
              if (arg1 != null) {
                currentControlsMode1 = arg1.currentControlsMode;
              }
              if (currentControlsMode1 == null) {
                currentControlsMode1 = tmp26.FLOATING_DEFAULT;
              }
              obj1 = { mode: null };
              obj1.mode = currentControlsMode1;
              tmp19Result = tmp19(tmp20, obj1);
              return;
            } else if (tmp26.HIDDEN === currentControlsMode) {
              tmp12 = closure_6;
              obj3 = closure_2;
              if (closure_6) {
                obj10 = {};
                tmp16 = obj10;
                merged = Object.assign(obj3.get());
                flag2 = false;
                obj10.hidden = false;
                result = obj3.set(obj10);
              } else if (!obj3.get().hidden) {
                obj11 = {};
                tmp13 = obj11;
                merged1 = Object.assign(obj3.get());
                flag = true;
                obj11.hidden = true;
                result1 = obj3.set(obj11);
              }
            } else if (tmp26.FLOATING_DEFAULT === currentControlsMode) {
              tmp7 = closure_2;
              size = { x: 0, y: null, width: null, height: null, drawerMode: false, hidden: false };
              tmp8 = globalThis;
              _Math = Math;
              tmp9 = closure_7;
              num2 = -1;
              size.y = -1 * Math.max(safeArea.bottom, closure_7);
              tmp10 = closure_8;
              size.width = closure_8(windowWidth, safeArea.left, safeArea.right);
              size.height = controlsHeightValue;
              result2 = closure_2.set(size);
            } else if (tmp26.DRAWER === currentControlsMode) {
              tmp27 = closure_9;
              tmp28 = closure_9(tmp3, safeArea.top);
              ({ minHeight, maxHeight } = tmp28);
              obj9 = closure_2;
              if (closure_2.get().height <= controlsHeightValue) {
                minHeight = maxHeight;
              } else if (null == arg1) {
                num = 2;
              }
              size1 = { x: 0, y: 0, width: null, height: null, drawerMode: true, hidden: false };
              tmp5 = closure_10;
              size1.width = closure_10(windowWidth, safeArea.left, safeArea.right);
              size1.height = minHeight;
              result3 = obj9.set(size1);
            }
          }
        }
        obj7 = closure_2;
        if (!closure_2.get().hidden) {
          obj12 = {};
          tmp23 = obj12;
          merged2 = Object.assign(obj7.get());
          flag3 = true;
          obj12.hidden = true;
          result4 = obj7.set(obj12);
        }
        return;
      }
      return;
    }
  }
  const items20 = [tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95];
  VoicePanelControlsTsx11.__closure = items20;
  VoicePanelControlsTsx11.__workletHash = 3913287750376;
  VoicePanelControlsTsx11.__initData = tmp84;
  const animatedReaction2 = require("module_1652").useAnimatedReaction(VoicePanelControlsTsx10, VoicePanelControlsTsx11);
  const tmp83 = c15;
  const tmpResult27 = require("module_1652");
  [tmp98, tmp99] = c3(noop.useState(false), 2);
  const tmp7Result = c3(noop.useState(false), 2);
  const items21 = [closure_44, controlsSpecs];
  _require = undefined;
  [tmp100, tmp101] = items21;
  class VoicePanelControlsTsx17 {
    constructor() {
      return closure_0.get().mode;
    }
  }
  const items22 = [tmp101];
  VoicePanelControlsTsx17.__closure = items22;
  VoicePanelControlsTsx17.__workletHash = 2590752982287;
  VoicePanelControlsTsx17.__initData = tmp100;
  const items23 = [closure_45, isScreenReaderEnabled, tmp83, require("module_1705").scheduleOnRN, tmp99];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp102, tmp103, tmp104, tmp105, tmp106] = items23;
  class VoicePanelControlsTsx18 {
    constructor(arg0, arg1) {
      tmp = gestureState !== arg1 && closure_0;
      if (tmp) {
        tmp2 = closure_1;
        if (gestureState === closure_1.DRAWER) {
          if (arg1 !== tmp2.DRAWER) {
            tmp7 = closure_2;
            tmp8 = closure_3;
            flag2 = true;
            tmp9 = closure_2(closure_3, true);
          }
        }
        tmp3 = gestureState !== tmp2.DRAWER && arg1 === tmp2.DRAWER;
        if (tmp3) {
          tmp4 = closure_2;
          tmp5 = closure_3;
          flag = false;
          tmp6 = closure_2(closure_3, false);
        }
      }
      return;
    }
  }
  const items24 = [tmp103, tmp104, tmp105, tmp106];
  VoicePanelControlsTsx18.__closure = items24;
  VoicePanelControlsTsx18.__workletHash = 11440892714817;
  VoicePanelControlsTsx18.__initData = tmp102;
  const animatedReaction3 = require("module_1652").useAnimatedReaction(VoicePanelControlsTsx17, VoicePanelControlsTsx18);
  const tmpResult28 = require("module_1652");
  [tmp109, tmp110] = c3(noop.useState(false), 2);
  const tmp7Result2 = c3(noop.useState(false), 2);
  const items25 = [closure_46, sharedValue1];
  _require = undefined;
  [tmp111, tmp112] = items25;
  class VoicePanelControlsTsx19 {
    constructor() {
      return closure_0.get().drawerMode;
    }
  }
  const items26 = [tmp112];
  VoicePanelControlsTsx19.__closure = items26;
  VoicePanelControlsTsx19.__workletHash = 16288224560950;
  VoicePanelControlsTsx19.__initData = tmp111;
  const items27 = [closure_47, require("module_1705").scheduleOnRN, tmp110];
  _require = undefined;
  importDefault = undefined;
  [tmp113, tmp114, tmp115] = items27;
  class VoicePanelControlsTsx20 {
    constructor(arg0, arg1) {
      if (gestureState !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, gestureState);
      }
      return;
    }
  }
  const items28 = [tmp114, tmp115];
  VoicePanelControlsTsx20.__closure = items28;
  VoicePanelControlsTsx20.__workletHash = 8307481518393;
  VoicePanelControlsTsx20.__initData = tmp113;
  const animatedReaction4 = require("module_1652").useAnimatedReaction(VoicePanelControlsTsx19, VoicePanelControlsTsx20);
  const items29 = [setControlsMode];
  const id = obj2.useId();
  const callback1 = obj2.useCallback(() => {
    _undefined3({ mode: constants.FLOATING_DEFAULT });
  }, items29);
  const obj7 = { value: memo, children: null };
  const items30 = [c18(VoicePanelControlsDimOverlayDefault, { wrapperSpecs: sharedValue1 }), c18(closure_37, { channelId, wrapperSpecs: sharedValue1, controlsSpecs, accessoryHeights: tmp16, gestureState }), ];
  const obj11 = { nativeID: id, style: tmp6.accessibilityWrapper, accessibilityViewIsModal: tmp98, onAccessibilityEscape: callback1, pointerEvents: "box-none", children: null };
  const tmpResult29 = require("module_1652");
  let obj12 = { gesture: memo1, children: null };
  const items31 = [tmp6.wrapper, animatedStyle, ];
  let tmp122;
  if (!isDockEnabled) {
    tmp122 = hiddenStyles;
  }
  const obj13 = { style: items31, animatedProps: hiddenProps, children: null };
  items31[2] = tmp122;
  let ONYX;
  if (tmp13) {
    if (!tmp109) {
      ONYX = c17.ONYX;
    }
  }
  const obj14 = { theme: ONYX, children: null };
  const items32 = [c18(require("VoicePanelVisualEffectView").VoicePanelVisualEffectView, { matchAppTheme: !tmp13 }), c18(closure_39, { openTab: callback, wrapperSpecs: sharedValue1, sharedTab: sharedValue })];
  obj14.children = items32;
  const items33 = [closure_20(require("native").ThemeContextProvider, obj14), c18(VoicePanelControlsDrawerDefault, { wrapperSpecs: sharedValue1, tab: first, sharedTab: sharedValue, gestureSpecs: sharedValue3, openTab: callback }), ];
  const obj15 = { matchAppTheme: !tmp13 };
  const tmp4Result = VoicePanelAccessibilityViewDefault;
  let tmp120Result = null;
  if (!tmpResult30.isMetaQuest()) {
    const obj16 = { openTab: callback };
    tmp120Result = tmp120(closure_25, obj16);
  }
  items33[2] = tmp120Result;
  obj13.children = items33;
  obj12.children = closure_20(_modDef1652.View, obj13);
  obj11.children = c18(require("LegacyBaseButton").GestureDetector, obj12);
  items30[2] = c18(tmp4Result, obj11);
  obj7.children = items30;
  return closure_20(require("useAnimatedScrollLock").ControlsGestureScrollLock.Provider, obj7);
});