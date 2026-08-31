// === Module 8989: TraitEmoji ===

// Module 8989 (TraitEmoji)
import ThemesDefault from "Themes" /* 712 */;
import getAvatarURLDefault from "getAvatarURL" /* 1431 */;
import getEmojiUnavailableReasonDefault from "getEmojiUnavailableReason" /* 4108 */;
import Text from "Text" /* 4444 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
function TraitEmoji(emoji) {
  emoji = emoji.emoji;
  if (null == emoji) {
    return null;
  } else {
    let emojiURL;
    if (null != emoji.id) {
      let obj = getAvatarURLDefault;
      obj = { id: null, animated: null, size: 16 };
      ({ id: obj2[0], animated: obj2[1] } = emoji);
      emojiURL = obj.getEmojiURL(obj);
    }
    const obj3 = getEmojiUnavailableReasonDefault;
    const tmp5 = importDefault;
    obj = { src: null, name: null, fastImageStyle: null };
    obj[0] = emojiURL;
    obj[1] = getEmojiUnavailableReasonDefault.isCustomEmoji(emoji) ? emoji.name : emoji.surrogates;
    obj[2] = tmp.emojiImage;
    return callback(tmp5(5553), obj);
  }
}
function GuildProfileTraitView(trait) {
  trait = trait.trait;
  let obj = { style: callback3().trait, children: null };
  obj = { emoji: trait.emoji };
  const items = [callback(TraitEmoji, obj), ];
  obj = { variant: "text-sm/medium", color: "text-default", children: trait.label };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 8 }, trait: null, emojiImage: null };
createCacheKey = { display: "flex", flexDirection: "row", gap: 4, alignItems: "center", paddingHorizontal: 8, paddingVertical: 4, borderRadius: ThemesDefault.radii.lg, borderWidth: 1, borderStyle: "solid", borderColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: 16, height: 16 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileTraits.tsx");

export default function GuildProfileTraits(profile) {
  profile = profile.profile;
  const items = [profile];
  const memo = React.useMemo(() => {
    const traits = profile.traits;
    const mapped = traits.map((arg0, arg1) => {
      const merged = Object.assign(arg0);
      return { key: "trait-" + arg1 };
    });
    return mapped.filter((label) => label.label.length > 0);
  }, items);
  const tmp = callback3();
  return callback(View, { style: callback3().container, children: memo.map((key) => callback(closure_9, { trait: key }, key.key)) });
};