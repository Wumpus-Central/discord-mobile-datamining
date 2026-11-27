// === Module 11456: conjureCopyPlan ===

// Module 11456 (conjureCopyPlan)
import ConjureConnectionStore from "ConjureConnectionStore" /* 7693 */;
import ConjureRemix from "ConjureRemix" /* 11453 */;
import startConjureScopeMigration from "startConjureScopeMigration" /* 11457 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
let result = size.fileFinishedImporting("modules/conjure/remix/conjureCopyPlan.tsx");

export function conjureCopyKeepsUpdates(project, id, arg2) {
  let str = arg3;
  if (arg3 === undefined) {
    str = "";
  }
  let tmp = arg2;
  if (arg2) {
    tmp = "" === str.trim();
  }
  if (tmp) {
    tmp = !ConjureRemix.conjureCopyChangesType(project, id);
  }
  return tmp;
}
export function sendConjureCopyFirstMessage(install_scope, projectId, id) {
  let str = arg3;
  if (arg3 === undefined) {
    str = "";
  }
  const trimmed = str.trim();
  if (obj.conjureCopyChangesType(install_scope, id)) {
    let str3 = "removed";
    if (null != id) {
      str3 = "added";
    }
    const tmp2Result = startConjureScopeMigration;
    const result = tmp2Result.sendConjureScopeMigrationMessage(projectId, startConjureScopeMigration.conjureScopeMigrationMessage(str3, trimmed));
    const tmp2Result2 = startConjureScopeMigration;
  } else if ("" !== trimmed) {
    sendUserMessage(projectId, trimmed);
  }
  obj = ConjureRemix;
}