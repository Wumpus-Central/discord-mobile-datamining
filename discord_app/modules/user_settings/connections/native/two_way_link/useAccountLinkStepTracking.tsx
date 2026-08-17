// discord_app/modules/user_settings/connections/native/two_way_link/useAccountLinkStepTracking.tsx
import closure_2 from "noop" /* 19 */;
import { AnalyticEvents } from "ME" /* 676 */;

const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/useAccountLinkStepTracking.tsx");

export const useAccountLinkStepTracking = function useAccountLinkStepTracking(CRUNCHYROLL, locationStack) {
  closure_0 = CRUNCHYROLL;
  closure_1 = locationStack;
  React = React.useRef(null);
  let items = [locationStack, CRUNCHYROLL];
  const items1 = [locationStack, CRUNCHYROLL];
  const callback = React.useCallback((index) => {
    if (null != index) {
      index = index.index;
      let obj = CRUNCHYROLL(locationStack[2]);
      obj = { location_stack: null, previous_step: null, current_step: null, platform_type: null };
      obj[0] = tmp3;
      let tmp7;
      if (null != tmp.current) {
        tmp7 = index.routeNames[tmp.current];
      }
      obj[1] = tmp7;
      obj[2] = index.routeNames[index];
      obj[3] = tmp2;
      obj.track(closure_1_3.ACCOUNT_LINK_STEP, obj);
      tmp.current = index;
    }
  }, items);
  const effect = React.useEffect(() => {
    const items = ["landing"];
    let obj = CRUNCHYROLL(locationStack[2]);
    obj = { location_stack: locationStack, previous_step: null, current_step: null, platform_type: null };
    let tmp3;
    if (null != ref.current) {
      tmp3 = items[tmp.current];
    }
    obj[1] = tmp3;
    obj[2] = items[0];
    obj[3] = CRUNCHYROLL;
    obj.track(closure_1_3.ACCOUNT_LINK_STEP, obj);
    ref.current = 0;
  }, items1);
  return callback;
};