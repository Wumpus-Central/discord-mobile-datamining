// === Module 10585: EmojiGrid ===

// Module 10585 (EmojiGrid)
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4379 */;
import EmojiDefault from "Emoji" /* 7326 */;
import LayoutUtils from "LayoutUtils" /* 10588 */;
import noop from "module_19" /* 19 */;

require = fn;
function Emoji(guildEmoji) {
  guildEmoji = guildEmoji.guildEmoji;
  const tmp = closure_5();
  if (null == guildEmoji.id) {
    let uRL = EmojiUtilsDefault.getURL(guildEmoji.name);
    const tmp3Result = EmojiUtilsDefault;
  } else {
    ({ id: obj2.id, animated: obj2.animated } = guildEmoji);
    uRL = AvatarUtilsDefault.getEmojiURL({ id: null, animated: null, size: 48 });
    const obj = { id: null, animated: null, size: 48 };
    const tmp3Result2 = AvatarUtilsDefault;
  }
  return jsx(EmojiDefault, { src: uRL, fastImageStyle: tmp.gridEmojiFastImage, textEmojiStyle: tmp.gridEmojiText, name: guildEmoji.name }, guildEmoji.id);
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4722);
let obj2 = { gridEmojiFastImage: null, gridEmojiText: null, emojiGridRowContainer: null, emojiGridContainer: null };
let size = { height: 40, width: 40, borderRadius: nativeDefault.radii.sm };
obj2.gridEmojiFastImage = size;
obj2.gridEmojiText = { fontSize: 18, lineHeight: 44 };
obj2.emojiGridRowContainer = { marginTop: 16, flexDirection: "row" };
obj2.emojiGridContainer = { marginTop: 8, alignItems: "center" };
let closure_5 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/emoji/EmojiGrid.tsx");

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
  const merged = Object.assign(doNotDisplayEmojiIds(10573).useSharedMessageEmojiStyles());
  const merged1 = Object.assign(closure_5());
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
  const obj2 = doNotDisplayEmojiIds(10573);
  const tmp = doNotDisplayEmojiIds;
  const obj3 = { style: obj.emojiGridContainer, children: null };
  const arr4 = obj(10586)(substr1, num2);
  obj3.children = jsx(tmp(10588).GappedList, {
    gap: 8,
    children: obj(10586)(substr1, num2).map((arr, index) => {
      obj = { style: obj.emojiGridRowContainer, children: jsx(LayoutUtils.GappedList, { gap: 32, children: arr.map((guildEmoji) => closure_1_4(closure_1_6, { guildEmoji }, guildEmoji.id)) }) };
      return <View key={index} style={obj.emojiGridRowContainer}>{jsx(LayoutUtils.GappedList, { gap: 32, children: arr.map((guildEmoji) => closure_1_4(closure_1_6, { guildEmoji }, guildEmoji.id)) })}</View>;
    })
  });
  return <View style={obj.emojiGridContainer}>{null}</View>;
};