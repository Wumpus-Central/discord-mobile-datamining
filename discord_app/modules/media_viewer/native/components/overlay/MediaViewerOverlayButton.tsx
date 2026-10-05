// === Module 8045: MediaViewerOverlayButton ===

// Module 8045 (MediaViewerOverlayButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import IconButton2 from "IconButton" /* 7575 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === arg0) {
    let tmp4;
    if (cResult[1] === ref) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  const IconButton = IconButton2.IconButton;
  const merged = Object.assign(arg0);
  const tmp6 = <IconButton ref={ref} size="md" variant="secondary-overlay" />;
  cResult[0] = arg0;
  cResult[1] = ref;
  cResult[2] = tmp6;
  tmp4 = tmp6;
}) : ((arg0, ref) => {
  const IconButton = IconButton2.IconButton;
  const merged = Object.assign(arg0);
  return <IconButton ref={ref} size="md" variant="secondary-overlay" />;
}));
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx");

export default forwardRefResult;