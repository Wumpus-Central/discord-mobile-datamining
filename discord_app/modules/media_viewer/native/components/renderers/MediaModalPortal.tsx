// === Module 8842: MediaModalPortal ===

// Module 8842 (MediaModalPortal)
import PortalViewNativeComponentDefault from "PortalViewNativeComponent" /* 8843 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ requireNativeComponent, NativeEventEmitter, NativeModules } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let closure_5 = createStyles.createStyles({ base: { overflow: "hidden" } });
const PlatformUtils = fn(1375);
if (PlatformUtils.isAndroid()) {
  let importDefaultResult = PortalViewNativeComponentDefault;
} else {
  importDefaultResult = requireNativeComponent("DCDPortalView");
}
const metroRequire = importDefaultResult;
const MediaPlayerManager = NativeModules.MediaPlayerManager;
const nativeEventEmitter = new NativeEventEmitter(MediaPlayerManager);
const set = new Set();
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalPortal.tsx");

export default noop.memo(function MediaModalPortal(paused) {
  paused = paused.paused;
  const muted = paused.muted;
  ({ onLoad: dependencyMap, portal } = paused);
  ({ style, pointerEvents } = paused);
  const tmp2 = muted(7132)(() => {
    let tmp;
    if (dependencyMap != null) {
      tmp = dependencyMap();
    }
    return tmp;
  });
  closure_4 = tmp2;
  const items = [portal, paused];
  const layoutEffect = portal.useLayoutEffect(() => {
    if (null != portal) {
      MediaPlayerManager.toggle(tmp, !paused);
    }
  }, items);
  const items1 = [portal, muted];
  const layoutEffect1 = portal.useLayoutEffect(() => {
    if (null != portal) {
      MediaPlayerManager.setMuted(tmp, muted);
    }
  }, items1);
  const items2 = [tmp2, portal];
  const layoutEffect2 = portal.useLayoutEffect(() => {
    if (null != portal) {
      if (!obj.isAndroid()) {
        closure_4();
      }
      MediaPlayerManager.setLoopPlayback(tmp, true);
      return () => {
        loopPlayback.setLoopPlayback(portal, false);
        muted(8844).unregisterView(portal);
        set.add(portal);
      };
    }
  }, items2);
  const items3 = [tmp2, portal];
  const obj = { portal, pointerEvents, style: null, onPortalViewLoaded: null };
  const items4 = [closure_5().base, style];
  obj.style = items4;
  const callback = portal.useCallback((nativeEvent) => {
    if (portal === nativeEvent.nativeEvent.portal) {
      closure_4();
    }
  }, items3);
  let tmp = closure_5();
  const tmp7 = closure_4;
  let tmp9;
  if (obj2.isAndroid()) {
    tmp9 = callback;
  }
  obj.onPortalViewLoaded = tmp9;
  return tmp7(closure_6, obj);
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
        closure_0 = closure_1_8.addListener("MediaPlayerProgress", (duration) => {
          duration = duration.duration;
          let tmp = duration.id === closure_0;
          if (tmp) {
            tmp = duration > 0;
          }
          if (tmp) {
            closure_1(duration.time, duration);
          }
        });
        closure_1 = closure_1_8.addListener("MediaPlayerDownloadProgress", (id) => {
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
        closure_2 = closure_1_8.addListener("MediaPlayerPause", (id) => {
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
export function markPortalAlive(portal) {
  set.delete(portal);
}
export function isPortalExpired(portal) {
  return set.has(portal);
}