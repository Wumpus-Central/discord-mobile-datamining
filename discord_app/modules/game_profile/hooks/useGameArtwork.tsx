// === Module 9356: useGameArtwork ===

// Module 9356 (useGameArtwork)
import getGameMediaRefURL from "getGameMediaRefURL" /* 2027 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameArtwork.tsx");

export default function useGameArtwork(arg0, arg1) {
  [first, closure_1] = noop.useState({});
  const items = [arg0, arg1];
  let found = items.find((item) => {
    let tmp = null != item;
    if (tmp) {
      tmp = "failed" !== first[item];
    }
    return tmp;
  });
  if (found == null) {
    found = null;
  }
  const callback = noop.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    if (null != arg0) {
      closure_1((arg0) => {
        let tmp2 = arg0;
        if (null == arg0[closure_0]) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[tmp] = closure_1;
          tmp2 = obj;
        }
        return tmp2;
      });
    }
  }, []);
  const items1 = [found, callback];
  const items2 = [found, callback];
  const callback1 = noop.useCallback(() => {
    callback(found, "loaded");
  }, items1);
  const obj2 = { imageUrl: found, isCover: null, isLoading: null, handleLoad: null, handleError: null };
  let tmp7 = null != found;
  const callback2 = noop.useCallback(() => {
    callback(found, "failed");
  }, items2);
  if (tmp7) {
    tmp7 = found === arg0;
  }
  obj2.isCover = tmp7;
  let tmp8 = null != found;
  if (tmp8) {
    tmp8 = "loaded" !== first[found];
  }
  obj2.isLoading = tmp8;
  obj2.handleLoad = callback1;
  obj2.handleError = callback2;
  return obj2;
};
export function getGameArtworkSource(media) {
  media = media.media;
  let cover;
  if (media != null) {
    cover = media.cover;
  }
  let str = "cover";
  if (!obj.hasGameMediaRef(cover)) {
    const media2 = media.media;
    let icon;
    if (media2 != null) {
      icon = media2.icon;
    }
    let str2 = null;
    if (tmpResult.hasGameMediaRef(icon)) {
      str2 = "icon";
    }
    str = str2;
    tmpResult = getGameMediaRefURL;
  }
  return str;
}
export function hasGameArtwork(media) {
  media = media.media;
  let cover;
  if (media != null) {
    cover = media.cover;
  }
  let str = "cover";
  if (!obj.hasGameMediaRef(cover)) {
    const media2 = media.media;
    let icon;
    if (media2 != null) {
      icon = media2.icon;
    }
    let str2 = null;
    if (tmpResult.hasGameMediaRef(icon)) {
      str2 = "icon";
    }
    str = str2;
    tmpResult = getGameMediaRefURL;
  }
  return null != str;
}