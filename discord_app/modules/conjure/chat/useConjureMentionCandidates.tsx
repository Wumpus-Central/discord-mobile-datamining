// === Module 12514: useConjureMentionCandidates ===

// Module 12514 (useConjureMentionCandidates)
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/useConjureMentionCandidates.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureMentionCandidates(arg0) {
  _require = arg0;
  const cResult = require("c").c(14);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return ConjureProjectStore.getProject(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  const tmpResult = require("initialize");
  const conjureProjectPeople = require("useConjureProjectCreator").useConjureProjectPeople(stateFromStores);
  ({ creator, collaborators } = conjureProjectPeople);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AuthenticationStore];
    const fn2 = function f() {
      return id.getId();
    };
    cResult[4] = items2;
    cResult[5] = fn2;
    let tmp11 = fn2;
    let tmp10 = items2;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  const tmpResult3 = require("useConjureProjectCreator");
  stateFromStores1 = require("initialize").useStateFromStores(tmp10, tmp11);
  if (cResult[6] !== creator) {
    if (null != creator) {
      const items3 = [creator];
      let items4 = items3;
    } else {
      items4 = [];
    }
    cResult[6] = creator;
    cResult[7] = items4;
  } else {
    if (cResult[8] === collaborators) {
      if (cResult[9] === tmp14) {
        let arr6 = cResult[10];
      }
      if (cResult[11] === arr6) {
        if (cResult[12] === stateFromStores1) {
          let tmp22 = cResult[13];
        }
        return tmp22;
      }
      const found = arr6.filter((id) => id.id !== stateFromStores1 && !id.bot);
      cResult[11] = arr6;
      cResult[12] = stateFromStores1;
      cResult[13] = found;
      tmp22 = found;
    }
    const items5 = [];
    HermesBuiltin.arraySpread(collaborators, HermesBuiltin.arraySpread(cResult[7], 0));
    cResult[8] = collaborators;
    cResult[9] = cResult[7];
    cResult[10] = items5;
    arr6 = items5;
  }
  const tmpResult4 = require("initialize");
}) : (function useConjureMentionCandidates(arg0) {
  _require = arg0;
  let items = [ConjureProjectStore];
  let items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjureProjectStore.getProject(closure_0), items1);
  const obj = require("initialize");
  const conjureProjectPeople = require("useConjureProjectCreator").useConjureProjectPeople(stateFromStores);
  creator = conjureProjectPeople.creator;
  const collaborators = conjureProjectPeople.collaborators;
  const obj2 = require("useConjureProjectCreator");
  let items2 = [stateFromStores1];
  stateFromStores1 = require("initialize").useStateFromStores(items2, () => stateFromStores1.getId());
  const items3 = [creator, collaborators, stateFromStores1];
  return collaborators.useMemo(() => {
    if (null != creator) {
      const items = [tmp];
      let items1 = items;
    } else {
      items1 = [];
    }
    const items2 = [...collaborators];
    return items2.filter((id) => id.id !== stateFromStores1 && !id.bot);
  }, items3);
});