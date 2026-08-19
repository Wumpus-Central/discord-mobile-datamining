// === Module 10195: doSearchRequest ===

// Module 10195 (doSearchRequest)
import sendRequest from "sendRequest" /* 530 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import isDiscordProxiedAssetUrlDefault from "isDiscordProxiedAssetUrl" /* 1487 */;
import obj132Default from "obj132" /* 4827 */;
import collectGuildAnalyticsMetadataDefault from "collectGuildAnalyticsMetadata" /* 5042 */;
import shouldRefreshAttachmentUrl from "shouldRefreshAttachmentUrl" /* 9085 */;
import GIF_PROVIDER from "GIF_PROVIDER" /* 10196 */;
import isKlipyProvider from "isKlipyProvider" /* 10197 */;
import _getSystemLocale from "_getSystemLocale" /* 1994 */;
import getFormatFromUrl from "getFormatFromUrl" /* 10194 */;
import ME from "ME" /* 676 */;
import MAX_FAVORITES from "MAX_FAVORITES" /* 685 */;
import importDefaultResult from "apply" /* 12 */;

require = fn;
function doSearchRequest(q, arg1, limit) {
  const _require = q;
  importDefault = arg1;
  dependencyMap = limit;
  closure_3 = Date.now();
  if (null != arg1) {
    let obj = {};
    obj[arg1] = 1;
  } else {
    obj = {};
  }
  let obj2 = collectGuildAnalyticsMetadataDefault;
  obj = { search_type: constants3.GIF, load_id: store.getAnalyticsID(), num_modifiers: Object.keys(obj).length, modifiers: obj, gif_provider: _require(10196).GIF_PROVIDER };
  obj2.trackWithMetadata(constants.SEARCH_STARTED, obj);
  const HTTP = _require(530).HTTP;
  obj1 = { url: constants2.GIFS_SEARCH, query: null, oldFormErrors: true, rejectWithError: true };
  obj2 = { q, media_format: store.getSelectedFormat(), locale: closure_3.locale, limit };
  obj1[1] = obj2;
  const value = HTTP.get(obj1);
  value.then((result) => {
    const body = result.body;
    let obj = { startTime: closure_3, limit };
    const startTime = obj.startTime;
    const merged = Object.assign(obj, Object.create(null));
    let obj2 = q(limit[6]);
    obj = {};
    const analyticsID = closure_1_4.getAnalyticsID();
    const merged1 = Object.assign(obj);
    const merged2 = Object.assign(merged);
    obj.results = body.length;
    result = obj2.calculateAnalyticsMetadata(analyticsID, callback, obj);
    if (null == startTime) {
      obj1 = {};
    } else {
      obj1 = { load_duration_ms: null };
      const _Date = Date;
      obj1[0] = Date.now() - startTime;
    }
    obj2 = {};
    const merged3 = Object.assign(result);
    const merged4 = Object.assign(obj1);
    obj2.gif_provider = q(limit[5]).GIF_PROVIDER;
    callback(limit[4]).trackWithMetadata(closure_1_5.SEARCH_RESULT_VIEWED, obj2);
    const obj6 = callback(limit[4]);
    callback(limit[8]).dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", query: q, items: body });
    const obj8 = callback(limit[8]);
  }, () => {
    callback(limit[8]);
    const obj = { type: "GIF_PICKER_QUERY_FAILURE", query: closure_0 };
    return obj.dispatch(obj);
  });
}
({ AnalyticEvents: c5, Endpoints: closure_6, SearchTypes: error, GIFPickerResultTypes: closure_8 } = ME);
({ MAX_FAVORITE_GIFS_SIZE: c9, UserSettingsDelay: c10 } = MAX_FAVORITES);
const re11 = /-/g;
let closure_13 = importDefaultResult.debounce(doSearchRequest, 250);
const re14 = /\.(webp|avif|gif)(\?|$)/i;
let result = require("obj132").fileFinishedImporting("actions/GIFPickerActionCreators.tsx");

export const trackSearchStart = function trackSearchStart(arg0) {
  if (null != arg0) {
    let obj = {};
    obj[arg0] = 1;
  } else {
    obj = {};
  }
  obj = { search_type: constants3.GIF, load_id: store.getAnalyticsID(), num_modifiers: Object.keys(obj).length, modifiers: obj, gif_provider: GIF_PROVIDER.GIF_PROVIDER };
  collectGuildAnalyticsMetadataDefault.trackWithMetadata(constants.SEARCH_STARTED, obj);
};
export const trackSearchResultViewed = function trackSearchResultViewed(totalResults, TRENDING_GIFS) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const startTime = obj.startTime;
  const merged = Object.assign(obj, Object.create(null));
  let obj2 = isKlipyProvider;
  obj = {};
  const analyticsID = store.getAnalyticsID();
  const merged1 = Object.assign(obj);
  const merged2 = Object.assign(merged);
  obj.results = totalResults.length;
  const result = obj2.calculateAnalyticsMetadata(analyticsID, TRENDING_GIFS, obj);
  if (null == startTime) {
    obj1 = {};
  } else {
    obj1 = { load_duration_ms: null };
    const _Date = Date;
    obj1[0] = Date.now() - startTime;
  }
  obj2 = {};
  const merged3 = Object.assign(result);
  const merged4 = Object.assign(obj1);
  obj2.gif_provider = GIF_PROVIDER.GIF_PROVIDER;
  collectGuildAnalyticsMetadataDefault.trackWithMetadata(constants.SEARCH_RESULT_VIEWED, obj2);
};
export const search = function search(q, arg1, arg2, limit) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if ("" === q) {
    dispatcherDefault.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
  } else {
    const obj = { type: "GIF_PICKER_QUERY", query: null };
    obj[1] = q;
    obj.dispatch(obj);
    if (flag) {
      doSearchRequest(q, arg1, limit);
    } else {
      callback(q, arg1, limit);
    }
  }
};
export const fetchSuggestions = function fetchSuggestions(resultQuery) {
  const _require = resultQuery;
  let tmp = "" !== resultQuery;
  if (tmp) {
    tmp = null != resultQuery;
  }
  if (tmp) {
    const HTTP = _require(530).HTTP;
    let obj = { url: null, query: null, oldFormErrors: true, rejectWithError: true };
    obj[0] = constants2.GIFS_SUGGEST;
    obj = { q: null, limit: 5, locale: null };
    obj[0] = resultQuery;
    obj[2] = closure_3.locale;
    obj[1] = obj;
    const value = HTTP.get(obj);
    value.then((result) => {
      const obj = { type: "GIF_PICKER_SUGGESTIONS_SUCCESS", query: closure_0, items: result.body };
      obj.dispatch(obj);
    });
  }
};
export const resetSearch = function resetSearch() {
  dispatcherDefault.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
};
export const trackSelectGIF = function trackSelectGIF(arg0) {
  ({ query, gifId } = arg0);
  ({ type, index, offset, limit, results, totalResults } = arg0);
  let obj = isKlipyProvider;
  const result = obj.calculateAnalyticsMetadata(store.getAnalyticsID(), type, { offset, limit, results, totalResults });
  obj1 = collectGuildAnalyticsMetadataDefault;
  obj = {};
  const merged = Object.assign(result);
  obj.index_num = index;
  obj.source_object = "GIF Picker";
  obj.query = query;
  obj1.trackWithMetadata(constants.SEARCH_RESULT_SELECTED, obj);
  if (null != gifId) {
    const HTTP = sendRequest.HTTP;
    obj = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
    obj[0] = constants2.GIFS_SELECT;
    obj1 = { id: null, q: null };
    obj1[0] = gifId;
    obj1[1] = query;
    obj[1] = obj1;
    HTTP.post(obj);
  }
};
export const initializeSearch = function initializeSearch() {
  let obj = replaced(514);
  replaced = obj.v4().replace(closure_11, "");
  const str = obj.v4();
  obj = { search_type: constants3.GIF, load_id: replaced };
  collectGuildAnalyticsMetadataDefault.trackWithMetadata(constants.SEARCH_OPENED, obj);
  dispatcherDefault.wait(() => {
    const obj = { type: "GIF_PICKER_INITIALIZE", analyticsID: replaced };
    obj.dispatch(obj);
  });
};
export const fetchTrending = function fetchTrending() {
  const HTTP = sendRequest.HTTP;
  let obj = { locale: closure_3.locale, media_format: store.getSelectedFormat() };
  obj[1] = obj;
  const value = HTTP.get(obj);
  value.then((result) => {
    ({ categories, gifs } = result.body);
    callback(table[8]);
    const obj = { type: "GIF_PICKER_TRENDING_FETCH_SUCCESS", trendingCategories: categories, trendingGIFPreview: gifs[0] };
    obj.dispatch(obj);
  });
};
export const fetchTrendingGIFs = function fetchTrendingGIFs(closure_10) {
  const _require = closure_10;
  importDefault = Date.now();
  const TRENDING_GIFS = constants4.TRENDING_GIFS;
  if (null != TRENDING_GIFS) {
    let obj = {};
    obj[TRENDING_GIFS] = 1;
  } else {
    obj = {};
  }
  let obj2 = collectGuildAnalyticsMetadataDefault;
  obj = { search_type: constants3.GIF, load_id: store.getAnalyticsID(), num_modifiers: Object.keys(obj).length, modifiers: obj, gif_provider: _require(10196).GIF_PROVIDER };
  obj2.trackWithMetadata(constants.SEARCH_STARTED, obj);
  const HTTP = _require(530).HTTP;
  obj1 = { url: constants2.GIFS_TRENDING_GIFS, query: null, oldFormErrors: true, rejectWithError: true };
  obj2 = { media_format: store.getSelectedFormat(), locale: closure_3.locale, limit: closure_10 };
  obj1[1] = obj2;
  const value = HTTP.get(obj1);
  value.then((result) => {
    const body = result.body;
    let obj = { startTime: callback2, limit: callback };
    const startTime = obj.startTime;
    const merged = Object.assign(obj, Object.create(null));
    let obj2 = callback(dependencyMap[6]);
    obj = {};
    const analyticsID = closure_1_4.getAnalyticsID();
    const merged1 = Object.assign(obj);
    const merged2 = Object.assign(merged);
    obj.results = body.length;
    result = obj2.calculateAnalyticsMetadata(analyticsID, closure_1_8.TRENDING_GIFS, obj);
    if (null == startTime) {
      obj1 = {};
    } else {
      obj1 = { load_duration_ms: null };
      const _Date = Date;
      obj1[0] = Date.now() - startTime;
    }
    obj2 = {};
    const merged3 = Object.assign(result);
    const merged4 = Object.assign(obj1);
    obj2.gif_provider = callback(dependencyMap[5]).GIF_PROVIDER;
    callback2(dependencyMap[4]).trackWithMetadata(closure_1_5.SEARCH_RESULT_VIEWED, obj2);
    const obj6 = callback2(dependencyMap[4]);
    callback2(dependencyMap[8]).dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", items: body });
    const obj8 = callback2(dependencyMap[8]);
  }, () => {
    callback2(table[8]).dispatch({ type: "GIF_PICKER_QUERY_FAILURE" });
  });
};
export const gifUrlKey = function gifUrlKey(uri) {
  let str = uri;
  const toURLSafeResult = isDiscordProxiedAssetUrlDefault.toURLSafe(uri);
  let tmp4 = uri;
  if (null != toURLSafeResult) {
    if (obj2.isAttachmentUrl(toURLSafeResult)) {
      str = shouldRefreshAttachmentUrl.removeSignedUrlParameters(toURLSafeResult);
      str = str.toString();
      const tmp5Result = shouldRefreshAttachmentUrl;
    }
    tmp4 = str;
    obj2 = shouldRefreshAttachmentUrl;
  }
  return tmp4;
};
export const addFavoriteGIF = function addFavoriteGIF(item) {
  const _require = item;
  const FrecencyUserSettingsActionCreators = _require(1374).FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", (gifs) => {
    let obj = importDefaultResult;
    const values = Object.values(gifs.gifs);
    let num = obj.max(values.map((item, index) => item.order));
    if (num == null) {
      num = 0;
    }
    obj1 = /\.(mp4|webm)(\?|$)/i;
    if (obj1.test(item.src)) {
      if (null != item.gifSrc) {
        if ("" !== item.gifSrc) {
          let tmpResult = isDiscordProxiedAssetUrlDefault;
          const toURLSafeResult = tmpResult.toURLSafe(item.src);
          let tmp9 = null != toURLSafeResult;
          if (tmp9) {
            let result = item(dependencyMap[12]).isExternalProxiedAttachmentUrl(toURLSafeResult);
            if (!result) {
              result = item(dependencyMap[12]).isAttachmentUrl(toURLSafeResult);
              const tmp10Result = item(dependencyMap[12]);
            }
            tmp9 = result;
            const obj7 = item(dependencyMap[12]);
          }
          let obj9 = src;
          if (tmp9) {
            obj9 = src;
            if (closure_1_14.test(src)) {
              tmpResult = isDiscordProxiedAssetUrlDefault;
              const str2 = tmpResult.toURLSafe(src);
              let tmp13 = src;
              if (null != str2) {
                const formatted = str2.pathname.toLowerCase();
                let endsWithResult1 = formatted.endsWith(".avif");
                const endsWithResult = formatted.endsWith(".webp");
                if (!endsWithResult) {
                  tmp13 = src;
                }
                if (!endsWithResult1) {
                  endsWithResult1 = endsWithResult2;
                }
                if (endsWithResult1) {
                  const searchParams = str2.searchParams;
                  const result1 = searchParams.set("format", "webp");
                }
                const searchParams2 = str2.searchParams;
                const result2 = searchParams2.set("animated", "true");
                src = str2.toString();
                endsWithResult2 = formatted.endsWith(".gif");
              }
              obj9 = tmp13;
            }
          }
          let combined = obj9;
          if (obj9.startsWith("//")) {
            const _HermesInternal = HermesInternal;
            combined = "https:" + obj9;
          }
          if (closure_1_14.test(combined)) {
            let format = item(dependencyMap[14]).GIFType.IMAGE;
          } else {
            format = item.format;
          }
          let url = item.url;
          const toURLSafeResult1 = isDiscordProxiedAssetUrlDefault.toURLSafe(url);
          let tmp23 = url;
          if (null != toURLSafeResult1) {
            if (obj12.isAttachmentUrl(toURLSafeResult1)) {
              const tmp24Result = item(dependencyMap[12]);
              url = item(dependencyMap[12]).removeSignedUrlParameters(toURLSafeResult1).toString();
              const str9 = item(dependencyMap[12]).removeSignedUrlParameters(toURLSafeResult1);
            }
            tmp23 = url;
            obj12 = item(dependencyMap[12]);
          }
          obj = {};
          const merged = Object.assign(item);
          obj.src = combined;
          obj.format = format;
          obj.order = num + 1;
          gifs.gifs[tmp23] = obj;
          const FavoriteGIFs = item(dependencyMap[14]).FavoriteGIFs;
          if (FavoriteGIFs.toBinary(gifs).length > closure_1_9) {
            obj = { title: null, body: null };
            const intl = item(dependencyMap[16]).intl;
            obj[0] = intl.string(item(dependencyMap[16]).t["+XYXtZ"]);
            const intl2 = item(dependencyMap[16]).intl;
            obj[1] = intl2.string(item(dependencyMap[16]).t.YSDH9n);
            obj132Default.show(obj);
            return false;
          } else {
            const sizeResult = importDefaultResult.size(gifs.gifs);
            if (sizeResult > 2) {
              gifs.hideTooltip = true;
            }
            const tmpResult3 = importDefaultResult;
            obj1 = { total_num_favorited: null };
            obj1[0] = sizeResult;
            expandEventPropertiesDefault.track(closure_1_5.GIF_FAVORITED, obj1);
            const tmpResult4 = expandEventPropertiesDefault;
          }
          const tmpResult1 = isDiscordProxiedAssetUrlDefault;
        }
        src = item.gifSrc;
      }
    }
    const toURLSafeResult2 = isDiscordProxiedAssetUrlDefault.toURLSafe(item.src);
    let tmp5 = null != toURLSafeResult2;
    if (tmp5) {
      let result3 = item(dependencyMap[12]).isExternalProxiedAttachmentUrl(toURLSafeResult2);
      if (!result3) {
        result3 = item(dependencyMap[12]).isAttachmentUrl(toURLSafeResult2);
        const tmp6Result = item(dependencyMap[12]);
      }
      tmp5 = result3;
      const obj4 = item(dependencyMap[12]);
    }
    src = item.src;
    const tmpResult5 = isDiscordProxiedAssetUrlDefault;
  }, constants5.INFREQUENT_USER_ACTION);
};
export const removeFavoriteGIF = function removeFavoriteGIF(uri) {
  const _require = uri;
  const FrecencyUserSettingsActionCreators = _require(1374).FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", (gifs) => {
    if (uri in gifs.gifs) {
      delete tmp[tmp2];
    } else {
      let obj = isDiscordProxiedAssetUrlDefault;
      const toURLSafeResult = obj.toURLSafe(uri);
      if (null != toURLSafeResult) {
        let str = uri;
        if (obj2.isAttachmentUrl(toURLSafeResult)) {
          str = uri(dependencyMap[12]).removeSignedUrlParameters(toURLSafeResult);
          str = str.toString();
          const tmp10Result = uri(dependencyMap[12]);
        }
        obj2 = uri(dependencyMap[12]);
      }
      delete tmp[tmp3];
    }
    obj = { total_num_favorited: null };
    const obj4 = expandEventPropertiesDefault;
    obj[0] = importDefaultResult.size(gifs.gifs);
    obj4.track(closure_1_5.GIF_UNFAVORITED, obj);
  }, constants5.INFREQUENT_USER_ACTION);
};
export const fetchTrendingSearchTerms = function fetchTrendingSearchTerms() {
  const HTTP = sendRequest.HTTP;
  const obj = { limit: 5, locale: closure_3.locale };
  const value = HTTP.get(obj);
  value.then((result) => {
    callback(table[8]).dispatch({ type: "GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS", items: result.body });
  });
};