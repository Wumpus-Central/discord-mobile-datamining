// === Module 1666: ? ===

// Module 1666
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "_classCallCheck" /* 41 */;
import importDefaultResult from "_createClass" /* 42 */;
import isJest from "isJest" /* 1655 */;
import { mockedRequestAnimationFrame } from "mockedRequestAnimationFrame" /* 1667 */;

const JSReanimated = arg1;
if (!isJest.isJest()) {
  const _globalThis = globalThis;
  if (requestAnimationFrame) {
    const _globalThis2 = globalThis;
    let mockedRequestAnimationFrame = requestAnimationFrame;
  }
  let closure_5 = importDefaultResult1("workletsModule");
  class JSReanimated {
    constructor() {
      self = this;
      tmp = closure_3(this, self);
      obj = { writable: true, value: require("WorkletsModule").WorkletsModule };
      definePropertyResult = Object.defineProperty(this, closure_5, obj);
      this.nextSensorId = 0;
      map = new Map();
      this.sensors = map;
      this.platform = undefined;
      this.getSensorCallback = (arg0, arg1, arg2) => {
        closure_0 = arg0;
        closure_1 = arg2;
        if (self(closure_1_1[7]).SensorType.ACCELEROMETER !== arg1) {
          if (tmp(tmp2[7]).SensorType.GRAVITY !== arg1) {
            if (tmp(tmp2[7]).SensorType.GYROSCOPE !== arg1) {
              if (tmp(tmp2[7]).SensorType.MAGNETIC_FIELD !== arg1) {
                if (tmp(tmp2[7]).SensorType.ROTATION === arg1) {
                  return () => {
                    [tmp2, tmp3, tmp4, tmp5] = closure_2_2(closure_0.quaternion, 4);
                    if (closure_0.platform === closure_2_7.WEB_ANDROID) {
                      const items = [tmp5, -tmp4];
                      [tmp7, tmp6] = items;
                    }
                    const tmp = closure_2_2(closure_0.quaternion, 4);
                    const tmp8 = -Math.atan2(2 * (tmp4 * tmp5 + tmp2 * tmp3), tmp2 * tmp2 - tmp3 * tmp3 - tmp4 * tmp4 + tmp5 * tmp5);
                    const sinResult = Math.sin(-2 * (tmp3 * tmp5 - tmp2 * tmp4));
                    callback({ qw: tmp2, qx: tmp3, qy: tmp4, qz: tmp5, yaw: tmp8, pitch: Math.sin(-2 * (tmp3 * tmp5 - tmp2 * tmp4)), roll: -Math.atan2(2 * (tmp3 * tmp4 + tmp2 * tmp5), tmp2 * tmp2 + tmp3 * tmp3 - tmp4 * tmp4 - tmp5 * tmp5), interfaceOrientation: 0 });
                  };
                }
              }
            }
            return () => {
              callback({ x: closure_0.x, y: closure_0.y, z: closure_0.z, interfaceOrientation: 0 });
            };
          }
        }
        return () => {
          ({ x, y, z } = closure_0);
          if (closure_0.platform === closure_2_7.WEB_ANDROID) {
            const items = [-x, -y, -z];
            [tmp3, tmp2, tmp] = items;
          }
          callback({ x, y, z, interfaceOrientation: 0 });
        };
      };
      return;
    }
  }
  isJest = { key: "scheduleOnUI", value: null };
  isJest[1] = function scheduleOnUI(arg0) {
    mockedRequestAnimationFrame(arg0);
  };
  let items = [isJest, , , , , , , , , , , , , , , , , , , , ];
  isJest = { key: "createWorkletRuntime", value: null };
  isJest[1] = function createWorkletRuntime(arg0, arg1) {
    const reanimatedError = new JSReanimated(1663).ReanimatedError("createWorkletRuntime is not available in JSReanimated.");
    throw reanimatedError;
  };
  items[1] = isJest;
  const obj1 = { key: "scheduleOnRuntime", value: null };
  obj1[1] = function scheduleOnRuntime() {
    const reanimatedError = new JSReanimated(1663).ReanimatedError("scheduleOnRuntime is not available in JSReanimated.");
    throw reanimatedError;
  };
  items[2] = obj1;
  let obj2 = { key: "registerEventHandler", value: null };
  obj2[1] = function registerEventHandler(arg0, arg1, arg2) {
    const reanimatedError = new JSReanimated(1663).ReanimatedError("registerEventHandler is not available in JSReanimated.");
    throw reanimatedError;
  };
  items[3] = obj2;
  const obj3 = { key: "unregisterEventHandler", value: null };
  obj3[1] = function unregisterEventHandler(arg0) {
    const reanimatedError = new JSReanimated(1663).ReanimatedError("unregisterEventHandler is not available in JSReanimated.");
    throw reanimatedError;
  };
  items[4] = obj3;
  const obj4 = { key: "enableLayoutAnimations", value: null };
  obj4[1] = function enableLayoutAnimations() {
    if (obj.isWeb()) {
      const logger3 = tmp(1656).logger;
      logger3.warn("Layout Animations are not supported on web yet.");
    } else {
      let tmpResult = tmp(1655);
      if (tmpResult.isJest()) {
        const logger2 = tmp(1656).logger;
        logger2.warn("Layout Animations are no-ops when using Jest.");
      } else {
        tmpResult = tmp(1655);
        const logger = tmp(1656).logger;
        const warn = logger.warn;
        if (isChromeDebuggerResult) {
          warn("Layout Animations are no-ops when using Chrome Debugger.");
        } else {
          warn("Layout Animations are not supported on this configuration.");
        }
        isChromeDebuggerResult = tmpResult.isChromeDebugger();
      }
    }
  };
  items[5] = obj4;
  const obj5 = { key: "configureLayoutAnimationBatch", value: null };
  obj5[1] = function configureLayoutAnimationBatch() {

  };
  items[6] = obj5;
  const obj6 = { key: "setShouldAnimateExitingForTag", value: null };
  obj6[1] = function setShouldAnimateExitingForTag() {

  };
  items[7] = obj6;
  const obj7 = { key: "registerSensor", value: null };
  obj7[1] = function registerSensor(arg0, arg1, arg2, arg3) {
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
        const logger = tmp(1656).logger;
        let str = "";
        let str2 = "";
        if (tmpResult.isWeb()) {
          const _location = location;
          str2 = str;
          if ("https:" !== location.protocol) {
            str2 = " Make sure you use secure origin with `npx expo start --web --https`.";
          }
        }
        if (self.platform === obj20.WEB_IOS) {
          str = " For iOS web, you will also have to also grant permission in the browser: https://dev.to/li/how-to-requestpermission-for-devicemotion-and-deviceorientation-events-in-ios-13-46g2.";
        }
        const _HermesInternal = HermesInternal;
        logger.warn("Sensor is not available." + str2 + str);
        return -1;
      }
    } else {
      return -1;
    }
    obj = JSReanimated(1655);
  };
  items[8] = obj7;
  const obj8 = { key: "unregisterSensor", value: null };
  obj8[1] = function unregisterSensor(arg0) {
    const sensors = this.sensors;
    const value = sensors.get(arg0);
    if (undefined !== value) {
      value.stop();
      const sensors2 = this.sensors;
      sensors2.delete(arg0);
    }
  };
  items[9] = obj8;
  const obj9 = { key: "subscribeForKeyboardEvents", value: null };
  obj9[1] = function subscribeForKeyboardEvents(arg0) {
    if (obj.isWeb()) {
      const logger3 = tmp(1656).logger;
      logger3.warn("useAnimatedKeyboard is not available on web yet.");
    } else {
      let tmpResult = tmp(1655);
      if (tmpResult.isJest()) {
        const logger2 = tmp(1656).logger;
        logger2.warn("useAnimatedKeyboard is not available when using Jest.");
      } else {
        tmpResult = tmp(1655);
        const logger = tmp(1656).logger;
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
  };
  items[10] = obj9;
  const obj10 = { key: "unsubscribeFromKeyboardEvents", value: null };
  obj10[1] = function unsubscribeFromKeyboardEvents(arg0) {

  };
  items[11] = obj10;
  const obj11 = { key: "initializeSensor", value: null };
  obj11[1] = function initializeSensor(arg0, arg1) {
    if (arg1 <= 0) {
      let obj = { referenceFrame: "device" };
    } else {
      obj = { frequency: null };
      obj[0] = 1000 / arg1;
    }
    if (JSReanimated(1677).SensorType.ACCELEROMETER === arg0) {
      const _window5 = window;
      const accelerometer = new window.Accelerometer(obj);
      return accelerometer;
    } else if (tmp(1677).SensorType.GYROSCOPE === arg0) {
      const _window4 = window;
      const gyroscope = new window.Gyroscope(obj);
      return gyroscope;
    } else if (tmp(1677).SensorType.GRAVITY === arg0) {
      const _window3 = window;
      const gravitySensor = new window.GravitySensor(obj);
      return gravitySensor;
    } else if (tmp(1677).SensorType.MAGNETIC_FIELD === arg0) {
      const _window2 = window;
      const magnetometer = new window.Magnetometer(obj);
      return magnetometer;
    } else if (tmp(1677).SensorType.ROTATION === arg0) {
      const _window = window;
      const absoluteOrientationSensor = new window.AbsoluteOrientationSensor(obj);
      return absoluteOrientationSensor;
    }
  };
  items[12] = obj11;
  const obj12 = { key: "getSensorName", value: null };
  obj12[1] = function getSensorName(arg0) {
    if (JSReanimated(1677).SensorType.ACCELEROMETER === arg0) {
      return "Accelerometer";
    } else if (tmp(1677).SensorType.GRAVITY === arg0) {
      return "GravitySensor";
    } else if (tmp(1677).SensorType.GYROSCOPE === arg0) {
      return "Gyroscope";
    } else if (tmp(1677).SensorType.MAGNETIC_FIELD === arg0) {
      return "Magnetometer";
    } else if (tmp(1677).SensorType.ROTATION === arg0) {
      return "AbsoluteOrientationSensor";
    }
  };
  items[13] = obj12;
  const obj13 = { key: "getSettledUpdates", value: null };
  obj13[1] = function getSettledUpdates() {
    const reanimatedError = new JSReanimated(1663).ReanimatedError("`getSettledUpdates` is not available in JSReanimated.");
    throw reanimatedError;
  };
  items[14] = obj13;
  const obj14 = { key: "detectPlatform", value: null };
  obj14[1] = function detectPlatform() {
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
      self.platform = obj20.UNKNOWN;
    } else {
      if (obj.test(opera)) {
        self.platform = obj20.WEB_IOS;
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
  };
  items[15] = obj14;
  const obj15 = { key: "getViewProp", value: null };
  obj15[1] = function getViewProp(arg0, arg1, arg2, arg3) {
    const reanimatedError = new JSReanimated(1663).ReanimatedError("getViewProp is not available in JSReanimated.");
    throw reanimatedError;
  };
  items[16] = obj15;
  const obj16 = { key: "configureProps", value: null };
  obj16[1] = function configureProps() {
    const reanimatedError = new JSReanimated(1663).ReanimatedError("configureProps is not available in JSReanimated.");
    throw reanimatedError;
  };
  items[17] = obj16;
  const obj17 = { key: "executeOnUIRuntimeSync", value: null };
  obj17[1] = function executeOnUIRuntimeSync(arg0) {
    const reanimatedError = new JSReanimated(1663).ReanimatedError("`executeOnUIRuntimeSync` is not available in JSReanimated.");
    throw reanimatedError;
  };
  items[18] = obj17;
  const obj18 = { key: "markNodeAsRemovable", value: null };
  obj18[1] = function markNodeAsRemovable(arg0) {
    const reanimatedError = new JSReanimated(1663).ReanimatedError("markNodeAsRemovable is not available in JSReanimated.");
    throw reanimatedError;
  };
  items[19] = obj18;
  const obj19 = { key: "unmarkNodeAsRemovable", value: null };
  obj19[1] = function unmarkNodeAsRemovable(arg0) {
    const reanimatedError = new JSReanimated(1663).ReanimatedError("unmarkNodeAsRemovable is not available in JSReanimated.");
    throw reanimatedError;
  };
  items[20] = obj19;
  let closure_6 = importDefaultResult(JSReanimated, items);
  const obj20 = { WEB_IOS: "web iOS", WEB_ANDROID: "web Android", WEB: "web", UNKNOWN: "unknown" };
  exports.createJSReanimatedModule = function createJSReanimatedModule() {
    return new closure_6();
  };
  exports.Platform = obj20;
}