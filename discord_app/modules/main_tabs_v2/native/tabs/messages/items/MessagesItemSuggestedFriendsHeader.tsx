// === Module 16097: MessagesItemSuggestedFriendsHeader ===

// Module 16097 (MessagesItemSuggestedFriendsHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import Text_Text from "Text/Text" /* 4556 */;
import ThemedGradientDefault from "ThemedGradient" /* 5125 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const sum = fn(4556).TextStyleSheet["text-md/semibold"].lineHeight + nativeDefault.space.PX_24;
fn(4560);
let obj = { headerContainer: { height: sum, justifyContent: "center", overflow: "hidden" }, stickyOverlay: null, headerText: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.backgroundColor = nativeDefault.colors.PANEL_BG;
obj.stickyOverlay = obj;
const createStyles = { marginHorizontal: nativeDefault.space.PX_16 };
obj.headerText = createStyles;
let closure_8 = createStyles.createStyles(obj);
const __initData = { code: "function MessagesItemSuggestedFriendsHeaderTsx1(){const{stickyAt,scrollPosition}=this.__closure;return stickyAt!=null&&scrollPosition.get()>=stickyAt;}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriendsHeader.tsx");

export default noop.memo(function MessagesItemSuggestedFriendsHeader(stickyAt) {
  stickyAt = stickyAt.stickyAt;
  const scrollPosition = stickyAt.scrollPosition;
  const stickyLeft = stickyAt.stickyLeft;
  const stickyTop = stickyAt.stickyTop;
  const tmp = closure_8();
  let obj = ReanimatedRexport;
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
  const derivedValue = obj.useDerivedValue(fn);
  const items = [stickyLeft, stickyTop];
  obj = { style: tmp.headerContainer, collapsable: false, children: null };
  let tmp8Result = null;
  if (tmp6) {
    obj = { children: null };
    const obj1 = { absolute: true, wide: true, componentStyles: tmp7, tall: true, mix: true };
    const items1 = [hasOwnProperty(ThemedGradientDefault, obj1), ];
    const obj2 = { style: tmp.stickyOverlay };
    items1[1] = hasOwnProperty(React4, obj2);
    obj.children = items1;
    tmp8Result = React5(timestampProducer, obj);
  }
  const items2 = [tmp8Result, ];
  const obj3 = { style: tmp.headerText, maxFontSizeMultiplier: 2, lineClamp: 1, accessibilityRole: "header", variant: "text-md/semibold", color: "text-default", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["1uAmCw"]);
  items2[1] = hasOwnProperty(Text_Text.Text, obj3);
  obj.children = items2;
  return React5(React4, obj);
});
export const MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT = sum;