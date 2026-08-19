// === Module 15796: getCoverImageURI ===

// Module 15796 (getCoverImageURI)
import _httpGetWithCountryCodeQuery from "_httpGetWithCountryCodeQuery" /* 4384 */;
import makeGroupListingIndexSubscriptionListingTag from "makeGroupListingIndexSubscriptionListingTag" /* 4015 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionSettingsUtils.tsx");

export const getCoverImageURI = function getCoverImageURI(subscriptionsSettings) {
  applicationIdForGuild = applicationIdForGuild.getApplicationIdForGuild(subscriptionsSettings.guild_id);
  let uri = "";
  if (tmp2) {
    uri = _httpGetWithCountryCodeQuery.getAssetURL(applicationIdForGuild, subscriptionsSettings.cover_image_asset, 1024);
  }
  return { uri };
};