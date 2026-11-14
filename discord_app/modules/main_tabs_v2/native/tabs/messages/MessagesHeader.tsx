// === Module 18747: MessagesHeader ===

// Module 18747 (MessagesHeader)
import nativeDefault from "native" /* 575 */;
import _modDef1655 from "module_1655" /* 1655 */;
import ButtonConstants from "ButtonConstants" /* 5942 */;
import _modDef6024 from "module_6024" /* 6024 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 6061 */;
import HeaderDebugOverlayDefault from "HeaderDebugOverlay" /* 7494 */;
import _modDef7827 from "module_7827" /* 7827 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 13523 */;
import MessageRequestsButtonDefault from "MessageRequestsButton" /* 18748 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const SearchTypes = fn(1072).SearchTypes;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const PX_8 = nativeDefault.space.PX_8;
const createStyles = fn(5306);
let obj = { headerPanel: { position: "relative", padding: PX_16, paddingBottom: nativeDefault.modules.mobile.MESSAGES_HEADER_PADDING_BOTTOM }, headerPanelTitle: null, headerPanelButtons: null, headerBorder: null };
let obj3 = { position: "relative", padding: PX_16, paddingBottom: nativeDefault.modules.mobile.MESSAGES_HEADER_PADDING_BOTTOM };
obj.headerPanelTitle = { paddingBottom: PX_8, flexDirection: "row", gap: nativeDefault.space.PX_8, justifyContent: "space-between" };
let obj4 = { paddingBottom: PX_8, flexDirection: "row", gap: nativeDefault.space.PX_8, justifyContent: "space-between" };
obj.headerPanelButtons = { height: fn(5942).SMALL_BUTTON_HEIGHT, gap: nativeDefault.modules.mobile.MESSAGES_HEADER_BUTTON_GAP, flexDirection: nativeDefault.modules.mobile.MESSAGES_HEADER_BUTTON_LAYOUT, alignItems: "center" };
let obj6 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj6.backgroundColor = nativeDefault.colors.BORDER_SUBTLE;
obj6.top = undefined;
obj6.height = 1;
obj.headerBorder = obj6;
let closure_10 = createStyles.createStyles(obj);
let closure_11 = { code: "(function MessagesHeaderTsx1(){let[withSpring,scrollPosition,Reanimated3DefaultSpringConfig]=this.__closure;return{opacity:withSpring(scrollPosition.get()>0?1:0,Reanimated3DefaultSpringConfig)};})" };
let obj5 = { height: fn(5942).SMALL_BUTTON_HEIGHT, gap: nativeDefault.modules.mobile.MESSAGES_HEADER_BUTTON_GAP, flexDirection: nativeDefault.modules.mobile.MESSAGES_HEADER_BUTTON_LAYOUT, alignItems: "center" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesHeader.tsx");

export default noop.memo(function MessagesHeader(height) {
  height = height.height;
  _require = height;
  const tmp = closure_10();
  items = [tmp, height];
  const memo = noop.useMemo(() => {
    items = [_undefined.headerPanel, { height }];
    return items;
  }, items);
  const items1 = [closure_11, require("spring/spring").withSpring, height.scrollPosition, require("springPresets").Reanimated3DefaultSpringConfig];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp5, tmp6, tmp7, tmp8] = items1;
  class MessagesHeaderTsx1 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (closure_1.get() > 0) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_2) };
      return obj;
    }
  }
  const items2 = [tmp6, tmp7, tmp8];
  MessagesHeaderTsx1.__closure = items2;
  MessagesHeaderTsx1.__workletHash = 7032090280260;
  MessagesHeaderTsx1.__initData = tmp5;
  const animatedStyle = require("module_1655").useAnimatedStyle(MessagesHeaderTsx1);
  let obj2 = require("module_1655");
  const isHomeDrawerEnabled = require("useHomeDrawerGesture").useIsHomeDrawerEnabled();
  const callback = noop.useCallback(() => {
    const rootNavigationRef = height(_undefined2[13]).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("message-requests");
    }
  }, []);
  const callback1 = noop.useCallback(() => {
    const rootNavigationRef = height(_undefined2[13]).getRootNavigationRef();
    if (rootNavigationRef != null) {
      const obj2 = { screen: "add-friends", params: { sourcePage: "Messages Tab", presentation: "card" } };
      rootNavigationRef.navigate("friends", obj2);
    }
  }, []);
  const callback2 = noop.useCallback(() => {
    const rootNavigationRef = height(_undefined2[13]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      const obj3 = { type: constants.DMS };
      const result = _undefined(_undefined2[14]).navigateToSearchWithPrefetch(rootNavigationRef, obj3);
      const obj2 = _undefined(_undefined2[14]);
    }
    const obj = height(_undefined2[13]);
  }, []);
  const callback3 = noop.useCallback(() => {
    const rootNavigationRef = height(_undefined2[13]).getRootNavigationRef();
    if (rootNavigationRef != null) {
      const current = rootNavigationRef.current;
      if (current != null) {
        const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
        current.navigate("friends", obj2);
      }
    }
  }, []);
  const tmp3Result = require("useHomeDrawerGesture");
  let obj3 = { variant: "primary", icon: null, size: "sm", accessibilityLabel: null, onPress: null };
  const tmp16 = HeaderDebugOverlayDefault("bespoke");
  obj3.icon = closure_6(require("PlusLargeIcon").PlusLargeIcon, { size: "sm", color: nativeDefault.colors.WHITE });
  const intl = tmp3(1113).intl;
  obj3.accessibilityLabel = intl.string(require("util").t.jD1qzM);
  obj3.onPress = callback3;
  const obj5 = { style: memo, children: null };
  const obj6 = { style: tmp.headerPanelTitle, children: null };
  const obj4 = { size: "sm", color: nativeDefault.colors.WHITE };
  const intl2 = tmp3(1113).intl;
  const string = intl2.string;
  const t = tmp3(1113).t;
  if (isHomeDrawerEnabled) {
    let stringResult = string(t.YUU0RF);
  } else {
    stringResult = string(t.OIgYlQ);
  }
  obj6.children = closure_6(require("Text/Text").Text, { color: "mobile-text-heading-primary", variant: "heading-lg/semibold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: stringResult });
  const items3 = [closure_6(closure_4, obj6), , , ];
  const obj7 = { style: tmp.headerPanelButtons, children: null };
  const obj8 = { onPress: callback2, variant: "secondary", size: "sm", icon: _modDef7827, accessibilityLabel: null };
  const intl3 = tmp3(1113).intl;
  obj8.accessibilityLabel = intl3.string(require("util").t["5h0QOP"]);
  const items4 = [closure_6(require("IconButton").IconButton, obj8), closure_6(MessageRequestsButtonDefault, { noMargin: true, onPress: callback, alternateVariant: true }), , ];
  const obj9 = { variant: "secondary", grow: true, shrink: true, size: "sm", icon: _modDef6024, onPress: callback1, maxFontSizeMultiplier: 1, text: null };
  const intl4 = tmp3(1113).intl;
  obj9.text = intl4.string(require("util").t.zIJnA6);
  items4[2] = closure_6(require("components/Button/Button").Button, obj9);
  items4[3] = closure_6(require("IconButton").IconButton, obj3);
  obj7.children = items4;
  items3[1] = closure_7(closure_4, obj7);
  const obj10 = { style: null };
  const items5 = [tmp.headerBorder, animatedStyle];
  obj10.style = items5;
  items3[2] = closure_6(_modDef1655.View, obj10);
  items3[3] = tmp16;
  obj5.children = items3;
  return closure_7(closure_4, obj5);
});
export function getMessagesHeaderHeight(fontScale) {
  const bound = Math.min(fontScale, 1.75);
  const refreshToken = MobileVisualRefreshExperiment.resolveRefreshToken(nativeDefault.modules.mobile.MESSAGES_HEADER_PADDING_BOTTOM);
  const sum = useScaledTextLineHeight.scaleTextLineHeight("heading-md/semibold", bound) + PX_8;
  return sum + ButtonConstants.SMALL_BUTTON_HEIGHT + PX_16 + refreshToken;
}