// === Module 14870: useAccountLinkStepTracking ===

// Module 14870 (useAccountLinkStepTracking)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import noop from "module_19" /* 19 */;

const AnalyticEvents = fn(1072).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/useAccountLinkStepTracking.tsx");

export function useAccountLinkStepTracking(CRUNCHYROLL, locationStack, arg2) {
  const platform_type = CRUNCHYROLL;
  const location_stack = locationStack;
  let str = arg2;
  if (arg2 === undefined) {
    str = "landing";
  }
  str.useRef(null);
  items = [locationStack, CRUNCHYROLL];
  const items1 = [locationStack, CRUNCHYROLL, str];
  const callback = str.useCallback((arg0) => {
    if (null != arg0) {
      const name = arg0.routes[arg0.index].name;
      const obj2 = { location_stack: tmp3, previous_step: null, current_step: null, platform_type: null };
      const current = ref.current;
      obj2.previous_step = current;
      obj2.current_step = name;
      obj2.platform_type = tmp2;
      AnalyticsUtilsDefault.track(AnalyticEvents.ACCOUNT_LINK_STEP, obj2);
      ref.current = name;
    }
  }, items);
  const effect = str.useEffect(() => {
    items = [{ name: str }];
    const name = items[0].name;
    const obj3 = { location_stack, previous_step: null, current_step: name, platform_type };
    const current = ref.current;
    obj3.previous_step = current;
    AnalyticsUtilsDefault.track(AnalyticEvents.ACCOUNT_LINK_STEP, obj3);
    ref.current = name;
    const obj = { name: str };
  }, items1);
  return callback;
}