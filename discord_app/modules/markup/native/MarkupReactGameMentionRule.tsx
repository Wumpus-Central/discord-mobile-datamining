// === Module 13584: MarkupGameMention ===

// Module 13584 (MarkupGameMention)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import importDefaultResult1 from "importDefaultResult1" /* 6154 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
class MarkupGameMention {
  constructor(arg0) {
    state = global.state;
    gameId = undefined;
    tmp = closure_5();
    gameId = global.node.gameId;
    tmp2 = state;
    tmp3 = closure_2;
    obj = require("getGameMentionData");
    gameMentionData = obj.useGameMentionData(gameId);
    intl = require("getSystemLocale").intl;
    stringResult = intl.string(require("getSystemLocale").t["11pdXZ"]);
    gameName = undefined;
    if (gameMentionData != null) {
      gameName = gameMentionData.gameName;
    }
    if (gameName == null) {
      gameName = stringResult;
    }
    tmp7 = gameId;
    gameIcon = undefined;
    tmp8 = require("getGameMediaRefURL");
    if (gameMentionData != null) {
      gameIcon = gameMentionData.gameIcon;
    }
    tmp8Result = tmp8(gameId, gameIcon, { size: 32 });
    if (null == gameMentionData) {
      tmp15 = jsxs;
      textColor = undefined;
      if (state != null) {
        textColor = state.textColor;
      }
      obj = { color: null, children: null };
      obj[0] = textColor;
      items = ["@"];
      items[1] = stringResult;
      obj[1] = items;
      return tmp15(require("MarkupText").MarkupText, obj, state.key);
    } else {
      tmp17 = jsx;
      obj1 = { size: "sm", style: null };
      obj1[1] = tmp.icon;
      tmp11 = null != tmp8Result;
      tmp18 = jsx(require("UnknownGameIcon").UnknownGameIcon, obj1);
      if (tmp11) {
        str = "";
        tmp11 = "" !== tmp8Result;
      }
      tmp17Result = tmp18;
      if (tmp11) {
        obj2 = { style: null, source: null };
        obj2[0] = tmp.icon;
        obj3 = { uri: null };
        obj3[0] = tmp8Result;
        obj2[1] = obj3;
        tmp17Result = tmp17(require("preload"), obj2);
      }
      tmp13 = jsxs;
      str2 = "button";
      if (state.noStyleAndInteraction) {
        str2 = "text";
      }
      obj4 = { accessibilityRole: null, style: null, color: null, onPress: null, children: null };
      obj4[0] = str2;
      obj4[1] = tmp.chip;
      textColor1 = undefined;
      if (state != null) {
        textColor1 = state.textColor;
      }
      obj4[2] = textColor1;
      fn = undefined;
      if (!state.noStyleAndInteraction) {
        fn = () => {
          let obj = gameId(closure_1_2[10]);
          obj = { gameId, gameProfileModalChecks: obj, source: state(closure_1_2[11]).GameProfileSources.GameMention, sourceUserId: state.authorId };
          obj = { shouldOpenGameProfile: true, gameId };
          obj.openGameProfileModal(obj);
        };
      }
      obj4[3] = fn;
      items1 = [, ];
      items1[0] = tmp17Result;
      obj5 = { variant: "text-sm/medium", style: null, children: null };
      obj5[1] = tmp.chipText;
      obj5[2] = gameName;
      items1[1] = tmp17(require("Text").Text, obj5);
      obj4[4] = items1;
      return tmp13(require("MarkupText").MarkupText, obj4, state.key);
    }
  }
}
function FetchingGameMention(state) {
  const node = state.node;
  const game = importDefaultResult1.useGame(node.gameId);
  return callback(MarkupGameMention, { node, state: state.state });
}
noopAll;
({ jsxs: c3, jsx: c4 } = jsxProd);
createCacheKey = { icon: null, chip: null, chipText: null };
createCacheKey = { width: 16, height: 16, borderRadius: ThemesDefault.radii.xs, marginRight: 2 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: ThemesDefault.radii.xs, paddingHorizontal: 2 };
let obj1 = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: ThemesDefault.radii.xs, paddingHorizontal: 2 };
createCacheKey[2] = { color: ThemesDefault.unsafe_rawColors.BRAND_500 };
let closure_5 = createCacheKey.createStyles(createCacheKey);
let obj2 = { color: ThemesDefault.unsafe_rawColors.BRAND_500 };
const result = require("set").fileFinishedImporting("modules/markup/native/MarkupReactGameMentionRule.tsx");

export default MarkupGameMention;
export function createFetchingGameMentionRule() {
  const gameMention = {
    react(node, arg1, key) {
      return callback(closure_7, { node, state: key }, key.key);
    }
  };
  return { gameMention };
}