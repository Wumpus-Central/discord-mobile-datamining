// === Module 15981: TabsPerformanceTracker ===

// Module 15981 (TabsPerformanceTracker)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const AnalyticEvents = Constants.AnalyticEvents;
let tmp2 = new LoggerDefault("TabsPerformanceTracker");
let closure_5 = tmp2;
let closure_6 = {};
let closure_7 = { code: "function TabsPerformanceTrackerTsx1(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}" };
let closure_8 = { code: "function TabsPerformanceTrackerTsx2(){const{runOnJS,log_0}=this.__closure;return runOnJS(log_0)();}" };
let closure_9 = { code: "function TabsPerformanceTrackerTsx3(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}" };
let closure_10 = { code: "function TabsPerformanceTrackerTsx4(){const{runOnJS,log_0}=this.__closure;return runOnJS(log_0)();}" };
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp2;
  let tmp3;
  let tmp5;
  let tmp6;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] !== arg0) {
    let fn = function o() {
      let logger;
      let tab;
      let tmp2 = tab;
      tab = tmp3;
      if (null != closure_1_6[tab]) {
        if (null != closure_1_6[tab].startTime) {
          let _performance = performance;
          closure_1_6[tab].layoutEffectTime = performance.now();
          function log() {
            const tmp2 = null != tab && null != tab.startTime;
            if (tmp2) {
              const _performance = performance;
              tab.layoutUITime = performance.now();
              const tmp5 = null != tab.uiTime && null != tab.layoutUITime;
              if (tmp5) {
                const obj3 = { tab, start_time: null, layout_effect_time: null, layout_ui_thread_time: null, effect_time: null, ui_thread_time: null };
                ({ startTime: obj2.start_time, layoutEffectTime: obj2.layout_effect_time, layoutUITime: obj2.layout_ui_thread_time, effectTime: obj2.effect_time, uiTime: obj2.ui_thread_time } = tab);
                const obj = AnalyticsUtilsDefault;
                obj.track(AnalyticEvents.REDESIGN_NAV_BAR_RENDERED, obj3);
                const obj5 = { layoutEffectDuration: tab.layoutEffectTime - tab.startTime, effectDuration: tab.effectTime - tab.startTime, layoutUIDuration: tab.layoutUITime - tab.startTime, uiDuration: tab.uiTime - tab.startTime };
                logger.info("First navigation to", tab, "took", obj5);
              }
            }
          }
          let tmp5 = tab;
          const fn = function o() {
            const obj = ReanimatedRexport;
            return obj.runOnJS(log)();
          };
          const obj2 = { runOnJS: tab(dependencyMap[6]).runOnJS, log };
          const runOnUI = tab(dependencyMap[6]).runOnUI;
          tab(dependencyMap[6]);
          fn.__closure = obj2;
          fn.__workletHash = 7114578957129;
          fn.__initData = __initData;
          runOnUI(fn)();
        }
      }
      let obj = closure_1_6[tmp2];
      if (obj == null) {
        obj = {};
      }
      closure_1_6[tmp2] = obj;
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const layoutEffect = react.useLayoutEffect(tmp2, tmp3);
  if (cResult[3] !== arg0) {
    const fn2 = function f() {
      let logger;
      let tab;
      let tmp2 = tab;
      tab = tmp3;
      if (null != closure_1_6[tab]) {
        if (null != closure_1_6[tab].startTime) {
          let _performance = performance;
          closure_1_6[tab].effectTime = performance.now();
          function log_0() {
            const tmp2 = null != tab && null != tab.startTime;
            if (tmp2) {
              const _performance = performance;
              tab.uiTime = performance.now();
              const tmp5 = null != tab.uiTime && null != tab.layoutUITime;
              if (tmp5) {
                const obj3 = { tab, start_time: null, layout_effect_time: null, layout_ui_thread_time: null, effect_time: null, ui_thread_time: null };
                ({ startTime: obj2.start_time, layoutEffectTime: obj2.layout_effect_time, layoutUITime: obj2.layout_ui_thread_time, effectTime: obj2.effect_time, uiTime: obj2.ui_thread_time } = tab);
                const obj = AnalyticsUtilsDefault;
                obj.track(AnalyticEvents.REDESIGN_NAV_BAR_RENDERED, obj3);
                const obj5 = { layoutEffectDuration: tab.layoutEffectTime - tab.startTime, effectDuration: tab.effectTime - tab.startTime, layoutUIDuration: tab.layoutUITime - tab.startTime, uiDuration: tab.uiTime - tab.startTime };
                logger.info("First navigation to", tab, "took", obj5);
              }
            }
          }
          let tmp5 = tab;
          const fn = function o() {
            const obj = ReanimatedRexport;
            return obj.runOnJS(log_0)();
          };
          const obj2 = { runOnJS: tab(dependencyMap[6]).runOnJS, log_0 };
          const runOnUI = tab(dependencyMap[6]).runOnUI;
          tab(dependencyMap[6]);
          fn.__closure = obj2;
          fn.__workletHash = 1184292963178;
          fn.__initData = __initData2;
          runOnUI(fn)();
        }
      }
      let obj = closure_1_6[tmp2];
      if (obj == null) {
        obj = {};
      }
      closure_1_6[tmp2] = obj;
    };
    const items1 = [arg0];
    cResult[3] = arg0;
    cResult[4] = fn2;
    cResult[5] = items1;
    tmp6 = items1;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[4];
    tmp6 = cResult[5];
  }
  const effect = react.useEffect(tmp5, tmp6);
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  const layoutEffect = react.useLayoutEffect(() => {
    let logger;
    let tab;
    function log() {
      const tmp2 = null != tab && null != tab.startTime;
      if (tmp2) {
        const _performance = performance;
        tab.layoutUITime = performance.now();
        const tmp5 = null != tab.uiTime && null != tab.layoutUITime;
        if (tmp5) {
          const obj3 = { tab, start_time: null, layout_effect_time: null, layout_ui_thread_time: null, effect_time: null, ui_thread_time: null };
          ({ startTime: obj2.start_time, layoutEffectTime: obj2.layout_effect_time, layoutUITime: obj2.layout_ui_thread_time, effectTime: obj2.effect_time, uiTime: obj2.ui_thread_time } = tab);
          const obj = AnalyticsUtilsDefault;
          obj.track(AnalyticEvents.REDESIGN_NAV_BAR_RENDERED, obj3);
          const obj5 = { layoutEffectDuration: tab.layoutEffectTime - tab.startTime, effectDuration: tab.effectTime - tab.startTime, layoutUIDuration: tab.layoutUITime - tab.startTime, uiDuration: tab.uiTime - tab.startTime };
          logger.info("First navigation to", tab, "took", obj5);
        }
      }
    }
    let tmp2 = tab;
    tab = tmp3;
    if (null != closure_1_6[tab]) {
      if (null != closure_1_6[tab].startTime) {
        let _performance = performance;
        closure_1_6[tab].layoutEffectTime = performance.now();
        let tmp5 = tab;
        const fn = function n() {
          const obj = ReanimatedRexport;
          return obj.runOnJS(log)();
        };
        const obj2 = { runOnJS: tab(dependencyMap[6]).runOnJS, log };
        const runOnUI = tab(dependencyMap[6]).runOnUI;
        tab(dependencyMap[6]);
        fn.__closure = obj2;
        fn.__workletHash = 11082108471627;
        fn.__initData = __initData;
        runOnUI(fn)();
      }
    }
    let obj = closure_1_6[tmp2];
    if (obj == null) {
      obj = {};
    }
    closure_1_6[tmp2] = obj;
  }, items);
  const items1 = [arg0];
  const effect = react.useEffect(() => {
    let logger;
    let tab;
    function log_0() {
      const tmp2 = null != tab && null != tab.startTime;
      if (tmp2) {
        const _performance = performance;
        tab.uiTime = performance.now();
        const tmp5 = null != tab.uiTime && null != tab.layoutUITime;
        if (tmp5) {
          const obj3 = { tab, start_time: null, layout_effect_time: null, layout_ui_thread_time: null, effect_time: null, ui_thread_time: null };
          ({ startTime: obj2.start_time, layoutEffectTime: obj2.layout_effect_time, layoutUITime: obj2.layout_ui_thread_time, effectTime: obj2.effect_time, uiTime: obj2.ui_thread_time } = tab);
          const obj = AnalyticsUtilsDefault;
          obj.track(AnalyticEvents.REDESIGN_NAV_BAR_RENDERED, obj3);
          const obj5 = { layoutEffectDuration: tab.layoutEffectTime - tab.startTime, effectDuration: tab.effectTime - tab.startTime, layoutUIDuration: tab.layoutUITime - tab.startTime, uiDuration: tab.uiTime - tab.startTime };
          logger.info("First navigation to", tab, "took", obj5);
        }
      }
    }
    let tmp2 = tab;
    tab = tmp3;
    if (null != closure_1_6[tab]) {
      if (null != closure_1_6[tab].startTime) {
        let _performance = performance;
        closure_1_6[tab].effectTime = performance.now();
        let tmp5 = tab;
        const fn = function n() {
          const obj = ReanimatedRexport;
          return obj.runOnJS(log_0)();
        };
        const obj2 = { runOnJS: tab(dependencyMap[6]).runOnJS, log_0 };
        const runOnUI = tab(dependencyMap[6]).runOnUI;
        tab(dependencyMap[6]);
        fn.__closure = obj2;
        fn.__workletHash = 341921734764;
        fn.__initData = __initData2;
        runOnUI(fn)();
      }
    }
    let obj = closure_1_6[tmp2];
    if (obj == null) {
      obj = {};
    }
    closure_1_6[tmp2] = obj;
  }, items1);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/TabsPerformanceTracker.tsx");

export const trackTabPressed = function trackTabPressed(arg0) {
  if (null == closure_6[arg0]) {
    const _performance = performance;
    tmp[arg0] = { startTime: performance.now() };
    const obj = { startTime: performance.now() };
  }
};
export const useTrackTabPerformance = tmp3;