// discord_app/modules/main_tabs_v2/native/tabs/messages/MessagesHeader.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import MINIMUM_HIT_AREA from "../../../../../design/components/Button/native/ButtonConstants.native.tsx";
import map from "../../../../screen/native/useScaledTextLineHeight.android.tsx";
import useIsMobileVisualRefreshExperimentEnabled from "../../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { SearchTypes } from "../../../../../Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
let c3 = importAllResult;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
const PX_16 = ThemesDefault.space.PX_16;
const PX_8 = ThemesDefault.space.PX_8;
let obj = { headerPanel: null, headerPanelTitle: null, headerPanelButtons: null, headerBorder: null };
obj = {
  position: "relative",
  padding: PX_16,
  paddingBottom: ThemesDefault.modules.mobile.MESSAGES_HEADER_PADDING_BOTTOM,
};
obj[0] = obj;
createCacheKey = {
  paddingBottom: PX_8,
  flexDirection: "row",
  gap: ThemesDefault.space.PX_8,
  justifyContent: "space-between",
};
obj[1] = createCacheKey;
obj[2] = {
  height: require("MINIMUM_HIT_AREA").SMALL_BUTTON_HEIGHT,
  gap: ThemesDefault.modules.mobile.MESSAGES_HEADER_BUTTON_GAP,
  flexDirection: ThemesDefault.modules.mobile.MESSAGES_HEADER_BUTTON_LAYOUT,
  alignItems: "center",
};
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = ThemesDefault.colors.BORDER_SUBTLE;
obj3.top = undefined;
obj3.height = 1;
obj[3] = obj3;
let closure_10 = createCacheKey.createStyles(obj);
let closure_11 = {
  code: "function MessagesHeaderTsx1(){const{withSpring,scrollPosition}=this.__closure;return{opacity:withSpring(scrollPosition.get()>0?1:0)};}",
};
let obj2 = {
  height: require("MINIMUM_HIT_AREA").SMALL_BUTTON_HEIGHT,
  gap: ThemesDefault.modules.mobile.MESSAGES_HEADER_BUTTON_GAP,
  flexDirection: ThemesDefault.modules.mobile.MESSAGES_HEADER_BUTTON_LAYOUT,
  alignItems: "center",
};
const memoResult = importAllResult.memo(function MessagesHeader(height) {
  height = height.height;
  const scrollPosition = height.scrollPosition;
  dependencyMap = undefined;
  const tmp = callback2();
  dependencyMap = tmp;
  let items = [tmp, height];
  const memo = importAllResult.useMemo(() => {
    const items = [headerPanel.headerPanel, { height }];
    return items;
  }, items);
  let obj = height(4296);
  const fn = function c() {
    let obj = height(headerPanel[10]);
    let num = 0;
    if (scrollPosition.get() > 0) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num) };
    return obj;
  };
  obj = { withSpring: height(4974).withSpring, scrollPosition };
  fn.__closure = obj;
  fn.__workletHash = 17233409273245;
  fn.__initData = closure_11;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = height(16022);
  const isHomeDrawerEnabled = obj2.useIsHomeDrawerEnabled();
  const callback = importAllResult.useCallback(() => {
    const rootNavigationRef = height(headerPanel[12]).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("message-requests");
    }
  }, []);
  const callback1 = importAllResult.useCallback(() => {
    let obj = height(headerPanel[12]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      obj = { screen: "add-friends", params: null };
      obj[1] = { sourcePage: "Messages Tab", presentation: "card" };
      rootNavigationRef.navigate("friends", obj);
    }
  }, []);
  callback2 = importAllResult.useCallback(() => {
    let obj = height(headerPanel[12]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      obj = { type: null };
      obj[0] = constants.DMS;
      const result = scrollPosition(headerPanel[13]).navigateToSearchWithPrefetch(rootNavigationRef, obj);
      const obj2 = scrollPosition(headerPanel[13]);
    }
  }, []);
  const callback3 = importAllResult.useCallback(() => {
    let obj = height(headerPanel[12]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const current = rootNavigationRef.current;
      if (current != null) {
        obj = { screen: "new-message", params: null };
        obj[1] = { sourcePage: "Messages Header" };
        current.navigate("friends", obj);
      }
    }
  }, []);
  obj = { variant: "primary", icon: null, size: "sm", accessibilityLabel: null, onPress: null };
  const tmp12 = scrollPosition(5625)("bespoke");
  obj[1] = callback(height(10951).PlusLargeIcon, { size: "sm", color: scrollPosition(576).colors.WHITE });
  const intl = height(1114).intl;
  obj[3] = intl.string(height(1114).t.jD1qzM);
  obj[4] = callback3;
  obj2 = { style: memo, children: null };
  const obj3 = { style: tmp.headerPanelTitle, children: null };
  obj1 = { size: "sm", color: scrollPosition(576).colors.WHITE };
  const intl2 = height(1114).intl;
  const string = intl2.string;
  const t = height(1114).t;
  if (isHomeDrawerEnabled) {
    let stringResult = string(t.YUU0RF);
  } else {
    stringResult = string(t.OIgYlQ);
  }
  obj3[1] = callback(height(4556).Text, {
    color: "mobile-text-heading-primary",
    variant: "heading-lg/semibold",
    maxFontSizeMultiplier: 1.75,
    accessibilityRole: "header",
    children: stringResult,
  });
  const items1 = [callback(closure_4, obj3), , ,];
  const obj4 = { style: tmp.headerPanelButtons, children: null };
  const obj5 = {
    onPress: callback2,
    variant: "secondary",
    size: "sm",
    icon: scrollPosition(7052),
    accessibilityLabel: null,
  };
  const intl3 = tmp3(1114).intl;
  obj5[4] = intl3.string(height(1114).t["5h0QOP"]);
  const items2 = [
    callback(height(8097).IconButton, obj5),
    callback(scrollPosition(16028), { noMargin: true, onPress: callback, alternateVariant: true }),
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
  obj6[7] = intl4.string(height(1114).t.zIJnA6);
  items2[2] = callback(height(4975).Button, obj6);
  items2[3] = callback(height(8097).IconButton, obj);
  obj4[1] = items2;
  items1[1] = closure_7(closure_4, obj4);
  const items3 = [tmp.headerBorder, animatedStyle];
  items1[2] = callback(scrollPosition(4296).View, { style: items3 });
  items1[3] = tmp12;
  obj2[1] = items1;
  return closure_7(closure_4, obj2);
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesHeader.tsx");

export default memoResult;
export const getMessagesHeaderHeight = function getMessagesHeaderHeight(fontScale) {
  const bound = Math.min(fontScale, 1.75);
  const refreshToken = useIsMobileVisualRefreshExperimentEnabled.resolveRefreshToken(
    ThemesDefault.modules.mobile.MESSAGES_HEADER_PADDING_BOTTOM,
  );
  const obj = useIsMobileVisualRefreshExperimentEnabled;
  const sum = map.scaleTextLineHeight("redesign/heading-18/bold", bound) + PX_8;
  return sum + MINIMUM_HIT_AREA.SMALL_BUTTON_HEIGHT + PX_16 + refreshToken;
};
