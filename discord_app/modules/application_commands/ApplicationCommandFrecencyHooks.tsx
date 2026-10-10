// discord_app/modules/application_commands/ApplicationCommandFrecencyHooks.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import noop from "../../../_runtime/metro/00019__.js";
import ApplicationCommandFrecencyStore_mod from "ApplicationCommandFrecencyStore.tsx";

const require = globalThis.__r;

require = fn;
let ApplicationCommandFrecencyStore = fn(9249);
({ getFilteredTopCommands: c3, getTopRealCommands: closure_4 } = ApplicationCommandFrecencyStore);
let ApplicationCommandFrecencyStore = ApplicationCommandFrecencyStore_mod;
const UserSettingsTypes = fn(1095).UserSettingsTypes;
fn(558);
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTopCommands(arg0) {
      const cResult = c.c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          const FrecencyUserSettingsActionCreators =
            require("UserSettingsProtoActionCreators").FrecencyUserSettingsActionCreators;
          const ifUncached = FrecencyUserSettingsActionCreators.loadIfUncached(
            constants.FRECENCY_AND_FAVORITES_SETTINGS,
          );
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp4 = fn;
        tmp5 = items;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const effect = noop.useEffect(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ApplicationCommandFrecencyStore];
        class C {
          constructor() {
            return closure_1_5.getTopCommandsWithoutLoadingLatest();
          }
        }
        cResult[2] = items1;
        cResult[3] = C;
        let tmp8 = C;
        let tmp7 = items1;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const stateFromStores = initialize.useStateFromStores(tmp7, tmp8);
      if (cResult[4] === arg0) {
        if (cResult[5] === stateFromStores) {
          let tmp11 = cResult[6];
        }
        return tmp11;
      }
      const tmp12 = React3(stateFromStores, arg0);
      cResult[4] = arg0;
      cResult[5] = stateFromStores;
      cResult[6] = tmp12;
      tmp11 = tmp12;
      const tmpResult = initialize;
    }
  : function useTopCommands(arg0) {
      _require = arg0;
      const effect = noop.useEffect(() => {
        const FrecencyUserSettingsActionCreators = closure_0(stateFromStores[5]).FrecencyUserSettingsActionCreators;
        const ifUncached = FrecencyUserSettingsActionCreators.loadIfUncached(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }, []);
      const items = [ApplicationCommandFrecencyStore];
      stateFromStores = require("initialize").useStateFromStores(items, () =>
        topCommandsWithoutLoadingLatest.getTopCommandsWithoutLoadingLatest(),
      );
      const items1 = [stateFromStores, arg0];
      return noop.useMemo(() => React3(stateFromStores, closure_0), items1);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandFrecencyHooks.tsx");

export const useTopCommands = tmp3;
export const useTopRealCommands = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTopRealCommands(arg0) {
      const cResult = c.c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function u() {
          const FrecencyUserSettingsActionCreators =
            require("UserSettingsProtoActionCreators").FrecencyUserSettingsActionCreators;
          const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp4 = fn;
        tmp5 = items;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const effect = noop.useEffect(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ApplicationCommandFrecencyStore];
        class C {
          constructor() {
            return closure_1_5.getTopCommandsWithoutLoadingLatest();
          }
        }
        cResult[2] = items1;
        cResult[3] = C;
        let tmp8 = C;
        let tmp7 = items1;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const stateFromStores = initialize.useStateFromStores(tmp7, tmp8);
      if (cResult[4] === arg0) {
        if (cResult[5] === stateFromStores) {
          let tmp11 = cResult[6];
        }
        return tmp11;
      }
      const tmp12 = React4(React3(stateFromStores, arg0));
      cResult[4] = arg0;
      cResult[5] = stateFromStores;
      cResult[6] = tmp12;
      tmp11 = tmp12;
      const tmpResult = initialize;
    }
  : function useTopRealCommands(arg0) {
      _require = arg0;
      const effect = noop.useEffect(() => {
        const FrecencyUserSettingsActionCreators = closure_0(stateFromStores[5]).FrecencyUserSettingsActionCreators;
        const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
      }, []);
      const items = [ApplicationCommandFrecencyStore];
      stateFromStores = require("initialize").useStateFromStores(items, () =>
        topCommandsWithoutLoadingLatest.getTopCommandsWithoutLoadingLatest(),
      );
      const items1 = [stateFromStores, arg0];
      return noop.useMemo(() => React4(React3(stateFromStores, closure_0)), items1);
    };
