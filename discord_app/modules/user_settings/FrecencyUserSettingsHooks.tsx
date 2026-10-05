// discord_app/modules/user_settings/FrecencyUserSettingsHooks.tsx
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators.tsx";
import react from "../../../_runtime/00019_react.js";
import UserSettingsProtoStore from "UserSettingsProtoStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let tmp5;
      let tmp6;
      let tmp8;
      let tmp9;
      const obj = require("react");
      const cResult = obj.c(5);
      const tmp = _require;
      _require = tmp4;
      if (cResult[0] !== (undefined === arg0 || arg0)) {
        const fn = function n() {
          if (closure_0) {
            const FrecencyUserSettingsActionCreators =
              UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators;
            const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
          }
        };
        const items = [undefined === arg0 || arg0];
        cResult[0] = undefined === arg0 || arg0;
        cResult[1] = fn;
        cResult[2] = items;
        tmp6 = items;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      const effect = react.useEffect(tmp5, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserSettingsProtoStore];
        const fn2 = function f() {
          return UserSettingsProtoStore.frecencyWithoutFetchingLatest;
        };
        cResult[3] = items1;
        cResult[4] = fn2;
        tmp9 = fn2;
        tmp8 = items1;
      } else {
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(tmp8, tmp9);
    }
  : () => {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      const items = [flag];
      const effect = react.useEffect(() => {
        if (flag) {
          const FrecencyUserSettingsActionCreators = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators;
          const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
        }
      }, items);
      const items1 = [UserSettingsProtoStore];
      const obj = flag(504);
      return obj.useStateFromStores(items1, () => UserSettingsProtoStore.frecencyWithoutFetchingLatest);
    };
const result = size.fileFinishedImporting("modules/user_settings/FrecencyUserSettingsHooks.tsx");

export const useFrecencySettings = tmp2;
