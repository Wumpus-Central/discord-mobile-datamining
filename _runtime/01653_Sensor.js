import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";

const Sensor = arg1;
class Sensor {
  constructor(arg0, arg1) {
    tmp = outer1_2(this, Sensor);
    this.listenersNumber = 0;
    this.sensorId = null;
    this.sensorType = global;
    this.config = arg1;
    tmp2 = Sensor;
    tmp3 = closure_1;
    if (global === require("isWorkletFunction").SensorType.ROTATION) {
      tmp2Result = require("addCompilerSafeGetAndSet");
      mutable = tmp2Result.makeMutable({ qw: 0, qx: 0, qy: 0, qz: 0, yaw: 0, pitch: 0, roll: 0, interfaceOrientation: 0 });
    } else {
      tmp2Result1 = require("addCompilerSafeGetAndSet");
      mutable = tmp2Result1.makeMutable({ x: 0, y: 0, z: 0, interfaceOrientation: 0 });
    }
    this.data = mutable;
    return;
  }
}
const items = [
  {
    key: "register",
    value: function register(arg0) {
      let config;
      let sensorType;
      const self = this;
      ({ config, sensorType } = this);
      const ReanimatedModule = Sensor(1614).ReanimatedModule;
      let num = -1;
      if ("auto" !== config.interval) {
        num = config.interval;
      }
      self.sensorId = ReanimatedModule.registerSensor(sensorType, num, config.iosReferenceFrame, arg0);
      return -1 !== self.sensorId;
    }
  },
  {
    key: "isRunning",
    value: function isRunning() {
      let tmp = -1 !== this.sensorId;
      if (tmp) {
        tmp = null !== this.sensorId;
      }
      return tmp;
    }
  },
  {
    key: "isAvailable",
    value: function isAvailable() {
      return -1 !== this.sensorId;
    }
  },
  {
    key: "getSharedValue",
    value: function getSharedValue() {
      return this.data;
    }
  },
  {
    key: "unregister",
    value: function unregister() {
      const self = this;
      let tmp = null !== this.sensorId;
      if (tmp) {
        tmp = -1 !== self.sensorId;
      }
      if (tmp) {
        const ReanimatedModule = Sensor(1614).ReanimatedModule;
        ReanimatedModule.unregisterSensor(self.sensorId);
      }
      self.sensorId = null;
    }
  }
];

export default _createClass(Sensor, items);