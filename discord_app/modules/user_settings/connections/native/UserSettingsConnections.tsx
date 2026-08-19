// discord_app/modules/user_settings/connections/native/UserSettingsConnections.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import useConnectionFilteredAppIdentitiesDefault from "../../../user_application_identity/hooks/useConnectionFilteredAppIdentities.tsx";
import EmptyStateCardDefault from "ConnectionsEmptyStateUpsell.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { ActivityIndicator } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import recomputeFromAppTokens from "../../../oauth2/AuthorizedAppsStore.tsx";
import { FetchState } from "../../../oauth2/AuthorizedAppsStore.tsx";
import fetchFingerprint from "../../../../stores/AuthenticationStore.tsx";
import set from "../../../../stores/ConnectedAccountsStore.tsx";
import _getSystemLocale from "../../LocaleStore.tsx";
import { AnalyticsLocations } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, padding: ThemesDefault.space.PX_16 };
createCacheKey[1] = createCacheKey;
let closure_13 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_settings/connections/native/UserSettingsConnections.tsx");

export const ADD_CONNECTIONS_SHEET_SENTINEL = -1;
export const UserSettingsConnections = function UserSettingsConnections(selectedPlatformType) {
  selectedPlatformType = selectedPlatformType.selectedPlatformType;
  const tmp = callback3();
  importDefault = useThemeDefault();
  let obj = selectedPlatformType(589);
  const items = [closure_9];
  dependencyMap = obj.useStateFromStores(items, () => locale.locale);
  obj1 = selectedPlatformType(589);
  const items1 = [closure_8];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ fetching: closure_8.isFetching(), accounts: closure_8.getAccounts() }));
  ({ accounts, fetching } = stateFromStoresObject);
  const items2 = [closure_5];
  const stateFromStoresObject1 = selectedPlatformType(589).useStateFromStoresObject(items2, () => ({ authorizedAppsFetchState: authStore.getFetchState(), authorizedApps: authStore.getNewestTokensForNonChildrenApplications() }));
  const authorizedAppsFetchState = stateFromStoresObject1.authorizedAppsFetchState;
  const authorizedApps = stateFromStoresObject1.authorizedApps;
  const obj3 = selectedPlatformType(589);
  const tmp7Result = useConnectionFilteredAppIdentitiesDefault(id.getId(), { includeHidden: true });
  const prop = tmp7Result.filteredAppIdentities;
  const items3 = [authorizedAppsFetchState];
  const effect = authorizedAppsFetchState.useEffect(() => {
    if (authorizedAppsFetchState === FetchState.NOT_FETCHED) {
      const response = callback(paths[13]).fetch();
      const obj = callback(paths[13]);
    }
  }, items3);
  const effect1 = authorizedAppsFetchState.useEffect(() => {
    const response = callback(paths[14]).fetch();
  }, []);
  const items4 = [selectedPlatformType];
  const effect2 = authorizedAppsFetchState.useEffect(() => {
    if (null != selectedPlatformType) {
      if (-1 === selectedPlatformType) {
        callback(paths[15]).openLazy(selectedPlatformType(paths[17])(paths[16], paths.paths), "AddConnection");
        const obj2 = callback(paths[15]);
      } else {
        const obj = { platformType: null, location: null };
        obj[0] = selectedPlatformType;
        obj[1] = AnalyticsLocations.USER_SETTINGS;
        callback(paths[18])(obj);
      }
    }
  }, items4);
  if (!fetching) {
    if (!tmp7Result.isLoading) {
      if (0 === accounts.length) {
        if (0 === prop.length) {
          let tmp14 = callback(EmptyStateCardDefault, {});
        }
      }
      obj = { style: null, children: null };
      obj[0] = tmp.form;
      const items5 = [
        prop.map((item, index) => {
              closure_0 = item;
              const obj = { identity: item, token: authorizedApps.find((item, index) => item.application.id === item.application_id) };
              return closure_1_11(callback(paths[21]), obj, "" + item.application_id + "-" + item.provider_issued_user_id);
            }),

      ];
      obj = { spacing: 16, children: null };
      obj[1] = accounts.map((item, index) => closure_1_11(callback(paths[23]), { theme: callback, locale: paths, account: item }, item.id));
      items5[1] = callback(tmp4(4733).Stack, obj);
      obj[1] = items5;
      tmp14 = callback2(tmp4(8083).Form, obj);
    }
    return tmp14;
  }
  obj1 = { style: tmp.flex, size: "large" };
  tmp14 = callback(authorizedApps, obj1);
};