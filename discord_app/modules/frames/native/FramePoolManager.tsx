// discord_app/modules/frames/native/FramePoolManager.tsx
import getFramesManagerDefault from "../utils/getFramesManager.native.tsx";
import AbstractFramePoolManager from "../AbstractFramePoolManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let tmp2;
class FramePoolManager extends AbstractFramePoolManager {
  constructor() {
    const tmp2 = new tmp({ maxBackgrounded: 1, timeoutMs: 90000 }, new.target, tmp);
    tmp2.poolNodeTag = 0;
    return tmp2;
  }
  setPoolNodeTag(poolNodeTag) {
    const self = this;
    if (this.poolNodeTag !== poolNodeTag) {
      self.poolNodeTag = poolNodeTag;
      self.emitChange();
    }
  }
  getPoolNodeTag() {
    return this.poolNodeTag;
  }
  place() {}
  unplace() {}
  destroyFrame(id) {
    const obj = getFramesManagerDefault();
    obj.leaveFrame(id);
  }
}
const tmp5 = new "destroyFrame"(
  { maxBackgrounded: 1, timeoutMs: 90000 },
  tmp2,
  tmp,
  Object,
  FramePoolManager.prototype,
  FramePoolManager,
);
tmp5.poolNodeTag = 0;
const result = size.fileFinishedImporting("modules/frames/native/FramePoolManager.tsx");

export default tmp5;
