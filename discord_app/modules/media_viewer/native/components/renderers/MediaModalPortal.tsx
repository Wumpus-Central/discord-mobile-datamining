// === Module 7953: MediaModalPortal ===

// Module 7953 (MediaModalPortal)
import PortalViewNativeComponentDefault from "PortalViewNativeComponent" /* 7954 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = ["style", "children", "paused", "muted", "onLoad"];
get_ActivityIndicator = fn(17);
({ requireNativeComponent, NativeEventEmitter, NativeModules } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_7 = createStyles.createStyles({ base: { overflow: "hidden" } });
const PlatformUtils = fn(1369);
if (PlatformUtils.isAndroid()) {
  let importDefaultResult = PortalViewNativeComponentDefault;
} else {
  importDefaultResult = requireNativeComponent("DCDPortalView");
}
const MediaPlayerManager = NativeModules.MediaPlayerManager;
const nativeEventEmitter = new NativeEventEmitter(MediaPlayerManager);
const set = new Set();
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, arg3) => {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  closure_3 = arg3;
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
  const obj = require("c");
}) : ((arg0, arg1, arg2, arg3) => {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  closure_3 = arg3;
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

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((muted) => {
  const cResult = require("c").c(35);
  if (cResult[0] !== muted) {
    ({ style, children, paused } = muted);
    dependencyMap = paused;
    muted = muted.muted;
    _require = muted;
    const onLoad = muted.onLoad;
    importDefault = onLoad;
    const tmp12 = _objectWithoutProperties(muted, closure_3);
    closure_3 = tmp12;
    cResult[0] = muted;
    cResult[1] = children;
    cResult[2] = muted;
    cResult[3] = onLoad;
    cResult[4] = paused;
    cResult[5] = tmp12;
    cResult[6] = style;
    let tmp9 = style;
    let tmp4 = children;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    importDefault = cResult[3];
    dependencyMap = cResult[4];
    closure_3 = cResult[5];
    tmp9 = cResult[6];
  }
  const tmp13 = closure_7();
  if (null != tmp4) {
    const _Error = Error;
    const error = new Error("The <MediaModalPortal> component cannot contain children.");
    throw error;
  } else {
    if (cResult[7] === paused) {
      if (cResult[8] === tmp8.portal) {
        let tmp14 = cResult[9];
        let tmp15 = cResult[10];
      }
      const layoutEffect = noop.useLayoutEffect(tmp14, tmp15);
      if (cResult[11] === tmp5) {
        if (cResult[12] === tmp8.portal) {
          let tmp17 = cResult[13];
          let tmp18 = cResult[14];
        }
        const layoutEffect1 = noop.useLayoutEffect(tmp17, tmp18);
        if (cResult[15] === tmp6) {
          if (cResult[16] === tmp8.portal) {
            let tmp20 = cResult[17];
            let tmp21 = cResult[18];
          }
          const layoutEffect2 = noop.useLayoutEffect(tmp20, tmp21);
          if (cResult[19] === tmp6) {
            if (cResult[20] === tmp8.portal) {
              let tmp23 = cResult[21];
            }
            if (tmpResult.isAndroid()) {
              if (cResult[22] === tmp9) {
                if (cResult[23] === tmp13.base) {
                  let tmp31 = cResult[24];
                }
                if (cResult[25] === tmp23) {
                  if (cResult[26] === tmp8) {
                  }
                }
                class S {
                  constructor(arg0) {
                    if (closure_3.portal === muted.nativeEvent.portal) {
                      tmp2 = null;
                      if (closure_1 != null) {
                        tmpResult = tmp();
                      }
                    }
                    return;
                  }
                }
                const obj3 = {};
                const merged = Object.assign(tmp8);
                obj3.style = tmp31;
                obj3.onPortalViewLoaded = tmp23;
                const tmp37 = <closure_8 />;
                cResult[25] = tmp23;
                cResult[26] = tmp8;
                cResult[27] = tmp31;
                cResult[28] = tmp37;
              }
              const items = [tmp13.base, ];
              class S {
                constructor(arg0) {
                  if (closure_3.portal === muted.nativeEvent.portal) {
                    tmp2 = null;
                    if (closure_1 != null) {
                      tmpResult = tmp();
                    }
                  }
                  return;
                }
              }
              cResult[22] = tmp9;
              cResult[23] = tmp13.base;
              cResult[24] = items;
              tmp31 = items;
            } else {
              if (cResult[29] === tmp9) {
                if (cResult[30] === tmp13.base) {
                  let tmp24 = cResult[31];
                }
                if (cResult[32] === tmp8) {
                  if (cResult[33] === tmp24) {
                    let tmp25 = cResult[34];
                  }
                  return tmp25;
                }
                class S {
                  constructor(arg0) {
                    if (closure_3.portal === muted.nativeEvent.portal) {
                      tmp2 = null;
                      if (closure_1 != null) {
                        tmpResult = tmp();
                      }
                    }
                    return;
                  }
                }
                const obj4 = {};
                const merged1 = Object.assign(tmp8);
                obj4.style = tmp24;
                const tmp30 = <closure_8 />;
                cResult[32] = tmp8;
                cResult[33] = tmp24;
                cResult[34] = tmp30;
                tmp25 = tmp30;
              }
              const items1 = [tmp13.base, ];
              class S {
                constructor(arg0) {
                  if (closure_3.portal === muted.nativeEvent.portal) {
                    tmp2 = null;
                    if (closure_1 != null) {
                      tmpResult = tmp();
                    }
                  }
                  return;
                }
              }
              cResult[29] = tmp9;
              cResult[30] = tmp13.base;
              cResult[31] = items1;
              tmp24 = items1;
            }
            tmpResult = tmp(1369);
          }
          class S {
            constructor(arg0) {
              if (closure_3.portal === muted.nativeEvent.portal) {
                tmp2 = null;
                if (closure_1 != null) {
                  tmpResult = tmp();
                }
              }
              return;
            }
          }
          cResult[19] = tmp6;
          cResult[20] = tmp8.portal;
          cResult[21] = S;
          tmp23 = S;
        }
        class C {
          constructor() {
            if (null != closure_3.portal) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[5]);
              if (!obj.isAndroid()) {
                if (closure_1 != null) {
                  tmp4 = closure_1();
                }
              }
              tmp5 = MediaPlayerManager;
              flag = true;
              setLoopPlaybackResult = MediaPlayerManager.setLoopPlayback(tmp.portal, true);
              return () => {
                loopPlayback.setLoopPlayback(closure_1_3.portal, false);
                closure_1(closure_2[9]).unregisterView(closure_1_3.portal);
                set.add(closure_1_3.portal);
              };
            } else {
              return;
            }
          }
        }
        const items2 = [tmp6, tmp8.portal];
        cResult[15] = tmp6;
        cResult[16] = tmp8.portal;
        cResult[17] = C;
        cResult[18] = items2;
        tmp21 = items2;
        tmp20 = C;
      }
      const fn2 = function k() {
        if (null != closure_3.portal) {
          MediaPlayerManager.setMuted(tmp.portal, closure_0);
        }
      };
      const items3 = [tmp8.portal, tmp5];
      cResult[11] = tmp5;
      cResult[12] = tmp8.portal;
      cResult[13] = fn2;
      cResult[14] = items3;
      tmp18 = items3;
      tmp17 = fn2;
    }
    const fn = function w() {
      if (null != closure_3.portal) {
        MediaPlayerManager.toggle(tmp.portal, !closure_2);
      }
    };
    const items4 = [, paused];
    cResult[7] = paused;
    cResult[8] = tmp8.portal;
    cResult[9] = fn;
    cResult[10] = items4;
    tmp15 = items4;
    tmp14 = fn;
  }
  const obj = require("c");
  tmp = _require;
}) : ((paused) => {
  paused = paused.paused;
  const muted = paused.muted;
  const onLoad = paused.onLoad;
  ({ style, children } = paused);
  const merged = Object.assign(paused, Object.assign({ style: 0, children: 0, paused: 0, muted: 0, onLoad: 0 }));
  if (null != children) {
    const _Error = Error;
    const error = new Error("The <MediaModalPortal> component cannot contain children.");
    throw error;
  } else {
    const items = [merged.portal, paused];
    const layoutEffect = noop.useLayoutEffect(() => {
      if (null != merged.portal) {
        MediaPlayerManager.toggle(tmp.portal, !paused);
      }
    }, items);
    const items1 = [merged.portal, muted];
    const layoutEffect1 = noop.useLayoutEffect(() => {
      if (null != merged.portal) {
        MediaPlayerManager.setMuted(tmp.portal, muted);
      }
    }, items1);
    const items2 = [onLoad, merged.portal];
    const layoutEffect2 = noop.useLayoutEffect(() => {
      if (null != merged.portal) {
        if (!obj.isAndroid()) {
          if (onLoad != null) {
            onLoad();
          }
        }
        MediaPlayerManager.setLoopPlayback(tmp.portal, true);
        return () => {
          loopPlayback.setLoopPlayback(merged.portal, false);
          muted(onLoad[9]).unregisterView(merged.portal);
          set.add(merged.portal);
        };
      }
    }, items2);
    const items3 = [onLoad, merged.portal];
    const callback = noop.useCallback((nativeEvent) => {
      if (merged.portal === nativeEvent.nativeEvent.portal) {
        if (onLoad != null) {
          tmp();
        }
      }
    }, items3);
    const obj2 = {};
    const obj = paused(onLoad[5]);
    const merged1 = Object.assign(merged);
    const items4 = [tmp2.base, style];
    obj2.style = items4;
    if (isAndroidResult) {
      obj2.onPortalViewLoaded = callback;
      let tmp17Result = <closure_8 {...obj2} />;
    } else {
      tmp17Result = <closure_8 {...obj2} />;
    }
    return tmp17Result;
  }
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
      closure_12(closure_0, arg0, arg1, arg2);
    }
  };
}
export const markPortalAlive = function markPortalAlive(portal) {
  set.delete(portal);
};
export const isPortalExpired = function isPortalExpired(portal) {
  return set.has(portal);
};