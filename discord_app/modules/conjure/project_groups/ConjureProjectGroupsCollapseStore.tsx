// === Module 13247: ConjureProjectGroupsCollapseStore ===

// Module 13247 (ConjureProjectGroupsCollapseStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ConjureProjectGroupsTypes from "ConjureProjectGroupsTypes" /* 13248 */;

require = fn;
let obj = { collapsedByKey: {} };
const PersistedStore = initializeDefault.PersistedStore;
class ConjureProjectGroupsCollapseStore extends PersistedStore {
}
const prototype = ConjureProjectGroupsCollapseStore.prototype;
prototype["initialize"] = function initialize(arg0) {

};
prototype["getState"] = function getState() {
  return obj;
};
prototype["isCollapsed"] = function isCollapsed(arg0) {
  let tmp = obj.collapsedByKey[arg0];
  if (tmp == null) {
    tmp = arg0 === ConjureProjectGroupsTypes.CONJURE_COLLABORATING_GROUP_KEY;
  }
  return tmp;
};
ConjureProjectGroupsCollapseStore.displayName = "ConjureProjectGroupsCollapseStore";
ConjureProjectGroupsCollapseStore.persistKey = "ConjureProjectGroupsCollapse";
const conjureProjectGroupsCollapseStore = new ConjureProjectGroupsCollapseStore(DispatcherDefault, {
  CONJURE_PROJECT_GROUP_COLLAPSE_SET: function handleCollapseSet(arg0) {
    ({ key, collapsed } = arg0);
    let flag = obj.collapsedByKey[key] !== collapsed;
    if (flag) {
      obj = { collapsedByKey: null };
      const obj2 = {};
      const merged = Object.assign(obj.collapsedByKey);
      obj2[key] = collapsed;
      obj.collapsedByKey = obj2;
      flag = true;
    }
    return flag;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/project_groups/ConjureProjectGroupsCollapseStore.tsx");

export default conjureProjectGroupsCollapseStore;