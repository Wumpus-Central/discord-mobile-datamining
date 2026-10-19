// === Module 11721: FramePoolManager ===

// Module 11721 (FramePoolManager)
import leaveFrame from "leaveFrame" /* 11041 */;
import FrameStackLevel from "FrameStackLevel" /* 11724 */;
import FrameVisibilityStore from "FrameVisibilityStore" /* 11722 */;
import AbstractFramePoolManager from "AbstractFramePoolManager" /* 11723 */;

require = fn;
class FramePoolManager extends tmp4 {
  constructor() {
    tmp1 = new tmp({ maxBackgrounded: 1, timeoutMs: 90000 }, new.target, tmp);
    tmp1.poolNodeTag = 0;
    return tmp1;
  }
  removeFrameEntry(arg0) {
    removeFrameEntryResult = super.removeFrameEntry(global);
    removeFrameResult = closure_2.removeFrame(global);
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
  FrameVisibilityStore.setFrameVisible(id, level !== FrameStackLevel.FrameStackLevel.Backstage);
};
prototype["unplace"] = function unplace(id) {
  FrameVisibilityStore.setFrameVisible(id, false);
};
function destroyFrame(id) {
  leaveFrame.leaveFrame(id);
}
prototype["destroyFrame"] = destroyFrame;
const destroyFrame1 = new destroyFrame({ maxBackgrounded: 1, timeoutMs: 90000 }, tmp2, tmp, Object, "destroyFrame", FramePoolManager, destroyFrame);
destroyFrame1.poolNodeTag = 0;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/FramePoolManager.tsx");

export default destroyFrame1;