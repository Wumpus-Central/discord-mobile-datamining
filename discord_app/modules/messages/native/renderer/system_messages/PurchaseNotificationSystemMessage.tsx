// discord_app/modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx
import set from "../../../../../../_runtime/00002_set.js";
import PermissionOverwriteType from "../../../../../flow/Server.tsx";
import createGuildProductPurchaseSystemMessage from "GuildProductPurchaseSystemMessage.tsx";

const result = set.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx",
);

export const createPurchaseNotificationSystemMessage = function createPurchaseNotificationSystemMessage(message) {
  const purchaseNotification = message.message.purchaseNotification;
  let type;
  if (purchaseNotification != null) {
    type = purchaseNotification.type;
  }
  let guildProductPurchaseSystemMessage = null;
  if (type === PermissionOverwriteType.PurchaseNotificationType.GUILD_PRODUCT) {
    guildProductPurchaseSystemMessage =
      createGuildProductPurchaseSystemMessage.createGuildProductPurchaseSystemMessage(message);
    const tmp2Result = createGuildProductPurchaseSystemMessage;
  }
  return guildProductPurchaseSystemMessage;
};
