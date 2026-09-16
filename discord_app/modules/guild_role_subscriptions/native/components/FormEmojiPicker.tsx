// discord_app/modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import openEmojiPickerActionSheet from "../../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import TextStyles_mod from "../../../rebrand/native/TextStyles.tsx";

require = fn;
const Fonts = fn(1074).Fonts;
const EmojiIntention = fn(1375).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  container: { alignItems: "center", flexDirection: "row" },
  content: { marginStart: 8, flexGrow: 1 },
  placeholder: null,
  text: null,
};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_MUTED, 16));
obj2.placeholder = {};
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 16));
obj2.text = {};
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx");

export default function FormEmojiPicker(emoji) {
  ({ emojiId, emojiName } = emoji.emoji);
  const guildId = emoji.guildId;
  const onChange = emoji.onChange;
  const tmp = closure_6();
  if (emojiId == null) {
    if (emojiName == null) {
      emojiName = "";
    }
    emojiId = tmp2(4290).convertSurrogateToName(emojiName, false);
    const tmp2Result = tmp2(4290);
  }
  const tmp4 = onChange(14004)();
  const emojiByIdOrName = guildId(15351).useEmojiByIdOrName(guildId, emojiId);
  if (null != emojiId) {
    let obj = { guildId, id: emojiId };
    let tmp9 = closure_4(tmp2(15350), obj);
    let tmp10 = closure_4;
  } else {
    const obj3 = { resizeMode: "contain", source: tmp2(17969) };
    tmp9 = closure_4(tmp2(5673), obj3);
    tmp10 = closure_4;
    const tmp2Result3 = tmp2(5673);
  }
  const obj4 = {
    style: null,
    accessibilityRole: "link",
    onPress() {
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
    },
    children: null,
  };
  const items = [tmp.container, tmp4.textInput];
  obj4.style = items;
  const items1 = [tmp9, ,];
  let obj2 = guildId(15351);
  const items2 = [tmp.content];
  const obj5 = { style: items2, children: null };
  items2[1] = null != emojiByIdOrName ? tmp.text : tmp.placeholder;
  if (null != emojiByIdOrName) {
    let allEmojiNamesString = tmp5(4294).getAllEmojiNamesString(emojiByIdOrName);
    const tmp5Result = tmp5(4294);
  } else {
    const intl = tmp5(1115).intl;
    allEmojiNamesString = intl.string(tmp5(1115).t.gXAN3P);
  }
  obj5.children = allEmojiNamesString;
  items1[1] = tmp10(guildId(1177).LegacyText, obj5);
  const tmp2Result4 = onChange(9193);
  items1[2] = tmp10(guildId(1177).Icon, { size: guildId(1177).Icon.Sizes.MEDIUM, source: onChange(10079) });
  obj4.children = items1;
  return closure_5(tmp2Result4, obj4);
}
