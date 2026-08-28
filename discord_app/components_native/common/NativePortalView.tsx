// === Module 8517: MediaPlayerManager ===

// Module 8517 (MediaPlayerManager)
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 8518 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;
import set from "set" /* 500 */;

const require = arg1;
let c3 = importAllResult;
({ NativeModules, requireNativeComponent, NativeEventEmitter } = get_ActivityIndicator);
let closure_5 = createCacheKey.createStyles({ base: { overflow: "hidden" } });
if (set.isAndroid()) {
  let importDefaultResult = __INTERNAL_VIEW_CONFIGDefault;
} else {
  importDefaultResult = requireNativeComponent("DCDPortalView");
}
const MediaPlayerManager = NativeModules.MediaPlayerManager;
const DCDPortalViewManager = NativeModules.DCDPortalViewManager;
const nativeEventEmitter = new NativeEventEmitter(MediaPlayerManager);
set = new Set();
const result = set.fileFinishedImporting("components_native/common/NativePortalView.tsx");

export default importAllResult.memo((paused) => {
  paused = paused.paused;
  const muted = paused.muted;
  const onLoad = paused.onLoad;
  ({ style, children } = paused);
  const merged = Object.assign(paused, Object.create(null));
  if (null != children) {
    const _Error = Error;
    error = new Error("The <NativePortalView> component cannot contain children.");
    throw error;
  } else {
    const items = [merged.portal, paused];
    const layoutEffect = merged.useLayoutEffect(() => {
      if (null != merged.portal) {
        closure_1_7.toggle(tmp.portal, !paused);
      }
    }, items);
    const items1 = [merged.portal, muted];
    const layoutEffect1 = merged.useLayoutEffect(() => {
      if (null != merged.portal) {
        closure_1_7.setMuted(tmp.portal, muted);
      }
    }, items1);
    const items2 = [onLoad, merged.portal];
    const layoutEffect2 = merged.useLayoutEffect(() => {
      if (!obj.isAndroid()) {
        if (onLoad != null) {
          onLoad();
        }
      }
      closure_1_7.setLoopPlayback(merged.portal, true);
      return () => {
        closure_1_7.setLoopPlayback(portal.portal, false);
        if (obj.isAndroid()) {
          closure_1_1(closure_1_2[6]).unregisterView(tmp.portal);
          const obj2 = closure_1_1(closure_1_2[6]);
        } else {
          closure_1_8.unregisterView(tmp.portal);
        }
        closure_1_10.add(portal.portal);
      };
    }, items2);
    const items3 = [onLoad, merged.portal];
    const callback = merged.useCallback((nativeEvent) => {
      if (merged.portal === nativeEvent.nativeEvent.portal) {
        if (onLoad != null) {
          tmp();
        }
      }
    }, items3);
    let obj = paused(onLoad[4]);
    obj = {};
    const merged1 = Object.assign(merged);
    const items4 = [tmp2.base, style];
    obj.style = items4;
    if (isAndroidResult) {
      obj.onPortalViewLoaded = callback;
      let tmp17Result = tmp17(tmp18, obj);
    } else {
      tmp17Result = tmp17(tmp18, obj);
    }
    return tmp17Result;
  }
});
export function createPortalControls(portal) {
  closure_0 = portal;
  return {
    seek(arg0) {
      closure_1_7.changeProgress(closure_0, arg0);
    },
    pause(arg0) {
      closure_1_7.toggle(closure_0, !arg0);
    },
    useSubscribe(arg0, arg1, arg2) {
      closure_1 = arg0;
      closure_2 = arg1;
      closure_3 = arg2;
      const items = [closure_0, arg1, arg0, arg2];
      const effect = closure_1_3.useEffect(() => {
        closure_0 = closure_1_9.addListener("MediaPlayerProgress", (duration) => {
          duration = duration.duration;
          let tmp = duration.id === closure_0;
          if (tmp) {
            tmp = duration > 0;
          }
          if (tmp) {
            lib(duration.time, duration);
          }
        });
        closure_1 = closure_1_9.addListener("MediaPlayerDownloadProgress", (id) => {
          let tmp2 = id.id === closure_0;
          if (tmp2) {
            tmp2 = tmp > 0;
          }
          if (tmp2) {
            tmp2 = null != callback;
          }
          if (tmp2) {
            callback(id.progressPercent);
          }
        });
        closure_2 = closure_1_9.addListener("MediaPlayerPause", (id) => {
          if (id.id === closure_0) {
            lib2(tmp);
          }
        });
        return () => {
          closure_0.remove();
          lib.remove();
          lib2.remove();
        };
      }, items);
    }
  };
}
export const markPortalAlive = function markPortalAlive(portal) {
  set.delete(portal);
};
export const isPortalExpired = function isPortalExpired(portal) {
  return set.has(portal);
};