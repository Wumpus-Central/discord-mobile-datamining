// discord_app/modules/user_settings/defs/native/AccountIgnoredUsersSetting.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import EyeSlashIcon from "../../../../design/components/Icon/native/redesign/generated/EyeSlashIcon.tsx";
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
      let ignoredIDs;
      let tmp4;
      let tmp5;
      let tmp7;
      const obj = react;
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RelationshipStore];
        const fn = function s() {
          return ignoredIDs.getIgnoredIDs();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp4, tmp5);
      if (cResult[2] !== stateFromStoresArray.length) {
        const intl = intl2.intl;
        const obj2 = { numberOfIgnoredUsers: stateFromStoresArray.length };
        const formatResult = intl.format(intl2.t.rXUeOl, obj2);
        cResult[2] = stateFromStoresArray.length;
        cResult[3] = formatResult;
        tmp7 = formatResult;
      } else {
        tmp7 = cResult[3];
      }
      return tmp7;
    }
  : () => {
      let ignoredIDs;
      const items = [RelationshipStore];
      const obj = get_initialized;
      const stateFromStoresArray = obj.useStateFromStoresArray(items, () => ignoredIDs.getIgnoredIDs());
      const intl = intl2.intl;
      const obj2 = { numberOfIgnoredUsers: stateFromStoresArray.length };
      return intl.format(intl2.t.rXUeOl, obj2);
    };
let obj = {
  IconComponent: EyeSlashIcon.EyeSlashIcon,
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["93ZDWE"]);
  },
  useDescription: tmp2,
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  screen: {
    route: UserSettingsSections.IGNORED_USERS,
    getComponent() {
      return require("IgnoredUsersList").default;
    },
  },
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountIgnoredUsersSetting.tsx");

export default route;
