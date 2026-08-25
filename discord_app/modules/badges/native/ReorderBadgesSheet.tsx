// discord_app/modules/badges/native/ReorderBadgesSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import PressableCard from "../../../design/components/Card/native/Card.native.tsx";
import DragIcon from "../../../design/components/Icon/native/redesign/generated/DragIcon.tsx";
import LegacyBaseButton from "../../../../_runtime/05533_LegacyBaseButton.js";
import BadgeCatalogIconDefault from "BadgeCatalogIcon.tsx";
import PX_16 from "BadgeGrid.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../user_profile/UserProfileSettingsStore.tsx";
import closure_6 from "../../../stores/UserStore.tsx";
import closure_7 from "../BadgeDirectoryStore.tsx";
import ME from "../../../Constants.tsx";
import { PremiumUpsellTypes } from "../../premium/PremiumConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function BadgeTileContent(badge) {
  ({ showGrip, gripGesture } = badge);
  const tmp = callback2();
  let obj = { style: tmp.grip, "aria-hidden": true, children: callback(DragIcon.DragIcon, { size: "sm" }) };
  const tmp5 = callback(View, obj);
  obj = { variant: "secondary", border: "none", radius: 16, style: tmp.card, children: null };
  obj = { badge: badge.badge, size: PX_16.BADGE_TILE_ICON_SIZE };
  const items = [callback(BadgeCatalogIconDefault, obj), ];
  if (showGrip) {
    let tmp2Result = tmp5;
    if (null != gripGesture) {
      obj1 = { gesture: null, children: null };
      obj1[0] = gripGesture;
      obj1[1] = tmp5;
      tmp2Result = callback(LegacyBaseButton.GestureDetector, obj1);
    }
    showGrip = tmp2Result;
  }
  items[1] = showGrip;
  obj[4] = items;
  return closure_14(PressableCard.Card, obj);
}
let c3 = importAllResult;
({ AnalyticEvents: closure_8, AnalyticsObjects: c9, AnalyticsPages: c10, AnalyticsSections: unpackModuleId } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let obj = { gridInset: null, grid: null, gridDisabled: null, upsell: null, upsellCard: null, upsellContent: null, upsellCta: null, upsellText: null, message: null, messageText: null };
obj = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
obj[0] = obj;
createCacheKey = { position: "relative", width: "100%", marginTop: ThemesDefault.space.PX_8 };
obj[1] = createCacheKey;
obj[2] = { opacity: 0.5 };
obj[3] = { marginHorizontal: 0, marginTop: ThemesDefault.space.PX_8, marginBottom: ThemesDefault.space.PX_16 };
let obj2 = { marginHorizontal: 0, marginTop: ThemesDefault.space.PX_8, marginBottom: ThemesDefault.space.PX_16 };
obj[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let obj3 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST };
obj[5] = { paddingVertical: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16 };
let obj4 = { paddingVertical: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16 };
obj[6] = { marginTop: ThemesDefault.space.PX_12, borderRadius: ThemesDefault.radii.sm };
obj[7] = { textAlign: "center" };
let obj5 = { marginTop: ThemesDefault.space.PX_12, borderRadius: ThemesDefault.radii.sm };
obj[8] = { alignItems: "center", justifyContent: "center", paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_32 };
obj[9] = { textAlign: "center" };
let closure_15 = createCacheKey.createStyles(obj);
let obj7 = { position: { position: "absolute", top: 0, left: 0 }, card: { flex: 1, alignItems: "center", justifyContent: "center", padding: 0 }, grip: null };
let obj6 = { alignItems: "center", justifyContent: "center", paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_32 };
obj7[2] = { position: "absolute", top: ThemesDefault.space.PX_4, end: 0, width: 32, height: 32, alignItems: "center", justifyContent: "center" };
let closure_16 = createCacheKey.createStyles(obj7);
function getSlotOffset(arg0, arg1) {
  const obj = { x: null, y: null };
  const result = arg0 % PX_16.BADGE_GRID_COLUMNS;
  obj[0] = result * (arg1 + PX_16.BADGE_GRID_GAP);
  const rounded = Math.floor(arg0 / PX_16.BADGE_GRID_COLUMNS);
  obj[1] = rounded * (arg1 + PX_16.BADGE_GRID_GAP);
  return obj;
}
let obj8 = { position: "absolute", top: ThemesDefault.space.PX_4, end: 0, width: 32, height: 32, alignItems: "center", justifyContent: "center" };
getSlotOffset.__closure = { BADGE_GRID_COLUMNS: require("PX_16").BADGE_GRID_COLUMNS, BADGE_GRID_GAP: require("PX_16").BADGE_GRID_GAP };
getSlotOffset.__workletHash = 3984288658776;
getSlotOffset.__initData = { code: "function getSlotOffset_ReorderBadgesSheetTsx1(index,tileSize){const{BADGE_GRID_COLUMNS,BADGE_GRID_GAP}=this.__closure;const column=index%BADGE_GRID_COLUMNS;return{x:column*(tileSize+BADGE_GRID_GAP),y:Math.floor(index/BADGE_GRID_COLUMNS)*(tileSize+BADGE_GRID_GAP)};}" };
let closure_19 = importAllResult.memo((arg0) => {
  ({ badge, index, tileSize, showGrip } = arg0);
  if (showGrip === undefined) {
    showGrip = false;
  }
  if (typeof getSlotOffset !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const result = index % PX_16.BADGE_GRID_COLUMNS;
  const result1 = result * (tileSize + PX_16.BADGE_GRID_GAP);
  const rounded = Math.floor(index / PX_16.BADGE_GRID_COLUMNS);
  let obj = { accessible: true, accessibilityLabel: null, style: null, children: null };
  const result2 = rounded * (tileSize + PX_16.BADGE_GRID_GAP);
  const intl = getSystemLocale.intl;
  obj = { badgeName: badge.name, position: index + 1 };
  obj[1] = intl.formatToPlainString(getSystemLocale.t["21W3EN"], obj);
  const items = [callback2().position, ];
  const items1 = [{ translateX: result1 }, { translateY: result2 }];
  items[1] = { width: tileSize, height: tileSize, transform: items1 };
  obj[2] = items;
  obj[3] = callback(BadgeTileContent, { badge, showGrip });
  return callback(View, obj);
});
let closure_20 = { code: "function ReorderBadgesSheetTsx2(){const{orderShared,badgeId,getSlotOffset,slotOffset,tileSize}=this.__closure;const slot=orderShared.get().indexOf(badgeId);return slot<0?null:getSlotOffset(slot+slotOffset,tileSize);}" };
let closure_21 = { code: "function ReorderBadgesSheetTsx3(target,previousTarget){const{activeGesture,translateX,withTiming,timingStandard,translateY}=this.__closure;if(target==null||activeGesture.get()!=null){return;}if(target.x!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.x)){translateX.set(withTiming(target.x,timingStandard));}if(target.y!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.y)){translateY.set(withTiming(target.y,timingStandard));}}" };
let closure_22 = { code: "function handleStart_ReorderBadgesSheetTsx4(gesture){const{isDragActive,activeGesture,scale,withTiming,DRAG_SCALE,timingStandard,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(isDragActive.get()){return;}isDragActive.set(true);activeGesture.set(gesture);scale.set(withTiming(DRAG_SCALE,timingStandard));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_START);}" };
let closure_23 = { code: "function handleChange_ReorderBadgesSheetTsx5(gesture,event){const{activeGesture,translateX,translateY,orderShared,tileSize,BADGE_GRID_GAP,clamp,BADGE_GRID_COLUMNS,slotOffset,moveBadgeInDisplayOrder,badgeId,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(activeGesture.get()!==gesture){return;}const x=translateX.get()+event.changeX;const y=translateY.get()+event.changeY;translateX.set(x);translateY.set(y);const order=orderShared.get();const step=tileSize+BADGE_GRID_GAP;const column=clamp(Math.floor((x+tileSize/2)/step),0,BADGE_GRID_COLUMNS-1);const row=Math.max(Math.floor((y+tileSize/2)/step),0);const to=clamp(row*BADGE_GRID_COLUMNS+column-slotOffset,0,order.length-1);const next=moveBadgeInDisplayOrder(order,order.indexOf(badgeId),to);if(next!==order){orderShared.set(next);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_MOVE);}}" };
let closure_24 = { code: "function handleFinalize_ReorderBadgesSheetTsx6(gesture){const{activeGesture,orderShared,badgeId,getSlotOffset,slotOffset,tileSize,translateX,withTiming,timingStandard,translateY,scale,isDragActive,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,onCommitOrder}=this.__closure;if(activeGesture.get()!==gesture){return;}const order=orderShared.get();const slot=order.indexOf(badgeId);if(slot>=0){const target=getSlotOffset(slot+slotOffset,tileSize);translateX.set(withTiming(target.x,timingStandard));translateY.set(withTiming(target.y,timingStandard));}scale.set(withTiming(1,timingStandard));activeGesture.set(null);isDragActive.set(false);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_END);runOnJS(onCommitOrder)(order);}" };
let closure_25 = { code: "function ReorderBadgesSheetTsx7(){const{handleFinalize}=this.__closure;handleFinalize('grip');}" };
let closure_26 = { code: "function ReorderBadgesSheetTsx8(event){const{handleChange}=this.__closure;handleChange('grip',event);}" };
let closure_27 = { code: "function ReorderBadgesSheetTsx9(){const{handleStart}=this.__closure;handleStart('grip');}" };
let closure_28 = { code: "function ReorderBadgesSheetTsx10(){const{handleFinalize}=this.__closure;handleFinalize('tile');}" };
let closure_29 = { code: "function ReorderBadgesSheetTsx11(event){const{handleChange}=this.__closure;handleChange('tile',event);}" };
let closure_30 = { code: "function ReorderBadgesSheetTsx12(){const{handleStart}=this.__closure;handleStart('tile');}" };
let closure_31 = { code: "function ReorderBadgesSheetTsx13(){const{activeGesture,translateX,translateY,scale}=this.__closure;return{zIndex:activeGesture.get()!=null?10:0,transform:[{translateX:translateX.get()},{translateY:translateY.get()},{scale:scale.get()}]};}" };
let closure_32 = importAllResult.memo((slotOffset) => {
  ({ badge, index, tileSize } = slotOffset);
  slotOffset = slotOffset.slotOffset;
  const orderShared = slotOffset.orderShared;
  const isDragActive = slotOffset.isDragActive;
  const onCommitOrder = slotOffset.onCommitOrder;
  let badge_id;
  closure_6 = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  ({ isFirst, isLast } = slotOffset);
  badge_id = badge.badge_id;
  let obj = isDragActive;
  closure_6 = isDragActive.useRef(undefined);
  obj1 = tileSize(orderShared[16]);
  sharedValue = obj1.useSharedValue(null);
  if (typeof getSlotOffset !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let result = index % tmp2(tmp3[10]).BADGE_GRID_COLUMNS;
  let result1 = result * (tileSize + tmp2(tmp3[10]).BADGE_GRID_GAP);
  let rounded = Math.floor(index / tmp2(tmp3[10]).BADGE_GRID_COLUMNS);
  let result2 = rounded * (tileSize + tmp2(tmp3[10]).BADGE_GRID_GAP);
  let tmp2Result = tmp2(tmp3[16]);
  sharedValue1 = tmp2Result.useSharedValue(result1);
  tmp2Result = tmp2(tmp3[16]);
  sharedValue2 = tmp2Result.useSharedValue(result2);
  let tmp = callback2();
  const tmp5 = getSlotOffset;
  sharedValue3 = tileSize(orderShared[16]).useSharedValue(1);
  const tmp2Result1 = tileSize(orderShared[16]);
  let fn = function f() {
    const value = orderShared.get();
    const index = value.indexOf(badge_id);
    let tmp2 = null;
    if (index >= 0) {
      const sum = index + slotOffset;
      if (typeof closure_1_17 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const obj = { x: null, y: null };
      const result = sum % tileSize(orderShared[10]).BADGE_GRID_COLUMNS;
      obj[0] = result * (tileSize + tileSize(orderShared[10]).BADGE_GRID_GAP);
      const _Math = Math;
      const rounded = Math.floor(sum / tileSize(orderShared[10]).BADGE_GRID_COLUMNS);
      obj[1] = rounded * (tileSize + tileSize(orderShared[10]).BADGE_GRID_GAP);
      tmp2 = obj;
    }
    return tmp2;
  };
  fn.__closure = { orderShared, badgeId: badge_id, getSlotOffset: tmp5, slotOffset, tileSize };
  fn.__workletHash = 13884542984272;
  fn.__initData = closure_20;
  let fn2 = function p(arg0, arg1) {
    let tmp = null != arg0;
    if (tmp) {
      tmp = null == sharedValue.get();
    }
    if (tmp) {
      let x;
      if (arg1 != null) {
        x = arg1.x;
      }
      if (arg0.x !== x) {
        const result = sharedValue1.set(tileSize(orderShared[17]).withTiming(arg0.x, tileSize(orderShared[18]).timingStandard));
        const obj = tileSize(orderShared[17]);
      }
      let y;
      if (arg1 != null) {
        y = arg1.y;
      }
      if (arg0.y !== y) {
        const result1 = sharedValue2.set(tileSize(orderShared[17]).withTiming(arg0.y, tileSize(orderShared[18]).timingStandard));
        const obj2 = tileSize(orderShared[17]);
      }
    }
  };
  obj = { activeGesture: sharedValue, translateX: sharedValue1, withTiming: tmp2(tmp3[17]).withTiming, timingStandard: tmp2(tmp3[18]).timingStandard, translateY: sharedValue2 };
  fn2.__closure = obj;
  fn2.__workletHash = 6507887016474;
  fn2.__initData = closure_21;
  const animatedReaction = tileSize(orderShared[16]).useAnimatedReaction(fn, fn2);
  let items = [badge_id, tileSize, slotOffset, orderShared, isDragActive, onCommitOrder, sharedValue, sharedValue3, sharedValue1, sharedValue2];
  const memo = obj.useMemo(() => {
    function handleStart(arg0) {
      if (!store.get()) {
        const result = store.set(true);
        const result1 = store2.set(arg0);
        const result2 = store5.set(handleStart(handleFinalize[17]).withTiming(1.05, handleStart(handleFinalize[18]).timingStandard));
        const obj2 = handleStart(handleFinalize[17]);
        const obj3 = handleStart(handleFinalize[16]);
        handleStart(handleFinalize[16]).runOnJS(handleStart(handleFinalize[19]).triggerHapticFeedback)(handleStart(handleFinalize[19]).HapticFeedbackTypes.DRAG_AND_DROP_START);
        const runOnJSResult = handleStart(handleFinalize[16]).runOnJS(handleStart(handleFinalize[19]).triggerHapticFeedback);
      }
    }
    let obj = { isDragActive, activeGesture: sharedValue, scale: sharedValue3, withTiming: tileSize(orderShared[17]).withTiming, DRAG_SCALE: 1.05, timingStandard: tileSize(orderShared[18]).timingStandard, runOnJS: tileSize(orderShared[16]).runOnJS, triggerHapticFeedback: tileSize(orderShared[19]).triggerHapticFeedback, HapticFeedbackTypes: tileSize(orderShared[19]).HapticFeedbackTypes };
    handleStart.__closure = obj;
    handleStart.__workletHash = 11019274506035;
    handleStart.__initData = closure_1_22;
    function handleChange(arg0, changeX) {
      if (store2.get() === arg0) {
        const sum = store3.get() + changeX.changeX;
        const sum1 = store4.get() + changeX.changeY;
        const result = store3.set(sum);
        const result1 = store4.set(sum1);
        const value = handleFinalize.get();
        const sum2 = handleStart + handleStart(handleFinalize[10]).BADGE_GRID_GAP;
        const _Math = Math;
        const rounded = Math.floor((sum + handleStart / 2) / sum2);
        const _Math2 = Math;
        const _Math3 = Math;
        const obj2 = handleFinalize;
        const obj3 = handleStart(handleFinalize[16]);
        const bound = Math.max(Math.floor((sum1 + handleStart / 2) / sum2), 0);
        const clampResult = handleStart(handleFinalize[16]).clamp(rounded, 0, handleStart(handleFinalize[10]).BADGE_GRID_COLUMNS - 1);
        const obj4 = handleStart(handleFinalize[16]);
        const clampResult1 = handleStart(handleFinalize[16]).clamp(bound * handleStart(handleFinalize[10]).BADGE_GRID_COLUMNS + clampResult - handleChange, 0, value.length - 1);
        const result2 = handleStart(handleFinalize[20]).moveBadgeInDisplayOrder(value, value.indexOf(closure_5), clampResult1);
        if (result2 !== value) {
          const result3 = obj2.set(result2);
          const tmp12Result = tmp12(tmp13[16]);
          tmp12(tmp13[16]).runOnJS(tmp12(tmp13[19]).triggerHapticFeedback)(tmp12(tmp13[19]).HapticFeedbackTypes.DRAG_AND_DROP_MOVE);
          const runOnJSResult = tmp12(tmp13[16]).runOnJS(tmp12(tmp13[19]).triggerHapticFeedback);
        }
        const obj5 = handleStart(handleFinalize[20]);
      }
    }
    obj = { activeGesture: sharedValue, translateX: sharedValue1, translateY: sharedValue2, orderShared: handleFinalize, tileSize: handleStart, BADGE_GRID_GAP: tileSize(orderShared[10]).BADGE_GRID_GAP, clamp: tileSize(orderShared[16]).clamp, BADGE_GRID_COLUMNS: tileSize(orderShared[10]).BADGE_GRID_COLUMNS, slotOffset: handleChange, moveBadgeInDisplayOrder: tileSize(orderShared[20]).moveBadgeInDisplayOrder, badgeId: badge_id, runOnJS: tileSize(orderShared[16]).runOnJS, triggerHapticFeedback: tileSize(orderShared[19]).triggerHapticFeedback, HapticFeedbackTypes: tileSize(orderShared[19]).HapticFeedbackTypes };
    handleChange.__closure = obj;
    handleChange.__workletHash = 16041752677416;
    handleChange.__initData = closure_1_23;
    handleFinalize = function handleFinalize(grip) {
      if (store2.get() === grip) {
        const value = handleFinalize.get();
        const index = value.indexOf(closure_5);
        if (index >= 0) {
          const sum = index + handleChange;
          if (typeof closure_1_17 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const result = sum % handleStart(handleFinalize[10]).BADGE_GRID_COLUMNS;
          const _Math = Math;
          const result1 = result * (tmp54 + handleStart(handleFinalize[10]).BADGE_GRID_GAP);
          const rounded = Math.floor(sum / handleStart(handleFinalize[10]).BADGE_GRID_COLUMNS);
          const result2 = rounded * (tmp54 + handleStart(handleFinalize[10]).BADGE_GRID_GAP);
          const result3 = store3.set(handleStart(handleFinalize[17]).withTiming(result1, handleStart(handleFinalize[18]).timingStandard));
          const obj2 = handleStart(handleFinalize[17]);
          const result4 = store4.set(handleStart(handleFinalize[17]).withTiming(result2, handleStart(handleFinalize[18]).timingStandard));
          const obj3 = handleStart(handleFinalize[17]);
        }
        const result5 = store5.set(handleStart(handleFinalize[17]).withTiming(1, handleStart(handleFinalize[18]).timingStandard));
        const result6 = store2.set(null);
        const result7 = store.set(false);
        const obj4 = handleStart(handleFinalize[17]);
        const obj5 = handleStart(handleFinalize[16]);
        handleStart(handleFinalize[16]).runOnJS(handleStart(handleFinalize[19]).triggerHapticFeedback)(handleStart(handleFinalize[19]).HapticFeedbackTypes.DRAG_AND_DROP_END);
        const runOnJSResult = handleStart(handleFinalize[16]).runOnJS(handleStart(handleFinalize[19]).triggerHapticFeedback);
        handleStart(handleFinalize[16]).runOnJS(closure_4)(value);
        const obj6 = handleStart(handleFinalize[16]);
      }
    };
    obj = { activeGesture: sharedValue, orderShared: handleFinalize, badgeId: badge_id, getSlotOffset: closure_1_17, slotOffset: handleChange, tileSize: handleStart, translateX: sharedValue1, withTiming: tileSize(orderShared[17]).withTiming, timingStandard: tileSize(orderShared[18]).timingStandard, translateY: sharedValue2, scale: sharedValue3, isDragActive, runOnJS: tileSize(orderShared[16]).runOnJS, triggerHapticFeedback: tileSize(orderShared[19]).triggerHapticFeedback, HapticFeedbackTypes: tileSize(orderShared[19]).HapticFeedbackTypes, onCommitOrder };
    handleFinalize.__closure = obj;
    handleFinalize.__workletHash = 4942678664906;
    handleFinalize.__initData = closure_1_24;
    obj1 = { gripGesture: null, tileGesture: null };
    const Gesture = tileSize(orderShared[15]).Gesture;
    const PanResult = Gesture.Pan();
    const fn = function s() {
      handleStart("grip");
    };
    fn.__closure = { handleStart };
    fn.__workletHash = 9808638030606;
    fn.__initData = closure_1_27;
    const withRefResult = Gesture.Pan().withRef(closure_6);
    const fn2 = function n(arg0) {
      handleChange("grip", arg0);
    };
    fn2.__closure = { handleChange };
    fn2.__workletHash = 16659077441827;
    fn2.__initData = closure_1_26;
    const onStartResult = Gesture.Pan().withRef(closure_6).onStart(fn);
    const fn3 = function t() {
      handleFinalize("grip");
    };
    fn3.__closure = { handleFinalize };
    fn3.__workletHash = 7193003293312;
    fn3.__initData = closure_1_25;
    obj1[0] = Gesture.Pan().withRef(closure_6).onStart(fn).onChange(fn2).onFinalize(fn3);
    const Gesture2 = tileSize(orderShared[15]).Gesture;
    const onChangeResult = Gesture.Pan().withRef(closure_6).onStart(fn).onChange(fn2);
    let result = Gesture2.Pan().activateAfterLongPress(100);
    let result1 = result.requireExternalGestureToFail(closure_6);
    const fn4 = function p() {
      handleStart("tile");
    };
    fn4.__closure = { handleStart };
    fn4.__workletHash = 16308478479468;
    fn4.__initData = closure_1_30;
    const PanResult1 = Gesture2.Pan();
    const fn5 = function u(arg0) {
      handleChange("tile", arg0);
    };
    fn5.__closure = { handleChange };
    fn5.__workletHash = 8745074055395;
    fn5.__initData = closure_1_29;
    const onStartResult1 = result1.onStart(fn4);
    const fn6 = function c() {
      handleFinalize("tile");
    };
    fn6.__closure = { handleFinalize };
    fn6.__workletHash = 15853094711982;
    fn6.__initData = closure_1_28;
    obj1[1] = result1.onStart(fn4).onChange(fn5).onFinalize(fn6);
    return obj1;
  }, items);
  ({ gripGesture, tileGesture } = memo);
  const tmp2Result2 = tileSize(orderShared[16]);
  class U {
    constructor() {
      num = 0;
      if (null != closure_7.get()) {
        num = 10;
      }
      obj = { zIndex: num, transform: null };
      obj = { translateX: closure_8.get() };
      items = [, , ];
      items[0] = obj;
      obj1 = { translateY: closure_9.get() };
      items[1] = obj1;
      obj2 = { scale: closure_10.get() };
      items[2] = obj2;
      obj[1] = items;
      return obj;
    }
  }
  U.__closure = { activeGesture: sharedValue, translateX: sharedValue1, translateY: sharedValue2, scale: sharedValue3 };
  U.__workletHash = 6764928004140;
  U.__initData = closure_31;
  const items1 = [badge_id, orderShared, onCommitOrder, slotOffset];
  const animatedStyle = tileSize(orderShared[16]).useAnimatedStyle(U);
  const items2 = [];
  const callback = obj.useCallback((nativeEvent) => {
    const actionName = nativeEvent.nativeEvent.actionName;
    if ("moveup" === actionName) {
      let obj = orderShared;
      const value = orderShared.get();
      const index = value.indexOf(badge_id);
      let num2 = 1;
      if (tmp) {
        num2 = -1;
      }
      const clampResult = tileSize(orderShared[16]).clamp(index + num2, 0, value.length - 1);
      const obj2 = tileSize(orderShared[16]);
      const result = tileSize(orderShared[20]).moveBadgeInDisplayOrder(value, index, clampResult);
      if (result !== value) {
        const result1 = obj.set(result);
        onCommitOrder(result);
        const AccessibilityAnnouncer = tmp4(tmp5[21]).AccessibilityAnnouncer;
        const intl = tmp4(tmp5[11]).intl;
        obj = { from: null, to: null };
        obj[0] = index + slotOffset + 1;
        obj[1] = clampResult + slotOffset + 1;
        AccessibilityAnnouncer.announce(intl.formatToPlainString(tmp4(tmp5[11]).t.qPHr0x, obj));
      }
      const tmp4Result = tileSize(orderShared[20]);
    }
  }, items1);
  if (!isFirst) {
    obj = { name: "moveup", label: null };
    let intl = tmp2(tmp3[11]).intl;
    obj[1] = intl.string(tmp2(tmp3[11]).t.eR2XSh);
    items2.push(obj);
  }
  if (!isLast) {
    obj1 = { name: "movedown", label: null };
    const intl2 = tmp2(tmp3[11]).intl;
    obj1[1] = intl2.string(tmp2(tmp3[11]).t.wWi0DL);
    items2.push(obj1);
  }
  let obj2 = { gesture: tileGesture, children: null };
  let obj3 = { accessible: true, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null, style: null, children: null };
  const intl3 = tmp2(tmp3[11]).intl;
  obj3[1] = intl3.formatToPlainString(tileSize(orderShared[11]).t["21W3EN"], { badgeName: badge.name, position: index + 1 });
  obj3[2] = items2;
  obj3[3] = callback;
  const items3 = [tmp.position, { width: tileSize, height: tileSize }, animatedStyle];
  obj3[4] = items3;
  obj3[5] = callback(BadgeTileContent, { badge, showGrip: true, gripGesture });
  obj2[1] = callback(slotOffset(orderShared[16]).View, obj3);
  return callback(tileSize(orderShared[15]).GestureDetector, obj2);
});
const obj9 = { BADGE_GRID_COLUMNS: require("PX_16").BADGE_GRID_COLUMNS, BADGE_GRID_GAP: require("PX_16").BADGE_GRID_GAP };
let result = require("set").fileFinishedImporting("modules/badges/native/ReorderBadgesSheet.tsx");

export default function ReorderBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  let stateFromStores;
  let stateFromStores1;
  analyticsLocations = undefined;
  let context;
  let stateFromStoresArray;
  let hasCatalog;
  let pendingBadgeDisplayOrder;
  let pendingBadgeHiddenBadges;
  let memo;
  let fixedBadges;
  let reorderableBadges;
  let memo2;
  let sharedValue;
  let callback;
  let sharedValue1;
  let badgeTileSize;
  let tmp = badgeTileSize();
  let obj = stateFromStores(analyticsLocations[22]);
  const items = [pendingBadgeDisplayOrder];
  stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = pendingBadgeDisplayOrder.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  obj1 = stateFromStores(analyticsLocations[22]);
  const items1 = [pendingBadgeDisplayOrder];
  stateFromStores1 = obj1.useStateFromStores(items1, () => stateFromStores1(analyticsLocations[23]).canUsePremiumProfileCustomization(pendingBadgeDisplayOrder.getCurrentUser()));
  if (analyticsLocations == null) {
    analyticsLocations = [];
  }
  analyticsLocations = stateFromStores1(analyticsLocations[24])(analyticsLocations, tmp6(tmp3[25]).BADGES_REORDER_ACTION_SHEET).analyticsLocations;
  context = context.useContext(tmp6(tmp3[26]));
  const items2 = [context, analyticsLocations];
  callback = context.useCallback(() => {
    let obj = context;
    if (context != null) {
      obj.close();
    }
    obj = { analyticsLocation: obj, analyticsLocations, premiumFeatureCardOrder: null };
    obj = { page: reorderableBadges.USER_SETTINGS, section: memo2.USER_PROFILE, object: fixedBadges.BUTTON_CTA };
    obj[2] = stateFromStores(analyticsLocations[28]).PremiumFeatureCardOrder.TIER_2_LEADING;
    stateFromStores1(analyticsLocations[27])(obj);
  }, items2);
  let tmp2Result = tmp2(tmp3[22]);
  const items3 = [pendingBadgeHiddenBadges];
  const items4 = [stateFromStores];
  stateFromStoresArray = tmp2Result.useStateFromStoresArray(items3, () => pendingBadgeHiddenBadges.getBadges(stateFromStores), items4);
  tmp2Result = tmp2(tmp3[22]);
  const items5 = [pendingBadgeHiddenBadges];
  const items6 = [stateFromStores];
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(items5, () => {
    let hasCatalogForResult = null != stateFromStores;
    if (hasCatalogForResult) {
      hasCatalogForResult = pendingBadgeHiddenBadges.hasCatalogFor(tmp);
    }
    return { hasCatalog: hasCatalogForResult, hasCatalogError: pendingBadgeHiddenBadges.hasCatalogFetchErrorFor(stateFromStores) };
  }, items6);
  hasCatalog = stateFromStoresObject.hasCatalog;
  const items7 = [stateFromStores1, hasCatalog, analyticsLocations];
  const effect = context.useEffect(() => {
    let tmp = !stateFromStores1;
    if (!stateFromStores1) {
      tmp = hasCatalog;
    }
    if (tmp) {
      let obj = stateFromStores1(analyticsLocations[29]);
      obj = { type: null, location: null, location_stack: null };
      obj[0] = sharedValue.BADGE_REORDERING_UPSELL;
      obj = { page: null, section: null };
      obj[0] = reorderableBadges.USER_SETTINGS;
      obj[1] = memo2.USER_PROFILE;
      obj[1] = obj;
      obj[2] = analyticsLocations;
      obj.track(memo.PREMIUM_UPSELL_VIEWED, obj);
    }
  }, items7);
  const items8 = [stateFromStores];
  const effect1 = context.useEffect(() => {
    if (null != stateFromStores) {
      if (!tmp2) {
        const badgeDirectory = stateFromStores(analyticsLocations[30]).fetchBadgeDirectory(tmp);
        const obj2 = stateFromStores(analyticsLocations[30]);
      }
      const obj = pendingBadgeHiddenBadges;
      tmp2 = pendingBadgeHiddenBadges.hasCatalogFor(tmp) && !pendingBadgeHiddenBadges.isCatalogStaleFor(tmp);
    }
  }, items8);
  let tmp7 = stateFromStores1(analyticsLocations[24]);
  const items9 = [hasCatalog];
  const stateFromStoresObject1 = stateFromStores(analyticsLocations[22]).useStateFromStoresObject(items9, () => {
    const pendingChanges = hasCatalog.getPendingChanges();
    return { pendingBadgeDisplayOrder: pendingChanges.pendingBadgeDisplayOrder, pendingBadgeHiddenBadges: pendingChanges.pendingBadgeHiddenBadges };
  }, []);
  pendingBadgeDisplayOrder = stateFromStoresObject1.pendingBadgeDisplayOrder;
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  const items10 = [stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  memo = context.useMemo(() => {
    let obj = stateFromStores(analyticsLocations[20]);
    obj = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
    return obj.applyPendingBadgeSettings(stateFromStoresArray, obj);
  }, items10);
  const items11 = [memo];
  const memo1 = context.useMemo(() => {
    fixedBadges = [];
    reorderableBadges = [];
    const iter = memo[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let owned = nextResult.owned;
      if (owned) {
        let tmp4 = nextResult;
        owned = true !== tmp3.hidden;
      }
      if (owned) {
        let tmp5 = stateFromStores;
        let tmp6 = analyticsLocations;
        let NON_CUSTOMIZABLE_BADGE_IDS = stateFromStores(analyticsLocations[31]).NON_CUSTOMIZABLE_BADGE_IDS;
        let tmp7 = nextResult;
        if (NON_CUSTOMIZABLE_BADGE_IDS.has(tmp3.badge_id)) {
          let tmp10 = nextResult;
          let arr = fixedBadges.push(tmp3);
        } else {
          let tmp8 = nextResult;
          arr = reorderableBadges.push(tmp3);
        }
      }
      continue;
    }
    return { fixedBadges, reorderableBadges };
  }, items11);
  fixedBadges = memo1.fixedBadges;
  reorderableBadges = memo1.reorderableBadges;
  const items12 = [reorderableBadges];
  memo2 = context.useMemo(() => reorderableBadges.map((badge_id) => badge_id.badge_id), items12);
  const tmp2Result1 = stateFromStores(analyticsLocations[22]);
  sharedValue = stateFromStores(analyticsLocations[16]).useSharedValue(memo2);
  callback = tmp6(tmp3[32])((arr) => {
    const result = stateFromStores(analyticsLocations[20]).setPendingBadgeDisplayOrder(arr);
  });
  const tmp2Result2 = stateFromStores(analyticsLocations[16]);
  sharedValue1 = stateFromStores(analyticsLocations[16]).useSharedValue(false);
  const items13 = [memo2, sharedValue1, sharedValue];
  const effect2 = context.useEffect(() => {
    if (!sharedValue1.get()) {
      const result = sharedValue.set(memo2);
    }
  }, items13);
  const tmp2Result3 = stateFromStores(analyticsLocations[16]);
  badgeTileSize = stateFromStores(analyticsLocations[10]).getBadgeTileSize(tmp6(tmp3[33])().width);
  const sum = fixedBadges.length + reorderableBadges.length;
  const rounded = Math.ceil(sum / tmp2(tmp3[10]).BADGE_GRID_COLUMNS);
  let num = 0;
  if (rounded > 0) {
    let result = rounded * badgeTileSize;
    const diff = rounded - 1;
    num = result + diff * tmp2(tmp3[10]).BADGE_GRID_GAP;
  }
  if (hasCatalog) {
    obj = { style: null, children: null };
    obj[0] = tmp.gridInset;
    let tmp31 = !stateFromStores1;
    if (!stateFromStores1) {
      obj = { style: null, ctaText: null, cardStyle: null, contentStyle: null, ctaStyle: null, showLinearGradient: true, onPress: null, children: null };
      obj[0] = tmp.upsell;
      const intl2 = tmp2(tmp3[11]).intl;
      obj[1] = intl2.string(tmp2(tmp3[11]).t.pj0XBN);
      ({ upsellCard: obj13[2], upsellContent: obj13[3], upsellCta: obj13[4] } = tmp);
      obj[6] = callback;
      obj1 = { variant: "text-sm/normal", style: null, children: null };
      obj1[1] = tmp.upsellText;
      const intl3 = tmp2(tmp3[11]).intl;
      obj1[2] = intl3.string(tmp2(tmp3[11]).t.JrOki0);
      obj[7] = callback(tmp2(tmp3[35]).Text, obj1);
      tmp31 = callback(tmp6(tmp3[34]), obj);
      const tmp6Result = tmp6(tmp3[34]);
    }
    const items14 = [tmp31, ];
    const items15 = [tmp.grid, , ];
    let gridDisabled = !stateFromStores1;
    if (!stateFromStores1) {
      gridDisabled = tmp.gridDisabled;
    }
    let obj2 = { accessibilityRole: "list", style: null, children: null };
    items15[1] = gridDisabled;
    const obj3 = { height: null };
    obj3[0] = num;
    items15[2] = obj3;
    obj2[1] = items15;
    const items16 = [
      fixedBadges.map((badge, index) => callback(closure_1_19, { badge, index, tileSize: badgeTileSize }, badge.badge_id)),
      reorderableBadges.map((badge_id) => {
          if (stateFromStores1) {
            let obj = { badge: null, index: null, tileSize: null, slotOffset: null, isFirst: null, isLast: null, orderShared: null, isDragActive: null, onCommitOrder: null };
            obj[0] = badge_id;
            obj[1] = fixedBadges.length + arg1;
            obj[2] = badgeTileSize;
            obj[3] = fixedBadges.length;
            obj[4] = 0 === arg1;
            obj[5] = arg1 === reorderableBadges.length - 1;
            obj[6] = sharedValue;
            obj[7] = sharedValue1;
            obj[8] = closure_13;
            let tmpResult = tmp(closure_1_32, obj, badge_id.badge_id);
          } else {
            obj = { badge: null, index: null, tileSize: null, showGrip: true };
            obj[0] = badge_id;
            obj[1] = fixedBadges.length + arg1;
            obj[2] = badgeTileSize;
            tmpResult = tmp(closure_1_19, obj, badge_id.badge_id);
          }
          return tmpResult;
        })
    ];
    obj2[2] = items16;
    items14[1] = sharedValue1(stateFromStoresArray, obj2);
    obj[1] = items14;
    let tmp26Result = tmp29(tmp30, obj);
  } else {
    if (stateFromStoresObject.hasCatalogError) {
      const obj4 = { style: null, accessibilityRole: "alert", children: null };
      obj4[0] = tmp.message;
      const obj5 = { variant: "text-md/normal", color: "text-muted", style: null, children: null };
      obj5[2] = tmp.messageText;
      const intl = tmp2(tmp3[11]).intl;
      obj5[3] = intl.string(tmp2(tmp3[11]).t["rTU7/z"]);
      obj4[2] = tmp26(tmp2(tmp3[35]).Text, obj5);
      let obj6 = obj4;
    } else {
      obj6 = { style: null, children: null };
      obj6[0] = tmp.message;
      obj6[1] = tmp26(tmp2(tmp3[36]).ActivityIndicator, { animating: true, size: "large" });
    }
    tmp26Result = tmp26(stateFromStoresArray, obj6);
    const tmp27 = stateFromStoresArray;
  }
  const obj7 = { startExpanded: true, dismissAccessibilityLabel: null, header: null, children: null };
  const intl4 = tmp2(tmp3[11]).intl;
  obj7[1] = intl4.string(stateFromStores(analyticsLocations[11]).t.opzPIQ);
  const obj8 = { title: null, subtitle: null };
  const intl5 = tmp2(tmp3[11]).intl;
  obj8[0] = intl5.string(stateFromStores(analyticsLocations[11]).t.opzPIQ);
  const intl6 = tmp2(tmp3[11]).intl;
  obj8[1] = intl6.string(stateFromStores(analyticsLocations[11]).t.WvuuHt);
  obj7[2] = callback(stateFromStores(analyticsLocations[38]).BottomSheetTitleHeader, obj8);
  obj7[3] = tmp26Result;
  return callback(stateFromStores(analyticsLocations[37]).BottomSheet, obj7);
};