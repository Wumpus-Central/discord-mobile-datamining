// discord_app/modules/user_settings/connections/native/UserSettingsConnections.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
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

const ConnectionsEmptyStateUpsellDefault = tmp2(15231);
require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
const FetchState = fn(7347).FetchState;
const AnalyticsLocations = fn(1074).AnalyticsLocations;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  flex: { flex: 1 },
  form: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 },
};
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/UserSettingsConnections.tsx");

export const ADD_CONNECTIONS_SHEET_SENTINEL = -1;
export const UserSettingsConnections = function UserSettingsConnections(selectedPlatformType) {
  selectedPlatformType = selectedPlatformType.selectedPlatformType;
  const tmp = closure_13();
  importDefault = useThemeDefault();
  const items = [LocaleStore];
  dependencyMap = selectedPlatformType(504).useStateFromStores(items, () => locale2.locale);
  let obj = selectedPlatformType(504);
  const items1 = [ConnectedAccountsStore];
  const stateFromStoresObject = selectedPlatformType(504).useStateFromStoresObject(items1, () => ({
    fetching: ConnectedAccountsStore.isFetching(),
    accounts: ConnectedAccountsStore.getAccounts(),
  }));
  ({ accounts, fetching } = stateFromStoresObject);
  let obj2 = selectedPlatformType(504);
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
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15229, dependencyMap.paths), "AddConnection");
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
      const obj4 = { style: tmp.form, children: null };
      const obj5 = { spacing: 16, children: null };
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
      obj5.children = items5;
      obj4.children = closure_12(tmp4(5184).Stack, obj5);
      tmp14 = closure_11(tmp4(8870).Form, obj4);
    }
    return tmp14;
  }
  tmp14 = closure_11(authorizedApps, { style: tmp.flex, size: "large" });
  const obj6 = { style: tmp.flex, size: "large" };
};
