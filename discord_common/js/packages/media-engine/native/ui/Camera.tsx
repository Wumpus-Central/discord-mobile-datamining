// === Module 4623: Camera ===

// Module 4623 (Camera)
import VideoDefault from "Video" /* 4619 */;
import noop from "module_19" /* 19 */;

class Camera {
  constructor(arg0) {
    ({ width, height } = global);
    tmp2 = jsx;
    if (global.disabled) {
      obj = { className: "media-engine-video", style: null };
      size = { width: null, height: null };
      size.width = width;
      size.height = height;
      obj.style = size;
      str = "div";
      tmp2Result = tmp2("div", obj);
    } else {
      tmp3 = closure_0;
      tmp4 = closure_1;
      obj = { streamId: null, style: null };
      obj.streamId = tmp;
      size1 = { width: null, height: null };
      size1.width = width;
      size1.height = height;
      obj.style = size1;
      tmp2Result = tmp2(closure_0(closure_1[2]), obj);
    }
    return tmp2Result;
  }
}
const jsx = fn(21).jsx;
Camera.defaultProps = { disabled: false, width: 320, height: 180 };
let size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/Camera.tsx");

export default Camera;