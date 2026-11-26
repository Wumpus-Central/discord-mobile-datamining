// === Module 14598: UserProfileWidgetGameReorderGrid ===

// Module 14598 (UserProfileWidgetGameReorderGrid)
import util from "util" /* 1112 */;
import _mod1654 from "module_1654" /* 1654 */;
import _mod1707 from "module_1707" /* 1707 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5052 */;
import timing_timing from "timing/timing" /* 5253 */;
import timingPresets from "timingPresets" /* 5256 */;
import HapticUtils from "HapticUtils" /* 5259 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5303 */;
import useStableCallbackDefault from "useStableCallback" /* 7328 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 11536 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 14584 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const _modDef1654 = tmp2(1654);
require = fn;
const View = fn(17).View;
let jsx = fn(21).jsx;
const createStyles = fn(5043);
let closure_7 = createStyles.createStyles({ grid: { position: "relative", width: "100%" }, tile: { position: "absolute" }, unmeasured: { opacity: 0 } });
let items = [{ code: "(function getSlotOffset_UserProfileWidgetGameReorderGridTsx1(index,columns,itemWidth,itemHeight,gap){return{x:index%columns*(itemWidth+gap),y:Math.floor(index/columns)*(itemHeight+gap)};})" }];
[tmp2] = items;
function getSlotOffset(arg0, arg1, arg2, arg3, arg4) {
  const point = { x: arg0 % arg1 * (arg2 + arg4), y: Math.floor(arg0 / arg1) * (arg3 + arg4) };
  return point;
}
getSlotOffset.__workletHash = 11422838438734;
getSlotOffset.__initData = tmp2;
let items1 = [{ code: "(function moveItem_UserProfileWidgetGameReorderGridTsx2(ids,fromIndex,toIndex){if(fromIndex===toIndex||fromIndex<0||fromIndex>=ids.length){return ids;}const next=[...ids];const[moved]=next.splice(fromIndex,1);next.splice(Math.min(Math.max(toIndex,0),next.length),0,moved);return next;})" }];
[tmp3] = items1;
function moveItem(arg0, arg1, arg2) {
  if (arg1 !== arg2) {
    if (arg1 >= 0) {
      if (arg1 < arg0.length) {
        items = [];
        HermesBuiltin.arraySpread(arg0, 0);
        const _Math = Math;
        const _Math2 = Math;
        items.splice(Math.min(Math.max(arg2, 0), items.length), 0, _slicedToArray(items.splice(arg1, 1), 1)[0]);
        return items;
      }
    }
  }
  return arg0;
}
moveItem.__workletHash = 7690236456202;
moveItem.__initData = tmp3;
let closure_10 = { code: "(function UserProfileWidgetGameReorderGridTsx3(){let[orderShared,gameId,getSlotOffset,columns,itemWidth,itemHeight,gap]=this.__closure;const slot=orderShared.get().indexOf(gameId);if(slot<0){return null;}const offset=getSlotOffset(slot,columns,itemWidth,itemHeight,gap);return{x:offset.x,y:offset.y,layoutKey:columns+\":\"+itemWidth+\":\"+itemHeight};})" };
let closure_11 = { code: "(function UserProfileWidgetGameReorderGridTsx4(target,previousTarget){let[isThisTileDragging,positionX,positionY,withTiming,timingStandard]=this.__closure;if(target==null||isThisTileDragging.get()){return;}if(previousTarget==null||previousTarget.layoutKey!==target.layoutKey){positionX.set(target.x);positionY.set(target.y);return;}if(target.x!==previousTarget.x){positionX.set(withTiming(target.x,timingStandard));}if(target.y!==previousTarget.y){positionY.set(withTiming(target.y,timingStandard));}})" };
const constants = { code: "(function UserProfileWidgetGameReorderGridTsx5(){let[orderShared,clamp,positionX,itemWidth,gap,columns,positionY,itemHeight,moveItem,gameId,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes]=this.__closure;const order=orderShared.get();const column=clamp(Math.floor((positionX.get()+itemWidth/2)/(itemWidth+gap)),0,columns-1);const row=Math.max(Math.floor((positionY.get()+itemHeight/2)/(itemHeight+gap)),0);const to=clamp(row*columns+column,0,order.length-1);const next=moveItem(order,order.indexOf(gameId),to);if(next!==order){orderShared.set(next);scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.DRAG_AND_DROP_MOVE);}})" };
let closure_13 = { code: "(function UserProfileWidgetGameReorderGridTsx6(){let[scrollOffset]=this.__closure;return scrollOffset.get();})" };
let closure_14 = { code: "(function UserProfileWidgetGameReorderGridTsx7(offset,previousOffset){let[isThisTileDragging,positionY,reslot]=this.__closure;if(previousOffset==null||!isThisTileDragging.get()){return;}positionY.set(positionY.get()+(offset-previousOffset));reslot();})" };
let closure_15 = { code: "(function handleStart_UserProfileWidgetGameReorderGridTsx8(source){let[isAnyDragActive,isThisTileDragging,activeGesture,dragStartIndex,orderShared,gameId,dragOrigin,positionX,positionY,measure,scrollRef,dragViewport,scale,withTiming,DRAG_SCALE,timingStandard,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes]=this.__closure;if(isAnyDragActive.get()){return;}isAnyDragActive.set(true);isThisTileDragging.set(true);activeGesture.set(source);dragStartIndex.set(orderShared.get().indexOf(gameId));dragOrigin.set({x:positionX.get(),y:positionY.get()});const viewport=measure(scrollRef);dragViewport.set(viewport==null?null:{pageY:viewport.pageY,height:viewport.height});scale.set(withTiming(DRAG_SCALE,timingStandard));scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.DRAG_AND_DROP_START);})" };
let closure_16 = { code: "(function handleChange_UserProfileWidgetGameReorderGridTsx9(source,event){let[activeGesture,positionX,positionY,reslot,dragViewport,AUTO_SCROLL_EDGE_SIZE,autoScrollSpeed,clamp]=this.__closure;if(activeGesture.get()!==source){return;}positionX.set(positionX.get()+event.changeX);positionY.set(positionY.get()+event.changeY);reslot();const viewport=dragViewport.get();if(viewport==null){return;}const fromTop=event.absoluteY-viewport.pageY;const fromBottom=viewport.pageY+viewport.height-event.absoluteY;if(fromTop<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(-1+clamp(fromTop,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else if(fromBottom<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(1-clamp(fromBottom,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else{autoScrollSpeed.set(0);}})" };
let closure_17 = { code: "(function handleFinalize_UserProfileWidgetGameReorderGridTsx10(source){let[activeGesture,autoScrollSpeed,dragViewport,orderShared,gameId,getSlotOffset,columns,itemWidth,itemHeight,gap,positionX,withTiming,timingStandard,positionY,scale,isThisTileDragging,isAnyDragActive,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,dragStartIndex,onCommitOrder]=this.__closure;if(activeGesture.get()!==source){return;}activeGesture.set(null);autoScrollSpeed.set(0);dragViewport.set(null);const order=orderShared.get();const slot=order.indexOf(gameId);if(slot>=0){const target=getSlotOffset(slot,columns,itemWidth,itemHeight,gap);positionX.set(withTiming(target.x,timingStandard));positionY.set(withTiming(target.y,timingStandard));}scale.set(withTiming(1,timingStandard));isThisTileDragging.set(false);isAnyDragActive.set(false);scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.DRAG_AND_DROP_END);if(slot>=0&&slot!==dragStartIndex.get()){scheduleOnRN(onCommitOrder,order);}})" };
let closure_18 = { code: "(function UserProfileWidgetGameReorderGridTsx11(){let[handleStart]=this.__closure;handleStart('handle');})" };
let closure_19 = { code: "(function UserProfileWidgetGameReorderGridTsx12(event){let[handleChange]=this.__closure;handleChange('handle',event);})" };
let closure_20 = { code: "(function UserProfileWidgetGameReorderGridTsx13(){let[handleFinalize]=this.__closure;handleFinalize('handle');})" };
let closure_21 = { code: "(function UserProfileWidgetGameReorderGridTsx14(){let[handleStart]=this.__closure;handleStart('cover');})" };
let closure_22 = { code: "(function UserProfileWidgetGameReorderGridTsx15(event){let[handleChange]=this.__closure;handleChange('cover',event);})" };
let closure_23 = { code: "(function UserProfileWidgetGameReorderGridTsx16(){let[handleFinalize]=this.__closure;handleFinalize('cover');})" };
let closure_24 = { code: "(function UserProfileWidgetGameReorderGridTsx17(){let[isThisTileDragging,dragOrigin,positionX,positionY,scale]=this.__closure;const dragging=isThisTileDragging.get();const origin=dragOrigin.get();return{zIndex:dragging?10:0,left:dragging?origin.x:positionX.get(),top:dragging?origin.y:positionY.get(),transform:dragging?[{translateX:positionX.get()-origin.x},{translateY:positionY.get()-origin.y},{scale:scale.get()}]:[{scale:scale.get()}]};})" };
let closure_25 = noop.memo(function ReorderableGameTile(gameId) {
  gameId = gameId.gameId;
  _require = gameId;
  ({ index, columns } = gameId);
  importDefault = columns;
  const itemWidth = gameId.itemWidth;
  dependencyMap = itemWidth;
  const itemHeight = gameId.itemHeight;
  c3 = itemHeight;
  const gap = gameId.gap;
  noop = gap;
  const orderShared = gameId.orderShared;
  c5 = orderShared;
  const isDragActive = gameId.isDragActive;
  jsx = isDragActive;
  const scrollRef = gameId.scrollRef;
  c7 = scrollRef;
  const autoScrollSpeed = gameId.autoScrollSpeed;
  c8 = autoScrollSpeed;
  const onCommitOrder = gameId.onCommitOrder;
  c9 = onCommitOrder;
  let sharedValue4;
  let sharedValue5;
  let sharedValue6;
  let sharedValue7;
  let callback;
  ({ count, scrollOffset, renderGame } = gameId);
  let tmp = c7();
  const tmp4 = useGameNameAndCoverImageDefault(gameId);
  let gameName = tmp4.gameName;
  const sharedValue = require("module_1654").useSharedValue(false);
  c10 = sharedValue;
  let obj = require("module_1654");
  const sharedValue1 = require("module_1654").useSharedValue(null);
  c11 = sharedValue1;
  c12 = noop.useRef(undefined);
  let obj2 = require("module_1654");
  const sharedValue2 = require("module_1654").useSharedValue(null);
  let obj4 = require("module_1654");
  const sharedValue3 = require("module_1654").useSharedValue(index);
  if (typeof c8 === "function") {
    let point = { x: index % columns * (itemWidth + gap), y: null };
    let _Math = Math;
    point.y = Math.floor(index / columns) * (itemHeight + gap);
    sharedValue4 = tmp5(1654).useSharedValue(point.x);
    const tmp5Result = tmp5(1654);
    sharedValue5 = tmp5(1654).useSharedValue(point.y);
    const tmp5Result7 = tmp5(1654);
    sharedValue6 = tmp5(1654).useSharedValue(point);
    const tmp5Result8 = tmp5(1654);
    sharedValue7 = tmp5(1654).useSharedValue(1);
    const tmp5Result9 = tmp5(1654);
    items = [c10, orderShared, gameId, tmp10, columns, itemWidth, itemHeight, gap];
    _require = undefined;
    importDefault = undefined;
    dependencyMap = undefined;
    c3 = undefined;
    noop = undefined;
    c5 = undefined;
    jsx = undefined;
    [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items;
    class UserProfileWidgetGameReorderGridTsx3 {
      constructor() {
        value = closure_0.get();
        index = value.indexOf(closure_1);
        if (index < 0) {
          tmp16 = null;
          return null;
        } else {
          tmp2 = closure_2;
          tmp3 = closure_3;
          tmp4 = closure_4;
          tmp5 = closure_5;
          tmp6 = closure_6;
          tmp7 = index;
          tmp8 = closure_3;
          tmp9 = closure_4;
          tmp10 = closure_5;
          tmp11 = closure_2(index, closure_3, closure_4, closure_5, closure_6);
          point = { x: null, y: null, layoutKey: null };
          ({ x: obj.x, y: obj.y } = tmp11);
          tmp12 = globalThis;
          _HermesInternal = HermesInternal;
          str = ":";
          str2 = "";
          tmp13 = closure_3;
          str3 = ":";
          tmp14 = closure_4;
          str4 = ":";
          tmp15 = closure_5;
          point.layoutKey = "" + closure_3 + ":" + closure_4 + ":" + closure_5;
          return point;
        }
      }
    }
    let items1 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25];
    UserProfileWidgetGameReorderGridTsx3.__closure = items1;
    UserProfileWidgetGameReorderGridTsx3.__workletHash = 17308847588809;
    UserProfileWidgetGameReorderGridTsx3.__initData = tmp18;
    let items2 = [c11, sharedValue, sharedValue4, sharedValue5, tmp5(5253).withTiming, tmp5(5256).timingStandard];
    _require = undefined;
    importDefault = undefined;
    dependencyMap = undefined;
    c3 = undefined;
    noop = undefined;
    [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33] = items2;
    class UserProfileWidgetGameReorderGridTsx4 {
      constructor(arg0, arg1) {
        if (null != gameId) {
          tmp14 = closure_0;
          if (!closure_0.get()) {
            tmp = arg1;
            if (null != arg1) {
              if (arg1.layoutKey === gameId.layoutKey) {
                if (gameId.x !== arg1.x) {
                  tmp2 = closure_1;
                  tmp3 = closure_3;
                  tmp4 = closure_4;
                  result = closure_1.set(closure_3(gameId.x, closure_4));
                }
                if (gameId.y !== arg1.y) {
                  tmp6 = closure_2;
                  tmp7 = closure_3;
                  tmp8 = closure_4;
                  result1 = closure_2.set(closure_3(gameId.y, closure_4));
                }
              }
            }
            tmp10 = closure_1;
            result2 = closure_1.set(gameId.x);
            tmp12 = closure_2;
            result3 = closure_2.set(gameId.y);
            return;
          }
        }
        return;
      }
    }
    let items3 = [tmp29, tmp30, tmp31, tmp32, tmp33];
    UserProfileWidgetGameReorderGridTsx4.__closure = items3;
    UserProfileWidgetGameReorderGridTsx4.__workletHash = 2705717682280;
    UserProfileWidgetGameReorderGridTsx4.__initData = tmp28;
    const animatedReaction = tmp5(1654).useAnimatedReaction(UserProfileWidgetGameReorderGridTsx3, UserProfileWidgetGameReorderGridTsx4);
    let items4 = [c12, orderShared, tmp5(1654).clamp, sharedValue4, itemWidth, gap, columns, sharedValue5, itemHeight, c9, gameId, tmp5(1707).scheduleOnRN, tmp5(5259).triggerHapticFeedback, tmp5(5259).HapticFeedbackTypes];
    _require = undefined;
    importDefault = undefined;
    dependencyMap = undefined;
    c3 = undefined;
    noop = undefined;
    c5 = undefined;
    jsx = undefined;
    c7 = undefined;
    c8 = undefined;
    c9 = undefined;
    c10 = undefined;
    c11 = undefined;
    c12 = undefined;
    [tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51] = items4;
    class UserProfileWidgetGameReorderGridTsx5 {
      constructor() {
        obj = closure_0;
        value = closure_0.get();
        tmp = closure_1(Math.floor((closure_2.get() + closure_3 / 2) / (closure_3 + closure_4)), 0, closure_5 - 1);
        tmp2 = closure_1(Math.max(Math.floor((closure_6.get() + closure_7 / 2) / (closure_7 + closure_4)), 0) * closure_5 + tmp, 0, value.length - 1);
        tmp3 = closure_8(value, value.indexOf(closure_9), tmp2);
        if (tmp3 !== value) {
          result = obj.set(tmp3);
          tmp5 = closure_10;
          tmp6 = closure_11;
          tmp7 = closure_12;
          tmp8 = closure_10(closure_11, closure_12.DRAG_AND_DROP_MOVE);
        }
        return;
      }
    }
    let items5 = [tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51];
    UserProfileWidgetGameReorderGridTsx5.__closure = items5;
    UserProfileWidgetGameReorderGridTsx5.__workletHash = 8277926820127;
    UserProfileWidgetGameReorderGridTsx5.__initData = tmp38;
    let items6 = [gameId, orderShared, columns, itemWidth, itemHeight, gap, sharedValue4, sharedValue5];
    callback = obj3.useCallback(UserProfileWidgetGameReorderGridTsx5, items6);
    const tmp5Result10 = tmp5(1654);
    let items7 = [sharedValue2, scrollOffset];
    _require = undefined;
    [tmp55, tmp56] = items7;
    class UserProfileWidgetGameReorderGridTsx6 {
      constructor() {
        return closure_0.get();
      }
    }
    let items8 = [tmp56];
    UserProfileWidgetGameReorderGridTsx6.__closure = items8;
    UserProfileWidgetGameReorderGridTsx6.__workletHash = 13189301387263;
    UserProfileWidgetGameReorderGridTsx6.__initData = tmp55;
    let items9 = [sharedValue3, sharedValue, sharedValue5, callback];
    _require = undefined;
    importDefault = undefined;
    dependencyMap = undefined;
    [tmp59, tmp60, tmp61, tmp62] = items9;
    class UserProfileWidgetGameReorderGridTsx7 {
      constructor(arg0, arg1) {
        value = null != arg1;
        if (value) {
          tmp2 = closure_0;
          value = closure_0.get();
        }
        if (value) {
          tmp3 = gameId;
          tmp4 = closure_1;
          result = closure_1.set(closure_1.get() + (gameId - arg1));
          tmp6 = closure_2;
          tmp7 = closure_2();
        }
        return;
      }
    }
    let items10 = [tmp60, tmp61, tmp62];
    UserProfileWidgetGameReorderGridTsx7.__closure = items10;
    UserProfileWidgetGameReorderGridTsx7.__workletHash = 4010589370446;
    UserProfileWidgetGameReorderGridTsx7.__initData = tmp59;
    const animatedReaction1 = tmp5(1654).useAnimatedReaction(UserProfileWidgetGameReorderGridTsx6, UserProfileWidgetGameReorderGridTsx7);
    let items11 = [callback, scrollRef, sharedValue2, sharedValue3, autoScrollSpeed, gameId, columns, itemWidth, itemHeight, gap, orderShared, isDragActive, onCommitOrder, sharedValue, sharedValue1, sharedValue7, sharedValue4, sharedValue5, sharedValue6];
    const memo = obj3.useMemo(() => {
      items = [_undefined16, c6, c10, c11, sharedValue3, c5, c0, sharedValue6, sharedValue4, sharedValue5, _mod1654.measure, c7, sharedValue2, sharedValue7, timing_timing.withTiming, 1.03, timingPresets.timingStandard, _mod1707.scheduleOnRN, HapticUtils.triggerHapticFeedback, HapticUtils.HapticFeedbackTypes];
      c8 = undefined;
      c9 = undefined;
      c10 = undefined;
      c11 = undefined;
      [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32] = items;
      function handleStart(arg0) {
        if (!_undefined.get()) {
          const result = _undefined.set(true);
          const result1 = _undefined2.set(true);
          const result2 = _undefined3.set(arg0);
          value = _undefined5.get();
          const result3 = _undefined4.set(value.indexOf(c5));
          const point = { x: _undefined8.get(), y: _undefined9.get() };
          const result4 = _undefined7.set(point);
          const tmp17 = _undefined10(c10);
          let tmp19 = null;
          if (null != tmp17) {
            ({ pageY: obj3.pageY, height: obj3.height } = tmp17);
            tmp19 = { pageY: null, height: null };
            const obj2 = { pageY: null, height: null };
          }
          const result5 = _undefined12.set(tmp19);
          const result6 = _undefined13.set(_undefined14(c14, c15));
          _undefined17(c17, _undefined19.DRAG_AND_DROP_START);
        }
      }
      const items1 = [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32];
      handleStart.__closure = items1;
      handleStart.__workletHash = 4403812282933;
      handleStart.__initData = tmp13;
      const items2 = [_undefined17, c11, sharedValue4, sharedValue5, callback, sharedValue2, 80, c8, _mod1654.clamp];
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      [tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42] = items2;
      function handleChange(arg0, changeX) {
        if (_undefined.get() === arg0) {
          const result = _undefined2.set(_undefined2.get() + changeX.changeX);
          const result1 = _undefined3.set(_undefined3.get() + changeX.changeY);
          _undefined4();
          value = _undefined5.get();
          if (null != value) {
            const diff = changeX.absoluteY - value.pageY;
            const diff1 = value.pageY + value.height - changeX.absoluteY;
            if (diff < c5) {
              const result2 = _undefined7.set(_undefined8(diff, 0, c5) / c5 - 1);
            } else if (diff1 < c5) {
              const result3 = _undefined7.set(1 - _undefined8(diff1, 0, c5) / c5);
            } else {
              const result4 = _undefined7.set(0);
            }
          }
        }
      }
      const items3 = [tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42];
      handleChange.__closure = items3;
      handleChange.__workletHash = 11898298585101;
      handleChange.__initData = tmp34;
      const items4 = [_undefined18, c11, c8, sharedValue2, c5, c0, getSlotOffset, c1, c2, c3, c4, sharedValue4, timing_timing.withTiming, timingPresets.timingStandard, sharedValue5, sharedValue7, c10, c6, _mod1707.scheduleOnRN, HapticUtils.triggerHapticFeedback, HapticUtils.HapticFeedbackTypes, sharedValue3, c9];
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
      [tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65] = items4;
      function handleFinalize(arg0) {
        if (_undefined.get() === arg0) {
          const result = _undefined.set(null);
          const result1 = _undefined2.set(0);
          const result2 = _undefined3.set(null);
          value = _undefined4.get();
          const index = value.indexOf(c4);
          if (index >= 0) {
            const point = _undefined6(index, c6, c7, c8, c9);
            const result3 = _undefined11.set(_undefined12(point.x, c12));
            const result4 = _undefined14.set(_undefined12(point.y, c12));
          }
          const result5 = _undefined15.set(_undefined12(1, c12));
          const result6 = _undefined16.set(false);
          const result7 = _undefined17.set(false);
          _undefined18(c18, _undefined20.DRAG_AND_DROP_END);
          let tmp25 = index >= 0;
          if (tmp25) {
            tmp25 = index !== _undefined21.get();
          }
          if (tmp25) {
            _undefined18(c21, value);
          }
        }
      }
      const items5 = [tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65];
      handleFinalize.__closure = items5;
      handleFinalize.__workletHash = 8128370352400;
      handleFinalize.__initData = tmp43;
      const Gesture = LegacyBaseButton.Gesture;
      const PanResult = Gesture.Pan();
      const tmp66 = c12;
      const items6 = [_undefined19, handleStart];
      c0 = undefined;
      [tmp67, tmp68] = items6;
      class UserProfileWidgetGameReorderGridTsx11 {
        constructor() {
          tmp = closure_0("handle");
          return;
        }
      }
      const items7 = [tmp68];
      UserProfileWidgetGameReorderGridTsx11.__closure = items7;
      UserProfileWidgetGameReorderGridTsx11.__workletHash = 9813868869329;
      UserProfileWidgetGameReorderGridTsx11.__initData = tmp67;
      const withRefResult = Gesture.Pan().withRef(c12);
      const items8 = [_undefined20, handleChange];
      c0 = undefined;
      [tmp69, tmp70] = items8;
      class UserProfileWidgetGameReorderGridTsx12 {
        constructor(arg0) {
          tmp = closure_0("handle", arg0);
          return;
        }
      }
      const items9 = [tmp70];
      UserProfileWidgetGameReorderGridTsx12.__closure = items9;
      UserProfileWidgetGameReorderGridTsx12.__workletHash = 12447368564446;
      UserProfileWidgetGameReorderGridTsx12.__initData = tmp69;
      const onStartResult = Gesture.Pan().withRef(c12).onStart(UserProfileWidgetGameReorderGridTsx11);
      const items10 = [_undefined21, handleFinalize];
      c0 = undefined;
      [tmp71, tmp72] = items10;
      class UserProfileWidgetGameReorderGridTsx13 {
        constructor() {
          tmp = closure_0("handle");
          return;
        }
      }
      const items11 = [tmp72];
      UserProfileWidgetGameReorderGridTsx13.__closure = items11;
      UserProfileWidgetGameReorderGridTsx13.__workletHash = 10286079723219;
      UserProfileWidgetGameReorderGridTsx13.__initData = tmp71;
      const onChangeResult = Gesture.Pan().withRef(c12).onStart(UserProfileWidgetGameReorderGridTsx11).onChange(UserProfileWidgetGameReorderGridTsx12);
      const Gesture2 = LegacyBaseButton.Gesture;
      const onFinalizeResult = Gesture.Pan().withRef(c12).onStart(UserProfileWidgetGameReorderGridTsx11).onChange(UserProfileWidgetGameReorderGridTsx12).onFinalize(UserProfileWidgetGameReorderGridTsx13);
      let result = Gesture2.Pan().activateAfterLongPress(100);
      let result1 = result.requireExternalGestureToFail(tmp66);
      const items12 = [closure_21, handleStart];
      c0 = undefined;
      [tmp74, tmp75] = items12;
      class UserProfileWidgetGameReorderGridTsx14 {
        constructor() {
          tmp = closure_0("cover");
          return;
        }
      }
      const items13 = [tmp75];
      UserProfileWidgetGameReorderGridTsx14.__closure = items13;
      UserProfileWidgetGameReorderGridTsx14.__workletHash = 10214830378899;
      UserProfileWidgetGameReorderGridTsx14.__initData = tmp74;
      const PanResult1 = Gesture2.Pan();
      const items14 = [closure_22, handleChange];
      c0 = undefined;
      [tmp76, tmp77] = items14;
      class UserProfileWidgetGameReorderGridTsx15 {
        constructor(arg0) {
          tmp = closure_0("cover", arg0);
          return;
        }
      }
      const items15 = [tmp77];
      UserProfileWidgetGameReorderGridTsx15.__closure = items15;
      UserProfileWidgetGameReorderGridTsx15.__workletHash = 3828360208702;
      UserProfileWidgetGameReorderGridTsx15.__initData = tmp76;
      const onStartResult1 = result1.onStart(UserProfileWidgetGameReorderGridTsx14);
      const items16 = [closure_23, handleFinalize];
      c0 = undefined;
      [tmp78, tmp79] = items16;
      class UserProfileWidgetGameReorderGridTsx16 {
        constructor() {
          tmp = closure_0("cover");
          return;
        }
      }
      const items17 = [tmp79];
      UserProfileWidgetGameReorderGridTsx16.__closure = items17;
      UserProfileWidgetGameReorderGridTsx16.__workletHash = 9475470708625;
      UserProfileWidgetGameReorderGridTsx16.__initData = tmp78;
      const onChangeResult1 = result1.onStart(UserProfileWidgetGameReorderGridTsx14).onChange(UserProfileWidgetGameReorderGridTsx15);
      return { coverGesture: result1.onStart(UserProfileWidgetGameReorderGridTsx14).onChange(UserProfileWidgetGameReorderGridTsx15).onFinalize(UserProfileWidgetGameReorderGridTsx16), handleGesture: onFinalizeResult };
    }, items11);
    ({ coverGesture, handleGesture } = memo);
    const tmp5Result11 = tmp5(1654);
    let items12 = [closure_24, sharedValue, sharedValue6, sharedValue4, sharedValue5, sharedValue7];
    _require = undefined;
    importDefault = undefined;
    dependencyMap = undefined;
    c3 = undefined;
    noop = undefined;
    [tmp67, tmp68, tmp69, tmp70, tmp71, tmp72] = items12;
    class UserProfileWidgetGameReorderGridTsx17 {
      constructor() {
        value = closure_0.get();
        point = closure_1.get();
        num = 0;
        if (value) {
          num = 10;
        }
        rect = { zIndex: num, left: null, top: null, transform: null };
        if (value) {
          x = point.x;
        } else {
          tmp2 = closure_2;
          x = closure_2.get();
        }
        rect.left = x;
        if (value) {
          y = point.y;
        } else {
          tmp3 = closure_3;
          y = closure_3.get();
        }
        rect.top = y;
        if (value) {
          obj1 = { translateX: null };
          tmp5 = closure_2;
          obj1.translateX = closure_2.get() - point.x;
          items = [, , ];
          items[0] = obj1;
          obj6 = { translateY: null };
          tmp6 = closure_3;
          obj6.translateY = closure_3.get() - point.y;
          items[1] = obj6;
          obj7 = { scale: null };
          tmp7 = closure_4;
          obj7.scale = closure_4.get();
          items[2] = obj7;
          items1 = items;
        } else {
          obj8 = { scale: null };
          tmp4 = closure_4;
          obj8.scale = closure_4.get();
          items1 = [];
          items1[0] = obj8;
        }
        rect.transform = items1;
        return rect;
      }
    }
    let items13 = [tmp68, tmp69, tmp70, tmp71, tmp72];
    UserProfileWidgetGameReorderGridTsx17.__closure = items13;
    UserProfileWidgetGameReorderGridTsx17.__workletHash = 4868178849326;
    UserProfileWidgetGameReorderGridTsx17.__initData = tmp67;
    let items14 = [];
    const animatedStyle = tmp5(1654).useAnimatedStyle(UserProfileWidgetGameReorderGridTsx17);
    if (index > 0) {
      const obj6 = { name: "moveup", label: null };
      let intl = tmp5(1112).intl;
      obj6.label = intl.string(tmp5(1112).t.eR2XSh);
      items14.push(obj6);
    }
    if (index < count - 1) {
      const obj7 = { name: "movedown", label: null };
      const intl2 = tmp5(1112).intl;
      obj7.label = intl2.string(tmp5(1112).t.wWi0DL);
      items14.push(obj7);
    }
    const obj8 = { gesture: coverGesture, children: null };
    if (tmp4.isLoading) {
      const intl3 = tmp5(1112).intl;
      gameName = intl3.string(tmp5(1112).t.ZTNur7);
    }
    const obj9 = {
      accessible: true,
      accessibilityLabel: gameName,
      accessibilityActions: items14,
      onAccessibilityAction: function handleAccessibilityAction(nativeEvent) {
          const actionName = nativeEvent.nativeEvent.actionName;
          if ("moveup" === actionName) {
            value = _undefined6.get();
            const index = value.indexOf(c0);
            let num2 = 1;
            if (tmp) {
              num2 = -1;
            }
            const clampResult = _mod1654.clamp(index + num2, 0, value.length - 1);
            if (index >= 0) {
              if (index !== clampResult) {
                if (typeof moveItem === "function") {
                  let tmp8 = value;
                  if (!tmp19) {
                    tmp8 = value;
                    if (index >= 0) {
                      tmp8 = value;
                      if (index < value.length) {
                        items = [];
                        HermesBuiltin.arraySpread(value, 0);
                        const _Math = Math;
                        const _Math2 = Math;
                        items.splice(Math.min(Math.max(clampResult, 0), items.length), 0, _slicedToArray(items.splice(index, 1), 1)[0]);
                        tmp8 = items;
                      }
                    }
                  }
                  const result = _undefined6.set(tmp8);
                  _undefined9(tmp8);
                  const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                  const intl = util.intl;
                  const obj3 = { from: index + 1, to: clampResult + 1 };
                  AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.ndXhdC, obj3));
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
            }
          }
        },
      style: null,
      children: null
    };
    let items15 = [tmp.tile, , , ];
    const obj10 = { width: itemWidth };
    items15[1] = obj10;
    if (itemHeight > 0) {
      const obj11 = { height: itemHeight };
      let unmeasured = obj11;
    } else {
      unmeasured = tmp.unmeasured;
    }
    items15[2] = unmeasured;
    items15[3] = animatedStyle;
    obj9.style = items15;
    const obj12 = { "aria-hidden": true, children: renderGame(gameId, handleGesture) };
    obj9.children = jsx(c5, obj12);
    obj8.children = jsx(_modDef1654.View, obj9);
    return jsx(tmp5(5303).GestureDetector, obj8);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  const obj5 = require("module_1654");
});
let closure_26 = { code: "(function UserProfileWidgetGameReorderGridTsx18({timeSincePreviousFrame:timeSincePreviousFrame}){let[autoScrollSpeed,autoScrollElapsed,MS_PER_FRAME_60FPS,AUTO_SCROLL_PIXELS_PER_SECOND,scrollTo,scrollRef,roundToNearestPixel,scrollOffset]=this.__closure;const speed=autoScrollSpeed.get();if(speed===0||timeSincePreviousFrame==null||timeSincePreviousFrame<=0){return;}autoScrollElapsed.set(autoScrollElapsed.get()+timeSincePreviousFrame);const elapsed=autoScrollElapsed.get();if(elapsed<MS_PER_FRAME_60FPS){return;}autoScrollElapsed.set(0);const delta=speed*AUTO_SCROLL_PIXELS_PER_SECOND*elapsed/1000;scrollTo(scrollRef,0,Math.max(roundToNearestPixel(scrollOffset.get()+delta),0),false);})" };
let closure_27 = { code: "(function UserProfileWidgetGameReorderGridTsx19(){let[autoScrollSpeed]=this.__closure;return autoScrollSpeed.get()!==0;})" };
let closure_28 = { code: "(function UserProfileWidgetGameReorderGridTsx20(isScrolling,wasScrolling){let[autoScrollElapsed,scheduleOnRN,setAutoScrollerActive]=this.__closure;if(wasScrolling==null||isScrolling===wasScrolling){return;}autoScrollElapsed.set(0);scheduleOnRN(setAutoScrollerActive,isScrolling);})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetGameReorderGrid.tsx");

export default function UserProfileWidgetGameReorderGrid(gameIds) {
  gameIds = gameIds.gameIds;
  _require = gameIds;
  const columns = gameIds.columns;
  ({ itemWidth: c2, itemHeight } = gameIds);
  const gap = gameIds.gap;
  noop = gap;
  const scrollRef = gameIds.scrollRef;
  c7 = undefined;
  let frameCallback;
  let tmp = c7();
  const sharedValue = require("module_1654").useSharedValue(gameIds);
  const obj = require("module_1654");
  const sharedValue1 = require("module_1654").useSharedValue(false);
  const onCommitOrder = useStableCallbackDefault(gameIds.onCommitOrder);
  items = [gameIds, sharedValue1, sharedValue];
  const effect = noop.useEffect(() => {
    if (!sharedValue1.get()) {
      const result = orderShared.set(c0);
    }
  }, items);
  const obj2 = require("module_1654");
  const obj3 = noop;
  const scrollOffset = require("module_1654").useScrollOffset(scrollRef);
  const obj4 = require("module_1654");
  const sharedValue2 = require("module_1654").useSharedValue(0);
  const obj5 = require("module_1654");
  const sharedValue3 = require("module_1654").useSharedValue(0);
  const obj6 = require("module_1654");
  const items1 = [closure_26, sharedValue2, sharedValue3, 16.666666666666668, 700, require("module_1654").scrollTo, scrollRef, roundToNearestPixelDefault, scrollOffset];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  c5 = undefined;
  jsx = undefined;
  c7 = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items1;
  class UserProfileWidgetGameReorderGridTsx18 {
    constructor(arg0) {
      timeSincePreviousFrame = gameIds.timeSincePreviousFrame;
      value = closure_0.get();
      if (0 !== value) {
        tmp11 = null;
        if (null != timeSincePreviousFrame) {
          if (timeSincePreviousFrame > 0) {
            obj = closure_1;
            result = closure_1.set(closure_1.get() + timeSincePreviousFrame);
            value1 = closure_1.get();
            tmp14 = closure_2;
            if (value1 >= closure_2) {
              result1 = obj.set(0);
              tmp3 = closure_4;
              tmp4 = closure_5;
              tmp5 = globalThis;
              _Math = Math;
              tmp6 = closure_6;
              tmp7 = closure_7;
              tmp8 = closure_3;
              num = 1000;
              flag = false;
              tmp9 = closure_5;
              num2 = 0;
              tmp10 = closure_4(closure_5, 0, Math.max(closure_6(closure_7.get() + value * closure_3 * value1 / 1000), 0), false);
            }
          }
        }
      }
      return;
    }
  }
  const items2 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  UserProfileWidgetGameReorderGridTsx18.__closure = items2;
  UserProfileWidgetGameReorderGridTsx18.__workletHash = 8778224357757;
  UserProfileWidgetGameReorderGridTsx18.__initData = tmp10;
  frameCallback = require("module_1654").useFrameCallback(UserProfileWidgetGameReorderGridTsx18, false);
  const items3 = [frameCallback];
  const callback = obj3.useCallback((arg0) => {
    frameCallback.setActive(arg0);
  }, items3);
  const obj7 = require("module_1654");
  const items4 = [closure_27, sharedValue2];
  _require = undefined;
  [tmp21, tmp22] = items4;
  class UserProfileWidgetGameReorderGridTsx19 {
    constructor() {
      return 0 !== closure_0.get();
    }
  }
  const items5 = [tmp22];
  UserProfileWidgetGameReorderGridTsx19.__closure = items5;
  UserProfileWidgetGameReorderGridTsx19.__workletHash = 6136464905680;
  UserProfileWidgetGameReorderGridTsx19.__initData = tmp21;
  const items6 = [closure_28, sharedValue3, require("module_1707").scheduleOnRN, callback];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp23, tmp24, tmp25, tmp26] = items6;
  class UserProfileWidgetGameReorderGridTsx20 {
    constructor(arg0, arg1) {
      tmp = null != arg1 && gameIds !== arg1;
      if (tmp) {
        tmp2 = closure_0;
        num = 0;
        result = closure_0.set(0);
        tmp4 = closure_1;
        tmp5 = closure_2;
        tmp6 = closure_1(closure_2, gameIds);
      }
      return;
    }
  }
  const items7 = [tmp24, tmp25, tmp26];
  UserProfileWidgetGameReorderGridTsx20.__closure = items7;
  UserProfileWidgetGameReorderGridTsx20.__workletHash = 8510465560127;
  UserProfileWidgetGameReorderGridTsx20.__initData = tmp23;
  const animatedReaction = require("module_1654").useAnimatedReaction(UserProfileWidgetGameReorderGridTsx19, UserProfileWidgetGameReorderGridTsx20);
  const rounded = Math.ceil(gameIds.length / columns);
  let num = 0;
  if (rounded > 0) {
    num = rounded * itemHeight + (rounded - 1) * gap;
  }
  const obj8 = { accessibilityRole: "list", style: null, children: gameIds.map((gameId, index) => <closure_25 key={gameId} gameId={gameId} index={index} count={_undefined.length} columns={columns} itemWidth={itemWidth} itemHeight={itemHeight} gap={gap} orderShared={orderShared} isDragActive={sharedValue1} scrollRef={scrollRef} scrollOffset={scrollOffset} autoScrollSpeed={sharedValue2} onCommitOrder={onCommitOrder} renderGame={renderGame} />) };
  const items8 = [tmp.grid, { height: num }];
  obj8.style = items8;
  return <c5 accessibilityRole="list" style={null}>{gameIds.map((gameId, index) => <closure_25 key={gameId} gameId={gameId} index={index} count={_undefined.length} columns={columns} itemWidth={itemWidth} itemHeight={itemHeight} gap={gap} orderShared={orderShared} isDragActive={sharedValue1} scrollRef={scrollRef} scrollOffset={scrollOffset} autoScrollSpeed={sharedValue2} onCommitOrder={onCommitOrder} renderGame={renderGame} />)}</c5>;
};