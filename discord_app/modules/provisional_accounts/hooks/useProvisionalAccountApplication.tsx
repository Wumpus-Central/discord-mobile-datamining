// === Module 12409: useProvisionalAccountApplication ===

// Module 12409 (useProvisionalAccountApplication)
import GameRelationshipStore from "GameRelationshipStore" /* 7335 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/provisional_accounts/hooks/useProvisionalAccountApplication.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useProvisionalAccountApplication(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameRelationshipStore];
    cResult[0] = items;
    let first = items;
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
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  const tmpResult = require("initialize");
  return require("useGetOrFetchApplications").useGetOrFetchApplication(stateFromStores);
}) : (function useProvisionalAccountApplication(arg0) {
  _require = arg0;
  const items = [GameRelationshipStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const gameRelationshipsForUser = GameRelationshipStore.getGameRelationshipsForUser(closure_0);
    return 0 !== gameRelationshipsForUser.length ? gameRelationshipsForUser[0].applicationId : undefined;
  });
  const obj = require("initialize");
  return require("useGetOrFetchApplications").useGetOrFetchApplication(stateFromStores);
});