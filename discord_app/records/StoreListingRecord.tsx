// discord_app/records/StoreListingRecord.tsx
import GameStoreAsset from "../modules/game_store/GameStoreAsset.tsx";
import Record from "../lib/Record.tsx";
import UserRecord from "UserRecord.tsx";
import size from "../../_runtime/metro/00002__.js";

class StoreListingRecord extends Record {
  constructor(childSkuIds) {
    let carouselItems;
    let thumbnail;
    const tmp2 = new StoreListingRecord(tmp, new.target, this);
    ({
      id: tmp2.id,
      applicationId: tmp2.applicationId,
      skuId: tmp2.skuId,
      skuFlags: tmp2.skuFlags,
      summary: tmp2.summary,
      tagline: tmp2.tagline,
      flavorText: tmp2.flavorText,
      description: tmp2.description,
      carouselItems,
    } = childSkuIds);
    if (carouselItems == null) {
      carouselItems = [];
    }
    tmp2.carouselItems = carouselItems;
    childSkuIds = childSkuIds.childSkuIds;
    if (childSkuIds == null) {
      childSkuIds = [];
    }
    tmp2.childSkuIds = childSkuIds;
    let alternativeSkuIds = childSkuIds.alternativeSkuIds;
    if (alternativeSkuIds == null) {
      alternativeSkuIds = [];
    }
    tmp2.alternativeSkuIds = alternativeSkuIds;
    let assets = childSkuIds.assets;
    if (assets == null) {
      assets = [];
    }
    tmp2.assets = assets;
    ({ staffNotes: tmp2.staffNotes, guild: tmp2.guild, thumbnail } = childSkuIds);
    if (thumbnail == null) {
      thumbnail = null;
    }
    tmp2.thumbnail = thumbnail;
    let boxArt = childSkuIds.boxArt;
    if (boxArt == null) {
      boxArt = null;
    }
    tmp2.boxArt = boxArt;
    let previewVideo = childSkuIds.previewVideo;
    if (previewVideo == null) {
      previewVideo = null;
    }
    tmp2.previewVideo = previewVideo;
    let headerBackground = childSkuIds.headerBackground;
    if (headerBackground == null) {
      headerBackground = null;
    }
    tmp2.headerBackground = headerBackground;
    let headerLogoDarkTheme = childSkuIds.headerLogoDarkTheme;
    if (headerLogoDarkTheme == null) {
      headerLogoDarkTheme = null;
    }
    tmp2.headerLogoDarkTheme = headerLogoDarkTheme;
    let headerLogoLightTheme = childSkuIds.headerLogoLightTheme;
    if (headerLogoLightTheme == null) {
      headerLogoLightTheme = null;
    }
    tmp2.headerLogoLightTheme = headerLogoLightTheme;
    let heroBackground = childSkuIds.heroBackground;
    if (heroBackground == null) {
      heroBackground = null;
    }
    tmp2.heroBackground = heroBackground;
    let heroVideo = childSkuIds.heroVideo;
    if (heroVideo == null) {
      heroVideo = null;
    }
    tmp2.heroVideo = heroVideo;
    let entitlementBranchId = childSkuIds.entitlementBranchId;
    if (entitlementBranchId == null) {
      entitlementBranchId = null;
    }
    tmp2.entitlementBranchId = entitlementBranchId;
    tmp2.benefits = childSkuIds.benefits;
    tmp2.published = Boolean(childSkuIds.published);
    return tmp2;
  }
  static createFromServer(id) {
    let mapped;
    let mapped1;
    let mapped2;
    let mapped3;
    let result;
    let result1;
    let result2;
    let result3;
    let result4;
    let result5;
    let result6;
    let result7;
    let tmp11;
    let tmp8;
    let tmp9;
    const staff_notes = id.staff_notes;
    const obj = {
      id: id.id,
      applicationId: id.sku.application_id,
      skuId: id.sku.id,
      skuFlags: id.sku.flags,
      summary: id.summary,
      tagline: id.tagline,
      flavorText: id.flavor_text,
      description: id.description,
      childSkuIds: mapped,
      alternativeSkuIds: mapped1,
      carouselItems: mapped2,
      assets: mapped3,
      staffNotes: tmp8,
      guild: tmp11,
      thumbnail: result,
      previewVideo: result1,
      headerBackground: result2,
      headerLogoDarkTheme: result3,
      headerLogoLightTheme: result4,
      boxArt: result5,
      heroBackground: result6,
      heroVideo: result7,
      entitlementBranchId: null,
      benefits: null,
      published: null,
    };
    mapped = null;
    if (null != id.child_skus) {
      const child_skus = id.child_skus;
      mapped = child_skus.map((id) => id.id);
    }
    mapped1 = null;
    if (null != id.alternative_skus) {
      const alternative_skus = id.alternative_skus;
      mapped1 = alternative_skus.map((id) => id.id);
    }
    mapped2 = null;
    if (null != id.carousel_items) {
      const carousel_items = id.carousel_items;
      mapped2 = carousel_items.map((assetId) => ({
        assetId: assetId.asset_id,
        youtubeVideoId: assetId.youtube_video_id,
      }));
    }
    mapped3 = null;
    if (null != id.assets) {
      const assets = id.assets;
      mapped3 = assets.map(GameStoreAsset.transformStoreAssetFromServer);
    }
    tmp8 = null;
    if (null != staff_notes) {
      const obj2 = { content: staff_notes.content, user: tmp9 };
      tmp9 = null;
      if (null != staff_notes.user) {
        const self = this;
        const self2 = this;
        tmp9 = new UserRecord(staff_notes.user);
      }
      tmp8 = obj2;
    }
    tmp11 = null;
    if (null != id.guild) {
      tmp11 = {
        id: id.guild.id,
        name: id.guild.name,
        icon: id.guild.icon,
        approximateMemberCount: id.guild.approximate_member_count,
        approximatePresenceCount: id.guild.approximate_presence_count,
      };
      const obj3 = {
        id: id.guild.id,
        name: id.guild.name,
        icon: id.guild.icon,
        approximateMemberCount: id.guild.approximate_member_count,
        approximatePresenceCount: id.guild.approximate_presence_count,
      };
    }
    result = null;
    if (null != id.thumbnail) {
      const obj4 = GameStoreAsset;
      result = obj4.transformStoreAssetFromServer(id.thumbnail);
    }
    result1 = null;
    if (null != id.preview_video) {
      const obj5 = GameStoreAsset;
      result1 = obj5.transformStoreAssetFromServer(id.preview_video);
    }
    result2 = null;
    if (null != id.header_background) {
      const obj6 = GameStoreAsset;
      result2 = obj6.transformStoreAssetFromServer(id.header_background);
    }
    result3 = null;
    if (null != id.header_logo_dark_theme) {
      const obj7 = GameStoreAsset;
      result3 = obj7.transformStoreAssetFromServer(id.header_logo_dark_theme);
    }
    result4 = null;
    if (null != id.header_logo_light_theme) {
      const obj8 = GameStoreAsset;
      result4 = obj8.transformStoreAssetFromServer(id.header_logo_light_theme);
    }
    result5 = null;
    if (null != id.box_art) {
      const obj9 = GameStoreAsset;
      result5 = obj9.transformStoreAssetFromServer(id.box_art);
    }
    result6 = null;
    if (null != id.hero_background) {
      const obj10 = GameStoreAsset;
      result6 = obj10.transformStoreAssetFromServer(id.hero_background);
    }
    result7 = null;
    if (null != id.hero_video) {
      const obj11 = GameStoreAsset;
      result7 = obj11.transformStoreAssetFromServer(id.hero_video);
    }
    ({ entitlement_branch_id: obj.entitlementBranchId, benefits: obj.benefits, published: obj.published } = id);
    return new StoreListingRecord(obj);
  }
  isSlimDirectoryVersion() {
    return null == this.description;
  }
}
const prototype = StoreListingRecord.prototype;
let result = size.fileFinishedImporting("records/StoreListingRecord.tsx");

export default StoreListingRecord;
