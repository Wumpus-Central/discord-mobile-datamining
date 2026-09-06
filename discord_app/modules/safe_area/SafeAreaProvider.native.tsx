// discord_app/modules/safe_area/SafeAreaProvider.native.tsx
import ReactBatchUpdates from "../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import SafeAreaConstants from "SafeAreaConstants.native.tsx";
import _mod1614 from "../../../_runtime/metro/01614__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const style = { position: "absolute", width: 0, height: 0 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/safe_area/SafeAreaProvider.native.tsx");

export const SafeAreaReporter = function SafeAreaReporter() {
  let obj = safeAreaInsets(1614);
  safeAreaInsets = obj.useSafeAreaInsets();
  const appEntryKey = safeAreaInsets(1480).useAppEntryKey();
  const items = [safeAreaInsets, appEntryKey];
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_0 = safeAreaInsets;
    closure_1 = appEntryKey;
    ReactBatchUpdates.batchUpdates(() => {
      if (obj.isMetaQuest()) {
        let META_QUEST_SAFE_AREA_INSETS = tmp3(tmp4[4]).META_QUEST_SAFE_AREA_INSETS;
      } else {
        META_QUEST_SAFE_AREA_INSETS = tmp;
        if (tmp3Result.isAndroid()) {
          safeAreaInsets = closure_1(tmp4[6]).getState().byAppEntry[tmp2].safeAreaInsets;
          const obj3 = closure_1(tmp4[6]);
          let rect = closure_1(tmp4[7]).getStableSafeAreaInsets(tmp2);
          let tmp7 = tmp;
          if (null != rect) {
            if (rect.bottom === safeAreaInsets.bottom) {
              if (rect.top === safeAreaInsets.top) {
                tmp7 = safeAreaInsets;
              }
            }
            rect = { bottom: null, top: null, left: null, right: null };
            ({ bottom: obj5.bottom, top: obj5.top } = rect);
            ({ left: obj5.left, right: obj5.right } = tmp);
            safeAreaInsets = rect;
          }
          META_QUEST_SAFE_AREA_INSETS = tmp7;
          const obj4 = closure_1(tmp4[7]);
        }
        tmp3Result = tmp3(tmp4[5]);
      }
      obj = closure_0(ref[3]);
      closure_1(ref[6]).setState((byAppEntry) => {
        let tmp3 = byAppEntry;
        if (byAppEntry.byAppEntry[closure_1].safeAreaInsets !== META_QUEST_SAFE_AREA_INSETS) {
          let obj = { byAppEntry: null };
          obj = {};
          const merged = Object.assign(byAppEntry.byAppEntry);
          obj = { safeAreaInsets: tmp2 };
          obj[tmp] = obj;
          obj.byAppEntry = obj;
          tmp3 = obj;
        }
        return tmp3;
      });
    });
  }, items);
  dependencyMap = noop.useRef(false);
  const items1 = [safeAreaInsets, appEntryKey];
  obj = {
    style,
    onLayout: noop.useCallback(() => {
      if (!ref.current) {
        tmp.current = true;
        closure_0 = safeAreaInsets;
        closure_1 = appEntryKey;
        ReactBatchUpdates.batchUpdates(() => {
          if (obj.isMetaQuest()) {
            let META_QUEST_SAFE_AREA_INSETS = tmp3(tmp4[4]).META_QUEST_SAFE_AREA_INSETS;
          } else {
            META_QUEST_SAFE_AREA_INSETS = tmp;
            if (tmp3Result.isAndroid()) {
              safeAreaInsets = closure_1(tmp4[6]).getState().byAppEntry[tmp2].safeAreaInsets;
              const obj3 = closure_1(tmp4[6]);
              let rect = closure_1(tmp4[7]).getStableSafeAreaInsets(tmp2);
              let tmp7 = tmp;
              if (null != rect) {
                if (rect.bottom === safeAreaInsets.bottom) {
                  if (rect.top === safeAreaInsets.top) {
                    tmp7 = safeAreaInsets;
                  }
                }
                rect = { bottom: null, top: null, left: null, right: null };
                ({ bottom: obj5.bottom, top: obj5.top } = rect);
                ({ left: obj5.left, right: obj5.right } = tmp);
                safeAreaInsets = rect;
              }
              META_QUEST_SAFE_AREA_INSETS = tmp7;
              const obj4 = closure_1(tmp4[7]);
            }
            tmp3Result = tmp3(tmp4[5]);
          }
          obj = closure_0(ref[3]);
          closure_1(ref[6]).setState((byAppEntry) => {
            let tmp3 = byAppEntry;
            if (byAppEntry.byAppEntry[closure_1].safeAreaInsets !== META_QUEST_SAFE_AREA_INSETS) {
              let obj = { byAppEntry: null };
              obj = {};
              const merged = Object.assign(byAppEntry.byAppEntry);
              obj = { safeAreaInsets: tmp2 };
              obj[tmp] = obj;
              obj.byAppEntry = obj;
              tmp3 = obj;
            }
            return tmp3;
          });
        });
      }
    }, items1),
  };
  return (
    <View
      style={style}
      onLayout={noop.useCallback(() => {
        if (!ref.current) {
          tmp.current = true;
          closure_0 = safeAreaInsets;
          closure_1 = appEntryKey;
          ReactBatchUpdates.batchUpdates(() => {
            if (obj.isMetaQuest()) {
              let META_QUEST_SAFE_AREA_INSETS = tmp3(tmp4[4]).META_QUEST_SAFE_AREA_INSETS;
            } else {
              META_QUEST_SAFE_AREA_INSETS = tmp;
              if (tmp3Result.isAndroid()) {
                safeAreaInsets = closure_1(tmp4[6]).getState().byAppEntry[tmp2].safeAreaInsets;
                const obj3 = closure_1(tmp4[6]);
                let rect = closure_1(tmp4[7]).getStableSafeAreaInsets(tmp2);
                let tmp7 = tmp;
                if (null != rect) {
                  if (rect.bottom === safeAreaInsets.bottom) {
                    if (rect.top === safeAreaInsets.top) {
                      tmp7 = safeAreaInsets;
                    }
                  }
                  rect = { bottom: null, top: null, left: null, right: null };
                  ({ bottom: obj5.bottom, top: obj5.top } = rect);
                  ({ left: obj5.left, right: obj5.right } = tmp);
                  safeAreaInsets = rect;
                }
                META_QUEST_SAFE_AREA_INSETS = tmp7;
                const obj4 = closure_1(tmp4[7]);
              }
              tmp3Result = tmp3(tmp4[5]);
            }
            obj = closure_0(ref[3]);
            closure_1(ref[6]).setState((byAppEntry) => {
              let tmp3 = byAppEntry;
              if (byAppEntry.byAppEntry[closure_1].safeAreaInsets !== META_QUEST_SAFE_AREA_INSETS) {
                let obj = { byAppEntry: null };
                obj = {};
                const merged = Object.assign(byAppEntry.byAppEntry);
                obj = { safeAreaInsets: tmp2 };
                obj[tmp] = obj;
                obj.byAppEntry = obj;
                tmp3 = obj;
              }
              return tmp3;
            });
          });
        }
      }, items1)}
    />
  );
};
export const SafeAreaProvider = function SafeAreaProvider(arg0) {
  ({ children, style } = arg0);
  return jsx(_mod1614.SafeAreaProvider, {
    initialMetrics: SafeAreaConstants.INITIAL_SAFE_AREA_METRICS,
    children,
    style,
  });
};
