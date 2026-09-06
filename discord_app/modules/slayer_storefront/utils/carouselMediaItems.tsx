// discord_app/modules/slayer_storefront/utils/carouselMediaItems.tsx
import StoreUtils from "../../../utils/StoreUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
export const convertCarouselItemsToMediaItems = function convertCarouselItemsToMediaItems(
  carouselItems,
  applicationId,
  stateFromStores2,
  heroWidth,
) {
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
            let obj = { type: "video", src: null, videoThumbnailSrc: null, thumbnailSrc: null, backgroundSrc: null };
            let tmp26 = require;
            let obj6 = StoreUtils;
            let str3 = "mp4";
            obj.src = obj6.getAssetURL(applicationId, tmp5, heroWidth, "mp4");
            let obj7 = StoreUtils;
            let str4 = "webp";
            obj.videoThumbnailSrc = obj7.getAssetURL(applicationId, tmp5, heroWidth, "webp");
            let assetURL;
            if (null != tmp4.thumbnailAssetId) {
              let tmp26Result = tmp26(4802);
              let str5 = "webp";
              assetURL = tmp26Result.getAssetURL(applicationId, tmp4.thumbnailAssetId, 112, "webp");
            }
            obj.thumbnailSrc = assetURL;
            let assetURL1;
            if (null != tmp4.backgroundAssetId) {
              tmp26Result = tmp26(4802);
              assetURL1 = tmp26Result.getAssetURL(
                applicationId,
                tmp4.backgroundAssetId,
                heroWidth,
                tmp26(7226).LARGE_ASSET_FORMAT,
              );
            }
            obj.backgroundSrc = assetURL1;
            arr = push(obj);
          } else {
            obj = { type: "image", src: null, thumbnailSrc: null, backgroundSrc: null };
            let tmp8 = require;
            let obj2 = StoreUtils;
            let str = "webp";
            obj.src = obj2.getAssetURL(applicationId, tmp7, heroWidth, "webp");
            let assetURL2;
            if (null != tmp4.thumbnailAssetId) {
              let tmp8Result = tmp8(4802);
              let str2 = "webp";
              assetURL2 = tmp8Result.getAssetURL(applicationId, tmp4.thumbnailAssetId, 112, "webp");
            }
            obj.thumbnailSrc = assetURL2;
            let assetURL3;
            if (null != tmp4.backgroundAssetId) {
              tmp8Result = tmp8(4802);
              assetURL3 = tmp8Result.getAssetURL(
                applicationId,
                tmp4.backgroundAssetId,
                heroWidth,
                tmp8(7226).LARGE_ASSET_FORMAT,
              );
            }
            obj.backgroundSrc = assetURL3;
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
