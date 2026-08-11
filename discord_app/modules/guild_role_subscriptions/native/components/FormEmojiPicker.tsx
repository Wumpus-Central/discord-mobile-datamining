// discord_app/modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx
import "set";
import { Fonts } from "ME";
import { EmojiIntention } from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { alignItems: "center", flexDirection: "row" }, content: { marginStart: 8, flexGrow: 1 }, placeholder: null, text: null };
createCacheKey = {};
const merged = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("Themes").colors.TEXT_MUTED, 16));
createCacheKey[2] = createCacheKey;
let obj1 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("Themes").colors.TEXT_DEFAULT, 16));
createCacheKey[3] = obj1;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx");

export default function FormEmojiPicker(emoji) {
  let emojiId;
  let emojiName;
  ({ emojiId, emojiName } = emoji.emoji);
  const guildId = emoji.guildId;
  const onChange = emoji.onChange;
  const tmp = createCacheKey();
  if (emojiId == null) {
    let tmp2Result = tmp2(3961);
    if (emojiName == null) {
      emojiName = "";
    }
    emojiId = tmp2Result.convertSurrogateToName(emojiName, false);
  }
  let obj1 = guildId(14485);
  const emojiByIdOrName = obj1.useEmojiByIdOrName(guildId, emojiId);
  if (null != emojiId) {
    let obj = { guildId: null, id: null };
    obj[0] = guildId;
    obj[1] = emojiId;
    let tmp9 = callback(tmp2(14484), obj);
    let tmp10 = callback;
  } else {
    obj = { resizeMode: "contain", source: null };
    tmp2Result = tmp2(5268);
    obj[1] = tmp2(16857);
    tmp9 = callback(tmp2Result, obj);
    tmp10 = callback;
  }
  obj1 = {
    style: items,
    accessibilityRole: "link",
    onPress() {
      let obj = guildId(outer1_2[14]);
      obj = {
        guildId,
        onPressEmoji(id) {
          if (null != id.id) {
            if (closure_1 != null) {
              let obj = { emojiId: null };
              obj[0] = id.id;
              tmp3(obj);
            }
          } else if (null != id.optionallyDiverseSequence) {
            if (closure_1 != null) {
              obj = { emojiName: null };
              obj[0] = id.optionallyDiverseSequence;
              tmp(obj);
            }
          }
        },
        pickerIntention: outer1_3.GUILD_ROLE_BENEFIT_EMOJI
      };
      const result = obj.openEmojiPickerActionSheet(obj);
    },
    children: null
  };
  items = [tmp.container, onChange(13255)().textInput];
  const items1 = [tmp9, , ];
  const tmp12 = closure_5;
  const tmp4 = onChange(13255)();
  const items2 = [tmp.content, ];
  const obj2 = { style: items2, children: null };
  items2[1] = null != emojiByIdOrName ? tmp.text : tmp.placeholder;
  if (null != emojiByIdOrName) {
    let allEmojiNamesString = tmp5(3965).getAllEmojiNamesString(emojiByIdOrName);
    const tmp5Result = tmp5(3965);
  } else {
    const intl = tmp5(1236).intl;
    allEmojiNamesString = intl.string(tmp5(1236).t.gXAN3P);
  }
  obj2[1] = allEmojiNamesString;
  items1[1] = tmp10(guildId(1297).LegacyText, obj2);
  const obj3 = { size: null, source: null };
  obj3[0] = guildId(1297).Icon.Sizes.MEDIUM;
  obj3[1] = onChange(10822);
  items1[2] = tmp10(guildId(1297).Icon, obj3);
  obj1[3] = items1;
  return tmp12(onChange(9063), obj1);
};