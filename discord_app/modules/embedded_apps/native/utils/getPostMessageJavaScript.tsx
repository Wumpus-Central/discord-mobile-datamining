// === Module 10735: getPostMessageJavaScript ===

// Module 10735 (getPostMessageJavaScript)
import EmbeddedAppConstants from "EmbeddedAppConstants" /* 10736 */;
import size from "module_2" /* 2 */;

let closure_0 = EmbeddedAppConstants.EMBEDDED_APP_FRAME_ELEMENT_ID;
const result = size.fileFinishedImporting("modules/embedded_apps/native/utils/getPostMessageJavaScript.tsx");

export default function getPostMessageJavaScript(arg0, arg1) {
  const json = JSON.stringify(closure_0);
  const json1 = JSON.stringify(arg0);
  return "\n    (function() {\n      const iFrame = document.getElementById(" + json + ");\n      iFrame.contentWindow.postMessage(" + json1 + ", " + JSON.stringify(arg1) + ");\n    })()\n  ";
};
export const ANY_ORIGIN = "*";