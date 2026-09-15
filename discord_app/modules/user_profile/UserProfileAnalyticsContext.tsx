// === Module 8310: UserProfileAnalyticsContext ===

// Module 8310 (UserProfileAnalyticsContext)
import v1 from "v1" /* 1255 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7269 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8311 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let context = noop.createContext(null);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/UserProfileAnalyticsContext.tsx");

export const UserProfileAnalyticsProvider = (children) => {
  ({ value, openedAt } = children);
  ({ fetchStartedAt: importDefault, fetchEndedAt: dependencyMap, isLoaded } = children);
  if (isLoaded === undefined) {
    isLoaded = false;
  }
  let obj2;
  let ref = isLoaded.useRef(undefined);
  const ref1 = isLoaded.useRef(openedAt);
  if (ref1.current !== openedAt) {
    ref1.current = openedAt;
    ref.current = undefined;
  }
  obj2 = { analyticsLocations: useAnalyticsLocationsDefault().analyticsLocations, value };
  ref = obj.useRef(obj2);
  const effect = obj.useEffect(() => {
    closure_6.current = obj2;
  });
  const items = [isLoaded];
  const effect1 = obj.useEffect(() => {
    const timestamp = Date.now();
    let tmp3 = null == ref.current;
    if (tmp3) {
      tmp3 = null != openedAt;
    }
    if (tmp3) {
      ref.current = timestamp - openedAt;
    }
    if (isLoaded) {
      ({ analyticsLocations, value } = ref.current);
      obj2 = { action: "VIEW", analyticsLocations };
      const merged = Object.assign(value);
      const result = UserProfileAnalyticsUtils.trackUserProfileAction(obj2);
      const obj4 = { profileUi: "USER_PROFILE", timeToInteractiveMs: ref.current, timeToLoadMs: null, timeToFetchMs: null, viewStartedAt: null, fetchStartedAt: null, analyticsLocations: null };
      let diff;
      if (null != openedAt) {
        diff = timestamp - openedAt;
      }
      obj4.timeToLoadMs = diff;
      let diff1;
      if (null != importDefault) {
        if (null != dependencyMap) {
          diff1 = dependencyMap - importDefault;
        }
      }
      obj4.timeToFetchMs = diff1;
      obj4.viewStartedAt = openedAt;
      obj4.fetchStartedAt = importDefault;
      obj4.analyticsLocations = analyticsLocations;
      const merged1 = Object.assign(value);
      const result1 = UserProfileAnalyticsUtils.maybeTrackUserProfileUiViewed(obj4);
    }
  }, items);
  return ref(obj2.Provider, { value, children: children.children });
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
  const context = channelId.useContext(roleId);
  let sessionId;
  if (context != null) {
    sessionId = context.sessionId;
  }
  const items = [sessionId, layout, userId, guildId, channelId, messageId, roleId, sourceSessionId, flag];
  return channelId.useMemo(() => {
    const obj = { sessionId: v1.v4(), sourceSessionId: null, layout: null, userId: null, guildId: null, channelId: null, messageId: null, roleId: null, showGuildProfile: null };
    let tmp = sourceSessionId;
    if (sourceSessionId == null) {
      tmp = sessionId;
    }
    obj.sourceSessionId = tmp;
    obj.layout = layout;
    obj.userId = userId;
    obj.guildId = guildId;
    obj.channelId = channelId;
    obj.messageId = messageId;
    obj.roleId = roleId;
    obj.showGuildProfile = flag;
    return obj;
  }, items);
};
export const useUserProfileAnalyticsContext = function useUserProfileAnalyticsContext() {
  const context = noop.useContext(closure_5);
  analyticsLocations = analyticsLocations(7269)().analyticsLocations;
  let obj = { context, trackUserProfileAction: null, trackUserProfileEditAction: null, trackUserProfileEditSaved: null, trackUserProfileWishlistAction: null };
  const items = [context, analyticsLocations];
  obj.trackUserProfileAction = noop.useCallback((arg0) => {
    if (null != context) {
      const obj2 = { analyticsLocations };
      const merged = Object.assign(context);
      const merged1 = Object.assign(arg0);
      const result = UserProfileAnalyticsUtils.trackUserProfileAction(obj2);
    }
  }, items);
  const items1 = [context, analyticsLocations];
  obj.trackUserProfileEditAction = noop.useCallback((arg0) => {
    if (null != context) {
      const obj2 = { analyticsLocations };
      const merged = Object.assign(context);
      const merged1 = Object.assign(arg0);
      const result = UserProfileAnalyticsUtils.trackUserProfileEditAction(obj2);
    }
  }, items1);
  const items2 = [context, analyticsLocations];
  obj.trackUserProfileEditSaved = noop.useCallback((arg0) => {
    if (null != context) {
      const obj2 = { analyticsLocations };
      const merged = Object.assign(context);
      const merged1 = Object.assign(arg0);
      const result = UserProfileAnalyticsUtils.trackUserProfileEditSaved(obj2);
    }
  }, items2);
  const items3 = [context, analyticsLocations];
  obj.trackUserProfileWishlistAction = noop.useCallback((arg0) => {
    if (null != context) {
      const obj2 = { analyticsLocations };
      const merged = Object.assign(context);
      const merged1 = Object.assign(arg0);
      const result = UserProfileAnalyticsUtils.trackUserProfileWishlistAction(obj2);
    }
  }, items3);
  return obj;
};