// === Module 17757: FormEmojiPicker ===

// Module 17757 (FormEmojiPicker)
import nativeDefault from "native" /* 576 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 11121 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5524 */;

require = fn;
const Fonts = fn(1074).Fonts;
const EmojiIntention = fn(1374).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: { alignItems: "center", flexDirection: "row" }, content: { marginStart: 8, flexGrow: 1 }, placeholder: null, text: null };
createStyles = {};
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_MUTED, 16));
createStyles.placeholder = createStyles;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 16));
createStyles.text = {};
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx");

export default function FormEmojiPicker(emoji) {
  ({ emojiId, emojiName } = emoji.emoji);
  const guildId = emoji.guildId;
  const onChange = emoji.onChange;
  const tmp = closure_6();
  if (emojiId == null) {
    let tmp2Result = tmp2(4213);
    if (emojiName == null) {
      emojiName = "";
    }
    emojiId = tmp2Result.convertSurrogateToName(emojiName, false);
  }
  let obj1 = guildId(15241);
  const emojiByIdOrName = obj1.useEmojiByIdOrName(guildId, emojiId);
  if (null != emojiId) {
    let obj = { guildId, id: emojiId };
    let tmp9 = closure_4(tmp2(15240), obj);
    let tmp10 = closure_4;
  } else {
    obj = { resizeMode: "contain", source: null };
    tmp2Result = tmp2(5587);
    obj.source = tmp2(17758);
    tmp9 = closure_4(tmp2Result, obj);
    tmp10 = closure_4;
  }
  obj1 = {
    style: null,
    accessibilityRole: "link",
    onPress() {
      let obj = {
        guildId,
        onPressEmoji(id) {
          if (null != id.id) {
            if (onChange != null) {
              let obj = { emojiId: id.id };
              tmp3(obj);
            }
          } else if (null != id.optionallyDiverseSequence) {
            if (onChange != null) {
              obj = { emojiName: id.optionallyDiverseSequence };
              tmp(obj);
            }
          }
        },
        pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI
      };
      const result = obj.openEmojiPickerActionSheet(obj);
    },
    children: null
  };
  const items = [tmp.container, onChange(13898)().textInput];
  obj1.style = items;
  const items1 = [tmp9, , ];
  const tmp4 = onChange(13898)();
  const items2 = [tmp.content, ];
  const obj2 = { style: items2, children: null };
  items2[1] = null != emojiByIdOrName ? tmp.text : tmp.placeholder;
  if (null != emojiByIdOrName) {
    let allEmojiNamesString = tmp5(4217).getAllEmojiNamesString(emojiByIdOrName);
    const tmp5Result = tmp5(4217);
  } else {
    const intl = tmp5(1114).intl;
    allEmojiNamesString = intl.string(tmp5(1114).t.gXAN3P);
  }
  obj2.children = allEmojiNamesString;
  items1[1] = tmp10(guildId(1178).LegacyText, obj2);
  const tmp2Result1 = onChange(9050);
  items1[2] = tmp10(guildId(1178).Icon, { size: guildId(1178).Icon.Sizes.MEDIUM, source: onChange(9939) });
  obj1.children = items1;
  return closure_5(tmp2Result1, obj1);
};