// discord_app/modules/emojis/top_emojis/TopEmojisDataManager.tsx
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import maybeFetchTopEmojisByGuild from "TopEmojisUtils.tsx";
import handleConnectionOpen from "../../../stores/SelectedGuildStore.tsx";
import { EmojiInteractionPoint } from "../EmojiConstants.tsx";

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