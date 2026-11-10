// === Module 18849: YouBarNotificationsButton ===

// Module 18849 (YouBarNotificationsButton)
import nativeDefault from "native" /* 575 */;
import useNotificationsTabBadgeDefault from "useNotificationsTabBadge" /* 16919 */;
import noop from "module_19" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 10316 */;

const _modDef1652 = tmp2(1652);
const require = fn;
const View = fn(17).View;
const YouBarConstants = fn(17423);
({ YOU_BAR_SPRING_CONFIG: closure_6, YOU_BAR_BUTTON_HIT_SLOP: metroImportDefault, YOU_BAR_BUTTON_ICON_SIZE } = YouBarConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5142);
let obj = { icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE }, iconContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, overdueReminderDot: { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION } };
let closure_10 = createStyles.createStyles(obj);
let closure_11 = { code: "(function YouBarNotificationsButtonTsx1(){let[withSpring,badgeCount,YOU_BAR_SPRING_CONFIG,tokens]=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.space.PX_4:0,YOU_BAR_SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)};})" };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNotificationsButton.tsx");

export default noop.memo(function YouBarNotificationsButton(hasNameplate) {
  hasNameplate = hasNameplate.hasNameplate;
  let onLongPress;
  const tmp = closure_10();
  value = useNotificationsTabBadgeDefault().value;
  items = [closure_11, onLongPress(5763).withSpring, value, closure_6, nativeDefault];
  onLongPress = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  class YouBarNotificationsButtonTsx1 {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_1;
      num = 0;
      if (closure_1 > 0) {
        num = 1;
      }
      obj = { transform: null, marginLeft: null, opacity: null };
      obj1 = { scaleX: tmp(num, closure_2) };
      tmp3 = closure_2;
      items = [];
      items[0] = obj1;
      obj.transform = items;
      num2 = 0;
      if (tmp2 > 0) {
        tmp4 = closure_3;
        num2 = closure_3.space.PX_4;
      }
      obj.marginLeft = tmp(num2, tmp3);
      num3 = 0;
      if (tmp2 > 0) {
        num3 = 1;
      }
      obj.opacity = tmp(num3, tmp3);
      return obj;
    }
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9];
  YouBarNotificationsButtonTsx1.__closure = items1;
  YouBarNotificationsButtonTsx1.__workletHash = 35233906729;
  YouBarNotificationsButtonTsx1.__initData = tmp5;
  const animatedStyle = onLongPress(1652).useAnimatedStyle(YouBarNotificationsButtonTsx1);
  let obj = onLongPress(1652);
  const items2 = [SavedMessagesStore];
  const stateFromStores = onLongPress(504).useStateFromStores(items2, () => overdueMessageReminderCount.getOverdueMessageReminderCount());
  onLongPress = noop.useCallback(() => {
    const result = callback(_undefined[11]).triggerHapticFeedback(callback(_undefined[11]).HapticFeedbackTypes.SOFT);
    const obj = callback(_undefined[11]);
    callback(_undefined[12]).showForLaterModal(callback(_undefined[13]).SavedMessageSortTypes.BOOKMARK);
  }, []);
  const items3 = [onLongPress];
  const memo = noop.useMemo(() => {
    const obj = { name: "open-bookmarks", label: null };
    const intl = callback(_undefined[14]).intl;
    obj.label = intl.string(callback(_undefined[14]).t["2pAkDA"]);
    items = [obj];
    return items;
  }, []);
  const callback1 = noop.useCallback((nativeEvent) => {
    if ("open-bookmarks" === nativeEvent.nativeEvent.actionName) {
      callback();
    }
  }, items3);
  const obj2 = { size: "custom", style: tmp.icon, color: null };
  let str;
  if (hasNameplate) {
    str = "white";
  }
  obj2.color = str;
  const tmp4Result = onLongPress(504);
  let intl = tmp4(1113).intl;
  const formatToPlainStringResult = intl.formatToPlainString(onLongPress(1113).t.kedGua, { count: value });
  let combined = formatToPlainStringResult;
  if (stateFromStores > 0 && 0 === value) {
    const intl2 = tmp4(1113).intl;
    const obj3 = { count: stateFromStores };
    const _HermesInternal = HermesInternal;
    combined = "" + formatToPlainStringResult + ", " + intl2.formatToPlainString(tmp4(1113).t.yBmFPA, obj3);
  }
  const obj4 = { accessibilityLabel: combined, accessibilityActions: memo, onAccessibilityAction: callback1, variant: null, size: "sm", icon: null, onPress: null, onLongPress: null, hitSlop: null };
  let str4 = "secondary-overlay";
  if (!hasNameplate) {
    let str5 = "tertiary";
    if (value > 0) {
      str5 = "secondary";
    }
    str4 = str5;
  }
  const obj5 = { children: null };
  obj4.variant = str4;
  const obj6 = { style: tmp.iconContainer, children: null };
  const tmp16Result = closure_8(onLongPress(9294).BellIcon, obj2);
  const items4 = [closure_8(onLongPress(18846).YouBarButtonIcon, { icon: closure_8(onLongPress(9294).BellIcon, obj2), hasBadge: stateFromStores > 0 && 0 === value, badgeStyle: tmp.overdueReminderDot }), ];
  const obj7 = { icon: closure_8(onLongPress(9294).BellIcon, obj2), hasBadge: stateFromStores > 0 && 0 === value, badgeStyle: tmp.overdueReminderDot };
  items4[1] = closure_8(_modDef1652.View, { style: animatedStyle, children: closure_8(onLongPress(1187).Badge, { value }) });
  obj6.children = items4;
  obj4.icon = closure_9(View, obj6);
  obj4.onPress = function onPress() {
    const rootNavigationRef = callback(_undefined[19]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.navigate("notifications", { inNestedNavigator: true });
    }
  };
  obj4.onLongPress = onLongPress;
  obj4.hitSlop = hitSlop;
  obj5.children = closure_8(onLongPress(8102).IconButton, obj4);
  return closure_8(onLongPress(18846).YouBarButtonContainer, obj5);
});