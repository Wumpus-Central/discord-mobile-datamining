// discord_app/modules/application_commands/ApplicationCommandFrecencyHooks.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../_runtime/00576_react.js";
import UserSettingsConstants from "../user_settings/UserSettingsConstants.tsx";
import react from "../../../_runtime/00019_react.js";
import ApplicationCommandFrecencyStore_mod from "ApplicationCommandFrecencyStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let ApplicationCommandFrecencyStore = ApplicationCommandFrecencyStore_mod;
({ getFilteredTopCommands: c3, getTopRealCommands: closure_4 } = ApplicationCommandFrecencyStore);
ApplicationCommandFrecencyStore = ApplicationCommandFrecencyStore_mod;
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp4;
      let tmp5;
      let tmp7;
      let tmp8;
      let topCommandsWithoutLoadingLatest;
      const obj = react2;
      const cResult = obj.c(7);
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
      const effect = react.useEffect(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ApplicationCommandFrecencyStore];
        class S {
          constructor() {
            return topCommandsWithoutLoadingLatest.getTopCommandsWithoutLoadingLatest();
          }
        }
        cResult[2] = items1;
        cResult[3] = S;
        tmp8 = S;
        tmp7 = items1;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
      if (cResult[4] === arg0) {
        let tmp11;
        if (cResult[5] === stateFromStores) {
          tmp11 = cResult[6];
        }
        return tmp11;
      }
      const tmp12 = _false(stateFromStores, arg0);
      cResult[4] = arg0;
      cResult[5] = stateFromStores;
      cResult[6] = tmp12;
      tmp11 = tmp12;
    }
  : (arg0) => {
      let closure_0;
      let stateFromStores;
      let topCommandsWithoutLoadingLatest;
      _require = arg0;
      const effect = react.useEffect(() => {
        const FrecencyUserSettingsActionCreators = closure_0(stateFromStores[5]).FrecencyUserSettingsActionCreators;
        const ifUncached = FrecencyUserSettingsActionCreators.loadIfUncached(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }, []);
      const items = [ApplicationCommandFrecencyStore];
      const obj = require("get initialized");
      stateFromStores = obj.useStateFromStores(items, () =>
        topCommandsWithoutLoadingLatest.getTopCommandsWithoutLoadingLatest(),
      );
      const items1 = [stateFromStores, arg0];
      return react.useMemo(() => _false(stateFromStores, closure_0), items1);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp4;
      let tmp5;
      let tmp7;
      let tmp8;
      let topCommandsWithoutLoadingLatest;
      const obj = react2;
      const cResult = obj.c(7);
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
      const effect = react.useEffect(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ApplicationCommandFrecencyStore];
        class S {
          constructor() {
            return topCommandsWithoutLoadingLatest.getTopCommandsWithoutLoadingLatest();
          }
        }
        cResult[2] = items1;
        cResult[3] = S;
        tmp8 = S;
        tmp7 = items1;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
      if (cResult[4] === arg0) {
        let tmp11;
        if (cResult[5] === stateFromStores) {
          tmp11 = cResult[6];
        }
        return tmp11;
      }
      const tmp12 = React3(_false(stateFromStores, arg0));
      cResult[4] = arg0;
      cResult[5] = stateFromStores;
      cResult[6] = tmp12;
      tmp11 = tmp12;
    }
  : (arg0) => {
      let closure_0;
      let stateFromStores;
      let topCommandsWithoutLoadingLatest;
      _require = arg0;
      const effect = react.useEffect(() => {
        const FrecencyUserSettingsActionCreators = closure_0(stateFromStores[5]).FrecencyUserSettingsActionCreators;
        const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
      }, []);
      const items = [ApplicationCommandFrecencyStore];
      const obj = require("get initialized");
      stateFromStores = obj.useStateFromStores(items, () =>
        topCommandsWithoutLoadingLatest.getTopCommandsWithoutLoadingLatest(),
      );
      const items1 = [stateFromStores, arg0];
      return react.useMemo(() => React3(_false(stateFromStores, closure_0)), items1);
    };
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandFrecencyHooks.tsx");

export const useTopCommands = tmp3;
export const useTopRealCommands = tmp4;
