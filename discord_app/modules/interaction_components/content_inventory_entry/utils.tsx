// discord_app/modules/interaction_components/content_inventory_entry/utils.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ME from "../../../Constants.tsx";
import hasFlag from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";

const MessageEmbedFlags = ME.MessageEmbedFlags;
const result = obj132.fileFinishedImporting("modules/interaction_components/content_inventory_entry/utils.tsx");

export const isContentInventoryFallbackEmbed = function isContentInventoryFallbackEmbed(flags) {
  let num = flags.flags;
  if (num == null) {
    num = 0;
  }
  return hasFlag.hasFlag(num, MessageEmbedFlags.IS_CONTENT_INVENTORY_ENTRY);
};