// discord_app/modules/main_tabs_v2/native/you_bar/YouBarNotificationsButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import SavedMessagesStore from "../../../saved_messages/SavedMessagesStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const YouBarConstants = fn(17004);
({
  YOU_BAR_SPRING_CONFIG: metroRequire,
  YOU_BAR_BUTTON_HIT_SLOP: closure_7,
  YOU_BAR_BUTTON_ICON_SIZE,
} = YouBarConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5009);
let obj = {
  icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE },
  iconContainer: { display: "flex", flexDirection: "row", alignItems: "center" },
  overdueReminderDot: { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION },
};
let closure_10 = createStyles.createStyles(obj);
const __initData = {
  code: "function YouBarNotificationsButtonTsx1(){const{withSpring,badgeCount,YOU_BAR_SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.space.PX_4:0,YOU_BAR_SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)};}",
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNotificationsButton.tsx");

export default noop.memo(function YouBarNotificationsButton(hasNameplate) {
  hasNameplate = hasNameplate.hasNameplate;
  let onLongPress;
  const tmp = closure_10();
  value = onLongPress(18413)().value;
  _require = value;
  const fn = function u() {
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
  const tmp2 = onLongPress;
  fn.__closure = {
    withSpring: require("spring").withSpring,
    badgeCount: value,
    YOU_BAR_SPRING_CONFIG,
    tokens: onLongPress(575),
  };
  fn.__workletHash = 11181198364048;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = {
    withSpring: require("spring").withSpring,
    badgeCount: value,
    YOU_BAR_SPRING_CONFIG,
    tokens: onLongPress(575),
  };
  let items = [SavedMessagesStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    overdueMessageReminderCount.getOverdueMessageReminderCount(),
  );
  onLongPress = noop.useCallback(() => {
    const result = _undefined(5255).triggerHapticFeedback(_undefined(5255).HapticFeedbackTypes.SOFT);
    const obj = _undefined(5255);
    _undefined(11131).showForLaterModal(_undefined(10172).SavedMessageSortTypes.BOOKMARK);
  }, []);
  const items1 = [onLongPress];
  const memo = noop.useMemo(() => {
    const obj = { name: "open-bookmarks", label: null };
    const intl = _undefined(1114).intl;
    obj.label = intl.string(_undefined(1114).t["2pAkDA"]);
    const items = [obj];
    return items;
  }, []);
  const callback1 = noop.useCallback((nativeEvent) => {
    if ("open-bookmarks" === nativeEvent.nativeEvent.actionName) {
      callback();
    }
  }, items1);
  const obj4 = { size: "custom", style: tmp.icon, color: null };
  let str;
  if (hasNameplate) {
    str = "white";
  }
  obj4.color = str;
  let obj3 = require("initialize");
  let intl = tmp4(1114).intl;
  const formatToPlainStringResult = intl.formatToPlainString(require("util").t.kedGua, { count: value });
  let combined = formatToPlainStringResult;
  if (stateFromStores > 0 && 0 === value) {
    const intl2 = tmp4(1114).intl;
    const obj5 = { count: stateFromStores };
    const _HermesInternal = HermesInternal;
    combined = "" + formatToPlainStringResult + ", " + intl2.formatToPlainString(tmp4(1114).t.yBmFPA, obj5);
  }
  const obj6 = {
    accessibilityLabel: combined,
    accessibilityActions: memo,
    onAccessibilityAction: callback1,
    variant: null,
    size: "sm",
    icon: null,
    onPress: null,
    onLongPress: null,
    hitSlop: null,
  };
  let str4 = "secondary-overlay";
  if (!hasNameplate) {
    let str5 = "tertiary";
    if (value > 0) {
      str5 = "secondary";
    }
    str4 = str5;
  }
  const obj7 = { children: null };
  obj6.variant = str4;
  const obj8 = { style: tmp.iconContainer, children: null };
  const tmp11Result = closure_8(require("BellIcon").BellIcon, obj4);
  const items2 = [
    closure_8(require("YouBarButton").YouBarButtonIcon, {
      icon: closure_8(require("BellIcon").BellIcon, obj4),
      hasBadge: stateFromStores > 0 && 0 === value,
      badgeStyle: tmp.overdueReminderDot,
    }),
  ];
  const obj9 = {
    icon: closure_8(require("BellIcon").BellIcon, obj4),
    hasBadge: stateFromStores > 0 && 0 === value,
    badgeStyle: tmp.overdueReminderDot,
  };
  items2[1] = closure_8(tmp2(5090).View, {
    style: animatedStyle,
    children: closure_8(require("native").Badge, { value }),
  });
  obj8.children = items2;
  obj6.icon = closure_9(View, obj8);
  obj6.onPress = function onPress() {
    const rootNavigationRef = _undefined(5194).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.navigate("notifications", { inNestedNavigator: true });
    }
  };
  obj6.onLongPress = onLongPress;
  obj6.hitSlop = hitSlop;
  obj7.children = closure_8(require("IconButton").IconButton, obj6);
  return closure_8(require("YouBarButton").YouBarButtonContainer, obj7);
});
