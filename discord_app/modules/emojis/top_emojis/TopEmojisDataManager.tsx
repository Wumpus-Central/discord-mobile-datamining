// === Module 18025: TopEmojisDataManager ===

// Module 18025 (TopEmojisDataManager)
import TopEmojisUtils from "TopEmojisUtils" /* 9432 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4939 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6807 */;

require = fn;
const EmojiInteractionPoint = fn(1393).EmojiInteractionPoint;
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