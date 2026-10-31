// === Module 8939: MediaViewerOverlayButton ===

// Module 8939 (MediaViewerOverlayButton)
import IconButton from "IconButton" /* 8028 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx");

export default function MediaViewerOverlayButton(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(IconButton.IconButton, { ref: ref.ref, size: "md", variant: "secondary-overlay" });
};