// discord_common/js/packages/media-engine/native/ui/Camera.tsx
import c from "../../../../../../_runtime/00576_c.js";
import VideoDefault from "Video.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Camera(arg0) {
      const cResult = c.c(5);
      ({ disabled, deviceId, width, height } = arg0);
      if (cResult[0] === deviceId) {
        if (cResult[1] === disabled) {
          if (cResult[2] === height) {
            if (cResult[3] === width) {
              return cResult[4];
            }
          }
        }
      }
      if (disabled) {
        const obj2 = { className: "media-engine-video", style: null };
        const size = { width, height };
        obj2.style = size;
        let tmp3Result = <div className="media-engine-video" style={null} />;
      } else {
        const obj3 = { streamId: deviceId, style: null };
        const size1 = { width, height };
        obj3.style = size1;
        tmp3Result = jsx(VideoDefault, { streamId: deviceId, style: null });
      }
      cResult[0] = deviceId;
      cResult[1] = disabled;
      cResult[2] = height;
      cResult[3] = width;
      cResult[4] = tmp3Result;
    }
  : function Camera(disabled) {
      ({ width, height } = disabled);
      if (disabled.disabled) {
        const obj2 = { className: "media-engine-video", style: null };
        const size = { width, height };
        obj2.style = size;
        let tmp2Result = <div className="media-engine-video" style={null} />;
      } else {
        const obj = { streamId: tmp, style: null };
        const size1 = { width, height };
        obj.style = size1;
        tmp2Result = jsx(VideoDefault, { streamId: tmp, style: null });
      }
      return tmp2Result;
    };
tmp3.defaultProps = { disabled: false, width: 320, height: 180 };
let size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/Camera.tsx");

export default tmp3;
