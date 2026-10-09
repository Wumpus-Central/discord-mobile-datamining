// === Module 9559: useCanRemoveAllReactions ===

// Module 9559 (useCanRemoveAllReactions)
import PermissionStore from "PermissionStore" /* 4709 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1085).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/useCanRemoveAllReactions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useCanRemoveAllReactions(arg0) {
  _require = arg0;
  const cResult = require("c").c(5);
  const obj = require("c");
  const tmp = _require;
  const tmp2 = isActiveChannelOrUnarchivableThread;
  isActiveChannelOrUnarchivableThread = require("ThreadHooks").useIsActiveChannelOrUnarchivableThread(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === isActiveChannelOrUnarchivableThread) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    const tmpResult = tmp(tmp2[5]);
    return null != arg0 && tmp(tmp2[5]).useStateFromStores(first, tmp7, tmp8);
  }
  const fn = function o() {
    return PermissionStore.can(Permissions.MANAGE_MESSAGES, closure_0) && isActiveChannelOrUnarchivableThread;
  };
  const items1 = [arg0, isActiveChannelOrUnarchivableThread];
  cResult[1] = arg0;
  cResult[2] = isActiveChannelOrUnarchivableThread;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
  const obj2 = require("ThreadHooks");
}) : (function useCanRemoveAllReactions(arg0) {
  _require = arg0;
  isActiveChannelOrUnarchivableThread = require("ThreadHooks").useIsActiveChannelOrUnarchivableThread(arg0);
  const obj = require("ThreadHooks");
  const items = [PermissionStore];
  const items1 = [arg0, isActiveChannelOrUnarchivableThread];
  const obj2 = require("initialize");
  return null != arg0 && require("initialize").useStateFromStores(items, () => PermissionStore.can(Permissions.MANAGE_MESSAGES, closure_0) && isActiveChannelOrUnarchivableThread, items1);
});