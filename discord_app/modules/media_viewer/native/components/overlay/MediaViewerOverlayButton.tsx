// discord_app/modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx
import IconButton from "../../../../../design/components/Button/native/IconButton.native.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

require = arg1;
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(IconButton.IconButton, { ref, size: "md", variant: "secondary-overlay" });
});
const result = require("set").fileFinishedImporting(
  "modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx",
);

export default forwardRefResult;
