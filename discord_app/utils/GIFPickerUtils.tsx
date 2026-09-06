// discord_app/utils/GIFPickerUtils.tsx
import Constants from "../Constants.tsx";
import GifProvider from "../modules/gif_picker/GifProvider.tsx";
import size from "../../_runtime/metro/00002__.js";

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
  const obj1 = {
    search_type: SearchTypes.GIF,
    load_id: analyticsID,
    limit,
    offset,
    page: null,
    total_results: null,
    page_results: null,
    num_modifiers: null,
    modifiers: null,
  };
  let num2 = 1;
  if (null != limit) {
    num2 = 1;
    if (null != offset) {
      const _Math = Math;
      num2 = Math.floor(offset / limit) + 1;
    }
  }
  obj1.page = num2;
  obj1.total_results = obj.totalResults;
  let tmp2 = null;
  if (null != results) {
    tmp2 = results;
  }
  obj1.page_results = tmp2;
  obj1.num_modifiers = Object.keys(obj).length;
  obj1.modifiers = obj;
  return obj1;
};
