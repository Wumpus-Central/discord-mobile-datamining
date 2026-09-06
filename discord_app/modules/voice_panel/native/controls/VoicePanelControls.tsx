// === Module 17169: VoicePanelControls ===

// Module 17169 (VoicePanelControls)
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import native from "native" /* 4271 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import spring from "spring" /* 4974 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;
import native2 from "native" /* 8902 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 9495 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10993 */;
import createUseAnimatedScrollLock from "createUseAnimatedScrollLock" /* 12103 */;
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs" /* 12277 */;
import VoicePanelControlsUtils from "VoicePanelControlsUtils" /* 12279 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 17054 */;
import useControlsLockDefault from "useControlsLock" /* 17095 */;
import useDrawerToggleDefault from "useDrawerToggle" /* 17170 */;
import trackVoicePanelTabOpened from "trackVoicePanelTabOpened" /* 17171 */;
import useConsoleConnectingInfoDefault from "useConsoleConnectingInfo" /* 17173 */;
import VoicePanelConsoleStatus from "VoicePanelConsoleStatus" /* 17179 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const VoicePanelConstants = fn(12273);
({ UI_SHOW_HIDE_PHYSICS: closure_7, MODE_CHANGE_PHYSICS: closure_8, BORDER_RADIUS_PHYSICS: closure_9, PANEL_CONTROLS_HEIGHT_PHYSICS: c10, VoicePanelModes: closure_11 } = VoicePanelConstants);
const VoicePanelCardConstants = fn(12276);
({ CALL_TILE_GUTTER: closure_12, EDGE_GUTTER: map1 } = VoicePanelCardConstants);
const VoicePanelControlsConstants = fn(12271);
({ CONTROLS_DRAWER_HEADER_EXPANDED_SIZE: closure_14, VoicePanelControlsModes: closure_15 } = VoicePanelControlsConstants);
const Constants = fn(1074);
({ ComponentActions: closure_16, ThemeTypes: closure_17 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = jsxProd);
const createStyles = fn(4560);
let obj = { accessibilityWrapper: null, wrapper: null, buttonsWrapper: null, actionSheetDragHandleWrapper: null };
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.zIndex = 1;
obj.accessibilityWrapper = obj;
let rect = { position: "absolute", bottom: 0, left: "50%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS };
obj.wrapper = rect;
const rect1 = { position: "absolute", left: 0, right: 0, zIndex: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: nativeDefault.space.PX_16 };
obj.buttonsWrapper = rect1;
obj.actionSheetDragHandleWrapper = { position: "absolute", top: 0, left: 0, right: 0, zIndex: 21 };
let closure_21 = createStyles.createStyles(obj);
let c22 = 200;
let c23 = 200;
const MetaQuestUtils = fn(1608);
let closure_25 = noop.memo((openTab) => {
  const tmp = closure_21();
  const tmp2 = useDrawerToggleDefault(openTab.openTab);
  ({ handlePress, accessibilityLabel, ariaHidden } = tmp2);
  return collapsedCategories(hasOwnProperty, { style: tmp.actionSheetDragHandleWrapper, children: collapsedCategories(native2.ActionSheetDragHandle, { onPress: handlePress, overlay: true, accessibilityLabel, "aria-hidden": ariaHidden }) });
});
let closure_26 = { code: "function VoicePanelControlsTsx1(){const{scrollLock,isDragScrolling,runOnJS,gestureLock}=this.__closure;scrollLock.set(false);isDragScrolling.set(false);runOnJS(gestureLock.unlock)();}" };
let closure_27 = { code: "function VoicePanelControlsTsx2({velocityY:velocityY}){const{wrapperSpecs,wrapperDimensions,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,controlsSpecs,VoicePanelControlsModes,gestureSpecs,scrollLock,isDragScrolling,runOnJS,gestureLock}=this.__closure;const absoluteVelocity=Math.abs(velocityY);let resultingControlMode;if(absoluteVelocity>200&&velocityY<0){wrapperSpecs.set({...wrapperSpecs.get(),height:wrapperDimensions.get().drawerHeight-calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height});if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.DRAWER;}}else if(absoluteVelocity<200&&gestureSpecs.get().isDrawer){if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.DRAWER;}}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.FLOATING_DEFAULT;}}scrollLock.set(false);isDragScrolling.set(false);runOnJS(gestureLock.unlock)(resultingControlMode);}" };
let closure_28 = { code: "function VoicePanelControlsTsx3(){const{scrollLock,isDragScrolling,gestureSpecs,runOnJS,gestureLock}=this.__closure;console.log('ZZZZZ - ControlsGesture.onTouchesCancelled');scrollLock.set(false);isDragScrolling.set(false);gestureSpecs.set({...gestureSpecs.get(),active:false});runOnJS(gestureLock.unlock)();}" };
let closure_29 = { code: "function VoicePanelControlsTsx4(event){const{gestureSpecs,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,wrapperSpecs,getControlsDrawerOpenWidth,windowDimensions,wrapperDimensions,controlsSpecs,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,getControlsDefaultWidth}=this.__closure;const change=event.absoluteY-gestureSpecs.get().absoluteY;const newHeight=gestureSpecs.get().height-gestureSpecs.get().y-change;if(newHeight>gestureSpecs.get().drawerTransitionHeight){if(!gestureSpecs.get().isDrawer){gestureSpecs.set({...gestureSpecs.get(),isDrawer:true});}const headerHeight=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height;wrapperSpecs.set({...wrapperSpecs.get(),x:0,y:0,width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:Math.min(newHeight,wrapperDimensions.get().drawerHeight-headerHeight),drawerMode:true});}else{const progress=newHeight/gestureSpecs.get().drawerTransitionHeight;const floatingHeight=controlsSpecs.get().height;const yOffset=Math.max(newHeight-safeArea.get().bottom-floatingHeight,0)*-1;const newChange=yOffset*(1-progress/1.5);if(gestureSpecs.get().isDrawer){gestureSpecs.set({...gestureSpecs.get(),isDrawer:false});}if(floatingHeight!==wrapperSpecs.get().height&&!wrapperSpecs.get().drawerMode){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}wrapperSpecs.set({...wrapperSpecs.get(),x:0,y:safeArea.get().bottom*-1+newChange,width:getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:floatingHeight,drawerMode:false});}}" };
let closure_30 = { code: "function VoicePanelControlsTsx5(event,manager){const{State,gestureSpecs,controlsSpecs,VoicePanelControlsModes,touchMoveCount,SCROLL_BEGIN_GRACE_TICKS,isDragScrolling,sharedTab,scrollOffsetValue,GESTURE_VERTICAL_MINIMUM,wrapperSpecs,TRANSITIONAL_HEIGHT,INTER_FLOATING_TRANSITIONAL_HEIGHT,tab,runOnJS,openTab,VoicePanelTabAnalyticsSources,scrollLock}=this.__closure;if(event.state!==State.BEGAN||gestureSpecs.get().active)return;if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){manager.fail();return;}touchMoveCount.set(touchMoveCount.get()+1);const isDragging=touchMoveCount.get()<=SCROLL_BEGIN_GRACE_TICKS?true:isDragScrolling.get();const scrollOffset=function(){switch(sharedTab.get()){case'settings':case'app_launcher':return scrollOffsetValue.get();default:return 0;}}();const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const computed=gestureSpecs.get().absoluteY-absoluteY;if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER&&isDragging&&(computed>=0||scrollOffset>0)){return;}if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT&&computed>GESTURE_VERTICAL_MINIMUM||controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER&&(computed<-GESTURE_VERTICAL_MINIMUM||computed>GESTURE_VERTICAL_MINIMUM)){gestureSpecs.set({absoluteX:absoluteX,absoluteY:absoluteY,x:wrapperSpecs.get().x,y:wrapperSpecs.get().y,height:wrapperSpecs.get().height,isDrawer:controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER,active:true,drawerTransitionHeight:TRANSITIONAL_HEIGHT,interFloatingTransitionHeight:INTER_FLOATING_TRANSITIONAL_HEIGHT});if(controlsSpecs.get().mode!==VoicePanelControlsModes.DRAWER&&tab!=='settings'){runOnJS(openTab)({tab:'settings',source:VoicePanelTabAnalyticsSources.GESTURE,disableControlsUpdate:true});}scrollLock.set(true);manager.activate();}else if(Math.abs(computed)>Math.abs(GESTURE_VERTICAL_MINIMUM)){manager.fail();}}" };
let closure_31 = { code: "function VoicePanelControlsTsx6(){const{runOnJS,gestureLock}=this.__closure;runOnJS(gestureLock.lock)();}" };
let closure_32 = { code: "function VoicePanelControlsTsx7(event){const{touchMoveCount,gestureSpecs,wrapperSpecs,controlsSpecs,VoicePanelControlsModes,TRANSITIONAL_HEIGHT,INTER_FLOATING_TRANSITIONAL_HEIGHT}=this.__closure;touchMoveCount.set(0);gestureSpecs.set({absoluteX:event.changedTouches[0].absoluteX,absoluteY:event.changedTouches[0].absoluteY,x:wrapperSpecs.get().x,y:wrapperSpecs.get().y,height:wrapperSpecs.get().height,isDrawer:controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER,active:false,drawerTransitionHeight:TRANSITIONAL_HEIGHT,interFloatingTransitionHeight:INTER_FLOATING_TRANSITIONAL_HEIGHT});}" };
const __initData = { code: "function VoicePanelControlsTsx8(){const{wrapperSpecs}=this.__closure;return wrapperSpecs.get().drawerMode;}" };
const __initData2 = { code: "function VoicePanelControlsTsx9(current,previous){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current===previous)return;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}" };
const __initData3 = { code: "function VoicePanelControlsTsx10(){const{connected,controlsSpecs,mode,windowDimensions,windowDimensionsIgnoringKeyboard,safeArea}=this.__closure;return{connected:connected.get(),currentControlsMode:controlsSpecs.get().mode,mode:mode.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,windowHeightIgnoringKeyboard:windowDimensionsIgnoringKeyboard.get().height,controlsHeightValue:controlsSpecs.get().height,safeArea:safeArea.get()};}" };
const __initData4 = { code: "function VoicePanelControlsTsx11(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,wrapperSpecs,VoicePanelControlsModes,runOnJS,setControlsMode,isScreenReaderEnabled,EDGE_GUTTER,getControlsDefaultWidth,getDrawerSpec,getControlsDrawerOpenWidth}=this.__closure;var _previous$currentCont;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{currentControlsMode:currentControlsMode,mode:mode,windowWidth:windowWidth,windowHeightIgnoringKeyboard:windowHeightIgnoringKeyboard,controlsHeightValue:controlsHeightValue,safeArea:safeArea}=props;switch(mode){case VoicePanelModes.DISMISSED:case VoicePanelModes.PIP:if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}return;case VoicePanelModes.PANEL:default:break;}switch(currentControlsMode){case VoicePanelControlsModes.RESET:runOnJS(setControlsMode)({mode:(_previous$currentCont=previous===null||previous===void 0?void 0:previous.currentControlsMode)!==null&&_previous$currentCont!==void 0?_previous$currentCont:VoicePanelControlsModes.FLOATING_DEFAULT});return;case VoicePanelControlsModes.HIDDEN:if(isScreenReaderEnabled){wrapperSpecs.set({...wrapperSpecs.get(),hidden:false});break;}if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}break;case VoicePanelControlsModes.FLOATING_DEFAULT:wrapperSpecs.set({x:0,y:Math.max(safeArea.bottom,EDGE_GUTTER)*-1,width:getControlsDefaultWidth(windowWidth,safeArea.left,safeArea.right),height:controlsHeightValue,drawerMode:false,hidden:false});break;case VoicePanelControlsModes.DRAWER:const{minHeight:minHeight,maxHeight:maxHeight}=getDrawerSpec(windowHeightIgnoringKeyboard,safeArea.top);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(wrapperSpecs.get().height<=controlsHeightValue){height=maxHeight;}else if(previous!=null&&wrapperSpecs.get().height===getDrawerSpec(previous.windowHeight,previous.safeArea.top).maxHeight){height=maxHeight;}else if(wrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=minHeight;}wrapperSpecs.set({x:0,y:0,width:getControlsDrawerOpenWidth(windowWidth,safeArea.left,safeArea.right),height:height,drawerMode:true,hidden:false});break;}}" };
let closure_37 = noop.memo((controlsSpecs) => {
  ({ channelId, wrapperSpecs } = controlsSpecs);
  controlsSpecs = controlsSpecs.controlsSpecs;
  const accessoryHeights = controlsSpecs.accessoryHeights;
  const gestureState = controlsSpecs.gestureState;
  let obj = VoicePanelFloatingCTAUtils;
  const shouldShowFloatingCTA = obj.useShouldShowFloatingCTA(channelId);
  const tmp4 = useControlsLockDefault();
  closure_4 = tmp4;
  const tmp5 = useConsoleConnectingInfoDefault(channelId);
  const isConnectingToConsole = tmp5.isConnectingToConsole;
  const items = [wrapperSpecs, controlsSpecs, accessoryHeights, gestureState];
  const memo = noop.useMemo(() => ({ wrapperSpecs, controlsSpecs, accessoryHeights, gestureState }), items);
  const items1 = [isConnectingToConsole, tmp4];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (isConnectingToConsole) {
      obj.lock();
    } else {
      obj.unlock();
    }
  }, items1);
  let tmp11;
  if (shouldShowFloatingCTA) {
    tmp11 = memo;
  }
  obj = { item: tmp11, renderItem: tmp(17177).renderVoicePanelFloatingCTA };
  const items2 = [collapsedCategories(native.TransitionItem, obj), ];
  let tmp12;
  if (tmp5.isConnectingOrConnectedToConsole) {
    tmp12 = memo;
  }
  obj = { children: null };
  items2[1] = collapsedCategories(native.TransitionItem, { item: tmp12, renderItem: VoicePanelConsoleStatus.renderVoicePanelConsoleStatus });
  obj.children = items2;
  return closure_1_20(closure_1_19, obj);
});
const __initData5 = { code: "function VoicePanelControlsTsx12(){const{controlsSpecs,connected,sharedTab,wrapperSpecs,TRANSITIONAL_HEIGHT,CONTROLS_DRAWER_HEADER_EXPANDED_SIZE,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const showPushToTalkText=controlsSpecs.get().pushToTalk&&connected.get();const height=sharedTab.get()==='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?CONTROLS_DRAWER_HEADER_EXPANDED_SIZE:controlsSpecs.get().height;const translateY=function(){return sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?-controlsSpecs.get().height:0;}();return{top:showPushToTalkText?-4:0,height:withSpring(height,MODE_CHANGE_PHYSICS),opacity:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0:1,MODE_CHANGE_PHYSICS),transform:[{translateY:withSpring(translateY,MODE_CHANGE_PHYSICS)},{scale:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0.95:1,MODE_CHANGE_PHYSICS)}]};}" };
let closure_39 = noop.memo(function VoicePanelButtonsInner(sharedTab) {
  ({ openTab: require, wrapperSpecs } = sharedTab);
  sharedTab = sharedTab.sharedTab;
  let controlsSpecs;
  const ref = controlsSpecs.useRef(true);
  const tmp2 = wrapperSpecs(sharedTab[33])(ref);
  const context = controlsSpecs.useContext(wrapperSpecs(sharedTab[14]));
  controlsSpecs = context.controlsSpecs;
  const connected = context.connected;
  const tmp3 = closure_21();
  require("ReanimatedRexport");
  const fn = function c() {
    let obj = controlsSpecs;
    let pushToTalk = controlsSpecs.get().pushToTalk;
    if (pushToTalk) {
      pushToTalk = connected.get();
    }
    let obj1 = sharedTab;
    if ("settings" === sharedTab.get()) {
      if (wrapperSpecs.get().height >= c22) {
        let height = CONTROLS_DRAWER_HEADER_EXPANDED_SIZE;
      }
      num = 0;
      if ("settings" !== obj1.get()) {
        num = 0;
        if (wrapperSpecs.get().height >= c22) {
          num = -obj.get().height;
        }
      }
      let num2 = 0;
      if (pushToTalk) {
        num2 = -4;
      }
      obj = { top: num2, height: spring.withSpring(height, MODE_CHANGE_PHYSICS), opacity: null, transform: null };
      let num4 = 1;
      if ("settings" !== obj1.get()) {
        num4 = 1;
        if (wrapperSpecs.get().height >= c22) {
          num4 = 0;
        }
      }
      obj.opacity = spring.withSpring(num4, MODE_CHANGE_PHYSICS);
      obj = { translateY: null };
      let tmp6Result = tmp6(4974);
      obj.translateY = tmp6Result.withSpring(num, MODE_CHANGE_PHYSICS);
      const items = [obj, ];
      tmp6Result = tmp6(4974);
      let num5 = 1;
      if ("settings" !== obj1.get()) {
        num5 = 1;
        if (wrapperSpecs.get().height >= c22) {
          num5 = 0.95;
        }
      }
      obj1 = { scale: tmp6Result.withSpring(num5, MODE_CHANGE_PHYSICS) };
      items[1] = obj1;
      obj.transform = items;
      return obj;
    }
    height = obj.get().height;
  };
  let obj = { controlsSpecs, connected, sharedTab, wrapperSpecs, TRANSITIONAL_HEIGHT: v200, CONTROLS_DRAWER_HEADER_EXPANDED_SIZE, withSpring: require("spring").withSpring, MODE_CHANGE_PHYSICS };
  fn.__closure = obj;
  fn.__workletHash = 17578996123721;
  fn.__initData = __initData5;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const effect = controlsSpecs.useEffect(() => {
    ref.current = false;
  }, []);
  obj = { skipEntering: tmp2, children: null };
  let obj1 = { style: null, children: null };
  let items = [tmp3.buttonsWrapper, animatedStyle];
  obj1.style = items;
  const arr = wrapperSpecs(sharedTab[34])();
  obj1.children = arr.map((props) => props.render(props.key, { props, openTab, wrapperSpecs }));
  obj.children = closure_18(wrapperSpecs(sharedTab[36]), obj1);
  return closure_18(require("ReanimatedRexport").LayoutAnimationConfig, obj);
});
const __initData6 = { code: "function VoicePanelControlsTsx13(){const{withSpring,wrapperSpecs,borderRadius,BORDER_RADIUS_PHYSICS,PANEL_CONTROLS_HEIGHT_PHYSICS,MODE_CHANGE_PHYSICS,roundToNearestPixel,UI_SHOW_HIDE_PHYSICS,gestureState,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;return{borderBottomRightRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),borderBottomLeftRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),height:withSpring(wrapperSpecs.get().height,PANEL_CONTROLS_HEIGHT_PHYSICS),width:withSpring(wrapperSpecs.get().width,MODE_CHANGE_PHYSICS),marginLeft:withSpring(roundToNearestPixel(wrapperSpecs.get().width/2)*-1,MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}" };
const __initData7 = { code: "function VoicePanelControlsTsx14(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}" };
const __initData8 = { code: "function VoicePanelControlsTsx15(mode,previousMode){const{isScreenReaderEnabled,VoicePanelControlsModes,runOnJS,setIsDrawer}=this.__closure;if(mode===previousMode||!isScreenReaderEnabled)return;if(mode===VoicePanelControlsModes.DRAWER&&previousMode!==VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(true);}else if(mode!==VoicePanelControlsModes.DRAWER&&previousMode===VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(false);}}" };
const __initData9 = { code: "function VoicePanelControlsTsx16(){const{wrapperSpecs}=this.__closure;return wrapperSpecs.get().drawerMode;}" };
const __initData10 = { code: "function VoicePanelControlsTsx17(drawerMode,previousDrawerMode){const{runOnJS,setIsDrawerActive}=this.__closure;if(drawerMode===previousDrawerMode)return;if(drawerMode){runOnJS(setIsDrawerActive)(true);}else{runOnJS(setIsDrawerActive)(false);}}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControls.tsx");

export default noop.memo(function VoicePanelControls(gestureState) {
  gestureState = gestureState.gestureState;
  let channelId;
  let setControlsMode;
  CALL_TILE_GUTTER = undefined;
  EDGE_GUTTER = undefined;
  let obj = gestureState(channelId[24]);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const context = setControlsMode.useContext(isScreenReaderEnabled(channelId[14]));
  channelId = context.channelId;
  const controlsSpecs = context.controlsSpecs;
  setControlsMode = context.setControlsMode;
  let tmp6 = closure_21();
  const tmp7 = controlsSpecs(setControlsMode.useState(null), 2);
  const tab = tmp7[0];
  let obj1 = gestureState(channelId[15]);
  const sharedValue = obj1.useSharedValue(tab);
  const layoutEffect = setControlsMode.useLayoutEffect(() => {
    const result = sharedValue.set(first);
  });
  const tmp11 = isScreenReaderEnabled(channelId[37])(channelId);
  let obj2 = gestureState(channelId[38]);
  const maybeFetchSoundboardSounds = obj2.useMaybeFetchSoundboardSounds({ shouldFetch: tmp11 });
  let items = [channelId, controlsSpecs, setControlsMode];
  const openTab = setControlsMode.useCallback((controlsProps) => {
    ({ tab: gestureState, source: isScreenReaderEnabled, disableControlsUpdate } = controlsProps);
    if (disableControlsUpdate === undefined) {
      disableControlsUpdate = false;
    }
    controlsProps = controlsProps.controlsProps;
    gestureState(channelId[39]).batchUpdates(() => {
      closure_0 = false;
      wrapperDimensions((arg0) => {
        closure_0 = arg0 !== gestureState;
        return gestureState;
      });
      if (!disableControlsUpdate) {
        const obj = { mode: edgeGutter.DRAWER };
        const merged = Object.assign(controlsProps);
        setControlsMode(obj);
      }
      let tmp8 = closure_0;
      if (!closure_0) {
        tmp8 = controlsProps.get().mode !== edgeGutter.DRAWER;
      }
      if (tmp8) {
        isScreenReaderEnabled(channelId[20])(disableControlsUpdate, closure_0, closure_1);
      }
    });
  }, items);
  const tmp14 = isScreenReaderEnabled(channelId[40])();
  BORDER_RADIUS_PHYSICS = tmp14;
  const items1 = [channelId, controlsSpecs, openTab, tab];
  const layoutEffect1 = setControlsMode.useLayoutEffect(() => {
    function handleStoreChange() {
      chatOpen = ChannelRTCStore.getChatOpen(channelId);
      if (chatOpen !== chatOpen) {
        if (chatOpen) {
          const obj = { tab: "chat", source: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources.STORE, controlsProps: { debounce: true } };
          callback(obj);
        }
      }
    }
    let obj = wrapperDimensions;
    let chatOpen = wrapperDimensions.getChatOpen(channelId);
    if (chatOpen !== chatOpen) {
      if (chatOpen) {
        obj = { tab: "chat", source: gestureState(channelId[20]).VoicePanelTabAnalyticsSources.STORE, controlsProps: { debounce: true } };
        callback(obj);
      }
    }
    obj.addChangeListener(handleStoreChange);
    return () => {
      ChannelRTCStore.removeChangeListener(handleStoreChange);
    };
  }, items1);
  const items2 = [openTab];
  const effect = setControlsMode.useEffect(() => {
    function handleOpenChatTab() {
      callback({ tab: "chat", source: gestureState(channelId[20]).VoicePanelTabAnalyticsSources.HEADER_BUTTON });
    }
    let ComponentDispatch = gestureState(channelId[41]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
    return () => {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(constants2.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
    };
  }, items2);
  let obj3 = gestureState(channelId[42]);
  const rect = obj3.getSafeAreaInsets();
  let obj4 = gestureState(channelId[15]);
  let size = { width: null, height: 0, x: 0, y: 0, drawerMode: false, hidden: false };
  let obj6 = gestureState(channelId[22]);
  let obj7 = gestureState(channelId[43]);
  size.width = obj6.getControlsDefaultWidth(obj7.getWindowDimensions().width, rect.left, rect.right);
  const sharedValue1 = obj4.useSharedValue(size);
  let obj8 = gestureState(channelId[18]);
  const token = obj8.useToken(isScreenReaderEnabled(channelId[10]).modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS);
  let obj9 = gestureState(channelId[15]);
  function ie() {
    let obj = spring;
    num = 0;
    if (!sharedValue1.get().drawerMode) {
      num = token;
    }
    const size = { borderBottomRightRadius: obj.withSpring(num, BORDER_RADIUS_PHYSICS), borderBottomLeftRadius: null, height: null, width: null, marginLeft: null, transform: null };
    let tmpResult = tmp(4974);
    let num2 = 0;
    if (!sharedValue1.get().drawerMode) {
      num2 = token;
    }
    size.borderBottomLeftRadius = tmpResult.withSpring(num2, BORDER_RADIUS_PHYSICS);
    tmpResult = tmp(4974);
    size.height = tmpResult.withSpring(sharedValue1.get().height, closure_2_10);
    size.width = spring.withSpring(sharedValue1.get().width, MODE_CHANGE_PHYSICS);
    const tmpResult1 = spring;
    const tmpResult2 = spring;
    size.marginLeft = tmpResult2.withSpring(-1 * roundToNearestPixelDefault(sharedValue1.get().width / 2), MODE_CHANGE_PHYSICS);
    obj = { translateX: null };
    obj.translateX = spring.withSpring(sharedValue1.get().x, React5);
    const items = [obj, ];
    const tmp5 = React5;
    const tmpResult3 = spring;
    if (sharedValue1.get().hidden) {
      const sum = obj2.get().height + CALL_TILE_GUTTER;
      let y = sum + touchMoveCount.get();
    } else {
      y = obj2.get().y;
    }
    obj = { translateY: spring.withSpring(y, tmp5) };
    items[1] = obj;
    size.transform = items;
    return size;
  }
  obj = { withSpring: gestureState(channelId[35]).withSpring, wrapperSpecs: sharedValue1, borderRadius: token, BORDER_RADIUS_PHYSICS, PANEL_CONTROLS_HEIGHT_PHYSICS: sharedValue1, MODE_CHANGE_PHYSICS: openTab, roundToNearestPixel: isScreenReaderEnabled(channelId[44]), UI_SHOW_HIDE_PHYSICS: sharedValue, gestureState, CALL_TILE_GUTTER, accessoryHeights: tmp14 };
  ie.__closure = obj;
  ie.__workletHash = 1684143820585;
  ie.__initData = __initData6;
  const animatedStyle = obj9.useAnimatedStyle(ie);
  closure_129_0 = tab;
  closure_129_1 = sharedValue;
  closure_129_2 = sharedValue1;
  closure_129_3 = openTab;
  ({ hiddenProps, hiddenStyles } = isScreenReaderEnabled(channelId[45])(context.mode, sharedValue1));
  const context1 = setControlsMode.useContext(isScreenReaderEnabled(channelId[14]));
  const controlsSpecs2 = context1.controlsSpecs;
  closure_129_4 = controlsSpecs2;
  const windowDimensions = context1.windowDimensions;
  closure_129_5 = windowDimensions;
  const wrapperDimensions = context1.wrapperDimensions;
  closure_129_6 = wrapperDimensions;
  const safeArea = context1.safeArea;
  closure_129_7 = safeArea;
  const tmp20 = isScreenReaderEnabled(channelId[45])(context.mode, sharedValue1);
  let tmp4 = isScreenReaderEnabled;
  let point = { absoluteX: 0, absoluteY: 0, x: 0, y: 0, height: 0, isDrawer: false, active: false, drawerTransitionHeight: v200, interFloatingTransitionHeight };
  const sharedValue2 = gestureState(channelId[15]).useSharedValue(point);
  closure_129_8 = sharedValue2;
  const obj12 = gestureState(channelId[15]);
  const sharedValue3 = gestureState(channelId[15]).useSharedValue(0);
  closure_129_9 = sharedValue3;
  const obj14 = gestureState(channelId[15]);
  const sharedValue4 = gestureState(channelId[15]).useSharedValue(false);
  closure_129_10 = sharedValue4;
  const obj15 = gestureState(channelId[15]);
  const sharedValue5 = gestureState(channelId[15]).useSharedValue(0);
  closure_129_11 = sharedValue5;
  closure_129_12 = setControlsMode.useRef(undefined);
  const obj16 = gestureState(channelId[15]);
  const sharedValue6 = gestureState(channelId[15]).useSharedValue(false);
  closure_129_13 = sharedValue6;
  const tmp27 = isScreenReaderEnabled(channelId[17])();
  closure_129_14 = tmp27;
  const obj17 = gestureState(channelId[15]);
  const token1 = gestureState(channelId[18]).useToken(isScreenReaderEnabled(channelId[10]).modules.mobile.VOICE_PANEL_GUTTER);
  closure_129_15 = token1;
  const items3 = [controlsSpecs2, tmp27, sharedValue2, sharedValue4, openTab, safeArea, sharedValue6, sharedValue5, sharedValue, tab, sharedValue3, windowDimensions, wrapperDimensions, sharedValue1, token1];
  const memo = setControlsMode.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const manualActivationResult = Gesture.Pan().manualActivation(true);
    let result = Gesture.Pan().manualActivation(true).maxPointers(1).shouldCancelWhenOutside(false);
    const maxPointersResult = Gesture.Pan().manualActivation(true).maxPointers(1);
    const fn = function b(absoluteX) {
      const result = touchMoveCount.set(0);
      const point = { absoluteX: absoluteX.changedTouches[0].absoluteX, absoluteY: absoluteX.changedTouches[0].absoluteY, x: channelId.get().x, y: channelId.get().y, height: channelId.get().height, isDrawer: setControlsMode.get().mode === edgeGutter.DRAWER, active: false, drawerTransitionHeight, interFloatingTransitionHeight };
      const result1 = callback.set(point);
    };
    let obj = { touchMoveCount, gestureSpecs, wrapperSpecs: channelId, controlsSpecs: setControlsMode, VoicePanelControlsModes, TRANSITIONAL_HEIGHT, INTER_FLOATING_TRANSITIONAL_HEIGHT };
    fn.__closure = obj;
    fn.__workletHash = 3524850376026;
    fn.__initData = __initData7;
    const withRefResult = result.withRef(closure_12);
    class R {
      constructor() {
        obj = gestureState(channelId[15]);
        tmp = obj.runOnJS(closure_1_14.lock)();
        return;
      }
    }
    obj = { runOnJS: ReanimatedRexport.runOnJS, gestureLock };
    R.__closure = obj;
    R.__workletHash = 11720944776433;
    R.__initData = __initData6;
    const onTouchesDownResult = result.withRef(closure_12).onTouchesDown(fn);
    const fn2 = function p(state, fail) {
      if (state.state === gestureState(channelId[19]).State.BEGAN) {
        if (!callback.get().active) {
          let obj = setControlsMode;
          if (setControlsMode.get().mode !== edgeGutter.HIDDEN) {
            const result = touchMoveCount.set(touchMoveCount.get() + 1);
            value = touchMoveCount.get() <= num;
            if (!value) {
              value = sharedValue1.get();
            }
            value = isScreenReaderEnabled.get();
            if ("settings" === value) {
              let num2 = token.get();
            } else {
              num2 = 0;
            }
            ({ absoluteY, absoluteX } = state.changedTouches[0]);
            const diff = obj5.get().absoluteY - absoluteY;
            let tmp15 = obj.get().mode === tmp4.DRAWER && value;
            if (tmp15) {
              tmp15 = diff >= 0 || num2 > 0;
              const tmp16 = diff >= 0 || num2 > 0;
            }
            if (!tmp15) {
              if (obj.get().mode !== tmp4.FLOATING_DEFAULT) {
                const _Math = Math;
                const _Math2 = Math;
                const absolute = Math.abs(diff);
                if (absolute > Math.abs(30)) {
                  fail.fail();
                }
              }
              const point = { absoluteX, absoluteY, x: closure_1_2.get().x, y: closure_1_2.get().y, height: closure_1_2.get().height, isDrawer: obj.get().mode === tmp4.DRAWER, active: true, drawerTransitionHeight, interFloatingTransitionHeight };
              const result1 = obj5.set(point);
              let tmp23 = obj.get().mode !== tmp4.DRAWER;
              if (tmp23) {
                tmp23 = "settings" !== closure_1_0;
              }
              if (tmp23) {
                obj = { tab: "settings", source: null, disableControlsUpdate: true };
                const tmpResult = tmp(tmp2[15]);
                obj.source = tmp(tmp2[20]).VoicePanelTabAnalyticsSources.GESTURE;
                tmp(tmp2[15]).runOnJS(controlsSpecs)(obj);
                const runOnJSResult = tmp(tmp2[15]).runOnJS(controlsSpecs);
              }
              const result2 = scrollLock.set(true);
              fail.activate();
            }
          } else {
            fail.fail();
          }
        }
      }
    };
    const onStartResult = result.withRef(closure_12).onTouchesDown(fn).onStart(R);
    fn2.__closure = { State: LegacyBaseButton.State, gestureSpecs, controlsSpecs: setControlsMode, VoicePanelControlsModes, touchMoveCount, SCROLL_BEGIN_GRACE_TICKS: num, isDragScrolling: sharedValue1, sharedTab: isScreenReaderEnabled, scrollOffsetValue: token, GESTURE_VERTICAL_MINIMUM: 30, wrapperSpecs: channelId, TRANSITIONAL_HEIGHT, INTER_FLOATING_TRANSITIONAL_HEIGHT, tab: gestureState, runOnJS: ReanimatedRexport.runOnJS, openTab: controlsSpecs, VoicePanelTabAnalyticsSources: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources, scrollLock };
    fn2.__workletHash = 13965683053434;
    fn2.__initData = __initData5;
    let obj1 = { State: LegacyBaseButton.State, gestureSpecs, controlsSpecs: setControlsMode, VoicePanelControlsModes, touchMoveCount, SCROLL_BEGIN_GRACE_TICKS: num, isDragScrolling: sharedValue1, sharedTab: isScreenReaderEnabled, scrollOffsetValue: token, GESTURE_VERTICAL_MINIMUM: 30, wrapperSpecs: channelId, TRANSITIONAL_HEIGHT, INTER_FLOATING_TRANSITIONAL_HEIGHT, tab: gestureState, runOnJS: ReanimatedRexport.runOnJS, openTab: controlsSpecs, VoicePanelTabAnalyticsSources: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources, scrollLock };
    const fn3 = function h(absoluteY) {
      let obj = callback;
      const diff = absoluteY.absoluteY - callback.get().absoluteY;
      const diff1 = callback.get().height - callback.get().y - diff;
      if (diff1 > callback.get().drawerTransitionHeight) {
        if (!obj.get().isDrawer) {
          obj = {};
          const merged = Object.assign(obj.get());
          obj.isDrawer = true;
          const result = obj.set(obj);
        }
        obj = {};
        const merged1 = Object.assign(closure_1_2.get());
        obj.x = 0;
        obj.y = 0;
        const tmp26 = isScreenReaderEnabled(channelId[21]);
        obj.width = gestureState(channelId[22]).getControlsDrawerOpenWidth(first.get().width, sharedValue.get().left, sharedValue.get().right);
        const _Math = Math;
        obj.height = Math.min(diff1, wrapperDimensions.get().drawerHeight - tmp26(sharedValue.get(), edgeGutter).height);
        obj.drawerMode = true;
        const result1 = closure_1_2.set(obj);
        const obj9 = gestureState(channelId[22]);
      } else {
        const result2 = diff1 / obj.get().drawerTransitionHeight;
        const height = setControlsMode.get().height;
        const _Math2 = Math;
        const result3 = -1 * Math.max(diff1 - sharedValue.get().bottom - height, 0);
        if (obj.get().isDrawer) {
          const obj1 = {};
          const merged2 = Object.assign(obj.get());
          obj1.isDrawer = false;
          const result4 = obj.set(obj1);
        }
        let obj2 = closure_1_2;
        if (!tmp6) {
          const obj4 = gestureState(channelId[15]);
          gestureState(channelId[15]).runOnJS(gestureState(channelId[23]).triggerHapticFeedback)(gestureState(channelId[23]).HapticFeedbackTypes.IMPACT_MEDIUM);
          const runOnJSResult = gestureState(channelId[15]).runOnJS(gestureState(channelId[23]).triggerHapticFeedback);
        }
        obj2 = {};
        const merged3 = Object.assign(obj2.get());
        obj2.x = 0;
        obj2.y = -1 * sharedValue.get().bottom + result3 * (1 - result2 / 1.5);
        tmp6 = height === closure_1_2.get().height || obj2.get().drawerMode;
        obj2.width = gestureState(channelId[22]).getControlsDefaultWidth(first.get().width, sharedValue.get().left, sharedValue.get().right);
        obj2.height = height;
        obj2.drawerMode = false;
        const result5 = obj2.set(obj2);
        const obj6 = gestureState(channelId[22]);
      }
    };
    const onTouchesMoveResult = onStartResult.onTouchesMove(fn2);
    fn3.__closure = { gestureSpecs, calculateVoicePanelHeaderSpecs: calculateVoicePanelHeaderSpecsDefault, safeArea: sharedValue, edgeGutter, wrapperSpecs: channelId, getControlsDrawerOpenWidth: VoicePanelControlsUtils.getControlsDrawerOpenWidth, windowDimensions, wrapperDimensions, controlsSpecs: setControlsMode, runOnJS: ReanimatedRexport.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes, getControlsDefaultWidth: VoicePanelControlsUtils.getControlsDefaultWidth };
    fn3.__workletHash = 10007030283382;
    fn3.__initData = __initData4;
    let obj2 = { gestureSpecs, calculateVoicePanelHeaderSpecs: calculateVoicePanelHeaderSpecsDefault, safeArea: sharedValue, edgeGutter, wrapperSpecs: channelId, getControlsDrawerOpenWidth: VoicePanelControlsUtils.getControlsDrawerOpenWidth, windowDimensions, wrapperDimensions, controlsSpecs: setControlsMode, runOnJS: ReanimatedRexport.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes, getControlsDefaultWidth: VoicePanelControlsUtils.getControlsDefaultWidth };
    const fn4 = function u() {
      const result = scrollLock.set(false);
      const result1 = sharedValue1.set(false);
      const obj = {};
      const merged = Object.assign(callback.get());
      obj.active = false;
      const result2 = callback.set(obj);
      gestureState(channelId[15]).runOnJS(gestureLock.unlock)();
    };
    const onChangeResult = onTouchesMoveResult.onChange(fn3);
    fn4.__closure = { scrollLock, isDragScrolling: sharedValue1, gestureSpecs, runOnJS: ReanimatedRexport.runOnJS, gestureLock };
    fn4.__workletHash = 9808165597638;
    fn4.__initData = __initData3;
    const obj3 = { scrollLock, isDragScrolling: sharedValue1, gestureSpecs, runOnJS: ReanimatedRexport.runOnJS, gestureLock };
    const fn5 = function o(velocityY) {
      velocityY = velocityY.velocityY;
      const absolute = Math.abs(velocityY);
      if (absolute > 200) {
        if (velocityY < 0) {
          const obj = {};
          const merged = Object.assign(closure_1_2.get());
          obj.height = wrapperDimensions.get().drawerHeight - isScreenReaderEnabled(channelId[21])(sharedValue.get(), closure_1_15).height;
          const result = closure_1_2.set(obj);
          if (setControlsMode.get().mode === edgeGutter.DRAWER) {
            let DRAWER2 = edgeGutter.RESET;
          } else {
            DRAWER2 = edgeGutter.DRAWER;
          }
          const tmp16 = isScreenReaderEnabled(channelId[21]);
        }
      }
      if (absolute < 200) {
        if (callback.get().isDrawer) {
          if (setControlsMode.get().mode === edgeGutter.DRAWER) {
            let DRAWER = edgeGutter.RESET;
          } else {
            DRAWER = edgeGutter.DRAWER;
          }
        }
      }
      if (setControlsMode.get().mode === edgeGutter.FLOATING_DEFAULT) {
        let FLOATING_DEFAULT = edgeGutter.RESET;
      } else {
        FLOATING_DEFAULT = edgeGutter.FLOATING_DEFAULT;
      }
      const result1 = scrollLock.set(false);
      const result2 = sharedValue1.set(false);
      gestureState(channelId[15]).runOnJS(gestureLock.unlock)(FLOATING_DEFAULT);
    };
    const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(fn4);
    fn5.__closure = { wrapperSpecs: channelId, wrapperDimensions, calculateVoicePanelHeaderSpecs: calculateVoicePanelHeaderSpecsDefault, safeArea: sharedValue, edgeGutter, controlsSpecs: setControlsMode, VoicePanelControlsModes, gestureSpecs, scrollLock, isDragScrolling: sharedValue1, runOnJS: ReanimatedRexport.runOnJS, gestureLock };
    fn5.__workletHash = 12106761920053;
    fn5.__initData = __initData2;
    let obj4 = { wrapperSpecs: channelId, wrapperDimensions, calculateVoicePanelHeaderSpecs: calculateVoicePanelHeaderSpecsDefault, safeArea: sharedValue, edgeGutter, controlsSpecs: setControlsMode, VoicePanelControlsModes, gestureSpecs, scrollLock, isDragScrolling: sharedValue1, runOnJS: ReanimatedRexport.runOnJS, gestureLock };
    const fn6 = function t() {
      const result = scrollLock.set(false);
      const result1 = sharedValue1.set(false);
      gestureState(channelId[15]).runOnJS(gestureLock.unlock)();
    };
    const onEndResult = onTouchesCancelledResult.onEnd(fn5);
    fn6.__closure = { scrollLock, isDragScrolling: sharedValue1, runOnJS: ReanimatedRexport.runOnJS, gestureLock };
    fn6.__workletHash = 15918380969837;
    fn6.__initData = __initData;
    return onEndResult.onFinalize(fn6);
  }, items3);
  const obj18 = gestureState(channelId[18]);
  let fn = function h() {
    return channelId.get().drawerMode;
  };
  fn.__closure = { wrapperSpecs: sharedValue1 };
  fn.__workletHash = 2949834828607;
  fn.__initData = __initData;
  let fn2 = function u(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = gestureState(channelId[15]);
      gestureState(channelId[15]).runOnJS(gestureState(channelId[23]).triggerHapticFeedback)(gestureState(channelId[23]).HapticFeedbackTypes.IMPACT_MEDIUM);
      const runOnJSResult = gestureState(channelId[15]).runOnJS(gestureState(channelId[23]).triggerHapticFeedback);
    }
  };
  obj = { runOnJS: gestureState(channelId[15]).runOnJS, triggerHapticFeedback: gestureState(channelId[23]).triggerHapticFeedback, HapticFeedbackTypes: gestureState(channelId[23]).HapticFeedbackTypes };
  fn2.__closure = obj;
  fn2.__workletHash = 10186886451735;
  fn2.__initData = __initData2;
  const animatedReaction = gestureState(channelId[15]).useAnimatedReaction(fn, fn2);
  closure_130_0 = sharedValue1;
  const obj19 = gestureState(channelId[15]);
  const isScreenReaderEnabled1 = gestureState(channelId[24]).useIsScreenReaderEnabled();
  closure_130_1 = isScreenReaderEnabled1;
  const tmp32 = isScreenReaderEnabled(channelId[25])({ ignoreKeyboard: true });
  closure_130_2 = tmp32;
  const context2 = setControlsMode.useContext(isScreenReaderEnabled(channelId[14]));
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
  const obj21 = gestureState(channelId[24]);
  let fn3 = function n() {
    return { connected: callback.get(), currentControlsMode: controlsSpecs.get().mode, mode: first.get(), windowWidth: setControlsMode.get().width, windowHeight: setControlsMode.get().height, windowHeightIgnoringKeyboard: channelId.get().height, controlsHeightValue: controlsSpecs.get().height, safeArea: sharedValue.get() };
  };
  fn3.__closure = { connected, controlsSpecs: controlsSpecs3, mode, windowDimensions: windowDimensions2, windowDimensionsIgnoringKeyboard: tmp32, safeArea: safeArea2 };
  fn3.__workletHash = 11588370229444;
  fn3.__initData = __initData3;
  let fn4 = function s(safeAreaState, currentControlsMode) {
    let obj = cheapWorkletShallowEqual;
    if (!obj.cheapWorkletShallowEqual(safeAreaState, currentControlsMode)) {
      ({ currentControlsMode, mode, windowWidth, controlsHeightValue, safeArea } = safeAreaState);
      if (constants.DISMISSED !== mode) {
        if (tmp5.PIP !== mode) {
          const PANEL = tmp5.PANEL;
          if (VoicePanelControlsModes.RESET === currentControlsMode) {
            let tmpResult = tmp(4296);
            currentControlsMode = undefined;
            if (currentControlsMode != null) {
              currentControlsMode = currentControlsMode.currentControlsMode;
            }
            if (currentControlsMode == null) {
              currentControlsMode = tmp25.FLOATING_DEFAULT;
            }
            obj = { mode: currentControlsMode };
            tmpResult.runOnJS(closure_6)(obj);
          } else if (tmp25.HIDDEN === currentControlsMode) {
            if (isScreenReaderEnabled) {
              obj = {};
              const merged = Object.assign(obj7.get());
              obj.hidden = false;
              const result = obj7.set(obj);
            } else if (!obj7.get().hidden) {
              const obj1 = {};
              const merged1 = Object.assign(obj7.get());
              obj1.hidden = true;
              const result1 = obj7.set(obj1);
            }
          } else if (tmp25.FLOATING_DEFAULT === currentControlsMode) {
            const size = { x: 0, y: null, width: null, height: null, drawerMode: false, hidden: false };
            const _Math = Math;
            size.y = -1 * Math.max(safeArea.bottom, EDGE_GUTTER);
            tmpResult = tmp(12279);
            size.width = tmpResult.getControlsDefaultWidth(windowWidth, safeArea.left, safeArea.right);
            size.height = controlsHeightValue;
            const result2 = gestureState.set(size);
          } else if (tmp25.DRAWER === currentControlsMode) {
            const drawerSpec = tmp(17172).getDrawerSpec(tmp4, safeArea.top);
            ({ minHeight, maxHeight } = drawerSpec);
            if (gestureState.get().height <= controlsHeightValue) {
              minHeight = maxHeight;
            } else if (null != currentControlsMode) {
              const tmpResult2 = tmp(17172);
            }
            const size1 = { x: 0, y: 0, width: null, height: null, drawerMode: true, hidden: false };
            const tmpResult1 = tmp(17172);
            size1.width = tmp(12279).getControlsDrawerOpenWidth(windowWidth, safeArea.left, safeArea.right);
            size1.height = minHeight;
            const result3 = obj15.set(size1);
            const tmpResult3 = tmp(12279);
          }
        }
      }
      if (!gestureState.get().hidden) {
        const obj2 = {};
        const merged2 = Object.assign(obj12.get());
        obj2.hidden = true;
        const result4 = obj12.set(obj2);
      }
    }
  };
  obj1 = { cheapWorkletShallowEqual: gestureState(channelId[26]).cheapWorkletShallowEqual, VoicePanelModes: token, wrapperSpecs: sharedValue1, VoicePanelControlsModes, runOnJS: gestureState(channelId[15]).runOnJS, setControlsMode: setControlsMode2, isScreenReaderEnabled: isScreenReaderEnabled1, EDGE_GUTTER, getControlsDefaultWidth: gestureState(channelId[22]).getControlsDefaultWidth, getDrawerSpec: gestureState(channelId[27]).getDrawerSpec, getControlsDrawerOpenWidth: gestureState(channelId[22]).getControlsDrawerOpenWidth };
  fn4.__closure = obj1;
  fn4.__workletHash = 1154430392188;
  fn4.__initData = __initData4;
  const animatedReaction1 = gestureState(channelId[15]).useAnimatedReaction(fn3, fn4);
  const tmp35 = controlsSpecs(setControlsMode.useState(false), 2);
  CALL_TILE_GUTTER = tmp36;
  const obj22 = gestureState(channelId[15]);
  class Ce {
    constructor() {
      return controlsSpecs.get().mode;
    }
  }
  Ce.__closure = { controlsSpecs };
  Ce.__workletHash = 12841804697749;
  Ce.__initData = __initData7;
  class Ee {
    constructor(arg0, arg1) {
      tmp = gestureState !== arg1 && closure_1;
      if (tmp) {
        tmp2 = VoicePanelControlsModes;
        if (gestureState === VoicePanelControlsModes.DRAWER) {
          if (arg1 !== tmp2.DRAWER) {
            tmp8 = closure_0;
            tmp9 = closure_2;
            obj2 = closure_0(closure_2[15]);
            tmp10 = closure_12;
            flag2 = true;
            tmp11 = obj2.runOnJS(closure_12)(true);
          }
        }
        tmp3 = gestureState !== tmp2.DRAWER && arg1 === tmp2.DRAWER;
        if (tmp3) {
          tmp4 = closure_0;
          tmp5 = closure_2;
          obj = closure_0(closure_2[15]);
          tmp6 = closure_12;
          flag = false;
          tmp7 = obj.runOnJS(closure_12)(false);
        }
      }
      return;
    }
  }
  obj2 = { isScreenReaderEnabled, VoicePanelControlsModes, runOnJS: gestureState(channelId[15]).runOnJS, setIsDrawer: tmp36 };
  Ee.__closure = obj2;
  Ee.__workletHash = 1065348199900;
  Ee.__initData = __initData8;
  const animatedReaction2 = gestureState(channelId[15]).useAnimatedReaction(Ce, Ee);
  const tmp38 = controlsSpecs(setControlsMode.useState(false), 2);
  EDGE_GUTTER = tmp39;
  const obj24 = gestureState(channelId[15]);
  class Re {
    constructor() {
      return closure_10.get().drawerMode;
    }
  }
  Re.__closure = { wrapperSpecs: sharedValue1 };
  Re.__workletHash = 1707616584768;
  Re.__initData = __initData9;
  function fe(arg0, arg1) {
    if (arg0 !== arg1) {
      const runOnJSResult = ReanimatedRexport.runOnJS(closure_13);
      if (arg0) {
        runOnJSResult(true);
      } else {
        runOnJSResult(false);
      }
    }
  }
  obj3 = { runOnJS: gestureState(channelId[15]).runOnJS, setIsDrawerActive: tmp39 };
  fe.__closure = obj3;
  fe.__workletHash = 4134397877805;
  fe.__initData = __initData10;
  const animatedReaction3 = gestureState(channelId[15]).useAnimatedReaction(Re, fe);
  const items4 = [setControlsMode];
  const id = setControlsMode.useId();
  const callback1 = setControlsMode.useCallback(() => {
    setControlsMode({ mode: VoicePanelControlsModes.FLOATING_DEFAULT });
  }, items4);
  obj4 = { value: controlsSpecs(setControlsMode.useState(() => createUseAnimatedScrollLock.createUseAnimatedScrollLock(closure_12, closure_13, token, sharedValue1)), 1)[0], children: null };
  const items5 = [closure_18(isScreenReaderEnabled(channelId[46]), { wrapperSpecs: sharedValue1 }), closure_18(closure_37, { channelId, wrapperSpecs: sharedValue1, controlsSpecs, accessoryHeights: tmp14, gestureState }), ];
  const obj5 = { nativeID: id, style: tmp6.accessibilityWrapper, accessibilityViewIsModal: tmp35[0], onAccessibilityEscape: callback1, pointerEvents: "box-none", children: null };
  const obj26 = gestureState(channelId[15]);
  obj6 = { gesture: memo, children: null };
  obj7 = { style: null, animatedProps: hiddenProps, children: null };
  const items6 = [tmp6.wrapper, animatedStyle, hiddenStyles];
  obj7.style = items6;
  const tmp45 = isScreenReaderEnabled(channelId[47]);
  let MIDNIGHT;
  if (tmp11) {
    if (!tmp38[0]) {
      MIDNIGHT = constants3.MIDNIGHT;
    }
  }
  obj8 = { theme: MIDNIGHT, children: null };
  obj9 = { matchAppTheme: !tmp11 };
  const items7 = [closure_18(gestureState(channelId[48]).VoicePanelVisualEffectView, obj9), closure_18(closure_39, { openTab, wrapperSpecs: sharedValue1, sharedTab: sharedValue })];
  obj8.children = items7;
  const items8 = [closure_20(gestureState(channelId[30]).ThemeContextProvider, obj8), closure_18(tmp4(channelId[49]), { wrapperSpecs: sharedValue1, tab, sharedTab: sharedValue, gestureSpecs: sharedValue2, openTab }), ];
  const tmp46 = isScreenReaderEnabled(channelId[36]);
  let tmp44Result = null;
  if (!tmpResult.isMetaQuest()) {
    const obj10 = { openTab };
    tmp44Result = tmp44(closure_25, obj10);
  }
  items8[2] = tmp44Result;
  obj7.children = items8;
  obj6.children = closure_20(tmp46, obj7);
  obj5.children = closure_18(gestureState(channelId[19]).GestureDetector, obj6);
  items5[2] = closure_18(tmp45, obj5);
  obj4.children = items5;
  return closure_20(gestureState(channelId[16]).ControlsGestureScrollLock.Provider, obj4);
});