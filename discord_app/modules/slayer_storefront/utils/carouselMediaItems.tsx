// === Module 10548: carouselMediaItems ===

// Module 10548 (carouselMediaItems)
import StoreUtils from "StoreUtils" /* 5329 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6741 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/slayer_storefront/utils/carouselMediaItems.tsx");

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
  let assetURL;
  let assetURL1;
  let assetURL2;
  let assetURL3;
  let obj2;
  let obj6;
  let obj7;
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
          tmp5 = stateFromStores2[tmp4.assetId];
        }
        let tmp7 = tmp5;
        if (null != tmp5) {
          let arr = items.push(tmp4);
          let mime_type = tmp7.mime_type;
          let push = items1.push;
          if (mime_type.startsWith("video/")) {
            let obj3 = { type: "video", src: obj6.getAssetURL(applicationId, tmp5, heroWidth, "mp4"), videoThumbnailSrc: obj7.getAssetURL(applicationId, tmp5, heroWidth, "webp"), thumbnailSrc: assetURL, backgroundSrc: assetURL1 };
            obj6 = StoreUtils;
            let str3 = "mp4";
            obj7 = StoreUtils;
            let str4 = "webp";
            assetURL = undefined;
            if (null != tmp4.thumbnailAssetId) {
              let tmp26Result = StoreUtils;
              let str5 = "webp";
              assetURL = tmp26Result.getAssetURL(applicationId, tmp4.thumbnailAssetId, 112, "webp");
            }
            assetURL1 = undefined;
            if (null != tmp4.backgroundAssetId) {
              let tmp26Result2 = StoreUtils;
              assetURL1 = tmp26Result2.getAssetURL(applicationId, tmp4.backgroundAssetId, heroWidth, SlayerStorefrontUtils.LARGE_ASSET_FORMAT);
            }
            let arr2 = push(obj3);
          } else {
            let obj = { type: "image", src: obj2.getAssetURL(applicationId, tmp7, heroWidth, "webp"), thumbnailSrc: assetURL2, backgroundSrc: assetURL3 };
            obj2 = StoreUtils;
            let str = "webp";
            assetURL2 = undefined;
            if (null != tmp4.thumbnailAssetId) {
              let tmp8Result = StoreUtils;
              let str2 = "webp";
              assetURL2 = tmp8Result.getAssetURL(applicationId, tmp4.thumbnailAssetId, 112, "webp");
            }
            assetURL3 = undefined;
            if (null != tmp4.backgroundAssetId) {
              let tmp8Result2 = StoreUtils;
              assetURL3 = tmp8Result2.getAssetURL(applicationId, tmp4.backgroundAssetId, heroWidth, SlayerStorefrontUtils.LARGE_ASSET_FORMAT);
            }
            let arr3 = push(obj);
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