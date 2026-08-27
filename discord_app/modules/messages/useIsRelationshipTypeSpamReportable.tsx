// === Module 12072: useIsRelationshipTypeSpamReportable ===

// Module 12072 (useIsRelationshipTypeSpamReportable)
import closure_2 from "markAllUserIdListsStale" /* 4098 */;
import { RelationshipTypes } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/messages/useIsRelationshipTypeSpamReportable.tsx");

export const useIsRelationshipTypeSpamReportable = function useIsRelationshipTypeSpamReportable(id) {
  const _require = id;
  const items = [closure_2];
  const items1 = [id];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_2.getRelationshipType(closure_0), items1);
  return stateFromStores === RelationshipTypes.NONE || stateFromStores === RelationshipTypes.BLOCKED || stateFromStores === RelationshipTypes.PENDING_INCOMING;
};