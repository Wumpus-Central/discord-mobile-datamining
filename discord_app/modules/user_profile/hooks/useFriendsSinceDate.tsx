// === Module 11640: useFriendsSinceDate ===

// Module 11640 (useFriendsSinceDate)
import LocaleStore from "LocaleStore" /* 2186 */;
import RelationshipStore from "RelationshipStore" /* 5082 */;

const require = globalThis.__r;

const require = fn;
const RelationshipTypes = fn(1072).RelationshipTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useFriendsSinceDate.tsx");

export function useFriendsSinceDate(userId) {
  _require = userId;
  items = [LocaleStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => locale.locale);
  const obj = require("useStateFromStores");
  const items1 = [RelationshipStore];
  const items2 = [userId];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => {
    let since = null;
    if (RelationshipStore.getRelationshipType(closure_0) === RelationshipTypes.FRIEND) {
      since = RelationshipStore.getSince(closure_0);
    }
    return since;
  }, items2);
  const obj2 = require("useStateFromStores");
  return require("ConnectionsUtils").getCreatedAtDate(stateFromStores1, stateFromStores);
}