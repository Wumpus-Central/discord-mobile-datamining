// === Module 12412: ComponentEmojiIcon ===

// Module 12412 (ComponentEmojiIcon)
import nativeDefault from "native" /* 575 */;
import EmojiDefault from "Emoji" /* 7488 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const createStyles = fn(5043);
const obj2 = { emojiWrapper: { flexShrink: 0, borderRadius: nativeDefault.radii.xs, overflow: "hidden" }, textEmoji: null, fastImageEmoji: null };
const obj3 = { flexShrink: 0, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj2.textEmoji = { fontSize: 16, color: nativeDefault.colors.TEXT_DEFAULT };
obj2.fastImageEmoji = { width: 24, height: 24 };
let closure_3 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/components/ComponentEmojiIcon.tsx");

export default function ComponentEmojiIcon(emoji) {
  emoji = emoji.emoji;
  const tmp = closure_3();
  return jsx(EmojiDefault, { src: emoji.src, name: emoji.name, style: tmp.emojiWrapper, textEmojiStyle: tmp.textEmoji, fastImageStyle: tmp.fastImageEmoji });
};