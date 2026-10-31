// === Module 10895: ConjureHostApproval ===

// Module 10895 (ConjureHostApproval)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10874 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_4 = [];
const map = new Map();
const map1 = new Map();
const Store = initializeDefault.Store;
class HostAccessStore extends Store {
}
const prototype = HostAccessStore.prototype;
prototype["getApprovals"] = function getApprovals(projectId) {
  value = map.get(projectId);
  if (value == null) {
    value = closure_4;
  }
  return value;
};
prototype["getAccess"] = function getAccess(arg0) {
  value = map1.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
const hostAccessStore = new HostAccessStore(DispatcherDefault, {
  CONJURE_HOST_APPROVALS_SET(arg0) {
    ({ projectId, asks } = arg0);
    value = map.get(projectId);
    if (value == null) {
      value = closure_4;
    }
    const f98346 = (id) => id.id;
    const tmp = value.length === asks.length && value.every((item, index) => o(item) === o(allowedHosts[index]));
    let flag = !tmp;
    if (!tmp) {
      const result = map.set(projectId, asks);
      flag = true;
    }
    return flag;
  },
  CONJURE_HOST_ACCESS_SET(arg0) {
    ({ projectId, requireApproval, allowedHosts } = arg0);
    value = map1.get(projectId);
    let requireApproval1;
    if (value != null) {
      requireApproval1 = value.requireApproval;
    }
    let flag = requireApproval1 !== requireApproval;
    if (!flag) {
      const allowedHosts1 = value.allowedHosts;
      function o(arg0) {
        return arg0;
      }
      flag = !(allowedHosts1.length === allowedHosts.length && allowedHosts1.every((item, index) => o(item) === o(allowedHosts[index])));
      const tmp3 = allowedHosts1.length === allowedHosts.length && allowedHosts1.every((item, index) => o(item) === o(allowedHosts[index]));
    }
    if (flag) {
      const obj2 = { requireApproval, allowedHosts };
      const result = map1.set(projectId, obj2);
      flag = true;
    }
    return flag;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/host_approval/ConjureHostApproval.tsx");

export const ConjureHostAccessStore = hostAccessStore;
export const hostAccessFrameHandlers = {
  host_approvals(asks, projectId) {
    DispatcherDefault.dispatch({ type: "CONJURE_HOST_APPROVALS_SET", projectId: projectId.projectId, asks: asks.asks });
  },
  host_access(requireApproval, projectId) {
    DispatcherDefault.dispatch({ type: "CONJURE_HOST_ACCESS_SET", projectId: projectId.projectId, requireApproval: requireApproval.require_approval, allowedHosts: requireApproval.allowed_hosts });
  }
};
export function answerHostApproval(projectId, c1, always) {
  const id = c1;
  const answer = always;
  if (obj.sendOnConjureSocket(projectId, "host approval", (sendHostAccess) => sendHostAccess.sendHostAccess({ type: "host_approval_answer", id, answer }))) {
    const approvals = hostAccessStore.getApprovals(projectId);
    const found = approvals.filter((id) => id.id !== closure_0);
    const obj3 = { type: "CONJURE_HOST_APPROVALS_SET", projectId, asks: found };
    DispatcherDefault.dispatch(obj3);
  }
  obj = conjureProjectSockets;
}
export function removeAllowedHost(projectId, remove_host) {
  return conjureProjectSockets.sendOnConjureSocket(projectId, "allowed hosts", (sendHostAccess) => sendHostAccess.sendHostAccess({ type: "set_host_access", remove_host }));
}
export function useConjureHostApprovals(projectId) {
  _require = projectId;
  const items = [hostAccessStore];
  const items1 = [projectId];
  return require("initialize").useStateFromStores(items, () => hostAccessStore.getApprovals(closure_0), items1);
}
export function useConjureAllowedHosts(projectId) {
  _require = projectId;
  const items = [hostAccessStore];
  const items1 = [projectId];
  return require("initialize").useStateFromStores(items, () => {
    const access = hostAccessStore.getAccess(closure_0);
    let requireApproval;
    if (access != null) {
      requireApproval = access.requireApproval;
    }
    let allowedHosts = null;
    if (true === requireApproval) {
      allowedHosts = access.allowedHosts;
    }
    return allowedHosts;
  }, items1);
}
export function useConjureRequireHostApprovalSetting(arg0) {
  _require = arg0;
  const items = [hostAccessStore];
  const items1 = [arg0];
  const items2 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const access = hostAccessStore.getAccess(closure_0);
    let requireApproval;
    if (access != null) {
      requireApproval = access.requireApproval;
    }
    if (requireApproval == null) {
      requireApproval = null;
    }
    return requireApproval;
  }, items1);
  const callback = noop.useCallback((projectId) => {
    const require_approval = projectId;
    return conjureProjectSockets.sendOnConjureSocket(require_approval, "host approval setting", (sendHostAccess) => sendHostAccess.sendHostAccess({ type: "set_host_access", require_approval }));
  }, items2);
  const obj = require("initialize");
  return require("useToggleDraft").useToggleDraft(stateFromStores, callback);
}