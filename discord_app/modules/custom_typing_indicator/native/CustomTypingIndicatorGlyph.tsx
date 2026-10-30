// === Module 13696: CustomTypingIndicatorGlyph ===

// Module 13696 (CustomTypingIndicatorGlyph)
import CustomTypingIndicatorAnimatedEmojiDefault from "CustomTypingIndicatorAnimatedEmoji" /* 13697 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let closure_5 = createStyles.createStyles({ emojiRow: { flexDirection: "row", alignItems: "center" } });
let size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorGlyph.tsx");

export default function CustomTypingIndicatorGlyph(config) {
  config = config.config;
  const size = config.size;
  let emojisKey;
  const tmp = closure_5();
  dependencyMap = config(1406).getEffectiveCustomTypingIndicatorAnimation(config);
  const obj = config(1406);
  if (obj2.hasCustomTypingIndicatorEmojis(config.emojis)) {
    emojisKey = tmp2(1406).getCustomTypingIndicatorEmojisKey(config.emojis);
    const items = [tmp.emojiRow, ];
    if (null == size) {
      let PX_4 = size(575).space.PX_4;
    } else {
      PX_4 = size / 4;
    }
    const obj3 = { style: null, children: null };
    const obj4 = { gap: PX_4 };
    items[1] = obj4;
    obj3.style = items;
    const emojis = config.emojis;
    obj3.children = emojis.map((emoji, index) => jsx(CustomTypingIndicatorAnimatedEmojiDefault, { emoji, emojisKey, index, emojiCount: config.emojis.length, animation, size }, index));
    return <emojisKey style={null}>{null}</emojisKey>;
  } else {
    return jsx(tmp2(1188).Ellipsis, {});
  }
  obj2 = config(1406);
};