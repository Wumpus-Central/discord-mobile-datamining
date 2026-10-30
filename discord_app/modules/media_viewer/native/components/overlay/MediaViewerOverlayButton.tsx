// discord_app/modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx
import IconButton from "../../../../../design/components/Button/native/IconButton.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx",
);

export default function MediaViewerOverlayButton(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(IconButton.IconButton, { ref: ref.ref, size: "md", variant: "secondary-overlay" });
}
