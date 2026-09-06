// === Module 9269: useAccountLinkStepTracking ===

// Module 9269 (useAccountLinkStepTracking)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import noop from "module_19" /* 19 */;

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/useAccountLinkStepTracking.tsx");

export const useAccountLinkStepTracking = function useAccountLinkStepTracking(CRUNCHYROLL, locationStack) {
  const platform_type = CRUNCHYROLL;
  const location_stack = locationStack;
  noop = noop.useRef(null);
  let items = [locationStack, CRUNCHYROLL];
  const items1 = [locationStack, CRUNCHYROLL];
  const callback = noop.useCallback((index) => {
    if (null != index) {
      index = index.index;
      const obj = { location_stack: tmp3, previous_step: null, current_step: null, platform_type: null };
      let tmp7;
      if (null != ref.current) {
        tmp7 = index.routeNames[ref.current];
      }
      obj.previous_step = tmp7;
      obj.current_step = index.routeNames[index];
      obj.platform_type = tmp2;
      obj.track(AnalyticEvents.ACCOUNT_LINK_STEP, obj);
      ref.current = index;
    }
  }, items);
  const effect = noop.useEffect(() => {
    const items = ["landing"];
    const obj = { location_stack, previous_step: null, current_step: null, platform_type: null };
    let tmp3;
    if (null != ref.current) {
      tmp3 = items[ref.current];
    }
    obj.previous_step = tmp3;
    obj.current_step = items[0];
    obj.platform_type = platform_type;
    obj.track(AnalyticEvents.ACCOUNT_LINK_STEP, obj);
    ref.current = 0;
  }, items1);
  return callback;
};