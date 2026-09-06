// === Module 6919: JSFPSMonitor ===

// Module 6919 (JSFPSMonitor)
import _modDef6867 from "module_6867" /* 6867 */;
import _classCallCheck from "module_6866" /* 6866 */;

const JSFPSMonitor = arg1;
class JSFPSMonitor {
  constructor() {
    self = this;
    tmp = c2(this, JSFPSMonitor);
    this.startTime = 0;
    this.frameCount = 0;
    this.timeWindow = { frameCount: 0, startTime: 0 };
    this.minFPS = Number.MAX_SAFE_INTEGER;
    this.maxFPS = 0;
    this.averageFPS = 0;
    this.clearAnimationNumber = 0;
    this.updateLoopCompute = () => {
      self.frameCount = self.frameCount + 1;
      const result = (Date.now() - self.startTime) / 1000;
      let num = 0;
      if (0 < result) {
        num = self.frameCount / result;
      }
      self.averageFPS = num;
      const timeWindow = self.timeWindow;
      timeWindow.frameCount = timeWindow.frameCount + 1;
      const result1 = (Date.now() - self.timeWindow.startTime) / 1000;
      if (1 <= result1) {
        const result2 = self.timeWindow.frameCount / result1;
        const _Math = Math;
        self.minFPS = Math.min(self.minFPS, result2);
        const _Math2 = Math;
        self.maxFPS = Math.max(self.maxFPS, result2);
        self.timeWindow.frameCount = 0;
        const _Date = Date;
        self.timeWindow.startTime = Date.now();
      }
      self.measureLoop();
    };
    return;
  }
}
const entry = {
  key: "measureLoop",
  value: function measureLoop() {
    this.clearAnimationNumber = requestAnimationFrame(this.updateLoopCompute);
  }
};
const items = [
  entry,
  {
    key: "startTracking",
    value: function startTracking() {
      const self = this;
      if (0 !== this.startTime) {
        const _Error = Error;
        const error = new Error(JSFPSMonitor(6854).ErrorMessages.fpsMonitorAlreadyRunning);
        throw error;
      } else {
        const _Date = Date;
        self.startTime = Date.now();
        const _Date2 = Date;
        self.timeWindow.startTime = Date.now();
        self.measureLoop();
      }
    }
  },
  {
    key: "stopAndGetData",
    value: function stopAndGetData() {
      const self = this;
      cancelAnimationFrame(this.clearAnimationNumber);
      if (this.minFPS === Number.MAX_SAFE_INTEGER) {
        ({ averageFPS: self.minFPS, averageFPS: self.maxFPS } = self);
      }
      const obj = { minFPS: JSFPSMonitor(6920).roundToDecimalPlaces(self.minFPS, 1), maxFPS: null, averageFPS: null };
      const obj2 = JSFPSMonitor(6920);
      obj.maxFPS = JSFPSMonitor(6920).roundToDecimalPlaces(self.maxFPS, 1);
      const obj3 = JSFPSMonitor(6920);
      obj.averageFPS = JSFPSMonitor(6920).roundToDecimalPlaces(self.averageFPS, 1);
      return obj;
    }
  }
];

export const JSFPSMonitor = _modDef6867(JSFPSMonitor, items);