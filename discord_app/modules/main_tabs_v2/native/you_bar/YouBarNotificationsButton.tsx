// === Module 15649: ? ===

// Module 15649
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import getTimeSafe from "getTimeSafe" /* 10850 */;
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT" /* 14450 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
let c3 = importAllResult;
({ YOU_BAR_SPRING_CONFIG: closure_6, YOU_BAR_BUTTON_HIT_SLOP: error, YOU_BAR_BUTTON_ICON_SIZE } = CONNECTION_BANNER_HEIGHT);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
obj[2] = obj;
let closure_10 = createCacheKey.createStyles(obj);
let closure_11 = { code: "function YouBarNotificationsButtonTsx1(){const{withSpring,badgeCount,YOU_BAR_SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.space.PX_4:0,YOU_BAR_SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)};}" };
const memoResult = importAllResult.memo(function YouBarNotificationsButton(hasNameplate) {
  hasNameplate = hasNameplate.hasNameplate;
  let isForLaterExperimentOn;
  let callback;
  const tmp = callback2();
  const value = isForLaterExperimentOn(callback[7])().value;
  const _require = value;
  _require(callback[8]);
  const fn = function l() {
    let obj = _undefined(callback[9]);
    let num = 0;
    if (_undefined > 0) {
      num = 1;
    }
    obj = { transform: null, marginLeft: null, opacity: null };
    obj = { scaleX: obj.withSpring(num, closure_1_6) };
    const items = [obj];
    obj[0] = items;
    let tmpResult = _undefined(callback[9]);
    let num2 = 0;
    if (_undefined > 0) {
      num2 = isForLaterExperimentOn(callback[6]).space.PX_4;
    }
    obj[1] = tmpResult.withSpring(num2, closure_1_6);
    tmpResult = _undefined(callback[9]);
    let num3 = 0;
    if (_undefined > 0) {
      num3 = 1;
    }
    obj[2] = tmpResult.withSpring(num3, closure_1_6);
    return obj;
  };
  let obj = { withSpring: _require(callback[9]).withSpring, badgeCount: value, YOU_BAR_SPRING_CONFIG: closure_6, tokens: isForLaterExperimentOn(callback[6]) };
  fn.__closure = obj;
  fn.__workletHash = 11181198364048;
  fn.__initData = closure_11;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = _require(callback[10]);
  isForLaterExperimentOn = obj2.useIsForLaterExperimentOn("YouBar");
  let obj3 = _require(callback[10]);
  let hasForLaterAccess = obj3.useHasForLaterAccess("YouBar");
  if (isForLaterExperimentOn) {
    if (!hasForLaterAccess) {
      hasForLaterAccess = savedMessageCount.getSavedMessageCount() > 0;
    }
    isForLaterExperimentOn = hasForLaterAccess;
  }
  let items = [savedMessageCount];
  const stateFromStores = _require(callback[11]).useStateFromStores(items, () => overdueMessageReminderCount.getOverdueMessageReminderCount());
  let tmp10 = isForLaterExperimentOn;
  if (isForLaterExperimentOn) {
    tmp10 = stateFromStores > 0;
  }
  if (tmp10) {
    tmp10 = 0 === value;
  }
  const items1 = [isForLaterExperimentOn];
  callback = importAllResult.useCallback(() => {
    if (isForLaterExperimentOn) {
      const result = _undefined(callback[12]).triggerHapticFeedback(_undefined(callback[12]).HapticFeedbackTypes.SOFT);
      const obj = _undefined(callback[12]);
      _undefined(callback[13]).showForLaterModal(_undefined(callback[14]).SavedMessageSortTypes.BOOKMARK);
      const obj2 = _undefined(callback[13]);
    }
  }, items1);
  const items2 = [isForLaterExperimentOn];
  const items3 = [callback];
  const memo = importAllResult.useMemo(() => {
    const items = [];
    if (isForLaterExperimentOn) {
      const obj = { name: "open-bookmarks", label: null };
      const intl = _undefined(callback[15]).intl;
      obj[1] = intl.string(_undefined(callback[15]).t["2pAkDA"]);
      items.push(obj);
    }
    return items;
  }, items2);
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    if ("open-bookmarks" === nativeEvent.nativeEvent.actionName) {
      callback();
    }
  }, items3);
  obj = { size: "custom", style: tmp.icon, color: null };
  let str;
  if (hasNameplate) {
    str = "white";
  }
  obj[2] = str;
  const tmp2 = isForLaterExperimentOn;
  const tmp4Result = _require(callback[11]);
  let intl = tmp4(tmp3[15]).intl;
  const formatToPlainStringResult = intl.formatToPlainString(_require(callback[15]).t.kedGua, { count: value });
  let combined = formatToPlainStringResult;
  if (tmp10) {
    const intl2 = tmp4(tmp3[15]).intl;
    obj1 = { count: null };
    obj1[0] = stateFromStores;
    const _HermesInternal = HermesInternal;
    combined = "" + formatToPlainStringResult + ", " + intl2.formatToPlainString(tmp4(tmp3[15]).t.yBmFPA, obj1);
  }
  obj2 = { accessibilityLabel: combined, accessibilityActions: memo, onAccessibilityAction: callback1, variant: null, size: "sm", icon: null, onPress: null, onLongPress: null, hitSlop: null };
  let str4 = "tertiary";
  if (hasNameplate) {
    str4 = "secondary-overlay";
  }
  obj3 = { children: null };
  obj2[3] = str4;
  const obj4 = { style: tmp.iconContainer, children: null };
  const tmp14Result = callback(_require(callback[16]).BellIcon, obj);
  const items4 = [callback(_require(callback[17]).YouBarButtonIcon, { icon: callback(_require(callback[16]).BellIcon, obj), hasBadge: tmp10, badgeStyle: tmp.overdueReminderDot }), ];
  const obj5 = { icon: callback(_require(callback[16]).BellIcon, obj), hasBadge: tmp10, badgeStyle: tmp.overdueReminderDot };
  items4[1] = callback(tmp2(callback[8]).View, { style: animatedStyle, children: callback(_require(callback[19]).Badge, { value }) });
  obj4[1] = items4;
  obj2[5] = callback(View, obj4);
  obj2[6] = function onPress() {
    const rootNavigationRef = _undefined(callback[20]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.navigate("notifications", { inNestedNavigator: true });
    }
  };
  obj2[7] = callback;
  obj2[8] = closure_7;
  obj3[0] = callback(_require(callback[18]).IconButton, obj2);
  return callback(_require(callback[17]).YouBarButtonContainer, obj3);
});
let result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNotificationsButton.tsx");

export default memoResult;