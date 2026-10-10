// discord_app/modules/main_tabs_v2/native/tabs/TabsPerformanceTracker.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
let closure_5 = new LoggerDefault("TabsPerformanceTracker");
let closure_6 = {};
let closure_7 = {
  code: "function TabsPerformanceTrackerTsx1(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}",
};
let closure_8 = {
  code: "function TabsPerformanceTrackerTsx2(){const{runOnJS,log_0}=this.__closure;return runOnJS(log_0)();}",
};
let closure_9 = {
  code: "function TabsPerformanceTrackerTsx3(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}",
};
let closure_10 = {
  code: "function TabsPerformanceTrackerTsx4(){const{runOnJS,log_0}=this.__closure;return runOnJS(log_0)();}",
};
const ReactCompilerGating = fn(558);
let tmp2 = new LoggerDefault("TabsPerformanceTracker");
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
export const useTrackTabPerformance = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTrackTabPerformance(arg0) {
      _require = arg0;
      const cResult = require("c").c(6);
      if (cResult[0] !== arg0) {
        let fn = function o() {
          const tab = tmp3;
          if (null != dependencyMap2[tab]) {
            if (null != tmp3.startTime) {
              let _performance = performance;
              tmp3.layoutEffectTime = performance.now();
              function log() {
                if (tmp2) {
                  const _performance = performance;
                  tab.layoutUITime = performance.now();
                  if (tmp5) {
                    const obj3 = {
                      tab,
                      start_time: null,
                      layout_effect_time: null,
                      layout_ui_thread_time: null,
                      effect_time: null,
                      ui_thread_time: null,
                    };
                    ({
                      startTime: obj2.start_time,
                      layoutEffectTime: obj2.layout_effect_time,
                      layoutUITime: obj2.layout_ui_thread_time,
                      effectTime: obj2.effect_time,
                      uiTime: obj2.ui_thread_time,
                    } = tab);
                    AnalyticsUtilsDefault.track(AnalyticEvents.REDESIGN_NAV_BAR_RENDERED, obj3);
                    const obj5 = {
                      layoutEffectDuration: tab.layoutEffectTime - tab.startTime,
                      effectDuration: tab.effectTime - tab.startTime,
                      layoutUIDuration: tab.layoutUITime - tab.startTime,
                      uiDuration: tab.uiTime - tab.startTime,
                    };
                    logger.info("First navigation to", tab, "took", obj5);
                  }
                  tmp5 = null != tab.uiTime && null != tab.layoutUITime;
                }
                tmp2 = null != tab && null != tab.startTime;
              }
              const fn = function o() {
                return ReanimatedRexport.runOnJS(log)();
              };
              let obj3 = { runOnJS: tab(4850).runOnJS, log };
              fn.__closure = obj3;
              fn.__workletHash = 7114578957129;
              fn.__initData = __initData;
              tab(4850).runOnUI(fn)();
              const obj2 = tab(4850);
            }
          }
          let obj = dependencyMap2[tmp2];
          if (obj == null) {
            obj = {};
          }
          dependencyMap2[tab] = obj;
        };
        const items = [arg0];
        cResult[0] = arg0;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp3 = items;
        let tmp2 = fn;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      const layoutEffect = noop.useLayoutEffect(tmp2, tmp3);
      if (cResult[3] !== arg0) {
        const fn2 = function f() {
          const tab = tmp3;
          if (null != dependencyMap2[tab]) {
            if (null != tmp3.startTime) {
              let _performance = performance;
              tmp3.effectTime = performance.now();
              function log() {
                if (tmp2) {
                  const _performance = performance;
                  tab.uiTime = performance.now();
                  if (tmp5) {
                    const obj3 = {
                      tab,
                      start_time: null,
                      layout_effect_time: null,
                      layout_ui_thread_time: null,
                      effect_time: null,
                      ui_thread_time: null,
                    };
                    ({
                      startTime: obj2.start_time,
                      layoutEffectTime: obj2.layout_effect_time,
                      layoutUITime: obj2.layout_ui_thread_time,
                      effectTime: obj2.effect_time,
                      uiTime: obj2.ui_thread_time,
                    } = tab);
                    AnalyticsUtilsDefault.track(AnalyticEvents.REDESIGN_NAV_BAR_RENDERED, obj3);
                    const obj5 = {
                      layoutEffectDuration: tab.layoutEffectTime - tab.startTime,
                      effectDuration: tab.effectTime - tab.startTime,
                      layoutUIDuration: tab.layoutUITime - tab.startTime,
                      uiDuration: tab.uiTime - tab.startTime,
                    };
                    logger.info("First navigation to", tab, "took", obj5);
                  }
                  tmp5 = null != tab.uiTime && null != tab.layoutUITime;
                }
                tmp2 = null != tab && null != tab.startTime;
              }
              const fn = function o() {
                return ReanimatedRexport.runOnJS(log)();
              };
              let obj3 = { runOnJS: tab(4850).runOnJS, log_0: log };
              fn.__closure = obj3;
              fn.__workletHash = 1184292963178;
              fn.__initData = __initData2;
              tab(4850).runOnUI(fn)();
              const obj2 = tab(4850);
            }
          }
          let obj = dependencyMap2[tmp2];
          if (obj == null) {
            obj = {};
          }
          dependencyMap2[tab] = obj;
        };
        const items1 = [arg0];
        cResult[3] = arg0;
        cResult[4] = fn2;
        cResult[5] = items1;
        let tmp6 = items1;
        let tmp5 = fn2;
      } else {
        tmp5 = cResult[4];
        tmp6 = cResult[5];
      }
      const effect = noop.useEffect(tmp5, tmp6);
      let obj = require("c");
    }
  : function useTrackTabPerformance(arg0) {
      closure_0 = arg0;
      const items = [arg0];
      const layoutEffect = noop.useLayoutEffect(() => {
        function log() {
          if (tmp2) {
            const _performance = performance;
            tab.layoutUITime = performance.now();
            if (tmp5) {
              const obj3 = {
                tab,
                start_time: null,
                layout_effect_time: null,
                layout_ui_thread_time: null,
                effect_time: null,
                ui_thread_time: null,
              };
              ({
                startTime: obj2.start_time,
                layoutEffectTime: obj2.layout_effect_time,
                layoutUITime: obj2.layout_ui_thread_time,
                effectTime: obj2.effect_time,
                uiTime: obj2.ui_thread_time,
              } = tab);
              AnalyticsUtilsDefault.track(AnalyticEvents.REDESIGN_NAV_BAR_RENDERED, obj3);
              const obj5 = {
                layoutEffectDuration: tab.layoutEffectTime - tab.startTime,
                effectDuration: tab.effectTime - tab.startTime,
                layoutUIDuration: tab.layoutUITime - tab.startTime,
                uiDuration: tab.uiTime - tab.startTime,
              };
              logger.info("First navigation to", tab, "took", obj5);
            }
            tmp5 = null != tab.uiTime && null != tab.layoutUITime;
          }
          tmp2 = null != tab && null != tab.startTime;
        }
        const tab = tmp3;
        if (null != dependencyMap2[tab]) {
          if (null != tmp3.startTime) {
            let _performance = performance;
            tmp3.layoutEffectTime = performance.now();
            const fn = function n() {
              return ReanimatedRexport.runOnJS(log)();
            };
            let obj3 = { runOnJS: tab(4850).runOnJS, log };
            fn.__closure = obj3;
            fn.__workletHash = 11082108471627;
            fn.__initData = __initData;
            tab(4850).runOnUI(fn)();
            const obj2 = tab(4850);
          }
        }
        let obj = dependencyMap2[tmp2];
        if (obj == null) {
          obj = {};
        }
        dependencyMap2[tab] = obj;
      }, items);
      const items1 = [arg0];
      const effect = noop.useEffect(() => {
        function log_0() {
          if (tmp2) {
            const _performance = performance;
            tab.uiTime = performance.now();
            if (tmp5) {
              const obj3 = {
                tab,
                start_time: null,
                layout_effect_time: null,
                layout_ui_thread_time: null,
                effect_time: null,
                ui_thread_time: null,
              };
              ({
                startTime: obj2.start_time,
                layoutEffectTime: obj2.layout_effect_time,
                layoutUITime: obj2.layout_ui_thread_time,
                effectTime: obj2.effect_time,
                uiTime: obj2.ui_thread_time,
              } = tab);
              AnalyticsUtilsDefault.track(AnalyticEvents.REDESIGN_NAV_BAR_RENDERED, obj3);
              const obj5 = {
                layoutEffectDuration: tab.layoutEffectTime - tab.startTime,
                effectDuration: tab.effectTime - tab.startTime,
                layoutUIDuration: tab.layoutUITime - tab.startTime,
                uiDuration: tab.uiTime - tab.startTime,
              };
              logger.info("First navigation to", tab, "took", obj5);
            }
            tmp5 = null != tab.uiTime && null != tab.layoutUITime;
          }
          tmp2 = null != tab && null != tab.startTime;
        }
        const tab = tmp3;
        if (null != dependencyMap2[tab]) {
          if (null != tmp3.startTime) {
            let _performance = performance;
            tmp3.effectTime = performance.now();
            const fn = function n() {
              return ReanimatedRexport.runOnJS(log_0)();
            };
            let obj3 = { runOnJS: tab(4850).runOnJS, log_0 };
            fn.__closure = obj3;
            fn.__workletHash = 341921734764;
            fn.__initData = __initData2;
            tab(4850).runOnUI(fn)();
            const obj2 = tab(4850);
          }
        }
        let obj = dependencyMap2[tmp2];
        if (obj == null) {
          obj = {};
        }
        dependencyMap2[tab] = obj;
      }, items1);
    };
