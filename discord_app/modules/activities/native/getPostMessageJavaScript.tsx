// === Module 9416: getPostMessageJavaScript ===

// Module 9416 (getPostMessageJavaScript)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/activities/native/getPostMessageJavaScript.tsx");

export default function getPostMessageJavaScript(arg0) {
  return "\n    (function() {\n      const iFrame = document.getElementById('activityFrame');\n      iFrame.contentWindow.postMessage(" + JSON.stringify(arg0) + ", '*');\n    })()\n  ";
};