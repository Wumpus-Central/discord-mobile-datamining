// === Module 11001: useFriendsSinceDate ===

// Module 11001 (useFriendsSinceDate)
import LocaleStore from "LocaleStore" /* 2116 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;

const require = globalThis.__r;

const require = fn;
const RelationshipTypes = fn(1085).RelationshipTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useFriendsSinceDate.tsx");

export const useFriendsSinceDate = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocaleStore];
    const fn = function c() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [RelationshipStore];
    cResult[2] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const fn2 = function p() {
      let since = null;
      if (RelationshipStore.getRelationshipType(closure_0) === RelationshipTypes.FRIEND) {
        since = RelationshipStore.getSince(closure_0);
      }
      return since;
    };
    const items2 = [arg0];
    cResult[3] = arg0;
    cResult[4] = fn2;
    cResult[5] = items2;
    let tmp11 = items2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(tmp8, tmp10, tmp11);
  if (cResult[6] === stateFromStores1) {
    if (cResult[7] === stateFromStores) {
      let tmp13 = cResult[8];
    }
    return tmp13;
  }
  const tmpResult3 = require("useStateFromStores");
  const createdAtDate = require("ConnectionsUtils").getCreatedAtDate(stateFromStores1, stateFromStores);
  cResult[6] = stateFromStores1;
  cResult[7] = stateFromStores;
  cResult[8] = createdAtDate;
  tmp13 = createdAtDate;
  const tmpResult4 = require("ConnectionsUtils");
}) : ((arg0) => {
  _require = arg0;
  const items = [LocaleStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => locale.locale);
  const obj = require("useStateFromStores");
  const items1 = [RelationshipStore];
  const items2 = [arg0];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => {
    let since = null;
    if (RelationshipStore.getRelationshipType(closure_0) === RelationshipTypes.FRIEND) {
      since = RelationshipStore.getSince(closure_0);
    }
    return since;
  }, items2);
  const obj2 = require("useStateFromStores");
  return require("ConnectionsUtils").getCreatedAtDate(stateFromStores1, stateFromStores);
});