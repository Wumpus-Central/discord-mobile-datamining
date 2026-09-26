// === Module 11895: GameMentionSearchBar ===

// Module 11895 (GameMentionSearchBar)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import Form from "Form" /* 8053 */;
import GameControllerIcon from "GameControllerIcon" /* 8535 */;
import useGameMentionSearchBarHeight from "useGameMentionSearchBarHeight" /* 11881 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4836);
let obj = { container: { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND }, headerRow: null, icon: null, description: null, divider: null };
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
obj.headerRow = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: fn(11881).GAME_MENTION_SEARCH_BAR_HEADER_PADDING_VERTICAL };
obj.icon = { marginRight: 12 };
const obj4 = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: fn(11881).GAME_MENTION_SEARCH_BAR_HEADER_PADDING_VERTICAL };
obj.description = { paddingHorizontal: 16, paddingBottom: fn(11881).GAME_MENTION_SEARCH_BAR_DESCRIPTION_PADDING_BOTTOM };
const obj5 = { paddingHorizontal: 16, paddingBottom: fn(11881).GAME_MENTION_SEARCH_BAR_DESCRIPTION_PADDING_BOTTOM };
obj.divider = { marginLeft: 0, backgroundColor: nativeDefault.colors.MOBILE_COMMAND_BAR_DIVIDER };
let closure_5 = createStyles.createStyles(obj);
let obj6 = { marginLeft: 0, backgroundColor: nativeDefault.colors.MOBILE_COMMAND_BAR_DIVIDER };
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_mentions/native/GameMentionSearchBar.tsx");

export default noop.memo(function GameMentionSearchBar() {
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
});