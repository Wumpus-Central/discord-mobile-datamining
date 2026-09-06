// discord_app/modules/user_settings/connections/native/UserSettingsConnections.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AuthorizedAppsActionCreatorsDefault from "../../../oauth2/AuthorizedAppsActionCreators.tsx";
import authorizeConnectionDefault from "../../../connections/authorizeConnection.native.tsx";
import useConnectionFilteredAppIdentitiesDefault from "../../../user_application_identity/hooks/useConnectionFilteredAppIdentities.tsx";
import ConnectedApplicationIdentityDefault from "ConnectedApplicationIdentity.tsx";
import ConnectedAccountDefault from "ConnectedAccount.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AuthorizedAppsStore from "../../../oauth2/AuthorizedAppsStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import ConnectedAccountsStore from "../../../../stores/ConnectedAccountsStore.tsx";
import LocaleStore from "../../LocaleStore.tsx";

const ConnectionsEmptyStateUpsellDefault = tmp2(14959);
require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
const FetchState = fn(7107).FetchState;
const AnalyticsLocations = fn(1074).AnalyticsLocations;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
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
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({
    fetching: ConnectedAccountsStore.isFetching(),
    accounts: ConnectedAccountsStore.getAccounts(),
  }));
  ({ accounts, fetching } = stateFromStoresObject);
  const items2 = [AuthorizedAppsStore];
  const stateFromStoresObject1 = selectedPlatformType(504).useStateFromStoresObject(items2, () => ({
    authorizedAppsFetchState: authStore.getFetchState(),
    authorizedApps: authStore.getNewestTokensForNonChildrenApplications(),
  }));
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
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14957, dependencyMap.paths), "AddConnection");
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
          const obj = {
            identity,
            token: authorizedApps.find((application) => application.application.id === identity.application_id),
          };
          return closure_2_11(
            ConnectedApplicationIdentityDefault,
            obj,
            "" + identity.application_id + "-" + identity.provider_issued_user_id,
          );
        }),
        accounts.map((account) => closure_2_11(ConnectedAccountDefault, { theme, locale, account }, account.id)),
      ];
      obj.children = items5;
      obj.children = closure_12(tmp4(4973).Stack, obj);
      tmp14 = closure_11(tmp4(8593).Form, obj);
    }
    return tmp14;
  }
  obj1 = { style: tmp.flex, size: "large" };
  tmp14 = closure_11(authorizedApps, obj1);
};
