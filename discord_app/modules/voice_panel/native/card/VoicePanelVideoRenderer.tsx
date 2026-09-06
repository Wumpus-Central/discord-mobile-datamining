// === Module 17133: VoicePanelVideoRenderer ===

// Module 17133 (VoicePanelVideoRenderer)
import ReanimatedRexport2 from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import spring from "spring" /* 4974 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 9495 */;
import DCDVideoRendererDefault from "DCDVideoRenderer" /* 9616 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11354 */;
import VideoActionCreators from "VideoActionCreators" /* 17004 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
const PixelRatio = fn(17).PixelRatio;
const VoicePanelConstants = fn(12273);
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
const VoicePanelControlsModes = fn(12271).VoicePanelControlsModes;
const VoicePanelPIPModes = fn(17088).VoicePanelPIPModes;
let SCALE_PHYSICS = fn(12274).SCALE_PHYSICS;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let c13 = 25;
let c14 = 0.05;
let c15 = 0.0075;
const DCDVideoRenderer = ReanimatedRexport.createAnimatedComponent(DCDVideoRendererDefault);
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
const createStyles = fn(4560);
let closure_18 = createStyles.createStyles({ wrapper: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }, animatedWrapperStyles: { position: "absolute" }, video: { width: "100%", height: "100%" }, spinner: { position: "absolute", top: "50%", left: "50%", marginTop: -16, marginLeft: -16, height: 32, width: 32 } });
let closure_19 = { code: "function VoicePanelVideoRendererTsx2(){const{containerLayout,videoDimensions}=this.__closure;return Math.max(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);}" };
let closure_20 = { code: "function VoicePanelVideoRendererTsx3(){const{containerLayout,videoDimensions}=this.__closure;return Math.min(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);}" };
let closure_21 = { code: "function VoicePanelVideoRendererTsx4(){const{translateX,translateY,scale,fitScale,coverScale}=this.__closure;if(translateX.get()!==0||translateY.get()!==0){return false;}if(scale.get()===fitScale.get()||scale.get()===coverScale.get()){return true;}return false;}" };
let closure_22 = { code: "function VoicePanelVideoRendererTsx5(forcedMode){const{scale,withSpring,fitScale,MODE_CHANGE_PHYSICS,disableAnimations,coverScale,translateX,SCALE_PHYSICS,translateY,currentSizeThreshold}=this.__closure;if(forcedMode==='fit'){scale.set(withSpring(fitScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?'respect-motion-settings':'animate-never'));}else{scale.set(withSpring(coverScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?'respect-motion-settings':'animate-never'));}translateX.set(withSpring(0,SCALE_PHYSICS));translateY.set(withSpring(0,SCALE_PHYSICS));currentSizeThreshold.set(forcedMode);}" };
let closure_23 = { code: "function VoicePanelVideoRendererTsx6(){const{focused,id,videoDimensions,windowDimensions,isCamera,resetToDefaultSize}=this.__closure;var _focused$get;let resizeMode=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id?'fit':'cover';const videoLandscape=videoDimensions.get().width>=videoDimensions.get().height;const parentLandscape=windowDimensions.get().width>=windowDimensions.get().height;const matchingAspect=videoLandscape===parentLandscape;if(isCamera&&resizeMode==='fit'){if(matchingAspect){resizeMode='cover';}}resetToDefaultSize(resizeMode);}" };
let __initData = { code: "function VoicePanelVideoRendererTsx7(){const{containerLayout}=this.__closure;return containerLayout.get();}" };
let closure_25 = { code: "function VoicePanelVideoRendererTsx8(containerLayout,previous){const{cheapWorkletShallowEqual,focused,id,resetOnLayoutChange}=this.__closure;var _focused$get;if(cheapWorkletShallowEqual(containerLayout,previous!==null&&previous!==void 0?previous:undefined))return;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id)return;if(containerLayout!==previous&&previous!=null){resetOnLayoutChange();}}" };
let closure_26 = { code: "function VoicePanelVideoRendererTsx9(){const{coverScale,fitScale,MIN_ZOOM_FOR_COVER_SNAP_OFFSET,translateX,scale,translateY,SNAP_CENTER_THRESHOLD,containerLayout,videoDimensions,SNAP_EDGE_OUTER_THRESHOLD,SNAP_EDGE_INNER_THRESHOLD}=this.__closure;if(coverScale.get()<fitScale.get()+MIN_ZOOM_FOR_COVER_SNAP_OFFSET){return false;}const screenTranslateX=translateX.get()*scale.get();const screenTranslateY=translateY.get()*scale.get();if(screenTranslateX<-SNAP_CENTER_THRESHOLD||screenTranslateX>SNAP_CENTER_THRESHOLD||screenTranslateY<-SNAP_CENTER_THRESHOLD||screenTranslateY>SNAP_CENTER_THRESHOLD){return false;}const adjustedScreenTranslateX=screenTranslateX+(containerLayout.get().width-videoDimensions.get().width*scale.get())/2;const adjustedScreenTranslateY=screenTranslateY+(containerLayout.get().height-videoDimensions.get().height*scale.get())/2;const videoWidth=videoDimensions.get().width*scale.get();const videoHeight=videoDimensions.get().height*scale.get();if(videoHeight>=containerLayout.get().height&&adjustedScreenTranslateX>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateX<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth>=containerLayout.get().width-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth<=containerLayout.get().width+SNAP_EDGE_OUTER_THRESHOLD){return true;}if(videoWidth>=containerLayout.get().width&&adjustedScreenTranslateY>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateY<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight>=containerLayout.get().height-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight<=containerLayout.get().height+SNAP_EDGE_OUTER_THRESHOLD){return true;}return false;}" };
let closure_27 = { code: "function VoicePanelVideoRendererTsx10(){const{numGesturesActive,isInSnap,resetToDefaultSize,scale,fitScale,videoDimensions,containerLayout,translateX,withSpring,SCALE_PHYSICS,translateY}=this.__closure;if(numGesturesActive.get()>0){return;}if(isInSnap.get()){isInSnap.set(false);resetToDefaultSize('cover');return;}if(scale.get()<fitScale.get()){resetToDefaultSize('fit');return;}const maxTranslateY=Math.max(0,(videoDimensions.get().height-containerLayout.get().height/scale.get())/2);const maxTranslateX=Math.max(0,(videoDimensions.get().width-containerLayout.get().width/scale.get())/2);translateX.set(withSpring(Math.min(maxTranslateX,Math.max(-maxTranslateX,translateX.get())),SCALE_PHYSICS));translateY.set(withSpring(Math.min(maxTranslateY,Math.max(-maxTranslateY,translateY.get())),SCALE_PHYSICS));}" };
const __initData2 = { code: "function VoicePanelVideoRendererTsx11(){const{focused,id,isInDefaultZoom,isInPanToZoom}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id&&(!isInDefaultZoom.get()||isInPanToZoom.get());}" };
const __initData3 = { code: "function VoicePanelVideoRendererTsx12(isFocusedZoomed,previous){const{setIsFocusedVideoZoomed}=this.__closure;if(isFocusedZoomed===previous){return;}setIsFocusedVideoZoomed(isFocusedZoomed);}" };
const __initData4 = { code: "function VoicePanelVideoRendererTsx13(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}" };
const __initData5 = { code: "function VoicePanelVideoRendererTsx14(isFocused,previous){const{resetOnLayoutChange}=this.__closure;if(isFocused===previous){return;}resetOnLayoutChange();}" };
const __initData6 = { code: "function VoicePanelVideoRendererTsx15(){const{mode}=this.__closure;return mode.get();}" };
const __initData7 = { code: "function VoicePanelVideoRendererTsx16(mode,previous){const{resetOnLayoutChange}=this.__closure;if(mode===previous){return;}resetOnLayoutChange();}" };
const __initData8 = { code: "function VoicePanelVideoRendererTsx17(){const{videoDimensions}=this.__closure;return videoDimensions.get();}" };
const __initData9 = { code: "function VoicePanelVideoRendererTsx18(layout,previous){const{currentSizeThreshold,resetOnLayoutChange}=this.__closure;if(currentSizeThreshold==null){return;}if(layout.width===(previous===null||previous===void 0?void 0:previous.width)&&layout.height===(previous===null||previous===void 0?void 0:previous.height)){return;}resetOnLayoutChange();}" };
const __initData10 = { code: "function VoicePanelVideoRendererTsx19(){const{coverScale}=this.__closure;return coverScale.get();}" };
const __initData11 = { code: "function VoicePanelVideoRendererTsx20(current,previous){const{currentSizeThreshold,resetToDefaultSize}=this.__closure;const _currentSizeThreshold=currentSizeThreshold.get();if(_currentSizeThreshold!=='cover'){return;}if(current===previous){return;}resetToDefaultSize(_currentSizeThreshold);}" };
const __initData12 = { code: "function VoicePanelVideoRendererTsx21(){const{isInSnap}=this.__closure;return isInSnap.get();}" };
const __initData13 = { code: "function VoicePanelVideoRendererTsx22(current,previous){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current===previous){return;}if(!current){return;}runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}" };
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
const __initData14 = { code: "function VoicePanelVideoRendererTsx38(){const{mode,focused,isScrollVisible,streamId}=this.__closure;var _focused$get;return[mode.get(),(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,isScrollVisible.get(),streamId];}" };
const __initData15 = { code: "function VoicePanelVideoRendererTsx39(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setHasActiveVideoOutputSink,shouldMakeActive,id}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[mode,focusedId,isScrollVisible,streamId]=props;if(streamId==null)return;runOnJS(setHasActiveVideoOutputSink)(streamId,shouldMakeActive({mode:mode,focusedId:focusedId,selfId:id,isScrollVisible:isScrollVisible}));}" };
const __initData16 = { code: "function VoicePanelVideoRendererTsx40(){const{focused,id,windowDimensions,sharedCoords}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id){return{width:windowDimensions.get().width,height:windowDimensions.get().height};}return{width:sharedCoords.get().width,height:sharedCoords.get().height};}" };
const __initData17 = { code: "function VoicePanelVideoRendererTsx41(){const{scale,videoDimensions,mode}=this.__closure;return[scale.get(),videoDimensions.get(),mode.get()];}" };
const __initData18 = { code: "function VoicePanelVideoRendererTsx42(props,previous){const{streamId,cheapWorkletShallowEqual,runOnJS,respondToVideoSizeUpdate}=this.__closure;if(streamId==null)return;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(respondToVideoSizeUpdate)();}" };
const __initData19 = { code: "function VoicePanelVideoRendererTsx43(){const{videoDimensions,pipState,VoicePanelPIPModes,scale,disableAnimations,translateX,translateY,mirror}=this.__closure;let{width:width,height:height}=videoDimensions.get();if(pipState.mode===VoicePanelPIPModes.IN_APP){if(width>height){width=width*(pipState.height/height)/scale.get();height=pipState.height/scale.get();}else{height=height*(pipState.width/width)/scale.get();width=pipState.width/scale.get();}}return{width:width,height:height,opacity:disableAnimations.get()?0:1,transform:[{scale:scale.get()},{translateX:translateX.get()},{translateY:translateY.get()},{scaleX:mirror?-1:1}]};}" };
const __initData20 = { code: "function VoicePanelVideoRendererTsx44(){const{mode,VoicePanelModes,focused,id}=this.__closure;var _focused$get;return{inPip:mode.get()===VoicePanelModes.PIP,isFocused:((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id};}" };
const __initData21 = { code: "function VoicePanelVideoRendererTsx45(curr,prev){const{cheapWorkletShallowEqual,strokeOpacity,withDelay,withTiming}=this.__closure;if(cheapWorkletShallowEqual(curr,prev!==null&&prev!==void 0?prev:undefined))return;if(curr.inPip||curr.isFocused){strokeOpacity.set(0);return;}const shouldDelay=(prev===null||prev===void 0?void 0:prev.isFocused)===true;strokeOpacity.set(shouldDelay?withDelay(300,withTiming(0.3,{duration:0},'animate-never')):0.3);}" };
const __initData22 = { code: "function VoicePanelVideoRendererTsx46(){const{isInSnap,SNAP_EDGE_INNER_THRESHOLD,borderRadius,strokeOpacity}=this.__closure;if(isInSnap.get()){return{position:'absolute',top:0,left:0,bottom:0,right:0,borderWidth:SNAP_EDGE_INNER_THRESHOLD,overflow:'hidden',borderColor:'white',opacity:0.5};}return{position:'absolute',top:-1,left:-1,bottom:-1,right:-1,borderWidth:2,borderRadius:borderRadius+2,overflow:'hidden',borderColor:'white',opacity:strokeOpacity.get()};}" };
const __initData23 = { code: "function VoicePanelVideoRendererTsx47(values){const{layout,disableAnimations}=this.__closure;return layout(values,disableAnimations.get());}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelVideoRenderer.tsx");

export default noop.memo(function VideoRenderer(streamKey) {
  let id = streamKey.id;
  const streamId = streamKey.streamId;
  ({ userId, videoSpinnerContext, sharedCoords } = streamKey);
  const isScrollVisible = streamKey.isScrollVisible;
  const isCamera = streamKey.isCamera;
  let flag = streamKey.mirror;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = streamKey.focusOnReady;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = streamKey.paused;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const layout = streamKey.layout;
  SCALE_PHYSICS = undefined;
  layoutManager = undefined;
  c16 = undefined;
  getScaleChangeWithOverscroll = undefined;
  let onReady;
  let setHasActiveVideoOutputSink;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let sharedValue6;
  __initData = undefined;
  let callback6;
  let token;
  let sharedValue10;
  let tmp = onReady();
  let tmp3 = sharedCoords;
  let obj = id(sharedCoords[16]);
  let obj1 = isCamera;
  const surfaceDirectRendererExperiment = obj.useSurfaceDirectRendererExperiment(userId, { location: "VoicePanelVideoRenderer" });
  const context = isCamera.useContext(streamId(sharedCoords[11]));
  const mode = context.mode;
  const focused = context.focused;
  ({ setFocused: c10, layoutManager } = context);
  const windowDimensions = context.windowDimensions;
  let obj2 = id(sharedCoords[8]);
  const sharedValue = obj2.useSharedValue(true);
  let obj3 = id(sharedCoords[8]);
  obj = {};
  const merged = Object.assign(layoutManager.getTargetDimensions(id));
  const sharedValue1 = obj3.useSharedValue(obj);
  let obj5 = id(sharedCoords[17]);
  const pIPState = obj5.usePIPState();
  let tmp11 = isCamera;
  if (isCamera) {
    tmp11 = pIPState.id === id;
  }
  [tmp13, c16] = isScrollVisible(obj1.useState(true), 2);
  getScaleChangeWithOverscroll = obj1.useRef(() => {
    if (flag2) {
      _undefined(id);
    }
  });
  onReady = tmp5(tmp3[18])({ streamId, userId, loading: tmp13, videoSpinnerContext, paused: flag3, streamKey: streamKey.streamKey }).onReady;
  streamId(tmp3[19])({ location: "VideoRenderer", videoSpinnerContext, userId, streamId, loading: tmp13 });
  let items = [onReady];
  const callback = obj1.useCallback(() => {
    translateX(false);
    translateY.current();
    onReady();
  }, items);
  let tmp2Result = tmp2(tmp3[20]);
  setHasActiveVideoOutputSink = tmp2Result.useSetHasActiveVideoOutputSink(context.streamOutputSinkStack);
  tmp2Result = tmp2(tmp3[8]);
  function qe() {
    const items = [mode.get(), , , ];
    value = focused.get();
    id = undefined;
    if (value != null) {
      id = value.id;
    }
    items[1] = id;
    items[2] = isScrollVisible.get();
    items[3] = streamId;
    return items;
  }
  qe.__closure = { mode, focused, isScrollVisible, streamId };
  qe.__workletHash = 3558943323767;
  qe.__initData = __initData14;
  class Je {
    constructor(arg0, arg1) {
      tmp = arg1;
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj = closure_0(closure_2[13]);
      if (!obj.cheapWorkletArrayShallowEqual(streamKey, tmp)) {
        tmp4 = closure_3;
        num = 4;
        tmp5 = closure_3(streamKey, 4);
        tmp7 = tmp5[1];
        tmp8 = tmp5[2];
        tmp9 = tmp5[3];
        if (null != tmp9) {
          tmp2Result = tmp2(tmp3[8]);
          tmp11 = closure_19;
          tmp13 = shouldMakeActive;
          if (typeof shouldMakeActive === "function") {
            tmp15 = VoicePanelModes;
            tmp16 = !tmp8;
            if (tmp8) {
              tmp16 = tmp6 === VoicePanelModes.PIP;
            }
            if (!tmp16) {
              tmp17 = null != tmp7 && tmp7 !== tmp14;
              tmp16 = tmp17;
            }
            tmp12Result = tmp12(tmp9, !tmp16);
          } else {
            str = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
      return;
    }
  }
  obj = { cheapWorkletArrayShallowEqual: tmp2(tmp3[13]).cheapWorkletArrayShallowEqual, runOnJS: tmp2(tmp3[8]).runOnJS, setHasActiveVideoOutputSink, shouldMakeActive, id };
  Je.__closure = obj;
  Je.__workletHash = 12089612803324;
  Je.__initData = __initData15;
  const animatedReaction = tmp2Result.useAnimatedReaction(qe, Je);
  const items1 = [sharedValue1, layoutManager, id, sharedValue];
  const callback1 = obj1.useCallback((nativeEvent) => {
    ({ width, height } = nativeEvent.nativeEvent);
    updateSharedValueIfChangedDefault(sharedValue1, { width, height });
    layoutManager.setTargetDimensions(id, width, height);
    if (sharedValue.get()) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const result = borderWidth.set(false);
      }, 34);
    }
  }, items1);
  const tmp12 = isScrollVisible(obj1.useState(true), 2);
  class Be {
    constructor() {
      value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      if (id === id) {
        size = { width: null, height: null };
        tmp4 = windowDimensions;
        size.width = windowDimensions.get().width;
        size.height = windowDimensions.get().height;
        size1 = size;
      } else {
        size1 = { width: null, height: null };
        tmp3 = sharedCoords;
        size1.width = sharedCoords.get().width;
        size1.height = sharedCoords.get().height;
      }
      return size1;
    }
  }
  Be.__closure = { focused, id, windowDimensions, sharedCoords };
  Be.__workletHash = 9631392718391;
  Be.__initData = __initData16;
  const derivedValue = id(tmp3[8]).useDerivedValue(Be);
  closure_129_0 = id;
  closure_129_1 = isCamera;
  closure_129_2 = focused;
  closure_129_3 = mode;
  closure_129_4 = tmp13;
  closure_129_5 = derivedValue;
  closure_129_6 = sharedValue1;
  closure_129_7 = sharedValue;
  closure_129_24 = undefined;
  closure_129_25 = undefined;
  closure_129_26 = undefined;
  closure_129_27 = undefined;
  closure_129_28 = undefined;
  closure_129_29 = undefined;
  const context1 = obj1.useContext(tmp5(tmp3[11]));
  const setIsFocusedVideoZoomed = context1.setIsFocusedVideoZoomed;
  closure_129_8 = setIsFocusedVideoZoomed;
  const windowDimensions2 = context1.windowDimensions;
  closure_129_9 = windowDimensions2;
  const dismissToPIPGestureRef = context1.dismissToPIPGestureRef;
  closure_129_10 = dismissToPIPGestureRef;
  const setFocused = context1.setFocused;
  closure_129_11 = setFocused;
  const hideControls = context1.hideControls;
  closure_129_12 = hideControls;
  const controlsSpecs = context1.controlsSpecs;
  closure_129_13 = controlsSpecs;
  const showControls = context1.showControls;
  closure_129_14 = showControls;
  const tmp2Result1 = id(tmp3[8]);
  sharedValue2 = id(tmp3[8]).useSharedValue(1);
  closure_129_15 = sharedValue2;
  const tmp2Result2 = id(tmp3[8]);
  sharedValue3 = id(tmp3[8]).useSharedValue(0);
  closure_129_16 = sharedValue3;
  const tmp2Result3 = id(tmp3[8]);
  sharedValue4 = id(tmp3[8]).useSharedValue(0);
  closure_129_17 = sharedValue4;
  const tmp2Result4 = id(tmp3[8]);
  const sharedValue5 = id(tmp3[8]).useSharedValue(0);
  closure_129_18 = sharedValue5;
  const tmp2Result5 = id(tmp3[8]);
  sharedValue6 = id(tmp3[8]).useSharedValue(false);
  closure_129_19 = sharedValue6;
  const tmp2Result6 = id(tmp3[8]);
  const sharedValue7 = id(tmp3[8]).useSharedValue(0);
  closure_129_20 = sharedValue7;
  const tmp2Result7 = id(tmp3[8]);
  const sharedValue8 = id(tmp3[8]).useSharedValue(false);
  closure_129_21 = sharedValue8;
  const tmp2Result8 = id(tmp3[8]);
  const sharedValue9 = id(tmp3[8]).useSharedValue(null);
  closure_129_22 = sharedValue9;
  const tmp2Result9 = id(tmp3[8]);
  let fn = function w() {
    const result = flag.get().width / flag2.get().width;
    return Math.max(result, flag.get().height / flag2.get().height);
  };
  fn.__closure = { containerLayout: derivedValue, videoDimensions: sharedValue1 };
  fn.__workletHash = 4177496646282;
  fn.__initData = setHasActiveVideoOutputSink;
  const derivedValue1 = id(tmp3[8]).useDerivedValue(fn);
  closure_129_23 = derivedValue1;
  const tmp2Result10 = id(tmp3[8]);
  class D {
    constructor() {
      result = c5.get().width / c6.get().width;
      return Math.min(result, c5.get().height / c6.get().height);
    }
  }
  D.__closure = { containerLayout: derivedValue, videoDimensions: sharedValue1 };
  D.__workletHash = 5260375952053;
  D.__initData = sharedValue2;
  const derivedValue2 = id(tmp3[8]).useDerivedValue(D);
  closure_129_24 = derivedValue2;
  const tmp2Result11 = id(tmp3[8]);
  class I {
    constructor() {
      tmp = 0 === closure_16.get();
      if (tmp) {
        tmp2 = closure_17;
        tmp = 0 === closure_17.get();
      }
      if (tmp) {
        obj = closure_15;
        tmp4 = closure_24;
        value = closure_15.get();
        tmp5 = value === closure_24.get();
        if (!tmp5) {
          tmp7 = closure_23;
          value1 = obj.get();
          tmp5 = value1 === closure_23.get();
        }
        tmp = tmp5;
      }
      return tmp;
    }
  }
  I.__closure = { translateX: sharedValue3, translateY: sharedValue4, scale: sharedValue2, fitScale: derivedValue2, coverScale: derivedValue1 };
  I.__workletHash = 15099362638406;
  I.__initData = sharedValue3;
  const derivedValue3 = id(tmp3[8]).useDerivedValue(I);
  closure_129_25 = derivedValue3;
  function ae(arg0) {
    if ("fit" === arg0) {
      value = fitScale.get();
      let str2 = "respect-motion-settings";
      if (layout.get()) {
        str2 = "animate-never";
      }
      const result = pIPState.set(spring.withSpring(value, MODE_CHANGE_PHYSICS, str2));
    } else {
      value = sharedValue6.get();
      let str = "respect-motion-settings";
      if (layout.get()) {
        str = "animate-never";
      }
      const result1 = pIPState.set(spring.withSpring(value, MODE_CHANGE_PHYSICS, str));
    }
    const result2 = translateX.set(spring.withSpring(0, SCALE_PHYSICS));
    const result3 = translateY.set(spring.withSpring(0, SCALE_PHYSICS));
    const result4 = sharedValue4.set(arg0);
  }
  obj1 = { scale: sharedValue2, withSpring: tmp2(tmp3[12]).withSpring, fitScale: derivedValue2, MODE_CHANGE_PHYSICS: layout, disableAnimations: sharedValue, coverScale: derivedValue1, translateX: sharedValue3, SCALE_PHYSICS, translateY: sharedValue4, currentSizeThreshold: sharedValue9 };
  ae.__closure = obj1;
  ae.__workletHash = 16610861286231;
  ae.__initData = sharedValue4;
  const items2 = [sharedValue2, sharedValue3, sharedValue4, derivedValue1, sharedValue9, derivedValue2, sharedValue];
  const callback2 = obj1.useCallback(ae, items2);
  closure_129_26 = callback2;
  function re() {
    value = sharedCoords.get();
    id = undefined;
    if (value != null) {
      id = value.id;
    }
    let str = "cover";
    if (id === id) {
      str = "fit";
    }
    let tmp5 = streamId;
    const tmp3 = flag2.get().width >= flag2.get().height;
    if (streamId) {
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
  const callback3 = obj1.useCallback(re, items3);
  closure_129_27 = callback3;
  const tmp2Result12 = id(tmp3[8]);
  function le() {
    return flag.get();
  }
  le.__closure = { containerLayout: derivedValue };
  le.__workletHash = 9695573702258;
  le.__initData = __initData;
  function ce(safeAreaState, current) {
    if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp)) {
      value = sharedCoords.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      if (tmp6) {
        sharedValue10();
      }
      tmp6 = id === id && safeAreaState !== current && null != current;
    }
    obj = cheapWorkletShallowEqual;
    tmp = current;
  }
  obj2 = { cheapWorkletShallowEqual: tmp2(tmp3[13]).cheapWorkletShallowEqual, focused, id, resetOnLayoutChange: callback3 };
  ce.__closure = obj2;
  ce.__workletHash = 13816224514199;
  ce.__initData = callback6;
  const animatedReaction1 = id(tmp3[8]).useAnimatedReaction(le, ce);
  class Le {
    constructor() {
      value = closure_23.get();
      if (value < closure_24.get() + 0.05) {
        flag2 = false;
        return false;
      } else {
        tmp12 = closure_16;
        obj = closure_15;
        value1 = closure_16.get();
        result = value1 * closure_15.get();
        tmp15 = closure_17;
        value2 = closure_17.get();
        result1 = value2 * closure_15.get();
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
                  tmp3 = c13;
                  tmp2 = sum <= c13;
                }
                if (tmp2) {
                  sum2 = sum + result2;
                  tmp5 = c13;
                  tmp2 = sum2 >= obj2.get().width - c13;
                }
                if (tmp2) {
                  sum3 = sum + result2;
                  tmp2 = sum3 <= obj2.get().width + 50;
                }
                if (!tmp2) {
                  tmp7 = result2 >= obj2.get().width && sum1 >= -50;
                  if (tmp7) {
                    tmp8 = c13;
                    tmp7 = sum1 <= c13;
                  }
                  if (tmp7) {
                    sum4 = sum1 + result3;
                    tmp10 = c13;
                    tmp7 = sum4 >= obj2.get().height - c13;
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
  Le.__closure = { coverScale: derivedValue1, fitScale: derivedValue2, MIN_ZOOM_FOR_COVER_SNAP_OFFSET: 0.05, translateX: sharedValue3, scale: sharedValue2, translateY: sharedValue4, SNAP_CENTER_THRESHOLD: 50, containerLayout: derivedValue, videoDimensions: sharedValue1, SNAP_EDGE_OUTER_THRESHOLD: 50, SNAP_EDGE_INNER_THRESHOLD: sharedValue };
  Le.__workletHash = 3902544453390;
  Le.__initData = token;
  const items4 = [derivedValue1, sharedValue2, sharedValue3, sharedValue4, derivedValue, sharedValue1, derivedValue2];
  const callback4 = obj1.useCallback(Le, items4);
  closure_129_28 = callback4;
  function ye() {
    if (onReady.get() <= 0) {
      if (setHasActiveVideoOutputSink.get()) {
        const result = setHasActiveVideoOutputSink.set(false);
        token("cover");
      } else {
        value = pIPState.get();
        if (value < fitScale.get()) {
          token("fit");
        } else {
          const _Math = Math;
          const bound = Math.max(0, (flag2.get().height - flag.get().height / pIPState.get()) / 2);
          const _Math2 = Math;
          const bound1 = Math.max(0, (flag2.get().width - flag.get().width / pIPState.get()) / 2);
          const _Math3 = Math;
          const _Math4 = Math;
          const result1 = translateX.set(spring.withSpring(Math.min(bound1, Math.max(-bound1, translateX.get())), SCALE_PHYSICS));
          const tmp16 = -bound1;
          const _Math5 = Math;
          const _Math6 = Math;
          const result2 = translateY.set(spring.withSpring(Math.min(bound, Math.max(-bound, translateY.get())), SCALE_PHYSICS));
          const tmp20 = -bound;
        }
      }
    }
  }
  obj3 = { numGesturesActive: sharedValue5, isInSnap: sharedValue6, resetToDefaultSize: callback2, scale: sharedValue2, fitScale: derivedValue2, videoDimensions: sharedValue1, containerLayout: derivedValue, translateX: sharedValue3, withSpring: tmp2(tmp3[12]).withSpring, SCALE_PHYSICS, translateY: sharedValue4 };
  ye.__closure = obj3;
  ye.__workletHash = 3493652911835;
  ye.__initData = sharedValue10;
  const items5 = [derivedValue2, sharedValue5, sharedValue6, sharedValue2, sharedValue1, derivedValue, sharedValue3, sharedValue4, callback2];
  const callback5 = obj1.useCallback(ye, items5);
  closure_129_29 = callback5;
  const tmp2Result13 = id(tmp3[8]);
  const tmp35 = sharedValue;
  function xe() {
    value = sharedCoords.get();
    id = undefined;
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
  xe.__initData = __initData2;
  function ke(activeIndex, arg1) {
    if (activeIndex !== arg1) {
      mode(activeIndex);
    }
  }
  ke.__closure = { setIsFocusedVideoZoomed };
  ke.__workletHash = 10707557639101;
  ke.__initData = __initData3;
  const animatedReaction2 = id(tmp3[8]).useAnimatedReaction(xe, ke);
  const tmp2Result14 = id(tmp3[8]);
  class Me {
    constructor() {
      value = sharedCoords.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return id === id;
    }
  }
  Me.__closure = { focused, id };
  Me.__workletHash = 619124678280;
  Me.__initData = __initData4;
  function be(arg0, arg1) {
    if (arg0 !== arg1) {
      sharedValue10();
    }
  }
  be.__closure = { resetOnLayoutChange: callback3 };
  be.__workletHash = 8458824233146;
  be.__initData = __initData5;
  const animatedReaction3 = id(tmp3[8]).useAnimatedReaction(Me, be);
  const tmp2Result15 = id(tmp3[8]);
  class Ye {
    constructor() {
      return isScrollVisible.get();
    }
  }
  Ye.__closure = { mode };
  Ye.__workletHash = 7040117988961;
  Ye.__initData = __initData6;
  class Ne {
    constructor(arg0, arg1) {
      if (streamKey !== arg1) {
        tmp = closure_27;
        tmp2 = closure_27();
      }
      return;
    }
  }
  Ne.__closure = { resetOnLayoutChange: callback3 };
  Ne.__workletHash = 9279120690968;
  Ne.__initData = __initData7;
  const animatedReaction4 = id(tmp3[8]).useAnimatedReaction(Ye, Ne);
  const tmp2Result16 = id(tmp3[8]);
  class Ge {
    constructor() {
      return c6.get();
    }
  }
  Ge.__closure = { videoDimensions: sharedValue1 };
  Ge.__workletHash = 8748184223523;
  Ge.__initData = __initData8;
  class Fe {
    constructor(arg0, arg1) {
      if (null != closure_22) {
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
          tmp6 = closure_27;
          tmp7 = closure_27();
        }
      }
      return;
    }
  }
  Fe.__closure = { currentSizeThreshold: sharedValue9, resetOnLayoutChange: callback3 };
  Fe.__workletHash = 8464422969486;
  Fe.__initData = __initData9;
  const animatedReaction5 = id(tmp3[8]).useAnimatedReaction(Ge, Fe);
  const tmp2Result17 = id(tmp3[8]);
  function ze() {
    return sharedValue6.get();
  }
  ze.__closure = { coverScale: derivedValue1 };
  ze.__workletHash = 5444376625069;
  ze.__initData = __initData10;
  class Xe {
    constructor(arg0, arg1) {
      value = closure_22.get();
      tmp2 = "cover" === value;
      if (tmp2) {
        tmp3 = streamKey;
        tmp4 = arg1;
        tmp2 = streamKey !== arg1;
      }
      if (tmp2) {
        tmp5 = closure_26;
        tmp6 = closure_26(value);
      }
      return;
    }
  }
  Xe.__closure = { currentSizeThreshold: sharedValue9, resetToDefaultSize: callback2 };
  Xe.__workletHash = 10764193588506;
  Xe.__initData = __initData11;
  const animatedReaction6 = id(tmp3[8]).useAnimatedReaction(ze, Xe);
  const tmp2Result18 = id(tmp3[8]);
  function $e() {
    return setHasActiveVideoOutputSink.get();
  }
  $e.__closure = { isInSnap: sharedValue6 };
  $e.__workletHash = 2178206594630;
  $e.__initData = __initData12;
  class Ze {
    constructor(arg0, arg1) {
      tmp = streamKey !== arg1 && streamKey;
      if (tmp) {
        tmp2 = id;
        tmp3 = sharedCoords;
        obj = id(sharedCoords[8]);
        runOnJSResult = obj.runOnJS(id(sharedCoords[14]).triggerHapticFeedback);
        tmp4Result = runOnJSResult(id(sharedCoords[14]).HapticFeedbackTypes.IMPACT_LIGHT);
      }
      return;
    }
  }
  const tmp2Result19 = id(tmp3[8]);
  Ze.__closure = { runOnJS: id(tmp3[8]).runOnJS, triggerHapticFeedback: id(tmp3[14]).triggerHapticFeedback, HapticFeedbackTypes: id(tmp3[14]).HapticFeedbackTypes };
  Ze.__workletHash = 11115846398818;
  Ze.__initData = __initData13;
  const animatedReaction7 = tmp2Result19.useAnimatedReaction($e, Ze);
  const items6 = [tmp13, dismissToPIPGestureRef, focused, id, sharedValue2, sharedValue3, sharedValue4, callback3, sharedValue5, sharedValue9, derivedValue, sharedValue6, callback4, callback5, sharedValue7, sharedValue8, derivedValue3, setFocused, hideControls, controlsSpecs, showControls, derivedValue2];
  const memo = obj1.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const Gesture2 = LegacyBaseButton.Gesture;
    const Gesture3 = LegacyBaseButton.Gesture;
    const TapResult = Gesture3.Tap();
    class O {
      constructor(arg0, arg1) {
        return arg1.fail();
      }
    }
    O.__closure = {};
    O.__workletHash = 17368742583362;
    O.__initData = __initData2;
    const numberOfTapsResult = Gesture3.Tap().numberOfTaps(2);
    class E {
      constructor() {
        if (closure_1_25.get()) {
          tmp3 = closure_1_2;
          value = closure_1_2.get();
          tmp5 = null;
          id = undefined;
          if (value != null) {
            id = value.id;
          }
          if (id !== closure_1_0) {
            tmp12 = id;
            tmp13 = sharedCoords;
            obj2 = id(sharedCoords[8]);
            tmp14 = closure_1_11;
            tmp15 = obj2.runOnJS(closure_1_11)(tmp7);
          } else {
            tmp8 = id;
            tmp9 = sharedCoords;
            obj = id(sharedCoords[8]);
            tmp10 = closure_1_11;
            tmp11 = obj.runOnJS(closure_1_11)(null);
          }
        } else {
          tmp = closure_1_27;
          tmp2 = closure_1_27();
        }
        return;
      }
    }
    let obj = { isInDefaultZoom: callback6, resetOnLayoutChange: sharedValue10, focused: sharedCoords, id, runOnJS: ReanimatedRexport2.runOnJS, setFocused: layoutManager };
    E.__closure = obj;
    E.__workletHash = 10743965328356;
    E.__initData = __initData;
    const onTouchesMoveResult = Gesture3.Tap().numberOfTaps(2).onTouchesMove(O);
    const Gesture4 = LegacyBaseButton.Gesture;
    const onStartResult = Gesture3.Tap().numberOfTaps(2).onTouchesMove(O).onStart(E);
    class C {
      constructor(arg0, arg1) {
        return arg1.fail();
      }
    }
    C.__closure = {};
    C.__workletHash = 8766053850176;
    C.__initData = __initData4;
    const TapResult1 = Gesture4.Tap();
    class V {
      constructor() {
        if (closure_1_13.get().mode === mode.HIDDEN) {
          tmp5 = id;
          tmp6 = sharedCoords;
          obj2 = id(sharedCoords[8]);
          tmp7 = closure_1_14;
          tmp8 = obj2.runOnJS(closure_1_14)({ debounce: true });
        } else {
          tmp = id;
          tmp2 = sharedCoords;
          obj = id(sharedCoords[8]);
          tmp3 = closure_1_12;
          tmp4 = obj.runOnJS(closure_1_12)({ debounce: true });
        }
        return;
      }
    }
    obj = { controlsSpecs: sharedValue, VoicePanelControlsModes, runOnJS: ReanimatedRexport2.runOnJS, showControls: sharedValue1, hideControls: windowDimensions };
    V.__closure = obj;
    V.__workletHash = 11260765819879;
    V.__initData = __initData3;
    const onTouchesMoveResult1 = Gesture4.Tap().onTouchesMove(C);
    const Gesture5 = LegacyBaseButton.Gesture;
    const ExclusiveResult = Gesture2.Exclusive(onStartResult, Gesture4.Tap().onTouchesMove(C).onStart(V));
    const PinchResult = Gesture5.Pinch();
    class I {
      constructor(arg0, arg1) {
        value = closure_1_2.get();
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        if (id !== closure_1_0) {
          tmp3 = arg1;
          failResult = arg1.fail();
        }
        return;
      }
    }
    I.__closure = { focused: sharedCoords, id };
    I.__workletHash = 8765017804058;
    I.__initData = __initData8;
    const enabledResult = Gesture5.Pinch().enabled(!isCamera);
    class D {
      constructor() {
        result = closure_1_18.set(closure_1_18.get() + 1);
        result1 = closure_1_21.set(false);
        result2 = closure_1_22.set(null);
        return;
      }
    }
    D.__closure = { numGesturesActive: onReady, isInPanToZoom: sharedValue3, currentSizeThreshold: sharedValue4 };
    D.__workletHash = 3449238089307;
    D.__initData = __initData7;
    const obj1 = { numGesturesActive: onReady, isInPanToZoom: sharedValue3, currentSizeThreshold: sharedValue4 };
    const onTouchesDownResult = Gesture5.Pinch().enabled(!isCamera).onTouchesDown(I);
    const fn = function w(scaleChange) {
      PAN_TO_ZOOM_SCALE_FACTOR.get();
      value = PAN_TO_ZOOM_SCALE_FACTOR.get();
      scaleChange = scaleChange.scaleChange;
      if (typeof closure_17 === "function") {
        let sum = scaleChange;
        if (value < tmp3) {
          const diff = 1 - value;
          const _Math = Math;
          const diff1 = scaleChange - 1;
          sum = 1 + diff1 * Math.max(0.1, 1 - diff * diff * 5);
        }
        const result = PAN_TO_ZOOM_SCALE_FACTOR.set(value * sum);
        const diff2 = scaleChange.focalX - flag.get().width / 2;
        const diff3 = scaleChange.focalY - flag.get().height / 2;
        const diff4 = scaleChange.scaleChange - 1;
        const result1 = -1 * diff2 * diff4 / PAN_TO_ZOOM_SCALE_FACTOR.get();
        const diff5 = scaleChange.scaleChange - 1;
        const result2 = -1 * diff3 * diff5 / PAN_TO_ZOOM_SCALE_FACTOR.get();
        const result3 = translateX.set(translateX.get() + result1);
        const result4 = translateY.set(translateY.get() + result2);
        const result5 = setHasActiveVideoOutputSink.set(isInCoverSnap());
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    fn.__closure = { scale: pIPState, getScaleChangeWithOverscroll, fitScale, containerLayout: flag, translateX, translateY, isInSnap: setHasActiveVideoOutputSink, isInCoverSnap };
    fn.__workletHash = 2077670235308;
    fn.__initData = __initData6;
    let obj2 = { scale: pIPState, getScaleChangeWithOverscroll, fitScale, containerLayout: flag, translateX, translateY, isInSnap: setHasActiveVideoOutputSink, isInCoverSnap };
    const onStartResult1 = Gesture5.Pinch().enabled(!isCamera).onTouchesDown(I).onStart(D);
    const fn2 = function v() {
      const result = onReady.set(onReady.get() - 1);
      handleMovementEnd();
    };
    fn2.__closure = { numGesturesActive: onReady, handleMovementEnd };
    fn2.__workletHash = 5853458336611;
    fn2.__initData = __initData5;
    const obj3 = { numGesturesActive: onReady, handleMovementEnd };
    const onChangeResult = Gesture5.Pinch().enabled(!isCamera).onTouchesDown(I).onStart(D).onChange(fn);
    const Gesture6 = LegacyBaseButton.Gesture;
    const onEndResult = Gesture5.Pinch().enabled(!isCamera).onTouchesDown(I).onStart(D).onChange(fn).onEnd(fn2);
    const PanResult = Gesture6.Pan();
    let result = Gesture6.Pan().enabled(!isCamera).requireExternalGestureToFail(c10);
    const enabledResult1 = Gesture6.Pan().enabled(!isCamera);
    const fn3 = function f(arg0, fail) {
      value = sharedCoords.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      if (id !== closure_1_0) {
        fail.fail();
      }
    };
    fn3.__closure = { focused: sharedCoords, id };
    fn3.__workletHash = 2184905113389;
    fn3.__initData = __initData14;
    const averageTouchesResult = result.averageTouches(true);
    class S {
      constructor() {
        timestamp = Date.now();
        result = closure_1_21.set(timestamp - closure_1_20.get() <= 250);
        result1 = closure_1_20.set(Date.now());
        return;
      }
    }
    S.__closure = { lastTapTimestamp: sharedValue2, PAN_TO_ZOOM_TAP_TIME_MILLIS: 250, isInPanToZoom: sharedValue3 };
    S.__workletHash = 7713579688732;
    S.__initData = __initData13;
    const obj4 = { lastTapTimestamp: sharedValue2, PAN_TO_ZOOM_TAP_TIME_MILLIS: 250, isInPanToZoom: sharedValue3 };
    const onTouchesDownResult1 = result.averageTouches(true).onTouchesDown(fn3);
    const fn4 = function c() {
      if (sharedValue3.get()) {
        id(sharedCoords[8]).runOnJS(windowDimensions)();
        const obj = id(sharedCoords[8]);
      }
      const result = onReady.set(onReady.get() + 1);
      const result1 = sharedValue4.set(null);
    };
    const onBeginResult = result.averageTouches(true).onTouchesDown(fn3).onBegin(S);
    fn4.__closure = { isInPanToZoom: sharedValue3, runOnJS: ReanimatedRexport2.runOnJS, hideControls: windowDimensions, numGesturesActive: onReady, currentSizeThreshold: sharedValue4 };
    fn4.__workletHash = 16349993539830;
    fn4.__initData = __initData12;
    const obj5 = { isInPanToZoom: sharedValue3, runOnJS: ReanimatedRexport2.runOnJS, hideControls: windowDimensions, numGesturesActive: onReady, currentSizeThreshold: sharedValue4 };
    const fn5 = function s(changeY) {
      if (sharedValue3.get()) {
        const result = changeY.changeY * pIPState;
        PAN_TO_ZOOM_SCALE_FACTOR.get();
        value = PAN_TO_ZOOM_SCALE_FACTOR.get();
        if (typeof closure_17 === "function") {
          const sum = 1 + result;
          let sum1 = sum;
          if (value < tmp15) {
            const diff = 1 - value;
            const _Math = Math;
            sum1 = 1 + (sum - 1) * Math.max(0.1, 1 - diff * diff * 5);
          }
          const result1 = PAN_TO_ZOOM_SCALE_FACTOR.set(value * sum1);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        const value1 = translateX.get();
        const result2 = translateX.set(value1 + changeY.changeX / PAN_TO_ZOOM_SCALE_FACTOR.get());
        value2 = translateY.get();
        const result3 = translateY.set(value2 + changeY.changeY / PAN_TO_ZOOM_SCALE_FACTOR.get());
      }
      const result4 = setHasActiveVideoOutputSink.set(isInCoverSnap());
    };
    fn5.__closure = { isInPanToZoom: sharedValue3, PAN_TO_ZOOM_SCALE_FACTOR, scale: pIPState, getScaleChangeWithOverscroll, fitScale, translateX, translateY, isInSnap: setHasActiveVideoOutputSink, isInCoverSnap };
    fn5.__workletHash = 17282206686388;
    fn5.__initData = __initData11;
    const obj6 = { isInPanToZoom: sharedValue3, PAN_TO_ZOOM_SCALE_FACTOR, scale: pIPState, getScaleChangeWithOverscroll, fitScale, translateX, translateY, isInSnap: setHasActiveVideoOutputSink, isInCoverSnap };
    const onStartResult2 = onBeginResult.onStart(fn4);
    const fn6 = function n(velocityX) {
      const result = onReady.set(onReady.get() - 1);
      value = translateX.get();
      const result1 = velocityX.velocityX * sharedValue1;
      const result2 = translateX.set(id(sharedCoords[12]).withSpring(value + result1 / PAN_TO_ZOOM_SCALE_FACTOR.get(), c10));
      const obj = id(sharedCoords[12]);
      value = translateY.get();
      const result3 = velocityX.velocityY * sharedValue1;
      const result4 = translateY.set(id(sharedCoords[12]).withSpring(value + result3 / PAN_TO_ZOOM_SCALE_FACTOR.get(), c10));
      handleMovementEnd();
    };
    const onChangeResult1 = onBeginResult.onStart(fn4).onChange(fn5);
    fn6.__closure = { numGesturesActive: onReady, translateX, withSpring: spring.withSpring, FLING_VELOCITY_SCALING, scale: pIPState, SCALE_PHYSICS, translateY, handleMovementEnd };
    fn6.__workletHash = 10045783163820;
    fn6.__initData = __initData10;
    const obj7 = { numGesturesActive: onReady, translateX, withSpring: spring.withSpring, FLING_VELOCITY_SCALING, scale: pIPState, SCALE_PHYSICS, translateY, handleMovementEnd };
    const fn7 = function t() {
      const result = sharedValue3.set(false);
    };
    fn7.__closure = { isInPanToZoom: sharedValue3 };
    fn7.__workletHash = 2318423816868;
    fn7.__initData = __initData9;
    return Gesture.Simultaneous(ExclusiveResult, onEndResult, onChangeResult1.onEnd(fn6).onFinalize(fn7));
  }, items6);
  value = flag.get();
  __initData = value;
  const items7 = [streamId, isCamera, sharedValue2, sharedValue1, mode, value];
  callback6 = obj1.useCallback(() => {
    let tmp2 = null == streamId;
    if (!tmp2) {
      tmp2 = isCamera;
    }
    if (!tmp2) {
      tmp2 = mode.get() !== VoicePanelModes.PANEL;
    }
    if (!tmp2) {
      const size = { width: sharedValue1.get().width * c24, height: sharedValue1.get().height * c24 };
      VideoActionCreators.updateVideoSize(streamId, size, sharedValue2.get());
    }
  }, items7);
  let obj4 = { runOnJS: id(tmp3[8]).runOnJS, triggerHapticFeedback: id(tmp3[14]).triggerHapticFeedback, HapticFeedbackTypes: id(tmp3[14]).HapticFeedbackTypes };
  class Qe {
    constructor() {
      items = [, , ];
      items[0] = closure_20.get();
      items[1] = closure_14.get();
      items[2] = mode.get();
      return items;
    }
  }
  Qe.__closure = { scale: sharedValue2, videoDimensions: sharedValue1, mode };
  Qe.__workletHash = 16492795532326;
  Qe.__initData = __initData17;
  class Ke {
    constructor(arg0, arg1) {
      if (null != streamId) {
        tmp = arg1;
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[13]);
        tmp4 = streamKey;
        if (!obj.cheapWorkletShallowEqual(streamKey, tmp)) {
          tmp2Result = tmp2(tmp3[8]);
          tmp5 = closure_25;
          tmp6 = tmp2Result.runOnJS(closure_25)();
        }
      }
      return;
    }
  }
  obj5 = { streamId, cheapWorkletShallowEqual: tmp2(tmp3[13]).cheapWorkletShallowEqual, runOnJS: tmp2(tmp3[8]).runOnJS, respondToVideoSizeUpdate: callback6 };
  Ke.__closure = obj5;
  Ke.__workletHash = 5259362546534;
  Ke.__initData = __initData18;
  const animatedReaction8 = id(tmp3[8]).useAnimatedReaction(Qe, Ke);
  const items8 = [callback6];
  const effect = obj1.useEffect(() => {
    closure_0 = streamId(sharedCoords[23]).addOnPipModeChangedListener((arg0) => {
      if (!arg0) {
        callback6();
      }
    });
    return () => {
      if (closure_0 != null) {
        closure_0.remove();
      }
    };
  }, items8);
  const tmp2Result20 = id(tmp3[8]);
  function dt() {
    value = sharedValue1.get();
    ({ width, height } = value);
    let size = pIPState;
    if (pIPState.mode !== VoicePanelPIPModes.IN_APP) {
      size = { width, height, opacity: null, transform: null };
      let num = 1;
      let num2 = 1;
      if (sharedValue.get()) {
        num2 = 0;
      }
      size.opacity = num2;
      let obj = { scale: sharedValue2.get() };
      const items = [obj, , , ];
      obj = { translateX: sharedValue3.get() };
      items[1] = obj;
      const obj1 = { translateY: sharedValue4.get() };
      items[2] = obj1;
      if (flag) {
        num = -1;
      }
      const obj2 = { scaleX: num };
      items[3] = obj2;
      size.transform = items;
      return size;
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
  dt.__closure = { videoDimensions: sharedValue1, pipState: pIPState, VoicePanelPIPModes: focused, scale: sharedValue2, disableAnimations: sharedValue, translateX: sharedValue3, translateY: sharedValue4, mirror: flag };
  dt.__workletHash = 4149619035590;
  dt.__initData = __initData19;
  const animatedStyle = id(tmp3[8]).useAnimatedStyle(dt);
  let obj6 = { videoDimensions: sharedValue1, pipState: pIPState, VoicePanelPIPModes: focused, scale: sharedValue2, disableAnimations: sharedValue, translateX: sharedValue3, translateY: sharedValue4, mirror: flag };
  const tmp2Result21 = id(tmp3[8]);
  token = id(tmp3[24]).useToken(tmp5(tmp3[25]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  const tmp2Result22 = id(tmp3[24]);
  let num = 0;
  if (mode.get() !== flag2.PIP) {
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
  sharedValue10 = id(tmp3[8]).useSharedValue(num);
  const tmp2Result23 = id(tmp3[8]);
  const tmp51 = flag2;
  function _t() {
    const obj = { inPip: mode.get() === VoicePanelModes.PIP, isFocused: null };
    value = focused.get();
    id = undefined;
    if (value != null) {
      id = value.id;
    }
    obj.isFocused = id === id;
    return obj;
  }
  _t.__closure = { mode, VoicePanelModes: tmp51, focused, id };
  _t.__workletHash = 16147365192890;
  _t.__initData = __initData20;
  function ut(inPip, isFocused) {
    if (!obj.cheapWorkletShallowEqual(inPip, tmp3)) {
      if (!inPip.inPip) {
        if (!inPip.isFocused) {
          isFocused = undefined;
          if (isFocused != null) {
            isFocused = isFocused.isFocused;
          }
          let num2 = 0.3;
          if (true === isFocused) {
            const tmpResult = timing;
            num2 = tmpResult.withDelay(300, tmpResult.withTiming(0.3, { duration: 0 }, "animate-never"));
          }
          const result = sharedValue10.set(num2);
        }
      }
      const result1 = sharedValue10.set(0);
    }
    obj = cheapWorkletShallowEqual;
    tmp3 = isFocused;
  }
  const tmp2Result24 = id(tmp3[8]);
  ut.__closure = { cheapWorkletShallowEqual: id(tmp3[13]).cheapWorkletShallowEqual, strokeOpacity: sharedValue10, withDelay: id(tmp3[8]).withDelay, withTiming: id(tmp3[26]).withTiming };
  ut.__workletHash = 5119744299592;
  ut.__initData = __initData21;
  const animatedReaction9 = tmp2Result24.useAnimatedReaction(_t, ut);
  let obj7 = { cheapWorkletShallowEqual: id(tmp3[13]).cheapWorkletShallowEqual, strokeOpacity: sharedValue10, withDelay: id(tmp3[8]).withDelay, withTiming: id(tmp3[26]).withTiming };
  function ft() {
    if (sharedValue6.get()) {
      const rect = { position: "absolute", top: 0, left: 0, bottom: 0, right: 0, borderWidth, overflow: "hidden", borderColor: "white", opacity: 0.5 };
      let rect1 = rect;
    } else {
      rect1 = { position: "absolute", top: -1, left: -1, bottom: -1, right: -1, borderWidth: 2, borderRadius: token + 2, overflow: "hidden", borderColor: "white", opacity: sharedValue10.get() };
    }
    return rect1;
  }
  ft.__closure = { isInSnap: sharedValue6, SNAP_EDGE_INNER_THRESHOLD: tmp35, borderRadius: token, strokeOpacity: sharedValue10 };
  ft.__workletHash = 5172898891721;
  ft.__initData = __initData22;
  function mt(arg0) {
    return layout(arg0, sharedValue.get());
  }
  mt.__closure = { layout, disableAnimations: sharedValue };
  mt.__workletHash = 12145775353383;
  mt.__initData = __initData23;
  const items9 = [layout, sharedValue];
  const animatedStyle1 = id(tmp3[8]).useAnimatedStyle(ft);
  const callback7 = obj1.useCallback(mt, items9);
  const obj8 = { gesture: memo, children: null };
  const obj9 = { style: null, layout: callback7, children: null };
  const items10 = [tmp.wrapper, streamKey.style];
  obj9.style = items10;
  tmp5(tmp3[27]);
  const obj10 = { style: null, layout: callback7, children: null };
  const items11 = [tmp.animatedWrapperStyles, animatedStyle];
  obj10.style = items11;
  const obj11 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId: null, onReady: null, onSize: null, style: null, layout: null };
  let tmp63 = null;
  const tmp5Result = tmp5(tmp3[27]);
  if (!tmp11) {
    tmp63 = streamId;
  }
  obj11.streamId = tmp63;
  obj11.onReady = callback;
  obj11.onSize = callback1;
  obj11.style = tmp.video;
  obj11.layout = callback7;
  obj10.children = layoutManager(c16, obj11);
  const items12 = [layoutManager(tmp5Result, obj10), ];
  if (tmp13) {
    const obj12 = { animate: true, style: tmp.spinner };
    let tmp58Result = tmp58(tmp5(tmp3[28]), obj12);
  } else {
    const obj13 = { style: animatedStyle1, layout: callback7, pointerEvents: "none" };
    tmp58Result = tmp58(tmp5(tmp3[27]), obj13);
  }
  items12[1] = tmp58Result;
  obj9.children = items12;
  obj8.children = windowDimensions(tmp5Result, obj9);
  return layoutManager(id(tmp3[15]).GestureDetector, obj8);
});