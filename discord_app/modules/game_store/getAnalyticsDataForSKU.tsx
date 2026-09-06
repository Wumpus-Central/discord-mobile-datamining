// === Module 4895: getAnalyticsDataForSKU ===

// Module 4895 (getAnalyticsDataForSKU)
import closure_0 from "addApplication" /* 4788 */;
import { SKUFeatureTypes } from "ME" /* 1074 */;

const result = require("set").fileFinishedImporting("modules/game_store/getAnalyticsDataForSKU.tsx");

export default function getAnalyticsDataForSKU(applicationId) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = true;
  }
  application = application.getApplication(applicationId.applicationId);
  const price = applicationId.getPrice();
  const price1 = applicationId.getPrice(null, false);
  let obj = { sku_id: applicationId.id, sku_type: applicationId.type, application_id: applicationId.applicationId, application_name: null, store_title: null, distribution_type: null };
  let name = null;
  if (null != application) {
    name = application.name;
  }
  obj[3] = name;
  obj[4] = applicationId.name;
  let str = "distribution";
  if (applicationId.premium) {
    str = "premium";
  }
  obj[5] = str;
  let tmp5 = null;
  if (flag2) {
    let amount = null;
    if (null != price) {
      amount = price.amount;
    }
    obj = { price: null, regular_price: null, currency: null };
    obj[0] = amount;
    let amount1 = null;
    if (null != price1) {
      amount1 = price1.amount;
    }
    obj[1] = amount1;
    let currency = null;
    if (null != price) {
      currency = price.currency;
    }
    obj[2] = currency;
    tmp5 = obj;
  }
  let tmp9 = null;
  if (flag) {
    obj = { has_single_player: null, has_online_multiplayer: null, has_local_multiplayer: null, has_pvp_features: null, has_local_coop: null, has_online_coop: null, has_cross_platform: null, has_rich_presence: null, has_game_invites: null, has_spectator_mode: null, has_controller_support: null, has_cloud_saves: null, has_secure_networking: null };
    obj[0] = applicationId.hasFeature(SKUFeatureTypes.SINGLE_PLAYER);
    obj[1] = applicationId.hasFeature(SKUFeatureTypes.ONLINE_MULTIPLAYER);
    obj[2] = applicationId.hasFeature(SKUFeatureTypes.LOCAL_MULTIPLAYER);
    obj[3] = applicationId.hasFeature(SKUFeatureTypes.PVP);
    obj[4] = applicationId.hasFeature(SKUFeatureTypes.LOCAL_COOP);
    obj[5] = applicationId.hasFeature(SKUFeatureTypes.ONLINE_COOP);
    obj[6] = applicationId.hasFeature(SKUFeatureTypes.CROSS_PLATFORM);
    obj[7] = applicationId.hasFeature(SKUFeatureTypes.RICH_PRESENCE);
    obj[8] = applicationId.hasFeature(SKUFeatureTypes.DISCORD_GAME_INVITES);
    obj[9] = applicationId.hasFeature(SKUFeatureTypes.SPECTATOR_MODE);
    obj[10] = applicationId.hasFeature(SKUFeatureTypes.CONTROLLER_SUPPORT);
    obj[11] = applicationId.hasFeature(SKUFeatureTypes.CLOUD_SAVES);
    obj[12] = applicationId.hasFeature(SKUFeatureTypes.SECURE_NETWORKING);
    tmp9 = obj;
  }
  const merged = Object.assign(obj);
  const merged1 = Object.assign(tmp5);
  const merged2 = Object.assign(tmp9);
  return {};
};