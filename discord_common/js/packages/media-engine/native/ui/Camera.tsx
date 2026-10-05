// discord_common/js/packages/media-engine/native/ui/Camera.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import VideoDefault from "Video.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../../../discord_app/modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let deviceId;
      let disabled;
      let height;
      let tmp4Result;
      let width;
      const obj = react2;
      const cResult = obj.c(5);
      ({ disabled, deviceId, width, height } = arg0);
      if (cResult[0] === deviceId) {
        if (cResult[1] === disabled) {
          if (cResult[2] === height) {
            let tmp3;
            if (cResult[3] === width) {
              tmp3 = cResult[4];
            }
            return tmp3;
          }
        }
      }
      if (disabled) {
        size = { width, height };
        tmp4Result = <div className="media-engine-video" style={size} />;
      } else {
        const size1 = { width, height };
        tmp4Result = jsx(VideoDefault, { streamId: deviceId, style: size1 });
      }
      cResult[0] = deviceId;
      cResult[1] = disabled;
      cResult[2] = height;
      cResult[3] = width;
      cResult[4] = tmp4Result;
      tmp3 = tmp4Result;
    }
  : (disabled) => {
      let height;
      let tmp2Result;
      let width;
      ({ width, height } = disabled);
      if (disabled.disabled) {
        size = { width, height };
        tmp2Result = <div className="media-engine-video" style={size} />;
      } else {
        const size1 = { width, height };
        tmp2Result = jsx(VideoDefault, { streamId: tmp, style: size1 });
      }
      return tmp2Result;
    };
tmp3.defaultProps = { disabled: false, width: 320, height: 180 };
let size = size_mod;
const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/Camera.tsx");

export default tmp3;
