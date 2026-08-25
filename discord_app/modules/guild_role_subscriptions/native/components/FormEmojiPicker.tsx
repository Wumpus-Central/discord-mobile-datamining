// discord_app/modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { Fonts } from "../../../../Constants.tsx";
import { EmojiIntention } from "../../../emojis/EmojiConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../../rebrand/native/TextStyles.tsx";

const require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { alignItems: "center", flexDirection: "row" }, content: { marginStart: 8, flexGrow: 1 }, placeholder: null, text: null };
createCacheKey = {};
const merged = Object.assign(importDefaultResult(Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.TEXT_MUTED, 16));
createCacheKey[2] = createCacheKey;
let obj1 = {};
const merged1 = Object.assign(importDefaultResult(Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.TEXT_DEFAULT, 16));
createCacheKey[3] = obj1;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const importDefaultResult1 = importDefaultResult;
let result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx");

export default function FormEmojiPicker(emoji) {
  ({ emojiId, emojiName } = emoji.emoji);
  const guildId = emoji.guildId;
  const onChange = emoji.onChange;
  const tmp = callback2();
  if (emojiId == null) {
    let tmp2Result = tmp2(4038);
    if (emojiName == null) {
      emojiName = "";
    }
    emojiId = tmp2Result.convertSurrogateToName(emojiName, false);
  }
  obj1 = guildId(14685);
  const emojiByIdOrName = obj1.useEmojiByIdOrName(guildId, emojiId);
  if (null != emojiId) {
    let obj = { guildId: null, id: null };
    obj[0] = guildId;
    obj[1] = emojiId;
    let tmp9 = callback(tmp2(14684), obj);
    let tmp10 = callback;
  } else {
    obj = { resizeMode: "contain", source: null };
    tmp2Result = tmp2(5374);
    obj[1] = tmp2(17104);
    tmp9 = callback(tmp2Result, obj);
    tmp10 = callback;
  }
  obj1 = {
    style: items,
    accessibilityRole: "link",
    onPress() {
      let obj = guildId(closure_1_2[14]);
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
        pickerIntention: closure_1_3.GUILD_ROLE_BENEFIT_EMOJI
      };
      const result = obj.openEmojiPickerActionSheet(obj);
    },
    children: null
  };
  items = [tmp.container, onChange(13451)().textInput];
  const items1 = [tmp9, , ];
  const tmp12 = closure_5;
  const tmp4 = onChange(13451)();
  const items2 = [tmp.content, ];
  const obj2 = { style: items2, children: null };
  items2[1] = null != emojiByIdOrName ? tmp.text : tmp.placeholder;
  if (null != emojiByIdOrName) {
    let allEmojiNamesString = tmp5(4042).getAllEmojiNamesString(emojiByIdOrName);
    const tmp5Result = tmp5(4042);
  } else {
    const intl = tmp5(1236).intl;
    allEmojiNamesString = intl.string(tmp5(1236).t.gXAN3P);
  }
  obj2[1] = allEmojiNamesString;
  items1[1] = tmp10(guildId(1297).LegacyText, obj2);
  const tmp2Result1 = onChange(9204);
  items1[2] = tmp10(guildId(1297).Icon, { size: guildId(1297).Icon.Sizes.MEDIUM, source: onChange(10904) });
  obj1[3] = items1;
  return tmp12(tmp2Result1, obj1);
};