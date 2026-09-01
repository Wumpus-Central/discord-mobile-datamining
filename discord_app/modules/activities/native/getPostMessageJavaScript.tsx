// discord_app/modules/activities/native/getPostMessageJavaScript.tsx
import set from "../../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/activities/native/getPostMessageJavaScript.tsx");

export default function getPostMessageJavaScript(arg0) {
  return (
    "\n    (function() {\n      const iFrame = document.getElementById('activityFrame');\n      iFrame.contentWindow.postMessage(" +
    JSON.stringify(arg0) +
    ", '*');\n    })()\n  "
  );
}
