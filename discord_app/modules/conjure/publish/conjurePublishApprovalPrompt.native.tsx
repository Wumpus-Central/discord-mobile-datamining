// discord_app/modules/conjure/publish/conjurePublishApprovalPrompt.native.tsx
import LinkingDefault from "../../../lib/native/Linking.tsx";
import ConjurePublishBlockedSheetDefault from "native/ConjurePublishBlockedSheet.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishApprovalPrompt.native.tsx");

export const promptPublishApproval = function promptPublishApproval(approval_url) {
  _require = approval_url;
  let str = "publish";
  if (approval_url.includes("/enroll/")) {
    str = "enroll";
  }
  if (obj.validPublishApproval(approval_url, str)) {
    ConjurePublishBlockedSheetDefault(
      tmp(10840).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED,
      undefined,
      () => {
        LinkingDefault.openURL(closure_0);
      },
    );
  }
  obj = require("conjurePublishApproval");
  tmp = _require;
};
