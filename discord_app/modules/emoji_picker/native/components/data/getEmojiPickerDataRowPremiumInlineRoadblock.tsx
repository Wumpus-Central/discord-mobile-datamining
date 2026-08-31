// === Module 9104: getEmojiPickerDataRowPremiumInlineRoadblock ===

// Module 9104 (getEmojiPickerDataRowPremiumInlineRoadblock)
import set from "set" /* 2 */;
import useEmojiPickerData from "useEmojiPickerData" /* 9102 */;

const result = set.fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowPremiumInlineRoadblock.tsx");

export default function getEmojiPickerDataRowPremiumInlineRoadblock(position) {
  return { type: useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK, position, isSectionNitroLocked: true };
};