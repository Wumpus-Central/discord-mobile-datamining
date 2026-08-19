// === Module 4576: Camera ===

// Module 4576 (Camera)
import noopAll from "noop" /* 19 */;
import VideoDefault from "Video" /* 4573 */;
import { jsx } from "jsxProd" /* 21 */;

class Camera {
  constructor(arg0) {
    ({ width, height } = global);
    tmp2 = jsx;
    if (global.disabled) {
      obj = { className: "media-engine-video", style: null };
      obj1 = { width: null, height: null };
      obj1[0] = width;
      obj1[1] = height;
      obj[1] = obj1;
      str = "div";
      tmp2Result = tmp2("div", obj);
    } else {
      tmp3 = closure_0;
      tmp4 = closure_1;
      obj = { streamId: null, style: null };
      obj[0] = tmp;
      obj2 = { width: null, height: null };
      obj2[0] = width;
      obj2[1] = height;
      obj[1] = obj2;
      tmp2Result = tmp2(require("Video"), obj);
    }
    return tmp2Result;
  }
}
noopAll;
Camera.defaultProps = { disabled: false, width: 320, height: 180 };
const result = require("obj132").fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/Camera.tsx");

export default Camera;