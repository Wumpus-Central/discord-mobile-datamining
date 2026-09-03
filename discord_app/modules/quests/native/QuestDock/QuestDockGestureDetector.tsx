// === Module 15027: useQuestDockSwipeGesture ===

// Module 15027 (useQuestDockSwipeGesture)
import LegacyBaseButton from "LegacyBaseButton" /* 5661 */;
import importAllResult from "noop" /* 19 */;
import { QuestDockMode } from "QuestsExperimentLocations" /* 5396 */;
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT" /* 14937 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function useQuestDockSwipeGesture() {
  let obj = questDockExpandHandler(activeQuestDockMode[4]);
  const questDockCreative = obj.useQuestDockCreative();
  questDockExpandHandler = questDockExpandHandler(activeQuestDockMode[5]).useQuestDockExpandHandler(questDockCreative);
  const context = windowDimensions.useContext(questDockExpandHandler(activeQuestDockMode[6]).QuestDockGestureContext);
  const questDockWrapperSpecs = context.questDockWrapperSpecs;
  activeQuestDockMode = context.activeQuestDockMode;
  windowDimensions = context.windowDimensions;
  const minExpandedContentHeight = context.minExpandedContentHeight;
  let tmp4 = questDockWrapperSpecs(activeQuestDockMode[7])();
  closure_5 = tmp4;
  const context1 = windowDimensions.useContext(questDockExpandHandler(activeQuestDockMode[8]).QuestDockExternalCoordinationContext);
  const restingQuestDockMode = context1.restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  const questDockOffset = context1.questDockOffset;
  const isVisibleToUser = windowDimensions.useContext(questDockWrapperSpecs(activeQuestDockMode[9])).isVisibleToUser;
  let obj2 = questDockExpandHandler(activeQuestDockMode[5]);
  obj = { absoluteX: 0, absoluteY: 0, x: 0, y: 0, height: 0, isDrawer: restingQuestDockMode.get() === minExpandedContentHeight.EXPANDED, active: false };
  const sharedValue = questDockExpandHandler(activeQuestDockMode[10]).useSharedValue(obj);
  let obj3 = questDockExpandHandler(activeQuestDockMode[10]);
  const sharedValue1 = questDockExpandHandler(activeQuestDockMode[10]).useSharedValue(0);
  let obj5 = questDockExpandHandler(activeQuestDockMode[10]);
  const sharedValue2 = questDockExpandHandler(activeQuestDockMode[10]).useSharedValue(isVisibleToUser);
  const obj6 = questDockExpandHandler(activeQuestDockMode[10]);
  const youBarTotalHeight = questDockExpandHandler(activeQuestDockMode[11]).useYouBarTotalHeight();
  let obj7 = questDockExpandHandler(activeQuestDockMode[11]);
  const youBarHorizontalMargin = questDockExpandHandler(activeQuestDockMode[12]).useYouBarHorizontalMargin();
  const items = [isVisibleToUser, sharedValue2];
  const effect = windowDimensions.useEffect(() => {
    const result = sharedValue2.set(isVisibleToUser);
  }, items);
  const items1 = [restingQuestDockMode, sharedValue, tmp4, sharedValue1, windowDimensions, questDockWrapperSpecs, setRestingQuestDockMode, activeQuestDockMode, minExpandedContentHeight, youBarTotalHeight, youBarHorizontalMargin, questDockOffset, questDockExpandHandler];
  const memo = windowDimensions.useMemo(() => {
    const Gesture = questDockExpandHandler(activeQuestDockMode[13]).Gesture;
    const PanResult = Gesture.Pan();
    const manualActivationResult = Gesture.Pan().manualActivation(false);
    let result = Gesture.Pan().manualActivation(false).maxPointers(1).shouldCancelWhenOutside(false);
    class I {
      constructor(arg0) {
        result = closure_11.set(0);
        obj = { absoluteX: arg0.changedTouches[0].absoluteX, absoluteY: arg0.changedTouches[0].absoluteY, x: closure_1.get().x, y: closure_1.get().y, height: closure_1.get().height, isDrawer: closure_6.get() === closure_1_4.EXPANDED, active: false };
        result1 = closure_10.set(obj);
        return;
      }
    }
    let obj = { touchMoveCount: sharedValue1, initialGestureOffset: sharedValue, questDockWrapperSpecs, restingQuestDockMode, QuestDockMode: minExpandedContentHeight };
    I.__closure = obj;
    I.__workletHash = 15649211210155;
    I.__initData = closure_1_21;
    const maxPointersResult = Gesture.Pan().manualActivation(false).maxPointers(1);
    class A {
      constructor(arg0) {
        if (arg0.state === closure_1_0(closure_1_2[13]).State.BEGAN) {
          obj3 = closure_10;
          if (!closure_10.get().active) {
            tmp = closure_11;
            num = 1;
            result = closure_11.set(closure_11.get() + 1);
            tmp3 = closure_1_13;
            first = arg0.changedTouches[0];
            absoluteY = first.absoluteY;
            tmp4 = closure_11.get() <= closure_1_13;
            diff = obj3.get().absoluteY - absoluteY;
            tmp7 = globalThis;
            _Math = Math;
            absolute = Math.abs(diff);
            obj = closure_6;
            tmp9 = closure_1_4;
            tmp10 = closure_6.get() === closure_1_4.EXPANDED && tmp4;
            if (tmp10) {
              num2 = 0;
              tmp10 = diff >= 0;
            }
            if (!tmp10) {
              tmp11 = obj.get() === tmp9.COLLAPSED;
              if (tmp11) {
                tmp12 = closure_1_8;
                tmp11 = diff > closure_1_8;
              }
              if (!tmp11) {
                tmp13 = obj.get() === tmp9.EXPANDED;
                if (tmp13) {
                  tmp14 = diff < -closure_1_8 || diff > closure_1_8;
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
                  tmp16 = closure_1_9;
                  tmp15 = absolute > closure_1_9;
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
                  tmp18 = closure_1_9;
                  tmp17 = diff > closure_1_9;
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
                  tmp20 = closure_1_9;
                  tmp19 = absolute > closure_1_9;
                }
                tmp11 = tmp19;
              }
              if (tmp11) {
                obj = { absoluteX: null, absoluteY: null, x: null, y: null, height: null, isDrawer: null, active: true };
                obj[0] = first.absoluteX;
                obj[1] = absoluteY;
                tmp21 = closure_1;
                obj[2] = closure_1.get().x;
                obj[3] = closure_1.get().y;
                obj[4] = closure_1.get().height;
                obj[5] = obj.get() === tmp9.EXPANDED;
                result1 = obj3.set(obj);
              }
            }
          }
        }
        return;
      }
    }
    obj = { State: questDockExpandHandler(activeQuestDockMode[13]).State, initialGestureOffset: sharedValue, touchMoveCount: sharedValue1, QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD: youBarTotalHeight, restingQuestDockMode, QuestDockMode: minExpandedContentHeight, QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM: questDockOffset, QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM: isVisibleToUser, questDockWrapperSpecs };
    A.__closure = obj;
    A.__workletHash = 16451041821957;
    A.__initData = closure_1_20;
    const onTouchesDownResult = result.onTouchesDown(I);
    const fn = function s(absoluteY) {
      let obj = store6;
      const diff = absoluteY.absoluteY - store6.get().absoluteY;
      obj1 = closure_4;
      const value = closure_4.get();
      const diff1 = store6.get().height - diff;
      let tmp4 = diff1 > value;
      if (tmp4) {
        tmp4 = store2.get() === closure_1_4.EXPANDED;
      }
      let sum = diff1;
      if (tmp4) {
        sum = value + (diff1 - value) * closure_1_16;
      }
      if (obj1.get() > 0) {
        const _Math = Math;
        let bound = Math.min(obj1.get(), closure_1_10);
      } else {
        bound = closure_1_10;
      }
      if (sum >= bound) {
        if (!obj.get().isDrawer) {
          obj = {};
          const merged = Object.assign(obj.get());
          obj.isDrawer = true;
          const result = obj.set(obj);
        }
        obj = {};
        const merged1 = Object.assign(store.get());
        obj.x = 0;
        let num3 = 0;
        if (closure_13 > 0) {
          num3 = closure_13;
        }
        obj.y = num3;
        obj.width = closure_1_0(closure_1_2[14]).getQuestDockExpandedWidth(store3.get().width, store4.get().left, store4.get().right);
        const _Math4 = Math;
        obj.height = Math.min(sum, store3.get().height);
        obj.prevDeltaY = diff;
        const result1 = store.set(obj);
        const result2 = store2.set(closure_1_4.EXPANDED);
        const obj12 = closure_1_0(closure_1_2[14]);
      } else if (sum < closure_1_11) {
        if (store2.get() === closure_1_4.CLOSED) {
          const _Math5 = Math;
          const result3 = (1 - Math.min(sum, 0) / closure_1_6) * (closure_1_6 - sum);
          obj1 = {};
          const merged2 = Object.assign(store.get());
          obj1.x = 0;
          let num2 = 0;
          if (0 < result3) {
            num2 = result3 * closure_1_15;
          }
          obj1.y = num2;
          obj1.width = closure_1_0(closure_1_2[14]).getQuestDockClosedWidth(store3.get().width, store4.get().left, store4.get().right);
          let tmp49 = sum;
          if (0 < result3) {
            tmp49 = tmp76;
          }
          obj1.height = tmp49;
          obj1.prevDeltaY = diff;
          const result4 = store.set(obj1);
          const result5 = obj8.set(closure_1_4.CLOSED);
          const obj9 = closure_1_0(closure_1_2[14]);
          tmp76 = closure_1_6;
        }
        obj8 = store2;
      } else {
        const result6 = -1 * (sum - closure_1_5) * (1 - sum / closure_1_10 / closure_1_14);
        let num = 0;
        if (closure_13 > 0) {
          const _Math2 = Math;
          num = -Math.min(result6, 0);
        }
        const result7 = closure_8.set(num);
        if (obj.get().isDrawer) {
          const obj2 = {};
          const merged3 = Object.assign(obj.get());
          obj2.isDrawer = false;
          const result8 = obj.set(obj2);
        }
        let obj3 = store;
        let tmp17 = tmp69 !== store.get().height;
        if (tmp17) {
          tmp17 = store2.get() !== closure_1_4.EXPANDED;
        }
        if (tmp17) {
          const obj5 = closure_1_0(closure_1_2[10]);
          closure_1_0(closure_1_2[10]).runOnJS(closure_1_0(closure_1_2[15]).triggerHapticFeedback)(closure_1_0(closure_1_2[15]).HapticFeedbackTypes.IMPACT_MEDIUM);
          const runOnJSResult = closure_1_0(closure_1_2[10]).runOnJS(closure_1_0(closure_1_2[15]).triggerHapticFeedback);
        }
        obj3 = {};
        const merged4 = Object.assign(obj3.get());
        obj3.x = 0;
        let bound1 = result6;
        const result9 = -1 * closure_1_7;
        if (closure_13 > 0) {
          const _Math3 = Math;
          bound1 = Math.min(result6, 0);
        }
        obj3.y = result9 + bound1;
        if (closure_13 > 0) {
          let left = closure_14;
        } else {
          left = store4.get().left;
        }
        if (closure_13 > 0) {
          let right = closure_14;
        } else {
          right = store4.get().right;
        }
        obj3.width = closure_1_0(closure_1_2[14]).getQuestDockCollapsedWidth(store3.get().width, left, right);
        obj3.height = closure_1_5;
        obj3.prevDeltaY = diff;
        const result10 = obj3.set(obj3);
        const result11 = store2.set(closure_1_4.COLLAPSED);
        const obj7 = closure_1_0(closure_1_2[14]);
      }
    };
    const onTouchesMoveResult = result.onTouchesDown(I).onTouchesMove(A);
    fn.__closure = { initialGestureOffset: sharedValue, minExpandedContentHeight, activeQuestDockMode, QuestDockMode: minExpandedContentHeight, QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR: closure_1_16, QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT: sharedValue, questDockWrapperSpecs, youBarHeight: youBarTotalHeight, getQuestDockExpandedWidth: questDockExpandHandler(activeQuestDockMode[14]).getQuestDockExpandedWidth, windowDimensions, safeArea: closure_5, QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: sharedValue1, QUEST_DOCK_CLOSED_HEIGHT: restingQuestDockMode, QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR: closure_1_15, getQuestDockClosedWidth: questDockExpandHandler(activeQuestDockMode[14]).getQuestDockClosedWidth, QUEST_DOCK_COLLAPSED_HEIGHT: closure_5, QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR: youBarHorizontalMargin, questDockOffset, runOnJS: questDockExpandHandler(activeQuestDockMode[10]).runOnJS, triggerHapticFeedback: questDockExpandHandler(activeQuestDockMode[15]).triggerHapticFeedback, HapticFeedbackTypes: questDockExpandHandler(activeQuestDockMode[15]).HapticFeedbackTypes, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: setRestingQuestDockMode, getQuestDockCollapsedWidth: questDockExpandHandler(activeQuestDockMode[14]).getQuestDockCollapsedWidth, youBarHorizontalMargin };
    fn.__workletHash = 3375221025411;
    fn.__initData = closure_1_19;
    obj1 = { initialGestureOffset: sharedValue, minExpandedContentHeight, activeQuestDockMode, QuestDockMode: minExpandedContentHeight, QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR: closure_1_16, QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT: sharedValue, questDockWrapperSpecs, youBarHeight: youBarTotalHeight, getQuestDockExpandedWidth: questDockExpandHandler(activeQuestDockMode[14]).getQuestDockExpandedWidth, windowDimensions, safeArea: closure_5, QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: sharedValue1, QUEST_DOCK_CLOSED_HEIGHT: restingQuestDockMode, QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR: closure_1_15, getQuestDockClosedWidth: questDockExpandHandler(activeQuestDockMode[14]).getQuestDockClosedWidth, QUEST_DOCK_COLLAPSED_HEIGHT: closure_5, QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR: youBarHorizontalMargin, questDockOffset, runOnJS: questDockExpandHandler(activeQuestDockMode[10]).runOnJS, triggerHapticFeedback: questDockExpandHandler(activeQuestDockMode[15]).triggerHapticFeedback, HapticFeedbackTypes: questDockExpandHandler(activeQuestDockMode[15]).HapticFeedbackTypes, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: setRestingQuestDockMode, getQuestDockCollapsedWidth: questDockExpandHandler(activeQuestDockMode[14]).getQuestDockCollapsedWidth, youBarHorizontalMargin };
    const fn2 = function t(arg0) {
      ({ velocityY, y } = arg0);
      const absolute = Math.abs(velocityY);
      if (absolute <= closure_1_12) {
        if (store5.get() !== closure_1_4.COLLAPSED) {
          if (velocityY <= tmp3) {
            if (obj.get() !== tmp5.COLLAPSED) {
              if (obj.get() !== tmp5.CLOSED) {
                let COLLAPSED = tmp5.COLLAPSED;
              }
            }
            COLLAPSED = tmp5.RESET_TO_PREVIOUS;
          }
          COLLAPSED = tmp5.COLLAPSED;
        } else {
          COLLAPSED = tmp5.SOFT_DISMISSED;
        }
        let tmp10 = obj.get() === tmp5.CLOSED && COLLAPSED !== tmp5.EXPANDED;
        if (tmp10) {
          tmp10 = y < 0;
        }
        if (tmp10) {
          tmp10 = tmp2 > closure_1_11;
        }
        if (tmp10) {
          COLLAPSED = tmp5.COLLAPSED;
        }
        if (COLLAPSED === closure_1_4.EXPANDED) {
          closure_1_0(closure_1_2[10]).runOnJS(closure_0)();
          const obj2 = closure_1_0(closure_1_2[10]);
        }
        closure_1_0(closure_1_2[10]).runOnJS(closure_7)(COLLAPSED);
      }
      store5.get() === closure_1_4.EXPANDED ? closure_1_4.RESET_TO_PREVIOUS : closure_1_4.EXPANDED;
    };
    const onChangeResult = onTouchesMoveResult.onChange(fn);
    fn2.__closure = { QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY: sharedValue2, restingQuestDockMode, QuestDockMode: minExpandedContentHeight, initialGestureOffset: sharedValue, QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: sharedValue1, runOnJS: questDockExpandHandler(activeQuestDockMode[10]).runOnJS, onExpand: questDockExpandHandler, setRestingQuestDockMode };
    fn2.__workletHash = 4243094635005;
    fn2.__initData = closure_1_18;
    return onChangeResult.onEnd(fn2);
  }, items1);
  let obj8 = questDockExpandHandler(activeQuestDockMode[12]);
  class W {
    constructor() {
      obj = { mode: activeQuestDockMode.get(), isVisible: closure_12.get() };
      return obj;
    }
  }
  W.__closure = { activeQuestDockMode, isVisibleSharedValue: sharedValue2 };
  W.__workletHash = 13629688537260;
  W.__initData = closure_22;
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
        obj = closure_0(activeQuestDockMode[10]);
        runOnJSResult = obj.runOnJS(closure_0(activeQuestDockMode[15]).triggerHapticFeedback);
        tmp7Result = runOnJSResult(closure_0(activeQuestDockMode[15]).HapticFeedbackTypes.IMPACT_MEDIUM);
      }
      return;
    }
  }
  obj = { QuestDockMode: minExpandedContentHeight, runOnJS: questDockExpandHandler(activeQuestDockMode[10]).runOnJS, triggerHapticFeedback: questDockExpandHandler(activeQuestDockMode[15]).triggerHapticFeedback, HapticFeedbackTypes: questDockExpandHandler(activeQuestDockMode[15]).HapticFeedbackTypes };
  X.__closure = obj;
  X.__workletHash = 17417080823410;
  X.__initData = closure_23;
  const animatedReaction = questDockExpandHandler(activeQuestDockMode[10]).useAnimatedReaction(W, X);
  return memo;
}
let c3 = importAllResult;
({ QUEST_DOCK_COLLAPSED_HEIGHT: c5, QUEST_DOCK_CLOSED_HEIGHT: closure_6, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: error, QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM: closure_8, QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM: c9, QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT: c10, QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: unpackModuleId, QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY: closure_12, QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD: map1, QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR: closure_14, QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR: closure_15, QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR: closure_16 } = QUEST_DOCK_COLLAPSED_HEIGHT);
let closure_18 = { code: "function QuestDockGestureDetectorTsx1(event){const{QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY,restingQuestDockMode,QuestDockMode,initialGestureOffset,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,runOnJS,onExpand,setRestingQuestDockMode}=this.__closure;const{velocityY:velocityY,y:y}=event;const absoluteVelocityY=Math.abs(velocityY);const absoluteY=Math.abs(y);let resultingDockMode;if(absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&velocityY<0){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else if(absoluteVelocityY<QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&initialGestureOffset.get().isDrawer){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY||y>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT)){resultingDockMode=QuestDockMode.SOFT_DISMISSED;}else if(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()!==QuestDockMode.COLLAPSED){resultingDockMode=QuestDockMode.COLLAPSED;}else if(velocityY<0&&absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.COLLAPSED;}else{if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED||restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.COLLAPSED;}}if(restingQuestDockMode.get()===QuestDockMode.CLOSED&&resultingDockMode!==QuestDockMode.EXPANDED&&y<0&&absoluteY>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){resultingDockMode=QuestDockMode.COLLAPSED;}if(resultingDockMode===QuestDockMode.EXPANDED){runOnJS(onExpand)();}runOnJS(setRestingQuestDockMode)(resultingDockMode);}" };
let closure_19 = { code: "function QuestDockGestureDetectorTsx2(event){const{initialGestureOffset,minExpandedContentHeight,activeQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR,QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT,questDockWrapperSpecs,youBarHeight,getQuestDockExpandedWidth,windowDimensions,safeArea,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,QUEST_DOCK_CLOSED_HEIGHT,QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR,getQuestDockClosedWidth,QUEST_DOCK_COLLAPSED_HEIGHT,QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR,questDockOffset,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockCollapsedWidth,youBarHorizontalMargin}=this.__closure;const deltaY=event.absoluteY-initialGestureOffset.get().absoluteY;const expandedContentHeight=minExpandedContentHeight.get();let nextHeight=initialGestureOffset.get().height-deltaY;if(nextHeight>expandedContentHeight&&activeQuestDockMode.get()===QuestDockMode.EXPANDED){const overage=nextHeight-expandedContentHeight;const additionalHeight=overage*QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR;nextHeight=expandedContentHeight+additionalHeight;}const expandedModeTransitionHeight=minExpandedContentHeight.get()>0?Math.min(minExpandedContentHeight.get(),QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT):QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;if(nextHeight>=expandedModeTransitionHeight){if(!initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:true});}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:0,width:getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:Math.min(nextHeight,windowDimensions.get().height),prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.EXPANDED);}else if(nextHeight<QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){if(activeQuestDockMode.get()===QuestDockMode.CLOSED){const progress=1-Math.min(nextHeight,0)/QUEST_DOCK_CLOSED_HEIGHT;const newChange=progress*(QUEST_DOCK_CLOSED_HEIGHT-nextHeight);const nextY=newChange*QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR;const isDraggingDown=newChange>0;questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:isDraggingDown?nextY:0,width:getQuestDockClosedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:isDraggingDown?QUEST_DOCK_CLOSED_HEIGHT:nextHeight,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.CLOSED);}}else{const progress=nextHeight/QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;const yOffset=(nextHeight-QUEST_DOCK_COLLAPSED_HEIGHT)*-1;const newChange=yOffset*(1-progress/QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR);questDockOffset.set(youBarHeight>0?-Math.min(newChange,0):0);if(initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:false});}if(QUEST_DOCK_COLLAPSED_HEIGHT!==questDockWrapperSpecs.get().height&&activeQuestDockMode.get()!==QuestDockMode.EXPANDED){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED*-1+(youBarHeight>0?Math.min(newChange,0):newChange),width:getQuestDockCollapsedWidth(windowDimensions.get().width,youBarHeight>0?youBarHorizontalMargin:safeArea.get().left,youBarHeight>0?youBarHorizontalMargin:safeArea.get().right),height:QUEST_DOCK_COLLAPSED_HEIGHT,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.COLLAPSED);}}" };
let closure_20 = { code: "function QuestDockGestureDetectorTsx3(event){const{State,initialGestureOffset,touchMoveCount,QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD,restingQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM,QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM,questDockWrapperSpecs}=this.__closure;if(event.state!==State.BEGAN||initialGestureOffset.get().active){return;}touchMoveCount.set(touchMoveCount.get()+1);const isDragging=touchMoveCount.get()<=QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const computed=initialGestureOffset.get().absoluteY-absoluteY;const computedAbsolute=Math.abs(computed);if(restingQuestDockMode.get()===QuestDockMode.EXPANDED&&isDragging&&computed>=0){return;}if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.EXPANDED&&(computed<-QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM)||restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed>0&&computed>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM){initialGestureOffset.set({absoluteX:absoluteX,absoluteY:absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:true});}}" };
let closure_21 = { code: "function QuestDockGestureDetectorTsx4(event){const{touchMoveCount,initialGestureOffset,questDockWrapperSpecs,restingQuestDockMode,QuestDockMode}=this.__closure;touchMoveCount.set(0);initialGestureOffset.set({absoluteX:event.changedTouches[0].absoluteX,absoluteY:event.changedTouches[0].absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:false});}" };
let closure_22 = { code: "function QuestDockGestureDetectorTsx5(){const{activeQuestDockMode,isVisibleSharedValue}=this.__closure;return{mode:activeQuestDockMode.get(),isVisible:isVisibleSharedValue.get()};}" };
let closure_23 = { code: "function QuestDockGestureDetectorTsx6(current,previous){const{QuestDockMode,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current.mode===(previous===null||previous===void 0?void 0:previous.mode)||current.mode===QuestDockMode.CLOSED||(previous===null||previous===void 0?void 0:previous.mode)===QuestDockMode.CLOSED||!current.isVisible){return;}runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}" };
const memoResult = importAllResult.memo(function QuestDockGestureDetector(children) {
  const tmp = useQuestDockSwipeGesture();
  return jsx(LegacyBaseButton.GestureDetector, { gesture: useQuestDockSwipeGesture(), children: children.children });
});
let result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockGestureDetector.tsx");

export default memoResult;
export { useQuestDockSwipeGesture };