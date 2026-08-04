import noop from "noop";

let c3;
let c4;
let obj1;
({ useEffect: obj1, useMemo: c3, useRef: c4 } = noop);
function eulerToQuaternion(arg0, arg1, arg2) {
  const cosResult = Math.cos(arg0 / 2);
  const sinResult = Math.sin(arg0 / 2);
  const cosResult1 = Math.cos(arg1 / 2);
  const sinResult1 = Math.sin(arg1 / 2);
  const cosResult2 = Math.cos(arg2 / 2);
  const sinResult2 = Math.sin(arg2 / 2);
  const items = [sinResult * cosResult1 * cosResult2 - cosResult * sinResult1 * sinResult2, cosResult * sinResult1 * cosResult2 + sinResult * cosResult1 * sinResult2, cosResult * cosResult1 * sinResult2 + sinResult * sinResult1 * cosResult2, cosResult * cosResult1 * cosResult2 - sinResult * sinResult1 * sinResult2];
  return items;
}
eulerToQuaternion.__closure = {};
eulerToQuaternion.__workletHash = 14525486759705;
eulerToQuaternion.__initData = { code: "function eulerToQuaternion_Pnpm_useAnimatedSensorTs1(pitch,roll,yaw){const c1=Math.cos(pitch/2);const s1=Math.sin(pitch/2);const c2=Math.cos(roll/2);const s2=Math.sin(roll/2);const c3=Math.cos(yaw/2);const s3=Math.sin(yaw/2);return[s1*c2*c3-c1*s2*s3,c1*s2*c3+s1*c2*s3,c1*c2*s3+s1*s2*c3,c1*c2*c3-s1*s2*s3];}" };
function adjustRotationToInterfaceOrientation(pitch) {
  let interfaceOrientation;
  let pitch2;
  let roll;
  let roll2;
  let yaw;
  let yaw2;
  ({ interfaceOrientation, pitch, roll, yaw } = pitch);
  if (interfaceOrientation === require(1631) /* isWorkletFunction */.InterfaceOrientation.ROTATION_90) {
    pitch.pitch = roll;
    pitch.roll = -pitch;
    const _Math2 = Math;
    pitch.yaw = yaw - Math.PI / 2;
  } else if (interfaceOrientation === tmp(1631).InterfaceOrientation.ROTATION_270) {
    pitch.pitch = -roll;
    pitch.roll = pitch;
    const _Math = Math;
    pitch.yaw = yaw + Math.PI / 2;
  } else if (interfaceOrientation === tmp(1631).InterfaceOrientation.ROTATION_180) {
    pitch.pitch = pitch.pitch * -1;
    pitch.roll = pitch.roll * -1;
    pitch.yaw = pitch.yaw * -1;
  }
  ({ pitch: pitch2, roll: roll2, yaw: yaw2 } = pitch);
  if (typeof eulerToQuaternion !== "find") {
    HermesBuiltin.throwTypeError();
  }
  const cosResult = Math.cos(pitch2 / 2);
  const sinResult = Math.sin(pitch2 / 2);
  const cosResult1 = Math.cos(roll2 / 2);
  const sinResult1 = Math.sin(roll2 / 2);
  const cosResult2 = Math.cos(yaw2 / 2);
  const sinResult2 = Math.sin(yaw2 / 2);
  const items = [sinResult * cosResult1 * cosResult2 - cosResult * sinResult1 * sinResult2, cosResult * sinResult1 * cosResult2 + sinResult * cosResult1 * sinResult2, cosResult * cosResult1 * sinResult2 + sinResult * sinResult1 * cosResult2, cosResult * cosResult1 * cosResult2 - sinResult * sinResult1 * sinResult2];
  [pitch.qx, pitch.qy, pitch.qz, pitch.qw] = items;
  return pitch;
}
let obj = { InterfaceOrientation: require("isWorkletFunction").InterfaceOrientation, eulerToQuaternion };
adjustRotationToInterfaceOrientation.__closure = obj;
adjustRotationToInterfaceOrientation.__workletHash = 16635654688360;
adjustRotationToInterfaceOrientation.__initData = { code: "function adjustRotationToInterfaceOrientation_Pnpm_useAnimatedSensorTs2(data){const{InterfaceOrientation,eulerToQuaternion}=this.__closure;const{interfaceOrientation:interfaceOrientation,pitch:pitch,roll:roll,yaw:yaw}=data;if(interfaceOrientation===InterfaceOrientation.ROTATION_90){data.pitch=roll;data.roll=-pitch;data.yaw=yaw-Math.PI/2;}else if(interfaceOrientation===InterfaceOrientation.ROTATION_270){data.pitch=-roll;data.roll=pitch;data.yaw=yaw+Math.PI/2;}else if(interfaceOrientation===InterfaceOrientation.ROTATION_180){data.pitch*=-1;data.roll*=-1;data.yaw*=-1;}const q=eulerToQuaternion(data.pitch,data.roll,data.yaw);data.qx=q[0];data.qy=q[1];data.qz=q[2];data.qw=q[3];return data;}" };
function adjustVectorToInterfaceOrientation(arg0) {
  let interfaceOrientation;
  let x;
  let y;
  ({ interfaceOrientation, x, y } = arg0);
  if (interfaceOrientation === require(1631) /* isWorkletFunction */.InterfaceOrientation.ROTATION_90) {
    arg0.x = -y;
    arg0.y = x;
  } else if (interfaceOrientation === tmp(1631).InterfaceOrientation.ROTATION_270) {
    arg0.x = y;
    arg0.y = -x;
  } else if (interfaceOrientation === tmp(1631).InterfaceOrientation.ROTATION_180) {
    arg0.x = arg0.x * -1;
    arg0.y = arg0.y * -1;
  }
  return arg0;
}
obj = { InterfaceOrientation: require("isWorkletFunction").InterfaceOrientation };
adjustVectorToInterfaceOrientation.__closure = obj;
adjustVectorToInterfaceOrientation.__workletHash = 5352466445526;
adjustVectorToInterfaceOrientation.__initData = { code: "function adjustVectorToInterfaceOrientation_Pnpm_useAnimatedSensorTs3(data){const{InterfaceOrientation}=this.__closure;const{interfaceOrientation:interfaceOrientation,x:x,y:y}=data;if(interfaceOrientation===InterfaceOrientation.ROTATION_90){data.x=-y;data.y=x;}else if(interfaceOrientation===InterfaceOrientation.ROTATION_270){data.x=y;data.y=-x;}else if(interfaceOrientation===InterfaceOrientation.ROTATION_180){data.x*=-1;data.y*=-1;}return data;}" };
let closure_8 = { code: "function pnpm_useAnimatedSensorTs4(data){const{adjustToInterfaceOrientation,sensorType,SensorType,adjustRotationToInterfaceOrientation,adjustVectorToInterfaceOrientation,sensorData,callMicrotasks}=this.__closure;if(adjustToInterfaceOrientation){if(sensorType===SensorType.ROTATION){data=adjustRotationToInterfaceOrientation(data);}else{data=adjustVectorToInterfaceOrientation(data);}}sensorData.value=data;callMicrotasks();}" };

export const useAnimatedSensor = function useAnimatedSensor(arg0, adjustToInterfaceOrientation) {
  const _require = arg0;
  const tmp2 = callback3(adjustToInterfaceOrientation);
  const dependencyMap = tmp2;
  let current = tmp2.current;
  let prop;
  if (current != null) {
    prop = current.adjustToInterfaceOrientation;
  }
  let prop1;
  if (adjustToInterfaceOrientation != null) {
    prop1 = adjustToInterfaceOrientation.adjustToInterfaceOrientation;
  }
  let tmp5 = prop !== prop1;
  if (!tmp5) {
    const current2 = tmp2.current;
    let interval;
    if (current2 != null) {
      interval = current2.interval;
    }
    let interval1;
    if (adjustToInterfaceOrientation != null) {
      interval1 = adjustToInterfaceOrientation.interval;
    }
    tmp5 = interval !== interval1;
  }
  if (!tmp5) {
    const current3 = tmp2.current;
    let iosReferenceFrame;
    if (current3 != null) {
      iosReferenceFrame = current3.iosReferenceFrame;
    }
    let iosReferenceFrame1;
    if (adjustToInterfaceOrientation != null) {
      iosReferenceFrame1 = adjustToInterfaceOrientation.iosReferenceFrame;
    }
    tmp5 = iosReferenceFrame !== iosReferenceFrame1;
  }
  if (tmp5) {
    let obj = {};
    let merged = Object.assign(adjustToInterfaceOrientation);
    tmp2.current = obj;
  }
  const items = [tmp2.current];
  const tmp13 = callback2(() => {
    const merged = Object.assign(tmp2.current);
    return { interval: "auto", adjustToInterfaceOrientation: true, iosReferenceFrame: callback(tmp2[1]).IOSReferenceFrame.Auto };
  }, items);
  const callback = tmp13;
  obj = { sensor: null, unregister: null, isAvailable: false, config: null };
  obj[0] = _require(1650).initializeSensor(arg0, tmp13);
  obj[1] = function unregister() {

  };
  obj[3] = tmp13;
  const tmpResult = callback3(obj);
  callback2 = tmpResult;
  const items1 = [arg0, tmp13];
  callback(() => {
    let obj = { sensor: null, unregister: null, isAvailable: false, config: null };
    obj[0] = callback(tmp2[2]).initializeSensor(sensor, closure_2);
    obj[1] = function unregister() {

    };
    obj[3] = closure_2;
    tmpResult.current = obj;
    sensor = tmpResult.current.sensor;
    const adjustToInterfaceOrientation = tmpResult.current.config.adjustToInterfaceOrientation;
    const obj2 = callback(tmp2[2]);
    const fn = function n(arg0) {
      let interfaceOrientation;
      let x;
      let y;
      if (adjustToInterfaceOrientation) {
        if (sensor === sensor(adjustToInterfaceOrientation[1]).SensorType.ROTATION) {
          outer2_6(arg0);
        } else {
          if (typeof outer2_7 !== "find") {
            HermesBuiltin.throwTypeError();
          }
          ({ interfaceOrientation, x, y } = arg0);
          if (interfaceOrientation === sensor(adjustToInterfaceOrientation[1]).InterfaceOrientation.ROTATION_90) {
            arg0.x = -y;
            arg0.y = x;
          } else if (interfaceOrientation === sensor(adjustToInterfaceOrientation[1]).InterfaceOrientation.ROTATION_270) {
            arg0.x = y;
            arg0.y = -x;
          } else if (interfaceOrientation === sensor(adjustToInterfaceOrientation[1]).InterfaceOrientation.ROTATION_180) {
            arg0.x = arg0.x * -1;
            arg0.y = arg0.y * -1;
          }
        }
      }
      sensor.value = arg0;
      sensor(adjustToInterfaceOrientation[3]).callMicrotasks();
    };
    obj = { adjustToInterfaceOrientation, sensorType: sensor, SensorType: callback(tmp2[1]).SensorType, adjustRotationToInterfaceOrientation: outer1_6, adjustVectorToInterfaceOrientation: outer1_7, sensorData: sensor, callMicrotasks: callback(tmp2[3]).callMicrotasks };
    fn.__closure = obj;
    fn.__workletHash = 6807952122364;
    fn.__initData = outer1_8;
    const registerSensorResult = callback(tmp2[2]).registerSensor(sensor, closure_2, fn);
    closure_2 = registerSensorResult;
    if (-1 !== registerSensorResult) {
      tmp.current.unregister = () => sensor(adjustToInterfaceOrientation[2]).unregisterSensor(closure_2);
      tmp.current.isAvailable = true;
    } else {
      tmp.current.unregister = () => {

      };
      tmp.current.isAvailable = false;
    }
    return () => {
      const current = ref.current;
      current.unregister();
    };
  }, items1);
  return tmpResult.current;
};