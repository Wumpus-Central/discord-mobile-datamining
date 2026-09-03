// discord_app/actions/GIFPickerActionCreators.tsx
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import isDiscordProxiedAssetUrlDefault from "../utils/URLUtils.tsx";
import collectGuildAnalyticsMetadataDefault from "../modules/app_analytics/AppAnalyticsUtils.tsx";
import isRefreshableAttachmentUrlAll from "../modules/messages/AttachmentUrlUtils.tsx";
import GIF_PROVIDER from "../modules/gif_picker/GifProvider.tsx";
import isKlipyProvider from "../utils/GIFPickerUtils.tsx";
import closure_4 from "../modules/user_settings/LocaleStore.tsx";
import closure_5 from "../stores/views/GIFPickerViewStore.tsx";
import ME from "../Constants.tsx";
import MAX_FAVORITES from "../modules/user_settings/UserSettingsConstants.tsx";
import importDefaultResult from "../../_runtime/00012_apply.js";

require = arg1;
function doSearchRequest(q, arg1, limit) {
  const _require = q;
  importDefault = arg1;
  closure_2 = limit;
  dependencyMap = Date.now();
  if (null != arg1) {
    let obj = {};
    obj[arg1] = 1;
  } else {
    obj = {};
  }
  let obj2 = collectGuildAnalyticsMetadataDefault;
  obj = {
    search_type: constants3.GIF,
    load_id: store.getAnalyticsID(),
    num_modifiers: Object.keys(obj).length,
    modifiers: obj,
    gif_provider: require("../modules/gif_picker/GifProvider.tsx").GIF_PROVIDER,
  };
  obj2.trackWithMetadata(constants.SEARCH_STARTED, obj);
  const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
  obj1 = { url: constants2.GIFS_SEARCH, query: null, oldFormErrors: true, rejectWithError: true };
  obj2 = { q, media_format: store.getSelectedFormat(), locale: closure_4.locale, limit };
  obj1[1] = obj2;
  const value = HTTP.get(obj1);
  value.then(
    (body) => {
      body = body.body;
      let obj = { startTime: dependencyMap, limit: closure_2 };
      const startTime = obj.startTime;
      const merged = Object.assign(obj, Object.create(null));
      obj = { offset: 0, limit: null, totalResults: body.length };
      let obj2 = q(10386);
      obj = {};
      const analyticsID = closure_1_5.getAnalyticsID();
      const merged1 = Object.assign(obj);
      const merged2 = Object.assign(merged);
      obj.results = body.length;
      const result = obj2.calculateAnalyticsMetadata(analyticsID, callback, obj);
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
      obj2.gif_provider = q(10385).GIF_PROVIDER;
      callback(4701).trackWithMetadata(closure_1_6.SEARCH_RESULT_VIEWED, obj2);
      const obj6 = callback(4701);
      const tmp2 = q;
      callback(706).dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", query: q, items: body });
    },
    () => {
      let obj = callback(706);
      obj = { type: "GIF_PICKER_QUERY_FAILURE", query: closure_0 };
      return obj.dispatch(obj);
    },
  );
}
({ AnalyticEvents: closure_6, Endpoints: error, SearchTypes: closure_8, GIFPickerResultTypes: c9 } = ME);
({ MAX_FAVORITE_GIFS_SIZE: c10, UserSettingsDelay: unpackModuleId } = MAX_FAVORITES);
const re12 = /-/g;
let closure_14 = importDefaultResult.debounce(doSearchRequest, 250);
const re15 = /\.(webp|avif|gif)(\?|$)/i;
let result = require("set").fileFinishedImporting("actions/GIFPickerActionCreators.tsx");

export const trackSearchStart = function trackSearchStart(arg0) {
  if (null != arg0) {
    let obj = {};
    obj[arg0] = 1;
  } else {
    obj = {};
  }
  obj = {
    search_type: constants3.GIF,
    load_id: store.getAnalyticsID(),
    num_modifiers: Object.keys(obj).length,
    modifiers: obj,
    gif_provider: GIF_PROVIDER.GIF_PROVIDER,
  };
  collectGuildAnalyticsMetadataDefault.trackWithMetadata(constants.SEARCH_STARTED, obj);
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
    const obj3 = dispatcherDefault;
  } else {
    let obj = dispatcherDefault;
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
    const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
    let obj = { url: null, query: null, oldFormErrors: true, rejectWithError: true };
    obj[0] = constants2.GIFS_SUGGEST;
    obj = { q: null, limit: 5, locale: null };
    obj[0] = arg0;
    obj[2] = closure_4.locale;
    obj[1] = obj;
    const value = HTTP.get(obj);
    value.then((body) => {
      let obj = closure_1_1(closure_1_3[8]);
      obj = { type: "GIF_PICKER_SUGGESTIONS_SUCCESS", query: closure_0, items: body.body };
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
  let obj = replaced(511);
  replaced = obj.v4().replace(closure_12, "");
  const str = obj.v4();
  obj = { search_type: constants3.GIF, load_id: replaced };
  collectGuildAnalyticsMetadataDefault.trackWithMetadata(constants.SEARCH_OPENED, obj);
  const obj2 = collectGuildAnalyticsMetadataDefault;
  dispatcherDefault.wait(() => {
    let obj = closure_1_1(closure_1_3[8]);
    obj = { type: "GIF_PICKER_INITIALIZE", analyticsID: replaced };
    obj.dispatch(obj);
  });
};
export const fetchTrending = function fetchTrending() {
  const HTTP = sendRequest.HTTP;
  let obj = { url: constants2.GIFS_TRENDING, query: null, oldFormErrors: true, rejectWithError: true };
  obj = { locale: closure_4.locale, media_format: store.getSelectedFormat() };
  obj[1] = obj;
  const value = HTTP.get(obj);
  value.then((body) => {
    ({ categories, gifs } = body.body);
    let obj = callback(table[8]);
    obj = { type: "GIF_PICKER_TRENDING_FETCH_SUCCESS", trendingCategories: categories, trendingGIFPreview: gifs[0] };
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
  obj = {
    search_type: constants3.GIF,
    load_id: store.getAnalyticsID(),
    num_modifiers: Object.keys(obj).length,
    modifiers: obj,
    gif_provider: require("../modules/gif_picker/GifProvider.tsx").GIF_PROVIDER,
  };
  obj2.trackWithMetadata(constants.SEARCH_STARTED, obj);
  const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
  obj1 = { url: constants2.GIFS_TRENDING_GIFS, query: null, oldFormErrors: true, rejectWithError: true };
  obj2 = { media_format: store.getSelectedFormat(), locale: closure_4.locale, limit: closure_10 };
  obj1[1] = obj2;
  const value = HTTP.get(obj1);
  value.then(
    (body) => {
      body = body.body;
      let obj = { startTime: callback2, limit: callback };
      const startTime = obj.startTime;
      const merged = Object.assign(obj, Object.create(null));
      obj = { offset: 0, limit: null, totalResults: body.length };
      let obj2 = callback(closure_1_3[6]);
      obj = {};
      const analyticsID = closure_1_5.getAnalyticsID();
      const merged1 = Object.assign(obj);
      const merged2 = Object.assign(merged);
      obj.results = body.length;
      const result = obj2.calculateAnalyticsMetadata(analyticsID, closure_1_9.TRENDING_GIFS, obj);
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
      obj2.gif_provider = callback(closure_1_3[5]).GIF_PROVIDER;
      callback2(closure_1_3[4]).trackWithMetadata(closure_1_6.SEARCH_RESULT_VIEWED, obj2);
      const obj6 = callback2(closure_1_3[4]);
      const tmp2 = callback;
      callback2(closure_1_3[8]).dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", items: body });
    },
    () => {
      callback2(table[8]).dispatch({ type: "GIF_PICKER_QUERY_FAILURE" });
    },
  );
};
export const gifUrlKey = function gifUrlKey(uri) {
  let str = uri;
  const toURLSafeResult = isDiscordProxiedAssetUrlDefault.toURLSafe(uri);
  let tmp4 = uri;
  if (null != toURLSafeResult) {
    if (obj2.isAttachmentPathUrl(toURLSafeResult)) {
      str = tmp5(10059).removeSignedUrlParameters(toURLSafeResult);
      str = str.toString();
      const tmp5Result = tmp5(10059);
    }
    tmp4 = str;
    obj2 = isRefreshableAttachmentUrlAll;
    tmp5 = importAll;
  }
  return tmp4;
};
export const addFavoriteGIF = function addFavoriteGIF(item) {
  const _require = item;
  const FrecencyUserSettingsActionCreators =
    require("../modules/user_settings/UserSettingsProtoActionCreators.tsx").FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync(
    "favoriteGifs",
    (gifs) => {
      let obj = closure_1_1(closure_1_3[9]);
      const values = Object.values(gifs.gifs);
      let num = obj.max(values.map((order) => order.order));
      if (num == null) {
        num = 0;
      }
      obj1 = /\.(mp4|webm)(\?|$)/i;
      if (obj1.test(item.src)) {
        if (null != tmp3.gifSrc) {
          if ("" !== tmp3.gifSrc) {
            let tmpResult = tmp(tmp2[11]);
            const toURLSafeResult = tmpResult.toURLSafe(tmp3.src);
            let tmp9 = null != toURLSafeResult;
            if (tmp9) {
              let result = closure_1_2(tmp2[12]).isExternalProxiedAttachmentUrl(toURLSafeResult);
              if (!result) {
                result = tmp10(tmp2[12]).isAttachmentPathUrl(toURLSafeResult);
                const tmp10Result = tmp10(tmp2[12]);
              }
              tmp9 = result;
              const obj7 = closure_1_2(tmp2[12]);
              tmp10 = closure_1_2;
            }
            let obj9 = src;
            if (tmp9) {
              obj9 = src;
              if (closure_1_15.test(src)) {
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
            if (closure_1_15.test(combined)) {
              let format = item(tmp2[14]).GIFType.IMAGE;
            } else {
              format = tmp3.format;
            }
            let url = tmp3.url;
            const toURLSafeResult1 = tmp(tmp2[11]).toURLSafe(url);
            let tmp23 = url;
            if (null != toURLSafeResult1) {
              if (obj12.isAttachmentPathUrl(toURLSafeResult1)) {
                const tmp24Result = tmp24(tmp2[12]);
                url = tmp24(tmp2[12]).removeSignedUrlParameters(toURLSafeResult1).toString();
                const str9 = tmp24(tmp2[12]).removeSignedUrlParameters(toURLSafeResult1);
              }
              tmp23 = url;
              obj12 = closure_1_2(tmp2[12]);
              tmp24 = closure_1_2;
            }
            obj = {};
            const merged = Object.assign(tmp3);
            obj.src = combined;
            obj.format = format;
            obj.order = num + 1;
            gifs.gifs[tmp23] = obj;
            const FavoriteGIFs = item(tmp2[14]).FavoriteGIFs;
            if (FavoriteGIFs.toBinary(gifs).length > closure_1_10) {
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
              tmp(tmp2[17]).track(closure_1_6.GIF_FAVORITED, obj1);
            }
            const tmpResult1 = tmp(tmp2[11]);
          }
          src = tmp3.gifSrc;
        }
      }
      const toURLSafeResult2 = closure_1_1(closure_1_3[11]).toURLSafe(item.src);
      let tmp5 = null != toURLSafeResult2;
      if (tmp5) {
        let result3 = closure_1_2(tmp2[12]).isExternalProxiedAttachmentUrl(toURLSafeResult2);
        if (!result3) {
          result3 = tmp6(tmp2[12]).isAttachmentPathUrl(toURLSafeResult2);
          const tmp6Result = tmp6(tmp2[12]);
        }
        tmp5 = result3;
        const obj4 = closure_1_2(tmp2[12]);
        tmp6 = closure_1_2;
      }
      src = tmp3.src;
    },
    constants5.INFREQUENT_USER_ACTION,
  );
};
export const removeFavoriteGIF = function removeFavoriteGIF(uri) {
  const _require = uri;
  const FrecencyUserSettingsActionCreators =
    require("../modules/user_settings/UserSettingsProtoActionCreators.tsx").FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync(
    "favoriteGifs",
    (gifs) => {
      if (closure_0 in gifs.gifs) {
        delete tmp[tmp2];
      } else {
        let obj = closure_1_1(closure_1_3[11]);
        const toURLSafeResult = obj.toURLSafe(tmp4);
        if (null != toURLSafeResult) {
          let str = tmp4;
          if (obj2.isAttachmentPathUrl(toURLSafeResult)) {
            str = tmp10(tmp6[12]).removeSignedUrlParameters(toURLSafeResult);
            str = str.toString();
            const tmp10Result = tmp10(tmp6[12]);
          }
          obj2 = closure_1_2(tmp6[12]);
          tmp10 = closure_1_2;
        }
        delete tmp[tmp3];
      }
      obj = { total_num_favorited: null };
      const obj4 = closure_1_1(closure_1_3[17]);
      obj[0] = closure_1_1(closure_1_3[9]).size(gifs.gifs);
      obj4.track(closure_1_6.GIF_UNFAVORITED, obj);
    },
    constants5.INFREQUENT_USER_ACTION,
  );
};
export const fetchTrendingSearchTerms = function fetchTrendingSearchTerms() {
  const HTTP = sendRequest.HTTP;
  obj = { url: constants2.GIFS_TRENDING_SEARCH, query: obj, oldFormErrors: true, rejectWithError: true };
  obj = { limit: 5, locale: closure_4.locale };
  const value = HTTP.get(obj);
  value.then((items) => {
    callback(table[8]).dispatch({ type: "GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS", items: items.body });
  });
};
