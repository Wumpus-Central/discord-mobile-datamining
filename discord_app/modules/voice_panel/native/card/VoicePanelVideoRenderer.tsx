// discord_app/modules/voice_panel/native/card/VoicePanelVideoRenderer.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "useVideoSpinnerTimer";
import { PixelRatio } from "context";
import VoicePanelModes from "VoicePanelModes";
import { VoicePanelControlsModes } from "VoicePanelControlsModes";
import { VoicePanelPIPModes } from "VoicePanelPIPModes";
import { SCALE_PHYSICS } from "MIN_PAN_GESTURE_MOVE";
import jsxProd from "u";
import DCDVideoRenderer from "../../../video_calls/native/components/DCDVideoRenderer.tsx";
import createCacheKey from "createCacheKey";
import importDefaultResult from "module_4042";

let closure_12;
let unpackModuleId;
const require = arg1;
let c4 = importAllResult;
VoicePanelModes = VoicePanelModes.VoicePanelModes;
const MODE_CHANGE_PHYSICS = VoicePanelModes.MODE_CHANGE_PHYSICS;
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let c13 = 25;
let c14 = 0.05;
let c15 = 0.0075;
function getScaleChangeWithOverscroll(arg0, arg1, arg2) {
  if (arg0 >= arg2) {
    return arg1;
  } else {
    const diff = 1 - arg0;
    const _Math = Math;
    const diff1 = arg1 - 1;
    return 1 + diff1 * Math.max(0.1, 1 - diff * diff * 5);
  }
}
getScaleChangeWithOverscroll.__closure = { MIN_OVERSCROLL: 0.1, OVERSCOLL_INTENSITY_FACTOR: 5 };
getScaleChangeWithOverscroll.__workletHash = 8727721301304;
getScaleChangeWithOverscroll.__initData = { code: "function getScaleChangeWithOverscroll_VoicePanelVideoRendererTsx1(currentScale,scaleChange,fitScale){const{MIN_OVERSCROLL,OVERSCOLL_INTENSITY_FACTOR}=this.__closure;if(currentScale>=fitScale){return scaleChange;}const underScale=1-currentScale;const factor=Math.max(MIN_OVERSCROLL,1-underScale*underScale*OVERSCOLL_INTENSITY_FACTOR);return 1+(scaleChange-1)*factor;}" };
let closure_18 = createCacheKey.createStyles({ wrapper: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }, animatedWrapperStyles: { position: "absolute" }, video: { width: "100%", height: "100%" }, spinner: { position: "absolute", top: "50%", left: "50%", marginTop: -16, marginLeft: -16, height: 32, width: 32 } });
let closure_19 = { code: "function VoicePanelVideoRendererTsx2(){const{containerLayout,videoDimensions}=this.__closure;return Math.max(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);}" };
let closure_20 = { code: "function VoicePanelVideoRendererTsx3(){const{containerLayout,videoDimensions}=this.__closure;return Math.min(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);}" };
let closure_21 = { code: "function VoicePanelVideoRendererTsx4(){const{translateX,translateY,scale,fitScale,coverScale}=this.__closure;if(translateX.get()!==0||translateY.get()!==0){return false;}if(scale.get()===fitScale.get()||scale.get()===coverScale.get()){return true;}return false;}" };
let closure_22 = { code: "function VoicePanelVideoRendererTsx5(forcedMode){const{scale,withSpring,fitScale,MODE_CHANGE_PHYSICS,disableAnimations,coverScale,translateX,SCALE_PHYSICS,translateY,currentSizeThreshold}=this.__closure;if(forcedMode==='fit'){scale.set(withSpring(fitScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?'respect-motion-settings':'animate-never'));}else{scale.set(withSpring(coverScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?'respect-motion-settings':'animate-never'));}translateX.set(withSpring(0,SCALE_PHYSICS));translateY.set(withSpring(0,SCALE_PHYSICS));currentSizeThreshold.set(forcedMode);}" };
let closure_23 = { code: "function VoicePanelVideoRendererTsx6(){const{focused,id,videoDimensions,windowDimensions,isCamera,resetToDefaultSize}=this.__closure;var _focused$get;let resizeMode=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id?'fit':'cover';const videoLandscape=videoDimensions.get().width>=videoDimensions.get().height;const parentLandscape=windowDimensions.get().width>=windowDimensions.get().height;const matchingAspect=videoLandscape===parentLandscape;if(isCamera&&resizeMode==='fit'){if(matchingAspect){resizeMode='cover';}}resetToDefaultSize(resizeMode);}" };
let closure_24 = { code: "function VoicePanelVideoRendererTsx7(){const{containerLayout}=this.__closure;return containerLayout.get();}" };
let closure_25 = { code: "function VoicePanelVideoRendererTsx8(containerLayout,previous){const{cheapWorkletShallowEqual,focused,id,resetOnLayoutChange}=this.__closure;var _focused$get;if(cheapWorkletShallowEqual(containerLayout,previous!==null&&previous!==void 0?previous:undefined))return;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id)return;if(containerLayout!==previous&&previous!=null){resetOnLayoutChange();}}" };
let closure_26 = { code: "function VoicePanelVideoRendererTsx9(){const{coverScale,fitScale,MIN_ZOOM_FOR_COVER_SNAP_OFFSET,translateX,scale,translateY,SNAP_CENTER_THRESHOLD,containerLayout,videoDimensions,SNAP_EDGE_OUTER_THRESHOLD,SNAP_EDGE_INNER_THRESHOLD}=this.__closure;if(coverScale.get()<fitScale.get()+MIN_ZOOM_FOR_COVER_SNAP_OFFSET){return false;}const screenTranslateX=translateX.get()*scale.get();const screenTranslateY=translateY.get()*scale.get();if(screenTranslateX<-SNAP_CENTER_THRESHOLD||screenTranslateX>SNAP_CENTER_THRESHOLD||screenTranslateY<-SNAP_CENTER_THRESHOLD||screenTranslateY>SNAP_CENTER_THRESHOLD){return false;}const adjustedScreenTranslateX=screenTranslateX+(containerLayout.get().width-videoDimensions.get().width*scale.get())/2;const adjustedScreenTranslateY=screenTranslateY+(containerLayout.get().height-videoDimensions.get().height*scale.get())/2;const videoWidth=videoDimensions.get().width*scale.get();const videoHeight=videoDimensions.get().height*scale.get();if(videoHeight>=containerLayout.get().height&&adjustedScreenTranslateX>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateX<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth>=containerLayout.get().width-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth<=containerLayout.get().width+SNAP_EDGE_OUTER_THRESHOLD){return true;}if(videoWidth>=containerLayout.get().width&&adjustedScreenTranslateY>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateY<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight>=containerLayout.get().height-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight<=containerLayout.get().height+SNAP_EDGE_OUTER_THRESHOLD){return true;}return false;}" };
let closure_27 = { code: "function VoicePanelVideoRendererTsx10(){const{numGesturesActive,isInSnap,resetToDefaultSize,scale,fitScale,videoDimensions,containerLayout,translateX,withSpring,SCALE_PHYSICS,translateY}=this.__closure;if(numGesturesActive.get()>0){return;}if(isInSnap.get()){isInSnap.set(false);resetToDefaultSize('cover');return;}if(scale.get()<fitScale.get()){resetToDefaultSize('fit');return;}const maxTranslateY=Math.max(0,(videoDimensions.get().height-containerLayout.get().height/scale.get())/2);const maxTranslateX=Math.max(0,(videoDimensions.get().width-containerLayout.get().width/scale.get())/2);translateX.set(withSpring(Math.min(maxTranslateX,Math.max(-maxTranslateX,translateX.get())),SCALE_PHYSICS));translateY.set(withSpring(Math.min(maxTranslateY,Math.max(-maxTranslateY,translateY.get())),SCALE_PHYSICS));}" };
let closure_28 = { code: "function VoicePanelVideoRendererTsx11(){const{focused,id,isInDefaultZoom,isInPanToZoom}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id&&(!isInDefaultZoom.get()||isInPanToZoom.get());}" };
let closure_29 = { code: "function VoicePanelVideoRendererTsx12(isFocusedZoomed,previous){const{setIsFocusedVideoZoomed}=this.__closure;if(isFocusedZoomed===previous){return;}setIsFocusedVideoZoomed(isFocusedZoomed);}" };
let closure_30 = { code: "function VoicePanelVideoRendererTsx13(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}" };
let closure_31 = { code: "function VoicePanelVideoRendererTsx14(isFocused,previous){const{resetOnLayoutChange}=this.__closure;if(isFocused===previous){return;}resetOnLayoutChange();}" };
let closure_32 = { code: "function VoicePanelVideoRendererTsx15(){const{mode}=this.__closure;return mode.get();}" };
let closure_33 = { code: "function VoicePanelVideoRendererTsx16(mode,previous){const{resetOnLayoutChange}=this.__closure;if(mode===previous){return;}resetOnLayoutChange();}" };
let closure_34 = { code: "function VoicePanelVideoRendererTsx17(){const{videoDimensions}=this.__closure;return videoDimensions.get();}" };
let closure_35 = { code: "function VoicePanelVideoRendererTsx18(layout,previous){const{currentSizeThreshold,resetOnLayoutChange}=this.__closure;if(currentSizeThreshold==null){return;}if(layout.width===(previous===null||previous===void 0?void 0:previous.width)&&layout.height===(previous===null||previous===void 0?void 0:previous.height)){return;}resetOnLayoutChange();}" };
let closure_36 = { code: "function VoicePanelVideoRendererTsx19(){const{coverScale}=this.__closure;return coverScale.get();}" };
let closure_37 = { code: "function VoicePanelVideoRendererTsx20(current,previous){const{currentSizeThreshold,resetToDefaultSize}=this.__closure;const _currentSizeThreshold=currentSizeThreshold.get();if(_currentSizeThreshold!=='cover'){return;}if(current===previous){return;}resetToDefaultSize(_currentSizeThreshold);}" };
let closure_38 = { code: "function VoicePanelVideoRendererTsx21(){const{isInSnap}=this.__closure;return isInSnap.get();}" };
let closure_39 = { code: "function VoicePanelVideoRendererTsx22(current,previous){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current===previous){return;}if(!current){return;}runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}" };
let closure_40 = { code: "function VoicePanelVideoRendererTsx23(){const{isInDefaultZoom,resetOnLayoutChange,focused,id,runOnJS,setFocused}=this.__closure;var _focused$get;if(!isInDefaultZoom.get()){resetOnLayoutChange();return;}if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){runOnJS(setFocused)(id);}else{runOnJS(setFocused)(null);}}" };
let closure_41 = { code: "function VoicePanelVideoRendererTsx24(e,manager){return manager.fail();}" };
let closure_42 = { code: "function VoicePanelVideoRendererTsx25(){const{controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}" };
let closure_43 = { code: "function VoicePanelVideoRendererTsx26(e,manager){return manager.fail();}" };
let closure_44 = { code: "function VoicePanelVideoRendererTsx27(){const{numGesturesActive,handleMovementEnd}=this.__closure;numGesturesActive.set(numGesturesActive.get()-1);handleMovementEnd();}" };
let closure_45 = { code: "function VoicePanelVideoRendererTsx28(event){const{scale,getScaleChangeWithOverscroll,fitScale,containerLayout,translateX,translateY,isInSnap,isInCoverSnap}=this.__closure;scale.set(scale.get()*getScaleChangeWithOverscroll(scale.get(),event.scaleChange,fitScale.get()));const startingFocalFromCenterX=event.focalX-containerLayout.get().width/2;const startingFocalFromCenterY=event.focalY-containerLayout.get().height/2;const zoomCenteringX=-1*startingFocalFromCenterX*(event.scaleChange-1)/scale.get();const zoomCenteringY=-1*startingFocalFromCenterY*(event.scaleChange-1)/scale.get();translateX.set(translateX.get()+zoomCenteringX);translateY.set(translateY.get()+zoomCenteringY);isInSnap.set(isInCoverSnap());}" };
let closure_46 = { code: "function VoicePanelVideoRendererTsx29(){const{numGesturesActive,isInPanToZoom,currentSizeThreshold}=this.__closure;numGesturesActive.set(numGesturesActive.get()+1);isInPanToZoom.set(false);currentSizeThreshold.set(null);}" };
let closure_47 = { code: "function VoicePanelVideoRendererTsx30(event,manager){const{focused,id}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){manager.fail();}}" };
let closure_48 = { code: "function VoicePanelVideoRendererTsx31(){const{isInPanToZoom}=this.__closure;isInPanToZoom.set(false);}" };
let closure_49 = { code: "function VoicePanelVideoRendererTsx32(event){const{numGesturesActive,translateX,withSpring,FLING_VELOCITY_SCALING,scale,SCALE_PHYSICS,translateY,handleMovementEnd}=this.__closure;numGesturesActive.set(numGesturesActive.get()-1);translateX.set(withSpring(translateX.get()+event.velocityX*FLING_VELOCITY_SCALING/scale.get(),SCALE_PHYSICS));translateY.set(withSpring(translateY.get()+event.velocityY*FLING_VELOCITY_SCALING/scale.get(),SCALE_PHYSICS));handleMovementEnd();}" };
let closure_50 = { code: "function VoicePanelVideoRendererTsx33(event){const{isInPanToZoom,PAN_TO_ZOOM_SCALE_FACTOR,scale,getScaleChangeWithOverscroll,fitScale,translateX,translateY,isInSnap,isInCoverSnap}=this.__closure;if(isInPanToZoom.get()){const scaleChange=1+event.changeY*PAN_TO_ZOOM_SCALE_FACTOR;scale.set(scale.get()*getScaleChangeWithOverscroll(scale.get(),scaleChange,fitScale.get()));}else{translateX.set(translateX.get()+event.changeX/scale.get());translateY.set(translateY.get()+event.changeY/scale.get());}isInSnap.set(isInCoverSnap());}" };
let closure_51 = { code: "function VoicePanelVideoRendererTsx34(){const{isInPanToZoom,runOnJS,hideControls,numGesturesActive,currentSizeThreshold}=this.__closure;if(isInPanToZoom.get()){runOnJS(hideControls)();}numGesturesActive.set(numGesturesActive.get()+1);currentSizeThreshold.set(null);}" };
let closure_52 = { code: "function VoicePanelVideoRendererTsx35(){const{lastTapTimestamp,PAN_TO_ZOOM_TAP_TIME_MILLIS,isInPanToZoom}=this.__closure;const hasRecentTap=Date.now()-lastTapTimestamp.get()<=PAN_TO_ZOOM_TAP_TIME_MILLIS;isInPanToZoom.set(hasRecentTap);lastTapTimestamp.set(Date.now());}" };
let closure_53 = { code: "function VoicePanelVideoRendererTsx36(event,manager){const{focused,id}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){manager.fail();return;}}" };
function shouldMakeActive(mode) {
  let focusedId;
  let isScrollVisible;
  ({ focusedId, isScrollVisible } = mode);
  let tmp = !isScrollVisible;
  if (isScrollVisible) {
    tmp = mode.mode === VoicePanelModes.PIP;
  }
  if (!tmp) {
    tmp = null != focusedId && focusedId !== mode.selfId;
    const tmp3 = null != focusedId && focusedId !== mode.selfId;
  }
  return !tmp;
}
shouldMakeActive.__closure = { VoicePanelModes };
shouldMakeActive.__workletHash = 14556501664557;
shouldMakeActive.__initData = { code: "function shouldMakeActive_VoicePanelVideoRendererTsx37({mode:mode,focusedId:focusedId,selfId:selfId,isScrollVisible:isScrollVisible}){const{VoicePanelModes}=this.__closure;const isPIP=mode===VoicePanelModes.PIP;if(!isScrollVisible||isPIP||focusedId!=null&&focusedId!==selfId){return false;}return true;}" };
let closure_55 = { code: "function VoicePanelVideoRendererTsx38(){const{mode,focused,isScrollVisible,streamId}=this.__closure;var _focused$get;return[mode.get(),(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,isScrollVisible.get(),streamId];}" };
let closure_56 = { code: "function VoicePanelVideoRendererTsx39(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setHasActiveVideoOutputSink,shouldMakeActive,id}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[mode,focusedId,isScrollVisible,streamId]=props;if(streamId==null)return;runOnJS(setHasActiveVideoOutputSink)(streamId,shouldMakeActive({mode:mode,focusedId:focusedId,selfId:id,isScrollVisible:isScrollVisible}));}" };
let closure_57 = { code: "function VoicePanelVideoRendererTsx40(){const{focused,id,windowDimensions,sharedCoords}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id){return{width:windowDimensions.get().width,height:windowDimensions.get().height};}return{width:sharedCoords.get().width,height:sharedCoords.get().height};}" };
let closure_58 = { code: "function VoicePanelVideoRendererTsx41(){const{scale,videoDimensions,mode}=this.__closure;return[scale.get(),videoDimensions.get(),mode.get()];}" };
let closure_59 = { code: "function VoicePanelVideoRendererTsx42(props,previous){const{streamId,cheapWorkletShallowEqual,runOnJS,respondToVideoSizeUpdate}=this.__closure;if(streamId==null)return;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(respondToVideoSizeUpdate)();}" };
let closure_60 = { code: "function VoicePanelVideoRendererTsx43(){const{videoDimensions,pipState,VoicePanelPIPModes,scale,disableAnimations,translateX,translateY,mirror}=this.__closure;let{width:width,height:height}=videoDimensions.get();if(pipState.mode===VoicePanelPIPModes.IN_APP){if(width>height){width=width*(pipState.height/height)/scale.get();height=pipState.height/scale.get();}else{height=height*(pipState.width/width)/scale.get();width=pipState.width/scale.get();}}return{width:width,height:height,opacity:disableAnimations.get()?0:1,transform:[{scale:scale.get()},{translateX:translateX.get()},{translateY:translateY.get()},{scaleX:mirror?-1:1}]};}" };
let closure_61 = { code: "function VoicePanelVideoRendererTsx44(){const{mode,VoicePanelModes,focused,id}=this.__closure;var _focused$get;return{inPip:mode.get()===VoicePanelModes.PIP,isFocused:((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id};}" };
let closure_62 = { code: "function VoicePanelVideoRendererTsx45(curr,prev){const{cheapWorkletShallowEqual,strokeOpacity,withDelay,withTiming}=this.__closure;if(cheapWorkletShallowEqual(curr,prev!==null&&prev!==void 0?prev:undefined))return;if(curr.inPip||curr.isFocused){strokeOpacity.set(0);return;}const shouldDelay=(prev===null||prev===void 0?void 0:prev.isFocused)===true;strokeOpacity.set(shouldDelay?withDelay(300,withTiming(0.3,{duration:0},'animate-never')):0.3);}" };
let closure_63 = { code: "function VoicePanelVideoRendererTsx46(){const{isInSnap,SNAP_EDGE_INNER_THRESHOLD,borderRadius,strokeOpacity}=this.__closure;if(isInSnap.get()){return{position:'absolute',top:0,left:0,bottom:0,right:0,borderWidth:SNAP_EDGE_INNER_THRESHOLD,overflow:'hidden',borderColor:'white',opacity:0.5};}return{position:'absolute',top:-1,left:-1,bottom:-1,right:-1,borderWidth:2,borderRadius:borderRadius+2,overflow:'hidden',borderColor:'white',opacity:strokeOpacity.get()};}" };
let closure_64 = { code: "function VoicePanelVideoRendererTsx47(values){const{layout,disableAnimations}=this.__closure;return layout(values,disableAnimations.get());}" };
const memoResult = importAllResult.memo(function VideoRenderer(streamKey) {
  let dismissToPIPGestureRef;
  let layoutManager;
  let sharedCoords;
  let sharedValue3;
  let tmp12;
  let userId;
  let videoSpinnerContext;
  let id = streamKey.id;
  const streamId = streamKey.streamId;
  let isCamera = streamId;
  ({ userId, videoSpinnerContext, sharedCoords } = streamKey);
  let focused = sharedCoords;
  const isScrollVisible = streamKey.isScrollVisible;
  let mode = isScrollVisible;
  isCamera = streamKey.isCamera;
  let flag = streamKey.mirror;
  if (flag === undefined) {
    flag = false;
  }
  let derivedValue = flag;
  let flag2 = streamKey.focusOnReady;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let sharedValue1 = flag2;
  let flag3 = streamKey.paused;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const layout = streamKey.layout;
  let sharedValue = layout;
  let setIsFocusedVideoZoomed;
  let windowDimensions2;
  dismissToPIPGestureRef = undefined;
  let setFocused;
  let hideControls;
  let controlsSpecs;
  let showControls;
  let sharedValue2;
  sharedValue3 = undefined;
  let sharedValue4;
  let sharedValue5;
  let sharedValue6;
  sharedValue2 = undefined;
  sharedValue3 = undefined;
  sharedValue4 = undefined;
  sharedValue6 = undefined;
  let derivedValue2;
  let callback6;
  let token;
  let sharedValue10;
  let tmp = sharedValue5();
  let obj = id(focused[16]);
  let obj1 = isCamera;
  const surfaceDirectRendererExperiment = obj.useSurfaceDirectRendererExperiment(userId, { location: "VoicePanelVideoRenderer" });
  const context = isCamera.useContext(isCamera(focused[11]));
  mode = context.mode;
  setIsFocusedVideoZoomed = mode;
  focused = context.focused;
  windowDimensions2 = focused;
  ({ setFocused: dismissToPIPGestureRef, layoutManager } = context);
  setFocused = layoutManager;
  const windowDimensions = context.windowDimensions;
  hideControls = windowDimensions;
  let obj2 = id(focused[8]);
  sharedValue = obj2.useSharedValue(true);
  controlsSpecs = sharedValue;
  let obj3 = id(focused[8]);
  obj = {};
  const merged = Object.assign(layoutManager.getTargetDimensions(id));
  sharedValue1 = obj3.useSharedValue(obj);
  showControls = sharedValue1;
  let obj5 = id(focused[17]);
  const pIPState = obj5.usePIPState();
  sharedValue2 = pIPState;
  [tmp12, sharedValue3] = mode(isCamera.useState(true), 2);
  sharedValue4 = isCamera.useRef(() => {
    if (sharedValue1) {
      dismissToPIPGestureRef(id);
    }
  });
  const onReady = isCamera(focused[18])({ streamId, userId, loading: tmp12, videoSpinnerContext, paused: flag3, streamKey: streamKey.streamKey }).onReady;
  sharedValue5 = onReady;
  isCamera(focused[19])({ location: "VideoRenderer", videoSpinnerContext, userId, streamId, loading: tmp12 });
  let items = [onReady];
  const callback = isCamera.useCallback(() => {
    sharedValue3(false);
    sharedValue4.current();
    sharedValue5();
  }, items);
  let obj6 = id(focused[20]);
  const setHasActiveVideoOutputSink = obj6.useSetHasActiveVideoOutputSink(context.streamOutputSinkStack);
  sharedValue6 = setHasActiveVideoOutputSink;
  let obj7 = id(focused[8]);
  class Je {
    constructor() {
      items = [, , , ];
      items[0] = setIsFocusedVideoZoomed.get();
      value = windowDimensions.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      items[1] = id;
      items[2] = mode.get();
      items[3] = isCamera;
      return items;
    }
  }
  Je.__closure = { mode, focused, isScrollVisible, streamId };
  Je.__workletHash = 3558943323767;
  Je.__initData = closure_55;
  class We {
    constructor(arg0, arg1) {
      tmp = arg1;
      tmp2 = id;
      tmp3 = focused;
      obj = id(focused[13]);
      if (!obj.cheapWorkletArrayShallowEqual(streamKey, tmp)) {
        tmp4 = mode;
        num = 4;
        tmp5 = mode(streamKey, 4);
        tmp7 = tmp5[1];
        tmp8 = tmp5[2];
        tmp9 = tmp5[3];
        if (null != tmp9) {
          tmp2Result = tmp2(tmp3[8]);
          tmp10 = isScrollVisible;
          tmp12 = outer1_54;
          runOnJSResult = tmp2Result.runOnJS(isScrollVisible);
          tmp13 = id;
          if (typeof outer1_54 !== "function") {
            str = "Trying to call a non-function";
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          tmp14 = c6;
          tmp15 = !tmp8;
          if (tmp8) {
            tmp15 = tmp6 === c6.PIP;
          }
          if (!tmp15) {
            tmp16 = null != tmp7 && tmp7 !== tmp13;
            tmp15 = tmp16;
          }
          tmp11Result = runOnJSResult(tmp9, !tmp15);
        }
      }
      return;
    }
  }
  obj = { cheapWorkletArrayShallowEqual: id(focused[13]).cheapWorkletArrayShallowEqual, runOnJS: id(focused[8]).runOnJS, setHasActiveVideoOutputSink, shouldMakeActive, id };
  We.__closure = obj;
  We.__workletHash = 12089612803324;
  We.__initData = closure_56;
  const animatedReaction = obj7.useAnimatedReaction(Je, We);
  const items1 = [sharedValue1, layoutManager, id, sharedValue];
  const callback1 = isCamera.useCallback((nativeEvent) => {
    let height;
    let width;
    ({ width, height } = nativeEvent.nativeEvent);
    isCamera(focused[21])(showControls, { width, height });
    setFocused.setTargetDimensions(id, width, height);
    if (controlsSpecs.get()) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const result = closure_13.set(false);
      }, 34);
    }
  }, items1);
  let obj9 = id(focused[8]);
  class Ue {
    constructor() {
      value = windowDimensions.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      if (id === id) {
        obj = { width: null, height: null };
        tmp4 = hideControls;
        obj[0] = hideControls.get().width;
        obj[1] = hideControls.get().height;
      } else {
        obj = { width: null, height: null };
        tmp3 = focused;
        obj[0] = focused.get().width;
        obj[1] = focused.get().height;
      }
      return obj;
    }
  }
  Ue.__closure = { focused, id, windowDimensions, sharedCoords };
  Ue.__workletHash = 9631392718391;
  Ue.__initData = closure_57;
  derivedValue = obj9.useDerivedValue(Ue);
  isCamera = tmp12;
  setIsFocusedVideoZoomed = undefined;
  windowDimensions2 = undefined;
  dismissToPIPGestureRef = undefined;
  setFocused = undefined;
  hideControls = undefined;
  controlsSpecs = undefined;
  showControls = undefined;
  sharedValue2 = undefined;
  sharedValue3 = undefined;
  sharedValue4 = undefined;
  sharedValue5 = undefined;
  sharedValue6 = undefined;
  sharedValue2 = undefined;
  sharedValue3 = undefined;
  sharedValue4 = undefined;
  sharedValue6 = undefined;
  derivedValue2 = undefined;
  callback6 = undefined;
  token = undefined;
  sharedValue10 = undefined;
  let callback4;
  let callback5;
  const context1 = isCamera.useContext(isCamera(focused[11]));
  setIsFocusedVideoZoomed = context1.setIsFocusedVideoZoomed;
  windowDimensions2 = context1.windowDimensions;
  dismissToPIPGestureRef = context1.dismissToPIPGestureRef;
  setFocused = context1.setFocused;
  hideControls = context1.hideControls;
  controlsSpecs = context1.controlsSpecs;
  showControls = context1.showControls;
  let obj10 = id(focused[8]);
  sharedValue2 = obj10.useSharedValue(1);
  let obj11 = id(focused[8]);
  sharedValue3 = obj11.useSharedValue(0);
  let obj12 = id(focused[8]);
  sharedValue4 = obj12.useSharedValue(0);
  let obj13 = id(focused[8]);
  sharedValue5 = obj13.useSharedValue(0);
  const tmp11 = mode(isCamera.useState(true), 2);
  sharedValue6 = id(focused[8]).useSharedValue(false);
  const obj15 = id(focused[8]);
  const sharedValue7 = id(focused[8]).useSharedValue(0);
  sharedValue2 = sharedValue7;
  const obj16 = id(focused[8]);
  const sharedValue8 = id(focused[8]).useSharedValue(false);
  sharedValue3 = sharedValue8;
  const obj17 = id(focused[8]);
  const sharedValue9 = id(focused[8]).useSharedValue(null);
  sharedValue4 = sharedValue9;
  const obj18 = id(focused[8]);
  let fn = function w() {
    const result = derivedValue.get().width / sharedValue1.get().width;
    return Math.max(result, derivedValue.get().height / sharedValue1.get().height);
  };
  fn.__closure = { containerLayout: derivedValue, videoDimensions: sharedValue1 };
  fn.__workletHash = 4177496646282;
  fn.__initData = sharedValue6;
  const derivedValue1 = id(focused[8]).useDerivedValue(fn);
  sharedValue6 = derivedValue1;
  const obj19 = id(focused[8]);
  class D {
    constructor() {
      result = c5.get().width / c6.get().width;
      return Math.min(result, c5.get().height / c6.get().height);
    }
  }
  D.__closure = { containerLayout: derivedValue, videoDimensions: sharedValue1 };
  D.__workletHash = 5260375952053;
  D.__initData = sharedValue2;
  derivedValue2 = id(focused[8]).useDerivedValue(D);
  const obj20 = id(focused[8]);
  class I {
    constructor() {
      tmp = 0 === windowDimensions.get();
      if (tmp) {
        tmp2 = sharedCoords;
        tmp = 0 === sharedCoords.get();
      }
      if (tmp) {
        obj = videoSpinnerContext;
        tmp4 = get;
        value = videoSpinnerContext.get();
        tmp5 = value === get.get();
        if (!tmp5) {
          tmp7 = isScrollVisible;
          value1 = obj.get();
          tmp5 = value1 === isScrollVisible.get();
        }
        tmp = tmp5;
      }
      return tmp;
    }
  }
  I.__closure = { translateX: sharedValue3, translateY: sharedValue4, scale: sharedValue2, fitScale: derivedValue2, coverScale: derivedValue1 };
  I.__workletHash = 15099362638406;
  I.__initData = sharedValue3;
  const derivedValue3 = id(focused[8]).useDerivedValue(I);
  callback6 = derivedValue3;
  function ae(arg0) {
    if ("fit" === arg0) {
      let value = derivedValue2.get();
      let str2 = "respect-motion-settings";
      if (sharedValue.get()) {
        str2 = "animate-never";
      }
      const result = sharedValue2.set(id(focused[12]).withSpring(value, sharedValue, str2));
      const obj2 = id(focused[12]);
      const tmp14 = sharedValue;
    } else {
      value = sharedValue6.get();
      let str = "respect-motion-settings";
      if (sharedValue.get()) {
        str = "animate-never";
      }
      const result1 = sharedValue2.set(id(focused[12]).withSpring(value, sharedValue, str));
      const obj = id(focused[12]);
      const tmp6 = sharedValue;
    }
    const result2 = sharedValue3.set(id(focused[12]).withSpring(0, dismissToPIPGestureRef));
    const obj3 = id(focused[12]);
    const result3 = sharedValue4.set(id(focused[12]).withSpring(0, dismissToPIPGestureRef));
    const result4 = sharedValue4.set(arg0);
  }
  obj1 = { scale: sharedValue2, withSpring: id(focused[12]).withSpring, fitScale: derivedValue2, MODE_CHANGE_PHYSICS: sharedValue, disableAnimations: sharedValue, coverScale: derivedValue1, translateX: sharedValue3, SCALE_PHYSICS: dismissToPIPGestureRef, translateY: sharedValue4, currentSizeThreshold: sharedValue9 };
  ae.__closure = obj1;
  ae.__workletHash = 16610861286231;
  ae.__initData = sharedValue4;
  const items2 = [sharedValue2, sharedValue3, sharedValue4, derivedValue1, sharedValue9, derivedValue2, sharedValue];
  const callback2 = isCamera.useCallback(ae, items2);
  token = callback2;
  function re() {
    const value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    let str = "cover";
    if (id === id) {
      str = "fit";
    }
    let tmp5 = isCamera;
    const tmp3 = sharedValue1.get().width >= sharedValue1.get().height;
    if (isCamera) {
      tmp5 = "fit" === str;
    }
    if (tmp5) {
      tmp5 = tmp3 === tmp4;
    }
    if (tmp5) {
      str = "cover";
    }
    token(str);
  }
  re.__closure = { focused, id, videoDimensions: sharedValue1, windowDimensions: windowDimensions2, isCamera, resetToDefaultSize: callback2 };
  re.__workletHash = 15643035811761;
  re.__initData = sharedValue6;
  const items3 = [focused, id, isCamera, sharedValue1, windowDimensions2, callback2];
  const callback3 = isCamera.useCallback(re, items3);
  sharedValue10 = callback3;
  const obj21 = id(focused[8]);
  function le() {
    return derivedValue.get();
  }
  le.__closure = { containerLayout: derivedValue };
  le.__workletHash = 9695573702258;
  le.__initData = derivedValue2;
  function ce(safeAreaState, current) {
    if (!obj.cheapWorkletShallowEqual(safeAreaState, current)) {
      const value = focused.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      if (tmp6) {
        sharedValue10();
      }
      tmp6 = id === id && safeAreaState !== current && null != current;
    }
  }
  obj2 = { cheapWorkletShallowEqual: id(focused[13]).cheapWorkletShallowEqual, focused, id, resetOnLayoutChange: callback3 };
  ce.__closure = obj2;
  ce.__workletHash = 13816224514199;
  ce.__initData = callback6;
  const animatedReaction1 = id(focused[8]).useAnimatedReaction(le, ce);
  class Le {
    constructor() {
      value = isScrollVisible.get();
      if (value < get.get() + 0.05) {
        flag2 = false;
        return false;
      } else {
        tmp12 = windowDimensions;
        obj = videoSpinnerContext;
        value1 = windowDimensions.get();
        result = value1 * videoSpinnerContext.get();
        tmp15 = sharedCoords;
        value2 = sharedCoords.get();
        result1 = value2 * videoSpinnerContext.get();
        num = -50;
        if (result >= -50) {
          num2 = 50;
          if (result <= 50) {
            if (result1 >= -50) {
              if (result1 <= 50) {
                obj2 = c5;
                tmp18 = c6;
                num3 = 2;
                sum = result + (c5.get().width - c6.get().width * obj.get()) / 2;
                sum1 = result1 + (c5.get().height - c6.get().height * obj.get()) / 2;
                result2 = c6.get().width * obj.get();
                result3 = c6.get().height * obj.get();
                tmp2 = result3 >= c5.get().height && sum >= -50;
                if (tmp2) {
                  tmp3 = controlsSpecs;
                  tmp2 = sum <= controlsSpecs;
                }
                if (tmp2) {
                  sum2 = sum + result2;
                  tmp5 = controlsSpecs;
                  tmp2 = sum2 >= obj2.get().width - controlsSpecs;
                }
                if (tmp2) {
                  sum3 = sum + result2;
                  tmp2 = sum3 <= obj2.get().width + 50;
                }
                if (!tmp2) {
                  tmp7 = result2 >= obj2.get().width && sum1 >= -50;
                  if (tmp7) {
                    tmp8 = controlsSpecs;
                    tmp7 = sum1 <= controlsSpecs;
                  }
                  if (tmp7) {
                    sum4 = sum1 + result3;
                    tmp10 = controlsSpecs;
                    tmp7 = sum4 >= obj2.get().height - controlsSpecs;
                  }
                  if (tmp7) {
                    sum5 = sum1 + result3;
                    tmp7 = sum5 <= obj2.get().height + 50;
                  }
                  tmp2 = tmp7;
                }
                return tmp2;
              }
            }
          }
        }
        flag = false;
        return false;
      }
    }
  }
  Le.__closure = { coverScale: derivedValue1, fitScale: derivedValue2, MIN_ZOOM_FOR_COVER_SNAP_OFFSET: 0.05, translateX: sharedValue3, scale: sharedValue2, translateY: sharedValue4, SNAP_CENTER_THRESHOLD: 50, containerLayout: derivedValue, videoDimensions: sharedValue1, SNAP_EDGE_OUTER_THRESHOLD: 50, SNAP_EDGE_INNER_THRESHOLD: controlsSpecs };
  Le.__workletHash = 3902544453390;
  Le.__initData = token;
  const items4 = [derivedValue1, sharedValue2, sharedValue3, sharedValue4, derivedValue, sharedValue1, derivedValue2];
  callback4 = isCamera.useCallback(Le, items4);
  function ye() {
    if (sharedValue5.get() <= 0) {
      if (sharedValue6.get()) {
        const result = obj2.set(false);
        token("cover");
      } else {
        const value = sharedValue2.get();
        if (value < derivedValue2.get()) {
          token("fit");
        } else {
          const _Math = Math;
          const bound = Math.max(0, (sharedValue1.get().height - derivedValue.get().height / obj.get()) / 2);
          const _Math2 = Math;
          const bound1 = Math.max(0, (sharedValue1.get().width - derivedValue.get().width / obj.get()) / 2);
          const _Math3 = Math;
          const _Math4 = Math;
          const result1 = sharedValue3.set(id(focused[12]).withSpring(Math.min(bound1, Math.max(-bound1, sharedValue3.get())), dismissToPIPGestureRef));
          const obj3 = id(focused[12]);
          const tmp16 = -bound1;
          const _Math5 = Math;
          const _Math6 = Math;
          const result2 = sharedValue4.set(id(focused[12]).withSpring(Math.min(bound, Math.max(-bound, sharedValue4.get())), dismissToPIPGestureRef));
          const obj4 = id(focused[12]);
          const tmp20 = -bound;
        }
      }
      obj2 = sharedValue6;
    }
  }
  obj3 = { numGesturesActive: sharedValue5, isInSnap: sharedValue6, resetToDefaultSize: callback2, scale: sharedValue2, fitScale: derivedValue2, videoDimensions: sharedValue1, containerLayout: derivedValue, translateX: sharedValue3, withSpring: id(focused[12]).withSpring, SCALE_PHYSICS: dismissToPIPGestureRef, translateY: sharedValue4 };
  ye.__closure = obj3;
  ye.__workletHash = 3493652911835;
  ye.__initData = sharedValue10;
  const items5 = [derivedValue2, sharedValue5, sharedValue6, sharedValue2, sharedValue1, derivedValue, sharedValue3, sharedValue4, callback2];
  callback5 = isCamera.useCallback(ye, items5);
  const obj23 = id(focused[8]);
  const tmp34 = controlsSpecs;
  function xe() {
    let value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    let tmp3 = id === id;
    if (tmp3) {
      value = callback6.get();
      let value1 = !value;
      if (value) {
        value1 = sharedValue3.get();
      }
      tmp3 = value1;
    }
    return tmp3;
  }
  xe.__closure = { focused, id, isInDefaultZoom: derivedValue3, isInPanToZoom: sharedValue8 };
  xe.__workletHash = 5209373786986;
  xe.__initData = callback4;
  function ke(arg0, arg1) {
    if (arg0 !== arg1) {
      setIsFocusedVideoZoomed(arg0);
    }
  }
  ke.__closure = { setIsFocusedVideoZoomed };
  ke.__workletHash = 10707557639101;
  ke.__initData = callback5;
  const animatedReaction2 = id(focused[8]).useAnimatedReaction(xe, ke);
  const obj26 = id(focused[8]);
  class Me {
    constructor() {
      value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return id === id;
    }
  }
  Me.__closure = { focused, id };
  Me.__workletHash = 619124678280;
  Me.__initData = closure_30;
  function be(arg0, arg1) {
    if (arg0 !== arg1) {
      sharedValue10();
    }
  }
  be.__closure = { resetOnLayoutChange: callback3 };
  be.__workletHash = 8458824233146;
  be.__initData = closure_31;
  const animatedReaction3 = id(focused[8]).useAnimatedReaction(Me, be);
  const obj27 = id(focused[8]);
  class Ye {
    constructor() {
      return mode.get();
    }
  }
  Ye.__closure = { mode };
  Ye.__workletHash = 7040117988961;
  Ye.__initData = closure_32;
  class Ne {
    constructor(arg0, arg1) {
      if (streamKey !== arg1) {
        tmp = sharedCoords;
        tmp2 = sharedCoords();
      }
      return;
    }
  }
  Ne.__closure = { resetOnLayoutChange: callback3 };
  Ne.__workletHash = 9279120690968;
  Ne.__initData = closure_33;
  const animatedReaction4 = id(focused[8]).useAnimatedReaction(Ye, Ne);
  const obj28 = id(focused[8]);
  class Ge {
    constructor() {
      return c6.get();
    }
  }
  Ge.__closure = { videoDimensions: sharedValue1 };
  Ge.__workletHash = 8748184223523;
  Ge.__initData = closure_34;
  class Fe {
    constructor(arg0, arg1) {
      if (null != sharedCoords) {
        tmp = streamKey;
        tmp2 = arg1;
        width = undefined;
        if (arg1 != null) {
          width = arg1.width;
        }
        tmp4 = streamKey.width === width;
        if (tmp4) {
          height = undefined;
          if (arg1 != null) {
            height = arg1.height;
          }
          tmp4 = streamKey.height === height;
        }
        if (!tmp4) {
          tmp6 = sharedCoords;
          tmp7 = sharedCoords();
        }
      }
      return;
    }
  }
  Fe.__closure = { currentSizeThreshold: sharedValue9, resetOnLayoutChange: callback3 };
  Fe.__workletHash = 8464422969486;
  Fe.__initData = closure_35;
  const animatedReaction5 = id(focused[8]).useAnimatedReaction(Ge, Fe);
  const obj29 = id(focused[8]);
  function ze() {
    return sharedValue6.get();
  }
  ze.__closure = { coverScale: derivedValue1 };
  ze.__workletHash = 5444376625069;
  ze.__initData = closure_36;
  class Xe {
    constructor(arg0, arg1) {
      value = sharedCoords.get();
      tmp2 = "cover" === value;
      if (tmp2) {
        tmp3 = streamKey;
        tmp4 = arg1;
        tmp2 = streamKey !== arg1;
      }
      if (tmp2) {
        tmp5 = windowDimensions;
        tmp6 = windowDimensions(value);
      }
      return;
    }
  }
  Xe.__closure = { currentSizeThreshold: sharedValue9, resetToDefaultSize: callback2 };
  Xe.__workletHash = 10764193588506;
  Xe.__initData = closure_37;
  const animatedReaction6 = id(focused[8]).useAnimatedReaction(ze, Xe);
  const obj30 = id(focused[8]);
  function $e() {
    return sharedValue6.get();
  }
  $e.__closure = { isInSnap: sharedValue6 };
  $e.__workletHash = 2178206594630;
  $e.__initData = closure_38;
  class Ze {
    constructor(arg0, arg1) {
      tmp = streamKey !== arg1 && streamKey;
      if (tmp) {
        tmp2 = id;
        tmp3 = focused;
        obj = id(focused[8]);
        runOnJSResult = obj.runOnJS(id(focused[14]).triggerHapticFeedback);
        tmp4Result = runOnJSResult(id(focused[14]).HapticFeedbackTypes.IMPACT_LIGHT);
      }
      return;
    }
  }
  const obj31 = id(focused[8]);
  Ze.__closure = { runOnJS: id(focused[8]).runOnJS, triggerHapticFeedback: id(focused[14]).triggerHapticFeedback, HapticFeedbackTypes: id(focused[14]).HapticFeedbackTypes };
  Ze.__workletHash = 11115846398818;
  Ze.__initData = closure_39;
  const animatedReaction7 = obj31.useAnimatedReaction($e, Ze);
  const items6 = [tmp12, dismissToPIPGestureRef, focused, id, sharedValue2, sharedValue3, sharedValue4, callback3, sharedValue5, sharedValue9, derivedValue, sharedValue6, callback4, callback5, sharedValue7, sharedValue8, derivedValue3, setFocused, hideControls, controlsSpecs, showControls, derivedValue2];
  const memo = isCamera.useMemo(() => {
    const Gesture = id(focused[15]).Gesture;
    const Gesture2 = id(focused[15]).Gesture;
    const Gesture3 = id(focused[15]).Gesture;
    const TapResult = Gesture3.Tap();
    class O {
      constructor(arg0, arg1) {
        return arg1.fail();
      }
    }
    O.__closure = {};
    O.__workletHash = 17368742583362;
    O.__initData = outer1_41;
    const numberOfTapsResult = Gesture3.Tap().numberOfTaps(2);
    class E {
      constructor() {
        if (closure_25.get()) {
          tmp3 = closure_2;
          value = closure_2.get();
          tmp5 = null;
          id = undefined;
          if (value != null) {
            id = value.id;
          }
          if (id !== closure_0) {
            tmp12 = outer1_0;
            tmp13 = outer1_2;
            obj2 = outer1_0(outer1_2[8]);
            tmp14 = closure_11;
            tmp15 = obj2.runOnJS(closure_11)(tmp7);
          } else {
            tmp8 = outer1_0;
            tmp9 = outer1_2;
            obj = outer1_0(outer1_2[8]);
            tmp10 = closure_11;
            tmp11 = obj.runOnJS(closure_11)(null);
          }
        } else {
          tmp = closure_27;
          tmp2 = closure_27();
        }
        return;
      }
    }
    let obj = { isInDefaultZoom: callback6, resetOnLayoutChange: sharedValue10, focused, id, runOnJS: id(focused[8]).runOnJS, setFocused };
    E.__closure = obj;
    E.__workletHash = 10743965328356;
    E.__initData = outer1_40;
    const onTouchesMoveResult = Gesture3.Tap().numberOfTaps(2).onTouchesMove(O);
    const Gesture4 = id(focused[15]).Gesture;
    const onStartResult = Gesture3.Tap().numberOfTaps(2).onTouchesMove(O).onStart(E);
    class C {
      constructor(arg0, arg1) {
        return arg1.fail();
      }
    }
    C.__closure = {};
    C.__workletHash = 8766053850176;
    C.__initData = outer1_43;
    const TapResult1 = Gesture4.Tap();
    class V {
      constructor() {
        if (closure_13.get().mode === outer1_8.HIDDEN) {
          tmp5 = outer1_0;
          tmp6 = outer1_2;
          obj2 = outer1_0(outer1_2[8]);
          tmp7 = closure_14;
          tmp8 = obj2.runOnJS(closure_14)({ debounce: true });
        } else {
          tmp = outer1_0;
          tmp2 = outer1_2;
          obj = outer1_0(outer1_2[8]);
          tmp3 = closure_12;
          tmp4 = obj.runOnJS(closure_12)({ debounce: true });
        }
        return;
      }
    }
    obj = { controlsSpecs, VoicePanelControlsModes: setIsFocusedVideoZoomed, runOnJS: id(focused[8]).runOnJS, showControls, hideControls };
    V.__closure = obj;
    V.__workletHash = 11260765819879;
    V.__initData = outer1_42;
    const onTouchesMoveResult1 = Gesture4.Tap().onTouchesMove(C);
    const Gesture5 = id(focused[15]).Gesture;
    const ExclusiveResult = Gesture2.Exclusive(onStartResult, Gesture4.Tap().onTouchesMove(C).onStart(V));
    const PinchResult = Gesture5.Pinch();
    class I {
      constructor(arg0, arg1) {
        value = closure_2.get();
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        if (id !== closure_0) {
          tmp3 = arg1;
          failResult = arg1.fail();
        }
        return;
      }
    }
    I.__closure = { focused, id };
    I.__workletHash = 8765017804058;
    I.__initData = outer1_47;
    const enabledResult = Gesture5.Pinch().enabled(!isCamera);
    class D {
      constructor() {
        result = closure_18.set(closure_18.get() + 1);
        result1 = closure_21.set(false);
        result2 = closure_22.set(null);
        return;
      }
    }
    D.__closure = { numGesturesActive: sharedValue5, isInPanToZoom: sharedValue3, currentSizeThreshold: sharedValue4 };
    D.__workletHash = 3449238089307;
    D.__initData = outer1_46;
    const obj1 = { numGesturesActive: sharedValue5, isInPanToZoom: sharedValue3, currentSizeThreshold: sharedValue4 };
    const onTouchesDownResult = Gesture5.Pinch().enabled(!isCamera).onTouchesDown(I);
    const fn = function w(scaleChange) {
      let value = store3.get();
      value = store3.get();
      scaleChange = scaleChange.scaleChange;
      const value1 = store11.get();
      if (typeof outer1_17 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let sum = scaleChange;
      if (value < value1) {
        const diff = 1 - value;
        const _Math = Math;
        const diff1 = scaleChange - 1;
        sum = 1 + diff1 * Math.max(0.1, 1 - diff * diff * 5);
      }
      const result = store3.set(value * sum);
      const diff2 = scaleChange.focalX - store2.get().width / 2;
      const diff3 = scaleChange.focalY - store2.get().height / 2;
      const diff4 = scaleChange.scaleChange - 1;
      const result1 = -1 * diff2 * diff4 / obj.get();
      const diff5 = scaleChange.scaleChange - 1;
      const result2 = -1 * diff3 * diff5 / obj.get();
      const result3 = store4.set(store4.get() + result1);
      const result4 = store5.set(store5.get() + result2);
      const result5 = store7.set(callback2());
    };
    fn.__closure = { scale: sharedValue2, getScaleChangeWithOverscroll: sharedValue4, fitScale: derivedValue2, containerLayout: derivedValue, translateX: sharedValue3, translateY: sharedValue4, isInSnap: sharedValue6, isInCoverSnap: callback4 };
    fn.__workletHash = 2077670235308;
    fn.__initData = outer1_45;
    let obj2 = { scale: sharedValue2, getScaleChangeWithOverscroll: sharedValue4, fitScale: derivedValue2, containerLayout: derivedValue, translateX: sharedValue3, translateY: sharedValue4, isInSnap: sharedValue6, isInCoverSnap: callback4 };
    const onStartResult1 = Gesture5.Pinch().enabled(!isCamera).onTouchesDown(I).onStart(D);
    const fn2 = function v() {
      const result = store6.set(store6.get() - 1);
      callback3();
    };
    fn2.__closure = { numGesturesActive: sharedValue5, handleMovementEnd: callback5 };
    fn2.__workletHash = 5853458336611;
    fn2.__initData = outer1_44;
    const obj3 = { numGesturesActive: sharedValue5, handleMovementEnd: callback5 };
    const onChangeResult = Gesture5.Pinch().enabled(!isCamera).onTouchesDown(I).onStart(D).onChange(fn);
    const Gesture6 = id(focused[15]).Gesture;
    const onEndResult = Gesture5.Pinch().enabled(!isCamera).onTouchesDown(I).onStart(D).onChange(fn).onEnd(fn2);
    const PanResult = Gesture6.Pan();
    let result = Gesture6.Pan().enabled(!isCamera).requireExternalGestureToFail(dismissToPIPGestureRef);
    const enabledResult1 = Gesture6.Pan().enabled(!isCamera);
    const fn3 = function f(arg0, fail) {
      const value = store.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      if (id !== closure_0) {
        fail.fail();
      }
    };
    fn3.__closure = { focused, id };
    fn3.__workletHash = 2184905113389;
    fn3.__initData = outer1_53;
    const averageTouchesResult = result.averageTouches(true);
    class S {
      constructor() {
        timestamp = Date.now();
        result = closure_21.set(timestamp - closure_20.get() <= 250);
        result1 = closure_20.set(Date.now());
        return;
      }
    }
    S.__closure = { lastTapTimestamp: sharedValue2, PAN_TO_ZOOM_TAP_TIME_MILLIS: 250, isInPanToZoom: sharedValue3 };
    S.__workletHash = 7713579688732;
    S.__initData = outer1_52;
    const obj4 = { lastTapTimestamp: sharedValue2, PAN_TO_ZOOM_TAP_TIME_MILLIS: 250, isInPanToZoom: sharedValue3 };
    const onTouchesDownResult1 = result.averageTouches(true).onTouchesDown(fn3);
    const fn4 = function c() {
      if (store9.get()) {
        outer1_0(outer1_2[8]).runOnJS(closure_12)();
        const obj = outer1_0(outer1_2[8]);
      }
      const result = store6.set(store6.get() + 1);
      const result1 = store10.set(null);
    };
    const onBeginResult = result.averageTouches(true).onTouchesDown(fn3).onBegin(S);
    fn4.__closure = { isInPanToZoom: sharedValue3, runOnJS: id(focused[8]).runOnJS, hideControls, numGesturesActive: sharedValue5, currentSizeThreshold: sharedValue4 };
    fn4.__workletHash = 16349993539830;
    fn4.__initData = outer1_51;
    const obj5 = { isInPanToZoom: sharedValue3, runOnJS: id(focused[8]).runOnJS, hideControls, numGesturesActive: sharedValue5, currentSizeThreshold: sharedValue4 };
    const fn5 = function s(changeY) {
      if (store9.get()) {
        const result = changeY.changeY * outer1_15;
        let value = store3.get();
        value = store3.get();
        const value1 = store11.get();
        if (typeof outer1_17 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const sum = 1 + result;
        let sum1 = sum;
        if (value < value1) {
          const diff = 1 - value;
          const _Math = Math;
          sum1 = 1 + (sum - 1) * Math.max(0.1, 1 - diff * diff * 5);
        }
        const result1 = store3.set(value * sum1);
      } else {
        const value2 = store4.get();
        const result2 = store4.set(value2 + changeY.changeX / store3.get());
        const value3 = store5.get();
        const result3 = store5.set(value3 + changeY.changeY / store3.get());
      }
      const result4 = store7.set(callback2());
    };
    fn5.__closure = { isInPanToZoom: sharedValue3, PAN_TO_ZOOM_SCALE_FACTOR: sharedValue2, scale: sharedValue2, getScaleChangeWithOverscroll: sharedValue4, fitScale: derivedValue2, translateX: sharedValue3, translateY: sharedValue4, isInSnap: sharedValue6, isInCoverSnap: callback4 };
    fn5.__workletHash = 17282206686388;
    fn5.__initData = outer1_50;
    const obj6 = { isInPanToZoom: sharedValue3, PAN_TO_ZOOM_SCALE_FACTOR: sharedValue2, scale: sharedValue2, getScaleChangeWithOverscroll: sharedValue4, fitScale: derivedValue2, translateX: sharedValue3, translateY: sharedValue4, isInSnap: sharedValue6, isInCoverSnap: callback4 };
    const onStartResult2 = onBeginResult.onStart(fn4);
    const fn6 = function o(velocityX) {
      const result = store6.set(store6.get() - 1);
      let value = store4.get();
      const result1 = velocityX.velocityX * outer1_14;
      const result2 = store4.set(outer1_0(outer1_2[12]).withSpring(value + result1 / store3.get(), outer1_10));
      const obj = outer1_0(outer1_2[12]);
      value = store5.get();
      const result3 = velocityX.velocityY * outer1_14;
      const result4 = store5.set(outer1_0(outer1_2[12]).withSpring(value + result3 / store3.get(), outer1_10));
      callback3();
    };
    const onChangeResult1 = onBeginResult.onStart(fn4).onChange(fn5);
    fn6.__closure = { numGesturesActive: sharedValue5, translateX: sharedValue3, withSpring: id(focused[12]).withSpring, FLING_VELOCITY_SCALING: showControls, scale: sharedValue2, SCALE_PHYSICS: dismissToPIPGestureRef, translateY: sharedValue4, handleMovementEnd: callback5 };
    fn6.__workletHash = 10045783163820;
    fn6.__initData = outer1_49;
    const obj7 = { numGesturesActive: sharedValue5, translateX: sharedValue3, withSpring: id(focused[12]).withSpring, FLING_VELOCITY_SCALING: showControls, scale: sharedValue2, SCALE_PHYSICS: dismissToPIPGestureRef, translateY: sharedValue4, handleMovementEnd: callback5 };
    const fn7 = function t() {
      const result = store9.set(false);
    };
    fn7.__closure = { isInPanToZoom: sharedValue3 };
    fn7.__workletHash = 2318423816868;
    fn7.__initData = outer1_48;
    return Gesture.Simultaneous(ExclusiveResult, onEndResult, onChangeResult1.onEnd(fn6).onFinalize(fn7));
  }, items6);
  let value = derivedValue.get();
  derivedValue2 = value;
  const items7 = [streamId, isCamera, sharedValue2, sharedValue1, mode, value];
  callback6 = isCamera.useCallback(() => {
    let tmp2 = null == isCamera;
    if (!tmp2) {
      tmp2 = isCamera;
    }
    if (!tmp2) {
      tmp2 = setIsFocusedVideoZoomed.get() !== sharedValue1.PANEL;
    }
    if (!tmp2) {
      let obj = id(focused[22]);
      obj = { width: null, height: null };
      obj[0] = showControls.get().width * derivedValue2;
      obj[1] = showControls.get().height * derivedValue2;
      obj.updateVideoSize(isCamera, obj, sharedValue2.get());
    }
  }, items7);
  let obj4 = { runOnJS: id(focused[8]).runOnJS, triggerHapticFeedback: id(focused[14]).triggerHapticFeedback, HapticFeedbackTypes: id(focused[14]).HapticFeedbackTypes };
  class Ke {
    constructor() {
      items = [, , ];
      items[0] = videoSpinnerContext.get();
      items[1] = showControls.get();
      items[2] = setIsFocusedVideoZoomed.get();
      return items;
    }
  }
  Ke.__closure = { scale: sharedValue2, videoDimensions: sharedValue1, mode };
  Ke.__workletHash = 16492795532326;
  Ke.__initData = closure_58;
  class Be {
    constructor(arg0, arg1) {
      if (null != isCamera) {
        tmp = arg1;
        tmp2 = id;
        tmp3 = focused;
        obj = id(focused[13]);
        tmp4 = streamKey;
        if (!obj.cheapWorkletShallowEqual(streamKey, tmp)) {
          tmp2Result = tmp2(tmp3[8]);
          tmp5 = f99569;
          tmp6 = tmp2Result.runOnJS(f99569)();
        }
      }
      return;
    }
  }
  obj5 = { streamId, cheapWorkletShallowEqual: id(focused[13]).cheapWorkletShallowEqual, runOnJS: id(focused[8]).runOnJS, respondToVideoSizeUpdate: callback6 };
  Be.__closure = obj5;
  Be.__workletHash = 5259362546534;
  Be.__initData = closure_59;
  const animatedReaction8 = id(focused[8]).useAnimatedReaction(Ke, Be);
  const items8 = [callback6];
  const effect = isCamera.useEffect(() => {
    let closure_0 = isCamera(focused[23]).addOnPipModeChangedListener((arg0) => {
      if (!arg0) {
        callback();
      }
    });
    return () => {
      if (closure_0 != null) {
        closure_0.remove();
      }
    };
  }, items8);
  const obj33 = id(focused[8]);
  function lt() {
    let height;
    let width;
    const value = showControls.get();
    ({ width, height } = value);
    let size = sharedValue2;
    if (sharedValue2.mode !== windowDimensions2.IN_APP) {
      let obj = { width: null, height: null, opacity: null, transform: null };
      obj[0] = width;
      obj[1] = height;
      let num = 1;
      let num2 = 1;
      if (controlsSpecs.get()) {
        num2 = 0;
      }
      obj[2] = num2;
      obj = { scale: null };
      obj[0] = sharedValue2.get();
      const items = [obj, , , ];
      obj = { translateX: null };
      obj[0] = sharedValue3.get();
      items[1] = obj;
      const obj1 = { translateY: null };
      obj1[0] = sharedValue4.get();
      items[2] = obj1;
      if (derivedValue) {
        num = -1;
      }
      const obj2 = { scaleX: null };
      obj2[0] = num;
      items[3] = obj2;
      obj[3] = items;
      return obj;
    } else if (width > height) {
      const result = width * (size.height / height);
      height = sharedValue2;
      let result1 = result / sharedValue2.get();
      width = size.height;
      size = sharedValue2.get();
      let result2 = width / size;
    } else {
      const result3 = height * (size.width / width);
      result2 = result3 / sharedValue2.get();
      result1 = size.width / sharedValue2.get();
    }
  }
  obj6 = { videoDimensions: sharedValue1, pipState: pIPState, VoicePanelPIPModes: windowDimensions2, scale: sharedValue2, disableAnimations: sharedValue, translateX: sharedValue3, translateY: sharedValue4, mirror: flag };
  lt.__closure = obj6;
  lt.__workletHash = 4149619035590;
  lt.__initData = closure_60;
  const animatedStyle = id(focused[8]).useAnimatedStyle(lt);
  const obj35 = id(focused[8]);
  token = id(focused[24]).useToken(isCamera(focused[25]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  const obj37 = id(focused[24]);
  let num = 0;
  if (mode.get() !== sharedValue1.PIP) {
    value = focused.get();
    id = undefined;
    if (value != null) {
      id = value.id;
    }
    num = 0;
    if (id !== id) {
      num = 0.3;
    }
  }
  sharedValue10 = id(focused[8]).useSharedValue(num);
  let tmp2Result = tmp2(tmp3[8]);
  function ut() {
    const obj = { inPip: setIsFocusedVideoZoomed.get() === sharedValue1.PIP, isFocused: null };
    const value = windowDimensions2.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    obj[1] = id === id;
    return obj;
  }
  ut.__closure = { mode, VoicePanelModes: sharedValue1, focused, id };
  ut.__workletHash = 16147365192890;
  ut.__initData = closure_61;
  function dt(inPip, isFocused) {
    if (!obj.cheapWorkletShallowEqual(inPip, isFocused)) {
      if (!inPip.inPip) {
        if (!inPip.isFocused) {
          isFocused = undefined;
          if (isFocused != null) {
            isFocused = isFocused.isFocused;
          }
          let num2 = 0.3;
          if (true === isFocused) {
            let tmpResult = tmp(tmp2[8]);
            tmpResult = tmp(tmp2[26]);
            num2 = tmpResult.withDelay(300, tmpResult.withTiming(0.3, { duration: 0 }, "animate-never"));
          }
          const result = sharedValue10.set(num2);
        }
      }
      const result1 = sharedValue10.set(0);
    }
  }
  obj7 = { cheapWorkletShallowEqual: tmp2(tmp3[13]).cheapWorkletShallowEqual, strokeOpacity: sharedValue10, withDelay: tmp2(tmp3[8]).withDelay, withTiming: tmp2(tmp3[26]).withTiming };
  dt.__closure = obj7;
  dt.__workletHash = 5119744299592;
  dt.__initData = closure_62;
  const animatedReaction9 = tmp2Result.useAnimatedReaction(ut, dt);
  tmp2Result = tmp2(tmp3[8]);
  class St {
    constructor() {
      if (isScrollVisible.get()) {
        obj = { position: "absolute", top: 0, left: 0, bottom: 0, right: 0, borderWidth: null, overflow: "hidden", borderColor: "white", opacity: 0.5 };
        tmp3 = controlsSpecs;
        obj[5] = controlsSpecs;
      } else {
        obj = { position: "absolute", top: -1, left: -1, bottom: -1, right: -1, borderWidth: 2, borderRadius: null, overflow: "hidden", borderColor: "white", opacity: null };
        tmp = windowDimensions;
        num = 2;
        obj[6] = windowDimensions + 2;
        tmp2 = sharedCoords;
        obj[9] = sharedCoords.get();
      }
      return obj;
    }
  }
  St.__closure = { isInSnap: sharedValue6, SNAP_EDGE_INNER_THRESHOLD: tmp34, borderRadius: token, strokeOpacity: sharedValue10 };
  St.__workletHash = 5172898891721;
  St.__initData = closure_63;
  function ft(arg0) {
    return sharedValue(arg0, controlsSpecs.get());
  }
  ft.__closure = { layout, disableAnimations: sharedValue };
  ft.__workletHash = 12145775353383;
  ft.__initData = closure_64;
  const items9 = [layout, sharedValue];
  const animatedStyle1 = tmp2Result.useAnimatedStyle(St);
  const callback7 = obj1.useCallback(ft, items9);
  const obj8 = { gesture: memo, children: null };
  obj9 = { style: items10, layout: callback7, children: null };
  items10 = [tmp.wrapper, streamKey.style];
  let tmp5Result = tmp5(tmp3[27]);
  obj10 = { style: items11, layout: callback7, children: null };
  items11 = [tmp.animatedWrapperStyles, animatedStyle];
  obj11 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId, onReady: callback, onSize: callback1, style: tmp.video, layout: callback7 };
  tmp5Result = tmp5(tmp3[27]);
  obj10[2] = setFocused(sharedValue3, obj11);
  const items12 = [setFocused(tmp5Result, obj10), ];
  if (tmp12) {
    obj12 = { animate: true, style: null };
    obj12[1] = tmp.spinner;
    let tmp57Result = tmp57(tmp5(tmp3[28]), obj12);
  } else {
    obj13 = { style: null, layout: null, pointerEvents: "none" };
    obj13[0] = animatedStyle1;
    obj13[1] = callback7;
    tmp57Result = tmp57(tmp5(tmp3[27]), obj13);
  }
  items12[1] = tmp57Result;
  obj9[2] = items12;
  obj8[1] = hideControls(tmp5Result, obj9);
  return setFocused(id(focused[15]).GestureDetector, obj8);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/card/VoicePanelVideoRenderer.tsx");

export default memoResult;