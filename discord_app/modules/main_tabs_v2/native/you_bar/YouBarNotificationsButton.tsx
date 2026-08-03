// === Module 15352: ? ===

// Module 15352
import importAllResult from "getRootNavigationRef";
import { View } from "BellIcon";
import getTimeSafe from "getTimeSafe";
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let YOU_BAR_BUTTON_ICON_SIZE;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
let c3 = importAllResult;
({ YOU_BAR_SPRING_CONFIG: closure_6, YOU_BAR_BUTTON_HIT_SLOP: error, YOU_BAR_BUTTON_ICON_SIZE } = CONNECTION_BANNER_HEIGHT);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE }, iconContainer: { display: "flex", flexDirection: "row", alignItems: "center" } });
let closure_11 = { code: "function YouBarNotificationsButtonTsx1(){const{withSpring,badgeCount,YOU_BAR_SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.space.PX_4:0,YOU_BAR_SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)};}" };
const memoResult = importAllResult.memo(function YouBarNotificationsButton(hasNameplate) {
  hasNameplate = hasNameplate.hasNameplate;
  let _require;
  let isForLaterExperimentOn;
  let callback;
  const tmp = callback();
  const value = isForLaterExperimentOn(callback[6])().value;
  _require = value;
  let obj = _require(callback[7]);
  const fn = function u() {
    let obj = _undefined(callback[8]);
    let num = 0;
    if (_undefined > 0) {
      num = 1;
    }
    obj = { transform: null, marginLeft: null, opacity: null };
    obj = { scaleX: obj.withSpring(num, outer1_6) };
    const items = [obj];
    obj[0] = items;
    let tmpResult = tmp(tmp2[8]);
    let num2 = 0;
    if (_undefined > 0) {
      num2 = isForLaterExperimentOn(tmp2[9]).space.PX_4;
    }
    obj[1] = tmpResult.withSpring(num2, outer1_6);
    tmpResult = tmp(tmp2[8]);
    let num3 = 0;
    if (_undefined > 0) {
      num3 = 1;
    }
    obj[2] = tmpResult.withSpring(num3, outer1_6);
    return obj;
  };
  obj = { withSpring: _require(callback[8]).withSpring, badgeCount: value, YOU_BAR_SPRING_CONFIG: closure_6, tokens: isForLaterExperimentOn(callback[9]) };
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
  let items = [isForLaterExperimentOn];
  callback = importAllResult.useCallback(() => {
    if (isForLaterExperimentOn) {
      const result = _undefined(callback[11]).triggerHapticFeedback(_undefined(callback[11]).HapticFeedbackTypes.SOFT);
      const obj = _undefined(callback[11]);
      _undefined(callback[12]).showForLaterModal(_undefined(callback[13]).SavedMessageSortTypes.BOOKMARK);
      const obj2 = _undefined(callback[12]);
    }
  }, items);
  const items1 = [isForLaterExperimentOn];
  const items2 = [callback];
  const memo = importAllResult.useMemo(() => {
    const items = [];
    if (isForLaterExperimentOn) {
      const obj = { name: "open-bookmarks", label: null };
      const intl = _undefined(callback[14]).intl;
      obj[1] = intl.string(_undefined(callback[14]).t["2pAkDA"]);
      items.push(obj);
    }
    return items;
  }, items1);
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    if ("open-bookmarks" === nativeEvent.nativeEvent.actionName) {
      callback();
    }
  }, items2);
  obj = { accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null, variant: null, size: "sm", icon: null, onPress: null, onLongPress: null, hitSlop: null };
  let intl = tmp4(tmp3[14]).intl;
  obj[0] = intl.formatToPlainString(_require(callback[14]).t.kedGua, { count: value });
  obj[1] = memo;
  obj[2] = callback1;
  let str = "tertiary";
  if (hasNameplate) {
    str = "secondary-overlay";
  }
  obj[3] = str;
  const obj1 = { style: tmp.iconContainer, children: null };
  obj2 = { size: "custom", style: tmp.icon, color: null };
  let str2;
  if (hasNameplate) {
    str2 = "white";
  }
  obj3 = { children: null };
  obj2[2] = str2;
  const items3 = [closure_8(_require(callback[17]).BellIcon, obj2), ];
  const obj4 = { style: animatedStyle, children: null };
  obj4[1] = closure_8(_require(callback[18]).Badge, { value });
  items3[1] = closure_8(isForLaterExperimentOn(callback[7]).View, obj4);
  obj1[1] = items3;
  obj[5] = closure_9(View, obj1);
  obj[6] = function onPress() {
    const rootNavigationRef = _undefined(callback[19]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.navigate("notifications", { inNestedNavigator: true });
    }
  };
  obj[7] = callback;
  obj[8] = closure_7;
  obj3[0] = closure_8(_require(callback[16]).IconButton, obj);
  return closure_8(_require(callback[15]).YouBarButtonContainer, obj3);
});
let result = require("getTimeSafe").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNotificationsButton.tsx");

export default memoResult;