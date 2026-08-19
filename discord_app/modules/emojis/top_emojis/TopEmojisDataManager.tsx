// === Module 16558: handleInteraction ===

// Module 16558 (handleInteraction)
import initializeDefault from "initialize" /* 5038 */;
import maybeFetchTopEmojisByGuild from "maybeFetchTopEmojisByGuild" /* 9304 */;
import handleConnectionOpen from "handleConnectionOpen" /* 4197 */;
import { EmojiInteractionPoint } from "set" /* 1925 */;

require = fn;
initializeDefault;
class TopEmojisDataManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { EMOJI_INTERACTION_INITIATED: applyArgumentsResult.handleInteraction };
    return applyArgumentsResult;
  }
}
TopEmojisDataManager.prototype["handleInteraction"] = function handleInteraction(interaction) {
  const items = [EmojiInteractionPoint.EmojiButtonMouseEntered];
  if (items.includes(interaction.interaction)) {
    guildId = guildId.getGuildId();
    const result = maybeFetchTopEmojisByGuild.maybeFetchTopEmojisByGuild(guildId);
  }
};
const topEmojisDataManager = new TopEmojisDataManager();
let result = require("obj132").fileFinishedImporting("modules/emojis/top_emojis/TopEmojisDataManager.tsx");

export default topEmojisDataManager;