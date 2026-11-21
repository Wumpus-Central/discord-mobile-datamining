// === Module 13488: useIsRelationshipTypeSpamReportable ===

// Module 13488 (useIsRelationshipTypeSpamReportable)
import RelationshipStore from "RelationshipStore" /* 4855 */;

const require = globalThis.__r;

const require = fn;
const RelationshipTypes = fn(1071).RelationshipTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/useIsRelationshipTypeSpamReportable.tsx");

export function useIsRelationshipTypeSpamReportable(id) {
  _require = id;
  items = [RelationshipStore];
  const items1 = [id];
  const stateFromStores = require("initialize").useStateFromStores(items, () => RelationshipStore.getRelationshipType(closure_0), items1);
  return stateFromStores === RelationshipTypes.NONE || stateFromStores === RelationshipTypes.BLOCKED || stateFromStores === RelationshipTypes.PENDING_INCOMING;
}