// === Module 15872: useAuthorizedSlayerApplications ===

// Module 15872 (useAuthorizedSlayerApplications)
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 7170 */;
import noop from "module_19" /* 19 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7107 */;

const require = fn;
const FetchState = fn(7107).FetchState;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/useAuthorizedSlayerApplications.tsx");

export default function useAuthorizedSlayerApplications(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let items = [AuthorizedAppsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => fetchState.getFetchState());
  let obj = require("initialize");
  const items1 = [AuthorizedAppsStore];
  stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    if (closure_0) {
      let newestTokensForNonChildrenApplications = obj.getNewestTokensForNonChildrenApplications();
    } else {
      newestTokensForNonChildrenApplications = obj.getNewestTokens();
    }
    return newestTokensForNonChildrenApplications;
  });
  const items2 = [stateFromStores1];
  const items3 = [arg1];
  const slayerSdkApplications = noop.useMemo(() => {
    if (null == stateFromStores1) {
      let items = [];
    } else {
      const found = stateFromStores1.filter((application) => closure_1_0(stateFromStores1[3]).isSocialLayerSDKAuthorization(application.application, application.scopes));
      items = found.map((application) => application.application);
    }
    return items;
  }, items2);
  const effect = noop.useEffect(() => {
    if (!closure_1) {
      const response = AuthorizedAppsActionCreatorsDefault.fetch();
    }
  }, items3);
  let showLoadingIndicator = stateFromStores !== FetchState.FETCHED;
  if (showLoadingIndicator) {
    let tmp6 = null == stateFromStores1;
    if (!tmp6) {
      tmp6 = 0 === stateFromStores1.length;
    }
    showLoadingIndicator = tmp6;
  }
  return { showLoadingIndicator, slayerSdkApplications };
};