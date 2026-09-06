// === Module 13063: GameRelationshipStoreHooks ===

// Module 13063 (GameRelationshipStoreHooks)
import _slicedToArray from "module_32" /* 32 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7658 */;

const require = fn;
const RelationshipTypes = fn(1074).RelationshipTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_relationships/GameRelationshipStoreHooks.tsx");

export const useGameRelationshipsByType = function useGameRelationshipsByType(FRIEND) {
  _require = FRIEND;
  let items = [GameRelationshipStore];
  const items1 = [FRIEND];
  return _slicedToArray(require("initialize").useStateFromStores(items, () => {
    const items = [GameRelationshipStore.getGameRelationshipsByType(closure_0), GameRelationshipStore.getGameRelationshipsVersion()];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
};
export const useGameFriendsForUser = function useGameFriendsForUser(id) {
  const FRIEND = RelationshipTypes.FRIEND;
  _require = id;
  const items = [GameRelationshipStore];
  const items1 = [FRIEND, id];
  return _slicedToArray(require("initialize").useStateFromStores(items, () => {
    const items = [GameRelationshipStore.getGameRelationshipsForUserByType(closure_0, PENDING_INCOMING), GameRelationshipStore.getGameRelationshipsVersion()];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
};
export const useIncomingGameRelationshipsForUser = function useIncomingGameRelationshipsForUser(id) {
  const PENDING_INCOMING = RelationshipTypes.PENDING_INCOMING;
  _require = id;
  let items = [GameRelationshipStore];
  const items1 = [PENDING_INCOMING, id];
  return _slicedToArray(require("initialize").useStateFromStores(items, () => {
    const items = [GameRelationshipStore.getGameRelationshipsForUserByType(closure_0, PENDING_INCOMING), GameRelationshipStore.getGameRelationshipsVersion()];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
};
export const useHasGameRelationshipsForUser = function useHasGameRelationshipsForUser(arg0) {
  _require = arg0;
  let items = [GameRelationshipStore];
  const items1 = [arg0];
  return _slicedToArray(require("initialize").useStateFromStores(items, () => {
    const gameRelationshipsForUser = GameRelationshipStore.getGameRelationshipsForUser(closure_0);
    const items = [gameRelationshipsForUser.length > 0, GameRelationshipStore.getGameRelationshipsVersion()];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
};
export const useHasGameRelationshipsForUserByType = function useHasGameRelationshipsForUserByType(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  let items = [GameRelationshipStore];
  const items1 = [arg1, arg0];
  return _slicedToArray(require("initialize").useStateFromStores(items, () => {
    const gameRelationshipsForUserByType = GameRelationshipStore.getGameRelationshipsForUserByType(closure_0, closure_1);
    const items = [gameRelationshipsForUserByType.length > 0, GameRelationshipStore.getGameRelationshipsVersion()];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
};