// discord_app/modules/messages/native/emoji/EmojiGrid.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Emoji } from "../../../emojis/native/Emoji.tsx";

const require = arg1;
function Emoji(guildEmoji) {
  guildEmoji = guildEmoji.guildEmoji;
  const tmp = createCacheKey();
  if (null == guildEmoji.id) {
    let tmp3Result = tmp3(3946);
    let uRL = tmp3Result.getURL(guildEmoji.name);
  } else {
    tmp3Result = tmp3(1416);
    let obj = { id: null, animated: null, size: 48 };
    ({ id: obj2[0], animated: obj2[1] } = guildEmoji);
    uRL = tmp3Result.getEmojiURL(obj);
  }
  obj = { src: uRL, fastImageStyle: tmp.gridEmojiFastImage, textEmojiStyle: tmp.gridEmojiText, name: guildEmoji.name };
  return jsx(Emoji, { src: uRL, fastImageStyle: tmp.gridEmojiFastImage, textEmojiStyle: tmp.gridEmojiText, name: guildEmoji.name }, guildEmoji.id);
}
createCacheKey = { gridEmojiFastImage: null, gridEmojiText: null, emojiGridRowContainer: null, emojiGridContainer: null };
createCacheKey = { height: 40, width: 40, borderRadius: require("Themes").radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { fontSize: 18, lineHeight: 44 };
createCacheKey[2] = { marginTop: 16, flexDirection: "row" };
createCacheKey[3] = { marginTop: 8, alignItems: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/messages/native/emoji/EmojiGrid.tsx");

export const EmojiGrid = function EmojiGrid(numberToShow) {
  let doNotDisplayEmojiIds;
  let expressionSourceGuild;
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
  const merged = Object.assign(doNotDisplayEmojiIds(8736).useSharedMessageEmojiStyles());
  const merged1 = Object.assign(createCacheKey());
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
  const obj2 = doNotDisplayEmojiIds(8736);
  const tmp = doNotDisplayEmojiIds;
  obj = { style: obj.emojiGridContainer, children: null };
  obj = { gap: 8, children: null };
  obj[1] = obj(8752)(substr1, num2).map((arr) => {
    obj = { style: obj.emojiGridRowContainer, children: null };
    obj = { gap: 32, children: null };
    obj[1] = arr.map((guildEmoji) => callback(closure_6, { guildEmoji }, guildEmoji.id));
    obj[1] = outer1_4(doNotDisplayEmojiIds(outer1_2[10]).GappedList, obj);
    return outer1_4(outer1_3, obj, arg1);
  });
  obj[1] = jsx(tmp(8754).GappedList, { gap: 8, children: null });
  return <View gap={8}>{null}</View>;
};