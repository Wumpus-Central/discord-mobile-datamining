// discord_app/modules/collectibles/hooks/useCurrentUser.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useCurrentUser() {
      const cResult = c.c(2);
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
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      _modDef38(null != stateFromStores, "user has to be signed in before accessing shop");
      return stateFromStores;
    }
  : function useCurrentUser() {
      const items = [UserStore];
      const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
      _modDef38(null != stateFromStores, "user has to be signed in before accessing shop");
      return stateFromStores;
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useCurrentUser.tsx");

export const useCurrentUser = tmp2;
export const useCurrentUserIfAvailable = ReactCompilerGating.isReactCompilerEnabled()
  ? function useCurrentUserIfAvailable() {
      const cResult = c.c(2);
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
      return initialize.useStateFromStores(tmp4, tmp5);
    }
  : function useCurrentUserIfAvailable() {
      const items = [UserStore];
      return initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
    };
