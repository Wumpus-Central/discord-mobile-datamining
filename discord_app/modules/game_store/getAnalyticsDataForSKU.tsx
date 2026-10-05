// === Module 5424: getAnalyticsDataForSKU ===

// Module 5424 (getAnalyticsDataForSKU)
import Constants from "Constants" /* 1085 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import size from "module_2" /* 2 */;

const SKUFeatureTypes = Constants.SKUFeatureTypes;
const result = size.fileFinishedImporting("modules/game_store/getAnalyticsDataForSKU.tsx");

export default function getAnalyticsDataForSKU(applicationId) {
  let amount1;
  let currency;
  let name;
  let str;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = true;
  }
  const application = ApplicationStore.getApplication(applicationId.applicationId);
  const price = applicationId.getPrice();
  const price1 = applicationId.getPrice(null, false);
  const obj = { sku_id: applicationId.id, sku_type: applicationId.type, application_id: applicationId.applicationId, application_name: name, store_title: applicationId.name, distribution_type: str };
  name = null;
  if (null != application) {
    name = application.name;
  }
  str = "distribution";
  if (applicationId.premium) {
    str = "premium";
  }
  let tmp5 = null;
  if (flag2) {
    let amount = null;
    if (null != price) {
      amount = price.amount;
    }
    const obj2 = { price: amount, regular_price: amount1, currency };
    amount1 = null;
    if (null != price1) {
      amount1 = price1.amount;
    }
    currency = null;
    if (null != price) {
      currency = price.currency;
    }
    tmp5 = obj2;
  }
  let tmp9 = null;
  if (flag) {
    tmp9 = { has_single_player: applicationId.hasFeature(SKUFeatureTypes.SINGLE_PLAYER), has_online_multiplayer: applicationId.hasFeature(SKUFeatureTypes.ONLINE_MULTIPLAYER), has_local_multiplayer: applicationId.hasFeature(SKUFeatureTypes.LOCAL_MULTIPLAYER), has_pvp_features: applicationId.hasFeature(SKUFeatureTypes.PVP), has_local_coop: applicationId.hasFeature(SKUFeatureTypes.LOCAL_COOP), has_online_coop: applicationId.hasFeature(SKUFeatureTypes.ONLINE_COOP), has_cross_platform: applicationId.hasFeature(SKUFeatureTypes.CROSS_PLATFORM), has_rich_presence: applicationId.hasFeature(SKUFeatureTypes.RICH_PRESENCE), has_game_invites: applicationId.hasFeature(SKUFeatureTypes.DISCORD_GAME_INVITES), has_spectator_mode: applicationId.hasFeature(SKUFeatureTypes.SPECTATOR_MODE), has_controller_support: applicationId.hasFeature(SKUFeatureTypes.CONTROLLER_SUPPORT), has_cloud_saves: applicationId.hasFeature(SKUFeatureTypes.CLOUD_SAVES), has_secure_networking: applicationId.hasFeature(SKUFeatureTypes.SECURE_NETWORKING) };
    const obj3 = { has_single_player: applicationId.hasFeature(SKUFeatureTypes.SINGLE_PLAYER), has_online_multiplayer: applicationId.hasFeature(SKUFeatureTypes.ONLINE_MULTIPLAYER), has_local_multiplayer: applicationId.hasFeature(SKUFeatureTypes.LOCAL_MULTIPLAYER), has_pvp_features: applicationId.hasFeature(SKUFeatureTypes.PVP), has_local_coop: applicationId.hasFeature(SKUFeatureTypes.LOCAL_COOP), has_online_coop: applicationId.hasFeature(SKUFeatureTypes.ONLINE_COOP), has_cross_platform: applicationId.hasFeature(SKUFeatureTypes.CROSS_PLATFORM), has_rich_presence: applicationId.hasFeature(SKUFeatureTypes.RICH_PRESENCE), has_game_invites: applicationId.hasFeature(SKUFeatureTypes.DISCORD_GAME_INVITES), has_spectator_mode: applicationId.hasFeature(SKUFeatureTypes.SPECTATOR_MODE), has_controller_support: applicationId.hasFeature(SKUFeatureTypes.CONTROLLER_SUPPORT), has_cloud_saves: applicationId.hasFeature(SKUFeatureTypes.CLOUD_SAVES), has_secure_networking: applicationId.hasFeature(SKUFeatureTypes.SECURE_NETWORKING) };
  }
  const obj4 = {};
  const merged = Object.assign(obj);
  const merged1 = Object.assign(tmp5);
  const merged2 = Object.assign(tmp9);
  return obj4;
};