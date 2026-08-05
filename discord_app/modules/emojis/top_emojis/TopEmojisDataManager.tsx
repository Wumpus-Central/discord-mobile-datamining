// discord_app/modules/emojis/top_emojis/TopEmojisDataManager.tsx
import handleConnectionOpen from "handleConnectionOpen";
import { EmojiInteractionPoint } from "set";
import "initialize";

const require = arg1;
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
    const result = require(8565) /* maybeFetchTopEmojisByGuild */.maybeFetchTopEmojisByGuild(guildId);
    const obj = require(8565) /* maybeFetchTopEmojisByGuild */;
  }
};
const topEmojisDataManager = new TopEmojisDataManager();
let result = require("initialize").fileFinishedImporting("modules/emojis/top_emojis/TopEmojisDataManager.tsx");

export default topEmojisDataManager;