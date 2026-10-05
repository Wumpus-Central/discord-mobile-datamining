// discord_app/modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemNativeSection.tsx
import useEmojiPickerData from "useEmojiPickerData.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemNativeSection.tsx",
);

export default function getEmojiPickerDataRowItemNativeSection(
  isSectionNitroLocked,
  hasPremiumInlineRoadblockHeader,
  hasPremiumInlineRoadblockFooter,
) {
  let arr;
  let emojiCount;
  let emojisDisabled;
  let emojisHidden;
  let guildId;
  let items;
  let label;
  let flag = isSectionNitroLocked.isSectionNitroLocked;
  ({ label, guildId, emojiCount, emojisDisabled, emojisHidden } = isSectionNitroLocked);
  if (flag === undefined) {
    flag = false;
  }
  if (flag) {
    items = [];
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
    emojisHidden: arr,
    isSectionNitroLocked: flag,
    hasPremiumInlineRoadblockHeader,
    hasPremiumInlineRoadblockFooter,
  };
  arr = Array.from(emojisHidden);
  return obj;
}
