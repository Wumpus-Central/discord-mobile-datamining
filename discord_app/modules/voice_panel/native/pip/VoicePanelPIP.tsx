// discord_app/modules/voice_panel/native/pip/VoicePanelPIP.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import intl3 from "../../../../intl/index.native.tsx";
import embeddedActivityLocationUtils from "../../../activities/utils/embeddedActivityLocationUtils.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import LegacyBaseButton from "../../../../../_runtime/06147_LegacyBaseButton.js";
import FramesConstants from "../../../frames/FramesConstants.tsx";
import ActivityPanelConstants from "../../../activities/panel/ActivityPanelConstants.tsx";
import FramesActionCreatorsDefault from "../../../frames/FramesActionCreators.native.tsx";
import EmbeddedActivitiesActionCreatorsAll from "../../../activities/EmbeddedActivitiesActionCreators.tsx";
import ExternalPipDefault from "../../../external_pip/ExternalPip.android.tsx";
import updateSharedValueIfChangedDefault from "../../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import VoicePanelControlsConstants from "../controls/VoicePanelControlsConstants.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import VoicePanelPIPHandoff from "VoicePanelPIPHandoff.tsx";
import triggerIOSHapticDefault from "../utils/triggerIOSHaptic.tsx";
import VoicePanelPIPUtils from "VoicePanelPIPUtils.tsx";
import VoicePanelPIPConstants from "VoicePanelPIPConstants.tsx";
import VoicePanelPIPStateContext from "VoicePanelPIPStateContext.tsx";
import VoicePanelPIPScaleCache from "VoicePanelPIPScaleCache.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import FramesStore from "../../../frames/FramesStore.tsx";
import VoicePanelStore from "../../VoicePanelStore.tsx";
import VoicePanelConstants from "../../VoicePanelConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require,
  activateResult,
  changedTouches,
  importDefault,
  obj1,
  set,
  tmp13,
  tmp14,
  tmp15,
  tmp27,
  tmp28,
  tmp29,
  tmp31,
  tmp33,
  tmp36,
  tmp3Result,
  tmp3Result1,
  tmp3Result2,
  value1,
  value2;

let SECONDARY_PIP_TOP_MARGIN;
let c10;
let c9;
let closure_15;
let closure_16;
let obj2;
let obj3;
function renderPIPWrapper(arg0, arg1, transitionState, transitionCleanUp) {
  const obj = { transitionState, transitionCleanUp };
  return closure_15(closure_55, obj, arg0);
}
const StyleSheet = react_native.StyleSheet;
({ DRAWER_SPRING_PHYSICS: c9, VoicePanelModes: c10, SECONDARY_PIP_TOP_MARGIN } = VoicePanelConstants);
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const isLaunched = FramesConstants.isLaunched;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { position: "absolute", zIndex: 10 },
  pipContentWrapper: { backgroundColor: "black" },
  inAppElevationShadow: {},
  pipMask: obj2,
  multiPipContainer: obj3,
  pushToTalkContainer: { position: "absolute", top: 0, left: 0, right: 0 },
};
obj2 = { overflow: "hidden" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { flexDirection: "column", alignItems: "center", gap: SECONDARY_PIP_TOP_MARGIN };
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_17 = createStyles(obj);
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
getTouchesCentroid.__initData = {
  code: "function getTouchesCentroid_VoicePanelPIPTsx1(touches){let x=0;let y=0;for(const touch of touches){x+=touch.absoluteX;y+=touch.absoluteY;}return{x:x/touches.length,y:y/touches.length};}",
};
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
getTouchesSpread.__initData = {
  code: "function getTouchesSpread_VoicePanelPIPTsx2(touches,centroid){if(touches.length<2)return 0;let total=0;for(const touch of touches){const dx=touch.absoluteX-centroid.x;const dy=touch.absoluteY-centroid.y;total+=Math.sqrt(dx*dx+dy*dy);}return total/touches.length;}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = react2;
      const cResult = obj.c(4);
      const pipHandoff = react.useContext(VoicePanelStateContextDefault).pipHandoff;
      const obj2 = VoicePanelPIPStateContext;
      const mode = obj2.usePIPState().mode;
      const obj3 = VoicePanelPIPHandoff;
      const pIPCardsSettled = obj3.usePIPCardsSettled(pipHandoff);
      const obj4 = VoicePanelPIPHandoff;
      const pIPPanelLayoutCommitted = obj4.usePIPPanelLayoutCommitted(pipHandoff);
      if (cResult[0] === pIPPanelLayoutCommitted) {
        if ((cResult[1] === null) != mode) {
          let tmp6;
          if (cResult[2] === (mode !== VoicePanelPIPModes.IN_APP || pIPCardsSettled)) {
            tmp6 = cResult[3];
          }
          return tmp6;
        }
      }
      const obj5 = {
        isMainPIPActive: null != mode,
        cardArrivedInPIP: mode !== VoicePanelPIPModes.IN_APP || pIPCardsSettled,
        panelLayoutCommitted: pIPPanelLayoutCommitted,
      };
      cResult[0] = pIPPanelLayoutCommitted;
      cResult[1] = null != mode;
      cResult[2] = mode !== VoicePanelPIPModes.IN_APP || pIPCardsSettled;
      cResult[3] = obj5;
      tmp6 = obj5;
    }
  : () => {
      let pIPPanelLayoutCommitted;
      let tmp3;
      const pipHandoff = react.useContext(VoicePanelStateContextDefault).pipHandoff;
      const obj = VoicePanelPIPStateContext;
      const mode = obj.usePIPState().mode;
      const obj2 = VoicePanelPIPHandoff;
      const pIPCardsSettled = obj2.usePIPCardsSettled(pipHandoff);
      const obj4 = {
        isMainPIPActive: null != mode,
        cardArrivedInPIP: tmp3,
        panelLayoutCommitted: pIPPanelLayoutCommitted,
      };
      tmp3 = mode !== VoicePanelPIPModes.IN_APP;
      const obj3 = VoicePanelPIPHandoff;
      pIPPanelLayoutCommitted = obj3.usePIPPanelLayoutCommitted(pipHandoff);
      if (!tmp3) {
        tmp3 = pIPCardsSettled;
      }
      return obj4;
    };
const INACTIVE_GESTURE_STATE = {
  pressed: false,
  active: false,
  baseX: 0,
  baseY: 0,
  offsetX: 0,
  offsetY: 0,
  originX: 0,
  originY: 0,
  spread: 0,
};
const __initData = {
  code: "function VoicePanelPIPTsx3(state,velocityX,velocityY){const{pipState,getScaledPIPContainerHeight,calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions}=this.__closure;const scale=pipState.scale.get();const width=pipState.width*scale;const height=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:scale});const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:state.baseX+state.offsetX+width/2,absoluteY:state.baseY+state.offsetY+height/2,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});}",
};
const __initData2 = {
  code: "function VoicePanelPIPTsx4(){const{pipState,getScaledPIPContainerHeight,mainTileInLayout,gestureState,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,DRAWER_SPRING_PHYSICS,PIP_LAYOUT_PHYSICS,opacity,withSpring,getVoicePanelPIPBorderRadius}=this.__closure;const width_0=pipState.width*pipState.scale.get();const height_0=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP&&mainTileInLayout,scale:pipState.scale.get()});const state_0=gestureState.get();let x;let y;if(state_0.active){x=state_0.baseX+state_0.offsetX;y=state_0.baseY+state_0.offsetY;}else{const clamped=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width_0,height:height_0,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=clamped.x;y=clamped.y;}const physics=state_0.active?DRAWER_SPRING_PHYSICS:PIP_LAYOUT_PHYSICS;return{width:width_0,height:height_0,opacity:opacity.get(),transform:[{translateX:withSpring(x,physics)},{translateY:withSpring(y,physics)}],borderRadius:getVoicePanelPIPBorderRadius(width_0,height_0)};}",
};
const __initData3 = {
  code: "function VoicePanelPIPTsx5(){const{pipState,getVoicePanelPIPBorderRadius}=this.__closure;const{width:width_1,height:height_1,scale:scale_0}=pipState;return{width:width_1*scale_0.get(),height:height_1*scale_0.get(),borderRadius:getVoicePanelPIPBorderRadius(width_1,height_1)};}",
};
const __initData4 = {
  code: "function VoicePanelPIPTsx6(){const{mainTileVisible}=this.__closure;return{opacity:mainTileVisible?1:0};}",
};
let closure_27 = {
  code: "function VoicePanelPIPTsx7(){const{updateSharedValueIfChanged,wrapperOffset,gestureState,INACTIVE_GESTURE_STATE}=this.__closure;updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});gestureState.set(INACTIVE_GESTURE_STATE);}",
};
let closure_28 = {
  code: "function VoicePanelPIPTsx8(t8){const{gestureState,settlePIPPosition,updateSharedValueIfChanged,wrapperOffset,INACTIVE_GESTURE_STATE,runOnJS,updateSourceTrackingView,setVoicePanelPIPScaleCached,pipState}=this.__closure;var velocityX_0=t8.velocityX,velocityY_0=t8.velocityY;var state_3=gestureState.get();settlePIPPosition(state_3,velocityX_0,velocityY_0);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});gestureState.set(INACTIVE_GESTURE_STATE);runOnJS(updateSourceTrackingView)();runOnJS(setVoicePanelPIPScaleCached)(pipState.scale.get());}",
};
const __initData5 = {
  code: "function VoicePanelPIPTsx9(event_1,manager){const{getTouchesCentroid,getTouchesSpread,gestureState,MIN_PINCH_SPAN,pipState,clampPIPScale,windowDimensions,safeArea,pipAvoidanceSpecs,State,MIN_GESTURE_START,getClampedPIPPosition,wrapperDimensions,getScaledPIPContainerHeight,updateSharedValueIfChanged,wrapperOffset,runOnJS,triggerIOSHaptic}=this.__closure;var centroid_1=getTouchesCentroid(event_1.allTouches);var spread_0=getTouchesSpread(event_1.allTouches,centroid_1);var state_2=gestureState.get();if(state_2.active){var offsetX=state_2.offsetX+centroid_1.x-state_2.originX;var offsetY=state_2.offsetY+centroid_1.y-state_2.originY;if(state_2.spread>MIN_PINCH_SPAN&&spread_0>MIN_PINCH_SPAN){var previousScale=pipState.scale.get();var scale_1=clampPIPScale({scale:previousScale*(spread_0/state_2.spread),width:pipState.width,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get()});if(scale_1!==previousScale){pipState.scale.set(scale_1);var scaleChange=scale_1/previousScale;offsetX=offsetX+(centroid_1.x-(state_2.baseX+offsetX))*(1-scaleChange);offsetY=offsetY+(centroid_1.y-(state_2.baseY+offsetY))*(1-scaleChange);}}gestureState.set({pressed:state_2.pressed,active:true,baseX:state_2.baseX,baseY:state_2.baseY,offsetX:offsetX,offsetY:offsetY,originX:centroid_1.x,originY:centroid_1.y,spread:spread_0});return;}if(event_1.state!==State.BEGAN){return;}if(Math.abs(state_2.originX-centroid_1.x)>MIN_GESTURE_START||Math.abs(state_2.originY-centroid_1.y)>MIN_GESTURE_START||Math.abs(state_2.spread-spread_0)>MIN_GESTURE_START){var scale_2=pipState.scale.get();var _getClampedPIPPositio=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:pipState.width*scale_2,height:getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:scale_2}),windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top}),x_0=_getClampedPIPPositio.x,y_0=_getClampedPIPPositio.y;gestureState.set({pressed:true,active:true,baseX:x_0,baseY:y_0,offsetX:0,offsetY:0,originX:centroid_1.x,originY:centroid_1.y,spread:spread_0});updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:0});manager.activate();runOnJS(triggerIOSHaptic)();}}",
};
const __initData6 = {
  code: "function VoicePanelPIPTsx10(event_0){const{updateSharedValueIfChanged,gestureState,getTouchesCentroid,getTouchesSpread}=this.__closure;var remainingTouches=event_0.allTouches.filter(function(touch){return!event_0.changedTouches.some(function(changedTouch){return changedTouch.id===touch.id;});});if(remainingTouches.length===0){updateSharedValueIfChanged(gestureState,{pressed:false});return;}var centroid_0=getTouchesCentroid(remainingTouches);updateSharedValueIfChanged(gestureState,{originX:centroid_0.x,originY:centroid_0.y,spread:getTouchesSpread(remainingTouches,centroid_0)});}",
};
const __initData7 = {
  code: "function VoicePanelPIPTsx11(event){const{getTouchesCentroid,getTouchesSpread,gestureState,INACTIVE_GESTURE_STATE,updateSharedValueIfChanged}=this.__closure;var centroid=getTouchesCentroid(event.allTouches);var spread=getTouchesSpread(event.allTouches,centroid);var state_1=gestureState.get();if(!state_1.pressed){gestureState.set({...INACTIVE_GESTURE_STATE,pressed:true,originX:centroid.x,originY:centroid.y,spread:spread});return;}updateSharedValueIfChanged(gestureState,{originX:centroid.x,originY:centroid.y,spread:spread});}",
};
const __initData8 = {
  code: "function VoicePanelPIPTsx12(){const{runOnJS,setFocused}=this.__closure;runOnJS(setFocused)(null);}",
};
const __initData9 = {
  code: "function VoicePanelPIPTsx13(){const{pipMode,VoicePanelPIPModes,runOnJS,setMode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,showControls,hideControls}=this.__closure;if(pipMode===VoicePanelPIPModes.IN_APP){runOnJS(setMode)(VoicePanelModes.PANEL);}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)();}else{runOnJS(hideControls)();}}}",
};
const __initData10 = {
  code: "function VoicePanelPIPTsx14(){const{runOnJS,handleSecondaryPIPTap}=this.__closure;runOnJS(handleSecondaryPIPTap)();}",
};
const __initData11 = {
  code: "function VoicePanelPIPTsx15(state,velocityX,velocityY){const{pipState,getScaledPIPContainerHeight,calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions}=this.__closure;const scale=pipState.scale.get();const width=pipState.width*scale;const height=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:scale});const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:state.baseX+state.offsetX+width/2,absoluteY:state.baseY+state.offsetY+height/2,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});}",
};
const __initData12 = {
  code: "function VoicePanelPIPTsx16(){const{pipState,getScaledPIPContainerHeight,mainTileInLayout,gestureState,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,DRAWER_SPRING_PHYSICS,PIP_LAYOUT_PHYSICS,opacity,withSpring,getVoicePanelPIPBorderRadius}=this.__closure;const width_0=pipState.width*pipState.scale.get();const height_0=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP&&mainTileInLayout,scale:pipState.scale.get()});const state_0=gestureState.get();let x;let y;if(state_0.active){x=state_0.baseX+state_0.offsetX;y=state_0.baseY+state_0.offsetY;}else{const clamped=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width_0,height:height_0,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=clamped.x;y=clamped.y;}const physics=state_0.active?DRAWER_SPRING_PHYSICS:PIP_LAYOUT_PHYSICS;return{width:width_0,height:height_0,opacity:opacity.get(),transform:[{translateX:withSpring(x,physics)},{translateY:withSpring(y,physics)}],borderRadius:getVoicePanelPIPBorderRadius(width_0,height_0)};}",
};
const __initData13 = {
  code: "function VoicePanelPIPTsx17(){const{pipState,getVoicePanelPIPBorderRadius}=this.__closure;const{width:width_1,height:height_1,scale:scale_0}=pipState;return{width:width_1*scale_0.get(),height:height_1*scale_0.get(),borderRadius:getVoicePanelPIPBorderRadius(width_1,height_1)};}",
};
const __initData14 = {
  code: "function VoicePanelPIPTsx18(){const{mainTileVisible}=this.__closure;return{opacity:mainTileVisible?1:0};}",
};
let closure_39 = {
  code: "function VoicePanelPIPTsx19(){const{updateSharedValueIfChanged,wrapperOffset,gestureState,INACTIVE_GESTURE_STATE}=this.__closure;updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});gestureState.set(INACTIVE_GESTURE_STATE);}",
};
let closure_40 = {
  code: "function VoicePanelPIPTsx20({velocityX:velocityX_0,velocityY:velocityY_0}){const{gestureState,settlePIPPosition,updateSharedValueIfChanged,wrapperOffset,INACTIVE_GESTURE_STATE,runOnJS,updateSourceTrackingView,setVoicePanelPIPScaleCached,pipState}=this.__closure;const state_3=gestureState.get();settlePIPPosition(state_3,velocityX_0,velocityY_0);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});gestureState.set(INACTIVE_GESTURE_STATE);runOnJS(updateSourceTrackingView)();runOnJS(setVoicePanelPIPScaleCached)(pipState.scale.get());}",
};
let closure_41 = {
  code: "function VoicePanelPIPTsx21(event_1,manager){const{getTouchesCentroid,getTouchesSpread,gestureState,MIN_PINCH_SPAN,pipState,clampPIPScale,windowDimensions,safeArea,pipAvoidanceSpecs,State,MIN_GESTURE_START,getClampedPIPPosition,wrapperDimensions,getScaledPIPContainerHeight,updateSharedValueIfChanged,wrapperOffset,runOnJS,triggerIOSHaptic}=this.__closure;const centroid_1=getTouchesCentroid(event_1.allTouches);const spread_0=getTouchesSpread(event_1.allTouches,centroid_1);const state_2=gestureState.get();if(state_2.active){let offsetX=state_2.offsetX+centroid_1.x-state_2.originX;let offsetY=state_2.offsetY+centroid_1.y-state_2.originY;if(state_2.spread>MIN_PINCH_SPAN&&spread_0>MIN_PINCH_SPAN){const previousScale=pipState.scale.get();const scale_1=clampPIPScale({scale:previousScale*(spread_0/state_2.spread),width:pipState.width,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get()});if(scale_1!==previousScale){pipState.scale.set(scale_1);const scaleChange=scale_1/previousScale;offsetX+=(centroid_1.x-(state_2.baseX+offsetX))*(1-scaleChange);offsetY+=(centroid_1.y-(state_2.baseY+offsetY))*(1-scaleChange);}}gestureState.set({pressed:state_2.pressed,active:true,baseX:state_2.baseX,baseY:state_2.baseY,offsetX:offsetX,offsetY:offsetY,originX:centroid_1.x,originY:centroid_1.y,spread:spread_0});return;}if(event_1.state!==State.BEGAN)return;if(Math.abs(state_2.originX-centroid_1.x)>MIN_GESTURE_START||Math.abs(state_2.originY-centroid_1.y)>MIN_GESTURE_START||Math.abs(state_2.spread-spread_0)>MIN_GESTURE_START){const scale_2=pipState.scale.get();const{x:x_0,y:y_0}=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:pipState.width*scale_2,height:getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:scale_2}),windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});gestureState.set({pressed:true,active:true,baseX:x_0,baseY:y_0,offsetX:0,offsetY:0,originX:centroid_1.x,originY:centroid_1.y,spread:spread_0});updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:0});manager.activate();runOnJS(triggerIOSHaptic)();}}",
};
let closure_42 = {
  code: "function VoicePanelPIPTsx22(event_0){const{updateSharedValueIfChanged,gestureState,getTouchesCentroid,getTouchesSpread}=this.__closure;const remainingTouches=event_0.allTouches.filter(function(touch){return!event_0.changedTouches.some(function(changedTouch){return changedTouch.id===touch.id;});});if(remainingTouches.length===0){updateSharedValueIfChanged(gestureState,{pressed:false});return;}const centroid_0=getTouchesCentroid(remainingTouches);updateSharedValueIfChanged(gestureState,{originX:centroid_0.x,originY:centroid_0.y,spread:getTouchesSpread(remainingTouches,centroid_0)});}",
};
let closure_43 = {
  code: "function VoicePanelPIPTsx23(event){const{getTouchesCentroid,getTouchesSpread,gestureState,INACTIVE_GESTURE_STATE,updateSharedValueIfChanged}=this.__closure;const centroid=getTouchesCentroid(event.allTouches);const spread=getTouchesSpread(event.allTouches,centroid);const state_1=gestureState.get();if(!state_1.pressed){gestureState.set({...INACTIVE_GESTURE_STATE,pressed:true,originX:centroid.x,originY:centroid.y,spread:spread});return;}updateSharedValueIfChanged(gestureState,{originX:centroid.x,originY:centroid.y,spread:spread});}",
};
let closure_44 = {
  code: "function VoicePanelPIPTsx24(){const{runOnJS,setFocused}=this.__closure;runOnJS(setFocused)(null);}",
};
let closure_45 = {
  code: "function VoicePanelPIPTsx25(){const{pipMode,VoicePanelPIPModes,runOnJS,setMode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,showControls,hideControls}=this.__closure;if(pipMode===VoicePanelPIPModes.IN_APP){runOnJS(setMode)(VoicePanelModes.PANEL);}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)();}else{runOnJS(hideControls)();}}}",
};
let closure_46 = {
  code: "function VoicePanelPIPTsx26(){const{runOnJS,handleSecondaryPIPTap}=this.__closure;runOnJS(handleSecondaryPIPTap)();}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_47 = ReactCompilerGating.isReactCompilerEnabled()
  ? (pipMode, mainTileInLayout, mainTileVisible) => {
      let closure_20;
      let controlsSpecs;
      let hideControls;
      let tmp10;
      let tmp9;
      _require = pipMode;
      importDefault = mainTileInLayout;
      let closure_2 = mainTileVisible;
      let tmp = _require;
      let tmp2 = controlsSpecs;
      let obj = require("react");
      const cResult = obj.c(84);
      let obj2 = hideControls;
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
      let obj3 = require("VoicePanelPIPStateContext");
      size = obj3.usePIPState();
      let obj4 = require("ReanimatedRexport");
      const sharedValue = obj4.useSharedValue(INACTIVE_GESTURE_STATE);
      const obj5 = require("ReanimatedRexport");
      const sharedValue1 = obj5.useSharedValue(0);
      if (cResult[0] !== sharedValue1) {
        const fn = function p() {
          let closure_0;
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
        tmp10 = items;
        tmp9 = fn;
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
                    let tmp12;
                    let stateFromStores;
                    let stateFromStores1;
                    if (cResult[10] === wrapperDimensions) {
                      tmp12 = cResult[11];
                    }
                    closure_17 = tmp12;
                    function te() {
                      let PIP_LAYOUT_PHYSICS;
                      let items;
                      let scale2;
                      let showSecondaryPIP;
                      let tmp3Result4;
                      let tmp3Result5;
                      let tmp3Result6;
                      let x;
                      let y;
                      const scale = size.scale;
                      const result = size.width * scale.get();
                      const obj = {
                        height: size.height,
                        containerHeight: size.containerHeight,
                        showSecondaryPIP,
                        scale: scale2.get(),
                      };
                      showSecondaryPIP = size.showSecondaryPIP;
                      const getScaledPIPContainerHeight = VoicePanelPIPUtils.getScaledPIPContainerHeight;
                      VoicePanelPIPUtils;
                      const tmp = size;
                      if (showSecondaryPIP) {
                        showSecondaryPIP = mainTileInLayout;
                      }
                      scale2 = tmp.scale;
                      const scaledPIPContainerHeight = getScaledPIPContainerHeight(obj);
                      const value = sharedValue.get();
                      if (value.active) {
                        x = value.baseX + value.offsetX;
                        y = value.baseY + value.offsetY;
                      } else {
                        size = {
                          pipX: wrapperDimensions.get().pipX,
                          pipY: wrapperDimensions.get().pipY,
                          width: result,
                          height: scaledPIPContainerHeight,
                          windowDimensions: windowDimensions.get(),
                          safeArea: safeArea.get(),
                          bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom,
                          topAvoidanceRegion: pipAvoidanceSpecs.get().top,
                        };
                        const getClampedPIPPosition = VoicePanelPIPUtils.getClampedPIPPosition;
                        VoicePanelPIPUtils;
                        const clampedPIPPosition = getClampedPIPPosition(size);
                        ({ x, y } = clampedPIPPosition);
                      }
                      if (value.active) {
                        PIP_LAYOUT_PHYSICS = React4;
                      } else {
                        PIP_LAYOUT_PHYSICS = VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS;
                      }
                      const size1 = {
                        width: result,
                        height: scaledPIPContainerHeight,
                        opacity: sharedValue1.get(),
                        transform: items,
                        borderRadius: tmp3Result6.getVoicePanelPIPBorderRadius(result, scaledPIPContainerHeight),
                      };
                      const obj2 = { translateX: tmp3Result4.withSpring(x, PIP_LAYOUT_PHYSICS) };
                      items = [obj2];
                      tmp3Result4 = spring;
                      const obj3 = { translateY: tmp3Result5.withSpring(y, PIP_LAYOUT_PHYSICS) };
                      items[1] = obj3;
                      tmp3Result5 = spring;
                      tmp3Result6 = VoicePanelPIPUtils;
                      return size1;
                    }
                    let obj6 = {
                      pipState: size,
                      getScaledPIPContainerHeight: tmp(tmp2[18]).getScaledPIPContainerHeight,
                      mainTileInLayout,
                      gestureState: sharedValue,
                      getClampedPIPPosition: tmp(tmp2[18]).getClampedPIPPosition,
                      wrapperDimensions,
                      windowDimensions,
                      safeArea,
                      pipAvoidanceSpecs,
                      DRAWER_SPRING_PHYSICS: showControls,
                      PIP_LAYOUT_PHYSICS: tmp(tmp2[18]).PIP_LAYOUT_PHYSICS,
                      opacity: sharedValue1,
                      withSpring: tmp(tmp2[20]).withSpring,
                      getVoicePanelPIPBorderRadius: tmp(tmp2[18]).getVoicePanelPIPBorderRadius,
                    };
                    const useAnimatedStyle = tmp(tmp2[17]).useAnimatedStyle;
                    tmp(tmp2[17]);
                    te.__closure = obj6;
                    te.__workletHash = 6745565797102;
                    te.__initData = __initData2;
                    const animatedStyle = useAnimatedStyle(te);
                    function ie() {
                      let height;
                      let obj2;
                      let scale;
                      let width;
                      ({ width, height, scale } = size);
                      size = {
                        width: width * scale.get(),
                        height: height * scale.get(),
                        borderRadius: obj2.getVoicePanelPIPBorderRadius(width, height),
                      };
                      obj2 = VoicePanelPIPUtils;
                      return size;
                    }
                    const obj7 = {
                      pipState: size,
                      getVoicePanelPIPBorderRadius: tmp(tmp2[18]).getVoicePanelPIPBorderRadius,
                    };
                    const useAnimatedStyle2 = tmp(tmp2[17]).useAnimatedStyle;
                    tmp(tmp2[17]);
                    ie.__closure = obj7;
                    ie.__workletHash = 335208486668;
                    ie.__initData = __initData3;
                    const animatedStyle2 = useAnimatedStyle2(ie);
                    function ae() {
                      let opacity = 0;
                      if (mainTileVisible) {
                        opacity = 1;
                      }
                      return { opacity };
                    }
                    const obj8 = { mainTileVisible };
                    ae.__closure = obj8;
                    ae.__workletHash = 10222959683662;
                    ae.__initData = __initData4;
                    const tmpResult6 = tmp(tmp2[17]);
                    const animatedStyle1 = tmpResult6.useAnimatedStyle(ae);
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
                                          if (cResult[49] === controlsSpecs) {
                                            if (cResult[50] === hideControls) {
                                              if (cResult[51] === pipMode) {
                                                if (cResult[52] === setFocused) {
                                                  if (cResult[53] === setMode) {
                                                    let tmp45;
                                                    let tmp47;
                                                    let tmp50;
                                                    let tmp49;
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
                                                          if (
                                                            controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN
                                                          ) {
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
                                                    if (tmp43 === Symbol.for("react.memo_cache_sentinel")) {
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
                                                            if (
                                                              controlsSpecs.get().mode ===
                                                              VoicePanelControlsModes.HIDDEN
                                                            ) {
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
                                                      tmp45 = items1;
                                                    } else {
                                                      tmp45 = cResult[64];
                                                    }
                                                    if (cResult[65] !== channelId) {
                                                      function fe() {
                                                        const currentEmbeddedActivity =
                                                          EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
                                                        let _location;
                                                        const getEmbeddedActivityLocationChannelId =
                                                          embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId;
                                                        embeddedActivityLocationUtils;
                                                        if (currentEmbeddedActivity != null) {
                                                          _location = currentEmbeddedActivity.location;
                                                        }
                                                        return (
                                                          getEmbeddedActivityLocationChannelId(_location) !== channelId
                                                        );
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
                                                            if (
                                                              controlsSpecs.get().mode ===
                                                              VoicePanelControlsModes.HIDDEN
                                                            ) {
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
                                                      tmp47 = fe;
                                                    } else {
                                                      tmp47 = cResult[66];
                                                    }
                                                    const tmpResult7 = tmp(tmp2[26]);
                                                    stateFromStores = tmpResult7.useStateFromStores(tmp45, tmp47);
                                                    const _Symbol2 = Symbol;
                                                    if (cResult[67] === Symbol.for("react.memo_cache_sentinel")) {
                                                      const items2 = [setFocused];
                                                      class Te {
                                                        constructor() {
                                                          const mainFrame = setFocused.getMainFrame();
                                                          let id = null;
                                                          if (size(mainFrame)) {
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
                                                            if (
                                                              controlsSpecs.get().mode ===
                                                              VoicePanelControlsModes.HIDDEN
                                                            ) {
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
                                                      tmp50 = Te;
                                                      tmp49 = items2;
                                                    } else {
                                                      tmp49 = cResult[67];
                                                      tmp50 = cResult[68];
                                                    }
                                                    const tmpResult8 = tmp(tmp2[26]);
                                                    stateFromStores1 = tmpResult8.useStateFromStores(tmp49, tmp50);
                                                    if (cResult[69] === stateFromStores) {
                                                      if (cResult[70] === stateFromStores1) {
                                                        if (cResult[71] === setFocused) {
                                                          let tmp53;
                                                          let tmp54;
                                                          if (cResult[72] === setMode) {
                                                            tmp53 = cResult[73];
                                                          }
                                                          getTouchesSpread = tmp53;
                                                          if (cResult[74] !== tmp53) {
                                                            const Gesture = tmp(tmp2[21]).Gesture;
                                                            Gesture.Tap();
                                                            class Te {
                                                              constructor() {
                                                                const mainFrame = setFocused.getMainFrame();
                                                                let id = null;
                                                                if (size(mainFrame)) {
                                                                  id = mainFrame.id;
                                                                }
                                                                return id;
                                                              }
                                                            }
                                                            class Ye {
                                                              constructor() {
                                                                const obj = ReanimatedRexport;
                                                                obj.runOnJS(closure_20)();
                                                              }
                                                            }
                                                            const onStart = tmp56.onStart;
                                                            Ye.__closure = {
                                                              runOnJS: tmp(tmp2[17]).runOnJS,
                                                              handleSecondaryPIPTap: tmp53,
                                                            };
                                                            Ye.__workletHash = 16816842509722;
                                                            Ye.__initData = __initData10;
                                                            const obj9 = {
                                                              runOnJS: tmp(tmp2[17]).runOnJS,
                                                              handleSecondaryPIPTap: tmp53,
                                                            };
                                                            const onStartResult = onStart(Ye);
                                                            cResult[74] = tmp53;
                                                            cResult[75] = onStartResult;
                                                            tmp54 = onStartResult;
                                                          } else {
                                                            tmp54 = cResult[75];
                                                          }
                                                          class Te {
                                                            constructor() {
                                                              const mainFrame = setFocused.getMainFrame();
                                                              let id = null;
                                                              if (size(mainFrame)) {
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
                                                                if (
                                                                  controlsSpecs.get().mode ===
                                                                  VoicePanelControlsModes.HIDDEN
                                                                ) {
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
                                                          tmp60[0] = tmp23;
                                                          tmp60[1] = animatedStyle;
                                                          tmp60[2] = animatedStyle2;
                                                          tmp60[3] = animatedStyle1;
                                                          tmp60[4] = tmp35;
                                                          tmp60[5] = tmp54;
                                                          tmp60[6] = sharedValue;
                                                          cResult[76] = tmp23;
                                                          cResult[77] = animatedStyle;
                                                          cResult[78] = sharedValue;
                                                          cResult[79] = tmp35;
                                                          cResult[80] = animatedStyle1;
                                                          cResult[81] = animatedStyle2;
                                                          cResult[82] = tmp54;
                                                          cResult[83] = tmp60;
                                                        }
                                                      }
                                                    }
                                                    function ye() {
                                                      if (stateFromStores) {
                                                        setMode(windowDimensions.PIP);
                                                        setFocused(null);
                                                      }
                                                      if (null != stateFromStores1) {
                                                        const obj2 = FramesActionCreatorsDefault;
                                                        obj2.updateFramePanelMode(tmp8, ActivityPanelModes.PANEL);
                                                      } else {
                                                        const obj = EmbeddedActivitiesActionCreatorsAll;
                                                        const result = obj.updateActivityPanelMode(
                                                          ActivityPanelModes.PANEL,
                                                        );
                                                      }
                                                    }
                                                    cResult[69] = stateFromStores;
                                                    cResult[70] = stateFromStores1;
                                                    cResult[71] = setFocused;
                                                    cResult[72] = setMode;
                                                    cResult[73] = ye;
                                                    tmp53 = ye;
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
                                            ({ runOnJS: tmp(tmp2[17]).runOnJS, setFocused: null });
                                            class Te {
                                              constructor() {
                                                const mainFrame = setFocused.getMainFrame();
                                                let id = null;
                                                if (size(mainFrame)) {
                                                  id = mainFrame.id;
                                                }
                                                return id;
                                              }
                                            }
                                            class Ye {
                                              constructor() {
                                                const obj = ReanimatedRexport;
                                                obj.runOnJS(closure_20)();
                                              }
                                            }
                                            VoicePanelPIPTsx12.__workletHash = 12274741816775;
                                            VoicePanelPIPTsx12.__initData = __initData8;
                                            cResult[56] = setFocused;
                                            cResult[57] = VoicePanelPIPTsx12;
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
                                          VoicePanelPIPTsx13.__closure = {
                                            pipMode,
                                            VoicePanelPIPModes: wrapperOffset,
                                            runOnJS: tmp(tmp2[17]).runOnJS,
                                            setMode,
                                            VoicePanelModes: windowDimensions,
                                            controlsSpecs,
                                            VoicePanelControlsModes: wrapperDimensions,
                                            showControls,
                                            hideControls,
                                          };
                                          VoicePanelPIPTsx13.__workletHash = 2882749351054;
                                          VoicePanelPIPTsx13.__initData = __initData9;
                                          cResult[58] = controlsSpecs;
                                          cResult[59] = hideControls;
                                          cResult[60] = pipMode;
                                          cResult[61] = setMode;
                                          cResult[62] = showControls;
                                          cResult[63] = VoicePanelPIPTsx13;
                                          const obj11 = {
                                            pipMode,
                                            VoicePanelPIPModes: wrapperOffset,
                                            runOnJS: tmp(tmp2[17]).runOnJS,
                                            setMode,
                                            VoicePanelModes: windowDimensions,
                                            controlsSpecs,
                                            VoicePanelControlsModes: wrapperDimensions,
                                            showControls,
                                            hideControls,
                                          };
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
                      let obj12 = {
                        getTouchesCentroid: null,
                        getTouchesSpread,
                        gestureState: sharedValue,
                        INACTIVE_GESTURE_STATE,
                        updateSharedValueIfChanged: tmp4(tmp2[19]),
                      };
                      class Te {
                        constructor() {
                          const mainFrame = setFocused.getMainFrame();
                          let id = null;
                          if (size(mainFrame)) {
                            id = mainFrame.id;
                          }
                          return id;
                        }
                      }
                      class Ye {
                        constructor() {
                          const obj = ReanimatedRexport;
                          obj.runOnJS(closure_20)();
                        }
                      }
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
                      const obj13 = {
                        updateSharedValueIfChanged: require("updateSharedValueIfChanged"),
                        gestureState: null,
                        getTouchesCentroid: stateFromStores1,
                        getTouchesSpread,
                      };
                      class Te {
                        constructor() {
                          const mainFrame = setFocused.getMainFrame();
                          let id = null;
                          if (size(mainFrame)) {
                            id = mainFrame.id;
                          }
                          return id;
                        }
                      }
                      class Ye {
                        constructor() {
                          const obj = ReanimatedRexport;
                          obj.runOnJS(closure_20)();
                        }
                      }
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
                              tmp29 = closure_14;
                              value1 = scale3.get();
                              tmp31 = closure_0;
                              tmp32 = closure_3;
                              tmp33 = closure_0(closure_3[18]);
                              obj1 = {
                                scale: null,
                                width: null,
                                containerHeight: null,
                                showSecondaryPIP: null,
                                windowDimensions: null,
                                safeArea: null,
                                pipAvoidanceSpecs: null,
                              };
                              obj1.scale = value1 * (tmp / value.spread);
                              ({
                                width: obj8.width,
                                containerHeight: obj8.containerHeight,
                                showSecondaryPIP: obj8.showSecondaryPIP,
                              } = closure_14);
                              tmp34 = windowDimensions;
                              clampPIPScale = tmp33.clampPIPScale;
                              obj1.windowDimensions = windowDimensions.get();
                              tmp35 = safeArea;
                              obj1.safeArea = safeArea.get();
                              tmp36 = pipAvoidanceSpecs;
                              obj1.pipAvoidanceSpecs = pipAvoidanceSpecs.get();
                              clampPIPScaleResult = clampPIPScale(obj1);
                              sum1 = diff1;
                              sum = diff;
                              if (clampPIPScaleResult !== value1) {
                                scale2 = tmp29.scale;
                                result = scale2.set(clampPIPScaleResult);
                                result1 = clampPIPScaleResult / value1;
                                num2 = 1;
                                sum = diff + (point.x - (value.baseX + diff)) * (1 - result1);
                                sum1 = diff1 + (point.y - (value.baseY + diff1)) * (1 - result1);
                              }
                            }
                          }
                          obj9 = {
                            pressed: null,
                            active: true,
                            baseX: null,
                            baseY: null,
                            offsetX: null,
                            offsetY: null,
                            originX: null,
                            originY: null,
                            spread: null,
                          };
                          ({ pressed: obj7.pressed, baseX: obj7.baseX, baseY: obj7.baseY } = value);
                          obj9.offsetX = sum;
                          obj9.offsetY = sum1;
                          ({ x: obj7.originX, y: obj7.originY } = point);
                          obj9.spread = tmp;
                          result2 = obj.set(obj9);
                        } else {
                          tmp3 = closure_0;
                          tmp4 = closure_3;
                          if (pipMode.state === closure_0(closure_3[21]).State.BEGAN) {
                            tmp27 = globalThis;
                            _Math3 = Math;
                            tmp28 = c18;
                            if (Math.abs(value.originX - point.x) <= c18) {
                              _Math = Math;
                              if (Math.abs(value.originY - point.y) <= tmp28) {
                                _Math2 = Math;
                              }
                            }
                            tmp5 = mainTileInLayout;
                            tmp6 = closure_14;
                            scale = closure_14.scale;
                            value2 = scale.get();
                            tmp3Result = tmp3(tmp4[18]);
                            size = {
                              pipX: null,
                              pipY: null,
                              width: null,
                              height: null,
                              windowDimensions: null,
                              safeArea: null,
                              bottomAvoidanceRegion: null,
                              topAvoidanceRegion: null,
                            };
                            tmp9 = wrapperDimensions;
                            getClampedPIPPosition = tmp3Result.getClampedPIPPosition;
                            size.pipX = wrapperDimensions.get().pipX;
                            size.pipY = wrapperDimensions.get().pipY;
                            size.width = closure_14.width * value2;
                            tmp3Result1 = tmp3(tmp4[18]);
                            obj10 = { height: null, containerHeight: null, showSecondaryPIP: null, scale: null };
                            ({
                              height: obj4.height,
                              containerHeight: obj4.containerHeight,
                              showSecondaryPIP: obj4.showSecondaryPIP,
                            } = closure_14);
                            obj10.scale = value2;
                            size.height = tmp3Result1.getScaledPIPContainerHeight(obj10);
                            tmp10 = windowDimensions;
                            size.windowDimensions = windowDimensions.get();
                            tmp11 = safeArea;
                            size.safeArea = safeArea.get();
                            tmp12 = pipAvoidanceSpecs;
                            size.bottomAvoidanceRegion = pipAvoidanceSpecs.get().bottom;
                            size.topAvoidanceRegion = pipAvoidanceSpecs.get().top;
                            clampedPIPPosition = getClampedPIPPosition(size);
                            obj11 = {
                              pressed: true,
                              active: true,
                              baseX: null,
                              baseY: null,
                              offsetX: 0,
                              offsetY: 0,
                              originX: null,
                              originY: null,
                              spread: null,
                            };
                            ({ x: obj5.baseX, y: obj5.baseY } = clampedPIPPosition);
                            ({ x: obj5.originX, y: obj5.originY } = point);
                            obj11.spread = tmp;
                            result3 = obj.set(obj11);
                            tmp15 = closure_1;
                            tmp16 = wrapperOffset;
                            tmp17 = closure_1(tmp4[19])(wrapperOffset, { gestureActive: true, x: 0, y: 0 });
                            activateResult = mainTileInLayout.activate();
                            tmp3Result2 = tmp3(tmp4[17]);
                            tmp19 = tmp3Result2.runOnJS(closure_1(tmp4[22]))();
                          }
                        }
                        return;
                      }
                    }
                    VoicePanelPIPTsx9.__closure = {
                      getTouchesCentroid: stateFromStores1,
                      getTouchesSpread,
                      gestureState: sharedValue,
                      MIN_PINCH_SPAN: 8,
                      pipState: size,
                      clampPIPScale: tmp(tmp2[18]).clampPIPScale,
                      windowDimensions,
                      safeArea,
                      pipAvoidanceSpecs,
                      State: tmp(tmp2[21]).State,
                      MIN_GESTURE_START: stateFromStores,
                      getClampedPIPPosition: tmp(tmp2[18]).getClampedPIPPosition,
                      wrapperDimensions,
                      getScaledPIPContainerHeight: tmp(tmp2[18]).getScaledPIPContainerHeight,
                      updateSharedValueIfChanged: require("updateSharedValueIfChanged"),
                      wrapperOffset,
                      runOnJS: tmp(tmp2[17]).runOnJS,
                      triggerIOSHaptic: require("triggerIOSHaptic"),
                    };
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
                    const obj14 = {
                      getTouchesCentroid: stateFromStores1,
                      getTouchesSpread,
                      gestureState: sharedValue,
                      MIN_PINCH_SPAN: 8,
                      pipState: size,
                      clampPIPScale: tmp(tmp2[18]).clampPIPScale,
                      windowDimensions,
                      safeArea,
                      pipAvoidanceSpecs,
                      State: tmp(tmp2[21]).State,
                      MIN_GESTURE_START: stateFromStores,
                      getClampedPIPPosition: tmp(tmp2[18]).getClampedPIPPosition,
                      wrapperDimensions,
                      getScaledPIPContainerHeight: tmp(tmp2[18]).getScaledPIPContainerHeight,
                      updateSharedValueIfChanged: require("updateSharedValueIfChanged"),
                      wrapperOffset,
                      runOnJS: tmp(tmp2[17]).runOnJS,
                      triggerIOSHaptic: require("triggerIOSHaptic"),
                    };
                  }
                }
              }
            }
          }
        }
      }
      const fn2 = function v(baseX, velocityX, velocityY) {
        let pipX;
        let pipY;
        const scale = size.scale;
        const value = scale.get();
        const result = size.width * value;
        const obj = VoicePanelPIPUtils;
        const obj2 = {
          height: size.height,
          containerHeight: size.containerHeight,
          showSecondaryPIP: size.showSecondaryPIP,
          scale: value,
        };
        const scaledPIPContainerHeight = obj.getScaledPIPContainerHeight(obj2);
        const obj3 = VoicePanelPIPUtils;
        const obj4 = {
          velocityX,
          velocityY,
          absoluteX: baseX.baseX + baseX.offsetX + result / 2,
          absoluteY: baseX.baseY + baseX.offsetY + scaledPIPContainerHeight / 2,
          windowDimensions: windowDimensions.get(),
          safeArea: safeArea.get(),
        };
        const result1 = obj3.calculatePIPPositionFromVelocity(obj4);
        ({ pipX, pipY } = result1);
        updateSharedValueIfChangedDefault(wrapperDimensions, { pipX, pipY });
      };
      tmp13[0] = size;
      tmp13[1] = tmp(tmp2[18]).getScaledPIPContainerHeight;
      tmp13[2] = tmp(tmp2[18]).calculatePIPPositionFromVelocity;
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
    }
  : (pipMode, mainTileInLayout, mainTileVisible) => {
      let MIN_GESTURE_START;
      let controlsSpecs;
      let hideControls;
      let items7;
      _require = pipMode;
      importDefault = mainTileInLayout;
      let closure_2 = mainTileVisible;
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
      let obj = require("VoicePanelPIPStateContext");
      const pIPState = obj.usePIPState();
      let obj2 = require("ReanimatedRexport");
      const sharedValue = obj2.useSharedValue(INACTIVE_GESTURE_STATE);
      let obj3 = require("ReanimatedRexport");
      const sharedValue1 = obj3.useSharedValue(0);
      let items = [sharedValue1];
      const effect = hideControls.useEffect(() => {
        let closure_0;
        const timeout = setTimeout(() => {
          const result = sharedValue1.set(1);
        }, 200);
        return () => {
          clearTimeout(closure_0);
        };
      }, items);
      class N {
        constructor(baseX, velocityX, velocityY) {
          let pipX;
          let pipY;
          const scale = pIPState.scale;
          const value = scale.get();
          const result = pIPState.width * value;
          const obj = VoicePanelPIPUtils;
          const obj2 = {
            height: pIPState.height,
            containerHeight: pIPState.containerHeight,
            showSecondaryPIP: pIPState.showSecondaryPIP,
            scale: value,
          };
          const scaledPIPContainerHeight = obj.getScaledPIPContainerHeight(obj2);
          const obj3 = VoicePanelPIPUtils;
          const obj4 = {
            velocityX,
            velocityY,
            absoluteX: baseX.baseX + baseX.offsetX + result / 2,
            absoluteY: baseX.baseY + baseX.offsetY + scaledPIPContainerHeight / 2,
            windowDimensions: windowDimensions.get(),
            safeArea: safeArea.get(),
          };
          const result1 = obj3.calculatePIPPositionFromVelocity(obj4);
          ({ pipX, pipY } = result1);
          updateSharedValueIfChangedDefault(wrapperDimensions, { pipX, pipY });
        }
      }
      let obj4 = {
        pipState: pIPState,
        getScaledPIPContainerHeight: require("VoicePanelPIPUtils").getScaledPIPContainerHeight,
        calculatePIPPositionFromVelocity: require("VoicePanelPIPUtils").calculatePIPPositionFromVelocity,
        windowDimensions,
        safeArea,
        updateSharedValueIfChanged: require("updateSharedValueIfChanged"),
        wrapperDimensions,
      };
      N.__closure = obj4;
      N.__workletHash = 16471847123975;
      N.__initData = __initData11;
      const items1 = [, , , , , , ,];
      ({
        containerHeight: arr2[0],
        height: arr2[1],
        scale: arr2[2],
        showSecondaryPIP: arr2[3],
        width: arr2[4],
      } = pIPState);
      items1[5] = safeArea;
      items1[6] = windowDimensions;
      items1[7] = wrapperDimensions;
      const settlePIPPosition = hideControls.useCallback(N, items1);
      let obj5 = require("ReanimatedRexport");
      class L {
        constructor() {
          let PIP_LAYOUT_PHYSICS;
          let items;
          let scale2;
          let showSecondaryPIP;
          let tmp3Result4;
          let tmp3Result5;
          let tmp3Result6;
          let x;
          let y;
          const scale = pIPState.scale;
          const result = pIPState.width * scale.get();
          const obj = {
            height: pIPState.height,
            containerHeight: pIPState.containerHeight,
            showSecondaryPIP,
            scale: scale2.get(),
          };
          showSecondaryPIP = pIPState.showSecondaryPIP;
          const getScaledPIPContainerHeight = VoicePanelPIPUtils.getScaledPIPContainerHeight;
          VoicePanelPIPUtils;
          if (showSecondaryPIP) {
            showSecondaryPIP = mainTileInLayout;
          }
          scale2 = pIPState.scale;
          const scaledPIPContainerHeight = getScaledPIPContainerHeight(obj);
          const value = sharedValue.get();
          if (value.active) {
            x = value.baseX + value.offsetX;
            y = value.baseY + value.offsetY;
          } else {
            size = {
              pipX: wrapperDimensions.get().pipX,
              pipY: wrapperDimensions.get().pipY,
              width: result,
              height: scaledPIPContainerHeight,
              windowDimensions: windowDimensions.get(),
              safeArea: safeArea.get(),
              bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom,
              topAvoidanceRegion: pipAvoidanceSpecs.get().top,
            };
            const getClampedPIPPosition = VoicePanelPIPUtils.getClampedPIPPosition;
            VoicePanelPIPUtils;
            const clampedPIPPosition = getClampedPIPPosition(size);
            ({ x, y } = clampedPIPPosition);
          }
          if (value.active) {
            PIP_LAYOUT_PHYSICS = React4;
          } else {
            PIP_LAYOUT_PHYSICS = VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS;
          }
          const size1 = {
            width: result,
            height: scaledPIPContainerHeight,
            opacity: sharedValue1.get(),
            transform: items,
            borderRadius: tmp3Result6.getVoicePanelPIPBorderRadius(result, scaledPIPContainerHeight),
          };
          const obj2 = { translateX: tmp3Result4.withSpring(x, PIP_LAYOUT_PHYSICS) };
          items = [obj2];
          tmp3Result4 = spring;
          const obj3 = { translateY: tmp3Result5.withSpring(y, PIP_LAYOUT_PHYSICS) };
          items[1] = obj3;
          tmp3Result5 = spring;
          tmp3Result6 = VoicePanelPIPUtils;
          return size1;
        }
      }
      let obj6 = {
        pipState: pIPState,
        getScaledPIPContainerHeight: require("VoicePanelPIPUtils").getScaledPIPContainerHeight,
        mainTileInLayout,
        gestureState: sharedValue,
        getClampedPIPPosition: require("VoicePanelPIPUtils").getClampedPIPPosition,
        wrapperDimensions,
        windowDimensions,
        safeArea,
        pipAvoidanceSpecs,
        DRAWER_SPRING_PHYSICS: showControls,
        PIP_LAYOUT_PHYSICS: require("VoicePanelPIPUtils").PIP_LAYOUT_PHYSICS,
        opacity: sharedValue1,
        withSpring: require("spring").withSpring,
        getVoicePanelPIPBorderRadius: require("VoicePanelPIPUtils").getVoicePanelPIPBorderRadius,
      };
      L.__closure = obj6;
      L.__workletHash = 3627050442173;
      L.__initData = __initData12;
      const animatedStyle = obj5.useAnimatedStyle(L);
      const obj7 = require("ReanimatedRexport");
      class G {
        constructor() {
          let height;
          let obj2;
          let scale;
          let width;
          ({ width, height, scale } = pIPState);
          size = {
            width: width * scale.get(),
            height: height * scale.get(),
            borderRadius: obj2.getVoicePanelPIPBorderRadius(width, height),
          };
          obj2 = VoicePanelPIPUtils;
          return size;
        }
      }
      const obj8 = {
        pipState: pIPState,
        getVoicePanelPIPBorderRadius: require("VoicePanelPIPUtils").getVoicePanelPIPBorderRadius,
      };
      G.__closure = obj8;
      G.__workletHash = 1161486785503;
      G.__initData = __initData13;
      const animatedStyle1 = obj7.useAnimatedStyle(G);
      const obj9 = require("ReanimatedRexport");
      class U {
        constructor() {
          let opacity = 0;
          if (mainTileVisible) {
            opacity = 1;
          }
          return { opacity };
        }
      }
      U.__closure = { mainTileVisible };
      U.__workletHash = 3160173154641;
      U.__initData = __initData14;
      const items2 = [sharedValue, pipAvoidanceSpecs, , , , , , , , , ,];
      ({
        containerHeight: arr3[2],
        height: arr3[3],
        scale: arr3[4],
        showSecondaryPIP: arr3[5],
        width: arr3[6],
      } = pIPState);
      items2[7] = safeArea;
      items2[8] = settlePIPPosition;
      items2[9] = windowDimensions;
      items2[10] = wrapperDimensions;
      items2[11] = wrapperOffset;
      const animatedStyle2 = obj9.useAnimatedStyle(U);
      const items3 = [controlsSpecs, hideControls, setFocused, showControls, pipMode, setMode];
      const memo = hideControls.useMemo(() => {
        let styles;
        const Gesture = LegacyBaseButton.Gesture;
        const PanResult = Gesture.Pan();
        const manualActivationResult = PanResult.manualActivation(true);
        let result = manualActivationResult.shouldCancelWhenOutside(false);
        const fn = function c(allTouches) {
          const tmp = stateFromStores1(allTouches.allTouches);
          const tmp2 = callback1(allTouches.allTouches, tmp);
          if (sharedValue.get().pressed) {
            const obj3 = { originX: null, originY: null, spread: tmp2 };
            ({ x: obj2.originX, y: obj2.originY } = tmp);
            mainTileInLayout(controlsSpecs[19])(sharedValue, obj3);
          } else {
            const obj = { pressed: true, spread: tmp2 };
            set = sharedValue.set;
            const merged = Object.assign(INACTIVE_GESTURE_STATE);
            ({ x: obj.originX, y: obj.originY } = tmp);
            const result = set(obj);
          }
        };
        let obj = {
          getTouchesCentroid,
          getTouchesSpread,
          gestureState: sharedValue,
          INACTIVE_GESTURE_STATE,
          updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
        };
        fn.__closure = obj;
        fn.__workletHash = 3048774433878;
        fn.__initData = __initData5;
        const fn2 = function s(allTouches) {
          let closure_0 = allTouches;
          allTouches = allTouches.allTouches;
          const found = allTouches.filter((item) => {
            changedTouches = item;
            changedTouches = changedTouches.changedTouches;
            return !changedTouches.some((id) => id.id === id.id);
          });
          if (0 !== found.length) {
            const tmp6 = stateFromStores1(found);
            const obj = { originX: null, originY: null, spread: callback1(found, tmp6) };
            ({ x: obj.originX, y: obj.originY } = tmp6);
            const tmp9 = mainTileInLayout(controlsSpecs[19]);
            tmp9(sharedValue, obj);
          } else {
            mainTileInLayout(controlsSpecs[19])(sharedValue, { pressed: false });
          }
        };
        const onTouchesDownResult = result.onTouchesDown(fn);
        let obj2 = {
          updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
          gestureState: sharedValue,
          getTouchesCentroid,
          getTouchesSpread,
        };
        fn2.__closure = obj2;
        fn2.__workletHash = 11105299053730;
        fn2.__initData = __initData4;
        const fn3 = function o(allTouches, activate) {
          let obj6;
          let tmp3Result3;
          const point = stateFromStores1(allTouches.allTouches);
          const tmp = callback1(allTouches.allTouches, point);
          const value = sharedValue.get();
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
                const value3 = scale3.get();
                ({
                  width: obj8.width,
                  containerHeight: obj8.containerHeight,
                  showSecondaryPIP: obj8.showSecondaryPIP,
                } = styles);
                const obj2 = {
                  scale: value3 * (tmp / value.spread),
                  width: null,
                  containerHeight: null,
                  showSecondaryPIP: null,
                  windowDimensions: windowDimensions.get(),
                  safeArea: safeArea.get(),
                  pipAvoidanceSpecs: pipAvoidanceSpecs.get(),
                };
                const clampPIPScale = pipMode(controlsSpecs[18]).clampPIPScale;
                pipMode(controlsSpecs[18]);
                const clampPIPScaleResult = clampPIPScale(obj2);
                sum1 = diff1;
                sum = diff;
                if (clampPIPScaleResult !== value3) {
                  const scale2 = styles.scale;
                  const result = scale2.set(clampPIPScaleResult);
                  const result1 = clampPIPScaleResult / value3;
                  sum = diff + (point.x - (value.baseX + diff)) * (1 - result1);
                  sum1 = diff1 + (point.y - (value.baseY + diff1)) * (1 - result1);
                }
              }
            }
            const obj3 = {
              pressed: null,
              active: true,
              baseX: null,
              baseY: null,
              offsetX: sum,
              offsetY: sum1,
              originX: null,
              originY: null,
              spread: tmp,
            };
            ({ pressed: obj7.pressed, baseX: obj7.baseX, baseY: obj7.baseY } = value);
            ({ x: obj7.originX, y: obj7.originY } = point);
            const result2 = sharedValue.set(obj3);
          } else if (allTouches.state === pipMode(controlsSpecs[21]).State.BEGAN) {
            const _Math3 = Math;
            if (Math.abs(value.originX - point.x) <= stateFromStores) {
              const _Math = Math;
              if (Math.abs(value.originY - point.y) <= stateFromStores) {
                const _Math2 = Math;
              }
            }
            const scale = styles.scale;
            const value4 = scale.get();
            size = {
              pipX: wrapperDimensions.get().pipX,
              pipY: wrapperDimensions.get().pipY,
              width: styles.width * value4,
              height: tmp3Result3.getScaledPIPContainerHeight(obj6),
              windowDimensions: windowDimensions.get(),
              safeArea: safeArea.get(),
              bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom,
              topAvoidanceRegion: pipAvoidanceSpecs.get().top,
            };
            const getClampedPIPPosition = pipMode(controlsSpecs[18]).getClampedPIPPosition;
            pipMode(controlsSpecs[18]);
            obj6 = { height: null, containerHeight: null, showSecondaryPIP: null, scale: value4 };
            ({
              height: obj4.height,
              containerHeight: obj4.containerHeight,
              showSecondaryPIP: obj4.showSecondaryPIP,
            } = styles);
            tmp3Result3 = pipMode(controlsSpecs[18]);
            const clampedPIPPosition = getClampedPIPPosition(size);
            const obj12 = {
              pressed: true,
              active: true,
              baseX: null,
              baseY: null,
              offsetX: 0,
              offsetY: 0,
              originX: null,
              originY: null,
              spread: tmp,
            };
            ({ x: obj5.baseX, y: obj5.baseY } = clampedPIPPosition);
            ({ x: obj5.originX, y: obj5.originY } = point);
            const result3 = sharedValue.set(obj12);
            mainTileInLayout(controlsSpecs[19])(wrapperOffset, { gestureActive: true, x: 0, y: 0 });
            activate.activate();
            const tmp3Result4 = pipMode(controlsSpecs[17]);
            tmp3Result4.runOnJS(mainTileInLayout(controlsSpecs[22]))();
          }
        };
        const onTouchesUpResult = onTouchesDownResult.onTouchesUp(fn2);
        let obj3 = {
          getTouchesCentroid,
          getTouchesSpread,
          gestureState: sharedValue,
          MIN_PINCH_SPAN: 8,
          pipState: pIPState,
          clampPIPScale: VoicePanelPIPUtils.clampPIPScale,
          windowDimensions,
          safeArea,
          pipAvoidanceSpecs,
          State: LegacyBaseButton.State,
          MIN_GESTURE_START,
          getClampedPIPPosition: VoicePanelPIPUtils.getClampedPIPPosition,
          wrapperDimensions,
          getScaledPIPContainerHeight: VoicePanelPIPUtils.getScaledPIPContainerHeight,
          updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
          wrapperOffset,
          runOnJS: ReanimatedRexport.runOnJS,
          triggerIOSHaptic: triggerIOSHapticDefault,
        };
        fn3.__closure = obj3;
        fn3.__workletHash = 241124621053;
        fn3.__initData = __initData3;
        const fn4 = function n(arg0) {
          let velocityX;
          let velocityY;
          ({ velocityX, velocityY } = arg0);
          settlePIPPosition(sharedValue.get(), velocityX, velocityY);
          mainTileInLayout(controlsSpecs[19])(wrapperOffset, { gestureActive: false });
          const result = sharedValue.set(INACTIVE_GESTURE_STATE);
          const obj = pipMode(controlsSpecs[17]);
          obj.runOnJS(mainTileInLayout(controlsSpecs[23]).updateSourceTrackingView)();
          const scale = styles.scale;
          const obj2 = pipMode(controlsSpecs[17]);
          const runOnJSResult = obj2.runOnJS(pipMode(controlsSpecs[24]).setVoicePanelPIPScaleCached);
          runOnJSResult(scale.get());
        };
        const onTouchesMoveResult = onTouchesUpResult.onTouchesMove(fn3);
        const obj4 = {
          gestureState: sharedValue,
          settlePIPPosition,
          updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
          wrapperOffset,
          INACTIVE_GESTURE_STATE,
          runOnJS: ReanimatedRexport.runOnJS,
          updateSourceTrackingView: ExternalPipDefault.updateSourceTrackingView,
          setVoicePanelPIPScaleCached: VoicePanelPIPScaleCache.setVoicePanelPIPScaleCached,
          pipState: pIPState,
        };
        fn4.__closure = obj4;
        fn4.__workletHash = 6209651549157;
        fn4.__initData = __initData2;
        const fn5 = function t() {
          mainTileInLayout(controlsSpecs[19])(wrapperOffset, { gestureActive: false });
          const result = sharedValue.set(INACTIVE_GESTURE_STATE);
        };
        const onEndResult = onTouchesMoveResult.onEnd(fn4);
        const obj5 = {
          updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
          wrapperOffset,
          gestureState: sharedValue,
          INACTIVE_GESTURE_STATE,
        };
        fn5.__closure = obj5;
        fn5.__workletHash = 8841358740326;
        fn5.__initData = __initData;
        return onEndResult.onFinalize(fn5);
      }, items2);
      const memo1 = hideControls.useMemo(() => {
        const Gesture = LegacyBaseButton.Gesture;
        const Exclusive = Gesture.Exclusive;
        const Gesture2 = LegacyBaseButton.Gesture;
        const TapResult = Gesture2.Tap();
        const fn = function o() {
          const obj = pipMode(controlsSpecs[17]);
          obj.runOnJS(setFocused)(null);
        };
        const enabledResult = TapResult.enabled(pipMode !== VoicePanelPIPModes.IN_APP);
        const maxDistanceResult = enabledResult.maxDistance(30);
        let obj = { runOnJS: ReanimatedRexport.runOnJS, setFocused };
        fn.__closure = obj;
        fn.__workletHash = 5813066167138;
        fn.__initData = __initData6;
        const onStartResult = maxDistanceResult.onStart(fn);
        const numberOfTapsResult = onStartResult.numberOfTaps(2);
        const Gesture3 = LegacyBaseButton.Gesture;
        const TapResult1 = Gesture3.Tap();
        const fn2 = function t() {
          if (closure_1_0 === wrapperOffset.IN_APP) {
            const obj3 = closure_0(controlsSpecs[17]);
            obj3.runOnJS(setMode)(windowDimensions.PANEL);
          } else if (closure_1_3.get().mode === wrapperDimensions.HIDDEN) {
            const obj2 = closure_0(controlsSpecs[17]);
            obj2.runOnJS(showControls)();
          } else {
            const obj = closure_0(controlsSpecs[17]);
            obj.runOnJS(hideControls)();
          }
        };
        const enabledResult1 = TapResult1.enabled(true);
        const maxDistanceResult1 = enabledResult1.maxDistance(30);
        let obj2 = {
          pipMode,
          VoicePanelPIPModes,
          runOnJS: ReanimatedRexport.runOnJS,
          setMode,
          VoicePanelModes,
          controlsSpecs,
          VoicePanelControlsModes,
          showControls,
          hideControls,
        };
        fn2.__closure = obj2;
        fn2.__workletHash = 4146838383979;
        fn2.__initData = __initData7;
        return Exclusive(numberOfTapsResult, maxDistanceResult1.onStart(fn2));
      }, items3);
      const items4 = [safeArea];
      const obj10 = require("get initialized");
      const stateFromStores = obj10.useStateFromStores(items4, () => {
        const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
        let _location;
        const getEmbeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId;
        embeddedActivityLocationUtils;
        if (currentEmbeddedActivity != null) {
          _location = currentEmbeddedActivity.location;
        }
        return getEmbeddedActivityLocationChannelId(_location) !== channelId;
      });
      const items5 = [setFocused];
      const obj11 = require("get initialized");
      const stateFromStores1 = obj11.useStateFromStores(items5, () => {
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
          const obj2 = FramesActionCreatorsDefault;
          obj2.updateFramePanelMode(tmp8, ActivityPanelModes.PANEL);
        } else {
          const obj = EmbeddedActivitiesActionCreatorsAll;
          const result = obj.updateActivityPanelMode(ActivityPanelModes.PANEL);
        }
      }, items6);
      let obj12 = {
        containerGesture: memo,
        containerStyles: animatedStyle,
        pipWrapperStyles: animatedStyle1,
        mainPIPVisibilityStyles: animatedStyle2,
        mainPIPGesture: memo1,
        secondaryPIPGesture: hideControls.useMemo(() => {
          const Gesture = LegacyBaseButton.Gesture;
          const fn = function t() {
            const obj = pipMode(controlsSpecs[17]);
            obj.runOnJS(callback1)();
          };
          const TapResult = Gesture.Tap();
          const maxDistanceResult = TapResult.maxDistance(30);
          let obj = { runOnJS: ReanimatedRexport.runOnJS, handleSecondaryPIPTap: callback1 };
          fn.__closure = obj;
          fn.__workletHash = 5953597171323;
          fn.__initData = __initData8;
          return maxDistanceResult.onStart(fn);
        }, items7),
        gestureState: sharedValue,
      };
      items7 = [callback1];
      return obj12;
    };
const __initData15 = {
  code: "function VoicePanelPIPTsx27(){const{getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}",
};
const __initData16 = {
  code: "function VoicePanelPIPTsx28(){const{pipState}=this.__closure;return{height:pipState.height*pipState.scale.get()};}",
};
const __initData17 = {
  code: "function VoicePanelPIPTsx29(values){const{gestureState,withSpring,PIP_LAYOUT_PHYSICS}=this.__closure;const active=gestureState.get().active;return{animations:{originX:withSpring(values.targetOriginX,PIP_LAYOUT_PHYSICS),originY:withSpring(values.targetOriginY,PIP_LAYOUT_PHYSICS),width:active?values.targetWidth:withSpring(values.targetWidth,PIP_LAYOUT_PHYSICS),height:active?values.targetHeight:withSpring(values.targetHeight,PIP_LAYOUT_PHYSICS)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}",
};
const __initData18 = {
  code: "function VoicePanelPIPTsx30(){const{getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}",
};
const __initData19 = {
  code: "function VoicePanelPIPTsx31(){const{pipState}=this.__closure;return{height:pipState.height*pipState.scale.get()};}",
};
const __initData20 = {
  code: "function VoicePanelPIPTsx32(values){const{gestureState,withSpring,PIP_LAYOUT_PHYSICS}=this.__closure;const active=gestureState.get().active;return{animations:{originX:withSpring(values.targetOriginX,PIP_LAYOUT_PHYSICS),originY:withSpring(values.targetOriginY,PIP_LAYOUT_PHYSICS),width:active?values.targetWidth:withSpring(values.targetWidth,PIP_LAYOUT_PHYSICS),height:active?values.targetHeight:withSpring(values.targetHeight,PIP_LAYOUT_PHYSICS)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_54 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let containerGesture;
      let containerStyles;
      let first;
      let gestureState;
      let mainPIPGesture;
      let mainPIPVisibilityStyles;
      let pIPState;
      let pipWrapperStyles;
      let secondaryPIPGesture;
      let setMode;
      let stateFromStores;
      let tmp16;
      let tmp17;
      let tmp18;
      let tmp19;
      let tmp22;
      let tmp23;
      let tmp25;
      let tmp26;
      let tmp32;
      const tmp = setMode;
      let obj = setMode(stateFromStores[13]);
      const cResult = obj.c(57);
      const tmp4 = closure_17();
      const context = react.useContext(pIPState(stateFromStores[14]));
      setMode = context.setMode;
      const controlsSpecs = context.controlsSpecs;
      let obj2 = setMode(stateFromStores[15]);
      pIPState = obj2.usePIPState();
      const tmp8 = closure_21();
      const isMainPIPActive = tmp8.isMainPIPActive;
      let tmp9 = isMainPIPActive;
      const cardArrivedInPIP = tmp8.cardArrivedInPIP;
      if (!isMainPIPActive) {
        tmp9 = !tmp8.panelLayoutCommitted;
      }
      let tmp10 = tmp9;
      if (tmp10) {
        let tmp11 = !isMainPIPActive;
        if (isMainPIPActive) {
          tmp11 = cardArrivedInPIP;
        }
        tmp10 = tmp11;
      }
      ({
        containerStyles,
        pipWrapperStyles,
        mainPIPVisibilityStyles,
        mainPIPGesture,
        secondaryPIPGesture,
        containerGesture,
        gestureState,
      } = closure_47(pIPState.mode, tmp9, tmp10));
      closure_47(pIPState.mode, tmp9, tmp10);
      let pushToTalk = tmp5(tmp2[29])(controlsSpecs).pushToTalk;
      let tmpResult = tmp(tmp2[17]);
      const fn = function n() {
        let obj2;
        const obj = { borderRadius: obj2.getVoicePanelPIPBorderRadius(pIPState.width, pIPState.height) };
        obj2 = VoicePanelPIPUtils;
        return obj;
      };
      let obj3 = { getVoicePanelPIPBorderRadius: tmp(tmp2[18]).getVoicePanelPIPBorderRadius, pipState: pIPState };
      fn.__closure = obj3;
      fn.__workletHash = 11513358722322;
      fn.__initData = __initData15;
      const animatedStyle = tmpResult.useAnimatedStyle(fn);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[30]).intl;
        const stringResult = intl.string(tmp(stateFromStores[30]).t.oN8bqe);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [{ name: "activate" }];
        cResult[1] = items;
        tmp16 = items;
      } else {
        tmp16 = cResult[1];
      }
      if (cResult[2] !== setMode) {
        const obj4 = {
          accessible: true,
          accessibilityLabel: first,
          accessibilityRole: "button",
          accessibilityActions: tmp16,
          onAccessibilityAction() {
            setMode(constants.PANEL);
          },
        };
        cResult[2] = setMode;
        cResult[3] = obj4;
        tmp17 = obj4;
      } else {
        tmp17 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [FramesStore];
        class B {
          constructor() {
            mainFrame = mainFrame.getMainFrame();
            let id = null;
            if (isLaunched(mainFrame)) {
              id = mainFrame.id;
            }
            return id;
          }
        }
        cResult[4] = items1;
        cResult[5] = B;
        tmp19 = B;
        tmp18 = items1;
      } else {
        tmp18 = cResult[4];
        tmp19 = cResult[5];
      }
      const tmpResult3 = tmp(stateFromStores[26]);
      stateFromStores = tmpResult3.useStateFromStores(tmp18, tmp19);
      if (cResult[6] !== stateFromStores) {
        const fn2 = function q() {
          if (null != stateFromStores) {
            const obj2 = FramesActionCreatorsDefault;
            obj2.updateFramePanelMode(tmp, ActivityPanelModes.PANEL);
          } else {
            const obj = EmbeddedActivitiesActionCreatorsAll;
            const result = obj.updateActivityPanelMode(ActivityPanelModes.PANEL);
          }
        };
        cResult[6] = stateFromStores;
        class B {
          constructor() {
            mainFrame = mainFrame.getMainFrame();
            let id = null;
            if (isLaunched(mainFrame)) {
              id = mainFrame.id;
            }
            return id;
          }
        }
        cResult[7] = fn2;
        tmp22 = fn2;
      } else {
        tmp22 = cResult[7];
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(tmp2[30]).intl;
        const stringResult1 = intl2.string(tmp(stateFromStores[30]).t["3ejJer"]);
        class B {
          constructor() {
            mainFrame = mainFrame.getMainFrame();
            let id = null;
            if (isLaunched(mainFrame)) {
              id = mainFrame.id;
            }
            return id;
          }
        }
        cResult[8] = stringResult1;
        tmp23 = stringResult1;
      } else {
        tmp23 = cResult[8];
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [{ name: "activate" }];
        class B {
          constructor() {
            mainFrame = mainFrame.getMainFrame();
            let id = null;
            if (isLaunched(mainFrame)) {
              id = mainFrame.id;
            }
            return id;
          }
        }
        tmp25 = items2;
      } else {
        tmp25 = cResult[9];
      }
      if (cResult[10] !== tmp22) {
        const obj5 = {
          accessible: true,
          accessibilityLabel: tmp23,
          accessibilityActions: tmp25,
          onAccessibilityAction: null,
        };
        class B {
          constructor() {
            mainFrame = mainFrame.getMainFrame();
            let id = null;
            if (isLaunched(mainFrame)) {
              id = mainFrame.id;
            }
            return id;
          }
        }
        cResult[10] = tmp22;
        cResult[11] = obj5;
        tmp26 = obj5;
      } else {
        tmp26 = cResult[11];
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        function ee(isActivityFocused) {
          return isActivityFocused.isActivityFocused;
        }
        cResult[12] = ee;
        class B {
          constructor() {
            mainFrame = mainFrame.getMainFrame();
            let id = null;
            if (isLaunched(mainFrame)) {
              id = mainFrame.id;
            }
            return id;
          }
        }
      }
      if (pushToTalk) {
        pushToTalk = pIPState.mode !== VoicePanelPIPModes.IN_PANEL || tmp28;
      }
      function se() {
        let height;
        let scale;
        const obj = { height: height * scale.get() };
        ({ scale, height } = pIPState);
        return obj;
      }
      se.__closure = { pipState: pIPState };
      se.__workletHash = 1240252027546;
      se.__initData = __initData16;
      const tmpResult4 = tmp(stateFromStores[17]);
      const animatedStyle1 = tmpResult4.useAnimatedStyle(se);
      if (cResult[13] !== gestureState) {
        function ce(originX) {
          let obj2;
          let obj3;
          let targetHeight;
          let targetWidth;
          const active = gestureState.get().active;
          size = {
            originX: obj2.withSpring(originX.targetOriginX, VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS),
            originY: obj3.withSpring(originX.targetOriginY, VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS),
            width: targetWidth,
            height: targetHeight,
          };
          obj2 = spring;
          obj3 = spring;
          if (active) {
            targetWidth = originX.targetWidth;
          } else {
            const tmpResult = spring;
            targetWidth = tmpResult.withSpring(originX.targetWidth, VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS);
          }
          if (active) {
            targetHeight = originX.targetHeight;
          } else {
            const tmpResult2 = spring;
            targetHeight = tmpResult2.withSpring(originX.targetHeight, VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS);
          }
          return {
            animations: size,
            initialValues: {
              originX: originX.currentOriginX,
              originY: originX.currentOriginY,
              width: originX.currentWidth,
              height: originX.currentHeight,
            },
          };
        }
        const obj6 = {
          gestureState,
          withSpring: null,
          PIP_LAYOUT_PHYSICS: tmp(stateFromStores[18]).PIP_LAYOUT_PHYSICS,
        };
        class B {
          constructor() {
            mainFrame = mainFrame.getMainFrame();
            let id = null;
            if (isLaunched(mainFrame)) {
              id = mainFrame.id;
            }
            return id;
          }
        }
        ce.__closure = obj6;
        ce.__workletHash = 1123687809573;
        ce.__initData = __initData17;
        cResult[13] = gestureState;
        cResult[14] = ce;
        tmp32 = ce;
      } else {
        tmp32 = cResult[14];
      }
      if (cResult[15] === containerStyles) {
        let tmp34;
        if (cResult[16] === tmp4.container) {
          tmp34 = cResult[17];
        }
        if (cResult[18] === tmp32) {
          if (cResult[19] === tmp17) {
            if (cResult[20] === mainPIPGesture) {
              if (cResult[21] === mainPIPVisibilityStyles) {
                if (cResult[22] === tmp9) {
                  if (cResult[23] === animatedStyle) {
                    if (cResult[24] === pipWrapperStyles) {
                      if (cResult[25] === tmp4.inAppElevationShadow) {
                        if (cResult[26] === tmp4.pipContentWrapper) {
                          let tmp35;
                          if (cResult[27] === tmp4.pipMask) {
                            tmp35 = cResult[28];
                          }
                          if (cResult[29] === animatedStyle) {
                            if (cResult[30] === pIPState.showSecondaryPIP) {
                              if (cResult[31] === pipWrapperStyles) {
                                if (cResult[32] === tmp26) {
                                  if (cResult[33] === secondaryPIPGesture) {
                                    if (cResult[34] === tmp4.inAppElevationShadow) {
                                      if (cResult[35] === tmp4.pipContentWrapper) {
                                        let tmp37;
                                        if (cResult[36] === tmp4.pipMask) {
                                          tmp37 = cResult[37];
                                        }
                                        if (cResult[38] === tmp32) {
                                          if (cResult[39] === tmp4.multiPipContainer) {
                                            if (cResult[40] === tmp35) {
                                              let tmp39;
                                              if (cResult[41] === tmp37) {
                                                tmp39 = cResult[42];
                                              }
                                              if (cResult[43] === containerGesture) {
                                                let tmp43;
                                                if (cResult[44] === tmp39) {
                                                  tmp43 = cResult[45];
                                                }
                                                if (cResult[46] === tmp32) {
                                                  if (cResult[47] === animatedStyle1) {
                                                    if (cResult[48] === tmp10) {
                                                      if (cResult[49] === pushToTalk) {
                                                        let tmp47;
                                                        if (cResult[50] === tmp4.pushToTalkContainer) {
                                                          tmp47 = cResult[51];
                                                        }
                                                        if (cResult[52] === tmp32) {
                                                          if (cResult[53] === tmp34) {
                                                            if (cResult[54] === tmp43) {
                                                              let tmp49;
                                                              if (cResult[55] === tmp47) {
                                                                tmp49 = cResult[56];
                                                              }
                                                              return tmp49;
                                                            }
                                                          }
                                                        }
                                                        class B {
                                                          constructor() {
                                                            mainFrame = mainFrame.getMainFrame();
                                                            let id = null;
                                                            if (isLaunched(mainFrame)) {
                                                              id = mainFrame.id;
                                                            }
                                                            return id;
                                                          }
                                                        }
                                                        tmp51[1] = tmp34;
                                                        tmp51[2] = tmp32;
                                                        const items3 = [tmp43, tmp47];
                                                        tmp51[3] = items3;
                                                        const tmp52 = closure_16(pIPState(stateFromStores[31]), tmp51);
                                                        cResult[52] = tmp32;
                                                        cResult[53] = tmp34;
                                                        cResult[54] = tmp43;
                                                        cResult[55] = tmp47;
                                                        cResult[56] = tmp52;
                                                        tmp49 = tmp52;
                                                      }
                                                    }
                                                  }
                                                }
                                                class B {
                                                  constructor() {
                                                    mainFrame = mainFrame.getMainFrame();
                                                    let id = null;
                                                    if (isLaunched(mainFrame)) {
                                                      id = mainFrame.id;
                                                    }
                                                    return id;
                                                  }
                                                }
                                                cResult[46] = tmp32;
                                                cResult[47] = animatedStyle1;
                                                cResult[48] = tmp10;
                                                cResult[49] = pushToTalk;
                                                cResult[50] = tmp4.pushToTalkContainer;
                                                cResult[51] = null;
                                                tmp47 = tmp48;
                                              }
                                              class B {
                                                constructor() {
                                                  mainFrame = mainFrame.getMainFrame();
                                                  let id = null;
                                                  if (isLaunched(mainFrame)) {
                                                    id = mainFrame.id;
                                                  }
                                                  return id;
                                                }
                                              }
                                              tmp45[0] = containerGesture;
                                              tmp45[1] = tmp39;
                                              const tmp46 = closure_15(tmp(stateFromStores[21]).GestureDetector, tmp45);
                                              cResult[43] = containerGesture;
                                              cResult[44] = tmp39;
                                              cResult[45] = tmp46;
                                              tmp43 = tmp46;
                                            }
                                          }
                                        }
                                        class B {
                                          constructor() {
                                            mainFrame = mainFrame.getMainFrame();
                                            let id = null;
                                            if (isLaunched(mainFrame)) {
                                              id = mainFrame.id;
                                            }
                                            return id;
                                          }
                                        }
                                        tmp41[1] = tmp4.multiPipContainer;
                                        tmp41[2] = tmp32;
                                        const items4 = [tmp35, tmp37];
                                        tmp41[3] = items4;
                                        const tmp42 = closure_16(pIPState(stateFromStores[31]), tmp41);
                                        cResult[38] = tmp32;
                                        cResult[39] = tmp4.multiPipContainer;
                                        cResult[40] = tmp35;
                                        cResult[41] = tmp37;
                                        cResult[42] = tmp42;
                                        tmp39 = tmp42;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          class B {
                            constructor() {
                              mainFrame = mainFrame.getMainFrame();
                              let id = null;
                              if (isLaunched(mainFrame)) {
                                id = mainFrame.id;
                              }
                              return id;
                            }
                          }
                          cResult[29] = animatedStyle;
                          cResult[30] = pIPState.showSecondaryPIP;
                          cResult[31] = pipWrapperStyles;
                          cResult[32] = tmp26;
                          cResult[33] = secondaryPIPGesture;
                          cResult[34] = tmp4.inAppElevationShadow;
                          cResult[35] = tmp4.pipContentWrapper;
                          cResult[36] = tmp4.pipMask;
                          cResult[37] = null;
                          tmp37 = tmp38;
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
            mainFrame = mainFrame.getMainFrame();
            let id = null;
            if (isLaunched(mainFrame)) {
              id = mainFrame.id;
            }
            return id;
          }
        }
        cResult[18] = tmp32;
        cResult[19] = tmp17;
        cResult[20] = mainPIPGesture;
        cResult[21] = mainPIPVisibilityStyles;
        cResult[22] = tmp9;
        cResult[23] = animatedStyle;
        cResult[24] = pipWrapperStyles;
        cResult[25] = tmp4.inAppElevationShadow;
        cResult[26] = tmp4.pipContentWrapper;
        cResult[27] = tmp4.pipMask;
        cResult[28] = null;
        tmp35 = tmp36;
      }
      const items5 = [tmp4.container, containerStyles];
      cResult[15] = containerStyles;
      cResult[16] = tmp4.container;
      cResult[17] = items5;
      tmp34 = items5;
    }
  : () => {
      let GestureDetector2;
      let GestureDetector3;
      let containerGesture;
      let containerStyles;
      let gestureState;
      let items10;
      let items11;
      let items12;
      let items5;
      let items6;
      let items7;
      let items8;
      let items9;
      let mainPIPGesture;
      let mainPIPVisibilityStyles;
      let obj10;
      let obj11;
      let obj13;
      let obj14;
      let obj15;
      let obj7;
      let obj9;
      let onAccessibilityAction;
      let pIPState;
      let pipWrapperStyles;
      let secondaryPIPGesture;
      let stateFromStores;
      let tmp2Result10;
      let tmp2Result12;
      let tmp2Result13;
      let tmp2Result8;
      const tmp = closure_17();
      let obj = onAccessibilityAction;
      const context = onAccessibilityAction.useContext(pIPState(stateFromStores[14]));
      const setMode = context.setMode;
      const controlsSpecs = context.controlsSpecs;
      let obj2 = setMode(stateFromStores[15]);
      pIPState = obj2.usePIPState();
      const tmp7 = closure_21();
      const isMainPIPActive = tmp7.isMainPIPActive;
      let tmp8 = isMainPIPActive;
      const cardArrivedInPIP = tmp7.cardArrivedInPIP;
      if (!isMainPIPActive) {
        tmp8 = !tmp7.panelLayoutCommitted;
      }
      let tmp9 = tmp8;
      if (tmp9) {
        let tmp10 = !isMainPIPActive;
        if (isMainPIPActive) {
          tmp10 = cardArrivedInPIP;
        }
        tmp9 = tmp10;
      }
      const tmp11 = closure_47(pIPState.mode, tmp8, tmp9);
      ({ pipWrapperStyles, gestureState } = tmp11);
      ({ containerStyles, mainPIPVisibilityStyles, mainPIPGesture, secondaryPIPGesture, containerGesture } = tmp11);
      let pushToTalk = tmp2(tmp3[29])(controlsSpecs).pushToTalk;
      const fn = function n() {
        let obj2;
        const obj = { borderRadius: obj2.getVoicePanelPIPBorderRadius(pIPState.width, pIPState.height) };
        obj2 = VoicePanelPIPUtils;
        return obj;
      };
      const tmp5Result = setMode(stateFromStores[17]);
      let obj3 = { getVoicePanelPIPBorderRadius: tmp5(tmp3[18]).getVoicePanelPIPBorderRadius, pipState: pIPState };
      fn.__closure = obj3;
      fn.__workletHash = 5337250890804;
      fn.__initData = __initData18;
      const animatedStyle = tmp5Result.useAnimatedStyle(fn);
      let items = [setMode];
      const memo = obj.useMemo(() => {
        let intl;
        let items;
        const obj = {
          accessible: true,
          accessibilityLabel: intl.string(intl3.t.oN8bqe),
          accessibilityRole: "button",
          accessibilityActions: items,
          onAccessibilityAction() {
            setMode(constants.PANEL);
          },
        };
        intl = intl3.intl;
        items = [{ name: "activate" }];
        return obj;
      }, items);
      const items1 = [FramesStore];
      const tmp5Result3 = setMode(stateFromStores[26]);
      stateFromStores = tmp5Result3.useStateFromStores(items1, () => {
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
          const obj2 = FramesActionCreatorsDefault;
          obj2.updateFramePanelMode(tmp, ActivityPanelModes.PANEL);
        } else {
          const obj = EmbeddedActivitiesActionCreatorsAll;
          const result = obj.updateActivityPanelMode(ActivityPanelModes.PANEL);
        }
      }, items2);
      const items3 = [onAccessibilityAction];
      const memo1 = obj.useMemo(() => {
        let intl;
        let items;
        const obj = {
          accessible: true,
          accessibilityLabel: intl.string(intl3.t["3ejJer"]),
          accessibilityActions: items,
          onAccessibilityAction,
        };
        intl = intl3.intl;
        items = [{ name: "activate" }];
        return obj;
      }, items3);
      if (pushToTalk) {
        pushToTalk = pIPState.mode !== VoicePanelPIPModes.IN_PANEL || tmp17;
      }
      const fn2 = function s() {
        let height;
        let scale;
        const obj = { height: height * scale.get() };
        ({ scale, height } = pIPState);
        return obj;
      };
      fn2.__closure = { pipState: pIPState };
      fn2.__workletHash = 17076559205042;
      fn2.__initData = __initData19;
      const fn3 = function p(originX) {
        let obj2;
        let obj3;
        let targetHeight;
        let targetWidth;
        const active = gestureState.get().active;
        size = {
          originX: obj2.withSpring(originX.targetOriginX, VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS),
          originY: obj3.withSpring(originX.targetOriginY, VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS),
          width: targetWidth,
          height: targetHeight,
        };
        obj2 = spring;
        obj3 = spring;
        if (active) {
          targetWidth = originX.targetWidth;
        } else {
          const tmpResult = spring;
          targetWidth = tmpResult.withSpring(originX.targetWidth, VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS);
        }
        if (active) {
          targetHeight = originX.targetHeight;
        } else {
          const tmpResult2 = spring;
          targetHeight = tmpResult2.withSpring(originX.targetHeight, VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS);
        }
        return {
          animations: size,
          initialValues: {
            originX: originX.currentOriginX,
            originY: originX.currentOriginY,
            width: originX.currentWidth,
            height: originX.currentHeight,
          },
        };
      };
      const obj4 = {
        gestureState,
        withSpring: setMode(stateFromStores[20]).withSpring,
        PIP_LAYOUT_PHYSICS: setMode(stateFromStores[18]).PIP_LAYOUT_PHYSICS,
      };
      const tmp5Result4 = setMode(stateFromStores[17]);
      const animatedStyle1 = tmp5Result4.useAnimatedStyle(fn2);
      const useCallback = obj.useCallback;
      fn3.__closure = obj4;
      fn3.__workletHash = 8318926763791;
      fn3.__initData = __initData20;
      const items4 = [gestureState];
      const callback1 = useCallback(fn3, items4);
      const obj5 = { pointerEvents: "box-none", style: items5, layout: callback1, children: items11 };
      items5 = [tmp.container, containerStyles];
      const obj6 = { gesture: containerGesture, children: closure_16(tmp2Result8, obj7) };
      const tmp2Result = pIPState(stateFromStores[31]);
      const GestureDetector = tmp5(tmp3[21]).GestureDetector;
      let tmp24Result = null;
      obj7 = { pointerEvents: "box-none", style: tmp.multiPipContainer, layout: callback1, children: items8 };
      tmp2Result8 = pIPState(stateFromStores[31]);
      if (tmp8) {
        const obj8 = {
          style: items6,
          pointerEvents: "box-none",
          layout: callback1,
          children: closure_15(GestureDetector2, obj9),
        };
        items6 = [, , ,];
        ({ pipContentWrapper: arr7[0], inAppElevationShadow: arr7[1] } = tmp);
        items6[2] = pipWrapperStyles;
        items6[3] = mainPIPVisibilityStyles;
        const tmp2Result9 = pIPState(stateFromStores[31]);
        const merged = Object.assign(memo);
        obj9 = { gesture: mainPIPGesture, children: closure_15(tmp2Result10, obj10) };
        GestureDetector2 = tmp5(tmp3[21]).GestureDetector;
        obj10 = { style: items7, layout: callback1, children: closure_15(pIPState(stateFromStores[32]), obj11) };
        items7 = [tmp.pipMask, animatedStyle];
        obj11 = { layoutTransition: callback1 };
        tmp2Result10 = pIPState(stateFromStores[31]);
        tmp24Result = closure_15(tmp2Result9, obj8);
      }
      items8 = [tmp24Result];
      let tmp24Result3 = null;
      if (pIPState.showSecondaryPIP) {
        const obj12 = { style: items9, children: closure_15(tmp2Result12, obj13) };
        items9 = [, ,];
        ({ pipContentWrapper: arr10[0], inAppElevationShadow: arr10[1] } = tmp);
        items9[2] = pipWrapperStyles;
        const tmp2Result11 = pIPState(stateFromStores[31]);
        const merged1 = Object.assign(memo1);
        obj13 = { style: items10, children: closure_15(GestureDetector3, obj14) };
        items10 = [tmp.pipMask, animatedStyle];
        obj14 = { gesture: secondaryPIPGesture, children: closure_15(tmp2Result13, obj15) };
        tmp2Result12 = pIPState(stateFromStores[31]);
        GestureDetector3 = tmp5(tmp3[21]).GestureDetector;
        obj15 = { style: StyleSheet.absoluteFill, children: closure_15(pIPState(stateFromStores[34]), {}) };
        tmp2Result13 = pIPState(stateFromStores[33]);
        tmp24Result3 = closure_15(tmp2Result11, obj12);
      }
      items8[1] = tmp24Result3;
      items11 = [closure_15(GestureDetector, obj6)];
      let tmp24Result4 = null;
      if (tmp9) {
        tmp24Result4 = null;
        if (pushToTalk) {
          const obj16 = {
            pointerEvents: "box-none",
            style: items12,
            layout: callback1,
            children: closure_15(pIPState(stateFromStores[35]), {}),
          };
          items12 = [tmp.pushToTalkContainer, animatedStyle1];
          const tmp2Result14 = pIPState(stateFromStores[31]);
          tmp24Result4 = closure_15(tmp2Result14, obj16);
        }
      }
      items11[1] = tmp24Result4;
      return closure_16(tmp2Result, obj5);
    };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_55 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (transitionState) => {
        const obj = transitionState(576);
        const cResult = obj.c(6);
        transitionState = transitionState.transitionState;
        const transitionCleanUp = transitionState.transitionCleanUp;
        const panelLayoutCommitted = closure_21().panelLayoutCommitted;
        if (cResult[0] === panelLayoutCommitted) {
          if (cResult[1] === transitionCleanUp) {
            let tmp2;
            let tmp3;
            let tmp7;
            if (cResult[2] === transitionState) {
              tmp2 = cResult[3];
              tmp3 = cResult[4];
            }
            const effect = react.useEffect(tmp2, tmp3);
            const _Symbol = Symbol;
            if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp10 = closure_15(closure_54, {});
              cResult[5] = tmp10;
              tmp7 = tmp10;
            } else {
              tmp7 = cResult[5];
            }
            return tmp7;
          }
        }
        const fn = function o() {
          const tmp = transitionState === native.TransitionStates.YEETED && panelLayoutCommitted;
          if (tmp) {
            transitionCleanUp();
          }
        };
        const items = [transitionState, panelLayoutCommitted, transitionCleanUp];
        cResult[0] = panelLayoutCommitted;
        cResult[1] = transitionCleanUp;
        cResult[2] = transitionState;
        cResult[3] = fn;
        cResult[4] = items;
        tmp3 = items;
        tmp2 = fn;
      }
    : (transitionState) => {
        transitionState = transitionState.transitionState;
        const transitionCleanUp = transitionState.transitionCleanUp;
        const panelLayoutCommitted = closure_21().panelLayoutCommitted;
        const items = [transitionState, panelLayoutCommitted, transitionCleanUp];
        const effect = react.useEffect(() => {
          const tmp = transitionState === native.TransitionStates.YEETED && panelLayoutCommitted;
          if (tmp) {
            transitionCleanUp();
          }
        }, items);
        return closure_15(closure_54, {});
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let mode;
        let showSecondaryPIP;
        const obj = react2;
        const cResult = obj.c(5);
        const obj2 = VoicePanelPIPStateContext;
        const pIPState = obj2.usePIPState();
        ({ mode, showSecondaryPIP } = pIPState);
        if (cResult[0] === mode) {
          let tmp5;
          let tmp7;
          if (cResult[1] === showSecondaryPIP) {
            tmp5 = cResult[2];
          }
          if (cResult[3] !== tmp5) {
            const obj3 = { item: tmp5, renderItem: renderPIPWrapper };
            const tmp10 = closure_15(native.TransitionItem, obj3);
            cResult[3] = tmp5;
            cResult[4] = tmp10;
            tmp7 = tmp10;
          } else {
            tmp7 = cResult[4];
          }
          return tmp7;
        }
        cResult[0] = mode;
        cResult[1] = showSecondaryPIP;
        cResult[2] = tmp6;
        tmp5 = tmp6;
      }
    : () => {
        let mode;
        let showSecondaryPIP;
        let tmp3;
        const obj = VoicePanelPIPStateContext;
        const pIPState = obj.usePIPState();
        ({ mode, showSecondaryPIP } = pIPState);
        const TransitionItem = native.TransitionItem;
        if (null != mode) {
          tmp3 = { pipMode: mode };
        }
        const obj3 = { item: tmp3, renderItem: renderPIPWrapper };
        return closure_15(TransitionItem, obj3);
      },
);
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIP.tsx");

export default memoResult;
