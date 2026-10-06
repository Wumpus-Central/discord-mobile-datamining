// === Module 11001: useFriendsSinceDate ===

// Module 11001 (useFriendsSinceDate)
import Constants from "Constants" /* 1085 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const RelationshipTypes = Constants.RelationshipTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let locale;
  let tmp10;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(9);
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
  const tmpResult = require("useStateFromStores");
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [RelationshipStore];
    cResult[2] = items1;
    tmp8 = items1;
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
    tmp11 = items2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  const tmpResult3 = require("useStateFromStores");
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp10, tmp11);
  if (cResult[6] === stateFromStores1) {
    let tmp13;
    if (cResult[7] === stateFromStores) {
      tmp13 = cResult[8];
    }
    return tmp13;
  }
  const tmpResult4 = require("ConnectionsUtils");
  const createdAtDate = tmpResult4.getCreatedAtDate(stateFromStores1, stateFromStores);
  cResult[6] = stateFromStores1;
  cResult[7] = stateFromStores;
  cResult[8] = createdAtDate;
  tmp13 = createdAtDate;
}) : ((arg0) => {
  let closure_0;
  let locale;
  _require = arg0;
  const items = [LocaleStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [RelationshipStore];
  const items2 = [arg0];
  const obj2 = require("useStateFromStores");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let since = null;
    if (RelationshipStore.getRelationshipType(closure_0) === RelationshipTypes.FRIEND) {
      since = RelationshipStore.getSince(closure_0);
    }
    return since;
  }, items2);
  const obj3 = require("ConnectionsUtils");
  return obj3.getCreatedAtDate(stateFromStores1, stateFromStores);
});
const result = size.fileFinishedImporting("modules/user_profile/hooks/useFriendsSinceDate.tsx");

export const useFriendsSinceDate = tmp2;