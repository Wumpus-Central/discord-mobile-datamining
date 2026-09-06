// discord_app/modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx
import IconButton from "../../../../../design/components/Button/native/IconButton.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx",
);

export default noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(IconButton.IconButton, { ref, size: "md", variant: "secondary-overlay" });
});
