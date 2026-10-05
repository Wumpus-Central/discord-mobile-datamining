// discord_app/modules/user_profile/hooks/useShouldShowMutualInfo.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../_runtime/00576_react.js";
import useIsUserProfileObfuscatedDefault from "useIsUserProfileObfuscated.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let id;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
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
      id = undefined;
      const tmp8 = useIsUserProfileObfuscatedDefault(id);
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      return id !== id.id && !tmp8;
    }
  : (id) => {
      let currentUser;
      const items = [UserStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      id = undefined;
      const tmp2 = useIsUserProfileObfuscatedDefault(id);
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      return id !== id.id && !tmp2;
    };
const result = size.fileFinishedImporting("modules/user_profile/hooks/useShouldShowMutualInfo.tsx");

export default tmp2;
