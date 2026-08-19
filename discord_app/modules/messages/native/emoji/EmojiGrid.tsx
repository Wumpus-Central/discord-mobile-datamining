// discord_app/modules/messages/native/emoji/EmojiGrid.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getAvatarURLDefault from "../../../../utils/AvatarUtils.tsx";
import getEmojiUnavailableReasonDefault from "../../../../utils/EmojiUtils.tsx";
import EmojiDefault from "../../../emojis/native/Emoji.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
function Emoji(guildEmoji) {
  guildEmoji = guildEmoji.guildEmoji;
  const tmp = callback();
  if (null == guildEmoji.id) {
    let tmp3Result = getEmojiUnavailableReasonDefault;
    let uRL = tmp3Result.getURL(guildEmoji.name);
  } else {
    tmp3Result = getAvatarURLDefault;
    let obj = { id: null, animated: null, size: 48 };
    ({ id: obj2[0], animated: obj2[1] } = guildEmoji);
    uRL = tmp3Result.getEmojiURL(obj);
  }
  obj = { src: uRL, fastImageStyle: tmp.gridEmojiFastImage, textEmojiStyle: tmp.gridEmojiText, name: guildEmoji.name };
  return jsx(EmojiDefault, { src: uRL, fastImageStyle: tmp.gridEmojiFastImage, textEmojiStyle: tmp.gridEmojiText, name: guildEmoji.name }, guildEmoji.id);
}
noopAll;
const createCacheKey = { height: 40, width: 40, borderRadius: ThemesDefault.radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { fontSize: 18, lineHeight: 44 };
createCacheKey[2] = { marginTop: 16, flexDirection: "row" };
createCacheKey[3] = { marginTop: 8, alignItems: "center" };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/messages/native/emoji/EmojiGrid.tsx");

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
  let obj = {};
  const merged = Object.assign(doNotDisplayEmojiIds(9402).useSharedMessageEmojiStyles());
  const merged1 = Object.assign(callback());
  let emojis;
  if (expressionSourceGuild != null) {
    emojis = expressionSourceGuild.emojis;
  }
  if (emojis == null) {
    emojis = [];
  }
  const substr = emojis.slice(0, num + 1);
  const found = substr.filter((item, index) => !doNotDisplayEmojiIds.includes(item.id));
  const substr1 = found.slice(0, num);
  const obj2 = doNotDisplayEmojiIds(9402);
  const tmp = doNotDisplayEmojiIds;
  obj = { style: obj.emojiGridContainer, children: null };
  obj = {
    gap: 8,
    children: obj(9420)(substr1, num2).map((item, index) => {
      obj = { gap: 32, children: item.map((item, index) => callback(closure_6, { guildEmoji: item }, item.id)) };
      obj[1] = jsx(doNotDisplayEmojiIds(dependencyMap[10]).GappedList, { gap: 32, children: item.map((item, index) => callback(closure_6, { guildEmoji: item }, item.id)) });
      return <View key={index} gap={32}>{item.map((item, index) => callback(closure_6, { guildEmoji: item }, item.id))}</View>;
    })
  };
  obj[1] = jsx(tmp(9422).GappedList, {
    gap: 8,
    children: obj(9420)(substr1, num2).map((item, index) => {
      obj = { gap: 32, children: item.map((item, index) => callback(closure_6, { guildEmoji: item }, item.id)) };
      obj[1] = jsx(doNotDisplayEmojiIds(dependencyMap[10]).GappedList, { gap: 32, children: item.map((item, index) => callback(closure_6, { guildEmoji: item }, item.id)) });
      return <View key={index} gap={32}>{item.map((item, index) => callback(closure_6, { guildEmoji: item }, item.id))}</View>;
    })
  });
  return <View gap={8}>{obj(9420)(substr1, num2).map((item, index) => {
    obj = { gap: 32, children: item.map((item, index) => callback(closure_6, { guildEmoji: item }, item.id)) };
    obj[1] = jsx(doNotDisplayEmojiIds(dependencyMap[10]).GappedList, { gap: 32, children: item.map((item, index) => callback(closure_6, { guildEmoji: item }, item.id)) });
    return <View key={index} gap={32}>{item.map((item, index) => callback(closure_6, { guildEmoji: item }, item.id))}</View>;
  })}</View>;
};