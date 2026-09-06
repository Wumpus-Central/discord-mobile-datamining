// === Module 8369: MediaViewerOverlayButton ===

// Module 8369 (MediaViewerOverlayButton)
import IconButton from "IconButton" /* 8097 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx");

export default noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(IconButton.IconButton, { ref, size: "md", variant: "secondary-overlay" });
});