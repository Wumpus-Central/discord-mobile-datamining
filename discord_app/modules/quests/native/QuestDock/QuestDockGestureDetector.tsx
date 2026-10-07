// === Module 15005: QuestDockGestureDetector ===

// Module 15005 (QuestDockGestureDetector)
import c from "c" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import HapticUtils from "HapticUtils" /* 4861 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6147 */;
import QuestDockUtils from "QuestDockUtils" /* 14911 */;
import noop from "module_19" /* 19 */;

require = fn;
const QuestDockMode = fn(5630).QuestDockMode;
const QuestDockConstants = fn(14912);
({ QUEST_DOCK_COLLAPSED_HEIGHT: hasOwnProperty, QUEST_DOCK_CLOSED_HEIGHT: metroRequire, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: closure_7, QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM: closure_8, QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM: closure_9, QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT: c10, QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: closure_11, QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY: closure_12, QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD: map1, QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR: closure_14, QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR: closure_15, QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR: closure_16 } = QuestDockConstants);
const jsx = fn(21).jsx;
const __initData = { code: "function QuestDockGestureDetectorTsx1(event_2){const{QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY,restingQuestDockMode,QuestDockMode,initialGestureOffset,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,runOnJS,onExpand,setRestingQuestDockMode}=this.__closure;var velocityY=event_2.velocityY,y=event_2.y;var absoluteVelocityY=Math.abs(velocityY);var absoluteY_0=Math.abs(y);var resultingDockMode;if(absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&velocityY<0){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else{if(absoluteVelocityY<QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&initialGestureOffset.get().isDrawer){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else{if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY||y>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT)){resultingDockMode=QuestDockMode.SOFT_DISMISSED;}else{if(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()!==QuestDockMode.COLLAPSED){resultingDockMode=QuestDockMode.COLLAPSED;}else{if(velocityY<0&&absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.COLLAPSED;}else{if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED||restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.COLLAPSED;}}}}}}if(restingQuestDockMode.get()===QuestDockMode.CLOSED&&resultingDockMode!==QuestDockMode.EXPANDED&&y<0&&absoluteY_0>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){resultingDockMode=QuestDockMode.COLLAPSED;}if(resultingDockMode===QuestDockMode.EXPANDED){runOnJS(onExpand)();}runOnJS(setRestingQuestDockMode)(resultingDockMode);}" };
const __initData2 = { code: "function QuestDockGestureDetectorTsx2(event_1){const{initialGestureOffset,minExpandedContentHeight,activeQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR,QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT,questDockWrapperSpecs,youBarHeight,getQuestDockExpandedWidth,windowDimensions,safeArea,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,QUEST_DOCK_CLOSED_HEIGHT,QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR,getQuestDockClosedWidth,QUEST_DOCK_COLLAPSED_HEIGHT,QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR,questDockOffset,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockCollapsedWidth,youBarHorizontalMargin}=this.__closure;var deltaY=event_1.absoluteY-initialGestureOffset.get().absoluteY;var expandedContentHeight=minExpandedContentHeight.get();var nextHeight=initialGestureOffset.get().height-deltaY;if(nextHeight>expandedContentHeight&&activeQuestDockMode.get()===QuestDockMode.EXPANDED){var overage=nextHeight-expandedContentHeight;var additionalHeight=overage*QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR;nextHeight=expandedContentHeight+additionalHeight;}var expandedModeTransitionHeight=minExpandedContentHeight.get()>0?Math.min(minExpandedContentHeight.get(),QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT):QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;if(nextHeight>=expandedModeTransitionHeight){if(!initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:true});}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:0,width:getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:Math.min(nextHeight,windowDimensions.get().height),prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.EXPANDED);}else{if(nextHeight<QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){if(activeQuestDockMode.get()===QuestDockMode.CLOSED){var progress=1-Math.min(nextHeight,0)/QUEST_DOCK_CLOSED_HEIGHT;var newChange=progress*(QUEST_DOCK_CLOSED_HEIGHT-nextHeight);var nextY=newChange*QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR;var isDraggingDown=newChange>0;questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:isDraggingDown?nextY:0,width:getQuestDockClosedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:isDraggingDown?QUEST_DOCK_CLOSED_HEIGHT:nextHeight,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.CLOSED);}}else{var progress_0=nextHeight/QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;var yOffset=(nextHeight-QUEST_DOCK_COLLAPSED_HEIGHT)*-1;var newChange_0=yOffset*(1-progress_0/QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR);questDockOffset.set(youBarHeight>0?-Math.min(newChange_0,0):0);if(initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:false});}if(QUEST_DOCK_COLLAPSED_HEIGHT!==questDockWrapperSpecs.get().height&&activeQuestDockMode.get()!==QuestDockMode.EXPANDED){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED*-1+(youBarHeight>0?Math.min(newChange_0,0):newChange_0),width:getQuestDockCollapsedWidth(windowDimensions.get().width,youBarHeight>0?youBarHorizontalMargin:safeArea.get().left,youBarHeight>0?youBarHorizontalMargin:safeArea.get().right),height:QUEST_DOCK_COLLAPSED_HEIGHT,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.COLLAPSED);}}}" };
const __initData3 = { code: "function QuestDockGestureDetectorTsx3(event_0){const{State,initialGestureOffset,touchMoveCount,QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD,restingQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM,QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM,questDockWrapperSpecs}=this.__closure;if(event_0.state!==State.BEGAN||initialGestureOffset.get().active){return;}touchMoveCount.set(touchMoveCount.get()+1);var isDragging=touchMoveCount.get()<=QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD;var _event_0$changedTouch=event_0.changedTouches[0],absoluteY=_event_0$changedTouch.absoluteY,absoluteX=_event_0$changedTouch.absoluteX;var computed=initialGestureOffset.get().absoluteY-absoluteY;var computedAbsolute=Math.abs(computed);if(restingQuestDockMode.get()===QuestDockMode.EXPANDED&&isDragging&&computed>=0){return;}if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.EXPANDED&&(computed<-QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM)||restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed>0&&computed>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM){initialGestureOffset.set({absoluteX:absoluteX,absoluteY:absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:true});}}" };
const __initData4 = { code: "function QuestDockGestureDetectorTsx4(event){const{touchMoveCount,initialGestureOffset,questDockWrapperSpecs,restingQuestDockMode,QuestDockMode}=this.__closure;touchMoveCount.set(0);initialGestureOffset.set({absoluteX:event.changedTouches[0].absoluteX,absoluteY:event.changedTouches[0].absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:false});}" };
const __initData5 = { code: "function QuestDockGestureDetectorTsx5(){const{activeQuestDockMode,isVisibleSharedValue}=this.__closure;return{mode:activeQuestDockMode.get(),isVisible:isVisibleSharedValue.get()};}" };
const __initData6 = { code: "function QuestDockGestureDetectorTsx6(current,previous){const{QuestDockMode,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current.mode===(previous===null||previous===void 0?void 0:previous.mode)||current.mode===QuestDockMode.CLOSED||(previous===null||previous===void 0?void 0:previous.mode)===QuestDockMode.CLOSED||!current.isVisible){return;}runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}" };
let closure_24 = { code: "function QuestDockGestureDetectorTsx7(event_2){const{QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY,restingQuestDockMode,QuestDockMode,initialGestureOffset,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,runOnJS,onExpand,setRestingQuestDockMode}=this.__closure;const{velocityY:velocityY,y:y}=event_2;const absoluteVelocityY=Math.abs(velocityY);const absoluteY_0=Math.abs(y);let resultingDockMode;if(absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&velocityY<0){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else if(absoluteVelocityY<QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&initialGestureOffset.get().isDrawer){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY||y>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT)){resultingDockMode=QuestDockMode.SOFT_DISMISSED;}else if(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()!==QuestDockMode.COLLAPSED){resultingDockMode=QuestDockMode.COLLAPSED;}else if(velocityY<0&&absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.COLLAPSED;}else{if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED||restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.COLLAPSED;}}if(restingQuestDockMode.get()===QuestDockMode.CLOSED&&resultingDockMode!==QuestDockMode.EXPANDED&&y<0&&absoluteY_0>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){resultingDockMode=QuestDockMode.COLLAPSED;}if(resultingDockMode===QuestDockMode.EXPANDED){runOnJS(onExpand)();}runOnJS(setRestingQuestDockMode)(resultingDockMode);}" };
let closure_25 = { code: "function QuestDockGestureDetectorTsx8(event_1){const{initialGestureOffset,minExpandedContentHeight,activeQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR,QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT,questDockWrapperSpecs,youBarHeight,getQuestDockExpandedWidth,windowDimensions,safeArea,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,QUEST_DOCK_CLOSED_HEIGHT,QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR,getQuestDockClosedWidth,QUEST_DOCK_COLLAPSED_HEIGHT,QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR,questDockOffset,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockCollapsedWidth,youBarHorizontalMargin}=this.__closure;const deltaY=event_1.absoluteY-initialGestureOffset.get().absoluteY;const expandedContentHeight=minExpandedContentHeight.get();let nextHeight=initialGestureOffset.get().height-deltaY;if(nextHeight>expandedContentHeight&&activeQuestDockMode.get()===QuestDockMode.EXPANDED){const overage=nextHeight-expandedContentHeight;const additionalHeight=overage*QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR;nextHeight=expandedContentHeight+additionalHeight;}const expandedModeTransitionHeight=minExpandedContentHeight.get()>0?Math.min(minExpandedContentHeight.get(),QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT):QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;if(nextHeight>=expandedModeTransitionHeight){if(!initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:true});}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:0,width:getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:Math.min(nextHeight,windowDimensions.get().height),prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.EXPANDED);}else if(nextHeight<QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){if(activeQuestDockMode.get()===QuestDockMode.CLOSED){const progress=1-Math.min(nextHeight,0)/QUEST_DOCK_CLOSED_HEIGHT;const newChange=progress*(QUEST_DOCK_CLOSED_HEIGHT-nextHeight);const nextY=newChange*QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR;const isDraggingDown=newChange>0;questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:isDraggingDown?nextY:0,width:getQuestDockClosedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:isDraggingDown?QUEST_DOCK_CLOSED_HEIGHT:nextHeight,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.CLOSED);}}else{const progress_0=nextHeight/QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;const yOffset=(nextHeight-QUEST_DOCK_COLLAPSED_HEIGHT)*-1;const newChange_0=yOffset*(1-progress_0/QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR);questDockOffset.set(youBarHeight>0?-Math.min(newChange_0,0):0);if(initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:false});}if(QUEST_DOCK_COLLAPSED_HEIGHT!==questDockWrapperSpecs.get().height&&activeQuestDockMode.get()!==QuestDockMode.EXPANDED){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED*-1+(youBarHeight>0?Math.min(newChange_0,0):newChange_0),width:getQuestDockCollapsedWidth(windowDimensions.get().width,youBarHeight>0?youBarHorizontalMargin:safeArea.get().left,youBarHeight>0?youBarHorizontalMargin:safeArea.get().right),height:QUEST_DOCK_COLLAPSED_HEIGHT,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.COLLAPSED);}}" };
let closure_26 = { code: "function QuestDockGestureDetectorTsx9(event_0){const{State,initialGestureOffset,touchMoveCount,QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD,restingQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM,QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM,questDockWrapperSpecs}=this.__closure;if(event_0.state!==State.BEGAN||initialGestureOffset.get().active){return;}touchMoveCount.set(touchMoveCount.get()+1);const isDragging=touchMoveCount.get()<=QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD;const{absoluteY:absoluteY,absoluteX:absoluteX}=event_0.changedTouches[0];const computed=initialGestureOffset.get().absoluteY-absoluteY;const computedAbsolute=Math.abs(computed);if(restingQuestDockMode.get()===QuestDockMode.EXPANDED&&isDragging&&computed>=0){return;}if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.EXPANDED&&(computed<-QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM)||restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed>0&&computed>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM){initialGestureOffset.set({absoluteX:absoluteX,absoluteY:absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:true});}}" };
let closure_27 = { code: "function QuestDockGestureDetectorTsx10(event){const{touchMoveCount,initialGestureOffset,questDockWrapperSpecs,restingQuestDockMode,QuestDockMode}=this.__closure;touchMoveCount.set(0);initialGestureOffset.set({absoluteX:event.changedTouches[0].absoluteX,absoluteY:event.changedTouches[0].absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:false});}" };
const __initData7 = { code: "function QuestDockGestureDetectorTsx11(){const{activeQuestDockMode,isVisibleSharedValue}=this.__closure;return{mode:activeQuestDockMode.get(),isVisible:isVisibleSharedValue.get()};}" };
const __initData8 = { code: "function QuestDockGestureDetectorTsx12(current,previous){const{QuestDockMode,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current.mode===(previous===null||previous===void 0?void 0:previous.mode)||current.mode===QuestDockMode.CLOSED||(previous===null||previous===void 0?void 0:previous.mode)===QuestDockMode.CLOSED||!current.isVisible){return;}runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}" };
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = questDockExpandHandler(activeQuestDockMode[5]).c(43);
  let obj = questDockExpandHandler(activeQuestDockMode[5]);
  const questDockCreative = questDockExpandHandler(activeQuestDockMode[6]).useQuestDockCreative();
  let obj2 = questDockExpandHandler(activeQuestDockMode[6]);
  questDockExpandHandler = questDockExpandHandler(activeQuestDockMode[7]).useQuestDockExpandHandler(questDockCreative);
  const context = windowDimensions.useContext(questDockExpandHandler(activeQuestDockMode[8]).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  windowDimensions = context.windowDimensions;
  const minExpandedContentHeight = context.minExpandedContentHeight;
  const tmp7 = context.questDockWrapperSpecs(activeQuestDockMode[9])();
  QUEST_DOCK_COLLAPSED_HEIGHT = tmp7;
  const context1 = windowDimensions.useContext(questDockExpandHandler(activeQuestDockMode[10]).QuestDockExternalCoordinationContext);
  const restingQuestDockMode = context1.restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  const questDockOffset = context1.questDockOffset;
  const isVisibleToUser = windowDimensions.useContext(questDockWrapperSpecs(activeQuestDockMode[11])).isVisibleToUser;
  let obj3 = questDockExpandHandler(activeQuestDockMode[7]);
  const obj4 = windowDimensions;
  let point = { absoluteX: 0, absoluteY: 0, x: 0, y: 0, height: 0, isDrawer: restingQuestDockMode.get() === minExpandedContentHeight.EXPANDED, active: false };
  const sharedValue = questDockExpandHandler(activeQuestDockMode[12]).useSharedValue(point);
  let obj5 = questDockExpandHandler(activeQuestDockMode[12]);
  const sharedValue1 = questDockExpandHandler(activeQuestDockMode[12]).useSharedValue(0);
  let obj7 = questDockExpandHandler(activeQuestDockMode[12]);
  const sharedValue2 = questDockExpandHandler(activeQuestDockMode[12]).useSharedValue(isVisibleToUser);
  const obj8 = questDockExpandHandler(activeQuestDockMode[12]);
  const youBarTotalHeight = questDockExpandHandler(activeQuestDockMode[13]).useYouBarTotalHeight();
  let obj9 = questDockExpandHandler(activeQuestDockMode[13]);
  const youBarHorizontalMargin = questDockExpandHandler(activeQuestDockMode[14]).useYouBarHorizontalMargin();
  if (cResult[0] === sharedValue2) {
    if (cResult[1] === isVisibleToUser) {
      let tmp15 = cResult[2];
      let tmp16 = cResult[3];
    }
    const effect = obj4.useEffect(tmp15, tmp16);
    if (cResult[4] === activeQuestDockMode) {
      if (cResult[5] === sharedValue) {
        if (cResult[6] === minExpandedContentHeight) {
          if (cResult[7] === questDockExpandHandler) {
            if (cResult[8] === questDockOffset) {
              if (cResult[9] === questDockWrapperSpecs) {
                if (cResult[10] === restingQuestDockMode) {
                  if (cResult[11] === tmp7) {
                    if (cResult[12] === setRestingQuestDockMode) {
                      if (cResult[13] === sharedValue1) {
                        if (cResult[14] === windowDimensions) {
                          if (cResult[15] === youBarTotalHeight) {
                            if (cResult[16] === youBarHorizontalMargin) {
                              function ee() {
                                return { mode: activeQuestDockMode.get(), isVisible: sharedValue2.get() };
                              }
                              let obj6 = { activeQuestDockMode: null, isVisibleSharedValue: null };
                              class QuestDockGestureDetectorTsx4 {
                                constructor(arg0) {
                                  result = closure_11.set(0);
                                  point = { absoluteX: arg0.changedTouches[0].absoluteX, absoluteY: arg0.changedTouches[0].absoluteY, x: questDockWrapperSpecs.get().x, y: questDockWrapperSpecs.get().y, height: questDockWrapperSpecs.get().height, isDrawer: restingQuestDockMode.get() === QuestDockMode.EXPANDED, active: false };
                                  result1 = closure_10.set(point);
                                  return;
                                }
                              }
                              obj6.isVisibleSharedValue = sharedValue2;
                              ee.__closure = obj6;
                              ee.__workletHash = 13629688537260;
                              ee.__initData = __initData5;
                              class Z {
                                constructor(arg0, arg1) {
                                  mode = undefined;
                                  if (arg1 != null) {
                                    mode = arg1.mode;
                                  }
                                  isVisible = arg0.mode !== mode;
                                  if (isVisible) {
                                    tmp2 = minExpandedContentHeight;
                                    isVisible = arg0.mode !== minExpandedContentHeight.CLOSED;
                                  }
                                  if (isVisible) {
                                    mode1 = undefined;
                                    if (arg1 != null) {
                                      mode1 = arg1.mode;
                                    }
                                    tmp4 = minExpandedContentHeight;
                                    isVisible = mode1 !== minExpandedContentHeight.CLOSED;
                                  }
                                  if (isVisible) {
                                    isVisible = arg0.isVisible;
                                  }
                                  if (isVisible) {
                                    tmp5 = closure_0;
                                    tmp6 = activeQuestDockMode;
                                    obj = closure_0(activeQuestDockMode[12]);
                                    runOnJSResult = obj.runOnJS(closure_0(activeQuestDockMode[17]).triggerHapticFeedback);
                                    tmp7Result = runOnJSResult(closure_0(activeQuestDockMode[17]).HapticFeedbackTypes.IMPACT_MEDIUM);
                                  }
                                  return;
                                }
                              }
                              let obj11 = { QuestDockMode: tmp9, runOnJS: tmp(tmp2[12]).runOnJS, triggerHapticFeedback: tmp(tmp2[17]).triggerHapticFeedback, HapticFeedbackTypes: tmp(tmp2[17]).HapticFeedbackTypes };
                              Z.__closure = obj11;
                              Z.__workletHash = 17417080823410;
                              Z.__initData = __initData6;
                              const animatedReaction = tmp(tmp2[12]).useAnimatedReaction(ee, Z);
                              return cResult[17];
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
    if (cResult[18] === sharedValue) {
      if (cResult[19] === questDockWrapperSpecs) {
        if (cResult[20] === restingQuestDockMode) {
          if (cResult[21] === sharedValue1) {
            let tmp18 = cResult[22];
          }
          if (cResult[23] === sharedValue) {
            if (cResult[24] === questDockWrapperSpecs) {
              if (cResult[25] === restingQuestDockMode) {
                if (cResult[26] === sharedValue1) {
                  let tmp20 = cResult[27];
                }
                if (cResult[28] === activeQuestDockMode) {
                  if (cResult[29] === sharedValue) {
                    if (cResult[30] === minExpandedContentHeight) {
                      if (cResult[31] === questDockOffset) {
                        if (cResult[32] === questDockWrapperSpecs) {
                          if (cResult[33] === tmp7) {
                            if (cResult[34] === windowDimensions) {
                              if (cResult[35] === youBarTotalHeight) {
                                if (cResult[36] === youBarHorizontalMargin) {
                                  let tmp24 = cResult[37];
                                }
                                if (cResult[38] === sharedValue) {
                                  if (cResult[39] === questDockExpandHandler) {
                                    if (cResult[40] === restingQuestDockMode) {
                                      const Gesture = tmp(tmp2[15]).Gesture;
                                      class QuestDockGestureDetectorTsx1 {
                                        constructor(arg0) {
                                          ({ velocityY, y } = arg0);
                                          absolute = Math.abs(velocityY);
                                          tmp3 = closure_12;
                                          if (absolute <= closure_12) {
                                            if (absolute < tmp3) {
                                              tmp4 = closure_10;
                                            }
                                            obj = restingQuestDockMode;
                                            tmp5 = QuestDockMode;
                                            if (restingQuestDockMode.get() !== QuestDockMode.COLLAPSED) {
                                              if (velocityY <= tmp3) {
                                                num2 = 0;
                                                if (velocityY < 0) {
                                                  if (absolute > tmp3) {
                                                  }
                                                }
                                                if (obj.get() !== tmp5.COLLAPSED) {
                                                  if (obj.get() !== tmp5.CLOSED) {
                                                    COLLAPSED = tmp5.COLLAPSED;
                                                  }
                                                }
                                                COLLAPSED = tmp5.RESET_TO_PREVIOUS;
                                              }
                                              COLLAPSED = tmp5.COLLAPSED;
                                            } else {
                                              if (velocityY <= tmp3) {
                                                tmp20 = closure_11;
                                              }
                                              COLLAPSED = tmp5.SOFT_DISMISSED;
                                            }
                                            tmp6 = obj;
                                            tmp10 = obj.get() === tmp5.CLOSED && COLLAPSED !== tmp5.EXPANDED;
                                            if (tmp10) {
                                              num3 = 0;
                                              tmp10 = y < 0;
                                            }
                                            if (tmp10) {
                                              tmp11 = closure_11;
                                              tmp10 = tmp2 > closure_11;
                                            }
                                            if (tmp10) {
                                              COLLAPSED = tmp5.COLLAPSED;
                                            }
                                            if (COLLAPSED === tmp5.EXPANDED) {
                                              tmp12 = closure_0;
                                              tmp13 = closure_2;
                                              obj2 = closure_0(closure_2[12]);
                                              tmp14 = closure_0;
                                              tmp15 = obj2.runOnJS(closure_0)();
                                            }
                                            tmp16 = closure_0;
                                            tmp17 = closure_2;
                                            obj3 = closure_0(closure_2[12]);
                                            tmp18 = setRestingQuestDockMode;
                                            tmp19 = obj3.runOnJS(setRestingQuestDockMode)(COLLAPSED);
                                            return;
                                          } else {
                                            num = 0;
                                          }
                                          tmp7 = restingQuestDockMode;
                                          tmp8 = QuestDockMode;
                                          tmp9 = restingQuestDockMode.get() === QuestDockMode.EXPANDED ? tmp8.RESET_TO_PREVIOUS : tmp8.EXPANDED;
                                          return;
                                        }
                                      }
                                      class QuestDockGestureDetectorTsx4 {
                                        constructor(arg0) {
                                          result = closure_11.set(0);
                                          point = { absoluteX: arg0.changedTouches[0].absoluteX, absoluteY: arg0.changedTouches[0].absoluteY, x: questDockWrapperSpecs.get().x, y: questDockWrapperSpecs.get().y, height: questDockWrapperSpecs.get().height, isDrawer: restingQuestDockMode.get() === QuestDockMode.EXPANDED, active: false };
                                          result1 = closure_10.set(point);
                                          return;
                                        }
                                      }
                                      let result = obj15.maxPointers(1).shouldCancelWhenOutside(false);
                                      const maxPointersResult = obj15.maxPointers(1);
                                      const onTouchesDownResult = result.onTouchesDown(tmp18);
                                      result.onTouchesDown(tmp18).onTouchesMove(tmp20).onChange(tmp24);
                                      class Z {
                                        constructor(arg0, arg1) {
                                          mode = undefined;
                                          if (arg1 != null) {
                                            mode = arg1.mode;
                                          }
                                          isVisible = arg0.mode !== mode;
                                          if (isVisible) {
                                            tmp2 = minExpandedContentHeight;
                                            isVisible = arg0.mode !== minExpandedContentHeight.CLOSED;
                                          }
                                          if (isVisible) {
                                            mode1 = undefined;
                                            if (arg1 != null) {
                                              mode1 = arg1.mode;
                                            }
                                            tmp4 = minExpandedContentHeight;
                                            isVisible = mode1 !== minExpandedContentHeight.CLOSED;
                                          }
                                          if (isVisible) {
                                            isVisible = arg0.isVisible;
                                          }
                                          if (isVisible) {
                                            tmp5 = closure_0;
                                            tmp6 = activeQuestDockMode;
                                            obj = closure_0(activeQuestDockMode[12]);
                                            runOnJSResult = obj.runOnJS(closure_0(activeQuestDockMode[17]).triggerHapticFeedback);
                                            tmp7Result = runOnJSResult(closure_0(activeQuestDockMode[17]).HapticFeedbackTypes.IMPACT_MEDIUM);
                                          }
                                          return;
                                        }
                                      }
                                      cResult[4] = activeQuestDockMode;
                                      cResult[5] = sharedValue;
                                      cResult[6] = minExpandedContentHeight;
                                      cResult[7] = questDockExpandHandler;
                                      cResult[8] = questDockOffset;
                                      cResult[9] = questDockWrapperSpecs;
                                      cResult[10] = restingQuestDockMode;
                                      cResult[11] = tmp7;
                                      cResult[12] = setRestingQuestDockMode;
                                      cResult[13] = sharedValue1;
                                      cResult[14] = windowDimensions;
                                      cResult[15] = youBarTotalHeight;
                                      cResult[16] = youBarHorizontalMargin;
                                      cResult[17] = tmp38;
                                      const onTouchesMoveResult = result.onTouchesDown(tmp18).onTouchesMove(tmp20);
                                    }
                                  }
                                }
                                class QuestDockGestureDetectorTsx1 {
                                  constructor(arg0) {
                                    ({ velocityY, y } = arg0);
                                    absolute = Math.abs(velocityY);
                                    tmp3 = closure_12;
                                    if (absolute <= closure_12) {
                                      if (absolute < tmp3) {
                                        tmp4 = closure_10;
                                      }
                                      obj = restingQuestDockMode;
                                      tmp5 = QuestDockMode;
                                      if (restingQuestDockMode.get() !== QuestDockMode.COLLAPSED) {
                                        if (velocityY <= tmp3) {
                                          num2 = 0;
                                          if (velocityY < 0) {
                                            if (absolute > tmp3) {
                                            }
                                          }
                                          if (obj.get() !== tmp5.COLLAPSED) {
                                            if (obj.get() !== tmp5.CLOSED) {
                                              COLLAPSED = tmp5.COLLAPSED;
                                            }
                                          }
                                          COLLAPSED = tmp5.RESET_TO_PREVIOUS;
                                        }
                                        COLLAPSED = tmp5.COLLAPSED;
                                      } else {
                                        if (velocityY <= tmp3) {
                                          tmp20 = closure_11;
                                        }
                                        COLLAPSED = tmp5.SOFT_DISMISSED;
                                      }
                                      tmp6 = obj;
                                      tmp10 = obj.get() === tmp5.CLOSED && COLLAPSED !== tmp5.EXPANDED;
                                      if (tmp10) {
                                        num3 = 0;
                                        tmp10 = y < 0;
                                      }
                                      if (tmp10) {
                                        tmp11 = closure_11;
                                        tmp10 = tmp2 > closure_11;
                                      }
                                      if (tmp10) {
                                        COLLAPSED = tmp5.COLLAPSED;
                                      }
                                      if (COLLAPSED === tmp5.EXPANDED) {
                                        tmp12 = closure_0;
                                        tmp13 = closure_2;
                                        obj2 = closure_0(closure_2[12]);
                                        tmp14 = closure_0;
                                        tmp15 = obj2.runOnJS(closure_0)();
                                      }
                                      tmp16 = closure_0;
                                      tmp17 = closure_2;
                                      obj3 = closure_0(closure_2[12]);
                                      tmp18 = setRestingQuestDockMode;
                                      tmp19 = obj3.runOnJS(setRestingQuestDockMode)(COLLAPSED);
                                      return;
                                    } else {
                                      num = 0;
                                    }
                                    tmp7 = restingQuestDockMode;
                                    tmp8 = QuestDockMode;
                                    tmp9 = restingQuestDockMode.get() === QuestDockMode.EXPANDED ? tmp8.RESET_TO_PREVIOUS : tmp8.EXPANDED;
                                    return;
                                  }
                                }
                                let obj12 = { QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY: null, restingQuestDockMode: null, QuestDockMode: null, initialGestureOffset: null, QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: null, runOnJS: null, onExpand: null, setRestingQuestDockMode: null };
                                class QuestDockGestureDetectorTsx4 {
                                  constructor(arg0) {
                                    result = closure_11.set(0);
                                    point = { absoluteX: arg0.changedTouches[0].absoluteX, absoluteY: arg0.changedTouches[0].absoluteY, x: questDockWrapperSpecs.get().x, y: questDockWrapperSpecs.get().y, height: questDockWrapperSpecs.get().height, isDrawer: restingQuestDockMode.get() === QuestDockMode.EXPANDED, active: false };
                                    result1 = closure_10.set(point);
                                    return;
                                  }
                                }
                                obj12.QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY = sharedValue2;
                                obj12.restingQuestDockMode = restingQuestDockMode;
                                obj12.QuestDockMode = tmp9;
                                obj12.initialGestureOffset = sharedValue;
                                obj12.QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT = sharedValue1;
                                class Z {
                                  constructor(arg0, arg1) {
                                    mode = undefined;
                                    if (arg1 != null) {
                                      mode = arg1.mode;
                                    }
                                    isVisible = arg0.mode !== mode;
                                    if (isVisible) {
                                      tmp2 = minExpandedContentHeight;
                                      isVisible = arg0.mode !== minExpandedContentHeight.CLOSED;
                                    }
                                    if (isVisible) {
                                      mode1 = undefined;
                                      if (arg1 != null) {
                                        mode1 = arg1.mode;
                                      }
                                      tmp4 = minExpandedContentHeight;
                                      isVisible = mode1 !== minExpandedContentHeight.CLOSED;
                                    }
                                    if (isVisible) {
                                      isVisible = arg0.isVisible;
                                    }
                                    if (isVisible) {
                                      tmp5 = closure_0;
                                      tmp6 = activeQuestDockMode;
                                      obj = closure_0(activeQuestDockMode[12]);
                                      runOnJSResult = obj.runOnJS(closure_0(activeQuestDockMode[17]).triggerHapticFeedback);
                                      tmp7Result = runOnJSResult(closure_0(activeQuestDockMode[17]).HapticFeedbackTypes.IMPACT_MEDIUM);
                                    }
                                    return;
                                  }
                                }
                                obj12.onExpand = questDockExpandHandler;
                                obj12.setRestingQuestDockMode = setRestingQuestDockMode;
                                QuestDockGestureDetectorTsx1.__closure = obj12;
                                QuestDockGestureDetectorTsx1.__workletHash = 14419573361023;
                                QuestDockGestureDetectorTsx1.__initData = __initData;
                                cResult[38] = sharedValue;
                                cResult[39] = questDockExpandHandler;
                                cResult[40] = restingQuestDockMode;
                                cResult[41] = setRestingQuestDockMode;
                                cResult[42] = QuestDockGestureDetectorTsx1;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                class QuestDockGestureDetectorTsx2 {
                  constructor(arg0) {
                    obj = closure_10;
                    diff = arg0.absoluteY - closure_10.get().absoluteY;
                    obj2 = minExpandedContentHeight;
                    value = minExpandedContentHeight.get();
                    diff1 = closure_10.get().height - diff;
                    tmp4 = diff1 > value;
                    if (tmp4) {
                      tmp5 = activeQuestDockMode;
                      tmp6 = QuestDockMode;
                      tmp4 = activeQuestDockMode.get() === QuestDockMode.EXPANDED;
                    }
                    sum = diff1;
                    if (tmp4) {
                      tmp8 = closure_16;
                      sum = value + (diff1 - value) * closure_16;
                    }
                    if (obj2.get() > 0) {
                      tmp10 = globalThis;
                      _Math = Math;
                      tmp11 = closure_10;
                      bound = Math.min(obj2.get(), closure_10);
                    } else {
                      bound = closure_10;
                    }
                    if (sum >= bound) {
                      if (!obj.get().isDrawer) {
                        obj1 = {};
                        tmp53 = obj1;
                        merged = Object.assign(obj.get());
                        flag2 = true;
                        obj1.isDrawer = true;
                        result = obj.set(obj1);
                      }
                      obj14 = {};
                      tmp56 = questDockWrapperSpecs;
                      tmp57 = obj14;
                      merged1 = Object.assign(questDockWrapperSpecs.get());
                      obj14.x = 0;
                      num3 = 0;
                      if (closure_13 > 0) {
                        num3 = closure_13;
                      }
                      obj14.y = num3;
                      tmp59 = closure_0;
                      tmp60 = closure_2;
                      obj12 = closure_0(closure_2[16]);
                      tmp61 = windowDimensions;
                      tmp62 = closure_5;
                      obj14.width = obj12.getQuestDockExpandedWidth(windowDimensions.get().width, closure_5.get().left, closure_5.get().right);
                      tmp63 = globalThis;
                      _Math4 = Math;
                      obj14.height = Math.min(sum, windowDimensions.get().height);
                      obj14.prevDeltaY = diff;
                      result1 = questDockWrapperSpecs.set(obj14);
                      tmp65 = activeQuestDockMode;
                      tmp66 = QuestDockMode;
                      result2 = activeQuestDockMode.set(QuestDockMode.EXPANDED);
                    } else {
                      tmp68 = closure_11;
                      if (sum < closure_11) {
                        obj8 = activeQuestDockMode;
                        tmp43 = QuestDockMode;
                        if (activeQuestDockMode.get() === QuestDockMode.CLOSED) {
                          tmp75 = globalThis;
                          _Math5 = Math;
                          num6 = 1;
                          result3 = (1 - Math.min(sum, 0) / QUEST_DOCK_CLOSED_HEIGHT) * (QUEST_DOCK_CLOSED_HEIGHT - sum);
                          obj15 = {};
                          tmp76 = QUEST_DOCK_CLOSED_HEIGHT;
                          tmp78 = questDockWrapperSpecs;
                          tmp79 = obj15;
                          merged2 = Object.assign(questDockWrapperSpecs.get());
                          obj15.x = 0;
                          num2 = 0;
                          if (0 < result3) {
                            tmp44 = closure_15;
                            num2 = result3 * closure_15;
                          }
                          obj15.y = num2;
                          tmp45 = closure_0;
                          tmp46 = closure_2;
                          obj9 = closure_0(closure_2[16]);
                          tmp47 = windowDimensions;
                          tmp48 = closure_5;
                          obj15.width = obj9.getQuestDockClosedWidth(windowDimensions.get().width, closure_5.get().left, closure_5.get().right);
                          tmp49 = sum;
                          if (0 < result3) {
                            tmp49 = tmp76;
                          }
                          obj15.height = tmp49;
                          obj15.prevDeltaY = diff;
                          result4 = questDockWrapperSpecs.set(obj15);
                          tmp51 = QuestDockMode;
                          result5 = obj8.set(QuestDockMode.CLOSED);
                        }
                      } else {
                        tmp69 = closure_5;
                        num4 = -1;
                        tmp70 = closure_10;
                        tmp71 = closure_14;
                        num5 = 1;
                        result6 = -1 * (sum - closure_5) * (1 - sum / closure_10 / closure_14);
                        tmp74 = closure_13;
                        num = 0;
                        tmp73 = questDockOffset;
                        if (closure_13 > 0) {
                          tmp12 = globalThis;
                          _Math2 = Math;
                          num = -Math.min(result6, 0);
                        }
                        result7 = questDockOffset.set(num);
                        if (obj.get().isDrawer) {
                          obj16 = {};
                          tmp14 = obj16;
                          merged3 = Object.assign(obj.get());
                          flag = false;
                          obj16.isDrawer = false;
                          result8 = obj.set(obj16);
                        }
                        obj4 = questDockWrapperSpecs;
                        tmp17 = tmp69 !== questDockWrapperSpecs.get().height;
                        if (tmp17) {
                          tmp18 = activeQuestDockMode;
                          tmp19 = QuestDockMode;
                          tmp17 = activeQuestDockMode.get() !== QuestDockMode.EXPANDED;
                        }
                        if (tmp17) {
                          tmp20 = closure_0;
                          tmp21 = closure_2;
                          obj5 = closure_0(closure_2[12]);
                          tmp22 = closure_0;
                          tmp23 = closure_2;
                          tmp25 = closure_0;
                          tmp26 = closure_2;
                          runOnJSResult = obj5.runOnJS(closure_0(closure_2[17]).triggerHapticFeedback);
                          tmp24Result = runOnJSResult(closure_0(closure_2[17]).HapticFeedbackTypes.IMPACT_MEDIUM);
                        }
                        obj17 = {};
                        tmp28 = obj17;
                        merged4 = Object.assign(obj4.get());
                        obj17.x = 0;
                        tmp30 = closure_7;
                        bound1 = result6;
                        result9 = -1 * closure_7;
                        if (tmp74 > 0) {
                          tmp33 = globalThis;
                          _Math3 = Math;
                          bound1 = Math.min(result6, 0);
                        }
                        obj17.y = result9 + bound1;
                        tmp34 = closure_0;
                        tmp35 = closure_2;
                        obj7 = closure_0(closure_2[16]);
                        tmp36 = windowDimensions;
                        if (tmp74 > 0) {
                          left = closure_14;
                        } else {
                          tmp37 = closure_5;
                          left = closure_5.get().left;
                        }
                        if (tmp74 > 0) {
                          right = closure_14;
                        } else {
                          tmp38 = closure_5;
                          right = closure_5.get().right;
                        }
                        obj17.width = obj7.getQuestDockCollapsedWidth(windowDimensions.get().width, left, right);
                        obj17.height = tmp69;
                        obj17.prevDeltaY = diff;
                        result10 = obj4.set(obj17);
                        tmp40 = activeQuestDockMode;
                        tmp41 = QuestDockMode;
                        result11 = activeQuestDockMode.set(QuestDockMode.COLLAPSED);
                      }
                    }
                    return;
                  }
                }
                let obj13 = { initialGestureOffset: null, minExpandedContentHeight: null, activeQuestDockMode: null, QuestDockMode: null, QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR: null, QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT: null, questDockWrapperSpecs: null, youBarHeight: null, getQuestDockExpandedWidth: null, windowDimensions: null, safeArea: null, QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: null, QUEST_DOCK_CLOSED_HEIGHT: null, QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR: null, getQuestDockClosedWidth: null, QUEST_DOCK_COLLAPSED_HEIGHT: null, QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR: null, questDockOffset: null, runOnJS: null, triggerHapticFeedback: null, HapticFeedbackTypes: null, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: null, getQuestDockCollapsedWidth: null, youBarHorizontalMargin: null };
                class QuestDockGestureDetectorTsx4 {
                  constructor(arg0) {
                    result = closure_11.set(0);
                    point = { absoluteX: arg0.changedTouches[0].absoluteX, absoluteY: arg0.changedTouches[0].absoluteY, x: questDockWrapperSpecs.get().x, y: questDockWrapperSpecs.get().y, height: questDockWrapperSpecs.get().height, isDrawer: restingQuestDockMode.get() === QuestDockMode.EXPANDED, active: false };
                    result1 = closure_10.set(point);
                    return;
                  }
                }
                obj13.minExpandedContentHeight = minExpandedContentHeight;
                obj13.activeQuestDockMode = activeQuestDockMode;
                obj13.QuestDockMode = tmp9;
                obj13.QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR = closure_16;
                class Z {
                  constructor(arg0, arg1) {
                    mode = undefined;
                    if (arg1 != null) {
                      mode = arg1.mode;
                    }
                    isVisible = arg0.mode !== mode;
                    if (isVisible) {
                      tmp2 = minExpandedContentHeight;
                      isVisible = arg0.mode !== minExpandedContentHeight.CLOSED;
                    }
                    if (isVisible) {
                      mode1 = undefined;
                      if (arg1 != null) {
                        mode1 = arg1.mode;
                      }
                      tmp4 = minExpandedContentHeight;
                      isVisible = mode1 !== minExpandedContentHeight.CLOSED;
                    }
                    if (isVisible) {
                      isVisible = arg0.isVisible;
                    }
                    if (isVisible) {
                      tmp5 = closure_0;
                      tmp6 = activeQuestDockMode;
                      obj = closure_0(activeQuestDockMode[12]);
                      runOnJSResult = obj.runOnJS(closure_0(activeQuestDockMode[17]).triggerHapticFeedback);
                      tmp7Result = runOnJSResult(closure_0(activeQuestDockMode[17]).HapticFeedbackTypes.IMPACT_MEDIUM);
                    }
                    return;
                  }
                }
                obj13.questDockWrapperSpecs = questDockWrapperSpecs;
                obj13.youBarHeight = youBarTotalHeight;
                obj13.getQuestDockExpandedWidth = tmp(tmp2[16]).getQuestDockExpandedWidth;
                obj13.windowDimensions = windowDimensions;
                obj13.safeArea = tmp7;
                obj13.QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT = sharedValue1;
                obj13.QUEST_DOCK_CLOSED_HEIGHT = restingQuestDockMode;
                obj13.QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR = closure_15;
                obj13.getQuestDockClosedWidth = tmp(tmp2[16]).getQuestDockClosedWidth;
                obj13.QUEST_DOCK_COLLAPSED_HEIGHT = QUEST_DOCK_COLLAPSED_HEIGHT;
                obj13.QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR = youBarHorizontalMargin;
                obj13.questDockOffset = questDockOffset;
                obj13.runOnJS = tmp(tmp2[12]).runOnJS;
                obj13.triggerHapticFeedback = tmp(tmp2[17]).triggerHapticFeedback;
                obj13.HapticFeedbackTypes = tmp(tmp2[17]).HapticFeedbackTypes;
                obj13.QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED = setRestingQuestDockMode;
                obj13.getQuestDockCollapsedWidth = tmp(tmp2[16]).getQuestDockCollapsedWidth;
                obj13.youBarHorizontalMargin = youBarHorizontalMargin;
                QuestDockGestureDetectorTsx2.__closure = obj13;
                QuestDockGestureDetectorTsx2.__workletHash = 16442355417789;
                QuestDockGestureDetectorTsx2.__initData = __initData2;
                cResult[28] = activeQuestDockMode;
                cResult[29] = sharedValue;
                cResult[30] = minExpandedContentHeight;
                cResult[31] = questDockOffset;
                cResult[32] = questDockWrapperSpecs;
                cResult[33] = tmp7;
                cResult[34] = windowDimensions;
                cResult[35] = youBarTotalHeight;
                cResult[36] = youBarHorizontalMargin;
                cResult[37] = QuestDockGestureDetectorTsx2;
                tmp24 = QuestDockGestureDetectorTsx2;
              }
            }
          }
          class QuestDockGestureDetectorTsx3 {
            constructor(arg0) {
              if (arg0.state === closure_0(closure_2[15]).State.BEGAN) {
                obj3 = closure_10;
                if (!closure_10.get().active) {
                  tmp = closure_11;
                  num = 1;
                  result = closure_11.set(closure_11.get() + 1);
                  tmp3 = closure_13;
                  first = arg0.changedTouches[0];
                  absoluteY = first.absoluteY;
                  tmp4 = closure_11.get() <= closure_13;
                  diff = obj3.get().absoluteY - absoluteY;
                  tmp7 = globalThis;
                  _Math = Math;
                  absolute = Math.abs(diff);
                  obj = restingQuestDockMode;
                  tmp9 = QuestDockMode;
                  tmp10 = restingQuestDockMode.get() === QuestDockMode.EXPANDED && tmp4;
                  if (tmp10) {
                    num2 = 0;
                    tmp10 = diff >= 0;
                  }
                  if (!tmp10) {
                    tmp11 = obj.get() === tmp9.COLLAPSED;
                    if (tmp11) {
                      tmp12 = closure_8;
                      tmp11 = diff > closure_8;
                    }
                    if (!tmp11) {
                      tmp13 = obj.get() === tmp9.EXPANDED;
                      if (tmp13) {
                        tmp14 = diff < -closure_8 || diff > closure_8;
                        tmp13 = tmp14;
                      }
                      tmp11 = tmp13;
                    }
                    if (!tmp11) {
                      tmp15 = obj.get() === tmp9.COLLAPSED;
                      if (tmp15) {
                        num3 = 0;
                        tmp15 = diff < 0;
                      }
                      if (tmp15) {
                        tmp16 = closure_9;
                        tmp15 = absolute > closure_9;
                      }
                      tmp11 = tmp15;
                    }
                    if (!tmp11) {
                      tmp17 = obj.get() === tmp9.CLOSED;
                      if (tmp17) {
                        num4 = 0;
                        tmp17 = diff > 0;
                      }
                      if (tmp17) {
                        tmp18 = closure_9;
                        tmp17 = diff > closure_9;
                      }
                      tmp11 = tmp17;
                    }
                    if (!tmp11) {
                      tmp19 = obj.get() === tmp9.CLOSED;
                      if (tmp19) {
                        num5 = 0;
                        tmp19 = diff < 0;
                      }
                      if (tmp19) {
                        tmp20 = closure_9;
                        tmp19 = absolute > closure_9;
                      }
                      tmp11 = tmp19;
                    }
                    if (tmp11) {
                      point = { absoluteX: null, absoluteY: null, x: null, y: null, height: null, isDrawer: null, active: true };
                      point.absoluteX = first.absoluteX;
                      point.absoluteY = absoluteY;
                      tmp21 = questDockWrapperSpecs;
                      point.x = questDockWrapperSpecs.get().x;
                      point.y = questDockWrapperSpecs.get().y;
                      point.height = questDockWrapperSpecs.get().height;
                      point.isDrawer = obj.get() === tmp9.EXPANDED;
                      result1 = obj3.set(point);
                    }
                  }
                }
              }
              return;
            }
          }
          const obj14 = { State: null, initialGestureOffset: null, touchMoveCount: null, QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD: null, restingQuestDockMode: null, QuestDockMode: null, QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM: null, QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM: null, questDockWrapperSpecs: null };
          class QuestDockGestureDetectorTsx4 {
            constructor(arg0) {
              result = closure_11.set(0);
              point = { absoluteX: arg0.changedTouches[0].absoluteX, absoluteY: arg0.changedTouches[0].absoluteY, x: questDockWrapperSpecs.get().x, y: questDockWrapperSpecs.get().y, height: questDockWrapperSpecs.get().height, isDrawer: restingQuestDockMode.get() === QuestDockMode.EXPANDED, active: false };
              result1 = closure_10.set(point);
              return;
            }
          }
          obj14.initialGestureOffset = sharedValue;
          obj14.touchMoveCount = sharedValue1;
          obj14.QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD = youBarTotalHeight;
          obj14.restingQuestDockMode = restingQuestDockMode;
          obj14.QuestDockMode = tmp9;
          class Z {
            constructor(arg0, arg1) {
              mode = undefined;
              if (arg1 != null) {
                mode = arg1.mode;
              }
              isVisible = arg0.mode !== mode;
              if (isVisible) {
                tmp2 = minExpandedContentHeight;
                isVisible = arg0.mode !== minExpandedContentHeight.CLOSED;
              }
              if (isVisible) {
                mode1 = undefined;
                if (arg1 != null) {
                  mode1 = arg1.mode;
                }
                tmp4 = minExpandedContentHeight;
                isVisible = mode1 !== minExpandedContentHeight.CLOSED;
              }
              if (isVisible) {
                isVisible = arg0.isVisible;
              }
              if (isVisible) {
                tmp5 = closure_0;
                tmp6 = activeQuestDockMode;
                obj = closure_0(activeQuestDockMode[12]);
                runOnJSResult = obj.runOnJS(closure_0(activeQuestDockMode[17]).triggerHapticFeedback);
                tmp7Result = runOnJSResult(closure_0(activeQuestDockMode[17]).HapticFeedbackTypes.IMPACT_MEDIUM);
              }
              return;
            }
          }
          obj14.QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM = questDockOffset;
          obj14.QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM = isVisibleToUser;
          obj14.questDockWrapperSpecs = questDockWrapperSpecs;
          QuestDockGestureDetectorTsx3.__closure = obj14;
          QuestDockGestureDetectorTsx3.__workletHash = 15038484497055;
          QuestDockGestureDetectorTsx3.__initData = __initData3;
          cResult[23] = sharedValue;
          cResult[24] = questDockWrapperSpecs;
          cResult[25] = restingQuestDockMode;
          cResult[26] = sharedValue1;
          cResult[27] = QuestDockGestureDetectorTsx3;
          tmp20 = QuestDockGestureDetectorTsx3;
        }
      }
    }
    class QuestDockGestureDetectorTsx4 {
      constructor(arg0) {
        result = closure_11.set(0);
        point = { absoluteX: arg0.changedTouches[0].absoluteX, absoluteY: arg0.changedTouches[0].absoluteY, x: questDockWrapperSpecs.get().x, y: questDockWrapperSpecs.get().y, height: questDockWrapperSpecs.get().height, isDrawer: restingQuestDockMode.get() === QuestDockMode.EXPANDED, active: false };
        result1 = closure_10.set(point);
        return;
      }
    }
    const obj16 = { touchMoveCount: sharedValue1, initialGestureOffset: sharedValue, questDockWrapperSpecs, restingQuestDockMode, QuestDockMode: tmp9 };
    QuestDockGestureDetectorTsx4.__workletHash = 15649211210155;
    QuestDockGestureDetectorTsx4.__initData = __initData4;
    cResult[18] = sharedValue;
    cResult[19] = questDockWrapperSpecs;
    cResult[20] = restingQuestDockMode;
    cResult[21] = sharedValue1;
    cResult[22] = QuestDockGestureDetectorTsx4;
    tmp18 = QuestDockGestureDetectorTsx4;
  }
  const fn = function s() {
    const result = sharedValue2.set(isVisibleToUser);
  };
  const items = [isVisibleToUser, sharedValue2];
  cResult[0] = sharedValue2;
  cResult[1] = isVisibleToUser;
  cResult[2] = fn;
  cResult[3] = items;
  tmp16 = items;
  tmp15 = fn;
  let obj10 = questDockExpandHandler(activeQuestDockMode[14]);
}) : (() => {
  const questDockCreative = questDockExpandHandler(activeQuestDockMode[6]).useQuestDockCreative();
  let obj = questDockExpandHandler(activeQuestDockMode[6]);
  questDockExpandHandler = questDockExpandHandler(activeQuestDockMode[7]).useQuestDockExpandHandler(questDockCreative);
  const context = windowDimensions.useContext(questDockExpandHandler(activeQuestDockMode[8]).QuestDockGestureContext);
  const questDockWrapperSpecs = context.questDockWrapperSpecs;
  activeQuestDockMode = context.activeQuestDockMode;
  windowDimensions = context.windowDimensions;
  const minExpandedContentHeight = context.minExpandedContentHeight;
  let tmp4 = questDockWrapperSpecs(activeQuestDockMode[9])();
  const safeArea = tmp4;
  const context1 = windowDimensions.useContext(questDockExpandHandler(activeQuestDockMode[10]).QuestDockExternalCoordinationContext);
  const restingQuestDockMode = context1.restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  const questDockOffset = context1.questDockOffset;
  const isVisibleToUser = windowDimensions.useContext(questDockWrapperSpecs(activeQuestDockMode[11])).isVisibleToUser;
  let obj2 = questDockExpandHandler(activeQuestDockMode[7]);
  let point = { absoluteX: 0, absoluteY: 0, x: 0, y: 0, height: 0, isDrawer: restingQuestDockMode.get() === minExpandedContentHeight.EXPANDED, active: false };
  const sharedValue = questDockExpandHandler(activeQuestDockMode[12]).useSharedValue(point);
  let obj3 = questDockExpandHandler(activeQuestDockMode[12]);
  const sharedValue1 = questDockExpandHandler(activeQuestDockMode[12]).useSharedValue(0);
  let obj5 = questDockExpandHandler(activeQuestDockMode[12]);
  const sharedValue2 = questDockExpandHandler(activeQuestDockMode[12]).useSharedValue(isVisibleToUser);
  let obj6 = questDockExpandHandler(activeQuestDockMode[12]);
  const youBarTotalHeight = questDockExpandHandler(activeQuestDockMode[13]).useYouBarTotalHeight();
  let obj7 = questDockExpandHandler(activeQuestDockMode[13]);
  const youBarHorizontalMargin = questDockExpandHandler(activeQuestDockMode[14]).useYouBarHorizontalMargin();
  const items = [isVisibleToUser, sharedValue2];
  const effect = windowDimensions.useEffect(() => {
    const result = sharedValue2.set(isVisibleToUser);
  }, items);
  const items1 = [restingQuestDockMode, sharedValue, tmp4, sharedValue1, windowDimensions, questDockWrapperSpecs, setRestingQuestDockMode, activeQuestDockMode, minExpandedContentHeight, youBarTotalHeight, youBarHorizontalMargin, questDockOffset, questDockExpandHandler];
  const memo = windowDimensions.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const manualActivationResult = Gesture.Pan().manualActivation(false);
    let result = Gesture.Pan().manualActivation(false).maxPointers(1).shouldCancelWhenOutside(false);
    class G {
      constructor(arg0) {
        result = closure_1_11.set(0);
        point = { absoluteX: arg0.changedTouches[0].absoluteX, absoluteY: arg0.changedTouches[0].absoluteY, x: closure_1_1.get().x, y: closure_1_1.get().y, height: closure_1_1.get().height, isDrawer: closure_1_6.get() === minExpandedContentHeight.EXPANDED, active: false };
        result1 = closure_1_10.set(point);
        return;
      }
    }
    G.__closure = { touchMoveCount: sharedValue1, initialGestureOffset: sharedValue, questDockWrapperSpecs, restingQuestDockMode, QuestDockMode };
    G.__workletHash = 16021508659358;
    G.__initData = __initData4;
    const maxPointersResult = Gesture.Pan().manualActivation(false).maxPointers(1);
    const obj = { touchMoveCount: sharedValue1, initialGestureOffset: sharedValue, questDockWrapperSpecs, restingQuestDockMode, QuestDockMode };
    const fn = function k(state) {
      if (state.state === questDockExpandHandler(activeQuestDockMode[15]).State.BEGAN) {
        if (!sharedValue.get().active) {
          const result = sharedValue1.set(sharedValue1.get() + 1);
          const first = state.changedTouches[0];
          const absoluteY = first.absoluteY;
          const diff = sharedValue.get().absoluteY - absoluteY;
          const _Math = Math;
          const absolute = Math.abs(diff);
          let tmp10 = restingQuestDockMode.get() === minExpandedContentHeight.EXPANDED && sharedValue1.get() <= youBarTotalHeight;
          if (tmp10) {
            tmp10 = diff >= 0;
          }
          if (!tmp10) {
            let tmp11 = restingQuestDockMode.get() === minExpandedContentHeight.COLLAPSED;
            if (tmp11) {
              tmp11 = diff > questDockOffset;
            }
            if (!tmp11) {
              let tmp13 = restingQuestDockMode.get() === minExpandedContentHeight.EXPANDED;
              if (tmp13) {
                tmp13 = diff < -questDockOffset || diff > questDockOffset;
                const tmp14 = diff < -questDockOffset || diff > questDockOffset;
              }
              tmp11 = tmp13;
            }
            if (!tmp11) {
              let tmp15 = restingQuestDockMode.get() === minExpandedContentHeight.COLLAPSED;
              if (tmp15) {
                tmp15 = diff < 0;
              }
              if (tmp15) {
                tmp15 = absolute > isVisibleToUser;
              }
              tmp11 = tmp15;
            }
            if (!tmp11) {
              let tmp17 = restingQuestDockMode.get() === minExpandedContentHeight.CLOSED;
              if (tmp17) {
                tmp17 = diff > 0;
              }
              if (tmp17) {
                tmp17 = diff > isVisibleToUser;
              }
              tmp11 = tmp17;
            }
            if (!tmp11) {
              let tmp19 = restingQuestDockMode.get() === minExpandedContentHeight.CLOSED;
              if (tmp19) {
                tmp19 = diff < 0;
              }
              if (tmp19) {
                tmp19 = absolute > isVisibleToUser;
              }
              tmp11 = tmp19;
            }
            if (tmp11) {
              const point = { absoluteX: first.absoluteX, absoluteY, x: questDockWrapperSpecs.get().x, y: questDockWrapperSpecs.get().y, height: questDockWrapperSpecs.get().height, isDrawer: restingQuestDockMode.get() === minExpandedContentHeight.EXPANDED, active: true };
              const result1 = sharedValue.set(point);
            }
          }
          const tmp4 = sharedValue1.get() <= youBarTotalHeight;
        }
      }
    };
    const onTouchesDownResult = result.onTouchesDown(G);
    fn.__closure = { State: LegacyBaseButton.State, initialGestureOffset: sharedValue, touchMoveCount: sharedValue1, QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD: closure_2_13, restingQuestDockMode, QuestDockMode, QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM: closure_2_8, QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM: options, questDockWrapperSpecs };
    fn.__workletHash = 1210406087328;
    fn.__initData = __initData3;
    let obj2 = { State: LegacyBaseButton.State, initialGestureOffset: sharedValue, touchMoveCount: sharedValue1, QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD: closure_2_13, restingQuestDockMode, QuestDockMode, QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM: closure_2_8, QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM: options, questDockWrapperSpecs };
    const fn2 = function s(absoluteY) {
      const diff = absoluteY.absoluteY - closure_1_10.get().absoluteY;
      value = closure_1_4.get();
      const diff1 = closure_1_10.get().height - diff;
      let tmp4 = diff1 > value;
      if (tmp4) {
        tmp4 = closure_1_2.get() === minExpandedContentHeight.EXPANDED;
      }
      let sum = diff1;
      if (tmp4) {
        sum = value + (diff1 - value) * closure_2_16;
      }
      if (closure_1_4.get() > 0) {
        const _Math = Math;
        let bound = Math.min(closure_1_4.get(), sharedValue);
      } else {
        bound = sharedValue;
      }
      if (sum >= bound) {
        if (!closure_1_10.get().isDrawer) {
          const obj3 = {};
          const merged = Object.assign(closure_1_10.get());
          obj3.isDrawer = true;
          const result = closure_1_10.set(obj3);
        }
        const obj6 = {};
        const merged1 = Object.assign(questDockWrapperSpecs.get());
        obj6.x = 0;
        let num3 = 0;
        if (youBarTotalHeight > 0) {
          num3 = youBarTotalHeight;
        }
        obj6.y = num3;
        obj6.width = questDockExpandHandler(activeQuestDockMode[16]).getQuestDockExpandedWidth(windowDimensions.get().width, safeArea.get().left, safeArea.get().right);
        const _Math4 = Math;
        obj6.height = Math.min(sum, windowDimensions.get().height);
        obj6.prevDeltaY = diff;
        const result1 = questDockWrapperSpecs.set(obj6);
        const result2 = closure_1_2.set(minExpandedContentHeight.EXPANDED);
        const obj12 = questDockExpandHandler(activeQuestDockMode[16]);
      } else if (sum < sharedValue1) {
        if (closure_1_2.get() === minExpandedContentHeight.CLOSED) {
          const _Math5 = Math;
          const result3 = (1 - Math.min(sum, 0) / restingQuestDockMode) * (restingQuestDockMode - sum);
          const obj10 = {};
          const merged2 = Object.assign(questDockWrapperSpecs.get());
          obj10.x = 0;
          let num2 = 0;
          if (0 < result3) {
            num2 = result3 * closure_2_15;
          }
          obj10.y = num2;
          obj10.width = questDockExpandHandler(activeQuestDockMode[16]).getQuestDockClosedWidth(windowDimensions.get().width, safeArea.get().left, safeArea.get().right);
          let tmp49 = sum;
          if (0 < result3) {
            tmp49 = restingQuestDockMode;
          }
          obj10.height = tmp49;
          obj10.prevDeltaY = diff;
          const result4 = questDockWrapperSpecs.set(obj10);
          const result5 = closure_1_2.set(minExpandedContentHeight.CLOSED);
          const obj9 = questDockExpandHandler(activeQuestDockMode[16]);
        }
      } else {
        const result6 = -1 * (sum - height) * (1 - sum / sharedValue / youBarHorizontalMargin);
        let num = 0;
        if (youBarTotalHeight > 0) {
          const _Math2 = Math;
          num = -Math.min(result6, 0);
        }
        const result7 = questDockOffset.set(num);
        if (closure_1_10.get().isDrawer) {
          const obj11 = {};
          const merged3 = Object.assign(closure_1_10.get());
          obj11.isDrawer = false;
          const result8 = closure_1_10.set(obj11);
        }
        let tmp17 = height !== questDockWrapperSpecs.get().height;
        if (tmp17) {
          tmp17 = closure_1_2.get() !== minExpandedContentHeight.EXPANDED;
        }
        if (tmp17) {
          const obj5 = questDockExpandHandler(activeQuestDockMode[12]);
          questDockExpandHandler(activeQuestDockMode[12]).runOnJS(questDockExpandHandler(activeQuestDockMode[17]).triggerHapticFeedback)(questDockExpandHandler(activeQuestDockMode[17]).HapticFeedbackTypes.IMPACT_MEDIUM);
          const runOnJSResult = questDockExpandHandler(activeQuestDockMode[12]).runOnJS(questDockExpandHandler(activeQuestDockMode[17]).triggerHapticFeedback);
        }
        const obj13 = {};
        const merged4 = Object.assign(questDockWrapperSpecs.get());
        obj13.x = 0;
        let bound1 = result6;
        const result9 = -1 * setRestingQuestDockMode;
        if (youBarTotalHeight > 0) {
          const _Math3 = Math;
          bound1 = Math.min(result6, 0);
        }
        obj13.y = result9 + bound1;
        if (youBarTotalHeight > 0) {
          let left = closure_1_14;
        } else {
          left = safeArea.get().left;
        }
        if (youBarTotalHeight > 0) {
          let right = closure_1_14;
        } else {
          right = safeArea.get().right;
        }
        obj13.width = questDockExpandHandler(activeQuestDockMode[16]).getQuestDockCollapsedWidth(windowDimensions.get().width, left, right);
        obj13.height = height;
        obj13.prevDeltaY = diff;
        const result10 = questDockWrapperSpecs.set(obj13);
        const result11 = closure_1_2.set(minExpandedContentHeight.COLLAPSED);
        const obj7 = questDockExpandHandler(activeQuestDockMode[16]);
      }
    };
    const onTouchesMoveResult = onTouchesDownResult.onTouchesMove(fn);
    fn2.__closure = { initialGestureOffset: sharedValue, minExpandedContentHeight, activeQuestDockMode, QuestDockMode, QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR: value2, QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT: v65535, questDockWrapperSpecs, youBarHeight: youBarTotalHeight, getQuestDockExpandedWidth: QuestDockUtils.getQuestDockExpandedWidth, windowDimensions, safeArea, QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: closure_2_11, QUEST_DOCK_CLOSED_HEIGHT, QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR: closure_2_15, getQuestDockClosedWidth: QuestDockUtils.getQuestDockClosedWidth, QUEST_DOCK_COLLAPSED_HEIGHT, QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR: state, questDockOffset, runOnJS: ReanimatedRexport.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED, getQuestDockCollapsedWidth: QuestDockUtils.getQuestDockCollapsedWidth, youBarHorizontalMargin };
    fn2.__workletHash = 11177136508521;
    fn2.__initData = __initData2;
    let obj3 = { initialGestureOffset: sharedValue, minExpandedContentHeight, activeQuestDockMode, QuestDockMode, QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR: value2, QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT: v65535, questDockWrapperSpecs, youBarHeight: youBarTotalHeight, getQuestDockExpandedWidth: QuestDockUtils.getQuestDockExpandedWidth, windowDimensions, safeArea, QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: closure_2_11, QUEST_DOCK_CLOSED_HEIGHT, QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR: closure_2_15, getQuestDockClosedWidth: QuestDockUtils.getQuestDockClosedWidth, QUEST_DOCK_COLLAPSED_HEIGHT, QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR: state, questDockOffset, runOnJS: ReanimatedRexport.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED, getQuestDockCollapsedWidth: QuestDockUtils.getQuestDockCollapsedWidth, youBarHorizontalMargin };
    const fn3 = function t(arg0) {
      ({ velocityY, y } = arg0);
      const absolute = Math.abs(velocityY);
      if (absolute <= sharedValue2) {
        if (restingQuestDockMode.get() !== minExpandedContentHeight.COLLAPSED) {
          if (velocityY <= sharedValue2) {
            if (restingQuestDockMode.get() !== minExpandedContentHeight.COLLAPSED) {
              if (restingQuestDockMode.get() !== minExpandedContentHeight.CLOSED) {
                let COLLAPSED = minExpandedContentHeight.COLLAPSED;
              }
            }
            COLLAPSED = minExpandedContentHeight.RESET_TO_PREVIOUS;
          }
          COLLAPSED = minExpandedContentHeight.COLLAPSED;
        } else {
          COLLAPSED = minExpandedContentHeight.SOFT_DISMISSED;
        }
        let tmp10 = restingQuestDockMode.get() === minExpandedContentHeight.CLOSED && COLLAPSED !== minExpandedContentHeight.EXPANDED;
        if (tmp10) {
          tmp10 = y < 0;
        }
        if (tmp10) {
          tmp10 = tmp2 > sharedValue1;
        }
        if (tmp10) {
          COLLAPSED = minExpandedContentHeight.COLLAPSED;
        }
        if (COLLAPSED === minExpandedContentHeight.EXPANDED) {
          questDockExpandHandler(activeQuestDockMode[12]).runOnJS(closure_1_0)();
          const obj2 = questDockExpandHandler(activeQuestDockMode[12]);
        }
        questDockExpandHandler(activeQuestDockMode[12]).runOnJS(setRestingQuestDockMode)(COLLAPSED);
        const obj3 = questDockExpandHandler(activeQuestDockMode[12]);
      }
      restingQuestDockMode.get() === minExpandedContentHeight.EXPANDED ? minExpandedContentHeight.RESET_TO_PREVIOUS : minExpandedContentHeight.EXPANDED;
    };
    const onChangeResult = onTouchesMoveResult.onChange(fn2);
    fn3.__closure = { QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY: closure_2_12, restingQuestDockMode, QuestDockMode, initialGestureOffset: sharedValue, QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: closure_2_11, runOnJS: ReanimatedRexport.runOnJS, onExpand: questDockExpandHandler, setRestingQuestDockMode };
    fn3.__workletHash = 11055732902011;
    fn3.__initData = __initData;
    return onChangeResult.onEnd(fn3);
  }, items1);
  const obj8 = questDockExpandHandler(activeQuestDockMode[14]);
  class W {
    constructor() {
      obj = { mode: activeQuestDockMode.get(), isVisible: closure_12.get() };
      return obj;
    }
  }
  W.__closure = { activeQuestDockMode, isVisibleSharedValue: sharedValue2 };
  W.__workletHash = 4784308368889;
  W.__initData = __initData7;
  class X {
    constructor(arg0, arg1) {
      mode = undefined;
      if (arg1 != null) {
        mode = arg1.mode;
      }
      isVisible = arg0.mode !== mode;
      if (isVisible) {
        tmp2 = minExpandedContentHeight;
        isVisible = arg0.mode !== minExpandedContentHeight.CLOSED;
      }
      if (isVisible) {
        mode1 = undefined;
        if (arg1 != null) {
          mode1 = arg1.mode;
        }
        tmp4 = minExpandedContentHeight;
        isVisible = mode1 !== minExpandedContentHeight.CLOSED;
      }
      if (isVisible) {
        isVisible = arg0.isVisible;
      }
      if (isVisible) {
        tmp5 = closure_0;
        tmp6 = activeQuestDockMode;
        obj = closure_0(activeQuestDockMode[12]);
        runOnJSResult = obj.runOnJS(closure_0(activeQuestDockMode[17]).triggerHapticFeedback);
        tmp7Result = runOnJSResult(closure_0(activeQuestDockMode[17]).HapticFeedbackTypes.IMPACT_MEDIUM);
      }
      return;
    }
  }
  let obj9 = questDockExpandHandler(activeQuestDockMode[12]);
  X.__closure = { QuestDockMode: minExpandedContentHeight, runOnJS: questDockExpandHandler(activeQuestDockMode[12]).runOnJS, triggerHapticFeedback: questDockExpandHandler(activeQuestDockMode[17]).triggerHapticFeedback, HapticFeedbackTypes: questDockExpandHandler(activeQuestDockMode[17]).HapticFeedbackTypes };
  X.__workletHash = 4090898896615;
  X.__initData = __initData8;
  const animatedReaction = obj9.useAnimatedReaction(W, X);
  return memo;
});
let closure_30 = tmp3;
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockGestureDetector.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = c.c(3);
  const tmp4 = closure_30();
  if (cResult[0] === tmp4) {
    if (cResult[1] === children.children) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = jsx(LegacyBaseButton.GestureDetector, { gesture: tmp4, children: children.children });
  cResult[0] = tmp4;
  cResult[1] = children.children;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj2 = { gesture: tmp4, children: children.children };
}) : ((children) => {
  const tmp = closure_30();
  return jsx(LegacyBaseButton.GestureDetector, { gesture: closure_30(), children: children.children });
}));
export const useQuestDockSwipeGesture = tmp3;