// discord_app/modules/safe_area/SafeAreaProvider.native.tsx
import ReactBatchUpdates from "../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import SafeAreaConstants from "SafeAreaConstants.native.tsx";
import _mod1615 from "../../../_runtime/metro/01615__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const style = { position: "absolute", width: 0, height: 0 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/safe_area/SafeAreaProvider.native.tsx");

export const SafeAreaReporter = function SafeAreaReporter() {
  safeAreaInsets = safeAreaInsets(1615).useSafeAreaInsets();
  let obj = safeAreaInsets(1615);
  const appEntryKey = safeAreaInsets(1481).useAppEntryKey();
  const items = [safeAreaInsets, appEntryKey];
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_0 = safeAreaInsets;
    closure_1 = appEntryKey;
    ReactBatchUpdates.batchUpdates(() => {
      if (obj.isMetaQuest()) {
        let META_QUEST_SAFE_AREA_INSETS = closure_0(ref[4]).META_QUEST_SAFE_AREA_INSETS;
      } else {
        META_QUEST_SAFE_AREA_INSETS = tmp;
        if (tmp3Result.isAndroid()) {
          safeAreaInsets = closure_1(ref[6]).getState().byAppEntry[closure_1].safeAreaInsets;
          let obj3 = closure_1(ref[6]);
          const rect = closure_1(ref[7]).getStableSafeAreaInsets(closure_1);
          let tmp7 = tmp;
          if (null != rect) {
            if (rect.bottom === safeAreaInsets.bottom) {
              if (rect.top === safeAreaInsets.top) {
                tmp7 = safeAreaInsets;
              }
            }
            const rect1 = { bottom: null, top: null, left: null, right: null };
            ({ bottom: obj5.bottom, top: obj5.top } = rect);
            ({ left: obj5.left, right: obj5.right } = tmp);
            safeAreaInsets = rect1;
          }
          META_QUEST_SAFE_AREA_INSETS = tmp7;
          const obj4 = closure_1(ref[7]);
        }
        tmp3Result = closure_0(ref[5]);
      }
      obj = closure_0(ref[3]);
      closure_1(ref[6]).setState((byAppEntry) => {
        let tmp3 = byAppEntry;
        if (byAppEntry.byAppEntry[closure_1].safeAreaInsets !== META_QUEST_SAFE_AREA_INSETS) {
          const obj = { byAppEntry: null };
          const obj2 = {};
          const merged = Object.assign(byAppEntry.byAppEntry);
          const obj3 = { safeAreaInsets: tmp2 };
          obj2[tmp] = obj3;
          obj.byAppEntry = obj2;
          tmp3 = obj;
        }
        return tmp3;
      });
      const obj6 = closure_1(ref[6]);
    });
  }, items);
  dependencyMap = noop.useRef(false);
  const items1 = [safeAreaInsets, appEntryKey];
  let obj2 = safeAreaInsets(1481);
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
              let META_QUEST_SAFE_AREA_INSETS = closure_0(ref[4]).META_QUEST_SAFE_AREA_INSETS;
            } else {
              META_QUEST_SAFE_AREA_INSETS = tmp;
              if (tmp3Result.isAndroid()) {
                safeAreaInsets = closure_1(ref[6]).getState().byAppEntry[closure_1].safeAreaInsets;
                let obj3 = closure_1(ref[6]);
                const rect = closure_1(ref[7]).getStableSafeAreaInsets(closure_1);
                let tmp7 = tmp;
                if (null != rect) {
                  if (rect.bottom === safeAreaInsets.bottom) {
                    if (rect.top === safeAreaInsets.top) {
                      tmp7 = safeAreaInsets;
                    }
                  }
                  const rect1 = { bottom: null, top: null, left: null, right: null };
                  ({ bottom: obj5.bottom, top: obj5.top } = rect);
                  ({ left: obj5.left, right: obj5.right } = tmp);
                  safeAreaInsets = rect1;
                }
                META_QUEST_SAFE_AREA_INSETS = tmp7;
                const obj4 = closure_1(ref[7]);
              }
              tmp3Result = closure_0(ref[5]);
            }
            obj = closure_0(ref[3]);
            closure_1(ref[6]).setState((byAppEntry) => {
              let tmp3 = byAppEntry;
              if (byAppEntry.byAppEntry[closure_1].safeAreaInsets !== META_QUEST_SAFE_AREA_INSETS) {
                const obj = { byAppEntry: null };
                const obj2 = {};
                const merged = Object.assign(byAppEntry.byAppEntry);
                const obj3 = { safeAreaInsets: tmp2 };
                obj2[tmp] = obj3;
                obj.byAppEntry = obj2;
                tmp3 = obj;
              }
              return tmp3;
            });
            const obj6 = closure_1(ref[6]);
          });
        }
      }, items1)}
    />
  );
};
export const SafeAreaProvider = function SafeAreaProvider(arg0) {
  ({ children, style } = arg0);
  return jsx(_mod1615.SafeAreaProvider, {
    initialMetrics: SafeAreaConstants.INITIAL_SAFE_AREA_METRICS,
    children,
    style,
  });
};
