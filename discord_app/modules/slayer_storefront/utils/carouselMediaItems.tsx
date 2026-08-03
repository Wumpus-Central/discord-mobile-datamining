const result = require("set").fileFinishedImporting("modules/slayer_storefront/utils/carouselMediaItems.tsx");

export const WEB_HERO_WIDTH_PX = 747;
export const WEB_HERO_HEIGHT_PX = 560;
export const MOBILE_HERO_WIDTH_PX = 343;
export const MOBILE_HERO_HEIGHT_PX = 257;
export const CAROUSEL_THUMBNAIL_SIZE = 112;
export const getThumbnailSrc = function getThumbnailSrc(thumbnailSrc) {
  if (null != thumbnailSrc.thumbnailSrc) {
    thumbnailSrc = thumbnailSrc.thumbnailSrc;
  } else {
    thumbnailSrc = "video" === thumbnailSrc.type ? thumbnailSrc.videoThumbnailSrc : thumbnailSrc.src;
  }
  return thumbnailSrc;
};
export const convertCarouselItemsToMediaItems = function convertCarouselItemsToMediaItems(carouselItems, applicationId, stateFromStores2, heroWidth) {
  heroWidth = heroWidth.heroWidth;
  const items = [];
  const items1 = [];
  if (null != carouselItems) {
    if (0 !== carouselItems.length) {
      const iter = carouselItems[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        let tmp5 = null;
        if (null != nextResult.assetId) {
          let tmp6 = nextResult;
          tmp5 = stateFromStores2[tmp4.assetId];
        }
        let tmp7 = tmp5;
        if (null != tmp5) {
          let tmp50 = nextResult;
          let arr = items.push(tmp4);
          let tmp52 = tmp5;
          let mime_type = tmp7.mime_type;
          let push = items1.push;
          if (mime_type.startsWith("video/")) {
            let obj = { type: "video", src: null, videoThumbnailSrc: null, thumbnailSrc: null, backgroundSrc: null };
            let tmp26 = require;
            let tmp27 = dependencyMap;
            let obj6 = require(4493) /* _httpGetWithCountryCodeQuery */;
            let tmp28 = tmp5;
            let tmp29 = obj6;
            let tmp30 = applicationId;
            let tmp31 = tmp7;
            let tmp32 = heroWidth;
            let str3 = "mp4";
            obj[1] = obj6.getAssetURL(applicationId, tmp5, heroWidth, "mp4");
            let obj7 = require(4493) /* _httpGetWithCountryCodeQuery */;
            let tmp33 = obj7;
            let tmp34 = applicationId;
            let tmp35 = tmp7;
            let tmp36 = heroWidth;
            let str4 = "webp";
            obj[2] = obj7.getAssetURL(applicationId, tmp5, heroWidth, "webp");
            let tmp37 = nextResult;
            let assetURL;
            if (null != tmp4.thumbnailAssetId) {
              let tmp26Result = tmp26(4493);
              let tmp39 = nextResult;
              let tmp40 = tmp26Result;
              let tmp41 = applicationId;
              let num2 = 112;
              let str5 = "webp";
              assetURL = tmp26Result.getAssetURL(applicationId, tmp4.thumbnailAssetId, 112, "webp");
            }
            obj[3] = assetURL;
            let tmp42 = nextResult;
            let assetURL1;
            if (null != tmp4.backgroundAssetId) {
              tmp26Result = tmp26(4493);
              let tmp44 = nextResult;
              let tmp45 = tmp26Result;
              let tmp46 = applicationId;
              let tmp47 = heroWidth;
              assetURL1 = tmp26Result.getAssetURL(applicationId, tmp4.backgroundAssetId, heroWidth, tmp26(5728).LARGE_ASSET_FORMAT);
            }
            obj[4] = assetURL1;
            arr = push(obj);
          } else {
            obj = { type: "image", src: null, thumbnailSrc: null, backgroundSrc: null };
            let tmp8 = require;
            let tmp9 = dependencyMap;
            let obj2 = require(4493) /* _httpGetWithCountryCodeQuery */;
            let tmp10 = tmp5;
            let tmp11 = obj2;
            let tmp12 = applicationId;
            let tmp13 = heroWidth;
            let str = "webp";
            obj[1] = obj2.getAssetURL(applicationId, tmp7, heroWidth, "webp");
            let tmp14 = nextResult;
            let assetURL2;
            if (null != tmp4.thumbnailAssetId) {
              let tmp8Result = tmp8(4493);
              let tmp16 = nextResult;
              let tmp17 = tmp8Result;
              let tmp18 = applicationId;
              let num = 112;
              let str2 = "webp";
              assetURL2 = tmp8Result.getAssetURL(applicationId, tmp4.thumbnailAssetId, 112, "webp");
            }
            obj[2] = assetURL2;
            let tmp19 = nextResult;
            let assetURL3;
            if (null != tmp4.backgroundAssetId) {
              tmp8Result = tmp8(4493);
              let tmp21 = nextResult;
              let tmp22 = tmp8Result;
              let tmp23 = applicationId;
              let tmp24 = heroWidth;
              assetURL3 = tmp8Result.getAssetURL(applicationId, tmp4.backgroundAssetId, heroWidth, tmp8(5728).LARGE_ASSET_FORMAT);
            }
            obj[3] = assetURL3;
            let arr1 = push(obj);
          }
        }
        continue;
      }
      const items2 = [items, items1];
      return items2;
    }
  }
  const items3 = [items, items1];
  return items3;
};