// === Module 7942: NativePortalView ===

// Module 7942 (NativePortalView)
import Fragment from "Fragment" /* 21 */;
import PortalViewNativeComponentDefault from "PortalViewNativeComponent" /* 7943 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4890 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, duration, flag, importDefault, setLoopPlaybackResult, tmp5;

let NativeEventEmitter;
let NativeModules;
let importDefaultResult;
let requireNativeComponent;
let closure_3 = ["style", "children", "paused", "muted", "onLoad"];
({ requireNativeComponent, NativeEventEmitter, NativeModules } = react_native);
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ base: { overflow: "hidden" } });
if (PlatformUtils.isAndroid()) {
  importDefaultResult = PortalViewNativeComponentDefault;
} else {
  importDefaultResult = requireNativeComponent("DCDPortalView");
}
const metroImportAll = importDefaultResult;
const MediaPlayerManager = NativeModules.MediaPlayerManager;
const nativeEventEmitter = new NativeEventEmitter(MediaPlayerManager);
const set = new Set();
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, arg3) => {
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = arg2;
  closure_3 = arg3;
  const obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] === arg3) {
    if (cResult[1] === arg2) {
      if (cResult[2] === arg1) {
        let tmp2;
        let tmp3;
        if (cResult[3] === arg0) {
          tmp2 = cResult[4];
          tmp3 = cResult[5];
        }
        const effect = react.useEffect(tmp2, tmp3);
      }
    }
  }
  const fn = function u() {
    closure_0 = nativeEventEmitter.addListener("MediaPlayerProgress", (duration) => {
      duration = duration.duration;
      let tmp = duration.id === closure_0;
      const time = duration.time;
      if (tmp) {
        tmp = duration > 0;
      }
      if (tmp) {
        closure_1(time, duration);
      }
    });
    closure_1 = nativeEventEmitter.addListener("MediaPlayerDownloadProgress", (id) => {
      let tmp2 = id.id === closure_0;
      const progressPercent = id.progressPercent;
      if (tmp2) {
        tmp2 = tmp > 0;
      }
      if (tmp2) {
        tmp2 = null != closure_1_3;
      }
      if (tmp2) {
        closure_1_3(progressPercent);
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
}) : ((arg0, arg1, arg2, arg3) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  closure_3 = arg3;
  const items = [arg0, arg2, arg1, arg3];
  const effect = react.useEffect(() => {
    closure_0 = nativeEventEmitter.addListener("MediaPlayerProgress", (duration) => {
      duration = duration.duration;
      let tmp = duration.id === closure_0;
      const time = duration.time;
      if (tmp) {
        tmp = duration > 0;
      }
      if (tmp) {
        closure_1(time, duration);
      }
    });
    closure_1 = nativeEventEmitter.addListener("MediaPlayerDownloadProgress", (id) => {
      let tmp2 = id.id === closure_0;
      const progressPercent = id.progressPercent;
      if (tmp2) {
        tmp2 = tmp > 0;
      }
      if (tmp2) {
        tmp2 = null != closure_1_3;
      }
      if (tmp2) {
        closure_1_3(progressPercent);
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
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function(muted) {
  let children;
  let closure_0;
  let closure_1;
  let closure_2;
  let loopPlayback;
  let paused;
  let style;
  let tmp4;
  let tmp9;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(35);
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
    tmp9 = style;
    tmp4 = children;
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
    const self = this;
    const self2 = this;
    const error = new Error("The <NativePortalView> component cannot contain children.");
    throw error;
  } else {
    if (cResult[7] === paused) {
      let tmp14;
      let tmp15;
      if (cResult[8] === tmp8.portal) {
        tmp14 = cResult[9];
        tmp15 = cResult[10];
      }
      const layoutEffect = react.useLayoutEffect(tmp14, tmp15);
      if (cResult[11] === tmp5) {
        let tmp17;
        let tmp18;
        if (cResult[12] === tmp8.portal) {
          tmp17 = cResult[13];
          tmp18 = cResult[14];
        }
        const layoutEffect1 = react.useLayoutEffect(tmp17, tmp18);
        if (cResult[15] === tmp6) {
          let tmp20;
          let tmp21;
          if (cResult[16] === tmp8.portal) {
            tmp20 = cResult[17];
            tmp21 = cResult[18];
          }
          const layoutEffect2 = react.useLayoutEffect(tmp20, tmp21);
          if (cResult[19] === tmp6) {
            let tmp23;
            if (cResult[20] === tmp8.portal) {
              tmp23 = cResult[21];
            }
            const tmpResult = tmp(1369);
            if (tmpResult.isAndroid()) {
              if (cResult[22] === tmp9) {
                let tmp31;
                if (cResult[23] === tmp13.base) {
                  tmp31 = cResult[24];
                }
                class D {
                  constructor(nativeEvent) {
                    if (closure_3.portal === nativeEvent.nativeEvent.portal) {
                      if (closure_1 != null) {
                        tmp();
                      }
                    }
                  }
                }
                const merged = Object.assign(tmp8);
                const tmp37 = <closure_8 style={tmp31} onPortalViewLoaded={tmp23} />;
                cResult[25] = tmp23;
                cResult[26] = tmp8;
                cResult[27] = tmp31;
                cResult[28] = tmp37;
              }
              const items = [tmp13.base, ];
              class D {
                constructor(nativeEvent) {
                  if (closure_3.portal === nativeEvent.nativeEvent.portal) {
                    if (closure_1 != null) {
                      tmp();
                    }
                  }
                }
              }
              cResult[22] = tmp9;
              cResult[23] = tmp13.base;
              cResult[24] = items;
              tmp31 = items;
            } else {
              if (cResult[29] === tmp9) {
                let tmp24;
                if (cResult[30] === tmp13.base) {
                  tmp24 = cResult[31];
                }
                class D {
                  constructor(nativeEvent) {
                    if (closure_3.portal === nativeEvent.nativeEvent.portal) {
                      if (closure_1 != null) {
                        tmp();
                      }
                    }
                  }
                }
                const merged1 = Object.assign(tmp8);
                const tmp30 = <closure_8 style={tmp24} />;
                cResult[32] = tmp8;
                cResult[33] = tmp24;
                cResult[34] = tmp30;
              }
              const items1 = [tmp13.base, ];
              class D {
                constructor(nativeEvent) {
                  if (closure_3.portal === nativeEvent.nativeEvent.portal) {
                    if (closure_1 != null) {
                      tmp();
                    }
                  }
                }
              }
              cResult[29] = tmp9;
              cResult[30] = tmp13.base;
              cResult[31] = items1;
              tmp24 = items1;
            }
            class D {
              constructor(nativeEvent) {
                if (closure_3.portal === nativeEvent.nativeEvent.portal) {
                  if (closure_1 != null) {
                    tmp();
                  }
                }
              }
            }
          }
          class D {
            constructor(nativeEvent) {
              if (closure_3.portal === nativeEvent.nativeEvent.portal) {
                if (closure_1 != null) {
                  tmp();
                }
              }
            }
          }
          cResult[19] = tmp6;
          cResult[20] = tmp8.portal;
          cResult[21] = D;
          tmp23 = D;
        }
        class A {
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
                const obj = closure_1(closure_2[9]);
                obj.unregisterView(closure_1_3.portal);
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
        cResult[17] = A;
        cResult[18] = items2;
        tmp21 = items2;
        tmp20 = A;
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
    const fn = function h() {
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
}) : (function(paused) {
  let children;
  let items4;
  let loopPlayback;
  let style;
  paused = paused.paused;
  const muted = paused.muted;
  const onLoad = paused.onLoad;
  ({ style, children } = paused);
  const merged = Object.assign(paused, Object.assign({ style: 0, children: 0, paused: 0, muted: 0, onLoad: 0 }));
  if (null != children) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("The <NativePortalView> component cannot contain children.");
    throw error;
  } else {
    let tmp15Result;
    const items = [merged.portal, paused];
    const layoutEffect = react.useLayoutEffect(() => {
      if (null != merged.portal) {
        MediaPlayerManager.toggle(tmp.portal, !paused);
      }
    }, items);
    const items1 = [merged.portal, muted];
    const layoutEffect1 = react.useLayoutEffect(() => {
      if (null != merged.portal) {
        MediaPlayerManager.setMuted(tmp.portal, muted);
      }
    }, items1);
    const items2 = [onLoad, merged.portal];
    const layoutEffect2 = react.useLayoutEffect(() => {
      if (null != merged.portal) {
        let obj = PlatformUtils;
        if (!obj.isAndroid()) {
          if (onLoad != null) {
            onLoad();
          }
        }
        MediaPlayerManager.setLoopPlayback(tmp.portal, true);
        return () => {
          loopPlayback.setLoopPlayback(merged.portal, false);
          const obj = muted(onLoad[9]);
          obj.unregisterView(merged.portal);
          set.add(merged.portal);
        };
      }
    }, items2);
    const items3 = [onLoad, merged.portal];
    const callback = react.useCallback((nativeEvent) => {
      if (merged.portal === nativeEvent.nativeEvent.portal) {
        if (onLoad != null) {
          tmp();
        }
      }
    }, items3);
    let obj = paused(onLoad[5]);
    const obj2 = { style: items4 };
    const isAndroidResult = obj.isAndroid();
    const merged1 = Object.assign(merged);
    items4 = [tmp2.base, style];
    if (isAndroidResult) {
      obj2.onPortalViewLoaded = callback;
      tmp15Result = <closure_8 {...obj2} />;
    } else {
      tmp15Result = <closure_8 {...obj2} />;
    }
    return tmp15Result;
  }
}));
const result = size.fileFinishedImporting("components_native/common/NativePortalView.tsx");

export default memoResult;
export function createPortalControls(portal) {
  let closure_0 = portal;
  return {
    seek(arg0) {
      MediaPlayerManager.changeProgress(portal, arg0);
    },
    pause(arg0) {
      MediaPlayerManager.toggle(portal, !arg0);
    },
    useSubscribe(arg0, arg1, arg2) {
      closure_12(portal, arg0, arg1, arg2);
    }
  };
}
export const markPortalAlive = function markPortalAlive(portal) {
  set.delete(portal);
};
export const isPortalExpired = function isPortalExpired(portal) {
  return set.has(portal);
};