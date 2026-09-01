// discord_app/modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemNativeSection.tsx
import set from "../../../../../../_runtime/00002_set.js";
import useEmojiPickerData from "useEmojiPickerData.tsx";

const result = set.fileFinishedImporting(
  "modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemNativeSection.tsx",
);

export default function getEmojiPickerDataRowItemNativeSection(isSectionNitroLocked) {
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
  const obj = {
    type: useEmojiPickerData.EmojiPickerItemType.NATIVE_SECTION,
    title: label,
    guildId,
    emojiCount,
    emojisDisabled: items,
    emojisHidden: Array.from(emojisHidden),
    isSectionNitroLocked: flag,
    hasPremiumInlineRoadblockHeader: arg1,
    hasPremiumInlineRoadblockFooter: arg2,
  };
  return obj;
}
