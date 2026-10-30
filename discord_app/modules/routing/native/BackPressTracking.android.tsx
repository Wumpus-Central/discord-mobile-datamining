// discord_app/modules/routing/native/BackPressTracking.android.tsx
import noop from "../../../../_runtime/metro/00019__.js";

fn(17).BackHandler;
let closure_5 = 0;
const set = new Set();
let c7 = false;
const size = fn(2);
let result = size.fileFinishedImporting("modules/routing/native/BackPressTracking.android.tsx");

export function addBackPressListener(fn) {
  closure_0 = BackHandler.addEventListener("hardwareBackPress", fn);
  closure_5 = closure_5 + 1;
  if (!c7) {
    c7 = true;
    let _queueMicrotask = queueMicrotask;
    queueMicrotask(() => {
      c7 = false;
      let tmp = closure_1_5 > 0;
      if (!tmp) {
        tmp = size.size > 0;
      }
      if (tmp !== closure_2) {
        closure_2 = tmp;
        const result = obj(dependencyMap[2]).setHasActiveBackPressHandler(tmp);
        obj = obj(dependencyMap[2]);
      }
    });
  }
  return {
    remove() {
      closure_0.remove();
      closure_5 = closure_5 - 1;
      if (!c7) {
        c7 = true;
        const _queueMicrotask = queueMicrotask;
        queueMicrotask(() => {
          c7 = false;
          let tmp = closure_1_5 > 0;
          if (!tmp) {
            tmp = size.size > 0;
          }
          if (tmp !== closure_2) {
            closure_2 = tmp;
            const result = obj(dependencyMap[2]).setHasActiveBackPressHandler(tmp);
            obj = obj(dependencyMap[2]);
          }
        });
      }
    },
  };
}
export function useTrackNavigationBackPress(navigationContainerRef) {
  const items = [navigationContainerRef];
  const effect = noop.useEffect(() => {
    if (null != navigationContainerRef) {
      if (navigationContainerRef.isReady()) {
        if (navigationContainerRef.canGoBack()) {
          set.add(navigationContainerRef);
        }
        if (!c7) {
          c7 = true;
          let _queueMicrotask = queueMicrotask;
          queueMicrotask(() => {
            c7 = false;
            let tmp = closure_1_5 > 0;
            if (!tmp) {
              tmp = size.size > 0;
            }
            if (tmp !== closure_2) {
              closure_2 = tmp;
              const result = obj(dependencyMap[2]).setHasActiveBackPressHandler(tmp);
              obj = obj(dependencyMap[2]);
            }
          });
        }
        closure_1 = navigationContainerRef.addListener("state", function update() {
          if (obj.isReady()) {
            if (obj.canGoBack()) {
              set.add(obj);
            }
            if (!c7) {
              c7 = true;
              const _queueMicrotask = queueMicrotask;
              queueMicrotask(() => {
                c7 = false;
                let tmp = closure_1_5 > 0;
                if (!tmp) {
                  tmp = size.size > 0;
                }
                if (tmp !== closure_2) {
                  closure_2 = tmp;
                  const result = obj(dependencyMap[2]).setHasActiveBackPressHandler(tmp);
                  obj = obj(dependencyMap[2]);
                }
              });
            }
          }
          set.delete(obj);
        });
        return () => {
          dependencyMap();
          set.delete(obj);
          if (!c7) {
            c7 = true;
            const _queueMicrotask = queueMicrotask;
            queueMicrotask(() => {
              c7 = false;
              let tmp = closure_1_5 > 0;
              if (!tmp) {
                tmp = size.size > 0;
              }
              if (tmp !== closure_2) {
                closure_2 = tmp;
                const result = obj(dependencyMap[2]).setHasActiveBackPressHandler(tmp);
                obj = obj(dependencyMap[2]);
              }
            });
          }
        };
      }
      set.delete(navigationContainerRef);
    }
  }, items);
}
