// === Module 1699: ? ===

// Module 1699
import _createClassDefault from "_createClass" /* 42 */;
import _slicedToArray from "module_32" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const JSReanimated = arg1;
class JSReanimated {
  constructor() {
    self = this;
    tmp = closure_3(this, JSReanimated);
    this.nextSensorId = 0;
    map = new Map();
    this.sensors = map;
    this.platform = undefined;
    this.getSensorCallback = (arg0, arg1, arg2) => {
      closure_0 = arg0;
      closure_1 = arg2;
      if (self(dependencyMap[3]).SensorType.ACCELEROMETER !== arg1) {
        if (self(dependencyMap[3]).SensorType.GRAVITY !== arg1) {
          if (self(dependencyMap[3]).SensorType.GYROSCOPE !== arg1) {
            if (self(dependencyMap[3]).SensorType.MAGNETIC_FIELD !== arg1) {
              if (self(dependencyMap[3]).SensorType.ROTATION === arg1) {
                return () => {
                  [tmp2, tmp3] = closure_0.quaternion;
                  const tmp4 = _slicedToArray(closure_0.quaternion, 4);
                  if (self.platform === obj.WEB_ANDROID) {
                    items = [tmp6, -tmp5];
                    [tmp8, tmp7] = items;
                  }
                  const tmp = _slicedToArray(closure_0.quaternion, 2);
                  const tmp9 = -Math.atan2(2 * (tmp4[2] * tmp4[3] + tmp2 * tmp3), tmp2 * tmp2 - tmp3 * tmp3 - tmp4[2] * tmp4[2] + tmp4[3] * tmp4[3]);
                  obj = { qw: tmp2, qx: tmp3, qy: tmp4[2], qz: tmp4[3], yaw: tmp9, pitch: Math.sin(-2 * (tmp3 * tmp4[3] - tmp2 * tmp4[2])), roll: -Math.atan2(2 * (tmp3 * tmp4[2] + tmp2 * tmp4[3]), tmp2 * tmp2 + tmp3 * tmp3 - tmp4[2] * tmp4[2] - tmp4[3] * tmp4[3]), interfaceOrientation: 0 };
                  closure_1(obj);
                };
              }
            }
          }
          return () => {
            const point = { x: closure_0.x, y: closure_0.y, z: closure_0.z, interfaceOrientation: 0 };
            closure_1(point);
          };
        }
      }
      return () => {
        ({ x, y, z } = closure_0);
        if (self.platform === obj.WEB_ANDROID) {
          items = [-x, -y, -z];
          [tmp3, tmp2, tmp] = items;
        }
        closure_1({ x, y, z, interfaceOrientation: 0 });
      };
    };
    return;
  }
}
const entry = {
  key: "registerEventHandler",
  value: function registerEventHandler(arg0, arg1, arg2) {
    const error = new Error("[Reanimated] registerEventHandler is not available in JSReanimated.");
    throw error;
  }
};
let items = [
  entry,
  {
    key: "unregisterEventHandler",
    value: function unregisterEventHandler(arg0) {
      const error = new Error("[Reanimated] unregisterEventHandler is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "configureLayoutAnimationBatch",
    value: function configureLayoutAnimationBatch() {

    }
  },
  {
    key: "setShouldAnimateExitingForTag",
    value: function setShouldAnimateExitingForTag() {

    }
  },
  {
    key: "isSensorAvailable",
    value: function isSensorAvailable(arg0) {
      let IS_WINDOW_AVAILABLE = JSReanimated(1668).IS_WINDOW_AVAILABLE;
      if (IS_WINDOW_AVAILABLE) {
        const self = this;
        const _window = window;
        IS_WINDOW_AVAILABLE = this.getSensorName(arg0) in window;
      }
      return IS_WINDOW_AVAILABLE;
    }
  },
  {
    key: "registerSensor",
    value: function registerSensor(arg0, arg1, arg2, arg3) {
      if (JSReanimated(1668).IS_WINDOW_AVAILABLE) {
        const self = this;
        if (undefined === this.platform) {
          self.detectPlatform();
        }
        if (self.isSensorAvailable(arg0)) {
          if (undefined === self.platform) {
            self.detectPlatform();
          }
          const initializeSensorResult = self.initializeSensor(arg0, arg1);
          const listener = initializeSensorResult.addEventListener("reading", self.getSensorCallback(initializeSensorResult, arg0, arg3));
          initializeSensorResult.start();
          const sensors = self.sensors;
          const result = sensors.set(self.nextSensorId, initializeSensorResult);
          self.nextSensorId = +self.nextSensorId + 1;
          return +self.nextSensorId;
        } else {
          const logger = JSReanimated(1668).logger;
          let str = "";
          let str2 = "";
          if (JSReanimated(1668).IS_WEB) {
            const _location = location;
            str2 = str;
            if ("https:" !== location.protocol) {
              str2 = " Make sure you use secure origin with `npx expo start --web --https`.";
            }
          }
          if (self.platform === obj.WEB_IOS) {
            str = " For iOS web, you will also have to also grant permission in the browser: https://dev.to/li/how-to-requestpermission-for-devicemotion-and-deviceorientation-events-in-ios-13-46g2.";
          }
          const _HermesInternal = HermesInternal;
          logger.warn("Sensor is not available." + str2 + str);
          return -1;
        }
      } else {
        return -1;
      }
    }
  },
  {
    key: "unregisterSensor",
    value: function unregisterSensor(arg0) {
      const sensors = this.sensors;
      value = sensors.get(arg0);
      if (undefined !== value) {
        value.stop();
        const sensors2 = this.sensors;
        sensors2.delete(arg0);
      }
    }
  },
  {
    key: "subscribeForKeyboardEvents",
    value: function subscribeForKeyboardEvents(arg0) {
      const tmp3 = JSReanimated(1668);
      if (JSReanimated(1668).IS_WEB) {
        const logger2 = tmp3.logger;
        logger2.warn("useAnimatedKeyboard is not available on web yet.");
      } else {
        const logger = JSReanimated(1668).logger;
        const warn = logger.warn;
        if (tmp3.IS_JEST) {
          warn("useAnimatedKeyboard is not available when using Jest.");
        } else {
          warn("useAnimatedKeyboard is not available on this configuration.");
        }
      }
      return -1;
    }
  },
  {
    key: "unsubscribeFromKeyboardEvents",
    value: function unsubscribeFromKeyboardEvents(arg0) {

    }
  },
  {
    key: "initializeSensor",
    value: function initializeSensor(arg0, arg1) {
      if (arg1 <= 0) {
        let obj = { referenceFrame: "device" };
      } else {
        obj = { frequency: 1000 / arg1 };
      }
      if (JSReanimated(1700).SensorType.ACCELEROMETER === arg0) {
        const _window5 = window;
        const accelerometer = new window.Accelerometer(obj);
        return accelerometer;
      } else if (JSReanimated(1700).SensorType.GYROSCOPE === arg0) {
        const _window4 = window;
        const gyroscope = new window.Gyroscope(obj);
        return gyroscope;
      } else if (JSReanimated(1700).SensorType.GRAVITY === arg0) {
        const _window3 = window;
        const gravitySensor = new window.GravitySensor(obj);
        return gravitySensor;
      } else if (JSReanimated(1700).SensorType.MAGNETIC_FIELD === arg0) {
        const _window2 = window;
        const magnetometer = new window.Magnetometer(obj);
        return magnetometer;
      } else if (JSReanimated(1700).SensorType.ROTATION === arg0) {
        const _window = window;
        const absoluteOrientationSensor = new window.AbsoluteOrientationSensor(obj);
        return absoluteOrientationSensor;
      }
    }
  },
  {
    key: "getSensorName",
    value: function getSensorName(arg0) {
      if (JSReanimated(1700).SensorType.ACCELEROMETER === arg0) {
        return "Accelerometer";
      } else if (JSReanimated(1700).SensorType.GRAVITY === arg0) {
        return "GravitySensor";
      } else if (JSReanimated(1700).SensorType.GYROSCOPE === arg0) {
        return "Gyroscope";
      } else if (JSReanimated(1700).SensorType.MAGNETIC_FIELD === arg0) {
        return "Magnetometer";
      } else if (JSReanimated(1700).SensorType.ROTATION === arg0) {
        return "AbsoluteOrientationSensor";
      }
    }
  },
  {
    key: "detectPlatform",
    value: function detectPlatform() {
      let opera = navigator.userAgent;
      if (!opera) {
        const _navigator = navigator;
        opera = navigator.vendor;
      }
      if (!opera) {
        const _window = window;
        opera = window.opera;
      }
      const self = this;
      if (undefined === opera) {
        self.platform = obj.UNKNOWN;
      } else {
        obj = /iPad|iPhone|iPod/;
        if (obj.test(opera)) {
          self.platform = obj.WEB_IOS;
        } else {
          if (obj2.test(opera)) {
            self.platform = tmp.WEB_ANDROID;
          } else {
            self.platform = tmp.WEB;
          }
          obj2 = /android/i;
        }
      }
    }
  },
  {
    key: "getViewProp",
    value: function getViewProp(arg0, arg1, arg2, arg3) {
      const error = new Error("[Reanimated] getViewProp is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "getStaticFeatureFlag",
    value: function getStaticFeatureFlag(arg0) {
      const IS_JEST = JSReanimated(1668).IS_JEST;
      let tmp3 = !IS_JEST;
      if (!IS_JEST) {
        let flag = JSReanimated(1701).DefaultStaticFeatureFlags[arg0];
        if (flag == null) {
          flag = false;
        }
        tmp3 = flag;
      }
      return tmp3;
    }
  },
  {
    key: "setDynamicFeatureFlag",
    value: function setDynamicFeatureFlag() {

    }
  },
  {
    key: "setViewStyle",
    value: function setViewStyle(arg0, arg1) {
      const error = new Error("[Reanimated] setViewStyle is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "setCSSEventHandler",
    value: function setCSSEventHandler(arg0) {
      const error = new Error("[Reanimated] `setCSSEventHandler` is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "markNodeAsRemovable",
    value: function markNodeAsRemovable(arg0) {
      const error = new Error("[Reanimated] markNodeAsRemovable is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "unmarkNodeAsRemovable",
    value: function unmarkNodeAsRemovable(arg0) {
      const error = new Error("[Reanimated] unmarkNodeAsRemovable is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "registerCSSKeyframes",
    value: function registerCSSKeyframes(arg0, arg1, arg2) {
      const error = new Error("[Reanimated] `registerCSSKeyframes` is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "unregisterCSSKeyframes",
    value: function unregisterCSSKeyframes(arg0, arg1) {
      const error = new Error("[Reanimated] `unregisterCSSKeyframes` is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "applyCSSAnimations",
    value: function applyCSSAnimations(arg0, arg1, arg2) {
      const error = new Error("[Reanimated] `applyCSSAnimations` is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "unregisterCSSAnimations",
    value: function unregisterCSSAnimations(arg0) {
      const error = new Error("[Reanimated] `unregisterCSSAnimations` is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "runCSSTransition",
    value: function runCSSTransition(arg0, arg1, arg2) {
      const error = new Error("[Reanimated] `runCSSTransition` is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "unregisterCSSTransition",
    value: function unregisterCSSTransition(arg0) {
      const error = new Error("[Reanimated] `unregisterCSSTransition` is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "getSettledUpdates",
    value: function getSettledUpdates() {
      const error = new Error("[Reanimated] `getSettledUpdates` is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "registerPseudoStyles",
    value: function registerPseudoStyles() {
      const error = new Error("[Reanimated] `registerPseudoStyles` is not available in JSReanimated.");
      throw error;
    }
  },
  {
    key: "unregisterPseudoStyles",
    value: function unregisterPseudoStyles() {
      const error = new Error("[Reanimated] `unregisterPseudoStyles` is not available in JSReanimated.");
      throw error;
    }
  }
];
let closure_4 = _createClassDefault(JSReanimated, items);
const Platform = { WEB_IOS: "web iOS", WEB_ANDROID: "web Android", WEB: "web", UNKNOWN: "unknown" };

export function createJSReanimatedModule() {
  return new closure_4();
}
export { Platform };