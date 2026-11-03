// _runtime/01829_SensorContainer.js
import _createClassDefault from "metro/00042__createClass.js";
import SensorDefault from "01830_Sensor.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

const SensorContainer = arg1;
class SensorContainer {
  constructor() {
    tmp = closure_3(this, SensorContainer);
    map = new Map();
    this.nativeSensors = map;
    map1 = new Map();
    this.availability = map1;
    return;
  }
}
const entry = {
  key: "isSensorAvailable",
  value: function isSensorAvailable(arg0) {
    const availability = this.availability;
    value = availability.get(arg0);
    if (undefined === value) {
      const ReanimatedModule = SensorContainer(1663).ReanimatedModule;
      const isSensorAvailableResult = ReanimatedModule.isSensorAvailable(arg0);
      const availability2 = this.availability;
      const result = availability2.set(arg0, isSensorAvailableResult);
      value = isSensorAvailableResult;
    }
    return value;
  },
};
const items = [
  entry,
  {
    key: "getSensorId",
    value: function getSensorId(arg0, iosReferenceFrame) {
      const result = 100 * arg0;
      const result1 = 10 * iosReferenceFrame.iosReferenceFrame;
      return result + result1 + Number(iosReferenceFrame.adjustToInterfaceOrientation);
    },
  },
  {
    key: "initializeSensor",
    value: function initializeSensor(arg0, iosReferenceFrame) {
      const self = this;
      const sensorId = this.getSensorId(arg0, iosReferenceFrame);
      const nativeSensors = this.nativeSensors;
      if (!nativeSensors.has(sensorId)) {
        const nativeSensors2 = self.nativeSensors;
        const tmp8 = new SensorDefault(arg0, iosReferenceFrame);
        const result = nativeSensors2.set(sensorId, tmp8);
      }
      const nativeSensors3 = self.nativeSensors;
      value = nativeSensors3.get(sensorId);
      return value.getSharedValue();
    },
  },
  {
    key: "registerSensor",
    value: function registerSensor(arg0, iosReferenceFrame, arg2) {
      const sensorId = this.getSensorId(arg0, iosReferenceFrame);
      const nativeSensors = this.nativeSensors;
      if (nativeSensors.has(sensorId)) {
        const nativeSensors2 = this.nativeSensors;
        value = nativeSensors2.get(sensorId);
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
    },
  },
  {
    key: "unregisterSensor",
    value: function unregisterSensor(arg0) {
      const nativeSensors = this.nativeSensors;
      if (nativeSensors.has(arg0)) {
        const nativeSensors2 = this.nativeSensors;
        value = nativeSensors2.get(arg0);
        let isRunningResult = value;
        if (value) {
          isRunningResult = value.isRunning();
        }
        if (isRunningResult) {
          value.listenersNumber = value.listenersNumber - 1;
          if (0 === value.listenersNumber) {
            value.unregister();
          }
        }
      }
    },
  },
];

export const SensorContainer = _createClassDefault(SensorContainer, items);
