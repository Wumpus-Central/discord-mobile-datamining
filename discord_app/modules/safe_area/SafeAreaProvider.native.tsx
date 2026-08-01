// === Module 13649: SafeAreaReporter ===

// Module 13649 (SafeAreaReporter)
import noop from "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_6 = { position: "absolute", width: 0, height: 0 };
const result = require("jsxProd").fileFinishedImporting("modules/safe_area/SafeAreaProvider.native.tsx");

export const SafeAreaReporter = function SafeAreaReporter() {
  let obj = safeAreaInsets(1584);
  safeAreaInsets = obj.useSafeAreaInsets();
  const appEntryKey = safeAreaInsets(1477).useAppEntryKey();
  const items = [safeAreaInsets, appEntryKey];
  const layoutEffect = React.useLayoutEffect(() => {
    safeAreaInsets(ref[8]).batchUpdates(() => {
      let obj = callback(outer1_2[3]);
      if (obj.isMetaQuest()) {
        let META_QUEST_SAFE_AREA_INSETS = tmp3(tmp4[4]).META_QUEST_SAFE_AREA_INSETS;
      } else {
        META_QUEST_SAFE_AREA_INSETS = tmp;
        if (tmp3Result.isAndroid()) {
          let safeAreaInsets = callback2(tmp4[6]).getState().byAppEntry[tmp2].safeAreaInsets;
          const obj3 = callback2(tmp4[6]);
          const rect = callback2(tmp4[7]).getStableSafeAreaInsets(tmp2);
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
          const obj4 = callback2(tmp4[7]);
        }
        tmp3Result = tmp3(tmp4[5]);
      }
      callback2(outer1_2[6]).setState((byAppEntry) => {
        let tmp3 = byAppEntry;
        if (byAppEntry.byAppEntry[outer1_1].safeAreaInsets !== META_QUEST_SAFE_AREA_INSETS) {
          let obj = { byAppEntry: null };
          obj = {};
          const merged = Object.assign(byAppEntry.byAppEntry);
          obj = { safeAreaInsets: null };
          obj[0] = tmp2;
          obj[tmp] = obj;
          obj[0] = obj;
          tmp3 = obj;
        }
        return tmp3;
      });
    });
  }, items);
  const dependencyMap = React.useRef(false);
  const items1 = [safeAreaInsets, appEntryKey];
  obj = {
    style: closure_6,
    onLayout: React.useCallback(() => {
      if (!ref.current) {
        tmp.current = true;
        safeAreaInsets(ref[8]).batchUpdates(() => {
          let obj = callback(outer1_2[3]);
          if (obj.isMetaQuest()) {
            let META_QUEST_SAFE_AREA_INSETS = tmp3(tmp4[4]).META_QUEST_SAFE_AREA_INSETS;
          } else {
            META_QUEST_SAFE_AREA_INSETS = tmp;
            if (tmp3Result.isAndroid()) {
              let safeAreaInsets = callback2(tmp4[6]).getState().byAppEntry[tmp2].safeAreaInsets;
              const obj3 = callback2(tmp4[6]);
              const rect = callback2(tmp4[7]).getStableSafeAreaInsets(tmp2);
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
              const obj4 = callback2(tmp4[7]);
            }
            tmp3Result = tmp3(tmp4[5]);
          }
          callback2(outer1_2[6]).setState((byAppEntry) => {
            let tmp3 = byAppEntry;
            if (byAppEntry.byAppEntry[outer1_1].safeAreaInsets !== META_QUEST_SAFE_AREA_INSETS) {
              let obj = { byAppEntry: null };
              obj = {};
              const merged = Object.assign(byAppEntry.byAppEntry);
              obj = { safeAreaInsets: null };
              obj[0] = tmp2;
              obj[tmp] = obj;
              obj[0] = obj;
              tmp3 = obj;
            }
            return tmp3;
          });
        });
        let obj = safeAreaInsets(ref[8]);
      }
    }, items1)
  };
  return <View style={closure_6} onLayout={React.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      safeAreaInsets(ref[8]).batchUpdates(() => {
        let obj = callback(outer1_2[3]);
        if (obj.isMetaQuest()) {
          let META_QUEST_SAFE_AREA_INSETS = tmp3(tmp4[4]).META_QUEST_SAFE_AREA_INSETS;
        } else {
          META_QUEST_SAFE_AREA_INSETS = tmp;
          if (tmp3Result.isAndroid()) {
            let safeAreaInsets = callback2(tmp4[6]).getState().byAppEntry[tmp2].safeAreaInsets;
            const obj3 = callback2(tmp4[6]);
            const rect = callback2(tmp4[7]).getStableSafeAreaInsets(tmp2);
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
            const obj4 = callback2(tmp4[7]);
          }
          tmp3Result = tmp3(tmp4[5]);
        }
        callback2(outer1_2[6]).setState((byAppEntry) => {
          let tmp3 = byAppEntry;
          if (byAppEntry.byAppEntry[outer1_1].safeAreaInsets !== META_QUEST_SAFE_AREA_INSETS) {
            let obj = { byAppEntry: null };
            obj = {};
            const merged = Object.assign(byAppEntry.byAppEntry);
            obj = { safeAreaInsets: null };
            obj[0] = tmp2;
            obj[tmp] = obj;
            obj[0] = obj;
            tmp3 = obj;
          }
          return tmp3;
        });
      });
      let obj = safeAreaInsets(ref[8]);
    }
  }, items1)} />;
};
export const SafeAreaProvider = function SafeAreaProvider(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const obj = { initialMetrics: null, children: null, style: null };
  obj[0] = require(1583) /* EMPTY_SAFE_AREA_INSETS */.INITIAL_SAFE_AREA_METRICS;
  obj[1] = children;
  obj[2] = style;
  return jsx(require(1584).SafeAreaProvider, { initialMetrics: null, children: null, style: null });
};