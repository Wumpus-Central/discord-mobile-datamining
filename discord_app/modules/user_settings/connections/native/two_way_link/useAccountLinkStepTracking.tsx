// discord_app/modules/user_settings/connections/native/two_way_link/useAccountLinkStepTracking.tsx
import Constants from "../../../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

const AnalyticEvents = Constants.AnalyticEvents;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (platform_type, location_stack) => {
      let ref;
      _require = platform_type;
      let obj = require("react");
      const cResult = obj.c(7);
      dependencyMap = react.useRef(null);
      if (cResult[0] === location_stack) {
        let tmp2;
        if (cResult[1] === platform_type) {
          tmp2 = cResult[2];
        }
        if (cResult[3] === location_stack) {
          let tmp3;
          let tmp4;
          if (cResult[4] === platform_type) {
            tmp3 = cResult[5];
            tmp4 = cResult[6];
          }
          const effect = react.useEffect(tmp3, tmp4);
          return tmp2;
        }
        const fn2 = function o() {
          let tmp4;
          const items = ["landing"];
          const obj = { location_stack, previous_step: tmp4, current_step: items[0], platform_type };
          tmp4 = undefined;
          const track = AnalyticsUtilsDefault.track;
          const ACCOUNT_LINK_STEP = AnalyticEvents.ACCOUNT_LINK_STEP;
          AnalyticsUtilsDefault;
          if (null != ref.current) {
            tmp4 = items[ref.current];
          }
          track(ACCOUNT_LINK_STEP, obj);
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
        let tmp8;
        if (null != index) {
          index = index.index;
          const obj = {
            location_stack: tmp3,
            previous_step: tmp8,
            current_step: index.routeNames[index],
            platform_type: tmp2,
          };
          tmp8 = undefined;
          const track = AnalyticsUtilsDefault.track;
          const ACCOUNT_LINK_STEP = AnalyticEvents.ACCOUNT_LINK_STEP;
          AnalyticsUtilsDefault;
          if (null != ref.current) {
            tmp8 = index.routeNames[ref.current];
          }
          track(ACCOUNT_LINK_STEP, obj);
          ref.current = index;
        }
      };
      cResult[0] = location_stack;
      cResult[1] = platform_type;
      cResult[2] = fn;
      tmp2 = fn;
    }
  : (platform_type, location_stack) => {
      const ref = react.useRef(null);
      let items = [location_stack, platform_type];
      const items1 = [location_stack, platform_type];
      const callback = react.useCallback((index) => {
        let tmp8;
        if (null != index) {
          index = index.index;
          const obj = {
            location_stack: tmp3,
            previous_step: tmp8,
            current_step: index.routeNames[index],
            platform_type: tmp2,
          };
          tmp8 = undefined;
          const track = AnalyticsUtilsDefault.track;
          const ACCOUNT_LINK_STEP = AnalyticEvents.ACCOUNT_LINK_STEP;
          AnalyticsUtilsDefault;
          if (null != ref.current) {
            tmp8 = index.routeNames[ref.current];
          }
          track(ACCOUNT_LINK_STEP, obj);
          ref.current = index;
        }
      }, items);
      const effect = react.useEffect(() => {
        let tmp4;
        const items = ["landing"];
        const obj = { location_stack, previous_step: tmp4, current_step: items[0], platform_type };
        tmp4 = undefined;
        const track = AnalyticsUtilsDefault.track;
        const ACCOUNT_LINK_STEP = AnalyticEvents.ACCOUNT_LINK_STEP;
        AnalyticsUtilsDefault;
        if (null != ref.current) {
          tmp4 = items[ref.current];
        }
        track(ACCOUNT_LINK_STEP, obj);
        ref.current = 0;
      }, items1);
      return callback;
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/useAccountLinkStepTracking.tsx",
);

export const useAccountLinkStepTracking = tmp2;
