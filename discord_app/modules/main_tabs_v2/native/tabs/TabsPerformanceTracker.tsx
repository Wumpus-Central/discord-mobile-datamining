// === Module 18348: TabsPerformanceTracker ===

// Module 18348 (TabsPerformanceTracker)
import LoggerDefault from "Logger" /* 3 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import noop from "module_19" /* 19 */;

const require = fn;
const AnalyticEvents = fn(1072).AnalyticEvents;
let closure_5 = new LoggerDefault("TabsPerformanceTracker");
let closure_6 = {};
let closure_7 = { code: "(function TabsPerformanceTrackerTsx1(){let[scheduleOnRN,log]=this.__closure;return scheduleOnRN(log);})" };
let closure_8 = { code: "(function TabsPerformanceTrackerTsx2(){let[scheduleOnRN,log]=this.__closure;return scheduleOnRN(log);})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/TabsPerformanceTracker.tsx");

export function trackTabPressed(arg0) {
  if (null == closure_6[arg0]) {
    const obj = { startTime: null };
    const _performance = performance;
    obj.startTime = performance.now();
    tmp[arg0] = obj;
  }
}
export function useTrackTabPerformance(GUILDS) {
  items = [GUILDS];
  const layoutEffect = noop.useLayoutEffect(() => {
    c0 = tmp3;
    if (null != dependencyMap2[c0]) {
      if (null != tmp3.startTime) {
        let _performance = performance;
        tmp3.layoutEffectTime = performance.now();
        items = [
          closure_1_7,
          GUILDS(1705).scheduleOnRN,
          function log() {
                if (tmp2) {
                  const _performance = performance;
                  tab.layoutUITime = performance.now();
                  if (tmp5) {
                    const obj3 = { tab, start_time: null, layout_effect_time: null, layout_ui_thread_time: null, effect_time: null, ui_thread_time: null };
                    ({ startTime: obj2.start_time, layoutEffectTime: obj2.layout_effect_time, layoutUITime: obj2.layout_ui_thread_time, effectTime: obj2.effect_time, uiTime: obj2.ui_thread_time } = tab);
                    AnalyticsUtilsDefault.track(AnalyticEvents.REDESIGN_NAV_BAR_RENDERED, obj3);
                    const obj5 = { layoutEffectDuration: tab.layoutEffectTime - tab.startTime, effectDuration: tab.effectTime - tab.startTime, layoutUIDuration: tab.layoutUITime - tab.startTime, uiDuration: tab.uiTime - tab.startTime };
                    logger.info("First navigation to", tab, "took", obj5);
                  }
                  tmp5 = null != tab.uiTime && null != tab.layoutUITime;
                }
                tmp2 = null != tab && null != tab.startTime;
              }
        ];
        c0 = undefined;
        c1 = undefined;
        [tmp9, tmp10, tmp11] = items;
        class TabsPerformanceTrackerTsx1 {
          constructor() {
            return closure_0(closure_1);
          }
        }
        const items1 = [tmp10, tmp11];
        TabsPerformanceTrackerTsx1.__closure = items1;
        TabsPerformanceTrackerTsx1.__workletHash = 9222398850673;
        TabsPerformanceTrackerTsx1.__initData = tmp9;
        GUILDS(1705).scheduleOnUI(TabsPerformanceTrackerTsx1);
        const obj2 = GUILDS(1705);
      }
    }
    let obj = dependencyMap2[tmp2];
    if (obj == null) {
      obj = {};
    }
    dependencyMap2[c0] = obj;
  }, items);
  let items1 = [GUILDS];
  const effect = noop.useEffect(() => {
    c0 = tmp3;
    if (null != dependencyMap2[c0]) {
      if (null != tmp3.startTime) {
        let _performance = performance;
        tmp3.effectTime = performance.now();
        items = [
          closure_1_8,
          GUILDS(1705).scheduleOnRN,
          function log() {
                if (tmp2) {
                  const _performance = performance;
                  tab.uiTime = performance.now();
                  if (tmp5) {
                    const obj3 = { tab, start_time: null, layout_effect_time: null, layout_ui_thread_time: null, effect_time: null, ui_thread_time: null };
                    ({ startTime: obj2.start_time, layoutEffectTime: obj2.layout_effect_time, layoutUITime: obj2.layout_ui_thread_time, effectTime: obj2.effect_time, uiTime: obj2.ui_thread_time } = tab);
                    AnalyticsUtilsDefault.track(AnalyticEvents.REDESIGN_NAV_BAR_RENDERED, obj3);
                    const obj5 = { layoutEffectDuration: tab.layoutEffectTime - tab.startTime, effectDuration: tab.effectTime - tab.startTime, layoutUIDuration: tab.layoutUITime - tab.startTime, uiDuration: tab.uiTime - tab.startTime };
                    logger.info("First navigation to", tab, "took", obj5);
                  }
                  tmp5 = null != tab.uiTime && null != tab.layoutUITime;
                }
                tmp2 = null != tab && null != tab.startTime;
              }
        ];
        c0 = undefined;
        c1 = undefined;
        [tmp9, tmp10, tmp11] = items;
        class TabsPerformanceTrackerTsx2 {
          constructor() {
            return closure_0(closure_1);
          }
        }
        const items1 = [tmp10, tmp11];
        TabsPerformanceTrackerTsx2.__closure = items1;
        TabsPerformanceTrackerTsx2.__workletHash = 6249772318354;
        TabsPerformanceTrackerTsx2.__initData = tmp9;
        GUILDS(1705).scheduleOnUI(TabsPerformanceTrackerTsx2);
        const obj2 = GUILDS(1705);
      }
    }
    let obj = dependencyMap2[tmp2];
    if (obj == null) {
      obj = {};
    }
    dependencyMap2[c0] = obj;
  }, items1);
}