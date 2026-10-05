// discord_app/modules/safe_area/SafeAreaProvider.native.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../_runtime/00576_react.js";
import react_native2 from "../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import SafeAreaConstants from "SafeAreaConstants.native.tsx";
import _mod1621 from "../../../_runtime/metro/01621__.js";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let dependencyMap;

const View = react_native.View;
const jsx = Fragment.jsx;
const style = { position: "absolute", width: 0, height: 0 };
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let ref;
      let safeAreaInsets;
      let obj = safeAreaInsets(576);
      const cResult = obj.c(9);
      const obj2 = safeAreaInsets(1621);
      safeAreaInsets = obj2.useSafeAreaInsets();
      const obj3 = safeAreaInsets(1487);
      const appEntryKey = obj3.useAppEntryKey();
      if (cResult[0] === appEntryKey) {
        let tmp4;
        let tmp5;
        if (cResult[1] === safeAreaInsets) {
          tmp4 = cResult[2];
          tmp5 = cResult[3];
        }
        const layoutEffect = react.useLayoutEffect(tmp4, tmp5);
        dependencyMap = react.useRef(false);
        if (cResult[4] === appEntryKey) {
          let tmp8;
          let tmp9;
          if (cResult[5] === safeAreaInsets) {
            tmp8 = cResult[6];
          }
          if (cResult[7] !== tmp8) {
            const tmp13 = <View style={style} onLayout={tmp8} />;
            cResult[7] = tmp8;
            cResult[8] = tmp13;
            tmp9 = tmp13;
          } else {
            tmp9 = cResult[8];
          }
          return tmp9;
        }
        const fn2 = function y() {
          if (!ref.current) {
            tmp.current = true;
            let closure_0 = safeAreaInsets;
            let closure_1 = appEntryKey;
            const obj = react_native2;
            obj.batchUpdates(() => {
              let META_QUEST_SAFE_AREA_INSETS;
              const tmp = META_QUEST_SAFE_AREA_INSETS;
              let obj = closure_0(closure_1_2[3]);
              if (obj.isMetaQuest()) {
                META_QUEST_SAFE_AREA_INSETS = closure_0(closure_1_2[4]).META_QUEST_SAFE_AREA_INSETS;
              } else {
                META_QUEST_SAFE_AREA_INSETS = tmp;
                const tmp3Result = closure_0(closure_1_2[5]);
                if (tmp3Result.isAndroid()) {
                  let obj3 = closure_1(closure_1_2[6]);
                  safeAreaInsets = obj3.getState().byAppEntry[closure_1].safeAreaInsets;
                  const obj4 = closure_1(closure_1_2[7]);
                  const rect = obj4.getStableSafeAreaInsets(closure_1);
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
                }
              }
              const obj6 = closure_1(closure_1_2[6]);
              obj6.setState((byAppEntry) => {
                let obj2;
                let tmp3 = byAppEntry;
                if (byAppEntry.byAppEntry[closure_1].safeAreaInsets !== META_QUEST_SAFE_AREA_INSETS) {
                  const obj = { byAppEntry: obj2 };
                  obj2 = {};
                  const merged = Object.assign(byAppEntry.byAppEntry);
                  const obj3 = { safeAreaInsets: tmp2 };
                  obj2[tmp] = obj3;
                  tmp3 = obj;
                }
                return tmp3;
              });
            });
          }
        };
        cResult[4] = appEntryKey;
        cResult[5] = safeAreaInsets;
        cResult[6] = fn2;
        tmp8 = fn2;
      }
      const fn = function u() {
        let closure_0 = safeAreaInsets;
        let closure_1 = appEntryKey;
        const obj = react_native2;
        obj.batchUpdates(() => {
          let META_QUEST_SAFE_AREA_INSETS;
          const tmp = META_QUEST_SAFE_AREA_INSETS;
          let obj = closure_0(closure_1_2[3]);
          if (obj.isMetaQuest()) {
            META_QUEST_SAFE_AREA_INSETS = closure_0(closure_1_2[4]).META_QUEST_SAFE_AREA_INSETS;
          } else {
            META_QUEST_SAFE_AREA_INSETS = tmp;
            const tmp3Result = closure_0(closure_1_2[5]);
            if (tmp3Result.isAndroid()) {
              let obj3 = closure_1(closure_1_2[6]);
              safeAreaInsets = obj3.getState().byAppEntry[closure_1].safeAreaInsets;
              const obj4 = closure_1(closure_1_2[7]);
              const rect = obj4.getStableSafeAreaInsets(closure_1);
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
            }
          }
          const obj6 = closure_1(closure_1_2[6]);
          obj6.setState((byAppEntry) => {
            let obj2;
            let tmp3 = byAppEntry;
            if (byAppEntry.byAppEntry[closure_1].safeAreaInsets !== META_QUEST_SAFE_AREA_INSETS) {
              const obj = { byAppEntry: obj2 };
              obj2 = {};
              const merged = Object.assign(byAppEntry.byAppEntry);
              const obj3 = { safeAreaInsets: tmp2 };
              obj2[tmp] = obj3;
              tmp3 = obj;
            }
            return tmp3;
          });
        });
      };
      const items = [safeAreaInsets, appEntryKey];
      cResult[0] = appEntryKey;
      cResult[1] = safeAreaInsets;
      cResult[2] = fn;
      cResult[3] = items;
      tmp5 = items;
      tmp4 = fn;
    }
  : () => {
      let ref;
      let safeAreaInsets;
      let obj = safeAreaInsets(1621);
      safeAreaInsets = obj.useSafeAreaInsets();
      let obj2 = safeAreaInsets(1487);
      const appEntryKey = obj2.useAppEntryKey();
      const items = [safeAreaInsets, appEntryKey];
      const layoutEffect = react.useLayoutEffect(() => {
        let closure_0 = safeAreaInsets;
        let closure_1 = appEntryKey;
        const obj = react_native2;
        obj.batchUpdates(() => {
          let META_QUEST_SAFE_AREA_INSETS;
          const tmp = META_QUEST_SAFE_AREA_INSETS;
          let obj = closure_0(closure_1_2[3]);
          if (obj.isMetaQuest()) {
            META_QUEST_SAFE_AREA_INSETS = closure_0(closure_1_2[4]).META_QUEST_SAFE_AREA_INSETS;
          } else {
            META_QUEST_SAFE_AREA_INSETS = tmp;
            const tmp3Result = closure_0(closure_1_2[5]);
            if (tmp3Result.isAndroid()) {
              let obj3 = closure_1(closure_1_2[6]);
              safeAreaInsets = obj3.getState().byAppEntry[closure_1].safeAreaInsets;
              const obj4 = closure_1(closure_1_2[7]);
              const rect = obj4.getStableSafeAreaInsets(closure_1);
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
            }
          }
          const obj6 = closure_1(closure_1_2[6]);
          obj6.setState((byAppEntry) => {
            let obj2;
            let tmp3 = byAppEntry;
            if (byAppEntry.byAppEntry[closure_1].safeAreaInsets !== META_QUEST_SAFE_AREA_INSETS) {
              const obj = { byAppEntry: obj2 };
              obj2 = {};
              const merged = Object.assign(byAppEntry.byAppEntry);
              const obj3 = { safeAreaInsets: tmp2 };
              obj2[tmp] = obj3;
              tmp3 = obj;
            }
            return tmp3;
          });
        });
      }, items);
      dependencyMap = react.useRef(false);
      const items1 = [safeAreaInsets, appEntryKey];
      return (
        <View
          style={style}
          onLayout={react.useCallback(() => {
            let tmp;
            if (!ref.current) {
              tmp.current = true;
              let closure_0 = safeAreaInsets;
              let closure_1 = appEntryKey;
              let obj = react_native2;
              obj.batchUpdates(() => {
                let META_QUEST_SAFE_AREA_INSETS;
                const tmp = META_QUEST_SAFE_AREA_INSETS;
                let obj = closure_0(closure_1_2[3]);
                if (obj.isMetaQuest()) {
                  META_QUEST_SAFE_AREA_INSETS = closure_0(closure_1_2[4]).META_QUEST_SAFE_AREA_INSETS;
                } else {
                  META_QUEST_SAFE_AREA_INSETS = tmp;
                  const tmp3Result = closure_0(closure_1_2[5]);
                  if (tmp3Result.isAndroid()) {
                    let obj3 = closure_1(closure_1_2[6]);
                    safeAreaInsets = obj3.getState().byAppEntry[closure_1].safeAreaInsets;
                    const obj4 = closure_1(closure_1_2[7]);
                    const rect = obj4.getStableSafeAreaInsets(closure_1);
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
                  }
                }
                const obj6 = closure_1(closure_1_2[6]);
                obj6.setState((byAppEntry) => {
                  let obj2;
                  let tmp3 = byAppEntry;
                  if (byAppEntry.byAppEntry[closure_1].safeAreaInsets !== META_QUEST_SAFE_AREA_INSETS) {
                    const obj = { byAppEntry: obj2 };
                    obj2 = {};
                    const merged = Object.assign(byAppEntry.byAppEntry);
                    const obj3 = { safeAreaInsets: tmp2 };
                    obj2[tmp] = obj3;
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
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      const obj = react2;
      const cResult = obj.c(3);
      ({ children, style } = arg0);
      if (cResult[0] === children) {
        let tmp4;
        if (cResult[1] === style) {
          tmp4 = cResult[2];
        }
        return tmp4;
      }
      const SafeAreaProvider = _mod1621.SafeAreaProvider;
      const tmp5 = (
        <SafeAreaProvider initialMetrics={SafeAreaConstants.INITIAL_SAFE_AREA_METRICS} style={style}>
          {children}
        </SafeAreaProvider>
      );
      cResult[0] = children;
      cResult[1] = style;
      cResult[2] = tmp5;
      tmp4 = tmp5;
    }
  : (arg0) => {
      let children;
      ({ children, style } = arg0);
      const SafeAreaProvider = _mod1621.SafeAreaProvider;
      return (
        <SafeAreaProvider initialMetrics={SafeAreaConstants.INITIAL_SAFE_AREA_METRICS} style={style}>
          {children}
        </SafeAreaProvider>
      );
    };
const result = size.fileFinishedImporting("modules/safe_area/SafeAreaProvider.native.tsx");
const SafeAreaProvider_export = tmp3;

export const SafeAreaReporter = tmp2;
export { SafeAreaProvider_export as SafeAreaProvider };
