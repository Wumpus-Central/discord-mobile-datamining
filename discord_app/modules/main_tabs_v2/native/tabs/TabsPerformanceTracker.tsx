// === Module 16014: TabsPerformanceTracker ===

// Module 16014 (TabsPerformanceTracker)
import LoggerDefault from "Logger" /* 3 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import noop from "module_19" /* 19 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_5 = new LoggerDefault("TabsPerformanceTracker");
let closure_6 = {};
let closure_7 = { code: "function TabsPerformanceTrackerTsx1(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}" };
let closure_8 = { code: "function TabsPerformanceTrackerTsx2(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/TabsPerformanceTracker.tsx");

export const trackTabPressed = function trackTabPressed(arg0) {
  if (null == closure_6[arg0]) {
    const obj = { startTime: null };
    const _performance = performance;
    obj.startTime = performance.now();
    tmp[arg0] = obj;
  }
};
export const useTrackTabPerformance = function useTrackTabPerformance(GUILDS) {
  const items = [GUILDS];
  const layoutEffect = noop.useLayoutEffect(() => {
    function log() {
      if (tmp2) {
        const _performance = performance;
        tmp.layoutUITime = performance.now();
        if (tmp5) {
          let obj = { tab: tmp4, start_time: null, layout_effect_time: null, layout_ui_thread_time: null, effect_time: null, ui_thread_time: null };
          ({ startTime: obj2.start_time, layoutEffectTime: obj2.layout_effect_time, layoutUITime: obj2.layout_ui_thread_time, effectTime: obj2.effect_time, uiTime: obj2.ui_thread_time } = tmp);
          obj.track(AnalyticEvents.REDESIGN_NAV_BAR_RENDERED, obj);
          obj = { layoutEffectDuration: tmp.layoutEffectTime - tmp.startTime, effectDuration: tmp.effectTime - tmp.startTime, layoutUIDuration: tmp.layoutUITime - tmp.startTime, uiDuration: tmp.uiTime - tmp.startTime };
          logger.info("First navigation to", tmp4, "took", obj);
        }
        tmp5 = null != tmp.uiTime && null != tmp.layoutUITime;
      }
    }
    GUILDS = tmp3;
    if (null != dependencyMap2[GUILDS]) {
      if (null != tmp3.startTime) {
        let _performance = performance;
        tmp3.layoutEffectTime = performance.now();
        const fn = function t() {
          return ReanimatedRexport.runOnJS(log)();
        };
        let obj = { runOnJS: GUILDS(4296).runOnJS, log };
        fn.__closure = obj;
        fn.__workletHash = 7114578957129;
        fn.__initData = __initData;
        GUILDS(4296).runOnUI(fn)();
        const obj2 = GUILDS(4296);
      }
    }
    obj = tmp[tmp2];
    if (obj == null) {
      obj = {};
    }
    dependencyMap2[GUILDS] = obj;
  }, items);
  const items1 = [GUILDS];
  const effect = noop.useEffect(() => {
    function log() {
      if (tmp2) {
        const _performance = performance;
        tmp.uiTime = performance.now();
        if (tmp5) {
          let obj = { tab: tmp4, start_time: null, layout_effect_time: null, layout_ui_thread_time: null, effect_time: null, ui_thread_time: null };
          ({ startTime: obj2.start_time, layoutEffectTime: obj2.layout_effect_time, layoutUITime: obj2.layout_ui_thread_time, effectTime: obj2.effect_time, uiTime: obj2.ui_thread_time } = tmp);
          obj.track(AnalyticEvents.REDESIGN_NAV_BAR_RENDERED, obj);
          obj = { layoutEffectDuration: tmp.layoutEffectTime - tmp.startTime, effectDuration: tmp.effectTime - tmp.startTime, layoutUIDuration: tmp.layoutUITime - tmp.startTime, uiDuration: tmp.uiTime - tmp.startTime };
          logger.info("First navigation to", tmp4, "took", obj);
        }
        tmp5 = null != tmp.uiTime && null != tmp.layoutUITime;
      }
    }
    GUILDS = tmp3;
    if (null != dependencyMap2[GUILDS]) {
      if (null != tmp3.startTime) {
        let _performance = performance;
        tmp3.effectTime = performance.now();
        const fn = function t() {
          return ReanimatedRexport.runOnJS(log)();
        };
        let obj = { runOnJS: GUILDS(4296).runOnJS, log };
        fn.__closure = obj;
        fn.__workletHash = 331508196106;
        fn.__initData = __initData2;
        GUILDS(4296).runOnUI(fn)();
        const obj2 = GUILDS(4296);
      }
    }
    obj = tmp[tmp2];
    if (obj == null) {
      obj = {};
    }
    dependencyMap2[GUILDS] = obj;
  }, items1);
};