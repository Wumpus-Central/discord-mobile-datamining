// === Module 1650: ? ===

// Module 1650
import _slicedToArray from "module_32" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _classPrivateFieldKey from "_classPrivateFieldKey" /* 91 */;

const JSReanimated = fn;
let module_1639 = fn(1639);
if (!module_1639.isJest()) {
  const _globalThis = globalThis;
  if (requestAnimationFrame) {
    const _globalThis2 = globalThis;
    let mockedRequestAnimationFrame = requestAnimationFrame;
  }
  let closure_5 = _classPrivateFieldKey("workletsModule");
  class JSReanimated {
    constructor() {
      self = this;
      tmp = closure_3(this, JSReanimated);
      obj = { writable: true, value: closure_0(closure_1[6]).WorkletsModule };
      definePropertyResult = Object.defineProperty(this, hasOwnProperty, obj);
      this.nextSensorId = 0;
      map = new Map();
      this.sensors = map;
      this.platform = undefined;
      this.getSensorCallback = (arg0, arg1, arg2) => {
        closure_0 = arg0;
        closure_1 = arg2;
        if (self(dependencyMap[7]).SensorType.ACCELEROMETER !== arg1) {
          if (tmp(tmp2[7]).SensorType.GRAVITY !== arg1) {
            if (tmp(tmp2[7]).SensorType.GYROSCOPE !== arg1) {
              if (tmp(tmp2[7]).SensorType.MAGNETIC_FIELD !== arg1) {
                if (tmp(tmp2[7]).SensorType.ROTATION === arg1) {
                  return () => {
                    [tmp2, tmp3, tmp4, tmp5] = _slicedToArray(closure_0.quaternion, 4);
                    if (self.platform === module_1639.WEB_ANDROID) {
                      const items = [tmp5, -tmp4];
                      [tmp7, tmp6] = items;
                    }
                    const tmp = _slicedToArray(closure_0.quaternion, 4);
                    const tmp8 = -Math.atan2(2 * (tmp4 * tmp5 + tmp2 * tmp3), tmp2 * tmp2 - tmp3 * tmp3 - tmp4 * tmp4 + tmp5 * tmp5);
                    const sinResult = Math.sin(-2 * (tmp3 * tmp5 - tmp2 * tmp4));
                    closure_1({ qw: tmp2, qx: tmp3, qy: tmp4, qz: tmp5, yaw: tmp8, pitch: Math.sin(-2 * (tmp3 * tmp5 - tmp2 * tmp4)), roll: -Math.atan2(2 * (tmp3 * tmp4 + tmp2 * tmp5), tmp2 * tmp2 + tmp3 * tmp3 - tmp4 * tmp4 - tmp5 * tmp5), interfaceOrientation: 0 });
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
          if (self.platform === module_1639.WEB_ANDROID) {
            const items = [-x, -y, -z];
            [tmp3, tmp2, tmp] = items;
          }
          closure_1({ x, y, z, interfaceOrientation: 0 });
        };
      };
      return;
    }
  }
  const entry = {
    key: "scheduleOnUI",
    value: function scheduleOnUI(arg0) {
        mockedRequestAnimationFrame(arg0);
      }
  };
  let items = [entry, , , , , , , , , , , , , , , , , , , , ];
  const entry1 = {
    key: "createWorkletRuntime",
    value: function createWorkletRuntime(arg0, arg1) {
        const reanimatedError = new JSReanimated(1647).ReanimatedError("createWorkletRuntime is not available in JSReanimated.");
        throw reanimatedError;
      }
  };
  items[1] = entry1;
  const entry2 = {
    key: "scheduleOnRuntime",
    value: function scheduleOnRuntime() {
        const reanimatedError = new JSReanimated(1647).ReanimatedError("scheduleOnRuntime is not available in JSReanimated.");
        throw reanimatedError;
      }
  };
  items[2] = entry2;
  const entry3 = {
    key: "registerEventHandler",
    value: function registerEventHandler(arg0, arg1, arg2) {
        const reanimatedError = new JSReanimated(1647).ReanimatedError("registerEventHandler is not available in JSReanimated.");
        throw reanimatedError;
      }
  };
  items[3] = entry3;
  const entry4 = {
    key: "unregisterEventHandler",
    value: function unregisterEventHandler(arg0) {
        const reanimatedError = new JSReanimated(1647).ReanimatedError("unregisterEventHandler is not available in JSReanimated.");
        throw reanimatedError;
      }
  };
  items[4] = entry4;
  const entry5 = {
    key: "enableLayoutAnimations",
    value: function enableLayoutAnimations() {
        if (obj.isWeb()) {
          const logger3 = tmp(1640).logger;
          logger3.warn("Layout Animations are not supported on web yet.");
        } else {
          let tmpResult = tmp(1639);
          if (tmpResult.isJest()) {
            const logger2 = tmp(1640).logger;
            logger2.warn("Layout Animations are no-ops when using Jest.");
          } else {
            tmpResult = tmp(1639);
            const logger = tmp(1640).logger;
            const warn = logger.warn;
            if (isChromeDebuggerResult) {
              warn("Layout Animations are no-ops when using Chrome Debugger.");
            } else {
              warn("Layout Animations are not supported on this configuration.");
            }
            isChromeDebuggerResult = tmpResult.isChromeDebugger();
          }
        }
      }
  };
  items[5] = entry5;
  const entry6 = {
    key: "configureLayoutAnimationBatch",
    value: function configureLayoutAnimationBatch() {

      }
  };
  items[6] = entry6;
  const entry7 = {
    key: "setShouldAnimateExitingForTag",
    value: function setShouldAnimateExitingForTag() {

      }
  };
  items[7] = entry7;
  const entry8 = {
    key: "registerSensor",
    value: function registerSensor(arg0, arg1, arg2, arg3) {
        if (obj.isWindowAvailable()) {
          const self = this;
          if (undefined === this.platform) {
            self.detectPlatform();
          }
          const _window = window;
          if (self.getSensorName(arg0) in window) {
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
            const logger = tmp(1640).logger;
            let str = "";
            let str2 = "";
            if (tmpResult.isWeb()) {
              const _location = location;
              str2 = str;
              if ("https:" !== location.protocol) {
                str2 = " Make sure you use secure origin with `npx expo start --web --https`.";
              }
            }
            if (self.platform === module_1639.WEB_IOS) {
              str = " For iOS web, you will also have to also grant permission in the browser: https://dev.to/li/how-to-requestpermission-for-devicemotion-and-deviceorientation-events-in-ios-13-46g2.";
            }
            const _HermesInternal = HermesInternal;
            logger.warn("Sensor is not available." + str2 + str);
            return -1;
          }
        } else {
          return -1;
        }
        obj = JSReanimated(1639);
      }
  };
  items[8] = entry8;
  const entry9 = {
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
  };
  items[9] = entry9;
  const entry10 = {
    key: "subscribeForKeyboardEvents",
    value: function subscribeForKeyboardEvents(arg0) {
        if (obj.isWeb()) {
          const logger3 = tmp(1640).logger;
          logger3.warn("useAnimatedKeyboard is not available on web yet.");
        } else {
          let tmpResult = tmp(1639);
          if (tmpResult.isJest()) {
            const logger2 = tmp(1640).logger;
            logger2.warn("useAnimatedKeyboard is not available when using Jest.");
          } else {
            tmpResult = tmp(1639);
            const logger = tmp(1640).logger;
            const warn = logger.warn;
            if (isChromeDebuggerResult) {
              warn("useAnimatedKeyboard is not available when using Chrome Debugger.");
            } else {
              warn("useAnimatedKeyboard is not available on this configuration.");
            }
            isChromeDebuggerResult = tmpResult.isChromeDebugger();
          }
        }
        return -1;
      }
  };
  items[10] = entry10;
  const entry11 = {
    key: "unsubscribeFromKeyboardEvents",
    value: function unsubscribeFromKeyboardEvents(arg0) {

      }
  };
  items[11] = entry11;
  const entry12 = {
    key: "initializeSensor",
    value: function initializeSensor(arg0, arg1) {
        if (arg1 <= 0) {
          let obj = { referenceFrame: "device" };
        } else {
          obj = { frequency: 1000 / arg1 };
        }
        if (JSReanimated(1661).SensorType.ACCELEROMETER === arg0) {
          const _window5 = window;
          const accelerometer = new window.Accelerometer(obj);
          return accelerometer;
        } else if (tmp(1661).SensorType.GYROSCOPE === arg0) {
          const _window4 = window;
          const gyroscope = new window.Gyroscope(obj);
          return gyroscope;
        } else if (tmp(1661).SensorType.GRAVITY === arg0) {
          const _window3 = window;
          const gravitySensor = new window.GravitySensor(obj);
          return gravitySensor;
        } else if (tmp(1661).SensorType.MAGNETIC_FIELD === arg0) {
          const _window2 = window;
          const magnetometer = new window.Magnetometer(obj);
          return magnetometer;
        } else if (tmp(1661).SensorType.ROTATION === arg0) {
          const _window = window;
          const absoluteOrientationSensor = new window.AbsoluteOrientationSensor(obj);
          return absoluteOrientationSensor;
        }
      }
  };
  items[12] = entry12;
  const entry13 = {
    key: "getSensorName",
    value: function getSensorName(arg0) {
        if (JSReanimated(1661).SensorType.ACCELEROMETER === arg0) {
          return "Accelerometer";
        } else if (tmp(1661).SensorType.GRAVITY === arg0) {
          return "GravitySensor";
        } else if (tmp(1661).SensorType.GYROSCOPE === arg0) {
          return "Gyroscope";
        } else if (tmp(1661).SensorType.MAGNETIC_FIELD === arg0) {
          return "Magnetometer";
        } else if (tmp(1661).SensorType.ROTATION === arg0) {
          return "AbsoluteOrientationSensor";
        }
      }
  };
  items[13] = entry13;
  const entry14 = {
    key: "getSettledUpdates",
    value: function getSettledUpdates() {
        const reanimatedError = new JSReanimated(1647).ReanimatedError("`getSettledUpdates` is not available in JSReanimated.");
        throw reanimatedError;
      }
  };
  items[14] = entry14;
  const entry15 = {
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
          self.platform = module_1639.UNKNOWN;
        } else {
          if (obj.test(opera)) {
            self.platform = module_1639.WEB_IOS;
          } else {
            if (obj2.test(opera)) {
              self.platform = tmp.WEB_ANDROID;
            } else {
              self.platform = tmp.WEB;
            }
            obj2 = /android/i;
          }
          obj = /iPad|iPhone|iPod/;
        }
      }
  };
  items[15] = entry15;
  const entry16 = {
    key: "getViewProp",
    value: function getViewProp(arg0, arg1, arg2, arg3) {
        const reanimatedError = new JSReanimated(1647).ReanimatedError("getViewProp is not available in JSReanimated.");
        throw reanimatedError;
      }
  };
  items[16] = entry16;
  const entry17 = {
    key: "configureProps",
    value: function configureProps() {
        const reanimatedError = new JSReanimated(1647).ReanimatedError("configureProps is not available in JSReanimated.");
        throw reanimatedError;
      }
  };
  items[17] = entry17;
  const entry18 = {
    key: "executeOnUIRuntimeSync",
    value: function executeOnUIRuntimeSync(arg0) {
        const reanimatedError = new JSReanimated(1647).ReanimatedError("`executeOnUIRuntimeSync` is not available in JSReanimated.");
        throw reanimatedError;
      }
  };
  items[18] = entry18;
  const entry19 = {
    key: "markNodeAsRemovable",
    value: function markNodeAsRemovable(arg0) {
        const reanimatedError = new JSReanimated(1647).ReanimatedError("markNodeAsRemovable is not available in JSReanimated.");
        throw reanimatedError;
      }
  };
  items[19] = entry19;
  const entry20 = {
    key: "unmarkNodeAsRemovable",
    value: function unmarkNodeAsRemovable(arg0) {
        const reanimatedError = new JSReanimated(1647).ReanimatedError("unmarkNodeAsRemovable is not available in JSReanimated.");
        throw reanimatedError;
      }
  };
  items[20] = entry20;
  let closure_6 = _createClass(JSReanimated, items);
  module_1639 = { WEB_IOS: "web iOS", WEB_ANDROID: "web Android", WEB: "web", UNKNOWN: "unknown" };
  exports.createJSReanimatedModule = function createJSReanimatedModule() {
    return new closure_6();
  };
  exports.Platform = module_1639;
}
mockedRequestAnimationFrame = fn(1651).mockedRequestAnimationFrame;