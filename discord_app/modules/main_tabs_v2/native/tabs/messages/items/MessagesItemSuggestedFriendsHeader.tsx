// === Module 15933: sum ===

// Module 15933 (sum)
import ThemesDefault from "Themes" /* 709 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
let c3 = importAllResult;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
const sum = require("Text").TextStyleSheet["text-md/semibold"].lineHeight + ThemesDefault.space.PX_24;
let obj = { headerContainer: { height: sum, justifyContent: "center", overflow: "hidden" }, stickyOverlay: null, headerText: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.backgroundColor = ThemesDefault.colors.PANEL_BG;
obj[1] = obj;
createCacheKey = { marginHorizontal: ThemesDefault.space.PX_16 };
obj[2] = createCacheKey;
let closure_8 = createCacheKey.createStyles(obj);
let closure_9 = { code: "function MessagesItemSuggestedFriendsHeaderTsx1(){const{stickyAt,scrollPosition}=this.__closure;return stickyAt!=null&&scrollPosition.get()>=stickyAt;}" };
const memoResult = importAllResult.memo(function MessagesItemSuggestedFriendsHeader(stickyAt) {
  stickyAt = stickyAt.stickyAt;
  const scrollPosition = stickyAt.scrollPosition;
  const stickyLeft = stickyAt.stickyLeft;
  const stickyTop = stickyAt.stickyTop;
  const tmp = callback2();
  let obj = stickyAt(stickyLeft[6]);
  const fn = function x() {
    let tmp2 = null != stickyAt;
    if (tmp2) {
      tmp2 = scrollPosition.get() >= tmp;
    }
    return tmp2;
  };
  fn.__closure = { stickyAt, scrollPosition };
  fn.__workletHash = 895751186732;
  fn.__initData = closure_9;
  const derivedValue = obj.useDerivedValue(fn);
  const items = [stickyLeft, stickyTop];
  obj = { style: tmp.headerContainer, collapsable: false, children: null };
  let tmp8Result = null;
  if (tmp6) {
    obj = { children: null };
    obj1 = { absolute: true, wide: true, componentStyles: null, tall: true, mix: true };
    obj1[2] = tmp7;
    const items1 = [callback(scrollPosition(tmp3[8]), obj1), ];
    const obj2 = { style: null };
    obj2[0] = tmp.stickyOverlay;
    items1[1] = callback(tmp9, obj2);
    obj[0] = items1;
    tmp8Result = tmp8(closure_6, obj);
  }
  const items2 = [tmp8Result, ];
  const obj3 = { style: tmp.headerText, maxFontSizeMultiplier: 2, lineClamp: 1, accessibilityRole: "header", variant: "text-md/semibold", color: "text-default", children: null };
  const intl = tmp2(tmp3[9]).intl;
  obj3[6] = intl.string(stickyAt(stickyLeft[9]).t["1uAmCw"]);
  items2[1] = callback(stickyAt(stickyLeft[3]).Text, obj3);
  obj[2] = items2;
  return closure_7(closure_4, obj);
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriendsHeader.tsx");

export default memoResult;
export const MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT = sum;