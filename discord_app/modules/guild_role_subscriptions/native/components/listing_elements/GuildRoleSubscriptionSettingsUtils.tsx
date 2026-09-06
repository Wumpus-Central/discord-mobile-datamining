// === Module 16540: GuildRoleSubscriptionSettingsUtils ===

// Module 16540 (GuildRoleSubscriptionSettingsUtils)
import StoreUtils from "StoreUtils" /* 4802 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4193 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionSettingsUtils.tsx");

export const getCoverImageURI = function getCoverImageURI(subscriptionsSettings) {
  const applicationIdForGuild = GuildRoleSubscriptionsStore.getApplicationIdForGuild(subscriptionsSettings.guild_id);
  let uri = "";
  if (tmp2) {
    uri = StoreUtils.getAssetURL(applicationIdForGuild, subscriptionsSettings.cover_image_asset, 1024);
  }
  return { uri };
};