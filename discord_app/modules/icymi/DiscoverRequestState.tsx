// discord_app/modules/icymi/DiscoverRequestState.tsx
import size from "../../../_runtime/metro/00002__.js";

class DiscoverRequestGuard {
  constructor() {
    return Object.assign({ session: 0, commit: 0, gate: 0, gateEnabled: null });
  }
}
const prototype = DiscoverRequestGuard.prototype;
prototype["observeGate"] = function observeGate(waterwheelsDiscoverEnabled) {
  const self = this;
  self.gateEnabled = waterwheelsDiscoverEnabled;
  if (true === this.gateEnabled && !waterwheelsDiscoverEnabled) {
    self.gate = self.gate + 1;
  }
  return true === this.gateEnabled && !waterwheelsDiscoverEnabled;
};
prototype["resetSession"] = function resetSession() {
  this.session = this.session + 1;
  this.commit = this.commit + 1;
};
prototype["commitPicker"] = function commitPicker() {
  this.commit = this.commit + 1;
};
prototype["capture"] = function capture() {
  let tmp = id;
  if (id === undefined) {
    tmp = null;
  }
  let tmp2 = authSessionIdHash;
  if (authSessionIdHash === undefined) {
    tmp2 = null;
  }
  return { userId: tmp, authSessionIdHash: tmp2, session: this.session, commit: this.commit, gate: this.gate };
};
prototype["matches"] = function matches(session) {
  const self = this;
  return session.session === this.session && session.commit === self.commit && session.gate === self.gate;
};
prototype["canRun"] = function canRun(session, waterwheelsDiscoverEnabled) {
  const self = this;
  let tmp = waterwheelsDiscoverEnabled;
  this.observeGate(waterwheelsDiscoverEnabled);
  if (waterwheelsDiscoverEnabled) {
    tmp = session.session === self.session;
  }
  if (tmp) {
    tmp = session.gate === self.gate;
  }
  return tmp;
};
prototype["canApply"] = function canApply(arg0, arg1) {
  const self = this;
  return this.canRun(arg0, arg1) && self.matches(arg0);
};
const EMPTY_DISCOVER_SNAPSHOT = { status: "idle", items: [], hasSnapshot: false, loadId: null };
const result = size.fileFinishedImporting("modules/icymi/DiscoverRequestState.tsx");

export { DiscoverRequestGuard };
export const discoverRequestGuard = Object.assign({ session: 0, commit: 0, gate: 0, gateEnabled: null });
export { EMPTY_DISCOVER_SNAPSHOT };
export function reduceDiscoverSnapshot(tmp2Result4, type) {
  type = type.type;
  if ("reset" === type) {
    return obj;
  } else if ("commit" === type) {
    if (type.enabled) {
      const obj3 = {};
      const merged = Object.assign(tmp8);
      obj3.status = "loading";
      let tmp9 = obj3;
    } else {
      tmp9 = tmp8;
    }
    return tmp9;
  } else if ("start" === type) {
    const obj4 = {};
    const merged1 = Object.assign(tmp2Result4);
    obj4.status = "loading";
    return obj4;
  } else if ("success" === type) {
    ({ items: obj2.items, loadId: obj2.loadId } = type);
    return { status: "success", items: null, hasSnapshot: true, loadId: null };
  } else if ("error" === type) {
    obj = {};
    const merged2 = Object.assign(tmp2Result4);
    obj.status = "error";
    return obj;
  }
}
