// discord_app/modules/provisional_accounts/hooks/useProvisionalAccountApplication.tsx
import GameRelationshipStore from "../../game_relationships/GameRelationshipStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GameRelationshipStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          const gameRelationshipsForUser = GameRelationshipStore.getGameRelationshipsForUser(closure_0);
          return 0 !== gameRelationshipsForUser.length ? gameRelationshipsForUser[0].applicationId : undefined;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      const tmpResult2 = require("useGetOrFetchApplications");
      return tmpResult2.useGetOrFetchApplication(stateFromStores);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [GameRelationshipStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => {
        const gameRelationshipsForUser = GameRelationshipStore.getGameRelationshipsForUser(closure_0);
        return 0 !== gameRelationshipsForUser.length ? gameRelationshipsForUser[0].applicationId : undefined;
      });
      const obj2 = require("useGetOrFetchApplications");
      return obj2.useGetOrFetchApplication(stateFromStores);
    };
const result = size.fileFinishedImporting("modules/provisional_accounts/hooks/useProvisionalAccountApplication.tsx");

export default tmp2;
