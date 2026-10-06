// === Module 11500: MediaChannelActionCreators ===

// Module 11500 (MediaChannelActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_1, closure_2, closure_3, urls;

let obj = function _fetchMediaPostEmbed() {
  obj = _asyncToGenerator(async (threadId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let body;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              body = undefined;
              const obj5 = { type: "MEDIA_POST_EMBED_FETCH", threadId };
              const obj9 = DispatcherDefault;
              obj9.dispatch(obj5);
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const get = HTTP.get;
              c5 = 2;
              c6 = 1;
              const obj6 = { url: Endpoints.MEDIA_POST_RESHARE_GET_PREVIEW(threadId), rejectWithError: true };
              const obj7 = { value: get(obj6), done: false };
              return obj7;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              const obj8 = { type: "MEDIA_POST_EMBED_FETCH_FAILURE", threadId };
              const obj4 = closure_130_1(closure_130_2[2]);
              obj4.dispatch(obj8);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              body = value.body;
              const obj11 = { type: "MEDIA_POST_EMBED_FETCH_SUCCESS", threadId, mediaPostEmbed: body };
              obj = closure_130_1(closure_130_2[2]);
              obj.dispatch(obj11);
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp19) {
          closure_3 = tmp19;
          if (0 === c4) {
            c6 = 3;
            throw tmp19;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _unfurlEmbedUrl() {
  obj = _asyncToGenerator(async (urls) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async function(arg0) {
      let obj4;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.UNFURL_EMBED_URLS, body: obj4, rejectWithError: false };
              c5 = 2;
              c6 = 1;
              obj4 = { urls };
              const obj5 = { value: HTTP.post(request), done: false };
              return obj5;
            }
          } else if (1 === c5) {
            c4 = 0;
            urls = closure_3;
            const self = this;
            const self2 = this;
            const aPIError = new closure_130_0(closure_130_2[4]).APIError(urls);
            throw aPIError;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            c4 = 0;
            c6 = 3;
            return { value: value.body, done: true };
          }
        } catch (tmp14) {
          closure_3 = tmp14;
          if (0 === c4) {
            c6 = 3;
            throw tmp14;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/media_channel/MediaChannelActionCreators.tsx");

export const dismissMediaPostSharePrompt = function dismissMediaPostSharePrompt(threadId) {
  obj = DispatcherDefault;
  const obj2 = { type: "DISMISS_MEDIA_POST_SHARE_PROMPT", threadId };
  obj.dispatch(obj2);
};
export const fetchMediaPostEmbed = function fetchMediaPostEmbed() {
  return obj(...arguments);
};
export const unfurlEmbedUrl = function unfurlEmbedUrl() {
  return obj(...arguments);
};