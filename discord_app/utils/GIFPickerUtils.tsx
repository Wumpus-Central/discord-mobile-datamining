// discord_app/utils/GIFPickerUtils.tsx
import { SearchTypes } from "ME";

const result = require("set").fileFinishedImporting("utils/GIFPickerUtils.tsx");

export function isKlipyProvider(arg0) {
  return "Klipy" === arg0;
}
export function shouldUseAnimatedWebPThumbnail(arg0) {
  return "Klipy" === arg0;
}
export const getGIFThumbnailForFavorite = function getGIFThumbnailForFavorite(providerName) {
  if ("Klipy" === providerName.providerName) {
    const thumbnail = providerName.thumbnail;
    if (null != thumbnail) {
      let uri = thumbnail.proxyURL;
      if (uri == null) {
        uri = thumbnail.url;
      }
      if (uri == null) {
        uri = thumbnail.uri;
      }
      return uri;
    }
  }
};
export const calculateAnalyticsMetadata = function calculateAnalyticsMetadata(analyticsID, TRENDING_GIFS, arg2) {
  let limit;
  let offset;
  let results;
  if (null != TRENDING_GIFS) {
    let obj = {};
    obj[TRENDING_GIFS] = 1;
  } else {
    obj = {};
  }
  obj = arg2;
  if (arg2 == null) {
    obj = {};
  }
  ({ offset, limit, results } = obj);
  const obj1 = { search_type: SearchTypes.GIF, load_id: analyticsID, limit, offset, page: null, total_results: null, page_results: null, num_modifiers: null, modifiers: null };
  let num2 = 1;
  if (null != limit) {
    num2 = 1;
    if (null != offset) {
      const _Math = Math;
      num2 = Math.floor(offset / limit) + 1;
    }
  }
  obj1[4] = num2;
  obj1[5] = obj.totalResults;
  let tmp2 = null;
  if (null != results) {
    tmp2 = results;
  }
  obj1[6] = tmp2;
  obj1[7] = Object.keys(obj).length;
  obj1[8] = obj;
  return obj1;
};