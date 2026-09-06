// === Module 12593: useIsRelationshipTypeSpamReportable ===

// Module 12593 (useIsRelationshipTypeSpamReportable)
import closure_2 from "markAllUserIdListsStale" /* 4209 */;
import { RelationshipTypes } from "ME" /* 1074 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/messages/useIsRelationshipTypeSpamReportable.tsx");

export const useIsRelationshipTypeSpamReportable = function useIsRelationshipTypeSpamReportable(id) {
  const _require = id;
  const items = [closure_2];
  const items1 = [id];
  const stateFromStores = _require(504).useStateFromStores(items, () => closure_1_2.getRelationshipType(closure_0), items1);
  return stateFromStores === RelationshipTypes.NONE || stateFromStores === RelationshipTypes.BLOCKED || stateFromStores === RelationshipTypes.PENDING_INCOMING;
};