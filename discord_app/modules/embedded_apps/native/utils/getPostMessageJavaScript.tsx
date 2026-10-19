// discord_app/modules/embedded_apps/native/utils/getPostMessageJavaScript.tsx
import EmbeddedAppConstants from "../../EmbeddedAppConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_0 = EmbeddedAppConstants.EMBEDDED_APP_FRAME_ELEMENT_ID;
const result = size.fileFinishedImporting("modules/embedded_apps/native/utils/getPostMessageJavaScript.tsx");

export default function getPostMessageJavaScript(arg0, arg1) {
  const json = JSON.stringify(closure_0);
  const json1 = JSON.stringify(arg0);
  return (
    "\n    (function() {\n      const iFrame = document.getElementById(" +
    json +
    ");\n      iFrame.contentWindow.postMessage(" +
    json1 +
    ", " +
    JSON.stringify(arg1) +
    ");\n    })()\n  "
  );
}
export const ANY_ORIGIN = "*";
