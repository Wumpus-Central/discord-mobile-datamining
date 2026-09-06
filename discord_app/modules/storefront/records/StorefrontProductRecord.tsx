// discord_app/modules/storefront/records/StorefrontProductRecord.tsx
import CollectiblesStoreListingStylesRecord from "../../collectibles/records/CollectiblesStoreListingStylesRecord.tsx";
import SKURecord from "../../skus/SKURecord.tsx";

const prototype = function StorefrontProductRecord(arg0) {
  ({
    id: tmp.id,
    skuIds: tmp.skuIds,
    name: tmp.name,
    summary: tmp.summary,
    options: tmp.options,
    createdAt: tmp.createdAt,
    updatedAt: tmp.updatedAt,
    skus: tmp.skus,
    primaryCollectionId: tmp.primaryCollectionId,
    primaryCollectionStyles: tmp.primaryCollectionStyles,
    primaryCollectionPdpBgUrl: tmp.primaryCollectionPdpBgUrl,
    primaryCollectionWillUnpublishAt: tmp.primaryCollectionWillUnpublishAt,
    gameApplicationId: tmp.gameApplicationId,
    badgeOverride: tmp.badgeOverride,
    hideBadge: tmp.hideBadge,
  } = arg0);
  return Object.create(new.target.prototype);
}.prototype;
prototype["fromServer"] = function fromServer(sku_ids) {
  ({ options, created_at, updated_at, skus, tenant_metadata } = sku_ids);
  let obj = {};
  const merged = Object.assign(
    Object.assign(
      sku_ids,
      Object.assign({ sku_ids: 0, options: 0, created_at: 0, updated_at: 0, skus: 0, tenant_metadata: 0 }),
    ),
  );
  obj.skuIds = sku_ids.sku_ids;
  obj.options = options.map((name) => ({ name: name.name, optionValues: name.option_values }));
  obj.createdAt = new Date(created_at);
  const date = new Date(created_at);
  obj.updatedAt = new Date(updated_at);
  obj.skus = skus.map((item) => SKURecord.createFromServer(item));
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
    fromServerResult = CollectiblesStoreListingStylesRecord.fromServer(
      tenant_metadata.collectibles.primary_collection_styles,
    );
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
  const collectibles5 = tenant_metadata.collectibles;
  let badge_override;
  if (collectibles5 != null) {
    badge_override = collectibles5.badge_override;
  }
  obj.badgeOverride = badge_override;
  const collectibles6 = tenant_metadata.collectibles;
  let hide_badge;
  if (collectibles6 != null) {
    hide_badge = collectibles6.hide_badge;
  }
  obj.hideBadge = hide_badge;
  if (typeof prototype === "function") {
    obj = Object.create(prototype.prototype);
    ({
      id: tmp17.id,
      skuIds: tmp17.skuIds,
      name: tmp17.name,
      summary: tmp17.summary,
      options: tmp17.options,
      createdAt: tmp17.createdAt,
      updatedAt: tmp17.updatedAt,
      skus: tmp17.skus,
      primaryCollectionId: tmp17.primaryCollectionId,
      primaryCollectionStyles: tmp17.primaryCollectionStyles,
      primaryCollectionPdpBgUrl: tmp17.primaryCollectionPdpBgUrl,
      primaryCollectionWillUnpublishAt: tmp17.primaryCollectionWillUnpublishAt,
      gameApplicationId: tmp17.gameApplicationId,
      badgeOverride: tmp17.badgeOverride,
      hideBadge: tmp17.hideBadge,
    } = obj);
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  const date1 = new Date(updated_at);
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/records/StorefrontProductRecord.tsx");

export default prototype;
