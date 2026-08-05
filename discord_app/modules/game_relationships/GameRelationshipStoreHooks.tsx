import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { isVersionEqual } from "../../utils/SecondaryIndexMapUtils.tsx";
// discord_app/modules/game_relationships/GameRelationshipStoreHooks.tsx
import _slicedToArray from "_slicedToArray";
import recountRelationshipTypes from "recountRelationshipTypes";
import { RelationshipTypes } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/game_relationships/GameRelationshipStoreHooks.tsx");

export const useGameRelationshipsByType = function useGameRelationshipsByType(FRIEND) {
  const _require = FRIEND;
  let items = [recountRelationshipTypes];
  const items1 = [FRIEND];
  return callback(_initialize.useStateFromStores(items, () => {
    const items = [outer1_3.getGameRelationshipsByType(closure_0), outer1_3.getGameRelationshipsVersion()];
    return items;
  }, items1, _isVersionEqual.isVersionEqual), 1)[0];
};
export const useGameFriendsForUser = function useGameFriendsForUser(id) {
  const FRIEND = RelationshipTypes.FRIEND;
  const _require = id;
  const items = [recountRelationshipTypes];
  const items1 = [FRIEND, id];
  return callback(_require(FRIEND[3]).useStateFromStores(items, () => {
    const items = [outer1_3.getGameRelationshipsForUserByType(closure_0, PENDING_INCOMING), outer1_3.getGameRelationshipsVersion()];
    return items;
  }, items1, _require(FRIEND[4]).isVersionEqual), 1)[0];
};
export const useIncomingGameRelationshipsForUser = function useIncomingGameRelationshipsForUser(id) {
  const PENDING_INCOMING = RelationshipTypes.PENDING_INCOMING;
  const _require = id;
  let items = [recountRelationshipTypes];
  const items1 = [PENDING_INCOMING, id];
  return callback(_require(PENDING_INCOMING[3]).useStateFromStores(items, () => {
    const items = [outer1_3.getGameRelationshipsForUserByType(closure_0, PENDING_INCOMING), outer1_3.getGameRelationshipsVersion()];
    return items;
  }, items1, _require(PENDING_INCOMING[4]).isVersionEqual), 1)[0];
};
export const useHasGameRelationshipsForUser = function useHasGameRelationshipsForUser(arg0) {
  const _require = arg0;
  let items = [recountRelationshipTypes];
  const items1 = [arg0];
  return callback(_initialize.useStateFromStores(items, () => {
    const gameRelationshipsForUser = outer1_3.getGameRelationshipsForUser(closure_0);
    const items = [gameRelationshipsForUser.length > 0, outer1_3.getGameRelationshipsVersion()];
    return items;
  }, items1, _isVersionEqual.isVersionEqual), 1)[0];
};
export const useHasGameRelationshipsForUserByType = function useHasGameRelationshipsForUserByType(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  let items = [recountRelationshipTypes];
  const items1 = [arg1, arg0];
  return callback(_initialize.useStateFromStores(items, () => {
    const gameRelationshipsForUserByType = outer1_3.getGameRelationshipsForUserByType(closure_0, closure_1);
    const items = [gameRelationshipsForUserByType.length > 0, outer1_3.getGameRelationshipsVersion()];
    return items;
  }, items1, _isVersionEqual.isVersionEqual), 1)[0];
};