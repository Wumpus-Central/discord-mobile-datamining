// === Module 16021: MessagesItemSuggestedFriendsHeader ===

// Module 16021 (MessagesItemSuggestedFriendsHeader)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import Text_Text from "Text/Text" /* 4886 */;
import ThemedGradientDefault from "ThemedGradient" /* 5911 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 7941 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const sum = Text_Text.TextStyleSheet["text-md/semibold"].lineHeight + nativeDefault.space.PX_24;
let createStyles = createStyles_mod;
let obj = { headerContainer: { height: sum, justifyContent: "center", overflow: "hidden" }, stickyOverlay: obj2, headerText: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.PANEL_BG };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { marginHorizontal: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
const __initData = { code: "function MessagesItemSuggestedFriendsHeaderTsx1(){const{stickyAt,scrollPosition}=this.__closure;return stickyAt!=null&&scrollPosition.get()>=stickyAt;}" };
const __initData2 = { code: "function MessagesItemSuggestedFriendsHeaderTsx2(){const{stickyAt,scrollPosition}=this.__closure;return stickyAt!=null&&scrollPosition.get()>=stickyAt;}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((stickyAt) => {
  let items;
  let items1;
  let stickyLeft;
  let stickyTop;
  const obj = react2;
  const cResult = obj.c(14);
  stickyAt = stickyAt.stickyAt;
  const scrollPosition = stickyAt.scrollPosition;
  ({ stickyLeft, stickyTop } = stickyAt);
  const tmp4 = closure_8();
  const fn = function l() {
    const tmp2 = null != stickyAt && scrollPosition.get() >= tmp;
    return tmp2;
  };
  fn.__closure = { stickyAt, scrollPosition };
  fn.__workletHash = 895751186732;
  fn.__initData = __initData;
  const obj2 = ReanimatedRexport;
  const derivedValue = obj2.useDerivedValue(fn);
  const tmp7 = useStateFromSharedValueDefault(derivedValue);
  if (cResult[0] === -stickyLeft) {
    let tmp10;
    if (cResult[1] === -stickyTop) {
      tmp10 = cResult[2];
    }
    if (cResult[3] === tmp7) {
      if (cResult[4] === tmp10) {
        let tmp12;
        let tmp19;
        let tmp21;
        if (cResult[5] === tmp4.stickyOverlay) {
          tmp12 = cResult[6];
        }
        const _Symbol = Symbol;
        const headerText = tmp4.headerText;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl2.intl;
          const stringResult = intl.string(intl2.t["1uAmCw"]);
          cResult[7] = stringResult;
          tmp19 = stringResult;
        } else {
          tmp19 = cResult[7];
        }
        if (cResult[8] !== tmp4.headerText) {
          const obj3 = { style: headerText, maxFontSizeMultiplier: 2, lineClamp: 1, accessibilityRole: "header", variant: "text-md/semibold", color: "text-default", children: tmp19 };
          const tmp23 = hasOwnProperty(Text_Text.Text, obj3);
          cResult[8] = tmp4.headerText;
          cResult[9] = tmp23;
          tmp21 = tmp23;
        } else {
          tmp21 = cResult[9];
        }
        if (cResult[10] === tmp4.headerContainer) {
          if (cResult[11] === tmp12) {
            let tmp24;
            if (cResult[12] === tmp21) {
              tmp24 = cResult[13];
            }
            return tmp24;
          }
        }
        const obj4 = { style: tmp11, collapsable: false, children: items };
        items = [tmp12, tmp21];
        const tmp27 = metroImportDefault(React3, obj4);
        cResult[10] = tmp4.headerContainer;
        cResult[11] = tmp12;
        cResult[12] = tmp21;
        cResult[13] = tmp27;
        tmp24 = tmp27;
      }
    }
    let tmp13 = null;
    if (tmp7) {
      const obj5 = { children: items1 };
      const obj6 = { absolute: true, wide: true, componentStyles: tmp10, tall: true, mix: true };
      items1 = [hasOwnProperty(ThemedGradientDefault, obj6), ];
      const obj7 = { style: tmp4.stickyOverlay };
      items1[1] = hasOwnProperty(React3, obj7);
      tmp13 = metroImportDefault(metroRequire, obj5);
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
  let intl;
  let items1;
  let items2;
  stickyAt = stickyAt.stickyAt;
  const scrollPosition = stickyAt.scrollPosition;
  const stickyLeft = stickyAt.stickyLeft;
  const stickyTop = stickyAt.stickyTop;
  const tmp = closure_8();
  const fn = function x() {
    const tmp2 = null != stickyAt && scrollPosition.get() >= tmp;
    return tmp2;
  };
  fn.__closure = { stickyAt, scrollPosition };
  fn.__workletHash = 10594399404463;
  fn.__initData = __initData2;
  const obj = ReanimatedRexport;
  const derivedValue = obj.useDerivedValue(fn);
  const items = [stickyLeft, stickyTop];
  let tmp8Result = null;
  const obj2 = { style: tmp.headerContainer, collapsable: false, children: items2 };
  const tmp6 = useStateFromSharedValueDefault(derivedValue);
  if (tmp6) {
    const obj3 = { children: items1 };
    const obj4 = { absolute: true, wide: true, componentStyles: tmp7, tall: true, mix: true };
    items1 = [hasOwnProperty(ThemedGradientDefault, obj4), ];
    const obj5 = { style: tmp.stickyOverlay };
    items1[1] = hasOwnProperty(React3, obj5);
    tmp8Result = metroImportDefault(metroRequire, obj3);
  }
  items2 = [tmp8Result, ];
  const obj6 = { style: tmp.headerText, maxFontSizeMultiplier: 2, lineClamp: 1, accessibilityRole: "header", variant: "text-md/semibold", color: "text-default", children: intl.string(intl2.t["1uAmCw"]) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items2[1] = hasOwnProperty(Text, obj6);
  return metroImportDefault(React3, obj2);
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriendsHeader.tsx");

export default memoResult;
export const MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT = sum;