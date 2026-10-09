// discord_app/modules/application_widget/hooks/useApplicationWidgetLayoutRendererProps.tsx
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import resolvedValuesFromUserApplicationIdentityProfile from "../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx";
import ApplicationAssetV2Utils from "../../application_assets_v2/ApplicationAssetV2Utils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationAssetsV2Store from "../../application_assets_v2/ApplicationAssetsV2Store.tsx";
import UserApplicationIdentityStore from "../../user_application_identity/UserApplicationIdentityStore.tsx";
import LocaleStore from "../../user_settings/LocaleStore.tsx";

const require = globalThis.__r;

require = fn;
const FetchState = fn(13292).FetchState;
const localizedStrings = [];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/application_widget/hooks/useApplicationWidgetLayoutRendererProps.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useApplicationWidgetLayoutRendererProps(arg0, arg1) {
      _require = arg0;
      importDefault = arg1;
      const cResult = require("c").c(34);
      const obj = require("c");
      const userApplicationIdentities = require("UserApplicationIdentityActionCreators").useUserApplicationIdentities(
        arg0,
      );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserApplicationIdentityStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg1) {
        if (cResult[2] === arg0) {
          let tmp7 = cResult[3];
        }
        stateFromStores = tmp(tmp2[8]).useStateFromStores(first, tmp7);
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [LocaleStore];
          const fn = function y() {
            return locale.locale;
          };
          cResult[4] = items1;
          cResult[5] = fn;
          let tmp10 = fn;
          let tmp9 = items1;
        } else {
          tmp9 = cResult[4];
          tmp10 = cResult[5];
        }
        const tmpResult = tmp(tmp2[8]);
        const stateFromStores1 = tmp(tmp2[8]).useStateFromStores(tmp9, tmp10);
        if (cResult[6] !== arg1) {
          const items2 = [arg1];
          cResult[6] = arg1;
          cResult[7] = items2;
          let tmp13 = items2;
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
          cResult[11] = tmp19Result;
          let tmp20 = tmp19Result;
        } else {
          tmp20 = cResult[11];
        }
        const _Symbol2 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const items3 = [UserApplicationIdentityStore];
          cResult[12] = items3;
          let tmp22 = items3;
        } else {
          tmp22 = cResult[12];
        }
        if (cResult[13] !== arg0) {
          class L {
            constructor() {
              return closure_6.getFetchState(closure_0) !== FetchState.FETCHED;
            }
          }
          cResult[13] = arg0;
          cResult[14] = L;
        } else {
          class L {
            constructor() {
              return closure_6.getFetchState(closure_0) !== FetchState.FETCHED;
            }
          }
        }
        const tmpResult4 = tmp(tmp2[8]);
        const stateFromStores2 = tmp(tmp2[8]).useStateFromStores(tmp22, L);
        const _Symbol3 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class L {
            constructor() {
              return closure_6.getFetchState(closure_0) !== FetchState.FETCHED;
            }
          }
          const items4 = [ApplicationAssetsV2Store];
          cResult[15] = items4;
          const tmp26 = items4;
        } else {
          class L {
            constructor() {
              return closure_6.getFetchState(closure_0) !== FetchState.FETCHED;
            }
          }
        }
        if (cResult[16] !== arg1) {
          class R {
            constructor() {
              return closure_5.getAssets(closure_1);
            }
          }
          cResult[16] = arg1;
          cResult[17] = R;
        } else {
          class R {
            constructor() {
              return closure_5.getAssets(closure_1);
            }
          }
        }
        const tmpResult5 = tmp(tmp2[8]);
        const stateFromStores3 = tmp(tmp2[8]).useStateFromStores(tmp26, R);
        if (cResult[18] !== stateFromStores3) {
          class R {
            constructor() {
              return closure_5.getAssets(closure_1);
            }
          }
          if (stateFromStores3 == null) {
            class R {
              constructor() {
                return closure_5.getAssets(closure_1);
              }
            }
          }
          const values = Object.values(tmp30);
          const found = values.filter(tmp(tmp2[11]).isNotNullish);
          cResult[18] = stateFromStores3;
          cResult[19] = found;
        } else {
          class R {
            constructor() {
              return closure_5.getAssets(closure_1);
            }
          }
        }
        if (cResult[20] !== arg1) {
          class O {
            constructor(arg0) {
              obj = closure_0(closure_2[12]);
              return obj.getApplicationAssetUrl(closure_1, arg0, arg0.metadata.width);
            }
          }
          cResult[20] = arg1;
          cResult[21] = O;
        } else {
          class O {
            constructor(arg0) {
              obj = closure_0(closure_2[12]);
              return obj.getApplicationAssetUrl(closure_1, arg0, arg0.metadata.width);
            }
          }
        }
        if (first1 != null) {
          class O {
            constructor(arg0) {
              obj = closure_0(closure_2[12]);
              return obj.getApplicationAssetUrl(closure_1, arg0, arg0.metadata.width);
            }
          }
        }
        if (cResult[22] !== undefined) {
          class O {
            constructor(arg0) {
              obj = closure_0(closure_2[12]);
              return obj.getApplicationAssetUrl(closure_1, arg0, arg0.metadata.width);
            }
          }
          if (first1 != null) {
            class O {
              constructor(arg0) {
                obj = closure_0(closure_2[12]);
                return obj.getApplicationAssetUrl(closure_1, arg0, arg0.metadata.width);
              }
            }
          }
          if (tmp35 == null) {
            class O {
              constructor(arg0) {
                obj = closure_0(closure_2[12]);
                return obj.getApplicationAssetUrl(closure_1, arg0, arg0.metadata.width);
              }
            }
          }
          if (first1 != null) {
            class O {
              constructor(arg0) {
                obj = closure_0(closure_2[12]);
                return obj.getApplicationAssetUrl(closure_1, arg0, arg0.metadata.width);
              }
            }
          }
          cResult[22] = undefined;
          cResult[23] = tmp35;
        } else {
          class O {
            constructor(arg0) {
              obj = closure_0(closure_2[12]);
              return obj.getApplicationAssetUrl(closure_1, arg0, arg0.metadata.width);
            }
          }
        }
        if (cResult[24] === tmp29) {
          class O {
            constructor(arg0) {
              obj = closure_0(closure_2[12]);
              return obj.getApplicationAssetUrl(closure_1, arg0, arg0.metadata.width);
            }
          }
        }
        const obj3 = { data: tmp20, applicationAssets: tmp29, getApplicationAssetUrl: O, localizedStrings };
        cResult[24] = tmp29;
        cResult[25] = O;
        cResult[26] = tmp20;
        cResult[27] = obj3;
        const tmpResult6 = tmp(tmp2[8]);
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
      const obj2 = require("UserApplicationIdentityActionCreators");
    }
  : function useApplicationWidgetLayoutRendererProps(arg0, arg1) {
      _require = arg0;
      importDefault = arg1;
      const userApplicationIdentities = require("UserApplicationIdentityActionCreators").useUserApplicationIdentities(
        arg0,
      );
      let obj = require("UserApplicationIdentityActionCreators");
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
        return resolvedValuesFromUserApplicationIdentityProfile.resolvedValuesFromUserApplicationIdentityProfile(
          profile,
        );
      }, items3);
      const obj3 = require("initialize");
      const items4 = [UserApplicationIdentityStore];
      const stateFromStores2 = require("initialize").useStateFromStores(
        items4,
        () => UserApplicationIdentityStore.getFetchState(closure_0) !== FetchState.FETCHED,
      );
      const tmpResult = require("initialize");
      const items5 = [ApplicationAssetsV2Store];
      stateFromStores3 = require("initialize").useStateFromStores(items5, () =>
        ApplicationAssetsV2Store.getAssets(closure_1),
      );
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
      const obj5 = {
        locale: stateFromStores1,
        surfaceConfigs: null,
        isLoading: null,
        hasIdentity: null,
        resolutionContext: null,
      };
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
      obj5.surfaceConfigs = surfaces;
      obj5.isLoading = stateFromStores2;
      obj5.hasIdentity = null != stateFromStores;
      obj5.resolutionContext = {
        data: memo1,
        applicationAssets: memo2,
        getApplicationAssetUrl: callback,
        localizedStrings,
      };
      return obj5;
    };
