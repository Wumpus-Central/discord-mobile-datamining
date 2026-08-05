// discord_app/modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemNativeSection.tsx
import { useEmojiPickerData } from "useEmojiPickerData.tsx";
const result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemNativeSection.tsx");

export default function getEmojiPickerDataRowItemNativeSection(isSectionNitroLocked) {
  let emojiCount;
  let emojisDisabled;
  let emojisHidden;
  let guildId;
  let label;
  let flag = isSectionNitroLocked.isSectionNitroLocked;
  ({ label, guildId, emojiCount, emojisDisabled, emojisHidden } = isSectionNitroLocked);
  if (flag === undefined) {
    flag = false;
  }
  if (flag) {
    let items = [];
  } else {
    const _Array = Array;
    items = Array.from(emojisDisabled);
  }
  const obj = { type: null, title: null, guildId: null, emojiCount: null, emojisDisabled: null, emojisHidden: null, isSectionNitroLocked: null, hasPremiumInlineRoadblockHeader: null, hasPremiumInlineRoadblockFooter: null };
  obj[0] = useEmojiPickerData /* useEmojiPickerData */.EmojiPickerItemType.NATIVE_SECTION;
  obj[1] = label;
  obj[2] = guildId;
  obj[3] = emojiCount;
  obj[4] = items;
  obj[5] = Array.from(emojisHidden);
  obj[6] = flag;
  obj[7] = arg1;
  obj[8] = arg2;
  return obj;
};