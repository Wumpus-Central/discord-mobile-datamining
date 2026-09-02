// === Module 11327: map ===

// Module 11327 (map)
import getAvatarURL from "getAvatarURL" /* 1430 */;
import getSizedImageProxyURL from "getSizedImageProxyURL" /* 4512 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import { Image } from "get ActivityIndicator" /* 17 */;

require = arg1;
let closure_5 = { width: 166, height: 289 };
let closure_6 = { width: 289, height: 166 };
let map = new Map();
let result = require("set").fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaSize.tsx");

export const MEDIA_FALLBACK_WIDTH = 1080;
export const MEDIA_FALLBACK_HEIGHT = 1920;
export const getMediaTileSize = function getMediaTileSize(value) {
  if (null != value) {
    if (value.width > value.height) {
      let tmp = closure_6;
    }
    return tmp;
  }
  tmp = closure_5;
};
export const getAppStoreOverlayCarouselImageUrl = function getAppStoreOverlayCarouselImageUrl(posterUrl) {
  let format = null;
  if (getAvatarURL.SUPPORTS_WEBP) {
    format = "webp";
  }
  return getSizedImageProxyURL.getSizedImageAssetURL(posterUrl, { size: 289, keepAspectRatio: true, format });
};
export const getMediaSizeFromLoadEvent = function getMediaSizeFromLoadEvent(nativeEvent) {
  nativeEvent = nativeEvent.nativeEvent;
  const source = nativeEvent.source;
  let width;
  if (source != null) {
    width = source.width;
  }
  if (width == null) {
    width = nativeEvent.width;
  }
  const source2 = nativeEvent.source;
  let height;
  if (source2 != null) {
    height = source2.height;
  }
  if (height == null) {
    height = nativeEvent.height;
  }
  let tmp3 = null;
  if (null != width) {
    tmp3 = null;
    if (null != height) {
      tmp3 = null;
      if (width > 0) {
        tmp3 = null;
        if (height > 0) {
          const obj = { width: null, height: null };
          obj[0] = width;
          obj[1] = height;
          tmp3 = obj;
        }
      }
    }
  }
  return tmp3;
};
export const useAppStoreOverlayMediaSizes = function useAppStoreOverlayMediaSizes(memo) {
  const first = callback(React.useState(memo), 1)[0];
  [tmp3, dependencyMap] = callback(React.useState(map), 2);
  const items = [first];
  const recordMediaSize = React.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    const callback = arg1;
    callback((get) => {
      const size = closure_1;
      const size2 = get.get(closure_0);
      let width;
      if (size2 != null) {
        width = size2.width;
      }
      if (width !== size.width) {
        const _Map = Map;
        map = new Map(get);
        let result = map.set(closure_0, size);
      } else {
        let height;
        if (size2 != null) {
          height = size2.height;
        }
        result = get;
      }
      return result;
    });
  }, []);
  const effect = React.useEffect(() => {
    c0 = false;
    const item = c0.forEach((arg0) => {
      closure_0 = arg0;
      let size = closure_2_4.getSize(arg0, (arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        if (!closure_0) {
          closure_2_1((get) => {
            const size = { width: closure_0, height: closure_1 };
            const size2 = get.get(closure_0);
            let width;
            if (size2 != null) {
              width = size2.width;
            }
            if (width !== size.width) {
              const _Map = Map;
              map = new Map(get);
              let result = map.set(closure_0, size);
            } else {
              let height;
              if (size2 != null) {
                height = size2.height;
              }
              result = get;
            }
            return result;
          });
        }
      }, () => {

      });
    });
    return () => {
      c0 = true;
    };
  }, items);
  return { sizes, recordMediaSize };
};