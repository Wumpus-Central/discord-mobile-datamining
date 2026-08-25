// === Module 15374: trackTabPressed ===

// Module 15374 (trackTabPressed)
import timestampDefault from "timestamp" /* 3 */;
import closure_3 from "noop" /* 19 */;
import { AnalyticEvents } from "ME" /* 676 */;

const require = arg1;
let closure_5 = new timestampDefault("TabsPerformanceTracker");
let closure_6 = {};
let closure_7 = { code: "function TabsPerformanceTrackerTsx1(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}" };
let closure_8 = { code: "function TabsPerformanceTrackerTsx2(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}" };
const tmp2 = new timestampDefault("TabsPerformanceTracker");
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/TabsPerformanceTracker.tsx");

export const trackTabPressed = function trackTabPressed(arg0) {
  if (null == table[arg0]) {
    const obj = { startTime: null };
    const _performance = performance;
    obj[0] = performance.now();
    tmp[arg0] = obj;
  }
};
export const useTrackTabPerformance = function useTrackTabPerformance(GUILDS) {
  closure_0 = GUILDS;
  const items = [GUILDS];
  const layoutEffect = React.useLayoutEffect(() => {
    function log() {
      if (tmp2) {
        const _performance = performance;
        tmp.layoutUITime = performance.now();
        if (tmp5) {
          let obj = closure_2_1(closure_2_2[3]);
          obj = { tab: null, start_time: null, layout_effect_time: null, layout_ui_thread_time: null, effect_time: null, ui_thread_time: null };
          obj[0] = tmp4;
          ({ startTime: obj2[1], layoutEffectTime: obj2[2], layoutUITime: obj2[3], effectTime: obj2[4], uiTime: obj2[5] } = tmp);
          obj.track(closure_2_4.REDESIGN_NAV_BAR_RENDERED, obj);
          obj = { layoutEffectDuration: null, effectDuration: null, layoutUIDuration: null, uiDuration: null };
          obj[0] = tmp.layoutEffectTime - tmp.startTime;
          obj[1] = tmp.effectTime - tmp.startTime;
          obj[2] = tmp.layoutUITime - tmp.startTime;
          obj[3] = tmp.uiTime - tmp.startTime;
          closure_2_5.info("First navigation to", tmp4, "took", obj);
        }
        tmp5 = null != tmp.uiTime && null != tmp.layoutUITime;
      }
    }
    GUILDS = tmp3;
    if (null != closure_1_6[GUILDS]) {
      if (null != tmp3.startTime) {
        let _performance = performance;
        tmp3.layoutEffectTime = performance.now();
        const fn = function t() {
          return callback(closure_2_2[4]).runOnJS(log)();
        };
        let obj = { runOnJS: null, log: null };
        obj[0] = GUILDS(closure_1_2[4]).runOnJS;
        obj[1] = log;
        fn.__closure = obj;
        fn.__workletHash = 7114578957129;
        fn.__initData = closure_1_7;
        GUILDS(closure_1_2[4]).runOnUI(fn)();
        const obj2 = GUILDS(closure_1_2[4]);
      }
    }
    obj = tmp[tmp2];
    if (obj == null) {
      obj = {};
    }
    closure_1_6[GUILDS] = obj;
  }, items);
  const items1 = [GUILDS];
  const effect = React.useEffect(() => {
    function log() {
      if (tmp2) {
        const _performance = performance;
        tmp.uiTime = performance.now();
        if (tmp5) {
          let obj = closure_2_1(closure_2_2[3]);
          obj = { tab: null, start_time: null, layout_effect_time: null, layout_ui_thread_time: null, effect_time: null, ui_thread_time: null };
          obj[0] = tmp4;
          ({ startTime: obj2[1], layoutEffectTime: obj2[2], layoutUITime: obj2[3], effectTime: obj2[4], uiTime: obj2[5] } = tmp);
          obj.track(closure_2_4.REDESIGN_NAV_BAR_RENDERED, obj);
          obj = { layoutEffectDuration: null, effectDuration: null, layoutUIDuration: null, uiDuration: null };
          obj[0] = tmp.layoutEffectTime - tmp.startTime;
          obj[1] = tmp.effectTime - tmp.startTime;
          obj[2] = tmp.layoutUITime - tmp.startTime;
          obj[3] = tmp.uiTime - tmp.startTime;
          closure_2_5.info("First navigation to", tmp4, "took", obj);
        }
        tmp5 = null != tmp.uiTime && null != tmp.layoutUITime;
      }
    }
    GUILDS = tmp3;
    if (null != closure_1_6[GUILDS]) {
      if (null != tmp3.startTime) {
        let _performance = performance;
        tmp3.effectTime = performance.now();
        const fn = function t() {
          return callback(closure_2_2[4]).runOnJS(log)();
        };
        let obj = { runOnJS: null, log: null };
        obj[0] = GUILDS(closure_1_2[4]).runOnJS;
        obj[1] = log;
        fn.__closure = obj;
        fn.__workletHash = 331508196106;
        fn.__initData = closure_1_8;
        GUILDS(closure_1_2[4]).runOnUI(fn)();
        const obj2 = GUILDS(closure_1_2[4]);
      }
    }
    obj = tmp[tmp2];
    if (obj == null) {
      obj = {};
    }
    closure_1_6[GUILDS] = obj;
  }, items1);
};