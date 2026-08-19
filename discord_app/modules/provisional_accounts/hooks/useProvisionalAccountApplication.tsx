// === Module 11801: useProvisionalAccountApplication ===

// Module 11801 (useProvisionalAccountApplication)
import recountRelationshipTypes from "recountRelationshipTypes" /* 5406 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/provisional_accounts/hooks/useProvisionalAccountApplication.tsx");

export default function useProvisionalAccountApplication(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    const gameRelationshipsForUser = closure_1_2.getGameRelationshipsForUser(closure_0);
    return 0 !== gameRelationshipsForUser.length ? gameRelationshipsForUser[0].applicationId : undefined;
  });
  const obj = _require(589);
  return _require(7145).useGetOrFetchApplication(stateFromStores);
};