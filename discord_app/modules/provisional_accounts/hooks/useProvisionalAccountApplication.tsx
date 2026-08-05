// discord_app/modules/provisional_accounts/hooks/useProvisionalAccountApplication.tsx
import recountRelationshipTypes from "recountRelationshipTypes";

const require = arg1;
const result = require("useGetOrFetchApplications").fileFinishedImporting("modules/provisional_accounts/hooks/useProvisionalAccountApplication.tsx");

export default function useProvisionalAccountApplication(arg0) {
  const _require = arg0;
  const items = [recountRelationshipTypes];
  const stateFromStores = _require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const gameRelationshipsForUser = outer1_2.getGameRelationshipsForUser(closure_0);
    return 0 !== gameRelationshipsForUser.length ? gameRelationshipsForUser[0].applicationId : undefined;
  });
  const obj = _require("../../../../discord_common/js/packages/flux/index.tsx");
  return _require("../../applications/useGetOrFetchApplications.tsx").useGetOrFetchApplication(stateFromStores);
};