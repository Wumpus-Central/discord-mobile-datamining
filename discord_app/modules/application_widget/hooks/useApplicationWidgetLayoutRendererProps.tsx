// discord_app/modules/application_widget/hooks/useApplicationWidgetLayoutRendererProps.tsx
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import resolvedValuesFromUserApplicationIdentityProfile from "../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx";
import ApplicationAssetV2Utils from "../../application_assets_v2/ApplicationAssetV2Utils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationAssetsV2Store from "../../application_assets_v2/ApplicationAssetsV2Store.tsx";
import UserApplicationIdentityStore from "../../user_application_identity/UserApplicationIdentityStore.tsx";
import LocaleStore from "../../user_settings/LocaleStore.tsx";

require = fn;
const FetchState = fn(9023).FetchState;
const localizedStrings = [];
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/application_widget/hooks/useApplicationWidgetLayoutRendererProps.tsx",
);

export default function useApplicationWidgetLayoutRendererProps(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  let obj = require("UserApplicationIdentityActionCreators");
  const userApplicationIdentities = obj.useUserApplicationIdentities(arg0);
  let items = [UserApplicationIdentityStore];
  stateFromStores = require("initialize").useStateFromStores(items, () =>
    UserApplicationIdentityStore.getUserIdentityByApplication(closure_0, closure_1),
  );
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
  let tmpResult = tmp(tmp2[6]);
  const items4 = [UserApplicationIdentityStore];
  const stateFromStores2 = tmpResult.useStateFromStores(
    items4,
    () => UserApplicationIdentityStore.getFetchState(closure_0) !== FetchState.FETCHED,
  );
  tmpResult = tmp(tmp2[6]);
  const items5 = [ApplicationAssetsV2Store];
  stateFromStores3 = tmpResult.useStateFromStores(items5, () => ApplicationAssetsV2Store.getAssets(closure_1));
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
  obj = { locale: stateFromStores1, surfaceConfigs: null, isLoading: null, hasIdentity: null, resolutionContext: null };
  let surfaces;
  const callback = noop.useCallback(
    (metadata) => ApplicationAssetV2Utils.getApplicationAssetUrl(closure_1, metadata, metadata.metadata.width),
    items7,
  );
  if (first != null) {
    surfaces = first.surfaces;
  }
  if (surfaces == null) {
    surfaces = {};
  }
  obj.surfaceConfigs = surfaces;
  obj.isLoading = stateFromStores2;
  obj.hasIdentity = null != stateFromStores;
  obj = { data: memo1, applicationAssets: memo2, getApplicationAssetUrl: callback, localizedStrings };
  obj.resolutionContext = obj;
  return obj;
}
