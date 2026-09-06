// discord_app/modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx
import Server from "../../../../../flow/Server.tsx";
import GuildProductPurchaseSystemMessage from "GuildProductPurchaseSystemMessage.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx",
);

export const createPurchaseNotificationSystemMessage = function createPurchaseNotificationSystemMessage(message) {
  const purchaseNotification = message.message.purchaseNotification;
  let type;
  if (purchaseNotification != null) {
    type = purchaseNotification.type;
  }
  let guildProductPurchaseSystemMessage = null;
  if (type === Server.PurchaseNotificationType.GUILD_PRODUCT) {
    guildProductPurchaseSystemMessage =
      GuildProductPurchaseSystemMessage.createGuildProductPurchaseSystemMessage(message);
    const tmp2Result = GuildProductPurchaseSystemMessage;
  }
  return guildProductPurchaseSystemMessage;
};
