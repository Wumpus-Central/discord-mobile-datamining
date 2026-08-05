// discord_app/modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx");

export const createPurchaseNotificationSystemMessage = function createPurchaseNotificationSystemMessage(message) {
  const purchaseNotification = message.message.purchaseNotification;
  let type;
  if (purchaseNotification != null) {
    type = purchaseNotification.type;
  }
  let guildProductPurchaseSystemMessage = null;
  if (type === require("../../../../../flow/Server.tsx") /* PermissionOverwriteType */.PurchaseNotificationType.GUILD_PRODUCT) {
    guildProductPurchaseSystemMessage = require("GuildProductPurchaseSystemMessage.tsx") /* createGuildProductPurchaseSystemMessage */.createGuildProductPurchaseSystemMessage(message);
    const tmp2Result = require("GuildProductPurchaseSystemMessage.tsx") /* createGuildProductPurchaseSystemMessage */;
  }
  return guildProductPurchaseSystemMessage;
};