// === Module 11507: AppStoreOverlayMediaSize ===

// Module 11507 (AppStoreOverlayMediaSize)
import AvatarUtils from "AvatarUtils" /* 1396 */;
import ImageProxyUtils from "ImageProxyUtils" /* 1929 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
let closure_5 = { width: 166, height: 289 };
let closure_6 = { width: 289, height: 166 };
let map = new Map();
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaSize.tsx");

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
  if (AvatarUtils.SUPPORTS_WEBP) {
    format = "webp";
  }
  return ImageProxyUtils.getSizedImageAssetURL(posterUrl, { size: 289, keepAspectRatio: true, format });
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
          const size = { width, height };
          tmp3 = size;
        }
      }
    }
  }
  return tmp3;
};
export const useAppStoreOverlayMediaSizes = function useAppStoreOverlayMediaSizes(memo) {
  const first = _slicedToArray(noop.useState(memo), 1)[0];
  [tmp3, dependencyMap] = _slicedToArray(noop.useState(map), 2);
  const items = [first];
  const recordMediaSize = noop.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    dependencyMap((get) => {
      size = closure_1;
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
  const effect = noop.useEffect(() => {
    c0 = false;
    const item = c0.forEach((item) => {
      closure_0 = item;
      size = size.getSize(item, (width, height) => {
        if (!width) {
          closure_2_1((get) => {
            size = { width, height };
            const size2 = get.get(width);
            width = undefined;
            if (size2 != null) {
              width = size2.width;
            }
            if (width !== size.width) {
              const _Map = Map;
              map = new Map(get);
              let result = map.set(width, size);
            } else {
              height = undefined;
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