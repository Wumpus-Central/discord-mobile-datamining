// === Module 10439: getEmojiPickerDataRowItemSlimEmoji ===

// Module 10439 (getEmojiPickerDataRowItemSlimEmoji)
import EmojiTypes from "EmojiTypes" /* 4295 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemSlimEmoji.tsx");

export default function getEmojiPickerDataRowItemSlimEmoji(isSectionNitroLocked) {
  _require = isSectionNitroLocked;
  let obj = { type: require("useEmojiPickerData").EmojiPickerItemType.EMOJI_ROW_SLIM, emojis: null, isSectionNitroLocked: true === isSectionNitroLocked.isSectionNitroLocked };
  const emojis = isSectionNitroLocked.emojis;
  obj.emojis = emojis.map((type) => {
    if (type.type === EmojiTypes.EmojiTypes.UNICODE) {
      ({ name: obj5.name, surrogates: obj5.surrogates } = type);
      return { name: null, surrogates: null };
    } else {
      const emojisDisabled = isSectionNitroLocked.emojisDisabled;
      const hasItem = emojisDisabled.has(type.id);
      if (type.animated) {
        if (hasItem) {
          ({ id: obj4.id, name: obj4.name } = type);
          let obj = { id: null, name: null, animated: true, disabled: true };
          const obj10 = { id: null, name: null, animated: true, disabled: true };
        }
        return obj;
      }
      if (type.animated) {
        ({ id: obj3.id, name: obj3.name } = type);
        obj = { id: null, name: null, animated: true };
        const obj11 = { id: null, name: null, animated: true };
      } else if (hasItem) {
        ({ id: obj2.id, name: obj2.name } = type);
        obj = { id: null, name: null, disabled: true };
        const obj12 = { id: null, name: null, disabled: true };
      } else {
        obj = { id: null, name: null };
        ({ id: obj.id, name: obj.name } = type);
      }
    }
  });
  return obj;
};