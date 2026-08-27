// === Module 11020: MEDIA_SHORT_SIDE ===

// Module 11020 (MEDIA_SHORT_SIDE)
import closure_0 from "_slicedToArray" /* 32 */;
import closure_1 from "noop" /* 19 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import set from "set" /* 2 */;

let closure_3 = { width: 166, height: 289 };
let closure_4 = { width: 289, height: 166 };
let set = new Set();
let closure_5 = { sizes: new Map(), settledUrls: set, hasTimedOut: false };
const result = set.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaSize.tsx");

export const MEDIA_SHORT_SIDE = 166;
export const MEDIA_LONG_SIDE = 289;
export const MEDIA_FALLBACK_WIDTH = 1080;
export const MEDIA_FALLBACK_HEIGHT = 1920;
export const getMediaTileSize = function getMediaTileSize(value) {
  if (null != value) {
    if (value.width > value.height) {
      let tmp = closure_4;
    }
    return tmp;
  }
  tmp = closure_3;
};
export const useRemoteMediaSizes = function useRemoteMediaSizes(memo) {
  first = first(React.useState(memo), 1)[0];
  [tmp2, closure_1] = first(React.useState(closure_5), 2);
  const items = [first];
  const effect = React.useEffect(() => {
    c0 = false;
    c1 = false;
    const item = c0.forEach((arg0) => {
      closure_0 = arg0;
      const size = closure_2_2.getSize(arg0, (width, height) => {
        const obj = { width, height };
        let tmp = closure_0;
        if (!closure_0) {
          tmp = closure_1_1;
        }
        if (!tmp) {
          closure_1_1((hasTimedOut) => {
            let addResult = hasTimedOut;
            let tmp2 = hasTimedOut;
            if (!hasTimedOut.hasTimedOut) {
              const settledUrls = addResult.settledUrls;
              tmp2 = addResult;
              if (!settledUrls.has(closure_0)) {
                const obj = {};
                const merged = Object.assign(addResult);
                if (null == c1) {
                  let sizes = addResult.sizes;
                } else {
                  const _Map = Map;
                  const map = new Map(addResult.sizes);
                  sizes = map.set(tmp3, tmp7);
                }
                obj.sizes = sizes;
                const _Set = Set;
                const set = new Set(addResult.settledUrls);
                addResult = set.add(tmp3);
                obj.settledUrls = addResult;
              }
            }
            return tmp2;
          });
        }
      }, () => {
        c1 = null;
        let tmp = closure_0;
        if (!closure_0) {
          tmp = closure_1_1;
        }
        if (!tmp) {
          closure_1_1((hasTimedOut) => {
            let addResult = hasTimedOut;
            let tmp2 = hasTimedOut;
            if (!hasTimedOut.hasTimedOut) {
              const settledUrls = addResult.settledUrls;
              tmp2 = addResult;
              if (!settledUrls.has(closure_0)) {
                const obj = {};
                const merged = Object.assign(addResult);
                if (null == c1) {
                  let sizes = addResult.sizes;
                } else {
                  const _Map = Map;
                  const map = new Map(addResult.sizes);
                  sizes = map.set(tmp3, tmp7);
                }
                obj.sizes = sizes;
                const _Set = Set;
                const set = new Set(addResult.settledUrls);
                addResult = set.add(tmp3);
                obj.settledUrls = addResult;
              }
            }
            return tmp2;
          });
        }
      });
    });
    const timeout = setTimeout(() => {
      if (!c0) {
        const callback = true;
        callback((hasTimedOut) => {
          let tmp = hasTimedOut;
          if (!hasTimedOut.hasTimedOut) {
            tmp = hasTimedOut;
            if (hasTimedOut.settledUrls.size < length.length) {
              const obj = {};
              const merged = Object.assign(hasTimedOut);
              obj.hasTimedOut = true;
              tmp = obj;
            }
          }
          return tmp;
        });
      }
    }, 2500);
    return () => {
      c0 = true;
      clearTimeout(closure_2);
    };
  }, items);
  return { sizes: tmp2.sizes, isMeasured: tmp4 };
};