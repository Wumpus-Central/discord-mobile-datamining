// === Module 17839: VoicePanelPIP ===

// Module 17839 (VoicePanelPIP)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4739 */;
import native from "native" /* 4827 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import ExternalPipDefault from "ExternalPip" /* 5221 */;
import spring from "spring" /* 5378 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6334 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 10372 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10804 */;
import EmbeddedActivitiesActionCreatorsAll from "EmbeddedActivitiesActionCreators" /* 10853 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11969 */;
import VoicePanelPIPHandoff from "VoicePanelPIPHandoff" /* 11976 */;
import utils_triggerIOSHapticDefault from "utils/triggerIOSHaptic" /* 17738 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 17739 */;
import VoicePanelPIPStateContext from "VoicePanelPIPStateContext" /* 17741 */;
import VoicePanelPIPScaleCache from "VoicePanelPIPScaleCache" /* 17840 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;
import FramesStore from "FramesStore" /* 10807 */;
import VoicePanelStore from "VoicePanelStore" /* 6074 */;

require = fn;
function renderPIPWrapper(arg0, arg1, transitionState, transitionCleanUp) {
  return value2(closure_55, { transitionState, transitionCleanUp }, arg0);
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const VoicePanelConstants = fn(11970);
({ DRAWER_SPRING_PHYSICS: closure_9, VoicePanelModes: c10, SECONDARY_PIP_TOP_MARGIN } = VoicePanelConstants);
const VoicePanelControlsModes = fn(11968).VoicePanelControlsModes;
const VoicePanelPIPModes = fn(17740).VoicePanelPIPModes;
const ActivityPanelModes = fn(6067).ActivityPanelModes;
const isLaunched = fn(10802).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(5092);
let obj = { container: { position: "absolute", zIndex: 10 }, pipContentWrapper: { backgroundColor: "black" }, inAppElevationShadow: {}, pipMask: null, multiPipContainer: null, pushToTalkContainer: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.overflow = "hidden";
obj.pipMask = obj3;
let obj4 = {};
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.flexDirection = "column";
obj4.alignItems = "center";
obj4.gap = SECONDARY_PIP_TOP_MARGIN;
obj.multiPipContainer = obj4;
obj.pushToTalkContainer = { position: "absolute", top: 0, left: 0, right: 0 };
let closure_17 = createStyles.createStyles(obj);
let c18 = 10;
function getTouchesCentroid(allTouches) {
  let num = 0;
  let num2 = 0;
  const iter = allTouches[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    num = num + nextResult.absoluteX;
    num2 = num2 + nextResult.absoluteY;
    continue;
  }
  const point = { x: num / allTouches.length, y: num2 / allTouches.length };
  return point;
}
getTouchesCentroid.__closure = {};
getTouchesCentroid.__workletHash = 15663926518076;
getTouchesCentroid.__initData = { code: "function getTouchesCentroid_VoicePanelPIPTsx1(touches){let x=0;let y=0;for(const touch of touches){x+=touch.absoluteX;y+=touch.absoluteY;}return{x:x/touches.length,y:y/touches.length};}" };
function getTouchesSpread(allTouches, touchesCentroid) {
  if (allTouches.length < 2) {
    return 0;
  } else {
    let num = 0;
    const iter = allTouches[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let diff = nextResult.absoluteX - touchesCentroid.x;
      let diff1 = nextResult.absoluteY - touchesCentroid.y;
      let _Math = Math;
      num = num + Math.sqrt(diff * diff + diff1 * diff1);
      continue;
    }
    return num / allTouches.length;
  }
}
getTouchesSpread.__closure = {};
getTouchesSpread.__workletHash = 14242071118706;
getTouchesSpread.__initData = { code: "function getTouchesSpread_VoicePanelPIPTsx2(touches,centroid){if(touches.length<2)return 0;let total=0;for(const touch of touches){const dx=touch.absoluteX-centroid.x;const dy=touch.absoluteY-centroid.y;total+=Math.sqrt(dx*dx+dy*dy);}return total/touches.length;}" };
let ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePIPTileHandoff() {
  const cResult = c.c(4);
  const pipHandoff = noop.useContext(VoicePanelStateContextDefault).pipHandoff;
  const mode = VoicePanelPIPStateContext.usePIPState().mode;
  const pIPCardsSettled = VoicePanelPIPHandoff.usePIPCardsSettled(pipHandoff);
  const pIPPanelLayoutCommitted = VoicePanelPIPHandoff.usePIPPanelLayoutCommitted(pipHandoff);
  if (cResult[0] === pIPPanelLayoutCommitted) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === tmp5) {
        let tmp6 = cResult[3];
      }
      return tmp6;
    }
  }
  const obj5 = { isMainPIPActive: null != mode, cardArrivedInPIP: mode !== VoicePanelPIPModes.IN_APP || pIPCardsSettled, panelLayoutCommitted: pIPPanelLayoutCommitted };
  cResult[0] = pIPPanelLayoutCommitted;
  cResult[1] = null != mode;
  cResult[2] = mode !== VoicePanelPIPModes.IN_APP || pIPCardsSettled;
  cResult[3] = obj5;
  tmp6 = obj5;
}) : (function usePIPTileHandoff() {
  const pipHandoff = noop.useContext(VoicePanelStateContextDefault).pipHandoff;
  const mode = VoicePanelPIPStateContext.usePIPState().mode;
  const pIPCardsSettled = VoicePanelPIPHandoff.usePIPCardsSettled(pipHandoff);
  const obj4 = { isMainPIPActive: null != mode, cardArrivedInPIP: null, panelLayoutCommitted: null };
  let tmp3 = mode !== VoicePanelPIPModes.IN_APP;
  const pIPPanelLayoutCommitted = VoicePanelPIPHandoff.usePIPPanelLayoutCommitted(pipHandoff);
  if (!tmp3) {
    tmp3 = pIPCardsSettled;
  }
  obj4.cardArrivedInPIP = tmp3;
  obj4.panelLayoutCommitted = pIPPanelLayoutCommitted;
  return obj4;
});
const INACTIVE_GESTURE_STATE = { pressed: false, active: false, baseX: 0, baseY: 0, offsetX: 0, offsetY: 0, originX: 0, originY: 0, spread: 0 };
const __initData = { code: "function VoicePanelPIPTsx3(state,velocityX,velocityY){const{pipState,getScaledPIPContainerHeight,calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions}=this.__closure;const scale=pipState.scale.get();const width=pipState.width*scale;const height=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:scale});const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:state.baseX+state.offsetX+width/2,absoluteY:state.baseY+state.offsetY+height/2,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});}" };
const __initData2 = { code: "function VoicePanelPIPTsx4(){const{pipState,getScaledPIPContainerHeight,mainTileInLayout,gestureState,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,DRAWER_SPRING_PHYSICS,PIP_LAYOUT_PHYSICS,opacity,withSpring,getVoicePanelPIPBorderRadius}=this.__closure;const width_0=pipState.width*pipState.scale.get();const height_0=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP&&mainTileInLayout,scale:pipState.scale.get()});const state_0=gestureState.get();let x;let y;if(state_0.active){x=state_0.baseX+state_0.offsetX;y=state_0.baseY+state_0.offsetY;}else{const clamped=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width_0,height:height_0,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=clamped.x;y=clamped.y;}const physics=state_0.active?DRAWER_SPRING_PHYSICS:PIP_LAYOUT_PHYSICS;return{width:width_0,height:height_0,opacity:opacity.get(),transform:[{translateX:withSpring(x,physics)},{translateY:withSpring(y,physics)}],borderRadius:getVoicePanelPIPBorderRadius(width_0,height_0)};}" };
const __initData3 = { code: "function VoicePanelPIPTsx5(){const{pipState,getVoicePanelPIPBorderRadius}=this.__closure;const{width:width_1,height:height_1,scale:scale_0}=pipState;return{width:width_1*scale_0.get(),height:height_1*scale_0.get(),borderRadius:getVoicePanelPIPBorderRadius(width_1,height_1)};}" };
const __initData4 = { code: "function VoicePanelPIPTsx6(){const{mainTileVisible}=this.__closure;return{opacity:mainTileVisible?1:0};}" };
let closure_27 = { code: "function VoicePanelPIPTsx7(){const{updateSharedValueIfChanged,wrapperOffset,gestureState,INACTIVE_GESTURE_STATE}=this.__closure;updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});gestureState.set(INACTIVE_GESTURE_STATE);}" };
let closure_28 = { code: "function VoicePanelPIPTsx8(t8){const{gestureState,settlePIPPosition,updateSharedValueIfChanged,wrapperOffset,INACTIVE_GESTURE_STATE,runOnJS,updateSourceTrackingView,setVoicePanelPIPScaleCached,pipState}=this.__closure;var velocityX_0=t8.velocityX,velocityY_0=t8.velocityY;var state_3=gestureState.get();settlePIPPosition(state_3,velocityX_0,velocityY_0);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});gestureState.set(INACTIVE_GESTURE_STATE);runOnJS(updateSourceTrackingView)();runOnJS(setVoicePanelPIPScaleCached)(pipState.scale.get());}" };
const __initData5 = { code: "function VoicePanelPIPTsx9(event_1,manager){const{getTouchesCentroid,getTouchesSpread,gestureState,MIN_PINCH_SPAN,pipState,clampPIPScale,windowDimensions,safeArea,pipAvoidanceSpecs,State,MIN_GESTURE_START,getClampedPIPPosition,wrapperDimensions,getScaledPIPContainerHeight,updateSharedValueIfChanged,wrapperOffset,runOnJS,triggerIOSHaptic}=this.__closure;var centroid_1=getTouchesCentroid(event_1.allTouches);var spread_0=getTouchesSpread(event_1.allTouches,centroid_1);var state_2=gestureState.get();if(state_2.active){var offsetX=state_2.offsetX+centroid_1.x-state_2.originX;var offsetY=state_2.offsetY+centroid_1.y-state_2.originY;if(state_2.spread>MIN_PINCH_SPAN&&spread_0>MIN_PINCH_SPAN){var previousScale=pipState.scale.get();var scale_1=clampPIPScale({scale:previousScale*(spread_0/state_2.spread),width:pipState.width,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get()});if(scale_1!==previousScale){pipState.scale.set(scale_1);var scaleChange=scale_1/previousScale;offsetX=offsetX+(centroid_1.x-(state_2.baseX+offsetX))*(1-scaleChange);offsetY=offsetY+(centroid_1.y-(state_2.baseY+offsetY))*(1-scaleChange);}}gestureState.set({pressed:state_2.pressed,active:true,baseX:state_2.baseX,baseY:state_2.baseY,offsetX:offsetX,offsetY:offsetY,originX:centroid_1.x,originY:centroid_1.y,spread:spread_0});return;}if(event_1.state!==State.BEGAN){return;}if(Math.abs(state_2.originX-centroid_1.x)>MIN_GESTURE_START||Math.abs(state_2.originY-centroid_1.y)>MIN_GESTURE_START||Math.abs(state_2.spread-spread_0)>MIN_GESTURE_START){var scale_2=pipState.scale.get();var _getClampedPIPPositio=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:pipState.width*scale_2,height:getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:scale_2}),windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top}),x_0=_getClampedPIPPositio.x,y_0=_getClampedPIPPositio.y;gestureState.set({pressed:true,active:true,baseX:x_0,baseY:y_0,offsetX:0,offsetY:0,originX:centroid_1.x,originY:centroid_1.y,spread:spread_0});updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:0});manager.activate();runOnJS(triggerIOSHaptic)();}}" };
const __initData6 = { code: "function VoicePanelPIPTsx10(event_0){const{updateSharedValueIfChanged,gestureState,getTouchesCentroid,getTouchesSpread}=this.__closure;var remainingTouches=event_0.allTouches.filter(function(touch){return!event_0.changedTouches.some(function(changedTouch){return changedTouch.id===touch.id;});});if(remainingTouches.length===0){updateSharedValueIfChanged(gestureState,{pressed:false});return;}var centroid_0=getTouchesCentroid(remainingTouches);updateSharedValueIfChanged(gestureState,{originX:centroid_0.x,originY:centroid_0.y,spread:getTouchesSpread(remainingTouches,centroid_0)});}" };
const __initData7 = { code: "function VoicePanelPIPTsx11(event){const{getTouchesCentroid,getTouchesSpread,gestureState,INACTIVE_GESTURE_STATE,updateSharedValueIfChanged}=this.__closure;var centroid=getTouchesCentroid(event.allTouches);var spread=getTouchesSpread(event.allTouches,centroid);var state_1=gestureState.get();if(!state_1.pressed){gestureState.set({...INACTIVE_GESTURE_STATE,pressed:true,originX:centroid.x,originY:centroid.y,spread:spread});return;}updateSharedValueIfChanged(gestureState,{originX:centroid.x,originY:centroid.y,spread:spread});}" };
const __initData8 = { code: "function VoicePanelPIPTsx12(){const{runOnJS,setFocused}=this.__closure;runOnJS(setFocused)(null);}" };
const __initData9 = { code: "function VoicePanelPIPTsx13(){const{pipMode,VoicePanelPIPModes,runOnJS,setMode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,showControls,hideControls}=this.__closure;if(pipMode===VoicePanelPIPModes.IN_APP){runOnJS(setMode)(VoicePanelModes.PANEL);}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)();}else{runOnJS(hideControls)();}}}" };
const __initData10 = { code: "function VoicePanelPIPTsx14(){const{runOnJS,handleSecondaryPIPTap}=this.__closure;runOnJS(handleSecondaryPIPTap)();}" };
const __initData11 = { code: "function VoicePanelPIPTsx15(state,velocityX,velocityY){const{pipState,getScaledPIPContainerHeight,calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions}=this.__closure;const scale=pipState.scale.get();const width=pipState.width*scale;const height=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:scale});const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:state.baseX+state.offsetX+width/2,absoluteY:state.baseY+state.offsetY+height/2,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});}" };
const __initData12 = { code: "function VoicePanelPIPTsx16(){const{pipState,getScaledPIPContainerHeight,mainTileInLayout,gestureState,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,DRAWER_SPRING_PHYSICS,PIP_LAYOUT_PHYSICS,opacity,withSpring,getVoicePanelPIPBorderRadius}=this.__closure;const width_0=pipState.width*pipState.scale.get();const height_0=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP&&mainTileInLayout,scale:pipState.scale.get()});const state_0=gestureState.get();let x;let y;if(state_0.active){x=state_0.baseX+state_0.offsetX;y=state_0.baseY+state_0.offsetY;}else{const clamped=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width_0,height:height_0,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=clamped.x;y=clamped.y;}const physics=state_0.active?DRAWER_SPRING_PHYSICS:PIP_LAYOUT_PHYSICS;return{width:width_0,height:height_0,opacity:opacity.get(),transform:[{translateX:withSpring(x,physics)},{translateY:withSpring(y,physics)}],borderRadius:getVoicePanelPIPBorderRadius(width_0,height_0)};}" };
const __initData13 = { code: "function VoicePanelPIPTsx17(){const{pipState,getVoicePanelPIPBorderRadius}=this.__closure;const{width:width_1,height:height_1,scale:scale_0}=pipState;return{width:width_1*scale_0.get(),height:height_1*scale_0.get(),borderRadius:getVoicePanelPIPBorderRadius(width_1,height_1)};}" };
const __initData14 = { code: "function VoicePanelPIPTsx18(){const{mainTileVisible}=this.__closure;return{opacity:mainTileVisible?1:0};}" };
let closure_39 = { code: "function VoicePanelPIPTsx19(){const{updateSharedValueIfChanged,wrapperOffset,gestureState,INACTIVE_GESTURE_STATE}=this.__closure;updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});gestureState.set(INACTIVE_GESTURE_STATE);}" };
let closure_40 = { code: "function VoicePanelPIPTsx20({velocityX:velocityX_0,velocityY:velocityY_0}){const{gestureState,settlePIPPosition,updateSharedValueIfChanged,wrapperOffset,INACTIVE_GESTURE_STATE,runOnJS,updateSourceTrackingView,setVoicePanelPIPScaleCached,pipState}=this.__closure;const state_3=gestureState.get();settlePIPPosition(state_3,velocityX_0,velocityY_0);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});gestureState.set(INACTIVE_GESTURE_STATE);runOnJS(updateSourceTrackingView)();runOnJS(setVoicePanelPIPScaleCached)(pipState.scale.get());}" };
let closure_41 = { code: "function VoicePanelPIPTsx21(event_1,manager){const{getTouchesCentroid,getTouchesSpread,gestureState,MIN_PINCH_SPAN,pipState,clampPIPScale,windowDimensions,safeArea,pipAvoidanceSpecs,State,MIN_GESTURE_START,getClampedPIPPosition,wrapperDimensions,getScaledPIPContainerHeight,updateSharedValueIfChanged,wrapperOffset,runOnJS,triggerIOSHaptic}=this.__closure;const centroid_1=getTouchesCentroid(event_1.allTouches);const spread_0=getTouchesSpread(event_1.allTouches,centroid_1);const state_2=gestureState.get();if(state_2.active){let offsetX=state_2.offsetX+centroid_1.x-state_2.originX;let offsetY=state_2.offsetY+centroid_1.y-state_2.originY;if(state_2.spread>MIN_PINCH_SPAN&&spread_0>MIN_PINCH_SPAN){const previousScale=pipState.scale.get();const scale_1=clampPIPScale({scale:previousScale*(spread_0/state_2.spread),width:pipState.width,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get()});if(scale_1!==previousScale){pipState.scale.set(scale_1);const scaleChange=scale_1/previousScale;offsetX+=(centroid_1.x-(state_2.baseX+offsetX))*(1-scaleChange);offsetY+=(centroid_1.y-(state_2.baseY+offsetY))*(1-scaleChange);}}gestureState.set({pressed:state_2.pressed,active:true,baseX:state_2.baseX,baseY:state_2.baseY,offsetX:offsetX,offsetY:offsetY,originX:centroid_1.x,originY:centroid_1.y,spread:spread_0});return;}if(event_1.state!==State.BEGAN)return;if(Math.abs(state_2.originX-centroid_1.x)>MIN_GESTURE_START||Math.abs(state_2.originY-centroid_1.y)>MIN_GESTURE_START||Math.abs(state_2.spread-spread_0)>MIN_GESTURE_START){const scale_2=pipState.scale.get();const{x:x_0,y:y_0}=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:pipState.width*scale_2,height:getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:scale_2}),windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});gestureState.set({pressed:true,active:true,baseX:x_0,baseY:y_0,offsetX:0,offsetY:0,originX:centroid_1.x,originY:centroid_1.y,spread:spread_0});updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:0});manager.activate();runOnJS(triggerIOSHaptic)();}}" };
let closure_42 = { code: "function VoicePanelPIPTsx22(event_0){const{updateSharedValueIfChanged,gestureState,getTouchesCentroid,getTouchesSpread}=this.__closure;const remainingTouches=event_0.allTouches.filter(function(touch){return!event_0.changedTouches.some(function(changedTouch){return changedTouch.id===touch.id;});});if(remainingTouches.length===0){updateSharedValueIfChanged(gestureState,{pressed:false});return;}const centroid_0=getTouchesCentroid(remainingTouches);updateSharedValueIfChanged(gestureState,{originX:centroid_0.x,originY:centroid_0.y,spread:getTouchesSpread(remainingTouches,centroid_0)});}" };
let closure_43 = { code: "function VoicePanelPIPTsx23(event){const{getTouchesCentroid,getTouchesSpread,gestureState,INACTIVE_GESTURE_STATE,updateSharedValueIfChanged}=this.__closure;const centroid=getTouchesCentroid(event.allTouches);const spread=getTouchesSpread(event.allTouches,centroid);const state_1=gestureState.get();if(!state_1.pressed){gestureState.set({...INACTIVE_GESTURE_STATE,pressed:true,originX:centroid.x,originY:centroid.y,spread:spread});return;}updateSharedValueIfChanged(gestureState,{originX:centroid.x,originY:centroid.y,spread:spread});}" };
let closure_44 = { code: "function VoicePanelPIPTsx24(){const{runOnJS,setFocused}=this.__closure;runOnJS(setFocused)(null);}" };
let closure_45 = { code: "function VoicePanelPIPTsx25(){const{pipMode,VoicePanelPIPModes,runOnJS,setMode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,showControls,hideControls}=this.__closure;if(pipMode===VoicePanelPIPModes.IN_APP){runOnJS(setMode)(VoicePanelModes.PANEL);}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)();}else{runOnJS(hideControls)();}}}" };
let closure_46 = { code: "function VoicePanelPIPTsx26(){const{runOnJS,handleSecondaryPIPTap}=this.__closure;runOnJS(handleSecondaryPIPTap)();}" };
ReactCompilerGating = fn(558);
let closure_47 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePIPGesture(pipMode, mainTileInLayout, mainTileVisible) {
  _require = pipMode;
  importDefault = mainTileInLayout;
  closure_2 = mainTileVisible;
  const cResult = require("c").c(84);
  const context = hideControls.useContext(require("VoicePanelStateContext"));
  controlsSpecs = context.controlsSpecs;
  hideControls = context.hideControls;
  const pipAvoidanceSpecs = context.pipAvoidanceSpecs;
  const safeArea = context.safeArea;
  const setFocused = context.setFocused;
  const setMode = context.setMode;
  const showControls = context.showControls;
  const windowDimensions = context.windowDimensions;
  const wrapperDimensions = context.wrapperDimensions;
  const wrapperOffset = context.wrapperOffset;
  const channelId = context.channelId;
  let obj = require("c");
  let obj2 = hideControls;
  let size = require("VoicePanelPIPStateContext").usePIPState();
  let obj3 = require("VoicePanelPIPStateContext");
  const sharedValue = require("ReanimatedRexport").useSharedValue(INACTIVE_GESTURE_STATE);
  let obj4 = require("ReanimatedRexport");
  const sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
  if (cResult[0] !== sharedValue1) {
    const fn = function p() {
      const timeout = setTimeout(() => {
        const result = sharedValue1.set(1);
      }, 200);
      return () => {
        clearTimeout(closure_0);
      };
    };
    let items = [sharedValue1];
    cResult[0] = sharedValue1;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp10 = items;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[1];
    tmp10 = cResult[2];
  }
  const effect = obj2.useEffect(tmp9, tmp10);
  if (cResult[3] === size.containerHeight) {
    if (cResult[4] === size.height) {
      if (cResult[5] === size.scale) {
        if (cResult[6] === size.showSecondaryPIP) {
          if (cResult[7] === size.width) {
            if (cResult[8] === safeArea) {
              if (cResult[9] === windowDimensions) {
                if (cResult[10] === wrapperDimensions) {
                  let tmp12 = cResult[11];
                }
                closure_17 = tmp12;
                function te() {
                  const scale = size.scale;
                  const result = size.width * scale.get();
                  const obj2 = { height: size.height, containerHeight: size.containerHeight, showSecondaryPIP: null, scale: null };
                  let showSecondaryPIP = size.showSecondaryPIP;
                  if (showSecondaryPIP) {
                    showSecondaryPIP = closure_1;
                  }
                  obj2.showSecondaryPIP = showSecondaryPIP;
                  const scale2 = size.scale;
                  obj2.scale = scale2.get();
                  const scaledPIPContainerHeight = VoicePanelPIPUtils.getScaledPIPContainerHeight(obj2);
                  value = sharedValue.get();
                  if (value.active) {
                    x = value.baseX + value.offsetX;
                    y = value.baseY + value.offsetY;
                  } else {
                    size = { pipX: wrapperDimensions.get().pipX, pipY: wrapperDimensions.get().pipY, width: result, height: scaledPIPContainerHeight, windowDimensions: windowDimensions.get(), safeArea: safeArea.get(), bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top };
                    const clampedPIPPosition = VoicePanelPIPUtils.getClampedPIPPosition(size);
                    ({ x, y } = clampedPIPPosition);
                    const tmp3Result = VoicePanelPIPUtils;
                  }
                  if (value.active) {
                    let PIP_LAYOUT_PHYSICS = options;
                  } else {
                    PIP_LAYOUT_PHYSICS = VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS;
                  }
                  const size1 = { width: result, height: scaledPIPContainerHeight, opacity: sharedValue1.get(), transform: null, borderRadius: null };
                  const obj3 = { translateX: null };
                  obj3.translateX = spring.withSpring(x, PIP_LAYOUT_PHYSICS);
                  const items = [obj3, ];
                  const obj4 = { translateY: null };
                  const tmp3Result4 = spring;
                  obj4.translateY = spring.withSpring(y, PIP_LAYOUT_PHYSICS);
                  items[1] = obj4;
                  size1.transform = items;
                  const tmp3Result5 = spring;
                  size1.borderRadius = VoicePanelPIPUtils.getVoicePanelPIPBorderRadius(result, scaledPIPContainerHeight);
                  return size1;
                }
                let obj6 = { pipState: size, getScaledPIPContainerHeight: tmp(tmp2[18]).getScaledPIPContainerHeight, mainTileInLayout, gestureState: sharedValue, getClampedPIPPosition: tmp(tmp2[18]).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, DRAWER_SPRING_PHYSICS: showControls, PIP_LAYOUT_PHYSICS: tmp(tmp2[18]).PIP_LAYOUT_PHYSICS, opacity: sharedValue1, withSpring: tmp(tmp2[20]).withSpring, getVoicePanelPIPBorderRadius: tmp(tmp2[18]).getVoicePanelPIPBorderRadius };
                te.__closure = obj6;
                te.__workletHash = 6745565797102;
                te.__initData = __initData2;
                const animatedStyle = tmp(tmp2[17]).useAnimatedStyle(te);
                const tmpResult = tmp(tmp2[17]);
                function ie() {
                  ({ width, height, scale } = size);
                  size = { width: width * scale.get(), height: height * scale.get(), borderRadius: VoicePanelPIPUtils.getVoicePanelPIPBorderRadius(width, height) };
                  return size;
                }
                let obj7 = { pipState: size, getVoicePanelPIPBorderRadius: tmp(tmp2[18]).getVoicePanelPIPBorderRadius };
                ie.__closure = obj7;
                ie.__workletHash = 335208486668;
                ie.__initData = __initData3;
                const animatedStyle1 = tmp(tmp2[17]).useAnimatedStyle(ie);
                const tmpResult5 = tmp(tmp2[17]);
                function ae() {
                  let opacity = 0;
                  if (closure_2) {
                    opacity = 1;
                  }
                  return { opacity };
                }
                const obj8 = { mainTileVisible };
                ae.__closure = obj8;
                ae.__workletHash = 10222959683662;
                ae.__initData = __initData4;
                const animatedStyle2 = tmp(tmp2[17]).useAnimatedStyle(ae);
                if (cResult[12] === sharedValue) {
                  if (cResult[13] === pipAvoidanceSpecs) {
                    if (cResult[14] === size.containerHeight) {
                      if (cResult[15] === size.height) {
                        if (cResult[16] === size.scale) {
                          if (cResult[17] === size.showSecondaryPIP) {
                            if (cResult[18] === size.width) {
                              if (cResult[19] === safeArea) {
                                if (cResult[20] === tmp12) {
                                  if (cResult[21] === windowDimensions) {
                                    if (cResult[22] === wrapperDimensions) {
                                      if (cResult[23] === wrapperOffset) {
                                        if (cResult[49] === controlsSpecs) {
                                          if (cResult[50] === hideControls) {
                                            if (cResult[51] === pipMode) {
                                              if (cResult[52] === setFocused) {
                                                if (cResult[53] === setMode) {
                                                  if (cResult[54] === showControls) {
                                                    const _Symbol = Symbol;
                                                    class VoicePanelPIPTsx13 {
                                                      constructor() {
                                                        if (closure_0 === VoicePanelPIPModes.IN_APP) {
                                                          tmp11 = closure_0;
                                                          tmp12 = closure_3;
                                                          obj3 = closure_0(closure_3[17]);
                                                          tmp13 = setMode;
                                                          tmp14 = VoicePanelModes;
                                                          tmp15 = obj3.runOnJS(setMode)(VoicePanelModes.PANEL);
                                                        } else {
                                                          tmp = controlsSpecs;
                                                          tmp2 = VoicePanelControlsModes;
                                                          if (controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN) {
                                                            tmp7 = closure_0;
                                                            tmp8 = closure_3;
                                                            obj2 = closure_0(closure_3[17]);
                                                            tmp9 = showControls;
                                                            tmp10 = obj2.runOnJS(showControls)();
                                                          } else {
                                                            tmp3 = closure_0;
                                                            tmp4 = closure_3;
                                                            obj = closure_0(closure_3[17]);
                                                            tmp5 = hideControls;
                                                            tmp6 = obj.runOnJS(hideControls)();
                                                          }
                                                        }
                                                        return;
                                                      }
                                                    }
                                                    if (tmp41 === Symbol.for("react.memo_cache_sentinel")) {
                                                      const items1 = [safeArea];
                                                      class VoicePanelPIPTsx13 {
                                                        constructor() {
                                                          if (closure_0 === VoicePanelPIPModes.IN_APP) {
                                                            tmp11 = closure_0;
                                                            tmp12 = closure_3;
                                                            obj3 = closure_0(closure_3[17]);
                                                            tmp13 = setMode;
                                                            tmp14 = VoicePanelModes;
                                                            tmp15 = obj3.runOnJS(setMode)(VoicePanelModes.PANEL);
                                                          } else {
                                                            tmp = controlsSpecs;
                                                            tmp2 = VoicePanelControlsModes;
                                                            if (controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN) {
                                                              tmp7 = closure_0;
                                                              tmp8 = closure_3;
                                                              obj2 = closure_0(closure_3[17]);
                                                              tmp9 = showControls;
                                                              tmp10 = obj2.runOnJS(showControls)();
                                                            } else {
                                                              tmp3 = closure_0;
                                                              tmp4 = closure_3;
                                                              obj = closure_0(closure_3[17]);
                                                              tmp5 = hideControls;
                                                              tmp6 = obj.runOnJS(hideControls)();
                                                            }
                                                          }
                                                          return;
                                                        }
                                                      }
                                                      let tmp43 = items1;
                                                    } else {
                                                      tmp43 = cResult[64];
                                                    }
                                                    if (cResult[65] !== channelId) {
                                                      function fe() {
                                                        const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
                                                        let _location;
                                                        if (currentEmbeddedActivity != null) {
                                                          _location = currentEmbeddedActivity.location;
                                                        }
                                                        return embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location) !== channelId;
                                                      }
                                                      cResult[65] = channelId;
                                                      class VoicePanelPIPTsx13 {
                                                        constructor() {
                                                          if (closure_0 === VoicePanelPIPModes.IN_APP) {
                                                            tmp11 = closure_0;
                                                            tmp12 = closure_3;
                                                            obj3 = closure_0(closure_3[17]);
                                                            tmp13 = setMode;
                                                            tmp14 = VoicePanelModes;
                                                            tmp15 = obj3.runOnJS(setMode)(VoicePanelModes.PANEL);
                                                          } else {
                                                            tmp = controlsSpecs;
                                                            tmp2 = VoicePanelControlsModes;
                                                            if (controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN) {
                                                              tmp7 = closure_0;
                                                              tmp8 = closure_3;
                                                              obj2 = closure_0(closure_3[17]);
                                                              tmp9 = showControls;
                                                              tmp10 = obj2.runOnJS(showControls)();
                                                            } else {
                                                              tmp3 = closure_0;
                                                              tmp4 = closure_3;
                                                              obj = closure_0(closure_3[17]);
                                                              tmp5 = hideControls;
                                                              tmp6 = obj.runOnJS(hideControls)();
                                                            }
                                                          }
                                                          return;
                                                        }
                                                      }
                                                      let tmp45 = fe;
                                                    } else {
                                                      tmp45 = cResult[66];
                                                    }
                                                    const stateFromStores = tmp(tmp2[26]).useStateFromStores(tmp43, tmp45);
                                                    const _Symbol2 = Symbol;
                                                    if (cResult[67] === Symbol.for("react.memo_cache_sentinel")) {
                                                      const items2 = [setFocused];
                                                      class Te {
                                                        constructor() {
                                                          mainFrame = setFocused.getMainFrame();
                                                          id = null;
                                                          if (closure_14(mainFrame)) {
                                                            id = mainFrame.id;
                                                          }
                                                          return id;
                                                        }
                                                      }
                                                      class VoicePanelPIPTsx13 {
                                                        constructor() {
                                                          if (closure_0 === VoicePanelPIPModes.IN_APP) {
                                                            tmp11 = closure_0;
                                                            tmp12 = closure_3;
                                                            obj3 = closure_0(closure_3[17]);
                                                            tmp13 = setMode;
                                                            tmp14 = VoicePanelModes;
                                                            tmp15 = obj3.runOnJS(setMode)(VoicePanelModes.PANEL);
                                                          } else {
                                                            tmp = controlsSpecs;
                                                            tmp2 = VoicePanelControlsModes;
                                                            if (controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN) {
                                                              tmp7 = closure_0;
                                                              tmp8 = closure_3;
                                                              obj2 = closure_0(closure_3[17]);
                                                              tmp9 = showControls;
                                                              tmp10 = obj2.runOnJS(showControls)();
                                                            } else {
                                                              tmp3 = closure_0;
                                                              tmp4 = closure_3;
                                                              obj = closure_0(closure_3[17]);
                                                              tmp5 = hideControls;
                                                              tmp6 = obj.runOnJS(hideControls)();
                                                            }
                                                          }
                                                          return;
                                                        }
                                                      }
                                                      cResult[67] = items2;
                                                      cResult[68] = Te;
                                                      let tmp48 = Te;
                                                      let tmp47 = items2;
                                                    } else {
                                                      tmp47 = cResult[67];
                                                      tmp48 = cResult[68];
                                                    }
                                                    const tmpResult7 = tmp(tmp2[26]);
                                                    const stateFromStores1 = tmp(tmp2[26]).useStateFromStores(tmp47, tmp48);
                                                    if (cResult[69] === stateFromStores) {
                                                      if (cResult[70] === stateFromStores1) {
                                                        if (cResult[71] === setFocused) {
                                                          if (cResult[72] === setMode) {
                                                            let tmp51 = cResult[73];
                                                          }
                                                          getTouchesSpread = tmp51;
                                                          if (cResult[74] !== tmp51) {
                                                            const Gesture = tmp(tmp2[21]).Gesture;
                                                            Gesture.Tap();
                                                            class Te {
                                                              constructor() {
                                                                mainFrame = setFocused.getMainFrame();
                                                                id = null;
                                                                if (closure_14(mainFrame)) {
                                                                  id = mainFrame.id;
                                                                }
                                                                return id;
                                                              }
                                                            }
                                                            class Ye {
                                                              constructor() {
                                                                obj = closure_0(closure_3[17]);
                                                                tmp = obj.runOnJS(closure_20)();
                                                                return;
                                                              }
                                                            }
                                                            let obj9 = { runOnJS: tmp(tmp2[17]).runOnJS, handleSecondaryPIPTap: tmp51 };
                                                            Ye.__closure = obj9;
                                                            Ye.__workletHash = 16816842509722;
                                                            Ye.__initData = __initData10;
                                                            const onStartResult = obj19.onStart(Ye);
                                                            cResult[74] = tmp51;
                                                            cResult[75] = onStartResult;
                                                            let tmp52 = onStartResult;
                                                          } else {
                                                            tmp52 = cResult[75];
                                                          }
                                                          class Te {
                                                            constructor() {
                                                              mainFrame = setFocused.getMainFrame();
                                                              id = null;
                                                              if (closure_14(mainFrame)) {
                                                                id = mainFrame.id;
                                                              }
                                                              return id;
                                                            }
                                                          }
                                                          class VoicePanelPIPTsx13 {
                                                            constructor() {
                                                              if (closure_0 === VoicePanelPIPModes.IN_APP) {
                                                                tmp11 = closure_0;
                                                                tmp12 = closure_3;
                                                                obj3 = closure_0(closure_3[17]);
                                                                tmp13 = setMode;
                                                                tmp14 = VoicePanelModes;
                                                                tmp15 = obj3.runOnJS(setMode)(VoicePanelModes.PANEL);
                                                              } else {
                                                                tmp = controlsSpecs;
                                                                tmp2 = VoicePanelControlsModes;
                                                                if (controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN) {
                                                                  tmp7 = closure_0;
                                                                  tmp8 = closure_3;
                                                                  obj2 = closure_0(closure_3[17]);
                                                                  tmp9 = showControls;
                                                                  tmp10 = obj2.runOnJS(showControls)();
                                                                } else {
                                                                  tmp3 = closure_0;
                                                                  tmp4 = closure_3;
                                                                  obj = closure_0(closure_3[17]);
                                                                  tmp5 = hideControls;
                                                                  tmp6 = obj.runOnJS(hideControls)();
                                                                }
                                                              }
                                                              return;
                                                            }
                                                          }
                                                          tmp57[0] = tmp21;
                                                          tmp57[1] = animatedStyle;
                                                          tmp57[2] = animatedStyle1;
                                                          tmp57[3] = animatedStyle2;
                                                          tmp57[4] = tmp33;
                                                          tmp57[5] = tmp52;
                                                          tmp57[6] = sharedValue;
                                                          cResult[76] = tmp21;
                                                          cResult[77] = animatedStyle;
                                                          cResult[78] = sharedValue;
                                                          cResult[79] = tmp33;
                                                          cResult[80] = animatedStyle2;
                                                          cResult[81] = animatedStyle1;
                                                          cResult[82] = tmp52;
                                                          cResult[83] = tmp57;
                                                        }
                                                      }
                                                    }
                                                    function ye() {
                                                      if (stateFromStores) {
                                                        setMode(VoicePanelModes.PIP);
                                                        setFocused(null);
                                                      }
                                                      if (null != stateFromStores1) {
                                                        FramesActionCreatorsDefault.updateFramePanelMode(tmp7, ActivityPanelModes.PANEL);
                                                      } else {
                                                        const result = EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode(ActivityPanelModes.PANEL);
                                                      }
                                                    }
                                                    cResult[69] = stateFromStores;
                                                    cResult[70] = stateFromStores1;
                                                    cResult[71] = setFocused;
                                                    cResult[72] = setMode;
                                                    cResult[73] = ye;
                                                    tmp51 = ye;
                                                    const tmpResult8 = tmp(tmp2[26]);
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        if (cResult[56] !== setFocused) {
                                          class VoicePanelPIPTsx12 {
                                            constructor() {
                                              obj = closure_0(closure_3[17]);
                                              tmp = obj.runOnJS(setFocused)(null);
                                              return;
                                            }
                                          }
                                          { runOnJS: null, setFocused: null }.runOnJS = tmp(tmp2[17]).runOnJS;
                                          class Te {
                                            constructor() {
                                              mainFrame = setFocused.getMainFrame();
                                              id = null;
                                              if (closure_14(mainFrame)) {
                                                id = mainFrame.id;
                                              }
                                              return id;
                                            }
                                          }
                                          class Ye {
                                            constructor() {
                                              obj = closure_0(closure_3[17]);
                                              tmp = obj.runOnJS(closure_20)();
                                              return;
                                            }
                                          }
                                          VoicePanelPIPTsx12.__workletHash = 12274741816775;
                                          VoicePanelPIPTsx12.__initData = __initData8;
                                          cResult[56] = setFocused;
                                          cResult[57] = VoicePanelPIPTsx12;
                                          const obj10 = { runOnJS: null, setFocused: null };
                                        } else {
                                          class VoicePanelPIPTsx12 {
                                            constructor() {
                                              obj = closure_0(closure_3[17]);
                                              tmp = obj.runOnJS(setFocused)(null);
                                              return;
                                            }
                                          }
                                        }
                                        class VoicePanelPIPTsx13 {
                                          constructor() {
                                            if (closure_0 === VoicePanelPIPModes.IN_APP) {
                                              tmp11 = closure_0;
                                              tmp12 = closure_3;
                                              obj3 = closure_0(closure_3[17]);
                                              tmp13 = setMode;
                                              tmp14 = VoicePanelModes;
                                              tmp15 = obj3.runOnJS(setMode)(VoicePanelModes.PANEL);
                                            } else {
                                              tmp = controlsSpecs;
                                              tmp2 = VoicePanelControlsModes;
                                              if (controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN) {
                                                tmp7 = closure_0;
                                                tmp8 = closure_3;
                                                obj2 = closure_0(closure_3[17]);
                                                tmp9 = showControls;
                                                tmp10 = obj2.runOnJS(showControls)();
                                              } else {
                                                tmp3 = closure_0;
                                                tmp4 = closure_3;
                                                obj = closure_0(closure_3[17]);
                                                tmp5 = hideControls;
                                                tmp6 = obj.runOnJS(hideControls)();
                                              }
                                            }
                                            return;
                                          }
                                        }
                                        const obj11 = { pipMode, VoicePanelPIPModes: wrapperOffset, runOnJS: tmp(tmp2[17]).runOnJS, setMode, VoicePanelModes: windowDimensions, controlsSpecs, VoicePanelControlsModes: wrapperDimensions, showControls, hideControls };
                                        VoicePanelPIPTsx13.__closure = obj11;
                                        VoicePanelPIPTsx13.__workletHash = 2882749351054;
                                        VoicePanelPIPTsx13.__initData = __initData9;
                                        cResult[58] = controlsSpecs;
                                        cResult[59] = hideControls;
                                        cResult[60] = pipMode;
                                        cResult[61] = setMode;
                                        cResult[62] = showControls;
                                        cResult[63] = VoicePanelPIPTsx13;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                if (cResult[25] !== sharedValue) {
                  class VoicePanelPIPTsx12 {
                    constructor() {
                      obj = closure_0(closure_3[17]);
                      tmp = obj.runOnJS(setFocused)(null);
                      return;
                    }
                  }
                  const obj12 = { getTouchesCentroid: null, getTouchesSpread: null, gestureState: null, INACTIVE_GESTURE_STATE: null, updateSharedValueIfChanged: null };
                  class Te {
                    constructor() {
                      mainFrame = setFocused.getMainFrame();
                      id = null;
                      if (closure_14(mainFrame)) {
                        id = mainFrame.id;
                      }
                      return id;
                    }
                  }
                  class Ye {
                    constructor() {
                      obj = closure_0(closure_3[17]);
                      tmp = obj.runOnJS(closure_20)();
                      return;
                    }
                  }
                  obj12.getTouchesSpread = getTouchesSpread;
                  obj12.gestureState = sharedValue;
                  obj12.INACTIVE_GESTURE_STATE = INACTIVE_GESTURE_STATE;
                  obj12.updateSharedValueIfChanged = tmp4(tmp2[19]);
                  VoicePanelPIPTsx11.__closure = obj12;
                  VoicePanelPIPTsx11.__workletHash = 1211142715607;
                  VoicePanelPIPTsx11.__initData = __initData7;
                  cResult[25] = sharedValue;
                  cResult[26] = VoicePanelPIPTsx11;
                } else {
                  class VoicePanelPIPTsx12 {
                    constructor() {
                      obj = closure_0(closure_3[17]);
                      tmp = obj.runOnJS(setFocused)(null);
                      return;
                    }
                  }
                }
                if (cResult[27] !== sharedValue) {
                  class VoicePanelPIPTsx12 {
                    constructor() {
                      obj = closure_0(closure_3[17]);
                      tmp = obj.runOnJS(setFocused)(null);
                      return;
                    }
                  }
                  const obj13 = { updateSharedValueIfChanged: tmp4(tmp2[19]), gestureState: null, getTouchesCentroid: null, getTouchesSpread: null };
                  class Te {
                    constructor() {
                      mainFrame = setFocused.getMainFrame();
                      id = null;
                      if (closure_14(mainFrame)) {
                        id = mainFrame.id;
                      }
                      return id;
                    }
                  }
                  class Ye {
                    constructor() {
                      obj = closure_0(closure_3[17]);
                      tmp = obj.runOnJS(closure_20)();
                      return;
                    }
                  }
                  obj13.getTouchesCentroid = stateFromStores1;
                  obj13.getTouchesSpread = getTouchesSpread;
                  VoicePanelPIPTsx10.__closure = obj13;
                  VoicePanelPIPTsx10.__workletHash = 10176574357571;
                  VoicePanelPIPTsx10.__initData = __initData6;
                  cResult[27] = sharedValue;
                  cResult[28] = VoicePanelPIPTsx10;
                } else {
                  class VoicePanelPIPTsx12 {
                    constructor() {
                      obj = closure_0(closure_3[17]);
                      tmp = obj.runOnJS(setFocused)(null);
                      return;
                    }
                  }
                }
                if (cResult[29] === sharedValue) {
                  class VoicePanelPIPTsx12 {
                    constructor() {
                      obj = closure_0(closure_3[17]);
                      tmp = obj.runOnJS(setFocused)(null);
                      return;
                    }
                  }
                }
                class VoicePanelPIPTsx9 {
                  constructor(arg0, arg1) {
                    point = getTouchesCentroid(pipMode.allTouches);
                    tmp = getTouchesSpread(pipMode.allTouches, point);
                    obj = closure_15;
                    value = closure_15.get();
                    if (value.active) {
                      diff = value.offsetX + point.x - value.originX;
                      diff1 = value.offsetY + point.y - value.originY;
                      num = 8;
                      sum1 = diff1;
                      sum = diff;
                      if (value.spread > 8) {
                        sum1 = diff1;
                        sum = diff;
                        if (8 < tmp) {
                          scale3 = closure_14.scale;
                          tmp28 = closure_14;
                          value1 = scale3.get();
                          tmp30 = closure_0;
                          tmp31 = closure_3;
                          obj9 = closure_0(closure_3[18]);
                          obj1 = { scale: null, width: null, containerHeight: null, showSecondaryPIP: null, windowDimensions: null, safeArea: null, pipAvoidanceSpecs: null };
                          obj1.scale = value1 * (tmp / value.spread);
                          ({ width: obj10.width, containerHeight: obj10.containerHeight, showSecondaryPIP: obj10.showSecondaryPIP } = closure_14);
                          tmp32 = windowDimensions;
                          obj1.windowDimensions = windowDimensions.get();
                          tmp33 = safeArea;
                          obj1.safeArea = safeArea.get();
                          tmp34 = pipAvoidanceSpecs;
                          obj1.pipAvoidanceSpecs = pipAvoidanceSpecs.get();
                          clampPIPScaleResult = obj9.clampPIPScale(obj1);
                          sum1 = diff1;
                          sum = diff;
                          if (clampPIPScaleResult !== value1) {
                            scale2 = tmp28.scale;
                            result = scale2.set(clampPIPScaleResult);
                            result1 = clampPIPScaleResult / value1;
                            num2 = 1;
                            sum = diff + (point.x - (value.baseX + diff)) * (1 - result1);
                            sum1 = diff1 + (point.y - (value.baseY + diff1)) * (1 - result1);
                          }
                        }
                      }
                      obj11 = { pressed: null, active: true, baseX: null, baseY: null, offsetX: null, offsetY: null, originX: null, originY: null, spread: null };
                      ({ pressed: obj8.pressed, baseX: obj8.baseX, baseY: obj8.baseY } = value);
                      obj11.offsetX = sum;
                      obj11.offsetY = sum1;
                      ({ x: obj8.originX, y: obj8.originY } = point);
                      obj11.spread = tmp;
                      result2 = obj.set(obj11);
                    } else {
                      tmp3 = closure_0;
                      tmp4 = closure_3;
                      if (pipMode.state === closure_0(closure_3[21]).State.BEGAN) {
                        tmp26 = globalThis;
                        _Math3 = Math;
                        tmp27 = c18;
                        if (Math.abs(value.originX - point.x) <= c18) {
                          _Math = Math;
                          if (Math.abs(value.originY - point.y) <= tmp27) {
                            _Math2 = Math;
                          }
                        }
                        tmp5 = mainTileInLayout;
                        tmp6 = closure_14;
                        scale = closure_14.scale;
                        value2 = scale.get();
                        tmp3Result = tmp3(tmp4[18]);
                        size = { pipX: null, pipY: null, width: null, height: null, windowDimensions: null, safeArea: null, bottomAvoidanceRegion: null, topAvoidanceRegion: null };
                        tmp8 = wrapperDimensions;
                        size.pipX = wrapperDimensions.get().pipX;
                        size.pipY = wrapperDimensions.get().pipY;
                        size.width = closure_14.width * value2;
                        tmp3Result1 = tmp3(tmp4[18]);
                        obj12 = { height: null, containerHeight: null, showSecondaryPIP: null, scale: null };
                        ({ height: obj5.height, containerHeight: obj5.containerHeight, showSecondaryPIP: obj5.showSecondaryPIP } = closure_14);
                        obj12.scale = value2;
                        size.height = tmp3Result1.getScaledPIPContainerHeight(obj12);
                        tmp9 = windowDimensions;
                        size.windowDimensions = windowDimensions.get();
                        tmp10 = safeArea;
                        size.safeArea = safeArea.get();
                        tmp11 = pipAvoidanceSpecs;
                        size.bottomAvoidanceRegion = pipAvoidanceSpecs.get().bottom;
                        size.topAvoidanceRegion = pipAvoidanceSpecs.get().top;
                        clampedPIPPosition = tmp3Result.getClampedPIPPosition(size);
                        obj13 = { pressed: true, active: true, baseX: null, baseY: null, offsetX: 0, offsetY: 0, originX: null, originY: null, spread: null };
                        ({ x: obj6.baseX, y: obj6.baseY } = clampedPIPPosition);
                        ({ x: obj6.originX, y: obj6.originY } = point);
                        obj13.spread = tmp;
                        result3 = obj.set(obj13);
                        tmp14 = closure_1;
                        tmp15 = wrapperOffset;
                        tmp16 = closure_1(tmp4[19])(wrapperOffset, { gestureActive: true, x: 0, y: 0 });
                        activateResult = mainTileInLayout.activate();
                        tmp3Result2 = tmp3(tmp4[17]);
                        tmp18 = tmp3Result2.runOnJS(closure_1(tmp4[22]))();
                      }
                    }
                    return;
                  }
                }
                const obj14 = { getTouchesCentroid: stateFromStores1, getTouchesSpread, gestureState: sharedValue, MIN_PINCH_SPAN: 8, pipState: size, clampPIPScale: tmp(tmp2[18]).clampPIPScale, windowDimensions, safeArea, pipAvoidanceSpecs, State: tmp(tmp2[21]).State, MIN_GESTURE_START: stateFromStores, getClampedPIPPosition: tmp(tmp2[18]).getClampedPIPPosition, wrapperDimensions, getScaledPIPContainerHeight: tmp(tmp2[18]).getScaledPIPContainerHeight, updateSharedValueIfChanged: tmp4(tmp2[19]), wrapperOffset, runOnJS: tmp(tmp2[17]).runOnJS, triggerIOSHaptic: tmp4(tmp2[22]) };
                VoicePanelPIPTsx9.__closure = obj14;
                VoicePanelPIPTsx9.__workletHash = 6566537916399;
                VoicePanelPIPTsx9.__initData = __initData5;
                cResult[29] = sharedValue;
                cResult[30] = pipAvoidanceSpecs;
                cResult[31] = size.containerHeight;
                cResult[32] = size.height;
                cResult[33] = size.scale;
                cResult[34] = size.showSecondaryPIP;
                cResult[35] = size.width;
                cResult[36] = safeArea;
                cResult[37] = windowDimensions;
                cResult[38] = wrapperDimensions;
                cResult[39] = wrapperOffset;
                cResult[40] = VoicePanelPIPTsx9;
                const tmpResult6 = tmp(tmp2[17]);
              }
            }
          }
        }
      }
    }
  }
  const fn2 = function v(baseX, velocityX, velocityY) {
    const scale = size.scale;
    value = scale.get();
    const result = size.width * value;
    const scaledPIPContainerHeight = VoicePanelPIPUtils.getScaledPIPContainerHeight({ height: size.height, containerHeight: size.containerHeight, showSecondaryPIP: size.showSecondaryPIP, scale: value });
    const obj2 = { height: size.height, containerHeight: size.containerHeight, showSecondaryPIP: size.showSecondaryPIP, scale: value };
    const obj3 = VoicePanelPIPUtils;
    const result1 = obj3.calculatePIPPositionFromVelocity({ velocityX, velocityY, absoluteX: baseX.baseX + baseX.offsetX + result / 2, absoluteY: baseX.baseY + baseX.offsetY + scaledPIPContainerHeight / 2, windowDimensions: windowDimensions.get(), safeArea: safeArea.get() });
    ({ pipX, pipY } = result1);
    updateSharedValueIfChangedDefault(wrapperDimensions, { pipX, pipY });
  };
  tmp13[0] = size;
  tmp13[1] = require("VoicePanelPIPUtils").getScaledPIPContainerHeight;
  tmp13[2] = require("VoicePanelPIPUtils").calculatePIPPositionFromVelocity;
  tmp13[3] = windowDimensions;
  tmp13[4] = safeArea;
  tmp13[5] = require("updateSharedValueIfChanged");
  tmp13[6] = wrapperDimensions;
  fn2.__closure = tmp13;
  fn2.__workletHash = 3320226117584;
  fn2.__initData = __initData;
  cResult[3] = size.containerHeight;
  cResult[4] = size.height;
  cResult[5] = size.scale;
  cResult[6] = size.showSecondaryPIP;
  cResult[7] = size.width;
  cResult[8] = safeArea;
  cResult[9] = windowDimensions;
  cResult[10] = wrapperDimensions;
  cResult[11] = fn2;
  tmp12 = fn2;
  let obj5 = require("ReanimatedRexport");
}) : (function usePIPGesture(pipMode, mainTileInLayout, mainTileVisible) {
  _require = pipMode;
  importDefault = mainTileInLayout;
  closure_2 = mainTileVisible;
  const context = hideControls.useContext(require("VoicePanelStateContext"));
  controlsSpecs = context.controlsSpecs;
  hideControls = context.hideControls;
  const pipAvoidanceSpecs = context.pipAvoidanceSpecs;
  const safeArea = context.safeArea;
  const setFocused = context.setFocused;
  const setMode = context.setMode;
  const showControls = context.showControls;
  const windowDimensions = context.windowDimensions;
  const wrapperDimensions = context.wrapperDimensions;
  const wrapperOffset = context.wrapperOffset;
  const channelId = context.channelId;
  const pIPState = require("VoicePanelPIPStateContext").usePIPState();
  let obj = require("VoicePanelPIPStateContext");
  const sharedValue = require("ReanimatedRexport").useSharedValue(INACTIVE_GESTURE_STATE);
  let obj2 = require("ReanimatedRexport");
  const sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
  let items = [sharedValue1];
  const effect = hideControls.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = sharedValue1.set(1);
    }, 200);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  class N {
    constructor(arg0, arg1, arg2) {
      scale = closure_14.scale;
      value = scale.get();
      result = closure_14.width * value;
      obj = closure_0(closure_3[18]);
      obj1 = { height: closure_14.height, containerHeight: closure_14.containerHeight, showSecondaryPIP: closure_14.showSecondaryPIP, scale: value };
      scaledPIPContainerHeight = obj.getScaledPIPContainerHeight(obj1);
      obj3 = closure_0(closure_3[18]);
      obj5 = { velocityX: mainTileInLayout, velocityY: mainTileVisible, absoluteX: pipMode.baseX + pipMode.offsetX + result / 2, absoluteY: pipMode.baseY + pipMode.offsetY + scaledPIPContainerHeight / 2, windowDimensions: windowDimensions.get(), safeArea: safeArea.get() };
      result1 = obj3.calculatePIPPositionFromVelocity(obj5);
      ({ pipX, pipY } = result1);
      tmp5 = closure_1(closure_3[19])(wrapperDimensions, { pipX, pipY });
      return;
    }
  }
  let obj3 = require("ReanimatedRexport");
  N.__closure = { pipState: pIPState, getScaledPIPContainerHeight: require("VoicePanelPIPUtils").getScaledPIPContainerHeight, calculatePIPPositionFromVelocity: require("VoicePanelPIPUtils").calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: require("updateSharedValueIfChanged"), wrapperDimensions };
  N.__workletHash = 16471847123975;
  N.__initData = __initData11;
  const items1 = [, , , , , , , ];
  ({ containerHeight: arr2[0], height: arr2[1], scale: arr2[2], showSecondaryPIP: arr2[3], width: arr2[4] } = pIPState);
  items1[5] = safeArea;
  items1[6] = windowDimensions;
  items1[7] = wrapperDimensions;
  const settlePIPPosition = hideControls.useCallback(N, items1);
  let obj4 = { pipState: pIPState, getScaledPIPContainerHeight: require("VoicePanelPIPUtils").getScaledPIPContainerHeight, calculatePIPPositionFromVelocity: require("VoicePanelPIPUtils").calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: require("updateSharedValueIfChanged"), wrapperDimensions };
  class G {
    constructor() {
      scale = closure_14.scale;
      tmp = closure_14;
      result = closure_14.width * scale.get();
      tmp3 = closure_0;
      tmp4 = closure_3;
      obj = closure_0(closure_3[18]);
      obj1 = { height: closure_14.height, containerHeight: closure_14.containerHeight, showSecondaryPIP: null, scale: null };
      showSecondaryPIP = closure_14.showSecondaryPIP;
      if (showSecondaryPIP) {
        showSecondaryPIP = closure_1;
      }
      obj1.showSecondaryPIP = showSecondaryPIP;
      scale2 = tmp.scale;
      obj1.scale = scale2.get();
      scaledPIPContainerHeight = obj.getScaledPIPContainerHeight(obj1);
      value = closure_15.get();
      if (value.active) {
        x = value.baseX + value.offsetX;
        y = value.baseY + value.offsetY;
      } else {
        tmp3Result = tmp3(tmp4[18]);
        size = { pipX: null, pipY: null, width: null, height: null, windowDimensions: null, safeArea: null, bottomAvoidanceRegion: null, topAvoidanceRegion: null };
        tmp7 = wrapperDimensions;
        size.pipX = wrapperDimensions.get().pipX;
        size.pipY = wrapperDimensions.get().pipY;
        size.width = result;
        size.height = scaledPIPContainerHeight;
        tmp8 = windowDimensions;
        size.windowDimensions = windowDimensions.get();
        tmp9 = safeArea;
        size.safeArea = safeArea.get();
        tmp10 = pipAvoidanceSpecs;
        size.bottomAvoidanceRegion = pipAvoidanceSpecs.get().bottom;
        size.topAvoidanceRegion = pipAvoidanceSpecs.get().top;
        clampedPIPPosition = tmp3Result.getClampedPIPPosition(size);
        ({ x, y } = clampedPIPPosition);
      }
      if (value.active) {
        PIP_LAYOUT_PHYSICS = DRAWER_SPRING_PHYSICS;
      } else {
        PIP_LAYOUT_PHYSICS = tmp3(tmp4[18]).PIP_LAYOUT_PHYSICS;
      }
      size1 = { width: result, height: scaledPIPContainerHeight, opacity: closure_16.get(), transform: null, borderRadius: null };
      obj11 = { translateX: null };
      tmp3Result1 = tmp3(tmp4[20]);
      obj11.translateX = tmp3Result1.withSpring(x, PIP_LAYOUT_PHYSICS);
      items = [, ];
      items[0] = obj11;
      obj12 = { translateY: null };
      tmp3Result2 = tmp3(tmp4[20]);
      obj12.translateY = tmp3Result2.withSpring(y, PIP_LAYOUT_PHYSICS);
      items[1] = obj12;
      size1.transform = items;
      tmp3Result3 = tmp3(tmp4[18]);
      size1.borderRadius = tmp3Result3.getVoicePanelPIPBorderRadius(result, scaledPIPContainerHeight);
      return size1;
    }
  }
  let obj5 = require("ReanimatedRexport");
  G.__closure = { pipState: pIPState, getScaledPIPContainerHeight: require("VoicePanelPIPUtils").getScaledPIPContainerHeight, mainTileInLayout, gestureState: sharedValue, getClampedPIPPosition: require("VoicePanelPIPUtils").getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, DRAWER_SPRING_PHYSICS: showControls, PIP_LAYOUT_PHYSICS: require("VoicePanelPIPUtils").PIP_LAYOUT_PHYSICS, opacity: sharedValue1, withSpring: require("spring").withSpring, getVoicePanelPIPBorderRadius: require("VoicePanelPIPUtils").getVoicePanelPIPBorderRadius };
  G.__workletHash = 3627050442173;
  G.__initData = __initData12;
  const animatedStyle = obj5.useAnimatedStyle(G);
  let obj6 = { pipState: pIPState, getScaledPIPContainerHeight: require("VoicePanelPIPUtils").getScaledPIPContainerHeight, mainTileInLayout, gestureState: sharedValue, getClampedPIPPosition: require("VoicePanelPIPUtils").getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, DRAWER_SPRING_PHYSICS: showControls, PIP_LAYOUT_PHYSICS: require("VoicePanelPIPUtils").PIP_LAYOUT_PHYSICS, opacity: sharedValue1, withSpring: require("spring").withSpring, getVoicePanelPIPBorderRadius: require("VoicePanelPIPUtils").getVoicePanelPIPBorderRadius };
  class L {
    constructor() {
      ({ width, height, scale } = closure_14);
      size = { width: width * scale.get(), height: height * scale.get(), borderRadius: null };
      obj2 = closure_0(closure_3[18]);
      size.borderRadius = obj2.getVoicePanelPIPBorderRadius(width, height);
      return size;
    }
  }
  let obj7 = require("ReanimatedRexport");
  L.__closure = { pipState: pIPState, getVoicePanelPIPBorderRadius: require("VoicePanelPIPUtils").getVoicePanelPIPBorderRadius };
  L.__workletHash = 1161486785503;
  L.__initData = __initData13;
  const animatedStyle1 = obj7.useAnimatedStyle(L);
  const obj8 = { pipState: pIPState, getVoicePanelPIPBorderRadius: require("VoicePanelPIPUtils").getVoicePanelPIPBorderRadius };
  class U {
    constructor() {
      opacity = 0;
      if (closure_2) {
        opacity = 1;
      }
      return { opacity };
    }
  }
  U.__closure = { mainTileVisible };
  U.__workletHash = 3160173154641;
  U.__initData = __initData14;
  const items2 = [sharedValue, pipAvoidanceSpecs, , , , , , , , , , ];
  ({ containerHeight: arr3[2], height: arr3[3], scale: arr3[4], showSecondaryPIP: arr3[5], width: arr3[6] } = pIPState);
  items2[7] = safeArea;
  items2[8] = settlePIPPosition;
  items2[9] = windowDimensions;
  items2[10] = wrapperDimensions;
  items2[11] = wrapperOffset;
  const animatedStyle2 = require("ReanimatedRexport").useAnimatedStyle(U);
  const items3 = [controlsSpecs, hideControls, setFocused, showControls, pipMode, setMode];
  const memo = hideControls.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    let result = Gesture.Pan().manualActivation(true).shouldCancelWhenOutside(false);
    const fn = function c(allTouches) {
      const tmp = stateFromStores1(allTouches.allTouches);
      const tmp2 = callback1(allTouches.allTouches, tmp);
      if (sharedValue.get().pressed) {
        const obj5 = { originX: null, originY: null, spread: null };
        ({ x: obj3.originX, y: obj3.originY } = tmp);
        obj5.spread = tmp2;
        closure_1(controlsSpecs[19])(sharedValue, obj5);
      } else {
        const obj6 = {};
        const merged = Object.assign(INACTIVE_GESTURE_STATE);
        obj6.pressed = true;
        ({ x: obj2.originX, y: obj2.originY } = tmp);
        obj6.spread = tmp2;
        const result = sharedValue.set(obj6);
      }
    };
    const manualActivationResult = Gesture.Pan().manualActivation(true);
    fn.__closure = { getTouchesCentroid, getTouchesSpread, gestureState: sharedValue, INACTIVE_GESTURE_STATE, updateSharedValueIfChanged: updateSharedValueIfChangedDefault };
    fn.__workletHash = 3048774433878;
    fn.__initData = __initData5;
    let obj = { getTouchesCentroid, getTouchesSpread, gestureState: sharedValue, INACTIVE_GESTURE_STATE, updateSharedValueIfChanged: updateSharedValueIfChangedDefault };
    const fn2 = function s(allTouches) {
      allTouches = allTouches.allTouches;
      const found = allTouches.filter((item) => {
        allTouches = item;
        const changedTouches = allTouches.changedTouches;
        return !changedTouches.some((id) => id.id === item.id);
      });
      if (0 !== found.length) {
        const tmp6 = stateFromStores1(found);
        const obj = { originX: null, originY: null, spread: null };
        ({ x: obj.originX, y: obj.originY } = tmp6);
        obj.spread = callback1(found, tmp6);
        closure_1(controlsSpecs[19])(sharedValue, obj);
        const tmp9 = closure_1(controlsSpecs[19]);
      } else {
        closure_1(controlsSpecs[19])(sharedValue, { pressed: false });
      }
    };
    const onTouchesDownResult = result.onTouchesDown(fn);
    fn2.__closure = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, gestureState: sharedValue, getTouchesCentroid, getTouchesSpread };
    fn2.__workletHash = 11105299053730;
    fn2.__initData = __initData4;
    let obj2 = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, gestureState: sharedValue, getTouchesCentroid, getTouchesSpread };
    const fn3 = function o(allTouches, activate) {
      const point = stateFromStores1(allTouches.allTouches);
      const tmp = callback1(allTouches.allTouches, point);
      value = sharedValue.get();
      if (value.active) {
        const diff = value.offsetX + point.x - value.originX;
        const diff1 = value.offsetY + point.y - value.originY;
        let sum1 = diff1;
        let sum = diff;
        if (value.spread > 8) {
          sum1 = diff1;
          sum = diff;
          if (8 < tmp) {
            const scale3 = styles.scale;
            value3 = scale3.get();
            const obj2 = { scale: value3 * (tmp / value.spread), width: null, containerHeight: null, showSecondaryPIP: null, windowDimensions: null, safeArea: null, pipAvoidanceSpecs: null };
            ({ width: obj10.width, containerHeight: obj10.containerHeight, showSecondaryPIP: obj10.showSecondaryPIP } = styles);
            obj2.windowDimensions = windowDimensions.get();
            obj2.safeArea = safeArea.get();
            obj2.pipAvoidanceSpecs = pipAvoidanceSpecs.get();
            const clampPIPScaleResult = closure_0(controlsSpecs[18]).clampPIPScale(obj2);
            sum1 = diff1;
            sum = diff;
            if (clampPIPScaleResult !== value3) {
              const scale2 = styles.scale;
              const result = scale2.set(clampPIPScaleResult);
              const result1 = clampPIPScaleResult / value3;
              sum = diff + (point.x - (value.baseX + diff)) * (1 - result1);
              sum1 = diff1 + (point.y - (value.baseY + diff1)) * (1 - result1);
            }
            const obj9 = closure_0(controlsSpecs[18]);
          }
        }
        const obj3 = { pressed: null, active: true, baseX: null, baseY: null, offsetX: null, offsetY: null, originX: null, originY: null, spread: null };
        ({ pressed: obj8.pressed, baseX: obj8.baseX, baseY: obj8.baseY } = value);
        obj3.offsetX = sum;
        obj3.offsetY = sum1;
        ({ x: obj8.originX, y: obj8.originY } = point);
        obj3.spread = tmp;
        const result2 = sharedValue.set(obj3);
      } else if (allTouches.state === closure_0(controlsSpecs[21]).State.BEGAN) {
        const _Math3 = Math;
        if (Math.abs(value.originX - point.x) <= stateFromStores) {
          const _Math = Math;
          if (Math.abs(value.originY - point.y) <= stateFromStores) {
            const _Math2 = Math;
          }
        }
        const scale = styles.scale;
        value4 = scale.get();
        const size = { pipX: wrapperDimensions.get().pipX, pipY: wrapperDimensions.get().pipY, width: styles.width * value4, height: null, windowDimensions: null, safeArea: null, bottomAvoidanceRegion: null, topAvoidanceRegion: null };
        const tmp3Result = closure_0(controlsSpecs[18]);
        const obj4 = { height: null, containerHeight: null, showSecondaryPIP: null, scale: null };
        ({ height: obj5.height, containerHeight: obj5.containerHeight, showSecondaryPIP: obj5.showSecondaryPIP } = styles);
        obj4.scale = value4;
        size.height = closure_0(controlsSpecs[18]).getScaledPIPContainerHeight(obj4);
        size.windowDimensions = windowDimensions.get();
        size.safeArea = safeArea.get();
        size.bottomAvoidanceRegion = pipAvoidanceSpecs.get().bottom;
        size.topAvoidanceRegion = pipAvoidanceSpecs.get().top;
        const clampedPIPPosition = tmp3Result.getClampedPIPPosition(size);
        const obj7 = { pressed: true, active: true, baseX: null, baseY: null, offsetX: 0, offsetY: 0, originX: null, originY: null, spread: null };
        ({ x: obj6.baseX, y: obj6.baseY } = clampedPIPPosition);
        ({ x: obj6.originX, y: obj6.originY } = point);
        obj7.spread = tmp;
        const result3 = sharedValue.set(obj7);
        closure_1(controlsSpecs[19])(wrapperOffset, { gestureActive: true, x: 0, y: 0 });
        activate.activate();
        const tmp3Result3 = closure_0(controlsSpecs[18]);
        closure_0(controlsSpecs[17]).runOnJS(closure_1(controlsSpecs[22]))();
        const tmp3Result4 = closure_0(controlsSpecs[17]);
      }
    };
    const onTouchesUpResult = onTouchesDownResult.onTouchesUp(fn2);
    fn3.__closure = { getTouchesCentroid, getTouchesSpread, gestureState: sharedValue, MIN_PINCH_SPAN: 8, pipState: pIPState, clampPIPScale: VoicePanelPIPUtils.clampPIPScale, windowDimensions, safeArea, pipAvoidanceSpecs, State: LegacyBaseButton.State, MIN_GESTURE_START, getClampedPIPPosition: VoicePanelPIPUtils.getClampedPIPPosition, wrapperDimensions, getScaledPIPContainerHeight: VoicePanelPIPUtils.getScaledPIPContainerHeight, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, runOnJS: ReanimatedRexport.runOnJS, triggerIOSHaptic: utils_triggerIOSHapticDefault };
    fn3.__workletHash = 241124621053;
    fn3.__initData = __initData3;
    let obj3 = { getTouchesCentroid, getTouchesSpread, gestureState: sharedValue, MIN_PINCH_SPAN: 8, pipState: pIPState, clampPIPScale: VoicePanelPIPUtils.clampPIPScale, windowDimensions, safeArea, pipAvoidanceSpecs, State: LegacyBaseButton.State, MIN_GESTURE_START, getClampedPIPPosition: VoicePanelPIPUtils.getClampedPIPPosition, wrapperDimensions, getScaledPIPContainerHeight: VoicePanelPIPUtils.getScaledPIPContainerHeight, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, runOnJS: ReanimatedRexport.runOnJS, triggerIOSHaptic: utils_triggerIOSHapticDefault };
    const fn4 = function n(arg0) {
      ({ velocityX, velocityY } = arg0);
      settlePIPPosition(sharedValue.get(), velocityX, velocityY);
      closure_1(controlsSpecs[19])(wrapperOffset, { gestureActive: false });
      const result = sharedValue.set(INACTIVE_GESTURE_STATE);
      closure_0(controlsSpecs[17]).runOnJS(closure_1(controlsSpecs[23]).updateSourceTrackingView)();
      const obj = closure_0(controlsSpecs[17]);
      const scale = styles.scale;
      const obj2 = closure_0(controlsSpecs[17]);
      closure_0(controlsSpecs[17]).runOnJS(closure_0(controlsSpecs[24]).setVoicePanelPIPScaleCached)(scale.get());
    };
    const onTouchesMoveResult = onTouchesUpResult.onTouchesMove(fn3);
    fn4.__closure = { gestureState: sharedValue, settlePIPPosition, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, INACTIVE_GESTURE_STATE, runOnJS: ReanimatedRexport.runOnJS, updateSourceTrackingView: ExternalPipDefault.updateSourceTrackingView, setVoicePanelPIPScaleCached: VoicePanelPIPScaleCache.setVoicePanelPIPScaleCached, pipState: pIPState };
    fn4.__workletHash = 6209651549157;
    fn4.__initData = __initData2;
    let obj4 = { gestureState: sharedValue, settlePIPPosition, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, INACTIVE_GESTURE_STATE, runOnJS: ReanimatedRexport.runOnJS, updateSourceTrackingView: ExternalPipDefault.updateSourceTrackingView, setVoicePanelPIPScaleCached: VoicePanelPIPScaleCache.setVoicePanelPIPScaleCached, pipState: pIPState };
    const fn5 = function t() {
      closure_1(controlsSpecs[19])(wrapperOffset, { gestureActive: false });
      const result = sharedValue.set(INACTIVE_GESTURE_STATE);
    };
    const onEndResult = onTouchesMoveResult.onEnd(fn4);
    fn5.__closure = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, gestureState: sharedValue, INACTIVE_GESTURE_STATE };
    fn5.__workletHash = 8841358740326;
    fn5.__initData = __initData;
    return onEndResult.onFinalize(fn5);
  }, items2);
  const memo1 = hideControls.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const Gesture2 = LegacyBaseButton.Gesture;
    const TapResult = Gesture2.Tap();
    const enabledResult = Gesture2.Tap().enabled(pipMode !== VoicePanelPIPModes.IN_APP);
    const fn = function o() {
      closure_0(controlsSpecs[17]).runOnJS(setFocused)(null);
    };
    const maxDistanceResult = Gesture2.Tap().enabled(pipMode !== VoicePanelPIPModes.IN_APP).maxDistance(30);
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setFocused };
    fn.__workletHash = 5813066167138;
    fn.__initData = __initData6;
    let obj = { runOnJS: ReanimatedRexport.runOnJS, setFocused };
    const onStartResult = maxDistanceResult.onStart(fn);
    const Gesture3 = LegacyBaseButton.Gesture;
    const numberOfTapsResult = maxDistanceResult.onStart(fn).numberOfTaps(2);
    const TapResult1 = Gesture3.Tap();
    const enabledResult1 = Gesture3.Tap().enabled(true);
    const fn2 = function t() {
      if (pipMode === wrapperOffset.IN_APP) {
        closure_0(controlsSpecs[17]).runOnJS(setMode)(windowDimensions.PANEL);
        const obj3 = closure_0(controlsSpecs[17]);
      } else if (closure_1_3.get().mode === wrapperDimensions.HIDDEN) {
        closure_0(controlsSpecs[17]).runOnJS(showControls)();
        const obj2 = closure_0(controlsSpecs[17]);
      } else {
        closure_0(controlsSpecs[17]).runOnJS(hideControls)();
        const obj = closure_0(controlsSpecs[17]);
      }
    };
    const maxDistanceResult1 = Gesture3.Tap().enabled(true).maxDistance(30);
    fn2.__closure = { pipMode, VoicePanelPIPModes, runOnJS: ReanimatedRexport.runOnJS, setMode, VoicePanelModes, controlsSpecs, VoicePanelControlsModes, showControls, hideControls };
    fn2.__workletHash = 4146838383979;
    fn2.__initData = __initData7;
    return Gesture.Exclusive(numberOfTapsResult, maxDistanceResult1.onStart(fn2));
  }, items3);
  let obj9 = require("ReanimatedRexport");
  const items4 = [safeArea];
  const stateFromStores = require("initialize").useStateFromStores(items4, () => {
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    let _location;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    return embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location) !== channelId;
  });
  const obj10 = require("initialize");
  const items5 = [setFocused];
  const stateFromStores1 = require("initialize").useStateFromStores(items5, () => {
    const mainFrame = setFocused.getMainFrame();
    let id = null;
    if (pIPState(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  const items6 = [stateFromStores, stateFromStores1, setMode, setFocused];
  const callback1 = hideControls.useCallback(() => {
    if (stateFromStores) {
      setMode(VoicePanelModes.PIP);
      setFocused(null);
    }
    if (null != stateFromStores1) {
      FramesActionCreatorsDefault.updateFramePanelMode(tmp7, ActivityPanelModes.PANEL);
    } else {
      const result = EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode(ActivityPanelModes.PANEL);
    }
  }, items6);
  const obj12 = { containerGesture: memo, containerStyles: animatedStyle, pipWrapperStyles: animatedStyle1, mainPIPVisibilityStyles: animatedStyle2, mainPIPGesture: memo1, secondaryPIPGesture: null, gestureState: sharedValue };
  const items7 = [callback1];
  obj12.secondaryPIPGesture = hideControls.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const TapResult = Gesture.Tap();
    const fn = function t() {
      closure_0(controlsSpecs[17]).runOnJS(callback1)();
    };
    const maxDistanceResult = Gesture.Tap().maxDistance(30);
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleSecondaryPIPTap: callback1 };
    fn.__workletHash = 5953597171323;
    fn.__initData = __initData8;
    return maxDistanceResult.onStart(fn);
  }, items7);
  return obj12;
});
const __initData15 = { code: "function VoicePanelPIPTsx27(){const{getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}" };
const __initData16 = { code: "function VoicePanelPIPTsx28(){const{pipState}=this.__closure;return{height:pipState.height*pipState.scale.get()};}" };
const __initData17 = { code: "function VoicePanelPIPTsx29(values){const{gestureState,withSpring,PIP_LAYOUT_PHYSICS}=this.__closure;const active=gestureState.get().active;return{animations:{originX:withSpring(values.targetOriginX,PIP_LAYOUT_PHYSICS),originY:withSpring(values.targetOriginY,PIP_LAYOUT_PHYSICS),width:active?values.targetWidth:withSpring(values.targetWidth,PIP_LAYOUT_PHYSICS),height:active?values.targetHeight:withSpring(values.targetHeight,PIP_LAYOUT_PHYSICS)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
const __initData18 = { code: "function VoicePanelPIPTsx30(){const{getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}" };
const __initData19 = { code: "function VoicePanelPIPTsx31(){const{pipState}=this.__closure;return{height:pipState.height*pipState.scale.get()};}" };
const __initData20 = { code: "function VoicePanelPIPTsx32(values){const{gestureState,withSpring,PIP_LAYOUT_PHYSICS}=this.__closure;const active=gestureState.get().active;return{animations:{originX:withSpring(values.targetOriginX,PIP_LAYOUT_PHYSICS),originY:withSpring(values.targetOriginY,PIP_LAYOUT_PHYSICS),width:active?values.targetWidth:withSpring(values.targetWidth,PIP_LAYOUT_PHYSICS),height:active?values.targetHeight:withSpring(values.targetHeight,PIP_LAYOUT_PHYSICS)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
ReactCompilerGating = fn(558);
let closure_54 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelPIP() {
  const cResult = setMode(stateFromStores[13]).c(57);
  const tmp4 = closure_17();
  const context = noop.useContext(pIPState(stateFromStores[14]));
  setMode = context.setMode;
  let obj = setMode(stateFromStores[13]);
  pIPState = setMode(stateFromStores[15]).usePIPState();
  const tmp8 = closure_21();
  const isMainPIPActive = tmp8.isMainPIPActive;
  let tmp9 = isMainPIPActive;
  if (!isMainPIPActive) {
    tmp9 = !tmp8.panelLayoutCommitted;
  }
  let tmp10 = tmp9;
  if (tmp9) {
    let cardArrivedInPIP = !isMainPIPActive;
    if (isMainPIPActive) {
      cardArrivedInPIP = tmp8.cardArrivedInPIP;
    }
    tmp10 = cardArrivedInPIP;
  }
  let obj2 = setMode(stateFromStores[15]);
  ({ containerStyles, pipWrapperStyles, mainPIPVisibilityStyles, mainPIPGesture, secondaryPIPGesture, containerGesture, gestureState } = closure_47(pIPState.mode, tmp9, tmp10));
  let pushToTalk = tmp5(tmp2[29])(context.controlsSpecs).pushToTalk;
  const tmp11 = closure_47(pIPState.mode, tmp9, tmp10);
  const fn = function n() {
    const obj = { borderRadius: VoicePanelPIPUtils.getVoicePanelPIPBorderRadius(pIPState.width, pIPState.height) };
    return obj;
  };
  let tmpResult = setMode(stateFromStores[17]);
  fn.__closure = { getVoicePanelPIPBorderRadius: setMode(stateFromStores[18]).getVoicePanelPIPBorderRadius, pipState: pIPState };
  fn.__workletHash = 11513358722322;
  fn.__initData = __initData15;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[30]).intl;
    const stringResult = intl.string(tmp(tmp2[30]).t.oN8bqe);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [{ name: "activate" }];
    cResult[1] = items;
    let tmp15 = items;
  } else {
    tmp15 = cResult[1];
  }
  if (cResult[2] !== setMode) {
    const obj4 = {
      accessible: true,
      accessibilityLabel: first,
      accessibilityRole: "button",
      accessibilityActions: tmp15,
      onAccessibilityAction() {
          setMode(VoicePanelModes.PANEL);
        }
    };
    cResult[2] = setMode;
    cResult[3] = obj4;
    let tmp16 = obj4;
  } else {
    tmp16 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [FramesStore];
    class B {
      constructor() {
        mainFrame = closure_1_7.getMainFrame();
        id = null;
        if (closure_1_14(mainFrame)) {
          id = mainFrame.id;
        }
        return id;
      }
    }
    cResult[4] = items1;
    cResult[5] = B;
    let tmp18 = B;
    let tmp17 = items1;
  } else {
    tmp17 = cResult[4];
    tmp18 = cResult[5];
  }
  const obj3 = { getVoicePanelPIPBorderRadius: setMode(stateFromStores[18]).getVoicePanelPIPBorderRadius, pipState: pIPState };
  stateFromStores = setMode(stateFromStores[26]).useStateFromStores(tmp17, tmp18);
  if (cResult[6] !== stateFromStores) {
    const fn2 = function q() {
      if (null != stateFromStores) {
        FramesActionCreatorsDefault.updateFramePanelMode(tmp, ActivityPanelModes.PANEL);
      } else {
        const result = EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode(ActivityPanelModes.PANEL);
      }
    };
    cResult[6] = stateFromStores;
    class B {
      constructor() {
        mainFrame = closure_1_7.getMainFrame();
        id = null;
        if (closure_1_14(mainFrame)) {
          id = mainFrame.id;
        }
        return id;
      }
    }
    cResult[7] = fn2;
    let tmp21 = fn2;
  } else {
    tmp21 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(tmp2[30]).intl;
    const stringResult1 = intl2.string(tmp(tmp2[30]).t["3ejJer"]);
    class B {
      constructor() {
        mainFrame = closure_1_7.getMainFrame();
        id = null;
        if (closure_1_14(mainFrame)) {
          id = mainFrame.id;
        }
        return id;
      }
    }
    cResult[8] = stringResult1;
    let tmp22 = stringResult1;
  } else {
    tmp22 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [{ name: "activate" }];
    class B {
      constructor() {
        mainFrame = closure_1_7.getMainFrame();
        id = null;
        if (closure_1_14(mainFrame)) {
          id = mainFrame.id;
        }
        return id;
      }
    }
    let tmp24 = items2;
  } else {
    tmp24 = cResult[9];
  }
  if (cResult[10] !== tmp21) {
    const obj5 = { accessible: true, accessibilityLabel: tmp22, accessibilityActions: tmp24, onAccessibilityAction: null };
    class B {
      constructor() {
        mainFrame = closure_1_7.getMainFrame();
        id = null;
        if (closure_1_14(mainFrame)) {
          id = mainFrame.id;
        }
        return id;
      }
    }
    cResult[10] = tmp21;
    cResult[11] = obj5;
    let tmp25 = obj5;
  } else {
    tmp25 = cResult[11];
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    function ee(isActivityFocused) {
      return isActivityFocused.isActivityFocused;
    }
    cResult[12] = ee;
    class B {
      constructor() {
        mainFrame = closure_1_7.getMainFrame();
        id = null;
        if (closure_1_14(mainFrame)) {
          id = mainFrame.id;
        }
        return id;
      }
    }
  }
  if (pushToTalk) {
    pushToTalk = pIPState.mode !== VoicePanelPIPModes.IN_PANEL || tmp27;
    const tmp29 = pIPState.mode !== VoicePanelPIPModes.IN_PANEL || tmp27;
  }
  const tmpResult3 = setMode(stateFromStores[26]);
  function se() {
    ({ scale, height } = pIPState);
    return { height: height * scale.get() };
  }
  se.__closure = { pipState: pIPState };
  se.__workletHash = 1240252027546;
  se.__initData = __initData16;
  const animatedStyle1 = setMode(stateFromStores[17]).useAnimatedStyle(se);
  if (cResult[13] !== gestureState) {
    function ce(originX) {
      const active = gestureState.get().active;
      const size = { originX: spring.withSpring(originX.targetOriginX, VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS), originY: null, width: null, height: null };
      size.originY = spring.withSpring(originX.targetOriginY, VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS);
      if (active) {
        let targetWidth = originX.targetWidth;
      } else {
        targetWidth = spring.withSpring(originX.targetWidth, VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS);
        const tmpResult = spring;
      }
      size.width = targetWidth;
      if (active) {
        let targetHeight = originX.targetHeight;
      } else {
        targetHeight = spring.withSpring(originX.targetHeight, VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS);
        const tmpResult2 = spring;
      }
      size.height = targetHeight;
      return { animations: size, initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight } };
    }
    const obj6 = { gestureState, withSpring: null, PIP_LAYOUT_PHYSICS: null };
    class B {
      constructor() {
        mainFrame = closure_1_7.getMainFrame();
        id = null;
        if (closure_1_14(mainFrame)) {
          id = mainFrame.id;
        }
        return id;
      }
    }
    obj6.PIP_LAYOUT_PHYSICS = tmp(tmp2[18]).PIP_LAYOUT_PHYSICS;
    ce.__closure = obj6;
    ce.__workletHash = 1123687809573;
    ce.__initData = __initData17;
    cResult[13] = gestureState;
    cResult[14] = ce;
    let tmp31 = ce;
  } else {
    tmp31 = cResult[14];
  }
  if (cResult[15] === containerStyles) {
    if (cResult[16] === tmp4.container) {
      let tmp33 = cResult[17];
    }
    if (cResult[18] === tmp31) {
      if (cResult[19] === tmp16) {
        if (cResult[20] === mainPIPGesture) {
          if (cResult[21] === mainPIPVisibilityStyles) {
            if (cResult[22] === tmp9) {
              if (cResult[23] === animatedStyle) {
                if (cResult[24] === pipWrapperStyles) {
                  if (cResult[25] === tmp4.inAppElevationShadow) {
                    if (cResult[26] === tmp4.pipContentWrapper) {
                      if (cResult[27] === tmp4.pipMask) {
                        let tmp34 = cResult[28];
                      }
                      if (cResult[29] === animatedStyle) {
                        if (cResult[30] === pIPState.showSecondaryPIP) {
                          if (cResult[31] === pipWrapperStyles) {
                            if (cResult[32] === tmp25) {
                              if (cResult[33] === secondaryPIPGesture) {
                                if (cResult[34] === tmp4.inAppElevationShadow) {
                                  if (cResult[35] === tmp4.pipContentWrapper) {
                                    if (cResult[36] === tmp4.pipMask) {
                                      let tmp36 = cResult[37];
                                    }
                                    if (cResult[38] === tmp31) {
                                      if (cResult[39] === tmp4.multiPipContainer) {
                                        if (cResult[40] === tmp34) {
                                          if (cResult[41] === tmp36) {
                                            let tmp38 = cResult[42];
                                          }
                                          if (cResult[43] === containerGesture) {
                                            if (cResult[44] === tmp38) {
                                              let tmp42 = cResult[45];
                                            }
                                            if (cResult[46] === tmp31) {
                                              if (cResult[47] === animatedStyle1) {
                                                if (cResult[48] === tmp10) {
                                                  if (cResult[49] === pushToTalk) {
                                                    if (cResult[50] === tmp4.pushToTalkContainer) {
                                                      let tmp46 = cResult[51];
                                                    }
                                                    if (cResult[52] === tmp31) {
                                                      if (cResult[53] === tmp33) {
                                                        if (cResult[54] === tmp42) {
                                                          if (cResult[55] === tmp46) {
                                                            let tmp48 = cResult[56];
                                                          }
                                                          return tmp48;
                                                        }
                                                      }
                                                    }
                                                    class B {
                                                      constructor() {
                                                        mainFrame = closure_1_7.getMainFrame();
                                                        id = null;
                                                        if (closure_1_14(mainFrame)) {
                                                          id = mainFrame.id;
                                                        }
                                                        return id;
                                                      }
                                                    }
                                                    tmp50[1] = tmp33;
                                                    tmp50[2] = tmp31;
                                                    const items3 = [tmp42, tmp46];
                                                    tmp50[3] = items3;
                                                    const tmp51 = closure_16(tmp5(tmp2[31]), tmp50);
                                                    cResult[52] = tmp31;
                                                    cResult[53] = tmp33;
                                                    cResult[54] = tmp42;
                                                    cResult[55] = tmp46;
                                                    cResult[56] = tmp51;
                                                    tmp48 = tmp51;
                                                  }
                                                }
                                              }
                                            }
                                            class B {
                                              constructor() {
                                                mainFrame = closure_1_7.getMainFrame();
                                                id = null;
                                                if (closure_1_14(mainFrame)) {
                                                  id = mainFrame.id;
                                                }
                                                return id;
                                              }
                                            }
                                            cResult[46] = tmp31;
                                            cResult[47] = animatedStyle1;
                                            cResult[48] = tmp10;
                                            cResult[49] = pushToTalk;
                                            cResult[50] = tmp4.pushToTalkContainer;
                                            cResult[51] = null;
                                            tmp46 = tmp47;
                                          }
                                          class B {
                                            constructor() {
                                              mainFrame = closure_1_7.getMainFrame();
                                              id = null;
                                              if (closure_1_14(mainFrame)) {
                                                id = mainFrame.id;
                                              }
                                              return id;
                                            }
                                          }
                                          tmp44[0] = containerGesture;
                                          tmp44[1] = tmp38;
                                          const tmp45 = closure_15(tmp(tmp2[21]).GestureDetector, tmp44);
                                          cResult[43] = containerGesture;
                                          cResult[44] = tmp38;
                                          cResult[45] = tmp45;
                                          tmp42 = tmp45;
                                        }
                                      }
                                    }
                                    class B {
                                      constructor() {
                                        mainFrame = closure_1_7.getMainFrame();
                                        id = null;
                                        if (closure_1_14(mainFrame)) {
                                          id = mainFrame.id;
                                        }
                                        return id;
                                      }
                                    }
                                    tmp40[1] = tmp4.multiPipContainer;
                                    tmp40[2] = tmp31;
                                    const items4 = [tmp34, tmp36];
                                    tmp40[3] = items4;
                                    const tmp41 = closure_16(tmp5(tmp2[31]), tmp40);
                                    cResult[38] = tmp31;
                                    cResult[39] = tmp4.multiPipContainer;
                                    cResult[40] = tmp34;
                                    cResult[41] = tmp36;
                                    cResult[42] = tmp41;
                                    tmp38 = tmp41;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      class B {
                        constructor() {
                          mainFrame = closure_1_7.getMainFrame();
                          id = null;
                          if (closure_1_14(mainFrame)) {
                            id = mainFrame.id;
                          }
                          return id;
                        }
                      }
                      cResult[29] = animatedStyle;
                      cResult[30] = pIPState.showSecondaryPIP;
                      cResult[31] = pipWrapperStyles;
                      cResult[32] = tmp25;
                      cResult[33] = secondaryPIPGesture;
                      cResult[34] = tmp4.inAppElevationShadow;
                      cResult[35] = tmp4.pipContentWrapper;
                      cResult[36] = tmp4.pipMask;
                      cResult[37] = null;
                      tmp36 = tmp37;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    class B {
      constructor() {
        mainFrame = closure_1_7.getMainFrame();
        id = null;
        if (closure_1_14(mainFrame)) {
          id = mainFrame.id;
        }
        return id;
      }
    }
    cResult[18] = tmp31;
    cResult[19] = tmp16;
    cResult[20] = mainPIPGesture;
    cResult[21] = mainPIPVisibilityStyles;
    cResult[22] = tmp9;
    cResult[23] = animatedStyle;
    cResult[24] = pipWrapperStyles;
    cResult[25] = tmp4.inAppElevationShadow;
    cResult[26] = tmp4.pipContentWrapper;
    cResult[27] = tmp4.pipMask;
    cResult[28] = null;
    tmp34 = tmp35;
  }
  const items5 = [tmp4.container, containerStyles];
  cResult[15] = containerStyles;
  cResult[16] = tmp4.container;
  cResult[17] = items5;
  tmp33 = items5;
  const tmpResult4 = setMode(stateFromStores[17]);
}) : (function VoicePanelPIP() {
  const tmp = closure_17();
  const context = onAccessibilityAction.useContext(pIPState(stateFromStores[14]));
  const setMode = context.setMode;
  pIPState = setMode(stateFromStores[15]).usePIPState();
  const tmp7 = closure_21();
  const isMainPIPActive = tmp7.isMainPIPActive;
  let tmp8 = isMainPIPActive;
  if (!isMainPIPActive) {
    tmp8 = !tmp7.panelLayoutCommitted;
  }
  let tmp9 = tmp8;
  if (tmp8) {
    let cardArrivedInPIP = !isMainPIPActive;
    if (isMainPIPActive) {
      cardArrivedInPIP = tmp7.cardArrivedInPIP;
    }
    tmp9 = cardArrivedInPIP;
  }
  const tmp10 = closure_47(pIPState.mode, tmp8, tmp9);
  ({ pipWrapperStyles, gestureState } = tmp10);
  ({ containerStyles, mainPIPVisibilityStyles, mainPIPGesture, secondaryPIPGesture, containerGesture } = tmp10);
  let pushToTalk = tmp2(tmp3[29])(context.controlsSpecs).pushToTalk;
  let obj2 = setMode(stateFromStores[15]);
  const fn = function n() {
    const obj = { borderRadius: VoicePanelPIPUtils.getVoicePanelPIPBorderRadius(pIPState.width, pIPState.height) };
    return obj;
  };
  const tmp5Result = setMode(stateFromStores[17]);
  fn.__closure = { getVoicePanelPIPBorderRadius: setMode(stateFromStores[18]).getVoicePanelPIPBorderRadius, pipState: pIPState };
  fn.__workletHash = 5337250890804;
  fn.__initData = __initData18;
  const animatedStyle = tmp5Result.useAnimatedStyle(fn);
  let items = [setMode];
  const memo = obj.useMemo(() => {
    const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t.oN8bqe);
    const items = [{ name: "activate" }];
    obj.accessibilityActions = items;
    obj.onAccessibilityAction = function onAccessibilityAction() {
      setMode(constants.PANEL);
    };
    return obj;
  }, items);
  const obj3 = { getVoicePanelPIPBorderRadius: setMode(stateFromStores[18]).getVoicePanelPIPBorderRadius, pipState: pIPState };
  const items1 = [FramesStore];
  stateFromStores = setMode(stateFromStores[26]).useStateFromStores(items1, () => {
    mainFrame = mainFrame.getMainFrame();
    let id = null;
    if (isLaunched(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  const items2 = [stateFromStores];
  onAccessibilityAction = obj.useCallback(() => {
    if (null != stateFromStores) {
      FramesActionCreatorsDefault.updateFramePanelMode(tmp, ActivityPanelModes.PANEL);
    } else {
      const result = EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode(ActivityPanelModes.PANEL);
    }
  }, items2);
  const items3 = [onAccessibilityAction];
  const memo1 = obj.useMemo(() => {
    const obj = { accessible: true, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t["3ejJer"]);
    const items = [{ name: "activate" }];
    obj.accessibilityActions = items;
    obj.onAccessibilityAction = onAccessibilityAction;
    return obj;
  }, items3);
  if (pushToTalk) {
    pushToTalk = pIPState.mode !== VoicePanelPIPModes.IN_PANEL || tmp16;
    const tmp18 = pIPState.mode !== VoicePanelPIPModes.IN_PANEL || tmp16;
  }
  const tmp5Result3 = setMode(stateFromStores[26]);
  const fn2 = function s() {
    ({ scale, height } = pIPState);
    return { height: height * scale.get() };
  };
  fn2.__closure = { pipState: pIPState };
  fn2.__workletHash = 17076559205042;
  fn2.__initData = __initData19;
  const fn3 = function p(originX) {
    const active = gestureState.get().active;
    const size = { originX: spring.withSpring(originX.targetOriginX, VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS), originY: null, width: null, height: null };
    size.originY = spring.withSpring(originX.targetOriginY, VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS);
    if (active) {
      let targetWidth = originX.targetWidth;
    } else {
      targetWidth = spring.withSpring(originX.targetWidth, VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS);
      const tmpResult = spring;
    }
    size.width = targetWidth;
    if (active) {
      let targetHeight = originX.targetHeight;
    } else {
      targetHeight = spring.withSpring(originX.targetHeight, VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS);
      const tmpResult2 = spring;
    }
    size.height = targetHeight;
    return { animations: size, initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight } };
  };
  const obj4 = { gestureState, withSpring: null, PIP_LAYOUT_PHYSICS: null };
  const animatedStyle1 = setMode(stateFromStores[17]).useAnimatedStyle(fn2);
  obj4.withSpring = setMode(stateFromStores[20]).withSpring;
  obj4.PIP_LAYOUT_PHYSICS = setMode(stateFromStores[18]).PIP_LAYOUT_PHYSICS;
  fn3.__closure = obj4;
  fn3.__workletHash = 8318926763791;
  fn3.__initData = __initData20;
  const items4 = [gestureState];
  const callback1 = obj.useCallback(fn3, items4);
  const obj5 = { pointerEvents: "box-none", style: null, layout: callback1, children: null };
  const items5 = [tmp.container, containerStyles];
  obj5.style = items5;
  const tmp5Result4 = setMode(stateFromStores[17]);
  const obj6 = { gesture: containerGesture, children: null };
  const obj7 = { pointerEvents: "box-none", style: tmp.multiPipContainer, layout: callback1, children: null };
  let tmp23Result = null;
  const tmp2Result = pIPState(stateFromStores[31]);
  if (tmp8) {
    const obj8 = { style: null, pointerEvents: "box-none", layout: null };
    const items6 = [, , , ];
    ({ pipContentWrapper: arr7[0], inAppElevationShadow: arr7[1] } = tmp);
    items6[2] = pipWrapperStyles;
    items6[3] = mainPIPVisibilityStyles;
    obj8.style = items6;
    obj8.layout = callback1;
    const merged = Object.assign(memo);
    const obj9 = { gesture: mainPIPGesture, children: null };
    const obj10 = { style: null, layout: null, children: null };
    const items7 = [tmp.pipMask, animatedStyle];
    obj10.style = items7;
    obj10.layout = callback1;
    const tmp2Result9 = tmp2(tmp3[31]);
    const obj11 = { layoutTransition: callback1 };
    obj10.children = closure_15(tmp2(tmp3[32]), obj11);
    obj9.children = closure_15(tmp2(tmp3[31]), obj10);
    obj8.children = closure_15(tmp5(tmp3[21]).GestureDetector, obj9);
    tmp23Result = closure_15(tmp2Result9, obj8);
    const tmp2Result10 = tmp2(tmp3[31]);
  }
  const items8 = [tmp23Result, ];
  let tmp23Result3 = null;
  if (pIPState.showSecondaryPIP) {
    const obj12 = { style: null };
    const items9 = [, , ];
    ({ pipContentWrapper: arr10[0], inAppElevationShadow: arr10[1] } = tmp);
    items9[2] = pipWrapperStyles;
    obj12.style = items9;
    const merged1 = Object.assign(memo1);
    const obj13 = { style: null, children: null };
    const items10 = [tmp.pipMask, animatedStyle];
    obj13.style = items10;
    const tmp2Result11 = tmp2(tmp3[31]);
    const obj14 = { gesture: secondaryPIPGesture, children: null };
    const obj15 = { style: StyleSheet.absoluteFill, children: null };
    const tmp2Result12 = tmp2(tmp3[31]);
    obj15.children = closure_15(tmp2(tmp3[34]), {});
    obj14.children = closure_15(tmp2(tmp3[33]), obj15);
    obj13.children = closure_15(tmp5(tmp3[21]).GestureDetector, obj14);
    obj12.children = closure_15(tmp2Result12, obj13);
    tmp23Result3 = closure_15(tmp2Result11, obj12);
    const tmp2Result13 = tmp2(tmp3[33]);
  }
  items8[1] = tmp23Result3;
  obj7.children = items8;
  obj6.children = closure_16(pIPState(stateFromStores[31]), obj7);
  const items11 = [closure_15(setMode(stateFromStores[21]).GestureDetector, obj6), ];
  let tmp23Result4 = null;
  if (tmp9) {
    tmp23Result4 = null;
    if (pushToTalk) {
      const obj16 = { pointerEvents: "box-none", style: null, layout: null, children: null };
      const items12 = [tmp.pushToTalkContainer, animatedStyle1];
      obj16.style = items12;
      obj16.layout = callback1;
      obj16.children = closure_15(tmp2(tmp3[35]), {});
      tmp23Result4 = closure_15(tmp2(tmp3[31]), obj16);
      const tmp2Result14 = tmp2(tmp3[31]);
    }
  }
  items11[1] = tmp23Result4;
  obj5.children = items11;
  return closure_16(tmp2Result, obj5);
});
ReactCompilerGating = fn(558);
let closure_55 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function PIPWrapper(transitionState) {
  const cResult = transitionState(576).c(6);
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const panelLayoutCommitted = closure_21().panelLayoutCommitted;
  if (cResult[0] === panelLayoutCommitted) {
    if (cResult[1] === transitionCleanUp) {
      if (cResult[2] === transitionState) {
        let tmp2 = cResult[3];
        let tmp3 = cResult[4];
      }
      const effect = noop.useEffect(tmp2, tmp3);
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp10 = closure_15(closure_54, {});
        cResult[5] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
  }
  const fn = function o() {
    if (tmp) {
      transitionCleanUp();
    }
    tmp = transitionState === native.TransitionStates.YEETED && panelLayoutCommitted;
  };
  const items = [transitionState, panelLayoutCommitted, transitionCleanUp];
  cResult[0] = panelLayoutCommitted;
  cResult[1] = transitionCleanUp;
  cResult[2] = transitionState;
  cResult[3] = fn;
  cResult[4] = items;
  tmp3 = items;
  tmp2 = fn;
  const obj = transitionState(576);
}) : (function PIPWrapper(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const panelLayoutCommitted = closure_21().panelLayoutCommitted;
  const items = [transitionState, panelLayoutCommitted, transitionCleanUp];
  const effect = noop.useEffect(() => {
    if (tmp) {
      transitionCleanUp();
    }
    tmp = transitionState === native.TransitionStates.YEETED && panelLayoutCommitted;
  }, items);
  return closure_15(closure_54, {});
}));
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIP.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelPIPWrapper() {
  const cResult = c.c(5);
  const pIPState = VoicePanelPIPStateContext.usePIPState();
  ({ mode, showSecondaryPIP } = pIPState);
  if (cResult[0] === mode) {
    if (cResult[1] === showSecondaryPIP) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== tmp5) {
      const obj3 = { item: tmp5, renderItem: renderPIPWrapper };
      const tmp10 = value2(native.TransitionItem, obj3);
      cResult[3] = tmp5;
      cResult[4] = tmp10;
      let tmp7 = tmp10;
    } else {
      tmp7 = cResult[4];
    }
    return tmp7;
  }
  if (null != mode) {
    const obj4 = { pipMode: mode };
  }
  cResult[0] = mode;
  cResult[1] = showSecondaryPIP;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function VoicePanelPIPWrapper() {
  const pIPState = VoicePanelPIPStateContext.usePIPState();
  ({ mode, showSecondaryPIP } = pIPState);
  if (null != mode) {
    const obj2 = { pipMode: mode };
    const tmp3 = obj2;
  }
  return value2(native.TransitionItem, { item: tmp3, renderItem: renderPIPWrapper });
}));