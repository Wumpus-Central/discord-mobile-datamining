// === Module 10555: useConjureProjectGroupState ===

// Module 10555 (useConjureProjectGroupState)
import conjureRailActivity2 from "conjureRailActivity" /* 10558 */;
import ConjureProjectGroupsActionCreators from "ConjureProjectGroupsActionCreators" /* 10559 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureProjectGroupsCollapseStore from "ConjureProjectGroupsCollapseStore" /* 10556 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/project_groups/useConjureProjectGroupState.tsx");

export function useConjureProjectGroupActivity(projects) {
  _require = projects;
  items = [projects];
  return require("initialize").useStateFromStores(require("conjureRailActivity").CONJURE_RAIL_ACTIVITY_STORES, () => {
    let str = null;
    const obj = projects[Symbol.iterator]();
    while (obj !== undefined) {
      let obj2 = conjureRailActivity2;
      let conjureRailActivity = obj2.readConjureRailActivity(tmp2.id);
      if ("working" === conjureRailActivity) {
        obj.return();
        return "working";
      } else {
        if ("unread" === tmp6) {
          str = "unread";
        }
        continue;
      }
    }
    return str;
  }, items);
}
export function useConjureProjectGroupCollapsed(groupKey, forceExpanded) {
  _require = groupKey;
  dependencyMap = forceExpanded;
  items = [ConjureProjectGroupsCollapseStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjureProjectGroupsCollapseStore.isCollapsed(closure_0));
  let obj = require("initialize");
  const obj2 = noop;
  [tmp3, tmp4] = noop.useState(false);
  _slicedToArray = tmp4;
  let tmp5 = tmp3;
  if (tmp3) {
    tmp5 = !forceExpanded;
  }
  if (tmp5) {
    tmp4(false);
  }
  let tmp7 = stateFromStores;
  if (stateFromStores) {
    let tmp8 = !forceExpanded;
    if (forceExpanded) {
      tmp8 = tmp3;
    }
    tmp7 = tmp8;
  }
  noop = tmp7;
  const items1 = [groupKey, tmp7, forceExpanded];
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  return {
    collapsed: tmp7,
    toggle: obj2.useCallback(() => {
      const result = ConjureProjectGroupsActionCreators.setConjureProjectGroupCollapsed(closure_0, !closure_3);
      if (closure_1) {
        tmp4(true);
      }
    }, items1)
  };
}