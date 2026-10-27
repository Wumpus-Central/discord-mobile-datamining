// === Module 11782: FramePoolManager ===

// Module 11782 (FramePoolManager)
import leaveFrame from "leaveFrame" /* 10769 */;
import FrameStackLevel from "FrameStackLevel" /* 11784 */;
import FramePoolActionCreators from "FramePoolActionCreators" /* 11785 */;
import AbstractFramePoolManager from "AbstractFramePoolManager" /* 11783 */;

require = fn;
class FramePoolManager extends tmp4 {
  constructor() {
    tmp1 = new tmp({ maxBackgrounded: 1, timeoutMs: 90000 }, new.target, tmp);
    tmp1.poolNodeTag = 0;
    map = new Map();
    tmp1.loadedWebViewKeys = map;
    return tmp1;
  }
  removeFrameEntry(arg0) {
    loadedWebViewKeys = this.loadedWebViewKeys;
    deleteResult = loadedWebViewKeys.delete(global);
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
prototype["setWebViewLoaded"] = function setWebViewLoaded(id, iframeId) {
  const self = this;
  const loadedWebViewKeys = this.loadedWebViewKeys;
  if (loadedWebViewKeys.get(id) !== iframeId) {
    const loadedWebViewKeys2 = self.loadedWebViewKeys;
    const result = loadedWebViewKeys2.set(id, iframeId);
    self.emitChange();
  }
};
prototype["isWebViewLoaded"] = function isWebViewLoaded(frameId, arg1) {
  const loadedWebViewKeys = this.loadedWebViewKeys;
  return loadedWebViewKeys.get(frameId) === arg1;
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
const destroyFrame1 = new destroyFrame({ maxBackgrounded: 1, timeoutMs: 90000 }, tmp2, tmp, "destroyFrame", FramePoolManager, destroyFrame, new.target, globalThis);
destroyFrame1.poolNodeTag = 0;
destroyFrame1.loadedWebViewKeys = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/frames/native/FramePoolManager.tsx");

export default destroyFrame1;