// === Module 8997: MediaPlayerManager ===

// Module 8997 (MediaPlayerManager)
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 8998 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import obj132 from "obj132" /* 500 */;

const require = fn;
let c3 = importAllResult;
({ NativeModules, requireNativeComponent, NativeEventEmitter } = get_ActivityIndicator);
let closure_5 = createCacheKey.createStyles({ base: { overflow: "hidden" } });
if (obj132.isAndroid()) {
  let importDefaultResult = __INTERNAL_VIEW_CONFIGDefault;
} else {
  importDefaultResult = requireNativeComponent("DCDPortalView");
}
const MediaPlayerManager = NativeModules.MediaPlayerManager;
const DCDPortalViewManager = NativeModules.DCDPortalViewManager;
const nativeEventEmitter = new NativeEventEmitter(MediaPlayerManager);
const set = new Set();
const result = obj132.fileFinishedImporting("components_native/common/NativePortalView.tsx");

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
        MediaPlayerManager.toggle(tmp.portal, !paused);
      }
    }, items);
    const items1 = [merged.portal, muted];
    const layoutEffect1 = merged.useLayoutEffect(() => {
      if (null != merged.portal) {
        MediaPlayerManager.setMuted(tmp.portal, muted);
      }
    }, items1);
    const items2 = [onLoad, merged.portal];
    const layoutEffect2 = merged.useLayoutEffect(() => {
      if (!obj.isAndroid()) {
        if (onLoad != null) {
          onLoad();
        }
      }
      MediaPlayerManager.setLoopPlayback(merged.portal, true);
      return () => {
        closure_1_7.setLoopPlayback(portal.portal, false);
        if (obj.isAndroid()) {
          muted(onLoad[6]).unregisterView(portal.portal);
          const obj2 = muted(onLoad[6]);
        } else {
          closure_1_8.unregisterView(portal.portal);
        }
        closure_1_10.add(portal.portal);
        obj = paused(onLoad[4]);
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
    paused(onLoad[4]);
    let obj = {};
    const merged1 = Object.assign(merged);
    const items4 = [tmp2.base, style];
    obj.style = items4;
    if (isAndroidResult) {
      obj.onPortalViewLoaded = callback;
      let tmp17Result = <closure_6 {...obj} />;
    } else {
      tmp17Result = <closure_6 {...obj} />;
    }
    return tmp17Result;
  }
});
export function createPortalControls(portal) {
  closure_0 = portal;
  return {
    seek(arg0) {
      MediaPlayerManager.changeProgress(closure_0, arg0);
    },
    pause(arg0) {
      MediaPlayerManager.toggle(closure_0, !arg0);
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