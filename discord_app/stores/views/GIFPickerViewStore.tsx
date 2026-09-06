// discord_app/stores/views/GIFPickerViewStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import util from "../../intl/index.native.tsx";
import frecency_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx";
import size from "../../../_runtime/metro/00002__.js";

function getFormatFromUrl(src) {
  try {
    const _URL = URL;
    const uRL = new URL(src);
    const formatted = uRL.pathname.toLowerCase();
    if (!formatted.endsWith(".mp4")) {
      if (!formatted.endsWith(".webm")) {
        return frecency_user_settings.GIFType.IMAGE;
      }
    }
    return frecency_user_settings.GIFType.VIDEO;
  } catch (err) {}
}
Constants.GIFPickerResultTypes;
const tinywebp = "tinywebp";
const GIFType = frecency_user_settings.GIFType;
const IMAGE = GIFType.IMAGE;
let analyticsID = null;
let query = "";
query = "";
let closure_8 = [];
let items2 = [];
let items = [];
items = [];
const Store = initializeDefault.Store;
class GIFPickerViewStore extends Store {}
const prototype = GIFPickerViewStore.prototype;
prototype["getAnalyticsID"] = function getAnalyticsID() {
  return analyticsID;
};
prototype["getQuery"] = function getQuery() {
  return query;
};
prototype["getResultQuery"] = function getResultQuery() {
  return query;
};
prototype["getResultItems"] = function getResultItems() {
  return closure_8;
};
prototype["getTrendingCategories"] = function getTrendingCategories() {
  return items2;
};
prototype["getSelectedFormat"] = function getSelectedFormat() {
  return tinywebp;
};
prototype["getSuggestions"] = function getSuggestions() {
  return items;
};
prototype["getTrendingSearchTerms"] = function getTrendingSearchTerms() {
  return items;
};
GIFPickerViewStore.displayName = "GIFPickerViewStore";
const gIFPickerViewStore = new GIFPickerViewStore(DispatcherDefault, {
  GIF_PICKER_INITIALIZE: function handleInitialize(analyticsID) {
    analyticsID = analyticsID.analyticsID;
  },
  GIF_PICKER_QUERY: function handleQuery(query) {
    query = query.query;
    if ("" === query) {
      query = "";
      closure_8 = [];
      items = [];
    }
  },
  GIF_PICKER_QUERY_SUCCESS: function handleQuerySuccess(query) {
    if (null != query.query) {
      if (query === query) {
        return false;
      }
    }
    if (null != query.query) {
      query = query.query;
    }
    items = query.items;
    closure_8 = items.map((width) => {
      const size = {
        width: width.width,
        height: width.height,
        src: width.src,
        gifSrc: width.gif_src,
        url: width.url,
        id: width.id,
        format,
      };
      return size;
    });
  },
  GIF_PICKER_QUERY_FAILURE: function handleQueryFailure(query) {
    query = query.query;
    if (null == query) {
      return false;
    } else {
      closure_8 = [];
    }
  },
  GIF_PICKER_TRENDING_FETCH_SUCCESS: function handleTrendingFetchSuccess(trendingCategories) {
    trendingCategories = trendingCategories.trendingCategories;
    if (null != trendingCategories.trendingGIFPreview) {
      let obj = { type: GIFPickerResultTypes.TRENDING_GIFS, name: null, src: null, format: null };
      const intl = util.intl;
      obj.name = intl.string(util.t.H6zNFz);
      obj.src = trendingCategories.trendingGIFPreview.src;
      obj.format = getFormatFromUrl(trendingCategories.trendingGIFPreview.src);
      items = [obj];
      let items1 = items;
    } else {
      items1 = [];
    }
    items2 = [
      ...items1,
      ...trendingCategories.map((src) => {
        const obj = {};
        const merged = Object.assign(src);
        obj.src = src.src;
        obj.type = constants.TRENDING_CATEGORY;
        obj.format = getFormatFromUrl(src.src);
        return obj;
      }),
    ];
  },
  GIF_PICKER_SUGGESTIONS_SUCCESS: function handleSuggestionsSuccess(items) {
    items = items.items;
  },
  GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function handleTrendingSearchSuccess(items) {
    items = items.items;
  },
});
const result = size.fileFinishedImporting("stores/views/GIFPickerViewStore.tsx");

export default gIFPickerViewStore;
