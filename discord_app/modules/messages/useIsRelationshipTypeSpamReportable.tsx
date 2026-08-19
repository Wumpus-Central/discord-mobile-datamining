// === Module 11762: useIsRelationshipTypeSpamReportable ===

// Module 11762 (useIsRelationshipTypeSpamReportable)
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import { RelationshipTypes } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/messages/useIsRelationshipTypeSpamReportable.tsx");

export const useIsRelationshipTypeSpamReportable = function useIsRelationshipTypeSpamReportable(id) {
  const _require = id;
  const items = [closure_2];
  const items1 = [id];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_2.getRelationshipType(closure_0), items1);
  return stateFromStores === RelationshipTypes.NONE || stateFromStores === RelationshipTypes.BLOCKED || stateFromStores === RelationshipTypes.PENDING_INCOMING;
};