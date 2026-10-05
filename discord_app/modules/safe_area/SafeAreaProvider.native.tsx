// === Module 14404: SafeAreaProvider ===

// Module 14404 (SafeAreaProvider)
import c from "c" /* 576 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1259 */;
import SafeAreaConstants from "SafeAreaConstants" /* 1620 */;
import _mod1621 from "module_1621" /* 1621 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const style = { position: "absolute", width: 0, height: 0 };
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = safeAreaInsets(576).c(9);
  let obj = safeAreaInsets(576);
  safeAreaInsets = safeAreaInsets(1621).useSafeAreaInsets();
  const obj2 = safeAreaInsets(1621);
  const appEntryKey = safeAreaInsets(1487).useAppEntryKey();
  if (cResult[0] === appEntryKey) {
    if (cResult[1] === safeAreaInsets) {
      let tmp4 = cResult[2];
      let tmp5 = cResult[3];
    }
    const layoutEffect = noop.useLayoutEffect(tmp4, tmp5);
    dependencyMap = noop.useRef(false);
    if (cResult[4] === appEntryKey) {
      if (cResult[5] === safeAreaInsets) {
        let tmp8 = cResult[6];
      }
      if (cResult[7] !== tmp8) {
        const obj4 = { style, onLayout: tmp8 };
        const tmp13 = <View style={style} onLayout={tmp8} />;
        cResult[7] = tmp8;
        cResult[8] = tmp13;
        let tmp9 = tmp13;
      } else {
        tmp9 = cResult[8];
      }
      return tmp9;
    }
    const fn2 = function y() {
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
    };
    cResult[4] = appEntryKey;
    cResult[5] = safeAreaInsets;
    cResult[6] = fn2;
    tmp8 = fn2;
  }
  const fn = function u() {
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
  };
  const items = [safeAreaInsets, appEntryKey];
  cResult[0] = appEntryKey;
  cResult[1] = safeAreaInsets;
  cResult[2] = fn;
  cResult[3] = items;
  tmp5 = items;
  tmp4 = fn;
  const obj3 = safeAreaInsets(1487);
}) : (() => {
  safeAreaInsets = safeAreaInsets(1621).useSafeAreaInsets();
  let obj = safeAreaInsets(1621);
  const appEntryKey = safeAreaInsets(1487).useAppEntryKey();
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
  let obj2 = safeAreaInsets(1487);
  return <View style={style} onLayout={noop.useCallback(() => {
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
  }, items1)} />;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/safe_area/SafeAreaProvider.native.tsx");

export const SafeAreaReporter = tmp2;
export const SafeAreaProvider = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  ({ children, style } = arg0);
  if (cResult[0] === children) {
    if (cResult[1] === style) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const tmp5 = jsx(_mod1621.SafeAreaProvider, { initialMetrics: SafeAreaConstants.INITIAL_SAFE_AREA_METRICS, children, style });
  cResult[0] = children;
  cResult[1] = style;
  cResult[2] = tmp5;
  tmp4 = tmp5;
  const obj2 = { initialMetrics: SafeAreaConstants.INITIAL_SAFE_AREA_METRICS, children, style };
}) : ((arg0) => {
  ({ children, style } = arg0);
  return jsx(_mod1621.SafeAreaProvider, { initialMetrics: SafeAreaConstants.INITIAL_SAFE_AREA_METRICS, children, style });
});