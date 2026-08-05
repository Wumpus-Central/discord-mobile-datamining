// discord_app/modules/guild_profile/native/components/GuildProfileTraits.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getAvatarURL } from "../../../../utils/AvatarUtils.tsx";
import { getEmojiUnavailableReason } from "../../../../utils/EmojiUtils.tsx";

let c5;
let closure_6;
const require = arg1;
function TraitEmoji(emoji) {
  emoji = emoji.emoji;
  if (null == emoji) {
    return null;
  } else {
    let emojiURL;
    if (null != emoji.id) {
      let obj = getAvatarURL;
      obj = { id: null, animated: null, size: 16 };
      ({ id: obj2[0], animated: obj2[1] } = emoji);
      emojiURL = obj.getEmojiURL(obj);
    }
    const obj3 = getEmojiUnavailableReason;
    const tmp5 = importDefault;
    obj = { src: null, name: null, fastImageStyle: null };
    obj[0] = emojiURL;
    obj[1] = getEmojiUnavailableReason.isCustomEmoji(emoji) ? emoji.name : emoji.surrogates;
    obj[2] = tmp.emojiImage;
    return callback(tmp5(5301), obj);
  }
}
function GuildProfileTraitView(trait) {
  trait = trait.trait;
  let obj = { style: createCacheKey().trait, children: null };
  obj = { emoji: trait.emoji };
  const items = [callback(TraitEmoji, obj), ];
  obj = { variant: "text-sm/medium", color: "text-default", children: trait.label };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 8 }, trait: null, emojiImage: null };
createCacheKey = { display: "flex", flexDirection: "row", gap: 4, alignItems: "center", paddingHorizontal: 8, paddingVertical: 4, borderRadius: require("Themes").radii.lg, borderWidth: 1, borderStyle: "solid", borderColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: 16, height: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileTraits.tsx");

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
  const tmp = createCacheKey();
  return callback(View, { style: createCacheKey().container, children: memo.map((key) => callback(closure_9, { trait: key }, key.key)) });
};