// === Module 10490: ConjureProjectGroupsActionCreators ===

// Module 10490 (ConjureProjectGroupsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/project_groups/ConjureProjectGroupsActionCreators.tsx");

export function setConjureProjectGroupCollapsed(key, collapsed) {
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_GROUP_COLLAPSE_SET", key, collapsed });
}