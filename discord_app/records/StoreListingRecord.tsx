// === Module 14499: StoreListingRecord ===

// Module 14499 (StoreListingRecord)
import GameStoreAsset from "GameStoreAsset" /* 14500 */;
import Record from "Record" /* 1386 */;
import UserRecord from "UserRecord" /* 1385 */;

require = fn;
let StoreListingRecord;
class StoreListingRecord extends tmp2 {
  constructor(arg0) {
    tmp2 = new StoreListingRecord(tmp, new.target, new.target);
    ({ id: tmp2.id, applicationId: tmp2.applicationId, skuId: tmp2.skuId, skuFlags: tmp2.skuFlags, summary: tmp2.summary, tagline: tmp2.tagline, flavorText: tmp2.flavorText, description: tmp2.description, carouselItems } = global);
    if (carouselItems == null) {
      carouselItems = [];
    }
    tmp2.carouselItems = carouselItems;
    childSkuIds = global.childSkuIds;
    if (childSkuIds == null) {
      childSkuIds = [];
    }
    tmp2.childSkuIds = childSkuIds;
    alternativeSkuIds = global.alternativeSkuIds;
    if (alternativeSkuIds == null) {
      alternativeSkuIds = [];
    }
    tmp2.alternativeSkuIds = alternativeSkuIds;
    assets = global.assets;
    if (assets == null) {
      assets = [];
    }
    tmp2.assets = assets;
    ({ staffNotes: tmp2.staffNotes, guild: tmp2.guild, thumbnail } = global);
    if (thumbnail == null) {
      thumbnail = null;
    }
    tmp2.thumbnail = thumbnail;
    boxArt = global.boxArt;
    if (boxArt == null) {
      boxArt = null;
    }
    tmp2.boxArt = boxArt;
    previewVideo = global.previewVideo;
    if (previewVideo == null) {
      previewVideo = null;
    }
    tmp2.previewVideo = previewVideo;
    headerBackground = global.headerBackground;
    if (headerBackground == null) {
      headerBackground = null;
    }
    tmp2.headerBackground = headerBackground;
    headerLogoDarkTheme = global.headerLogoDarkTheme;
    if (headerLogoDarkTheme == null) {
      headerLogoDarkTheme = null;
    }
    tmp2.headerLogoDarkTheme = headerLogoDarkTheme;
    headerLogoLightTheme = global.headerLogoLightTheme;
    if (headerLogoLightTheme == null) {
      headerLogoLightTheme = null;
    }
    tmp2.headerLogoLightTheme = headerLogoLightTheme;
    heroBackground = global.heroBackground;
    if (heroBackground == null) {
      heroBackground = null;
    }
    tmp2.heroBackground = heroBackground;
    heroVideo = global.heroVideo;
    if (heroVideo == null) {
      heroVideo = null;
    }
    tmp2.heroVideo = heroVideo;
    entitlementBranchId = global.entitlementBranchId;
    if (entitlementBranchId == null) {
      entitlementBranchId = null;
    }
    tmp2.entitlementBranchId = entitlementBranchId;
    tmp2.benefits = global.benefits;
    tmp2.published = Boolean(global.published);
    return tmp2;
  }
}
StoreListingRecord["createFromServer"] = function createFromServer(id) {
  const staff_notes = id.staff_notes;
  let obj = { id: id.id, applicationId: id.sku.application_id, skuId: id.sku.id, skuFlags: id.sku.flags, summary: id.summary, tagline: id.tagline, flavorText: id.flavor_text, description: id.description, childSkuIds: null, alternativeSkuIds: null, carouselItems: null, assets: null, staffNotes: null, guild: null, thumbnail: null, previewVideo: null, headerBackground: null, headerLogoDarkTheme: null, headerLogoLightTheme: null, boxArt: null, heroBackground: null, heroVideo: null, entitlementBranchId: null, benefits: null, published: null };
  let mapped = null;
  if (null != id.child_skus) {
    const child_skus = id.child_skus;
    mapped = child_skus.map((id) => id.id);
  }
  obj.childSkuIds = mapped;
  let mapped1 = null;
  if (null != id.alternative_skus) {
    const alternative_skus = id.alternative_skus;
    mapped1 = alternative_skus.map((id) => id.id);
  }
  obj.alternativeSkuIds = mapped1;
  let mapped2 = null;
  if (null != id.carousel_items) {
    const carousel_items = id.carousel_items;
    mapped2 = carousel_items.map((assetId) => ({ assetId: assetId.asset_id, youtubeVideoId: assetId.youtube_video_id }));
  }
  obj.carouselItems = mapped2;
  let mapped3 = null;
  if (null != id.assets) {
    const assets = id.assets;
    mapped3 = assets.map(GameStoreAsset.transformStoreAssetFromServer);
  }
  obj.assets = mapped3;
  let tmp8 = null;
  if (null != staff_notes) {
    obj = { content: staff_notes.content, user: null };
    let tmp9 = null;
    if (null != staff_notes.user) {
      tmp9 = new UserRecord(staff_notes.user);
    }
    obj.user = tmp9;
    tmp8 = obj;
  }
  obj.staffNotes = tmp8;
  let tmp13 = null;
  if (null != id.guild) {
    obj = { id: id.guild.id, name: id.guild.name, icon: id.guild.icon, approximateMemberCount: id.guild.approximate_member_count, approximatePresenceCount: id.guild.approximate_presence_count };
    tmp13 = obj;
  }
  obj.guild = tmp13;
  let result = null;
  if (null != id.thumbnail) {
    result = GameStoreAsset.transformStoreAssetFromServer(id.thumbnail);
  }
  obj.thumbnail = result;
  let result1 = null;
  if (null != id.preview_video) {
    result1 = GameStoreAsset.transformStoreAssetFromServer(id.preview_video);
  }
  obj.previewVideo = result1;
  let result2 = null;
  if (null != id.header_background) {
    result2 = GameStoreAsset.transformStoreAssetFromServer(id.header_background);
  }
  obj.headerBackground = result2;
  let result3 = null;
  if (null != id.header_logo_dark_theme) {
    result3 = GameStoreAsset.transformStoreAssetFromServer(id.header_logo_dark_theme);
  }
  obj.headerLogoDarkTheme = result3;
  let result4 = null;
  if (null != id.header_logo_light_theme) {
    result4 = GameStoreAsset.transformStoreAssetFromServer(id.header_logo_light_theme);
  }
  obj.headerLogoLightTheme = result4;
  let result5 = null;
  if (null != id.box_art) {
    result5 = GameStoreAsset.transformStoreAssetFromServer(id.box_art);
  }
  obj.boxArt = result5;
  let result6 = null;
  if (null != id.hero_background) {
    result6 = GameStoreAsset.transformStoreAssetFromServer(id.hero_background);
  }
  obj.heroBackground = result6;
  let result7 = null;
  if (null != id.hero_video) {
    result7 = GameStoreAsset.transformStoreAssetFromServer(id.hero_video);
  }
  obj.heroVideo = result7;
  ({ entitlement_branch_id: obj.entitlementBranchId, benefits: obj.benefits, published: obj.published } = id);
  return new StoreListingRecord(obj);
};
StoreListingRecord.prototype["isSlimDirectoryVersion"] = function isSlimDirectoryVersion() {
  return null == this.description;
};
const size = fn(2);
let result = size.fileFinishedImporting("records/StoreListingRecord.tsx");

export default StoreListingRecord;