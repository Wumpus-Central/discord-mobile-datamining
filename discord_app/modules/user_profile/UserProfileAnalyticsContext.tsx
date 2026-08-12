// discord_app/modules/user_profile/UserProfileAnalyticsContext.tsx
import importAllResult from "noop";
import { jsx } from "jsxProd";
import { context } from "../app_analytics/useAnalyticsLocations.tsx";

const require = arg1;
let c3 = importAllResult;
let context = importAllResult.createContext(null);
let result = require("context").fileFinishedImporting("modules/user_profile/UserProfileAnalyticsContext.tsx");

export const UserProfileAnalyticsProvider = (children) => {
  let dependencyMap;
  let importDefault;
  let isLoaded;
  let openedAt;
  let value;
  ({ value, openedAt } = children);
  ({ fetchStartedAt: importDefault, fetchEndedAt: dependencyMap, isLoaded } = children);
  if (isLoaded === undefined) {
    isLoaded = false;
  }
  let ref;
  let obj;
  let closure_6;
  obj = isLoaded;
  ref = isLoaded.useRef(undefined);
  const ref1 = isLoaded.useRef(openedAt);
  if (ref1.current !== openedAt) {
    ref1.current = openedAt;
    ref.current = undefined;
  }
  obj = { analyticsLocations: context().analyticsLocations, value };
  closure_6 = obj.useRef(obj);
  const effect = obj.useEffect(() => {
    closure_6.current = obj;
  });
  const items = [isLoaded];
  const effect1 = obj.useEffect(() => {
    let analyticsLocations;
    let value;
    const timestamp = Date.now();
    let tmp3 = null == ref.current;
    if (tmp3) {
      tmp3 = null != openedAt;
    }
    if (tmp3) {
      tmp2.current = timestamp - openedAt;
    }
    if (isLoaded) {
      ({ analyticsLocations, value } = ref.current);
      let obj = openedAt(outer1_2[3]);
      obj = { action: "VIEW", analyticsLocations: null };
      obj[1] = analyticsLocations;
      const merged = Object.assign(value);
      const result = obj.trackUserProfileAction(obj);
      obj = { profileUi: "USER_PROFILE", timeToInteractiveMs: null, timeToLoadMs: null, timeToFetchMs: null, viewStartedAt: null, fetchStartedAt: null, analyticsLocations: null };
      obj[1] = tmp2.current;
      let diff;
      if (null != openedAt) {
        diff = timestamp - tmp13;
      }
      obj[2] = diff;
      let diff1;
      if (null != closure_1) {
        if (null != closure_2) {
          diff1 = closure_2 - tmp15;
        }
      }
      obj[3] = diff1;
      obj[4] = openedAt;
      obj[5] = closure_1;
      obj[6] = analyticsLocations;
      const merged1 = Object.assign(value);
      const result1 = openedAt(outer1_2[3]).maybeTrackUserProfileUiViewed(obj);
      const obj3 = openedAt(outer1_2[3]);
    }
  }, items);
  return ref(obj.Provider, { value, children: children.children });
};
export const useCreateUserProfileAnalyticsContext = function useCreateUserProfileAnalyticsContext(layout) {
  layout = layout.layout;
  const userId = layout.userId;
  const guildId = layout.guildId;
  const channelId = layout.channelId;
  const messageId = layout.messageId;
  const roleId = layout.roleId;
  const sourceSessionId = layout.sourceSessionId;
  let flag = layout.showGuildProfile;
  if (flag === undefined) {
    flag = true;
  }
  let sessionId;
  const context = channelId.useContext(roleId);
  sessionId = undefined;
  if (context != null) {
    sessionId = context.sessionId;
  }
  const items = [sessionId, layout, userId, guildId, channelId, messageId, roleId, sourceSessionId, flag];
  return channelId.useMemo(() => {
    const obj = { sessionId: null, sourceSessionId: null, layout: null, userId: null, guildId: null, channelId: null, messageId: null, roleId: null, showGuildProfile: null };
    obj[0] = layout(guildId[4]).v4();
    let tmp = sourceSessionId;
    if (sourceSessionId == null) {
      tmp = sessionId;
    }
    obj[1] = tmp;
    obj[2] = layout;
    obj[3] = userId;
    obj[4] = guildId;
    obj[5] = channelId;
    obj[6] = messageId;
    obj[7] = roleId;
    obj[8] = flag;
    return obj;
  }, items);
};
export const useUserProfileAnalyticsContext = function useUserProfileAnalyticsContext() {
  const context = importAllResult.useContext(closure_5);
  analyticsLocations = analyticsLocations(5767)().analyticsLocations;
  const items = [context, analyticsLocations];
  const items1 = [context, analyticsLocations];
  const items2 = [context, analyticsLocations];
  const items3 = [context, analyticsLocations];
  return {
    context,
    trackUserProfileAction: importAllResult.useCallback((arg0) => {
      if (null != context) {
        let obj = context(outer1_2[3]);
        obj = { analyticsLocations: null };
        obj[0] = analyticsLocations;
        const merged = Object.assign(tmp);
        const merged1 = Object.assign(arg0);
        const result = obj.trackUserProfileAction(obj);
      }
    }, items),
    trackUserProfileEditAction: importAllResult.useCallback((arg0) => {
      if (null != context) {
        let obj = context(outer1_2[3]);
        obj = { analyticsLocations: null };
        obj[0] = analyticsLocations;
        const merged = Object.assign(tmp);
        const merged1 = Object.assign(arg0);
        const result = obj.trackUserProfileEditAction(obj);
      }
    }, items1),
    trackUserProfileEditSaved: importAllResult.useCallback((arg0) => {
      if (null != context) {
        let obj = context(outer1_2[3]);
        obj = { analyticsLocations: null };
        obj[0] = analyticsLocations;
        const merged = Object.assign(tmp);
        const merged1 = Object.assign(arg0);
        const result = obj.trackUserProfileEditSaved(obj);
      }
    }, items2),
    trackUserProfileWishlistAction: importAllResult.useCallback((arg0) => {
      if (null != context) {
        let obj = context(outer1_2[3]);
        obj = { analyticsLocations: null };
        obj[0] = analyticsLocations;
        const merged = Object.assign(tmp);
        const merged1 = Object.assign(arg0);
        const result = obj.trackUserProfileWishlistAction(obj);
      }
    }, items3)
  };
};