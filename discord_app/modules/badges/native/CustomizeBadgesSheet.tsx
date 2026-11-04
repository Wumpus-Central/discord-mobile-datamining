// discord_app/modules/badges/native/CustomizeBadgesSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import _mod1705 from "../../../../_runtime/metro/01705__.js";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../design/animation/reanimated/timing/timingPresets.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import LegacyBaseButton from "../../../../_runtime/05428_LegacyBaseButton.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import CircleInformationIcon from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import Card from "../../../design/components/Card/native/Card.native.tsx";
import EyeSlashIcon2 from "../../../design/components/Icon/native/redesign/generated/EyeSlashIcon.tsx";
import EyeIcon from "../../../design/components/Icon/native/redesign/generated/EyeIcon.tsx";
import useStableCallbackDefault from "../../../hooks/useStableCallback.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import UserProfileAnalyticsUtils from "../../user_profile/UserProfileAnalyticsUtils.tsx";
import BadgeDirectoryActionCreators from "../BadgeDirectoryActionCreators.tsx";
import native from "../../../design/components/experimental/native.tsx";
import ContextMenu from "../../../design/components/ContextMenu/native/ContextMenu.native.tsx";
import ContextMenuState from "../../../design/components/ContextMenu/native/ContextMenuState.native.tsx";
import ContextMenuConstants from "../../../design/components/ContextMenu/native/ContextMenuConstants.native.tsx";
import openPremiumModalDefault from "../../../components_native/premium/openPremiumModal.tsx";
import PremiumFeaturesCards from "../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import BadgeCatalogIconDefault from "BadgeCatalogIcon.tsx";
import BadgeManagementExperimentDefault from "../BadgeManagementExperiment.tsx";
import BadgeUtils from "../BadgeUtils.tsx";
import roundToNearestPixelDefault from "../../voice_panel/native/utils/roundToNearestPixel.tsx";
import PendingBadgeSettings from "../PendingBadgeSettings.tsx";
import BadgeGrid from "BadgeGrid.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../../user_profile/UserProfileSettingsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import BadgeDirectoryStore from "../BadgeDirectoryStore.tsx";

const require = globalThis.__r;

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
  items = [obj];
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
  return gesture(ContextMenu.ContextMenu, obj2);
}
function BadgeTileContent(badge) {
  badge = badge.badge;
  const tmp = closure_18();
  let flag = badge.hidden;
  if (flag == null) {
    flag = false;
  }
  if (badge.alwaysVisible) {
    const obj2 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
    let tmp2 = gesture(CircleInformationIcon.CircleInformationIcon, obj2);
  } else {
    tmp2 = null;
    if (flag) {
      const obj = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
      tmp2 = gesture(EyeSlashIcon2.EyeSlashIcon, obj);
    }
  }
  const obj3 = { variant: "secondary", border: "none", radius: 16, style: tmp.card, children: null };
  const obj4 = { badge, size: BadgeGrid.BADGE_TILE_ICON_SIZE, style: null };
  items = [tmp.icon];
  let iconHidden = flag;
  if (flag) {
    iconHidden = tmp.iconHidden;
  }
  items[1] = iconHidden;
  obj4.style = items;
  const items1 = [gesture(BadgeCatalogIconDefault, obj4), ,];
  let str = "text-default";
  if (flag) {
    str = "text-muted";
  }
  items1[1] = gesture(Text_Text.Text, {
    variant: "body-xs/medium",
    color: str,
    lineClamp: 1,
    style: tmp.name,
    "aria-hidden": true,
    children: badge.name,
  });
  let tmp14Result = null != tmp2;
  if (tmp14Result) {
    const obj6 = { style: tmp.indicator, "aria-hidden": true, children: tmp2 };
    tmp14Result = gesture(React4, obj6);
  }
  items1[2] = tmp14Result;
  obj3.children = items1;
  return closure_1_15(Card.Card, obj3);
}
get_ActivityIndicator = fn(17);
({ Platform, View: closure_4 } = get_ActivityIndicator);
const Constants = fn(1072);
({
  AnalyticEvents: closure_8,
  AnalyticsObjects: closure_9,
  AnalyticsPages: closure_10,
  AnalyticsSections: closure_11,
} = Constants);
const constants3 = fn(5397).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const PremiumUpsellTypes = fn(1387).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let createStyles = fn(5141);
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
let closure_16 = createStyles.createStyles(obj);
createStyles = fn(5141);
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
let closure_18 = createStyles.createStyles(obj10);
let items = [
  {
    code: "(function getSlotOffset_CustomizeBadgesSheetTsx1(index,tileSize){let[BADGE_GRID_COLUMNS,BADGE_GRID_GAP]=this.__closure;const column=index%BADGE_GRID_COLUMNS;return{x:column*(tileSize+BADGE_GRID_GAP),y:Math.floor(index/BADGE_GRID_COLUMNS)*(tileSize+BADGE_GRID_GAP)};})",
  },
  fn(16725).BADGE_GRID_COLUMNS,
  fn(16725).BADGE_GRID_GAP,
];
let closure_129_0;
let closure_129_1;
[tmp5, tmp6, tmp7] = items;
function getSlotOffset(arg0, arg1) {
  const point = {
    x: (arg0 % require) * (arg1 + importDefault),
    y: Math.floor(arg0 / require) * (arg1 + importDefault),
  };
  return point;
}
let items1 = [tmp6, tmp7];
getSlotOffset.__closure = items1;
getSlotOffset.__workletHash = 10148916703645;
getSlotOffset.__initData = tmp5;
let closure_21 = noop.memo(function FixedBadgeTile(badge) {
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
      obj.children = gesture(BadgeTileContent, { badge, alwaysVisible });
      return gesture(native.PressableScale, obj);
    }
    const _Math = Math;
    let result = (index % closure_147_0) * (tileSize + closure_147_1);
    items = [badge, onPress];
    const result1 = Math.floor(index / closure_147_0) * (tileSize + closure_147_1);
    closure_4 = onPress.useCallback(() => {
      onPress(badge);
    }, items);
    items1 = [tmp.position];
    const size = { left: result, top: result1, width: tileSize, height: tileSize };
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
let closure_22 = {
  code: "(function CustomizeBadgesSheetTsx2(){let[orderShared,badgeId,getSlotOffset,slotOffset,tileSize]=this.__closure;const slot=orderShared.get().indexOf(badgeId);return slot<0?null:getSlotOffset(slot+slotOffset,tileSize);})",
};
let closure_23 = {
  code: "(function CustomizeBadgesSheetTsx3(target,previousTarget){let[isThisTileDragging,positionX,withTiming,timingStandard,positionY]=this.__closure;if(target==null||isThisTileDragging.get()){return;}if(target.x!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.x)){positionX.set(withTiming(target.x,timingStandard));}if(target.y!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.y)){positionY.set(withTiming(target.y,timingStandard));}})",
};
let closure_24 = {
  code: "(function CustomizeBadgesSheetTsx4(){let[orderShared,tileSize,BADGE_GRID_GAP,clamp,positionX,BADGE_GRID_COLUMNS,positionY,slotOffset,moveBadgeInDisplayOrder,badgeId,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes]=this.__closure;const order=orderShared.get();const step=tileSize+BADGE_GRID_GAP;const column=clamp(Math.floor((positionX.get()+tileSize/2)/step),0,BADGE_GRID_COLUMNS-1);const row=Math.max(Math.floor((positionY.get()+tileSize/2)/step),0);const to=clamp(row*BADGE_GRID_COLUMNS+column-slotOffset,0,order.length-1);const next=moveBadgeInDisplayOrder(order,order.indexOf(badgeId),to);if(next!==order){orderShared.set(next);scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.DRAG_AND_DROP_MOVE);}})",
};
let closure_25 = {
  code: "(function CustomizeBadgesSheetTsx5(){let[scrollOffset]=this.__closure;return scrollOffset.get();})",
};
let closure_26 = {
  code: "(function CustomizeBadgesSheetTsx6(offset,previousOffset){let[isThisTileDragging,positionY,reslot]=this.__closure;if(previousOffset==null||!isThisTileDragging.get()){return;}positionY.set(positionY.get()+(offset-previousOffset));reslot();})",
};
let closure_27 = {
  code: "(function handleStart_CustomizeBadgesSheetTsx7(){let[isAnyDragActive,isThisTileDragging,scheduleOnRN,hideContextMenu,dragOrigin,positionX,positionY,measure,scrollRef,dragViewport,scale,withTiming,DRAG_SCALE,timingStandard,triggerHapticFeedback,HapticFeedbackTypes]=this.__closure;if(isAnyDragActive.get()&&!isThisTileDragging.get()){return;}scheduleOnRN(hideContextMenu);isAnyDragActive.set(true);isThisTileDragging.set(true);dragOrigin.set({x:positionX.get(),y:positionY.get()});const viewport=measure(scrollRef);dragViewport.set(viewport==null?null:{pageY:viewport.pageY,height:viewport.height});scale.set(withTiming(DRAG_SCALE,timingStandard));scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.DRAG_AND_DROP_START);})",
};
let closure_28 = {
  code: "(function handleChange_CustomizeBadgesSheetTsx8(event){let[isThisTileDragging,positionX,positionY,reslot,dragViewport,AUTO_SCROLL_EDGE_SIZE,autoScrollSpeed,clamp]=this.__closure;if(!isThisTileDragging.get()){return;}positionX.set(positionX.get()+event.changeX);positionY.set(positionY.get()+event.changeY);reslot();const viewport=dragViewport.get();if(viewport==null){return;}const fromTop=event.absoluteY-viewport.pageY;const fromBottom=viewport.pageY+viewport.height-event.absoluteY;if(fromTop<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(-1+clamp(fromTop,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else if(fromBottom<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(1-clamp(fromBottom,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else{autoScrollSpeed.set(0);}})",
};
let closure_29 = {
  code: "(function handleFinalize_CustomizeBadgesSheetTsx9(){let[isThisTileDragging,autoScrollSpeed,dragViewport,orderShared,badgeId,getSlotOffset,slotOffset,tileSize,positionX,withTiming,timingStandard,positionY,scale,isAnyDragActive,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,onCommitOrder]=this.__closure;if(!isThisTileDragging.get()){return;}autoScrollSpeed.set(0);dragViewport.set(null);const order=orderShared.get();const slot=order.indexOf(badgeId);if(slot>=0){const target=getSlotOffset(slot+slotOffset,tileSize);positionX.set(withTiming(target.x,timingStandard));positionY.set(withTiming(target.y,timingStandard));}scale.set(withTiming(1,timingStandard));isThisTileDragging.set(false);isAnyDragActive.set(false);scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.DRAG_AND_DROP_END);scheduleOnRN(onCommitOrder,order);})",
};
let closure_30 = { code: "(function CustomizeBadgesSheetTsx10(){let[handleStart]=this.__closure;handleStart();})" };
let closure_31 = {
  code: "(function CustomizeBadgesSheetTsx11(event){let[handleChange]=this.__closure;handleChange(event);})",
};
let closure_32 = {
  code: "(function CustomizeBadgesSheetTsx12(){let[handleFinalize]=this.__closure;handleFinalize();})",
};
let closure_33 = {
  code: "(function CustomizeBadgesSheetTsx13(){let[isThisTileDragging,dragOrigin,positionX,positionY,scale]=this.__closure;const dragging=isThisTileDragging.get();const origin=dragOrigin.get();return{zIndex:dragging?10:0,left:dragging?origin.x:positionX.get(),top:dragging?origin.y:positionY.get(),transform:dragging?[{translateX:positionX.get()-origin.x},{translateY:positionY.get()-origin.y},{scale:scale.get()}]:[{scale:scale.get()}]};})",
};
let closure_34 = noop.memo(function DraggableBadgeTile(badge) {
  badge = badge.badge;
  _require = badge;
  let index = badge.index;
  importDefault = index;
  const tileSize = badge.tileSize;
  dependencyMap = tileSize;
  const slotOffset = badge.slotOffset;
  noop = slotOffset;
  const alwaysVisible = badge.alwaysVisible;
  c4 = alwaysVisible;
  const orderShared = badge.orderShared;
  c5 = orderShared;
  const isDragActive = badge.isDragActive;
  c6 = isDragActive;
  const scrollRef = badge.scrollRef;
  c7 = scrollRef;
  const autoScrollSpeed = badge.autoScrollSpeed;
  c8 = autoScrollSpeed;
  const onCommitOrder = badge.onCommitOrder;
  c9 = onCommitOrder;
  let onPress = badge.onPress;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let sharedValue5;
  let callback;
  gesture = undefined;
  closure_22 = undefined;
  closure_23 = undefined;
  let items15;
  ({ isFirst, isLast, scrollOffset, onSetHidden } = badge);
  c11 = sharedValue4();
  const badge_id = badge.badge_id;
  c12 = badge_id;
  closure_13 = useStableCallbackDefault(() => {
    _undefined10(c0);
  });
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(false);
  let obj = require("../../../../_runtime/metro/01652__.js");
  const sharedValue1 = require("../../../../_runtime/metro/01652__.js").useSharedValue(null);
  if (typeof sharedValue5 === "function") {
    let point = { x: (index % _require) * (tileSize + importDefault), y: null };
    const _Math = Math;
    point.y = Math.floor(index / _require) * (tileSize + importDefault);
    sharedValue2 = tmp2(1652).useSharedValue(point.x);
    let tmp2Result = tmp2(1652);
    sharedValue3 = tmp2(1652).useSharedValue(point.y);
    const tmp2Result7 = tmp2(1652);
    sharedValue4 = tmp2(1652).useSharedValue(point);
    const tmp2Result8 = tmp2(1652);
    sharedValue5 = tmp2(1652).useSharedValue(1);
    const tmp2Result9 = tmp2(1652);
    items = [closure_22, orderShared, badge_id, tmp5, slotOffset, tileSize];
    _require = undefined;
    importDefault = undefined;
    dependencyMap = undefined;
    noop = undefined;
    c4 = undefined;
    [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items;
    class CustomizeBadgesSheetTsx2 {
      constructor() {
        value = closure_0.get();
        index = value.indexOf(closure_1);
        tmp2 = null;
        if (index >= 0) {
          tmp3 = closure_2;
          tmp4 = closure_3;
          tmp5 = closure_4;
          tmp2 = closure_2(index + closure_3, closure_4);
        }
        return tmp2;
      }
    }
    let items1 = [tmp16, tmp17, tmp18, tmp19, tmp20];
    CustomizeBadgesSheetTsx2.__closure = items1;
    CustomizeBadgesSheetTsx2.__workletHash = 10350129315381;
    CustomizeBadgesSheetTsx2.__initData = tmp15;
    let items2 = [
      closure_23,
      sharedValue,
      sharedValue2,
      tmp2(5378).withTiming,
      tmp2(5381).timingStandard,
      sharedValue3,
    ];
    _require = undefined;
    importDefault = undefined;
    dependencyMap = undefined;
    noop = undefined;
    c4 = undefined;
    [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items2;
    class CustomizeBadgesSheetTsx3 {
      constructor(arg0, arg1) {
        value = null == badge;
        if (!value) {
          tmp2 = closure_0;
          value = closure_0.get();
        }
        if (!value) {
          tmp3 = arg1;
          x = undefined;
          if (arg1 != null) {
            x = arg1.x;
          }
          if (badge.x !== x) {
            tmp5 = closure_1;
            tmp6 = closure_2;
            tmp7 = closure_3;
            result = closure_1.set(closure_2(badge.x, closure_3));
          }
          y = undefined;
          if (arg1 != null) {
            y = arg1.y;
          }
          if (badge.y !== y) {
            tmp10 = closure_4;
            tmp11 = closure_2;
            tmp12 = closure_3;
            result1 = closure_4.set(closure_2(badge.y, closure_3));
          }
        }
        return;
      }
    }
    let items3 = [tmp24, tmp25, tmp26, tmp27, tmp28];
    CustomizeBadgesSheetTsx3.__closure = items3;
    CustomizeBadgesSheetTsx3.__workletHash = 7747025592280;
    CustomizeBadgesSheetTsx3.__initData = tmp23;
    const animatedReaction = tmp2(1652).useAnimatedReaction(CustomizeBadgesSheetTsx2, CustomizeBadgesSheetTsx3);
    let items4 = [
      items15,
      orderShared,
      tileSize,
      tmp2(16725).BADGE_GRID_GAP,
      tmp2(1652).clamp,
      sharedValue2,
      tmp2(16725).BADGE_GRID_COLUMNS,
      sharedValue3,
      slotOffset,
      tmp2(15201).moveBadgeInDisplayOrder,
      badge_id,
      tmp2(1705).scheduleOnRN,
      tmp2(5384).triggerHapticFeedback,
      tmp2(5384).HapticFeedbackTypes,
    ];
    _require = undefined;
    importDefault = undefined;
    dependencyMap = undefined;
    noop = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    c9 = undefined;
    onPress = undefined;
    c11 = undefined;
    c12 = undefined;
    [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45] = items4;
    class CustomizeBadgesSheetTsx4 {
      constructor() {
        obj = closure_0;
        value = closure_0.get();
        sum = closure_1 + closure_2;
        tmp2 = closure_3(Math.floor((closure_4.get() + closure_1 / 2) / sum), 0, closure_5 - 1);
        tmp3 = closure_3(
          Math.max(Math.floor((closure_6.get() + closure_1 / 2) / sum), 0) * closure_5 + tmp2 - closure_7,
          0,
          value.length - 1,
        );
        tmp4 = closure_8(value, value.indexOf(closure_9), tmp3);
        if (tmp4 !== value) {
          result = obj.set(tmp4);
          tmp6 = closure_10;
          tmp7 = closure_11;
          tmp8 = closure_12;
          tmp9 = closure_10(closure_11, closure_12.DRAG_AND_DROP_MOVE);
        }
        return;
      }
    }
    let items5 = [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45];
    CustomizeBadgesSheetTsx4.__closure = items5;
    CustomizeBadgesSheetTsx4.__workletHash = 12359820987198;
    CustomizeBadgesSheetTsx4.__initData = tmp32;
    let items6 = [badge_id, orderShared, slotOffset, tileSize, sharedValue2, sharedValue3];
    callback = noop.useCallback(CustomizeBadgesSheetTsx4, items6);
    const tmp2Result10 = tmp2(1652);
    let items7 = [closure_25, scrollOffset];
    _require = undefined;
    [tmp49, tmp50] = items7;
    class CustomizeBadgesSheetTsx5 {
      constructor() {
        return closure_0.get();
      }
    }
    let items8 = [tmp50];
    CustomizeBadgesSheetTsx5.__closure = items8;
    CustomizeBadgesSheetTsx5.__workletHash = 9461720859225;
    CustomizeBadgesSheetTsx5.__initData = tmp49;
    let items9 = [closure_26, sharedValue, sharedValue3, callback];
    _require = undefined;
    importDefault = undefined;
    dependencyMap = undefined;
    [tmp53, tmp54, tmp55, tmp56] = items9;
    class CustomizeBadgesSheetTsx6 {
      constructor(arg0, arg1) {
        value = null != arg1;
        if (value) {
          tmp2 = closure_0;
          value = closure_0.get();
        }
        if (value) {
          tmp3 = badge;
          tmp4 = closure_1;
          result = closure_1.set(closure_1.get() + (badge - arg1));
          tmp6 = closure_2;
          tmp7 = closure_2();
        }
        return;
      }
    }
    let items10 = [tmp54, tmp55, tmp56];
    CustomizeBadgesSheetTsx6.__closure = items10;
    CustomizeBadgesSheetTsx6.__workletHash = 1713421095914;
    CustomizeBadgesSheetTsx6.__initData = tmp53;
    const animatedReaction1 = tmp2(1652).useAnimatedReaction(CustomizeBadgesSheetTsx5, CustomizeBadgesSheetTsx6);
    let items11 = [
      callback,
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
    gesture = obj8.useMemo(() => {
      items = [
        closure_27,
        c6,
        sharedValue,
        _mod1705.scheduleOnRN,
        ContextMenuState.hideContextMenu,
        sharedValue4,
        sharedValue2,
        sharedValue3,
        _mod1652.measure,
        c7,
        sharedValue1,
        sharedValue5,
        timing_timing.withTiming,
        1.05,
        timingPresets.timingStandard,
        HapticUtils.triggerHapticFeedback,
        HapticUtils.HapticFeedbackTypes,
      ];
      c8 = undefined;
      c9 = undefined;
      c12 = undefined;
      [
        tmp9,
        tmp10,
        tmp11,
        tmp12,
        tmp13,
        tmp14,
        tmp15,
        tmp16,
        tmp17,
        tmp18,
        tmp19,
        tmp20,
        tmp21,
        tmp22,
        tmp23,
        tmp24,
        tmp25,
      ] = items;
      function handleStart() {
        if (!_undefined.get()) {
          _undefined3(c3);
          const result = _undefined.set(true);
          const result1 = _undefined2.set(true);
          const point = { x: _undefined6.get(), y: _undefined7.get() };
          const result2 = _undefined5.set(point);
          const tmp14 = _undefined8(c8);
          let tmp16 = null;
          if (null != tmp14) {
            ({ pageY: obj3.pageY, height: obj3.height } = tmp14);
            tmp16 = { pageY: null, height: null };
            const obj2 = { pageY: null, height: null };
          }
          const result3 = _undefined10.set(tmp16);
          const result4 = _undefined11.set(_undefined12(c12, c13));
          _undefined3(c14, _undefined16.DRAG_AND_DROP_START);
        }
      }
      const items1 = [
        tmp10,
        tmp11,
        tmp12,
        tmp13,
        tmp14,
        tmp15,
        tmp16,
        tmp17,
        tmp18,
        tmp19,
        tmp20,
        tmp21,
        tmp22,
        tmp23,
        tmp24,
        tmp25,
      ];
      handleStart.__closure = items1;
      handleStart.__workletHash = 76261641207;
      handleStart.__initData = tmp9;
      const items2 = [
        closure_28,
        sharedValue,
        sharedValue2,
        sharedValue3,
        callback,
        sharedValue1,
        80,
        c8,
        _mod1652.clamp,
      ];
      c2 = undefined;
      c3 = undefined;
      c5 = undefined;
      c6 = undefined;
      [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35] = items2;
      function handleChange(changeX) {
        if (_undefined.get()) {
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
      const items3 = [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35];
      handleChange.__closure = items3;
      handleChange.__workletHash = 3274388629829;
      handleChange.__initData = tmp27;
      const items4 = [
        closure_29,
        sharedValue,
        c8,
        sharedValue1,
        c5,
        c12,
        getSlotOffset,
        c3,
        c2,
        sharedValue2,
        timing_timing.withTiming,
        timingPresets.timingStandard,
        sharedValue3,
        sharedValue5,
        c6,
        _mod1705.scheduleOnRN,
        HapticUtils.triggerHapticFeedback,
        HapticUtils.HapticFeedbackTypes,
        c9,
      ];
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
      [
        tmp36,
        tmp37,
        tmp38,
        tmp39,
        tmp40,
        tmp41,
        tmp42,
        tmp43,
        tmp44,
        tmp45,
        tmp46,
        tmp47,
        tmp48,
        tmp49,
        tmp50,
        tmp51,
        tmp52,
        tmp53,
        tmp54,
      ] = items4;
      function handleFinalize() {
        if (_undefined.get()) {
          const result = _undefined2.set(0);
          const result1 = _undefined3.set(null);
          value = _undefined4.get();
          const index = value.indexOf(c4);
          if (index >= 0) {
            const point = _undefined6(index + c6, c7);
            const result2 = _undefined9.set(_undefined10(point.x, c10));
            const result3 = _undefined12.set(_undefined10(point.y, c10));
          }
          const result4 = _undefined13.set(_undefined10(1, c10));
          const result5 = _undefined.set(false);
          const result6 = _undefined14.set(false);
          _undefined15(c15, _undefined17.DRAG_AND_DROP_END);
          _undefined15(c17, value);
        }
      }
      const items5 = [
        tmp37,
        tmp38,
        tmp39,
        tmp40,
        tmp41,
        tmp42,
        tmp43,
        tmp44,
        tmp45,
        tmp46,
        tmp47,
        tmp48,
        tmp49,
        tmp50,
        tmp51,
        tmp52,
        tmp53,
        tmp54,
      ];
      handleFinalize.__closure = items5;
      handleFinalize.__workletHash = 3320936971344;
      handleFinalize.__initData = tmp36;
      const Gesture = LegacyBaseButton.Gesture;
      const PanResult = Gesture.Pan();
      const items6 = [closure_30, handleStart];
      c0 = undefined;
      [tmp55, tmp56] = items6;
      class CustomizeBadgesSheetTsx10 {
        constructor() {
          tmp = closure_0();
          return;
        }
      }
      const items7 = [tmp56];
      CustomizeBadgesSheetTsx10.__closure = items7;
      CustomizeBadgesSheetTsx10.__workletHash = 13419120968383;
      CustomizeBadgesSheetTsx10.__initData = tmp55;
      const minDistanceResult = Gesture.Pan().minDistance(8);
      const items8 = [closure_31, handleChange];
      c0 = undefined;
      [tmp57, tmp58] = items8;
      class CustomizeBadgesSheetTsx11 {
        constructor(arg0) {
          tmp = closure_0(arg0);
          return;
        }
      }
      const items9 = [tmp58];
      CustomizeBadgesSheetTsx11.__closure = items9;
      CustomizeBadgesSheetTsx11.__workletHash = 13081817689214;
      CustomizeBadgesSheetTsx11.__initData = tmp57;
      const onStartResult = Gesture.Pan().minDistance(8).onStart(CustomizeBadgesSheetTsx10);
      const items10 = [closure_32, handleFinalize];
      c0 = undefined;
      [tmp59, tmp60] = items10;
      class CustomizeBadgesSheetTsx12 {
        constructor() {
          tmp = closure_0();
          return;
        }
      }
      const items11 = [tmp60];
      CustomizeBadgesSheetTsx12.__closure = items11;
      CustomizeBadgesSheetTsx12.__workletHash = 2105939311037;
      CustomizeBadgesSheetTsx12.__initData = tmp59;
      return Gesture.Pan()
        .minDistance(8)
        .onStart(CustomizeBadgesSheetTsx10)
        .onChange(CustomizeBadgesSheetTsx11)
        .onFinalize(CustomizeBadgesSheetTsx12);
    }, items11);
    const tmp2Result11 = tmp2(1652);
    const items12 = [closure_33, sharedValue, sharedValue4, sharedValue2, sharedValue3, sharedValue5];
    _require = undefined;
    importDefault = undefined;
    dependencyMap = undefined;
    noop = undefined;
    c4 = undefined;
    [tmp60, tmp61, tmp62, tmp63, tmp64, tmp65] = items12;
    class CustomizeBadgesSheetTsx13 {
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
          items = [, ,];
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
    const items13 = [tmp61, tmp62, tmp63, tmp64, tmp65];
    CustomizeBadgesSheetTsx13.__closure = items13;
    CustomizeBadgesSheetTsx13.__workletHash = 12364432991215;
    CustomizeBadgesSheetTsx13.__initData = tmp60;
    closure_22 = tmp2(1652).useAnimatedStyle(CustomizeBadgesSheetTsx13);
    const items14 = [badge_id, orderShared, onCommitOrder, slotOffset];
    closure_23 = obj8.useCallback((nativeEvent) => {
      const actionName = nativeEvent.nativeEvent.actionName;
      if ("moveup" === actionName) {
        value = _undefined6.get();
        const index = value.indexOf(c12);
        let num2 = 1;
        if (tmp) {
          num2 = -1;
        }
        const clampResult = _mod1652.clamp(index + num2, 0, value.length - 1);
        const result = PendingBadgeSettings.moveBadgeInDisplayOrder(value, index, clampResult);
        if (result !== value) {
          const result1 = _undefined6.set(result);
          _undefined9(result);
          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
          const intl = util.intl;
          const obj3 = { from: index + c3 + 1, to: clampResult + c3 + 1 };
          AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.qPHr0x, obj3));
        }
        const tmp4Result = PendingBadgeSettings;
      }
    }, items14);
    items15 = [];
    if (!isFirst) {
      let obj3 = { name: "moveup", label: null };
      let intl = tmp2(1113).intl;
      obj3.label = intl.string(tmp2(1113).t.eR2XSh);
      items15.push(obj3);
    }
    if (!isLast) {
      let obj4 = { name: "movedown", label: null };
      let intl2 = tmp2(1113).intl;
      obj4.label = intl2.string(tmp2(1113).t.wWi0DL);
      items15.push(obj4);
    }
    function renderTile(ref) {
      _undefined = ref;
      const obj = { gesture, children: null };
      const obj2 = { style: null, children: null };
      items = [_undefined11.position, ,];
      const size = { width: _undefined3, height: _undefined3 };
      items[1] = size;
      items[2] = closure_22;
      obj2.style = items;
      ref = undefined;
      if (ref != null) {
        ref = ref.ref;
      }
      const obj3 = { ref, accessible: true, accessibilityLabel: null };
      const intl = tmp2(_undefined3[15]).intl;
      const t = tmp2(_undefined3[15]).t;
      obj3.accessibilityLabel = intl.formatToPlainString(_undefined.hidden ? t["dXg/Dl"] : t["21W3EN"], {
        badgeName: _undefined.name,
        position: _undefined2 + 1,
      });
      let stringResult;
      if (alwaysVisible) {
        const intl2 = tmp2(_undefined3[15]).intl;
        stringResult = intl2.string(tmp2(_undefined3[22]).getAlwaysVisibleCopy(tmp9));
        const tmp2Result = tmp2(_undefined3[22]);
      }
      const merged = Object.assign({ accessibilityRole: "button", accessibilityHint: stringResult });
      let accessibilityActions;
      if (ref != null) {
        accessibilityActions = ref.accessibilityActions;
      }
      if (accessibilityActions == null) {
        accessibilityActions = [];
      }
      const items1 = [...items15];
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
        closure_23(nativeEvent);
      };
      if (alwaysVisible) {
        let onPress = closure_13;
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
      obj3.delayLongPress = _undefined(_undefined3[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
      obj3.style = _undefined11.fill;
      obj3.children = sharedValue(callback, { badge: _undefined, alwaysVisible });
      obj2.children = sharedValue(_undefined(_undefined3[23]).PressableScale, obj3);
      obj.children = sharedValue(_undefined2(_undefined3[25]).View, obj2);
      return sharedValue(_undefined(_undefined3[31]).GestureDetector, obj);
    }
    if (alwaysVisible) {
      let renderTileResult = renderTile(null);
    } else {
      const obj5 = { badge, index, onSetHidden, children: renderTile };
      renderTileResult = sharedValue(sharedValue3, obj5);
    }
    return renderTileResult;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  let obj2 = require("../../../../_runtime/metro/01652__.js");
});
let closure_35 = {
  code: "(function CustomizeBadgesSheetTsx14({timeSincePreviousFrame:timeSincePreviousFrame}){let[autoScrollSpeed,autoScrollElapsed,MS_PER_FRAME_60FPS,AUTO_SCROLL_PIXELS_PER_SECOND,scrollTo,scrollRef,roundToNearestPixel,scrollOffset]=this.__closure;const speed=autoScrollSpeed.get();if(speed===0||timeSincePreviousFrame==null||timeSincePreviousFrame<=0){return;}autoScrollElapsed.set(autoScrollElapsed.get()+timeSincePreviousFrame);const elapsed=autoScrollElapsed.get();if(elapsed<MS_PER_FRAME_60FPS){return;}autoScrollElapsed.set(0);const delta=speed*AUTO_SCROLL_PIXELS_PER_SECOND*elapsed/1000;scrollTo(scrollRef,0,Math.max(roundToNearestPixel(scrollOffset.get()+delta),0),false);})",
};
let closure_36 = {
  code: "(function CustomizeBadgesSheetTsx15(){let[autoScrollSpeed]=this.__closure;return autoScrollSpeed.get()!==0;})",
};
let closure_37 = {
  code: "(function CustomizeBadgesSheetTsx16(isScrolling,wasScrolling){let[autoScrollElapsed,scheduleOnRN,setAutoScrollerActive]=this.__closure;if(wasScrolling==null||isScrolling===wasScrolling){return;}autoScrollElapsed.set(0);scheduleOnRN(setAutoScrollerActive,isScrolling);})",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/badges/native/CustomizeBadgesSheet.tsx");

export default function CustomizeBadgesSheet(analyticsLocations) {
  let analyticsLocations1 = analyticsLocations.analyticsLocations;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
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
  let scrollOffset;
  let sharedValue2;
  let frameCallback;
  let tmp = onCommitOrder();
  const tenureBadgeHideable = BadgeManagementExperimentDefault.useConfig({
    location: "CustomizeBadgesSheet",
  }).tenureBadgeHideable;
  _require = tenureBadgeHideable;
  const sum = Math.max(useSafeAreaInsetsDefault().bottom, reorderableBadges) + 4;
  items = [c6];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const currentUser = _undefined5.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  importDefault = stateFromStores;
  let obj2 = require("initialize");
  const items1 = [c6];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () =>
    _undefined(canReorder[36]).canUsePremiumProfileCustomization(_undefined5.getCurrentUser()),
  );
  dependencyMap = stateFromStores1;
  let obj3 = require("initialize");
  if (analyticsLocations1 == null) {
    analyticsLocations1 = [];
  }
  analyticsLocations = useAnalyticsLocationsDefault(
    analyticsLocations1,
    tmp2(7487).BADGES_REORDER_ACTION_SHEET,
  ).analyticsLocations;
  noop = analyticsLocations;
  const context = noop.useContext(tmp2(5727));
  c4 = context;
  const items2 = [context, analyticsLocations];
  const callback = noop.useCallback(() => {
    if (_undefined3 != null) {
      _undefined3.close();
    }
    const obj2 = {
      analyticsLocation: {
        page: closure_2_10.USER_SETTINGS,
        section: constants2.USER_PROFILE,
        object: constants.BUTTON_CTA,
      },
      analyticsLocations: _undefined2,
      premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
    };
    openPremiumModalDefault(obj2);
    const obj3 = { page: closure_2_10.USER_SETTINGS, section: constants2.USER_PROFILE, object: constants.BUTTON_CTA };
  }, items2);
  const obj4 = noop;
  const items3 = [c7];
  const items4 = [stateFromStores];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(
    items3,
    () => BadgeDirectoryStore.getBadges(c1),
    items4,
  );
  c5 = stateFromStoresArray;
  const tmp5Result = require("initialize");
  const items5 = [c7];
  const items6 = [stateFromStores];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items5,
    () => {
      let hasCatalogForResult = null != c1;
      if (hasCatalogForResult) {
        hasCatalogForResult = BadgeDirectoryStore.hasCatalogFor(c1);
      }
      return { hasCatalog: hasCatalogForResult, hasCatalogError: BadgeDirectoryStore.hasCatalogFetchErrorFor(c1) };
    },
    items6,
  );
  const hasCatalog = stateFromStoresObject.hasCatalog;
  c6 = hasCatalog;
  const effect = noop.useEffect(() => {
    const result = UserProfileAnalyticsUtils.trackUserProfileAction({
      action: "VIEW_BADGE_CUSTOMIZATION",
      analyticsLocations: _undefined2,
    });
  }, []);
  const items7 = [stateFromStores1, hasCatalog, analyticsLocations];
  const effect1 = noop.useEffect(() => {
    let tmp = !c2;
    if (!c2) {
      tmp = c6;
    }
    if (tmp) {
      const obj2 = { type: PremiumUpsellTypes.BADGE_REORDERING_UPSELL, location: null, location_stack: null };
      const obj3 = { page: closure_2_10.USER_SETTINGS, section: constants2.USER_PROFILE };
      obj2.location = obj3;
      obj2.location_stack = _undefined2;
      AnalyticsUtilsDefault.track(React5.PREMIUM_UPSELL_VIEWED, obj2);
    }
  }, items7);
  const items8 = [stateFromStores];
  const effect2 = noop.useEffect(() => {
    if (null != c1) {
      if (!tmp2) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(c1);
      }
      tmp2 = BadgeDirectoryStore.hasCatalogFor(c1) && !BadgeDirectoryStore.isCatalogStaleFor(c1);
    }
  }, items8);
  const tmp5Result13 = require("initialize");
  const items9 = [c5];
  const stateFromStoresObject1 = require("initialize").useStateFromStoresObject(items9, () => {
    const pendingChanges = _undefined4.getPendingChanges();
    return {
      pendingBadgeDisplayOrder: pendingChanges.pendingBadgeDisplayOrder,
      pendingBadgeHiddenBadges: pendingChanges.pendingBadgeHiddenBadges,
    };
  }, []);
  const pendingBadgeDisplayOrder = stateFromStoresObject1.pendingBadgeDisplayOrder;
  c7 = pendingBadgeDisplayOrder;
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  const items10 = [stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  memo = noop.useMemo(
    () => PendingBadgeSettings.applyPendingBadgeSettings(c5, { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges }),
    items10,
  );
  const items11 = [tenureBadgeHideable];
  noop.useMemo(() => BadgeUtils.getUnhideableBadgeIds({ tenureBadgeHideable }), items11);
  const items12 = [memo];
  const memo1 = noop.useMemo(() => BadgeUtils.groupCustomizableBadges(memo), items12);
  fixedBadges = memo1.fixedBadges;
  reorderableBadges = memo1.reorderableBadges;
  hiddenBadges = memo1.hiddenBadges;
  const items13 = [reorderableBadges];
  memo2 = noop.useMemo(() => reorderableBadges.map((badge_id) => badge_id.badge_id), items13);
  const tmp5Result14 = require("initialize");
  sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(memo2);
  onCommitOrder = tmp2(7277)((arr) => {
    const result = tenureBadgeHideable(canReorder[28]).setPendingBadgeDisplayOrder(arr);
  });
  const tmp5Result15 = require("../../../../_runtime/metro/01652__.js");
  sharedValue1 = require("../../../../_runtime/metro/01652__.js").useSharedValue(false);
  const items14 = [memo2, sharedValue1, sharedValue];
  const effect3 = noop.useEffect(() => {
    if (!sharedValue1.get()) {
      const result = sharedValue.set(memo2);
    }
  }, items14);
  closure_18 = tmp2(7277)((badgeId) => {
    const obj = PendingBadgeSettings;
    const result = obj.setPendingBadgeVisibility({
      badgeId: badgeId.badge_id,
      hidden: false,
      reorderableBadgeIds: memo2,
      hiddenBadgeIds: hiddenBadges.map((badge_id) => badge_id.badge_id),
      canReorder,
    });
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.mehuPg, { badgeName: badgeId.name }));
  });
  onPress = tmp2(7277)((badge_id) => {
    if (hiddenBadges.some((badge_id) => badge_id.badge_id === badge_id.badge_id)) {
      closure_18(badge_id);
    } else if (set.has(badge_id.badge_id)) {
      const _HermesInternal = HermesInternal;
      const obj2 = { text: null };
      const combined = "BADGE_ALWAYS_VISIBLE-" + badge_id.badge_id;
      const intl = util.intl;
      const obj = ToastActionCreatorsDefault;
      obj2.text = intl.string(BadgeUtils.getAlwaysVisibleCopy(badge_id.badge_id));
      obj.open(combined, obj2);
    }
  });
  closure_20 = tmp2(7277)((badgeId) => {
    const obj = PendingBadgeSettings;
    const result = obj.setPendingBadgeVisibility({
      badgeId: badgeId.badge_id,
      hidden: true,
      reorderableBadgeIds: memo2,
      hiddenBadgeIds: hiddenBadges.map((badge_id) => badge_id.badge_id),
      canReorder,
    });
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.q3t0Ht, { count: 1 }));
  });
  onSetHidden = tmp2(7277)((arg0, arg1) => {
    if (arg1) {
      closure_20(arg0);
    } else {
      closure_18(arg0);
    }
  });
  const tmp5Result16 = require("../../../../_runtime/metro/01652__.js");
  const bottomSheetWidth = require("Sheet/BottomSheet").useBottomSheetWidth();
  const tmp5Result17 = require("Sheet/BottomSheet");
  badgeTileSize = require("BadgeGrid").getBadgeTileSize(bottomSheetWidth);
  const sum1 = fixedBadges.length + reorderableBadges.length + hiddenBadges.length;
  const rounded = Math.ceil(sum1 / tmp5(16725).BADGE_GRID_COLUMNS);
  let num = 0;
  if (rounded > 0) {
    let result = rounded * badgeTileSize;
    const diff = rounded - 1;
    num = result + diff * tmp5(16725).BADGE_GRID_GAP;
  }
  const tmp5Result18 = require("BadgeGrid");
  animatedRef = require("../../../../_runtime/metro/01652__.js").useAnimatedRef();
  const tmp5Result19 = require("../../../../_runtime/metro/01652__.js");
  scrollOffset = require("../../../../_runtime/metro/01652__.js").useScrollOffset(animatedRef);
  const tmp5Result20 = require("../../../../_runtime/metro/01652__.js");
  sharedValue2 = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const tmp5Result21 = require("../../../../_runtime/metro/01652__.js");
  const sharedValue3 = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const tmp5Result22 = require("../../../../_runtime/metro/01652__.js");
  const items15 = [
    closure_35,
    sharedValue2,
    sharedValue3,
    16.666666666666668,
    700,
    require("../../../../_runtime/metro/01652__.js").scrollTo,
    animatedRef,
    roundToNearestPixelDefault,
    scrollOffset,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41] = items15;
  class CustomizeBadgesSheetTsx14 {
    constructor(arg0) {
      timeSincePreviousFrame = analyticsLocations.timeSincePreviousFrame;
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
              tmp10 = closure_4(
                closure_5,
                0,
                Math.max(closure_6(closure_7.get() + (value * closure_3 * value1) / 1000), 0),
                false,
              );
            }
          }
        }
      }
      return;
    }
  }
  const items16 = [tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41];
  CustomizeBadgesSheetTsx14.__closure = items16;
  CustomizeBadgesSheetTsx14.__workletHash = 4169091470516;
  CustomizeBadgesSheetTsx14.__initData = tmp33;
  frameCallback = require("../../../../_runtime/metro/01652__.js").useFrameCallback(CustomizeBadgesSheetTsx14, false);
  const items17 = [frameCallback];
  const callback1 = obj4.useCallback((arg0) => {
    frameCallback.setActive(arg0);
  }, items17);
  const tmp5Result23 = require("../../../../_runtime/metro/01652__.js");
  const items18 = [closure_36, sharedValue2];
  _require = undefined;
  [tmp44, tmp45] = items18;
  class CustomizeBadgesSheetTsx15 {
    constructor() {
      return 0 !== closure_0.get();
    }
  }
  const items19 = [tmp45];
  CustomizeBadgesSheetTsx15.__closure = items19;
  CustomizeBadgesSheetTsx15.__workletHash = 17434103373145;
  CustomizeBadgesSheetTsx15.__initData = tmp44;
  const items20 = [closure_37, sharedValue3, require("../../../../_runtime/metro/01705__.js").scheduleOnRN, callback1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp46, tmp47, tmp48, tmp49] = items20;
  class CustomizeBadgesSheetTsx16 {
    constructor(arg0, arg1) {
      tmp = null != arg1 && analyticsLocations !== arg1;
      if (tmp) {
        tmp2 = closure_0;
        num = 0;
        result = closure_0.set(0);
        tmp4 = closure_1;
        tmp5 = closure_2;
        tmp6 = closure_1(closure_2, analyticsLocations);
      }
      return;
    }
  }
  const items21 = [tmp47, tmp48, tmp49];
  CustomizeBadgesSheetTsx16.__closure = items21;
  CustomizeBadgesSheetTsx16.__workletHash = 12780194212895;
  CustomizeBadgesSheetTsx16.__initData = tmp46;
  const animatedReaction = require("../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    CustomizeBadgesSheetTsx15,
    CustomizeBadgesSheetTsx16,
  );
  if (hasCatalog) {
    const obj5 = { style: tmp.gridInset, children: null };
    let tmp56 = !stateFromStores1;
    if (!stateFromStores1) {
      const obj6 = {
        style: tmp.upsell,
        ctaText: null,
        cardStyle: null,
        contentStyle: null,
        ctaStyle: null,
        showLinearGradient: true,
        onPress: null,
        children: null,
      };
      const intl2 = tmp5(1113).intl;
      obj6.ctaText = intl2.string(tmp5(1113).t.pj0XBN);
      ({ upsellCard: obj22.cardStyle, upsellContent: obj22.contentStyle, upsellCta: obj22.ctaStyle } = tmp);
      obj6.onPress = callback;
      const obj7 = { variant: "body-sm/normal", style: tmp.upsellText, children: null };
      const intl3 = tmp5(1113).intl;
      obj7.children = intl3.string(tmp5(1113).t.JrOki0);
      obj6.children = memo2(tmp5(5761).Text, obj7);
      tmp56 = memo2(tmp2(16726), obj6);
      const tmp2Result = tmp2(16726);
    }
    const items22 = [tmp56];
    const obj8 = { accessibilityRole: "list", style: null, children: null };
    const items23 = [tmp.grid];
    const obj9 = { height: num };
    items23[1] = obj9;
    obj8.style = items23;
    const items24 = [
      fixedBadges.map((badge, index) =>
        gesture(
          closure_21,
          { badge, index, tileSize: badgeTileSize, alwaysVisible: set.has(badge.badge_id), onPress },
          badge.badge_id,
        ),
      ),
      reorderableBadges.map((badge, index) => {
        if (c2) {
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
            scrollOffset,
            autoScrollSpeed: sharedValue2,
            onCommitOrder,
            onSetHidden,
            onPress,
          };
          let tmpResult = gesture(closure_34, obj2, badge.badge_id);
        } else {
          const obj = {
            badge,
            index: fixedBadges.length + index,
            tileSize: badgeTileSize,
            alwaysVisible: set.has(badge.badge_id),
            onPress,
            onSetHidden,
          };
          tmpResult = gesture(onSetHidden, obj, badge.badge_id);
        }
        return tmpResult;
      }),
      hiddenBadges.map((badge, index) =>
        gesture(
          onSetHidden,
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
    obj8.children = items24;
    items22[1] = sharedValue(c4, obj8);
    obj5.children = items22;
    let tmp51Result = tmp54(tmp55, obj5);
  } else {
    if (stateFromStoresObject.hasCatalogError) {
      const obj10 = { style: tmp.message, accessibilityRole: "alert", children: null };
      const obj11 = { variant: "body-md/normal", color: "text-muted", style: tmp.messageText, children: null };
      let intl = tmp5(1113).intl;
      obj11.children = intl.string(tmp5(1113).t["rTU7/z"]);
      obj10.children = tmp51(tmp5(5761).Text, obj11);
      let obj12 = obj10;
    } else {
      obj12 = { style: tmp.message, children: tmp51(tmp5(7095).ActivityIndicator, { animating: true, size: "large" }) };
    }
    tmp51Result = tmp51(c4, obj12);
  }
  const obj13 = {
    startExpanded: true,
    scrollable: true,
    dismissAccessibilityLabel: null,
    header: null,
    children: null,
  };
  const intl4 = tmp5(1113).intl;
  obj13.dismissAccessibilityLabel = intl4.string(require("util").t.x5SfWU);
  const obj14 = { title: null, subtitle: null };
  const intl5 = tmp5(1113).intl;
  obj14.title = intl5.string(require("util").t.x5SfWU);
  const intl6 = tmp5(1113).intl;
  const t = tmp5(1113).t;
  obj14.subtitle = intl6.string(stateFromStores1 ? t["Vzc4+8"] : t.ZuXSRp);
  obj13.header = memo2(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj14);
  obj13.children = memo2(require("BottomSheetModal").BottomSheetScrollView, {
    ref: animatedRef,
    contentContainerStyle: { paddingBottom: sum },
    children: tmp51Result,
  });
  return memo2(require("Sheet/BottomSheet").BottomSheet, obj13);
}
