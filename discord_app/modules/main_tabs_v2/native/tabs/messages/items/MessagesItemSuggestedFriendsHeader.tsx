// === Module 16021: MessagesItemSuggestedFriendsHeader ===

// Module 16021 (MessagesItemSuggestedFriendsHeader)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import Text_Text from "Text/Text" /* 4886 */;
import ThemedGradientDefault from "ThemedGradient" /* 5911 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 7941 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const sum = fn(4886).TextStyleSheet["text-md/semibold"].lineHeight + nativeDefault.space.PX_24;
const createStyles = fn(4890);
let obj = { headerContainer: { height: sum, justifyContent: "center", overflow: "hidden" }, stickyOverlay: null, headerText: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.PANEL_BG;
obj.stickyOverlay = obj3;
obj.headerText = { marginHorizontal: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj);
const __initData = { code: "function MessagesItemSuggestedFriendsHeaderTsx1(){const{stickyAt,scrollPosition}=this.__closure;return stickyAt!=null&&scrollPosition.get()>=stickyAt;}" };
const __initData2 = { code: "function MessagesItemSuggestedFriendsHeaderTsx2(){const{stickyAt,scrollPosition}=this.__closure;return stickyAt!=null&&scrollPosition.get()>=stickyAt;}" };
const ReactCompilerGating = fn(558);
let obj4 = { marginHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriendsHeader.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((stickyAt) => {
  const cResult = c.c(14);
  stickyAt = stickyAt.stickyAt;
  const scrollPosition = stickyAt.scrollPosition;
  ({ stickyLeft, stickyTop } = stickyAt);
  const tmp4 = closure_8();
  const fn = function l() {
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
  const tmp7 = useStateFromSharedValueDefault(derivedValue);
  if (cResult[0] === -stickyLeft) {
    if (cResult[1] === tmp9) {
      let tmp10 = cResult[2];
    }
    if (cResult[3] === tmp7) {
      if (cResult[4] === tmp10) {
        if (cResult[5] === tmp4.stickyOverlay) {
          let tmp12 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t["1uAmCw"]);
          cResult[7] = stringResult;
          let tmp19 = stringResult;
        } else {
          tmp19 = cResult[7];
        }
        if (cResult[8] !== tmp4.headerText) {
          const obj3 = { style: tmp4.headerText, maxFontSizeMultiplier: 2, lineClamp: 1, accessibilityRole: "header", variant: "text-md/semibold", color: "text-default", children: tmp19 };
          const tmp23 = hasOwnProperty(Text_Text.Text, obj3);
          cResult[8] = tmp4.headerText;
          cResult[9] = tmp23;
          let tmp21 = tmp23;
        } else {
          tmp21 = cResult[9];
        }
        if (cResult[10] === tmp4.headerContainer) {
          if (cResult[11] === tmp12) {
            if (cResult[12] === tmp21) {
              let tmp24 = cResult[13];
            }
            return tmp24;
          }
        }
        const obj4 = { style: tmp11, collapsable: false, children: null };
        const items = [tmp12, tmp21];
        obj4.children = items;
        const tmp27 = React5(React4, obj4);
        cResult[10] = tmp4.headerContainer;
        cResult[11] = tmp12;
        cResult[12] = tmp21;
        cResult[13] = tmp27;
        tmp24 = tmp27;
      }
    }
    let tmp13 = null;
    if (tmp7) {
      const obj5 = { children: null };
      const obj6 = { absolute: true, wide: true, componentStyles: tmp10, tall: true, mix: true };
      const items1 = [hasOwnProperty(ThemedGradientDefault, obj6), ];
      const obj7 = { style: tmp4.stickyOverlay };
      items1[1] = hasOwnProperty(React4, obj7);
      obj5.children = items1;
      tmp13 = React5(timestampProducer, obj5);
    }
    cResult[3] = tmp7;
    cResult[4] = tmp10;
    cResult[5] = tmp4.stickyOverlay;
    cResult[6] = tmp13;
    tmp12 = tmp13;
  }
  const rect = { left: tmp8, top: tmp9 };
  cResult[0] = -stickyLeft;
  cResult[1] = -stickyTop;
  cResult[2] = rect;
  tmp10 = rect;
}) : ((stickyAt) => {
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
  fn.__workletHash = 10594399404463;
  fn.__initData = __initData2;
  const derivedValue = ReanimatedRexport.useDerivedValue(fn);
  const items = [stickyLeft, stickyTop];
  const obj2 = { style: tmp.headerContainer, collapsable: false, children: null };
  let tmp8Result = null;
  if (tmp6) {
    const obj3 = { children: null };
    const obj4 = { absolute: true, wide: true, componentStyles: tmp7, tall: true, mix: true };
    const items1 = [hasOwnProperty(ThemedGradientDefault, obj4), ];
    const obj5 = { style: tmp.stickyOverlay };
    items1[1] = hasOwnProperty(React4, obj5);
    obj3.children = items1;
    tmp8Result = React5(timestampProducer, obj3);
  }
  const items2 = [tmp8Result, ];
  const obj6 = { style: tmp.headerText, maxFontSizeMultiplier: 2, lineClamp: 1, accessibilityRole: "header", variant: "text-md/semibold", color: "text-default", children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t["1uAmCw"]);
  items2[1] = hasOwnProperty(Text_Text.Text, obj6);
  obj2.children = items2;
  return React5(React4, obj2);
}));
export const MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT = sum;