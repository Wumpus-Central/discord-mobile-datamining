// === Module 12133: GameMentionSearchBar ===

// Module 12133 (GameMentionSearchBar)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5086 */;
import Form from "Form" /* 8555 */;
import GameControllerIcon from "GameControllerIcon" /* 9117 */;
import useGameMentionSearchBarHeight from "useGameMentionSearchBarHeight" /* 12119 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5090);
let obj = { container: { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND }, headerRow: null, icon: null, description: null, divider: null };
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
obj.headerRow = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: fn(12119).GAME_MENTION_SEARCH_BAR_HEADER_PADDING_VERTICAL };
obj.icon = { marginRight: 12 };
let obj4 = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: fn(12119).GAME_MENTION_SEARCH_BAR_HEADER_PADDING_VERTICAL };
obj.description = { paddingHorizontal: 16, paddingBottom: fn(12119).GAME_MENTION_SEARCH_BAR_DESCRIPTION_PADDING_BOTTOM };
let obj5 = { paddingHorizontal: 16, paddingBottom: fn(12119).GAME_MENTION_SEARCH_BAR_DESCRIPTION_PADDING_BOTTOM };
obj.divider = { marginLeft: 0, backgroundColor: nativeDefault.colors.MOBILE_COMMAND_BAR_DIVIDER };
let closure_5 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj6 = { marginLeft: 0, backgroundColor: nativeDefault.colors.MOBILE_COMMAND_BAR_DIVIDER };
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_mentions/native/GameMentionSearchBar.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GameMentionSearchBar() {
  const cResult = c.c(18);
  const tmp4 = closure_5();
  if (cResult[0] !== tmp4.icon) {
    const obj2 = { size: "sm", style: tmp4.icon };
    const tmp7 = React3(GameControllerIcon.GameControllerIcon, obj2);
    cResult[0] = tmp4.icon;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: useGameMentionSearchBarHeight.GAME_MENTION_SEARCH_BAR_TITLE_VARIANT, color: "mobile-text-heading-primary", children: "@game" };
    const tmp10 = React3(Text_Text.Text, obj3);
    cResult[2] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp4.headerRow) {
    if (cResult[4] === tmp5) {
      let tmp11 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t["1kR88y"]);
      cResult[6] = stringResult;
      let tmp13 = stringResult;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] !== tmp4.description) {
      const obj4 = { style: tmp4.description, variant: useGameMentionSearchBarHeight.GAME_MENTION_SEARCH_BAR_DESCRIPTION_VARIANT, color: "text-muted", children: tmp13 };
      const tmp17 = React3(Text_Text.Text, obj4);
      cResult[7] = tmp4.description;
      cResult[8] = tmp17;
      let tmp15 = tmp17;
    } else {
      tmp15 = cResult[8];
    }
    if (cResult[9] === tmp11) {
      if (cResult[10] === tmp15) {
        let tmp18 = cResult[11];
      }
      if (cResult[12] !== tmp4.divider) {
        const obj5 = { style: tmp4.divider };
        const tmp24 = React3(Form.FormDivider, obj5);
        cResult[12] = tmp4.divider;
        cResult[13] = tmp24;
        let tmp22 = tmp24;
      } else {
        tmp22 = cResult[13];
      }
      if (cResult[14] === tmp4.container) {
        if (cResult[15] === tmp18) {
          if (cResult[16] === tmp22) {
            let tmp25 = cResult[17];
          }
          return tmp25;
        }
      }
      const obj6 = { style: tmp4.container, children: null };
      const items = [tmp18, tmp22];
      obj6.children = items;
      const tmp28 = React4(View, obj6);
      cResult[14] = tmp4.container;
      cResult[15] = tmp18;
      cResult[16] = tmp22;
      cResult[17] = tmp28;
      tmp25 = tmp28;
    }
    const obj7 = { accessible: true, accessibilityRole: "header", children: null };
    const items1 = [tmp11, tmp15];
    obj7.children = items1;
    const tmp21 = React4(View, obj7);
    cResult[9] = tmp11;
    cResult[10] = tmp15;
    cResult[11] = tmp21;
    tmp18 = tmp21;
  }
  const obj8 = { style: tmp4.headerRow, children: null };
  const items2 = [tmp5, tmp8];
  obj8.children = items2;
  const tmp12 = React4(View, obj8);
  cResult[3] = tmp4.headerRow;
  cResult[4] = tmp5;
  cResult[5] = tmp12;
  tmp11 = tmp12;
}) : (function GameMentionSearchBar() {
  const tmp = closure_5();
  const obj = { style: tmp.container, children: null };
  const obj2 = { accessible: true, accessibilityRole: "header", children: null };
  const obj3 = { style: tmp.headerRow, children: null };
  const items = [React3(GameControllerIcon.GameControllerIcon, { size: "sm", style: tmp.icon }), React3(Text_Text.Text, { variant: useGameMentionSearchBarHeight.GAME_MENTION_SEARCH_BAR_TITLE_VARIANT, color: "mobile-text-heading-primary", children: "@game" })];
  obj3.children = items;
  const items1 = [React4(View, obj3), ];
  const obj6 = { style: tmp.description, variant: useGameMentionSearchBarHeight.GAME_MENTION_SEARCH_BAR_DESCRIPTION_VARIANT, color: "text-muted", children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t["1kR88y"]);
  items1[1] = React3(Text_Text.Text, obj6);
  obj2.children = items1;
  const items2 = [React4(View, obj2), React3(Form.FormDivider, { style: tmp.divider })];
  obj.children = items2;
  return React4(View, obj);
}));