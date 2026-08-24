// discord_app/modules/emoji_picker/native/components/data/getEmojiPickerDataRowPremiumInlineRoadblock.tsx
import set from "../../../../../../_runtime/00002_set.js";
import useEmojiPickerData from "useEmojiPickerData.tsx";

const result = set.fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowPremiumInlineRoadblock.tsx");

export default function getEmojiPickerDataRowPremiumInlineRoadblock(position) {
  return { type: useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK, position, isSectionNitroLocked: true };
};