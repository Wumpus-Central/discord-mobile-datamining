// === Module 7502: frameDeepLinks ===

// Module 7502 (frameDeepLinks)
import DispatcherDefault from "Dispatcher" /* 572 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5670 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/frames/frameDeepLinks.tsx");

export function queueFrameDeepLink(channelId, hash) {
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
}
export function setFrameRelaunchDeepLink(frameDeepLinkChannelId, applicationId, substr) {
  if (substr.length > 0) {
    const obj2 = { hash: substr, expiresAt: Infinity, applicationId };
    const result = map.set(frameDeepLinkChannelId, obj2);
  } else {
    value = map.get(frameDeepLinkChannelId);
    applicationId = undefined;
    if (value != null) {
      applicationId = value.applicationId;
    }
    if (applicationId === applicationId) {
      map.delete(frameDeepLinkChannelId);
    }
  }
}
export function queueFrameDeepLinkFromUrl(channelId, arr) {
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
}
export function getFrameDeepLinkChannelId(frame) {
  if (null == frame) {
    return null;
  } else {
    const surface = frame.surface;
    if (surface.type === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL) {
      let channelId = surface.channelId;
    } else {
      channelId = null;
    }
    return channelId;
  }
}
export function takeFrameDeepLink(channelId, applicationId) {
  value = map.get(channelId);
  let tmp2 = null;
  if (null != value) {
    if (null == value.applicationId) {
      map.delete(channelId);
      const _Date = Date;
      let hash = null;
      if (value.expiresAt > Date.now()) {
        hash = value.hash;
      }
      tmp2 = hash;
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
}
export function clearFrameDeepLinks() {
  map.clear();
}