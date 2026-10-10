// === Module 8395: MediaModalPortal ===

// Module 8395 (MediaModalPortal)
import PortalViewNativeComponentDefault from "PortalViewNativeComponent" /* 8396 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ requireNativeComponent, NativeEventEmitter, NativeModules } = get_ActivityIndicator);
let jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_5 = createStyles.createStyles({ base: { overflow: "hidden" } });
const PlatformUtils = fn(1382);
if (PlatformUtils.isAndroid()) {
  let importDefaultResult = PortalViewNativeComponentDefault;
} else {
  importDefaultResult = requireNativeComponent("DCDPortalView");
}
const metroRequire = importDefaultResult;
const MediaPlayerManager = NativeModules.MediaPlayerManager;
const nativeEventEmitter = new NativeEventEmitter(MediaPlayerManager);
const set = new Set();
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSubscribe(arg0, arg1, arg2, arg3) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  noop = arg3;
  const cResult = require("c").c(6);
  if (cResult[0] === arg3) {
    if (cResult[1] === arg2) {
      if (cResult[2] === arg1) {
        if (cResult[3] === arg0) {
          let tmp2 = cResult[4];
          let tmp3 = cResult[5];
        }
        const effect = noop.useEffect(tmp2, tmp3);
      }
    }
  }
  const fn = function u() {
    closure_0 = nativeEventEmitter.addListener("MediaPlayerProgress", (duration) => {
      duration = duration.duration;
      let tmp = duration.id === closure_0;
      if (tmp) {
        tmp = duration > 0;
      }
      if (tmp) {
        closure_1(duration.time, duration);
      }
    });
    closure_1 = nativeEventEmitter.addListener("MediaPlayerDownloadProgress", (id) => {
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
    closure_2 = nativeEventEmitter.addListener("MediaPlayerPause", (id) => {
      if (id.id === closure_0) {
        closure_2(tmp);
      }
    });
    return () => {
      closure_0.remove();
      closure_1.remove();
      closure_2.remove();
    };
  };
  const items = [arg0, arg2, arg1, arg3];
  cResult[0] = arg3;
  cResult[1] = arg2;
  cResult[2] = arg1;
  cResult[3] = arg0;
  cResult[4] = fn;
  cResult[5] = items;
  tmp3 = items;
  tmp2 = fn;
}) : (function useSubscribe(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  noop = arg3;
  const items = [arg0, arg2, arg1, arg3];
  const effect = noop.useEffect(() => {
    closure_0 = nativeEventEmitter.addListener("MediaPlayerProgress", (duration) => {
      duration = duration.duration;
      let tmp = duration.id === closure_0;
      if (tmp) {
        tmp = duration > 0;
      }
      if (tmp) {
        closure_1(duration.time, duration);
      }
    });
    closure_1 = nativeEventEmitter.addListener("MediaPlayerDownloadProgress", (id) => {
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
    closure_2 = nativeEventEmitter.addListener("MediaPlayerPause", (id) => {
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
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalPortal.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaModalPortal(muted) {
  const cResult = paused(onLoad[7]).c(27);
  ({ style, paused } = muted);
  muted = muted.muted;
  onLoad = muted.onLoad;
  ({ pointerEvents, portal } = muted);
  const tmp4 = closure_5();
  if (cResult[0] !== onLoad) {
    const fn = function n() {
      let tmp;
      if (onLoad != null) {
        tmp = onLoad();
      }
      return tmp;
    };
    cResult[0] = onLoad;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const tmp6 = muted(onLoad[8])(tmp5);
  jsx = tmp6;
  if (cResult[2] === paused) {
    if (cResult[3] === portal) {
      let tmp7 = cResult[4];
      let tmp8 = cResult[5];
    }
    const layoutEffect = portal.useLayoutEffect(tmp7, tmp8);
    if (cResult[6] === muted) {
      if (cResult[7] === portal) {
        let tmp10 = cResult[8];
        let tmp11 = cResult[9];
      }
      const layoutEffect1 = obj2.useLayoutEffect(tmp10, tmp11);
      if (cResult[10] === tmp6) {
        if (cResult[11] === portal) {
          let tmp13 = cResult[12];
          let tmp14 = cResult[13];
        }
        const layoutEffect2 = obj2.useLayoutEffect(tmp13, tmp14);
        if (cResult[14] === tmp6) {
          if (cResult[15] === portal) {
            let tmp17 = cResult[16];
          }
          if (cResult[17] === style) {
            if (cResult[18] === tmp4.base) {
              let tmp18 = cResult[19];
            }
            if (cResult[20] !== tmp17) {
              let tmp20;
              if (tmpResult.isAndroid()) {
                tmp20 = tmp17;
              }
              class V {
                constructor(arg0) {
                  if (portal === muted.nativeEvent.portal) {
                    tmp = closure_4;
                    tmp2 = closure_4();
                  }
                  return;
                }
              }
              class A {
                constructor() {
                  if (null != portal) {
                    tmp2 = MediaPlayerManager;
                    tmp3 = muted;
                    setMutedResult = MediaPlayerManager.setMuted(tmp, muted);
                  }
                  return;
                }
              }
              cResult[21] = tmp20;
              let tmp19 = tmp20;
              tmpResult = paused(tmp2[4]);
            } else {
              tmp19 = cResult[21];
            }
            if (cResult[22] === pointerEvents) {
              if (cResult[23] === portal) {
                if (cResult[24] === tmp19) {
                  if (cResult[25] === tmp18) {
                    let tmp21 = cResult[26];
                  }
                  return tmp21;
                }
              }
            }
            class V {
              constructor(arg0) {
                if (portal === muted.nativeEvent.portal) {
                  tmp = closure_4;
                  tmp2 = closure_4();
                }
                return;
              }
            }
            class A {
              constructor() {
                if (null != portal) {
                  tmp2 = MediaPlayerManager;
                  tmp3 = muted;
                  setMutedResult = MediaPlayerManager.setMuted(tmp, muted);
                }
                return;
              }
            }
            const obj3 = { portal, pointerEvents, style: tmp18, onPortalViewLoaded: tmp19 };
            const tmp22 = <closure_6 portal={portal} pointerEvents={pointerEvents} style={tmp18} onPortalViewLoaded={tmp19} />;
            cResult[22] = pointerEvents;
            cResult[23] = portal;
            cResult[24] = tmp19;
            cResult[25] = tmp18;
            cResult[26] = tmp22;
            tmp21 = tmp22;
          }
          const items = [, ];
          class V {
            constructor(arg0) {
              if (portal === muted.nativeEvent.portal) {
                tmp = closure_4;
                tmp2 = closure_4();
              }
              return;
            }
          }
          class A {
            constructor() {
              if (null != portal) {
                tmp2 = MediaPlayerManager;
                tmp3 = muted;
                setMutedResult = MediaPlayerManager.setMuted(tmp, muted);
              }
              return;
            }
          }
          cResult[17] = style;
          cResult[18] = tmp4.base;
          cResult[19] = items;
          tmp18 = items;
        }
        class V {
          constructor(arg0) {
            if (portal === muted.nativeEvent.portal) {
              tmp = closure_4;
              tmp2 = closure_4();
            }
            return;
          }
        }
        class A {
          constructor() {
            if (null != portal) {
              tmp2 = MediaPlayerManager;
              tmp3 = muted;
              setMutedResult = MediaPlayerManager.setMuted(tmp, muted);
            }
            return;
          }
        }
        cResult[14] = tmp6;
        cResult[15] = portal;
        cResult[16] = V;
        tmp17 = V;
      }
      class S {
        constructor() {
          if (null != portal) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[4]);
            if (!obj.isAndroid()) {
              tmp4 = closure_4;
              tmp5 = closure_4();
            }
            tmp6 = MediaPlayerManager;
            flag = true;
            setLoopPlaybackResult = MediaPlayerManager.setLoopPlayback(tmp, true);
            return () => {
              loopPlayback.setLoopPlayback(portal, false);
              muted(onLoad[9]).unregisterView(portal);
              set.add(portal);
            };
          } else {
            return;
          }
        }
      }
      class A {
        constructor() {
          if (null != portal) {
            tmp2 = MediaPlayerManager;
            tmp3 = muted;
            setMutedResult = MediaPlayerManager.setMuted(tmp, muted);
          }
          return;
        }
      }
      tmp15[0] = tmp6;
      tmp15[1] = portal;
      cResult[10] = tmp6;
      cResult[11] = portal;
      cResult[12] = S;
      cResult[13] = tmp15;
      tmp14 = tmp15;
      tmp13 = S;
    }
    class A {
      constructor() {
        if (null != portal) {
          tmp2 = MediaPlayerManager;
          tmp3 = muted;
          setMutedResult = MediaPlayerManager.setMuted(tmp, muted);
        }
        return;
      }
    }
    const items1 = [portal, muted];
    cResult[6] = muted;
    cResult[7] = portal;
    cResult[8] = A;
    cResult[9] = items1;
    tmp11 = items1;
    tmp10 = A;
  }
  const fn2 = function w() {
    if (null != portal) {
      MediaPlayerManager.toggle(tmp, !paused);
    }
  };
  const items2 = [portal, paused];
  cResult[2] = paused;
  cResult[3] = portal;
  cResult[4] = fn2;
  cResult[5] = items2;
  tmp8 = items2;
  tmp7 = fn2;
}) : (function MediaModalPortal(paused) {
  paused = paused.paused;
  const muted = paused.muted;
  ({ onLoad: dependencyMap, portal } = paused);
  ({ style, pointerEvents } = paused);
  const tmp2 = muted(6646)(() => {
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
        muted(8397).unregisterView(portal);
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
}));
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
      closure_10(closure_0, arg0, arg1, arg2);
    }
  };
}
export const markPortalAlive = function markPortalAlive(portal) {
  set.delete(portal);
};
export const isPortalExpired = function isPortalExpired(portal) {
  return set.has(portal);
};