import { useEmojiPickerData } from "useEmojiPickerData.tsx";
// discord_app/modules/emoji_picker/native/components/data/getEmojiPickerDataRowPremiumInlineRoadblock.tsx
const result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowPremiumInlineRoadblock.tsx");

export default function getEmojiPickerDataRowPremiumInlineRoadblock(position) {
  return { type: useEmojiPickerData /* useEmojiPickerData */.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK, position, isSectionNitroLocked: true };
};