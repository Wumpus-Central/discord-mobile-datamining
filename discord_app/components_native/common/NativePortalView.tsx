// === Module 8267: NativePortalView ===

// Module 8267 (NativePortalView)
import PortalViewNativeComponentDefault from "PortalViewNativeComponent" /* 8268 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ NativeModules, requireNativeComponent, NativeEventEmitter } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ base: { overflow: "hidden" } });
const PlatformUtils = fn(1115);
if (PlatformUtils.isAndroid()) {
  let importDefaultResult = PortalViewNativeComponentDefault;
} else {
  importDefaultResult = requireNativeComponent("DCDPortalView");
}
const metroRequire = importDefaultResult;
const MediaPlayerManager = NativeModules.MediaPlayerManager;
const DCDPortalViewManager = NativeModules.DCDPortalViewManager;
const nativeEventEmitter = new NativeEventEmitter(MediaPlayerManager);
const set = new Set();
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/NativePortalView.tsx");

export default noop.memo((paused) => {
  paused = paused.paused;
  const muted = paused.muted;
  const onLoad = paused.onLoad;
  ({ style, children } = paused);
  const merged = Object.assign(paused, Object.assign({ style: 0, children: 0, paused: 0, muted: 0, onLoad: 0 }));
  if (null != children) {
    const _Error = Error;
    const error = new Error("The <NativePortalView> component cannot contain children.");
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
        loopPlayback.setLoopPlayback(portal.portal, false);
        if (obj.isAndroid()) {
          muted(onLoad[6]).unregisterView(tmp.portal);
          const obj2 = muted(onLoad[6]);
        } else {
          DCDPortalViewManager.unregisterView(tmp.portal);
        }
        set.add(portal.portal);
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
    const obj = {};
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
      const effect = noop.useEffect(() => {
        closure_0 = closure_1_9.addListener("MediaPlayerProgress", (duration) => {
          duration = duration.duration;
          let tmp = duration.id === closure_0;
          if (tmp) {
            tmp = duration > 0;
          }
          if (tmp) {
            closure_1(duration.time, duration);
          }
        });
        closure_1 = closure_1_9.addListener("MediaPlayerDownloadProgress", (id) => {
          let tmp2 = id.id === closure_0;
          if (tmp2) {
            tmp2 = tmp > 0;
          }
          if (tmp2) {
            tmp2 = null != closure_1_3;
          }
          if (tmp2) {
            closure_1_3(id.progressPercent);
          }
        });
        closure_2 = closure_1_9.addListener("MediaPlayerPause", (id) => {
          if (id.id === closure_0) {
            closure_2(tmp);
          }
        });
        return () => {
          closure_0.remove();
          closure_1.remove();
          closure_2.remove();
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