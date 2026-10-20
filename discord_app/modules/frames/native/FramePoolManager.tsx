// === Module 11756: FramePoolManager ===

// Module 11756 (FramePoolManager)
import leaveFrame from "leaveFrame" /* 11068 */;
import FrameStackLevel from "FrameStackLevel" /* 11758 */;
import FramePoolActionCreators from "FramePoolActionCreators" /* 11759 */;
import AbstractFramePoolManager from "AbstractFramePoolManager" /* 11757 */;

require = fn;
class FramePoolManager extends tmp4 {
  constructor() {
    tmp1 = new tmp({ maxBackgrounded: 1, timeoutMs: 90000 }, new.target, tmp);
    tmp1.poolNodeTag = 0;
    return tmp1;
  }
  removeFrameEntry(arg0) {
    removeFrameEntryResult = super.removeFrameEntry(global);
    obj = closure_0(closure_1[1]);
    result = obj.updateFramePoolVisibility(global, "unpooled");
    return;
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
prototype["place"] = function place(id, target, level) {
  let str = "hidden";
  if (level !== FrameStackLevel.FrameStackLevel.Backstage) {
    str = "visible";
  }
  const result = FramePoolActionCreators.updateFramePoolVisibility(id, str);
};
prototype["unplace"] = function unplace(id) {
  const result = FramePoolActionCreators.updateFramePoolVisibility(id, "hidden");
};
function destroyFrame(id) {
  leaveFrame.leaveFrame(id);
}
prototype["destroyFrame"] = destroyFrame;
const destroyFrame1 = new destroyFrame({ maxBackgrounded: 1, timeoutMs: 90000 }, tmp2, tmp, "destroyFrame", FramePoolManager, destroyFrame, new.target);
destroyFrame1.poolNodeTag = 0;
const size = fn(2);
let result = size.fileFinishedImporting("modules/frames/native/FramePoolManager.tsx");

export default destroyFrame1;