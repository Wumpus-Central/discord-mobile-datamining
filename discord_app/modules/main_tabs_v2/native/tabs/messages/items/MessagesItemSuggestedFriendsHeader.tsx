// === Module 18300: MessagesItemSuggestedFriendsHeader ===

// Module 18300 (MessagesItemSuggestedFriendsHeader)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _mod1652 from "module_1652" /* 1652 */;
import Text_Text from "Text/Text" /* 5747 */;
import ThemedGradientDefault from "ThemedGradient" /* 10866 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const sum = fn(5747).TextStyleSheet["text-md/semibold"].lineHeight + nativeDefault.space.PX_24;
const createStyles = fn(5141);
let obj = { headerContainer: { height: sum, justifyContent: "center", overflow: "hidden" }, stickyOverlay: null, headerText: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.PANEL_BG;
obj.stickyOverlay = obj3;
obj.headerText = { marginHorizontal: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj);
let closure_9 = { code: "(function MessagesItemSuggestedFriendsHeaderTsx1(){let[stickyAt,scrollPosition]=this.__closure;return stickyAt!=null&&scrollPosition.get()>=stickyAt;})" };
let obj4 = { marginHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriendsHeader.tsx");

export default noop.memo(function MessagesItemSuggestedFriendsHeader(stickyLeft) {
  stickyLeft = stickyLeft.stickyLeft;
  const stickyTop = stickyLeft.stickyTop;
  ({ stickyAt, scrollPosition } = stickyLeft);
  const tmp = closure_8();
  items = [closure_9, stickyAt, scrollPosition];
  c0 = undefined;
  c1 = undefined;
  [tmp4, tmp5, tmp6] = items;
  class MessagesItemSuggestedFriendsHeaderTsx1 {
    constructor() {
      tmp2 = null != closure_0;
      if (tmp2) {
        tmp3 = closure_1;
        tmp2 = closure_1.get() >= tmp;
      }
      return tmp2;
    }
  }
  const items1 = [tmp5, tmp6];
  MessagesItemSuggestedFriendsHeaderTsx1.__closure = items1;
  MessagesItemSuggestedFriendsHeaderTsx1.__workletHash = 9510203774773;
  MessagesItemSuggestedFriendsHeaderTsx1.__initData = tmp4;
  const derivedValue = _mod1652.useDerivedValue(MessagesItemSuggestedFriendsHeaderTsx1);
  const items2 = [stickyLeft, stickyTop];
  const obj2 = { style: tmp.headerContainer, collapsable: false, children: null };
  let tmp11Result = null;
  if (tmp9) {
    const obj3 = { children: null };
    const obj4 = { absolute: true, wide: true, componentStyles: tmp10, tall: true, mix: true };
    const items3 = [hasOwnProperty(ThemedGradientDefault, obj4), ];
    const obj5 = { style: tmp.stickyOverlay };
    items3[1] = hasOwnProperty(React4, obj5);
    obj3.children = items3;
    tmp11Result = React5(timestampProducer, obj3);
  }
  const items4 = [tmp11Result, ];
  const obj6 = { style: tmp.headerText, maxFontSizeMultiplier: 2, lineClamp: 1, accessibilityRole: "header", variant: "text-md/semibold", color: "text-default", children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t["1uAmCw"]);
  items4[1] = hasOwnProperty(Text_Text.Text, obj6);
  obj2.children = items4;
  return React5(React4, obj2);
});
export const MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT = sum;