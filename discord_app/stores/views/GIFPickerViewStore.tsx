// === Module 10089: GIFPickerViewStore ===

// Module 10089 (GIFPickerViewStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import frecency_user_settings from "frecency_user_settings" /* 1232 */;
import size_mod from "module_2" /* 2 */;

function getFormatFromUrl(src) {
  try {
    const _URL = URL;
    const self = this;
    const self2 = this;
    const uRL = new URL(src);
    const str = uRL.pathname;
    const formatted = str.toLowerCase();
    const obj2 = formatted;
    if (!formatted.endsWith(".mp4")) {
      if (!obj2.endsWith(".webm")) {
        return frecency_user_settings.GIFType.IMAGE;
      }
    }
    return frecency_user_settings.GIFType.VIDEO;
  } catch (err) {
  }
}
const GIFPickerResultTypes = Constants.GIFPickerResultTypes;
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
const Store = get_initializedDefault.Store;
class GIFPickerViewStore extends Store {
  getAnalyticsID() {
    return analyticsID;
  }
  getQuery() {
    return query;
  }
  getResultQuery() {
    return query;
  }
  getResultItems() {
    return closure_8;
  }
  getTrendingCategories() {
    return items2;
  }
  getSelectedFormat() {
    return tinywebp;
  }
  getSuggestions() {
    return items;
  }
  getTrendingSearchTerms() {
    return items;
  }
}
const prototype = GIFPickerViewStore.prototype;
GIFPickerViewStore.displayName = "GIFPickerViewStore";
let obj = {
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
    let format;
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
      size = { width: width.width, height: width.height, src: width.src, gifSrc: width.gif_src, url: width.url, id: width.id, format };
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
    let intl;
    let items1;
    trendingCategories = trendingCategories.trendingCategories;
    if (null != trendingCategories.trendingGIFPreview) {
      let obj = { type: GIFPickerResultTypes.TRENDING_GIFS, name: intl.string(intl2.t.H6zNFz), src: trendingCategories.trendingGIFPreview.src, format: getFormatFromUrl(trendingCategories.trendingGIFPreview.src) };
      intl = intl2.intl;
      items = [obj];
      items1 = items;
    } else {
      items1 = [];
    }
    items2 = [
      ...items1,
      ...trendingCategories.map((src) => {
        const obj = { src: src.src, type: constants.TRENDING_CATEGORY, format: getFormatFromUrl(src.src) };
        const merged = Object.assign(src);
        return obj;
      })
    ];
  },
  GIF_PICKER_SUGGESTIONS_SUCCESS: function handleSuggestionsSuccess(items) {
    items = items.items;
  },
  GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function handleTrendingSearchSuccess(items) {
    items = items.items;
  }
};
const gIFPickerViewStore = new GIFPickerViewStore(DispatcherDefault, obj);
let size = size_mod;
const result = size.fileFinishedImporting("stores/views/GIFPickerViewStore.tsx");

export default gIFPickerViewStore;