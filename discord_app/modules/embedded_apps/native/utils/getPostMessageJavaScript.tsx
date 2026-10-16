// discord_app/modules/embedded_apps/native/utils/getPostMessageJavaScript.tsx
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/embedded_apps/native/utils/getPostMessageJavaScript.tsx");

export default function getPostMessageJavaScript(arg0, arg1) {
  const json = JSON.stringify(arg0);
  return (
    "\n    (function() {\n      const iFrame = document.getElementById('activityFrame');\n      iFrame.contentWindow.postMessage(" +
    json +
    ", " +
    JSON.stringify(arg1) +
    ");\n    })()\n  "
  );
}
export const ANY_ORIGIN = "*";
