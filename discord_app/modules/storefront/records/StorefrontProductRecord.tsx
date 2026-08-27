// === Module 7241: fromServer ===

// Module 7241 (fromServer)
import closure_0 from "fromServer" /* 7240 */;
import closure_1 from "createFromServer" /* 4488 */;

let prototype;
prototype = function StorefrontProductRecord(arg0) {
  ({ id: tmp.id, skuIds: tmp.skuIds, name: tmp.name, summary: tmp.summary, options: tmp.options, createdAt: tmp.createdAt, updatedAt: tmp.updatedAt, skus: tmp.skus, primaryCollectionId: tmp.primaryCollectionId, primaryCollectionStyles: tmp.primaryCollectionStyles, primaryCollectionPdpBgUrl: tmp.primaryCollectionPdpBgUrl, primaryCollectionWillUnpublishAt: tmp.primaryCollectionWillUnpublishAt, gameApplicationId: tmp.gameApplicationId } = arg0);
  return Object.create(new.target.prototype);
}.prototype;
prototype["fromServer"] = function fromServer(sku_ids) {
  ({ options, created_at, updated_at, skus, tenant_metadata } = sku_ids);
  let obj = {};
  const merged = Object.assign(Object.assign(sku_ids, Object.create(null)));
  obj.skuIds = sku_ids.sku_ids;
  obj.options = options.map((name) => ({ name: name.name, optionValues: name.option_values }));
  obj.createdAt = new Date(created_at);
  const date = new Date(created_at);
  obj.updatedAt = new Date(updated_at);
  obj.skus = skus.map((arg0) => closure_1.createFromServer(arg0));
  const collectibles = tenant_metadata.collectibles;
  let prop;
  if (collectibles != null) {
    prop = collectibles.primary_collection_id;
  }
  obj.primaryCollectionId = prop;
  const collectibles2 = tenant_metadata.collectibles;
  let prop1;
  if (collectibles2 != null) {
    prop1 = collectibles2.primary_collection_styles;
  }
  let fromServerResult;
  if (null != prop1) {
    fromServerResult = closure_0.fromServer(tenant_metadata.collectibles.primary_collection_styles);
  }
  obj.primaryCollectionStyles = fromServerResult;
  const collectibles3 = tenant_metadata.collectibles;
  let prop2;
  if (collectibles3 != null) {
    prop2 = collectibles3.primary_collection_pdp_bg_url;
  }
  obj.primaryCollectionPdpBgUrl = prop2;
  const collectibles4 = tenant_metadata.collectibles;
  let prop3;
  if (collectibles4 != null) {
    prop3 = collectibles4.primary_collection_will_unpublish_at;
  }
  let date2;
  if (null != prop3) {
    const _Date = Date;
    date2 = new Date(tenant_metadata.collectibles.primary_collection_will_unpublish_at);
  }
  obj.primaryCollectionWillUnpublishAt = date2;
  const guild_monetization = tenant_metadata.guild_monetization;
  let game_application_id;
  if (guild_monetization != null) {
    const game_server = guild_monetization.game_server;
    if (game_server != null) {
      game_application_id = game_server.game_application_id;
    }
  }
  obj.gameApplicationId = game_application_id;
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj = Object.create(tmp.prototype);
  ({ id: tmp15.id, skuIds: tmp15.skuIds, name: tmp15.name, summary: tmp15.summary, options: tmp15.options, createdAt: tmp15.createdAt, updatedAt: tmp15.updatedAt, skus: tmp15.skus, primaryCollectionId: tmp15.primaryCollectionId, primaryCollectionStyles: tmp15.primaryCollectionStyles, primaryCollectionPdpBgUrl: tmp15.primaryCollectionPdpBgUrl, primaryCollectionWillUnpublishAt: tmp15.primaryCollectionWillUnpublishAt, gameApplicationId: tmp15.gameApplicationId } = obj);
  return obj;
};
const result = require("set").fileFinishedImporting("modules/storefront/records/StorefrontProductRecord.tsx");

export default prototype;