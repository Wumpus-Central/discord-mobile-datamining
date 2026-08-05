// discord_app/modules/game_mentions/native/GameMentionSearchBar.tsx
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { container: null, headerRow: null, icon: null, description: null, divider: null };
obj = { backgroundColor: require("Themes").colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
obj[0] = obj;
createCacheKey = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: require("useGameMentionSearchBarHeight").GAME_MENTION_SEARCH_BAR_HEADER_PADDING_VERTICAL };
obj[1] = createCacheKey;
obj[2] = { marginRight: 12 };
obj[3] = { paddingHorizontal: 16, paddingBottom: require("useGameMentionSearchBarHeight").GAME_MENTION_SEARCH_BAR_DESCRIPTION_PADDING_BOTTOM };
let obj2 = { paddingHorizontal: 16, paddingBottom: require("useGameMentionSearchBarHeight").GAME_MENTION_SEARCH_BAR_DESCRIPTION_PADDING_BOTTOM };
obj[4] = { marginLeft: 0, backgroundColor: require("Themes").colors.MOBILE_COMMAND_BAR_DIVIDER };
let closure_5 = createCacheKey.createStyles(obj);
let obj3 = { marginLeft: 0, backgroundColor: require("Themes").colors.MOBILE_COMMAND_BAR_DIVIDER };
const memoResult = importAllResult.memo(function GameMentionSearchBar() {
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  obj = { accessible: true, accessibilityRole: "header", children: null };
  obj = { style: tmp.headerRow, children: null };
  const items = [callback(require("../../../design/components/Icon/native/redesign/generated/GameControllerIcon.tsx") /* GameControllerIcon */.GameControllerIcon, { size: "sm", style: tmp.icon }), ];
  const obj2 = { variant: null, color: "mobile-text-heading-primary", children: "@game" };
  obj2[0] = require("../hooks/native/useGameMentionSearchBarHeight.tsx") /* useGameMentionSearchBarHeight */.GAME_MENTION_SEARCH_BAR_TITLE_VARIANT;
  items[1] = callback(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj2);
  obj[1] = items;
  const items1 = [callback2(View, obj), ];
  const obj3 = { style: tmp.description, variant: null, color: "text-muted", children: null };
  obj3[1] = require("../hooks/native/useGameMentionSearchBarHeight.tsx") /* useGameMentionSearchBarHeight */.GAME_MENTION_SEARCH_BAR_DESCRIPTION_VARIANT;
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj3[3] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["1kR88y"]);
  items1[1] = callback(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj3);
  obj[2] = items1;
  const items2 = [callback2(View, obj), callback(require("../../../design/void/Form/native/index.tsx") /* Form */.FormDivider, { style: tmp.divider })];
  obj[1] = items2;
  return callback2(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/game_mentions/native/GameMentionSearchBar.tsx");

export default memoResult;