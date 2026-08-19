// discord_app/modules/slayer_storefront/utils/carouselMediaItems.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import _httpGetWithCountryCodeQuery from "../../../utils/StoreUtils.tsx";
import getPrice from "../SlayerStorefrontUtils.tsx";

const result = obj132.fileFinishedImporting("modules/slayer_storefront/utils/carouselMediaItems.tsx");

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
          tmp5 = stateFromStores2[tmp4.assetId];
        }
        let tmp7 = tmp5;
        if (null != tmp5) {
          let arr = items.push(tmp4);
          let mime_type = tmp7.mime_type;
          let push = items1.push;
          if (mime_type.startsWith("video/")) {
            let obj = { type: "video", src: null, videoThumbnailSrc: null, thumbnailSrc: null, backgroundSrc: null };
            let obj6 = _httpGetWithCountryCodeQuery;
            obj[1] = obj6.getAssetURL(applicationId, tmp5, heroWidth, "mp4");
            let obj7 = _httpGetWithCountryCodeQuery;
            obj[2] = obj7.getAssetURL(applicationId, tmp5, heroWidth, "webp");
            let assetURL;
            if (null != tmp4.thumbnailAssetId) {
              let tmp26Result = _httpGetWithCountryCodeQuery;
              assetURL = tmp26Result.getAssetURL(applicationId, tmp4.thumbnailAssetId, 112, "webp");
            }
            obj[3] = assetURL;
            let assetURL1;
            if (null != tmp4.backgroundAssetId) {
              tmp26Result = _httpGetWithCountryCodeQuery;
              assetURL1 = tmp26Result.getAssetURL(applicationId, tmp4.backgroundAssetId, heroWidth, getPrice.LARGE_ASSET_FORMAT);
            }
            obj[4] = assetURL1;
            arr = push(obj);
          } else {
            obj = { type: "image", src: null, thumbnailSrc: null, backgroundSrc: null };
            let obj2 = _httpGetWithCountryCodeQuery;
            obj[1] = obj2.getAssetURL(applicationId, tmp7, heroWidth, "webp");
            let assetURL2;
            if (null != tmp4.thumbnailAssetId) {
              let tmp8Result = _httpGetWithCountryCodeQuery;
              assetURL2 = tmp8Result.getAssetURL(applicationId, tmp4.thumbnailAssetId, 112, "webp");
            }
            obj[2] = assetURL2;
            let assetURL3;
            if (null != tmp4.backgroundAssetId) {
              tmp8Result = _httpGetWithCountryCodeQuery;
              assetURL3 = tmp8Result.getAssetURL(applicationId, tmp4.backgroundAssetId, heroWidth, getPrice.LARGE_ASSET_FORMAT);
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