// discord_app/modules/user_settings/defs/native/AccountBlockedUsersSetting.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import DenyIcon from "../../../../design/components/Icon/native/redesign/generated/DenyIcon.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let blockedIDs;
      let tmp4;
      let tmp5;
      let tmp8;
      const obj = react;
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RelationshipStore];
        const fn = function o() {
          return "" + blockedIDs.getBlockedIDs().length;
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
      if (cResult[2] !== stateFromStores) {
        const intl = intl2.intl;
        const obj2 = { numberOfBlockedUsers: stateFromStores };
        const formatResult = intl.format(intl2.t["r91W/h"], obj2);
        cResult[2] = stateFromStores;
        cResult[3] = formatResult;
        tmp8 = formatResult;
      } else {
        tmp8 = cResult[3];
      }
      return tmp8;
    }
  : () => {
      let blockedIDs;
      const items = [RelationshipStore];
      const obj = get_initialized;
      const numberOfBlockedUsers = obj.useStateFromStores(items, () => "" + blockedIDs.getBlockedIDs().length);
      const intl = intl2.intl;
      return intl.format(intl2.t["r91W/h"], { numberOfBlockedUsers });
    };
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.PFOUKW);
  },
  useDescription: tmp2,
  IconComponent: DenyIcon.DenyIcon,
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  screen: {
    route: UserSettingsSections.BLOCKED_USERS_V2,
    getComponent() {
      return require("BlockedUsersListV2").default;
    },
  },
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountBlockedUsersSetting.tsx");

export default route;
export const AccountBlockedUsersSettingV2 = route;
