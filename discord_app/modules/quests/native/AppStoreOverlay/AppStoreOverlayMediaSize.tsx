// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaSize.tsx
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import ImageProxyUtils from "../../../image_proxy/ImageProxyUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
let closure_5 = { width: 166, height: 289 };
let closure_6 = { width: 289, height: 166 };
let map = new Map();
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaSize.tsx");

export const MEDIA_FALLBACK_WIDTH = 1080;
export const MEDIA_FALLBACK_HEIGHT = 1920;
export function getMediaTileSize(value) {
  if (null != value) {
    if (value.width > value.height) {
      let tmp = closure_6;
    }
    return tmp;
  }
  tmp = closure_5;
}
export function getAppStoreOverlayCarouselImageUrl(posterUrl) {
  let format = null;
  if (AvatarUtils.SUPPORTS_WEBP) {
    format = "webp";
  }
  return ImageProxyUtils.getSizedImageAssetURL(posterUrl, { size: 289, keepAspectRatio: true, format });
}
export function getMediaSizeFromLoadEvent(nativeEvent) {
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
}
export function useAppStoreOverlayMediaSizes(memo) {
  const first = _slicedToArray(noop.useState(memo), 1)[0];
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
      size = size.getSize(
        item,
        (width, height) => {
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
        },
        () => {},
      );
    });
    return () => {
      c0 = true;
    };
  }, items);
  return { sizes, recordMediaSize };
}
