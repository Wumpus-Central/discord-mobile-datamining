// === Module 10103: GIFPickerActionCreators ===

// Module 10103 (GIFPickerActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import intl3 from "intl" /* 1126 */;
import frecency_user_settings from "frecency_user_settings" /* 1232 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import URLUtilsDefault from "URLUtils" /* 1371 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5076 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5714 */;
import AttachmentUrlUtilsAll from "AttachmentUrlUtils" /* 7529 */;
import GifProvider from "GifProvider" /* 10104 */;
import GIFPickerUtils from "GIFPickerUtils" /* 10105 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import GIFPickerViewStore from "GIFPickerViewStore" /* 10102 */;
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, body, dependencyMap, importDefault;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function doSearchRequest(q, arg1, limit) {
  let closure_1;
  let obj;
  let obj5;
  let query;
  _require = q;
  importDefault = arg1;
  dependencyMap = Date.now();
  if (null != arg1) {
    let obj2 = {};
    obj2[arg1] = 1;
    obj = obj2;
  } else {
    obj = {};
  }
  let obj3 = AppAnalyticsUtilsDefault;
  let obj4 = { search_type: constants3.GIF, load_id: GIFPickerViewStore.getAnalyticsID(), num_modifiers: Object.keys(obj).length, modifiers: obj, gif_provider: require("GifProvider").GIF_PROVIDER };
  obj3.trackWithMetadata(constants.SEARCH_STARTED, obj4);
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: constants2.GIFS_SEARCH, query: obj5, oldFormErrors: true, rejectWithError: true };
  obj5 = { q, media_format: GIFPickerViewStore.getSelectedFormat(), locale: LocaleStore.locale, limit };
  const value = HTTP.get(request);
  value.then((body) => {
    let obj4;
    body = body.body;
    const obj = { startTime, limit };
    startTime = obj.startTime;
    const merged = Object.assign(obj, Object.assign({ startTime: 0 }));
    const obj2 = { offset: 0, limit: null, totalResults: body.length };
    const calculateAnalyticsMetadata = GIFPickerUtils.calculateAnalyticsMetadata;
    const obj3 = { results: body.length };
    GIFPickerUtils;
    const analyticsID = GIFPickerViewStore.getAnalyticsID();
    const merged1 = Object.assign(obj2);
    const merged2 = Object.assign(merged);
    const result = calculateAnalyticsMetadata(analyticsID, closure_1, obj3);
    if (null == startTime) {
      obj4 = {};
    } else {
      obj4 = { load_duration_ms: Date.now() - startTime };
      const _Date = Date;
    }
    const obj5 = { gif_provider: GifProvider.GIF_PROVIDER };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SEARCH_RESULT_VIEWED = metroRequire.SEARCH_RESULT_VIEWED;
    AppAnalyticsUtilsDefault;
    const merged3 = Object.assign(result);
    const merged4 = Object.assign(obj4);
    trackWithMetadata(SEARCH_RESULT_VIEWED, obj5);
    const obj6 = DispatcherDefault;
    const obj7 = { type: "GIF_PICKER_QUERY_SUCCESS", query, items: body };
    obj6.dispatch(obj7);
  }, () => {
    const obj = DispatcherDefault;
    const obj2 = { type: "GIF_PICKER_QUERY_FAILURE", query };
    return obj.dispatch(obj2);
  });
}
({ AnalyticEvents: metroRequire, Endpoints: metroImportDefault, SearchTypes: metroImportAll, GIFPickerResultTypes: c9 } = Constants);
({ MAX_FAVORITE_GIFS_SIZE: c10, UserSettingsDelay: unpackModuleId } = UserSettingsConstants);
const re12 = /-/g;
let closure_14 = module_12.debounce(doSearchRequest, 250);
const re15 = /\.(webp|avif|gif)(\?|$)/i;
let result = size.fileFinishedImporting("actions/GIFPickerActionCreators.tsx");

export const trackSearchStart = function trackSearchStart(arg0) {
  let obj;
  if (null != arg0) {
    const obj2 = {};
    obj2[arg0] = 1;
    obj = obj2;
  } else {
    obj = {};
  }
  const obj3 = AppAnalyticsUtilsDefault;
  const obj4 = { search_type: metroImportAll.GIF, load_id: GIFPickerViewStore.getAnalyticsID(), num_modifiers: Object.keys(obj).length, modifiers: obj, gif_provider: GifProvider.GIF_PROVIDER };
  obj3.trackWithMetadata(metroRequire.SEARCH_STARTED, obj4);
};
export const trackSearchResultViewed = function trackSearchResultViewed(totalResults, TRENDING_GIFS) {
  let obj4;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const startTime = obj.startTime;
  const merged = Object.assign(obj, Object.assign({ startTime: 0 }));
  const obj2 = { offset: 0, limit: null, totalResults: totalResults.length };
  const calculateAnalyticsMetadata = GIFPickerUtils.calculateAnalyticsMetadata;
  const obj3 = { results: totalResults.length };
  GIFPickerUtils;
  const analyticsID = GIFPickerViewStore.getAnalyticsID();
  const merged1 = Object.assign(obj2);
  const merged2 = Object.assign(merged);
  const result = calculateAnalyticsMetadata(analyticsID, TRENDING_GIFS, obj3);
  if (null == startTime) {
    obj4 = {};
  } else {
    obj4 = { load_duration_ms: Date.now() - startTime };
    const _Date = Date;
  }
  const obj5 = { gif_provider: GifProvider.GIF_PROVIDER };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const SEARCH_RESULT_VIEWED = metroRequire.SEARCH_RESULT_VIEWED;
  AppAnalyticsUtilsDefault;
  const merged3 = Object.assign(result);
  const merged4 = Object.assign(obj4);
  trackWithMetadata(SEARCH_RESULT_VIEWED, obj5);
};
export const search = function search(query, arg1, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if ("" === query) {
    const obj3 = DispatcherDefault;
    obj3.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
  } else {
    const obj2 = { type: "GIF_PICKER_QUERY", query };
    const obj = DispatcherDefault;
    obj.dispatch(obj2);
    if (flag) {
      doSearchRequest(query, arg1, limit);
    } else {
      closure_14(query, arg1, limit);
    }
  }
};
export const fetchSuggestions = function fetchSuggestions(resultQuery) {
  let obj;
  let query;
  _require = resultQuery;
  const tmp = "" !== resultQuery && null != resultQuery;
  if (tmp) {
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: constants2.GIFS_SUGGEST, query: obj, oldFormErrors: true, rejectWithError: true };
    obj = { q: resultQuery, limit: 5, locale: LocaleStore.locale };
    const value = HTTP.get(request);
    value.then((body) => {
      body = body.body;
      const obj = DispatcherDefault;
      const obj2 = { type: "GIF_PICKER_SUGGESTIONS_SUCCESS", query, items: body };
      obj.dispatch(obj2);
    });
  }
};
export const resetSearch = function resetSearch() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
};
export const trackSelectGIF = function trackSelectGIF(arg0) {
  let gifId;
  let index;
  let limit;
  let obj3;
  let offset;
  let query;
  let results;
  let totalResults;
  let type;
  ({ query, gifId } = arg0);
  ({ type, index, offset, limit, results, totalResults } = arg0);
  const obj = GIFPickerUtils;
  const result = obj.calculateAnalyticsMetadata(GIFPickerViewStore.getAnalyticsID(), type, { offset, limit, results, totalResults });
  const obj2 = { index_num: index, source_object: "GIF Picker", query };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const SEARCH_RESULT_SELECTED = metroRequire.SEARCH_RESULT_SELECTED;
  AppAnalyticsUtilsDefault;
  const merged = Object.assign(result);
  trackWithMetadata(SEARCH_RESULT_SELECTED, obj2);
  if (null != gifId) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: metroImportDefault.GIFS_SELECT, body: obj3, oldFormErrors: true, rejectWithError: true };
    obj3 = { id: gifId, q: query };
    HTTP.post(request);
  }
};
export const initializeSearch = function initializeSearch() {
  let replaced;
  let obj = replaced(1266);
  const str = obj.v4();
  replaced = str.replace(closure_12, "");
  let obj2 = AppAnalyticsUtilsDefault;
  const obj3 = { search_type: constants3.GIF, load_id: replaced };
  obj2.trackWithMetadata(constants.SEARCH_OPENED, obj3);
  const obj4 = DispatcherDefault;
  obj4.wait(() => {
    const obj = DispatcherDefault;
    const obj2 = { type: "GIF_PICKER_INITIALIZE", analyticsID: replaced };
    obj.dispatch(obj2);
  });
};
export const fetchTrending = function fetchTrending() {
  let obj;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: metroImportDefault.GIFS_TRENDING, query: obj, oldFormErrors: true, rejectWithError: true };
  obj = { locale: LocaleStore.locale, media_format: GIFPickerViewStore.getSelectedFormat() };
  const value = HTTP.get(request);
  value.then((body) => {
    let categories;
    let gifs;
    ({ categories, gifs } = body.body);
    const obj = DispatcherDefault;
    const obj2 = { type: "GIF_PICKER_TRENDING_FETCH_SUCCESS", trendingCategories: categories, trendingGIFPreview: gifs[0] };
    obj.dispatch(obj2);
  });
};
export const fetchTrendingGIFs = function fetchTrendingGIFs(limit) {
  let obj;
  let obj5;
  _require = limit;
  importDefault = Date.now();
  let TRENDING_GIFS = constants4.TRENDING_GIFS;
  if (null != TRENDING_GIFS) {
    let obj2 = {};
    obj2[TRENDING_GIFS] = 1;
    obj = obj2;
  } else {
    obj = {};
  }
  let obj3 = AppAnalyticsUtilsDefault;
  let obj4 = { search_type: constants3.GIF, load_id: GIFPickerViewStore.getAnalyticsID(), num_modifiers: Object.keys(obj).length, modifiers: obj, gif_provider: require("GifProvider").GIF_PROVIDER };
  obj3.trackWithMetadata(constants.SEARCH_STARTED, obj4);
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: constants2.GIFS_TRENDING_GIFS, query: obj5, oldFormErrors: true, rejectWithError: true };
  obj5 = { media_format: GIFPickerViewStore.getSelectedFormat(), locale: LocaleStore.locale, limit };
  const value = HTTP.get(request);
  value.then((body) => {
    let obj4;
    body = body.body;
    const obj = { startTime, limit };
    startTime = obj.startTime;
    const TRENDING_GIFS = constants.TRENDING_GIFS;
    const merged = Object.assign(obj, Object.assign({ startTime: 0 }));
    const obj2 = { offset: 0, limit: null, totalResults: body.length };
    const calculateAnalyticsMetadata = GIFPickerUtils.calculateAnalyticsMetadata;
    const obj3 = { results: body.length };
    GIFPickerUtils;
    const analyticsID = GIFPickerViewStore.getAnalyticsID();
    const merged1 = Object.assign(obj2);
    const merged2 = Object.assign(merged);
    const result = calculateAnalyticsMetadata(analyticsID, TRENDING_GIFS, obj3);
    if (null == startTime) {
      obj4 = {};
    } else {
      obj4 = { load_duration_ms: Date.now() - startTime };
      const _Date = Date;
    }
    const obj5 = { gif_provider: GifProvider.GIF_PROVIDER };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SEARCH_RESULT_VIEWED = metroRequire.SEARCH_RESULT_VIEWED;
    AppAnalyticsUtilsDefault;
    const merged3 = Object.assign(result);
    const merged4 = Object.assign(obj4);
    trackWithMetadata(SEARCH_RESULT_VIEWED, obj5);
    const obj6 = DispatcherDefault;
    obj6.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", items: body });
  }, () => {
    const obj = startTime(dependencyMap[8]);
    obj.dispatch({ type: "GIF_PICKER_QUERY_FAILURE" });
  });
};
export const gifUrlKey = function gifUrlKey(uri) {
  let str1 = uri;
  const obj = URLUtilsDefault;
  const toURLSafeResult = obj.toURLSafe(uri);
  let tmp4 = uri;
  if (null != toURLSafeResult) {
    const obj2 = AttachmentUrlUtilsAll;
    if (obj2.isAttachmentPathUrl(toURLSafeResult)) {
      const tmp5Result = AttachmentUrlUtilsAll;
      const str = tmp5Result.removeSignedUrlParameters(toURLSafeResult);
      str1 = str.toString();
    }
    tmp4 = str1;
  }
  return tmp4;
};
export const addFavoriteGIF = function addFavoriteGIF(size) {
  _require = size;
  const FrecencyUserSettingsActionCreators = require("UserSettingsProtoActionCreators").FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", async (gifs) => {
    let intl;
    let intl2;
    let src;
    const max = module_12.max;
    module_12;
    const values = Object.values(gifs.gifs);
    let num = max(values.map((order) => order.order));
    if (num == null) {
      num = 0;
    }
    const obj = /\.(mp4|webm)(\?|$)/i;
    if (obj.test(size.src)) {
      if (null != size.gifSrc) {
        if ("" !== size.gifSrc) {
          let format;
          const tmpResult = URLUtilsDefault;
          const toURLSafeResult = tmpResult.toURLSafe(size.src);
          let tmp10 = null != toURLSafeResult;
          if (tmp10) {
            const obj6 = AttachmentUrlUtilsAll;
            let result = obj6.isExternalProxiedAttachmentUrl(toURLSafeResult);
            if (!result) {
              const tmp11Result = AttachmentUrlUtilsAll;
              result = tmp11Result.isAttachmentPathUrl(toURLSafeResult);
            }
            tmp10 = result;
          }
          let obj8 = src;
          if (tmp10) {
            obj8 = src;
            if (re15.test(src)) {
              const tmpResult7 = URLUtilsDefault;
              const str2 = tmpResult7.toURLSafe(src);
              let tmp14 = src;
              if (null != str2) {
                const str10 = str2.pathname;
                const formatted = str10.toLowerCase();
                const endsWithResult = formatted.endsWith(".webp");
                let endsWithResult1 = formatted.endsWith(".avif");
                const endsWithResult2 = formatted.endsWith(".gif");
                if (!endsWithResult) {
                  tmp14 = src;
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
              }
              obj8 = tmp14;
            }
          }
          let combined = obj8;
          if (obj8.startsWith("//")) {
            const _HermesInternal = HermesInternal;
            combined = "https:" + obj8;
          }
          if (re15.test(combined)) {
            format = frecency_user_settings.GIFType.IMAGE;
          } else {
            format = size.format;
          }
          let url = size.url;
          gifs = gifs.gifs;
          const tmpResult8 = URLUtilsDefault;
          const toURLSafeResult1 = tmpResult8.toURLSafe(url);
          let tmp24 = url;
          if (null != toURLSafeResult1) {
            const obj11 = AttachmentUrlUtilsAll;
            if (obj11.isAttachmentPathUrl(toURLSafeResult1)) {
              const tmp25Result = AttachmentUrlUtilsAll;
              const str9 = tmp25Result.removeSignedUrlParameters(toURLSafeResult1);
              url = str9.toString();
            }
            tmp24 = url;
          }
          const obj2 = { src: combined, format, order: num + 1 };
          const merged = Object.assign(size);
          gifs[tmp24] = obj2;
          const FavoriteGIFs = frecency_user_settings.FavoriteGIFs;
          if (FavoriteGIFs.toBinary(gifs).length > authStore) {
            const obj4 = { title: intl.string(intl3.t["+XYXtZ"]), body: intl2.string(intl3.t.YSDH9n) };
            const show = AlertActionCreatorsDefault.show;
            AlertActionCreatorsDefault;
            intl = intl3.intl;
            intl2 = intl3.intl;
            show(obj4);
            return false;
          } else {
            const tmpResult10 = module_12;
            const sizeResult = tmpResult10.size(gifs.gifs);
            if (sizeResult > 2) {
              gifs.hideTooltip = true;
            }
            const obj5 = { total_num_favorited: sizeResult };
            const tmpResult11 = AnalyticsUtilsDefault;
            tmpResult11.track(metroRequire.GIF_FAVORITED, obj5);
          }
        }
        src = size.gifSrc;
      }
    }
    const tmpResult12 = URLUtilsDefault;
    const toURLSafeResult2 = tmpResult12.toURLSafe(size.src);
    let tmp6 = null != toURLSafeResult2;
    if (tmp6) {
      const obj3 = AttachmentUrlUtilsAll;
      let result3 = obj3.isExternalProxiedAttachmentUrl(toURLSafeResult2);
      if (!result3) {
        const tmp7Result = AttachmentUrlUtilsAll;
        result3 = tmp7Result.isAttachmentPathUrl(toURLSafeResult2);
      }
      tmp6 = result3;
    }
    src = size.src;
  }, constants5.INFREQUENT_USER_ACTION);
};
export const removeFavoriteGIF = function removeFavoriteGIF(uri) {
  _require = uri;
  const FrecencyUserSettingsActionCreators = require("UserSettingsProtoActionCreators").FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", async (gifs) => {
    let obj5;
    gifs = gifs.gifs;
    if (uri in gifs.gifs) {
      delete gifs[uri];
    } else {
      const obj = URLUtilsDefault;
      const toURLSafeResult = obj.toURLSafe(uri);
      let tmp6 = uri;
      if (null != toURLSafeResult) {
        let str1 = uri;
        const obj2 = AttachmentUrlUtilsAll;
        if (obj2.isAttachmentPathUrl(toURLSafeResult)) {
          const tmp7Result = AttachmentUrlUtilsAll;
          const str = tmp7Result.removeSignedUrlParameters(toURLSafeResult);
          str1 = str.toString();
        }
        tmp6 = str1;
      }
      delete gifs[tmp6];
    }
    const obj3 = { total_num_favorited: obj5.size(gifs.gifs) };
    const track = AnalyticsUtilsDefault.track;
    const GIF_UNFAVORITED = metroRequire.GIF_UNFAVORITED;
    AnalyticsUtilsDefault;
    obj5 = module_12;
    track(GIF_UNFAVORITED, obj3);
  }, constants5.INFREQUENT_USER_ACTION);
};
export const fetchTrendingSearchTerms = function fetchTrendingSearchTerms() {
  let obj;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: metroImportDefault.GIFS_TRENDING_SEARCH, query: obj, oldFormErrors: true, rejectWithError: true };
  obj = { limit: 5, locale: LocaleStore.locale };
  const value = HTTP.get(request);
  value.then((body) => {
    body = body.body;
    const obj = DispatcherDefault;
    obj.dispatch({ type: "GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS", items: body });
  });
};