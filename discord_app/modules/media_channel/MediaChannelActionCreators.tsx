// === Module 11875: MediaChannelActionCreators ===

// Module 11875 (MediaChannelActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_5 = async function _fetchMediaPostEmbed() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    closure_2 = tmp3;
    closure_129_0 = threadId;
    DispatcherDefault.dispatch({ type: "MEDIA_POST_EMBED_FETCH", threadId });
    const HTTP = HTTPUtils.HTTP;
    await HTTP.get({ url: Endpoints.MEDIA_POST_RESHARE_GET_PREVIEW(threadId), rejectWithError: true });
    if (1 === tmp7) {
      c4 = 0;
      closure_130_1(closure_130_2[2]).dispatch({ type: "MEDIA_POST_EMBED_FETCH_FAILURE", threadId: closure_129_0 });
      c6 = 3;
      closure_130_1(closure_130_2[2]);
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      const body = value.body;
      closure_130_1(closure_130_2[2]).dispatch({ type: "MEDIA_POST_EMBED_FETCH_SUCCESS", threadId: closure_129_0, mediaPostEmbed: body });
      c4 = 0;
      closure_130_1(closure_130_2[2]);
    }
    return value;
  })();
};
let closure_6 = async function _unfurlEmbedUrl() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.UNFURL_EMBED_URLS, body: null, rejectWithError: false };
            const obj1 = { urls };
            request.body = obj1;
            c5 = 2;
            c6 = 1;
            const obj2 = { value: HTTP.post(request), done: false };
            return obj2;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_0 = closure_3;
          const aPIError = new closure_130_0(closure_130_2[4]).APIError(closure_129_0);
          throw aPIError;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp23) {
        closure_3 = tmp23;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp23;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_channel/MediaChannelActionCreators.tsx");

export const dismissMediaPostSharePrompt = function dismissMediaPostSharePrompt(threadId) {
  const obj = { type: "DISMISS_MEDIA_POST_SHARE_PROMPT", threadId };
  obj.dispatch(obj);
};
export const fetchMediaPostEmbed = function fetchMediaPostEmbed() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const unfurlEmbedUrl = function unfurlEmbedUrl() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};