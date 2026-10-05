// === Module 9978: useCanRemoveAllReactions ===

// Module 9978 (useCanRemoveAllReactions)
import Constants from "Constants" /* 1085 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let isActiveChannelOrUnarchivableThread;
  _require = arg0;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(5);
  const obj2 = require("ThreadHooks");
  const tmp2 = isActiveChannelOrUnarchivableThread;
  isActiveChannelOrUnarchivableThread = obj2.useIsActiveChannelOrUnarchivableThread(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp7;
    let tmp8;
    if (cResult[2] === isActiveChannelOrUnarchivableThread) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = tmp(tmp2[5]);
    const tmp10 = null != arg0 && tmpResult.useStateFromStores(first, tmp7, tmp8);
    return tmp10;
  }
  const fn = function o() {
    const tmp = PermissionStore.can(Permissions.MANAGE_MESSAGES, closure_0) && isActiveChannelOrUnarchivableThread;
    return tmp;
  };
  const items1 = [arg0, isActiveChannelOrUnarchivableThread];
  cResult[1] = arg0;
  cResult[2] = isActiveChannelOrUnarchivableThread;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : ((arg0) => {
  let closure_0;
  let isActiveChannelOrUnarchivableThread;
  _require = arg0;
  const obj = require("ThreadHooks");
  isActiveChannelOrUnarchivableThread = obj.useIsActiveChannelOrUnarchivableThread(arg0);
  const items = [PermissionStore];
  const items1 = [arg0, isActiveChannelOrUnarchivableThread];
  const obj2 = require("get initialized");
  const tmp2 = null != arg0 && obj2.useStateFromStores(items, () => {
    const tmp = PermissionStore.can(Permissions.MANAGE_MESSAGES, closure_0) && isActiveChannelOrUnarchivableThread;
    return tmp;
  }, items1);
  return tmp2;
});
const result = size.fileFinishedImporting("modules/reactions/useCanRemoveAllReactions.tsx");

export default tmp2;