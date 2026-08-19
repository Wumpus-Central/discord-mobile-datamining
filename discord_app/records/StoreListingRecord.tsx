// === Module 13867: createFromServer ===

// Module 13867 (createFromServer)
import toJSDefault from "toJS" /* 1931 */;
import transformStoreAssetFromServer from "transformStoreAssetFromServer" /* 13868 */;
import createdAt from "createdAt" /* 1930 */;

require = fn;
toJSDefault;
let StoreListingRecord;
class StoreListingRecord extends tmp2 {
  constructor(arg0) {
    tmp2 = new StoreListingRecord(tmp, new.target, new.target);
    // ThrowIfThisInitialized (0x7c)
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
    mapped = child_skus.map((item, index) => item.id);
  }
  obj[8] = mapped;
  let mapped1 = null;
  if (null != id.alternative_skus) {
    const alternative_skus = id.alternative_skus;
    mapped1 = alternative_skus.map((item, index) => item.id);
  }
  obj[9] = mapped1;
  let mapped2 = null;
  if (null != id.carousel_items) {
    const carousel_items = id.carousel_items;
    mapped2 = carousel_items.map((item, index) => ({ assetId: item.asset_id, youtubeVideoId: item.youtube_video_id }));
  }
  obj[10] = mapped2;
  let mapped3 = null;
  if (null != id.assets) {
    const assets = id.assets;
    mapped3 = assets.map(transformStoreAssetFromServer.transformStoreAssetFromServer);
  }
  obj[11] = mapped3;
  let tmp8 = null;
  if (null != staff_notes) {
    obj = { content: null, user: null };
    obj[0] = staff_notes.content;
    let tmp9 = null;
    if (null != staff_notes.user) {
      tmp9 = new closure_2(staff_notes.user);
    }
    obj[1] = tmp9;
    tmp8 = obj;
  }
  obj[12] = tmp8;
  let tmp13 = null;
  if (null != id.guild) {
    obj = { id: null, name: null, icon: null, approximateMemberCount: null, approximatePresenceCount: null };
    obj[0] = id.guild.id;
    obj[1] = id.guild.name;
    obj[2] = id.guild.icon;
    obj[3] = id.guild.approximate_member_count;
    obj[4] = id.guild.approximate_presence_count;
    tmp13 = obj;
  }
  obj[13] = tmp13;
  let result = null;
  if (null != id.thumbnail) {
    result = transformStoreAssetFromServer.transformStoreAssetFromServer(id.thumbnail);
  }
  obj[14] = result;
  let result1 = null;
  if (null != id.preview_video) {
    result1 = transformStoreAssetFromServer.transformStoreAssetFromServer(id.preview_video);
  }
  obj[15] = result1;
  let result2 = null;
  if (null != id.header_background) {
    result2 = transformStoreAssetFromServer.transformStoreAssetFromServer(id.header_background);
  }
  obj[16] = result2;
  let result3 = null;
  if (null != id.header_logo_dark_theme) {
    result3 = transformStoreAssetFromServer.transformStoreAssetFromServer(id.header_logo_dark_theme);
  }
  obj[17] = result3;
  let result4 = null;
  if (null != id.header_logo_light_theme) {
    result4 = transformStoreAssetFromServer.transformStoreAssetFromServer(id.header_logo_light_theme);
  }
  obj[18] = result4;
  let result5 = null;
  if (null != id.box_art) {
    result5 = transformStoreAssetFromServer.transformStoreAssetFromServer(id.box_art);
  }
  obj[19] = result5;
  let result6 = null;
  if (null != id.hero_background) {
    result6 = transformStoreAssetFromServer.transformStoreAssetFromServer(id.hero_background);
  }
  obj[20] = result6;
  let result7 = null;
  if (null != id.hero_video) {
    result7 = transformStoreAssetFromServer.transformStoreAssetFromServer(id.hero_video);
  }
  obj[21] = result7;
  ({ entitlement_branch_id: obj[22], benefits: obj[23], published: obj[24] } = id);
  return new StoreListingRecord(obj);
};
StoreListingRecord.prototype["isSlimDirectoryVersion"] = function isSlimDirectoryVersion() {
  return null == this.description;
};
let result = require("obj132").fileFinishedImporting("records/StoreListingRecord.tsx");

export default StoreListingRecord;