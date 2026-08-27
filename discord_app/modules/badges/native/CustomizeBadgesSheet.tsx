// discord_app/modules/badges/native/CustomizeBadgesSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CircleInformationIcon from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import PressableCard from "../../../design/components/Card/native/Card.native.tsx";
import FormCheckbox from "../../../design/components/Forms/native/FormCheckbox.native.tsx";
import EyeSlashIcon from "../../../design/components/Icon/native/redesign/generated/EyeSlashIcon.tsx";
import BadgeCatalogIconDefault from "BadgeCatalogIcon.tsx";
import PX_16 from "BadgeGrid.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../user_profile/UserProfileSettingsStore.tsx";
import closure_8 from "../../../stores/UserStore.tsx";
import closure_9 from "../BadgeDirectoryStore.tsx";
import ME from "../../../Constants.tsx";
import { ACTION_SHEET_MINIMUM_BOTTOM_PADDING as closure_14 } from "../../action_sheet/native/ActionSheetConstants.tsx";
import { PremiumUpsellTypes } from "../../premium/PremiumConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function BadgeTileContent(arg0) {
  ({ badge, showAccessibilityLabel, onShowPress } = arg0);
  ({ selected, alwaysVisible } = arg0);
  let indicator = callback2();
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
    return closure_17(PressableCard.Card, obj);
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
({ Platform, Pressable: c5, View: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: c10, AnalyticsObjects: unpackModuleId, AnalyticsPages: closure_12, AnalyticsSections: map1 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
let c18 = 80;
let c19 = 16.666666666666668;
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
let closure_20 = createCacheKey.createStyles(obj);
let obj8 = { position: { position: "absolute", top: 0, left: 0 }, card: { flex: 1, alignItems: "center", justifyContent: "center", padding: 0 }, indicator: null, iconHidden: null };
let obj7 = { paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_16 };
obj8[2] = { position: "absolute", top: ThemesDefault.space.PX_8, end: ThemesDefault.space.PX_8, width: 32, height: 32, alignItems: "flex-end", justifyContent: "flex-start" };
obj8[3] = { opacity: 0.3 };
let closure_21 = createCacheKey.createStyles(obj8);
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
let closure_24 = importAllResult.memo((badge) => {
  badge = badge.badge;
  ({ index, tileSize, selected, alwaysVisible, onPress } = badge);
  if (typeof getSlotOffset !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const result = index % badge(14239).BADGE_GRID_COLUMNS;
  const result1 = result * (tileSize + badge(14239).BADGE_GRID_GAP);
  const rounded = Math.floor(index / badge(14239).BADGE_GRID_COLUMNS);
  const result2 = rounded * (tileSize + badge(14239).BADGE_GRID_GAP);
  let obj = badge(4173);
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: selected });
  const items = [badge, onPress];
  const callback = importAllResult.useCallback(() => {
    onPress(badge);
  }, items);
  const items1 = [callback2().position, ];
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
let closure_25 = { code: "function CustomizeBadgesSheetTsx2(){const{orderShared,badgeId,getSlotOffset,slotOffset,tileSize}=this.__closure;const slot=orderShared.get().indexOf(badgeId);return slot<0?null:getSlotOffset(slot+slotOffset,tileSize);}" };
let closure_26 = { code: "function CustomizeBadgesSheetTsx3(target,previousTarget){const{isThisTileDragging,translateX,withTiming,timingStandard,translateY}=this.__closure;if(target==null||isThisTileDragging.get()){return;}if(target.x!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.x)){translateX.set(withTiming(target.x,timingStandard));}if(target.y!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.y)){translateY.set(withTiming(target.y,timingStandard));}}" };
let closure_27 = { code: "function CustomizeBadgesSheetTsx4(){const{orderShared,tileSize,BADGE_GRID_GAP,clamp,translateX,BADGE_GRID_COLUMNS,translateY,slotOffset,moveBadgeInDisplayOrder,badgeId,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;const order=orderShared.get();const step=tileSize+BADGE_GRID_GAP;const column=clamp(Math.floor((translateX.get()+tileSize/2)/step),0,BADGE_GRID_COLUMNS-1);const row=Math.max(Math.floor((translateY.get()+tileSize/2)/step),0);const to=clamp(row*BADGE_GRID_COLUMNS+column-slotOffset,0,order.length-1);const next=moveBadgeInDisplayOrder(order,order.indexOf(badgeId),to);if(next!==order){orderShared.set(next);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_MOVE);}}" };
let closure_28 = { code: "function CustomizeBadgesSheetTsx5(){const{scrollOffset}=this.__closure;return scrollOffset.get();}" };
let closure_29 = { code: "function CustomizeBadgesSheetTsx6(offset,previousOffset){const{isThisTileDragging,translateY,reslot}=this.__closure;if(previousOffset==null||!isThisTileDragging.get()){return;}translateY.set(translateY.get()+(offset-previousOffset));reslot();}" };
let closure_30 = { code: "function handleStart_CustomizeBadgesSheetTsx7(){const{isAnyDragActive,isThisTileDragging,measure,scrollRef,dragViewport,scale,withTiming,DRAG_SCALE,timingStandard,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(isAnyDragActive.get()&&!isThisTileDragging.get()){return;}isAnyDragActive.set(true);isThisTileDragging.set(true);const viewport=measure(scrollRef);dragViewport.set(viewport==null?null:{pageY:viewport.pageY,height:viewport.height});scale.set(withTiming(DRAG_SCALE,timingStandard));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_START);}" };
let closure_31 = { code: "function handleChange_CustomizeBadgesSheetTsx8(event){const{isThisTileDragging,translateX,translateY,reslot,dragViewport,footerHeight,AUTO_SCROLL_EDGE_SIZE,autoScrollSpeed,clamp}=this.__closure;if(!isThisTileDragging.get()){return;}translateX.set(translateX.get()+event.changeX);translateY.set(translateY.get()+event.changeY);reslot();const viewport=dragViewport.get();if(viewport==null){return;}const fromTop=event.absoluteY-viewport.pageY;const fromBottom=viewport.pageY+viewport.height-footerHeight-event.absoluteY;if(fromTop<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(-1+clamp(fromTop,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else if(fromBottom<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(1-clamp(fromBottom,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else{autoScrollSpeed.set(0);}}" };
let closure_32 = { code: "function handleFinalize_CustomizeBadgesSheetTsx9(){const{isThisTileDragging,autoScrollSpeed,dragViewport,orderShared,badgeId,getSlotOffset,slotOffset,tileSize,translateX,withTiming,timingStandard,translateY,scale,isAnyDragActive,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,onCommitOrder}=this.__closure;if(!isThisTileDragging.get()){return;}autoScrollSpeed.set(0);dragViewport.set(null);const order=orderShared.get();const slot=order.indexOf(badgeId);if(slot>=0){const target=getSlotOffset(slot+slotOffset,tileSize);translateX.set(withTiming(target.x,timingStandard));translateY.set(withTiming(target.y,timingStandard));}scale.set(withTiming(1,timingStandard));isThisTileDragging.set(false);isAnyDragActive.set(false);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_END);runOnJS(onCommitOrder)(order);}" };
let closure_33 = { code: "function CustomizeBadgesSheetTsx10(){const{handleFinalize}=this.__closure;handleFinalize();}" };
let closure_34 = { code: "function CustomizeBadgesSheetTsx11(event){const{handleChange}=this.__closure;handleChange(event);}" };
let closure_35 = { code: "function CustomizeBadgesSheetTsx12(){const{handleStart}=this.__closure;handleStart();}" };
let closure_36 = { code: "function CustomizeBadgesSheetTsx13(_event,success){const{runOnJS,handlePress}=this.__closure;if(success){runOnJS(handlePress)();}}" };
let closure_37 = { code: "function CustomizeBadgesSheetTsx14(){const{isThisTileDragging,translateX,translateY,scale}=this.__closure;return{zIndex:isThisTileDragging.get()?10:0,transform:[{translateX:translateX.get()},{translateY:translateY.get()},{scale:scale.get()}]};}" };
let closure_38 = importAllResult.memo((badge) => {
  badge = badge.badge;
  ({ index, tileSize } = badge);
  const slotOffset = badge.slotOffset;
  ({ selected, alwaysVisible, orderShared } = badge);
  const isDragActive = badge.isDragActive;
  const scrollRef = badge.scrollRef;
  const scrollOffset = badge.scrollOffset;
  const autoScrollSpeed = badge.autoScrollSpeed;
  const footerHeight = badge.footerHeight;
  const onCommitOrder = badge.onCommitOrder;
  const onPress = badge.onPress;
  let badge_id;
  closure_12 = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let callback;
  ({ isFirst, isLast } = badge);
  badge_id = badge.badge_id;
  let obj = badge(slotOffset[19]);
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: selected });
  const tmp6 = tileSize(slotOffset[20])(() => {
    onPress(badge);
  });
  closure_12 = tmp6;
  obj1 = badge(slotOffset[21]);
  sharedValue = obj1.useSharedValue(false);
  let obj2 = badge(slotOffset[21]);
  sharedValue1 = obj2.useSharedValue(null);
  if (typeof getSlotOffset !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let result = index % tmp2(tmp3[12]).BADGE_GRID_COLUMNS;
  let result1 = result * (tileSize + tmp2(tmp3[12]).BADGE_GRID_GAP);
  let rounded = Math.floor(index / tmp2(tmp3[12]).BADGE_GRID_COLUMNS);
  let result2 = rounded * (tileSize + tmp2(tmp3[12]).BADGE_GRID_GAP);
  let tmp2Result = tmp2(tmp3[21]);
  sharedValue2 = tmp2Result.useSharedValue(result1);
  tmp2Result = tmp2(tmp3[21]);
  sharedValue3 = tmp2Result.useSharedValue(result2);
  const tmp = callback2();
  const tmp5 = tileSize;
  const tmp9 = getSlotOffset;
  sharedValue4 = badge(slotOffset[21]).useSharedValue(1);
  const tmp2Result1 = badge(slotOffset[21]);
  let fn = function v() {
    const value = orderShared.get();
    const index = value.indexOf(badge_id);
    let tmp2 = null;
    if (index >= 0) {
      const sum = index + slotOffset;
      if (typeof closure_1_22 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const obj = { x: null, y: null };
      const result = sum % badge(slotOffset[12]).BADGE_GRID_COLUMNS;
      obj[0] = result * (tileSize + badge(slotOffset[12]).BADGE_GRID_GAP);
      const _Math = Math;
      const rounded = Math.floor(sum / badge(slotOffset[12]).BADGE_GRID_COLUMNS);
      obj[1] = rounded * (tileSize + badge(slotOffset[12]).BADGE_GRID_GAP);
      tmp2 = obj;
    }
    return tmp2;
  };
  fn.__closure = { orderShared, badgeId: badge_id, getSlotOffset: tmp9, slotOffset, tileSize };
  fn.__workletHash = 6182257637516;
  fn.__initData = closure_25;
  class C {
    constructor(arg0, arg1) {
      value = null == badge;
      if (!value) {
        tmp2 = closure_13;
        value = closure_13.get();
      }
      if (!value) {
        tmp3 = arg1;
        x = undefined;
        if (arg1 != null) {
          x = arg1.x;
        }
        if (badge.x !== x) {
          tmp5 = closure_15;
          tmp6 = badge;
          tmp7 = slotOffset;
          obj = badge(slotOffset[22]);
          tmp8 = badge;
          tmp9 = slotOffset;
          result = closure_15.set(obj.withTiming(badge.x, badge(slotOffset[23]).timingStandard));
        }
        y = undefined;
        if (arg1 != null) {
          y = arg1.y;
        }
        if (badge.y !== y) {
          tmp12 = closure_16;
          tmp13 = badge;
          tmp14 = slotOffset;
          obj2 = badge(slotOffset[22]);
          tmp15 = badge;
          tmp16 = slotOffset;
          result1 = closure_16.set(obj2.withTiming(badge.y, badge(slotOffset[23]).timingStandard));
        }
      }
      return;
    }
  }
  obj = { isThisTileDragging: sharedValue, translateX: sharedValue2, withTiming: tmp2(tmp3[22]).withTiming, timingStandard: tmp2(tmp3[23]).timingStandard, translateY: sharedValue3 };
  C.__closure = obj;
  C.__workletHash = 12859780785249;
  C.__initData = closure_26;
  const animatedReaction = badge(slotOffset[21]).useAnimatedReaction(fn, C);
  let fn2 = function $() {
    const value = orderShared.get();
    const sum = tileSize + badge(slotOffset[12]).BADGE_GRID_GAP;
    const rounded = Math.floor((sharedValue2.get() + tileSize / 2) / sum);
    const obj = orderShared;
    const obj2 = badge(slotOffset[21]);
    const bound = Math.max(Math.floor((sharedValue3.get() + tileSize / 2) / sum), 0);
    const clampResult = badge(slotOffset[21]).clamp(rounded, 0, badge(slotOffset[12]).BADGE_GRID_COLUMNS - 1);
    const obj3 = badge(slotOffset[21]);
    const clampResult1 = badge(slotOffset[21]).clamp(bound * badge(slotOffset[12]).BADGE_GRID_COLUMNS + clampResult - slotOffset, 0, value.length - 1);
    const result = badge(slotOffset[24]).moveBadgeInDisplayOrder(value, value.indexOf(badge_id), clampResult1);
    if (result !== value) {
      const result1 = obj.set(result);
      const tmpResult = tmp(tmp2[21]);
      tmp(tmp2[21]).runOnJS(tmp(tmp2[25]).triggerHapticFeedback)(tmp(tmp2[25]).HapticFeedbackTypes.DRAG_AND_DROP_MOVE);
      const runOnJSResult = tmp(tmp2[21]).runOnJS(tmp(tmp2[25]).triggerHapticFeedback);
    }
  };
  obj = { orderShared, tileSize, BADGE_GRID_GAP: tmp2(tmp3[12]).BADGE_GRID_GAP, clamp: tmp2(tmp3[21]).clamp, translateX: sharedValue2, BADGE_GRID_COLUMNS: tmp2(tmp3[12]).BADGE_GRID_COLUMNS, translateY: sharedValue3, slotOffset, moveBadgeInDisplayOrder: tmp2(tmp3[24]).moveBadgeInDisplayOrder, badgeId: badge_id, runOnJS: tmp2(tmp3[21]).runOnJS, triggerHapticFeedback: tmp2(tmp3[25]).triggerHapticFeedback, HapticFeedbackTypes: tmp2(tmp3[25]).HapticFeedbackTypes };
  fn2.__closure = obj;
  fn2.__workletHash = 2876890058314;
  fn2.__initData = closure_27;
  let items = [badge_id, orderShared, slotOffset, tileSize, sharedValue2, sharedValue3];
  callback = isDragActive.useCallback(fn2, items);
  const tmp2Result2 = badge(slotOffset[21]);
  function te() {
    return scrollOffset.get();
  }
  te.__closure = { scrollOffset };
  te.__workletHash = 10993823060256;
  te.__initData = closure_28;
  function ee(arg0, arg1) {
    let value = null != arg1;
    if (value) {
      value = sharedValue.get();
    }
    if (value) {
      const result = sharedValue3.set(sharedValue3.get() + (arg0 - arg1));
      callback();
    }
  }
  ee.__closure = { isThisTileDragging: sharedValue, translateY: sharedValue3, reslot: callback };
  ee.__workletHash = 9903671525100;
  ee.__initData = closure_29;
  const animatedReaction1 = badge(slotOffset[21]).useAnimatedReaction(te, ee);
  const items1 = [callback, scrollRef, sharedValue1, autoScrollSpeed, footerHeight, badge_id, tileSize, slotOffset, orderShared, isDragActive, onCommitOrder, tmp6, sharedValue, sharedValue4, sharedValue2, sharedValue3];
  const memo = isDragActive.useMemo(() => {
    function handleStart() {
      let obj = store;
      if (!store.get()) {
        const result = obj.set(true);
        const result1 = store3.set(true);
        const measureResult = handleStart(handleFinalize[21]).measure(closure_5);
        let tmp10 = null;
        if (null != measureResult) {
          obj = { pageY: null, height: null };
          ({ pageY: obj3[0], height: obj3[1] } = measureResult);
          tmp10 = obj;
        }
        const result2 = store4.set(tmp10);
        let tmp5Result = tmp5(tmp6[22]);
        const result3 = store7.set(tmp5Result.withTiming(1.05, tmp5(tmp6[23]).timingStandard));
        tmp5Result = tmp5(tmp6[21]);
        const obj2 = handleStart(handleFinalize[21]);
        tmp5Result.runOnJS(handleStart(handleFinalize[25]).triggerHapticFeedback)(handleStart(handleFinalize[25]).HapticFeedbackTypes.DRAG_AND_DROP_START);
        const runOnJSResult = tmp5Result.runOnJS(handleStart(handleFinalize[25]).triggerHapticFeedback);
      }
    }
    let obj = { isAnyDragActive: isDragActive, isThisTileDragging: sharedValue, measure: badge(slotOffset[21]).measure, scrollRef, dragViewport: sharedValue1, scale: sharedValue4, withTiming: badge(slotOffset[22]).withTiming, DRAG_SCALE: 1.05, timingStandard: badge(slotOffset[23]).timingStandard, runOnJS: badge(slotOffset[21]).runOnJS, triggerHapticFeedback: badge(slotOffset[25]).triggerHapticFeedback, HapticFeedbackTypes: badge(slotOffset[25]).HapticFeedbackTypes };
    handleStart.__closure = obj;
    handleStart.__workletHash = 1819059999068;
    handleStart.__initData = closure_1_30;
    function handleChange(changeX) {
      if (store3.get()) {
        const result = store5.set(store5.get() + changeX.changeX);
        const result1 = store6.set(store6.get() + changeX.changeY);
        callback();
        const value = store4.get();
        if (null != value) {
          const diff = changeX.absoluteY - value.pageY;
          const diff1 = value.pageY + value.height - closure_8 - changeX.absoluteY;
          if (diff < closure_1_18) {
            const result2 = store2.set(handleStart(handleFinalize[21]).clamp(diff, 0, tmp24) / tmp24 - 1);
            const obj2 = handleStart(handleFinalize[21]);
          } else if (diff1 < tmp24) {
            const result3 = store2.set(1 - handleStart(handleFinalize[21]).clamp(diff1, 0, tmp24) / tmp24);
            const obj = handleStart(handleFinalize[21]);
          } else {
            const result4 = store2.set(0);
          }
        }
      }
    }
    obj = { isThisTileDragging: sharedValue, translateX: sharedValue2, translateY: sharedValue3, reslot: callback, dragViewport: sharedValue1, footerHeight, AUTO_SCROLL_EDGE_SIZE: callback, autoScrollSpeed, clamp: badge(slotOffset[21]).clamp };
    handleChange.__closure = obj;
    handleChange.__workletHash = 8169051982461;
    handleChange.__initData = closure_1_31;
    function handleFinalize() {
      if (store3.get()) {
        const result = store2.set(0);
        const result1 = store4.set(null);
        const value = closure_3.get();
        const index = value.indexOf(closure_11);
        if (index >= 0) {
          const sum = index + handleFinalize;
          if (typeof closure_1_22 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const result2 = sum % handleStart(handleFinalize[12]).BADGE_GRID_COLUMNS;
          const _Math = Math;
          const result3 = result2 * (tmp58 + handleStart(handleFinalize[12]).BADGE_GRID_GAP);
          const rounded = Math.floor(sum / handleStart(handleFinalize[12]).BADGE_GRID_COLUMNS);
          const result4 = rounded * (tmp58 + handleStart(handleFinalize[12]).BADGE_GRID_GAP);
          const result5 = store5.set(handleStart(handleFinalize[22]).withTiming(result3, handleStart(handleFinalize[23]).timingStandard));
          const obj2 = handleStart(handleFinalize[22]);
          const result6 = store6.set(handleStart(handleFinalize[22]).withTiming(result4, handleStart(handleFinalize[23]).timingStandard));
          const obj3 = handleStart(handleFinalize[22]);
        }
        const result7 = store7.set(handleStart(handleFinalize[22]).withTiming(1, handleStart(handleFinalize[23]).timingStandard));
        const result8 = store3.set(false);
        const result9 = store.set(false);
        const obj4 = handleStart(handleFinalize[22]);
        const obj5 = handleStart(handleFinalize[21]);
        handleStart(handleFinalize[21]).runOnJS(handleStart(handleFinalize[25]).triggerHapticFeedback)(handleStart(handleFinalize[25]).HapticFeedbackTypes.DRAG_AND_DROP_END);
        const runOnJSResult = handleStart(handleFinalize[21]).runOnJS(handleStart(handleFinalize[25]).triggerHapticFeedback);
        handleStart(handleFinalize[21]).runOnJS(closure_9)(value);
        const obj6 = handleStart(handleFinalize[21]);
      }
    }
    obj = { isThisTileDragging: sharedValue, autoScrollSpeed, dragViewport: sharedValue1, orderShared, badgeId: badge_id, getSlotOffset: closure_1_22, slotOffset: handleFinalize, tileSize: handleChange, translateX: sharedValue2, withTiming: badge(slotOffset[22]).withTiming, timingStandard: badge(slotOffset[23]).timingStandard, translateY: sharedValue3, scale: sharedValue4, isAnyDragActive: isDragActive, runOnJS: badge(slotOffset[21]).runOnJS, triggerHapticFeedback: badge(slotOffset[25]).triggerHapticFeedback, HapticFeedbackTypes: badge(slotOffset[25]).HapticFeedbackTypes, onCommitOrder };
    handleFinalize.__closure = obj;
    handleFinalize.__workletHash = 3306393552096;
    handleFinalize.__initData = closure_1_32;
    const Gesture = badge(slotOffset[26]).Gesture;
    const PanResult = Gesture.Pan();
    const fn = function n() {
      handleStart();
    };
    fn.__closure = { handleStart };
    fn.__workletHash = 1384005013956;
    fn.__initData = closure_1_35;
    const minDistanceResult = Gesture.Pan().minDistance(8);
    const fn2 = function s(arg0) {
      handleChange(arg0);
    };
    fn2.__closure = { handleChange };
    fn2.__workletHash = 11082443717159;
    fn2.__initData = closure_1_34;
    const onStartResult = Gesture.Pan().minDistance(8).onStart(fn);
    const fn3 = function t() {
      handleFinalize();
    };
    fn3.__closure = { handleFinalize };
    fn3.__workletHash = 11034838477574;
    fn3.__initData = closure_1_33;
    const onChangeResult = Gesture.Pan().minDistance(8).onStart(fn).onChange(fn2);
    const Gesture2 = badge(slotOffset[26]).Gesture;
    const onFinalizeResult = Gesture.Pan().minDistance(8).onStart(fn).onChange(fn2).onFinalize(fn3);
    const TapResult = Gesture2.Tap();
    const maxDistanceResult = Gesture2.Tap().maxDistance(8);
    const fn4 = function c(arg0, arg1) {
      if (arg1) {
        handleStart(handleFinalize[21]).runOnJS(closure_12)();
        const obj = handleStart(handleFinalize[21]);
      }
    };
    const maxDurationResult = Gesture2.Tap().maxDistance(8).maxDuration(60000);
    fn4.__closure = { runOnJS: badge(slotOffset[21]).runOnJS, handlePress: closure_12 };
    fn4.__workletHash = 11037035558975;
    fn4.__initData = closure_1_36;
    obj1 = { runOnJS: badge(slotOffset[21]).runOnJS, handlePress: closure_12 };
    const Gesture3 = badge(slotOffset[26]).Gesture;
    return Gesture3.Exclusive(onFinalizeResult, maxDurationResult.onEnd(fn4));
  }, items1);
  const tmp2Result3 = badge(slotOffset[21]);
  function ae() {
    let num = 0;
    if (sharedValue.get()) {
      num = 10;
    }
    let obj = { zIndex: num, transform: null };
    obj = { translateX: sharedValue2.get() };
    const items = [obj, , ];
    obj = { translateY: sharedValue3.get() };
    items[1] = obj;
    items[2] = { scale: sharedValue4.get() };
    obj[1] = items;
    return obj;
  }
  ae.__closure = { isThisTileDragging: sharedValue, translateX: sharedValue2, translateY: sharedValue3, scale: sharedValue4 };
  ae.__workletHash = 17212815208240;
  ae.__initData = closure_37;
  const items2 = [badge_id, orderShared, onCommitOrder, slotOffset, tmp6];
  const animatedStyle = badge(slotOffset[21]).useAnimatedStyle(ae);
  const items3 = [];
  const callback1 = isDragActive.useCallback((nativeEvent) => {
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
        const clampResult = badge(slotOffset[21]).clamp(index + num2, 0, value.length - 1);
        const obj2 = badge(slotOffset[21]);
        const result = badge(slotOffset[24]).moveBadgeInDisplayOrder(value, index, clampResult);
        if (result !== value) {
          const result1 = obj.set(result);
          onCommitOrder(result);
          const AccessibilityAnnouncer = tmp6(tmp7[27]).AccessibilityAnnouncer;
          const intl = tmp6(tmp7[13]).intl;
          obj = { from: null, to: null };
          obj[0] = index + slotOffset + 1;
          obj[1] = clampResult + slotOffset + 1;
          AccessibilityAnnouncer.announce(intl.formatToPlainString(tmp6(tmp7[13]).t.qPHr0x, obj));
        }
        const tmp6Result = badge(slotOffset[24]);
      }
    } else {
      callback();
    }
  }, items2);
  if (!alwaysVisible) {
    obj1 = { name: "activate", label: null };
    let intl = tmp2(tmp3[13]).intl;
    obj1[1] = intl.string(tmp2(tmp3[13]).t.XqMe3N);
    items3.push(obj1);
  }
  if (!isFirst) {
    obj2 = { name: "moveup", label: null };
    const intl2 = tmp2(tmp3[13]).intl;
    obj2[1] = intl2.string(tmp2(tmp3[13]).t.eR2XSh);
    items3.push(obj2);
  }
  if (!isLast) {
    let obj3 = { name: "movedown", label: null };
    const intl3 = tmp2(tmp3[13]).intl;
    obj3[1] = intl3.string(tmp2(tmp3[13]).t.wWi0DL);
    items3.push(obj3);
  }
  let obj4 = { gesture: memo, children: null };
  let obj5 = { accessible: true, accessibilityLabel: null };
  const intl4 = tmp2(tmp3[13]).intl;
  obj5[1] = intl4.formatToPlainString(badge(slotOffset[13]).t["21W3EN"], { badgeName: badge.name, position: index + 1 });
  if (alwaysVisible) {
    const obj7 = { accessibilityRole: "button", accessibilityHint: null };
    const intl6 = tmp2(tmp3[13]).intl;
    obj7[1] = intl6.string(tmp2(tmp3[13]).t.nPQVxb);
    let obj8 = obj7;
  } else {
    obj8 = {};
    const merged = Object.assign(checkboxA11yNative);
    const intl5 = tmp2(tmp3[13]).intl;
    obj8.accessibilityHint = intl5.string(tmp2(tmp3[13]).t.FJB6MV);
  }
  const merged1 = Object.assign(obj8);
  obj5.accessibilityActions = items3;
  obj5.onAccessibilityAction = callback1;
  const items4 = [tmp.position, { width: tileSize, height: tileSize }, animatedStyle];
  obj5.style = items4;
  obj5.children = sharedValue3(BadgeTileContent, { badge, selected, alwaysVisible });
  obj4[1] = sharedValue3(tmp5(slotOffset[21]).View, obj5);
  return sharedValue3(badge(slotOffset[26]).GestureDetector, obj4);
});
let closure_39 = { code: "function CustomizeBadgesSheetTsx15({timeSincePreviousFrame:timeSincePreviousFrame}){const{autoScrollSpeed,autoScrollElapsed,MS_PER_FRAME_60FPS,AUTO_SCROLL_PIXELS_PER_SECOND,scrollTo,scrollRef,roundToNearestPixel,scrollOffset}=this.__closure;const speed=autoScrollSpeed.get();if(speed===0||timeSincePreviousFrame==null||timeSincePreviousFrame<=0){return;}autoScrollElapsed.set(autoScrollElapsed.get()+timeSincePreviousFrame);const elapsed=autoScrollElapsed.get();if(elapsed<MS_PER_FRAME_60FPS){return;}autoScrollElapsed.set(0);const delta=speed*AUTO_SCROLL_PIXELS_PER_SECOND*elapsed/1000;scrollTo(scrollRef,0,Math.max(roundToNearestPixel(scrollOffset.get()+delta),0),false);}" };
let closure_40 = { code: "function CustomizeBadgesSheetTsx16(){const{autoScrollSpeed}=this.__closure;return autoScrollSpeed.get()!==0;}" };
let closure_41 = { code: "function CustomizeBadgesSheetTsx17(isScrolling,wasScrolling){const{autoScrollElapsed,runOnJS,setAutoScrollerActive}=this.__closure;if(wasScrolling==null||isScrolling===wasScrolling){return;}autoScrollElapsed.set(0);runOnJS(setAutoScrollerActive)(isScrolling);}" };
let obj10 = { BADGE_GRID_COLUMNS: require("PX_16").BADGE_GRID_COLUMNS, BADGE_GRID_GAP: require("PX_16").BADGE_GRID_GAP };
let result = require("set").fileFinishedImporting("modules/badges/native/CustomizeBadgesSheet.tsx");

export default function CustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  let tenureBadgeHideable;
  let first;
  dependencyMap = undefined;
  let stateFromStores;
  let stateFromStores1;
  analyticsLocations = undefined;
  let context;
  let stateFromStoresArray;
  let hasCatalog;
  let pendingBadgeDisplayOrder;
  let pendingBadgeHiddenBadges;
  let memo;
  closure_12 = undefined;
  let fixedBadges;
  let reorderableBadges;
  let hiddenBadges;
  let memo2;
  let sharedValue;
  closure_18 = undefined;
  let sharedValue1;
  let first1;
  closure_21 = undefined;
  closure_22 = undefined;
  let size;
  let badgeTileSize;
  let animatedRef;
  let scrollViewOffset;
  let sharedValue2;
  let sharedValue3;
  let frameCallback;
  let callback2;
  let tmp = first1();
  let obj = first(8926);
  tenureBadgeHideable = obj.useConfig({ location: "CustomizeBadgesSheet" }).tenureBadgeHideable;
  obj1 = stateFromStores1;
  const tmp5 = stateFromStores(stateFromStores1.useState(0), 2);
  first = tmp5[0];
  dependencyMap = tmp5[1];
  const sum = Math.max(first(1629)().bottom, reorderableBadges) + 4;
  const callback = stateFromStores1.useCallback((nativeEvent) => {
    dependencyMap(nativeEvent.nativeEvent.layout.height);
  }, []);
  let obj2 = tenureBadgeHideable(589);
  let items = [hasCatalog];
  stateFromStores = obj2.useStateFromStores(items, () => {
    const currentUser = hasCatalog.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj3 = tenureBadgeHideable(589);
  const items1 = [hasCatalog];
  stateFromStores1 = obj3.useStateFromStores(items1, () => first(4107).canUsePremiumProfileCustomization(hasCatalog.getCurrentUser()));
  if (analyticsLocations == null) {
    analyticsLocations = [];
  }
  analyticsLocations = first(5905)(analyticsLocations, tmp2(5925).BADGES_REORDER_ACTION_SHEET).analyticsLocations;
  context = obj1.useContext(tmp2(5887));
  const items2 = [context, analyticsLocations];
  const callback1 = obj1.useCallback(() => {
    let obj = context;
    if (context != null) {
      obj.close();
    }
    obj = { analyticsLocation: obj, analyticsLocations, premiumFeatureCardOrder: null };
    obj = { page: set.USER_SETTINGS, section: fixedBadges.USER_PROFILE, object: memo.BUTTON_CTA };
    obj[2] = tenureBadgeHideable(8149).PremiumFeatureCardOrder.TIER_2_LEADING;
    first(8325)(obj);
  }, items2);
  let tmp9Result = tmp9(589);
  const items3 = [pendingBadgeDisplayOrder];
  const items4 = [stateFromStores];
  stateFromStoresArray = tmp9Result.useStateFromStoresArray(items3, () => pendingBadgeDisplayOrder.getBadges(stateFromStores), items4);
  tmp9Result = tmp9(589);
  const items5 = [pendingBadgeDisplayOrder];
  const items6 = [stateFromStores];
  const stateFromStoresObject = tmp9Result.useStateFromStoresObject(items5, () => {
    let hasCatalogForResult = null != stateFromStores;
    if (hasCatalogForResult) {
      hasCatalogForResult = pendingBadgeDisplayOrder.hasCatalogFor(tmp);
    }
    return { hasCatalog: hasCatalogForResult, hasCatalogError: pendingBadgeDisplayOrder.hasCatalogFetchErrorFor(stateFromStores) };
  }, items6);
  hasCatalog = stateFromStoresObject.hasCatalog;
  const items7 = [stateFromStores1, hasCatalog, analyticsLocations];
  const effect = obj1.useEffect(() => {
    let tmp = !stateFromStores1;
    if (!stateFromStores1) {
      tmp = hasCatalog;
    }
    if (tmp) {
      let obj = first(698);
      obj = { type: null, location: null, location_stack: null };
      obj[0] = hiddenBadges.BADGE_REORDERING_UPSELL;
      obj = { page: null, section: null };
      obj[0] = set.USER_SETTINGS;
      obj[1] = fixedBadges.USER_PROFILE;
      obj[1] = obj;
      obj[2] = analyticsLocations;
      obj.track(pendingBadgeHiddenBadges.PREMIUM_UPSELL_VIEWED, obj);
    }
  }, items7);
  const items8 = [stateFromStores];
  const effect1 = obj1.useEffect(() => {
    if (null != stateFromStores) {
      if (!tmp2) {
        const badgeDirectory = tenureBadgeHideable(8495).fetchBadgeDirectory(tmp);
        const obj2 = tenureBadgeHideable(8495);
      }
      const obj = pendingBadgeDisplayOrder;
      tmp2 = pendingBadgeDisplayOrder.hasCatalogFor(tmp) && !pendingBadgeDisplayOrder.isCatalogStaleFor(tmp);
    }
  }, items8);
  let tmp12 = first(5905);
  const tmp4 = stateFromStores;
  const items9 = [stateFromStoresArray];
  const stateFromStoresObject1 = tenureBadgeHideable(589).useStateFromStoresObject(items9, () => {
    const pendingChanges = stateFromStoresArray.getPendingChanges();
    return { pendingBadgeDisplayOrder: pendingChanges.pendingBadgeDisplayOrder, pendingBadgeHiddenBadges: pendingChanges.pendingBadgeHiddenBadges };
  }, []);
  pendingBadgeDisplayOrder = stateFromStoresObject1.pendingBadgeDisplayOrder;
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  const items10 = [stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  memo = obj1.useMemo(() => {
    let obj = tenureBadgeHideable(14224);
    obj = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
    return obj.applyPendingBadgeSettings(stateFromStoresArray, obj);
  }, items10);
  const items11 = [tenureBadgeHideable];
  closure_12 = obj1.useMemo(() => {
    let obj = tenureBadgeHideable(8927);
    obj = { tenureBadgeHideable };
    return obj.getUnhideableBadgeIds(obj);
  }, items11);
  const items12 = [memo];
  const memo1 = obj1.useMemo(() => tenureBadgeHideable(8927).groupCustomizableBadges(memo), items12);
  fixedBadges = memo1.fixedBadges;
  reorderableBadges = memo1.reorderableBadges;
  hiddenBadges = memo1.hiddenBadges;
  const items13 = [reorderableBadges];
  memo2 = obj1.useMemo(() => reorderableBadges.map((badge_id) => badge_id.badge_id), items13);
  const tmp9Result1 = tenureBadgeHideable(589);
  sharedValue = tenureBadgeHideable(4185).useSharedValue(memo2);
  closure_18 = tmp2(7670)((items) => {
    const result = tenureBadgeHideable(14224).setPendingBadgeDisplayOrder(items);
  });
  const tmp9Result2 = tenureBadgeHideable(4185);
  sharedValue1 = tenureBadgeHideable(4185).useSharedValue(false);
  const items14 = [memo2, sharedValue1, sharedValue];
  const effect2 = obj1.useEffect(() => {
    if (!sharedValue1.get()) {
      const result = sharedValue.set(memo2);
    }
  }, items14);
  const tmp4Result = tmp4(obj1.useState(() => new Set()), 2);
  first1 = tmp4Result[0];
  closure_21 = tmp4Result[1];
  closure_22 = tmp2(7670)((badge_id) => {
    closure_0 = badge_id;
    const mapped = hiddenBadges.map((badge_id) => badge_id.badge_id);
    if (mapped.includes(badge_id.badge_id)) {
      if (stateFromStores1) {
        const items = [];
        items[HermesBuiltin.arraySpread(memo2, 0)] = badge_id.badge_id;
        const result = tenureBadgeHideable(14224).setPendingBadgeDisplayOrder(items);
        const obj3 = tenureBadgeHideable(14224);
      }
      const result1 = tenureBadgeHideable(14224).setPendingBadgeHiddenBadges(mapped.filter((arg0) => arg0 !== badge_id.badge_id));
      const AccessibilityAnnouncer = tenureBadgeHideable(1351).AccessibilityAnnouncer;
      const intl2 = tenureBadgeHideable(1236).intl;
      let obj = { badgeName: null };
      obj[0] = badge_id.name;
      AccessibilityAnnouncer.announce(intl2.formatToPlainString(tenureBadgeHideable(1236).t.mehuPg, obj));
    } else if (set.has(badge_id.badge_id)) {
      obj = first(4162);
      obj = { key: null, content: null };
      const _HermesInternal = HermesInternal;
      obj[0] = "BADGE_ALWAYS_VISIBLE-" + badge_id.badge_id;
      const intl = tenureBadgeHideable(1236).intl;
      obj[1] = intl.string(tenureBadgeHideable(1236).t.nPQVxb);
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
  size = first1.size;
  const tmp9Result3 = tenureBadgeHideable(4185);
  const tmp28 = first(7670)(() => {
    const set = new Set(hiddenBadges.map((badge_id) => badge_id.badge_id));
    for (const item10015 of first1) {
      let addResult = set.add(item10015);
      continue;
    }
    if (stateFromStores1) {
      const result = tenureBadgeHideable(14224).setPendingBadgeDisplayOrder(memo2.filter((arg0) => !set.has(arg0)));
      const obj2 = tenureBadgeHideable(14224);
    }
    const items = [...set];
    const result1 = tenureBadgeHideable(14224).setPendingBadgeHiddenBadges(items);
    const AccessibilityAnnouncer = tenureBadgeHideable(1351).AccessibilityAnnouncer;
    const intl = tenureBadgeHideable(1236).intl;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(tenureBadgeHideable(1236).t.q3t0Ht, { count: first1.size }));
    const obj = { count: first1.size };
    const obj3 = tenureBadgeHideable(14224);
    callback(new Set());
  });
  badgeTileSize = tenureBadgeHideable(14239).getBadgeTileSize(tmp2(1494)().width);
  const sum1 = fixedBadges.length + reorderableBadges.length + hiddenBadges.length;
  const rounded = Math.ceil(sum1 / tmp9(14239).BADGE_GRID_COLUMNS);
  let num = 0;
  if (rounded > 0) {
    let result = rounded * badgeTileSize;
    const diff = rounded - 1;
    num = result + diff * tmp9(14239).BADGE_GRID_GAP;
  }
  const tmp9Result4 = tenureBadgeHideable(14239);
  animatedRef = tenureBadgeHideable(4185).useAnimatedRef();
  const tmp9Result5 = tenureBadgeHideable(4185);
  scrollViewOffset = tenureBadgeHideable(4185).useScrollViewOffset(animatedRef);
  const tmp9Result6 = tenureBadgeHideable(4185);
  sharedValue2 = tenureBadgeHideable(4185).useSharedValue(0);
  const tmp9Result7 = tenureBadgeHideable(4185);
  sharedValue3 = tenureBadgeHideable(4185).useSharedValue(0);
  const tmp9Result8 = tenureBadgeHideable(4185);
  function re(timeSincePreviousFrame) {
    timeSincePreviousFrame = timeSincePreviousFrame.timeSincePreviousFrame;
    let value = sharedValue2.get();
    if (0 !== value) {
      if (null != timeSincePreviousFrame) {
        if (timeSincePreviousFrame > 0) {
          const result = sharedValue3.set(sharedValue3.get() + timeSincePreviousFrame);
          value = sharedValue3.get();
          if (value >= sharedValue1) {
            const result1 = obj.set(0);
            const obj2 = tenureBadgeHideable(4185);
            const _Math = Math;
            obj2.scrollTo(animatedRef, 0, Math.max(first(10650)(scrollViewOffset.get() + 700 * value * value / 1000), 0), false);
            const tmp12 = first(10650);
          }
          obj = sharedValue3;
        }
      }
    }
  }
  obj = { autoScrollSpeed: sharedValue2, autoScrollElapsed: sharedValue3, MS_PER_FRAME_60FPS: sharedValue1, AUTO_SCROLL_PIXELS_PER_SECOND: 700, scrollTo: tmp9(4185).scrollTo, scrollRef: animatedRef, roundToNearestPixel: tmp2(10650), scrollOffset: scrollViewOffset };
  re.__closure = obj;
  re.__workletHash = 8283557804556;
  re.__initData = closure_39;
  frameCallback = tenureBadgeHideable(4185).useFrameCallback(re, false);
  const items15 = [frameCallback];
  callback2 = obj1.useCallback((arg0) => {
    frameCallback.setActive(arg0);
  }, items15);
  const tmp9Result9 = tenureBadgeHideable(4185);
  function oe() {
    return 0 !== sharedValue2.get();
  }
  oe.__closure = { autoScrollSpeed: sharedValue2 };
  oe.__workletHash = 10053013202275;
  oe.__initData = closure_40;
  function le(arg0, arg1) {
    if (tmp) {
      const result = sharedValue3.set(0);
      tenureBadgeHideable(4185).runOnJS(callback2)(arg0);
      const obj = tenureBadgeHideable(4185);
    }
  }
  obj = { autoScrollElapsed: sharedValue3, runOnJS: tmp9(4185).runOnJS, setAutoScrollerActive: callback2 };
  le.__closure = obj;
  le.__workletHash = 13651628489226;
  le.__initData = closure_41;
  const animatedReaction = tenureBadgeHideable(4185).useAnimatedReaction(oe, le);
  if (hasCatalog) {
    const items16 = [tmp.gridInset, ];
    let num3 = 0;
    if (size > 0) {
      num3 = first;
    }
    obj1 = { style: null, children: null };
    obj2 = { paddingBottom: null };
    obj2[0] = tmp2(712).space.PX_16 + num3;
    items16[1] = obj2;
    obj1[0] = items16;
    let tmp47 = !stateFromStores1;
    if (!stateFromStores1) {
      obj3 = { style: null, ctaText: null, cardStyle: null, contentStyle: null, ctaStyle: null, showLinearGradient: true, onPress: null, children: null };
      obj3[0] = tmp.upsell;
      let intl2 = tmp9(1236).intl;
      obj3[1] = intl2.string(tmp9(1236).t.pj0XBN);
      ({ upsellCard: obj24[2], upsellContent: obj24[3], upsellCta: obj24[4] } = tmp);
      obj3[6] = callback1;
      const obj4 = { variant: "text-sm/normal", style: null, children: null };
      obj4[1] = tmp.upsellText;
      const intl3 = tmp9(1236).intl;
      obj4[2] = intl3.string(tmp9(1236).t.JrOki0);
      obj3[7] = memo2(tmp9(4441).Text, obj4);
      tmp47 = memo2(tmp2(14240), obj3);
      const tmp2Result = tmp2(14240);
    }
    const items17 = [tmp47, ];
    const obj5 = { accessibilityRole: "list", style: null, children: null };
    const items18 = [tmp.grid, ];
    const obj6 = { height: null };
    obj6[0] = num;
    items18[1] = obj6;
    obj5[1] = items18;
    const items19 = [
      fixedBadges.map((badge, index) => memo2(badgeTileSize, { badge, index, tileSize: badgeTileSize, selected: first1.has(badge.badge_id), alwaysVisible: set.has(badge.badge_id), onPress: closure_22 }, badge.badge_id)),
      reorderableBadges.map((badge_id) => {
          if (stateFromStores1) {
            let obj = { badge: null, index: null, tileSize: null, slotOffset: null, isFirst: null, isLast: null, selected: null, alwaysVisible: null, orderShared: null, isDragActive: null, scrollRef: null, scrollOffset: null, autoScrollSpeed: null, footerHeight: null, onCommitOrder: null, onPress: null };
            obj[0] = badge_id;
            obj[1] = fixedBadges.length + arg1;
            obj[2] = badgeTileSize;
            obj[3] = fixedBadges.length;
            let num = 0;
            obj[4] = 0 === arg1;
            obj[5] = arg1 === reorderableBadges.length - 1;
            obj[6] = first1.has(badge_id.badge_id);
            obj[7] = set.has(badge_id.badge_id);
            obj[8] = sharedValue;
            obj[9] = sharedValue1;
            obj[10] = animatedRef;
            obj[11] = scrollViewOffset;
            obj[12] = sharedValue2;
            if (size > 0) {
              num = first;
            }
            obj[13] = num;
            obj[14] = closure_18;
            obj[15] = closure_22;
            let tmpResult = tmp(closure_1_38, obj, badge_id.badge_id);
            const tmp9 = closure_1_38;
          } else {
            obj = { badge: null, index: null, tileSize: null, selected: null, alwaysVisible: null, onPress: null };
            obj[0] = badge_id;
            obj[1] = fixedBadges.length + arg1;
            obj[2] = badgeTileSize;
            obj[3] = first1.has(badge_id.badge_id);
            obj[4] = set.has(badge_id.badge_id);
            obj[5] = closure_22;
            tmpResult = tmp(badgeTileSize, obj, badge_id.badge_id);
          }
          return tmpResult;
        }),
      hiddenBadges.map((badge) => memo2(badgeTileSize, { badge, index: fixedBadges.length + reorderableBadges.length + arg1, tileSize: badgeTileSize, selected: first1.has(badge.badge_id), alwaysVisible: set.has(badge.badge_id), onPress: closure_22 }, badge.badge_id))
    ];
    obj5[2] = items19;
    items17[1] = sharedValue(context, obj5);
    obj1[1] = items17;
    let tmp41Result = tmp45(tmp46, obj1);
    let tmp43 = tmp46;
  } else {
    if (stateFromStoresObject.hasCatalogError) {
      const obj7 = { style: null, accessibilityRole: "alert", children: null };
      obj7[0] = tmp.message;
      const obj8 = { variant: "text-md/normal", color: "text-muted", style: null, children: null };
      obj8[2] = tmp.messageText;
      let intl = tmp9(1236).intl;
      obj8[3] = intl.string(tmp9(1236).t["rTU7/z"]);
      obj7[2] = tmp41(tmp9(4441).Text, obj8);
      let obj9 = obj7;
    } else {
      obj9 = { style: null, children: null };
      obj9[0] = tmp.message;
      obj9[1] = tmp41(tmp9(6000).ActivityIndicator, { animating: true, size: "large" });
    }
    tmp43 = tmp42;
    tmp41Result = tmp41(tmp42, obj9);
  }
  const obj10 = { startExpanded: true, scrollable: true, dismissAccessibilityLabel: null, header: null, footer: null, children: null };
  const intl4 = tmp9(1236).intl;
  obj10[2] = intl4.string(tenureBadgeHideable(1236).t.x5SfWU);
  const obj11 = { title: null, subtitle: null };
  const intl5 = tmp9(1236).intl;
  obj11[0] = intl5.string(tenureBadgeHideable(1236).t.x5SfWU);
  const intl6 = tmp9(1236).intl;
  const t = tmp9(1236).t;
  obj11[1] = intl6.string(stateFromStores1 ? t["Vzc4+8"] : t.ZuXSRp);
  obj10[3] = memo2(tenureBadgeHideable(5573).BottomSheetTitleHeader, obj11);
  let tmp50Result = null;
  if (size > 0) {
    const obj12 = { style: null, onLayout: null, children: null };
    obj12[0] = tmp.action;
    obj12[1] = callback;
    const obj13 = { bottom: true, children: null };
    const obj14 = { variant: "primary-overlay", grow: true, text: null, icon: null, onPress: null };
    const intl7 = tmp9(1236).intl;
    const obj15 = { count: null };
    obj15[0] = size;
    obj14[2] = intl7.formatToPlainString(tmp9(1236).t.j3DsAJ, obj15);
    obj14[3] = tmp50(tmp9(7674).EyeSlashIcon, {});
    obj14[4] = tmp28;
    obj13[1] = tmp50(tmp9(4880).Button, obj14);
    obj12[2] = tmp50(tmp9(5505).SafeAreaPaddingView, obj13);
    tmp50Result = tmp50(tmp43, obj12);
  }
  obj10[4] = tmp50Result;
  obj10[5] = memo2(tenureBadgeHideable(5576).BottomSheetScrollView, { ref: animatedRef, contentContainerStyle: { paddingBottom: sum }, children: tmp41Result });
  return memo2(tenureBadgeHideable(5574).BottomSheet, obj10);
};