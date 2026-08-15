// discord_app/actions/GIFPickerActionCreators.tsx
import _getSystemLocale from "_getSystemLocale";
import getFormatFromUrl from "getFormatFromUrl";
import ME from "ME";
import MAX_FAVORITES from "MAX_FAVORITES";
import importDefaultResult from "shouldRefreshAttachmentUrl";
import { sendRequest } from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { dispatcher } from "../Dispatcher.tsx";
import { collectGuildAnalyticsMetadata } from "../modules/app_analytics/AppAnalyticsUtils.tsx";
import { GIF_PROVIDER } from "../modules/gif_picker/GifProvider.tsx";
import { shouldRefreshAttachmentUrl } from "../modules/messages/SignedAttachmentLinkUtils.tsx";
import { updateUserGuildSettings } from "../modules/user_settings/UserSettingsProtoActionCreators.tsx";
import { isKlipyProvider } from "../utils/GIFPickerUtils.tsx";
import { isDiscordProxiedAssetUrl } from "../utils/URLUtils.tsx";

let c10;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function doSearchRequest(q, arg1, limit) {
  const _require = q;
  const importDefault = arg1;
  const dependencyMap = limit;
  let _getSystemLocale = Date.now();
  if (null != arg1) {
    let obj = {};
    obj[arg1] = 1;
  } else {
    obj = {};
  }
  let obj2 = collectGuildAnalyticsMetadata;
  obj = { search_type: constants3.GIF, load_id: store.getAnalyticsID(), num_modifiers: Object.keys(obj).length, modifiers: obj, gif_provider: _GIF_PROVIDER.GIF_PROVIDER };
  obj2.trackWithMetadata(constants.SEARCH_STARTED, obj);
  const HTTP = _sendRequest.HTTP;
  let obj1 = { url: constants2.GIFS_SEARCH, query: null, oldFormErrors: true, rejectWithError: true };
  obj2 = { q, media_format: store.getSelectedFormat(), locale: _getSystemLocale.locale, limit };
  obj1[1] = obj2;
  const value = HTTP.get(obj1);
  value.then((body) => {
    body = body.body;
    let obj = { startTime: _getSystemLocale, limit };
    const startTime = obj.startTime;
    const merged = Object.assign(obj, Object.create(null));
    obj = { offset: 0, limit: null, totalResults: body.length };
    let obj2 = q(limit[6]);
    obj = {};
    const analyticsID = outer1_4.getAnalyticsID();
    const merged1 = Object.assign(obj);
    const merged2 = Object.assign(merged);
    obj.results = body.length;
    const result = obj2.calculateAnalyticsMetadata(analyticsID, callback, obj);
    if (null == startTime) {
      let obj1 = {};
    } else {
      obj1 = { load_duration_ms: null };
      const _Date = Date;
      obj1[0] = Date.now() - startTime;
    }
    obj2 = {};
    const merged3 = Object.assign(result);
    const merged4 = Object.assign(obj1);
    obj2.gif_provider = q(limit[5]).GIF_PROVIDER;
    callback(limit[4]).trackWithMetadata(outer1_5.SEARCH_RESULT_VIEWED, obj2);
    const obj6 = callback(limit[4]);
    const tmp2 = q;
    callback(limit[8]).dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", query: q, items: body });
  }, () => {
    let obj = callback(limit[8]);
    obj = { type: "GIF_PICKER_QUERY_FAILURE", query: closure_0 };
    return obj.dispatch(obj);
  });
}
({ AnalyticEvents: c5, Endpoints: closure_6, SearchTypes: error, GIFPickerResultTypes: metroImportAll } = ME);
({ MAX_FAVORITE_GIFS_SIZE: c9, UserSettingsDelay: c10 } = MAX_FAVORITES);
const re11 = /-/g;
let closure_13 = require("shouldRefreshAttachmentUrl").debounce(doSearchRequest, 250);
const re14 = /\.(webp|avif|gif)(\?|$)/i;
let result = require("ME").fileFinishedImporting("actions/GIFPickerActionCreators.tsx");

export const trackSearchStart = function trackSearchStart(arg0) {
  if (null != arg0) {
    let obj = {};
    obj[arg0] = 1;
  } else {
    obj = {};
  }
  obj = { search_type: constants3.GIF, load_id: store.getAnalyticsID(), num_modifiers: Object.keys(obj).length, modifiers: obj, gif_provider: GIF_PROVIDER.GIF_PROVIDER };
  collectGuildAnalyticsMetadata.trackWithMetadata(constants.SEARCH_STARTED, obj);
};
export const trackSearchResultViewed = function trackSearchResultViewed(totalResults, TRENDING_GIFS) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const startTime = obj.startTime;
  const merged = Object.assign(obj, Object.create(null));
  obj = { offset: 0, limit: null, totalResults: totalResults.length };
  let obj2 = isKlipyProvider;
  obj = {};
  const analyticsID = store.getAnalyticsID();
  const merged1 = Object.assign(obj);
  const merged2 = Object.assign(merged);
  obj.results = totalResults.length;
  const result = obj2.calculateAnalyticsMetadata(analyticsID, TRENDING_GIFS, obj);
  if (null == startTime) {
    let obj1 = {};
  } else {
    obj1 = { load_duration_ms: null };
    const _Date = Date;
    obj1[0] = Date.now() - startTime;
  }
  obj2 = {};
  const merged3 = Object.assign(result);
  const merged4 = Object.assign(obj1);
  obj2.gif_provider = GIF_PROVIDER.GIF_PROVIDER;
  collectGuildAnalyticsMetadata.trackWithMetadata(constants.SEARCH_RESULT_VIEWED, obj2);
};
export const search = function search(q, arg1, arg2, limit) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if ("" === q) {
    dispatcher.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
    const obj3 = dispatcher;
  } else {
    let obj = dispatcher;
    obj = { type: "GIF_PICKER_QUERY", query: null };
    obj[1] = q;
    obj.dispatch(obj);
    if (flag) {
      doSearchRequest(q, arg1, limit);
    } else {
      callback(q, arg1, limit);
    }
  }
};
export const fetchSuggestions = function fetchSuggestions(arg0) {
  const _require = arg0;
  let tmp = "" !== arg0;
  if (tmp) {
    tmp = null != arg0;
  }
  if (tmp) {
    const HTTP = _sendRequest.HTTP;
    let obj = { url: null, query: null, oldFormErrors: true, rejectWithError: true };
    obj[0] = constants2.GIFS_SUGGEST;
    obj = { q: null, limit: 5, locale: null };
    obj[0] = arg0;
    obj[2] = _getSystemLocale.locale;
    obj[1] = obj;
    const value = HTTP.get(obj);
    value.then((body) => {
      let obj = outer1_1(outer1_2[8]);
      obj = { type: "GIF_PICKER_SUGGESTIONS_SUCCESS", query: closure_0, items: body.body };
      obj.dispatch(obj);
    });
  }
};
export const resetSearch = function resetSearch() {
  dispatcher.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
};
export const trackSelectGIF = function trackSelectGIF(arg0) {
  let gifId;
  let index;
  let limit;
  let offset;
  let query;
  let results;
  let totalResults;
  let type;
  ({ query, gifId } = arg0);
  ({ type, index, offset, limit, results, totalResults } = arg0);
  let obj = isKlipyProvider;
  const result = obj.calculateAnalyticsMetadata(store.getAnalyticsID(), type, { offset, limit, results, totalResults });
  let obj1 = collectGuildAnalyticsMetadata;
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
  collectGuildAnalyticsMetadata.trackWithMetadata(constants.SEARCH_OPENED, obj);
  const obj2 = collectGuildAnalyticsMetadata;
  dispatcher.wait(() => {
    let obj = outer1_1(outer1_2[8]);
    obj = { type: "GIF_PICKER_INITIALIZE", analyticsID: replaced };
    obj.dispatch(obj);
  });
};
export const fetchTrending = function fetchTrending() {
  const HTTP = sendRequest.HTTP;
  let obj = { url: constants2.GIFS_TRENDING, query: null, oldFormErrors: true, rejectWithError: true };
  obj = { locale: _getSystemLocale.locale, media_format: store.getSelectedFormat() };
  obj[1] = obj;
  const value = HTTP.get(obj);
  value.then((body) => {
    let categories;
    let gifs;
    ({ categories, gifs } = body.body);
    let obj = callback(table[8]);
    obj = { type: "GIF_PICKER_TRENDING_FETCH_SUCCESS", trendingCategories: categories, trendingGIFPreview: gifs[0] };
    obj.dispatch(obj);
  });
};
export const fetchTrendingGIFs = function fetchTrendingGIFs(closure_10) {
  const _require = closure_10;
  const importDefault = Date.now();
  const TRENDING_GIFS = constants4.TRENDING_GIFS;
  if (null != TRENDING_GIFS) {
    let obj = {};
    obj[TRENDING_GIFS] = 1;
  } else {
    obj = {};
  }
  let obj2 = collectGuildAnalyticsMetadata;
  obj = { search_type: constants3.GIF, load_id: store.getAnalyticsID(), num_modifiers: Object.keys(obj).length, modifiers: obj, gif_provider: _GIF_PROVIDER.GIF_PROVIDER };
  obj2.trackWithMetadata(constants.SEARCH_STARTED, obj);
  const HTTP = _sendRequest.HTTP;
  let obj1 = { url: constants2.GIFS_TRENDING_GIFS, query: null, oldFormErrors: true, rejectWithError: true };
  obj2 = { media_format: store.getSelectedFormat(), locale: _getSystemLocale.locale, limit: closure_10 };
  obj1[1] = obj2;
  const value = HTTP.get(obj1);
  value.then((body) => {
    body = body.body;
    let obj = { startTime: callback2, limit: callback };
    const startTime = obj.startTime;
    const merged = Object.assign(obj, Object.create(null));
    obj = { offset: 0, limit: null, totalResults: body.length };
    let obj2 = callback(outer1_2[6]);
    obj = {};
    const analyticsID = outer1_4.getAnalyticsID();
    const merged1 = Object.assign(obj);
    const merged2 = Object.assign(merged);
    obj.results = body.length;
    const result = obj2.calculateAnalyticsMetadata(analyticsID, outer1_8.TRENDING_GIFS, obj);
    if (null == startTime) {
      let obj1 = {};
    } else {
      obj1 = { load_duration_ms: null };
      const _Date = Date;
      obj1[0] = Date.now() - startTime;
    }
    obj2 = {};
    const merged3 = Object.assign(result);
    const merged4 = Object.assign(obj1);
    obj2.gif_provider = callback(outer1_2[5]).GIF_PROVIDER;
    callback2(outer1_2[4]).trackWithMetadata(outer1_5.SEARCH_RESULT_VIEWED, obj2);
    const obj6 = callback2(outer1_2[4]);
    const tmp2 = callback;
    callback2(outer1_2[8]).dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", items: body });
  }, () => {
    callback2(table[8]).dispatch({ type: "GIF_PICKER_QUERY_FAILURE" });
  });
};
export const gifUrlKey = function gifUrlKey(uri) {
  let str = uri;
  const toURLSafeResult = isDiscordProxiedAssetUrl.toURLSafe(uri);
  let tmp4 = uri;
  if (null != toURLSafeResult) {
    if (obj2.isAttachmentUrl(toURLSafeResult)) {
      str = tmp5(9085).removeSignedUrlParameters(toURLSafeResult);
      str = str.toString();
      const tmp5Result = tmp5(9085);
    }
    tmp4 = str;
    obj2 = shouldRefreshAttachmentUrl;
    tmp5 = require;
  }
  return tmp4;
};
export const addFavoriteGIF = function addFavoriteGIF(item) {
  const _require = item;
  const FrecencyUserSettingsActionCreators = _updateUserGuildSettings.FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", (gifs) => {
    let obj = outer1_1(outer1_2[9]);
    const values = Object.values(gifs.gifs);
    let num = obj.max(values.map((order) => order.order));
    if (num == null) {
      num = 0;
    }
    let obj1 = /\.(mp4|webm)(\?|$)/i;
    if (obj1.test(item.src)) {
      if (null != tmp3.gifSrc) {
        if ("" !== tmp3.gifSrc) {
          let tmpResult = tmp(tmp2[11]);
          const toURLSafeResult = tmpResult.toURLSafe(tmp3.src);
          let tmp9 = null != toURLSafeResult;
          if (tmp9) {
            let result = item(tmp2[12]).isExternalProxiedAttachmentUrl(toURLSafeResult);
            if (!result) {
              result = tmp10(tmp2[12]).isAttachmentUrl(toURLSafeResult);
              const tmp10Result = tmp10(tmp2[12]);
            }
            tmp9 = result;
            const obj7 = item(tmp2[12]);
            tmp10 = item;
          }
          let obj9 = src;
          if (tmp9) {
            obj9 = src;
            if (outer1_14.test(src)) {
              tmpResult = tmp(tmp2[11]);
              const str2 = tmpResult.toURLSafe(src);
              let tmp13 = src;
              if (null != str2) {
                const formatted = str2.pathname.toLowerCase();
                let endsWithResult1 = formatted.endsWith(".avif");
                const endsWithResult2 = formatted.endsWith(".gif");
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
                endsWithResult = formatted.endsWith(".webp");
                const str10 = str2.pathname;
              }
              obj9 = tmp13;
            }
          }
          let combined = obj9;
          if (obj9.startsWith("//")) {
            const _HermesInternal = HermesInternal;
            combined = "https:" + obj9;
          }
          if (outer1_14.test(combined)) {
            let format = item(tmp2[14]).GIFType.IMAGE;
          } else {
            format = tmp3.format;
          }
          let url = tmp3.url;
          const toURLSafeResult1 = tmp(tmp2[11]).toURLSafe(url);
          let tmp23 = url;
          if (null != toURLSafeResult1) {
            if (obj12.isAttachmentUrl(toURLSafeResult1)) {
              const tmp24Result = tmp24(tmp2[12]);
              url = tmp24(tmp2[12]).removeSignedUrlParameters(toURLSafeResult1).toString();
              const str9 = tmp24(tmp2[12]).removeSignedUrlParameters(toURLSafeResult1);
            }
            tmp23 = url;
            obj12 = item(tmp2[12]);
            tmp24 = item;
          }
          obj = {};
          const merged = Object.assign(tmp3);
          obj.src = combined;
          obj.format = format;
          obj.order = num + 1;
          gifs.gifs[tmp23] = obj;
          const FavoriteGIFs = item(tmp2[14]).FavoriteGIFs;
          if (FavoriteGIFs.toBinary(gifs).length > outer1_9) {
            obj = { title: null, body: null };
            const intl = tmp28(tmp2[16]).intl;
            obj[0] = intl.string(tmp28(tmp2[16]).t["+XYXtZ"]);
            const intl2 = tmp28(tmp2[16]).intl;
            obj[1] = intl2.string(tmp28(tmp2[16]).t.YSDH9n);
            tmp(tmp2[15]).show(obj);
            return false;
          } else {
            const sizeResult = tmp(tmp2[9]).size(gifs.gifs);
            if (sizeResult > 2) {
              gifs.hideTooltip = true;
            }
            const tmpResult3 = tmp(tmp2[9]);
            obj1 = { total_num_favorited: null };
            obj1[0] = sizeResult;
            tmp(tmp2[17]).track(outer1_5.GIF_FAVORITED, obj1);
          }
          const tmpResult1 = tmp(tmp2[11]);
        }
        src = tmp3.gifSrc;
      }
    }
    const toURLSafeResult2 = outer1_1(outer1_2[11]).toURLSafe(item.src);
    let tmp5 = null != toURLSafeResult2;
    if (tmp5) {
      let result3 = item(tmp2[12]).isExternalProxiedAttachmentUrl(toURLSafeResult2);
      if (!result3) {
        result3 = tmp6(tmp2[12]).isAttachmentUrl(toURLSafeResult2);
        const tmp6Result = tmp6(tmp2[12]);
      }
      tmp5 = result3;
      const obj4 = item(tmp2[12]);
      tmp6 = item;
    }
    src = tmp3.src;
  }, constants5.INFREQUENT_USER_ACTION);
};
export const removeFavoriteGIF = function removeFavoriteGIF(uri) {
  const _require = uri;
  const FrecencyUserSettingsActionCreators = _updateUserGuildSettings.FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", (gifs) => {
    if (uri in gifs.gifs) {
      delete tmp[tmp2];
    } else {
      let obj = outer1_1(outer1_2[11]);
      const toURLSafeResult = obj.toURLSafe(tmp4);
      if (null != toURLSafeResult) {
        let str = tmp4;
        if (obj2.isAttachmentUrl(toURLSafeResult)) {
          str = tmp10(tmp6[12]).removeSignedUrlParameters(toURLSafeResult);
          str = str.toString();
          const tmp10Result = tmp10(tmp6[12]);
        }
        obj2 = uri(tmp6[12]);
        tmp10 = uri;
      }
      delete tmp[tmp3];
    }
    obj = { total_num_favorited: null };
    const obj4 = outer1_1(outer1_2[17]);
    obj[0] = outer1_1(outer1_2[9]).size(gifs.gifs);
    obj4.track(outer1_5.GIF_UNFAVORITED, obj);
  }, constants5.INFREQUENT_USER_ACTION);
};
export const fetchTrendingSearchTerms = function fetchTrendingSearchTerms() {
  const HTTP = sendRequest.HTTP;
  obj = { url: constants2.GIFS_TRENDING_SEARCH, query: obj, oldFormErrors: true, rejectWithError: true };
  obj = { limit: 5, locale: _getSystemLocale.locale };
  const value = HTTP.get(obj);
  value.then((items) => {
    callback(table[8]).dispatch({ type: "GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS", items: items.body });
  });
};