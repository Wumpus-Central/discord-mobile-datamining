// === Module 9587: getPostMessageJavaScript ===

// Module 9587 (getPostMessageJavaScript)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/native/getPostMessageJavaScript.tsx");

export default function getPostMessageJavaScript(arg0) {
  return "\n    (function() {\n      const iFrame = document.getElementById('activityFrame');\n      iFrame.contentWindow.postMessage(" + JSON.stringify(arg0) + ", '*');\n    })()\n  ";
};