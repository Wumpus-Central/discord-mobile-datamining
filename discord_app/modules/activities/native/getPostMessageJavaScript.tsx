// === Module 8715: getPostMessageJavaScript ===

// Module 8715 (getPostMessageJavaScript)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/activities/native/getPostMessageJavaScript.tsx");

export default function getPostMessageJavaScript(arg0) {
  return "\n    (function() {\n      const iFrame = document.getElementById('activityFrame');\n      iFrame.contentWindow.postMessage(" + JSON.stringify(arg0) + ", '*');\n    })()\n  ";
};