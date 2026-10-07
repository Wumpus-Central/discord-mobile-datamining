// discord_app/modules/user_settings/FrecencyUserSettingsHooks.tsx
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import UserSettingsProtoStore from "UserSettingsProtoStore.tsx";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/FrecencyUserSettingsHooks.tsx");

export const useFrecencySettings = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = require("c").c(5);
      _require = tmp4;
      if (cResult[0] !== (undefined === arg0 || arg0)) {
        const fn = function n() {
          if (closure_0) {
            const FrecencyUserSettingsActionCreators =
              UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators;
            const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
          }
        };
        const items = [tmp4];
        cResult[0] = tmp4;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp6 = items;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      const effect = noop.useEffect(tmp5, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserSettingsProtoStore];
        const fn2 = function f() {
          return UserSettingsProtoStore.frecencyWithoutFetchingLatest;
        };
        cResult[3] = items1;
        cResult[4] = fn2;
        let tmp9 = fn2;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(tmp8, tmp9);
    }
  : () => {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      const items = [flag];
      const effect = noop.useEffect(() => {
        if (flag) {
          const FrecencyUserSettingsActionCreators = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators;
          const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
        }
      }, items);
      const items1 = [UserSettingsProtoStore];
      return flag(504).useStateFromStores(items1, () => UserSettingsProtoStore.frecencyWithoutFetchingLatest);
    };
