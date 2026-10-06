// === Module 12092: useShouldBlockDMInputForQuarantinedUser ===

// Module 12092 (useShouldBlockDMInputForQuarantinedUser)
import Constants from "Constants" /* 1085 */;
import MessageStore from "MessageStore" /* 5116 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const UserFlags = Constants.UserFlags;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((hasFlag, id) => {
  let first;
  let tmp7;
  let tmp8;
  _require = id;
  const obj = require("react");
  const cResult = obj.c(9);
  const obj2 = require("useShowConvoStarterInDM");
  const showConvoStarterInDM = obj2.useShowConvoStarterInDM(id);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function l() {
      return MessageStore.getMessages(id.id).length > 0;
    };
    cResult[1] = id.id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== id) {
    const items1 = [id];
    cResult[3] = id;
    cResult[4] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[4];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  let tmp10 = null != hasFlag;
  if (tmp10) {
    if (cResult[5] === stateFromStores) {
      if (cResult[6] === showConvoStarterInDM) {
        let tmp11;
        if (cResult[7] === hasFlag) {
          tmp11 = cResult[8];
        }
        tmp10 = tmp11;
      }
    }
    const tmp13 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !stateFromStores;
    cResult[5] = stateFromStores;
    cResult[6] = showConvoStarterInDM;
    cResult[7] = hasFlag;
    cResult[8] = tmp13;
    tmp11 = tmp13;
  }
  return tmp10;
}) : ((hasFlag, arg1) => {
  let id;
  _require = arg1;
  const obj = require("useShowConvoStarterInDM");
  const showConvoStarterInDM = obj.useShowConvoStarterInDM(arg1);
  require("get initialized");
  [][0] = arg1;
  let tmp4 = null != hasFlag;
  if (tmp4) {
    tmp4 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
    hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx");

export default tmp2;