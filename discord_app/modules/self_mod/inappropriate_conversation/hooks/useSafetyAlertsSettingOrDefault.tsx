// discord_app/modules/self_mod/inappropriate_conversation/hooks/useSafetyAlertsSettingOrDefault.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import useUserIsTeen from "../../hooks/useUserIsTeen.tsx";
import InappropriateConversationsDefaultOn from "../InappropriateConversationsDefaultOn.tsx";
import UserSettingsProtoStore from "../../../user_settings/UserSettingsProtoStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let settings;
      let tmp4;
      let tmp5;
      let tmp9;
      const obj = react;
      const cResult = obj.c(3);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      const tmpResult3 = useUserIsTeen;
      let userIsTeen = tmpResult3.useUserIsTeen();
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "useSafetyAlertsSettingOrDefault" };
        cResult[2] = obj2;
        tmp9 = obj2;
      } else {
        tmp9 = cResult[2];
      }
      let tmp10 = !userIsTeen;
      const tmpResult4 = InappropriateConversationsDefaultOn;
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
          let flag = true;
          userIsTeen = true === isStaffResult;
        }
        if (userIsTeen) {
          userIsTeen = stateFromStores;
        }
        tmp11 = userIsTeen;
      }
      return tmp11;
    }
  : () => {
      let settings;
      const currentUser = UserStore.getCurrentUser();
      const items = [UserSettingsProtoStore];
      const obj2 = get_initialized;
      const stateFromStores = obj2.useStateFromStores(items, () => {
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
      const obj3 = useUserIsTeen;
      let userIsTeen = obj3.useUserIsTeen();
      let tmp3 = !userIsTeen;
      const obj4 = InappropriateConversationsDefaultOn;
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
          let flag = true;
          userIsTeen = true === isStaffResult;
        }
        if (userIsTeen) {
          userIsTeen = stateFromStores;
        }
        tmp4 = userIsTeen;
      }
      return tmp4;
    };
const result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/hooks/useSafetyAlertsSettingOrDefault.tsx",
);

export const useSafetyAlertsSettingOrDefault = tmp2;
