// === Module 11981: CustomTypingIndicatorGlyph ===

// Module 11981 (CustomTypingIndicatorGlyph)
import CustomTypingIndicatorAnimatedEmojiDefault from "CustomTypingIndicatorAnimatedEmoji" /* 11982 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ emojiRow: { flexDirection: "row", alignItems: "center" } });
let size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorGlyph.tsx");

export default function CustomTypingIndicatorGlyph(config) {
  let map = config.config;
  const size = config.size;
  dependencyMap = undefined;
  let obj = dependencyMap;
  const tmp = closure_5();
  const tmp2 = map;
  dependencyMap = map(1392).getEffectiveCustomTypingIndicatorAnimation(map);
  const obj2 = map(1392);
  if (obj3.hasCustomTypingIndicatorEmojis(map.emojis)) {
    let items = [tmp.emojiRow, ];
    if (null == size) {
      let PX_4 = size(576).space.PX_4;
    } else {
      PX_4 = size / 4;
    }
    obj = { style: null, children: null };
    obj = { gap: PX_4 };
    items[1] = obj;
    obj.style = items;
    items = map.emojis;
    map = items.map;
    obj.children = map((emoji, index) => jsx(CustomTypingIndicatorAnimatedEmojiDefault, { emoji, index, emojiCount: map.emojis.length, animation, size }, index));
    <View gap={PX_4} />;
  } else {
    return jsx(tmp2(1178).Ellipsis, {});
  }
  obj3 = map(1392);
};