// === Module 12884: GameRelationshipStoreHooks ===

// Module 12884 (GameRelationshipStoreHooks)
import Constants from "Constants" /* 1085 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7142 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const RelationshipTypes = Constants.RelationshipTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GameRelationshipStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      const items = [GameRelationshipStore.getGameRelationshipsByType(closure_0), GameRelationshipStore.getGameRelationshipsVersion()];
      return items;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = require("get initialized");
  return _slicedToArray(tmpResult.useStateFromStores(first, tmp6, tmp7, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let items = [GameRelationshipStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return _slicedToArray(obj.useStateFromStores(items, () => {
    const items = [GameRelationshipStore.getGameRelationshipsByType(closure_0), GameRelationshipStore.getGameRelationshipsVersion()];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GameRelationshipStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp6;
    let tmp7;
    if (cResult[2] === arg0) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = require("get initialized");
    return _slicedToArray(tmpResult.useStateFromStores(first, tmp6, tmp7, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
  }
  const fn = function u() {
    const items = [GameRelationshipStore.getGameRelationshipsForUserByType(closure_0, closure_1), GameRelationshipStore.getGameRelationshipsVersion()];
    return items;
  };
  const items1 = [arg1, arg0];
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
}) : ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let items = [GameRelationshipStore];
  const items1 = [arg1, arg0];
  const obj = require("get initialized");
  return _slicedToArray(obj.useStateFromStores(items, () => {
    const items = [GameRelationshipStore.getGameRelationshipsForUserByType(closure_0, closure_1), GameRelationshipStore.getGameRelationshipsVersion()];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
});
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GameRelationshipStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      const gameRelationshipsForUser = GameRelationshipStore.getGameRelationshipsForUser(closure_0);
      const items = [gameRelationshipsForUser.length > 0, GameRelationshipStore.getGameRelationshipsVersion()];
      return items;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = require("get initialized");
  return _slicedToArray(tmpResult.useStateFromStores(first, tmp6, tmp7, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let items = [GameRelationshipStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return _slicedToArray(obj.useStateFromStores(items, () => {
    const gameRelationshipsForUser = GameRelationshipStore.getGameRelationshipsForUser(closure_0);
    const items = [gameRelationshipsForUser.length > 0, GameRelationshipStore.getGameRelationshipsVersion()];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GameRelationshipStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp6;
    let tmp7;
    if (cResult[2] === arg0) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = require("get initialized");
    return _slicedToArray(tmpResult.useStateFromStores(first, tmp6, tmp7, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
  }
  const fn = function u() {
    const gameRelationshipsForUserByType = GameRelationshipStore.getGameRelationshipsForUserByType(closure_0, closure_1);
    const items = [gameRelationshipsForUserByType.length > 0, GameRelationshipStore.getGameRelationshipsVersion()];
    return items;
  };
  const items1 = [arg1, arg0];
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
}) : ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let items = [GameRelationshipStore];
  const items1 = [arg1, arg0];
  const obj = require("get initialized");
  return _slicedToArray(obj.useStateFromStores(items, () => {
    const gameRelationshipsForUserByType = GameRelationshipStore.getGameRelationshipsForUserByType(closure_0, closure_1);
    const items = [gameRelationshipsForUserByType.length > 0, GameRelationshipStore.getGameRelationshipsVersion()];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
});
let fn = (id) => closure_5(id, RelationshipTypes.FRIEND);
const fn2 = (id) => closure_5(id, RelationshipTypes.PENDING_INCOMING);
const result2 = size.fileFinishedImporting("modules/game_relationships/GameRelationshipStoreHooks.tsx");

export const useGameRelationshipsByType = tmp2;
export const useGameFriendsForUser = fn;
export const useIncomingGameRelationshipsForUser = fn2;
export const useHasGameRelationshipsForUser = tmp5;
export const useHasGameRelationshipsForUserByType = tmp6;