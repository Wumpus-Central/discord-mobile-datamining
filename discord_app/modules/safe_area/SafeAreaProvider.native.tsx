// === Module 13943: SafeAreaReporter ===

// Module 13943 (SafeAreaReporter)
import EMPTY_SAFE_AREA_INSETS from "EMPTY_SAFE_AREA_INSETS" /* 1631 */;
import _mod1632 from "module_1632" /* 1632 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
let closure_6 = { position: "absolute", width: 0, height: 0 };
const result = require("obj132").fileFinishedImporting("modules/safe_area/SafeAreaProvider.native.tsx");

export const SafeAreaReporter = function SafeAreaReporter() {
  let obj = safeAreaInsets(1632);
  safeAreaInsets = obj.useSafeAreaInsets();
  const appEntryKey = safeAreaInsets(1497).useAppEntryKey();
  const items = [safeAreaInsets, appEntryKey];
  const layoutEffect = React.useLayoutEffect(() => {
    safeAreaInsets(ref[8]).batchUpdates(() => {
      let obj = callback(closure_1_2[3]);
      if (obj.isMetaQuest()) {
        let META_QUEST_SAFE_AREA_INSETS = callback(closure_1_2[4]).META_QUEST_SAFE_AREA_INSETS;
      } else {
        META_QUEST_SAFE_AREA_INSETS = tmp;
        if (tmp3Result.isAndroid()) {
          safeAreaInsets = callback2(closure_1_2[6]).getState().byAppEntry[callback2].safeAreaInsets;
          const obj3 = callback2(closure_1_2[6]);
          const rect = callback2(closure_1_2[7]).getStableSafeAreaInsets(callback2);
          let tmp7 = tmp;
          if (null != rect) {
            if (rect.bottom === safeAreaInsets.bottom) {
              if (rect.top === safeAreaInsets.top) {
                tmp7 = safeAreaInsets;
              }
            }
            obj = { bottom: null, top: null, left: null, right: null };
            ({ bottom: obj5[0], top: obj5[1] } = rect);
            ({ left: obj5[2], right: obj5[3] } = tmp);
            safeAreaInsets = obj;
          }
          META_QUEST_SAFE_AREA_INSETS = tmp7;
          const obj4 = callback2(closure_1_2[7]);
        }
        tmp3Result = callback(closure_1_2[5]);
      }
      callback2(closure_1_2[6]).setState((byAppEntry) => {
        let tmp3 = byAppEntry;
        if (byAppEntry.byAppEntry[closure_1_1].safeAreaInsets !== META_QUEST_SAFE_AREA_INSETS) {
          const merged = Object.assign(byAppEntry.byAppEntry);
          const obj = { safeAreaInsets: null };
          obj[0] = tmp2;
          obj[tmp] = obj;
          obj[0] = obj;
          tmp3 = obj;
        }
        return tmp3;
      });
      const obj6 = callback2(closure_1_2[6]);
    });
  }, items);
  dependencyMap = React.useRef(false);
  const items1 = [safeAreaInsets, appEntryKey];
  obj = {
    style: closure_6,
    onLayout: React.useCallback(() => {
      if (!ref.current) {
        tmp.current = true;
        safeAreaInsets(ref[8]).batchUpdates(() => {
          let obj = callback(closure_1_2[3]);
          if (obj.isMetaQuest()) {
            let META_QUEST_SAFE_AREA_INSETS = callback(closure_1_2[4]).META_QUEST_SAFE_AREA_INSETS;
          } else {
            META_QUEST_SAFE_AREA_INSETS = tmp;
            if (tmp3Result.isAndroid()) {
              safeAreaInsets = callback2(closure_1_2[6]).getState().byAppEntry[callback2].safeAreaInsets;
              const obj3 = callback2(closure_1_2[6]);
              const rect = callback2(closure_1_2[7]).getStableSafeAreaInsets(callback2);
              let tmp7 = tmp;
              if (null != rect) {
                if (rect.bottom === safeAreaInsets.bottom) {
                  if (rect.top === safeAreaInsets.top) {
                    tmp7 = safeAreaInsets;
                  }
                }
                obj = { bottom: null, top: null, left: null, right: null };
                ({ bottom: obj5[0], top: obj5[1] } = rect);
                ({ left: obj5[2], right: obj5[3] } = tmp);
                safeAreaInsets = obj;
              }
              META_QUEST_SAFE_AREA_INSETS = tmp7;
              const obj4 = callback2(closure_1_2[7]);
            }
            tmp3Result = callback(closure_1_2[5]);
          }
          callback2(closure_1_2[6]).setState((byAppEntry) => {
            let tmp3 = byAppEntry;
            if (byAppEntry.byAppEntry[closure_1_1].safeAreaInsets !== META_QUEST_SAFE_AREA_INSETS) {
              const merged = Object.assign(byAppEntry.byAppEntry);
              const obj = { safeAreaInsets: null };
              obj[0] = tmp2;
              obj[tmp] = obj;
              obj[0] = obj;
              tmp3 = obj;
            }
            return tmp3;
          });
          const obj6 = callback2(closure_1_2[6]);
        });
        let obj = safeAreaInsets(ref[8]);
      }
    }, items1)
  };
  return <View style={closure_6} onLayout={React.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      safeAreaInsets(ref[8]).batchUpdates(() => {
        let obj = callback(closure_1_2[3]);
        if (obj.isMetaQuest()) {
          let META_QUEST_SAFE_AREA_INSETS = callback(closure_1_2[4]).META_QUEST_SAFE_AREA_INSETS;
        } else {
          META_QUEST_SAFE_AREA_INSETS = tmp;
          if (tmp3Result.isAndroid()) {
            safeAreaInsets = callback2(closure_1_2[6]).getState().byAppEntry[callback2].safeAreaInsets;
            const obj3 = callback2(closure_1_2[6]);
            const rect = callback2(closure_1_2[7]).getStableSafeAreaInsets(callback2);
            let tmp7 = tmp;
            if (null != rect) {
              if (rect.bottom === safeAreaInsets.bottom) {
                if (rect.top === safeAreaInsets.top) {
                  tmp7 = safeAreaInsets;
                }
              }
              obj = { bottom: null, top: null, left: null, right: null };
              ({ bottom: obj5[0], top: obj5[1] } = rect);
              ({ left: obj5[2], right: obj5[3] } = tmp);
              safeAreaInsets = obj;
            }
            META_QUEST_SAFE_AREA_INSETS = tmp7;
            const obj4 = callback2(closure_1_2[7]);
          }
          tmp3Result = callback(closure_1_2[5]);
        }
        callback2(closure_1_2[6]).setState((byAppEntry) => {
          let tmp3 = byAppEntry;
          if (byAppEntry.byAppEntry[closure_1_1].safeAreaInsets !== META_QUEST_SAFE_AREA_INSETS) {
            const merged = Object.assign(byAppEntry.byAppEntry);
            const obj = { safeAreaInsets: null };
            obj[0] = tmp2;
            obj[tmp] = obj;
            obj[0] = obj;
            tmp3 = obj;
          }
          return tmp3;
        });
        const obj6 = callback2(closure_1_2[6]);
      });
      let obj = safeAreaInsets(ref[8]);
    }
  }, items1)} />;
};
export const SafeAreaProvider = function SafeAreaProvider(arg0) {
  ({ children, style } = arg0);
  return jsx(_mod1632.SafeAreaProvider, { initialMetrics: EMPTY_SAFE_AREA_INSETS.INITIAL_SAFE_AREA_METRICS, children, style });
};