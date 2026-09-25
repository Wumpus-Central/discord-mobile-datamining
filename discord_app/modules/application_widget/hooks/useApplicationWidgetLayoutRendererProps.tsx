// === Module 8477: useApplicationWidgetLayoutRendererProps ===

// Module 8477 (useApplicationWidgetLayoutRendererProps)
import GlobalUtils from "GlobalUtils" /* 1370 */;
import resolvedValuesFromUserApplicationIdentityProfile from "resolvedValuesFromUserApplicationIdentityProfile" /* 8382 */;
import ApplicationAssetV2Utils from "ApplicationAssetV2Utils" /* 8485 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationAssetsV2Store from "ApplicationAssetsV2Store" /* 8478 */;
import UserApplicationIdentityStore from "UserApplicationIdentityStore" /* 8479 */;
import LocaleStore from "LocaleStore" /* 2111 */;

const require = globalThis.__r;

require = fn;
const FetchState = fn(8479).FetchState;
const localizedStrings = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_widget/hooks/useApplicationWidgetLayoutRendererProps.tsx");

export default function useApplicationWidgetLayoutRendererProps(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  const userApplicationIdentities = require("UserApplicationIdentityActionCreators").useUserApplicationIdentities(arg0);
  let obj = require("UserApplicationIdentityActionCreators");
  let items = [UserApplicationIdentityStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => UserApplicationIdentityStore.getUserIdentityByApplication(closure_0, closure_1));
  const obj2 = require("initialize");
  const items1 = [LocaleStore];
  const items2 = [arg1];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => locale.locale);
  const memo = noop.useMemo(() => {
    const items = [closure_1];
    return items;
  }, items2);
  const first = stateFromStores3(require("useApplicationWidgetConfigs")(memo), 1)[0];
  let profile;
  if (stateFromStores != null) {
    profile = stateFromStores.profile;
  }
  const items3 = [profile];
  const memo1 = noop.useMemo(() => {
    let profile;
    if (stateFromStores != null) {
      profile = stateFromStores.profile;
    }
    return resolvedValuesFromUserApplicationIdentityProfile.resolvedValuesFromUserApplicationIdentityProfile(profile);
  }, items3);
  const obj3 = require("initialize");
  const items4 = [UserApplicationIdentityStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items4, () => UserApplicationIdentityStore.getFetchState(closure_0) !== FetchState.FETCHED);
  const tmpResult = require("initialize");
  const items5 = [ApplicationAssetsV2Store];
  stateFromStores3 = require("initialize").useStateFromStores(items5, () => ApplicationAssetsV2Store.getAssets(closure_1));
  const items6 = [stateFromStores3];
  const items7 = [arg1];
  const memo2 = noop.useMemo(() => {
    let obj = stateFromStores3;
    if (stateFromStores3 == null) {
      obj = {};
    }
    const values = Object.values(obj);
    return values.filter(GlobalUtils.isNotNullish);
  }, items6);
  const obj5 = { locale: stateFromStores1, surfaceConfigs: null, isLoading: null, hasIdentity: null, resolutionContext: null };
  let surfaces;
  const callback = noop.useCallback((metadata) => ApplicationAssetV2Utils.getApplicationAssetUrl(closure_1, metadata, metadata.metadata.width), items7);
  if (first != null) {
    surfaces = first.surfaces;
  }
  if (surfaces == null) {
    surfaces = {};
  }
  obj5.surfaceConfigs = surfaces;
  obj5.isLoading = stateFromStores2;
  obj5.hasIdentity = null != stateFromStores;
  obj5.resolutionContext = { data: memo1, applicationAssets: memo2, getApplicationAssetUrl: callback, localizedStrings };
  return obj5;
};