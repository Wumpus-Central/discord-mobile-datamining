// === Module 10973: useCurrentUserStageRoles ===

// Module 10973 (useCurrentUserStageRoles)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 5948 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useCurrentUserStageRoles.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useCurrentUserStageRoles(arg0, arg1) {
  _require = arg0;
  const cResult = require("c").c(5);
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageChannelRoleStore, AuthenticationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === (undefined !== arg1 && arg1)) {
    if (cResult[2] === arg0) {
      let tmp8 = cResult[3];
      let tmp9 = cResult[4];
    }
    return tmp(504).useStateFromStoresObject(first, tmp8, tmp9);
  }
  const fn = function c() {
    return StageChannelRoleStore.getPermissionsForUser(AuthenticationStore.getId(), closure_0, closure_1);
  };
  const items1 = [arg0, undefined !== arg1 && arg1];
  cResult[1] = undefined !== arg1 && arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp9 = items1;
  tmp8 = fn;
  const obj = require("c");
  tmp = _require;
}) : (function useCurrentUserStageRoles(arg0) {
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [StageChannelRoleStore, AuthenticationStore];
  const items1 = [arg0, flag];
  return require("initialize").useStateFromStoresObject(items, () => StageChannelRoleStore.getPermissionsForUser(AuthenticationStore.getId(), closure_0, flag), items1);
});