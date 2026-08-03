// === Module 14945: trackTabPressed ===

// Module 14945 (trackTabPressed)
import noop from "noop";
import { AnalyticEvents } from "ME";

const require = arg1;
let c5 = new require("expandEventProperties")("TabsPerformanceTracker");
let closure_6 = {};
let closure_7 = { code: "function TabsPerformanceTrackerTsx1(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}" };
let closure_8 = { code: "function TabsPerformanceTrackerTsx2(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}" };
const tmp2 = new require("expandEventProperties")("TabsPerformanceTracker");
const result = require("timestamp").fileFinishedImporting("modules/main_tabs_v2/native/tabs/TabsPerformanceTracker.tsx");

export const trackTabPressed = function trackTabPressed(arg0) {
  if (null == table[arg0]) {
    const obj = { startTime: null };
    const _performance = performance;
    obj[0] = performance.now();
    tmp[arg0] = obj;
  }
};
export const useTrackTabPerformance = function useTrackTabPerformance(GUILDS) {
  let closure_0 = GUILDS;
  const items = [GUILDS];
  const layoutEffect = React.useLayoutEffect(() => {
    function log() {
      if (tmp2) {
        const _performance = performance;
        tmp.layoutUITime = performance.now();
        if (tmp5) {
          let obj = outer2_1(outer2_2[3]);
          obj = { tab: null, start_time: null, layout_effect_time: null, layout_ui_thread_time: null, effect_time: null, ui_thread_time: null };
          obj[0] = tmp4;
          ({ startTime: obj2[1], layoutEffectTime: obj2[2], layoutUITime: obj2[3], effectTime: obj2[4], uiTime: obj2[5] } = tmp);
          obj.track(outer2_4.REDESIGN_NAV_BAR_RENDERED, obj);
          obj = { layoutEffectDuration: null, effectDuration: null, layoutUIDuration: null, uiDuration: null };
          obj[0] = tmp.layoutEffectTime - tmp.startTime;
          obj[1] = tmp.effectTime - tmp.startTime;
          obj[2] = tmp.layoutUITime - tmp.startTime;
          obj[3] = tmp.uiTime - tmp.startTime;
          outer2_5.info("First navigation to", tmp4, "took", obj);
        }
        tmp5 = null != tmp.uiTime && null != tmp.layoutUITime;
      }
    }
    const GUILDS = tmp3;
    if (null != outer1_6[GUILDS]) {
      if (null != tmp3.startTime) {
        let _performance = performance;
        tmp3.layoutEffectTime = performance.now();
        const fn = function t() {
          return tmp3(outer2_2[4]).runOnJS(log)();
        };
        let obj = { runOnJS: null, log: null };
        obj[0] = GUILDS(outer1_2[4]).runOnJS;
        obj[1] = log;
        fn.__closure = obj;
        fn.__workletHash = 7114578957129;
        fn.__initData = outer1_7;
        GUILDS(outer1_2[4]).runOnUI(fn)();
        const obj2 = GUILDS(outer1_2[4]);
      }
    }
    obj = tmp[tmp2];
    if (obj == null) {
      obj = {};
    }
    outer1_6[GUILDS] = obj;
  }, items);
  const items1 = [GUILDS];
  const effect = React.useEffect(() => {
    function log() {
      if (tmp2) {
        const _performance = performance;
        tmp.uiTime = performance.now();
        if (tmp5) {
          let obj = outer2_1(outer2_2[3]);
          obj = { tab: null, start_time: null, layout_effect_time: null, layout_ui_thread_time: null, effect_time: null, ui_thread_time: null };
          obj[0] = tmp4;
          ({ startTime: obj2[1], layoutEffectTime: obj2[2], layoutUITime: obj2[3], effectTime: obj2[4], uiTime: obj2[5] } = tmp);
          obj.track(outer2_4.REDESIGN_NAV_BAR_RENDERED, obj);
          obj = { layoutEffectDuration: null, effectDuration: null, layoutUIDuration: null, uiDuration: null };
          obj[0] = tmp.layoutEffectTime - tmp.startTime;
          obj[1] = tmp.effectTime - tmp.startTime;
          obj[2] = tmp.layoutUITime - tmp.startTime;
          obj[3] = tmp.uiTime - tmp.startTime;
          outer2_5.info("First navigation to", tmp4, "took", obj);
        }
        tmp5 = null != tmp.uiTime && null != tmp.layoutUITime;
      }
    }
    const GUILDS = tmp3;
    if (null != outer1_6[GUILDS]) {
      if (null != tmp3.startTime) {
        let _performance = performance;
        tmp3.effectTime = performance.now();
        const fn = function t() {
          return tmp3(outer2_2[4]).runOnJS(log)();
        };
        let obj = { runOnJS: null, log: null };
        obj[0] = GUILDS(outer1_2[4]).runOnJS;
        obj[1] = log;
        fn.__closure = obj;
        fn.__workletHash = 331508196106;
        fn.__initData = outer1_8;
        GUILDS(outer1_2[4]).runOnUI(fn)();
        const obj2 = GUILDS(outer1_2[4]);
      }
    }
    obj = tmp[tmp2];
    if (obj == null) {
      obj = {};
    }
    outer1_6[GUILDS] = obj;
  }, items1);
};