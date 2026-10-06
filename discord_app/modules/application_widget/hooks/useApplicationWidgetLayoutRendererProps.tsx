// discord_app/modules/application_widget/hooks/useApplicationWidgetLayoutRendererProps.tsx
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import _mod8629 from "../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx";
import UserApplicationIdentityStore2 from "../../user_application_identity/UserApplicationIdentityStore.tsx";
import ApplicationAssetV2Utils from "../../application_assets_v2/ApplicationAssetV2Utils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ApplicationAssetsV2Store from "../../application_assets_v2/ApplicationAssetsV2Store.tsx";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const UserApplicationIdentityStore = UserApplicationIdentityStore2;
let _require, importDefault;

const FetchState = UserApplicationIdentityStore2.FetchState;
const localizedStrings = [];
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let first;
      let locale;
      let stateFromStores;
      _require = arg0;
      importDefault = arg1;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(34);
      const obj2 = require("UserApplicationIdentityActionCreators");
      const userApplicationIdentities = obj2.useUserApplicationIdentities(arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserApplicationIdentityStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg1) {
        let tmp7;
        let tmp10;
        let tmp9;
        let tmp13;
        let tmp20;
        let tmp22;
        let tmp26;
        if (cResult[2] === arg0) {
          tmp7 = cResult[3];
        }
        const tmpResult = tmp(stateFromStores[8]);
        stateFromStores = tmpResult.useStateFromStores(first, tmp7);
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [LocaleStore];
          class F {
            constructor() {
              return closure_1_8.locale;
            }
          }
          cResult[4] = items1;
          cResult[5] = F;
          tmp10 = F;
          tmp9 = items1;
        } else {
          tmp9 = cResult[4];
          tmp10 = cResult[5];
        }
        const tmpResult4 = tmp(stateFromStores[8]);
        const stateFromStores1 = tmpResult4.useStateFromStores(tmp9, tmp10);
        if (cResult[6] !== arg1) {
          const items2 = [arg1];
          class F {
            constructor() {
              return closure_1_8.locale;
            }
          }
          cResult[7] = items2;
          tmp13 = items2;
        } else {
          tmp13 = cResult[7];
        }
        const first1 = _slicedToArray(require("useApplicationWidgetConfigs")(tmp13), 1)[0];
        if (stateFromStores != null) {
          let profile = stateFromStores.profile;
        }
        class S {
          constructor() {
            return closure_6.getUserIdentityByApplication(closure_0, closure_1);
          }
        }
        if (cResult[10] !== tmp19) {
          const tmp19Result = tmp19();
          cResult[10] = tmp19;
          class F {
            constructor() {
              return closure_1_8.locale;
            }
          }
          cResult[11] = tmp19Result;
          tmp20 = tmp19Result;
        } else {
          tmp20 = cResult[11];
        }
        const _Symbol2 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const items3 = [UserApplicationIdentityStore];
          class F {
            constructor() {
              return closure_1_8.locale;
            }
          }
          cResult[12] = items3;
          tmp22 = items3;
        } else {
          tmp22 = cResult[12];
        }
        if (cResult[13] !== arg0) {
          class N {
            constructor() {
              return closure_6.getFetchState(closure_0) !== FetchState.FETCHED;
            }
          }
          cResult[13] = arg0;
          class F {
            constructor() {
              return closure_1_8.locale;
            }
          }
          cResult[14] = N;
        } else {
          class N {
            constructor() {
              return closure_6.getFetchState(closure_0) !== FetchState.FETCHED;
            }
          }
        }
        const tmpResult5 = tmp(stateFromStores[8]);
        const stateFromStores2 = tmpResult5.useStateFromStores(tmp22, N);
        const _Symbol3 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class N {
            constructor() {
              return closure_6.getFetchState(closure_0) !== FetchState.FETCHED;
            }
          }
          const items4 = [ApplicationAssetsV2Store];
          class F {
            constructor() {
              return closure_1_8.locale;
            }
          }
          cResult[15] = items4;
          tmp26 = items4;
        } else {
          class N {
            constructor() {
              return closure_6.getFetchState(closure_0) !== FetchState.FETCHED;
            }
          }
        }
        if (cResult[16] !== arg1) {
          class N {
            constructor() {
              return closure_6.getFetchState(closure_0) !== FetchState.FETCHED;
            }
          }
          cResult[16] = arg1;
          class F {
            constructor() {
              return closure_1_8.locale;
            }
          }
          cResult[17] = tmp28;
        } else {
          class N {
            constructor() {
              return closure_6.getFetchState(closure_0) !== FetchState.FETCHED;
            }
          }
        }
        const tmpResult6 = tmp(stateFromStores[8]);
        const stateFromStores3 = tmpResult6.useStateFromStores(tmp26, tmp28);
        if (cResult[18] !== stateFromStores3) {
          class N {
            constructor() {
              return closure_6.getFetchState(closure_0) !== FetchState.FETCHED;
            }
          }
          const _Object = Object;
          class F {
            constructor() {
              return closure_1_8.locale;
            }
          }
          const values2 = values(tmp31);
          const found = values2.filter(tmp(tmp2[11]).isNotNullish);
          cResult[18] = stateFromStores3;
          cResult[19] = found;
        } else {
          class N {
            constructor() {
              return closure_6.getFetchState(closure_0) !== FetchState.FETCHED;
            }
          }
        }
        if (cResult[20] !== arg1) {
          class N {
            constructor() {
              return closure_6.getFetchState(closure_0) !== FetchState.FETCHED;
            }
          }
          cResult[20] = arg1;
          class F {
            constructor() {
              return closure_1_8.locale;
            }
          }
          cResult[21] = tmp34;
        } else {
          class N {
            constructor() {
              return closure_6.getFetchState(closure_0) !== FetchState.FETCHED;
            }
          }
        }
        const tmp35 = cResult[22];
        if (first1 != null) {
          class N {
            constructor() {
              return closure_6.getFetchState(closure_0) !== FetchState.FETCHED;
            }
          }
        }
        if (tmp35 !== undefined) {
          class N {
            constructor() {
              return closure_6.getFetchState(closure_0) !== FetchState.FETCHED;
            }
          }
          if (first1 != null) {
            class N {
              constructor() {
                return closure_6.getFetchState(closure_0) !== FetchState.FETCHED;
              }
            }
          }
          if (tmp38 == null) {
            class N {
              constructor() {
                return closure_6.getFetchState(closure_0) !== FetchState.FETCHED;
              }
            }
          }
          class F {
            constructor() {
              return closure_1_8.locale;
            }
          }
          if (first1 != null) {
            class N {
              constructor() {
                return closure_6.getFetchState(closure_0) !== FetchState.FETCHED;
              }
            }
          }
          cResult[22] = tmp39;
          cResult[23] = tmp38;
        } else {
          class N {
            constructor() {
              return closure_6.getFetchState(closure_0) !== FetchState.FETCHED;
            }
          }
        }
        if (cResult[24] === tmp30) {
          class N {
            constructor() {
              return closure_6.getFetchState(closure_0) !== FetchState.FETCHED;
            }
          }
        }
        const obj3 = { data: tmp20, applicationAssets: tmp30, getApplicationAssetUrl: tmp34, localizedStrings };
        cResult[24] = tmp30;
        cResult[25] = tmp34;
        cResult[26] = tmp20;
        cResult[27] = obj3;
      }
      class S {
        constructor() {
          return closure_6.getUserIdentityByApplication(closure_0, closure_1);
        }
      }
      cResult[1] = arg1;
      cResult[2] = arg0;
      cResult[3] = S;
      tmp7 = S;
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let locale;
      let stateFromStores;
      let stateFromStores3;
      let surfaces;
      _require = arg0;
      importDefault = arg1;
      const tmp = _require;
      let obj = require("UserApplicationIdentityActionCreators");
      const userApplicationIdentities = obj.useUserApplicationIdentities(arg0);
      let items = [UserApplicationIdentityStore];
      const obj2 = require("get initialized");
      stateFromStores = obj2.useStateFromStores(items, () =>
        UserApplicationIdentityStore.getUserIdentityByApplication(closure_0, closure_1),
      );
      const items1 = [LocaleStore];
      const items2 = [arg1];
      const obj3 = require("get initialized");
      const stateFromStores1 = obj3.useStateFromStores(items1, () => locale.locale);
      const memo = react.useMemo(() => {
        const items = [closure_1];
        return items;
      }, items2);
      const first = stateFromStores3(require("useApplicationWidgetConfigs")(memo), 1)[0];
      let profile;
      const useMemo = react.useMemo;
      if (stateFromStores != null) {
        profile = stateFromStores.profile;
      }
      const items3 = [profile];
      const memo1 = useMemo(() => {
        let profile;
        const resolvedValuesFromUserApplicationIdentityProfile =
          _mod8629.resolvedValuesFromUserApplicationIdentityProfile;
        _mod8629;
        if (stateFromStores != null) {
          profile = stateFromStores.profile;
        }
        return resolvedValuesFromUserApplicationIdentityProfile(profile);
      }, items3);
      const items4 = [UserApplicationIdentityStore];
      const tmpResult = tmp(stateFromStores[8]);
      const stateFromStores2 = tmpResult.useStateFromStores(
        items4,
        () => UserApplicationIdentityStore.getFetchState(closure_0) !== FetchState.FETCHED,
      );
      const items5 = [ApplicationAssetsV2Store];
      const tmpResult2 = tmp(stateFromStores[8]);
      stateFromStores3 = tmpResult2.useStateFromStores(items5, () => ApplicationAssetsV2Store.getAssets(closure_1));
      const items6 = [stateFromStores3];
      const items7 = [arg1];
      const memo2 = react.useMemo(() => {
        let obj = stateFromStores3;
        const _Object = Object;
        if (stateFromStores3 == null) {
          obj = {};
        }
        const values2 = values(obj);
        return values2.filter(GlobalUtils.isNotNullish);
      }, items6);
      const obj5 = {
        locale: stateFromStores1,
        surfaceConfigs: surfaces,
        isLoading: stateFromStores2,
        hasIdentity: null != stateFromStores,
        resolutionContext: obj6,
      };
      surfaces = undefined;
      const callback = react.useCallback((metadata) => {
        const obj = ApplicationAssetV2Utils;
        return obj.getApplicationAssetUrl(closure_1, metadata, metadata.metadata.width);
      }, items7);
      if (first != null) {
        surfaces = first.surfaces;
      }
      if (surfaces == null) {
        surfaces = {};
      }
      return obj5;
    };
const result = size.fileFinishedImporting(
  "modules/application_widget/hooks/useApplicationWidgetLayoutRendererProps.tsx",
);

export default tmp2;
