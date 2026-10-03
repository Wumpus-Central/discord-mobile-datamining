// discord_app/modules/user_profile/UserProfileAnalyticsContext.tsx
import c from "../../../_runtime/00576_c.js";
import v1 from "../../../_runtime/01266_v1.js";
import useAnalyticsLocationsDefault from "../app_analytics/useAnalyticsLocations.tsx";
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let context = noop.createContext(null);
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(10);
      ({ layout, userId, guildId, channelId, messageId, roleId, sourceSessionId, showGuildProfile } = arg0);
      const context = noop.useContext(closure_5);
      if (context != null) {
        const sessionId = context.sessionId;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const v4Result = v1.v4();
        cResult[0] = v4Result;
        let first = v4Result;
        const tmpResult = v1;
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
                if (cResult[6] === tmp4) {
                  if (cResult[7] === sourceSessionId) {
                    if (cResult[8] === userId) {
                      let tmp8 = cResult[9];
                    }
                    return tmp8;
                  }
                }
              }
            }
          }
        }
      }
      const obj2 = {
        sessionId: first,
        sourceSessionId,
        layout,
        userId,
        guildId,
        channelId,
        messageId,
        roleId,
        showGuildProfile: undefined === showGuildProfile || showGuildProfile,
      };
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
    }
  : (layout) => {
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
        const obj = {
          sessionId: v1.v4(),
          sourceSessionId: null,
          layout: null,
          userId: null,
          guildId: null,
          channelId: null,
          messageId: null,
          roleId: null,
          showGuildProfile: null,
        };
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
      const obj4 = {
        profileUi: "USER_PROFILE",
        timeToInteractiveMs: ref.current,
        timeToLoadMs: null,
        timeToFetchMs: null,
        viewStartedAt: null,
        fetchStartedAt: null,
        analyticsLocations: null,
      };
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
export const useCreateUserProfileAnalyticsContext = tmp2;
export const useUserProfileAnalyticsContext = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = context(576).c(18);
      context = noop.useContext(closure_5);
      analyticsLocations = analyticsLocations(6657)().analyticsLocations;
      if (cResult[0] === analyticsLocations) {
        if (cResult[1] === context) {
          let tmp3 = cResult[2];
        }
        if (cResult[3] === analyticsLocations) {
          if (cResult[4] === context) {
            let tmp4 = cResult[5];
          }
          if (cResult[6] === analyticsLocations) {
            if (cResult[7] === context) {
              let tmp6 = cResult[8];
            }
            if (cResult[9] === analyticsLocations) {
              if (cResult[10] === context) {
                let tmp8 = cResult[11];
              }
              if (cResult[12] === context) {
                if (cResult[13] === tmp3) {
                  if (cResult[14] === tmp4) {
                    if (cResult[15] === tmp6) {
                      if (cResult[16] === tmp8) {
                        let tmp9 = cResult[17];
                      }
                      return tmp9;
                    }
                  }
                }
              }
              class P {
                constructor(arg0) {
                  tmp = closure_0;
                  if (null != closure_0) {
                    tmp2 = arg0;
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    obj = closure_0(closure_2[3]);
                    obj1 = { analyticsLocations: null };
                    tmp5 = analyticsLocations;
                    obj1.analyticsLocations = analyticsLocations;
                    tmp6 = obj1;
                    tmp7 = tmp;
                    merged = Object.assign(tmp);
                    tmp9 = obj1;
                    tmp10 = arg0;
                    merged1 = Object.assign(arg0);
                    result = obj.trackUserProfileWishlistAction(obj1);
                  }
                  return;
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
                tmp = closure_0;
                if (null != closure_0) {
                  tmp2 = arg0;
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj = closure_0(closure_2[3]);
                  obj1 = { analyticsLocations: null };
                  tmp5 = analyticsLocations;
                  obj1.analyticsLocations = analyticsLocations;
                  tmp6 = obj1;
                  tmp7 = tmp;
                  merged = Object.assign(tmp);
                  tmp9 = obj1;
                  tmp10 = arg0;
                  merged1 = Object.assign(arg0);
                  result = obj.trackUserProfileWishlistAction(obj1);
                }
                return;
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
          const obj2 = { analyticsLocations };
          const merged = Object.assign(context);
          const merged1 = Object.assign(arg0);
          const result = UserProfileAnalyticsUtils.trackUserProfileAction(obj2);
        }
      };
      cResult[0] = analyticsLocations;
      cResult[1] = context;
      cResult[2] = fn;
      tmp3 = fn;
    }
  : () => {
      const context = noop.useContext(closure_5);
      analyticsLocations = analyticsLocations(6657)().analyticsLocations;
      let obj = {
        context,
        trackUserProfileAction: null,
        trackUserProfileEditAction: null,
        trackUserProfileEditSaved: null,
        trackUserProfileWishlistAction: null,
      };
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
