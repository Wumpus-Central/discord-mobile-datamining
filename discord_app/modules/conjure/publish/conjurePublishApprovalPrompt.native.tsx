// === Module 14657: conjurePublishApprovalPrompt ===

// Module 14657 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 5471 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 14658 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishApprovalPrompt.native.tsx");

export function promptPublishApproval(approval_url) {
  _require = approval_url;
  let str = "publish";
  if (approval_url.includes("/enroll/")) {
    str = "enroll";
  }
  if (obj.validPublishApproval(approval_url, str)) {
    ConjurePublishBlockedSheetDefault(tmp(14659).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      LinkingDefault.openURL(closure_0);
    });
  }
  obj = require("conjurePublishApproval");
  tmp = _require;
}