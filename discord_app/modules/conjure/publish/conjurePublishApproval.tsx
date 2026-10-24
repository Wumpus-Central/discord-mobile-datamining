// === Module 10800: conjurePublishApproval ===

// Module 10800 (conjurePublishApproval)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishApproval.tsx");

export const validPublishApproval = function validPublishApproval(approval_url, approval_kind) {
  let isMatch = "enroll" === approval_kind;
  if (!isMatch) {
    isMatch = "publish" === approval_kind;
  }
  if (isMatch) {
    isMatch = typeof approval_url === "string";
  }
  if (isMatch) {
    const _RegExp = RegExp;
    const _HermesInternal = HermesInternal;
    const regExp = new RegExp("^https://client\\.vibeyard\\.tools/" + approval_kind + "/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$");
    isMatch = regExp.test(approval_url);
  }
  return isMatch;
};