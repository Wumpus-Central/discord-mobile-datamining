// discord_app/modules/conjure/project_groups/ConjureProjectGroupsActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/project_groups/ConjureProjectGroupsActionCreators.tsx");

export function setConjureProjectGroupCollapsed(key, collapsed) {
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_GROUP_COLLAPSE_SET", key, collapsed });
}
