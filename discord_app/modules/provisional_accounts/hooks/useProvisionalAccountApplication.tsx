// discord_app/modules/provisional_accounts/hooks/useProvisionalAccountApplication.tsx
import recountRelationshipTypes from "../../game_relationships/GameRelationshipStore.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/provisional_accounts/hooks/useProvisionalAccountApplication.tsx");

export default function useProvisionalAccountApplication(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const gameRelationshipsForUser = closure_1_2.getGameRelationshipsForUser(closure_0);
    return 0 !== gameRelationshipsForUser.length ? gameRelationshipsForUser[0].applicationId : undefined;
  });
  const obj = initialize;
  return require("../../applications/useGetOrFetchApplications.tsx").useGetOrFetchApplication(stateFromStores);
};