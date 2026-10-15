// === Module 7258: frameDeepLinks ===

// Module 7258 (frameDeepLinks)
import DispatcherDefault from "Dispatcher" /* 584 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 7259 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/frames/frameDeepLinks.tsx");

export const queueFrameDeepLink = function queueFrameDeepLink(channelId, hash) {
  let substr = hash;
  if (hash.startsWith("#")) {
    substr = hash.slice(1);
  }
  if (0 !== substr.length) {
    const _Date = Date;
    const timestamp = Date.now();
    (function pruneExpired(timestamp) {
      while (tmp2 !== undefined) {
        let tmp5 = _slicedToArray(tmp3, 2);
        let first = tmp5[0];
        if (tmp5[1].expiresAt <= timestamp) {
          let deleteResult = set.delete(first);
        }
        continue;
      }
      tmp2 = set[Symbol.iterator]();
    })(timestamp);
    const obj = { hash: substr, expiresAt: timestamp + 120000 };
    const result = map.set(channelId, obj);
    const obj3 = { type: "FRAME_DEEP_LINK_QUEUED", channelId };
    DispatcherDefault.dispatch(obj3);
  }
};
export const queueFrameDeepLinkFromUrl = function queueFrameDeepLinkFromUrl(channelId, arr) {
  const index = arr.indexOf("#");
  if (-1 !== index) {
    const substr = arr.slice(index);
    let substr1 = substr;
    if (substr.startsWith("#")) {
      substr1 = substr.slice(1);
    }
    if (0 !== substr1.length) {
      const _Date = Date;
      const timestamp = Date.now();
      (function pruneExpired(timestamp) {
        while (tmp2 !== undefined) {
          let tmp5 = _slicedToArray(tmp3, 2);
          let first = tmp5[0];
          if (tmp5[1].expiresAt <= timestamp) {
            let deleteResult = set.delete(first);
          }
          continue;
        }
        tmp2 = set[Symbol.iterator]();
      })(timestamp);
      const obj = { hash: substr1, expiresAt: timestamp + 120000 };
      const result = map.set(channelId, obj);
      const obj3 = { type: "FRAME_DEEP_LINK_QUEUED", channelId };
      DispatcherDefault.dispatch(obj3);
    }
  }
};
export const getFrameDeepLinkChannelId = function getFrameDeepLinkChannelId(surface) {
  if (null == surface) {
    return null;
  } else {
    surface = surface.surface;
    if (surface.type === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL) {
      let channelId = surface.channelId;
    } else {
      channelId = null;
    }
    return channelId;
  }
};
export const takeFrameDeepLink = function takeFrameDeepLink(channelId) {
  value = map.get(channelId);
  let tmp2 = null;
  if (null != value) {
    map.delete(channelId);
    const _Date = Date;
    let hash = null;
    if (value.expiresAt > Date.now()) {
      hash = value.hash;
    }
    tmp2 = hash;
  }
  return tmp2;
};
export const clearFrameDeepLinks = function clearFrameDeepLinks() {
  map.clear();
};