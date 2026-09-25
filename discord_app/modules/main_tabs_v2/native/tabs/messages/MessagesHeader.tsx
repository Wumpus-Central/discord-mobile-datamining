// === Module 15634: MessagesHeader ===

// Module 15634 (MessagesHeader)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5273 */;
import ButtonConstants from "ButtonConstants" /* 5279 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 9567 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 11655 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const SearchTypes = fn(1074).SearchTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const PX_8 = nativeDefault.space.PX_8;
const createStyles = fn(4829);
let obj = { headerPanel: { position: "relative", padding: PX_16, paddingBottom: nativeDefault.modules.mobile.MESSAGES_HEADER_PADDING_BOTTOM }, headerPanelTitle: null, headerPanelButtons: null, headerBorder: null };
let obj3 = { position: "relative", padding: PX_16, paddingBottom: nativeDefault.modules.mobile.MESSAGES_HEADER_PADDING_BOTTOM };
obj.headerPanelTitle = { paddingBottom: PX_8, flexDirection: "row", gap: nativeDefault.space.PX_8, justifyContent: "space-between" };
let obj4 = { paddingBottom: PX_8, flexDirection: "row", gap: nativeDefault.space.PX_8, justifyContent: "space-between" };
obj.headerPanelButtons = { height: fn(5279).SMALL_BUTTON_HEIGHT, gap: nativeDefault.modules.mobile.MESSAGES_HEADER_BUTTON_GAP, flexDirection: nativeDefault.modules.mobile.MESSAGES_HEADER_BUTTON_LAYOUT, alignItems: "center" };
let obj6 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj6.backgroundColor = nativeDefault.colors.BORDER_SUBTLE;
obj6.top = undefined;
obj6.height = 1;
obj.headerBorder = obj6;
let closure_10 = createStyles.createStyles(obj);
const __initData = { code: "function MessagesHeaderTsx1(){const{withSpring,scrollPosition}=this.__closure;return{opacity:withSpring(scrollPosition.get()>0?1:0)};}" };
let obj5 = { height: fn(5279).SMALL_BUTTON_HEIGHT, gap: nativeDefault.modules.mobile.MESSAGES_HEADER_BUTTON_GAP, flexDirection: nativeDefault.modules.mobile.MESSAGES_HEADER_BUTTON_LAYOUT, alignItems: "center" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesHeader.tsx");

export default noop.memo(function MessagesHeader(height) {
  height = height.height;
  const scrollPosition = height.scrollPosition;
  const tmp = closure_10();
  dependencyMap = tmp;
  let items = [tmp, height];
  const memo = noop.useMemo(() => {
    const items = [headerPanel.headerPanel, { height }];
    return items;
  }, items);
  const fn = function c() {
    let num = 0;
    if (scrollPosition.get() > 0) {
      num = 1;
    }
    return { opacity: spring.withSpring(num) };
  };
  let obj = height(4563);
  fn.__closure = { withSpring: height(5273).withSpring, scrollPosition };
  fn.__workletHash = 17233409273245;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = { withSpring: height(5273).withSpring, scrollPosition };
  const isHomeDrawerEnabled = height(15629).useIsHomeDrawerEnabled();
  const callback = noop.useCallback(() => {
    const rootNavigationRef = height(headerPanel[12]).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("message-requests");
    }
  }, []);
  const callback1 = noop.useCallback(() => {
    const rootNavigationRef = height(headerPanel[12]).getRootNavigationRef();
    if (rootNavigationRef != null) {
      const obj2 = { screen: "add-friends", params: { sourcePage: "Messages Tab", presentation: "card" } };
      rootNavigationRef.navigate("friends", obj2);
    }
  }, []);
  const callback2 = noop.useCallback(() => {
    const rootNavigationRef = height(headerPanel[12]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      const obj3 = { type: constants.DMS };
      const result = scrollPosition(headerPanel[13]).navigateToSearchWithPrefetch(rootNavigationRef, obj3);
      const obj2 = scrollPosition(headerPanel[13]);
    }
    const obj = height(headerPanel[12]);
  }, []);
  const callback3 = noop.useCallback(() => {
    const rootNavigationRef = height(headerPanel[12]).getRootNavigationRef();
    if (rootNavigationRef != null) {
      const current = rootNavigationRef.current;
      if (current != null) {
        const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
        current.navigate("friends", obj2);
      }
    }
  }, []);
  let obj3 = height(15629);
  const obj4 = { variant: "primary", icon: null, size: "sm", accessibilityLabel: null, onPress: null };
  const tmp12 = scrollPosition(5932)("bespoke");
  obj4.icon = closure_6(height(10402).PlusLargeIcon, { size: "sm", color: scrollPosition(576).colors.WHITE });
  const intl = height(1115).intl;
  obj4.accessibilityLabel = intl.string(height(1115).t.jD1qzM);
  obj4.onPress = callback3;
  const obj6 = { style: memo, children: null };
  const obj7 = { style: tmp.headerPanelTitle, children: null };
  const obj5 = { size: "sm", color: scrollPosition(576).colors.WHITE };
  const intl2 = height(1115).intl;
  const string = intl2.string;
  const t = height(1115).t;
  if (isHomeDrawerEnabled) {
    let stringResult = string(t.YUU0RF);
  } else {
    stringResult = string(t.OIgYlQ);
  }
  obj7.children = closure_6(height(4825).Text, { color: "mobile-text-heading-primary", variant: "heading-lg/semibold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: stringResult });
  const items1 = [closure_6(closure_4, obj7), , , ];
  const obj8 = { style: tmp.headerPanelButtons, children: null };
  const obj9 = { onPress: callback2, variant: "secondary", size: "sm", icon: scrollPosition(6468), accessibilityLabel: null };
  const intl3 = tmp3(1115).intl;
  obj9.accessibilityLabel = intl3.string(height(1115).t["5h0QOP"]);
  const items2 = [closure_6(height(7358).IconButton, obj9), closure_6(scrollPosition(15635), { noMargin: true, onPress: callback, alternateVariant: true }), , ];
  const obj10 = { variant: "secondary", grow: true, shrink: true, size: "sm", icon: scrollPosition(4766), onPress: callback1, maxFontSizeMultiplier: 1, text: null };
  const intl4 = tmp3(1115).intl;
  obj10.text = intl4.string(height(1115).t.zIJnA6);
  items2[2] = closure_6(height(5274).Button, obj10);
  items2[3] = closure_6(height(7358).IconButton, obj4);
  obj8.children = items2;
  items1[1] = closure_7(closure_4, obj8);
  const obj11 = { style: null };
  const items3 = [tmp.headerBorder, animatedStyle];
  obj11.style = items3;
  items1[2] = closure_6(scrollPosition(4563).View, obj11);
  items1[3] = tmp12;
  obj6.children = items1;
  return closure_7(closure_4, obj6);
});
export const getMessagesHeaderHeight = function getMessagesHeaderHeight(fontScale) {
  const bound = Math.min(fontScale, 1.75);
  const refreshToken = MobileVisualRefreshExperiment.resolveRefreshToken(nativeDefault.modules.mobile.MESSAGES_HEADER_PADDING_BOTTOM);
  const sum = useScaledTextLineHeight.scaleTextLineHeight("redesign/heading-18/bold", bound) + PX_8;
  return sum + ButtonConstants.SMALL_BUTTON_HEIGHT + PX_16 + refreshToken;
};