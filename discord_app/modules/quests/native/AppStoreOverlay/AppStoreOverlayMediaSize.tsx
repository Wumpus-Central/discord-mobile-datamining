// === Module 10929: AppStoreOverlayMediaSize ===

// Module 10929 (AppStoreOverlayMediaSize)
import react_native from "react-native" /* 17 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import ImageProxyUtils from "ImageProxyUtils" /* 2022 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c0, dependencyMap;

const Image = react_native.Image;
let closure_5 = { width: 166, height: 289 };
let closure_6 = { width: 289, height: 166 };
let map = new Map();
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let first1;
  let tmp4;
  let tmp6;
  let tmp7;
  let tmp9;
  const obj = first(576);
  const cResult = obj.c(6);
  first = _slicedToArray(react.useState(arg0), 1)[0];
  [tmp4, dependencyMap] = _slicedToArray(react.useState(map), 2);
  const tmp3 = _slicedToArray(react.useState(map), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(arg0, arg1) {
      let closure_0 = arg0;
      dependencyMap = arg1;
      dependencyMap(function(get) {
        let result;
        size = closure_1;
        const size2 = get.get(closure_0);
        let width;
        if (size2 != null) {
          width = size2.width;
        }
        if (width !== size.width) {
          const _Map = Map;
          const self = this;
          const self2 = this;
          map = new Map(get);
          result = map.set(closure_0, size);
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
    first1 = fn;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== first) {
    const fn2 = function f() {
      first = false;
      const item = first.forEach((item) => {
        let closure_0 = item;
        size = size.getSize(item, (width, height) => {
          let tmp = width;
          if (!tmp) {
            closure_2_1(function(get) {
              let result;
              size = { width, height };
              const size2 = get.get(width);
              const tmp = width;
              width = undefined;
              if (size2 != null) {
                width = size2.width;
              }
              if (width !== size.width) {
                const _Map = Map;
                const self = this;
                const self2 = this;
                map = new Map(get);
                result = map.set(tmp, size);
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
    tmp7 = items;
    tmp6 = fn2;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const effect = react.useEffect(tmp6, tmp7);
  if (cResult[4] !== tmp4) {
    const obj3 = { sizes: tmp4, recordMediaSize: first1 };
    cResult[4] = tmp4;
    cResult[5] = obj3;
    tmp9 = obj3;
  } else {
    tmp9 = cResult[5];
  }
  return tmp9;
}) : ((arg0) => {
  let tmp3;
  let first = _slicedToArray(react.useState(arg0), 1)[0];
  [tmp3, dependencyMap] = react.useState(map);
  const items = [first];
  _slicedToArray(react.useState(map), 2);
  const recordMediaSize = react.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    dependencyMap = arg1;
    dependencyMap(function(get) {
      let result;
      size = closure_1;
      const size2 = get.get(closure_0);
      let width;
      if (size2 != null) {
        width = size2.width;
      }
      if (width !== size.width) {
        const _Map = Map;
        const self = this;
        const self2 = this;
        map = new Map(get);
        result = map.set(closure_0, size);
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
  const effect = react.useEffect(() => {
    first = false;
    const item = first.forEach((item) => {
      let closure_0 = item;
      size = size.getSize(item, (width, height) => {
        let tmp = width;
        if (!tmp) {
          closure_2_1(function(get) {
            let result;
            size = { width, height };
            const size2 = get.get(width);
            const tmp = width;
            width = undefined;
            if (size2 != null) {
              width = size2.width;
            }
            if (width !== size.width) {
              const _Map = Map;
              const self = this;
              const self2 = this;
              map = new Map(get);
              result = map.set(tmp, size);
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
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaSize.tsx");

export const MEDIA_FALLBACK_WIDTH = 1080;
export const MEDIA_FALLBACK_HEIGHT = 1920;
export const getMediaTileSize = function getMediaTileSize(value) {
  if (null != value) {
    let tmp;
    if (value.width > value.height) {
      tmp = closure_6;
    }
    return tmp;
  }
  tmp = closure_5;
};
export const getAppStoreOverlayCarouselImageUrl = function getAppStoreOverlayCarouselImageUrl(url) {
  const getSizedImageAssetURL = ImageProxyUtils.getSizedImageAssetURL;
  let format = null;
  ImageProxyUtils;
  if (AvatarUtils.SUPPORTS_WEBP) {
    format = "webp";
  }
  return getSizedImageAssetURL(url, { size: 289, keepAspectRatio: true, format });
};
export const getMediaSizeFromLoadEvent = function getMediaSizeFromLoadEvent(nativeEvent) {
  let height;
  let width;
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
          size = { width, height };
          tmp = size;
        }
      }
    }
  }
  return tmp;
};
export const useAppStoreOverlayMediaSizes = tmp3;