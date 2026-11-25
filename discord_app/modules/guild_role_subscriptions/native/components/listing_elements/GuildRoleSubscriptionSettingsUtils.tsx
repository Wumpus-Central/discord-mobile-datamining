// === Module 18340: GuildRoleSubscriptionSettingsUtils ===

// Module 18340 (GuildRoleSubscriptionSettingsUtils)
import StoreUtils from "StoreUtils" /* 5772 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4937 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionSettingsUtils.tsx");

export function getCoverImageURI(subscriptionsSettings) {
  const applicationIdForGuild = GuildRoleSubscriptionsStore.getApplicationIdForGuild(subscriptionsSettings.guild_id);
  let uri = "";
  if (tmp2) {
    uri = StoreUtils.getAssetURL(applicationIdForGuild, subscriptionsSettings.cover_image_asset, 1024);
  }
  return { uri };
}