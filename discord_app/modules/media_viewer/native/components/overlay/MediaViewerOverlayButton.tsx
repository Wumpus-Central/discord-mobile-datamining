// === Module 8488: MediaViewerOverlayButton ===

// Module 8488 (MediaViewerOverlayButton)
import c from "c" /* 576 */;
import IconButton from "IconButton" /* 7573 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["ref"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MediaViewerOverlayButton(ref) {
  const cResult = c.c(6);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref.ref, closure_2);
    cResult[0] = ref.ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    let tmp5 = ref;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    if (cResult[4] === tmp5) {
      let tmp9 = cResult[5];
    }
    return tmp9;
  }
  const merged = Object.assign(tmp4);
  const tmp11 = jsx(IconButton.IconButton, { ref: tmp5, size: "md", variant: "secondary-overlay" });
  cResult[3] = tmp4;
  cResult[4] = tmp5;
  cResult[5] = tmp11;
  tmp9 = tmp11;
  const obj2 = { ref: tmp5, size: "md", variant: "secondary-overlay" };
}) : (function MediaViewerOverlayButton(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(IconButton.IconButton, { ref: ref.ref, size: "md", variant: "secondary-overlay" });
});