// === Module 13071: MarkupGameMention ===

// Module 13071 (MarkupGameMention)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
noopAll;
({ jsxs: c3, jsx: c4 } = jsxProd);
const createCacheKey = { width: 16, height: 16, borderRadius: ThemesDefault.radii.xs, marginRight: 2 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: ThemesDefault.radii.xs, paddingHorizontal: 2 };
createCacheKey[2] = { color: ThemesDefault.unsafe_rawColors.BRAND_500 };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/markup/native/MarkupReactGameMentionRule.tsx");

export default function MarkupGameMention(state) {
  state = state.state;
  const tmp = callback2();
  const gameId = state.node.gameId;
  let obj = state(6898);
  const gameMentionData = obj.useGameMentionData(gameId);
  const intl = state(1236).intl;
  const stringResult = intl.string(state(1236).t["11pdXZ"]);
  let gameName;
  if (gameMentionData != null) {
    gameName = gameMentionData.gameName;
  }
  if (gameName == null) {
    gameName = stringResult;
  }
  let gameIcon;
  if (gameMentionData != null) {
    gameIcon = gameMentionData.gameIcon;
  }
  const tmp8Result = gameId(4507)(gameId, gameIcon, { size: 32 });
  if (null == gameMentionData) {
    let textColor;
    if (state != null) {
      textColor = state.textColor;
    }
    obj = { color: null, children: null };
    obj[0] = textColor;
    const items = ["@", stringResult];
    obj[1] = items;
    return callback(tmp2(4766).MarkupText, obj, state.key);
  } else {
    obj = { size: "sm", style: null };
    obj[1] = tmp.icon;
    let tmp11 = null != tmp8Result;
    if (tmp11) {
      tmp11 = "" !== tmp8Result;
    }
    let tmp17Result = callback(tmp2(6683).UnknownGameIcon, obj);
    if (tmp11) {
      obj1 = { style: null, source: null };
      obj1[0] = tmp.icon;
      const obj2 = { uri: null };
      obj2[0] = tmp8Result;
      obj1[1] = obj2;
      tmp17Result = callback(tmp7(5449), obj1);
    }
    let str2 = "button";
    if (state.noStyleAndInteraction) {
      str2 = "text";
    }
    const obj3 = { accessibilityRole: null, style: null, color: null, onPress: null, children: null };
    obj3[0] = str2;
    obj3[1] = tmp.chip;
    let textColor1;
    if (state != null) {
      textColor1 = state.textColor;
    }
    obj3[2] = textColor1;
    let fn;
    if (!state.noStyleAndInteraction) {
      fn = () => {
        let obj = gameId(dependencyMap[10]);
        { gameId, gameProfileModalChecks: obj, source: state(dependencyMap[11]).GameProfileSources.GameMention, sourceUserId: state.authorId };
        obj = { shouldOpenGameProfile: true, gameId };
        obj.openGameProfileModal(obj);
      };
    }
    obj3[3] = fn;
    const items1 = [tmp17Result, ];
    const obj4 = { variant: "text-sm/medium", style: null, children: null };
    obj4[1] = tmp.chipText;
    obj4[2] = gameName;
    items1[1] = callback(tmp2(4734).Text, obj4);
    obj3[4] = items1;
    return callback(tmp2(4766).MarkupText, obj3, state.key);
  }
  tmp7 = gameId;
  const tmp8 = gameId(4507);
};