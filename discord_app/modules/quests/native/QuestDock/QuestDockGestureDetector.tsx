// === Module 17786: QuestDockGestureDetector ===

// Module 17786 (QuestDockGestureDetector)
import _mod1708 from "module_1708" /* 1708 */;
import HapticUtils from "HapticUtils" /* 5554 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5598 */;
import useSafeAreaInsetsSharedValueDefault from "useSafeAreaInsetsSharedValue" /* 12012 */;
import QuestDockUtils from "QuestDockUtils" /* 17697 */;
import QuestDockVisibilityContextDefault from "QuestDockVisibilityContext" /* 17783 */;
import noop from "module_19" /* 19 */;

require = fn;
function useQuestDockSwipeGesture() {
  const questDockCreative = require("QuestDockCreativeContext").useQuestDockCreative();
  const obj = require("QuestDockCreativeContext");
  const questDockExpandHandler = require("QuestDockHooks").useQuestDockExpandHandler(questDockCreative);
  _require = questDockExpandHandler;
  const context = noop.useContext(require("QuestDockGestureContext").QuestDockGestureContext);
  const activeQuestDockMode = context.activeQuestDockMode;
  dependencyMap = activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  noop = windowDimensions;
  const minExpandedContentHeight = context.minExpandedContentHeight;
  const tmp6 = useSafeAreaInsetsSharedValueDefault();
  closure_5 = tmp6;
  const context1 = noop.useContext(require("QuestDockExternalCoordinationContext").QuestDockExternalCoordinationContext);
  const restingQuestDockMode = context1.restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  const questDockOffset = context1.questDockOffset;
  const isVisibleToUser = noop.useContext(QuestDockVisibilityContextDefault).isVisibleToUser;
  const obj2 = require("QuestDockHooks");
  let point = { absoluteX: 0, absoluteY: 0, x: 0, y: 0, height: 0, isDrawer: restingQuestDockMode.get() === minExpandedContentHeight.EXPANDED, active: false };
  const sharedValue = require("module_1655").useSharedValue(point);
  let obj3 = require("module_1655");
  const tmp8 = minExpandedContentHeight;
  const sharedValue1 = require("module_1655").useSharedValue(0);
  let obj5 = require("module_1655");
  const sharedValue2 = require("module_1655").useSharedValue(isVisibleToUser);
  const obj6 = require("module_1655");
  const youBarTotalHeight = require("useYouBarTotalHeight").useYouBarTotalHeight();
  let obj7 = require("useYouBarTotalHeight");
  const youBarHorizontalMargin = require("useYouBarMargins").useYouBarHorizontalMargin();
  items = [isVisibleToUser, sharedValue2];
  const effect = noop.useEffect(() => {
    const result = sharedValue2.set(isVisibleToUser);
  }, items);
  let items1 = [restingQuestDockMode, sharedValue, tmp6, sharedValue1, windowDimensions, context.questDockWrapperSpecs, setRestingQuestDockMode, activeQuestDockMode, minExpandedContentHeight, youBarTotalHeight, youBarHorizontalMargin, questDockOffset, questDockExpandHandler];
  const memo = noop.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const manualActivationResult = Gesture.Pan().manualActivation(false);
    let result = Gesture.Pan().manualActivation(false).maxPointers(1).shouldCancelWhenOutside(false);
    items = [_undefined11, sharedValue1, sharedValue, c1, restingQuestDockMode, QuestDockMode];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items;
    class QuestDockGestureDetectorTsx1 {
      constructor(arg0) {
        result = closure_0.set(0);
        point = { absoluteX: arg0.changedTouches[0].absoluteX, absoluteY: arg0.changedTouches[0].absoluteY, x: closure_2.get().x, y: closure_2.get().y, height: closure_2.get().height, isDrawer: closure_3.get() === closure_4.EXPANDED, active: false };
        result1 = closure_1.set(point);
        return;
      }
    }
    const items1 = [tmp9, tmp10, tmp11, tmp12, tmp13];
    QuestDockGestureDetectorTsx1.__closure = items1;
    QuestDockGestureDetectorTsx1.__workletHash = 4233460640567;
    QuestDockGestureDetectorTsx1.__initData = tmp8;
    const maxPointersResult = Gesture.Pan().manualActivation(false).maxPointers(1);
    const items2 = [_undefined12, LegacyBaseButton.State, sharedValue, sharedValue1, state, restingQuestDockMode, QuestDockMode, React5, React6, c1];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items2;
    class QuestDockGestureDetectorTsx2 {
      constructor(arg0) {
        if (arg0.state === closure_0.BEGAN) {
          obj3 = closure_1;
          if (!closure_1.get().active) {
            tmp = closure_2;
            num = 1;
            result = closure_2.set(closure_2.get() + 1);
            tmp3 = closure_3;
            first = arg0.changedTouches[0];
            absoluteY = first.absoluteY;
            tmp4 = closure_2.get() <= closure_3;
            diff = obj3.get().absoluteY - absoluteY;
            tmp7 = globalThis;
            _Math = Math;
            absolute = Math.abs(diff);
            obj = closure_4;
            tmp9 = closure_5;
            tmp10 = closure_4.get() === closure_5.EXPANDED && tmp4;
            if (tmp10) {
              num2 = 0;
              tmp10 = diff >= 0;
            }
            if (!tmp10) {
              tmp11 = obj.get() === tmp9.COLLAPSED;
              if (tmp11) {
                tmp12 = closure_6;
                tmp11 = diff > closure_6;
              }
              if (!tmp11) {
                tmp13 = obj.get() === tmp9.EXPANDED;
                if (tmp13) {
                  tmp14 = diff < -closure_6 || diff > closure_6;
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
                  tmp16 = closure_7;
                  tmp15 = absolute > closure_7;
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
                  tmp18 = closure_7;
                  tmp17 = diff > closure_7;
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
                  tmp20 = closure_7;
                  tmp19 = absolute > closure_7;
                }
                tmp11 = tmp19;
              }
              if (tmp11) {
                point = { absoluteX: null, absoluteY: null, x: null, y: null, height: null, isDrawer: null, active: true };
                point.absoluteX = first.absoluteX;
                point.absoluteY = absoluteY;
                tmp21 = closure_8;
                point.x = closure_8.get().x;
                point.y = closure_8.get().y;
                point.height = closure_8.get().height;
                point.isDrawer = obj.get() === tmp9.EXPANDED;
                result1 = obj3.set(point);
              }
            }
          }
        }
        return;
      }
    }
    const items3 = [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23];
    QuestDockGestureDetectorTsx2.__closure = items3;
    QuestDockGestureDetectorTsx2.__workletHash = 3431492154013;
    QuestDockGestureDetectorTsx2.__initData = tmp14;
    const onTouchesDownResult = result.onTouchesDown(QuestDockGestureDetectorTsx1);
    const items4 = [closure_20, sharedValue, minExpandedContentHeight, c2, QuestDockMode, closure_2_16, refs, c1, youBarTotalHeight, QuestDockUtils.getQuestDockExpandedWidth, c3, _undefined6, closure_2_11, timestampProducer, colors, QuestDockUtils.getQuestDockClosedWidth, youBarHorizontalMargin, hasOwnProperty, gesture, questDockOffset, _mod1708.scheduleOnRN, HapticUtils.triggerHapticFeedback, HapticUtils.HapticFeedbackTypes, metroImportDefault, QuestDockUtils.getQuestDockCollapsedWidth];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    c9 = undefined;
    c10 = undefined;
    c11 = undefined;
    c12 = undefined;
    c13 = undefined;
    c14 = undefined;
    c15 = undefined;
    c16 = undefined;
    c17 = undefined;
    c18 = undefined;
    c19 = undefined;
    c20 = undefined;
    c21 = undefined;
    c22 = undefined;
    c23 = undefined;
    [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49] = items4;
    class QuestDockGestureDetectorTsx3 {
      constructor(arg0) {
        obj = closure_0;
        diff = arg0.absoluteY - closure_0.get().absoluteY;
        obj2 = closure_1;
        value = closure_1.get();
        diff1 = closure_0.get().height - diff;
        tmp4 = diff1 > value;
        if (tmp4) {
          tmp5 = closure_2;
          tmp6 = closure_3;
          tmp4 = closure_2.get() === closure_3.EXPANDED;
        }
        sum = diff1;
        if (tmp4) {
          tmp8 = closure_4;
          sum = value + (diff1 - value) * closure_4;
        }
        if (obj2.get() > 0) {
          tmp11 = globalThis;
          _Math = Math;
          tmp12 = closure_5;
          bound = Math.min(obj2.get(), closure_5);
          tmp9 = closure_5;
        } else {
          tmp9 = closure_5;
          bound = closure_5;
        }
        if (sum >= bound) {
          if (!obj.get().isDrawer) {
            obj1 = {};
            tmp55 = obj1;
            merged = Object.assign(obj.get());
            flag2 = true;
            obj1.isDrawer = true;
            result = obj.set(obj1);
          }
          obj10 = {};
          tmp58 = closure_6;
          tmp59 = obj10;
          merged1 = Object.assign(closure_6.get());
          obj10.x = 0;
          num5 = 0;
          if (closure_7 > 0) {
            num5 = closure_7;
          }
          obj10.y = num5;
          tmp61 = closure_8;
          tmp62 = closure_9;
          tmp63 = closure_10;
          obj10.width = closure_8(closure_9.get().width, closure_10.get().left, closure_10.get().right);
          tmp64 = globalThis;
          _Math4 = Math;
          obj10.height = Math.min(sum, closure_9.get().height);
          obj10.prevDeltaY = diff;
          result1 = closure_6.set(obj10);
          tmp66 = closure_2;
          tmp67 = closure_3;
          result2 = closure_2.set(closure_3.EXPANDED);
        } else {
          tmp69 = closure_11;
          if (sum < closure_11) {
            obj6 = closure_2;
            if (closure_2.get() === closure_3.CLOSED) {
              tmp75 = globalThis;
              _Math5 = Math;
              num8 = 1;
              result3 = (1 - Math.min(sum, 0) / closure_12) * (closure_12 - sum);
              obj11 = {};
              tmp76 = closure_12;
              tmp78 = closure_6;
              tmp79 = obj11;
              merged2 = Object.assign(closure_6.get());
              obj11.x = 0;
              num3 = 0;
              if (0 < result3) {
                tmp43 = closure_13;
                num3 = result3 * closure_13;
              }
              obj11.y = num3;
              tmp45 = closure_9;
              tmp44 = closure_14;
              width2 = closure_9.get().width;
              tmp46 = closure_10;
              left2 = closure_10.get().left;
              right2 = closure_10.get().right;
              tmp47 = closure_7;
              num4 = 0;
              if (closure_7 > 0) {
                num4 = closure_15;
              }
              tmp48 = width2;
              tmp49 = left2;
              tmp50 = right2;
              tmp51 = num4;
              obj11.width = tmp44(width2, left2, right2, num4);
              tmp52 = sum;
              if (0 < result3) {
                tmp52 = tmp76;
              }
              obj11.height = tmp52;
              obj11.prevDeltaY = diff;
              result4 = closure_6.set(obj11);
              result5 = obj6.set(tmp42.CLOSED);
            }
          } else {
            tmp70 = closure_16;
            num6 = -1;
            tmp71 = closure_17;
            num7 = 1;
            result6 = -1 * (sum - closure_16) * (1 - sum / tmp9 / closure_17);
            tmp74 = closure_7;
            num = 0;
            tmp73 = closure_18;
            if (closure_7 > 0) {
              tmp13 = globalThis;
              _Math2 = Math;
              num = -Math.min(result6, 0);
            }
            result7 = closure_18.set(num);
            if (obj.get().isDrawer) {
              obj12 = {};
              tmp15 = obj12;
              merged3 = Object.assign(obj.get());
              flag = false;
              obj12.isDrawer = false;
              result8 = obj.set(obj12);
            }
            obj4 = closure_6;
            tmp18 = tmp70 !== closure_6.get().height;
            if (tmp18) {
              tmp19 = closure_2;
              tmp20 = closure_3;
              tmp18 = closure_2.get() !== closure_3.EXPANDED;
            }
            if (tmp18) {
              tmp21 = closure_19;
              tmp22 = closure_20;
              tmp23 = closure_21;
              tmp24 = closure_19(closure_20, closure_21.IMPACT_MEDIUM);
            }
            obj13 = {};
            tmp25 = obj13;
            merged4 = Object.assign(obj4.get());
            obj13.x = 0;
            tmp27 = closure_22;
            bound1 = result6;
            result9 = -1 * closure_22;
            if (tmp74 > 0) {
              tmp30 = globalThis;
              _Math3 = Math;
              bound1 = Math.min(result6, 0);
            }
            obj13.y = result9 + bound1;
            tmp32 = closure_9;
            tmp31 = closure_23;
            width = closure_9.get().width;
            tmp33 = closure_10;
            left = closure_10.get().left;
            right = closure_10.get().right;
            num2 = 0;
            if (tmp74 > 0) {
              num2 = closure_15;
            }
            tmp34 = width;
            tmp35 = left;
            tmp36 = right;
            tmp37 = num2;
            obj13.width = tmp31(width, left, right, num2);
            obj13.height = tmp70;
            obj13.prevDeltaY = diff;
            result10 = obj4.set(obj13);
            tmp39 = closure_2;
            tmp40 = closure_3;
            result11 = closure_2.set(closure_3.COLLAPSED);
          }
        }
        return;
      }
    }
    const items5 = [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49];
    QuestDockGestureDetectorTsx3.__closure = items5;
    QuestDockGestureDetectorTsx3.__workletHash = 16327529222102;
    QuestDockGestureDetectorTsx3.__initData = tmp25;
    const onTouchesMoveResult = result.onTouchesDown(QuestDockGestureDetectorTsx1).onTouchesMove(QuestDockGestureDetectorTsx2);
    const items6 = [constants, application_id, restingQuestDockMode, QuestDockMode, sharedValue, closure_2_11, _mod1708.scheduleOnRN, c0, setRestingQuestDockMode];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    [tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58] = items6;
    class QuestDockGestureDetectorTsx4 {
      constructor(arg0) {
        ({ velocityY, y } = arg0);
        absolute = Math.abs(velocityY);
        tmp3 = closure_0;
        if (absolute <= closure_0) {
          if (absolute < tmp3) {
            tmp4 = closure_3;
          }
          obj = closure_1;
          tmp5 = closure_2;
          if (closure_1.get() !== closure_2.COLLAPSED) {
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
              tmp18 = closure_4;
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
            tmp11 = closure_4;
            tmp10 = tmp2 > closure_4;
          }
          if (tmp10) {
            COLLAPSED = tmp5.COLLAPSED;
          }
          if (COLLAPSED === tmp5.EXPANDED) {
            tmp12 = closure_5;
            tmp13 = closure_6;
            tmp14 = closure_5(closure_6);
          }
          tmp15 = closure_5;
          tmp16 = closure_7;
          tmp17 = closure_5(closure_7, COLLAPSED);
          return;
        } else {
          num = 0;
        }
        tmp7 = closure_1;
        tmp8 = closure_2;
        tmp9 = closure_1.get() === closure_2.EXPANDED ? tmp8.RESET_TO_PREVIOUS : tmp8.EXPANDED;
        return;
      }
    }
    const items7 = [tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58];
    QuestDockGestureDetectorTsx4.__closure = items7;
    QuestDockGestureDetectorTsx4.__workletHash = 4967970078788;
    QuestDockGestureDetectorTsx4.__initData = tmp50;
    return result.onTouchesDown(QuestDockGestureDetectorTsx1).onTouchesMove(QuestDockGestureDetectorTsx2).onChange(QuestDockGestureDetectorTsx3).onEnd(QuestDockGestureDetectorTsx4);
  }, items1);
  let obj8 = require("useYouBarMargins");
  let items2 = [closure_22, activeQuestDockMode, sharedValue2];
  _require = undefined;
  importDefault = undefined;
  [tmp16, tmp17, tmp18] = items2;
  class QuestDockGestureDetectorTsx5 {
    constructor() {
      obj = { mode: closure_0.get(), isVisible: closure_1.get() };
      return obj;
    }
  }
  let items3 = [tmp17, tmp18];
  QuestDockGestureDetectorTsx5.__closure = items3;
  QuestDockGestureDetectorTsx5.__workletHash = 4342354480469;
  QuestDockGestureDetectorTsx5.__initData = tmp16;
  let items4 = [closure_23, tmp8, require("module_1708").scheduleOnRN, require("HapticUtils").triggerHapticFeedback, require("HapticUtils").HapticFeedbackTypes];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp19, tmp20, tmp21, tmp22, tmp23] = items4;
  class QuestDockGestureDetectorTsx6 {
    constructor(arg0, arg1) {
      mode = undefined;
      if (arg1 != null) {
        mode = arg1.mode;
      }
      isVisible = arg0.mode !== mode;
      if (isVisible) {
        tmp2 = closure_0;
        isVisible = arg0.mode !== closure_0.CLOSED;
      }
      if (isVisible) {
        mode1 = undefined;
        if (arg1 != null) {
          mode1 = arg1.mode;
        }
        tmp4 = closure_0;
        isVisible = mode1 !== closure_0.CLOSED;
      }
      if (isVisible) {
        isVisible = arg0.isVisible;
      }
      if (isVisible) {
        tmp5 = closure_1;
        tmp6 = closure_2;
        tmp7 = closure_3;
        tmp8 = closure_1(closure_2, closure_3.IMPACT_MEDIUM);
      }
      return;
    }
  }
  let items5 = [tmp20, tmp21, tmp22, tmp23];
  QuestDockGestureDetectorTsx6.__closure = items5;
  QuestDockGestureDetectorTsx6.__workletHash = 6602612210534;
  QuestDockGestureDetectorTsx6.__initData = tmp19;
  const animatedReaction = require("module_1655").useAnimatedReaction(QuestDockGestureDetectorTsx5, QuestDockGestureDetectorTsx6);
  return memo;
}
const QuestDockMode = fn(5338).QuestDockMode;
const QuestDockConstants = fn(17698);
({ QUEST_DOCK_COLLAPSED_HEIGHT: hasOwnProperty, QUEST_DOCK_CLOSED_HEIGHT: closure_6, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: metroImportDefault, QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM: closure_8, QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM: closure_9, QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT: closure_10, QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: closure_11, QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY: closure_12, QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD: map1, QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR: closure_14, QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR: closure_15, QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR: closure_16 } = QuestDockConstants);
const jsx = fn(21).jsx;
let closure_18 = { code: "(function QuestDockGestureDetectorTsx1(event){let[touchMoveCount,initialGestureOffset,questDockWrapperSpecs,restingQuestDockMode,QuestDockMode]=this.__closure;touchMoveCount.set(0);initialGestureOffset.set({absoluteX:event.changedTouches[0].absoluteX,absoluteY:event.changedTouches[0].absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:false});})" };
let closure_19 = { code: "(function QuestDockGestureDetectorTsx2(event){let[State,initialGestureOffset,touchMoveCount,QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD,restingQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM,QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM,questDockWrapperSpecs]=this.__closure;if(event.state!==State.BEGAN||initialGestureOffset.get().active){return;}touchMoveCount.set(touchMoveCount.get()+1);const isDragging=touchMoveCount.get()<=QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const computed=initialGestureOffset.get().absoluteY-absoluteY;const computedAbsolute=Math.abs(computed);if(restingQuestDockMode.get()===QuestDockMode.EXPANDED&&isDragging&&computed>=0){return;}if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.EXPANDED&&(computed<-QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM)||restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed>0&&computed>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM){initialGestureOffset.set({absoluteX:absoluteX,absoluteY:absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:true});}})" };
let closure_20 = { code: "(function QuestDockGestureDetectorTsx3(event){let[initialGestureOffset,minExpandedContentHeight,activeQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR,QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT,questDockWrapperSpecs,youBarHeight,getQuestDockExpandedWidth,windowDimensions,safeArea,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,QUEST_DOCK_CLOSED_HEIGHT,QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR,getQuestDockClosedWidth,youBarHorizontalMargin,QUEST_DOCK_COLLAPSED_HEIGHT,QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR,questDockOffset,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockCollapsedWidth]=this.__closure;const deltaY=event.absoluteY-initialGestureOffset.get().absoluteY;const expandedContentHeight=minExpandedContentHeight.get();let nextHeight=initialGestureOffset.get().height-deltaY;if(nextHeight>expandedContentHeight&&activeQuestDockMode.get()===QuestDockMode.EXPANDED){const overage=nextHeight-expandedContentHeight;const additionalHeight=overage*QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR;nextHeight=expandedContentHeight+additionalHeight;}const expandedModeTransitionHeight=minExpandedContentHeight.get()>0?Math.min(minExpandedContentHeight.get(),QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT):QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;if(nextHeight>=expandedModeTransitionHeight){if(!initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:true});}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:0,width:getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:Math.min(nextHeight,windowDimensions.get().height),prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.EXPANDED);}else if(nextHeight<QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){if(activeQuestDockMode.get()===QuestDockMode.CLOSED){const progress=1-Math.min(nextHeight,0)/QUEST_DOCK_CLOSED_HEIGHT;const newChange=progress*(QUEST_DOCK_CLOSED_HEIGHT-nextHeight);const nextY=newChange*QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR;const isDraggingDown=newChange>0;questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:isDraggingDown?nextY:0,width:getQuestDockClosedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right,youBarHeight>0?youBarHorizontalMargin:0),height:isDraggingDown?QUEST_DOCK_CLOSED_HEIGHT:nextHeight,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.CLOSED);}}else{const progress=nextHeight/QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;const yOffset=(nextHeight-QUEST_DOCK_COLLAPSED_HEIGHT)*-1;const newChange=yOffset*(1-progress/QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR);questDockOffset.set(youBarHeight>0?-Math.min(newChange,0):0);if(initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:false});}if(QUEST_DOCK_COLLAPSED_HEIGHT!==questDockWrapperSpecs.get().height&&activeQuestDockMode.get()!==QuestDockMode.EXPANDED){scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED*-1+(youBarHeight>0?Math.min(newChange,0):newChange),width:getQuestDockCollapsedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right,youBarHeight>0?youBarHorizontalMargin:0),height:QUEST_DOCK_COLLAPSED_HEIGHT,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.COLLAPSED);}})" };
let closure_21 = { code: "(function QuestDockGestureDetectorTsx4(event){let[QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY,restingQuestDockMode,QuestDockMode,initialGestureOffset,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,scheduleOnRN,onExpand,setRestingQuestDockMode]=this.__closure;const{velocityY:velocityY,y:y}=event;const absoluteVelocityY=Math.abs(velocityY);const absoluteY=Math.abs(y);let resultingDockMode;if(absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&velocityY<0){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else if(absoluteVelocityY<QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&initialGestureOffset.get().isDrawer){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY||y>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT)){resultingDockMode=QuestDockMode.SOFT_DISMISSED;}else if(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()!==QuestDockMode.COLLAPSED){resultingDockMode=QuestDockMode.COLLAPSED;}else if(velocityY<0&&absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.COLLAPSED;}else{if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED||restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.COLLAPSED;}}if(restingQuestDockMode.get()===QuestDockMode.CLOSED&&resultingDockMode!==QuestDockMode.EXPANDED&&y<0&&absoluteY>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){resultingDockMode=QuestDockMode.COLLAPSED;}if(resultingDockMode===QuestDockMode.EXPANDED){scheduleOnRN(onExpand);}scheduleOnRN(setRestingQuestDockMode,resultingDockMode);})" };
let closure_22 = { code: "(function QuestDockGestureDetectorTsx5(){let[activeQuestDockMode,isVisibleSharedValue]=this.__closure;return{mode:activeQuestDockMode.get(),isVisible:isVisibleSharedValue.get()};})" };
let closure_23 = { code: "(function QuestDockGestureDetectorTsx6(current,previous){let[QuestDockMode,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes]=this.__closure;if(current.mode===(previous===null||previous===void 0?void 0:previous.mode)||current.mode===QuestDockMode.CLOSED||(previous===null||previous===void 0?void 0:previous.mode)===QuestDockMode.CLOSED||!current.isVisible){return;}scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockGestureDetector.tsx");

export default noop.memo(function QuestDockGestureDetector(children) {
  const tmp = useQuestDockSwipeGesture();
  return jsx(LegacyBaseButton.GestureDetector, { gesture: useQuestDockSwipeGesture(), children: children.children });
});
export { useQuestDockSwipeGesture };