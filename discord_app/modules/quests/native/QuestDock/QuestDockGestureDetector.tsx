// discord_app/modules/quests/native/QuestDock/QuestDockGestureDetector.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import QuestConstants from "../../QuestConstants.tsx";
import LegacyBaseButton from "../../../../../_runtime/06140_LegacyBaseButton.js";
import QuestDockUtils from "QuestDockUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import QuestDockConstants from "QuestDockConstants.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let flag,
  flag2,
  num4,
  num5,
  num6,
  obj1,
  set,
  set2,
  set2Result,
  set3,
  set3Result,
  set4,
  set4Result,
  set5,
  set5Result,
  set6Result,
  tmp,
  tmp12,
  tmp14,
  tmp20,
  tmp22,
  tmp23,
  tmp24Result,
  tmp26,
  tmp28,
  tmp30,
  tmp33,
  tmp34,
  tmp35,
  tmp36,
  tmp37,
  tmp38,
  tmp39,
  tmp41,
  tmp42,
  tmp44,
  tmp45,
  tmp46,
  tmp47,
  tmp48,
  tmp49,
  tmp50,
  tmp53,
  tmp55,
  tmp58,
  tmp59,
  tmp61,
  tmp62,
  tmp63,
  tmp64,
  tmp65,
  tmp66,
  tmp68,
  tmp69,
  tmp71,
  tmp72,
  tmp73,
  tmp74,
  tmp76,
  tmp77,
  tmp78,
  tmp79,
  tmp81,
  tmp82,
  tmp9;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
const QuestDockMode = QuestConstants.QuestDockMode;
({
  QUEST_DOCK_COLLAPSED_HEIGHT: hasOwnProperty,
  QUEST_DOCK_CLOSED_HEIGHT: metroRequire,
  QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: metroImportDefault,
  QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM: metroImportAll,
  QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM: c9,
  QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT: c10,
  QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: unpackModuleId,
  QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY: closure_12,
  QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD: map1,
  QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR: closure_14,
  QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR: closure_15,
  QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR: closure_16,
} = QuestDockConstants);
const jsx = Fragment.jsx;
const __initData = {
  code: "function QuestDockGestureDetectorTsx1(event_2){const{QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY,restingQuestDockMode,QuestDockMode,initialGestureOffset,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,runOnJS,onExpand,setRestingQuestDockMode}=this.__closure;var velocityY=event_2.velocityY,y=event_2.y;var absoluteVelocityY=Math.abs(velocityY);var absoluteY_0=Math.abs(y);var resultingDockMode;if(absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&velocityY<0){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else{if(absoluteVelocityY<QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&initialGestureOffset.get().isDrawer){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else{if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY||y>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT)){resultingDockMode=QuestDockMode.SOFT_DISMISSED;}else{if(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()!==QuestDockMode.COLLAPSED){resultingDockMode=QuestDockMode.COLLAPSED;}else{if(velocityY<0&&absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.COLLAPSED;}else{if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED||restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.COLLAPSED;}}}}}}if(restingQuestDockMode.get()===QuestDockMode.CLOSED&&resultingDockMode!==QuestDockMode.EXPANDED&&y<0&&absoluteY_0>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){resultingDockMode=QuestDockMode.COLLAPSED;}if(resultingDockMode===QuestDockMode.EXPANDED){runOnJS(onExpand)();}runOnJS(setRestingQuestDockMode)(resultingDockMode);}",
};
const __initData2 = {
  code: "function QuestDockGestureDetectorTsx2(event_1){const{initialGestureOffset,minExpandedContentHeight,activeQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR,QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT,questDockWrapperSpecs,youBarHeight,getQuestDockExpandedWidth,windowDimensions,safeArea,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,QUEST_DOCK_CLOSED_HEIGHT,QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR,getQuestDockClosedWidth,QUEST_DOCK_COLLAPSED_HEIGHT,QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR,questDockOffset,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockCollapsedWidth,youBarHorizontalMargin}=this.__closure;var deltaY=event_1.absoluteY-initialGestureOffset.get().absoluteY;var expandedContentHeight=minExpandedContentHeight.get();var nextHeight=initialGestureOffset.get().height-deltaY;if(nextHeight>expandedContentHeight&&activeQuestDockMode.get()===QuestDockMode.EXPANDED){var overage=nextHeight-expandedContentHeight;var additionalHeight=overage*QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR;nextHeight=expandedContentHeight+additionalHeight;}var expandedModeTransitionHeight=minExpandedContentHeight.get()>0?Math.min(minExpandedContentHeight.get(),QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT):QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;if(nextHeight>=expandedModeTransitionHeight){if(!initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:true});}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:0,width:getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:Math.min(nextHeight,windowDimensions.get().height),prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.EXPANDED);}else{if(nextHeight<QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){if(activeQuestDockMode.get()===QuestDockMode.CLOSED){var progress=1-Math.min(nextHeight,0)/QUEST_DOCK_CLOSED_HEIGHT;var newChange=progress*(QUEST_DOCK_CLOSED_HEIGHT-nextHeight);var nextY=newChange*QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR;var isDraggingDown=newChange>0;questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:isDraggingDown?nextY:0,width:getQuestDockClosedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:isDraggingDown?QUEST_DOCK_CLOSED_HEIGHT:nextHeight,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.CLOSED);}}else{var progress_0=nextHeight/QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;var yOffset=(nextHeight-QUEST_DOCK_COLLAPSED_HEIGHT)*-1;var newChange_0=yOffset*(1-progress_0/QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR);questDockOffset.set(youBarHeight>0?-Math.min(newChange_0,0):0);if(initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:false});}if(QUEST_DOCK_COLLAPSED_HEIGHT!==questDockWrapperSpecs.get().height&&activeQuestDockMode.get()!==QuestDockMode.EXPANDED){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED*-1+(youBarHeight>0?Math.min(newChange_0,0):newChange_0),width:getQuestDockCollapsedWidth(windowDimensions.get().width,youBarHeight>0?youBarHorizontalMargin:safeArea.get().left,youBarHeight>0?youBarHorizontalMargin:safeArea.get().right),height:QUEST_DOCK_COLLAPSED_HEIGHT,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.COLLAPSED);}}}",
};
const __initData3 = {
  code: "function QuestDockGestureDetectorTsx3(event_0){const{State,initialGestureOffset,touchMoveCount,QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD,restingQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM,QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM,questDockWrapperSpecs}=this.__closure;if(event_0.state!==State.BEGAN||initialGestureOffset.get().active){return;}touchMoveCount.set(touchMoveCount.get()+1);var isDragging=touchMoveCount.get()<=QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD;var _event_0$changedTouch=event_0.changedTouches[0],absoluteY=_event_0$changedTouch.absoluteY,absoluteX=_event_0$changedTouch.absoluteX;var computed=initialGestureOffset.get().absoluteY-absoluteY;var computedAbsolute=Math.abs(computed);if(restingQuestDockMode.get()===QuestDockMode.EXPANDED&&isDragging&&computed>=0){return;}if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.EXPANDED&&(computed<-QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM)||restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed>0&&computed>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM){initialGestureOffset.set({absoluteX:absoluteX,absoluteY:absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:true});}}",
};
const __initData4 = {
  code: "function QuestDockGestureDetectorTsx4(event){const{touchMoveCount,initialGestureOffset,questDockWrapperSpecs,restingQuestDockMode,QuestDockMode}=this.__closure;touchMoveCount.set(0);initialGestureOffset.set({absoluteX:event.changedTouches[0].absoluteX,absoluteY:event.changedTouches[0].absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:false});}",
};
const __initData5 = {
  code: "function QuestDockGestureDetectorTsx5(){const{activeQuestDockMode,isVisibleSharedValue}=this.__closure;return{mode:activeQuestDockMode.get(),isVisible:isVisibleSharedValue.get()};}",
};
const __initData6 = {
  code: "function QuestDockGestureDetectorTsx6(current,previous){const{QuestDockMode,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current.mode===(previous===null||previous===void 0?void 0:previous.mode)||current.mode===QuestDockMode.CLOSED||(previous===null||previous===void 0?void 0:previous.mode)===QuestDockMode.CLOSED||!current.isVisible){return;}runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}",
};
let closure_24 = {
  code: "function QuestDockGestureDetectorTsx7(event_2){const{QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY,restingQuestDockMode,QuestDockMode,initialGestureOffset,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,runOnJS,onExpand,setRestingQuestDockMode}=this.__closure;const{velocityY:velocityY,y:y}=event_2;const absoluteVelocityY=Math.abs(velocityY);const absoluteY_0=Math.abs(y);let resultingDockMode;if(absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&velocityY<0){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else if(absoluteVelocityY<QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&initialGestureOffset.get().isDrawer){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY||y>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT)){resultingDockMode=QuestDockMode.SOFT_DISMISSED;}else if(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()!==QuestDockMode.COLLAPSED){resultingDockMode=QuestDockMode.COLLAPSED;}else if(velocityY<0&&absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.COLLAPSED;}else{if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED||restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.COLLAPSED;}}if(restingQuestDockMode.get()===QuestDockMode.CLOSED&&resultingDockMode!==QuestDockMode.EXPANDED&&y<0&&absoluteY_0>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){resultingDockMode=QuestDockMode.COLLAPSED;}if(resultingDockMode===QuestDockMode.EXPANDED){runOnJS(onExpand)();}runOnJS(setRestingQuestDockMode)(resultingDockMode);}",
};
let closure_25 = {
  code: "function QuestDockGestureDetectorTsx8(event_1){const{initialGestureOffset,minExpandedContentHeight,activeQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR,QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT,questDockWrapperSpecs,youBarHeight,getQuestDockExpandedWidth,windowDimensions,safeArea,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,QUEST_DOCK_CLOSED_HEIGHT,QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR,getQuestDockClosedWidth,QUEST_DOCK_COLLAPSED_HEIGHT,QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR,questDockOffset,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockCollapsedWidth,youBarHorizontalMargin}=this.__closure;const deltaY=event_1.absoluteY-initialGestureOffset.get().absoluteY;const expandedContentHeight=minExpandedContentHeight.get();let nextHeight=initialGestureOffset.get().height-deltaY;if(nextHeight>expandedContentHeight&&activeQuestDockMode.get()===QuestDockMode.EXPANDED){const overage=nextHeight-expandedContentHeight;const additionalHeight=overage*QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR;nextHeight=expandedContentHeight+additionalHeight;}const expandedModeTransitionHeight=minExpandedContentHeight.get()>0?Math.min(minExpandedContentHeight.get(),QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT):QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;if(nextHeight>=expandedModeTransitionHeight){if(!initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:true});}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:0,width:getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:Math.min(nextHeight,windowDimensions.get().height),prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.EXPANDED);}else if(nextHeight<QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){if(activeQuestDockMode.get()===QuestDockMode.CLOSED){const progress=1-Math.min(nextHeight,0)/QUEST_DOCK_CLOSED_HEIGHT;const newChange=progress*(QUEST_DOCK_CLOSED_HEIGHT-nextHeight);const nextY=newChange*QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR;const isDraggingDown=newChange>0;questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:isDraggingDown?nextY:0,width:getQuestDockClosedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:isDraggingDown?QUEST_DOCK_CLOSED_HEIGHT:nextHeight,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.CLOSED);}}else{const progress_0=nextHeight/QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;const yOffset=(nextHeight-QUEST_DOCK_COLLAPSED_HEIGHT)*-1;const newChange_0=yOffset*(1-progress_0/QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR);questDockOffset.set(youBarHeight>0?-Math.min(newChange_0,0):0);if(initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:false});}if(QUEST_DOCK_COLLAPSED_HEIGHT!==questDockWrapperSpecs.get().height&&activeQuestDockMode.get()!==QuestDockMode.EXPANDED){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED*-1+(youBarHeight>0?Math.min(newChange_0,0):newChange_0),width:getQuestDockCollapsedWidth(windowDimensions.get().width,youBarHeight>0?youBarHorizontalMargin:safeArea.get().left,youBarHeight>0?youBarHorizontalMargin:safeArea.get().right),height:QUEST_DOCK_COLLAPSED_HEIGHT,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.COLLAPSED);}}",
};
let closure_26 = {
  code: "function QuestDockGestureDetectorTsx9(event_0){const{State,initialGestureOffset,touchMoveCount,QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD,restingQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM,QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM,questDockWrapperSpecs}=this.__closure;if(event_0.state!==State.BEGAN||initialGestureOffset.get().active){return;}touchMoveCount.set(touchMoveCount.get()+1);const isDragging=touchMoveCount.get()<=QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD;const{absoluteY:absoluteY,absoluteX:absoluteX}=event_0.changedTouches[0];const computed=initialGestureOffset.get().absoluteY-absoluteY;const computedAbsolute=Math.abs(computed);if(restingQuestDockMode.get()===QuestDockMode.EXPANDED&&isDragging&&computed>=0){return;}if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.EXPANDED&&(computed<-QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM)||restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed>0&&computed>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM){initialGestureOffset.set({absoluteX:absoluteX,absoluteY:absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:true});}}",
};
let closure_27 = {
  code: "function QuestDockGestureDetectorTsx10(event){const{touchMoveCount,initialGestureOffset,questDockWrapperSpecs,restingQuestDockMode,QuestDockMode}=this.__closure;touchMoveCount.set(0);initialGestureOffset.set({absoluteX:event.changedTouches[0].absoluteX,absoluteY:event.changedTouches[0].absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:false});}",
};
const __initData7 = {
  code: "function QuestDockGestureDetectorTsx11(){const{activeQuestDockMode,isVisibleSharedValue}=this.__closure;return{mode:activeQuestDockMode.get(),isVisible:isVisibleSharedValue.get()};}",
};
const __initData8 = {
  code: "function QuestDockGestureDetectorTsx12(current,previous){const{QuestDockMode,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current.mode===(previous===null||previous===void 0?void 0:previous.mode)||current.mode===QuestDockMode.CLOSED||(previous===null||previous===void 0?void 0:previous.mode)===QuestDockMode.CLOSED||!current.isVisible){return;}runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let activeQuestDockMode;
      let closure_5;
      let questDockExpandHandler;
      let windowDimensions;
      const tmp2 = activeQuestDockMode;
      let obj = questDockExpandHandler(activeQuestDockMode[5]);
      const cResult = obj.c(43);
      let obj2 = questDockExpandHandler(activeQuestDockMode[6]);
      const questDockCreative = obj2.useQuestDockCreative();
      let obj3 = questDockExpandHandler(activeQuestDockMode[7]);
      questDockExpandHandler = obj3.useQuestDockExpandHandler(questDockCreative);
      let obj4 = windowDimensions;
      const context = windowDimensions.useContext(
        questDockExpandHandler(activeQuestDockMode[8]).QuestDockGestureContext,
      );
      const questDockWrapperSpecs = context.questDockWrapperSpecs;
      activeQuestDockMode = context.activeQuestDockMode;
      windowDimensions = context.windowDimensions;
      const minExpandedContentHeight = context.minExpandedContentHeight;
      const tmp7 = questDockWrapperSpecs(activeQuestDockMode[9])();
      QUEST_DOCK_COLLAPSED_HEIGHT = tmp7;
      const context1 = windowDimensions.useContext(
        questDockExpandHandler(activeQuestDockMode[10]).QuestDockExternalCoordinationContext,
      );
      const restingQuestDockMode = context1.restingQuestDockMode;
      const setRestingQuestDockMode = context1.setRestingQuestDockMode;
      const questDockOffset = context1.questDockOffset;
      const isVisibleToUser = windowDimensions.useContext(
        questDockWrapperSpecs(activeQuestDockMode[11]),
      ).isVisibleToUser;
      let obj5 = questDockExpandHandler(activeQuestDockMode[12]);
      let point = {
        absoluteX: 0,
        absoluteY: 0,
        x: 0,
        y: 0,
        height: 0,
        isDrawer: restingQuestDockMode.get() === minExpandedContentHeight.EXPANDED,
        active: false,
      };
      const sharedValue = obj5.useSharedValue(point);
      const obj7 = questDockExpandHandler(activeQuestDockMode[12]);
      const sharedValue1 = obj7.useSharedValue(0);
      let obj8 = questDockExpandHandler(activeQuestDockMode[12]);
      const sharedValue2 = obj8.useSharedValue(isVisibleToUser);
      let obj9 = questDockExpandHandler(activeQuestDockMode[13]);
      const youBarTotalHeight = obj9.useYouBarTotalHeight();
      let obj10 = questDockExpandHandler(activeQuestDockMode[14]);
      const youBarHorizontalMargin = obj10.useYouBarHorizontalMargin();
      if (cResult[0] === sharedValue2) {
        let tmp15;
        let tmp16;
        let tmp18;
        if (cResult[1] === isVisibleToUser) {
          tmp15 = cResult[2];
          tmp16 = cResult[3];
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
                                  tmp18 = cResult[17];
                                }
                                function ee() {
                                  const obj = { mode: activeQuestDockMode.get(), isVisible: sharedValue2.get() };
                                  return obj;
                                }
                                let obj6 = { activeQuestDockMode: null, isVisibleSharedValue: sharedValue2 };
                                const tmpResult = questDockExpandHandler(tmp2[12]);
                                class QuestDockGestureDetectorTsx4 {
                                  constructor(arg0) {
                                    result = closure_11.set(0);
                                    point = {
                                      absoluteX: arg0.changedTouches[0].absoluteX,
                                      absoluteY: arg0.changedTouches[0].absoluteY,
                                      x: questDockWrapperSpecs.get().x,
                                      y: questDockWrapperSpecs.get().y,
                                      height: questDockWrapperSpecs.get().height,
                                      isDrawer: restingQuestDockMode.get() === QuestDockMode.EXPANDED,
                                      active: false,
                                    };
                                    result1 = closure_10.set(point);
                                    return;
                                  }
                                }
                                ee.__closure = obj6;
                                ee.__workletHash = 13629688537260;
                                ee.__initData = __initData5;
                                class Z {
                                  constructor(mode, mode2) {
                                    let mode1;
                                    mode = mode.mode;
                                    if (mode2 != null) {
                                      mode1 = mode2.mode;
                                    }
                                    let isVisible = mode !== mode1 && mode.mode !== minExpandedContentHeight.CLOSED;
                                    if (isVisible) {
                                      mode2 = undefined;
                                      if (mode2 != null) {
                                        mode2 = mode2.mode;
                                      }
                                      isVisible = mode2 !== minExpandedContentHeight.CLOSED;
                                    }
                                    if (isVisible) {
                                      isVisible = mode.isVisible;
                                    }
                                    if (isVisible) {
                                      const obj = questDockExpandHandler(activeQuestDockMode[12]);
                                      const runOnJSResult = obj.runOnJS(
                                        questDockExpandHandler(activeQuestDockMode[17]).triggerHapticFeedback,
                                      );
                                      runOnJSResult(
                                        questDockExpandHandler(activeQuestDockMode[17]).HapticFeedbackTypes
                                          .IMPACT_MEDIUM,
                                      );
                                    }
                                  }
                                }
                                const useAnimatedReaction = tmpResult.useAnimatedReaction;
                                Z.__closure = {
                                  QuestDockMode: minExpandedContentHeight,
                                  runOnJS: questDockExpandHandler(tmp2[12]).runOnJS,
                                  triggerHapticFeedback: questDockExpandHandler(tmp2[17]).triggerHapticFeedback,
                                  HapticFeedbackTypes: questDockExpandHandler(tmp2[17]).HapticFeedbackTypes,
                                };
                                Z.__workletHash = 17417080823410;
                                Z.__initData = __initData6;
                                const obj11 = {
                                  QuestDockMode: minExpandedContentHeight,
                                  runOnJS: questDockExpandHandler(tmp2[12]).runOnJS,
                                  triggerHapticFeedback: questDockExpandHandler(tmp2[17]).triggerHapticFeedback,
                                  HapticFeedbackTypes: questDockExpandHandler(tmp2[17]).HapticFeedbackTypes,
                                };
                                const animatedReaction = useAnimatedReaction(ee, Z);
                                return tmp18;
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
              let tmp19;
              if (cResult[21] === sharedValue1) {
                tmp19 = cResult[22];
              }
              if (cResult[23] === sharedValue) {
                if (cResult[24] === questDockWrapperSpecs) {
                  if (cResult[25] === restingQuestDockMode) {
                    let tmp21;
                    if (cResult[26] === sharedValue1) {
                      tmp21 = cResult[27];
                    }
                    if (cResult[28] === activeQuestDockMode) {
                      if (cResult[29] === sharedValue) {
                        if (cResult[30] === minExpandedContentHeight) {
                          if (cResult[31] === questDockOffset) {
                            if (cResult[32] === questDockWrapperSpecs) {
                              if (cResult[33] === tmp7) {
                                if (cResult[34] === windowDimensions) {
                                  if (cResult[35] === youBarTotalHeight) {
                                    let tmp25;
                                    if (cResult[36] === youBarHorizontalMargin) {
                                      tmp25 = cResult[37];
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
                                                  tmp8 = obj2.get() === tmp5.CLOSED && SOFT_DISMISSED !== tmp5.EXPANDED;
                                                  if (tmp8) {
                                                    num3 = 0;
                                                    tmp8 = y < 0;
                                                  }
                                                  if (tmp8) {
                                                    tmp9 = closure_11;
                                                    tmp8 = tmp2 > closure_11;
                                                  }
                                                  if (tmp8) {
                                                    SOFT_DISMISSED = tmp5.COLLAPSED;
                                                  }
                                                  if (SOFT_DISMISSED === tmp5.EXPANDED) {
                                                    tmp10 = closure_0;
                                                    tmp11 = closure_2;
                                                    obj3 = closure_0(closure_2[12]);
                                                    tmp12 = closure_0;
                                                    tmp13 = obj3.runOnJS(closure_0)();
                                                  }
                                                  tmp14 = closure_0;
                                                  tmp15 = closure_2;
                                                  obj4 = closure_0(closure_2[12]);
                                                  tmp16 = setRestingQuestDockMode;
                                                  tmp17 = obj4.runOnJS(setRestingQuestDockMode)(SOFT_DISMISSED);
                                                  return;
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
                                                        SOFT_DISMISSED = tmp5.COLLAPSED;
                                                      }
                                                    }
                                                    SOFT_DISMISSED = tmp5.RESET_TO_PREVIOUS;
                                                  }
                                                  SOFT_DISMISSED = tmp5.COLLAPSED;
                                                } else {
                                                  if (velocityY <= tmp3) {
                                                    tmp18 = closure_11;
                                                  }
                                                  SOFT_DISMISSED = tmp5.SOFT_DISMISSED;
                                                }
                                                obj2 = obj;
                                              } else {
                                                num = 0;
                                              }
                                              tmp6 = restingQuestDockMode;
                                              tmp7 = QuestDockMode;
                                              SOFT_DISMISSED =
                                                restingQuestDockMode.get() === QuestDockMode.EXPANDED
                                                  ? tmp7.RESET_TO_PREVIOUS
                                                  : tmp7.EXPANDED;
                                              tmp5 = tmp7;
                                              obj2 = tmp6;
                                              return;
                                            }
                                          }
                                          class QuestDockGestureDetectorTsx4 {
                                            constructor(arg0) {
                                              result = closure_11.set(0);
                                              point = {
                                                absoluteX: arg0.changedTouches[0].absoluteX,
                                                absoluteY: arg0.changedTouches[0].absoluteY,
                                                x: questDockWrapperSpecs.get().x,
                                                y: questDockWrapperSpecs.get().y,
                                                height: questDockWrapperSpecs.get().height,
                                                isDrawer: restingQuestDockMode.get() === QuestDockMode.EXPANDED,
                                                active: false,
                                              };
                                              result1 = closure_10.set(point);
                                              return;
                                            }
                                          }
                                          const maxPointersResult = obj15.maxPointers(1);
                                          let result = maxPointersResult.shouldCancelWhenOutside(false);
                                          const onTouchesDownResult = result.onTouchesDown(tmp19);
                                          const onTouchesMoveResult = onTouchesDownResult.onTouchesMove(tmp21);
                                          onTouchesMoveResult.onChange(tmp25);
                                          class Z {
                                            constructor(mode, mode2) {
                                              let mode1;
                                              mode = mode.mode;
                                              if (mode2 != null) {
                                                mode1 = mode2.mode;
                                              }
                                              let isVisible =
                                                mode !== mode1 && mode.mode !== minExpandedContentHeight.CLOSED;
                                              if (isVisible) {
                                                mode2 = undefined;
                                                if (mode2 != null) {
                                                  mode2 = mode2.mode;
                                                }
                                                isVisible = mode2 !== minExpandedContentHeight.CLOSED;
                                              }
                                              if (isVisible) {
                                                isVisible = mode.isVisible;
                                              }
                                              if (isVisible) {
                                                const obj = questDockExpandHandler(activeQuestDockMode[12]);
                                                const runOnJSResult = obj.runOnJS(
                                                  questDockExpandHandler(activeQuestDockMode[17]).triggerHapticFeedback,
                                                );
                                                runOnJSResult(
                                                  questDockExpandHandler(activeQuestDockMode[17]).HapticFeedbackTypes
                                                    .IMPACT_MEDIUM,
                                                );
                                              }
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
                                          cResult[17] = tmp39;
                                          tmp18 = tmp39;
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
                                            tmp8 = obj2.get() === tmp5.CLOSED && SOFT_DISMISSED !== tmp5.EXPANDED;
                                            if (tmp8) {
                                              num3 = 0;
                                              tmp8 = y < 0;
                                            }
                                            if (tmp8) {
                                              tmp9 = closure_11;
                                              tmp8 = tmp2 > closure_11;
                                            }
                                            if (tmp8) {
                                              SOFT_DISMISSED = tmp5.COLLAPSED;
                                            }
                                            if (SOFT_DISMISSED === tmp5.EXPANDED) {
                                              tmp10 = closure_0;
                                              tmp11 = closure_2;
                                              obj3 = closure_0(closure_2[12]);
                                              tmp12 = closure_0;
                                              tmp13 = obj3.runOnJS(closure_0)();
                                            }
                                            tmp14 = closure_0;
                                            tmp15 = closure_2;
                                            obj4 = closure_0(closure_2[12]);
                                            tmp16 = setRestingQuestDockMode;
                                            tmp17 = obj4.runOnJS(setRestingQuestDockMode)(SOFT_DISMISSED);
                                            return;
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
                                                  SOFT_DISMISSED = tmp5.COLLAPSED;
                                                }
                                              }
                                              SOFT_DISMISSED = tmp5.RESET_TO_PREVIOUS;
                                            }
                                            SOFT_DISMISSED = tmp5.COLLAPSED;
                                          } else {
                                            if (velocityY <= tmp3) {
                                              tmp18 = closure_11;
                                            }
                                            SOFT_DISMISSED = tmp5.SOFT_DISMISSED;
                                          }
                                          obj2 = obj;
                                        } else {
                                          num = 0;
                                        }
                                        tmp6 = restingQuestDockMode;
                                        tmp7 = QuestDockMode;
                                        SOFT_DISMISSED =
                                          restingQuestDockMode.get() === QuestDockMode.EXPANDED
                                            ? tmp7.RESET_TO_PREVIOUS
                                            : tmp7.EXPANDED;
                                        tmp5 = tmp7;
                                        obj2 = tmp6;
                                        return;
                                      }
                                    }
                                    const obj12 = {
                                      QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY: sharedValue2,
                                      restingQuestDockMode,
                                      QuestDockMode: minExpandedContentHeight,
                                      initialGestureOffset: sharedValue,
                                      QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: sharedValue1,
                                      runOnJS: null,
                                      onExpand: questDockExpandHandler,
                                      setRestingQuestDockMode,
                                    };
                                    class QuestDockGestureDetectorTsx4 {
                                      constructor(arg0) {
                                        result = closure_11.set(0);
                                        point = {
                                          absoluteX: arg0.changedTouches[0].absoluteX,
                                          absoluteY: arg0.changedTouches[0].absoluteY,
                                          x: questDockWrapperSpecs.get().x,
                                          y: questDockWrapperSpecs.get().y,
                                          height: questDockWrapperSpecs.get().height,
                                          isDrawer: restingQuestDockMode.get() === QuestDockMode.EXPANDED,
                                          active: false,
                                        };
                                        result1 = closure_10.set(point);
                                        return;
                                      }
                                    }
                                    class Z {
                                      constructor(mode, mode2) {
                                        let mode1;
                                        mode = mode.mode;
                                        if (mode2 != null) {
                                          mode1 = mode2.mode;
                                        }
                                        let isVisible = mode !== mode1 && mode.mode !== minExpandedContentHeight.CLOSED;
                                        if (isVisible) {
                                          mode2 = undefined;
                                          if (mode2 != null) {
                                            mode2 = mode2.mode;
                                          }
                                          isVisible = mode2 !== minExpandedContentHeight.CLOSED;
                                        }
                                        if (isVisible) {
                                          isVisible = mode.isVisible;
                                        }
                                        if (isVisible) {
                                          const obj = questDockExpandHandler(activeQuestDockMode[12]);
                                          const runOnJSResult = obj.runOnJS(
                                            questDockExpandHandler(activeQuestDockMode[17]).triggerHapticFeedback,
                                          );
                                          runOnJSResult(
                                            questDockExpandHandler(activeQuestDockMode[17]).HapticFeedbackTypes
                                              .IMPACT_MEDIUM,
                                          );
                                        }
                                      }
                                    }
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
                            set3 = obj.set;
                            tmp55 = obj1;
                            merged = Object.assign(obj.get());
                            flag2 = true;
                            obj1.isDrawer = true;
                            set3Result = set3(obj1);
                          }
                          obj11 = {};
                          tmp58 = questDockWrapperSpecs;
                          set4 = questDockWrapperSpecs.set;
                          tmp59 = obj11;
                          merged1 = Object.assign(questDockWrapperSpecs.get());
                          obj11.x = 0;
                          num3 = 0;
                          if (closure_13 > 0) {
                            num3 = closure_13;
                          }
                          obj11.y = num3;
                          tmp61 = closure_0;
                          tmp62 = closure_2;
                          tmp63 = closure_0(closure_2[16]);
                          tmp64 = windowDimensions;
                          getQuestDockExpandedWidth = tmp63.getQuestDockExpandedWidth;
                          tmp65 = closure_5;
                          width3 = windowDimensions.get().width;
                          obj11.width = getQuestDockExpandedWidth(width3, closure_5.get().left, closure_5.get().right);
                          tmp66 = globalThis;
                          _Math4 = Math;
                          obj11.height = Math.min(sum, windowDimensions.get().height);
                          obj11.prevDeltaY = diff;
                          set4Result = set4(obj11);
                          tmp68 = activeQuestDockMode;
                          tmp69 = QuestDockMode;
                          result = activeQuestDockMode.set(QuestDockMode.EXPANDED);
                        } else {
                          tmp71 = closure_11;
                          if (sum < closure_11) {
                            obj7 = activeQuestDockMode;
                            tmp44 = QuestDockMode;
                            if (activeQuestDockMode.get() === QuestDockMode.CLOSED) {
                              tmp78 = globalThis;
                              _Math5 = Math;
                              num6 = 1;
                              result1 =
                                (1 - Math.min(sum, 0) / QUEST_DOCK_CLOSED_HEIGHT) * (QUEST_DOCK_CLOSED_HEIGHT - sum);
                              obj12 = {};
                              tmp79 = QUEST_DOCK_CLOSED_HEIGHT;
                              tmp81 = questDockWrapperSpecs;
                              set6 = questDockWrapperSpecs.set;
                              tmp82 = obj12;
                              merged2 = Object.assign(questDockWrapperSpecs.get());
                              obj12.x = 0;
                              num2 = 0;
                              if (0 < result1) {
                                tmp45 = closure_15;
                                num2 = result1 * closure_15;
                              }
                              obj12.y = num2;
                              tmp46 = closure_0;
                              tmp47 = closure_2;
                              tmp48 = closure_0(closure_2[16]);
                              tmp49 = windowDimensions;
                              getQuestDockClosedWidth = tmp48.getQuestDockClosedWidth;
                              tmp50 = closure_5;
                              width2 = windowDimensions.get().width;
                              obj12.width = getQuestDockClosedWidth(
                                width2,
                                closure_5.get().left,
                                closure_5.get().right,
                              );
                              tmp51 = sum;
                              if (0 < result1) {
                                tmp51 = tmp79;
                              }
                              obj12.height = tmp51;
                              obj12.prevDeltaY = diff;
                              set6Result = set6(obj12);
                              tmp53 = QuestDockMode;
                              result2 = obj7.set(QuestDockMode.CLOSED);
                            }
                          } else {
                            tmp72 = closure_5;
                            num4 = -1;
                            tmp73 = closure_10;
                            tmp74 = closure_14;
                            num5 = 1;
                            result3 = -1 * (sum - closure_5) * (1 - sum / closure_10 / closure_14);
                            tmp77 = closure_13;
                            num = 0;
                            tmp76 = questDockOffset;
                            set5 = questDockOffset.set;
                            if (closure_13 > 0) {
                              tmp12 = globalThis;
                              _Math2 = Math;
                              num = -Math.min(result3, 0);
                            }
                            set5Result = set5(num);
                            if (obj.get().isDrawer) {
                              obj13 = {};
                              set = obj.set;
                              tmp14 = obj13;
                              merged3 = Object.assign(obj.get());
                              flag = false;
                              obj13.isDrawer = false;
                              result4 = set(obj13);
                            }
                            obj4 = questDockWrapperSpecs;
                            tmp17 = tmp72 !== questDockWrapperSpecs.get().height;
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
                            obj14 = {};
                            set2 = obj4.set;
                            tmp28 = obj14;
                            merged4 = Object.assign(obj4.get());
                            obj14.x = 0;
                            tmp30 = closure_7;
                            bound1 = result3;
                            result5 = -1 * closure_7;
                            if (tmp77 > 0) {
                              tmp33 = globalThis;
                              _Math3 = Math;
                              bound1 = Math.min(result3, 0);
                            }
                            obj14.y = result5 + bound1;
                            tmp34 = closure_0;
                            tmp35 = closure_2;
                            tmp36 = closure_0(closure_2[16]);
                            tmp37 = windowDimensions;
                            getQuestDockCollapsedWidth = tmp36.getQuestDockCollapsedWidth;
                            width = windowDimensions.get().width;
                            if (tmp77 > 0) {
                              left = closure_14;
                            } else {
                              tmp38 = closure_5;
                              left = closure_5.get().left;
                            }
                            if (tmp77 > 0) {
                              right = closure_14;
                            } else {
                              tmp39 = closure_5;
                              right = closure_5.get().right;
                            }
                            obj14.width = getQuestDockCollapsedWidth(width, left, right);
                            obj14.height = tmp72;
                            obj14.prevDeltaY = diff;
                            set2Result = set2(obj14);
                            tmp41 = activeQuestDockMode;
                            tmp42 = QuestDockMode;
                            result6 = activeQuestDockMode.set(QuestDockMode.COLLAPSED);
                          }
                        }
                        return;
                      }
                    }
                    const obj13 = {
                      initialGestureOffset: null,
                      minExpandedContentHeight,
                      activeQuestDockMode,
                      QuestDockMode: minExpandedContentHeight,
                      QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR: closure_16,
                      QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT: null,
                      questDockWrapperSpecs,
                      youBarHeight: youBarTotalHeight,
                      getQuestDockExpandedWidth: questDockExpandHandler(tmp2[16]).getQuestDockExpandedWidth,
                      windowDimensions,
                      safeArea: tmp7,
                      QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: sharedValue1,
                      QUEST_DOCK_CLOSED_HEIGHT: restingQuestDockMode,
                      QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR: closure_15,
                      getQuestDockClosedWidth: questDockExpandHandler(tmp2[16]).getQuestDockClosedWidth,
                      QUEST_DOCK_COLLAPSED_HEIGHT,
                      QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR: youBarHorizontalMargin,
                      questDockOffset,
                      runOnJS: questDockExpandHandler(tmp2[12]).runOnJS,
                      triggerHapticFeedback: questDockExpandHandler(tmp2[17]).triggerHapticFeedback,
                      HapticFeedbackTypes: questDockExpandHandler(tmp2[17]).HapticFeedbackTypes,
                      QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: setRestingQuestDockMode,
                      getQuestDockCollapsedWidth: questDockExpandHandler(tmp2[16]).getQuestDockCollapsedWidth,
                      youBarHorizontalMargin,
                    };
                    class QuestDockGestureDetectorTsx4 {
                      constructor(arg0) {
                        result = closure_11.set(0);
                        point = {
                          absoluteX: arg0.changedTouches[0].absoluteX,
                          absoluteY: arg0.changedTouches[0].absoluteY,
                          x: questDockWrapperSpecs.get().x,
                          y: questDockWrapperSpecs.get().y,
                          height: questDockWrapperSpecs.get().height,
                          isDrawer: restingQuestDockMode.get() === QuestDockMode.EXPANDED,
                          active: false,
                        };
                        result1 = closure_10.set(point);
                        return;
                      }
                    }
                    class Z {
                      constructor(mode, mode2) {
                        let mode1;
                        mode = mode.mode;
                        if (mode2 != null) {
                          mode1 = mode2.mode;
                        }
                        let isVisible = mode !== mode1 && mode.mode !== minExpandedContentHeight.CLOSED;
                        if (isVisible) {
                          mode2 = undefined;
                          if (mode2 != null) {
                            mode2 = mode2.mode;
                          }
                          isVisible = mode2 !== minExpandedContentHeight.CLOSED;
                        }
                        if (isVisible) {
                          isVisible = mode.isVisible;
                        }
                        if (isVisible) {
                          const obj = questDockExpandHandler(activeQuestDockMode[12]);
                          const runOnJSResult = obj.runOnJS(
                            questDockExpandHandler(activeQuestDockMode[17]).triggerHapticFeedback,
                          );
                          runOnJSResult(
                            questDockExpandHandler(activeQuestDockMode[17]).HapticFeedbackTypes.IMPACT_MEDIUM,
                          );
                        }
                      }
                    }
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
                    tmp25 = QuestDockGestureDetectorTsx2;
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
                      absoluteX = first.absoluteX;
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
                          point = {
                            absoluteX: null,
                            absoluteY: null,
                            x: null,
                            y: null,
                            height: null,
                            isDrawer: null,
                            active: true,
                          };
                          point.absoluteX = absoluteX;
                          point.absoluteY = absoluteY;
                          tmp21 = questDockWrapperSpecs;
                          set = obj3.set;
                          point.x = questDockWrapperSpecs.get().x;
                          point.y = questDockWrapperSpecs.get().y;
                          point.height = questDockWrapperSpecs.get().height;
                          point.isDrawer = obj.get() === tmp9.EXPANDED;
                          result1 = set(point);
                        }
                      }
                    }
                  }
                  return;
                }
              }
              const obj14 = {
                State: null,
                initialGestureOffset: sharedValue,
                touchMoveCount: sharedValue1,
                QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD: youBarTotalHeight,
                restingQuestDockMode,
                QuestDockMode: minExpandedContentHeight,
                QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM: questDockOffset,
                QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM: isVisibleToUser,
                questDockWrapperSpecs,
              };
              class QuestDockGestureDetectorTsx4 {
                constructor(arg0) {
                  result = closure_11.set(0);
                  point = {
                    absoluteX: arg0.changedTouches[0].absoluteX,
                    absoluteY: arg0.changedTouches[0].absoluteY,
                    x: questDockWrapperSpecs.get().x,
                    y: questDockWrapperSpecs.get().y,
                    height: questDockWrapperSpecs.get().height,
                    isDrawer: restingQuestDockMode.get() === QuestDockMode.EXPANDED,
                    active: false,
                  };
                  result1 = closure_10.set(point);
                  return;
                }
              }
              class Z {
                constructor(mode, mode2) {
                  let mode1;
                  mode = mode.mode;
                  if (mode2 != null) {
                    mode1 = mode2.mode;
                  }
                  let isVisible = mode !== mode1 && mode.mode !== minExpandedContentHeight.CLOSED;
                  if (isVisible) {
                    mode2 = undefined;
                    if (mode2 != null) {
                      mode2 = mode2.mode;
                    }
                    isVisible = mode2 !== minExpandedContentHeight.CLOSED;
                  }
                  if (isVisible) {
                    isVisible = mode.isVisible;
                  }
                  if (isVisible) {
                    const obj = questDockExpandHandler(activeQuestDockMode[12]);
                    const runOnJSResult = obj.runOnJS(
                      questDockExpandHandler(activeQuestDockMode[17]).triggerHapticFeedback,
                    );
                    runOnJSResult(questDockExpandHandler(activeQuestDockMode[17]).HapticFeedbackTypes.IMPACT_MEDIUM);
                  }
                }
              }
              QuestDockGestureDetectorTsx3.__closure = obj14;
              QuestDockGestureDetectorTsx3.__workletHash = 15038484497055;
              QuestDockGestureDetectorTsx3.__initData = __initData3;
              cResult[23] = sharedValue;
              cResult[24] = questDockWrapperSpecs;
              cResult[25] = restingQuestDockMode;
              cResult[26] = sharedValue1;
              cResult[27] = QuestDockGestureDetectorTsx3;
              tmp21 = QuestDockGestureDetectorTsx3;
            }
          }
        }
        class QuestDockGestureDetectorTsx4 {
          constructor(arg0) {
            result = closure_11.set(0);
            point = {
              absoluteX: arg0.changedTouches[0].absoluteX,
              absoluteY: arg0.changedTouches[0].absoluteY,
              x: questDockWrapperSpecs.get().x,
              y: questDockWrapperSpecs.get().y,
              height: questDockWrapperSpecs.get().height,
              isDrawer: restingQuestDockMode.get() === QuestDockMode.EXPANDED,
              active: false,
            };
            result1 = closure_10.set(point);
            return;
          }
        }
        let num = 15649211210155;
        QuestDockGestureDetectorTsx4.__workletHash = 15649211210155;
        QuestDockGestureDetectorTsx4.__initData = __initData4;
        let num2 = 18;
        cResult[18] = sharedValue;
        let num3 = 19;
        cResult[19] = questDockWrapperSpecs;
        cResult[20] = restingQuestDockMode;
        cResult[21] = sharedValue1;
        cResult[22] = QuestDockGestureDetectorTsx4;
        tmp19 = QuestDockGestureDetectorTsx4;
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
    }
  : () => {
      let activeQuestDockMode;
      let questDockExpandHandler;
      let windowDimensions;
      let obj = questDockExpandHandler(activeQuestDockMode[6]);
      const questDockCreative = obj.useQuestDockCreative();
      let obj2 = questDockExpandHandler(activeQuestDockMode[7]);
      questDockExpandHandler = obj2.useQuestDockExpandHandler(questDockCreative);
      const context = windowDimensions.useContext(
        questDockExpandHandler(activeQuestDockMode[8]).QuestDockGestureContext,
      );
      const questDockWrapperSpecs = context.questDockWrapperSpecs;
      activeQuestDockMode = context.activeQuestDockMode;
      windowDimensions = context.windowDimensions;
      const minExpandedContentHeight = context.minExpandedContentHeight;
      let tmp4 = questDockWrapperSpecs(activeQuestDockMode[9])();
      const safeArea = tmp4;
      const context1 = windowDimensions.useContext(
        questDockExpandHandler(activeQuestDockMode[10]).QuestDockExternalCoordinationContext,
      );
      const restingQuestDockMode = context1.restingQuestDockMode;
      const setRestingQuestDockMode = context1.setRestingQuestDockMode;
      const questDockOffset = context1.questDockOffset;
      const isVisibleToUser = windowDimensions.useContext(
        questDockWrapperSpecs(activeQuestDockMode[11]),
      ).isVisibleToUser;
      let obj3 = questDockExpandHandler(activeQuestDockMode[12]);
      let point = {
        absoluteX: 0,
        absoluteY: 0,
        x: 0,
        y: 0,
        height: 0,
        isDrawer: restingQuestDockMode.get() === minExpandedContentHeight.EXPANDED,
        active: false,
      };
      const sharedValue = obj3.useSharedValue(point);
      let obj5 = questDockExpandHandler(activeQuestDockMode[12]);
      const sharedValue1 = obj5.useSharedValue(0);
      let obj6 = questDockExpandHandler(activeQuestDockMode[12]);
      const sharedValue2 = obj6.useSharedValue(isVisibleToUser);
      const obj7 = questDockExpandHandler(activeQuestDockMode[13]);
      const youBarTotalHeight = obj7.useYouBarTotalHeight();
      let obj8 = questDockExpandHandler(activeQuestDockMode[14]);
      const youBarHorizontalMargin = obj8.useYouBarHorizontalMargin();
      const items = [isVisibleToUser, sharedValue2];
      const effect = windowDimensions.useEffect(() => {
        const result = sharedValue2.set(isVisibleToUser);
      }, items);
      const items1 = [
        restingQuestDockMode,
        sharedValue,
        tmp4,
        sharedValue1,
        windowDimensions,
        questDockWrapperSpecs,
        setRestingQuestDockMode,
        activeQuestDockMode,
        minExpandedContentHeight,
        youBarTotalHeight,
        youBarHorizontalMargin,
        questDockOffset,
        questDockExpandHandler,
      ];
      const memo = windowDimensions.useMemo(() => {
        let height;
        const Gesture = LegacyBaseButton.Gesture;
        const PanResult = Gesture.Pan();
        const manualActivationResult = PanResult.manualActivation(false);
        const maxPointersResult = manualActivationResult.maxPointers(1);
        let result = maxPointersResult.shouldCancelWhenOutside(false);
        class G {
          constructor(absoluteX) {
            const result = sharedValue1.set(0);
            const point = {
              absoluteX: absoluteX.changedTouches[0].absoluteX,
              absoluteY: absoluteX.changedTouches[0].absoluteY,
              x: questDockWrapperSpecs.get().x,
              y: questDockWrapperSpecs.get().y,
              height: questDockWrapperSpecs.get().height,
              isDrawer: restingQuestDockMode.get() === minExpandedContentHeight.EXPANDED,
              active: false,
            };
            const result1 = sharedValue.set(point);
          }
        }
        const obj = {
          touchMoveCount: sharedValue1,
          initialGestureOffset: sharedValue,
          questDockWrapperSpecs,
          restingQuestDockMode,
          QuestDockMode,
        };
        G.__closure = obj;
        G.__workletHash = 16021508659358;
        G.__initData = __initData4;
        const fn = function k(state) {
          if (state.state === questDockExpandHandler(activeQuestDockMode[15]).State.BEGAN) {
            if (!sharedValue.get().active) {
              const result = sharedValue1.set(sharedValue1.get() + 1);
              const first = state.changedTouches[0];
              const absoluteY = first.absoluteY;
              const absoluteX = first.absoluteX;
              const tmp4 = sharedValue1.get() <= youBarTotalHeight;
              const diff = sharedValue.get().absoluteY - absoluteY;
              const _Math = Math;
              const absolute = Math.abs(diff);
              const tmp10 = restingQuestDockMode.get() === minExpandedContentHeight.EXPANDED && tmp4 && diff >= 0;
              if (!tmp10) {
                let tmp11 = restingQuestDockMode.get() === minExpandedContentHeight.COLLAPSED && diff > questDockOffset;
                if (!tmp11) {
                  let tmp13 = restingQuestDockMode.get() === minExpandedContentHeight.EXPANDED;
                  if (tmp13) {
                    tmp13 = diff < -questDockOffset || diff > questDockOffset;
                  }
                  tmp11 = tmp13;
                }
                if (!tmp11) {
                  tmp11 =
                    restingQuestDockMode.get() === minExpandedContentHeight.COLLAPSED &&
                    diff < 0 &&
                    absolute > isVisibleToUser;
                  const tmp15 =
                    restingQuestDockMode.get() === minExpandedContentHeight.COLLAPSED &&
                    diff < 0 &&
                    absolute > isVisibleToUser;
                }
                if (!tmp11) {
                  tmp11 =
                    restingQuestDockMode.get() === minExpandedContentHeight.CLOSED &&
                    diff > 0 &&
                    diff > isVisibleToUser;
                  const tmp17 =
                    restingQuestDockMode.get() === minExpandedContentHeight.CLOSED &&
                    diff > 0 &&
                    diff > isVisibleToUser;
                }
                if (!tmp11) {
                  tmp11 =
                    restingQuestDockMode.get() === minExpandedContentHeight.CLOSED &&
                    diff < 0 &&
                    absolute > isVisibleToUser;
                  const tmp19 =
                    restingQuestDockMode.get() === minExpandedContentHeight.CLOSED &&
                    diff < 0 &&
                    absolute > isVisibleToUser;
                }
                if (tmp11) {
                  const point = {
                    absoluteX,
                    absoluteY,
                    x: questDockWrapperSpecs.get().x,
                    y: questDockWrapperSpecs.get().y,
                    height: questDockWrapperSpecs.get().height,
                    isDrawer: restingQuestDockMode.get() === minExpandedContentHeight.EXPANDED,
                    active: true,
                  };
                  set = sharedValue.set;
                  const result1 = set(point);
                }
              }
            }
          }
        };
        const onTouchesDownResult = result.onTouchesDown(G);
        let obj2 = {
          State: LegacyBaseButton.State,
          initialGestureOffset: sharedValue,
          touchMoveCount: sharedValue1,
          QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD: map1,
          restingQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM: metroImportAll,
          QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM: React4,
          questDockWrapperSpecs,
        };
        fn.__closure = obj2;
        fn.__workletHash = 1210406087328;
        fn.__initData = __initData3;
        const fn2 = function s(absoluteY) {
          let bound;
          let bound1;
          let getQuestDockClosedWidth;
          let getQuestDockCollapsedWidth;
          let getQuestDockExpandedWidth;
          let left;
          let num2;
          let num3;
          let result5;
          let right;
          let tmp51;
          let width;
          let width2;
          let width3;
          const diff = absoluteY.absoluteY - closure_1_10.get().absoluteY;
          const value = closure_1_4.get();
          const diff1 = closure_1_10.get().height - diff;
          let sum = diff1;
          const tmp4 = diff1 > value && closure_1_2.get() === minExpandedContentHeight.EXPANDED;
          if (tmp4) {
            sum = value + (diff1 - value) * closure_2_16;
          }
          if (closure_1_4.get() > 0) {
            const _Math = Math;
            bound = Math.min(closure_1_4.get(), sharedValue);
          } else {
            bound = sharedValue;
          }
          if (sum >= bound) {
            if (!closure_1_10.get().isDrawer) {
              const obj3 = { isDrawer: true };
              set3 = closure_1_10.set;
              const merged = Object.assign(closure_1_10.get());
              set3(obj3);
            }
            const obj6 = {
              x: 0,
              y: num3,
              width: getQuestDockExpandedWidth(width3, height.get().left, height.get().right),
              height: Math.min(sum, windowDimensions.get().height),
              prevDeltaY: diff,
            };
            set4 = questDockWrapperSpecs.set;
            const merged1 = Object.assign(questDockWrapperSpecs.get());
            num3 = 0;
            if (youBarTotalHeight > 0) {
              num3 = youBarTotalHeight;
            }
            getQuestDockExpandedWidth = questDockExpandHandler(activeQuestDockMode[16]).getQuestDockExpandedWidth;
            questDockExpandHandler(activeQuestDockMode[16]);
            width3 = windowDimensions.get().width;
            const _Math4 = Math;
            set4(obj6);
            const result = closure_1_2.set(minExpandedContentHeight.EXPANDED);
          } else if (sum < sharedValue1) {
            if (closure_1_2.get() === minExpandedContentHeight.CLOSED) {
              const _Math5 = Math;
              const result1 = (1 - Math.min(sum, 0) / restingQuestDockMode) * (restingQuestDockMode - sum);
              const obj8 = {
                x: 0,
                y: num2,
                width: getQuestDockClosedWidth(width2, height.get().left, height.get().right),
                height: tmp51,
                prevDeltaY: diff,
              };
              const set6 = questDockWrapperSpecs.set;
              const merged2 = Object.assign(questDockWrapperSpecs.get());
              num2 = 0;
              if (0 < result1) {
                num2 = result1 * closure_2_15;
              }
              getQuestDockClosedWidth = questDockExpandHandler(activeQuestDockMode[16]).getQuestDockClosedWidth;
              questDockExpandHandler(activeQuestDockMode[16]);
              width2 = windowDimensions.get().width;
              tmp51 = sum;
              if (0 < result1) {
                tmp51 = restingQuestDockMode;
              }
              set6(obj8);
              const result2 = closure_1_2.set(minExpandedContentHeight.CLOSED);
            }
          } else {
            const result3 = -1 * (sum - height) * (1 - sum / sharedValue / youBarHorizontalMargin);
            let num = 0;
            set5 = set.set;
            if (youBarTotalHeight > 0) {
              const _Math2 = Math;
              num = -Math.min(result3, 0);
            }
            set5(num);
            if (closure_1_10.get().isDrawer) {
              const obj9 = { isDrawer: false };
              const merged3 = Object.assign(closure_1_10.get());
              const result4 = set(obj9);
            }
            const tmp17 =
              height !== questDockWrapperSpecs.get().height && closure_1_2.get() !== minExpandedContentHeight.EXPANDED;
            if (tmp17) {
              const obj5 = questDockExpandHandler(activeQuestDockMode[12]);
              const runOnJSResult = obj5.runOnJS(questDockExpandHandler(activeQuestDockMode[17]).triggerHapticFeedback);
              runOnJSResult(questDockExpandHandler(activeQuestDockMode[17]).HapticFeedbackTypes.IMPACT_MEDIUM);
            }
            const obj10 = {
              x: 0,
              y: result5 + bound1,
              width: getQuestDockCollapsedWidth(width, left, right),
              height,
              prevDeltaY: diff,
            };
            set2 = questDockWrapperSpecs.set;
            const merged4 = Object.assign(questDockWrapperSpecs.get());
            bound1 = result3;
            result5 = -1 * setRestingQuestDockMode;
            if (youBarTotalHeight > 0) {
              const _Math3 = Math;
              bound1 = Math.min(result3, 0);
            }
            getQuestDockCollapsedWidth = questDockExpandHandler(activeQuestDockMode[16]).getQuestDockCollapsedWidth;
            questDockExpandHandler(activeQuestDockMode[16]);
            width = windowDimensions.get().width;
            if (youBarTotalHeight > 0) {
              left = closure_1_14;
            } else {
              left = height.get().left;
            }
            if (youBarTotalHeight > 0) {
              right = closure_1_14;
            } else {
              right = height.get().right;
            }
            set2(obj10);
            const result6 = closure_1_2.set(minExpandedContentHeight.COLLAPSED);
          }
        };
        const onTouchesMoveResult = onTouchesDownResult.onTouchesMove(fn);
        let obj3 = {
          initialGestureOffset: sharedValue,
          minExpandedContentHeight,
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR: authStore3,
          QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT: authStore,
          questDockWrapperSpecs,
          youBarHeight: youBarTotalHeight,
          getQuestDockExpandedWidth: QuestDockUtils.getQuestDockExpandedWidth,
          windowDimensions,
          safeArea,
          QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: unpackModuleId,
          QUEST_DOCK_CLOSED_HEIGHT: metroRequire,
          QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR: closure_15,
          getQuestDockClosedWidth: QuestDockUtils.getQuestDockClosedWidth,
          QUEST_DOCK_COLLAPSED_HEIGHT: hasOwnProperty,
          QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR: authStore2,
          questDockOffset,
          runOnJS: ReanimatedRexport.runOnJS,
          triggerHapticFeedback: HapticUtils.triggerHapticFeedback,
          HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes,
          QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: metroImportDefault,
          getQuestDockCollapsedWidth: QuestDockUtils.getQuestDockCollapsedWidth,
          youBarHorizontalMargin,
        };
        fn2.__closure = obj3;
        fn2.__workletHash = 11177136508521;
        fn2.__initData = __initData2;
        const fn3 = function t(arg0) {
          let SOFT_DISMISSED;
          let obj2;
          let tmp5;
          let velocityY;
          let y;
          ({ velocityY, y } = arg0);
          const absolute = Math.abs(velocityY);
          if (absolute <= sharedValue2) {
            if (absolute < sharedValue2) {
              const tmp8 =
                obj2.get() === tmp5.CLOSED && SOFT_DISMISSED !== tmp5.EXPANDED && y < 0 && tmp2 > sharedValue1;
              if (tmp8) {
                SOFT_DISMISSED = tmp5.COLLAPSED;
              }
              if (SOFT_DISMISSED === tmp5.EXPANDED) {
                const obj3 = questDockExpandHandler(activeQuestDockMode[12]);
                obj3.runOnJS(closure_1_0)();
              }
              const obj4 = questDockExpandHandler(activeQuestDockMode[12]);
              obj4.runOnJS(setRestingQuestDockMode)(SOFT_DISMISSED);
            }
            tmp5 = minExpandedContentHeight;
            if (restingQuestDockMode.get() !== minExpandedContentHeight.COLLAPSED) {
              if (velocityY <= sharedValue2) {
                if (restingQuestDockMode.get() !== tmp5.COLLAPSED) {
                  if (restingQuestDockMode.get() !== tmp5.CLOSED) {
                    SOFT_DISMISSED = tmp5.COLLAPSED;
                  }
                }
                SOFT_DISMISSED = tmp5.RESET_TO_PREVIOUS;
              }
              SOFT_DISMISSED = tmp5.COLLAPSED;
            } else {
              SOFT_DISMISSED = tmp5.SOFT_DISMISSED;
            }
            obj2 = restingQuestDockMode;
          }
          SOFT_DISMISSED =
            restingQuestDockMode.get() === minExpandedContentHeight.EXPANDED
              ? minExpandedContentHeight.RESET_TO_PREVIOUS
              : minExpandedContentHeight.EXPANDED;
          tmp5 = minExpandedContentHeight;
          obj2 = restingQuestDockMode;
        };
        const onChangeResult = onTouchesMoveResult.onChange(fn2);
        let obj4 = {
          QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY: sharedValue2,
          restingQuestDockMode,
          QuestDockMode,
          initialGestureOffset: sharedValue,
          QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: unpackModuleId,
          runOnJS: ReanimatedRexport.runOnJS,
          onExpand: questDockExpandHandler,
          setRestingQuestDockMode,
        };
        fn3.__closure = obj4;
        fn3.__workletHash = 11055732902011;
        fn3.__initData = __initData;
        return onChangeResult.onEnd(fn3);
      }, items1);
      let obj9 = questDockExpandHandler(activeQuestDockMode[12]);
      class W {
        constructor() {
          const obj = { mode: activeQuestDockMode.get(), isVisible: sharedValue2.get() };
          return obj;
        }
      }
      W.__closure = { activeQuestDockMode, isVisibleSharedValue: sharedValue2 };
      W.__workletHash = 4784308368889;
      W.__initData = __initData7;
      class X {
        constructor(mode, mode2) {
          let mode1;
          mode = mode.mode;
          if (mode2 != null) {
            mode1 = mode2.mode;
          }
          let isVisible = mode !== mode1 && mode.mode !== minExpandedContentHeight.CLOSED;
          if (isVisible) {
            mode2 = undefined;
            if (mode2 != null) {
              mode2 = mode2.mode;
            }
            isVisible = mode2 !== minExpandedContentHeight.CLOSED;
          }
          if (isVisible) {
            isVisible = mode.isVisible;
          }
          if (isVisible) {
            const obj = questDockExpandHandler(activeQuestDockMode[12]);
            const runOnJSResult = obj.runOnJS(questDockExpandHandler(activeQuestDockMode[17]).triggerHapticFeedback);
            runOnJSResult(questDockExpandHandler(activeQuestDockMode[17]).HapticFeedbackTypes.IMPACT_MEDIUM);
          }
        }
      }
      let obj4 = {
        QuestDockMode: minExpandedContentHeight,
        runOnJS: questDockExpandHandler(activeQuestDockMode[12]).runOnJS,
        triggerHapticFeedback: questDockExpandHandler(activeQuestDockMode[17]).triggerHapticFeedback,
        HapticFeedbackTypes: questDockExpandHandler(activeQuestDockMode[17]).HapticFeedbackTypes,
      };
      X.__closure = obj4;
      X.__workletHash = 4090898896615;
      X.__initData = __initData8;
      const animatedReaction = obj9.useAnimatedReaction(W, X);
      return memo;
    };
let closure_30 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (children) => {
        const obj = react2;
        const cResult = obj.c(3);
        const tmp4 = closure_30();
        if (cResult[0] === tmp4) {
          let tmp5;
          if (cResult[1] === children.children) {
            tmp5 = cResult[2];
          }
          return tmp5;
        }
        const tmp6 = jsx(LegacyBaseButton.GestureDetector, { gesture: tmp4, children: children.children });
        cResult[0] = tmp4;
        cResult[1] = children.children;
        cResult[2] = tmp6;
        tmp5 = tmp6;
      }
    : (children) => jsx(LegacyBaseButton.GestureDetector, { gesture: closure_30(), children: children.children }),
);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockGestureDetector.tsx");

export default memoResult;
export const useQuestDockSwipeGesture = tmp3;
