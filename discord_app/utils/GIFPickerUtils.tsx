// === Module 10709: GIFPickerUtils ===

// Module 10709 (GIFPickerUtils)
import Constants from "Constants" /* 1074 */;
import GifProvider from "GifProvider" /* 10708 */;
import size from "module_2" /* 2 */;

const SearchTypes = Constants.SearchTypes;
const result = size.fileFinishedImporting("utils/GIFPickerUtils.tsx");

export const isKlipyProvider = function isKlipyProvider(arg0) {
  return arg0 === GifProvider.GIF_PROVIDER_EMBED_NAME;
};
export const shouldUseAnimatedWebPThumbnail = function shouldUseAnimatedWebPThumbnail(arg0) {
  return arg0 === GifProvider.GIF_PROVIDER_EMBED_NAME;
};
export const getGIFThumbnailForFavorite = function getGIFThumbnailForFavorite(providerName) {
  if (providerName.providerName === GifProvider.GIF_PROVIDER_EMBED_NAME) {
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
  if (null != TRENDING_GIFS) {
    const obj2 = {};
    obj2[TRENDING_GIFS] = 1;
    let obj = obj2;
  } else {
    obj = {};
  }
  let obj3 = arg2;
  if (arg2 == null) {
    obj3 = {};
  }
  ({ offset, limit, results } = obj3);
  const obj4 = { search_type: SearchTypes.GIF, load_id: analyticsID, limit, offset, page: null, total_results: null, page_results: null, num_modifiers: null, modifiers: null };
  let num2 = 1;
  if (null != limit) {
    num2 = 1;
    if (null != offset) {
      const _Math = Math;
      num2 = Math.floor(offset / limit) + 1;
    }
  }
  obj4.page = num2;
  obj4.total_results = obj3.totalResults;
  let tmp2 = null;
  if (null != results) {
    tmp2 = results;
  }
  obj4.page_results = tmp2;
  obj4.num_modifiers = Object.keys(obj).length;
  obj4.modifiers = obj;
  return obj4;
};