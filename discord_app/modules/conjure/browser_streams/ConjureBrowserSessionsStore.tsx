// discord_app/modules/conjure/browser_streams/ConjureBrowserSessionsStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";

let closure_0 = [];
let closure_1 = [];
const map = new Map();
const map1 = new Map();
const Store = initializeDefault.Store;
class ConjureBrowserSessionsStore extends Store {}
const prototype = ConjureBrowserSessionsStore.prototype;
prototype["getSessions"] = function getSessions(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = closure_0;
  }
  return value;
};
prototype["getTabs"] = function getTabs(arg0) {
  value = map1.get(arg0);
  if (value == null) {
    value = closure_1;
  }
  return value;
};
prototype["getTab"] = function getTab(arg0, arg1) {
  closure_0 = arg1;
  const tabs = this.getTabs(arg0);
  let found = tabs.find((session) => session.session.id === closure_0);
  if (found == null) {
    found = null;
  }
  return found;
};
const conjureBrowserSessionsStore = new ConjureBrowserSessionsStore(DispatcherDefault, {
  CONJURE_BROWSER_SESSIONS_SET: function handleBrowserSessionsSet(arg0) {
    ({ projectId, sessions } = arg0);
    let set;
    value = map.get(projectId);
    if (value == null) {
      value = closure_0;
    }
    set = sessions;
    if (tmp) {
      return false;
    } else {
      const items = [];
      HermesBuiltin.arraySpread(sessions, 0);
      const sorted = items.sort((started_at, started_at2) => started_at.started_at - started_at2.started_at);
      const _Set = Set;
      set = new Set(sorted.map((id) => id.id));
      value2 = map1.get(projectId);
      if (value2 == null) {
        value2 = closure_1;
      }
      const found = value2.filter((session) => !set.has(session.session.id));
      const found1 = found.filter((ended) => !ended.ended);
      const items1 = [];
      HermesBuiltin.arraySpread(
        found.filter((ended) => ended.ended),
        HermesBuiltin.arraySpread(
          found1.map((session) => ({ session: session.session, ended: true })),
          0,
        ),
      );
      const substr = items1.slice(0, 12);
      const result = map.set(projectId, sessions);
      const items2 = [];
      HermesBuiltin.arraySpread(
        substr,
        HermesBuiltin.arraySpread(
          sorted.map((session) => ({ session, ended: false })),
          0,
        ),
      );
      const result1 = map1.set(projectId, items2);
      return true;
    }
    tmp =
      value.length === sessions.length &&
      value.every((id, index) => id.id === set[index].id && id.started_at === tmp[index].started_at);
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/browser_streams/ConjureBrowserSessionsStore.tsx");

export default conjureBrowserSessionsStore;
