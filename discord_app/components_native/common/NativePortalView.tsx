// discord_app/components_native/common/NativePortalView.tsx
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import set from "set";
import set from "jsxProd";

let NativeEventEmitter;
let NativeModules;
let requireNativeComponent;
const require = arg1;
let c3 = importAllResult;
({ NativeModules, requireNativeComponent, NativeEventEmitter } = get_ActivityIndicator);
let closure_5 = createCacheKey.createStyles({ base: { overflow: "hidden" } });
if (set.isAndroid()) {
  let importDefaultResult = require("__INTERNAL_VIEW_CONFIG");
} else {
  importDefaultResult = requireNativeComponent("DCDPortalView");
}
const MediaPlayerManager = NativeModules.MediaPlayerManager;
const DCDPortalViewManager = NativeModules.DCDPortalViewManager;
const nativeEventEmitter = new NativeEventEmitter(MediaPlayerManager);
set = new Set();
const result = set.fileFinishedImporting("components_native/common/NativePortalView.tsx");

export default importAllResult.memo((paused) => {
  let children;
  let style;
  paused = paused.paused;
  const muted = paused.muted;
  const onLoad = paused.onLoad;
  ({ style, children } = paused);
  const merged = Object.assign(paused, Object.create(null));
  if (null != children) {
    const _Error = Error;
    const error = new Error("The <NativePortalView> component cannot contain children.");
    throw error;
  } else {
    const items = [merged.portal, paused];
    const layoutEffect = merged.useLayoutEffect(() => {
      if (null != merged.portal) {
        outer1_7.toggle(tmp.portal, !paused);
      }
    }, items);
    const items1 = [merged.portal, muted];
    const layoutEffect1 = merged.useLayoutEffect(() => {
      if (null != merged.portal) {
        outer1_7.setMuted(tmp.portal, muted);
      }
    }, items1);
    const items2 = [onLoad, merged.portal];
    const layoutEffect2 = merged.useLayoutEffect(() => {
      if (!obj.isAndroid()) {
        if (onLoad != null) {
          onLoad();
        }
      }
      outer1_7.setLoopPlayback(merged.portal, true);
      return () => {
        outer1_7.setLoopPlayback(portal.portal, false);
        if (obj.isAndroid()) {
          outer1_1(outer1_2[6]).unregisterView(tmp.portal);
          const obj2 = outer1_1(outer1_2[6]);
        } else {
          outer1_8.unregisterView(tmp.portal);
        }
        outer1_10.add(portal.portal);
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
  let closure_0 = portal;
  return {
    seek(arg0) {
      outer1_7.changeProgress(closure_0, arg0);
    },
    pause(arg0) {
      outer1_7.toggle(closure_0, !arg0);
    },
    useSubscribe(arg0, arg1, arg2) {
      let closure_1 = arg0;
      let closure_2 = arg1;
      let closure_3 = arg2;
      const items = [closure_0, arg1, arg0, arg2];
      const effect = outer1_3.useEffect(() => {
        let closure_0 = outer1_9.addListener("MediaPlayerProgress", (duration) => {
          duration = duration.duration;
          let tmp = duration.id === closure_0;
          if (tmp) {
            tmp = duration > 0;
          }
          if (tmp) {
            lib(duration.time, duration);
          }
        });
        let closure_1 = outer1_9.addListener("MediaPlayerDownloadProgress", (id) => {
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
        let closure_2 = outer1_9.addListener("MediaPlayerPause", (id) => {
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