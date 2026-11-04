// discord_app/modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx
import openEmojiPickerActionSheet from "../../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const EmojiIntention = fn(1388).EmojiIntention;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx");

export default function FormEmojiPicker(emoji) {
  ({ emojiId, emojiName } = emoji.emoji);
  const guildId = emoji.guildId;
  const onChange = emoji.onChange;
  if (emojiId == null) {
    if (emojiName == null) {
      emojiName = "";
    }
    emojiId = onChange(5087).convertSurrogateToName(emojiName, false);
    let obj = onChange(5087);
  }
  const emojiByIdOrName = guildId(17477).useEmojiByIdOrName(guildId, emojiId);
  let allEmojiNamesString = null;
  if (null != emojiByIdOrName) {
    allEmojiNamesString = tmp3(5091).getAllEmojiNamesString(emojiByIdOrName);
    const tmp3Result = tmp3(5091);
  }
  const intl = tmp3(1113).intl;
  let obj2 = guildId(17477);
  if (null != emojiId) {
    const obj3 = { guildId, id: emojiId };
    let tmp9 = jsx(onChange(17476), { guildId, id: emojiId });
    let tmp8 = jsx;
  } else {
    tmp8 = jsx;
    const obj4 = { IconComponent: tmp3(9599).ReactionIcon };
    tmp9 = jsx(tmp3(7116).TableRow.Icon, { IconComponent: tmp3(9599).ReactionIcon });
  }
  const obj5 = { icon: tmp9, label: null, arrow: true, onPress: null };
  if (allEmojiNamesString == null) {
    const obj6 = { variant: "body-md/medium", color: "text-muted", children: stringResult };
    allEmojiNamesString = tmp8(tmp3(5761).Text, obj6);
  }
  obj5.label = allEmojiNamesString;
  obj5.onPress = function handleSelectEmoji() {
    const result = openEmojiPickerActionSheet.openEmojiPickerActionSheet({
      guildId,
      onPressEmoji(id) {
        if (null != id.id) {
          if (onChange != null) {
            const obj2 = { emojiId: id.id };
            tmp3(obj2);
          }
        } else if (null != id.optionallyDiverseSequence) {
          if (onChange != null) {
            const obj = { emojiName: id.optionallyDiverseSequence };
            tmp(obj);
          }
        }
      },
      pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI,
    });
  };
  return tmp8(guildId(7116).TableRow, obj5);
}
