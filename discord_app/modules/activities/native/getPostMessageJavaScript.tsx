// discord_app/modules/activities/native/getPostMessageJavaScript.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/activities/native/getPostMessageJavaScript.tsx");

export default function getPostMessageJavaScript(arg0) {
  return (
    "\n    (function() {\n      const iFrame = document.getElementById('activityFrame');\n      iFrame.contentWindow.postMessage(" +
    JSON.stringify(arg0) +
    ", '*');\n    })()\n  "
  );
}
