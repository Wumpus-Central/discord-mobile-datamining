// === Module 14802: ADD_CONNECTIONS_SHEET_SENTINEL ===

// Module 14802 (ADD_CONNECTIONS_SHEET_SENTINEL)
import ThemesDefault from "Themes" /* 709 */;
import useThemeDefault from "useTheme" /* 4413 */;
import useConnectionFilteredAppIdentitiesDefault from "useConnectionFilteredAppIdentities" /* 12751 */;
import EmptyStateCardDefault from "EmptyStateCard" /* 14803 */;
import closure_3 from "noop" /* 19 */;
import { ActivityIndicator } from "get ActivityIndicator" /* 17 */;
import closure_5 from "recomputeFromAppTokens" /* 5484 */;
import { FetchState } from "recomputeFromAppTokens" /* 5484 */;
import closure_7 from "fetchFingerprint" /* 1215 */;
import closure_8 from "set" /* 5234 */;
import closure_9 from "_getSystemLocale" /* 1995 */;
import { AnalyticsLocations } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { flex: { flex: 1 }, form: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, padding: ThemesDefault.space.PX_16 };
createCacheKey[1] = createCacheKey;
let closure_13 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/UserSettingsConnections.tsx");

export const ADD_CONNECTIONS_SHEET_SENTINEL = -1;
export const UserSettingsConnections = function UserSettingsConnections(selectedPlatformType) {
  selectedPlatformType = selectedPlatformType.selectedPlatformType;
  importDefault = undefined;
  dependencyMap = undefined;
  let authorizedAppsFetchState;
  let authorizedApps;
  const tmp = callback3();
  importDefault = useThemeDefault();
  let obj = selectedPlatformType(586);
  const items = [closure_9];
  dependencyMap = obj.useStateFromStores(items, () => locale.locale);
  obj1 = selectedPlatformType(586);
  const items1 = [closure_8];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ fetching: closure_8.isFetching(), accounts: closure_8.getAccounts() }));
  ({ accounts, fetching } = stateFromStoresObject);
  const items2 = [closure_5];
  const stateFromStoresObject1 = selectedPlatformType(586).useStateFromStoresObject(items2, () => ({ authorizedAppsFetchState: authStore.getFetchState(), authorizedApps: authStore.getNewestTokensForNonChildrenApplications() }));
  authorizedAppsFetchState = stateFromStoresObject1.authorizedAppsFetchState;
  authorizedApps = stateFromStoresObject1.authorizedApps;
  const obj3 = selectedPlatformType(586);
  const tmp2 = importDefault;
  const tmp7Result = useConnectionFilteredAppIdentitiesDefault(id.getId(), { includeHidden: true });
  const prop = tmp7Result.filteredAppIdentities;
  const items3 = [authorizedAppsFetchState];
  const effect = authorizedAppsFetchState.useEffect(() => {
    if (authorizedAppsFetchState === closure_1_6.NOT_FETCHED) {
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
      if (-1 === tmp) {
        callback(paths[15]).openLazy(selectedPlatformType(paths[17])(paths[16], paths.paths), "AddConnection");
        const obj2 = callback(paths[15]);
      } else {
        const obj = { platformType: null, location: null };
        obj[0] = tmp;
        obj[1] = closure_1_10.USER_SETTINGS;
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
      obj = { spacing: 16, children: null };
      const items5 = [
        prop.map((application_id) => {
              closure_0 = application_id;
              const obj = { identity: application_id, token: authorizedApps.find((application) => application.application.id === application_id.application_id) };
              return closure_1_11(callback(paths[22]), obj, "" + application_id.application_id + "-" + application_id.provider_issued_user_id);
            }),
        accounts.map((account) => closure_1_11(callback(paths[23]), { theme: callback, locale: paths, account }, account.id))
      ];
      obj[1] = items5;
      obj[1] = callback2(tmp4(4927).Stack, obj);
      tmp14 = callback(tmp4(8376).Form, obj);
    }
    return tmp14;
  }
  obj1 = { style: tmp.flex, size: "large" };
  tmp14 = callback(authorizedApps, obj1);
};