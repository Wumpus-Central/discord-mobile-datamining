// === Module 1690: ? ===

// Module 1690
import _createClassDefault from "_createClass" /* 42 */;
import ReanimatedModule2 from "ReanimatedModule" /* 1651 */;
import LayoutAnimationType from "LayoutAnimationType" /* 1668 */;
import _mod1680 from "module_1680" /* 1680 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class Sensor {
  constructor(sensorType, config) {
    let mutable;
    _classCallCheck(this, Sensor);
    this.listenersNumber = 0;
    this.sensorId = null;
    this.sensorType = sensorType;
    this.config = config;
    if (sensorType === LayoutAnimationType.SensorType.ROTATION) {
      const tmp2Result = _mod1680;
      mutable = tmp2Result.makeMutable({ qw: 0, qx: 0, qy: 0, qz: 0, yaw: 0, pitch: 0, roll: 0, interfaceOrientation: 0 });
    } else {
      const tmp2Result2 = _mod1680;
      mutable = tmp2Result2.makeMutable({ x: 0, y: 0, z: 0, interfaceOrientation: 0 });
    }
    this.data = mutable;
  }
}
const entry = {
  key: "register",
  value: function register(arg0) {
    let config;
    let sensorType;
    const self = this;
    ({ config, sensorType } = this);
    const ReanimatedModule = ReanimatedModule2.ReanimatedModule;
    let num = -1;
    const registerSensor = ReanimatedModule.registerSensor;
    if ("auto" !== config.interval) {
      num = config.interval;
    }
    self.sensorId = registerSensor(sensorType, num, config.iosReferenceFrame, arg0);
    return -1 !== self.sensorId;
  }
};
const items = [
  entry,
  {
    key: "isRunning",
    value: function isRunning() {
      return -1 !== this.sensorId && null !== this.sensorId;
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
      const tmp = null !== this.sensorId && -1 !== self.sensorId;
      if (tmp) {
        const ReanimatedModule = ReanimatedModule2.ReanimatedModule;
        ReanimatedModule.unregisterSensor(self.sensorId);
      }
      self.sensorId = null;
    }
  }
];

export default _createClassDefault(Sensor, items);