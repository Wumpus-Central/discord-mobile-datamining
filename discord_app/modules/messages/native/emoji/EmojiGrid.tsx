// === Module 8966: Emoji ===

// Module 8966 (Emoji)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import EmojiDefault from "Emoji" /* 5532 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
function Emoji(guildEmoji) {
  guildEmoji = guildEmoji.guildEmoji;
  const tmp = callback();
  if (null == guildEmoji.id) {
    let tmp3Result = tmp3(4106);
    let uRL = tmp3Result.getURL(guildEmoji.name);
  } else {
    tmp3Result = tmp3(1435);
    let obj = { id: null, animated: null, size: 48 };
    ({ id: obj2[0], animated: obj2[1] } = guildEmoji);
    uRL = tmp3Result.getEmojiURL(obj);
  }
  obj = { src: uRL, fastImageStyle: tmp.gridEmojiFastImage, textEmojiStyle: tmp.gridEmojiText, name: guildEmoji.name };
  return jsx(EmojiDefault, { src: uRL, fastImageStyle: tmp.gridEmojiFastImage, textEmojiStyle: tmp.gridEmojiText, name: guildEmoji.name }, guildEmoji.id);
}
noopAll;
createCacheKey = { gridEmojiFastImage: null, gridEmojiText: null, emojiGridRowContainer: null, emojiGridContainer: null };
createCacheKey = { height: 40, width: 40, borderRadius: ThemesDefault.radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { fontSize: 18, lineHeight: 44 };
createCacheKey[2] = { marginTop: 16, flexDirection: "row" };
createCacheKey[3] = { marginTop: 8, alignItems: "center" };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/messages/native/emoji/EmojiGrid.tsx");

export const EmojiGrid = function EmojiGrid(numberToShow) {
  ({ expressionSourceGuild, doNotDisplayEmojiIds } = numberToShow);
  if (doNotDisplayEmojiIds === undefined) {
    doNotDisplayEmojiIds = [];
  }
  let num = numberToShow.numberToShow;
  if (num === undefined) {
    num = 10;
  }
  let num2 = numberToShow.maxPerRow;
  if (num2 === undefined) {
    num2 = 5;
  }
  let obj;
  obj = {};
  const merged = Object.assign(doNotDisplayEmojiIds(8951).useSharedMessageEmojiStyles());
  const merged1 = Object.assign(callback());
  let emojis;
  if (expressionSourceGuild != null) {
    emojis = expressionSourceGuild.emojis;
  }
  if (emojis == null) {
    emojis = [];
  }
  const substr = emojis.slice(0, num + 1);
  const found = substr.filter((id) => !doNotDisplayEmojiIds.includes(id.id));
  const substr1 = found.slice(0, num);
  const obj2 = doNotDisplayEmojiIds(8951);
  const tmp = doNotDisplayEmojiIds;
  obj = { style: obj.emojiGridContainer, children: null };
  obj = {
    gap: 8,
    children: obj(8967)(substr1, num2).map((arr) => {
      obj = { style: obj.emojiGridRowContainer, children: null };
      obj = { gap: 32, children: arr.map((guildEmoji) => callback(closure_6, { guildEmoji }, guildEmoji.id)) };
      obj[1] = closure_1_4(doNotDisplayEmojiIds(closure_1_2[10]).GappedList, obj);
      return closure_1_4(closure_1_3, obj, arg1);
    })
  };
  obj[1] = jsx(tmp(8969).GappedList, {
    gap: 8,
    children: obj(8967)(substr1, num2).map((arr) => {
      obj = { style: obj.emojiGridRowContainer, children: null };
      obj = { gap: 32, children: arr.map((guildEmoji) => callback(closure_6, { guildEmoji }, guildEmoji.id)) };
      obj[1] = closure_1_4(doNotDisplayEmojiIds(closure_1_2[10]).GappedList, obj);
      return closure_1_4(closure_1_3, obj, arg1);
    })
  });
  return <View gap={8}>{obj(8967)(substr1, num2).map((arr) => {
    obj = { style: obj.emojiGridRowContainer, children: null };
    obj = { gap: 32, children: arr.map((guildEmoji) => callback(closure_6, { guildEmoji }, guildEmoji.id)) };
    obj[1] = closure_1_4(doNotDisplayEmojiIds(closure_1_2[10]).GappedList, obj);
    return closure_1_4(closure_1_3, obj, arg1);
  })}</View>;
};