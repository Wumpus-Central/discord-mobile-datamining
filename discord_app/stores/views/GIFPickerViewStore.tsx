// === Module 10233: getFormatFromUrl ===

// Module 10233 (getFormatFromUrl)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import create from "create" /* 1341 */;

function getFormatFromUrl(src) {
  try {
    const _URL = URL;
    const uRL = new URL(src);
    const formatted = uRL.pathname.toLowerCase();
    if (!formatted.endsWith(".mp4")) {
      if (!formatted.endsWith(".webm")) {
        return create.GIFType.IMAGE;
      }
    }
    return create.GIFType.VIDEO;
  } catch (err) {
  }
}
ME.GIFPickerResultTypes;
const tinywebp = "tinywebp";
const GIFType = create.GIFType;
const IMAGE = GIFType.IMAGE;
let c5 = null;
let c6 = "";
let c7 = "";
let closure_8 = [];
let closure_9 = [];
let closure_10 = [];
let closure_11 = [];
const Store = initializeDefault.Store;
class GIFPickerViewStore extends Store {
}
const prototype = GIFPickerViewStore.prototype;
prototype["getAnalyticsID"] = function getAnalyticsID() {
  return c5;
};
prototype["getQuery"] = function getQuery() {
  return c6;
};
prototype["getResultQuery"] = function getResultQuery() {
  return c7;
};
prototype["getResultItems"] = function getResultItems() {
  return closure_8;
};
prototype["getTrendingCategories"] = function getTrendingCategories() {
  return closure_9;
};
prototype["getSelectedFormat"] = function getSelectedFormat() {
  return tinywebp;
};
prototype["getSuggestions"] = function getSuggestions() {
  return closure_10;
};
prototype["getTrendingSearchTerms"] = function getTrendingSearchTerms() {
  return closure_11;
};
GIFPickerViewStore.displayName = "GIFPickerViewStore";
const gIFPickerViewStore = new GIFPickerViewStore(dispatcherDefault, {
  GIF_PICKER_INITIALIZE: function handleInitialize(analyticsID) {
    analyticsID = analyticsID.analyticsID;
  },
  GIF_PICKER_QUERY: function handleQuery(query) {
    query = query.query;
    if ("" === query) {
      c7 = "";
      closure_8 = [];
      closure_10 = [];
    }
  },
  GIF_PICKER_QUERY_SUCCESS: function handleQuerySuccess(query) {
    if (null != query.query) {
      if (c6 === query) {
        return false;
      }
    }
    if (null != query.query) {
      query = query.query;
    }
    const items = query.items;
    closure_8 = items.map((width) => ({ width: width.width, height: width.height, src: width.src, gifSrc: width.gif_src, url: width.url, id: width.id, format: closure_4 }));
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
      let obj = { type: null, name: null, src: null, format: null };
      obj[0] = GIFPickerResultTypes.TRENDING_GIFS;
      const intl = getSystemLocale.intl;
      obj[1] = intl.string(getSystemLocale.t.H6zNFz);
      obj[2] = trendingCategories.trendingGIFPreview.src;
      obj[3] = getFormatFromUrl(trendingCategories.trendingGIFPreview.src);
      const items = [obj];
      let items1 = items;
    } else {
      items1 = [];
    }
    const items2 = [
      ...items1,
      ...trendingCategories.map((src) => {
        const obj = {};
        const merged = Object.assign(src);
        obj.src = src.src;
        obj.type = constants.TRENDING_CATEGORY;
        obj.format = callback(src.src);
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
});
const result = set.fileFinishedImporting("stores/views/GIFPickerViewStore.tsx");

export default gIFPickerViewStore;