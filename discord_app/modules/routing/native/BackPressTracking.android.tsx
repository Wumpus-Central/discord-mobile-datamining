// discord_app/modules/routing/native/BackPressTracking.android.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
fn(17).BackHandler;
let closure_6 = 0;
const set = new Set();
let c8 = false;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/routing/native/BackPressTracking.android.tsx");

export const addBackPressListener = function addBackPressListener(fn) {
  closure_0 = BackHandler.addEventListener("hardwareBackPress", fn);
  closure_6 = closure_6 + 1;
  if (!c8) {
    c8 = true;
    let _queueMicrotask = queueMicrotask;
    queueMicrotask(() => {
      c8 = false;
      let tmp = closure_1_6 > 0;
      if (!tmp) {
        tmp = size.size > 0;
      }
      if (tmp !== closure_3) {
        closure_3 = tmp;
        const result = closure_1_1(dependencyMap[2]).setHasActiveBackPressHandler(tmp);
        obj = closure_1_1(dependencyMap[2]);
      }
    });
  }
  return {
    remove() {
      closure_0.remove();
      closure_6 = closure_6 - 1;
      if (!c8) {
        c8 = true;
        const _queueMicrotask = queueMicrotask;
        queueMicrotask(() => {
          c8 = false;
          let tmp = closure_1_6 > 0;
          if (!tmp) {
            tmp = size.size > 0;
          }
          if (tmp !== closure_3) {
            closure_3 = tmp;
            const result = closure_1_1(dependencyMap[2]).setHasActiveBackPressHandler(tmp);
            obj = closure_1_1(dependencyMap[2]);
          }
        });
      }
    },
  };
};
export const useTrackNavigationBackPress = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTrackNavigationBackPress(arg0) {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] !== arg0) {
        const fn = function t() {
          if (null != closure_0) {
            if (closure_0.isReady()) {
              if (closure_0.canGoBack()) {
                set.add(closure_0);
              }
              if (!c8) {
                c8 = true;
                let _queueMicrotask = queueMicrotask;
                queueMicrotask(() => {
                  c8 = false;
                  let tmp = closure_1_6 > 0;
                  if (!tmp) {
                    tmp = size.size > 0;
                  }
                  if (tmp !== closure_3) {
                    closure_3 = tmp;
                    const result = closure_1_1(dependencyMap[2]).setHasActiveBackPressHandler(tmp);
                    obj = closure_1_1(dependencyMap[2]);
                  }
                });
              }
              closure_1 = closure_0.addListener("state", function update() {
                if (obj.isReady()) {
                  if (obj.canGoBack()) {
                    set.add(obj);
                  }
                  if (!c8) {
                    c8 = true;
                    const _queueMicrotask = queueMicrotask;
                    queueMicrotask(() => {
                      c8 = false;
                      let tmp = closure_1_6 > 0;
                      if (!tmp) {
                        tmp = size.size > 0;
                      }
                      if (tmp !== closure_3) {
                        closure_3 = tmp;
                        const result = closure_1_1(dependencyMap[2]).setHasActiveBackPressHandler(tmp);
                        obj = closure_1_1(dependencyMap[2]);
                      }
                    });
                  }
                }
                set.delete(obj);
              });
              return () => {
                closure_1();
                set.delete(obj);
                if (!c8) {
                  c8 = true;
                  const _queueMicrotask = queueMicrotask;
                  queueMicrotask(() => {
                    c8 = false;
                    let tmp = closure_1_6 > 0;
                    if (!tmp) {
                      tmp = size.size > 0;
                    }
                    if (tmp !== closure_3) {
                      closure_3 = tmp;
                      const result = closure_1_1(dependencyMap[2]).setHasActiveBackPressHandler(tmp);
                      obj = closure_1_1(dependencyMap[2]);
                    }
                  });
                }
              };
            }
            set.delete(closure_0);
          }
        };
        const items = [arg0];
        cResult[0] = arg0;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp3 = items;
        let tmp2 = fn;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      const effect = noop.useEffect(tmp2, tmp3);
    }
  : function useTrackNavigationBackPress(arg0) {
      closure_0 = arg0;
      const items = [arg0];
      const effect = noop.useEffect(() => {
        if (null != closure_0) {
          if (closure_0.isReady()) {
            if (closure_0.canGoBack()) {
              set.add(closure_0);
            }
            if (!c8) {
              c8 = true;
              let _queueMicrotask = queueMicrotask;
              queueMicrotask(() => {
                c8 = false;
                let tmp = closure_1_6 > 0;
                if (!tmp) {
                  tmp = size.size > 0;
                }
                if (tmp !== closure_3) {
                  closure_3 = tmp;
                  const result = closure_1_1(dependencyMap[2]).setHasActiveBackPressHandler(tmp);
                  obj = closure_1_1(dependencyMap[2]);
                }
              });
            }
            closure_1 = closure_0.addListener("state", function update() {
              if (obj.isReady()) {
                if (obj.canGoBack()) {
                  set.add(obj);
                }
                if (!c8) {
                  c8 = true;
                  const _queueMicrotask = queueMicrotask;
                  queueMicrotask(() => {
                    c8 = false;
                    let tmp = closure_1_6 > 0;
                    if (!tmp) {
                      tmp = size.size > 0;
                    }
                    if (tmp !== closure_3) {
                      closure_3 = tmp;
                      const result = closure_1_1(dependencyMap[2]).setHasActiveBackPressHandler(tmp);
                      obj = closure_1_1(dependencyMap[2]);
                    }
                  });
                }
              }
              set.delete(obj);
            });
            return () => {
              closure_1();
              set.delete(obj);
              if (!c8) {
                c8 = true;
                const _queueMicrotask = queueMicrotask;
                queueMicrotask(() => {
                  c8 = false;
                  let tmp = closure_1_6 > 0;
                  if (!tmp) {
                    tmp = size.size > 0;
                  }
                  if (tmp !== closure_3) {
                    closure_3 = tmp;
                    const result = closure_1_1(dependencyMap[2]).setHasActiveBackPressHandler(tmp);
                    obj = closure_1_1(dependencyMap[2]);
                  }
                });
              }
            };
          }
          set.delete(closure_0);
        }
      }, items);
    };
