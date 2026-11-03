// === Module 15049: GameRelationshipStoreHooks ===

// Module 15049 (GameRelationshipStoreHooks)
import _slicedToArray from "module_32" /* 32 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7924 */;

const require = globalThis.__r;

const require = fn;
const RelationshipTypes = fn(1072).RelationshipTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_relationships/GameRelationshipStoreHooks.tsx");

export function useGameRelationshipsByType(FRIEND) {
  _require = FRIEND;
  items = [GameRelationshipStore];
  const items1 = [FRIEND];
  return _slicedToArray(require("initialize").useStateFromStores(items, () => {
    items = [GameRelationshipStore.getGameRelationshipsByType(closure_0), GameRelationshipStore.getGameRelationshipsVersion()];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
}
export function useGameFriendsForUser(id) {
  const FRIEND = RelationshipTypes.FRIEND;
  _require = id;
  items = [GameRelationshipStore];
  const items1 = [FRIEND, id];
  return _slicedToArray(require("initialize").useStateFromStores(items, () => {
    items = [GameRelationshipStore.getGameRelationshipsForUserByType(closure_0, PENDING_INCOMING), GameRelationshipStore.getGameRelationshipsVersion()];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
}
export function useIncomingGameRelationshipsForUser(id) {
  const PENDING_INCOMING = RelationshipTypes.PENDING_INCOMING;
  _require = id;
  items = [GameRelationshipStore];
  const items1 = [PENDING_INCOMING, id];
  return _slicedToArray(require("initialize").useStateFromStores(items, () => {
    items = [GameRelationshipStore.getGameRelationshipsForUserByType(closure_0, PENDING_INCOMING), GameRelationshipStore.getGameRelationshipsVersion()];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
}
export function useHasGameRelationshipsForUser(arg0) {
  _require = arg0;
  items = [GameRelationshipStore];
  const items1 = [arg0];
  return _slicedToArray(require("initialize").useStateFromStores(items, () => {
    const gameRelationshipsForUser = GameRelationshipStore.getGameRelationshipsForUser(closure_0);
    items = [gameRelationshipsForUser.length > 0, GameRelationshipStore.getGameRelationshipsVersion()];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
}
export function useHasGameRelationshipsForUserByType(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  items = [GameRelationshipStore];
  const items1 = [arg1, arg0];
  return _slicedToArray(require("initialize").useStateFromStores(items, () => {
    const gameRelationshipsForUserByType = GameRelationshipStore.getGameRelationshipsForUserByType(closure_0, closure_1);
    items = [gameRelationshipsForUserByType.length > 0, GameRelationshipStore.getGameRelationshipsVersion()];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
}