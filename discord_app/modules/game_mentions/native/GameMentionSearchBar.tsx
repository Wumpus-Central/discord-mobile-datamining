// === Module 12402: GameMentionSearchBar ===

// Module 12402 (GameMentionSearchBar)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import Form from "Form" /* 8593 */;
import GameControllerIcon from "GameControllerIcon" /* 9223 */;
import useGameMentionSearchBarHeight from "useGameMentionSearchBarHeight" /* 12388 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
let obj = { container: null, headerRow: null, icon: null, description: null, divider: null };
obj = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
obj.container = obj;
const createStyles = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: fn(12388).GAME_MENTION_SEARCH_BAR_HEADER_PADDING_VERTICAL };
obj.headerRow = createStyles;
obj.icon = { marginRight: 12 };
obj.description = { paddingHorizontal: 16, paddingBottom: fn(12388).GAME_MENTION_SEARCH_BAR_DESCRIPTION_PADDING_BOTTOM };
const obj2 = { paddingHorizontal: 16, paddingBottom: fn(12388).GAME_MENTION_SEARCH_BAR_DESCRIPTION_PADDING_BOTTOM };
obj.divider = { marginLeft: 0, backgroundColor: nativeDefault.colors.MOBILE_COMMAND_BAR_DIVIDER };
let closure_5 = createStyles.createStyles(obj);
let obj3 = { marginLeft: 0, backgroundColor: nativeDefault.colors.MOBILE_COMMAND_BAR_DIVIDER };
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_mentions/native/GameMentionSearchBar.tsx");

export default noop.memo(function GameMentionSearchBar() {
  const tmp = closure_5();
  let obj = { style: tmp.container, children: null };
  obj = { accessible: true, accessibilityRole: "header", children: null };
  obj = { style: tmp.headerRow, children: null };
  const items = [React3(GameControllerIcon.GameControllerIcon, { size: "sm", style: tmp.icon }), React3(Text_Text.Text, { variant: useGameMentionSearchBarHeight.GAME_MENTION_SEARCH_BAR_TITLE_VARIANT, color: "mobile-text-heading-primary", children: "@game" })];
  obj.children = items;
  const items1 = [React4(View, obj), ];
  const obj3 = { style: tmp.description, variant: useGameMentionSearchBarHeight.GAME_MENTION_SEARCH_BAR_DESCRIPTION_VARIANT, color: "text-muted", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["1kR88y"]);
  items1[1] = React3(Text_Text.Text, obj3);
  obj.children = items1;
  const items2 = [React4(View, obj), React3(Form.FormDivider, { style: tmp.divider })];
  obj.children = items2;
  return React4(View, obj);
});