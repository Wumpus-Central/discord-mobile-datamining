// discord_app/modules/collectibles/hooks/useCurrentUser.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../_runtime/00576_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let currentUser;
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function n() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      _modDef38(null != stateFromStores, "user has to be signed in before accessing shop");
      return stateFromStores;
    }
  : () => {
      let currentUser;
      const items = [UserStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      _modDef38(null != stateFromStores, "user has to be signed in before accessing shop");
      return stateFromStores;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let currentUser;
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function n() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      let currentUser;
      const items = [UserStore];
      const obj = get_initialized;
      return obj.useStateFromStores(items, () => currentUser.getCurrentUser());
    };
const result = size.fileFinishedImporting("modules/collectibles/hooks/useCurrentUser.tsx");

export const useCurrentUser = tmp2;
export const useCurrentUserIfAvailable = tmp3;
