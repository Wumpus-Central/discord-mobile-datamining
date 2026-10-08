// discord_app/modules/self_mod/inappropriate_conversation/hooks/useSafetyAlertsSettingOrDefault.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import useUserIsTeen from "../../hooks/useUserIsTeen.tsx";
import UserSettingsProtoStore from "../../../user_settings/UserSettingsProtoStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/hooks/useSafetyAlertsSettingOrDefault.tsx",
);

export const useSafetyAlertsSettingOrDefault = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSafetyAlertsSettingOrDefault() {
      const cResult = c.c(3);
      const currentUser = UserStore.getCurrentUser();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserSettingsProtoStore];
        const fn = function o() {
          const privacy = settings.settings.privacy;
          let flag;
          if (privacy != null) {
            if (privacy.inappropriateConversationWarnings != null) {
              flag = iter.value;
            }
          }
          if (flag == null) {
            flag = true;
          }
          return flag;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      const tmpResult = initialize;
      let userIsTeen = useUserIsTeen.useUserIsTeen();
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "useSafetyAlertsSettingOrDefault" };
        cResult[2] = obj2;
        let tmp9 = obj2;
      } else {
        tmp9 = cResult[2];
      }
      const tmpResult3 = useUserIsTeen;
      let tmp10 = !userIsTeen;
      if (userIsTeen) {
        tmp10 = !tmpResult4.useIsEligibleForInappropriateConversationDefaultOn(tmp9);
      }
      let tmp11 = !tmp10;
      if (tmp10) {
        if (!userIsTeen) {
          let isStaffResult;
          if (currentUser != null) {
            isStaffResult = currentUser.isStaff();
          }
          userIsTeen = true === isStaffResult;
        }
        if (userIsTeen) {
          userIsTeen = stateFromStores;
        }
        tmp11 = userIsTeen;
      }
      return tmp11;
    }
  : function useSafetyAlertsSettingOrDefault() {
      const currentUser = UserStore.getCurrentUser();
      const items = [UserSettingsProtoStore];
      const stateFromStores = initialize.useStateFromStores(items, () => {
        const privacy = settings.settings.privacy;
        let flag;
        if (privacy != null) {
          if (privacy.inappropriateConversationWarnings != null) {
            flag = iter.value;
          }
        }
        if (flag == null) {
          flag = true;
        }
        return flag;
      });
      let userIsTeen = useUserIsTeen.useUserIsTeen();
      let tmp3 = !userIsTeen;
      if (userIsTeen) {
        tmp3 = !obj4.useIsEligibleForInappropriateConversationDefaultOn({
          location: "useSafetyAlertsSettingOrDefault",
        });
      }
      let tmp4 = !tmp3;
      if (tmp3) {
        if (!userIsTeen) {
          let isStaffResult;
          if (currentUser != null) {
            isStaffResult = currentUser.isStaff();
          }
          userIsTeen = true === isStaffResult;
        }
        if (userIsTeen) {
          userIsTeen = stateFromStores;
        }
        tmp4 = userIsTeen;
      }
      return tmp4;
    };
