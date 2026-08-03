const result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemSlimEmoji.tsx");

export default function getEmojiPickerDataRowItemSlimEmoji(isSectionNitroLocked) {
  const _require = isSectionNitroLocked;
  const emojis = isSectionNitroLocked.emojis;
  return {
    type: _require(9537).EmojiPickerItemType.EMOJI_ROW_SLIM,
    emojis: emojis.map((type) => {
      if (type.type === isSectionNitroLocked(outer1_1[1]).EmojiTypes.UNICODE) {
        let obj = { name: null, surrogates: null };
        ({ name: obj5[0], surrogates: obj5[1] } = type);
        return obj;
      } else {
        const emojisDisabled = isSectionNitroLocked.emojisDisabled;
        const hasItem = emojisDisabled.has(type.id);
        if (type.animated) {
          if (hasItem) {
            obj = { id: null, name: null, animated: true, disabled: true };
            ({ id: obj4[0], name: obj4[1] } = type);
          }
          return obj;
        }
        if (type.animated) {
          ({ id: obj3[0], name: obj3[1] } = type);
          obj = { id: null, name: null, animated: true };
          const obj1 = { id: null, name: null, animated: true };
        } else if (hasItem) {
          const obj2 = { id: null, name: null, disabled: true };
          ({ id: obj2[0], name: obj2[1] } = type);
          obj = obj2;
        } else {
          obj = { id: null, name: null };
          ({ id: obj[0], name: obj[1] } = type);
        }
      }
    }),
    isSectionNitroLocked: true === isSectionNitroLocked.isSectionNitroLocked
  };
};