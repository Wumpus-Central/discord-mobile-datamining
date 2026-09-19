// === Module 10624: GIFPickerActionCreators ===

// Module 10624 (GIFPickerActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1115 */;
import frecency_user_settings from "frecency_user_settings" /* 1221 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import URLUtilsDefault from "URLUtils" /* 1366 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4936 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5108 */;
import AttachmentUrlUtilsAll from "AttachmentUrlUtils" /* 10199 */;
import GifProvider from "GifProvider" /* 10625 */;
import GIFPickerUtils from "GIFPickerUtils" /* 10626 */;
import LocaleStore from "LocaleStore" /* 2109 */;
import GIFPickerViewStore from "GIFPickerViewStore" /* 10623 */;
import apply from "module_12" /* 12 */;

const require = globalThis.__r;

require = fn;
function doSearchRequest(q, arg1, limit) {
  _require = q;
  importDefault = arg1;
  dependencyMap = Date.now();
  if (null != arg1) {
    let obj2 = {};
    obj2[arg1] = 1;
    let obj = obj2;
  } else {
    obj = {};
  }
  let obj3 = AppAnalyticsUtilsDefault;
  obj3.trackWithMetadata(constants.SEARCH_STARTED, { search_type: constants3.GIF, load_id: GIFPickerViewStore.getAnalyticsID(), num_modifiers: Object.keys(obj).length, modifiers: obj, gif_provider: require("GifProvider").GIF_PROVIDER });
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: constants2.GIFS_SEARCH, query: null, oldFormErrors: true, rejectWithError: true };
  let obj4 = { search_type: constants3.GIF, load_id: GIFPickerViewStore.getAnalyticsID(), num_modifiers: Object.keys(obj).length, modifiers: obj, gif_provider: require("GifProvider").GIF_PROVIDER };
  request.query = { q, media_format: GIFPickerViewStore.getSelectedFormat(), locale: LocaleStore.locale, limit };
  value = HTTP.get(request);
  value.then((body) => {
    body = body.body;
    const obj = { startTime, limit };
    startTime = obj.startTime;
    const merged = Object.assign(obj, Object.assign({ startTime: 0 }));
    const obj4 = {};
    const analyticsID = GIFPickerViewStore.getAnalyticsID();
    const merged1 = Object.assign({ offset: 0, limit: null, totalResults: body.length });
    const merged2 = Object.assign(merged);
    obj4.results = body.length;
    const result = GIFPickerUtils.calculateAnalyticsMetadata(analyticsID, closure_1, obj4);
    if (null == startTime) {
      let obj5 = {};
    } else {
      obj5 = { load_duration_ms: null };
      const _Date = Date;
      obj5.load_duration_ms = Date.now() - startTime;
    }
    const obj2 = { offset: 0, limit: null, totalResults: body.length };
    const obj7 = {};
    const merged3 = Object.assign(result);
    const merged4 = Object.assign(obj5);
    obj7.gif_provider = GifProvider.GIF_PROVIDER;
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.SEARCH_RESULT_VIEWED, obj7);
    DispatcherDefault.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", query, items: body });
    const obj9 = { type: "GIF_PICKER_QUERY_SUCCESS", query, items: body };
  }, () => DispatcherDefault.dispatch({ type: "GIF_PICKER_QUERY_FAILURE", query }));
}
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, Endpoints: closure_7, SearchTypes: closure_8, GIFPickerResultTypes: closure_9 } = Constants);
const UserSettingsConstants = fn(1084);
({ MAX_FAVORITE_GIFS_SIZE: c10, UserSettingsDelay: closure_11 } = UserSettingsConstants);
const re12 = /-/g;
let closure_14 = apply.debounce(doSearchRequest, 250);
const re15 = /\.(webp|avif|gif)(\?|$)/i;
const size = fn(2);
let result = size.fileFinishedImporting("actions/GIFPickerActionCreators.tsx");

export const trackSearchStart = function trackSearchStart(arg0) {
  if (null != arg0) {
    const obj2 = {};
    obj2[arg0] = 1;
    let obj = obj2;
  } else {
    obj = {};
  }
  const obj3 = AppAnalyticsUtilsDefault;
  obj3.trackWithMetadata(constants.SEARCH_STARTED, { search_type: constants3.GIF, load_id: GIFPickerViewStore.getAnalyticsID(), num_modifiers: Object.keys(obj).length, modifiers: obj, gif_provider: GifProvider.GIF_PROVIDER });
};
export const trackSearchResultViewed = function trackSearchResultViewed(totalResults, TRENDING_GIFS) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const startTime = obj.startTime;
  const merged = Object.assign(obj, Object.assign({ startTime: 0 }));
  const obj4 = {};
  const analyticsID = GIFPickerViewStore.getAnalyticsID();
  const merged1 = Object.assign({ offset: 0, limit: null, totalResults: totalResults.length });
  const merged2 = Object.assign(merged);
  obj4.results = totalResults.length;
  const result = GIFPickerUtils.calculateAnalyticsMetadata(analyticsID, TRENDING_GIFS, obj4);
  if (null == startTime) {
    let obj5 = {};
  } else {
    obj5 = { load_duration_ms: null };
    const _Date = Date;
    obj5.load_duration_ms = Date.now() - startTime;
  }
  const obj2 = { offset: 0, limit: null, totalResults: totalResults.length };
  const obj7 = {};
  const merged3 = Object.assign(result);
  const merged4 = Object.assign(obj5);
  obj7.gif_provider = GifProvider.GIF_PROVIDER;
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.SEARCH_RESULT_VIEWED, obj7);
};
export const search = function search(query, arg1, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if ("" === query) {
    DispatcherDefault.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
  } else {
    const obj2 = { type: "GIF_PICKER_QUERY", query };
    DispatcherDefault.dispatch(obj2);
    if (flag) {
      doSearchRequest(query, arg1, limit);
    } else {
      closure_14(query, arg1, limit);
    }
  }
};
export const fetchSuggestions = function fetchSuggestions(resultQuery) {
  _require = resultQuery;
  let tmp = "" !== resultQuery;
  if (tmp) {
    tmp = null != resultQuery;
  }
  if (tmp) {
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: constants2.GIFS_SUGGEST, query: null, oldFormErrors: true, rejectWithError: true };
    const obj = { q: resultQuery, limit: 5, locale: LocaleStore.locale };
    request.query = obj;
    value = HTTP.get(request);
    value.then((body) => {
      DispatcherDefault.dispatch({ type: "GIF_PICKER_SUGGESTIONS_SUCCESS", query, items: body.body });
    });
  }
};
export const resetSearch = function resetSearch() {
  DispatcherDefault.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
};
export const trackSelectGIF = function trackSelectGIF(arg0) {
  ({ query, gifId } = arg0);
  ({ type, index, offset, limit, results, totalResults } = arg0);
  const result = GIFPickerUtils.calculateAnalyticsMetadata(GIFPickerViewStore.getAnalyticsID(), type, { offset, limit, results, totalResults });
  const obj3 = {};
  const merged = Object.assign(result);
  obj3.index_num = index;
  obj3.source_object = "GIF Picker";
  obj3.query = query;
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.SEARCH_RESULT_SELECTED, obj3);
  if (null != gifId) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: constants2.GIFS_SELECT, body: null, oldFormErrors: true, rejectWithError: true };
    const obj4 = { id: gifId, q: query };
    request.body = obj4;
    HTTP.post(request);
  }
};
export const initializeSearch = function initializeSearch() {
  const obj = replaced(1255);
  replaced = replaced(1255).v4().replace(closure_12, "");
  const str = replaced(1255).v4();
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.SEARCH_OPENED, { search_type: constants3.GIF, load_id: replaced });
  const obj3 = { search_type: constants3.GIF, load_id: replaced };
  DispatcherDefault.wait(() => {
    DispatcherDefault.dispatch({ type: "GIF_PICKER_INITIALIZE", analyticsID: replaced });
  });
};
export const fetchTrending = function fetchTrending() {
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants2.GIFS_TRENDING, query: { locale: LocaleStore.locale, media_format: GIFPickerViewStore.getSelectedFormat() }, oldFormErrors: true, rejectWithError: true };
  value = HTTP.get(request);
  value.then((body) => {
    ({ categories, gifs } = body.body);
    DispatcherDefault.dispatch({ type: "GIF_PICKER_TRENDING_FETCH_SUCCESS", trendingCategories: categories, trendingGIFPreview: gifs[0] });
  });
};
export const fetchTrendingGIFs = function fetchTrendingGIFs(limit) {
  _require = limit;
  importDefault = Date.now();
  const TRENDING_GIFS = constants4.TRENDING_GIFS;
  if (null != TRENDING_GIFS) {
    let obj2 = {};
    obj2[TRENDING_GIFS] = 1;
    let obj = obj2;
  } else {
    obj = {};
  }
  let obj3 = AppAnalyticsUtilsDefault;
  obj3.trackWithMetadata(constants.SEARCH_STARTED, { search_type: constants3.GIF, load_id: GIFPickerViewStore.getAnalyticsID(), num_modifiers: Object.keys(obj).length, modifiers: obj, gif_provider: require("GifProvider").GIF_PROVIDER });
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: constants2.GIFS_TRENDING_GIFS, query: null, oldFormErrors: true, rejectWithError: true };
  let obj4 = { search_type: constants3.GIF, load_id: GIFPickerViewStore.getAnalyticsID(), num_modifiers: Object.keys(obj).length, modifiers: obj, gif_provider: require("GifProvider").GIF_PROVIDER };
  request.query = { media_format: GIFPickerViewStore.getSelectedFormat(), locale: LocaleStore.locale, limit };
  value = HTTP.get(request);
  value.then((body) => {
    body = body.body;
    const obj = { startTime, limit };
    startTime = obj.startTime;
    const merged = Object.assign(obj, Object.assign({ startTime: 0 }));
    const obj4 = {};
    const analyticsID = GIFPickerViewStore.getAnalyticsID();
    const merged1 = Object.assign({ offset: 0, limit: null, totalResults: body.length });
    const merged2 = Object.assign(merged);
    obj4.results = body.length;
    const result = GIFPickerUtils.calculateAnalyticsMetadata(analyticsID, constants4.TRENDING_GIFS, obj4);
    if (null == startTime) {
      let obj5 = {};
    } else {
      obj5 = { load_duration_ms: null };
      const _Date = Date;
      obj5.load_duration_ms = Date.now() - startTime;
    }
    const obj2 = { offset: 0, limit: null, totalResults: body.length };
    const obj7 = {};
    const merged3 = Object.assign(result);
    const merged4 = Object.assign(obj5);
    obj7.gif_provider = GifProvider.GIF_PROVIDER;
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.SEARCH_RESULT_VIEWED, obj7);
    DispatcherDefault.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", items: body });
  }, () => {
    startTime(dependencyMap[8]).dispatch({ type: "GIF_PICKER_QUERY_FAILURE" });
  });
};
export const gifUrlKey = function gifUrlKey(uri) {
  let str1 = uri;
  const toURLSafeResult = URLUtilsDefault.toURLSafe(uri);
  let tmp4 = uri;
  if (null != toURLSafeResult) {
    if (obj2.isAttachmentPathUrl(toURLSafeResult)) {
      const tmp5Result = AttachmentUrlUtilsAll;
      str1 = AttachmentUrlUtilsAll.removeSignedUrlParameters(toURLSafeResult).toString();
      const str = AttachmentUrlUtilsAll.removeSignedUrlParameters(toURLSafeResult);
    }
    tmp4 = str1;
    obj2 = AttachmentUrlUtilsAll;
  }
  return tmp4;
};
export const addFavoriteGIF = function addFavoriteGIF(size) {
  _require = size;
  const FrecencyUserSettingsActionCreators = require("UserSettingsProtoActionCreators").FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", async (gifs) => {
    const values = Object.values(gifs.gifs);
    let num = apply.max(values.map((order) => order.order));
    if (num == null) {
      num = 0;
    }
    if (obj2.test(size.src)) {
      if (null != size.gifSrc) {
        if ("" !== size.gifSrc) {
          const toURLSafeResult = URLUtilsDefault.toURLSafe(size.src);
          let tmp9 = null != toURLSafeResult;
          if (tmp9) {
            let result = AttachmentUrlUtilsAll.isExternalProxiedAttachmentUrl(toURLSafeResult);
            if (!result) {
              result = AttachmentUrlUtilsAll.isAttachmentPathUrl(toURLSafeResult);
              const tmp10Result = AttachmentUrlUtilsAll;
            }
            tmp9 = result;
          }
          let obj9 = src;
          if (tmp9) {
            obj9 = src;
            if (re15.test(src)) {
              const str2 = URLUtilsDefault.toURLSafe(src);
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
              const tmpResult7 = URLUtilsDefault;
            }
          }
          let combined = obj9;
          if (obj9.startsWith("//")) {
            const _HermesInternal = HermesInternal;
            combined = "https:" + obj9;
          }
          if (re15.test(combined)) {
            let format = frecency_user_settings.GIFType.IMAGE;
          } else {
            format = size.format;
          }
          let url = size.url;
          const tmpResult = URLUtilsDefault;
          const toURLSafeResult1 = URLUtilsDefault.toURLSafe(url);
          let tmp23 = url;
          if (null != toURLSafeResult1) {
            if (obj12.isAttachmentPathUrl(toURLSafeResult1)) {
              const tmp24Result = AttachmentUrlUtilsAll;
              url = AttachmentUrlUtilsAll.removeSignedUrlParameters(toURLSafeResult1).toString();
              const str9 = AttachmentUrlUtilsAll.removeSignedUrlParameters(toURLSafeResult1);
            }
            tmp23 = url;
            obj12 = AttachmentUrlUtilsAll;
          }
          const obj3 = {};
          const merged = Object.assign(size);
          obj3.src = combined;
          obj3.format = format;
          obj3.order = num + 1;
          gifs.gifs[tmp23] = obj3;
          const FavoriteGIFs = frecency_user_settings.FavoriteGIFs;
          if (FavoriteGIFs.toBinary(gifs).length > closure_2_10) {
            const obj5 = { title: null, body: null };
            const intl = util.intl;
            obj5.title = intl.string(util.t["+XYXtZ"]);
            const intl2 = util.intl;
            obj5.body = intl2.string(util.t.YSDH9n);
            AlertActionCreatorsDefault.show(obj5);
            return false;
          } else {
            const sizeResult = apply.size(gifs.gifs);
            if (sizeResult > 2) {
              gifs.hideTooltip = true;
            }
            const tmpResult10 = apply;
            const obj6 = { total_num_favorited: sizeResult };
            AnalyticsUtilsDefault.track(constants.GIF_FAVORITED, obj6);
            const tmpResult11 = AnalyticsUtilsDefault;
          }
          const tmpResult8 = URLUtilsDefault;
        }
        src = size.gifSrc;
      }
    }
    obj2 = /\.(mp4|webm)(\?|$)/i;
    const toURLSafeResult2 = URLUtilsDefault.toURLSafe(size.src);
    let tmp5 = null != toURLSafeResult2;
    if (tmp5) {
      let result3 = AttachmentUrlUtilsAll.isExternalProxiedAttachmentUrl(toURLSafeResult2);
      if (!result3) {
        result3 = AttachmentUrlUtilsAll.isAttachmentPathUrl(toURLSafeResult2);
        const tmp6Result = AttachmentUrlUtilsAll;
      }
      tmp5 = result3;
    }
    src = size.src;
    const tmpResult12 = URLUtilsDefault;
  }, constants5.INFREQUENT_USER_ACTION);
};
export const removeFavoriteGIF = function removeFavoriteGIF(uri) {
  _require = uri;
  const FrecencyUserSettingsActionCreators = require("UserSettingsProtoActionCreators").FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", async (gifs) => {
    if (closure_0 in gifs.gifs) {
      delete tmp[tmp2];
    } else {
      const toURLSafeResult = URLUtilsDefault.toURLSafe(closure_0);
      if (null != toURLSafeResult) {
        if (obj2.isAttachmentPathUrl(toURLSafeResult)) {
          const tmp10Result = AttachmentUrlUtilsAll;
          const str1 = AttachmentUrlUtilsAll.removeSignedUrlParameters(toURLSafeResult).toString();
          const str = AttachmentUrlUtilsAll.removeSignedUrlParameters(toURLSafeResult);
        }
        obj2 = AttachmentUrlUtilsAll;
      }
      delete tmp[tmp3];
    }
    const obj3 = { total_num_favorited: null };
    const obj4 = AnalyticsUtilsDefault;
    obj3.total_num_favorited = apply.size(gifs.gifs);
    obj4.track(constants.GIF_UNFAVORITED, obj3);
  }, constants5.INFREQUENT_USER_ACTION);
};
export const fetchTrendingSearchTerms = function fetchTrendingSearchTerms() {
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants2.GIFS_TRENDING_SEARCH, query: { limit: 5, locale: LocaleStore.locale }, oldFormErrors: true, rejectWithError: true };
  value = HTTP.get(request);
  value.then((items) => {
    DispatcherDefault.dispatch({ type: "GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS", items: items.body });
  });
};