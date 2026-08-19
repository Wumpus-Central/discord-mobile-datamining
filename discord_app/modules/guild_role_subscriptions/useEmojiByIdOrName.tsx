// === Module 14587: useEmojiByIdOrName ===

// Module 14587 (useEmojiByIdOrName)
import getEmojiToGroupId from "getEmojiToGroupId" /* 6727 */;

const require = fn;
function useEmojiByIdOrName(guildId, emojiId) {
  const _require = guildId;
  dependencyMap = emojiId;
  const items = [closure_2];
  const items1 = [guildId, emojiId];
  return _require(589).useStateFromStores(items, () => {
    if (null == closure_1) {
      return null;
    } else {
      const disambiguatedEmojiContext = closure_1_2.getDisambiguatedEmojiContext(closure_0);
      let byId = disambiguatedEmojiContext.getById(closure_1);
      if (byId == null) {
        byId = disambiguatedEmojiContext.getByName(closure_1);
      }
      return byId;
    }
  }, items1);
}
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/useEmojiByIdOrName.tsx");

export default useEmojiByIdOrName;
export { useEmojiByIdOrName };