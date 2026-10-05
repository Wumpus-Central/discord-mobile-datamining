// === Module 12045: GameMentionSearchBar ===

// Module 12045 (GameMentionSearchBar)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import GameControllerIcon from "GameControllerIcon" /* 8739 */;
import Form from "Form" /* 8895 */;
import useGameMentionSearchBarHeight from "useGameMentionSearchBarHeight" /* 12031 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerRow: obj3, icon: { marginRight: 12 }, description: obj4, divider: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: useGameMentionSearchBarHeight.GAME_MENTION_SEARCH_BAR_HEADER_PADDING_VERTICAL };
obj4 = { paddingHorizontal: 16, paddingBottom: useGameMentionSearchBarHeight.GAME_MENTION_SEARCH_BAR_DESCRIPTION_PADDING_BOTTOM };
obj5 = { marginLeft: 0, backgroundColor: nativeDefault.colors.MOBILE_COMMAND_BAR_DIVIDER };
let closure_5 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items;
  let items1;
  let items2;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(18);
  const tmp4 = closure_5();
  const container = tmp4.container;
  if (cResult[0] !== tmp4.icon) {
    const obj2 = { size: "sm", style: tmp4.icon };
    const tmp7 = _false(GameControllerIcon.GameControllerIcon, obj2);
    cResult[0] = tmp4.icon;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: useGameMentionSearchBarHeight.GAME_MENTION_SEARCH_BAR_TITLE_VARIANT, color: "mobile-text-heading-primary", children: "@game" };
    const Text = Text_Text.Text;
    const tmp10 = _false(Text, obj3);
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp4.headerRow) {
    let tmp11;
    let tmp13;
    let tmp15;
    if (cResult[4] === tmp5) {
      tmp11 = cResult[5];
    }
    const _Symbol = Symbol;
    const description = tmp4.description;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl2.intl;
      const stringResult = intl.string(intl2.t["1kR88y"]);
      cResult[6] = stringResult;
      tmp13 = stringResult;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] !== tmp4.description) {
      const obj4 = { style: description, variant: useGameMentionSearchBarHeight.GAME_MENTION_SEARCH_BAR_DESCRIPTION_VARIANT, color: "text-muted", children: tmp13 };
      const Text2 = Text_Text.Text;
      const tmp17 = _false(Text2, obj4);
      cResult[7] = tmp4.description;
      cResult[8] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[8];
    }
    if (cResult[9] === tmp11) {
      let tmp18;
      let tmp22;
      if (cResult[10] === tmp15) {
        tmp18 = cResult[11];
      }
      if (cResult[12] !== tmp4.divider) {
        const obj5 = { style: tmp4.divider };
        const tmp24 = _false(Form.FormDivider, obj5);
        cResult[12] = tmp4.divider;
        cResult[13] = tmp24;
        tmp22 = tmp24;
      } else {
        tmp22 = cResult[13];
      }
      if (cResult[14] === tmp4.container) {
        if (cResult[15] === tmp18) {
          let tmp25;
          if (cResult[16] === tmp22) {
            tmp25 = cResult[17];
          }
          return tmp25;
        }
      }
      const obj6 = { style: container, children: items };
      items = [tmp18, tmp22];
      const tmp28 = React3(View, obj6);
      cResult[14] = tmp4.container;
      cResult[15] = tmp18;
      cResult[16] = tmp22;
      cResult[17] = tmp28;
      tmp25 = tmp28;
    }
    const obj7 = { accessible: true, accessibilityRole: "header", children: items1 };
    items1 = [tmp11, tmp15];
    const tmp21 = React3(View, obj7);
    cResult[9] = tmp11;
    cResult[10] = tmp15;
    cResult[11] = tmp21;
    tmp18 = tmp21;
  }
  const obj8 = { style: tmp4.headerRow, children: items2 };
  items2 = [tmp5, tmp8];
  const tmp12 = React3(View, obj8);
  cResult[3] = tmp4.headerRow;
  cResult[4] = tmp5;
  cResult[5] = tmp12;
  tmp11 = tmp12;
}) : (() => {
  let intl;
  let items;
  let items1;
  let items2;
  const tmp = closure_5();
  const obj3 = { style: tmp.headerRow, children: items };
  items = [, ];
  const obj = { style: tmp.container, children: items2 };
  const obj2 = { accessible: true, accessibilityRole: "header", children: items1 };
  const obj4 = { size: "sm", style: tmp.icon };
  items[0] = _false(GameControllerIcon.GameControllerIcon, obj4);
  const obj5 = { variant: useGameMentionSearchBarHeight.GAME_MENTION_SEARCH_BAR_TITLE_VARIANT, color: "mobile-text-heading-primary", children: "@game" };
  const Text = Text_Text.Text;
  items[1] = _false(Text, obj5);
  items1 = [React3(View, obj3), ];
  const obj6 = { style: tmp.description, variant: useGameMentionSearchBarHeight.GAME_MENTION_SEARCH_BAR_DESCRIPTION_VARIANT, color: "text-muted", children: intl.string(intl2.t["1kR88y"]) };
  const Text2 = Text_Text.Text;
  intl = intl2.intl;
  items1[1] = _false(Text2, obj6);
  items2 = [React3(View, obj2), ];
  const obj7 = { style: tmp.divider };
  items2[1] = _false(Form.FormDivider, obj7);
  return React3(View, obj);
}));
const result = size.fileFinishedImporting("modules/game_mentions/native/GameMentionSearchBar.tsx");

export default memoResult;