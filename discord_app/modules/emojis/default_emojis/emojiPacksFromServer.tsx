// === Module 4925: emojiPacksFromServer ===

// Module 4925 (emojiPacksFromServer)
import EmojiTypes from "EmojiTypes" /* 4921 */;
import size from "module_2" /* 2 */;

function indexEmojiPacks(arg0) {
  const packs = [];
  const packsById = {};
  const obj = {};
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (null == packsById[nextResult.id]) {
      let arr = packs.push(tmp2);
      packsById[tmp2.id] = tmp2;
      let emojis = tmp2.emojis;
      for (const item10022 of emojis) {
        obj[item10022.id] = tmp2.id;
        continue;
      }
    }
    continue;
  }
  return { packs, packsById, packIdByEmojiId: obj };
}
const result = size.fileFinishedImporting("modules/emojis/default_emojis/emojiPacksFromServer.tsx");

export { indexEmojiPacks };
export const emojiPacksFromServer = function emojiPacksFromServer(packs) {
  return indexEmojiPacks(packs.map((id) => {
    const obj = { id: id.id, name: id.name, description: id.description, available: id.available, representativeEmojiId: id.representative_emoji_id, emojis: null };
    const emojis = id.emojis;
    obj.emojis = emojis.map((id) => ({ id: id.id, packId: id.id, name: id.name, animated: id.animated, require_colons: id.require_colons, available: id.available, managed: id.managed, roles: id.roles, type: EmojiTypes.EmojiTypes.PACK }));
    return obj;
  }));
};