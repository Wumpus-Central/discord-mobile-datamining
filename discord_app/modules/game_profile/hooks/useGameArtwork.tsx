// discord_app/modules/game_profile/hooks/useGameArtwork.tsx
import c from "../../../../_runtime/00576_c.js";
import getGameMediaRefURL from "../../games/getGameMediaRefURL.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
function getGameArtworkSource(media) {
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameArtwork.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useGameArtwork(arg0, arg1) {
      const cResult = c.c(16);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {};
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      [first1, dependencyMap] = noop.useState(first);
      if (cResult[1] === arg0) {
        if (cResult[2] === arg1) {
          if (cResult[3] === first1) {
            let tmp5 = cResult[4];
          }
          closure_2 = tmp5;
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            class G {
              constructor(arg0, arg1) {
                closure_0 = arg0;
                closure_1 = arg1;
                if (null != arg0) {
                  tmp = closure_1;
                  tmp2 = closure_1((arg0) => {
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
                return;
              }
            }
            cResult[5] = G;
          } else {
            class G {
              constructor(arg0, arg1) {
                closure_0 = arg0;
                closure_1 = arg1;
                if (null != arg0) {
                  tmp = closure_1;
                  tmp2 = closure_1((arg0) => {
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
                return;
              }
            }
          }
          noop = G;
          if (cResult[6] !== tmp5) {
            class A {
              constructor() {
                tmp = closure_3(closure_2, "loaded");
                return;
              }
            }
            cResult[6] = tmp5;
            cResult[7] = A;
          } else {
            class A {
              constructor() {
                tmp = closure_3(closure_2, "loaded");
                return;
              }
            }
          }
          if (cResult[8] !== tmp5) {
            class S {
              constructor() {
                tmp = closure_3(closure_2, "failed");
                return;
              }
            }
            cResult[8] = tmp5;
            cResult[9] = S;
          } else {
            class S {
              constructor() {
                tmp = closure_3(closure_2, "failed");
                return;
              }
            }
          }
          let tmp12 = null != tmp5;
          if (tmp12) {
            class S {
              constructor() {
                tmp = closure_3(closure_2, "failed");
                return;
              }
            }
            tmp12 = "loaded" !== first1[tmp5];
          }
          if (cResult[10] === S) {
            class S {
              constructor() {
                tmp = closure_3(closure_2, "failed");
                return;
              }
            }
          }
          const obj3 = {
            imageUrl: tmp5,
            isCover: null != tmp5 && tmp5 === arg0,
            isLoading: tmp12,
            handleLoad: A,
            handleError: S,
          };
          cResult[10] = S;
          cResult[11] = A;
          cResult[12] = tmp5;
          cResult[13] = null != tmp5 && tmp5 === arg0;
          cResult[14] = tmp12;
          cResult[15] = obj3;
        }
      }
      const items = [arg0, arg1];
      const found = items.find((item) => {
        let tmp = null != item;
        if (tmp) {
          tmp = "failed" !== first1[item];
        }
        return tmp;
      });
      if (found == null) {
        class S {
          constructor() {
            tmp = closure_3(closure_2, "failed");
            return;
          }
        }
      }
      cResult[1] = arg0;
      cResult[2] = arg1;
      cResult[3] = first1;
      cResult[4] = found;
      tmp5 = found;
    }
  : function useGameArtwork(arg0, arg1) {
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
export { getGameArtworkSource };
export const hasGameArtwork = function hasGameArtwork(media) {
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
};
