// === Module 16553: YouBarNotificationsButton ===

// Module 16553 (YouBarNotificationsButton)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import HapticUtils from "HapticUtils" /* 4608 */;
import spring from "spring" /* 5061 */;
import showForLaterModal from "showForLaterModal" /* 7980 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7981 */;
import noop from "module_19" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11810 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const YouBarConstants = fn(15210);
({ YOU_BAR_SPRING_CONFIG: metroRequire, YOU_BAR_BUTTON_HIT_SLOP: closure_7, YOU_BAR_BUTTON_ICON_SIZE } = YouBarConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4640);
let obj = { icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE }, iconContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, overdueReminderDot: { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION } };
let closure_10 = createStyles.createStyles(obj);
const __initData = { code: "function YouBarNotificationsButtonTsx1(){const{withSpring,badgeCount,YOU_BAR_SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.space.PX_4:0,YOU_BAR_SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)};}" };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNotificationsButton.tsx");

export default noop.memo(function YouBarNotificationsButton(hasNameplate) {
  hasNameplate = hasNameplate.hasNameplate;
  let isForLaterExperimentOn;
  let onLongPress;
  const tmp = closure_10();
  value = isForLaterExperimentOn(onLongPress[7])().value;
  _require = value;
  const fn = function l() {
    let num = 0;
    if (c0 > 0) {
      num = 1;
    }
    const obj2 = { transform: null, marginLeft: null, opacity: null };
    const items = [{ scaleX: spring.withSpring(num, YOU_BAR_SPRING_CONFIG) }];
    obj2.transform = items;
    const obj3 = { scaleX: spring.withSpring(num, YOU_BAR_SPRING_CONFIG) };
    let num2 = 0;
    if (c0 > 0) {
      num2 = nativeDefault.space.PX_4;
    }
    obj2.marginLeft = spring.withSpring(num2, YOU_BAR_SPRING_CONFIG);
    const tmpResult = spring;
    let num3 = 0;
    if (c0 > 0) {
      num3 = 1;
    }
    obj2.opacity = spring.withSpring(num3, YOU_BAR_SPRING_CONFIG);
    return obj2;
  };
  let obj = require("ReanimatedRexport");
  const tmp2 = isForLaterExperimentOn;
  fn.__closure = { withSpring: require("spring").withSpring, badgeCount: value, YOU_BAR_SPRING_CONFIG, tokens: isForLaterExperimentOn(onLongPress[6]) };
  fn.__workletHash = 11181198364048;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = { withSpring: require("spring").withSpring, badgeCount: value, YOU_BAR_SPRING_CONFIG, tokens: isForLaterExperimentOn(onLongPress[6]) };
  isForLaterExperimentOn = require("ForLaterExperiment").useIsForLaterExperimentOn("YouBar");
  let obj3 = require("ForLaterExperiment");
  let hasForLaterAccess = require("ForLaterExperiment").useHasForLaterAccess("YouBar");
  if (isForLaterExperimentOn) {
    if (!hasForLaterAccess) {
      hasForLaterAccess = SavedMessagesStore.getSavedMessageCount() > 0;
    }
    isForLaterExperimentOn = hasForLaterAccess;
  }
  const obj4 = require("ForLaterExperiment");
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
  const obj5 = { size: "custom", style: tmp.icon, color: null };
  let str;
  if (hasNameplate) {
    str = "white";
  }
  obj5.color = str;
  const tmp4Result = require("initialize");
  let intl = tmp4(tmp3[15]).intl;
  const formatToPlainStringResult = intl.formatToPlainString(require("util").t.kedGua, { count: value });
  let combined = formatToPlainStringResult;
  if (tmp10) {
    const intl2 = tmp4(tmp3[15]).intl;
    const obj6 = { count: stateFromStores };
    const _HermesInternal = HermesInternal;
    combined = "" + formatToPlainStringResult + ", " + intl2.formatToPlainString(tmp4(tmp3[15]).t.yBmFPA, obj6);
  }
  const obj7 = { accessibilityLabel: combined, accessibilityActions: memo, onAccessibilityAction: callback1, variant: null, size: "sm", icon: null, onPress: null, onLongPress: null, hitSlop: null };
  let str4 = "tertiary";
  if (hasNameplate) {
    str4 = "secondary-overlay";
  }
  const obj8 = { children: null };
  obj7.variant = str4;
  const obj9 = { style: tmp.iconContainer, children: null };
  const tmp14Result = closure_8(require("BellIcon").BellIcon, obj5);
  const items4 = [closure_8(require("YouBarButton").YouBarButtonIcon, { icon: closure_8(require("BellIcon").BellIcon, obj5), hasBadge: tmp10, badgeStyle: tmp.overdueReminderDot }), ];
  const obj10 = { icon: closure_8(require("BellIcon").BellIcon, obj5), hasBadge: tmp10, badgeStyle: tmp.overdueReminderDot };
  items4[1] = closure_8(tmp2(onLongPress[8]).View, { style: animatedStyle, children: closure_8(require("native").Badge, { value }) });
  obj9.children = items4;
  obj7.icon = closure_9(View, obj9);
  obj7.onPress = function onPress() {
    const rootNavigationRef = _undefined(callback[20]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.navigate("notifications", { inNestedNavigator: true });
    }
  };
  obj7.onLongPress = onLongPress;
  obj7.hitSlop = hitSlop;
  obj8.children = closure_8(require("IconButton").IconButton, obj7);
  return closure_8(require("YouBarButton").YouBarButtonContainer, obj8);
});