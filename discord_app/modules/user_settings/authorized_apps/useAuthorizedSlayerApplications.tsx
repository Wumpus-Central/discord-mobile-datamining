// === Module 15714: useAuthorizedSlayerApplications ===

// Module 15714 (useAuthorizedSlayerApplications)
import closure_3 from "noop" /* 19 */;
import closure_4 from "recomputeFromAppTokens" /* 5484 */;
import { FetchState } from "recomputeFromAppTokens" /* 5484 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/authorized_apps/useAuthorizedSlayerApplications.tsx");

export default function useAuthorizedSlayerApplications(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  let items = [closure_4];
  const stateFromStores = _require(stateFromStores1[2]).useStateFromStores(items, () => fetchState.getFetchState());
  let obj = _require(stateFromStores1[2]);
  const items1 = [closure_4];
  stateFromStores1 = _require(stateFromStores1[2]).useStateFromStores(items1, () => {
    if (closure_0) {
      let newestTokensForNonChildrenApplications = obj.getNewestTokensForNonChildrenApplications();
    } else {
      newestTokensForNonChildrenApplications = obj.getNewestTokens();
    }
    return newestTokensForNonChildrenApplications;
  });
  const items2 = [stateFromStores1];
  const items3 = [arg1];
  const slayerSdkApplications = React.useMemo(() => {
    if (null == stateFromStores1) {
      let items = [];
    } else {
      const found = stateFromStores1.filter((application) => callback(table[3]).isSocialLayerSDKAuthorization(application.application, application.scopes));
      items = found.map((application) => application.application);
    }
    return items;
  }, items2);
  const effect = React.useEffect(() => {
    if (!callback) {
      const response = callback(stateFromStores1[4]).fetch();
      const obj = callback(stateFromStores1[4]);
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