// === Module 12169: useShouldBlockDMInputForQuarantinedUser ===

// Module 12169 (useShouldBlockDMInputForQuarantinedUser)
import MessageStore from "MessageStore" /* 5428 */;

const require = globalThis.__r;

const require = fn;
const UserFlags = fn(1085).UserFlags;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldBlockDMInputForQuarantinedUser(hasFlag, id) {
  _require = id;
  const cResult = require("c").c(9);
  const obj = require("c");
  const tmp = _require;
  const showConvoStarterInDM = require("useShowConvoStarterInDM").useShowConvoStarterInDM(id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function l() {
      return MessageStore.getMessages(id.id).length > 0;
    };
    cResult[1] = id.id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== id) {
    const items1 = [id];
    cResult[3] = id;
    cResult[4] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[4];
  }
  const obj2 = require("useShowConvoStarterInDM");
  const stateFromStores = tmp(504).useStateFromStores(first, tmp7, tmp8);
  if (null == hasFlag) {
    return tmp10;
  } else {
    if (cResult[5] === stateFromStores) {
      if (cResult[6] === showConvoStarterInDM) {
      }
    }
    const tmp13 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !stateFromStores;
    cResult[5] = stateFromStores;
    cResult[6] = showConvoStarterInDM;
    cResult[7] = hasFlag;
    cResult[8] = tmp13;
  }
  const tmpResult = tmp(504);
}) : (function useShouldBlockDMInputForQuarantinedUser(hasFlag, arg1) {
  _require = arg1;
  const showConvoStarterInDM = require("useShowConvoStarterInDM").useShowConvoStarterInDM(arg1);
  require("initialize");
  [][0] = arg1;
  let tmp4 = null != hasFlag;
  if (tmp4) {
    tmp4 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
    const tmp6 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
  }
  return tmp4;
});