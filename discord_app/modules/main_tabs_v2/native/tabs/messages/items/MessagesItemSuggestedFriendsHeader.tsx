// discord_app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriendsHeader.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import ReanimatedRexport from "../../../../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import ThemedGradientDefault from "../../../../../client_themes/native/ThemedGradient.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const sum = fn(4752).TextStyleSheet["text-md/semibold"].lineHeight + nativeDefault.space.PX_24;
const createStyles = fn(4756);
let obj = {
  headerContainer: { height: sum, justifyContent: "center", overflow: "hidden" },
  stickyOverlay: null,
  headerText: null,
};
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.PANEL_BG;
obj.stickyOverlay = obj3;
obj.headerText = { marginHorizontal: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj);
const __initData = {
  code: "function MessagesItemSuggestedFriendsHeaderTsx1(){const{stickyAt,scrollPosition}=this.__closure;return stickyAt!=null&&scrollPosition.get()>=stickyAt;}",
};
let obj4 = { marginHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriendsHeader.tsx",
);

export default noop.memo(function MessagesItemSuggestedFriendsHeader(stickyAt) {
  stickyAt = stickyAt.stickyAt;
  const scrollPosition = stickyAt.scrollPosition;
  const stickyLeft = stickyAt.stickyLeft;
  const stickyTop = stickyAt.stickyTop;
  const tmp = closure_8();
  const fn = function x() {
    let tmp2 = null != stickyAt;
    if (tmp2) {
      tmp2 = scrollPosition.get() >= tmp;
    }
    return tmp2;
  };
  fn.__closure = { stickyAt, scrollPosition };
  fn.__workletHash = 895751186732;
  fn.__initData = __initData;
  const derivedValue = ReanimatedRexport.useDerivedValue(fn);
  const items = [stickyLeft, stickyTop];
  const obj2 = { style: tmp.headerContainer, collapsable: false, children: null };
  let tmp8Result = null;
  if (tmp6) {
    const obj3 = { children: null };
    const obj4 = { absolute: true, wide: true, componentStyles: tmp7, tall: true, mix: true };
    const items1 = [hasOwnProperty(ThemedGradientDefault, obj4)];
    const obj5 = { style: tmp.stickyOverlay };
    items1[1] = hasOwnProperty(React4, obj5);
    obj3.children = items1;
    tmp8Result = React5(timestampProducer, obj3);
  }
  const items2 = [tmp8Result];
  const obj6 = {
    style: tmp.headerText,
    maxFontSizeMultiplier: 2,
    lineClamp: 1,
    accessibilityRole: "header",
    variant: "text-md/semibold",
    color: "text-default",
    children: null,
  };
  const intl = util.intl;
  obj6.children = intl.string(util.t["1uAmCw"]);
  items2[1] = hasOwnProperty(Text_Text.Text, obj6);
  obj2.children = items2;
  return React5(React4, obj2);
});
export const MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT = sum;
