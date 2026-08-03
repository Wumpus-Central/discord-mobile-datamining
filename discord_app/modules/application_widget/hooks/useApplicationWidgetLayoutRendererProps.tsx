import _slicedToArray from "_slicedToArray";
import noop from "noop";
import handleFeaturedOrDeveloperFetchSuccess from "handleFeaturedOrDeveloperFetchSuccess";
import map from "map";
import { FetchState } from "map";
import _getSystemLocale from "_getSystemLocale";

const require = arg1;
let closure_9 = [];
const result = require("handleFeaturedOrDeveloperFetchSuccess").fileFinishedImporting("modules/application_widget/hooks/useApplicationWidgetLayoutRendererProps.tsx");

export default function useApplicationWidgetLayoutRendererProps(arg0, arg1) {
  const _require = arg0;
  const importDefault = arg1;
  let obj = _require(stateFromStores[5]);
  const userApplicationIdentities = obj.useUserApplicationIdentities(arg0);
  let items = [map];
  stateFromStores = _require(stateFromStores[6]).useStateFromStores(items, () => outer1_6.getUserIdentityByApplication(closure_0, closure_1));
  const obj2 = _require(stateFromStores[6]);
  const tmp4 = map;
  const items1 = [_getSystemLocale];
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
  const stateFromStores2 = tmpResult.useStateFromStores(items4, () => outer1_6.getFetchState(closure_0) !== outer1_7.FETCHED);
  tmpResult = tmp(tmp2[6]);
  const items5 = [handleFeaturedOrDeveloperFetchSuccess];
  stateFromStores3 = tmpResult.useStateFromStores(items5, () => outer1_5.getAssets(closure_1));
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