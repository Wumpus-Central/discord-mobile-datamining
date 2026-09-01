// === Module 12764: useApplicationWidgetLayoutRendererProps ===

// Module 12764 (useApplicationWidgetLayoutRendererProps)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "handleFeaturedOrDeveloperFetchSuccess" /* 12765 */;
import closure_6 from "map" /* 12517 */;
import { FetchState } from "map" /* 12517 */;
import closure_8 from "_getSystemLocale" /* 1996 */;

const require = arg1;
let closure_9 = [];
const result = require("set").fileFinishedImporting("modules/application_widget/hooks/useApplicationWidgetLayoutRendererProps.tsx");

export default function useApplicationWidgetLayoutRendererProps(arg0, arg1) {
  const _require = arg0;
  importDefault = arg1;
  let obj = _require(stateFromStores[5]);
  const userApplicationIdentities = obj.useUserApplicationIdentities(arg0);
  let items = [closure_6];
  stateFromStores = _require(stateFromStores[6]).useStateFromStores(items, () => closure_1_6.getUserIdentityByApplication(closure_0, closure_1));
  const obj2 = _require(stateFromStores[6]);
  const tmp4 = closure_6;
  const items1 = [closure_8];
  const items2 = [arg1];
  const stateFromStores1 = _require(stateFromStores[6]).useStateFromStores(items1, () => locale.locale);
  const memo = React.useMemo(() => {
    const items = [closure_1];
    return items;
  }, items2);
  const first = stateFromStores3(importDefault(stateFromStores[7])(memo), 1)[0];
  let profile;
  if (stateFromStores != null) {
    profile = stateFromStores.profile;
  }
  const items3 = [profile];
  const memo1 = React.useMemo(() => {
    let profile;
    if (stateFromStores != null) {
      profile = stateFromStores.profile;
    }
    return callback(stateFromStores[8]).resolvedValuesFromUserApplicationIdentityProfile(profile);
  }, items3);
  let tmpResult = tmp(tmp2[6]);
  const items4 = [tmp4];
  const stateFromStores2 = tmpResult.useStateFromStores(items4, () => closure_1_6.getFetchState(closure_0) !== closure_1_7.FETCHED);
  tmpResult = tmp(tmp2[6]);
  const items5 = [closure_5];
  stateFromStores3 = tmpResult.useStateFromStores(items5, () => closure_1_5.getAssets(closure_1));
  const items6 = [stateFromStores3];
  const items7 = [arg1];
  const memo2 = obj4.useMemo(() => {
    let obj = stateFromStores3;
    if (stateFromStores3 == null) {
      obj = {};
    }
    const values = Object.values(obj);
    return values.filter(callback(stateFromStores[9]).isNotNullish);
  }, items6);
  obj = { locale: stateFromStores1, surfaceConfigs: null, isLoading: null, hasIdentity: null, resolutionContext: null };
  let surfaces;
  const callback = obj4.useCallback((metadata) => callback(stateFromStores[10]).getApplicationAssetUrl(closure_1, metadata, metadata.metadata.width), items7);
  if (first != null) {
    surfaces = first.surfaces;
  }
  if (surfaces == null) {
    surfaces = {};
  }
  obj[1] = surfaces;
  obj[2] = stateFromStores2;
  obj[3] = null != stateFromStores;
  obj = { data: memo1, applicationAssets: memo2, getApplicationAssetUrl: callback, localizedStrings: closure_9 };
  obj[4] = obj;
  return obj;
};