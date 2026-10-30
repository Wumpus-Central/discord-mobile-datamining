// discord_app/modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx
import openEmojiPickerActionSheet from "../../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const EmojiIntention = fn(1387).EmojiIntention;
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
    emojiId = tmp(4955).convertSurrogateToName(emojiName, false);
    const tmpResult = tmp(4955);
  }
  const tmp3 = onChange(15680)();
  const emojiByIdOrName = guildId(17161).useEmojiByIdOrName(guildId, emojiId);
  let allEmojiNamesString = null;
  if (null != emojiByIdOrName) {
    allEmojiNamesString = tmp4(4959).getAllEmojiNamesString(emojiByIdOrName);
    const tmp4Result = tmp4(4959);
  }
  const intl = tmp4(1114).intl;
  const stringResult = intl.string(guildId(1114).t.gXAN3P);
  if (null != emojiId) {
    let obj = { guildId, id: emojiId };
    let tmp9 = jsx(tmp(17160), { guildId, id: emojiId });
    let tmp8 = jsx;
  } else {
    tmp8 = jsx;
    const obj3 = { IconComponent: tmp4(9430).ReactionIcon };
    tmp9 = jsx(tmp4(6969).TableRow.Icon, { IconComponent: tmp4(9430).ReactionIcon });
  }
  const obj4 = { style: tmp3.inputContainer, children: null };
  const obj5 = {
    start: true,
    end: true,
    icon: tmp9,
    label: null,
    accessibilityLabel: null,
    arrow: true,
    onPress: null,
  };
  let tmp8Result = allEmojiNamesString;
  if (allEmojiNamesString == null) {
    const obj6 = { variant: "text-md/medium", color: "text-muted", children: stringResult };
    tmp8Result = tmp8(tmp4(5619).Text, obj6);
  }
  obj5.label = tmp8Result;
  if (allEmojiNamesString == null) {
    allEmojiNamesString = stringResult;
  }
  obj5.accessibilityLabel = allEmojiNamesString;
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
  obj4.children = tmp8(guildId(6969).TableRow, obj5);
  return tmp8(View, obj4);
}
