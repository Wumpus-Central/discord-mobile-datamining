// discord_app/modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import IconButton2 from "../../../../../design/components/Button/native/IconButton.native.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
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
      }
    : (arg0, ref) => {
        const IconButton = IconButton2.IconButton;
        const merged = Object.assign(arg0);
        return <IconButton ref={ref} size="md" variant="secondary-overlay" />;
      },
);
const result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx",
);

export default forwardRefResult;
