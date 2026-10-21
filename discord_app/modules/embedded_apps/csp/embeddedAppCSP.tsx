// discord_app/modules/embedded_apps/csp/embeddedAppCSP.tsx
import size from "../../../../_runtime/metro/00002__.js";

let c0 = "object-src 'none'";
const result = size.fileFinishedImporting("modules/embedded_apps/csp/embeddedAppCSP.tsx");

export const EMBEDDED_APP_FRAME_CSP = "object-src 'none'";
export const deriveIframeCSPAttributeFromPolicy = function deriveIframeCSPAttributeFromPolicy(policy) {
  let tmp;
  if (!policy.thirdPartyFrames) {
    tmp = c0;
  }
  return tmp;
};
