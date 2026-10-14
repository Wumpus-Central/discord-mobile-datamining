// === Module 11960: useConjureProjectPickerOptions ===

// Module 11960 (useConjureProjectPickerOptions)
import c from "c" /* 576 */;
import useConjureProjects from "useConjureProjects" /* 11961 */;
import noop from "module_19" /* 19 */;

require = fn;
const ConjureClarificationProjectPicker = "ConjureClarificationProjectPicker";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/clarification/useConjureProjectPickerOptions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureProjectPickerOptions(arg0) {
  closure_0 = arg0;
  const cResult = c.c(6);
  const conjureProjects = useConjureProjects.useConjureProjects(ConjureClarificationProjectPicker);
  if (cResult[0] === conjureProjects) {
    if (cResult[1] === arg0) {
      return cResult[2];
    }
  }
  if (cResult[3] !== arg0) {
    const fn = function n(projectId) {
      return projectId.projectId !== closure_0;
    };
    cResult[3] = arg0;
    cResult[4] = fn;
    let found = fn;
  } else {
    found = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u(projectId) {
      return { projectId: projectId.projectId, name: projectId.name, serverName: projectId.guildName };
    };
    cResult[5] = fn2;
    let tmp2 = fn2;
  } else {
    tmp2 = cResult[5];
  }
  found = conjureProjects.filter(found);
  const mapped = found.map(tmp2);
  cResult[0] = conjureProjects;
  cResult[1] = arg0;
  cResult[2] = mapped;
}) : (function useConjureProjectPickerOptions(arg0) {
  closure_0 = arg0;
  const conjureProjects = useConjureProjects.useConjureProjects(ConjureClarificationProjectPicker);
  const items = [conjureProjects, arg0];
  return noop.useMemo(() => {
    const found = conjureProjects.filter((projectId) => projectId.projectId !== closure_1_0);
    return found.map((projectId) => ({ projectId: projectId.projectId, name: projectId.name, serverName: projectId.guildName }));
  }, items);
});