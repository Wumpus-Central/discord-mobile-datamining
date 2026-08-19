// discord_app/modules/guild_profile/native/components/GuildProfileTraits.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getAvatarURLDefault from "../../../../utils/AvatarUtils.tsx";
import getEmojiUnavailableReasonDefault from "../../../../utils/EmojiUtils.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import EmojiDefault from "../../../emojis/native/Emoji.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function TraitEmoji(emoji) {
  emoji = emoji.emoji;
  if (null == emoji) {
    return null;
  } else {
    let emojiURL;
    if (null != emoji.id) {
      let obj = { id: null, animated: null, size: 16 };
      ({ id: obj2[0], animated: obj2[1] } = emoji);
      emojiURL = obj.getEmojiURL(obj);
    }
    obj = { src: null, name: null, fastImageStyle: null };
    obj[0] = emojiURL;
    obj[1] = getEmojiUnavailableReasonDefault.isCustomEmoji(emoji) ? emoji.name : emoji.surrogates;
    obj[2] = tmp.emojiImage;
    return callback(EmojiDefault, obj);
  }
}
function GuildProfileTraitView(trait) {
  trait = trait.trait;
  { style: callback3().trait, children: null };
  let obj = { emoji: trait.emoji };
  const items = [callback(TraitEmoji, obj), ];
  obj = { variant: "text-sm/medium", color: "text-default", children: trait.label };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { display: "flex", flexDirection: "row", gap: 4, alignItems: "center", paddingHorizontal: 8, paddingVertical: 4, borderRadius: ThemesDefault.radii.lg, borderWidth: 1, borderStyle: "solid", borderColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: 16, height: 16 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileTraits.tsx");

export default function GuildProfileTraits(profile) {
  profile = profile.profile;
  const items = [profile];
  const memo = React.useMemo(() => {
    const traits = profile.traits;
    const mapped = traits.map((item, index) => {
      const merged = Object.assign(item);
      return { key: "trait-" + index };
    });
    return mapped.filter((item, index) => item.label.length > 0);
  }, items);
  const tmp = callback3();
  return callback(View, { style: callback3().container, children: memo.map((item, index) => callback(closure_9, { trait: item }, item.key)) });
};