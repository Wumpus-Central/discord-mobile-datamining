// === Module 14766: UserSettingsConnections ===

// Module 14766 (UserSettingsConnections)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import useThemeDefault from "useTheme" /* 4791 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 6602 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 6665 */;
import authorizeConnectionDefault from "authorizeConnection" /* 8732 */;
import useConnectionFilteredAppIdentitiesDefault from "useConnectionFilteredAppIdentities" /* 12935 */;
import ConnectedApplicationIdentityDefault from "ConnectedApplicationIdentity" /* 14770 */;
import ConnectedAccountDefault from "ConnectedAccount" /* 14771 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5440 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

const AuthorizedAppsStore = AuthorizedAppsStore2;
let dependencyMap, importDefault;

let closure_12;
let obj2;
let tmp2;
let unpackModuleId;
const ConnectionsEmptyStateUpsellDefault = tmp2(14767);
const ActivityIndicator = react_native.ActivityIndicator;
const FetchState = AuthorizedAppsStore2.FetchState;
const AnalyticsLocations = Constants.AnalyticsLocations;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let obj = { flex: { flex: 1 }, form: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 };
let closure_13 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/UserSettingsConnections.tsx");

export const ADD_CONNECTIONS_SHEET_SENTINEL = -1;
export const UserSettingsConnections = function UserSettingsConnections(selectedPlatformType) {
  let Stack;
  let accounts;
  let fetching;
  let items5;
  let locale;
  let locale2;
  let obj5;
  let theme;
  selectedPlatformType = selectedPlatformType.selectedPlatformType;
  importDefault = undefined;
  let tmp = closure_13();
  importDefault = useThemeDefault();
  let obj = selectedPlatformType(504);
  const items = [LocaleStore];
  dependencyMap = obj.useStateFromStores(items, () => locale2.locale);
  let obj2 = selectedPlatformType(504);
  const items1 = [ConnectedAccountsStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const obj = { fetching: ConnectedAccountsStore.isFetching(), accounts: ConnectedAccountsStore.getAccounts() };
    return obj;
  });
  ({ accounts, fetching } = stateFromStoresObject);
  const items2 = [AuthorizedAppsStore];
  const obj3 = selectedPlatformType(504);
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items2, () => {
    const obj = { authorizedAppsFetchState: authStore.getFetchState(), authorizedApps: authStore.getNewestTokensForNonChildrenApplications() };
    return obj;
  });
  const authorizedAppsFetchState = stateFromStoresObject1.authorizedAppsFetchState;
  const authorizedApps = stateFromStoresObject1.authorizedApps;
  const tmp7 = useConnectionFilteredAppIdentitiesDefault;
  const tmp7Result = tmp7(AuthenticationStore.getId(), { includeHidden: true });
  const prop = tmp7Result.filteredAppIdentities;
  const items3 = [authorizedAppsFetchState];
  const isLoading = tmp7Result.isLoading;
  const effect = authorizedAppsFetchState.useEffect(() => {
    if (authorizedAppsFetchState === FetchState.NOT_FETCHED) {
      const obj = AuthorizedAppsActionCreatorsDefault;
      const response = obj.fetch();
    }
  }, items3);
  const effect1 = authorizedAppsFetchState.useEffect(() => {
    const obj = theme(locale[14]);
    const response = obj.fetch();
  }, []);
  const items4 = [selectedPlatformType];
  const effect2 = authorizedAppsFetchState.useEffect(() => {
    if (null != selectedPlatformType) {
      if (-1 === selectedPlatformType) {
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.openLazy(asyncRequire(14765, dependencyMap.paths), "AddConnection");
      } else {
        const obj = { platformType: selectedPlatformType, location: AnalyticsLocations.USER_SETTINGS };
        authorizeConnectionDefault(obj);
      }
    }
  }, items4);
  if (!fetching) {
    let tmp14;
    if (!isLoading) {
      if (0 === accounts.length) {
        if (0 === prop.length) {
          tmp14 = closure_11(ConnectionsEmptyStateUpsellDefault, {});
        }
      }
      const obj4 = { style: tmp.form, children: closure_12(Stack, obj5) };
      const Form = tmp4(8895).Form;
      obj5 = { spacing: 16, children: items5 };
      Stack = tmp4(5593).Stack;
      items5 = [
        prop.map((identity) => {
              let closure_0 = identity;
              const obj = { identity, token: authorizedApps.find((application) => application.application.id === application_id.application_id) };
              const tmp = ConnectedApplicationIdentityDefault;
              return unpackModuleId(tmp, obj, "" + identity.application_id + "-" + identity.provider_issued_user_id);
            }),
        accounts.map((account) => {
              const obj = { theme, locale, account };
              return unpackModuleId(ConnectedAccountDefault, obj, account.id);
            })
      ];
      tmp14 = closure_11(Form, obj4);
    }
    return tmp14;
  }
  const obj6 = { style: tmp.flex, size: "large" };
  tmp14 = closure_11(authorizedApps, obj6);
};