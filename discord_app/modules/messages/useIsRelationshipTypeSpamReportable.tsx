// === Module 12593: useIsRelationshipTypeSpamReportable ===

// Module 12593 (useIsRelationshipTypeSpamReportable)
import RelationshipStore from "RelationshipStore" /* 4209 */;

const require = fn;
const RelationshipTypes = fn(1074).RelationshipTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/useIsRelationshipTypeSpamReportable.tsx");

export const useIsRelationshipTypeSpamReportable = function useIsRelationshipTypeSpamReportable(id) {
  _require = id;
  const items = [RelationshipStore];
  const items1 = [id];
  const stateFromStores = require("initialize").useStateFromStores(items, () => RelationshipStore.getRelationshipType(closure_0), items1);
  return stateFromStores === RelationshipTypes.NONE || stateFromStores === RelationshipTypes.BLOCKED || stateFromStores === RelationshipTypes.PENDING_INCOMING;
};