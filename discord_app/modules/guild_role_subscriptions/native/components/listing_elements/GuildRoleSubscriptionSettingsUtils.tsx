// === Module 19382: GuildRoleSubscriptionSettingsUtils ===

// Module 19382 (GuildRoleSubscriptionSettingsUtils)
import StoreUtils from "StoreUtils" /* 6756 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 5231 */;

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