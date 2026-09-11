// === Module 15013: UserSettingsConnections ===

// Module 15013 (UserSettingsConnections)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import useThemeDefault from "useTheme" /* 4541 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 7243 */;
import authorizeConnectionDefault from "authorizeConnection" /* 9342 */;
import useConnectionFilteredAppIdentitiesDefault from "useConnectionFilteredAppIdentities" /* 13181 */;
import ConnectedApplicationIdentityDefault from "ConnectedApplicationIdentity" /* 15017 */;
import ConnectedAccountDefault from "ConnectedAccount" /* 15018 */;
import noop from "module_19" /* 19 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7180 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5332 */;
import LocaleStore from "LocaleStore" /* 2025 */;

const ConnectionsEmptyStateUpsellDefault = tmp2(15014);
require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
const FetchState = fn(7180).FetchState;
const AnalyticsLocations = fn(1074).AnalyticsLocations;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4606);
let createStyles = { flex: { flex: 1 }, form: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 };
createStyles.form = createStyles;
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/UserSettingsConnections.tsx");

export const ADD_CONNECTIONS_SHEET_SENTINEL = -1;
export const UserSettingsConnections = function UserSettingsConnections(selectedPlatformType) {
  selectedPlatformType = selectedPlatformType.selectedPlatformType;
  const tmp = closure_13();
  importDefault = useThemeDefault();
  let obj = selectedPlatformType(504);
  const items = [LocaleStore];
  dependencyMap = obj.useStateFromStores(items, () => locale2.locale);
  let obj1 = selectedPlatformType(504);
  const items1 = [ConnectedAccountsStore];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ fetching: ConnectedAccountsStore.isFetching(), accounts: ConnectedAccountsStore.getAccounts() }));
  ({ accounts, fetching } = stateFromStoresObject);
  const items2 = [AuthorizedAppsStore];
  const stateFromStoresObject1 = selectedPlatformType(504).useStateFromStoresObject(items2, () => ({ authorizedAppsFetchState: authStore.getFetchState(), authorizedApps: authStore.getNewestTokensForNonChildrenApplications() }));
  const authorizedAppsFetchState = stateFromStoresObject1.authorizedAppsFetchState;
  const authorizedApps = stateFromStoresObject1.authorizedApps;
  const obj3 = selectedPlatformType(504);
  const tmp7Result = useConnectionFilteredAppIdentitiesDefault(AuthenticationStore.getId(), { includeHidden: true });
  const prop = tmp7Result.filteredAppIdentities;
  const items3 = [authorizedAppsFetchState];
  const effect = authorizedAppsFetchState.useEffect(() => {
    if (authorizedAppsFetchState === FetchState.NOT_FETCHED) {
      const response = AuthorizedAppsActionCreatorsDefault.fetch();
    }
  }, items3);
  const effect1 = authorizedAppsFetchState.useEffect(() => {
    const response = theme(locale[14]).fetch();
  }, []);
  const items4 = [selectedPlatformType];
  const effect2 = authorizedAppsFetchState.useEffect(() => {
    if (null != selectedPlatformType) {
      if (-1 === selectedPlatformType) {
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15012, dependencyMap.paths), "AddConnection");
      } else {
        const obj = { platformType: selectedPlatformType, location: AnalyticsLocations.USER_SETTINGS };
        authorizeConnectionDefault(obj);
      }
    }
  }, items4);
  if (!fetching) {
    if (!tmp7Result.isLoading) {
      if (0 === accounts.length) {
        if (0 === prop.length) {
          let tmp14 = closure_11(ConnectionsEmptyStateUpsellDefault, {});
        }
      }
      obj = { style: tmp.form, children: null };
      obj = { spacing: 16, children: null };
      const items5 = [
        prop.map((identity) => {
              const obj = { identity, token: authorizedApps.find((application) => application.application.id === identity.application_id) };
              return closure_2_11(ConnectedApplicationIdentityDefault, obj, "" + identity.application_id + "-" + identity.provider_issued_user_id);
            }),
        accounts.map((account) => closure_2_11(ConnectedAccountDefault, { theme, locale, account }, account.id))
      ];
      obj.children = items5;
      obj.children = closure_12(tmp4(5024).Stack, obj);
      tmp14 = closure_11(tmp4(8684).Form, obj);
    }
    return tmp14;
  }
  obj1 = { style: tmp.flex, size: "large" };
  tmp14 = closure_11(authorizedApps, obj1);
};