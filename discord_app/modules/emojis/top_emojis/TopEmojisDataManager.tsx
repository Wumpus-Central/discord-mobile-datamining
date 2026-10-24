// === Module 18777: TopEmojisDataManager ===

// Module 18777 (TopEmojisDataManager)
import TopEmojisUtils from "TopEmojisUtils" /* 9831 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5002 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7214 */;

require = fn;
const EmojiInteractionPoint = fn(1395).EmojiInteractionPoint;
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