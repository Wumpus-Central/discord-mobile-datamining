// discord_app/modules/media_channel/MediaChannelActionCreators.tsx
import set from "set";
import { Endpoints } from "ME";
import { dispatcher } from "../../Dispatcher.tsx";

const require = arg1;
function _fetchMediaPostEmbed() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0, body) {
      const dependencyMap = tmp3;
      const obj1 = { type: "MEDIA_POST_EMBED_FETCH", threadId: null };
      obj1[1] = callback;
      outer1_1(outer1_2[2]).dispatch(obj1);
      let c4 = 1;
      const HTTP = callback(outer1_2[3]).HTTP;
      const obj2 = { url: null, rejectWithError: true };
      obj2[0] = c4.MEDIA_POST_RESHARE_GET_PREVIEW(callback);
      yield HTTP.get(obj2);
      if (1 === tmp7) {
        c4 = 0;
        const obj3 = body(709);
        const obj4 = { type: "MEDIA_POST_EMBED_FETCH_FAILURE", threadId: null };
        obj4[1] = callback;
        obj3.dispatch(obj4);
        let c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw body;
      } else if (arg0 !== 2) {
        body = body.body;
        const obj = body(709);
        const obj5 = { type: "MEDIA_POST_EMBED_FETCH_SUCCESS", threadId: null, mediaPostEmbed: null };
        obj5[1] = callback;
        obj5[2] = body;
        obj.dispatch(obj5);
        c4 = 0;
      }
      c4 = 0;
      return body;
    })();
  });
  const _fetchMediaPostEmbed = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _unfurlEmbedUrl() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0, body) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
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
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              const table = tmp3;
              let closure_1 = tmp7;
              let constants = 1;
              const HTTP = callback(outer1_2[3]).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: false };
              obj1[0] = constants.UNFURL_EMBED_URLS;
              const obj2 = { urls: null };
              obj2[0] = callback;
              obj1[1] = obj2;
              c5 = 2;
              c6 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (1 === tmp7) {
            constants = 0;
            callback = set;
            const aPIError = new callback(table[4]).APIError(callback);
            throw aPIError;
          } else if (arg0 === 1) {
            c6 = 3;
            throw body;
          } else if (arg0 === 2) {
            constants = 0;
            c6 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = body;
            return obj4;
          } else {
            constants = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp23) {
          set = tmp23;
          if (tmp4 === constants) {
            c6 = tmp2;
            throw tmp23;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _unfurlEmbedUrl = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("dispatcher").fileFinishedImporting("modules/media_channel/MediaChannelActionCreators.tsx");

export const dismissMediaPostSharePrompt = function dismissMediaPostSharePrompt(threadId) {
  let obj = dispatcher;
  obj = { type: "DISMISS_MEDIA_POST_SHARE_PROMPT", threadId };
  obj.dispatch(obj);
};
export const fetchMediaPostEmbed = function fetchMediaPostEmbed(threadId) {
  const self = this;
  const apply = _fetchMediaPostEmbed.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const unfurlEmbedUrl = function unfurlEmbedUrl(items) {
  const self = this;
  const apply = _unfurlEmbedUrl.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};