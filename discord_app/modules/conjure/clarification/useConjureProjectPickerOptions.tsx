// discord_app/modules/conjure/clarification/useConjureProjectPickerOptions.tsx
import useConjureProjects from "../projects/useConjureProjects.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/clarification/useConjureProjectPickerOptions.tsx");

export default function useConjureProjectPickerOptions(arg0) {
  closure_0 = arg0;
  const conjureProjects = useConjureProjects.useConjureProjects("ConjureClarificationProjectPicker");
  const items = [conjureProjects, arg0];
  return noop.useMemo(() => {
    const found = conjureProjects.filter((projectId) => projectId.projectId !== closure_1_0);
    return found.map((projectId) => ({
      projectId: projectId.projectId,
      name: projectId.name,
      serverName: projectId.guildName,
    }));
  }, items);
}
