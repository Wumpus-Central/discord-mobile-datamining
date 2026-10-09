// === Module 17734: VoicePanelVideoRenderer ===

// Module 17734 (VoicePanelVideoRenderer)
import ReanimatedRexport2 from "ReanimatedRexport" /* 4811 */;
import timing from "timing" /* 5092 */;
import spring from "spring" /* 5375 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6333 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 9550 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 10339 */;
import DCDVideoRendererDefault from "DCDVideoRenderer" /* 10861 */;
import VideoActionCreators from "VideoActionCreators" /* 17619 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
const PixelRatio = fn(17).PixelRatio;
const VoicePanelConstants = fn(11926);
let VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
const VoicePanelControlsModes = fn(11924).VoicePanelControlsModes;
const VoicePanelPIPModes = fn(17668).VoicePanelPIPModes;
const SCALE_PHYSICS = fn(11927).SCALE_PHYSICS;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
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
const createStyles = fn(5091);
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
let ReactCompilerGating = fn(558);
let closure_93 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGestures(id) {
  const cResult = id(focused[12]).c(120);
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
  let obj = id(focused[12]);
  const sharedValue = id(focused[8]).useSharedValue(1);
  let obj2 = id(focused[8]);
  const sharedValue1 = id(focused[8]).useSharedValue(0);
  let obj3 = id(focused[8]);
  const sharedValue2 = id(focused[8]).useSharedValue(0);
  let obj4 = id(focused[8]);
  const sharedValue3 = id(focused[8]).useSharedValue(0);
  const obj5 = id(focused[8]);
  const sharedValue4 = id(focused[8]).useSharedValue(false);
  const obj6 = id(focused[8]);
  const sharedValue5 = id(focused[8]).useSharedValue(0);
  const obj7 = id(focused[8]);
  const sharedValue6 = id(focused[8]).useSharedValue(false);
  const obj8 = id(focused[8]);
  const sharedValue7 = id(focused[8]).useSharedValue(null);
  const obj9 = id(focused[8]);
  const fn = function n() {
    const result = containerLayout.get().width / videoDimensions.get().width;
    return Math.max(result, containerLayout.get().height / videoDimensions.get().height);
  };
  fn.__closure = { containerLayout, videoDimensions };
  fn.__workletHash = 4177496646282;
  fn.__initData = derivedValue2;
  const derivedValue = id(focused[8]).useDerivedValue(fn);
  const obj10 = id(focused[8]);
  const fn2 = function o() {
    const result = containerLayout.get().width / videoDimensions.get().width;
    return Math.min(result, containerLayout.get().height / videoDimensions.get().height);
  };
  fn2.__closure = { containerLayout, videoDimensions };
  fn2.__workletHash = 5260375952053;
  fn2.__initData = __initData;
  const derivedValue1 = id(focused[8]).useDerivedValue(fn2);
  const obj11 = id(focused[8]);
  const fn3 = function s() {
    let tmp = 0 === sharedValue1.get();
    if (tmp) {
      tmp = 0 === sharedValue2.get();
    }
    if (tmp) {
      value = sharedValue.get();
      let tmp5 = value === derivedValue1.get();
      if (!tmp5) {
        value2 = sharedValue.get();
        tmp5 = value2 === derivedValue.get();
      }
      tmp = tmp5;
    }
    return tmp;
  };
  fn3.__closure = { translateX: sharedValue1, translateY: sharedValue2, scale: sharedValue, fitScale: derivedValue1, coverScale: derivedValue };
  fn3.__workletHash = 15099362638406;
  fn3.__initData = __initData2;
  derivedValue2 = id(focused[8]).useDerivedValue(fn3);
  if (cResult[0] === derivedValue) {
    if (cResult[1] === sharedValue7) {
      if (cResult[2] === disableAnimations) {
        if (cResult[3] === derivedValue1) {
          if (cResult[4] === sharedValue) {
            if (cResult[5] === sharedValue1) {
              if (cResult[6] === sharedValue2) {
                let tmp17 = cResult[7];
              }
              __initData = tmp17;
              if (cResult[8] === focused) {
                if (cResult[9] === id) {
                  if (cResult[10] === isCamera) {
                    if (cResult[11] === tmp17) {
                      if (cResult[12] === videoDimensions) {
                        if (cResult[13] === windowDimensions) {
                          let tmp18 = cResult[14];
                        }
                        __initData2 = tmp18;
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
                          constructor(arg0, arg1) {
                            obj = closure_0(closure_2[15]);
                            tmp = arg1;
                            if (!obj.cheapWorkletShallowEqual(id, tmp)) {
                              tmp2 = focused;
                              value = focused.get();
                              id = undefined;
                              if (value != null) {
                                id = value.id;
                              }
                              tmp5 = id;
                              tmp6 = id === id && id !== arg1 && null != arg1;
                              if (tmp6) {
                                tmp7 = closure_25;
                                tmp8 = closure_25();
                              }
                            }
                            return;
                          }
                        }
                        const obj14 = { cheapWorkletShallowEqual: tmp(tmp2[15]).cheapWorkletShallowEqual, focused, id, resetOnLayoutChange: tmp18 };
                        Ne.__closure = obj14;
                        Ne.__workletHash = 10369496881912;
                        Ne.__initData = __initData6;
                        const animatedReaction = tmp(tmp2[8]).useAnimatedReaction(Ye, Ne);
                        if (cResult[15] === containerLayout) {
                          if (cResult[16] === derivedValue) {
                            if (cResult[17] === derivedValue1) {
                              if (cResult[18] === sharedValue) {
                                if (cResult[19] === sharedValue1) {
                                  if (cResult[20] === sharedValue2) {
                                    if (cResult[21] === videoDimensions) {
                                      let tmp24 = cResult[22];
                                    }
                                    __initData3 = tmp24;
                                    if (cResult[23] === containerLayout) {
                                      if (cResult[24] === derivedValue1) {
                                        if (cResult[25] === sharedValue4) {
                                          if (cResult[26] === sharedValue3) {
                                            if (cResult[27] === tmp17) {
                                              if (cResult[28] === sharedValue) {
                                                if (cResult[29] === sharedValue1) {
                                                  if (cResult[30] === sharedValue2) {
                                                    if (cResult[31] === videoDimensions) {
                                                      let tmp30 = cResult[32];
                                                    }
                                                    __initData4 = tmp30;
                                                    class We {
                                                      constructor() {
                                                        value = focused.get();
                                                        id = undefined;
                                                        if (value != null) {
                                                          id = value.id;
                                                        }
                                                        tmp3 = id === id;
                                                        if (tmp3) {
                                                          tmp4 = closure_23;
                                                          value1 = closure_23.get();
                                                          value2 = !value1;
                                                          if (value1) {
                                                            tmp7 = closure_19;
                                                            value2 = closure_19.get();
                                                          }
                                                          tmp3 = value2;
                                                        }
                                                        return tmp3;
                                                      }
                                                    }
                                                    const obj15 = { focused, id, isInDefaultZoom: derivedValue2, isInPanToZoom: sharedValue6 };
                                                    We.__closure = obj15;
                                                    class Ne {
                                                      constructor(arg0, arg1) {
                                                        obj = closure_0(closure_2[15]);
                                                        tmp = arg1;
                                                        if (!obj.cheapWorkletShallowEqual(id, tmp)) {
                                                          tmp2 = focused;
                                                          value = focused.get();
                                                          id = undefined;
                                                          if (value != null) {
                                                            id = value.id;
                                                          }
                                                          tmp5 = id;
                                                          tmp6 = id === id && id !== arg1 && null != arg1;
                                                          if (tmp6) {
                                                            tmp7 = closure_25;
                                                            tmp8 = closure_25();
                                                          }
                                                        }
                                                        return;
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
                                                    const animatedReaction1 = tmp(tmp2[8]).useAnimatedReaction(We, $e);
                                                    const tmpResult7 = tmp(tmp2[8]);
                                                    function qe() {
                                                      value = focused.get();
                                                      id = undefined;
                                                      if (value != null) {
                                                        id = value.id;
                                                      }
                                                      return id === id;
                                                    }
                                                    class Ge {
                                                      constructor() {
                                                        value = closure_21.get();
                                                        if (value < closure_22.get() + c16) {
                                                          flag2 = false;
                                                          return false;
                                                        } else {
                                                          tmp14 = closure_14;
                                                          obj = closure_13;
                                                          value1 = closure_14.get();
                                                          result = value1 * closure_13.get();
                                                          tmp17 = closure_15;
                                                          value2 = closure_15.get();
                                                          result1 = value2 * closure_13.get();
                                                          num = -50;
                                                          if (result >= -50) {
                                                            if (result <= c13) {
                                                              if (result1 >= -50) {
                                                                if (result1 <= c13) {
                                                                  obj2 = containerLayout;
                                                                  tmp20 = videoDimensions;
                                                                  num2 = 2;
                                                                  sum = result + (containerLayout.get().width - videoDimensions.get().width * obj.get()) / 2;
                                                                  sum1 = result1 + (containerLayout.get().height - videoDimensions.get().height * obj.get()) / 2;
                                                                  result2 = videoDimensions.get().width * obj.get();
                                                                  result3 = videoDimensions.get().height * obj.get();
                                                                  tmp2 = result3 >= containerLayout.get().height && sum >= -50;
                                                                  if (tmp2) {
                                                                    tmp3 = c14;
                                                                    tmp2 = sum <= c14;
                                                                  }
                                                                  if (tmp2) {
                                                                    sum2 = sum + result2;
                                                                    tmp5 = c14;
                                                                    tmp2 = sum2 >= obj2.get().width - c14;
                                                                  }
                                                                  if (tmp2) {
                                                                    sum3 = sum + result2;
                                                                    tmp7 = c15;
                                                                    tmp2 = sum3 <= obj2.get().width + c15;
                                                                  }
                                                                  if (!tmp2) {
                                                                    tmp8 = result2 >= obj2.get().width && sum1 >= -50;
                                                                    if (tmp8) {
                                                                      tmp9 = c14;
                                                                      tmp8 = sum1 <= c14;
                                                                    }
                                                                    if (tmp8) {
                                                                      sum4 = sum1 + result3;
                                                                      tmp11 = c14;
                                                                      tmp8 = sum4 >= obj2.get().height - c14;
                                                                    }
                                                                    if (tmp8) {
                                                                      sum5 = sum1 + result3;
                                                                      tmp13 = c15;
                                                                      tmp8 = sum5 <= obj2.get().height + c15;
                                                                    }
                                                                    tmp2 = tmp8;
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
                                                    tmp37[0] = focused;
                                                    tmp37[1] = id;
                                                    qe.__closure = tmp37;
                                                    qe.__workletHash = 619124678280;
                                                    qe.__initData = __initData11;
                                                    class Je {
                                                      constructor(arg0, arg1) {
                                                        if (id !== arg1) {
                                                          tmp = closure_25;
                                                          tmp2 = closure_25();
                                                        }
                                                        return;
                                                      }
                                                    }
                                                    const obj17 = { resetOnLayoutChange: tmp18 };
                                                    Je.__closure = obj17;
                                                    Je.__workletHash = 1219671257658;
                                                    Je.__initData = __initData12;
                                                    const animatedReaction2 = tmp(tmp2[8]).useAnimatedReaction(qe, Je);
                                                    const tmpResult8 = tmp(tmp2[8]);
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
                                                    const obj19 = { resetOnLayoutChange: tmp18 };
                                                    je.__closure = obj19;
                                                    je.__workletHash = 98679633688;
                                                    je.__initData = __initData14;
                                                    const animatedReaction3 = tmp(tmp2[8]).useAnimatedReaction(Ue, je);
                                                    const tmpResult9 = tmp(tmp2[8]);
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
                                                      constructor(arg0, arg1) {
                                                        if (null != closure_20) {
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
                                                            tmp6 = closure_25;
                                                            tmp7 = closure_25();
                                                          }
                                                        }
                                                        return;
                                                      }
                                                    }
                                                    const obj21 = { currentSizeThreshold: sharedValue7, resetOnLayoutChange: tmp18 };
                                                    Be.__closure = obj21;
                                                    Be.__workletHash = 2426437907266;
                                                    Be.__initData = __initData16;
                                                    const animatedReaction4 = tmp(tmp2[8]).useAnimatedReaction(Ke, Be);
                                                    const tmpResult10 = tmp(tmp2[8]);
                                                    function et() {
                                                      return derivedValue.get();
                                                    }
                                                    const obj22 = { coverScale: derivedValue };
                                                    et.__closure = obj22;
                                                    et.__workletHash = 5444376625069;
                                                    et.__initData = __initData17;
                                                    class Qe {
                                                      constructor(arg0, arg1) {
                                                        value = closure_20.get();
                                                        tmp2 = "cover" === value;
                                                        if (tmp2) {
                                                          tmp3 = id;
                                                          tmp4 = arg1;
                                                          tmp2 = id !== arg1;
                                                        }
                                                        if (tmp2) {
                                                          tmp5 = closure_24;
                                                          tmp6 = closure_24(value);
                                                        }
                                                        return;
                                                      }
                                                    }
                                                    const obj23 = { currentSizeThreshold: sharedValue7, resetToDefaultSize: tmp17 };
                                                    Qe.__closure = obj23;
                                                    Qe.__workletHash = 10517599185370;
                                                    Qe.__initData = __initData18;
                                                    const animatedReaction5 = tmp(tmp2[8]).useAnimatedReaction(et, Qe);
                                                    const tmpResult11 = tmp(tmp2[8]);
                                                    function nt() {
                                                      return sharedValue4.get();
                                                    }
                                                    const obj24 = { isInSnap: sharedValue4 };
                                                    nt.__closure = obj24;
                                                    nt.__workletHash = 2178206594630;
                                                    nt.__initData = __initData19;
                                                    function tt(arg0, arg1) {
                                                      if (tmp) {
                                                        const obj = id(focused[8]);
                                                        id(focused[8]).runOnJS(id(focused[16]).triggerHapticFeedback)(id(focused[16]).HapticFeedbackTypes.IMPACT_LIGHT);
                                                        const runOnJSResult = id(focused[8]).runOnJS(id(focused[16]).triggerHapticFeedback);
                                                      }
                                                      tmp = arg0 !== arg1 && arg0;
                                                    }
                                                    const obj25 = { runOnJS: tmp(tmp2[8]).runOnJS, triggerHapticFeedback: tmp(tmp2[16]).triggerHapticFeedback, HapticFeedbackTypes: tmp(tmp2[16]).HapticFeedbackTypes };
                                                    tt.__closure = obj25;
                                                    tt.__workletHash = 1257419227821;
                                                    tt.__initData = __initData20;
                                                    const animatedReaction6 = tmp(tmp2[8]).useAnimatedReaction(nt, tt);
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
                                                                                    if (cResult[49] === tmp18) {
                                                                                      if (cResult[50] === sharedValue) {
                                                                                        if (cResult[51] === setFocused) {
                                                                                          if (cResult[52] === showControls) {
                                                                                            if (cResult[53] === sharedValue1) {
                                                                                              if (cResult[54] === sharedValue2) {
                                                                                                if (cResult[113] === cResult[55]) {
                                                                                                  if (cResult[114] === sharedValue4) {
                                                                                                    if (cResult[115] === sharedValue3) {
                                                                                                      if (cResult[116] === sharedValue) {
                                                                                                        if (cResult[117] === sharedValue1) {
                                                                                                          if (cResult[118] === sharedValue2) {
                                                                                                            let tmp59 = cResult[119];
                                                                                                          }
                                                                                                          return tmp59;
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                                const obj26 = { gesture: null, scale: null, translateX: null, translateY: null, numGesturesActive: null, isInSnap: null };
                                                                                                class We {
                                                                                                  constructor() {
                                                                                                    value = focused.get();
                                                                                                    id = undefined;
                                                                                                    if (value != null) {
                                                                                                      id = value.id;
                                                                                                    }
                                                                                                    tmp3 = id === id;
                                                                                                    if (tmp3) {
                                                                                                      tmp4 = closure_23;
                                                                                                      value1 = closure_23.get();
                                                                                                      value2 = !value1;
                                                                                                      if (value1) {
                                                                                                        tmp7 = closure_19;
                                                                                                        value2 = closure_19.get();
                                                                                                      }
                                                                                                      tmp3 = value2;
                                                                                                    }
                                                                                                    return tmp3;
                                                                                                  }
                                                                                                }
                                                                                                obj26.scale = sharedValue;
                                                                                                obj26.translateX = sharedValue1;
                                                                                                obj26.translateY = sharedValue2;
                                                                                                obj26.numGesturesActive = sharedValue3;
                                                                                                obj26.isInSnap = sharedValue4;
                                                                                                cResult[113] = cResult[55];
                                                                                                class Ne {
                                                                                                  constructor(arg0, arg1) {
                                                                                                    obj = closure_0(closure_2[15]);
                                                                                                    tmp = arg1;
                                                                                                    if (!obj.cheapWorkletShallowEqual(id, tmp)) {
                                                                                                      tmp2 = focused;
                                                                                                      value = focused.get();
                                                                                                      id = undefined;
                                                                                                      if (value != null) {
                                                                                                        id = value.id;
                                                                                                      }
                                                                                                      tmp5 = id;
                                                                                                      tmp6 = id === id && id !== arg1 && null != arg1;
                                                                                                      if (tmp6) {
                                                                                                        tmp7 = closure_25;
                                                                                                        tmp8 = closure_25();
                                                                                                      }
                                                                                                    }
                                                                                                    return;
                                                                                                  }
                                                                                                }
                                                                                                cResult[114] = sharedValue4;
                                                                                                cResult[115] = sharedValue3;
                                                                                                cResult[116] = sharedValue;
                                                                                                cResult[117] = sharedValue1;
                                                                                                cResult[118] = sharedValue2;
                                                                                                cResult[119] = obj26;
                                                                                                tmp59 = obj26;
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
                                                    }
                                                    const _Symbol = Symbol;
                                                    if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
                                                      class VoicePanelVideoRendererTsx24 {
                                                        constructor(arg0, arg1) {
                                                          return arg1.fail();
                                                        }
                                                      }
                                                      VoicePanelVideoRendererTsx24.__closure = {};
                                                      class We {
                                                        constructor() {
                                                          value = focused.get();
                                                          id = undefined;
                                                          if (value != null) {
                                                            id = value.id;
                                                          }
                                                          tmp3 = id === id;
                                                          if (tmp3) {
                                                            tmp4 = closure_23;
                                                            value1 = closure_23.get();
                                                            value2 = !value1;
                                                            if (value1) {
                                                              tmp7 = closure_19;
                                                              value2 = closure_19.get();
                                                            }
                                                            tmp3 = value2;
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
                                                    const obj27 = { isInDefaultZoom: derivedValue2, resetOnLayoutChange: tmp18, focused, id, runOnJS: tmp(tmp2[8]).runOnJS, setFocused };
                                                    VoicePanelVideoRendererTsx23.__closure = obj27;
                                                    VoicePanelVideoRendererTsx23.__workletHash = 10743965328356;
                                                    VoicePanelVideoRendererTsx23.__initData = __initData21;
                                                    cResult[57] = focused;
                                                    cResult[58] = id;
                                                    cResult[59] = derivedValue2;
                                                    cResult[60] = tmp18;
                                                    cResult[61] = setFocused;
                                                    cResult[62] = VoicePanelVideoRendererTsx23;
                                                    const tmpResult12 = tmp(tmp2[8]);
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
                                    const obj28 = { numGesturesActive: sharedValue3, isInSnap: sharedValue4, resetToDefaultSize: tmp17, scale: sharedValue, fitScale: derivedValue1, videoDimensions, containerLayout: null, translateX: null, withSpring: null, SCALE_PHYSICS: null, translateY: null };
                                    class Ne {
                                      constructor(arg0, arg1) {
                                        obj = closure_0(closure_2[15]);
                                        tmp = arg1;
                                        if (!obj.cheapWorkletShallowEqual(id, tmp)) {
                                          tmp2 = focused;
                                          value = focused.get();
                                          id = undefined;
                                          if (value != null) {
                                            id = value.id;
                                          }
                                          tmp5 = id;
                                          tmp6 = id === id && id !== arg1 && null != arg1;
                                          if (tmp6) {
                                            tmp7 = closure_25;
                                            tmp8 = closure_25();
                                          }
                                        }
                                        return;
                                      }
                                    }
                                    obj28.translateX = sharedValue1;
                                    obj28.withSpring = tmp(tmp2[14]).withSpring;
                                    obj28.SCALE_PHYSICS = hideControls;
                                    obj28.translateY = sharedValue2;
                                    tmp31.__closure = obj28;
                                    tmp31.__workletHash = 15797844425755;
                                    tmp31.__initData = __initData8;
                                    cResult[23] = containerLayout;
                                    class Ge {
                                      constructor() {
                                        value = closure_21.get();
                                        if (value < closure_22.get() + c16) {
                                          flag2 = false;
                                          return false;
                                        } else {
                                          tmp14 = closure_14;
                                          obj = closure_13;
                                          value1 = closure_14.get();
                                          result = value1 * closure_13.get();
                                          tmp17 = closure_15;
                                          value2 = closure_15.get();
                                          result1 = value2 * closure_13.get();
                                          num = -50;
                                          if (result >= -50) {
                                            if (result <= c13) {
                                              if (result1 >= -50) {
                                                if (result1 <= c13) {
                                                  obj2 = containerLayout;
                                                  tmp20 = videoDimensions;
                                                  num2 = 2;
                                                  sum = result + (containerLayout.get().width - videoDimensions.get().width * obj.get()) / 2;
                                                  sum1 = result1 + (containerLayout.get().height - videoDimensions.get().height * obj.get()) / 2;
                                                  result2 = videoDimensions.get().width * obj.get();
                                                  result3 = videoDimensions.get().height * obj.get();
                                                  tmp2 = result3 >= containerLayout.get().height && sum >= -50;
                                                  if (tmp2) {
                                                    tmp3 = c14;
                                                    tmp2 = sum <= c14;
                                                  }
                                                  if (tmp2) {
                                                    sum2 = sum + result2;
                                                    tmp5 = c14;
                                                    tmp2 = sum2 >= obj2.get().width - c14;
                                                  }
                                                  if (tmp2) {
                                                    sum3 = sum + result2;
                                                    tmp7 = c15;
                                                    tmp2 = sum3 <= obj2.get().width + c15;
                                                  }
                                                  if (!tmp2) {
                                                    tmp8 = result2 >= obj2.get().width && sum1 >= -50;
                                                    if (tmp8) {
                                                      tmp9 = c14;
                                                      tmp8 = sum1 <= c14;
                                                    }
                                                    if (tmp8) {
                                                      sum4 = sum1 + result3;
                                                      tmp11 = c14;
                                                      tmp8 = sum4 >= obj2.get().height - c14;
                                                    }
                                                    if (tmp8) {
                                                      sum5 = sum1 + result3;
                                                      tmp13 = c15;
                                                      tmp8 = sum5 <= obj2.get().height + c15;
                                                    }
                                                    tmp2 = tmp8;
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
                                    cResult[25] = sharedValue4;
                                    cResult[26] = sharedValue3;
                                    cResult[27] = tmp17;
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
                        class Ge {
                          constructor() {
                            value = closure_21.get();
                            if (value < closure_22.get() + c16) {
                              flag2 = false;
                              return false;
                            } else {
                              tmp14 = closure_14;
                              obj = closure_13;
                              value1 = closure_14.get();
                              result = value1 * closure_13.get();
                              tmp17 = closure_15;
                              value2 = closure_15.get();
                              result1 = value2 * closure_13.get();
                              num = -50;
                              if (result >= -50) {
                                if (result <= c13) {
                                  if (result1 >= -50) {
                                    if (result1 <= c13) {
                                      obj2 = containerLayout;
                                      tmp20 = videoDimensions;
                                      num2 = 2;
                                      sum = result + (containerLayout.get().width - videoDimensions.get().width * obj.get()) / 2;
                                      sum1 = result1 + (containerLayout.get().height - videoDimensions.get().height * obj.get()) / 2;
                                      result2 = videoDimensions.get().width * obj.get();
                                      result3 = videoDimensions.get().height * obj.get();
                                      tmp2 = result3 >= containerLayout.get().height && sum >= -50;
                                      if (tmp2) {
                                        tmp3 = c14;
                                        tmp2 = sum <= c14;
                                      }
                                      if (tmp2) {
                                        sum2 = sum + result2;
                                        tmp5 = c14;
                                        tmp2 = sum2 >= obj2.get().width - c14;
                                      }
                                      if (tmp2) {
                                        sum3 = sum + result2;
                                        tmp7 = c15;
                                        tmp2 = sum3 <= obj2.get().width + c15;
                                      }
                                      if (!tmp2) {
                                        tmp8 = result2 >= obj2.get().width && sum1 >= -50;
                                        if (tmp8) {
                                          tmp9 = c14;
                                          tmp8 = sum1 <= c14;
                                        }
                                        if (tmp8) {
                                          sum4 = sum1 + result3;
                                          tmp11 = c14;
                                          tmp8 = sum4 >= obj2.get().height - c14;
                                        }
                                        if (tmp8) {
                                          sum5 = sum1 + result3;
                                          tmp13 = c15;
                                          tmp8 = sum5 <= obj2.get().height + c15;
                                        }
                                        tmp2 = tmp8;
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
                        const obj29 = { coverScale: derivedValue, fitScale: derivedValue1, MIN_ZOOM_FOR_COVER_SNAP_OFFSET: sharedValue3, translateX: sharedValue1, scale: sharedValue, translateY: null, SNAP_CENTER_THRESHOLD: sharedValue, containerLayout, videoDimensions, SNAP_EDGE_OUTER_THRESHOLD: sharedValue2, SNAP_EDGE_INNER_THRESHOLD: sharedValue1 };
                        Ge.__closure = obj29;
                        Ge.__workletHash = 3902544453390;
                        Ge.__initData = __initData7;
                        cResult[15] = containerLayout;
                        cResult[16] = derivedValue;
                        cResult[17] = derivedValue1;
                        cResult[18] = sharedValue;
                        cResult[19] = sharedValue1;
                        cResult[20] = sharedValue2;
                        cResult[21] = videoDimensions;
                        cResult[22] = Ge;
                        tmp24 = Ge;
                        const tmpResult = tmp(tmp2[8]);
                      }
                    }
                  }
                }
              }
              const obj30 = { focused, id, videoDimensions, windowDimensions, isCamera, resetToDefaultSize: tmp17 };
              tmp19.__workletHash = 7067658532529;
              tmp19.__initData = __initData4;
              cResult[8] = focused;
              cResult[9] = id;
              cResult[10] = isCamera;
              cResult[11] = tmp17;
              cResult[13] = windowDimensions;
              cResult[14] = tmp19;
              tmp18 = tmp19;
            }
          }
        }
      }
    }
  }
  const fn4 = function h(arg0) {
    if ("fit" === arg0) {
      value = derivedValue1.get();
      let str2 = "respect-motion-settings";
      if (disableAnimations.get()) {
        str2 = "animate-never";
      }
      const result = sharedValue.set(spring.withSpring(value, MODE_CHANGE_PHYSICS, str2));
    } else {
      value2 = derivedValue.get();
      let str = "respect-motion-settings";
      if (disableAnimations.get()) {
        str = "animate-never";
      }
      const result1 = sharedValue.set(spring.withSpring(value2, MODE_CHANGE_PHYSICS, str));
    }
    const result2 = sharedValue1.set(spring.withSpring(0, SCALE_PHYSICS));
    const result3 = sharedValue2.set(spring.withSpring(0, SCALE_PHYSICS));
    const result4 = sharedValue7.set(arg0);
  };
  const obj12 = id(focused[8]);
  fn4.__closure = { scale: sharedValue, withSpring: id(focused[14]).withSpring, fitScale: derivedValue1, MODE_CHANGE_PHYSICS: setIsFocusedVideoZoomed, disableAnimations, coverScale: derivedValue, translateX: sharedValue1, SCALE_PHYSICS: hideControls, translateY: sharedValue2, currentSizeThreshold: sharedValue7 };
  fn4.__workletHash = 1739268382423;
  fn4.__initData = __initData3;
  cResult[1] = sharedValue7;
  cResult[2] = disableAnimations;
  cResult[3] = derivedValue1;
  cResult[4] = sharedValue;
  cResult[5] = sharedValue1;
  cResult[6] = sharedValue2;
  cResult[7] = fn4;
  tmp17 = fn4;
  const obj31 = { scale: sharedValue, withSpring: id(focused[14]).withSpring, fitScale: derivedValue1, MODE_CHANGE_PHYSICS: setIsFocusedVideoZoomed, disableAnimations, coverScale: derivedValue, translateX: sharedValue1, SCALE_PHYSICS: hideControls, translateY: sharedValue2, currentSizeThreshold: sharedValue7 };
}) : (function useGestures(id) {
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
  const sharedValue = id(focused[8]).useSharedValue(1);
  let obj = id(focused[8]);
  const sharedValue1 = id(focused[8]).useSharedValue(0);
  let obj2 = id(focused[8]);
  const sharedValue2 = id(focused[8]).useSharedValue(0);
  let obj3 = id(focused[8]);
  const sharedValue3 = id(focused[8]).useSharedValue(0);
  let obj4 = id(focused[8]);
  const sharedValue4 = id(focused[8]).useSharedValue(false);
  let obj5 = id(focused[8]);
  const sharedValue5 = id(focused[8]).useSharedValue(0);
  let obj6 = id(focused[8]);
  const sharedValue6 = id(focused[8]).useSharedValue(false);
  let obj7 = id(focused[8]);
  const sharedValue7 = id(focused[8]).useSharedValue(null);
  let obj8 = id(focused[8]);
  class V {
    constructor() {
      result = containerLayout.get().width / videoDimensions.get().width;
      return Math.max(result, containerLayout.get().height / videoDimensions.get().height);
    }
  }
  V.__closure = { containerLayout, videoDimensions };
  V.__workletHash = 6691013318908;
  V.__initData = __initData23;
  derivedValue = id(focused[8]).useDerivedValue(V);
  let obj9 = id(focused[8]);
  class I {
    constructor() {
      result = containerLayout.get().width / videoDimensions.get().width;
      return Math.min(result, containerLayout.get().height / videoDimensions.get().height);
    }
  }
  I.__closure = { containerLayout, videoDimensions };
  I.__workletHash = 6011394063789;
  I.__initData = __initData24;
  derivedValue1 = id(focused[8]).useDerivedValue(I);
  const obj10 = id(focused[8]);
  class O {
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
  O.__closure = { translateX: sharedValue1, translateY: sharedValue2, scale: sharedValue, fitScale: derivedValue1, coverScale: derivedValue };
  O.__workletHash = 14821802509624;
  O.__initData = __initData25;
  derivedValue2 = id(focused[8]).useDerivedValue(O);
  class R {
    constructor(arg0) {
      if ("fit" === id) {
        tmp10 = closure_0;
        tmp11 = closure_2;
        tmp9 = closure_15;
        obj2 = closure_0(closure_2[14]);
        tmp12 = closure_24;
        tmp15 = disableAnimations;
        value = closure_24.get();
        tmp14 = MODE_CHANGE_PHYSICS;
        str2 = "respect-motion-settings";
        if (disableAnimations.get()) {
          str2 = "animate-never";
        }
        result = closure_15.set(obj2.withSpring(value, tmp14, str2));
      } else {
        tmp2 = closure_0;
        tmp3 = closure_2;
        tmp = closure_15;
        obj = closure_0(closure_2[14]);
        tmp4 = closure_23;
        tmp7 = disableAnimations;
        value1 = closure_23.get();
        tmp6 = MODE_CHANGE_PHYSICS;
        str = "respect-motion-settings";
        if (disableAnimations.get()) {
          str = "animate-never";
        }
        result1 = closure_15.set(obj.withSpring(value1, tmp6, str));
      }
      obj3 = closure_0(closure_2[14]);
      result2 = closure_16.set(obj3.withSpring(0, SCALE_PHYSICS));
      obj4 = closure_0(closure_2[14]);
      result3 = closure_17.set(obj4.withSpring(0, SCALE_PHYSICS));
      result4 = closure_22.set(id);
      return;
    }
  }
  const obj11 = id(focused[8]);
  R.__closure = { scale: sharedValue, withSpring: id(focused[14]).withSpring, fitScale: derivedValue1, MODE_CHANGE_PHYSICS: disableAnimations, disableAnimations, coverScale: derivedValue, translateX: sharedValue1, SCALE_PHYSICS: dismissToPIPGestureRef, translateY: sharedValue2, currentSizeThreshold: sharedValue7 };
  R.__workletHash = 408535233062;
  R.__initData = __initData26;
  const items = [sharedValue, sharedValue1, sharedValue2, derivedValue, sharedValue7, derivedValue1, disableAnimations];
  resetToDefaultSize = loading.useCallback(R, items);
  class H {
    constructor() {
      value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      str = "cover";
      if (id === id) {
        str = "fit";
      }
      tmp3 = videoDimensions.get().width >= videoDimensions.get().height;
      tmp5 = isCamera;
      tmp4 = windowDimensions.get().width >= windowDimensions.get().height;
      if (isCamera) {
        str2 = "fit";
        tmp5 = "fit" === str;
      }
      if (tmp5) {
        tmp5 = tmp3 === tmp4;
      }
      if (tmp5) {
        str = "cover";
      }
      tmp6 = closure_26(str);
      return;
    }
  }
  H.__closure = { focused, id, videoDimensions, windowDimensions, isCamera, resetToDefaultSize };
  H.__workletHash = 6871308420482;
  H.__initData = __initData27;
  const items1 = [focused, id, isCamera, videoDimensions, windowDimensions, resetToDefaultSize];
  callback1 = loading.useCallback(H, items1);
  const obj12 = { scale: sharedValue, withSpring: id(focused[14]).withSpring, fitScale: derivedValue1, MODE_CHANGE_PHYSICS: disableAnimations, disableAnimations, coverScale: derivedValue, translateX: sharedValue1, SCALE_PHYSICS: dismissToPIPGestureRef, translateY: sharedValue2, currentSizeThreshold: sharedValue7 };
  class L {
    constructor() {
      return containerLayout.get();
    }
  }
  L.__closure = { containerLayout };
  L.__workletHash = 2574402393891;
  L.__initData = __initData28;
  class A {
    constructor(arg0, arg1) {
      obj = closure_0(closure_2[15]);
      tmp = arg1;
      if (!obj.cheapWorkletShallowEqual(id, tmp)) {
        tmp2 = focused;
        value = focused.get();
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        tmp5 = id;
        tmp6 = id === id && id !== arg1 && null != arg1;
        if (tmp6) {
          tmp7 = closure_27;
          tmp8 = closure_27();
        }
      }
      return;
    }
  }
  const obj13 = id(focused[8]);
  A.__closure = { cheapWorkletShallowEqual: id(focused[15]).cheapWorkletShallowEqual, focused, id, resetOnLayoutChange: callback1 };
  A.__workletHash = 5114541603111;
  A.__initData = __initData29;
  const animatedReaction = obj13.useAnimatedReaction(L, A);
  function ee() {
    value = derivedValue.get();
    if (value < derivedValue1.get() + c16) {
      return false;
    } else {
      value3 = sharedValue1.get();
      const result = value3 * sharedValue.get();
      const value4 = sharedValue2.get();
      const result1 = value4 * sharedValue.get();
      if (result >= -50) {
        if (result <= c13) {
          if (result1 >= -50) {
            if (result1 <= c13) {
              const sum = result + (containerLayout.get().width - videoDimensions.get().width * sharedValue.get()) / 2;
              const sum1 = result1 + (containerLayout.get().height - videoDimensions.get().height * sharedValue.get()) / 2;
              const result2 = videoDimensions.get().width * sharedValue.get();
              const result3 = videoDimensions.get().height * sharedValue.get();
              let tmp2 = result3 >= containerLayout.get().height && sum >= -50;
              if (tmp2) {
                tmp2 = sum <= c14;
              }
              if (tmp2) {
                const sum2 = sum + result2;
                tmp2 = sum2 >= containerLayout.get().width - c14;
              }
              if (tmp2) {
                const sum3 = sum + result2;
                tmp2 = sum3 <= containerLayout.get().width + c15;
              }
              if (!tmp2) {
                let tmp8 = result2 >= containerLayout.get().width && sum1 >= -50;
                if (tmp8) {
                  tmp8 = sum1 <= c14;
                }
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
  ee.__closure = { coverScale: derivedValue, fitScale: derivedValue1, MIN_ZOOM_FOR_COVER_SNAP_OFFSET: sharedValue1, translateX: sharedValue1, scale: sharedValue, translateY: sharedValue2, SNAP_CENTER_THRESHOLD: controlsSpecs, containerLayout, videoDimensions, SNAP_EDGE_OUTER_THRESHOLD: sharedValue, SNAP_EDGE_INNER_THRESHOLD: showControls };
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
        value = sharedValue.get();
        if (value < derivedValue1.get()) {
          callback("fit");
        } else {
          const _Math = Math;
          const bound = Math.max(0, (videoDimensions.get().height - containerLayout.get().height / sharedValue.get()) / 2);
          const _Math2 = Math;
          const bound1 = Math.max(0, (videoDimensions.get().width - containerLayout.get().width / sharedValue.get()) / 2);
          const _Math3 = Math;
          const _Math4 = Math;
          const result1 = sharedValue1.set(spring.withSpring(Math.min(bound1, Math.max(-bound1, sharedValue1.get())), SCALE_PHYSICS));
          const tmp16 = -bound1;
          const _Math5 = Math;
          const _Math6 = Math;
          const result2 = sharedValue2.set(spring.withSpring(Math.min(bound, Math.max(-bound, sharedValue2.get())), SCALE_PHYSICS));
          const tmp20 = -bound;
        }
      }
    }
  }
  const obj14 = { cheapWorkletShallowEqual: id(focused[15]).cheapWorkletShallowEqual, focused, id, resetOnLayoutChange: callback1 };
  const obj15 = { coverScale: derivedValue, fitScale: derivedValue1, MIN_ZOOM_FOR_COVER_SNAP_OFFSET: sharedValue1, translateX: sharedValue1, scale: sharedValue, translateY: sharedValue2, SNAP_CENTER_THRESHOLD: controlsSpecs, containerLayout, videoDimensions, SNAP_EDGE_OUTER_THRESHOLD: sharedValue, SNAP_EDGE_INNER_THRESHOLD: showControls };
  te.__closure = { numGesturesActive: sharedValue3, isInSnap: sharedValue4, resetToDefaultSize, scale: sharedValue, fitScale: derivedValue1, videoDimensions, containerLayout, translateX: sharedValue1, withSpring: id(focused[14]).withSpring, SCALE_PHYSICS: dismissToPIPGestureRef, translateY: sharedValue2 };
  te.__workletHash = 4588260677371;
  te.__initData = __initData31;
  const items3 = [derivedValue1, sharedValue3, sharedValue4, sharedValue, videoDimensions, containerLayout, sharedValue1, sharedValue2, resetToDefaultSize];
  callback3 = loading.useCallback(te, items3);
  const obj16 = { numGesturesActive: sharedValue3, isInSnap: sharedValue4, resetToDefaultSize, scale: sharedValue, fitScale: derivedValue1, videoDimensions, containerLayout, translateX: sharedValue1, withSpring: id(focused[14]).withSpring, SCALE_PHYSICS: dismissToPIPGestureRef, translateY: sharedValue2 };
  function ie() {
    value = focused.get();
    id = undefined;
    if (value != null) {
      id = value.id;
    }
    let tmp3 = id === id;
    if (tmp3) {
      value3 = derivedValue2.get();
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
  const animatedReaction1 = id(focused[8]).useAnimatedReaction(ie, ne);
  const obj17 = id(focused[8]);
  function se() {
    value = focused.get();
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
  const animatedReaction2 = id(focused[8]).useAnimatedReaction(se, oe);
  const obj18 = id(focused[8]);
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
  const animatedReaction3 = id(focused[8]).useAnimatedReaction(re, ae);
  const obj19 = id(focused[8]);
  function le() {
    return videoDimensions.get();
  }
  le.__closure = { videoDimensions };
  le.__workletHash = 17347392965986;
  le.__initData = __initData38;
  function ce(width, width2) {
    if (null != sharedValue7) {
      width = undefined;
      if (width2 != null) {
        width = width2.width;
      }
      let tmp4 = width.width === width;
      if (tmp4) {
        let height;
        if (width2 != null) {
          height = width2.height;
        }
        tmp4 = width.height === height;
      }
      if (!tmp4) {
        callback1();
      }
    }
  }
  ce.__closure = { currentSizeThreshold: sharedValue7, resetOnLayoutChange: callback1 };
  ce.__workletHash = 235100464909;
  ce.__initData = __initData39;
  const animatedReaction4 = id(focused[8]).useAnimatedReaction(le, ce);
  const obj20 = id(focused[8]);
  class Je {
    constructor() {
      return closure_23.get();
    }
  }
  Je.__closure = { coverScale: derivedValue };
  Je.__workletHash = 4019095973092;
  Je.__initData = __initData40;
  class We {
    constructor(arg0, arg1) {
      value = closure_22.get();
      tmp2 = "cover" === value;
      if (tmp2) {
        tmp3 = id;
        tmp4 = arg1;
        tmp2 = id !== arg1;
      }
      if (tmp2) {
        tmp5 = closure_26;
        tmp6 = closure_26(value);
      }
      return;
    }
  }
  We.__closure = { currentSizeThreshold: sharedValue7, resetToDefaultSize };
  We.__workletHash = 16156382932216;
  We.__initData = __initData41;
  const animatedReaction5 = id(focused[8]).useAnimatedReaction(Je, We);
  const obj21 = id(focused[8]);
  function je() {
    return sharedValue4.get();
  }
  je.__closure = { isInSnap: sharedValue4 };
  je.__workletHash = 13664520237606;
  je.__initData = __initData42;
  function qe(arg0, arg1) {
    if (tmp) {
      const obj = id(focused[8]);
      id(focused[8]).runOnJS(id(focused[16]).triggerHapticFeedback)(id(focused[16]).HapticFeedbackTypes.IMPACT_LIGHT);
      const runOnJSResult = id(focused[8]).runOnJS(id(focused[16]).triggerHapticFeedback);
    }
    tmp = arg0 !== arg1 && arg0;
  }
  const obj22 = id(focused[8]);
  qe.__closure = { runOnJS: id(focused[8]).runOnJS, triggerHapticFeedback: id(focused[16]).triggerHapticFeedback, HapticFeedbackTypes: id(focused[16]).HapticFeedbackTypes };
  qe.__workletHash = 14624897705679;
  qe.__initData = __initData43;
  const animatedReaction6 = obj22.useAnimatedReaction(je, qe);
  const obj24 = { gesture: null, scale: sharedValue, translateX: sharedValue1, translateY: sharedValue2, numGesturesActive: sharedValue3, isInSnap: sharedValue4 };
  const items4 = [loading, dismissToPIPGestureRef, focused, id, sharedValue, sharedValue1, sharedValue2, callback1, sharedValue3, sharedValue7, containerLayout, sharedValue4, callback2, callback3, sharedValue5, sharedValue6, derivedValue2, setFocused, hideControls, controlsSpecs, showControls, derivedValue1];
  obj24.gesture = loading.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const Gesture2 = LegacyBaseButton.Gesture;
    const Gesture3 = LegacyBaseButton.Gesture;
    const TapResult = Gesture3.Tap();
    class R {
      constructor(arg0, arg1) {
        return arg1.fail();
      }
    }
    R.__closure = {};
    R.__workletHash = 14467226519720;
    R.__initData = __initData2;
    const numberOfTapsResult = Gesture3.Tap().numberOfTaps(2);
    class O {
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
            tmp13 = focused;
            obj2 = id(focused[8]);
            tmp14 = closure_1_11;
            tmp15 = obj2.runOnJS(closure_1_11)(tmp7);
          } else {
            tmp8 = id;
            tmp9 = focused;
            obj = id(focused[8]);
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
    const onTouchesMoveResult = Gesture3.Tap().numberOfTaps(2).onTouchesMove(R);
    O.__closure = { isInDefaultZoom: derivedValue2, resetOnLayoutChange: callback1, focused, id, runOnJS: ReanimatedRexport2.runOnJS, setFocused };
    O.__workletHash = 13573656845512;
    O.__initData = __initData;
    let obj = { isInDefaultZoom: derivedValue2, resetOnLayoutChange: callback1, focused, id, runOnJS: ReanimatedRexport2.runOnJS, setFocused };
    const Gesture4 = LegacyBaseButton.Gesture;
    const onStartResult = onTouchesMoveResult.onStart(O);
    class I {
      constructor(arg0, arg1) {
        return arg1.fail();
      }
    }
    I.__closure = {};
    I.__workletHash = 16157379523852;
    I.__initData = __initData4;
    const TapResult1 = Gesture4.Tap();
    class V {
      constructor() {
        if (closure_1_13.get().mode === setIsFocusedVideoZoomed.HIDDEN) {
          tmp5 = id;
          tmp6 = focused;
          obj2 = id(focused[8]);
          tmp7 = closure_1_14;
          tmp8 = obj2.runOnJS(closure_1_14)({ debounce: true });
        } else {
          tmp = id;
          tmp2 = focused;
          obj = id(focused[8]);
          tmp3 = closure_1_12;
          tmp4 = obj.runOnJS(closure_1_12)({ debounce: true });
        }
        return;
      }
    }
    const onTouchesMoveResult1 = Gesture4.Tap().onTouchesMove(I);
    V.__closure = { controlsSpecs, VoicePanelControlsModes, runOnJS: ReanimatedRexport2.runOnJS, showControls, hideControls };
    V.__workletHash = 11428963347558;
    V.__initData = __initData3;
    let obj2 = { controlsSpecs, VoicePanelControlsModes, runOnJS: ReanimatedRexport2.runOnJS, showControls, hideControls };
    const Gesture5 = LegacyBaseButton.Gesture;
    const ExclusiveResult = Gesture2.Exclusive(onStartResult, onTouchesMoveResult1.onStart(V));
    const PinchResult = Gesture5.Pinch();
    const fn = function w(arg0, fail) {
      value = focused.get();
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
    const enabledResult = Gesture5.Pinch().enabled(!loading);
    class T {
      constructor() {
        result = closure_1_18.set(closure_1_18.get() + 1);
        result1 = closure_1_21.set(false);
        result2 = closure_1_22.set(null);
        return;
      }
    }
    T.__closure = { numGesturesActive: sharedValue3, isInPanToZoom: sharedValue6, currentSizeThreshold: sharedValue7 };
    T.__workletHash = 3664316879698;
    T.__initData = __initData7;
    const obj3 = { numGesturesActive: sharedValue3, isInPanToZoom: sharedValue6, currentSizeThreshold: sharedValue7 };
    const onTouchesDownResult = Gesture5.Pinch().enabled(!loading).onTouchesDown(fn);
    const fn2 = function p(scaleChange) {
      value = sharedValue.get();
      value2 = sharedValue.get();
      scaleChange = scaleChange.scaleChange;
      if (typeof sharedValue6 === "function") {
        let sum = scaleChange;
        if (value2 < tmp3) {
          const diff = 1 - value2;
          const _Math = Math;
          const diff1 = scaleChange - 1;
          sum = 1 + diff1 * Math.max(0.1, 1 - diff * diff * 5);
        }
        const result = sharedValue.set(value * sum);
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
    fn2.__closure = { scale: sharedValue, getScaleChangeWithOverscroll, fitScale: derivedValue1, containerLayout, translateX: sharedValue1, translateY: sharedValue2, isInSnap: sharedValue4, isInCoverSnap: callback2 };
    fn2.__workletHash = 723271209507;
    fn2.__initData = __initData6;
    const obj4 = { scale: sharedValue, getScaleChangeWithOverscroll, fitScale: derivedValue1, containerLayout, translateX: sharedValue1, translateY: sharedValue2, isInSnap: sharedValue4, isInCoverSnap: callback2 };
    const onStartResult1 = Gesture5.Pinch().enabled(!loading).onTouchesDown(fn).onStart(T);
    const fn3 = function v() {
      const result = PAN_TO_ZOOM_TAP_TIME_MILLIS.set(PAN_TO_ZOOM_TAP_TIME_MILLIS.get() - 1);
      callback3();
    };
    fn3.__closure = { numGesturesActive: sharedValue3, handleMovementEnd: callback3 };
    fn3.__workletHash = 4505058477282;
    fn3.__initData = __initData5;
    const obj5 = { numGesturesActive: sharedValue3, handleMovementEnd: callback3 };
    const onChangeResult = Gesture5.Pinch().enabled(!loading).onTouchesDown(fn).onStart(T).onChange(fn2);
    const Gesture6 = LegacyBaseButton.Gesture;
    const onEndResult = Gesture5.Pinch().enabled(!loading).onTouchesDown(fn).onStart(T).onChange(fn2).onEnd(fn3);
    const PanResult = Gesture6.Pan();
    let result = Gesture6.Pan().enabled(!loading).requireExternalGestureToFail(dismissToPIPGestureRef);
    const enabledResult1 = Gesture6.Pan().enabled(!loading);
    const fn4 = function f(arg0, fail) {
      value = focused.get();
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
    class S {
      constructor() {
        timestamp = Date.now();
        result = closure_1_21.set(timestamp - closure_1_20.get() <= closure_18);
        result1 = closure_1_20.set(Date.now());
        return;
      }
    }
    S.__closure = { lastTapTimestamp: sharedValue5, PAN_TO_ZOOM_TAP_TIME_MILLIS, isInPanToZoom: sharedValue6 };
    S.__workletHash = 14732086174045;
    S.__initData = __initData13;
    const obj6 = { lastTapTimestamp: sharedValue5, PAN_TO_ZOOM_TAP_TIME_MILLIS, isInPanToZoom: sharedValue6 };
    const onTouchesDownResult1 = result.averageTouches(true).onTouchesDown(fn4);
    const fn5 = function c() {
      if (sharedValue6.get()) {
        id(focused[8]).runOnJS(hideControls)();
        const obj = id(focused[8]);
      }
      const result = PAN_TO_ZOOM_TAP_TIME_MILLIS.set(PAN_TO_ZOOM_TAP_TIME_MILLIS.get() + 1);
      const result1 = sharedValue7.set(null);
    };
    const onBeginResult = result.averageTouches(true).onTouchesDown(fn4).onBegin(S);
    fn5.__closure = { isInPanToZoom: sharedValue6, runOnJS: ReanimatedRexport2.runOnJS, hideControls, numGesturesActive: sharedValue3, currentSizeThreshold: sharedValue7 };
    fn5.__workletHash = 6768121644126;
    fn5.__initData = __initData12;
    const obj7 = { isInPanToZoom: sharedValue6, runOnJS: ReanimatedRexport2.runOnJS, hideControls, numGesturesActive: sharedValue3, currentSizeThreshold: sharedValue7 };
    const fn6 = function s(changeY) {
      if (closure_1_21.get()) {
        const result = changeY.changeY * sharedValue4;
        value = sharedValue.get();
        const value4 = sharedValue.get();
        if (typeof sharedValue6 === "function") {
          const sum = 1 + result;
          let sum1 = sum;
          if (value4 < tmp15) {
            const diff = 1 - value4;
            const _Math = Math;
            sum1 = 1 + (sum - 1) * Math.max(0.1, 1 - diff * diff * 5);
          }
          const result1 = sharedValue.set(value * sum1);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        const value5 = sharedValue1.get();
        const result2 = sharedValue1.set(value5 + changeY.changeX / sharedValue.get());
        const value6 = FLING_VELOCITY_SCALING.get();
        const result3 = FLING_VELOCITY_SCALING.set(value6 + changeY.changeY / sharedValue.get());
      }
      const result4 = PAN_TO_ZOOM_SCALE_FACTOR.set(callback2());
    };
    fn6.__closure = { isInPanToZoom: sharedValue6, PAN_TO_ZOOM_SCALE_FACTOR, scale: sharedValue, getScaleChangeWithOverscroll, fitScale: derivedValue1, translateX: sharedValue1, translateY: sharedValue2, isInSnap: sharedValue4, isInCoverSnap: callback2 };
    fn6.__workletHash = 6353968881882;
    fn6.__initData = __initData11;
    const obj8 = { isInPanToZoom: sharedValue6, PAN_TO_ZOOM_SCALE_FACTOR, scale: sharedValue, getScaleChangeWithOverscroll, fitScale: derivedValue1, translateX: sharedValue1, translateY: sharedValue2, isInSnap: sharedValue4, isInCoverSnap: callback2 };
    const onStartResult2 = onBeginResult.onStart(fn5);
    const fn7 = function n(velocityX) {
      const result = PAN_TO_ZOOM_TAP_TIME_MILLIS.set(PAN_TO_ZOOM_TAP_TIME_MILLIS.get() - 1);
      value = sharedValue1.get();
      const result1 = velocityX.velocityX * sharedValue2;
      const result2 = sharedValue1.set(id(focused[14]).withSpring(value + result1 / sharedValue.get(), dismissToPIPGestureRef));
      const obj = id(focused[14]);
      value2 = FLING_VELOCITY_SCALING.get();
      const result3 = velocityX.velocityY * sharedValue2;
      const result4 = FLING_VELOCITY_SCALING.set(id(focused[14]).withSpring(value2 + result3 / sharedValue.get(), dismissToPIPGestureRef));
      callback3();
    };
    const onChangeResult1 = onBeginResult.onStart(fn5).onChange(fn6);
    fn7.__closure = { numGesturesActive: sharedValue3, translateX: sharedValue1, withSpring: spring.withSpring, FLING_VELOCITY_SCALING, scale: sharedValue, SCALE_PHYSICS, translateY: sharedValue2, handleMovementEnd: callback3 };
    fn7.__workletHash = 14411433987776;
    fn7.__initData = __initData10;
    const obj9 = { numGesturesActive: sharedValue3, translateX: sharedValue1, withSpring: spring.withSpring, FLING_VELOCITY_SCALING, scale: sharedValue, SCALE_PHYSICS, translateY: sharedValue2, handleMovementEnd: callback3 };
    const fn8 = function t() {
      const result = sharedValue6.set(false);
    };
    fn8.__closure = { isInPanToZoom: sharedValue6 };
    fn8.__workletHash = 8145424451590;
    fn8.__initData = __initData9;
    return Gesture.Simultaneous(ExclusiveResult, onEndResult, onChangeResult1.onEnd(fn7).onFinalize(fn8));
  }, items4);
  return obj24;
});
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
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelVideoRenderer.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VideoRenderer(id) {
  const cResult = id(sharedCoords[12]).c(75);
  id = id.id;
  const streamId = id.streamId;
  ({ userId, videoSpinnerContext, sharedCoords } = id);
  const isScrollVisible = id.isScrollVisible;
  const isCamera = id.isCamera;
  ({ streamKey, mirror, focusOnReady, paused, style, layout } = id);
  VoicePanelModes = tmp4;
  closure_7 = tmp5;
  const tmp7 = translateY();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "VoicePanelVideoRenderer" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let obj = id(sharedCoords[12]);
  const surfaceDirectRendererExperiment = id(sharedCoords[18]).useSurfaceDirectRendererExperiment(userId, first);
  const context = isCamera.useContext(streamId(sharedCoords[13]));
  const mode = context.mode;
  const focused = context.focused;
  const setFocused = context.setFocused;
  const layoutManager = context.layoutManager;
  const windowDimensions = context.windowDimensions;
  let tmpResult = id(sharedCoords[18]);
  const sharedValue = id(sharedCoords[8]).useSharedValue(true);
  const tmpResult13 = id(sharedCoords[8]);
  const merged = Object.assign(layoutManager.getTargetDimensions(id));
  const sharedValue1 = id(sharedCoords[8]).useSharedValue({});
  const obj3 = {};
  const tmpResult14 = id(sharedCoords[8]);
  const pIPState = id(sharedCoords[19]).usePIPState();
  let tmp16 = isCamera;
  if (isCamera) {
    tmp16 = pIPState.id === id;
  }
  if (tmp16) {
    tmp16 = surfaceDirectRendererExperiment;
  }
  const tmpResult15 = id(sharedCoords[19]);
  [tmp18, c16] = isScrollVisible(isCamera.useState(true), 2);
  if (cResult[1] === (undefined !== focusOnReady && focusOnReady)) {
    if (cResult[2] === id) {
      if (cResult[3] === setFocused) {
        let tmp19 = cResult[4];
      }
      obj4.useRef(tmp19);
      if (cResult[5] === tmp18) {
        if (cResult[6] === tmp6) {
          if (cResult[7] === streamId) {
            if (cResult[8] === streamKey) {
              if (cResult[9] === userId) {
                if (cResult[10] === videoSpinnerContext) {
                  let tmp20 = cResult[11];
                }
                const onReady = tmp10(sharedCoords[20])(tmp20).onReady;
                if (cResult[12] === tmp18) {
                  if (cResult[13] === streamId) {
                    if (cResult[14] === userId) {
                      if (cResult[15] === videoSpinnerContext) {
                        let tmp22 = cResult[16];
                      }
                      tmp10(sharedCoords[21])(tmp22);
                      if (cResult[17] !== onReady) {
                        function ne() {
                          closure_1_16(false);
                          ref.current();
                          onReady();
                        }
                        cResult[17] = onReady;
                        cResult[18] = ne;
                        let tmp24 = ne;
                      } else {
                        tmp24 = cResult[18];
                      }
                      const setHasActiveVideoOutputSink = tmp(sharedCoords[22]).useSetHasActiveVideoOutputSink(context.streamOutputSinkStack);
                      const tmpResult16 = tmp(sharedCoords[22]);
                      function se() {
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
                      const obj5 = { mode, focused, isScrollVisible, streamId };
                      se.__closure = obj5;
                      se.__workletHash = 15972889707960;
                      se.__initData = __initData44;
                      function oe(arg0, arg1) {
                        if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp)) {
                          const tmp5 = _slicedToArray(arg0, 4);
                          if (null != tmp5[3]) {
                            ReanimatedRexport2;
                            if (typeof shouldMakeActive === "function") {
                              let tmp16 = !tmp8;
                              if (tmp8) {
                                tmp16 = tmp6 === VoicePanelModes.PIP;
                              }
                              if (!tmp16) {
                                tmp16 = null != tmp7 && tmp7 !== tmp14;
                                const tmp17 = null != tmp7 && tmp7 !== tmp14;
                              }
                              tmp12(tmp9, !tmp16);
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                        }
                        obj = cheapWorkletShallowEqual;
                        tmp = arg1;
                      }
                      const obj6 = { cheapWorkletArrayShallowEqual: tmp(sharedCoords[15]).cheapWorkletArrayShallowEqual, runOnJS: tmp(sharedCoords[8]).runOnJS, setHasActiveVideoOutputSink, shouldMakeActive, id };
                      oe.__closure = obj6;
                      oe.__workletHash = 10807132099258;
                      oe.__initData = __initData45;
                      const animatedReaction = tmp(sharedCoords[8]).useAnimatedReaction(se, oe);
                      if (cResult[19] === sharedValue) {
                        if (cResult[20] === id) {
                          if (cResult[21] === layoutManager) {
                            if (cResult[22] === sharedValue1) {
                              let tmp30 = cResult[23];
                            }
                            function le() {
                              value = focused.get();
                              id = undefined;
                              if (value != null) {
                                id = value.id;
                              }
                              if (id === id) {
                                const size = { width: windowDimensions.get().width, height: windowDimensions.get().height };
                                let size1 = size;
                              } else {
                                size1 = { width: sharedCoords.get().width, height: sharedCoords.get().height };
                              }
                              return size1;
                            }
                            const obj7 = { focused, id, windowDimensions, sharedCoords };
                            le.__closure = obj7;
                            le.__workletHash = 15997864116305;
                            le.__initData = __initData46;
                            const derivedValue = tmp(sharedCoords[8]).useDerivedValue(le);
                            if (cResult[24] === derivedValue) {
                              if (cResult[25] === sharedValue) {
                                if (cResult[26] === focused) {
                                  if (cResult[27] === id) {
                                    if (cResult[28] === isCamera) {
                                      if (cResult[29] === tmp18) {
                                        if (cResult[30] === mode) {
                                          if (cResult[31] === sharedValue1) {
                                            let tmp33 = cResult[32];
                                          }
                                          const tmp35 = closure_93(tmp33);
                                          ({ gesture, scale } = tmp35);
                                          const translateX = tmp35.translateX;
                                          translateY = tmp35.translateY;
                                          const isInSnap = tmp35.isInSnap;
                                          closure_24 = layout.get();
                                          if (cResult[33] === isCamera) {
                                            if (cResult[34] === mode) {
                                              if (cResult[35] === scale) {
                                                if (cResult[36] === streamId) {
                                                  if (cResult[37] === sharedValue1) {
                                                    let tmp37 = cResult[38];
                                                  }
                                                  closure_25 = tmp37;
                                                  class Pe {
                                                    constructor() {
                                                      items = [, , ];
                                                      items[0] = scale.get();
                                                      items[1] = closure_14.get();
                                                      items[2] = mode.get();
                                                      return items;
                                                    }
                                                  }
                                                  const obj8 = { scale, videoDimensions: sharedValue1, mode };
                                                  Pe.__closure = obj8;
                                                  Pe.__workletHash = 10603362336898;
                                                  Pe.__initData = __initData47;
                                                  class De {
                                                    constructor(arg0, arg1) {
                                                      if (null != streamId) {
                                                        tmp = arg1;
                                                        tmp2 = closure_0;
                                                        tmp3 = closure_2;
                                                        obj = closure_0(closure_2[15]);
                                                        tmp4 = id;
                                                        if (!obj.cheapWorkletShallowEqual(id, tmp)) {
                                                          tmp2Result = tmp2(tmp3[8]);
                                                          tmp5 = closure_25;
                                                          tmp6 = tmp2Result.runOnJS(closure_25)();
                                                        }
                                                      }
                                                      return;
                                                    }
                                                  }
                                                  const obj9 = { streamId, cheapWorkletShallowEqual: tmp(sharedCoords[15]).cheapWorkletShallowEqual, runOnJS: tmp(sharedCoords[8]).runOnJS, respondToVideoSizeUpdate: tmp37 };
                                                  De.__closure = obj9;
                                                  De.__workletHash = 11560313728320;
                                                  De.__initData = __initData48;
                                                  const animatedReaction1 = tmp(sharedCoords[8]).useAnimatedReaction(Pe, De);
                                                  if (cResult[39] !== tmp37) {
                                                    class Ee {
                                                      constructor() {
                                                        obj = streamId(sharedCoords[25]);
                                                        closure_0 = obj.addOnPipModeChangedListener((arg0) => {
                                                          if (!arg0) {
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
                                                    let items = [tmp37];
                                                    class Pe {
                                                      constructor() {
                                                        items = [, , ];
                                                        items[0] = scale.get();
                                                        items[1] = closure_14.get();
                                                        items[2] = mode.get();
                                                        return items;
                                                      }
                                                    }
                                                    cResult[39] = tmp37;
                                                    cResult[40] = Ee;
                                                    cResult[41] = items;
                                                    let tmp42 = items;
                                                  } else {
                                                    class Ee {
                                                      constructor() {
                                                        obj = streamId(sharedCoords[25]);
                                                        closure_0 = obj.addOnPipModeChangedListener((arg0) => {
                                                          if (!arg0) {
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
                                                    tmp42 = cResult[41];
                                                  }
                                                  const effect = obj4.useEffect(Ee, tmp42);
                                                  const tmpResult19 = tmp(sharedCoords[8]);
                                                  class Ce {
                                                    constructor() {
                                                      value = closure_14.get();
                                                      ({ width, height } = value);
                                                      size = closure_15;
                                                      result3 = height;
                                                      result1 = width;
                                                      if (closure_15.mode === VoicePanelPIPModes.IN_APP) {
                                                        scale = size.scale;
                                                        value1 = scale.get();
                                                        if (width > height) {
                                                          tmp8 = scale;
                                                          result = width * (size.height * value1 / height);
                                                          result1 = result / scale.get();
                                                          result2 = size.height * value1;
                                                          result3 = result2 / scale.get();
                                                        } else {
                                                          tmp5 = scale;
                                                          result4 = height * (size.width * value1 / width);
                                                          result3 = result4 / scale.get();
                                                          result5 = size.width * value1;
                                                          result1 = result5 / scale.get();
                                                        }
                                                      }
                                                      size1 = { width: result1, height: result3, opacity: null, transform: null };
                                                      num = 1;
                                                      num2 = 1;
                                                      if (closure_13.get()) {
                                                        num2 = 0;
                                                      }
                                                      size1.opacity = num2;
                                                      obj1 = { scale: scale.get() };
                                                      items = [, , , ];
                                                      items[0] = obj1;
                                                      obj5 = { translateX: translateX.get() };
                                                      items[1] = obj5;
                                                      obj6 = { translateY: translateY.get() };
                                                      items[2] = obj6;
                                                      if (mirror) {
                                                        num = -1;
                                                      }
                                                      items[3] = { scaleX: num };
                                                      size1.transform = items;
                                                      return size1;
                                                    }
                                                  }
                                                  const obj10 = { videoDimensions: sharedValue1, pipState: pIPState, VoicePanelPIPModes: focused, scale, disableAnimations: sharedValue, translateX, translateY, mirror: tmp4 };
                                                  Ce.__closure = obj10;
                                                  Ce.__workletHash = 10349344853869;
                                                  Ce.__initData = __initData49;
                                                  const animatedStyle = tmp(sharedCoords[8]).useAnimatedStyle(Ce);
                                                  const tmpResult20 = tmp(sharedCoords[8]);
                                                  const token = tmp(sharedCoords[26]).useToken(tmp10(sharedCoords[27]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
                                                  const tmpResult21 = tmp(sharedCoords[26]);
                                                  let num43 = 0;
                                                  if (mode.get() !== VoicePanelModes.PIP) {
                                                    class Ee {
                                                      constructor() {
                                                        obj = streamId(sharedCoords[25]);
                                                        closure_0 = obj.addOnPipModeChangedListener((arg0) => {
                                                          if (!arg0) {
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
                                                        items = [, , ];
                                                        items[0] = scale.get();
                                                        items[1] = closure_14.get();
                                                        items[2] = mode.get();
                                                        return items;
                                                      }
                                                    }
                                                    num43 = 0;
                                                    if (undefined !== id) {
                                                      class Ee {
                                                        constructor() {
                                                          obj = streamId(sharedCoords[25]);
                                                          closure_0 = obj.addOnPipModeChangedListener((arg0) => {
                                                            if (!arg0) {
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
                                                  const sharedValue2 = tmp(sharedCoords[8]).useSharedValue(num43);
                                                  const tmp48 = VoicePanelModes;
                                                  const tmpResult22 = tmp(sharedCoords[8]);
                                                  class Re {
                                                    constructor() {
                                                      obj = { inPip: mode.get() === VoicePanelModes.PIP, isFocused: null };
                                                      value = focused.get();
                                                      id = undefined;
                                                      if (value != null) {
                                                        id = value.id;
                                                      }
                                                      obj.isFocused = id === id;
                                                      return obj;
                                                    }
                                                  }
                                                  const obj11 = { mode, VoicePanelModes: tmp48, focused, id };
                                                  Re.__closure = obj11;
                                                  Re.__workletHash = 5805968536596;
                                                  Re.__initData = __initData50;
                                                  class Oe {
                                                    constructor(arg0, arg1) {
                                                      tmp = closure_0;
                                                      tmp2 = closure_2;
                                                      obj = closure_0(closure_2[15]);
                                                      tmp3 = arg1;
                                                      if (!obj.cheapWorkletShallowEqual(id, tmp3)) {
                                                        if (!id.inPip) {
                                                          if (!id.isFocused) {
                                                            isFocused = undefined;
                                                            if (arg1 != null) {
                                                              isFocused = arg1.isFocused;
                                                            }
                                                            num = 0.3;
                                                            flag = true;
                                                            num2 = 0.3;
                                                            tmp5 = closure_27;
                                                            if (true === isFocused) {
                                                              tmpResult = tmp(tmp2[8]);
                                                              tmpResult1 = tmp(tmp2[28]);
                                                              str = "animate-never";
                                                              num3 = 300;
                                                              num2 = tmpResult.withDelay(300, tmpResult1.withTiming(0.3, { duration: 0 }, "animate-never"));
                                                            }
                                                            result = closure_27.set(num2);
                                                          }
                                                        }
                                                        tmp7 = closure_27;
                                                        num4 = 0;
                                                        result1 = closure_27.set(0);
                                                      }
                                                      return;
                                                    }
                                                  }
                                                  const obj12 = { cheapWorkletShallowEqual: tmp(sharedCoords[15]).cheapWorkletShallowEqual, strokeOpacity: sharedValue2, withDelay: tmp(sharedCoords[8]).withDelay, withTiming: tmp(sharedCoords[28]).withTiming };
                                                  Oe.__closure = obj12;
                                                  Oe.__workletHash = 4629535563751;
                                                  Oe.__initData = __initData51;
                                                  const animatedReaction2 = tmp(sharedCoords[8]).useAnimatedReaction(Re, Oe);
                                                  const tmpResult23 = tmp(sharedCoords[8]);
                                                  function ye() {
                                                    if (isInSnap.get()) {
                                                      const rect = { position: "absolute", top: 0, left: 0, bottom: 0, right: 0, borderWidth, overflow: "hidden", borderColor: "white", opacity: 0.5 };
                                                      let rect1 = rect;
                                                    } else {
                                                      rect1 = { position: "absolute", top: -1, left: -1, bottom: -1, right: -1, borderWidth: 2, borderRadius: token + 2, overflow: "hidden", borderColor: "white", opacity: sharedValue2.get() };
                                                    }
                                                    return rect1;
                                                  }
                                                  const obj13 = { isInSnap, SNAP_EDGE_INNER_THRESHOLD: sharedValue1, borderRadius: token, strokeOpacity: sharedValue2 };
                                                  ye.__closure = obj13;
                                                  ye.__workletHash = 10348859740930;
                                                  ye.__initData = __initData52;
                                                  const animatedStyle1 = tmp(sharedCoords[8]).useAnimatedStyle(ye);
                                                  if (cResult[42] === sharedValue) {
                                                    class Ee {
                                                      constructor() {
                                                        obj = streamId(sharedCoords[25]);
                                                        closure_0 = obj.addOnPipModeChangedListener((arg0) => {
                                                          if (!arg0) {
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
                                                          obj = streamId(sharedCoords[25]);
                                                          closure_0 = obj.addOnPipModeChangedListener((arg0) => {
                                                            if (!arg0) {
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
                                                            obj = streamId(sharedCoords[25]);
                                                            closure_0 = obj.addOnPipModeChangedListener((arg0) => {
                                                              if (!arg0) {
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
                                                        if (!tmp16) {
                                                          class Ee {
                                                            constructor() {
                                                              obj = streamId(sharedCoords[25]);
                                                              closure_0 = obj.addOnPipModeChangedListener((arg0) => {
                                                                if (!arg0) {
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
                                                            items = [, , ];
                                                            items[0] = scale.get();
                                                            items[1] = closure_14.get();
                                                            items[2] = mode.get();
                                                            return items;
                                                          }
                                                        }
                                                        const obj14 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId: null, onReady: tmp24, onSize: tmp30, style: tmp7.video, layout: tmp58 };
                                                        class De {
                                                          constructor(arg0, arg1) {
                                                            if (null != streamId) {
                                                              tmp = arg1;
                                                              tmp2 = closure_0;
                                                              tmp3 = closure_2;
                                                              obj = closure_0(closure_2[15]);
                                                              tmp4 = id;
                                                              if (!obj.cheapWorkletShallowEqual(id, tmp)) {
                                                                tmp2Result = tmp2(tmp3[8]);
                                                                tmp5 = closure_25;
                                                                tmp6 = tmp2Result.runOnJS(closure_25)();
                                                              }
                                                            }
                                                            return;
                                                          }
                                                        }
                                                        cResult[51] = tmp58;
                                                        cResult[52] = tmp24;
                                                        cResult[53] = tmp30;
                                                        cResult[54] = tmp7.video;
                                                        cResult[55] = null;
                                                        cResult[56] = surfaceDirectRendererExperiment;
                                                        cResult[57] = tmp66;
                                                      }
                                                      const items1 = [, ];
                                                      class Pe {
                                                        constructor() {
                                                          items = [, , ];
                                                          items[0] = scale.get();
                                                          items[1] = closure_14.get();
                                                          items[2] = mode.get();
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
                                                        items = [, , ];
                                                        items[0] = scale.get();
                                                        items[1] = closure_14.get();
                                                        items[2] = mode.get();
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
                                                  const tmpResult24 = tmp(sharedCoords[8]);
                                                }
                                              }
                                            }
                                          }
                                          function ge() {
                                            let tmp2 = null == streamId;
                                            if (!tmp2) {
                                              tmp2 = isCamera;
                                            }
                                            if (!tmp2) {
                                              tmp2 = mode.get() !== VoicePanelModes.PANEL;
                                            }
                                            if (!tmp2) {
                                              const size = { width: sharedValue1.get().width * closure_24, height: sharedValue1.get().height * closure_24 };
                                              VideoActionCreators.updateVideoSize(streamId, size, scale.get());
                                            }
                                          }
                                          cResult[33] = isCamera;
                                          cResult[34] = mode;
                                          cResult[35] = scale;
                                          cResult[36] = streamId;
                                          cResult[37] = sharedValue1;
                                          cResult[38] = ge;
                                          tmp37 = ge;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            const obj16 = { id, isCamera, focused, mode, loading: tmp18, containerLayout: derivedValue, videoDimensions: sharedValue1, disableAnimations: sharedValue };
                            cResult[24] = derivedValue;
                            cResult[25] = sharedValue;
                            cResult[27] = id;
                            cResult[28] = isCamera;
                            cResult[29] = tmp18;
                            cResult[30] = mode;
                            cResult[31] = sharedValue1;
                            cResult[32] = obj16;
                            tmp33 = obj16;
                            const tmpResult18 = tmp(sharedCoords[8]);
                          }
                        }
                      }
                      function ae(nativeEvent) {
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
                      tmp30 = ae;
                      const tmpResult17 = tmp(sharedCoords[8]);
                    }
                  }
                }
                const obj17 = { location: "VideoRenderer", videoSpinnerContext, userId, streamId, loading: tmp18 };
                cResult[12] = tmp18;
                cResult[13] = streamId;
                cResult[14] = userId;
                cResult[15] = videoSpinnerContext;
                cResult[16] = obj17;
                tmp22 = obj17;
              }
            }
          }
        }
      }
      tmp21[0] = streamId;
      tmp21[1] = userId;
      tmp21[2] = tmp18;
      tmp21[3] = videoSpinnerContext;
      tmp21[4] = tmp6;
      tmp21[5] = streamKey;
      cResult[5] = tmp18;
      cResult[7] = streamId;
      cResult[8] = streamKey;
      cResult[9] = userId;
      cResult[10] = videoSpinnerContext;
      cResult[11] = tmp21;
      tmp20 = tmp21;
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
  tmp19 = fn;
  let tmp17 = isScrollVisible(isCamera.useState(true), 2);
}) : (function VideoRenderer(streamKey) {
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
  c10 = undefined;
  layoutManager = undefined;
  c16 = undefined;
  let onReady;
  let setHasActiveVideoOutputSink;
  let scale;
  let translateX;
  let translateY;
  let isInSnap;
  c24 = undefined;
  let callback2;
  let token;
  let sharedValue2;
  let tmp = translateY();
  const surfaceDirectRendererExperiment = id(sharedCoords[18]).useSurfaceDirectRendererExperiment(userId, { location: "VoicePanelVideoRenderer" });
  const context = isCamera.useContext(streamId(sharedCoords[13]));
  const mode = context.mode;
  const focused = context.focused;
  ({ setFocused: c10, layoutManager } = context);
  const windowDimensions = context.windowDimensions;
  let obj = id(sharedCoords[18]);
  const sharedValue = id(sharedCoords[8]).useSharedValue(true);
  const obj3 = id(sharedCoords[8]);
  const merged = Object.assign(layoutManager.getTargetDimensions(id));
  const sharedValue1 = id(sharedCoords[8]).useSharedValue({});
  const obj4 = id(sharedCoords[8]);
  const obj5 = {};
  const pIPState = id(sharedCoords[19]).usePIPState();
  let tmp11 = isCamera;
  if (isCamera) {
    tmp11 = pIPState.id === id;
  }
  if (tmp11) {
    tmp11 = surfaceDirectRendererExperiment;
  }
  const obj6 = id(sharedCoords[19]);
  [tmp13, c16] = isScrollVisible(isCamera.useState(true), 2);
  isCamera.useRef(() => {
    if (flag2) {
      _undefined(id);
    }
  });
  onReady = tmp5(tmp3[20])({ streamId, userId, loading: tmp13, videoSpinnerContext, paused: flag3, streamKey: streamKey.streamKey }).onReady;
  streamId(sharedCoords[21])({ location: "VideoRenderer", videoSpinnerContext, userId, streamId, loading: tmp13 });
  let items = [onReady];
  const callback = obj2.useCallback(() => {
    _undefined2(false);
    ref.current();
    onReady();
  }, items);
  const tmp12 = isScrollVisible(isCamera.useState(true), 2);
  setHasActiveVideoOutputSink = id(sharedCoords[22]).useSetHasActiveVideoOutputSink(context.streamOutputSinkStack);
  let tmp2Result = id(sharedCoords[22]);
  const fn = function j() {
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
  };
  fn.__closure = { mode, focused, isScrollVisible, streamId };
  fn.__workletHash = 6921221375959;
  fn.__initData = __initData54;
  const fn2 = function q(arg0, arg1) {
    if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp)) {
      const tmp5 = _slicedToArray(arg0, 4);
      if (null != tmp5[3]) {
        ReanimatedRexport2;
        if (typeof shouldMakeActive === "function") {
          let tmp16 = !tmp8;
          if (tmp8) {
            tmp16 = tmp6 === VoicePanelModes.PIP;
          }
          if (!tmp16) {
            tmp16 = null != tmp7 && tmp7 !== tmp14;
            const tmp17 = null != tmp7 && tmp7 !== tmp14;
          }
          tmp12(tmp9, !tmp16);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
    obj = cheapWorkletShallowEqual;
    tmp = arg1;
  };
  const tmp2Result9 = id(sharedCoords[8]);
  fn2.__closure = { cheapWorkletArrayShallowEqual: id(sharedCoords[15]).cheapWorkletArrayShallowEqual, runOnJS: id(sharedCoords[8]).runOnJS, setHasActiveVideoOutputSink, shouldMakeActive, id };
  fn2.__workletHash = 5671725058965;
  fn2.__initData = __initData55;
  const animatedReaction = tmp2Result9.useAnimatedReaction(fn, fn2);
  const items1 = [sharedValue1, layoutManager, id, sharedValue];
  const callback1 = obj2.useCallback((nativeEvent) => {
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
  const obj7 = { cheapWorkletArrayShallowEqual: id(sharedCoords[15]).cheapWorkletArrayShallowEqual, runOnJS: id(sharedCoords[8]).runOnJS, setHasActiveVideoOutputSink, shouldMakeActive, id };
  class K {
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
  K.__closure = { focused, id, windowDimensions, sharedCoords };
  K.__workletHash = 14150057137086;
  K.__initData = __initData56;
  const tmp2Result10 = id(sharedCoords[8]);
  const tmp19 = closure_93({ id, isCamera, focused, mode, loading: tmp13, containerLayout: id(sharedCoords[8]).useDerivedValue(K), videoDimensions: sharedValue1, disableAnimations: sharedValue });
  scale = tmp19.scale;
  translateX = tmp19.translateX;
  translateY = tmp19.translateY;
  isInSnap = tmp19.isInSnap;
  value = flag.get();
  c24 = value;
  const items2 = [streamId, isCamera, scale, sharedValue1, mode, value];
  callback2 = obj2.useCallback(() => {
    let tmp2 = null == streamId;
    if (!tmp2) {
      tmp2 = isCamera;
    }
    if (!tmp2) {
      tmp2 = mode.get() !== VoicePanelModes.PANEL;
    }
    if (!tmp2) {
      const size = { width: sharedValue1.get().width * c24, height: sharedValue1.get().height * c24 };
      VideoActionCreators.updateVideoSize(streamId, size, scale.get());
    }
  }, items2);
  const obj8 = { id, isCamera, focused, mode, loading: tmp13, containerLayout: id(sharedCoords[8]).useDerivedValue(K), videoDimensions: sharedValue1, disableAnimations: sharedValue };
  function ee() {
    const items = [scale.get(), sharedValue1.get(), mode.get()];
    return items;
  }
  ee.__closure = { scale, videoDimensions: sharedValue1, mode };
  ee.__workletHash = 753963003437;
  ee.__initData = __initData57;
  class Q {
    constructor(arg0, arg1) {
      if (null != streamId) {
        tmp = arg1;
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[15]);
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
  const tmp2Result11 = id(sharedCoords[8]);
  Q.__closure = { streamId, cheapWorkletShallowEqual: id(sharedCoords[15]).cheapWorkletShallowEqual, runOnJS: id(sharedCoords[8]).runOnJS, respondToVideoSizeUpdate: callback2 };
  Q.__workletHash = 1498075835119;
  Q.__initData = __initData58;
  const animatedReaction1 = tmp2Result11.useAnimatedReaction(ee, Q);
  const items3 = [callback2];
  const effect = obj2.useEffect(() => {
    closure_0 = streamId(sharedCoords[25]).addOnPipModeChangedListener((arg0) => {
      if (!arg0) {
        callback2();
      }
    });
    return () => {
      if (closure_0 != null) {
        closure_0.remove();
      }
    };
  }, items3);
  const obj9 = { streamId, cheapWorkletShallowEqual: id(sharedCoords[15]).cheapWorkletShallowEqual, runOnJS: id(sharedCoords[8]).runOnJS, respondToVideoSizeUpdate: callback2 };
  function ue() {
    value = sharedValue1.get();
    ({ width, height } = value);
    const size = pIPState;
    let result3 = height;
    let result1 = width;
    if (pIPState.mode === VoicePanelPIPModes.IN_APP) {
      scale = size.scale;
      value2 = scale.get();
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
    const size1 = { width: result1, height: result3, opacity: null, transform: null };
    let num = 1;
    let num2 = 1;
    if (sharedValue.get()) {
      num2 = 0;
    }
    size1.opacity = num2;
    const items = [{ scale: scale.get() }, , , ];
    const obj = { scale: scale.get() };
    items[1] = { translateX: translateX.get() };
    const obj2 = { translateX: translateX.get() };
    items[2] = { translateY: translateY.get() };
    if (flag) {
      num = -1;
    }
    items[3] = { scaleX: num };
    size1.transform = items;
    return size1;
  }
  ue.__closure = { videoDimensions: sharedValue1, pipState: pIPState, VoicePanelPIPModes: focused, scale, disableAnimations: sharedValue, translateX, translateY, mirror: flag };
  ue.__workletHash = 2610370642882;
  ue.__initData = __initData59;
  const animatedStyle = id(sharedCoords[8]).useAnimatedStyle(ue);
  const obj10 = { videoDimensions: sharedValue1, pipState: pIPState, VoicePanelPIPModes: focused, scale, disableAnimations: sharedValue, translateX, translateY, mirror: flag };
  const tmp2Result12 = id(sharedCoords[8]);
  token = id(sharedCoords[26]).useToken(tmp5(tmp3[27]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  const tmp2Result13 = id(sharedCoords[26]);
  let num = 0;
  if (mode.get() !== flag2.PIP) {
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
  sharedValue2 = id(sharedCoords[8]).useSharedValue(num);
  const tmp26 = flag2;
  const tmp2Result14 = id(sharedCoords[8]);
  function ge() {
    const obj = { inPip: mode.get() === VoicePanelModes.PIP, isFocused: null };
    value = focused.get();
    id = undefined;
    if (value != null) {
      id = value.id;
    }
    obj.isFocused = id === id;
    return obj;
  }
  ge.__closure = { mode, VoicePanelModes: tmp26, focused, id };
  ge.__workletHash = 11872905555259;
  ge.__initData = __initData60;
  function he(inPip, isFocused) {
    if (!obj.cheapWorkletShallowEqual(inPip, tmp3)) {
      if (!inPip.inPip) {
        if (!inPip.isFocused) {
          isFocused = undefined;
          if (isFocused != null) {
            isFocused = isFocused.isFocused;
          }
          let num2 = 0.3;
          if (true === isFocused) {
            const tmpResult = ReanimatedRexport2;
            num2 = tmpResult.withDelay(300, timing.withTiming(0.3, { duration: 0 }, "animate-never"));
            const tmpResult2 = timing;
          }
          const result = sharedValue2.set(num2);
        }
      }
      const result1 = sharedValue2.set(0);
    }
    obj = cheapWorkletShallowEqual;
    tmp3 = isFocused;
  }
  const tmp2Result15 = id(sharedCoords[8]);
  he.__closure = { cheapWorkletShallowEqual: id(sharedCoords[15]).cheapWorkletShallowEqual, strokeOpacity: sharedValue2, withDelay: id(sharedCoords[8]).withDelay, withTiming: id(sharedCoords[28]).withTiming };
  he.__workletHash = 14939151435744;
  he.__initData = __initData61;
  const animatedReaction2 = tmp2Result15.useAnimatedReaction(ge, he);
  const obj11 = { cheapWorkletShallowEqual: id(sharedCoords[15]).cheapWorkletShallowEqual, strokeOpacity: sharedValue2, withDelay: id(sharedCoords[8]).withDelay, withTiming: id(sharedCoords[28]).withTiming };
  function me() {
    if (isInSnap.get()) {
      const rect = { position: "absolute", top: 0, left: 0, bottom: 0, right: 0, borderWidth, overflow: "hidden", borderColor: "white", opacity: 0.5 };
      let rect1 = rect;
    } else {
      rect1 = { position: "absolute", top: -1, left: -1, bottom: -1, right: -1, borderWidth: 2, borderRadius: token + 2, overflow: "hidden", borderColor: "white", opacity: sharedValue2.get() };
    }
    return rect1;
  }
  me.__closure = { isInSnap, SNAP_EDGE_INNER_THRESHOLD: sharedValue1, borderRadius: token, strokeOpacity: sharedValue2 };
  me.__workletHash = 1426249196963;
  me.__initData = __initData62;
  function pe(arg0) {
    return layout(arg0, sharedValue.get());
  }
  pe.__closure = { layout, disableAnimations: sharedValue };
  pe.__workletHash = 15409047754511;
  pe.__initData = __initData63;
  const items4 = [layout, sharedValue];
  const animatedStyle1 = id(sharedCoords[8]).useAnimatedStyle(me);
  const callback3 = obj2.useCallback(pe, items4);
  const obj13 = { gesture: tmp19.gesture, children: null };
  const obj14 = { style: null, layout: callback3, children: null };
  const items5 = [tmp.wrapper, streamKey.style];
  obj14.style = items5;
  const obj12 = { isInSnap, SNAP_EDGE_INNER_THRESHOLD: sharedValue1, borderRadius: token, strokeOpacity: sharedValue2 };
  const tmp2Result16 = id(sharedCoords[8]);
  const tmp35 = windowDimensions;
  const obj15 = { style: null, layout: callback3, children: null };
  const items6 = [tmp.animatedWrapperStyles, animatedStyle];
  obj15.style = items6;
  const obj16 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId: null, onReady: null, onSize: null, style: null, layout: null };
  let tmp39 = null;
  const tmp5Result = streamId(sharedCoords[29]);
  if (!tmp11) {
    tmp39 = streamId;
  }
  obj16.streamId = tmp39;
  obj16.onReady = callback;
  obj16.onSize = callback1;
  obj16.style = tmp.video;
  obj16.layout = callback3;
  obj15.children = layoutManager(scale, obj16);
  const items7 = [layoutManager(streamId(sharedCoords[29]), obj15), ];
  if (tmp13) {
    const obj17 = { animate: true, style: tmp.spinner };
    let tmp34Result = tmp34(tmp5(tmp3[30]), obj17);
  } else {
    const obj18 = { style: animatedStyle1, layout: callback3, pointerEvents: "none" };
    tmp34Result = tmp34(tmp5(tmp3[29]), obj18);
  }
  items7[1] = tmp34Result;
  obj14.children = items7;
  obj13.children = tmp35(tmp5Result, obj14);
  return layoutManager(id(sharedCoords[17]).GestureDetector, obj13);
}));