// discord_app/modules/safe_area/SafeAreaProvider.native.tsx
import EMPTY_SAFE_AREA_INSETS from "SafeAreaConstants.native.tsx";
import _mod1631 from "../../../_runtime/metro/01631__.js";
import closure_3 from "../../../_runtime/00019_noop.js";
import { View } from "../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";

require = arg1;
let closure_6 = { position: "absolute", width: 0, height: 0 };
const result = require("set").fileFinishedImporting("modules/safe_area/SafeAreaProvider.native.tsx");

export const SafeAreaReporter = function SafeAreaReporter() {
  let obj = safeAreaInsets(1631);
  safeAreaInsets = obj.useSafeAreaInsets();
  const appEntryKey = safeAreaInsets(1496).useAppEntryKey();
  const items = [safeAreaInsets, appEntryKey];
  const layoutEffect = React.useLayoutEffect(() => {
    safeAreaInsets(ref[8]).batchUpdates(() => {
      let obj = callback(closure_1_2[3]);
      if (obj.isMetaQuest()) {
        let META_QUEST_SAFE_AREA_INSETS = tmp3(tmp4[4]).META_QUEST_SAFE_AREA_INSETS;
      } else {
        META_QUEST_SAFE_AREA_INSETS = tmp;
        if (tmp3Result.isAndroid()) {
          safeAreaInsets = callback2(tmp4[6]).getState().byAppEntry[tmp2].safeAreaInsets;
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
      callback2(closure_1_2[6]).setState((byAppEntry) => {
        let tmp3 = byAppEntry;
        if (byAppEntry.byAppEntry[closure_1_1].safeAreaInsets !== META_QUEST_SAFE_AREA_INSETS) {
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
            let META_QUEST_SAFE_AREA_INSETS = tmp3(tmp4[4]).META_QUEST_SAFE_AREA_INSETS;
          } else {
            META_QUEST_SAFE_AREA_INSETS = tmp;
            if (tmp3Result.isAndroid()) {
              safeAreaInsets = callback2(tmp4[6]).getState().byAppEntry[tmp2].safeAreaInsets;
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
          callback2(closure_1_2[6]).setState((byAppEntry) => {
            let tmp3 = byAppEntry;
            if (byAppEntry.byAppEntry[closure_1_1].safeAreaInsets !== META_QUEST_SAFE_AREA_INSETS) {
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
    }, items1),
  };
  return (
    <View
      style={closure_6}
      onLayout={React.useCallback(() => {
        if (!ref.current) {
          tmp.current = true;
          safeAreaInsets(ref[8]).batchUpdates(() => {
            let obj = callback(closure_1_2[3]);
            if (obj.isMetaQuest()) {
              let META_QUEST_SAFE_AREA_INSETS = tmp3(tmp4[4]).META_QUEST_SAFE_AREA_INSETS;
            } else {
              META_QUEST_SAFE_AREA_INSETS = tmp;
              if (tmp3Result.isAndroid()) {
                safeAreaInsets = callback2(tmp4[6]).getState().byAppEntry[tmp2].safeAreaInsets;
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
            callback2(closure_1_2[6]).setState((byAppEntry) => {
              let tmp3 = byAppEntry;
              if (byAppEntry.byAppEntry[closure_1_1].safeAreaInsets !== META_QUEST_SAFE_AREA_INSETS) {
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
      }, items1)}
    />
  );
};
export const SafeAreaProvider = function SafeAreaProvider(arg0) {
  ({ children, style } = arg0);
  return jsx(_mod1631.SafeAreaProvider, {
    initialMetrics: EMPTY_SAFE_AREA_INSETS.INITIAL_SAFE_AREA_METRICS,
    children,
    style,
  });
};
