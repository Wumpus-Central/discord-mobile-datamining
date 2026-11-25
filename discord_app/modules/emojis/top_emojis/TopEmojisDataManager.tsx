// === Module 19635: TopEmojisDataManager ===

// Module 19635 (TopEmojisDataManager)
import TopEmojisUtils from "TopEmojisUtils" /* 9501 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5045 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7444 */;

require = fn;
const EmojiInteractionPoint = fn(1389).EmojiInteractionPoint;
class TopEmojisDataManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { EMOJI_INTERACTION_INITIATED: applyArgumentsResult.handleInteraction };
    return applyArgumentsResult;
  }
}
TopEmojisDataManager.prototype["handleInteraction"] = function handleInteraction(interaction) {
  items = [EmojiInteractionPoint.EmojiButtonMouseEntered];
  if (items.includes(interaction.interaction)) {
    const guildId = SelectedGuildStore.getGuildId();
    const result = TopEmojisUtils.maybeFetchTopEmojisByGuild(guildId);
  }
};
const topEmojisDataManager = new TopEmojisDataManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/emojis/top_emojis/TopEmojisDataManager.tsx");

export default topEmojisDataManager;