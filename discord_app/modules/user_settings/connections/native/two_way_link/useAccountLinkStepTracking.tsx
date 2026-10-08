// discord_app/modules/user_settings/connections/native/two_way_link/useAccountLinkStepTracking.tsx
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/useAccountLinkStepTracking.tsx",
);

export const useAccountLinkStepTracking = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAccountLinkStepTracking(platform_type, location_stack) {
      _require = platform_type;
      const cResult = require("c").c(7);
      dependencyMap = noop.useRef(null);
      if (cResult[0] === location_stack) {
        if (cResult[1] === platform_type) {
          let tmp2 = cResult[2];
        }
        if (cResult[3] === location_stack) {
          if (cResult[4] === platform_type) {
            let tmp3 = cResult[5];
            let tmp4 = cResult[6];
          }
          const effect = noop.useEffect(tmp3, tmp4);
          return tmp2;
        }
        const fn2 = function o() {
          const items = ["landing"];
          const obj2 = { location_stack, previous_step: null, current_step: null, platform_type: null };
          let tmp3;
          if (null != ref.current) {
            tmp3 = items[ref.current];
          }
          obj2.previous_step = tmp3;
          obj2.current_step = items[0];
          obj2.platform_type = platform_type;
          AnalyticsUtilsDefault.track(AnalyticEvents.ACCOUNT_LINK_STEP, obj2);
          ref.current = 0;
        };
        let items = [location_stack, platform_type];
        cResult[3] = location_stack;
        cResult[4] = platform_type;
        cResult[5] = fn2;
        cResult[6] = items;
        tmp4 = items;
        tmp3 = fn2;
      }
      const fn = function c(index) {
        if (null != index) {
          index = index.index;
          const obj2 = { location_stack: tmp3, previous_step: null, current_step: null, platform_type: null };
          let tmp7;
          if (null != ref.current) {
            tmp7 = index.routeNames[ref.current];
          }
          obj2.previous_step = tmp7;
          obj2.current_step = index.routeNames[index];
          obj2.platform_type = tmp2;
          AnalyticsUtilsDefault.track(AnalyticEvents.ACCOUNT_LINK_STEP, obj2);
          ref.current = index;
        }
      };
      cResult[0] = location_stack;
      cResult[1] = platform_type;
      cResult[2] = fn;
      tmp2 = fn;
      let obj = require("c");
    }
  : function useAccountLinkStepTracking(platform_type, location_stack) {
      noop.useRef(null);
      let items = [location_stack, platform_type];
      const items1 = [location_stack, platform_type];
      const callback = noop.useCallback((index) => {
        if (null != index) {
          index = index.index;
          const obj2 = { location_stack: tmp3, previous_step: null, current_step: null, platform_type: null };
          let tmp7;
          if (null != ref.current) {
            tmp7 = index.routeNames[ref.current];
          }
          obj2.previous_step = tmp7;
          obj2.current_step = index.routeNames[index];
          obj2.platform_type = tmp2;
          AnalyticsUtilsDefault.track(AnalyticEvents.ACCOUNT_LINK_STEP, obj2);
          ref.current = index;
        }
      }, items);
      const effect = noop.useEffect(() => {
        const items = ["landing"];
        const obj2 = { location_stack, previous_step: null, current_step: null, platform_type: null };
        let tmp3;
        if (null != ref.current) {
          tmp3 = items[ref.current];
        }
        obj2.previous_step = tmp3;
        obj2.current_step = items[0];
        obj2.platform_type = platform_type;
        AnalyticsUtilsDefault.track(AnalyticEvents.ACCOUNT_LINK_STEP, obj2);
        ref.current = 0;
      }, items1);
      return callback;
    };
