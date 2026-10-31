// === Module 10068: EmojiGrid ===

// Module 10068 (EmojiGrid)
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4964 */;
import Stack_Stack from "Stack/Stack" /* 6027 */;
import EmojiDefault from "Emoji" /* 7300 */;
import noop from "module_19" /* 19 */;

require = fn;
function Emoji(guildEmoji) {
  guildEmoji = guildEmoji.guildEmoji;
  const tmp = closure_4();
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
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let obj2 = { gridEmojiFastImage: null, gridEmojiText: null, emojiGridRowContainer: null, emojiGridContainer: null };
let size = { height: 40, width: 40, borderRadius: nativeDefault.radii.sm };
obj2.gridEmojiFastImage = size;
obj2.gridEmojiText = { fontSize: 18, lineHeight: 44 };
obj2.emojiGridRowContainer = { marginTop: 16 };
obj2.emojiGridContainer = { marginTop: 8 };
let closure_4 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/emoji/EmojiGrid.tsx");

export function EmojiGrid(numberToShow) {
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
  const merged = Object.assign(doNotDisplayEmojiIds(10053).useSharedMessageEmojiStyles());
  const merged1 = Object.assign(closure_4());
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
  const obj2 = doNotDisplayEmojiIds(10053);
  const tmp = doNotDisplayEmojiIds;
  const arr4 = obj(10069)(substr1, num2);
  return jsx(tmp(6027).Stack, {
    spacing: 8,
    align: "center",
    style: obj.emojiGridContainer,
    children: obj(10069)(substr1, num2).map((arr, index) => {
      obj = { direction: "horizontal", spacing: 32, justify: "center", style: obj.emojiGridRowContainer, children: arr.map((guildEmoji) => closure_1_3(closure_1_5, { guildEmoji }, guildEmoji.id)) };
      return jsx(Stack_Stack.Stack, { direction: "horizontal", spacing: 32, justify: "center", style: obj.emojiGridRowContainer, children: arr.map((guildEmoji) => closure_1_3(closure_1_5, { guildEmoji }, guildEmoji.id)) }, index);
    })
  });
}