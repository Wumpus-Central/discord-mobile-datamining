// === Module 12427: useGameRelationshipsByType ===

// Module 12427 (useGameRelationshipsByType)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "recountRelationshipTypes" /* 7350 */;
import { RelationshipTypes } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_relationships/GameRelationshipStoreHooks.tsx");

export const useGameRelationshipsByType = function useGameRelationshipsByType(FRIEND) {
  const _require = FRIEND;
  let items = [closure_3];
  const items1 = [FRIEND];
  return callback(_require(589).useStateFromStores(items, () => {
    const items = [closure_1_3.getGameRelationshipsByType(closure_0), closure_1_3.getGameRelationshipsVersion()];
    return items;
  }, items1, _require(5340).isVersionEqual), 1)[0];
};
export const useGameFriendsForUser = function useGameFriendsForUser(id) {
  const FRIEND = RelationshipTypes.FRIEND;
  const _require = id;
  const items = [closure_3];
  const items1 = [FRIEND, id];
  return callback(_require(FRIEND[3]).useStateFromStores(items, () => {
    const items = [closure_1_3.getGameRelationshipsForUserByType(closure_0, PENDING_INCOMING), closure_1_3.getGameRelationshipsVersion()];
    return items;
  }, items1, _require(FRIEND[4]).isVersionEqual), 1)[0];
};
export const useIncomingGameRelationshipsForUser = function useIncomingGameRelationshipsForUser(id) {
  const PENDING_INCOMING = RelationshipTypes.PENDING_INCOMING;
  const _require = id;
  let items = [closure_3];
  const items1 = [PENDING_INCOMING, id];
  return callback(_require(PENDING_INCOMING[3]).useStateFromStores(items, () => {
    const items = [closure_1_3.getGameRelationshipsForUserByType(closure_0, PENDING_INCOMING), closure_1_3.getGameRelationshipsVersion()];
    return items;
  }, items1, _require(PENDING_INCOMING[4]).isVersionEqual), 1)[0];
};
export const useHasGameRelationshipsForUser = function useHasGameRelationshipsForUser(arg0) {
  const _require = arg0;
  let items = [closure_3];
  const items1 = [arg0];
  return callback(_require(589).useStateFromStores(items, () => {
    const gameRelationshipsForUser = closure_1_3.getGameRelationshipsForUser(closure_0);
    const items = [gameRelationshipsForUser.length > 0, closure_1_3.getGameRelationshipsVersion()];
    return items;
  }, items1, _require(5340).isVersionEqual), 1)[0];
};
export const useHasGameRelationshipsForUserByType = function useHasGameRelationshipsForUserByType(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  let items = [closure_3];
  const items1 = [arg1, arg0];
  return callback(_require(589).useStateFromStores(items, () => {
    const gameRelationshipsForUserByType = closure_1_3.getGameRelationshipsForUserByType(closure_0, closure_1);
    const items = [gameRelationshipsForUserByType.length > 0, closure_1_3.getGameRelationshipsVersion()];
    return items;
  }, items1, _require(5340).isVersionEqual), 1)[0];
};