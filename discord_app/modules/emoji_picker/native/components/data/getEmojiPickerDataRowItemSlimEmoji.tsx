// === Module 9910: getEmojiPickerDataRowItemSlimEmoji ===

// Module 9910 (getEmojiPickerDataRowItemSlimEmoji)
import EmojiTypes from "EmojiTypes" /* 4526 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemSlimEmoji.tsx");

export default function getEmojiPickerDataRowItemSlimEmoji(isSectionNitroLocked) {
  let emojis;
  _require = isSectionNitroLocked;
  let obj = {
    type: require("useEmojiPickerData").EmojiPickerItemType.EMOJI_ROW_SLIM,
    emojis: emojis.map((type) => {
      if (type.type === EmojiTypes.EmojiTypes.UNICODE) {
        const obj9 = { name: null, surrogates: null };
        ({ name: obj5.name, surrogates: obj5.surrogates } = type);
        return obj9;
      } else {
        let obj;
        const emojisDisabled = isSectionNitroLocked.emojisDisabled;
        const hasItem = emojisDisabled.has(type.id);
        if (type.animated) {
          if (hasItem) {
            const obj10 = { id: null, name: null, animated: true, disabled: true };
            ({ id: obj4.id, name: obj4.name } = type);
            obj = obj10;
          }
          return obj;
        }
        if (type.animated) {
          const obj11 = { id: null, name: null, animated: true };
          ({ id: obj3.id, name: obj3.name } = type);
          obj = obj11;
        } else if (hasItem) {
          const obj12 = { id: null, name: null, disabled: true };
          ({ id: obj2.id, name: obj2.name } = type);
          obj = obj12;
        } else {
          obj = { id: null, name: null };
          ({ id: obj.id, name: obj.name } = type);
        }
      }
    }),
    isSectionNitroLocked: true === isSectionNitroLocked.isSectionNitroLocked
  };
  emojis = isSectionNitroLocked.emojis;
  return obj;
};