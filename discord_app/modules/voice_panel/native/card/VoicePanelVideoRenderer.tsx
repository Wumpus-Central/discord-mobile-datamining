// === Module 17272: VoicePanelVideoRenderer ===

// Module 17272 (VoicePanelVideoRenderer)
import react_native from "react-native" /* 17 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import spring from "spring" /* 5597 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6140 */;
import cheapWorkletShallowEqual2 from "cheapWorkletShallowEqual" /* 9074 */;
import DCDVideoRendererDefault from "DCDVideoRenderer" /* 9114 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 9774 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11900 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11903 */;
import VideoActionCreators from "VideoActionCreators" /* 17157 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 17206 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11902 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;
let set, set2, set3, set4, tmp10, tmp11, tmp9;

let closure_12;
let unpackModuleId;
const PixelRatio = react_native.PixelRatio;
let VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
const SCALE_PHYSICS = MorphablePanelConstants.SCALE_PHYSICS;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let c13 = 50;
let c14 = 25;
let c15 = 50;
let c16 = 0.05;
let c17 = 0.05;
let c18 = 250;
let c19 = 0.0075;
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
let closure_22 = createStyles.createStyles({ wrapper: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }, animatedWrapperStyles: { position: "absolute" }, video: { width: "100%", height: "100%" }, spinner: { position: "absolute", top: "50%", left: "50%", marginTop: -16, marginLeft: -16, height: 32, width: 32 } });
let closure_23 = { code: "function VoicePanelVideoRendererTsx2(){const{containerLayout,videoDimensions}=this.__closure;return Math.max(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);}" };
let __initData = { code: "function VoicePanelVideoRendererTsx3(){const{containerLayout,videoDimensions}=this.__closure;return Math.min(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);}" };
let __initData2 = { code: "function VoicePanelVideoRendererTsx4(){const{translateX,translateY,scale,fitScale,coverScale}=this.__closure;if(translateX.get()!==0||translateY.get()!==0){return false;}if(scale.get()===fitScale.get()||scale.get()===coverScale.get()){return true;}return false;}" };
let __initData3 = { code: "function VoicePanelVideoRendererTsx5(forcedMode){const{scale,withSpring,fitScale,MODE_CHANGE_PHYSICS,disableAnimations,coverScale,translateX,SCALE_PHYSICS,translateY,currentSizeThreshold}=this.__closure;if(forcedMode===\"fit\"){scale.set(withSpring(fitScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?\"respect-motion-settings\":\"animate-never\"));}else{scale.set(withSpring(coverScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?\"respect-motion-settings\":\"animate-never\"));}translateX.set(withSpring(0,SCALE_PHYSICS));translateY.set(withSpring(0,SCALE_PHYSICS));currentSizeThreshold.set(forcedMode);}" };
let __initData4 = { code: "function VoicePanelVideoRendererTsx6(){const{focused,id,videoDimensions,windowDimensions,isCamera,resetToDefaultSize}=this.__closure;var _focused$get;let resizeMode=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id?\"fit\":\"cover\";const videoLandscape=videoDimensions.get().width>=videoDimensions.get().height;const parentLandscape=windowDimensions.get().width>=windowDimensions.get().height;const matchingAspect=videoLandscape===parentLandscape;if(isCamera&&resizeMode===\"fit\"){if(matchingAspect){resizeMode=\"cover\";}}resetToDefaultSize(resizeMode);}" };
const __initData5 = { code: "function VoicePanelVideoRendererTsx7(){const{containerLayout}=this.__closure;return containerLayout.get();}" };
const __initData6 = { code: "function VoicePanelVideoRendererTsx8(containerLayout_0,previous){const{cheapWorkletShallowEqual,focused,id,resetOnLayoutChange}=this.__closure;var _focused$get;if(cheapWorkletShallowEqual(containerLayout_0,previous!==null&&previous!==void 0?previous:undefined)){return;}if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){return;}if(containerLayout_0!==previous&&previous!=null){resetOnLayoutChange();}}" };
const __initData7 = { code: "function VoicePanelVideoRendererTsx9(){const{coverScale,fitScale,MIN_ZOOM_FOR_COVER_SNAP_OFFSET,translateX,scale,translateY,SNAP_CENTER_THRESHOLD,containerLayout,videoDimensions,SNAP_EDGE_OUTER_THRESHOLD,SNAP_EDGE_INNER_THRESHOLD}=this.__closure;if(coverScale.get()<fitScale.get()+MIN_ZOOM_FOR_COVER_SNAP_OFFSET){return false;}const screenTranslateX=translateX.get()*scale.get();const screenTranslateY=translateY.get()*scale.get();if(screenTranslateX<-SNAP_CENTER_THRESHOLD||screenTranslateX>SNAP_CENTER_THRESHOLD||screenTranslateY<-SNAP_CENTER_THRESHOLD||screenTranslateY>SNAP_CENTER_THRESHOLD){return false;}const adjustedScreenTranslateX=screenTranslateX+(containerLayout.get().width-videoDimensions.get().width*scale.get())/2;const adjustedScreenTranslateY=screenTranslateY+(containerLayout.get().height-videoDimensions.get().height*scale.get())/2;const videoWidth=videoDimensions.get().width*scale.get();const videoHeight=videoDimensions.get().height*scale.get();if(videoHeight>=containerLayout.get().height&&adjustedScreenTranslateX>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateX<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth>=containerLayout.get().width-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth<=containerLayout.get().width+SNAP_EDGE_OUTER_THRESHOLD){return true;}if(videoWidth>=containerLayout.get().width&&adjustedScreenTranslateY>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateY<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight>=containerLayout.get().height-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight<=containerLayout.get().height+SNAP_EDGE_OUTER_THRESHOLD){return true;}return false;}" };
const __initData8 = { code: "function VoicePanelVideoRendererTsx10(){const{numGesturesActive,isInSnap,resetToDefaultSize,scale,fitScale,videoDimensions,containerLayout,translateX,withSpring,SCALE_PHYSICS,translateY}=this.__closure;if(numGesturesActive.get()>0){return;}if(isInSnap.get()){isInSnap.set(false);resetToDefaultSize(\"cover\");return;}if(scale.get()<fitScale.get()){resetToDefaultSize(\"fit\");return;}const maxTranslateY=Math.max(0,(videoDimensions.get().height-containerLayout.get().height/scale.get())/2);const maxTranslateX=Math.max(0,(videoDimensions.get().width-containerLayout.get().width/scale.get())/2);translateX.set(withSpring(Math.min(maxTranslateX,Math.max(-maxTranslateX,translateX.get())),SCALE_PHYSICS));translateY.set(withSpring(Math.min(maxTranslateY,Math.max(-maxTranslateY,translateY.get())),SCALE_PHYSICS));}" };
const __initData9 = { code: "function VoicePanelVideoRendererTsx11(){const{focused,id,isInDefaultZoom,isInPanToZoom}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id&&(!isInDefaultZoom.get()||isInPanToZoom.get());}" };
const __initData10 = { code: "function VoicePanelVideoRendererTsx12(isFocusedZoomed,previous_0){const{setIsFocusedVideoZoomed}=this.__closure;if(isFocusedZoomed===previous_0){return;}setIsFocusedVideoZoomed(isFocusedZoomed);}" };
const __initData11 = { code: "function VoicePanelVideoRendererTsx13(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}" };
const __initData12 = { code: "function VoicePanelVideoRendererTsx14(isFocused,previous_1){const{resetOnLayoutChange}=this.__closure;if(isFocused===previous_1){return;}resetOnLayoutChange();}" };
const __initData13 = { code: "function VoicePanelVideoRendererTsx15(){const{mode}=this.__closure;return mode.get();}" };
const __initData14 = { code: "function VoicePanelVideoRendererTsx16(mode_0,previous_2){const{resetOnLayoutChange}=this.__closure;if(mode_0===previous_2){return;}resetOnLayoutChange();}" };
const __initData15 = { code: "function VoicePanelVideoRendererTsx17(){const{videoDimensions}=this.__closure;return videoDimensions.get();}" };
const __initData16 = { code: "function VoicePanelVideoRendererTsx18(layout,previous_3){const{currentSizeThreshold,resetOnLayoutChange}=this.__closure;if(currentSizeThreshold==null){return;}if(layout.width===(previous_3===null||previous_3===void 0?void 0:previous_3.width)&&layout.height===(previous_3===null||previous_3===void 0?void 0:previous_3.height)){return;}resetOnLayoutChange();}" };
const __initData17 = { code: "function VoicePanelVideoRendererTsx19(){const{coverScale}=this.__closure;return coverScale.get();}" };
const __initData18 = { code: "function VoicePanelVideoRendererTsx20(current,previous_4){const{currentSizeThreshold,resetToDefaultSize}=this.__closure;const _currentSizeThreshold=currentSizeThreshold.get();if(_currentSizeThreshold!==\"cover\"){return;}if(current===previous_4){return;}resetToDefaultSize(_currentSizeThreshold);}" };
const __initData19 = { code: "function VoicePanelVideoRendererTsx21(){const{isInSnap}=this.__closure;return isInSnap.get();}" };
const __initData20 = { code: "function VoicePanelVideoRendererTsx22(current_0,previous_5){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current_0===previous_5){return;}if(!current_0){return;}runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}" };
const __initData21 = { code: "function VoicePanelVideoRendererTsx23(){const{isInDefaultZoom,resetOnLayoutChange,focused,id,runOnJS,setFocused}=this.__closure;var _focused$get;if(!isInDefaultZoom.get()){resetOnLayoutChange();return;}if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){runOnJS(setFocused)(id);}else{runOnJS(setFocused)(null);}}" };
const __initData22 = { code: "function VoicePanelVideoRendererTsx24(e,manager){return manager.fail();}" };
let closure_46 = { code: "function VoicePanelVideoRendererTsx25(){const{controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}" };
let closure_47 = { code: "function VoicePanelVideoRendererTsx26(e_0,manager_0){return manager_0.fail();}" };
let closure_48 = { code: "function VoicePanelVideoRendererTsx27(){const{numGesturesActive,handleMovementEnd}=this.__closure;numGesturesActive.set(numGesturesActive.get()-1);handleMovementEnd();}" };
let closure_49 = { code: "function VoicePanelVideoRendererTsx28(event_0){const{scale,getScaleChangeWithOverscroll,fitScale,containerLayout,translateX,translateY,isInSnap,isInCoverSnap}=this.__closure;scale.set(scale.get()*getScaleChangeWithOverscroll(scale.get(),event_0.scaleChange,fitScale.get()));var startingFocalFromCenterX=event_0.focalX-containerLayout.get().width/2;var startingFocalFromCenterY=event_0.focalY-containerLayout.get().height/2;var zoomCenteringX=-1*startingFocalFromCenterX*(event_0.scaleChange-1)/scale.get();var zoomCenteringY=-1*startingFocalFromCenterY*(event_0.scaleChange-1)/scale.get();translateX.set(translateX.get()+zoomCenteringX);translateY.set(translateY.get()+zoomCenteringY);isInSnap.set(isInCoverSnap());}" };
let closure_50 = { code: "function VoicePanelVideoRendererTsx29(){const{numGesturesActive,isInPanToZoom,currentSizeThreshold}=this.__closure;numGesturesActive.set(numGesturesActive.get()+1);isInPanToZoom.set(false);currentSizeThreshold.set(null);}" };
let closure_51 = { code: "function VoicePanelVideoRendererTsx30(event,manager_1){const{focused,id}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){manager_1.fail();}}" };
let closure_52 = { code: "function VoicePanelVideoRendererTsx31(){const{isInPanToZoom}=this.__closure;isInPanToZoom.set(false);}" };
let closure_53 = { code: "function VoicePanelVideoRendererTsx32(event_3){const{numGesturesActive,translateX,withSpring,FLING_VELOCITY_SCALING,scale,SCALE_PHYSICS,translateY,handleMovementEnd}=this.__closure;numGesturesActive.set(numGesturesActive.get()-1);translateX.set(withSpring(translateX.get()+event_3.velocityX*FLING_VELOCITY_SCALING/scale.get(),SCALE_PHYSICS));translateY.set(withSpring(translateY.get()+event_3.velocityY*FLING_VELOCITY_SCALING/scale.get(),SCALE_PHYSICS));handleMovementEnd();}" };
let closure_54 = { code: "function VoicePanelVideoRendererTsx33(event_2){const{isInPanToZoom,PAN_TO_ZOOM_SCALE_FACTOR,scale,getScaleChangeWithOverscroll,fitScale,translateX,translateY,isInSnap,isInCoverSnap}=this.__closure;if(isInPanToZoom.get()){var scaleChange=1+event_2.changeY*PAN_TO_ZOOM_SCALE_FACTOR;scale.set(scale.get()*getScaleChangeWithOverscroll(scale.get(),scaleChange,fitScale.get()));}else{translateX.set(translateX.get()+event_2.changeX/scale.get());translateY.set(translateY.get()+event_2.changeY/scale.get());}isInSnap.set(isInCoverSnap());}" };
let closure_55 = { code: "function VoicePanelVideoRendererTsx34(){const{isInPanToZoom,runOnJS,hideControls,numGesturesActive,currentSizeThreshold}=this.__closure;if(isInPanToZoom.get()){runOnJS(hideControls)();}numGesturesActive.set(numGesturesActive.get()+1);currentSizeThreshold.set(null);}" };
let closure_56 = { code: "function VoicePanelVideoRendererTsx35(){const{lastTapTimestamp,PAN_TO_ZOOM_TAP_TIME_MILLIS,isInPanToZoom}=this.__closure;var hasRecentTap=Date.now()-lastTapTimestamp.get()<=PAN_TO_ZOOM_TAP_TIME_MILLIS;isInPanToZoom.set(hasRecentTap);lastTapTimestamp.set(Date.now());}" };
let closure_57 = { code: "function VoicePanelVideoRendererTsx36(event_1,manager_2){const{focused,id}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){manager_2.fail();return;}}" };
const __initData23 = { code: "function VoicePanelVideoRendererTsx37(){const{containerLayout,videoDimensions}=this.__closure;return Math.max(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);}" };
const __initData24 = { code: "function VoicePanelVideoRendererTsx38(){const{containerLayout,videoDimensions}=this.__closure;return Math.min(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);}" };
const __initData25 = { code: "function VoicePanelVideoRendererTsx39(){const{translateX,translateY,scale,fitScale,coverScale}=this.__closure;if(translateX.get()!==0||translateY.get()!==0){return false;}if(scale.get()===fitScale.get()||scale.get()===coverScale.get()){return true;}return false;}" };
const __initData26 = { code: "function VoicePanelVideoRendererTsx40(forcedMode){const{scale,withSpring,fitScale,MODE_CHANGE_PHYSICS,disableAnimations,coverScale,translateX,SCALE_PHYSICS,translateY,currentSizeThreshold}=this.__closure;if(forcedMode==='fit'){scale.set(withSpring(fitScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?'respect-motion-settings':'animate-never'));}else{scale.set(withSpring(coverScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?'respect-motion-settings':'animate-never'));}translateX.set(withSpring(0,SCALE_PHYSICS));translateY.set(withSpring(0,SCALE_PHYSICS));currentSizeThreshold.set(forcedMode);}" };
const __initData27 = { code: "function VoicePanelVideoRendererTsx41(){const{focused,id,videoDimensions,windowDimensions,isCamera,resetToDefaultSize}=this.__closure;var _focused$get;let resizeMode=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id?'fit':'cover';const videoLandscape=videoDimensions.get().width>=videoDimensions.get().height;const parentLandscape=windowDimensions.get().width>=windowDimensions.get().height;const matchingAspect=videoLandscape===parentLandscape;if(isCamera&&resizeMode==='fit'){if(matchingAspect){resizeMode='cover';}}resetToDefaultSize(resizeMode);}" };
const __initData28 = { code: "function VoicePanelVideoRendererTsx42(){const{containerLayout}=this.__closure;return containerLayout.get();}" };
const __initData29 = { code: "function VoicePanelVideoRendererTsx43(containerLayout_0,previous){const{cheapWorkletShallowEqual,focused,id,resetOnLayoutChange}=this.__closure;var _focused$get;if(cheapWorkletShallowEqual(containerLayout_0,previous!==null&&previous!==void 0?previous:undefined))return;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id)return;if(containerLayout_0!==previous&&previous!=null){resetOnLayoutChange();}}" };
const __initData30 = { code: "function VoicePanelVideoRendererTsx44(){const{coverScale,fitScale,MIN_ZOOM_FOR_COVER_SNAP_OFFSET,translateX,scale,translateY,SNAP_CENTER_THRESHOLD,containerLayout,videoDimensions,SNAP_EDGE_OUTER_THRESHOLD,SNAP_EDGE_INNER_THRESHOLD}=this.__closure;if(coverScale.get()<fitScale.get()+MIN_ZOOM_FOR_COVER_SNAP_OFFSET){return false;}const screenTranslateX=translateX.get()*scale.get();const screenTranslateY=translateY.get()*scale.get();if(screenTranslateX<-SNAP_CENTER_THRESHOLD||screenTranslateX>SNAP_CENTER_THRESHOLD||screenTranslateY<-SNAP_CENTER_THRESHOLD||screenTranslateY>SNAP_CENTER_THRESHOLD){return false;}const adjustedScreenTranslateX=screenTranslateX+(containerLayout.get().width-videoDimensions.get().width*scale.get())/2;const adjustedScreenTranslateY=screenTranslateY+(containerLayout.get().height-videoDimensions.get().height*scale.get())/2;const videoWidth=videoDimensions.get().width*scale.get();const videoHeight=videoDimensions.get().height*scale.get();if(videoHeight>=containerLayout.get().height&&adjustedScreenTranslateX>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateX<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth>=containerLayout.get().width-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth<=containerLayout.get().width+SNAP_EDGE_OUTER_THRESHOLD){return true;}if(videoWidth>=containerLayout.get().width&&adjustedScreenTranslateY>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateY<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight>=containerLayout.get().height-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight<=containerLayout.get().height+SNAP_EDGE_OUTER_THRESHOLD){return true;}return false;}" };
const __initData31 = { code: "function VoicePanelVideoRendererTsx45(){const{numGesturesActive,isInSnap,resetToDefaultSize,scale,fitScale,videoDimensions,containerLayout,translateX,withSpring,SCALE_PHYSICS,translateY}=this.__closure;if(numGesturesActive.get()>0){return;}if(isInSnap.get()){isInSnap.set(false);resetToDefaultSize('cover');return;}if(scale.get()<fitScale.get()){resetToDefaultSize('fit');return;}const maxTranslateY=Math.max(0,(videoDimensions.get().height-containerLayout.get().height/scale.get())/2);const maxTranslateX=Math.max(0,(videoDimensions.get().width-containerLayout.get().width/scale.get())/2);translateX.set(withSpring(Math.min(maxTranslateX,Math.max(-maxTranslateX,translateX.get())),SCALE_PHYSICS));translateY.set(withSpring(Math.min(maxTranslateY,Math.max(-maxTranslateY,translateY.get())),SCALE_PHYSICS));}" };
const __initData32 = { code: "function VoicePanelVideoRendererTsx46(){const{focused,id,isInDefaultZoom,isInPanToZoom}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id&&(!isInDefaultZoom.get()||isInPanToZoom.get());}" };
const __initData33 = { code: "function VoicePanelVideoRendererTsx47(isFocusedZoomed,previous_0){const{setIsFocusedVideoZoomed}=this.__closure;if(isFocusedZoomed===previous_0){return;}setIsFocusedVideoZoomed(isFocusedZoomed);}" };
const __initData34 = { code: "function VoicePanelVideoRendererTsx48(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}" };
const __initData35 = { code: "function VoicePanelVideoRendererTsx49(isFocused,previous_1){const{resetOnLayoutChange}=this.__closure;if(isFocused===previous_1){return;}resetOnLayoutChange();}" };
const __initData36 = { code: "function VoicePanelVideoRendererTsx50(){const{mode}=this.__closure;return mode.get();}" };
const __initData37 = { code: "function VoicePanelVideoRendererTsx51(mode_0,previous_2){const{resetOnLayoutChange}=this.__closure;if(mode_0===previous_2){return;}resetOnLayoutChange();}" };
const __initData38 = { code: "function VoicePanelVideoRendererTsx52(){const{videoDimensions}=this.__closure;return videoDimensions.get();}" };
const __initData39 = { code: "function VoicePanelVideoRendererTsx53(layout,previous_3){const{currentSizeThreshold,resetOnLayoutChange}=this.__closure;if(currentSizeThreshold==null){return;}if(layout.width===(previous_3===null||previous_3===void 0?void 0:previous_3.width)&&layout.height===(previous_3===null||previous_3===void 0?void 0:previous_3.height)){return;}resetOnLayoutChange();}" };
const __initData40 = { code: "function VoicePanelVideoRendererTsx54(){const{coverScale}=this.__closure;return coverScale.get();}" };
const __initData41 = { code: "function VoicePanelVideoRendererTsx55(current,previous_4){const{currentSizeThreshold,resetToDefaultSize}=this.__closure;const _currentSizeThreshold=currentSizeThreshold.get();if(_currentSizeThreshold!=='cover'){return;}if(current===previous_4){return;}resetToDefaultSize(_currentSizeThreshold);}" };
const __initData42 = { code: "function VoicePanelVideoRendererTsx56(){const{isInSnap}=this.__closure;return isInSnap.get();}" };
const __initData43 = { code: "function VoicePanelVideoRendererTsx57(current_0,previous_5){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current_0===previous_5){return;}if(!current_0){return;}runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}" };
let closure_79 = { code: "function VoicePanelVideoRendererTsx58(){const{isInDefaultZoom,resetOnLayoutChange,focused,id,runOnJS,setFocused}=this.__closure;var _focused$get;if(!isInDefaultZoom.get()){resetOnLayoutChange();return;}if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){runOnJS(setFocused)(id);}else{runOnJS(setFocused)(null);}}" };
let closure_80 = { code: "function VoicePanelVideoRendererTsx59(e,manager){return manager.fail();}" };
let closure_81 = { code: "function VoicePanelVideoRendererTsx60(){const{controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}" };
let closure_82 = { code: "function VoicePanelVideoRendererTsx61(e_0,manager_0){return manager_0.fail();}" };
let closure_83 = { code: "function VoicePanelVideoRendererTsx62(){const{numGesturesActive,handleMovementEnd}=this.__closure;numGesturesActive.set(numGesturesActive.get()-1);handleMovementEnd();}" };
let closure_84 = { code: "function VoicePanelVideoRendererTsx63(event_0){const{scale,getScaleChangeWithOverscroll,fitScale,containerLayout,translateX,translateY,isInSnap,isInCoverSnap}=this.__closure;scale.set(scale.get()*getScaleChangeWithOverscroll(scale.get(),event_0.scaleChange,fitScale.get()));const startingFocalFromCenterX=event_0.focalX-containerLayout.get().width/2;const startingFocalFromCenterY=event_0.focalY-containerLayout.get().height/2;const zoomCenteringX=-1*startingFocalFromCenterX*(event_0.scaleChange-1)/scale.get();const zoomCenteringY=-1*startingFocalFromCenterY*(event_0.scaleChange-1)/scale.get();translateX.set(translateX.get()+zoomCenteringX);translateY.set(translateY.get()+zoomCenteringY);isInSnap.set(isInCoverSnap());}" };
let closure_85 = { code: "function VoicePanelVideoRendererTsx64(){const{numGesturesActive,isInPanToZoom,currentSizeThreshold}=this.__closure;numGesturesActive.set(numGesturesActive.get()+1);isInPanToZoom.set(false);currentSizeThreshold.set(null);}" };
let closure_86 = { code: "function VoicePanelVideoRendererTsx65(event,manager_1){const{focused,id}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){manager_1.fail();}}" };
let closure_87 = { code: "function VoicePanelVideoRendererTsx66(){const{isInPanToZoom}=this.__closure;isInPanToZoom.set(false);}" };
let closure_88 = { code: "function VoicePanelVideoRendererTsx67(event_3){const{numGesturesActive,translateX,withSpring,FLING_VELOCITY_SCALING,scale,SCALE_PHYSICS,translateY,handleMovementEnd}=this.__closure;numGesturesActive.set(numGesturesActive.get()-1);translateX.set(withSpring(translateX.get()+event_3.velocityX*FLING_VELOCITY_SCALING/scale.get(),SCALE_PHYSICS));translateY.set(withSpring(translateY.get()+event_3.velocityY*FLING_VELOCITY_SCALING/scale.get(),SCALE_PHYSICS));handleMovementEnd();}" };
let closure_89 = { code: "function VoicePanelVideoRendererTsx68(event_2){const{isInPanToZoom,PAN_TO_ZOOM_SCALE_FACTOR,scale,getScaleChangeWithOverscroll,fitScale,translateX,translateY,isInSnap,isInCoverSnap}=this.__closure;if(isInPanToZoom.get()){const scaleChange=1+event_2.changeY*PAN_TO_ZOOM_SCALE_FACTOR;scale.set(scale.get()*getScaleChangeWithOverscroll(scale.get(),scaleChange,fitScale.get()));}else{translateX.set(translateX.get()+event_2.changeX/scale.get());translateY.set(translateY.get()+event_2.changeY/scale.get());}isInSnap.set(isInCoverSnap());}" };
let closure_90 = { code: "function VoicePanelVideoRendererTsx69(){const{isInPanToZoom,runOnJS,hideControls,numGesturesActive,currentSizeThreshold}=this.__closure;if(isInPanToZoom.get()){runOnJS(hideControls)();}numGesturesActive.set(numGesturesActive.get()+1);currentSizeThreshold.set(null);}" };
let closure_91 = { code: "function VoicePanelVideoRendererTsx70(){const{lastTapTimestamp,PAN_TO_ZOOM_TAP_TIME_MILLIS,isInPanToZoom}=this.__closure;const hasRecentTap=Date.now()-lastTapTimestamp.get()<=PAN_TO_ZOOM_TAP_TIME_MILLIS;isInPanToZoom.set(hasRecentTap);lastTapTimestamp.set(Date.now());}" };
let closure_92 = { code: "function VoicePanelVideoRendererTsx71(event_1,manager_2){const{focused,id}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){manager_2.fail();return;}}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_93 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let closure_24;
  let closure_25;
  let closure_26;
  let closure_27;
  let containerLayout;
  let derivedValue2;
  let dismissToPIPGestureRef;
  let focused;
  let loading;
  let setFocused;
  let tmp = id;
  let tmp2 = focused;
  let obj = id(focused[12]);
  const cResult = obj.c(120);
  id = id.id;
  const isCamera = id.isCamera;
  focused = id.focused;
  const mode = id.mode;
  ({ loading, containerLayout } = id);
  const videoDimensions = id.videoDimensions;
  const disableAnimations = id.disableAnimations;
  const context = containerLayout.useContext(isCamera(focused[13]));
  const setIsFocusedVideoZoomed = context.setIsFocusedVideoZoomed;
  const windowDimensions = context.windowDimensions;
  ({ dismissToPIPGestureRef, setFocused } = context);
  const hideControls = context.hideControls;
  const controlsSpecs = context.controlsSpecs;
  const showControls = context.showControls;
  let obj2 = id(focused[8]);
  const sharedValue = obj2.useSharedValue(1);
  let obj3 = id(focused[8]);
  const sharedValue1 = obj3.useSharedValue(0);
  let obj4 = id(focused[8]);
  const sharedValue2 = obj4.useSharedValue(0);
  const obj5 = id(focused[8]);
  const sharedValue3 = obj5.useSharedValue(0);
  const obj6 = id(focused[8]);
  const sharedValue4 = obj6.useSharedValue(false);
  const obj7 = id(focused[8]);
  const sharedValue5 = obj7.useSharedValue(0);
  const obj8 = id(focused[8]);
  const sharedValue6 = obj8.useSharedValue(false);
  const obj9 = id(focused[8]);
  const sharedValue7 = obj9.useSharedValue(null);
  const fn = function n() {
    const result = containerLayout.get().width / videoDimensions.get().width;
    return max(result, containerLayout.get().height / videoDimensions.get().height);
  };
  fn.__closure = { containerLayout, videoDimensions };
  fn.__workletHash = 4177496646282;
  fn.__initData = derivedValue2;
  const obj10 = id(focused[8]);
  const derivedValue = obj10.useDerivedValue(fn);
  const fn2 = function o() {
    const result = containerLayout.get().width / videoDimensions.get().width;
    return min(result, containerLayout.get().height / videoDimensions.get().height);
  };
  fn2.__closure = { containerLayout, videoDimensions };
  fn2.__workletHash = 5260375952053;
  fn2.__initData = __initData;
  const obj11 = id(focused[8]);
  const derivedValue1 = obj11.useDerivedValue(fn2);
  const fn3 = function s() {
    let tmp = 0 === sharedValue1.get() && 0 === sharedValue2.get();
    if (tmp) {
      const value = sharedValue.get();
      let tmp5 = value === derivedValue1.get();
      if (!tmp5) {
        const value2 = sharedValue.get();
        tmp5 = value2 === derivedValue.get();
      }
      tmp = tmp5;
    }
    return tmp;
  };
  fn3.__closure = { translateX: sharedValue1, translateY: sharedValue2, scale: sharedValue, fitScale: derivedValue1, coverScale: derivedValue };
  fn3.__workletHash = 15099362638406;
  fn3.__initData = __initData2;
  const obj12 = id(focused[8]);
  derivedValue2 = obj12.useDerivedValue(fn3);
  if (cResult[0] === derivedValue) {
    if (cResult[1] === sharedValue7) {
      if (cResult[2] === disableAnimations) {
        if (cResult[3] === derivedValue1) {
          if (cResult[4] === sharedValue) {
            if (cResult[5] === sharedValue1) {
              let tmp16;
              if (cResult[6] === sharedValue2) {
                tmp16 = cResult[7];
              }
              __initData = tmp16;
              if (cResult[8] === focused) {
                if (cResult[9] === id) {
                  if (cResult[10] === isCamera) {
                    if (cResult[11] === tmp16) {
                      if (cResult[12] === videoDimensions) {
                        let tmp17;
                        if (cResult[13] === windowDimensions) {
                          tmp17 = cResult[14];
                        }
                        __initData2 = tmp17;
                        const tmpResult = tmp(tmp2[8]);
                        class Ye {
                          constructor() {
                            return containerLayout.get();
                          }
                        }
                        const obj13 = { containerLayout };
                        Ye.__closure = obj13;
                        Ye.__workletHash = 9695573702258;
                        Ye.__initData = __initData5;
                        class Ne {
                          constructor(safeAreaState, safeAreaState2) {
                            const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
                            cheapWorkletShallowEqual2;
                            const tmp2 = safeAreaState2;
                            if (!cheapWorkletShallowEqual(safeAreaState, tmp2)) {
                              const value = focused.get();
                              id = undefined;
                              if (value != null) {
                                id = value.id;
                              }
                              const tmp7 = id === id && safeAreaState !== safeAreaState2 && null != safeAreaState2;
                              if (tmp7) {
                                closure_25();
                              }
                            }
                          }
                        }
                        const useAnimatedReaction = tmpResult.useAnimatedReaction;
                        Ne.__closure = { cheapWorkletShallowEqual: tmp(tmp2[15]).cheapWorkletShallowEqual, focused, id, resetOnLayoutChange: tmp17 };
                        Ne.__workletHash = 10369496881912;
                        Ne.__initData = __initData6;
                        const obj14 = { cheapWorkletShallowEqual: tmp(tmp2[15]).cheapWorkletShallowEqual, focused, id, resetOnLayoutChange: tmp17 };
                        const animatedReaction = useAnimatedReaction(Ye, Ne);
                        if (cResult[15] === containerLayout) {
                          if (cResult[16] === derivedValue) {
                            if (cResult[17] === derivedValue1) {
                              if (cResult[18] === sharedValue) {
                                if (cResult[19] === sharedValue1) {
                                  if (cResult[20] === sharedValue2) {
                                    let tmp24;
                                    if (cResult[21] === videoDimensions) {
                                      tmp24 = cResult[22];
                                    }
                                    __initData3 = tmp24;
                                    if (cResult[23] === containerLayout) {
                                      if (cResult[24] === derivedValue1) {
                                        if (cResult[25] === sharedValue4) {
                                          if (cResult[26] === sharedValue3) {
                                            if (cResult[27] === tmp16) {
                                              if (cResult[28] === sharedValue) {
                                                if (cResult[29] === sharedValue1) {
                                                  if (cResult[30] === sharedValue2) {
                                                    let tmp30;
                                                    if (cResult[31] === videoDimensions) {
                                                      tmp30 = cResult[32];
                                                    }
                                                    __initData4 = tmp30;
                                                    const tmpResult7 = tmp(tmp2[8]);
                                                    class We {
                                                      constructor() {
                                                        const value = focused.get();
                                                        id = undefined;
                                                        if (value != null) {
                                                          id = value.id;
                                                        }
                                                        let tmp3 = id === id;
                                                        if (tmp3) {
                                                          const value3 = derivedValue2.get();
                                                          let value4 = !value3;
                                                          if (value3) {
                                                            value4 = sharedValue6.get();
                                                          }
                                                          tmp3 = value4;
                                                        }
                                                        return tmp3;
                                                      }
                                                    }
                                                    const obj15 = { focused, id, isInDefaultZoom: derivedValue2, isInPanToZoom: sharedValue6 };
                                                    We.__closure = obj15;
                                                    class Ne {
                                                      constructor(safeAreaState, safeAreaState2) {
                                                        const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
                                                        cheapWorkletShallowEqual2;
                                                        const tmp2 = safeAreaState2;
                                                        if (!cheapWorkletShallowEqual(safeAreaState, tmp2)) {
                                                          const value = focused.get();
                                                          id = undefined;
                                                          if (value != null) {
                                                            id = value.id;
                                                          }
                                                          const tmp7 = id === id && safeAreaState !== safeAreaState2 && null != safeAreaState2;
                                                          if (tmp7) {
                                                            closure_25();
                                                          }
                                                        }
                                                      }
                                                    }
                                                    We.__initData = __initData9;
                                                    function $e(arg0, arg1) {
                                                      if (arg0 !== arg1) {
                                                        setIsFocusedVideoZoomed(arg0);
                                                      }
                                                    }
                                                    const obj16 = { setIsFocusedVideoZoomed };
                                                    $e.__closure = obj16;
                                                    $e.__workletHash = 14910407864989;
                                                    $e.__initData = __initData10;
                                                    const animatedReaction1 = tmpResult7.useAnimatedReaction(We, $e);
                                                    function qe() {
                                                      const value = focused.get();
                                                      id = undefined;
                                                      if (value != null) {
                                                        id = value.id;
                                                      }
                                                      return id === id;
                                                    }
                                                    const tmpResult8 = tmp(tmp2[8]);
                                                    class Fe {
                                                      constructor() {
                                                        const value = derivedValue.get();
                                                        if (value < derivedValue1.get() + c16) {
                                                          return false;
                                                        } else {
                                                          const value3 = sharedValue1.get();
                                                          const result = value3 * sharedValue.get();
                                                          const value4 = sharedValue2.get();
                                                          const result1 = value4 * sharedValue.get();
                                                          if (result >= -50) {
                                                            if (result <= c13) {
                                                              if (result1 >= -50) {
                                                                if (result1 <= c13) {
                                                                  const width = containerLayout.get().width;
                                                                  const sum = result + (width - videoDimensions.get().width * sharedValue.get()) / 2;
                                                                  const height = containerLayout.get().height;
                                                                  const sum1 = result1 + (height - videoDimensions.get().height * sharedValue.get()) / 2;
                                                                  const result2 = videoDimensions.get().width * sharedValue.get();
                                                                  const result3 = videoDimensions.get().height * sharedValue.get();
                                                                  let tmp2 = result3 >= containerLayout.get().height && sum >= -50 && sum <= c14;
                                                                  if (tmp2) {
                                                                    const sum2 = sum + result2;
                                                                    tmp2 = sum2 >= containerLayout.get().width - c14;
                                                                  }
                                                                  if (tmp2) {
                                                                    const sum3 = sum + result2;
                                                                    tmp2 = sum3 <= containerLayout.get().width + c15;
                                                                  }
                                                                  if (!tmp2) {
                                                                    let tmp8 = result2 >= containerLayout.get().width && sum1 >= -50 && sum1 <= c14;
                                                                    if (tmp8) {
                                                                      const sum4 = sum1 + result3;
                                                                      tmp8 = sum4 >= containerLayout.get().height - c14;
                                                                    }
                                                                    if (tmp8) {
                                                                      const sum5 = sum1 + result3;
                                                                      tmp8 = sum5 <= containerLayout.get().height + c15;
                                                                    }
                                                                    tmp2 = tmp8;
                                                                  }
                                                                  return tmp2;
                                                                }
                                                              }
                                                            }
                                                          }
                                                          return false;
                                                        }
                                                      }
                                                    }
                                                    tmp37[0] = focused;
                                                    tmp37[1] = id;
                                                    qe.__closure = tmp37;
                                                    qe.__workletHash = 619124678280;
                                                    qe.__initData = __initData11;
                                                    class Je {
                                                      constructor(arg0, arg1) {
                                                        if (arg0 !== arg1) {
                                                          closure_25();
                                                        }
                                                      }
                                                    }
                                                    const obj17 = { resetOnLayoutChange: tmp17 };
                                                    Je.__closure = obj17;
                                                    Je.__workletHash = 1219671257658;
                                                    Je.__initData = __initData12;
                                                    const animatedReaction2 = tmpResult8.useAnimatedReaction(qe, Je);
                                                    const tmpResult9 = tmp(tmp2[8]);
                                                    class Ue {
                                                      constructor() {
                                                        return mode.get();
                                                      }
                                                    }
                                                    const obj18 = { mode };
                                                    Ue.__closure = obj18;
                                                    Ue.__workletHash = 7040117988961;
                                                    Ue.__initData = __initData13;
                                                    function je(arg0, arg1) {
                                                      if (arg0 !== arg1) {
                                                        closure_25();
                                                      }
                                                    }
                                                    const obj19 = { resetOnLayoutChange: tmp17 };
                                                    je.__closure = obj19;
                                                    je.__workletHash = 98679633688;
                                                    je.__initData = __initData14;
                                                    const animatedReaction3 = tmpResult9.useAnimatedReaction(Ue, je);
                                                    const tmpResult10 = tmp(tmp2[8]);
                                                    class Ke {
                                                      constructor() {
                                                        return videoDimensions.get();
                                                      }
                                                    }
                                                    const obj20 = { videoDimensions };
                                                    Ke.__closure = obj20;
                                                    Ke.__workletHash = 8748184223523;
                                                    Ke.__initData = __initData15;
                                                    class Be {
                                                      constructor(width, width2) {
                                                        if (null != sharedValue7) {
                                                          let width1;
                                                          width = width.width;
                                                          if (width2 != null) {
                                                            width1 = width2.width;
                                                          }
                                                          let tmp4 = width === width1;
                                                          if (tmp4) {
                                                            let height1;
                                                            const height = width.height;
                                                            if (width2 != null) {
                                                              height1 = width2.height;
                                                            }
                                                            tmp4 = height === height1;
                                                          }
                                                          if (!tmp4) {
                                                            closure_25();
                                                          }
                                                        }
                                                      }
                                                    }
                                                    const obj21 = { currentSizeThreshold: sharedValue7, resetOnLayoutChange: tmp17 };
                                                    Be.__closure = obj21;
                                                    Be.__workletHash = 2426437907266;
                                                    Be.__initData = __initData16;
                                                    const animatedReaction4 = tmpResult10.useAnimatedReaction(Ke, Be);
                                                    function et() {
                                                      return derivedValue.get();
                                                    }
                                                    const obj22 = { coverScale: derivedValue };
                                                    et.__closure = obj22;
                                                    et.__workletHash = 5444376625069;
                                                    et.__initData = __initData17;
                                                    const tmpResult11 = tmp(tmp2[8]);
                                                    class Qe {
                                                      constructor(arg0, arg1) {
                                                        const value = sharedValue7.get();
                                                        const tmp2 = "cover" === value && arg0 !== arg1;
                                                        if (tmp2) {
                                                          closure_24(value);
                                                        }
                                                      }
                                                    }
                                                    const obj23 = { currentSizeThreshold: sharedValue7, resetToDefaultSize: tmp16 };
                                                    Qe.__closure = obj23;
                                                    Qe.__workletHash = 10517599185370;
                                                    Qe.__initData = __initData18;
                                                    const animatedReaction5 = tmpResult11.useAnimatedReaction(et, Qe);
                                                    function nt() {
                                                      return sharedValue4.get();
                                                    }
                                                    const obj24 = { isInSnap: sharedValue4 };
                                                    nt.__closure = obj24;
                                                    nt.__workletHash = 2178206594630;
                                                    nt.__initData = __initData19;
                                                    function tt(arg0, arg1) {
                                                      const tmp = arg0 !== arg1 && arg0;
                                                      if (tmp) {
                                                        const obj = id(focused[8]);
                                                        const runOnJSResult = obj.runOnJS(id(focused[16]).triggerHapticFeedback);
                                                        runOnJSResult(id(focused[16]).HapticFeedbackTypes.IMPACT_LIGHT);
                                                      }
                                                    }
                                                    const obj25 = { runOnJS: tmp(tmp2[8]).runOnJS, triggerHapticFeedback: tmp(tmp2[16]).triggerHapticFeedback, HapticFeedbackTypes: tmp(tmp2[16]).HapticFeedbackTypes };
                                                    const useAnimatedReaction2 = tmp(tmp2[8]).useAnimatedReaction;
                                                    tmp(tmp2[8]);
                                                    tt.__closure = obj25;
                                                    tt.__workletHash = 1257419227821;
                                                    tt.__initData = __initData20;
                                                    const animatedReaction21 = useAnimatedReaction2(nt, tt);
                                                    if (cResult[33] === containerLayout) {
                                                      if (cResult[34] === controlsSpecs) {
                                                        if (cResult[35] === sharedValue7) {
                                                          if (cResult[36] === dismissToPIPGestureRef) {
                                                            if (cResult[37] === derivedValue1) {
                                                              if (cResult[38] === focused) {
                                                                if (cResult[39] === tmp30) {
                                                                  if (cResult[40] === hideControls) {
                                                                    if (cResult[41] === id) {
                                                                      if (cResult[42] === tmp24) {
                                                                        if (cResult[43] === derivedValue2) {
                                                                          if (cResult[44] === sharedValue6) {
                                                                            if (cResult[45] === sharedValue4) {
                                                                              if (cResult[46] === sharedValue5) {
                                                                                if (cResult[47] === loading) {
                                                                                  if (cResult[48] === sharedValue3) {
                                                                                    if (cResult[49] === tmp17) {
                                                                                      if (cResult[50] === sharedValue) {
                                                                                        if (cResult[51] === setFocused) {
                                                                                          if (cResult[52] === showControls) {
                                                                                            if (cResult[53] === sharedValue1) {
                                                                                              if (cResult[113] === tmp54) {
                                                                                                if (cResult[114] === sharedValue4) {
                                                                                                  if (cResult[115] === sharedValue3) {
                                                                                                    if (cResult[116] === sharedValue) {
                                                                                                      if (cResult[117] === sharedValue1) {
                                                                                                        let tmp60;
                                                                                                        if (cResult[118] === sharedValue2) {
                                                                                                          tmp60 = cResult[119];
                                                                                                        }
                                                                                                        return tmp60;
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                              const obj26 = { gesture: null, scale: sharedValue, translateX: sharedValue1, translateY: sharedValue2, numGesturesActive: sharedValue3, isInSnap: sharedValue4 };
                                                                                              class We {
                                                                                                constructor() {
                                                                                                  const value = focused.get();
                                                                                                  id = undefined;
                                                                                                  if (value != null) {
                                                                                                    id = value.id;
                                                                                                  }
                                                                                                  let tmp3 = id === id;
                                                                                                  if (tmp3) {
                                                                                                    const value3 = derivedValue2.get();
                                                                                                    let value4 = !value3;
                                                                                                    if (value3) {
                                                                                                      value4 = sharedValue6.get();
                                                                                                    }
                                                                                                    tmp3 = value4;
                                                                                                  }
                                                                                                  return tmp3;
                                                                                                }
                                                                                              }
                                                                                              cResult[113] = tmp54;
                                                                                              class Ne {
                                                                                                constructor(safeAreaState, safeAreaState2) {
                                                                                                  const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
                                                                                                  cheapWorkletShallowEqual2;
                                                                                                  const tmp2 = safeAreaState2;
                                                                                                  if (!cheapWorkletShallowEqual(safeAreaState, tmp2)) {
                                                                                                    const value = focused.get();
                                                                                                    id = undefined;
                                                                                                    if (value != null) {
                                                                                                      id = value.id;
                                                                                                    }
                                                                                                    const tmp7 = id === id && safeAreaState !== safeAreaState2 && null != safeAreaState2;
                                                                                                    if (tmp7) {
                                                                                                      closure_25();
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                              cResult[114] = sharedValue4;
                                                                                              cResult[115] = sharedValue3;
                                                                                              cResult[116] = sharedValue;
                                                                                              cResult[117] = sharedValue1;
                                                                                              cResult[118] = sharedValue2;
                                                                                              cResult[119] = obj26;
                                                                                              tmp60 = obj26;
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
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    const _Symbol = Symbol;
                                                    let str = "react.memo_cache_sentinel";
                                                    if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
                                                      class VoicePanelVideoRendererTsx24 {
                                                        constructor(arg0, arg1) {
                                                          return arg1.fail();
                                                        }
                                                      }
                                                      VoicePanelVideoRendererTsx24.__closure = {};
                                                      class We {
                                                        constructor() {
                                                          const value = focused.get();
                                                          id = undefined;
                                                          if (value != null) {
                                                            id = value.id;
                                                          }
                                                          let tmp3 = id === id;
                                                          if (tmp3) {
                                                            const value3 = derivedValue2.get();
                                                            let value4 = !value3;
                                                            if (value3) {
                                                              value4 = sharedValue6.get();
                                                            }
                                                            tmp3 = value4;
                                                          }
                                                          return tmp3;
                                                        }
                                                      }
                                                      VoicePanelVideoRendererTsx24.__initData = __initData22;
                                                      cResult[56] = VoicePanelVideoRendererTsx24;
                                                    } else {
                                                      class VoicePanelVideoRendererTsx24 {
                                                        constructor(arg0, arg1) {
                                                          return arg1.fail();
                                                        }
                                                      }
                                                    }
                                                    if (cResult[57] === focused) {
                                                      class VoicePanelVideoRendererTsx24 {
                                                        constructor(arg0, arg1) {
                                                          return arg1.fail();
                                                        }
                                                      }
                                                    }
                                                    class VoicePanelVideoRendererTsx23 {
                                                      constructor() {
                                                        if (closure_23.get()) {
                                                          tmp3 = focused;
                                                          value = focused.get();
                                                          tmp5 = null;
                                                          id = undefined;
                                                          if (value != null) {
                                                            id = value.id;
                                                          }
                                                          if (id !== id) {
                                                            tmp12 = closure_0;
                                                            tmp13 = closure_2;
                                                            obj2 = closure_0(closure_2[8]);
                                                            tmp14 = setFocused;
                                                            tmp15 = obj2.runOnJS(setFocused)(tmp7);
                                                          } else {
                                                            tmp8 = closure_0;
                                                            tmp9 = closure_2;
                                                            obj = closure_0(closure_2[8]);
                                                            tmp10 = setFocused;
                                                            tmp11 = obj.runOnJS(setFocused)(null);
                                                          }
                                                        } else {
                                                          tmp = closure_25;
                                                          tmp2 = closure_25();
                                                        }
                                                        return;
                                                      }
                                                    }
                                                    VoicePanelVideoRendererTsx23.__closure = { isInDefaultZoom: derivedValue2, resetOnLayoutChange: tmp17, focused, id, runOnJS: tmp(tmp2[8]).runOnJS, setFocused };
                                                    VoicePanelVideoRendererTsx23.__workletHash = 10743965328356;
                                                    VoicePanelVideoRendererTsx23.__initData = __initData21;
                                                    cResult[57] = focused;
                                                    cResult[58] = id;
                                                    cResult[59] = derivedValue2;
                                                    cResult[60] = tmp17;
                                                    cResult[61] = setFocused;
                                                    cResult[62] = VoicePanelVideoRendererTsx23;
                                                    const obj27 = { isInDefaultZoom: derivedValue2, resetOnLayoutChange: tmp17, focused, id, runOnJS: tmp(tmp2[8]).runOnJS, setFocused };
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    class Ye {
                                      constructor() {
                                        return containerLayout.get();
                                      }
                                    }
                                    const obj28 = { numGesturesActive: sharedValue3, isInSnap: sharedValue4, resetToDefaultSize: tmp16, scale: sharedValue, fitScale: derivedValue1, videoDimensions, containerLayout: null, translateX: sharedValue1, withSpring: tmp(tmp2[14]).withSpring, SCALE_PHYSICS: hideControls, translateY: sharedValue2 };
                                    class Ne {
                                      constructor(safeAreaState, safeAreaState2) {
                                        const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
                                        cheapWorkletShallowEqual2;
                                        const tmp2 = safeAreaState2;
                                        if (!cheapWorkletShallowEqual(safeAreaState, tmp2)) {
                                          const value = focused.get();
                                          id = undefined;
                                          if (value != null) {
                                            id = value.id;
                                          }
                                          const tmp7 = id === id && safeAreaState !== safeAreaState2 && null != safeAreaState2;
                                          if (tmp7) {
                                            closure_25();
                                          }
                                        }
                                      }
                                    }
                                    tmp31.__closure = obj28;
                                    tmp31.__workletHash = 15797844425755;
                                    tmp31.__initData = __initData8;
                                    cResult[23] = containerLayout;
                                    class Fe {
                                      constructor() {
                                        const value = derivedValue.get();
                                        if (value < derivedValue1.get() + c16) {
                                          return false;
                                        } else {
                                          const value3 = sharedValue1.get();
                                          const result = value3 * sharedValue.get();
                                          const value4 = sharedValue2.get();
                                          const result1 = value4 * sharedValue.get();
                                          if (result >= -50) {
                                            if (result <= c13) {
                                              if (result1 >= -50) {
                                                if (result1 <= c13) {
                                                  const width = containerLayout.get().width;
                                                  const sum = result + (width - videoDimensions.get().width * sharedValue.get()) / 2;
                                                  const height = containerLayout.get().height;
                                                  const sum1 = result1 + (height - videoDimensions.get().height * sharedValue.get()) / 2;
                                                  const result2 = videoDimensions.get().width * sharedValue.get();
                                                  const result3 = videoDimensions.get().height * sharedValue.get();
                                                  let tmp2 = result3 >= containerLayout.get().height && sum >= -50 && sum <= c14;
                                                  if (tmp2) {
                                                    const sum2 = sum + result2;
                                                    tmp2 = sum2 >= containerLayout.get().width - c14;
                                                  }
                                                  if (tmp2) {
                                                    const sum3 = sum + result2;
                                                    tmp2 = sum3 <= containerLayout.get().width + c15;
                                                  }
                                                  if (!tmp2) {
                                                    let tmp8 = result2 >= containerLayout.get().width && sum1 >= -50 && sum1 <= c14;
                                                    if (tmp8) {
                                                      const sum4 = sum1 + result3;
                                                      tmp8 = sum4 >= containerLayout.get().height - c14;
                                                    }
                                                    if (tmp8) {
                                                      const sum5 = sum1 + result3;
                                                      tmp8 = sum5 <= containerLayout.get().height + c15;
                                                    }
                                                    tmp2 = tmp8;
                                                  }
                                                  return tmp2;
                                                }
                                              }
                                            }
                                          }
                                          return false;
                                        }
                                      }
                                    }
                                    cResult[25] = sharedValue4;
                                    cResult[26] = sharedValue3;
                                    cResult[27] = tmp16;
                                    cResult[29] = sharedValue1;
                                    cResult[30] = sharedValue2;
                                    cResult[31] = videoDimensions;
                                    cResult[32] = tmp31;
                                    tmp30 = tmp31;
                                  }
                                }
                              }
                            }
                          }
                        }
                        class Fe {
                          constructor() {
                            const value = derivedValue.get();
                            if (value < derivedValue1.get() + c16) {
                              return false;
                            } else {
                              const value3 = sharedValue1.get();
                              const result = value3 * sharedValue.get();
                              const value4 = sharedValue2.get();
                              const result1 = value4 * sharedValue.get();
                              if (result >= -50) {
                                if (result <= c13) {
                                  if (result1 >= -50) {
                                    if (result1 <= c13) {
                                      const width = containerLayout.get().width;
                                      const sum = result + (width - videoDimensions.get().width * sharedValue.get()) / 2;
                                      const height = containerLayout.get().height;
                                      const sum1 = result1 + (height - videoDimensions.get().height * sharedValue.get()) / 2;
                                      const result2 = videoDimensions.get().width * sharedValue.get();
                                      const result3 = videoDimensions.get().height * sharedValue.get();
                                      let tmp2 = result3 >= containerLayout.get().height && sum >= -50 && sum <= c14;
                                      if (tmp2) {
                                        const sum2 = sum + result2;
                                        tmp2 = sum2 >= containerLayout.get().width - c14;
                                      }
                                      if (tmp2) {
                                        const sum3 = sum + result2;
                                        tmp2 = sum3 <= containerLayout.get().width + c15;
                                      }
                                      if (!tmp2) {
                                        let tmp8 = result2 >= containerLayout.get().width && sum1 >= -50 && sum1 <= c14;
                                        if (tmp8) {
                                          const sum4 = sum1 + result3;
                                          tmp8 = sum4 >= containerLayout.get().height - c14;
                                        }
                                        if (tmp8) {
                                          const sum5 = sum1 + result3;
                                          tmp8 = sum5 <= containerLayout.get().height + c15;
                                        }
                                        tmp2 = tmp8;
                                      }
                                      return tmp2;
                                    }
                                  }
                                }
                              }
                              return false;
                            }
                          }
                        }
                        const obj29 = { coverScale: derivedValue, fitScale: derivedValue1, MIN_ZOOM_FOR_COVER_SNAP_OFFSET: sharedValue3, translateX: sharedValue1, scale: sharedValue, translateY: null, SNAP_CENTER_THRESHOLD: sharedValue, containerLayout, videoDimensions, SNAP_EDGE_OUTER_THRESHOLD: sharedValue2, SNAP_EDGE_INNER_THRESHOLD: sharedValue1 };
                        Fe.__closure = obj29;
                        Fe.__workletHash = 3902544453390;
                        Fe.__initData = __initData7;
                        cResult[15] = containerLayout;
                        cResult[16] = derivedValue;
                        cResult[17] = derivedValue1;
                        cResult[18] = sharedValue;
                        cResult[19] = sharedValue1;
                        cResult[20] = sharedValue2;
                        cResult[21] = videoDimensions;
                        cResult[22] = Fe;
                        tmp24 = Fe;
                      }
                    }
                  }
                }
              }
              tmp18.__workletHash = 7067658532529;
              tmp18.__initData = __initData4;
              cResult[8] = focused;
              cResult[9] = id;
              cResult[10] = isCamera;
              cResult[11] = tmp16;
              cResult[13] = windowDimensions;
              cResult[14] = tmp18;
              tmp17 = tmp18;
            }
          }
        }
      }
    }
  }
  const fn4 = function h(arg0) {
    if ("fit" === arg0) {
      set2 = sharedValue.set;
      const withSpring2 = spring.withSpring;
      spring;
      const value = derivedValue1.get();
      let str2 = "respect-motion-settings";
      if (disableAnimations.get()) {
        str2 = "animate-never";
      }
      set2(withSpring2(value, MODE_CHANGE_PHYSICS, str2));
    } else {
      set = sharedValue.set;
      const withSpring = spring.withSpring;
      spring;
      const value2 = derivedValue.get();
      let str = "respect-motion-settings";
      if (disableAnimations.get()) {
        str = "animate-never";
      }
      const result = set(withSpring(value2, MODE_CHANGE_PHYSICS, str));
    }
    set3 = sharedValue1.set;
    const obj = spring;
    set3(obj.withSpring(0, SCALE_PHYSICS));
    set4 = sharedValue2.set;
    const obj2 = spring;
    set4(obj2.withSpring(0, SCALE_PHYSICS));
    const result1 = sharedValue7.set(arg0);
  };
  fn4.__closure = { scale: sharedValue, withSpring: tmp(tmp2[14]).withSpring, fitScale: derivedValue1, MODE_CHANGE_PHYSICS: setIsFocusedVideoZoomed, disableAnimations, coverScale: derivedValue, translateX: sharedValue1, SCALE_PHYSICS: hideControls, translateY: sharedValue2, currentSizeThreshold: sharedValue7 };
  fn4.__workletHash = 1739268382423;
  fn4.__initData = __initData3;
  cResult[1] = sharedValue7;
  cResult[2] = disableAnimations;
  cResult[3] = derivedValue1;
  cResult[4] = sharedValue;
  cResult[5] = sharedValue1;
  cResult[6] = sharedValue2;
  cResult[7] = fn4;
  tmp16 = fn4;
  ({ scale: sharedValue, withSpring: tmp(tmp2[14]).withSpring, fitScale: derivedValue1, MODE_CHANGE_PHYSICS: setIsFocusedVideoZoomed, disableAnimations, coverScale: derivedValue, translateX: sharedValue1, SCALE_PHYSICS: hideControls, translateY: sharedValue2, currentSizeThreshold: sharedValue7 });
}) : ((id) => {
  let FLING_VELOCITY_SCALING;
  let PAN_TO_ZOOM_SCALE_FACTOR;
  let PAN_TO_ZOOM_TAP_TIME_MILLIS;
  let items4;
  id = id.id;
  const isCamera = id.isCamera;
  const focused = id.focused;
  const mode = id.mode;
  const loading = id.loading;
  const containerLayout = id.containerLayout;
  const videoDimensions = id.videoDimensions;
  const disableAnimations = id.disableAnimations;
  let derivedValue;
  let derivedValue1;
  let derivedValue2;
  let resetToDefaultSize;
  let callback1;
  let callback2;
  let callback3;
  const context = loading.useContext(isCamera(focused[13]));
  const setIsFocusedVideoZoomed = context.setIsFocusedVideoZoomed;
  const windowDimensions = context.windowDimensions;
  const dismissToPIPGestureRef = context.dismissToPIPGestureRef;
  const setFocused = context.setFocused;
  const hideControls = context.hideControls;
  const controlsSpecs = context.controlsSpecs;
  const showControls = context.showControls;
  let obj = id(focused[8]);
  const sharedValue = obj.useSharedValue(1);
  let obj2 = id(focused[8]);
  const sharedValue1 = obj2.useSharedValue(0);
  let obj3 = id(focused[8]);
  const sharedValue2 = obj3.useSharedValue(0);
  let obj4 = id(focused[8]);
  const sharedValue3 = obj4.useSharedValue(0);
  let obj5 = id(focused[8]);
  const sharedValue4 = obj5.useSharedValue(false);
  let obj6 = id(focused[8]);
  const sharedValue5 = obj6.useSharedValue(0);
  const obj7 = id(focused[8]);
  const sharedValue6 = obj7.useSharedValue(false);
  let obj8 = id(focused[8]);
  const sharedValue7 = obj8.useSharedValue(null);
  const obj9 = id(focused[8]);
  class V {
    constructor() {
      const result = containerLayout.get().width / videoDimensions.get().width;
      return max(result, containerLayout.get().height / videoDimensions.get().height);
    }
  }
  V.__closure = { containerLayout, videoDimensions };
  V.__workletHash = 6691013318908;
  V.__initData = __initData23;
  derivedValue = obj9.useDerivedValue(V);
  const obj10 = id(focused[8]);
  class I {
    constructor() {
      const result = containerLayout.get().width / videoDimensions.get().width;
      return min(result, containerLayout.get().height / videoDimensions.get().height);
    }
  }
  I.__closure = { containerLayout, videoDimensions };
  I.__workletHash = 6011394063789;
  I.__initData = __initData24;
  derivedValue1 = obj10.useDerivedValue(I);
  const obj11 = id(focused[8]);
  class O {
    constructor() {
      let tmp = 0 === sharedValue1.get() && 0 === sharedValue2.get();
      if (tmp) {
        const value = sharedValue.get();
        let tmp5 = value === derivedValue1.get();
        if (!tmp5) {
          const value2 = sharedValue.get();
          tmp5 = value2 === derivedValue.get();
        }
        tmp = tmp5;
      }
      return tmp;
    }
  }
  O.__closure = { translateX: sharedValue1, translateY: sharedValue2, scale: sharedValue, fitScale: derivedValue1, coverScale: derivedValue };
  O.__workletHash = 14821802509624;
  O.__initData = __initData25;
  derivedValue2 = obj11.useDerivedValue(O);
  class R {
    constructor(arg0) {
      if ("fit" === arg0) {
        set2 = sharedValue.set;
        const withSpring2 = spring.withSpring;
        spring;
        const value = derivedValue1.get();
        let str2 = "respect-motion-settings";
        if (disableAnimations.get()) {
          str2 = "animate-never";
        }
        set2(withSpring2(value, MODE_CHANGE_PHYSICS, str2));
      } else {
        set = sharedValue.set;
        const withSpring = spring.withSpring;
        spring;
        const value2 = derivedValue.get();
        let str = "respect-motion-settings";
        if (disableAnimations.get()) {
          str = "animate-never";
        }
        const result = set(withSpring(value2, MODE_CHANGE_PHYSICS, str));
      }
      set3 = sharedValue1.set;
      const obj = spring;
      set3(obj.withSpring(0, SCALE_PHYSICS));
      set4 = sharedValue2.set;
      const obj2 = spring;
      set4(obj2.withSpring(0, SCALE_PHYSICS));
      const result1 = sharedValue7.set(arg0);
    }
  }
  R.__closure = { scale: sharedValue, withSpring: id(focused[14]).withSpring, fitScale: derivedValue1, MODE_CHANGE_PHYSICS: disableAnimations, disableAnimations, coverScale: derivedValue, translateX: sharedValue1, SCALE_PHYSICS: dismissToPIPGestureRef, translateY: sharedValue2, currentSizeThreshold: sharedValue7 };
  R.__workletHash = 408535233062;
  R.__initData = __initData26;
  const items = [sharedValue, sharedValue1, sharedValue2, derivedValue, sharedValue7, derivedValue1, disableAnimations];
  ({ scale: sharedValue, withSpring: id(focused[14]).withSpring, fitScale: derivedValue1, MODE_CHANGE_PHYSICS: disableAnimations, disableAnimations, coverScale: derivedValue, translateX: sharedValue1, SCALE_PHYSICS: dismissToPIPGestureRef, translateY: sharedValue2, currentSizeThreshold: sharedValue7 });
  resetToDefaultSize = loading.useCallback(R, items);
  class H {
    constructor() {
      const value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      let str = "cover";
      if (id === id) {
        str = "fit";
      }
      let tmp5 = isCamera;
      const tmp3 = videoDimensions.get().width >= videoDimensions.get().height;
      const tmp4 = windowDimensions.get().width >= windowDimensions.get().height;
      if (isCamera) {
        tmp5 = "fit" === str;
      }
      if (tmp5) {
        tmp5 = tmp3 === tmp4;
      }
      if (tmp5) {
        str = "cover";
      }
      callback(str);
    }
  }
  H.__closure = { focused, id, videoDimensions, windowDimensions, isCamera, resetToDefaultSize };
  H.__workletHash = 6871308420482;
  H.__initData = __initData27;
  const items1 = [focused, id, isCamera, videoDimensions, windowDimensions, resetToDefaultSize];
  callback1 = loading.useCallback(H, items1);
  const obj13 = id(focused[8]);
  class L {
    constructor() {
      return containerLayout.get();
    }
  }
  L.__closure = { containerLayout };
  L.__workletHash = 2574402393891;
  L.__initData = __initData28;
  class A {
    constructor(safeAreaState, safeAreaState2) {
      const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
      cheapWorkletShallowEqual2;
      const tmp2 = safeAreaState2;
      if (!cheapWorkletShallowEqual(safeAreaState, tmp2)) {
        const value = focused.get();
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        const tmp7 = id === id && safeAreaState !== safeAreaState2 && null != safeAreaState2;
        if (tmp7) {
          callback1();
        }
      }
    }
  }
  A.__closure = { cheapWorkletShallowEqual: id(focused[15]).cheapWorkletShallowEqual, focused, id, resetOnLayoutChange: callback1 };
  A.__workletHash = 5114541603111;
  A.__initData = __initData29;
  ({ cheapWorkletShallowEqual: id(focused[15]).cheapWorkletShallowEqual, focused, id, resetOnLayoutChange: callback1 });
  const animatedReaction = obj13.useAnimatedReaction(L, A);
  function ee() {
    const value = derivedValue.get();
    if (value < derivedValue1.get() + c16) {
      return false;
    } else {
      const value3 = sharedValue1.get();
      const result = value3 * sharedValue.get();
      const value4 = sharedValue2.get();
      const result1 = value4 * sharedValue.get();
      if (result >= -50) {
        if (result <= c13) {
          if (result1 >= -50) {
            if (result1 <= c13) {
              const width = containerLayout.get().width;
              const sum = result + (width - videoDimensions.get().width * sharedValue.get()) / 2;
              const height = containerLayout.get().height;
              const sum1 = result1 + (height - videoDimensions.get().height * sharedValue.get()) / 2;
              const result2 = videoDimensions.get().width * sharedValue.get();
              const result3 = videoDimensions.get().height * sharedValue.get();
              let tmp2 = result3 >= containerLayout.get().height && sum >= -50 && sum <= c14;
              if (tmp2) {
                const sum2 = sum + result2;
                tmp2 = sum2 >= containerLayout.get().width - c14;
              }
              if (tmp2) {
                const sum3 = sum + result2;
                tmp2 = sum3 <= containerLayout.get().width + c15;
              }
              if (!tmp2) {
                let tmp8 = result2 >= containerLayout.get().width && sum1 >= -50 && sum1 <= c14;
                if (tmp8) {
                  const sum4 = sum1 + result3;
                  tmp8 = sum4 >= containerLayout.get().height - c14;
                }
                if (tmp8) {
                  const sum5 = sum1 + result3;
                  tmp8 = sum5 <= containerLayout.get().height + c15;
                }
                tmp2 = tmp8;
              }
              return tmp2;
            }
          }
        }
      }
      return false;
    }
  }
  const obj15 = { coverScale: derivedValue, fitScale: derivedValue1, MIN_ZOOM_FOR_COVER_SNAP_OFFSET: sharedValue1, translateX: sharedValue1, scale: sharedValue, translateY: sharedValue2, SNAP_CENTER_THRESHOLD: controlsSpecs, containerLayout, videoDimensions, SNAP_EDGE_OUTER_THRESHOLD: sharedValue, SNAP_EDGE_INNER_THRESHOLD: showControls };
  ee.__closure = obj15;
  ee.__workletHash = 6675638951447;
  ee.__initData = __initData30;
  const items2 = [derivedValue, sharedValue, sharedValue1, sharedValue2, containerLayout, videoDimensions, derivedValue1];
  callback2 = loading.useCallback(ee, items2);
  function te() {
    if (sharedValue3.get() <= 0) {
      if (sharedValue4.get()) {
        const result = sharedValue4.set(false);
        callback("cover");
      } else {
        const value = sharedValue.get();
        if (value < derivedValue1.get()) {
          callback("fit");
        } else {
          const _Math = Math;
          const height = videoDimensions.get().height;
          const maxResult = max(0, (height - containerLayout.get().height / sharedValue.get()) / 2);
          const _Math2 = Math;
          const max2 = Math.max;
          const width = videoDimensions.get().width;
          const max2Result = max2(0, (width - containerLayout.get().width / sharedValue.get()) / 2);
          const _Math3 = Math;
          const _Math4 = Math;
          set = sharedValue1.set;
          const obj3 = spring;
          const tmp16 = -max2Result;
          const result1 = set(obj3.withSpring(Math.min(max2Result, Math.max(tmp16, sharedValue1.get())), SCALE_PHYSICS));
          const _Math5 = Math;
          const _Math6 = Math;
          set2 = sharedValue2.set;
          const obj4 = spring;
          const tmp20 = -maxResult;
          set2(obj4.withSpring(Math.min(maxResult, Math.max(tmp20, sharedValue2.get())), SCALE_PHYSICS));
        }
      }
    }
  }
  te.__closure = { numGesturesActive: sharedValue3, isInSnap: sharedValue4, resetToDefaultSize, scale: sharedValue, fitScale: derivedValue1, videoDimensions, containerLayout, translateX: sharedValue1, withSpring: id(focused[14]).withSpring, SCALE_PHYSICS: dismissToPIPGestureRef, translateY: sharedValue2 };
  te.__workletHash = 4588260677371;
  te.__initData = __initData31;
  const items3 = [derivedValue1, sharedValue3, sharedValue4, sharedValue, videoDimensions, containerLayout, sharedValue1, sharedValue2, resetToDefaultSize];
  ({ numGesturesActive: sharedValue3, isInSnap: sharedValue4, resetToDefaultSize, scale: sharedValue, fitScale: derivedValue1, videoDimensions, containerLayout, translateX: sharedValue1, withSpring: id(focused[14]).withSpring, SCALE_PHYSICS: dismissToPIPGestureRef, translateY: sharedValue2 });
  callback3 = loading.useCallback(te, items3);
  function ie() {
    const value = focused.get();
    id = undefined;
    if (value != null) {
      id = value.id;
    }
    let tmp3 = id === id;
    if (tmp3) {
      const value3 = derivedValue2.get();
      let value4 = !value3;
      if (value3) {
        value4 = sharedValue6.get();
      }
      tmp3 = value4;
    }
    return tmp3;
  }
  ie.__closure = { focused, id, isInDefaultZoom: derivedValue2, isInPanToZoom: sharedValue6 };
  ie.__workletHash = 17489463025480;
  ie.__initData = __initData32;
  function ne(arg0, arg1) {
    if (arg0 !== arg1) {
      setIsFocusedVideoZoomed(arg0);
    }
  }
  ne.__closure = { setIsFocusedVideoZoomed };
  ne.__workletHash = 9213856945853;
  ne.__initData = __initData33;
  const obj17 = id(focused[8]);
  const animatedReaction1 = obj17.useAnimatedReaction(ie, ne);
  function se() {
    const value = focused.get();
    id = undefined;
    if (value != null) {
      id = value.id;
    }
    return id === id;
  }
  se.__closure = { focused, id };
  se.__workletHash = 17123452217830;
  se.__initData = __initData34;
  function oe(arg0, arg1) {
    if (arg0 !== arg1) {
      callback1();
    }
  }
  oe.__closure = { resetOnLayoutChange: callback1 };
  oe.__workletHash = 7532165308562;
  oe.__initData = __initData35;
  const obj18 = id(focused[8]);
  const animatedReaction2 = obj18.useAnimatedReaction(se, oe);
  function re() {
    return mode.get();
  }
  re.__closure = { mode };
  re.__workletHash = 8911132700576;
  re.__initData = __initData36;
  function ae(arg0, arg1) {
    if (arg0 !== arg1) {
      callback1();
    }
  }
  ae.__closure = { resetOnLayoutChange: callback1 };
  ae.__workletHash = 3125310589147;
  ae.__initData = __initData37;
  const obj19 = id(focused[8]);
  const animatedReaction3 = obj19.useAnimatedReaction(re, ae);
  function le() {
    return videoDimensions.get();
  }
  le.__closure = { videoDimensions };
  le.__workletHash = 17347392965986;
  le.__initData = __initData38;
  function ce(width, width2) {
    if (null != sharedValue7) {
      let width1;
      width = width.width;
      if (width2 != null) {
        width1 = width2.width;
      }
      let tmp4 = width === width1;
      if (tmp4) {
        let height1;
        const height = width.height;
        if (width2 != null) {
          height1 = width2.height;
        }
        tmp4 = height === height1;
      }
      if (!tmp4) {
        callback1();
      }
    }
  }
  ce.__closure = { currentSizeThreshold: sharedValue7, resetOnLayoutChange: callback1 };
  ce.__workletHash = 235100464909;
  ce.__initData = __initData39;
  const obj20 = id(focused[8]);
  const animatedReaction4 = obj20.useAnimatedReaction(le, ce);
  const obj21 = id(focused[8]);
  class Je {
    constructor() {
      return derivedValue.get();
    }
  }
  Je.__closure = { coverScale: derivedValue };
  Je.__workletHash = 4019095973092;
  Je.__initData = __initData40;
  class We {
    constructor(arg0, arg1) {
      const value = sharedValue7.get();
      const tmp2 = "cover" === value && arg0 !== arg1;
      if (tmp2) {
        callback(value);
      }
    }
  }
  We.__closure = { currentSizeThreshold: sharedValue7, resetToDefaultSize };
  We.__workletHash = 16156382932216;
  We.__initData = __initData41;
  const animatedReaction5 = obj21.useAnimatedReaction(Je, We);
  function je() {
    return sharedValue4.get();
  }
  je.__closure = { isInSnap: sharedValue4 };
  je.__workletHash = 13664520237606;
  je.__initData = __initData42;
  function qe(arg0, arg1) {
    const tmp = arg0 !== arg1 && arg0;
    if (tmp) {
      const obj = id(focused[8]);
      const runOnJSResult = obj.runOnJS(id(focused[16]).triggerHapticFeedback);
      runOnJSResult(id(focused[16]).HapticFeedbackTypes.IMPACT_LIGHT);
    }
  }
  const obj22 = id(focused[8]);
  qe.__closure = { runOnJS: id(focused[8]).runOnJS, triggerHapticFeedback: id(focused[16]).triggerHapticFeedback, HapticFeedbackTypes: id(focused[16]).HapticFeedbackTypes };
  qe.__workletHash = 14624897705679;
  qe.__initData = __initData43;
  ({ runOnJS: id(focused[8]).runOnJS, triggerHapticFeedback: id(focused[16]).triggerHapticFeedback, HapticFeedbackTypes: id(focused[16]).HapticFeedbackTypes });
  const animatedReaction6 = obj22.useAnimatedReaction(je, qe);
  const obj24 = {
    gesture: loading.useMemo(() => {
      const Gesture = LegacyBaseButton.Gesture;
      const Simultaneous = Gesture.Simultaneous;
      const Gesture2 = LegacyBaseButton.Gesture;
      const Exclusive = Gesture2.Exclusive;
      const Gesture3 = LegacyBaseButton.Gesture;
      const TapResult = Gesture3.Tap();
      const numberOfTapsResult = TapResult.numberOfTaps(2);
      class R {
        constructor(arg0, fail) {
          return fail.fail();
        }
      }
      R.__closure = {};
      R.__workletHash = 14467226519720;
      R.__initData = __initData2;
      const onTouchesMoveResult = numberOfTapsResult.onTouchesMove(R);
      class O {
        constructor() {
          if (derivedValue2.get()) {
            const value = closure_1_2.get();
            id = undefined;
            if (value != null) {
              id = value.id;
            }
            if (id !== closure_1_0) {
              const obj2 = id(focused[8]);
              obj2.runOnJS(setFocused)(tmp7);
            } else {
              const obj = id(focused[8]);
              obj.runOnJS(setFocused)(null);
            }
          } else {
            callback1();
          }
        }
      }
      let obj = { isInDefaultZoom: derivedValue2, resetOnLayoutChange: callback1, focused, id, runOnJS: ReanimatedRexport2.runOnJS, setFocused };
      O.__closure = obj;
      O.__workletHash = 13573656845512;
      O.__initData = __initData;
      const onStartResult = onTouchesMoveResult.onStart(O);
      const Gesture4 = LegacyBaseButton.Gesture;
      const TapResult1 = Gesture4.Tap();
      class I {
        constructor(arg0, fail) {
          return fail.fail();
        }
      }
      I.__closure = {};
      I.__workletHash = 16157379523852;
      I.__initData = __initData4;
      const onTouchesMoveResult1 = TapResult1.onTouchesMove(I);
      class V {
        constructor() {
          if (controlsSpecs.get().mode === setIsFocusedVideoZoomed.HIDDEN) {
            const obj2 = id(focused[8]);
            obj2.runOnJS(showControls)({ debounce: true });
          } else {
            const obj = id(focused[8]);
            obj.runOnJS(hideControls)({ debounce: true });
          }
        }
      }
      let obj2 = { controlsSpecs, VoicePanelControlsModes, runOnJS: ReanimatedRexport2.runOnJS, showControls, hideControls };
      V.__closure = obj2;
      V.__workletHash = 11428963347558;
      V.__initData = __initData3;
      const ExclusiveResult = Exclusive(onStartResult, onTouchesMoveResult1.onStart(V));
      const Gesture5 = LegacyBaseButton.Gesture;
      const fn = function w(arg0, fail) {
        const value = focused.get();
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        if (id !== closure_1_0) {
          fail.fail();
        }
      };
      fn.__closure = { focused, id };
      fn.__workletHash = 8601263634490;
      fn.__initData = __initData8;
      const PinchResult = Gesture5.Pinch();
      const enabledResult = PinchResult.enabled(!loading);
      const onTouchesDownResult = enabledResult.onTouchesDown(fn);
      class T {
        constructor() {
          const result = PAN_TO_ZOOM_TAP_TIME_MILLIS.set(PAN_TO_ZOOM_TAP_TIME_MILLIS.get() + 1);
          const result1 = sharedValue6.set(false);
          const result2 = sharedValue7.set(null);
        }
      }
      const obj3 = { numGesturesActive: sharedValue3, isInPanToZoom: sharedValue6, currentSizeThreshold: sharedValue7 };
      T.__closure = obj3;
      T.__workletHash = 3664316879698;
      T.__initData = __initData7;
      const fn2 = function p(scaleChange) {
        set = sharedValue.set;
        const value = sharedValue.get();
        const value2 = sharedValue.get();
        scaleChange = scaleChange.scaleChange;
        if (typeof sharedValue6 === "function") {
          let sum = scaleChange;
          if (value2 < tmp3) {
            const diff = 1 - value2;
            const _Math = Math;
            const diff1 = scaleChange - 1;
            sum = 1 + diff1 * Math.max(0.1, 1 - diff * diff * 5);
          }
          const result = set(value * sum);
          const diff2 = scaleChange.focalX - containerLayout.get().width / 2;
          const diff3 = scaleChange.focalY - containerLayout.get().height / 2;
          const diff4 = scaleChange.scaleChange - 1;
          const result1 = -1 * diff2 * diff4 / sharedValue.get();
          const diff5 = scaleChange.scaleChange - 1;
          const result2 = -1 * diff3 * diff5 / sharedValue.get();
          const result3 = sharedValue1.set(sharedValue1.get() + result1);
          const result4 = FLING_VELOCITY_SCALING.set(FLING_VELOCITY_SCALING.get() + result2);
          const result5 = PAN_TO_ZOOM_SCALE_FACTOR.set(callback2());
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      };
      const obj4 = { scale: sharedValue, getScaleChangeWithOverscroll, fitScale: derivedValue1, containerLayout, translateX: sharedValue1, translateY: sharedValue2, isInSnap: sharedValue4, isInCoverSnap: callback2 };
      fn2.__closure = obj4;
      fn2.__workletHash = 723271209507;
      fn2.__initData = __initData6;
      const fn3 = function v() {
        const result = PAN_TO_ZOOM_TAP_TIME_MILLIS.set(PAN_TO_ZOOM_TAP_TIME_MILLIS.get() - 1);
        callback3();
      };
      const obj5 = { numGesturesActive: sharedValue3, handleMovementEnd: callback3 };
      fn3.__closure = obj5;
      fn3.__workletHash = 4505058477282;
      fn3.__initData = __initData5;
      const onStartResult1 = onTouchesDownResult.onStart(T);
      const onChangeResult = onStartResult1.onChange(fn2);
      const onEndResult = onChangeResult.onEnd(fn3);
      const Gesture6 = LegacyBaseButton.Gesture;
      const PanResult = Gesture6.Pan();
      const enabledResult1 = PanResult.enabled(!loading);
      let result = enabledResult1.requireExternalGestureToFail(dismissToPIPGestureRef);
      const fn4 = function f(arg0, fail) {
        const value = focused.get();
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        if (id !== closure_1_0) {
          fail.fail();
        }
      };
      fn4.__closure = { focused, id };
      fn4.__workletHash = 13247901542816;
      fn4.__initData = __initData14;
      const averageTouchesResult = result.averageTouches(true);
      const onTouchesDownResult1 = averageTouchesResult.onTouchesDown(fn4);
      class S {
        constructor() {
          const timestamp = Date.now();
          const result = sharedValue6.set(timestamp - sharedValue5.get() <= sharedValue3);
          const result1 = sharedValue5.set(Date.now());
        }
      }
      const obj6 = { lastTapTimestamp: sharedValue5, PAN_TO_ZOOM_TAP_TIME_MILLIS, isInPanToZoom: sharedValue6 };
      S.__closure = obj6;
      S.__workletHash = 14732086174045;
      S.__initData = __initData13;
      const fn5 = function c() {
        if (sharedValue6.get()) {
          const obj = id(focused[8]);
          obj.runOnJS(hideControls)();
        }
        const result = PAN_TO_ZOOM_TAP_TIME_MILLIS.set(PAN_TO_ZOOM_TAP_TIME_MILLIS.get() + 1);
        const result1 = sharedValue7.set(null);
      };
      const onBeginResult = onTouchesDownResult1.onBegin(S);
      fn5.__closure = { isInPanToZoom: sharedValue6, runOnJS: ReanimatedRexport2.runOnJS, hideControls, numGesturesActive: sharedValue3, currentSizeThreshold: sharedValue7 };
      fn5.__workletHash = 6768121644126;
      fn5.__initData = __initData12;
      ({ isInPanToZoom: sharedValue6, runOnJS: ReanimatedRexport2.runOnJS, hideControls, numGesturesActive: sharedValue3, currentSizeThreshold: sharedValue7 });
      const fn6 = function s(changeY) {
        if (closure_1_21.get()) {
          const result = changeY.changeY * sharedValue4;
          set3 = sharedValue.set;
          const value = sharedValue.get();
          const value4 = sharedValue.get();
          if (typeof sharedValue6 === "function") {
            const sum = 1 + result;
            let sum1 = sum;
            if (value4 < tmp15) {
              const diff = 1 - value4;
              const _Math = Math;
              sum1 = 1 + (sum - 1) * Math.max(0.1, 1 - diff * diff * 5);
            }
            set3(value * sum1);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          set = sharedValue1.set;
          const value5 = sharedValue1.get();
          const result1 = set(value5 + changeY.changeX / sharedValue.get());
          set2 = FLING_VELOCITY_SCALING.set;
          const value6 = FLING_VELOCITY_SCALING.get();
          set2(value6 + changeY.changeY / sharedValue.get());
        }
        const result2 = PAN_TO_ZOOM_SCALE_FACTOR.set(callback2());
      };
      const obj8 = { isInPanToZoom: sharedValue6, PAN_TO_ZOOM_SCALE_FACTOR, scale: sharedValue, getScaleChangeWithOverscroll, fitScale: derivedValue1, translateX: sharedValue1, translateY: sharedValue2, isInSnap: sharedValue4, isInCoverSnap: callback2 };
      fn6.__closure = obj8;
      fn6.__workletHash = 6353968881882;
      fn6.__initData = __initData11;
      const fn7 = function n(velocityX) {
        const result = PAN_TO_ZOOM_TAP_TIME_MILLIS.set(PAN_TO_ZOOM_TAP_TIME_MILLIS.get() - 1);
        set = sharedValue1.set;
        const withSpring = id(focused[14]).withSpring;
        id(focused[14]);
        const value = sharedValue1.get();
        const result1 = velocityX.velocityX * sharedValue2;
        const result2 = set(withSpring(value + result1 / sharedValue.get(), dismissToPIPGestureRef));
        set2 = FLING_VELOCITY_SCALING.set;
        const withSpring2 = id(focused[14]).withSpring;
        id(focused[14]);
        const value2 = FLING_VELOCITY_SCALING.get();
        const result3 = velocityX.velocityY * sharedValue2;
        set2(withSpring2(value2 + result3 / sharedValue.get(), dismissToPIPGestureRef));
        callback3();
      };
      const onStartResult2 = onBeginResult.onStart(fn5);
      const onChangeResult1 = onStartResult2.onChange(fn6);
      fn7.__closure = { numGesturesActive: sharedValue3, translateX: sharedValue1, withSpring: spring.withSpring, FLING_VELOCITY_SCALING, scale: sharedValue, SCALE_PHYSICS, translateY: sharedValue2, handleMovementEnd: callback3 };
      fn7.__workletHash = 14411433987776;
      fn7.__initData = __initData10;
      ({ numGesturesActive: sharedValue3, translateX: sharedValue1, withSpring: spring.withSpring, FLING_VELOCITY_SCALING, scale: sharedValue, SCALE_PHYSICS, translateY: sharedValue2, handleMovementEnd: callback3 });
      const fn8 = function t() {
        const result = sharedValue6.set(false);
      };
      fn8.__closure = { isInPanToZoom: sharedValue6 };
      fn8.__workletHash = 8145424451590;
      fn8.__initData = __initData9;
      const onEndResult1 = onChangeResult1.onEnd(fn7);
      return Simultaneous(ExclusiveResult, onEndResult, onEndResult1.onFinalize(fn8));
    }, items4),
    scale: sharedValue,
    translateX: sharedValue1,
    translateY: sharedValue2,
    numGesturesActive: sharedValue3,
    isInSnap: sharedValue4
  };
  items4 = [loading, dismissToPIPGestureRef, focused, id, sharedValue, sharedValue1, sharedValue2, callback1, sharedValue3, sharedValue7, containerLayout, sharedValue4, callback2, callback3, sharedValue5, sharedValue6, derivedValue2, setFocused, hideControls, controlsSpecs, showControls, derivedValue1];
  return obj24;
});
function shouldMakeActive(selfId) {
  let focusedId;
  let isScrollVisible;
  ({ focusedId, isScrollVisible } = selfId);
  let tmp = !isScrollVisible;
  selfId = selfId.selfId;
  if (isScrollVisible) {
    tmp = selfId.mode === VoicePanelModes.PIP;
  }
  if (!tmp) {
    tmp = null != focusedId && focusedId !== selfId;
  }
  return !tmp;
}
shouldMakeActive.__closure = { VoicePanelModes };
shouldMakeActive.__workletHash = 1485310892812;
shouldMakeActive.__initData = { code: "function shouldMakeActive_VoicePanelVideoRendererTsx72({mode:mode,focusedId:focusedId,selfId:selfId,isScrollVisible:isScrollVisible}){const{VoicePanelModes}=this.__closure;const isPIP=mode===VoicePanelModes.PIP;if(!isScrollVisible||isPIP||focusedId!=null&&focusedId!==selfId){return false;}return true;}" };
const __initData44 = { code: "function VoicePanelVideoRendererTsx73(){const{mode,focused,isScrollVisible,streamId}=this.__closure;var _focused$get;return[mode.get(),(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,isScrollVisible.get(),streamId];}" };
const __initData45 = { code: "function VoicePanelVideoRendererTsx74(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setHasActiveVideoOutputSink,shouldMakeActive,id}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const[mode_0,focusedId,isScrollVisible_0,streamId_0]=props;if(streamId_0==null){return;}runOnJS(setHasActiveVideoOutputSink)(streamId_0,shouldMakeActive({mode:mode_0,focusedId:focusedId,selfId:id,isScrollVisible:isScrollVisible_0}));}" };
const __initData46 = { code: "function VoicePanelVideoRendererTsx75(){const{focused,id,windowDimensions,sharedCoords}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id){return{width:windowDimensions.get().width,height:windowDimensions.get().height};}return{width:sharedCoords.get().width,height:sharedCoords.get().height};}" };
const __initData47 = { code: "function VoicePanelVideoRendererTsx76(){const{scale,videoDimensions,mode}=this.__closure;return[scale.get(),videoDimensions.get(),mode.get()];}" };
const __initData48 = { code: "function VoicePanelVideoRendererTsx77(props_0,previous_0){const{streamId,cheapWorkletShallowEqual,runOnJS,respondToVideoSizeUpdate}=this.__closure;if(streamId==null){return;}if(cheapWorkletShallowEqual(props_0,previous_0!==null&&previous_0!==void 0?previous_0:undefined)){return;}runOnJS(respondToVideoSizeUpdate)();}" };
const __initData49 = { code: "function VoicePanelVideoRendererTsx78(){const{videoDimensions,pipState,VoicePanelPIPModes,scale,disableAnimations,translateX,translateY,mirror}=this.__closure;let{width:width_0,height:height_0}=videoDimensions.get();if(pipState.mode===VoicePanelPIPModes.IN_APP){const pipScale=pipState.scale.get();if(width_0>height_0){width_0=width_0*(pipState.height*pipScale/height_0)/scale.get();height_0=pipState.height*pipScale/scale.get();}else{height_0=height_0*(pipState.width*pipScale/width_0)/scale.get();width_0=pipState.width*pipScale/scale.get();}}return{width:width_0,height:height_0,opacity:disableAnimations.get()?0:1,transform:[{scale:scale.get()},{translateX:translateX.get()},{translateY:translateY.get()},{scaleX:mirror?-1:1}]};}" };
const __initData50 = { code: "function VoicePanelVideoRendererTsx79(){const{mode,VoicePanelModes,focused,id}=this.__closure;var _focused$get;return{inPip:mode.get()===VoicePanelModes.PIP,isFocused:((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id};}" };
const __initData51 = { code: "function VoicePanelVideoRendererTsx80(curr,prev){const{cheapWorkletShallowEqual,strokeOpacity,withDelay,withTiming}=this.__closure;if(cheapWorkletShallowEqual(curr,prev!==null&&prev!==void 0?prev:undefined)){return;}if(curr.inPip||curr.isFocused){strokeOpacity.set(0);return;}const shouldDelay=(prev===null||prev===void 0?void 0:prev.isFocused)===true;strokeOpacity.set(shouldDelay?withDelay(300,withTiming(0.3,{duration:0},\"animate-never\")):0.3);}" };
const __initData52 = { code: "function VoicePanelVideoRendererTsx81(){const{isInSnap,SNAP_EDGE_INNER_THRESHOLD,borderRadius,strokeOpacity}=this.__closure;if(isInSnap.get()){return{position:\"absolute\",top:0,left:0,bottom:0,right:0,borderWidth:SNAP_EDGE_INNER_THRESHOLD,overflow:\"hidden\",borderColor:\"white\",opacity:0.5};}return{position:\"absolute\",top:-1,left:-1,bottom:-1,right:-1,borderWidth:2,borderRadius:borderRadius+2,overflow:\"hidden\",borderColor:\"white\",opacity:strokeOpacity.get()};}" };
const __initData53 = { code: "function VoicePanelVideoRendererTsx82(values){const{layout,disableAnimations}=this.__closure;return layout(values,disableAnimations.get());}" };
const __initData54 = { code: "function VoicePanelVideoRendererTsx83(){const{mode,focused,isScrollVisible,streamId}=this.__closure;var _focused$get;return[mode.get(),(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,isScrollVisible.get(),streamId];}" };
const __initData55 = { code: "function VoicePanelVideoRendererTsx84(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setHasActiveVideoOutputSink,shouldMakeActive,id}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[mode_0,focusedId,isScrollVisible_0,streamId_0]=props;if(streamId_0==null)return;runOnJS(setHasActiveVideoOutputSink)(streamId_0,shouldMakeActive({mode:mode_0,focusedId:focusedId,selfId:id,isScrollVisible:isScrollVisible_0}));}" };
const __initData56 = { code: "function VoicePanelVideoRendererTsx85(){const{focused,id,windowDimensions,sharedCoords}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id){return{width:windowDimensions.get().width,height:windowDimensions.get().height};}return{width:sharedCoords.get().width,height:sharedCoords.get().height};}" };
const __initData57 = { code: "function VoicePanelVideoRendererTsx86(){const{scale,videoDimensions,mode}=this.__closure;return[scale.get(),videoDimensions.get(),mode.get()];}" };
const __initData58 = { code: "function VoicePanelVideoRendererTsx87(props_0,previous_0){const{streamId,cheapWorkletShallowEqual,runOnJS,respondToVideoSizeUpdate}=this.__closure;if(streamId==null)return;if(cheapWorkletShallowEqual(props_0,previous_0!==null&&previous_0!==void 0?previous_0:undefined))return;runOnJS(respondToVideoSizeUpdate)();}" };
const __initData59 = { code: "function VoicePanelVideoRendererTsx88(){const{videoDimensions,pipState,VoicePanelPIPModes,scale,disableAnimations,translateX,translateY,mirror}=this.__closure;let{width:width_0,height:height_0}=videoDimensions.get();if(pipState.mode===VoicePanelPIPModes.IN_APP){const pipScale=pipState.scale.get();if(width_0>height_0){width_0=width_0*(pipState.height*pipScale/height_0)/scale.get();height_0=pipState.height*pipScale/scale.get();}else{height_0=height_0*(pipState.width*pipScale/width_0)/scale.get();width_0=pipState.width*pipScale/scale.get();}}return{width:width_0,height:height_0,opacity:disableAnimations.get()?0:1,transform:[{scale:scale.get()},{translateX:translateX.get()},{translateY:translateY.get()},{scaleX:mirror?-1:1}]};}" };
const __initData60 = { code: "function VoicePanelVideoRendererTsx89(){const{mode,VoicePanelModes,focused,id}=this.__closure;var _focused$get;return{inPip:mode.get()===VoicePanelModes.PIP,isFocused:((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id};}" };
const __initData61 = { code: "function VoicePanelVideoRendererTsx90(curr,prev){const{cheapWorkletShallowEqual,strokeOpacity,withDelay,withTiming}=this.__closure;if(cheapWorkletShallowEqual(curr,prev!==null&&prev!==void 0?prev:undefined))return;if(curr.inPip||curr.isFocused){strokeOpacity.set(0);return;}const shouldDelay=(prev===null||prev===void 0?void 0:prev.isFocused)===true;strokeOpacity.set(shouldDelay?withDelay(300,withTiming(0.3,{duration:0},'animate-never')):0.3);}" };
const __initData62 = { code: "function VoicePanelVideoRendererTsx91(){const{isInSnap,SNAP_EDGE_INNER_THRESHOLD,borderRadius,strokeOpacity}=this.__closure;if(isInSnap.get()){return{position:'absolute',top:0,left:0,bottom:0,right:0,borderWidth:SNAP_EDGE_INNER_THRESHOLD,overflow:'hidden',borderColor:'white',opacity:0.5};}return{position:'absolute',top:-1,left:-1,bottom:-1,right:-1,borderWidth:2,borderRadius:borderRadius+2,overflow:'hidden',borderColor:'white',opacity:strokeOpacity.get()};}" };
const __initData63 = { code: "function VoicePanelVideoRendererTsx92(values){const{layout,disableAnimations}=this.__closure;return layout(values,disableAnimations.get());}" };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let borderWidth;
  let c16;
  let closure_6;
  let first;
  let focusOnReady;
  let gesture;
  let layout;
  let mirror;
  let paused;
  let scale;
  let sharedCoords;
  let streamKey;
  let style;
  let tmp19;
  let translateY;
  let userId;
  let videoSpinnerContext;
  let tmp = id;
  let obj = id(sharedCoords[12]);
  const cResult = obj.c(75);
  id = id.id;
  const streamId = id.streamId;
  ({ userId, videoSpinnerContext, sharedCoords } = id);
  const isScrollVisible = id.isScrollVisible;
  const isCamera = id.isCamera;
  ({ streamKey, mirror, focusOnReady, paused, style, layout } = id);
  let tmp4 = undefined !== mirror && mirror;
  VoicePanelModes = tmp4;
  let closure_7 = tmp5;
  let tmp6 = undefined !== paused && paused;
  const tmp7 = translateY();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "VoicePanelVideoRenderer" };
    let num = 0;
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = tmp(sharedCoords[18]);
  const surfaceDirectRendererExperiment = tmpResult.useSurfaceDirectRendererExperiment(userId, first);
  const context = isCamera.useContext(streamId(sharedCoords[13]));
  const mode = context.mode;
  const focused = context.focused;
  const setFocused = context.setFocused;
  const layoutManager = context.layoutManager;
  const windowDimensions = context.windowDimensions;
  const streamOutputSinkStack = context.streamOutputSinkStack;
  const tmpResult13 = tmp(sharedCoords[8]);
  const sharedValue = tmpResult13.useSharedValue(true);
  const obj3 = {};
  const useSharedValue = tmp(sharedCoords[8]).useSharedValue;
  tmp(sharedCoords[8]);
  const merged = Object.assign(layoutManager.getTargetDimensions(id));
  const sharedValue1 = useSharedValue(obj3);
  const tmpResult15 = tmp(sharedCoords[19]);
  const pIPState = tmpResult15.usePIPState();
  let tmp17 = isCamera && pIPState.id === id && surfaceDirectRendererExperiment;
  const tmp18 = isScrollVisible(obj4.useState(true), 2);
  [tmp19, c16] = tmp18;
  if (cResult[1] === (undefined !== focusOnReady && focusOnReady)) {
    if (cResult[2] === id) {
      let tmp20;
      if (cResult[3] === setFocused) {
        tmp20 = cResult[4];
      }
      const ref = obj4.useRef(tmp20);
      if (cResult[5] === tmp19) {
        if (cResult[6] === tmp6) {
          if (cResult[7] === streamId) {
            if (cResult[8] === streamKey) {
              if (cResult[9] === userId) {
                let tmp21;
                if (cResult[10] === videoSpinnerContext) {
                  tmp21 = cResult[11];
                }
                const onReady = tmp10(sharedCoords[20])(tmp21).onReady;
                if (cResult[12] === tmp19) {
                  if (cResult[13] === streamId) {
                    if (cResult[14] === userId) {
                      let tmp23;
                      let tmp25;
                      if (cResult[15] === videoSpinnerContext) {
                        tmp23 = cResult[16];
                      }
                      streamId(sharedCoords[21])(tmp23);
                      if (cResult[17] !== onReady) {
                        function ne() {
                          v005(false);
                          ref.current();
                          onReady();
                        }
                        cResult[17] = onReady;
                        cResult[18] = ne;
                        tmp25 = ne;
                      } else {
                        tmp25 = cResult[18];
                      }
                      const tmpResult16 = tmp(sharedCoords[22]);
                      const setHasActiveVideoOutputSink = tmpResult16.useSetHasActiveVideoOutputSink(streamOutputSinkStack);
                      function se() {
                        const items = [mode.get(), , , ];
                        const value = focused.get();
                        id = undefined;
                        if (value != null) {
                          id = value.id;
                        }
                        items[1] = id;
                        items[2] = isScrollVisible.get();
                        items[3] = streamId;
                        return items;
                      }
                      const obj5 = { mode, focused, isScrollVisible, streamId };
                      se.__closure = obj5;
                      se.__workletHash = 15972889707960;
                      se.__initData = __initData44;
                      function oe(arg0, arg1) {
                        const cheapWorkletArrayShallowEqual = cheapWorkletShallowEqual2.cheapWorkletArrayShallowEqual;
                        cheapWorkletShallowEqual2;
                        const tmp = arg1;
                        if (!cheapWorkletArrayShallowEqual(arg0, tmp)) {
                          const tmp6 = _slicedToArray(arg0, 4);
                          if (null != tmp6[3]) {
                            ReanimatedRexport2;
                            if (typeof shouldMakeActive === "function") {
                              let tmp17 = !tmp9;
                              if (tmp6[2]) {
                                tmp17 = tmp7 === VoicePanelModes.PIP;
                              }
                              if (!tmp17) {
                                tmp17 = null != tmp6[1] && tmp6[1] !== tmp15;
                              }
                              tmp13(tmp6[3], !tmp17);
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                        }
                      }
                      const obj6 = { cheapWorkletArrayShallowEqual: tmp(sharedCoords[15]).cheapWorkletArrayShallowEqual, runOnJS: tmp(sharedCoords[8]).runOnJS, setHasActiveVideoOutputSink, shouldMakeActive, id };
                      const useAnimatedReaction = tmp(sharedCoords[8]).useAnimatedReaction;
                      tmp(sharedCoords[8]);
                      oe.__closure = obj6;
                      oe.__workletHash = 10807132099258;
                      oe.__initData = __initData45;
                      const animatedReaction = useAnimatedReaction(se, oe);
                      if (cResult[19] === sharedValue) {
                        if (cResult[20] === id) {
                          if (cResult[21] === layoutManager) {
                            let tmp32;
                            if (cResult[22] === sharedValue1) {
                              tmp32 = cResult[23];
                            }
                            function le() {
                              let size1;
                              const value = focused.get();
                              id = undefined;
                              if (value != null) {
                                id = value.id;
                              }
                              if (id === id) {
                                size = { width: windowDimensions.get().width, height: windowDimensions.get().height };
                                size1 = size;
                              } else {
                                size1 = { width: sharedCoords.get().width, height: sharedCoords.get().height };
                              }
                              return size1;
                            }
                            const obj7 = { focused, id, windowDimensions, sharedCoords };
                            le.__closure = obj7;
                            le.__workletHash = 15997864116305;
                            le.__initData = __initData46;
                            const tmpResult18 = tmp(sharedCoords[8]);
                            const derivedValue = tmpResult18.useDerivedValue(le);
                            if (cResult[24] === derivedValue) {
                              if (cResult[25] === sharedValue) {
                                if (cResult[26] === focused) {
                                  if (cResult[27] === id) {
                                    if (cResult[28] === isCamera) {
                                      if (cResult[29] === tmp19) {
                                        if (cResult[30] === mode) {
                                          let tmp35;
                                          if (cResult[31] === sharedValue1) {
                                            tmp35 = cResult[32];
                                          }
                                          const tmp37 = closure_93(tmp35);
                                          ({ gesture, scale } = tmp37);
                                          const translateX = tmp37.translateX;
                                          translateY = tmp37.translateY;
                                          const isInSnap = tmp37.isInSnap;
                                          let closure_24 = layout.get();
                                          if (cResult[33] === isCamera) {
                                            if (cResult[34] === mode) {
                                              if (cResult[35] === scale) {
                                                if (cResult[36] === streamId) {
                                                  let tmp39;
                                                  let tmp45;
                                                  if (cResult[37] === sharedValue1) {
                                                    tmp39 = cResult[38];
                                                  }
                                                  let closure_25 = tmp39;
                                                  const tmpResult19 = tmp(sharedCoords[8]);
                                                  class Pe {
                                                    constructor() {
                                                      const items = [scale.get(), sharedValue1.get(), mode.get()];
                                                      return items;
                                                    }
                                                  }
                                                  const obj8 = { scale, videoDimensions: sharedValue1, mode };
                                                  Pe.__closure = obj8;
                                                  Pe.__workletHash = 10603362336898;
                                                  Pe.__initData = __initData47;
                                                  class De {
                                                    constructor(safeAreaState, safeAreaState2) {
                                                      if (null != streamId) {
                                                        const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
                                                        cheapWorkletShallowEqual2;
                                                        const tmp = safeAreaState2;
                                                        if (!cheapWorkletShallowEqual(safeAreaState, tmp)) {
                                                          const tmp2Result = ReanimatedRexport2;
                                                          tmp2Result.runOnJS(closure_25)();
                                                        }
                                                      }
                                                    }
                                                  }
                                                  const useAnimatedReaction2 = tmpResult19.useAnimatedReaction;
                                                  De.__closure = { streamId, cheapWorkletShallowEqual: tmp(sharedCoords[15]).cheapWorkletShallowEqual, runOnJS: tmp(sharedCoords[8]).runOnJS, respondToVideoSizeUpdate: tmp39 };
                                                  De.__workletHash = 11560313728320;
                                                  De.__initData = __initData48;
                                                  const obj9 = { streamId, cheapWorkletShallowEqual: tmp(sharedCoords[15]).cheapWorkletShallowEqual, runOnJS: tmp(sharedCoords[8]).runOnJS, respondToVideoSizeUpdate: tmp39 };
                                                  const animatedReaction2 = useAnimatedReaction2(Pe, De);
                                                  if (cResult[39] !== tmp39) {
                                                    class Ee {
                                                      constructor() {
                                                        const obj = streamId(sharedCoords[25]);
                                                        let closure_0 = obj.addOnPipModeChangedListener((arg0) => {
                                                          const tmp = arg0;
                                                          if (!tmp) {
                                                            closure_1_25();
                                                          }
                                                        });
                                                        return () => {
                                                          if (closure_0 != null) {
                                                            closure_0.remove();
                                                          }
                                                        };
                                                      }
                                                    }
                                                    let items = [tmp39];
                                                    class Pe {
                                                      constructor() {
                                                        const items = [scale.get(), sharedValue1.get(), mode.get()];
                                                        return items;
                                                      }
                                                    }
                                                    cResult[39] = tmp39;
                                                    cResult[40] = Ee;
                                                    cResult[41] = items;
                                                    tmp45 = items;
                                                  } else {
                                                    class Ee {
                                                      constructor() {
                                                        const obj = streamId(sharedCoords[25]);
                                                        let closure_0 = obj.addOnPipModeChangedListener((arg0) => {
                                                          const tmp = arg0;
                                                          if (!tmp) {
                                                            closure_1_25();
                                                          }
                                                        });
                                                        return () => {
                                                          if (closure_0 != null) {
                                                            closure_0.remove();
                                                          }
                                                        };
                                                      }
                                                    }
                                                    tmp45 = cResult[41];
                                                  }
                                                  const effect = obj4.useEffect(Ee, tmp45);
                                                  const tmpResult20 = tmp(sharedCoords[8]);
                                                  class Ce {
                                                    constructor() {
                                                      let height;
                                                      let items;
                                                      let num2;
                                                      let width;
                                                      const value = sharedValue1.get();
                                                      ({ width, height } = value);
                                                      size = pIPState;
                                                      let result3 = height;
                                                      let result1 = width;
                                                      if (pIPState.mode === VoicePanelPIPModes.IN_APP) {
                                                        scale = size.scale;
                                                        const value2 = scale.get();
                                                        if (width > height) {
                                                          const result = width * (size.height * value2 / height);
                                                          result1 = result / scale.get();
                                                          const result2 = size.height * value2;
                                                          result3 = result2 / scale.get();
                                                        } else {
                                                          const result4 = height * (size.width * value2 / width);
                                                          result3 = result4 / scale.get();
                                                          const result5 = size.width * value2;
                                                          result1 = result5 / scale.get();
                                                        }
                                                      }
                                                      const size1 = { width: result1, height: result3, opacity: num2, transform: items };
                                                      let num = 1;
                                                      num2 = 1;
                                                      if (sharedValue.get()) {
                                                        num2 = 0;
                                                      }
                                                      items = [{ scale: scale.get() }, , , ];
                                                      ({ scale: scale.get() });
                                                      items[1] = { translateX: translateX.get() };
                                                      ({ translateX: translateX.get() });
                                                      items[2] = { translateY: translateY.get() };
                                                      ({ translateY: translateY.get() });
                                                      if (closure_6) {
                                                        num = -1;
                                                      }
                                                      items[3] = { scaleX: num };
                                                      return size1;
                                                    }
                                                  }
                                                  const obj10 = { videoDimensions: sharedValue1, pipState: pIPState, VoicePanelPIPModes: focused, scale, disableAnimations: sharedValue, translateX, translateY, mirror: tmp4 };
                                                  Ce.__closure = obj10;
                                                  Ce.__workletHash = 10349344853869;
                                                  Ce.__initData = __initData49;
                                                  const animatedStyle = tmpResult20.useAnimatedStyle(Ce);
                                                  const tmpResult21 = tmp(sharedCoords[26]);
                                                  const token = tmpResult21.useToken(tmp10(sharedCoords[27]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
                                                  const useSharedValue2 = tmp(sharedCoords[8]).useSharedValue;
                                                  let num43 = 0;
                                                  tmp(sharedCoords[8]);
                                                  const tmp52 = VoicePanelModes;
                                                  if (mode.get() !== VoicePanelModes.PIP) {
                                                    class Ee {
                                                      constructor() {
                                                        const obj = streamId(sharedCoords[25]);
                                                        let closure_0 = obj.addOnPipModeChangedListener((arg0) => {
                                                          const tmp = arg0;
                                                          if (!tmp) {
                                                            closure_1_25();
                                                          }
                                                        });
                                                        return () => {
                                                          if (closure_0 != null) {
                                                            closure_0.remove();
                                                          }
                                                        };
                                                      }
                                                    }
                                                    class Pe {
                                                      constructor() {
                                                        const items = [scale.get(), sharedValue1.get(), mode.get()];
                                                        return items;
                                                      }
                                                    }
                                                    num43 = 0;
                                                    if (undefined !== id) {
                                                      class Ee {
                                                        constructor() {
                                                          const obj = streamId(sharedCoords[25]);
                                                          let closure_0 = obj.addOnPipModeChangedListener((arg0) => {
                                                            const tmp = arg0;
                                                            if (!tmp) {
                                                              closure_1_25();
                                                            }
                                                          });
                                                          return () => {
                                                            if (closure_0 != null) {
                                                              closure_0.remove();
                                                            }
                                                          };
                                                        }
                                                      }
                                                    }
                                                  }
                                                  const sharedValue2 = useSharedValue2(num43);
                                                  const tmpResult23 = tmp(sharedCoords[8]);
                                                  class Re {
                                                    constructor() {
                                                      const obj = { inPip: mode.get() === VoicePanelModes.PIP, isFocused: id === id };
                                                      const value = focused.get();
                                                      id = undefined;
                                                      if (value != null) {
                                                        id = value.id;
                                                      }
                                                      return obj;
                                                    }
                                                  }
                                                  const obj11 = { mode, VoicePanelModes: tmp52, focused, id };
                                                  Re.__closure = obj11;
                                                  Re.__workletHash = 5805968536596;
                                                  Re.__initData = __initData50;
                                                  class Oe {
                                                    constructor(inPip, isFocused) {
                                                      const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
                                                      cheapWorkletShallowEqual2;
                                                      const tmp4 = isFocused;
                                                      if (!cheapWorkletShallowEqual(inPip, tmp4)) {
                                                        if (!inPip.inPip) {
                                                          if (!inPip.isFocused) {
                                                            isFocused = undefined;
                                                            if (isFocused != null) {
                                                              isFocused = isFocused.isFocused;
                                                            }
                                                            let num2 = 0.3;
                                                            set = sharedValue2.set;
                                                            if (true === isFocused) {
                                                              const withDelay = ReanimatedRexport2.withDelay;
                                                              ReanimatedRexport2;
                                                              const tmpResult2 = timing;
                                                              num2 = withDelay(300, tmpResult2.withTiming(0.3, { duration: 0 }, "animate-never"));
                                                            }
                                                            const result = set(num2);
                                                          }
                                                        }
                                                        const result1 = sharedValue2.set(0);
                                                      }
                                                    }
                                                  }
                                                  const useAnimatedReaction3 = tmpResult23.useAnimatedReaction;
                                                  Oe.__closure = { cheapWorkletShallowEqual: tmp(sharedCoords[15]).cheapWorkletShallowEqual, strokeOpacity: sharedValue2, withDelay: tmp(sharedCoords[8]).withDelay, withTiming: tmp(sharedCoords[28]).withTiming };
                                                  Oe.__workletHash = 4629535563751;
                                                  Oe.__initData = __initData51;
                                                  const obj12 = { cheapWorkletShallowEqual: tmp(sharedCoords[15]).cheapWorkletShallowEqual, strokeOpacity: sharedValue2, withDelay: tmp(sharedCoords[8]).withDelay, withTiming: tmp(sharedCoords[28]).withTiming };
                                                  const animatedReaction3 = useAnimatedReaction3(Re, Oe);
                                                  function ye() {
                                                    let rect1;
                                                    if (isInSnap.get()) {
                                                      const rect = { position: "absolute", top: 0, left: 0, bottom: 0, right: 0, borderWidth, overflow: "hidden", borderColor: "white", opacity: 0.5 };
                                                      rect1 = rect;
                                                    } else {
                                                      rect1 = { position: "absolute", top: -1, left: -1, bottom: -1, right: -1, borderWidth: 2, borderRadius: token + 2, overflow: "hidden", borderColor: "white", opacity: sharedValue2.get() };
                                                    }
                                                    return rect1;
                                                  }
                                                  const obj13 = { isInSnap, SNAP_EDGE_INNER_THRESHOLD: sharedValue1, borderRadius: token, strokeOpacity: sharedValue2 };
                                                  ye.__closure = obj13;
                                                  ye.__workletHash = 10348859740930;
                                                  ye.__initData = __initData52;
                                                  const tmpResult24 = tmp(sharedCoords[8]);
                                                  const animatedStyle1 = tmpResult24.useAnimatedStyle(ye);
                                                  if (cResult[42] === sharedValue) {
                                                    class Ee {
                                                      constructor() {
                                                        const obj = streamId(sharedCoords[25]);
                                                        let closure_0 = obj.addOnPipModeChangedListener((arg0) => {
                                                          const tmp = arg0;
                                                          if (!tmp) {
                                                            closure_1_25();
                                                          }
                                                        });
                                                        return () => {
                                                          if (closure_0 != null) {
                                                            closure_0.remove();
                                                          }
                                                        };
                                                      }
                                                    }
                                                    if (cResult[45] === style) {
                                                      class Ee {
                                                        constructor() {
                                                          const obj = streamId(sharedCoords[25]);
                                                          let closure_0 = obj.addOnPipModeChangedListener((arg0) => {
                                                            const tmp = arg0;
                                                            if (!tmp) {
                                                              closure_1_25();
                                                            }
                                                          });
                                                          return () => {
                                                            if (closure_0 != null) {
                                                              closure_0.remove();
                                                            }
                                                          };
                                                        }
                                                      }
                                                      if (cResult[48] === animatedStyle) {
                                                        class Ee {
                                                          constructor() {
                                                            const obj = streamId(sharedCoords[25]);
                                                            let closure_0 = obj.addOnPipModeChangedListener((arg0) => {
                                                              const tmp = arg0;
                                                              if (!tmp) {
                                                                closure_1_25();
                                                              }
                                                            });
                                                            return () => {
                                                              if (closure_0 != null) {
                                                                closure_0.remove();
                                                              }
                                                            };
                                                          }
                                                        }
                                                        if (!tmp17) {
                                                          class Ee {
                                                            constructor() {
                                                              const obj = streamId(sharedCoords[25]);
                                                              let closure_0 = obj.addOnPipModeChangedListener((arg0) => {
                                                                const tmp = arg0;
                                                                if (!tmp) {
                                                                  closure_1_25();
                                                                }
                                                              });
                                                              return () => {
                                                                if (closure_0 != null) {
                                                                  closure_0.remove();
                                                                }
                                                              };
                                                            }
                                                          }
                                                        }
                                                        class Pe {
                                                          constructor() {
                                                            const items = [scale.get(), sharedValue1.get(), mode.get()];
                                                            return items;
                                                          }
                                                        }
                                                        class De {
                                                          constructor(safeAreaState, safeAreaState2) {
                                                            if (null != streamId) {
                                                              const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
                                                              cheapWorkletShallowEqual2;
                                                              const tmp = safeAreaState2;
                                                              if (!cheapWorkletShallowEqual(safeAreaState, tmp)) {
                                                                const tmp2Result = ReanimatedRexport2;
                                                                tmp2Result.runOnJS(closure_25)();
                                                              }
                                                            }
                                                          }
                                                        }
                                                        cResult[51] = tmp63;
                                                        cResult[52] = tmp25;
                                                        cResult[53] = tmp32;
                                                        cResult[54] = tmp7.video;
                                                        cResult[55] = null;
                                                        cResult[56] = surfaceDirectRendererExperiment;
                                                        cResult[57] = tmp71;
                                                      }
                                                      const items1 = [, ];
                                                      class Pe {
                                                        constructor() {
                                                          const items = [scale.get(), sharedValue1.get(), mode.get()];
                                                          return items;
                                                        }
                                                      }
                                                      items1[1] = animatedStyle;
                                                      cResult[48] = animatedStyle;
                                                      cResult[49] = tmp7.animatedWrapperStyles;
                                                      cResult[50] = items1;
                                                    }
                                                    const items2 = [, ];
                                                    class Pe {
                                                      constructor() {
                                                        const items = [scale.get(), sharedValue1.get(), mode.get()];
                                                        return items;
                                                      }
                                                    }
                                                    items2[1] = style;
                                                    cResult[45] = style;
                                                    cResult[46] = tmp7.wrapper;
                                                    cResult[47] = items2;
                                                  }
                                                  function xe(arg0) {
                                                    return layout(arg0, sharedValue.get());
                                                  }
                                                  const obj15 = { layout, disableAnimations: sharedValue };
                                                  xe.__closure = obj15;
                                                  xe.__workletHash = 16668734739374;
                                                  xe.__initData = __initData53;
                                                  cResult[42] = sharedValue;
                                                  cResult[43] = layout;
                                                  cResult[44] = xe;
                                                }
                                              }
                                            }
                                          }
                                          function ge() {
                                            const tmp2 = null == streamId || isCamera || mode.get() !== VoicePanelModes.PANEL;
                                            if (!tmp2) {
                                              size = { width: sharedValue1.get().width * closure_24, height: sharedValue1.get().height * closure_24 };
                                              const updateVideoSize = VideoActionCreators.updateVideoSize;
                                              VideoActionCreators;
                                              updateVideoSize(streamId, size, scale.get());
                                            }
                                          }
                                          cResult[33] = isCamera;
                                          cResult[34] = mode;
                                          cResult[35] = scale;
                                          cResult[36] = streamId;
                                          cResult[37] = sharedValue1;
                                          cResult[38] = ge;
                                          tmp39 = ge;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            const obj16 = { id, isCamera, focused, mode, loading: tmp19, containerLayout: derivedValue, videoDimensions: sharedValue1, disableAnimations: sharedValue };
                            cResult[24] = derivedValue;
                            cResult[25] = sharedValue;
                            cResult[27] = id;
                            cResult[28] = isCamera;
                            cResult[29] = tmp19;
                            cResult[30] = mode;
                            cResult[31] = sharedValue1;
                            cResult[32] = obj16;
                            tmp35 = obj16;
                          }
                        }
                      }
                      function ae(nativeEvent) {
                        let height;
                        let width;
                        ({ width, height } = nativeEvent.nativeEvent);
                        updateSharedValueIfChangedDefault(sharedValue1, { width, height });
                        layoutManager.setTargetDimensions(id, width, height);
                        if (sharedValue.get()) {
                          const _setTimeout = setTimeout;
                          const timerId = setTimeout(() => {
                            const result = sharedValue.set(false);
                          }, 34);
                        }
                      }
                      cResult[19] = sharedValue;
                      cResult[20] = id;
                      cResult[21] = layoutManager;
                      cResult[22] = sharedValue1;
                      cResult[23] = ae;
                      tmp32 = ae;
                    }
                  }
                }
                const obj17 = { location: "VideoRenderer", videoSpinnerContext, userId, streamId, loading: tmp19 };
                cResult[12] = tmp19;
                cResult[13] = streamId;
                cResult[14] = userId;
                cResult[15] = videoSpinnerContext;
                cResult[16] = obj17;
                tmp23 = obj17;
              }
            }
          }
        }
      }
      tmp22[0] = streamId;
      tmp22[1] = userId;
      tmp22[2] = tmp19;
      tmp22[3] = videoSpinnerContext;
      tmp22[4] = tmp6;
      tmp22[5] = streamKey;
      let num2 = 5;
      cResult[5] = tmp19;
      cResult[7] = streamId;
      cResult[8] = streamKey;
      cResult[9] = userId;
      cResult[10] = videoSpinnerContext;
      cResult[11] = tmp22;
      tmp21 = tmp22;
    }
  }
  const fn = function b() {
    if (closure_7) {
      setFocused(id);
    }
  };
  cResult[1] = undefined !== focusOnReady && focusOnReady;
  cResult[2] = id;
  cResult[3] = setFocused;
  cResult[4] = fn;
  tmp20 = fn;
}) : ((id) => {
  let _undefined;
  let _undefined2;
  let borderWidth;
  let c10;
  let c16;
  let items5;
  let items6;
  let items7;
  let layoutManager;
  let obj13;
  let obj15;
  let sharedCoords;
  let tmp14;
  let tmp36Result;
  let tmp37;
  let tmp40;
  let tmp41;
  let tmp5Result;
  let userId;
  let videoSpinnerContext;
  id = id.id;
  const streamId = id.streamId;
  ({ userId, videoSpinnerContext, sharedCoords } = id);
  const isScrollVisible = id.isScrollVisible;
  const isCamera = id.isCamera;
  let flag = id.mirror;
  const streamKey = id.streamKey;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = id.focusOnReady;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = id.paused;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const layout = id.layout;
  c10 = undefined;
  layoutManager = undefined;
  c16 = undefined;
  let scale;
  let translateX;
  let translateY;
  let isInSnap;
  let c24;
  let callback2;
  let token;
  let sharedValue2;
  const style = id.style;
  let tmp = translateY();
  let tmp2 = id;
  const tmp3 = sharedCoords;
  let obj = id(sharedCoords[18]);
  const surfaceDirectRendererExperiment = obj.useSurfaceDirectRendererExperiment(userId, { location: "VoicePanelVideoRenderer" });
  const obj2 = isCamera;
  const context = isCamera.useContext(streamId(sharedCoords[13]));
  const mode = context.mode;
  const focused = context.focused;
  ({ setFocused: c10, layoutManager } = context);
  const windowDimensions = context.windowDimensions;
  const streamOutputSinkStack = context.streamOutputSinkStack;
  const obj3 = id(sharedCoords[8]);
  const sharedValue = obj3.useSharedValue(true);
  const useSharedValue = id(sharedCoords[8]).useSharedValue;
  const obj4 = {};
  const tmp8 = id(sharedCoords[8]);
  const merged = Object.assign(layoutManager.getTargetDimensions(id));
  const sharedValue1 = useSharedValue(obj4);
  const obj5 = id(sharedCoords[19]);
  const pIPState = obj5.usePIPState();
  const tmp12 = isCamera && pIPState.id === id && surfaceDirectRendererExperiment;
  const tmp13 = isScrollVisible(obj2.useState(true), 2);
  [tmp14, c16] = tmp13;
  const ref = obj2.useRef(() => {
    if (flag2) {
      _undefined(id);
    }
  });
  const onReady = tmp5(tmp3[20])({ streamId, userId, loading: tmp14, videoSpinnerContext, paused: flag3, streamKey }).onReady;
  const tmp15 = tmp5(tmp3[21])({ location: "VideoRenderer", videoSpinnerContext, userId, streamId, loading: tmp14 });
  let items = [onReady];
  const callback = obj2.useCallback(() => {
    _undefined2(false);
    ref.current();
    onReady();
  }, items);
  let tmp2Result = tmp2(tmp3[22]);
  const setHasActiveVideoOutputSink = tmp2Result.useSetHasActiveVideoOutputSink(streamOutputSinkStack);
  const fn = function j() {
    const items = [mode.get(), , , ];
    const value = focused.get();
    id = undefined;
    if (value != null) {
      id = value.id;
    }
    items[1] = id;
    items[2] = isScrollVisible.get();
    items[3] = streamId;
    return items;
  };
  fn.__closure = { mode, focused, isScrollVisible, streamId };
  fn.__workletHash = 6921221375959;
  fn.__initData = __initData54;
  const fn2 = function q(arg0, arg1) {
    const cheapWorkletArrayShallowEqual = cheapWorkletShallowEqual2.cheapWorkletArrayShallowEqual;
    cheapWorkletShallowEqual2;
    const tmp = arg1;
    if (!cheapWorkletArrayShallowEqual(arg0, tmp)) {
      const tmp6 = _slicedToArray(arg0, 4);
      if (null != tmp6[3]) {
        ReanimatedRexport2;
        if (typeof shouldMakeActive === "function") {
          let tmp17 = !tmp9;
          if (tmp6[2]) {
            tmp17 = tmp7 === VoicePanelModes.PIP;
          }
          if (!tmp17) {
            tmp17 = null != tmp6[1] && tmp6[1] !== tmp15;
          }
          tmp13(tmp6[3], !tmp17);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
  };
  const tmp2Result9 = tmp2(tmp3[8]);
  fn2.__closure = { cheapWorkletArrayShallowEqual: tmp2(tmp3[15]).cheapWorkletArrayShallowEqual, runOnJS: tmp2(tmp3[8]).runOnJS, setHasActiveVideoOutputSink, shouldMakeActive, id };
  fn2.__workletHash = 5671725058965;
  fn2.__initData = __initData55;
  ({ cheapWorkletArrayShallowEqual: tmp2(tmp3[15]).cheapWorkletArrayShallowEqual, runOnJS: tmp2(tmp3[8]).runOnJS, setHasActiveVideoOutputSink, shouldMakeActive, id });
  const animatedReaction = tmp2Result9.useAnimatedReaction(fn, fn2);
  const items1 = [sharedValue1, layoutManager, id, sharedValue];
  const callback1 = obj2.useCallback((nativeEvent) => {
    let height;
    let width;
    ({ width, height } = nativeEvent.nativeEvent);
    updateSharedValueIfChangedDefault(sharedValue1, { width, height });
    layoutManager.setTargetDimensions(id, width, height);
    if (sharedValue.get()) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const result = sharedValue.set(false);
      }, 34);
    }
  }, items1);
  const tmp2Result10 = tmp2(tmp3[8]);
  class K {
    constructor() {
      let size1;
      const value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      if (id === id) {
        size = { width: windowDimensions.get().width, height: windowDimensions.get().height };
        size1 = size;
      } else {
        size1 = { width: sharedCoords.get().width, height: sharedCoords.get().height };
      }
      return size1;
    }
  }
  K.__closure = { focused, id, windowDimensions, sharedCoords };
  K.__workletHash = 14150057137086;
  K.__initData = __initData56;
  const obj7 = { id, isCamera, focused, mode, loading: tmp14, containerLayout: tmp2Result10.useDerivedValue(K), videoDimensions: sharedValue1, disableAnimations: sharedValue };
  const tmp20 = closure_93(obj7);
  scale = tmp20.scale;
  translateX = tmp20.translateX;
  translateY = tmp20.translateY;
  isInSnap = tmp20.isInSnap;
  const gesture = tmp20.gesture;
  let value = flag.get();
  c24 = value;
  const items2 = [streamId, isCamera, scale, sharedValue1, mode, value];
  callback2 = obj2.useCallback(() => {
    const tmp2 = null == streamId || isCamera || mode.get() !== VoicePanelModes.PANEL;
    if (!tmp2) {
      size = { width: sharedValue1.get().width * c24, height: sharedValue1.get().height * c24 };
      const updateVideoSize = VideoActionCreators.updateVideoSize;
      VideoActionCreators;
      updateVideoSize(streamId, size, scale.get());
    }
  }, items2);
  function ee() {
    const items = [scale.get(), sharedValue1.get(), mode.get()];
    return items;
  }
  ee.__closure = { scale, videoDimensions: sharedValue1, mode };
  ee.__workletHash = 753963003437;
  ee.__initData = __initData57;
  const tmp2Result11 = tmp2(tmp3[8]);
  class Q {
    constructor(safeAreaState, safeAreaState2) {
      if (null != streamId) {
        const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
        cheapWorkletShallowEqual2;
        const tmp = safeAreaState2;
        if (!cheapWorkletShallowEqual(safeAreaState, tmp)) {
          const tmp2Result = ReanimatedRexport2;
          tmp2Result.runOnJS(callback2)();
        }
      }
    }
  }
  Q.__closure = { streamId, cheapWorkletShallowEqual: tmp2(tmp3[15]).cheapWorkletShallowEqual, runOnJS: tmp2(tmp3[8]).runOnJS, respondToVideoSizeUpdate: callback2 };
  Q.__workletHash = 1498075835119;
  Q.__initData = __initData58;
  ({ streamId, cheapWorkletShallowEqual: tmp2(tmp3[15]).cheapWorkletShallowEqual, runOnJS: tmp2(tmp3[8]).runOnJS, respondToVideoSizeUpdate: callback2 });
  const animatedReaction1 = tmp2Result11.useAnimatedReaction(ee, Q);
  const items3 = [callback2];
  const effect = obj2.useEffect(() => {
    const obj = streamId(sharedCoords[25]);
    let closure_0 = obj.addOnPipModeChangedListener((arg0) => {
      const tmp = arg0;
      if (!tmp) {
        callback2();
      }
    });
    return () => {
      if (closure_0 != null) {
        closure_0.remove();
      }
    };
  }, items3);
  function ue() {
    let height;
    let items;
    let num2;
    let width;
    const value = sharedValue1.get();
    ({ width, height } = value);
    size = pIPState;
    let result3 = height;
    let result1 = width;
    if (pIPState.mode === VoicePanelPIPModes.IN_APP) {
      scale = size.scale;
      const value2 = scale.get();
      if (width > height) {
        const result = width * (size.height * value2 / height);
        result1 = result / scale.get();
        const result2 = size.height * value2;
        result3 = result2 / scale.get();
      } else {
        const result4 = height * (size.width * value2 / width);
        result3 = result4 / scale.get();
        const result5 = size.width * value2;
        result1 = result5 / scale.get();
      }
    }
    const size1 = { width: result1, height: result3, opacity: num2, transform: items };
    let num = 1;
    num2 = 1;
    if (sharedValue.get()) {
      num2 = 0;
    }
    items = [{ scale: scale.get() }, , , ];
    ({ scale: scale.get() });
    items[1] = { translateX: translateX.get() };
    ({ translateX: translateX.get() });
    items[2] = { translateY: translateY.get() };
    ({ translateY: translateY.get() });
    if (flag) {
      num = -1;
    }
    items[3] = { scaleX: num };
    return size1;
  }
  const obj9 = { videoDimensions: sharedValue1, pipState: pIPState, VoicePanelPIPModes: focused, scale, disableAnimations: sharedValue, translateX, translateY, mirror: flag };
  ue.__closure = obj9;
  ue.__workletHash = 2610370642882;
  ue.__initData = __initData59;
  const tmp2Result12 = tmp2(tmp3[8]);
  const animatedStyle = tmp2Result12.useAnimatedStyle(ue);
  const tmp2Result13 = tmp2(tmp3[26]);
  token = tmp2Result13.useToken(tmp5(tmp3[27]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  const useSharedValue2 = tmp2(tmp3[8]).useSharedValue;
  let num = 0;
  tmp2(tmp3[8]);
  const tmp28 = flag2;
  if (mode.get() !== flag2.PIP) {
    let value2 = focused.get();
    let id1;
    if (value2 != null) {
      id1 = value2.id;
    }
    num = 0;
    if (id1 !== id) {
      num = 0.3;
    }
  }
  sharedValue2 = useSharedValue2(num);
  function ge() {
    const obj = { inPip: mode.get() === VoicePanelModes.PIP, isFocused: id === id };
    const value = focused.get();
    id = undefined;
    if (value != null) {
      id = value.id;
    }
    return obj;
  }
  ge.__closure = { mode, VoicePanelModes: tmp28, focused, id };
  ge.__workletHash = 11872905555259;
  ge.__initData = __initData60;
  function he(inPip, isFocused) {
    const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
    cheapWorkletShallowEqual2;
    const tmp4 = isFocused;
    if (!cheapWorkletShallowEqual(inPip, tmp4)) {
      if (!inPip.inPip) {
        if (!inPip.isFocused) {
          isFocused = undefined;
          if (isFocused != null) {
            isFocused = isFocused.isFocused;
          }
          let num2 = 0.3;
          set = sharedValue2.set;
          if (true === isFocused) {
            const withDelay = ReanimatedRexport2.withDelay;
            ReanimatedRexport2;
            const tmpResult2 = timing;
            num2 = withDelay(300, tmpResult2.withTiming(0.3, { duration: 0 }, "animate-never"));
          }
          const result = set(num2);
        }
      }
      const result1 = sharedValue2.set(0);
    }
  }
  const tmp2Result15 = tmp2(tmp3[8]);
  he.__closure = { cheapWorkletShallowEqual: tmp2(tmp3[15]).cheapWorkletShallowEqual, strokeOpacity: sharedValue2, withDelay: tmp2(tmp3[8]).withDelay, withTiming: tmp2(tmp3[28]).withTiming };
  he.__workletHash = 14939151435744;
  he.__initData = __initData61;
  ({ cheapWorkletShallowEqual: tmp2(tmp3[15]).cheapWorkletShallowEqual, strokeOpacity: sharedValue2, withDelay: tmp2(tmp3[8]).withDelay, withTiming: tmp2(tmp3[28]).withTiming });
  const animatedReaction2 = tmp2Result15.useAnimatedReaction(ge, he);
  function me() {
    let rect1;
    if (isInSnap.get()) {
      const rect = { position: "absolute", top: 0, left: 0, bottom: 0, right: 0, borderWidth, overflow: "hidden", borderColor: "white", opacity: 0.5 };
      rect1 = rect;
    } else {
      rect1 = { position: "absolute", top: -1, left: -1, bottom: -1, right: -1, borderWidth: 2, borderRadius: token + 2, overflow: "hidden", borderColor: "white", opacity: sharedValue2.get() };
    }
    return rect1;
  }
  const obj11 = { isInSnap, SNAP_EDGE_INNER_THRESHOLD: sharedValue1, borderRadius: token, strokeOpacity: sharedValue2 };
  me.__closure = obj11;
  me.__workletHash = 1426249196963;
  me.__initData = __initData62;
  function pe(arg0) {
    return layout(arg0, sharedValue.get());
  }
  pe.__closure = { layout, disableAnimations: sharedValue };
  pe.__workletHash = 15409047754511;
  pe.__initData = __initData63;
  const items4 = [layout, sharedValue];
  const tmp2Result16 = tmp2(tmp3[8]);
  const animatedStyle1 = tmp2Result16.useAnimatedStyle(me);
  const callback3 = obj2.useCallback(pe, items4);
  const obj12 = { gesture, children: tmp37(tmp5Result, obj13) };
  const GestureDetector = tmp2(tmp3[17]).GestureDetector;
  obj13 = { style: items5, layout: callback3, children: items7 };
  items5 = [tmp.wrapper, style];
  const obj14 = { style: items6, layout: callback3, children: layoutManager(tmp40, obj15) };
  items6 = [tmp.animatedWrapperStyles, animatedStyle];
  obj15 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId: tmp41, onReady: callback, onSize: callback1, style: tmp.video, layout: callback3 };
  tmp41 = null;
  tmp5Result = streamId(tmp3[29]);
  tmp37 = windowDimensions;
  tmp40 = scale;
  const tmp5Result2 = streamId(tmp3[29]);
  if (!tmp12) {
    tmp41 = streamId;
  }
  items7 = [layoutManager(tmp5Result2, obj14), ];
  if (tmp14) {
    const obj16 = { animate: true, style: tmp.spinner };
    tmp36Result = tmp36(tmp5(tmp3[30]), obj16);
  } else {
    const obj17 = { style: animatedStyle1, layout: callback3, pointerEvents: "none" };
    tmp36Result = tmp36(tmp5(tmp3[29]), obj17);
  }
  items7[1] = tmp36Result;
  return layoutManager(GestureDetector, obj12);
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelVideoRenderer.tsx");

export default memoResult;