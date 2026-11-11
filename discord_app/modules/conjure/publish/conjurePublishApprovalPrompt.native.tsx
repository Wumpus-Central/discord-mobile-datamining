// === Module 13067: conjurePublishApprovalPrompt ===

// Module 13067 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 5949 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 13057 */;
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
    ConjurePublishBlockedSheetDefault(tmp(13058).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      LinkingDefault.openURL(closure_0);
    });
  }
  obj = require("conjurePublishApproval");
  tmp = _require;
}