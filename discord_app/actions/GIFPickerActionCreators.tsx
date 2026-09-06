// discord_app/actions/GIFPickerActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import util from "../intl/index.native.tsx";
import frecency_user_settings from "../../discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx";
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import URLUtilsDefault from "../utils/URLUtils.tsx";
import AppAnalyticsUtilsDefault from "../modules/app_analytics/AppAnalyticsUtils.tsx";
import AlertActionCreatorsDefault from "AlertActionCreators.tsx";
import AttachmentUrlUtilsAll from "../modules/messages/AttachmentUrlUtils.tsx";
import GifProvider from "../modules/gif_picker/GifProvider.tsx";
import GIFPickerUtils from "../utils/GIFPickerUtils.tsx";
import LocaleStore from "../modules/user_settings/LocaleStore.tsx";
import GIFPickerViewStore from "../stores/views/GIFPickerViewStore.tsx";
import apply from "../../_runtime/metro/00012__.js";

require = fn;
function doSearchRequest(q, arg1, limit) {
  _require = q;
  importDefault = arg1;
  dependencyMap = Date.now();
  if (null != arg1) {
    let obj = {};
    obj[arg1] = 1;
  } else {
    obj = {};
  }
  obj = {
    search_type: constants3.GIF,
    load_id: GIFPickerViewStore.getAnalyticsID(),
    num_modifiers: Object.keys(obj).length,
    modifiers: obj,
    gif_provider: require("GifProvider").GIF_PROVIDER,
  };
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.SEARCH_STARTED, obj);
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: constants2.GIFS_SEARCH, query: null, oldFormErrors: true, rejectWithError: true };
  request.query = { q, media_format: GIFPickerViewStore.getSelectedFormat(), locale: LocaleStore.locale, limit };
  value = HTTP.get(request);
  value.then(
    (body) => {
      body = body.body;
      let obj = { startTime, limit };
      startTime = obj.startTime;
      const merged = Object.assign(obj, Object.assign({ startTime: 0 }));
      obj = { offset: 0, limit: null, totalResults: body.length };
      let obj2 = GIFPickerUtils;
      obj = {};
      const analyticsID = GIFPickerViewStore.getAnalyticsID();
      const merged1 = Object.assign(obj);
      const merged2 = Object.assign(merged);
      obj.results = body.length;
      const result = obj2.calculateAnalyticsMetadata(analyticsID, closure_1, obj);
      if (null == startTime) {
        let obj1 = {};
      } else {
        obj1 = { load_duration_ms: null };
        const _Date = Date;
        obj1.load_duration_ms = Date.now() - startTime;
      }
      obj2 = {};
      const merged3 = Object.assign(result);
      const merged4 = Object.assign(obj1);
      obj2.gif_provider = GifProvider.GIF_PROVIDER;
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.SEARCH_RESULT_VIEWED, obj2);
      DispatcherDefault.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", query, items: body });
      const obj3 = { type: "GIF_PICKER_QUERY_SUCCESS", query, items: body };
    },
    () => {
      const obj = { type: "GIF_PICKER_QUERY_FAILURE", query };
      return obj.dispatch(obj);
    },
  );
}
const Constants = fn(1074);
({
  AnalyticEvents: metroRequire,
  Endpoints: closure_7,
  SearchTypes: closure_8,
  GIFPickerResultTypes: closure_9,
} = Constants);
const UserSettingsConstants = fn(1084);
({ MAX_FAVORITE_GIFS_SIZE: c10, UserSettingsDelay: closure_11 } = UserSettingsConstants);
const re12 = /-/g;
let closure_14 = apply.debounce(doSearchRequest, 250);
const re15 = /\.(webp|avif|gif)(\?|$)/i;
const size = fn(2);
let result = size.fileFinishedImporting("actions/GIFPickerActionCreators.tsx");

export const trackSearchStart = function trackSearchStart(arg0) {
  if (null != arg0) {
    let obj = {};
    obj[arg0] = 1;
  } else {
    obj = {};
  }
  obj = {
    search_type: constants3.GIF,
    load_id: GIFPickerViewStore.getAnalyticsID(),
    num_modifiers: Object.keys(obj).length,
    modifiers: obj,
    gif_provider: GifProvider.GIF_PROVIDER,
  };
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.SEARCH_STARTED, obj);
};
export const trackSearchResultViewed = function trackSearchResultViewed(totalResults, TRENDING_GIFS) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const startTime = obj.startTime;
  const merged = Object.assign(obj, Object.assign({ startTime: 0 }));
  obj = { offset: 0, limit: null, totalResults: totalResults.length };
  let obj2 = GIFPickerUtils;
  obj = {};
  const analyticsID = GIFPickerViewStore.getAnalyticsID();
  const merged1 = Object.assign(obj);
  const merged2 = Object.assign(merged);
  obj.results = totalResults.length;
  const result = obj2.calculateAnalyticsMetadata(analyticsID, TRENDING_GIFS, obj);
  if (null == startTime) {
    let obj1 = {};
  } else {
    obj1 = { load_duration_ms: null };
    const _Date = Date;
    obj1.load_duration_ms = Date.now() - startTime;
  }
  obj2 = {};
  const merged3 = Object.assign(result);
  const merged4 = Object.assign(obj1);
  obj2.gif_provider = GifProvider.GIF_PROVIDER;
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.SEARCH_RESULT_VIEWED, obj2);
};
export const search = function search(query, arg1, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if ("" === query) {
    DispatcherDefault.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
  } else {
    const obj = { type: "GIF_PICKER_QUERY", query };
    obj.dispatch(obj);
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
    let obj = { q: resultQuery, limit: 5, locale: LocaleStore.locale };
    request.query = obj;
    value = HTTP.get(request);
    value.then((body) => {
      const obj = { type: "GIF_PICKER_SUGGESTIONS_SUCCESS", query, items: body.body };
      obj.dispatch(obj);
    });
  }
};
export const resetSearch = function resetSearch() {
  DispatcherDefault.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
};
export const trackSelectGIF = function trackSelectGIF(arg0) {
  ({ query, gifId } = arg0);
  ({ type, index, offset, limit, results, totalResults } = arg0);
  let obj = GIFPickerUtils;
  const result = obj.calculateAnalyticsMetadata(GIFPickerViewStore.getAnalyticsID(), type, {
    offset,
    limit,
    results,
    totalResults,
  });
  obj = {};
  const merged = Object.assign(result);
  obj.index_num = index;
  obj.source_object = "GIF Picker";
  obj.query = query;
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.SEARCH_RESULT_SELECTED, obj);
  if (null != gifId) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: constants2.GIFS_SELECT, body: null, oldFormErrors: true, rejectWithError: true };
    obj = { id: gifId, q: query };
    request.body = obj;
    HTTP.post(request);
  }
};
export const initializeSearch = function initializeSearch() {
  let obj = replaced(1256);
  replaced = obj.v4().replace(closure_12, "");
  const str = obj.v4();
  obj = { search_type: constants3.GIF, load_id: replaced };
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.SEARCH_OPENED, obj);
  DispatcherDefault.wait(() => {
    const obj = { type: "GIF_PICKER_INITIALIZE", analyticsID: replaced };
    obj.dispatch(obj);
  });
};
export const fetchTrending = function fetchTrending() {
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: constants2.GIFS_TRENDING,
    query: { locale: LocaleStore.locale, media_format: GIFPickerViewStore.getSelectedFormat() },
    oldFormErrors: true,
    rejectWithError: true,
  };
  value = HTTP.get(request);
  value.then((body) => {
    ({ categories, gifs } = body.body);
    const obj = {
      type: "GIF_PICKER_TRENDING_FETCH_SUCCESS",
      trendingCategories: categories,
      trendingGIFPreview: gifs[0],
    };
    obj.dispatch(obj);
  });
};
export const fetchTrendingGIFs = function fetchTrendingGIFs(limit) {
  _require = limit;
  importDefault = Date.now();
  const TRENDING_GIFS = constants4.TRENDING_GIFS;
  if (null != TRENDING_GIFS) {
    let obj = {};
    obj[TRENDING_GIFS] = 1;
  } else {
    obj = {};
  }
  obj = {
    search_type: constants3.GIF,
    load_id: GIFPickerViewStore.getAnalyticsID(),
    num_modifiers: Object.keys(obj).length,
    modifiers: obj,
    gif_provider: require("GifProvider").GIF_PROVIDER,
  };
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.SEARCH_STARTED, obj);
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: constants2.GIFS_TRENDING_GIFS, query: null, oldFormErrors: true, rejectWithError: true };
  request.query = { media_format: GIFPickerViewStore.getSelectedFormat(), locale: LocaleStore.locale, limit };
  value = HTTP.get(request);
  value.then(
    (body) => {
      body = body.body;
      let obj = { startTime, limit };
      startTime = obj.startTime;
      const merged = Object.assign(obj, Object.assign({ startTime: 0 }));
      obj = { offset: 0, limit: null, totalResults: body.length };
      let obj2 = GIFPickerUtils;
      obj = {};
      const analyticsID = GIFPickerViewStore.getAnalyticsID();
      const merged1 = Object.assign(obj);
      const merged2 = Object.assign(merged);
      obj.results = body.length;
      const result = obj2.calculateAnalyticsMetadata(analyticsID, constants4.TRENDING_GIFS, obj);
      if (null == startTime) {
        let obj1 = {};
      } else {
        obj1 = { load_duration_ms: null };
        const _Date = Date;
        obj1.load_duration_ms = Date.now() - startTime;
      }
      obj2 = {};
      const merged3 = Object.assign(result);
      const merged4 = Object.assign(obj1);
      obj2.gif_provider = GifProvider.GIF_PROVIDER;
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.SEARCH_RESULT_VIEWED, obj2);
      DispatcherDefault.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", items: body });
    },
    () => {
      startTime(dependencyMap[8]).dispatch({ type: "GIF_PICKER_QUERY_FAILURE" });
    },
  );
};
export const gifUrlKey = function gifUrlKey(uri) {
  let str = uri;
  const toURLSafeResult = URLUtilsDefault.toURLSafe(uri);
  let tmp4 = uri;
  if (null != toURLSafeResult) {
    if (obj2.isAttachmentPathUrl(toURLSafeResult)) {
      str = AttachmentUrlUtilsAll.removeSignedUrlParameters(toURLSafeResult);
      str = str.toString();
      const tmp5Result = AttachmentUrlUtilsAll;
    }
    tmp4 = str;
    obj2 = AttachmentUrlUtilsAll;
  }
  return tmp4;
};
export const addFavoriteGIF = function addFavoriteGIF(size) {
  _require = size;
  const FrecencyUserSettingsActionCreators =
    require("UserSettingsProtoActionCreators").FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync(
    "favoriteGifs",
    async (gifs) => {
      let obj = apply;
      const values = Object.values(gifs.gifs);
      let num = obj.max(values.map((order) => order.order));
      if (num == null) {
        num = 0;
      }
      let obj1 = /\.(mp4|webm)(\?|$)/i;
      if (obj1.test(size.src)) {
        if (null != size.gifSrc) {
          if ("" !== size.gifSrc) {
            let tmpResult = URLUtilsDefault;
            const toURLSafeResult = tmpResult.toURLSafe(size.src);
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
                tmpResult = URLUtilsDefault;
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
            if (re15.test(combined)) {
              let format = frecency_user_settings.GIFType.IMAGE;
            } else {
              format = size.format;
            }
            let url = size.url;
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
            obj = {};
            const merged = Object.assign(size);
            obj.src = combined;
            obj.format = format;
            obj.order = num + 1;
            gifs.gifs[tmp23] = obj;
            const FavoriteGIFs = frecency_user_settings.FavoriteGIFs;
            if (FavoriteGIFs.toBinary(gifs).length > closure_2_10) {
              obj = { title: null, body: null };
              const intl = util.intl;
              obj.title = intl.string(util.t["+XYXtZ"]);
              const intl2 = util.intl;
              obj.body = intl2.string(util.t.YSDH9n);
              AlertActionCreatorsDefault.show(obj);
              return false;
            } else {
              const sizeResult = apply.size(gifs.gifs);
              if (sizeResult > 2) {
                gifs.hideTooltip = true;
              }
              const tmpResult3 = apply;
              obj1 = { total_num_favorited: sizeResult };
              AnalyticsUtilsDefault.track(constants.GIF_FAVORITED, obj1);
              const tmpResult4 = AnalyticsUtilsDefault;
            }
            const tmpResult1 = URLUtilsDefault;
          }
          src = size.gifSrc;
        }
      }
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
      const tmpResult5 = URLUtilsDefault;
    },
    constants5.INFREQUENT_USER_ACTION,
  );
};
export const removeFavoriteGIF = function removeFavoriteGIF(uri) {
  _require = uri;
  const FrecencyUserSettingsActionCreators =
    require("UserSettingsProtoActionCreators").FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync(
    "favoriteGifs",
    async (gifs) => {
      if (closure_0 in gifs.gifs) {
        delete tmp[tmp2];
      } else {
        let obj = URLUtilsDefault;
        const toURLSafeResult = obj.toURLSafe(closure_0);
        if (null != toURLSafeResult) {
          let str = closure_0;
          if (obj2.isAttachmentPathUrl(toURLSafeResult)) {
            str = AttachmentUrlUtilsAll.removeSignedUrlParameters(toURLSafeResult);
            str = str.toString();
            const tmp10Result = AttachmentUrlUtilsAll;
          }
          obj2 = AttachmentUrlUtilsAll;
        }
        delete tmp[tmp3];
      }
      obj = { total_num_favorited: null };
      const obj4 = AnalyticsUtilsDefault;
      obj.total_num_favorited = apply.size(gifs.gifs);
      obj4.track(constants.GIF_UNFAVORITED, obj);
    },
    constants5.INFREQUENT_USER_ACTION,
  );
};
export const fetchTrendingSearchTerms = function fetchTrendingSearchTerms() {
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: constants2.GIFS_TRENDING_SEARCH,
    query: { limit: 5, locale: LocaleStore.locale },
    oldFormErrors: true,
    rejectWithError: true,
  };
  value = HTTP.get(request);
  value.then((items) => {
    DispatcherDefault.dispatch({ type: "GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS", items: items.body });
  });
};
