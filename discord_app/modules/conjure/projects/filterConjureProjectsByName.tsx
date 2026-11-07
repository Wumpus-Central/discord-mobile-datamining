// === Module 13223: filterConjureProjectsByName ===

// Module 13223 (filterConjureProjectsByName)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/filterConjureProjectsByName.tsx");

export function filterConjureProjectsByName(conjureProjectsByActivity, str) {
  const trimmed = str.trim();
  let toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
  let found = conjureProjectsByActivity;
  if ("" !== toLocaleLowerCaseResult) {
    found = conjureProjectsByActivity.filter((name) => {
      name = name.name;
      toLocaleLowerCaseResult = name.toLocaleLowerCase();
      return toLocaleLowerCaseResult.includes(toLocaleLowerCaseResult);
    });
  }
  return found;
}