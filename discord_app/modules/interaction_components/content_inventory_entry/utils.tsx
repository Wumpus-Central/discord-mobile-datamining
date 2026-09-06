// discord_app/modules/interaction_components/content_inventory_entry/utils.tsx
import Constants from "../../../Constants.tsx";
import FlagUtils from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const MessageEmbedFlags = Constants.MessageEmbedFlags;
const result = size.fileFinishedImporting("modules/interaction_components/content_inventory_entry/utils.tsx");

export const isContentInventoryFallbackEmbed = function isContentInventoryFallbackEmbed(flags) {
  let num = flags.flags;
  if (num == null) {
    num = 0;
  }
  return FlagUtils.hasFlag(num, MessageEmbedFlags.IS_CONTENT_INVENTORY_ENTRY);
};
