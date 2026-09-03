// === Module 8137: map ===

// Module 8137 (map)
import set from "set" /* 2 */;

const map = new Map();
const re1 = /\/[^/?#]+\/\d+\/(\d+)\/[^/?#]+/;
let result = set.fileFinishedImporting("modules/messages/MediaPlaybackFacts.tsx");

export const rememberMediaPlaybackFacts = function rememberMediaPlaybackFacts(id) {
  id = id.id;
  if (null != id) {
    if ("" !== id) {
      if (map.has(id)) {
        obj2.delete(id);
      } else if (obj2.size >= 512) {
        const iter2 = obj2.keys().next();
        if (!iter2.done) {
          obj2.delete(iter2.value);
        }
        const iter = obj2.keys();
      }
      let size = id.size;
      if (size == null) {
        size = null;
      }
      const obj = { fileSize: null, fileDurationSec: null };
      obj[0] = size;
      let duration_secs = id.duration_secs;
      if (duration_secs == null) {
        duration_secs = null;
      }
      obj[1] = duration_secs;
      const result = obj2.set(id, obj);
    }
  }
};
export const mediaItemIdFromSource = function mediaItemIdFromSource(arg0) {
  if (null != arg0) {
    if ("" !== arg0) {
      const match = regex.exec(arg0);
      let tmp3;
      if (match != null) {
        tmp3 = match[1];
      }
      if (tmp3 == null) {
        tmp3 = null;
      }
      return tmp3;
    }
  }
  return null;
};
export const getMediaPlaybackFacts = function getMediaPlaybackFacts(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = null;
    if ("" !== arg0) {
      const match = regex.exec(arg0);
      let tmp4;
      if (match != null) {
        tmp4 = match[1];
      }
      if (tmp4 == null) {
        tmp4 = null;
      }
      tmp = tmp4;
    }
  }
  let tmp5 = null;
  if (null != tmp) {
    let value = map.get(tmp);
    if (value == null) {
      value = null;
    }
    tmp5 = value;
  }
  return tmp5;
};
export const resolveReportedMediaFacts = function resolveReportedMediaFacts(mediaSource, fileDurationSec) {
  let tmp = null;
  if (null != mediaSource) {
    tmp = null;
    if ("" !== mediaSource) {
      const match = regex.exec(mediaSource);
      let tmp4;
      if (match != null) {
        tmp4 = match[1];
      }
      if (tmp4 == null) {
        tmp4 = null;
      }
      tmp = tmp4;
    }
  }
  let tmp5 = null;
  if (null != tmp) {
    let value = map.get(tmp);
    if (value == null) {
      value = null;
    }
    tmp5 = value;
  }
  let tmp8 = null;
  if (null != fileDurationSec) {
    tmp8 = null;
    if (fileDurationSec > 0) {
      tmp8 = fileDurationSec;
    }
  }
  let fileSize;
  if (tmp5 != null) {
    fileSize = tmp5.fileSize;
  }
  if (fileSize == null) {
    fileSize = null;
  }
  const obj = { fileSize, fileDurationSec: null };
  fileDurationSec = undefined;
  if (tmp5 != null) {
    fileDurationSec = tmp5.fileDurationSec;
  }
  if (fileDurationSec == null) {
    fileDurationSec = tmp8;
  }
  obj[1] = fileDurationSec;
  return obj;
};
export const clearMediaPlaybackFactsForTest = function clearMediaPlaybackFactsForTest() {
  map.clear();
};