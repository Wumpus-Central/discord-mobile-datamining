// discord_app/modules/main_tabs_v2/native/tabs/messages/MessagesHeader.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../../../design/animation/reanimated/spring/spring.tsx";
import ButtonConstants from "../../../../../design/components/Button/native/ButtonConstants.native.tsx";
import useScaledTextLineHeight from "../../../../screen/native/useScaledTextLineHeight.android.tsx";
import MobileVisualRefreshExperiment from "../../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const SearchTypes = fn(1074).SearchTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const PX_8 = nativeDefault.space.PX_8;
fn(4560);
let obj = { headerPanel: null, headerPanelTitle: null, headerPanelButtons: null, headerBorder: null };
obj = {
  position: "relative",
  padding: PX_16,
  paddingBottom: nativeDefault.modules.mobile.MESSAGES_HEADER_PADDING_BOTTOM,
};
obj.headerPanel = obj;
const createStyles = {
  paddingBottom: PX_8,
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  justifyContent: "space-between",
};
obj.headerPanelTitle = createStyles;
obj.headerPanelButtons = {
  height: fn(4980).SMALL_BUTTON_HEIGHT,
  gap: nativeDefault.modules.mobile.MESSAGES_HEADER_BUTTON_GAP,
  flexDirection: nativeDefault.modules.mobile.MESSAGES_HEADER_BUTTON_LAYOUT,
  alignItems: "center",
};
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.BORDER_SUBTLE;
obj3.top = undefined;
obj3.height = 1;
obj.headerBorder = obj3;
let closure_10 = createStyles.createStyles(obj);
const __initData = {
  code: "function MessagesHeaderTsx1(){const{withSpring,scrollPosition}=this.__closure;return{opacity:withSpring(scrollPosition.get()>0?1:0)};}",
};
let obj2 = {
  height: fn(4980).SMALL_BUTTON_HEIGHT,
  gap: nativeDefault.modules.mobile.MESSAGES_HEADER_BUTTON_GAP,
  flexDirection: nativeDefault.modules.mobile.MESSAGES_HEADER_BUTTON_LAYOUT,
  alignItems: "center",
};
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
  height(4296);
  const fn = function c() {
    let obj = spring;
    let num = 0;
    if (scrollPosition.get() > 0) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num) };
    return obj;
  };
  let obj = { withSpring: height(4974).withSpring, scrollPosition };
  fn.__closure = obj;
  fn.__workletHash = 17233409273245;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = height(16022);
  const isHomeDrawerEnabled = obj2.useIsHomeDrawerEnabled();
  const callback = noop.useCallback(() => {
    const rootNavigationRef = height(headerPanel[12]).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("message-requests");
    }
  }, []);
  const callback1 = noop.useCallback(() => {
    let obj = height(headerPanel[12]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      obj = { screen: "add-friends", params: { sourcePage: "Messages Tab", presentation: "card" } };
      rootNavigationRef.navigate("friends", obj);
    }
  }, []);
  const callback2 = noop.useCallback(() => {
    let obj = height(headerPanel[12]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      obj = { type: constants.DMS };
      const result = scrollPosition(headerPanel[13]).navigateToSearchWithPrefetch(rootNavigationRef, obj);
      const obj2 = scrollPosition(headerPanel[13]);
    }
  }, []);
  const callback3 = noop.useCallback(() => {
    let obj = height(headerPanel[12]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const current = rootNavigationRef.current;
      if (current != null) {
        obj = { screen: "new-message", params: { sourcePage: "Messages Header" } };
        current.navigate("friends", obj);
      }
    }
  }, []);
  obj = { variant: "primary", icon: null, size: "sm", accessibilityLabel: null, onPress: null };
  const tmp12 = scrollPosition(5625)("bespoke");
  obj.icon = closure_6(height(10951).PlusLargeIcon, { size: "sm", color: scrollPosition(576).colors.WHITE });
  const intl = height(1114).intl;
  obj.accessibilityLabel = intl.string(height(1114).t.jD1qzM);
  obj.onPress = callback3;
  obj2 = { style: memo, children: null };
  const obj3 = { style: tmp.headerPanelTitle, children: null };
  const obj1 = { size: "sm", color: scrollPosition(576).colors.WHITE };
  const intl2 = height(1114).intl;
  const string = intl2.string;
  const t = height(1114).t;
  if (isHomeDrawerEnabled) {
    let stringResult = string(t.YUU0RF);
  } else {
    stringResult = string(t.OIgYlQ);
  }
  obj3.children = closure_6(height(4556).Text, {
    color: "mobile-text-heading-primary",
    variant: "heading-lg/semibold",
    maxFontSizeMultiplier: 1.75,
    accessibilityRole: "header",
    children: stringResult,
  });
  const items1 = [closure_6(closure_4, obj3), , ,];
  const obj4 = { style: tmp.headerPanelButtons, children: null };
  const obj5 = {
    onPress: callback2,
    variant: "secondary",
    size: "sm",
    icon: scrollPosition(7052),
    accessibilityLabel: null,
  };
  const intl3 = tmp3(1114).intl;
  obj5.accessibilityLabel = intl3.string(height(1114).t["5h0QOP"]);
  const items2 = [
    closure_6(height(8097).IconButton, obj5),
    closure_6(scrollPosition(16028), { noMargin: true, onPress: callback, alternateVariant: true }),
    ,
  ];
  const obj6 = {
    variant: "secondary",
    grow: true,
    shrink: true,
    size: "sm",
    icon: scrollPosition(4498),
    onPress: callback1,
    maxFontSizeMultiplier: 1,
    text: null,
  };
  const intl4 = tmp3(1114).intl;
  obj6.text = intl4.string(height(1114).t.zIJnA6);
  items2[2] = closure_6(height(4975).Button, obj6);
  items2[3] = closure_6(height(8097).IconButton, obj);
  obj4.children = items2;
  items1[1] = closure_7(closure_4, obj4);
  const obj7 = { style: null };
  const items3 = [tmp.headerBorder, animatedStyle];
  obj7.style = items3;
  items1[2] = closure_6(scrollPosition(4296).View, obj7);
  items1[3] = tmp12;
  obj2.children = items1;
  return closure_7(closure_4, obj2);
});
export const getMessagesHeaderHeight = function getMessagesHeaderHeight(fontScale) {
  const bound = Math.min(fontScale, 1.75);
  const refreshToken = MobileVisualRefreshExperiment.resolveRefreshToken(
    nativeDefault.modules.mobile.MESSAGES_HEADER_PADDING_BOTTOM,
  );
  const sum = useScaledTextLineHeight.scaleTextLineHeight("redesign/heading-18/bold", bound) + PX_8;
  return sum + ButtonConstants.SMALL_BUTTON_HEIGHT + PX_16 + refreshToken;
};
