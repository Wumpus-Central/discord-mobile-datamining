// _runtime/06411_JSFPSMonitor.js
import ErrorMessages from "06346_ErrorMessages.js";
import _createClassDefault from "metro/06359__createClass.js";
import roundToDecimalPlaces from "06412_roundToDecimalPlaces.js";
import _classCallCheck from "metro/06358__classCallCheck.js";

class JSFPSMonitor {
  constructor() {
    const self = this;
    _classCallCheck(this, JSFPSMonitor);
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
  }
}
const entry = {
  key: "measureLoop",
  value: function measureLoop() {
    this.clearAnimationNumber = requestAnimationFrame(this.updateLoopCompute);
  },
};
const items = [
  entry,
  {
    key: "startTracking",
    value: function startTracking() {
      const self = this;
      if (0 !== this.startTime) {
        const _Error = Error;
        const self2 = this;
        const self3 = this;
        const error = new Error(ErrorMessages.ErrorMessages.fpsMonitorAlreadyRunning);
        throw error;
      } else {
        const _Date = Date;
        self.startTime = Date.now();
        const _Date2 = Date;
        self.timeWindow.startTime = Date.now();
        self.measureLoop();
      }
    },
  },
  {
    key: "stopAndGetData",
    value: function stopAndGetData() {
      let obj2;
      let obj3;
      let obj4;
      const self = this;
      cancelAnimationFrame(this.clearAnimationNumber);
      if (this.minFPS === Number.MAX_SAFE_INTEGER) {
        ({ averageFPS: self.minFPS, averageFPS: self.maxFPS } = self);
      }
      const obj = {
        minFPS: obj2.roundToDecimalPlaces(self.minFPS, 1),
        maxFPS: obj3.roundToDecimalPlaces(self.maxFPS, 1),
        averageFPS: obj4.roundToDecimalPlaces(self.averageFPS, 1),
      };
      obj2 = roundToDecimalPlaces;
      obj3 = roundToDecimalPlaces;
      obj4 = roundToDecimalPlaces;
      return obj;
    },
  },
];
const JSFPSMonitor_export = _createClassDefault(JSFPSMonitor, items);

export { JSFPSMonitor_export as JSFPSMonitor };
