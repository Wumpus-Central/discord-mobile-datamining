// === Module 12788: useConjureProjectPickerOptions ===

// Module 12788 (useConjureProjectPickerOptions)
import useConjureProjects from "useConjureProjects" /* 12789 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/clarification/useConjureProjectPickerOptions.tsx");

export default function useConjureProjectPickerOptions(arg0) {
  closure_0 = arg0;
  const conjureProjects = useConjureProjects.useConjureProjects("ConjureClarificationProjectPicker");
  items = [conjureProjects, arg0];
  return noop.useMemo(() => {
    const found = conjureProjects.filter((projectId) => projectId.projectId !== closure_1_0);
    return found.map((projectId) => ({ projectId: projectId.projectId, name: projectId.name, serverName: projectId.guildName }));
  }, items);
};