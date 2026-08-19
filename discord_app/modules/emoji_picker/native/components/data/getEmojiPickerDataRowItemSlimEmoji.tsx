// discord_app/modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemSlimEmoji.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemSlimEmoji.tsx");

export default function getEmojiPickerDataRowItemSlimEmoji(isSectionNitroLocked) {
  const _require = isSectionNitroLocked;
  const emojis = isSectionNitroLocked.emojis;
  return {
    type: require("useEmojiPickerData.tsx").EmojiPickerItemType.EMOJI_ROW_SLIM,
    emojis: emojis.map((item, index) => {
      if (item.type === isSectionNitroLocked(dependencyMap[1]).EmojiTypes.UNICODE) {
        let obj = { name: null, surrogates: null };
        ({ name: obj5[0], surrogates: obj5[1] } = item);
        return obj;
      } else {
        const emojisDisabled = isSectionNitroLocked.emojisDisabled;
        const hasItem = emojisDisabled.has(item.id);
        if (item.animated) {
          if (hasItem) {
            obj = { id: null, name: null, animated: true, disabled: true };
            ({ id: obj4[0], name: obj4[1] } = item);
          }
          return obj;
        }
        if (item.animated) {
          ({ id: obj3[0], name: obj3[1] } = item);
          obj = { id: null, name: null, animated: true };
        } else if (hasItem) {
          const obj2 = { id: null, name: null, disabled: true };
          ({ id: obj2[0], name: obj2[1] } = item);
          obj = obj2;
        } else {
          obj = { id: null, name: null };
          ({ id: obj[0], name: obj[1] } = item);
        }
      }
    }),
    isSectionNitroLocked: true === isSectionNitroLocked.isSectionNitroLocked
  };
};