// discord_app/modules/user_settings/authorized_apps/useAuthorizedSlayerApplications.tsx
import noop from "../../../../_runtime/00019_noop.js";
import recomputeFromAppTokens from "../../oauth2/AuthorizedAppsStore.tsx";
import { FetchState } from "../../oauth2/AuthorizedAppsStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_settings/authorized_apps/useAuthorizedSlayerApplications.tsx");

export default function useAuthorizedSlayerApplications(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  let items = [closure_4];
  const stateFromStores = _require(stateFromStores1[2]).useStateFromStores(items, () => fetchState.getFetchState());
  let obj = _require(stateFromStores1[2]);
  const items1 = [closure_4];
  stateFromStores1 = _require(stateFromStores1[2]).useStateFromStores(items1, () => {
    if (closure_0) {
      let newestTokensForNonChildrenApplications = closure_1_4.getNewestTokensForNonChildrenApplications();
    } else {
      newestTokensForNonChildrenApplications = closure_1_4.getNewestTokens();
    }
    return newestTokensForNonChildrenApplications;
  });
  const items2 = [stateFromStores1];
  const items3 = [arg1];
  const slayerSdkApplications = React.useMemo(() => {
    if (null == stateFromStores1) {
      let items = [];
    } else {
      const found = stateFromStores1.filter((item, index) => callback(table[3]).isSocialLayerSDKAuthorization(item.application, item.scopes));
      items = found.map((item, index) => item.application);
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