// discord_app/modules/user_settings/defs/native/AccountIgnoredUsersSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(10629);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAccountIgnoredUsersSettingDescription() {
      const cResult = c.c(4);
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
      const stateFromStoresArray = initialize.useStateFromStoresArray(tmp4, tmp5);
      if (cResult[2] !== stateFromStoresArray.length) {
        const intl = util.intl;
        const obj2 = { numberOfIgnoredUsers: stateFromStoresArray.length };
        const formatResult = intl.format(util.t.rXUeOl, obj2);
        cResult[2] = stateFromStoresArray.length;
        cResult[3] = formatResult;
        let tmp7 = formatResult;
      } else {
        tmp7 = cResult[3];
      }
      return tmp7;
    }
  : function useAccountIgnoredUsersSettingDescription() {
      const items = [RelationshipStore];
      const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => ignoredIDs.getIgnoredIDs());
      const intl = util.intl;
      return intl.format(util.t.rXUeOl, { numberOfIgnoredUsers: stateFromStoresArray.length });
    };
const route = SettingBuilders.createRoute({
  IconComponent: fn(6648).EyeSlashIcon,
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["93ZDWE"]);
  },
  useDescription: ReactCompilerGating.isReactCompilerEnabled()
    ? function useAccountIgnoredUsersSettingDescription() {
        const cResult = c.c(4);
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
        const stateFromStoresArray = initialize.useStateFromStoresArray(tmp4, tmp5);
        if (cResult[2] !== stateFromStoresArray.length) {
          const intl = util.intl;
          const obj2 = { numberOfIgnoredUsers: stateFromStoresArray.length };
          const formatResult = intl.format(util.t.rXUeOl, obj2);
          cResult[2] = stateFromStoresArray.length;
          cResult[3] = formatResult;
          let tmp7 = formatResult;
        } else {
          tmp7 = cResult[3];
        }
        return tmp7;
      }
    : function useAccountIgnoredUsersSettingDescription() {
        const items = [RelationshipStore];
        const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => ignoredIDs.getIgnoredIDs());
        const intl = util.intl;
        return intl.format(util.t.rXUeOl, { numberOfIgnoredUsers: stateFromStoresArray.length });
      },
  parent: fn(7974).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  screen: {
    route: fn(1085).UserSettingsSections.IGNORED_USERS,
    getComponent() {
      return require("IgnoredUsersList").default;
    },
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountIgnoredUsersSetting.tsx");

export default route;
