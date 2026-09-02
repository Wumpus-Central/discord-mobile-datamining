// discord_app/modules/voice_panel/native/controls/VoicePanelControls.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import TwinButtons from "../../../../design/components/experimental/native.tsx";
import useDrawerToggleDefault from "useDrawerToggle.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../calls/ChannelRTCStore.tsx";
import VoicePanelModes from "../../VoicePanelConstants.tsx";
import CARD_SIZE from "../card/VoicePanelCardConstants.tsx";
import VoicePanelControlsModes from "VoicePanelControlsConstants.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import isMetaQuest from "../../../device/MetaQuestUtils.android.tsx";

require = arg1;
let c4 = importAllResult;
({ View: c5, StyleSheet } = get_ActivityIndicator);
({
  UI_SHOW_HIDE_PHYSICS: error,
  MODE_CHANGE_PHYSICS: closure_8,
  BORDER_RADIUS_PHYSICS: c9,
  PANEL_CONTROLS_HEIGHT_PHYSICS: c10,
  VoicePanelModes: unpackModuleId,
} = VoicePanelModes);
({ CALL_TILE_GUTTER: closure_12, EDGE_GUTTER: map1 } = CARD_SIZE);
({ CONTROLS_DRAWER_HEADER_EXPANDED_SIZE: closure_14, VoicePanelControlsModes: closure_15 } = VoicePanelControlsModes);
({ ComponentActions: closure_16, ThemeTypes: closure_17 } = ME);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = jsxProd);
let obj = { accessibilityWrapper: null, wrapper: null, buttonsWrapper: null, actionSheetDragHandleWrapper: null };
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.zIndex = 1;
obj[0] = obj;
createCacheKey = {
  position: "absolute",
  bottom: 0,
  left: "50%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: ThemesDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS,
};
obj[1] = createCacheKey;
obj[2] = {
  position: "absolute",
  left: 0,
  right: 0,
  zIndex: 20,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginHorizontal: ThemesDefault.space.PX_16,
};
obj[3] = { position: "absolute", top: 0, left: 0, right: 0, zIndex: 21 };
let closure_21 = createCacheKey.createStyles(obj);
let c22 = 200;
let c23 = 200;
let num = 5;
if (isMetaQuest.isMetaQuest()) {
  num = 15;
}
let closure_25 = importAllResult.memo((openTab) => {
  const tmp = callback2();
  const tmp2 = useDrawerToggleDefault(openTab.openTab);
  ({ handlePress, accessibilityLabel, ariaHidden } = tmp2);
  return callback(closure_5, {
    style: tmp.actionSheetDragHandleWrapper,
    children: callback(TwinButtons.ActionSheetDragHandle, {
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
let closure_33 = {
  code: "function VoicePanelControlsTsx8(){const{wrapperSpecs}=this.__closure;return wrapperSpecs.get().drawerMode;}",
};
let closure_34 = {
  code: "function VoicePanelControlsTsx9(current,previous){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current===previous)return;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}",
};
let closure_35 = {
  code: "function VoicePanelControlsTsx10(){const{connected,controlsSpecs,mode,windowDimensions,windowDimensionsIgnoringKeyboard,safeArea}=this.__closure;return{connected:connected.get(),currentControlsMode:controlsSpecs.get().mode,mode:mode.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,windowHeightIgnoringKeyboard:windowDimensionsIgnoringKeyboard.get().height,controlsHeightValue:controlsSpecs.get().height,safeArea:safeArea.get()};}",
};
let closure_36 = {
  code: "function VoicePanelControlsTsx11(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,wrapperSpecs,VoicePanelControlsModes,runOnJS,setControlsMode,isScreenReaderEnabled,EDGE_GUTTER,getControlsDefaultWidth,getDrawerSpec,getControlsDrawerOpenWidth}=this.__closure;var _previous$currentCont;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{currentControlsMode:currentControlsMode,mode:mode,windowWidth:windowWidth,windowHeightIgnoringKeyboard:windowHeightIgnoringKeyboard,controlsHeightValue:controlsHeightValue,safeArea:safeArea}=props;switch(mode){case VoicePanelModes.DISMISSED:case VoicePanelModes.PIP:if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}return;case VoicePanelModes.PANEL:default:break;}switch(currentControlsMode){case VoicePanelControlsModes.RESET:runOnJS(setControlsMode)({mode:(_previous$currentCont=previous===null||previous===void 0?void 0:previous.currentControlsMode)!==null&&_previous$currentCont!==void 0?_previous$currentCont:VoicePanelControlsModes.FLOATING_DEFAULT});return;case VoicePanelControlsModes.HIDDEN:if(isScreenReaderEnabled){wrapperSpecs.set({...wrapperSpecs.get(),hidden:false});break;}if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}break;case VoicePanelControlsModes.FLOATING_DEFAULT:wrapperSpecs.set({x:0,y:Math.max(safeArea.bottom,EDGE_GUTTER)*-1,width:getControlsDefaultWidth(windowWidth,safeArea.left,safeArea.right),height:controlsHeightValue,drawerMode:false,hidden:false});break;case VoicePanelControlsModes.DRAWER:const{minHeight:minHeight,maxHeight:maxHeight}=getDrawerSpec(windowHeightIgnoringKeyboard,safeArea.top);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(wrapperSpecs.get().height<=controlsHeightValue){height=maxHeight;}else if(previous!=null&&wrapperSpecs.get().height===getDrawerSpec(previous.windowHeight,previous.safeArea.top).maxHeight){height=maxHeight;}else if(wrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=minHeight;}wrapperSpecs.set({x:0,y:0,width:getControlsDrawerOpenWidth(windowWidth,safeArea.left,safeArea.right),height:height,drawerMode:true,hidden:false});break;}}",
};
let closure_37 = importAllResult.memo((controlsSpecs) => {
  ({ channelId, wrapperSpecs } = controlsSpecs);
  controlsSpecs = controlsSpecs.controlsSpecs;
  const accessoryHeights = controlsSpecs.accessoryHeights;
  const gestureState = controlsSpecs.gestureState;
  importAllResult = undefined;
  let isConnectingToConsole;
  let obj = wrapperSpecs(accessoryHeights[28]);
  const shouldShowFloatingCTA = obj.useShouldShowFloatingCTA(channelId);
  const tmp4 = controlsSpecs(accessoryHeights[17])();
  importAllResult = tmp4;
  const tmp5 = controlsSpecs(accessoryHeights[29])(channelId);
  isConnectingToConsole = tmp5.isConnectingToConsole;
  const items = [wrapperSpecs, controlsSpecs, accessoryHeights, gestureState];
  const memo = importAllResult.useMemo(() => ({ wrapperSpecs, controlsSpecs, accessoryHeights, gestureState }), items);
  const items1 = [isConnectingToConsole, tmp4];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
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
  obj = { item: tmp11, renderItem: tmp(tmp2[31]).renderVoicePanelFloatingCTA };
  const items2 = [closure_18(wrapperSpecs(accessoryHeights[30]).TransitionItem, obj)];
  let tmp12;
  if (tmp5.isConnectingOrConnectedToConsole) {
    tmp12 = memo;
  }
  obj = { children: null };
  items2[1] = closure_18(wrapperSpecs(accessoryHeights[30]).TransitionItem, {
    item: tmp12,
    renderItem: wrapperSpecs(accessoryHeights[32]).renderVoicePanelConsoleStatus,
  });
  obj[0] = items2;
  return closure_20(closure_19, obj);
});
let closure_38 = {
  code: "function VoicePanelControlsTsx12(){const{controlsSpecs,connected,sharedTab,wrapperSpecs,TRANSITIONAL_HEIGHT,CONTROLS_DRAWER_HEADER_EXPANDED_SIZE,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const showPushToTalkText=controlsSpecs.get().pushToTalk&&connected.get();const height=sharedTab.get()==='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?CONTROLS_DRAWER_HEADER_EXPANDED_SIZE:controlsSpecs.get().height;const translateY=function(){return sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?-controlsSpecs.get().height:0;}();return{top:showPushToTalkText?-4:0,height:withSpring(height,MODE_CHANGE_PHYSICS),opacity:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0:1,MODE_CHANGE_PHYSICS),transform:[{translateY:withSpring(translateY,MODE_CHANGE_PHYSICS)},{scale:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0.95:1,MODE_CHANGE_PHYSICS)}]};}",
};
let closure_39 = importAllResult.memo(function VoicePanelButtonsInner(sharedTab) {
  ({ openTab: require, wrapperSpecs } = sharedTab);
  sharedTab = sharedTab.sharedTab;
  let ref;
  let controlsSpecs;
  let connected;
  ref = controlsSpecs.useRef(true);
  const tmp2 = wrapperSpecs(sharedTab[33])(ref);
  const context = controlsSpecs.useContext(wrapperSpecs(sharedTab[14]));
  controlsSpecs = context.controlsSpecs;
  connected = context.connected;
  const tmp3 = callback2();
  let obj = require(sharedTab[15]);
  const fn = function c() {
    let obj = controlsSpecs;
    let pushToTalk = controlsSpecs.get().pushToTalk;
    if (pushToTalk) {
      pushToTalk = connected.get();
    }
    obj1 = sharedTab;
    if ("settings" === sharedTab.get()) {
      if (wrapperSpecs.get().height >= closure_1_22) {
        let height = closure_1_14;
      }
      num = 0;
      if ("settings" !== obj1.get()) {
        num = 0;
        if (wrapperSpecs.get().height >= closure_1_22) {
          num = -obj.get().height;
        }
      }
      let num2 = 0;
      if (pushToTalk) {
        num2 = -4;
      }
      obj = { top: null, height: null, opacity: null, transform: null };
      obj[0] = num2;
      obj[1] = closure_1_0(sharedTab[35]).withSpring(height, closure_1_8);
      const obj4 = closure_1_0(sharedTab[35]);
      let num4 = 1;
      if ("settings" !== obj1.get()) {
        num4 = 1;
        if (wrapperSpecs.get().height >= closure_1_22) {
          num4 = 0;
        }
      }
      obj[2] = closure_1_0(sharedTab[35]).withSpring(num4, closure_1_8);
      obj = { translateY: null };
      let tmp6Result = tmp6(tmp7[35]);
      obj[0] = tmp6Result.withSpring(num, closure_1_8);
      const items = [obj];
      tmp6Result = tmp6(tmp7[35]);
      let num5 = 1;
      if ("settings" !== obj1.get()) {
        num5 = 1;
        if (wrapperSpecs.get().height >= closure_1_22) {
          num5 = 0.95;
        }
      }
      obj1 = { scale: null };
      obj1[0] = tmp6Result.withSpring(num5, closure_1_8);
      items[1] = obj1;
      obj[3] = items;
      return obj;
    }
    height = obj.get().height;
  };
  obj = {
    controlsSpecs,
    connected,
    sharedTab,
    wrapperSpecs,
    TRANSITIONAL_HEIGHT: c22,
    CONTROLS_DRAWER_HEADER_EXPANDED_SIZE: closure_14,
    withSpring: require(sharedTab[35]).withSpring,
    MODE_CHANGE_PHYSICS: closure_8,
  };
  fn.__closure = obj;
  fn.__workletHash = 17578996123721;
  fn.__initData = closure_38;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const effect = controlsSpecs.useEffect(() => {
    ref.current = false;
  }, []);
  obj = { skipEntering: tmp2, children: null };
  obj1 = { style: items, children: null };
  items = [tmp3.buttonsWrapper, animatedStyle];
  const arr = wrapperSpecs(sharedTab[34])();
  obj1[1] = arr.map((props) => props.render(props.key, { props, openTab: closure_0, wrapperSpecs }));
  obj[1] = callback(wrapperSpecs(sharedTab[36]), obj1);
  return callback(require(sharedTab[15]).LayoutAnimationConfig, obj);
});
let closure_40 = {
  code: "function VoicePanelControlsTsx13(){const{withSpring,wrapperSpecs,borderRadius,BORDER_RADIUS_PHYSICS,PANEL_CONTROLS_HEIGHT_PHYSICS,MODE_CHANGE_PHYSICS,roundToNearestPixel,UI_SHOW_HIDE_PHYSICS,useReducedMotion,gestureState,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;return{borderBottomRightRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),borderBottomLeftRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),height:withSpring(wrapperSpecs.get().height,PANEL_CONTROLS_HEIGHT_PHYSICS),width:withSpring(wrapperSpecs.get().width,MODE_CHANGE_PHYSICS),marginLeft:withSpring(roundToNearestPixel(wrapperSpecs.get().width/2)*-1,MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(!useReducedMotion.get()&&(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop)?wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}",
};
let closure_41 = {
  code: "function VoicePanelControlsTsx14(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}",
};
let closure_42 = {
  code: "function VoicePanelControlsTsx15(mode,previousMode){const{isScreenReaderEnabled,VoicePanelControlsModes,runOnJS,setIsDrawer}=this.__closure;if(mode===previousMode||!isScreenReaderEnabled)return;if(mode===VoicePanelControlsModes.DRAWER&&previousMode!==VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(true);}else if(mode!==VoicePanelControlsModes.DRAWER&&previousMode===VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(false);}}",
};
let closure_43 = {
  code: "function VoicePanelControlsTsx16(){const{wrapperSpecs}=this.__closure;return wrapperSpecs.get().drawerMode;}",
};
let closure_44 = {
  code: "function VoicePanelControlsTsx17(drawerMode,previousDrawerMode){const{runOnJS,setIsDrawerActive}=this.__closure;if(drawerMode===previousDrawerMode)return;if(drawerMode){runOnJS(setIsDrawerActive)(true);}else{runOnJS(setIsDrawerActive)(false);}}",
};
let obj2 = {
  position: "absolute",
  left: 0,
  right: 0,
  zIndex: 20,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginHorizontal: ThemesDefault.space.PX_16,
};
const memoResult = importAllResult.memo(function VoicePanelControls(gestureState) {
  gestureState = gestureState.gestureState;
  let sharedValue1 = gestureState;
  let isScreenReaderEnabled1;
  dependencyMap = undefined;
  let controlsSpecs3;
  let windowDimensions2;
  let mode;
  let setControlsMode2;
  let safeArea2;
  let connected;
  let sharedValue3;
  let sharedValue4;
  let sharedValue5;
  closure_12 = undefined;
  closure_13 = undefined;
  closure_14 = undefined;
  let obj = sharedValue1(4915);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  isScreenReaderEnabled1 = isScreenReaderEnabled;
  const context = windowDimensions2.useContext(isScreenReaderEnabled1(12062));
  const channelId = context.channelId;
  dependencyMap = channelId;
  const controlsSpecs = context.controlsSpecs;
  controlsSpecs3 = controlsSpecs;
  const setControlsMode = context.setControlsMode;
  windowDimensions2 = setControlsMode;
  const useReducedMotion = context.useReducedMotion;
  mode = useReducedMotion;
  let tmp6 = callback2();
  const tmp7 = controlsSpecs3(windowDimensions2.useState(null), 2);
  const first = tmp7[0];
  setControlsMode2 = first;
  safeArea2 = tmp7[1];
  obj1 = sharedValue1(4217);
  const sharedValue = obj1.useSharedValue(first);
  connected = sharedValue;
  const layoutEffect = windowDimensions2.useLayoutEffect(() => {
    const result = connected.set(setControlsMode2);
  });
  const tmp11 = isScreenReaderEnabled1(16853)(channelId);
  let obj2 = sharedValue1(16886);
  const maybeFetchSoundboardSounds = obj2.useMaybeFetchSoundboardSounds({ shouldFetch: tmp11 });
  let items = [channelId, controlsSpecs, setControlsMode];
  const callback = windowDimensions2.useCallback((controlsProps) => {
    ({ tab: sharedValue1, source: isScreenReaderEnabled1, disableControlsUpdate } = controlsProps);
    if (disableControlsUpdate === undefined) {
      disableControlsUpdate = false;
    }
    controlsProps = controlsProps.controlsProps;
    sharedValue1(store[39]).batchUpdates(() => {
      c0 = false;
      closure_1_7((arg0) => {
        closure_0 = arg0 !== c0;
        return c0;
      });
      if (!disableControlsUpdate) {
        const obj = { mode: null };
        obj[0] = token1.DRAWER;
        const merged = Object.assign(controlsProps);
        closure_1_4(obj);
      }
      let tmp8 = c0;
      if (!c0) {
        tmp8 = controlsProps.get().mode !== token1.DRAWER;
      }
      if (tmp8) {
        isScreenReaderEnabled1(disableControlsUpdate[20])(disableControlsUpdate, c0, closure_1);
      }
    });
  }, items);
  sharedValue3 = callback;
  const tmp14 = isScreenReaderEnabled1(17020)();
  sharedValue4 = tmp14;
  const items1 = [channelId, controlsSpecs, callback, first];
  const layoutEffect1 = windowDimensions2.useLayoutEffect(() => {
    function handleStoreChange() {
      chatOpen = setControlsMode2.getChatOpen(closure_1_2);
      if (chatOpen !== chatOpen) {
        if (chatOpen) {
          const obj = { tab: "chat", source: null, controlsProps: null };
          obj[1] = sharedValue1(table[20]).VoicePanelTabAnalyticsSources.STORE;
          obj[2] = { debounce: true };
          closure_1_9(obj);
        }
      }
    }
    let obj = setControlsMode2;
    let chatOpen = setControlsMode2.getChatOpen(store);
    if (chatOpen !== chatOpen) {
      if (chatOpen) {
        obj = { tab: "chat", source: null, controlsProps: null };
        obj[1] = sharedValue1(store[20]).VoicePanelTabAnalyticsSources.STORE;
        obj[2] = { debounce: true };
        sharedValue3(obj);
      }
    }
    obj.addChangeListener(handleStoreChange);
    return () => {
      setControlsMode2.removeChangeListener(handleStoreChange);
    };
  }, items1);
  const items2 = [callback];
  const effect = windowDimensions2.useEffect(() => {
    function handleOpenChatTab(arg0) {
      callback({ tab: "chat", source: handleOpenChatTab(closure_1_2[20]).VoicePanelTabAnalyticsSources.HEADER_BUTTON });
    }
    let ComponentDispatch = sharedValue1(store[41]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(closure_1_16.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
    return () => {
      const ComponentDispatch = sharedValue1(table[41]).ComponentDispatch;
      ComponentDispatch.unsubscribe(closure_2_16.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
    };
  }, items2);
  let obj3 = sharedValue1(1627);
  const rect = obj3.getSafeAreaInsets();
  let obj4 = sharedValue1(4217);
  obj = { width: null, height: 0, x: 0, y: 0, drawerMode: false, hidden: false };
  let obj6 = sharedValue1(12069);
  let obj7 = sharedValue1(1492);
  obj[0] = obj6.getControlsDefaultWidth(obj7.getWindowDimensions().width, rect.left, rect.right);
  sharedValue1 = obj4.useSharedValue(obj);
  sharedValue5 = sharedValue1;
  let obj8 = sharedValue1(4197);
  const token = obj8.useToken(isScreenReaderEnabled1(709).modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS);
  closure_12 = token;
  let obj9 = sharedValue1(4217);
  function ce() {
    let obj = sharedValue1(store[35]);
    obj1 = sharedValue5;
    num = 0;
    if (!sharedValue5.get().drawerMode) {
      num = closure_12;
    }
    obj = {
      borderBottomRightRadius: obj.withSpring(num, sharedValue3),
      borderBottomLeftRadius: null,
      height: null,
      width: null,
      marginLeft: null,
      transform: null,
    };
    let tmpResult = tmp(tmp2[35]);
    let num2 = 0;
    if (!obj1.get().drawerMode) {
      num2 = closure_12;
    }
    obj[1] = tmpResult.withSpring(num2, sharedValue3);
    tmpResult = tmp(tmp2[35]);
    obj[2] = tmpResult.withSpring(obj1.get().height, sharedValue4);
    obj[3] = sharedValue1(store[35]).withSpring(obj1.get().width, connected);
    const tmp3 = sharedValue3;
    const tmpResult1 = sharedValue1(store[35]);
    const tmpResult2 = sharedValue1(store[35]);
    obj[4] = tmpResult2.withSpring(-1 * isScreenReaderEnabled1(store[44])(obj1.get().width / 2), connected);
    obj = { translateX: null };
    const tmp4 = isScreenReaderEnabled1(store[44]);
    obj[0] = sharedValue1(store[35]).withSpring(obj1.get().x, safeArea2);
    const items = [obj];
    const tmp5 = safeArea2;
    const tmpResult3 = sharedValue1(store[35]);
    if (mode.get()) {
      let y = obj1.get().y;
    } else if (obj1.get().hidden) {
      const sum = obj1.get().height + closure_12;
      y = sum + sharedValue4.get();
    } else {
      const obj11 = sharedValue1;
    }
    obj1 = { translateY: sharedValue1(store[35]).withSpring(y, tmp5) };
    items[1] = obj1;
    obj[5] = items;
    return obj;
  }
  obj = {
    withSpring: sharedValue1(4927).withSpring,
    wrapperSpecs: sharedValue1,
    borderRadius: token,
    BORDER_RADIUS_PHYSICS: sharedValue3,
    PANEL_CONTROLS_HEIGHT_PHYSICS: sharedValue4,
    MODE_CHANGE_PHYSICS: connected,
    roundToNearestPixel: isScreenReaderEnabled1(10951),
    UI_SHOW_HIDE_PHYSICS: safeArea2,
    useReducedMotion,
    gestureState,
    CALL_TILE_GUTTER: closure_12,
    accessoryHeights: tmp14,
  };
  ce.__closure = obj;
  ce.__workletHash = 16576360993692;
  ce.__initData = closure_40;
  const animatedStyle = obj9.useAnimatedStyle(ce);
  sharedValue1 = first;
  isScreenReaderEnabled1 = sharedValue;
  dependencyMap = sharedValue1;
  controlsSpecs3 = callback;
  windowDimensions2 = undefined;
  mode = undefined;
  setControlsMode2 = undefined;
  safeArea2 = undefined;
  connected = undefined;
  sharedValue3 = undefined;
  sharedValue4 = undefined;
  sharedValue5 = undefined;
  closure_12 = undefined;
  closure_13 = undefined;
  closure_14 = undefined;
  let token1;
  ({ hiddenProps, hiddenStyles } = isScreenReaderEnabled1(16994)(context.mode, sharedValue1));
  const context1 = windowDimensions2.useContext(isScreenReaderEnabled1(12062));
  const controlsSpecs2 = context1.controlsSpecs;
  windowDimensions2 = controlsSpecs2;
  const windowDimensions = context1.windowDimensions;
  mode = windowDimensions;
  const wrapperDimensions = context1.wrapperDimensions;
  setControlsMode2 = wrapperDimensions;
  const safeArea = context1.safeArea;
  safeArea2 = safeArea;
  let obj11 = sharedValue1(4217);
  obj1 = {
    absoluteX: 0,
    absoluteY: 0,
    x: 0,
    y: 0,
    height: 0,
    isDrawer: false,
    active: false,
    drawerTransitionHeight: c22,
    interFloatingTransitionHeight: c23,
  };
  const sharedValue2 = obj11.useSharedValue(obj1);
  connected = sharedValue2;
  const tmp20 = isScreenReaderEnabled1(16994)(context.mode, sharedValue1);
  let tmp4 = isScreenReaderEnabled1;
  sharedValue3 = sharedValue1(4217).useSharedValue(0);
  const obj14 = sharedValue1(4217);
  sharedValue4 = sharedValue1(4217).useSharedValue(false);
  const obj15 = sharedValue1(4217);
  sharedValue5 = sharedValue1(4217).useSharedValue(0);
  closure_12 = windowDimensions2.useRef(undefined);
  const obj16 = sharedValue1(4217);
  const sharedValue6 = sharedValue1(4217).useSharedValue(false);
  closure_13 = sharedValue6;
  const tmp27 = isScreenReaderEnabled1(16911)();
  closure_14 = tmp27;
  const obj17 = sharedValue1(4217);
  token1 = sharedValue1(4197).useToken(isScreenReaderEnabled1(709).modules.mobile.VOICE_PANEL_GUTTER);
  const items3 = [
    controlsSpecs2,
    tmp27,
    sharedValue2,
    sharedValue4,
    callback,
    safeArea,
    sharedValue6,
    sharedValue5,
    sharedValue,
    first,
    sharedValue3,
    windowDimensions,
    wrapperDimensions,
    sharedValue1,
    token1,
  ];
  const memo = windowDimensions2.useMemo(() => {
    const Gesture = sharedValue1(store[19]).Gesture;
    const PanResult = Gesture.Pan();
    const manualActivationResult = Gesture.Pan().manualActivation(true);
    let result = Gesture.Pan().manualActivation(true).maxPointers(1).shouldCancelWhenOutside(false);
    const maxPointersResult = Gesture.Pan().manualActivation(true).maxPointers(1);
    const fn = function b(absoluteX) {
      const result = store7.set(0);
      const result1 = store6.set({
        absoluteX: absoluteX.changedTouches[0].absoluteX,
        absoluteY: absoluteX.changedTouches[0].absoluteY,
        x: store.get().x,
        y: store.get().y,
        height: store.get().height,
        isDrawer: store2.get().mode === closure_1_15.DRAWER,
        active: false,
        drawerTransitionHeight: closure_1_22,
        interFloatingTransitionHeight: closure_1_23,
      });
    };
    let obj = {
      touchMoveCount: sharedValue3,
      gestureSpecs: connected,
      wrapperSpecs: store,
      controlsSpecs: windowDimensions2,
      VoicePanelControlsModes: token1,
      TRANSITIONAL_HEIGHT: closure_1_22,
      INTER_FLOATING_TRANSITIONAL_HEIGHT: closure_1_23,
    };
    fn.__closure = obj;
    fn.__workletHash = 3524850376026;
    fn.__initData = closure_1_32;
    const withRefResult = result.withRef(closure_12);
    class R {
      constructor() {
        obj = closure_1_0(closure_1_2[15]);
        tmp = obj.runOnJS(closure_14.lock)();
        return;
      }
    }
    obj = { runOnJS: sharedValue1(store[15]).runOnJS, gestureLock: closure_14 };
    R.__closure = obj;
    R.__workletHash = 11720944776433;
    R.__initData = closure_1_31;
    const onTouchesDownResult = result.withRef(closure_12).onTouchesDown(fn);
    const fn2 = function p(state, fail) {
      if (state.state === closure_1_0(closure_1_2[19]).State.BEGAN) {
        if (!store6.get().active) {
          let obj = store2;
          if (store2.get().mode !== closure_1_15.HIDDEN) {
            const result = store7.set(store7.get() + 1);
            let value = store7.get() <= closure_1_24;
            if (!value) {
              value = store8.get();
            }
            value = closure_1.get();
            if ("settings" === value) {
              let num2 = closure_11.get();
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
              obj = {
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
              obj[0] = absoluteX;
              obj[1] = absoluteY;
              obj[2] = store.get().x;
              obj[3] = store.get().y;
              obj[4] = store.get().height;
              obj[5] = obj.get().mode === tmp4.DRAWER;
              obj[7] = closure_1_22;
              obj[8] = closure_1_23;
              const result1 = obj5.set(obj);
              let tmp23 = obj.get().mode !== tmp4.DRAWER;
              if (tmp23) {
                tmp23 = "settings" !== closure_0;
              }
              if (tmp23) {
                obj = { tab: "settings", source: null, disableControlsUpdate: true };
                const tmpResult = tmp(tmp2[15]);
                obj[1] = tmp(tmp2[20]).VoicePanelTabAnalyticsSources.GESTURE;
                tmp(tmp2[15]).runOnJS(closure_3)(obj);
                const runOnJSResult = tmp(tmp2[15]).runOnJS(closure_3);
              }
              const result2 = store9.set(true);
              fail.activate();
            }
          } else {
            fail.fail();
          }
        }
      }
    };
    const onStartResult = result.withRef(closure_12).onTouchesDown(fn).onStart(R);
    fn2.__closure = {
      State: sharedValue1(store[19]).State,
      gestureSpecs: connected,
      controlsSpecs: windowDimensions2,
      VoicePanelControlsModes: token1,
      touchMoveCount: sharedValue3,
      SCROLL_BEGIN_GRACE_TICKS: closure_1_24,
      isDragScrolling: sharedValue4,
      sharedTab: isScreenReaderEnabled1,
      scrollOffsetValue: sharedValue5,
      GESTURE_VERTICAL_MINIMUM: 30,
      wrapperSpecs: store,
      TRANSITIONAL_HEIGHT: closure_1_22,
      INTER_FLOATING_TRANSITIONAL_HEIGHT: closure_1_23,
      tab: sharedValue1,
      runOnJS: sharedValue1(store[15]).runOnJS,
      openTab: controlsSpecs3,
      VoicePanelTabAnalyticsSources: sharedValue1(store[20]).VoicePanelTabAnalyticsSources,
      scrollLock: closure_13,
    };
    fn2.__workletHash = 13965683053434;
    fn2.__initData = closure_1_30;
    obj1 = {
      State: sharedValue1(store[19]).State,
      gestureSpecs: connected,
      controlsSpecs: windowDimensions2,
      VoicePanelControlsModes: token1,
      touchMoveCount: sharedValue3,
      SCROLL_BEGIN_GRACE_TICKS: closure_1_24,
      isDragScrolling: sharedValue4,
      sharedTab: isScreenReaderEnabled1,
      scrollOffsetValue: sharedValue5,
      GESTURE_VERTICAL_MINIMUM: 30,
      wrapperSpecs: store,
      TRANSITIONAL_HEIGHT: closure_1_22,
      INTER_FLOATING_TRANSITIONAL_HEIGHT: closure_1_23,
      tab: sharedValue1,
      runOnJS: sharedValue1(store[15]).runOnJS,
      openTab: controlsSpecs3,
      VoicePanelTabAnalyticsSources: sharedValue1(store[20]).VoicePanelTabAnalyticsSources,
      scrollLock: closure_13,
    };
    const fn3 = function h(absoluteY) {
      let obj = store6;
      const diff = absoluteY.absoluteY - store6.get().absoluteY;
      const diff1 = store6.get().height - store6.get().y - diff;
      if (diff1 > store6.get().drawerTransitionHeight) {
        if (!obj.get().isDrawer) {
          obj = {};
          const merged = Object.assign(obj.get());
          obj.isDrawer = true;
          const result = obj.set(obj);
        }
        obj = {};
        const merged1 = Object.assign(store.get());
        obj.x = 0;
        obj.y = 0;
        const tmp26 = closure_1_1(closure_1_2[21]);
        obj.width = closure_1_0(closure_1_2[22]).getControlsDrawerOpenWidth(
          store3.get().width,
          store5.get().left,
          store5.get().right,
        );
        const _Math = Math;
        obj.height = Math.min(diff1, store4.get().drawerHeight - tmp26(store5.get(), closure_15).height);
        obj.drawerMode = true;
        const result1 = store.set(obj);
        const obj9 = closure_1_0(closure_1_2[22]);
      } else {
        const result2 = diff1 / obj.get().drawerTransitionHeight;
        const height = store2.get().height;
        const _Math2 = Math;
        const result3 = -1 * Math.max(diff1 - store5.get().bottom - height, 0);
        if (obj.get().isDrawer) {
          obj1 = {};
          const merged2 = Object.assign(obj.get());
          obj1.isDrawer = false;
          const result4 = obj.set(obj1);
        }
        let obj2 = store;
        if (!tmp6) {
          const obj4 = closure_1_0(closure_1_2[15]);
          closure_1_0(closure_1_2[15]).runOnJS(closure_1_0(closure_1_2[23]).triggerHapticFeedback)(
            closure_1_0(closure_1_2[23]).HapticFeedbackTypes.IMPACT_MEDIUM,
          );
          const runOnJSResult = closure_1_0(closure_1_2[15]).runOnJS(
            closure_1_0(closure_1_2[23]).triggerHapticFeedback,
          );
        }
        obj2 = {};
        const merged3 = Object.assign(obj2.get());
        obj2.x = 0;
        obj2.y = -1 * store5.get().bottom + result3 * (1 - result2 / 1.5);
        tmp6 = height === store.get().height || obj2.get().drawerMode;
        obj2.width = closure_1_0(closure_1_2[22]).getControlsDefaultWidth(
          store3.get().width,
          store5.get().left,
          store5.get().right,
        );
        obj2.height = height;
        obj2.drawerMode = false;
        const result5 = obj2.set(obj2);
        const obj6 = closure_1_0(closure_1_2[22]);
      }
    };
    const onTouchesMoveResult = onStartResult.onTouchesMove(fn2);
    fn3.__closure = {
      gestureSpecs: connected,
      calculateVoicePanelHeaderSpecs: isScreenReaderEnabled1(store[21]),
      safeArea: safeArea2,
      edgeGutter: token1,
      wrapperSpecs: store,
      getControlsDrawerOpenWidth: sharedValue1(store[22]).getControlsDrawerOpenWidth,
      windowDimensions: mode,
      wrapperDimensions: setControlsMode2,
      controlsSpecs: windowDimensions2,
      runOnJS: sharedValue1(store[15]).runOnJS,
      triggerHapticFeedback: sharedValue1(store[23]).triggerHapticFeedback,
      HapticFeedbackTypes: sharedValue1(store[23]).HapticFeedbackTypes,
      getControlsDefaultWidth: sharedValue1(store[22]).getControlsDefaultWidth,
    };
    fn3.__workletHash = 10007030283382;
    fn3.__initData = closure_1_29;
    let obj2 = {
      gestureSpecs: connected,
      calculateVoicePanelHeaderSpecs: isScreenReaderEnabled1(store[21]),
      safeArea: safeArea2,
      edgeGutter: token1,
      wrapperSpecs: store,
      getControlsDrawerOpenWidth: sharedValue1(store[22]).getControlsDrawerOpenWidth,
      windowDimensions: mode,
      wrapperDimensions: setControlsMode2,
      controlsSpecs: windowDimensions2,
      runOnJS: sharedValue1(store[15]).runOnJS,
      triggerHapticFeedback: sharedValue1(store[23]).triggerHapticFeedback,
      HapticFeedbackTypes: sharedValue1(store[23]).HapticFeedbackTypes,
      getControlsDefaultWidth: sharedValue1(store[22]).getControlsDefaultWidth,
    };
    const fn4 = function u() {
      const result = store9.set(false);
      const result1 = store8.set(false);
      const obj = {};
      const merged = Object.assign(store6.get());
      obj.active = false;
      const result2 = store6.set(obj);
      closure_1_0(closure_1_2[15]).runOnJS(closure_14.unlock)();
    };
    const onChangeResult = onTouchesMoveResult.onChange(fn3);
    fn4.__closure = {
      scrollLock: closure_13,
      isDragScrolling: sharedValue4,
      gestureSpecs: connected,
      runOnJS: sharedValue1(store[15]).runOnJS,
      gestureLock: closure_14,
    };
    fn4.__workletHash = 9808165597638;
    fn4.__initData = closure_1_28;
    const obj3 = {
      scrollLock: closure_13,
      isDragScrolling: sharedValue4,
      gestureSpecs: connected,
      runOnJS: sharedValue1(store[15]).runOnJS,
      gestureLock: closure_14,
    };
    const fn5 = function o(velocityY) {
      velocityY = velocityY.velocityY;
      const absolute = Math.abs(velocityY);
      if (absolute > 200) {
        if (velocityY < 0) {
          const obj = {};
          const merged = Object.assign(store.get());
          obj.height = store4.get().drawerHeight - closure_1_1(closure_1_2[21])(store5.get(), closure_15).height;
          const result = store.set(obj);
          if (store2.get().mode === closure_1_15.DRAWER) {
            let DRAWER2 = closure_1_15.RESET;
          } else {
            DRAWER2 = closure_1_15.DRAWER;
          }
          const tmp16 = closure_1_1(closure_1_2[21]);
        }
      }
      if (absolute < 200) {
        if (store6.get().isDrawer) {
          if (store2.get().mode === closure_1_15.DRAWER) {
            let DRAWER = closure_1_15.RESET;
          } else {
            DRAWER = closure_1_15.DRAWER;
          }
        }
      }
      if (store2.get().mode === closure_1_15.FLOATING_DEFAULT) {
        let FLOATING_DEFAULT = closure_1_15.RESET;
      } else {
        FLOATING_DEFAULT = closure_1_15.FLOATING_DEFAULT;
      }
      const result1 = store9.set(false);
      const result2 = store8.set(false);
      closure_1_0(closure_1_2[15]).runOnJS(closure_14.unlock)(FLOATING_DEFAULT);
    };
    const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(fn4);
    fn5.__closure = {
      wrapperSpecs: store,
      wrapperDimensions: setControlsMode2,
      calculateVoicePanelHeaderSpecs: isScreenReaderEnabled1(store[21]),
      safeArea: safeArea2,
      edgeGutter: token1,
      controlsSpecs: windowDimensions2,
      VoicePanelControlsModes: token1,
      gestureSpecs: connected,
      scrollLock: closure_13,
      isDragScrolling: sharedValue4,
      runOnJS: sharedValue1(store[15]).runOnJS,
      gestureLock: closure_14,
    };
    fn5.__workletHash = 12106761920053;
    fn5.__initData = closure_1_27;
    let obj4 = {
      wrapperSpecs: store,
      wrapperDimensions: setControlsMode2,
      calculateVoicePanelHeaderSpecs: isScreenReaderEnabled1(store[21]),
      safeArea: safeArea2,
      edgeGutter: token1,
      controlsSpecs: windowDimensions2,
      VoicePanelControlsModes: token1,
      gestureSpecs: connected,
      scrollLock: closure_13,
      isDragScrolling: sharedValue4,
      runOnJS: sharedValue1(store[15]).runOnJS,
      gestureLock: closure_14,
    };
    const fn6 = function t() {
      const result = store9.set(false);
      const result1 = store8.set(false);
      closure_1_0(closure_1_2[15]).runOnJS(closure_14.unlock)();
    };
    const onEndResult = onTouchesCancelledResult.onEnd(fn5);
    fn6.__closure = {
      scrollLock: closure_13,
      isDragScrolling: sharedValue4,
      runOnJS: sharedValue1(store[15]).runOnJS,
      gestureLock: closure_14,
    };
    fn6.__workletHash = 15918380969837;
    fn6.__initData = closure_1_26;
    return onEndResult.onFinalize(fn6);
  }, items3);
  const obj18 = sharedValue1(4197);
  let fn = function h() {
    return store.get().drawerMode;
  };
  fn.__closure = { wrapperSpecs: sharedValue1 };
  fn.__workletHash = 2949834828607;
  fn.__initData = closure_33;
  let fn2 = function u(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = sharedValue1(store[15]);
      sharedValue1(store[15]).runOnJS(sharedValue1(store[23]).triggerHapticFeedback)(
        sharedValue1(store[23]).HapticFeedbackTypes.IMPACT_MEDIUM,
      );
      const runOnJSResult = sharedValue1(store[15]).runOnJS(sharedValue1(store[23]).triggerHapticFeedback);
    }
  };
  obj2 = {
    runOnJS: sharedValue1(4217).runOnJS,
    triggerHapticFeedback: sharedValue1(4446).triggerHapticFeedback,
    HapticFeedbackTypes: sharedValue1(4446).HapticFeedbackTypes,
  };
  fn2.__closure = obj2;
  fn2.__workletHash = 10186886451735;
  fn2.__initData = closure_34;
  const animatedReaction = sharedValue1(4217).useAnimatedReaction(fn, fn2);
  isScreenReaderEnabled1 = undefined;
  dependencyMap = undefined;
  controlsSpecs3 = undefined;
  windowDimensions2 = undefined;
  mode = undefined;
  setControlsMode2 = undefined;
  safeArea2 = undefined;
  connected = undefined;
  const obj19 = sharedValue1(4217);
  isScreenReaderEnabled1 = sharedValue1(4915).useIsScreenReaderEnabled();
  const tmp32 = isScreenReaderEnabled1(11828)({ ignoreKeyboard: true });
  dependencyMap = tmp32;
  const context2 = windowDimensions2.useContext(isScreenReaderEnabled1(12062));
  controlsSpecs3 = context2.controlsSpecs;
  windowDimensions2 = context2.windowDimensions;
  mode = context2.mode;
  setControlsMode2 = context2.setControlsMode;
  safeArea2 = context2.safeArea;
  connected = context2.connected;
  const obj21 = sharedValue1(4915);
  let fn3 = function n() {
    return {
      connected: connected.get(),
      currentControlsMode: controlsSpecs3.get().mode,
      mode: mode.get(),
      windowWidth: windowDimensions2.get().width,
      windowHeight: windowDimensions2.get().height,
      windowHeightIgnoringKeyboard: store.get().height,
      controlsHeightValue: controlsSpecs3.get().height,
      safeArea: safeArea2.get(),
    };
  };
  fn3.__closure = {
    connected,
    controlsSpecs: controlsSpecs3,
    mode,
    windowDimensions: windowDimensions2,
    windowDimensionsIgnoringKeyboard: tmp32,
    safeArea: safeArea2,
  };
  fn3.__workletHash = 11588370229444;
  fn3.__initData = closure_35;
  let fn4 = function s(safeAreaState, currentControlsMode) {
    let obj = sharedValue1(store[26]);
    if (!obj.cheapWorkletShallowEqual(safeAreaState, currentControlsMode)) {
      ({ currentControlsMode, mode, windowWidth, controlsHeightValue, safeArea } = safeAreaState);
      if (sharedValue5.DISMISSED !== mode) {
        if (tmp5.PIP !== mode) {
          const PANEL = tmp5.PANEL;
          if (token1.RESET === currentControlsMode) {
            let tmpResult = tmp(tmp2[15]);
            currentControlsMode = undefined;
            if (currentControlsMode != null) {
              currentControlsMode = currentControlsMode.currentControlsMode;
            }
            if (currentControlsMode == null) {
              currentControlsMode = tmp25.FLOATING_DEFAULT;
            }
            obj = { mode: null };
            obj[0] = currentControlsMode;
            tmpResult.runOnJS(setControlsMode2)(obj);
          } else if (tmp25.HIDDEN === currentControlsMode) {
            if (isScreenReaderEnabled1) {
              obj = {};
              const merged = Object.assign(obj7.get());
              obj.hidden = false;
              const result = obj7.set(obj);
            } else if (!obj7.get().hidden) {
              obj1 = {};
              const merged1 = Object.assign(obj7.get());
              obj1.hidden = true;
              const result1 = obj7.set(obj1);
            }
          } else if (tmp25.FLOATING_DEFAULT === currentControlsMode) {
            const obj2 = { x: 0, y: null, width: null, height: null, drawerMode: false, hidden: false };
            const _Math = Math;
            obj2[1] = -1 * Math.max(safeArea.bottom, closure_13);
            tmpResult = tmp(tmp2[22]);
            obj2[2] = tmpResult.getControlsDefaultWidth(windowWidth, safeArea.left, safeArea.right);
            obj2[3] = controlsHeightValue;
            const result2 = sharedValue1.set(obj2);
          } else if (tmp25.DRAWER === currentControlsMode) {
            const drawerSpec = tmp(tmp2[27]).getDrawerSpec(tmp4, safeArea.top);
            ({ minHeight, maxHeight } = drawerSpec);
            if (sharedValue1.get().height <= controlsHeightValue) {
              minHeight = maxHeight;
            } else if (null != currentControlsMode) {
              const tmpResult2 = tmp(tmp2[27]);
            }
            const obj3 = { x: 0, y: 0, width: null, height: null, drawerMode: true, hidden: false };
            const tmpResult1 = tmp(tmp2[27]);
            obj3[2] = tmp(tmp2[22]).getControlsDrawerOpenWidth(windowWidth, safeArea.left, safeArea.right);
            obj3[3] = minHeight;
            const result3 = obj15.set(obj3);
            const tmpResult3 = tmp(tmp2[22]);
          }
        }
      }
      if (!sharedValue1.get().hidden) {
        const obj4 = {};
        const merged2 = Object.assign(obj12.get());
        obj4.hidden = true;
        const result4 = obj12.set(obj4);
      }
    }
  };
  obj3 = {
    cheapWorkletShallowEqual: sharedValue1(9223).cheapWorkletShallowEqual,
    VoicePanelModes: sharedValue5,
    wrapperSpecs: sharedValue1,
    VoicePanelControlsModes: token1,
    runOnJS: sharedValue1(4217).runOnJS,
    setControlsMode: setControlsMode2,
    isScreenReaderEnabled: isScreenReaderEnabled1,
    EDGE_GUTTER: closure_13,
    getControlsDefaultWidth: sharedValue1(12069).getControlsDefaultWidth,
    getDrawerSpec: sharedValue1(16988).getDrawerSpec,
    getControlsDrawerOpenWidth: sharedValue1(12069).getControlsDrawerOpenWidth,
  };
  fn4.__closure = obj3;
  fn4.__workletHash = 1154430392188;
  fn4.__initData = closure_36;
  const animatedReaction1 = sharedValue1(4217).useAnimatedReaction(fn3, fn4);
  const tmp35 = controlsSpecs3(windowDimensions2.useState(false), 2);
  closure_13 = tmp36;
  const obj22 = sharedValue1(4217);
  class De {
    constructor() {
      return controlsSpecs.get().mode;
    }
  }
  De.__closure = { controlsSpecs };
  De.__workletHash = 12841804697749;
  De.__initData = closure_41;
  class Ce {
    constructor(arg0, arg1) {
      tmp = gestureState !== arg1 && closure_1;
      if (tmp) {
        tmp2 = closure_15;
        if (gestureState === closure_15.DRAWER) {
          if (arg1 !== tmp2.DRAWER) {
            tmp8 = closure_0;
            tmp9 = closure_2;
            obj2 = closure_0(closure_2[15]);
            tmp10 = closure_13;
            flag2 = true;
            tmp11 = obj2.runOnJS(closure_13)(true);
          }
        }
        tmp3 = gestureState !== tmp2.DRAWER && arg1 === tmp2.DRAWER;
        if (tmp3) {
          tmp4 = closure_0;
          tmp5 = closure_2;
          obj = closure_0(closure_2[15]);
          tmp6 = closure_13;
          flag = false;
          tmp7 = obj.runOnJS(closure_13)(false);
        }
      }
      return;
    }
  }
  obj4 = {
    isScreenReaderEnabled,
    VoicePanelControlsModes: token1,
    runOnJS: sharedValue1(4217).runOnJS,
    setIsDrawer: tmp36,
  };
  Ce.__closure = obj4;
  Ce.__workletHash = 1065348199900;
  Ce.__initData = closure_42;
  const animatedReaction2 = sharedValue1(4217).useAnimatedReaction(De, Ce);
  const tmp38 = controlsSpecs3(windowDimensions2.useState(false), 2);
  closure_14 = tmp39;
  const obj24 = sharedValue1(4217);
  function be() {
    return sharedValue5.get().drawerMode;
  }
  be.__closure = { wrapperSpecs: sharedValue1 };
  be.__workletHash = 1707616584768;
  be.__initData = closure_43;
  class Re {
    constructor(arg0, arg1) {
      if (gestureState !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[15]);
        tmp3 = closure_14;
        runOnJSResult = obj.runOnJS(closure_14);
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
  const obj26 = sharedValue1(4217);
  Re.__closure = { runOnJS: sharedValue1(4217).runOnJS, setIsDrawerActive: tmp38[1] };
  Re.__workletHash = 4134397877805;
  Re.__initData = closure_44;
  const animatedReaction3 = obj26.useAnimatedReaction(be, Re);
  const items4 = [setControlsMode];
  const id = windowDimensions2.useId();
  const callback1 = windowDimensions2.useCallback(() => {
    windowDimensions2({ mode: token1.FLOATING_DEFAULT });
  }, items4);
  obj6 = {
    value: controlsSpecs3(
      windowDimensions2.useState(() =>
        sharedValue1(store[16]).createUseAnimatedScrollLock(closure_12, closure_13, sharedValue5, sharedValue4),
      ),
      1,
    )[0],
    children: null,
  };
  const items5 = [
    callback(isScreenReaderEnabled1(17021), { wrapperSpecs: sharedValue1 }),
    callback(closure_37, {
      channelId,
      wrapperSpecs: sharedValue1,
      controlsSpecs,
      accessoryHeights: tmp14,
      gestureState,
    }),
  ];
  obj7 = {
    nativeID: id,
    style: tmp6.accessibilityWrapper,
    accessibilityViewIsModal: tmp35[0],
    onAccessibilityEscape: callback1,
    pointerEvents: "box-none",
    children: null,
  };
  const obj5 = { runOnJS: sharedValue1(4217).runOnJS, setIsDrawerActive: tmp38[1] };
  obj8 = { gesture: memo, children: null };
  obj9 = { style: items6, animatedProps: hiddenProps, children: null };
  items6 = [tmp6.wrapper, animatedStyle, hiddenStyles];
  const tmp45 = isScreenReaderEnabled1(16913);
  let MIDNIGHT;
  if (tmp11) {
    if (!tmp38[0]) {
      MIDNIGHT = constants.MIDNIGHT;
    }
  }
  const obj10 = { theme: MIDNIGHT, children: null };
  obj11 = { matchAppTheme: !tmp11 };
  const items7 = [
    callback(sharedValue1(16997).VoicePanelVisualEffectView, obj11),
    callback(closure_39, { openTab: callback, wrapperSpecs: sharedValue1, sharedTab: sharedValue }),
  ];
  obj10[1] = items7;
  const items8 = [
    closure_20(sharedValue1(4204).ThemeContextProvider, obj10),
    callback(tmp4(17022), {
      wrapperSpecs: sharedValue1,
      tab: first,
      sharedTab: sharedValue,
      gestureSpecs: sharedValue2,
      openTab: callback,
    }),
  ];
  const tmp46 = isScreenReaderEnabled1(7805);
  let tmp44Result = null;
  if (!tmpResult.isMetaQuest()) {
    const obj12 = { openTab: null };
    obj12[0] = callback;
    tmp44Result = tmp44(closure_25, obj12);
  }
  items8[2] = tmp44Result;
  obj9[2] = items8;
  obj8[1] = closure_20(tmp46, obj9);
  obj7[5] = callback(sharedValue1(5660).GestureDetector, obj8);
  items5[2] = callback(tmp45, obj7);
  obj6[1] = items5;
  return closure_20(sharedValue1(11898).ControlsGestureScrollLock.Provider, obj6);
});
let result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControls.tsx");

export default memoResult;
