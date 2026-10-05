// === Module 7073: StorefrontProductRecord ===

// Module 7073 (StorefrontProductRecord)
import CollectiblesStoreListingStylesRecord from "CollectiblesStoreListingStylesRecord" /* 7072 */;
import SKURecord from "SKURecord" /* 5696 */;
import size from "module_2" /* 2 */;

let sku_ids;

class StorefrontProductRecord {
  constructor(arg0) {
    ({ id: tmp.id, skuIds: tmp.skuIds, name: tmp.name, summary: tmp.summary, options: tmp.options, createdAt: tmp.createdAt, updatedAt: tmp.updatedAt, skus: tmp.skus, primaryCollectionId: tmp.primaryCollectionId, primaryCollectionStyles: tmp.primaryCollectionStyles, primaryCollectionPdpBgUrl: tmp.primaryCollectionPdpBgUrl, primaryCollectionWillUnpublishAt: tmp.primaryCollectionWillUnpublishAt, gameApplicationId: tmp.gameApplicationId, badgeOverride: tmp.badgeOverride, hideBadge: tmp.hideBadge } = arg0);
    const obj = Object.create(new.target.prototype);
    return obj;
  }
  static fromServer(sku_ids) {
    let badge_override;
    let created_at;
    let date2;
    let fromServerResult;
    let game_application_id;
    let hide_badge;
    let options;
    let prop;
    let prop2;
    let skus;
    let tenant_metadata;
    let updated_at;
    ({ options, created_at, updated_at, skus, tenant_metadata } = sku_ids);
    sku_ids = sku_ids.sku_ids;
    const obj = { skuIds: sku_ids, options: options.map((name) => ({ name: name.name, optionValues: name.option_values })), createdAt: new Date(created_at), updatedAt: new Date(updated_at), skus: skus.map((item) => SKURecord.createFromServer(item)), primaryCollectionId: prop, primaryCollectionStyles: fromServerResult, primaryCollectionPdpBgUrl: prop2, primaryCollectionWillUnpublishAt: date2, gameApplicationId: game_application_id, badgeOverride: badge_override, hideBadge: hide_badge };
    const merged = Object.assign(Object.assign(sku_ids, Object.assign({ sku_ids: 0, options: 0, created_at: 0, updated_at: 0, skus: 0, tenant_metadata: 0 })));
    new Date(created_at);
    new Date(updated_at);
    const collectibles = tenant_metadata.collectibles;
    prop = undefined;
    if (collectibles != null) {
      prop = collectibles.primary_collection_id;
    }
    const collectibles2 = tenant_metadata.collectibles;
    let prop1;
    if (collectibles2 != null) {
      prop1 = collectibles2.primary_collection_styles;
    }
    fromServerResult = undefined;
    if (null != prop1) {
      fromServerResult = CollectiblesStoreListingStylesRecord.fromServer(tenant_metadata.collectibles.primary_collection_styles);
    }
    const collectibles3 = tenant_metadata.collectibles;
    prop2 = undefined;
    if (collectibles3 != null) {
      prop2 = collectibles3.primary_collection_pdp_bg_url;
    }
    const collectibles4 = tenant_metadata.collectibles;
    let prop3;
    if (collectibles4 != null) {
      prop3 = collectibles4.primary_collection_will_unpublish_at;
    }
    date2 = undefined;
    if (null != prop3) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date2 = new Date(tenant_metadata.collectibles.primary_collection_will_unpublish_at);
    }
    const guild_monetization = tenant_metadata.guild_monetization;
    game_application_id = undefined;
    if (guild_monetization != null) {
      const game_server = guild_monetization.game_server;
      if (game_server != null) {
        game_application_id = game_server.game_application_id;
      }
    }
    const collectibles5 = tenant_metadata.collectibles;
    badge_override = undefined;
    if (collectibles5 != null) {
      badge_override = collectibles5.badge_override;
    }
    const collectibles6 = tenant_metadata.collectibles;
    hide_badge = undefined;
    if (collectibles6 != null) {
      hide_badge = collectibles6.hide_badge;
    }
    if (typeof StorefrontProductRecord === "function") {
      ({ id: tmp15.id, skuIds: tmp15.skuIds, name: tmp15.name, summary: tmp15.summary, options: tmp15.options, createdAt: tmp15.createdAt, updatedAt: tmp15.updatedAt, skus: tmp15.skus, primaryCollectionId: tmp15.primaryCollectionId, primaryCollectionStyles: tmp15.primaryCollectionStyles, primaryCollectionPdpBgUrl: tmp15.primaryCollectionPdpBgUrl, primaryCollectionWillUnpublishAt: tmp15.primaryCollectionWillUnpublishAt, gameApplicationId: tmp15.gameApplicationId, badgeOverride: tmp15.badgeOverride, hideBadge: tmp15.hideBadge } = obj);
      const obj2 = Object.create(StorefrontProductRecord.prototype);
      return obj2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/storefront/records/StorefrontProductRecord.tsx");

export default StorefrontProductRecord;