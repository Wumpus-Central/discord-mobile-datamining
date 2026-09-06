// === Module 10305: getEmojiPickerDataRowPremiumInlineRoadblock ===

// Module 10305 (getEmojiPickerDataRowPremiumInlineRoadblock)
import set from "set" /* 2 */;
import useEmojiPickerData from "useEmojiPickerData" /* 10303 */;

const result = set.fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowPremiumInlineRoadblock.tsx");

export default function getEmojiPickerDataRowPremiumInlineRoadblock(position) {
  return { type: useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK, position, isSectionNitroLocked: true };
};