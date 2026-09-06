// === Module 6898: VelocityTracker ===

// Module 6898 (VelocityTracker)
import _modDef6867 from "module_6867" /* 6867 */;
import _classCallCheck from "module_6866" /* 6866 */;

class VelocityTracker {
  constructor() {
    tmp = closure_0(this, VelocityTracker);
    this.lastUpdateTime = Date.now();
    this.velocity = { x: 0, y: 0 };
    this.timeoutId = null;
    return;
  }
}
_classCallCheck = VelocityTracker;
const entry = {
  key: "computeVelocity",
  value: function computeVelocity(adjustOffsetForRTLResult, absoluteLastScrollOffset, arg2, fn) {
    const self = this;
    closure_0 = fn;
    this.cleanUp();
    const timestamp = Date.now();
    const diff = adjustOffsetForRTLResult - absoluteLastScrollOffset;
    const result = diff / Math.max(1, timestamp - this.lastUpdateTime);
    this.lastUpdateTime = timestamp;
    let num = 0;
    if (arg2) {
      num = result;
    }
    this.velocity.x = num;
    let num2 = 0;
    if (!arg2) {
      num2 = result;
    }
    self.velocity.y = num2;
    fn(self.velocity, false);
    self.timeoutId = setTimeout(() => {
      self.cleanUp();
      self.lastUpdateTime = Date.now();
      self.velocity.x = 0;
      self.velocity.y = 0;
      closure_0(self.velocity, true);
    }, 100);
  }
};
const items = [
  entry,
  {
    key: "cleanUp",
    value: function cleanUp() {
      const self = this;
      if (null !== this.timeoutId) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.timeoutId);
        self.timeoutId = null;
      }
    }
  }
];

export const VelocityTracker = _modDef6867(VelocityTracker, items);