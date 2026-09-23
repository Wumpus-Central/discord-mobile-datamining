// discord_app/modules/guild_profile/native/components/GuildProfileTraits.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import EmojiUtilsDefault from "../../../../utils/EmojiUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import EmojiDefault from "../../../emojis/native/Emoji.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function TraitEmoji(emoji) {
  emoji = emoji.emoji;
  if (null == emoji) {
    return null;
  } else {
    let emojiURL;
    if (null != emoji.id) {
      ({ id: obj2.id, animated: obj2.animated } = emoji);
      emojiURL = AvatarUtilsDefault.getEmojiURL({ id: null, animated: null, size: 16 });
      const obj4 = { id: null, animated: null, size: 16 };
    }
    const obj6 = {
      src: emojiURL,
      name: EmojiUtilsDefault.isCustomEmoji(emoji) ? emoji.name : emoji.surrogates,
      fastImageStyle: tmp.emojiImage,
    };
    return hasOwnProperty(EmojiDefault, obj6);
  }
}
function GuildProfileTraitView(trait) {
  trait = trait.trait;
  const obj = { style: closure_7().trait, children: null };
  const items = [
    hasOwnProperty(TraitEmoji, { emoji: trait.emoji }),
    hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: trait.label }),
  ];
  obj.children = items;
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4827);
const obj2 = {
  container: { display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 8 },
  trait: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: nativeDefault.radii.lg,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
  },
  emojiImage: { width: 16, height: 16 },
};
let closure_7 = createStyles.createStyles(obj2);
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
  return closure_5(View, {
    style: closure_7().container,
    children: memo.map((trait) => closure_1_5(GuildProfileTraitView, { trait }, trait.key)),
  });
}
