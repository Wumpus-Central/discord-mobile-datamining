// discord_app/modules/conjure/projects/filterConjureProjectsByName.tsx
import size from "../../../../_runtime/metro/00002__.js";

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
