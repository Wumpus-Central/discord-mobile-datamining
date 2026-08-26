// === Module 14211: BadgeTileContent ===

// Module 14211 (BadgeTileContent)
import ThemesDefault from "Themes" /* 712 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4399 */;
import PressableCard from "PressableCard" /* 5548 */;
import FormCheckbox from "FormCheckbox" /* 8187 */;
import EyeSlashIcon from "EyeSlashIcon" /* 8718 */;
import BadgeCatalogIconDefault from "BadgeCatalogIcon" /* 9730 */;
import PX_16 from "PX_16" /* 14212 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "handleFormOpen" /* 8484 */;
import closure_8 from "mergeGuildAvatar" /* 1922 */;
import closure_9 from "initialize" /* 9005 */;
import ME from "ME" /* 676 */;
import { PremiumUpsellTypes } from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
function BadgeTileContent(arg0) {
  ({ badge, showAccessibilityLabel, onShowPress } = arg0);
  ({ selected, alwaysVisible } = arg0);
  let indicator = callback3();
  let flag = badge.hidden;
  if (flag == null) {
    flag = false;
  }
  if (selected) {
    let tmp = callback(FormCheckbox.FormCheckbox, { checked: true });
  } else if (alwaysVisible) {
    let obj = { size: "sm", color: null };
    obj[1] = ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT;
    tmp = callback(CircleInformationIcon.CircleInformationIcon, obj);
  } else {
    tmp = null;
    if (flag) {
      obj = { size: "sm", color: null };
      obj[1] = ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT;
      tmp = callback(EyeSlashIcon.EyeSlashIcon, obj);
    }
  }
  let result = dependencyMap;
  obj = { variant: "secondary", border: "none", radius: 16, style: indicator.card, children: null };
  obj1 = { badge, size: PX_16.BADGE_TILE_ICON_SIZE, style: null };
  let iconHidden;
  if (flag) {
    iconHidden = indicator.iconHidden;
  }
  obj1[2] = iconHidden;
  const items = [callback(BadgeCatalogIconDefault, obj1), ];
  if (null == tmp) {
    items[1] = tmp19;
    obj[4] = items;
    return closure_16(PressableCard.Card, obj);
  } else if (null != onShowPress) {
    const obj2 = { style: null, hitSlop: 8, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, onPress: null, children: null };
    indicator = indicator.indicator;
    obj2[0] = indicator;
    if (showAccessibilityLabel == null) {
      showAccessibilityLabel = badge.name;
    }
    obj2[3] = showAccessibilityLabel;
    badge = tmp14(1236).intl;
    showAccessibilityLabel = badge.string;
    result = showAccessibilityLabel(tmp14(1236).t.hHHpvU);
    obj2[4] = result;
    obj2[5] = onShowPress;
    obj2[6] = tmp;
    let tmp16Result = tmp16(closure_5, obj2);
    const tmp22 = closure_5;
  } else {
    const obj3 = { style: null, "aria-hidden": true, children: null };
    obj3[0] = indicator.indicator;
    obj3[2] = tmp;
    tmp16Result = tmp16(closure_6, obj3);
  }
}
let c4 = importAllResult;
({ Pressable: c5, View: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: c10, AnalyticsObjects: unpackModuleId, AnalyticsPages: closure_12, AnalyticsSections: map1 } = ME);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let obj = { gridInset: null, grid: null, upsell: null, upsellCard: null, upsellContent: null, upsellCta: null, upsellText: null, message: null, messageText: null, action: null };
obj = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
obj[0] = obj;
createCacheKey = { position: "relative", width: "100%", marginTop: ThemesDefault.space.PX_8 };
obj[1] = createCacheKey;
obj[2] = { marginHorizontal: 0, marginTop: ThemesDefault.space.PX_8, marginBottom: ThemesDefault.space.PX_16 };
let obj2 = { marginHorizontal: 0, marginTop: ThemesDefault.space.PX_8, marginBottom: ThemesDefault.space.PX_16 };
obj[3] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let obj3 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST };
obj[4] = { paddingVertical: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16 };
let obj4 = { paddingVertical: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16 };
obj[5] = { marginTop: ThemesDefault.space.PX_12, borderRadius: ThemesDefault.radii.sm };
obj[6] = { textAlign: "center" };
let obj5 = { marginTop: ThemesDefault.space.PX_12, borderRadius: ThemesDefault.radii.sm };
obj[7] = { alignItems: "center", justifyContent: "center", paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_32 };
obj[8] = { textAlign: "center" };
let obj6 = { alignItems: "center", justifyContent: "center", paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_32 };
obj[9] = { paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_16 };
let closure_17 = createCacheKey.createStyles(obj);
let obj8 = { position: { position: "absolute", top: 0, left: 0 }, card: { flex: 1, alignItems: "center", justifyContent: "center", padding: 0 }, indicator: null, iconHidden: null };
let obj7 = { paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_16 };
obj8[2] = { position: "absolute", top: ThemesDefault.space.PX_8, end: ThemesDefault.space.PX_8, width: 32, height: 32, alignItems: "flex-end", justifyContent: "flex-start" };
obj8[3] = { opacity: 0.3 };
let closure_18 = createCacheKey.createStyles(obj8);
function getSlotOffset(arg0, arg1) {
  const obj = { x: null, y: null };
  const result = arg0 % PX_16.BADGE_GRID_COLUMNS;
  obj[0] = result * (arg1 + PX_16.BADGE_GRID_GAP);
  const rounded = Math.floor(arg0 / PX_16.BADGE_GRID_COLUMNS);
  obj[1] = rounded * (arg1 + PX_16.BADGE_GRID_GAP);
  return obj;
}
let obj9 = { position: "absolute", top: ThemesDefault.space.PX_8, end: ThemesDefault.space.PX_8, width: 32, height: 32, alignItems: "flex-end", justifyContent: "flex-start" };
getSlotOffset.__closure = { BADGE_GRID_COLUMNS: require("PX_16").BADGE_GRID_COLUMNS, BADGE_GRID_GAP: require("PX_16").BADGE_GRID_GAP };
getSlotOffset.__workletHash = 8647997879684;
getSlotOffset.__initData = { code: "function getSlotOffset_CustomizeBadgesSheetTsx1(index,tileSize){const{BADGE_GRID_COLUMNS,BADGE_GRID_GAP}=this.__closure;const column=index%BADGE_GRID_COLUMNS;return{x:column*(tileSize+BADGE_GRID_GAP),y:Math.floor(index/BADGE_GRID_COLUMNS)*(tileSize+BADGE_GRID_GAP)};}" };
let closure_21 = importAllResult.memo((badge) => {
  badge = badge.badge;
  ({ index, tileSize, selected, alwaysVisible, onPress } = badge);
  if (typeof getSlotOffset !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const result = index % badge(14212).BADGE_GRID_COLUMNS;
  const result1 = result * (tileSize + badge(14212).BADGE_GRID_GAP);
  const rounded = Math.floor(index / badge(14212).BADGE_GRID_COLUMNS);
  const result2 = rounded * (tileSize + badge(14212).BADGE_GRID_GAP);
  let obj = badge(4173);
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: selected });
  const items = [badge, onPress];
  const callback = importAllResult.useCallback(() => {
    onPress(badge);
  }, items);
  const items1 = [callback3().position, ];
  const items2 = [{ translateX: result1 }, { translateY: result2 }];
  items1[1] = { width: tileSize, height: tileSize, transform: items2 };
  if (badge.hidden) {
    obj = { style: null, children: null };
    obj[0] = items1;
    obj = { badge: null, selected: null, alwaysVisible: null, showAccessibilityLabel: null, onShowPress: null };
    obj[0] = badge;
    obj[1] = selected;
    obj[2] = alwaysVisible;
    const intl4 = tmp2(1236).intl;
    obj1 = { badgeName: null, position: null };
    obj1[0] = badge.name;
    obj1[1] = index + 1;
    obj[3] = intl4.formatToPlainString(tmp2(1236).t["21W3EN"], obj1);
    obj[4] = callback;
    obj[1] = tmp10(BadgeTileContent, obj);
    let tmp10Result = tmp10(closure_6, obj);
  } else {
    const obj2 = { accessibilityLabel: null };
    const intl = tmp2(1236).intl;
    const obj3 = { badgeName: null, position: null };
    obj3[0] = badge.name;
    obj3[1] = index + 1;
    obj2[0] = intl.formatToPlainString(tmp2(1236).t["21W3EN"], obj3);
    if (alwaysVisible) {
      const obj4 = { accessibilityRole: "button", accessibilityHint: null };
      const intl3 = tmp2(1236).intl;
      obj4[1] = intl3.string(tmp2(1236).t.nPQVxb);
      let obj5 = obj4;
    } else {
      obj5 = {};
      const merged = Object.assign(checkboxA11yNative);
      const intl2 = tmp2(1236).intl;
      obj5.accessibilityHint = intl2.string(tmp2(1236).t.FJB6MV);
    }
    const merged1 = Object.assign(obj5);
    obj2.onPress = callback;
    obj2.style = items1;
    const obj6 = { badge: null, selected: null, alwaysVisible: null };
    obj6[0] = badge;
    obj6[1] = selected;
    obj6[2] = alwaysVisible;
    obj2.children = tmp10(BadgeTileContent, obj6);
    tmp10Result = tmp10(closure_5, obj2);
    const tmp11 = closure_5;
  }
  return tmp10Result;
});
let closure_22 = { code: "function CustomizeBadgesSheetTsx2(){const{orderShared,badgeId,getSlotOffset,slotOffset,tileSize}=this.__closure;const slot=orderShared.get().indexOf(badgeId);return slot<0?null:getSlotOffset(slot+slotOffset,tileSize);}" };
let closure_23 = { code: "function CustomizeBadgesSheetTsx3(target,previousTarget){const{isThisTileDragging,translateX,withTiming,timingStandard,translateY}=this.__closure;if(target==null||isThisTileDragging.get()){return;}if(target.x!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.x)){translateX.set(withTiming(target.x,timingStandard));}if(target.y!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.y)){translateY.set(withTiming(target.y,timingStandard));}}" };
let closure_24 = { code: "function handleStart_CustomizeBadgesSheetTsx4(){const{isAnyDragActive,isThisTileDragging,scale,withTiming,DRAG_SCALE,timingStandard,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(isAnyDragActive.get()&&!isThisTileDragging.get()){return;}isAnyDragActive.set(true);isThisTileDragging.set(true);scale.set(withTiming(DRAG_SCALE,timingStandard));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_START);}" };
let closure_25 = { code: "function handleChange_CustomizeBadgesSheetTsx5(event){const{isThisTileDragging,translateX,translateY,orderShared,tileSize,BADGE_GRID_GAP,clamp,BADGE_GRID_COLUMNS,slotOffset,moveBadgeInDisplayOrder,badgeId,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(!isThisTileDragging.get()){return;}const x=translateX.get()+event.changeX;const y=translateY.get()+event.changeY;translateX.set(x);translateY.set(y);const order=orderShared.get();const step=tileSize+BADGE_GRID_GAP;const column=clamp(Math.floor((x+tileSize/2)/step),0,BADGE_GRID_COLUMNS-1);const row=Math.max(Math.floor((y+tileSize/2)/step),0);const to=clamp(row*BADGE_GRID_COLUMNS+column-slotOffset,0,order.length-1);const next=moveBadgeInDisplayOrder(order,order.indexOf(badgeId),to);if(next!==order){orderShared.set(next);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_MOVE);}}" };
let closure_26 = { code: "function handleFinalize_CustomizeBadgesSheetTsx6(){const{isThisTileDragging,orderShared,badgeId,getSlotOffset,slotOffset,tileSize,translateX,withTiming,timingStandard,translateY,scale,isAnyDragActive,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,onCommitOrder}=this.__closure;if(!isThisTileDragging.get()){return;}const order=orderShared.get();const slot=order.indexOf(badgeId);if(slot>=0){const target=getSlotOffset(slot+slotOffset,tileSize);translateX.set(withTiming(target.x,timingStandard));translateY.set(withTiming(target.y,timingStandard));}scale.set(withTiming(1,timingStandard));isThisTileDragging.set(false);isAnyDragActive.set(false);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_END);runOnJS(onCommitOrder)(order);}" };
let closure_27 = { code: "function CustomizeBadgesSheetTsx7(){const{handleFinalize}=this.__closure;handleFinalize();}" };
let closure_28 = { code: "function CustomizeBadgesSheetTsx8(event){const{handleChange}=this.__closure;handleChange(event);}" };
let closure_29 = { code: "function CustomizeBadgesSheetTsx9(){const{handleStart}=this.__closure;handleStart();}" };
let closure_30 = { code: "function CustomizeBadgesSheetTsx10(_event,success){const{runOnJS,handlePress}=this.__closure;if(success){runOnJS(handlePress)();}}" };
let closure_31 = { code: "function CustomizeBadgesSheetTsx11(){const{isThisTileDragging,translateX,translateY,scale}=this.__closure;return{zIndex:isThisTileDragging.get()?10:0,transform:[{translateX:translateX.get()},{translateY:translateY.get()},{scale:scale.get()}]};}" };
let closure_32 = importAllResult.memo((badge) => {
  badge = badge.badge;
  ({ index, tileSize } = badge);
  const slotOffset = badge.slotOffset;
  ({ selected, alwaysVisible, orderShared } = badge);
  const isDragActive = badge.isDragActive;
  const onCommitOrder = badge.onCommitOrder;
  const onPress = badge.onPress;
  let badge_id;
  closure_8 = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  ({ isFirst, isLast } = badge);
  badge_id = badge.badge_id;
  let obj = badge(slotOffset[18]);
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: selected });
  const tmp6 = tileSize(slotOffset[19])(() => {
    onPress(badge);
  });
  closure_8 = tmp6;
  obj1 = badge(slotOffset[20]);
  sharedValue = obj1.useSharedValue(false);
  if (typeof getSlotOffset !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let result = index % tmp2(tmp3[11]).BADGE_GRID_COLUMNS;
  let result1 = result * (tileSize + tmp2(tmp3[11]).BADGE_GRID_GAP);
  let rounded = Math.floor(index / tmp2(tmp3[11]).BADGE_GRID_COLUMNS);
  let result2 = rounded * (tileSize + tmp2(tmp3[11]).BADGE_GRID_GAP);
  let tmp2Result = tmp2(tmp3[20]);
  sharedValue1 = tmp2Result.useSharedValue(result1);
  tmp2Result = tmp2(tmp3[20]);
  sharedValue2 = tmp2Result.useSharedValue(result2);
  const tmp = callback3();
  const tmp5 = tileSize;
  const tmp8 = getSlotOffset;
  sharedValue3 = badge(slotOffset[20]).useSharedValue(1);
  const tmp2Result1 = badge(slotOffset[20]);
  class T {
    constructor() {
      value = orderShared.get();
      index = value.indexOf(badge_id);
      tmp2 = null;
      if (index >= 0) {
        tmp3 = closure_1_19;
        tmp4 = slotOffset;
        sum = index + slotOffset;
        tmp6 = tileSize;
        if (typeof closure_1_19 !== "function") {
          str = "Trying to call a non-function";
          throwTypeErrorResult = HermesBuiltin.throwTypeError();
        }
        obj = { x: null, y: null };
        tmp7 = badge;
        tmp8 = slotOffset;
        result = sum % badge(slotOffset[11]).BADGE_GRID_COLUMNS;
        obj[0] = result * (tmp6 + badge(slotOffset[11]).BADGE_GRID_GAP);
        tmp10 = globalThis;
        _Math = Math;
        rounded = Math.floor(sum / badge(slotOffset[11]).BADGE_GRID_COLUMNS);
        obj[1] = rounded * (tmp6 + badge(slotOffset[11]).BADGE_GRID_GAP);
        tmp2 = obj;
      }
      return tmp2;
    }
  }
  T.__closure = { orderShared, badgeId: badge_id, getSlotOffset: tmp8, slotOffset, tileSize };
  T.__workletHash = 6182257637516;
  T.__initData = closure_22;
  let fn = function f(arg0, arg1) {
    let value = null == arg0;
    if (!value) {
      value = sharedValue.get();
    }
    if (!value) {
      let x;
      if (arg1 != null) {
        x = arg1.x;
      }
      if (arg0.x !== x) {
        const result = sharedValue1.set(badge(slotOffset[21]).withTiming(arg0.x, badge(slotOffset[22]).timingStandard));
        const obj = badge(slotOffset[21]);
      }
      let y;
      if (arg1 != null) {
        y = arg1.y;
      }
      if (arg0.y !== y) {
        const result1 = sharedValue2.set(badge(slotOffset[21]).withTiming(arg0.y, badge(slotOffset[22]).timingStandard));
        const obj2 = badge(slotOffset[21]);
      }
    }
  };
  obj = { isThisTileDragging: sharedValue, translateX: sharedValue1, withTiming: tmp2(tmp3[21]).withTiming, timingStandard: tmp2(tmp3[22]).timingStandard, translateY: sharedValue2 };
  fn.__closure = obj;
  fn.__workletHash = 12859780785249;
  fn.__initData = closure_23;
  const animatedReaction = badge(slotOffset[20]).useAnimatedReaction(T, fn);
  let items = [badge_id, tileSize, slotOffset, orderShared, isDragActive, onCommitOrder, tmp6, sharedValue, sharedValue3, sharedValue1, sharedValue2];
  const memo = isDragActive.useMemo(() => {
    function handleStart() {
      let value = store2.get();
      if (value) {
        value = !store3.get();
      }
      if (!value) {
        const result = store2.set(true);
        const result1 = store3.set(true);
        const result2 = store6.set(handleStart(handleFinalize[21]).withTiming(1.05, handleStart(handleFinalize[22]).timingStandard));
        const obj2 = handleStart(handleFinalize[21]);
        const obj3 = handleStart(handleFinalize[20]);
        handleStart(handleFinalize[20]).runOnJS(handleStart(handleFinalize[23]).triggerHapticFeedback)(handleStart(handleFinalize[23]).HapticFeedbackTypes.DRAG_AND_DROP_START);
        const runOnJSResult = handleStart(handleFinalize[20]).runOnJS(handleStart(handleFinalize[23]).triggerHapticFeedback);
      }
    }
    let obj = { isAnyDragActive: isDragActive, isThisTileDragging: sharedValue, scale: sharedValue3, withTiming: badge(slotOffset[21]).withTiming, DRAG_SCALE: 1.05, timingStandard: badge(slotOffset[22]).timingStandard, runOnJS: badge(slotOffset[20]).runOnJS, triggerHapticFeedback: badge(slotOffset[23]).triggerHapticFeedback, HapticFeedbackTypes: badge(slotOffset[23]).HapticFeedbackTypes };
    handleStart.__closure = obj;
    handleStart.__workletHash = 7025026495656;
    handleStart.__initData = closure_1_24;
    function handleChange(changeX) {
      if (store3.get()) {
        const sum = store4.get() + changeX.changeX;
        const sum1 = store5.get() + changeX.changeY;
        const result = store4.set(sum);
        const result1 = store5.set(sum1);
        const value = store.get();
        const sum2 = handleChange + handleStart(handleFinalize[11]).BADGE_GRID_GAP;
        const _Math = Math;
        const rounded = Math.floor((sum + handleChange / 2) / sum2);
        const _Math2 = Math;
        const _Math3 = Math;
        const obj = store;
        const obj2 = handleStart(handleFinalize[20]);
        const bound = Math.max(Math.floor((sum1 + handleChange / 2) / sum2), 0);
        const clampResult = handleStart(handleFinalize[20]).clamp(rounded, 0, handleStart(handleFinalize[11]).BADGE_GRID_COLUMNS - 1);
        const obj3 = handleStart(handleFinalize[20]);
        const clampResult1 = handleStart(handleFinalize[20]).clamp(bound * handleStart(handleFinalize[11]).BADGE_GRID_COLUMNS + clampResult - handleFinalize, 0, value.length - 1);
        const result2 = handleStart(handleFinalize[24]).moveBadgeInDisplayOrder(value, value.indexOf(closure_7), clampResult1);
        if (result2 !== value) {
          const result3 = obj.set(result2);
          const tmp9Result = tmp9(tmp10[20]);
          tmp9(tmp10[20]).runOnJS(tmp9(tmp10[23]).triggerHapticFeedback)(tmp9(tmp10[23]).HapticFeedbackTypes.DRAG_AND_DROP_MOVE);
          const runOnJSResult = tmp9(tmp10[20]).runOnJS(tmp9(tmp10[23]).triggerHapticFeedback);
        }
        const obj4 = handleStart(handleFinalize[24]);
      }
    }
    obj = { isThisTileDragging: sharedValue, translateX: sharedValue1, translateY: sharedValue2, orderShared, tileSize: handleChange, BADGE_GRID_GAP: badge(slotOffset[11]).BADGE_GRID_GAP, clamp: badge(slotOffset[20]).clamp, BADGE_GRID_COLUMNS: badge(slotOffset[11]).BADGE_GRID_COLUMNS, slotOffset: handleFinalize, moveBadgeInDisplayOrder: badge(slotOffset[24]).moveBadgeInDisplayOrder, badgeId: badge_id, runOnJS: badge(slotOffset[20]).runOnJS, triggerHapticFeedback: badge(slotOffset[23]).triggerHapticFeedback, HapticFeedbackTypes: badge(slotOffset[23]).HapticFeedbackTypes };
    handleChange.__closure = obj;
    handleChange.__workletHash = 4767858571128;
    handleChange.__initData = closure_1_25;
    handleFinalize = function handleFinalize() {
      if (store3.get()) {
        const value = store.get();
        const index = value.indexOf(closure_7);
        if (index >= 0) {
          const sum = index + handleFinalize;
          if (typeof closure_1_19 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const result = sum % handleStart(handleFinalize[11]).BADGE_GRID_COLUMNS;
          const _Math = Math;
          const result1 = result * (tmp53 + handleStart(handleFinalize[11]).BADGE_GRID_GAP);
          const rounded = Math.floor(sum / handleStart(handleFinalize[11]).BADGE_GRID_COLUMNS);
          const result2 = rounded * (tmp53 + handleStart(handleFinalize[11]).BADGE_GRID_GAP);
          const result3 = store4.set(handleStart(handleFinalize[21]).withTiming(result1, handleStart(handleFinalize[22]).timingStandard));
          const obj2 = handleStart(handleFinalize[21]);
          const result4 = store5.set(handleStart(handleFinalize[21]).withTiming(result2, handleStart(handleFinalize[22]).timingStandard));
          const obj3 = handleStart(handleFinalize[21]);
        }
        const result5 = store6.set(handleStart(handleFinalize[21]).withTiming(1, handleStart(handleFinalize[22]).timingStandard));
        const result6 = store3.set(false);
        const result7 = store2.set(false);
        const obj4 = handleStart(handleFinalize[21]);
        const obj5 = handleStart(handleFinalize[20]);
        handleStart(handleFinalize[20]).runOnJS(handleStart(handleFinalize[23]).triggerHapticFeedback)(handleStart(handleFinalize[23]).HapticFeedbackTypes.DRAG_AND_DROP_END);
        const runOnJSResult = handleStart(handleFinalize[20]).runOnJS(handleStart(handleFinalize[23]).triggerHapticFeedback);
        handleStart(handleFinalize[20]).runOnJS(closure_5)(value);
        const obj6 = handleStart(handleFinalize[20]);
      }
    };
    obj = { isThisTileDragging: sharedValue, orderShared, badgeId: badge_id, getSlotOffset: closure_1_19, slotOffset: handleFinalize, tileSize: handleChange, translateX: sharedValue1, withTiming: badge(slotOffset[21]).withTiming, timingStandard: badge(slotOffset[22]).timingStandard, translateY: sharedValue2, scale: sharedValue3, isAnyDragActive: isDragActive, runOnJS: badge(slotOffset[20]).runOnJS, triggerHapticFeedback: badge(slotOffset[23]).triggerHapticFeedback, HapticFeedbackTypes: badge(slotOffset[23]).HapticFeedbackTypes, onCommitOrder };
    handleFinalize.__closure = obj;
    handleFinalize.__workletHash = 6148890490020;
    handleFinalize.__initData = closure_1_26;
    const Gesture = badge(slotOffset[25]).Gesture;
    const PanResult = Gesture.Pan();
    const fn = function s() {
      handleStart();
    };
    fn.__closure = { handleStart };
    fn.__workletHash = 4207258458750;
    fn.__initData = closure_1_29;
    const minDistanceResult = Gesture.Pan().minDistance(8);
    const fn2 = function n(arg0) {
      handleChange(arg0);
    };
    fn2.__closure = { handleChange };
    fn2.__workletHash = 11860184987455;
    fn2.__initData = closure_1_28;
    const onStartResult = Gesture.Pan().minDistance(8).onStart(fn);
    const fn3 = function t() {
      handleFinalize();
    };
    fn3.__closure = { handleFinalize };
    fn3.__workletHash = 13129901115376;
    fn3.__initData = closure_1_27;
    const onChangeResult = Gesture.Pan().minDistance(8).onStart(fn).onChange(fn2);
    const Gesture2 = badge(slotOffset[25]).Gesture;
    const onFinalizeResult = Gesture.Pan().minDistance(8).onStart(fn).onChange(fn2).onFinalize(fn3);
    const TapResult = Gesture2.Tap();
    const maxDistanceResult = Gesture2.Tap().maxDistance(8);
    const fn4 = function c(arg0, arg1) {
      if (arg1) {
        handleStart(handleFinalize[20]).runOnJS(closure_8)();
        const obj = handleStart(handleFinalize[20]);
      }
    };
    const maxDurationResult = Gesture2.Tap().maxDistance(8).maxDuration(60000);
    fn4.__closure = { runOnJS: badge(slotOffset[20]).runOnJS, handlePress: closure_8 };
    fn4.__workletHash = 190007085596;
    fn4.__initData = closure_1_30;
    obj1 = { runOnJS: badge(slotOffset[20]).runOnJS, handlePress: closure_8 };
    const Gesture3 = badge(slotOffset[25]).Gesture;
    return Gesture3.Exclusive(onFinalizeResult, maxDurationResult.onEnd(fn4));
  }, items);
  const tmp2Result2 = badge(slotOffset[20]);
  class V {
    constructor() {
      num = 0;
      if (closure_9.get()) {
        num = 10;
      }
      obj = { zIndex: num, transform: null };
      obj = { translateX: closure_10.get() };
      items = [, , ];
      items[0] = obj;
      obj1 = { translateY: closure_11.get() };
      items[1] = obj1;
      obj2 = { scale: closure_12.get() };
      items[2] = obj2;
      obj[1] = items;
      return obj;
    }
  }
  V.__closure = { isThisTileDragging: sharedValue, translateX: sharedValue1, translateY: sharedValue2, scale: sharedValue3 };
  V.__workletHash = 5035909317781;
  V.__initData = closure_31;
  const items1 = [badge_id, orderShared, onCommitOrder, slotOffset, tmp6];
  const animatedStyle = badge(slotOffset[20]).useAnimatedStyle(V);
  const items2 = [];
  const callback = isDragActive.useCallback((nativeEvent) => {
    const actionName = nativeEvent.nativeEvent.actionName;
    if ("activate" !== actionName) {
      if ("moveup" === actionName) {
        let obj = orderShared;
        const value = orderShared.get();
        const index = value.indexOf(badge_id);
        let num2 = 1;
        if (tmp3) {
          num2 = -1;
        }
        const clampResult = badge(slotOffset[20]).clamp(index + num2, 0, value.length - 1);
        const obj2 = badge(slotOffset[20]);
        const result = badge(slotOffset[24]).moveBadgeInDisplayOrder(value, index, clampResult);
        if (result !== value) {
          const result1 = obj.set(result);
          onCommitOrder(result);
          const AccessibilityAnnouncer = tmp6(tmp7[26]).AccessibilityAnnouncer;
          const intl = tmp6(tmp7[12]).intl;
          obj = { from: null, to: null };
          obj[0] = index + slotOffset + 1;
          obj[1] = clampResult + slotOffset + 1;
          AccessibilityAnnouncer.announce(intl.formatToPlainString(tmp6(tmp7[12]).t.qPHr0x, obj));
        }
        const tmp6Result = badge(slotOffset[24]);
      }
    } else {
      callback();
    }
  }, items1);
  if (!alwaysVisible) {
    obj = { name: "activate", label: null };
    let intl = tmp2(tmp3[12]).intl;
    obj[1] = intl.string(tmp2(tmp3[12]).t.XqMe3N);
    items2.push(obj);
  }
  if (!isFirst) {
    obj1 = { name: "moveup", label: null };
    const intl2 = tmp2(tmp3[12]).intl;
    obj1[1] = intl2.string(tmp2(tmp3[12]).t.eR2XSh);
    items2.push(obj1);
  }
  if (!isLast) {
    let obj2 = { name: "movedown", label: null };
    const intl3 = tmp2(tmp3[12]).intl;
    obj2[1] = intl3.string(tmp2(tmp3[12]).t.wWi0DL);
    items2.push(obj2);
  }
  let obj3 = { gesture: memo, children: null };
  let obj4 = { accessible: true, accessibilityLabel: null };
  const intl4 = tmp2(tmp3[12]).intl;
  obj4[1] = intl4.formatToPlainString(badge(slotOffset[12]).t["21W3EN"], { badgeName: badge.name, position: index + 1 });
  if (alwaysVisible) {
    let obj6 = { accessibilityRole: "button", accessibilityHint: null };
    const intl6 = tmp2(tmp3[12]).intl;
    obj6[1] = intl6.string(tmp2(tmp3[12]).t.nPQVxb);
    let obj7 = obj6;
  } else {
    obj7 = {};
    const merged = Object.assign(checkboxA11yNative);
    const intl5 = tmp2(tmp3[12]).intl;
    obj7.accessibilityHint = intl5.string(tmp2(tmp3[12]).t.FJB6MV);
  }
  const merged1 = Object.assign(obj7);
  obj4.accessibilityActions = items2;
  obj4.onAccessibilityAction = callback;
  const items3 = [tmp.position, { width: tileSize, height: tileSize }, animatedStyle];
  obj4.style = items3;
  obj4.children = closure_15(BadgeTileContent, { badge, selected, alwaysVisible });
  obj3[1] = closure_15(tmp5(slotOffset[20]).View, obj4);
  return closure_15(badge(slotOffset[25]).GestureDetector, obj3);
});
let obj10 = { BADGE_GRID_COLUMNS: require("PX_16").BADGE_GRID_COLUMNS, BADGE_GRID_GAP: require("PX_16").BADGE_GRID_GAP };
let result = require("set").fileFinishedImporting("modules/badges/native/CustomizeBadgesSheet.tsx");

export default function CustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  let tenureBadgeHideable;
  importDefault = undefined;
  let stateFromStores;
  let stateFromStores1;
  analyticsLocations = undefined;
  let context;
  let stateFromStoresArray;
  let hasCatalog;
  let pendingBadgeDisplayOrder;
  let pendingBadgeHiddenBadges;
  let memo;
  closure_11 = undefined;
  let fixedBadges;
  let reorderableBadges;
  let hiddenBadges;
  let memo2;
  let sharedValue;
  let callback2;
  let sharedValue1;
  let first;
  closure_20 = undefined;
  closure_21 = undefined;
  let badgeTileSize;
  let tmp = callback2();
  let obj = importDefault(stateFromStores[27]);
  tenureBadgeHideable = obj.useConfig({ location: "CustomizeBadgesSheet" }).tenureBadgeHideable;
  obj1 = analyticsLocations;
  [tmp6, c1] = stateFromStores1(analyticsLocations.useState(0), 2);
  const callback = analyticsLocations.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.height);
  }, []);
  let obj2 = tenureBadgeHideable(stateFromStores[28]);
  let items = [pendingBadgeDisplayOrder];
  stateFromStores = obj2.useStateFromStores(items, () => {
    const currentUser = pendingBadgeDisplayOrder.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj3 = tenureBadgeHideable(stateFromStores[28]);
  const items1 = [pendingBadgeDisplayOrder];
  stateFromStores1 = obj3.useStateFromStores(items1, () => _undefined(stateFromStores[29]).canUsePremiumProfileCustomization(pendingBadgeDisplayOrder.getCurrentUser()));
  const tmp4 = stateFromStores1;
  const tmp5 = stateFromStores1(analyticsLocations.useState(0), 2);
  if (analyticsLocations == null) {
    analyticsLocations = [];
  }
  analyticsLocations = importDefault(stateFromStores[30])(analyticsLocations, tmp2(tmp3[31]).BADGES_REORDER_ACTION_SHEET).analyticsLocations;
  context = obj1.useContext(tmp2(tmp3[32]));
  const items2 = [context, analyticsLocations];
  const callback1 = obj1.useCallback(() => {
    let obj = context;
    if (context != null) {
      obj.close();
    }
    obj = { analyticsLocation: obj, analyticsLocations, premiumFeatureCardOrder: null };
    obj = { page: fixedBadges.USER_SETTINGS, section: reorderableBadges.USER_PROFILE, object: set.BUTTON_CTA };
    obj[2] = tenureBadgeHideable(stateFromStores[34]).PremiumFeatureCardOrder.TIER_2_LEADING;
    _undefined(stateFromStores[33])(obj);
  }, items2);
  let tmp8Result = tmp8(tmp3[28]);
  const items3 = [pendingBadgeHiddenBadges];
  const items4 = [stateFromStores];
  stateFromStoresArray = tmp8Result.useStateFromStoresArray(items3, () => pendingBadgeHiddenBadges.getBadges(stateFromStores), items4);
  tmp8Result = tmp8(tmp3[28]);
  const items5 = [pendingBadgeHiddenBadges];
  const items6 = [stateFromStores];
  const stateFromStoresObject = tmp8Result.useStateFromStoresObject(items5, () => {
    let hasCatalogForResult = null != stateFromStores;
    if (hasCatalogForResult) {
      hasCatalogForResult = pendingBadgeHiddenBadges.hasCatalogFor(tmp);
    }
    return { hasCatalog: hasCatalogForResult, hasCatalogError: pendingBadgeHiddenBadges.hasCatalogFetchErrorFor(stateFromStores) };
  }, items6);
  hasCatalog = stateFromStoresObject.hasCatalog;
  const items7 = [stateFromStores1, hasCatalog, analyticsLocations];
  const effect = obj1.useEffect(() => {
    let tmp = !stateFromStores1;
    if (!stateFromStores1) {
      tmp = hasCatalog;
    }
    if (tmp) {
      let obj = _undefined(stateFromStores[35]);
      obj = { type: null, location: null, location_stack: null };
      obj[0] = hiddenBadges.BADGE_REORDERING_UPSELL;
      obj = { page: null, section: null };
      obj[0] = fixedBadges.USER_SETTINGS;
      obj[1] = reorderableBadges.USER_PROFILE;
      obj[1] = obj;
      obj[2] = analyticsLocations;
      obj.track(memo.PREMIUM_UPSELL_VIEWED, obj);
    }
  }, items7);
  const items8 = [stateFromStores];
  const effect1 = obj1.useEffect(() => {
    if (null != stateFromStores) {
      if (!tmp2) {
        const badgeDirectory = tenureBadgeHideable(stateFromStores[36]).fetchBadgeDirectory(tmp);
        const obj2 = tenureBadgeHideable(stateFromStores[36]);
      }
      const obj = pendingBadgeHiddenBadges;
      tmp2 = pendingBadgeHiddenBadges.hasCatalogFor(tmp) && !pendingBadgeHiddenBadges.isCatalogStaleFor(tmp);
    }
  }, items8);
  const tmp11 = importDefault(stateFromStores[30]);
  const items9 = [hasCatalog];
  const stateFromStoresObject1 = tenureBadgeHideable(stateFromStores[28]).useStateFromStoresObject(items9, () => {
    const pendingChanges = hasCatalog.getPendingChanges();
    return { pendingBadgeDisplayOrder: pendingChanges.pendingBadgeDisplayOrder, pendingBadgeHiddenBadges: pendingChanges.pendingBadgeHiddenBadges };
  }, []);
  pendingBadgeDisplayOrder = stateFromStoresObject1.pendingBadgeDisplayOrder;
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  const items10 = [stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  memo = obj1.useMemo(() => {
    let obj = tenureBadgeHideable(stateFromStores[24]);
    obj = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
    return obj.applyPendingBadgeSettings(stateFromStoresArray, obj);
  }, items10);
  const items11 = [tenureBadgeHideable];
  closure_11 = obj1.useMemo(() => {
    let obj = tenureBadgeHideable(stateFromStores[37]);
    obj = { tenureBadgeHideable };
    return obj.getUnhideableBadgeIds(obj);
  }, items11);
  const items12 = [memo];
  const memo1 = obj1.useMemo(() => tenureBadgeHideable(stateFromStores[37]).groupCustomizableBadges(memo), items12);
  fixedBadges = memo1.fixedBadges;
  reorderableBadges = memo1.reorderableBadges;
  hiddenBadges = memo1.hiddenBadges;
  const items13 = [reorderableBadges];
  memo2 = obj1.useMemo(() => reorderableBadges.map((badge_id) => badge_id.badge_id), items13);
  const tmp8Result1 = tenureBadgeHideable(stateFromStores[28]);
  sharedValue = tenureBadgeHideable(stateFromStores[20]).useSharedValue(memo2);
  callback2 = tmp2(tmp3[19])((items) => {
    const result = tenureBadgeHideable(stateFromStores[24]).setPendingBadgeDisplayOrder(items);
  });
  const tmp8Result2 = tenureBadgeHideable(stateFromStores[20]);
  sharedValue1 = tenureBadgeHideable(stateFromStores[20]).useSharedValue(false);
  const items14 = [memo2, sharedValue1, sharedValue];
  const effect2 = obj1.useEffect(() => {
    if (!sharedValue1.get()) {
      const result = sharedValue.set(memo2);
    }
  }, items14);
  const tmp4Result = tmp4(obj1.useState(() => new Set()), 2);
  first = tmp4Result[0];
  closure_20 = tmp4Result[1];
  closure_21 = tmp2(tmp3[19])((badge_id) => {
    closure_0 = badge_id;
    const mapped = hiddenBadges.map((badge_id) => badge_id.badge_id);
    if (mapped.includes(badge_id.badge_id)) {
      if (stateFromStores1) {
        const items = [];
        items[HermesBuiltin.arraySpread(memo2, 0)] = badge_id.badge_id;
        const result = tenureBadgeHideable(stateFromStores[24]).setPendingBadgeDisplayOrder(items);
        const obj3 = tenureBadgeHideable(stateFromStores[24]);
      }
      const result1 = tenureBadgeHideable(stateFromStores[24]).setPendingBadgeHiddenBadges(mapped.filter((arg0) => arg0 !== badge_id.badge_id));
      const AccessibilityAnnouncer = tenureBadgeHideable(stateFromStores[26]).AccessibilityAnnouncer;
      const intl2 = tenureBadgeHideable(stateFromStores[12]).intl;
      let obj = { badgeName: null };
      obj[0] = badge_id.name;
      AccessibilityAnnouncer.announce(intl2.formatToPlainString(tenureBadgeHideable(stateFromStores[12]).t.mehuPg, obj));
    } else if (set.has(badge_id.badge_id)) {
      obj = _undefined(stateFromStores[38]);
      obj = { key: null, content: null };
      const _HermesInternal = HermesInternal;
      obj[0] = "BADGE_ALWAYS_VISIBLE-" + badge_id.badge_id;
      const intl = tenureBadgeHideable(stateFromStores[12]).intl;
      obj[1] = intl.string(tenureBadgeHideable(stateFromStores[12]).t.nPQVxb);
      obj.open(obj);
    } else {
      callback((items) => {
        const set = new Set(items);
        if (!set.delete(badge_id.badge_id)) {
          set.add(badge_id.badge_id);
        }
        return set;
      });
    }
  });
  const size = first.size;
  const tmp8Result3 = tenureBadgeHideable(stateFromStores[20]);
  const tmp27 = importDefault(stateFromStores[19])(() => {
    const set = new Set(hiddenBadges.map((badge_id) => badge_id.badge_id));
    for (const item10015 of first) {
      let addResult = set.add(item10015);
      continue;
    }
    if (stateFromStores1) {
      const result = tenureBadgeHideable(stateFromStores[24]).setPendingBadgeDisplayOrder(memo2.filter((arg0) => !set.has(arg0)));
      const obj2 = tenureBadgeHideable(stateFromStores[24]);
    }
    const items = [...set];
    const result1 = tenureBadgeHideable(stateFromStores[24]).setPendingBadgeHiddenBadges(items);
    const AccessibilityAnnouncer = tenureBadgeHideable(stateFromStores[26]).AccessibilityAnnouncer;
    const intl = tenureBadgeHideable(stateFromStores[12]).intl;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(tenureBadgeHideable(stateFromStores[12]).t.q3t0Ht, { count: first.size }));
    const obj = { count: first.size };
    const obj3 = tenureBadgeHideable(stateFromStores[24]);
    callback(new Set());
  });
  badgeTileSize = tenureBadgeHideable(stateFromStores[11]).getBadgeTileSize(tmp2(tmp3[39])().width);
  const sum = fixedBadges.length + reorderableBadges.length + hiddenBadges.length;
  const rounded = Math.ceil(sum / tmp8(tmp3[11]).BADGE_GRID_COLUMNS);
  let num = 0;
  if (rounded > 0) {
    let result = rounded * badgeTileSize;
    const diff = rounded - 1;
    num = result + diff * tmp8(tmp3[11]).BADGE_GRID_GAP;
  }
  if (hasCatalog) {
    const items15 = [tmp.gridInset, ];
    let num3 = 0;
    if (size > 0) {
      num3 = tmp6;
    }
    obj = { style: null, children: null };
    obj = { paddingBottom: null };
    obj[0] = tmp2(tmp3[10]).space.PX_16 + num3;
    items15[1] = obj;
    obj[0] = items15;
    let tmp39 = !stateFromStores1;
    if (!stateFromStores1) {
      obj1 = { style: null, ctaText: null, cardStyle: null, contentStyle: null, ctaStyle: null, showLinearGradient: true, onPress: null, children: null };
      obj1[0] = tmp.upsell;
      let intl2 = tmp8(tmp3[12]).intl;
      obj1[1] = intl2.string(tmp8(tmp3[12]).t.pj0XBN);
      ({ upsellCard: obj16[2], upsellContent: obj16[3], upsellCta: obj16[4] } = tmp);
      obj1[6] = callback1;
      obj2 = { variant: "text-sm/normal", style: null, children: null };
      obj2[1] = tmp.upsellText;
      const intl3 = tmp8(tmp3[12]).intl;
      obj2[2] = intl3.string(tmp8(tmp3[12]).t.JrOki0);
      obj1[7] = memo2(tmp8(tmp3[41]).Text, obj2);
      tmp39 = memo2(tmp2(tmp3[40]), obj1);
      const tmp2Result = tmp2(tmp3[40]);
    }
    const items16 = [tmp39, ];
    obj3 = { accessibilityRole: "list", style: null, children: null };
    const items17 = [tmp.grid, ];
    const obj4 = { height: null };
    obj4[0] = num;
    items17[1] = obj4;
    obj3[1] = items17;
    const items18 = [
      fixedBadges.map((badge, index) => memo2(closure_21, { badge, index, tileSize: badgeTileSize, selected: first.has(badge.badge_id), alwaysVisible: set.has(badge.badge_id), onPress: closure_21 }, badge.badge_id)),
      reorderableBadges.map((badge_id) => {
          if (stateFromStores1) {
            let obj = { badge: null, index: null, tileSize: null, slotOffset: null, isFirst: null, isLast: null, selected: null, alwaysVisible: null, orderShared: null, isDragActive: null, onCommitOrder: null, onPress: null };
            obj[0] = badge_id;
            obj[1] = fixedBadges.length + arg1;
            obj[2] = badgeTileSize;
            obj[3] = fixedBadges.length;
            obj[4] = 0 === arg1;
            obj[5] = arg1 === reorderableBadges.length - 1;
            obj[6] = first.has(badge_id.badge_id);
            obj[7] = set.has(badge_id.badge_id);
            obj[8] = sharedValue;
            obj[9] = sharedValue1;
            obj[10] = closure_17;
            obj[11] = closure_21;
            let tmpResult = tmp(closure_1_32, obj, badge_id.badge_id);
          } else {
            obj = { badge: null, index: null, tileSize: null, selected: null, alwaysVisible: null, onPress: null };
            obj[0] = badge_id;
            obj[1] = fixedBadges.length + arg1;
            obj[2] = badgeTileSize;
            obj[3] = first.has(badge_id.badge_id);
            obj[4] = set.has(badge_id.badge_id);
            obj[5] = closure_21;
            tmpResult = tmp(closure_21, obj, badge_id.badge_id);
          }
          return tmpResult;
        }),
      hiddenBadges.map((badge) => memo2(closure_21, { badge, index: fixedBadges.length + reorderableBadges.length + arg1, tileSize: badgeTileSize, selected: first.has(badge.badge_id), alwaysVisible: set.has(badge.badge_id), onPress: closure_21 }, badge.badge_id))
    ];
    obj3[2] = items18;
    items16[1] = sharedValue(stateFromStoresArray, obj3);
    obj[1] = items16;
    let tmp33Result = tmp37(tmp38, obj);
    let tmp35 = tmp38;
  } else {
    if (stateFromStoresObject.hasCatalogError) {
      const obj5 = { style: null, accessibilityRole: "alert", children: null };
      obj5[0] = tmp.message;
      const obj6 = { variant: "text-md/normal", color: "text-muted", style: null, children: null };
      obj6[2] = tmp.messageText;
      let intl = tmp8(tmp3[12]).intl;
      obj6[3] = intl.string(tmp8(tmp3[12]).t["rTU7/z"]);
      obj5[2] = tmp33(tmp8(tmp3[41]).Text, obj6);
      let obj7 = obj5;
    } else {
      obj7 = { style: null, children: null };
      obj7[0] = tmp.message;
      obj7[1] = tmp33(tmp8(tmp3[42]).ActivityIndicator, { animating: true, size: "large" });
    }
    tmp35 = tmp34;
    tmp33Result = tmp33(tmp34, obj7);
  }
  const obj8 = { startExpanded: true, dismissAccessibilityLabel: null, header: null, footer: null, children: null };
  const intl4 = tmp8(tmp3[12]).intl;
  obj8[1] = intl4.string(tenureBadgeHideable(stateFromStores[12]).t.x5SfWU);
  const obj9 = { title: null, subtitle: null };
  const intl5 = tmp8(tmp3[12]).intl;
  obj9[0] = intl5.string(tenureBadgeHideable(stateFromStores[12]).t.x5SfWU);
  const intl6 = tmp8(tmp3[12]).intl;
  const t = tmp8(tmp3[12]).t;
  obj9[1] = intl6.string(stateFromStores1 ? t["Vzc4+8"] : t.ZuXSRp);
  obj8[2] = memo2(tenureBadgeHideable(stateFromStores[44]).BottomSheetTitleHeader, obj9);
  let tmp42Result = null;
  if (size > 0) {
    const obj10 = { style: null, onLayout: null, children: null };
    obj10[0] = tmp.action;
    obj10[1] = callback;
    const obj11 = { bottom: true, children: null };
    const obj12 = { variant: "primary-overlay", grow: true, text: null, icon: null, onPress: null };
    const intl7 = tmp8(tmp3[12]).intl;
    const obj13 = { count: null };
    obj13[0] = size;
    obj12[2] = intl7.formatToPlainString(tmp8(tmp3[12]).t.j3DsAJ, obj13);
    obj12[3] = tmp42(tmp8(tmp3[15]).EyeSlashIcon, {});
    obj12[4] = tmp27;
    obj11[1] = tmp42(tmp8(tmp3[46]).Button, obj12);
    obj10[2] = tmp42(tmp8(tmp3[45]).SafeAreaPaddingView, obj11);
    tmp42Result = tmp42(tmp35, obj10);
  }
  obj8[3] = tmp42Result;
  obj8[4] = tmp33Result;
  return memo2(tenureBadgeHideable(stateFromStores[43]).BottomSheet, obj8);
};