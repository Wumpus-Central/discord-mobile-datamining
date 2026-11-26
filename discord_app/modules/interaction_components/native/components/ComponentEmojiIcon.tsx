// discord_app/modules/interaction_components/native/components/ComponentEmojiIcon.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import EmojiDefault from "../../../emojis/native/Emoji.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const jsx = fn(21).jsx;
const createStyles = fn(5043);
const obj2 = {
  emojiWrapper: { flexShrink: 0, borderRadius: nativeDefault.radii.xs, overflow: "hidden" },
  textEmoji: null,
  fastImageEmoji: null,
};
const obj3 = { flexShrink: 0, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj2.textEmoji = { fontSize: 16, color: nativeDefault.colors.TEXT_DEFAULT };
obj2.fastImageEmoji = { width: 24, height: 24 };
let closure_3 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/components/ComponentEmojiIcon.tsx");

export default function ComponentEmojiIcon(emoji) {
  emoji = emoji.emoji;
  const tmp = closure_3();
  return jsx(EmojiDefault, {
    src: emoji.src,
    name: emoji.name,
    style: tmp.emojiWrapper,
    textEmojiStyle: tmp.textEmoji,
    fastImageStyle: tmp.fastImageEmoji,
  });
}
