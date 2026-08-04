// discord_app/modules/interaction_components/content_inventory_entry/utils.tsx
import { MessageEmbedFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/interaction_components/content_inventory_entry/utils.tsx");

export const isContentInventoryFallbackEmbed = function isContentInventoryFallbackEmbed(flags) {
  let num = flags.flags;
  if (num == null) {
    num = 0;
  }
  return require(1384) /* hasFlag */.hasFlag(num, MessageEmbedFlags.IS_CONTENT_INVENTORY_ENTRY);
};