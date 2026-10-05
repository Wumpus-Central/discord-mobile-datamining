// === Module 16596: FramePoolManager ===

// Module 16596 (FramePoolManager)
import getFramesManagerDefault from "getFramesManager" /* 9040 */;
import AbstractFramePoolManager from "AbstractFramePoolManager" /* 16597 */;

class FramePoolManager extends tmp4 {
  constructor() {
    tmp1 = new tmp({ maxBackgrounded: 1, timeoutMs: 90000 }, new.target, tmp);
    tmp1.poolNodeTag = 0;
    return tmp1;
  }
}
const prototype = FramePoolManager.prototype;
prototype["setPoolNodeTag"] = function setPoolNodeTag(poolNodeTag) {
  const self = this;
  if (this.poolNodeTag !== poolNodeTag) {
    self.poolNodeTag = poolNodeTag;
    self.emitChange();
  }
};
prototype["getPoolNodeTag"] = function getPoolNodeTag() {
  return this.poolNodeTag;
};
prototype["place"] = function place() {

};
prototype["unplace"] = function unplace() {

};
prototype["destroyFrame"] = function destroyFrame(id) {
  getFramesManagerDefault().leaveFrame(id);
};
const tmp5 = new "destroyFrame"({ maxBackgrounded: 1, timeoutMs: 90000 }, tmp2, tmp, Object, prototype, FramePoolManager);
tmp5.poolNodeTag = 0;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/FramePoolManager.tsx");

export default tmp5;