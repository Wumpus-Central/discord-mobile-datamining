// discord_app/modules/emoji_picker/native/components/data/getEmojiPickerDataRowPremiumInlineRoadblock.tsx
import useEmojiPickerData from "useEmojiPickerData.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/emoji_picker/native/components/data/getEmojiPickerDataRowPremiumInlineRoadblock.tsx",
);

export default function getEmojiPickerDataRowPremiumInlineRoadblock(position) {
  return {
    type: useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK,
    position,
    isSectionNitroLocked: true,
  };
}
