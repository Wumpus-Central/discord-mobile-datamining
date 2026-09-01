// === Module 7932: createPurchaseNotificationSystemMessage ===

// Module 7932 (createPurchaseNotificationSystemMessage)
import set from "set" /* 2 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1955 */;
import createGuildProductPurchaseSystemMessage from "createGuildProductPurchaseSystemMessage" /* 7933 */;

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