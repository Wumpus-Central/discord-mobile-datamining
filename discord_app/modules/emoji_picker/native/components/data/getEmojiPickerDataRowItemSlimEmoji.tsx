// discord_app/modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemSlimEmoji.tsx
import EmojiTypes from "../../../../emojis/EmojiTypes.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemSlimEmoji.tsx",
);

export default function getEmojiPickerDataRowItemSlimEmoji(isSectionNitroLocked) {
  _require = isSectionNitroLocked;
  let obj = {
    type: require("useEmojiPickerData").EmojiPickerItemType.EMOJI_ROW_SLIM,
    emojis: null,
    isSectionNitroLocked: true === isSectionNitroLocked.isSectionNitroLocked,
  };
  const emojis = isSectionNitroLocked.emojis;
  obj.emojis = emojis.map((type) => {
    if (type.type === EmojiTypes.EmojiTypes.UNICODE) {
      let obj = { name: null, surrogates: null };
      ({ name: obj5.name, surrogates: obj5.surrogates } = type);
      return obj;
    } else {
      const emojisDisabled = isSectionNitroLocked.emojisDisabled;
      const hasItem = emojisDisabled.has(type.id);
      if (type.animated) {
        if (hasItem) {
          obj = { id: null, name: null, animated: true, disabled: true };
          ({ id: obj4.id, name: obj4.name } = type);
        }
        return obj;
      }
      if (type.animated) {
        ({ id: obj3.id, name: obj3.name } = type);
        obj = { id: null, name: null, animated: true };
        const obj1 = { id: null, name: null, animated: true };
      } else if (hasItem) {
        const obj2 = { id: null, name: null, disabled: true };
        ({ id: obj2.id, name: obj2.name } = type);
        obj = obj2;
      } else {
        obj = { id: null, name: null };
        ({ id: obj.id, name: obj.name } = type);
      }
    }
  });
  return obj;
}
