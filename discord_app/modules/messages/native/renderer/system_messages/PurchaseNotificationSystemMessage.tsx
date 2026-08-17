// discord_app/modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx
import set from "set" /* 2 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1954 */;
import createGuildProductPurchaseSystemMessage from "createGuildProductPurchaseSystemMessage" /* 8243 */;

const result = set.fileFinishedImporting("modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx");

export const createPurchaseNotificationSystemMessage = function createPurchaseNotificationSystemMessage(message) {
  const purchaseNotification = message.message.purchaseNotification;
  let type;
  if (purchaseNotification != null) {
    type = purchaseNotification.type;
  }
  let guildProductPurchaseSystemMessage = null;
  if (type === PermissionOverwriteType.PurchaseNotificationType.GUILD_PRODUCT) {
    guildProductPurchaseSystemMessage = createGuildProductPurchaseSystemMessage.createGuildProductPurchaseSystemMessage(message);
    const tmp2Result = createGuildProductPurchaseSystemMessage;
  }
  return guildProductPurchaseSystemMessage;
};