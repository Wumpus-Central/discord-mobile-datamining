// === Module 1689: SensorContainer ===

// Module 1689 (SensorContainer)
import _createClassDefault from "_createClass" /* 42 */;
import _modDef1690 from "module_1690" /* 1690 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class SensorContainer {
  constructor() {
    _classCallCheck(this, SensorContainer);
    this.nativeSensors = new Map();
    new Map();
  }
}
const entry = {
  key: "getSensorId",
  value: function getSensorId(arg0, iosReferenceFrame) {
    const result = 100 * arg0;
    const result1 = 10 * iosReferenceFrame.iosReferenceFrame;
    return result + result1 + Number(iosReferenceFrame.adjustToInterfaceOrientation);
  }
};
const items = [
  entry,
  {
    key: "initializeSensor",
    value: function initializeSensor(arg0, iosReferenceFrame) {
      const self = this;
      const sensorId = this.getSensorId(arg0, iosReferenceFrame);
      const nativeSensors = this.nativeSensors;
      if (!nativeSensors.has(sensorId)) {
        const self2 = this;
        const self3 = this;
        const nativeSensors2 = self.nativeSensors;
        const tmp6 = new _modDef1690(arg0, iosReferenceFrame);
        const result = nativeSensors2.set(sensorId, tmp6);
      }
      const nativeSensors3 = self.nativeSensors;
      const value = nativeSensors3.get(sensorId);
      return value.getSharedValue();
    }
  },
  {
    key: "registerSensor",
    value: function registerSensor(arg0, iosReferenceFrame, arg2) {
      const sensorId = this.getSensorId(arg0, iosReferenceFrame);
      const nativeSensors = this.nativeSensors;
      if (nativeSensors.has(sensorId)) {
        const nativeSensors2 = this.nativeSensors;
        const value = nativeSensors2.get(sensorId);
        let num = -1;
        if (value) {
          num = -1;
          if (value.isAvailable()) {
            if (value.isRunning()) {
              value.listenersNumber = value.listenersNumber + 1;
              num = sensorId;
            } else {
              num = -1;
            }
          }
        }
        return num;
      } else {
        return -1;
      }
    }
  },
  {
    key: "unregisterSensor",
    value: function unregisterSensor(arg0) {
      const nativeSensors = this.nativeSensors;
      if (nativeSensors.has(arg0)) {
        const nativeSensors2 = this.nativeSensors;
        const value = nativeSensors2.get(arg0);
        const tmp = value && value.isRunning();
        if (tmp) {
          value.listenersNumber = value.listenersNumber - 1;
          if (0 === value.listenersNumber) {
            value.unregister();
          }
        }
      }
    }
  }
];
const SensorContainer_export = _createClassDefault(SensorContainer, items);

export { SensorContainer_export as SensorContainer };