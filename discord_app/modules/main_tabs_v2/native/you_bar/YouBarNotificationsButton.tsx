// === Module 16393: YouBarNotificationsButton ===

// Module 16393 (YouBarNotificationsButton)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import spring from "spring" /* 4974 */;
import showForLaterModal from "showForLaterModal" /* 7859 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7860 */;
import noop from "module_19" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11660 */;

require = fn;
const View = fn(17).View;
const YouBarConstants = fn(15098);
({ YOU_BAR_SPRING_CONFIG: metroRequire, YOU_BAR_BUTTON_HIT_SLOP: closure_7, YOU_BAR_BUTTON_ICON_SIZE } = YouBarConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let obj = { icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE }, iconContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, overdueReminderDot: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
obj.overdueReminderDot = obj;
let closure_10 = createStyles.createStyles(obj);
const __initData = { code: "function YouBarNotificationsButtonTsx1(){const{withSpring,badgeCount,YOU_BAR_SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.space.PX_4:0,YOU_BAR_SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNotificationsButton.tsx");

export default noop.memo(function YouBarNotificationsButton(hasNameplate) {
  hasNameplate = hasNameplate.hasNameplate;
  let isForLaterExperimentOn;
  let onLongPress;
  const tmp = closure_10();
  value = isForLaterExperimentOn(onLongPress[7])().value;
  _require = value;
  require("ReanimatedRexport");
  const fn = function l() {
    let obj = spring;
    let num = 0;
    if (c0 > 0) {
      num = 1;
    }
    obj = { transform: null, marginLeft: null, opacity: null };
    obj = { scaleX: obj.withSpring(num, YOU_BAR_SPRING_CONFIG) };
    const items = [obj];
    obj.transform = items;
    let tmpResult = tmp(4974);
    let num2 = 0;
    if (c0 > 0) {
      num2 = nativeDefault.space.PX_4;
    }
    obj.marginLeft = tmpResult.withSpring(num2, YOU_BAR_SPRING_CONFIG);
    tmpResult = tmp(4974);
    let num3 = 0;
    if (c0 > 0) {
      num3 = 1;
    }
    obj.opacity = tmpResult.withSpring(num3, YOU_BAR_SPRING_CONFIG);
    return obj;
  };
  let obj = { withSpring: require("spring").withSpring, badgeCount: value, YOU_BAR_SPRING_CONFIG, tokens: isForLaterExperimentOn(onLongPress[6]) };
  fn.__closure = obj;
  fn.__workletHash = 11181198364048;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = require("ForLaterExperiment");
  isForLaterExperimentOn = obj2.useIsForLaterExperimentOn("YouBar");
  let obj3 = require("ForLaterExperiment");
  let hasForLaterAccess = obj3.useHasForLaterAccess("YouBar");
  if (isForLaterExperimentOn) {
    if (!hasForLaterAccess) {
      hasForLaterAccess = SavedMessagesStore.getSavedMessageCount() > 0;
    }
    isForLaterExperimentOn = hasForLaterAccess;
  }
  let items = [SavedMessagesStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => overdueMessageReminderCount.getOverdueMessageReminderCount());
  let tmp10 = isForLaterExperimentOn;
  if (isForLaterExperimentOn) {
    tmp10 = stateFromStores > 0;
  }
  if (tmp10) {
    tmp10 = 0 === value;
  }
  const items1 = [isForLaterExperimentOn];
  onLongPress = noop.useCallback(() => {
    if (isForLaterExperimentOn) {
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.SOFT);
      showForLaterModal.showForLaterModal(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
    }
  }, items1);
  const items2 = [isForLaterExperimentOn];
  const items3 = [onLongPress];
  const memo = noop.useMemo(() => {
    const items = [];
    if (isForLaterExperimentOn) {
      const obj = { name: "open-bookmarks", label: null };
      const intl = util.intl;
      obj.label = intl.string(util.t["2pAkDA"]);
      items.push(obj);
    }
    return items;
  }, items2);
  const callback1 = noop.useCallback((nativeEvent) => {
    if ("open-bookmarks" === nativeEvent.nativeEvent.actionName) {
      callback();
    }
  }, items3);
  obj = { size: "custom", style: tmp.icon, color: null };
  let str;
  if (hasNameplate) {
    str = "white";
  }
  obj.color = str;
  const tmp2 = isForLaterExperimentOn;
  const tmp4Result = require("initialize");
  let intl = tmp4(tmp3[15]).intl;
  const formatToPlainStringResult = intl.formatToPlainString(require("util").t.kedGua, { count: value });
  let combined = formatToPlainStringResult;
  if (tmp10) {
    const intl2 = tmp4(tmp3[15]).intl;
    const obj1 = { count: stateFromStores };
    const _HermesInternal = HermesInternal;
    combined = "" + formatToPlainStringResult + ", " + intl2.formatToPlainString(tmp4(tmp3[15]).t.yBmFPA, obj1);
  }
  obj2 = { accessibilityLabel: combined, accessibilityActions: memo, onAccessibilityAction: callback1, variant: null, size: "sm", icon: null, onPress: null, onLongPress: null, hitSlop: null };
  let str4 = "tertiary";
  if (hasNameplate) {
    str4 = "secondary-overlay";
  }
  obj3 = { children: null };
  obj2.variant = str4;
  const obj4 = { style: tmp.iconContainer, children: null };
  const tmp14Result = closure_8(require("BellIcon").BellIcon, obj);
  const items4 = [closure_8(require("YouBarButton").YouBarButtonIcon, { icon: closure_8(require("BellIcon").BellIcon, obj), hasBadge: tmp10, badgeStyle: tmp.overdueReminderDot }), ];
  const obj5 = { icon: closure_8(require("BellIcon").BellIcon, obj), hasBadge: tmp10, badgeStyle: tmp.overdueReminderDot };
  items4[1] = closure_8(tmp2(onLongPress[8]).View, { style: animatedStyle, children: closure_8(require("native").Badge, { value }) });
  obj4.children = items4;
  obj2.icon = closure_9(View, obj4);
  obj2.onPress = function onPress() {
    const rootNavigationRef = _undefined(callback[20]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.navigate("notifications", { inNestedNavigator: true });
    }
  };
  obj2.onLongPress = onLongPress;
  obj2.hitSlop = hitSlop;
  obj3.children = closure_8(require("IconButton").IconButton, obj2);
  return closure_8(require("YouBarButton").YouBarButtonContainer, obj3);
});