// === Module 8045: MediaViewerOverlayButton ===

// Module 8045 (MediaViewerOverlayButton)
import c from "c" /* 576 */;
import IconButton from "IconButton" /* 7575 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx");

export default noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  const cResult = c.c(3);
  if (cResult[0] === arg0) {
    if (cResult[1] === ref) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const merged = Object.assign(arg0);
  const tmp6 = jsx(IconButton.IconButton, { ref, size: "md", variant: "secondary-overlay" });
  cResult[0] = arg0;
  cResult[1] = ref;
  cResult[2] = tmp6;
  tmp4 = tmp6;
  const obj2 = { ref, size: "md", variant: "secondary-overlay" };
}) : ((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(IconButton.IconButton, { ref, size: "md", variant: "secondary-overlay" });
}));