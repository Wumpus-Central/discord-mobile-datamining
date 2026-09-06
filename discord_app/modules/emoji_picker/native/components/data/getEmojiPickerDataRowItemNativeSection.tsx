// === Module 10304: getEmojiPickerDataRowItemNativeSection ===

// Module 10304 (getEmojiPickerDataRowItemNativeSection)
import useEmojiPickerData from "useEmojiPickerData" /* 10303 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemNativeSection.tsx");

export default function getEmojiPickerDataRowItemNativeSection(isSectionNitroLocked, hasPremiumInlineRoadblockHeader, hasPremiumInlineRoadblockFooter) {
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
  const obj = { type: useEmojiPickerData.EmojiPickerItemType.NATIVE_SECTION, title: label, guildId, emojiCount, emojisDisabled: items, emojisHidden: Array.from(emojisHidden), isSectionNitroLocked: flag, hasPremiumInlineRoadblockHeader, hasPremiumInlineRoadblockFooter };
  return obj;
};