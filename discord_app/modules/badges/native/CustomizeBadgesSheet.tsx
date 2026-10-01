// discord_app/modules/badges/native/CustomizeBadgesSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import CircleInformationIcon from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../design/animation/reanimated/timing/timingPresets.tsx";
import Card from "../../../design/components/Card/native/Card.native.tsx";
import EyeSlashIcon2 from "../../../design/components/Icon/native/redesign/generated/EyeSlashIcon.tsx";
import EyeIcon from "../../../design/components/Icon/native/redesign/generated/EyeIcon.tsx";
import ContextMenu from "../../../design/components/ContextMenu/native/ContextMenu.native.tsx";
import ContextMenuConstants from "../../../design/components/ContextMenu/native/ContextMenuConstants.native.tsx";
import UserProfileAnalyticsUtils from "../../user_profile/UserProfileAnalyticsUtils.tsx";
import BadgeDirectoryActionCreators from "../BadgeDirectoryActionCreators.tsx";
import native from "../../../design/components/experimental/native.tsx";
import PremiumFeaturesCards from "../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import openPremiumModalDefault from "../../../components_native/premium/openPremiumModal.tsx";
import roundToNearestPixelDefault from "../../voice_panel/native/utils/roundToNearestPixel.tsx";
import BadgeCatalogIconDefault from "BadgeCatalogIcon.tsx";
import BadgeUtils from "../BadgeUtils.tsx";
import BadgeGrid from "BadgeGrid.tsx";
import PendingBadgeSettings from "../PendingBadgeSettings.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../../user_profile/UserProfileSettingsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import BadgeDirectoryStore from "../BadgeDirectoryStore.tsx";

require = fn;
function BadgeVisibilityMenu(badge) {
  badge = badge.badge;
  const onSetHidden = badge.onSetHidden;
  let flag = badge.hidden;
  ({ index, children } = badge);
  if (flag == null) {
    flag = false;
  }
  const intl = util.intl;
  const t = util.t;
  const obj = { label: intl.string(flag ? t.RXOPc3 : t.xSWJPo), trailingIndicator: null, action: null };
  if (flag) {
    let EyeSlashIcon = EyeIcon.EyeIcon;
  } else {
    EyeSlashIcon = EyeSlashIcon2.EyeSlashIcon;
  }
  const obj2 = { items: null, align: null, disableGesture: true, triggerOnLongPress: true, children: null };
  obj.trailingIndicator = EyeSlashIcon;
  obj.action = function action() {
    return onSetHidden(badge, !flag);
  };
  const items = [obj];
  obj2.items = items;
  const result = index % BadgeGrid.BADGE_GRID_COLUMNS;
  let str = "right";
  if (0 !== result) {
    let str2 = "above";
    if (result === BadgeGrid.BADGE_GRID_COLUMNS - 1) {
      str2 = "left";
    }
    str = str2;
  }
  obj2.align = str;
  obj2.children = children;
  return closure_1_14(ContextMenu.ContextMenu, obj2);
}
function BadgeTileContent(badge) {
  badge = badge.badge;
  const tmp = closure_20();
  let flag = badge.hidden;
  if (flag == null) {
    flag = false;
  }
  if (badge.alwaysVisible) {
    const obj2 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
    let tmp2 = closure_1_14(CircleInformationIcon.CircleInformationIcon, obj2);
  } else {
    tmp2 = null;
    if (flag) {
      const obj = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
      tmp2 = closure_1_14(EyeSlashIcon2.EyeSlashIcon, obj);
    }
  }
  const obj3 = { variant: "secondary", border: "none", radius: 16, style: tmp.card, children: null };
  const obj4 = { badge, size: BadgeGrid.BADGE_TILE_ICON_SIZE, style: null };
  const items = [tmp.icon];
  let iconHidden = flag;
  if (flag) {
    iconHidden = tmp.iconHidden;
  }
  items[1] = iconHidden;
  obj4.style = items;
  const items1 = [closure_1_14(BadgeCatalogIconDefault, obj4), ,];
  let str = "text-default";
  if (flag) {
    str = "text-muted";
  }
  items1[1] = closure_1_14(Text_Text.Text, {
    variant: "text-xs/medium",
    color: str,
    lineClamp: 1,
    style: tmp.name,
    "aria-hidden": true,
    children: badge.name,
  });
  let tmp14Result = null != tmp2;
  if (tmp14Result) {
    const obj6 = { style: tmp.indicator, "aria-hidden": true, children: tmp2 };
    tmp14Result = closure_1_14(React4, obj6);
  }
  items1[2] = tmp14Result;
  obj3.children = items1;
  return __initData(Card.Card, obj3);
}
get_ActivityIndicator = fn(17);
({ Platform, View: closure_4 } = get_ActivityIndicator);
const Constants = fn(1074);
({
  AnalyticEvents: closure_8,
  AnalyticsObjects: closure_9,
  AnalyticsPages: c10,
  AnalyticsSections: closure_11,
} = Constants);
let closure_12 = fn(6758).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const PremiumUpsellTypes = fn(1374).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let c16 = 80;
let c17 = 16.666666666666668;
let createStyles = fn(4845);
let obj = {
  gridInset: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 },
  grid: null,
  upsell: null,
  upsellCard: null,
  upsellContent: null,
  upsellCta: null,
  upsellText: null,
  message: null,
  messageText: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj.grid = { position: "relative", width: "100%", marginTop: nativeDefault.space.PX_8 };
let obj4 = { position: "relative", width: "100%", marginTop: nativeDefault.space.PX_8 };
obj.upsell = { marginHorizontal: 0, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16 };
let obj5 = { marginHorizontal: 0, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16 };
obj.upsellCard = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
obj.upsellContent = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
let obj7 = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj.upsellCta = { marginTop: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm };
obj.upsellText = { textAlign: "center" };
let obj8 = { marginTop: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm };
obj.message = {
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_32,
};
obj.messageText = { textAlign: "center" };
let closure_18 = createStyles.createStyles(obj);
createStyles = fn(4845);
let obj10 = {
  position: { position: "absolute" },
  fill: { flex: 1 },
  card: { flex: 1, alignItems: "center", justifyContent: "center", padding: 0 },
  icon: null,
  name: null,
  indicator: null,
  iconHidden: null,
};
let obj9 = {
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_32,
};
obj10.icon = { marginBottom: nativeDefault.space.PX_12 };
let obj12 = { marginBottom: nativeDefault.space.PX_12 };
obj10.name = {
  position: "absolute",
  start: 0,
  end: 0,
  bottom: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  textAlign: "center",
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
obj10.indicator = size;
obj10.iconHidden = { opacity: 0.3 };
let closure_20 = createStyles.createStyles(obj10);
function getSlotOffset(arg0, arg1) {
  const point = { x: null, y: null };
  const result = arg0 % BadgeGrid.BADGE_GRID_COLUMNS;
  point.x = result * (arg1 + BadgeGrid.BADGE_GRID_GAP);
  const rounded = Math.floor(arg0 / BadgeGrid.BADGE_GRID_COLUMNS);
  point.y = rounded * (arg1 + BadgeGrid.BADGE_GRID_GAP);
  return point;
}
let obj13 = {
  position: "absolute",
  start: 0,
  end: 0,
  bottom: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  textAlign: "center",
};
getSlotOffset.__closure = {
  BADGE_GRID_COLUMNS: fn(10864).BADGE_GRID_COLUMNS,
  BADGE_GRID_GAP: fn(10864).BADGE_GRID_GAP,
};
getSlotOffset.__workletHash = 8647997879684;
getSlotOffset.__initData = {
  code: "function getSlotOffset_CustomizeBadgesSheetTsx1(index,tileSize){const{BADGE_GRID_COLUMNS,BADGE_GRID_GAP}=this.__closure;const column=index%BADGE_GRID_COLUMNS;return{x:column*(tileSize+BADGE_GRID_GAP),y:Math.floor(index/BADGE_GRID_COLUMNS)*(tileSize+BADGE_GRID_GAP)};}",
};
let closure_23 = noop.memo((badge) => {
  badge = badge.badge;
  const index = badge.index;
  ({ tileSize, alwaysVisible } = badge);
  let onPress = badge.onPress;
  const onSetHidden = badge.onSetHidden;
  closure_4 = undefined;
  let items1;
  if (typeof getSlotOffset === "function") {
    function renderTile(ref) {
      let onLongPress = ref;
      ref = undefined;
      if (ref != null) {
        ref = ref.ref;
      }
      const obj = { ref, accessibilityLabel: null };
      const intl = util.intl;
      const t = util.t;
      obj.accessibilityLabel = intl.formatToPlainString(badge.hidden ? t["dXg/Dl"] : t["21W3EN"], {
        badgeName: badge.name,
        position: index + 1,
      });
      let stringResult;
      if (alwaysVisible) {
        const intl2 = util.intl;
        stringResult = intl2.string(BadgeUtils.getAlwaysVisibleCopy(tmp8));
        const tmp2Result = BadgeUtils;
      }
      const merged = Object.assign({ accessibilityRole: "button", accessibilityHint: stringResult });
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
      if (alwaysVisible) {
        onPress = closure_4;
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
      obj.delayLongPress = ContextMenuConstants.CONTEXT_MENU_LONG_PRESS_DURATION_MS;
      obj.style = items1;
      obj.children = closure_2_14(BadgeTileContent, { badge, alwaysVisible });
      return closure_2_14(native.PressableScale, obj);
    }
    let result = index % badge(alwaysVisible[13]).BADGE_GRID_COLUMNS;
    const _Math = Math;
    const result1 = result * (tileSize + badge(alwaysVisible[13]).BADGE_GRID_GAP);
    const rounded = Math.floor(index / badge(alwaysVisible[13]).BADGE_GRID_COLUMNS);
    const items = [badge, onPress];
    const result2 = rounded * (tileSize + badge(alwaysVisible[13]).BADGE_GRID_GAP);
    closure_4 = onPress.useCallback(() => {
      onPress(badge);
    }, items);
    items1 = [tmp.position];
    const size = { left: result1, top: result2, width: tileSize, height: tileSize };
    items1[1] = size;
    if (!alwaysVisible) {
      if (null != onSetHidden) {
        let obj = { badge, index, onSetHidden, children: renderTile };
        let renderTileResult = closure_14(BadgeVisibilityMenu, obj);
      }
      return renderTileResult;
    }
    renderTileResult = renderTile(null);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let __initData = {
  code: "function CustomizeBadgesSheetTsx2(){const{orderShared,badgeId,getSlotOffset,slotOffset,tileSize}=this.__closure;const slot=orderShared.get().indexOf(badgeId);return slot<0?null:getSlotOffset(slot+slotOffset,tileSize);}",
};
let closure_25 = {
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
let closure_29 = {
  code: "function handleStart_CustomizeBadgesSheetTsx7(){const{isAnyDragActive,isThisTileDragging,runOnJS,hideContextMenu,dragOrigin,positionX,positionY,measure,scrollRef,dragViewport,scale,withTiming,DRAG_SCALE,timingStandard,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(isAnyDragActive.get()&&!isThisTileDragging.get()){return;}runOnJS(hideContextMenu)();isAnyDragActive.set(true);isThisTileDragging.set(true);dragOrigin.set({x:positionX.get(),y:positionY.get()});const viewport=measure(scrollRef);dragViewport.set(viewport==null?null:{pageY:viewport.pageY,height:viewport.height});scale.set(withTiming(DRAG_SCALE,timingStandard));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_START);}",
};
let closure_30 = {
  code: "function handleChange_CustomizeBadgesSheetTsx8(event){const{isThisTileDragging,positionX,positionY,reslot,dragViewport,AUTO_SCROLL_EDGE_SIZE,autoScrollSpeed,clamp}=this.__closure;if(!isThisTileDragging.get()){return;}positionX.set(positionX.get()+event.changeX);positionY.set(positionY.get()+event.changeY);reslot();const viewport=dragViewport.get();if(viewport==null){return;}const fromTop=event.absoluteY-viewport.pageY;const fromBottom=viewport.pageY+viewport.height-event.absoluteY;if(fromTop<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(-1+clamp(fromTop,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else if(fromBottom<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(1-clamp(fromBottom,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else{autoScrollSpeed.set(0);}}",
};
let closure_31 = {
  code: "function handleFinalize_CustomizeBadgesSheetTsx9(){const{isThisTileDragging,autoScrollSpeed,dragViewport,orderShared,badgeId,getSlotOffset,slotOffset,tileSize,positionX,withTiming,timingStandard,positionY,scale,isAnyDragActive,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,onCommitOrder}=this.__closure;if(!isThisTileDragging.get()){return;}autoScrollSpeed.set(0);dragViewport.set(null);const order=orderShared.get();const slot=order.indexOf(badgeId);if(slot>=0){const target=getSlotOffset(slot+slotOffset,tileSize);positionX.set(withTiming(target.x,timingStandard));positionY.set(withTiming(target.y,timingStandard));}scale.set(withTiming(1,timingStandard));isThisTileDragging.set(false);isAnyDragActive.set(false);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_END);runOnJS(onCommitOrder)(order);}",
};
let closure_32 = {
  code: "function CustomizeBadgesSheetTsx10(){const{handleFinalize}=this.__closure;handleFinalize();}",
};
let closure_33 = {
  code: "function CustomizeBadgesSheetTsx11(event){const{handleChange}=this.__closure;handleChange(event);}",
};
let closure_34 = { code: "function CustomizeBadgesSheetTsx12(){const{handleStart}=this.__closure;handleStart();}" };
const __initData5 = {
  code: "function CustomizeBadgesSheetTsx13(){const{isThisTileDragging,dragOrigin,positionX,positionY,scale}=this.__closure;const dragging=isThisTileDragging.get();const origin=dragOrigin.get();return{zIndex:dragging?10:0,left:dragging?origin.x:positionX.get(),top:dragging?origin.y:positionY.get(),transform:dragging?[{translateX:positionX.get()-origin.x},{translateY:positionY.get()-origin.y},{scale:scale.get()}]:[{scale:scale.get()}]};}",
};
let closure_36 = noop.memo((badge) => {
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
  let gesture;
  closure_23 = undefined;
  __initData = undefined;
  let items3;
  ({ isFirst, isLast, onSetHidden } = badge);
  const position = sharedValue5();
  const badge_id = badge.badge_id;
  closure_14 = index(tileSize[24])(() => {
    onPress(badge);
  });
  const sharedValue = badge(tileSize[25]).useSharedValue(false);
  let obj = badge(tileSize[25]);
  const sharedValue1 = badge(tileSize[25]).useSharedValue(null);
  if (typeof reslot === "function") {
    let point = { x: null, y: null };
    let result = index % tmp2(tmp[13]).BADGE_GRID_COLUMNS;
    point.x = result * (tileSize + tmp2(tmp[13]).BADGE_GRID_GAP);
    let _Math = Math;
    let rounded = Math.floor(index / tmp2(tmp[13]).BADGE_GRID_COLUMNS);
    point.y = rounded * (tileSize + tmp2(tmp[13]).BADGE_GRID_GAP);
    sharedValue2 = tmp2(tmp[25]).useSharedValue(point.x);
    let tmp2Result = tmp2(tmp[25]);
    sharedValue3 = tmp2(tmp[25]).useSharedValue(point.y);
    const tmp2Result7 = tmp2(tmp[25]);
    sharedValue4 = tmp2(tmp[25]).useSharedValue(point);
    const tmp2Result8 = tmp2(tmp[25]);
    sharedValue5 = tmp2(tmp[25]).useSharedValue(1);
    const tmp2Result9 = tmp2(tmp[25]);
    class B {
      constructor() {
        value = orderShared.get();
        index = value.indexOf(badge_id);
        tmp2 = null;
        if (index >= 0) {
          tmp3 = getSlotOffset;
          tmp4 = slotOffset;
          sum = index + slotOffset;
          tmp6 = tileSize;
          if (typeof getSlotOffset === "function") {
            point = { x: null, y: null };
            tmp7 = closure_0;
            tmp8 = closure_2;
            result = sum % closure_0(closure_2[13]).BADGE_GRID_COLUMNS;
            point.x = result * (tmp6 + closure_0(closure_2[13]).BADGE_GRID_GAP);
            tmp10 = globalThis;
            _Math = Math;
            rounded = Math.floor(sum / closure_0(closure_2[13]).BADGE_GRID_COLUMNS);
            point.y = rounded * (tmp6 + closure_0(closure_2[13]).BADGE_GRID_GAP);
            tmp2 = point;
          } else {
            str = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
        return tmp2;
      }
    }
    let obj3 = { orderShared, badgeId: badge_id, getSlotOffset: tmp5, slotOffset, tileSize };
    B.__closure = obj3;
    B.__workletHash = 6182257637516;
    B.__initData = __initData;
    let fn = function y(arg0, arg1) {
      value = null == arg0;
      if (!value) {
        value = sharedValue.get();
      }
      if (!value) {
        let x;
        if (arg1 != null) {
          x = arg1.x;
        }
        if (arg0.x !== x) {
          const result = sharedValue2.set(timing.withTiming(arg0.x, timingPresets.timingStandard));
        }
        let y;
        if (arg1 != null) {
          y = arg1.y;
        }
        if (arg0.y !== y) {
          const result1 = sharedValue3.set(timing.withTiming(arg0.y, timingPresets.timingStandard));
        }
      }
    };
    let obj4 = {
      isThisTileDragging: sharedValue,
      positionX: sharedValue2,
      withTiming: tmp2(tmp[26]).withTiming,
      timingStandard: tmp2(tmp[27]).timingStandard,
      positionY: sharedValue3,
    };
    fn.__closure = obj4;
    fn.__workletHash = 4011295272705;
    fn.__initData = items3;
    const animatedReaction = tmp2(tmp[25]).useAnimatedReaction(B, fn);
    class K {
      constructor() {
        obj = orderShared;
        value = orderShared.get();
        tmp = closure_0;
        tmp2 = closure_2;
        sum = tileSize + closure_0(closure_2[13]).BADGE_GRID_GAP;
        obj2 = closure_0(closure_2[25]);
        rounded = Math.floor((closure_17.get() + tileSize / 2) / sum);
        clampResult = obj2.clamp(rounded, 0, closure_0(closure_2[13]).BADGE_GRID_COLUMNS - 1);
        bound = Math.max(Math.floor((closure_18.get() + tileSize / 2) / sum), 0);
        obj3 = closure_0(closure_2[25]);
        clampResult1 = obj3.clamp(
          bound * closure_0(closure_2[13]).BADGE_GRID_COLUMNS + clampResult - slotOffset,
          0,
          value.length - 1,
        );
        obj4 = closure_0(closure_2[28]);
        result = obj4.moveBadgeInDisplayOrder(value, value.indexOf(badge_id), clampResult1);
        if (result !== value) {
          result1 = obj.set(result);
          tmpResult = tmp(tmp2[25]);
          runOnJSResult = tmpResult.runOnJS(tmp(tmp2[11]).triggerHapticFeedback);
          tmp10Result = runOnJSResult(tmp(tmp2[11]).HapticFeedbackTypes.DRAG_AND_DROP_MOVE);
        }
        return;
      }
    }
    let obj5 = {
      orderShared,
      tileSize,
      BADGE_GRID_GAP: tmp2(tmp[13]).BADGE_GRID_GAP,
      clamp: tmp2(tmp[25]).clamp,
      positionX: sharedValue2,
      BADGE_GRID_COLUMNS: tmp2(tmp[13]).BADGE_GRID_COLUMNS,
      positionY: sharedValue3,
      slotOffset,
      moveBadgeInDisplayOrder: tmp2(tmp[28]).moveBadgeInDisplayOrder,
      badgeId: badge_id,
      runOnJS: tmp2(tmp[25]).runOnJS,
      triggerHapticFeedback: tmp2(tmp[11]).triggerHapticFeedback,
      HapticFeedbackTypes: tmp2(tmp[11]).HapticFeedbackTypes,
    };
    K.__closure = obj5;
    K.__workletHash = 1083237242858;
    K.__initData = __initData2;
    let items = [badge_id, orderShared, slotOffset, tileSize, sharedValue2, sharedValue3];
    reslot = slotOffset.useCallback(K, items);
    const tmp2Result10 = tmp2(tmp[25]);
    class Q {
      constructor() {
        return scrollOffset.get();
      }
    }
    let obj6 = { scrollOffset };
    Q.__closure = obj6;
    Q.__workletHash = 10993823060256;
    Q.__initData = __initData3;
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
    const obj7 = { isThisTileDragging: sharedValue, positionY: sharedValue3, reslot };
    fn2.__closure = obj7;
    fn2.__workletHash = 9803143874483;
    fn2.__initData = __initData4;
    const animatedReaction1 = tmp2(tmp[25]).useAnimatedReaction(Q, fn2);
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
    gesture = slotOffset.useMemo(() => {
      function handleStart() {
        if (!isDragActive.get()) {
          badge(tileSize[25]).runOnJS(badge(tileSize[29]).hideContextMenu)();
          const result = isDragActive.set(true);
          const result1 = sharedValue.set(true);
          const point = { x: sharedValue2.get(), y: sharedValue3.get() };
          const result2 = sharedValue4.set(point);
          const obj2 = badge(tileSize[25]);
          const measureResult = badge(tileSize[25]).measure(scrollRef);
          let tmp15 = null;
          if (null != measureResult) {
            ({ pageY: obj5.pageY, height: obj5.height } = measureResult);
            tmp15 = { pageY: null, height: null };
            const obj3 = { pageY: null, height: null };
          }
          const result3 = sharedValue1.set(tmp15);
          const obj4 = badge(tileSize[25]);
          const result4 = sharedValue5.set(badge(tileSize[26]).withTiming(1.05, badge(tileSize[27]).timingStandard));
          const tmp2Result = badge(tileSize[26]);
          const tmp2Result2 = badge(tileSize[25]);
          badge(tileSize[25]).runOnJS(badge(tileSize[11]).triggerHapticFeedback)(
            badge(tileSize[11]).HapticFeedbackTypes.DRAG_AND_DROP_START,
          );
          const runOnJSResult = badge(tileSize[25]).runOnJS(badge(tileSize[11]).triggerHapticFeedback);
        }
      }
      handleStart.__closure = {
        isAnyDragActive: isDragActive,
        isThisTileDragging: sharedValue,
        runOnJS: badge(tileSize[25]).runOnJS,
        hideContextMenu: badge(tileSize[29]).hideContextMenu,
        dragOrigin: sharedValue4,
        positionX: sharedValue2,
        positionY: sharedValue3,
        measure: badge(tileSize[25]).measure,
        scrollRef,
        dragViewport: sharedValue1,
        scale: sharedValue5,
        withTiming: badge(tileSize[26]).withTiming,
        DRAG_SCALE: 1.05,
        timingStandard: badge(tileSize[27]).timingStandard,
        triggerHapticFeedback: badge(tileSize[11]).triggerHapticFeedback,
        HapticFeedbackTypes: badge(tileSize[11]).HapticFeedbackTypes,
      };
      handleStart.__workletHash = 11005478611755;
      handleStart.__initData = __initData;
      function handleChange(changeX) {
        if (sharedValue.get()) {
          const result = sharedValue2.set(sharedValue2.get() + changeX.changeX);
          const result1 = sharedValue3.set(sharedValue3.get() + changeX.changeY);
          callback();
          value = closure_1_16.get();
          if (null != value) {
            const diff = changeX.absoluteY - value.pageY;
            const diff1 = value.pageY + value.height - changeX.absoluteY;
            if (diff < sharedValue1) {
              const result2 = autoScrollSpeed.set(badge(tileSize[25]).clamp(diff, 0, sharedValue1) / sharedValue1 - 1);
              const obj2 = badge(tileSize[25]);
            } else if (diff1 < sharedValue1) {
              const result3 = autoScrollSpeed.set(1 - badge(tileSize[25]).clamp(diff1, 0, sharedValue1) / sharedValue1);
              const obj = badge(tileSize[25]);
            } else {
              const result4 = autoScrollSpeed.set(0);
            }
          }
        }
      }
      let obj = {
        isAnyDragActive: isDragActive,
        isThisTileDragging: sharedValue,
        runOnJS: badge(tileSize[25]).runOnJS,
        hideContextMenu: badge(tileSize[29]).hideContextMenu,
        dragOrigin: sharedValue4,
        positionX: sharedValue2,
        positionY: sharedValue3,
        measure: badge(tileSize[25]).measure,
        scrollRef,
        dragViewport: sharedValue1,
        scale: sharedValue5,
        withTiming: badge(tileSize[26]).withTiming,
        DRAG_SCALE: 1.05,
        timingStandard: badge(tileSize[27]).timingStandard,
        triggerHapticFeedback: badge(tileSize[11]).triggerHapticFeedback,
        HapticFeedbackTypes: badge(tileSize[11]).HapticFeedbackTypes,
      };
      handleChange.__closure = {
        isThisTileDragging: sharedValue,
        positionX: sharedValue2,
        positionY: sharedValue3,
        reslot: getSlotOffset,
        dragViewport: sharedValue1,
        AUTO_SCROLL_EDGE_SIZE: sharedValue1,
        autoScrollSpeed,
        clamp: badge(tileSize[25]).clamp,
      };
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
            if (typeof callback === "function") {
              const result2 = sum % badge(tileSize[13]).BADGE_GRID_COLUMNS;
              const _Math = Math;
              const result3 = result2 * (handleFinalize + badge(tileSize[13]).BADGE_GRID_GAP);
              const rounded = Math.floor(sum / badge(tileSize[13]).BADGE_GRID_COLUMNS);
              const result4 = rounded * (handleFinalize + badge(tileSize[13]).BADGE_GRID_GAP);
              const result5 = sharedValue2.set(
                badge(tileSize[26]).withTiming(result3, badge(tileSize[27]).timingStandard),
              );
              const obj2 = badge(tileSize[26]);
              const result6 = sharedValue3.set(
                badge(tileSize[26]).withTiming(result4, badge(tileSize[27]).timingStandard),
              );
              const obj3 = badge(tileSize[26]);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          const result7 = sharedValue5.set(badge(tileSize[26]).withTiming(1, badge(tileSize[27]).timingStandard));
          const result8 = sharedValue.set(false);
          const result9 = isDragActive.set(false);
          const obj4 = badge(tileSize[26]);
          const obj5 = badge(tileSize[25]);
          badge(tileSize[25]).runOnJS(badge(tileSize[11]).triggerHapticFeedback)(
            badge(tileSize[11]).HapticFeedbackTypes.DRAG_AND_DROP_END,
          );
          const runOnJSResult = badge(tileSize[25]).runOnJS(badge(tileSize[11]).triggerHapticFeedback);
          badge(tileSize[25]).runOnJS(onCommitOrder)(value);
          const obj6 = badge(tileSize[25]);
        }
      }
      let obj2 = {
        isThisTileDragging: sharedValue,
        positionX: sharedValue2,
        positionY: sharedValue3,
        reslot: getSlotOffset,
        dragViewport: sharedValue1,
        AUTO_SCROLL_EDGE_SIZE: sharedValue1,
        autoScrollSpeed,
        clamp: badge(tileSize[25]).clamp,
      };
      handleFinalize.__closure = {
        isThisTileDragging: sharedValue,
        autoScrollSpeed,
        dragViewport: sharedValue1,
        orderShared,
        badgeId: badge_id,
        getSlotOffset,
        slotOffset,
        tileSize: handleFinalize,
        positionX: sharedValue2,
        withTiming: badge(tileSize[26]).withTiming,
        timingStandard: badge(tileSize[27]).timingStandard,
        positionY: sharedValue3,
        scale: sharedValue5,
        isAnyDragActive: isDragActive,
        runOnJS: badge(tileSize[25]).runOnJS,
        triggerHapticFeedback: badge(tileSize[11]).triggerHapticFeedback,
        HapticFeedbackTypes: badge(tileSize[11]).HapticFeedbackTypes,
        onCommitOrder,
      };
      handleFinalize.__workletHash = 3743829622400;
      handleFinalize.__initData = __initData3;
      const Gesture = badge(tileSize[30]).Gesture;
      let obj3 = {
        isThisTileDragging: sharedValue,
        autoScrollSpeed,
        dragViewport: sharedValue1,
        orderShared,
        badgeId: badge_id,
        getSlotOffset,
        slotOffset,
        tileSize: handleFinalize,
        positionX: sharedValue2,
        withTiming: badge(tileSize[26]).withTiming,
        timingStandard: badge(tileSize[27]).timingStandard,
        positionY: sharedValue3,
        scale: sharedValue5,
        isAnyDragActive: isDragActive,
        runOnJS: badge(tileSize[25]).runOnJS,
        triggerHapticFeedback: badge(tileSize[11]).triggerHapticFeedback,
        HapticFeedbackTypes: badge(tileSize[11]).HapticFeedbackTypes,
        onCommitOrder,
      };
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
    const tmp2Result11 = tmp2(tmp[25]);
    function te() {
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
        const obj = { translateX: sharedValue2.get() - point.x };
        const items = [obj, ,];
        const obj2 = { translateY: sharedValue3.get() - point.y };
        items[1] = obj2;
        const obj3 = { scale: sharedValue5.get() };
        items[2] = obj3;
        let items1 = items;
      } else {
        const obj4 = { scale: sharedValue5.get() };
        items1 = [obj4];
      }
      rect.transform = items1;
      return rect;
    }
    const obj8 = {
      isThisTileDragging: sharedValue,
      dragOrigin: sharedValue4,
      positionX: sharedValue2,
      positionY: sharedValue3,
      scale: sharedValue5,
    };
    te.__closure = obj8;
    te.__workletHash = 3612359203254;
    te.__initData = __initData5;
    closure_23 = tmp2(tmp[25]).useAnimatedStyle(te);
    const items2 = [badge_id, orderShared, onCommitOrder, slotOffset];
    __initData = slotOffset.useCallback((nativeEvent) => {
      const actionName = nativeEvent.nativeEvent.actionName;
      if ("moveup" === actionName) {
        value = orderShared.get();
        index = value.indexOf(badge_id);
        let num2 = 1;
        if (tmp) {
          num2 = -1;
        }
        const clampResult = ReanimatedRexport.clamp(index + num2, 0, value.length - 1);
        const result = PendingBadgeSettings.moveBadgeInDisplayOrder(value, index, clampResult);
        if (result !== value) {
          const result1 = orderShared.set(result);
          onCommitOrder(result);
          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
          const intl = util.intl;
          const obj3 = { from: index + slotOffset + 1, to: clampResult + slotOffset + 1 };
          AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.qPHr0x, obj3));
        }
        const tmp4Result = PendingBadgeSettings;
      }
    }, items2);
    items3 = [];
    if (!isFirst) {
      const obj9 = { name: "moveup", label: null };
      let intl = tmp2(tmp[15]).intl;
      obj9.label = intl.string(tmp2(tmp[15]).t.eR2XSh);
      items3.push(obj9);
    }
    if (!isLast) {
      const obj10 = { name: "movedown", label: null };
      let intl2 = tmp2(tmp[15]).intl;
      obj10.label = intl2.string(tmp2(tmp[15]).t.wWi0DL);
      items3.push(obj10);
    }
    function renderTile(ref) {
      badge = ref;
      const obj = { gesture, children: null };
      const obj2 = { style: null, children: null };
      const items = [position.position, ,];
      const size = { width: tileSize, height: tileSize };
      items[1] = size;
      items[2] = closure_23;
      obj2.style = items;
      ref = undefined;
      if (ref != null) {
        ref = ref.ref;
      }
      const obj3 = { ref, accessible: true, accessibilityLabel: null };
      const intl = tmp2(tileSize[15]).intl;
      const t = tmp2(tileSize[15]).t;
      obj3.accessibilityLabel = intl.formatToPlainString(badge.hidden ? t["dXg/Dl"] : t["21W3EN"], {
        badgeName: badge.name,
        position: index + 1,
      });
      let stringResult;
      if (alwaysVisible) {
        const intl2 = tmp2(tileSize[15]).intl;
        stringResult = intl2.string(tmp2(tileSize[22]).getAlwaysVisibleCopy(tmp9));
        const tmp2Result = tmp2(tileSize[22]);
      }
      const merged = Object.assign({ accessibilityRole: "button", accessibilityHint: stringResult });
      let accessibilityActions;
      if (ref != null) {
        accessibilityActions = ref.accessibilityActions;
      }
      if (accessibilityActions == null) {
        accessibilityActions = [];
      }
      const items1 = [...items3];
      obj3.accessibilityActions = items1;
      obj3.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
        const actionName = nativeEvent.nativeEvent.actionName;
        if ("moveup" !== actionName) {
          if ("movedown" !== actionName) {
            if (onLongPress != null) {
              const onAccessibilityAction = onLongPress.onAccessibilityAction;
              if (onAccessibilityAction != null) {
                const result = onAccessibilityAction(nativeEvent);
              }
            }
          }
        }
        closure_24(nativeEvent);
      };
      if (alwaysVisible) {
        onPress = closure_14;
      } else if (ref != null) {
        onPress = ref.onPress;
      }
      obj3.onPress = onPress;
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
      obj3.onLongPress = fn;
      obj3.delayLongPress = badge(tileSize[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
      obj3.style = position.fill;
      obj3.children = closure_14(gesture, { badge, alwaysVisible });
      obj2.children = closure_14(badge(tileSize[23]).PressableScale, obj3);
      obj.children = closure_14(index(tileSize[25]).View, obj2);
      return closure_14(badge(tileSize[30]).GestureDetector, obj);
    }
    if (alwaysVisible) {
      let renderTileResult = renderTile(null);
    } else {
      const obj11 = { badge, index, onSetHidden, children: renderTile };
      renderTileResult = closure_14(sharedValue4, obj11);
    }
    return renderTileResult;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  let obj2 = badge(tileSize[25]);
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
  let analyticsLocations1 = analyticsLocations.analyticsLocations;
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
  closure_18 = undefined;
  let onPress;
  closure_20 = undefined;
  let onSetHidden;
  let badgeTileSize;
  let animatedRef;
  let scrollViewOffset;
  let sharedValue2;
  let sharedValue3;
  let frameCallback;
  let callback1;
  let tmp = closure_18();
  const tenureBadgeHideable = stateFromStores(stateFromStores1[32]).useConfig({
    location: "CustomizeBadgesSheet",
  }).tenureBadgeHideable;
  const sum = Math.max(stateFromStores(stateFromStores1[33])().bottom, reorderableBadges) + 4;
  let obj = stateFromStores(stateFromStores1[32]);
  const items = [hasCatalog];
  stateFromStores = tenureBadgeHideable(stateFromStores1[34]).useStateFromStores(items, () => {
    const currentUser = hasCatalog.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj2 = tenureBadgeHideable(stateFromStores1[34]);
  const items1 = [hasCatalog];
  stateFromStores1 = tenureBadgeHideable(stateFromStores1[34]).useStateFromStores(items1, () =>
    stateFromStores(stateFromStores1[35]).canUsePremiumProfileCustomization(hasCatalog.getCurrentUser()),
  );
  let obj3 = tenureBadgeHideable(stateFromStores1[34]);
  if (analyticsLocations1 == null) {
    analyticsLocations1 = [];
  }
  analyticsLocations = stateFromStores(stateFromStores1[36])(
    analyticsLocations1,
    tmp2(tmp3[37]).BADGES_REORDER_ACTION_SHEET,
  ).analyticsLocations;
  context = analyticsLocations.useContext(tmp2(tmp3[38]));
  const items2 = [context, analyticsLocations];
  const callback = analyticsLocations.useCallback(() => {
    if (context != null) {
      context.close();
    }
    const obj2 = {
      analyticsLocation: {
        page: constants3.USER_SETTINGS,
        section: constants4.USER_PROFILE,
        object: constants2.BUTTON_CTA,
      },
      analyticsLocations,
      premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
    };
    openPremiumModalDefault(obj2);
    const obj3 = { page: constants3.USER_SETTINGS, section: constants4.USER_PROFILE, object: constants2.BUTTON_CTA };
  }, items2);
  const obj4 = analyticsLocations;
  const tmp8 = stateFromStores(stateFromStores1[36]);
  const items3 = [pendingBadgeDisplayOrder];
  const items4 = [stateFromStores];
  stateFromStoresArray = tenureBadgeHideable(stateFromStores1[34]).useStateFromStoresArray(
    items3,
    () => BadgeDirectoryStore.getBadges(stateFromStores),
    items4,
  );
  const tmp5Result = tenureBadgeHideable(stateFromStores1[34]);
  const items5 = [pendingBadgeDisplayOrder];
  const items6 = [stateFromStores];
  const stateFromStoresObject = tenureBadgeHideable(stateFromStores1[34]).useStateFromStoresObject(
    items5,
    () => {
      let hasCatalogForResult = null != stateFromStores;
      if (hasCatalogForResult) {
        hasCatalogForResult = BadgeDirectoryStore.hasCatalogFor(stateFromStores);
      }
      return {
        hasCatalog: hasCatalogForResult,
        hasCatalogError: BadgeDirectoryStore.hasCatalogFetchErrorFor(stateFromStores),
      };
    },
    items6,
  );
  hasCatalog = stateFromStoresObject.hasCatalog;
  const effect = analyticsLocations.useEffect(() => {
    const result = UserProfileAnalyticsUtils.trackUserProfileAction({
      action: "VIEW_BADGE_CUSTOMIZATION",
      analyticsLocations,
    });
  }, []);
  const items7 = [stateFromStores1, hasCatalog, analyticsLocations];
  const effect1 = analyticsLocations.useEffect(() => {
    let tmp = !stateFromStores1;
    if (!stateFromStores1) {
      tmp = hasCatalog;
    }
    if (tmp) {
      const obj2 = { type: PremiumUpsellTypes.BADGE_REORDERING_UPSELL, location: null, location_stack: null };
      const obj3 = { page: constants3.USER_SETTINGS, section: constants4.USER_PROFILE };
      obj2.location = obj3;
      obj2.location_stack = analyticsLocations;
      AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
    }
  }, items7);
  const items8 = [stateFromStores];
  const effect2 = analyticsLocations.useEffect(() => {
    if (null != stateFromStores) {
      if (!tmp2) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(stateFromStores);
      }
      tmp2 =
        BadgeDirectoryStore.hasCatalogFor(stateFromStores) && !BadgeDirectoryStore.isCatalogStaleFor(stateFromStores);
    }
  }, items8);
  const tmp5Result12 = tenureBadgeHideable(stateFromStores1[34]);
  const items9 = [stateFromStoresArray];
  const stateFromStoresObject1 = tenureBadgeHideable(stateFromStores1[34]).useStateFromStoresObject(items9, () => {
    const pendingChanges = stateFromStoresArray.getPendingChanges();
    return {
      pendingBadgeDisplayOrder: pendingChanges.pendingBadgeDisplayOrder,
      pendingBadgeHiddenBadges: pendingChanges.pendingBadgeHiddenBadges,
    };
  }, []);
  pendingBadgeDisplayOrder = stateFromStoresObject1.pendingBadgeDisplayOrder;
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  const items10 = [stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  memo = analyticsLocations.useMemo(
    () =>
      PendingBadgeSettings.applyPendingBadgeSettings(stateFromStoresArray, {
        pendingBadgeDisplayOrder,
        pendingBadgeHiddenBadges,
      }),
    items10,
  );
  const items11 = [tenureBadgeHideable];
  analyticsLocations.useMemo(() => BadgeUtils.getUnhideableBadgeIds({ tenureBadgeHideable }), items11);
  const items12 = [memo];
  const memo1 = analyticsLocations.useMemo(() => BadgeUtils.groupCustomizableBadges(memo), items12);
  fixedBadges = memo1.fixedBadges;
  reorderableBadges = memo1.reorderableBadges;
  hiddenBadges = memo1.hiddenBadges;
  const items13 = [reorderableBadges];
  memo2 = analyticsLocations.useMemo(() => reorderableBadges.map((badge_id) => badge_id.badge_id), items13);
  const tmp5Result13 = tenureBadgeHideable(stateFromStores1[34]);
  sharedValue = tenureBadgeHideable(stateFromStores1[25]).useSharedValue(memo2);
  onCommitOrder = tmp2(tmp3[24])((arr) => {
    const result = tenureBadgeHideable(stateFromStores1[28]).setPendingBadgeDisplayOrder(arr);
  });
  const tmp5Result14 = tenureBadgeHideable(stateFromStores1[25]);
  sharedValue1 = tenureBadgeHideable(stateFromStores1[25]).useSharedValue(false);
  const items14 = [memo2, sharedValue1, sharedValue];
  const effect3 = analyticsLocations.useEffect(() => {
    if (!sharedValue1.get()) {
      const result = sharedValue.set(memo2);
    }
  }, items14);
  closure_18 = tmp2(tmp3[24])((badgeId) => {
    const obj = PendingBadgeSettings;
    const result = obj.setPendingBadgeVisibility({
      badgeId: badgeId.badge_id,
      hidden: false,
      reorderableBadgeIds: memo2,
      hiddenBadgeIds: hiddenBadges.map((badge_id) => badge_id.badge_id),
      canReorder: stateFromStores1,
    });
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.mehuPg, { badgeName: badgeId.name }));
  });
  onPress = tmp2(tmp3[24])((badge_id) => {
    if (hiddenBadges.some((badge_id) => badge_id.badge_id === badge_id.badge_id)) {
      closure_18(badge_id);
    } else if (set.has(badge_id.badge_id)) {
      const obj2 = { key: null, content: null };
      const _HermesInternal = HermesInternal;
      obj2.key = "BADGE_ALWAYS_VISIBLE-" + badge_id.badge_id;
      const intl = util.intl;
      const obj = ToastActionCreatorsDefault;
      obj2.content = intl.string(BadgeUtils.getAlwaysVisibleCopy(badge_id.badge_id));
      obj.open(obj2);
    }
  });
  closure_20 = tmp2(tmp3[24])((badgeId) => {
    const obj = PendingBadgeSettings;
    const result = obj.setPendingBadgeVisibility({
      badgeId: badgeId.badge_id,
      hidden: true,
      reorderableBadgeIds: memo2,
      hiddenBadgeIds: hiddenBadges.map((badge_id) => badge_id.badge_id),
      canReorder: stateFromStores1,
    });
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.q3t0Ht, { count: 1 }));
  });
  onSetHidden = tmp2(tmp3[24])((arg0, arg1) => {
    if (arg1) {
      closure_20(arg0);
    } else {
      closure_18(arg0);
    }
  });
  const tmp5Result15 = tenureBadgeHideable(stateFromStores1[25]);
  badgeTileSize = tenureBadgeHideable(stateFromStores1[13]).getBadgeTileSize(tmp2(tmp3[45])().width);
  const sum1 = fixedBadges.length + reorderableBadges.length + hiddenBadges.length;
  const rounded = Math.ceil(sum1 / tmp5(tmp3[13]).BADGE_GRID_COLUMNS);
  let num = 0;
  if (rounded > 0) {
    let result = rounded * badgeTileSize;
    const diff = rounded - 1;
    num = result + diff * tmp5(tmp3[13]).BADGE_GRID_GAP;
  }
  const tmp5Result16 = tenureBadgeHideable(stateFromStores1[13]);
  animatedRef = tenureBadgeHideable(stateFromStores1[25]).useAnimatedRef();
  const tmp5Result17 = tenureBadgeHideable(stateFromStores1[25]);
  scrollViewOffset = tenureBadgeHideable(stateFromStores1[25]).useScrollViewOffset(animatedRef);
  const tmp5Result18 = tenureBadgeHideable(stateFromStores1[25]);
  sharedValue2 = tenureBadgeHideable(stateFromStores1[25]).useSharedValue(0);
  const tmp5Result19 = tenureBadgeHideable(stateFromStores1[25]);
  sharedValue3 = tenureBadgeHideable(stateFromStores1[25]).useSharedValue(0);
  const tmp5Result20 = tenureBadgeHideable(stateFromStores1[25]);
  function ee(timeSincePreviousFrame) {
    timeSincePreviousFrame = timeSincePreviousFrame.timeSincePreviousFrame;
    value = sharedValue2.get();
    if (0 !== value) {
      if (null != timeSincePreviousFrame) {
        if (timeSincePreviousFrame > 0) {
          const result = sharedValue3.set(sharedValue3.get() + timeSincePreviousFrame);
          value2 = sharedValue3.get();
          if (value2 >= c17) {
            const result1 = sharedValue3.set(0);
            const obj2 = ReanimatedRexport;
            const _Math = Math;
            obj2.scrollTo(
              animatedRef,
              0,
              Math.max(roundToNearestPixelDefault(scrollViewOffset.get() + (700 * value * value2) / 1000), 0),
              false,
            );
          }
        }
      }
    }
  }
  const tmp5Result21 = tenureBadgeHideable(stateFromStores1[25]);
  ee.__closure = {
    autoScrollSpeed: sharedValue2,
    autoScrollElapsed: sharedValue3,
    MS_PER_FRAME_60FPS: sharedValue1,
    AUTO_SCROLL_PIXELS_PER_SECOND: 700,
    scrollTo: tenureBadgeHideable(stateFromStores1[25]).scrollTo,
    scrollRef: animatedRef,
    roundToNearestPixel: stateFromStores(stateFromStores1[46]),
    scrollOffset: scrollViewOffset,
  };
  ee.__workletHash = 8297629116909;
  ee.__initData = __initData6;
  frameCallback = tmp5Result21.useFrameCallback(ee, false);
  const items15 = [frameCallback];
  callback1 = obj4.useCallback((arg0) => {
    frameCallback.setActive(arg0);
  }, items15);
  const obj5 = {
    autoScrollSpeed: sharedValue2,
    autoScrollElapsed: sharedValue3,
    MS_PER_FRAME_60FPS: sharedValue1,
    AUTO_SCROLL_PIXELS_PER_SECOND: 700,
    scrollTo: tenureBadgeHideable(stateFromStores1[25]).scrollTo,
    scrollRef: animatedRef,
    roundToNearestPixel: stateFromStores(stateFromStores1[46]),
    scrollOffset: scrollViewOffset,
  };
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
    tmp = null != arg1 && arg0 !== arg1;
  }
  const tmp5Result22 = tenureBadgeHideable(stateFromStores1[25]);
  te.__closure = {
    autoScrollElapsed: sharedValue3,
    runOnJS: tenureBadgeHideable(stateFromStores1[25]).runOnJS,
    setAutoScrollerActive: callback1,
  };
  te.__workletHash = 12755360860907;
  te.__initData = __initData8;
  const animatedReaction = tmp5Result22.useAnimatedReaction(ie, te);
  if (hasCatalog) {
    const obj7 = { style: tmp.gridInset, children: null };
    let tmp40 = !stateFromStores1;
    if (!stateFromStores1) {
      const obj8 = {
        style: tmp.upsell,
        ctaText: null,
        cardStyle: null,
        contentStyle: null,
        ctaStyle: null,
        showLinearGradient: true,
        onPress: null,
        children: null,
      };
      const intl2 = tmp5(tmp3[15]).intl;
      obj8.ctaText = intl2.string(tmp5(tmp3[15]).t.pj0XBN);
      ({ upsellCard: obj23.cardStyle, upsellContent: obj23.contentStyle, upsellCta: obj23.ctaStyle } = tmp);
      obj8.onPress = callback;
      const obj9 = { variant: "text-sm/normal", style: tmp.upsellText, children: null };
      const intl3 = tmp5(tmp3[15]).intl;
      obj9.children = intl3.string(tmp5(tmp3[15]).t.JrOki0);
      obj8.children = memo2(tmp5(tmp3[21]).Text, obj9);
      tmp40 = memo2(tmp2(tmp3[47]), obj8);
      const tmp2Result = tmp2(tmp3[47]);
    }
    const items16 = [tmp40];
    const obj10 = { accessibilityRole: "list", style: null, children: null };
    const items17 = [tmp.grid];
    const obj11 = { height: num };
    items17[1] = obj11;
    obj10.style = items17;
    const items18 = [
      fixedBadges.map((badge, index) =>
        closure_2_14(
          closure_23,
          { badge, index, tileSize: badgeTileSize, alwaysVisible: set.has(badge.badge_id), onPress },
          badge.badge_id,
        ),
      ),
      reorderableBadges.map((badge, index) => {
        if (stateFromStores1) {
          const obj2 = {
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
            onSetHidden,
            onPress,
          };
          let tmpResult = closure_2_14(closure_36, obj2, badge.badge_id);
        } else {
          const obj = {
            badge,
            index: fixedBadges.length + index,
            tileSize: badgeTileSize,
            alwaysVisible: set.has(badge.badge_id),
            onPress,
            onSetHidden,
          };
          tmpResult = closure_2_14(closure_23, obj, badge.badge_id);
        }
        return tmpResult;
      }),
      hiddenBadges.map((badge, index) =>
        closure_2_14(
          closure_23,
          {
            badge,
            index: fixedBadges.length + reorderableBadges.length + index,
            tileSize: badgeTileSize,
            alwaysVisible: set.has(badge.badge_id),
            onPress,
            onSetHidden,
          },
          badge.badge_id,
        ),
      ),
    ];
    obj10.children = items18;
    items16[1] = sharedValue(context, obj10);
    obj7.children = items16;
    let tmp35Result = tmp38(tmp39, obj7);
  } else {
    if (stateFromStoresObject.hasCatalogError) {
      const obj12 = { style: tmp.message, accessibilityRole: "alert", children: null };
      const obj13 = { variant: "text-md/normal", color: "text-muted", style: tmp.messageText, children: null };
      let intl = tmp5(tmp3[15]).intl;
      obj13.children = intl.string(tmp5(tmp3[15]).t["rTU7/z"]);
      obj12.children = tmp35(tmp5(tmp3[21]).Text, obj13);
      let obj14 = obj12;
    } else {
      obj14 = {
        style: tmp.message,
        children: tmp35(tmp5(tmp3[48]).ActivityIndicator, { animating: true, size: "large" }),
      };
    }
    tmp35Result = tmp35(context, obj14);
  }
  const obj15 = {
    startExpanded: true,
    scrollable: true,
    dismissAccessibilityLabel: null,
    header: null,
    children: null,
  };
  const intl4 = tmp5(tmp3[15]).intl;
  obj15.dismissAccessibilityLabel = intl4.string(tenureBadgeHideable(stateFromStores1[15]).t.x5SfWU);
  const obj16 = { title: null, subtitle: null };
  const intl5 = tmp5(tmp3[15]).intl;
  obj16.title = intl5.string(tenureBadgeHideable(stateFromStores1[15]).t.x5SfWU);
  const intl6 = tmp5(tmp3[15]).intl;
  const t = tmp5(tmp3[15]).t;
  obj16.subtitle = intl6.string(stateFromStores1 ? t["Vzc4+8"] : t.ZuXSRp);
  obj15.header = memo2(tenureBadgeHideable(stateFromStores1[50]).BottomSheetTitleHeader, obj16);
  obj15.children = memo2(tenureBadgeHideable(stateFromStores1[51]).BottomSheetScrollView, {
    ref: animatedRef,
    contentContainerStyle: { paddingBottom: sum },
    children: tmp35Result,
  });
  return memo2(tenureBadgeHideable(stateFromStores1[49]).BottomSheet, obj15);
}
