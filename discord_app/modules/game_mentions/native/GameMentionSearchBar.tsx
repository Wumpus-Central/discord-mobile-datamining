// === Module 12042: ? ===

// Module 12042
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4440 */;
import Form from "Form" /* 8185 */;
import GameControllerIcon from "GameControllerIcon" /* 8977 */;
import useGameMentionSearchBarHeight from "useGameMentionSearchBarHeight" /* 12030 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { container: null, headerRow: null, icon: null, description: null, divider: null };
obj = { backgroundColor: ThemesDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
obj[0] = obj;
createCacheKey = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: require("useGameMentionSearchBarHeight").GAME_MENTION_SEARCH_BAR_HEADER_PADDING_VERTICAL };
obj[1] = createCacheKey;
obj[2] = { marginRight: 12 };
obj[3] = { paddingHorizontal: 16, paddingBottom: require("useGameMentionSearchBarHeight").GAME_MENTION_SEARCH_BAR_DESCRIPTION_PADDING_BOTTOM };
const obj2 = { paddingHorizontal: 16, paddingBottom: require("useGameMentionSearchBarHeight").GAME_MENTION_SEARCH_BAR_DESCRIPTION_PADDING_BOTTOM };
obj[4] = { marginLeft: 0, backgroundColor: ThemesDefault.colors.MOBILE_COMMAND_BAR_DIVIDER };
let closure_5 = createCacheKey.createStyles(obj);
let obj3 = { marginLeft: 0, backgroundColor: ThemesDefault.colors.MOBILE_COMMAND_BAR_DIVIDER };
const memoResult = importAllResult.memo(function GameMentionSearchBar() {
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  obj = { accessible: true, accessibilityRole: "header", children: null };
  obj = { style: tmp.headerRow, children: null };
  const items = [callback(GameControllerIcon.GameControllerIcon, { size: "sm", style: tmp.icon }), callback(Text.Text, { variant: useGameMentionSearchBarHeight.GAME_MENTION_SEARCH_BAR_TITLE_VARIANT, color: "mobile-text-heading-primary", children: "@game" })];
  obj[1] = items;
  const items1 = [callback2(View, obj), ];
  const obj3 = { style: tmp.description, variant: useGameMentionSearchBarHeight.GAME_MENTION_SEARCH_BAR_DESCRIPTION_VARIANT, color: "text-muted", children: null };
  const intl = getSystemLocale.intl;
  obj3[3] = intl.string(getSystemLocale.t["1kR88y"]);
  items1[1] = callback(Text.Text, obj3);
  obj[2] = items1;
  const items2 = [callback2(View, obj), callback(Form.FormDivider, { style: tmp.divider })];
  obj[1] = items2;
  return callback2(View, obj);
});
const result = require("set").fileFinishedImporting("modules/game_mentions/native/GameMentionSearchBar.tsx");

export default memoResult;