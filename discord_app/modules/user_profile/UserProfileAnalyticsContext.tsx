// === Module 7861: UserProfileAnalyticsContext ===

// Module 7861 (UserProfileAnalyticsContext)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import v1 from "v1" /* 1266 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6657 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 7862 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let context = react.createContext(null);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channelId;
  let first;
  let guildId;
  let layout;
  let messageId;
  let roleId;
  let sessionId;
  let showGuildProfile;
  let sourceSessionId;
  let userId;
  const obj = react2;
  const cResult = obj.c(10);
  ({ layout, userId, guildId, channelId, messageId, roleId, sourceSessionId, showGuildProfile } = arg0);
  const context = react.useContext(closure_5);
  if (context != null) {
    sessionId = context.sessionId;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = v1;
    const v4Result = tmpResult.v4();
    cResult[0] = v4Result;
    first = v4Result;
  } else {
    first = cResult[0];
  }
  if (sourceSessionId == null) {
    sourceSessionId = sessionId;
  }
  if (cResult[1] === channelId) {
    if (cResult[2] === guildId) {
      if (cResult[3] === layout) {
        if (cResult[4] === messageId) {
          if (cResult[5] === roleId) {
            if (cResult[6] === (undefined === showGuildProfile || showGuildProfile)) {
              if (cResult[7] === sourceSessionId) {
                let tmp8;
                if (cResult[8] === userId) {
                  tmp8 = cResult[9];
                }
                return tmp8;
              }
            }
          }
        }
      }
    }
  }
  const obj2 = { sessionId: first, sourceSessionId, layout, userId, guildId, channelId, messageId, roleId, showGuildProfile: undefined === showGuildProfile || showGuildProfile };
  cResult[1] = channelId;
  cResult[2] = guildId;
  cResult[3] = layout;
  cResult[4] = messageId;
  cResult[5] = roleId;
  cResult[6] = undefined === showGuildProfile || showGuildProfile;
  cResult[7] = sourceSessionId;
  cResult[8] = userId;
  cResult[9] = obj2;
  tmp8 = obj2;
}) : ((layout) => {
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
  let obj = channelId;
  const context = channelId.useContext(roleId);
  let sessionId;
  if (context != null) {
    sessionId = context.sessionId;
  }
  const items = [sessionId, layout, userId, guildId, channelId, messageId, roleId, sourceSessionId, flag];
  return obj.useMemo(() => {
    let obj2;
    let tmp;
    const obj = { sessionId: obj2.v4(), sourceSessionId: tmp, layout, userId, guildId, channelId, messageId, roleId, showGuildProfile: flag };
    tmp = sourceSessionId;
    obj2 = v1;
    if (sourceSessionId == null) {
      tmp = sessionId;
    }
    return obj;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let analyticsLocations;
  let context;
  let obj = context(576);
  const cResult = obj.c(18);
  context = react.useContext(closure_5);
  analyticsLocations = analyticsLocations(6657)().analyticsLocations;
  if (cResult[0] === analyticsLocations) {
    let tmp3;
    if (cResult[1] === context) {
      tmp3 = cResult[2];
    }
    if (cResult[3] === analyticsLocations) {
      let tmp4;
      if (cResult[4] === context) {
        tmp4 = cResult[5];
      }
      if (cResult[6] === analyticsLocations) {
        let tmp6;
        if (cResult[7] === context) {
          tmp6 = cResult[8];
        }
        if (cResult[9] === analyticsLocations) {
          let tmp8;
          if (cResult[10] === context) {
            tmp8 = cResult[11];
          }
          if (cResult[12] === context) {
            if (cResult[13] === tmp3) {
              if (cResult[14] === tmp4) {
                if (cResult[15] === tmp6) {
                  let tmp9;
                  if (cResult[16] === tmp8) {
                    tmp9 = cResult[17];
                  }
                  return tmp9;
                }
              }
            }
          }
          class P {
            constructor(arg0) {
              if (null != context) {
                const obj = { analyticsLocations };
                const trackUserProfileWishlistAction = UserProfileAnalyticsUtils.trackUserProfileWishlistAction;
                UserProfileAnalyticsUtils;
                const merged = Object.assign(context);
                const merged1 = Object.assign(arg0);
                const result = trackUserProfileWishlistAction(obj);
              }
            }
          }
          tmp10[0] = context;
          tmp10[1] = tmp3;
          tmp10[2] = tmp4;
          tmp10[3] = tmp6;
          tmp10[4] = tmp8;
          cResult[12] = context;
          cResult[13] = tmp3;
          cResult[14] = tmp4;
          cResult[15] = tmp6;
          cResult[16] = tmp8;
          cResult[17] = tmp10;
          tmp9 = tmp10;
        }
        class P {
          constructor(arg0) {
            if (null != context) {
              const obj = { analyticsLocations };
              const trackUserProfileWishlistAction = UserProfileAnalyticsUtils.trackUserProfileWishlistAction;
              UserProfileAnalyticsUtils;
              const merged = Object.assign(context);
              const merged1 = Object.assign(arg0);
              const result = trackUserProfileWishlistAction(obj);
            }
          }
        }
        cResult[9] = analyticsLocations;
        cResult[10] = context;
        cResult[11] = P;
        tmp8 = P;
      }
      cResult[6] = analyticsLocations;
      cResult[7] = context;
      cResult[8] = tmp7;
      tmp6 = tmp7;
    }
    cResult[3] = analyticsLocations;
    cResult[4] = context;
    cResult[5] = tmp5;
    tmp4 = tmp5;
  }
  const fn = function o(arg0) {
    if (null != context) {
      const obj = { analyticsLocations };
      const trackUserProfileAction = UserProfileAnalyticsUtils.trackUserProfileAction;
      UserProfileAnalyticsUtils;
      const merged = Object.assign(context);
      const merged1 = Object.assign(arg0);
      const result = trackUserProfileAction(obj);
    }
  };
  cResult[0] = analyticsLocations;
  cResult[1] = context;
  cResult[2] = fn;
  tmp3 = fn;
}) : (() => {
  let analyticsLocations;
  let items;
  let items1;
  let items2;
  let items3;
  const context = react.useContext(closure_5);
  analyticsLocations = analyticsLocations(6657)().analyticsLocations;
  let obj = {
    context,
    trackUserProfileAction: react.useCallback((arg0) => {
      if (null != context) {
        const obj = { analyticsLocations };
        const trackUserProfileAction = UserProfileAnalyticsUtils.trackUserProfileAction;
        UserProfileAnalyticsUtils;
        const merged = Object.assign(context);
        const merged1 = Object.assign(arg0);
        const result = trackUserProfileAction(obj);
      }
    }, items),
    trackUserProfileEditAction: react.useCallback((arg0) => {
      if (null != context) {
        const obj = { analyticsLocations };
        const trackUserProfileEditAction = UserProfileAnalyticsUtils.trackUserProfileEditAction;
        UserProfileAnalyticsUtils;
        const merged = Object.assign(context);
        const merged1 = Object.assign(arg0);
        const result = trackUserProfileEditAction(obj);
      }
    }, items1),
    trackUserProfileEditSaved: react.useCallback((arg0) => {
      if (null != context) {
        const obj = { analyticsLocations };
        const trackUserProfileEditSaved = UserProfileAnalyticsUtils.trackUserProfileEditSaved;
        UserProfileAnalyticsUtils;
        const merged = Object.assign(context);
        const merged1 = Object.assign(arg0);
        const result = trackUserProfileEditSaved(obj);
      }
    }, items2),
    trackUserProfileWishlistAction: react.useCallback((arg0) => {
      if (null != context) {
        const obj = { analyticsLocations };
        const trackUserProfileWishlistAction = UserProfileAnalyticsUtils.trackUserProfileWishlistAction;
        UserProfileAnalyticsUtils;
        const merged = Object.assign(context);
        const merged1 = Object.assign(arg0);
        const result = trackUserProfileWishlistAction(obj);
      }
    }, items3)
  };
  items = [context, analyticsLocations];
  items1 = [context, analyticsLocations];
  items2 = [context, analyticsLocations];
  items3 = [context, analyticsLocations];
  return obj;
});
let result = size.fileFinishedImporting("modules/user_profile/UserProfileAnalyticsContext.tsx");

export const UserProfileAnalyticsProvider = (children) => {
  let isLoaded;
  let openedAt;
  let value;
  ({ value, openedAt } = children);
  ({ fetchStartedAt: importDefault, fetchEndedAt: dependencyMap, isLoaded } = children);
  children = children.children;
  if (isLoaded === undefined) {
    isLoaded = false;
  }
  let obj2;
  let obj = isLoaded;
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let ref = isLoaded.useRef(undefined);
  const ref1 = isLoaded.useRef(openedAt);
  if (ref1.current !== openedAt) {
    ref1.current = openedAt;
    ref.current = undefined;
  }
  obj2 = { analyticsLocations, value };
  ref = obj.useRef(obj2);
  const effect = obj.useEffect(() => {
    ref.current = obj2;
  });
  const items = [isLoaded];
  const effect1 = obj.useEffect(() => {
    let analyticsLocations;
    let diff;
    let diff1;
    let value;
    const timestamp = Date.now();
    const tmp3 = null == ref.current && null != openedAt;
    if (tmp3) {
      ref.current = timestamp - openedAt;
    }
    if (isLoaded) {
      ({ analyticsLocations, value } = ref.current);
      const obj = { action: "VIEW", analyticsLocations };
      const trackUserProfileAction = UserProfileAnalyticsUtils.trackUserProfileAction;
      UserProfileAnalyticsUtils;
      const merged = Object.assign(value);
      const result = trackUserProfileAction(obj);
      obj2 = { profileUi: "USER_PROFILE", timeToInteractiveMs: ref.current, timeToLoadMs: diff, timeToFetchMs: diff1, viewStartedAt: openedAt, fetchStartedAt: importDefault, analyticsLocations };
      diff = undefined;
      const maybeTrackUserProfileUiViewed = UserProfileAnalyticsUtils.maybeTrackUserProfileUiViewed;
      UserProfileAnalyticsUtils;
      if (null != openedAt) {
        diff = timestamp - openedAt;
      }
      diff1 = undefined;
      if (null != importDefault) {
        if (null != dependencyMap) {
          diff1 = dependencyMap - importDefault;
        }
      }
      const merged1 = Object.assign(value);
      const result1 = maybeTrackUserProfileUiViewed(obj2);
    }
  }, items);
  return ref(obj2.Provider, { value, children });
};
export const useCreateUserProfileAnalyticsContext = tmp2;
export const useUserProfileAnalyticsContext = tmp3;