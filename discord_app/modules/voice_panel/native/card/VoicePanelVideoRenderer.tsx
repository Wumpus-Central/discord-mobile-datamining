// discord_app/modules/voice_panel/native/card/VoicePanelVideoRenderer.tsx
import _mod1705 from "../../../../../_runtime/metro/01705__.js";
import LegacyBaseButton from "../../../../../_runtime/05420_LegacyBaseButton.js";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import updateSharedValueIfChangedDefault from "../../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import useVideoSpinnerTimerDefault from "../../../video_calls/useVideoSpinnerTimer.tsx";
import DCDVideoRendererDefault from "../../../video_calls/native/components/DCDVideoRenderer.tsx";
import VideoActionCreators from "../../../media/VideoActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import 01652__ from "../../../../../_runtime/metro/01652__.js";

const require = globalThis.__r;

require = fn;
let PixelRatio = fn(17).PixelRatio;
const VoicePanelConstants = fn(11363);
let VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
const VoicePanelControlsModes = fn(11361).VoicePanelControlsModes;
const VoicePanelPIPModes = fn(19473).VoicePanelPIPModes;
const SCALE_PHYSICS = fn(11364).SCALE_PHYSICS;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const DCDVideoRenderer = module_1652.createAnimatedComponent(DCDVideoRendererDefault);
let items = [{ code: "(function getScaleChangeWithOverscroll_VoicePanelVideoRendererTsx1(currentScale,scaleChange,fitScale){let[MIN_OVERSCROLL,OVERSCOLL_INTENSITY_FACTOR]=this.__closure;if(currentScale>=fitScale){return scaleChange;}const underScale=1-currentScale;const factor=Math.max(MIN_OVERSCROLL,1-underScale*underScale*OVERSCOLL_INTENSITY_FACTOR);return 1+(scaleChange-1)*factor;})" }, 0.1, 5];
let closure_129_0;
let closure_129_1;
[tmp4, tmp5, tmp6] = items;
function getScaleChangeWithOverscroll(arg0, arg1, arg2) {
  if (arg0 >= arg2) {
    return arg1;
  } else {
    const diff = 1 - arg0;
    const _Math = Math;
    const diff1 = arg1 - 1;
    return 1 + diff1 * Math.max(require, 1 - diff * diff * importDefault);
  }
}
let items1 = [tmp5, tmp6];
getScaleChangeWithOverscroll.__closure = items1;
getScaleChangeWithOverscroll.__workletHash = 15489655629569;
getScaleChangeWithOverscroll.__initData = tmp4;
const createStyles = fn(5140);
let closure_15 = createStyles.createStyles({ wrapper: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }, animatedWrapperStyles: { position: "absolute" }, video: { width: "100%", height: "100%" }, spinner: { position: "absolute", top: "50%", left: "50%", marginTop: -16, marginLeft: -16, height: 32, width: 32 } });
let closure_16 = { code: "(function VoicePanelVideoRendererTsx2(){let[containerLayout,videoDimensions]=this.__closure;return Math.max(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);})" };
let closure_17 = { code: "(function VoicePanelVideoRendererTsx3(){let[containerLayout,videoDimensions]=this.__closure;return Math.min(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);})" };
let closure_18 = { code: "(function VoicePanelVideoRendererTsx4(){let[translateX,translateY,scale,fitScale,coverScale]=this.__closure;if(translateX.get()!==0||translateY.get()!==0){return false;}if(scale.get()===fitScale.get()||scale.get()===coverScale.get()){return true;}return false;})" };
let closure_19 = { code: "(function VoicePanelVideoRendererTsx5(forcedMode){let[scale,withSpring,fitScale,MODE_CHANGE_PHYSICS,disableAnimations,coverScale,translateX,SCALE_PHYSICS,translateY,currentSizeThreshold]=this.__closure;if(forcedMode==='fit'){scale.set(withSpring(fitScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?'respect-motion-settings':'animate-never'));}else{scale.set(withSpring(coverScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?'respect-motion-settings':'animate-never'));}translateX.set(withSpring(0,SCALE_PHYSICS));translateY.set(withSpring(0,SCALE_PHYSICS));currentSizeThreshold.set(forcedMode);})" };
let closure_20 = { code: "(function VoicePanelVideoRendererTsx6(){let[focused,id,videoDimensions,windowDimensions,isCamera,resetToDefaultSize]=this.__closure;var _focused$get;let resizeMode=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id?'fit':'cover';const videoLandscape=videoDimensions.get().width>=videoDimensions.get().height;const parentLandscape=windowDimensions.get().width>=windowDimensions.get().height;const matchingAspect=videoLandscape===parentLandscape;if(isCamera&&resizeMode==='fit'){if(matchingAspect){resizeMode='cover';}}resetToDefaultSize(resizeMode);})" };
let closure_21 = { code: "(function VoicePanelVideoRendererTsx7(){let[containerLayout]=this.__closure;return containerLayout.get();})" };
let closure_22 = { code: "(function VoicePanelVideoRendererTsx8(containerLayout,previous){let[cheapWorkletShallowEqual,focused,id,resetOnLayoutChange]=this.__closure;var _focused$get;if(cheapWorkletShallowEqual(containerLayout,previous!==null&&previous!==void 0?previous:undefined))return;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id)return;if(containerLayout!==previous&&previous!=null){resetOnLayoutChange();}})" };
let closure_23 = { code: "(function VoicePanelVideoRendererTsx9(){let[coverScale,fitScale,MIN_ZOOM_FOR_COVER_SNAP_OFFSET,translateX,scale,translateY,SNAP_CENTER_THRESHOLD,containerLayout,videoDimensions,SNAP_EDGE_OUTER_THRESHOLD,SNAP_EDGE_INNER_THRESHOLD]=this.__closure;if(coverScale.get()<fitScale.get()+MIN_ZOOM_FOR_COVER_SNAP_OFFSET){return false;}const screenTranslateX=translateX.get()*scale.get();const screenTranslateY=translateY.get()*scale.get();if(screenTranslateX<-SNAP_CENTER_THRESHOLD||screenTranslateX>SNAP_CENTER_THRESHOLD||screenTranslateY<-SNAP_CENTER_THRESHOLD||screenTranslateY>SNAP_CENTER_THRESHOLD){return false;}const adjustedScreenTranslateX=screenTranslateX+(containerLayout.get().width-videoDimensions.get().width*scale.get())/2;const adjustedScreenTranslateY=screenTranslateY+(containerLayout.get().height-videoDimensions.get().height*scale.get())/2;const videoWidth=videoDimensions.get().width*scale.get();const videoHeight=videoDimensions.get().height*scale.get();if(videoHeight>=containerLayout.get().height&&adjustedScreenTranslateX>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateX<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth>=containerLayout.get().width-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth<=containerLayout.get().width+SNAP_EDGE_OUTER_THRESHOLD){return true;}if(videoWidth>=containerLayout.get().width&&adjustedScreenTranslateY>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateY<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight>=containerLayout.get().height-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight<=containerLayout.get().height+SNAP_EDGE_OUTER_THRESHOLD){return true;}return false;})" };
let closure_24 = { code: "(function VoicePanelVideoRendererTsx10(){let[numGesturesActive,isInSnap,resetToDefaultSize,scale,fitScale,videoDimensions,containerLayout,translateX,withSpring,SCALE_PHYSICS,translateY]=this.__closure;if(numGesturesActive.get()>0){return;}if(isInSnap.get()){isInSnap.set(false);resetToDefaultSize('cover');return;}if(scale.get()<fitScale.get()){resetToDefaultSize('fit');return;}const maxTranslateY=Math.max(0,(videoDimensions.get().height-containerLayout.get().height/scale.get())/2);const maxTranslateX=Math.max(0,(videoDimensions.get().width-containerLayout.get().width/scale.get())/2);translateX.set(withSpring(Math.min(maxTranslateX,Math.max(-maxTranslateX,translateX.get())),SCALE_PHYSICS));translateY.set(withSpring(Math.min(maxTranslateY,Math.max(-maxTranslateY,translateY.get())),SCALE_PHYSICS));})" };
let closure_25 = { code: "(function VoicePanelVideoRendererTsx11(){let[focused,id,isInDefaultZoom,isInPanToZoom]=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id&&(!isInDefaultZoom.get()||isInPanToZoom.get());})" };
let closure_26 = { code: "(function VoicePanelVideoRendererTsx12(isFocusedZoomed,previous){let[setIsFocusedVideoZoomed]=this.__closure;if(isFocusedZoomed===previous){return;}setIsFocusedVideoZoomed(isFocusedZoomed);})" };
let closure_27 = { code: "(function VoicePanelVideoRendererTsx13(){let[focused,id]=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;})" };
let closure_28 = { code: "(function VoicePanelVideoRendererTsx14(isFocused,previous){let[resetOnLayoutChange]=this.__closure;if(isFocused===previous){return;}resetOnLayoutChange();})" };
let closure_29 = { code: "(function VoicePanelVideoRendererTsx15(){let[mode]=this.__closure;return mode.get();})" };
let closure_30 = { code: "(function VoicePanelVideoRendererTsx16(mode,previous){let[resetOnLayoutChange]=this.__closure;if(mode===previous){return;}resetOnLayoutChange();})" };
let closure_31 = { code: "(function VoicePanelVideoRendererTsx17(){let[videoDimensions]=this.__closure;return videoDimensions.get();})" };
let closure_32 = { code: "(function VoicePanelVideoRendererTsx18(layout,previous){let[currentSizeThreshold,resetOnLayoutChange]=this.__closure;if(currentSizeThreshold==null){return;}if(layout.width===(previous===null||previous===void 0?void 0:previous.width)&&layout.height===(previous===null||previous===void 0?void 0:previous.height)){return;}resetOnLayoutChange();})" };
let closure_33 = { code: "(function VoicePanelVideoRendererTsx19(){let[coverScale]=this.__closure;return coverScale.get();})" };
let closure_34 = { code: "(function VoicePanelVideoRendererTsx20(current,previous){let[currentSizeThreshold,resetToDefaultSize]=this.__closure;const _currentSizeThreshold=currentSizeThreshold.get();if(_currentSizeThreshold!=='cover'){return;}if(current===previous){return;}resetToDefaultSize(_currentSizeThreshold);})" };
let closure_35 = { code: "(function VoicePanelVideoRendererTsx21(){let[isInSnap]=this.__closure;return isInSnap.get();})" };
let closure_36 = { code: "(function VoicePanelVideoRendererTsx22(current,previous){let[scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes]=this.__closure;if(current===previous){return;}if(!current){return;}scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_LIGHT);})" };
let closure_37 = { code: "(function VoicePanelVideoRendererTsx23(e,manager){return manager.fail();})" };
let closure_38 = { code: "(function VoicePanelVideoRendererTsx24(){let[isInDefaultZoom,resetOnLayoutChange,focused,id,scheduleOnRN,setFocused]=this.__closure;var _focused$get;if(!isInDefaultZoom.get()){resetOnLayoutChange();return;}if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){scheduleOnRN(setFocused,id);}else{scheduleOnRN(setFocused,null);}})" };
let closure_39 = { code: "(function VoicePanelVideoRendererTsx25(e,manager){return manager.fail();})" };
let closure_40 = { code: "(function VoicePanelVideoRendererTsx26(){let[controlsSpecs,VoicePanelControlsModes,scheduleOnRN,showControls,hideControls]=this.__closure;if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){scheduleOnRN(showControls,{debounce:true});}else{scheduleOnRN(hideControls,{debounce:true});}})" };
let closure_41 = { code: "(function VoicePanelVideoRendererTsx27(event,manager){let[focused,id]=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){manager.fail();}})" };
let closure_42 = { code: "(function VoicePanelVideoRendererTsx28(){let[numGesturesActive,isInPanToZoom,currentSizeThreshold]=this.__closure;numGesturesActive.set(numGesturesActive.get()+1);isInPanToZoom.set(false);currentSizeThreshold.set(null);})" };
let closure_43 = { code: "(function VoicePanelVideoRendererTsx29(event){let[scale,getScaleChangeWithOverscroll,fitScale,containerLayout,translateX,translateY,isInSnap,isInCoverSnap]=this.__closure;scale.set(scale.get()*getScaleChangeWithOverscroll(scale.get(),event.scaleChange,fitScale.get()));const startingFocalFromCenterX=event.focalX-containerLayout.get().width/2;const startingFocalFromCenterY=event.focalY-containerLayout.get().height/2;const zoomCenteringX=-1*startingFocalFromCenterX*(event.scaleChange-1)/scale.get();const zoomCenteringY=-1*startingFocalFromCenterY*(event.scaleChange-1)/scale.get();translateX.set(translateX.get()+zoomCenteringX);translateY.set(translateY.get()+zoomCenteringY);isInSnap.set(isInCoverSnap());})" };
let closure_44 = { code: "(function VoicePanelVideoRendererTsx30(){let[numGesturesActive,handleMovementEnd]=this.__closure;numGesturesActive.set(numGesturesActive.get()-1);handleMovementEnd();})" };
let closure_45 = { code: "(function VoicePanelVideoRendererTsx31(event,manager){let[focused,id]=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){manager.fail();return;}})" };
let closure_46 = { code: "(function VoicePanelVideoRendererTsx32(){let[lastTapTimestamp,PAN_TO_ZOOM_TAP_TIME_MILLIS,isInPanToZoom]=this.__closure;const hasRecentTap=Date.now()-lastTapTimestamp.get()<=PAN_TO_ZOOM_TAP_TIME_MILLIS;isInPanToZoom.set(hasRecentTap);lastTapTimestamp.set(Date.now());})" };
let closure_47 = { code: "(function VoicePanelVideoRendererTsx33(){let[isInPanToZoom,scheduleOnRN,hideControls,numGesturesActive,currentSizeThreshold]=this.__closure;if(isInPanToZoom.get()){scheduleOnRN(hideControls);}numGesturesActive.set(numGesturesActive.get()+1);currentSizeThreshold.set(null);})" };
let closure_48 = { code: "(function VoicePanelVideoRendererTsx34(event){let[isInPanToZoom,PAN_TO_ZOOM_SCALE_FACTOR,scale,getScaleChangeWithOverscroll,fitScale,translateX,translateY,isInSnap,isInCoverSnap]=this.__closure;if(isInPanToZoom.get()){const scaleChange=1+event.changeY*PAN_TO_ZOOM_SCALE_FACTOR;scale.set(scale.get()*getScaleChangeWithOverscroll(scale.get(),scaleChange,fitScale.get()));}else{translateX.set(translateX.get()+event.changeX/scale.get());translateY.set(translateY.get()+event.changeY/scale.get());}isInSnap.set(isInCoverSnap());})" };
let closure_49 = { code: "(function VoicePanelVideoRendererTsx35(event){let[numGesturesActive,translateX,withSpring,FLING_VELOCITY_SCALING,scale,SCALE_PHYSICS,translateY,handleMovementEnd]=this.__closure;numGesturesActive.set(numGesturesActive.get()-1);translateX.set(withSpring(translateX.get()+event.velocityX*FLING_VELOCITY_SCALING/scale.get(),SCALE_PHYSICS));translateY.set(withSpring(translateY.get()+event.velocityY*FLING_VELOCITY_SCALING/scale.get(),SCALE_PHYSICS));handleMovementEnd();})" };
let closure_50 = { code: "(function VoicePanelVideoRendererTsx36(){let[isInPanToZoom]=this.__closure;isInPanToZoom.set(false);})" };
let items2 = [{ code: "(function shouldMakeActive_VoicePanelVideoRendererTsx37({mode:mode,focusedId:focusedId,selfId:selfId,isScrollVisible:isScrollVisible}){let[VoicePanelModes]=this.__closure;const isPIP=mode===VoicePanelModes.PIP;if(!isScrollVisible||isPIP||focusedId!=null&&focusedId!==selfId){return false;}return true;})" }, VoicePanelModes];
let closure_130_0;
[tmp7, tmp8] = items2;
function shouldMakeActive(mode) {
  ({ focusedId, isScrollVisible } = mode);
  let tmp = !isScrollVisible;
  if (isScrollVisible) {
    tmp = mode.mode === require.PIP;
  }
  if (!tmp) {
    tmp = null != focusedId && focusedId !== mode.selfId;
    const tmp3 = null != focusedId && focusedId !== mode.selfId;
  }
  return !tmp;
}
let items3 = [tmp8];
shouldMakeActive.__closure = items3;
shouldMakeActive.__workletHash = 2956853120276;
shouldMakeActive.__initData = tmp7;
let closure_52 = { code: "(function VoicePanelVideoRendererTsx38(){let[mode,focused,isScrollVisible,streamId]=this.__closure;var _focused$get;return[mode.get(),(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,isScrollVisible.get(),streamId];})" };
let closure_53 = { code: "(function VoicePanelVideoRendererTsx39(props,previous){let[cheapWorkletArrayShallowEqual,scheduleOnRN,setHasActiveVideoOutputSink,shouldMakeActive,id]=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[mode,focusedId,isScrollVisible,streamId]=props;if(streamId==null)return;scheduleOnRN(setHasActiveVideoOutputSink,streamId,shouldMakeActive({mode:mode,focusedId:focusedId,selfId:id,isScrollVisible:isScrollVisible}));})" };
let closure_54 = { code: "(function VoicePanelVideoRendererTsx40(){let[focused,id,windowDimensions,sharedCoords]=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id){return{width:windowDimensions.get().width,height:windowDimensions.get().height};}return{width:sharedCoords.get().width,height:sharedCoords.get().height};})" };
let closure_55 = { code: "(function VoicePanelVideoRendererTsx41(){let[scale,videoDimensions,mode]=this.__closure;return[scale.get(),videoDimensions.get(),mode.get()];})" };
let closure_56 = { code: "(function VoicePanelVideoRendererTsx42(props,previous){let[streamId,cheapWorkletShallowEqual,scheduleOnRN,respondToVideoSizeUpdate]=this.__closure;if(streamId==null)return;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;scheduleOnRN(respondToVideoSizeUpdate);})" };
let closure_57 = { code: "(function VoicePanelVideoRendererTsx43(){let[videoDimensions,pipState,VoicePanelPIPModes,scale,disableAnimations,translateX,translateY,mirror]=this.__closure;let{width:width,height:height}=videoDimensions.get();if(pipState.mode===VoicePanelPIPModes.IN_APP){const pipScale=pipState.scale.get();if(width>height){width=width*(pipState.height*pipScale/height)/scale.get();height=pipState.height*pipScale/scale.get();}else{height=height*(pipState.width*pipScale/width)/scale.get();width=pipState.width*pipScale/scale.get();}}return{width:width,height:height,opacity:disableAnimations.get()?0:1,transform:[{scale:scale.get()},{translateX:translateX.get()},{translateY:translateY.get()},{scaleX:mirror?-1:1}]};})" };
let closure_58 = { code: "(function VoicePanelVideoRendererTsx44(){let[mode,VoicePanelModes,focused,id]=this.__closure;var _focused$get;return{inPip:mode.get()===VoicePanelModes.PIP,isFocused:((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id};})" };
let closure_59 = { code: "(function VoicePanelVideoRendererTsx45(curr,prev){let[cheapWorkletShallowEqual,strokeOpacity,withDelay,withTiming]=this.__closure;if(cheapWorkletShallowEqual(curr,prev!==null&&prev!==void 0?prev:undefined))return;if(curr.inPip||curr.isFocused){strokeOpacity.set(0);return;}const shouldDelay=(prev===null||prev===void 0?void 0:prev.isFocused)===true;strokeOpacity.set(shouldDelay?withDelay(300,withTiming(0.3,{duration:0},'animate-never')):0.3);})" };
let closure_60 = { code: "(function VoicePanelVideoRendererTsx46(){let[isInSnap,SNAP_EDGE_INNER_THRESHOLD,borderRadius,strokeOpacity]=this.__closure;if(isInSnap.get()){return{position:'absolute',top:0,left:0,bottom:0,right:0,borderWidth:SNAP_EDGE_INNER_THRESHOLD,overflow:'hidden',borderColor:'white',opacity:0.5};}return{position:'absolute',top:-1,left:-1,bottom:-1,right:-1,borderWidth:2,borderRadius:borderRadius+2,overflow:'hidden',borderColor:'white',opacity:strokeOpacity.get()};})" };
let closure_61 = { code: "(function VoicePanelVideoRendererTsx47(values){let[layout,disableAnimations]=this.__closure;return layout(values,disableAnimations.get());})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelVideoRenderer.tsx");

export default noop.memo(function VideoRenderer(id) {
  id = id.id;
  _require = id;
  const streamId = id.streamId;
  importDefault = streamId;
  ({ userId, videoSpinnerContext, isCamera } = id);
  dependencyMap = isCamera;
  let flag = id.mirror;
  ({ sharedCoords, isScrollVisible, streamKey } = id);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = id.focusOnReady;
  if (flag2 === undefined) {
    flag2 = false;
  }
  c3 = flag2;
  let flag3 = id.paused;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const layout = id.layout;
  selfId = undefined;
  PixelRatio = undefined;
  c9 = undefined;
  c10 = undefined;
  let onReady;
  let sharedValue2;
  c13 = undefined;
  let callback6;
  let tmp = closure_15();
  const surfaceDirectRendererExperiment = require("SurfaceDirectRendererExperiment").useSurfaceDirectRendererExperiment(userId, { location: "VoicePanelVideoRenderer" });
  const context = selfId.useContext(VoicePanelStateContextDefault);
  const mode = context.mode;
  selfId = mode;
  ({ focused, setFocused: c5, layoutManager } = context);
  VoicePanelModes = layoutManager;
  ({ windowDimensions, streamOutputSinkStack } = context);
  let obj = require("SurfaceDirectRendererExperiment");
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(true);
  c7 = sharedValue;
  const obj3 = require("../../../../../_runtime/metro/01652__.js");
  const merged = Object.assign(layoutManager.getTargetDimensions(id));
  const sharedValue1 = require("../../../../../_runtime/metro/01652__.js").useSharedValue({});
  c8 = sharedValue1;
  const obj4 = require("../../../../../_runtime/metro/01652__.js");
  const obj5 = {};
  const pIPState = require("VoicePanelPIPStateContext").usePIPState();
  let tmp11 = isCamera;
  if (isCamera) {
    tmp11 = pIPState.id === id;
  }
  if (tmp11) {
    tmp11 = surfaceDirectRendererExperiment;
  }
  const obj6 = require("VoicePanelPIPStateContext");
  [tmp13, c9] = c3(selfId.useState(true), 2);
  c10 = obj2.useRef(() => {
    if (c3) {
      _undefined4(c0);
    }
  });
  onReady = tmp5(11931)({ streamId, userId, loading: tmp13, videoSpinnerContext, paused: flag3, streamKey }).onReady;
  useVideoSpinnerTimerDefault({ location: "VideoRenderer", videoSpinnerContext, userId, streamId, loading: tmp13 });
  items = [onReady];
  const callback = obj2.useCallback(() => {
    _undefined8(false);
    _undefined9.current();
    onReady();
  }, items);
  const tmp12 = c3(selfId.useState(true), 2);
  const setHasActiveVideoOutputSink = require("VoicePanelStreamOutputSinkStack").useSetHasActiveVideoOutputSink(streamOutputSinkStack);
  const tmp2Result = require("VoicePanelStreamOutputSinkStack");
  let items1 = [closure_52, mode, focused, isScrollVisible, streamId];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp17, tmp18, tmp19, tmp20, tmp21] = items1;
  class VoicePanelVideoRendererTsx38 {
    constructor() {
      items = [, , , ];
      items[0] = closure_0.get();
      value = closure_1.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      items[1] = id;
      items[2] = closure_2.get();
      items[3] = closure_3;
      return items;
    }
  }
  let items2 = [tmp18, tmp19, tmp20, tmp21];
  VoicePanelVideoRendererTsx38.__closure = items2;
  VoicePanelVideoRendererTsx38.__workletHash = 9364170441646;
  VoicePanelVideoRendererTsx38.__initData = tmp17;
  let items3 = [closure_53, require("cheapWorkletShallowEqual").cheapWorkletArrayShallowEqual, require("../../../../../_runtime/metro/01705__.js").scheduleOnRN, setHasActiveVideoOutputSink, shouldMakeActive, id];
  closure_129_0 = undefined;
  closure_129_1 = undefined;
  closure_129_2 = undefined;
  closure_129_3 = undefined;
  closure_129_4 = undefined;
  [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27] = items3;
  class VoicePanelVideoRendererTsx39 {
    constructor(arg0, arg1) {
      tmp = arg1;
      tmp2 = closure_0;
      if (!tmp2(id, tmp)) {
        tmp3 = closure_3;
        num = 4;
        tmp4 = closure_3(id, 4);
        tmp8 = tmp4[3];
        if (null != tmp8) {
          tmp9 = closure_1;
          tmp10 = closure_2;
          tmp11 = closure_3;
          obj = { mode: null, focusedId: null, selfId: null, isScrollVisible: null };
          obj.mode = tmp5;
          obj.focusedId = tmp6;
          tmp12 = closure_4;
          obj.selfId = closure_4;
          obj.isScrollVisible = tmp7;
          tmp13 = closure_1(closure_2, tmp8, closure_3(obj));
        }
      }
      return;
    }
  }
  let items4 = [tmp23, tmp24, tmp25, tmp26, tmp27];
  VoicePanelVideoRendererTsx39.__closure = items4;
  VoicePanelVideoRendererTsx39.__workletHash = 7217467762408;
  VoicePanelVideoRendererTsx39.__initData = tmp22;
  const animatedReaction = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(VoicePanelVideoRendererTsx38, VoicePanelVideoRendererTsx39);
  let items5 = [sharedValue1, layoutManager, id, sharedValue];
  const callback1 = obj2.useCallback((nativeEvent) => {
    ({ width, height } = nativeEvent.nativeEvent);
    updateSharedValueIfChangedDefault(c8, { width, height });
    _undefined5.setTargetDimensions(c0, width, height);
    if (_undefined6.get()) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const result = _undefined6.set(false);
      }, 34);
    }
  }, items5);
  const tmp2Result27 = require("../../../../../_runtime/metro/01652__.js");
  let items6 = [closure_54, focused, id, windowDimensions, sharedCoords];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp30, tmp31, tmp32, tmp33, tmp34] = items6;
  class VoicePanelVideoRendererTsx40 {
    constructor() {
      value = closure_0.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      if (id === closure_1) {
        size = { width: null, height: null };
        tmp4 = closure_2;
        size.width = closure_2.get().width;
        size.height = closure_2.get().height;
        size1 = size;
      } else {
        size1 = { width: null, height: null };
        tmp3 = closure_3;
        size1.width = closure_3.get().width;
        size1.height = closure_3.get().height;
      }
      return size1;
    }
  }
  let items7 = [tmp31, tmp32, tmp33, tmp34];
  VoicePanelVideoRendererTsx40.__closure = items7;
  VoicePanelVideoRendererTsx40.__workletHash = 3842770949838;
  VoicePanelVideoRendererTsx40.__initData = tmp30;
  const derivedValue = require("../../../../../_runtime/metro/01652__.js").useDerivedValue(VoicePanelVideoRendererTsx40);
  closure_130_0 = id;
  closure_130_1 = focused;
  closure_130_2 = tmp13;
  closure_130_3 = derivedValue;
  closure_130_17 = undefined;
  closure_130_18 = undefined;
  closure_130_19 = undefined;
  closure_130_20 = undefined;
  closure_130_21 = undefined;
  const context1 = obj2.useContext(tmp5(11362));
  ({ windowDimensions: windowDimensions2, dismissToPIPGestureRef } = context1);
  closure_130_4 = dismissToPIPGestureRef;
  const setFocused = context1.setFocused;
  closure_130_5 = setFocused;
  const hideControls = context1.hideControls;
  closure_130_6 = hideControls;
  const controlsSpecs = context1.controlsSpecs;
  closure_130_7 = controlsSpecs;
  const showControls = context1.showControls;
  closure_130_8 = showControls;
  const tmp2Result28 = require("../../../../../_runtime/metro/01652__.js");
  sharedValue2 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(1);
  closure_130_9 = sharedValue2;
  const tmp2Result29 = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue3 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  closure_130_10 = sharedValue3;
  const tmp2Result30 = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue4 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  closure_130_11 = sharedValue4;
  const tmp2Result31 = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue5 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  closure_130_12 = sharedValue5;
  const tmp2Result32 = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue6 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(false);
  closure_130_13 = sharedValue6;
  const tmp2Result33 = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue7 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  closure_130_14 = sharedValue7;
  const tmp2Result34 = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue8 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(false);
  closure_130_15 = sharedValue8;
  const tmp2Result35 = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue9 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(null);
  closure_130_16 = sharedValue9;
  const tmp2Result36 = require("../../../../../_runtime/metro/01652__.js");
  let items8 = [closure_16, derivedValue, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  [tmp45, tmp46, tmp47] = items8;
  class VoicePanelVideoRendererTsx2 {
    constructor() {
      result = closure_0.get().width / closure_1.get().width;
      return Math.max(result, closure_0.get().height / closure_1.get().height);
    }
  }
  let items9 = [tmp46, tmp47];
  VoicePanelVideoRendererTsx2.__closure = items9;
  VoicePanelVideoRendererTsx2.__workletHash = 17251500139091;
  VoicePanelVideoRendererTsx2.__initData = tmp45;
  const derivedValue1 = require("../../../../../_runtime/metro/01652__.js").useDerivedValue(VoicePanelVideoRendererTsx2);
  const tmp2Result37 = require("../../../../../_runtime/metro/01652__.js");
  let items10 = [closure_17, derivedValue, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  [tmp49, tmp50, tmp51] = items10;
  class VoicePanelVideoRendererTsx3 {
    constructor() {
      result = closure_0.get().width / closure_1.get().width;
      return Math.min(result, closure_0.get().height / closure_1.get().height);
    }
  }
  let items11 = [tmp50, tmp51];
  VoicePanelVideoRendererTsx3.__closure = items11;
  VoicePanelVideoRendererTsx3.__workletHash = 10881595323084;
  VoicePanelVideoRendererTsx3.__initData = tmp49;
  const derivedValue2 = require("../../../../../_runtime/metro/01652__.js").useDerivedValue(VoicePanelVideoRendererTsx3);
  closure_130_17 = derivedValue2;
  const tmp2Result38 = require("../../../../../_runtime/metro/01652__.js");
  let items12 = [closure_18, sharedValue3, sharedValue4, sharedValue2, derivedValue2, derivedValue1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  selfId = undefined;
  [tmp53, tmp54, tmp55, tmp56, tmp57, tmp58] = items12;
  class VoicePanelVideoRendererTsx4 {
    constructor() {
      tmp = 0 === closure_0.get();
      if (tmp) {
        tmp2 = closure_1;
        tmp = 0 === closure_1.get();
      }
      if (tmp) {
        obj = closure_2;
        tmp4 = closure_3;
        value = closure_2.get();
        tmp5 = value === closure_3.get();
        if (!tmp5) {
          tmp7 = closure_4;
          value1 = obj.get();
          tmp5 = value1 === closure_4.get();
        }
        tmp = tmp5;
      }
      return tmp;
    }
  }
  let items13 = [tmp54, tmp55, tmp56, tmp57, tmp58];
  VoicePanelVideoRendererTsx4.__closure = items13;
  VoicePanelVideoRendererTsx4.__workletHash = 12363080110527;
  VoicePanelVideoRendererTsx4.__initData = tmp53;
  const derivedValue3 = require("../../../../../_runtime/metro/01652__.js").useDerivedValue(VoicePanelVideoRendererTsx4);
  closure_130_18 = derivedValue3;
  let items14 = [closure_19, sharedValue2, require("spring/spring").withSpring, derivedValue2, c7, sharedValue, derivedValue1, sharedValue3, c10, sharedValue4, sharedValue9];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  selfId = undefined;
  PixelRatio = undefined;
  VoicePanelModes = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  [tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71] = items14;
  class VoicePanelVideoRendererTsx5 {
    constructor(arg0) {
      if ("fit" === id) {
        tmp10 = closure_1;
        tmp11 = closure_2;
        tmp9 = closure_0;
        tmp14 = closure_4;
        value = closure_2.get();
        tmp13 = closure_3;
        str2 = "respect-motion-settings";
        if (closure_4.get()) {
          str2 = "animate-never";
        }
        result = closure_0.set(tmp10(value, tmp13, str2));
        tmp8 = tmp10;
      } else {
        tmp2 = closure_1;
        tmp3 = closure_5;
        tmp = closure_0;
        tmp6 = closure_4;
        value1 = closure_5.get();
        tmp5 = closure_3;
        str = "respect-motion-settings";
        if (closure_4.get()) {
          str = "animate-never";
        }
        result1 = closure_0.set(tmp2(value1, tmp5, str));
        tmp8 = tmp2;
      }
      result2 = closure_6.set(tmp8(0, closure_7));
      result3 = closure_8.set(tmp8(0, closure_7));
      result4 = closure_9.set(id);
      return;
    }
  }
  let items15 = [tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71];
  VoicePanelVideoRendererTsx5.__closure = items15;
  VoicePanelVideoRendererTsx5.__workletHash = 1036845491054;
  VoicePanelVideoRendererTsx5.__initData = tmp61;
  let items16 = [sharedValue2, sharedValue3, sharedValue4, derivedValue1, sharedValue9, derivedValue2, sharedValue];
  const callback2 = obj2.useCallback(VoicePanelVideoRendererTsx5, items16);
  let items17 = [closure_20, focused, id, sharedValue1, windowDimensions2, isCamera, callback2];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  selfId = undefined;
  PixelRatio = undefined;
  [tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79] = items17;
  class VoicePanelVideoRendererTsx6 {
    constructor() {
      value = closure_0.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      str = "cover";
      if (id === closure_1) {
        str = "fit";
      }
      tmp3 = closure_2.get().width >= closure_2.get().height;
      tmp5 = closure_4;
      tmp4 = closure_3.get().width >= closure_3.get().height;
      if (closure_4) {
        str2 = "fit";
        tmp5 = "fit" === str;
      }
      if (tmp5) {
        tmp5 = tmp3 === tmp4;
      }
      if (tmp5) {
        str = "cover";
      }
      tmp6 = closure_5(str);
      return;
    }
  }
  let items18 = [tmp74, tmp75, tmp76, tmp77, tmp78, tmp79];
  VoicePanelVideoRendererTsx6.__closure = items18;
  VoicePanelVideoRendererTsx6.__workletHash = 4843026901160;
  VoicePanelVideoRendererTsx6.__initData = tmp73;
  let items19 = [focused, id, isCamera, sharedValue1, windowDimensions2, callback2];
  const callback3 = obj2.useCallback(VoicePanelVideoRendererTsx6, items19);
  closure_130_19 = callback3;
  const tmp2Result39 = require("../../../../../_runtime/metro/01652__.js");
  const tmp60 = c10;
  let items20 = [closure_21, derivedValue];
  _require = undefined;
  [tmp81, tmp82] = items20;
  class VoicePanelVideoRendererTsx7 {
    constructor() {
      return closure_0.get();
    }
  }
  let items21 = [tmp82];
  VoicePanelVideoRendererTsx7.__closure = items21;
  VoicePanelVideoRendererTsx7.__workletHash = 1319377267435;
  VoicePanelVideoRendererTsx7.__initData = tmp81;
  let items22 = [closure_22, require("cheapWorkletShallowEqual").cheapWorkletShallowEqual, focused, id, callback3];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp83, tmp84, tmp85, tmp86, tmp87] = items22;
  class VoicePanelVideoRendererTsx8 {
    constructor(arg0, arg1) {
      tmp2 = arg1;
      tmp = closure_0;
      if (!tmp(id, tmp2)) {
        tmp3 = closure_1;
        value = closure_1.get();
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        tmp6 = closure_2;
        tmp7 = id === closure_2 && id !== arg1 && null != arg1;
        if (tmp7) {
          tmp8 = closure_3;
          tmp9 = closure_3();
        }
      }
      return;
    }
  }
  let items23 = [tmp84, tmp85, tmp86, tmp87];
  VoicePanelVideoRendererTsx8.__closure = items23;
  VoicePanelVideoRendererTsx8.__workletHash = 16070340979086;
  VoicePanelVideoRendererTsx8.__initData = tmp83;
  const animatedReaction1 = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(VoicePanelVideoRendererTsx7, VoicePanelVideoRendererTsx8);
  let items24 = [closure_23, derivedValue1, derivedValue2, 0.05, sharedValue3, sharedValue2, sharedValue4, 50, derivedValue, sharedValue1, 50, 25];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  selfId = undefined;
  PixelRatio = undefined;
  VoicePanelModes = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  [tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100] = items24;
  class VoicePanelVideoRendererTsx9 {
    constructor() {
      value = closure_0.get();
      if (value < closure_1.get() + closure_2) {
        flag2 = false;
        return false;
      } else {
        tmp16 = closure_3;
        obj = closure_4;
        value1 = closure_3.get();
        result = value1 * closure_4.get();
        tmp19 = closure_5;
        value2 = closure_5.get();
        result1 = value2 * closure_4.get();
        tmp22 = closure_6;
        if (result >= -closure_6) {
          if (result <= tmp22) {
            if (result1 >= -tmp22) {
              if (result1 <= tmp22) {
                obj2 = closure_7;
                tmp23 = closure_8;
                num = 2;
                sum = result + (closure_7.get().width - closure_8.get().width * obj.get()) / 2;
                sum1 = result1 + (closure_7.get().height - closure_8.get().height * obj.get()) / 2;
                result2 = closure_8.get().width * obj.get();
                result3 = closure_8.get().height * obj.get();
                tmp3 = result3 >= closure_7.get().height;
                if (tmp3) {
                  tmp2 = closure_9;
                  tmp3 = sum >= -closure_9;
                }
                if (tmp3) {
                  tmp4 = closure_10;
                  tmp3 = sum <= closure_10;
                }
                if (tmp3) {
                  sum2 = sum + result2;
                  tmp6 = closure_10;
                  tmp3 = sum2 >= obj2.get().width - closure_10;
                }
                if (tmp3) {
                  sum3 = sum + result2;
                  tmp8 = closure_9;
                  tmp3 = sum3 <= obj2.get().width + closure_9;
                }
                if (!tmp3) {
                  tmp9 = result2 >= obj2.get().width;
                  if (tmp9) {
                    tmp10 = closure_9;
                    tmp9 = sum1 >= -closure_9;
                  }
                  if (tmp9) {
                    tmp11 = closure_10;
                    tmp9 = sum1 <= closure_10;
                  }
                  if (tmp9) {
                    sum4 = sum1 + result3;
                    tmp13 = closure_10;
                    tmp9 = sum4 >= obj2.get().height - closure_10;
                  }
                  if (tmp9) {
                    sum5 = sum1 + result3;
                    tmp15 = closure_9;
                    tmp9 = sum5 <= obj2.get().height + closure_9;
                  }
                  tmp3 = tmp9;
                }
                return tmp3;
              }
            }
          }
        }
        flag = false;
        return false;
      }
    }
  }
  let items25 = [tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100];
  VoicePanelVideoRendererTsx9.__closure = items25;
  VoicePanelVideoRendererTsx9.__workletHash = 3015224188791;
  VoicePanelVideoRendererTsx9.__initData = tmp89;
  const items26 = [derivedValue1, sharedValue2, sharedValue3, sharedValue4, derivedValue, sharedValue1, derivedValue2];
  const callback4 = obj2.useCallback(VoicePanelVideoRendererTsx9, items26);
  closure_130_20 = callback4;
  const items27 = [closure_24, sharedValue5, sharedValue6, callback2, sharedValue2, derivedValue2, sharedValue1, derivedValue, sharedValue3, require("spring/spring").withSpring, tmp60, sharedValue4];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  selfId = undefined;
  PixelRatio = undefined;
  VoicePanelModes = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  [tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113] = items27;
  class VoicePanelVideoRendererTsx10 {
    constructor() {
      if (closure_0.get() <= 0) {
        obj2 = closure_1;
        if (closure_1.get()) {
          flag = false;
          result = obj2.set(false);
          tmp6 = closure_2;
          str2 = "cover";
          tmp7 = closure_2("cover");
          return;
        } else {
          obj = closure_3;
          tmp2 = closure_4;
          value = closure_3.get();
          if (value < closure_4.get()) {
            tmp3 = closure_2;
            str = "fit";
            tmp4 = closure_2("fit");
          } else {
            tmp8 = globalThis;
            _Math = Math;
            tmp9 = closure_5;
            tmp10 = closure_6;
            num = 2;
            bound = Math.max(0, (closure_5.get().height - closure_6.get().height / obj.get()) / 2);
            _Math2 = Math;
            bound1 = Math.max(0, (closure_5.get().width - closure_6.get().width / obj.get()) / 2);
            tmp13 = closure_7;
            tmp14 = closure_8;
            _Math3 = Math;
            _Math4 = Math;
            tmp15 = -bound1;
            tmp16 = closure_9;
            result1 = closure_7.set(closure_8(Math.min(bound1, Math.max(tmp15, closure_7.get())), closure_9));
            tmp18 = closure_10;
            _Math5 = Math;
            _Math6 = Math;
            tmp19 = -bound;
            result2 = closure_10.set(closure_8(Math.min(bound, Math.max(tmp19, closure_10.get())), closure_9));
          }
        }
      }
      return;
    }
  }
  const items28 = [tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113];
  VoicePanelVideoRendererTsx10.__closure = items28;
  VoicePanelVideoRendererTsx10.__workletHash = 11684763008226;
  VoicePanelVideoRendererTsx10.__initData = tmp102;
  const items29 = [derivedValue2, sharedValue5, sharedValue6, sharedValue2, sharedValue1, derivedValue, sharedValue3, sharedValue4, callback2];
  const callback5 = obj2.useCallback(VoicePanelVideoRendererTsx10, items29);
  closure_130_21 = callback5;
  const tmp2Result40 = require("../../../../../_runtime/metro/01652__.js");
  const items30 = [closure_25, focused, id, derivedValue3, sharedValue8];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp115, tmp116, tmp117, tmp118, tmp119] = items30;
  class VoicePanelVideoRendererTsx11 {
    constructor() {
      value = closure_0.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      tmp3 = id === closure_1;
      if (tmp3) {
        tmp4 = closure_2;
        value1 = closure_2.get();
        value2 = !value1;
        if (value1) {
          tmp7 = closure_3;
          value2 = closure_3.get();
        }
        tmp3 = value2;
      }
      return tmp3;
    }
  }
  const items31 = [tmp116, tmp117, tmp118, tmp119];
  VoicePanelVideoRendererTsx11.__closure = items31;
  VoicePanelVideoRendererTsx11.__workletHash = 4360121383731;
  VoicePanelVideoRendererTsx11.__initData = tmp115;
  const items32 = [closure_26, context1.setIsFocusedVideoZoomed];
  _require = undefined;
  [tmp120, tmp121] = items32;
  class VoicePanelVideoRendererTsx12 {
    constructor(arg0, arg1) {
      if (id !== arg1) {
        tmp = closure_0;
        tmp2 = closure_0(id);
      }
      return;
    }
  }
  const items33 = [tmp121];
  VoicePanelVideoRendererTsx12.__closure = items33;
  VoicePanelVideoRendererTsx12.__workletHash = 8695485084164;
  VoicePanelVideoRendererTsx12.__initData = tmp120;
  const animatedReaction2 = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(VoicePanelVideoRendererTsx11, VoicePanelVideoRendererTsx12);
  const tmp2Result41 = require("../../../../../_runtime/metro/01652__.js");
  const items34 = [closure_27, focused, id];
  _require = undefined;
  importDefault = undefined;
  [tmp123, tmp124, tmp125] = items34;
  class VoicePanelVideoRendererTsx13 {
    constructor() {
      value = closure_0.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return id === closure_1;
    }
  }
  const items35 = [tmp124, tmp125];
  VoicePanelVideoRendererTsx13.__closure = items35;
  VoicePanelVideoRendererTsx13.__workletHash = 15206589462065;
  VoicePanelVideoRendererTsx13.__initData = tmp123;
  const items36 = [closure_28, callback3];
  _require = undefined;
  [tmp126, tmp127] = items36;
  class VoicePanelVideoRendererTsx14 {
    constructor(arg0, arg1) {
      if (id !== arg1) {
        tmp = closure_0;
        tmp2 = closure_0();
      }
      return;
    }
  }
  const items37 = [tmp127];
  VoicePanelVideoRendererTsx14.__closure = items37;
  VoicePanelVideoRendererTsx14.__workletHash = 16431665409987;
  VoicePanelVideoRendererTsx14.__initData = tmp126;
  const animatedReaction3 = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(VoicePanelVideoRendererTsx13, VoicePanelVideoRendererTsx14);
  const tmp2Result42 = require("../../../../../_runtime/metro/01652__.js");
  const items38 = [closure_29, mode];
  _require = undefined;
  [tmp129, tmp130] = items38;
  class VoicePanelVideoRendererTsx15 {
    constructor() {
      return closure_0.get();
    }
  }
  const items39 = [tmp130];
  VoicePanelVideoRendererTsx15.__closure = items39;
  VoicePanelVideoRendererTsx15.__workletHash = 14534028634616;
  VoicePanelVideoRendererTsx15.__initData = tmp129;
  const items40 = [closure_30, callback3];
  _require = undefined;
  [tmp131, tmp132] = items40;
  class VoicePanelVideoRendererTsx16 {
    constructor(arg0, arg1) {
      if (id !== arg1) {
        tmp = closure_0;
        tmp2 = closure_0();
      }
      return;
    }
  }
  const items41 = [tmp132];
  VoicePanelVideoRendererTsx16.__closure = items41;
  VoicePanelVideoRendererTsx16.__workletHash = 1931345572065;
  VoicePanelVideoRendererTsx16.__initData = tmp131;
  const animatedReaction4 = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(VoicePanelVideoRendererTsx15, VoicePanelVideoRendererTsx16);
  const tmp2Result43 = require("../../../../../_runtime/metro/01652__.js");
  const items42 = [closure_31, sharedValue1];
  _require = undefined;
  [tmp134, tmp135] = items42;
  class VoicePanelVideoRendererTsx17 {
    constructor() {
      return closure_0.get();
    }
  }
  const items43 = [tmp135];
  VoicePanelVideoRendererTsx17.__closure = items43;
  VoicePanelVideoRendererTsx17.__workletHash = 1085954870394;
  VoicePanelVideoRendererTsx17.__initData = tmp134;
  const items44 = [closure_32, sharedValue9, callback3];
  _require = undefined;
  importDefault = undefined;
  [tmp136, tmp137, tmp138] = items44;
  class VoicePanelVideoRendererTsx18 {
    constructor(arg0, arg1) {
      if (null != closure_0) {
        tmp = id;
        tmp2 = arg1;
        width = undefined;
        if (arg1 != null) {
          width = arg1.width;
        }
        tmp4 = id.width === width;
        if (tmp4) {
          height = undefined;
          if (arg1 != null) {
            height = arg1.height;
          }
          tmp4 = id.height === height;
        }
        if (!tmp4) {
          tmp6 = closure_1;
          tmp7 = closure_1();
        }
      }
      return;
    }
  }
  const items45 = [tmp137, tmp138];
  VoicePanelVideoRendererTsx18.__closure = items45;
  VoicePanelVideoRendererTsx18.__workletHash = 15050542710807;
  VoicePanelVideoRendererTsx18.__initData = tmp136;
  const animatedReaction5 = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(VoicePanelVideoRendererTsx17, VoicePanelVideoRendererTsx18);
  const tmp2Result44 = require("../../../../../_runtime/metro/01652__.js");
  const items46 = [closure_33, derivedValue1];
  _require = undefined;
  [tmp140, tmp141] = items46;
  class VoicePanelVideoRendererTsx19 {
    constructor() {
      return closure_0.get();
    }
  }
  const items47 = [tmp141];
  VoicePanelVideoRendererTsx19.__closure = items47;
  VoicePanelVideoRendererTsx19.__workletHash = 8351263458932;
  VoicePanelVideoRendererTsx19.__initData = tmp140;
  const items48 = [closure_34, sharedValue9, callback2];
  _require = undefined;
  importDefault = undefined;
  [tmp142, tmp143, tmp144] = items48;
  class VoicePanelVideoRendererTsx20 {
    constructor(arg0, arg1) {
      value = closure_0.get();
      tmp2 = "cover" === value;
      if (tmp2) {
        tmp3 = id;
        tmp4 = arg1;
        tmp2 = id !== arg1;
      }
      if (tmp2) {
        tmp5 = closure_1;
        tmp6 = closure_1(value);
      }
      return;
    }
  }
  const items49 = [tmp143, tmp144];
  VoicePanelVideoRendererTsx20.__closure = items49;
  VoicePanelVideoRendererTsx20.__workletHash = 16141218680131;
  VoicePanelVideoRendererTsx20.__initData = tmp142;
  const animatedReaction6 = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(VoicePanelVideoRendererTsx19, VoicePanelVideoRendererTsx20);
  const tmp2Result45 = require("../../../../../_runtime/metro/01652__.js");
  const items50 = [closure_35, sharedValue6];
  _require = undefined;
  [tmp146, tmp147] = items50;
  class VoicePanelVideoRendererTsx21 {
    constructor() {
      return closure_0.get();
    }
  }
  const items51 = [tmp147];
  VoicePanelVideoRendererTsx21.__closure = items51;
  VoicePanelVideoRendererTsx21.__workletHash = 11608469134527;
  VoicePanelVideoRendererTsx21.__initData = tmp146;
  const items52 = [closure_36, require("../../../../../_runtime/metro/01705__.js").scheduleOnRN, require("HapticUtils").triggerHapticFeedback, require("HapticUtils").HapticFeedbackTypes];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp148, tmp149, tmp150, tmp151] = items52;
  class VoicePanelVideoRendererTsx22 {
    constructor(arg0, arg1) {
      tmp = id !== arg1 && id;
      if (tmp) {
        tmp2 = closure_0;
        tmp3 = closure_1;
        tmp4 = closure_2;
        tmp5 = closure_0(closure_1, closure_2.IMPACT_LIGHT);
      }
      return;
    }
  }
  const items53 = [tmp149, tmp150, tmp151];
  VoicePanelVideoRendererTsx22.__closure = items53;
  VoicePanelVideoRendererTsx22.__workletHash = 639996379350;
  VoicePanelVideoRendererTsx22.__initData = tmp148;
  const animatedReaction7 = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(VoicePanelVideoRendererTsx21, VoicePanelVideoRendererTsx22);
  const items54 = [tmp13, dismissToPIPGestureRef, focused, id, sharedValue2, sharedValue3, sharedValue4, callback3, sharedValue5, sharedValue9, derivedValue, sharedValue6, callback4, callback5, sharedValue7, sharedValue8, derivedValue3, setFocused, hideControls, controlsSpecs, showControls, derivedValue2];
  const memo = obj2.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const Gesture2 = LegacyBaseButton.Gesture;
    const Gesture3 = LegacyBaseButton.Gesture;
    const TapResult = Gesture3.Tap();
    items = [closure_37];
    [tmp3] = items;
    class VoicePanelVideoRendererTsx23 {
      constructor(arg0, arg1) {
        return arg1.fail();
      }
    }
    VoicePanelVideoRendererTsx23.__workletHash = 9045365241060;
    VoicePanelVideoRendererTsx23.__initData = tmp3;
    const numberOfTapsResult = Gesture3.Tap().numberOfTaps(2);
    const items1 = [closure_38, closure_1_18, closure_1_19, c1, c0, _mod1705.scheduleOnRN, c5];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items1;
    class VoicePanelVideoRendererTsx24 {
      constructor() {
        if (closure_0.get()) {
          tmp3 = closure_2;
          value = closure_2.get();
          tmp5 = null;
          id = undefined;
          if (value != null) {
            id = value.id;
          }
          if (id !== closure_3) {
            tmp11 = closure_4;
            tmp12 = closure_5;
            tmp13 = closure_4(closure_5, tmp7);
          } else {
            tmp8 = closure_4;
            tmp9 = closure_5;
            tmp10 = closure_4(closure_5, null);
          }
        } else {
          tmp = closure_1;
          tmp2 = closure_1();
        }
        return;
      }
    }
    const items2 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
    VoicePanelVideoRendererTsx24.__closure = items2;
    VoicePanelVideoRendererTsx24.__workletHash = 16798933585555;
    VoicePanelVideoRendererTsx24.__initData = tmp6;
    const onTouchesMoveResult = Gesture3.Tap().numberOfTaps(2).onTouchesMove(VoicePanelVideoRendererTsx23);
    const Gesture4 = LegacyBaseButton.Gesture;
    const onStartResult = Gesture3.Tap().numberOfTaps(2).onTouchesMove(VoicePanelVideoRendererTsx23).onStart(VoicePanelVideoRendererTsx24);
    const items3 = [closure_39];
    [tmp14] = items3;
    class VoicePanelVideoRendererTsx25 {
      constructor(arg0, arg1) {
        return arg1.fail();
      }
    }
    VoicePanelVideoRendererTsx25.__workletHash = 14567264793250;
    VoicePanelVideoRendererTsx25.__initData = tmp14;
    const TapResult1 = Gesture4.Tap();
    const items4 = [closure_40, c7, VoicePanelControlsModes, _mod1705.scheduleOnRN, c8, c6];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items4;
    class VoicePanelVideoRendererTsx26 {
      constructor() {
        if (closure_0.get().mode === closure_1.HIDDEN) {
          tmp4 = closure_2;
          tmp5 = closure_3;
          tmp6 = closure_2(closure_3, { debounce: true });
        } else {
          tmp = closure_2;
          tmp2 = closure_4;
          tmp3 = closure_2(closure_4, { debounce: true });
        }
        return;
      }
    }
    const items5 = [tmp17, tmp18, tmp19, tmp20, tmp21];
    VoicePanelVideoRendererTsx26.__closure = items5;
    VoicePanelVideoRendererTsx26.__workletHash = 2888366736852;
    VoicePanelVideoRendererTsx26.__initData = tmp16;
    const onTouchesMoveResult1 = Gesture4.Tap().onTouchesMove(VoicePanelVideoRendererTsx25);
    const tmp15 = c6;
    const Gesture5 = LegacyBaseButton.Gesture;
    const ExclusiveResult = Gesture2.Exclusive(onStartResult, Gesture4.Tap().onTouchesMove(VoicePanelVideoRendererTsx25).onStart(VoicePanelVideoRendererTsx26));
    const PinchResult = Gesture5.Pinch();
    const tmp23 = c2;
    const items6 = [closure_41, c1, c0];
    c0 = undefined;
    c1 = undefined;
    [tmp24, tmp25, tmp26] = items6;
    class VoicePanelVideoRendererTsx27 {
      constructor(arg0, arg1) {
        value = closure_0.get();
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        if (id !== closure_1) {
          tmp3 = arg1;
          failResult = arg1.fail();
        }
        return;
      }
    }
    const items7 = [tmp25, tmp26];
    VoicePanelVideoRendererTsx27.__closure = items7;
    VoicePanelVideoRendererTsx27.__workletHash = 3856811066661;
    VoicePanelVideoRendererTsx27.__initData = tmp24;
    const enabledResult = Gesture5.Pinch().enabled(!c2);
    const items8 = [closure_42, sharedValue2, closure_1_15, closure_1_16];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp30, tmp31, tmp32, tmp33] = items8;
    class VoicePanelVideoRendererTsx28 {
      constructor() {
        result = closure_0.set(closure_0.get() + 1);
        result1 = closure_1.set(false);
        result2 = closure_2.set(null);
        return;
      }
    }
    const items9 = [tmp31, tmp32, tmp33];
    VoicePanelVideoRendererTsx28.__closure = items9;
    VoicePanelVideoRendererTsx28.__workletHash = 11030536612419;
    VoicePanelVideoRendererTsx28.__initData = tmp30;
    const onTouchesDownResult = Gesture5.Pinch().enabled(!c2).onTouchesDown(VoicePanelVideoRendererTsx27);
    const items10 = [closure_43, c9, getScaleChangeWithOverscroll, closure_1_17, c3, c10, onReady, c13, closure_1_20];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    [tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49] = items10;
    class VoicePanelVideoRendererTsx29 {
      constructor(arg0) {
        value = closure_0.get();
        value1 = closure_0.get();
        result = closure_0.set(value * closure_1(value1, arg0.scaleChange, closure_2.get()));
        diff = arg0.focalX - closure_3.get().width / 2;
        diff1 = arg0.focalY - closure_3.get().height / 2;
        diff2 = arg0.scaleChange - 1;
        result1 = -1 * diff * diff2 / closure_0.get();
        diff3 = arg0.scaleChange - 1;
        result2 = -1 * diff1 * diff3 / closure_0.get();
        result3 = closure_4.set(closure_4.get() + result1);
        result4 = closure_5.set(closure_5.get() + result2);
        result5 = closure_6.set(closure_7());
        return;
      }
    }
    const items11 = [tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49];
    VoicePanelVideoRendererTsx29.__closure = items11;
    VoicePanelVideoRendererTsx29.__workletHash = 2134737536500;
    VoicePanelVideoRendererTsx29.__initData = tmp41;
    const onStartResult1 = Gesture5.Pinch().enabled(!c2).onTouchesDown(VoicePanelVideoRendererTsx27).onStart(VoicePanelVideoRendererTsx28);
    const items12 = [closure_44, sharedValue2, closure_1_21];
    c0 = undefined;
    c1 = undefined;
    [tmp51, tmp52, tmp53] = items12;
    class VoicePanelVideoRendererTsx30 {
      constructor() {
        result = closure_0.set(closure_0.get() - 1);
        tmp2 = closure_1();
        return;
      }
    }
    const items13 = [tmp52, tmp53];
    VoicePanelVideoRendererTsx30.__closure = items13;
    VoicePanelVideoRendererTsx30.__workletHash = 8791722037916;
    VoicePanelVideoRendererTsx30.__initData = tmp51;
    const onChangeResult = Gesture5.Pinch().enabled(!c2).onTouchesDown(VoicePanelVideoRendererTsx27).onStart(VoicePanelVideoRendererTsx28).onChange(VoicePanelVideoRendererTsx29);
    const Gesture6 = LegacyBaseButton.Gesture;
    const onEndResult = Gesture5.Pinch().enabled(!c2).onTouchesDown(VoicePanelVideoRendererTsx27).onStart(VoicePanelVideoRendererTsx28).onChange(VoicePanelVideoRendererTsx29).onEnd(VoicePanelVideoRendererTsx30);
    const PanResult = Gesture6.Pan();
    let result = Gesture6.Pan().enabled(!tmp23).requireExternalGestureToFail(c4);
    const enabledResult1 = Gesture6.Pan().enabled(!tmp23);
    const items14 = [closure_45, c1, c0];
    c0 = undefined;
    c1 = undefined;
    [tmp55, tmp56, tmp57] = items14;
    class VoicePanelVideoRendererTsx31 {
      constructor(arg0, arg1) {
        value = closure_0.get();
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        if (id !== closure_1) {
          tmp3 = arg1;
          failResult = arg1.fail();
        }
        return;
      }
    }
    const items15 = [tmp56, tmp57];
    VoicePanelVideoRendererTsx31.__closure = items15;
    VoicePanelVideoRendererTsx31.__workletHash = 13983458794067;
    VoicePanelVideoRendererTsx31.__initData = tmp55;
    const averageTouchesResult = result.averageTouches(true);
    const items16 = [closure_46, callback6, 250, closure_1_15];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp58, tmp59, tmp60, tmp61] = items16;
    class VoicePanelVideoRendererTsx32 {
      constructor() {
        timestamp = Date.now();
        result = closure_2.set(timestamp - closure_0.get() <= closure_1);
        result1 = closure_0.set(Date.now());
        return;
      }
    }
    const items17 = [tmp59, tmp60, tmp61];
    VoicePanelVideoRendererTsx32.__closure = items17;
    VoicePanelVideoRendererTsx32.__workletHash = 3741241664930;
    VoicePanelVideoRendererTsx32.__initData = tmp58;
    const onTouchesDownResult1 = result.averageTouches(true).onTouchesDown(VoicePanelVideoRendererTsx31);
    const items18 = [closure_47, closure_1_15, _mod1705.scheduleOnRN, tmp15, sharedValue2, closure_1_16];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp62, tmp63, tmp64, tmp65, tmp66, tmp67] = items18;
    class VoicePanelVideoRendererTsx33 {
      constructor() {
        if (closure_0.get()) {
          tmp = closure_1;
          tmp2 = closure_2;
          tmp3 = closure_1(closure_2);
        }
        result = closure_3.set(closure_3.get() + 1);
        result1 = closure_4.set(null);
        return;
      }
    }
    const items19 = [tmp63, tmp64, tmp65, tmp66, tmp67];
    VoicePanelVideoRendererTsx33.__closure = items19;
    VoicePanelVideoRendererTsx33.__workletHash = 9000494503209;
    VoicePanelVideoRendererTsx33.__initData = tmp62;
    const onBeginResult = result.averageTouches(true).onTouchesDown(VoicePanelVideoRendererTsx31).onBegin(VoicePanelVideoRendererTsx32);
    const items20 = [closure_48, closure_1_15, 0.0075, c9, getScaleChangeWithOverscroll, closure_1_17, c10, onReady, c13, closure_1_20];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    [tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77] = items20;
    class VoicePanelVideoRendererTsx34 {
      constructor(arg0) {
        if (closure_0.get()) {
          tmp8 = closure_1;
          num = 1;
          tmp10 = closure_2;
          sum = 1 + arg0.changeY * closure_1;
          tmp12 = closure_3;
          value = closure_2.get();
          tmp14 = closure_4;
          value1 = closure_2.get();
          result = closure_2.set(value * closure_3(value1, sum, closure_4.get()));
        } else {
          tmp = closure_5;
          tmp3 = closure_2;
          value2 = closure_5.get();
          result1 = closure_5.set(value2 + arg0.changeX / closure_2.get());
          tmp5 = closure_6;
          value3 = closure_6.get();
          result2 = closure_6.set(value3 + arg0.changeY / closure_2.get());
        }
        result3 = closure_7.set(closure_8());
        return;
      }
    }
    const items21 = [tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77];
    VoicePanelVideoRendererTsx34.__closure = items21;
    VoicePanelVideoRendererTsx34.__workletHash = 17349291779562;
    VoicePanelVideoRendererTsx34.__initData = tmp68;
    const onStartResult2 = result.averageTouches(true).onTouchesDown(VoicePanelVideoRendererTsx31).onBegin(VoicePanelVideoRendererTsx32).onStart(VoicePanelVideoRendererTsx33);
    const items22 = [closure_49, sharedValue2, c10, spring_spring.withSpring, 0.05, c9, SCALE_PHYSICS, onReady, closure_1_21];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    [tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86] = items22;
    class VoicePanelVideoRendererTsx35 {
      constructor(arg0) {
        result = closure_0.set(closure_0.get() - 1);
        value = closure_1.get();
        result1 = arg0.velocityX * closure_3;
        result2 = closure_1.set(closure_2(value + result1 / closure_4.get(), closure_5));
        value1 = closure_6.get();
        result3 = arg0.velocityY * closure_3;
        result4 = closure_6.set(closure_2(value1 + result3 / closure_4.get(), closure_5));
        tmp8 = closure_7();
        return;
      }
    }
    const items23 = [tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86];
    VoicePanelVideoRendererTsx35.__closure = items23;
    VoicePanelVideoRendererTsx35.__workletHash = 11237881237266;
    VoicePanelVideoRendererTsx35.__initData = tmp78;
    const onChangeResult1 = result.averageTouches(true).onTouchesDown(VoicePanelVideoRendererTsx31).onBegin(VoicePanelVideoRendererTsx32).onStart(VoicePanelVideoRendererTsx33).onChange(VoicePanelVideoRendererTsx34);
    const items24 = [closure_50, closure_1_15];
    c0 = undefined;
    [tmp87, tmp88] = items24;
    class VoicePanelVideoRendererTsx36 {
      constructor() {
        result = closure_0.set(false);
        return;
      }
    }
    const items25 = [tmp88];
    VoicePanelVideoRendererTsx36.__closure = items25;
    VoicePanelVideoRendererTsx36.__workletHash = 14571201486970;
    VoicePanelVideoRendererTsx36.__initData = tmp87;
    return Gesture.Simultaneous(ExclusiveResult, onEndResult, result.averageTouches(true).onTouchesDown(VoicePanelVideoRendererTsx31).onBegin(VoicePanelVideoRendererTsx32).onStart(VoicePanelVideoRendererTsx33).onChange(VoicePanelVideoRendererTsx34).onEnd(VoicePanelVideoRendererTsx35).onFinalize(VoicePanelVideoRendererTsx36));
  }, items54);
  value = PixelRatio.get();
  c13 = value;
  const items55 = [streamId, isCamera, sharedValue2, sharedValue1, mode, value];
  callback6 = obj2.useCallback(() => {
    let tmp2 = null == c1;
    if (!tmp2) {
      tmp2 = c2;
    }
    if (!tmp2) {
      tmp2 = selfId.get() !== VoicePanelModes.PANEL;
    }
    if (!tmp2) {
      const size = { width: _undefined7.get().width * c13, height: _undefined7.get().height * c13 };
      VideoActionCreators.updateVideoSize(c1, size, sharedValue2.get());
    }
  }, items55);
  const tmp2Result46 = require("../../../../../_runtime/metro/01652__.js");
  const items56 = [closure_55, sharedValue2, sharedValue1, mode];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp156, tmp157, tmp158, tmp159] = items56;
  class VoicePanelVideoRendererTsx41 {
    constructor() {
      items = [, , ];
      items[0] = closure_0.get();
      items[1] = closure_1.get();
      items[2] = closure_2.get();
      return items;
    }
  }
  const items57 = [tmp157, tmp158, tmp159];
  VoicePanelVideoRendererTsx41.__closure = items57;
  VoicePanelVideoRendererTsx41.__workletHash = 12062588170367;
  VoicePanelVideoRendererTsx41.__initData = tmp156;
  const items58 = [closure_56, streamId, require("cheapWorkletShallowEqual").cheapWorkletShallowEqual, require("../../../../../_runtime/metro/01705__.js").scheduleOnRN, callback6];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp160, tmp161, tmp162, tmp163, tmp164] = items58;
  class VoicePanelVideoRendererTsx42 {
    constructor(arg0, arg1) {
      if (null != closure_0) {
        tmp = arg1;
        tmp2 = closure_1;
        tmp3 = id;
        if (!tmp2(id, tmp)) {
          tmp4 = closure_2;
          tmp5 = closure_3;
          tmp6 = closure_2(closure_3);
        }
      }
      return;
    }
  }
  const items59 = [tmp161, tmp162, tmp163, tmp164];
  VoicePanelVideoRendererTsx42.__closure = items59;
  VoicePanelVideoRendererTsx42.__workletHash = 3995919158814;
  VoicePanelVideoRendererTsx42.__initData = tmp160;
  const animatedReaction8 = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(VoicePanelVideoRendererTsx41, VoicePanelVideoRendererTsx42);
  const items60 = [callback6];
  const effect = obj2.useEffect(() => {
    closure_0 = borderWidth(_undefined2[24]).addOnPipModeChangedListener((arg0) => {
      if (!arg0) {
        callback6();
      }
    });
    return () => {
      if (closure_0 != null) {
        closure_0.remove();
      }
    };
  }, items60);
  const tmp2Result47 = require("../../../../../_runtime/metro/01652__.js");
  const items61 = [closure_57, sharedValue1, pIPState, c9, sharedValue2, sharedValue, sharedValue3, sharedValue4, flag];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  selfId = undefined;
  PixelRatio = undefined;
  VoicePanelModes = undefined;
  c7 = undefined;
  [tmp167, tmp168, tmp169, tmp170, tmp171, tmp172, tmp173, tmp174, tmp175] = items61;
  class VoicePanelVideoRendererTsx43 {
    constructor() {
      value = closure_0.get();
      ({ width, height } = value);
      size = closure_1;
      result3 = height;
      result1 = width;
      if (closure_1.mode === closure_2.IN_APP) {
        scale = size.scale;
        value1 = scale.get();
        if (width > height) {
          tmp8 = closure_3;
          result = width * (size.height * value1 / height);
          result1 = result / closure_3.get();
          result2 = size.height * value1;
          result3 = result2 / closure_3.get();
        } else {
          tmp5 = closure_3;
          result4 = height * (size.width * value1 / width);
          result3 = result4 / closure_3.get();
          result5 = size.width * value1;
          result1 = result5 / closure_3.get();
        }
      }
      size1 = { width: result1, height: result3, opacity: null, transform: null };
      num = 1;
      num2 = 1;
      if (closure_4.get()) {
        num2 = 0;
      }
      size1.opacity = num2;
      obj1 = { scale: closure_3.get() };
      items = [, , , ];
      items[0] = obj1;
      obj5 = { translateX: closure_5.get() };
      items[1] = obj5;
      obj6 = { translateY: closure_6.get() };
      items[2] = obj6;
      if (closure_7) {
        num = -1;
      }
      items[3] = { scaleX: num };
      size1.transform = items;
      return size1;
    }
  }
  const items62 = [tmp168, tmp169, tmp170, tmp171, tmp172, tmp173, tmp174, tmp175];
  VoicePanelVideoRendererTsx43.__closure = items62;
  VoicePanelVideoRendererTsx43.__workletHash = 8500811993436;
  VoicePanelVideoRendererTsx43.__initData = tmp167;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(VoicePanelVideoRendererTsx43);
  const tmp2Result48 = require("../../../../../_runtime/metro/01652__.js");
  const token = require("useToken").useToken(tmp5(575).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  const tmp2Result49 = require("useToken");
  let num = 0;
  if (mode.get() !== VoicePanelModes.PIP) {
    value2 = focused.get();
    let id1;
    if (value2 != null) {
      id1 = value2.id;
    }
    num = 0;
    if (id1 !== id) {
      num = 0.3;
    }
  }
  const sharedValue10 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(num);
  const tmp178 = VoicePanelModes;
  const tmp2Result50 = require("../../../../../_runtime/metro/01652__.js");
  const items63 = [closure_58, mode, tmp178, focused, id];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp182, tmp183, tmp184, tmp185, tmp186] = items63;
  class VoicePanelVideoRendererTsx44 {
    constructor() {
      obj = { inPip: closure_0.get() === closure_1.PIP, isFocused: null };
      value = closure_2.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      obj.isFocused = id === closure_3;
      return obj;
    }
  }
  const items64 = [tmp183, tmp184, tmp185, tmp186];
  VoicePanelVideoRendererTsx44.__closure = items64;
  VoicePanelVideoRendererTsx44.__workletHash = 11803304067139;
  VoicePanelVideoRendererTsx44.__initData = tmp182;
  const items65 = [closure_59, require("cheapWorkletShallowEqual").cheapWorkletShallowEqual, sharedValue10, require("../../../../../_runtime/metro/01652__.js").withDelay, require("timing/timing").withTiming];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp187, tmp188, tmp189, tmp190, tmp191] = items65;
  class VoicePanelVideoRendererTsx45 {
    constructor(arg0, arg1) {
      tmp2 = arg1;
      tmp = closure_0;
      if (!tmp(id, tmp2)) {
        if (!id.inPip) {
          if (!id.isFocused) {
            isFocused = undefined;
            if (arg1 != null) {
              isFocused = arg1.isFocused;
            }
            num = 0.3;
            flag = true;
            num2 = 0.3;
            tmp4 = closure_1;
            if (true === isFocused) {
              tmp5 = closure_2;
              tmp6 = closure_3;
              str = "animate-never";
              num3 = 300;
              num2 = closure_2(300, closure_3(0.3, { duration: 0 }, "animate-never"));
            }
            result = closure_1.set(num2);
          }
        }
        tmp8 = closure_1;
        num4 = 0;
        result1 = closure_1.set(0);
      }
      return;
    }
  }
  const items66 = [tmp188, tmp189, tmp190, tmp191];
  VoicePanelVideoRendererTsx45.__closure = items66;
  VoicePanelVideoRendererTsx45.__workletHash = 4081353667825;
  VoicePanelVideoRendererTsx45.__initData = tmp187;
  const animatedReaction9 = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(VoicePanelVideoRendererTsx44, VoicePanelVideoRendererTsx45);
  const tmp2Result51 = require("../../../../../_runtime/metro/01652__.js");
  const items67 = [closure_60, sharedValue6, 25, token, sharedValue10];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp193, tmp194, tmp195, tmp196, tmp197] = items67;
  class VoicePanelVideoRendererTsx46 {
    constructor() {
      if (closure_0.get()) {
        rect = { position: "absolute", top: 0, left: 0, bottom: 0, right: 0, borderWidth: null, overflow: "hidden", borderColor: "white", opacity: 0.5 };
        tmp3 = closure_1;
        rect.borderWidth = closure_1;
        rect1 = rect;
      } else {
        rect1 = { position: "absolute", top: -1, left: -1, bottom: -1, right: -1, borderWidth: 2, borderRadius: null, overflow: "hidden", borderColor: "white", opacity: null };
        tmp = closure_2;
        num = 2;
        rect1.borderRadius = closure_2 + 2;
        tmp2 = closure_3;
        rect1.opacity = closure_3.get();
      }
      return rect1;
    }
  }
  const items68 = [tmp194, tmp195, tmp196, tmp197];
  VoicePanelVideoRendererTsx46.__closure = items68;
  VoicePanelVideoRendererTsx46.__workletHash = 13057876235952;
  VoicePanelVideoRendererTsx46.__initData = tmp193;
  const items69 = [closure_61, layout, sharedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp199, tmp200, tmp201] = items69;
  class VoicePanelVideoRendererTsx47 {
    constructor(arg0) {
      return closure_0(id, closure_1.get());
    }
  }
  const items70 = [tmp200, tmp201];
  VoicePanelVideoRendererTsx47.__closure = items70;
  VoicePanelVideoRendererTsx47.__workletHash = 1306418724990;
  VoicePanelVideoRendererTsx47.__initData = tmp199;
  const items71 = [layout, sharedValue];
  const animatedStyle1 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(VoicePanelVideoRendererTsx46);
  const callback7 = obj2.useCallback(VoicePanelVideoRendererTsx47, items71);
  const obj7 = { gesture: memo, children: null };
  const obj8 = { style: null, layout: callback7, children: null };
  const items72 = [tmp.wrapper, id.style];
  obj8.style = items72;
  const obj9 = { style: null, layout: callback7, children: null };
  const items73 = [tmp.animatedWrapperStyles, animatedStyle];
  obj9.style = items73;
  const obj10 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId: null, onReady: null, onSize: null, style: null, layout: null };
  let tmp206 = null;
  if (!tmp11) {
    tmp206 = streamId;
  }
  obj10.streamId = tmp206;
  obj10.onReady = callback;
  obj10.onSize = callback1;
  obj10.style = tmp.video;
  obj10.layout = callback7;
  obj9.children = onReady(c13, obj10);
  const items74 = [onReady(module_1652.View, obj9), ];
  if (tmp13) {
    const obj11 = { animate: true, style: tmp.spinner };
    let tmp203Result = tmp203(tmp5(11933), obj11);
  } else {
    const obj12 = { style: animatedStyle1, layout: callback7, pointerEvents: "none" };
    tmp203Result = tmp203(tmp5(1652).View, obj12);
  }
  items74[1] = tmp203Result;
  obj8.children = items74;
  obj7.children = sharedValue2(module_1652.View, obj8);
  return onReady(require("LegacyBaseButton").GestureDetector, obj7);
});