// discord_app/modules/interaction_components/content_inventory_entry/utils.tsx
import { MessageEmbedFlags } from "ME";
import { hasFlag } from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";

const result = require("set").fileFinishedImporting("modules/interaction_components/content_inventory_entry/utils.tsx");

export const isContentInventoryFallbackEmbed = function isContentInventoryFallbackEmbed(flags) {
  let num = flags.flags;
  if (num == null) {
    num = 0;
  }
  return hasFlag /* hasFlag */.hasFlag(num, MessageEmbedFlags.IS_CONTENT_INVENTORY_ENTRY);
};