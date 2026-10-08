// === Module 17799: TopEmojisDataManager ===

// Module 17799 (TopEmojisDataManager)
import TopEmojisUtils from "TopEmojisUtils" /* 9365 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4899 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;

require = fn;
const EmojiInteractionPoint = fn(1392).EmojiInteractionPoint;
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
    const guildId = SelectedGuildStore.getGuildId();
    const result = TopEmojisUtils.maybeFetchTopEmojisByGuild(guildId);
  }
};
const topEmojisDataManager = new TopEmojisDataManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/emojis/top_emojis/TopEmojisDataManager.tsx");

export default topEmojisDataManager;