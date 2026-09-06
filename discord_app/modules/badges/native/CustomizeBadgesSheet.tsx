// discord_app/modules/badges/native/CustomizeBadgesSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import CircleInformationIcon from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../design/animation/reanimated/timing/timingPresets.tsx";
import Card from "../../../design/components/Card/native/Card.native.tsx";
import BadgeDirectoryActionCreators from "../BadgeDirectoryActionCreators.tsx";
import ContextMenu from "../../../design/components/ContextMenu/native/ContextMenu.native.tsx";
import ContextMenuConstants from "../../../design/components/ContextMenu/native/ContextMenuConstants.native.tsx";
import PremiumFeaturesCards from "../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import openPremiumModalDefault from "../../../components_native/premium/openPremiumModal.tsx";
import roundToNearestPixelDefault from "../../voice_panel/native/utils/roundToNearestPixel.tsx";
import BadgeCatalogIconDefault from "BadgeCatalogIcon.tsx";
import BadgeUtils from "../BadgeUtils.tsx";
import PendingBadgeSettings from "../PendingBadgeSettings.tsx";
import BadgeGrid from "BadgeGrid.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../../user_profile/UserProfileSettingsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import BadgeDirectoryStore from "../BadgeDirectoryStore.tsx";

require = fn;
function HideBadgeMenu(children) {
  ({ badge: require, onHide: importDefault } = children);
  let obj = { items: null, disableGesture: true, triggerOnLongPress: true, children: null };
  obj = { label: null, action: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.xSWJPo);
  obj.action = function action() {
    return importDefault(_require);
  };
  const items = [obj];
  obj.items = items;
  obj.children = children.children;
  return __initData(ContextMenu.ContextMenu, obj);
}
function BadgeTileContent(arg0) {
  ({ badge, alwaysVisible, showAccessibilityLabel, onShowPress } = arg0);
  const tmp = closure_21();
  let flag = badge.hidden;
  if (flag == null) {
    flag = false;
  }
  let tmp2 = null;
  if (alwaysVisible) {
    let obj = { size: "sm", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
    tmp2 = __initData(CircleInformationIcon.CircleInformationIcon, obj);
  }
  obj = { variant: "secondary", border: "none", radius: 16, style: tmp.card, children: null };
  obj = { badge, size: BadgeGrid.BADGE_TILE_ICON_SIZE, style: null };
  let iconHidden;
  if (flag) {
    iconHidden = tmp.iconHidden;
  }
  obj.style = iconHidden;
  const items = [__initData(BadgeCatalogIconDefault, obj)];
  if (flag) {
    if (null != onShowPress) {
      if (!alwaysVisible) {
        const obj1 = { style: tmp.indicatorButton, children: null };
        const obj2 = {
          size: "sm",
          variant: "secondary-overlay",
          icon: null,
          accessibilityLabel: null,
          accessibilityHint: null,
          onPress: null,
        };
        const obj3 = { size: "sm", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
        obj2.icon = tmp10(tmp8(6968).EyeSlashIcon, obj3);
        if (showAccessibilityLabel == null) {
          showAccessibilityLabel = badge.name;
        }
        obj2.accessibilityLabel = showAccessibilityLabel;
        const intl = tmp8(1114).intl;
        obj2.accessibilityHint = intl.string(tmp8(1114).t.hHHpvU);
        obj2.onPress = onShowPress;
        obj1.children = tmp10(tmp8(8097).IconButton, obj2);
        let tmp10Result = tmp10(hasOwnProperty, obj1);
      }
      items[1] = tmp10Result;
      obj.children = items;
      return value2(Card.Card, obj);
    }
  }
  tmp10Result = null != tmp2;
  if (tmp10Result) {
    const obj4 = { style: tmp.indicator, "aria-hidden": true, children: tmp2 };
    tmp10Result = tmp10(hasOwnProperty, obj4);
  }
}
get_ActivityIndicator = fn(17);
({ Platform, Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1074);
({
  AnalyticEvents: closure_9,
  AnalyticsObjects: c10,
  AnalyticsPages: closure_11,
  AnalyticsSections: closure_12,
} = Constants);
let closure_13 = fn(7151).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const PremiumUpsellTypes = fn(1373).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let c17 = 80;
let c18 = 16.666666666666668;
fn(4560);
let obj = {
  gridInset: null,
  grid: null,
  upsell: null,
  upsellCard: null,
  upsellContent: null,
  upsellCta: null,
  upsellText: null,
  message: null,
  messageText: null,
};
obj = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj.gridInset = obj;
let createStyles = { position: "relative", width: "100%", marginTop: nativeDefault.space.PX_8 };
obj.grid = createStyles;
obj.upsell = { marginHorizontal: 0, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16 };
let obj2 = { marginHorizontal: 0, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16 };
obj.upsellCard = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
obj.upsellContent = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj.upsellCta = { marginTop: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm };
obj.upsellText = { textAlign: "center" };
let obj5 = { marginTop: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm };
obj.message = {
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_32,
};
obj.messageText = { textAlign: "center" };
let closure_19 = createStyles.createStyles(obj);
createStyles = fn(4560);
let obj7 = {
  position: { position: "absolute" },
  fill: { flex: 1 },
  card: { flex: 1, alignItems: "center", justifyContent: "center", padding: 0 },
  indicator: null,
  indicatorButton: null,
  iconHidden: null,
};
let size = {
  position: "absolute",
  top: nativeDefault.space.PX_8,
  end: nativeDefault.space.PX_8,
  width: 32,
  height: 32,
  alignItems: "flex-end",
  justifyContent: "flex-start",
};
obj7.indicator = size;
obj7.indicatorButton = {
  position: "absolute",
  top: 0,
  end: 0,
  width: 48,
  height: 48,
  alignItems: "center",
  justifyContent: "center",
};
obj7.iconHidden = { opacity: 0.3 };
let closure_21 = createStyles.createStyles(obj7);
function getSlotOffset(arg0, arg1) {
  const point = { x: null, y: null };
  const result = arg0 % BadgeGrid.BADGE_GRID_COLUMNS;
  point.x = result * (arg1 + BadgeGrid.BADGE_GRID_GAP);
  const rounded = Math.floor(arg0 / BadgeGrid.BADGE_GRID_COLUMNS);
  point.y = rounded * (arg1 + BadgeGrid.BADGE_GRID_GAP);
  return point;
}
let obj6 = {
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_32,
};
getSlotOffset.__closure = {
  BADGE_GRID_COLUMNS: fn(14621).BADGE_GRID_COLUMNS,
  BADGE_GRID_GAP: fn(14621).BADGE_GRID_GAP,
};
getSlotOffset.__workletHash = 8647997879684;
getSlotOffset.__initData = {
  code: "function getSlotOffset_CustomizeBadgesSheetTsx1(index,tileSize){const{BADGE_GRID_COLUMNS,BADGE_GRID_GAP}=this.__closure;const column=index%BADGE_GRID_COLUMNS;return{x:column*(tileSize+BADGE_GRID_GAP),y:Math.floor(index/BADGE_GRID_COLUMNS)*(tileSize+BADGE_GRID_GAP)};}",
};
let closure_24 = noop.memo((badge) => {
  badge = badge.badge;
  const index = badge.index;
  ({ tileSize, alwaysVisible } = badge);
  let onPress = badge.onPress;
  const onHide = badge.onHide;
  let onShowPress;
  let items1;
  if (typeof getSlotOffset === "function") {
    let result = index % badge(alwaysVisible[15]).BADGE_GRID_COLUMNS;
    const _Math = Math;
    const result1 = result * (tileSize + badge(alwaysVisible[15]).BADGE_GRID_GAP);
    const rounded = Math.floor(index / badge(alwaysVisible[15]).BADGE_GRID_COLUMNS);
    const items = [badge, onPress];
    const result2 = rounded * (tileSize + badge(alwaysVisible[15]).BADGE_GRID_GAP);
    onShowPress = onPress.useCallback(() => {
      onPress(badge);
    }, items);
    items1 = [tmp.position];
    const size = { left: result1, top: result2, width: tileSize, height: tileSize };
    items1[1] = size;
    if (badge.hidden) {
      let obj = { style: items1, children: null };
      obj = { badge, alwaysVisible, showAccessibilityLabel: null, onShowPress: null };
      let intl = tmp2(tmp3[14]).intl;
      let t = tmp2(tmp3[14]).t;
      let obj1 = { badgeName: badge.name, position: index + 1 };
      obj.showAccessibilityLabel = intl.formatToPlainString(badge.hidden ? t["dXg/Dl"] : t["21W3EN"], obj1);
      obj.onShowPress = onShowPress;
      obj.children = closure_15(BadgeTileContent, obj);
      return closure_15(items1, obj);
    } else {
      function renderTile(ref) {
        let onLongPress = ref;
        ref = undefined;
        if (ref != null) {
          ref = ref.ref;
        }
        let obj = { ref, accessibilityLabel: null };
        const intl = util.intl;
        const t = util.t;
        obj = { badgeName: tmp4.name, position: index + 1 };
        obj.accessibilityLabel = intl.formatToPlainString(badge.hidden ? t["dXg/Dl"] : t["21W3EN"], obj);
        if (!alwaysVisible) {
          obj = { accessibilityRole: "button", accessibilityHint: undefined };
          const merged = Object.assign(obj);
          let accessibilityActions;
          if (ref != null) {
            accessibilityActions = ref.accessibilityActions;
          }
          obj.accessibilityActions = accessibilityActions;
          let prop;
          if (ref != null) {
            prop = ref.onAccessibilityAction;
          }
          obj.onAccessibilityAction = prop;
          if (tmp8) {
            onPress = callback;
          } else if (ref != null) {
            onPress = ref.onPress;
          }
          obj.onPress = onPress;
          let fn;
          if (null != ref) {
            fn = (arg0) => {
              const result = badge(alwaysVisible[11]).triggerHapticFeedback(
                badge(alwaysVisible[12]).CONTEXT_MENU_OPEN_HAPTIC,
              );
              onLongPress = onLongPress.onLongPress;
              if (onLongPress != null) {
                onLongPress(arg0);
              }
            };
          }
          obj.onLongPress = fn;
          obj.delayLongPress = tmp6(8668).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
          obj.style = items1;
          const obj1 = { badge: tmp4, alwaysVisible: tmp8 };
          obj.children = tmp(BadgeTileContent, obj1);
          return tmp(React4, obj);
        } else {
          const intl2 = tmp6(1114).intl;
          const tmp6Result = tmp6(11199);
          const t2 = tmp6(1114).t;
          intl2.string(tmp6(11199).isPinnedBadge(tmp9) ? t2.t3udZb : t2.nPQVxb);
          const isPinnedBadgeResult = tmp6(11199).isPinnedBadge(tmp9);
        }
      }
      if (!alwaysVisible) {
        if (null != onHide) {
          const obj2 = { badge, onHide, children: renderTile };
          let renderTileResult = closure_15(HideBadgeMenu, obj2);
        }
        return renderTileResult;
      }
      renderTileResult = renderTile(null);
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let closure_25 = {
  code: "function CustomizeBadgesSheetTsx2(){const{orderShared,badgeId,getSlotOffset,slotOffset,tileSize}=this.__closure;const slot=orderShared.get().indexOf(badgeId);return slot<0?null:getSlotOffset(slot+slotOffset,tileSize);}",
};
const __initData = {
  code: "function CustomizeBadgesSheetTsx3(target,previousTarget){const{isThisTileDragging,positionX,withTiming,timingStandard,positionY}=this.__closure;if(target==null||isThisTileDragging.get()){return;}if(target.x!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.x)){positionX.set(withTiming(target.x,timingStandard));}if(target.y!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.y)){positionY.set(withTiming(target.y,timingStandard));}}",
};
const __initData2 = {
  code: "function CustomizeBadgesSheetTsx4(){const{orderShared,tileSize,BADGE_GRID_GAP,clamp,positionX,BADGE_GRID_COLUMNS,positionY,slotOffset,moveBadgeInDisplayOrder,badgeId,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;const order=orderShared.get();const step=tileSize+BADGE_GRID_GAP;const column=clamp(Math.floor((positionX.get()+tileSize/2)/step),0,BADGE_GRID_COLUMNS-1);const row=Math.max(Math.floor((positionY.get()+tileSize/2)/step),0);const to=clamp(row*BADGE_GRID_COLUMNS+column-slotOffset,0,order.length-1);const next=moveBadgeInDisplayOrder(order,order.indexOf(badgeId),to);if(next!==order){orderShared.set(next);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_MOVE);}}",
};
const __initData3 = {
  code: "function CustomizeBadgesSheetTsx5(){const{scrollOffset}=this.__closure;return scrollOffset.get();}",
};
const __initData4 = {
  code: "function CustomizeBadgesSheetTsx6(offset,previousOffset){const{isThisTileDragging,positionY,reslot}=this.__closure;if(previousOffset==null||!isThisTileDragging.get()){return;}positionY.set(positionY.get()+(offset-previousOffset));reslot();}",
};
let closure_30 = {
  code: "function handleStart_CustomizeBadgesSheetTsx7(){const{isAnyDragActive,isThisTileDragging,runOnJS,hideContextMenu,dragOrigin,positionX,positionY,measure,scrollRef,dragViewport,scale,withTiming,DRAG_SCALE,timingStandard,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(isAnyDragActive.get()&&!isThisTileDragging.get()){return;}runOnJS(hideContextMenu)();isAnyDragActive.set(true);isThisTileDragging.set(true);dragOrigin.set({x:positionX.get(),y:positionY.get()});const viewport=measure(scrollRef);dragViewport.set(viewport==null?null:{pageY:viewport.pageY,height:viewport.height});scale.set(withTiming(DRAG_SCALE,timingStandard));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_START);}",
};
let closure_31 = {
  code: "function handleChange_CustomizeBadgesSheetTsx8(event){const{isThisTileDragging,positionX,positionY,reslot,dragViewport,AUTO_SCROLL_EDGE_SIZE,autoScrollSpeed,clamp}=this.__closure;if(!isThisTileDragging.get()){return;}positionX.set(positionX.get()+event.changeX);positionY.set(positionY.get()+event.changeY);reslot();const viewport=dragViewport.get();if(viewport==null){return;}const fromTop=event.absoluteY-viewport.pageY;const fromBottom=viewport.pageY+viewport.height-event.absoluteY;if(fromTop<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(-1+clamp(fromTop,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else if(fromBottom<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(1-clamp(fromBottom,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else{autoScrollSpeed.set(0);}}",
};
let closure_32 = {
  code: "function handleFinalize_CustomizeBadgesSheetTsx9(){const{isThisTileDragging,autoScrollSpeed,dragViewport,orderShared,badgeId,getSlotOffset,slotOffset,tileSize,positionX,withTiming,timingStandard,positionY,scale,isAnyDragActive,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,onCommitOrder}=this.__closure;if(!isThisTileDragging.get()){return;}autoScrollSpeed.set(0);dragViewport.set(null);const order=orderShared.get();const slot=order.indexOf(badgeId);if(slot>=0){const target=getSlotOffset(slot+slotOffset,tileSize);positionX.set(withTiming(target.x,timingStandard));positionY.set(withTiming(target.y,timingStandard));}scale.set(withTiming(1,timingStandard));isThisTileDragging.set(false);isAnyDragActive.set(false);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_END);runOnJS(onCommitOrder)(order);}",
};
let closure_33 = {
  code: "function CustomizeBadgesSheetTsx10(){const{handleFinalize}=this.__closure;handleFinalize();}",
};
let closure_34 = {
  code: "function CustomizeBadgesSheetTsx11(event){const{handleChange}=this.__closure;handleChange(event);}",
};
let closure_35 = { code: "function CustomizeBadgesSheetTsx12(){const{handleStart}=this.__closure;handleStart();}" };
const __initData5 = {
  code: "function CustomizeBadgesSheetTsx13(){const{isThisTileDragging,dragOrigin,positionX,positionY,scale}=this.__closure;const dragging=isThisTileDragging.get();const origin=dragOrigin.get();return{zIndex:dragging?10:0,left:dragging?origin.x:positionX.get(),top:dragging?origin.y:positionY.get(),transform:dragging?[{translateX:positionX.get()-origin.x},{translateY:positionY.get()-origin.y},{scale:scale.get()}]:[{scale:scale.get()}]};}",
};
let closure_37 = noop.memo((badge) => {
  badge = badge.badge;
  let index = badge.index;
  const tileSize = badge.tileSize;
  const slotOffset = badge.slotOffset;
  const alwaysVisible = badge.alwaysVisible;
  const orderShared = badge.orderShared;
  const isDragActive = badge.isDragActive;
  const scrollRef = badge.scrollRef;
  const scrollOffset = badge.scrollOffset;
  const autoScrollSpeed = badge.autoScrollSpeed;
  const onCommitOrder = badge.onCommitOrder;
  let onPress = badge.onPress;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let sharedValue5;
  let reslot;
  closure_22 = undefined;
  closure_23 = undefined;
  closure_24 = undefined;
  let items3;
  ({ isFirst, isLast, onHide } = badge);
  const position = reslot();
  const badge_id = badge.badge_id;
  closure_14 = index(tileSize[22])(() => {
    onPress(badge);
  });
  let obj = badge(tileSize[23]);
  const sharedValue = obj.useSharedValue(false);
  let obj1 = badge(tileSize[23]);
  const sharedValue1 = obj1.useSharedValue(null);
  if (typeof closure_22 === "function") {
    let point = { x: null, y: null };
    let result = index % tmp2(tmp[15]).BADGE_GRID_COLUMNS;
    point.x = result * (tileSize + tmp2(tmp[15]).BADGE_GRID_GAP);
    let _Math = Math;
    let rounded = Math.floor(index / tmp2(tmp[15]).BADGE_GRID_COLUMNS);
    point.y = rounded * (tileSize + tmp2(tmp[15]).BADGE_GRID_GAP);
    let tmp2Result = tmp2(tmp[23]);
    sharedValue2 = tmp2Result.useSharedValue(point.x);
    tmp2Result = tmp2(tmp[23]);
    sharedValue3 = tmp2Result.useSharedValue(point.y);
    sharedValue4 = tmp2(tmp[23]).useSharedValue(point);
    const tmp2Result1 = tmp2(tmp[23]);
    sharedValue5 = tmp2(tmp[23]).useSharedValue(1);
    const tmp2Result2 = tmp2(tmp[23]);
    let fn = function v() {
      value = orderShared.get();
      index = value.indexOf(badge_id);
      let tmp2 = null;
      if (index >= 0) {
        const sum = index + slotOffset;
        if (typeof getSlotOffset === "function") {
          const point = { x: null, y: null };
          const result = sum % BadgeGrid.BADGE_GRID_COLUMNS;
          point.x = result * (tmp6 + BadgeGrid.BADGE_GRID_GAP);
          const _Math = Math;
          const rounded = Math.floor(sum / BadgeGrid.BADGE_GRID_COLUMNS);
          point.y = rounded * (tmp6 + BadgeGrid.BADGE_GRID_GAP);
          tmp2 = point;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      return tmp2;
    };
    obj = { orderShared, badgeId: badge_id, getSlotOffset: tmp5, slotOffset, tileSize };
    fn.__closure = obj;
    fn.__workletHash = 6182257637516;
    fn.__initData = items3;
    class C {
      constructor(arg0, arg1) {
        value = null == badge;
        if (!value) {
          tmp2 = closure_15;
          value = closure_15.get();
        }
        if (!value) {
          tmp3 = arg1;
          x = undefined;
          if (arg1 != null) {
            x = arg1.x;
          }
          if (badge.x !== x) {
            tmp5 = closure_17;
            tmp6 = closure_0;
            tmp7 = closure_2;
            obj = closure_0(closure_2[24]);
            tmp8 = closure_0;
            tmp9 = closure_2;
            result = closure_17.set(obj.withTiming(badge.x, closure_0(closure_2[25]).timingStandard));
          }
          y = undefined;
          if (arg1 != null) {
            y = arg1.y;
          }
          if (badge.y !== y) {
            tmp12 = closure_18;
            tmp13 = closure_0;
            tmp14 = closure_2;
            obj2 = closure_0(closure_2[24]);
            tmp15 = closure_0;
            tmp16 = closure_2;
            result1 = closure_18.set(obj2.withTiming(badge.y, closure_0(closure_2[25]).timingStandard));
          }
        }
        return;
      }
    }
    obj = {
      isThisTileDragging: sharedValue,
      positionX: sharedValue2,
      withTiming: tmp2(tmp[24]).withTiming,
      timingStandard: tmp2(tmp[25]).timingStandard,
      positionY: sharedValue3,
    };
    C.__closure = obj;
    C.__workletHash = 4011295272705;
    C.__initData = __initData;
    const animatedReaction = tmp2(tmp[23]).useAnimatedReaction(fn, C);
    class Q {
      constructor() {
        obj = orderShared;
        value = orderShared.get();
        tmp = closure_0;
        tmp2 = closure_2;
        sum = tileSize + closure_0(closure_2[15]).BADGE_GRID_GAP;
        obj2 = closure_0(closure_2[23]);
        rounded = Math.floor((closure_17.get() + tileSize / 2) / sum);
        clampResult = obj2.clamp(rounded, 0, closure_0(closure_2[15]).BADGE_GRID_COLUMNS - 1);
        bound = Math.max(Math.floor((closure_18.get() + tileSize / 2) / sum), 0);
        obj3 = closure_0(closure_2[23]);
        clampResult1 = obj3.clamp(
          bound * closure_0(closure_2[15]).BADGE_GRID_COLUMNS + clampResult - slotOffset,
          0,
          value.length - 1,
        );
        obj4 = closure_0(closure_2[26]);
        result = obj4.moveBadgeInDisplayOrder(value, value.indexOf(badge_id), clampResult1);
        if (result !== value) {
          result1 = obj.set(result);
          tmpResult = tmp(tmp2[23]);
          runOnJSResult = tmpResult.runOnJS(tmp(tmp2[11]).triggerHapticFeedback);
          tmp10Result = runOnJSResult(tmp(tmp2[11]).HapticFeedbackTypes.DRAG_AND_DROP_MOVE);
        }
        return;
      }
    }
    obj1 = {
      orderShared,
      tileSize,
      BADGE_GRID_GAP: tmp2(tmp[15]).BADGE_GRID_GAP,
      clamp: tmp2(tmp[23]).clamp,
      positionX: sharedValue2,
      BADGE_GRID_COLUMNS: tmp2(tmp[15]).BADGE_GRID_COLUMNS,
      positionY: sharedValue3,
      slotOffset,
      moveBadgeInDisplayOrder: tmp2(tmp[26]).moveBadgeInDisplayOrder,
      badgeId: badge_id,
      runOnJS: tmp2(tmp[23]).runOnJS,
      triggerHapticFeedback: tmp2(tmp[11]).triggerHapticFeedback,
      HapticFeedbackTypes: tmp2(tmp[11]).HapticFeedbackTypes,
    };
    Q.__closure = obj1;
    Q.__workletHash = 1083237242858;
    Q.__initData = __initData2;
    let items = [badge_id, orderShared, slotOffset, tileSize, sharedValue2, sharedValue3];
    reslot = slotOffset.useCallback(Q, items);
    const tmp2Result3 = tmp2(tmp[23]);
    function ee() {
      return scrollOffset.get();
    }
    let obj2 = { scrollOffset };
    ee.__closure = obj2;
    ee.__workletHash = 10993823060256;
    ee.__initData = __initData3;
    let fn2 = function $(arg0, arg1) {
      value = null != arg1;
      if (value) {
        value = sharedValue.get();
      }
      if (value) {
        const result = sharedValue3.set(sharedValue3.get() + (arg0 - arg1));
        callback();
      }
    };
    let obj3 = { isThisTileDragging: sharedValue, positionY: sharedValue3, reslot };
    fn2.__closure = obj3;
    fn2.__workletHash = 9803143874483;
    fn2.__initData = __initData4;
    const animatedReaction1 = tmp2(tmp[23]).useAnimatedReaction(ee, fn2);
    let items1 = [
      reslot,
      scrollRef,
      sharedValue1,
      autoScrollSpeed,
      badge_id,
      tileSize,
      slotOffset,
      orderShared,
      isDragActive,
      onCommitOrder,
      sharedValue,
      sharedValue5,
      sharedValue2,
      sharedValue3,
      sharedValue4,
    ];
    closure_22 = slotOffset.useMemo(() => {
      function handleStart() {
        let obj = isDragActive;
        if (!isDragActive.get()) {
          badge(tileSize[23]).runOnJS(badge(tileSize[27]).hideContextMenu)();
          const result = obj.set(true);
          const result1 = sharedValue.set(true);
          const point = { x: sharedValue2.get(), y: sharedValue3.get() };
          const result2 = sharedValue4.set(point);
          const obj2 = badge(tileSize[23]);
          const measureResult = badge(tileSize[23]).measure(scrollRef);
          let tmp15 = null;
          if (null != measureResult) {
            obj = { pageY: null, height: null };
            ({ pageY: obj5.pageY, height: obj5.height } = measureResult);
            tmp15 = obj;
          }
          const result3 = sharedValue1.set(tmp15);
          let tmp2Result = tmp2(tmp3[24]);
          const result4 = sharedValue5.set(tmp2Result.withTiming(1.05, tmp2(tmp3[25]).timingStandard));
          tmp2Result = tmp2(tmp3[23]);
          const obj4 = badge(tileSize[23]);
          tmp2Result.runOnJS(badge(tileSize[11]).triggerHapticFeedback)(
            badge(tileSize[11]).HapticFeedbackTypes.DRAG_AND_DROP_START,
          );
          const runOnJSResult = tmp2Result.runOnJS(badge(tileSize[11]).triggerHapticFeedback);
        }
      }
      let obj = {
        isAnyDragActive: isDragActive,
        isThisTileDragging: sharedValue,
        runOnJS: badge(tileSize[23]).runOnJS,
        hideContextMenu: badge(tileSize[27]).hideContextMenu,
        dragOrigin: sharedValue4,
        positionX: sharedValue2,
        positionY: sharedValue3,
        measure: badge(tileSize[23]).measure,
        scrollRef,
        dragViewport: sharedValue1,
        scale: sharedValue5,
        withTiming: badge(tileSize[24]).withTiming,
        DRAG_SCALE: 1.05,
        timingStandard: badge(tileSize[25]).timingStandard,
        triggerHapticFeedback: badge(tileSize[11]).triggerHapticFeedback,
        HapticFeedbackTypes: badge(tileSize[11]).HapticFeedbackTypes,
      };
      handleStart.__closure = obj;
      handleStart.__workletHash = 11005478611755;
      handleStart.__initData = __initData;
      function handleChange(changeX) {
        if (sharedValue.get()) {
          const result = closure_1_17.set(closure_1_17.get() + changeX.changeX);
          const result1 = sharedValue3.set(sharedValue3.get() + changeX.changeY);
          reslot();
          value = sharedValue1.get();
          if (null != value) {
            const diff = changeX.absoluteY - value.pageY;
            const diff1 = value.pageY + value.height - changeX.absoluteY;
            if (diff < sharedValue2) {
              const result2 = autoScrollSpeed.set(badge(tileSize[23]).clamp(diff, 0, tmp23) / tmp23 - 1);
              const obj2 = badge(tileSize[23]);
            } else if (diff1 < tmp23) {
              const result3 = autoScrollSpeed.set(1 - badge(tileSize[23]).clamp(diff1, 0, tmp23) / tmp23);
              const obj = badge(tileSize[23]);
            } else {
              const result4 = autoScrollSpeed.set(0);
            }
          }
        }
      }
      obj = {
        isThisTileDragging: sharedValue,
        positionX: sharedValue2,
        positionY: sharedValue3,
        reslot,
        dragViewport: sharedValue1,
        AUTO_SCROLL_EDGE_SIZE: sharedValue2,
        autoScrollSpeed,
        clamp: badge(tileSize[23]).clamp,
      };
      handleChange.__closure = obj;
      handleChange.__workletHash = 6322461598588;
      handleChange.__initData = __initData2;
      function handleFinalize() {
        if (sharedValue.get()) {
          const result = autoScrollSpeed.set(0);
          const result1 = sharedValue1.set(null);
          value = orderShared.get();
          index = value.indexOf(badge_id);
          if (index >= 0) {
            const sum = index + slotOffset;
            if (typeof closure_22 === "function") {
              const result2 = sum % badge(tileSize[15]).BADGE_GRID_COLUMNS;
              const _Math = Math;
              const result3 = result2 * (tmp58 + badge(tileSize[15]).BADGE_GRID_GAP);
              const rounded = Math.floor(sum / badge(tileSize[15]).BADGE_GRID_COLUMNS);
              const result4 = rounded * (tmp58 + badge(tileSize[15]).BADGE_GRID_GAP);
              const result5 = sharedValue2.set(
                badge(tileSize[24]).withTiming(result3, badge(tileSize[25]).timingStandard),
              );
              const obj2 = badge(tileSize[24]);
              const result6 = sharedValue3.set(
                badge(tileSize[24]).withTiming(result4, badge(tileSize[25]).timingStandard),
              );
              const obj3 = badge(tileSize[24]);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          const result7 = sharedValue5.set(badge(tileSize[24]).withTiming(1, badge(tileSize[25]).timingStandard));
          const result8 = sharedValue.set(false);
          const result9 = isDragActive.set(false);
          const obj4 = badge(tileSize[24]);
          const obj5 = badge(tileSize[23]);
          badge(tileSize[23]).runOnJS(badge(tileSize[11]).triggerHapticFeedback)(
            badge(tileSize[11]).HapticFeedbackTypes.DRAG_AND_DROP_END,
          );
          const runOnJSResult = badge(tileSize[23]).runOnJS(badge(tileSize[11]).triggerHapticFeedback);
          badge(tileSize[23]).runOnJS(onCommitOrder)(value);
          const obj6 = badge(tileSize[23]);
        }
      }
      obj = {
        isThisTileDragging: sharedValue,
        autoScrollSpeed,
        dragViewport: sharedValue1,
        orderShared,
        badgeId: badge_id,
        getSlotOffset,
        slotOffset,
        tileSize: handleFinalize,
        positionX: sharedValue2,
        withTiming: badge(tileSize[24]).withTiming,
        timingStandard: badge(tileSize[25]).timingStandard,
        positionY: sharedValue3,
        scale: sharedValue5,
        isAnyDragActive: isDragActive,
        runOnJS: badge(tileSize[23]).runOnJS,
        triggerHapticFeedback: badge(tileSize[11]).triggerHapticFeedback,
        HapticFeedbackTypes: badge(tileSize[11]).HapticFeedbackTypes,
        onCommitOrder,
      };
      handleFinalize.__closure = obj;
      handleFinalize.__workletHash = 3743829622400;
      handleFinalize.__initData = __initData3;
      const Gesture = badge(tileSize[28]).Gesture;
      const PanResult = Gesture.Pan();
      const fn = function s() {
        handleStart();
      };
      fn.__closure = { handleStart };
      fn.__workletHash = 1384005013956;
      fn.__initData = __initData6;
      const minDistanceResult = Gesture.Pan().minDistance(8);
      const fn2 = function n(arg0) {
        handleChange(arg0);
      };
      fn2.__closure = { handleChange };
      fn2.__workletHash = 11082443717159;
      fn2.__initData = __initData5;
      const onStartResult = Gesture.Pan().minDistance(8).onStart(fn);
      const fn3 = function t() {
        handleFinalize();
      };
      fn3.__closure = { handleFinalize };
      fn3.__workletHash = 11034838477574;
      fn3.__initData = __initData4;
      return Gesture.Pan().minDistance(8).onStart(fn).onChange(fn2).onFinalize(fn3);
    }, items1);
    const tmp2Result4 = tmp2(tmp[23]);
    function ie() {
      value = sharedValue.get();
      const point = sharedValue4.get();
      let num = 0;
      if (value) {
        num = 10;
      }
      const rect = { zIndex: num, left: null, top: null, transform: null };
      if (value) {
        let x = point.x;
      } else {
        x = sharedValue2.get();
      }
      rect.left = x;
      if (value) {
        let y = point.y;
      } else {
        y = sharedValue3.get();
      }
      rect.top = y;
      if (value) {
        let obj = { translateX: sharedValue2.get() - point.x };
        const items = [obj, ,];
        obj = { translateY: sharedValue3.get() - point.y };
        items[1] = obj;
        const obj1 = { scale: sharedValue5.get() };
        items[2] = obj1;
        let items1 = items;
      } else {
        const obj2 = { scale: sharedValue5.get() };
        items1 = [obj2];
      }
      rect.transform = items1;
      return rect;
    }
    let obj4 = {
      isThisTileDragging: sharedValue,
      dragOrigin: sharedValue4,
      positionX: sharedValue2,
      positionY: sharedValue3,
      scale: sharedValue5,
    };
    ie.__closure = obj4;
    ie.__workletHash = 3612359203254;
    ie.__initData = __initData5;
    closure_23 = tmp2(tmp[23]).useAnimatedStyle(ie);
    const items2 = [badge_id, orderShared, onCommitOrder, slotOffset];
    closure_24 = slotOffset.useCallback((nativeEvent) => {
      const actionName = nativeEvent.nativeEvent.actionName;
      if ("moveup" === actionName) {
        let obj = orderShared;
        value = orderShared.get();
        index = value.indexOf(badge_id);
        let num2 = 1;
        if (tmp) {
          num2 = -1;
        }
        const clampResult = ReanimatedRexport.clamp(index + num2, 0, value.length - 1);
        const result = PendingBadgeSettings.moveBadgeInDisplayOrder(value, index, clampResult);
        if (result !== value) {
          const result1 = obj.set(result);
          onCommitOrder(result);
          const AccessibilityAnnouncer = tmp4(4272).AccessibilityAnnouncer;
          const intl = tmp4(1114).intl;
          obj = { from: index + slotOffset + 1, to: clampResult + slotOffset + 1 };
          AccessibilityAnnouncer.announce(intl.formatToPlainString(tmp4(1114).t.qPHr0x, obj));
        }
        const tmp4Result = PendingBadgeSettings;
      }
    }, items2);
    items3 = [];
    if (!isFirst) {
      let obj5 = { name: "moveup", label: null };
      let intl = tmp2(tmp[14]).intl;
      obj5.label = intl.string(tmp2(tmp[14]).t.eR2XSh);
      items3.push(obj5);
    }
    if (!isLast) {
      let obj6 = { name: "movedown", label: null };
      let intl2 = tmp2(tmp[14]).intl;
      obj6.label = intl2.string(tmp2(tmp[14]).t.wWi0DL);
      items3.push(obj6);
    }
    function renderTile(ref) {
      badge = ref;
      let obj = { gesture, children: null };
      obj = { style: null, children: null };
      const items = [position.position, ,];
      const size = { width: tileSize, height: tileSize };
      items[1] = size;
      items[2] = closure_23;
      obj.style = items;
      ref = undefined;
      if (ref != null) {
        ref = ref.ref;
      }
      obj = { ref, accessible: true, accessibilityLabel: null };
      const intl = tmp2(tmp3[14]).intl;
      const t = tmp2(tmp3[14]).t;
      obj.accessibilityLabel = intl.formatToPlainString(badge.hidden ? t["dXg/Dl"] : t["21W3EN"], {
        badgeName: badge.name,
        position: index + 1,
      });
      if (!alwaysVisible) {
        const obj2 = { accessibilityRole: "button", accessibilityHint: undefined };
        const merged = Object.assign(obj2);
        let accessibilityActions;
        if (ref != null) {
          accessibilityActions = ref.accessibilityActions;
        }
        if (accessibilityActions == null) {
          accessibilityActions = [];
        }
        const items1 = [];
        HermesBuiltin.arraySpread(items3, HermesBuiltin.arraySpread(accessibilityActions, 0));
        obj.accessibilityActions = items1;
        obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
          const actionName = nativeEvent.nativeEvent.actionName;
          if ("moveup" !== actionName) {
            if ("movedown" !== actionName) {
              if (tmp != null) {
                const onAccessibilityAction = tmp.onAccessibilityAction;
                if (onAccessibilityAction != null) {
                  const result = onAccessibilityAction(nativeEvent);
                }
              }
            }
          }
          closure_24(nativeEvent);
        };
        if (tmp9) {
          onPress = closure_14;
        } else if (ref != null) {
          onPress = ref.onPress;
        }
        obj.onPress = onPress;
        let fn;
        if (null != ref) {
          fn = (arg0) => {
            const result = HapticUtils.triggerHapticFeedback(ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC);
            onLongPress = onLongPress.onLongPress;
            if (onLongPress != null) {
              onLongPress(arg0);
            }
          };
        }
        obj.onLongPress = fn;
        obj.delayLongPress = tmp2(tmp3[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
        obj.style = position.fill;
        const obj3 = { badge: tmp7, alwaysVisible: tmp9 };
        obj.children = tmp(closure_23, obj3);
        obj.children = tmp(alwaysVisible, obj);
        obj.children = tmp(index(tileSize[23]).View, obj);
        return tmp(badge(tileSize[28]).GestureDetector, obj);
      } else {
        const intl2 = tmp2(tmp3[14]).intl;
        const tmp2Result = tmp2(tmp3[21]);
        const t2 = tmp2(tmp3[14]).t;
        intl2.string(tmp2(tmp3[21]).isPinnedBadge(tmp10) ? t2.t3udZb : t2.nPQVxb);
        const isPinnedBadgeResult = tmp2(tmp3[21]).isPinnedBadge(tmp10);
      }
    }
    if (alwaysVisible) {
      let renderTileResult = renderTile(null);
    } else {
      const obj7 = { badge, onHide, children: renderTile };
      renderTileResult = sharedValue(sharedValue5, obj7);
    }
    return renderTileResult;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
const __initData6 = {
  code: "function CustomizeBadgesSheetTsx14({timeSincePreviousFrame:timeSincePreviousFrame}){const{autoScrollSpeed,autoScrollElapsed,MS_PER_FRAME_60FPS,AUTO_SCROLL_PIXELS_PER_SECOND,scrollTo,scrollRef,roundToNearestPixel,scrollOffset}=this.__closure;const speed=autoScrollSpeed.get();if(speed===0||timeSincePreviousFrame==null||timeSincePreviousFrame<=0){return;}autoScrollElapsed.set(autoScrollElapsed.get()+timeSincePreviousFrame);const elapsed=autoScrollElapsed.get();if(elapsed<MS_PER_FRAME_60FPS){return;}autoScrollElapsed.set(0);const delta=speed*AUTO_SCROLL_PIXELS_PER_SECOND*elapsed/1000;scrollTo(scrollRef,0,Math.max(roundToNearestPixel(scrollOffset.get()+delta),0),false);}",
};
const __initData7 = {
  code: "function CustomizeBadgesSheetTsx15(){const{autoScrollSpeed}=this.__closure;return autoScrollSpeed.get()!==0;}",
};
const __initData8 = {
  code: "function CustomizeBadgesSheetTsx16(isScrolling,wasScrolling){const{autoScrollElapsed,runOnJS,setAutoScrollerActive}=this.__closure;if(wasScrolling==null||isScrolling===wasScrolling){return;}autoScrollElapsed.set(0);runOnJS(setAutoScrollerActive)(isScrolling);}",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/badges/native/CustomizeBadgesSheet.tsx");

export default function CustomizeBadgesSheet(analyticsLocations) {
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
  let hiddenBadges;
  let memo2;
  let sharedValue;
  let onCommitOrder;
  let sharedValue1;
  MS_PER_FRAME_60FPS = undefined;
  let onHide;
  let badgeTileSize;
  let animatedRef;
  let scrollViewOffset;
  let sharedValue2;
  let sharedValue3;
  let frameCallback;
  let callback1;
  let tmp = onHide();
  let obj = stateFromStores(stateFromStores1[30]);
  const tenureBadgeHideable = obj.useConfig({ location: "CustomizeBadgesSheet" }).tenureBadgeHideable;
  const sum = Math.max(stateFromStores(stateFromStores1[31])().bottom, hiddenBadges) + 4;
  let obj1 = tenureBadgeHideable(stateFromStores1[32]);
  const items = [pendingBadgeDisplayOrder];
  stateFromStores = obj1.useStateFromStores(items, () => {
    const currentUser = pendingBadgeDisplayOrder.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj2 = tenureBadgeHideable(stateFromStores1[32]);
  const items1 = [pendingBadgeDisplayOrder];
  stateFromStores1 = obj2.useStateFromStores(items1, () =>
    stateFromStores(stateFromStores1[33]).canUsePremiumProfileCustomization(pendingBadgeDisplayOrder.getCurrentUser()),
  );
  if (analyticsLocations == null) {
    analyticsLocations = [];
  }
  analyticsLocations = stateFromStores(stateFromStores1[34])(
    analyticsLocations,
    tmp2(tmp3[35]).BADGES_REORDER_ACTION_SHEET,
  ).analyticsLocations;
  let obj3 = analyticsLocations;
  context = analyticsLocations.useContext(tmp2(tmp3[36]));
  const items2 = [context, analyticsLocations];
  const callback = analyticsLocations.useCallback(() => {
    let obj = context;
    if (context != null) {
      obj.close();
    }
    obj = { analyticsLocation: null, analyticsLocations, premiumFeatureCardOrder: null };
    obj = { page: constants3.USER_SETTINGS, section: constants4.USER_PROFILE, object: constants2.BUTTON_CTA };
    obj.analyticsLocation = obj;
    obj.premiumFeatureCardOrder = PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING;
    openPremiumModalDefault(obj);
  }, items2);
  let tmp5Result = tmp5(tmp3[32]);
  const items3 = [pendingBadgeHiddenBadges];
  const items4 = [stateFromStores];
  stateFromStoresArray = tmp5Result.useStateFromStoresArray(
    items3,
    () => BadgeDirectoryStore.getBadges(stateFromStores),
    items4,
  );
  tmp5Result = tmp5(tmp3[32]);
  const items5 = [pendingBadgeHiddenBadges];
  const items6 = [stateFromStores];
  const stateFromStoresObject = tmp5Result.useStateFromStoresObject(
    items5,
    () => {
      let hasCatalogForResult = null != stateFromStores;
      if (hasCatalogForResult) {
        hasCatalogForResult = BadgeDirectoryStore.hasCatalogFor(tmp);
      }
      return {
        hasCatalog: hasCatalogForResult,
        hasCatalogError: BadgeDirectoryStore.hasCatalogFetchErrorFor(stateFromStores),
      };
    },
    items6,
  );
  hasCatalog = stateFromStoresObject.hasCatalog;
  const items7 = [stateFromStores1, hasCatalog, analyticsLocations];
  const effect = analyticsLocations.useEffect(() => {
    let tmp = !stateFromStores1;
    if (!stateFromStores1) {
      tmp = hasCatalog;
    }
    if (tmp) {
      let obj = { type: PremiumUpsellTypes.BADGE_REORDERING_UPSELL, location: null, location_stack: null };
      obj = { page: constants3.USER_SETTINGS, section: constants4.USER_PROFILE };
      obj.location = obj;
      obj.location_stack = analyticsLocations;
      obj.track(constants.PREMIUM_UPSELL_VIEWED, obj);
    }
  }, items7);
  const items8 = [stateFromStores];
  const effect1 = analyticsLocations.useEffect(() => {
    if (null != stateFromStores) {
      if (!tmp2) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(tmp);
      }
      tmp2 = BadgeDirectoryStore.hasCatalogFor(tmp) && !BadgeDirectoryStore.isCatalogStaleFor(tmp);
    }
  }, items8);
  const tmp8 = stateFromStores(stateFromStores1[34]);
  const items9 = [hasCatalog];
  const stateFromStoresObject1 = tenureBadgeHideable(stateFromStores1[32]).useStateFromStoresObject(items9, () => {
    const pendingChanges = hasCatalog.getPendingChanges();
    return {
      pendingBadgeDisplayOrder: pendingChanges.pendingBadgeDisplayOrder,
      pendingBadgeHiddenBadges: pendingChanges.pendingBadgeHiddenBadges,
    };
  }, []);
  pendingBadgeDisplayOrder = stateFromStoresObject1.pendingBadgeDisplayOrder;
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  const items10 = [stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  memo = analyticsLocations.useMemo(() => {
    const obj = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
    return obj.applyPendingBadgeSettings(stateFromStoresArray, obj);
  }, items10);
  const items11 = [tenureBadgeHideable];
  analyticsLocations.useMemo(() => {
    const obj = { tenureBadgeHideable };
    return obj.getUnhideableBadgeIds(obj);
  }, items11);
  const items12 = [memo];
  const memo1 = analyticsLocations.useMemo(() => BadgeUtils.groupCustomizableBadges(memo), items12);
  fixedBadges = memo1.fixedBadges;
  reorderableBadges = memo1.reorderableBadges;
  hiddenBadges = memo1.hiddenBadges;
  const items13 = [reorderableBadges];
  memo2 = analyticsLocations.useMemo(() => reorderableBadges.map((badge_id) => badge_id.badge_id), items13);
  const tmp5Result1 = tenureBadgeHideable(stateFromStores1[32]);
  sharedValue = tenureBadgeHideable(stateFromStores1[23]).useSharedValue(memo2);
  onCommitOrder = tmp2(tmp3[22])((arr) => {
    const result = tenureBadgeHideable(stateFromStores1[26]).setPendingBadgeDisplayOrder(arr);
  });
  const tmp5Result2 = tenureBadgeHideable(stateFromStores1[23]);
  sharedValue1 = tenureBadgeHideable(stateFromStores1[23]).useSharedValue(false);
  const items14 = [memo2, sharedValue1, sharedValue];
  const effect2 = analyticsLocations.useEffect(() => {
    if (!sharedValue1.get()) {
      const result = sharedValue.set(memo2);
    }
  }, items14);
  MS_PER_FRAME_60FPS = tmp2(tmp3[22])((badge_id) => {
    const mapped = hiddenBadges.map((badge_id) => badge_id.badge_id);
    if (mapped.includes(badge_id.badge_id)) {
      let obj = {
        badgeId: badge_id.badge_id,
        hidden: false,
        reorderableBadgeIds: memo2,
        hiddenBadgeIds: mapped,
        canReorder: stateFromStores1,
      };
      const result = PendingBadgeSettings.setPendingBadgeVisibility(obj);
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl2 = util.intl;
      obj = { badgeName: badge_id.name };
      AccessibilityAnnouncer.announce(intl2.formatToPlainString(util.t.mehuPg, obj));
    } else if (set.has(badge_id.badge_id)) {
      let obj1 = { key: null, content: null };
      const _HermesInternal = HermesInternal;
      obj1.key = "BADGE_ALWAYS_VISIBLE-" + badge_id.badge_id;
      const intl = util.intl;
      const t = util.t;
      obj1.content = intl.string(BadgeUtils.isPinnedBadge(badge_id.badge_id) ? t.t3udZb : t.nPQVxb);
      obj1 = obj1.open(obj1);
      const isPinnedBadgeResult = BadgeUtils.isPinnedBadge(badge_id.badge_id);
    }
  });
  onHide = tmp2(tmp3[22])((badgeId) => {
    const obj = {
      badgeId: badgeId.badge_id,
      hidden: true,
      reorderableBadgeIds: memo2,
      hiddenBadgeIds: hiddenBadges.map((badge_id) => badge_id.badge_id),
      canReorder: stateFromStores1,
    };
    const result = obj.setPendingBadgeVisibility(obj);
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.q3t0Ht, { count: 1 }));
  });
  const tmp5Result3 = tenureBadgeHideable(stateFromStores1[23]);
  badgeTileSize = tenureBadgeHideable(stateFromStores1[15]).getBadgeTileSize(tmp2(tmp3[42])().width);
  const sum1 = fixedBadges.length + reorderableBadges.length + hiddenBadges.length;
  const rounded = Math.ceil(sum1 / tmp5(tmp3[15]).BADGE_GRID_COLUMNS);
  let num = 0;
  if (rounded > 0) {
    let result = rounded * badgeTileSize;
    const diff = rounded - 1;
    num = result + diff * tmp5(tmp3[15]).BADGE_GRID_GAP;
  }
  const tmp5Result4 = tenureBadgeHideable(stateFromStores1[15]);
  animatedRef = tenureBadgeHideable(stateFromStores1[23]).useAnimatedRef();
  const tmp5Result5 = tenureBadgeHideable(stateFromStores1[23]);
  scrollViewOffset = tenureBadgeHideable(stateFromStores1[23]).useScrollViewOffset(animatedRef);
  const tmp5Result6 = tenureBadgeHideable(stateFromStores1[23]);
  sharedValue2 = tenureBadgeHideable(stateFromStores1[23]).useSharedValue(0);
  const tmp5Result7 = tenureBadgeHideable(stateFromStores1[23]);
  sharedValue3 = tenureBadgeHideable(stateFromStores1[23]).useSharedValue(0);
  const tmp5Result8 = tenureBadgeHideable(stateFromStores1[23]);
  function ee(timeSincePreviousFrame) {
    timeSincePreviousFrame = timeSincePreviousFrame.timeSincePreviousFrame;
    value = sharedValue2.get();
    if (0 !== value) {
      if (null != timeSincePreviousFrame) {
        if (timeSincePreviousFrame > 0) {
          const result = sharedValue3.set(sharedValue3.get() + timeSincePreviousFrame);
          value = sharedValue3.get();
          if (value >= c18) {
            const result1 = obj.set(0);
            const obj2 = ReanimatedRexport;
            const _Math = Math;
            obj2.scrollTo(
              animatedRef,
              0,
              Math.max(roundToNearestPixelDefault(scrollViewOffset.get() + (700 * value * value) / 1000), 0),
              false,
            );
          }
          obj = sharedValue3;
        }
      }
    }
  }
  obj = {
    autoScrollSpeed: sharedValue2,
    autoScrollElapsed: sharedValue3,
    MS_PER_FRAME_60FPS,
    AUTO_SCROLL_PIXELS_PER_SECOND: 700,
    scrollTo: tmp5(tmp3[23]).scrollTo,
    scrollRef: animatedRef,
    roundToNearestPixel: tmp2(tmp3[43]),
    scrollOffset: scrollViewOffset,
  };
  ee.__closure = obj;
  ee.__workletHash = 8297629116909;
  ee.__initData = __initData6;
  frameCallback = tenureBadgeHideable(stateFromStores1[23]).useFrameCallback(ee, false);
  const items15 = [frameCallback];
  callback1 = obj3.useCallback((arg0) => {
    frameCallback.setActive(arg0);
  }, items15);
  const tmp5Result9 = tenureBadgeHideable(stateFromStores1[23]);
  function ie() {
    return 0 !== sharedValue2.get();
  }
  ie.__closure = { autoScrollSpeed: sharedValue2 };
  ie.__workletHash = 16801023005760;
  ie.__initData = __initData7;
  function te(arg0, arg1) {
    if (tmp) {
      const result = sharedValue3.set(0);
      ReanimatedRexport.runOnJS(callback1)(arg0);
    }
  }
  obj = { autoScrollElapsed: sharedValue3, runOnJS: tmp5(tmp3[23]).runOnJS, setAutoScrollerActive: callback1 };
  te.__closure = obj;
  te.__workletHash = 12755360860907;
  te.__initData = __initData8;
  const animatedReaction = tenureBadgeHideable(stateFromStores1[23]).useAnimatedReaction(ie, te);
  if (hasCatalog) {
    obj1 = { style: tmp.gridInset, children: null };
    let tmp39 = !stateFromStores1;
    if (!stateFromStores1) {
      obj2 = {
        style: tmp.upsell,
        ctaText: null,
        cardStyle: null,
        contentStyle: null,
        ctaStyle: null,
        showLinearGradient: true,
        onPress: null,
        children: null,
      };
      let intl2 = tmp5(tmp3[14]).intl;
      obj2.ctaText = intl2.string(tmp5(tmp3[14]).t.pj0XBN);
      ({ upsellCard: obj23.cardStyle, upsellContent: obj23.contentStyle, upsellCta: obj23.ctaStyle } = tmp);
      obj2.onPress = callback;
      obj3 = { variant: "text-sm/normal", style: tmp.upsellText, children: null };
      const intl3 = tmp5(tmp3[14]).intl;
      obj3.children = intl3.string(tmp5(tmp3[14]).t.JrOki0);
      obj2.children = sharedValue(tmp5(tmp3[45]).Text, obj3);
      tmp39 = sharedValue(tmp2(tmp3[44]), obj2);
      const tmp2Result = tmp2(tmp3[44]);
    }
    const items16 = [tmp39];
    let obj4 = { accessibilityRole: "list", style: null, children: null };
    const items17 = [tmp.grid];
    const obj5 = { height: num };
    items17[1] = obj5;
    obj4.style = items17;
    const items18 = [
      fixedBadges.map((badge, index) =>
        __initData(
          closure_24,
          { badge, index, tileSize: badgeTileSize, alwaysVisible: set.has(badge.badge_id), onPress },
          badge.badge_id,
        ),
      ),
      reorderableBadges.map((badge, index) => {
        if (stateFromStores1) {
          let obj = {
            badge,
            index: fixedBadges.length + index,
            tileSize: badgeTileSize,
            slotOffset: fixedBadges.length,
            isFirst: 0 === index,
            isLast: index === reorderableBadges.length - 1,
            alwaysVisible: set.has(badge.badge_id),
            orderShared: sharedValue,
            isDragActive: sharedValue1,
            scrollRef: animatedRef,
            scrollOffset: scrollViewOffset,
            autoScrollSpeed: sharedValue2,
            onCommitOrder,
            onHide,
            onPress,
          };
          let tmpResult = tmp(closure_37, obj, badge.badge_id);
        } else {
          obj = {
            badge,
            index: fixedBadges.length + index,
            tileSize: badgeTileSize,
            alwaysVisible: set.has(badge.badge_id),
            onPress,
            onHide,
          };
          tmpResult = tmp(closure_24, obj, badge.badge_id);
        }
        return tmpResult;
      }),
      hiddenBadges.map((badge, index) =>
        __initData(
          closure_24,
          {
            badge,
            index: fixedBadges.length + reorderableBadges.length + index,
            tileSize: badgeTileSize,
            alwaysVisible: set.has(badge.badge_id),
            onPress,
          },
          badge.badge_id,
        ),
      ),
    ];
    obj4.children = items18;
    items16[1] = onCommitOrder(stateFromStoresArray, obj4);
    obj1.children = items16;
    let tmp34Result = tmp37(tmp38, obj1);
  } else {
    if (stateFromStoresObject.hasCatalogError) {
      const obj6 = { style: tmp.message, accessibilityRole: "alert", children: null };
      const obj7 = { variant: "text-md/normal", color: "text-muted", style: tmp.messageText, children: null };
      let intl = tmp5(tmp3[14]).intl;
      obj7.children = intl.string(tmp5(tmp3[14]).t["rTU7/z"]);
      obj6.children = tmp34(tmp5(tmp3[45]).Text, obj7);
      let obj8 = obj6;
    } else {
      obj8 = {
        style: tmp.message,
        children: tmp34(tmp5(tmp3[46]).ActivityIndicator, { animating: true, size: "large" }),
      };
    }
    tmp34Result = tmp34(stateFromStoresArray, obj8);
  }
  const obj9 = { startExpanded: true, scrollable: true, dismissAccessibilityLabel: null, header: null, children: null };
  const intl4 = tmp5(tmp3[14]).intl;
  obj9.dismissAccessibilityLabel = intl4.string(tenureBadgeHideable(stateFromStores1[14]).t.x5SfWU);
  const obj10 = { title: null, subtitle: null };
  const intl5 = tmp5(tmp3[14]).intl;
  obj10.title = intl5.string(tenureBadgeHideable(stateFromStores1[14]).t.x5SfWU);
  const intl6 = tmp5(tmp3[14]).intl;
  let t = tmp5(tmp3[14]).t;
  obj10.subtitle = intl6.string(stateFromStores1 ? t["Vzc4+8"] : t.ZuXSRp);
  obj9.header = sharedValue(tenureBadgeHideable(stateFromStores1[48]).BottomSheetTitleHeader, obj10);
  obj9.children = sharedValue(tenureBadgeHideable(stateFromStores1[49]).BottomSheetScrollView, {
    ref: animatedRef,
    contentContainerStyle: { paddingBottom: sum },
    children: tmp34Result,
  });
  return sharedValue(tenureBadgeHideable(stateFromStores1[47]).BottomSheet, obj9);
}
