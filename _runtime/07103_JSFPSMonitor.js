// _runtime/07103_JSFPSMonitor.js
import _classCallCheck from "_classCallCheck";

const JSFPSMonitor = arg1;
class JSFPSMonitor {
  constructor() {
    self = this;
    tmp = outer1_2(this, self);
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
        num = obj.frameCount / result;
      }
      self.averageFPS = num;
      const timeWindow = obj.timeWindow;
      timeWindow.frameCount = timeWindow.frameCount + 1;
      const result1 = (Date.now() - obj.timeWindow.startTime) / 1000;
      if (1 <= result1) {
        const result2 = obj.timeWindow.frameCount / result1;
        const _Math = Math;
        obj.minFPS = Math.min(obj.minFPS, result2);
        const _Math2 = Math;
        obj.maxFPS = Math.max(obj.maxFPS, result2);
        obj.timeWindow.frameCount = 0;
        const _Date = Date;
        obj.timeWindow.startTime = Date.now();
      }
      self.measureLoop();
    };
    return;
  }
}
const items = [
  {
    key: "measureLoop",
    value: function measureLoop() {
      this.clearAnimationNumber = requestAnimationFrame(this.updateLoopCompute);
    }
  },
  {
    key: "startTracking",
    value: function startTracking() {
      const self = this;
      if (0 !== this.startTime) {
        const _Error = Error;
        const error = new Error(JSFPSMonitor(7038).ErrorMessages.fpsMonitorAlreadyRunning);
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
      const obj = { minFPS: null, maxFPS: null, averageFPS: null };
      obj[0] = JSFPSMonitor(7104).roundToDecimalPlaces(self.minFPS, 1);
      const obj2 = JSFPSMonitor(7104);
      obj[1] = JSFPSMonitor(7104).roundToDecimalPlaces(self.maxFPS, 1);
      const obj3 = JSFPSMonitor(7104);
      obj[2] = JSFPSMonitor(7104).roundToDecimalPlaces(self.averageFPS, 1);
      return obj;
    }
  }
];

export const JSFPSMonitor = require("_createClass")(JSFPSMonitor, items);