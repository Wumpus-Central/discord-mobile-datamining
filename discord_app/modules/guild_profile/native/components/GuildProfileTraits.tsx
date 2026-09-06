// === Module 9202: GuildProfileTraits ===

// Module 9202 (GuildProfileTraits)
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4217 */;
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;

require = fn;
function TraitEmoji(emoji) {
  emoji = emoji.emoji;
  if (null == emoji) {
    return null;
  } else {
    let emojiURL;
    if (null != emoji.id) {
      let obj = { id: null, animated: null, size: 16 };
      ({ id: obj2.id, animated: obj2.animated } = emoji);
      emojiURL = obj.getEmojiURL(obj);
    }
    const tmp5 = importDefault;
    obj = { src: emojiURL, name: EmojiUtilsDefault.isCustomEmoji(emoji) ? emoji.name : emoji.surrogates, fastImageStyle: tmp.emojiImage };
    return hasOwnProperty(tmp5(7130), obj);
  }
}
function GuildProfileTraitView(trait) {
  trait = trait.trait;
  let obj = { style: closure_7().trait, children: null };
  obj = { emoji: trait.emoji };
  const items = [hasOwnProperty(TraitEmoji, obj), ];
  obj = { variant: "text-sm/medium", color: "text-default", children: trait.label };
  items[1] = hasOwnProperty(Text_Text.Text, obj);
  obj.children = items;
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: { display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 8 }, trait: null, emojiImage: null };
createStyles = { display: "flex", flexDirection: "row", gap: 4, alignItems: "center", paddingHorizontal: 8, paddingVertical: 4, borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.trait = createStyles;
createStyles.emojiImage = { width: 16, height: 16 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileTraits.tsx");

export default function GuildProfileTraits(profile) {
  profile = profile.profile;
  const items = [profile];
  const memo = noop.useMemo(() => {
    const traits = profile.traits;
    const mapped = traits.map((item, index) => {
      const merged = Object.assign(item);
      return { key: "trait-" + index };
    });
    return mapped.filter((label) => label.label.length > 0);
  }, items);
  const tmp = closure_7();
  return closure_5(View, { style: closure_7().container, children: memo.map((trait) => closure_1_5(GuildProfileTraitView, { trait }, trait.key)) });
};