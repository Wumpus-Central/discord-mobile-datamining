// === Module 10771: conjurePublishApprovalPrompt ===

// Module 10771 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 5646 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 10772 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishApprovalPrompt.native.tsx");

export const promptPublishApproval = function promptPublishApproval(approval_url) {
  _require = approval_url;
  let str = "publish";
  if (approval_url.includes("/enroll/")) {
    str = "enroll";
  }
  if (obj.validPublishApproval(approval_url, str)) {
    ConjurePublishBlockedSheetDefault(tmp(10773).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      LinkingDefault.openURL(closure_0);
    });
  }
  obj = require("conjurePublishApproval");
  tmp = _require;
};