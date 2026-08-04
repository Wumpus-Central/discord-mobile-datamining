import EmptyStateCard from "EmptyStateCard";
import { ActivityIndicator } from "asyncRequireImpl";
import recomputeFromAppTokens from "recomputeFromAppTokens";
import { FetchState } from "recomputeFromAppTokens";
import fetchFingerprint from "fetchFingerprint";
import set from "set";
import _getSystemLocale from "_getSystemLocale";
import { AnalyticsLocations } from "ME";
import jsxProd from "ConnectedApplicationIdentity";
import createCacheKey from "createCacheKey";

let closure_12;
let unpackModuleId;
const require = arg1;
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { flex: { flex: 1 }, form: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, padding: require("Themes").space.PX_16 };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("recomputeFromAppTokens").fileFinishedImporting("modules/user_settings/connections/native/UserSettingsConnections.tsx");

export const ADD_CONNECTIONS_SHEET_SENTINEL = -1;
export const UserSettingsConnections = function UserSettingsConnections(selectedPlatformType) {
  let accounts;
  let fetching;
  selectedPlatformType = selectedPlatformType.selectedPlatformType;
  let importDefault;
  let dependencyMap;
  let authorizedAppsFetchState;
  let authorizedApps;
  const tmp = createCacheKey();
  importDefault = importDefault(4221)();
  let obj = selectedPlatformType(589);
  const items = [_getSystemLocale];
  dependencyMap = obj.useStateFromStores(items, () => locale.locale);
  let obj1 = selectedPlatformType(589);
  const items1 = [set];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ fetching: set.isFetching(), accounts: set.getAccounts() }));
  ({ accounts, fetching } = stateFromStoresObject);
  const items2 = [recomputeFromAppTokens];
  const stateFromStoresObject1 = selectedPlatformType(589).useStateFromStoresObject(items2, () => ({ authorizedAppsFetchState: authStore.getFetchState(), authorizedApps: authStore.getNewestTokensForNonChildrenApplications() }));
  authorizedAppsFetchState = stateFromStoresObject1.authorizedAppsFetchState;
  authorizedApps = stateFromStoresObject1.authorizedApps;
  const obj3 = selectedPlatformType(589);
  const tmp2 = importDefault;
  const tmp7Result = importDefault(12384)(id.getId(), { includeHidden: true });
  const prop = tmp7Result.filteredAppIdentities;
  const items3 = [authorizedAppsFetchState];
  const effect = authorizedAppsFetchState.useEffect(() => {
    if (authorizedAppsFetchState === outer1_6.NOT_FETCHED) {
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
        obj[1] = outer1_10.USER_SETTINGS;
        callback(paths[18])(obj);
      }
    }
  }, items4);
  if (!fetching) {
    if (!tmp7Result.isLoading) {
      if (0 === accounts.length) {
        if (0 === prop.length) {
          let tmp14 = callback(tmp2(14110), {});
        }
      }
      obj = { style: null, children: null };
      obj[0] = tmp.form;
      const items5 = [
        prop.map((application_id) => {
              let closure_0 = application_id;
              const obj = { identity: application_id, token: null };
              obj[1] = authorizedApps.find((application) => application.application.id === application_id.application_id);
              return outer1_11(callback(paths[21]), obj, "" + application_id.application_id + "-" + application_id.provider_issued_user_id);
            }),

      ];
      obj = { spacing: 16, children: null };
      obj[1] = accounts.map((account) => outer1_11(callback(paths[23]), { theme: callback, locale: paths, account }, account.id));
      items5[1] = callback(tmp4(4693).Stack, obj);
      obj[1] = items5;
      tmp14 = callback2(tmp4(7777).Form, obj);
    }
    return tmp14;
  }
  obj1 = { style: tmp.flex, size: "large" };
  tmp14 = callback(authorizedApps, obj1);
};