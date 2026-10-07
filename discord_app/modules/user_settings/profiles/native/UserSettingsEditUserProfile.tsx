// discord_app/modules/user_settings/profiles/native/UserSettingsEditUserProfile.tsx
import useAnalyticsLocationsDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import maybeFetchUserProfileDefault from "../../../user_profile/maybeFetchUserProfile.tsx";
import UserProfileEditFormDefault from "../../../user_profile/native/UserProfileEditForm.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditUserProfile.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let AnalyticsLocationProvider = stateFromStores;
      let tmp = dependencyMap;
      const cResult = stateFromStores(576).c(11);
      const obj = stateFromStores(576);
      const analyticsLocations = useAnalyticsLocationsDefault(
        AnalyticsLocationDefault.USER_SETTINGS_USER_PROFILE,
      ).analyticsLocations;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function u() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const result = AnalyticsLocationProvider(504);
      stateFromStores = result.useStateFromStores(tmp5, tmp6);
      if (cResult[2] !== stateFromStores) {
        class S {
          constructor() {
            obj = closure_0;
            if (null != closure_0) {
              tmp = closure_1;
              tmp2 = closure_2;
              num = 80;
              tmp3 = closure_1(closure_2[8]);
              tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), { dispatchWait: true });
            }
            return;
          }
        }
        const items1 = [stateFromStores];
        cResult[2] = stateFromStores;
        cResult[3] = S;
        cResult[4] = items1;
        let tmp10 = items1;
      } else {
        class S {
          constructor() {
            obj = closure_0;
            if (null != closure_0) {
              tmp = closure_1;
              tmp2 = closure_2;
              num = 80;
              tmp3 = closure_1(closure_2[8]);
              tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), { dispatchWait: true });
            }
            return;
          }
        }
        tmp10 = cResult[4];
      }
      const effect = noop.useEffect(S, tmp10);
      if (null == stateFromStores) {
        class S {
          constructor() {
            obj = closure_0;
            if (null != closure_0) {
              tmp = closure_1;
              tmp2 = closure_2;
              num = 80;
              tmp3 = closure_1(closure_2[8]);
              tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), { dispatchWait: true });
            }
            return;
          }
        }
      } else {
        class S {
          constructor() {
            obj = closure_0;
            if (null != closure_0) {
              tmp = closure_1;
              tmp2 = closure_2;
              num = 80;
              tmp3 = closure_1(closure_2[8]);
              tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), { dispatchWait: true });
            }
            return;
          }
        }
        if (cResult[5] === stateFromStores) {
          class S {
            constructor() {
              obj = closure_0;
              if (null != closure_0) {
                tmp = closure_1;
                tmp2 = closure_2;
                num = 80;
                tmp3 = closure_1(closure_2[8]);
                tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), { dispatchWait: true });
              }
              return;
            }
          }
          if (cResult[8] === analyticsLocations) {
            class S {
              constructor() {
                obj = closure_0;
                if (null != closure_0) {
                  tmp = closure_1;
                  tmp2 = closure_2;
                  num = 80;
                  tmp3 = closure_1(closure_2[8]);
                  tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), { dispatchWait: true });
                }
                return;
              }
            }
          }
          AnalyticsLocationProvider = AnalyticsLocationProvider(6664).AnalyticsLocationProvider;
          const obj2 = { value: analyticsLocations, children: tmp12 };
          tmp = <AnalyticsLocationProvider value={analyticsLocations}>{tmp12}</AnalyticsLocationProvider>;
          cResult[8] = analyticsLocations;
          cResult[9] = tmp12;
          cResult[10] = tmp;
        }
        const obj3 = { currentUser: stateFromStores };
        const merged = Object.assign(arg0);
        const tmp18 = jsx(UserProfileEditFormDefault, { currentUser: stateFromStores });
        cResult[5] = stateFromStores;
        cResult[6] = arg0;
        cResult[7] = tmp18;
        const tmp3Result = UserProfileEditFormDefault;
      }
    }
  : (arg0) => {
      let tmp3 = useAnalyticsLocationsDefault;
      const tmp4 = stateFromStores;
      const items = [UserStore];
      stateFromStores = stateFromStores(504).useStateFromStores(items, () => currentUser.getCurrentUser());
      const items1 = [stateFromStores];
      const effect = noop.useEffect(() => {
        if (null != stateFromStores) {
          maybeFetchUserProfileDefault(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {
            dispatchWait: true,
          });
        }
      }, items1);
      let tmp7 = null;
      if (null != stateFromStores) {
        const obj2 = {
          value: tmp3(AnalyticsLocationDefault.USER_SETTINGS_USER_PROFILE).analyticsLocations,
          children: null,
        };
        const obj3 = { currentUser: stateFromStores };
        const merged = Object.assign(arg0);
        obj2.children = jsx(UserProfileEditFormDefault, { currentUser: stateFromStores });
        tmp7 = jsx(tmp4(6664).AnalyticsLocationProvider, {
          value: tmp3(AnalyticsLocationDefault.USER_SETTINGS_USER_PROFILE).analyticsLocations,
          children: null,
        });
        const tmpResult = UserProfileEditFormDefault;
      }
      return tmp7;
    };
