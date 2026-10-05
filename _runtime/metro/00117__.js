// _runtime/metro/00117__.js
import react from "../00019_react.js";
import get_BatchedBridge from "../00272_get_BatchedBridge.js";
import _mod287 from "00287__.js";
import setUpDefaltReactNativeEnvironment from "../00118_setUpDefaltReactNativeEnvironment.js";

let _null,
  _null2,
  _null3,
  _null5,
  _require,
  closure_139,
  closure_304,
  context,
  context2,
  dependencyMap,
  isArray,
  items11,
  map1,
  set,
  set2,
  set3,
  set4,
  set5,
  str5;

let tmp;
let tmp12;
function addEventPoolingTo(SyntheticEvent) {
  SyntheticEvent.getPooled = createOrGetPooledEvent;
  SyntheticEvent.eventPool = [];
  SyntheticEvent.release = releasePooledEvent;
}
function describeBuiltInComponentFrame(type) {
  if (undefined !== str3) {
    return "\n" + str3 + type + str5;
  } else {
    try {
      const _Error = Error;
      throw Error();
    } catch (tmp2) {
      const str = tmp2.stack;
      const str2 = str.trim();
      const match = str2.match(/\n( *(at )?)/);
      const stack = tmp2.stack;
      str5 = " (<anonymous>)";
      if (-1 >= stack.indexOf("\n    at")) {
        const stack1 = tmp2.stack;
        let str7 = "";
        if (-1 < stack1.indexOf("@")) {
          str7 = "@unknown:0:0";
        }
        str5 = str7;
      }
    }
  }
}
function describeNativeComponentFrame(type, arg1) {
  let closure_0 = type;
  let closure_1 = arg1;
  if (type) {
    const tmp = c8;
    if (!tmp) {
      c8 = true;
      const _Error = Error;
      const _Error2 = Error;
      Error.prepareStackTrace = undefined;
      try {
        obj = {
          DetermineComponentFrameRoot() {
            try {
              if (closure_1) {
                class Fake {
                  constructor() {
                    throw Error();
                  }
                }
                const _Object = Object;
                obj2 = {
                  set() {
                    throw Error();
                  },
                };
                Object.defineProperty(Fake.prototype, "props", obj2);
                const _Reflect = Reflect;
                if (typeof Reflect === "object") {
                  class Fake {
                    constructor() {
                      throw Error();
                    }
                  }
                  if (Reflect.construct) {
                    class Fake {
                      constructor() {
                        throw Error();
                      }
                    }
                    const _Reflect2 = Reflect;
                    Reflect.construct(closure_0, [], Fake);
                  }
                  return [null, null];
                }
                try {
                  class Fake {
                    constructor() {
                      throw Error();
                    }
                  }
                  Fake.call();
                  closure_0.call(Fake.prototype);
                } catch (err) {}
              } else {
                class Fake {
                  constructor() {
                    throw Error();
                  }
                }
              }
            } catch (err) {
              class Fake {
                constructor() {
                  throw Error();
                }
              }
            }
          },
        };
        obj2 = obj;
        obj.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        let _Object = Object;
        const configurable =
          Object.getOwnPropertyDescriptor(obj.DetermineComponentFrameRoot, "name") && tmp3.configurable;
        if (configurable) {
          const _Object2 = Object;
          Object.defineProperty(obj2.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
        }
        const result = obj2.DetermineComponentFrameRoot();
        const first = result[0];
        if (first) {
          const tmp10 = result[1];
          if (tmp10) {
            const parts = str3.split("\n");
            const parts1 = str4.split("\n");
            let num2 = 0;
            let num3 = 0;
            if (0 < parts.length) {
              const obj3 = parts[num2];
              if (!obj3.includes("DetermineComponentFrameRoot")) {
                sum = num2 + 1;
                num2 = sum;
                while (sum < parts.length) {
                  obj4 = arr2[num2];
                  if (obj4.includes("DetermineComponentFrameRoot")) {
                    break;
                  }
                }
              }
            }
            if (num3 < parts1.length) {
              obj5 = parts1[num3];
              if (!obj5.includes("DetermineComponentFrameRoot")) {
                const sum1 = num3 + 1;
                num3 = sum1;
                while (sum1 < parts1.length) {
                  obj6 = parts1[num3];
                  if (obj6.includes("DetermineComponentFrameRoot")) {
                    break;
                  }
                }
              }
            }
            if (num2 === parts.length) {
              diff = arr2.length - 1;
              num2 = diff;
              num3 = parts1.length - 1;
              if (1 <= diff) {
                if (0 <= num3) {
                  if (parts[num2] !== parts1[num3]) {
                    num3 = num3 - 1;
                    while (1 <= num2) {
                      if (0 > num3) {
                        break;
                      } else if (arr2[num2] === parts1[num3]) {
                        break;
                      }
                    }
                  }
                }
              }
            }
            if (1 <= num2) {
              if (0 <= num3) {
                while (parts[num2] === parts1[num3]) {
                  let diff1 = num2 - 1;
                  num2 = diff1;
                  num3 = num3 - 1;
                }
                if (1 !== num2) {
                  num2 = num2 - 1;
                  const diff2 = num3 - 1;
                  num3 = diff2;
                  while (0 <= diff2) {
                    if (arr2[num2] !== parts1[num3]) {
                      break;
                    }
                  }
                  let str11 = `
  ${str8.replace(" at new ", " at ")}`;
                  const displayName =
                    type.displayName &&
                    `
  ${str8.replace(" at new ", " at ")}`.includes("<anonymous>");
                  if (displayName) {
                    str11 = str11.replace("<anonymous>", type.displayName);
                  }
                  c8 = false;
                  const _Error4 = Error;
                  Error.prepareStackTrace = prepareStackTrace;
                  return str11;
                }
              }
            }
          }
        }
        c8 = false;
        const _Error3 = Error;
        Error.prepareStackTrace = prepareStackTrace;
        let str6 = "";
        let str7 = "";
        if (type) {
          const name = type.displayName || type.name;
          str7 = name;
        }
        if (str7) {
          str6 = describeBuiltInComponentFrame(str7);
        }
        return str6;
      } catch (tmp71) {
        c8 = false;
        const _Error5 = Error;
        Error.prepareStackTrace = prepareStackTrace;
        throw tmp71;
      }
    }
  }
  return "";
}
function describeFiber(_return, arg1) {
  let tmp14;
  let tmp5;
  switch (_return.tag) {
    case 0: {
      tmp5 = describeNativeComponentFrame(_return.type, false);
      return tmp5;
    }
    case 1: {
      return describeNativeComponentFrame(_return.type, true);
    }
    case 2: {
      return "";
    }
    case 3: {
      return "";
    }
    case 4: {
      return "";
    }
    case 5: {
      tmp14 = describeBuiltInComponentFrame(_return.type);
      return tmp14;
    }
    case 6: {
      return "";
    }
    case 7: {
      return "";
    }
    case 8: {
      return "";
    }
    case 9: {
      return "";
    }
    case 10: {
      return "";
    }
    case 11: {
      return describeNativeComponentFrame(_return.type.render, false);
    }
    case 12: {
      return "";
    }
    case 13: {
      if (_return.child !== arg1) {
        let tmp10;
        if (null !== arg1) {
          tmp10 = describeBuiltInComponentFrame("Suspense Fallback");
        }
        return tmp10;
      }
      tmp10 = describeBuiltInComponentFrame("Suspense");
      break;
    }
    case 14: {
      return "";
    }
    case 15: {
      tmp5 = describeNativeComponentFrame(_return.type, false);
      return tmp5;
    }
    case 16: {
      return describeBuiltInComponentFrame("Lazy");
    }
    case 17: {
      return "";
    }
    case 18: {
      return "";
    }
    case 19: {
      return describeBuiltInComponentFrame("SuspenseList");
    }
    case 20: {
      return "";
    }
    case 21: {
      return "";
    }
    case 22: {
      return "";
    }
    case 23: {
      return "";
    }
    case 24: {
      return "";
    }
    case 25: {
      return "";
    }
    case 26: {
      tmp14 = describeBuiltInComponentFrame(_return.type);
      return tmp14;
    }
    case 27: {
      tmp14 = describeBuiltInComponentFrame(_return.type);
      return tmp14;
    }
    case 28: {
      return "";
    }
    case 29: {
      return "";
    }
    case 30: {
      return "";
    }
    case 31: {
      return describeBuiltInComponentFrame("Activity");
    }
    default: {
      return "";
    }
  }
}
function getStackByFiberInDevAndProd(current) {
  _return = current;
  try {
    let str = "";
    let tmp = null;
    do {
      str = `${describeFiber(_return, tmp)}`;
      tmp = _return;
      _return = _return.return;
    } while (tmp6);
    return str;
  } catch (error) {
    return "\nError generating stack: " + error.message + "\n" + error.stack;
  }
}
function getComponentNameFromType(type) {
  let displayName;
  let render;
  if (null == type) {
    return null;
  } else if (typeof type === "function") {
    let tmp13 = null;
    if (type.$$typeof !== closure_28) {
      tmp13 = type.displayName || type.name || null;
    }
    return tmp13;
  } else if (typeof type === "string") {
    return type;
  } else if (closure_15 === type) {
    return "Fragment";
  } else if (closure_17 === type) {
    return "Profiler";
  } else if (closure_16 === type) {
    return "StrictMode";
  } else if (closure_21 === type) {
    return "Suspense";
  } else if (closure_22 === type) {
    return "SuspenseList";
  } else if (closure_25 === type) {
    return "Activity";
  } else {
    if (typeof type === "object") {
      const $$typeof = type.$$typeof;
      if (closure_14 === $$typeof) {
        return "Portal";
      } else if (forResult === $$typeof) {
        return type.displayName || "Context";
      } else if (closure_18 === $$typeof) {
        return (type._context.displayName || "Context") + ".Consumer";
      } else if (closure_20 === $$typeof) {
        ({ render, displayName } = type);
        if (!displayName) {
          let str = "ForwardRef";
          if ("" !== (render.displayName || render.name || "")) {
            str = `${"ForwardRef(" + tmp9})`;
          }
          displayName = str;
        }
        return displayName;
      } else if (closure_23 === $$typeof) {
        let tmp6 = type.displayName || null;
        if (null === tmp6) {
          tmp6 = getComponentNameFromType(type.type) || "Memo";
          getComponentNameFromType(type.type) || "Memo";
        }
        return tmp6;
      } else if (closure_24 === $$typeof) {
        try {
          return getComponentNameFromType(tmp4(tmp3));
        } catch (err) {}
      }
    }
    return null;
  }
}
function executeDispatch(isPropagationStopped, _dispatchListeners, _dispatchInstances) {
  isPropagationStopped.currentTarget = N(_dispatchInstances);
  try {
    _dispatchListeners(isPropagationStopped);
  } catch (tmp3) {
    const tmp4 = c30;
    if (!tmp4) {
      c30 = true;
      c31 = tmp3;
    }
  }
  isPropagationStopped.currentTarget = null;
}
function functionThatReturnsTrue() {
  return true;
}
function functionThatReturnsFalse() {
  return false;
}
class SyntheticEvent {
  constructor(dispatchConfig, _targetInst, nativeEvent, target) {
    let defaultPrevented;
    obj = {
      dispatchConfig,
      _targetInst,
      nativeEvent,
      _dispatchListeners: null,
      _dispatchInstances: null,
      isDefaultPrevented: defaultPrevented ? functionThatReturnsTrue : functionThatReturnsFalse,
      isPropagationStopped: functionThatReturnsFalse,
    };
    const Interface = obj.constructor.Interface;
    for (const key10014 in Interface) {
      if (!Interface.hasOwnProperty(key10014)) {
        continue;
      } else {
        let tmp = Interface[key10014];
        if (tmp) {
          obj[key10014] = tmp(nativeEvent);
          continue;
        } else {
          if ("target" === key10014) {
            obj.target = target;
            continue;
          } else {
            obj[key10014] = nativeEvent[key10014];
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
    if (null != nativeEvent.defaultPrevented) {
      defaultPrevented = nativeEvent.defaultPrevented;
    } else {
      defaultPrevented = false === nativeEvent.returnValue;
    }
    return obj;
  }
}
function createOrGetPooledEvent(arg0, arg1, arg2, arg3) {
  const self = this;
  if (this.eventPool.length) {
    const eventPool = self.eventPool;
    const arr = eventPool.pop();
    self.call(arr, arg0, arg1, arg2, arg3);
    return arr;
  } else {
    const self2 = this;
    const self3 = this;
    const _self = new self(arg0, arg1, arg2, arg3);
    return _self;
  }
}
function releasePooledEvent(destructor) {
  const self = this;
  if (destructor instanceof this) {
    destructor.destructor();
    if (10 > self.eventPool.length) {
      const eventPool = self.eventPool;
      eventPool.push(destructor);
    }
  } else {
    const _Error = Error;
    throw Error("Trying to release an event instance into a pool of a different type.");
  }
}
function timestampForTouch(timeStamp) {
  return timeStamp.timeStamp || timeStamp.timestamp;
}
function recordTouchStart(identifier) {
  let timeStamp;
  identifier = identifier.identifier;
  if (null == identifier) {
    const _Error = Error;
    throw Error("Touch object is missing identifier.");
  } else {
    let tmp;
    if (items3[identifier]) {
      items3[identifier].touchActive = true;
      ({ pageX: tmp6.startPageX, pageY: tmp6.startPageY, timeStamp } = identifier);
      if (!timeStamp) {
        timeStamp = identifier.timestamp;
      }
      items3[identifier].startTimeStamp = timeStamp;
      ({ pageX: tmp6.currentPageX, pageY: tmp6.currentPageY } = identifier);
      items3[identifier].currentTimeStamp = identifier.timeStamp || identifier.timestamp;
      ({ pageX: tmp6.previousPageX, pageY: tmp6.previousPageY } = identifier);
      items3[identifier].previousTimeStamp = identifier.timeStamp || identifier.timestamp;
      tmp = timestampForTouch;
    } else {
      obj = {
        touchActive: true,
        startPageX: null,
        startPageY: null,
        startTimeStamp: identifier.timeStamp || identifier.timestamp,
        currentPageX: null,
        currentPageY: null,
        currentTimeStamp: identifier.timeStamp || identifier.timestamp,
        previousPageX: null,
        previousPageY: null,
        previousTimeStamp: identifier.timeStamp || identifier.timestamp,
      };
      ({ pageX: obj.startPageX, pageY: obj.startPageY } = identifier);
      tmp = timestampForTouch;
      ({ pageX: obj.currentPageX, pageY: obj.currentPageY } = identifier);
      ({ pageX: obj.previousPageX, pageY: obj.previousPageY } = identifier);
      tmp5[identifier] = obj;
    }
    obj4.mostRecentTimeStamp = tmp(identifier);
  }
}
function recordTouchMove(identifier) {
  identifier = identifier.identifier;
  if (null == identifier) {
    const _Error = Error;
    throw Error("Touch object is missing identifier.");
  } else if (tmp[identifier]) {
    tmp[identifier].touchActive = true;
    ({
      currentPageX: tmp4.previousPageX,
      currentPageY: tmp4.previousPageY,
      currentTimeStamp: tmp4.previousTimeStamp,
    } = tmp[identifier]);
    ({ pageX: tmp4.currentPageX, pageY: tmp4.currentPageY } = identifier);
    tmp[identifier].currentTimeStamp = identifier.timeStamp || identifier.timestamp;
    const timestamp = identifier.timeStamp || identifier.timestamp;
    obj4.mostRecentTimeStamp = timestamp;
  }
}
function recordTouchEnd(identifier) {
  identifier = identifier.identifier;
  if (null == identifier) {
    const _Error = Error;
    throw Error("Touch object is missing identifier.");
  } else if (tmp[identifier]) {
    tmp[identifier].touchActive = false;
    ({
      currentPageX: tmp4.previousPageX,
      currentPageY: tmp4.previousPageY,
      currentTimeStamp: tmp4.previousTimeStamp,
    } = tmp[identifier]);
    ({ pageX: tmp4.currentPageX, pageY: tmp4.currentPageY } = identifier);
    tmp[identifier].currentTimeStamp = identifier.timeStamp || identifier.timestamp;
    const timestamp = identifier.timeStamp || identifier.timestamp;
    obj4.mostRecentTimeStamp = timestamp;
  }
}
function accumulateDirectionalDispatches$1(stateNode, bubbled, _dispatchListeners) {
  stateNode = stateNode.stateNode;
  let tmp2 = null;
  if (null !== stateNode) {
    if (typeof z === "function") {
      const currentProps = stateNode.canonical.currentProps;
      tmp2 = null;
      if (null !== currentProps) {
        tmp2 = tmp3;
        if (tmp2) {
          tmp2 = tmp3;
          if (typeof currentProps[_dispatchListeners.dispatchConfig.phasedRegistrationNames[bubbled]] !== "function") {
            const _Error3 = Error;
            const _HermesInternal = HermesInternal;
            throw Error(
              "Expected `" +
                _dispatchListeners.dispatchConfig.phasedRegistrationNames[bubbled] +
                "` listener to be a function, instead got a value of `" +
                typeof currentProps[_dispatchListeners.dispatchConfig.phasedRegistrationNames[bubbled]] +
                "` type.",
            );
          }
        }
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  if (tmp2) {
    _dispatchListeners = _dispatchListeners._dispatchListeners;
    if (null == tmp2) {
      const _Error2 = Error;
      throw Error("Accumulated items must not be null or undefined.");
    } else {
      let tmp9 = tmp2;
      if (null != _dispatchListeners) {
        let combined;
        const tmp5 = isArray(_dispatchListeners);
        const tmp6 = isArray(tmp2);
        if (tmp5) {
          const push = _dispatchListeners.push;
          if (tmp6) {
            push.apply(_dispatchListeners, tmp2);
            combined = _dispatchListeners;
          } else {
            push(tmp2);
            combined = _dispatchListeners;
          }
        } else if (tmp6) {
          items = [_dispatchListeners];
          combined = items.concat(tmp2);
        } else {
          combined = [_dispatchListeners, tmp2];
        }
        tmp9 = combined;
      }
      _dispatchListeners._dispatchListeners = tmp9;
      const _dispatchInstances = _dispatchListeners._dispatchInstances;
      if (null == stateNode) {
        const _Error = Error;
        throw Error("Accumulated items must not be null or undefined.");
      } else {
        let tmp10 = stateNode;
        if (null != _dispatchInstances) {
          let combined1;
          const tmp12 = isArray(_dispatchInstances);
          const tmp13 = isArray(stateNode);
          if (tmp12) {
            const push2 = _dispatchInstances.push;
            if (tmp13) {
              push2.apply(_dispatchInstances, stateNode);
              combined1 = _dispatchInstances;
            } else {
              push2(stateNode);
              combined1 = _dispatchInstances;
            }
          } else if (tmp13) {
            items1 = [_dispatchInstances];
            combined1 = items1.concat(stateNode);
          } else {
            combined1 = [_dispatchInstances, stateNode];
          }
          tmp10 = combined1;
        }
        _dispatchListeners._dispatchInstances = tmp10;
      }
    }
  }
}
function accumulateDirectDispatchesSingle$1(dispatchConfig) {
  const tmp = dispatchConfig;
  if (tmp) {
    if (dispatchConfig.dispatchConfig.registrationName) {
      const _targetInst = dispatchConfig._targetInst;
      if (_targetInst) {
        if (dispatchConfig) {
          if (dispatchConfig.dispatchConfig.registrationName) {
            const registrationName = dispatchConfig.dispatchConfig.registrationName;
            const stateNode = _targetInst.stateNode;
            let tmp3 = null;
            if (null !== stateNode) {
              if (typeof z === "function") {
                const currentProps = stateNode.canonical.currentProps;
                tmp3 = null;
                if (null !== currentProps) {
                  tmp3 = tmp4;
                  if (tmp3) {
                    tmp3 = tmp4;
                    if (typeof currentProps[registrationName] !== "function") {
                      const _Error3 = Error;
                      const _HermesInternal = HermesInternal;
                      throw Error(
                        "Expected `" +
                          registrationName +
                          "` listener to be a function, instead got a value of `" +
                          typeof currentProps[registrationName] +
                          "` type.",
                      );
                    }
                  }
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (tmp3) {
              const _dispatchListeners = dispatchConfig._dispatchListeners;
              if (null == tmp3) {
                const _Error2 = Error;
                throw Error("Accumulated items must not be null or undefined.");
              } else {
                let tmp10 = tmp3;
                if (null != _dispatchListeners) {
                  let combined;
                  const tmp6 = isArray(_dispatchListeners);
                  const tmp7 = isArray(tmp3);
                  if (tmp6) {
                    const push = _dispatchListeners.push;
                    if (tmp7) {
                      push.apply(_dispatchListeners, tmp3);
                      combined = _dispatchListeners;
                    } else {
                      push(tmp3);
                      combined = _dispatchListeners;
                    }
                  } else if (tmp7) {
                    items = [_dispatchListeners];
                    combined = items.concat(tmp3);
                  } else {
                    combined = [_dispatchListeners, tmp3];
                  }
                  tmp10 = combined;
                }
                dispatchConfig._dispatchListeners = tmp10;
                const _dispatchInstances = dispatchConfig._dispatchInstances;
                if (null == _targetInst) {
                  const _Error = Error;
                  throw Error("Accumulated items must not be null or undefined.");
                } else {
                  let tmp11 = _targetInst;
                  if (null != _dispatchInstances) {
                    let combined1;
                    const tmp13 = isArray(_dispatchInstances);
                    const tmp14 = isArray(_targetInst);
                    if (tmp13) {
                      const push2 = _dispatchInstances.push;
                      if (tmp14) {
                        push2.apply(_dispatchInstances, _targetInst);
                        combined1 = _dispatchInstances;
                      } else {
                        push2(_targetInst);
                        combined1 = _dispatchInstances;
                      }
                    } else if (tmp14) {
                      items1 = [_dispatchInstances];
                      combined1 = items1.concat(_targetInst);
                    } else {
                      combined1 = [_dispatchInstances, _targetInst];
                    }
                    tmp11 = combined1;
                  }
                  dispatchConfig._dispatchInstances = tmp11;
                }
              }
            }
          }
        }
      }
    }
  }
}
function accumulateTwoPhaseDispatchesSingleSkipTarget(dispatchConfig) {
  let length;
  let tmp11;
  const tmp = dispatchConfig;
  if (tmp) {
    if (dispatchConfig.dispatchConfig.phasedRegistrationNames) {
      let _targetInst = dispatchConfig._targetInst;
      let tmp2 = null;
      if (_targetInst) {
        _return = _targetInst.return;
        while (_return) {
          _targetInst = _return;
          if (5 === _return.tag) {
            break;
          }
        }
        if (!_return) {
          _return = null;
        }
        tmp2 = _return;
      }
      items = [];
      if (tmp2) {
        items.push(tmp2);
        let tmp6 = tmp2;
        do {
          let _return1 = tmp6.return;
          while (_return1) {
            tmp6 = _return1;
            if (5 === _return1.tag) {
              break;
            }
          }
          if (!_return1) {
            _return1 = null;
          }
          tmp2 = _return1;
        } while (tmp2);
      }
      diff = tmp8 - 1;
      if (0 < +items.length) {
        do {
          let tmp4Result = accumulateDirectionalDispatches$1(items[diff], "captured", dispatchConfig);
          tmp11 = +diff;
          diff = tmp11 - 1;
        } while (0 < tmp11);
      }
      let num4 = 0;
      if (0 < items.length) {
        do {
          let tmp4Result2 = accumulateDirectionalDispatches$1(items[num4], "bubbled", dispatchConfig);
          num4 = num4 + 1;
          length = items.length;
        } while (num4 < length);
      }
    }
  }
}
function accumulateTwoPhaseDispatchesSingle$1(dispatchConfig) {
  let length;
  let tmp9;
  const tmp = dispatchConfig && dispatchConfig.dispatchConfig.phasedRegistrationNames;
  if (tmp) {
    let _targetInst = dispatchConfig._targetInst;
    items = [];
    if (_targetInst) {
      items.push(_targetInst);
      let tmp4 = _targetInst;
      do {
        _return = tmp4.return;
        while (_return) {
          tmp4 = _return;
          if (5 === _return.tag) {
            break;
          }
        }
        if (!_return) {
          _return = null;
        }
        _targetInst = _return;
      } while (_targetInst);
    }
    diff = tmp6 - 1;
    if (0 < +items.length) {
      do {
        let tmp2Result = accumulateDirectionalDispatches$1(items[diff], "captured", dispatchConfig);
        tmp9 = +diff;
        diff = tmp9 - 1;
      } while (0 < tmp9);
    }
    let num4 = 0;
    if (0 < items.length) {
      do {
        let tmp2Result2 = accumulateDirectionalDispatches$1(items[num4], "bubbled", dispatchConfig);
        num4 = num4 + 1;
        length = items.length;
      } while (num4 < length);
    }
  }
}
function accumulateDirectionalDispatches(stateNode, bubbled, _dispatchListeners) {
  stateNode = stateNode.stateNode;
  let tmp2 = null;
  if (null !== stateNode) {
    if (typeof z === "function") {
      const currentProps = stateNode.canonical.currentProps;
      tmp2 = null;
      if (null !== currentProps) {
        tmp2 = tmp3;
        if (tmp2) {
          tmp2 = tmp3;
          if (typeof currentProps[_dispatchListeners.dispatchConfig.phasedRegistrationNames[bubbled]] !== "function") {
            const _Error3 = Error;
            const _HermesInternal = HermesInternal;
            throw Error(
              "Expected `" +
                _dispatchListeners.dispatchConfig.phasedRegistrationNames[bubbled] +
                "` listener to be a function, instead got a value of `" +
                typeof currentProps[_dispatchListeners.dispatchConfig.phasedRegistrationNames[bubbled]] +
                "` type.",
            );
          }
        }
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  if (tmp2) {
    _dispatchListeners = _dispatchListeners._dispatchListeners;
    if (null == tmp2) {
      const _Error2 = Error;
      throw Error("Accumulated items must not be null or undefined.");
    } else {
      let tmp9 = tmp2;
      if (null != _dispatchListeners) {
        let combined;
        const tmp5 = isArray(_dispatchListeners);
        const tmp6 = isArray(tmp2);
        if (tmp5) {
          const push = _dispatchListeners.push;
          if (tmp6) {
            push.apply(_dispatchListeners, tmp2);
            combined = _dispatchListeners;
          } else {
            push(tmp2);
            combined = _dispatchListeners;
          }
        } else if (tmp6) {
          items = [_dispatchListeners];
          combined = items.concat(tmp2);
        } else {
          combined = [_dispatchListeners, tmp2];
        }
        tmp9 = combined;
      }
      _dispatchListeners._dispatchListeners = tmp9;
      const _dispatchInstances = _dispatchListeners._dispatchInstances;
      if (null == stateNode) {
        const _Error = Error;
        throw Error("Accumulated items must not be null or undefined.");
      } else {
        let tmp10 = stateNode;
        if (null != _dispatchInstances) {
          let combined1;
          const tmp12 = isArray(_dispatchInstances);
          const tmp13 = isArray(stateNode);
          if (tmp12) {
            const push2 = _dispatchInstances.push;
            if (tmp13) {
              push2.apply(_dispatchInstances, stateNode);
              combined1 = _dispatchInstances;
            } else {
              push2(stateNode);
              combined1 = _dispatchInstances;
            }
          } else if (tmp13) {
            items1 = [_dispatchInstances];
            combined1 = items1.concat(stateNode);
          } else {
            combined1 = [_dispatchInstances, stateNode];
          }
          tmp10 = combined1;
        }
        _dispatchListeners._dispatchInstances = tmp10;
      }
    }
  }
}
function accumulateTwoPhaseDispatchesSingle(dispatchConfig) {
  let length;
  let tmp9;
  const tmp = dispatchConfig && dispatchConfig.dispatchConfig.phasedRegistrationNames;
  if (tmp) {
    let _targetInst = dispatchConfig._targetInst;
    items = [];
    if (_targetInst) {
      items.push(_targetInst);
      let tmp4 = _targetInst;
      do {
        _return = tmp4.return;
        while (_return) {
          tmp4 = _return;
          if (5 === _return.tag) {
            break;
          }
        }
        if (!_return) {
          _return = null;
        }
        _targetInst = _return;
      } while (_targetInst);
    }
    diff = tmp6 - 1;
    if (0 < +items.length) {
      do {
        let tmp2Result = accumulateDirectionalDispatches(items[diff], "captured", dispatchConfig);
        tmp9 = +diff;
        diff = tmp9 - 1;
      } while (0 < tmp9);
    }
    let num4 = 0;
    if (0 < items.length) {
      do {
        let tmp2Result2 = accumulateDirectionalDispatches(items[num4], "bubbled", dispatchConfig);
        num4 = num4 + 1;
        length = items.length;
      } while (num4 < length);
    }
  }
}
function accumulateDirectDispatchesSingle(dispatchConfig) {
  const tmp = dispatchConfig;
  if (tmp) {
    if (dispatchConfig.dispatchConfig.registrationName) {
      const _targetInst = dispatchConfig._targetInst;
      if (_targetInst) {
        if (dispatchConfig) {
          if (dispatchConfig.dispatchConfig.registrationName) {
            const registrationName = dispatchConfig.dispatchConfig.registrationName;
            const stateNode = _targetInst.stateNode;
            let tmp3 = null;
            if (null !== stateNode) {
              if (typeof z === "function") {
                const currentProps = stateNode.canonical.currentProps;
                tmp3 = null;
                if (null !== currentProps) {
                  tmp3 = tmp4;
                  if (tmp3) {
                    tmp3 = tmp4;
                    if (typeof currentProps[registrationName] !== "function") {
                      const _Error3 = Error;
                      const _HermesInternal = HermesInternal;
                      throw Error(
                        "Expected `" +
                          registrationName +
                          "` listener to be a function, instead got a value of `" +
                          typeof currentProps[registrationName] +
                          "` type.",
                      );
                    }
                  }
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (tmp3) {
              const _dispatchListeners = dispatchConfig._dispatchListeners;
              if (null == tmp3) {
                const _Error2 = Error;
                throw Error("Accumulated items must not be null or undefined.");
              } else {
                let tmp10 = tmp3;
                if (null != _dispatchListeners) {
                  let combined;
                  const tmp6 = isArray(_dispatchListeners);
                  const tmp7 = isArray(tmp3);
                  if (tmp6) {
                    const push = _dispatchListeners.push;
                    if (tmp7) {
                      push.apply(_dispatchListeners, tmp3);
                      combined = _dispatchListeners;
                    } else {
                      push(tmp3);
                      combined = _dispatchListeners;
                    }
                  } else if (tmp7) {
                    items = [_dispatchListeners];
                    combined = items.concat(tmp3);
                  } else {
                    combined = [_dispatchListeners, tmp3];
                  }
                  tmp10 = combined;
                }
                dispatchConfig._dispatchListeners = tmp10;
                const _dispatchInstances = dispatchConfig._dispatchInstances;
                if (null == _targetInst) {
                  const _Error = Error;
                  throw Error("Accumulated items must not be null or undefined.");
                } else {
                  let tmp11 = _targetInst;
                  if (null != _dispatchInstances) {
                    let combined1;
                    const tmp13 = isArray(_dispatchInstances);
                    const tmp14 = isArray(_targetInst);
                    if (tmp13) {
                      const push2 = _dispatchInstances.push;
                      if (tmp14) {
                        push2.apply(_dispatchInstances, _targetInst);
                        combined1 = _dispatchInstances;
                      } else {
                        push2(_targetInst);
                        combined1 = _dispatchInstances;
                      }
                    } else if (tmp14) {
                      items1 = [_dispatchInstances];
                      combined1 = items1.concat(_targetInst);
                    } else {
                      combined1 = [_dispatchInstances, _targetInst];
                    }
                    tmp11 = combined1;
                  }
                  dispatchConfig._dispatchInstances = tmp11;
                }
              }
            }
          }
        }
      }
    }
  }
}
function batchedUpdatesImpl(fn, arg1) {
  return fn(arg1);
}
function executeDispatchesAndReleaseTopLevel(isPropagationStopped) {
  let _dispatchInstances;
  let _dispatchListeners;
  const tmp = isPropagationStopped;
  if (tmp) {
    ({ _dispatchListeners, _dispatchInstances } = isPropagationStopped);
    if (isArray(_dispatchListeners)) {
      if (0 < _dispatchListeners.length) {
        let num4 = 0;
        if (!isPropagationStopped.isPropagationStopped()) {
          executeDispatch(isPropagationStopped, _dispatchListeners[num4], _dispatchInstances[num4]);
          sum = num4 + 1;
          while (sum < _dispatchListeners.length) {
            num4 = sum;
            if (isPropagationStopped.isPropagationStopped()) {
              break;
            }
          }
        }
      }
    } else if (_dispatchListeners) {
      executeDispatch(isPropagationStopped, _dispatchListeners, _dispatchInstances);
    }
    isPropagationStopped._dispatchListeners = null;
    isPropagationStopped._dispatchInstances = null;
    if (!isPropagationStopped.isPersistent()) {
      const constructor = isPropagationStopped.constructor;
      constructor.release(isPropagationStopped);
    }
  }
}
function setIsStrictModeForDevtools(arg0) {
  if (typeof _mod287.log === "function") {
    const tmpResult = _mod287;
    const result = tmpResult.unstable_setDisableYieldValue(arg0);
  }
  if (__REACT_DEVTOOLS_GLOBAL_HOOK__2) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__2.setStrictMode === "function") {
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__2.setStrictMode(closure_72, arg0);
      } catch (err) {}
    }
  }
}
function getNextLanes(pendingLanes, c280, arg2) {
  let pingedLanes;
  let suspendedLanes;
  let warmLanes;
  pendingLanes = pendingLanes.pendingLanes;
  if (0 === pendingLanes) {
    return 0;
  } else {
    let num14;
    ({ suspendedLanes, pingedLanes, warmLanes } = pendingLanes);
    if (0 !== (134217727 & pendingLanes)) {
      if (0 !== (134217727 & pendingLanes & ~suspendedLanes)) {
        let num68 = 42 & tmp2;
        if (0 === num68) {
          if (1 === (134217727 & pendingLanes & ~suspendedLanes & -134217727 & pendingLanes & ~suspendedLanes)) {
            num68 = 1;
          } else if (2 === (134217727 & pendingLanes & ~suspendedLanes & -134217727 & pendingLanes & ~suspendedLanes)) {
            num68 = 2;
          } else if (4 === (134217727 & pendingLanes & ~suspendedLanes & -134217727 & pendingLanes & ~suspendedLanes)) {
            num68 = 4;
          } else if (8 === (134217727 & pendingLanes & ~suspendedLanes & -134217727 & pendingLanes & ~suspendedLanes)) {
            num68 = 8;
          } else if (
            16 ===
            (134217727 & pendingLanes & ~suspendedLanes & -134217727 & pendingLanes & ~suspendedLanes)
          ) {
            num68 = 16;
          } else if (
            32 ===
            (134217727 & pendingLanes & ~suspendedLanes & -134217727 & pendingLanes & ~suspendedLanes)
          ) {
            num68 = 32;
          } else if (
            64 ===
            (134217727 & pendingLanes & ~suspendedLanes & -134217727 & pendingLanes & ~suspendedLanes)
          ) {
            num68 = 64;
          } else if (
            128 ===
            (134217727 & pendingLanes & ~suspendedLanes & -134217727 & pendingLanes & ~suspendedLanes)
          ) {
            num68 = 128;
          } else {
            if (256 !== (134217727 & pendingLanes & ~suspendedLanes & -134217727 & pendingLanes & ~suspendedLanes)) {
              if (512 !== (134217727 & pendingLanes & ~suspendedLanes & -134217727 & pendingLanes & ~suspendedLanes)) {
                if (
                  1024 !==
                  (134217727 & pendingLanes & ~suspendedLanes & -134217727 & pendingLanes & ~suspendedLanes)
                ) {
                  if (
                    2048 !==
                    (134217727 & pendingLanes & ~suspendedLanes & -134217727 & pendingLanes & ~suspendedLanes)
                  ) {
                    if (
                      4096 !==
                      (134217727 & pendingLanes & ~suspendedLanes & -134217727 & pendingLanes & ~suspendedLanes)
                    ) {
                      if (
                        8192 !==
                        (134217727 & pendingLanes & ~suspendedLanes & -134217727 & pendingLanes & ~suspendedLanes)
                      ) {
                        if (
                          16384 !==
                          (134217727 & pendingLanes & ~suspendedLanes & -134217727 & pendingLanes & ~suspendedLanes)
                        ) {
                          if (
                            32768 !==
                            (134217727 & pendingLanes & ~suspendedLanes & -134217727 & pendingLanes & ~suspendedLanes)
                          ) {
                            if (
                              65536 !==
                              (134217727 & pendingLanes & ~suspendedLanes & -134217727 & pendingLanes & ~suspendedLanes)
                            ) {
                              if (
                                131072 !==
                                (134217727 &
                                  pendingLanes &
                                  ~suspendedLanes &
                                  -134217727 &
                                  pendingLanes &
                                  ~suspendedLanes)
                              ) {
                                if (
                                  262144 !==
                                  (134217727 &
                                    pendingLanes &
                                    ~suspendedLanes &
                                    -134217727 &
                                    pendingLanes &
                                    ~suspendedLanes)
                                ) {
                                  if (
                                    524288 !==
                                    (134217727 &
                                      pendingLanes &
                                      ~suspendedLanes &
                                      -134217727 &
                                      pendingLanes &
                                      ~suspendedLanes)
                                  ) {
                                    if (
                                      1048576 !==
                                      (134217727 &
                                        pendingLanes &
                                        ~suspendedLanes &
                                        -134217727 &
                                        pendingLanes &
                                        ~suspendedLanes)
                                    ) {
                                      if (
                                        2097152 !==
                                        (134217727 &
                                          pendingLanes &
                                          ~suspendedLanes &
                                          -134217727 &
                                          pendingLanes &
                                          ~suspendedLanes)
                                      ) {
                                        if (
                                          4194304 !==
                                          (134217727 &
                                            pendingLanes &
                                            ~suspendedLanes &
                                            -134217727 &
                                            pendingLanes &
                                            ~suspendedLanes)
                                        ) {
                                          if (
                                            8388608 !==
                                            (134217727 &
                                              pendingLanes &
                                              ~suspendedLanes &
                                              -134217727 &
                                              pendingLanes &
                                              ~suspendedLanes)
                                          ) {
                                            if (
                                              16777216 !==
                                              (134217727 &
                                                pendingLanes &
                                                ~suspendedLanes &
                                                -134217727 &
                                                pendingLanes &
                                                ~suspendedLanes)
                                            ) {
                                              if (
                                                33554432 !==
                                                (134217727 &
                                                  pendingLanes &
                                                  ~suspendedLanes &
                                                  -134217727 &
                                                  pendingLanes &
                                                  ~suspendedLanes)
                                              ) {
                                                if (
                                                  67108864 ===
                                                  (134217727 &
                                                    pendingLanes &
                                                    ~suspendedLanes &
                                                    -134217727 &
                                                    pendingLanes &
                                                    ~suspendedLanes)
                                                ) {
                                                  num68 = 67108864;
                                                } else if (
                                                  134217728 ===
                                                  (134217727 &
                                                    pendingLanes &
                                                    ~suspendedLanes &
                                                    -134217727 &
                                                    pendingLanes &
                                                    ~suspendedLanes)
                                                ) {
                                                  num68 = 134217728;
                                                } else if (
                                                  268435456 ===
                                                  (134217727 &
                                                    pendingLanes &
                                                    ~suspendedLanes &
                                                    -134217727 &
                                                    pendingLanes &
                                                    ~suspendedLanes)
                                                ) {
                                                  num68 = 268435456;
                                                } else if (
                                                  536870912 ===
                                                  (134217727 &
                                                    pendingLanes &
                                                    ~suspendedLanes &
                                                    -134217727 &
                                                    pendingLanes &
                                                    ~suspendedLanes)
                                                ) {
                                                  num68 = 536870912;
                                                } else {
                                                  num68 = 0;
                                                  if (
                                                    1073741824 !==
                                                    (134217727 &
                                                      pendingLanes &
                                                      ~suspendedLanes &
                                                      -134217727 &
                                                      pendingLanes &
                                                      ~suspendedLanes)
                                                  ) {
                                                    num68 = tmp2;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        num68 = 62914560 & tmp2;
                                      }
                                    }
                                  }
                                }
                                num68 = 3932160 & tmp2;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            num68 = 261888 & tmp2;
          }
        }
        num14 = num68;
      } else if (0 !== (pingedLanes & (134217727 & pendingLanes))) {
        let num55 = 42 & tmp14;
        if (0 === num55) {
          if (1 === (pingedLanes & (134217727 & pendingLanes) & -pingedLanes & (134217727 & pendingLanes))) {
            num55 = 1;
          } else if (2 === (pingedLanes & (134217727 & pendingLanes) & -pingedLanes & (134217727 & pendingLanes))) {
            num55 = 2;
          } else if (4 === (pingedLanes & (134217727 & pendingLanes) & -pingedLanes & (134217727 & pendingLanes))) {
            num55 = 4;
          } else if (8 === (pingedLanes & (134217727 & pendingLanes) & -pingedLanes & (134217727 & pendingLanes))) {
            num55 = 8;
          } else if (16 === (pingedLanes & (134217727 & pendingLanes) & -pingedLanes & (134217727 & pendingLanes))) {
            num55 = 16;
          } else if (32 === (pingedLanes & (134217727 & pendingLanes) & -pingedLanes & (134217727 & pendingLanes))) {
            num55 = 32;
          } else if (64 === (pingedLanes & (134217727 & pendingLanes) & -pingedLanes & (134217727 & pendingLanes))) {
            num55 = 64;
          } else if (128 === (pingedLanes & (134217727 & pendingLanes) & -pingedLanes & (134217727 & pendingLanes))) {
            num55 = 128;
          } else {
            if (256 !== (pingedLanes & (134217727 & pendingLanes) & -pingedLanes & (134217727 & pendingLanes))) {
              if (512 !== (pingedLanes & (134217727 & pendingLanes) & -pingedLanes & (134217727 & pendingLanes))) {
                if (1024 !== (pingedLanes & (134217727 & pendingLanes) & -pingedLanes & (134217727 & pendingLanes))) {
                  if (2048 !== (pingedLanes & (134217727 & pendingLanes) & -pingedLanes & (134217727 & pendingLanes))) {
                    if (
                      4096 !==
                      (pingedLanes & (134217727 & pendingLanes) & -pingedLanes & (134217727 & pendingLanes))
                    ) {
                      if (
                        8192 !==
                        (pingedLanes & (134217727 & pendingLanes) & -pingedLanes & (134217727 & pendingLanes))
                      ) {
                        if (
                          16384 !==
                          (pingedLanes & (134217727 & pendingLanes) & -pingedLanes & (134217727 & pendingLanes))
                        ) {
                          if (
                            32768 !==
                            (pingedLanes & (134217727 & pendingLanes) & -pingedLanes & (134217727 & pendingLanes))
                          ) {
                            if (
                              65536 !==
                              (pingedLanes & (134217727 & pendingLanes) & -pingedLanes & (134217727 & pendingLanes))
                            ) {
                              if (
                                131072 !==
                                (pingedLanes & (134217727 & pendingLanes) & -pingedLanes & (134217727 & pendingLanes))
                              ) {
                                if (
                                  262144 !==
                                  (pingedLanes & (134217727 & pendingLanes) & -pingedLanes & (134217727 & pendingLanes))
                                ) {
                                  if (
                                    524288 !==
                                    (pingedLanes &
                                      (134217727 & pendingLanes) &
                                      -pingedLanes &
                                      (134217727 & pendingLanes))
                                  ) {
                                    if (
                                      1048576 !==
                                      (pingedLanes &
                                        (134217727 & pendingLanes) &
                                        -pingedLanes &
                                        (134217727 & pendingLanes))
                                    ) {
                                      if (
                                        2097152 !==
                                        (pingedLanes &
                                          (134217727 & pendingLanes) &
                                          -pingedLanes &
                                          (134217727 & pendingLanes))
                                      ) {
                                        if (
                                          4194304 !==
                                          (pingedLanes &
                                            (134217727 & pendingLanes) &
                                            -pingedLanes &
                                            (134217727 & pendingLanes))
                                        ) {
                                          if (
                                            8388608 !==
                                            (pingedLanes &
                                              (134217727 & pendingLanes) &
                                              -pingedLanes &
                                              (134217727 & pendingLanes))
                                          ) {
                                            if (
                                              16777216 !==
                                              (pingedLanes &
                                                (134217727 & pendingLanes) &
                                                -pingedLanes &
                                                (134217727 & pendingLanes))
                                            ) {
                                              if (
                                                33554432 !==
                                                (pingedLanes &
                                                  (134217727 & pendingLanes) &
                                                  -pingedLanes &
                                                  (134217727 & pendingLanes))
                                              ) {
                                                if (
                                                  67108864 ===
                                                  (pingedLanes &
                                                    (134217727 & pendingLanes) &
                                                    -pingedLanes &
                                                    (134217727 & pendingLanes))
                                                ) {
                                                  num55 = 67108864;
                                                } else if (
                                                  134217728 ===
                                                  (pingedLanes &
                                                    (134217727 & pendingLanes) &
                                                    -pingedLanes &
                                                    (134217727 & pendingLanes))
                                                ) {
                                                  num55 = 134217728;
                                                } else if (
                                                  268435456 ===
                                                  (pingedLanes &
                                                    (134217727 & pendingLanes) &
                                                    -pingedLanes &
                                                    (134217727 & pendingLanes))
                                                ) {
                                                  num55 = 268435456;
                                                } else if (
                                                  536870912 ===
                                                  (pingedLanes &
                                                    (134217727 & pendingLanes) &
                                                    -pingedLanes &
                                                    (134217727 & pendingLanes))
                                                ) {
                                                  num55 = 536870912;
                                                } else {
                                                  num55 = 0;
                                                  if (
                                                    1073741824 !==
                                                    (pingedLanes &
                                                      (134217727 & pendingLanes) &
                                                      -pingedLanes &
                                                      (134217727 & pendingLanes))
                                                  ) {
                                                    num55 = tmp14;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        num55 = 62914560 & tmp14;
                                      }
                                    }
                                  }
                                }
                                num55 = 3932160 & tmp14;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            num55 = 261888 & tmp14;
          }
        }
        num14 = num55;
      } else {
        num14 = 0;
        if (!arg2) {
          let num41 = 0;
          if (0 !== (134217727 & pendingLanes & ~warmLanes)) {
            let num50 = 42 & tmp3;
            if (0 === num50) {
              if (1 === (134217727 & pendingLanes & ~warmLanes & -134217727 & pendingLanes & ~warmLanes)) {
                num50 = 1;
              } else if (2 === (134217727 & pendingLanes & ~warmLanes & -134217727 & pendingLanes & ~warmLanes)) {
                num50 = 2;
              } else if (4 === (134217727 & pendingLanes & ~warmLanes & -134217727 & pendingLanes & ~warmLanes)) {
                num50 = 4;
              } else if (8 === (134217727 & pendingLanes & ~warmLanes & -134217727 & pendingLanes & ~warmLanes)) {
                num50 = 8;
              } else if (16 === (134217727 & pendingLanes & ~warmLanes & -134217727 & pendingLanes & ~warmLanes)) {
                num50 = 16;
              } else if (32 === (134217727 & pendingLanes & ~warmLanes & -134217727 & pendingLanes & ~warmLanes)) {
                num50 = 32;
              } else if (64 === (134217727 & pendingLanes & ~warmLanes & -134217727 & pendingLanes & ~warmLanes)) {
                num50 = 64;
              } else if (128 === (134217727 & pendingLanes & ~warmLanes & -134217727 & pendingLanes & ~warmLanes)) {
                num50 = 128;
              } else {
                if (256 !== (134217727 & pendingLanes & ~warmLanes & -134217727 & pendingLanes & ~warmLanes)) {
                  if (512 !== (134217727 & pendingLanes & ~warmLanes & -134217727 & pendingLanes & ~warmLanes)) {
                    if (1024 !== (134217727 & pendingLanes & ~warmLanes & -134217727 & pendingLanes & ~warmLanes)) {
                      if (2048 !== (134217727 & pendingLanes & ~warmLanes & -134217727 & pendingLanes & ~warmLanes)) {
                        if (4096 !== (134217727 & pendingLanes & ~warmLanes & -134217727 & pendingLanes & ~warmLanes)) {
                          if (
                            8192 !==
                            (134217727 & pendingLanes & ~warmLanes & -134217727 & pendingLanes & ~warmLanes)
                          ) {
                            if (
                              16384 !==
                              (134217727 & pendingLanes & ~warmLanes & -134217727 & pendingLanes & ~warmLanes)
                            ) {
                              if (
                                32768 !==
                                (134217727 & pendingLanes & ~warmLanes & -134217727 & pendingLanes & ~warmLanes)
                              ) {
                                if (
                                  65536 !==
                                  (134217727 & pendingLanes & ~warmLanes & -134217727 & pendingLanes & ~warmLanes)
                                ) {
                                  if (
                                    131072 !==
                                    (134217727 & pendingLanes & ~warmLanes & -134217727 & pendingLanes & ~warmLanes)
                                  ) {
                                    if (
                                      262144 !==
                                      (134217727 & pendingLanes & ~warmLanes & -134217727 & pendingLanes & ~warmLanes)
                                    ) {
                                      if (
                                        524288 !==
                                        (134217727 & pendingLanes & ~warmLanes & -134217727 & pendingLanes & ~warmLanes)
                                      ) {
                                        if (
                                          1048576 !==
                                          (134217727 &
                                            pendingLanes &
                                            ~warmLanes &
                                            -134217727 &
                                            pendingLanes &
                                            ~warmLanes)
                                        ) {
                                          if (
                                            2097152 !==
                                            (134217727 &
                                              pendingLanes &
                                              ~warmLanes &
                                              -134217727 &
                                              pendingLanes &
                                              ~warmLanes)
                                          ) {
                                            if (
                                              4194304 !==
                                              (134217727 &
                                                pendingLanes &
                                                ~warmLanes &
                                                -134217727 &
                                                pendingLanes &
                                                ~warmLanes)
                                            ) {
                                              if (
                                                8388608 !==
                                                (134217727 &
                                                  pendingLanes &
                                                  ~warmLanes &
                                                  -134217727 &
                                                  pendingLanes &
                                                  ~warmLanes)
                                              ) {
                                                if (
                                                  16777216 !==
                                                  (134217727 &
                                                    pendingLanes &
                                                    ~warmLanes &
                                                    -134217727 &
                                                    pendingLanes &
                                                    ~warmLanes)
                                                ) {
                                                  if (
                                                    33554432 !==
                                                    (134217727 &
                                                      pendingLanes &
                                                      ~warmLanes &
                                                      -134217727 &
                                                      pendingLanes &
                                                      ~warmLanes)
                                                  ) {
                                                    if (
                                                      67108864 ===
                                                      (134217727 &
                                                        pendingLanes &
                                                        ~warmLanes &
                                                        -134217727 &
                                                        pendingLanes &
                                                        ~warmLanes)
                                                    ) {
                                                      num50 = 67108864;
                                                    } else if (
                                                      134217728 ===
                                                      (134217727 &
                                                        pendingLanes &
                                                        ~warmLanes &
                                                        -134217727 &
                                                        pendingLanes &
                                                        ~warmLanes)
                                                    ) {
                                                      num50 = 134217728;
                                                    } else if (
                                                      268435456 ===
                                                      (134217727 &
                                                        pendingLanes &
                                                        ~warmLanes &
                                                        -134217727 &
                                                        pendingLanes &
                                                        ~warmLanes)
                                                    ) {
                                                      num50 = 268435456;
                                                    } else if (
                                                      536870912 ===
                                                      (134217727 &
                                                        pendingLanes &
                                                        ~warmLanes &
                                                        -134217727 &
                                                        pendingLanes &
                                                        ~warmLanes)
                                                    ) {
                                                      num50 = 536870912;
                                                    } else {
                                                      num50 = 0;
                                                      if (
                                                        1073741824 !==
                                                        (134217727 &
                                                          pendingLanes &
                                                          ~warmLanes &
                                                          -134217727 &
                                                          pendingLanes &
                                                          ~warmLanes)
                                                      ) {
                                                        num50 = tmp3;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            num50 = 62914560 & tmp3;
                                          }
                                        }
                                      }
                                    }
                                    num50 = 3932160 & tmp3;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                num50 = 261888 & tmp3;
              }
            }
            num41 = num50;
          }
          num14 = num41;
        }
      }
    } else if (0 !== (pendingLanes & ~suspendedLanes)) {
      let num29 = 42 & tmp10;
      if (0 === num29) {
        if (1 === (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)) {
          num29 = 1;
        } else if (2 === (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)) {
          num29 = 2;
        } else if (4 === (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)) {
          num29 = 4;
        } else if (8 === (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)) {
          num29 = 8;
        } else if (16 === (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)) {
          num29 = 16;
        } else if (32 === (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)) {
          num29 = 32;
        } else if (64 === (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)) {
          num29 = 64;
        } else if (128 === (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)) {
          num29 = 128;
        } else {
          if (256 !== (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)) {
            if (512 !== (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)) {
              if (1024 !== (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)) {
                if (2048 !== (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)) {
                  if (4096 !== (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)) {
                    if (8192 !== (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)) {
                      if (16384 !== (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)) {
                        if (32768 !== (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)) {
                          if (65536 !== (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)) {
                            if (131072 !== (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)) {
                              if (262144 !== (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)) {
                                if (524288 !== (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)) {
                                  if (1048576 !== (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)) {
                                    if (
                                      2097152 !==
                                      (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)
                                    ) {
                                      if (
                                        4194304 !==
                                        (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)
                                      ) {
                                        if (
                                          8388608 !==
                                          (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)
                                        ) {
                                          if (
                                            16777216 !==
                                            (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)
                                          ) {
                                            if (
                                              33554432 !==
                                              (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)
                                            ) {
                                              if (
                                                67108864 ===
                                                (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)
                                              ) {
                                                num29 = 67108864;
                                              } else if (
                                                134217728 ===
                                                (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)
                                              ) {
                                                num29 = 134217728;
                                              } else if (
                                                268435456 ===
                                                (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)
                                              ) {
                                                num29 = 268435456;
                                              } else if (
                                                536870912 ===
                                                (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)
                                              ) {
                                                num29 = 536870912;
                                              } else {
                                                num29 = 0;
                                                if (
                                                  1073741824 !==
                                                  (pendingLanes & ~suspendedLanes & -pendingLanes & ~suspendedLanes)
                                                ) {
                                                  num29 = tmp10;
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      num29 = 62914560 & tmp10;
                                    }
                                  }
                                }
                              }
                              num29 = 3932160 & tmp10;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          num29 = 261888 & tmp10;
        }
      }
      num14 = num29;
    } else if (0 !== pingedLanes) {
      let num16 = 42 & pingedLanes;
      if (0 === num16) {
        if (1 === (pingedLanes & -pingedLanes)) {
          num16 = 1;
        } else if (2 === (pingedLanes & -pingedLanes)) {
          num16 = 2;
        } else if (4 === (pingedLanes & -pingedLanes)) {
          num16 = 4;
        } else if (8 === (pingedLanes & -pingedLanes)) {
          num16 = 8;
        } else if (16 === (pingedLanes & -pingedLanes)) {
          num16 = 16;
        } else if (32 === (pingedLanes & -pingedLanes)) {
          num16 = 32;
        } else if (64 === (pingedLanes & -pingedLanes)) {
          num16 = 64;
        } else if (128 === (pingedLanes & -pingedLanes)) {
          num16 = 128;
        } else {
          if (256 !== (pingedLanes & -pingedLanes)) {
            if (512 !== (pingedLanes & -pingedLanes)) {
              if (1024 !== (pingedLanes & -pingedLanes)) {
                if (2048 !== (pingedLanes & -pingedLanes)) {
                  if (4096 !== (pingedLanes & -pingedLanes)) {
                    if (8192 !== (pingedLanes & -pingedLanes)) {
                      if (16384 !== (pingedLanes & -pingedLanes)) {
                        if (32768 !== (pingedLanes & -pingedLanes)) {
                          if (65536 !== (pingedLanes & -pingedLanes)) {
                            if (131072 !== (pingedLanes & -pingedLanes)) {
                              if (262144 !== (pingedLanes & -pingedLanes)) {
                                if (524288 !== (pingedLanes & -pingedLanes)) {
                                  if (1048576 !== (pingedLanes & -pingedLanes)) {
                                    if (2097152 !== (pingedLanes & -pingedLanes)) {
                                      if (4194304 !== (pingedLanes & -pingedLanes)) {
                                        if (8388608 !== (pingedLanes & -pingedLanes)) {
                                          if (16777216 !== (pingedLanes & -pingedLanes)) {
                                            if (33554432 !== (pingedLanes & -pingedLanes)) {
                                              if (67108864 === (pingedLanes & -pingedLanes)) {
                                                num16 = 67108864;
                                              } else if (134217728 === (pingedLanes & -pingedLanes)) {
                                                num16 = 134217728;
                                              } else if (268435456 === (pingedLanes & -pingedLanes)) {
                                                num16 = 268435456;
                                              } else if (536870912 === (pingedLanes & -pingedLanes)) {
                                                num16 = 536870912;
                                              } else {
                                                num16 = 0;
                                                if (1073741824 !== (pingedLanes & -pingedLanes)) {
                                                  num16 = pingedLanes;
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      num16 = 62914560 & pingedLanes;
                                    }
                                  }
                                }
                              }
                              num16 = 3932160 & pingedLanes;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          num16 = 261888 & pingedLanes;
        }
      }
      num14 = num16;
    } else {
      num14 = 0;
      if (!arg2) {
        let num = 0;
        if (0 !== (pendingLanes & ~warmLanes)) {
          let num10 = 42 & tmp;
          if (0 === num10) {
            if (1 === (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
              num10 = 1;
            } else if (2 === (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
              num10 = 2;
            } else if (4 === (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
              num10 = 4;
            } else if (8 === (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
              num10 = 8;
            } else if (16 === (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
              num10 = 16;
            } else if (32 === (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
              num10 = 32;
            } else if (64 === (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
              num10 = 64;
            } else if (128 === (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
              num10 = 128;
            } else {
              if (256 !== (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
                if (512 !== (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
                  if (1024 !== (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
                    if (2048 !== (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
                      if (4096 !== (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
                        if (8192 !== (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
                          if (16384 !== (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
                            if (32768 !== (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
                              if (65536 !== (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
                                if (131072 !== (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
                                  if (262144 !== (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
                                    if (524288 !== (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
                                      if (1048576 !== (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
                                        if (2097152 !== (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
                                          if (4194304 !== (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
                                            if (8388608 !== (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)) {
                                              if (
                                                16777216 !==
                                                (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)
                                              ) {
                                                if (
                                                  33554432 !==
                                                  (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)
                                                ) {
                                                  if (
                                                    67108864 ===
                                                    (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)
                                                  ) {
                                                    num10 = 67108864;
                                                  } else if (
                                                    134217728 ===
                                                    (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)
                                                  ) {
                                                    num10 = 134217728;
                                                  } else if (
                                                    268435456 ===
                                                    (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)
                                                  ) {
                                                    num10 = 268435456;
                                                  } else if (
                                                    536870912 ===
                                                    (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)
                                                  ) {
                                                    num10 = 536870912;
                                                  } else {
                                                    num10 = 0;
                                                    if (
                                                      1073741824 !==
                                                      (pendingLanes & ~warmLanes & -pendingLanes & ~warmLanes)
                                                    ) {
                                                      num10 = tmp;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          num10 = 62914560 & tmp;
                                        }
                                      }
                                    }
                                  }
                                  num10 = 3932160 & tmp;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              num10 = 261888 & tmp;
            }
          }
          num = num10;
        }
        num14 = num;
      }
    }
    let num80 = 0;
    if (0 !== num14) {
      let tmp5 = num14;
      if (0 !== c280) {
        tmp5 = num14;
        if (c280 !== num14) {
          tmp5 = num14;
          if (!(c280 & suspendedLanes)) {
            if ((num14 & -num14) >= (c280 & -c280)) {
              tmp5 = c280;
            } else {
              tmp5 = num14;
              if (32 === (num14 & -num14)) {
                tmp5 = num14;
              }
            }
          }
        }
      }
      num80 = tmp5;
    }
    return num80;
  }
}
function checkIfRootIsPrerendering(pendingLanes, arg1) {
  return !(pendingLanes.pendingLanes & ~pendingLanes.suspendedLanes & ~pendingLanes.pingedLanes & arg1);
}
function lanesToEventPriority(c303) {
  let num = 2;
  if (2 < (c303 & -c303)) {
    let num2 = 8;
    if (8 < (c303 & -c303)) {
      let num4 = 268435456;
      if (134217727 & (c303 & -c303)) {
        num4 = 32;
      }
      num2 = num4;
    }
    num = num2;
  }
  return num;
}
function findCurrentHostFiberImpl(sibling) {
  const tag = sibling.tag;
  if (5 !== tag) {
    if (26 !== tag) {
      if (27 !== tag) {
        if (6 !== tag) {
          sibling = sibling.child;
          if (null !== sibling) {
            const tmp3 = findCurrentHostFiberImpl(sibling);
            while (null === tmp3) {
              sibling = sibling.sibling;
            }
            return tmp3;
          }
          return null;
        }
      }
    }
  }
  return sibling;
}
function createCapturedValueAtFiber(value, current) {
  if (typeof value === "object") {
    if (null !== value) {
      value = weakMap.get(value);
      if (undefined === value) {
        const obj3 = { value, source: current, stack: getStackByFiberInDevAndProd(current) };
        const result = weakMap.set(value, obj3);
        value = obj3;
      }
      return value;
    }
  }
  obj = { value, source: current, stack: getStackByFiberInDevAndProd(current) };
  return obj;
}
function pushHostContainer(current, containerInfo) {
  sum = sum + 1;
  closure_85[sum] = closure_95.current;
  closure_95.current = containerInfo;
  const sum1 = sum + 1;
  sum = sum1;
  closure_85[sum1] = closure_94.current;
  closure_94.current = current;
  const sum2 = sum + 1;
  sum = sum2;
  closure_85[sum2] = closure_93.current;
  closure_93.current = null;
  let tmp7 = sum;
  if (0 <= sum) {
    closure_93.current = closure_85[sum];
    closure_85[sum] = null;
    diff = sum - 1;
    sum = diff;
    tmp7 = diff;
  }
  const sum3 = tmp7 + 1;
  sum = sum3;
  closure_85[sum3] = closure_93.current;
  closure_93.current = current;
}
function popHostContainer() {
  let tmp3 = sum;
  if (0 <= sum) {
    tmp.current = closure_85[tmp2];
    closure_85[sum] = null;
    diff = sum - 1;
    sum = diff;
    tmp3 = diff;
  }
  let tmp10 = tmp3;
  if (0 <= tmp3) {
    tmp9.current = closure_85[tmp3];
    closure_85[sum] = null;
    const diff1 = sum - 1;
    sum = diff1;
    tmp10 = diff1;
  }
  if (0 <= tmp10) {
    tmp16.current = closure_85[tmp10];
    closure_85[sum] = null;
    sum = sum - 1;
  }
}
function popHostContext(pendingProps) {
  if (closure_94.current === pendingProps) {
    let tmp4 = sum;
    if (0 <= sum) {
      tmp2.current = closure_85[tmp3];
      closure_85[sum] = null;
      diff = sum - 1;
      sum = diff;
      tmp4 = diff;
    }
    if (0 <= tmp4) {
      tmp.current = closure_85[tmp4];
      closure_85[sum] = null;
      sum = sum - 1;
    }
  }
  if (closure_96.current === pendingProps) {
    if (0 <= sum) {
      tmp14.current = closure_85[tmp15];
      closure_85[sum] = null;
      sum = sum - 1;
    }
    context2._currentValue2 = null;
  }
}
function propagateContextChanges(child, items, current2, arg3) {
  child = child.child;
  if (null !== child) {
    child.return = child;
  }
  if (null !== child) {
    while (true) {
      let tmp3;
      let tmp11;
      let dependencies = child.dependencies;
      if (null !== dependencies) {
        let child2 = child.child;
        iter = dependencies.firstContext;
        tmp3 = child2;
        if (null !== iter) {
          while (true) {
            let num = 0;
            if (0 < items.length) {
              while (iter.context !== items[num]) {
                num = num + 1;
              }
              child.lanes = child.lanes | current2;
              let alternate2 = child.alternate;
              if (null !== alternate2) {
                alternate2.lanes = alternate2.lanes | current2;
              }
              let _return2 = child.return;
              if (null !== _return2) {
                while (true) {
                  let alternate3 = _return2.alternate;
                  if ((_return2.childLanes & current2) !== current2) {
                    _return2.childLanes = _return2.childLanes | current2;
                    if (null !== alternate3) {
                      alternate3.childLanes = alternate3.childLanes | current2;
                    }
                  } else {
                    let tmp10 = null !== alternate3 && (alternate3.childLanes & current2) !== current2;
                    if (tmp10) {
                      alternate3.childLanes = alternate3.childLanes | current2;
                    }
                  }
                  if (_return2 === child) {
                    break;
                  } else {
                    _return2 = _return2.return;
                    if (null === _return2) {
                      break;
                    }
                  }
                }
              }
              tmp3 = child2;
              if (!arg3) {
                tmp3 = null;
              }
            }
            iter = iter.next;
            tmp3 = child2;
          }
        }
      } else if (18 === child.tag) {
        _return = child.return;
        if (null === _return) {
          break;
        } else {
          _return.lanes = _return.lanes | current2;
          let alternate4 = _return.alternate;
          if (null !== alternate4) {
            alternate4.lanes = alternate4.lanes | current2;
          }
          tmp3 = null;
          if (null !== _return) {
            while (true) {
              let alternate = _return.alternate;
              if ((_return.childLanes & current2) !== current2) {
                _return.childLanes = _return.childLanes | current2;
                if (null !== alternate) {
                  alternate.childLanes = alternate.childLanes | current2;
                }
              } else {
                let tmp5 = null !== alternate && (alternate.childLanes & current2) !== current2;
                if (tmp5) {
                  alternate.childLanes = alternate.childLanes | current2;
                }
              }
              tmp3 = null;
              if (_return === child) {
                break;
              } else {
                _return = _return.return;
                tmp3 = null;
                if (null !== _return) {
                  continue;
                } else {
                  break;
                }
                break;
              }
            }
          }
        }
      } else {
        tmp3 = child.child;
      }
      if (null !== tmp3) {
        tmp3.return = child;
        tmp11 = tmp3;
      } else {
        let _return3 = child;
        tmp11 = child;
        if (null !== child) {
          tmp11 = null;
          while (_return3 !== child) {
            let sibling = _return3.sibling;
            if (null !== sibling) {
              sibling.return = _return3.return;
              tmp11 = sibling;
              break;
            } else {
              _return3 = _return3.return;
              tmp11 = _return3;
              if (null !== _return3) {
                continue;
              } else {
                break;
              }
              break;
            }
            continue;
          }
        }
      }
      child = tmp11;
    }
    const _Error = Error;
    throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");
  }
}
function propagateParentContextChanges(arg0, flags, current2, arg3) {
  let flag = false;
  let tmp = null;
  let tmp2 = null;
  _return = flags;
  if (null !== flags) {
    while (true) {
      let tmp6;
      let flag2 = flag;
      if (!flag2) {
        flag2 = true;
        if (!(524288 & _return.flags)) {
          flag2 = flag;
          tmp2 = tmp;
          if (262144 & _return.flags) {
            break;
          }
        }
        break;
      }
      if (10 === _return.tag) {
        let alternate = _return.alternate;
        if (null === alternate) {
          let tmp19 = globalThis;
          let _Error2 = Error;
          let str2 = "Should have a current fiber. This is a bug in React.";
          throw Error("Should have a current fiber. This is a bug in React.");
        } else {
          iter = alternate.memoizedProps;
          tmp6 = tmp;
          if (null !== iter) {
            let type = _return.type;
            tmp6 = tmp;
            if (!is(_return.pendingProps.value, iter.value)) {
              if (null !== tmp) {
                let arr = tmp.push(type);
                items = tmp;
              } else {
                items = [type];
              }
              tmp6 = items;
            }
          }
        }
      } else {
        tmp6 = tmp;
        if (_return === closure_96.current) {
          let alternate2 = _return.alternate;
          if (null === alternate2) {
            let tmp10 = globalThis;
            let _Error = Error;
            let str = "Should have a current fiber. This is a bug in React.";
            throw Error("Should have a current fiber. This is a bug in React.");
          } else {
            tmp6 = tmp;
            if (alternate2.memoizedState.memoizedState !== _return.memoizedState.memoizedState) {
              if (null !== tmp) {
                let arr2 = tmp.push(context2);
                items1 = tmp;
              } else {
                items1 = [context2];
              }
              tmp6 = items1;
            }
          }
        }
      }
      _return = _return.return;
      tmp = tmp6;
      flag = flag2;
      tmp2 = tmp6;
      if (null === _return) {
        break;
      }
    }
  }
  if (null !== tmp2) {
    propagateContextChanges(flags, tmp2, current2, arg3);
  }
  flags.flags = flags.flags | 262144;
}
function releaseCache(cache1) {
  let closure_0 = cache1;
  cache1.refCount = cache1.refCount - 1;
  if (0 === cache1.refCount) {
    obj = _mod287;
    const result = obj.unstable_scheduleCallback(_mod287.unstable_NormalPriority, () => {
      const controller = pooledCache.controller;
      controller.abort();
    });
  }
}
function noop() {}
function ensureRootIsScheduled(c301) {
  const tmp = next !== iter && null === next.next;
  if (tmp) {
    if (null === iter) {
      iter = next;
    } else {
      tmp3.next = next;
      iter = next;
    }
  }
  c113 = true;
  const tmp5 = c112;
  if (!tmp5) {
    c112 = true;
    if (prop) {
      _queueMicrotask(() => {
        if (6 & closure_1_277) {
          obj = iter(closure_1_1[3]);
          const result = obj.unstable_scheduleCallback(iter(closure_1_1[3]).unstable_ImmediatePriority, closure_1_118);
        } else {
          closure_1_119();
        }
      });
    } else {
      obj = _mod287;
      const result = obj.unstable_scheduleCallback(
        _mod287.unstable_ImmediatePriority,
        processRootScheduleInImmediateTask,
      );
    }
  }
}
function flushSyncWorkAcrossRoots_impl(arg0, arg1) {
  let flag4;
  const tmp = c114;
  if (!tmp) {
    if (c113) {
      c114 = true;
      do {
        let flag3 = false;
        flag4 = false;
        if (null !== iter) {
          do {
            let flag5;
            if (!arg1) {
              {
                let num9 = 0;
                if (iter === c278) {
                  num9 = c280;
                }
                let tmp6 = null !== iter.cancelPendingCommit || -1 !== iter.timeoutHandle;
                let tmp19Result = getNextLanes(iter, num9, tmp6);
                let tmp8 = 3 & tmp19Result;
                let tmp9 = !tmp8;
                if (tmp8) {
                  tmp9 = !(iter.pendingLanes & ~iter.suspendedLanes & ~iter.pingedLanes & tmp19Result);
                }
                flag5 = flag3;
                if (!tmp9) {
                  let tmp11 = flushMutationEffects();
                  let tmp13 = flushLayoutEffects();
                  let tmp15 = flushSpawnedWork();
                  flag5 = true;
                  if (!flushPassiveEffects()) {
                    let tmp18 = performWorkOnRoot(iter, tmp19Result, true);
                    flag5 = true;
                  }
                }
              }
            } else {
              flag5 = flag3;
            }
            iter = iter.next;
            flag3 = flag5;
            flag4 = flag5;
          } while (null !== iter);
        }
      } while (flag4);
      c114 = false;
    }
  }
}
function processRootScheduleInImmediateTask() {
  processRootScheduleInMicrotask();
}
function processRootScheduleInMicrotask() {
  c112 = false;
  c113 = false;
  _mod287;
  let tmp3 = null;
  if (null !== iter) {
    do {
      let tmp8;
      next = iter.next;
      let tmp5 = scheduleTaskForRootDuringMicrotask(iter, tmp2);
      if (0 === tmp5) {
        iter.next = null;
        if (null === tmp3) {
          iter = next;
        } else {
          tmp3.next = next;
        }
        tmp8 = tmp3;
        if (null === next) {
          iter = tmp3;
          tmp8 = tmp3;
        }
      } else {
        tmp8 = iter;
        if (3 & tmp5) {
          c113 = true;
          tmp8 = iter;
        }
      }
      tmp3 = tmp8;
      iter = next;
    } while (null !== next);
  }
  const tmp10 = 0 !== c300 && 5 !== tmp9;
  if (!tmp10) {
    flushSyncWorkAcrossRoots_impl(0, false);
  }
  if (0 !== c115) {
    c115 = 0;
  }
}
function scheduleTaskForRootDuringMicrotask(iter, arg1) {
  const expirationTimes = iter.expirationTimes;
  let tmp3 = -62914561 & iter.pendingLanes;
  if (0 < tmp3) {
    do {
      diff = 31 - clz32Fallback(tmp3);
      let tmp6 = 1 << diff;
      let tmp7 = expirationTimes[diff];
      if (-1 === tmp7) {
        let tmp9 = tmp6 & tmp && !(tmp6 & tmp2);
        if (!tmp9) {
          if (1 !== tmp6) {
            if (2 !== tmp6) {
              if (4 !== tmp6) {
                if (8 !== tmp6) {
                  let num;
                  if (64 !== tmp6) {
                    if (16 !== tmp6) {
                      if (32 !== tmp6) {
                        if (128 !== tmp6) {
                          if (256 !== tmp6) {
                            if (512 !== tmp6) {
                              if (1024 !== tmp6) {
                                if (2048 !== tmp6) {
                                  if (4096 !== tmp6) {
                                    if (8192 !== tmp6) {
                                      if (16384 !== tmp6) {
                                        if (32768 !== tmp6) {
                                          if (65536 !== tmp6) {
                                            if (131072 !== tmp6) {
                                              if (262144 !== tmp6) {
                                                if (524288 !== tmp6) {
                                                  if (1048576 !== tmp6) {
                                                    num = -1;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    num = arg1 + 5000;
                  }
                  expirationTimes[diff] = num;
                }
              }
            }
          }
          num = arg1 + 250;
        }
      } else if (tmp7 <= arg1) {
        iter.expiredLanes = iter.expiredLanes | tmp6;
      }
      tmp3 = tmp3 & ~tmp6;
    } while (0 < tmp3);
  }
  let num2 = 0;
  if (iter === c278) {
    num2 = c280;
  }
  const tmp12 = null !== iter.cancelPendingCommit || -1 !== iter.timeoutHandle;
  const tmp10Result = getNextLanes(iter, num2, tmp12);
  const callbackNode = iter.callbackNode;
  if (0 !== tmp10Result) {
    if (iter !== c278) {
      if (null === iter.cancelPendingCommit) {
        if (3 & tmp10Result) {
          if (iter.pendingLanes & ~iter.suspendedLanes & ~iter.pingedLanes & tmp10Result) {
            if (null !== callbackNode) {
              obj = _mod287;
              const result = obj.unstable_cancelCallback(callbackNode);
            }
            iter.callbackPriority = 2;
            iter.callbackNode = null;
            return 2;
          }
        }
        if ((tmp10Result & -tmp10Result) === iter.callbackPriority) {
          return tmp10Result & -tmp10Result;
        } else {
          if (null !== callbackNode) {
            obj2 = _mod287;
            const result1 = obj2.unstable_cancelCallback(callbackNode);
          }
          let num3 = 2;
          if (2 < (tmp10Result & -tmp10Result)) {
            let num4 = 8;
            if (8 < (tmp10Result & -tmp10Result)) {
              let num6 = 268435456;
              if (134217727 & (tmp10Result & -tmp10Result)) {
                num6 = 32;
              }
              num4 = num6;
            }
            num3 = num4;
          }
          if (2 !== num3) {
            let tmp23;
            let unstable_UserBlockingPriority;
            if (8 !== num3) {
              if (32 !== num3) {
                if (268435456 === num3) {
                  tmp23 = require;
                  unstable_UserBlockingPriority = _mod287.unstable_IdlePriority;
                }
              }
              unstable_UserBlockingPriority = _mod287.unstable_NormalPriority;
              tmp23 = require;
            }
            iter.callbackPriority = tmp10Result & -tmp10Result;
            const bindResult = performWorkOnRootViaSchedulerTask.bind(null, iter);
            const tmp23Result = tmp23(287);
            iter.callbackNode = tmp23Result.unstable_scheduleCallback(unstable_UserBlockingPriority, bindResult);
            return tmp10Result & -tmp10Result;
          }
          unstable_UserBlockingPriority = _mod287.unstable_UserBlockingPriority;
          tmp23 = require;
        }
      }
    }
  }
  if (null !== callbackNode) {
    obj4 = _mod287;
    const result2 = obj4.unstable_cancelCallback(callbackNode);
  }
  iter.callbackNode = null;
  iter.callbackPriority = 0;
  return 0;
}
function performWorkOnRootViaSchedulerTask(callbackNode, arg1) {
  if (0 !== c300) {
    if (5 !== tmp) {
      callbackNode.callbackNode = null;
      callbackNode.callbackPriority = 0;
      return null;
    }
  }
  callbackNode = callbackNode.callbackNode;
  flushMutationEffects();
  flushLayoutEffects();
  flushSpawnedWork();
  if (flushPassiveEffects()) {
    if (callbackNode.callbackNode !== callbackNode) {
      return null;
    }
  }
  let num2 = 0;
  if (callbackNode === c278) {
    num2 = c280;
  }
  const tmp6 = null !== callbackNode.cancelPendingCommit || -1 !== callbackNode.timeoutHandle;
  const tmp5Result = getNextLanes(callbackNode, num2, tmp6);
  let tmp8 = null;
  if (0 !== tmp5Result) {
    performWorkOnRoot(callbackNode, tmp5Result, arg1);
    obj = _mod287;
    scheduleTaskForRootDuringMicrotask(callbackNode, obj.unstable_now());
    let bindResult = null;
    if (null != callbackNode.callbackNode) {
      bindResult = null;
      if (callbackNode.callbackNode === callbackNode) {
        bindResult = performWorkOnRootViaSchedulerTask.bind(null, callbackNode);
      }
    }
    tmp8 = bindResult;
  }
  return tmp8;
}
function pingEngtangledActionScope() {
  let length;
  diff = diff - 1;
  if (0 === diff) {
    if (null !== items) {
      if (null !== obj2) {
        tmp4.status = "fulfilled";
      }
      items = null;
      c124 = 0;
      let num2 = 0;
      if (0 < items.length) {
        do {
          let tmp5 = arr[num2]();
          num2 = num2 + 1;
          length = arr.length;
        } while (num2 < length);
      }
    }
  }
}
function shallowEqual(obj, obj2) {
  if (is(obj, obj2)) {
    return true;
  } else {
    if (typeof obj === "object") {
      if (null !== obj) {
        if (typeof obj2 === "object") {
          if (null !== obj2) {
            const _Object = Object;
            const keys = Object.keys(obj);
            const _Object2 = Object;
            if (keys.length !== Object.keys(obj2).length) {
              return false;
            } else {
              let num = 0;
              if (0 < keys.length) {
                while (true) {
                  let tmp = keys[num];
                  if (!hasOwnProperty.call(obj2, tmp)) {
                    break;
                  } else if (!is(obj[tmp], obj2[tmp])) {
                    break;
                  } else {
                    num = num + 1;
                  }
                }
                return false;
              }
              return true;
            }
          }
        }
      }
    }
    return false;
  }
}
function isThenableResolved(status) {
  status = status.status;
  return "fulfilled" === status || "rejected" === status;
}
function trackUsedThenable(items, items2, c139) {
  let closure_0 = items2;
  if (undefined === items[c139]) {
    items.push(items2);
    iter = items2;
  } else {
    iter = items2;
    if (items[c139] !== items2) {
      items2.then(noop, noop);
      closure_0 = tmp;
      iter = tmp;
    }
  }
  const status = iter.status;
  if ("fulfilled" === status) {
    return iter.value;
  } else if ("rejected" === status) {
    const reason2 = iter.reason;
    if (reason2 !== closure_130) {
      if (reason2 !== closure_132) {
        throw reason2;
      }
    }
    const _Error3 = Error;
    throw Error(
      "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
    );
  } else {
    if (typeof iter.status === "string") {
      iter.then(noop, noop);
    } else {
      if (null !== _null4) {
        if (100 < _null4.shellSuspendCounter) {
          const _Error = Error;
          throw Error(
            "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
          );
        }
      }
      iter.status = "pending";
      iter.then(
        (value) => {
          if ("pending" === closure_0.status) {
            closure_0.status = "fulfilled";
            closure_0.value = value;
          }
        },
        (reason) => {
          if ("pending" === closure_0.status) {
            closure_0.status = "rejected";
            closure_0.reason = reason;
          }
        },
      );
    }
    const status2 = iter.status;
    if ("fulfilled" === status2) {
      return iter.value;
    } else if ("rejected" === status2) {
      const reason = iter.reason;
      if (reason !== closure_130) {
        if (reason !== closure_132) {
          throw reason;
        }
      }
      const _Error2 = Error;
      throw Error(
        "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
      );
    } else {
      c137 = iter;
      throw closure_130;
    }
  }
}
function resolveLazy(elementType) {
  try {
    return elementType._init(elementType._payload);
  } catch (promise) {
    if (null !== promise) {
      if (typeof promise === "object") {
        if (typeof promise.then === "function") {
          c137 = promise;
          throw closure_130;
        }
      }
    }
    throw promise;
  }
}
function finishQueueingConcurrentUpdates() {
  c143 = 0;
  c144 = 0;
  let num = 0;
  if (0 < c143) {
    do {
      sum = num + 1;
      closure_142[num] = null;
      let tmp5 = closure_142[sum];
      let sum1 = sum + 1;
      closure_142[sum] = null;
      let tmp7 = closure_142[sum1];
      let sum2 = sum1 + 1;
      closure_142[sum1] = null;
      let tmp9 = closure_142[sum2];
      closure_142[sum2] = null;
      let tmp3 = closure_142[num];
      if (null !== tmp5) {
        if (null !== tmp7) {
          iter = tmp5.pending;
          if (null === iter) {
            tmp7.next = tmp7;
          } else {
            tmp7.next = iter.next;
            iter.next = tmp7;
          }
          tmp5.pending = tmp7;
        }
      }
      if (0 !== tmp9) {
        let tmp11 = markUpdateLaneFromFiberToRoot(tmp3, tmp7, tmp9);
      }
      num = sum2 + 1;
    } while (num < tmp);
  }
}
function enqueueUpdate$1(lanes, lastRenderedReducer, arg2, arg3) {
  c143 = tmp + 1;
  closure_142[+c143] = lanes;
  c143 = tmp2 + 1;
  closure_142[+c143] = lastRenderedReducer;
  c143 = tmp3 + 1;
  closure_142[+c143] = arg2;
  c143 = tmp4 + 1;
  closure_142[+c143] = 0;
  c144 = c144 | 0;
  lanes.lanes = lanes.lanes | 0;
  const alternate = lanes.alternate;
  if (null !== alternate) {
    alternate.lanes = alternate.lanes | 0;
  }
}
function enqueueConcurrentHookUpdate(lanes, pending, pending2, lane) {
  let tmp = lanes;
  c143 = tmp2 + 1;
  closure_142[+c143] = lanes;
  c143 = tmp3 + 1;
  closure_142[+c143] = pending;
  c143 = tmp4 + 1;
  closure_142[+c143] = pending;
  c143 = tmp5 + 1;
  closure_142[+c143] = lane;
  c144 = c144 | lane;
  lanes.lanes = lanes.lanes | lane;
  const alternate = lanes.alternate;
  if (null !== alternate) {
    alternate.lanes = alternate.lanes | lane;
  }
  if (50 < c307) {
    c307 = 0;
    closure_308 = null;
    const _Error = Error;
    throw Error(
      "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.",
    );
  } else {
    _return = tmp.return;
    if (null !== _return) {
      do {
        tmp = _return;
        _return = _return.return;
      } while (null !== tmp6);
    }
    let stateNode = null;
    if (3 === tmp.tag) {
      stateNode = tmp.stateNode;
    }
    return stateNode;
  }
}
function enqueueConcurrentRenderForLane(lanes, retryLane) {
  let tmp = lanes;
  c143 = tmp2 + 1;
  closure_142[+c143] = lanes;
  c143 = tmp3 + 1;
  closure_142[+c143] = null;
  c143 = tmp4 + 1;
  closure_142[+c143] = null;
  c143 = tmp5 + 1;
  closure_142[+c143] = retryLane;
  c144 = c144 | retryLane;
  lanes.lanes = lanes.lanes | retryLane;
  const alternate = lanes.alternate;
  if (null !== alternate) {
    alternate.lanes = alternate.lanes | retryLane;
  }
  if (50 < c307) {
    c307 = 0;
    closure_308 = null;
    const _Error = Error;
    throw Error(
      "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.",
    );
  } else {
    _return = tmp.return;
    if (null !== _return) {
      do {
        tmp = _return;
        _return = _return.return;
      } while (null !== tmp6);
    }
    let stateNode = null;
    if (3 === tmp.tag) {
      stateNode = tmp.stateNode;
    }
    return stateNode;
  }
}
function markUpdateLaneFromFiberToRoot(lanes, arg1, arg2) {
  let tmp = lanes;
  lanes.lanes = lanes.lanes | arg2;
  const alternate = lanes.alternate;
  if (null !== alternate) {
    alternate.lanes = alternate.lanes | arg2;
  }
  _return = tmp.return;
  let flag = false;
  let flag2 = false;
  if (null !== _return) {
    do {
      _return.childLanes = _return.childLanes | arg2;
      let alternate2 = _return.alternate;
      let flag3 = flag;
      let tmp2 = _return;
      if (null !== alternate2) {
        alternate2.childLanes = alternate2.childLanes | arg2;
      }
      let tmp3 = flag3;
      if (22 === _return.tag) {
        let stateNode = _return.stateNode;
        let tmp4 = null === stateNode || 1 & stateNode._visibility;
        if (!tmp4) {
          flag3 = true;
        }
        tmp3 = flag3;
      }
      _return = _return.return;
      flag = tmp3;
      flag2 = tmp3;
      tmp = tmp2;
    } while (null !== _return);
  }
  let tmp5 = null;
  if (3 === tmp.tag) {
    const stateNode2 = tmp.stateNode;
    if (flag2) {
      flag2 = null !== arg1;
    }
    tmp5 = stateNode2;
    if (flag2) {
      diff = 31 - clz32Fallback(arg2);
      const hiddenUpdates = stateNode2.hiddenUpdates;
      if (null === hiddenUpdates[diff]) {
        items = [arg1];
        hiddenUpdates[diff] = items;
      } else {
        hiddenUpdates[diff].push(arg1);
      }
      arg1.lane = 536870912 | arg2;
      tmp5 = stateNode2;
    }
  }
  return tmp5;
}
function enqueueUpdate(_reactInternals, next, arg2) {
  const updateQueue = _reactInternals.updateQueue;
  if (null === updateQueue) {
    return null;
  } else {
    const shared = updateQueue.shared;
    if (2 & closure_277) {
      if (null === shared.pending) {
        next.next = next;
      } else {
        next.next = shared.pending.next;
        shared.pending.next = next;
      }
      shared.pending = next;
      if (50 < c307) {
        c307 = 0;
        closure_308 = null;
        const _Error2 = Error;
        throw Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.",
        );
      } else {
        let _return2 = _reactInternals.return;
        let tmp17 = _reactInternals;
        if (null !== _return2) {
          do {
            tmp17 = _return2;
            _return2 = _return2.return;
          } while (null !== tmp18);
        }
        let stateNode = null;
        if (3 === tmp17.tag) {
          stateNode = tmp17.stateNode;
        }
        markUpdateLaneFromFiberToRoot(_reactInternals, null, arg2);
        return stateNode;
      }
    } else {
      c143 = tmp3 + 1;
      closure_142[+c143] = _reactInternals;
      c143 = tmp5 + 1;
      closure_142[+c143] = shared;
      c143 = tmp7 + 1;
      closure_142[+c143] = next;
      c143 = tmp9 + 1;
      closure_142[+c143] = arg2;
      c144 = c144 | arg2;
      _reactInternals.lanes = _reactInternals.lanes | arg2;
      const alternate = _reactInternals.alternate;
      if (null !== alternate) {
        alternate.lanes = alternate.lanes | arg2;
      }
      if (50 < c307) {
        c307 = 0;
        closure_308 = null;
        const _Error = Error;
        throw Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.",
        );
      } else {
        _return = _reactInternals.return;
        let tmp12 = _reactInternals;
        if (null !== _return) {
          do {
            tmp12 = _return;
            _return = _return.return;
          } while (null !== tmp13);
        }
        let stateNode1 = null;
        if (3 === tmp12.tag) {
          stateNode1 = tmp12.stateNode;
        }
        return stateNode1;
      }
    }
  }
}
function enqueueCapturedUpdate(arg0, next) {
  let alternate;
  let tmp7;
  let updateQueue;
  ({ updateQueue, alternate } = arg0);
  if (null !== alternate) {
    const updateQueue2 = alternate.updateQueue;
    if (updateQueue === updateQueue2) {
      iter = updateQueue.firstBaseUpdate;
      let tmp = null;
      let tmp2 = next;
      let tmp3 = null;
      if (null !== iter) {
        do {
          next = { lane: null, tag: null, payload: null, callback: null, next: null };
          ({ lane: obj.lane, tag: obj.tag, payload: obj.payload } = iter);
          tmp7 = next;
          if (null !== tmp) {
            tmp.next = next;
            tmp7 = tmp3;
          }
          iter = iter.next;
          tmp = next;
          tmp3 = tmp7;
        } while (null !== iter);
        next.next = next;
        tmp2 = tmp7;
      }
      const obj3 = {
        baseState: updateQueue2.baseState,
        firstBaseUpdate: tmp2,
        lastBaseUpdate: next,
        shared: null,
        callbacks: null,
      };
      ({ shared: obj2.shared, callbacks: obj2.callbacks } = updateQueue2);
      arg0.updateQueue = obj3;
    }
  }
  const lastBaseUpdate = updateQueue.lastBaseUpdate;
  if (null === lastBaseUpdate) {
    updateQueue.firstBaseUpdate = next;
  } else {
    lastBaseUpdate.next = next;
  }
  updateQueue.lastBaseUpdate = next;
}
function processUpdateQueue(updateQueue, pendingProps7, stateNode, current2) {
  let firstBaseUpdate;
  let lastBaseUpdate;
  let tmp13;
  let tmp15;
  let tmp16;
  c153 = false;
  updateQueue = updateQueue.updateQueue;
  c150 = false;
  ({ firstBaseUpdate, lastBaseUpdate } = updateQueue);
  let tmp = firstBaseUpdate;
  if (null !== updateQueue.shared.pending) {
    updateQueue.shared.pending = null;
    next = iter.next;
    updateQueue.shared.pending.next = null;
    let tmp2 = next;
    if (null !== lastBaseUpdate) {
      lastBaseUpdate.next = next;
      tmp2 = firstBaseUpdate;
    }
    const alternate = updateQueue.alternate;
    tmp = tmp2;
    if (null !== alternate) {
      const updateQueue2 = alternate.updateQueue;
      const lastBaseUpdate2 = updateQueue2.lastBaseUpdate;
      tmp = tmp2;
      if (lastBaseUpdate2 !== updateQueue.shared.pending) {
        if (null === lastBaseUpdate2) {
          updateQueue2.firstBaseUpdate = next;
        } else {
          lastBaseUpdate2.next = next;
        }
        updateQueue2.lastBaseUpdate = updateQueue.shared.pending;
        tmp = tmp2;
      }
    }
  }
  if (null !== tmp) {
    let tmp14;
    let baseState = updateQueue.baseState;
    let tmp24 = null;
    let tmp25 = null;
    let tmp26 = null;
    let iter2 = tmp;
    let num = 0;
    while (true) {
      let tmp11;
      let tmp3 = -536870913 & iter2.lane;
      let tmp4 = tmp3 !== iter2.lane;
      if (tmp4) {
        tmp11 = (c280 & tmp3) === tmp3;
      } else {
        tmp11 = (current2 & tmp3) === tmp3;
      }
      if (tmp11) {
        let callResult;
        let tmp17 = 0 !== tmp3;
        if (0 !== tmp3) {
          tmp17 = tmp3 === c124;
        }
        if (tmp17) {
          c153 = true;
        }
        let tmp19 = tmp24;
        if (null !== tmp24) {
          let obj3 = { lane: 0, tag: null, payload: null, callback: null, next: null };
          ({ tag: obj2.tag, payload: obj2.payload } = iter2);
          tmp24.next = obj3;
          tmp19 = obj3;
        }
        let tag = iter2.tag;
        if (1 === tag) {
          let payload2 = iter2.payload;
          callResult = payload2;
          if (typeof payload2 === "function") {
            callResult = payload2.call(stateNode, baseState, pendingProps7);
          }
        } else {
          if (3 === tag) {
            updateQueue.flags = (-65537 & updateQueue.flags) | 128;
          } else if (0 !== tag) {
            callResult = baseState;
            if (2 === tag) {
              c150 = true;
              callResult = baseState;
            }
          }
          let payload = iter2.payload;
          let callResult1 = payload;
          if (typeof payload === "function") {
            callResult1 = payload.call(stateNode, baseState, pendingProps7);
          }
          callResult = baseState;
          if (null != callResult1) {
            callResult = assign({}, baseState, callResult1);
          }
        }
        let callback = iter2.callback;
        tmp16 = callResult;
        lastBaseUpdate = tmp19;
        tmp13 = tmp25;
        tmp14 = tmp26;
        tmp15 = num;
        if (null !== callback) {
          updateQueue.flags = updateQueue.flags | 64;
          if (tmp4) {
            updateQueue.flags = updateQueue.flags | 8192;
          }
          let callbacks = updateQueue.callbacks;
          if (null === callbacks) {
            items = [callback];
            updateQueue.callbacks = items;
            tmp16 = callResult;
            lastBaseUpdate = tmp19;
            tmp13 = tmp25;
            tmp14 = tmp26;
            tmp15 = num;
          } else {
            let arr = callbacks.push(callback);
            tmp16 = callResult;
            lastBaseUpdate = tmp19;
            tmp13 = tmp25;
            tmp14 = tmp26;
            tmp15 = num;
          }
        }
      } else {
        lastBaseUpdate = { lane: tmp3, tag: null, payload: null, callback: null, next: null };
        ({ tag: obj.tag, payload: obj.payload, callback: obj.callback } = iter2);
        tmp13 = lastBaseUpdate;
        tmp14 = baseState;
        if (null !== tmp24) {
          tmp24.next = lastBaseUpdate;
          tmp13 = tmp25;
          tmp14 = tmp26;
        }
        tmp15 = num | tmp3;
        tmp16 = baseState;
      }
      iter2 = iter2.next;
      baseState = tmp16;
      tmp24 = lastBaseUpdate;
      tmp25 = tmp13;
      tmp26 = tmp14;
      num = tmp15;
      if (null !== iter2) {
        continue;
      } else {
        let iter3 = updateQueue.shared.pending;
        if (null === iter3) {
          break;
        } else {
          iter2 = iter3.next;
          iter3.next = null;
          updateQueue.lastBaseUpdate = iter3;
          updateQueue.shared.pending = null;
          baseState = tmp16;
          tmp24 = lastBaseUpdate;
          tmp25 = tmp13;
          tmp26 = tmp14;
          num = tmp15;
          continue;
        }
      }
      continue;
    }
    if (null === lastBaseUpdate) {
      tmp14 = tmp16;
    }
    updateQueue.baseState = tmp14;
    updateQueue.firstBaseUpdate = tmp13;
    updateQueue.lastBaseUpdate = lastBaseUpdate;
    if (null === tmp) {
      updateQueue.shared.lanes = 0;
    }
    closure_288 = closure_288 | tmp15;
    updateQueue.lanes = tmp15;
    updateQueue.memoizedState = tmp16;
  }
}
function callCallback(arr, arg1) {
  if (typeof arr !== "function") {
    const _Error = Error;
    throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + arr);
  } else {
    arr.call(arg1);
  }
}
function commitCallbacks(updateQueue, stateNode1) {
  const callbacks = updateQueue.callbacks;
  if (null !== callbacks) {
    updateQueue.callbacks = null;
    let num = 0;
    if (0 < callbacks.length) {
      while (typeof callbacks[num] === "function") {
        let callResult = obj.call(stateNode1);
        num = num + 1;
      }
      const _Error = Error;
      throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + callbacks[num]);
    }
  }
}
function pushOffscreenSuspenseHandler(tag) {
  if (22 === tag.tag) {
    sum = sum + 1;
    ({ current: closure_85[tmp10], current: closure_162.current } = closure_162);
    const sum1 = sum + 1;
    sum = sum1;
    closure_85[sum1] = closure_159.current;
    closure_159.current = tag;
    if (null === c160) {
      c160 = tag;
    }
  } else {
    const sum2 = sum + 1;
    sum = sum2;
    ({ current: closure_85[tmp3], current: closure_162.current } = closure_162);
    const sum3 = sum + 1;
    sum = sum3;
    ({ current: closure_85[tmp7], current: closure_159.current } = closure_159);
  }
}
function findFirstSuspended(alternate4) {
  let sibling;
  let tmp = alternate4;
  if (null !== alternate4) {
    while (true) {
      if (13 === tmp.tag) {
        memoizedState = tmp.memoizedState;
        if (null !== memoizedState) {
          if (null === memoizedState.dehydrated) {
            return tmp;
          } else {
            let tmp6 = globalThis;
            let _Error = Error;
            let str =
              "The current renderer does not support hydration. This error is likely caused by a bug in React. Please file an issue.";
            throw Error(
              "The current renderer does not support hydration. This error is likely caused by a bug in React. Please file an issue.",
            );
          }
        }
      } else if (19 !== tmp.tag) {
        if (null !== tmp.child) {
          tmp.child.return = tmp;
          sibling = tmp.child;
        }
        tmp = sibling;
      } else if (128 & tmp.flags) {
        break;
      }
      if (tmp !== alternate4) {
        let tmp3 = tmp;
        let tmp4 = tmp;
        if (null === tmp.sibling) {
          while (null !== tmp3.return) {
            if (tmp3.return === alternate4) {
              break;
            } else {
              _return = tmp3.return;
              tmp3 = _return;
              tmp4 = _return;
              continue;
            }
          }
          return null;
        }
        ({ return: tmp4.sibling.return, sibling } = tmp4);
      }
    }
    return tmp;
  }
  return null;
}
function areHookInputsEqual(arg0, arg1) {
  if (null === arg1) {
    return false;
  } else {
    if (0 < arg1.length) {
      let num3 = 0;
      if (0 < arg0.length) {
        while (is(arg0[num3], arg1[num3])) {
          sum = num3 + 1;
          if (sum < arg1.length) {
            num3 = sum;
          }
        }
        return false;
      }
    }
    return true;
  }
}
function renderWithHooks(memoizedState, updateQueue, TransitionAwareHostComponent, memoizedProps, ref, current2) {
  c164 = current2;
  let c165 = updateQueue;
  updateQueue.memoizedState = null;
  updateQueue.updateQueue = null;
  updateQueue.lanes = 0;
  if (null !== memoizedState) {
    let tmp2;
    if (null !== memoizedState.memoizedState) {
      tmp2 = obj10;
    }
    tmp.H = tmp2;
    let tmp6 = TransitionAwareHostComponent(memoizedProps, ref);
    c170 = false;
    const tmp7 = c169;
    if (tmp7) {
      c165 = updateQueue;
      let num3 = 0;
      while (true) {
        if (c169) {
          items1 = null;
        }
        closure_171 = 0;
        c169 = false;
        if (25 <= num3) {
          break;
        } else {
          let c166 = null;
          if (null != updateQueue.updateQueue) {
            updateQueue = updateQueue.updateQueue;
            updateQueue.lastEffect = null;
            updateQueue.events = null;
            updateQueue.stores = null;
            if (null != updateQueue.memoCache) {
              updateQueue.memoCache.index = 0;
            }
          }
          num3 = num3 + 1;
          __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = obj11;
          tmp6 = TransitionAwareHostComponent(memoizedProps, ref);
        }
      }
      const _Error = Error;
      throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
    }
    finishRenderingHooks(memoizedState);
    return tmp6;
  }
  tmp2 = closure_210;
}
function finishRenderingHooks(dependencies) {
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = obj9;
  c164 = 0;
  let c165 = null;
  const tmp = null !== _null2 && null !== _null2.next;
  _null2 = null;
  c168 = false;
  closure_171 = 0;
  items1 = null;
  if (tmp) {
    const _Error = Error;
    throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
  } else {
    const tmp3 = null === dependencies || c222;
    if (!tmp3) {
      dependencies = dependencies.dependencies;
      let tmp4 = null !== dependencies;
      if (tmp4) {
        iter = dependencies.firstContext;
        let flag = false;
        if (null !== iter) {
          flag = true;
          while (is(iter.context._currentValue2, iter.memoizedValue)) {
            iter = iter.next;
            flag = false;
            if (null === iter) {
              break;
            }
          }
        }
        tmp4 = flag;
      }
      if (tmp4) {
        c222 = true;
      }
    }
  }
}
function TransitionAwareHostComponent() {
  const H = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H;
  const first = H.useState()[0];
  let tmp2 = first;
  if (typeof first.then === "function") {
    closure_171 = closure_171 + 1;
    let tmp3 = items1;
    const tmp11 = closure_171;
    if (null === items1) {
      items = [];
      items1 = items;
      tmp3 = items;
    }
    const tmp5 = trackUsedThenable(tmp3, first, tmp11);
    tmp2 = tmp5;
    if (null === (null === obj ? _null.memoizedState : obj.next)) {
      const alternate = _null.alternate;
      if (null !== alternate) {
        let tmp7;
        if (null !== alternate.memoizedState) {
          tmp7 = obj10;
        }
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = tmp7;
        tmp2 = tmp5;
      }
      tmp7 = closure_210;
    }
  }
  memoizedState = null;
  const first1 = H.useState()[0];
  if (null !== _null2) {
    memoizedState = _null2.memoizedState;
  }
  if (memoizedState !== first1) {
    _null.flags = _null.flags | 1024;
  }
  return tmp2;
}
function resetHooksOnUnwind(memoizedState) {
  const tmp = c168;
  if (tmp) {
    iter = memoizedState.memoizedState;
    if (null !== iter) {
      do {
        let queue = iter.queue;
        if (null !== queue) {
          queue.pending = null;
        }
        iter = iter.next;
      } while (null !== iter);
    }
    c168 = false;
  }
  c164 = 0;
  let c165 = null;
  let c166 = null;
  c169 = false;
  closure_171 = 0;
  items1 = null;
}
function mountWorkInProgressHook() {
  next = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  if (null === next) {
    c165.memoizedState = next;
  } else {
    tmp.next = next;
  }
  return next;
}
function updateWorkInProgressHook() {
  let next2;
  if (null === _null2) {
    const alternate = _null.alternate;
    memoizedState = null;
    if (null !== alternate) {
      memoizedState = alternate.memoizedState;
    }
    next = memoizedState;
  } else {
    next = iter.next;
  }
  if (null === next) {
    next2 = _null.memoizedState;
  } else {
    next2 = iter2.next;
  }
  if (null !== next2) {
    next = next2;
    _null2 = next;
  } else if (null === next) {
    if (null === _null.alternate) {
      const _Error2 = Error;
      throw Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.");
    } else {
      const _Error = Error;
      throw Error("Rendered more hooks than during the previous render.");
    }
  } else {
    next = {
      memoizedState: next.memoizedState,
      baseState: _null2.baseState,
      baseQueue: _null2.baseQueue,
      queue: _null2.queue,
      next: null,
    };
    _null2 = next;
    if (null === next) {
      _null.memoizedState = next;
    } else {
      tmp7.next = next;
    }
  }
  return next;
}
function useThenable(items2) {
  closure_171 = closure_171 + 1;
  let tmp2 = items1;
  const tmp = closure_171;
  if (null === items1) {
    items = [];
    items1 = items;
    tmp2 = items;
  }
  const tmp3 = trackUsedThenable(tmp2, items2, tmp);
  if (null === (null === obj ? _null2.memoizedState : obj.next)) {
    const alternate = _null2.alternate;
    if (null !== alternate) {
      let tmp6;
      if (null !== alternate.memoizedState) {
        tmp6 = obj10;
      }
      tmp5.H = tmp6;
    }
    tmp6 = closure_210;
  }
  return tmp3;
}
function basicStateReducer(baseState, fn) {
  let tmp = fn;
  if (typeof fn === "function") {
    tmp = fn(baseState);
  }
  return tmp;
}
function updateReducer(basicStateReducer) {
  return updateReducerImpl(updateWorkInProgressHook(), c166, basicStateReducer);
}
function updateReducerImpl(queue, c166, basicStateReducer) {
  let flag4;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  queue = queue.queue;
  if (null === queue) {
    const _Error = Error;
    throw Error(
      "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)",
    );
  } else {
    queue.lastRenderedReducer = basicStateReducer;
    iter = iter3;
    if (null !== queue.pending) {
      if (null !== queue.baseQueue) {
        queue.baseQueue.next = queue.pending.next;
        queue.pending.next = queue.baseQueue.next;
      }
      c166.baseQueue = queue.pending;
      queue.pending = null;
      iter = iter4;
    }
    const baseState = queue.baseState;
    if (null === iter) {
      queue.memoizedState = baseState;
    } else {
      next = iter.next;
      let flag2 = false;
      let iter2 = next;
      let tmp3 = null;
      let tmp4 = null;
      let tmp5 = null;
      let tmp6 = baseState;
      while (true) {
        let tmp15;
        let tmp22;
        let tmp21;
        let tmp17;
        let tmp18;
        let tmp7 = -536870913 & iter2.lane;
        if (tmp7 !== iter2.lane) {
          tmp15 = (c280 & tmp7) === tmp7;
        } else {
          tmp15 = (c164 & tmp7) === tmp7;
        }
        if (tmp15) {
          let next3;
          let tmp23;
          let tmp24;
          let flag3;
          let revertLane = iter2.revertLane;
          if (0 === revertLane) {
            let tmp32 = tmp3;
            if (null !== tmp3) {
              obj5 = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: null,
                hasEagerState: null,
                eagerState: null,
                next: null,
              };
              ({ action: obj3.action, hasEagerState: obj3.hasEagerState, eagerState: obj3.eagerState } = iter2);
              tmp3.next = obj5;
              tmp32 = obj5;
            }
            flag3 = flag2;
            obj6 = tmp32;
            tmp23 = tmp4;
            tmp24 = tmp5;
            if (tmp7 === c124) {
              flag3 = true;
              obj6 = tmp32;
              tmp23 = tmp4;
              tmp24 = tmp5;
            }
            let action = iter2.action;
            if (c170) {
              let tmp35 = basicStateReducer(tmp6, action);
            }
            tmp22 = iter2.hasEagerState ? iter2.eagerState : basicStateReducer(tmp6, action);
            tmp21 = flag3;
            next = obj6;
            tmp17 = tmp23;
            tmp18 = tmp24;
          } else if ((c164 & revertLane) === revertLane) {
            let next2 = iter2.next;
            flag4 = flag2;
            next3 = next2;
            tmp28 = tmp3;
            tmp29 = tmp4;
            tmp30 = tmp5;
            tmp31 = tmp6;
            if (revertLane === c124) {
              flag4 = true;
              next3 = next2;
              tmp28 = tmp3;
              tmp29 = tmp4;
              tmp30 = tmp5;
              tmp31 = tmp6;
            }
          } else {
            obj6 = {
              lane: 0,
              revertLane: null,
              gesture: null,
              action: null,
              hasEagerState: null,
              eagerState: null,
              next: null,
            };
            ({
              revertLane: obj2.revertLane,
              action: obj2.action,
              hasEagerState: obj2.hasEagerState,
              eagerState: obj2.eagerState,
            } = iter2);
            tmp23 = obj6;
            tmp24 = tmp6;
            if (null !== tmp3) {
              tmp3.next = obj6;
              tmp23 = tmp4;
              tmp24 = tmp5;
            }
            _null.lanes = _null.lanes | revertLane;
            closure_288 = closure_288 | revertLane;
            flag3 = flag2;
          }
          if (null === next3) {
            break;
          } else {
            flag2 = flag4;
            tmp3 = tmp28;
            tmp4 = tmp29;
            tmp5 = tmp30;
            tmp6 = tmp31;
            iter2 = next3;
            if (next3 === next) {
              break;
            }
          }
        } else {
          next = {
            lane: tmp7,
            revertLane: null,
            gesture: null,
            action: null,
            hasEagerState: null,
            eagerState: null,
            next: null,
          };
          ({
            revertLane: obj.revertLane,
            gesture: obj.gesture,
            action: obj.action,
            hasEagerState: obj.hasEagerState,
            eagerState: obj.eagerState,
          } = iter2);
          tmp17 = next;
          tmp18 = tmp6;
          if (null !== tmp3) {
            tmp3.next = next;
            tmp17 = tmp4;
            tmp18 = tmp5;
          }
          _null.lanes = _null.lanes | tmp7;
          closure_288 = closure_288 | tmp7;
          tmp21 = flag2;
          tmp22 = tmp6;
        }
        next3 = iter2.next;
        flag4 = tmp21;
        tmp28 = next;
        tmp29 = tmp17;
        tmp30 = tmp18;
        tmp31 = tmp22;
      }
      let tmp36 = tmp31;
      if (null !== tmp28) {
        tmp28.next = tmp29;
        tmp36 = tmp30;
      }
      if (!is(tmp31, queue.memoizedState)) {
        c222 = true;
        if (flag4) {
          if (null !== obj2) {
            throw obj2;
          }
        }
      }
      queue.memoizedState = tmp31;
      queue.baseState = tmp36;
      queue.baseQueue = tmp28;
      queue.lastRenderedState = tmp31;
    }
    if (null === iter) {
      queue.lanes = 0;
    }
    items = [queue.memoizedState, queue.dispatch];
    return items;
  }
}
function updateStoreInstance(lanes, arg1, value, getSnapshot) {
  arg1.value = value;
  arg1.getSnapshot = getSnapshot;
  if (checkIfSnapshotChanged(arg1)) {
    const tmp3 = enqueueConcurrentRenderForLane(lanes, 2);
    if (null !== tmp3) {
      scheduleUpdateOnFiber(tmp3, lanes, 2);
    }
  }
}
function subscribeToStore(arg0, arg1, fn) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return fn(() => {
    if (checkIfSnapshotChanged(closure_1)) {
      const tmp3 = enqueueConcurrentRenderForLane(closure_0, 2);
      if (null !== tmp3) {
        scheduleUpdateOnFiber(tmp3, closure_0, 2);
      }
    }
  });
}
function checkIfSnapshotChanged(arg0) {
  try {
    return !is(tmp2, tmp());
  } catch (err) {
    return true;
  }
}
function mountStateImpl(fn) {
  const tmp = mountWorkInProgressHook();
  let tmp2 = fn;
  if (typeof fn === "function") {
    const tmp9 = fn();
    tmp2 = tmp9;
    if (c170) {
      setIsStrictModeForDevtools(true);
      try {
        fn();
        setIsStrictModeForDevtools(false);
        tmp2 = tmp9;
      } catch (tmp7) {
        setIsStrictModeForDevtools(false);
        throw tmp7;
      }
    }
  }
  tmp.baseState = tmp2;
  tmp.memoizedState = tmp2;
  const queue = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: basicStateReducer,
    lastRenderedState: tmp2,
  };
  tmp.queue = queue;
  return tmp;
}
function dispatchActionState(alternate, action, fn, fn2, payload) {
  alternate = alternate.alternate;
  let tmp2 = alternate === c165;
  if (!tmp2) {
    tmp2 = null !== alternate && alternate === tmp;
  }
  if (tmp2) {
    const _Error = Error;
    throw Error("Cannot update form state while rendering.");
  } else {
    action = action.action;
    if (null !== action) {
      const pending = {
        payload,
        action,
        next: null,
        isTransition: true,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then(arg0) {
          const listeners = obj.listeners;
          listeners.push(arg0);
        },
      };
      if (null !== __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T) {
        fn(true);
      } else {
        pending.isTransition = false;
      }
      fn2(pending);
      if (null === action.pending) {
        action.pending = pending;
        pending.next = pending;
        runActionStateAction(action, pending);
      } else {
        pending.next = action.pending.next;
        action.pending.next = pending;
        action.pending = pending;
      }
    }
  }
}
function runActionStateAction(state, next) {
  let action;
  let payload;
  ({ action, payload } = next);
  state = state.state;
  if (next.isTransition) {
    const T = {};
    __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
    try {
      const actionResult = action(state, payload);
      const S = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S;
      if (null !== S) {
        tmp10(T, actionResult);
      }
      handleActionReturnValue(state, next, actionResult);
      const tmp20 = null !== T && null !== T.types;
      if (tmp20) {
        T.types = T.types;
      }
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
    } catch (tmp23) {
      const tmp26 = null !== T && null !== T.types;
      if (tmp26) {
        T.types = T.types;
      }
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
      throw tmp23;
    }
  } else {
    try {
      const actionResult1 = action(state, payload);
      handleActionReturnValue(state, next, actionResult1);
    } catch (tmp5) {
      onActionError(state, next, tmp5);
    }
  }
}
function handleActionReturnValue(pending, listeners, actionResult) {
  let length;
  if (null !== actionResult) {
    if (typeof actionResult === "object") {
      if (typeof actionResult.then === "function") {
        actionResult.then(
          (value) => {
            let length;
            listeners.status = "fulfilled";
            listeners.value = value;
            listeners = listeners.listeners;
            let num = 0;
            if (0 < listeners.length) {
              do {
                let tmp2 = listeners[num]();
                num = num + 1;
                length = listeners.length;
              } while (num < length);
            }
            pending.state = value;
            if (null !== pending.pending) {
              if (pending.pending.next === pending.pending) {
                pending.pending = null;
              } else {
                next = iter2.next;
                pending.pending.next = next;
                runActionStateAction(pending, next);
              }
            }
          },
          (reason) => {
            let length;
            iter = closure_1;
            pending.pending = null;
            if (null !== pending.pending) {
              do {
                iter.status = "rejected";
                iter.reason = reason;
                listeners = iter.listeners;
                let num3 = 0;
                if (0 < listeners.length) {
                  do {
                    let tmp4 = listeners[num3]();
                    num3 = num3 + 1;
                    length = listeners.length;
                  } while (num3 < length);
                }
                iter = iter.next;
              } while (iter !== tmp2);
            }
            pending.action = null;
          },
        );
      }
    }
  }
  listeners.status = "fulfilled";
  listeners.value = actionResult;
  listeners = listeners.listeners;
  let num = 0;
  if (0 < listeners.length) {
    do {
      let tmp = listeners[num]();
      num = num + 1;
      length = listeners.length;
    } while (num < length);
  }
  pending.state = actionResult;
  iter = pending.pending;
  if (null !== iter) {
    const iter2 = iter.next;
    if (iter2 === iter) {
      pending.pending = null;
    } else {
      next = iter2.next;
      iter.next = next;
      let tmp3 = runActionStateAction(pending, next);
    }
  }
}
function onActionError(pending, arg1, reason) {
  let length;
  pending.pending = null;
  if (null !== pending.pending) {
    iter = arg1;
    do {
      iter.status = "rejected";
      iter.reason = reason;
      let listeners = iter.listeners;
      let num3 = 0;
      if (0 < listeners.length) {
        do {
          let tmp3 = listeners[num3]();
          num3 = num3 + 1;
          length = listeners.length;
        } while (num3 < length);
      }
      iter = iter.next;
    } while (iter !== tmp);
  }
  pending.action = null;
}
function actionStateReducer(arg0, arg1) {
  return arg1;
}
function updateActionStateImpl(queue, c166, memoizedState) {
  const first = updateReducerImpl(queue, c166, actionStateReducer)[0];
  if (typeof first === "object") {
    if (null !== first) {
      let tmp2;
      if (typeof first.then === "function") {
        try {
          tmp2 = useThenable(first);
        } catch (tmp14) {
          if (tmp14 === closure_130) {
            throw closure_132;
          } else {
            throw tmp14;
          }
        }
      }
      const tmp6 = updateWorkInProgressHook();
      queue = tmp6.queue;
      const dispatch = queue.dispatch;
      if (memoizedState !== tmp6.memoizedState) {
        _null.flags = _null.flags | 2048;
        pushSimpleEffect(9, { destroy: "r" }, actionStateActionEffect.bind(null, queue, memoizedState), null);
      }
      items = [tmp2, dispatch, tmp];
      return items;
    }
  }
  tmp2 = first;
}
function actionStateActionEffect(arg0, action) {
  arg0.action = action;
}
function pushSimpleEffect(arg0, inst, create, arg3) {
  const lastEffect = { tag: 9, create, deps: null, inst, next: null };
  let updateQueue = _null.updateQueue;
  if (null === updateQueue) {
    obj2 = { lastEffect: null, events: null, stores: null, memoCache: null };
    _null.updateQueue = obj2;
    updateQueue = obj2;
  }
  if (null === updateQueue.lastEffect) {
    lastEffect.next = lastEffect;
    updateQueue.lastEffect = lastEffect;
  } else {
    updateQueue.lastEffect.next = lastEffect;
    lastEffect.next = updateQueue.lastEffect.next;
    updateQueue.lastEffect = lastEffect;
  }
  return lastEffect;
}
function updateEffectImpl(arg0, tag, create, combined) {
  const tmp = updateWorkInProgressHook();
  let tmp2 = null;
  if (undefined !== combined) {
    tmp2 = combined;
  }
  const inst = tmp.memoizedState.inst;
  if (null !== _null2) {
    if (null !== tmp2) {
      const deps = _null2.memoizedState.deps;
      let flag = false;
      if (null !== deps) {
        flag = true;
        if (0 < deps.length) {
          let num2 = 0;
          flag = true;
          if (0 < tmp2.length) {
            flag = false;
            while (is(tmp2[num2], deps[num2])) {
              sum = num2 + 1;
              flag = true;
              if (sum >= deps.length) {
                break;
              } else {
                num2 = sum;
                flag = true;
                if (sum >= tmp2.length) {
                  break;
                }
              }
            }
          }
        }
      }
      if (flag) {
        obj2 = { tag, create, deps: tmp2, inst, next: null };
        let updateQueue2 = _null.updateQueue;
        if (null === updateQueue2) {
          const obj3 = { lastEffect: null, events: null, stores: null, memoCache: null };
          _null.updateQueue = obj3;
          updateQueue2 = obj3;
        }
        if (null === updateQueue2.lastEffect) {
          obj2.next = obj2;
          updateQueue2.lastEffect = obj2;
        } else {
          updateQueue2.lastEffect.next = obj2;
          obj2.next = updateQueue2.lastEffect.next;
          updateQueue2.lastEffect = obj2;
        }
        tmp.memoizedState = obj2;
      }
    }
  }
  _null.flags = _null.flags | arg0;
  memoizedState = { tag: 1 | tag, create, deps: tmp2, inst, next: null };
  let updateQueue = _null.updateQueue;
  if (null === updateQueue) {
    obj4 = { lastEffect: null, events: null, stores: null, memoCache: null };
    _null.updateQueue = obj4;
    updateQueue = obj4;
  }
  if (null === updateQueue.lastEffect) {
    memoizedState.next = memoizedState;
    updateQueue.lastEffect = memoizedState;
  } else {
    updateQueue.lastEffect.next = memoizedState;
    memoizedState.next = updateQueue.lastEffect.next;
    updateQueue.lastEffect = memoizedState;
  }
  tmp.memoizedState = memoizedState;
}
function imperativeHandleEffect(fn, fn2) {
  let closure_0 = fn2;
  if (typeof fn2 === "function") {
    let closure_1 = fn2(fn());
    return () => {
      if (typeof closure_1 === "function") {
        tmp();
      } else {
        fn2(null);
      }
    };
  } else {
    const tmp = null;
    if (null != fn2) {
      fn2.current = fn();
      return () => {
        fn2.current = null;
      };
    }
  }
}
function updateDeferredValueImpl(arg0, memoizedState, memoizedState2, memoizedState3) {
  let tmp2 = memoizedState;
  if (!is(memoizedState, memoizedState)) {
    let tmp8;
    if (null !== closure_157.current) {
      let tmp17 = memoizedState3;
      if (undefined !== memoizedState3) {
        if (1073741824 & c164) {
          tmp8 = tmp17;
          if (!is(tmp17, memoizedState)) {
            c222 = true;
            tmp8 = tmp17;
          }
        }
        arg0.memoizedState = tmp17;
        if (0 === closure_291) {
          if (536870912 & c280) {
            closure_291 = 536870912;
          } else {
            c79 = tmp22;
            const tmp21 = c79;
            if (!(3932160 & (c79 << 1))) {
              c79 = 262144;
            }
            closure_291 = tmp21;
          }
        }
        current2 = closure_159.current;
        if (null !== current2) {
          current2.flags = current2.flags | 32;
        }
        _null.lanes = _null.lanes | closure_291;
        closure_288 = closure_288 | closure_291;
      }
      arg0.memoizedState = memoizedState;
      tmp17 = memoizedState;
    } else {
      if (42 & c164) {
        if (0 === closure_291) {
          if (536870912 & c280) {
            closure_291 = 536870912;
          } else {
            c79 = tmp12;
            const tmp11 = c79;
            if (!(3932160 & (c79 << 1))) {
              c79 = 262144;
            }
            closure_291 = tmp11;
          }
        }
        current = closure_159.current;
        if (null !== current) {
          current.flags = current.flags | 32;
        }
        _null.lanes = _null.lanes | closure_291;
        closure_288 = closure_288 | closure_291;
        tmp8 = memoizedState;
      }
      c222 = true;
      arg0.memoizedState = memoizedState;
      tmp8 = memoizedState;
    }
    tmp2 = tmp8;
  }
  return tmp2;
}
function startTransition(alternate, pending, action, action2, fn) {
  function chainThenableValue(promise, action) {
    const value = action;
    let closure_1 = [];
    obj = {
      status: "pending",
      value: null,
      reason: null,
      then(arg0) {
        closure_1.push(arg0);
      },
    };
    promise.then(
      () => {
        let length;
        obj.status = "fulfilled";
        obj.value = value;
        let num = 0;
        if (0 < closure_1.length) {
          do {
            let tmp3 = closure_1[num](value);
            num = num + 1;
            length = closure_1.length;
          } while (num < length);
        }
      },
      (reason) => {
        let length;
        obj.status = "rejected";
        obj.reason = reason;
        let num = 0;
        if (0 < closure_1.length) {
          do {
            let tmp2 = closure_1[num](undefined);
            num = num + 1;
            length = closure_1.length;
          } while (num < length);
        }
      },
    );
    return obj;
  }
  let num = 8;
  if (0 !== closure_363) {
    num = 8;
    if (8 > closure_363) {
      num = tmp;
    }
  }
  closure_363 = num;
  const T = {};
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
  let tmp3 = dispatchOptimisticSetState(alternate, false, pending, action);
  try {
    const promise = fn();
    const S = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S;
    if (null !== S) {
      tmp5(T, promise);
    }
    if (null !== promise) {
      if (typeof promise === "object") {
        if (typeof promise.then === "function") {
          const tmp21 = chainThenableValue(promise, action);
          dispatchSetStateInternal(alternate, pending, tmp21, requestUpdateLane(alternate));
        }
        closure_363 = tmp;
        const tmp27 = null !== T && null !== T.types;
        if (tmp27) {
          T.types = T.types;
        }
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
      }
    }
    dispatchSetStateInternal(alternate, pending, action, requestUpdateLane(alternate));
  } catch (tmp28) {
    closure_363 = tmp;
    const tmp30 = null !== T && null !== T.types;
    if (tmp30) {
      T.types = T.types;
    }
    __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
    throw tmp28;
  }
}
function refreshCache(_reactInternals) {
  let obj3;
  let tmp13;
  _return = _reactInternals.return;
  if (null !== _return) {
    const tag = _return.tag;
    while (24 !== tag) {
      if (3 === tag) {
        break;
      } else {
        _return = _return.return;
      }
    }
    const tmp3 = requestUpdateLane(_return);
    obj = { lane: tmp3, tag: 0, payload: obj2, callback: null, next: null };
    const tmp5 = enqueueUpdate(_return, obj, tmp3);
    if (null !== tmp5) {
      scheduleUpdateOnFiber(tmp5, _return, tmp3);
      const updateQueue = _return.updateQueue;
      if (null !== updateQueue) {
        const shared = updateQueue.shared;
        if (4194048 & tmp3) {
          shared.lanes = tmp3 | (shared.lanes & tmp5.pendingLanes);
          let tmp7 = tmp5.entangledLanes | tmp6;
          tmp5.entangledLanes = tmp7;
          const entanglements = tmp5.entanglements;
          while (tmp7) {
            diff = 31 - clz32Fallback(tmp7);
            let tmp10 = 1 << diff;
            if ((tmp10 & tmp6) | (entanglements[diff] & tmp6)) {
              entanglements[diff] = entanglements[diff] | tmp6;
            }
            tmp7 = tmp7 & ~tmp10;
          }
        }
      }
    }
    obj2 = { cache: obj3 };
    const self = this;
    const self2 = this;
    obj3 = { controller: tmp13, data: map, refCount: 0 };
    const _Map = Map;
    const self3 = this;
    const self4 = this;
    tmp13 = new closure_106();
    map = new Map();
  }
}
function dispatchReducerAction(alternate, pending, action) {
  const tmp = requestUpdateLane(alternate);
  pending = { lane: tmp, revertLane: 0, gesture: null, action, hasEagerState: false, eagerState: null, next: null };
  alternate = alternate.alternate;
  let tmp3 = alternate === c165;
  if (!tmp3) {
    tmp3 = null !== alternate && alternate === tmp2;
  }
  if (tmp3) {
    c168 = true;
    c169 = true;
    if (null === pending.pending) {
      pending.next = pending;
    } else {
      pending.next = pending.pending.next;
      pending.pending.next = pending;
    }
    pending.pending = pending;
  } else {
    const tmp11 = enqueueConcurrentHookUpdate(alternate, pending, pending, tmp);
    if (null !== tmp11) {
      scheduleUpdateOnFiber(tmp11, alternate, tmp);
      if (4194048 & tmp) {
        pending.lanes = tmp | (pending.lanes & tmp11.pendingLanes);
        let tmp14 = tmp11.entangledLanes | tmp13;
        tmp11.entangledLanes = tmp14;
        const entanglements = tmp11.entanglements;
        while (tmp14) {
          diff = 31 - clz32Fallback(tmp14);
          let tmp17 = 1 << diff;
          if ((tmp17 & tmp13) | (entanglements[diff] & tmp13)) {
            entanglements[diff] = entanglements[diff] | tmp13;
          }
          tmp14 = tmp14 & ~tmp17;
        }
      }
    }
  }
}
function dispatchSetState(alternate, lastRenderedReducer, action) {
  dispatchSetStateInternal(alternate, lastRenderedReducer, action, requestUpdateLane(alternate));
}
function dispatchSetStateInternal(alternate, lastRenderedReducer, action, lane) {
  obj = { lane, revertLane: 0, gesture: null, action, hasEagerState: false, eagerState: null, next: null };
  if (isRenderPhaseUpdate(alternate)) {
    enqueueRenderPhaseUpdate(lastRenderedReducer, obj);
  } else {
    alternate = alternate.alternate;
    if (0 === alternate.lanes) {
      if (null === alternate) {
        lastRenderedReducer = lastRenderedReducer.lastRenderedReducer;
        if (null !== lastRenderedReducer) {
          try {
            const lastRenderedState = lastRenderedReducer.lastRenderedState;
            const lastRenderedReducerResult = lastRenderedReducer(lastRenderedState, action);
            obj.hasEagerState = true;
            obj.eagerState = lastRenderedReducerResult;
            if (is(lastRenderedReducerResult, lastRenderedState)) {
              enqueueUpdate$1(alternate, lastRenderedReducer, obj, 0);
              if (null === c278) {
                finishQueueingConcurrentUpdates();
              }
              return false;
            }
          } catch (err) {}
        }
      }
    }
    const tmp17 = enqueueConcurrentHookUpdate(alternate, lastRenderedReducer, obj, lane);
    if (null !== tmp17) {
      scheduleUpdateOnFiber(tmp17, alternate, lane);
      entangleTransitionUpdate(tmp17, lastRenderedReducer, lane);
      return true;
    }
  }
  return false;
}
function dispatchOptimisticSetState(alternate, arg1, pending, action) {
  let tmp = c115;
  if (0 === c115) {
    let tmp2 = c124;
    if (0 === c124) {
      c78 = tmp4;
      tmp2 = c78;
      if (!(261888 & (c78 << 1))) {
        c78 = 256;
        tmp2 = tmp3;
      }
    }
    c115 = tmp2;
    tmp = tmp2;
  }
  alternate = alternate.alternate;
  let tmp6 = alternate === c165;
  obj = { lane: 2, revertLane: tmp, gesture: null, action, hasEagerState: false, eagerState: null, next: null };
  if (!tmp6) {
    tmp6 = null !== alternate && alternate === tmp5;
  }
  if (tmp6) {
    const tmp17 = arg1;
    if (tmp17) {
      const _Error = Error;
      throw Error("Cannot update optimistic state while rendering.");
    }
  } else {
    const tmp13 = enqueueConcurrentHookUpdate(alternate, pending, obj, 2);
    if (null !== tmp13) {
      scheduleUpdateOnFiber(tmp13, alternate, 2);
    }
  }
}
function isRenderPhaseUpdate(alternate) {
  alternate = alternate.alternate;
  let tmp2 = alternate === c165;
  if (!tmp2) {
    tmp2 = null !== alternate && alternate === tmp;
  }
  return tmp2;
}
function enqueueRenderPhaseUpdate(pending, next) {
  c168 = true;
  c169 = true;
  if (null === pending.pending) {
    next.next = next;
  } else {
    next.next = pending.pending.next;
    pending.pending.next = next;
  }
  pending.pending = next;
}
function entangleTransitionUpdate(pendingLanes, lanes, lane) {
  if (4194048 & lane) {
    lanes.lanes = lane | (lanes.lanes & pendingLanes.pendingLanes);
    let tmp4 = pendingLanes.entangledLanes | tmp3;
    pendingLanes.entangledLanes = tmp4;
    const entanglements = pendingLanes.entanglements;
    while (tmp4) {
      diff = 31 - clz32Fallback(tmp4);
      let tmp7 = 1 << diff;
      if ((tmp7 & tmp3) | (entanglements[diff] & tmp3)) {
        entanglements[diff] = entanglements[diff] | tmp3;
      }
      tmp4 = tmp4 & ~tmp7;
    }
  }
}
function checkShouldComponentUpdate(
  stateNode,
  defaultProps,
  obj,
  memoizedProps,
  memoizedState,
  memoizedState2,
  _currentValue2,
) {
  let result;
  stateNode = stateNode.stateNode;
  if (typeof stateNode.shouldComponentUpdate === "function") {
    result = stateNode.shouldComponentUpdate(memoizedProps, memoizedState2, _currentValue2);
  } else {
    const prototype = defaultProps.prototype;
    result = !prototype;
    if (prototype) {
      result = !defaultProps.prototype.isPureReactComponent;
    }
    if (!result) {
      let flag = true;
      if (!is(obj, memoizedProps)) {
        flag = false;
        if (typeof obj === "object") {
          flag = false;
          if (null !== obj) {
            flag = false;
            if (typeof memoizedProps === "object") {
              flag = false;
              if (null !== memoizedProps) {
                const _Object = Object;
                const keys = Object.keys(obj);
                const _Object2 = Object;
                flag = false;
                if (keys.length === Object.keys(memoizedProps).length) {
                  let num = 0;
                  flag = true;
                  if (0 < keys.length) {
                    while (true) {
                      let tmp4 = keys[num];
                      flag = false;
                      if (!hasOwnProperty.call(memoizedProps, tmp4)) {
                        break;
                      } else {
                        flag = false;
                        if (!is(obj[tmp4], memoizedProps[tmp4])) {
                          break;
                        } else {
                          sum = num + 1;
                          num = sum;
                          flag = true;
                          if (sum >= keys.length) {
                            break;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      let tmp8 = !flag;
      if (flag) {
        let flag2 = true;
        if (!is(memoizedState, memoizedState2)) {
          flag2 = false;
          if (typeof memoizedState === "object") {
            flag2 = false;
            if (null !== memoizedState) {
              flag2 = false;
              if (typeof memoizedState2 === "object") {
                flag2 = false;
                if (null !== memoizedState2) {
                  const _Object3 = Object;
                  const keys1 = Object.keys(memoizedState);
                  const _Object4 = Object;
                  flag2 = false;
                  if (keys1.length === Object.keys(memoizedState2).length) {
                    let num3 = 0;
                    flag2 = true;
                    if (0 < keys1.length) {
                      while (true) {
                        let tmp11 = keys1[num3];
                        flag2 = false;
                        if (!hasOwnProperty.call(memoizedState2, tmp11)) {
                          break;
                        } else {
                          flag2 = false;
                          if (!is(memoizedState[tmp11], memoizedState2[tmp11])) {
                            break;
                          } else {
                            let sum1 = num3 + 1;
                            num3 = sum1;
                            flag2 = true;
                            if (sum1 >= keys1.length) {
                              break;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        tmp8 = !flag2;
      }
      result = tmp8;
    }
  }
  return result;
}
function constructClassInstance(_reactInternals, type3, memoizedProps) {
  let tmp = closure_87;
  const contextType = type3.contextType;
  let tmp2 = typeof contextType === "object";
  if (typeof contextType === "object") {
    tmp2 = null !== contextType;
  }
  if (tmp2) {
    const _currentValue2 = contextType._currentValue2;
    next = { context: contextType, memoizedValue: _currentValue2, next: null };
    if (null === obj2) {
      if (null === _null) {
        const _Error = Error;
        throw Error(
          "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
        );
      } else {
        obj2 = { lanes: 0, firstContext: next };
        _null.dependencies = obj2;
        _null.flags = _null.flags | 524288;
        tmp = _currentValue2;
      }
    } else {
      tmp4.next = next;
      obj2 = next;
      tmp = _currentValue2;
    }
  }
  const tmp6 = new type3(memoizedProps, tmp);
  let state = null;
  if (null !== tmp6.state) {
    state = null;
    if (undefined !== tmp6.state) {
      state = tmp6.state;
    }
  }
  _reactInternals.memoizedState = state;
  tmp6.updater = updater;
  _reactInternals.stateNode = tmp6;
  tmp6._reactInternals = _reactInternals;
  return tmp6;
}
function mountClassInstance(baseState, type3, props, current2) {
  const stateNode = baseState.stateNode;
  stateNode.props = props;
  stateNode.state = baseState.memoizedState;
  stateNode.refs = {};
  baseState.updateQueue = {
    baseState: baseState.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
    callbacks: null,
  };
  const contextType = type3.contextType;
  if (typeof contextType === "object") {
    let tmp;
    if (null !== contextType) {
      const _currentValue2 = contextType._currentValue2;
      next = { context: contextType, memoizedValue: _currentValue2, next: null };
      if (null === obj2) {
        if (null === _null) {
          const _Error = Error;
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
          );
        } else {
          obj2 = { lanes: 0, firstContext: next };
          _null.dependencies = obj2;
          _null.flags = _null.flags | 524288;
          tmp = _currentValue2;
        }
      } else {
        tmp3.next = next;
        obj2 = next;
        tmp = _currentValue2;
      }
    }
    stateNode.context = tmp;
    stateNode.state = baseState.memoizedState;
    const getDerivedStateFromProps = type3.getDerivedStateFromProps;
    if (typeof getDerivedStateFromProps === "function") {
      memoizedState = baseState.memoizedState;
      const derivedStateFromProps = getDerivedStateFromProps(props, memoizedState);
      let tmp5 = memoizedState;
      if (null != derivedStateFromProps) {
        tmp5 = assign({}, memoizedState, derivedStateFromProps);
      }
      baseState.memoizedState = tmp5;
      if (0 === baseState.lanes) {
        baseState.updateQueue.baseState = tmp5;
      }
      stateNode.state = baseState.memoizedState;
    }
    let tmp6 =
      typeof type3.getDerivedStateFromProps === "function" || typeof stateNode.getSnapshotBeforeUpdate === "function";
    if (!tmp6) {
      const UNSAFE_componentWillMount = stateNode.UNSAFE_componentWillMount;
      let tmp7 = typeof UNSAFE_componentWillMount !== "function";
      if (typeof UNSAFE_componentWillMount !== "function") {
        tmp7 = typeof stateNode.componentWillMount !== "function";
      }
      tmp6 = tmp7;
    }
    if (!tmp6) {
      const state = stateNode.state;
      if (typeof stateNode.componentWillMount === "function") {
        stateNode.componentWillMount();
      }
      if (typeof stateNode.UNSAFE_componentWillMount === "function") {
        const result = stateNode.UNSAFE_componentWillMount();
      }
      if (state !== stateNode.state) {
        updater.enqueueReplaceState(stateNode, stateNode.state, null);
      }
      processUpdateQueue(baseState, props, stateNode, current2);
      if (c153) {
        if (null !== obj2) {
          throw obj2;
        }
      }
      stateNode.state = baseState.memoizedState;
    }
    if (typeof stateNode.componentDidMount === "function") {
      baseState.flags = baseState.flags | 4194308;
    }
  }
  tmp = closure_87;
}
function resolveClassComponentProps(type, memoizedProps) {
  let tmp2 = memoizedProps;
  if ("ref" in memoizedProps) {
    obj = {};
    tmp2 = obj;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp2 = obj;
      while (keys[tmp] !== undefined) {
        if ("ref" === tmp5) {
          continue;
        } else {
          obj[tmp5] = memoizedProps[tmp5];
          continue;
        }
        continue;
      }
    }
  }
  const defaultProps = type.defaultProps;
  let tmp6 = tmp2;
  if (defaultProps) {
    let tmp7 = tmp2;
    if (tmp2 === memoizedProps) {
      tmp7 = assign({}, tmp2);
    }
    tmp6 = tmp7;
    const keys1 = Object.keys();
    if (keys1 !== undefined) {
      tmp6 = tmp7;
      while (keys1[tmp] !== undefined) {
        if (undefined !== tmp7[tmp11]) {
          continue;
        } else {
          tmp7[tmp11] = defaultProps[tmp11];
          continue;
        }
        continue;
      }
    }
  }
  return tmp6;
}
function defaultOnRecoverableError(arg0) {
  closure_89(arg0);
}
function logUncaughtError(onUncaughtError, capturedValueAtFiber) {
  let closure_0;
  try {
    obj = { componentStack: capturedValueAtFiber.stack };
    onUncaughtError.onUncaughtError(capturedValueAtFiber.value, obj);
  } catch (tmp4) {
    const require = tmp4;
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      throw _require;
    });
  }
}
function logCaughtError(onCaughtError, tag, stack) {
  let closure_0;
  let stateNode;
  try {
    obj = { componentStack: stack.stack, errorBoundary: stateNode };
    stateNode = null;
    onCaughtError = onCaughtError.onCaughtError;
    const value = stack.value;
    if (1 === tag.tag) {
      stateNode = tag.stateNode;
    }
    onCaughtError(value, obj);
  } catch (tmp6) {
    const require = tmp6;
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      throw _require;
    });
  }
}
function updateForwardRef(updateQueue, ref, type, pendingProps, current2) {
  let tmp14;
  const render = type.render;
  let tmp2 = pendingProps;
  if ("ref" in pendingProps) {
    obj = {};
    tmp2 = obj;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp2 = obj;
      while (keys[tmp] !== undefined) {
        if ("ref" === tmp5) {
          continue;
        } else {
          obj[tmp5] = pendingProps[tmp5];
          continue;
        }
        continue;
      }
    }
  }
  let c102 = ref;
  const dependencies = ref.dependencies;
  if (null !== dependencies) {
    dependencies.firstContext = null;
  }
  const tmp6 = renderWithHooks(updateQueue, ref.ref, render, tmp2, ref.ref, current2);
  if (null !== updateQueue) {
    let child;
    if (!c222) {
      ref.ref.updateQueue = updateQueue.updateQueue;
      ref.ref.flags = ref.ref.flags & -2053;
      updateQueue.lanes = updateQueue.lanes & ~current2;
      child = bailoutOnAlreadyFinishedWork(updateQueue, ref, current2);
    }
    return child;
  }
  ref.ref.flags = ref.ref.flags | 1;
  if (null === updateQueue) {
    tmp14 = closure_141(ref, null, tmp6, current2);
  } else {
    tmp14 = closure_140(ref, updateQueue.child, tmp6, current2);
  }
  ref.ref.child = tmp14;
  child = ref.child;
}
function updateMemoComponent(child, mode, type, pendingProps, current2) {
  if (null === child) {
    type = type.type;
    if (typeof type === "function") {
      const prototype = type.prototype;
      let tmp8 = !prototype;
      if (prototype) {
        tmp8 = !prototype.isReactComponent;
      }
      if (tmp8) {
        if (undefined === type.defaultProps) {
          let tmp15;
          if (null === type.compare) {
            mode.tag = 15;
            mode.type = type;
            tmp15 = updateSimpleMemoComponent(child, mode, type, pendingProps, current2);
          }
          return tmp15;
        }
      }
    }
    const tmp20 = createFiberFromTypeAndProps(type.type, null, pendingProps, 0, mode.mode, current2);
    tmp20.ref = mode.ref;
    tmp20.return = mode;
    mode.child = tmp20;
    tmp15 = tmp20;
  } else {
    child = child.child;
    let tmp4 = child.lanes & current2;
    if (!tmp4) {
      const dependencies = child.dependencies;
      let tmp = null === dependencies;
      if (!tmp) {
        iter = dependencies.firstContext;
        let flag = false;
        if (null !== iter) {
          flag = true;
          while (is(iter.context._currentValue2, iter.memoizedValue)) {
            iter = iter.next;
            flag = false;
            if (null === iter) {
              break;
            }
          }
        }
        tmp = !flag;
      }
      tmp4 = !tmp;
    }
    if (!tmp4) {
      let compare = type.compare;
      const memoizedProps = child.memoizedProps;
      if (null === compare) {
        compare = shallowEqual;
      }
      if (compare(memoizedProps, pendingProps)) {
        if (child.ref === mode.ref) {
          return bailoutOnAlreadyFinishedWork(child, mode, current2);
        }
      }
    }
    mode.flags = mode.flags | 1;
    const tmp7 = createWorkInProgress(child, pendingProps);
    tmp7.ref = mode.ref;
    tmp7.return = mode;
    mode.child = tmp7;
    return tmp7;
  }
}
function updateSimpleMemoComponent(memoizedProps, ref, type, pendingProps, current2) {
  let tmp19;
  let tmp = pendingProps;
  if (null !== memoizedProps) {
    memoizedProps = memoizedProps.memoizedProps;
    let flag = true;
    if (!is(memoizedProps, pendingProps)) {
      flag = false;
      if (typeof memoizedProps === "object") {
        flag = false;
        if (null !== memoizedProps) {
          flag = false;
          if (typeof pendingProps === "object") {
            flag = false;
            if (null !== pendingProps) {
              const _Object = Object;
              const keys = Object.keys(memoizedProps);
              const _Object2 = Object;
              flag = false;
              if (keys.length === Object.keys(pendingProps).length) {
                let num = 0;
                flag = true;
                if (0 < keys.length) {
                  while (true) {
                    let tmp2 = keys[num];
                    flag = false;
                    if (!hasOwnProperty.call(pendingProps, tmp2)) {
                      break;
                    } else {
                      flag = false;
                      if (!is(memoizedProps[tmp2], pendingProps[tmp2])) {
                        break;
                      } else {
                        sum = num + 1;
                        num = sum;
                        flag = true;
                        if (sum >= keys.length) {
                          break;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    tmp = pendingProps;
    if (flag) {
      tmp = pendingProps;
      if (memoizedProps.ref === ref.ref) {
        c222 = false;
        ref.pendingProps = memoizedProps;
        let tmp9 = memoizedProps.lanes & current2;
        if (!tmp9) {
          const dependencies = memoizedProps.dependencies;
          let tmp6 = null === dependencies;
          if (!tmp6) {
            iter = dependencies.firstContext;
            let flag2 = false;
            if (null !== iter) {
              flag2 = true;
              while (is(iter.context._currentValue2, iter.memoizedValue)) {
                iter = iter.next;
                flag2 = false;
                if (null === iter) {
                  break;
                }
              }
            }
            tmp6 = !flag2;
          }
          tmp9 = !tmp6;
        }
        if (tmp9) {
          tmp = memoizedProps;
          if (131072 & memoizedProps.flags) {
            c222 = true;
            tmp = memoizedProps;
          }
        } else {
          ref.lanes = memoizedProps.lanes;
          return bailoutOnAlreadyFinishedWork(memoizedProps, ref, current2);
        }
      }
    }
  }
  let c102 = ref;
  const dependencies2 = ref.dependencies;
  if (null !== dependencies2) {
    dependencies2.firstContext = null;
  }
  const tmp11 = renderWithHooks(memoizedProps, ref, type, tmp, undefined, current2);
  if (null !== memoizedProps) {
    let child;
    const tmp13 = c222;
    if (!tmp13) {
      ref.updateQueue = memoizedProps.updateQueue;
      ref.flags = ref.flags & -2053;
      memoizedProps.lanes = memoizedProps.lanes & ~current2;
      child = bailoutOnAlreadyFinishedWork(memoizedProps, ref, current2);
    }
    return child;
  }
  ref.flags = ref.flags | 1;
  if (null === memoizedProps) {
    tmp19 = closure_141(ref, null, tmp11, current2);
  } else {
    tmp19 = closure_140(ref, memoizedProps.child, tmp11, current2);
  }
  ref.child = tmp19;
  child = ref.child;
}
function updateOffscreenComponent(memoizedState, stateNode, current2, pendingProps) {
  let tmp88;
  const children = pendingProps.children;
  memoizedState = null;
  if (null !== memoizedState) {
    memoizedState = memoizedState.memoizedState;
  }
  const tmp4 = null === memoizedState && null === stateNode.stateNode;
  if (tmp4) {
    stateNode.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null };
  }
  if ("hidden" === pendingProps.mode) {
    if (128 & stateNode.flags) {
      let num8;
      let tmp94 = current2;
      if (null !== memoizedState) {
        tmp94 = memoizedState.baseLanes | current2;
      }
      if (null !== memoizedState) {
        let sibling = memoizedState.child;
        stateNode.child = sibling;
        let num9 = 0;
        let num10 = 0;
        if (null !== sibling) {
          do {
            num9 = num9 | sibling.lanes | sibling.childLanes;
            sibling = sibling.sibling;
            num10 = num9;
          } while (null !== sibling);
        }
        num8 = num10 & ~tmp94;
      } else {
        stateNode.child = null;
        num8 = 0;
      }
      deferHiddenOffscreenComponent(memoizedState, stateNode, tmp94, current2, num8);
      return null;
    } else if (1 & stateNode.mode) {
      if (536870912 & current2) {
        stateNode.memoizedState = { baseLanes: 0, cachePool: null };
        if (null !== memoizedState) {
          let cachePool1 = null;
          if (null !== memoizedState) {
            cachePool1 = memoizedState.cachePool;
          }
          sum = sum + 1;
          closure_85[sum] = closure_128.current;
          closure_128.current = null === cachePool1 ? closure_128.current : cachePool1.pool;
        }
        if (null !== memoizedState) {
          const sum1 = sum + 1;
          sum = sum1;
          closure_85[sum1] = closure_158.current;
          closure_158.current = current2;
          const sum2 = sum + 1;
          sum = sum2;
          closure_85[sum2] = closure_157.current;
          closure_157.current = memoizedState;
          current2 = current2 | memoizedState.baseLanes;
        } else {
          const sum3 = sum + 1;
          sum = sum3;
          closure_85[sum3] = closure_158.current;
          closure_158.current = current2;
          const sum4 = sum + 1;
          sum = sum4;
          ({ current: closure_85[tmp73], current: closure_157.current } = closure_157);
        }
        pushOffscreenSuspenseHandler(stateNode);
      } else {
        stateNode.lanes = 536870912;
        let tmp55 = current2;
        if (null !== memoizedState) {
          tmp55 = memoizedState.baseLanes | current2;
        }
        deferHiddenOffscreenComponent(memoizedState, stateNode, tmp55, current2, 536870912);
        return null;
      }
    } else {
      stateNode.memoizedState = { baseLanes: 0, cachePool: null };
      if (null !== memoizedState) {
        const sum5 = sum + 1;
        sum = sum5;
        ({ current: closure_85[tmp42], current: closure_128.current } = closure_128);
      }
      const sum6 = sum + 1;
      sum = sum6;
      closure_85[sum6] = closure_158.current;
      closure_158.current = current2;
      const sum7 = sum + 1;
      sum = sum7;
      ({ current: closure_85[tmp51], current: closure_157.current } = closure_157);
      pushOffscreenSuspenseHandler(stateNode);
    }
  } else if (null !== memoizedState) {
    const cachePool = memoizedState.cachePool;
    const sum8 = sum + 1;
    sum = sum8;
    closure_85[sum8] = closure_128.current;
    closure_128.current = null === cachePool ? closure_128.current : cachePool.pool;
    const sum9 = sum + 1;
    sum = sum9;
    closure_85[sum9] = closure_158.current;
    closure_158.current = current2;
    const sum10 = sum + 1;
    sum = sum10;
    closure_85[sum10] = closure_157.current;
    closure_157.current = memoizedState;
    current2 = current2 | memoizedState.baseLanes;
    const sum11 = sum + 1;
    sum = sum11;
    ({ current: closure_85[tmp36], current: closure_162.current } = closure_162);
    const sum12 = sum + 1;
    sum = sum12;
    ({ current: closure_85[tmp39], current: closure_159.current } = closure_159);
    stateNode.memoizedState = null;
  } else {
    if (null !== memoizedState) {
      const sum13 = sum + 1;
      sum = sum13;
      ({ current: closure_85[tmp7], current: closure_128.current } = closure_128);
    }
    const sum14 = sum + 1;
    sum = sum14;
    closure_85[sum14] = closure_158.current;
    closure_158.current = current2;
    const sum15 = sum + 1;
    sum = sum15;
    ({ current: closure_85[tmp16], current: closure_157.current } = closure_157);
    const sum16 = sum + 1;
    sum = sum16;
    ({ current: closure_85[tmp19], current: closure_162.current } = closure_162);
    const sum17 = sum + 1;
    sum = sum17;
    ({ current: closure_85[tmp22], current: closure_159.current } = closure_159);
  }
  if (null === memoizedState) {
    tmp88 = closure_141(stateNode, null, children, current2);
  } else {
    tmp88 = closure_140(stateNode, memoizedState.child, children, current2);
  }
  stateNode.child = tmp88;
  return stateNode.child;
}
function deferHiddenOffscreenComponent(memoizedState, stateNode, baseLanes, current2, childLanes) {
  let pooledCache = closure_128.current;
  if (null === pooledCache) {
    pooledCache = _null4.pooledCache;
  }
  let tmp3 = null;
  if (null !== pooledCache) {
    tmp3 = { parent: context._currentValue2, pool: pooledCache };
    obj = { parent: context._currentValue2, pool: pooledCache };
  }
  stateNode.memoizedState = { baseLanes, cachePool: tmp3 };
  if (null !== memoizedState) {
    sum = sum + 1;
    ({ current: closure_85[tmp7], current: tmp.current } = closure_128);
  }
  const sum1 = sum + 1;
  sum = sum1;
  closure_85[sum1] = closure_158.current;
  closure_158.current = current2;
  const sum2 = sum + 1;
  sum = sum2;
  ({ current: closure_85[tmp10], current: closure_157.current } = closure_157);
  pushOffscreenSuspenseHandler(stateNode);
  if (null !== memoizedState) {
    propagateParentContextChanges(0, stateNode, current2, true);
  }
  stateNode.childLanes = childLanes;
  return null;
}
function retryActivityComponentWithoutHydrating(child, pendingProps, current2) {
  closure_140(pendingProps, child.child, null, current2);
  pendingProps = pendingProps.pendingProps;
  pendingProps = { mode: pendingProps.mode, children: pendingProps.children, child: obj4, memoizedState: null };
  const mode = pendingProps.mode;
  Object.create(FiberNode.prototype);
  obj4 = {
    tag: 22,
    key: null,
    elementType: null,
    type: null,
    stateNode: null,
    return: pendingProps,
    child: null,
    sibling: null,
    index: 0,
    ref: null,
    refCleanup: null,
    pendingProps,
    memoizedProps: null,
    updateQueue: null,
    memoizedState: null,
    dependencies: null,
    mode,
    flags: obj4.flags | 2,
    subtreeFlags: 0,
    deletions: null,
    lanes: 0,
    childLanes: 0,
    alternate: null,
    lanes: 0,
    ref: pendingProps.ref,
  };
  let tmp5 = sum;
  if (0 <= sum) {
    tmp3.current = closure_85[tmp4];
    closure_85[sum] = null;
    diff = sum - 1;
    sum = diff;
    tmp5 = diff;
  }
  if (c160 === pendingProps) {
    c160 = null;
  }
  if (0 <= tmp5) {
    tmp10.current = closure_85[tmp5];
    closure_85[sum] = null;
    sum = sum - 1;
  }
  return obj4;
}
function replayFunctionComponent(alternate, dependencies, pendingProps, render, ref, c280) {
  let c102 = dependencies;
  dependencies = dependencies.dependencies;
  if (null !== dependencies) {
    dependencies.firstContext = null;
  }
  dependencies.updateQueue = null;
  let c165 = dependencies;
  let num = 0;
  while (true) {
    if (c169) {
      items1 = null;
    }
    closure_171 = 0;
    c169 = false;
    if (25 <= num) {
      break;
    } else {
      let c166 = null;
      if (null != dependencies.updateQueue) {
        let updateQueue = dependencies.updateQueue;
        updateQueue.lastEffect = null;
        updateQueue.events = null;
        updateQueue.stores = null;
        if (null != updateQueue.memoCache) {
          updateQueue.memoCache.index = 0;
        }
      }
      num = num + 1;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = obj11;
      let tmp5 = render(pendingProps, ref);
      let tmp6 = c169;
      if (tmp6) {
        continue;
      } else {
        let tmp18;
        let tmp10 = finishRenderingHooks(alternate);
        let tmp11 = null === alternate;
        if (!tmp11) {
          let child;
          if (!c222) {
            dependencies.updateQueue = alternate.updateQueue;
            dependencies.flags = dependencies.flags & -2053;
            alternate.lanes = alternate.lanes & ~c280;
            child = bailoutOnAlreadyFinishedWork(alternate, dependencies, c280);
          }
          return child;
        }
        dependencies.flags = dependencies.flags | 1;
        if (tmp11) {
          tmp18 = closure_141(dependencies, null, tmp5, c280);
        } else {
          tmp18 = closure_140(dependencies, alternate.child, tmp5, c280);
        }
        dependencies.child = tmp18;
        child = dependencies.child;
      }
    }
  }
  throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
}
function updateClassComponent(updateQueue, dependencies, defaultProps, memoizedProps, current2) {
  let flag3;
  let memoizedProps2;
  let stateNode;
  _null = dependencies;
  obj2 = null;
  dependencies = dependencies.dependencies;
  if (null !== dependencies) {
    dependencies.firstContext = null;
  }
  if (null === dependencies.stateNode) {
    const tmp98 = !(1 & dependencies.mode) && null !== updateQueue;
    if (tmp98) {
      updateQueue.alternate = null;
      dependencies.alternate = null;
      dependencies.flags = dependencies.flags | 2;
    }
    constructClassInstance(dependencies, defaultProps, memoizedProps);
    mountClassInstance(dependencies, defaultProps, memoizedProps, current2);
    flag3 = true;
  } else if (null === updateQueue) {
    ({ stateNode, memoizedProps: memoizedProps2 } = dependencies);
    let tmp55 = memoizedProps2;
    if ("ref" in memoizedProps2) {
      obj2 = {};
      tmp55 = obj2;
      const keys = Object.keys();
      if (keys !== undefined) {
        tmp55 = obj2;
        while (keys[tmp] !== undefined) {
          if ("ref" === tmp58) {
            continue;
          } else {
            obj2[tmp58] = memoizedProps2[tmp58];
            continue;
          }
          continue;
        }
      }
    }
    const defaultProps2 = defaultProps.defaultProps;
    let tmp59 = tmp55;
    if (defaultProps2) {
      let tmp60 = tmp55;
      if (tmp55 === memoizedProps2) {
        tmp60 = assign({}, tmp55);
      }
      tmp59 = tmp60;
      const keys1 = Object.keys();
      if (keys1 !== undefined) {
        tmp59 = tmp60;
        while (keys1[tmp] !== undefined) {
          if (undefined !== tmp60[tmp64]) {
            continue;
          } else {
            tmp60[tmp64] = defaultProps2[tmp64];
            continue;
          }
          continue;
        }
      }
    }
    stateNode.props = tmp59;
    const contextType2 = defaultProps.contextType;
    let tmp65 = closure_87;
    let tmp66 = typeof contextType2 === "object";
    context2 = stateNode.context;
    if (typeof contextType2 === "object") {
      tmp66 = null !== contextType2;
    }
    if (tmp66) {
      const _currentValue22 = contextType2._currentValue2;
      const obj3 = { context: contextType2, memoizedValue: _currentValue22, next: null };
      if (null === obj2) {
        if (null === _null) {
          const _Error2 = Error;
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
          );
        } else {
          obj2 = obj3;
          obj4 = { lanes: 0, firstContext: obj3 };
          _null.dependencies = obj4;
          _null.flags = _null.flags | 524288;
          tmp65 = _currentValue22;
        }
      } else {
        tmp68.next = obj3;
        obj2 = obj3;
        tmp65 = _currentValue22;
      }
    }
    const getDerivedStateFromProps2 = defaultProps.getDerivedStateFromProps;
    let tmp69 =
      typeof getDerivedStateFromProps2 === "function" || typeof stateNode.getSnapshotBeforeUpdate === "function";
    let tmp70 = tmp69;
    const pendingProps2 = dependencies.pendingProps;
    if (!tmp69) {
      const UNSAFE_componentWillReceiveProps2 = stateNode.UNSAFE_componentWillReceiveProps;
      let tmp71 = typeof UNSAFE_componentWillReceiveProps2 !== "function";
      if (typeof UNSAFE_componentWillReceiveProps2 !== "function") {
        tmp71 = typeof stateNode.componentWillReceiveProps !== "function";
      }
      tmp70 = tmp71;
    }
    if (!tmp70) {
      const tmp73 = pendingProps2 !== memoizedProps2 || context2 !== tmp65;
      if (tmp73) {
        const state2 = stateNode.state;
        if (typeof stateNode.componentWillReceiveProps === "function") {
          const result = stateNode.componentWillReceiveProps(memoizedProps, tmp65);
        }
        if (typeof stateNode.UNSAFE_componentWillReceiveProps === "function") {
          const result1 = stateNode.UNSAFE_componentWillReceiveProps(memoizedProps, tmp65);
        }
        if (stateNode.state !== state2) {
          updater.enqueueReplaceState(stateNode, stateNode.state, null);
        }
      }
    }
    c150 = false;
    const memoizedState3 = dependencies.memoizedState;
    stateNode.state = memoizedState3;
    processUpdateQueue(dependencies, memoizedProps, stateNode, current2);
    if (c153) {
      if (null !== obj2) {
        throw obj2;
      }
    }
    let memoizedState4 = dependencies.memoizedState;
    if (pendingProps2 === memoizedProps2) {
      if (memoizedState3 === memoizedState4) {
        const tmp83 = c150;
        if (!tmp83) {
          flag3 = false;
          if (typeof stateNode.componentDidMount === "function") {
            dependencies.flags = dependencies.flags | 4194308;
            flag3 = false;
          }
        }
      }
    }
    if (typeof getDerivedStateFromProps2 === "function") {
      const memoizedState6 = dependencies.memoizedState;
      const derivedStateFromProps2 = getDerivedStateFromProps2(memoizedProps, memoizedState6);
      let tmp85 = memoizedState6;
      if (null != derivedStateFromProps2) {
        tmp85 = assign({}, memoizedState6, derivedStateFromProps2);
      }
      dependencies.memoizedState = tmp85;
      if (0 === dependencies.lanes) {
        dependencies.updateQueue.baseState = tmp85;
      }
      memoizedState4 = dependencies.memoizedState;
    }
    const tmp86 =
      c150 ||
      checkShouldComponentUpdate(
        dependencies,
        defaultProps,
        tmp59,
        memoizedProps,
        memoizedState3,
        memoizedState4,
        tmp65,
      );
    if (tmp86) {
      if (!tmp69) {
        const UNSAFE_componentWillMount = stateNode.UNSAFE_componentWillMount;
        let tmp95 = typeof UNSAFE_componentWillMount !== "function";
        if (typeof UNSAFE_componentWillMount !== "function") {
          tmp95 = typeof stateNode.componentWillMount !== "function";
        }
        tmp69 = tmp95;
      }
      if (!tmp69) {
        if (typeof stateNode.componentWillMount === "function") {
          stateNode.componentWillMount();
        }
        if (typeof stateNode.UNSAFE_componentWillMount === "function") {
          const result2 = stateNode.UNSAFE_componentWillMount();
        }
      }
      if (typeof stateNode.componentDidMount === "function") {
        dependencies.flags = dependencies.flags | 4194308;
      }
    } else {
      if (typeof stateNode.componentDidMount === "function") {
        dependencies.flags = dependencies.flags | 4194308;
      }
      dependencies.memoizedProps = memoizedProps;
      dependencies.memoizedState = memoizedState4;
    }
    stateNode.props = memoizedProps;
    stateNode.state = memoizedState4;
    stateNode.context = tmp65;
    flag3 = tmp86;
  } else {
    const stateNode2 = dependencies.stateNode;
    updateQueue = updateQueue.updateQueue;
    if (dependencies.updateQueue === updateQueue) {
      updateQueue = { baseState: null, firstBaseUpdate: null, lastBaseUpdate: null, shared: null, callbacks: null };
      ({
        baseState: obj.baseState,
        firstBaseUpdate: obj.firstBaseUpdate,
        lastBaseUpdate: obj.lastBaseUpdate,
        shared: obj.shared,
      } = updateQueue);
      dependencies.updateQueue = updateQueue;
    }
    memoizedProps = dependencies.memoizedProps;
    let tmp2 = memoizedProps;
    if ("ref" in memoizedProps) {
      obj5 = {};
      tmp2 = obj5;
      const keys2 = Object.keys();
      if (keys2 !== undefined) {
        tmp2 = obj5;
        while (keys2[tmp] !== undefined) {
          if ("ref" === tmp5) {
            continue;
          } else {
            obj5[tmp5] = memoizedProps[tmp5];
            continue;
          }
          continue;
        }
      }
    }
    defaultProps = defaultProps.defaultProps;
    let tmp6 = tmp2;
    if (defaultProps) {
      let tmp7 = tmp2;
      if (tmp2 === memoizedProps) {
        tmp7 = assign({}, tmp2);
      }
      tmp6 = tmp7;
      const keys3 = Object.keys();
      if (keys3 !== undefined) {
        tmp6 = tmp7;
        while (keys3[tmp] !== undefined) {
          if (undefined !== tmp7[tmp11]) {
            continue;
          } else {
            tmp7[tmp11] = defaultProps[tmp11];
            continue;
          }
          continue;
        }
      }
    }
    stateNode2.props = tmp6;
    const pendingProps = dependencies.pendingProps;
    const contextType = defaultProps.contextType;
    let tmp12 = closure_87;
    let tmp13 = typeof contextType === "object";
    context = stateNode2.context;
    if (typeof contextType === "object") {
      tmp13 = null !== contextType;
    }
    if (tmp13) {
      const _currentValue2 = contextType._currentValue2;
      obj6 = { context: contextType, memoizedValue: _currentValue2, next: null };
      if (null === obj2) {
        if (null === _null) {
          const _Error = Error;
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
          );
        } else {
          obj2 = obj6;
          obj7 = { lanes: 0, firstContext: obj6 };
          _null.dependencies = obj7;
          _null.flags = _null.flags | 524288;
          tmp12 = _currentValue2;
        }
      } else {
        tmp15.next = obj6;
        obj2 = obj6;
        tmp12 = _currentValue2;
      }
    }
    const getDerivedStateFromProps = defaultProps.getDerivedStateFromProps;
    let tmp16 =
      typeof getDerivedStateFromProps === "function" || typeof stateNode2.getSnapshotBeforeUpdate === "function";
    let tmp17 = tmp16;
    if (!tmp17) {
      const UNSAFE_componentWillReceiveProps = stateNode2.UNSAFE_componentWillReceiveProps;
      let tmp18 = typeof UNSAFE_componentWillReceiveProps !== "function";
      if (typeof UNSAFE_componentWillReceiveProps !== "function") {
        tmp18 = typeof stateNode2.componentWillReceiveProps !== "function";
      }
      tmp17 = tmp18;
    }
    if (!tmp17) {
      const tmp19 = memoizedProps !== pendingProps || context !== tmp12;
      if (tmp19) {
        const state = stateNode2.state;
        if (typeof stateNode2.componentWillReceiveProps === "function") {
          const result3 = stateNode2.componentWillReceiveProps(memoizedProps, tmp12);
        }
        if (typeof stateNode2.UNSAFE_componentWillReceiveProps === "function") {
          const result4 = stateNode2.UNSAFE_componentWillReceiveProps(memoizedProps, tmp12);
        }
        if (stateNode2.state !== state) {
          updater.enqueueReplaceState(stateNode2, stateNode2.state, null);
        }
      }
    }
    c150 = false;
    memoizedState = dependencies.memoizedState;
    stateNode2.state = memoizedState;
    processUpdateQueue(dependencies, memoizedProps, stateNode2, current2);
    if (c153) {
      if (null !== obj2) {
        throw obj2;
      }
    }
    let memoizedState2 = dependencies.memoizedState;
    if (memoizedProps === pendingProps) {
      if (memoizedState === memoizedState2) {
        const tmp111 = c150;
        if (!tmp111) {
          if (null !== updateQueue) {
            if (null !== updateQueue.dependencies) {
              iter = updateQueue.dependencies.firstContext;
              if (null !== iter) {
                while (is(iter.context._currentValue2, iter.memoizedValue)) {
                  iter = iter.next;
                  let flag2 = false;
                  if (null === iter) {
                    break;
                  }
                }
              }
            }
          }
          let tmp31 = typeof stateNode2.componentDidUpdate !== "function";
          if (!tmp31) {
            tmp31 = memoizedProps === updateQueue.memoizedProps && memoizedState === updateQueue.memoizedState;
          }
          if (!tmp31) {
            dependencies.flags = dependencies.flags | 4;
          }
          let tmp33 = typeof stateNode2.getSnapshotBeforeUpdate !== "function";
          if (!tmp33) {
            tmp33 = memoizedProps === updateQueue.memoizedProps && memoizedState === updateQueue.memoizedState;
          }
          flag3 = false;
          if (!tmp33) {
            dependencies.flags = dependencies.flags | 1024;
            flag3 = false;
          }
        }
      }
    }
    if (typeof getDerivedStateFromProps === "function") {
      const memoizedState5 = dependencies.memoizedState;
      const derivedStateFromProps = getDerivedStateFromProps(memoizedProps, memoizedState5);
      let tmp36 = memoizedState5;
      if (null != derivedStateFromProps) {
        tmp36 = assign({}, memoizedState5, derivedStateFromProps);
      }
      dependencies.memoizedState = tmp36;
      if (0 === dependencies.lanes) {
        dependencies.updateQueue.baseState = tmp36;
      }
      memoizedState2 = dependencies.memoizedState;
    }
    let tmp37 =
      c150 ||
      checkShouldComponentUpdate(dependencies, defaultProps, tmp6, memoizedProps, memoizedState, memoizedState2, tmp12);
    if (!tmp37) {
      let tmp46 = null !== updateQueue && null !== updateQueue.dependencies;
      if (tmp46) {
        let iter2 = updateQueue.dependencies.firstContext;
        let flag4 = false;
        if (null !== iter2) {
          flag4 = true;
          while (is(iter2.context._currentValue2, iter2.memoizedValue)) {
            iter2 = iter2.next;
            flag4 = false;
            if (null === iter2) {
              break;
            }
          }
        }
        tmp46 = flag4;
      }
      tmp37 = tmp46;
    }
    if (tmp37) {
      if (!tmp16) {
        const UNSAFE_componentWillUpdate = stateNode2.UNSAFE_componentWillUpdate;
        let tmp53 = typeof UNSAFE_componentWillUpdate !== "function";
        if (typeof UNSAFE_componentWillUpdate !== "function") {
          tmp53 = typeof stateNode2.componentWillUpdate !== "function";
        }
        tmp16 = tmp53;
      }
      if (!tmp16) {
        if (typeof stateNode2.componentWillUpdate === "function") {
          stateNode2.componentWillUpdate(memoizedProps, memoizedState2, tmp12);
        }
        if (typeof stateNode2.UNSAFE_componentWillUpdate === "function") {
          const result5 = stateNode2.UNSAFE_componentWillUpdate(memoizedProps, memoizedState2, tmp12);
        }
      }
      if (typeof stateNode2.componentDidUpdate === "function") {
        dependencies.flags = dependencies.flags | 4;
      }
      if (typeof stateNode2.getSnapshotBeforeUpdate === "function") {
        dependencies.flags = dependencies.flags | 1024;
      }
    } else {
      let tmp49 = typeof stateNode2.componentDidUpdate !== "function";
      if (!tmp49) {
        tmp49 = memoizedProps === updateQueue.memoizedProps && memoizedState === updateQueue.memoizedState;
      }
      if (!tmp49) {
        dependencies.flags = dependencies.flags | 4;
      }
      let tmp51 = typeof stateNode2.getSnapshotBeforeUpdate !== "function";
      if (!tmp51) {
        tmp51 = memoizedProps === updateQueue.memoizedProps && memoizedState === updateQueue.memoizedState;
      }
      if (!tmp51) {
        dependencies.flags = dependencies.flags | 1024;
      }
      dependencies.memoizedProps = memoizedProps;
      dependencies.memoizedState = memoizedState2;
    }
    stateNode2.props = memoizedProps;
    stateNode2.state = memoizedState2;
    stateNode2.context = tmp12;
    flag3 = tmp37;
  }
  return finishClassComponent(updateQueue, dependencies, defaultProps, flag3, 0, current2);
}
function finishClassComponent(ref, ref2, type3, flag3, arg4, current2) {
  let child;
  let renderResult;
  let tmp12;
  if (null === ref2.ref) {
    const tmp3 = null !== ref2.ref && null !== ref2.ref.ref;
    if (tmp3) {
      ref2.flags = ref2.flags | 4194816;
    }
  } else {
    if (typeof ref2.ref !== "function") {
      if (typeof ref2.ref !== "object") {
        const _Error = Error;
        throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");
      }
    }
    const tmp = null !== ref2.ref && ref2.ref.ref === ref2.ref;
    if (!tmp) {
      ref2.flags = ref2.flags | 4194816;
    }
  }
  if (!flag3) {
    if (!(128 & ref2.flags)) {
      child = bailoutOnAlreadyFinishedWork(ref, ref2, current2);
    }
    return child;
  }
  const stateNode = ref2.stateNode;
  if (!(128 & ref2.flags)) {
    renderResult = stateNode.render();
  } else {
    renderResult = null;
  }
  ref2.flags = ref2.flags | 1;
  if (null !== ref2.ref) {
    if (128 & ref2.flags) {
      ref2.child = closure_140(ref2, ref2.ref.child, null, current2);
      ref2.child = closure_140(ref2, null, renderResult, current2);
    }
    ref2.memoizedState = stateNode.state;
    child = ref2.child;
  }
  if (null === ref2.ref) {
    tmp12 = closure_141(ref2, null, renderResult, current2);
  } else {
    tmp12 = closure_140(ref2, ref.child, renderResult, current2);
  }
  ref2.child = tmp12;
}
function updateSuspenseComponent(memoizedState, pendingProps, lanes) {
  let child7;
  let mode4;
  let obj13;
  let obj18;
  let tmp121;
  let tmp38;
  let tmp63;
  pendingProps = pendingProps.pendingProps;
  let tmp2 = tmp;
  if (!tmp2) {
    tmp2 = (null === memoizedState || null !== memoizedState.memoizedState) && 2 & closure_162.current;
    const tmp4 = (null === memoizedState || null !== memoizedState.memoizedState) && 2 & closure_162.current;
  }
  let flag = false;
  if (tmp2) {
    pendingProps.flags = pendingProps.flags & -129;
    flag = true;
  }
  pendingProps.flags = pendingProps.flags & -33;
  if (null === memoizedState) {
    let sibling1;
    const children = pendingProps.children;
    if (flag) {
      sum = sum + 1;
      ({ current: closure_85[tmp110], current: closure_162.current } = closure_162);
      const sum1 = sum + 1;
      sum = sum1;
      ({ current: closure_85[tmp114], current: closure_159.current } = closure_159);
      ({ mode: mode4, child: child7 } = pendingProps);
      obj2 = { mode: "hidden", children };
      if (!(1 & mode4)) {
        if (null !== child7) {
          child7.childLanes = 0;
          child7.pendingProps = obj2;
        }
        Object.create(FiberNode.prototype);
        obj4 = {
          tag: 7,
          key: null,
          elementType: null,
          type: null,
          stateNode: null,
          return: pendingProps,
          child: null,
          sibling: null,
          index: 0,
          ref: null,
          refCleanup: null,
          pendingProps: tmp94,
          memoizedProps: null,
          updateQueue: null,
          memoizedState: null,
          dependencies: null,
          mode: mode4,
          flags: 0,
          subtreeFlags: 0,
          deletions: null,
          lanes,
          childLanes: 0,
          alternate: null,
        };
        child7.return = pendingProps;
        child7.sibling = obj4;
        pendingProps.child = child7;
        const child8 = pendingProps.child;
        let pooledCache4 = closure_128.current;
        obj5 = { baseLanes: lanes, cachePool: tmp121 };
        if (null === pooledCache4) {
          pooledCache4 = _null4.pooledCache;
        }
        tmp121 = null;
        if (null !== pooledCache4) {
          tmp121 = { parent: context._currentValue2, pool: pooledCache4 };
          obj6 = { parent: context._currentValue2, pool: pooledCache4 };
        }
        child8.memoizedState = obj5;
        let num30 = 0;
        if (null !== memoizedState) {
          num30 = memoizedState.childLanes & ~lanes;
        }
        let tmp123 = num30;
        if (32 & pendingProps.flags) {
          tmp123 = num30 | closure_291;
        }
        child8.childLanes = tmp123;
        pendingProps.memoizedState = memoizedState;
        if (null === child8.stateNode) {
          child8.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null };
        }
        sibling1 = child8.sibling;
      }
      Object.create(FiberNode.prototype);
      child7 = {
        tag: 22,
        key: null,
        elementType: null,
        type: null,
        stateNode: null,
        return: null,
        child: null,
        sibling: null,
        index: 0,
        ref: null,
        refCleanup: null,
        pendingProps: obj2,
        memoizedProps: null,
        updateQueue: null,
        memoizedState: null,
        dependencies: null,
        mode: mode4,
        flags: 0,
        subtreeFlags: 0,
        deletions: null,
        lanes: 0,
        childLanes: 0,
        alternate: null,
      };
      const obj8 = {
        tag: 22,
        key: null,
        elementType: null,
        type: null,
        stateNode: null,
        return: null,
        child: null,
        sibling: null,
        index: 0,
        ref: null,
        refCleanup: null,
        pendingProps: obj2,
        memoizedProps: null,
        updateQueue: null,
        memoizedState: null,
        dependencies: null,
        mode: mode4,
        flags: 0,
        subtreeFlags: 0,
        deletions: null,
        lanes: 0,
        childLanes: 0,
        alternate: null,
      };
    } else {
      const alternate4 = pendingProps.alternate;
      const sum2 = sum + 1;
      sum = sum2;
      closure_85[sum2] = closure_162.current;
      closure_162.current = 1 & closure_162.current;
      const sum3 = sum + 1;
      sum = sum3;
      closure_85[sum3] = closure_159.current;
      closure_159.current = pendingProps;
      let tmp103 = null === c160;
      if (tmp103) {
        tmp103 = null === alternate4 || null !== closure_157.current || null !== alternate4.memoizedState;
        const tmp104 = null === alternate4 || null !== closure_157.current || null !== alternate4.memoizedState;
      }
      if (tmp103) {
        c160 = pendingProps;
      }
      const mode3 = pendingProps.mode;
      obj9 = { mode: "visible", children };
      Object.create(FiberNode.prototype);
      sibling1 = {
        tag: 22,
        key: null,
        elementType: null,
        type: null,
        stateNode: null,
        return: pendingProps,
        child: null,
        sibling: null,
        index: 0,
        ref: null,
        refCleanup: null,
        pendingProps: obj9,
        memoizedProps: null,
        updateQueue: null,
        memoizedState: null,
        dependencies: null,
        mode: mode3,
        flags: 0,
        subtreeFlags: 0,
        deletions: null,
        lanes: 0,
        childLanes: 0,
        alternate: null,
      };
      pendingProps.child = sibling1;
    }
    return sibling1;
  } else {
    const memoizedState2 = memoizedState.memoizedState;
    if (null !== memoizedState2) {
      if (null !== memoizedState2.dehydrated) {
        if (128 & pendingProps.flags) {
          let sibling4;
          if (256 & pendingProps.flags) {
            const alternate3 = pendingProps.alternate;
            const sum4 = sum + 1;
            sum = sum4;
            closure_85[sum4] = closure_162.current;
            closure_162.current = 1 & closure_162.current;
            const sum5 = sum + 1;
            sum = sum5;
            closure_85[sum5] = closure_159.current;
            closure_159.current = pendingProps;
            let tmp84 = null === c160;
            if (tmp84) {
              tmp84 = null === alternate3 || null !== closure_157.current || null !== alternate3.memoizedState;
              const tmp85 = null === alternate3 || null !== closure_157.current || null !== alternate3.memoizedState;
            }
            if (tmp84) {
              c160 = pendingProps;
            }
            pendingProps.flags = pendingProps.flags & -257;
            closure_140(pendingProps, memoizedState.child, null, lanes);
            const mode2 = pendingProps.mode;
            obj11 = { mode: "visible", children: pendingProps.pendingProps.children };
            Object.create(FiberNode.prototype);
            obj13 = {
              tag: 22,
              key: null,
              elementType: null,
              type: null,
              stateNode: null,
              return: pendingProps,
              child: null,
              sibling: null,
              index: 0,
              ref: null,
              refCleanup: null,
              pendingProps: obj11,
              memoizedProps: null,
              updateQueue: null,
              memoizedState: null,
              dependencies: null,
              mode: mode2,
              flags: obj13.flags | 2,
              subtreeFlags: 0,
              deletions: null,
              lanes: 0,
              childLanes: 0,
              alternate: null,
            };
            pendingProps.child = obj13;
            pendingProps.memoizedState = null;
            sibling4 = obj13;
          } else if (null !== pendingProps.memoizedState) {
            const sum6 = sum + 1;
            sum = sum6;
            ({ current: closure_85[tmp71], current: closure_162.current } = closure_162);
            const sum7 = sum + 1;
            sum = sum7;
            ({ current: closure_85[tmp75], current: closure_159.current } = closure_159);
            pendingProps.child = memoizedState.child;
            pendingProps.flags = pendingProps.flags | 128;
            sibling4 = null;
          } else {
            const sum8 = sum + 1;
            sum = sum8;
            ({ current: closure_85[tmp130], current: closure_162.current } = closure_162);
            const sum9 = sum + 1;
            sum = sum9;
            ({ current: closure_85[tmp134], current: closure_159.current } = closure_159);
            const mode5 = pendingProps.mode;
            const fallback2 = pendingProps.fallback;
            const obj14 = { mode: "visible", children: pendingProps.children };
            Object.create(FiberNode.prototype);
            const obj16 = {
              tag: 22,
              key: null,
              elementType: null,
              type: null,
              stateNode: null,
              return: pendingProps,
              child: null,
              sibling: obj18,
              index: 0,
              ref: null,
              refCleanup: null,
              pendingProps: obj14,
              memoizedProps: null,
              updateQueue: null,
              memoizedState: null,
              dependencies: null,
              mode: mode5,
              flags: 0,
              subtreeFlags: 0,
              deletions: null,
              lanes: 0,
              childLanes: 0,
              alternate: null,
            };
            Object.create(FiberNode.prototype);
            obj18 = {
              tag: 7,
              key: null,
              elementType: null,
              type: null,
              stateNode: null,
              return: pendingProps,
              child: null,
              sibling: null,
              index: 0,
              ref: null,
              refCleanup: null,
              pendingProps: fallback2,
              memoizedProps: null,
              updateQueue: null,
              memoizedState: null,
              dependencies: null,
              mode: mode5,
              flags: obj18.flags | 2,
              subtreeFlags: 0,
              deletions: null,
              lanes,
              childLanes: 0,
              alternate: null,
            };
            pendingProps.child = obj16;
            if (1 & pendingProps.mode) {
              closure_140(pendingProps, memoizedState.child, null, lanes);
            }
            const child6 = pendingProps.child;
            let pooledCache3 = closure_128.current;
            const obj19 = { baseLanes: lanes, cachePool: tmp63 };
            if (null === pooledCache3) {
              pooledCache3 = _null4.pooledCache;
            }
            tmp63 = null;
            if (null !== pooledCache3) {
              tmp63 = { parent: context._currentValue2, pool: pooledCache3 };
              const obj20 = { parent: context._currentValue2, pool: pooledCache3 };
            }
            child6.memoizedState = obj19;
            let num15 = 0;
            if (null !== memoizedState) {
              num15 = memoizedState.childLanes & ~lanes;
            }
            let tmp65 = num15;
            if (32 & pendingProps.flags) {
              tmp65 = num15 | closure_291;
            }
            child6.childLanes = tmp65;
            pendingProps.memoizedState = memoizedState;
            if (null === child6.stateNode) {
              child6.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null };
            }
            sibling4 = child6.sibling;
          }
          return sibling4;
        } else {
          const alternate2 = pendingProps.alternate;
          const sum10 = sum + 1;
          sum = sum10;
          closure_85[sum10] = closure_162.current;
          closure_162.current = 1 & closure_162.current;
          const sum11 = sum + 1;
          sum = sum11;
          closure_85[sum11] = closure_159.current;
          closure_159.current = pendingProps;
          let tmp52 = null === c160;
          if (tmp52) {
            tmp52 = null === alternate2 || null !== closure_157.current || null !== alternate2.memoizedState;
            const tmp53 = null === alternate2 || null !== closure_157.current || null !== alternate2.memoizedState;
          }
          if (tmp52) {
            c160 = pendingProps;
          }
          const _Error = Error;
          throw Error(
            "The current renderer does not support hydration. This error is likely caused by a bug in React. Please file an issue.",
          );
        }
      }
    }
    if (flag) {
      const sum12 = sum + 1;
      sum = sum12;
      ({ current: closure_85[tmp23], current: closure_162.current } = closure_162);
      const sum13 = sum + 1;
      sum = sum13;
      ({ current: closure_85[tmp27], current: closure_159.current } = closure_159);
      const fallback = pendingProps.fallback;
      const mode = pendingProps.mode;
      const child2 = memoizedState.child;
      const sibling2 = child2.sibling;
      const obj21 = { mode: "hidden", children: pendingProps.children };
      if (!(1 & mode)) {
        let child3;
        let obj49;
        let obj54;
        if (pendingProps.child !== child2) {
          child3 = pendingProps.child;
          child3.childLanes = 0;
          child3.pendingProps = obj21;
          pendingProps.deletions = null;
        }
        if (null !== sibling2) {
          obj49 = createWorkInProgress(sibling2, fallback);
        } else {
          Object.create(FiberNode.prototype);
          obj49 = {
            tag: 7,
            key: null,
            elementType: null,
            type: null,
            stateNode: null,
            return: null,
            child: null,
            sibling: null,
            index: 0,
            ref: null,
            refCleanup: null,
            pendingProps: fallback,
            memoizedProps: null,
            updateQueue: null,
            memoizedState: null,
            dependencies: null,
            mode,
            flags: obj49.flags | 2,
            subtreeFlags: 0,
            deletions: null,
            lanes,
            childLanes: 0,
            alternate: null,
          };
        }
        obj49.return = pendingProps;
        child3.return = pendingProps;
        child3.sibling = obj49;
        pendingProps.child = child3;
        if (null === child3.stateNode) {
          child3.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null };
        }
        const sibling3 = child3.sibling;
        const child4 = pendingProps.child;
        memoizedState = memoizedState.child.memoizedState;
        if (null === memoizedState) {
          let pooledCache2 = closure_128.current;
          const obj50 = { baseLanes: lanes, cachePool: tmp38 };
          if (null === pooledCache2) {
            pooledCache2 = _null4.pooledCache;
          }
          tmp38 = null;
          if (null !== pooledCache2) {
            tmp38 = { parent: context._currentValue2, pool: pooledCache2 };
            const obj51 = { parent: context._currentValue2, pool: pooledCache2 };
          }
          obj54 = obj50;
        } else {
          let tmp33;
          let cachePool = memoizedState.cachePool;
          if (null !== cachePool) {
            const _currentValue2 = context._currentValue2;
            if (cachePool.parent !== _currentValue2) {
              cachePool = { parent: _currentValue2, pool: _currentValue2 };
              const obj52 = { parent: _currentValue2, pool: _currentValue2 };
            }
            tmp33 = cachePool;
          } else {
            let pooledCache = closure_128.current;
            if (null === pooledCache) {
              pooledCache = _null4.pooledCache;
            }
            tmp33 = null;
            if (null !== pooledCache) {
              tmp33 = { parent: context._currentValue2, pool: pooledCache };
              const obj53 = { parent: context._currentValue2, pool: pooledCache };
            }
          }
          obj54 = { baseLanes: memoizedState.baseLanes | lanes, cachePool: tmp33 };
        }
        child4.memoizedState = obj54;
        let num11 = 0;
        if (null !== memoizedState) {
          num11 = memoizedState.childLanes & ~lanes;
        }
        let tmp40 = num11;
        if (32 & pendingProps.flags) {
          tmp40 = num11 | closure_291;
        }
        child4.childLanes = tmp40;
        pendingProps.memoizedState = memoizedState;
        const child5 = memoizedState.child;
        const tmp43 = (null !== child5 && 22 === child5.tag) || null !== child4.stateNode;
        if (!tmp43) {
          child4.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null };
        }
        return child4.sibling;
      }
      const tmp29 = createWorkInProgress(child2, obj21);
      tmp29.subtreeFlags = 65011712 & child2.subtreeFlags;
      child3 = tmp29;
    } else {
      const alternate = pendingProps.alternate;
      const sum14 = sum + 1;
      sum = sum14;
      closure_85[sum14] = closure_162.current;
      closure_162.current = 1 & closure_162.current;
      const sum15 = sum + 1;
      sum = sum15;
      closure_85[sum15] = closure_159.current;
      closure_159.current = pendingProps;
      let tmp15 = null === c160;
      if (tmp15) {
        tmp15 = null === alternate || null !== closure_157.current || null !== alternate.memoizedState;
        const tmp16 = null === alternate || null !== closure_157.current || null !== alternate.memoizedState;
      }
      if (tmp15) {
        c160 = pendingProps;
      }
      const child = memoizedState.child;
      const sibling = child.sibling;
      obj = { mode: "visible", children: pendingProps.children };
      const tmp19 = createWorkInProgress(child, obj);
      if (!(1 & pendingProps.mode)) {
        tmp19.lanes = lanes;
      }
      tmp19.return = pendingProps;
      tmp19.sibling = null;
      if (null !== sibling) {
        const deletions = pendingProps.deletions;
        if (null === deletions) {
          items = [sibling];
          pendingProps.deletions = items;
          pendingProps.flags = pendingProps.flags | 16;
        } else {
          deletions.push(sibling);
        }
      }
      pendingProps.child = tmp19;
      pendingProps.memoizedState = null;
      return tmp19;
    }
  }
}
function updateSuspenseListComponent(child, pendingProps, current2) {
  let children;
  let revealOrder;
  let sibling;
  let tail;
  let tmp3;
  let tmp9;
  ({ revealOrder, tail, children } = pendingProps.pendingProps);
  current = closure_162.current;
  if (2 & current) {
    tmp3 = (1 & current) | 2;
    pendingProps.flags = pendingProps.flags | 128;
  } else {
    tmp3 = current & 1;
  }
  sum = sum + 1;
  closure_85[sum] = closure_162.current;
  closure_162.current = tmp3;
  if (null === child) {
    tmp9 = closure_141(pendingProps, null, children, current2);
  } else {
    tmp9 = closure_140(pendingProps, child.child, children, current2);
  }
  pendingProps.child = tmp9;
  if (!(2 & current)) {
    if (null !== child) {
      if (128 & child.flags) {
        child = pendingProps.child;
        if (null !== child) {
          while (true) {
            if (13 === child.tag) {
              if (null !== child.memoizedState) {
                child.lanes = child.lanes | current2;
                let alternate6 = child.alternate;
                if (null !== alternate6) {
                  alternate6.lanes = alternate6.lanes | current2;
                }
                let _return2 = child.return;
                if (null !== _return2) {
                  while (true) {
                    let alternate3 = _return2.alternate;
                    if ((_return2.childLanes & current2) !== current2) {
                      _return2.childLanes = _return2.childLanes | current2;
                      if (null !== alternate3) {
                        alternate3.childLanes = alternate3.childLanes | current2;
                      }
                    } else {
                      let tmp19 = null !== alternate3 && (alternate3.childLanes & current2) !== current2;
                      if (tmp19) {
                        alternate3.childLanes = alternate3.childLanes | current2;
                      }
                    }
                    if (_return2 === pendingProps) {
                      break;
                    } else {
                      _return2 = _return2.return;
                      if (null === _return2) {
                        break;
                      }
                    }
                  }
                }
              }
            } else if (19 === child.tag) {
              child.lanes = child.lanes | current2;
              let alternate = child.alternate;
              if (null !== alternate) {
                alternate.lanes = alternate.lanes | current2;
              }
              _return = child.return;
              if (null !== _return) {
                while (true) {
                  let alternate2 = _return.alternate;
                  if ((_return.childLanes & current2) !== current2) {
                    _return.childLanes = _return.childLanes | current2;
                    if (null !== alternate2) {
                      alternate2.childLanes = alternate2.childLanes | current2;
                    }
                  } else {
                    let tmp17 = null !== alternate2 && (alternate2.childLanes & current2) !== current2;
                    if (tmp17) {
                      alternate2.childLanes = alternate2.childLanes | current2;
                    }
                  }
                  if (_return === pendingProps) {
                    break;
                  } else {
                    _return = _return.return;
                    if (null !== _return) {
                      continue;
                    } else {
                      break;
                    }
                    break;
                  }
                }
              }
            } else {
              if (null !== child.child) {
                child.child.return = child;
                sibling = child.child;
              }
              child = sibling;
              if (null === sibling) {
                break;
              }
            }
            if (child === pendingProps) {
              break;
            } else {
              let tmp20 = child;
              let tmp21 = child;
              if (null !== child.sibling) {
                ({ return: tmp21.sibling.return, sibling } = tmp21);
              } else {
                while (null !== tmp20.return) {
                  if (tmp20.return === pendingProps) {
                    break;
                  } else {
                    let _return3 = tmp20.return;
                    tmp20 = _return3;
                    tmp21 = _return3;
                    break;
                  }
                }
              }
              break;
            }
          }
        }
      }
    }
  }
  if (1 & pendingProps.mode) {
    if ("forwards" === revealOrder) {
      let sibling4;
      let sibling3 = pendingProps.child;
      let tmp28 = null;
      let tmp29 = null;
      if (null !== sibling3) {
        do {
          let alternate5 = sibling3.alternate;
          let tmp30 = null !== alternate5;
          let tmp31 = tmp28;
          if (tmp30) {
            tmp30 = null === findFirstSuspended(alternate5);
          }
          if (tmp30) {
            tmp31 = sibling3;
          }
          sibling3 = sibling3.sibling;
          tmp28 = tmp31;
          tmp29 = tmp31;
        } while (null !== sibling3);
      }
      if (null === tmp29) {
        sibling4 = pendingProps.child;
        pendingProps.child = null;
      } else {
        sibling4 = tmp29.sibling;
        tmp29.sibling = null;
      }
      const memoizedState3 = pendingProps.memoizedState;
      if (null === memoizedState3) {
        obj2 = {
          isBackwards: false,
          rendering: null,
          renderingStartTime: 0,
          last: tmp29,
          tail: sibling4,
          tailMode: tail,
          treeForkCount: 0,
        };
        pendingProps.memoizedState = obj2;
      } else {
        memoizedState3.isBackwards = false;
        memoizedState3.rendering = null;
        memoizedState3.renderingStartTime = 0;
        memoizedState3.last = tmp29;
        memoizedState3.tail = sibling4;
        memoizedState3.tailMode = tail;
        memoizedState3.treeForkCount = 0;
      }
    } else {
      if ("backwards" !== revealOrder) {
        if ("unstable_legacy-backwards" !== revealOrder) {
          if ("together" === revealOrder) {
            memoizedState = pendingProps.memoizedState;
            if (null === memoizedState) {
              pendingProps.memoizedState = {
                isBackwards: false,
                rendering: null,
                renderingStartTime: 0,
                last: null,
                tail: null,
                tailMode: "duration",
                treeForkCount: false,
              };
            } else {
              memoizedState.isBackwards = false;
              memoizedState.rendering = null;
              memoizedState.renderingStartTime = 0;
              memoizedState.last = null;
              memoizedState.tail = null;
              memoizedState.tailMode = undefined;
              memoizedState.treeForkCount = 0;
            }
          } else {
            pendingProps.memoizedState = null;
          }
        }
      }
      let sibling2 = pendingProps.child;
      pendingProps.child = null;
      let tmp23 = null;
      let tmp24 = null;
      if (null !== sibling2) {
        while (true) {
          let alternate4 = sibling2.alternate;
          let tmp25 = sibling2;
          if (null !== alternate4) {
            if (null === findFirstSuspended(alternate4)) {
              break;
            }
          }
          sibling2 = sibling2.sibling;
          tmp25.sibling = tmp23;
          tmp23 = tmp25;
          tmp24 = tmp25;
        }
        pendingProps.child = sibling2;
        tmp24 = tmp23;
      }
      const memoizedState2 = pendingProps.memoizedState;
      if (null === memoizedState2) {
        memoizedState = {
          isBackwards: true,
          rendering: null,
          renderingStartTime: 0,
          last: null,
          tail: tmp24,
          tailMode: tail,
          treeForkCount: 0,
        };
        pendingProps.memoizedState = memoizedState;
      } else {
        memoizedState2.isBackwards = true;
        memoizedState2.rendering = null;
        memoizedState2.renderingStartTime = 0;
        memoizedState2.last = null;
        memoizedState2.tail = tmp24;
        memoizedState2.tailMode = tail;
        memoizedState2.treeForkCount = 0;
      }
    }
  } else {
    pendingProps.memoizedState = null;
  }
  return pendingProps.child;
}
function bailoutOnAlreadyFinishedWork(dependencies, lanes, c280) {
  let sibling2;
  if (null !== dependencies) {
    lanes.dependencies = dependencies.dependencies;
  }
  closure_288 = closure_288 | lanes.lanes;
  if (!(c280 & lanes.childLanes)) {
    if (null === dependencies) {
      return null;
    } else {
      propagateParentContextChanges(0, lanes, c280, false);
      if (!(c280 & lanes.childLanes)) {
        return null;
      }
    }
  }
  if (null !== dependencies) {
    if (lanes.child !== dependencies.child) {
      const _Error = Error;
      throw Error("Resuming work not yet implemented.");
    }
  }
  if (null !== lanes.child) {
    let child = lanes.child;
    const tmp7 = createWorkInProgress(child, child.pendingProps);
    lanes.child = tmp7;
    tmp7.return = lanes;
    let tmp8 = tmp7;
    let tmp9 = tmp7;
    if (null !== child.sibling) {
      do {
        let sibling = child.sibling;
        let tmp11 = createWorkInProgress(sibling, sibling.pendingProps);
        tmp8.sibling = tmp11;
        tmp11.return = lanes;
        tmp8 = tmp11;
        child = sibling;
        tmp9 = tmp11;
        sibling2 = sibling.sibling;
      } while (null !== sibling2);
    }
    tmp9.sibling = null;
  }
  return lanes.child;
}
function beginWork(alternate, _return, current2) {
  let ErrorResult;
  let ErrorResult1;
  let children4;
  let children5;
  let obj13;
  let obj44;
  let ref;
  let sum16;
  let sum17;
  let sum18;
  let tag;
  let tmp101;
  let tmp257;
  let tmp300;
  let tmp314;
  let tmp316;
  let tmp317;
  let tmp320;
  let tmp321;
  let tmp326;
  if (null !== alternate) {
    if (alternate.memoizedProps !== _return.pendingProps) {
      c222 = true;
    } else {
      let tmp7 = alternate.lanes & current2;
      if (!tmp7) {
        const dependencies = alternate.dependencies;
        let tmp4 = null === dependencies;
        if (!tmp4) {
          iter = dependencies.firstContext;
          let flag2 = false;
          if (null !== iter) {
            flag2 = true;
            while (is(iter.context._currentValue2, iter.memoizedValue)) {
              iter = iter.next;
              flag2 = false;
              if (null === iter) {
                break;
              }
            }
          }
          tmp4 = !flag2;
        }
        tmp7 = !tmp4;
      }
      if (!tmp7) {
        if (!(128 & _return.flags)) {
          let sum1;
          let tmp68;
          let sum2;
          let sum3;
          let tmp17;
          c222 = false;
          switch (_return.tag) {
            case 3: {
              pushHostContainer(_return, _return.stateNode.containerInfo);
              sum = sum + 1;
              closure_85[sum] = closure_101.current;
              closure_101.current = context._currentValue2;
              context._currentValue2 = alternate.memoizedState.cache;
              tmp17 = bailoutOnAlreadyFinishedWork(alternate, _return, current2);
              return tmp17;
            }
            case 4: {
              pushHostContainer(_return, _return.stateNode.containerInfo);
              break;
            }
            case 5: {
              if (null !== _return.memoizedState) {
                sum1 = sum + 1;
                sum = sum1;
                closure_85[sum1] = closure_96.current;
                closure_96.current = _return;
              }
              tmp68 = closure_93;
              current = closure_93.current;
              if (current != current) {
                sum2 = sum + 1;
                sum = sum2;
                closure_85[sum2] = closure_94.current;
                closure_94.current = _return;
                sum3 = sum + 1;
                sum = sum3;
                closure_85[sum3] = tmp68.current;
                tmp68.current = current;
              }
              break;
            }
            case 6: {
              break;
            }
            case 7: {
              break;
            }
            case 8: {
              break;
            }
            case 9: {
              break;
            }
            case 10: {
              const type = _return.type;
              const sum4 = sum + 1;
              sum = sum4;
              closure_85[sum4] = closure_101.current;
              closure_101.current = type._currentValue2;
              type._currentValue2 = _return.memoizedProps.value;
              break;
            }
            case 11: {
              break;
            }
            case 12: {
              break;
            }
            case 13: {
              const memoizedState2 = _return.memoizedState;
              if (null !== memoizedState2) {
                let sibling;
                if (null !== memoizedState2.dehydrated) {
                  const alternate2 = _return.alternate;
                  const sum5 = sum + 1;
                  sum = sum5;
                  closure_85[sum5] = closure_162.current;
                  closure_162.current = 1 & closure_162.current;
                  const sum6 = sum + 1;
                  sum = sum6;
                  closure_85[sum6] = closure_159.current;
                  closure_159.current = _return;
                  let tmp55 = null === c160;
                  if (tmp55) {
                    tmp55 = null === alternate2 || null !== closure_157.current || null !== alternate2.memoizedState;
                    const tmp56 =
                      null === alternate2 || null !== closure_157.current || null !== alternate2.memoizedState;
                  }
                  if (tmp55) {
                    c160 = _return;
                  }
                  _return.flags = _return.flags | 128;
                  sibling = null;
                } else if (current2 & _return.child.childLanes) {
                  sibling = updateSuspenseComponent(alternate, _return, current2);
                } else {
                  alternate = _return.alternate;
                  const sum7 = sum + 1;
                  sum = sum7;
                  closure_85[sum7] = closure_162.current;
                  closure_162.current = 1 & closure_162.current;
                  const sum8 = sum + 1;
                  sum = sum8;
                  closure_85[sum8] = closure_159.current;
                  closure_159.current = _return;
                  let tmp40 = null === c160;
                  if (tmp40) {
                    tmp40 = null === alternate || null !== closure_157.current || null !== alternate.memoizedState;
                    const tmp41 =
                      null === alternate || null !== closure_157.current || null !== alternate.memoizedState;
                  }
                  if (tmp40) {
                    c160 = _return;
                  }
                  const tmp44 = bailoutOnAlreadyFinishedWork(alternate, _return, current2);
                  sibling = null;
                  if (null !== tmp44) {
                    sibling = tmp44.sibling;
                  }
                }
                tmp17 = sibling;
              } else {
                const alternate3 = _return.alternate;
                const sum9 = sum + 1;
                sum = sum9;
                closure_85[sum9] = closure_162.current;
                closure_162.current = 1 & closure_162.current;
                const sum10 = sum + 1;
                sum = sum10;
                closure_85[sum10] = closure_159.current;
                closure_159.current = _return;
                let tmp31 = null === c160;
                if (tmp31) {
                  tmp31 = null === alternate3 || null !== closure_157.current || null !== alternate3.memoizedState;
                  const tmp29 =
                    null === alternate3 || null !== closure_157.current || null !== alternate3.memoizedState;
                }
                if (tmp31) {
                  c160 = _return;
                }
              }
              break;
            }
            case 14: {
              break;
            }
            case 15: {
              break;
            }
            case 16: {
              break;
            }
            case 17: {
              break;
            }
            case 18: {
              break;
            }
            case 19: {
              let tmp19 = current2 & _return.childLanes;
              const tmp18 = 128 & alternate.flags;
              if (!tmp19) {
                propagateParentContextChanges(0, _return, current2, false);
                tmp19 = current2 & _return.childLanes;
              }
              if (!tmp18) {
                memoizedState = _return.memoizedState;
                if (null !== memoizedState) {
                  memoizedState.rendering = null;
                  memoizedState.tail = null;
                  memoizedState.lastEffect = null;
                }
                const sum11 = sum + 1;
                sum = sum11;
                ({ current: closure_85[tmp26], current: closure_162.current } = closure_162);
                tmp17 = null;
              } else if (tmp19) {
                tmp17 = updateSuspenseListComponent(alternate, _return, current2);
              } else {
                _return.flags = _return.flags | 128;
              }
              break;
            }
            case 20: {
              break;
            }
            case 21: {
              break;
            }
            case 22: {
              _return.lanes = 0;
              tmp17 = updateOffscreenComponent(alternate, _return, current2, _return.pendingProps);
              break;
            }
            case 23: {
              break;
            }
            case 24: {
              const sum12 = sum + 1;
              sum = sum12;
              closure_85[sum12] = closure_101.current;
              closure_101.current = context._currentValue2;
              context._currentValue2 = alternate.memoizedState.cache;
              break;
            }
            case 25: {
              break;
            }
            case 26: {
              break;
            }
            case 27: {
              if (null !== _return.memoizedState) {
                sum1 = sum + 1;
                sum = sum1;
                closure_85[sum1] = closure_96.current;
                closure_96.current = _return;
              }
              tmp68 = closure_93;
              current = closure_93.current;
              if (current != current) {
                sum2 = sum + 1;
                sum = sum2;
                closure_85[sum2] = closure_94.current;
                closure_94.current = _return;
                sum3 = sum + 1;
                sum = sum3;
                closure_85[sum3] = tmp68.current;
                tmp68.current = current;
              }
              break;
            }
            case 28: {
              break;
            }
            case 29: {
              break;
            }
            case 30: {
              break;
            }
            case 31: {
              if (null !== _return.memoizedState) {
                _return.flags = _return.flags | 128;
                const sum13 = sum + 1;
                sum = sum13;
                ({ current: closure_85[tmp462], current: closure_162.current } = closure_162);
                const sum14 = sum + 1;
                sum = sum14;
                closure_85[sum14] = closure_159.current;
                closure_159.current = _return;
                tmp17 = null;
                if (null === c160) {
                  c160 = _return;
                  tmp17 = null;
                }
              }
              break;
            }
          }
        }
      }
      c222 = 131072 & alternate.flags;
    }
  } else {
    c222 = false;
  }
  _return.lanes = 0;
  switch (_return.tag) {
    case 0: {
      let tmp394;
      let pendingProps9;
      let type6;
      ({ type: type6, pendingProps: pendingProps9 } = _return);
      _null = _return;
      obj2 = null;
      const dependencies6 = _return.dependencies;
      if (null !== dependencies6) {
        dependencies6.firstContext = null;
      }
      const tmp386 = renderWithHooks(alternate, _return, type6, pendingProps9, undefined, current2);
      if (null !== alternate) {
        let child2;
        const tmp388 = c222;
        if (!tmp388) {
          _return.updateQueue = alternate.updateQueue;
          _return.flags = _return.flags & -2053;
          alternate.lanes = alternate.lanes & ~current2;
          child2 = bailoutOnAlreadyFinishedWork(alternate, _return, current2);
        }
        return child2;
      }
      _return.flags = _return.flags | 1;
      if (null === alternate) {
        tmp394 = closure_141(_return, null, tmp386, current2);
      } else {
        tmp394 = closure_140(_return, alternate.child, tmp386, current2);
      }
      _return.child = tmp394;
      child2 = _return.child;
      break;
    }
    case 1: {
      let pendingProps8;
      let type5;
      ({ type: type5, pendingProps: pendingProps8 } = _return);
      let tmp365 = pendingProps8;
      if ("ref" in pendingProps8) {
        const obj3 = {};
        tmp365 = obj3;
        const keys = Object.keys();
        if (keys !== undefined) {
          tmp365 = obj3;
          while (keys[tmp] !== undefined) {
            if ("ref" === tmp368) {
              continue;
            } else {
              obj3[tmp368] = pendingProps8[tmp368];
              continue;
            }
            continue;
          }
        }
      }
      const defaultProps3 = type5.defaultProps;
      let tmp369 = tmp365;
      if (defaultProps3) {
        let tmp370 = tmp365;
        if (tmp365 === pendingProps8) {
          tmp370 = assign({}, tmp365);
        }
        tmp369 = tmp370;
        const keys1 = Object.keys();
        if (keys1 !== undefined) {
          tmp369 = tmp370;
          while (keys1[tmp] !== undefined) {
            if (undefined !== tmp370[tmp374]) {
              continue;
            } else {
              tmp370[tmp374] = defaultProps3[tmp374];
              continue;
            }
            continue;
          }
        }
      }
      return updateClassComponent(alternate, _return, type5, tmp369, current2);
    }
    case 2: {
      let _Error7 = Error;
      tag = _return.tag;
      let text = `Unknown unit of work tag (${tag}`;
      let text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      ErrorResult = Error(
        `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`,
      );
      throw ErrorResult;
    }
    case 3: {
      let memoizedState4;
      let pendingProps7;
      pushHostContainer(_return, _return.stateNode.containerInfo);
      if (null === alternate) {
        const _Error5 = Error;
        throw Error("Should have a current fiber. This is a bug in React.");
      } else {
        let child;
        ({ pendingProps: pendingProps7, memoizedState: memoizedState4 } = _return);
        const updateQueue2 = alternate.updateQueue;
        const element = memoizedState4.element;
        if (_return.updateQueue === updateQueue2) {
          obj4 = { baseState: null, firstBaseUpdate: null, lastBaseUpdate: null, shared: null, callbacks: null };
          ({
            baseState: obj15.baseState,
            firstBaseUpdate: obj15.firstBaseUpdate,
            lastBaseUpdate: obj15.lastBaseUpdate,
            shared: obj15.shared,
          } = updateQueue2);
          _return.updateQueue = obj4;
        }
        processUpdateQueue(_return, pendingProps7, null, current2);
        const memoizedState5 = _return.memoizedState;
        const cache2 = memoizedState5.cache;
        const sum15 = sum + 1;
        sum = sum15;
        closure_85[sum15] = closure_101.current;
        closure_101.current = context._currentValue2;
        context._currentValue2 = cache2;
        if (cache2 !== memoizedState4.cache) {
          items = [tmp341];
          propagateContextChanges(_return, items, current2, true);
        }
        if (c153) {
          if (null !== obj2) {
            throw obj2;
          }
        }
        const element2 = memoizedState5.element;
        if (element2 === element) {
          child = bailoutOnAlreadyFinishedWork(alternate, _return, current2);
        } else {
          let tmp356;
          if (null === alternate) {
            tmp356 = closure_141(_return, null, element2, current2);
          } else {
            tmp356 = closure_140(_return, alternate.child, element2, current2);
          }
          _return.child = tmp356;
          child = _return.child;
        }
        return child;
      }
      break;
    }
    case 4: {
      pushHostContainer(_return, _return.stateNode.containerInfo);
      const pendingProps6 = _return.pendingProps;
      if (null === alternate) {
        _return.child = closure_140(_return, null, pendingProps6, current2);
      } else {
        let tmp284;
        if (null === alternate) {
          tmp284 = closure_141(_return, null, pendingProps6, current2);
        } else {
          tmp284 = closure_140(_return, alternate.child, pendingProps6, current2);
        }
        _return.child = tmp284;
      }
      return _return.child;
    }
    case 5: {
      if (null !== _return.memoizedState) {
        sum16 = sum + 1;
        sum = sum16;
        closure_85[sum16] = closure_96.current;
        closure_96.current = _return;
      }
      tmp300 = closure_93;
      current2 = closure_93.current;
      if (current2 != current2) {
        sum17 = sum + 1;
        sum = sum17;
        closure_85[sum17] = closure_94.current;
        closure_94.current = _return;
        sum18 = sum + 1;
        sum = sum18;
        closure_85[sum18] = tmp300.current;
        tmp300.current = current2;
      }
      children5 = _return.pendingProps.children;
      if (null !== _return.memoizedState) {
        tmp314 = renderWithHooks(alternate, _return, TransitionAwareHostComponent, null, null, current2);
        context2._currentValue2 = tmp314;
      }
      ref = _return.ref;
      if (null === ref) {
        tmp320 = tmp3 && null !== alternate.ref;
        if (tmp320) {
          tmp321 = _return.flags | 4194816;
          _return.flags = tmp321;
        }
      } else {
        if (typeof ref !== "function") {
          if (typeof ref !== "object") {
            let _Error4 = Error;
            ErrorResult1 = Error(
              "Expected ref to be a function, an object returned by React.createRef(), or undefined/null.",
            );
            throw ErrorResult1;
          }
        }
        tmp316 = tmp3 && alternate.ref === ref;
        if (!tmp316) {
          tmp317 = _return.flags | 4194816;
          _return.flags = tmp317;
        }
      }
      if (null === alternate) {
        tmp326 = closure_141(_return, null, children5, current2);
      } else {
        tmp326 = closure_140(_return, alternate.child, children5, current2);
      }
      _return.child = tmp326;
      return _return.child;
    }
    case 6: {
      return null;
    }
    case 7: {
      let tmp267;
      const pendingProps5 = _return.pendingProps;
      if (null === alternate) {
        tmp267 = closure_141(_return, null, pendingProps5, current2);
      } else {
        tmp267 = closure_140(_return, alternate.child, pendingProps5, current2);
      }
      _return.child = tmp267;
      return _return.child;
    }
    case 8: {
      children4 = _return.pendingProps.children;
      if (null === alternate) {
        tmp257 = closure_141(_return, null, children4, current2);
      } else {
        tmp257 = closure_140(_return, alternate.child, children4, current2);
      }
      _return.child = tmp257;
      return _return.child;
    }
    case 9: {
      let tmp232;
      const _context = _return.type._context;
      _null = _return;
      obj2 = null;
      const dependencies5 = _return.dependencies;
      const children2 = _return.pendingProps.children;
      if (null !== dependencies5) {
        dependencies5.firstContext = null;
      }
      const _currentValue22 = _context._currentValue2;
      obj5 = { context: _context, memoizedValue: _currentValue22, next: null };
      if (null === obj2) {
        if (null === _null) {
          const _Error3 = Error;
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
          );
        } else {
          obj2 = obj5;
          obj6 = { lanes: 0, firstContext: obj5 };
          _null.dependencies = obj6;
          _null.flags = _null.flags | 524288;
        }
      } else {
        tmp226.next = obj5;
        obj2 = obj5;
      }
      const children2Result = children2(_currentValue22);
      _return.flags = _return.flags | 1;
      if (null === alternate) {
        tmp232 = closure_141(_return, null, children2Result, current2);
      } else {
        tmp232 = closure_140(_return, alternate.child, children2Result, current2);
      }
      _return.child = tmp232;
      return _return.child;
    }
    case 10: {
      let tmp247;
      let children3;
      let pendingProps4;
      let type4;
      ({ pendingProps: pendingProps4, type: type4 } = _return);
      const sum19 = sum + 1;
      sum = sum19;
      closure_85[sum19] = closure_101.current;
      closure_101.current = type4._currentValue2;
      ({ value: type4._currentValue2, children: children3 } = pendingProps4);
      if (null === alternate) {
        tmp247 = closure_141(_return, null, children3, current2);
      } else {
        tmp247 = closure_140(_return, alternate.child, children3, current2);
      }
      _return.child = tmp247;
      return _return.child;
    }
    case 11: {
      return updateForwardRef(alternate, _return, _return.type, _return.pendingProps, current2);
    }
    case 12: {
      children4 = _return.pendingProps.children;
      if (null === alternate) {
        tmp257 = closure_141(_return, null, children4, current2);
      } else {
        tmp257 = closure_140(_return, alternate.child, children4, current2);
      }
      _return.child = tmp257;
      return _return.child;
    }
    case 13: {
      return updateSuspenseComponent(alternate, _return, current2);
    }
    case 14: {
      return updateMemoComponent(alternate, _return, _return.type, _return.pendingProps, current2);
    }
    case 15: {
      return updateSimpleMemoComponent(alternate, _return, _return.type, _return.pendingProps, current2);
    }
    case 16: {
      let child3;
      let tmp401 = !tmp400;
      const elementType = _return.elementType;
      if (!(1 & _return.mode)) {
        tmp401 = tmp3;
      }
      if (tmp401) {
        alternate.alternate = null;
        _return.alternate = null;
        _return.flags = _return.flags | 2;
      }
      const pendingProps10 = _return.pendingProps;
      const tmp403 = resolveLazy(elementType);
      _return.type = tmp403;
      if (typeof tmp403 !== "function") {
        if (null != tmp403) {
          const $$typeof = tmp403.$$typeof;
          if ($$typeof === closure_20) {
            _return.tag = 11;
            child3 = updateForwardRef(null, _return, tmp403, pendingProps10, current2);
          } else if ($$typeof === closure_23) {
            _return.tag = 14;
            child3 = updateMemoComponent(null, _return, tmp403, pendingProps10, current2);
          }
        }
        const _Error6 = Error;
        const tmp434 = getComponentNameFromType(tmp403) || tmp403;
        throw Error(
          "Element type is invalid. Received a promise that resolves to: " +
            tmp434 +
            ". Lazy element type must resolve to a class or function.",
        );
      } else {
        const prototype = tmp403.prototype;
        const tmp404 = !prototype || !prototype.isReactComponent;
        if (!tmp404) {
          let tmp415 = pendingProps10;
          if ("ref" in pendingProps10) {
            obj9 = {};
            tmp415 = obj9;
            const keys2 = Object.keys();
            if (keys2 !== undefined) {
              tmp415 = obj9;
              while (keys2[tmp2] !== undefined) {
                if ("ref" === tmp418) {
                  continue;
                } else {
                  obj9[tmp418] = pendingProps10[tmp418];
                  continue;
                }
                continue;
              }
            }
          }
          const defaultProps4 = tmp403.defaultProps;
          let tmp419 = tmp415;
          if (defaultProps4) {
            let tmp420 = tmp415;
            if (tmp415 === pendingProps10) {
              tmp420 = assign({}, tmp415);
            }
            tmp419 = tmp420;
            const keys3 = Object.keys();
            if (keys3 !== undefined) {
              tmp419 = tmp420;
              while (keys3[tmp2] !== undefined) {
                if (undefined !== tmp420[tmp424]) {
                  continue;
                } else {
                  tmp420[tmp424] = defaultProps4[tmp424];
                  continue;
                }
                continue;
              }
            }
          }
          _return.tag = 1;
          child3 = updateClassComponent(null, _return, tmp403, tmp419, current2);
        } else {
          _return.tag = 0;
          _null = _return;
          obj2 = null;
          const dependencies7 = _return.dependencies;
          if (null !== dependencies7) {
            dependencies7.firstContext = null;
          }
          _return.flags = _return.flags | 1;
          _return.child = closure_141(
            _return,
            null,
            renderWithHooks(null, _return, tmp403, pendingProps10, undefined, current2),
            current2,
          );
          child3 = _return.child;
        }
      }
      return child3;
    }
    case 17: {
      let pendingProps3;
      let type3;
      ({ type: type3, pendingProps: pendingProps3 } = _return);
      let tmp192 = pendingProps3;
      if ("ref" in pendingProps3) {
        obj11 = {};
        tmp192 = obj11;
        const keys4 = Object.keys();
        if (keys4 !== undefined) {
          tmp192 = obj11;
          while (keys4[tmp] !== undefined) {
            if ("ref" === tmp195) {
              continue;
            } else {
              obj11[tmp195] = pendingProps3[tmp195];
              continue;
            }
            continue;
          }
        }
      }
      const defaultProps2 = type3.defaultProps;
      let tmp196 = tmp192;
      if (defaultProps2) {
        let tmp197 = tmp192;
        if (tmp192 === pendingProps3) {
          tmp197 = assign({}, tmp192);
        }
        tmp196 = tmp197;
        const keys5 = Object.keys();
        if (keys5 !== undefined) {
          tmp196 = tmp197;
          while (keys5[tmp] !== undefined) {
            if (undefined !== tmp197[tmp201]) {
              continue;
            } else {
              tmp197[tmp201] = defaultProps2[tmp201];
              continue;
            }
            continue;
          }
        }
      }
      let tmp203 = !tmp202;
      if (!(1 & _return.mode)) {
        tmp203 = tmp3;
      }
      if (tmp203) {
        alternate.alternate = null;
        _return.alternate = null;
        _return.flags = _return.flags | 2;
      }
      _return.tag = 1;
      _null = _return;
      obj2 = null;
      const dependencies4 = _return.dependencies;
      if (null !== dependencies4) {
        dependencies4.firstContext = null;
      }
      constructClassInstance(_return, type3, tmp196);
      mountClassInstance(_return, type3, tmp196, current2);
      return finishClassComponent(null, _return, type3, true, 0, current2);
    }
    case 18: {
      let _Error7 = Error;
      tag = _return.tag;
      let text = `Unknown unit of work tag (${tag}`;
      let text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      ErrorResult = Error(
        `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`,
      );
      throw ErrorResult;
    }
    case 19: {
      return updateSuspenseListComponent(alternate, _return, current2);
    }
    case 20: {
      let _Error7 = Error;
      tag = _return.tag;
      let text = `Unknown unit of work tag (${tag}`;
      let text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      ErrorResult = Error(
        `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`,
      );
      throw ErrorResult;
    }
    case 21: {
      let _Error7 = Error;
      tag = _return.tag;
      let text = `Unknown unit of work tag (${tag}`;
      let text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      ErrorResult = Error(
        `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`,
      );
      throw ErrorResult;
    }
    case 22: {
      return updateOffscreenComponent(alternate, _return, current2, _return.pendingProps);
    }
    case 23: {
      let _Error7 = Error;
      tag = _return.tag;
      let text = `Unknown unit of work tag (${tag}`;
      let text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      ErrorResult = Error(
        `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`,
      );
      throw ErrorResult;
    }
    case 24: {
      let tmp114;
      _null = _return;
      obj2 = null;
      const dependencies2 = _return.dependencies;
      if (null !== dependencies2) {
        dependencies2.firstContext = null;
      }
      const _currentValue2 = context._currentValue2;
      next = { context, memoizedValue: _currentValue2, next: null };
      if (null === obj2) {
        if (null === _null) {
          const _Error = Error;
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
          );
        } else {
          obj2 = next;
          const obj12 = { lanes: 0, firstContext: next };
          _null.dependencies = obj12;
          _null.flags = _null.flags | 524288;
        }
      } else {
        tmp79.next = next;
        obj2 = next;
      }
      if (null === alternate) {
        let pooledCache = closure_128.current ?? _null4.pooledCache;
        if (null === pooledCache) {
          obj13 = { controller: tmp101, data: map, refCount: obj13.refCount + 1 };
          const self = this;
          const self2 = this;
          const _Map = Map;
          const self3 = this;
          const self4 = this;
          tmp101 = new closure_106();
          _null4.pooledCache = obj13;
          _null4.pooledCacheLanes = _null4.pooledCacheLanes | current2;
          pooledCache = obj13;
          map = new Map();
        }
        const obj14 = { parent: _currentValue2, cache: pooledCache };
        _return.memoizedState = obj14;
        const obj16 = {
          baseState: _return.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, lanes: 0, hiddenCallbacks: null },
          callbacks: null,
        };
        _return.updateQueue = obj16;
        const sum20 = sum + 1;
        sum = sum20;
        closure_85[sum20] = closure_101.current;
        closure_101.current = context._currentValue2;
        context._currentValue2 = pooledCache;
      } else {
        if (alternate.lanes & current2) {
          const updateQueue = alternate.updateQueue;
          if (_return.updateQueue === updateQueue) {
            const obj17 = {
              baseState: null,
              firstBaseUpdate: null,
              lastBaseUpdate: null,
              shared: null,
              callbacks: null,
            };
            ({
              baseState: obj2.baseState,
              firstBaseUpdate: obj2.firstBaseUpdate,
              lastBaseUpdate: obj2.lastBaseUpdate,
              shared: obj2.shared,
            } = updateQueue);
            _return.updateQueue = obj17;
          }
          processUpdateQueue(_return, null, null, current2);
          if (c153) {
            if (null !== obj2) {
              throw obj2;
            }
          }
        }
        const memoizedState3 = alternate.memoizedState;
        if (memoizedState3.parent !== _currentValue2) {
          const obj18 = { parent: _currentValue2, cache: _currentValue2 };
          _return.memoizedState = obj18;
          if (0 === _return.lanes) {
            _return.updateQueue.baseState = obj18;
            _return.memoizedState = obj18;
          }
          const sum21 = sum + 1;
          sum = sum21;
          closure_85[sum21] = closure_101.current;
          closure_101.current = context._currentValue2;
          context._currentValue2 = _currentValue2;
        } else {
          const cache = tmp88.cache;
          const sum22 = sum + 1;
          sum = sum22;
          closure_85[sum22] = closure_101.current;
          closure_101.current = context._currentValue2;
          context._currentValue2 = cache;
          if (cache !== memoizedState3.cache) {
            items1 = [context];
            propagateContextChanges(_return, items1, current2, true);
          }
        }
      }
      const children = _return.pendingProps.children;
      if (null === alternate) {
        tmp114 = closure_141(_return, null, children, current2);
      } else {
        tmp114 = closure_140(_return, alternate.child, children, current2);
      }
      _return.child = tmp114;
      return _return.child;
    }
    case 25: {
      let _Error7 = Error;
      tag = _return.tag;
      let text = `Unknown unit of work tag (${tag}`;
      let text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      ErrorResult = Error(
        `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`,
      );
      throw ErrorResult;
    }
    case 26: {
      if (null !== _return.memoizedState) {
        sum16 = sum + 1;
        sum = sum16;
        closure_85[sum16] = closure_96.current;
        closure_96.current = _return;
      }
      tmp300 = closure_93;
      current2 = closure_93.current;
      if (current2 != current2) {
        sum17 = sum + 1;
        sum = sum17;
        closure_85[sum17] = closure_94.current;
        closure_94.current = _return;
        sum18 = sum + 1;
        sum = sum18;
        closure_85[sum18] = tmp300.current;
        tmp300.current = current2;
      }
      children5 = _return.pendingProps.children;
      if (null !== _return.memoizedState) {
        tmp314 = renderWithHooks(alternate, _return, TransitionAwareHostComponent, null, null, current2);
        context2._currentValue2 = tmp314;
      }
      ref = _return.ref;
      if (null === ref) {
        tmp320 = tmp3 && null !== alternate.ref;
        if (tmp320) {
          tmp321 = _return.flags | 4194816;
          _return.flags = tmp321;
        }
      } else {
        if (typeof ref !== "function") {
          if (typeof ref !== "object") {
            let _Error4 = Error;
            ErrorResult1 = Error(
              "Expected ref to be a function, an object returned by React.createRef(), or undefined/null.",
            );
            throw ErrorResult1;
          }
        }
        tmp316 = tmp3 && alternate.ref === ref;
        if (!tmp316) {
          tmp317 = _return.flags | 4194816;
          _return.flags = tmp317;
        }
      }
      if (null === alternate) {
        tmp326 = closure_141(_return, null, children5, current2);
      } else {
        tmp326 = closure_140(_return, alternate.child, children5, current2);
      }
      _return.child = tmp326;
      return _return.child;
    }
    case 27: {
      if (null !== _return.memoizedState) {
        sum16 = sum + 1;
        sum = sum16;
        closure_85[sum16] = closure_96.current;
        closure_96.current = _return;
      }
      tmp300 = closure_93;
      current2 = closure_93.current;
      if (current2 != current2) {
        sum17 = sum + 1;
        sum = sum17;
        closure_85[sum17] = closure_94.current;
        closure_94.current = _return;
        sum18 = sum + 1;
        sum = sum18;
        closure_85[sum18] = tmp300.current;
        tmp300.current = current2;
      }
      children5 = _return.pendingProps.children;
      if (null !== _return.memoizedState) {
        tmp314 = renderWithHooks(alternate, _return, TransitionAwareHostComponent, null, null, current2);
        context2._currentValue2 = tmp314;
      }
      ref = _return.ref;
      if (null === ref) {
        tmp320 = tmp3 && null !== alternate.ref;
        if (tmp320) {
          tmp321 = _return.flags | 4194816;
          _return.flags = tmp321;
        }
      } else {
        if (typeof ref !== "function") {
          if (typeof ref !== "object") {
            let _Error4 = Error;
            ErrorResult1 = Error(
              "Expected ref to be a function, an object returned by React.createRef(), or undefined/null.",
            );
            throw ErrorResult1;
          }
        }
        tmp316 = tmp3 && alternate.ref === ref;
        if (!tmp316) {
          tmp317 = _return.flags | 4194816;
          _return.flags = tmp317;
        }
      }
      if (null === alternate) {
        tmp326 = closure_141(_return, null, children5, current2);
      } else {
        tmp326 = closure_140(_return, alternate.child, children5, current2);
      }
      _return.child = tmp326;
      return _return.child;
    }
    case 28: {
      let pendingProps2;
      let type2;
      ({ type: type2, pendingProps: pendingProps2 } = _return);
      let tmp170 = pendingProps2;
      if ("ref" in pendingProps2) {
        const obj19 = {};
        tmp170 = obj19;
        const keys6 = Object.keys();
        if (keys6 !== undefined) {
          tmp170 = obj19;
          while (keys6[tmp] !== undefined) {
            if ("ref" === tmp173) {
              continue;
            } else {
              obj19[tmp173] = pendingProps2[tmp173];
              continue;
            }
            continue;
          }
        }
      }
      const defaultProps = type2.defaultProps;
      let tmp174 = tmp170;
      if (defaultProps) {
        let tmp175 = tmp170;
        if (tmp170 === pendingProps2) {
          tmp175 = assign({}, tmp170);
        }
        tmp174 = tmp175;
        const keys7 = Object.keys();
        if (keys7 !== undefined) {
          tmp174 = tmp175;
          while (keys7[tmp] !== undefined) {
            if (undefined !== tmp175[tmp179]) {
              continue;
            } else {
              tmp175[tmp179] = defaultProps[tmp179];
              continue;
            }
            continue;
          }
        }
      }
      let tmp181 = !tmp180;
      if (!(1 & _return.mode)) {
        tmp181 = tmp3;
      }
      if (tmp181) {
        alternate.alternate = null;
        _return.alternate = null;
        _return.flags = _return.flags | 2;
      }
      _return.tag = 0;
      _null = _return;
      obj2 = null;
      const dependencies3 = _return.dependencies;
      if (null !== dependencies3) {
        dependencies3.firstContext = null;
      }
      _return.flags = _return.flags | 1;
      _return.child = closure_141(
        _return,
        null,
        renderWithHooks(null, _return, type2, tmp174, undefined, current2),
        current2,
      );
      return _return.child;
    }
    case 29: {
      throw _return.pendingProps;
    }
    case 30: {
      let _Error7 = Error;
      tag = _return.tag;
      let text = `Unknown unit of work tag (${tag}`;
      let text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      ErrorResult = Error(
        `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`,
      );
      throw ErrorResult;
    }
    case 31: {
      let tmp127;
      const pendingProps = _return.pendingProps;
      _return.flags = _return.flags & -129;
      if (null === alternate) {
        const obj39 = { mode: null, children: null };
        ({ mode: obj10.mode, children: obj10.children } = pendingProps);
        const mode2 = _return.mode;
        Object.create(FiberNode.prototype);
        const obj41 = {
          tag: 22,
          key: null,
          elementType: null,
          type: null,
          stateNode: null,
          return: _return,
          child: null,
          sibling: null,
          index: 0,
          ref: _return.ref,
          refCleanup: null,
          pendingProps: obj39,
          memoizedProps: null,
          updateQueue: null,
          memoizedState: null,
          dependencies: null,
          mode: mode2,
          flags: 0,
          subtreeFlags: 0,
          deletions: null,
          lanes: 0,
          childLanes: 0,
          alternate: null,
        };
        _return.child = obj41;
        tmp127 = obj41;
      } else {
        const memoizedState6 = alternate.memoizedState;
        if (null !== memoizedState6) {
          const sum23 = sum + 1;
          sum = sum23;
          ({ current: closure_85[tmp130], current: closure_162.current } = closure_162);
          const sum24 = sum + 1;
          sum = sum24;
          closure_85[sum24] = closure_159.current;
          closure_159.current = _return;
          if (null === c160) {
            c160 = _return;
          }
          if (tmp125) {
            if (256 & _return.flags) {
              _return.flags = _return.flags & -257;
              tmp127 = retryActivityComponentWithoutHydrating(alternate, _return, current2);
            } else if (null !== _return.memoizedState) {
              _return.child = alternate.child;
              _return.flags = _return.flags | 128;
              tmp127 = null;
            } else {
              const _Error2 = Error;
              throw Error("Client rendering an Activity suspended it again. This is a bug in React.");
            }
          } else {
            const tmp136 = c222;
            if (!tmp136) {
              propagateParentContextChanges(0, _return, current2, false);
            }
            const tmp141 = c222;
            if (!tmp141) {
              if (!(current2 & alternate.childLanes)) {
                const obj42 = { mode: null, children: null };
                ({ mode: obj8.mode, children: obj8.children } = pendingProps);
                const mode = _return.mode;
                Object.create(FiberNode.prototype);
                obj44 = {
                  tag: 22,
                  key: null,
                  elementType: null,
                  type: null,
                  stateNode: null,
                  return: _return,
                  child: null,
                  sibling: null,
                  index: 0,
                  ref: _return.ref,
                  refCleanup: null,
                  pendingProps: obj42,
                  memoizedProps: null,
                  updateQueue: null,
                  memoizedState: null,
                  dependencies: null,
                  mode,
                  flags: obj44.flags | 4096,
                  subtreeFlags: 0,
                  deletions: null,
                  lanes: 0,
                  childLanes: 0,
                  alternate: null,
                };
                _return.child = obj44;
                tmp127 = obj44;
              }
            }
            if (null !== _null4) {
              let num34 = 1;
              if (!(42 & (current2 & -current2))) {
                if (2 === (current2 & -current2)) {
                  num34 = 1;
                } else if (8 === (current2 & -current2)) {
                  num34 = 4;
                } else if (32 === (current2 & -current2)) {
                  num34 = 16;
                } else {
                  if (256 !== (current2 & -current2)) {
                    if (512 !== (current2 & -current2)) {
                      if (1024 !== (current2 & -current2)) {
                        if (2048 !== (current2 & -current2)) {
                          if (4096 !== (current2 & -current2)) {
                            if (8192 !== (current2 & -current2)) {
                              if (16384 !== (current2 & -current2)) {
                                if (32768 !== (current2 & -current2)) {
                                  if (65536 !== (current2 & -current2)) {
                                    if (131072 !== (current2 & -current2)) {
                                      if (262144 !== (current2 & -current2)) {
                                        if (524288 !== (current2 & -current2)) {
                                          if (1048576 !== (current2 & -current2)) {
                                            if (2097152 !== (current2 & -current2)) {
                                              if (4194304 !== (current2 & -current2)) {
                                                if (8388608 !== (current2 & -current2)) {
                                                  if (16777216 !== (current2 & -current2)) {
                                                    if (33554432 !== (current2 & -current2)) {
                                                      num34 = 134217728;
                                                      if (268435456 !== (current2 & -current2)) {
                                                        num34 = 0;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  num34 = 128;
                }
              }
              let num36 = 0;
              if (!(num34 & (_null4.suspendedLanes | current2))) {
                num36 = num34;
              }
              if (0 !== num36) {
                if (num36 !== memoizedState6.retryLane) {
                  memoizedState6.retryLane = num36;
                  enqueueConcurrentRenderForLane(alternate, num36);
                  scheduleUpdateOnFiber(_null4, alternate, num36);
                  throw closure_221;
                }
              }
            }
            c287 = 4;
            let tmp145 = c283;
            if (!tmp145) {
              tmp145 = (4194048 & c280) !== c280 && null !== closure_159.current;
              const tmp148 = (4194048 & c280) !== c280 && null !== closure_159.current;
            }
            if (!tmp145) {
              closure_284 = true;
            }
            let tmp151 = !tmp150;
            if (!(134217727 & closure_288)) {
              tmp151 = !(134217727 & c289);
            }
            if (!tmp151) {
              tmp151 = null === _null4;
            }
            if (!tmp151) {
              markRootSuspended(_null4, c280, closure_291, false);
            }
            tmp127 = retryActivityComponentWithoutHydrating(alternate, _return, current2);
          }
        } else {
          const obj45 = { mode: null, children: null };
          ({ mode: obj7.mode, children: obj7.children } = pendingProps);
          tmp127 = createWorkInProgress(alternate.child, obj45);
          tmp127.ref = _return.ref;
          _return.child = tmp127;
          tmp127.return = _return;
        }
      }
      return tmp127;
    }
    default: {
      let _Error7 = Error;
      tag = _return.tag;
      let text = `Unknown unit of work tag (${tag}`;
      let text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      ErrorResult = Error(
        `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`,
      );
      throw ErrorResult;
    }
  }
}
function appendAllChildren(node, child, arg2, arg3) {
  let sibling;
  child = child.child;
  if (null !== child) {
    while (true) {
      if (5 === child.tag) {
        let stateNode2 = child.stateNode;
        let tmp9 = arg2 && arg3;
        let tmp10 = stateNode2;
        if (tmp9) {
          node = stateNode2.node;
          obj = get_BatchedBridge;
          obj2 = { style: { display: "none" } };
          let obj3 = {
            node: cloneNodeWithNewProps(
              node,
              obj.createAttributePayload(obj2, stateNode2.canonical.viewConfig.validAttributes),
            ),
            canonical: stateNode2.canonical,
          };
          tmp10 = obj3;
        }
        let tmp15 = appendChild(node.node, tmp10.node);
      } else if (6 === child.tag) {
        let stateNode = child.stateNode;
        if (arg2) {
          if (arg3) {
            break;
          }
        }
        let tmp7 = appendChild(node.node, stateNode.node);
      } else if (4 !== child.tag) {
        if (22 === child.tag) {
          if (null !== child.memoizedState) {
            let child2 = child.child;
            if (null !== child2) {
              child2.return = child;
            }
            let flag = true;
            let flag2 = true;
            let tmp5 = appendAllChildren(node, tmp, true, true);
          }
        }
        if (null !== child.child) {
          child.child.return = child;
          sibling = child.child;
        }
        child = sibling;
      }
      if (child !== child) {
        let tmp16 = child;
        let tmp17 = child;
        if (null === child.sibling) {
          while (null !== tmp16.return) {
            if (tmp16.return === child) {
              break;
            } else {
              _return = tmp16.return;
              tmp16 = _return;
              tmp17 = _return;
              continue;
            }
          }
        }
        ({ return: tmp17.sibling.return, sibling } = tmp17);
      }
    }
    const _Error = Error;
    throw Error("Not yet implemented.");
  }
}
function appendAllChildrenToContainer(arg0, child, arg2, arg3) {
  let sibling;
  child = child.child;
  let flag = false;
  let flag2 = false;
  if (null !== child) {
    while (true) {
      let flag3;
      let tmp20;
      if (5 === child.tag) {
        let stateNode2 = child.stateNode;
        let tmp10 = arg2 && arg3;
        let tmp11 = stateNode2;
        if (tmp10) {
          let node = stateNode2.node;
          obj = get_BatchedBridge;
          obj2 = { style: { display: "none" } };
          let obj3 = {
            node: cloneNodeWithNewProps(
              node,
              obj.createAttributePayload(obj2, stateNode2.canonical.viewConfig.validAttributes),
            ),
            canonical: stateNode2.canonical,
          };
          tmp11 = obj3;
        }
        let tmp16 = appendChildToSet(arg0, tmp11.node);
        flag3 = flag;
      } else if (6 === child.tag) {
        let stateNode = child.stateNode;
        if (arg2) {
          if (arg3) {
            break;
          }
        }
        let tmp8 = appendChildToSet(arg0, stateNode.node);
        flag3 = flag;
      } else {
        flag3 = flag;
        if (4 !== child.tag) {
          if (22 === child.tag) {
            if (null !== child.memoizedState) {
              let child2 = child.child;
              if (null !== child2) {
                child2.return = child;
              }
              let flag4 = true;
              let flag5 = true;
              let tmp6 = appendAllChildrenToContainer(arg0, tmp, true, true);
              flag3 = true;
            }
          }
          flag3 = flag;
          if (null !== child.child) {
            child.child.return = child;
            sibling = child.child;
            tmp20 = flag;
          }
          child = sibling;
          flag = tmp20;
          flag2 = tmp20;
        }
      }
      flag2 = flag3;
      if (child !== child) {
        let tmp17 = child;
        let tmp18 = child;
        if (null === child.sibling) {
          while (null !== tmp17.return) {
            if (tmp17.return === child) {
              break;
            } else {
              _return = tmp17.return;
              tmp17 = _return;
              tmp18 = _return;
              continue;
            }
          }
          return flag3;
        }
        ({ return: tmp18.sibling.return, sibling } = tmp18);
        tmp20 = flag3;
      }
    }
    const _Error = Error;
    throw Error("Not yet implemented.");
  }
  return flag2;
}
function bubbleProperties(alternate) {
  let num3;
  let num4;
  let sibling = alternate.child;
  if (null !== alternate.alternate && alternate.alternate.child === alternate.child) {
    let num6 = 0;
    let num7 = 0;
    num3 = 0;
    num4 = 0;
    if (null !== sibling) {
      do {
        num7 = num7 | (sibling.lanes | sibling.childLanes);
        num6 = num6 | (65011712 & sibling.subtreeFlags) | (65011712 & sibling.flags);
        sibling.return = alternate;
        sibling = sibling.sibling;
        num3 = num6;
        num4 = num7;
      } while (null !== sibling);
    }
  } else {
    let sibling2 = sibling;
    let num = 0;
    let num2 = 0;
    num3 = 0;
    num4 = 0;
    if (null !== sibling) {
      do {
        num2 = num2 | (sibling2.lanes | sibling2.childLanes);
        num = num | sibling2.subtreeFlags | sibling2.flags;
        sibling2.return = alternate;
        sibling2 = sibling2.sibling;
        num3 = num;
        num4 = num2;
      } while (null !== sibling2);
    }
  }
  alternate.subtreeFlags = alternate.subtreeFlags | num3;
  alternate.childLanes = num4;
  return null !== alternate.alternate && alternate.alternate.child === alternate.child;
}
function unwindInterruptedWork(alternate, _return) {
  let diff1;
  let diff2;
  let diff3;
  let diff4;
  let diff5;
  let tmp14;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp29;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp77;
  switch (_return.tag) {
    case 3: {
      context._currentValue2 = closure_101.current;
      if (0 <= sum) {
        tmp65.current = closure_85[tmp66];
        closure_85[sum] = null;
        sum = sum - 1;
      }
      popHostContainer();
      break;
    }
    case 4: {
      popHostContainer();
      break;
    }
    case 5: {
      popHostContext(_return);
      break;
    }
    case 6: {
      break;
    }
    case 7: {
      break;
    }
    case 8: {
      break;
    }
    case 9: {
      break;
    }
    case 10: {
      _return.type._currentValue2 = closure_101.current;
      if (0 <= sum) {
        tmp37.current = closure_85[tmp38];
        closure_85[sum] = null;
        sum = sum - 1;
      }
      break;
    }
    case 11: {
      break;
    }
    case 12: {
      break;
    }
    case 13: {
      let tmp43 = sum;
      if (0 <= sum) {
        tmp41.current = closure_85[tmp42];
        closure_85[sum] = null;
        diff = sum - 1;
        sum = diff;
        tmp43 = diff;
      }
      if (c160 === _return) {
        c160 = null;
      }
      if (0 <= tmp43) {
        tmp51.current = closure_85[tmp43];
        closure_85[sum] = null;
        sum = sum - 1;
      }
      break;
    }
    case 14: {
      break;
    }
    case 15: {
      break;
    }
    case 16: {
      break;
    }
    case 17: {
      break;
    }
    case 18: {
      break;
    }
    case 19: {
      if (0 <= sum) {
        tmp39.current = closure_85[tmp40];
        closure_85[sum] = null;
        sum = sum - 1;
      }
      break;
    }
    case 20: {
      break;
    }
    case 21: {
      break;
    }
    case 22: {
      tmp4 = closure_159;
      tmp5 = sum;
      tmp6 = sum;
      if (0 <= sum) {
        tmp4.current = closure_85[tmp5];
        closure_85[sum] = null;
        diff1 = sum - 1;
        sum = diff1;
        tmp6 = diff1;
      }
      if (c160 === _return) {
        c160 = null;
      }
      tmp14 = closure_162;
      if (0 <= tmp6) {
        tmp14.current = closure_85[tmp6];
        closure_85[sum] = null;
        diff2 = sum - 1;
        sum = diff2;
      }
      tmp20 = closure_158;
      current2 = closure_158.current;
      tmp21 = closure_157;
      tmp22 = sum;
      tmp23 = sum;
      if (0 <= sum) {
        tmp21.current = closure_85[tmp22];
        closure_85[sum] = null;
        diff3 = sum - 1;
        sum = diff3;
        tmp23 = diff3;
      }
      tmp29 = tmp23;
      if (0 <= tmp23) {
        tmp20.current = closure_85[tmp23];
        closure_85[sum] = null;
        diff4 = sum - 1;
        sum = diff4;
        tmp29 = diff4;
      }
      if (null !== alternate) {
        tmp77 = closure_128;
        if (0 <= tmp29) {
          tmp77.current = closure_85[tmp29];
          closure_85[sum] = null;
          diff5 = sum - 1;
          sum = diff5;
        }
      }
      break;
    }
    case 23: {
      tmp4 = closure_159;
      tmp5 = sum;
      tmp6 = sum;
      if (0 <= sum) {
        tmp4.current = closure_85[tmp5];
        closure_85[sum] = null;
        diff1 = sum - 1;
        sum = diff1;
        tmp6 = diff1;
      }
      if (c160 === _return) {
        c160 = null;
      }
      tmp14 = closure_162;
      if (0 <= tmp6) {
        tmp14.current = closure_85[tmp6];
        closure_85[sum] = null;
        diff2 = sum - 1;
        sum = diff2;
      }
      tmp20 = closure_158;
      current2 = closure_158.current;
      tmp21 = closure_157;
      tmp22 = sum;
      tmp23 = sum;
      if (0 <= sum) {
        tmp21.current = closure_85[tmp22];
        closure_85[sum] = null;
        diff3 = sum - 1;
        sum = diff3;
        tmp23 = diff3;
      }
      tmp29 = tmp23;
      if (0 <= tmp23) {
        tmp20.current = closure_85[tmp23];
        closure_85[sum] = null;
        diff4 = sum - 1;
        sum = diff4;
        tmp29 = diff4;
      }
      if (null !== alternate) {
        tmp77 = closure_128;
        if (0 <= tmp29) {
          tmp77.current = closure_85[tmp29];
          closure_85[sum] = null;
          diff5 = sum - 1;
          sum = diff5;
        }
      }
      break;
    }
    case 24: {
      context._currentValue2 = closure_101.current;
      if (0 <= sum) {
        tmp2.current = closure_85[tmp3];
        closure_85[sum] = null;
        sum = sum - 1;
      }
      break;
    }
    case 25: {
      break;
    }
    case 26: {
      popHostContext(_return);
      break;
    }
    case 27: {
      popHostContext(_return);
      break;
    }
    case 28: {
      break;
    }
    case 29: {
      break;
    }
    case 30: {
      break;
    }
    case 31: {
      if (null !== _return.memoizedState) {
        let tmp57 = sum;
        if (0 <= sum) {
          tmp94.current = closure_85[tmp95];
          closure_85[sum] = null;
          const diff6 = sum - 1;
          sum = diff6;
          tmp57 = diff6;
        }
        if (c160 === _return) {
          c160 = null;
        }
        if (0 <= tmp57) {
          tmp59.current = closure_85[tmp57];
          closure_85[sum] = null;
          sum = sum - 1;
        }
      }
      break;
    }
  }
}
function commitHookEffectListMount(arg0, sibling) {
  let next2;
  try {
    const updateQueue = sibling.updateQueue;
    let lastEffect = null;
    if (null !== updateQueue) {
      lastEffect = tmp.lastEffect;
    }
    if (null !== lastEffect) {
      next = iter.next;
      let iter2 = next;
      do {
        if ((iter2.tag & arg0) === arg0) {
          let inst = iter2.inst;
          let destroy = iter2.create();
          inst.destroy = destroy;
        }
        next2 = iter2.next;
        iter2 = next2;
      } while (next2 !== tmp6);
    }
  } catch (tmp13) {
    captureCommitPhaseError(sibling, sibling.return, tmp13);
  }
}
function commitHookEffectListUnmount(arg0, sibling, sibling2) {
  try {
    const updateQueue = sibling.updateQueue;
    let lastEffect = null;
    if (null !== updateQueue) {
      lastEffect = tmp.lastEffect;
    }
    if (null !== lastEffect) {
      const next2 = iter.next;
      let iter2 = next2;
      if ((iter2.tag & arg0) === arg0) {
        const inst = iter2.inst;
        if (undefined !== inst.destroy) {
          tmp7.destroy = undefined;
          try {
            tmp12();
          } catch (tmp15) {
            captureCommitPhaseError(sibling, sibling2, tmp15);
          }
        }
      }
      next = iter2.next;
      iter2 = next;
    }
  } catch (tmp22) {
    captureCommitPhaseError(sibling, sibling.return, tmp22);
  }
}
function commitClassCallbacks(sibling) {
  const updateQueue = sibling.updateQueue;
  if (null !== updateQueue) {
    try {
      commitCallbacks(updateQueue, tmp);
    } catch (tmp4) {
      captureCommitPhaseError(sibling, sibling.return, tmp4);
    }
  }
}
function safelyCallComponentWillUnmount(sibling, sibling2, stateNode) {
  stateNode.props = resolveClassComponentProps(sibling.type, sibling.memoizedProps);
  stateNode.state = sibling.memoizedState;
  try {
    stateNode.componentWillUnmount();
  } catch (tmp2) {
    captureCommitPhaseError(sibling, sibling2, tmp2);
  }
}
function safelyAttachRef(sibling, sibling2) {
  try {
    if (null !== sibling.ref) {
      const tag = sibling.tag;
      if (26 !== tag) {
        if (27 !== tag) {
          let stateNode;
          if (5 !== tag) {
            stateNode = sibling.stateNode;
          }
          if (typeof sibling.ref === "function") {
            sibling.refCleanup = sibling.ref(stateNode);
          } else {
            sibling.ref.current = stateNode;
          }
        }
      }
      stateNode = getPublicInstance(sibling.stateNode);
    }
  } catch (tmp5) {
    captureCommitPhaseError(sibling, sibling2, tmp5);
  }
}
function safelyDetachRef(alternate, alternate2) {
  let ref;
  let refCleanup;
  ({ ref, refCleanup } = alternate);
  if (null !== ref) {
    if (typeof refCleanup === "function") {
      try {
        refCleanup();
        alternate.refCleanup = null;
        alternate = alternate.alternate;
        if (null != alternate) {
          alternate.refCleanup = null;
        }
      } catch (tmp7) {
        alternate.refCleanup = null;
        alternate2 = alternate.alternate;
        if (null != alternate2) {
          alternate2.refCleanup = null;
        }
        throw tmp7;
      }
    } else if (typeof ref === "function") {
      try {
        ref(null);
      } catch (tmp3) {
        captureCommitPhaseError(alternate, alternate2, tmp3);
      }
    } else {
      ref.current = null;
    }
  }
}
function commitHostMount(sibling) {
  try {
    const _Error = Error;
    throw Error(
      "The current renderer does not support mutation. This error is likely caused by a bug in React. Please file an issue.",
    );
  } catch (tmp2) {
    captureCommitPhaseError(sibling, sibling.return, tmp2);
  }
}
function commitHostPortalContainerChildren(stateNode, c302, childSet) {
  try {
    completeRoot(tmp.containerTag, childSet);
  } catch (tmp5) {
    captureCommitPhaseError(_null5, _null5.return, tmp5);
  }
}
function commitLayoutEffectOnFiber(arg0, alternate, c302) {
  let tmp23;
  let tmp24;
  let tmp32;
  let tmp65;
  const flags = _null5.flags;
  switch (_null5.tag) {
    case 0: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      tmp65 = 4 & flags;
      if (tmp65) {
        commitHookEffectListMount(5, _null5);
      }
      break;
    }
    case 1: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      if (4 & flags) {
        const stateNode2 = _null5.stateNode;
        if (null === alternate) {
          try {
            stateNode2.componentDidMount();
          } catch (tmp56) {
            captureCommitPhaseError(_null5, _null5.return, tmp56);
          }
        } else {
          try {
            stateNode2.componentDidUpdate(tmp49, tmp50, stateNode2.__reactInternalSnapshotBeforeUpdate);
          } catch (tmp52) {
            captureCommitPhaseError(_null5, _null5.return, tmp52);
          }
        }
      }
      if (64 & flags) {
        commitClassCallbacks(_null5);
      }
      if (512 & flags) {
        safelyAttachRef(_null5, _null5.return);
      }
      break;
    }
    case 2: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      break;
    }
    case 3: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      if (64 & flags) {
        const updateQueue = _null5.updateQueue;
        if (null !== updateQueue) {
          let stateNode1 = null;
          if (null !== _null5.child) {
            const tag = _null5.child.tag;
            if (27 !== tag) {
              if (5 !== tag) {
                stateNode1 = null;
                if (1 === tag) {
                  stateNode1 = _null5.child.stateNode;
                }
              }
            }
            stateNode1 = getPublicInstance(_null5.child.stateNode);
          }
          try {
            commitCallbacks(updateQueue, stateNode1);
          } catch (tmp42) {
            captureCommitPhaseError(_null5, _null5.return, tmp42);
          }
        }
      }
      break;
    }
    case 4: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      break;
    }
    case 5: {
      let memoizedProps;
      let stateNode;
      let type;
      recursivelyTraverseLayoutEffects(arg0, _null5);
      if (null === alternate) {
        tmp23 = 4 & flags;
        if (tmp23) {
          commitHostMount(_null5);
        } else {
          tmp24 = 64 & flags;
          if (tmp24) {
            ({ type, memoizedProps, stateNode } = _null5);
            try {
              shim$1();
            } catch (tmp27) {
              captureCommitPhaseError(_null5, _null5.return, tmp27);
            }
          }
        }
      }
      tmp32 = 512 & flags;
      if (tmp32) {
        safelyAttachRef(_null5, _null5.return);
      }
      break;
    }
    case 6: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      break;
    }
    case 7: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      break;
    }
    case 8: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      break;
    }
    case 9: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      break;
    }
    case 10: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      break;
    }
    case 11: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      tmp65 = 4 & flags;
      if (tmp65) {
        commitHookEffectListMount(5, _null5);
      }
      break;
    }
    case 12: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      break;
    }
    case 13: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      if (64 & flags) {
        memoizedState = _null5.memoizedState;
        const tmp15 = null !== memoizedState && null !== memoizedState.dehydrated;
        if (tmp15) {
          retryDehydratedSuspenseBoundary.bind(null, _null5);
          shim$1();
        }
      }
      break;
    }
    case 14: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      break;
    }
    case 15: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      tmp65 = 4 & flags;
      if (tmp65) {
        commitHookEffectListMount(5, _null5);
      }
      break;
    }
    case 16: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      break;
    }
    case 17: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      break;
    }
    case 18: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      break;
    }
    case 19: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      break;
    }
    case 20: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      break;
    }
    case 21: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      break;
    }
    case 22: {
      if (1 & _null5.mode) {
        if (!(null !== _null5.memoizedState || closure_249)) {
          closure_249 = tmp4;
          const tmp5 = (null !== alternate && null !== alternate.memoizedState) || closure_250;
          closure_250 = tmp5;
          if (closure_250) {
            if (!closure_250) {
              recursivelyTraverseReappearLayoutEffects(arg0, _null5, 8772 & _null5.subtreeFlags);
            }
            closure_249 = tmp6;
            closure_250 = tmp7;
          }
          recursivelyTraverseLayoutEffects(arg0, _null5);
        }
      } else {
        recursivelyTraverseLayoutEffects(arg0, _null5);
      }
      break;
    }
    case 23: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      break;
    }
    case 24: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      break;
    }
    case 25: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      break;
    }
    case 26: {
      let memoizedProps;
      let stateNode;
      let type;
      recursivelyTraverseLayoutEffects(arg0, _null5);
      if (null === alternate) {
        tmp23 = 4 & flags;
        if (tmp23) {
          commitHostMount(_null5);
        } else {
          tmp24 = 64 & flags;
          if (tmp24) {
            ({ type, memoizedProps, stateNode } = _null5);
            try {
              shim$1();
            } catch (tmp27) {
              captureCommitPhaseError(_null5, _null5.return, tmp27);
            }
          }
        }
      }
      tmp32 = 512 & flags;
      if (tmp32) {
        safelyAttachRef(_null5, _null5.return);
      }
      break;
    }
    case 27: {
      let memoizedProps;
      let stateNode;
      let type;
      recursivelyTraverseLayoutEffects(arg0, _null5);
      if (null === alternate) {
        tmp23 = 4 & flags;
        if (tmp23) {
          commitHostMount(_null5);
        } else {
          tmp24 = 64 & flags;
          if (tmp24) {
            ({ type, memoizedProps, stateNode } = _null5);
            try {
              shim$1();
            } catch (tmp27) {
              captureCommitPhaseError(_null5, _null5.return, tmp27);
            }
          }
        }
      }
      tmp32 = 512 & flags;
      if (tmp32) {
        safelyAttachRef(_null5, _null5.return);
      }
      break;
    }
    case 28: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      break;
    }
    case 29: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      break;
    }
    case 30: {
      break;
    }
    case 31: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      break;
    }
    default: {
      recursivelyTraverseLayoutEffects(arg0, _null5);
      break;
    }
  }
}
function detachFiberAfterEffects(alternate) {
  alternate = alternate.alternate;
  if (null !== alternate) {
    alternate.alternate = null;
    detachFiberAfterEffects(alternate);
  }
  alternate.child = null;
  alternate.deletions = null;
  alternate.sibling = null;
  alternate.stateNode = null;
  alternate.return = null;
  alternate.dependencies = null;
  alternate.memoizedProps = null;
  alternate.memoizedState = null;
  alternate.pendingProps = null;
  alternate.stateNode = null;
  alternate.updateQueue = null;
}
function recursivelyTraverseDeletionEffects(c301, deletions, child) {
  let sibling = child.child;
  if (null !== sibling) {
    do {
      let tmp2 = commitDeletionEffectsOnFiber(c301, deletions, sibling);
      sibling = sibling.sibling;
    } while (null !== sibling);
  }
}
function commitDeletionEffectsOnFiber(c301, deletions, sibling) {
  let tmp17;
  let tmp20;
  let tmp30;
  if (__REACT_DEVTOOLS_GLOBAL_HOOK__2) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__2.onCommitFiberUnmount === "function") {
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__2.onCommitFiberUnmount(closure_72, sibling);
      } catch (err) {}
    }
  }
  switch (sibling.tag) {
    case 0: {
      tmp17 = closure_250;
      if (!tmp17) {
        commitHookEffectListUnmount(2, sibling, deletions);
      }
      tmp20 = closure_250;
      if (!tmp20) {
        commitHookEffectListUnmount(4, sibling, deletions);
      }
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 1: {
      const tmp12 = closure_250;
      if (!tmp12) {
        safelyDetachRef(sibling, deletions);
        const stateNode = sibling.stateNode;
        if (typeof stateNode.componentWillUnmount === "function") {
          safelyCallComponentWillUnmount(sibling, deletions, stateNode);
        }
      }
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 2: {
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 3: {
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 4: {
      commitHostPortalContainerChildren(sibling.stateNode, sibling, createChildSet());
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 5: {
      tmp30 = closure_250;
      if (!tmp30) {
        safelyDetachRef(sibling, deletions);
      }
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 6: {
      break;
    }
    case 7: {
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 8: {
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 9: {
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 10: {
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 11: {
      tmp17 = closure_250;
      if (!tmp17) {
        commitHookEffectListUnmount(2, sibling, deletions);
      }
      tmp20 = closure_250;
      if (!tmp20) {
        commitHookEffectListUnmount(4, sibling, deletions);
      }
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 12: {
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 13: {
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 14: {
      tmp17 = closure_250;
      if (!tmp17) {
        commitHookEffectListUnmount(2, sibling, deletions);
      }
      tmp20 = closure_250;
      if (!tmp20) {
        commitHookEffectListUnmount(4, sibling, deletions);
      }
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 15: {
      tmp17 = closure_250;
      if (!tmp17) {
        commitHookEffectListUnmount(2, sibling, deletions);
      }
      tmp20 = closure_250;
      if (!tmp20) {
        commitHookEffectListUnmount(4, sibling, deletions);
      }
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 16: {
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 17: {
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 18: {
      break;
    }
    case 19: {
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 20: {
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 21: {
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 22: {
      if (1 & sibling.mode) {
        const tmp6 = closure_250 || null !== sibling.memoizedState;
        recursivelyTraverseDeletionEffects(c301, deletions, sibling);
        closure_250 = tmp5;
      } else {
        recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      }
      break;
    }
    case 23: {
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 24: {
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 25: {
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 26: {
      tmp30 = closure_250;
      if (!tmp30) {
        safelyDetachRef(sibling, deletions);
      }
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    case 27: {
      tmp30 = closure_250;
      if (!tmp30) {
        safelyDetachRef(sibling, deletions);
      }
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
    default: {
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      break;
    }
  }
}
function attachSuspenseRetryListeners(handler, updateQueue3) {
  let closure_0 = handler;
  const tag = handler.tag;
  if (31 !== tag) {
    if (13 !== tag) {
      if (19 !== tag) {
        if (22 === tag) {
          const stateNode = handler.stateNode;
          let _retryCache = stateNode._retryCache;
          if (null === _retryCache) {
            const self = this;
            const self2 = this;
            const tmp4 = new closure_251();
            stateNode._retryCache = tmp4;
            _retryCache = tmp4;
          }
        } else {
          const _Error = Error;
          throw Error("Unexpected Suspense handler tag (" + handler.tag + "). This is a bug in React.");
        }
      }
      const item = updateQueue3.forEach((promise) => {
        if (!_retryCache.has(promise)) {
          _retryCache.add(promise);
          const bindResult = resolveRetryWakeable.bind(null, handler, promise);
          promise.then(bindResult, bindResult);
        }
      });
    }
  }
  let stateNode2 = handler.stateNode;
  if (null === stateNode2) {
    const self3 = this;
    const self4 = this;
    const tmp7 = new closure_251();
    handler.stateNode = tmp7;
    stateNode2 = tmp7;
  }
  _retryCache = stateNode2;
}
function recursivelyTraverseMutationEffects(c301, deletions) {
  deletions = deletions.deletions;
  if (null !== deletions) {
    let num3;
    for (let num3 = 0; num3 < deletions.length; num3 = num3 + 1) {
      let tmp = deletions[num3];
      let tmp3 = commitDeletionEffectsOnFiber(c301, deletions, tmp);
      let alternate = tmp.alternate;
      if (null !== alternate) {
        alternate.return = null;
      }
      tmp.return = null;
    }
  }
  if (13886 & deletions.subtreeFlags) {
    let sibling = deletions.child;
    if (null !== sibling) {
      do {
        let tmp6 = commitMutationEffectsOnFiber(sibling, c301);
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
  }
}
function commitMutationEffectsOnFiber(c302, c301) {
  let alternate;
  let flags;
  let tmp32;
  let tmp55;
  let tmp56;
  let tmp76;
  let updateQueue3;
  ({ alternate, flags } = _null5);
  switch (_null5.tag) {
    case 0: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      tmp76 = 4 & flags;
      if (tmp76) {
        commitHookEffectListUnmount(3, _null5, _null5.return);
        commitHookEffectListMount(3, _null5);
        commitHookEffectListUnmount(5, _null5, _null5.return);
      }
      break;
    }
    case 1: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      if (512 & flags) {
        const tmp65 = closure_250 || null === alternate;
        if (!tmp65) {
          safelyDetachRef(alternate, alternate.return);
        }
      }
      const tmp69 = 64 & flags && closure_249;
      if (tmp69) {
        const updateQueue4 = _null5.updateQueue;
        if (null !== updateQueue4) {
          const callbacks = updateQueue4.callbacks;
          if (null !== callbacks) {
            let combined = callbacks;
            const shared = updateQueue4.shared;
            if (null !== updateQueue4.shared.hiddenCallbacks) {
              combined = hiddenCallbacks.concat(callbacks);
            }
            shared.hiddenCallbacks = combined;
          }
        }
      }
      break;
    }
    case 2: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      break;
    }
    case 3: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      if (4 & flags) {
        try {
          completeRoot(tmp44.containerTag, tmp45);
        } catch (tmp48) {
          captureCommitPhaseError(_null5, _null5.return, tmp48);
        }
      }
      break;
    }
    case 4: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      if (4 & flags) {
        commitHostPortalContainerChildren(_null5.stateNode, _null5, _null5.stateNode.pendingChildren);
      }
      break;
    }
    case 5: {
      let alternate2;
      let stateNode2;
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      tmp55 = 512 & flags;
      if (tmp55) {
        tmp56 = closure_250 || null === alternate;
        if (!tmp56) {
          safelyDetachRef(alternate, alternate.return);
        }
      }
      if (null !== _null5.alternate) {
        ({ alternate: alternate2, stateNode: stateNode2 } = _null5);
        alternate2.stateNode = stateNode2;
      }
      break;
    }
    case 6: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      break;
    }
    case 7: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      break;
    }
    case 8: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      break;
    }
    case 9: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      break;
    }
    case 10: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      break;
    }
    case 11: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      tmp76 = 4 & flags;
      if (tmp76) {
        commitHookEffectListUnmount(3, _null5, _null5.return);
        commitHookEffectListMount(3, _null5);
        commitHookEffectListUnmount(5, _null5, _null5.return);
      }
      break;
    }
    case 12: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      break;
    }
    case 13: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      if (8192 & _null5.child.flags) {
        const tmp24 = null === _null5.memoizedState || (null !== alternate && null !== alternate.memoizedState);
        if (!tmp24) {
          obj = _mod287;
          closure_296 = obj.unstable_now();
        }
      }
      if (4 & flags) {
        const updateQueue2 = _null5.updateQueue;
        if (null !== updateQueue2) {
          _null5.updateQueue = null;
          attachSuspenseRetryListeners(_null5, updateQueue2);
        }
      }
      break;
    }
    case 14: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      tmp76 = 4 & flags;
      if (tmp76) {
        commitHookEffectListUnmount(3, _null5, _null5.return);
        commitHookEffectListMount(3, _null5);
        commitHookEffectListUnmount(5, _null5, _null5.return);
      }
      break;
    }
    case 15: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      tmp76 = 4 & flags;
      if (tmp76) {
        commitHookEffectListUnmount(3, _null5, _null5.return);
        commitHookEffectListMount(3, _null5);
        commitHookEffectListUnmount(5, _null5, _null5.return);
      }
      break;
    }
    case 16: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      break;
    }
    case 17: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      break;
    }
    case 18: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      break;
    }
    case 19: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      tmp32 = 4 & flags;
      if (tmp32) {
        updateQueue3 = _null5.updateQueue;
        if (null !== updateQueue3) {
          _null5.updateQueue = null;
          attachSuspenseRetryListeners(_null5, updateQueue3);
        }
      }
      break;
    }
    case 20: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      break;
    }
    case 21: {
      break;
    }
    case 22: {
      let tmp2 = null !== alternate;
      memoizedState = _null5.memoizedState;
      if (tmp2) {
        tmp2 = null !== alternate.memoizedState;
      }
      if (1 & _null5.mode) {
        const tmp8 = closure_249 || tmp3;
        closure_250 = tmp7 || tmp2;
        const tmp9 = tmp7 || tmp2;
        recursivelyTraverseMutationEffects(c301, _null5);
        closure_250 = tmp7;
        closure_249 = tmp6;
      } else {
        recursivelyTraverseMutationEffects(c301, _null5);
      }
      commitReconciliationEffects(_null5);
      if (8192 & flags) {
        let tmp14;
        const stateNode = _null5.stateNode;
        const _visibility = stateNode._visibility;
        if (null !== memoizedState) {
          tmp14 = -2 & _visibility;
        } else {
          tmp14 = 1 | _visibility;
        }
        stateNode._visibility = tmp14;
        if (null !== memoizedState) {
          const tmp15 = null === alternate || tmp2 || closure_249 || closure_250;
          if (!tmp15) {
            if (1 & _null5.mode) {
              recursivelyTraverseDisappearLayoutEffects(_null5);
            }
          }
        }
      }
      if (4 & flags) {
        const updateQueue = _null5.updateQueue;
        if (null !== updateQueue) {
          const retryQueue = updateQueue.retryQueue;
          if (null !== retryQueue) {
            updateQueue.retryQueue = null;
            attachSuspenseRetryListeners(_null5, retryQueue);
          }
        }
      }
      break;
    }
    case 23: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      break;
    }
    case 24: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      break;
    }
    case 25: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      break;
    }
    case 26: {
      let alternate2;
      let stateNode2;
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      tmp55 = 512 & flags;
      if (tmp55) {
        tmp56 = closure_250 || null === alternate;
        if (!tmp56) {
          safelyDetachRef(alternate, alternate.return);
        }
      }
      if (null !== _null5.alternate) {
        ({ alternate: alternate2, stateNode: stateNode2 } = _null5);
        alternate2.stateNode = stateNode2;
      }
      break;
    }
    case 27: {
      let alternate2;
      let stateNode2;
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      tmp55 = 512 & flags;
      if (tmp55) {
        tmp56 = closure_250 || null === alternate;
        if (!tmp56) {
          safelyDetachRef(alternate, alternate.return);
        }
      }
      if (null !== _null5.alternate) {
        ({ alternate: alternate2, stateNode: stateNode2 } = _null5);
        alternate2.stateNode = stateNode2;
      }
      break;
    }
    case 28: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      break;
    }
    case 29: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      break;
    }
    case 30: {
      break;
    }
    case 31: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      tmp32 = 4 & flags;
      if (tmp32) {
        updateQueue3 = _null5.updateQueue;
        if (null !== updateQueue3) {
          _null5.updateQueue = null;
          attachSuspenseRetryListeners(_null5, updateQueue3);
        }
      }
      break;
    }
    default: {
      recursivelyTraverseMutationEffects(c301, _null5);
      commitReconciliationEffects(_null5);
      break;
    }
  }
}
function commitReconciliationEffects(flags) {
  flags = flags.flags;
  if (2 & flags) {
    flags.flags = flags.flags & -3;
  }
  if (4096 & flags) {
    flags.flags = flags.flags & -4097;
  }
}
function recursivelyTraverseLayoutEffects(arg0, subtreeFlags) {
  if (8772 & subtreeFlags.subtreeFlags) {
    let sibling = subtreeFlags.child;
    if (null !== sibling) {
      do {
        let tmp3 = commitLayoutEffectOnFiber(arg0, sibling.alternate, sibling);
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
  }
}
function recursivelyTraverseDisappearLayoutEffects(sibling) {
  sibling = sibling.child;
  if (null !== sibling) {
    while (true) {
      let tag = sibling.tag;
      if (0 !== tag) {
        if (11 !== tag) {
          if (14 !== tag) {
            if (15 !== tag) {
              if (1 === tag) {
                let tmp9 = safelyDetachRef(sibling, sibling.return);
                let stateNode = sibling.stateNode;
                if (typeof stateNode.componentWillUnmount === "function") {
                  let tmp19 = safelyCallComponentWillUnmount(sibling, sibling.return, stateNode);
                }
                let tmp11 = recursivelyTraverseDisappearLayoutEffects(sibling);
              } else {
                if (27 !== tag) {
                  if (26 !== tag) {
                    if (5 !== tag) {
                      if (22 === tag) {
                        if (null === sibling.memoizedState) {
                          let tmp17 = recursivelyTraverseDisappearLayoutEffects(sibling);
                        }
                      } else {
                        let tmp3 = recursivelyTraverseDisappearLayoutEffects(sibling);
                      }
                    }
                  }
                }
                let tmp5 = safelyDetachRef(sibling, sibling.return);
                let tmp7 = recursivelyTraverseDisappearLayoutEffects(sibling);
              }
            }
            sibling = sibling.sibling;
            if (null === sibling) {
              break;
            }
          }
        }
      }
      let tmp13 = commitHookEffectListUnmount(4, sibling, sibling.return);
      let tmp15 = recursivelyTraverseDisappearLayoutEffects(sibling);
    }
  }
}
function recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2) {
  let length;
  sibling = sibling.child;
  if (null !== sibling) {
    let tmp12;
    const alternate = sibling.alternate;
    const flags = sibling.flags;
    switch (sibling.tag) {
      case 0: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        commitHookEffectListMount(4, sibling);
        let siblingValue = sibling.sibling;
        break;
      }
      case 1: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        const stateNode = sibling.stateNode;
        obj = stateNode;
        if (typeof stateNode.componentDidMount === "function") {
          try {
            obj.componentDidMount();
          } catch (tmp22) {
            captureCommitPhaseError(sibling, sibling.return, tmp22);
          }
        }
        const updateQueue = sibling.updateQueue;
        if (null !== updateQueue) {
          try {
            if (null !== updateQueue.shared.hiddenCallbacks) {
              updateQueue.shared.hiddenCallbacks = null;
              let num2 = 0;
              if (0 < updateQueue.shared.hiddenCallbacks.length) {
                do {
                  let tmp33 = callCallback(arr[num2], tmp26);
                  sum = num2 + 1;
                  num2 = sum;
                  length = arr.length;
                } while (sum < length);
              }
            }
          } catch (tmp35) {
            captureCommitPhaseError(sibling, sibling.return, tmp35);
          }
        }
        const tmp38 = arg2 && 8772 & sibling.subtreeFlags && 64 & flags;
        if (tmp38) {
          commitClassCallbacks(sibling);
        }
        safelyAttachRef(sibling, sibling.return);
        break;
      }
      case 2: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
      case 3: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
      case 4: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
      case 5: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        tmp12 = tmp && null === alternate && 4 & flags;
        if (tmp12) {
          commitHostMount(sibling);
        }
        safelyAttachRef(sibling, sibling.return);
        break;
      }
      case 6: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
      case 7: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
      case 8: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
      case 9: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
      case 10: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
      case 11: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        commitHookEffectListMount(4, sibling);
        let siblingValue = sibling.sibling;
        break;
      }
      case 12: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
      case 13: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
      case 14: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
      case 15: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        commitHookEffectListMount(4, sibling);
        let siblingValue = sibling.sibling;
        break;
      }
      case 16: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
      case 17: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
      case 18: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
      case 19: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
      case 20: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
      case 21: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
      case 22: {
        if (null === sibling.memoizedState) {
          recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        }
        safelyAttachRef(sibling, sibling.return);
        break;
      }
      case 23: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
      case 24: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
      case 25: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
      case 26: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        tmp12 = tmp && null === alternate && 4 & flags;
        if (tmp12) {
          commitHostMount(sibling);
        }
        safelyAttachRef(sibling, sibling.return);
        break;
      }
      case 27: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        tmp12 = tmp && null === alternate && 4 & flags;
        if (tmp12) {
          commitHostMount(sibling);
        }
        safelyAttachRef(sibling, sibling.return);
        break;
      }
      case 28: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
      case 29: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
      case 30: {
        break;
      }
      case 31: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
      default: {
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, arg2 && 8772 & sibling.subtreeFlags);
        break;
      }
    }
  }
}
function commitOffscreenPassiveMountEffects(alternate, sibling) {
  let pool = null;
  const tmp = null !== alternate && null !== alternate.memoizedState && null !== alternate.memoizedState.cachePool;
  if (tmp) {
    pool = alternate.memoizedState.cachePool.pool;
  }
  let pool1 = null;
  const tmp3 = null !== sibling.memoizedState && null !== sibling.memoizedState.cachePool;
  if (tmp3) {
    pool1 = sibling.memoizedState.cachePool.pool;
  }
  if (pool1 !== pool) {
    if (null != pool1) {
      pool1.refCount = pool1.refCount + 1;
    }
    if (null != pool) {
      pool.refCount = pool.refCount - 1;
      if (0 === pool.refCount) {
        obj = _mod287;
        const result = obj.unstable_scheduleCallback(_mod287.unstable_NormalPriority, () => {
          const controller = pooledCache.controller;
          controller.abort();
        });
      }
    }
  }
}
function commitCachePassiveMountEffect(arg0, alternate) {
  let cache1 = null;
  if (null !== alternate.alternate) {
    cache1 = alternate.alternate.memoizedState.cache;
  }
  const cache = alternate.memoizedState.cache;
  if (cache !== cache1) {
    cache.refCount = cache.refCount + 1;
    if (null != cache1) {
      cache1.refCount = cache1.refCount - 1;
      if (0 === cache1.refCount) {
        obj = _mod287;
        const result = obj.unstable_scheduleCallback(_mod287.unstable_NormalPriority, () => {
          const controller = pooledCache.controller;
          controller.abort();
        });
      }
    }
  }
}
function recursivelyTraversePassiveMountEffects(arg0, subtreeFlags, arg2, arg3) {
  if (10256 & subtreeFlags.subtreeFlags) {
    let sibling = subtreeFlags.child;
    if (null !== sibling) {
      do {
        let tmp7 = commitPassiveMountOnFiber(arg0, sibling, arg2, arg3);
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
  }
}
function commitPassiveMountOnFiber(arg0, current, arg2, arg3) {
  let tmp75;
  const flags = current.flags;
  switch (current.tag) {
    case 0: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      tmp75 = 2048 & flags;
      if (tmp75) {
        commitHookEffectListMount(9, current);
      }
      break;
    }
    case 1: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    case 2: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    case 3: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      if (2048 & flags) {
        let cache1 = null;
        if (null !== current.alternate) {
          cache1 = current.alternate.memoizedState.cache;
        }
        const cache = current.memoizedState.cache;
        if (cache !== cache1) {
          cache.refCount = cache.refCount + 1;
          if (null != cache1) {
            releaseCache(cache1);
          }
        }
      }
      break;
    }
    case 4: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    case 5: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    case 6: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    case 7: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    case 8: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    case 9: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    case 10: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    case 11: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      tmp75 = 2048 & flags;
      if (tmp75) {
        commitHookEffectListMount(9, current);
      }
      break;
    }
    case 12: {
      let id;
      let onPostCommit;
      const tmp43 = 2048 & flags;
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      if (tmp43) {
        try {
          const memoizedProps = current.memoizedProps;
          ({ id, onPostCommit } = memoizedProps);
          if (typeof onPostCommit === "function") {
            let str = "update";
            if (null === current.alternate) {
              str = "mount";
            }
            tmp52(id, str, tmp50.passiveEffectDuration, -0);
          }
        } catch (tmp56) {
          captureCommitPhaseError(current, current.return, tmp56);
        }
      }
      break;
    }
    case 13: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    case 14: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    case 15: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      tmp75 = 2048 & flags;
      if (tmp75) {
        commitHookEffectListMount(9, current);
      }
      break;
    }
    case 16: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    case 17: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    case 18: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    case 19: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    case 20: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    case 21: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    case 22: {
      let alternate2;
      let stateNode;
      ({ stateNode, alternate: alternate2 } = current);
      if (null !== current.memoizedState) {
        if (2 & stateNode._visibility) {
          recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
        } else if (1 & current.mode) {
          recursivelyTraverseAtomicPassiveEffects(arg0, current);
        } else {
          stateNode._visibility = stateNode._visibility | 2;
          recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
        }
      } else if (2 & stateNode._visibility) {
        recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      } else {
        stateNode._visibility = stateNode._visibility | 2;
        const flag = 10256 & current.subtreeFlags || false;
        recursivelyTraverseReconnectPassiveEffects(arg0, current, arg2, arg3, flag);
      }
      if (2048 & flags) {
        commitOffscreenPassiveMountEffects(alternate2, current);
      }
      break;
    }
    case 23: {
      break;
    }
    case 24: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      if (2048 & flags) {
        const alternate = current.alternate;
        commitCachePassiveMountEffect(0, current);
      }
      break;
    }
    case 25: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    case 26: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    case 27: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    case 28: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    case 29: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    case 30: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    case 31: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
    default: {
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      break;
    }
  }
}
function recursivelyTraverseReconnectPassiveEffects(arg0, subtreeFlags, arg2, arg3, flag) {
  let flags;
  let tag;
  let tmp = flag;
  if (tmp) {
    tmp = 10256 & subtreeFlags.subtreeFlags || false;
  }
  let sibling = subtreeFlags.child;
  if (null !== sibling) {
    while (true) {
      ({ flags, tag } = sibling);
      let tmp3 = sibling;
      if (0 !== tag) {
        if (11 !== tag) {
          if (15 !== tag) {
            if (23 !== tag) {
              if (22 === tag) {
                let stateNode = sibling.stateNode;
                if (null !== sibling.memoizedState) {
                  if (2 & stateNode._visibility) {
                    let tmp42 = recursivelyTraverseReconnectPassiveEffects(arg0, tmp3, arg2, arg3, tmp);
                  } else if (1 & sibling.mode) {
                    let tmp35 = recursivelyTraverseAtomicPassiveEffects(arg0, sibling);
                  } else {
                    stateNode._visibility = stateNode._visibility | 2;
                    let tmp33 = recursivelyTraverseReconnectPassiveEffects(arg0, tmp3, arg2, arg3, tmp);
                  }
                } else {
                  stateNode._visibility = stateNode._visibility | 2;
                  let tmp26 = recursivelyTraverseReconnectPassiveEffects(arg0, tmp3, arg2, arg3, tmp);
                }
                let tmp43 = tmp && 2048 & flags;
                if (tmp43) {
                  let tmp45 = commitOffscreenPassiveMountEffects(sibling.alternate, sibling);
                }
              } else if (24 === tag) {
                let tmp17 = recursivelyTraverseReconnectPassiveEffects(arg0, tmp3, arg2, arg3, tmp);
                let tmp18 = tmp && 2048 & flags;
                if (tmp18) {
                  let alternate = sibling.alternate;
                  let cache1 = null;
                  if (null !== sibling.alternate) {
                    cache1 = sibling.alternate.memoizedState.cache;
                  }
                  let cache = sibling.memoizedState.cache;
                  if (cache !== cache1) {
                    cache.refCount = cache.refCount + 1;
                    if (null != cache1) {
                      cache1.refCount = cache1.refCount - 1;
                      if (0 === cache1.refCount) {
                        obj = _mod287;
                        let result = obj.unstable_scheduleCallback(_mod287.unstable_NormalPriority, () => {
                          const controller = pooledCache.controller;
                          controller.abort();
                        });
                      }
                    }
                  }
                }
              } else {
                let tmp10 = recursivelyTraverseReconnectPassiveEffects(arg0, tmp3, arg2, arg3, tmp);
              }
            }
          }
          sibling = sibling.sibling;
          if (null === sibling) {
            break;
          }
        }
      }
      let tmp52 = recursivelyTraverseReconnectPassiveEffects(arg0, tmp3, arg2, arg3, tmp);
      let tmp54 = commitHookEffectListMount(8, sibling);
    }
  }
}
function recursivelyTraverseAtomicPassiveEffects(arg0, sibling) {
  let flags;
  let tag;
  if (10256 & sibling.subtreeFlags) {
    sibling = sibling.child;
    if (null !== sibling) {
      do {
        ({ flags, tag } = sibling);
        if (22 === tag) {
          let tmp12 = recursivelyTraverseAtomicPassiveEffects(arg0, sibling);
          if (2048 & flags) {
            let tmp14 = commitOffscreenPassiveMountEffects(sibling.alternate, sibling);
          }
        } else if (24 === tag) {
          let tmp6 = recursivelyTraverseAtomicPassiveEffects(arg0, sibling);
          if (2048 & flags) {
            let alternate = sibling.alternate;
            let cache1 = null;
            if (null !== sibling.alternate) {
              cache1 = sibling.alternate.memoizedState.cache;
            }
            let cache = sibling.memoizedState.cache;
            if (cache !== cache1) {
              cache.refCount = cache.refCount + 1;
              if (null != cache1) {
                cache1.refCount = cache1.refCount - 1;
                if (0 === cache1.refCount) {
                  obj = _mod287;
                  let result = obj.unstable_scheduleCallback(_mod287.unstable_NormalPriority, () => {
                    const controller = pooledCache.controller;
                    controller.abort();
                  });
                }
              }
            }
          }
        } else {
          let tmp4 = recursivelyTraverseAtomicPassiveEffects(arg0, sibling);
        }
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
  }
}
function accumulateSuspenseyCommitOnFiber(alternate) {
  const tag = alternate.tag;
  if (26 === tag) {
    if (alternate.subtreeFlags & closure_270) {
      let sibling4 = alternate.child;
      if (null !== sibling4) {
        do {
          let tmp15 = accumulateSuspenseyCommitOnFiber(sibling4);
          sibling4 = sibling4.sibling;
        } while (null !== sibling4);
      }
    }
    const tmp17 = alternate.flags & closure_270 && null !== alternate.memoizedState;
    if (tmp17) {
      const _Error = Error;
      throw Error(
        "The current renderer does not support Resources. This error is likely caused by a bug in React. Please file an issue.",
      );
    }
  } else {
    if (5 !== tag) {
      if (3 !== tag) {
        if (4 !== tag) {
          if (22 === tag) {
            if (null === alternate.memoizedState) {
              alternate = alternate.alternate;
              if (null !== alternate) {
                if (null !== alternate.memoizedState) {
                  closure_270 = 16777216;
                  const tmp4 = closure_270;
                  if (alternate.subtreeFlags & closure_270) {
                    let sibling2 = alternate.child;
                    if (null !== sibling2) {
                      do {
                        let tmp7 = accumulateSuspenseyCommitOnFiber(sibling2);
                        sibling2 = sibling2.sibling;
                      } while (null !== sibling2);
                    }
                  }
                  closure_270 = tmp4;
                }
              }
              if (alternate.subtreeFlags & closure_270) {
                let sibling = alternate.child;
                if (null !== sibling) {
                  do {
                    let tmp3 = accumulateSuspenseyCommitOnFiber(sibling);
                    sibling = sibling.sibling;
                  } while (null !== sibling);
                }
              }
            }
          }
        }
      }
    }
    if (alternate.subtreeFlags & closure_270) {
      let sibling3 = alternate.child;
      if (null !== sibling3) {
        do {
          let tmp11 = accumulateSuspenseyCommitOnFiber(sibling3);
          sibling3 = sibling3.sibling;
        } while (null !== sibling3);
      }
    }
  }
}
function commitPassiveUnmountOnFiber(current) {
  let length;
  let length2;
  let length3;
  const tag = current.tag;
  if (0 !== tag) {
    if (11 !== tag) {
      if (15 !== tag) {
        if (3 !== tag) {
          if (12 !== tag) {
            if (22 === tag) {
              const stateNode = current.stateNode;
              if (null !== current.memoizedState) {
                if (2 & stateNode._visibility) {
                  stateNode._visibility = stateNode._visibility & -3;
                  recursivelyTraverseDisconnectPassiveEffects(current);
                }
              }
              const deletions = current.deletions;
              if (16 & current.flags) {
                if (null !== deletions) {
                  let num4 = 0;
                  if (0 < deletions.length) {
                    do {
                      let tmp = deletions[num4];
                      let c252 = tmp;
                      let tmp3 = commitPassiveUnmountEffectsInsideOfDeletedTree_begin(tmp, current);
                      num4 = num4 + 1;
                      length = deletions.length;
                    } while (num4 < length);
                  }
                }
                const alternate = current.alternate;
                if (null !== alternate) {
                  let sibling = alternate.child;
                  if (null !== sibling) {
                    alternate.child = null;
                    do {
                      sibling.sibling = null;
                      sibling = sibling.sibling;
                    } while (null !== tmp4);
                  }
                }
              }
              if (10256 & current.subtreeFlags) {
                let sibling2 = current.child;
                if (null !== sibling2) {
                  do {
                    let tmp6 = commitPassiveUnmountOnFiber(sibling2);
                    sibling2 = sibling2.sibling;
                  } while (null !== sibling2);
                }
              }
            }
          }
        }
        const deletions1 = current.deletions;
        if (16 & current.flags) {
          if (null !== deletions1) {
            let num9 = 0;
            if (0 < deletions1.length) {
              do {
                let tmp10 = deletions1[num9];
                c252 = tmp10;
                let tmp12 = commitPassiveUnmountEffectsInsideOfDeletedTree_begin(tmp10, current);
                num9 = num9 + 1;
                length2 = deletions1.length;
              } while (num9 < length2);
            }
          }
          const alternate2 = current.alternate;
          if (null !== alternate2) {
            let sibling3 = alternate2.child;
            if (null !== sibling3) {
              alternate2.child = null;
              do {
                sibling3.sibling = null;
                sibling3 = sibling3.sibling;
              } while (null !== tmp13);
            }
          }
        }
        if (10256 & current.subtreeFlags) {
          let sibling4 = current.child;
          if (null !== sibling4) {
            do {
              let tmp16 = commitPassiveUnmountOnFiber(sibling4);
              sibling4 = sibling4.sibling;
            } while (null !== sibling4);
          }
        }
      }
    }
  }
  const deletions2 = current.deletions;
  if (16 & current.flags) {
    if (null !== deletions2) {
      let num12 = 0;
      if (0 < deletions2.length) {
        do {
          let tmp18 = deletions2[num12];
          c252 = tmp18;
          let tmp20 = commitPassiveUnmountEffectsInsideOfDeletedTree_begin(tmp18, current);
          num12 = num12 + 1;
          length3 = deletions2.length;
        } while (num12 < length3);
      }
    }
    const alternate3 = current.alternate;
    if (null !== alternate3) {
      let sibling5 = alternate3.child;
      if (null !== sibling5) {
        alternate3.child = null;
        do {
          sibling5.sibling = null;
          sibling5 = sibling5.sibling;
        } while (null !== tmp21);
      }
    }
  }
  if (10256 & current.subtreeFlags) {
    let sibling6 = current.child;
    if (null !== sibling6) {
      do {
        let tmp24 = commitPassiveUnmountOnFiber(sibling6);
        sibling6 = sibling6.sibling;
      } while (null !== sibling6);
    }
  }
  if (2048 & current.flags) {
    commitHookEffectListUnmount(9, current, current.return);
  }
}
function recursivelyTraverseDisconnectPassiveEffects(sibling2) {
  let length;
  const deletions = sibling2.deletions;
  if (16 & sibling2.flags) {
    if (null !== deletions) {
      let num3 = 0;
      if (0 < deletions.length) {
        do {
          let tmp2 = deletions[num3];
          let c252 = tmp2;
          let tmp4 = commitPassiveUnmountEffectsInsideOfDeletedTree_begin(tmp2, sibling2);
          num3 = num3 + 1;
          length = deletions.length;
        } while (num3 < length);
      }
    }
    const alternate = sibling2.alternate;
    if (null !== alternate) {
      let sibling = alternate.child;
      if (null !== sibling) {
        alternate.child = null;
        do {
          sibling.sibling = null;
          sibling = sibling.sibling;
        } while (null !== tmp5);
      }
    }
  }
  sibling2 = sibling2.child;
  if (null !== sibling2) {
    while (true) {
      let tag = sibling2.tag;
      if (0 !== tag) {
        if (11 !== tag) {
          if (15 !== tag) {
            if (22 === tag) {
              let stateNode = sibling2.stateNode;
              if (2 & stateNode._visibility) {
                stateNode._visibility = stateNode._visibility & -3;
                let tmp10 = recursivelyTraverseDisconnectPassiveEffects(sibling2);
              }
            } else {
              let tmp8 = recursivelyTraverseDisconnectPassiveEffects(sibling2);
            }
          }
          sibling2 = sibling2.sibling;
          if (null === sibling2) {
            break;
          }
        }
      }
      let tmp12 = commitHookEffectListUnmount(8, sibling2, sibling2.return);
      let tmp14 = recursivelyTraverseDisconnectPassiveEffects(sibling2);
    }
  }
}
function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(arg0, current) {
  let alternate;
  let sibling;
  if (null !== _null3) {
    while (true) {
      let tmp = _null3;
      let tag = _null3.tag;
      if (0 !== tag) {
        if (11 !== tag) {
          let tmp7;
          if (15 !== tag) {
            if (23 !== tag) {
              if (22 !== tag) {
                if (24 === tag) {
                  let cache = tmp.memoizedState.cache;
                  cache.refCount = cache.refCount - 1;
                  if (0 === cache.refCount) {
                    obj = _mod287;
                    let result = obj.unstable_scheduleCallback(_mod287.unstable_NormalPriority, () => {
                      const controller = pooledCache.controller;
                      controller.abort();
                    });
                  }
                }
              }
            }
            if (null !== tmp.memoizedState) {
              if (null !== tmp.memoizedState.cachePool) {
                let pool = tmp.memoizedState.cachePool.pool;
                if (null != pool) {
                  pool.refCount = pool.refCount + 1;
                }
              }
            }
          }
          let child = tmp.child;
          if (null !== child) {
            child.return = tmp;
            _null3 = child;
            tmp7 = child;
          } else {
            tmp7 = _null3;
            if (null !== _null3) {
              while (true) {
                let tmp4 = _null3;
                ({ sibling, return: _return, alternate } = _null3);
                if (null !== alternate) {
                  tmp4.alternate = null;
                  let alternate2 = alternate.alternate;
                  if (null !== alternate2) {
                    alternate.alternate = null;
                    let tmp6 = detachFiberAfterEffects(alternate2);
                  }
                  alternate.child = null;
                  alternate.deletions = null;
                  alternate.sibling = null;
                  alternate.stateNode = null;
                  alternate.return = null;
                  alternate.dependencies = null;
                  alternate.memoizedProps = null;
                  alternate.memoizedState = null;
                  alternate.pendingProps = null;
                  alternate.stateNode = null;
                  alternate.updateQueue = null;
                }
                tmp4.child = null;
                tmp4.deletions = null;
                tmp4.sibling = null;
                tmp4.stateNode = null;
                tmp4.return = null;
                tmp4.dependencies = null;
                tmp4.memoizedProps = null;
                tmp4.memoizedState = null;
                tmp4.pendingProps = null;
                tmp4.stateNode = null;
                tmp4.updateQueue = null;
                if (tmp4 === arg0) {
                  break;
                } else {
                  if (null !== sibling) {
                    sibling.return = _return;
                    _null3 = sibling;
                    tmp7 = sibling;
                  } else {
                    _null3 = _return;
                    tmp7 = _return;
                  }
                  continue;
                }
              }
              _null3 = null;
              tmp7 = null;
            }
          }
          if (null === tmp7) {
            break;
          }
        }
      }
      let tmp3 = commitHookEffectListUnmount(8, tmp, current);
    }
  }
}
function requestUpdateLane(_reactInternals) {
  let num = 2;
  if (1 & _reactInternals.mode) {
    let num3;
    if (2 & closure_277) {
      if (0 !== c280) {
        num3 = c280 & -c280;
      }
      num = num3;
    }
    if (null !== __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T) {
      let tmp10 = c115;
      if (0 === c115) {
        let tmp11 = c124;
        if (0 === c124) {
          c78 = tmp13;
          tmp11 = c78;
          if (!(261888 & (c78 << 1))) {
            c78 = 256;
            tmp11 = tmp12;
          }
        }
        c115 = tmp11;
        tmp10 = tmp11;
      }
      num3 = tmp10;
    } else {
      num3 = closure_363;
      if (0 === closure_363) {
        let tmp5Result = null;
        if (closure_358) {
          tmp5Result = tmp5();
        }
        num3 = 32;
        if (null != tmp5Result) {
          num3 = 2;
          if (closure_355 !== tmp5Result) {
            num3 = 8;
            if (closure_356 !== tmp5Result) {
              num3 = 32;
              if (closure_357 === tmp5Result) {
                num3 = 268435456;
              }
            }
          }
        }
      }
    }
  }
  return num;
}
function scheduleUpdateOnFiber(cancelPendingCommit, _reactInternals, lane) {
  let tmp = cancelPendingCommit !== c278;
  if (!tmp) {
    tmp = 2 !== c281 && 9 !== tmp2;
    const tmp3 = 2 !== c281 && 9 !== tmp2;
  }
  if (tmp) {
    tmp = null === cancelPendingCommit.cancelPendingCommit;
  }
  if (!tmp) {
    prepareFreshStack(cancelPendingCommit, 0);
    markRootSuspended(cancelPendingCommit, c280, closure_291, false);
  }
  cancelPendingCommit.pendingLanes = cancelPendingCommit.pendingLanes | lane;
  if (268435456 !== lane) {
    cancelPendingCommit.suspendedLanes = 0;
    cancelPendingCommit.pingedLanes = 0;
    cancelPendingCommit.warmLanes = 0;
  }
  const tmp13 = tmp12 && cancelPendingCommit === c278;
  if (!tmp13) {
    if (cancelPendingCommit === c278) {
      if (!(2 & closure_277)) {
        c289 = c289 | lane;
      }
      if (4 === c287) {
        markRootSuspended(cancelPendingCommit, c280, closure_291, false);
      }
    }
    const tmp24 = cancelPendingCommit !== iter && null === cancelPendingCommit.next;
    if (tmp24) {
      if (null === iter) {
        iter = cancelPendingCommit;
      } else {
        tmp26.next = cancelPendingCommit;
        iter = cancelPendingCommit;
      }
    }
    c113 = true;
    const tmp28 = c112;
    if (!tmp28) {
      c112 = true;
      if (prop) {
        _queueMicrotask(() => {
          if (6 & closure_1_277) {
            obj = iter(closure_1_1[3]);
            const result = obj.unstable_scheduleCallback(
              iter(closure_1_1[3]).unstable_ImmediatePriority,
              closure_1_118,
            );
          } else {
            closure_1_119();
          }
        });
      } else {
        obj = _mod287;
        const result = obj.unstable_scheduleCallback(
          _mod287.unstable_ImmediatePriority,
          processRootScheduleInImmediateTask,
        );
      }
    }
    const tmp36 = 2 === lane && 0 === closure_277 && !(1 & _reactInternals.mode);
    if (tmp36) {
      obj2 = _mod287;
      closure_297 = obj2.unstable_now() + 500;
      flushSyncWorkAcrossRoots_impl(0, true);
    }
  }
}
function performWorkOnRoot(iter, tmp19Result, arg2) {
  function renderRootConcurrent(iter, tmp19Result) {
    let c279;
    next = iter;
    closure_277 = closure_277 | 2;
    const tmp = closure_277;
    let tmp2 = closure_318();
    if (c278 === iter) {
      let tmp5 = tmp19Result;
      if (c280 === tmp19Result) {
        const tmp7 = tmp19Result;
        closure_284 = closure_82(iter, tmp19Result);
      }
      try {
        let tmp9 = c281;
        if (0 !== c281) {
          if (null !== memoizedState) {
            if (1 === tmp9) {
              c281 = 0;
              promise = null;
              closure_324(iter, memoizedState, promise, 1);
            } else {
              if (2 !== tmp9) {
                if (9 !== tmp9) {
                  if (3 === tmp9) {
                    c281 = 7;
                  } else if (4 === tmp9) {
                    c281 = 5;
                  } else if (7 === tmp9) {
                    c281 = 0;
                    promise = null;
                    if (closure_134(promise)) {
                      closure_323(memoizedState);
                    } else {
                      closure_324(iter, memoizedState, promise, 7);
                    }
                  } else if (5 === tmp9) {
                    memoizedState = null;
                    const tag = tmp79.tag;
                    if (26 === tag) {
                      memoizedState = memoizedState.memoizedState;
                    } else if (5 !== tag) {
                      if (27 !== tag) {
                        c281 = 0;
                        promise = null;
                        closure_324(iter, memoizedState, promise, 5);
                      }
                    }
                    const tmp30 = memoizedState;
                    if (tmp30) {
                      closure_346();
                    } else {
                      c281 = 0;
                      promise = null;
                      const sibling = tmp29.sibling;
                      if (null !== sibling) {
                        memoizedState = tmp32;
                      } else {
                        _return = tmp29.return;
                        if (null !== _return) {
                          memoizedState = tmp34;
                          closure_325(_return);
                        } else {
                          memoizedState = null;
                        }
                      }
                    }
                  } else if (6 === tmp9) {
                    c281 = 0;
                    promise = null;
                    closure_324(iter, memoizedState, promise, 6);
                  } else if (8 === tmp9) {
                    closure_315();
                    c287 = 6;
                  } else {
                    const _Error = Error;
                    throw Error("Unexpected SuspendedReason. This is a bug in React.");
                  }
                }
                let c102 = null;
                let c103 = null;
                closure_5.H = tmp2;
                closure_5.A = tmp3;
                closure_277 = tmp;
                let num15 = 0;
                if (null === memoizedState) {
                  c278 = null;
                  c280 = 0;
                  closure_145();
                  num15 = c287;
                }
                return num15;
              }
              if (closure_134(promise)) {
                c281 = 0;
                promise = null;
                closure_323(memoizedState);
              } else {
                const fn = function n() {
                  let tmp2 = 2 !== c281;
                  if (tmp2) {
                    tmp2 = 9 !== tmp;
                  }
                  if (!tmp2) {
                    tmp2 = _null4 !== next;
                  }
                  if (!tmp2) {
                    c281 = 7;
                  }
                  const tmp5 = next !== next && null === next.next;
                  if (tmp5) {
                    if (null !== next) {
                      tmp7.next = next;
                    }
                  }
                  c113 = true;
                  const tmp9 = c112;
                  if (!tmp9) {
                    c112 = true;
                    if (prop) {
                      _queueMicrotask(() => {
                        if (6 & closure_1_277) {
                          obj = iter(closure_1_1[3]);
                          const result = obj.unstable_scheduleCallback(
                            iter(closure_1_1[3]).unstable_ImmediatePriority,
                            closure_1_118,
                          );
                        } else {
                          closure_1_119();
                        }
                      });
                    } else {
                      obj = require("00287__.js");
                      let result = obj.unstable_scheduleCallback(
                        require("00287__.js").unstable_ImmediatePriority,
                        processRootScheduleInImmediateTask,
                      );
                    }
                  }
                };
                promise.then(fn, fn);
              }
            }
          }
        }
        closure_322();
      } catch (tmp75) {
        closure_317(iter, tmp75);
      }
    }
    c298 = null;
    obj = next(closure_1[3]);
    closure_297 = obj.unstable_now() + 500;
    closure_316(iter, tmp19Result);
  }
  if (6 & closure_277) {
    const _Error3 = Error;
    throw Error("Should not already be working.");
  } else {
    let tmp6;
    let tmp = tmp19Result;
    let tmp2 = arg2;
    let tmp3 = !arg2;
    if (tmp3) {
      let num = 127;
      tmp3 = !(127 & tmp);
    }
    if (tmp3) {
      tmp3 = !(tmp & iter.expiredLanes);
    }
    if (!tmp3) {
      tmp3 = !(iter.pendingLanes & ~iter.suspendedLanes & ~iter.pingedLanes & tmp);
    }
    if (tmp3) {
      tmp6 = renderRootConcurrent(iter, tmp);
    } else {
      tmp6 = renderRootSync(iter, tmp, true);
    }
    let tmp7 = null;
    let flag3 = tmp3;
    let tmp9 = tmp6;
    const tmp10 = tmp;
    while (0 !== tmp6) {
      let alternate = iter.current.alternate;
      if (flag3) {
        if (!isRenderConsistentWithExternalStores(alternate)) {
          tmp6 = renderRootSync(iter, tmp, false);
          flag3 = false;
          continue;
        }
        continue;
      }
      let tmp13 = tmp6;
      let tmp14 = tmp;
      if (0 !== iter.tag) {
        tmp13 = tmp6;
        tmp14 = tmp;
        if (2 === tmp6) {
          let num10 = 0;
          if (!(iter.errorRecoveryDisabledLanes & tmp)) {
            let tmp15 = -536870913 & iter.pendingLanes;
            let tmp16 = tmp15;
            if (0 === tmp15) {
              let num9 = 0;
              if (536870912 & tmp15) {
                num9 = 536870912;
              }
              tmp16 = num9;
            }
            num10 = tmp16;
          }
          tmp13 = tmp6;
          tmp14 = tmp;
          if (0 !== num10) {
            let tmp88 = renderRootSync(iter, num10, false);
            let num11 = tmp88;
            if (2 !== tmp88) {
              if (c285) {
                iter.errorRecoveryDisabledLanes = iter.errorRecoveryDisabledLanes | tmp;
                c289 = c289 | tmp;
                num11 = 4;
              } else {
                let tmp18 = closure_294;
                closure_294 = _null3;
                num11 = tmp88;
                if (null !== closure_294) {
                  if (null === _null3) {
                    closure_294 = tmp18;
                    num11 = tmp88;
                  } else {
                    let push = _null3.push;
                    let applyResult = push.apply(closure_294, tmp18);
                    num11 = tmp88;
                  }
                }
              }
            }
            tmp6 = num11;
            flag3 = false;
            tmp = num10;
            tmp14 = num10;
            tmp13 = num11;
          }
        }
      }
      if (1 === tmp13) {
        let tmp65 = prepareFreshStack(iter, 0);
        let flag5 = true;
        let tmp69 = markRootSuspended(iter, tmp14, 0, true);
      } else {
        if (0 !== tmp13) {
          if (1 !== tmp13) {
            if (4 === tmp13) {
              let num15 = 4194048;
              if ((4194048 & tmp14) !== tmp14) {
                if ((62914560 & tmp14) === tmp14) {
                  if (3 === tmp13) {
                    sum = closure_296 + 300;
                    obj = _mod287;
                    diff = sum - obj.unstable_now();
                    if (10 < diff) {
                      let tmp61 = markRootSuspended(iter, tmp14, closure_291, !c283);
                      let flag4 = true;
                      if (0 === getNextLanes(iter, 0, true)) {
                        c303 = tmp14;
                        let str4 = "Throttled";
                        iter.timeoutHandle = setTimeout(
                          commitRootWhenReady.bind(
                            null,
                            iter,
                            alternate,
                            closure_294,
                            c298,
                            c295,
                            tmp14,
                            closure_291,
                            c289,
                            c292,
                            c283,
                            tmp13,
                            "Throttled",
                            -0,
                            0,
                          ),
                          diff,
                        );
                      }
                    }
                  }
                }
                let tmp34 = closure_294;
                let tmp37 = c289;
                iter.timeoutHandle = -1;
                let subtreeFlags = alternate.subtreeFlags;
                let tmp39 = 8192 & subtreeFlags;
                let tmp40 = !tmp39;
                if (tmp40) {
                  tmp40 = 16785408 & ~subtreeFlags;
                }
                if (!tmp40) {
                  let tmp42 = accumulateSuspenseyCommitOnFiber(alternate);
                  let tmp43 = (62914560 & tmp14) === tmp14;
                  if (!tmp43) {
                    tmp43 = (4194048 & tmp14) === tmp14;
                  }
                  if (tmp43) {
                    obj2 = _mod287;
                    let unstable_nowResult = obj2.unstable_now();
                  }
                }
                let tmp55 = (function commitRoot(current, alternate, arg2, arg3, c298, arg5, arg6, arg7, c292) {
                  function markRootFinished(pendingLanes, arg1, pendingLanes2, arg3, arg4, c292) {
                    pendingLanes = pendingLanes.pendingLanes;
                    pendingLanes.pendingLanes = pendingLanes2;
                    pendingLanes.suspendedLanes = 0;
                    pendingLanes.pingedLanes = 0;
                    pendingLanes.warmLanes = 0;
                    pendingLanes.expiredLanes = pendingLanes.expiredLanes & pendingLanes2;
                    pendingLanes.entangledLanes = pendingLanes.entangledLanes & pendingLanes2;
                    pendingLanes.errorRecoveryDisabledLanes = pendingLanes.errorRecoveryDisabledLanes & pendingLanes2;
                    pendingLanes.shellSuspendCounter = 0;
                    const hiddenUpdates = pendingLanes.hiddenUpdates;
                    let tmp3 = pendingLanes & ~pendingLanes2;
                    if (0 < tmp3) {
                      do {
                        diff = 31 - closure_1_75(tmp3);
                        tmp[diff] = 0;
                        tmp2[diff] = -1;
                        let arr = hiddenUpdates[diff];
                        if (null !== arr) {
                          let num;
                          hiddenUpdates[diff] = null;
                          for (let num = 0; num < arr.length; num = num + 1) {
                            let tmp7 = arr[num];
                            if (null !== tmp7) {
                              tmp7.lane = tmp7.lane & -536870913;
                            }
                          }
                        }
                        tmp3 = tmp3 & (~1 << diff);
                      } while (0 < tmp3);
                    }
                    if (0 !== arg3) {
                      pendingLanes.pendingLanes = pendingLanes.pendingLanes | arg3;
                      pendingLanes.suspendedLanes = pendingLanes.suspendedLanes & ~arg3;
                      const diff1 = 31 - closure_1_75(arg3);
                      pendingLanes.entangledLanes = pendingLanes.entangledLanes | arg3;
                      pendingLanes.entanglements[diff1] = 1073741824 | pendingLanes.entanglements[diff1] | 0;
                    }
                    const tmp11 = 0 !== c292 && 0 === arg4;
                    if (tmp11) {
                      pendingLanes.suspendedLanes = pendingLanes.suspendedLanes | (c292 & ~pendingLanes & ~arg1);
                    }
                  }
                  function scheduleCallback(unstable_NormalPriority, arg1) {
                    obj = closure_1_0(closure_1_1[3]);
                    return obj.unstable_scheduleCallback(unstable_NormalPriority, arg1);
                  }
                  function commitBeforeMutationEffects(arg0, alternate) {
                    let flags;
                    let length;
                    _return = alternate;
                    if (null !== alternate) {
                      const child = _return.child;
                      if (1028 & _return.subtreeFlags) {
                        if (null !== child) {
                          child.return = tmp;
                          _return = child;
                        }
                      }
                      if (null !== _return) {
                        let tmp20;
                        let ErrorResult;
                        ({ alternate, flags } = _return);
                        switch (_return.tag) {
                          case 0: {
                            if (4 & flags) {
                              const updateQueue = tmp4.updateQueue;
                              let events = null;
                              if (null !== updateQueue) {
                                events = tmp13.events;
                              }
                              if (null !== events) {
                                let num = 0;
                                if (0 < events.length) {
                                  do {
                                    let tmp18 = arr[num];
                                    tmp18.ref.impl = tmp18.nextImpl;
                                    num = num + 1;
                                    length = arr.length;
                                  } while (num < length);
                                }
                              }
                            }
                            const sibling = tmp4.sibling;
                            if (null !== sibling) {
                              sibling.return = _return.return;
                              _return = tmp21;
                            } else {
                              _return = tmp4.return;
                            }
                            break;
                          }
                          case 1: {
                            if (1024 & flags) {
                              if (null !== alternate) {
                                const stateNode = tmp4.stateNode;
                                try {
                                  const snapshotBeforeUpdate = stateNode.getSnapshotBeforeUpdate(
                                    closure_1_217(tmp4.type, tmp26),
                                    tmp27,
                                  );
                                  stateNode.__reactInternalSnapshotBeforeUpdate = snapshotBeforeUpdate;
                                } catch (tmp9) {
                                  closure_1_334(_return, _return.return, tmp9);
                                }
                              }
                            }
                            break;
                          }
                          case 2: {
                            tmp20 = 1024 & flags;
                            if (tmp20) {
                              let _Error = Error;
                              ErrorResult = Error(
                                "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                              );
                              throw ErrorResult;
                            }
                            break;
                          }
                          case 3: {
                            break;
                          }
                          case 4: {
                            break;
                          }
                          case 5: {
                            break;
                          }
                          case 6: {
                            break;
                          }
                          case 7: {
                            tmp20 = 1024 & flags;
                            if (tmp20) {
                              let _Error = Error;
                              ErrorResult = Error(
                                "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                              );
                              throw ErrorResult;
                            }
                            break;
                          }
                          case 8: {
                            tmp20 = 1024 & flags;
                            if (tmp20) {
                              let _Error = Error;
                              ErrorResult = Error(
                                "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                              );
                              throw ErrorResult;
                            }
                            break;
                          }
                          case 9: {
                            tmp20 = 1024 & flags;
                            if (tmp20) {
                              let _Error = Error;
                              ErrorResult = Error(
                                "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                              );
                              throw ErrorResult;
                            }
                            break;
                          }
                          case 10: {
                            tmp20 = 1024 & flags;
                            if (tmp20) {
                              let _Error = Error;
                              ErrorResult = Error(
                                "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                              );
                              throw ErrorResult;
                            }
                            break;
                          }
                          case 11: {
                            break;
                          }
                          case 12: {
                            tmp20 = 1024 & flags;
                            if (tmp20) {
                              let _Error = Error;
                              ErrorResult = Error(
                                "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                              );
                              throw ErrorResult;
                            }
                            break;
                          }
                          case 13: {
                            tmp20 = 1024 & flags;
                            if (tmp20) {
                              let _Error = Error;
                              ErrorResult = Error(
                                "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                              );
                              throw ErrorResult;
                            }
                            break;
                          }
                          case 14: {
                            tmp20 = 1024 & flags;
                            if (tmp20) {
                              let _Error = Error;
                              ErrorResult = Error(
                                "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                              );
                              throw ErrorResult;
                            }
                            break;
                          }
                          case 15: {
                            break;
                          }
                          case 16: {
                            tmp20 = 1024 & flags;
                            if (tmp20) {
                              let _Error = Error;
                              ErrorResult = Error(
                                "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                              );
                              throw ErrorResult;
                            }
                            break;
                          }
                          case 17: {
                            break;
                          }
                          case 18: {
                            tmp20 = 1024 & flags;
                            if (tmp20) {
                              let _Error = Error;
                              ErrorResult = Error(
                                "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                              );
                              throw ErrorResult;
                            }
                            break;
                          }
                          case 19: {
                            tmp20 = 1024 & flags;
                            if (tmp20) {
                              let _Error = Error;
                              ErrorResult = Error(
                                "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                              );
                              throw ErrorResult;
                            }
                            break;
                          }
                          case 20: {
                            tmp20 = 1024 & flags;
                            if (tmp20) {
                              let _Error = Error;
                              ErrorResult = Error(
                                "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                              );
                              throw ErrorResult;
                            }
                            break;
                          }
                          case 21: {
                            tmp20 = 1024 & flags;
                            if (tmp20) {
                              let _Error = Error;
                              ErrorResult = Error(
                                "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                              );
                              throw ErrorResult;
                            }
                            break;
                          }
                          case 22: {
                            tmp20 = 1024 & flags;
                            if (tmp20) {
                              let _Error = Error;
                              ErrorResult = Error(
                                "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                              );
                              throw ErrorResult;
                            }
                            break;
                          }
                          case 23: {
                            tmp20 = 1024 & flags;
                            if (tmp20) {
                              let _Error = Error;
                              ErrorResult = Error(
                                "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                              );
                              throw ErrorResult;
                            }
                            break;
                          }
                          case 24: {
                            tmp20 = 1024 & flags;
                            if (tmp20) {
                              let _Error = Error;
                              ErrorResult = Error(
                                "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                              );
                              throw ErrorResult;
                            }
                            break;
                          }
                          case 25: {
                            tmp20 = 1024 & flags;
                            if (tmp20) {
                              let _Error = Error;
                              ErrorResult = Error(
                                "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                              );
                              throw ErrorResult;
                            }
                            break;
                          }
                          case 26: {
                            break;
                          }
                          case 27: {
                            break;
                          }
                          default: {
                            tmp20 = 1024 & flags;
                            if (tmp20) {
                              let _Error = Error;
                              ErrorResult = Error(
                                "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                              );
                              throw ErrorResult;
                            }
                            break;
                          }
                        }
                      }
                    }
                  }
                  current.cancelPendingCommit = null;
                  do {
                    let tmp2 = flushPendingEffects();
                    let tmp3 = c300;
                  } while (0 !== c300);
                  if (6 & closure_277) {
                    const _Error2 = Error;
                    throw Error("Should not already be working.");
                  } else {
                    const tmp4 = alternate;
                    if (null !== alternate) {
                      if (alternate === current.current) {
                        let _Error = Error;
                        throw Error(
                          "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.",
                        );
                      } else {
                        const tmp26 = arg7;
                        const tmp27 = c292;
                        markRootFinished(
                          current,
                          arg2,
                          alternate.lanes | alternate.childLanes | closure_1_144,
                          arg6,
                          arg7,
                          c292,
                        );
                        if (current === c278) {
                          c278 = null;
                          c279 = null;
                          c280 = 0;
                        }
                        let tmp6 = c298;
                        let closure_1_302 = alternate;
                        let closure_1_301 = current;
                        let closure_1_303 = arg2;
                        closure_304 = tmp29;
                        let closure_1_305 = c298;
                        let closure_1_306 = arg3;
                        let num = 10256;
                        if (!(10256 & alternate.subtreeFlags)) {
                          if (!(10256 & alternate.flags)) {
                            current.callbackNode = null;
                            current.callbackPriority = 0;
                          }
                          if (13878 & alternate.subtreeFlags) {
                            const T = constants.T;
                            constants.T = null;
                            closure_363 = 2;
                            const tmp13 = closure_277;
                            closure_277 = closure_277 | 4;
                            try {
                              commitBeforeMutationEffects(0, alternate);
                              closure_277 = tmp13;
                              closure_363 = tmp12;
                              constants.T = T;
                            } catch (tmp21) {
                              closure_277 = tmp13;
                              closure_363 = tmp12;
                              constants.T = T;
                              throw tmp21;
                            }
                          }
                          c300 = 1;
                          flushMutationEffects();
                          let tmp18 = flushLayoutEffects();
                          let tmp20 = flushSpawnedWork();
                        }
                        current.callbackNode = null;
                        current.callbackPriority = 0;
                        const tmp9 = scheduleCallback(require("00287__.js").unstable_NormalPriority, () => {
                          closure_1_332();
                          return null;
                        });
                      }
                    }
                  }
                })(iter, alternate, tmp14, tmp34, c298, 0, closure_291, tmp37, c292);
              }
            } else if (6 !== tmp13) {
              if (2 === tmp13) {
                closure_294 = null;
              } else if (3 !== tmp13) {
                if (5 !== tmp13) {
                  let tmp22 = globalThis;
                  let _Error = Error;
                  let str = "Unknown root exit status.";
                  throw Error("Unknown root exit status.");
                }
              }
            }
            let tmp28 = markRootSuspended(iter, tmp14, closure_291, !c283);
          }
        }
        let tmp63 = globalThis;
        let _Error2 = Error;
        let str2 = "Root did not complete. This is a bug in React.";
        throw Error("Root did not complete. This is a bug in React.");
      }
      let tmp75 = iter;
      let tmp76 = iter !== iter && null === iter.next;
      if (tmp76) {
        if (null !== iter) {
          tmp77.next = iter;
        }
      }
      let flag7 = true;
      c113 = true;
      let tmp78 = c112;
      if (!tmp78) {
        c112 = true;
        if (prop) {
          let tmp85 = _queueMicrotask(() => {
            if (6 & closure_1_277) {
              obj = iter(closure_1_1[3]);
              const result = obj.unstable_scheduleCallback(
                iter(closure_1_1[3]).unstable_ImmediatePriority,
                closure_1_118,
              );
            } else {
              closure_1_119();
            }
          });
        } else {
          let obj3 = _mod287;
          let result = obj3.unstable_scheduleCallback(
            _mod287.unstable_ImmediatePriority,
            processRootScheduleInImmediateTask,
          );
        }
      }
    }
    const tmp70 = closure_284 && !tmp3;
    if (tmp70) {
      markRootSuspended(iter, tmp10, 0, false);
    }
  }
}
function commitRootWhenReady(current, subtreeFlags, arg2, c298, arg4, arg5, arg6, arg7, c292) {
  current.timeoutHandle = -1;
  subtreeFlags = subtreeFlags.subtreeFlags;
  const tmp = 8192 & subtreeFlags;
  let tmp2 = !tmp;
  if (tmp2) {
    let num = 16785408;
    tmp2 = 16785408 & ~subtreeFlags;
  }
  if (!tmp2) {
    let tmp4 = accumulateSuspenseyCommitOnFiber(subtreeFlags);
    let tmp5 = (62914560 & arg5) === arg5;
    if (!tmp5) {
      tmp5 = (4194048 & arg5) === arg5;
    }
    if (tmp5) {
      obj = _mod287;
      obj.unstable_now();
    }
  }
  let tmp9 = (function commitRoot(current, alternate, arg2, arg3, c298, arg5, arg6, arg7, c292) {
    function markRootFinished(pendingLanes, arg1, pendingLanes2, arg3, arg4, c292) {
      pendingLanes = pendingLanes.pendingLanes;
      pendingLanes.pendingLanes = pendingLanes2;
      pendingLanes.suspendedLanes = 0;
      pendingLanes.pingedLanes = 0;
      pendingLanes.warmLanes = 0;
      pendingLanes.expiredLanes = pendingLanes.expiredLanes & pendingLanes2;
      pendingLanes.entangledLanes = pendingLanes.entangledLanes & pendingLanes2;
      pendingLanes.errorRecoveryDisabledLanes = pendingLanes.errorRecoveryDisabledLanes & pendingLanes2;
      pendingLanes.shellSuspendCounter = 0;
      const hiddenUpdates = pendingLanes.hiddenUpdates;
      let tmp3 = pendingLanes & ~pendingLanes2;
      if (0 < tmp3) {
        do {
          diff = 31 - closure_1_75(tmp3);
          tmp[diff] = 0;
          tmp2[diff] = -1;
          let arr = hiddenUpdates[diff];
          if (null !== arr) {
            let num;
            hiddenUpdates[diff] = null;
            for (let num = 0; num < arr.length; num = num + 1) {
              let tmp7 = arr[num];
              if (null !== tmp7) {
                tmp7.lane = tmp7.lane & -536870913;
              }
            }
          }
          tmp3 = tmp3 & (~1 << diff);
        } while (0 < tmp3);
      }
      if (0 !== arg3) {
        pendingLanes.pendingLanes = pendingLanes.pendingLanes | arg3;
        pendingLanes.suspendedLanes = pendingLanes.suspendedLanes & ~arg3;
        const diff1 = 31 - closure_1_75(arg3);
        pendingLanes.entangledLanes = pendingLanes.entangledLanes | arg3;
        pendingLanes.entanglements[diff1] = 1073741824 | pendingLanes.entanglements[diff1] | 0;
      }
      const tmp11 = 0 !== c292 && 0 === arg4;
      if (tmp11) {
        pendingLanes.suspendedLanes = pendingLanes.suspendedLanes | (c292 & ~pendingLanes & ~arg1);
      }
    }
    function scheduleCallback(unstable_NormalPriority, arg1) {
      obj = closure_1_0(closure_1_1[3]);
      return obj.unstable_scheduleCallback(unstable_NormalPriority, arg1);
    }
    function commitBeforeMutationEffects(arg0, alternate) {
      let flags;
      let length;
      _return = alternate;
      if (null !== alternate) {
        const child = _return.child;
        if (1028 & _return.subtreeFlags) {
          if (null !== child) {
            child.return = tmp;
            _return = child;
          }
        }
        if (null !== _return) {
          let tmp20;
          let ErrorResult;
          ({ alternate, flags } = _return);
          switch (_return.tag) {
            case 0: {
              if (4 & flags) {
                const updateQueue = tmp4.updateQueue;
                let events = null;
                if (null !== updateQueue) {
                  events = tmp13.events;
                }
                if (null !== events) {
                  let num = 0;
                  if (0 < events.length) {
                    do {
                      let tmp18 = arr[num];
                      tmp18.ref.impl = tmp18.nextImpl;
                      num = num + 1;
                      length = arr.length;
                    } while (num < length);
                  }
                }
              }
              const sibling = tmp4.sibling;
              if (null !== sibling) {
                sibling.return = _return.return;
                _return = tmp21;
              } else {
                _return = tmp4.return;
              }
              break;
            }
            case 1: {
              if (1024 & flags) {
                if (null !== alternate) {
                  const stateNode = tmp4.stateNode;
                  try {
                    const snapshotBeforeUpdate = stateNode.getSnapshotBeforeUpdate(
                      closure_1_217(tmp4.type, tmp26),
                      tmp27,
                    );
                    stateNode.__reactInternalSnapshotBeforeUpdate = snapshotBeforeUpdate;
                  } catch (tmp9) {
                    closure_1_334(_return, _return.return, tmp9);
                  }
                }
              }
              break;
            }
            case 2: {
              tmp20 = 1024 & flags;
              if (tmp20) {
                let _Error = Error;
                ErrorResult = Error(
                  "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                );
                throw ErrorResult;
              }
              break;
            }
            case 3: {
              break;
            }
            case 4: {
              break;
            }
            case 5: {
              break;
            }
            case 6: {
              break;
            }
            case 7: {
              tmp20 = 1024 & flags;
              if (tmp20) {
                let _Error = Error;
                ErrorResult = Error(
                  "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                );
                throw ErrorResult;
              }
              break;
            }
            case 8: {
              tmp20 = 1024 & flags;
              if (tmp20) {
                let _Error = Error;
                ErrorResult = Error(
                  "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                );
                throw ErrorResult;
              }
              break;
            }
            case 9: {
              tmp20 = 1024 & flags;
              if (tmp20) {
                let _Error = Error;
                ErrorResult = Error(
                  "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                );
                throw ErrorResult;
              }
              break;
            }
            case 10: {
              tmp20 = 1024 & flags;
              if (tmp20) {
                let _Error = Error;
                ErrorResult = Error(
                  "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                );
                throw ErrorResult;
              }
              break;
            }
            case 11: {
              break;
            }
            case 12: {
              tmp20 = 1024 & flags;
              if (tmp20) {
                let _Error = Error;
                ErrorResult = Error(
                  "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                );
                throw ErrorResult;
              }
              break;
            }
            case 13: {
              tmp20 = 1024 & flags;
              if (tmp20) {
                let _Error = Error;
                ErrorResult = Error(
                  "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                );
                throw ErrorResult;
              }
              break;
            }
            case 14: {
              tmp20 = 1024 & flags;
              if (tmp20) {
                let _Error = Error;
                ErrorResult = Error(
                  "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                );
                throw ErrorResult;
              }
              break;
            }
            case 15: {
              break;
            }
            case 16: {
              tmp20 = 1024 & flags;
              if (tmp20) {
                let _Error = Error;
                ErrorResult = Error(
                  "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                );
                throw ErrorResult;
              }
              break;
            }
            case 17: {
              break;
            }
            case 18: {
              tmp20 = 1024 & flags;
              if (tmp20) {
                let _Error = Error;
                ErrorResult = Error(
                  "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                );
                throw ErrorResult;
              }
              break;
            }
            case 19: {
              tmp20 = 1024 & flags;
              if (tmp20) {
                let _Error = Error;
                ErrorResult = Error(
                  "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                );
                throw ErrorResult;
              }
              break;
            }
            case 20: {
              tmp20 = 1024 & flags;
              if (tmp20) {
                let _Error = Error;
                ErrorResult = Error(
                  "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                );
                throw ErrorResult;
              }
              break;
            }
            case 21: {
              tmp20 = 1024 & flags;
              if (tmp20) {
                let _Error = Error;
                ErrorResult = Error(
                  "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                );
                throw ErrorResult;
              }
              break;
            }
            case 22: {
              tmp20 = 1024 & flags;
              if (tmp20) {
                let _Error = Error;
                ErrorResult = Error(
                  "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                );
                throw ErrorResult;
              }
              break;
            }
            case 23: {
              tmp20 = 1024 & flags;
              if (tmp20) {
                let _Error = Error;
                ErrorResult = Error(
                  "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                );
                throw ErrorResult;
              }
              break;
            }
            case 24: {
              tmp20 = 1024 & flags;
              if (tmp20) {
                let _Error = Error;
                ErrorResult = Error(
                  "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                );
                throw ErrorResult;
              }
              break;
            }
            case 25: {
              tmp20 = 1024 & flags;
              if (tmp20) {
                let _Error = Error;
                ErrorResult = Error(
                  "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                );
                throw ErrorResult;
              }
              break;
            }
            case 26: {
              break;
            }
            case 27: {
              break;
            }
            default: {
              tmp20 = 1024 & flags;
              if (tmp20) {
                let _Error = Error;
                ErrorResult = Error(
                  "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                );
                throw ErrorResult;
              }
              break;
            }
          }
        }
      }
    }
    current.cancelPendingCommit = null;
    do {
      let tmp2 = flushPendingEffects();
      let tmp3 = c300;
    } while (0 !== c300);
    if (6 & closure_277) {
      const _Error2 = Error;
      throw Error("Should not already be working.");
    } else {
      const tmp4 = alternate;
      if (null !== alternate) {
        if (alternate === current.current) {
          let _Error = Error;
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.",
          );
        } else {
          const tmp26 = arg7;
          const tmp27 = c292;
          markRootFinished(current, arg2, alternate.lanes | alternate.childLanes | closure_1_144, arg6, arg7, c292);
          if (current === c278) {
            c278 = null;
            c279 = null;
            c280 = 0;
          }
          let tmp6 = c298;
          let closure_1_302 = alternate;
          let closure_1_301 = current;
          let closure_1_303 = arg2;
          closure_304 = tmp29;
          let closure_1_305 = c298;
          let closure_1_306 = arg3;
          let num = 10256;
          if (!(10256 & alternate.subtreeFlags)) {
            if (!(10256 & alternate.flags)) {
              current.callbackNode = null;
              current.callbackPriority = 0;
            }
            if (13878 & alternate.subtreeFlags) {
              const T = constants.T;
              constants.T = null;
              closure_363 = 2;
              const tmp13 = closure_277;
              closure_277 = closure_277 | 4;
              try {
                commitBeforeMutationEffects(0, alternate);
                closure_277 = tmp13;
                closure_363 = tmp12;
                constants.T = T;
              } catch (tmp21) {
                closure_277 = tmp13;
                closure_363 = tmp12;
                constants.T = T;
                throw tmp21;
              }
            }
            c300 = 1;
            flushMutationEffects();
            let tmp18 = flushLayoutEffects();
            let tmp20 = flushSpawnedWork();
          }
          current.callbackNode = null;
          current.callbackPriority = 0;
          const tmp9 = scheduleCallback(require("00287__.js").unstable_NormalPriority, () => {
            closure_1_332();
            return null;
          });
        }
      }
    }
  })(current, subtreeFlags, arg5, arg2, c298, 0, arg6, arg7, c292);
}
function isRenderConsistentWithExternalStores(alternate) {
  let sibling;
  sibling = alternate;
  while (true) {
    let tag = sibling.tag;
    if (0 !== tag) {
      let child = sibling.child;
      if (16384 & sibling.subtreeFlags) {
        if (null !== child) {
          child.return = sibling;
          sibling = child;
          continue;
        }
      }
      if (sibling === alternate) {
        let flag2 = true;
        return true;
      } else {
        let tmp7 = sibling;
        let tmp8 = sibling;
        if (null === sibling.sibling) {
          while (null !== tmp7.return) {
            if (tmp7.return === alternate) {
              break;
            } else {
              _return = tmp7.return;
              tmp7 = _return;
              tmp8 = _return;
              continue;
            }
          }
          let flag = true;
          return true;
        }
        ({ return: tmp8.sibling.return, sibling } = tmp8);
        continue;
      }
    }
    if (16384 & sibling.flags) {
      let updateQueue = sibling.updateQueue;
      if (null !== updateQueue) {
        let stores = updateQueue.stores;
        if (null !== stores) {
          let num = 0;
          if (0 < stores.length) {
            while (true) {
              try {
                if (!is(tmp3(), tmp4)) {
                  break;
                } else {
                  num = num + 1;
                  continue;
                }
              } catch (err) {
                let flag3 = false;
                return false;
              }
            }
          }
        }
      }
    }
  }
  return false;
}
function markRootSuspended(c278, c280, arg2, arg3) {
  _null4.suspendedLanes = _null4.suspendedLanes | (c280 & ~closure_290 & ~c289);
  _null4.pingedLanes = _null4.pingedLanes & ~c280 & ~closure_290 & ~c289;
  const tmp2 = arg3;
  if (tmp2) {
    _null4.warmLanes = _null4.warmLanes | (c280 & ~closure_290 & ~c289);
  }
  let tmp4 = tmp;
  if (0 < (c280 & ~closure_290 & ~c289)) {
    do {
      diff = 31 - clz32Fallback(tmp4);
      tmp3[diff] = -1;
      tmp4 = tmp4 & (~1 << diff);
    } while (0 < tmp4);
  }
  if (0 !== arg2) {
    _null4.pendingLanes = _null4.pendingLanes | arg2;
    _null4.suspendedLanes = _null4.suspendedLanes & ~arg2;
    const diff1 = 31 - clz32Fallback(arg2);
    _null4.entangledLanes = _null4.entangledLanes | arg2;
    _null4.entanglements[diff1] = 1073741824 | _null4.entanglements[diff1] | (261930 & (c280 & ~closure_290 & ~c289));
  }
}
function resetWorkInProgressStack() {
  if (null !== _return) {
    if (0 === c281) {
      _return = tmp.return;
    } else {
      let c102 = null;
      const tmp2 = c168;
      if (tmp2) {
        iter = tmp.memoizedState;
        if (null !== iter) {
          do {
            let queue = iter.queue;
            if (null !== queue) {
              queue.pending = null;
            }
            iter = iter.next;
          } while (null !== iter);
        }
        c168 = false;
      }
      c164 = 0;
      let c165 = null;
      let c166 = null;
      c169 = false;
      closure_171 = 0;
      items1 = null;
      c138 = null;
      c139 = 0;
    }
    if (null !== _return) {
      do {
        let tmp5 = unwindInterruptedWork(_return.alternate, _return);
        _return = _return.return;
      } while (null !== _return);
    }
    _return = null;
  }
}
function prepareFreshStack(timeoutHandle, tmp19Result) {
  timeoutHandle = timeoutHandle.timeoutHandle;
  if (-1 !== timeoutHandle) {
    timeoutHandle.timeoutHandle = -1;
    clearTimeout(timeoutHandle);
  }
  const cancelPendingCommit = timeoutHandle.cancelPendingCommit;
  if (null !== cancelPendingCommit) {
    timeoutHandle.cancelPendingCommit = null;
    cancelPendingCommit();
  }
  c303 = 0;
  resetWorkInProgressStack();
  let c278 = timeoutHandle;
  const tmp5 = createWorkInProgress(timeoutHandle.current, null);
  _return = tmp5;
  c280 = tmp19Result;
  c281 = 0;
  c282 = null;
  c283 = false;
  closure_284 = !(
    timeoutHandle.pendingLanes &
    ~timeoutHandle.suspendedLanes &
    ~timeoutHandle.pingedLanes &
    tmp19Result
  );
  c285 = false;
  c287 = 0;
  closure_288 = 0;
  c289 = 0;
  closure_290 = 0;
  closure_291 = 0;
  c292 = 0;
  let c293 = null;
  closure_294 = null;
  c295 = false;
  let tmp6 = tmp19Result;
  if (8 & tmp19Result) {
    tmp6 = tmp19Result | (32 & tmp19Result);
  }
  const entangledLanes = timeoutHandle.entangledLanes;
  let tmp7 = tmp6;
  if (0 !== entangledLanes) {
    let tmp9 = entangledLanes & tmp6;
    let tmp10 = tmp6;
    tmp7 = tmp6;
    if (0 < tmp9) {
      do {
        diff = 31 - clz32Fallback(tmp9);
        tmp10 = tmp10 | tmp8[diff];
        tmp9 = tmp9 & (~1 << diff);
        tmp7 = tmp10;
      } while (0 < tmp9);
    }
  }
  current2 = tmp7;
  c143 = 0;
  c144 = 0;
  let num4 = 0;
  if (0 < c143) {
    do {
      sum = num4 + 1;
      closure_142[num4] = null;
      let tmp17 = closure_142[sum];
      let sum1 = sum + 1;
      closure_142[sum] = null;
      let tmp19 = closure_142[sum1];
      let sum2 = sum1 + 1;
      closure_142[sum1] = null;
      let tmp21 = closure_142[sum2];
      closure_142[sum2] = null;
      let tmp15 = closure_142[num4];
      if (null !== tmp17) {
        if (null !== tmp19) {
          iter = tmp17.pending;
          if (null === iter) {
            tmp19.next = tmp19;
          } else {
            tmp19.next = iter.next;
            iter.next = tmp19;
          }
          tmp17.pending = tmp19;
        }
      }
      if (0 !== tmp21) {
        let tmp23 = markUpdateLaneFromFiberToRoot(tmp15, tmp19, tmp21);
      }
      num4 = sum2 + 1;
    } while (num4 < tmp13);
  }
  return tmp5;
}
function handleThrow(current, arg1) {
  let promise = arg1;
  let c165 = null;
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = obj9;
  if (arg1 !== closure_130) {
    if (promise !== closure_132) {
      if (promise === closure_131) {
        if (null === c137) {
          const _Error = Error;
          throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
        } else {
          c137 = null;
          c281 = 4;
          promise = tmp3;
        }
      } else {
        let num = 8;
        if (promise !== closure_221) {
          let num3 = 1;
          if (null !== promise) {
            num3 = 1;
            if (typeof promise === "object") {
              num3 = 1;
              if (typeof promise.then === "function") {
                num3 = 6;
              }
            }
          }
          num = num3;
        }
        c281 = num;
      }
    }
    c282 = promise;
    if (null === _return) {
      c287 = 1;
      current = current.current;
      if (typeof promise === "object") {
        if (null !== promise) {
          let value = weakMap.get(promise);
          if (undefined === value) {
            const obj3 = { value: promise, source: current, stack: getStackByFiberInDevAndProd(current) };
            const result = weakMap.set(promise, obj3);
            value = obj3;
          }
          obj = value;
        }
        tmp15(current, obj);
      }
      obj = { value: promise, source: current, stack: getStackByFiberInDevAndProd(current) };
    }
  }
  if (null === c137) {
    const _Error2 = Error;
    throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
  } else {
    c137 = null;
    c281 = 3;
    promise = tmp5;
  }
}
function pushDispatcher() {
  let H = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H;
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = obj9;
  if (null === H) {
    H = obj9;
  }
  return H;
}
function pushAsyncDispatcher() {
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A = A;
  return __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A;
}
function renderRootSync(shellSuspendCounter, tmp19Result, arg2) {
  closure_277 = closure_277 | 2;
  let tmp4 = c278 === shellSuspendCounter;
  const tmp2 = pushDispatcher();
  const tmp = closure_277;
  const tmp3 = pushAsyncDispatcher();
  if (tmp4) {
    tmp4 = c280 === tmp19Result;
  }
  if (!tmp4) {
    c298 = null;
    prepareFreshStack(shellSuspendCounter, tmp19Result);
  }
  let flag = false;
  try {
    if (0 !== c281) {
      let num3;
      if (null !== _return) {
        if (8 === c281) {
          resetWorkInProgressStack();
          num3 = 6;
        } else {
          if (3 !== c281) {
            if (2 !== c281) {
              if (9 !== c281) {
                if (6 !== c281) {
                  c281 = 0;
                  c282 = null;
                  throwAndUnwindWorkLoop(shellSuspendCounter, _return, c282, c281);
                }
              }
            }
          }
          if (null === closure_159.current) {
            flag = true;
          }
          c281 = 0;
          c282 = null;
          throwAndUnwindWorkLoop(shellSuspendCounter, _return, c282, c281);
          if (arg2) {
            if (closure_284) {
              num3 = 0;
            }
          }
        }
      }
      const tmp30 = flag;
      if (tmp30) {
        shellSuspendCounter.shellSuspendCounter = shellSuspendCounter.shellSuspendCounter + 1;
      }
      let c102 = null;
      closure_277 = tmp;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = tmp2;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A = tmp3;
      if (null === _return) {
        c278 = null;
        c280 = 0;
        finishQueueingConcurrentUpdates();
      }
      return num3;
    }
    workLoopSync();
    num3 = c287;
  } catch (tmp37) {
    handleThrow(shellSuspendCounter, tmp37);
  }
}
function workLoopSync() {
  if (null !== _return) {
    do {
      let tmp = _return;
      let tmp4 = beginWork(_return.alternate, _return, current2);
      _return.memoizedProps = _return.pendingProps;
      if (null === tmp4) {
        let tmp6 = completeUnitOfWork(tmp);
      } else {
        _return = tmp4;
      }
    } while (null !== _return);
  }
}
function workLoopConcurrentByScheduler() {
  if (null !== _return) {
    obj2 = _mod287;
    if (!obj2.unstable_shouldYield()) {
      while (true) {
        let tmp = _return;
        let tmp4 = beginWork(_return.alternate, _return, current2);
        _return.memoizedProps = _return.pendingProps;
        if (null === tmp4) {
          let tmp6 = completeUnitOfWork(tmp);
        } else {
          _return = tmp4;
        }
        if (null === _return) {
          break;
        } else {
          obj = _mod287;
          if (obj.unstable_shouldYield()) {
            break;
          }
        }
      }
    }
  }
}
function replaySuspendedUnitOfWork(pendingProps) {
  let alternate;
  let dependencies;
  let tag;
  ({ alternate, tag } = pendingProps);
  if (15 !== tag) {
    let tmp7Result;
    if (0 !== tag) {
      if (11 === tag) {
        tmp7Result = replayFunctionComponent(
          alternate,
          pendingProps,
          pendingProps.pendingProps,
          pendingProps.type.render,
          pendingProps.ref,
          c280,
        );
      } else {
        if (5 === tag) {
          const tmp = c168;
          if (tmp) {
            iter = pendingProps.memoizedState;
            if (null !== iter) {
              do {
                let queue = iter.queue;
                if (null !== queue) {
                  queue.pending = null;
                }
                iter = iter.next;
              } while (null !== iter);
            }
            c168 = false;
          }
          c164 = 0;
          let c165 = null;
          let c166 = null;
          obj = null;
          c169 = false;
          closure_171 = 0;
          items1 = null;
        }
        unwindInterruptedWork(alternate, pendingProps);
        pendingProps.flags = pendingProps.flags & 65011714;
        const alternate2 = pendingProps.alternate;
        if (null === alternate2) {
          pendingProps.childLanes = 0;
          pendingProps.lanes = tmp8;
          pendingProps.child = null;
          pendingProps.subtreeFlags = 0;
          pendingProps.memoizedProps = null;
          pendingProps.memoizedState = null;
          pendingProps.updateQueue = null;
          pendingProps.dependencies = null;
          pendingProps.stateNode = null;
        } else {
          ({ childLanes: pendingProps.childLanes, lanes: pendingProps.lanes, child: pendingProps.child } = alternate2);
          pendingProps.subtreeFlags = 0;
          pendingProps.deletions = null;
          ({
            memoizedProps: pendingProps.memoizedProps,
            memoizedState: pendingProps.memoizedState,
            updateQueue: pendingProps.updateQueue,
            type: pendingProps.type,
            dependencies,
          } = alternate2);
          let tmp10 = null;
          if (null !== dependencies) {
            obj = { lanes: null, firstContext: null };
            ({ lanes: obj.lanes, firstContext: obj.firstContext } = dependencies);
            tmp10 = obj;
          }
          pendingProps.dependencies = tmp10;
        }
        _return = pendingProps;
        tmp7Result = beginWork(alternate, pendingProps, current2);
      }
    }
    pendingProps.memoizedProps = pendingProps.pendingProps;
    if (null === tmp7Result) {
      completeUnitOfWork(pendingProps);
    } else {
      _return = tmp7Result;
    }
  }
  tmp7Result = replayFunctionComponent(
    alternate,
    pendingProps,
    pendingProps.pendingProps,
    pendingProps.type,
    undefined,
    c280,
  );
}
function throwAndUnwindWorkLoop(current, memoizedState, value, c281) {
  let lanes;
  function throwException(pingCache, _return, flags, cache, c280) {
    let c4;
    flags.flags = flags.flags | 32768;
    let ErrorResult = cache;
    if (null !== cache) {
      ErrorResult = cache;
      if (typeof cache === "object") {
        ErrorResult = cache;
        if (typeof cache.then === "function") {
          if (null !== flags.alternate) {
            closure_105(0, flags, lanes, true);
          }
          const tag = flags.tag;
          let tmp6 = 1 & flags.mode;
          if (!tmp6) {
            tmp6 = 0 !== tag && 11 !== tag && 15 !== tag;
            const tmp7 = 0 !== tag && 11 !== tag && 15 !== tag;
          }
          if (!tmp6) {
            const alternate = flags.alternate;
            if (alternate) {
              ({ updateQueue: flags.updateQueue, memoizedState: flags.memoizedState, lanes: flags.lanes } = alternate);
            } else {
              flags.updateQueue = null;
              flags.memoizedState = null;
            }
          }
          current = ref.current;
          if (null !== current) {
            const tag3 = current.tag;
            if (31 !== tag3) {
              if (13 !== tag3) {
                if (22 === tag3) {
                  if (1 & current.mode) {
                    current.flags = current.flags | 65536;
                    if (cache === closure_133) {
                      current.flags = current.flags | 16384;
                    } else {
                      let value;
                      const updateQueue = current.updateQueue;
                      if (null === updateQueue) {
                        const _Set4 = Set;
                        items = [cache];
                        const self9 = this;
                        const self10 = this;
                        const obj3 = { transitions: null, markerInstances: null, retryQueue: set };
                        set = new Set(items);
                        current.updateQueue = obj3;
                      } else {
                        const retryQueue = updateQueue.retryQueue;
                        if (null === retryQueue) {
                          const _Set3 = Set;
                          items1 = [cache];
                          const self7 = this;
                          const self8 = this;
                          updateQueue.retryQueue = new Set(items1);
                          const set1 = new Set(items1);
                        } else {
                          retryQueue.add(cache);
                        }
                      }
                      const pingCache2 = pingCache.pingCache;
                      if (null === pingCache2) {
                        const self13 = this;
                        const self14 = this;
                        const obj13 = new closure_276();
                        pingCache.pingCache = obj13;
                        const _Set6 = Set;
                        const self15 = this;
                        const self16 = this;
                        set2 = new Set();
                        const result = obj13.set(cache, set2);
                        value = set2;
                      } else {
                        value = pingCache2.get(cache);
                        if (undefined === value) {
                          const _Set5 = Set;
                          const self11 = this;
                          const self12 = this;
                          set3 = new Set();
                          const result1 = pingCache2.set(cache, set3);
                          value = set3;
                        }
                      }
                      if (!value.has(lanes)) {
                        c285 = true;
                        value.add(lanes);
                        const bindResult = closure_335.bind(null, pingCache, cache, lanes);
                        cache.then(bindResult, bindResult);
                      }
                    }
                    return false;
                  }
                }
                const _Error = Error;
                let str = "Unexpected Suspense handler tag (";
                throw Error("Unexpected Suspense handler tag (" + current.tag + "). This is a bug in React.");
              }
            }
            if (1 & flags.mode) {
              if (null === closure_160) {
                c287 = 4;
                let tmp93 = closure_283;
                if (!tmp93) {
                  tmp93 = (4194048 & closure_280) !== closure_280 && null !== ref.current;
                }
                if (!tmp93) {
                  let c284 = true;
                }
                let tmp99 = !(134217727 & closure_288);
                if (tmp99) {
                  tmp99 = !(134217727 & closure_289);
                }
                if (!tmp99) {
                  tmp99 = null === closure_278;
                }
                if (!tmp99) {
                  closure_314(closure_278, closure_280, closure_291, false);
                }
              } else {
                const tmp91 = null === current.alternate && 0 === c287;
                if (tmp91) {
                  c287 = 3;
                }
              }
            }
            current.flags = current.flags & -257;
            if (1 & current.mode) {
              current.flags = current.flags | 65536;
              current.lanes = lanes;
            } else if (current === _return) {
              current.flags = current.flags | 65536;
            } else {
              current.flags = current.flags | 128;
              flags.flags = flags.flags | 131072;
              flags.flags = flags.flags & -52805;
              if (1 === flags.tag) {
                if (null === flags.alternate) {
                  flags.tag = 17;
                } else {
                  obj4 = { lane: 2, tag: 2, payload: null, callback: null, next: null };
                  closure_151(flags, obj4, 2);
                }
              } else {
                const tmp107 = 0 === flags.tag && null === flags.alternate;
                if (tmp107) {
                  flags.tag = 28;
                }
              }
              flags.lanes = flags.lanes | 2;
            }
            if (cache === closure_133) {
              current.flags = current.flags | 16384;
            } else {
              const updateQueue2 = current.updateQueue;
              if (null === updateQueue2) {
                const _Set7 = Set;
                const items2 = [cache];
                const self17 = this;
                const self18 = this;
                current.updateQueue = new Set(items2);
                set4 = new Set(items2);
              } else {
                updateQueue2.add(cache);
              }
              if (1 & current.mode) {
                let value5;
                const pingCache3 = pingCache.pingCache;
                if (null === pingCache3) {
                  const self21 = this;
                  const self22 = this;
                  const obj16 = new closure_276();
                  pingCache.pingCache = obj16;
                  const _Set9 = Set;
                  const self23 = this;
                  const self24 = this;
                  set5 = new Set();
                  const result2 = obj16.set(cache, set5);
                  value5 = set5;
                } else {
                  value5 = pingCache3.get(cache);
                  if (undefined === value5) {
                    const _Set8 = Set;
                    const self19 = this;
                    const self20 = this;
                    const set6 = new Set();
                    const result3 = pingCache3.set(cache, set6);
                    value5 = set6;
                  }
                }
                if (!value5.has(lanes)) {
                  c285 = true;
                  value5.add(lanes);
                  const bindResult1 = closure_335.bind(null, pingCache, cache, lanes);
                  cache.then(bindResult1, bindResult1);
                }
              }
            }
            return false;
          } else if (1 === pingCache.tag) {
            let value6;
            pingCache = pingCache.pingCache;
            if (null === pingCache) {
              let self3 = this;
              const self4 = this;
              obj10 = new closure_276();
              pingCache.pingCache = obj10;
              const _Set2 = Set;
              const self5 = this;
              const self6 = this;
              const set7 = new Set();
              const result4 = obj10.set(cache, set7);
              value6 = set7;
            } else {
              value6 = pingCache.get(cache);
              if (undefined === value6) {
                let _Set = Set;
                let self = this;
                let self2 = this;
                const set8 = new Set();
                const result5 = pingCache.set(cache, set8);
                value6 = set8;
              }
            }
            if (!value6.has(lanes)) {
              c285 = true;
              value6.add(lanes);
              const bindResult2 = closure_335.bind(null, pingCache, cache, lanes);
              cache.then(bindResult2, bindResult2);
            }
            c287 = 4;
            let tmp46 = closure_283;
            if (!tmp46) {
              tmp46 = (4194048 & closure_280) !== closure_280 && null !== ref.current;
            }
            if (!tmp46) {
              c284 = true;
            }
            let tmp52 = !(134217727 & closure_288);
            if (tmp52) {
              tmp52 = !(134217727 & closure_289);
            }
            if (!tmp52) {
              tmp52 = null === closure_278;
            }
            if (!tmp52) {
              closure_314(closure_278, closure_280, closure_291, false);
            }
            return false;
          } else {
            const _Error2 = Error;
            ErrorResult = Error(
              "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.",
            );
          }
        }
      }
    }
    const ErrorResult1 = Error(
      "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
      { cause: ErrorResult },
    );
    if (typeof ErrorResult1 === "object") {
      if (null !== ErrorResult1) {
        let value7 = closure_91.get(ErrorResult1);
        if (undefined === value7) {
          obj6 = { value: ErrorResult1, source: flags, stack: closure_11(flags) };
          const result6 = closure_91.set(ErrorResult1, obj6);
          value7 = obj6;
        }
        obj = value7;
      }
      const arr = items3;
      if (null === items3) {
        items3 = [obj];
      } else {
        arr.push(obj);
      }
      if (4 !== c287) {
        c287 = 2;
      }
      if (null === _return) {
        return true;
      } else {
        if (typeof ErrorResult === "object") {
          if (null !== ErrorResult) {
            let value8 = closure_91.get(ErrorResult);
            if (undefined === value8) {
              obj7 = { value: ErrorResult, source: flags, stack: closure_11(flags) };
              const result7 = closure_91.set(ErrorResult, obj7);
              value8 = obj7;
            }
            obj11 = value8;
          }
          const tag2 = _return.tag;
          while (3 !== tag2) {
            if (1 === tag2) {
              let stateNode2 = _return.stateNode;
              if (!(128 & _return.flags)) {
                if (typeof _return.type.getDerivedStateFromError !== "function") {
                  if (null !== stateNode2) {
                  }
                }
                _return.flags = _return.flags | 65536;
                let tmp20 = lanes & -lanes;
                _return.lanes = _return.lanes | tmp20;
                let obj8 = { lane: tmp20, tag: 3, payload: null, callback: null, next: null };
                let closure_0 = pingCache;
                let value2;
                let getDerivedStateFromError = _return.type.getDerivedStateFromError;
                if (typeof getDerivedStateFromError === "function") {
                  value2 = obj11.value;
                  obj8.payload = () => getDerivedStateFromError(c4);
                  obj8.callback = () => {
                    logCaughtError(pingCache, _return, obj11);
                  };
                }
                let stateNode = _return.stateNode;
                let tmp21 = null !== stateNode && typeof stateNode.componentDidCatch === "function";
                if (tmp21) {
                  obj8.callback = function () {
                    const self = this;
                    logCaughtError(pingCache, _return, obj11);
                    if (typeof getDerivedStateFromError !== "function") {
                      obj = set;
                      if (null === set) {
                        const _Set = Set;
                        items = [self];
                        const self2 = this;
                        const self3 = this;
                        set = new Set(items);
                      } else {
                        obj.add(self);
                      }
                    }
                    const stack = obj11.stack;
                    let str = "";
                    const componentDidCatch = self.componentDidCatch;
                    const value = obj11.value;
                    if (null !== stack) {
                      str = stack;
                    }
                    componentDidCatch(value, { componentStack: str });
                  };
                }
                let tmp23 = closure_152(_return, obj8);
                let flag2 = false;
                return false;
              }
            }
            _return = _return.return;
            if (null !== _return) {
              continue;
            } else {
              let flag15 = false;
              return false;
            }
          }
          _return.flags = _return.flags | 65536;
          _return.lanes = _return.lanes | (lanes & -lanes);
          stateNode2 = _return.stateNode;
          obj9 = {
            lane: lanes & -lanes,
            tag: 3,
            payload: { element: null },
            callback: () => {
              closure_2_219(stateNode2, obj11);
            },
            next: null,
          };
          closure_152(_return, obj9);
          return false;
        }
        obj11 = { value: ErrorResult, source: flags, stack: closure_11(flags) };
      }
    }
    obj = { value: ErrorResult1, source: flags, stack: closure_11(flags) };
  }
  let c102 = null;
  resetHooksOnUnwind(memoizedState);
  c138 = null;
  c139 = 0;
  _return = memoizedState.return;
  try {
    let tmp6 = value;
    if (throwException(current, _return, memoizedState, value, c280)) {
      c287 = 1;
      logUncaughtError(current, createCapturedValueAtFiber(value, current.current));
      _return = null;
    } else if (32768 & memoizedState.flags) {
      let flag2 = true;
      if (1 !== c281) {
        flag2 = false;
        if (!closure_284) {
          flag2 = false;
          if (!(536870912 & c280)) {
            c283 = true;
            let tmp11 = 2 === c281;
            if (!tmp11) {
              tmp11 = 9 === c281;
            }
            if (!tmp11) {
              tmp11 = 3 === c281;
            }
            if (!tmp11) {
              tmp11 = 6 === c281;
            }
            flag2 = true;
            if (tmp11) {
              current = ref.current;
              let tmp13 = null !== current;
              if (tmp13) {
                tmp13 = 13 === current.tag;
              }
              flag2 = true;
              if (tmp13) {
                current.flags = current.flags | 16384;
                flag2 = true;
              }
            }
          }
        }
      }
      unwindUnitOfWork(memoizedState, flag2);
    } else {
      completeUnitOfWork(memoizedState);
    }
  } catch (tmp19) {
    if (null !== _return) {
      throw tmp19;
    } else {
      c287 = 1;
      logUncaughtError(current, createCapturedValueAtFiber(value, current.current));
      _return = null;
    }
  }
}
function completeUnitOfWork(pendingProps) {
  let alternate;
  let obj12;
  let tmp290;
  let tmp = pendingProps;
  while (!(32768 & tmp.flags)) {
    let sibling16;
    let tag;
    let ErrorResult;
    let type;
    let tmp274;
    let tmp296;
    let flag10;
    let sibling14;
    let tmp297;
    let tmp299;
    let tmp316;
    let result;
    let node;
    let tmp307;
    let tmp305;
    let tmp303;
    let tmp309;
    let current3;
    let tmp283;
    let obj8;
    let attributePayload;
    let tmp291;
    let ErrorResult1;
    let tmp14;
    let tmp15;
    let tmp16;
    let diff3;
    let tmp22;
    let diff4;
    let tmp27;
    let tmp28;
    let tmp29;
    let tmp30;
    let diff5;
    let diff6;
    let tmp39;
    let tmp40;
    let tmp42;
    let tmp43;
    let tmp41;
    let tmp44;
    let tmp47;
    let tmp48;
    let tmp49;
    let tmp50;
    let tmp53;
    let tmp54;
    let updateQueue;
    let tmp55;
    let tmp56;
    let num;
    let tmp57;
    let tmp58;
    let tmp59;
    let tmp60;
    let tmp62;
    let tmp63;
    let pool2;
    let tmp65;
    let pool3;
    let tmp67;
    let tmp68;
    let tmp69;
    let diff7;
    ({ return: _return, alternate } = tmp);
    let tmp3 = current2;
    pendingProps = tmp.pendingProps;
    let child1 = null;
    switch (tmp.tag) {
      case 0: {
        let tmp341 = bubbleProperties(tmp);
        child1 = null;
        if (null !== child1) {
          _return = child1;
        } else {
          sibling16 = tmp.sibling;
          if (null !== sibling16) {
            _return = sibling16;
          } else {
            tmp = _return;
            if (null !== _return) {
              continue;
            } else if (0 === c287) {
              c287 = 5;
            }
          }
        }
        break;
      }
      case 1: {
        let tmp341 = bubbleProperties(tmp);
        child1 = null;
        if (null !== child1) {
          _return = child1;
        } else {
          sibling16 = tmp.sibling;
          if (null !== sibling16) {
            _return = sibling16;
          } else {
            tmp = _return;
            if (null !== _return) {
              continue;
            } else if (0 === c287) {
              c287 = 5;
            }
          }
        }
        break;
      }
      case 2: {
        let tmp342 = globalThis;
        let _Error6 = Error;
        tag = tmp.tag;
        let str8 = "Unknown unit of work tag (";
        let text = `Unknown unit of work tag (${tag}`;
        let str9 = "). This error is likely caused by a bug in React. Please file an issue.";
        let text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
        ErrorResult = Error(
          `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`,
        );
        throw ErrorResult;
      }
      case 3: {
        let flag13;
        let stateNode3 = tmp.stateNode;
        let tmp317 = null !== alternate;
        let cache = null;
        if (tmp317) {
          cache = alternate.memoizedState.cache;
        }
        if (tmp.memoizedState.cache !== cache) {
          tmp.flags = tmp.flags | 2048;
        }
        context._currentValue2 = closure_101.current;
        if (0 <= sum) {
          tmp320.current = closure_85[tmp321];
          closure_85[sum] = null;
          sum = sum - 1;
        }
        let tmp326 = popHostContainer();
        if (stateNode3.pendingContext) {
          stateNode3.context = stateNode3.pendingContext;
          stateNode3.pendingContext = null;
        }
        let tmp327 = (tmp317 && null !== alternate.child) || null === alternate;
        if (!tmp327) {
          let isDehydrated = alternate.memoizedState.isDehydrated && !(256 & tmp.flags);
          tmp327 = isDehydrated;
        }
        if (!tmp327) {
          tmp.flags = tmp.flags | 1024;
          let tmp328 = c100;
          if (null !== c100) {
            if (null === closure_294) {
              closure_294 = tmp328;
            } else {
              let push3 = arr3.push;
              let applyResult = push3.apply(closure_294, tmp328);
            }
            c100 = null;
          }
        }
        if (!tmp317) {
          flag13 = true;
          if (!(16 & tmp.flags)) {
            let sibling15 = tmp.child;
            flag13 = false;
            if (null !== sibling15) {
              flag13 = true;
              while (!(8218 & sibling15.flags)) {
                flag13 = true;
                if (8218 & sibling15.subtreeFlags) {
                  break;
                } else {
                  sibling15 = sibling15.sibling;
                  flag13 = false;
                  if (null === sibling15) {
                    break;
                  }
                }
              }
            }
          }
        } else {
          flag13 = false;
        }
        if (flag13) {
          let stateNode4 = tmp.stateNode;
          let tmp333 = createChildSet();
          let flag14 = false;
          let flag15 = false;
          let tmp337 = appendAllChildrenToContainer(tmp333, tmp2, false, false);
          stateNode4.pendingChildren = tmp333;
          tmp.flags = tmp.flags | 4;
        }
        let tmp339 = bubbleProperties(tmp);
        child1 = null;
        break;
      }
      case 4: {
        let flag3;
        let tmp161 = popHostContainer();
        if (null === alternate) {
          flag3 = true;
          if (!(16 & tmp.flags)) {
            let sibling13 = tmp.child;
            flag3 = false;
            if (null !== sibling13) {
              flag3 = true;
              while (!(8218 & sibling13.flags)) {
                flag3 = true;
                if (8218 & sibling13.subtreeFlags) {
                  break;
                } else {
                  sibling13 = sibling13.sibling;
                  flag3 = false;
                  if (null === sibling13) {
                    break;
                  }
                }
              }
            }
          }
        } else {
          flag3 = false;
        }
        if (flag3) {
          let stateNode = tmp.stateNode;
          let tmp164 = createChildSet();
          let flag4 = false;
          let flag5 = false;
          let tmp168 = appendAllChildrenToContainer(tmp164, tmp2, false, false);
          stateNode.pendingChildren = tmp164;
          tmp.flags = tmp.flags | 4;
        }
        let tmp170 = bubbleProperties(tmp);
        child1 = null;
        break;
      }
      case 5: {
        let memoizedProps;
        let stateNode2;
        let tmp273 = popHostContext(tmp);
        type = tmp.type;
        tmp274 = null !== alternate;
        if (tmp274) {
          if (null != tmp.stateNode) {
            ({ stateNode: stateNode2, memoizedProps } = alternate);
            if (!tmp274) {
              tmp296 = 16 & tmp.flags;
              flag10 = true;
              if (!tmp296) {
                sibling14 = tmp.child;
                flag10 = false;
                if (null !== sibling14) {
                  tmp297 = 8218 & sibling14.flags;
                  flag10 = true;
                  while (!tmp297) {
                    tmp299 = 8218 & sibling14.subtreeFlags;
                    flag10 = true;
                    if (tmp299) {
                      break;
                    } else {
                      sibling14 = sibling14.sibling;
                      flag10 = false;
                      if (null === sibling14) {
                        break;
                      }
                    }
                  }
                }
              }
            } else {
              flag10 = false;
            }
            if (!flag10) {
              if (memoizedProps === pendingProps) {
                tmp.stateNode = stateNode2;
              }
              let tmp315 = bubbleProperties(tmp);
              tmp316 = tmp.flags & -16777217;
              tmp.flags = tmp316;
              child1 = null;
            }
            obj11 = get_BatchedBridge;
            result = obj11.diffAttributePayloads(
              memoizedProps,
              pendingProps,
              stateNode2.canonical.viewConfig.validAttributes,
            );
            stateNode2.canonical.currentProps = pendingProps;
            node = stateNode2.node;
            if (flag10) {
              if (null !== result) {
                tmp307 = closure_349(node, result);
              } else {
                tmp307 = cloneNodeWithNewChildren(node);
              }
              tmp305 = tmp307;
              obj4 = { node: tmp305, canonical: stateNode2.canonical };
              tmp303 = obj4;
            } else {
              tmp303 = stateNode2;
              if (null !== result) {
                tmp305 = cloneNodeWithNewProps(node, result);
              }
            }
            if (tmp303 === stateNode2) {
              tmp.stateNode = stateNode2;
            } else {
              tmp309 = tmp.flags | 8;
              tmp.flags = tmp309;
              tmp.stateNode = tmp303;
              if (flag10) {
                let flag11 = false;
                let flag12 = false;
                let tmp313 = appendAllChildren(tmp303, tmp2, false, false);
              }
            }
          }
        }
        if (pendingProps) {
          current3 = closure_95.current;
          sum = sum + 2;
          tmp283 = get(type);
          obj8 = get_BatchedBridge;
          attributePayload = obj8.createAttributePayload(pendingProps, tmp283.validAttributes);
          obj5 = { node: tmp290, canonical: obj6 };
          tmp290 = createNode(sum, tmp283.uiViewClassName, current3.containerTag, attributePayload, tmp2);
          obj6 = {
            nativeTag: sum,
            viewConfig: tmp283,
            currentProps: pendingProps,
            internalInstanceHandle: tmp,
            publicInstance: null,
            publicRootInstance: current3.publicInstance,
          };
          tmp291 = tmp.flags | 8;
          tmp.flags = tmp291;
          let flag8 = false;
          let flag9 = false;
          let tmp295 = appendAllChildren(obj5, tmp2, false, false);
          tmp.stateNode = obj5;
        } else if (null === tmp.stateNode) {
          let tmp277 = globalThis;
          let _Error5 = Error;
          let str7 =
            "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.";
          ErrorResult1 = Error(
            "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.",
          );
          throw ErrorResult1;
        } else {
          let tmp276 = bubbleProperties(tmp);
          child1 = null;
        }
        break;
      }
      case 6: {
        if (alternate) {
          if (null != tmp.stateNode) {
            if (alternate.memoizedProps !== pendingProps) {
              current2 = closure_93.current;
              tmp.flags = tmp.flags | 8;
              sum = sum + 2;
              obj7 = { node: createNode(sum, "RCTRawText", closure_95.current.containerTag, obj9, tmp2) };
              obj9 = { text: pendingProps };
              let str6 = "RCTRawText";
              tmp.stateNode = obj7;
            } else {
              tmp.stateNode = alternate.stateNode;
            }
            let tmp271 = bubbleProperties(tmp);
            child1 = null;
          }
        }
        if (typeof pendingProps !== "string") {
          if (null === tmp.stateNode) {
            let tmp262 = globalThis;
            let _Error4 = Error;
            str5 =
              "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.";
            throw Error(
              "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.",
            );
          }
        }
        current = closure_93.current;
        tmp.flags = tmp.flags | 8;
        sum = sum + 2;
        obj10 = { node: createNode(sum, "RCTRawText", closure_95.current.containerTag, obj12, tmp2) };
        obj12 = { text: pendingProps };
        let str4 = "RCTRawText";
        tmp.stateNode = obj10;
        break;
      }
      case 7: {
        let tmp341 = bubbleProperties(tmp);
        child1 = null;
        if (null !== child1) {
          _return = child1;
        } else {
          sibling16 = tmp.sibling;
          if (null !== sibling16) {
            _return = sibling16;
          } else {
            tmp = _return;
            if (null !== _return) {
              continue;
            } else if (0 === c287) {
              c287 = 5;
            }
          }
        }
        break;
      }
      case 8: {
        let tmp341 = bubbleProperties(tmp);
        child1 = null;
        if (null !== child1) {
          _return = child1;
        } else {
          sibling16 = tmp.sibling;
          if (null !== sibling16) {
            _return = sibling16;
          } else {
            tmp = _return;
            if (null !== _return) {
              continue;
            } else if (0 === c287) {
              c287 = 5;
            }
          }
        }
        break;
      }
      case 9: {
        let tmp341 = bubbleProperties(tmp);
        child1 = null;
        if (null !== child1) {
          _return = child1;
        } else {
          sibling16 = tmp.sibling;
          if (null !== sibling16) {
            _return = sibling16;
          } else {
            tmp = _return;
            if (null !== _return) {
              continue;
            } else if (0 === c287) {
              c287 = 5;
            }
          }
        }
        break;
      }
      case 10: {
        tmp.type._currentValue2 = closure_101.current;
        if (0 <= sum) {
          tmp153.current = closure_85[tmp154];
          closure_85[sum] = null;
          sum = sum - 1;
        }
        let tmp159 = bubbleProperties(tmp);
        child1 = null;
        break;
      }
      case 11: {
        let tmp341 = bubbleProperties(tmp);
        child1 = null;
        if (null !== child1) {
          _return = child1;
        } else {
          sibling16 = tmp.sibling;
          if (null !== sibling16) {
            _return = sibling16;
          } else {
            tmp = _return;
            if (null !== _return) {
              continue;
            } else if (0 === c287) {
              c287 = 5;
            }
          }
        }
        break;
      }
      case 12: {
        let tmp341 = bubbleProperties(tmp);
        child1 = null;
        if (null !== child1) {
          _return = child1;
        } else {
          sibling16 = tmp.sibling;
          if (null !== sibling16) {
            _return = sibling16;
          } else {
            tmp = _return;
            if (null !== _return) {
              continue;
            } else if (0 === c287) {
              c287 = 5;
            }
          }
        }
        break;
      }
      case 13: {
        let tmp222;
        let memoizedState2 = tmp.memoizedState;
        let tmp171 = null === alternate;
        if (tmp171) {
          let flag6;
          if (null !== memoizedState2) {
            if (null !== memoizedState2.dehydrated) {
              if (tmp171) {
                let tmp223 = globalThis;
                let _Error = Error;
                let str =
                  "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.";
                throw Error(
                  "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.",
                );
              } else {
                if (!(128 & tmp.flags)) {
                  tmp.memoizedState = null;
                }
                tmp.flags = tmp.flags | 4;
                let tmp177 = bubbleProperties(tmp);
                flag6 = false;
                if (!flag6) {
                  let tmp187;
                  let tmp179 = sum;
                  if (256 & tmp.flags) {
                    let tmp188 = tmp179;
                    if (0 <= tmp179) {
                      closure_159.current = closure_85[tmp179];
                      closure_85[sum] = null;
                      diff = sum - 1;
                      sum = diff;
                      tmp188 = diff;
                    }
                    if (c160 === tmp) {
                      c160 = null;
                    }
                    tmp187 = tmp;
                    if (0 <= tmp188) {
                      tmp194.current = closure_85[tmp188];
                      closure_85[sum] = null;
                      sum = sum - 1;
                      tmp187 = tmp;
                    }
                  } else {
                    let tmp180 = tmp179;
                    if (0 <= tmp179) {
                      closure_159.current = closure_85[tmp179];
                      closure_85[sum] = null;
                      let diff1 = sum - 1;
                      sum = diff1;
                      tmp180 = diff1;
                    }
                    if (c160 === tmp) {
                      c160 = null;
                    }
                    tmp187 = null;
                    if (0 <= tmp180) {
                      tmp186.current = closure_85[tmp180];
                      closure_85[sum] = null;
                      sum = sum - 1;
                      tmp187 = null;
                    }
                  }
                  child1 = tmp187;
                }
              }
            }
          }
          let tmp172 = c100;
          if (null !== c100) {
            if (null === closure_294) {
              closure_294 = tmp172;
            } else {
              let push = arr.push;
              let applyResult1 = push.apply(closure_294, tmp172);
            }
            c100 = null;
          }
          let tmp175 = null !== alternate && null !== alternate.memoizedState;
          flag6 = true;
          if (tmp175) {
            alternate.memoizedState.hydrationErrors = tmp172;
            flag6 = true;
          }
        }
        let tmp200 = sum;
        if (0 <= sum) {
          tmp198.current = closure_85[tmp199];
          closure_85[sum] = null;
          let diff2 = sum - 1;
          sum = diff2;
          tmp200 = diff2;
        }
        if (c160 === tmp) {
          c160 = null;
        }
        if (0 <= tmp200) {
          tmp206.current = closure_85[tmp200];
          closure_85[sum] = null;
          sum = sum - 1;
        }
        if (128 & tmp.flags) {
          tmp.lanes = tmp3;
          tmp222 = tmp;
        } else {
          let tmp210 = null !== alternate && null !== alternate.memoizedState;
          let tmp211 = null !== memoizedState2;
          if (tmp211) {
            let child = tmp.child;
            let tmp212 =
              null !== child.alternate &&
              null !== child.alternate.memoizedState &&
              null !== child.alternate.memoizedState.cachePool;
            let pool = null;
            if (tmp212) {
              pool = child.alternate.memoizedState.cachePool.pool;
            }
            let tmp214 = null !== child.memoizedState && null !== child.memoizedState.cachePool;
            let pool1 = null;
            if (tmp214) {
              pool1 = child.memoizedState.cachePool.pool;
            }
            if (pool1 !== pool) {
              child.flags = child.flags | 2048;
            }
          }
          let tmp216 = tmp211 !== tmp210 && tmp211;
          if (tmp216) {
            let child2 = tmp.child;
            child2.flags = child2.flags | 8192;
          }
          if (null !== tmp.updateQueue) {
            tmp.flags = tmp.flags | 4;
          }
          if (16384 & tmp.flags) {
            let num5 = 536870912;
            if (22 !== tmp.tag) {
              let tmp218 = c80 << 1;
              c80 = tmp218;
              num5 = c80;
              if (!(62914560 & tmp218)) {
                c80 = 4194304;
                num5 = tmp217;
              }
            }
            tmp.lanes = tmp.lanes | num5;
            c292 = c292 | num5;
          }
          let tmp221 = bubbleProperties(tmp);
          tmp222 = null;
        }
        child1 = tmp222;
        break;
      }
      case 14: {
        let tmp341 = bubbleProperties(tmp);
        child1 = null;
        if (null !== child1) {
          _return = child1;
        } else {
          sibling16 = tmp.sibling;
          if (null !== sibling16) {
            _return = sibling16;
          } else {
            tmp = _return;
            if (null !== _return) {
              continue;
            } else if (0 === c287) {
              c287 = 5;
            }
          }
        }
        break;
      }
      case 15: {
        let tmp341 = bubbleProperties(tmp);
        child1 = null;
        if (null !== child1) {
          _return = child1;
        } else {
          sibling16 = tmp.sibling;
          if (null !== sibling16) {
            _return = sibling16;
          } else {
            tmp = _return;
            if (null !== _return) {
              continue;
            } else if (0 === c287) {
              c287 = 5;
            }
          }
        }
        break;
      }
      case 16: {
        let tmp341 = bubbleProperties(tmp);
        child1 = null;
        if (null !== child1) {
          _return = child1;
        } else {
          sibling16 = tmp.sibling;
          if (null !== sibling16) {
            _return = sibling16;
          } else {
            tmp = _return;
            if (null !== _return) {
              continue;
            } else if (0 === c287) {
              c287 = 5;
            }
          }
        }
        break;
      }
      case 17: {
        let tmp341 = bubbleProperties(tmp);
        child1 = null;
        if (null !== child1) {
          _return = child1;
        } else {
          sibling16 = tmp.sibling;
          if (null !== sibling16) {
            _return = sibling16;
          } else {
            tmp = _return;
            if (null !== _return) {
              continue;
            } else if (0 === c287) {
              c287 = 5;
            }
          }
        }
        break;
      }
      case 18: {
        let tmp342 = globalThis;
        let _Error6 = Error;
        tag = tmp.tag;
        let str8 = "Unknown unit of work tag (";
        let text = `Unknown unit of work tag (${tag}`;
        let str9 = "). This error is likely caused by a bug in React. Please file an issue.";
        let text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
        ErrorResult = Error(
          `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`,
        );
        throw ErrorResult;
      }
      case 19: {
        let dependencies;
        if (0 <= sum) {
          tmp70.current = closure_85[tmp71];
          closure_85[sum] = null;
          sum = sum - 1;
        }
        memoizedState = tmp.memoizedState;
        if (null === memoizedState) {
          let tmp152 = bubbleProperties(tmp);
          child1 = null;
        } else {
          let flag2;
          let tmp142;
          let tmp351 = 128 & tmp.flags;
          let rendering = memoizedState.rendering;
          if (null === rendering) {
            if (tmp351) {
              let tailMode5 = memoizedState.tailMode;
              if ("hidden" === tailMode5) {
                let sibling12 = memoizedState.tail;
                let tmp136 = null;
                let tmp137 = null;
                while (null !== sibling12) {
                  let tmp138 = tmp136;
                  if (null !== sibling12.alternate) {
                    tmp138 = sibling12;
                  }
                  sibling12 = sibling12.sibling;
                  tmp136 = tmp138;
                  tmp137 = tmp138;
                }
                if (null === tmp137) {
                  memoizedState.tail = null;
                  flag2 = tmp351;
                } else {
                  tmp137.sibling = null;
                  flag2 = tmp351;
                }
              } else {
                flag2 = tmp351;
                if ("collapsed" === tailMode5) {
                  let sibling11 = memoizedState.tail;
                  let tmp134 = null;
                  let tmp135 = null;
                  while (null !== sibling11) {
                    let tmp132 = tmp134;
                    if (null !== sibling11.alternate) {
                      tmp132 = sibling11;
                    }
                    sibling11 = sibling11.sibling;
                    tmp134 = tmp132;
                    tmp135 = tmp132;
                  }
                  if (null === tmp135) {
                    if (null === memoizedState.tail) {
                      memoizedState.tail = null;
                      flag2 = tmp351;
                    } else {
                      memoizedState.tail.sibling = null;
                      flag2 = tmp351;
                    }
                  } else {
                    tmp135.sibling = null;
                    flag2 = tmp351;
                  }
                }
              }
            } else {
              if (0 !== c287) {
                let sibling5 = tmp.child;
                if (null !== sibling5) {
                  let tmp101 = findFirstSuspended(sibling5);
                  while (null === tmp101) {
                    sibling5 = sibling5.sibling;
                  }
                  tmp.flags = tmp.flags | 128;
                  let tailMode4 = memoizedState.tailMode;
                  if ("hidden" === tailMode4) {
                    let sibling9 = memoizedState.tail;
                    let tmp119 = null;
                    let tmp120 = null;
                    while (null !== sibling9) {
                      let tmp121 = tmp119;
                      if (null !== sibling9.alternate) {
                        tmp121 = sibling9;
                      }
                      sibling9 = sibling9.sibling;
                      tmp119 = tmp121;
                      tmp120 = tmp121;
                    }
                    if (null === tmp120) {
                      memoizedState.tail = null;
                    } else {
                      tmp120.sibling = null;
                    }
                  } else if ("collapsed" === tailMode4) {
                    let sibling8 = memoizedState.tail;
                    let tmp117 = null;
                    let tmp118 = null;
                    while (null !== sibling8) {
                      let tmp115 = tmp117;
                      if (null !== sibling8.alternate) {
                        tmp115 = sibling8;
                      }
                      sibling8 = sibling8.sibling;
                      tmp117 = tmp115;
                      tmp118 = tmp115;
                    }
                    if (null === tmp118) {
                      if (null === memoizedState.tail) {
                        memoizedState.tail = null;
                      } else {
                        memoizedState.tail.sibling = null;
                      }
                    } else {
                      tmp118.sibling = null;
                    }
                  }
                  let updateQueue3 = tmp101.updateQueue;
                  tmp.updateQueue = updateQueue3;
                  if (null !== updateQueue3) {
                    tmp.flags = tmp.flags | 4;
                  }
                  if (16384 & tmp.flags) {
                    let num3 = 536870912;
                    if (22 !== tmp.tag) {
                      let tmp124 = c80 << 1;
                      c80 = tmp124;
                      num3 = c80;
                      if (!(62914560 & tmp124)) {
                        c80 = 4194304;
                        num3 = tmp123;
                      }
                    }
                    tmp.lanes = tmp.lanes | num3;
                    c292 = c292 | num3;
                  }
                  tmp.subtreeFlags = 0;
                  let sibling10 = tmp.child;
                  while (null !== sibling10) {
                    sibling10.flags = sibling10.flags & 65011714;
                    let alternate2 = sibling10.alternate;
                    if (null === alternate2) {
                      sibling10.childLanes = 0;
                      sibling10.lanes = tmp3;
                      sibling10.child = null;
                      sibling10.subtreeFlags = 0;
                      sibling10.memoizedProps = null;
                      sibling10.memoizedState = null;
                      sibling10.updateQueue = null;
                      sibling10.dependencies = null;
                      sibling10.stateNode = null;
                    } else {
                      ({
                        childLanes: sibling10.childLanes,
                        lanes: sibling10.lanes,
                        child: sibling10.child,
                      } = alternate2);
                      sibling10.subtreeFlags = 0;
                      sibling10.deletions = null;
                      ({
                        memoizedProps: sibling10.memoizedProps,
                        memoizedState: sibling10.memoizedState,
                        updateQueue: sibling10.updateQueue,
                        type: sibling10.type,
                        dependencies,
                      } = alternate2);
                      let tmp127 = null;
                      if (null !== dependencies) {
                        let obj21 = { lanes: null, firstContext: null };
                        ({ lanes: obj2.lanes, firstContext: obj2.firstContext } = dependencies);
                        tmp127 = obj21;
                      }
                      sibling10.dependencies = tmp127;
                    }
                    sibling10 = sibling10.sibling;
                  }
                  let sum1 = sum + 1;
                  sum = sum1;
                  closure_85[sum1] = closure_162.current;
                  closure_162.current = (1 & closure_162.current) | 2;
                  child1 = tmp.child;
                }
              }
              let tmp103 = null !== memoizedState.tail;
              if (tmp103) {
                obj = _mod287;
                tmp103 = obj.unstable_now() > closure_297;
              }
              flag2 = tmp351;
              if (tmp103) {
                tmp.flags = tmp.flags | 128;
                let tailMode3 = memoizedState.tailMode;
                if ("hidden" === tailMode3) {
                  let sibling7 = memoizedState.tail;
                  let tmp111 = null;
                  let tmp112 = null;
                  while (null !== sibling7) {
                    let tmp113 = tmp111;
                    if (null !== sibling7.alternate) {
                      tmp113 = sibling7;
                    }
                    sibling7 = sibling7.sibling;
                    tmp111 = tmp113;
                    tmp112 = tmp113;
                  }
                  if (null === tmp112) {
                    memoizedState.tail = null;
                  } else {
                    tmp112.sibling = null;
                  }
                } else if ("collapsed" === tailMode3) {
                  let sibling6 = memoizedState.tail;
                  let tmp109 = null;
                  let tmp110 = null;
                  while (null !== sibling6) {
                    let tmp107 = tmp109;
                    if (null !== sibling6.alternate) {
                      tmp107 = sibling6;
                    }
                    sibling6 = sibling6.sibling;
                    tmp109 = tmp107;
                    tmp110 = tmp107;
                  }
                  if (null === tmp110) {
                    if (null === memoizedState.tail) {
                      memoizedState.tail = null;
                    } else {
                      memoizedState.tail.sibling = null;
                    }
                  } else {
                    tmp110.sibling = null;
                  }
                }
                tmp.lanes = 4194304;
                flag2 = true;
              }
            }
          } else {
            let flag = tmp351;
            if (!flag) {
              let tmp76 = findFirstSuspended(rendering);
              if (null !== tmp76) {
                tmp.flags = tmp.flags | 128;
                let updateQueue2 = tmp76.updateQueue;
                tmp.updateQueue = updateQueue2;
                if (null !== updateQueue2) {
                  tmp.flags = tmp.flags | 4;
                }
                if (16384 & tmp.flags) {
                  let num2 = 536870912;
                  if (22 !== tmp.tag) {
                    let tmp87 = c80 << 1;
                    c80 = tmp87;
                    num2 = c80;
                    if (!(62914560 & tmp87)) {
                      c80 = 4194304;
                      num2 = tmp86;
                    }
                  }
                  tmp.lanes = tmp.lanes | num2;
                  c292 = c292 | num2;
                }
                let tailMode2 = memoizedState.tailMode;
                if ("hidden" === tailMode2) {
                  let sibling4 = memoizedState.tail;
                  let tmp93 = null;
                  let tmp94 = null;
                  while (null !== sibling4) {
                    let tmp95 = tmp93;
                    if (null !== sibling4.alternate) {
                      tmp95 = sibling4;
                    }
                    sibling4 = sibling4.sibling;
                    tmp93 = tmp95;
                    tmp94 = tmp95;
                  }
                  if (null === tmp94) {
                    memoizedState.tail = null;
                  } else {
                    tmp94.sibling = null;
                  }
                } else if ("collapsed" === tailMode2) {
                  let sibling3 = memoizedState.tail;
                  let tmp91 = null;
                  let tmp92 = null;
                  while (null !== sibling3) {
                    let tmp89 = tmp91;
                    if (null !== sibling3.alternate) {
                      tmp89 = sibling3;
                    }
                    sibling3 = sibling3.sibling;
                    tmp91 = tmp89;
                    tmp92 = tmp89;
                  }
                  if (null === tmp92) {
                    memoizedState.tail = null;
                  } else {
                    tmp92.sibling = null;
                  }
                }
                flag = true;
                if (null === memoizedState.tail) {
                  flag = true;
                  if ("hidden" === memoizedState.tailMode) {
                    flag = true;
                    if (!rendering.alternate) {
                      let tmp98 = bubbleProperties(tmp);
                      child1 = null;
                    }
                  }
                }
              } else {
                let obj13 = _mod287;
                let tmp77 =
                  2 * obj13.unstable_now() - memoizedState.renderingStartTime > closure_297 && 536870912 !== tmp3;
                flag = tmp351;
                if (tmp77) {
                  tmp.flags = tmp.flags | 128;
                  let tailMode = memoizedState.tailMode;
                  if ("hidden" === tailMode) {
                    let sibling2 = memoizedState.tail;
                    let tmp82 = null;
                    let tmp83 = null;
                    while (null !== sibling2) {
                      let tmp84 = tmp82;
                      if (null !== sibling2.alternate) {
                        tmp84 = sibling2;
                      }
                      sibling2 = sibling2.sibling;
                      tmp82 = tmp84;
                      tmp83 = tmp84;
                    }
                    if (null === tmp83) {
                      memoizedState.tail = null;
                    } else {
                      tmp83.sibling = null;
                    }
                  } else if ("collapsed" === tailMode) {
                    let sibling = memoizedState.tail;
                    let tmp80 = null;
                    let tmp81 = null;
                    while (null !== sibling) {
                      let tmp78 = tmp80;
                      if (null !== sibling.alternate) {
                        tmp78 = sibling;
                      }
                      let siblingValue = sibling.sibling;
                      tmp80 = tmp78;
                      tmp81 = tmp78;
                    }
                    if (null === tmp81) {
                      if (null === memoizedState.tail) {
                        memoizedState.tail = null;
                      } else {
                        memoizedState.tail.sibling = null;
                      }
                    } else {
                      tmp81.sibling = null;
                    }
                  }
                  tmp.lanes = 4194304;
                  flag = true;
                }
              }
            }
            if (memoizedState.isBackwards) {
              rendering.sibling = tmp.child;
              tmp.child = rendering;
              flag2 = flag;
            } else {
              let last = memoizedState.last;
              if (null !== last) {
                last.sibling = rendering;
              } else {
                tmp.child = rendering;
              }
              memoizedState.last = rendering;
              flag2 = flag;
            }
          }
          if (null !== memoizedState.tail) {
            let tmp147;
            let tail = memoizedState.tail;
            memoizedState.rendering = tail;
            memoizedState.tail = tail.sibling;
            let obj3 = _mod287;
            memoizedState.renderingStartTime = obj3.unstable_now();
            tail.sibling = null;
            let tmp146 = 1 & closure_162.current;
            if (flag2) {
              tmp147 = tmp146 | 2;
            } else {
              tmp147 = tmp146;
            }
            let sum2 = sum + 1;
            sum = sum2;
            closure_85[sum2] = closure_162.current;
            closure_162.current = tmp147;
            tmp142 = tail;
          } else {
            let tmp141 = bubbleProperties(tmp);
            tmp142 = null;
          }
          child1 = tmp142;
        }
        break;
      }
      case 20: {
        let tmp342 = globalThis;
        let _Error6 = Error;
        tag = tmp.tag;
        let str8 = "Unknown unit of work tag (";
        let text = `Unknown unit of work tag (${tag}`;
        let str9 = "). This error is likely caused by a bug in React. Please file an issue.";
        let text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
        ErrorResult = Error(
          `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`,
        );
        throw ErrorResult;
      }
      case 21: {
        let tmp342 = globalThis;
        let _Error6 = Error;
        tag = tmp.tag;
        let str8 = "Unknown unit of work tag (";
        let text = `Unknown unit of work tag (${tag}`;
        let str9 = "). This error is likely caused by a bug in React. Please file an issue.";
        let text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
        ErrorResult = Error(
          `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`,
        );
        throw ErrorResult;
      }
      case 22: {
        tmp14 = closure_159;
        tmp15 = sum;
        tmp16 = sum;
        if (0 <= sum) {
          tmp14.current = closure_85[tmp15];
          closure_85[sum] = null;
          diff3 = sum - 1;
          sum = diff3;
          tmp16 = diff3;
        }
        if (c160 === tmp) {
          c160 = null;
        }
        tmp22 = closure_162;
        if (0 <= tmp16) {
          tmp22.current = closure_85[tmp16];
          closure_85[sum] = null;
          diff4 = sum - 1;
          sum = diff4;
        }
        tmp27 = closure_158;
        current2 = closure_158.current;
        tmp28 = closure_157;
        tmp29 = sum;
        tmp30 = sum;
        if (0 <= sum) {
          tmp28.current = closure_85[tmp29];
          closure_85[sum] = null;
          diff5 = sum - 1;
          sum = diff5;
          tmp30 = diff5;
        }
        if (0 <= tmp30) {
          tmp27.current = closure_85[tmp30];
          closure_85[sum] = null;
          diff6 = sum - 1;
          sum = diff6;
        }
        tmp39 = null !== tmp.memoizedState;
        tmp40 = null !== alternate;
        if (tmp40) {
          tmp42 = null !== alternate.memoizedState;
          if (tmp42 !== tmp39) {
            tmp43 = tmp.flags | 8192;
            tmp.flags = tmp43;
          }
        } else if (tmp39) {
          tmp41 = tmp.flags | 8192;
          tmp.flags = tmp41;
        }
        if (tmp39) {
          tmp44 = 1 & tmp.mode;
          if (tmp44) {
            tmp47 = 536870912 & tmp3;
            tmp48 = !tmp47;
            tmp49 = !tmp48;
            if (tmp49) {
              tmp50 = 128 & tmp.flags;
              tmp49 = !tmp50;
            }
            if (tmp49) {
              let tmp52 = bubbleProperties(tmp);
              tmp53 = 6 & tmp.subtreeFlags;
              if (tmp53) {
                tmp54 = tmp.flags | 8192;
                tmp.flags = tmp54;
              }
            }
            updateQueue = tmp.updateQueue;
            if (null !== updateQueue) {
              if (null !== updateQueue.retryQueue) {
                tmp55 = tmp.flags | 4;
                tmp.flags = tmp55;
              }
              tmp56 = 16384 & tmp.flags;
              if (tmp56) {
                num = 536870912;
                if (22 !== tmp.tag) {
                  tmp57 = c80;
                  tmp58 = c80 << 1;
                  c80 = tmp58;
                  tmp59 = 62914560 & tmp58;
                  num = c80;
                  if (!tmp59) {
                    c80 = 4194304;
                    num = tmp57;
                  }
                }
                tmp60 = tmp.lanes | num;
                tmp.lanes = tmp60;
                tmp62 = c292 | num;
                c292 = tmp62;
              }
            }
            tmp63 = tmp40 && null !== alternate.memoizedState && null !== alternate.memoizedState.cachePool;
            pool2 = null;
            if (tmp63) {
              pool2 = alternate.memoizedState.cachePool.pool;
            }
            tmp65 = null !== tmp.memoizedState && null !== tmp.memoizedState.cachePool;
            pool3 = null;
            if (tmp65) {
              pool3 = tmp.memoizedState.cachePool.pool;
            }
            if (pool3 !== pool2) {
              tmp67 = tmp.flags | 2048;
              tmp.flags = tmp67;
            }
            child1 = null;
            if (tmp40) {
              tmp68 = closure_128;
              tmp69 = sum;
              child1 = null;
              if (0 <= sum) {
                tmp68.current = closure_85[tmp69];
                closure_85[sum] = null;
                diff7 = sum - 1;
                sum = diff7;
                child1 = null;
              }
            }
          }
        }
        let tmp46 = bubbleProperties(tmp);
        break;
      }
      case 23: {
        tmp14 = closure_159;
        tmp15 = sum;
        tmp16 = sum;
        if (0 <= sum) {
          tmp14.current = closure_85[tmp15];
          closure_85[sum] = null;
          diff3 = sum - 1;
          sum = diff3;
          tmp16 = diff3;
        }
        if (c160 === tmp) {
          c160 = null;
        }
        tmp22 = closure_162;
        if (0 <= tmp16) {
          tmp22.current = closure_85[tmp16];
          closure_85[sum] = null;
          diff4 = sum - 1;
          sum = diff4;
        }
        tmp27 = closure_158;
        current2 = closure_158.current;
        tmp28 = closure_157;
        tmp29 = sum;
        tmp30 = sum;
        if (0 <= sum) {
          tmp28.current = closure_85[tmp29];
          closure_85[sum] = null;
          diff5 = sum - 1;
          sum = diff5;
          tmp30 = diff5;
        }
        if (0 <= tmp30) {
          tmp27.current = closure_85[tmp30];
          closure_85[sum] = null;
          diff6 = sum - 1;
          sum = diff6;
        }
        tmp39 = null !== tmp.memoizedState;
        tmp40 = null !== alternate;
        if (tmp40) {
          tmp42 = null !== alternate.memoizedState;
          if (tmp42 !== tmp39) {
            tmp43 = tmp.flags | 8192;
            tmp.flags = tmp43;
          }
        } else if (tmp39) {
          tmp41 = tmp.flags | 8192;
          tmp.flags = tmp41;
        }
        if (tmp39) {
          tmp44 = 1 & tmp.mode;
          if (tmp44) {
            tmp47 = 536870912 & tmp3;
            tmp48 = !tmp47;
            tmp49 = !tmp48;
            if (tmp49) {
              tmp50 = 128 & tmp.flags;
              tmp49 = !tmp50;
            }
            if (tmp49) {
              let tmp52 = bubbleProperties(tmp);
              tmp53 = 6 & tmp.subtreeFlags;
              if (tmp53) {
                tmp54 = tmp.flags | 8192;
                tmp.flags = tmp54;
              }
            }
            updateQueue = tmp.updateQueue;
            if (null !== updateQueue) {
              if (null !== updateQueue.retryQueue) {
                tmp55 = tmp.flags | 4;
                tmp.flags = tmp55;
              }
              tmp56 = 16384 & tmp.flags;
              if (tmp56) {
                num = 536870912;
                if (22 !== tmp.tag) {
                  tmp57 = c80;
                  tmp58 = c80 << 1;
                  c80 = tmp58;
                  tmp59 = 62914560 & tmp58;
                  num = c80;
                  if (!tmp59) {
                    c80 = 4194304;
                    num = tmp57;
                  }
                }
                tmp60 = tmp.lanes | num;
                tmp.lanes = tmp60;
                tmp62 = c292 | num;
                c292 = tmp62;
              }
            }
            tmp63 = tmp40 && null !== alternate.memoizedState && null !== alternate.memoizedState.cachePool;
            pool2 = null;
            if (tmp63) {
              pool2 = alternate.memoizedState.cachePool.pool;
            }
            tmp65 = null !== tmp.memoizedState && null !== tmp.memoizedState.cachePool;
            pool3 = null;
            if (tmp65) {
              pool3 = tmp.memoizedState.cachePool.pool;
            }
            if (pool3 !== pool2) {
              tmp67 = tmp.flags | 2048;
              tmp.flags = tmp67;
            }
            child1 = null;
            if (tmp40) {
              tmp68 = closure_128;
              tmp69 = sum;
              child1 = null;
              if (0 <= sum) {
                tmp68.current = closure_85[tmp69];
                closure_85[sum] = null;
                diff7 = sum - 1;
                sum = diff7;
                child1 = null;
              }
            }
          }
        }
        let tmp46 = bubbleProperties(tmp);
        break;
      }
      case 24: {
        let cache1 = null;
        if (null !== alternate) {
          cache1 = alternate.memoizedState.cache;
        }
        if (tmp.memoizedState.cache !== cache1) {
          tmp.flags = tmp.flags | 2048;
        }
        context._currentValue2 = closure_101.current;
        if (0 <= sum) {
          tmp7.current = closure_85[tmp8];
          closure_85[sum] = null;
          sum = sum - 1;
        }
        let tmp13 = bubbleProperties(tmp);
        child1 = null;
        break;
      }
      case 25: {
        break;
      }
      case 26: {
        let memoizedProps;
        let stateNode2;
        let tmp273 = popHostContext(tmp);
        type = tmp.type;
        tmp274 = null !== alternate;
        if (tmp274) {
          if (null != tmp.stateNode) {
            ({ stateNode: stateNode2, memoizedProps } = alternate);
            if (!tmp274) {
              tmp296 = 16 & tmp.flags;
              flag10 = true;
              if (!tmp296) {
                sibling14 = tmp.child;
                flag10 = false;
                if (null !== sibling14) {
                  tmp297 = 8218 & sibling14.flags;
                  flag10 = true;
                  while (!tmp297) {
                    tmp299 = 8218 & sibling14.subtreeFlags;
                    flag10 = true;
                    if (tmp299) {
                      break;
                    } else {
                      sibling14 = sibling14.sibling;
                      flag10 = false;
                      if (null === sibling14) {
                        break;
                      }
                    }
                  }
                }
              }
            } else {
              flag10 = false;
            }
            if (!flag10) {
              if (memoizedProps === pendingProps) {
                tmp.stateNode = stateNode2;
              }
              let tmp315 = bubbleProperties(tmp);
              tmp316 = tmp.flags & -16777217;
              tmp.flags = tmp316;
              child1 = null;
            }
            obj11 = get_BatchedBridge;
            result = obj11.diffAttributePayloads(
              memoizedProps,
              pendingProps,
              stateNode2.canonical.viewConfig.validAttributes,
            );
            stateNode2.canonical.currentProps = pendingProps;
            node = stateNode2.node;
            if (flag10) {
              if (null !== result) {
                tmp307 = closure_349(node, result);
              } else {
                tmp307 = cloneNodeWithNewChildren(node);
              }
              tmp305 = tmp307;
              obj4 = { node: tmp305, canonical: stateNode2.canonical };
              tmp303 = obj4;
            } else {
              tmp303 = stateNode2;
              if (null !== result) {
                tmp305 = cloneNodeWithNewProps(node, result);
              }
            }
            if (tmp303 === stateNode2) {
              tmp.stateNode = stateNode2;
            } else {
              tmp309 = tmp.flags | 8;
              tmp.flags = tmp309;
              tmp.stateNode = tmp303;
              if (flag10) {
                let flag11 = false;
                let flag12 = false;
                let tmp313 = appendAllChildren(tmp303, tmp2, false, false);
              }
            }
          }
        }
        if (pendingProps) {
          current3 = closure_95.current;
          sum = sum + 2;
          tmp283 = get(type);
          obj8 = get_BatchedBridge;
          attributePayload = obj8.createAttributePayload(pendingProps, tmp283.validAttributes);
          obj5 = { node: tmp290, canonical: obj6 };
          tmp290 = createNode(sum, tmp283.uiViewClassName, current3.containerTag, attributePayload, tmp2);
          obj6 = {
            nativeTag: sum,
            viewConfig: tmp283,
            currentProps: pendingProps,
            internalInstanceHandle: tmp,
            publicInstance: null,
            publicRootInstance: current3.publicInstance,
          };
          tmp291 = tmp.flags | 8;
          tmp.flags = tmp291;
          let flag8 = false;
          let flag9 = false;
          let tmp295 = appendAllChildren(obj5, tmp2, false, false);
          tmp.stateNode = obj5;
        } else if (null === tmp.stateNode) {
          let tmp277 = globalThis;
          let _Error5 = Error;
          let str7 =
            "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.";
          ErrorResult1 = Error(
            "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.",
          );
          throw ErrorResult1;
        } else {
          let tmp276 = bubbleProperties(tmp);
          child1 = null;
        }
        break;
      }
      case 27: {
        let memoizedProps;
        let stateNode2;
        let tmp273 = popHostContext(tmp);
        type = tmp.type;
        tmp274 = null !== alternate;
        if (tmp274) {
          if (null != tmp.stateNode) {
            ({ stateNode: stateNode2, memoizedProps } = alternate);
            if (!tmp274) {
              tmp296 = 16 & tmp.flags;
              flag10 = true;
              if (!tmp296) {
                sibling14 = tmp.child;
                flag10 = false;
                if (null !== sibling14) {
                  tmp297 = 8218 & sibling14.flags;
                  flag10 = true;
                  while (!tmp297) {
                    tmp299 = 8218 & sibling14.subtreeFlags;
                    flag10 = true;
                    if (tmp299) {
                      break;
                    } else {
                      sibling14 = sibling14.sibling;
                      flag10 = false;
                      if (null === sibling14) {
                        break;
                      }
                    }
                  }
                }
              }
            } else {
              flag10 = false;
            }
            if (!flag10) {
              if (memoizedProps === pendingProps) {
                tmp.stateNode = stateNode2;
              }
              let tmp315 = bubbleProperties(tmp);
              tmp316 = tmp.flags & -16777217;
              tmp.flags = tmp316;
              child1 = null;
            }
            obj11 = get_BatchedBridge;
            result = obj11.diffAttributePayloads(
              memoizedProps,
              pendingProps,
              stateNode2.canonical.viewConfig.validAttributes,
            );
            stateNode2.canonical.currentProps = pendingProps;
            node = stateNode2.node;
            if (flag10) {
              if (null !== result) {
                tmp307 = closure_349(node, result);
              } else {
                tmp307 = cloneNodeWithNewChildren(node);
              }
              tmp305 = tmp307;
              obj4 = { node: tmp305, canonical: stateNode2.canonical };
              tmp303 = obj4;
            } else {
              tmp303 = stateNode2;
              if (null !== result) {
                tmp305 = cloneNodeWithNewProps(node, result);
              }
            }
            if (tmp303 === stateNode2) {
              tmp.stateNode = stateNode2;
            } else {
              tmp309 = tmp.flags | 8;
              tmp.flags = tmp309;
              tmp.stateNode = tmp303;
              if (flag10) {
                let flag11 = false;
                let flag12 = false;
                let tmp313 = appendAllChildren(tmp303, tmp2, false, false);
              }
            }
          }
        }
        if (pendingProps) {
          current3 = closure_95.current;
          sum = sum + 2;
          tmp283 = get(type);
          obj8 = get_BatchedBridge;
          attributePayload = obj8.createAttributePayload(pendingProps, tmp283.validAttributes);
          obj5 = { node: tmp290, canonical: obj6 };
          tmp290 = createNode(sum, tmp283.uiViewClassName, current3.containerTag, attributePayload, tmp2);
          obj6 = {
            nativeTag: sum,
            viewConfig: tmp283,
            currentProps: pendingProps,
            internalInstanceHandle: tmp,
            publicInstance: null,
            publicRootInstance: current3.publicInstance,
          };
          tmp291 = tmp.flags | 8;
          tmp.flags = tmp291;
          let flag8 = false;
          let flag9 = false;
          let tmp295 = appendAllChildren(obj5, tmp2, false, false);
          tmp.stateNode = obj5;
        } else if (null === tmp.stateNode) {
          let tmp277 = globalThis;
          let _Error5 = Error;
          let str7 =
            "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.";
          ErrorResult1 = Error(
            "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.",
          );
          throw ErrorResult1;
        } else {
          let tmp276 = bubbleProperties(tmp);
          child1 = null;
        }
        break;
      }
      case 28: {
        let tmp341 = bubbleProperties(tmp);
        child1 = null;
        if (null !== child1) {
          _return = child1;
        } else {
          sibling16 = tmp.sibling;
          if (null !== sibling16) {
            _return = sibling16;
          } else {
            tmp = _return;
            if (null !== _return) {
              continue;
            } else if (0 === c287) {
              c287 = 5;
            }
          }
        }
        break;
      }
      case 29: {
        break;
      }
      case 30: {
        break;
      }
      case 31: {
        let tmp224 = null === alternate;
        if (tmp224) {
          let flag7;
          if (null !== tmp.memoizedState) {
            if (tmp224) {
              let tmp254 = globalThis;
              let _Error3 = Error;
              str3 =
                "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.";
              throw Error(
                "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.",
              );
            } else {
              if (!(128 & tmp.flags)) {
                tmp.memoizedState = null;
              }
              tmp.flags = tmp.flags | 4;
              let tmp230 = bubbleProperties(tmp);
              flag7 = false;
            }
          } else {
            let tmp225 = c100;
            if (null !== c100) {
              if (null === closure_294) {
                closure_294 = tmp225;
              } else {
                let push2 = arr2.push;
                let applyResult2 = push2.apply(closure_294, tmp225);
              }
              c100 = null;
            }
            let tmp228 = null !== alternate && null !== alternate.memoizedState;
            flag7 = true;
            if (tmp228) {
              alternate.memoizedState.hydrationErrors = tmp225;
              flag7 = true;
            }
          }
          let flags = tmp.flags;
          if (flag7) {
            if (128 & flags) {
              let tmp253 = globalThis;
              let _Error2 = Error;
              let str2 = "Client rendering an Activity suspended it again. This is a bug in React.";
              throw Error("Client rendering an Activity suspended it again. This is a bug in React.");
            }
          } else {
            let tmp240;
            let tmp232 = sum;
            if (256 & flags) {
              let tmp241 = tmp232;
              if (0 <= tmp232) {
                closure_159.current = closure_85[tmp232];
                closure_85[sum] = null;
                let diff8 = sum - 1;
                sum = diff8;
                tmp241 = diff8;
              }
              if (c160 === tmp) {
                c160 = null;
              }
              tmp240 = tmp;
              if (0 <= tmp241) {
                tmp247.current = closure_85[tmp241];
                closure_85[sum] = null;
                sum = sum - 1;
                tmp240 = tmp;
              }
            } else {
              let tmp233 = tmp232;
              if (0 <= tmp232) {
                closure_159.current = closure_85[tmp232];
                closure_85[sum] = null;
                let diff9 = sum - 1;
                sum = diff9;
                tmp233 = diff9;
              }
              if (c160 === tmp) {
                c160 = null;
              }
              tmp240 = null;
              if (0 <= tmp233) {
                tmp239.current = closure_85[tmp233];
                closure_85[sum] = null;
                sum = sum - 1;
                tmp240 = null;
              }
            }
            child1 = tmp240;
          }
        }
        let tmp252 = bubbleProperties(tmp);
        child1 = null;
        break;
      }
      default: {
        let tmp342 = globalThis;
        let _Error6 = Error;
        tag = tmp.tag;
        let str8 = "Unknown unit of work tag (";
        let text = `Unknown unit of work tag (${tag}`;
        let str9 = "). This error is likely caused by a bug in React. Please file an issue.";
        let text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
        ErrorResult = Error(
          `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`,
        );
        throw ErrorResult;
      }
    }
  }
  unwindUnitOfWork(tmp, c283);
}
function unwindUnitOfWork(pendingProps, c283) {
  let alternate;
  let tag;
  ({ alternate, tag } = pendingProps);
}
function flushMutationEffects() {
  if (1 === c300) {
    c300 = 0;
    if (13878 & _null5.subtreeFlags) {
      const T = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
      closure_363 = 2;
      closure_277 = closure_277 | 4;
      try {
        commitMutationEffectsOnFiber(_null5, c301);
        closure_277 = tmp4;
        closure_363 = tmp3;
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
      } catch (tmp7) {
        closure_277 = tmp4;
        closure_363 = tmp3;
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
        throw tmp7;
      }
    }
    c301.current = _null5;
    c300 = 2;
  }
}
function flushLayoutEffects() {
  if (2 === c300) {
    c300 = 0;
    if (8772 & _null5.subtreeFlags) {
      const T = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
      closure_363 = 2;
      closure_277 = closure_277 | 4;
      try {
        commitLayoutEffectOnFiber(tmp8, _null5.alternate, _null5);
        closure_277 = tmp4;
        closure_363 = tmp3;
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
      } catch (tmp7) {
        closure_277 = tmp4;
        closure_363 = tmp3;
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
        throw tmp7;
      }
    }
    c300 = 3;
  }
}
function flushSpawnedWork() {
  let length;
  if (4 === c300) {
    c300 = 0;
    obj = _mod287;
    const result = obj.unstable_requestPaint();
    if (!(10256 & _null5.subtreeFlags)) {
      if (!(10256 & _null5.flags)) {
        c300 = 0;
        next = null;
        _null5 = null;
        releaseRootPooledCache(next, next.pendingLanes);
      }
      if (0 === next.pendingLanes) {
        c299 = null;
      }
      lanesToEventPriority(c303);
      const stateNode = tmp6.stateNode;
      if (__REACT_DEVTOOLS_GLOBAL_HOOK__2) {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__2.onCommitFiberRoot === "function") {
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__2.onCommitFiberRoot(
              closure_72,
              stateNode,
              undefined,
              !(128 & ~stateNode.current.flags),
            );
          } catch (err) {}
        }
      }
      if (null !== _null6) {
        const T = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
        closure_363 = 2;
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
        try {
          const onRecoverableError = tmp5.onRecoverableError;
          let num7 = 0;
          if (0 < _null6.length) {
            do {
              iter = _null6[num7];
              let obj3 = { componentStack: iter.stack };
              let onRecoverableErrorResult = onRecoverableError(iter.value, obj3);
              sum = num7 + 1;
              num7 = sum;
              length = _null6.length;
            } while (sum < length);
          }
          __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
          closure_363 = tmp20;
        } catch (tmp37) {
          __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
          closure_363 = tmp20;
          throw tmp37;
        }
      }
      const tmp27 = 3 & c303 && 0 !== next.tag;
      if (tmp27) {
        flushPendingEffects();
      }
      ensureRootIsScheduled(next);
      if (261930 & c303) {
        if (42 & tmp32) {
          if (next === closure_308) {
            c307 = c307 + 1;
          } else {
            c307 = 0;
            closure_308 = tmp5;
          }
        }
        flushSyncWorkAcrossRoots_impl(0, false);
      }
      c307 = 0;
    }
    c300 = 5;
  }
}
function releaseRootPooledCache(c301, c304) {
  next.pooledCacheLanes = next.pooledCacheLanes & c304;
  if (0 == (next.pooledCacheLanes & c304)) {
    const pooledCache = next.pooledCache;
    if (null != pooledCache) {
      next.pooledCache = null;
      pooledCache.refCount = pooledCache.refCount - 1;
      if (0 === pooledCache.refCount) {
        obj = _mod287;
        const result = obj.unstable_scheduleCallback(_mod287.unstable_NormalPriority, () => {
          const controller = pooledCache.controller;
          controller.abort();
        });
      }
    }
  }
}
function flushPendingEffects() {
  flushMutationEffects();
  flushLayoutEffects();
  flushSpawnedWork();
  return flushPassiveEffects();
}
function flushPassiveEffects() {
  if (5 !== c300) {
    return false;
  } else {
    c304 = 0;
    const tmp29 = lanesToEventPriority(c303);
    const T = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
    try {
      let num = 32;
      if (32 <= tmp29) {
        num = tmp29;
      }
      closure_363 = num;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
      c305 = null;
      c300 = 0;
      next = null;
      let c302 = null;
      c303 = 0;
      if (6 & closure_277) {
        const _Error = Error;
        throw Error("Cannot flush passive effects while already rendering.");
      } else {
        closure_277 = tmp6 | 4;
        commitPassiveUnmountOnFiber(next.current);
        commitPassiveMountOnFiber(next, next.current, c303, c305);
        closure_277 = tmp6;
        flushSyncWorkAcrossRoots_impl(0, false);
        if (__REACT_DEVTOOLS_GLOBAL_HOOK__2) {
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__2.onPostCommitFiberRoot === "function") {
            try {
              const result = __REACT_DEVTOOLS_GLOBAL_HOOK__2.onPostCommitFiberRoot(closure_72, tmp4);
            } catch (err) {}
          }
        }
        closure_363 = tmp31;
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
        releaseRootPooledCache(next, c304);
        return true;
      }
    } catch (tmp22) {
      closure_363 = tmp31;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
      releaseRootPooledCache(next, c304);
      throw tmp22;
    }
  }
}
function captureCommitPhaseErrorOnRoot(_return, source, value) {
  if (typeof value === "object") {
    if (null !== value) {
      value = weakMap.get(value);
      if (undefined === value) {
        const obj3 = { value, source, stack: getStackByFiberInDevAndProd(source) };
        const result = weakMap.set(value, obj3);
        value = obj3;
      }
      obj = value;
    }
    const stateNode = _return.stateNode;
    obj4 = {
      lane: 2,
      tag: 3,
      payload: { element: null },
      callback: () => {
        closure_2_219(stateNode2, obj11);
      },
      next: null,
    };
    iter = enqueueUpdate(_return, obj4, 2);
    if (null !== iter) {
      iter.pendingLanes = iter.pendingLanes | 2;
      iter.suspendedLanes = 0;
      iter.pingedLanes = 0;
      iter.warmLanes = 0;
      const tmp7 = iter !== iter && null === iter.next;
      if (tmp7) {
        if (null !== iter) {
          tmp8.next = iter;
        }
      }
      c113 = true;
      const tmp9 = c112;
      if (!tmp9) {
        c112 = true;
        if (prop) {
          _queueMicrotask(() => {
            if (6 & closure_1_277) {
              obj = iter(closure_1_1[3]);
              const result = obj.unstable_scheduleCallback(
                iter(closure_1_1[3]).unstable_ImmediatePriority,
                closure_1_118,
              );
            } else {
              closure_1_119();
            }
          });
        } else {
          obj5 = stateNode(obj[3]);
          const result1 = obj5.unstable_scheduleCallback(
            stateNode(obj[3]).unstable_ImmediatePriority,
            processRootScheduleInImmediateTask,
          );
        }
      }
    }
  }
  obj = { value, source, stack: getStackByFiberInDevAndProd(source) };
}
function captureCommitPhaseError(sibling, sibling2, value) {
  if (3 === sibling.tag) {
    captureCommitPhaseErrorOnRoot(sibling, sibling, value);
  } else {
    _return = sibling2;
    if (null !== sibling2) {
      while (3 !== _return.tag) {
        if (1 === _return.tag) {
          let stateNode = _return.stateNode;
          if (typeof value === "object") {
            if (null !== value) {
              value = weakMap.get(value);
              if (undefined === value) {
                let obj3 = { value, source: sibling, stack: getStackByFiberInDevAndProd(sibling) };
                let result = weakMap.set(value, obj3);
                value = obj3;
              }
              obj = value;
            }
            obj4 = { lane: 2, tag: 3, payload: null, callback: null, next: null };
            iter = enqueueUpdate(_return, obj4, 2);
            if (null !== iter) {
              let getDerivedStateFromError = _return.type.getDerivedStateFromError;
              if (typeof getDerivedStateFromError === "function") {
                isArray = obj.value;
                obj4.payload = () => getDerivedStateFromError(c4);
                obj4.callback = () => {
                  logCaughtError(pingCache, _return, obj11);
                };
              }
              let stateNode2 = _return.stateNode;
              let tmp7 = null !== stateNode2 && typeof stateNode2.componentDidCatch === "function";
              if (tmp7) {
                obj4.callback = function () {
                  const self = this;
                  logCaughtError(pingCache, _return, obj11);
                  if (typeof getDerivedStateFromError !== "function") {
                    obj = set;
                    if (null === set) {
                      const _Set = Set;
                      items = [self];
                      const self2 = this;
                      const self3 = this;
                      set = new Set(items);
                    } else {
                      obj.add(self);
                    }
                  }
                  const stack = obj11.stack;
                  let str = "";
                  const componentDidCatch = self.componentDidCatch;
                  const value = obj11.value;
                  if (null !== stack) {
                    str = stack;
                  }
                  componentDidCatch(value, { componentStack: str });
                };
              }
              iter.pendingLanes = iter.pendingLanes | 2;
              iter.suspendedLanes = 0;
              iter.pingedLanes = 0;
              iter.warmLanes = 0;
              let tmp9 = iter !== iter && null === iter.next;
              if (tmp9) {
                if (null !== iter) {
                  tmp10.next = iter;
                }
              }
              let flag = true;
              c113 = true;
              let tmp11 = c112;
              if (!tmp11) {
                c112 = true;
                if (prop) {
                  let tmp18 = _queueMicrotask(() => {
                    if (6 & closure_1_277) {
                      obj = iter(closure_1_1[3]);
                      const result = obj.unstable_scheduleCallback(
                        iter(closure_1_1[3]).unstable_ImmediatePriority,
                        closure_1_118,
                      );
                    } else {
                      closure_1_119();
                    }
                  });
                } else {
                  obj5 = iter(_return[3]);
                  let result1 = obj5.unstable_scheduleCallback(
                    iter(_return[3]).unstable_ImmediatePriority,
                    processRootScheduleInImmediateTask,
                  );
                }
              }
            }
          }
          obj = { value, source: sibling, stack: getStackByFiberInDevAndProd(sibling) };
        }
        _return = _return.return;
      }
      captureCommitPhaseErrorOnRoot(_return, sibling, value);
    }
  }
}
function pingSuspendedRoot(pingCache, arg1, arg2) {
  pingCache = pingCache.pingCache;
  if (null !== pingCache) {
    pingCache.delete(arg1);
  }
  pingCache.pingedLanes = pingCache.pingedLanes | (pingCache.suspendedLanes & arg2);
  pingCache.warmLanes = pingCache.warmLanes & ~arg2;
  const tmp3 = c278 === pingCache && (c280 & arg2) === arg2;
  if (tmp3) {
    if (4 === c287) {
      if (!(2 & closure_277)) {
        prepareFreshStack(pingCache, 0);
      }
    } else {
      if (3 === tmp5) {
        if ((62914560 & c280) === c280) {
          _mod287;
        }
      }
      closure_290 = closure_290 | arg2;
    }
    if (c292 === c280) {
      c292 = 0;
    }
  }
  const tmp17 = pingCache !== iter && null === pingCache.next;
  if (tmp17) {
    if (null === iter) {
      iter = pingCache;
    } else {
      tmp18.next = pingCache;
      iter = pingCache;
    }
  }
  c113 = true;
  const tmp19 = c112;
  if (!tmp19) {
    c112 = true;
    if (prop) {
      _queueMicrotask(() => {
        if (6 & closure_1_277) {
          obj = iter(closure_1_1[3]);
          const result = obj.unstable_scheduleCallback(iter(closure_1_1[3]).unstable_ImmediatePriority, closure_1_118);
        } else {
          closure_1_119();
        }
      });
    } else {
      obj2 = _mod287;
      const result = obj2.unstable_scheduleCallback(
        _mod287.unstable_ImmediatePriority,
        processRootScheduleInImmediateTask,
      );
    }
  }
}
function retryDehydratedSuspenseBoundary(memoizedState) {
  memoizedState = memoizedState.memoizedState;
  let num = 0;
  if (null !== memoizedState) {
    num = memoizedState.retryLane;
  }
  if (0 === num) {
    let num3 = 2;
    if (1 & memoizedState.mode) {
      c80 = tmp2;
      num3 = c80;
      if (!(62914560 & (c80 << 1))) {
        c80 = 4194304;
        num3 = tmp;
      }
    }
    num = num3;
  }
  iter = enqueueConcurrentRenderForLane(memoizedState, num);
  if (null !== iter) {
    iter.pendingLanes = iter.pendingLanes | num;
    if (268435456 !== num) {
      iter.suspendedLanes = 0;
      iter.pingedLanes = 0;
      iter.warmLanes = 0;
    }
    const tmp4 = iter !== iter && null === iter.next;
    if (tmp4) {
      if (null !== iter) {
        tmp5.next = iter;
      }
    }
    c113 = true;
    const tmp6 = c112;
    if (!tmp6) {
      c112 = true;
      if (prop) {
        _queueMicrotask(() => {
          if (6 & closure_1_277) {
            obj = iter(closure_1_1[3]);
            const result = obj.unstable_scheduleCallback(
              iter(closure_1_1[3]).unstable_ImmediatePriority,
              closure_1_118,
            );
          } else {
            closure_1_119();
          }
        });
      } else {
        obj = _mod287;
        const result = obj.unstable_scheduleCallback(
          _mod287.unstable_ImmediatePriority,
          processRootScheduleInImmediateTask,
        );
      }
    }
  }
}
function resolveRetryWakeable(tag, arg1) {
  let _retryCache;
  let num4;
  let stateNode;
  tag = tag.tag;
  if (31 !== tag) {
    if (13 !== tag) {
      if (19 === tag) {
        _retryCache = tag.stateNode;
        num4 = 0;
      } else if (22 === tag) {
        _retryCache = tag.stateNode._retryCache;
        num4 = 0;
      } else {
        const _Error = Error;
        throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
    }
    if (null !== _retryCache) {
      _retryCache.delete(arg1);
    }
    if (0 === num4) {
      let num7 = 2;
      if (1 & tag.mode) {
        c80 = tmp6;
        num7 = c80;
        if (!(62914560 & (c80 << 1))) {
          c80 = 4194304;
          num7 = tmp5;
        }
      }
      num4 = num7;
    }
    iter = enqueueConcurrentRenderForLane(tag, num4);
    if (null !== iter) {
      iter.pendingLanes = iter.pendingLanes | num4;
      if (268435456 !== num4) {
        iter.suspendedLanes = 0;
        iter.pingedLanes = 0;
        iter.warmLanes = 0;
      }
      const tmp9 = iter !== iter && null === iter.next;
      if (tmp9) {
        if (null !== iter) {
          tmp10.next = iter;
        }
      }
      c113 = true;
      const tmp11 = c112;
      if (!tmp11) {
        c112 = true;
        if (prop) {
          _queueMicrotask(() => {
            if (6 & closure_1_277) {
              obj = iter(closure_1_1[3]);
              const result = obj.unstable_scheduleCallback(
                iter(closure_1_1[3]).unstable_ImmediatePriority,
                closure_1_118,
              );
            } else {
              closure_1_119();
            }
          });
        } else {
          obj = _mod287;
          const result = obj.unstable_scheduleCallback(
            _mod287.unstable_ImmediatePriority,
            processRootScheduleInImmediateTask,
          );
        }
      }
    }
  }
  ({ stateNode, memoizedState } = tag);
  num4 = 0;
  _retryCache = stateNode;
  if (null !== memoizedState) {
    num4 = memoizedState.retryLane;
    _retryCache = stateNode;
  }
}
function FiberNode(arg0, arg1, arg2, arg3) {}
function createFiberImplClass(arg0, promise, arg2, mode) {
  Object.create(FiberNode.prototype);
  return {
    tag: 29,
    key: null,
    elementType: null,
    type: null,
    stateNode: null,
    return: null,
    child: null,
    sibling: null,
    index: 0,
    ref: null,
    refCleanup: null,
    pendingProps: promise,
    memoizedProps: null,
    updateQueue: null,
    memoizedState: null,
    dependencies: null,
    mode,
    flags: 0,
    subtreeFlags: 0,
    deletions: null,
    lanes: 0,
    childLanes: 0,
    alternate: null,
  };
}
function createWorkInProgress(child, pendingProps) {
  let dependencies;
  let key;
  let mode;
  let tag;
  let alternate = child.alternate;
  if (null === alternate) {
    ({ tag, key, mode } = child);
    Object.create(FiberNode.prototype);
    alternate = {
      tag,
      key,
      elementType: null,
      type: null,
      stateNode: null,
      return: null,
      child: null,
      sibling: null,
      index: 0,
      ref: null,
      refCleanup: null,
      pendingProps,
      memoizedProps: null,
      updateQueue: null,
      memoizedState: null,
      dependencies: null,
      mode,
      flags: 0,
      subtreeFlags: 0,
      deletions: null,
      lanes: 0,
      childLanes: 0,
      alternate: child,
    };
    ({ elementType: obj.elementType, type: obj.type, stateNode: obj.stateNode } = child);
    child.alternate = alternate;
  } else {
    alternate.pendingProps = pendingProps;
    alternate.type = child.type;
    alternate.flags = 0;
    alternate.subtreeFlags = 0;
    alternate.deletions = null;
  }
  alternate.flags = 65011712 & child.flags;
  ({
    childLanes: alternate.childLanes,
    lanes: alternate.lanes,
    child: alternate.child,
    memoizedProps: alternate.memoizedProps,
    memoizedState: alternate.memoizedState,
    updateQueue: alternate.updateQueue,
    dependencies,
  } = child);
  let tmp3 = null;
  if (null !== dependencies) {
    obj5 = { lanes: null, firstContext: null };
    ({ lanes: obj2.lanes, firstContext: obj2.firstContext } = dependencies);
    tmp3 = obj5;
  }
  alternate.dependencies = tmp3;
  ({
    sibling: alternate.sibling,
    index: alternate.index,
    ref: alternate.ref,
    refCleanup: alternate.refCleanup,
  } = child);
  return alternate;
}
function createFiberFromTypeAndProps(type, key, props, arg3, mode, lanes) {
  let _ErrorResult;
  let num;
  let tmp2;
  let tmp3;
  if (typeof type === "function") {
    const prototype = type.prototype;
    let tmp24 = !prototype;
    if (prototype) {
      tmp24 = !prototype.isReactComponent;
    }
    num = 0;
    tmp2 = mode;
    tmp3 = type;
    _ErrorResult = props;
    if (!tmp24) {
      num = 1;
      tmp2 = mode;
      tmp3 = type;
      _ErrorResult = props;
    }
  } else {
    num = 5;
    tmp2 = mode;
    tmp3 = type;
    _ErrorResult = props;
    if (typeof type !== "string") {
      if (closure_25 === type) {
        Object.create(FiberNode.prototype);
        return {
          tag: 31,
          key,
          elementType: tmp26,
          type: null,
          stateNode: null,
          return: null,
          child: null,
          sibling: null,
          index: 0,
          ref: null,
          refCleanup: null,
          pendingProps: props,
          memoizedProps: null,
          updateQueue: null,
          memoizedState: null,
          dependencies: null,
          mode,
          flags: 0,
          subtreeFlags: 0,
          deletions: null,
          lanes,
          childLanes: 0,
          alternate: null,
        };
      } else if (closure_15 === type) {
        const children = props.children;
        Object.create(FiberNode.prototype);
        return {
          tag: 7,
          key,
          elementType: null,
          type: null,
          stateNode: null,
          return: null,
          child: null,
          sibling: null,
          index: 0,
          ref: null,
          refCleanup: null,
          pendingProps: children,
          memoizedProps: null,
          updateQueue: null,
          memoizedState: null,
          dependencies: null,
          mode,
          flags: 0,
          subtreeFlags: 0,
          deletions: null,
          lanes,
          childLanes: 0,
          alternate: null,
        };
      } else if (closure_16 === type) {
        num = 8;
        tmp2 = tmp17;
        tmp3 = type;
        _ErrorResult = props;
        if (1 & (mode | 8)) {
          tmp2 = tmp17 | 16;
          num = 8;
          tmp3 = type;
          _ErrorResult = props;
        }
      } else if (closure_17 === type) {
        const tmp13 = 2 | mode;
        Object.create(FiberNode.prototype);
        return {
          tag: 12,
          key,
          elementType: tmp29,
          type: null,
          stateNode: null,
          return: null,
          child: null,
          sibling: null,
          index: 0,
          ref: null,
          refCleanup: null,
          pendingProps: props,
          memoizedProps: null,
          updateQueue: null,
          memoizedState: null,
          dependencies: null,
          mode: tmp13,
          flags: 0,
          subtreeFlags: 0,
          deletions: null,
          lanes,
          childLanes: 0,
          alternate: null,
        };
      } else if (closure_21 === type) {
        Object.create(FiberNode.prototype);
        return {
          tag: 13,
          key,
          elementType: tmp30,
          type: null,
          stateNode: null,
          return: null,
          child: null,
          sibling: null,
          index: 0,
          ref: null,
          refCleanup: null,
          pendingProps: props,
          memoizedProps: null,
          updateQueue: null,
          memoizedState: null,
          dependencies: null,
          mode,
          flags: 0,
          subtreeFlags: 0,
          deletions: null,
          lanes,
          childLanes: 0,
          alternate: null,
        };
      } else if (closure_22 === type) {
        Object.create(FiberNode.prototype);
        return {
          tag: 19,
          key,
          elementType: tmp31,
          type: null,
          stateNode: null,
          return: null,
          child: null,
          sibling: null,
          index: 0,
          ref: null,
          refCleanup: null,
          pendingProps: props,
          memoizedProps: null,
          updateQueue: null,
          memoizedState: null,
          dependencies: null,
          mode,
          flags: 0,
          subtreeFlags: 0,
          deletions: null,
          lanes,
          childLanes: 0,
          alternate: null,
        };
      } else {
        if (typeof type === "object") {
          if (null !== type) {
            const $$typeof = type.$$typeof;
            num = 10;
            tmp2 = mode;
            tmp3 = type;
            _ErrorResult = props;
            if (forResult !== $$typeof) {
              num = 9;
              tmp2 = mode;
              tmp3 = type;
              _ErrorResult = props;
              if (closure_18 !== $$typeof) {
                num = 11;
                tmp2 = mode;
                tmp3 = type;
                _ErrorResult = props;
                if (closure_20 !== $$typeof) {
                  num = 14;
                  tmp2 = mode;
                  tmp3 = type;
                  _ErrorResult = props;
                  if (closure_23 !== $$typeof) {
                    num = 16;
                    tmp2 = mode;
                    tmp3 = null;
                    _ErrorResult = props;
                  }
                }
              }
            }
          }
        }
        let str = "null";
        const _Error = Error;
        if (null !== type) {
          str = typeof type;
        }
        const _HermesInternal = HermesInternal;
        _ErrorResult = _Error(
          "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " +
            str +
            ".",
        );
        num = 29;
        tmp2 = mode;
        tmp3 = null;
      }
    }
  }
  Object.create(FiberNode.prototype);
  return {
    tag: num,
    key,
    elementType: type,
    type: tmp3,
    stateNode: null,
    return: null,
    child: null,
    sibling: null,
    index: 0,
    ref: null,
    refCleanup: null,
    pendingProps: _ErrorResult,
    memoizedProps: null,
    updateQueue: null,
    memoizedState: null,
    dependencies: null,
    mode: tmp2,
    flags: 0,
    subtreeFlags: 0,
    deletions: null,
    lanes,
    childLanes: 0,
    alternate: null,
  };
}
function FiberRootNode(
  containerInfo,
  tag,
  arg2,
  identifierPrefix,
  onUncaughtError,
  onCaughtError,
  onRecoverableError,
  nativeOnDefaultTransitionIndicator,
  formState,
) {
  let items2;
  ({
    tag,
    containerInfo,
    pendingChildren: null,
    current: null,
    pingCache: null,
    timeoutHandle: -1,
    cancelPendingCommit: null,
    context: null,
    pendingContext: null,
    next: null,
    callbackNode: null,
    callbackPriority: 0,
    expirationTimes: items,
    pendingLanes: 0,
    suspendedLanes: 0,
    pingedLanes: 0,
    warmLanes: 0,
    expiredLanes: 0,
    errorRecoveryDisabledLanes: 0,
    shellSuspendCounter: 0,
    entangledLanes: 0,
    entanglements: items1,
    hiddenUpdates: items2,
    identifierPrefix,
    onUncaughtError,
    onCaughtError,
    onRecoverableError,
    pooledCache: null,
    pooledCacheLanes: 0,
    formState,
    incompleteTransitions: new Map(),
  });
  items = [];
  let num = 0;
  do {
    let arr = items.push(-1);
    num = num + 1;
  } while (num < 31);
  items1 = [];
  let num2 = 0;
  do {
    let arr2 = items1.push(0);
    num2 = num2 + 1;
  } while (num2 < 31);
  items2 = [];
  let num3 = 0;
  do {
    let arr3 = items2.push(null);
    num3 = num3 + 1;
  } while (num3 < 31);
  new Map();
}
function findHostInstance(_reactInternals) {
  let _return10;
  let _return14;
  let _return4;
  _reactInternals = _reactInternals._reactInternals;
  if (undefined === _reactInternals) {
    if (typeof _reactInternals.render === "function") {
      const _Error6 = Error;
      throw Error("Unable to find node on an unmounted component.");
    } else {
      const _Object = Object;
      const keys = Object.keys(_reactInternals);
      const _Error9 = Error;
      throw Error("Argument appears to not be a ReactComponent. Keys: " + keys.join(","));
    }
  } else {
    let tmp6;
    let alternate = _reactInternals.alternate;
    let _return6 = alternate;
    let tmp19 = _reactInternals;
    if (alternate) {
      const _return5 = tmp19.return;
      while (null !== _return5) {
        let alternate2 = _return5.alternate;
        if (null === alternate2) {
          _return6 = _return5.return;
          tmp19 = _return6;
          if (null === _return6) {
            break;
          }
        } else if (_return5.child === alternate2.child) {
          let sibling3 = _return5.child;
          if (sibling3) {
            let tmp29;
            let tmp28;
            while (sibling3 !== tmp19) {
              if (sibling3 === _return6) {
                let tmp24;
                let tmp23;
                let tmp22 = _return5;
                let _return7 = _return5;
                if (_return5.alternate) {
                  let tmp25 = _return5;
                  tmp24 = _return5;
                  tmp23 = _return5;
                  if (_return5.return) {
                    do {
                      let _return9 = tmp25.return;
                      tmp25 = _return9;
                      tmp24 = _return5;
                      tmp23 = _return9;
                      _return10 = _return9.return;
                    } while (_return10);
                  }
                } else {
                  do {
                    let _return8 = tmp22;
                    tmp23 = _return7;
                    if (4098 & _return7.flags) {
                      _return8 = tmp23.return;
                    }
                    _return7 = tmp23.return;
                    tmp22 = _return8;
                    tmp24 = _return8;
                  } while (_return7);
                }
                let tmp26 = null;
                if (3 === tmp23.tag) {
                  tmp26 = tmp24;
                }
                tmp6 = alternate;
                if (tmp26 !== _return5) {
                  let tmp51 = globalThis;
                  let _Error8 = Error;
                  let str8 = "Unable to find node on an unmounted component.";
                  throw Error("Unable to find node on an unmounted component.");
                }
              } else {
                sibling3 = sibling3.sibling;
              }
            }
            let tmp27 = _return5;
            let _return11 = _return5;
            if (_return5.alternate) {
              let tmp30 = _return5;
              tmp29 = _return5;
              tmp28 = _return5;
              if (_return5.return) {
                do {
                  let _return13 = tmp30.return;
                  tmp30 = _return13;
                  tmp29 = _return5;
                  tmp28 = _return13;
                  _return14 = _return13.return;
                } while (_return14);
              }
            } else {
              do {
                let _return12 = tmp27;
                tmp28 = _return11;
                if (4098 & _return11.flags) {
                  _return12 = tmp28.return;
                }
                _return11 = tmp28.return;
                tmp27 = _return12;
                tmp29 = _return12;
              } while (_return11);
            }
            let tmp31 = null;
            if (3 === tmp28.tag) {
              tmp31 = tmp29;
            }
            tmp6 = _reactInternals;
            if (tmp31 !== _return5) {
              let tmp32 = globalThis;
              let _Error4 = Error;
              let str4 = "Unable to find node on an unmounted component.";
              throw Error("Unable to find node on an unmounted component.");
            }
          }
          let tmp21 = globalThis;
          let _Error3 = Error;
          str3 = "Unable to find node on an unmounted component.";
          throw Error("Unable to find node on an unmounted component.");
        } else {
          let tmp13 = alternate2;
          let tmp14 = _return5;
          if (tmp19.return === _return6.return) {
            let sibling = _return5.child;
            let flag = false;
            let tmp11 = _return6;
            let tmp12 = tmp19;
            if (sibling) {
              flag = true;
              tmp11 = alternate2;
              tmp12 = _return5;
              while (sibling !== tmp19) {
                flag = true;
                tmp11 = _return5;
                tmp12 = alternate2;
                if (sibling === _return6) {
                  break;
                } else {
                  sibling = sibling.sibling;
                  flag = false;
                  tmp11 = _return6;
                  tmp12 = tmp19;
                  if (!sibling) {
                    break;
                  }
                }
              }
            }
            tmp13 = tmp11;
            tmp14 = tmp12;
            if (!flag) {
              let sibling2 = alternate2.child;
              let flag2 = flag;
              let tmp15 = tmp11;
              let tmp16 = tmp12;
              if (sibling2) {
                flag2 = true;
                tmp15 = _return5;
                tmp16 = alternate2;
                while (sibling2 !== tmp12) {
                  flag2 = true;
                  tmp15 = alternate2;
                  tmp16 = _return5;
                  if (sibling2 === tmp11) {
                    break;
                  } else {
                    sibling2 = sibling2.sibling;
                    flag2 = flag;
                    tmp15 = tmp11;
                    tmp16 = tmp12;
                    if (!sibling2) {
                      break;
                    }
                  }
                }
              }
              tmp13 = tmp15;
              tmp14 = tmp16;
              if (!flag2) {
                let tmp18 = globalThis;
                let _Error2 = Error;
                let str2 =
                  "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.";
                throw Error(
                  "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.",
                );
              }
            }
          }
          _return6 = tmp13;
          tmp19 = tmp14;
          if (tmp14.alternate === tmp13) {
            continue;
          } else {
            let tmp50 = globalThis;
            let _Error7 = Error;
            let str7 =
              "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.";
            throw Error(
              "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.",
            );
          }
        }
        continue;
      }
      if (3 !== tmp19.tag) {
        const _Error5 = Error;
        throw Error("Unable to find node on an unmounted component.");
      } else {
        if (tmp19.stateNode.current === tmp19) {
          alternate = _reactInternals;
        }
        tmp6 = alternate;
      }
    } else {
      let tmp3;
      let tmp2;
      let tmp = _reactInternals;
      _return = _reactInternals;
      if (_reactInternals.alternate) {
        let tmp4 = _reactInternals;
        tmp3 = _reactInternals;
        tmp2 = _reactInternals;
        if (_reactInternals.return) {
          do {
            let _return3 = tmp4.return;
            tmp4 = _return3;
            tmp3 = _reactInternals;
            tmp2 = _return3;
            _return4 = _return3.return;
          } while (_return4);
        }
      } else {
        do {
          let _return2 = tmp;
          tmp2 = _return;
          if (4098 & _return.flags) {
            _return2 = tmp2.return;
          }
          _return = tmp2.return;
          tmp = _return2;
          tmp3 = _return2;
        } while (_return);
      }
      let tmp5 = null;
      if (3 === tmp2.tag) {
        tmp5 = tmp3;
      }
      if (null === tmp5) {
        const _Error = Error;
        throw Error("Unable to find node on an unmounted component.");
      } else {
        tmp6 = null;
        if (tmp5 === _reactInternals) {
          tmp6 = _reactInternals;
        }
      }
    }
    let tmp33 = null;
    if (null !== tmp6) {
      const tag2 = tmp6.tag;
      let tmp34 = tmp6;
      if (5 !== tag2) {
        tmp34 = tmp6;
        if (26 !== tag2) {
          tmp34 = tmp6;
          if (27 !== tag2) {
            tmp34 = tmp6;
            if (6 !== tag2) {
              let sibling4 = tmp6.child;
              tmp34 = null;
              if (null !== sibling4) {
                while (true) {
                  let tag = sibling4.tag;
                  let tmp36 = sibling4;
                  if (5 !== tag) {
                    tmp36 = sibling4;
                    if (26 !== tag) {
                      tmp36 = sibling4;
                      if (27 !== tag) {
                        tmp36 = sibling4;
                        if (6 !== tag) {
                          let sibling5 = sibling4.child;
                          tmp36 = null;
                          if (null !== sibling5) {
                            tmp36 = findCurrentHostFiberImpl(sibling5);
                            while (null === tmp36) {
                              sibling5 = sibling5.sibling;
                              tmp36 = null;
                              if (null === sibling5) {
                                break;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  tmp34 = tmp36;
                  if (null !== tmp36) {
                    break;
                  } else {
                    sibling4 = sibling4.sibling;
                    tmp34 = null;
                    if (null === sibling4) {
                      break;
                    }
                  }
                }
              }
            }
          }
        }
      }
      tmp33 = tmp34;
    }
    let tmp39 = null;
    if (null !== tmp33) {
      let publicInstance;
      const stateNode = tmp33.stateNode;
      if (null != stateNode.canonical) {
        if (null == stateNode.canonical.publicInstance) {
          const canonical = stateNode.canonical;
          const nativeTag = stateNode.canonical.nativeTag;
          const viewConfig = stateNode.canonical.viewConfig;
          const internalInstanceHandle = stateNode.canonical.internalInstanceHandle;
          const publicRootInstance = stateNode.canonical.publicRootInstance;
          let tmp41 = null;
          const createPublicInstance = get_BatchedBridge.createPublicInstance;
          if (null != publicRootInstance) {
            tmp41 = publicRootInstance;
          }
          canonical.publicInstance = createPublicInstance(nativeTag, viewConfig, internalInstanceHandle, tmp41);
          stateNode.canonical.publicRootInstance = null;
        }
        publicInstance = stateNode.canonical.publicInstance;
      } else {
        if (null != stateNode.containerInfo) {
          if (null != stateNode.containerInfo.publicInstance) {
            publicInstance = stateNode.containerInfo.publicInstance;
          }
        }
        publicInstance = null;
        if (null != stateNode._nativeTag) {
          publicInstance = stateNode;
        }
      }
      tmp39 = publicInstance;
    }
    return tmp39;
  }
}
function updateContainer(element, value, arg2, arg3) {
  current = value.current;
  const tmp = requestUpdateLane(current);
  if (null === value.context) {
    value.context = pendingContext;
  } else {
    value.pendingContext = pendingContext;
  }
  obj = { lane: tmp, tag: 0, payload: { element }, callback: null, next: null };
  let tmp4 = null;
  if (undefined !== arg3) {
    tmp4 = arg3;
  }
  if (null !== tmp4) {
    obj.callback = tmp4;
  }
  const tmp5 = enqueueUpdate(current, obj, tmp);
  if (null !== tmp5) {
    scheduleUpdateOnFiber(tmp5, current, tmp);
    const updateQueue = current.updateQueue;
    if (null !== updateQueue) {
      const shared = updateQueue.shared;
      if (4194048 & tmp) {
        shared.lanes = tmp | (shared.lanes & tmp5.pendingLanes);
        let tmp7 = tmp5.entangledLanes | tmp6;
        tmp5.entangledLanes = tmp7;
        const entanglements = tmp5.entanglements;
        while (tmp7) {
          diff = 31 - clz32Fallback(tmp7);
          let tmp10 = 1 << diff;
          if ((tmp10 & tmp6) | (entanglements[diff] & tmp6)) {
            entanglements[diff] = entanglements[diff] | tmp6;
          }
          tmp7 = tmp7 & ~tmp10;
        }
      }
    }
  }
  return tmp;
}
function shim$1() {
  throw Error(
    "The current renderer does not support hydration. This error is likely caused by a bug in React. Please file an issue.",
  );
}
function shim() {
  throw Error(
    "The current renderer does not support Resources. This error is likely caused by a bug in React. Please file an issue.",
  );
}
function getPublicInstance(stateNode) {
  if (null != stateNode.canonical) {
    if (null == stateNode.canonical.publicInstance) {
      const canonical = stateNode.canonical;
      const nativeTag = stateNode.canonical.nativeTag;
      const viewConfig = stateNode.canonical.viewConfig;
      const internalInstanceHandle = stateNode.canonical.internalInstanceHandle;
      const publicRootInstance = stateNode.canonical.publicRootInstance;
      let tmp2 = null;
      const createPublicInstance = get_BatchedBridge.createPublicInstance;
      if (null != publicRootInstance) {
        tmp2 = publicRootInstance;
      }
      canonical.publicInstance = createPublicInstance(nativeTag, viewConfig, internalInstanceHandle, tmp2);
      stateNode.canonical.publicRootInstance = null;
    }
    return stateNode.canonical.publicInstance;
  } else {
    let publicInstance;
    if (null != stateNode.containerInfo) {
      if (null != stateNode.containerInfo.publicInstance) {
        publicInstance = stateNode.containerInfo.publicInstance;
      }
      return publicInstance;
    }
    publicInstance = null;
    if (null != stateNode._nativeTag) {
      publicInstance = stateNode;
    }
  }
}
function nativeOnUncaughtError(error, componentStack) {
  let str;
  const ReactFiberErrorDialog = get_BatchedBridge.ReactFiberErrorDialog;
  obj = { errorBoundary: null, error, componentStack: str };
  str = "";
  const showErrorDialog = ReactFiberErrorDialog.showErrorDialog;
  if (null != componentStack.componentStack) {
    str = componentStack.componentStack;
  }
  if (false !== showErrorDialog(obj)) {
    closure_89(error);
  }
}
function nativeOnCaughtError(error, errorBoundary) {
  let str;
  const ReactFiberErrorDialog = get_BatchedBridge.ReactFiberErrorDialog;
  obj = { errorBoundary: errorBoundary.errorBoundary, error, componentStack: str };
  str = "";
  const showErrorDialog = ReactFiberErrorDialog.showErrorDialog;
  if (null != errorBoundary.componentStack) {
    str = errorBoundary.componentStack;
  }
  if (false !== showErrorDialog(obj)) {
    const _console = console;
    console.error(error);
  }
}
function nativeOnDefaultTransitionIndicator() {}
const __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
  react.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
let c8 = false;
let closure_12 = Symbol.for("react.element");
let closure_13 = Symbol.for("react.transitional.element");
let closure_14 = Symbol.for("react.portal");
let closure_15 = Symbol.for("react.fragment");
let closure_16 = Symbol.for("react.strict_mode");
let closure_17 = Symbol.for("react.profiler");
let closure_18 = Symbol.for("react.consumer");
const forResult = Symbol.for("react.context");
let closure_20 = Symbol.for("react.forward_ref");
let closure_21 = Symbol.for("react.suspense");
let closure_22 = Symbol.for("react.suspense_list");
let closure_23 = Symbol.for("react.memo");
let closure_24 = Symbol.for("react.lazy");
Symbol.for("react.scope");
let closure_25 = Symbol.for("react.activity");
Symbol.for("react.legacy_hidden");
Symbol.for("react.tracing_marker");
let closure_26 = Symbol.for("react.memo_cache_sentinel");
Symbol.for("react.view_transition");
let closure_28 = Symbol.for("react.client.reference");
let c30 = false;
let c31 = null;
let z = null;
let A = null;
let N = null;
let obj = {
  preventDefault() {
    this.defaultPrevented = true;
    const nativeEvent = this.nativeEvent;
    if (nativeEvent) {
      if (nativeEvent.preventDefault) {
        nativeEvent.preventDefault();
      } else {
        const returnValue = nativeEvent.returnValue;
        nativeEvent.returnValue = false;
      }
      tmp.isDefaultPrevented = functionThatReturnsTrue;
    }
  },
  stopPropagation() {
    const nativeEvent = this.nativeEvent;
    if (nativeEvent) {
      if (nativeEvent.stopPropagation) {
        nativeEvent.stopPropagation();
      } else {
        const cancelBubble = nativeEvent.cancelBubble;
        nativeEvent.cancelBubble = true;
      }
      tmp.isPropagationStopped = functionThatReturnsTrue;
    }
  },
  persist() {
    this.isPersistent = functionThatReturnsTrue;
  },
  isPersistent: functionThatReturnsFalse,
  destructor() {
    const self = this;
    const Interface = this.constructor.Interface;
    for (const key10006 in Interface) {
      self[key10006] = null;
      continue;
    }
    self.dispatchConfig = null;
    self._targetInst = null;
    self.nativeEvent = null;
    self.isDefaultPrevented = functionThatReturnsFalse;
    self.isPropagationStopped = functionThatReturnsFalse;
    self._dispatchListeners = null;
    self._dispatchInstances = null;
  },
};
let obj2 = assign(SyntheticEvent.prototype, obj);
SyntheticEvent.Interface = {
  type: null,
  target: null,
  currentTarget() {
    return null;
  },
  eventPhase: null,
  bubbles: null,
  cancelable: null,
  timeStamp(timeStamp) {
    timeStamp = timeStamp.timeStamp;
    if (!timeStamp) {
      const _Date = Date;
      timeStamp = Date.now();
    }
    return timeStamp;
  },
  defaultPrevented: null,
  isTrusted: null,
};
SyntheticEvent.extend = function (arg0) {
  class E {
    constructor() {
      return;
    }
  }
  class Class {
    constructor() {
      return self(...arguments);
    }
  }
  const self = this;
  E.prototype = this.prototype;
  obj = Object.create(E.prototype);
  assign(obj, Class.prototype);
  Class.prototype = obj;
  Class.prototype.constructor = Class;
  Class.Interface = assign({}, this.Interface, arg0);
  Class.extend = this.extend;
  Class.getPooled = createOrGetPooledEvent;
  Class.eventPool = [];
  Class.release = releasePooledEvent;
  return Class;
};
let tmp9 = addEventPoolingTo(SyntheticEvent);
let obj3 = {
  touchHistory() {
    return null;
  },
};
let closure_41 = SyntheticEvent.extend(obj3);
let items = ["topTouchStart"];
let items1 = ["topTouchMove"];
let items2 = ["topTouchCancel", "topTouchEnd"];
let items3 = [];
let obj4 = { touchBank: items3, numberActiveTouches: 0, indexOfSingleActiveTouch: -1, mostRecentTimeStamp: 0 };
let closure_49 = {
  instrument(arg0) {
    let closure_1_48 = arg0;
  },
  recordTouchTrack(arg0, changedTouches) {
    if (null != closure_1_48) {
      closure_1_48(arg0, changedTouches);
    }
    if ("topTouchMove" === arg0) {
      changedTouches = changedTouches.changedTouches;
      const item = changedTouches.forEach(recordTouchMove);
    } else if ("topTouchStart" === arg0) {
      const changedTouches1 = changedTouches.changedTouches;
      const item1 = changedTouches1.forEach(recordTouchStart);
      obj4.numberActiveTouches = changedTouches.touches.length;
      if (1 === obj4.numberActiveTouches) {
        tmp11.indexOfSingleActiveTouch = changedTouches.touches[0].identifier;
      }
    } else if ("topTouchEnd" === arg0) {
      const changedTouches2 = changedTouches.changedTouches;
      const item2 = changedTouches2.forEach(recordTouchEnd);
      obj4.numberActiveTouches = changedTouches.touches.length;
      if (1 === obj4.numberActiveTouches) {
        let num2 = 0;
        if (0 < items3.length) {
          while (true) {
            let tmp6 = items3[num2];
            if (null != tmp6) {
              if (tmp6.touchActive) {
                break;
              }
            }
            num2 = num2 + 1;
          }
          obj4.indexOfSingleActiveTouch = num2;
        }
      }
    }
  },
  touchHistory: obj4,
};
let c50 = null;
let closure_51 = 0;
let obj5 = {
  startShouldSetResponder: {
    phasedRegistrationNames: { bubbled: "onStartShouldSetResponder", captured: "onStartShouldSetResponderCapture" },
    dependencies: items,
  },
  scrollShouldSetResponder: {
    phasedRegistrationNames: { bubbled: "onScrollShouldSetResponder", captured: "onScrollShouldSetResponderCapture" },
    dependencies: ["topScroll"],
  },
  selectionChangeShouldSetResponder: {
    phasedRegistrationNames: {
      bubbled: "onSelectionChangeShouldSetResponder",
      captured: "onSelectionChangeShouldSetResponderCapture",
    },
    dependencies: ["topSelectionChange"],
  },
  moveShouldSetResponder: {
    phasedRegistrationNames: { bubbled: "onMoveShouldSetResponder", captured: "onMoveShouldSetResponderCapture" },
    dependencies: items1,
  },
  responderStart: { registrationName: "onResponderStart", dependencies: items },
  responderMove: { registrationName: "onResponderMove", dependencies: items1 },
  responderEnd: { registrationName: "onResponderEnd", dependencies: items2 },
  responderRelease: { registrationName: "onResponderRelease", dependencies: items2 },
  responderTerminationRequest: { registrationName: "onResponderTerminationRequest", dependencies: [] },
  responderGrant: { registrationName: "onResponderGrant", dependencies: [] },
  responderReject: { registrationName: "onResponderReject", dependencies: [] },
  responderTerminate: { registrationName: "onResponderTerminate", dependencies: [] },
};
let obj6 = {
  _getResponder() {
    return c50;
  },
  eventTypes: obj5,
  extractEvents(arg0, arg1, responderIgnoreScroll, arg3) {
    let _dispatchInstances;
    let _dispatchInstances2;
    let _dispatchInstances3;
    let _dispatchListeners;
    let _dispatchListeners2;
    let _dispatchListeners4;
    let _return1;
    let diff1;
    let responderStart;
    let responderTerminate;
    if ("topTouchStart" === arg0) {
      closure_51 = closure_51 + 1;
    } else if ("topTouchEnd" === arg0) {
      if (0 <= closure_51) {
        closure_51 = closure_51 - 1;
      } else {
        return null;
      }
    }
    closure_49.recordTouchTrack(arg0, responderIgnoreScroll);
    let tmp5 = null;
    if (arg1) {
      let scrollShouldSetResponder;
      let tmp53;
      if ("topScroll" !== arg0) {
        if (0 >= closure_51) {
          if ("topTouchStart" !== arg0) {
            tmp5 = null;
          }
        }
      }
      if ("topTouchStart" === arg0) {
        scrollShouldSetResponder = closure_41.startShouldSetResponder;
      } else if ("topTouchMove" === arg0) {
        scrollShouldSetResponder = closure_41.moveShouldSetResponder;
      } else if ("topSelectionChange" === arg0) {
        scrollShouldSetResponder = closure_41.selectionChangeShouldSetResponder;
      } else {
        scrollShouldSetResponder = closure_41.scrollShouldSetResponder;
      }
      let tmp12 = arg1;
      if (c50) {
        let tmp13 = tmp11;
        let num7 = 0;
        let num8 = 0;
        if (c50) {
          let tmp14 = tmp13;
          do {
            _return = tmp14.return;
            while (_return) {
              tmp14 = _return;
              if (5 === _return.tag) {
                break;
              }
            }
            if (!_return) {
              _return = null;
            }
            num7 = num7 + 1;
            tmp13 = _return;
            num8 = num7;
          } while (_return);
        }
        let tmp17 = arg1;
        let num9 = 0;
        let num10 = 0;
        if (arg1) {
          let tmp18 = tmp17;
          do {
            _return1 = tmp18.return;
            while (_return1) {
              tmp18 = _return1;
              if (5 === _return1.tag) {
                break;
              }
            }
            if (!_return1) {
              _return1 = null;
            }
            num9 = num9 + 1;
            tmp17 = _return1;
            num10 = num9;
          } while (_return1);
        }
        let tmp21 = num8;
        let tmp22 = tmp11;
        let tmp23 = num8;
        let tmp24 = tmp11;
        if (0 < num8 - num10) {
          let tmp26 = tmp22;
          do {
            let _return2 = tmp26.return;
            while (_return2) {
              tmp26 = _return2;
              if (5 === _return2.tag) {
                break;
              }
            }
            if (!_return2) {
              _return2 = null;
            }
            diff = tmp21 - 1;
            tmp22 = _return2;
            tmp21 = diff;
            tmp23 = diff;
            tmp24 = _return2;
          } while (0 < diff - num10);
        }
        let tmp29 = arg1;
        let tmp30 = arg1;
        if (0 < num10 - tmp23) {
          let tmp32 = tmp29;
          do {
            let _return3 = tmp32.return;
            while (_return3) {
              tmp32 = _return3;
              if (5 === _return3.tag) {
                break;
              }
            }
            if (!_return3) {
              _return3 = null;
            }
            diff1 = num10 - 1;
            tmp29 = _return3;
            num10 = diff1;
            tmp30 = _return3;
          } while (0 < diff1 - tmp23);
        }
        let diff2 = tmp23 - 1;
        tmp12 = null;
        if (tmp23) {
          let tmp38 = tmp30;
          tmp12 = tmp24;
          while (tmp24 !== tmp30) {
            let tmp39 = tmp24;
            tmp12 = tmp24;
            if (tmp24 === tmp38.alternate) {
              break;
            } else {
              let _return4 = tmp39.return;
              while (_return4) {
                tmp39 = _return4;
                if (5 === _return4.tag) {
                  break;
                }
              }
              if (!_return4) {
                _return4 = null;
              }
              let _return5 = tmp38.return;
              while (_return5) {
                tmp38 = _return5;
                if (5 === _return5.tag) {
                  break;
                }
              }
              if (!_return5) {
                _return5 = null;
              }
              diff2 = diff2 - 1;
              tmp30 = _return5;
              tmp24 = _return4;
              tmp12 = null;
              if (!tmp36) {
                break;
              }
            }
          }
        }
      }
      const pooled = closure_41.getPooled(scrollShouldSetResponder, tmp12, responderIgnoreScroll, arg3);
      pooled.touchHistory = closure_49.touchHistory;
      obj = tmp12 === c50 ? accumulateTwoPhaseDispatchesSingleSkipTarget : accumulateTwoPhaseDispatchesSingle$1;
      const _Array = Array;
      if (Array.isArray(pooled)) {
        const item = pooled.forEach(obj, undefined);
      } else if (pooled) {
        obj.call(undefined, pooled);
      }
      ({ _dispatchListeners, _dispatchInstances } = pooled);
      if (isArray(_dispatchListeners)) {
        tmp53 = null;
        if (0 < _dispatchListeners.length) {
          let num13 = 0;
          tmp53 = null;
          if (!pooled.isPropagationStopped()) {
            while (!_dispatchListeners[num13](pooled, _dispatchInstances[num13])) {
              sum = num13 + 1;
              tmp53 = null;
              if (sum < _dispatchListeners.length) {
                num13 = sum;
                tmp53 = null;
              }
            }
            tmp53 = _dispatchInstances[num13];
          }
        }
      } else {
        tmp53 = null;
        if (_dispatchListeners) {
          tmp53 = null;
          if (_dispatchListeners(pooled, _dispatchInstances)) {
            tmp53 = _dispatchInstances;
          }
        }
      }
      pooled._dispatchInstances = null;
      pooled._dispatchListeners = null;
      if (!pooled.isPersistent()) {
        const constructor = pooled.constructor;
        constructor.release(pooled);
      }
      tmp5 = null;
      if (tmp53) {
        tmp5 = null;
        if (tmp53 !== c50) {
          const pooled1 = closure_41.getPooled(closure_41.responderGrant, tmp53, responderIgnoreScroll, arg3);
          pooled1.touchHistory = closure_49.touchHistory;
          const _Array7 = Array;
          if (Array.isArray(pooled1)) {
            const item1 = pooled1.forEach(accumulateDirectDispatchesSingle$1, undefined);
          } else if (pooled1) {
            accumulateDirectDispatchesSingle$1.call(undefined, pooled1);
          }
          ({ _dispatchListeners: _dispatchListeners2, _dispatchInstances: _dispatchInstances2 } = pooled1);
          if (isArray(_dispatchListeners2)) {
            const _Error5 = Error;
            throw Error("Invalid `event`.");
          } else {
            let tmp60 = null;
            if (_dispatchListeners2) {
              tmp60 = N(_dispatchInstances2);
            }
            pooled1.currentTarget = tmp60;
            let _dispatchListeners2Result = null;
            if (_dispatchListeners2) {
              _dispatchListeners2Result = _dispatchListeners2(pooled1);
            }
            pooled1.currentTarget = null;
            pooled1._dispatchListeners = null;
            pooled1._dispatchInstances = null;
            const tmp64 = c50;
            if (tmp64) {
              const pooled2 = closure_41.getPooled(
                closure_41.responderTerminationRequest,
                c50,
                responderIgnoreScroll,
                arg3,
              );
              pooled2.touchHistory = closure_49.touchHistory;
              const _Array2 = Array;
              if (Array.isArray(pooled2)) {
                const item2 = pooled2.forEach(accumulateDirectDispatchesSingle$1, undefined);
              } else if (pooled2) {
                accumulateDirectDispatchesSingle$1.call(undefined, pooled2);
              }
              const _dispatchListeners3 = pooled2._dispatchListeners;
              let tmp71 = !_dispatchListeners3;
              if (_dispatchListeners3) {
                ({ _dispatchListeners: _dispatchListeners4, _dispatchInstances: _dispatchInstances3 } = pooled2);
                if (isArray(_dispatchListeners4)) {
                  const _Error4 = Error;
                  throw Error("Invalid `event`.");
                } else {
                  let tmp72 = null;
                  if (_dispatchListeners4) {
                    tmp72 = N(_dispatchInstances3);
                  }
                  pooled2.currentTarget = tmp72;
                  let _dispatchListeners4Result = null;
                  if (_dispatchListeners4) {
                    _dispatchListeners4Result = _dispatchListeners4(pooled2);
                  }
                  pooled2.currentTarget = null;
                  pooled2._dispatchListeners = null;
                  pooled2._dispatchInstances = null;
                  tmp71 = _dispatchListeners4Result;
                }
              }
              if (!pooled2.isPersistent()) {
                const constructor2 = pooled2.constructor;
                constructor2.release(pooled2);
              }
              const getPooled = closure_41.getPooled;
              if (tmp71) {
                const pooled3 = getPooled(closure_41.responderTerminate, c50, responderIgnoreScroll, arg3);
                pooled3.touchHistory = closure_49.touchHistory;
                const _Array4 = Array;
                if (Array.isArray(pooled3)) {
                  const item3 = pooled3.forEach(accumulateDirectDispatchesSingle$1, undefined);
                } else if (pooled3) {
                  accumulateDirectDispatchesSingle$1.call(undefined, pooled3);
                }
                items = [pooled1, pooled3];
                c50 = tmp53;
                tmp5 = items;
                if (null !== accumulateDirectDispatchesSingle$1.GlobalResponderHandler) {
                  const GlobalResponderHandler = accumulateDirectDispatchesSingle$1.GlobalResponderHandler;
                  GlobalResponderHandler.onChange(tmp86, tmp53, true === _dispatchListeners2Result);
                  tmp5 = items;
                }
              } else {
                const pooled4 = getPooled(closure_41.responderReject, tmp53, responderIgnoreScroll, arg3);
                pooled4.touchHistory = closure_49.touchHistory;
                const _Array3 = Array;
                if (Array.isArray(pooled4)) {
                  const item4 = pooled4.forEach(accumulateDirectDispatchesSingle$1, undefined);
                } else if (pooled4) {
                  accumulateDirectDispatchesSingle$1.call(undefined, pooled4);
                }
                tmp5 = pooled4;
                if (null == pooled4) {
                  const _Error6 = Error;
                  throw Error("Accumulated items must not be null or undefined.");
                }
              }
            } else if (null == pooled1) {
              const _Error = Error;
              throw Error("Accumulated items must not be null or undefined.");
            } else {
              c50 = tmp53;
              tmp5 = pooled1;
              if (null !== accumulateDirectDispatchesSingle$1.GlobalResponderHandler) {
                const GlobalResponderHandler3 = accumulateDirectDispatchesSingle$1.GlobalResponderHandler;
                GlobalResponderHandler3.onChange(tmp65, tmp53, true === _dispatchListeners2Result);
                tmp5 = pooled1;
              }
            }
          }
        }
      }
    }
    let tmp88 = c50;
    let tmp90 = tmp88;
    const tmp89 = c50 && "topTouchStart" === arg0;
    if (tmp90) {
      tmp90 = "topTouchMove" === arg0;
    }
    if (tmp88) {
      tmp88 = "topTouchEnd" === arg0 || "topTouchCancel" === arg0;
      const tmp91 = "topTouchEnd" === arg0 || "topTouchCancel" === arg0;
    }
    if (tmp89) {
      responderStart = closure_41.responderStart;
    } else if (tmp90) {
      responderStart = closure_41.responderMove;
    } else {
      responderStart = null;
      if (tmp88) {
        responderStart = closure_41.responderEnd;
      }
    }
    obj2 = tmp5;
    if (responderStart) {
      const pooled5 = closure_41.getPooled(responderStart, c50, responderIgnoreScroll, arg3);
      pooled5.touchHistory = closure_49.touchHistory;
      const _Array5 = Array;
      if (Array.isArray(pooled5)) {
        const item5 = pooled5.forEach(accumulateDirectDispatchesSingle$1, undefined);
      } else if (pooled5) {
        accumulateDirectDispatchesSingle$1.call(undefined, pooled5);
      }
      if (null == pooled5) {
        const _Error3 = Error;
        throw Error("Accumulated items must not be null or undefined.");
      } else {
        let tmp106 = pooled5;
        if (null != tmp5) {
          let combined;
          if (isArray(tmp5)) {
            combined = tmp5.concat(pooled5);
          } else if (isArray(pooled5)) {
            items1 = [tmp5];
            combined = items1.concat(pooled5);
          } else {
            combined = [tmp5, pooled5];
          }
          tmp106 = combined;
        }
        obj2 = tmp106;
      }
    }
    let flag2 = c50;
    if (flag2) {
      flag2 = !tmp107;
    }
    if (flag2) {
      flag2 = "topTouchEnd" === arg0 || "topTouchCancel" === arg0;
      const tmp108 = "topTouchEnd" === arg0 || "topTouchCancel" === arg0;
    }
    if (flag2) {
      const touches = responderIgnoreScroll.touches;
      flag2 = true;
      if (touches) {
        flag2 = true;
        if (0 !== touches.length) {
          let num17 = 0;
          flag2 = true;
          if (0 < touches.length) {
            while (true) {
              let target = touches[num17].target;
              if (null != target) {
                if (0 !== target) {
                  if (typeof A === "function") {
                    let internalInstanceHandle = target;
                    if (null != target.canonical) {
                      internalInstanceHandle = target;
                      if (null != target.canonical.internalInstanceHandle) {
                        internalInstanceHandle = target.canonical.internalInstanceHandle;
                      }
                    }
                    let tmp110 = c50;
                    let flag3 = false;
                    if (internalInstanceHandle) {
                      let tmp111 = internalInstanceHandle;
                      flag3 = true;
                      while (tmp110 !== internalInstanceHandle) {
                        flag3 = true;
                        if (tmp110 === tmp111.alternate) {
                          break;
                        } else {
                          let _return6 = tmp111.return;
                          while (_return6) {
                            tmp111 = _return6;
                            if (5 === _return6.tag) {
                              break;
                            }
                          }
                          if (!_return6) {
                            _return6 = null;
                          }
                          internalInstanceHandle = _return6;
                          flag3 = false;
                          if (!_return6) {
                            break;
                          }
                        }
                      }
                    }
                    flag2 = false;
                    if (flag3) {
                      break;
                    }
                  } else {
                    let str20 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                }
                break;
              }
              let sum1 = num17 + 1;
              num17 = sum1;
              flag2 = true;
              if (sum1 >= touches.length) {
                break;
              }
            }
          }
        }
      }
    }
    if (c50 && "topTouchCancel" === arg0) {
      responderTerminate = closure_41.responderTerminate;
    } else {
      responderTerminate = null;
      if (flag2) {
        responderTerminate = closure_41.responderRelease;
      }
    }
    let tmp117 = obj2;
    if (responderTerminate) {
      const pooled6 = closure_41.getPooled(responderTerminate, c50, responderIgnoreScroll, arg3);
      pooled6.touchHistory = closure_49.touchHistory;
      const _Array6 = Array;
      if (Array.isArray(pooled6)) {
        const item6 = pooled6.forEach(accumulateDirectDispatchesSingle$1, undefined);
      } else if (pooled6) {
        accumulateDirectDispatchesSingle$1.call(undefined, pooled6);
      }
      if (null == pooled6) {
        const _Error2 = Error;
        throw Error("Accumulated items must not be null or undefined.");
      } else {
        let tmp128 = pooled6;
        if (null != obj2) {
          let combined1;
          if (isArray(obj2)) {
            combined1 = obj2.concat(pooled6);
          } else if (isArray(pooled6)) {
            const items2 = [obj2];
            combined1 = items2.concat(pooled6);
          } else {
            combined1 = [obj2, pooled6];
          }
          tmp128 = combined1;
        }
        c50 = null;
        tmp117 = tmp128;
        if (null !== accumulateDirectDispatchesSingle$1.GlobalResponderHandler) {
          const GlobalResponderHandler2 = accumulateDirectDispatchesSingle$1.GlobalResponderHandler;
          GlobalResponderHandler2.onChange(tmp129, null, undefined);
          tmp117 = tmp128;
        }
      }
    }
    return tmp117;
  },
  GlobalResponderHandler: null,
  injection: {
    injectGlobalResponderHandler(GlobalResponderHandler) {
      obj6.GlobalResponderHandler = GlobalResponderHandler;
    },
  },
};
let obj7 = {};
let closure_60 = [];
let closure_61 = {};
let closure_62 = {};
const customBubblingEventTypes = get_BatchedBridge.ReactNativeViewConfigRegistry.customBubblingEventTypes;
const customDirectEventTypes = get_BatchedBridge.ReactNativeViewConfigRegistry.customDirectEventTypes;
function recomputePluginOrdering() {
  if (closure_58) {
    for (const key10004 in obj7) {
      let tmp22 = obj7[key10004];
      let index = closure_58.indexOf(key10004);
      if (-1 >= index) {
        let tmp19 = globalThis;
        let _Error6 = Error;
        let str12 = "EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `";
        let str13 = "`.";
        throw Error(
          "EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `" +
            key10004 +
            "`.",
        );
      } else {
        if (closure_60[index]) {
          continue;
        } else if (tmp22.extractEvents) {
          tmp25[index] = tmp22;
          let eventTypes = tmp22.eventTypes;
          let keys = Object.keys();
          if (keys === undefined) {
            continue;
          } else {
            let tmp8 = keys[tmp2];
            while (tmp8 !== undefined) {
              let tmp27 = eventTypes[tmp8];
              if (closure_61.hasOwnProperty(tmp8)) {
                let tmp18 = globalThis;
                let _Error5 = Error;
                let str10 = "EventPluginRegistry: More than one plugin attempted to publish the same event name, `";
                let str11 = "`.";
                throw Error(
                  "EventPluginRegistry: More than one plugin attempted to publish the same event name, `" + tmp8 + "`.",
                );
              } else {
                let flag;
                closure_61[tmp8] = tmp27;
                let phasedRegistrationNames = tmp27.phasedRegistrationNames;
                if (phasedRegistrationNames) {
                  flag = true;
                  let keys1 = Object.keys();
                  if (keys1 !== undefined) {
                    flag = true;
                    let tmp13 = keys1[tmp];
                    while (tmp13 !== undefined) {
                      if (!phasedRegistrationNames.hasOwnProperty(tmp13)) {
                        continue;
                      } else {
                        let tmp14 = phasedRegistrationNames[tmp13];
                        if (closure_62[tmp14]) {
                          let tmp16 = globalThis;
                          let _Error3 = Error;
                          str5 =
                            "EventPluginRegistry: More than one plugin attempted to publish the same registration name, `";
                          let str6 = "`.";
                          throw Error(
                            "EventPluginRegistry: More than one plugin attempted to publish the same registration name, `" +
                              tmp14 +
                              "`.",
                          );
                        } else {
                          tmp15[tmp14] = tmp22;
                          continue;
                        }
                      }
                      continue;
                    }
                  }
                } else {
                  flag = false;
                  if (tmp27.registrationName) {
                    let registrationName = tmp27.registrationName;
                    if (closure_62[registrationName]) {
                      let tmp10 = globalThis;
                      let _Error2 = Error;
                      str3 =
                        "EventPluginRegistry: More than one plugin attempted to publish the same registration name, `";
                      let str4 = "`.";
                      throw Error(
                        "EventPluginRegistry: More than one plugin attempted to publish the same registration name, `" +
                          registrationName +
                          "`.",
                      );
                    } else {
                      tmp9[registrationName] = tmp22;
                      flag = true;
                    }
                  }
                }
                if (flag) {
                  continue;
                } else {
                  let tmp17 = globalThis;
                  let _Error4 = Error;
                  let str7 = "EventPluginRegistry: Failed to publish event `";
                  let str8 = "` for plugin `";
                  let str9 = "`.";
                  throw Error(
                    "EventPluginRegistry: Failed to publish event `" + tmp8 + "` for plugin `" + key10004 + "`.",
                  );
                }
              }
            }
          }
          continue;
        } else {
          let tmp5 = globalThis;
          let _Error = Error;
          let str = "EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `";
          let str2 = "` does not.";
          throw Error(
            "EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `" +
              key10004 +
              "` does not.",
          );
        }
        continue;
      }
    }
  }
}
let closure_58 = slice.call(["ResponderEventPlugin", "ReactNativeBridgeEventPlugin"]);
let result = recomputePluginOrdering();
let obj8 = {
  ResponderEventPlugin: obj6,
  ReactNativeBridgeEventPlugin: {
    eventTypes: {},
    extractEvents(event, arg1, arg2, arg3) {
      let tmp21;
      if (null == arg1) {
        return null;
      } else {
        if (!customBubblingEventTypes[event]) {
          if (!customDirectEventTypes[event]) {
            const _Error = Error;
            throw Error('Unsupported top level event type "' + event + '" dispatched');
          }
        }
        let tmp3 = tmp25;
        const getPooled = SyntheticEvent.getPooled;
        if (!customBubblingEventTypes[event]) {
          tmp3 = tmp27;
        }
        const pooled = getPooled(tmp3, arg1, arg2, arg3);
        if (customBubblingEventTypes[event]) {
          if (null != pooled) {
            if (null != pooled.dispatchConfig.phasedRegistrationNames) {
              if (pooled.dispatchConfig.phasedRegistrationNames.skipBubbling) {
                const tmp13 = pooled && pooled.dispatchConfig.phasedRegistrationNames;
                if (tmp13) {
                  let _targetInst = pooled._targetInst;
                  items = [];
                  if (_targetInst) {
                    items.push(_targetInst);
                    let tmp16 = _targetInst;
                    do {
                      _return = tmp16.return;
                      while (_return) {
                        tmp16 = _return;
                        if (5 === _return.tag) {
                          break;
                        }
                      }
                      if (!_return) {
                        _return = null;
                      }
                      _targetInst = _return;
                    } while (_targetInst);
                  }
                  diff = tmp18 - 1;
                  if (0 < +items.length) {
                    do {
                      let tmp14Result = accumulateDirectionalDispatches(items[diff], "captured", pooled);
                      tmp21 = +diff;
                      diff = tmp21 - 1;
                    } while (0 < tmp21);
                  }
                  accumulateDirectionalDispatches(items[0], "bubbled", pooled);
                }
              }
            }
          }
          const _Array2 = Array;
          if (Array.isArray(pooled)) {
            const item = pooled.forEach(accumulateTwoPhaseDispatchesSingle, undefined);
          } else if (pooled) {
            accumulateTwoPhaseDispatchesSingle.call(undefined, pooled);
          }
        } else if (customDirectEventTypes[event]) {
          const _Array = Array;
          if (Array.isArray(pooled)) {
            const item1 = pooled.forEach(accumulateDirectDispatchesSingle, undefined);
          } else if (pooled) {
            accumulateDirectDispatchesSingle.call(undefined, pooled);
          }
        } else {
          return null;
        }
        return pooled;
      }
    },
  },
};
let flag = false;
let flag2 = false;
let keys = Object.keys();
if (keys !== undefined) {
  flag2 = flag;
  let tmp13 = keys[tmp];
  while (tmp13 !== undefined) {
    let tmp21 = tmp13;
    if (!obj8.hasOwnProperty(tmp13)) {
      continue;
    } else {
      let tmp14 = obj8[tmp13];
      if (!obj7.hasOwnProperty(tmp13)) {
        if (obj7[tmp13]) {
          let _Error = Error;
          let str = "EventPluginRegistry: Cannot inject two different event plugins using the same name, `";
          let str2 = "`.";
          throw Error(
            "EventPluginRegistry: Cannot inject two different event plugins using the same name, `" + tmp13 + "`.",
          );
        } else {
          obj7[tmp13] = tmp14;
          flag = true;
          continue;
        }
      } else {
        flag = tmp12;
      }
      continue;
    }
    continue;
  }
}
if (flag2) {
  let result1 = recomputePluginOrdering();
}
let c69 = false;
let c70 = null;
let closure_72 = null;
let __REACT_DEVTOOLS_GLOBAL_HOOK__2 = null;
if (Math.clz32) {
  const _Math = Math;
  let clz32Fallback = Math.clz32;
} else {
  clz32Fallback = function clz32Fallback(arg0) {
    let num = 32;
    if (0 !== arg0 >>> 0) {
      num = (31 - ((log(tmp) / LN2) | 0)) | 0;
    }
    return num;
  };
}
let c78 = 256;
let c79 = 262144;
let c80 = 4194304;
let closure_85 = [];
let sum = -1;
let closure_87 = {};
if (typeof Object.is === "function") {
  let _Object = Object;
} else {
  is = function is(arg0, arg1) {
    let tmp = arg0 === arg1;
    if (tmp) {
      tmp = 0 !== arg0 || 1 / arg0 === 1 / arg1;
      const tmp2 = 0 !== arg0 || 1 / arg0 === 1 / arg1;
    }
    if (!tmp) {
      tmp = arg0 != arg0 && arg1 != arg1;
    }
    return tmp;
  };
}
function createCursor(current) {
  return { current };
}
let closure_89 =
  typeof reportError === "function"
    ? reportError
    : function (message) {
        if (typeof window === "object") {
          const _window3 = window;
          if (typeof window.ErrorEvent === "function") {
            const _window = window;
            if (typeof message === "object") {
              if (null !== message) {
                let StringResult;
                if (typeof message.message === "string") {
                  const _String2 = String;
                  StringResult = String(message.message);
                }
                const self = this;
                const self2 = this;
                const obj = { bubbles: true, cancelable: true, message: StringResult, error: message };
                new tmp("error", obj);
                const _window2 = window;
              }
            }
            const _String = String;
            StringResult = String(message);
          }
          const _console = console;
          console.error(message);
        }
        if (typeof process === "object") {
          const _process = process;
          if (typeof process.emit === "function") {
            const _process2 = process;
            process.emit("uncaughtException", message);
          }
        }
      };
const weakMap = new WeakMap();
let closure_93 = createCursor(null);
let closure_94 = createCursor(null);
let closure_95 = createCursor(null);
let closure_96 = createCursor(null);
let c100 = null;
let closure_101 = createCursor(null);
let c102 = null;
function readContext(_currentValue2) {
  _currentValue2 = _currentValue2._currentValue2;
  next = { context: _currentValue2, memoizedValue: _currentValue2, next: null };
  if (null === obj2) {
    if (null === _null) {
      const _Error = Error;
      throw Error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
      );
    } else {
      obj2 = { lanes: 0, firstContext: next };
      _null.dependencies = obj2;
      _null.flags = _null.flags | 524288;
    }
  } else {
    tmp2.next = next;
    obj2 = next;
  }
  return _currentValue2;
}
function createChildReconciler(arg0) {
  let closure_0 = arg0;
  function updateTextNode(dependencies, tag, pendingProps, lanes) {
    if (null !== tag) {
      let tmp2;
      if (6 === tag.tag) {
        tmp2 = createWorkInProgress(tag, pendingProps);
        tmp2.index = 0;
        tmp2.sibling = null;
        tmp2.return = dependencies;
      }
      return tmp2;
    }
    const mode = dependencies.mode;
    Object.create(FiberNode.prototype);
    tmp2 = {
      tag: 6,
      key: null,
      elementType: null,
      type: null,
      stateNode: null,
      return: null,
      child: null,
      sibling: null,
      index: 0,
      ref: null,
      refCleanup: null,
      pendingProps,
      memoizedProps: null,
      updateQueue: null,
      memoizedState: null,
      dependencies: null,
      mode,
      flags: 0,
      subtreeFlags: 0,
      deletions: null,
      lanes: 0,
      childLanes: 0,
      alternate: null,
      lanes,
      return: dependencies,
    };
  }
  function updateElement(dependencies, elementType, type, lanes) {
    let tmp5;
    type = type.type;
    if (type === closure_15) {
      tmp5 = updateFragment(dependencies, elementType, type.props.children, lanes, type.key);
    } else {
      if (null !== elementType) {
        if (elementType.elementType === type) {
          const tmp8 = createWorkInProgress(elementType, type.props);
          tmp8.index = 0;
          tmp8.sibling = null;
          let tmp9 = null;
          if (undefined !== type.props.ref) {
            tmp9 = ref2;
          }
          tmp8.ref = tmp9;
          tmp8.return = dependencies;
          tmp5 = tmp8;
        }
      }
      tmp5 = createFiberFromTypeAndProps(type.type, type.key, type.props, 0, dependencies.mode, lanes);
      let tmp6 = null;
      if (undefined !== type.props.ref) {
        tmp6 = ref;
      }
      tmp5.ref = tmp6;
      tmp5.return = dependencies;
    }
    return tmp5;
  }
  function updatePortal(dependencies, tag, containerInfo, lanes) {
    if (null !== tag) {
      if (4 === tag.tag) {
        if (tag.stateNode.containerInfo === containerInfo.containerInfo) {
          let tmp3;
          if (tag.stateNode.implementation === containerInfo.implementation) {
            const tmp = containerInfo.children || [];
            tmp3 = createWorkInProgress(tag, tmp);
            tmp3.index = 0;
            tmp3.sibling = null;
            tmp3.return = dependencies;
          }
          return tmp3;
        }
      }
    }
    const mode = dependencies.mode;
    const key = containerInfo.key;
    const tmp4 = null !== containerInfo.children ? containerInfo.children : [];
    Object.create(FiberNode.prototype);
    tmp3 = {
      tag: 4,
      key,
      elementType: null,
      type: null,
      stateNode: null,
      return: null,
      child: null,
      sibling: null,
      index: 0,
      ref: null,
      refCleanup: null,
      pendingProps: tmp4,
      memoizedProps: null,
      updateQueue: null,
      memoizedState: null,
      dependencies: null,
      mode,
      flags: 0,
      subtreeFlags: 0,
      deletions: null,
      lanes: 0,
      childLanes: 0,
      alternate: null,
      lanes,
      stateNode: obj4,
      return: dependencies,
    };
    obj = {
      tag: 4,
      key,
      elementType: null,
      type: null,
      stateNode: null,
      return: null,
      child: null,
      sibling: null,
      index: 0,
      ref: null,
      refCleanup: null,
      pendingProps: tmp4,
      memoizedProps: null,
      updateQueue: null,
      memoizedState: null,
      dependencies: null,
      mode,
      flags: 0,
      subtreeFlags: 0,
      deletions: null,
      lanes: 0,
      childLanes: 0,
      alternate: null,
      lanes,
      stateNode: obj4,
      return: dependencies,
    };
    obj4 = {
      containerInfo: containerInfo.containerInfo,
      pendingChildren: null,
      implementation: containerInfo.implementation,
    };
  }
  function updateFragment(children1, tag, children, lanes, key) {
    if (null !== tag) {
      let tmp2;
      if (7 === tag.tag) {
        tmp2 = createWorkInProgress(tag, children);
        tmp2.index = 0;
        tmp2.sibling = null;
        tmp2.return = children1;
      }
      return tmp2;
    }
    const mode = children1.mode;
    Object.create(FiberNode.prototype);
    tmp2 = {
      tag: 7,
      key,
      elementType: null,
      type: null,
      stateNode: null,
      return: null,
      child: null,
      sibling: null,
      index: 0,
      ref: null,
      refCleanup: null,
      pendingProps: children,
      memoizedProps: null,
      updateQueue: null,
      memoizedState: null,
      dependencies: null,
      mode,
      flags: 0,
      subtreeFlags: 0,
      deletions: null,
      lanes: 0,
      childLanes: 0,
      alternate: null,
      lanes,
      return: children1,
    };
  }
  function createChild(BaseFramework, children1, lanes) {
    if (typeof children1 !== "string") {
      if (typeof children1 !== "number") {
        if (typeof children1 !== "bigint") {
          if (typeof children1 === "object") {
            if (null !== children1) {
              const $$typeof = children1.$$typeof;
              if (closure_13 === $$typeof) {
                const tmp25 = createFiberFromTypeAndProps(
                  children1.type,
                  children1.key,
                  children1.props,
                  0,
                  BaseFramework.mode,
                  lanes,
                );
                let tmp26 = null;
                if (undefined !== children1.props.ref) {
                  tmp26 = ref;
                }
                tmp25.ref = tmp26;
                tmp25.return = BaseFramework;
                return tmp25;
              } else if (closure_14 === $$typeof) {
                const mode2 = BaseFramework.mode;
                const key = children1.key;
                const tmp20 = null !== children1.children ? children1.children : [];
                obj2 = Object.create(FiberNode.prototype);
                const obj3 = {
                  tag: 4,
                  key,
                  elementType: null,
                  type: null,
                  stateNode: obj4,
                  return: BaseFramework,
                  child: null,
                  sibling: null,
                  index: 0,
                  ref: null,
                  refCleanup: null,
                  pendingProps: tmp20,
                  memoizedProps: null,
                  updateQueue: null,
                  memoizedState: null,
                  dependencies: null,
                  mode: mode2,
                  flags: 0,
                  subtreeFlags: 0,
                  deletions: null,
                  lanes,
                  childLanes: 0,
                  alternate: null,
                };
                obj4 = { containerInfo: null, pendingChildren: null, implementation: null };
                ({ containerInfo: obj6.containerInfo, implementation: obj6.implementation } = children1);
                return obj3;
              } else if (closure_24 === $$typeof) {
                return createChild(BaseFramework, resolveLazy(children1), lanes);
              } else {
                if (!isArray(children1)) {
                  let tmp3 = null;
                  if (null !== children1) {
                    tmp3 = null;
                    if (typeof children1 === "object") {
                      let tmp5 = null;
                      if ((typeof iterator && children1[iterator]) || children1[Symbol.iterator] === "function") {
                        tmp5 = tmp4;
                      }
                      tmp3 = tmp5;
                    }
                  }
                  if (!tmp3) {
                    if (typeof children1.then === "function") {
                      c139 = c139 + 1;
                      let tmp14 = c138;
                      const tmp13 = c139;
                      if (null === c138) {
                        items = [];
                        c138 = items;
                        tmp14 = items;
                      }
                      return createChild(BaseFramework, trackUsedThenable(tmp14, children1, tmp13), lanes);
                    } else if (children1.$$typeof === forResult) {
                      if (null === c102) {
                        c102 = BaseFramework;
                        obj2 = null;
                        const dependencies = BaseFramework.dependencies;
                        if (null !== dependencies) {
                          dependencies.firstContext = null;
                        }
                      }
                      const _currentValue2 = children1._currentValue2;
                      obj5 = { context: children1, memoizedValue: _currentValue2, next: null };
                      if (null === obj2) {
                        if (null === BaseFramework) {
                          const _Error3 = Error;
                          throw Error(
                            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
                          );
                        } else {
                          obj2 = obj5;
                          obj7 = { lanes: 0, firstContext: obj5 };
                          BaseFramework.dependencies = obj7;
                          BaseFramework.flags = BaseFramework.flags | 524288;
                        }
                      } else {
                        tmp10.next = obj5;
                        obj2 = obj5;
                      }
                      return createChild(BaseFramework, _currentValue2, lanes);
                    } else if (children1.$$typeof === closure_12) {
                      const _Error2 = Error;
                      throw Error(
                        'A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the "react" package is used.\n- A library pre-bundled an old copy of "react" or "react/jsx-runtime".\n- A compiler tries to "inline" JSX instead of using the runtime.',
                      );
                    } else {
                      const _Object2 = Object;
                      let callResult = toString.call(children1);
                      const _Error = Error;
                      if ("[object Object]" === callResult) {
                        const _Object = Object;
                        const keys = Object.keys(children1);
                        callResult = `${"object with keys {" + obj.join(", ")}}`;
                      }
                      throw _Error(
                        "Objects are not valid as a React child (found: " +
                          callResult +
                          "). If you meant to render a collection of children, use an array instead.",
                      );
                    }
                  }
                }
                const mode = BaseFramework.mode;
                Object.create(FiberNode.prototype);
                return {
                  tag: 7,
                  key: null,
                  elementType: null,
                  type: null,
                  stateNode: null,
                  return: BaseFramework,
                  child: null,
                  sibling: null,
                  index: 0,
                  ref: null,
                  refCleanup: null,
                  pendingProps: children1,
                  memoizedProps: null,
                  updateQueue: null,
                  memoizedState: null,
                  dependencies: null,
                  mode,
                  flags: 0,
                  subtreeFlags: 0,
                  deletions: null,
                  lanes,
                  childLanes: 0,
                  alternate: null,
                };
              }
            }
          }
          return null;
        }
      }
    }
    const text = `${children1}`;
    const mode3 = BaseFramework.mode;
    Object.create(FiberNode.prototype);
    return {
      tag: 6,
      key: null,
      elementType: null,
      type: null,
      stateNode: null,
      return: null,
      child: null,
      sibling: null,
      index: 0,
      ref: null,
      refCleanup: null,
      pendingProps: text,
      memoizedProps: null,
      updateQueue: null,
      memoizedState: null,
      dependencies: null,
      mode: mode3,
      flags: 0,
      subtreeFlags: 0,
      deletions: null,
      lanes: 0,
      childLanes: 0,
      alternate: null,
      lanes,
      return: BaseFramework,
    };
  }
  function updateSlot(dependencies, key, children1, lanes) {
    key = null;
    if (null !== key) {
      key = key.key;
    }
    if (typeof children1 !== "string") {
      if (typeof children1 !== "number") {
        if (typeof children1 !== "bigint") {
          if (typeof children1 === "object") {
            if (null !== children1) {
              const $$typeof = children1.$$typeof;
              if (closure_13 === $$typeof) {
                let tmp41 = null;
                if (children1.key === key) {
                  tmp41 = updateElement(dependencies, key, children1, lanes);
                }
                return tmp41;
              } else if (closure_14 === $$typeof) {
                let tmp35 = null;
                if (children1.key === key) {
                  tmp35 = updatePortal(dependencies, key, children1, lanes);
                }
                return tmp35;
              } else if (closure_24 === $$typeof) {
                return updateSlot(dependencies, key, resolveLazy(children1), lanes);
              } else {
                if (!isArray(children1)) {
                  let tmp3 = null;
                  if (null !== children1) {
                    tmp3 = null;
                    if (typeof children1 === "object") {
                      let tmp5 = null;
                      if ((typeof iterator && children1[iterator]) || children1[Symbol.iterator] === "function") {
                        tmp5 = tmp4;
                      }
                      tmp3 = tmp5;
                    }
                  }
                  if (!tmp3) {
                    if (typeof children1.then === "function") {
                      c139 = c139 + 1;
                      let tmp18 = c138;
                      const tmp17 = c139;
                      if (null === c138) {
                        items = [];
                        c138 = items;
                        tmp18 = items;
                      }
                      return updateSlot(dependencies, key, trackUsedThenable(tmp18, children1, tmp17), lanes);
                    } else if (children1.$$typeof === forResult) {
                      if (null === c102) {
                        c102 = dependencies;
                        obj2 = null;
                        dependencies = dependencies.dependencies;
                        if (null !== dependencies) {
                          dependencies.firstContext = null;
                        }
                      }
                      const _currentValue2 = children1._currentValue2;
                      obj2 = { context: children1, memoizedValue: _currentValue2, next: null };
                      if (null === obj2) {
                        if (null === dependencies) {
                          const _Error3 = Error;
                          throw Error(
                            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
                          );
                        } else {
                          const obj3 = { lanes: 0, firstContext: obj2 };
                          dependencies.dependencies = obj3;
                          dependencies.flags = dependencies.flags | 524288;
                        }
                      } else {
                        tmp10.next = obj2;
                      }
                      return updateSlot(dependencies, key, _currentValue2, lanes);
                    } else if (children1.$$typeof === closure_12) {
                      const _Error2 = Error;
                      throw Error(
                        'A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the "react" package is used.\n- A library pre-bundled an old copy of "react" or "react/jsx-runtime".\n- A compiler tries to "inline" JSX instead of using the runtime.',
                      );
                    } else {
                      const _Object2 = Object;
                      let callResult = toString.call(children1);
                      const _Error = Error;
                      if ("[object Object]" === callResult) {
                        const _Object = Object;
                        const keys = Object.keys(children1);
                        callResult = `${"object with keys {" + obj.join(", ")}}`;
                      }
                      throw _Error(
                        "Objects are not valid as a React child (found: " +
                          callResult +
                          "). If you meant to render a collection of children, use an array instead.",
                      );
                    }
                  }
                }
                let tmp23 = null;
                if (null === key) {
                  tmp23 = updateFragment(dependencies, key, children1, lanes, null);
                }
                return tmp23;
              }
            }
          }
          return null;
        }
      }
    }
    let tmp47 = null;
    if (null === key) {
      tmp47 = updateTextNode(dependencies, key, "" + children1, lanes);
    }
    return tmp47;
  }
  function updateFromMap(map, dependencies, sum1, children1, lanes) {
    if (typeof children1 !== "string") {
      if (typeof children1 !== "number") {
        if (typeof children1 !== "bigint") {
          if (typeof children1 === "object") {
            if (null !== children1) {
              const $$typeof = children1.$$typeof;
              if (closure_13 === $$typeof) {
                let key2 = sum1;
                const get2 = map.get;
                if (null !== children1.key) {
                  key2 = children1.key;
                }
                const tmp45 = get2(key2) || null;
                return updateElement(dependencies, tmp45, children1, lanes);
              } else if (closure_14 === $$typeof) {
                let key = sum1;
                get = map.get;
                if (null !== children1.key) {
                  key = children1.key;
                }
                const tmp39 = get(key) || null;
                return updatePortal(dependencies, tmp39, children1, lanes);
              } else if (closure_24 === $$typeof) {
                return updateFromMap(map, dependencies, sum1, resolveLazy(children1), lanes);
              } else {
                if (!isArray(children1)) {
                  let tmp3 = null;
                  if (null !== children1) {
                    tmp3 = null;
                    if (typeof children1 === "object") {
                      let tmp5 = null;
                      if ((typeof iterator && children1[iterator]) || children1[Symbol.iterator] === "function") {
                        tmp5 = tmp4;
                      }
                      tmp3 = tmp5;
                    }
                  }
                  if (!tmp3) {
                    if (typeof children1.then === "function") {
                      c139 = c139 + 1;
                      let tmp19 = c138;
                      const tmp18 = c139;
                      if (null === c138) {
                        items = [];
                        c138 = items;
                        tmp19 = items;
                      }
                      return updateFromMap(map, dependencies, sum1, trackUsedThenable(tmp19, children1, tmp18), lanes);
                    } else if (children1.$$typeof === forResult) {
                      if (null === c102) {
                        c102 = dependencies;
                        obj2 = null;
                        dependencies = dependencies.dependencies;
                        if (null !== dependencies) {
                          dependencies.firstContext = null;
                        }
                      }
                      const _currentValue2 = children1._currentValue2;
                      obj2 = { context: children1, memoizedValue: _currentValue2, next: null };
                      if (null === obj2) {
                        if (null === dependencies) {
                          const _Error3 = Error;
                          throw Error(
                            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
                          );
                        } else {
                          const obj3 = { lanes: 0, firstContext: obj2 };
                          dependencies.dependencies = obj3;
                          dependencies.flags = dependencies.flags | 524288;
                        }
                      } else {
                        tmp10.next = obj2;
                      }
                      return updateFromMap(map, dependencies, sum1, _currentValue2, lanes);
                    } else if (children1.$$typeof === closure_12) {
                      const _Error2 = Error;
                      throw Error(
                        'A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the "react" package is used.\n- A library pre-bundled an old copy of "react" or "react/jsx-runtime".\n- A compiler tries to "inline" JSX instead of using the runtime.',
                      );
                    } else {
                      const _Object2 = Object;
                      let callResult = toString.call(children1);
                      const _Error = Error;
                      if ("[object Object]" === callResult) {
                        const _Object = Object;
                        const keys = Object.keys(children1);
                        callResult = `${"object with keys {" + obj.join(", ")}}`;
                      }
                      throw _Error(
                        "Objects are not valid as a React child (found: " +
                          callResult +
                          "). If you meant to render a collection of children, use an array instead.",
                      );
                    }
                  }
                }
                const tmp26 = map.get(sum1) || null;
                return updateFragment(dependencies, tmp26, children1, lanes, null);
              }
            }
          }
          return null;
        }
      }
    }
    const tmp51 = map.get(sum1) || null;
    return updateTextNode(dependencies, tmp51, "" + children1, lanes);
  }
  function reconcileChildFibersImpl(deletions, sibling, type, lanes) {
    let iter6;
    let iter7;
    let obj15;
    let sibling5;
    let sibling9;
    let tmp11;
    let tmp127;
    let tmp4;
    let tmp54;
    let tmp = typeof type === "object";
    if (typeof type === "object") {
      tmp = null !== type;
    }
    if (tmp) {
      tmp = type.type === closure_1_15;
    }
    if (tmp) {
      tmp = null === type.key;
    }
    let children1 = type;
    if (tmp) {
      children1 = type.props.children;
    }
    if (typeof children1 === "object") {
      if (null !== children1) {
        const $$typeof = children1.$$typeof;
        if (closure_1_13 === $$typeof) {
          let tmp223;
          if (null !== sibling) {
            while (sibling.key !== tmp213) {
              let tmp215 = deletions;
              if (tmp215) {
                deletions = deletions.deletions;
                if (null === deletions) {
                  items = [sibling];
                  deletions.deletions = items;
                  deletions.flags = deletions.flags | 16;
                } else {
                  let arr2 = deletions.push(sibling);
                }
              }
              sibling = sibling.sibling;
            }
            type = children1.type;
            if (type === closure_1_15) {
              if (7 === sibling.tag) {
                let sibling16 = sibling.sibling;
                const tmp236 = deletions;
                if (tmp236) {
                  if (null !== sibling16) {
                    do {
                      if (deletions) {
                        let deletions1 = deletions.deletions;
                        if (null === deletions1) {
                          items1 = [sibling16];
                          deletions.deletions = items1;
                          deletions.flags = deletions.flags | 16;
                        } else {
                          let arr3 = deletions1.push(sibling16);
                        }
                      }
                      sibling16 = sibling16.sibling;
                    } while (null !== sibling16);
                  }
                }
                const tmp241 = createWorkInProgress(sibling, children1.props.children);
                tmp241.index = 0;
                tmp241.sibling = null;
                tmp241.return = deletions;
                tmp223 = tmp241;
              }
              const tmp242 = deletions && null === tmp223.alternate;
              if (tmp242) {
                tmp223.flags = tmp223.flags | 67108866;
              }
              return tmp223;
            } else if (sibling.elementType === type) {
              let sibling14 = sibling.sibling;
              const tmp218 = deletions;
              if (tmp218) {
                if (null !== sibling14) {
                  do {
                    if (deletions) {
                      let deletions2 = deletions.deletions;
                      if (null === deletions2) {
                        let items2 = [sibling14];
                        deletions.deletions = items2;
                        deletions.flags = deletions.flags | 16;
                      } else {
                        let arr4 = deletions2.push(sibling14);
                      }
                    }
                    sibling14 = sibling14.sibling;
                  } while (null !== sibling14);
                }
              }
              tmp223 = createWorkInProgress(sibling, children1.props);
              tmp223.index = 0;
              tmp223.sibling = null;
              let tmp224 = null;
              if (undefined !== children1.props.ref) {
                tmp224 = ref;
              }
              tmp223.ref = tmp224;
              tmp223.return = deletions;
            }
            const tmp225 = deletions;
            if (tmp225) {
              let sibling15 = sibling;
              if (null !== sibling) {
                do {
                  if (deletions) {
                    let deletions3 = deletions.deletions;
                    if (null === deletions3) {
                      items3 = [sibling15];
                      deletions.deletions = items3;
                      deletions.flags = deletions.flags | 16;
                    } else {
                      let arr5 = deletions3.push(sibling15);
                    }
                  }
                  sibling15 = sibling15.sibling;
                } while (null !== sibling15);
              }
            }
          }
          if (children1.type === closure_1_15) {
            const children = children1.props.children;
            const mode3 = deletions.mode;
            const key4 = children1.key;
            Object.create(FiberNode.prototype);
            tmp223 = {
              tag: 7,
              key: key4,
              elementType: null,
              type: null,
              stateNode: null,
              return: deletions,
              child: null,
              sibling: null,
              index: 0,
              ref: null,
              refCleanup: null,
              pendingProps: children,
              memoizedProps: null,
              updateQueue: null,
              memoizedState: null,
              dependencies: null,
              mode: mode3,
              flags: 0,
              subtreeFlags: 0,
              deletions: null,
              lanes,
              childLanes: 0,
              alternate: null,
            };
            obj4 = {
              tag: 7,
              key: key4,
              elementType: null,
              type: null,
              stateNode: null,
              return: deletions,
              child: null,
              sibling: null,
              index: 0,
              ref: null,
              refCleanup: null,
              pendingProps: children,
              memoizedProps: null,
              updateQueue: null,
              memoizedState: null,
              dependencies: null,
              mode: mode3,
              flags: 0,
              subtreeFlags: 0,
              deletions: null,
              lanes,
              childLanes: 0,
              alternate: null,
            };
          } else {
            const tmp232 = createFiberFromTypeAndProps(
              children1.type,
              children1.key,
              children1.props,
              0,
              deletions.mode,
              lanes,
            );
            let tmp233 = null;
            if (undefined !== children1.props.ref) {
              tmp233 = ref2;
            }
            tmp232.ref = tmp233;
            tmp232.return = deletions;
            tmp223 = tmp232;
          }
        } else if (closure_1_14 === $$typeof) {
          let sibling11 = sibling;
          if (null !== sibling) {
            while (sibling11.key !== tmp194) {
              let tmp196 = deletions;
              if (tmp196) {
                let deletions4 = deletions.deletions;
                if (null === deletions4) {
                  let items4 = [sibling11];
                  deletions.deletions = items4;
                  deletions.flags = deletions.flags | 16;
                } else {
                  let arr6 = deletions4.push(sibling11);
                }
              }
              sibling11 = sibling11.sibling;
            }
            if (4 === sibling11.tag) {
              if (sibling11.stateNode.containerInfo === children1.containerInfo) {
                if (sibling11.stateNode.implementation === children1.implementation) {
                  let sibling13 = sibling11.sibling;
                  const tmp205 = deletions;
                  if (tmp205) {
                    if (null !== sibling13) {
                      do {
                        if (deletions) {
                          let deletions5 = deletions.deletions;
                          if (null === deletions5) {
                            let items5 = [sibling13];
                            deletions.deletions = items5;
                            deletions.flags = deletions.flags | 16;
                          } else {
                            let arr7 = deletions5.push(sibling13);
                          }
                        }
                        sibling13 = sibling13.sibling;
                      } while (null !== sibling13);
                    }
                  }
                  const tmp209 = children1.children || [];
                  const tmp211 = createWorkInProgress(sibling11, tmp209);
                  tmp211.index = 0;
                  tmp211.sibling = null;
                  tmp211.return = deletions;
                  obj7 = tmp211;
                }
                const tmp212 = deletions && null === obj7.alternate;
                if (tmp212) {
                  obj7.flags = obj7.flags | 67108866;
                }
                return obj7;
              }
            }
            const tmp198 = deletions;
            if (tmp198) {
              let sibling12 = sibling11;
              if (null !== sibling11) {
                do {
                  if (deletions) {
                    let deletions6 = deletions.deletions;
                    if (null === deletions6) {
                      let items6 = [sibling12];
                      deletions.deletions = items6;
                      deletions.flags = deletions.flags | 16;
                    } else {
                      let arr8 = deletions6.push(sibling12);
                    }
                  }
                  sibling12 = sibling12.sibling;
                } while (null !== sibling12);
              }
            }
          }
          const mode2 = deletions.mode;
          const key3 = children1.key;
          const tmp202 = null !== children1.children ? children1.children : [];
          Object.create(FiberNode.prototype);
          obj7 = {
            tag: 4,
            key: key3,
            elementType: null,
            type: null,
            stateNode: obj15,
            return: deletions,
            child: null,
            sibling: null,
            index: 0,
            ref: null,
            refCleanup: null,
            pendingProps: tmp202,
            memoizedProps: null,
            updateQueue: null,
            memoizedState: null,
            dependencies: null,
            mode: mode2,
            flags: 0,
            subtreeFlags: 0,
            deletions: null,
            lanes,
            childLanes: 0,
            alternate: null,
          };
          obj15 = { containerInfo: null, pendingChildren: null, implementation: null };
          ({ containerInfo: obj6.containerInfo, implementation: obj6.implementation } = children1);
        } else if (closure_1_24 === $$typeof) {
          return reconcileChildFibersImpl(deletions, sibling, resolveLazy(children1), lanes);
        } else if (updateFragment(children1)) {
          let tmp169;
          let num26 = 0;
          let sibling8 = sibling;
          let tmp120 = null;
          let tmp121 = null;
          let num27 = 0;
          if (null !== sibling) {
            let num29 = 0;
            let tmp139 = sibling;
            let tmp140 = null;
            let tmp141 = null;
            let num30 = 0;
            num26 = 0;
            sibling8 = sibling;
            tmp120 = null;
            tmp121 = null;
            num27 = 0;
            if (0 < children1.length) {
              while (true) {
                sibling9 = tmp139;
                tmp127 = null;
                if (tmp139.index <= num29) {
                  sibling9 = tmp139.sibling;
                  tmp127 = tmp139;
                }
                let tmp132 = updateSlot(deletions, tmp127, children1[num29], lanes);
                if (null === tmp132) {
                  break;
                } else {
                  let tmp135;
                  let tmp258 = deletions;
                  let tmp133 = deletions && tmp127 && null === tmp132.alternate;
                  if (tmp133) {
                    if (tmp258) {
                      let deletions7 = deletions.deletions;
                      if (null === deletions7) {
                        let items7 = [tmp127];
                        deletions.deletions = items7;
                        deletions.flags = deletions.flags | 16;
                      } else {
                        let arr9 = deletions7.push(tmp127);
                      }
                    }
                  }
                  tmp132.index = num29;
                  if (tmp258) {
                    let tmp136;
                    let alternate4 = tmp132.alternate;
                    if (null !== alternate4) {
                      let index4 = alternate4.index;
                      if (index4 < num30) {
                        tmp132.flags = tmp132.flags | 67108866;
                        index4 = num30;
                      }
                      tmp136 = index4;
                    } else {
                      tmp132.flags = tmp132.flags | 67108866;
                      tmp136 = num30;
                    }
                    tmp135 = tmp136;
                  } else {
                    tmp132.flags = tmp132.flags | 1048576;
                    tmp135 = num30;
                  }
                  let tmp137 = tmp132;
                  if (null !== tmp140) {
                    tmp140.sibling = tmp132;
                    tmp137 = tmp141;
                  }
                  sum = num29 + 1;
                  num26 = sum;
                  sibling8 = sibling9;
                  tmp120 = tmp132;
                  tmp121 = tmp137;
                  num27 = tmp135;
                  if (null !== sibling9) {
                    num29 = sum;
                    tmp139 = sibling9;
                    tmp140 = tmp132;
                    tmp141 = tmp137;
                    num30 = tmp135;
                    sibling8 = sibling9;
                    tmp120 = tmp132;
                    tmp121 = tmp137;
                    num27 = tmp135;
                    num26 = sum;
                  }
                }
              }
              num26 = num29;
              tmp120 = tmp140;
              tmp121 = tmp141;
              num27 = num30;
              sibling8 = tmp127;
              if (null === tmp127) {
                num26 = num29;
                sibling8 = sibling9;
                tmp120 = tmp140;
                tmp121 = tmp141;
                num27 = num30;
              }
            }
          }
          if (num26 === children1.length) {
            tmp169 = tmp121;
            if (deletions) {
              tmp169 = tmp121;
              if (null !== sibling8) {
                do {
                  if (deletions) {
                    let deletions8 = deletions.deletions;
                    if (null === deletions8) {
                      let items8 = [sibling8];
                      deletions.deletions = items8;
                      deletions.flags = deletions.flags | 16;
                    } else {
                      let arr10 = deletions8.push(sibling8);
                    }
                  }
                  sibling8 = sibling8.sibling;
                  tmp169 = tmp121;
                } while (null !== sibling8);
              }
            }
          } else if (null === sibling8) {
            let tmp171 = tmp121;
            let tmp172 = tmp121;
            if (num26 < children1.length) {
              do {
                let tmp174 = createChild(deletions, children1[num26], lanes);
                let tmp179 = tmp120;
                let tmp180 = tmp171;
                let tmp181 = num27;
                if (null !== tmp174) {
                  let tmp182;
                  tmp174.index = num26;
                  let tmp262 = deletions;
                  if (tmp262) {
                    let tmp183;
                    let alternate6 = tmp174.alternate;
                    if (null !== alternate6) {
                      let index6 = alternate6.index;
                      if (index6 < num27) {
                        tmp174.flags = tmp174.flags | 67108866;
                        index6 = num27;
                      }
                      tmp183 = index6;
                    } else {
                      tmp174.flags = tmp174.flags | 67108866;
                      tmp183 = num27;
                    }
                    tmp182 = tmp183;
                  } else {
                    tmp174.flags = tmp174.flags | 1048576;
                    tmp182 = num27;
                  }
                  let tmp184 = tmp174;
                  if (null !== tmp120) {
                    tmp120.sibling = tmp174;
                    tmp184 = tmp171;
                  }
                  tmp180 = tmp184;
                  tmp179 = tmp174;
                  tmp181 = tmp182;
                }
                num26 = num26 + 1;
                tmp120 = tmp179;
                tmp171 = tmp180;
                num27 = tmp181;
                tmp172 = tmp180;
              } while (num26 < children1.length);
            }
            tmp169 = tmp172;
          } else {
            const _Map2 = Map;
            const self3 = this;
            const self4 = this;
            map = new Map();
            let sibling10 = sibling8;
            const tmp260 = map;
            if (null !== sibling8) {
              do {
                if (null !== sibling10.key) {
                  let result = map.set(sibling10.key, sibling10);
                } else {
                  let result1 = map.set(sibling10.index, sibling10);
                }
                sibling10 = sibling10.sibling;
              } while (null !== sibling10);
            }
            let sum1 = num26;
            let tmp146 = tmp120;
            let tmp147 = tmp121;
            let tmp148 = num27;
            let tmp149 = tmp121;
            if (num26 < children1.length) {
              do {
                let tmp155 = updateFromMap(tmp260, deletions, sum1, children1[sum1], lanes);
                let tmp160 = tmp146;
                let tmp161 = tmp147;
                let tmp162 = tmp148;
                if (null !== tmp155) {
                  let tmp165;
                  let tmp163 = deletions;
                  let tmp261 = deletions;
                  if (tmp261) {
                    tmp163 = null !== tmp155.alternate;
                  }
                  if (tmp163) {
                    let key2 = sum1;
                    let _delete2 = map.delete;
                    if (null !== tmp155.key) {
                      key2 = tmp155.key;
                    }
                    let _delete2Result = _delete2(key2);
                  }
                  tmp155.index = sum1;
                  if (tmp261) {
                    let tmp166;
                    let alternate5 = tmp155.alternate;
                    if (null !== alternate5) {
                      let index5 = alternate5.index;
                      if (index5 < tmp148) {
                        tmp155.flags = tmp155.flags | 67108866;
                        index5 = tmp148;
                      }
                      tmp166 = index5;
                    } else {
                      tmp155.flags = tmp155.flags | 67108866;
                      tmp166 = tmp148;
                    }
                    tmp165 = tmp166;
                  } else {
                    tmp155.flags = tmp155.flags | 1048576;
                    tmp165 = tmp148;
                  }
                  let tmp167 = tmp155;
                  if (null !== tmp146) {
                    tmp146.sibling = tmp155;
                    tmp167 = tmp147;
                  }
                  tmp161 = tmp167;
                  tmp160 = tmp155;
                  tmp162 = tmp165;
                }
                sum1 = sum1 + 1;
                tmp146 = tmp160;
                tmp147 = tmp161;
                tmp148 = tmp162;
                tmp149 = tmp161;
              } while (sum1 < children1.length);
            }
            tmp169 = tmp149;
            if (deletions) {
              const item = map.forEach((item) => {
                if (closure_0) {
                  deletions = closure_0.deletions;
                  if (null === deletions) {
                    items = [item];
                    closure_0.deletions = items;
                    closure_0.flags = closure_0.flags | 16;
                  } else {
                    deletions.push(item);
                  }
                }
              });
              tmp169 = tmp149;
            }
          }
          return tmp169;
        } else {
          let tmp25 = null;
          if (null !== children1) {
            tmp25 = null;
            if (typeof children1 === "object") {
              let tmp27 = null;
              if ((typeof iterator && children1[iterator]) || children1[Symbol.iterator] === "function") {
                tmp27 = tmp26;
              }
              tmp25 = tmp27;
            }
          }
          if (tmp25) {
            let tmp45 = null;
            if (null !== children1) {
              tmp45 = null;
              if (typeof children1 === "object") {
                let tmp47 = null;
                if ((typeof iterator && children1[iterator]) || children1[Symbol.iterator] === "function") {
                  tmp47 = tmp46;
                }
                tmp45 = tmp47;
              }
            }
            if (typeof tmp45 !== "function") {
              const _Error5 = Error;
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.",
              );
            } else {
              iter = tmp45.call(children1);
              if (null == iter) {
                const _Error4 = Error;
                throw Error("An iterable object provided no iterator.");
              } else {
                let tmp98;
                const iter8 = iter.next();
                let iter3 = iter8;
                let num13 = 0;
                let sibling6 = sibling;
                let tmp66 = null;
                let tmp67 = null;
                let num14 = 0;
                if (null !== sibling) {
                  let iter4 = iter8;
                  let num15 = 0;
                  let tmp68 = sibling;
                  let tmp69 = null;
                  let tmp70 = null;
                  let num16 = 0;
                  iter3 = iter8;
                  num13 = 0;
                  sibling6 = sibling;
                  tmp66 = null;
                  tmp67 = null;
                  num14 = 0;
                  if (!iter8.done) {
                    while (true) {
                      sibling5 = tmp68;
                      tmp54 = null;
                      if (tmp68.index <= num15) {
                        sibling5 = tmp68.sibling;
                        tmp54 = tmp68;
                      }
                      let tmp59 = updateSlot(deletions, tmp54, iter4.value, lanes);
                      if (null === tmp59) {
                        break;
                      } else {
                        let tmp62;
                        let tmp253 = deletions;
                        let tmp60 = deletions && tmp54 && null === tmp59.alternate;
                        if (tmp60) {
                          if (tmp253) {
                            let deletions9 = deletions.deletions;
                            if (null === deletions9) {
                              let items9 = [tmp54];
                              deletions.deletions = items9;
                              deletions.flags = deletions.flags | 16;
                            } else {
                              let arr11 = deletions9.push(tmp54);
                            }
                          }
                        }
                        tmp59.index = num15;
                        if (tmp253) {
                          let tmp63;
                          let alternate = tmp59.alternate;
                          if (null !== alternate) {
                            let index = alternate.index;
                            if (index < num16) {
                              tmp59.flags = tmp59.flags | 67108866;
                              index = num16;
                            }
                            tmp63 = index;
                          } else {
                            tmp59.flags = tmp59.flags | 67108866;
                            tmp63 = num16;
                          }
                          tmp62 = tmp63;
                        } else {
                          tmp59.flags = tmp59.flags | 1048576;
                          tmp62 = num16;
                        }
                        let tmp64 = tmp59;
                        if (null !== tmp69) {
                          tmp69.sibling = tmp59;
                          tmp64 = tmp70;
                        }
                        let sum2 = num15 + 1;
                        let iter2 = iter.next();
                        iter3 = iter2;
                        num13 = sum2;
                        sibling6 = sibling5;
                        tmp66 = tmp59;
                        tmp67 = tmp64;
                        num14 = tmp62;
                        if (null !== sibling5) {
                          iter4 = iter2;
                          num15 = sum2;
                          tmp68 = sibling5;
                          tmp69 = tmp59;
                          tmp70 = tmp64;
                          num16 = tmp62;
                          iter3 = iter2;
                          num13 = sum2;
                          sibling6 = sibling5;
                          tmp66 = tmp59;
                          tmp67 = tmp64;
                          num14 = tmp62;
                        }
                      }
                    }
                    iter3 = iter4;
                    num13 = num15;
                    tmp66 = tmp69;
                    tmp67 = tmp70;
                    num14 = num16;
                    sibling6 = tmp54;
                    if (null === tmp54) {
                      iter3 = iter4;
                      num13 = num15;
                      sibling6 = sibling5;
                      tmp66 = tmp69;
                      tmp67 = tmp70;
                      num14 = num16;
                    }
                  }
                }
                if (iter3.done) {
                  tmp98 = tmp67;
                  if (deletions) {
                    tmp98 = tmp67;
                    if (null !== sibling6) {
                      do {
                        if (deletions) {
                          let deletions10 = deletions.deletions;
                          if (null === deletions10) {
                            let items10 = [sibling6];
                            deletions.deletions = items10;
                            deletions.flags = deletions.flags | 16;
                          } else {
                            let arr12 = deletions10.push(sibling6);
                          }
                        }
                        sibling6 = sibling6.sibling;
                        tmp98 = tmp67;
                      } while (null !== sibling6);
                    }
                  }
                } else if (null === sibling6) {
                  let tmp100 = tmp67;
                  let tmp101 = tmp67;
                  if (!iter3.done) {
                    do {
                      let tmp103 = createChild(deletions, iter3.value, lanes);
                      let tmp108 = tmp66;
                      let tmp109 = tmp100;
                      let tmp110 = num14;
                      if (null !== tmp103) {
                        let tmp111;
                        tmp103.index = num13;
                        let tmp257 = deletions;
                        if (tmp257) {
                          let tmp112;
                          let alternate3 = tmp103.alternate;
                          if (null !== alternate3) {
                            let index3 = alternate3.index;
                            if (index3 < num14) {
                              tmp103.flags = tmp103.flags | 67108866;
                              index3 = num14;
                            }
                            tmp112 = index3;
                          } else {
                            tmp103.flags = tmp103.flags | 67108866;
                            tmp112 = num14;
                          }
                          tmp111 = tmp112;
                        } else {
                          tmp103.flags = tmp103.flags | 1048576;
                          tmp111 = num14;
                        }
                        let tmp113 = tmp103;
                        if (null !== tmp66) {
                          tmp66.sibling = tmp103;
                          tmp113 = tmp100;
                        }
                        tmp109 = tmp113;
                        tmp108 = tmp103;
                        tmp110 = tmp111;
                      }
                      num13 = num13 + 1;
                      iter7 = iter.next();
                      tmp66 = tmp108;
                      tmp100 = tmp109;
                      num14 = tmp110;
                      iter3 = iter7;
                      tmp101 = tmp109;
                    } while (!iter7.done);
                  }
                  tmp98 = tmp101;
                } else {
                  const _Map = Map;
                  const self = this;
                  const self2 = this;
                  map1 = new Map();
                  let sibling7 = sibling6;
                  const tmp255 = map1;
                  if (null !== sibling6) {
                    do {
                      if (null !== sibling7.key) {
                        let result2 = map1.set(sibling7.key, sibling7);
                      } else {
                        let result3 = map1.set(sibling7.index, sibling7);
                      }
                      sibling7 = sibling7.sibling;
                    } while (null !== sibling7);
                  }
                  let iter5 = iter3;
                  let sum3 = num13;
                  let tmp75 = tmp66;
                  let tmp76 = tmp67;
                  let tmp77 = num14;
                  let tmp78 = tmp67;
                  if (!iter3.done) {
                    do {
                      let tmp84 = updateFromMap(tmp255, deletions, sum3, iter5.value, lanes);
                      let tmp89 = tmp75;
                      let tmp90 = tmp76;
                      let tmp91 = tmp77;
                      if (null !== tmp84) {
                        let tmp94;
                        let tmp92 = deletions;
                        let tmp256 = deletions;
                        if (tmp256) {
                          tmp92 = null !== tmp84.alternate;
                        }
                        if (tmp92) {
                          let key = sum3;
                          let _delete = map1.delete;
                          if (null !== tmp84.key) {
                            key = tmp84.key;
                          }
                          let _deleteResult = _delete(key);
                        }
                        tmp84.index = sum3;
                        if (tmp256) {
                          let tmp95;
                          let alternate2 = tmp84.alternate;
                          if (null !== alternate2) {
                            let index2 = alternate2.index;
                            if (index2 < tmp77) {
                              tmp84.flags = tmp84.flags | 67108866;
                              index2 = tmp77;
                            }
                            tmp95 = index2;
                          } else {
                            tmp84.flags = tmp84.flags | 67108866;
                            tmp95 = tmp77;
                          }
                          tmp94 = tmp95;
                        } else {
                          tmp84.flags = tmp84.flags | 1048576;
                          tmp94 = tmp77;
                        }
                        let tmp96 = tmp84;
                        if (null !== tmp75) {
                          tmp75.sibling = tmp84;
                          tmp96 = tmp76;
                        }
                        tmp90 = tmp96;
                        tmp89 = tmp84;
                        tmp91 = tmp94;
                      }
                      sum3 = sum3 + 1;
                      iter6 = iter.next();
                      tmp75 = tmp89;
                      tmp76 = tmp90;
                      tmp77 = tmp91;
                      iter5 = iter6;
                      tmp78 = tmp90;
                    } while (!iter6.done);
                  }
                  tmp98 = tmp78;
                  if (deletions) {
                    const item1 = map1.forEach((item) => {
                      if (deletions) {
                        deletions = deletions.deletions;
                        if (null === deletions) {
                          items = [item];
                          deletions.deletions = items;
                          deletions.flags = deletions.flags | 16;
                        } else {
                          deletions.push(item);
                        }
                      }
                    });
                    tmp98 = tmp78;
                  }
                }
                return tmp98;
              }
            }
          } else if (typeof children1.then === "function") {
            closure_139 = closure_139 + 1;
            let tmp40 = items11;
            const tmp39 = closure_139;
            if (null === items11) {
              items11 = [];
              tmp40 = items11;
            }
            return reconcileChildFibersImpl(deletions, sibling, trackUsedThenable(tmp40, children1, tmp39), lanes);
          } else if (children1.$$typeof === closure_1_19) {
            if (null === _null) {
              _null = deletions;
              obj16 = null;
              const dependencies = deletions.dependencies;
              if (null !== dependencies) {
                dependencies.firstContext = null;
              }
            }
            const _currentValue2 = children1._currentValue2;
            obj16 = { context: children1, memoizedValue: _currentValue2, next: null };
            if (null === obj16) {
              if (null === deletions) {
                const _Error3 = Error;
                throw Error(
                  "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
                );
              } else {
                const obj17 = { lanes: 0, firstContext: obj16 };
                deletions.dependencies = obj17;
                deletions.flags = deletions.flags | 524288;
              }
            } else {
              tmp32.next = obj16;
            }
            return reconcileChildFibersImpl(deletions, sibling, _currentValue2, lanes);
          } else if (children1.$$typeof === closure_1_12) {
            const _Error2 = Error;
            throw Error(
              'A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the "react" package is used.\n- A library pre-bundled an old copy of "react" or "react/jsx-runtime".\n- A compiler tries to "inline" JSX instead of using the runtime.',
            );
          } else {
            const _Object2 = Object;
            let callResult = toString.call(children1);
            const _Error = Error;
            if ("[object Object]" === callResult) {
              const _Object = Object;
              const keys = Object.keys(children1);
              callResult = `${"object with keys {" + obj2.join(", ")}}`;
            }
            throw _Error(
              "Objects are not valid as a React child (found: " +
                callResult +
                "). If you meant to render a collection of children, use an array instead.",
            );
          }
        }
      }
    }
    if (typeof children1 !== "string") {
      if (typeof children1 !== "number") {
        if (typeof children1 !== "bigint") {
          tmp4 = null;
          if (deletions) {
            let sibling2 = sibling;
            tmp4 = null;
            if (null !== sibling) {
              do {
                if (deletions) {
                  let deletions11 = deletions.deletions;
                  if (null === deletions11) {
                    let items12 = [sibling2];
                    deletions.deletions = items12;
                    deletions.flags = deletions.flags | 16;
                  } else {
                    let arr13 = deletions11.push(sibling2);
                  }
                }
                sibling2 = sibling2.sibling;
                tmp4 = null;
              } while (null !== sibling2);
            }
          }
        }
        return tmp4;
      }
    }
    const text = `${arr}`;
    if (null !== sibling) {
      if (6 === sibling.tag) {
        let sibling4 = sibling.sibling;
        let tmp16 = deletions;
        let tmp17 = deletions;
        if (tmp17) {
          if (null !== sibling4) {
            do {
              let tmp18 = deletions;
              if (tmp18) {
                let deletions12 = deletions.deletions;
                if (null === deletions12) {
                  let items13 = [sibling4];
                  deletions.deletions = items13;
                  deletions.flags = deletions.flags | 16;
                } else {
                  let arr14 = deletions12.push(sibling4);
                }
              }
              sibling4 = sibling4.sibling;
              tmp16 = tmp18;
            } while (null !== sibling4);
          }
          tmp17 = tmp16;
        }
        const tmp22 = createWorkInProgress(sibling, text);
        tmp22.index = 0;
        tmp22.sibling = null;
        tmp22.return = deletions;
        tmp11 = tmp17;
        obj = tmp22;
      }
      if (tmp11) {
        tmp11 = null === obj.alternate;
      }
      tmp4 = obj;
      if (tmp11) {
        obj.flags = obj.flags | 67108866;
        tmp4 = obj;
      }
    }
    let tmp10 = deletions;
    tmp11 = deletions;
    if (tmp11) {
      let sibling3 = sibling;
      if (null !== sibling) {
        do {
          let tmp12 = deletions;
          if (tmp12) {
            let deletions13 = deletions.deletions;
            if (null === deletions13) {
              let items14 = [sibling3];
              deletions.deletions = items14;
              deletions.flags = deletions.flags | 16;
            } else {
              let arr15 = deletions13.push(sibling3);
            }
          }
          sibling3 = sibling3.sibling;
          tmp10 = tmp12;
        } while (null !== sibling3);
      }
      tmp11 = tmp10;
    }
    const mode = deletions.mode;
    Object.create(FiberNode.prototype);
    obj = {
      tag: 6,
      key: null,
      elementType: null,
      type: null,
      stateNode: null,
      return: null,
      child: null,
      sibling: null,
      index: 0,
      ref: null,
      refCleanup: null,
      pendingProps: text,
      memoizedProps: null,
      updateQueue: null,
      memoizedState: null,
      dependencies: null,
      mode,
      flags: 0,
      subtreeFlags: 0,
      deletions: null,
      lanes: 0,
      childLanes: 0,
      alternate: null,
      lanes,
      return: deletions,
    };
  }
  return (mode, sibling, type, lanes) => {
    try {
      c139 = 0;
      c138 = null;
      return reconcileChildFibersImpl(mode, sibling, type, lanes);
    } catch (promise) {
      if (promise !== closure_130) {
        if (promise !== closure_132) {
          const tmp12 = createFiberImplClass(29, promise, null, mode.mode);
          tmp12.lanes = lanes;
          tmp12.return = mode;
          return tmp12;
        }
      }
      throw promise;
    }
  };
}
function throwInvalidHookError() {
  throw Error(
    "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.",
  );
}
function use($$typeof) {
  if (null !== $$typeof) {
    if (typeof $$typeof === "object") {
      if (typeof $$typeof.then === "function") {
        closure_171 = closure_171 + 1;
        let tmp5 = items1;
        const tmp4 = closure_171;
        if (null === items1) {
          items = [];
          items1 = items;
          tmp5 = items;
        }
        const tmp7 = trackUsedThenable(tmp5, $$typeof, tmp4);
        if (null === (null === next ? _null2.memoizedState : next.next)) {
          const alternate = _null2.alternate;
          if (null !== alternate) {
            let tmp10;
            if (null !== alternate.memoizedState) {
              tmp10 = obj10;
            }
            tmp9.H = tmp10;
          }
          tmp10 = closure_210;
        }
        return tmp7;
      } else if ($$typeof.$$typeof === forResult) {
        const _currentValue2 = $$typeof._currentValue2;
        next = { context: $$typeof, memoizedValue: _currentValue2, next: null };
        if (null === obj2) {
          if (null === _null) {
            const _Error = Error;
            throw Error(
              "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
            );
          } else {
            obj2 = { lanes: 0, firstContext: next };
            _null.dependencies = obj2;
            _null.flags = _null.flags | 524288;
          }
        } else {
          tmp2.next = next;
          obj2 = next;
        }
        return _currentValue2;
      }
    }
  }
  throw Error("An unsupported type was passed to use(): " + String($$typeof));
}
function useMemoCache(arg0) {
  let data;
  let data1;
  let index;
  let updateQueue = _null.updateQueue;
  let memoCache1 = null;
  if (null !== updateQueue) {
    memoCache1 = updateQueue.memoCache;
  }
  let tmp2 = memoCache1;
  if (null == memoCache1) {
    const alternate = _null.alternate;
    tmp2 = memoCache1;
    if (null !== alternate) {
      const updateQueue2 = alternate.updateQueue;
      let tmp4 = memoCache1;
      if (null !== updateQueue2) {
        const memoCache = updateQueue2.memoCache;
        if (null != memoCache) {
          obj = { data: data1.map((arr) => arr.slice()), index: 0 };
          data1 = memoCache.data;
          memoCache1 = obj;
        }
        tmp4 = memoCache1;
      }
      tmp2 = tmp4;
    }
  }
  if (null == tmp2) {
    tmp2 = { data: [], index: 0 };
    obj2 = { data: [], index: 0 };
  }
  if (null === updateQueue) {
    const obj3 = { lastEffect: null, events: null, stores: null, memoCache: null };
    _null.updateQueue = obj3;
    updateQueue = obj3;
  }
  updateQueue.memoCache = tmp2;
  let tmp6 = tmp2.data[tmp2.index];
  if (undefined === tmp6) {
    const _Array = Array;
    ({ data, index } = tmp2);
    const ArrayResult = Array(arg0);
    data[index] = ArrayResult;
    let num = 0;
    tmp6 = ArrayResult;
    if (0 < arg0) {
      do {
        ArrayResult[num] = closure_26;
        num = num + 1;
        tmp6 = ArrayResult;
      } while (num < arg0);
    }
  }
  tmp2.index = tmp2.index + 1;
  return tmp6;
}
function updateSyncExternalStore(serializer, getSnapshot) {
  const tmp2 = updateWorkInProgressHook();
  const tmp3 = getSnapshot();
  const tmp5 = c166 || tmp2;
  const tmp7 = !is(tmp5.memoizedState, tmp3);
  if (tmp7) {
    tmp2.memoizedState = tmp3;
    c222 = true;
  }
  const queue = tmp2.queue;
  items = [serializer];
  updateEffectImpl(2048, 8, subscribeToStore.bind(null, _null, queue, serializer), items);
  if (queue.getSnapshot === getSnapshot) {
    return tmp3;
  }
  _null.flags = _null.flags | 2048;
  const lastEffect = {
    tag: 9,
    create: updateStoreInstance.bind(null, _null, queue, tmp3, getSnapshot),
    deps: null,
    inst: { destroy: "r" },
    next: null,
  };
  let updateQueue = _null.updateQueue;
  if (null === updateQueue) {
    obj2 = { lastEffect: null, events: null, stores: null, memoCache: null };
    _null.updateQueue = obj2;
    updateQueue = obj2;
  }
  if (null === updateQueue.lastEffect) {
    lastEffect.next = lastEffect;
    updateQueue.lastEffect = lastEffect;
  } else {
    updateQueue.lastEffect.next = lastEffect;
    lastEffect.next = updateQueue.lastEffect.next;
    updateQueue.lastEffect = lastEffect;
  }
  if (null === c278) {
    const _Error = Error;
    throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
  } else if (!(127 & c164)) {
    _null.flags = _null.flags | 16384;
    const obj3 = { getSnapshot, value: tmp3 };
    const updateQueue2 = _null.updateQueue;
    if (null === updateQueue2) {
      obj4 = { lastEffect: null, events: null, stores: items1, memoCache: null };
      _null.updateQueue = obj4;
      items1 = [obj3];
    } else {
      const stores = updateQueue2.stores;
      if (null === stores) {
        const items2 = [obj3];
        updateQueue2.stores = items2;
      } else {
        stores.push(obj3);
      }
    }
  }
}
function mountActionState(action, baseState) {
  let bindResult;
  let bindResult2;
  let obj3;
  next = { memoizedState: action, baseState, baseQueue: null, queue: obj3, next: null };
  if (null === next) {
    c165.memoizedState = next;
  } else {
    tmp.next = next;
  }
  obj2 = {
    pending: null,
    lanes: 0,
    dispatch: bindResult,
    lastRenderedReducer: actionStateReducer,
    lastRenderedState: baseState,
  };
  bindResult = dispatchSetState.bind(null, c165, obj2);
  obj3 = { state: baseState, dispatch: bindResult2, action, pending: null };
  obj4 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  const bindResult1 = dispatchOptimisticSetState.bind(null, c165, false, mountStateImpl(false).queue);
  if (null === next) {
    next = obj4;
    c165.memoizedState = obj4;
  } else {
    tmp5.next = obj4;
    next = obj4;
  }
  bindResult2 = dispatchActionState.bind(null, c165, obj3, bindResult1, bindResult);
  items = [baseState, bindResult2, false];
  return items;
}
function updateActionState(memoizedState) {
  return updateActionStateImpl(updateWorkInProgressHook(), c166, memoizedState);
}
function rerenderActionState(memoizedState) {
  const tmp2 = updateWorkInProgressHook();
  if (null !== c166) {
    return updateActionStateImpl(tmp2, tmp3, memoizedState);
  } else {
    updateWorkInProgressHook();
    memoizedState = tmp2.memoizedState;
    const tmpResult2 = updateWorkInProgressHook();
    tmpResult2.memoizedState = memoizedState;
    items = [memoizedState, tmpResult2.queue.dispatch, false];
    return items;
  }
}
function updateRef() {
  return updateWorkInProgressHook().memoizedState;
}
function updateEffect(create, combined) {
  updateEffectImpl(2048, 8, create, combined);
}
function updateEvent(nextImpl) {
  memoizedState = updateWorkInProgressHook().memoizedState;
  obj = { ref: memoizedState, nextImpl };
  _null.flags = _null.flags | 4;
  const updateQueue = _null.updateQueue;
  if (null === updateQueue) {
    obj2 = { lastEffect: null, events: items, stores: null, memoCache: null };
    _null.updateQueue = obj2;
    items = [obj];
  } else {
    const events = updateQueue.events;
    if (null === events) {
      items1 = [obj];
      updateQueue.events = items1;
    } else {
      events.push(obj);
    }
  }
  return function () {
    if (2 & closure_277) {
      const _Error = Error;
      throw Error("A function wrapped in useEffectEvent can't be called during rendering.");
    } else {
      const impl = memoizedState.impl;
      return impl(...arguments);
    }
  };
}
function updateInsertionEffect(create, combined) {
  updateEffectImpl(4, 2, create, combined);
}
function updateLayoutEffect(create, combined) {
  updateEffectImpl(4, 4, create, combined);
}
function updateImperativeHandle(cache, c165, arr) {
  let combined = null;
  if (null != arr) {
    items = [cache];
    combined = arr.concat(items);
  }
  updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, c165, cache), combined);
}
function mountDebugValue() {}
function updateCallback(arg0, arg1) {
  const tmp = updateWorkInProgressHook();
  let tmp2 = null;
  if (undefined !== arg1) {
    tmp2 = arg1;
  }
  memoizedState = tmp.memoizedState;
  if (null !== tmp2) {
    let first;
    let flag = false;
    if (null !== memoizedState[1]) {
      flag = true;
      if (0 < memoizedState[1].length) {
        let num2 = 0;
        flag = true;
        if (0 < tmp2.length) {
          flag = false;
          while (is(tmp2[num2], memoizedState[1][num2])) {
            sum = num2 + 1;
            flag = true;
            if (sum >= arr.length) {
              break;
            } else {
              num2 = sum;
              flag = true;
              if (sum >= tmp2.length) {
                break;
              }
            }
          }
        }
      }
    }
    if (flag) {
      first = memoizedState[0];
    }
    return first;
  }
  first = arg0;
  items = [arg0, tmp2];
  tmp.memoizedState = items;
}
function updateMemo(fn, arg1) {
  const tmp = updateWorkInProgressHook();
  let tmp2 = null;
  if (undefined !== arg1) {
    tmp2 = arg1;
  }
  memoizedState = tmp.memoizedState;
  if (null !== tmp2) {
    if (areHookInputsEqual(tmp2, memoizedState[1])) {
      return memoizedState[0];
    }
  }
  const tmp4 = fn();
  if (c170) {
    setIsStrictModeForDevtools(true);
    try {
      fn();
      setIsStrictModeForDevtools(false);
    } catch (tmp10) {
      setIsStrictModeForDevtools(false);
      throw tmp10;
    }
  }
  items = [tmp4, tmp2];
  tmp.memoizedState = items;
  return tmp4;
}
function useHostTransitionStatus() {
  const _currentValue2 = context2._currentValue2;
  next = { context: context2, memoizedValue: _currentValue2, next: null };
  if (null === obj2) {
    if (null === _null) {
      const _Error = Error;
      throw Error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
      );
    } else {
      obj2 = { lanes: 0, firstContext: next };
      _null.dependencies = obj2;
      _null.flags = _null.flags | 524288;
    }
  } else {
    tmp2.next = next;
    obj2 = next;
  }
  return _currentValue2;
}
function updateId() {
  return updateWorkInProgressHook().memoizedState;
}
function updateRefresh() {
  return updateWorkInProgressHook().memoizedState;
}
let closure_106 =
  typeof AbortController !== "undefined"
    ? AbortController
    : () => {
        let closure_0 = [];
        const obj = {
          aborted: false,
          addEventListener(arg0, arg1) {
            closure_0.push(arg1);
          },
        };
      };
let closure_107 = {
  $$typeof: forResult,
  Consumer: null,
  Provider: null,
  _currentValue: null,
  _currentValue2: null,
  _threadCount: 0,
};
let iter = null;
let c112 = false;
let c113 = false;
let c114 = false;
let c115 = 0;
items = null;
let diff = 0;
let c124 = 0;
obj2 = null;
let S = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S;
__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S = (arg0, obj) => {
  obj = _mod287;
  obj.unstable_now();
  let tmp2 = typeof obj === "object";
  if (typeof obj === "object") {
    tmp2 = null !== obj;
  }
  if (tmp2) {
    tmp2 = typeof obj.then === "function";
  }
  if (tmp2) {
    if (null === items) {
      items = [];
      diff = 0;
      let tmp5 = c115;
      if (0 === c115) {
        let tmp6 = c124;
        if (0 === c124) {
          c78 = tmp8;
          tmp6 = c78;
          if (!(261888 & (c78 << 1))) {
            c78 = 256;
            tmp6 = tmp7;
          }
        }
        c115 = tmp6;
        tmp5 = tmp6;
      }
      c124 = tmp5;
    }
    diff = diff + 1;
    obj.then(pingEngtangledActionScope, pingEngtangledActionScope);
  }
  if (null !== closure_127) {
    tmp12(arg0, obj);
  }
};
function rerenderReducer(lastRenderedReducer) {
  let tmp2;
  const tmp = updateWorkInProgressHook();
  const queue = tmp.queue;
  if (null === queue) {
    const _Error = Error;
    throw Error(
      "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)",
    );
  } else {
    queue.lastRenderedReducer = lastRenderedReducer;
    memoizedState = tmp.memoizedState;
    let tmp4 = memoizedState;
    const dispatch = queue.dispatch;
    if (null !== queue.pending) {
      queue.pending = null;
      next = iter2.next;
      iter = next;
      do {
        tmp2 = lastRenderedReducer(memoizedState, iter.action);
        iter = iter.next;
        memoizedState = tmp2;
      } while (iter !== next);
      if (!is(tmp2, tmp.memoizedState)) {
        c222 = true;
      }
      tmp.memoizedState = tmp2;
      if (null === tmp.baseQueue) {
        tmp.baseState = tmp2;
      }
      queue.lastRenderedState = tmp2;
      tmp4 = tmp2;
    }
    items = [tmp4, dispatch];
    return items;
  }
}
function mountEffect(create, arg1) {
  next = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  if (null === next) {
    _null.memoizedState = next;
  } else {
    tmp.next = next;
  }
  _null.flags = _null.flags | 8390656;
  let tmp4 = null;
  const tmp3 = next;
  if (undefined !== arg1) {
    tmp4 = arg1;
  }
  obj2 = { tag: 9, create, deps: tmp4, inst: { destroy: "r" }, next: null };
  let updateQueue = _null.updateQueue;
  if (null === updateQueue) {
    const obj3 = { lastEffect: null, events: null, stores: null, memoCache: null };
    _null.updateQueue = obj3;
    updateQueue = obj3;
  }
  if (null === updateQueue.lastEffect) {
    obj2.next = obj2;
    updateQueue.lastEffect = obj2;
  } else {
    updateQueue.lastEffect.next = obj2;
    obj2.next = updateQueue.lastEffect.next;
    updateQueue.lastEffect = obj2;
  }
  tmp3.memoizedState = obj2;
}
let closure_128 = createCursor(null);
let closure_130 = Error(
  "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`.",
);
let closure_131 = Error(
  "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React.",
);
let closure_132 = Error(
  "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary.",
);
let closure_133 = {
  then() {},
};
let c137 = null;
let c138 = null;
let c139 = 0;
let closure_140 = createChildReconciler(true);
let closure_141 = createChildReconciler(false);
let closure_142 = [];
let c143 = 0;
let c144 = 0;
let c150 = false;
let c153 = false;
let closure_157 = createCursor(null);
let closure_158 = createCursor(0);
let closure_159 = createCursor(null);
let c160 = null;
let closure_162 = createCursor(0);
let c164 = 0;
let c165 = null;
let c166 = null;
obj = null;
let c168 = false;
let c169 = false;
let c170 = false;
let closure_171 = 0;
items1 = null;
let closure_173 = 0;
let obj9 = {
  readContext,
  use,
  useCallback: throwInvalidHookError,
  useContext: throwInvalidHookError,
  useEffect: throwInvalidHookError,
  useImperativeHandle: throwInvalidHookError,
  useLayoutEffect: throwInvalidHookError,
  useInsertionEffect: throwInvalidHookError,
  useMemo: throwInvalidHookError,
  useReducer: throwInvalidHookError,
  useRef: throwInvalidHookError,
  useState: throwInvalidHookError,
  useDebugValue: throwInvalidHookError,
  useDeferredValue: throwInvalidHookError,
  useTransition: throwInvalidHookError,
  useSyncExternalStore: throwInvalidHookError,
  useId: throwInvalidHookError,
  useHostTransitionStatus: throwInvalidHookError,
  useFormState: throwInvalidHookError,
  useActionState: throwInvalidHookError,
  useOptimistic: throwInvalidHookError,
  useMemoCache: throwInvalidHookError,
  useCacheRefresh: throwInvalidHookError,
  useEffectEvent: throwInvalidHookError,
};
let closure_210 = {
  readContext,
  use,
  useCallback(arg0, arg1) {
    next = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    if (null === next) {
      c165.memoizedState = next;
    } else {
      tmp.next = next;
    }
    items = [arg0];
    let tmp4 = null;
    const tmp3 = next;
    if (undefined !== arg1) {
      tmp4 = arg1;
    }
    items[1] = tmp4;
    tmp3.memoizedState = items;
    return arg0;
  },
  useContext: readContext,
  useEffect: mountEffect,
  useImperativeHandle(cache, c165, arr) {
    let combined = null;
    if (null != arr) {
      items = [cache];
      combined = arr.concat(items);
    }
    next = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    const bindResult = imperativeHandleEffect.bind(null, c165, cache);
    if (null === next) {
      _null.memoizedState = next;
    } else {
      tmp3.next = next;
    }
    _null.flags = _null.flags | 4194308;
    let tmp6 = null;
    const tmp5 = next;
    if (undefined !== combined) {
      tmp6 = combined;
    }
    obj2 = { tag: 5, create: bindResult, deps: tmp6, inst: { destroy: "r" }, next: null };
    let updateQueue = _null.updateQueue;
    if (null === updateQueue) {
      const obj3 = { lastEffect: null, events: null, stores: null, memoCache: null };
      _null.updateQueue = obj3;
      updateQueue = obj3;
    }
    if (null === updateQueue.lastEffect) {
      obj2.next = obj2;
      updateQueue.lastEffect = obj2;
    } else {
      updateQueue.lastEffect.next = obj2;
      obj2.next = updateQueue.lastEffect.next;
      updateQueue.lastEffect = obj2;
    }
    tmp5.memoizedState = obj2;
  },
  useLayoutEffect(create, arg1) {
    next = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    if (null === next) {
      _null.memoizedState = next;
    } else {
      tmp.next = next;
    }
    _null.flags = _null.flags | 4194308;
    let tmp4 = null;
    const tmp3 = next;
    if (undefined !== arg1) {
      tmp4 = arg1;
    }
    obj2 = { tag: 5, create, deps: tmp4, inst: { destroy: "r" }, next: null };
    let updateQueue = _null.updateQueue;
    if (null === updateQueue) {
      const obj3 = { lastEffect: null, events: null, stores: null, memoCache: null };
      _null.updateQueue = obj3;
      updateQueue = obj3;
    }
    if (null === updateQueue.lastEffect) {
      obj2.next = obj2;
      updateQueue.lastEffect = obj2;
    } else {
      updateQueue.lastEffect.next = obj2;
      obj2.next = updateQueue.lastEffect.next;
      updateQueue.lastEffect = obj2;
    }
    tmp3.memoizedState = obj2;
  },
  useInsertionEffect(create, arg1) {
    next = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    if (null === next) {
      _null.memoizedState = next;
    } else {
      tmp.next = next;
    }
    _null.flags = _null.flags | 4;
    let tmp4 = null;
    const tmp3 = next;
    if (undefined !== arg1) {
      tmp4 = arg1;
    }
    obj2 = { tag: 3, create, deps: tmp4, inst: { destroy: "r" }, next: null };
    let updateQueue = _null.updateQueue;
    if (null === updateQueue) {
      const obj3 = { lastEffect: null, events: null, stores: null, memoCache: null };
      _null.updateQueue = obj3;
      updateQueue = obj3;
    }
    if (null === updateQueue.lastEffect) {
      obj2.next = obj2;
      updateQueue.lastEffect = obj2;
    } else {
      updateQueue.lastEffect.next = obj2;
      obj2.next = updateQueue.lastEffect.next;
      updateQueue.lastEffect = obj2;
    }
    tmp3.memoizedState = obj2;
  },
  useMemo(fn, arg1) {
    let tmp2 = null;
    const tmp = mountWorkInProgressHook();
    if (undefined !== arg1) {
      tmp2 = arg1;
    }
    const tmp3 = fn();
    if (c170) {
      setIsStrictModeForDevtools(true);
      try {
        fn();
        setIsStrictModeForDevtools(false);
      } catch (tmp9) {
        setIsStrictModeForDevtools(false);
        throw tmp9;
      }
    }
    items = [tmp3, tmp2];
    tmp.memoizedState = items;
    return tmp3;
  },
  useReducer(lastRenderedReducer, arg1, fn) {
    let bindResult;
    const tmp = mountWorkInProgressHook();
    let tmp2 = arg1;
    if (undefined !== fn) {
      const tmp3 = fn(arg1);
      tmp2 = tmp3;
      if (c170) {
        setIsStrictModeForDevtools(true);
        try {
          fn(arg1);
          setIsStrictModeForDevtools(false);
          tmp2 = tmp3;
        } catch (tmp10) {
          setIsStrictModeForDevtools(false);
          throw tmp10;
        }
      }
    }
    tmp.baseState = tmp2;
    tmp.memoizedState = tmp2;
    const queue = { pending: null, lanes: 0, dispatch: bindResult, lastRenderedReducer, lastRenderedState: tmp2 };
    tmp.queue = queue;
    bindResult = dispatchReducerAction.bind(null, c165, queue);
    items = [tmp.memoizedState, bindResult];
    return items;
  },
  useRef(current) {
    memoizedState = { current, memoizedState };
    obj2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    if (null === memoizedState) {
      memoizedState = obj2;
      c165.memoizedState = obj2;
    } else {
      tmp.next = obj2;
      memoizedState = obj2;
    }
    return memoizedState;
  },
  useState(fn) {
    const tmp = mountStateImpl(fn);
    const queue = tmp.queue;
    const bindResult = dispatchSetState.bind(null, c165, queue);
    queue.dispatch = bindResult;
    items = [tmp.memoizedState, bindResult];
    return items;
  },
  useDebugValue: mountDebugValue,
  useDeferredValue(memoizedState, arg1) {
    next = { memoizedState, baseState: null, baseQueue: null, queue: null, next: null };
    if (null === next) {
      _null.memoizedState = next;
    } else {
      tmp.next = next;
    }
    let tmp3 = arg1;
    if (undefined !== arg1) {
      if (1073741824 & c164) {
        return tmp3;
      }
      next.memoizedState = tmp3;
      if (0 === closure_291) {
        if (536870912 & c280) {
          closure_291 = 536870912;
        } else {
          c79 = tmp9;
          const tmp8 = c79;
          if (!(3932160 & (c79 << 1))) {
            c79 = 262144;
          }
          closure_291 = tmp8;
        }
      }
      current = closure_159.current;
      if (null !== current) {
        current.flags = current.flags | 32;
      }
      _null.lanes = _null.lanes | closure_291;
      closure_288 = closure_288 | closure_291;
    }
    tmp3 = memoizedState;
  },
  useTransition() {
    const bindResult = startTransition.bind(null, c165, mountStateImpl(false).queue, true, false);
    next = { memoizedState: bindResult, baseState: null, baseQueue: null, queue: null, next: null };
    if (null === next) {
      c165.memoizedState = next;
    } else {
      tmp2.next = next;
    }
    items = [false, bindResult];
    return items;
  },
  useSyncExternalStore(serializer, getSnapshot) {
    next = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    if (null === next) {
      _null.memoizedState = next;
    } else {
      tmp2.next = next;
    }
    const tmp4 = getSnapshot();
    if (null === c278) {
      const _Error = Error;
      throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
    } else {
      if (!(127 & c280)) {
        _null.flags = _null.flags | 16384;
        obj2 = { getSnapshot, value: tmp4 };
        const updateQueue = _null.updateQueue;
        if (null === updateQueue) {
          const obj3 = { lastEffect: null, events: null, stores: items, memoCache: null };
          _null.updateQueue = obj3;
          items = [obj2];
        } else {
          const stores = updateQueue.stores;
          if (null === stores) {
            items1 = [obj2];
            updateQueue.stores = items1;
          } else {
            stores.push(obj2);
          }
        }
      }
      next.memoizedState = tmp4;
      obj4 = { value: tmp4, getSnapshot };
      next.queue = obj4;
      const items2 = [serializer];
      obj5 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      const bindResult = subscribeToStore.bind(null, _null, obj4, serializer);
      if (null === next) {
        next = obj5;
        _null.memoizedState = obj5;
      } else {
        tmp16.next = obj5;
        next = obj5;
      }
      _null.flags = _null.flags | 8390656;
      obj6 = { tag: 9, create: bindResult, deps: items2, inst: { destroy: "r" }, next: null };
      let updateQueue2 = _null.updateQueue;
      const tmp18 = next;
      if (null === updateQueue2) {
        obj7 = { lastEffect: null, events: null, stores: null, memoCache: null };
        _null.updateQueue = obj7;
        updateQueue2 = obj7;
      }
      if (null === updateQueue2.lastEffect) {
        obj6.next = obj6;
        updateQueue2.lastEffect = obj6;
      } else {
        updateQueue2.lastEffect.next = obj6;
        obj6.next = updateQueue2.lastEffect.next;
        updateQueue2.lastEffect = obj6;
      }
      tmp18.memoizedState = obj6;
      _null.flags = _null.flags | 2048;
      const obj8 = {
        tag: 9,
        create: updateStoreInstance.bind(null, _null, obj4, tmp4, getSnapshot),
        deps: null,
        inst: { destroy: "r" },
        next: null,
      };
      let updateQueue3 = _null.updateQueue;
      if (null === updateQueue3) {
        obj9 = { lastEffect: null, events: null, stores: null, memoCache: null };
        _null.updateQueue = obj9;
        updateQueue3 = obj9;
      }
      if (null === updateQueue3.lastEffect) {
        obj8.next = obj8;
        updateQueue3.lastEffect = obj8;
      } else {
        updateQueue3.lastEffect.next = obj8;
        obj8.next = updateQueue3.lastEffect.next;
        updateQueue3.lastEffect = obj8;
      }
      return tmp4;
    }
  },
  useId() {
    let text;
    next = { memoizedState: text, baseState: null, baseQueue: null, queue: null, next: null };
    if (null === next) {
      c165.memoizedState = next;
    } else {
      tmp.next = next;
    }
    closure_173 = str + 1;
    text = `${`_${c278.identifierPrefix}` + "r_" + str.toString(32)}_`;
    return `${`_${c278.identifierPrefix}` + "r_" + (+closure_173).toString(32)}_`;
  },
  useHostTransitionStatus,
  useFormState: mountActionState,
  useActionState: mountActionState,
  useOptimistic(baseState) {
    let bindResult;
    next = { memoizedState: baseState, baseState, baseQueue: null, queue: obj2, next: null };
    if (null === next) {
      c165.memoizedState = next;
    } else {
      tmp.next = next;
    }
    obj2 = { pending: null, lanes: 0, dispatch: bindResult, lastRenderedReducer: null, lastRenderedState: null };
    bindResult = dispatchOptimisticSetState.bind(null, c165, true, obj2);
    items = [baseState, bindResult];
    return items;
  },
  useMemoCache,
  useCacheRefresh() {
    let bindResult;
    next = { memoizedState: bindResult, baseState: null, baseQueue: null, queue: null, next: null };
    if (null === next) {
      c165.memoizedState = next;
    } else {
      tmp.next = next;
    }
    bindResult = refreshCache.bind(null, c165);
    return bindResult;
  },
  useEffectEvent(impl) {
    next = { memoizedState: obj2, baseState: null, baseQueue: null, queue: null, next: null };
    if (null === next) {
      c165.memoizedState = next;
    } else {
      tmp.next = next;
    }
    obj2 = { impl };
    return function () {
      if (2 & closure_277) {
        const _Error = Error;
        throw Error("A function wrapped in useEffectEvent can't be called during rendering.");
      } else {
        const impl = obj2.impl;
        return impl(...arguments);
      }
    };
  },
};
let obj10 = {
  readContext,
  use,
  useCallback: updateCallback,
  useContext: readContext,
  useEffect: updateEffect,
  useImperativeHandle: updateImperativeHandle,
  useInsertionEffect: updateInsertionEffect,
  useLayoutEffect: updateLayoutEffect,
  useMemo: updateMemo,
  useReducer: updateReducer,
  useRef: updateRef,
  useState() {
    return updateReducerImpl(updateWorkInProgressHook(), c166, basicStateReducer);
  },
  useDebugValue: mountDebugValue,
  useDeferredValue(memoizedState, memoizedState3) {
    return updateDeferredValueImpl(updateWorkInProgressHook(), _null2.memoizedState, memoizedState, memoizedState3);
  },
  useTransition() {
    const first = updateReducerImpl(updateWorkInProgressHook(), c166, basicStateReducer)[0];
    let tmp2 = first;
    memoizedState = updateWorkInProgressHook().memoizedState;
    if (typeof first !== "boolean") {
      closure_171 = closure_171 + 1;
      let tmp3 = items1;
      const tmp9 = closure_171;
      if (null === items1) {
        items = [];
        items1 = items;
        tmp3 = items;
      }
      const tmp5 = trackUsedThenable(tmp3, first, tmp9);
      tmp2 = tmp5;
      if (null === (null === obj ? _null2.memoizedState : obj.next)) {
        const alternate = _null2.alternate;
        if (null !== alternate) {
          let tmp8;
          if (null !== alternate.memoizedState) {
            tmp8 = obj10;
          }
          tmp7.H = tmp8;
          tmp2 = tmp5;
        }
        tmp8 = closure_210;
      }
    }
    items1 = [tmp2, memoizedState];
    return items1;
  },
  useSyncExternalStore: updateSyncExternalStore,
  useId: updateId,
  useHostTransitionStatus,
  useFormState: updateActionState,
  useActionState: updateActionState,
  useOptimistic(baseState, fn) {
    let tmp = fn;
    const tmp2 = updateWorkInProgressHook();
    tmp2.baseState = baseState;
    if (typeof fn !== "function") {
      tmp = basicStateReducer;
    }
    return updateReducerImpl(tmp2, c166, tmp);
  },
  useMemoCache,
  useCacheRefresh: updateRefresh,
  useEffectEvent: updateEvent,
};
let obj11 = {
  readContext,
  use,
  useCallback: updateCallback,
  useContext: readContext,
  useEffect: updateEffect,
  useImperativeHandle: updateImperativeHandle,
  useInsertionEffect: updateInsertionEffect,
  useLayoutEffect: updateLayoutEffect,
  useMemo: updateMemo,
  useReducer: rerenderReducer,
  useRef: updateRef,
  useState() {
    let actionResult;
    const tmp2 = updateWorkInProgressHook();
    const queue = tmp2.queue;
    if (null === queue) {
      const _Error = Error;
      throw Error(
        "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)",
      );
    } else {
      queue.lastRenderedReducer = basicStateReducer;
      memoizedState = tmp2.memoizedState;
      let tmp7 = memoizedState;
      const dispatch = queue.dispatch;
      if (null !== queue.pending) {
        queue.pending = null;
        next = iter2.next;
        iter = next;
        do {
          let action = iter.action;
          actionResult = action;
          if (typeof action === "function") {
            actionResult = action(memoizedState);
          }
          iter = iter.next;
          memoizedState = actionResult;
        } while (iter !== next);
        if (!is(actionResult, tmp2.memoizedState)) {
          c222 = true;
        }
        tmp2.memoizedState = actionResult;
        if (null === tmp2.baseQueue) {
          tmp2.baseState = actionResult;
        }
        queue.lastRenderedState = actionResult;
        tmp7 = actionResult;
      }
      items = [tmp7, dispatch];
      return items;
    }
  },
  useDebugValue: mountDebugValue,
  useDeferredValue(memoizedState, memoizedState3) {
    let tmp8;
    let tmp = memoizedState3;
    const tmp2 = updateWorkInProgressHook();
    if (null === c166) {
      if (undefined !== tmp) {
        if (1073741824 & c164) {
          tmp8 = tmp;
        }
        tmp2.memoizedState = tmp;
        if (0 === closure_291) {
          if (536870912 & c280) {
            closure_291 = 536870912;
          } else {
            c79 = tmp13;
            const tmp12 = c79;
            if (!(3932160 & (c79 << 1))) {
              c79 = 262144;
            }
            closure_291 = tmp12;
          }
        }
        current = closure_159.current;
        if (null !== current) {
          current.flags = current.flags | 32;
        }
        _null.lanes = _null.lanes | closure_291;
        closure_288 = closure_288 | closure_291;
      }
      tmp2.memoizedState = memoizedState;
      tmp = memoizedState;
    } else {
      tmp8 = updateDeferredValueImpl(tmp2, tmp3.memoizedState, memoizedState, tmp);
    }
    return tmp8;
  },
  useTransition() {
    let actionResult;
    const tmp2 = updateWorkInProgressHook();
    const queue = tmp2.queue;
    if (null === queue) {
      const _Error = Error;
      throw Error(
        "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)",
      );
    } else {
      queue.lastRenderedReducer = basicStateReducer;
      memoizedState = tmp2.memoizedState;
      let tmp7 = memoizedState;
      const dispatch = queue.dispatch;
      if (null !== queue.pending) {
        queue.pending = null;
        next = iter2.next;
        iter = next;
        do {
          let action = iter.action;
          actionResult = action;
          if (typeof action === "function") {
            actionResult = action(memoizedState);
          }
          iter = iter.next;
          memoizedState = actionResult;
        } while (iter !== next);
        if (!is(actionResult, tmp2.memoizedState)) {
          c222 = true;
        }
        tmp2.memoizedState = actionResult;
        if (null === tmp2.baseQueue) {
          tmp2.baseState = actionResult;
        }
        queue.lastRenderedState = actionResult;
        tmp7 = actionResult;
      }
      items = [tmp7, dispatch];
      const first = items[0];
      let tmp10 = first;
      const memoizedState2 = updateWorkInProgressHook().memoizedState;
      if (typeof first !== "boolean") {
        closure_171 = closure_171 + 1;
        let tmp11 = items1;
        const tmp18 = closure_171;
        if (null === items1) {
          items1 = [];
          tmp11 = items1;
        }
        const tmp13 = trackUsedThenable(tmp11, first, tmp18);
        tmp10 = tmp13;
        if (null === (null === obj ? _null2.memoizedState : obj.next)) {
          const alternate = _null2.alternate;
          if (null !== alternate) {
            let tmp16;
            if (null !== alternate.memoizedState) {
              tmp16 = obj10;
            }
            tmp15.H = tmp16;
            tmp10 = tmp13;
          }
          tmp16 = closure_210;
        }
      }
      const items2 = [tmp10, memoizedState2];
      return items2;
    }
  },
  useSyncExternalStore: updateSyncExternalStore,
  useId: updateId,
  useHostTransitionStatus,
  useFormState: rerenderActionState,
  useActionState: rerenderActionState,
  useOptimistic(baseState, fn) {
    const tmp = updateWorkInProgressHook();
    if (null !== c166) {
      let tmp2 = fn;
      tmp.baseState = baseState;
      if (typeof fn !== "function") {
        tmp2 = basicStateReducer;
      }
      items = updateReducerImpl(tmp, c166, tmp2);
    } else {
      tmp.baseState = baseState;
      items = [baseState, tmp.queue.dispatch];
    }
    return items;
  },
  useMemoCache,
  useCacheRefresh: updateRefresh,
  useEffectEvent: updateEvent,
};
let closure_213 = {
  enqueueSetState(_reactInternals, payload, callback) {
    _reactInternals = _reactInternals._reactInternals;
    const tmp = requestUpdateLane(_reactInternals);
    obj = { lane: tmp, tag: 0, payload, callback: null, next: null };
    if (null != callback) {
      obj.callback = callback;
    }
    const tmp2 = enqueueUpdate(_reactInternals, obj, tmp);
    if (null !== tmp2) {
      scheduleUpdateOnFiber(tmp2, _reactInternals, tmp);
      const updateQueue = _reactInternals.updateQueue;
      if (null !== updateQueue) {
        const shared = updateQueue.shared;
        if (4194048 & tmp) {
          shared.lanes = tmp | (shared.lanes & tmp2.pendingLanes);
          let tmp4 = tmp2.entangledLanes | tmp3;
          tmp2.entangledLanes = tmp4;
          const entanglements = tmp2.entanglements;
          while (tmp4) {
            diff = 31 - clz32Fallback(tmp4);
            let tmp7 = 1 << diff;
            if ((tmp7 & tmp3) | (entanglements[diff] & tmp3)) {
              entanglements[diff] = entanglements[diff] | tmp3;
            }
            tmp4 = tmp4 & ~tmp7;
          }
        }
      }
    }
  },
  enqueueReplaceState(_reactInternals, payload, callback) {
    _reactInternals = _reactInternals._reactInternals;
    const tmp = requestUpdateLane(_reactInternals);
    obj = { lane: tmp, tag: 1, payload, callback: null, next: null };
    if (null != callback) {
      obj.callback = callback;
    }
    const tmp2 = enqueueUpdate(_reactInternals, obj, tmp);
    if (null !== tmp2) {
      scheduleUpdateOnFiber(tmp2, _reactInternals, tmp);
      const updateQueue = _reactInternals.updateQueue;
      if (null !== updateQueue) {
        const shared = updateQueue.shared;
        if (4194048 & tmp) {
          shared.lanes = tmp | (shared.lanes & tmp2.pendingLanes);
          let tmp4 = tmp2.entangledLanes | tmp3;
          tmp2.entangledLanes = tmp4;
          const entanglements = tmp2.entanglements;
          while (tmp4) {
            diff = 31 - clz32Fallback(tmp4);
            let tmp7 = 1 << diff;
            if ((tmp7 & tmp3) | (entanglements[diff] & tmp3)) {
              entanglements[diff] = entanglements[diff] | tmp3;
            }
            tmp4 = tmp4 & ~tmp7;
          }
        }
      }
    }
  },
  enqueueForceUpdate(_reactInternals, callback) {
    _reactInternals = _reactInternals._reactInternals;
    const tmp = requestUpdateLane(_reactInternals);
    obj = { lane: tmp, tag: 2, payload: null, callback: null, next: null };
    if (null != callback) {
      obj.callback = callback;
    }
    const tmp2 = enqueueUpdate(_reactInternals, obj, tmp);
    if (null !== tmp2) {
      scheduleUpdateOnFiber(tmp2, _reactInternals, tmp);
      const updateQueue = _reactInternals.updateQueue;
      if (null !== updateQueue) {
        const shared = updateQueue.shared;
        if (4194048 & tmp) {
          shared.lanes = tmp | (shared.lanes & tmp2.pendingLanes);
          let tmp4 = tmp2.entangledLanes | tmp3;
          tmp2.entangledLanes = tmp4;
          const entanglements = tmp2.entanglements;
          while (tmp4) {
            diff = 31 - clz32Fallback(tmp4);
            let tmp7 = 1 << diff;
            if ((tmp7 & tmp3) | (entanglements[diff] & tmp3)) {
              entanglements[diff] = entanglements[diff] | tmp3;
            }
            tmp4 = tmp4 & ~tmp7;
          }
        }
      }
    }
  },
};
let closure_221 = Error(
  "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue.",
);
let c222 = false;
let closure_232 = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
let closure_249 = false;
let closure_250 = false;
let closure_251 = typeof WeakSet === "function" ? WeakSet : Set;
let c252 = null;
let closure_270 = 8192;
let closure_275 = {
  getCacheForType(fn) {
    const _currentValue2 = context._currentValue2;
    next = { context, memoizedValue: _currentValue2, next: null };
    if (null === obj2) {
      if (null === _null) {
        const _Error = Error;
        throw Error(
          "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
        );
      } else {
        obj2 = { lanes: 0, firstContext: next };
        _null.dependencies = obj2;
        _null.flags = _null.flags | 524288;
      }
    } else {
      tmp2.next = next;
      obj2 = next;
    }
    const data = _currentValue2.data;
    let value = data.get(fn);
    if (undefined === value) {
      const tmp4 = fn();
      const data2 = _currentValue2.data;
      const result = data2.set(fn, tmp4);
      value = tmp4;
    }
    return value;
  },
  cacheSignal() {
    const _currentValue2 = context._currentValue2;
    next = { context, memoizedValue: _currentValue2, next: null };
    if (null === obj2) {
      if (null === _null) {
        const _Error = Error;
        throw Error(
          "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
        );
      } else {
        obj2 = { lanes: 0, firstContext: next };
        _null.dependencies = obj2;
        _null.flags = _null.flags | 524288;
      }
    } else {
      tmp2.next = next;
      obj2 = next;
    }
    return _currentValue2.controller.signal;
  },
};
let closure_276 = typeof WeakMap === "function" ? WeakMap : Map;
let closure_277 = 0;
let c278 = null;
let _return = null;
let c280 = 0;
let c281 = 0;
let c282 = null;
let c283 = false;
let closure_284 = false;
let c285 = false;
let current2 = 0;
let c287 = 0;
let closure_288 = 0;
let c289 = 0;
let closure_290 = 0;
let closure_291 = 0;
let c292 = 0;
let c293 = null;
let closure_294 = null;
let c295 = false;
let closure_296 = 0;
let closure_297 = Infinity;
let c298 = null;
let c299 = null;
let c300 = 0;
let c301 = null;
let c302 = null;
let c303 = 0;
let c304 = 0;
let c305 = null;
let c306 = null;
let c307 = 0;
let closure_308 = null;
const createNode = globalThis.nativeFabricUIManager.createNode;
const cloneNodeWithNewChildren = globalThis.nativeFabricUIManager.cloneNodeWithNewChildren;
let closure_349 = globalThis.nativeFabricUIManager.cloneNodeWithNewChildrenAndProps;
const cloneNodeWithNewProps = globalThis.nativeFabricUIManager.cloneNodeWithNewProps;
const createChildSet = globalThis.nativeFabricUIManager.createChildSet;
const appendChild = globalThis.nativeFabricUIManager.appendChild;
const appendChildToSet = globalThis.nativeFabricUIManager.appendChildToSet;
const completeRoot = globalThis.nativeFabricUIManager.completeRoot;
let closure_355 = globalThis.nativeFabricUIManager.unstable_DiscreteEventPriority;
let closure_356 = globalThis.nativeFabricUIManager.unstable_ContinuousEventPriority;
let closure_357 = globalThis.nativeFabricUIManager.unstable_IdleEventPriority;
let closure_358 = globalThis.nativeFabricUIManager.unstable_getCurrentEventPriority;
let obj12 = {
  getInspectorDataForInstance: "r",
  getInspectorDataForViewTag() {
    throw Error("getInspectorDataForViewTag() is not available in production");
  },
  getInspectorDataForViewAtPoint() {
    throw Error("getInspectorDataForViewAtPoint() is not available in production.");
  },
};
let get = get_BatchedBridge.ReactNativeViewConfigRegistry.get;
sum = 2;
if (globalThis.nativeFabricUIManager.registerEventHandler) {
  globalThis.nativeFabricUIManager.registerEventHandler(function dispatchEvent(stateNode, eventName, nativeEvent) {
    let length;
    function batchedUpdates$1(fn, arg1) {
      const tmp = c69;
      if (tmp) {
        return fn(undefined);
      } else {
        c69 = true;
        try {
          c69 = false;
          return batchedUpdatesImpl(fn, undefined);
        } catch (tmp3) {
          c69 = false;
          throw tmp3;
        }
      }
    }
    _require = stateNode;
    dependencyMap = eventName;
    let publicInstance = null;
    if (null != stateNode) {
      stateNode = stateNode.stateNode;
      if (null != stateNode) {
        if (null != stateNode.canonical) {
          if (null == stateNode.canonical.publicInstance) {
            let tmp9 = _require;
            const canonical = stateNode.canonical;
            const tmp11 = require("get BatchedBridge");
            const nativeTag = stateNode.canonical.nativeTag;
            const viewConfig = stateNode.canonical.viewConfig;
            const internalInstanceHandle = stateNode.canonical.internalInstanceHandle;
            const publicRootInstance = stateNode.canonical.publicRootInstance;
            let tmp2 = null;
            const createPublicInstance = tmp11.createPublicInstance;
            if (null != publicRootInstance) {
              tmp2 = publicRootInstance;
            }
            const tmp3 = tmp11;
            let tmp4 = nativeTag;
            let tmp5 = viewConfig;
            let tmp6 = internalInstanceHandle;
            let tmp7 = tmp2;
            canonical.publicInstance = createPublicInstance(nativeTag, viewConfig, internalInstanceHandle, tmp2);
            stateNode.canonical.publicRootInstance = null;
          }
          publicInstance = stateNode.canonical.publicInstance;
        } else {
          if (null != stateNode.containerInfo) {
            if (null != stateNode.containerInfo.publicInstance) {
              publicInstance = stateNode.containerInfo.publicInstance;
            }
          }
          publicInstance = null;
          if (null != stateNode._nativeTag) {
            publicInstance = stateNode;
          }
        }
      }
    }
    !batchedUpdates$1(() => {
      obj = { eventName, nativeEvent };
      const RawEventEmitter = get_BatchedBridge.RawEventEmitter;
      RawEventEmitter.emit(eventName, obj);
      const RawEventEmitter2 = get_BatchedBridge.RawEventEmitter;
      RawEventEmitter2.emit("*", obj);
      let num = 0;
      let tmp4 = null;
      let tmp5 = null;
      if (0 < length.length) {
        while (true) {
          obj2 = length[num];
          let extractEventsResult = obj2;
          let tmp9 = obj2;
          if (tmp9) {
            extractEventsResult = obj2.extractEvents(eventName, stateNode, nativeEvent, publicInstance);
            tmp9 = extractEventsResult;
          }
          let tmp15 = tmp4;
          if (extractEventsResult) {
            if (null == tmp9) {
              break;
            } else {
              let tmp21 = tmp9;
              if (null != tmp4) {
                let combined;
                let tmp17 = isArray(tmp4);
                let tmp18 = isArray(tmp9);
                if (tmp17) {
                  let push = tmp4.push;
                  if (tmp18) {
                    let applyResult = push.apply(tmp4, tmp9);
                    combined = tmp4;
                  } else {
                    let arr2 = push(tmp9);
                    combined = tmp4;
                  }
                } else if (tmp18) {
                  items = [tmp4];
                  combined = items.concat(tmp9);
                } else {
                  combined = [tmp4, tmp9];
                }
                tmp21 = combined;
              }
              tmp15 = tmp21;
            }
          }
          num = num + 1;
          tmp4 = tmp15;
          tmp5 = tmp15;
        }
        const _Error3 = Error;
        throw Error("Accumulated items must not be null or undefined.");
      }
      if (null !== tmp5) {
        if (null == tmp5) {
          const _Error2 = Error;
          throw Error("Accumulated items must not be null or undefined.");
        } else {
          let tmp27 = tmp5;
          if (null != c70) {
            let combined1;
            const tmp23 = isArray(c70);
            const tmp24 = isArray(tmp5);
            if (tmp23) {
              const push2 = arr4.push;
              if (tmp24) {
                push2.apply(c70, tmp5);
                combined1 = arr4;
              } else {
                push2(tmp5);
                combined1 = arr4;
              }
            } else if (tmp24) {
              items1 = [c70];
              combined1 = items1.concat(tmp5);
            } else {
              combined1 = [c70, tmp5];
            }
            tmp27 = combined1;
          }
          c70 = tmp27;
        }
      }
      c70 = null;
      if (c70) {
        const _Array = Array;
        if (Array.isArray(c70)) {
          const item = arr7.forEach(executeDispatchesAndReleaseTopLevel, undefined);
        } else if (c70) {
          executeDispatchesAndReleaseTopLevel.call(undefined, c70);
        }
        const tmp30 = c70;
        if (tmp30) {
          const _Error = Error;
          throw Error(
            "processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.",
          );
        } else {
          const tmp31 = c30;
          if (tmp31) {
            c30 = false;
            c31 = null;
            throw c31;
          }
        }
      }
    });
  });
}
let closure_361 = { isInAParentText: true };
let closure_363 = 0;
let _queueMicrotask = setTimeout;
let closure_366 = {
  $$typeof: forResult,
  Provider: null,
  Consumer: null,
  _currentValue: null,
  _currentValue2: null,
  _threadCount: 0,
};
let prop = typeof globalThis.RN$enableMicrotasksInReact !== "undefined";
if (typeof globalThis.RN$enableMicrotasksInReact !== "undefined") {
  prop = globalThis.RN$enableMicrotasksInReact;
}
if (typeof queueMicrotask === "function") {
  _queueMicrotask = queueMicrotask;
}
z = function z(arg0) {};
A = function A(arg0) {};
N = function N(stateNode) {
  let publicInstance;
  stateNode = stateNode.stateNode;
  if (null != stateNode.canonical) {
    if (null == stateNode.canonical.publicInstance) {
      const canonical = stateNode.canonical;
      const nativeTag = stateNode.canonical.nativeTag;
      const viewConfig = stateNode.canonical.viewConfig;
      const internalInstanceHandle = stateNode.canonical.internalInstanceHandle;
      const publicRootInstance = stateNode.canonical.publicRootInstance;
      let tmp2 = null;
      const createPublicInstance = get_BatchedBridge.createPublicInstance;
      if (null != publicRootInstance) {
        tmp2 = publicRootInstance;
      }
      canonical.publicInstance = createPublicInstance(nativeTag, viewConfig, internalInstanceHandle, tmp2);
      stateNode.canonical.publicRootInstance = null;
    }
    publicInstance = stateNode.canonical.publicInstance;
  } else {
    if (null != stateNode.containerInfo) {
      if (null != stateNode.containerInfo.publicInstance) {
        publicInstance = stateNode.containerInfo.publicInstance;
      }
    }
    publicInstance = null;
    if (null != stateNode._nativeTag) {
      publicInstance = stateNode;
    }
  }
  if (null == publicInstance) {
    const _Error = Error;
    throw Error("Could not find host instance from fiber");
  } else {
    return publicInstance;
  }
};
const injection = obj6.injection;
let obj13 = {
  onChange(stateNode, stateNode2, arg2) {
    let flag = arg2;
    const tmp = stateNode && stateNode.stateNode;
    if (tmp) {
      let flag2 = flag;
      const setIsJSResponder = globalThis.nativeFabricUIManager.setIsJSResponder;
      const node = stateNode.stateNode.node;
      if (!flag) {
        flag2 = false;
      }
      setIsJSResponder(node, false, flag2);
    }
    const tmp4 = stateNode2 && stateNode2.stateNode;
    if (tmp4) {
      const nativeFabricUIManager2 = globalThis.nativeFabricUIManager;
      const setIsJSResponder2 = globalThis.nativeFabricUIManager.setIsJSResponder;
      const node2 = stateNode2.stateNode.node;
      if (!flag) {
        flag = false;
      }
      setIsJSResponder2(node2, true, flag);
    }
  },
};
let result2 = injection.injectGlobalResponderHandler(obj13);
if (typeof get_BatchedBridge.ReactFiberErrorDialog.showErrorDialog !== "function") {
  let _Error2 = Error;
  let str3 = "Expected ReactFiberErrorDialog.showErrorDialog to be a function.";
  throw Error("Expected ReactFiberErrorDialog.showErrorDialog to be a function.");
} else {
  batchedUpdatesImpl = function batchedUpdatesImpl(fn, arg1) {
    closure_277 = closure_277 | 1;
    try {
      closure_277 = tmp;
      const tmp4 = fn(arg1);
      if (0 === closure_277) {
        obj = _mod287;
        closure_297 = obj.unstable_now() + 500;
        flushSyncWorkAcrossRoots_impl(0, true);
      }
      return tmp4;
    } catch (tmp9) {
      closure_277 = tmp;
      if (0 === closure_277) {
        obj2 = _mod287;
        closure_297 = obj2.unstable_now() + 500;
        flushSyncWorkAcrossRoots_impl(0, true);
      }
      throw tmp9;
    }
  };
  let _Map = Map;
  let self = this;
  let self2 = this;
  let map = new Map();
  let tmp23 = map;
  const obj26 = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-native-renderer",
    currentDispatcherRef: __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    reconcilerVersion: "19.2.3",
    rendererConfig: obj12,
  };
  if (typeof globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
    __REACT_DEVTOOLS_GLOBAL_HOOK__2 = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__.isDisabled) {
      if (__REACT_DEVTOOLS_GLOBAL_HOOK__2.supportsFiber) {
        try {
          closure_72 = __REACT_DEVTOOLS_GLOBAL_HOOK__2.inject(obj26);
        } catch (err) {}
      }
    }
  }
  exports.createPortal = function (children, containerInfo) {
    let _typeof;
    function createPortal$1(children, containerInfo, implementation) {
      let text;
      let tmp = null;
      if (3 < arguments.length) {
        tmp = null;
        if (undefined !== arguments[3]) {
          tmp = arguments[3];
        }
      }
      obj = { $$typeof: _typeof, key: text, children, containerInfo, implementation };
      text = null;
      if (null != tmp) {
        text = `${tmp}`;
      }
      return obj;
    }
    let tmp = null;
    if (2 < arguments.length) {
      tmp = null;
      if (undefined !== arguments[2]) {
        tmp = arguments[2];
      }
    }
    return createPortal$1(children, containerInfo, null, tmp);
  };
  class SyntheticEvent {
    constructor(dispatchConfig, _targetInst, nativeEvent, target) {
      let defaultPrevented;
      obj = {
        dispatchConfig,
        _targetInst,
        nativeEvent,
        _dispatchListeners: null,
        _dispatchInstances: null,
        isDefaultPrevented: defaultPrevented ? functionThatReturnsTrue : functionThatReturnsFalse,
        isPropagationStopped: functionThatReturnsFalse,
      };
      const Interface = obj.constructor.Interface;
      for (const key10014 in Interface) {
        if (!Interface.hasOwnProperty(key10014)) {
          continue;
        } else {
          let tmp = Interface[key10014];
          if (tmp) {
            obj[key10014] = tmp(nativeEvent);
            continue;
          } else {
            if ("target" === key10014) {
              obj.target = target;
              continue;
            } else {
              obj[key10014] = nativeEvent[key10014];
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      if (null != nativeEvent.defaultPrevented) {
        defaultPrevented = nativeEvent.defaultPrevented;
      } else {
        defaultPrevented = false === nativeEvent.returnValue;
      }
      return obj;
    }
  }
  exports.findHostInstance_DEPRECATED = (canonical) => {
    let tmp = null;
    if (null != canonical) {
      let publicInstance;
      if (canonical.canonical) {
        if (canonical.canonical.publicInstance) {
          publicInstance = canonical.canonical.publicInstance;
        }
        tmp = publicInstance;
      }
      publicInstance = canonical;
      if (!canonical._nativeTag) {
        publicInstance = findHostInstance(canonical);
      }
    }
    return tmp;
  };
  exports.findNodeHandle = (_nativeTag) => {
    if (null == _nativeTag) {
      return null;
    } else if (typeof _nativeTag === "number") {
      return _nativeTag;
    } else if (_nativeTag._nativeTag) {
      return _nativeTag._nativeTag;
    } else {
      if (null != _nativeTag.canonical) {
        if (null != _nativeTag.canonical.nativeTag) {
          return _nativeTag.canonical.nativeTag;
        }
      }
      obj = get_BatchedBridge;
      let nativeTagFromPublicInstance = obj.getNativeTagFromPublicInstance(_nativeTag);
      if (!nativeTagFromPublicInstance) {
        const tmp5 = findHostInstance(_nativeTag);
        let tmp6 = tmp5;
        if (null != tmp5) {
          if (null != tmp5._nativeTag) {
            _nativeTag = tmp5._nativeTag;
          } else {
            const tmpResult = get_BatchedBridge;
            _nativeTag = tmpResult.getNativeTagFromPublicInstance(tmp5);
          }
          tmp6 = _nativeTag;
        }
        nativeTagFromPublicInstance = tmp6;
      }
      return nativeTagFromPublicInstance;
    }
  };
  exports.getNodeFromInternalInstanceHandle = (stateNode) =>
    stateNode && stateNode.stateNode && stateNode.stateNode.node;
  exports.getPublicInstanceFromInternalInstanceHandle = (stateNode) => {
    stateNode = stateNode.stateNode;
    let tmp = null;
    if (null != stateNode) {
      let publicInstance;
      if (6 === stateNode.tag) {
        if (null == stateNode.publicInstance) {
          obj = get_BatchedBridge;
          stateNode.publicInstance = obj.createPublicTextInstance(stateNode);
        }
        publicInstance = stateNode.publicInstance;
      } else {
        const stateNode2 = stateNode.stateNode;
        if (null != stateNode2.canonical) {
          if (null == stateNode2.canonical.publicInstance) {
            const canonical = stateNode2.canonical;
            const nativeTag = stateNode2.canonical.nativeTag;
            const viewConfig = stateNode2.canonical.viewConfig;
            const internalInstanceHandle = stateNode2.canonical.internalInstanceHandle;
            const publicRootInstance = stateNode2.canonical.publicRootInstance;
            let tmp3 = null;
            const createPublicInstance = get_BatchedBridge.createPublicInstance;
            if (null != publicRootInstance) {
              tmp3 = publicRootInstance;
            }
            canonical.publicInstance = createPublicInstance(nativeTag, viewConfig, internalInstanceHandle, tmp3);
            stateNode2.canonical.publicRootInstance = null;
          }
          publicInstance = stateNode2.canonical.publicInstance;
        } else {
          if (null != stateNode2.containerInfo) {
            if (null != stateNode2.containerInfo.publicInstance) {
              publicInstance = stateNode2.containerInfo.publicInstance;
            }
          }
          publicInstance = null;
          if (null != stateNode2._nativeTag) {
            publicInstance = stateNode2;
          }
        }
      }
      tmp = publicInstance;
    }
    return tmp;
  };
  exports.getPublicInstanceFromRootTag = (arg0) => {
    const value = map.get(arg0);
    let publicInstance = null;
    if (value) {
      publicInstance = value.containerInfo.publicInstance;
    }
    return publicInstance;
  };
  exports.isChildPublicInstance = () => {
    throw Error("isChildPublicInstance() is not available in production.");
  };
  exports.render = function (element, containerTag, arg2, arg3, onUncaughtError) {
    let obj14;
    let obj15;
    let obj3;
    let tmp25;
    let value = map.get(containerTag);
    obj = map;
    if (!value) {
      onUncaughtError = nativeOnUncaughtError;
      let onCaughtError = nativeOnCaughtError;
      let onRecoverableError = defaultOnRecoverableError;
      const tmp3 = onUncaughtError && undefined !== onUncaughtError.onUncaughtError;
      if (tmp3) {
        onUncaughtError = onUncaughtError.onUncaughtError;
      }
      const tmp4 = onUncaughtError && undefined !== onUncaughtError.onCaughtError;
      if (tmp4) {
        onCaughtError = onUncaughtError.onCaughtError;
      }
      const tmp5 = onUncaughtError && undefined !== onUncaughtError.onRecoverableError;
      if (tmp5) {
        onRecoverableError = onUncaughtError.onRecoverableError;
      }
      obj2 = { publicInstance: obj3.createPublicRootInstance(containerTag), containerTag };
      let num2 = 0;
      obj3 = get_BatchedBridge;
      if (arg3) {
        num2 = 1;
      }
      obj4 = Object.create(FiberRootNode.prototype);
      new FiberRootNode(
        obj2,
        num2,
        false,
        "",
        onUncaughtError,
        onCaughtError,
        onRecoverableError,
        nativeOnDefaultTransitionIndicator,
        null,
      );
      let num4 = 0;
      if (1 === num2) {
        num4 = 1;
      }
      Object.create(FiberNode.prototype);
      obj6 = {
        tag: 3,
        key: null,
        elementType: null,
        type: null,
        stateNode: obj4,
        return: null,
        child: null,
        sibling: null,
        index: 0,
        ref: null,
        refCleanup: null,
        pendingProps: null,
        memoizedProps: null,
        updateQueue: obj15,
        memoizedState: obj14,
        dependencies: null,
        mode: num4,
        flags: 0,
        subtreeFlags: 0,
        deletions: null,
        lanes: 0,
        childLanes: 0,
        alternate: null,
      };
      obj4.current = obj6;
      obj7 = { controller: tmp25, data: map, refCount: obj7.refCount + 1 };
      const self = this;
      const self2 = this;
      const _Map = Map;
      const self3 = this;
      const self4 = this;
      tmp25 = new closure_106();
      map = new Map();
      obj4.pooledCache = obj7;
      obj14 = { element: null, isDehydrated: false, cache: obj7 };
      obj15 = {
        baseState: obj6.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
      const result = obj.set(containerTag, obj4);
      value = obj4;
    }
    updateContainer(element, value, 0, arg2);
    current = value.current;
    let stateNode1 = null;
    if (current.child) {
      let publicInstance;
      const tag = current.child.tag;
      if (27 !== tag) {
        if (5 !== tag) {
          stateNode1 = current.child.stateNode;
        }
      }
      const stateNode = current.child.stateNode;
      if (null != stateNode.canonical) {
        if (null == stateNode.canonical.publicInstance) {
          const canonical = stateNode.canonical;
          const nativeTag = stateNode.canonical.nativeTag;
          const viewConfig = stateNode.canonical.viewConfig;
          const internalInstanceHandle = stateNode.canonical.internalInstanceHandle;
          const publicRootInstance = stateNode.canonical.publicRootInstance;
          let tmp34 = null;
          const createPublicInstance = get_BatchedBridge.createPublicInstance;
          if (null != publicRootInstance) {
            tmp34 = publicRootInstance;
          }
          canonical.publicInstance = createPublicInstance(nativeTag, viewConfig, internalInstanceHandle, tmp34);
          stateNode.canonical.publicRootInstance = null;
        }
        publicInstance = stateNode.canonical.publicInstance;
      } else {
        if (null != stateNode.containerInfo) {
          if (null != stateNode.containerInfo.publicInstance) {
            publicInstance = stateNode.containerInfo.publicInstance;
          }
        }
        publicInstance = null;
        if (null != stateNode._nativeTag) {
          publicInstance = stateNode;
        }
      }
      stateNode1 = publicInstance;
    }
    return stateNode1;
  };
  exports.sendAccessibilityEvent = (_nativeTag, arg1) => {
    if (null != _nativeTag._nativeTag) {
      _nativeTag = _nativeTag._nativeTag;
    } else {
      obj = get_BatchedBridge;
      _nativeTag = obj.getNativeTagFromPublicInstance(_nativeTag);
    }
    if (null != _nativeTag) {
      obj2 = get_BatchedBridge;
      const nodeFromPublicInstance = obj2.getNodeFromPublicInstance(_nativeTag);
      if (null != nodeFromPublicInstance) {
        const result = globalThis.nativeFabricUIManager.sendAccessibilityEvent(nodeFromPublicInstance, arg1);
      } else {
        const tmp4Result = get_BatchedBridge;
        const result1 = tmp4Result.legacySendAccessibilityEvent(_nativeTag, arg1);
      }
    }
  };
  exports.stopSurface = (arg0) => {
    let closure_0 = arg0;
    const value = map.get(arg0);
    dependencyMap = value;
    if (dependencyMap) {
      updateContainer(null, value, 0, () => {
        dependencyMap.containerInfo.publicInstance = null;
        map.delete(closure_0);
      });
    }
  };
  exports.unmountComponentAtNode = function (arg0) {
    this.stopSurface(arg0);
  };
}
