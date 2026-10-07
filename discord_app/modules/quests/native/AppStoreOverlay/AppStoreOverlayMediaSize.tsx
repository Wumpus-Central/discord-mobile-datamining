// === Module 10942: AppStoreOverlayMediaSize ===

// Module 10942 (AppStoreOverlayMediaSize)
import AvatarUtils from "AvatarUtils" /* 1402 */;
import ImageProxyUtils from "ImageProxyUtils" /* 2022 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
let closure_5 = { width: 166, height: 289 };
let closure_6 = { width: 289, height: 166 };
let map = new Map();
const ReactCompilerGating = fn(558);
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
export const getAppStoreOverlayCarouselImageUrl = function getAppStoreOverlayCarouselImageUrl(url) {
  let format = null;
  if (AvatarUtils.SUPPORTS_WEBP) {
    format = "webp";
  }
  return ImageProxyUtils.getSizedImageAssetURL(url, { size: 289, keepAspectRatio: true, format });
};
export const getMediaSizeFromLoadEvent = function getMediaSizeFromLoadEvent(nativeEvent) {
  nativeEvent = nativeEvent.nativeEvent;
  let source = nativeEvent;
  if ("source" in nativeEvent) {
    source = nativeEvent.source;
  }
  ({ width, height } = source);
  let tmp = null;
  if (null != width) {
    tmp = null;
    if (null != height) {
      tmp = null;
      if (width > 0) {
        tmp = null;
        if (height > 0) {
          const size = { width, height };
          tmp = size;
        }
      }
    }
  }
  return tmp;
};
export const useAppStoreOverlayMediaSizes = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = first(576).c(6);
  first = _slicedToArray(noop.useState(arg0), 1)[0];
  const obj = first(576);
  [tmp4, dependencyMap] = noop.useState(map);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(arg0, arg1) {
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
    };
    cResult[0] = fn;
    let first1 = fn;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== first) {
    const fn2 = function f() {
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
    };
    const items = [first];
    cResult[1] = first;
    cResult[2] = fn2;
    cResult[3] = items;
    let tmp7 = items;
    let tmp6 = fn2;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const effect = noop.useEffect(tmp6, tmp7);
  if (cResult[4] !== tmp4) {
    const obj3 = { sizes: tmp4, recordMediaSize: first1 };
    cResult[4] = tmp4;
    cResult[5] = obj3;
    let tmp9 = obj3;
  } else {
    tmp9 = cResult[5];
  }
  return tmp9;
}) : ((arg0) => {
  const first = _slicedToArray(noop.useState(arg0), 1)[0];
  [tmp3, dependencyMap] = noop.useState(map);
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
});