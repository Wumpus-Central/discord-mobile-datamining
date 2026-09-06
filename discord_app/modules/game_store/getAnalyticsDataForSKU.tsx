// === Module 4895: getAnalyticsDataForSKU ===

// Module 4895 (getAnalyticsDataForSKU)
import ApplicationStore from "ApplicationStore" /* 4788 */;

const SKUFeatureTypes = fn(1074).SKUFeatureTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_store/getAnalyticsDataForSKU.tsx");

export default function getAnalyticsDataForSKU(applicationId) {
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
  let obj = { sku_id: applicationId.id, sku_type: applicationId.type, application_id: applicationId.applicationId, application_name: null, store_title: null, distribution_type: null };
  let name = null;
  if (null != application) {
    name = application.name;
  }
  obj.application_name = name;
  obj.store_title = applicationId.name;
  let str = "distribution";
  if (applicationId.premium) {
    str = "premium";
  }
  obj.distribution_type = str;
  let tmp5 = null;
  if (flag2) {
    let amount = null;
    if (null != price) {
      amount = price.amount;
    }
    obj = { price: amount, regular_price: null, currency: null };
    let amount1 = null;
    if (null != price1) {
      amount1 = price1.amount;
    }
    obj.regular_price = amount1;
    let currency = null;
    if (null != price) {
      currency = price.currency;
    }
    obj.currency = currency;
    tmp5 = obj;
  }
  let tmp9 = null;
  if (flag) {
    obj = { has_single_player: applicationId.hasFeature(SKUFeatureTypes.SINGLE_PLAYER), has_online_multiplayer: applicationId.hasFeature(SKUFeatureTypes.ONLINE_MULTIPLAYER), has_local_multiplayer: applicationId.hasFeature(SKUFeatureTypes.LOCAL_MULTIPLAYER), has_pvp_features: applicationId.hasFeature(SKUFeatureTypes.PVP), has_local_coop: applicationId.hasFeature(SKUFeatureTypes.LOCAL_COOP), has_online_coop: applicationId.hasFeature(SKUFeatureTypes.ONLINE_COOP), has_cross_platform: applicationId.hasFeature(SKUFeatureTypes.CROSS_PLATFORM), has_rich_presence: applicationId.hasFeature(SKUFeatureTypes.RICH_PRESENCE), has_game_invites: applicationId.hasFeature(SKUFeatureTypes.DISCORD_GAME_INVITES), has_spectator_mode: applicationId.hasFeature(SKUFeatureTypes.SPECTATOR_MODE), has_controller_support: applicationId.hasFeature(SKUFeatureTypes.CONTROLLER_SUPPORT), has_cloud_saves: applicationId.hasFeature(SKUFeatureTypes.CLOUD_SAVES), has_secure_networking: applicationId.hasFeature(SKUFeatureTypes.SECURE_NETWORKING) };
    tmp9 = obj;
  }
  const merged = Object.assign(obj);
  const merged1 = Object.assign(tmp5);
  const merged2 = Object.assign(tmp9);
  return {};
};