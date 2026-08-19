// _runtime/00117_describeBuiltInComponentFrame.js
import noop2 from "00019_noop.js";
import get_BatchedBridge from "00272_get_BatchedBridge.js";
import peek from "00287_peek.js";
import setUpDefaltReactNativeEnvironment from "00118_setUpDefaltReactNativeEnvironment.js";
import closure_158 from "../discord_app/index.native.tsx";
import closure_162 from "../discord_app/index.native.tsx";
import { peek } from "00287_peek.js";

function describeBuiltInComponentFrame(type) {
  if (undefined !== str3) {
    return "\n" + str3 + type + str5;
  } else {
    try {
      const _Error = Error;
      throw Error();
    } catch (tmp2) {
      const match = tmp2.stack.trim().match(/\n( *(at )?)/);
      str3 = match;
      if (match) {
        str3 = match[1];
      }
      if (!str3) {
        str3 = "";
      }
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
      const str2 = tmp2.stack.trim();
    }
  }
}
function describeNativeComponentFrame(type, arg1) {
  closure_0 = type;
  closure_1 = arg1;
  if (type) {
    if (!c8) {
      c8 = true;
      const _Error = Error;
      const _Error2 = Error;
      Error.prepareStackTrace = undefined;
      try {
        let obj = { DetermineComponentFrameRoot: null };
        obj[0] = function DetermineComponentFrameRoot() {
          try {
            if (closure_1) {
              class Fake {
                constructor() {
                  throw Error();
                }
              }
              const _Object = Object;
              const obj = { set: null };
              obj[0] = function set() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", obj);
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
                }
              }
              try {
                class Fake {
                  constructor() {
                    throw Error();
                  }
                }
                if (typeof Fake.call === "unknown") {
                  class Fake {
                    constructor() {
                      throw Error();
                    }
                  }
                } else {
                  class Fake {
                    constructor() {
                      throw Error();
                    }
                  }
                }
                const prototype = Fake.prototype;
                if (typeof closure_0.call === "unknown") {
                  class Fake {
                    constructor() {
                      throw Error();
                    }
                  }
                } else {
                  class Fake {
                    constructor() {
                      throw Error();
                    }
                  }
                }
                return [null, null];
              } catch (err) {
              }
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
        };
        obj.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        let _Object = Object;
        const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(obj.DetermineComponentFrameRoot, "name");
        if (ownPropertyDescriptor) {
          const configurable = tmp6.configurable;
        }
        if (ownPropertyDescriptor) {
          const _Object2 = Object;
          Object.defineProperty(obj2.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
        }
        const result = obj2.DetermineComponentFrameRoot();
        const first = result[0];
        if (first) {
          if (str4) {
            const parts = first.split("\n");
            const parts1 = str4.split("\n");
            let num2 = 0;
            let num3 = 0;
            if (0 < parts.length) {
              if (!obj3.includes("DetermineComponentFrameRoot")) {
                const sum = num2 + 1;
                num2 = sum;
                while (sum < arr2.length) {
                  let obj4 = arr2[num2];
                  if (obj4.includes("DetermineComponentFrameRoot")) {
                    break;
                  }
                }
              }
              obj3 = arr2[num2];
            }
            if (num3 < parts1.length) {
              if (!obj5.includes("DetermineComponentFrameRoot")) {
                const sum1 = num3 + 1;
                num3 = sum1;
                while (sum1 < parts1.length) {
                  let obj6 = parts1[num3];
                  if (obj6.includes("DetermineComponentFrameRoot")) {
                    break;
                  }
                }
              }
              obj5 = parts1[num3];
            }
            if (num2 === parts.length) {
              const diff = arr2.length - 1;
              num2 = diff;
              num3 = parts1.length - 1;
              if (1 <= diff) {
                if (0 <= num3) {
                  if (arr2[num2] !== parts1[num3]) {
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
                while (arr2[num2] === parts1[num3]) {
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
                  let displayName = type.displayName;
                  if (displayName) {
                    displayName = `
  ${str8.replace(" at new ", " at ")}`.includes("<anonymous>");
                  }
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
          let name = type.displayName;
          if (!name) {
            name = type.name;
          }
          str7 = name;
        }
        if (str7) {
          str6 = describeBuiltInComponentFrame(str7);
        }
        return str6;
      } catch (tmp73) {
        c8 = false;
        tmp.Error.prepareStackTrace = tmp2;
        throw tmp73;
      }
    }
  }
  return "";
}
function describeFiber(_return, arg1) {
  switch (_return.tag) {
    case 0:
      let tmp5 = describeNativeComponentFrame(_return.type, false);
      return tmp5;
    case 1:
      return describeNativeComponentFrame(_return.type, true);
    case 2:
      return "";
    case 3:
      return "";
    case 4:
      return "";
    case 5:
      let tmp14 = describeBuiltInComponentFrame(_return.type);
      return tmp14;
    case 6:
      return "";
    case 7:
      return "";
    case 8:
      return "";
    case 9:
      return "";
    case 10:
      return "";
    case 11:
      return describeNativeComponentFrame(_return.type.render, false);
    case 12:
      return "";
    case 13:
      if (_return.child !== arg1) {
        if (null !== arg1) {
          let tmp10 = describeBuiltInComponentFrame("Suspense Fallback");
        }
        return tmp10;
      }
      tmp10 = describeBuiltInComponentFrame("Suspense");
    break;
    case 14:
      return "";
    case 15:
      tmp5 = describeNativeComponentFrame(_return.type, false);
      return tmp5;
    case 16:
      return describeBuiltInComponentFrame("Lazy");
    case 17:
      return "";
    case 18:
      return "";
    case 19:
      return describeBuiltInComponentFrame("SuspenseList");
    case 20:
      return "";
    case 21:
      return "";
    case 22:
      return "";
    case 23:
      return "";
    case 24:
      return "";
    case 25:
      return "";
    case 26:
      tmp14 = describeBuiltInComponentFrame(_return.type);
      return tmp14;
    case 27:
      tmp14 = describeBuiltInComponentFrame(_return.type);
      return tmp14;
    case 28:
      return "";
    case 29:
      return "";
    case 30:
      return "";
    case 31:
      return describeBuiltInComponentFrame("Activity");
    default:
      return "";
  }
}
function getStackByFiberInDevAndProd(current) {
  let _return = current;
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
      } else if (closure_19 === $$typeof) {
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
          const tmp8 = getComponentNameFromType(type.type) || "Memo";
        }
        return tmp6;
      } else if (closure_24 === $$typeof) {
        try {
          return getComponentNameFromType(tmp4(tmp3));
        } catch (err) {
        }
      }
    }
    return null;
  }
}
function executeDispatch(isPropagationStopped, _dispatchListeners, _dispatchInstances) {
  isPropagationStopped.currentTarget = N(_dispatchInstances);
  try {
    _dispatchListeners(isPropagationStopped);
    isPropagationStopped.currentTarget = null;
  } catch (tmp3) {
    if (!c30) {
      c30 = true;
      c31 = tmp3;
    }
  }
}
function functionThatReturnsTrue() {
  return true;
}
function functionThatReturnsFalse() {
  return false;
}
class SyntheticEvent {
  constructor(arg0, arg1, arg2, arg3) {
    obj = { dispatchConfig: global, _targetInst: require, nativeEvent: importDefault, _dispatchListeners: null, _dispatchInstances: null };
    Interface = obj.constructor.Interface;
    for (const key10014 in Interface) {
      tmp2 = key10014;
      if (!Interface.hasOwnProperty(key10014)) {
        continue;
      } else {
        tmp = Interface[key10014];
        if (tmp) {
          obj[key10014] = tmp(arg2);
          continue;
        } else {
          if ("target" === key10014) {
            obj.target = arg3;
            continue;
          } else {
            obj[key10014] = arg2[key10014];
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
    if (null != importDefault.defaultPrevented) {
      defaultPrevented = importDefault.defaultPrevented;
    } else {
      flag = false;
      defaultPrevented = false === importDefault.returnValue;
    }
    obj.isDefaultPrevented = defaultPrevented ? functionThatReturnsTrue : functionThatReturnsFalse;
    obj.isPropagationStopped = functionThatReturnsFalse;
    return obj;
  }
}
function createOrGetPooledEvent(arg0, arg1, arg2, arg3) {
  const self = this;
  if (this.eventPool.length) {
    const eventPool = self.eventPool;
    const arr = eventPool.pop();
    const call = self.call;
    if (typeof call === "unknown") {
      self(arg0, arg1, arg2, arg3);
    } else {
      call(arr, arg0, arg1, arg2, arg3);
    }
    return arr;
  } else {
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
  identifier = identifier.identifier;
  if (null == identifier) {
    const _Error = Error;
    throw Error("Touch object is missing identifier.");
  } else {
    if (items3[identifier]) {
      tmp6.touchActive = true;
      ({ pageX: tmp6.startPageX, pageY: tmp6.startPageY, timeStamp } = identifier);
      if (!timeStamp) {
        timeStamp = identifier.timestamp;
      }
      tmp6.startTimeStamp = timeStamp;
      ({ pageX: tmp6.currentPageX, pageY: tmp6.currentPageY } = identifier);
      tmp6.currentTimeStamp = identifier.timeStamp || identifier.timestamp;
      ({ pageX: tmp6.previousPageX, pageY: tmp6.previousPageY } = identifier);
      tmp6.previousTimeStamp = identifier.timeStamp || identifier.timestamp;
      let tmp = timestampForTouch;
    } else {
      const obj = { touchActive: true, startPageX: null, startPageY: null, startTimeStamp: null, currentPageX: null, currentPageY: null, currentTimeStamp: null, previousPageX: null, previousPageY: null, previousTimeStamp: null };
      ({ pageX: obj[1], pageY: obj[2] } = identifier);
      tmp = timestampForTouch;
      obj[3] = identifier.timeStamp || identifier.timestamp;
      ({ pageX: obj[4], pageY: obj[5] } = identifier);
      obj[6] = identifier.timeStamp || identifier.timestamp;
      ({ pageX: obj[7], pageY: obj[8] } = identifier);
      obj[9] = identifier.timeStamp || identifier.timestamp;
      tmp5[identifier] = obj;
    }
    obj1.mostRecentTimeStamp = tmp(identifier);
  }
}
function recordTouchMove(identifier) {
  identifier = identifier.identifier;
  if (null == identifier) {
    const _Error = Error;
    throw Error("Touch object is missing identifier.");
  } else if (tmp[identifier]) {
    tmp4.touchActive = true;
    ({ currentPageX: tmp4.previousPageX, currentPageY: tmp4.previousPageY, currentTimeStamp: tmp4.previousTimeStamp } = tmp4);
    ({ pageX: tmp4.currentPageX, pageY: tmp4.currentPageY } = identifier);
    tmp4.currentTimeStamp = identifier.timeStamp || identifier.timestamp;
    let timestamp = identifier.timeStamp;
    if (!timestamp) {
      timestamp = identifier.timestamp;
    }
    obj1.mostRecentTimeStamp = timestamp;
  }
}
function recordTouchEnd(identifier) {
  identifier = identifier.identifier;
  if (null == identifier) {
    const _Error = Error;
    throw Error("Touch object is missing identifier.");
  } else if (tmp[identifier]) {
    tmp4.touchActive = false;
    ({ currentPageX: tmp4.previousPageX, currentPageY: tmp4.previousPageY, currentTimeStamp: tmp4.previousTimeStamp } = tmp4);
    ({ pageX: tmp4.currentPageX, pageY: tmp4.currentPageY } = identifier);
    tmp4.currentTimeStamp = identifier.timeStamp || identifier.timestamp;
    let timestamp = identifier.timeStamp;
    if (!timestamp) {
      timestamp = identifier.timestamp;
    }
    obj1.mostRecentTimeStamp = timestamp;
  }
}
function accumulateDirectionalDispatches$1(stateNode, bubbled, _dispatchListeners) {
  stateNode = stateNode.stateNode;
  let tmp2 = null;
  if (null !== stateNode) {
    if (typeof z !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const currentProps = stateNode.canonical.currentProps;
    tmp2 = null;
    if (null !== currentProps) {
      tmp2 = tmp3;
      if (currentProps[tmp]) {
        tmp2 = tmp3;
        if (typeof tmp3 !== "function") {
          const _Error3 = Error;
          const _HermesInternal = HermesInternal;
          throw Error("Expected `" + tmp + "` listener to be a function, instead got a value of `" + typeof tmp3 + "` type.");
        }
      }
    }
  }
  if (tmp2) {
    _dispatchListeners = _dispatchListeners._dispatchListeners;
    if (null == tmp2) {
      const _Error2 = Error;
      throw Error("Accumulated items must not be null or undefined.");
    } else if (null == _dispatchListeners) {
      _dispatchListeners._dispatchListeners = tmp2;
      const _dispatchInstances = _dispatchListeners._dispatchInstances;
      if (null == stateNode) {
        const _Error = Error;
        throw Error("Accumulated items must not be null or undefined.");
      } else if (null == _dispatchInstances) {
        _dispatchListeners._dispatchInstances = stateNode;
      } else {
        let applyResult = isArray(stateNode);
        if (tmp10) {
          const push2 = _dispatchInstances.push;
          if (applyResult) {
            applyResult = push2.apply(_dispatchInstances, stateNode);
            let combined = _dispatchInstances;
          } else {
            applyResult = push2(stateNode);
            combined = _dispatchInstances;
          }
        } else if (applyResult) {
          const items = [_dispatchInstances];
          combined = items.concat(stateNode);
        } else {
          combined = [_dispatchInstances, stateNode];
        }
        tmp10 = isArray(_dispatchInstances);
      }
    } else {
      let applyResult1 = isArray(tmp2);
      if (tmp5) {
        const push = _dispatchListeners.push;
        if (applyResult1) {
          applyResult1 = push.apply(_dispatchListeners, tmp2);
          let combined1 = _dispatchListeners;
        } else {
          applyResult1 = push(tmp2);
          combined1 = _dispatchListeners;
        }
      } else if (applyResult1) {
        const items1 = [_dispatchListeners];
        combined1 = items1.concat(tmp2);
      } else {
        combined1 = [_dispatchListeners, tmp2];
      }
      tmp5 = isArray(_dispatchListeners);
    }
  }
}
function accumulateDirectDispatchesSingle$1(dispatchConfig) {
  if (dispatchConfig) {
    if (dispatchConfig.dispatchConfig.registrationName) {
      const _targetInst = dispatchConfig._targetInst;
      if (_targetInst) {
        if (dispatchConfig) {
          if (dispatchConfig.dispatchConfig.registrationName) {
            const registrationName = dispatchConfig.dispatchConfig.registrationName;
            const stateNode = _targetInst.stateNode;
            let tmp2 = null;
            if (null !== stateNode) {
              if (typeof z !== "function") {
                HermesBuiltin.throwTypeError();
              }
              const currentProps = stateNode.canonical.currentProps;
              tmp2 = null;
              if (null !== currentProps) {
                tmp2 = tmp3;
                if (currentProps[registrationName]) {
                  tmp2 = tmp3;
                  if (typeof tmp3 !== "function") {
                    const _Error3 = Error;
                    const _HermesInternal = HermesInternal;
                    throw Error("Expected `" + registrationName + "` listener to be a function, instead got a value of `" + typeof tmp3 + "` type.");
                  }
                }
              }
            }
            if (tmp2) {
              const _dispatchListeners = dispatchConfig._dispatchListeners;
              if (null == tmp2) {
                const _Error2 = Error;
                throw Error("Accumulated items must not be null or undefined.");
              } else if (null == _dispatchListeners) {
                dispatchConfig._dispatchListeners = tmp2;
                const _dispatchInstances = dispatchConfig._dispatchInstances;
                if (null == _targetInst) {
                  const _Error = Error;
                  throw Error("Accumulated items must not be null or undefined.");
                } else if (null == _dispatchInstances) {
                  dispatchConfig._dispatchInstances = _targetInst;
                } else {
                  let applyResult = isArray(_targetInst);
                  if (tmp10) {
                    const push2 = _dispatchInstances.push;
                    if (applyResult) {
                      applyResult = push2.apply(_dispatchInstances, _targetInst);
                      let combined = _dispatchInstances;
                    } else {
                      applyResult = push2(_targetInst);
                      combined = _dispatchInstances;
                    }
                  } else if (applyResult) {
                    const items = [_dispatchInstances];
                    combined = items.concat(_targetInst);
                  } else {
                    combined = [_dispatchInstances, _targetInst];
                  }
                  tmp10 = isArray(_dispatchInstances);
                }
              } else {
                let applyResult1 = isArray(tmp2);
                if (tmp5) {
                  const push = _dispatchListeners.push;
                  if (applyResult1) {
                    applyResult1 = push.apply(_dispatchListeners, tmp2);
                    let combined1 = _dispatchListeners;
                  } else {
                    applyResult1 = push(tmp2);
                    combined1 = _dispatchListeners;
                  }
                } else if (applyResult1) {
                  const items1 = [_dispatchListeners];
                  combined1 = items1.concat(tmp2);
                } else {
                  combined1 = [_dispatchListeners, tmp2];
                }
                tmp5 = isArray(_dispatchListeners);
              }
            }
          }
        }
      }
    }
  }
}
function accumulateTwoPhaseDispatchesSingleSkipTarget(dispatchConfig) {
  let _return1;
  let length;
  let tmp10;
  if (dispatchConfig) {
    if (dispatchConfig.dispatchConfig.phasedRegistrationNames) {
      let _targetInst = dispatchConfig._targetInst;
      let tmp = null;
      if (_targetInst) {
        let _return = _targetInst.return;
        while (_return) {
          _targetInst = _return;
          if (5 === _return.tag) {
            break;
          }
        }
        if (!_return) {
          _return = null;
        }
        tmp = _return;
      }
      const items = [];
      if (tmp) {
        items.push(tmp);
        let tmp5 = tmp;
        do {
          _return1 = tmp5.return;
          while (_return1) {
            tmp5 = _return1;
            if (5 === _return1.tag) {
              break;
            }
          }
          if (!_return1) {
            _return1 = null;
          }
          tmp = _return1;
        } while (_return1);
      }
      let diff = tmp7 - 1;
      if (0 < +items.length) {
        do {
          let tmp3Result = accumulateDirectionalDispatches$1(items[diff], "captured", dispatchConfig);
          tmp10 = +diff;
          diff = tmp10 - 1;
        } while (0 < tmp10);
      }
      let num4 = 0;
      if (0 < items.length) {
        do {
          tmp3Result = accumulateDirectionalDispatches$1(items[num4], "bubbled", dispatchConfig);
          num4 = num4 + 1;
          length = items.length;
        } while (num4 < length);
      }
    }
  }
}
function accumulateTwoPhaseDispatchesSingle$1(dispatchConfig) {
  let _return;
  let length;
  let tmp8;
  let phasedRegistrationNames = dispatchConfig;
  if (dispatchConfig) {
    phasedRegistrationNames = dispatchConfig.dispatchConfig.phasedRegistrationNames;
  }
  if (phasedRegistrationNames) {
    let _targetInst = dispatchConfig._targetInst;
    const items = [];
    if (_targetInst) {
      items.push(_targetInst);
      let tmp3 = _targetInst;
      do {
        _return = tmp3.return;
        while (_return) {
          tmp3 = _return;
          if (5 === _return.tag) {
            break;
          }
        }
        if (!_return) {
          _return = null;
        }
        _targetInst = _return;
      } while (_return);
    }
    let diff = tmp5 - 1;
    if (0 < +items.length) {
      do {
        let tmpResult = accumulateDirectionalDispatches$1(items[diff], "captured", dispatchConfig);
        tmp8 = +diff;
        diff = tmp8 - 1;
      } while (0 < tmp8);
    }
    let num4 = 0;
    if (0 < items.length) {
      do {
        tmpResult = accumulateDirectionalDispatches$1(items[num4], "bubbled", dispatchConfig);
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
    if (typeof z !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const currentProps = stateNode.canonical.currentProps;
    tmp2 = null;
    if (null !== currentProps) {
      tmp2 = tmp3;
      if (currentProps[tmp]) {
        tmp2 = tmp3;
        if (typeof tmp3 !== "function") {
          const _Error3 = Error;
          const _HermesInternal = HermesInternal;
          throw Error("Expected `" + tmp + "` listener to be a function, instead got a value of `" + typeof tmp3 + "` type.");
        }
      }
    }
  }
  if (tmp2) {
    _dispatchListeners = _dispatchListeners._dispatchListeners;
    if (null == tmp2) {
      const _Error2 = Error;
      throw Error("Accumulated items must not be null or undefined.");
    } else if (null == _dispatchListeners) {
      _dispatchListeners._dispatchListeners = tmp2;
      const _dispatchInstances = _dispatchListeners._dispatchInstances;
      if (null == stateNode) {
        const _Error = Error;
        throw Error("Accumulated items must not be null or undefined.");
      } else if (null == _dispatchInstances) {
        _dispatchListeners._dispatchInstances = stateNode;
      } else {
        let applyResult = isArray(stateNode);
        if (tmp10) {
          const push2 = _dispatchInstances.push;
          if (applyResult) {
            applyResult = push2.apply(_dispatchInstances, stateNode);
            let combined = _dispatchInstances;
          } else {
            applyResult = push2(stateNode);
            combined = _dispatchInstances;
          }
        } else if (applyResult) {
          const items = [_dispatchInstances];
          combined = items.concat(stateNode);
        } else {
          combined = [_dispatchInstances, stateNode];
        }
        tmp10 = isArray(_dispatchInstances);
      }
    } else {
      let applyResult1 = isArray(tmp2);
      if (tmp5) {
        const push = _dispatchListeners.push;
        if (applyResult1) {
          applyResult1 = push.apply(_dispatchListeners, tmp2);
          let combined1 = _dispatchListeners;
        } else {
          applyResult1 = push(tmp2);
          combined1 = _dispatchListeners;
        }
      } else if (applyResult1) {
        const items1 = [_dispatchListeners];
        combined1 = items1.concat(tmp2);
      } else {
        combined1 = [_dispatchListeners, tmp2];
      }
      tmp5 = isArray(_dispatchListeners);
    }
  }
}
function accumulateTwoPhaseDispatchesSingle(dispatchConfig) {
  let _return;
  let length;
  let tmp8;
  let phasedRegistrationNames = dispatchConfig;
  if (dispatchConfig) {
    phasedRegistrationNames = dispatchConfig.dispatchConfig.phasedRegistrationNames;
  }
  if (phasedRegistrationNames) {
    let _targetInst = dispatchConfig._targetInst;
    const items = [];
    if (_targetInst) {
      items.push(_targetInst);
      let tmp3 = _targetInst;
      do {
        _return = tmp3.return;
        while (_return) {
          tmp3 = _return;
          if (5 === _return.tag) {
            break;
          }
        }
        if (!_return) {
          _return = null;
        }
        _targetInst = _return;
      } while (_return);
    }
    let diff = tmp5 - 1;
    if (0 < +items.length) {
      do {
        let tmpResult = accumulateDirectionalDispatches(items[diff], "captured", dispatchConfig);
        tmp8 = +diff;
        diff = tmp8 - 1;
      } while (0 < tmp8);
    }
    let num4 = 0;
    if (0 < items.length) {
      do {
        tmpResult = accumulateDirectionalDispatches(items[num4], "bubbled", dispatchConfig);
        num4 = num4 + 1;
        length = items.length;
      } while (num4 < length);
    }
  }
}
function accumulateDirectDispatchesSingle(dispatchConfig) {
  if (dispatchConfig) {
    if (dispatchConfig.dispatchConfig.registrationName) {
      const _targetInst = dispatchConfig._targetInst;
      if (_targetInst) {
        if (dispatchConfig) {
          if (dispatchConfig.dispatchConfig.registrationName) {
            const registrationName = dispatchConfig.dispatchConfig.registrationName;
            const stateNode = _targetInst.stateNode;
            let tmp2 = null;
            if (null !== stateNode) {
              if (typeof z !== "function") {
                HermesBuiltin.throwTypeError();
              }
              const currentProps = stateNode.canonical.currentProps;
              tmp2 = null;
              if (null !== currentProps) {
                tmp2 = tmp3;
                if (currentProps[registrationName]) {
                  tmp2 = tmp3;
                  if (typeof tmp3 !== "function") {
                    const _Error3 = Error;
                    const _HermesInternal = HermesInternal;
                    throw Error("Expected `" + registrationName + "` listener to be a function, instead got a value of `" + typeof tmp3 + "` type.");
                  }
                }
              }
            }
            if (tmp2) {
              const _dispatchListeners = dispatchConfig._dispatchListeners;
              if (null == tmp2) {
                const _Error2 = Error;
                throw Error("Accumulated items must not be null or undefined.");
              } else if (null == _dispatchListeners) {
                dispatchConfig._dispatchListeners = tmp2;
                const _dispatchInstances = dispatchConfig._dispatchInstances;
                if (null == _targetInst) {
                  const _Error = Error;
                  throw Error("Accumulated items must not be null or undefined.");
                } else if (null == _dispatchInstances) {
                  dispatchConfig._dispatchInstances = _targetInst;
                } else {
                  let applyResult = isArray(_targetInst);
                  if (tmp10) {
                    const push2 = _dispatchInstances.push;
                    if (applyResult) {
                      applyResult = push2.apply(_dispatchInstances, _targetInst);
                      let combined = _dispatchInstances;
                    } else {
                      applyResult = push2(_targetInst);
                      combined = _dispatchInstances;
                    }
                  } else if (applyResult) {
                    const items = [_dispatchInstances];
                    combined = items.concat(_targetInst);
                  } else {
                    combined = [_dispatchInstances, _targetInst];
                  }
                  tmp10 = isArray(_dispatchInstances);
                }
              } else {
                let applyResult1 = isArray(tmp2);
                if (tmp5) {
                  const push = _dispatchListeners.push;
                  if (applyResult1) {
                    applyResult1 = push.apply(_dispatchListeners, tmp2);
                    let combined1 = _dispatchListeners;
                  } else {
                    applyResult1 = push(tmp2);
                    combined1 = _dispatchListeners;
                  }
                } else if (applyResult1) {
                  const items1 = [_dispatchListeners];
                  combined1 = items1.concat(tmp2);
                } else {
                  combined1 = [_dispatchListeners, tmp2];
                }
                tmp5 = isArray(_dispatchListeners);
              }
            }
          }
        }
      }
    }
  }
}
function batchedUpdatesImpl(fn, closure_0) {
  return fn(closure_0);
}
function executeDispatchesAndReleaseTopLevel(isPropagationStopped) {
  if (isPropagationStopped) {
    ({ _dispatchListeners, _dispatchInstances } = isPropagationStopped);
    if (isArray(_dispatchListeners)) {
      if (0 < _dispatchListeners.length) {
        let num4 = 0;
        if (!isPropagationStopped.isPropagationStopped()) {
          executeDispatch(isPropagationStopped, _dispatchListeners[num4], _dispatchInstances[num4]);
          const sum = num4 + 1;
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
  if (typeof peek.log === "function") {
    const result = peek.unstable_setDisableYieldValue(arg0);
    const tmpResult = peek;
  }
  if (__REACT_DEVTOOLS_GLOBAL_HOOK__2) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__2.setStrictMode === "function") {
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__2.setStrictMode(closure_72, arg0);
      } catch (err) {
      }
    }
  }
}
function getNextLanes(pendingLanes, c280, arg2) {
  pendingLanes = pendingLanes.pendingLanes;
  if (0 === pendingLanes) {
    return 0;
  } else {
    ({ suspendedLanes, pingedLanes, warmLanes } = pendingLanes);
    if (0 !== (134217727 & pendingLanes)) {
      if (0 !== (tmp12 & ~suspendedLanes)) {
        let num68 = 42 & tmp3;
        if (0 === num68) {
          if (1 === (tmp3 & -tmp3)) {
            num68 = 1;
          } else if (2 === tmp20) {
            num68 = 2;
          } else if (4 === tmp20) {
            num68 = 4;
          } else if (8 === tmp20) {
            num68 = 8;
          } else if (16 === tmp20) {
            num68 = 16;
          } else if (32 === tmp20) {
            num68 = 32;
          } else if (64 === tmp20) {
            num68 = 64;
          } else if (128 === tmp20) {
            num68 = 128;
          } else {
            if (256 !== tmp20) {
              if (512 !== tmp20) {
                if (1024 !== tmp20) {
                  if (2048 !== tmp20) {
                    if (4096 !== tmp20) {
                      if (8192 !== tmp20) {
                        if (16384 !== tmp20) {
                          if (32768 !== tmp20) {
                            if (65536 !== tmp20) {
                              if (131072 !== tmp20) {
                                if (262144 !== tmp20) {
                                  if (524288 !== tmp20) {
                                    if (1048576 !== tmp20) {
                                      if (2097152 !== tmp20) {
                                        if (4194304 !== tmp20) {
                                          if (8388608 !== tmp20) {
                                            if (16777216 !== tmp20) {
                                              if (33554432 !== tmp20) {
                                                if (67108864 === tmp20) {
                                                  num68 = 67108864;
                                                } else if (134217728 === tmp20) {
                                                  num68 = 134217728;
                                                } else {
                                                  if (268435456 === tmp20) {
                                                    num68 = 268435456;
                                                  } else if (536870912 !== tmp20) {
                                                    num68 = 0;
                                                    if (1073741824 !== tmp20) {
                                                      num68 = tmp3;
                                                    }
                                                  }
                                                  num68 = 536870912;
                                                }
                                              }
                                            }
                                          }
                                        }
                                        num68 = 62914560 & tmp3;
                                      }
                                    }
                                  }
                                }
                                num68 = 3932160 & tmp3;
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
            num68 = 261888 & tmp3;
          }
        }
      } else if (0 !== (pingedLanes & tmp12)) {
        let num55 = 42 & tmp17;
        if (0 === num55) {
          if (1 === (tmp17 & -tmp17)) {
            num55 = 1;
          } else if (2 === tmp19) {
            num55 = 2;
          } else if (4 === tmp19) {
            num55 = 4;
          } else if (8 === tmp19) {
            num55 = 8;
          } else if (16 === tmp19) {
            num55 = 16;
          } else if (32 === tmp19) {
            num55 = 32;
          } else if (64 === tmp19) {
            num55 = 64;
          } else if (128 === tmp19) {
            num55 = 128;
          } else {
            if (256 !== tmp19) {
              if (512 !== tmp19) {
                if (1024 !== tmp19) {
                  if (2048 !== tmp19) {
                    if (4096 !== tmp19) {
                      if (8192 !== tmp19) {
                        if (16384 !== tmp19) {
                          if (32768 !== tmp19) {
                            if (65536 !== tmp19) {
                              if (131072 !== tmp19) {
                                if (262144 !== tmp19) {
                                  if (524288 !== tmp19) {
                                    if (1048576 !== tmp19) {
                                      if (2097152 !== tmp19) {
                                        if (4194304 !== tmp19) {
                                          if (8388608 !== tmp19) {
                                            if (16777216 !== tmp19) {
                                              if (33554432 !== tmp19) {
                                                if (67108864 === tmp19) {
                                                  num55 = 67108864;
                                                } else if (134217728 === tmp19) {
                                                  num55 = 134217728;
                                                } else if (268435456 === tmp19) {
                                                  num55 = 268435456;
                                                } else if (536870912 === tmp19) {
                                                  num55 = 536870912;
                                                } else {
                                                  num55 = 0;
                                                  if (1073741824 !== tmp19) {
                                                    num55 = tmp17;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        num55 = 62914560 & tmp17;
                                      }
                                    }
                                  }
                                }
                                num55 = 3932160 & tmp17;
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
            num55 = 261888 & tmp17;
          }
        }
        let num14 = num55;
      } else {
        num14 = 0;
        if (!arg2) {
          if (0 === (tmp12 & ~warmLanes)) {
            num14 = 0;
          } else {
            let num50 = 42 & tmp4;
            if (0 === num50) {
              if (1 === (tmp4 & -tmp4)) {
                num50 = 1;
              } else if (2 === tmp18) {
                num50 = 2;
              } else if (4 === tmp18) {
                num50 = 4;
              } else if (8 === tmp18) {
                num50 = 8;
              } else if (16 === tmp18) {
                num50 = 16;
              } else if (32 === tmp18) {
                num50 = 32;
              } else if (64 === tmp18) {
                num50 = 64;
              } else if (128 === tmp18) {
                num50 = 128;
              } else {
                if (256 !== tmp18) {
                  if (512 !== tmp18) {
                    if (1024 !== tmp18) {
                      if (2048 !== tmp18) {
                        if (4096 !== tmp18) {
                          if (8192 !== tmp18) {
                            if (16384 !== tmp18) {
                              if (32768 !== tmp18) {
                                if (65536 !== tmp18) {
                                  if (131072 !== tmp18) {
                                    if (262144 !== tmp18) {
                                      if (524288 !== tmp18) {
                                        if (1048576 !== tmp18) {
                                          if (2097152 !== tmp18) {
                                            if (4194304 !== tmp18) {
                                              if (8388608 !== tmp18) {
                                                if (16777216 !== tmp18) {
                                                  if (33554432 !== tmp18) {
                                                    if (67108864 === tmp18) {
                                                      num50 = 67108864;
                                                    } else if (134217728 === tmp18) {
                                                      num50 = 134217728;
                                                    } else {
                                                      if (268435456 === tmp18) {
                                                        num50 = 268435456;
                                                      } else if (536870912 !== tmp18) {
                                                        num50 = 0;
                                                        if (1073741824 !== tmp18) {
                                                          num50 = tmp4;
                                                        }
                                                      }
                                                      num50 = 536870912;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            num50 = 62914560 & tmp4;
                                          }
                                        }
                                      }
                                    }
                                    num50 = 3932160 & tmp4;
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
                num50 = 261888 & tmp4;
              }
            }
          }
        }
      }
    } else if (0 !== (pendingLanes & ~suspendedLanes)) {
      let num29 = 42 & tmp13;
      if (0 === num29) {
        if (1 === (tmp13 & -tmp13)) {
          num29 = 1;
        } else if (2 === tmp16) {
          num29 = 2;
        } else if (4 === tmp16) {
          num29 = 4;
        } else if (8 === tmp16) {
          num29 = 8;
        } else if (16 === tmp16) {
          num29 = 16;
        } else if (32 === tmp16) {
          num29 = 32;
        } else if (64 === tmp16) {
          num29 = 64;
        } else if (128 === tmp16) {
          num29 = 128;
        } else {
          if (256 !== tmp16) {
            if (512 !== tmp16) {
              if (1024 !== tmp16) {
                if (2048 !== tmp16) {
                  if (4096 !== tmp16) {
                    if (8192 !== tmp16) {
                      if (16384 !== tmp16) {
                        if (32768 !== tmp16) {
                          if (65536 !== tmp16) {
                            if (131072 !== tmp16) {
                              if (262144 !== tmp16) {
                                if (524288 !== tmp16) {
                                  if (1048576 !== tmp16) {
                                    if (2097152 !== tmp16) {
                                      if (4194304 !== tmp16) {
                                        if (8388608 !== tmp16) {
                                          if (16777216 !== tmp16) {
                                            if (33554432 !== tmp16) {
                                              if (67108864 === tmp16) {
                                                num29 = 67108864;
                                              } else if (134217728 === tmp16) {
                                                num29 = 134217728;
                                              } else if (268435456 === tmp16) {
                                                num29 = 268435456;
                                              } else if (536870912 === tmp16) {
                                                num29 = 536870912;
                                              } else {
                                                num29 = 0;
                                                if (1073741824 !== tmp16) {
                                                  num29 = tmp13;
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      num29 = 62914560 & tmp13;
                                    }
                                  }
                                }
                              }
                              num29 = 3932160 & tmp13;
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
          num29 = 261888 & tmp13;
        }
      }
      num14 = num29;
    } else if (0 !== pingedLanes) {
      let num16 = 42 & pingedLanes;
      if (0 === num16) {
        if (1 === (pingedLanes & -pingedLanes)) {
          num16 = 1;
        } else if (2 === tmp15) {
          num16 = 2;
        } else if (4 === tmp15) {
          num16 = 4;
        } else if (8 === tmp15) {
          num16 = 8;
        } else if (16 === tmp15) {
          num16 = 16;
        } else if (32 === tmp15) {
          num16 = 32;
        } else if (64 === tmp15) {
          num16 = 64;
        } else if (128 === tmp15) {
          num16 = 128;
        } else {
          if (256 !== tmp15) {
            if (512 !== tmp15) {
              if (1024 !== tmp15) {
                if (2048 !== tmp15) {
                  if (4096 !== tmp15) {
                    if (8192 !== tmp15) {
                      if (16384 !== tmp15) {
                        if (32768 !== tmp15) {
                          if (65536 !== tmp15) {
                            if (131072 !== tmp15) {
                              if (262144 !== tmp15) {
                                if (524288 !== tmp15) {
                                  if (1048576 !== tmp15) {
                                    if (2097152 !== tmp15) {
                                      if (4194304 !== tmp15) {
                                        if (8388608 !== tmp15) {
                                          if (16777216 !== tmp15) {
                                            if (33554432 !== tmp15) {
                                              if (67108864 === tmp15) {
                                                num16 = 67108864;
                                              } else if (134217728 === tmp15) {
                                                num16 = 134217728;
                                              } else if (268435456 === tmp15) {
                                                num16 = 268435456;
                                              } else if (536870912 === tmp15) {
                                                num16 = 536870912;
                                              } else {
                                                num16 = 0;
                                                if (1073741824 !== tmp15) {
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
        if (0 === (pendingLanes & ~warmLanes)) {
          num14 = 0;
        } else {
          let num10 = 42 & tmp;
          if (0 === num10) {
            if (1 === (tmp & -tmp)) {
              num10 = 1;
            } else if (2 === tmp14) {
              num10 = 2;
            } else if (4 === tmp14) {
              num10 = 4;
            } else if (8 === tmp14) {
              num10 = 8;
            } else if (16 === tmp14) {
              num10 = 16;
            } else if (32 === tmp14) {
              num10 = 32;
            } else if (64 === tmp14) {
              num10 = 64;
            } else if (128 === tmp14) {
              num10 = 128;
            } else {
              if (256 !== tmp14) {
                if (512 !== tmp14) {
                  if (1024 !== tmp14) {
                    if (2048 !== tmp14) {
                      if (4096 !== tmp14) {
                        if (8192 !== tmp14) {
                          if (16384 !== tmp14) {
                            if (32768 !== tmp14) {
                              if (65536 !== tmp14) {
                                if (131072 !== tmp14) {
                                  if (262144 !== tmp14) {
                                    if (524288 !== tmp14) {
                                      if (1048576 !== tmp14) {
                                        if (2097152 !== tmp14) {
                                          if (4194304 !== tmp14) {
                                            if (8388608 !== tmp14) {
                                              if (16777216 !== tmp14) {
                                                if (33554432 !== tmp14) {
                                                  if (67108864 === tmp14) {
                                                    num10 = 67108864;
                                                  } else if (134217728 === tmp14) {
                                                    num10 = 134217728;
                                                  } else {
                                                    if (268435456 === tmp14) {
                                                      num10 = 268435456;
                                                    } else if (536870912 !== tmp14) {
                                                      num10 = 0;
                                                      if (1073741824 !== tmp14) {
                                                        num10 = tmp;
                                                      }
                                                    }
                                                    num10 = 536870912;
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
        }
      }
    }
    let num80 = 0;
    if (0 !== num14) {
      let tmp8 = num14;
      if (0 !== c280) {
        tmp8 = num14;
        if (c280 !== num14) {
          tmp8 = num14;
          if (!(c280 & suspendedLanes)) {
            if ((num14 & -num14) >= (c280 & -c280)) {
              tmp8 = c280;
            } else {
              tmp8 = num14;
              if (32 === tmp9) {
                tmp8 = num14;
              }
            }
          }
        }
      }
      num80 = tmp8;
    }
    return num80;
  }
}
function checkIfRootIsPrerendering(pendingLanes) {
  return !(pendingLanes.pendingLanes & ~pendingLanes.suspendedLanes & ~pendingLanes.pingedLanes & arg1);
}
function lanesToEventPriority(c303) {
  let num = 2;
  if (2 < (c303 & -c303)) {
    let num2 = 8;
    if (8 < tmp) {
      let num4 = 268435456;
      if (134217727 & tmp) {
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
        let obj = { value: null, source: null, stack: null };
        obj[0] = value;
        obj[1] = current;
        obj[2] = getStackByFiberInDevAndProd(current);
        const result = weakMap.set(value, obj);
        value = obj;
      }
      return value;
    }
  }
  obj = { value, source: current, stack: getStackByFiberInDevAndProd(current) };
  return obj;
}
function pushHostContainer(current, containerInfo) {
  const sum = sum3 + 1;
  sum3 = sum;
  table[sum] = closure_95.current;
  closure_95.current = containerInfo;
  const sum1 = sum3 + 1;
  sum3 = sum1;
  table[sum1] = closure_94.current;
  closure_94.current = current;
  const sum2 = sum3 + 1;
  sum3 = sum2;
  table[sum2] = closure_93.current;
  closure_93.current = null;
  let tmp7 = sum3;
  if (0 <= sum3) {
    closure_93.current = table[sum3];
    table[sum3] = null;
    const diff = sum3 - 1;
    sum3 = diff;
    tmp7 = diff;
  }
  sum3 = tmp7 + 1;
  table[sum3] = closure_93.current;
  closure_93.current = closure_361;
}
function popHostContainer() {
  let tmp3 = closure_86;
  if (0 <= closure_86) {
    tmp.current = dependencyMap3[tmp2];
    dependencyMap3[closure_86] = null;
    const diff = closure_86 - 1;
    closure_86 = diff;
    tmp3 = diff;
  }
  let tmp10 = tmp3;
  if (0 <= tmp3) {
    tmp9.current = dependencyMap3[tmp3];
    dependencyMap3[closure_86] = null;
    const diff1 = closure_86 - 1;
    closure_86 = diff1;
    tmp10 = diff1;
  }
  if (0 <= tmp10) {
    tmp16.current = dependencyMap3[tmp10];
    dependencyMap3[closure_86] = null;
    closure_86 = closure_86 - 1;
  }
}
function popHostContext(pendingProps) {
  if (closure_94.current === pendingProps) {
    let tmp4 = closure_86;
    if (0 <= closure_86) {
      tmp2.current = dependencyMap3[tmp3];
      dependencyMap3[closure_86] = null;
      const diff = closure_86 - 1;
      closure_86 = diff;
      tmp4 = diff;
    }
    if (0 <= tmp4) {
      tmp.current = dependencyMap3[tmp4];
      dependencyMap3[closure_86] = null;
      closure_86 = closure_86 - 1;
    }
  }
  if (closure_96.current === pendingProps) {
    if (0 <= closure_86) {
      tmp14.current = dependencyMap3[tmp15];
      dependencyMap3[closure_86] = null;
      closure_86 = closure_86 - 1;
    }
    closure_366._currentValue2 = null;
  }
}
function propagateContextChanges(child, items, c286, arg3) {
  child = child.child;
  if (null !== child) {
    child.return = child;
  }
  if (null !== child) {
    while (true) {
      let dependencies = child.dependencies;
      if (null !== dependencies) {
        let child2 = child.child;
        let iter = dependencies.firstContext;
        child = child2;
        if (null !== iter) {
          while (true) {
            let num = 0;
            if (0 < items.length) {
              while (iter.context !== items[num]) {
                num = num + 1;
              }
              child.lanes = child.lanes | c286;
              let alternate2 = child.alternate;
              if (null !== alternate2) {
                alternate2.lanes = alternate2.lanes | c286;
              }
              let _return2 = child.return;
              if (null !== _return2) {
                while (true) {
                  let alternate3 = _return2.alternate;
                  if ((_return2.childLanes & c286) !== c286) {
                    _return2.childLanes = _return2.childLanes | c286;
                    if (null !== alternate3) {
                      alternate3.childLanes = alternate3.childLanes | c286;
                    }
                  } else {
                    let tmp10 = null !== alternate3 && (alternate3.childLanes & c286) !== c286;
                    if (tmp10) {
                      alternate3.childLanes = alternate3.childLanes | c286;
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
              child = child2;
              if (!arg3) {
                child = null;
              }
            }
            iter = iter.next;
            child = child2;
          }
        }
      } else if (18 === child.tag) {
        let _return = child.return;
        if (null === _return) {
          break;
        } else {
          _return.lanes = _return.lanes | c286;
          let alternate4 = _return.alternate;
          if (null !== alternate4) {
            alternate4.lanes = alternate4.lanes | c286;
          }
          child = null;
          if (null !== _return) {
            while (true) {
              let alternate = _return.alternate;
              if ((_return.childLanes & c286) !== c286) {
                _return.childLanes = _return.childLanes | c286;
                if (null !== alternate) {
                  alternate.childLanes = alternate.childLanes | c286;
                }
              } else {
                let tmp5 = null !== alternate && (alternate.childLanes & c286) !== c286;
                if (tmp5) {
                  alternate.childLanes = alternate.childLanes | c286;
                }
              }
              child = null;
              if (_return === child) {
                break;
              } else {
                _return = _return.return;
                child = null;
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
        child = child.child;
      }
      if (null !== child) {
        child.return = child;
        let tmp11 = child;
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
function propagateParentContextChanges(arg0, flags, c286, arg3) {
  let flag = false;
  let tmp = null;
  let tmp2 = null;
  let _return = flags;
  if (null !== flags) {
    while (true) {
      let flag2 = flag;
      if (!flag) {
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
          let _Error2 = Error;
          throw Error("Should have a current fiber. This is a bug in React.");
        } else {
          let iter = alternate.memoizedProps;
          let tmp6 = tmp;
          if (null !== iter) {
            let type = _return.type;
            tmp6 = tmp;
            if (!is(_return.pendingProps.value, iter.value)) {
              if (null !== tmp) {
                let arr = tmp.push(type);
                let items = tmp;
              } else {
                items = [type];
              }
            }
          }
        }
      } else {
        tmp6 = tmp;
        if (_return === closure_96.current) {
          let alternate2 = _return.alternate;
          if (null === alternate2) {
            let _Error = Error;
            throw Error("Should have a current fiber. This is a bug in React.");
          } else {
            tmp6 = tmp;
            if (alternate2.memoizedState.memoizedState !== _return.memoizedState.memoizedState) {
              if (null !== tmp) {
                arr = tmp.push(closure_366);
                let items1 = tmp;
              } else {
                items1 = [closure_366];
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
    propagateContextChanges(flags, tmp2, c286, arg3);
  }
  flags.flags = flags.flags | 262144;
}
function releaseCache(cache) {
  const _require = cache;
  cache.refCount = cache.refCount - 1;
  if (0 === cache.refCount) {
    const result = require("00287_peek.js").unstable_scheduleCallback(require("00287_peek.js").unstable_NormalPriority, () => {
      const controller = pooledCache.controller;
      controller.abort();
    });
    const obj = peek;
  }
}
function noop() {

}
function ensureRootIsScheduled(next) {
  let tmp = next !== closure_111;
  if (tmp) {
    tmp = null === next.next;
  }
  if (tmp) {
    if (null === closure_111) {
      closure_111 = next;
      closure_110 = next;
    } else {
      tmp3.next = next;
      closure_111 = next;
    }
  }
  c113 = true;
  if (!c112) {
    c112 = true;
    if (prop) {
      _queueMicrotask(() => {
        if (6 & closure_277) {
          const result = callback(287).unstable_scheduleCallback(callback(287).unstable_ImmediatePriority, closure_118);
          const obj = callback(287);
        } else {
          callback2();
        }
      });
    } else {
      const result = peek.unstable_scheduleCallback(peek.unstable_ImmediatePriority, processRootScheduleInImmediateTask);
    }
  }
}
function flushSyncWorkAcrossRoots_impl(arg0, arg1) {
  if (!c114) {
    if (c113) {
      c114 = true;
      while (true) {
        let iter = c110;
        let flag3 = false;
        let flag4 = false;
        if (null !== c110) {
          while (true) {
            if (!arg1) {
              {
                let num9 = 0;
                if (iter === c278) {
                  num9 = c280;
                }
                let tmp6 = null !== iter.cancelPendingCommit || -1 !== iter.timeoutHandle;
                let tmp24Result = getNextLanes(iter, num9, tmp6);
                let tmp8 = 3 & tmp24Result;
                let tmp9 = !tmp8;
                if (tmp8) {
                  tmp9 = !(iter.pendingLanes & ~iter.suspendedLanes & ~iter.pingedLanes & tmp24Result);
                }
                let flag5 = flag3;
                if (!tmp9) {
                  let tmp11 = flushMutationEffects();
                  let tmp13 = flushLayoutEffects();
                  let tmp15 = flushSpawnedWork();
                  flag5 = true;
                  if (!flushPassiveEffects()) {
                    let tmp18 = performWorkOnRoot(iter, tmp24Result, true);
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
            continue;
          }
          ({ suspendedLanes, pingedLanes } = iter);
          let tmp21 = (1 << 31 - clz32Fallback(tmp3) + 1) - 1 & (tmp19 & ~suspendedLanes & ~pingedLanes);
          let tmp22 = 201326741 & tmp21;
          if (tmp22) {
          }
        }
        if (flag4) {
          continue;
        } else {
          c114 = false;
        }
      }
    }
  }
}
function processRootScheduleInImmediateTask() {
  processRootScheduleInMicrotask();
}
function processRootScheduleInMicrotask() {
  let next;
  c112 = false;
  c113 = false;
  peek;
  let iter = next;
  let tmp3 = null;
  if (null !== next) {
    do {
      next = iter.next;
      let tmp5 = scheduleTaskForRootDuringMicrotask(iter, tmp2);
      if (0 === tmp5) {
        iter.next = null;
        if (null !== tmp3) {
          tmp3.next = next;
        }
        let tmp8 = tmp3;
        if (null === next) {
          c111 = tmp3;
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
  let tmp10 = 0 !== c300;
  if (tmp10) {
    tmp10 = 5 !== tmp9;
  }
  if (!tmp10) {
    flushSyncWorkAcrossRoots_impl(0, false);
  }
  if (0 !== c115) {
    c115 = 0;
  }
}
function scheduleTaskForRootDuringMicrotask(iter, arg1) {
  let tmp6;
  const expirationTimes = iter.expirationTimes;
  let tmp3 = -62914561 & iter.pendingLanes;
  if (0 < tmp3) {
    while (true) {
      let diff = 31 - clz32Fallback(tmp3);
      tmp6 = 1 << diff;
      let tmp7 = expirationTimes[diff];
      if (-1 === tmp7) {
        let tmp9 = tmp6 & tmp && !(tmp6 & tmp2);
        if (!tmp9) {
          break;
        }
      } else if (tmp7 <= arg1) {
        iter.expiredLanes = iter.expiredLanes | tmp6;
      }
      tmp3 = tmp3 & ~tmp6;
    }
    if (1 !== tmp6) {
      if (2 !== tmp6) {
        if (4 !== tmp6) {
          if (8 !== tmp6) {
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
                                              let num = -1;
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
  let num2 = 0;
  if (iter === c278) {
    num2 = c280;
  }
  const tmp10Result = getNextLanes(iter, num2, null !== iter.cancelPendingCommit || -1 !== iter.timeoutHandle);
  const callbackNode = iter.callbackNode;
  if (0 !== tmp10Result) {
    if (!tmp11) {
      if (null === iter.cancelPendingCommit) {
        if (3 & tmp10Result) {
          if (iter.pendingLanes & ~iter.suspendedLanes & ~iter.pingedLanes & tmp10Result) {
            if (null !== callbackNode) {
              const result = peek.unstable_cancelCallback(callbackNode);
            }
            iter.callbackPriority = 2;
            iter.callbackNode = null;
            return 2;
          }
        }
        if ((tmp10Result & -tmp10Result) === iter.callbackPriority) {
          return tmp18;
        } else {
          if (null !== callbackNode) {
            const result1 = peek.unstable_cancelCallback(callbackNode);
          }
          let num3 = 2;
          if (2 < (tmp10Result & -tmp10Result)) {
            let num4 = 8;
            if (8 < tmp22) {
              let num6 = 268435456;
              if (134217727 & tmp22) {
                num6 = 32;
              }
              num4 = num6;
            }
            num3 = num4;
          }
          if (2 !== num3) {
            if (8 !== num3) {
              if (32 !== num3) {
                if (268435456 === num3) {
                  let tmp23 = require;
                  let unstable_UserBlockingPriority = peek.unstable_IdlePriority;
                }
              }
              unstable_UserBlockingPriority = peek.unstable_NormalPriority;
              tmp23 = require;
            }
            const bindResult = performWorkOnRootViaSchedulerTask.bind(null, iter);
            iter.callbackPriority = tmp18;
            iter.callbackNode = tmp23(287).unstable_scheduleCallback(unstable_UserBlockingPriority, bindResult);
            return tmp18;
          }
          unstable_UserBlockingPriority = peek.unstable_UserBlockingPriority;
          tmp23 = require;
        }
      }
    }
  }
  if (null !== callbackNode) {
    const result2 = peek.unstable_cancelCallback(callbackNode);
  }
  iter.callbackNode = null;
  iter.callbackPriority = 0;
  return 0;
}
function performWorkOnRootViaSchedulerTask(callbackNode) {
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
  let tmp6 = null !== callbackNode.cancelPendingCommit;
  if (!tmp6) {
    tmp6 = -1 !== callbackNode.timeoutHandle;
  }
  const tmp5Result = getNextLanes(callbackNode, num2, tmp6);
  let tmp8 = null;
  if (0 !== tmp5Result) {
    performWorkOnRoot(callbackNode, tmp5Result, arg1);
    scheduleTaskForRootDuringMicrotask(callbackNode, peek.unstable_now());
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
  const diff = c123 - 1;
  c123 = diff;
  if (0 === diff) {
    if (null !== _null) {
      if (null !== c125) {
        tmp4.status = "fulfilled";
      }
      _null = null;
      c124 = 0;
      c125 = null;
      let num2 = 0;
      if (0 < _null.length) {
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
                  let call = hasOwnProperty.call;
                  if (!(typeof call === "unknown" ? hasOwnProperty(tmp) : call(obj2, tmp))) {
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
  let tmp = "fulfilled" === status;
  if (!tmp) {
    tmp = "rejected" === status;
  }
  return tmp;
}
function trackUsedThenable(items, items2, closure_171) {
  closure_0 = items2;
  if (undefined === items[closure_171]) {
    items.push(items2);
    let iter = items2;
  } else {
    iter = items2;
    if (tmp !== items2) {
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
    throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");
  } else {
    if (typeof iter.status === "string") {
      iter.then(noop, noop);
    } else {
      if (null !== _null6) {
        if (100 < _null6.shellSuspendCounter) {
          const _Error = Error;
          throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");
        }
      }
      iter.status = "pending";
      iter.then((result) => {
        if ("pending" === closure_0.status) {
          closure_0.status = "fulfilled";
          closure_0.value = result;
        }
      }, (reason) => {
        if ("pending" === closure_0.status) {
          closure_0.status = "rejected";
          closure_0.reason = reason;
        }
      });
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
      throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");
    } else {
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
          throw closure_130;
        }
      }
    }
    throw promise;
  }
}
function finishQueueingConcurrentUpdates() {
  let tmp6;
  c143 = 0;
  c144 = 0;
  let num = 0;
  if (0 < c143) {
    while (true) {
      let sum = num + 1;
      dependencyMap4[num] = null;
      let sum1 = sum + 1;
      dependencyMap4[sum] = null;
      tmp6 = dependencyMap4[sum1];
      let sum2 = sum1 + 1;
      dependencyMap4[sum1] = null;
      let tmp8 = dependencyMap4[sum2];
      dependencyMap4[sum2] = null;
      if (null !== dependencyMap4[sum]) {
        if (null !== tmp6) {
          break;
        }
      }
      if (0 !== tmp8) {
        let tmp10 = markUpdateLaneFromFiberToRoot(dependencyMap4[num], tmp6, tmp8);
      }
      num = sum2 + 1;
    }
    if (null === tmp4.pending) {
      tmp6.next = tmp6;
    } else {
      tmp6.next = iter.next;
      iter.next = tmp6;
    }
    tmp4.pending = tmp6;
  }
}
function enqueueUpdate$1(lanes, lastRenderedReducer, arg2, arg3) {
  closure_143 = tmp + 1;
  closure_142[+closure_143] = lanes;
  closure_143 = tmp2 + 1;
  closure_142[+closure_143] = lastRenderedReducer;
  closure_143 = tmp3 + 1;
  closure_142[+closure_143] = arg2;
  closure_143 = tmp4 + 1;
  closure_142[+closure_143] = 0;
  closure_144 = closure_144 | 0;
  lanes.lanes = lanes.lanes | 0;
  const alternate = lanes.alternate;
  if (null !== alternate) {
    alternate.lanes = alternate.lanes | 0;
  }
}
function enqueueConcurrentHookUpdate(lanes, pending, arg2, lane) {
  let tmp = lanes;
  closure_143 = tmp2 + 1;
  closure_142[+closure_143] = lanes;
  closure_143 = tmp3 + 1;
  closure_142[+closure_143] = pending;
  closure_143 = tmp4 + 1;
  closure_142[+closure_143] = arg2;
  closure_143 = tmp5 + 1;
  closure_142[+closure_143] = lane;
  closure_144 = closure_144 | lane;
  lanes.lanes = lanes.lanes | lane;
  const alternate = lanes.alternate;
  if (null !== alternate) {
    alternate.lanes = alternate.lanes | lane;
  }
  if (50 < c307) {
    c307 = 0;
    c308 = null;
    const _Error = Error;
    throw Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
  } else {
    let _return = tmp.return;
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
  closure_143 = tmp2 + 1;
  closure_142[+closure_143] = lanes;
  closure_143 = tmp3 + 1;
  closure_142[+closure_143] = null;
  closure_143 = tmp4 + 1;
  closure_142[+closure_143] = null;
  closure_143 = tmp5 + 1;
  closure_142[+closure_143] = retryLane;
  closure_144 = closure_144 | retryLane;
  lanes.lanes = lanes.lanes | retryLane;
  const alternate = lanes.alternate;
  if (null !== alternate) {
    alternate.lanes = alternate.lanes | retryLane;
  }
  if (50 < c307) {
    c307 = 0;
    c308 = null;
    const _Error = Error;
    throw Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
  } else {
    let _return = tmp.return;
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
function markUpdateLaneFromFiberToRoot(closure_142, arg1, c291) {
  let tmp = closure_142;
  closure_142.lanes = closure_142.lanes | c291;
  const alternate = closure_142.alternate;
  if (null !== alternate) {
    alternate.lanes = alternate.lanes | c291;
  }
  let _return = tmp.return;
  let flag = false;
  let flag2 = false;
  if (null !== _return) {
    do {
      _return.childLanes = _return.childLanes | c291;
      let alternate2 = _return.alternate;
      let flag3 = flag;
      let tmp2 = _return;
      if (null !== alternate2) {
        alternate2.childLanes = alternate2.childLanes | c291;
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
      let diff = 31 - clz32Fallback(c291);
      const hiddenUpdates = stateNode2.hiddenUpdates;
      let arr = hiddenUpdates[diff];
      if (null === arr) {
        const items = [arg1];
        hiddenUpdates[diff] = items;
      } else {
        arr = arr.push(arg1);
      }
      diff = 536870912 | c291;
      arg1.lane = diff;
    }
  }
  return tmp5;
}
function enqueueUpdate(_reactInternals, next, c291) {
  const updateQueue = _reactInternals.updateQueue;
  if (null === updateQueue) {
    return null;
  } else {
    const shared = updateQueue.shared;
    if (2 & c277) {
      if (null === shared.pending) {
        next.next = next;
      } else {
        next.next = iter.next;
        iter.next = next;
      }
      shared.pending = next;
      if (50 < c307) {
        c307 = 0;
        c308 = null;
        const _Error2 = Error;
        throw Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
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
        markUpdateLaneFromFiberToRoot(_reactInternals, null, c291);
        return stateNode;
      }
    } else {
      closure_143 = tmp3 + 1;
      closure_142[+closure_143] = _reactInternals;
      closure_143 = tmp5 + 1;
      closure_142[+closure_143] = shared;
      closure_143 = tmp7 + 1;
      closure_142[+closure_143] = next;
      closure_143 = tmp9 + 1;
      closure_142[+closure_143] = c291;
      closure_144 = closure_144 | c291;
      _reactInternals.lanes = _reactInternals.lanes | c291;
      const alternate = _reactInternals.alternate;
      if (null !== alternate) {
        alternate.lanes = alternate.lanes | c291;
      }
      if (50 < c307) {
        c307 = 0;
        c308 = null;
        const _Error = Error;
        throw Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      } else {
        let _return = _reactInternals.return;
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
  let tmp7;
  ({ updateQueue, alternate } = arg0);
  if (null !== alternate) {
    const updateQueue2 = alternate.updateQueue;
    if (updateQueue === updateQueue2) {
      let iter = updateQueue.firstBaseUpdate;
      let tmp = null;
      let tmp2 = next;
      let tmp3 = null;
      if (null !== iter) {
        do {
          let obj = { lane: null, tag: null, payload: null, callback: null, next: null };
          ({ lane: obj[0], tag: obj[1], payload: obj[2] } = iter);
          tmp7 = obj;
          if (null !== tmp) {
            tmp.next = obj;
            tmp7 = tmp3;
          }
          iter = iter.next;
          tmp = obj;
          tmp3 = tmp7;
        } while (null !== iter);
        obj.next = next;
        tmp2 = tmp7;
      }
      obj = { baseState: null, firstBaseUpdate: null, lastBaseUpdate: null, shared: null, callbacks: null };
      obj[0] = updateQueue2.baseState;
      obj[1] = tmp2;
      obj[2] = next;
      ({ shared: obj2[3], callbacks: obj2[4] } = updateQueue2);
      arg0.updateQueue = obj;
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
function processUpdateQueue(updateQueue, pendingProps7, stateNode, c286) {
  let payload;
  c153 = false;
  updateQueue = updateQueue.updateQueue;
  c150 = false;
  ({ firstBaseUpdate, lastBaseUpdate } = updateQueue);
  let tmp = firstBaseUpdate;
  if (null !== updateQueue.shared.pending) {
    updateQueue.shared.pending = null;
    const next = iter.next;
    iter.next = null;
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
      if (lastBaseUpdate2 !== iter) {
        if (null === lastBaseUpdate2) {
          updateQueue2.firstBaseUpdate = next;
        } else {
          lastBaseUpdate2.next = next;
        }
        updateQueue2.lastBaseUpdate = iter;
      }
    }
  }
  if (null !== tmp) {
    let baseState = updateQueue.baseState;
    let tmp27 = null;
    let tmp28 = null;
    let tmp29 = null;
    let iter2 = tmp;
    let num = 0;
    while (true) {
      let tmp4 = -536870913 & iter2.lane;
      let tmp5 = tmp4 !== iter2.lane;
      if (tmp5) {
        let tmp12 = (c280 & tmp4) === tmp4;
      } else {
        tmp12 = (c286 & tmp4) === tmp4;
      }
      if (tmp12) {
        let tmp18 = 0 !== tmp4;
        if (0 !== tmp4) {
          tmp18 = tmp4 === c124;
        }
        if (tmp18) {
          c153 = true;
        }
        let tmp20 = tmp27;
        if (null !== tmp27) {
          let obj = { lane: 0, tag: null, payload: null, callback: null, next: null };
          ({ tag: obj2[1], payload: obj2[2] } = iter2);
          tmp27.next = obj;
          tmp20 = obj;
        }
        let tag = iter2.tag;
        if (1 === tag) {
          let payload2 = iter2.payload;
          let tmp21 = payload2;
          if (typeof payload2 === "function") {
            let call2 = payload2.call;
            let tmp25 = typeof call2 === "unknown" ? payload2(baseState, pendingProps7) : call2(stateNode, baseState, pendingProps7);
          }
        } else {
          if (3 === tag) {
            updateQueue.flags = -65537 & updateQueue.flags | 128;
          } else if (0 !== tag) {
            tmp21 = baseState;
            if (2 === tag) {
              c150 = true;
              tmp21 = baseState;
            }
          }
          payload = iter2.payload;
          if (typeof payload === "function") {
            break;
          } else {
            tmp21 = baseState;
            if (null != payload) {
              tmp21 = assign({}, baseState, payload);
            }
          }
        }
        let callback = iter2.callback;
        let tmp17 = tmp21;
        obj = tmp20;
        let tmp14 = tmp28;
        let tmp15 = tmp29;
        let tmp16 = num;
        if (null !== callback) {
          updateQueue.flags = updateQueue.flags | 64;
          if (tmp5) {
            updateQueue.flags = updateQueue.flags | 8192;
          }
          let callbacks = updateQueue.callbacks;
          if (null === callbacks) {
            let items = [callback];
            updateQueue.callbacks = items;
            tmp17 = tmp21;
            obj = tmp20;
            tmp14 = tmp28;
            tmp15 = tmp29;
            tmp16 = num;
          } else {
            let arr = callbacks.push(callback);
            tmp17 = tmp21;
            obj = tmp20;
            tmp14 = tmp28;
            tmp15 = tmp29;
            tmp16 = num;
          }
        }
      } else {
        obj = { lane: null, tag: null, payload: null, callback: null, next: null };
        obj[0] = tmp4;
        ({ tag: obj[1], payload: obj[2], callback: obj[3] } = iter2);
        tmp14 = obj;
        tmp15 = baseState;
        if (null !== tmp27) {
          tmp27.next = obj;
          tmp14 = tmp28;
          tmp15 = tmp29;
        }
        tmp16 = num | tmp4;
        tmp17 = baseState;
      }
      iter2 = iter2.next;
      baseState = tmp17;
      tmp27 = obj;
      tmp28 = tmp14;
      tmp29 = tmp15;
      num = tmp16;
      if (null !== iter2) {
        continue;
      } else {
        let iter3 = updateQueue.shared.pending;
        if (null === iter3) {
          if (null === obj) {
            tmp15 = tmp17;
          }
          updateQueue.baseState = tmp15;
          updateQueue.firstBaseUpdate = tmp14;
          updateQueue.lastBaseUpdate = obj;
          if (null === tmp) {
            updateQueue.shared.lanes = 0;
          }
          closure_288 = closure_288 | tmp16;
          updateQueue.lanes = tmp16;
          updateQueue.memoizedState = tmp17;
        } else {
          iter2 = iter3.next;
          iter3.next = null;
          updateQueue.lastBaseUpdate = iter3;
          updateQueue.shared.pending = null;
          baseState = tmp17;
          tmp27 = obj;
          tmp28 = tmp14;
          tmp29 = tmp15;
          num = tmp16;
          continue;
        }
      }
      continue;
    }
    const call = payload.call;
    typeof call === "unknown" ? payload(baseState, pendingProps7) : call(stateNode, baseState, pendingProps7);
  }
}
function callCallback(arr, arg1) {
  if (typeof arr !== "function") {
    const _Error = Error;
    throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + arr);
  } else {
    const call = arr.call;
    if (typeof call === "unknown") {
      arr();
    } else {
      call(arg1);
    }
  }
}
function commitCallbacks(updateQueue, stateNode) {
  const callbacks = updateQueue.callbacks;
  if (null !== callbacks) {
    updateQueue.callbacks = null;
    let num = 0;
    if (0 < callbacks.length) {
      while (typeof callbacks[num] === "function") {
        let call = tmp.call;
        if (typeof call === "unknown") {
          let tmpResult = tmp();
        } else {
          let callResult = call(stateNode);
        }
        num = num + 1;
      }
      const _Error = Error;
      throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + callbacks[num]);
    }
  }
}
function pushOffscreenSuspenseHandler(tag) {
  if (22 === tag.tag) {
    const sum = sum3 + 1;
    sum3 = sum;
    ({ current: closure_85[tmp10], current: closure_162.current } = closure_162);
    const sum1 = sum3 + 1;
    sum3 = sum1;
    closure_85[sum1] = closure_159.current;
    closure_159.current = tag;
    if (null === closure_160) {
      closure_160 = tag;
    }
  } else {
    const sum2 = sum3 + 1;
    sum3 = sum2;
    ({ current: closure_85[tmp3], current: closure_162.current } = closure_162);
    sum3 = sum3 + 1;
    ({ current: closure_85[tmp7], current: closure_159.current } = closure_159);
  }
}
function findFirstSuspended(alternate4) {
  let tmp = alternate4;
  if (null !== alternate4) {
    while (true) {
      if (13 === tmp.tag) {
        let memoizedState = tmp.memoizedState;
        if (null !== memoizedState) {
          if (null === memoizedState.dehydrated) {
            return tmp;
          } else {
            let _Error = Error;
            throw Error("The current renderer does not support hydration. This error is likely caused by a bug in React. Please file an issue.");
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
              let _return = tmp3.return;
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
          let sum = num3 + 1;
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
function renderWithHooks(memoizedState, updateQueue, TransitionAwareHostComponent, memoizedProps, ref, c286) {
  closure_164 = c286;
  closure_165 = updateQueue;
  updateQueue.memoizedState = null;
  updateQueue.updateQueue = null;
  updateQueue.lanes = 0;
  if (null !== memoizedState) {
    if (null !== memoizedState.memoizedState) {
      let tmp2 = obj9;
    }
    tmp.H = tmp2;
    let tmp6 = TransitionAwareHostComponent(memoizedProps, ref);
    c170 = false;
    if (c169) {
      closure_165 = updateQueue;
      let num3 = 0;
      while (true) {
        if (c169) {
          c172 = null;
        }
        c171 = 0;
        c169 = false;
        if (25 <= num3) {
          break;
        } else {
          c166 = null;
          c167 = null;
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
          __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = obj10;
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
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = obj8;
  c164 = 0;
  c165 = null;
  const _null3 = null;
  c167 = null;
  c168 = false;
  c171 = 0;
  c172 = null;
  if (tmp) {
    const _Error = Error;
    throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
  } else {
    if (!tmp3) {
      dependencies = dependencies.dependencies;
      let tmp4 = null !== dependencies;
      if (tmp4) {
        let iter = dependencies.firstContext;
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
    tmp3 = null === dependencies || c222;
  }
  tmp = null !== _null3 && null !== _null3.next;
}
function TransitionAwareHostComponent(memoizedProps, ref) {
  const H = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H;
  const first = H.useState()[0];
  let tmp2 = first;
  if (typeof first.then === "function") {
    closure_171 = closure_171 + 1;
    let tmp3 = items;
    if (null === items) {
      items = [];
      tmp3 = items;
    }
    const tmp5 = trackUsedThenable(tmp3, first, closure_171);
    tmp2 = tmp5;
    if (null === (null === _null4 ? _null2.memoizedState : _null4.next)) {
      const alternate = _null2.alternate;
      if (null !== alternate) {
        if (null !== alternate.memoizedState) {
          let tmp7 = obj9;
        }
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = tmp7;
      }
      tmp7 = closure_210;
    }
  }
  let memoizedState = null;
  if (null !== _null3) {
    memoizedState = _null3.memoizedState;
  }
  if (memoizedState !== H.useState()[0]) {
    _null2.flags = _null2.flags | 1024;
  }
  return tmp2;
}
function resetHooksOnUnwind(memoizedState) {
  if (c168) {
    let iter = memoizedState.memoizedState;
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
  c165 = null;
  c166 = null;
  c167 = null;
  c169 = false;
  c171 = 0;
  c172 = null;
}
function mountWorkInProgressHook() {
  const obj = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  if (null === obj) {
    c165.memoizedState = obj;
  } else {
    tmp.next = obj;
  }
  return obj;
}
function updateWorkInProgressHook() {
  if (null === next) {
    const alternate = _null2.alternate;
    let memoizedState = null;
    if (null !== alternate) {
      memoizedState = alternate.memoizedState;
    }
    next = memoizedState;
  } else {
    next = iter.next;
  }
  if (null === obj) {
    let next2 = _null2.memoizedState;
  } else {
    next2 = iter2.next;
  }
  if (null !== next2) {
    obj = next2;
  } else if (null === next) {
    if (null === _null2.alternate) {
      const _Error2 = Error;
      throw Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.");
    } else {
      const _Error = Error;
      throw Error("Rendered more hooks than during the previous render.");
    }
  } else {
    obj = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    obj[0] = next.memoizedState;
    obj[1] = next.baseState;
    obj[2] = next.baseQueue;
    obj[3] = next.queue;
    if (null === obj) {
      _null2.memoizedState = obj;
    } else {
      tmp7.next = obj;
    }
  }
  return obj;
}
function useThenable(items2) {
  closure_171 = closure_171 + 1;
  let tmp2 = items;
  if (null === items) {
    items = [];
    tmp2 = items;
  }
  if (null !== (null === _null4 ? _null2.memoizedState : _null4.next)) {
    return trackUsedThenable(tmp2, items2, tmp);
  } else {
    const alternate = _null2.alternate;
    if (null !== alternate) {
      if (null !== alternate.memoizedState) {
        let tmp5 = obj9;
      }
      tmp4.H = tmp5;
    }
    tmp5 = closure_210;
  }
  tmp = closure_171;
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
  let tmp7;
  queue = queue.queue;
  if (null === queue) {
    const _Error = Error;
    throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");
  } else {
    queue.lastRenderedReducer = basicStateReducer;
    let iter = iter3;
    if (null !== queue.pending) {
      if (null !== iter3) {
        iter3.next = iter4.next;
        iter4.next = iter3.next;
      }
      c166.baseQueue = iter4;
      queue.pending = null;
      iter = iter4;
    }
    const baseState = queue.baseState;
    if (null === iter) {
      queue.memoizedState = baseState;
    } else {
      const next = iter.next;
      let flag2 = false;
      let iter2 = next;
      let tmp3 = null;
      let tmp4 = null;
      let tmp5 = null;
      let tmp6 = baseState;
      while (true) {
        tmp7 = -536870913 & iter2.lane;
        if (tmp7 !== iter2.lane) {
          let tmp15 = (c280 & tmp7) === tmp7;
        } else {
          tmp15 = (c164 & tmp7) === tmp7;
        }
        if (!tmp15) {
          let obj = { lane: null, revertLane: null, gesture: null, action: null, hasEagerState: null, eagerState: null, next: null };
          obj[0] = tmp7;
          ({ revertLane: obj[1], gesture: obj[2], action: obj[3], hasEagerState: obj[4], eagerState: obj[5] } = iter2);
          if (null !== tmp3) {
            tmp3.next = obj;
          }
          _null2.lanes = _null2.lanes | tmp7;
          closure_288 = closure_288 | tmp7;
          let next3 = iter2.next;
        }
        let revertLane = iter2.revertLane;
        if (0 === revertLane) {
          break;
        } else {
          if ((c164 & revertLane) === revertLane) {
            let next2 = iter2.next;
            let flag4 = flag2;
            let tmp28 = next2;
            let tmp29 = tmp3;
            let tmp30 = tmp4;
            let tmp31 = tmp5;
            let tmp32 = tmp6;
            if (revertLane === c124) {
              flag4 = true;
              tmp28 = next2;
              tmp29 = tmp3;
              tmp30 = tmp4;
              tmp31 = tmp5;
              tmp32 = tmp6;
            }
            if (null !== tmp28) {
              flag2 = flag4;
              tmp3 = tmp29;
              tmp4 = tmp30;
              tmp5 = tmp31;
              tmp6 = tmp32;
              iter2 = tmp28;
            }
            let tmp47 = tmp32;
            if (null !== tmp29) {
              tmp29.next = tmp30;
              tmp47 = tmp31;
            }
            if (!is(tmp32, queue.memoizedState)) {
              c222 = true;
              if (flag4) {
                if (null !== c125) {
                  throw c125;
                }
              }
            }
            queue.memoizedState = tmp32;
            queue.baseState = tmp47;
            queue.baseQueue = tmp29;
            queue.lastRenderedState = tmp32;
          } else {
            obj = { lane: 0, revertLane: null, gesture: null, action: null, hasEagerState: null, eagerState: null, next: null };
            ({ revertLane: obj2[1], action: obj2[3], hasEagerState: obj2[4], eagerState: obj2[5] } = iter2);
            if (null !== tmp3) {
              tmp3.next = obj;
            }
            _null2.lanes = _null2.lanes | revertLane;
            closure_288 = closure_288 | revertLane;
            let flag3 = flag2;
          }
          let action = iter2.action;
          if (c170) {
            let tmp36 = basicStateReducer(tmp6, action);
          }
          let tmp37 = iter2.hasEagerState ? iter2.eagerState : basicStateReducer(tmp6, action);
        }
      }
      let tmp33 = tmp3;
      if (null !== tmp3) {
        obj = { lane: 0, revertLane: 0, gesture: null, action: null, hasEagerState: null, eagerState: null, next: null };
        ({ action: obj3[3], hasEagerState: obj3[4], eagerState: obj3[5] } = iter2);
        tmp3.next = obj;
        tmp33 = obj;
      }
      flag3 = flag2;
      obj = tmp33;
      if (tmp7 === c124) {
        flag3 = true;
        obj = tmp33;
      }
    }
    if (null === iter) {
      queue.lanes = 0;
    }
    const items = [queue.memoizedState, queue.dispatch];
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
  closure_0 = arg0;
  closure_1 = arg1;
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
  const tmp3 = mountWorkInProgressHook();
  let tmp4 = fn;
  if (typeof fn === "function") {
    const tmp11 = fn();
    tmp4 = tmp11;
    if (c170) {
      setIsStrictModeForDevtools(true);
      try {
        fn();
        setIsStrictModeForDevtools(false);
        tmp4 = tmp11;
      } catch (tmp9) {
        tmp(false);
        throw tmp9;
      }
    }
  }
  tmp3.baseState = tmp4;
  tmp3.memoizedState = tmp4;
  tmp3.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: basicStateReducer, lastRenderedState: tmp4 };
  return tmp3;
}
function dispatchActionState(alternate, action, fn, fn2) {
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
      const obj = { payload: null, action: null, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: null, then: null };
      obj[0] = arg4;
      obj[1] = action;
      obj[7] = [];
      obj[8] = function then(arg0) {
        const listeners = obj.listeners;
        listeners.push(arg0);
      };
      if (null !== __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T) {
        fn(true);
      } else {
        obj.isTransition = false;
      }
      fn2(obj);
      if (null === action.pending) {
        action.pending = obj;
        obj.next = obj;
        runActionStateAction(action, obj);
      } else {
        obj.next = iter.next;
        iter.next = obj;
        action.pending = obj;
      }
    }
  }
}
function runActionStateAction(state, next) {
  ({ action, payload } = next);
  state = state.state;
  if (next.isTransition) {
    const T = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
    const obj = {};
    __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = obj;
    try {
      const actionResult = action(state, payload);
      const S = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S;
      if (null !== S) {
        tmp15(obj, actionResult);
      }
      handleActionReturnValue(state, next, actionResult);
      let tmp25 = null !== T;
      if (tmp25) {
        tmp25 = null !== obj.types;
      }
      if (tmp25) {
        T.types = obj.types;
      }
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
    } catch (tmp28) {
      let tmp31 = null !== tmp;
      if (tmp31) {
        tmp31 = null !== tmp3.types;
      }
      if (tmp31) {
        tmp.types = tmp3.types;
      }
      tmp2.T = tmp;
      throw tmp28;
    }
  } else {
    try {
      const actionResult1 = action(state, payload);
      handleActionReturnValue(state, next, actionResult1);
    } catch (tmp10) {
      onActionError(tmp5, tmp4, tmp10);
    }
  }
}
function handleActionReturnValue(pending, listeners, actionResult) {
  let length;
  closure_0 = pending;
  closure_1 = listeners;
  if (null !== actionResult) {
    if (typeof actionResult === "object") {
      if (typeof actionResult.then === "function") {
        actionResult.then((result) => {
          let length;
          listeners.status = "fulfilled";
          listeners.value = result;
          listeners = listeners.listeners;
          let num = 0;
          if (0 < listeners.length) {
            do {
              let tmp2 = listeners[num]();
              num = num + 1;
              length = listeners.length;
            } while (num < length);
          }
          pending.state = result;
          if (null !== pending.pending) {
            if (iter.next === iter) {
              pending.pending = null;
            } else {
              const next = iter2.next;
              iter.next = next;
              runActionStateAction(pending, next);
            }
          }
        }, (reason) => {
          let iter = closure_1;
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
        });
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
  if (null !== pending.pending) {
    if (iter.next === iter) {
      pending.pending = null;
    } else {
      let next = iter2.next;
      iter.next = next;
      runActionStateAction(pending, next);
    }
  }
}
function onActionError(pending, arg1, reason) {
  pending.pending = null;
  if (null !== pending.pending) {
    let iter = arg1;
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
      if (typeof first.then === "function") {
        try {
          let tmp2 = useThenable(first);
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
      if (memoizedState !== tmp6.memoizedState) {
        _null2.flags = _null2.flags | 2048;
        pushSimpleEffect(9, { destroy: "r" }, actionStateActionEffect.bind(null, queue, memoizedState), null);
      }
      const items = [tmp2, queue.dispatch, tmp];
      return items;
    }
  }
  tmp2 = first;
}
function actionStateActionEffect(arg0, action) {
  arg0.action = action;
}
function pushSimpleEffect(arg0, inst, create, arg3) {
  let obj = { tag: 9, create, deps: null, inst, next: null };
  let updateQueue = _null2.updateQueue;
  if (null === updateQueue) {
    obj = { lastEffect: null, events: null, stores: null, memoCache: null };
    _null2.updateQueue = obj;
    updateQueue = obj;
  }
  if (null === updateQueue.lastEffect) {
    obj.next = obj;
    updateQueue.lastEffect = obj;
  } else {
    iter.next = obj;
    obj.next = iter.next;
    updateQueue.lastEffect = obj;
  }
  return obj;
}
function updateEffectImpl(arg0, arg1, create, combined) {
  const tmp = updateWorkInProgressHook();
  let tmp2 = null;
  if (undefined !== combined) {
    tmp2 = combined;
  }
  const inst = tmp.memoizedState.inst;
  if (null !== _null3) {
    if (null !== tmp2) {
      const deps = _null3.memoizedState.deps;
      let flag = false;
      if (null !== deps) {
        flag = true;
        if (0 < deps.length) {
          let num2 = 0;
          flag = true;
          if (0 < tmp2.length) {
            flag = false;
            while (is(tmp2[num2], deps[num2])) {
              let sum = num2 + 1;
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
        let obj = { tag: null, create: null, deps: null, inst: null, next: null };
        obj[0] = arg1;
        obj[1] = create;
        obj[2] = tmp2;
        obj[3] = inst;
        let updateQueue2 = _null2.updateQueue;
        if (null === updateQueue2) {
          obj = { lastEffect: null, events: null, stores: null, memoCache: null };
          _null2.updateQueue = obj;
          updateQueue2 = obj;
        }
        if (null === updateQueue2.lastEffect) {
          obj.next = obj;
          updateQueue2.lastEffect = obj;
        } else {
          iter2.next = obj;
          obj.next = iter2.next;
          updateQueue2.lastEffect = obj;
        }
        tmp.memoizedState = obj;
      }
    }
  }
  _null2.flags = _null2.flags | arg0;
  obj = { tag: 1 | arg1, create, deps: tmp2, inst, next: null };
  let updateQueue = _null2.updateQueue;
  if (null === updateQueue) {
    obj1 = { lastEffect: null, events: null, stores: null, memoCache: null };
    _null2.updateQueue = obj1;
    updateQueue = obj1;
  }
  if (null === updateQueue.lastEffect) {
    obj.next = obj;
    updateQueue.lastEffect = obj;
  } else {
    iter.next = obj;
    obj.next = iter.next;
    updateQueue.lastEffect = obj;
  }
  tmp.memoizedState = obj;
}
function imperativeHandleEffect(fn, fn2) {
  closure_0 = fn2;
  if (typeof fn2 === "function") {
    closure_1 = fn2(fn());
    return () => {
      if (typeof closure_1 === "function") {
        tmp();
      } else {
        callback(null);
      }
    };
  } else if (null != fn2) {
    fn2.current = fn();
    return () => {
      closure_0.current = null;
    };
  }
}
function updateDeferredValueImpl(arg0, memoizedState, memoizedState, memoizedState) {
  let tmp = is;
  if (is(memoizedState, memoizedState)) {
    return memoizedState;
  } else {
    let tmp4 = null;
    if (null !== closure_157.current) {
      let tmp16 = memoizedState;
      if (flag !== memoizedState) {
        if (!(1073741824 & c164)) {
          arg0.memoizedState = tmp16;
          if (0 === closure_291) {
            if (536870912 & c280) {
              closure_291 = 536870912;
            } else {
              c79 = tmp21;
              if (!(3932160 & c79 << 1)) {
                c79 = 262144;
              }
              closure_291 = c79;
            }
          }
          const current2 = closure_159.current;
          if (tmp4 !== current2) {
            current2.flags = current2.flags | 32;
          }
          _null2.lanes = _null2.lanes | closure_291;
          tmp4 = closure_288;
          closure_288 = closure_288 | closure_291;
          tmp = tmp(tmp16, memoizedState);
          if (!tmp) {
            c222 = true;
          }
        }
      }
      arg0.memoizedState = memoizedState;
      tmp16 = memoizedState;
    } else {
      if (42 & c164) {
        if (0 === closure_291) {
          if (536870912 & c280) {
            closure_291 = 536870912;
          } else {
            c79 = tmp11;
            if (!(3932160 & c79 << 1)) {
              c79 = 262144;
            }
            closure_291 = c79;
          }
        }
        const current = closure_159.current;
        if (tmp4 !== current) {
          current.flags = current.flags | 32;
        }
        _null2.lanes = _null2.lanes | closure_291;
        closure_288 = closure_288 | closure_291;
      }
      c222 = true;
      arg0.memoizedState = memoizedState;
    }
  }
}
function startTransition(alternate, pending, action, action, fn) {
  let num = 8;
  if (0 !== c363) {
    num = 8;
    if (8 > tmp5) {
      num = tmp5;
    }
  }
  c363 = num;
  const T = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
  let obj = {};
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = obj;
  dispatchOptimisticSetState(alternate, false, pending, action);
  try {
    const promise = fn();
    const S = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S;
    if (null !== S) {
      tmp9(obj, promise);
    }
    if (null !== promise) {
      if (typeof promise === "object") {
        if (typeof promise.then === "function") {
          dispatchSetStateInternal(alternate, pending, (function chainThenableValue(promise, action) {
            closure_0 = action;
            closure_1 = [];
            const obj = {
              status: "pending",
              value: null,
              reason: null,
              then(arg0) {

              }
            };
            promise.then((result) => {
              let length;
              obj.status = "fulfilled";
              obj.value = closure_0;
              let num = 0;
              if (0 < arr.length) {
                do {
                  let tmp3 = arr[num](closure_0);
                  num = num + 1;
                  length = arr.length;
                } while (num < length);
              }
            }, (reason) => {
              let length;
              obj.status = "rejected";
              obj.reason = reason;
              let num = 0;
              if (0 < arr.length) {
                do {
                  let tmp2 = arr[num](undefined);
                  num = num + 1;
                  length = arr.length;
                } while (num < length);
              }
            });
            return obj;
          })(promise, action), requestUpdateLane(alternate));
          const tmp25 = (function chainThenableValue(promise, action) {
            closure_0 = action;
            closure_1 = [];
            const obj = {
              status: "pending",
              value: null,
              reason: null,
              then(arg0) {

              }
            };
            promise.then((result) => {
              let length;
              obj.status = "fulfilled";
              obj.value = closure_0;
              let num = 0;
              if (0 < arr.length) {
                do {
                  let tmp3 = arr[num](closure_0);
                  num = num + 1;
                  length = arr.length;
                } while (num < length);
              }
            }, (reason) => {
              let length;
              obj.status = "rejected";
              obj.reason = reason;
              let num = 0;
              if (0 < arr.length) {
                do {
                  let tmp2 = arr[num](undefined);
                  num = num + 1;
                  length = arr.length;
                } while (num < length);
              }
            });
            return obj;
          })(promise, action);
        }
        c363 = tmp5;
        let tmp31 = null !== T;
        if (tmp31) {
          tmp31 = null !== obj.types;
        }
        if (tmp31) {
          T.types = obj.types;
        }
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
      }
    }
    dispatchSetStateInternal(alternate, pending, action, requestUpdateLane(alternate));
  } catch (tmp32) {
    c363 = tmp4;
    let tmp34 = null !== tmp;
    if (tmp34) {
      tmp34 = null !== tmp3.types;
    }
    if (tmp34) {
      tmp.types = tmp3.types;
    }
    tmp2.T = tmp;
    throw tmp32;
  }
}
function refreshCache(_reactInternals) {
  let _return = _reactInternals.return;
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
    let obj = { lane: null, tag: 0, payload: null, callback: null, next: null };
    obj[0] = tmp3;
    const tmp5 = enqueueUpdate(_return, obj, tmp3);
    if (null !== tmp5) {
      scheduleUpdateOnFiber(tmp5, _return, tmp3);
      const updateQueue = _return.updateQueue;
      if (null !== updateQueue) {
        const shared = updateQueue.shared;
        if (4194048 & tmp3) {
          shared.lanes = tmp3 | shared.lanes & tmp5.pendingLanes;
          let tmp7 = tmp5.entangledLanes | tmp6;
          tmp5.entangledLanes = tmp7;
          const entanglements = tmp5.entanglements;
          while (tmp7) {
            let diff = 31 - clz32Fallback(tmp7);
            let tmp10 = 1 << diff;
            if (tmp10 & tmp6 | entanglements[diff] & tmp6) {
              entanglements[diff] = entanglements[diff] | tmp6;
            }
            tmp7 = tmp7 & ~tmp10;
          }
        }
      }
    }
    obj = { controller: null, data: null, refCount: 0 };
    const tmp15 = new closure_106();
    obj[0] = tmp15;
    const _Map = Map;
    map = new Map();
    obj[1] = map;
    obj[0] = obj;
    obj.payload = obj;
  }
}
function dispatchReducerAction(alternate, pending, action) {
  const tmp = requestUpdateLane(alternate);
  const obj = { lane: tmp, revertLane: 0, gesture: null, action, hasEagerState: false, eagerState: null, next: null };
  alternate = alternate.alternate;
  let tmp3 = alternate === c165;
  if (!tmp3) {
    tmp3 = null !== alternate && alternate === tmp2;
  }
  if (tmp3) {
    c168 = true;
    c169 = true;
    if (null === pending.pending) {
      obj.next = obj;
    } else {
      obj.next = iter.next;
      iter.next = obj;
    }
    pending.pending = obj;
  } else {
    const tmp11 = enqueueConcurrentHookUpdate(alternate, pending, obj, tmp);
    if (null !== tmp11) {
      scheduleUpdateOnFiber(tmp11, alternate, tmp);
      if (4194048 & tmp) {
        pending.lanes = tmp | pending.lanes & tmp11.pendingLanes;
        let tmp14 = tmp11.entangledLanes | tmp13;
        tmp11.entangledLanes = tmp14;
        const entanglements = tmp11.entanglements;
        while (tmp14) {
          let diff = 31 - clz32Fallback(tmp14);
          let tmp17 = 1 << diff;
          if (tmp17 & tmp13 | entanglements[diff] & tmp13) {
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
  const obj = { lane, revertLane: 0, gesture: null, action, hasEagerState: false, eagerState: null, next: null };
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
          } catch (err) {
          }
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
      if (!(261888 & c78 << 1)) {
        c78 = 256;
        tmp2 = tmp3;
      }
    }
    c115 = tmp2;
    tmp = tmp2;
  }
  const obj = { lane: 2, revertLane: tmp, gesture: null, action, hasEagerState: false, eagerState: null, next: null };
  alternate = alternate.alternate;
  let tmp6 = alternate === c165;
  if (!tmp6) {
    tmp6 = null !== alternate && alternate === tmp5;
  }
  if (tmp6) {
    if (arg1) {
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
    next.next = iter.next;
    iter.next = next;
  }
  pending.pending = next;
}
function entangleTransitionUpdate(pendingLanes, lanes, lane) {
  if (4194048 & lane) {
    lanes.lanes = lane | lanes.lanes & pendingLanes.pendingLanes;
    let tmp4 = pendingLanes.entangledLanes | tmp3;
    pendingLanes.entangledLanes = tmp4;
    const entanglements = pendingLanes.entanglements;
    while (tmp4) {
      let diff = 31 - clz32Fallback(tmp4);
      let tmp7 = 1 << diff;
      if (tmp7 & tmp3 | entanglements[diff] & tmp3) {
        entanglements[diff] = entanglements[diff] | tmp3;
      }
      tmp4 = tmp4 & ~tmp7;
    }
  }
}
function checkShouldComponentUpdate(stateNode, defaultProps, obj, memoizedProps, memoizedState, memoizedState2, _currentValue2) {
  stateNode = stateNode.stateNode;
  if (typeof stateNode.shouldComponentUpdate === "function") {
    let result = stateNode.shouldComponentUpdate(memoizedProps, memoizedState2, _currentValue2);
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
                      let call = hasOwnProperty.call;
                      flag = false;
                      if (!(typeof call === "unknown" ? hasOwnProperty(tmp4) : call(memoizedProps, tmp4))) {
                        break;
                      } else {
                        flag = false;
                        if (!is(obj[tmp4], memoizedProps[tmp4])) {
                          break;
                        } else {
                          let sum = num + 1;
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
      let tmp9 = !flag;
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
                        let tmp12 = keys1[num3];
                        let call2 = hasOwnProperty.call;
                        flag2 = false;
                        if (!(typeof call2 === "unknown" ? hasOwnProperty(tmp12) : call2(memoizedState2, tmp12))) {
                          break;
                        } else {
                          flag2 = false;
                          if (!is(memoizedState[tmp12], memoizedState2[tmp12])) {
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
        tmp9 = !flag2;
      }
      result = tmp9;
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
    let obj = { context: null, memoizedValue: null, next: null };
    obj[0] = contextType;
    obj[1] = _currentValue2;
    if (null === obj) {
      if (null === _null) {
        const _Error = Error;
        throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      } else {
        obj = { lanes: 0, firstContext: null };
        obj[1] = obj;
        _null.dependencies = obj;
        _null.flags = _null.flags | 524288;
        tmp = _currentValue2;
      }
    } else {
      tmp4.next = obj;
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
  tmp6.updater = closure_213;
  _reactInternals.stateNode = tmp6;
  tmp6._reactInternals = _reactInternals;
  return tmp6;
}
function mountClassInstance(baseState, type3, props, c286) {
  const stateNode = baseState.stateNode;
  stateNode.props = props;
  stateNode.state = baseState.memoizedState;
  stateNode.refs = {};
  baseState.updateQueue = { baseState: baseState.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  const contextType = type3.contextType;
  if (typeof contextType === "object") {
    if (null !== contextType) {
      const _currentValue2 = contextType._currentValue2;
      let obj = { context: null, memoizedValue: null, next: null };
      obj[0] = contextType;
      obj[1] = _currentValue2;
      if (null === obj) {
        if (null === _null) {
          const _Error = Error;
          throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        } else {
          obj = { lanes: 0, firstContext: null };
          obj[1] = obj;
          _null.dependencies = obj;
          _null.flags = _null.flags | 524288;
          let tmp = _currentValue2;
        }
      } else {
        tmp3.next = obj;
        tmp = _currentValue2;
      }
    }
    stateNode.context = tmp;
    stateNode.state = baseState.memoizedState;
    const getDerivedStateFromProps = type3.getDerivedStateFromProps;
    if (typeof getDerivedStateFromProps === "function") {
      const memoizedState = baseState.memoizedState;
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
    const getDerivedStateFromProps2 = type3.getDerivedStateFromProps;
    let tmp6 = typeof getDerivedStateFromProps2 === "function";
    if (typeof getDerivedStateFromProps2 !== "function") {
      tmp6 = typeof stateNode.getSnapshotBeforeUpdate === "function";
    }
    if (!tmp6) {
      const UNSAFE_componentWillMount = stateNode.UNSAFE_componentWillMount;
      let tmp7 = typeof UNSAFE_componentWillMount !== "function";
      if (typeof UNSAFE_componentWillMount !== "function") {
        tmp7 = typeof stateNode.componentWillMount !== "function";
      }
      tmp6 = tmp7;
    }
    if (!tmp6) {
      if (typeof stateNode.componentWillMount === "function") {
        stateNode.componentWillMount();
      }
      if (typeof stateNode.UNSAFE_componentWillMount === "function") {
        const result = stateNode.UNSAFE_componentWillMount();
      }
      if (stateNode.state !== stateNode.state) {
        closure_213.enqueueReplaceState(stateNode, stateNode.state, null);
      }
      processUpdateQueue(baseState, props, stateNode, c286);
      if (c153) {
        if (null !== c125) {
          throw c125;
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
    const obj = {};
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
  callback2(arg0);
}
function logUncaughtError(onUncaughtError, capturedValueAtFiber) {
  try {
    const obj = { componentStack: null };
    obj[0] = capturedValueAtFiber.stack;
    onUncaughtError.onUncaughtError(capturedValueAtFiber.value, obj);
  } catch (tmp4) {
    require = tmp4;
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      throw closure_0;
    });
  }
}
function logCaughtError(onCaughtError, tag, stack) {
  try {
    const obj = { componentStack: null, errorBoundary: null };
    obj[0] = stack.stack;
    let stateNode = null;
    if (1 === tag.tag) {
      stateNode = tag.stateNode;
    }
    obj[1] = stateNode;
    onCaughtError.onCaughtError(stack.value, obj);
  } catch (tmp6) {
    require = tmp6;
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      throw closure_0;
    });
  }
}
function updateForwardRef(updateQueue, dependencies, type, pendingProps, c286) {
  let tmp2 = pendingProps;
  if ("ref" in pendingProps) {
    const obj = {};
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
  closure_102 = dependencies;
  c103 = null;
  dependencies = dependencies.dependencies;
  if (null !== dependencies) {
    dependencies.firstContext = null;
  }
  const tmp6 = renderWithHooks(updateQueue, dependencies, type.render, tmp2, dependencies.ref, c286);
  if (null !== updateQueue) {
    if (!c222) {
      dependencies.updateQueue = updateQueue.updateQueue;
      dependencies.flags = dependencies.flags & -2053;
      updateQueue.lanes = updateQueue.lanes & ~c286;
      return bailoutOnAlreadyFinishedWork(updateQueue, dependencies, c286);
    }
  }
  dependencies.flags = dependencies.flags | 1;
  if (null === updateQueue) {
    let tmp14 = callback4(dependencies, null, tmp6, c286);
  } else {
    tmp14 = callback3(dependencies, updateQueue.child, tmp6, c286);
  }
  dependencies.child = tmp14;
}
function updateMemoComponent(child, mode, type, pendingProps, c286) {
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
          if (null === type.compare) {
            mode.tag = 15;
            mode.type = type;
            let tmp15 = updateSimpleMemoComponent(child, mode, type, pendingProps, c286);
          }
          return tmp15;
        }
      }
    }
    const tmp20 = createFiberFromTypeAndProps(type.type, null, pendingProps, 0, mode.mode, c286);
    tmp20.ref = mode.ref;
    tmp20.return = mode;
    mode.child = tmp20;
    tmp15 = tmp20;
  } else {
    child = child.child;
    let tmp4 = child.lanes & c286;
    if (!tmp4) {
      const dependencies = child.dependencies;
      let tmp = null === dependencies;
      if (!tmp) {
        let iter = dependencies.firstContext;
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
      if (null === compare) {
        compare = shallowEqual;
      }
      if (compare(child.memoizedProps, pendingProps)) {
        if (child.ref === mode.ref) {
          return bailoutOnAlreadyFinishedWork(child, mode, c286);
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
function updateSimpleMemoComponent(memoizedProps, ref, type, pendingProps, c286) {
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
                    let call = hasOwnProperty.call;
                    flag = false;
                    if (!(typeof call === "unknown" ? hasOwnProperty(tmp2) : call(pendingProps, tmp2))) {
                      break;
                    } else {
                      flag = false;
                      if (!is(memoizedProps[tmp2], pendingProps[tmp2])) {
                        break;
                      } else {
                        let sum = num + 1;
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
        let tmp10 = memoizedProps.lanes & c286;
        if (!tmp10) {
          const dependencies = memoizedProps.dependencies;
          let tmp7 = null === dependencies;
          if (!tmp7) {
            let iter = dependencies.firstContext;
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
            tmp7 = !flag2;
          }
          tmp10 = !tmp7;
        }
        if (tmp10) {
          tmp = memoizedProps;
          if (131072 & memoizedProps.flags) {
            c222 = true;
            tmp = memoizedProps;
          }
        } else {
          ref.lanes = memoizedProps.lanes;
          return bailoutOnAlreadyFinishedWork(memoizedProps, ref, c286);
        }
      }
    }
  }
  closure_102 = ref;
  c103 = null;
  const dependencies2 = ref.dependencies;
  if (null !== dependencies2) {
    dependencies2.firstContext = null;
  }
  const tmp12 = renderWithHooks(memoizedProps, ref, type, tmp, undefined, c286);
  if (null !== memoizedProps) {
    if (!c222) {
      ref.updateQueue = memoizedProps.updateQueue;
      ref.flags = ref.flags & -2053;
      memoizedProps.lanes = memoizedProps.lanes & ~c286;
      return bailoutOnAlreadyFinishedWork(memoizedProps, ref, c286);
    }
  }
  ref.flags = ref.flags | 1;
  if (null === memoizedProps) {
    let tmp20 = callback4(ref, null, tmp12, c286);
  } else {
    tmp20 = callback3(ref, memoizedProps.child, tmp12, c286);
  }
  ref.child = tmp20;
}
function updateOffscreenComponent(memoizedState, stateNode, c286, pendingProps) {
  const children = pendingProps.children;
  memoizedState = null;
  if (null !== memoizedState) {
    memoizedState = memoizedState.memoizedState;
  }
  let tmp4 = tmp3;
  if (null === memoizedState) {
    tmp4 = null === stateNode.stateNode;
  }
  if (tmp4) {
    stateNode.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null };
  }
  if ("hidden" === pendingProps.mode) {
    if (128 & stateNode.flags) {
      let tmp94 = c286;
      if (null !== memoizedState) {
        tmp94 = memoizedState.baseLanes | c286;
      }
      if (tmp) {
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
        let num8 = num10 & ~tmp94;
      } else {
        stateNode.child = null;
        num8 = 0;
      }
      deferHiddenOffscreenComponent(memoizedState, stateNode, tmp94, c286, num8);
      return null;
    } else if (1 & stateNode.mode) {
      if (536870912 & c286) {
        stateNode.memoizedState = { baseLanes: 0, cachePool: null };
        if (!tmp) {
          if (null !== memoizedState) {
            const sum = sum17 + 1;
            sum17 = sum;
            closure_85[sum] = closure_158.current;
            closure_158.current = closure_286;
            const sum1 = sum17 + 1;
            sum17 = sum1;
            closure_85[sum1] = closure_157.current;
            closure_157.current = memoizedState;
            closure_286 = closure_286 | memoizedState.baseLanes;
          } else {
            const sum2 = sum17 + 1;
            sum17 = sum2;
            closure_85[sum2] = closure_158.current;
            closure_158.current = closure_286;
            const sum3 = sum17 + 1;
            sum17 = sum3;
            ({ current: closure_85[tmp73], current: closure_157.current } = closure_157);
          }
          pushOffscreenSuspenseHandler(stateNode);
        } else {
          let cachePool = null;
          if (null !== memoizedState) {
            cachePool = memoizedState.cachePool;
          }
          const sum4 = sum17 + 1;
          sum17 = sum4;
          closure_85[sum4] = closure_128.current;
          closure_128.current = null === cachePool ? closure_128.current : cachePool.pool;
        }
      } else {
        stateNode.lanes = 536870912;
        let tmp55 = c286;
        if (null !== memoizedState) {
          tmp55 = memoizedState.baseLanes | c286;
        }
        deferHiddenOffscreenComponent(memoizedState, stateNode, tmp55, c286, 536870912);
        return null;
      }
    } else {
      stateNode.memoizedState = { baseLanes: 0, cachePool: null };
      if (tmp) {
        const sum5 = sum17 + 1;
        sum17 = sum5;
        ({ current: closure_85[tmp42], current: closure_128.current } = closure_128);
      }
      const sum6 = sum17 + 1;
      sum17 = sum6;
      closure_85[sum6] = closure_158.current;
      closure_158.current = closure_286;
      const sum7 = sum17 + 1;
      sum17 = sum7;
      ({ current: closure_85[tmp51], current: closure_157.current } = closure_157);
      pushOffscreenSuspenseHandler(stateNode);
    }
  } else if (null !== memoizedState) {
    cachePool = memoizedState.cachePool;
    const sum8 = sum17 + 1;
    sum17 = sum8;
    closure_85[sum8] = closure_128.current;
    closure_128.current = null === cachePool ? closure_128.current : cachePool.pool;
    const sum9 = sum17 + 1;
    sum17 = sum9;
    closure_85[sum9] = closure_158.current;
    closure_158.current = closure_286;
    const sum10 = sum17 + 1;
    sum17 = sum10;
    closure_85[sum10] = closure_157.current;
    closure_157.current = memoizedState;
    closure_286 = closure_286 | memoizedState.baseLanes;
    const sum11 = sum17 + 1;
    sum17 = sum11;
    ({ current: closure_85[tmp36], current: closure_162.current } = closure_162);
    const sum12 = sum17 + 1;
    sum17 = sum12;
    ({ current: closure_85[tmp39], current: closure_159.current } = closure_159);
    stateNode.memoizedState = null;
  } else {
    if (tmp) {
      const sum13 = sum17 + 1;
      sum17 = sum13;
      ({ current: closure_85[tmp7], current: closure_128.current } = closure_128);
    }
    const sum14 = sum17 + 1;
    sum17 = sum14;
    closure_85[sum14] = closure_158.current;
    closure_158.current = closure_286;
    const sum15 = sum17 + 1;
    sum17 = sum15;
    ({ current: closure_85[tmp16], current: closure_157.current } = closure_157);
    const sum16 = sum17 + 1;
    sum17 = sum16;
    ({ current: closure_85[tmp19], current: closure_162.current } = closure_162);
    sum17 = sum17 + 1;
    ({ current: closure_85[tmp22], current: closure_159.current } = closure_159);
  }
  if (null === memoizedState) {
    let tmp88 = callback4(stateNode, null, children, c286);
  } else {
    tmp88 = callback3(stateNode, memoizedState.child, children, c286);
  }
  stateNode.child = tmp88;
  return stateNode.child;
}
function deferHiddenOffscreenComponent(memoizedState, stateNode, baseLanes, c286, childLanes) {
  let pooledCache = closure_128.current;
  if (null === pooledCache) {
    pooledCache = _null6.pooledCache;
  }
  let tmp3 = null;
  if (null !== pooledCache) {
    const obj = { parent: null, pool: null };
    obj[0] = closure_107._currentValue2;
    obj[1] = pooledCache;
    tmp3 = obj;
  }
  stateNode.memoizedState = { baseLanes, cachePool: tmp3 };
  if (null !== memoizedState) {
    const sum = sum2 + 1;
    sum2 = sum;
    ({ current: closure_85[tmp7], current: tmp.current } = closure_128);
  }
  const sum1 = sum2 + 1;
  sum2 = sum1;
  closure_85[sum1] = closure_158.current;
  closure_158.current = c286;
  sum2 = sum2 + 1;
  ({ current: closure_85[tmp10], current: closure_157.current } = closure_157);
  pushOffscreenSuspenseHandler(stateNode);
  if (null !== memoizedState) {
    propagateParentContextChanges(0, stateNode, c286, true);
  }
  stateNode.childLanes = childLanes;
  return null;
}
function retryActivityComponentWithoutHydrating(child, mode, c286) {
  callback3(mode, child.child, null, c286);
  const pendingProps = mode.pendingProps;
  let obj = Object.create(FiberNode.prototype);
  obj = { tag: 22, key: null, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: obj, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: mode.mode, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null, lanes: 0, ref: mode.ref };
  mode.child = obj;
  obj.return = mode;
  obj.flags = obj.flags | 2;
  let tmp5 = closure_86;
  if (0 <= closure_86) {
    tmp3.current = dependencyMap3[tmp4];
    dependencyMap3[closure_86] = null;
    const diff = closure_86 - 1;
    closure_86 = diff;
    tmp5 = diff;
  }
  if (c160 === mode) {
    c160 = null;
  }
  if (0 <= tmp5) {
    tmp10.current = dependencyMap3[tmp5];
    dependencyMap3[closure_86] = null;
    closure_86 = closure_86 - 1;
  }
  mode.memoizedState = null;
  return obj;
}
function replayFunctionComponent(alternate, dependencies, pendingProps, render, ref, c280) {
  closure_102 = dependencies;
  c103 = null;
  dependencies = dependencies.dependencies;
  if (null !== dependencies) {
    dependencies.firstContext = null;
  }
  dependencies.updateQueue = null;
  closure_165 = dependencies;
  let num = 0;
  while (true) {
    if (c169) {
      c172 = null;
    }
    c171 = 0;
    c169 = false;
    if (25 <= num) {
      break;
    } else {
      c166 = null;
      c167 = null;
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
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = obj10;
      let tmp5 = render(pendingProps, ref);
      if (c169) {
        continue;
      } else {
        let tmp10 = finishRenderingHooks(alternate);
        let tmp11 = null === alternate;
        if (!tmp11) {
          if (!c222) {
            dependencies.updateQueue = alternate.updateQueue;
            dependencies.flags = dependencies.flags & -2053;
            alternate.lanes = alternate.lanes & ~c280;
            return bailoutOnAlreadyFinishedWork(alternate, dependencies, c280);
          }
        }
        dependencies.flags = dependencies.flags | 1;
        if (tmp11) {
          let tmp18 = callback4(dependencies, null, tmp5, c280);
        } else {
          tmp18 = callback3(dependencies, alternate.child, tmp5, c280);
        }
        dependencies.child = tmp18;
        let child = dependencies.child;
      }
    }
  }
  throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
}
function updateClassComponent(updateQueue, dependencies, defaultProps, memoizedProps, c286) {
  closure_102 = dependencies;
  obj3 = null;
  dependencies = dependencies.dependencies;
  if (null !== dependencies) {
    dependencies.firstContext = null;
  }
  if (null === dependencies.stateNode) {
    let tmp98 = !tmp97;
    if (!(1 & dependencies.mode)) {
      tmp98 = null !== updateQueue;
    }
    if (tmp98) {
      updateQueue.alternate = null;
      dependencies.alternate = null;
      dependencies.flags = dependencies.flags | 2;
    }
    constructClassInstance(dependencies, defaultProps, memoizedProps);
    mountClassInstance(dependencies, defaultProps, memoizedProps, c286);
    let flag3 = true;
  } else if (null === updateQueue) {
    ({ stateNode, memoizedProps: memoizedProps2 } = dependencies);
    let tmp55 = memoizedProps2;
    if ("ref" in memoizedProps2) {
      let obj = {};
      tmp55 = obj;
      const keys = Object.keys();
      if (keys !== undefined) {
        tmp55 = obj;
        while (keys[tmp] !== undefined) {
          if ("ref" === tmp58) {
            continue;
          } else {
            obj[tmp58] = memoizedProps2[tmp58];
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
    if (typeof contextType2 === "object") {
      tmp66 = null !== contextType2;
    }
    if (tmp66) {
      const _currentValue22 = contextType2._currentValue2;
      obj = { context: null, memoizedValue: null, next: null };
      obj[0] = contextType2;
      obj[1] = _currentValue22;
      if (null === obj3) {
        if (null === tmp67) {
          const _Error2 = Error;
          throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        } else {
          obj3 = obj;
          obj1 = { lanes: 0, firstContext: null };
          obj1[1] = obj;
          tmp67.dependencies = obj1;
          tmp67.flags = tmp67.flags | 524288;
          tmp65 = _currentValue22;
        }
      } else {
        tmp68.next = obj;
        obj3 = obj;
        tmp65 = _currentValue22;
      }
    }
    const getDerivedStateFromProps2 = defaultProps.getDerivedStateFromProps;
    let tmp69 = typeof getDerivedStateFromProps2 === "function";
    if (typeof getDerivedStateFromProps2 !== "function") {
      tmp69 = typeof stateNode.getSnapshotBeforeUpdate === "function";
    }
    let tmp70 = tmp69;
    if (!tmp69) {
      const UNSAFE_componentWillReceiveProps2 = stateNode.UNSAFE_componentWillReceiveProps;
      let tmp71 = typeof UNSAFE_componentWillReceiveProps2 !== "function";
      if (typeof UNSAFE_componentWillReceiveProps2 !== "function") {
        tmp71 = typeof stateNode.componentWillReceiveProps !== "function";
      }
      tmp70 = tmp71;
    }
    if (!tmp70) {
      let tmp73 = tmp72;
      if (!tmp72) {
        tmp73 = stateNode.context !== tmp65;
      }
      if (tmp73) {
        if (typeof stateNode.componentWillReceiveProps === "function") {
          const result = stateNode.componentWillReceiveProps(memoizedProps, tmp65);
        }
        if (typeof stateNode.UNSAFE_componentWillReceiveProps === "function") {
          const result1 = stateNode.UNSAFE_componentWillReceiveProps(memoizedProps, tmp65);
        }
        if (stateNode.state !== stateNode.state) {
          closure_213.enqueueReplaceState(stateNode, stateNode.state, null);
        }
      }
    }
    c150 = false;
    const memoizedState3 = dependencies.memoizedState;
    stateNode.state = memoizedState3;
    processUpdateQueue(dependencies, memoizedProps, stateNode, c286);
    if (c153) {
      if (null !== c125) {
        throw c125;
      }
    }
    let memoizedState4 = dependencies.memoizedState;
    if (dependencies.pendingProps === memoizedProps2) {
      if (memoizedState3 === memoizedState4) {
        if (!c150) {
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
    let tmp86 = c150;
    if (!c150) {
      tmp86 = checkShouldComponentUpdate(dependencies, defaultProps, tmp59, memoizedProps, memoizedState3, memoizedState4, tmp65);
    }
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
      obj = { baseState: null, firstBaseUpdate: null, lastBaseUpdate: null, shared: null, callbacks: null };
      ({ baseState: obj[0], firstBaseUpdate: obj[1], lastBaseUpdate: obj[2], shared: obj[3] } = updateQueue);
      dependencies.updateQueue = obj;
    }
    memoizedProps = dependencies.memoizedProps;
    let tmp2 = memoizedProps;
    if ("ref" in memoizedProps) {
      obj2 = {};
      tmp2 = obj2;
      const keys2 = Object.keys();
      if (keys2 !== undefined) {
        tmp2 = obj2;
        while (keys2[tmp] !== undefined) {
          if ("ref" === tmp5) {
            continue;
          } else {
            obj2[tmp5] = memoizedProps[tmp5];
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
    if (typeof contextType === "object") {
      tmp13 = null !== contextType;
    }
    if (tmp13) {
      const _currentValue2 = contextType._currentValue2;
      obj3 = { context: null, memoizedValue: null, next: null };
      obj3[0] = contextType;
      obj3[1] = _currentValue2;
      if (null === obj3) {
        if (null === tmp14) {
          const _Error = Error;
          throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        } else {
          const obj4 = { lanes: 0, firstContext: null };
          obj4[1] = obj3;
          tmp14.dependencies = obj4;
          tmp14.flags = tmp14.flags | 524288;
          tmp12 = _currentValue2;
        }
      } else {
        tmp15.next = obj3;
        tmp12 = _currentValue2;
      }
    }
    const getDerivedStateFromProps = defaultProps.getDerivedStateFromProps;
    let tmp16 = typeof getDerivedStateFromProps === "function";
    if (typeof getDerivedStateFromProps !== "function") {
      tmp16 = typeof stateNode2.getSnapshotBeforeUpdate === "function";
    }
    let tmp17 = tmp16;
    if (!tmp16) {
      const UNSAFE_componentWillReceiveProps = stateNode2.UNSAFE_componentWillReceiveProps;
      let tmp18 = typeof UNSAFE_componentWillReceiveProps !== "function";
      if (typeof UNSAFE_componentWillReceiveProps !== "function") {
        tmp18 = typeof stateNode2.componentWillReceiveProps !== "function";
      }
      tmp17 = tmp18;
    }
    if (!tmp17) {
      if (tmp19) {
        if (typeof stateNode2.componentWillReceiveProps === "function") {
          const result3 = stateNode2.componentWillReceiveProps(memoizedProps, tmp12);
        }
        if (typeof stateNode2.UNSAFE_componentWillReceiveProps === "function") {
          const result4 = stateNode2.UNSAFE_componentWillReceiveProps(memoizedProps, tmp12);
        }
        if (stateNode2.state !== stateNode2.state) {
          closure_213.enqueueReplaceState(stateNode2, stateNode2.state, null);
        }
      }
      tmp19 = memoizedProps !== pendingProps || stateNode2.context !== tmp12;
    }
    c150 = false;
    const memoizedState = dependencies.memoizedState;
    stateNode2.state = memoizedState;
    processUpdateQueue(dependencies, memoizedProps, stateNode2, c286);
    if (c153) {
      if (null !== c125) {
        throw c125;
      }
    }
    let memoizedState2 = dependencies.memoizedState;
    if (memoizedProps === pendingProps) {
      if (memoizedState === memoizedState2) {
        if (!c150) {
          if (null !== updateQueue) {
            if (null !== updateQueue.dependencies) {
              let iter = updateQueue.dependencies.firstContext;
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
          const componentDidUpdate = stateNode2.componentDidUpdate;
          let tmp31 = typeof componentDidUpdate !== "function";
          if (typeof componentDidUpdate === "function") {
            tmp31 = memoizedProps === updateQueue.memoizedProps && memoizedState === updateQueue.memoizedState;
          }
          if (!tmp31) {
            dependencies.flags = dependencies.flags | 4;
          }
          const getSnapshotBeforeUpdate = stateNode2.getSnapshotBeforeUpdate;
          let tmp33 = typeof getSnapshotBeforeUpdate !== "function";
          if (typeof getSnapshotBeforeUpdate === "function") {
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
    let tmp37 = c150;
    if (!c150) {
      tmp37 = checkShouldComponentUpdate(dependencies, defaultProps, tmp6, memoizedProps, memoizedState, memoizedState2, tmp12);
    }
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
      const componentDidUpdate2 = stateNode2.componentDidUpdate;
      let tmp49 = typeof componentDidUpdate2 !== "function";
      if (typeof componentDidUpdate2 === "function") {
        tmp49 = memoizedProps === updateQueue.memoizedProps && memoizedState === updateQueue.memoizedState;
      }
      if (!tmp49) {
        dependencies.flags = dependencies.flags | 4;
      }
      const getSnapshotBeforeUpdate2 = stateNode2.getSnapshotBeforeUpdate;
      let tmp51 = typeof getSnapshotBeforeUpdate2 !== "function";
      if (typeof getSnapshotBeforeUpdate2 === "function") {
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
  return finishClassComponent(updateQueue, dependencies, defaultProps, flag3, 0, c286);
}
function finishClassComponent(updateQueue, ref, type3, flag3, arg4, c286) {
  let tmp = updateQueue;
  if (null === ref.ref) {
    if (tmp4) {
      ref.flags = ref.flags | 4194816;
    }
    tmp4 = null !== tmp && null !== tmp.ref;
  } else {
    if (typeof ref !== "function") {
      if (typeof ref !== "object") {
        const _Error = Error;
        throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");
      }
    }
    if (!tmp2) {
      ref.flags = ref.flags | 4194816;
    }
    tmp2 = null !== tmp && tmp.ref === ref;
  }
  if (!flag3) {
    if (!tmp5) {
      return bailoutOnAlreadyFinishedWork(tmp, ref, c286);
    }
  }
  let state = ref.stateNode;
  if (!(128 & ref.ref.flags)) {
    let renderResult = state.render();
  } else {
    renderResult = null;
  }
  ref.ref.flags = ref.ref.flags | 1;
  if (null === tmp) {
    if (null === tmp) {
      let tmp13 = callback4(ref, null, renderResult, c286);
    } else {
      tmp13 = callback3(ref, tmp.child, renderResult, c286);
    }
    ref.child = tmp13;
    state = state.state;
    ref.memoizedState = state;
    const child = ref.child;
  }
  tmp = callback3(ref, tmp.child, null, c286);
  ref.ref.child = tmp;
  ref.ref.child = callback3(ref.ref, null, renderResult, c286);
}
function updateSuspenseComponent(memoizedState, pendingProps, lanes) {
  pendingProps = pendingProps.pendingProps;
  let tmp2 = tmp;
  if (!(128 & pendingProps.flags)) {
    let tmp4 = null === memoizedState || null !== memoizedState.memoizedState;
    if (tmp4) {
      tmp4 = 2 & closure_162.current;
    }
    tmp2 = tmp4;
  }
  let flag = false;
  if (tmp2) {
    pendingProps.flags = pendingProps.flags & -129;
    flag = true;
  }
  pendingProps.flags = pendingProps.flags & -33;
  if (null === memoizedState) {
    const children = pendingProps.children;
    if (flag) {
      const sum = sum15 + 1;
      sum15 = sum;
      ({ current: closure_85[tmp110], current: closure_162.current } = closure_162);
      const sum1 = sum15 + 1;
      sum15 = sum1;
      ({ current: closure_85[tmp114], current: closure_159.current } = closure_159);
      ({ mode: mode2, child: child7 } = pendingProps);
      let obj = { mode: "hidden", children: null };
      obj[1] = children;
      if (!(1 & mode2)) {
        if (null !== child7) {
          child7.childLanes = 0;
          child7.pendingProps = obj;
        }
        obj = Object.create(FiberNode.prototype);
        obj1 = { tag: 7, key: null, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: tmp94, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: mode2, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
        child7.return = pendingProps;
        obj1.return = pendingProps;
        child7.sibling = obj1;
        pendingProps.child = child7;
        const child8 = pendingProps.child;
        obj2 = { baseLanes: null, cachePool: null };
        obj2[0] = lanes;
        let pooledCache4 = closure_128.current;
        if (null === pooledCache4) {
          pooledCache4 = _null6.pooledCache;
        }
        let tmp121 = null;
        if (null !== pooledCache4) {
          obj3 = { parent: null, pool: null };
          obj3[0] = closure_107._currentValue2;
          obj3[1] = pooledCache4;
          tmp121 = obj3;
        }
        obj2[1] = tmp121;
        child8.memoizedState = obj2;
        let num30 = 0;
        if (null !== memoizedState) {
          num30 = memoizedState.childLanes & ~lanes;
        }
        let tmp123 = num30;
        if (tmp6) {
          tmp123 = num30 | c291;
        }
        child8.childLanes = tmp123;
        pendingProps.memoizedState = closure_232;
        if (null === child8.stateNode) {
          child8.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null };
        }
        let sibling = child8.sibling;
      }
      Object.create(FiberNode.prototype);
      obj5 = { tag: 22, key: null, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: obj, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: mode2, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null };
      child7 = obj5;
    } else {
      const alternate4 = pendingProps.alternate;
      const sum2 = sum15 + 1;
      sum15 = sum2;
      closure_85[sum2] = closure_162.current;
      closure_162.current = 1 & closure_162.current;
      const sum3 = sum15 + 1;
      sum15 = sum3;
      closure_85[sum3] = closure_159.current;
      closure_159.current = pendingProps;
      let tmp103 = null === closure_160;
      if (tmp103) {
        let tmp104 = null === alternate4;
        if (!tmp104) {
          tmp104 = null !== closure_157.current;
        }
        if (!tmp104) {
          tmp104 = null !== alternate4.memoizedState;
        }
        tmp103 = tmp104;
      }
      if (tmp103) {
        closure_160 = pendingProps;
      }
      const obj6 = { mode: "visible", children: null };
      obj6[1] = children;
      Object.create(FiberNode.prototype);
      sibling = { tag: 22, key: null, elementType: null, type: null, stateNode: null, return: pendingProps, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: obj6, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: pendingProps.mode, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null };
      pendingProps.child = sibling;
    }
    return sibling;
  } else {
    const memoizedState2 = memoizedState.memoizedState;
    if (null !== memoizedState2) {
      if (null !== memoizedState2.dehydrated) {
        if (tmp) {
          if (256 & pendingProps.flags) {
            const alternate3 = pendingProps.alternate;
            const sum4 = sum15 + 1;
            sum15 = sum4;
            closure_85[sum4] = closure_162.current;
            closure_162.current = 1 & closure_162.current;
            const sum5 = sum15 + 1;
            sum15 = sum5;
            closure_85[sum5] = closure_159.current;
            closure_159.current = pendingProps;
            let tmp84 = null === closure_160;
            if (tmp84) {
              let tmp85 = null === alternate3;
              if (!tmp85) {
                tmp85 = null !== closure_157.current;
              }
              if (!tmp85) {
                tmp85 = null !== alternate3.memoizedState;
              }
              tmp84 = tmp85;
            }
            if (tmp84) {
              closure_160 = pendingProps;
            }
            pendingProps.flags = pendingProps.flags & -257;
            callback3(pendingProps, memoizedState.child, null, lanes);
            obj8 = { mode: "visible", children: null };
            obj8[1] = pendingProps.pendingProps.children;
            Object.create(FiberNode.prototype);
            obj10 = { tag: 22, key: null, elementType: null, type: null, stateNode: null, return: pendingProps, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: obj8, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: pendingProps.mode, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null };
            pendingProps.child = obj10;
            obj10.flags = obj10.flags | 2;
            pendingProps.memoizedState = null;
            let sibling1 = obj10;
          } else if (null !== pendingProps.memoizedState) {
            const sum6 = sum15 + 1;
            sum15 = sum6;
            ({ current: closure_85[tmp71], current: closure_162.current } = closure_162);
            const sum7 = sum15 + 1;
            sum15 = sum7;
            ({ current: closure_85[tmp75], current: closure_159.current } = closure_159);
            pendingProps.child = memoizedState.child;
            pendingProps.flags = pendingProps.flags | 128;
            sibling1 = null;
          } else {
            const sum8 = sum15 + 1;
            sum15 = sum8;
            ({ current: closure_85[tmp130], current: closure_162.current } = closure_162);
            const sum9 = sum15 + 1;
            sum15 = sum9;
            ({ current: closure_85[tmp134], current: closure_159.current } = closure_159);
            const mode3 = pendingProps.mode;
            const obj11 = { mode: "visible", children: null };
            obj11[1] = pendingProps.children;
            Object.create(FiberNode.prototype);
            const obj13 = { tag: 22, key: null, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: obj11, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: mode3, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null };
            Object.create(FiberNode.prototype);
            const obj15 = { tag: 7, key: null, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: pendingProps.fallback, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: mode3, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
            obj15.flags = obj15.flags | 2;
            obj13.return = pendingProps;
            obj15.return = pendingProps;
            obj13.sibling = obj15;
            pendingProps.child = obj13;
            if (1 & pendingProps.mode) {
              callback3(pendingProps, memoizedState.child, null, lanes);
            }
            const child6 = pendingProps.child;
            const obj16 = { baseLanes: null, cachePool: null };
            obj16[0] = lanes;
            let pooledCache3 = closure_128.current;
            if (null === pooledCache3) {
              pooledCache3 = _null6.pooledCache;
            }
            let tmp63 = null;
            if (null !== pooledCache3) {
              const obj17 = { parent: null, pool: null };
              obj17[0] = closure_107._currentValue2;
              obj17[1] = pooledCache3;
              tmp63 = obj17;
            }
            obj16[1] = tmp63;
            child6.memoizedState = obj16;
            let num15 = 0;
            if (null !== memoizedState) {
              num15 = memoizedState.childLanes & ~lanes;
            }
            let tmp65 = num15;
            if (tmp6) {
              tmp65 = num15 | c291;
            }
            child6.childLanes = tmp65;
            pendingProps.memoizedState = closure_232;
            if (null === child6.stateNode) {
              child6.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null };
            }
            sibling1 = child6.sibling;
          }
          return sibling1;
        } else {
          const alternate2 = pendingProps.alternate;
          const sum10 = sum15 + 1;
          sum15 = sum10;
          closure_85[sum10] = closure_162.current;
          closure_162.current = 1 & closure_162.current;
          const sum11 = sum15 + 1;
          sum15 = sum11;
          closure_85[sum11] = closure_159.current;
          closure_159.current = pendingProps;
          let tmp52 = null === closure_160;
          if (tmp52) {
            let tmp53 = null === alternate2;
            if (!tmp53) {
              tmp53 = null !== closure_157.current;
            }
            if (!tmp53) {
              tmp53 = null !== alternate2.memoizedState;
            }
            tmp52 = tmp53;
          }
          if (tmp52) {
            closure_160 = pendingProps;
          }
          const _Error = Error;
          throw Error("The current renderer does not support hydration. This error is likely caused by a bug in React. Please file an issue.");
        }
      }
    }
    if (flag) {
      const sum12 = sum15 + 1;
      sum15 = sum12;
      ({ current: closure_85[tmp23], current: closure_162.current } = closure_162);
      const sum13 = sum15 + 1;
      sum15 = sum13;
      ({ current: closure_85[tmp27], current: closure_159.current } = closure_159);
      const fallback = pendingProps.fallback;
      const mode = pendingProps.mode;
      const child2 = memoizedState.child;
      const sibling2 = child2.sibling;
      const obj18 = { mode: "hidden", children: null };
      obj18[1] = pendingProps.children;
      if (!(1 & mode)) {
        if (pendingProps.child !== child2) {
          let child3 = pendingProps.child;
          child3.childLanes = 0;
          child3.pendingProps = obj18;
          pendingProps.deletions = null;
        }
        if (null !== sibling2) {
          let obj20 = createWorkInProgress(sibling2, fallback);
        } else {
          Object.create(FiberNode.prototype);
          obj20 = { tag: 7, key: null, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: fallback, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
          obj20.flags = obj20.flags | 2;
        }
        obj20.return = pendingProps;
        child3.return = pendingProps;
        child3.sibling = obj20;
        pendingProps.child = child3;
        if (null === child3.stateNode) {
          child3.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null };
        }
        const sibling3 = child3.sibling;
        const child4 = pendingProps.child;
        memoizedState = memoizedState.child.memoizedState;
        if (null === memoizedState) {
          const obj21 = { baseLanes: null, cachePool: null };
          obj21[0] = lanes;
          let pooledCache2 = closure_128.current;
          if (null === pooledCache2) {
            pooledCache2 = _null6.pooledCache;
          }
          let tmp38 = null;
          if (null !== pooledCache2) {
            const obj22 = { parent: null, pool: null };
            obj22[0] = closure_107._currentValue2;
            obj22[1] = pooledCache2;
            tmp38 = obj22;
          }
          obj21[1] = tmp38;
          let obj25 = obj21;
        } else {
          let cachePool = memoizedState.cachePool;
          if (null !== cachePool) {
            const _currentValue2 = closure_107._currentValue2;
            if (cachePool.parent !== _currentValue2) {
              const obj23 = { parent: null, pool: null };
              obj23[0] = _currentValue2;
              obj23[1] = _currentValue2;
              cachePool = obj23;
            }
            let tmp33 = cachePool;
          } else {
            let pooledCache = closure_128.current;
            if (null === pooledCache) {
              pooledCache = _null6.pooledCache;
            }
            tmp33 = null;
            if (null !== pooledCache) {
              const obj24 = { parent: null, pool: null };
              obj24[0] = closure_107._currentValue2;
              obj24[1] = pooledCache;
              tmp33 = obj24;
            }
          }
          obj25 = { baseLanes: null, cachePool: null };
          obj25[0] = memoizedState.baseLanes | lanes;
          obj25[1] = tmp33;
        }
        child4.memoizedState = obj25;
        let num11 = 0;
        if (null !== memoizedState) {
          num11 = memoizedState.childLanes & ~lanes;
        }
        let tmp40 = num11;
        if (tmp6) {
          tmp40 = num11 | c291;
        }
        child4.childLanes = tmp40;
        pendingProps.memoizedState = closure_232;
        const child5 = memoizedState.child;
        let tmp43 = null !== child5;
        if (tmp43) {
          tmp43 = 22 === child5.tag;
        }
        if (!tmp43) {
          tmp43 = null !== child4.stateNode;
        }
        if (!tmp43) {
          child4.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null };
        }
        return child4.sibling;
      }
      const tmp29 = createWorkInProgress(child2, obj18);
      tmp29.subtreeFlags = 65011712 & child2.subtreeFlags;
      child3 = tmp29;
    } else {
      const alternate = pendingProps.alternate;
      const sum14 = sum15 + 1;
      sum15 = sum14;
      closure_85[sum14] = closure_162.current;
      closure_162.current = 1 & closure_162.current;
      sum15 = sum15 + 1;
      closure_85[sum15] = closure_159.current;
      closure_159.current = pendingProps;
      let tmp15 = null === closure_160;
      if (tmp15) {
        let tmp16 = null === alternate;
        if (!tmp16) {
          tmp16 = null !== closure_157.current;
        }
        if (!tmp16) {
          tmp16 = null !== alternate.memoizedState;
        }
        tmp15 = tmp16;
      }
      if (tmp15) {
        closure_160 = pendingProps;
      }
      const child = memoizedState.child;
      sibling = child.sibling;
      obj = { mode: "visible", children: null };
      obj[1] = pendingProps.children;
      const tmp19 = createWorkInProgress(child, obj);
      if (!(1 & pendingProps.mode)) {
        tmp19.lanes = lanes;
      }
      tmp19.return = pendingProps;
      tmp19.sibling = null;
      if (null !== sibling) {
        const deletions = pendingProps.deletions;
        if (null === deletions) {
          const items = [sibling];
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
function updateSuspenseListComponent(child, pendingProps, c286) {
  ({ revealOrder, tail, children } = pendingProps.pendingProps);
  const current = closure_162.current;
  if (2 & current) {
    let tmp3 = 1 & current | 2;
    pendingProps.flags = pendingProps.flags | 128;
  } else {
    tmp3 = current & 1;
  }
  const sum = c86 + 1;
  c86 = sum;
  closure_85[sum] = closure_162.current;
  closure_162.current = tmp3;
  if (null === child) {
    let tmp9 = callback4(pendingProps, null, children, c286);
  } else {
    tmp9 = callback3(pendingProps, child.child, children, c286);
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
                child.lanes = child.lanes | c286;
                let alternate6 = child.alternate;
                if (null !== alternate6) {
                  alternate6.lanes = alternate6.lanes | c286;
                }
                let _return2 = child.return;
                if (null !== _return2) {
                  while (true) {
                    let alternate3 = _return2.alternate;
                    if ((_return2.childLanes & c286) !== c286) {
                      _return2.childLanes = _return2.childLanes | c286;
                      if (null !== alternate3) {
                        alternate3.childLanes = alternate3.childLanes | c286;
                      }
                    } else {
                      let tmp19 = null !== alternate3 && (alternate3.childLanes & c286) !== c286;
                      if (tmp19) {
                        alternate3.childLanes = alternate3.childLanes | c286;
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
              child.lanes = child.lanes | c286;
              let alternate = child.alternate;
              if (null !== alternate) {
                alternate.lanes = alternate.lanes | c286;
              }
              let _return = child.return;
              if (null !== _return) {
                while (true) {
                  let alternate2 = _return.alternate;
                  if ((_return.childLanes & c286) !== c286) {
                    _return.childLanes = _return.childLanes | c286;
                    if (null !== alternate2) {
                      alternate2.childLanes = alternate2.childLanes | c286;
                    }
                  } else {
                    let tmp17 = null !== alternate2 && (alternate2.childLanes & c286) !== c286;
                    if (tmp17) {
                      alternate2.childLanes = alternate2.childLanes | c286;
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
        let sibling4 = pendingProps.child;
        pendingProps.child = null;
      } else {
        sibling4 = tmp29.sibling;
        tmp29.sibling = null;
      }
      const memoizedState3 = pendingProps.memoizedState;
      if (null === memoizedState3) {
        let obj = { isBackwards: false, rendering: null, renderingStartTime: 0, last: null, tail: null, tailMode: null, treeForkCount: 0 };
        obj[3] = tmp29;
        obj[4] = sibling4;
        obj[5] = tail;
        pendingProps.memoizedState = obj;
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
            const memoizedState = pendingProps.memoizedState;
            if (null === memoizedState) {
              pendingProps.memoizedState = { isBackwards: false, rendering: null, renderingStartTime: 0, last: null, tail: null, tailMode: "disabled", treeForkCount: false };
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
        obj = { isBackwards: true, rendering: null, renderingStartTime: 0, last: null, tail: null, tailMode: null, treeForkCount: 0 };
        obj[4] = tmp24;
        obj[5] = tail;
        pendingProps.memoizedState = obj;
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
function beginWork(alternate, closure_279, c286) {
  if (null !== alternate) {
    if (alternate.memoizedProps !== _null4.pendingProps) {
      c222 = true;
    } else {
      let tmp7 = alternate.lanes & c286;
      if (!tmp7) {
        const dependencies = alternate.dependencies;
        let tmp4 = null === dependencies;
        if (!tmp4) {
          let iter = dependencies.firstContext;
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
        if (!(128 & _null4.flags)) {
          c222 = false;
          switch (_null4.tag) {
            case 3:
              pushHostContainer(_null4, _null4.stateNode.containerInfo);
              const sum = sum24 + 1;
              sum24 = sum;
              closure_85[sum] = closure_101.current;
              closure_101.current = closure_107._currentValue2;
              closure_107._currentValue2 = alternate.memoizedState.cache;
              bailoutOnAlreadyFinishedWork(alternate, _null4, c286);
              _null4.lanes = 0;
              let tmp17 = updateOffscreenComponent(alternate, _null4, c286, _null4.pendingProps);
              return tmp17;
            case 4:
              pushHostContainer(_null4, _null4.stateNode.containerInfo);
            break;
            case 5:
              if (null !== _null4.memoizedState) {
                let sum1 = sum24 + 1;
                sum24 = sum1;
                closure_85[sum1] = closure_96.current;
                closure_96.current = _null4;
              }
              let tmp68 = closure_93;
              let current = closure_93.current;
              if (current != current) {
                let sum2 = sum24 + 1;
                sum24 = sum2;
                closure_85[sum2] = closure_94.current;
                closure_94.current = _null4;
                let sum3 = sum24 + 1;
                sum24 = sum3;
                closure_85[sum3] = tmp68.current;
                tmp68.current = current;
              }
            break;
            case 6:
            break;
            case 7:
            break;
            case 8:
            break;
            case 9:
            break;
            case 10:
              const type = _null4.type;
              const sum4 = sum24 + 1;
              sum24 = sum4;
              closure_85[sum4] = closure_101.current;
              closure_101.current = type._currentValue2;
              type._currentValue2 = _null4.memoizedProps.value;
            break;
            case 11:
            break;
            case 12:
            break;
            case 13:
              const memoizedState2 = _null4.memoizedState;
              if (null !== memoizedState2) {
                if (null !== memoizedState2.dehydrated) {
                  const alternate2 = _null4.alternate;
                  const sum5 = sum24 + 1;
                  sum24 = sum5;
                  closure_85[sum5] = closure_162.current;
                  closure_162.current = 1 & closure_162.current;
                  const sum6 = sum24 + 1;
                  sum24 = sum6;
                  closure_85[sum6] = closure_159.current;
                  closure_159.current = _null4;
                  let tmp55 = null === closure_160;
                  if (tmp55) {
                    let tmp56 = null === alternate2;
                    if (!tmp56) {
                      tmp56 = null !== closure_157.current;
                    }
                    if (!tmp56) {
                      tmp56 = null !== alternate2.memoizedState;
                    }
                    tmp55 = tmp56;
                  }
                  if (tmp55) {
                    closure_160 = _null4;
                  }
                  _null4.flags = _null4.flags | 128;
                  let sibling = null;
                } else if (c286 & _null4.child.childLanes) {
                  sibling = updateSuspenseComponent(alternate, _null4, c286);
                } else {
                  alternate = _null4.alternate;
                  const sum7 = sum24 + 1;
                  sum24 = sum7;
                  closure_85[sum7] = closure_162.current;
                  closure_162.current = 1 & closure_162.current;
                  const sum8 = sum24 + 1;
                  sum24 = sum8;
                  closure_85[sum8] = closure_159.current;
                  closure_159.current = _null4;
                  let tmp40 = null === closure_160;
                  if (tmp40) {
                    let tmp41 = null === alternate;
                    if (!tmp41) {
                      tmp41 = null !== closure_157.current;
                    }
                    if (!tmp41) {
                      tmp41 = null !== alternate.memoizedState;
                    }
                    tmp40 = tmp41;
                  }
                  if (tmp40) {
                    closure_160 = _null4;
                  }
                  const tmp44 = bailoutOnAlreadyFinishedWork(alternate, _null4, c286);
                  sibling = null;
                  if (null !== tmp44) {
                    sibling = tmp44.sibling;
                  }
                }
                tmp17 = sibling;
              } else {
                const alternate3 = _null4.alternate;
                const sum9 = sum24 + 1;
                sum24 = sum9;
                closure_85[sum9] = closure_162.current;
                closure_162.current = 1 & closure_162.current;
                const sum10 = sum24 + 1;
                sum24 = sum10;
                closure_85[sum10] = closure_159.current;
                closure_159.current = _null4;
                let tmp31 = null === closure_160;
                if (tmp31) {
                  let tmp29 = null === alternate3;
                  if (!tmp29) {
                    tmp29 = null !== closure_157.current;
                  }
                  if (!tmp29) {
                    tmp29 = null !== alternate3.memoizedState;
                  }
                  tmp31 = tmp29;
                }
                if (tmp31) {
                  closure_160 = _null4;
                }
              }
            break;
            case 14:
            break;
            case 15:
            break;
            case 16:
            break;
            case 17:
            break;
            case 18:
            break;
            case 19:
              let tmp19 = c286 & _null4.childLanes;
              if (!tmp19) {
                propagateParentContextChanges(0, _null4, c286, false);
                tmp19 = c286 & _null4.childLanes;
              }
              if (!tmp18) {
                const memoizedState = _null4.memoizedState;
                if (null !== memoizedState) {
                  memoizedState.rendering = null;
                  memoizedState.tail = null;
                  memoizedState.lastEffect = null;
                }
                const sum11 = sum24 + 1;
                sum24 = sum11;
                ({ current: closure_85[tmp26], current: closure_162.current } = closure_162);
                tmp17 = null;
              } else if (tmp19) {
                tmp17 = updateSuspenseListComponent(alternate, _null4, c286);
              } else {
                _null4.flags = _null4.flags | 128;
              }
              tmp18 = 128 & alternate.flags;
            break;
            case 20:
            break;
            case 21:
            break;
            case 22:
            break;
            case 23:
            break;
            case 24:
              const sum12 = sum24 + 1;
              sum24 = sum12;
              closure_85[sum12] = closure_101.current;
              closure_101.current = closure_107._currentValue2;
              closure_107._currentValue2 = alternate.memoizedState.cache;
            break;
            case 25:
            break;
            case 26:
            break;
            case 27:
              if (null !== _null4.memoizedState) {
                sum1 = sum24 + 1;
                sum24 = sum1;
                closure_85[sum1] = closure_96.current;
                closure_96.current = _null4;
              }
              tmp68 = closure_93;
              current = closure_93.current;
              if (current != current) {
                sum2 = sum24 + 1;
                sum24 = sum2;
                closure_85[sum2] = closure_94.current;
                closure_94.current = _null4;
                sum3 = sum24 + 1;
                sum24 = sum3;
                closure_85[sum3] = tmp68.current;
                tmp68.current = current;
              }
            break;
            case 28:
            break;
            case 29:
            break;
            case 30:
            break;
            case 31:
              if (null !== _null4.memoizedState) {
                _null4.flags = _null4.flags | 128;
                const sum13 = sum24 + 1;
                sum24 = sum13;
                ({ current: closure_85[tmp467], current: closure_162.current } = closure_162);
                const sum14 = sum24 + 1;
                sum24 = sum14;
                closure_85[sum14] = closure_159.current;
                closure_159.current = _null4;
                tmp17 = null;
                if (null === closure_160) {
                  closure_160 = _null4;
                  tmp17 = null;
                }
              }
            break;
          }
        }
      }
      c222 = 131072 & alternate.flags;
    }
  } else {
    c222 = false;
  }
  _null4.lanes = 0;
  switch (_null4.tag) {
    case 0:
      ({ type: type6, pendingProps: pendingProps9 } = _null4);
      closure_102 = _null4;
      c103 = null;
      const dependencies6 = _null4.dependencies;
      if (null !== dependencies6) {
        dependencies6.firstContext = null;
      }
      const tmp391 = renderWithHooks(alternate, _null4, type6, pendingProps9, undefined, c286);
      if (null !== alternate) {
        if (!c222) {
          _null4.updateQueue = alternate.updateQueue;
          _null4.flags = _null4.flags & -2053;
          alternate.lanes = alternate.lanes & ~c286;
          return bailoutOnAlreadyFinishedWork(alternate, _null4, c286);
        }
      }
      _null4.flags = _null4.flags | 1;
      if (null === alternate) {
        let tmp399 = callback4(_null4, null, tmp391, c286);
      } else {
        tmp399 = callback3(_null4, alternate.child, tmp391, c286);
      }
      _null4.child = tmp399;
      const child2 = _null4.child;
    break;
    case 1:
      ({ type: type5, pendingProps: pendingProps8 } = _null4);
      let tmp370 = pendingProps8;
      if ("ref" in pendingProps8) {
        let obj = {};
        tmp370 = obj;
        const keys = Object.keys();
        if (keys !== undefined) {
          tmp370 = obj;
          while (keys[tmp] !== undefined) {
            if ("ref" === tmp373) {
              continue;
            } else {
              obj[tmp373] = pendingProps8[tmp373];
              continue;
            }
            continue;
          }
        }
      }
      const defaultProps3 = type5.defaultProps;
      let tmp374 = tmp370;
      if (defaultProps3) {
        let tmp375 = tmp370;
        if (tmp370 === pendingProps8) {
          tmp375 = assign({}, tmp370);
        }
        tmp374 = tmp375;
        const keys1 = Object.keys();
        if (keys1 !== undefined) {
          tmp374 = tmp375;
          while (keys1[tmp] !== undefined) {
            if (undefined !== tmp375[tmp379]) {
              continue;
            } else {
              tmp375[tmp379] = defaultProps3[tmp379];
              continue;
            }
            continue;
          }
        }
      }
      return updateClassComponent(alternate, _null4, type5, tmp374, c286);
    case 2:
      let _Error7 = Error;
      let tag = _null4.tag;
      let text = `Unknown unit of work tag (${tag}`;
      let text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      let ErrorResult = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
      throw ErrorResult;
    case 3:
      pushHostContainer(_null4, _null4.stateNode.containerInfo);
      if (null === alternate) {
        const _Error5 = Error;
        throw Error("Should have a current fiber. This is a bug in React.");
      } else {
        ({ pendingProps: pendingProps7, memoizedState: memoizedState4 } = _null4);
        const updateQueue2 = alternate.updateQueue;
        if (_null4.updateQueue === updateQueue2) {
          obj = { baseState: null, firstBaseUpdate: null, lastBaseUpdate: null, shared: null, callbacks: null };
          ({ baseState: obj15[0], firstBaseUpdate: obj15[1], lastBaseUpdate: obj15[2], shared: obj15[3] } = updateQueue2);
          _null4.updateQueue = obj;
        }
        processUpdateQueue(_null4, pendingProps7, null, c286);
        const memoizedState5 = _null4.memoizedState;
        const cache2 = memoizedState5.cache;
        const sum15 = sum24 + 1;
        sum24 = sum15;
        closure_85[sum15] = closure_101.current;
        closure_101.current = closure_107._currentValue2;
        closure_107._currentValue2 = cache2;
        if (cache2 !== memoizedState4.cache) {
          const items = [tmp346];
          propagateContextChanges(_null4, items, c286, true);
        }
        if (c153) {
          if (null !== c125) {
            throw c125;
          }
        }
        const element = memoizedState5.element;
        if (element === memoizedState4.element) {
          let child = bailoutOnAlreadyFinishedWork(alternate, _null4, c286);
        } else {
          if (tmp339) {
            let tmp361 = callback4(_null4, null, element, c286);
          } else {
            tmp361 = callback3(_null4, alternate.child, element, c286);
          }
          _null4.child = tmp361;
          child = _null4.child;
        }
        return child;
      }
    break;
    case 4:
      pushHostContainer(_null4, _null4.stateNode.containerInfo);
      const pendingProps6 = _null4.pendingProps;
      if (null === alternate) {
        _null4.child = callback3(_null4, null, pendingProps6, c286);
      } else {
        if (tmp284) {
          let tmp289 = callback4(_null4, null, pendingProps6, c286);
        } else {
          tmp289 = callback3(_null4, alternate.child, pendingProps6, c286);
        }
        _null4.child = tmp289;
      }
      return _null4.child;
    case 5:
      if (null !== _null4.memoizedState) {
        let sum16 = sum24 + 1;
        sum24 = sum16;
        closure_85[sum16] = closure_96.current;
        closure_96.current = _null4;
      }
      let tmp305 = closure_93;
      let current2 = closure_93.current;
      if (current2 != current2) {
        let sum17 = sum24 + 1;
        sum24 = sum17;
        closure_85[sum17] = closure_94.current;
        closure_94.current = _null4;
        let sum18 = sum24 + 1;
        sum24 = sum18;
        closure_85[sum18] = tmp305.current;
        tmp305.current = current2;
      }
      let children4 = _null4.pendingProps.children;
      if (null !== _null4.memoizedState) {
        let tmp319 = renderWithHooks(alternate, _null4, TransitionAwareHostComponent, null, null, c286);
        closure_366._currentValue2 = tmp319;
      }
      let ref = _null4.ref;
      if (null === ref) {
        let tmp325 = tmp3;
        if (tmp3) {
          tmp325 = null !== alternate.ref;
        }
        if (tmp325) {
          let tmp326 = _null4.flags | 4194816;
          _null4.flags = tmp326;
        }
      } else {
        if (typeof ref !== "function") {
          if (typeof ref !== "object") {
            let _Error4 = Error;
            let ErrorResult1 = Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");
            throw ErrorResult1;
          }
        }
        let tmp321 = tmp3;
        if (tmp3) {
          tmp321 = alternate.ref === ref;
        }
        if (!tmp321) {
          let tmp322 = _null4.flags | 4194816;
          _null4.flags = tmp322;
        }
      }
      if (null === alternate) {
        let tmp331 = callback4(_null4, null, children4, c286);
      } else {
        tmp331 = callback3(_null4, alternate.child, children4, c286);
      }
      _null4.child = tmp331;
      return _null4.child;
    case 6:
      return null;
    case 7:
      const pendingProps5 = _null4.pendingProps;
      if (null === alternate) {
        let tmp272 = callback4(_null4, null, pendingProps5, c286);
      } else {
        tmp272 = callback3(_null4, alternate.child, pendingProps5, c286);
      }
      _null4.child = tmp272;
      return _null4.child;
    case 8:
      let children3 = _null4.pendingProps.children;
      if (null === alternate) {
        let tmp262 = callback4(_null4, null, children3, c286);
      } else {
        tmp262 = callback3(_null4, alternate.child, children3, c286);
      }
      _null4.child = tmp262;
      return _null4.child;
    case 9:
      const _context = _null4.type._context;
      closure_102 = _null4;
      c103 = null;
      const dependencies5 = _null4.dependencies;
      if (null !== dependencies5) {
        dependencies5.firstContext = null;
      }
      const _currentValue22 = _context._currentValue2;
      obj1 = { context: null, memoizedValue: null, next: null };
      obj1[0] = _context;
      obj1[1] = _currentValue22;
      if (null === c103) {
        if (null === tmp230) {
          const _Error3 = Error;
          throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        } else {
          c103 = obj1;
          obj2 = { lanes: 0, firstContext: null };
          obj2[1] = obj1;
          tmp230.dependencies = obj2;
          tmp230.flags = tmp230.flags | 524288;
        }
      } else {
        tmp231.next = obj1;
        c103 = obj1;
      }
      const childrenResult = _null4.pendingProps.children(_currentValue22);
      _null4.flags = _null4.flags | 1;
      if (null === alternate) {
        let tmp237 = callback4(_null4, null, childrenResult, c286);
      } else {
        tmp237 = callback3(_null4, alternate.child, childrenResult, c286);
      }
      _null4.child = tmp237;
      return _null4.child;
    case 10:
      ({ pendingProps: pendingProps4, type: type4 } = _null4);
      const sum19 = sum24 + 1;
      sum24 = sum19;
      closure_85[sum19] = closure_101.current;
      closure_101.current = type4._currentValue2;
      ({ value: type4._currentValue2, children: children2 } = pendingProps4);
      if (null === alternate) {
        let tmp252 = callback4(_null4, null, children2, c286);
      } else {
        tmp252 = callback3(_null4, alternate.child, children2, c286);
      }
      _null4.child = tmp252;
      return _null4.child;
    case 11:
      return updateForwardRef(alternate, _null4, _null4.type, _null4.pendingProps, c286);
    case 12:
      children3 = _null4.pendingProps.children;
      if (null === alternate) {
        tmp262 = callback4(_null4, null, children3, c286);
      } else {
        tmp262 = callback3(_null4, alternate.child, children3, c286);
      }
      _null4.child = tmp262;
      return _null4.child;
    case 13:
      return updateSuspenseComponent(alternate, _null4, c286);
    case 14:
      return updateMemoComponent(alternate, _null4, _null4.type, _null4.pendingProps, c286);
    case 15:
      return updateSimpleMemoComponent(alternate, _null4, _null4.type, _null4.pendingProps, c286);
    case 16:
      let tmp406 = !tmp405;
      if (!(1 & _null4.mode)) {
        tmp406 = tmp3;
      }
      if (tmp406) {
        alternate.alternate = null;
        _null4.alternate = null;
        _null4.flags = _null4.flags | 2;
      }
      const pendingProps10 = _null4.pendingProps;
      const tmp408 = resolveLazy(_null4.elementType);
      _null4.type = tmp408;
      if (typeof tmp408 !== "function") {
        if (null != tmp408) {
          const $$typeof = tmp408.$$typeof;
          if ($$typeof === closure_20) {
            _null4.tag = 11;
            let child3 = updateForwardRef(null, _null4, tmp408, pendingProps10, c286);
          } else if ($$typeof === closure_23) {
            _null4.tag = 14;
            child3 = updateMemoComponent(null, _null4, tmp408, pendingProps10, c286);
          }
        }
        let tmp439 = getComponentNameFromType(tmp408);
        if (!tmp439) {
          tmp439 = tmp408;
        }
        const _Error6 = Error;
        throw Error("Element type is invalid. Received a promise that resolves to: " + tmp439 + ". Lazy element type must resolve to a class or function.");
      } else {
        const prototype = tmp408.prototype;
        let tmp409 = !prototype;
        if (prototype) {
          tmp409 = !prototype.isReactComponent;
        }
        if (!tmp409) {
          let tmp420 = pendingProps10;
          if ("ref" in pendingProps10) {
            obj3 = {};
            tmp420 = obj3;
            const keys2 = Object.keys();
            if (keys2 !== undefined) {
              tmp420 = obj3;
              while (keys2[tmp2] !== undefined) {
                if ("ref" === tmp423) {
                  continue;
                } else {
                  obj3[tmp423] = pendingProps10[tmp423];
                  continue;
                }
                continue;
              }
            }
          }
          const defaultProps4 = tmp408.defaultProps;
          let tmp424 = tmp420;
          if (defaultProps4) {
            let tmp425 = tmp420;
            if (tmp420 === pendingProps10) {
              tmp425 = assign({}, tmp420);
            }
            tmp424 = tmp425;
            const keys3 = Object.keys();
            if (keys3 !== undefined) {
              tmp424 = tmp425;
              while (keys3[tmp2] !== undefined) {
                if (undefined !== tmp425[tmp429]) {
                  continue;
                } else {
                  tmp425[tmp429] = defaultProps4[tmp429];
                  continue;
                }
                continue;
              }
            }
          }
          _null4.tag = 1;
          child3 = updateClassComponent(null, _null4, tmp408, tmp424, c286);
        } else {
          _null4.tag = 0;
          closure_102 = _null4;
          c103 = null;
          const dependencies7 = _null4.dependencies;
          if (null !== dependencies7) {
            dependencies7.firstContext = null;
          }
          _null4.flags = _null4.flags | 1;
          _null4.child = callback4(_null4, null, renderWithHooks(null, _null4, tmp408, pendingProps10, undefined, c286), c286);
          child3 = _null4.child;
        }
      }
      return child3;
    case 17:
      ({ type: type3, pendingProps: pendingProps3 } = _null4);
      let tmp197 = pendingProps3;
      if ("ref" in pendingProps3) {
        const obj4 = {};
        tmp197 = obj4;
        const keys4 = Object.keys();
        if (keys4 !== undefined) {
          tmp197 = obj4;
          while (keys4[tmp] !== undefined) {
            if ("ref" === tmp200) {
              continue;
            } else {
              obj4[tmp200] = pendingProps3[tmp200];
              continue;
            }
            continue;
          }
        }
      }
      const defaultProps2 = type3.defaultProps;
      let tmp201 = tmp197;
      if (defaultProps2) {
        let tmp202 = tmp197;
        if (tmp197 === pendingProps3) {
          tmp202 = assign({}, tmp197);
        }
        tmp201 = tmp202;
        const keys5 = Object.keys();
        if (keys5 !== undefined) {
          tmp201 = tmp202;
          while (keys5[tmp] !== undefined) {
            if (undefined !== tmp202[tmp206]) {
              continue;
            } else {
              tmp202[tmp206] = defaultProps2[tmp206];
              continue;
            }
            continue;
          }
        }
      }
      let tmp208 = !tmp207;
      if (!(1 & _null4.mode)) {
        tmp208 = tmp3;
      }
      if (tmp208) {
        alternate.alternate = null;
        _null4.alternate = null;
        _null4.flags = _null4.flags | 2;
      }
      _null4.tag = 1;
      closure_102 = _null4;
      c103 = null;
      const dependencies4 = _null4.dependencies;
      if (null !== dependencies4) {
        dependencies4.firstContext = null;
      }
      constructClassInstance(_null4, type3, tmp201);
      mountClassInstance(_null4, type3, tmp201, c286);
      return finishClassComponent(null, _null4, type3, true, 0, c286);
    case 18:
      _Error7 = Error;
      tag = _null4.tag;
      text = `Unknown unit of work tag (${tag}`;
      text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      ErrorResult = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
      throw ErrorResult;
    case 19:
      return updateSuspenseListComponent(alternate, _null4, c286);
    case 20:
      _Error7 = Error;
      tag = _null4.tag;
      text = `Unknown unit of work tag (${tag}`;
      text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      ErrorResult = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
      throw ErrorResult;
    case 21:
      _Error7 = Error;
      tag = _null4.tag;
      text = `Unknown unit of work tag (${tag}`;
      text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      ErrorResult = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
      throw ErrorResult;
    case 22:
      return updateOffscreenComponent(alternate, _null4, c286, _null4.pendingProps);
    case 23:
      _Error7 = Error;
      tag = _null4.tag;
      text = `Unknown unit of work tag (${tag}`;
      text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      ErrorResult = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
      throw ErrorResult;
    case 24:
      closure_102 = _null4;
      c103 = null;
      const dependencies2 = _null4.dependencies;
      if (null !== dependencies2) {
        dependencies2.firstContext = null;
      }
      const _currentValue2 = closure_107._currentValue2;
      obj = { context: null, memoizedValue: null, next: null };
      obj[0] = closure_107;
      obj[1] = _currentValue2;
      if (null === c103) {
        if (null === tmp79) {
          const _Error = Error;
          throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        } else {
          c103 = obj;
          obj5 = { lanes: 0, firstContext: null };
          obj5[1] = obj;
          tmp79.dependencies = obj5;
          tmp79.flags = tmp79.flags | 524288;
        }
      } else {
        tmp80.next = obj;
        c103 = obj;
      }
      if (null === alternate) {
        let pooledCache = closure_128.current;
        if (null === pooledCache) {
          pooledCache = _null6.pooledCache;
        }
        if (null === pooledCache) {
          const obj6 = { controller: null, data: null, refCount: 0 };
          const tmp104 = new closure_106();
          obj6[0] = tmp104;
          const _Map = Map;
          map = new Map();
          obj6[1] = map;
          _null6.pooledCache = obj6;
          obj6.refCount = obj6.refCount + 1;
          _null6.pooledCacheLanes = _null6.pooledCacheLanes | c286;
          pooledCache = obj6;
        }
        const obj7 = { parent: null, cache: null };
        obj7[0] = _currentValue2;
        obj7[1] = pooledCache;
        _null4.memoizedState = obj7;
        obj8 = { baseState: null, firstBaseUpdate: null, lastBaseUpdate: null, shared: null, callbacks: null };
        obj8[0] = _null4.memoizedState;
        obj8[3] = { pending: null, lanes: 0, hiddenCallbacks: null };
        _null4.updateQueue = obj8;
        const sum20 = sum24 + 1;
        sum24 = sum20;
        closure_85[sum20] = closure_101.current;
        closure_101.current = closure_107._currentValue2;
        closure_107._currentValue2 = pooledCache;
      } else {
        if (alternate.lanes & c286) {
          const updateQueue = alternate.updateQueue;
          if (_null4.updateQueue === updateQueue) {
            ({ baseState: obj2[0], firstBaseUpdate: obj2[1], lastBaseUpdate: obj2[2], shared: obj2[3] } = updateQueue);
            _null4.updateQueue = { baseState: null, firstBaseUpdate: null, lastBaseUpdate: null, shared: null, callbacks: null };
          }
          processUpdateQueue(_null4, null, null, c286);
          if (c153) {
            if (null !== c125) {
              throw c125;
            }
          }
        }
        const memoizedState3 = alternate.memoizedState;
        if (memoizedState3.parent !== _currentValue2) {
          obj10 = { parent: null, cache: null };
          obj10[0] = _currentValue2;
          obj10[1] = _currentValue2;
          _null4.memoizedState = obj10;
          if (0 === _null4.lanes) {
            _null4.updateQueue.baseState = obj10;
            _null4.memoizedState = obj10;
          }
          const sum21 = sum24 + 1;
          sum24 = sum21;
          closure_85[sum21] = closure_101.current;
          closure_101.current = closure_107._currentValue2;
          closure_107._currentValue2 = _currentValue2;
        } else {
          const cache = tmp89.cache;
          const sum22 = sum24 + 1;
          sum24 = sum22;
          closure_85[sum22] = closure_101.current;
          closure_101.current = closure_107._currentValue2;
          closure_107._currentValue2 = cache;
          if (cache !== memoizedState3.cache) {
            const items1 = [closure_107];
            propagateContextChanges(_null4, items1, c286, true);
          }
        }
      }
      const children = _null4.pendingProps.children;
      if (null === alternate) {
        let tmp119 = callback4(_null4, null, children, c286);
      } else {
        tmp119 = callback3(_null4, alternate.child, children, c286);
      }
      _null4.child = tmp119;
      return _null4.child;
    case 25:
      _Error7 = Error;
      tag = _null4.tag;
      text = `Unknown unit of work tag (${tag}`;
      text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      ErrorResult = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
      throw ErrorResult;
    case 26:
      if (null !== _null4.memoizedState) {
        sum16 = sum24 + 1;
        sum24 = sum16;
        closure_85[sum16] = closure_96.current;
        closure_96.current = _null4;
      }
      tmp305 = closure_93;
      current2 = closure_93.current;
      if (current2 != current2) {
        sum17 = sum24 + 1;
        sum24 = sum17;
        closure_85[sum17] = closure_94.current;
        closure_94.current = _null4;
        sum18 = sum24 + 1;
        sum24 = sum18;
        closure_85[sum18] = tmp305.current;
        tmp305.current = current2;
      }
      children4 = _null4.pendingProps.children;
      if (null !== _null4.memoizedState) {
        tmp319 = renderWithHooks(alternate, _null4, TransitionAwareHostComponent, null, null, c286);
        closure_366._currentValue2 = tmp319;
      }
      ref = _null4.ref;
      if (null === ref) {
        tmp325 = tmp3;
        if (tmp3) {
          tmp325 = null !== alternate.ref;
        }
        if (tmp325) {
          tmp326 = _null4.flags | 4194816;
          _null4.flags = tmp326;
        }
      } else {
        if (typeof ref !== "function") {
          if (typeof ref !== "object") {
            _Error4 = Error;
            ErrorResult1 = Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");
            throw ErrorResult1;
          }
        }
        tmp321 = tmp3;
        if (tmp3) {
          tmp321 = alternate.ref === ref;
        }
        if (!tmp321) {
          tmp322 = _null4.flags | 4194816;
          _null4.flags = tmp322;
        }
      }
      if (null === alternate) {
        tmp331 = callback4(_null4, null, children4, c286);
      } else {
        tmp331 = callback3(_null4, alternate.child, children4, c286);
      }
      _null4.child = tmp331;
      return _null4.child;
    case 27:
      if (null !== _null4.memoizedState) {
        sum16 = sum24 + 1;
        sum24 = sum16;
        closure_85[sum16] = closure_96.current;
        closure_96.current = _null4;
      }
      tmp305 = closure_93;
      current2 = closure_93.current;
      if (current2 != current2) {
        sum17 = sum24 + 1;
        sum24 = sum17;
        closure_85[sum17] = closure_94.current;
        closure_94.current = _null4;
        sum18 = sum24 + 1;
        sum24 = sum18;
        closure_85[sum18] = tmp305.current;
        tmp305.current = current2;
      }
      children4 = _null4.pendingProps.children;
      if (null !== _null4.memoizedState) {
        tmp319 = renderWithHooks(alternate, _null4, TransitionAwareHostComponent, null, null, c286);
        closure_366._currentValue2 = tmp319;
      }
      ref = _null4.ref;
      if (null === ref) {
        tmp325 = tmp3;
        if (tmp3) {
          tmp325 = null !== alternate.ref;
        }
        if (tmp325) {
          tmp326 = _null4.flags | 4194816;
          _null4.flags = tmp326;
        }
      } else {
        if (typeof ref !== "function") {
          if (typeof ref !== "object") {
            _Error4 = Error;
            ErrorResult1 = Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");
            throw ErrorResult1;
          }
        }
        tmp321 = tmp3;
        if (tmp3) {
          tmp321 = alternate.ref === ref;
        }
        if (!tmp321) {
          tmp322 = _null4.flags | 4194816;
          _null4.flags = tmp322;
        }
      }
      if (null === alternate) {
        tmp331 = callback4(_null4, null, children4, c286);
      } else {
        tmp331 = callback3(_null4, alternate.child, children4, c286);
      }
      _null4.child = tmp331;
      return _null4.child;
    case 28:
      ({ type: type2, pendingProps: pendingProps2 } = _null4);
      let tmp175 = pendingProps2;
      if ("ref" in pendingProps2) {
        const obj11 = {};
        tmp175 = obj11;
        const keys6 = Object.keys();
        if (keys6 !== undefined) {
          tmp175 = obj11;
          while (keys6[tmp] !== undefined) {
            if ("ref" === tmp178) {
              continue;
            } else {
              obj11[tmp178] = pendingProps2[tmp178];
              continue;
            }
            continue;
          }
        }
      }
      const defaultProps = type2.defaultProps;
      let tmp179 = tmp175;
      if (defaultProps) {
        let tmp180 = tmp175;
        if (tmp175 === pendingProps2) {
          tmp180 = assign({}, tmp175);
        }
        tmp179 = tmp180;
        const keys7 = Object.keys();
        if (keys7 !== undefined) {
          tmp179 = tmp180;
          while (keys7[tmp] !== undefined) {
            if (undefined !== tmp180[tmp184]) {
              continue;
            } else {
              tmp180[tmp184] = defaultProps[tmp184];
              continue;
            }
            continue;
          }
        }
      }
      let tmp186 = !tmp185;
      if (!(1 & _null4.mode)) {
        tmp186 = tmp3;
      }
      if (tmp186) {
        alternate.alternate = null;
        _null4.alternate = null;
        _null4.flags = _null4.flags | 2;
      }
      _null4.tag = 0;
      closure_102 = _null4;
      c103 = null;
      const dependencies3 = _null4.dependencies;
      if (null !== dependencies3) {
        dependencies3.firstContext = null;
      }
      _null4.flags = _null4.flags | 1;
      _null4.child = callback4(_null4, null, renderWithHooks(null, _null4, type2, tmp179, undefined, c286), c286);
      return _null4.child;
    case 29:
      throw _null4.pendingProps;
    case 30:
      _Error7 = Error;
      tag = _null4.tag;
      text = `Unknown unit of work tag (${tag}`;
      text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      ErrorResult = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
      throw ErrorResult;
    case 31:
      const pendingProps = _null4.pendingProps;
      _null4.flags = _null4.flags & -129;
      if (null === alternate) {
        ({ mode: obj10[0], children: obj10[1] } = pendingProps);
        Object.create(FiberNode.prototype);
        const obj14 = { tag: 22, key: null, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: _null4.ref, refCleanup: null, pendingProps: { mode: null, children: null }, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: _null4.mode, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null };
        _null4.child = obj14;
        obj14.return = _null4;
        let tmp132 = obj14;
      } else {
        const memoizedState6 = alternate.memoizedState;
        if (null !== memoizedState6) {
          const sum23 = sum24 + 1;
          sum24 = sum23;
          ({ current: closure_85[tmp135], current: closure_162.current } = closure_162);
          sum24 = sum24 + 1;
          closure_85[sum24] = closure_159.current;
          closure_159.current = _null4;
          if (null === closure_160) {
            closure_160 = _null4;
          }
          if (tmp130) {
            if (256 & _null4.flags) {
              _null4.flags = _null4.flags & -257;
              tmp132 = retryActivityComponentWithoutHydrating(alternate, _null4, c286);
            } else if (null !== _null4.memoizedState) {
              _null4.child = alternate.child;
              _null4.flags = _null4.flags | 128;
              tmp132 = null;
            } else {
              const _Error2 = Error;
              throw Error("Client rendering an Activity suspended it again. This is a bug in React.");
            }
          } else {
            if (!c222) {
              propagateParentContextChanges(0, _null4, c286, false);
            }
            if (!c222) {
              if (!(c286 & alternate.childLanes)) {
                const obj15 = { mode: null, children: null };
                ({ mode: obj8[0], children: obj8[1] } = pendingProps);
                Object.create(FiberNode.prototype);
                const obj17 = { tag: 22, key: null, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: _null4.ref, refCleanup: null, pendingProps: obj15, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: _null4.mode, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null };
                _null4.child = obj17;
                obj17.return = _null4;
                obj17.flags = obj17.flags | 4096;
                tmp132 = obj17;
              }
            }
            if (null !== _null6) {
              let num34 = 1;
              if (!(42 & (c286 & -c286))) {
                if (2 === tmp484) {
                  num34 = 1;
                } else if (8 === tmp484) {
                  num34 = 4;
                } else if (32 === tmp484) {
                  num34 = 16;
                } else {
                  if (256 !== tmp484) {
                    if (512 !== tmp484) {
                      if (1024 !== tmp484) {
                        if (2048 !== tmp484) {
                          if (4096 !== tmp484) {
                            if (8192 !== tmp484) {
                              if (16384 !== tmp484) {
                                if (32768 !== tmp484) {
                                  if (65536 !== tmp484) {
                                    if (131072 !== tmp484) {
                                      if (262144 !== tmp484) {
                                        if (524288 !== tmp484) {
                                          if (1048576 !== tmp484) {
                                            if (2097152 !== tmp484) {
                                              if (4194304 !== tmp484) {
                                                if (8388608 !== tmp484) {
                                                  if (16777216 !== tmp484) {
                                                    if (33554432 !== tmp484) {
                                                      num34 = 134217728;
                                                      if (268435456 !== tmp484) {
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
              if (!(num34 & (_null6.suspendedLanes | c286))) {
                num36 = num34;
              }
              if (0 !== num36) {
                if (num36 !== memoizedState6.retryLane) {
                  memoizedState6.retryLane = num36;
                  enqueueConcurrentRenderForLane(alternate, num36);
                  scheduleUpdateOnFiber(_null6, alternate, num36);
                  throw closure_221;
                }
              }
            }
            c287 = 4;
            let tmp150 = c283;
            if (!c283) {
              let tmp153 = (4194048 & c280) !== c280;
              if (tmp153) {
                tmp153 = null !== closure_159.current;
              }
              tmp150 = tmp153;
            }
            if (!tmp150) {
              c284 = true;
            }
            let tmp156 = !tmp155;
            if (!(134217727 & c288)) {
              tmp156 = !(134217727 & c289);
            }
            if (!tmp156) {
              tmp156 = null === _null6;
            }
            if (!tmp156) {
              markRootSuspended(_null6, c280, c291, false);
            }
            tmp132 = retryActivityComponentWithoutHydrating(alternate, _null4, c286);
          }
        } else {
          ({ mode: obj7[0], children: obj7[1] } = pendingProps);
          tmp132 = createWorkInProgress(alternate.child, { mode: null, children: null });
          tmp132.ref = _null4.ref;
          _null4.child = tmp132;
          tmp132.return = _null4;
        }
      }
      return tmp132;
    default:
      _Error7 = Error;
      tag = _null4.tag;
      text = `Unknown unit of work tag (${tag}`;
      text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      ErrorResult = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
      throw ErrorResult;
  }
}
function appendAllChildren(node, child, arg2, arg3) {
  child = child.child;
  if (null !== child) {
    while (true) {
      if (5 === child.tag) {
        let stateNode = child.stateNode;
        let tmp9 = arg2;
        if (arg2) {
          tmp9 = arg3;
        }
        let tmp10 = stateNode;
        if (tmp9) {
          let obj = { style: null };
          obj[0] = { display: "none" };
          obj = { node: null, canonical: null };
          obj[0] = cloneNodeWithNewProps(stateNode.node, obj.createAttributePayload(obj, stateNode.canonical.viewConfig.validAttributes));
          obj[1] = stateNode.canonical;
          tmp10 = obj;
        }
        let tmp15 = appendChild(node.node, tmp10.node);
      } else if (6 === child.tag) {
        if (arg2) {
          if (arg3) {
            break;
          }
        }
        let tmp7 = appendChild(node.node, child.stateNode.node);
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
              let _return = tmp16.return;
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
  child = child.child;
  let flag = false;
  let flag2 = false;
  if (null !== child) {
    while (true) {
      if (5 === child.tag) {
        let stateNode = child.stateNode;
        let tmp10 = arg2;
        if (arg2) {
          tmp10 = arg3;
        }
        let tmp11 = stateNode;
        if (tmp10) {
          let obj = { style: null };
          obj[0] = { display: "none" };
          obj = { node: null, canonical: null };
          obj[0] = cloneNodeWithNewProps(stateNode.node, obj.createAttributePayload(obj, stateNode.canonical.viewConfig.validAttributes));
          obj[1] = stateNode.canonical;
          tmp11 = obj;
        }
        let tmp16 = appendChildToSet(arg0, tmp11.node);
        let flag3 = flag;
      } else if (6 === child.tag) {
        if (arg2) {
          if (arg3) {
            break;
          }
        }
        let tmp8 = appendChildToSet(arg0, child.stateNode.node);
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
            let tmp20 = flag;
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
              let _return = tmp17.return;
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
  let sibling = alternate.child;
  if (null !== alternate.alternate && alternate.alternate.child === alternate.child) {
    let num6 = 0;
    let num7 = 0;
    let num3 = 0;
    let num4 = 0;
    if (null !== sibling) {
      do {
        num7 = num7 | (sibling.lanes | sibling.childLanes);
        num6 = num6 | 65011712 & sibling.subtreeFlags | 65011712 & sibling.flags;
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
  switch (_return.tag) {
    case 3:
      closure_107._currentValue2 = closure_101.current;
      if (0 <= closure_86) {
        tmp65.current = dependencyMap3[tmp66];
        dependencyMap3[closure_86] = null;
        closure_86 = closure_86 - 1;
      }
      popHostContainer();
    break;
    case 4:
      popHostContainer();
    break;
    case 5:
      popHostContext(_return);
    break;
    case 6:
    break;
    case 7:
    break;
    case 8:
    break;
    case 9:
    break;
    case 10:
      _return.type._currentValue2 = closure_101.current;
      if (0 <= closure_86) {
        tmp37.current = dependencyMap3[tmp38];
        dependencyMap3[closure_86] = null;
        closure_86 = closure_86 - 1;
      }
    break;
    case 11:
    break;
    case 12:
    break;
    case 13:
      let tmp43 = closure_86;
      if (0 <= closure_86) {
        tmp41.current = dependencyMap3[tmp42];
        dependencyMap3[closure_86] = null;
        const diff = closure_86 - 1;
        closure_86 = diff;
        tmp43 = diff;
      }
      if (c160 === _return) {
        c160 = null;
      }
      if (0 <= tmp43) {
        tmp51.current = dependencyMap3[tmp43];
        dependencyMap3[closure_86] = null;
        closure_86 = closure_86 - 1;
      }
    break;
    case 14:
    break;
    case 15:
    break;
    case 16:
    break;
    case 17:
    break;
    case 18:
    break;
    case 19:
      if (0 <= closure_86) {
        tmp39.current = dependencyMap3[tmp40];
        dependencyMap3[closure_86] = null;
        closure_86 = closure_86 - 1;
      }
    break;
    case 20:
    break;
    case 21:
    break;
    case 22:
      let tmp4 = closure_159;
      let tmp5 = closure_86;
      let tmp6 = closure_86;
      if (0 <= closure_86) {
        tmp4.current = dependencyMap3[tmp5];
        dependencyMap3[closure_86] = null;
        let diff1 = closure_86 - 1;
        closure_86 = diff1;
        tmp6 = diff1;
      }
      if (c160 === _return) {
        c160 = null;
      }
      let tmp14 = closure_162;
      if (0 <= tmp6) {
        tmp14.current = dependencyMap3[tmp6];
        dependencyMap3[closure_86] = null;
        let diff2 = closure_86 - 1;
        closure_86 = diff2;
      }
      let tmp20 = closure_158;
      let current = closure_158.current;
      let tmp21 = closure_157;
      let tmp22 = closure_86;
      let tmp23 = closure_86;
      if (0 <= closure_86) {
        tmp21.current = dependencyMap3[tmp22];
        dependencyMap3[closure_86] = null;
        let diff3 = closure_86 - 1;
        closure_86 = diff3;
        tmp23 = diff3;
      }
      let tmp29 = tmp23;
      if (0 <= tmp23) {
        tmp20.current = dependencyMap3[tmp23];
        dependencyMap3[closure_86] = null;
        let diff4 = closure_86 - 1;
        closure_86 = diff4;
        tmp29 = diff4;
      }
      if (null !== alternate) {
        let tmp77 = closure_128;
        if (0 <= tmp29) {
          tmp77.current = dependencyMap3[tmp29];
          dependencyMap3[closure_86] = null;
          let diff5 = closure_86 - 1;
          closure_86 = diff5;
        }
      }
    break;
    case 23:
      tmp4 = closure_159;
      tmp5 = closure_86;
      tmp6 = closure_86;
      if (0 <= closure_86) {
        tmp4.current = dependencyMap3[tmp5];
        dependencyMap3[closure_86] = null;
        diff1 = closure_86 - 1;
        closure_86 = diff1;
        tmp6 = diff1;
      }
      if (c160 === _return) {
        c160 = null;
      }
      tmp14 = closure_162;
      if (0 <= tmp6) {
        tmp14.current = dependencyMap3[tmp6];
        dependencyMap3[closure_86] = null;
        diff2 = closure_86 - 1;
        closure_86 = diff2;
      }
      tmp20 = closure_158;
      current = closure_158.current;
      tmp21 = closure_157;
      tmp22 = closure_86;
      tmp23 = closure_86;
      if (0 <= closure_86) {
        tmp21.current = dependencyMap3[tmp22];
        dependencyMap3[closure_86] = null;
        diff3 = closure_86 - 1;
        closure_86 = diff3;
        tmp23 = diff3;
      }
      tmp29 = tmp23;
      if (0 <= tmp23) {
        tmp20.current = dependencyMap3[tmp23];
        dependencyMap3[closure_86] = null;
        diff4 = closure_86 - 1;
        closure_86 = diff4;
        tmp29 = diff4;
      }
      if (null !== alternate) {
        tmp77 = closure_128;
        if (0 <= tmp29) {
          tmp77.current = dependencyMap3[tmp29];
          dependencyMap3[closure_86] = null;
          diff5 = closure_86 - 1;
          closure_86 = diff5;
        }
      }
    break;
    case 24:
      closure_107._currentValue2 = closure_101.current;
      if (0 <= closure_86) {
        tmp2.current = dependencyMap3[tmp3];
        dependencyMap3[closure_86] = null;
        closure_86 = closure_86 - 1;
      }
    break;
    case 25:
    break;
    case 26:
      popHostContext(_return);
    break;
    case 27:
      popHostContext(_return);
    break;
    case 28:
    break;
    case 29:
    break;
    case 30:
    break;
    case 31:
      if (null !== _return.memoizedState) {
        let tmp57 = closure_86;
        if (0 <= closure_86) {
          tmp94.current = dependencyMap3[tmp95];
          dependencyMap3[closure_86] = null;
          const diff6 = closure_86 - 1;
          closure_86 = diff6;
          tmp57 = diff6;
        }
        if (c160 === _return) {
          c160 = null;
        }
        if (0 <= tmp57) {
          tmp59.current = dependencyMap3[tmp57];
          dependencyMap3[closure_86] = null;
          closure_86 = closure_86 - 1;
        }
      }
    break;
  }
}
function commitHookEffectListMount(arg0, sibling) {
  let next2;
  try {
    const updateQueue = sibling.updateQueue;
    let lastEffect = null;
    if (null !== updateQueue) {
      lastEffect = tmp2.lastEffect;
    }
    if (null !== lastEffect) {
      const next = iter.next;
      let iter2 = next;
      do {
        if ((iter2.tag & arg0) === arg0) {
          let obj = iter2.create();
          iter2.inst.destroy = obj;
        }
        next2 = iter2.next;
        iter2 = next2;
      } while (next2 !== tmp7);
    }
  } catch (tmp14) {
    captureCommitPhaseError(tmp, tmp.return, tmp14);
  }
}
function commitHookEffectListUnmount(arg0, sibling, sibling2) {
  try {
    const updateQueue = sibling.updateQueue;
    let lastEffect = null;
    if (null !== updateQueue) {
      lastEffect = tmp5.lastEffect;
    }
    if (null !== lastEffect) {
      const next2 = iter.next;
      let iter2 = next2;
      if ((iter2.tag & arg0) === arg0) {
        const inst = iter2.inst;
        if (undefined !== inst.destroy) {
          tmp11.destroy = undefined;
          try {
            tmp16();
          } catch (tmp19) {
            captureCommitPhaseError(tmp4, tmp3, tmp19);
          }
        }
      }
      const next = iter2.next;
      iter2 = next;
    }
  } catch (tmp26) {
    captureCommitPhaseError(tmp2, tmp2.return, tmp26);
  }
}
function commitClassCallbacks(sibling) {
  const updateQueue = sibling.updateQueue;
  if (null !== updateQueue) {
    try {
      commitCallbacks(updateQueue, tmp2);
    } catch (tmp5) {
      captureCommitPhaseError(tmp, tmp.return, tmp5);
    }
  }
}
function safelyCallComponentWillUnmount(sibling, sibling2, stateNode) {
  stateNode.props = resolveClassComponentProps(sibling.type, sibling.memoizedProps);
  stateNode.state = sibling.memoizedState;
  try {
    stateNode.componentWillUnmount();
  } catch (tmp4) {
    captureCommitPhaseError(tmp2, sibling2, tmp4);
  }
}
function safelyAttachRef(sibling, sibling2) {
  try {
    if (null !== sibling.ref) {
      const tag = sibling.tag;
      if (26 !== tag) {
        if (27 !== tag) {
          if (5 !== tag) {
            let stateNode = sibling.stateNode;
          }
          if (typeof tmp2 === "function") {
            sibling.refCleanup = ref(stateNode);
          } else {
            tmp2.current = stateNode;
          }
        }
      }
      stateNode = getPublicInstance(sibling.stateNode);
    }
  } catch (tmp6) {
    captureCommitPhaseError(tmp, sibling2, tmp6);
  }
}
function safelyDetachRef(alternate, alternate2) {
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
      } catch (tmp10) {
        tmp.refCleanup = tmp2;
        alternate2 = tmp.alternate;
        if (tmp2 != alternate2) {
          alternate2.refCleanup = tmp2;
        }
        throw tmp10;
      }
    } else if (typeof ref === "function") {
      try {
        ref(null);
      } catch (tmp6) {
        captureCommitPhaseError(tmp, tmp3, tmp6);
      }
    } else {
      ref.current = null;
    }
  }
}
function commitHostMount(sibling) {
  try {
    const _Error = Error;
    throw Error("The current renderer does not support mutation. This error is likely caused by a bug in React. Please file an issue.");
  } catch (tmp2) {
    captureCommitPhaseError(sibling, sibling.return, tmp2);
  }
}
function commitHostPortalContainerChildren(stateNode, c302, childSet) {
  try {
    completeRoot(tmp.containerTag, childSet);
  } catch (tmp5) {
    captureCommitPhaseError(_null6, _null6.return, tmp5);
  }
}
function commitLayoutEffectOnFiber(arg0, alternate, c302) {
  const flags = _null6.flags;
  switch (_null6.tag) {
    case 0:
      recursivelyTraverseLayoutEffects(arg0, _null6);
      let tmp68 = 4 & flags;
      if (tmp68) {
        commitHookEffectListMount(5, _null6);
      }
    break;
    case 1:
      recursivelyTraverseLayoutEffects(arg0, _null6);
      if (4 & flags) {
        const stateNode2 = _null6.stateNode;
        if (null === alternate) {
          try {
            stateNode2.componentDidMount();
          } catch (tmp59) {
            captureCommitPhaseError(tmp, tmp.return, tmp59);
          }
        } else {
          try {
            stateNode2.componentDidUpdate(tmp52, tmp53, stateNode2.__reactInternalSnapshotBeforeUpdate);
          } catch (tmp55) {
            captureCommitPhaseError(tmp, tmp.return, tmp55);
          }
        }
      }
      if (64 & flags) {
        commitClassCallbacks(_null6);
      }
      if (512 & flags) {
        safelyAttachRef(_null6, _null6.return);
      }
    break;
    case 2:
      recursivelyTraverseLayoutEffects(arg0, _null6);
    break;
    case 3:
      recursivelyTraverseLayoutEffects(arg0, _null6);
      if (64 & flags) {
        const updateQueue = _null6.updateQueue;
        if (null !== updateQueue) {
          stateNode = null;
          if (null !== _null6.child) {
            const tag = _null6.child.tag;
            if (27 !== tag) {
              if (5 !== tag) {
                stateNode = null;
                if (1 === tag) {
                  stateNode = _null6.child.stateNode;
                }
              }
            }
            stateNode = getPublicInstance(_null6.child.stateNode);
          }
          try {
            commitCallbacks(updateQueue, stateNode);
          } catch (tmp45) {
            captureCommitPhaseError(tmp, tmp.return, tmp45);
          }
        }
      }
    break;
    case 4:
      recursivelyTraverseLayoutEffects(arg0, _null6);
    break;
    case 5:
      recursivelyTraverseLayoutEffects(arg0, _null6);
      if (null === alternate) {
        let tmp26 = 4 & flags;
        if (tmp26) {
          commitHostMount(_null6);
        } else {
          let tmp27 = 64 & flags;
          if (tmp27) {
            ({ type, memoizedProps, stateNode } = _null6);
            try {
              shim$1();
            } catch (tmp30) {
              captureCommitPhaseError(_null6, _null6.return, tmp30);
            }
          }
        }
      }
      let tmp35 = 512 & flags;
      if (tmp35) {
        safelyAttachRef(_null6, _null6.return);
      }
    break;
    case 6:
      recursivelyTraverseLayoutEffects(arg0, _null6);
    break;
    case 7:
      recursivelyTraverseLayoutEffects(arg0, _null6);
    break;
    case 8:
      recursivelyTraverseLayoutEffects(arg0, _null6);
    break;
    case 9:
      recursivelyTraverseLayoutEffects(arg0, _null6);
    break;
    case 10:
      recursivelyTraverseLayoutEffects(arg0, _null6);
    break;
    case 11:
      recursivelyTraverseLayoutEffects(arg0, _null6);
      tmp68 = 4 & flags;
      if (tmp68) {
        commitHookEffectListMount(5, _null6);
      }
    break;
    case 12:
      recursivelyTraverseLayoutEffects(arg0, _null6);
    break;
    case 13:
      recursivelyTraverseLayoutEffects(arg0, _null6);
      if (64 & flags) {
        const memoizedState = _null6.memoizedState;
        let tmp18 = null !== memoizedState;
        if (tmp18) {
          tmp18 = null !== memoizedState.dehydrated;
        }
        if (tmp18) {
          retryDehydratedSuspenseBoundary.bind(null, _null6);
          shim$1();
        }
      }
    break;
    case 14:
      recursivelyTraverseLayoutEffects(arg0, _null6);
    break;
    case 15:
      recursivelyTraverseLayoutEffects(arg0, _null6);
      tmp68 = 4 & flags;
      if (tmp68) {
        commitHookEffectListMount(5, _null6);
      }
    break;
    case 16:
      recursivelyTraverseLayoutEffects(arg0, _null6);
    break;
    case 17:
      recursivelyTraverseLayoutEffects(arg0, _null6);
    break;
    case 18:
      recursivelyTraverseLayoutEffects(arg0, _null6);
    break;
    case 19:
      recursivelyTraverseLayoutEffects(arg0, _null6);
    break;
    case 20:
      recursivelyTraverseLayoutEffects(arg0, _null6);
    break;
    case 21:
      recursivelyTraverseLayoutEffects(arg0, _null6);
    break;
    case 22:
      if (1 & _null6.mode) {
        let tmp7 = null !== _null6.memoizedState;
        if (!tmp7) {
          tmp7 = c249;
        }
        if (!tmp7) {
          let tmp8 = null !== alternate;
          if (tmp8) {
            tmp8 = null !== alternate.memoizedState;
          }
          if (!tmp8) {
            tmp8 = closure_250;
          }
          c249 = tmp7;
          closure_250 = tmp8;
          if (tmp8) {
            if (!tmp10) {
              recursivelyTraverseReappearLayoutEffects(arg0, _null6, 8772 & _null6.subtreeFlags);
            }
            c249 = tmp9;
            closure_250 = tmp10;
          }
          recursivelyTraverseLayoutEffects(arg0, _null6);
        }
      } else {
        recursivelyTraverseLayoutEffects(arg0, _null6);
      }
    break;
    case 23:
      recursivelyTraverseLayoutEffects(arg0, _null6);
    break;
    case 24:
      recursivelyTraverseLayoutEffects(arg0, _null6);
    break;
    case 25:
      recursivelyTraverseLayoutEffects(arg0, _null6);
    break;
    case 26:
      recursivelyTraverseLayoutEffects(arg0, _null6);
      if (null === alternate) {
        tmp26 = 4 & flags;
        if (tmp26) {
          commitHostMount(_null6);
        } else {
          tmp27 = 64 & flags;
          if (tmp27) {
            ({ type, memoizedProps, stateNode } = _null6);
            try {
              shim$1();
            } catch (tmp30) {
              captureCommitPhaseError(_null6, _null6.return, tmp30);
            }
          }
        }
      }
      tmp35 = 512 & flags;
      if (tmp35) {
        safelyAttachRef(_null6, _null6.return);
      }
    break;
    case 27:
      recursivelyTraverseLayoutEffects(arg0, _null6);
      if (null === alternate) {
        tmp26 = 4 & flags;
        if (tmp26) {
          commitHostMount(_null6);
        } else {
          tmp27 = 64 & flags;
          if (tmp27) {
            ({ type, memoizedProps, stateNode } = _null6);
            try {
              shim$1();
            } catch (tmp30) {
              captureCommitPhaseError(_null6, _null6.return, tmp30);
            }
          }
        }
      }
      tmp35 = 512 & flags;
      if (tmp35) {
        safelyAttachRef(_null6, _null6.return);
      }
    break;
    case 28:
      recursivelyTraverseLayoutEffects(arg0, _null6);
    break;
    case 29:
      recursivelyTraverseLayoutEffects(arg0, _null6);
    break;
    case 30:
    break;
    case 31:
      recursivelyTraverseLayoutEffects(arg0, _null6);
    break;
    default:
      recursivelyTraverseLayoutEffects(arg0, _null6);
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
  if (__REACT_DEVTOOLS_GLOBAL_HOOK__2) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__2.onCommitFiberUnmount === "function") {
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__2.onCommitFiberUnmount(closure_72, sibling);
      } catch (err) {
      }
    }
  }
  switch (sibling.tag) {
    case 0:
      if (!closure_250) {
        commitHookEffectListUnmount(2, sibling, deletions);
      }
      if (!closure_250) {
        commitHookEffectListUnmount(4, sibling, deletions);
      }
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 1:
      if (!closure_250) {
        safelyDetachRef(sibling, deletions);
        const stateNode = sibling.stateNode;
        if (typeof stateNode.componentWillUnmount === "function") {
          safelyCallComponentWillUnmount(sibling, deletions, stateNode);
        }
      }
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 2:
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 3:
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 4:
      commitHostPortalContainerChildren(sibling.stateNode, sibling, createChildSet());
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 5:
      if (!closure_250) {
        safelyDetachRef(sibling, deletions);
      }
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 6:
    break;
    case 7:
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 8:
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 9:
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 10:
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 11:
      if (!closure_250) {
        commitHookEffectListUnmount(2, sibling, deletions);
      }
      if (!closure_250) {
        commitHookEffectListUnmount(4, sibling, deletions);
      }
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 12:
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 13:
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 14:
      if (!closure_250) {
        commitHookEffectListUnmount(2, sibling, deletions);
      }
      if (!closure_250) {
        commitHookEffectListUnmount(4, sibling, deletions);
      }
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 15:
      if (!closure_250) {
        commitHookEffectListUnmount(2, sibling, deletions);
      }
      if (!closure_250) {
        commitHookEffectListUnmount(4, sibling, deletions);
      }
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 16:
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 17:
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 18:
    break;
    case 19:
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 20:
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 21:
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 22:
      if (1 & sibling.mode) {
        let tmp6 = closure_250;
        if (!closure_250) {
          tmp6 = null !== sibling.memoizedState;
        }
        closure_250 = tmp6;
        recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      } else {
        recursivelyTraverseDeletionEffects(c301, deletions, sibling);
      }
    break;
    case 23:
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 24:
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 25:
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 26:
      if (!closure_250) {
        safelyDetachRef(sibling, deletions);
      }
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    case 27:
      if (!closure_250) {
        safelyDetachRef(sibling, deletions);
      }
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
    break;
    default:
      recursivelyTraverseDeletionEffects(c301, deletions, sibling);
  }
}
function attachSuspenseRetryListeners(handler, updateQueue3) {
  closure_0 = handler;
  const tag = handler.tag;
  if (31 !== tag) {
    if (13 !== tag) {
      if (19 !== tag) {
        if (22 === tag) {
          const stateNode = handler.stateNode;
          let _retryCache = stateNode._retryCache;
          if (null === _retryCache) {
            const tmp6 = new closure_251();
            stateNode._retryCache = tmp6;
            _retryCache = tmp6;
          }
        } else {
          const _Error = Error;
          throw Error("Unexpected Suspense handler tag (" + handler.tag + "). This is a bug in React.");
        }
      }
      const item = updateQueue3.forEach((item, index) => {
        if (!_retryCache.has(item)) {
          _retryCache.add(item);
          const bindResult = resolveRetryWakeable.bind(null, closure_0, item);
          item.then(bindResult, bindResult);
        }
      });
    }
  }
  let stateNode2 = handler.stateNode;
  if (null === stateNode2) {
    const tmp11 = new closure_251();
    handler.stateNode = tmp11;
    stateNode2 = tmp11;
  }
  _retryCache = stateNode2;
}
function recursivelyTraverseMutationEffects(c301, deletions) {
  deletions = deletions.deletions;
  if (null !== deletions) {
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
  ({ alternate, flags } = _null6);
  switch (_null6.tag) {
    case 0:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
      let tmp78 = 4 & flags;
      if (tmp78) {
        commitHookEffectListUnmount(3, _null6, _null6.return);
        commitHookEffectListMount(3, _null6);
        commitHookEffectListUnmount(5, _null6, _null6.return);
      }
    break;
    case 1:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
      if (512 & flags) {
        let tmp67 = closure_250;
        if (!closure_250) {
          tmp67 = null === alternate;
        }
        if (!tmp67) {
          safelyDetachRef(alternate, alternate.return);
        }
      }
      let tmp71 = 64 & flags;
      if (tmp71) {
        tmp71 = closure_249;
      }
      if (tmp71) {
        const updateQueue4 = _null6.updateQueue;
        if (null !== updateQueue4) {
          const callbacks = updateQueue4.callbacks;
          if (null !== callbacks) {
            let combined = callbacks;
            if (null !== updateQueue4.shared.hiddenCallbacks) {
              combined = hiddenCallbacks.concat(callbacks);
            }
            updateQueue4.shared.hiddenCallbacks = combined;
          }
        }
      }
    break;
    case 2:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
    break;
    case 3:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
      if (4 & flags) {
        try {
          completeRoot(tmp46.containerTag, tmp47);
        } catch (tmp50) {
          captureCommitPhaseError(tmp, tmp.return, tmp50);
        }
      }
    break;
    case 4:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
      if (4 & flags) {
        commitHostPortalContainerChildren(_null6.stateNode, _null6, _null6.stateNode.pendingChildren);
      }
    break;
    case 5:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
      let tmp57 = 512 & flags;
      if (tmp57) {
        let tmp58 = closure_250;
        if (!closure_250) {
          tmp58 = null === alternate;
        }
        if (!tmp58) {
          safelyDetachRef(alternate, alternate.return);
        }
      }
      if (null !== _null6.alternate) {
        ({ alternate: alternate2, stateNode: stateNode2 } = _null6);
        alternate2.stateNode = stateNode2;
      }
    break;
    case 6:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
    break;
    case 7:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
    break;
    case 8:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
    break;
    case 9:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
    break;
    case 10:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
    break;
    case 11:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
      tmp78 = 4 & flags;
      if (tmp78) {
        commitHookEffectListUnmount(3, _null6, _null6.return);
        commitHookEffectListMount(3, _null6);
        commitHookEffectListUnmount(5, _null6, _null6.return);
      }
    break;
    case 12:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
    break;
    case 13:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
      if (8192 & _null6.child.flags) {
        let tmp25 = null !== alternate;
        if (tmp25) {
          tmp25 = null !== alternate.memoizedState;
        }
        let tmp26 = null === _null6.memoizedState;
        if (!tmp26) {
          tmp26 = tmp25;
        }
        if (!tmp26) {
          closure_296 = peek.unstable_now();
        }
      }
      if (4 & flags) {
        const updateQueue2 = _null6.updateQueue;
        if (null !== updateQueue2) {
          _null6.updateQueue = null;
          attachSuspenseRetryListeners(_null6, updateQueue2);
        }
      }
    break;
    case 14:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
      tmp78 = 4 & flags;
      if (tmp78) {
        commitHookEffectListUnmount(3, _null6, _null6.return);
        commitHookEffectListMount(3, _null6);
        commitHookEffectListUnmount(5, _null6, _null6.return);
      }
    break;
    case 15:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
      tmp78 = 4 & flags;
      if (tmp78) {
        commitHookEffectListUnmount(3, _null6, _null6.return);
        commitHookEffectListMount(3, _null6);
        commitHookEffectListUnmount(5, _null6, _null6.return);
      }
    break;
    case 16:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
    break;
    case 17:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
    break;
    case 18:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
    break;
    case 19:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
      let tmp34 = 4 & flags;
      if (tmp34) {
        let updateQueue3 = _null6.updateQueue;
        if (null !== updateQueue3) {
          _null6.updateQueue = null;
          attachSuspenseRetryListeners(_null6, updateQueue3);
        }
      }
    break;
    case 20:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
    break;
    case 21:
    break;
    case 22:
      let tmp4 = null !== alternate;
      if (tmp4) {
        tmp4 = null !== alternate.memoizedState;
      }
      if (1 & _null6.mode) {
        let tmp10 = closure_249;
        if (!closure_249) {
          tmp10 = tmp5;
        }
        closure_249 = tmp10;
        let tmp11 = tmp9;
        if (!closure_250) {
          tmp11 = tmp4;
        }
        closure_250 = tmp11;
        recursivelyTraverseMutationEffects(c301, _null6);
        closure_250 = tmp9;
      } else {
        recursivelyTraverseMutationEffects(c301, _null6);
      }
      commitReconciliationEffects(_null6);
      if (8192 & flags) {
        const stateNode = _null6.stateNode;
        const _visibility = stateNode._visibility;
        if (tmp5) {
          let tmp16 = -2 & _visibility;
        } else {
          tmp16 = 1 | _visibility;
        }
        stateNode._visibility = tmp16;
        if (tmp5) {
          let tmp17 = null === alternate;
          if (!tmp17) {
            tmp17 = tmp4;
          }
          if (!tmp17) {
            tmp17 = closure_249;
          }
          if (!tmp17) {
            tmp17 = closure_250;
          }
          if (!tmp17) {
            if (1 & _null6.mode) {
              recursivelyTraverseDisappearLayoutEffects(_null6);
            }
          }
        }
      }
      if (4 & flags) {
        const updateQueue = _null6.updateQueue;
        if (null !== updateQueue) {
          const retryQueue = updateQueue.retryQueue;
          if (null !== retryQueue) {
            updateQueue.retryQueue = null;
            attachSuspenseRetryListeners(_null6, retryQueue);
          }
        }
      }
    break;
    case 23:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
    break;
    case 24:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
    break;
    case 25:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
    break;
    case 26:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
      tmp57 = 512 & flags;
      if (tmp57) {
        tmp58 = closure_250;
        if (!closure_250) {
          tmp58 = null === alternate;
        }
        if (!tmp58) {
          safelyDetachRef(alternate, alternate.return);
        }
      }
      if (null !== _null6.alternate) {
        ({ alternate: alternate2, stateNode: stateNode2 } = _null6);
        alternate2.stateNode = stateNode2;
      }
    break;
    case 27:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
      tmp57 = 512 & flags;
      if (tmp57) {
        tmp58 = closure_250;
        if (!closure_250) {
          tmp58 = null === alternate;
        }
        if (!tmp58) {
          safelyDetachRef(alternate, alternate.return);
        }
      }
      if (null !== _null6.alternate) {
        ({ alternate: alternate2, stateNode: stateNode2 } = _null6);
        alternate2.stateNode = stateNode2;
      }
    break;
    case 28:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
    break;
    case 29:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
    break;
    case 30:
    break;
    case 31:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
      tmp34 = 4 & flags;
      if (tmp34) {
        updateQueue3 = _null6.updateQueue;
        if (null !== updateQueue3) {
          _null6.updateQueue = null;
          attachSuspenseRetryListeners(_null6, updateQueue3);
        }
      }
    break;
    default:
      recursivelyTraverseMutationEffects(c301, _null6);
      commitReconciliationEffects(_null6);
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
  let sum;
  let tmp3 = arg2;
  if (arg2) {
    tmp3 = 8772 & sibling.subtreeFlags;
  }
  sibling = sibling.child;
  if (null !== sibling) {
    const alternate = sibling.alternate;
    const flags = sibling.flags;
    switch (sibling.tag) {
      case 0:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
        commitHookEffectListMount(4, sibling);
        sibling = sibling.sibling;
      break;
      case 1:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
        const stateNode = sibling.stateNode;
        if (typeof stateNode.componentDidMount === "function") {
          try {
            obj.componentDidMount();
          } catch (tmp24) {
            captureCommitPhaseError(tmp2, tmp2.return, tmp24);
          }
        }
        const updateQueue = sibling.updateQueue;
        if (null !== updateQueue) {
          try {
            if (null !== tmp27.shared.hiddenCallbacks) {
              tmp27.shared.hiddenCallbacks = null;
              let num2 = 0;
              if (0 < arr.length) {
                do {
                  let tmp35 = callCallback(arr[num2], tmp28);
                  sum = num2 + 1;
                  num2 = sum;
                  length = arr.length;
                } while (sum < length);
              }
            }
          } catch (tmp37) {
            captureCommitPhaseError(tmp2, tmp2.return, tmp37);
          }
        }
        let tmp40 = tmp3;
        if (tmp3) {
          tmp40 = 64 & flags;
        }
        if (tmp40) {
          commitClassCallbacks(sibling);
        }
        safelyAttachRef(sibling, sibling.return);
        obj = stateNode;
      break;
      case 2:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
      break;
      case 3:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
      break;
      case 4:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
      break;
      case 5:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
        let tmp14 = tmp3;
        if (tmp3) {
          tmp14 = null === alternate;
        }
        if (tmp14) {
          tmp14 = 4 & flags;
        }
        if (tmp14) {
          commitHostMount(sibling);
        }
        safelyAttachRef(sibling, sibling.return);
      break;
      case 6:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
      break;
      case 7:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
      break;
      case 8:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
      break;
      case 9:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
      break;
      case 10:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
      break;
      case 11:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
        commitHookEffectListMount(4, sibling);
        sibling = sibling.sibling;
      break;
      case 12:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
      break;
      case 13:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
      break;
      case 14:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
      break;
      case 15:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
        commitHookEffectListMount(4, sibling);
        sibling = sibling.sibling;
      break;
      case 16:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
      break;
      case 17:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
      break;
      case 18:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
      break;
      case 19:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
      break;
      case 20:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
      break;
      case 21:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
      break;
      case 22:
        if (null === sibling.memoizedState) {
          recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
        }
        safelyAttachRef(sibling, sibling.return);
      break;
      case 23:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
      break;
      case 24:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
      break;
      case 25:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
      break;
      case 26:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
        tmp14 = tmp3;
        if (tmp3) {
          tmp14 = null === alternate;
        }
        if (tmp14) {
          tmp14 = 4 & flags;
        }
        if (tmp14) {
          commitHostMount(sibling);
        }
        safelyAttachRef(sibling, sibling.return);
      break;
      case 27:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
        tmp14 = tmp3;
        if (tmp3) {
          tmp14 = null === alternate;
        }
        if (tmp14) {
          tmp14 = 4 & flags;
        }
        if (tmp14) {
          commitHostMount(sibling);
        }
        safelyAttachRef(sibling, sibling.return);
      break;
      case 28:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
      break;
      case 29:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
      break;
      case 30:
      break;
      case 31:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
      break;
      default:
        recursivelyTraverseReappearLayoutEffects(arg0, sibling, tmp3);
    }
  }
}
function commitOffscreenPassiveMountEffects(alternate, sibling) {
  let pool = null;
  if (tmp) {
    pool = alternate.memoizedState.cachePool.pool;
  }
  let pool1 = null;
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
        const result = pool(287).unstable_scheduleCallback(pool(287).unstable_NormalPriority, () => {
          const controller = pooledCache.controller;
          controller.abort();
        });
        const obj = pool(287);
      }
    }
  }
  tmp = null !== alternate && null !== alternate.memoizedState && null !== alternate.memoizedState.cachePool;
  tmp3 = null !== sibling.memoizedState && null !== sibling.memoizedState.cachePool;
}
function commitCachePassiveMountEffect(arg0, alternate) {
  let cache = null;
  if (null !== alternate.alternate) {
    cache = alternate.alternate.memoizedState.cache;
  }
  cache = alternate.memoizedState.cache;
  if (cache !== cache) {
    cache.refCount = cache.refCount + 1;
    if (null != cache) {
      cache.refCount = cache.refCount - 1;
      if (0 === cache.refCount) {
        const result = cache(287).unstable_scheduleCallback(cache(287).unstable_NormalPriority, () => {
          const controller = pooledCache.controller;
          controller.abort();
        });
        const obj = cache(287);
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
  const flags = current.flags;
  switch (current.tag) {
    case 0:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      let tmp77 = 2048 & flags;
      if (tmp77) {
        commitHookEffectListMount(9, current);
      }
    break;
    case 1:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    case 2:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    case 3:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      if (2048 & flags) {
        let cache = null;
        if (null !== current.alternate) {
          cache = current.alternate.memoizedState.cache;
        }
        cache = current.memoizedState.cache;
        if (cache !== cache) {
          cache.refCount = cache.refCount + 1;
          if (null != cache) {
            releaseCache(cache);
          }
        }
      }
    break;
    case 4:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    case 5:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    case 6:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    case 7:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    case 8:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    case 9:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    case 10:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    case 11:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      tmp77 = 2048 & flags;
      if (tmp77) {
        commitHookEffectListMount(9, current);
      }
    break;
    case 12:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      if (tmp45) {
        try {
          const memoizedProps = current.memoizedProps;
          ({ id, onPostCommit } = memoizedProps);
          if (typeof onPostCommit === "function") {
            let str = "update";
            if (null === current.alternate) {
              str = "mount";
            }
            tmp54(id, str, tmp52.passiveEffectDuration, -0);
          }
        } catch (tmp58) {
          captureCommitPhaseError(tmp, tmp.return, tmp58);
        }
      }
      tmp45 = 2048 & flags;
    break;
    case 13:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    case 14:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    case 15:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      tmp77 = 2048 & flags;
      if (tmp77) {
        commitHookEffectListMount(9, current);
      }
    break;
    case 16:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    case 17:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    case 18:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    case 19:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    case 20:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    case 21:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    case 22:
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
        let flag = 10256 & current.subtreeFlags;
        if (!flag) {
          flag = false;
        }
        recursivelyTraverseReconnectPassiveEffects(arg0, current, arg2, arg3, flag);
      }
      if (2048 & flags) {
        commitOffscreenPassiveMountEffects(alternate2, current);
      }
    break;
    case 23:
    break;
    case 24:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
      if (2048 & flags) {
        const alternate = current.alternate;
        commitCachePassiveMountEffect(0, current);
      }
    break;
    case 25:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    case 26:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    case 27:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    case 28:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    case 29:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    case 30:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    case 31:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
    break;
    default:
      recursivelyTraversePassiveMountEffects(arg0, current, arg2, arg3);
  }
}
function recursivelyTraverseReconnectPassiveEffects(arg0, subtreeFlags, arg2, arg3, flag) {
  let tmp = flag;
  if (flag) {
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
                let tmp43 = tmp;
                if (tmp) {
                  tmp43 = 2048 & flags;
                }
                if (tmp43) {
                  let tmp45 = commitOffscreenPassiveMountEffects(sibling.alternate, sibling);
                }
              } else if (24 === tag) {
                let tmp17 = recursivelyTraverseReconnectPassiveEffects(arg0, tmp3, arg2, arg3, tmp);
                let tmp18 = tmp;
                if (tmp) {
                  tmp18 = 2048 & flags;
                }
                if (tmp18) {
                  let alternate = sibling.alternate;
                  let cache = null;
                  if (null !== sibling.alternate) {
                    cache = sibling.alternate.memoizedState.cache;
                  }
                  cache = sibling.memoizedState.cache;
                  if (cache !== cache) {
                    cache.refCount = cache.refCount + 1;
                    if (null != cache) {
                      cache.refCount = cache.refCount - 1;
                      if (0 === cache.refCount) {
                        let obj = cache(287);
                        let result = obj.unstable_scheduleCallback(cache(287).unstable_NormalPriority, () => {
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
            let cache = null;
            if (null !== sibling.alternate) {
              cache = sibling.alternate.memoizedState.cache;
            }
            cache = sibling.memoizedState.cache;
            if (cache !== cache) {
              cache.refCount = cache.refCount + 1;
              if (null != cache) {
                cache.refCount = cache.refCount - 1;
                if (0 === cache.refCount) {
                  let obj = cache(287);
                  let result = obj.unstable_scheduleCallback(cache(287).unstable_NormalPriority, () => {
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
function accumulateSuspenseyCommitOnFiber(sibling) {
  const tag = sibling.tag;
  if (26 === tag) {
    if (sibling.subtreeFlags & closure_270) {
      let sibling4 = sibling.child;
      if (null !== sibling4) {
        do {
          let tmp15 = accumulateSuspenseyCommitOnFiber(sibling4);
          sibling4 = sibling4.sibling;
        } while (null !== sibling4);
      }
    }
    let tmp17 = sibling.flags & closure_270;
    if (tmp17) {
      tmp17 = null !== sibling.memoizedState;
    }
    if (tmp17) {
      const _Error = Error;
      throw Error("The current renderer does not support Resources. This error is likely caused by a bug in React. Please file an issue.");
    }
  } else {
    if (5 !== tag) {
      if (3 !== tag) {
        if (4 !== tag) {
          if (22 === tag) {
            if (null === sibling.memoizedState) {
              const alternate = sibling.alternate;
              if (null !== alternate) {
                if (null !== alternate.memoizedState) {
                  closure_270 = 16777216;
                  if (sibling.subtreeFlags & closure_270) {
                    let sibling2 = sibling.child;
                    if (null !== sibling2) {
                      do {
                        let tmp7 = accumulateSuspenseyCommitOnFiber(sibling2);
                        sibling2 = sibling2.sibling;
                      } while (null !== sibling2);
                    }
                  }
                }
              }
              if (sibling.subtreeFlags & closure_270) {
                sibling = sibling.child;
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
    if (sibling.subtreeFlags & closure_270) {
      let sibling3 = sibling.child;
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
                      closure_252 = tmp;
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
                closure_252 = tmp10;
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
          closure_252 = tmp18;
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
          closure_252 = tmp2;
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
  let _null5;
  if (null !== _null5) {
    while (true) {
      let tmp = _null5;
      let tag = _null5.tag;
      if (0 !== tag) {
        if (11 !== tag) {
          if (15 !== tag) {
            if (23 !== tag) {
              if (22 !== tag) {
                if (24 === tag) {
                  let cache = tmp.memoizedState.cache;
                  cache.refCount = cache.refCount - 1;
                  if (0 === cache.refCount) {
                    let obj = cache(287);
                    let result = obj.unstable_scheduleCallback(cache(287).unstable_NormalPriority, () => {
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
            _null5 = child;
            let tmp7 = child;
          } else {
            tmp7 = _null5;
            if (null !== _null5) {
              while (true) {
                let tmp4 = _null5;
                ({ sibling, return: _return, alternate } = _null5);
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
                    _null5 = sibling;
                    tmp7 = sibling;
                  } else {
                    _null5 = _return;
                    tmp7 = _return;
                  }
                  continue;
                }
              }
              _null5 = null;
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
  if (!(1 & _reactInternals.mode)) {
    return 2;
  } else if (!(2 & c277)) {
    if (null !== __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T) {
      if (0 === c115) {
        let tmp11 = c124;
        if (0 === c124) {
          c78 = tmp13;
          tmp11 = c78;
          if (!(261888 & c78 << 1)) {
            c78 = 256;
            tmp11 = tmp12;
          }
        }
        c115 = tmp11;
      }
    } else if (0 === c363) {
      let tmp5Result = null;
      if (closure_358) {
        tmp5Result = tmp5();
      }
      if (null != tmp5Result) {
        if (closure_355 !== tmp5Result) {
          if (closure_356 !== tmp5Result) {
          }
        }
      }
    }
  }
}
function scheduleUpdateOnFiber(cancelPendingCommit, _reactInternals, lane) {
  let tmp = cancelPendingCommit !== c278;
  if (!tmp) {
    let tmp3 = 2 !== c281;
    if (tmp3) {
      tmp3 = 9 !== tmp2;
    }
    tmp = tmp3;
  }
  if (tmp) {
    tmp = null === cancelPendingCommit.cancelPendingCommit;
  }
  if (!tmp) {
    prepareFreshStack(cancelPendingCommit, 0);
    markRootSuspended(cancelPendingCommit, c280, c291, false);
  }
  cancelPendingCommit.pendingLanes = cancelPendingCommit.pendingLanes | lane;
  if (268435456 !== lane) {
    cancelPendingCommit.suspendedLanes = 0;
    cancelPendingCommit.pingedLanes = 0;
    cancelPendingCommit.warmLanes = 0;
  }
  let tmp13 = tmp12;
  if (2 & c277) {
    tmp13 = cancelPendingCommit === c278;
  }
  if (!tmp13) {
    if (cancelPendingCommit === c278) {
      if (!tmp12) {
        closure_289 = closure_289 | lane;
      }
      if (4 === c287) {
        markRootSuspended(cancelPendingCommit, c280, c291, false);
      }
    }
    let tmp24 = cancelPendingCommit !== closure_111;
    if (tmp24) {
      tmp24 = null === cancelPendingCommit.next;
    }
    if (tmp24) {
      if (null === closure_111) {
        closure_111 = cancelPendingCommit;
        closure_110 = cancelPendingCommit;
      } else {
        tmp26.next = cancelPendingCommit;
        closure_111 = cancelPendingCommit;
      }
    }
    c113 = true;
    if (!c112) {
      c112 = true;
      if (prop) {
        _queueMicrotask(() => {
          if (6 & closure_277) {
            const result = callback(287).unstable_scheduleCallback(callback(287).unstable_ImmediatePriority, closure_118);
            const obj = callback(287);
          } else {
            callback2();
          }
        });
      } else {
        const result = peek.unstable_scheduleCallback(peek.unstable_ImmediatePriority, processRootScheduleInImmediateTask);
      }
    }
    let tmp36 = 2 === lane;
    if (tmp36) {
      tmp36 = 0 === c277;
    }
    if (tmp36) {
      tmp36 = !(1 & _reactInternals.mode);
    }
    if (tmp36) {
      closure_297 = peek.unstable_now() + 500;
      flushSyncWorkAcrossRoots_impl(0, true);
    }
  }
}
function performWorkOnRoot(iter, tmp24Result, arg2) {
  if (6 & c277) {
    let _Error = Error;
    throw Error("Should not already be working.");
  } else {
    let tmp3 = !arg2;
    if (!arg2) {
      tmp3 = !(127 & tmp24Result);
    }
    if (tmp3) {
      tmp3 = !(tmp24Result & iter.expiredLanes);
    }
    if (!tmp3) {
      tmp3 = !(iter.pendingLanes & ~iter.suspendedLanes & ~iter.pingedLanes & tmp24Result);
    }
    if (tmp3) {
      (function renderRootConcurrent(iter, tmp24Result) {
        const callback = iter;
        let tmp3 = tmp24Result;
        closure_277 = closure_277 | 2;
        if (c278 === iter) {
          if (c280 === tmp3) {
            closure_284 = callback2(iter, tmp3);
          }
          try {
            if (0 !== c281) {
              let tmp31 = memoizedState;
              let tmp68 = null;
              if (null !== memoizedState) {
                tmp3 = tmp31;
                if (1 === tmp12) {
                  c281 = 0;
                  c282 = tmp68;
                  callback11(iter, tmp3, promise, 1);
                } else {
                  if (2 !== tmp12) {
                    if (9 !== tmp12) {
                      if (3 === tmp12) {
                        c281 = 7;
                      } else if (4 === tmp12) {
                        c281 = 5;
                      } else {
                        if (7 === tmp12) {
                          c281 = 0;
                          c282 = tmp68;
                          if (callback3(promise)) {
                            callback10(tmp3);
                          } else {
                            callback11(iter, tmp3, promise, 7);
                          }
                        } else if (5 !== tmp12) {
                          if (6 === tmp12) {
                            c281 = 0;
                            c282 = tmp68;
                            callback11(iter, tmp3, promise, 6);
                          } else if (8 === tmp12) {
                            callback5();
                            c287 = 6;
                          } else {
                            const _Error = Error;
                            throw Error("Unexpected SuspendedReason. This is a bug in React.");
                          }
                        }
                        memoizedState = null;
                        const tag = tmp31.tag;
                        if (26 === tag) {
                          memoizedState = memoizedState.memoizedState;
                        } else if (5 !== tag) {
                          if (27 !== tag) {
                            c281 = 0;
                            c282 = tmp68;
                            callback11(iter, tmp3, promise, 5);
                          }
                        }
                        tmp31 = memoizedState;
                        if (memoizedState) {
                          callback13();
                        } else {
                          c281 = 0;
                          c282 = tmp68;
                          const sibling = tmp32.sibling;
                          if (tmp68 !== sibling) {
                            tmp31 = tmp35;
                            memoizedState = tmp35;
                          } else {
                            const _return = tmp32.return;
                            if (tmp68 !== _return) {
                              tmp31 = tmp37;
                              memoizedState = tmp37;
                              callback12(tmp37);
                            } else {
                              tmp31 = null;
                              memoizedState = tmp68;
                            }
                          }
                        }
                      }
                    }
                    c102 = null;
                    c103 = null;
                    closure_5.H = tmp5;
                    closure_5.A = tmp6;
                    closure_277 = tmp4;
                    let num15 = 0;
                    if (null === memoizedState) {
                      c278 = null;
                      c280 = 0;
                      callback4();
                      num15 = c287;
                    }
                    return num15;
                  }
                  if (callback3(promise)) {
                    c281 = 0;
                    c282 = tmp68;
                    callback10(tmp3);
                  } else {
                    const fn = function n() {
                      let tmp2 = 2 !== c281;
                      if (tmp2) {
                        tmp2 = 9 !== tmp;
                      }
                      if (!tmp2) {
                        tmp2 = c278 !== iter;
                      }
                      if (!tmp2) {
                        c281 = 7;
                      }
                      let tmp5 = iter !== iter;
                      if (tmp5) {
                        tmp5 = null === iter.next;
                      }
                      if (tmp5) {
                        if (null !== iter) {
                          tmp7.next = iter;
                        }
                      }
                      c113 = true;
                      if (!c112) {
                        c112 = true;
                        if (closure_1_367) {
                          closure_1_368(() => {
                            if (6 & closure_277) {
                              const result = callback(287).unstable_scheduleCallback(callback(287).unstable_ImmediatePriority, closure_118);
                              const obj = callback(287);
                            } else {
                              callback2();
                            }
                          });
                        } else {
                          let result = iter(closure_1_1[3]).unstable_scheduleCallback(iter(closure_1_1[3]).unstable_ImmediatePriority, closure_1_118);
                          let obj = iter(closure_1_1[3]);
                        }
                      }
                    };
                    promise.then(fn, fn);
                  }
                }
              }
            }
            tmp68 = callback9();
          } catch (tmp75) {
            callback7(tmp2, tmp75);
          }
        }
        c298 = null;
        tmp4 = closure_277;
        tmp5 = callback8();
        closure_297 = callback(table[3]).unstable_now() + 500;
        callback6(iter, tmp3);
        let obj = callback(table[3]);
      })(iter, tmp24Result);
    } else {
      renderRootSync(iter, tmp24Result, true);
    }
  }
}
function commitRootWhenReady(current, subtreeFlags) {
  current.timeoutHandle = -1;
  subtreeFlags = subtreeFlags.subtreeFlags;
  let tmp2 = !tmp;
  if (!(8192 & subtreeFlags)) {
    tmp2 = 16785408 & ~subtreeFlags;
  }
  if (!tmp2) {
    accumulateSuspenseyCommitOnFiber(subtreeFlags);
    let tmp5 = (62914560 & arg5) === arg5;
    if (!tmp5) {
      tmp5 = (4194048 & arg5) === arg5;
    }
    if (tmp5) {
      peek.unstable_now();
    }
  }
  (function commitRoot(current, lanes, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
    current.cancelPendingCommit = null;
    do {
      let tmp6 = callback5();
    } while (0 !== c300);
    if (6 & closure_277) {
      const _Error2 = Error;
      throw Error("Should not already be working.");
    } else if (null !== lanes) {
      if (lanes === current.current) {
        let _Error = Error;
        throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      } else {
        (function markRootFinished(pendingLanes, arg1, pendingLanes2, arg3, arg4, arg5) {
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
              let diff = 31 - callback2(tmp3);
              tmp[diff] = 0;
              tmp2[diff] = -1;
              let arr = hiddenUpdates[diff];
              if (null !== arr) {
                hiddenUpdates[diff] = null;
                for (let num = 0; num < arr.length; num = num + 1) {
                  let tmp7 = arr[num];
                  if (null !== tmp7) {
                    tmp7.lane = tmp7.lane & -536870913;
                  }
                }
              }
              tmp3 = tmp3 & ~1 << diff;
            } while (0 < tmp3);
          }
          if (0 !== arg3) {
            pendingLanes.pendingLanes = pendingLanes.pendingLanes | arg3;
            pendingLanes.suspendedLanes = pendingLanes.suspendedLanes & ~arg3;
            const diff1 = 31 - callback2(arg3);
            pendingLanes.entangledLanes = pendingLanes.entangledLanes | arg3;
            pendingLanes.entanglements[diff1] = 1073741824 | pendingLanes.entanglements[diff1] | 0;
          }
          let tmp11 = 0 !== arg5;
          if (tmp11) {
            tmp11 = 0 === arg4;
          }
          if (tmp11) {
            pendingLanes.suspendedLanes = pendingLanes.suspendedLanes | arg5 & ~pendingLanes & ~arg1;
          }
        })(current, arg2, lanes.lanes | lanes.childLanes | closure_144, arg6, arg7, arg8);
        if (current === c278) {
          c278 = null;
          c279 = null;
          c280 = 0;
        }
        closure_302 = lanes;
        closure_301 = current;
        closure_303 = arg2;
        closure_304 = tmp34;
        closure_305 = arg4;
        closure_306 = arg3;
        if (!(10256 & lanes.subtreeFlags)) {
          if (!(10256 & lanes.flags)) {
            current.callbackNode = null;
            current.callbackPriority = 0;
          }
          if (13878 & lanes.subtreeFlags) {
            closure_5.T = null;
            c363 = 2;
            closure_277 = closure_277 | 4;
            try {
              (function commitBeforeMutationEffects(arg0, lanes) {
                let length;
                let _return = lanes;
                if (null !== lanes) {
                  const child = _return.child;
                  if (1028 & _return.subtreeFlags) {
                    if (null !== child) {
                      child.return = tmp3;
                      _return = child;
                    }
                  }
                  if (null !== _return) {
                    ({ alternate, flags } = _return);
                    switch (_return.tag) {
                      case 0:
                        if (4 & flags) {
                          const updateQueue = tmp6.updateQueue;
                          let events = null;
                          if (null !== updateQueue) {
                            events = tmp15.events;
                          }
                          if (null !== events) {
                            let num = 0;
                            if (0 < arr.length) {
                              do {
                                let tmp20 = arr[num];
                                tmp20.ref.impl = tmp20.nextImpl;
                                num = num + 1;
                                length = arr.length;
                              } while (num < length);
                            }
                          }
                        }
                        const sibling = tmp6.sibling;
                        if (null !== sibling) {
                          tmp23.return = tmp6.return;
                          _return = tmp23;
                        } else {
                          _return = tmp6.return;
                        }
                      break;
                      case 1:
                        if (1024 & flags) {
                          if (null !== alternate) {
                            const stateNode = tmp6.stateNode;
                            try {
                              const snapshotBeforeUpdate = stateNode.getSnapshotBeforeUpdate(callback3(tmp6.type, tmp28), tmp29);
                              stateNode.__reactInternalSnapshotBeforeUpdate = snapshotBeforeUpdate;
                            } catch (tmp11) {
                              callback5(tmp2, tmp2.return, tmp11);
                            }
                          }
                        }
                      break;
                      case 2:
                        let tmp22 = 1024 & flags;
                        if (tmp22) {
                          let _Error = Error;
                          let ErrorResult = Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
                          throw ErrorResult;
                        }
                      break;
                      case 3:
                      break;
                      case 4:
                      break;
                      case 5:
                      break;
                      case 6:
                      break;
                      case 7:
                        tmp22 = 1024 & flags;
                        if (tmp22) {
                          _Error = Error;
                          ErrorResult = Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
                          throw ErrorResult;
                        }
                      break;
                      case 8:
                        tmp22 = 1024 & flags;
                        if (tmp22) {
                          _Error = Error;
                          ErrorResult = Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
                          throw ErrorResult;
                        }
                      break;
                      case 9:
                        tmp22 = 1024 & flags;
                        if (tmp22) {
                          _Error = Error;
                          ErrorResult = Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
                          throw ErrorResult;
                        }
                      break;
                      case 10:
                        tmp22 = 1024 & flags;
                        if (tmp22) {
                          _Error = Error;
                          ErrorResult = Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
                          throw ErrorResult;
                        }
                      break;
                      case 11:
                      break;
                      case 12:
                        tmp22 = 1024 & flags;
                        if (tmp22) {
                          _Error = Error;
                          ErrorResult = Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
                          throw ErrorResult;
                        }
                      break;
                      case 13:
                        tmp22 = 1024 & flags;
                        if (tmp22) {
                          _Error = Error;
                          ErrorResult = Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
                          throw ErrorResult;
                        }
                      break;
                      case 14:
                        tmp22 = 1024 & flags;
                        if (tmp22) {
                          _Error = Error;
                          ErrorResult = Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
                          throw ErrorResult;
                        }
                      break;
                      case 15:
                      break;
                      case 16:
                        tmp22 = 1024 & flags;
                        if (tmp22) {
                          _Error = Error;
                          ErrorResult = Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
                          throw ErrorResult;
                        }
                      break;
                      case 17:
                      break;
                      case 18:
                        tmp22 = 1024 & flags;
                        if (tmp22) {
                          _Error = Error;
                          ErrorResult = Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
                          throw ErrorResult;
                        }
                      break;
                      case 19:
                        tmp22 = 1024 & flags;
                        if (tmp22) {
                          _Error = Error;
                          ErrorResult = Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
                          throw ErrorResult;
                        }
                      break;
                      case 20:
                        tmp22 = 1024 & flags;
                        if (tmp22) {
                          _Error = Error;
                          ErrorResult = Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
                          throw ErrorResult;
                        }
                      break;
                      case 21:
                        tmp22 = 1024 & flags;
                        if (tmp22) {
                          _Error = Error;
                          ErrorResult = Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
                          throw ErrorResult;
                        }
                      break;
                      case 22:
                        tmp22 = 1024 & flags;
                        if (tmp22) {
                          _Error = Error;
                          ErrorResult = Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
                          throw ErrorResult;
                        }
                      break;
                      case 23:
                        tmp22 = 1024 & flags;
                        if (tmp22) {
                          _Error = Error;
                          ErrorResult = Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
                          throw ErrorResult;
                        }
                      break;
                      case 24:
                        tmp22 = 1024 & flags;
                        if (tmp22) {
                          _Error = Error;
                          ErrorResult = Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
                          throw ErrorResult;
                        }
                      break;
                      case 25:
                        tmp22 = 1024 & flags;
                        if (tmp22) {
                          _Error = Error;
                          ErrorResult = Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
                          throw ErrorResult;
                        }
                      break;
                      case 26:
                      break;
                      case 27:
                      break;
                      default:
                        tmp22 = 1024 & flags;
                        if (tmp22) {
                          _Error = Error;
                          ErrorResult = Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
                          throw ErrorResult;
                        }
                    }
                  }
                }
              })(0, lanes);
              closure_277 = tmp18;
              c363 = tmp17;
              tmp15.T = tmp16;
            } catch (tmp26) {
              closure_277 = tmp4;
              c363 = tmp3;
              tmp2.T = tmp;
              throw tmp26;
            }
          }
          c300 = 1;
          callback2();
          callback3();
          callback4();
        }
        current.callbackNode = null;
        current.callbackPriority = 0;
        (function scheduleCallback(unstable_NormalPriority, arg1) {
          return callback(table[3]).unstable_scheduleCallback(unstable_NormalPriority, arg1);
        })(callback(table[3]).unstable_NormalPriority, () => {
          callback4();
          return null;
        });
      }
    }
  })(current, subtreeFlags, arg5, arg2, arg3, 0, arg6, arg7, arg8);
}
function isRenderConsistentWithExternalStores(arg0) {
  sibling = arg0;
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
      if (sibling === arg0) {
        let flag2 = true;
        return true;
      } else {
        let tmp7 = sibling;
        let tmp8 = sibling;
        if (null === sibling.sibling) {
          while (null !== tmp7.return) {
            if (tmp7.return === arg0) {
              break;
            } else {
              let _return = tmp7.return;
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
function markRootSuspended(c278, c280, c291, arg3) {
  _null3.suspendedLanes = _null3.suspendedLanes | c280 & ~c290 & ~c289;
  _null3.pingedLanes = _null3.pingedLanes & ~c280 & ~c290 & ~c289;
  if (arg3) {
    _null3.warmLanes = _null3.warmLanes | tmp;
  }
  let tmp3 = tmp;
  if (0 < (c280 & ~c290 & ~c289)) {
    do {
      let diff = 31 - clz32Fallback(tmp3);
      tmp2[diff] = -1;
      tmp3 = tmp3 & ~1 << diff;
    } while (0 < tmp3);
  }
  if (0 !== c291) {
    _null3.pendingLanes = _null3.pendingLanes | c291;
    _null3.suspendedLanes = _null3.suspendedLanes & ~c291;
    const diff1 = 31 - clz32Fallback(c291);
    _null3.entangledLanes = _null3.entangledLanes | c291;
    _null3.entanglements[diff1] = 1073741824 | _null3.entanglements[diff1] | 261930 & tmp;
  }
}
function resetWorkInProgressStack() {
  if (null !== c279) {
    if (0 === c281) {
      let _return = tmp.return;
    } else {
      c102 = null;
      c103 = null;
      if (c168) {
        let iter = tmp.memoizedState;
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
      c165 = null;
      c166 = null;
      c167 = null;
      c169 = false;
      c171 = 0;
      c172 = null;
      c138 = null;
      c139 = 0;
      _return = c279;
    }
    if (null !== _return) {
      do {
        let tmp5 = unwindInterruptedWork(_return.alternate, _return);
        _return = _return.return;
      } while (null !== _return);
    }
    c279 = null;
  }
}
function prepareFreshStack(timeoutHandle, tmp24Result) {
  let tmp18;
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
  closure_278 = timeoutHandle;
  const tmp5 = createWorkInProgress(timeoutHandle.current, null);
  closure_279 = tmp5;
  closure_280 = tmp24Result;
  c281 = 0;
  c282 = null;
  c283 = false;
  closure_284 = !(timeoutHandle.pendingLanes & ~timeoutHandle.suspendedLanes & ~timeoutHandle.pingedLanes & tmp24Result);
  c285 = false;
  c287 = 0;
  c288 = 0;
  c289 = 0;
  c290 = 0;
  c291 = 0;
  c292 = 0;
  c293 = null;
  c294 = null;
  c295 = false;
  let tmp6 = tmp24Result;
  if (8 & tmp24Result) {
    tmp6 = tmp24Result | 32 & tmp24Result;
  }
  const entangledLanes = timeoutHandle.entangledLanes;
  let tmp7 = tmp6;
  if (0 !== entangledLanes) {
    let tmp9 = entangledLanes & tmp6;
    let tmp10 = tmp6;
    tmp7 = tmp6;
    if (0 < tmp9) {
      do {
        let diff = 31 - clz32Fallback(tmp9);
        tmp10 = tmp10 | tmp8[diff];
        tmp9 = tmp9 & ~1 << diff;
        tmp7 = tmp10;
      } while (0 < tmp9);
    }
  }
  closure_286 = tmp7;
  c143 = 0;
  c144 = 0;
  let num4 = 0;
  if (0 < c143) {
    while (true) {
      let sum = num4 + 1;
      dependencyMap4[num4] = null;
      let sum1 = sum + 1;
      dependencyMap4[sum] = null;
      tmp18 = dependencyMap4[sum1];
      let sum2 = sum1 + 1;
      dependencyMap4[sum1] = null;
      let tmp20 = dependencyMap4[sum2];
      dependencyMap4[sum2] = null;
      if (null !== dependencyMap4[sum]) {
        if (null !== tmp18) {
          break;
        }
      }
      if (0 !== tmp20) {
        let tmp22 = markUpdateLaneFromFiberToRoot(dependencyMap4[num4], tmp18, tmp20);
      }
      num4 = sum2 + 1;
    }
    if (null === tmp16.pending) {
      tmp18.next = tmp18;
    } else {
      tmp18.next = iter.next;
      iter.next = tmp18;
    }
    tmp16.pending = tmp18;
  }
  return tmp5;
}
function handleThrow(current, arg1) {
  let promise = arg1;
  c165 = null;
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = obj8;
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
    if (null === c279) {
      c287 = 1;
      current = current.current;
      if (typeof promise !== "object") {
        let obj = { value: null, source: null, stack: null };
        obj[0] = promise;
        obj[1] = current;
        obj[2] = getStackByFiberInDevAndProd(current);
        tmp15(current, obj);
      }
      let value = weakMap.get(promise);
      if (undefined === value) {
        obj = { value: null, source: null, stack: null };
        obj[0] = promise;
        obj[1] = current;
        obj[2] = getStackByFiberInDevAndProd(current);
        const result = weakMap.set(promise, obj);
        value = obj;
      }
      obj = value;
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
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = obj8;
  if (null === H) {
    H = obj8;
  }
  return H;
}
function pushAsyncDispatcher() {
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A = closure_275;
  return __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A;
}
function renderRootSync(shellSuspendCounter, tmp24Result, arg2) {
  closure_277 = closure_277 | 2;
  let tmp6 = c278 === shellSuspendCounter;
  const tmp3 = closure_277;
  const tmp4 = pushDispatcher();
  if (tmp6) {
    tmp6 = c280 === tmp24Result;
  }
  if (!tmp6) {
    c298 = null;
    prepareFreshStack(shellSuspendCounter, tmp24Result);
  }
  let flag = false;
  try {
    if (0 !== c281) {
      if (null !== c279) {
        if (8 === tmp13) {
          resetWorkInProgressStack();
          let num3 = 6;
        } else {
          if (3 !== tmp13) {
            if (2 !== tmp13) {
              if (9 !== tmp13) {
                if (6 !== tmp13) {
                  c281 = 0;
                  c282 = null;
                  throwAndUnwindWorkLoop(shellSuspendCounter, c279, tmp44, tmp13);
                }
              }
            }
          }
          if (null === closure_159.current) {
            flag = true;
          }
          c281 = 0;
          c282 = null;
          throwAndUnwindWorkLoop(shellSuspendCounter, c279, tmp44, c281);
          if (arg2) {
            if (c284) {
              num3 = 0;
            }
          }
        }
      }
      if (flag) {
        shellSuspendCounter.shellSuspendCounter = shellSuspendCounter.shellSuspendCounter + 1;
      }
      c102 = null;
      c103 = null;
      closure_277 = tmp3;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = tmp4;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A = tmp5;
      if (null === c279) {
        c278 = null;
        c280 = 0;
        finishQueueingConcurrentUpdates();
      }
      return num3;
    }
    workLoopSync();
    num3 = c287;
  } catch (tmp39) {
    handleThrow(tmp2, tmp39);
  }
  tmp5 = pushAsyncDispatcher();
}
function workLoopSync() {
  let _null7;
  if (null !== _null7) {
    do {
      let tmp = _null7;
      let tmp4 = beginWork(_null7.alternate, _null7, c286);
      _null7.memoizedProps = _null7.pendingProps;
      if (null === tmp4) {
        let tmp6 = completeUnitOfWork(tmp);
      } else {
        _null7 = tmp4;
      }
    } while (null !== _null7);
  }
}
function workLoopConcurrentByScheduler() {
  let _null7;
  if (null !== _null7) {
    if (!obj2.unstable_shouldYield()) {
      while (true) {
        let tmp = _null7;
        let tmp4 = beginWork(_null7.alternate, _null7, c286);
        _null7.memoizedProps = _null7.pendingProps;
        if (null === tmp4) {
          let tmp6 = completeUnitOfWork(tmp);
        } else {
          _null7 = tmp4;
        }
        if (null === _null7) {
          break;
        } else {
          let obj = peek;
          if (obj.unstable_shouldYield()) {
            break;
          }
        }
      }
    }
    obj2 = peek;
  }
}
function replaySuspendedUnitOfWork(pendingProps) {
  ({ alternate, tag } = pendingProps);
  if (15 !== tag) {
    if (0 !== tag) {
      if (11 === tag) {
        let tmp7Result = replayFunctionComponent(alternate, pendingProps, pendingProps.pendingProps, pendingProps.type.render, pendingProps.ref, c280);
      } else {
        if (5 === tag) {
          if (c168) {
            let iter = pendingProps.memoizedState;
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
          c165 = null;
          c166 = null;
          c167 = null;
          c169 = false;
          c171 = 0;
          c172 = null;
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
          ({ memoizedProps: pendingProps.memoizedProps, memoizedState: pendingProps.memoizedState, updateQueue: pendingProps.updateQueue, type: pendingProps.type, dependencies } = alternate2);
          let tmp10 = null;
          if (null !== dependencies) {
            const obj = { lanes: null, firstContext: null };
            ({ lanes: obj[0], firstContext: obj[1] } = dependencies);
            tmp10 = obj;
          }
          pendingProps.dependencies = tmp10;
        }
        closure_279 = pendingProps;
        tmp7Result = beginWork(alternate, pendingProps, c286);
      }
    }
    pendingProps.memoizedProps = pendingProps.pendingProps;
    if (null === tmp7Result) {
      completeUnitOfWork(pendingProps);
    } else {
      closure_279 = tmp7Result;
    }
  }
  tmp7Result = replayFunctionComponent(alternate, pendingProps, pendingProps.pendingProps, pendingProps.type, undefined, c280);
}
function throwAndUnwindWorkLoop(current, memoizedState, value, c281) {
  c102 = null;
  c103 = null;
  resetHooksOnUnwind(memoizedState);
  c138 = null;
  c139 = 0;
  const _return = memoizedState.return;
  try {
    if ((function throwException(pingCache, _return, flags, cache, c280) {
      flags.flags = flags.flags | 32768;
      let ErrorResult = cache;
      if (null !== cache) {
        ErrorResult = cache;
        if (typeof cache === "object") {
          ErrorResult = cache;
          if (typeof cache.then === "function") {
            if (null !== flags.alternate) {
              callback2(0, flags, c280, true);
            }
            const tag = flags.tag;
            let tmp6 = 1 & flags.mode;
            if (!tmp6) {
              let tmp7 = 0 !== tag;
              if (tmp7) {
                tmp7 = 11 !== tag;
              }
              if (tmp7) {
                tmp7 = 15 !== tag;
              }
              tmp6 = tmp7;
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
            const current = ref.current;
            if (null !== current) {
              const tag2 = current.tag;
              if (31 !== tag2) {
                if (13 !== tag2) {
                  if (22 === tag2) {
                    if (1 & current.mode) {
                      current.flags = current.flags | 65536;
                      if (cache === closure_133) {
                        current.flags = current.flags | 16384;
                      } else {
                        const updateQueue = current.updateQueue;
                        if (null === updateQueue) {
                          let obj = { transitions: null, markerInstances: null, retryQueue: null };
                          const _Set4 = Set;
                          const items = [cache];
                          const set = new Set(items);
                          obj[2] = set;
                          current.updateQueue = obj;
                        } else {
                          const retryQueue = updateQueue.retryQueue;
                          if (null === retryQueue) {
                            const _Set3 = Set;
                            const items1 = [cache];
                            const set1 = new Set(items1);
                            updateQueue.retryQueue = set1;
                          } else {
                            retryQueue.add(cache);
                          }
                        }
                        const pingCache2 = pingCache.pingCache;
                        if (null === pingCache2) {
                          const obj11 = new closure_276();
                          pingCache.pingCache = obj11;
                          const _Set6 = Set;
                          const set2 = new Set();
                          const result = obj11.set(cache, set2);
                          let value = set2;
                        } else {
                          value = pingCache2.get(cache);
                          if (undefined === value) {
                            const _Set5 = Set;
                            const set3 = new Set();
                            const result1 = pingCache2.set(cache, set3);
                            value = set3;
                          }
                        }
                        if (!value.has(c280)) {
                          c285 = true;
                          value.add(c280);
                          const bindResult = callback5.bind(null, pingCache, cache, c280);
                          cache.then(bindResult, bindResult);
                        }
                      }
                      return false;
                    }
                  }
                  const _Error = Error;
                  throw Error("Unexpected Suspense handler tag (" + current.tag + "). This is a bug in React.");
                }
              }
              if (1 & flags.mode) {
                if (null === closure_160) {
                  c287 = 4;
                  let tmp103 = c283;
                  if (!c283) {
                    tmp103 = (4194048 & closure_280) !== closure_280 && null !== ref.current;
                  }
                  if (!tmp103) {
                    c284 = true;
                  }
                  let tmp109 = !tmp108;
                  if (!(134217727 & closure_288)) {
                    tmp109 = !(134217727 & closure_289);
                  }
                  if (!tmp109) {
                    tmp109 = null === closure_278;
                  }
                  if (!tmp109) {
                    callback4(closure_278, closure_280, closure_291, false);
                  }
                } else {
                  let tmp101 = null === current.alternate;
                  if (tmp101) {
                    tmp101 = 0 === c287;
                  }
                  if (tmp101) {
                    c287 = 3;
                  }
                }
              }
              current.flags = current.flags & -257;
              if (1 & current.mode) {
                current.flags = current.flags | 65536;
                current.lanes = c280;
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
                    obj = { lane: 2, tag: 2, payload: null, callback: null, next: null };
                    callback3(flags, obj, 2);
                  }
                } else {
                  if (tmp117) {
                    flags.tag = 28;
                  }
                  tmp117 = 0 === flags.tag && null === flags.alternate;
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
                  const set4 = new Set(items2);
                  current.updateQueue = set4;
                } else {
                  updateQueue2.add(cache);
                }
                if (1 & current.mode) {
                  const pingCache3 = pingCache.pingCache;
                  if (null === pingCache3) {
                    const obj14 = new closure_276();
                    pingCache.pingCache = obj14;
                    const _Set9 = Set;
                    const set5 = new Set();
                    const result2 = obj14.set(cache, set5);
                    value = set5;
                  } else {
                    value = pingCache3.get(cache);
                    if (undefined === value) {
                      const _Set8 = Set;
                      const set6 = new Set();
                      const result3 = pingCache3.set(cache, set6);
                      value = set6;
                    }
                  }
                  if (!value.has(c280)) {
                    c285 = true;
                    value.add(c280);
                    const bindResult1 = callback5.bind(null, pingCache, cache, c280);
                    cache.then(bindResult1, bindResult1);
                  }
                }
              }
              return false;
            } else if (1 === pingCache.tag) {
              pingCache = pingCache.pingCache;
              if (null === pingCache) {
                obj8 = new closure_276();
                pingCache.pingCache = obj8;
                const _Set2 = Set;
                const set7 = new Set();
                const result4 = obj8.set(cache, set7);
                let value1 = set7;
              } else {
                value1 = pingCache.get(cache);
                if (undefined === value1) {
                  const _Set = Set;
                  const set8 = new Set();
                  const result5 = pingCache.set(cache, set8);
                  value1 = set8;
                }
              }
              if (!value1.has(c280)) {
                c285 = true;
                value1.add(c280);
                const bindResult2 = callback5.bind(null, pingCache, cache, c280);
                cache.then(bindResult2, bindResult2);
              }
              c287 = 4;
              let tmp46 = c283;
              if (!c283) {
                tmp46 = (4194048 & closure_280) !== closure_280 && null !== ref.current;
              }
              if (!tmp46) {
                c284 = true;
              }
              let tmp52 = !tmp51;
              if (!(134217727 & closure_288)) {
                tmp52 = !(134217727 & closure_289);
              }
              if (!tmp52) {
                tmp52 = null === closure_278;
              }
              if (!tmp52) {
                callback4(closure_278, closure_280, closure_291, false);
              }
              return false;
            } else {
              const _Error2 = Error;
              ErrorResult = Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
            }
          }
        }
      }
      const ErrorResult1 = Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.", { cause: ErrorResult });
      if (typeof ErrorResult1 === "object") {
        if (null !== ErrorResult1) {
          obj1 = store;
          let value2 = store.get(ErrorResult1);
          if (undefined === value2) {
            obj1 = { value: null, source: null, stack: null };
            obj1[0] = ErrorResult1;
            obj1[1] = flags;
            obj1[2] = callback(flags);
            const result6 = obj1.set(ErrorResult1, obj1);
            value2 = obj1;
          }
          obj = value2;
        }
        let arr = items3;
        if (null === items3) {
          items3 = [obj];
        } else {
          arr = arr.push(obj);
        }
        if (4 !== c287) {
          c287 = 2;
        }
        if (null === _return) {
          return true;
        } else {
          if (typeof ErrorResult !== "object") {
            obj2 = { value: null, source: null, stack: null };
            obj2[0] = ErrorResult;
            obj2[1] = flags;
            obj2[2] = callback(flags);
          }
          let value3 = store.get(ErrorResult);
          if (undefined === value3) {
            obj3 = { value: null, source: null, stack: null };
            obj3[0] = ErrorResult;
            obj3[1] = flags;
            obj3[2] = callback(flags);
            const result7 = store.set(ErrorResult, obj3);
            value3 = obj3;
          }
        }
      }
      obj = { value: ErrorResult1, source: flags, stack: callback(flags) };
    })(current, _return, memoizedState, value, c280)) {
      c287 = 1;
      logUncaughtError(current, createCapturedValueAtFiber(value, current.current));
      c279 = null;
    } else if (32768 & memoizedState.flags) {
      let flag2 = true;
      if (1 !== c281) {
        flag2 = false;
        if (!c284) {
          flag2 = false;
          if (!(536870912 & c280)) {
            c283 = true;
            let tmp16 = 2 === c281;
            if (!tmp16) {
              tmp16 = 9 === c281;
            }
            if (!tmp16) {
              tmp16 = 3 === c281;
            }
            if (!tmp16) {
              tmp16 = 6 === c281;
            }
            flag2 = true;
            if (tmp16) {
              current = closure_159.current;
              let tmp18 = null !== current;
              if (tmp18) {
                tmp18 = 13 === current.tag;
              }
              flag2 = true;
              if (tmp18) {
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
  } catch (tmp24) {
    if (tmp2 !== tmp) {
      c279 = tmp;
      throw tmp24;
    } else {
      c287 = 1;
      logUncaughtError(tmp4, createCapturedValueAtFiber(tmp5, tmp4.current));
      c279 = tmp2;
    }
  }
}
function completeUnitOfWork(pendingProps) {
  let tmp = pendingProps;
  while (!(32768 & tmp.flags)) {
    ({ return: _return, alternate } = tmp);
    let tmp3 = current;
    pendingProps = tmp.pendingProps;
    let child = null;
    switch (tmp.tag) {
      case 0:
        let tmp338 = bubbleProperties(tmp);
        child = null;
        if (null !== child) {
          _return = child;
        } else {
          let sibling16 = tmp.sibling;
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
      case 1:
        tmp338 = bubbleProperties(tmp);
        child = null;
        if (null !== child) {
          _return = child;
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
      case 2:
        let _Error6 = Error;
        let tag = tmp.tag;
        let text = `Unknown unit of work tag (${tag}`;
        let text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
        let ErrorResult = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
        throw ErrorResult;
      case 3:
        let stateNode2 = tmp.stateNode;
        let tmp314 = null !== alternate;
        let cache = null;
        if (tmp314) {
          cache = alternate.memoizedState.cache;
        }
        if (tmp.memoizedState.cache !== cache) {
          tmp.flags = tmp.flags | 2048;
        }
        closure_107._currentValue2 = closure_101.current;
        if (0 <= closure_86) {
          tmp317.current = dependencyMap3[tmp318];
          dependencyMap3[closure_86] = null;
          closure_86 = closure_86 - 1;
        }
        let tmp323 = popHostContainer();
        if (stateNode2.pendingContext) {
          stateNode2.context = stateNode2.pendingContext;
          stateNode2.pendingContext = null;
        }
        let tmp324 = tmp314;
        if (tmp314) {
          tmp324 = null !== alternate.child;
        }
        if (!tmp324) {
          tmp324 = null === alternate;
        }
        if (!tmp324) {
          let isDehydrated = alternate.memoizedState.isDehydrated;
          if (isDehydrated) {
            isDehydrated = !(256 & tmp.flags);
          }
          tmp324 = isDehydrated;
        }
        if (!tmp324) {
          tmp.flags = tmp.flags | 1024;
          let tmp325 = c100;
          if (null !== c100) {
            if (null === closure_294) {
              closure_294 = tmp325;
            } else {
              let push3 = arr3.push;
              let applyResult = push3.apply(closure_294, tmp325);
            }
            c100 = null;
          }
        }
        if (!tmp314) {
          let flag11 = true;
          if (!(16 & tmp.flags)) {
            let sibling15 = tmp.child;
            flag11 = false;
            if (null !== sibling15) {
              flag11 = true;
              while (!(8218 & sibling15.flags)) {
                flag11 = true;
                if (8218 & sibling15.subtreeFlags) {
                  break;
                } else {
                  sibling15 = sibling15.sibling;
                  flag11 = false;
                  if (null === sibling15) {
                    break;
                  }
                }
              }
            }
          }
        } else {
          flag11 = false;
        }
        if (flag11) {
          let tmp330 = createChildSet();
          let flag12 = false;
          let flag13 = false;
          let tmp334 = appendAllChildrenToContainer(tmp330, tmp2, false, false);
          tmp.stateNode.pendingChildren = tmp330;
          tmp.flags = tmp.flags | 4;
        }
        let tmp336 = bubbleProperties(tmp);
        child = null;
      break;
      case 4:
        let tmp161 = popHostContainer();
        if (null === alternate) {
          let flag3 = true;
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
          let tmp164 = createChildSet();
          let flag4 = false;
          let flag5 = false;
          let tmp168 = appendAllChildrenToContainer(tmp164, tmp2, false, false);
          tmp.stateNode.pendingChildren = tmp164;
          tmp.flags = tmp.flags | 4;
        }
        let tmp170 = bubbleProperties(tmp);
        child = null;
      break;
      case 5:
        let tmp273 = popHostContext(tmp);
        let tmp274 = null !== alternate;
        if (tmp274) {
          if (null != tmp.stateNode) {
            ({ stateNode, memoizedProps } = alternate);
            if (!tmp274) {
              let tmp296 = 16 & tmp.flags;
              let flag10 = true;
              if (!tmp296) {
                let sibling14 = tmp.child;
                flag10 = false;
                if (null !== sibling14) {
                  let tmp297 = 8218 & sibling14.flags;
                  flag10 = true;
                  while (!tmp297) {
                    let tmp299 = 8218 & sibling14.subtreeFlags;
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
                tmp.stateNode = stateNode;
              }
              let tmp312 = bubbleProperties(tmp);
              let tmp313 = tmp.flags & -16777217;
              tmp.flags = tmp313;
              child = null;
            }
            let obj11 = get_BatchedBridge;
            let result = obj11.diffAttributePayloads(memoizedProps, pendingProps, stateNode.canonical.viewConfig.validAttributes);
            stateNode.canonical.currentProps = pendingProps;
            let node = stateNode.node;
            if (!flag10) {
              if (null === result) {
                tmp.stateNode = stateNode;
              } else {
                let tmp305 = cloneNodeWithNewProps(node, result);
                let obj = { node: null, canonical: null };
                obj[0] = tmp305;
                obj[1] = stateNode.canonical;
              }
            }
            if (null !== result) {
              let tmp307 = callback5(node, result);
            } else {
              tmp307 = cloneNodeWithNewChildren(node);
            }
          }
        }
        if (pendingProps) {
          let current3 = closure_95.current;
          let sum = c360 + 2;
          c360 = sum;
          let tmp283 = get(tmp.type);
          obj8 = get_BatchedBridge;
          let attributePayload = obj8.createAttributePayload(pendingProps, tmp283.validAttributes);
          obj = { node: null, canonical: null };
          let tmp290 = createNode(c360, tmp283.uiViewClassName, current3.containerTag, attributePayload, tmp2);
          obj[0] = tmp290;
          obj1 = { nativeTag: null, viewConfig: null, currentProps: null, internalInstanceHandle: null, publicInstance: null, publicRootInstance: null };
          obj1[0] = c360;
          obj1[1] = tmp283;
          obj1[2] = pendingProps;
          obj1[3] = tmp;
          obj1[5] = current3.publicInstance;
          obj[1] = obj1;
          let tmp291 = tmp.flags | 8;
          tmp.flags = tmp291;
          let flag8 = false;
          let flag9 = false;
          let tmp295 = appendAllChildren(obj, tmp2, false, false);
          tmp.stateNode = obj;
        } else if (null === tmp.stateNode) {
          let _Error5 = Error;
          let ErrorResult1 = Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
          throw ErrorResult1;
        } else {
          let tmp276 = bubbleProperties(tmp);
          child = null;
        }
      break;
      case 6:
        if (alternate) {
          if (null != tmp.stateNode) {
            if (alternate.memoizedProps !== pendingProps) {
              let current2 = closure_93.current;
              tmp.flags = tmp.flags | 8;
              c360 = c360 + 2;
              obj2 = { node: null };
              obj3 = { text: null };
              obj3[0] = pendingProps;
              obj2[0] = createNode(c360, "RCTRawText", closure_95.current.containerTag, obj3, tmp2);
              tmp.stateNode = obj2;
            } else {
              tmp.stateNode = alternate.stateNode;
            }
            let tmp271 = bubbleProperties(tmp);
            child = null;
          }
        }
        if (typeof pendingProps !== "string") {
          if (null === tmp.stateNode) {
            let _Error4 = Error;
            throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
          }
        }
        current = closure_93.current;
        tmp.flags = tmp.flags | 8;
        c360 = c360 + 2;
        let obj4 = { node: null };
        obj5 = { text: null };
        obj5[0] = pendingProps;
        obj4[0] = createNode(c360, "RCTRawText", closure_95.current.containerTag, obj5, tmp2);
        tmp.stateNode = obj4;
      break;
      case 7:
        tmp338 = bubbleProperties(tmp);
        child = null;
        if (null !== child) {
          _return = child;
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
      case 8:
        tmp338 = bubbleProperties(tmp);
        child = null;
        if (null !== child) {
          _return = child;
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
      case 9:
        tmp338 = bubbleProperties(tmp);
        child = null;
        if (null !== child) {
          _return = child;
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
      case 10:
        tmp.type._currentValue2 = closure_101.current;
        if (0 <= closure_86) {
          tmp153.current = dependencyMap3[tmp154];
          dependencyMap3[closure_86] = null;
          closure_86 = closure_86 - 1;
        }
        let tmp159 = bubbleProperties(tmp);
        child = null;
      break;
      case 11:
        tmp338 = bubbleProperties(tmp);
        child = null;
        if (null !== child) {
          _return = child;
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
      case 12:
        tmp338 = bubbleProperties(tmp);
        child = null;
        if (null !== child) {
          _return = child;
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
      case 13:
        let memoizedState2 = tmp.memoizedState;
        let tmp171 = null === alternate;
        if (tmp171) {
          if (null !== memoizedState2) {
            if (null !== memoizedState2.dehydrated) {
              if (tmp171) {
                let _Error = Error;
                throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
              } else {
                if (!(128 & tmp.flags)) {
                  tmp.memoizedState = null;
                }
                tmp.flags = tmp.flags | 4;
                let tmp177 = bubbleProperties(tmp);
                let flag6 = false;
                if (!flag6) {
                  let tmp179 = closure_86;
                  if (256 & tmp.flags) {
                    let tmp188 = tmp179;
                    if (0 <= tmp179) {
                      closure_159.current = dependencyMap3[tmp179];
                      dependencyMap3[closure_86] = null;
                      let diff = closure_86 - 1;
                      closure_86 = diff;
                      tmp188 = diff;
                    }
                    if (c160 === tmp) {
                      c160 = null;
                    }
                    let tmp187 = tmp;
                    if (0 <= tmp188) {
                      tmp194.current = dependencyMap3[tmp188];
                      dependencyMap3[closure_86] = null;
                      closure_86 = closure_86 - 1;
                      tmp187 = tmp;
                    }
                  } else {
                    let tmp180 = tmp179;
                    if (0 <= tmp179) {
                      closure_159.current = dependencyMap3[tmp179];
                      dependencyMap3[closure_86] = null;
                      let diff1 = closure_86 - 1;
                      closure_86 = diff1;
                      tmp180 = diff1;
                    }
                    if (c160 === tmp) {
                      c160 = null;
                    }
                    tmp187 = null;
                    if (0 <= tmp180) {
                      tmp186.current = dependencyMap3[tmp180];
                      dependencyMap3[closure_86] = null;
                      closure_86 = closure_86 - 1;
                      tmp187 = null;
                    }
                  }
                  child = tmp187;
                }
              }
            }
          }
          let tmp172 = c100;
          if (null === c100) {
            let tmp175 = null !== alternate;
            if (tmp175) {
              tmp175 = null !== alternate.memoizedState;
            }
            flag6 = true;
            if (tmp175) {
              alternate.memoizedState.hydrationErrors = tmp172;
              flag6 = true;
            }
          } else {
            if (null === closure_294) {
              closure_294 = tmp172;
            } else {
              let push = arr.push;
              let applyResult1 = push.apply(closure_294, tmp172);
            }
            c100 = null;
          }
        }
        let tmp200 = closure_86;
        if (0 <= closure_86) {
          tmp198.current = dependencyMap3[tmp199];
          dependencyMap3[closure_86] = null;
          let diff2 = closure_86 - 1;
          closure_86 = diff2;
          tmp200 = diff2;
        }
        if (c160 === tmp) {
          c160 = null;
        }
        if (0 <= tmp200) {
          tmp206.current = dependencyMap3[tmp200];
          dependencyMap3[closure_86] = null;
          closure_86 = closure_86 - 1;
        }
        if (128 & tmp.flags) {
          tmp.lanes = tmp3;
          let tmp222 = tmp;
        } else {
          let tmp210 = null !== alternate;
          if (tmp210) {
            tmp210 = null !== alternate.memoizedState;
          }
          let tmp211 = null !== memoizedState2;
          if (tmp211) {
            child = tmp.child;
            let tmp212 = null !== child.alternate;
            if (tmp212) {
              tmp212 = null !== child.alternate.memoizedState;
            }
            if (tmp212) {
              tmp212 = null !== child.alternate.memoizedState.cachePool;
            }
            let pool = null;
            if (tmp212) {
              pool = child.alternate.memoizedState.cachePool.pool;
            }
            let tmp214 = null !== child.memoizedState;
            if (tmp214) {
              tmp214 = null !== child.memoizedState.cachePool;
            }
            let pool1 = null;
            if (tmp214) {
              pool1 = child.memoizedState.cachePool.pool;
            }
            if (pool1 !== pool) {
              child.flags = child.flags | 2048;
            }
          }
          let tmp216 = tmp211 !== tmp210;
          if (tmp216) {
            tmp216 = tmp211;
          }
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
            closure_292 = closure_292 | num5;
          }
          let tmp221 = bubbleProperties(tmp);
          tmp222 = null;
        }
        child = tmp222;
      break;
      case 14:
        tmp338 = bubbleProperties(tmp);
        child = null;
        if (null !== child) {
          _return = child;
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
      case 15:
        tmp338 = bubbleProperties(tmp);
        child = null;
        if (null !== child) {
          _return = child;
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
      case 16:
        tmp338 = bubbleProperties(tmp);
        child = null;
        if (null !== child) {
          _return = child;
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
      case 17:
        tmp338 = bubbleProperties(tmp);
        child = null;
        if (null !== child) {
          _return = child;
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
      case 18:
        _Error6 = Error;
        tag = tmp.tag;
        text = `Unknown unit of work tag (${tag}`;
        text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
        ErrorResult = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
        throw ErrorResult;
      case 19:
        if (0 <= closure_86) {
          tmp70.current = dependencyMap3[tmp71];
          dependencyMap3[closure_86] = null;
          closure_86 = closure_86 - 1;
        }
        let memoizedState = tmp.memoizedState;
        if (null === memoizedState) {
          let tmp152 = bubbleProperties(tmp);
          child = null;
        } else {
          let tmp348 = 128 & tmp.flags;
          let rendering = memoizedState.rendering;
          if (null === rendering) {
            if (tmp348) {
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
                  let flag2 = tmp348;
                } else {
                  tmp137.sibling = null;
                  flag2 = tmp348;
                }
              } else {
                flag2 = tmp348;
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
                      flag2 = tmp348;
                    } else {
                      memoizedState.tail.sibling = null;
                      flag2 = tmp348;
                    }
                  } else {
                    tmp135.sibling = null;
                    flag2 = tmp348;
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
                    closure_292 = closure_292 | num3;
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
                      ({ childLanes: sibling10.childLanes, lanes: sibling10.lanes, child: sibling10.child } = alternate2);
                      sibling10.subtreeFlags = 0;
                      sibling10.deletions = null;
                      ({ memoizedProps: sibling10.memoizedProps, memoizedState: sibling10.memoizedState, updateQueue: sibling10.updateQueue, type: sibling10.type, dependencies } = alternate2);
                      let tmp127 = null;
                      if (null !== dependencies) {
                        let obj6 = { lanes: null, firstContext: null };
                        ({ lanes: obj2[0], firstContext: obj2[1] } = dependencies);
                        tmp127 = obj6;
                      }
                      sibling10.dependencies = tmp127;
                    }
                    sibling10 = sibling10.sibling;
                  }
                  let sum1 = closure_86 + 1;
                  closure_86 = sum1;
                  dependencyMap3[sum1] = closure_162.current;
                  closure_162.current = 1 & closure_162.current | 2;
                  child = tmp.child;
                }
              }
              let tmp103 = null !== memoizedState.tail;
              if (tmp103) {
                obj = peek;
                tmp103 = obj.unstable_now() > Infinity;
              }
              flag2 = tmp348;
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
            let flag = tmp348;
            if (!tmp348) {
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
                  closure_292 = closure_292 | num2;
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
                      child = null;
                    }
                  }
                }
              } else {
                let obj13 = peek;
                let tmp77 = 2 * obj13.unstable_now() - memoizedState.renderingStartTime > Infinity;
                if (tmp77) {
                  tmp77 = 536870912 !== tmp3;
                }
                flag = tmp348;
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
                      sibling = sibling.sibling;
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
            let tail = memoizedState.tail;
            memoizedState.rendering = tail;
            memoizedState.tail = tail.sibling;
            obj2 = peek;
            memoizedState.renderingStartTime = obj2.unstable_now();
            tail.sibling = null;
            let sum2 = 1 & closure_162.current;
            if (flag2) {
              let tmp147 = sum2 | 2;
            } else {
              tmp147 = sum2;
            }
            sum2 = closure_86 + 1;
            closure_86 = sum2;
            dependencyMap3[sum2] = closure_162.current;
            closure_162.current = tmp147;
          } else {
            let tmp141 = bubbleProperties(tmp);
            child = null;
          }
        }
      break;
      case 20:
        _Error6 = Error;
        tag = tmp.tag;
        text = `Unknown unit of work tag (${tag}`;
        text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
        ErrorResult = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
        throw ErrorResult;
      case 21:
        _Error6 = Error;
        tag = tmp.tag;
        text = `Unknown unit of work tag (${tag}`;
        text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
        ErrorResult = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
        throw ErrorResult;
      case 22:
        let tmp14 = closure_159;
        let tmp15 = closure_86;
        let tmp16 = closure_86;
        if (0 <= closure_86) {
          tmp14.current = dependencyMap3[tmp15];
          dependencyMap3[closure_86] = null;
          let diff3 = closure_86 - 1;
          closure_86 = diff3;
          tmp16 = diff3;
        }
        if (c160 === tmp) {
          c160 = null;
        }
        let tmp22 = closure_162;
        if (0 <= tmp16) {
          tmp22.current = dependencyMap3[tmp16];
          dependencyMap3[closure_86] = null;
          let diff4 = closure_86 - 1;
          closure_86 = diff4;
        }
        let tmp27 = closure_158;
        current = closure_158.current;
        let tmp28 = closure_157;
        let tmp29 = closure_86;
        let tmp30 = closure_86;
        if (0 <= closure_86) {
          tmp28.current = dependencyMap3[tmp29];
          dependencyMap3[closure_86] = null;
          let diff5 = closure_86 - 1;
          closure_86 = diff5;
          tmp30 = diff5;
        }
        if (0 <= tmp30) {
          tmp27.current = dependencyMap3[tmp30];
          dependencyMap3[closure_86] = null;
          let diff6 = closure_86 - 1;
          closure_86 = diff6;
        }
        let tmp39 = null !== tmp.memoizedState;
        let tmp40 = null !== alternate;
        if (tmp40) {
          let tmp42 = null !== alternate.memoizedState;
          if (tmp42 !== tmp39) {
            let tmp43 = tmp.flags | 8192;
            tmp.flags = tmp43;
          }
        } else if (tmp39) {
          let tmp41 = tmp.flags | 8192;
          tmp.flags = tmp41;
        }
        if (tmp39) {
          let tmp44 = 1 & tmp.mode;
          if (tmp44) {
            let tmp47 = 536870912 & tmp3;
            let tmp48 = !tmp47;
            let tmp49 = !tmp48;
            if (tmp49) {
              let tmp50 = 128 & tmp.flags;
              tmp49 = !tmp50;
            }
            if (tmp49) {
              let tmp52 = bubbleProperties(tmp);
              let tmp53 = 6 & tmp.subtreeFlags;
              if (tmp53) {
                let tmp54 = tmp.flags | 8192;
                tmp.flags = tmp54;
              }
            }
            let updateQueue = tmp.updateQueue;
            if (null !== updateQueue) {
              if (null !== updateQueue.retryQueue) {
                let tmp55 = tmp.flags | 4;
                tmp.flags = tmp55;
              }
              let tmp56 = 16384 & tmp.flags;
              if (tmp56) {
                let num = 536870912;
                if (22 !== tmp.tag) {
                  let tmp57 = c80;
                  let tmp58 = c80 << 1;
                  c80 = tmp58;
                  let tmp59 = 62914560 & tmp58;
                  num = c80;
                  if (!tmp59) {
                    c80 = 4194304;
                    num = tmp57;
                  }
                }
                let tmp60 = tmp.lanes | num;
                tmp.lanes = tmp60;
                let tmp62 = closure_292 | num;
                closure_292 = tmp62;
              }
            }
            let tmp63 = tmp40;
            if (tmp40) {
              tmp63 = null !== alternate.memoizedState;
            }
            if (tmp63) {
              tmp63 = null !== alternate.memoizedState.cachePool;
            }
            let pool2 = null;
            if (tmp63) {
              pool2 = alternate.memoizedState.cachePool.pool;
            }
            let tmp65 = null !== tmp.memoizedState;
            if (tmp65) {
              tmp65 = null !== tmp.memoizedState.cachePool;
            }
            let pool3 = null;
            if (tmp65) {
              pool3 = tmp.memoizedState.cachePool.pool;
            }
            if (pool3 !== pool2) {
              let tmp67 = tmp.flags | 2048;
              tmp.flags = tmp67;
            }
            child = null;
            if (tmp40) {
              let tmp68 = closure_128;
              let tmp69 = closure_86;
              child = null;
              if (0 <= closure_86) {
                tmp68.current = dependencyMap3[tmp69];
                dependencyMap3[closure_86] = null;
                let diff7 = closure_86 - 1;
                closure_86 = diff7;
                child = null;
              }
            }
          }
        }
        let tmp46 = bubbleProperties(tmp);
      break;
      case 23:
        tmp14 = closure_159;
        tmp15 = closure_86;
        tmp16 = closure_86;
        if (0 <= closure_86) {
          tmp14.current = dependencyMap3[tmp15];
          dependencyMap3[closure_86] = null;
          diff3 = closure_86 - 1;
          closure_86 = diff3;
          tmp16 = diff3;
        }
        if (c160 === tmp) {
          c160 = null;
        }
        tmp22 = closure_162;
        if (0 <= tmp16) {
          tmp22.current = dependencyMap3[tmp16];
          dependencyMap3[closure_86] = null;
          diff4 = closure_86 - 1;
          closure_86 = diff4;
        }
        tmp27 = closure_158;
        current = closure_158.current;
        tmp28 = closure_157;
        tmp29 = closure_86;
        tmp30 = closure_86;
        if (0 <= closure_86) {
          tmp28.current = dependencyMap3[tmp29];
          dependencyMap3[closure_86] = null;
          diff5 = closure_86 - 1;
          closure_86 = diff5;
          tmp30 = diff5;
        }
        if (0 <= tmp30) {
          tmp27.current = dependencyMap3[tmp30];
          dependencyMap3[closure_86] = null;
          diff6 = closure_86 - 1;
          closure_86 = diff6;
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
              tmp52 = bubbleProperties(tmp);
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
                tmp62 = closure_292 | num;
                closure_292 = tmp62;
              }
            }
            tmp63 = tmp40;
            if (tmp40) {
              tmp63 = null !== alternate.memoizedState;
            }
            if (tmp63) {
              tmp63 = null !== alternate.memoizedState.cachePool;
            }
            pool2 = null;
            if (tmp63) {
              pool2 = alternate.memoizedState.cachePool.pool;
            }
            tmp65 = null !== tmp.memoizedState;
            if (tmp65) {
              tmp65 = null !== tmp.memoizedState.cachePool;
            }
            pool3 = null;
            if (tmp65) {
              pool3 = tmp.memoizedState.cachePool.pool;
            }
            if (pool3 !== pool2) {
              tmp67 = tmp.flags | 2048;
              tmp.flags = tmp67;
            }
            child = null;
            if (tmp40) {
              tmp68 = closure_128;
              tmp69 = closure_86;
              child = null;
              if (0 <= closure_86) {
                tmp68.current = dependencyMap3[tmp69];
                dependencyMap3[closure_86] = null;
                diff7 = closure_86 - 1;
                closure_86 = diff7;
                child = null;
              }
            }
          }
        }
        tmp46 = bubbleProperties(tmp);
      break;
      case 24:
        let cache1 = null;
        if (null !== alternate) {
          cache1 = alternate.memoizedState.cache;
        }
        if (tmp.memoizedState.cache !== cache1) {
          tmp.flags = tmp.flags | 2048;
        }
        closure_107._currentValue2 = closure_101.current;
        if (0 <= closure_86) {
          tmp7.current = dependencyMap3[tmp8];
          dependencyMap3[closure_86] = null;
          closure_86 = closure_86 - 1;
        }
        let tmp13 = bubbleProperties(tmp);
        child = null;
      break;
      case 25:
      break;
      case 26:
        tmp273 = popHostContext(tmp);
        tmp274 = null !== alternate;
        if (tmp274) {
          if (null != tmp.stateNode) {
            ({ stateNode, memoizedProps } = alternate);
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
                tmp.stateNode = stateNode;
              }
              tmp312 = bubbleProperties(tmp);
              tmp313 = tmp.flags & -16777217;
              tmp.flags = tmp313;
              child = null;
            }
            obj11 = get_BatchedBridge;
            result = obj11.diffAttributePayloads(memoizedProps, pendingProps, stateNode.canonical.viewConfig.validAttributes);
            stateNode.canonical.currentProps = pendingProps;
            node = stateNode.node;
            if (!flag10) {
              if (null === result) {
                tmp.stateNode = stateNode;
              } else {
                tmp305 = cloneNodeWithNewProps(node, result);
                obj = { node: null, canonical: null };
                obj[0] = tmp305;
                obj[1] = stateNode.canonical;
              }
            }
            if (null !== result) {
              tmp307 = callback5(node, result);
            } else {
              tmp307 = cloneNodeWithNewChildren(node);
            }
          }
        }
        if (pendingProps) {
          current3 = closure_95.current;
          sum = c360 + 2;
          c360 = sum;
          tmp283 = get(tmp.type);
          obj8 = get_BatchedBridge;
          attributePayload = obj8.createAttributePayload(pendingProps, tmp283.validAttributes);
          obj = { node: null, canonical: null };
          tmp290 = createNode(c360, tmp283.uiViewClassName, current3.containerTag, attributePayload, tmp2);
          obj[0] = tmp290;
          obj1 = { nativeTag: null, viewConfig: null, currentProps: null, internalInstanceHandle: null, publicInstance: null, publicRootInstance: null };
          obj1[0] = c360;
          obj1[1] = tmp283;
          obj1[2] = pendingProps;
          obj1[3] = tmp;
          obj1[5] = current3.publicInstance;
          obj[1] = obj1;
          tmp291 = tmp.flags | 8;
          tmp.flags = tmp291;
          flag8 = false;
          flag9 = false;
          tmp295 = appendAllChildren(obj, tmp2, false, false);
          tmp.stateNode = obj;
        } else if (null === tmp.stateNode) {
          _Error5 = Error;
          ErrorResult1 = Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
          throw ErrorResult1;
        } else {
          tmp276 = bubbleProperties(tmp);
          child = null;
        }
      break;
      case 27:
        tmp273 = popHostContext(tmp);
        tmp274 = null !== alternate;
        if (tmp274) {
          if (null != tmp.stateNode) {
            ({ stateNode, memoizedProps } = alternate);
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
                tmp.stateNode = stateNode;
              }
              tmp312 = bubbleProperties(tmp);
              tmp313 = tmp.flags & -16777217;
              tmp.flags = tmp313;
              child = null;
            }
            obj11 = get_BatchedBridge;
            result = obj11.diffAttributePayloads(memoizedProps, pendingProps, stateNode.canonical.viewConfig.validAttributes);
            stateNode.canonical.currentProps = pendingProps;
            node = stateNode.node;
            if (!flag10) {
              if (null === result) {
                tmp.stateNode = stateNode;
              } else {
                tmp305 = cloneNodeWithNewProps(node, result);
                obj = { node: null, canonical: null };
                obj[0] = tmp305;
                obj[1] = stateNode.canonical;
              }
            }
            if (null !== result) {
              tmp307 = callback5(node, result);
            } else {
              tmp307 = cloneNodeWithNewChildren(node);
            }
          }
        }
        if (pendingProps) {
          current3 = closure_95.current;
          sum = c360 + 2;
          c360 = sum;
          tmp283 = get(tmp.type);
          obj8 = get_BatchedBridge;
          attributePayload = obj8.createAttributePayload(pendingProps, tmp283.validAttributes);
          obj = { node: null, canonical: null };
          tmp290 = createNode(c360, tmp283.uiViewClassName, current3.containerTag, attributePayload, tmp2);
          obj[0] = tmp290;
          obj1 = { nativeTag: null, viewConfig: null, currentProps: null, internalInstanceHandle: null, publicInstance: null, publicRootInstance: null };
          obj1[0] = c360;
          obj1[1] = tmp283;
          obj1[2] = pendingProps;
          obj1[3] = tmp;
          obj1[5] = current3.publicInstance;
          obj[1] = obj1;
          tmp291 = tmp.flags | 8;
          tmp.flags = tmp291;
          flag8 = false;
          flag9 = false;
          tmp295 = appendAllChildren(obj, tmp2, false, false);
          tmp.stateNode = obj;
        } else if (null === tmp.stateNode) {
          _Error5 = Error;
          ErrorResult1 = Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
          throw ErrorResult1;
        } else {
          tmp276 = bubbleProperties(tmp);
          child = null;
        }
      break;
      case 28:
        tmp338 = bubbleProperties(tmp);
        child = null;
        if (null !== child) {
          _return = child;
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
      case 29:
      break;
      case 30:
      break;
      case 31:
        let tmp224 = null === alternate;
        if (tmp224) {
          if (null !== tmp.memoizedState) {
            if (tmp224) {
              let _Error3 = Error;
              throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
            } else {
              if (!(128 & tmp.flags)) {
                tmp.memoizedState = null;
              }
              tmp.flags = tmp.flags | 4;
              let tmp230 = bubbleProperties(tmp);
              let flag7 = false;
            }
          } else {
            let tmp225 = c100;
            if (null === c100) {
              let tmp228 = null !== alternate;
              if (tmp228) {
                tmp228 = null !== alternate.memoizedState;
              }
              flag7 = true;
              if (tmp228) {
                alternate.memoizedState.hydrationErrors = tmp225;
                flag7 = true;
              }
            } else {
              if (null === closure_294) {
                closure_294 = tmp225;
              } else {
                let push2 = arr2.push;
                let applyResult2 = push2.apply(closure_294, tmp225);
              }
              c100 = null;
            }
          }
          let flags = tmp.flags;
          if (flag7) {
            if (128 & flags) {
              let _Error2 = Error;
              throw Error("Client rendering an Activity suspended it again. This is a bug in React.");
            }
          } else {
            let tmp232 = closure_86;
            if (256 & flags) {
              let tmp241 = tmp232;
              if (0 <= tmp232) {
                closure_159.current = dependencyMap3[tmp232];
                dependencyMap3[closure_86] = null;
                let diff8 = closure_86 - 1;
                closure_86 = diff8;
                tmp241 = diff8;
              }
              if (c160 === tmp) {
                c160 = null;
              }
              let tmp240 = tmp;
              if (0 <= tmp241) {
                tmp247.current = dependencyMap3[tmp241];
                dependencyMap3[closure_86] = null;
                closure_86 = closure_86 - 1;
                tmp240 = tmp;
              }
            } else {
              let tmp233 = tmp232;
              if (0 <= tmp232) {
                closure_159.current = dependencyMap3[tmp232];
                dependencyMap3[closure_86] = null;
                let diff9 = closure_86 - 1;
                closure_86 = diff9;
                tmp233 = diff9;
              }
              if (c160 === tmp) {
                c160 = null;
              }
              tmp240 = null;
              if (0 <= tmp233) {
                tmp239.current = dependencyMap3[tmp233];
                dependencyMap3[closure_86] = null;
                closure_86 = closure_86 - 1;
                tmp240 = null;
              }
            }
            child = tmp240;
          }
        }
        let tmp252 = bubbleProperties(tmp);
        child = null;
      break;
      default:
        _Error6 = Error;
        tag = tmp.tag;
        text = `Unknown unit of work tag (${tag}`;
        text1 = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
        ErrorResult = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
        throw ErrorResult;
    }
  }
  unwindUnitOfWork(tmp, c283);
}
function unwindUnitOfWork(pendingProps, c283) {
  ({ alternate, tag } = pendingProps);
}
function flushMutationEffects() {
  if (1 === c300) {
    c300 = 0;
    if (13878 & _null8.subtreeFlags) {
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
      c363 = 2;
      c277 = c277 | 4;
      try {
        commitMutationEffectsOnFiber(_null8, c301);
        c277 = tmp9;
        c363 = tmp8;
        tmp5.T = tmp6;
      } catch (tmp12) {
        c277 = tmp4;
        c363 = tmp3;
        tmp2.T = tmp;
        throw tmp12;
      }
    }
    c301.current = _null8;
    c300 = 2;
  }
}
function flushLayoutEffects() {
  if (2 === c300) {
    c300 = 0;
    if (8772 & _null8.subtreeFlags) {
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
      c363 = 2;
      c277 = c277 | 4;
      try {
        commitLayoutEffectOnFiber(tmp13, _null8.alternate, _null8);
        c277 = tmp9;
        c363 = tmp8;
        tmp5.T = tmp6;
      } catch (tmp12) {
        c277 = tmp4;
        c363 = tmp3;
        tmp2.T = tmp;
        throw tmp12;
      }
    }
    c300 = 3;
  }
}
function flushSpawnedWork() {
  let length;
  let sum;
  c300 = 0;
  let obj = peek;
  const result = obj.unstable_requestPaint();
  let tmp5 = c301;
  if (!(10256 & _null8.subtreeFlags)) {
    if (!(10256 & tmp6.flags)) {
      c300 = 0;
      c301 = null;
      _null8 = null;
      releaseRootPooledCache(tmp5, tmp5.pendingLanes);
    }
    if (0 === tmp5.pendingLanes) {
      c299 = null;
    }
    lanesToEventPriority(c303);
    const stateNode = tmp6.stateNode;
    if (__REACT_DEVTOOLS_GLOBAL_HOOK__2) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__2.onCommitFiberRoot === "function") {
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__2.onCommitFiberRoot(closure_72, stateNode, undefined, !(128 & ~stateNode.current.flags));
        } catch (err) {
        }
      }
    }
    if (null !== _null7) {
      c363 = 2;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
      try {
        const onRecoverableError = tmp5.onRecoverableError;
        let num4 = 0;
        if (0 < _null7.length) {
          do {
            let iter = _null7[num4];
            obj = { componentStack: null };
            obj[0] = iter.stack;
            let onRecoverableErrorResult = onRecoverableError(iter.value, obj);
            sum = num4 + 1;
            num4 = sum;
            length = _null7.length;
          } while (sum < length);
        }
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = tmp20;
        c363 = tmp21;
      } catch (tmp37) {
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = tmp2;
        c363 = tmp;
        throw tmp37;
      }
    }
    if (tmp28) {
      flushPendingEffects();
    }
    ensureRootIsScheduled(tmp5);
    if (!(261930 & c303)) {
      c307 = 0;
      tmp5 = flushSyncWorkAcrossRoots_impl(0, false);
    }
    if (tmp5 === closure_308) {
      c307 = c307 + 1;
    } else {
      c307 = 0;
      closure_308 = tmp5;
    }
    tmp28 = 3 & c303 && 0 !== tmp5.tag;
  }
  c300 = 5;
}
function releaseRootPooledCache(c301, c304) {
  _null5.pooledCacheLanes = _null5.pooledCacheLanes & c304;
  if (0 == (_null5.pooledCacheLanes & c304)) {
    const pooledCache = _null5.pooledCache;
    if (null != pooledCache) {
      _null5.pooledCache = null;
      pooledCache.refCount = pooledCache.refCount - 1;
      if (0 === pooledCache.refCount) {
        const result = pooledCache(287).unstable_scheduleCallback(pooledCache(287).unstable_NormalPriority, () => {
          const controller = pooledCache.controller;
          controller.abort();
        });
        const obj = pooledCache(287);
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
    const tmp35 = lanesToEventPriority(c303);
    try {
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
      c305 = null;
      c300 = 0;
      c301 = null;
      c302 = null;
      c303 = 0;
      if (6 & closure_277) {
        const _Error = Error;
        throw Error("Cannot flush passive effects while already rendering.");
      } else {
        closure_277 = tmp12 | 4;
        commitPassiveUnmountOnFiber(tmp10.current);
        commitPassiveMountOnFiber(tmp10, tmp10.current, tmp11, tmp9);
        closure_277 = tmp12;
        flushSyncWorkAcrossRoots_impl(0, false);
        if (__REACT_DEVTOOLS_GLOBAL_HOOK__2) {
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__2.onPostCommitFiberRoot === "function") {
            try {
              const result = __REACT_DEVTOOLS_GLOBAL_HOOK__2.onPostCommitFiberRoot(closure_72, tmp10);
            } catch (err) {
            }
          }
        }
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = tmp37;
        releaseRootPooledCache(tmp31, tmp32);
        return true;
      }
    } catch (tmp28) {
      tmp5.T = tmp4;
      releaseRootPooledCache(tmp3, tmp2);
      throw tmp28;
    }
    tmp31 = c301;
    tmp32 = c304;
  }
}
function captureCommitPhaseErrorOnRoot(_return, source, value) {
  if (typeof value === "object") {
    if (null !== value) {
      value = weakMap.get(value);
      if (undefined === value) {
        let obj = { value: null, source: null, stack: null };
        obj[0] = value;
        obj[1] = source;
        obj[2] = getStackByFiberInDevAndProd(source);
        const result = weakMap.set(value, obj);
        value = obj;
      }
      obj = value;
    }
    const stateNode = _return.stateNode;
    obj = {
      lane: 2,
      tag: 3,
      payload: { element: null },
      () => {
          logUncaughtError(stateNode, obj);
        },
      next: null
    };
    const iter = enqueueUpdate(_return, obj, 2);
    if (null !== iter) {
      iter.pendingLanes = iter.pendingLanes | 2;
      iter.suspendedLanes = 0;
      iter.pingedLanes = 0;
      iter.warmLanes = 0;
      if (tmp7) {
        if (null !== iter) {
          tmp8.next = iter;
        }
      }
      c113 = true;
      if (!c112) {
        c112 = true;
        if (prop) {
          _queueMicrotask(() => {
            if (6 & closure_277) {
              const result = callback(287).unstable_scheduleCallback(callback(287).unstable_ImmediatePriority, closure_118);
              const obj = callback(287);
            } else {
              callback2();
            }
          });
        } else {
          const result1 = stateNode(obj[3]).unstable_scheduleCallback(stateNode(obj[3]).unstable_ImmediatePriority, processRootScheduleInImmediateTask);
          obj5 = stateNode(obj[3]);
        }
      }
      tmp7 = iter !== iter && null === iter.next;
    }
  }
  obj = { value, source, stack: getStackByFiberInDevAndProd(source) };
}
function captureCommitPhaseError(tag, sibling2, value) {
  if (3 === tag.tag) {
    captureCommitPhaseErrorOnRoot(tag, tag, value);
  } else {
    let _return = sibling2;
    if (null !== sibling2) {
      while (3 !== _return.tag) {
        if (1 === _return.tag) {
          let stateNode = _return.stateNode;
          if (typeof value === "object") {
            if (null !== value) {
              value = weakMap.get(value);
              if (undefined === value) {
                let obj = { value: null, source: null, stack: null };
                obj[0] = value;
                obj[1] = tag;
                obj[2] = getStackByFiberInDevAndProd(tag);
                let result = weakMap.set(value, obj);
                value = obj;
              }
              obj = value;
            }
            obj = { lane: 2, tag: 3, payload: null, callback: null, next: null };
            let iter = enqueueUpdate(_return, obj, 2);
            if (null !== iter) {
              let getDerivedStateFromError = _return.type.getDerivedStateFromError;
              if (typeof getDerivedStateFromError === "function") {
                isArray = obj.value;
                obj.payload = () => getDerivedStateFromError(closure_4);
                obj.callback = () => {
                  logCaughtError(iter, _return, obj);
                };
              }
              let stateNode2 = _return.stateNode;
              let tmp7 = null !== stateNode2 && typeof stateNode2.componentDidCatch === "function";
              if (tmp7) {
                obj.callback = function() {
                  const self = this;
                  logCaughtError(obj, _return, obj);
                  if (typeof getDerivedStateFromError !== "function") {
                    if (null === set) {
                      const _Set = Set;
                      const items = [self];
                      set = new Set(items);
                    } else {
                      obj.add(self);
                    }
                  }
                  const stack = iter.stack;
                  let str = "";
                  if (null !== stack) {
                    str = stack;
                  }
                  self.componentDidCatch(obj.value, { componentStack: str });
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
              if (!c112) {
                c112 = true;
                if (prop) {
                  let tmp18 = _queueMicrotask(() => {
                    if (6 & closure_277) {
                      const result = callback(287).unstable_scheduleCallback(callback(287).unstable_ImmediatePriority, closure_118);
                      const obj = callback(287);
                    } else {
                      callback2();
                    }
                  });
                } else {
                  obj5 = iter(_return[3]);
                  let result1 = obj5.unstable_scheduleCallback(iter(_return[3]).unstable_ImmediatePriority, processRootScheduleInImmediateTask);
                }
              }
            }
          }
          obj = { value: null, source: null, stack: null };
          obj[0] = value;
          obj[1] = tag;
          obj[2] = getStackByFiberInDevAndProd(tag);
        }
        _return = _return.return;
      }
      captureCommitPhaseErrorOnRoot(_return, tag, value);
    }
  }
}
function pingSuspendedRoot(pingCache) {
  pingCache = pingCache.pingCache;
  if (null !== pingCache) {
    pingCache.delete(arg1);
  }
  pingCache.pingedLanes = pingCache.pingedLanes | pingCache.suspendedLanes & arg2;
  pingCache.warmLanes = pingCache.warmLanes & ~arg2;
  let tmp3 = c278 === pingCache;
  if (tmp3) {
    tmp3 = (c280 & arg2) === arg2;
  }
  if (tmp3) {
    if (4 === c287) {
      if (!(2 & c277)) {
        prepareFreshStack(pingCache, 0);
      }
    } else {
      if (3 === tmp5) {
        if ((62914560 & c280) === c280) {
          peek;
        }
      }
      closure_290 = closure_290 | arg2;
    }
    if (c292 === c280) {
      c292 = 0;
    }
  }
  if (tmp17) {
    if (null === closure_111) {
      closure_111 = pingCache;
      closure_110 = pingCache;
    } else {
      tmp18.next = pingCache;
      closure_111 = pingCache;
    }
  }
  c113 = true;
  if (!c112) {
    c112 = true;
    if (prop) {
      _queueMicrotask(() => {
        if (6 & closure_277) {
          const result = callback(287).unstable_scheduleCallback(callback(287).unstable_ImmediatePriority, closure_118);
          const obj = callback(287);
        } else {
          callback2();
        }
      });
    } else {
      const result = peek.unstable_scheduleCallback(peek.unstable_ImmediatePriority, processRootScheduleInImmediateTask);
    }
  }
  tmp17 = pingCache !== closure_111 && null === pingCache.next;
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
      if (!(62914560 & c80 << 1)) {
        c80 = 4194304;
        num3 = tmp;
      }
    }
    num = num3;
  }
  const iter = enqueueConcurrentRenderForLane(memoizedState, num);
  if (null !== iter) {
    iter.pendingLanes = iter.pendingLanes | num;
    if (268435456 !== num) {
      iter.suspendedLanes = 0;
      iter.pingedLanes = 0;
      iter.warmLanes = 0;
    }
    if (tmp4) {
      if (null !== iter) {
        tmp5.next = iter;
      }
    }
    c113 = true;
    if (!c112) {
      c112 = true;
      if (prop) {
        _queueMicrotask(() => {
          if (6 & closure_277) {
            const result = callback(287).unstable_scheduleCallback(callback(287).unstable_ImmediatePriority, closure_118);
            const obj = callback(287);
          } else {
            callback2();
          }
        });
      } else {
        const result = peek.unstable_scheduleCallback(peek.unstable_ImmediatePriority, processRootScheduleInImmediateTask);
      }
    }
    tmp4 = iter !== iter && null === iter.next;
  }
}
function resolveRetryWakeable(tag) {
  tag = tag.tag;
  if (31 !== tag) {
    if (13 !== tag) {
      if (19 === tag) {
        let _retryCache = tag.stateNode;
        let num4 = 0;
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
        if (!(62914560 & c80 << 1)) {
          c80 = 4194304;
          num7 = tmp5;
        }
      }
      num4 = num7;
    }
    const iter = enqueueConcurrentRenderForLane(tag, num4);
    if (null !== iter) {
      iter.pendingLanes = iter.pendingLanes | num4;
      if (268435456 !== num4) {
        iter.suspendedLanes = 0;
        iter.pingedLanes = 0;
        iter.warmLanes = 0;
      }
      if (tmp9) {
        if (null !== iter) {
          tmp10.next = iter;
        }
      }
      c113 = true;
      if (!c112) {
        c112 = true;
        if (prop) {
          _queueMicrotask(() => {
            if (6 & closure_277) {
              const result = callback(287).unstable_scheduleCallback(callback(287).unstable_ImmediatePriority, closure_118);
              const obj = callback(287);
            } else {
              callback2();
            }
          });
        } else {
          const result = peek.unstable_scheduleCallback(peek.unstable_ImmediatePriority, processRootScheduleInImmediateTask);
        }
      }
      tmp9 = iter !== iter && null === iter.next;
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
function FiberNode(arg0, arg1, arg2, arg3) {

}
function createFiberImplClass(arg0, pendingProps, arg2, mode) {
  Object.create(FiberNode.prototype);
  const obj = { tag: 29, key: null, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null };
  return obj;
}
function createWorkInProgress(child, pendingProps) {
  let alternate = child.alternate;
  if (null === alternate) {
    ({ tag, key, mode } = child);
    Object.create(FiberNode.prototype);
    let obj = { tag, key, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null };
    ({ elementType: obj.elementType, type: obj.type, stateNode: obj.stateNode } = child);
    obj.alternate = child;
    child.alternate = obj;
    alternate = obj;
  } else {
    alternate.pendingProps = pendingProps;
    alternate.type = child.type;
    alternate.flags = 0;
    alternate.subtreeFlags = 0;
    alternate.deletions = null;
  }
  alternate.flags = 65011712 & child.flags;
  ({ childLanes: alternate.childLanes, lanes: alternate.lanes, child: alternate.child, memoizedProps: alternate.memoizedProps, memoizedState: alternate.memoizedState, updateQueue: alternate.updateQueue, dependencies } = child);
  let tmp3 = null;
  if (null !== dependencies) {
    obj = { lanes: null, firstContext: null };
    ({ lanes: obj2[0], firstContext: obj2[1] } = dependencies);
    tmp3 = obj;
  }
  alternate.dependencies = tmp3;
  ({ sibling: alternate.sibling, index: alternate.index, ref: alternate.ref, refCleanup: alternate.refCleanup } = child);
  return alternate;
}
function createFiberFromTypeAndProps(type, key, pendingProps, arg3, mode, lanes) {
  if (typeof type === "function") {
    const prototype = type.prototype;
    let tmp24 = !prototype;
    if (prototype) {
      tmp24 = !prototype.isReactComponent;
    }
    let num = 0;
    let tmp2 = mode;
    let tmp3 = type;
    let ErrorResult = pendingProps;
    if (!tmp24) {
      num = 1;
      tmp2 = mode;
      tmp3 = type;
      ErrorResult = pendingProps;
    }
  } else {
    num = 5;
    tmp2 = mode;
    tmp3 = type;
    ErrorResult = pendingProps;
    if (typeof type !== "string") {
      if (closure_25 === type) {
        Object.create(FiberNode.prototype);
        let obj = { tag: 31, key, elementType: tmp26, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
        return obj;
      } else if (closure_15 === type) {
        Object.create(FiberNode.prototype);
        obj2 = { tag: 7, key, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: pendingProps.children, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
        return obj2;
      } else if (closure_16 === type) {
        num = 8;
        tmp2 = tmp17;
        tmp3 = type;
        ErrorResult = pendingProps;
        if (1 & (mode | 8)) {
          tmp2 = tmp17 | 16;
          num = 8;
          tmp3 = type;
          ErrorResult = pendingProps;
        }
      } else if (closure_17 === type) {
        Object.create(FiberNode.prototype);
        const obj4 = { tag: 12, key, elementType: tmp29, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: 2 | mode, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
        return obj4;
      } else if (closure_21 === type) {
        Object.create(FiberNode.prototype);
        const obj6 = { tag: 13, key, elementType: tmp30, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
        return obj6;
      } else if (closure_22 === type) {
        Object.create(FiberNode.prototype);
        obj = { tag: 19, key, elementType: tmp31, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
        return obj;
      } else {
        if (typeof type === "object") {
          if (null !== type) {
            const $$typeof = type.$$typeof;
            num = 10;
            tmp2 = mode;
            tmp3 = type;
            ErrorResult = pendingProps;
            if (closure_19 !== $$typeof) {
              num = 9;
              tmp2 = mode;
              tmp3 = type;
              ErrorResult = pendingProps;
              if (closure_18 !== $$typeof) {
                num = 11;
                tmp2 = mode;
                tmp3 = type;
                ErrorResult = pendingProps;
                if (closure_20 !== $$typeof) {
                  num = 14;
                  tmp2 = mode;
                  tmp3 = type;
                  ErrorResult = pendingProps;
                  if (closure_23 !== $$typeof) {
                    num = 16;
                    tmp2 = mode;
                    tmp3 = null;
                    ErrorResult = pendingProps;
                  }
                }
              }
            }
          }
        }
        let str = "null";
        if (null !== type) {
          str = typeof type;
        }
        const _HermesInternal = HermesInternal;
        ErrorResult = Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + str + ".");
        num = 29;
        tmp2 = mode;
        tmp3 = null;
      }
    }
  }
  Object.create(FiberNode.prototype);
  obj9 = { tag: num, key, elementType: type, type: tmp3, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: ErrorResult, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: tmp2, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
  return obj9;
}
function FiberRootNode(containerInfo, tag, arg2, identifierPrefix, onUncaughtError, onCaughtError, onRecoverableError, arg7, formState) {
  const obj = { tag, containerInfo, pendingChildren: null, current: null, pingCache: null, timeoutHandle: -1, cancelPendingCommit: null, context: null, pendingContext: null, next: null, callbackNode: null, callbackPriority: 0 };
  const items = [];
  let num = 0;
  do {
    let arr = items.push(-1);
    num = num + 1;
  } while (num < 31);
  obj.expirationTimes = items;
  obj.pendingLanes = 0;
  obj.suspendedLanes = 0;
  obj.pingedLanes = 0;
  obj.warmLanes = 0;
  obj.expiredLanes = 0;
  obj.errorRecoveryDisabledLanes = 0;
  obj.shellSuspendCounter = 0;
  obj.entangledLanes = 0;
  const items1 = [];
  let num2 = 0;
  do {
    arr = items1.push(0);
    num2 = num2 + 1;
  } while (num2 < 31);
  obj.entanglements = items1;
  const items2 = [];
  let num3 = 0;
  do {
    let arr1 = items2.push(null);
    num3 = num3 + 1;
  } while (num3 < 31);
  obj.hiddenUpdates = items2;
  obj.identifierPrefix = identifierPrefix;
  obj.onUncaughtError = onUncaughtError;
  obj.onCaughtError = onCaughtError;
  obj.onRecoverableError = onRecoverableError;
  obj.pooledCache = null;
  obj.pooledCacheLanes = 0;
  obj.formState = formState;
  obj.incompleteTransitions = new Map();
}
function findHostInstance(_reactInternals) {
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
            while (sibling3 !== tmp19) {
              if (sibling3 === _return6) {
                let tmp22 = _return5;
                let _return7 = _return5;
                if (_return5.alternate) {
                  let tmp25 = _return5;
                  let tmp24 = _return5;
                  let tmp23 = _return5;
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
                let tmp6 = alternate;
                if (tmp26 !== _return5) {
                  let _Error8 = Error;
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
              let tmp29 = _return5;
              let tmp28 = _return5;
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
              let _Error4 = Error;
              throw Error("Unable to find node on an unmounted component.");
            }
          }
          let _Error3 = Error;
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
                let _Error2 = Error;
                throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
              }
            }
          }
          _return6 = tmp13;
          tmp19 = tmp14;
          if (tmp14.alternate === tmp13) {
            continue;
          } else {
            let _Error7 = Error;
            throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
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
      let tmp = _reactInternals;
      let _return = _reactInternals;
      if (_reactInternals.alternate) {
        let tmp4 = _reactInternals;
        let tmp3 = _reactInternals;
        let tmp2 = _reactInternals;
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
    if (null === tmp33) {
      return null;
    } else {
      canonical = tmp33.stateNode;
      if (null != canonical.canonical) {
        if (null == canonical.canonical.publicInstance) {
          const obj = get_BatchedBridge;
          const nativeTag = canonical.canonical.nativeTag;
          const viewConfig = canonical.canonical.viewConfig;
          const internalInstanceHandle = canonical.canonical.internalInstanceHandle;
          const publicRootInstance = canonical.canonical.publicRootInstance;
          let tmp40 = null;
          if (null != publicRootInstance) {
            tmp40 = publicRootInstance;
          }
          canonical.canonical.publicInstance = obj.createPublicInstance(nativeTag, viewConfig, internalInstanceHandle, tmp40);
          canonical.canonical.publicRootInstance = null;
        }
        ({ canonical, publicInstance } = canonical);
      } else {
        if (null != canonical.containerInfo) {
          if (null != canonical.containerInfo.publicInstance) {
            publicInstance = canonical.containerInfo.publicInstance;
          }
        }
        publicInstance = null;
        if (null != canonical._nativeTag) {
          publicInstance = canonical;
        }
      }
    }
  }
}
function updateContainer(element, value, arg2, arg3) {
  const current = value.current;
  const tmp = requestUpdateLane(current);
  if (null === value.context) {
    value.context = closure_87;
  } else {
    value.pendingContext = closure_87;
  }
  const obj = { lane: tmp, tag: 0, payload: { element }, callback: null, next: null };
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
        shared.lanes = tmp | shared.lanes & tmp5.pendingLanes;
        let tmp7 = tmp5.entangledLanes | tmp6;
        tmp5.entangledLanes = tmp7;
        const entanglements = tmp5.entanglements;
        while (tmp7) {
          let diff = 31 - clz32Fallback(tmp7);
          let tmp10 = 1 << diff;
          if (tmp10 & tmp6 | entanglements[diff] & tmp6) {
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
  throw Error("The current renderer does not support hydration. This error is likely caused by a bug in React. Please file an issue.");
}
function shim() {
  throw Error("The current renderer does not support Resources. This error is likely caused by a bug in React. Please file an issue.");
}
function getPublicInstance(stateNode) {
  if (null != stateNode.canonical) {
    if (null == stateNode.canonical.publicInstance) {
      const obj = get_BatchedBridge;
      const nativeTag = stateNode.canonical.nativeTag;
      const viewConfig = stateNode.canonical.viewConfig;
      const internalInstanceHandle = stateNode.canonical.internalInstanceHandle;
      const publicRootInstance = stateNode.canonical.publicRootInstance;
      let tmp2 = null;
      if (null != publicRootInstance) {
        tmp2 = publicRootInstance;
      }
      stateNode.canonical.publicInstance = obj.createPublicInstance(nativeTag, viewConfig, internalInstanceHandle, tmp2);
      stateNode.canonical.publicRootInstance = null;
    }
    return stateNode.canonical.publicInstance;
  } else {
    if (null != stateNode.containerInfo) {
      if (null != stateNode.containerInfo.publicInstance) {
        let publicInstance = stateNode.containerInfo.publicInstance;
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
  const ReactFiberErrorDialog = get_BatchedBridge.ReactFiberErrorDialog;
  const obj = { errorBoundary: null, error, componentStack: null };
  let str = "";
  if (null != componentStack.componentStack) {
    str = componentStack.componentStack;
  }
  obj[2] = str;
  if (false !== ReactFiberErrorDialog.showErrorDialog(obj)) {
    callback2(error);
  }
}
function nativeOnCaughtError(error, errorBoundary) {
  const ReactFiberErrorDialog = get_BatchedBridge.ReactFiberErrorDialog;
  const obj = { errorBoundary: errorBoundary.errorBoundary, error, componentStack: null };
  let str = "";
  if (null != errorBoundary.componentStack) {
    str = errorBoundary.componentStack;
  }
  obj[2] = str;
  if (false !== ReactFiberErrorDialog.showErrorDialog(obj)) {
    const _console = console;
    console.error(error);
  }
}
function nativeOnDefaultTransitionIndicator() {

}
const __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = noop2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
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
    for (const key10006 in tmp) {
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
  }
};
assign(SyntheticEvent.prototype, obj);
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
  isTrusted: null
};
SyntheticEvent.extend = function(arg0) {
  class E {
    constructor() {
      return;
    }
  }
  class Class {
    constructor() {
      self = this;
      tmp = self;
      apply = self.apply;
      if (typeof apply === "unknown") {
        tmp2 = tmp;
        tmp3 = self;
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        tmp5 = arguments;
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
  }
  let self = this;
  E.prototype = this.prototype;
  const obj = Object.create(E.prototype);
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
(function addEventPoolingTo(SyntheticEvent) {
  SyntheticEvent.getPooled = createOrGetPooledEvent;
  SyntheticEvent.eventPool = [];
  SyntheticEvent.release = releasePooledEvent;
})(SyntheticEvent);
obj = {
  touchHistory() {
    return null;
  }
};
let closure_41 = SyntheticEvent.extend(obj);
let items = ["topTouchStart"];
let items1 = ["topTouchMove"];
let items2 = ["topTouchCancel", "topTouchEnd"];
let items3 = [];
let closure_49 = {
  instrument(arg0) {
    closure_48 = arg0;
  },
  recordTouchTrack(arg0, changedTouches) {
    if (null != callback) {
      callback(arg0, changedTouches);
    }
    if ("topTouchMove" === arg0) {
      changedTouches = changedTouches.changedTouches;
      const item = changedTouches.forEach(recordTouchMove);
    } else if ("topTouchStart" === arg0) {
      const changedTouches1 = changedTouches.changedTouches;
      const item1 = changedTouches1.forEach(recordTouchStart);
      obj1.numberActiveTouches = changedTouches.touches.length;
      if (1 === obj1.numberActiveTouches) {
        tmp11.indexOfSingleActiveTouch = changedTouches.touches[0].identifier;
      }
    } else if ("topTouchEnd" === arg0) {
      const changedTouches2 = changedTouches.changedTouches;
      const item2 = changedTouches2.forEach(recordTouchEnd);
      obj1.numberActiveTouches = changedTouches.touches.length;
      if (1 === obj1.numberActiveTouches) {
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
          obj1.indexOfSingleActiveTouch = num2;
        }
      }
    }
  },
  touchHistory: { touchBank: items3, numberActiveTouches: 0, indexOfSingleActiveTouch: -1, mostRecentTimeStamp: 0 }
};
let c50 = null;
let c51 = 0;
let obj3 = {
  _getResponder() {
    return c50;
  },
  eventTypes: { startShouldSetResponder: { phasedRegistrationNames: { bubbled: "onStartShouldSetResponder", captured: "onStartShouldSetResponderCapture" }, dependencies: items }, scrollShouldSetResponder: { phasedRegistrationNames: { bubbled: "onScrollShouldSetResponder", captured: "onScrollShouldSetResponderCapture" }, dependencies: ["topScroll"] }, selectionChangeShouldSetResponder: { phasedRegistrationNames: { bubbled: "onSelectionChangeShouldSetResponder", captured: "onSelectionChangeShouldSetResponderCapture" }, dependencies: ["topSelectionChange"] }, moveShouldSetResponder: { phasedRegistrationNames: { bubbled: "onMoveShouldSetResponder", captured: "onMoveShouldSetResponderCapture" }, dependencies: items1 }, responderStart: { registrationName: "onResponderStart", dependencies: items }, responderMove: { registrationName: "onResponderMove", dependencies: items1 }, responderEnd: { registrationName: "onResponderEnd", dependencies: items2 }, responderRelease: { registrationName: "onResponderRelease", dependencies: items2 }, responderTerminationRequest: { registrationName: "onResponderTerminationRequest", dependencies: [] }, responderGrant: { registrationName: "onResponderGrant", dependencies: [] }, responderReject: { registrationName: "onResponderReject", dependencies: [] }, responderTerminate: { registrationName: "onResponderTerminate", dependencies: [] } },
  extractEvents(arg0, arg1, responderIgnoreScroll) {
    let _return;
    let _return1;
    let diff;
    let diff1;
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
      if ("topScroll" !== arg0) {
        if (0 >= closure_51) {
          if (!tmp) {
            tmp5 = null;
          }
        }
      }
      if (tmp) {
        let scrollShouldSetResponder = store.startShouldSetResponder;
      } else if ("topTouchMove" === arg0) {
        scrollShouldSetResponder = store.moveShouldSetResponder;
      } else if ("topSelectionChange" === arg0) {
        scrollShouldSetResponder = store.selectionChangeShouldSetResponder;
      } else {
        scrollShouldSetResponder = store.scrollShouldSetResponder;
      }
      let tmp12 = arg1;
      if (c50) {
        let tmp13 = tmp11;
        let num7 = 0;
        let num8 = 0;
        if (tmp11) {
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
      const pooled = store.getPooled(scrollShouldSetResponder, tmp12, responderIgnoreScroll, arg3);
      pooled.touchHistory = closure_49.touchHistory;
      const tmp50 = tmp12 === c50 ? accumulateTwoPhaseDispatchesSingleSkipTarget : accumulateTwoPhaseDispatchesSingle$1;
      const _Array = Array;
      if (Array.isArray(pooled)) {
        const item = pooled.forEach(tmp50, undefined);
      } else if (pooled) {
        const call = tmp50.call;
        if (typeof call === "unknown") {
          tmp50(pooled);
        } else {
          call(undefined, pooled);
        }
      }
      ({ _dispatchListeners, _dispatchInstances } = pooled);
      if (isArray(_dispatchListeners)) {
        let tmp55 = null;
        if (0 < _dispatchListeners.length) {
          let num13 = 0;
          tmp55 = null;
          if (!pooled.isPropagationStopped()) {
            while (!_dispatchListeners[num13](pooled, _dispatchInstances[num13])) {
              let sum = num13 + 1;
              tmp55 = null;
              if (sum < _dispatchListeners.length) {
                num13 = sum;
                tmp55 = null;
              }
            }
            tmp55 = _dispatchInstances[num13];
          }
        }
      } else {
        tmp55 = null;
        if (_dispatchListeners) {
          tmp55 = null;
          if (_dispatchListeners(pooled, _dispatchInstances)) {
            tmp55 = _dispatchInstances;
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
      if (tmp55) {
        tmp5 = null;
        if (tmp55 !== c50) {
          const pooled1 = store.getPooled(store.responderGrant, tmp55, responderIgnoreScroll, arg3);
          pooled1.touchHistory = closure_49.touchHistory;
          const _Array7 = Array;
          if (Array.isArray(pooled1)) {
            const item1 = pooled1.forEach(accumulateDirectDispatchesSingle$1, undefined);
          } else if (pooled1) {
            const call2 = accumulateDirectDispatchesSingle$1.call;
            if (typeof call2 === "unknown") {
              accumulateDirectDispatchesSingle$1(pooled1);
            } else {
              call2(undefined, pooled1);
            }
          }
          ({ _dispatchListeners: _dispatchListeners2, _dispatchInstances: _dispatchInstances2 } = pooled1);
          if (isArray(_dispatchListeners2)) {
            const _Error5 = Error;
            throw Error("Invalid `event`.");
          } else {
            let tmp63 = null;
            if (_dispatchListeners2) {
              tmp63 = N(_dispatchInstances2);
            }
            pooled1.currentTarget = tmp63;
            let _dispatchListeners2Result = null;
            if (_dispatchListeners2) {
              _dispatchListeners2Result = _dispatchListeners2(pooled1);
            }
            pooled1.currentTarget = null;
            pooled1._dispatchListeners = null;
            pooled1._dispatchInstances = null;
            if (c50) {
              const pooled2 = store.getPooled(store.responderTerminationRequest, c50, responderIgnoreScroll, arg3);
              pooled2.touchHistory = closure_49.touchHistory;
              const _Array2 = Array;
              if (Array.isArray(pooled2)) {
                const item2 = pooled2.forEach(accumulateDirectDispatchesSingle$1, undefined);
              } else if (pooled2) {
                const call3 = accumulateDirectDispatchesSingle$1.call;
                if (typeof call3 === "unknown") {
                  accumulateDirectDispatchesSingle$1(pooled2);
                } else {
                  call3(undefined, pooled2);
                }
              }
              const _dispatchListeners3 = pooled2._dispatchListeners;
              let tmp75 = !_dispatchListeners3;
              if (_dispatchListeners3) {
                ({ _dispatchListeners: _dispatchListeners4, _dispatchInstances: _dispatchInstances3 } = pooled2);
                if (isArray(_dispatchListeners4)) {
                  const _Error4 = Error;
                  throw Error("Invalid `event`.");
                } else {
                  let tmp76 = null;
                  if (_dispatchListeners4) {
                    tmp76 = N(_dispatchInstances3);
                  }
                  pooled2.currentTarget = tmp76;
                  let _dispatchListeners4Result = null;
                  if (_dispatchListeners4) {
                    _dispatchListeners4Result = _dispatchListeners4(pooled2);
                  }
                  pooled2.currentTarget = null;
                  pooled2._dispatchListeners = null;
                  pooled2._dispatchInstances = null;
                  tmp75 = _dispatchListeners4Result;
                }
              }
              if (!pooled2.isPersistent()) {
                const constructor2 = pooled2.constructor;
                constructor2.release(pooled2);
              }
              const getPooled = store.getPooled;
              if (tmp75) {
                const pooled3 = getPooled(store.responderTerminate, c50, responderIgnoreScroll, arg3);
                pooled3.touchHistory = closure_49.touchHistory;
                const _Array4 = Array;
                if (Array.isArray(pooled3)) {
                  const item3 = pooled3.forEach(accumulateDirectDispatchesSingle$1, undefined);
                } else if (pooled3) {
                  const call5 = accumulateDirectDispatchesSingle$1.call;
                  if (typeof call5 === "unknown") {
                    accumulateDirectDispatchesSingle$1(pooled3);
                  } else {
                    call5(undefined, pooled3);
                  }
                }
                const items = [pooled1, pooled3];
                c50 = tmp55;
                tmp5 = items;
                if (null !== obj3.GlobalResponderHandler) {
                  obj3.GlobalResponderHandler.onChange(tmp92, tmp55, tmp66);
                  tmp5 = items;
                  const GlobalResponderHandler = obj3.GlobalResponderHandler;
                }
              } else {
                const pooled4 = getPooled(store.responderReject, tmp55, responderIgnoreScroll, arg3);
                pooled4.touchHistory = closure_49.touchHistory;
                const _Array3 = Array;
                if (Array.isArray(pooled4)) {
                  const item4 = pooled4.forEach(accumulateDirectDispatchesSingle$1, undefined);
                } else if (pooled4) {
                  const call4 = accumulateDirectDispatchesSingle$1.call;
                  if (typeof call4 === "unknown") {
                    accumulateDirectDispatchesSingle$1(pooled4);
                  } else {
                    call4(undefined, pooled4);
                  }
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
              c50 = tmp55;
              tmp5 = pooled1;
              if (null !== obj3.GlobalResponderHandler) {
                obj3.GlobalResponderHandler.onChange(tmp68, tmp55, tmp66);
                tmp5 = pooled1;
                const GlobalResponderHandler3 = obj3.GlobalResponderHandler;
              }
            }
          }
        }
      }
    }
    let tmp94 = c50;
    let tmp95 = c50;
    if (c50) {
      tmp95 = tmp;
    }
    let tmp96 = tmp94;
    if (tmp94) {
      tmp96 = "topTouchMove" === arg0;
    }
    if (tmp94) {
      let tmp97 = "topTouchEnd" === arg0;
      if (!tmp97) {
        tmp97 = "topTouchCancel" === arg0;
      }
      tmp94 = tmp97;
    }
    if (tmp95) {
      let responderStart = store.responderStart;
    } else if (tmp96) {
      responderStart = store.responderMove;
    } else {
      responderStart = null;
      if (tmp94) {
        responderStart = store.responderEnd;
      }
    }
    let obj = tmp5;
    if (responderStart) {
      const pooled5 = store.getPooled(responderStart, c50, responderIgnoreScroll, arg3);
      pooled5.touchHistory = closure_49.touchHistory;
      const _Array5 = Array;
      if (Array.isArray(pooled5)) {
        const item5 = pooled5.forEach(accumulateDirectDispatchesSingle$1, undefined);
      } else if (pooled5) {
        const call6 = accumulateDirectDispatchesSingle$1.call;
        if (typeof call6 === "unknown") {
          accumulateDirectDispatchesSingle$1(pooled5);
        } else {
          call6(undefined, pooled5);
        }
      }
      if (null == pooled5) {
        const _Error3 = Error;
        throw Error("Accumulated items must not be null or undefined.");
      } else if (null == tmp5) {
        obj = pooled5;
      } else if (isArray(tmp5)) {
        let combined = tmp5.concat(pooled5);
      } else if (isArray(pooled5)) {
        const items1 = [tmp5];
        combined = items1.concat(pooled5);
      } else {
        combined = [tmp5, pooled5];
      }
    }
    let flag2 = c50;
    let tmp115 = c50;
    if (c50) {
      tmp115 = "topTouchCancel" === arg0;
    }
    if (flag2) {
      flag2 = !tmp115;
    }
    if (flag2) {
      let tmp116 = "topTouchEnd" === arg0;
      if (!tmp116) {
        tmp116 = "topTouchCancel" === arg0;
      }
      flag2 = tmp116;
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
                  if (typeof A !== "function") {
                    let throwTypeErrorResult = HermesBuiltin.throwTypeError();
                  }
                  let internalInstanceHandle = target;
                  if (null != target.canonical) {
                    internalInstanceHandle = target;
                    if (null != target.canonical.internalInstanceHandle) {
                      internalInstanceHandle = target.canonical.internalInstanceHandle;
                    }
                  }
                  let tmp118 = c50;
                  let flag3 = false;
                  if (internalInstanceHandle) {
                    let tmp119 = internalInstanceHandle;
                    flag3 = true;
                    while (tmp118 !== internalInstanceHandle) {
                      flag3 = true;
                      if (tmp118 === tmp119.alternate) {
                        break;
                      } else {
                        let _return6 = tmp119.return;
                        while (_return6) {
                          tmp119 = _return6;
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
    if (tmp115) {
      let responderTerminate = store.responderTerminate;
    } else {
      responderTerminate = null;
      if (flag2) {
        responderTerminate = store.responderRelease;
      }
    }
    let tmp125 = obj;
    if (responderTerminate) {
      const pooled6 = store.getPooled(responderTerminate, c50, responderIgnoreScroll, arg3);
      pooled6.touchHistory = closure_49.touchHistory;
      const _Array6 = Array;
      if (Array.isArray(pooled6)) {
        const item6 = pooled6.forEach(accumulateDirectDispatchesSingle$1, undefined);
      } else if (pooled6) {
        const call7 = accumulateDirectDispatchesSingle$1.call;
        if (typeof call7 === "unknown") {
          accumulateDirectDispatchesSingle$1(pooled6);
        } else {
          call7(undefined, pooled6);
        }
      }
      if (null == pooled6) {
        const _Error2 = Error;
        throw Error("Accumulated items must not be null or undefined.");
      } else if (null == obj) {
        c50 = null;
        tmp125 = pooled6;
        if (null !== obj3.GlobalResponderHandler) {
          obj3.GlobalResponderHandler.onChange(tmp139, null, undefined);
          tmp125 = pooled6;
          const GlobalResponderHandler2 = obj3.GlobalResponderHandler;
        }
      } else if (isArray(obj)) {
        let combined1 = obj.concat(pooled6);
      } else if (isArray(pooled6)) {
        const items2 = [obj];
        combined1 = items2.concat(pooled6);
      } else {
        combined1 = [obj, pooled6];
      }
    }
    return tmp125;
  },
  GlobalResponderHandler: null,
  injection: obj4
};
let obj5 = {};
let closure_60 = [];
let closure_61 = {};
let closure_62 = {};
const customBubblingEventTypes = get_BatchedBridge.ReactNativeViewConfigRegistry.customBubblingEventTypes;
const customDirectEventTypes = get_BatchedBridge.ReactNativeViewConfigRegistry.customDirectEventTypes;
let call = slice.call;
let items4 = ["ResponderEventPlugin", "ReactNativeBridgeEventPlugin"];
function recomputePluginOrdering() {
  if (closure_58) {
    for (const key10004 in obj5) {
      let tmp21 = obj5[key10004];
      let index = closure_58.indexOf(key10004);
      if (-1 >= index) {
        let _Error6 = Error;
        throw Error("EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `" + key10004 + "`.");
      } else {
        if (table[index]) {
          continue;
        } else if (tmp21.extractEvents) {
          tmp24[index] = tmp21;
          let eventTypes = tmp21.eventTypes;
          let keys = Object.keys();
          if (keys === undefined) {
            continue;
          } else {
            let tmp7 = keys[tmp2];
            while (tmp7 !== undefined) {
              let tmp26 = eventTypes[tmp7];
              if (closure_61.hasOwnProperty(tmp7)) {
                let _Error5 = Error;
                throw Error("EventPluginRegistry: More than one plugin attempted to publish the same event name, `" + tmp7 + "`.");
              } else {
                closure_61[tmp7] = tmp26;
                let phasedRegistrationNames = tmp26.phasedRegistrationNames;
                if (phasedRegistrationNames) {
                  let flag = true;
                  let keys1 = Object.keys();
                  if (keys1 !== undefined) {
                    flag = true;
                    let tmp12 = keys1[tmp];
                    while (tmp12 !== undefined) {
                      if (!phasedRegistrationNames.hasOwnProperty(tmp12)) {
                        continue;
                      } else {
                        let tmp13 = phasedRegistrationNames[tmp12];
                        if (dependencyMap2[tmp13]) {
                          let _Error3 = Error;
                          throw Error("EventPluginRegistry: More than one plugin attempted to publish the same registration name, `" + tmp13 + "`.");
                        } else {
                          tmp14[tmp13] = tmp21;
                          continue;
                        }
                      }
                      continue;
                    }
                  }
                } else {
                  flag = false;
                  if (tmp26.registrationName) {
                    let registrationName = tmp26.registrationName;
                    if (dependencyMap2[registrationName]) {
                      let _Error2 = Error;
                      throw Error("EventPluginRegistry: More than one plugin attempted to publish the same registration name, `" + registrationName + "`.");
                    } else {
                      tmp8[registrationName] = tmp21;
                      flag = true;
                    }
                  }
                }
                if (flag) {
                  continue;
                } else {
                  let _Error4 = Error;
                  throw Error("EventPluginRegistry: Failed to publish event `" + tmp7 + "` for plugin `" + key10004 + "`.");
                }
              }
            }
          }
          continue;
        } else {
          let _Error = Error;
          throw Error("EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `" + key10004 + "` does not.");
        }
        continue;
      }
    }
  }
}
let closure_58 = typeof call === "unknown" ? slice() : call(items4);
let result = recomputePluginOrdering();
let obj6 = { ResponderEventPlugin: obj3, ReactNativeBridgeEventPlugin: obj7 };
let flag = false;
let flag2 = false;
let keys = Object.keys();
if (keys !== undefined) {
  flag2 = flag;
  while (keys[tmp] !== undefined) {
    if (!obj6.hasOwnProperty(tmp13)) {
      continue;
    } else {
      let tmp14 = obj6[tmp13];
      if (!obj5.hasOwnProperty(tmp13)) {
        if (obj5[tmp13]) {
          let _Error = Error;
          throw Error("EventPluginRegistry: Cannot inject two different event plugins using the same name, `" + tmp13 + "`.");
        } else {
          obj5[tmp13] = tmp14;
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
  clz32Fallback = function clz32Fallback(c291) {
    let num = 32;
    if (0 !== c291 >>> 0) {
      num = 31 - (log(tmp) / LN2 | 0) | 0;
    }
    return num;
  };
}
let c78 = 256;
let c79 = 262144;
let c80 = 4194304;
let closure_85 = [];
let c86 = -1;
let closure_87 = {};
if (typeof Object.is === "function") {
  let _Object = Object;
} else {
  is = function is(arg0, arg1) {
    let tmp = arg0 === arg1;
    if (tmp) {
      let tmp2 = 0 !== arg0;
      if (!tmp2) {
        tmp2 = 1 / arg0 === 1 / arg1;
      }
      tmp = tmp2;
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
let closure_89 = typeof reportError === "function" ? reportError : ((message) => {
  if (typeof window === "object") {
    const _window3 = window;
    if (typeof window.ErrorEvent === "function") {
      const _window = window;
      if (typeof message === "object") {
        if (null !== message) {
          if (typeof message.message === "string") {
            const _String2 = String;
            let StringResult = String(message.message);
          }
          const obj = { bubbles: true, cancelable: true, message: null, error: null };
          obj[2] = StringResult;
          obj[3] = message;
          tmp = new tmp("error", obj);
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
});
const weakMap = new WeakMap();
let closure_93 = createCursor(null);
let closure_94 = createCursor(null);
let closure_95 = createCursor(null);
let closure_96 = createCursor(null);
let c100 = null;
let closure_101 = createCursor(null);
let c102 = null;
let c103 = null;
function readContext(_currentValue2) {
  _currentValue2 = _currentValue2._currentValue2;
  let obj = { context: _currentValue2, memoizedValue: _currentValue2, next: null };
  if (null === obj) {
    if (null === _null) {
      const _Error = Error;
      throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    } else {
      obj = { lanes: 0, firstContext: null };
      obj[1] = obj;
      _null.dependencies = obj;
      _null.flags = _null.flags | 524288;
    }
  } else {
    tmp2.next = obj;
  }
  return _currentValue2;
}
function createChildReconciler(arg0) {
  closure_0 = arg0;
  function updateTextNode(mode, tag, pendingProps, lanes) {
    if (null !== tag) {
      if (6 === tag.tag) {
        let tmp2 = callback(tag, pendingProps);
        tmp2.index = 0;
        tmp2.sibling = null;
        tmp2.return = mode;
      }
      return tmp2;
    }
    Object.create(ctor.prototype);
    const obj = { tag: 6, key: null, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: mode.mode, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null, lanes, return: mode };
    tmp2 = obj;
  }
  function updateElement(dependencies, elementType, type, lanes) {
    type = type.type;
    if (type === closure_1_15) {
      let tmp5 = updateFragment(dependencies, elementType, type.props.children, lanes, type.key);
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
  function updatePortal(dependencies, tag, children, lanes) {
    implementation = children;
    if (null !== tag) {
      if (4 === tag.tag) {
        if (tag.stateNode.containerInfo === implementation.containerInfo) {
          if (tag.stateNode.implementation === implementation.implementation) {
            const tmp3 = callback(tag, implementation.children || []);
            tmp3.index = 0;
            tmp3.sibling = null;
            tmp3.return = dependencies;
            return tmp3;
          }
        }
      }
    }
    containerInfo = dependencies.mode;
    Object.create(ctor.prototype);
    const obj = { tag: 4, key: implementation.key, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: null !== implementation.children ? implementation.children : [], memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: containerInfo, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
    ({ containerInfo, implementation } = implementation);
    obj.stateNode = { containerInfo, pendingChildren: null, implementation };
    obj.return = dependencies;
  }
  function updateFragment(children, tag, children2, lanes, key) {
    if (null !== tag) {
      if (7 === tag.tag) {
        let tmp2 = callback(tag, children2);
        tmp2.index = 0;
        tmp2.sibling = null;
        tmp2.return = children;
      }
      return tmp2;
    }
    Object.create(ctor.prototype);
    const obj = { tag: 7, key, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: children2, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: children.mode, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null, lanes, return: children };
    tmp2 = obj;
  }
  function createChild(BaseFramework, children, lanes) {
    if (typeof children !== "string") {
      if (typeof children !== "number") {
        if (typeof children !== "bigint") {
          if (typeof children === "object") {
            if (null !== children) {
              const $$typeof = children.$$typeof;
              if (closure_1_13 === $$typeof) {
                const tmp25 = createFiberFromTypeAndProps(children.type, children.key, children.props, 0, BaseFramework.mode, lanes);
                let tmp26 = null;
                if (undefined !== children.props.ref) {
                  tmp26 = ref;
                }
                tmp25.ref = tmp26;
                tmp25.return = BaseFramework;
                return tmp25;
              } else if (closure_1_14 === $$typeof) {
                Object.create(FiberNode.prototype);
                const obj = { tag: 4, key: children.key, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: null !== children.children ? children.children : [], memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: BaseFramework.mode, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
                ({ containerInfo: obj6[0], implementation: obj6[2] } = children);
                obj.stateNode = { containerInfo: null, pendingChildren: null, implementation: null };
                obj.return = BaseFramework;
                return obj;
              } else if (closure_1_24 === $$typeof) {
                return createChild(BaseFramework, resolveLazy(children), lanes);
              } else {
                if (!updateFragment(children)) {
                  let tmp3 = null;
                  if (null !== children) {
                    tmp3 = null;
                    if (typeof children === "object") {
                      prop = iterator;
                      if (iterator) {
                        prop = children[iterator];
                      }
                      if (!prop) {
                        prop = children[Symbol.iterator];
                      }
                      let tmp5 = null;
                      if (typeof prop === "function") {
                        tmp5 = prop;
                      }
                      tmp3 = tmp5;
                    }
                  }
                  if (!tmp3) {
                    if (typeof children.then === "function") {
                      c139 = c139 + 1;
                      let tmp14 = c138;
                      if (null === c138) {
                        const items = [];
                        c138 = items;
                        tmp14 = items;
                      }
                      return createChild(BaseFramework, trackUsedThenable(tmp14, children, c139), lanes);
                    } else if (children.$$typeof === closure_1_19) {
                      if (null === closure_102) {
                        closure_102 = BaseFramework;
                        obj4 = null;
                        const dependencies = BaseFramework.dependencies;
                        if (null !== dependencies) {
                          dependencies.firstContext = null;
                        }
                      }
                      const _currentValue2 = children._currentValue2;
                      obj2 = { context: null, memoizedValue: null, next: null };
                      obj2[0] = children;
                      obj2[1] = _currentValue2;
                      if (null === obj4) {
                        if (null === BaseFramework) {
                          const _Error2 = Error;
                          throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
                        } else {
                          obj4 = obj2;
                          obj3 = { lanes: 0, firstContext: null };
                          obj3[1] = obj2;
                          BaseFramework.dependencies = obj3;
                          BaseFramework.flags = BaseFramework.flags | 524288;
                        }
                      } else {
                        tmp10.next = obj2;
                        obj4 = obj2;
                      }
                      return createChild(BaseFramework, _currentValue2, lanes);
                    } else if (children.$$typeof === closure_1_12) {
                      const _Error = Error;
                      throw Error("A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the \"react\" package is used.\n- A library pre-bundled an old copy of \"react\" or \"react/jsx-runtime\".\n- A compiler tries to \"inline\" JSX instead of using the runtime.");
                    } else {
                      const _Object2 = Object;
                      const call = toString.call;
                      let text = typeof call === "unknown" ? toString() : call(children);
                      if ("[object Object]" === text) {
                        const _Object = Object;
                        const keys = Object.keys(children);
                        text = `${"object with keys {" + obj.join(", ")}}`;
                      }
                      throw Error("Objects are not valid as a React child (found: " + text + "). If you meant to render a collection of children, use an array instead.");
                    }
                  }
                }
                obj4 = Object.create(FiberNode.prototype);
                obj5 = { tag: 7, key: null, elementType: null, type: null, stateNode: null, return: BaseFramework, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: children, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: BaseFramework.mode, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
                return obj5;
              }
            }
          }
          return null;
        }
      }
    }
    const text1 = `${children}`;
    const obj6 = Object.create(FiberNode.prototype);
    return { tag: 6, key: null, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: text1, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: BaseFramework.mode, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null, lanes, return: BaseFramework };
  }
  function updateSlot(dependencies, key, children, lanes) {
    key = null;
    if (null !== key) {
      key = key.key;
    }
    if (typeof children !== "string") {
      if (typeof children !== "number") {
        if (typeof children !== "bigint") {
          if (typeof children === "object") {
            if (null !== children) {
              const $$typeof = children.$$typeof;
              if (closure_1_13 === $$typeof) {
                let tmp41 = null;
                if (children.key === key) {
                  tmp41 = updateElement(dependencies, key, children, lanes);
                }
                return tmp41;
              } else if (closure_1_14 === $$typeof) {
                let tmp35 = null;
                if (children.key === key) {
                  tmp35 = updatePortal(dependencies, key, children, lanes);
                }
                return tmp35;
              } else if (closure_1_24 === $$typeof) {
                return updateSlot(dependencies, key, resolveLazy(children), lanes);
              } else {
                if (!updateFragment(children)) {
                  let tmp3 = null;
                  if (null !== children) {
                    tmp3 = null;
                    if (typeof children === "object") {
                      prop = iterator;
                      if (iterator) {
                        prop = children[iterator];
                      }
                      if (!prop) {
                        prop = children[Symbol.iterator];
                      }
                      let tmp5 = null;
                      if (typeof prop === "function") {
                        tmp5 = prop;
                      }
                      tmp3 = tmp5;
                    }
                  }
                  if (!tmp3) {
                    if (typeof children.then === "function") {
                      c139 = c139 + 1;
                      let tmp18 = c138;
                      if (null === c138) {
                        const items = [];
                        c138 = items;
                        tmp18 = items;
                      }
                      return updateSlot(dependencies, key, trackUsedThenable(tmp18, children, c139), lanes);
                    } else if (children.$$typeof === closure_1_19) {
                      if (null === closure_102) {
                        closure_102 = dependencies;
                        obj4 = null;
                        dependencies = dependencies.dependencies;
                        if (null !== dependencies) {
                          dependencies.firstContext = null;
                        }
                      }
                      const _currentValue2 = children._currentValue2;
                      let obj = { context: null, memoizedValue: null, next: null };
                      obj[0] = children;
                      obj[1] = _currentValue2;
                      if (null === obj4) {
                        if (null === dependencies) {
                          const _Error2 = Error;
                          throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
                        } else {
                          obj4 = obj;
                          obj = { lanes: 0, firstContext: null };
                          obj[1] = obj;
                          dependencies.dependencies = obj;
                          dependencies.flags = dependencies.flags | 524288;
                        }
                      } else {
                        tmp10.next = obj;
                        obj4 = obj;
                      }
                      return updateSlot(dependencies, key, _currentValue2, lanes);
                    } else if (children.$$typeof === closure_1_12) {
                      const _Error = Error;
                      throw Error("A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the \"react\" package is used.\n- A library pre-bundled an old copy of \"react\" or \"react/jsx-runtime\".\n- A compiler tries to \"inline\" JSX instead of using the runtime.");
                    } else {
                      const _Object2 = Object;
                      const call = toString.call;
                      let text = typeof call === "unknown" ? toString() : call(children);
                      if ("[object Object]" === text) {
                        const _Object = Object;
                        const keys = Object.keys(children);
                        text = `${"object with keys {" + obj.join(", ")}}`;
                      }
                      throw Error("Objects are not valid as a React child (found: " + text + "). If you meant to render a collection of children, use an array instead.");
                    }
                  }
                }
                let tmp23 = null;
                if (null === key) {
                  tmp23 = updateFragment(dependencies, key, children, lanes, null);
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
      tmp47 = updateTextNode(dependencies, key, "" + children, lanes);
    }
    return tmp47;
  }
  function updateFromMap(map, dependencies, sum1, children, lanes) {
    if (typeof children !== "string") {
      if (typeof children !== "number") {
        if (typeof children !== "bigint") {
          if (typeof children === "object") {
            if (null !== children) {
              const $$typeof = children.$$typeof;
              if (closure_1_13 === $$typeof) {
                let key2 = sum1;
                if (null !== children.key) {
                  key2 = children.key;
                }
                const tmp45 = map.get(key2) || null;
                return updateElement(dependencies, tmp45, children, lanes);
              } else if (closure_1_14 === $$typeof) {
                let key = sum1;
                if (null !== children.key) {
                  key = children.key;
                }
                const tmp39 = map.get(key) || null;
                return updatePortal(dependencies, tmp39, children, lanes);
              } else if (closure_1_24 === $$typeof) {
                return updateFromMap(map, dependencies, sum1, resolveLazy(children), lanes);
              } else {
                if (!updateFragment(children)) {
                  let tmp3 = null;
                  if (null !== children) {
                    tmp3 = null;
                    if (typeof children === "object") {
                      prop = iterator;
                      if (iterator) {
                        prop = children[iterator];
                      }
                      if (!prop) {
                        prop = children[Symbol.iterator];
                      }
                      let tmp5 = null;
                      if (typeof prop === "function") {
                        tmp5 = prop;
                      }
                      tmp3 = tmp5;
                    }
                  }
                  if (!tmp3) {
                    if (typeof children.then === "function") {
                      c139 = c139 + 1;
                      let tmp19 = c138;
                      if (null === c138) {
                        const items = [];
                        c138 = items;
                        tmp19 = items;
                      }
                      return updateFromMap(map, dependencies, sum1, trackUsedThenable(tmp19, children, c139), lanes);
                    } else if (children.$$typeof === closure_1_19) {
                      if (null === closure_102) {
                        closure_102 = dependencies;
                        obj4 = null;
                        dependencies = dependencies.dependencies;
                        if (null !== dependencies) {
                          dependencies.firstContext = null;
                        }
                      }
                      const _currentValue2 = children._currentValue2;
                      let obj = { context: null, memoizedValue: null, next: null };
                      obj[0] = children;
                      obj[1] = _currentValue2;
                      if (null === obj4) {
                        if (null === dependencies) {
                          const _Error2 = Error;
                          throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
                        } else {
                          obj4 = obj;
                          obj = { lanes: 0, firstContext: null };
                          obj[1] = obj;
                          dependencies.dependencies = obj;
                          dependencies.flags = dependencies.flags | 524288;
                        }
                      } else {
                        tmp10.next = obj;
                        obj4 = obj;
                      }
                      return updateFromMap(map, dependencies, sum1, _currentValue2, lanes);
                    } else if (children.$$typeof === closure_1_12) {
                      const _Error = Error;
                      throw Error("A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the \"react\" package is used.\n- A library pre-bundled an old copy of \"react\" or \"react/jsx-runtime\".\n- A compiler tries to \"inline\" JSX instead of using the runtime.");
                    } else {
                      const _Object2 = Object;
                      const call = toString.call;
                      let text = typeof call === "unknown" ? toString() : call(children);
                      if ("[object Object]" === text) {
                        const _Object = Object;
                        const keys = Object.keys(children);
                        text = `${"object with keys {" + obj.join(", ")}}`;
                      }
                      throw Error("Objects are not valid as a React child (found: " + text + "). If you meant to render a collection of children, use an array instead.");
                    }
                  }
                }
                const tmp26 = map.get(sum1) || null;
                return updateFragment(dependencies, tmp26, children, lanes, null);
              }
            }
          }
          return null;
        }
      }
    }
    return updateTextNode(dependencies, map.get(sum1) || null, "" + children, lanes);
  }
  function reconcileChildFibersImpl(deletions, sibling, type, lanes) {
    let arr;
    let iter7;
    let sibling5;
    let sibling9;
    let tmp130;
    let tmp159;
    let tmp54;
    let tmp85;
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
    let children = type;
    if (tmp) {
      children = type.props.children;
    }
    if (typeof children === "object") {
      if (null !== children) {
        const $$typeof = children.$$typeof;
        if (closure_1_13 === $$typeof) {
          if (null !== sibling) {
            while (sibling.key !== tmp219) {
              if (closure_0) {
                deletions = deletions.deletions;
                if (null === deletions) {
                  let items = [sibling];
                  deletions.deletions = items;
                  deletions.flags = deletions.flags | 16;
                } else {
                  arr = deletions.push(sibling);
                }
              }
              sibling = sibling.sibling;
            }
            type = children.type;
            if (type === closure_1_15) {
              if (7 === sibling.tag) {
                let sibling16 = sibling.sibling;
                if (closure_0) {
                  if (null !== sibling16) {
                    do {
                      if (closure_0) {
                        let deletions1 = deletions.deletions;
                        if (null === deletions1) {
                          let items1 = [sibling16];
                          deletions.deletions = items1;
                          deletions.flags = deletions.flags | 16;
                        } else {
                          arr = deletions1.push(sibling16);
                        }
                      }
                      sibling16 = sibling16.sibling;
                    } while (null !== sibling16);
                  }
                }
                const tmp247 = createWorkInProgress(sibling, children.props.children);
                tmp247.index = 0;
                tmp247.sibling = null;
                tmp247.return = deletions;
                let tmp229 = tmp247;
              }
              let tmp248 = closure_0;
              if (closure_0) {
                tmp248 = null === tmp229.alternate;
              }
              if (tmp248) {
                tmp229.flags = tmp229.flags | 67108866;
              }
              return tmp229;
            } else if (sibling.elementType === type) {
              let sibling14 = sibling.sibling;
              if (closure_0) {
                if (null !== sibling14) {
                  do {
                    if (closure_0) {
                      let deletions2 = deletions.deletions;
                      if (null === deletions2) {
                        let items2 = [sibling14];
                        deletions.deletions = items2;
                        deletions.flags = deletions.flags | 16;
                      } else {
                        let arr1 = deletions2.push(sibling14);
                      }
                    }
                    sibling14 = sibling14.sibling;
                  } while (null !== sibling14);
                }
              }
              tmp229 = createWorkInProgress(sibling, children.props);
              tmp229.index = 0;
              tmp229.sibling = null;
              let tmp230 = null;
              if (undefined !== children.props.ref) {
                tmp230 = ref;
              }
              tmp229.ref = tmp230;
              tmp229.return = deletions;
            }
            if (closure_0) {
              let sibling15 = sibling;
              if (null !== sibling) {
                do {
                  if (closure_0) {
                    let deletions3 = deletions.deletions;
                    if (null === deletions3) {
                      items3 = [sibling15];
                      deletions.deletions = items3;
                      deletions.flags = deletions.flags | 16;
                    } else {
                      let arr2 = deletions3.push(sibling15);
                    }
                  }
                  sibling15 = sibling15.sibling;
                } while (null !== sibling15);
              }
            }
          }
          if (children.type === closure_1_15) {
            Object.create(FiberNode.prototype);
            let obj = { tag: 7, key: children.key, elementType: null, type: null, stateNode: null, return: deletions, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: children.props.children, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: deletions.mode, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
            tmp229 = obj;
          } else {
            const tmp238 = createFiberFromTypeAndProps(children.type, children.key, children.props, 0, deletions.mode, lanes);
            let tmp239 = null;
            if (undefined !== children.props.ref) {
              tmp239 = ref2;
            }
            tmp238.ref = tmp239;
            tmp238.return = deletions;
            tmp229 = tmp238;
          }
        } else if (closure_1_14 === $$typeof) {
          let sibling11 = sibling;
          if (null !== sibling) {
            while (sibling11.key !== tmp200) {
              if (closure_0) {
                let deletions4 = deletions.deletions;
                if (null === deletions4) {
                  let items4 = [sibling11];
                  deletions.deletions = items4;
                  deletions.flags = deletions.flags | 16;
                } else {
                  let arr3 = deletions4.push(sibling11);
                }
              }
              sibling11 = sibling11.sibling;
            }
            if (4 === sibling11.tag) {
              if (sibling11.stateNode.containerInfo === children.containerInfo) {
                if (sibling11.stateNode.implementation === children.implementation) {
                  let sibling13 = sibling11.sibling;
                  if (closure_0) {
                    if (null !== sibling13) {
                      do {
                        if (closure_0) {
                          let deletions5 = deletions.deletions;
                          if (null === deletions5) {
                            let items5 = [sibling13];
                            deletions.deletions = items5;
                            deletions.flags = deletions.flags | 16;
                          } else {
                            let arr4 = deletions5.push(sibling13);
                          }
                        }
                        sibling13 = sibling13.sibling;
                      } while (null !== sibling13);
                    }
                  }
                  const tmp217 = createWorkInProgress(sibling11, children.children || []);
                  tmp217.index = 0;
                  tmp217.sibling = null;
                  tmp217.return = deletions;
                  obj2 = tmp217;
                }
                let tmp218 = closure_0;
                if (closure_0) {
                  tmp218 = null === obj2.alternate;
                }
                if (tmp218) {
                  obj2.flags = obj2.flags | 67108866;
                }
                return obj2;
              }
            }
            if (closure_0) {
              let sibling12 = sibling11;
              if (null !== sibling11) {
                do {
                  if (closure_0) {
                    let deletions6 = deletions.deletions;
                    if (null === deletions6) {
                      let items6 = [sibling12];
                      deletions.deletions = items6;
                      deletions.flags = deletions.flags | 16;
                    } else {
                      let arr5 = deletions6.push(sibling12);
                    }
                  }
                  sibling12 = sibling12.sibling;
                } while (null !== sibling12);
              }
            }
          }
          Object.create(FiberNode.prototype);
          obj2 = { tag: 4, key: children.key, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: null !== children.children ? children.children : [], memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: deletions.mode, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
          ({ containerInfo: obj6[0], implementation: obj6[2] } = children);
          obj2.stateNode = { containerInfo: null, pendingChildren: null, implementation: null };
          obj2.return = deletions;
        } else if (closure_1_24 === $$typeof) {
          return reconcileChildFibersImpl(deletions, sibling, resolveLazy(children), lanes);
        } else if (updateFragment(children)) {
          closure_0 = deletions;
          let num26 = 0;
          let sibling8 = sibling;
          let tmp123 = null;
          let tmp124 = null;
          let num27 = 0;
          if (null !== sibling) {
            let num29 = 0;
            let tmp143 = sibling;
            let tmp144 = null;
            let tmp145 = null;
            let num30 = 0;
            num26 = 0;
            sibling8 = sibling;
            tmp123 = null;
            tmp124 = null;
            num27 = 0;
            if (0 < children.length) {
              while (true) {
                let tmp129 = num30;
                sibling9 = tmp143;
                tmp130 = null;
                if (tmp143.index <= num29) {
                  sibling9 = tmp143.sibling;
                  tmp130 = tmp143;
                }
                let tmp135 = updateSlot(deletions, tmp130, children[num29], lanes);
                if (null === tmp135) {
                  break;
                } else {
                  let tmp266 = closure_0;
                  let tmp136 = closure_0;
                  if (closure_0) {
                    tmp136 = tmp130;
                  }
                  if (tmp136) {
                    tmp136 = null === tmp135.alternate;
                  }
                  if (tmp136) {
                    if (tmp266) {
                      let deletions7 = deletions.deletions;
                      if (null === deletions7) {
                        let items7 = [tmp130];
                        deletions.deletions = items7;
                        deletions.flags = deletions.flags | 16;
                      } else {
                        let arr6 = deletions7.push(tmp130);
                      }
                    }
                  }
                  tmp135.index = num29;
                  if (tmp266) {
                    let index4 = tmp135.alternate;
                    if (null !== index4) {
                      index4 = index4.index;
                      if (index4 < num30) {
                        tmp135.flags = tmp135.flags | 67108866;
                        index4 = num30;
                      }
                    } else {
                      tmp135.flags = tmp135.flags | 67108866;
                    }
                  } else {
                    tmp135.flags = tmp135.flags | 1048576;
                    let tmp141 = tmp135;
                    if (null !== tmp144) {
                      tmp144.sibling = tmp135;
                      tmp141 = tmp145;
                    }
                    let sum = num29 + 1;
                    num26 = sum;
                    sibling8 = sibling9;
                    tmp123 = tmp135;
                    tmp124 = tmp141;
                    num27 = tmp129;
                    if (null !== sibling9) {
                      num29 = sum;
                      tmp143 = sibling9;
                      tmp144 = tmp135;
                      tmp145 = tmp141;
                      num30 = tmp129;
                      sibling8 = sibling9;
                      tmp123 = tmp135;
                      tmp124 = tmp141;
                      num27 = tmp129;
                      num26 = sum;
                    }
                  }
                }
              }
              num26 = num29;
              tmp123 = tmp144;
              tmp124 = tmp145;
              num27 = num30;
              sibling8 = tmp130;
              if (null === tmp130) {
                num26 = num29;
                sibling8 = sibling9;
                tmp123 = tmp144;
                tmp124 = tmp145;
                num27 = num30;
              }
            }
          }
          if (num26 === children.length) {
            let tmp174 = tmp124;
            if (closure_0) {
              tmp174 = tmp124;
              if (null !== sibling8) {
                do {
                  if (closure_0) {
                    let deletions8 = deletions.deletions;
                    if (null === deletions8) {
                      let items8 = [sibling8];
                      deletions.deletions = items8;
                      deletions.flags = deletions.flags | 16;
                    } else {
                      let arr7 = deletions8.push(sibling8);
                    }
                  }
                  sibling8 = sibling8.sibling;
                  tmp174 = tmp124;
                } while (null !== sibling8);
              }
            }
          } else if (null === sibling8) {
            let tmp176 = tmp124;
            let tmp177 = tmp124;
            if (num26 < children.length) {
              do {
                let tmp179 = createChild(deletions, children[num26], lanes);
                let tmp184 = tmp123;
                let tmp185 = tmp176;
                let tmp186 = num27;
                if (null !== tmp179) {
                  tmp179.index = num26;
                  if (closure_0) {
                    let index6 = tmp179.alternate;
                    if (null !== index6) {
                      index6 = index6.index;
                      if (index6 < num27) {
                        tmp179.flags = tmp179.flags | 67108866;
                        index6 = num27;
                      }
                    } else {
                      tmp179.flags = tmp179.flags | 67108866;
                    }
                  } else {
                    tmp179.flags = tmp179.flags | 1048576;
                    let tmp190 = tmp179;
                    if (null !== tmp123) {
                      tmp123.sibling = tmp179;
                      tmp190 = tmp176;
                    }
                    tmp185 = tmp190;
                    tmp184 = tmp179;
                    tmp186 = tmp183;
                  }
                }
                num26 = num26 + 1;
                tmp123 = tmp184;
                tmp176 = tmp185;
                num27 = tmp186;
                tmp177 = tmp185;
              } while (num26 < children.length);
            }
            tmp174 = tmp177;
          } else {
            const _Map2 = Map;
            map = new Map();
            let sibling10 = sibling8;
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
            let tmp150 = tmp123;
            let tmp151 = tmp124;
            let tmp152 = num27;
            let tmp153 = tmp124;
            if (num26 < children.length) {
              while (true) {
                tmp159 = updateFromMap(tmp270, deletions, sum1, children[sum1], lanes);
                let tmp164 = tmp150;
                let tmp165 = tmp151;
                let tmp166 = tmp152;
                if (null !== tmp159) {
                  let tmp167 = closure_0;
                  let tmp271 = closure_0;
                  if (closure_0) {
                    tmp167 = null !== tmp159.alternate;
                  }
                  if (tmp167) {
                    let key2 = sum1;
                    if (null !== tmp159.key) {
                      key2 = tmp159.key;
                    }
                    let deleteResult = map.delete(key2);
                  }
                  tmp159.index = sum1;
                  if (tmp271) {
                    break;
                  } else {
                    tmp159.flags = tmp159.flags | 1048576;
                    let tmp172 = tmp159;
                    if (null !== tmp150) {
                      tmp150.sibling = tmp159;
                      tmp172 = tmp151;
                    }
                    tmp165 = tmp172;
                    tmp164 = tmp159;
                    tmp166 = tmp163;
                  }
                }
                sum1 = sum1 + 1;
                tmp150 = tmp164;
                tmp151 = tmp165;
                tmp152 = tmp166;
                tmp153 = tmp165;
              }
              let index5 = tmp159.alternate;
              if (null !== index5) {
                index5 = index5.index;
                if (index5 < tmp152) {
                  tmp159.flags = tmp159.flags | 67108866;
                  index5 = tmp152;
                }
              } else {
                tmp159.flags = tmp159.flags | 67108866;
              }
            }
            tmp174 = tmp153;
            if (closure_0) {
              const item = map.forEach((item, index) => {
                if (deletions) {
                  deletions = deletions.deletions;
                  if (null === deletions) {
                    const items = [item];
                    deletions.deletions = items;
                    deletions.flags = deletions.flags | 16;
                  } else {
                    deletions.push(item);
                  }
                }
              });
              tmp174 = tmp153;
            }
            tmp270 = map;
          }
          return tmp174;
        } else {
          let tmp25 = null;
          if (null !== children) {
            tmp25 = null;
            if (typeof children === "object") {
              prop = iterator;
              if (iterator) {
                prop = children[iterator];
              }
              if (!prop) {
                prop = children[Symbol.iterator];
              }
              let tmp27 = null;
              if (typeof prop === "function") {
                tmp27 = prop;
              }
              tmp25 = tmp27;
            }
          }
          if (tmp25) {
            let tmp45 = null;
            if (!tmp24) {
              tmp45 = null;
              if (typeof children === "object") {
                let prop1 = iterator;
                if (iterator) {
                  prop1 = children[iterator];
                }
                if (!prop1) {
                  prop1 = children[Symbol.iterator];
                }
                let tmp47 = null;
                if (typeof prop1 === "function") {
                  tmp47 = prop1;
                }
                tmp45 = tmp47;
              }
            }
            if (typeof tmp45 !== "function") {
              const _Error4 = Error;
              throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
            } else {
              const call2 = tmp45.call;
              const iter = typeof call2 === "unknown" ? tmp45() : call2(children);
              closure_0 = deletions;
              if (null == iter) {
                const _Error3 = Error;
                throw Error("An iterable object provided no iterator.");
              } else {
                const iter8 = iter.next();
                let iter3 = iter8;
                let num13 = 0;
                let sibling6 = sibling;
                let tmp67 = null;
                let tmp68 = null;
                let num14 = 0;
                if (null !== sibling) {
                  let iter4 = iter8;
                  let num15 = 0;
                  let tmp69 = sibling;
                  let tmp70 = null;
                  let tmp71 = null;
                  let num16 = 0;
                  iter3 = iter8;
                  num13 = 0;
                  sibling6 = sibling;
                  tmp67 = null;
                  tmp68 = null;
                  num14 = 0;
                  if (!iter8.done) {
                    while (true) {
                      let tmp53 = num16;
                      sibling5 = tmp69;
                      tmp54 = null;
                      if (tmp69.index <= num15) {
                        sibling5 = tmp69.sibling;
                        tmp54 = tmp69;
                      }
                      let tmp59 = updateSlot(deletions, tmp54, iter4.value, lanes);
                      if (null === tmp59) {
                        break;
                      } else {
                        let tmp259 = closure_0;
                        let tmp60 = closure_0;
                        if (closure_0) {
                          tmp60 = tmp54;
                        }
                        if (tmp60) {
                          tmp60 = null === tmp59.alternate;
                        }
                        if (tmp60) {
                          if (tmp259) {
                            let deletions9 = deletions.deletions;
                            if (null === deletions9) {
                              let items9 = [tmp54];
                              deletions.deletions = items9;
                              deletions.flags = deletions.flags | 16;
                            } else {
                              let arr8 = deletions9.push(tmp54);
                            }
                          }
                        }
                        tmp59.index = num15;
                        if (tmp259) {
                          let index = tmp59.alternate;
                          if (null !== index) {
                            index = index.index;
                            if (index < num16) {
                              tmp59.flags = tmp59.flags | 67108866;
                              index = num16;
                            }
                          } else {
                            tmp59.flags = tmp59.flags | 67108866;
                          }
                        } else {
                          tmp59.flags = tmp59.flags | 1048576;
                          let tmp65 = tmp59;
                          if (null !== tmp70) {
                            tmp70.sibling = tmp59;
                            tmp65 = tmp71;
                          }
                          let sum2 = num15 + 1;
                          let iter2 = iter.next();
                          iter3 = iter2;
                          num13 = sum2;
                          sibling6 = sibling5;
                          tmp67 = tmp59;
                          tmp68 = tmp65;
                          num14 = tmp53;
                          if (null !== sibling5) {
                            iter4 = iter2;
                            num15 = sum2;
                            tmp69 = sibling5;
                            tmp70 = tmp59;
                            tmp71 = tmp65;
                            num16 = tmp53;
                            iter3 = iter2;
                            num13 = sum2;
                            sibling6 = sibling5;
                            tmp67 = tmp59;
                            tmp68 = tmp65;
                            num14 = tmp53;
                          }
                        }
                      }
                    }
                    iter3 = iter4;
                    num13 = num15;
                    tmp67 = tmp70;
                    tmp68 = tmp71;
                    num14 = num16;
                    sibling6 = tmp54;
                    if (null === tmp54) {
                      iter3 = iter4;
                      num13 = num15;
                      sibling6 = sibling5;
                      tmp67 = tmp70;
                      tmp68 = tmp71;
                      num14 = num16;
                    }
                  }
                }
                if (iter3.done) {
                  let tmp100 = tmp68;
                  if (closure_0) {
                    tmp100 = tmp68;
                    if (null !== sibling6) {
                      do {
                        if (closure_0) {
                          let deletions10 = deletions.deletions;
                          if (null === deletions10) {
                            let items10 = [sibling6];
                            deletions.deletions = items10;
                            deletions.flags = deletions.flags | 16;
                          } else {
                            let arr9 = deletions10.push(sibling6);
                          }
                        }
                        sibling6 = sibling6.sibling;
                        tmp100 = tmp68;
                      } while (null !== sibling6);
                    }
                  }
                } else if (null === sibling6) {
                  let tmp102 = tmp68;
                  let tmp103 = tmp68;
                  if (!iter3.done) {
                    do {
                      let tmp105 = createChild(deletions, iter3.value, lanes);
                      let tmp110 = tmp67;
                      let tmp111 = tmp102;
                      let tmp112 = num14;
                      if (null !== tmp105) {
                        tmp105.index = num13;
                        if (closure_0) {
                          let index3 = tmp105.alternate;
                          if (null !== index3) {
                            index3 = index3.index;
                            if (index3 < num14) {
                              tmp105.flags = tmp105.flags | 67108866;
                              index3 = num14;
                            }
                          } else {
                            tmp105.flags = tmp105.flags | 67108866;
                          }
                        } else {
                          tmp105.flags = tmp105.flags | 1048576;
                          let tmp116 = tmp105;
                          if (null !== tmp67) {
                            tmp67.sibling = tmp105;
                            tmp116 = tmp102;
                          }
                          tmp111 = tmp116;
                          tmp110 = tmp105;
                          tmp112 = tmp109;
                        }
                      }
                      num13 = num13 + 1;
                      iter7 = iter.next();
                      tmp67 = tmp110;
                      tmp102 = tmp111;
                      num14 = tmp112;
                      iter3 = iter7;
                      tmp103 = tmp111;
                    } while (!iter7.done);
                  }
                  tmp100 = tmp103;
                } else {
                  const _Map = Map;
                  map1 = new Map();
                  let sibling7 = sibling6;
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
                  let tmp76 = tmp67;
                  let tmp77 = tmp68;
                  let tmp78 = num14;
                  let tmp79 = tmp68;
                  if (!iter3.done) {
                    while (true) {
                      tmp85 = updateFromMap(tmp263, deletions, sum3, iter5.value, lanes);
                      let tmp90 = tmp76;
                      let tmp91 = tmp77;
                      let tmp92 = tmp78;
                      if (null !== tmp85) {
                        let tmp93 = closure_0;
                        let tmp264 = closure_0;
                        if (closure_0) {
                          tmp93 = null !== tmp85.alternate;
                        }
                        if (tmp93) {
                          let key = sum3;
                          if (null !== tmp85.key) {
                            key = tmp85.key;
                          }
                          let deleteResult1 = map1.delete(key);
                        }
                        tmp85.index = sum3;
                        if (tmp264) {
                          break;
                        } else {
                          tmp85.flags = tmp85.flags | 1048576;
                          let tmp98 = tmp85;
                          if (null !== tmp76) {
                            tmp76.sibling = tmp85;
                            tmp98 = tmp77;
                          }
                          tmp91 = tmp98;
                          tmp90 = tmp85;
                          tmp92 = tmp89;
                        }
                      }
                      sum3 = sum3 + 1;
                      let iter6 = iter.next();
                      tmp76 = tmp90;
                      tmp77 = tmp91;
                      tmp78 = tmp92;
                      iter5 = iter6;
                      tmp79 = tmp91;
                    }
                    let index2 = tmp85.alternate;
                    if (null !== index2) {
                      index2 = index2.index;
                      if (index2 < tmp78) {
                        tmp85.flags = tmp85.flags | 67108866;
                        index2 = tmp78;
                      }
                    } else {
                      tmp85.flags = tmp85.flags | 67108866;
                    }
                  }
                  tmp100 = tmp79;
                  if (closure_0) {
                    const item1 = map1.forEach((item, index) => {
                      if (deletions) {
                        deletions = deletions.deletions;
                        if (null === deletions) {
                          const items = [item];
                          deletions.deletions = items;
                          deletions.flags = deletions.flags | 16;
                        } else {
                          deletions.push(item);
                        }
                      }
                    });
                    tmp100 = tmp79;
                  }
                  tmp263 = map1;
                }
                return tmp100;
              }
            }
          } else if (typeof children.then === "function") {
            c139 = c139 + 1;
            let tmp40 = c138;
            if (null === c138) {
              const items11 = [];
              c138 = items11;
              tmp40 = items11;
            }
            return reconcileChildFibersImpl(deletions, sibling, trackUsedThenable(tmp40, children, c139), lanes);
          } else if (children.$$typeof === closure_1_19) {
            if (null === closure_102) {
              closure_102 = deletions;
              obj4 = null;
              const dependencies = deletions.dependencies;
              if (null !== dependencies) {
                dependencies.firstContext = null;
              }
            }
            const _currentValue2 = children._currentValue2;
            obj4 = { context: null, memoizedValue: null, next: null };
            obj4[0] = children;
            obj4[1] = _currentValue2;
            if (null === obj4) {
              if (null === deletions) {
                const _Error2 = Error;
                throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
              } else {
                obj5 = { lanes: 0, firstContext: null };
                obj5[1] = obj4;
                deletions.dependencies = obj5;
                deletions.flags = deletions.flags | 524288;
              }
            } else {
              tmp32.next = obj4;
            }
            return reconcileChildFibersImpl(deletions, sibling, _currentValue2, lanes);
          } else if (children.$$typeof === closure_1_12) {
            const _Error = Error;
            throw Error("A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the \"react\" package is used.\n- A library pre-bundled an old copy of \"react\" or \"react/jsx-runtime\".\n- A compiler tries to \"inline\" JSX instead of using the runtime.");
          } else {
            const _Object2 = Object;
            const call = toString.call;
            let text = typeof call === "unknown" ? toString() : call(children);
            if ("[object Object]" === text) {
              const _Object = Object;
              const keys = Object.keys(children);
              text = `${"object with keys {" + obj2.join(", ")}}`;
            }
            throw Error("Objects are not valid as a React child (found: " + text + "). If you meant to render a collection of children, use an array instead.");
          }
        }
      }
    }
    if (typeof children !== "string") {
      if (typeof children !== "number") {
        if (typeof children !== "bigint") {
          let tmp4 = null;
          if (closure_0) {
            let sibling2 = sibling;
            tmp4 = null;
            if (null !== sibling) {
              do {
                if (closure_0) {
                  let deletions11 = deletions.deletions;
                  if (null === deletions11) {
                    let items12 = [sibling2];
                    deletions.deletions = items12;
                    deletions.flags = deletions.flags | 16;
                  } else {
                    let arr10 = deletions11.push(sibling2);
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
    const text1 = `${arr}`;
    if (null !== sibling) {
      if (6 === sibling.tag) {
        let sibling4 = sibling.sibling;
        let tmp16 = closure_0;
        let tmp17 = closure_0;
        if (closure_0) {
          if (null !== sibling4) {
            do {
              let tmp18 = closure_0;
              if (closure_0) {
                let deletions12 = deletions.deletions;
                if (null === deletions12) {
                  let items13 = [sibling4];
                  deletions.deletions = items13;
                  deletions.flags = deletions.flags | 16;
                } else {
                  let arr11 = deletions12.push(sibling4);
                }
              }
              sibling4 = sibling4.sibling;
              tmp16 = tmp18;
            } while (null !== sibling4);
          }
          tmp17 = tmp16;
        }
        const tmp22 = createWorkInProgress(sibling, text1);
        tmp22.index = 0;
        tmp22.sibling = null;
        tmp22.return = deletions;
        let tmp11 = tmp17;
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
    let tmp10 = closure_0;
    tmp11 = closure_0;
    if (closure_0) {
      let sibling3 = sibling;
      if (tmp9) {
        do {
          let tmp12 = closure_0;
          if (closure_0) {
            let deletions13 = deletions.deletions;
            if (null === deletions13) {
              let items14 = [sibling3];
              deletions.deletions = items14;
              deletions.flags = deletions.flags | 16;
            } else {
              let arr12 = deletions13.push(sibling3);
            }
          }
          sibling3 = sibling3.sibling;
          tmp10 = tmp12;
        } while (null !== sibling3);
      }
      tmp11 = tmp10;
    }
    const obj6 = Object.create(FiberNode.prototype);
    obj = { tag: 6, key: null, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: text1, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: deletions.mode, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null, lanes, return: deletions };
  }
  return (deletions, sibling, type, lanes) => {
    try {
      c139 = 0;
      c138 = null;
      return reconcileChildFibersImpl(deletions, sibling, type, lanes);
    } catch (promise) {
      if (promise !== closure_1_130) {
        if (promise !== closure_1_132) {
          const tmp14 = createFiberImplClass(29, promise, null, tmp.mode);
          tmp14.lanes = tmp2;
          tmp14.return = tmp;
          return tmp14;
        }
      }
      throw promise;
    }
  };
}
function throwInvalidHookError() {
  throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
}
function use($$typeof) {
  if (null !== $$typeof) {
    if (typeof $$typeof === "object") {
      if (typeof $$typeof.then === "function") {
        closure_171 = closure_171 + 1;
        let tmp5 = items;
        if (null === items) {
          items = [];
          tmp5 = items;
        }
        if (null !== (null === _null4 ? _null2.memoizedState : _null4.next)) {
          return trackUsedThenable(tmp5, $$typeof, tmp4);
        } else {
          const alternate = _null2.alternate;
          if (null !== alternate) {
            if (null !== alternate.memoizedState) {
              let tmp9 = obj9;
            }
            tmp8.H = tmp9;
          }
          tmp9 = closure_210;
        }
        tmp4 = closure_171;
      } else if ($$typeof.$$typeof === closure_19) {
        const _currentValue2 = $$typeof._currentValue2;
        let obj = { context: null, memoizedValue: null, next: null };
        obj[0] = $$typeof;
        obj[1] = _currentValue2;
        if (null === obj) {
          if (null === _null) {
            const _Error = Error;
            throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          } else {
            obj = { lanes: 0, firstContext: null };
            obj[1] = obj;
            _null.dependencies = obj;
            _null.flags = _null.flags | 524288;
          }
        } else {
          tmp2.next = obj;
        }
        return _currentValue2;
      }
    }
  }
  throw Error("An unsupported type was passed to use(): " + String($$typeof));
}
function useMemoCache(arg0) {
  let updateQueue = _null2.updateQueue;
  let memoCache = null;
  if (null !== updateQueue) {
    memoCache = updateQueue.memoCache;
  }
  let tmp2 = memoCache;
  if (null == memoCache) {
    const alternate = _null2.alternate;
    tmp2 = memoCache;
    if (null !== alternate) {
      const updateQueue2 = alternate.updateQueue;
      let tmp4 = memoCache;
      if (null !== updateQueue2) {
        memoCache = updateQueue2.memoCache;
        if (null != memoCache) {
          let obj = { data: null, index: 0 };
          data = memoCache.data;
          obj[0] = data.map((item, index) => item.slice());
          memoCache = obj;
        }
        tmp4 = memoCache;
      }
      tmp2 = tmp4;
    }
  }
  if (null == tmp2) {
    obj = { data: null, index: 0 };
    obj[0] = [];
    tmp2 = obj;
  }
  if (null === updateQueue) {
    obj = { lastEffect: null, events: null, stores: null, memoCache: null };
    _null2.updateQueue = obj;
    updateQueue = obj;
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
function updateSyncExternalStore(serializer, fn) {
  const tmp2 = updateWorkInProgressHook();
  const tmp3 = fn();
  let tmp5 = c166;
  if (!c166) {
    tmp5 = tmp2;
  }
  const tmp4Result = is(tmp5.memoizedState, tmp3);
  if (!tmp4Result) {
    tmp2.memoizedState = tmp3;
    c222 = true;
  }
  const queue = tmp2.queue;
  const items = [serializer];
  updateEffectImpl(2048, 8, subscribeToStore.bind(null, _null2, queue, serializer), items);
  if (queue.getSnapshot === fn) {
    return tmp3;
  }
  _null2.flags = _null2.flags | 2048;
  let obj = { tag: 9, create: updateStoreInstance.bind(null, _null2, queue, tmp3, fn), deps: null, inst: { destroy: "r" }, next: null };
  let updateQueue = _null2.updateQueue;
  if (null === updateQueue) {
    obj = { lastEffect: null, events: null, stores: null, memoCache: null };
    _null2.updateQueue = obj;
    updateQueue = obj;
  }
  if (null === updateQueue.lastEffect) {
    obj.next = obj;
    updateQueue.lastEffect = obj;
  } else {
    iter.next = obj;
    obj.next = iter.next;
    updateQueue.lastEffect = obj;
  }
  if (null === c278) {
    const _Error = Error;
    throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
  } else if (!(127 & c164)) {
    _null2.flags = _null2.flags | 16384;
    obj = { getSnapshot: null, value: null };
    obj[0] = fn;
    obj[1] = tmp3;
    const updateQueue2 = _null2.updateQueue;
    if (null === updateQueue2) {
      obj1 = { lastEffect: null, events: null, stores: null, memoCache: null };
      _null2.updateQueue = obj1;
      const items1 = [obj];
      obj1.stores = items1;
    } else {
      const stores = updateQueue2.stores;
      if (null === stores) {
        const items2 = [obj];
        updateQueue2.stores = items2;
      } else {
        stores.push(obj);
      }
    }
  }
}
function mountActionState(action, baseState) {
  let obj = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  if (null === obj1) {
    obj1 = obj;
    c165.memoizedState = obj;
  } else {
    tmp.next = obj;
    obj1 = obj;
  }
  obj1.baseState = baseState;
  obj1.memoizedState = baseState;
  obj = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: actionStateReducer, lastRenderedState: baseState };
  obj1.queue = obj;
  const bindResult = dispatchSetState.bind(null, c165, obj);
  obj.dispatch = bindResult;
  obj = { state: baseState, dispatch: null, action, pending: null };
  obj1 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  if (null === obj1) {
    c165.memoizedState = obj1;
  } else {
    tmp5.next = obj1;
  }
  obj1.queue = obj;
  const bindResult2 = dispatchActionState.bind(null, c165, obj, dispatchOptimisticSetState.bind(null, c165, false, mountStateImpl(false).queue), bindResult);
  obj.dispatch = bindResult2;
  obj1.memoizedState = action;
  const items = [baseState, bindResult2, false];
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
    const tmpResult = updateWorkInProgressHook();
    tmpResult.memoizedState = memoizedState;
    const items = [tmp2.memoizedState, tmpResult.queue.dispatch, false];
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
  const memoizedState = updateWorkInProgressHook().memoizedState;
  let obj = { ref: memoizedState, nextImpl };
  _null2.flags = _null2.flags | 4;
  const updateQueue = _null2.updateQueue;
  if (null === updateQueue) {
    obj = { lastEffect: null, events: null, stores: null, memoCache: null };
    _null2.updateQueue = obj;
    const items = [obj];
    obj.events = items;
  } else {
    const events = updateQueue.events;
    if (null === events) {
      const items1 = [obj];
      updateQueue.events = items1;
    } else {
      events.push(obj);
    }
  }
  return () => {
    if (2 & closure_1_277) {
      const _Error = Error;
      throw Error("A function wrapped in useEffectEvent can't be called during rendering.");
    } else {
      const impl = memoizedState.impl;
      const apply = impl.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(undefined);
      } else {
        applyArgumentsResult = apply(undefined, arguments);
      }
      return applyArgumentsResult;
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
    const items = [cache];
    combined = arr.concat(items);
  }
  updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, c165, cache), combined);
}
function mountDebugValue() {

}
function updateCallback(arg0, arg1) {
  const tmp = updateWorkInProgressHook();
  let tmp2 = null;
  if (undefined !== arg1) {
    tmp2 = arg1;
  }
  const memoizedState = tmp.memoizedState;
  if (null !== tmp2) {
    let flag = false;
    if (null !== memoizedState[1]) {
      flag = true;
      if (0 < arr.length) {
        let num2 = 0;
        flag = true;
        if (0 < tmp2.length) {
          flag = false;
          while (is(tmp2[num2], arr[num2])) {
            let sum = num2 + 1;
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
      let first = memoizedState[0];
    }
    return first;
  }
  first = arg0;
  const items = [arg0, tmp2];
  tmp.memoizedState = items;
}
function updateMemo(fn) {
  const tmp3 = updateWorkInProgressHook();
  let tmp4 = null;
  if (undefined !== arg1) {
    tmp4 = arg1;
  }
  const memoizedState = tmp3.memoizedState;
  if (null !== tmp4) {
    if (areHookInputsEqual(tmp4, memoizedState[1])) {
      return memoizedState[0];
    }
  }
  const tmp6 = fn();
  if (c170) {
    setIsStrictModeForDevtools(true);
    try {
      fn();
      setIsStrictModeForDevtools(false);
    } catch (tmp11) {
      tmp(false);
      throw tmp11;
    }
  }
  const items = [tmp6, tmp4];
  tmp3.memoizedState = items;
  return tmp6;
}
function useHostTransitionStatus() {
  _currentValue2 = _currentValue2._currentValue2;
  let obj = { context: _currentValue2, memoizedValue: _currentValue2, next: null };
  if (null === obj) {
    if (null === _null) {
      const _Error = Error;
      throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    } else {
      obj = { lanes: 0, firstContext: null };
      obj[1] = obj;
      _null.dependencies = obj;
      _null.flags = _null.flags | 524288;
    }
  } else {
    tmp2.next = obj;
  }
  return _currentValue2;
}
function updateId() {
  return updateWorkInProgressHook().memoizedState;
}
function updateRefresh() {
  return updateWorkInProgressHook().memoizedState;
}
let closure_106 = typeof AbortController !== "undefined" ? AbortController : (() => {
  closure_0 = [];
});
let closure_107 = { $$typeof: forResult, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
let c110 = null;
let c111 = null;
let c112 = false;
let c113 = false;
let c114 = false;
let c115 = 0;
let c122 = null;
let c123 = 0;
let c124 = 0;
let c125 = null;
let S = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S;
__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S = (arg0, obj) => {
  obj = items(287);
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
      closure_123 = 0;
      let tmp5 = c115;
      if (0 === c115) {
        let tmp6 = c124;
        if (0 === c124) {
          c78 = tmp8;
          tmp6 = c78;
          if (!(261888 & c78 << 1)) {
            c78 = 256;
            tmp6 = tmp7;
          }
        }
        c115 = tmp6;
        tmp5 = tmp6;
      }
      c124 = tmp5;
      obj = { status: "pending", value: "Array", then: "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}" };
      obj[2] = function then(arg0) {
        items.push(arg0);
      };
    }
    closure_123 = closure_123 + 1;
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
    throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");
  } else {
    queue.lastRenderedReducer = lastRenderedReducer;
    let memoizedState = tmp.memoizedState;
    let tmp4 = memoizedState;
    if (null !== queue.pending) {
      queue.pending = null;
      const next = iter2.next;
      let iter = next;
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
    const items = [tmp4, queue.dispatch];
    return items;
  }
}
function mountEffect(create) {
  let obj = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  if (null === obj) {
    _null2.memoizedState = obj;
  } else {
    tmp.next = obj;
  }
  _null2.flags = _null2.flags | 8390656;
  let tmp4 = null;
  if (undefined !== arg1) {
    tmp4 = arg1;
  }
  obj = { tag: 9, create, deps: tmp4, inst: { destroy: "r" }, next: null };
  let updateQueue = _null2.updateQueue;
  if (null === updateQueue) {
    obj = { lastEffect: null, events: null, stores: null, memoCache: null };
    _null2.updateQueue = obj;
    updateQueue = obj;
  }
  if (null === updateQueue.lastEffect) {
    obj.next = obj;
    updateQueue.lastEffect = obj;
  } else {
    iter.next = obj;
    obj.next = iter.next;
    updateQueue.lastEffect = obj;
  }
  obj.memoizedState = obj;
}
let closure_128 = createCursor(null);
let closure_130 = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`.");
let closure_131 = Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React.");
let closure_132 = Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary.");
let closure_133 = {
  then() {

  }
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
let closure_159 = createCursor(null);
let c160 = null;
let c164 = 0;
let c165 = null;
let c166 = null;
let c167 = null;
let c168 = false;
let c169 = false;
let c170 = false;
let c171 = 0;
let c172 = null;
let c173 = 0;
{ readContext, use, useCallback: throwInvalidHookError, useContext: throwInvalidHookError, useEffect: throwInvalidHookError, useImperativeHandle: throwInvalidHookError, useLayoutEffect: throwInvalidHookError, useInsertionEffect: throwInvalidHookError, useMemo: throwInvalidHookError, useReducer: throwInvalidHookError, useRef: throwInvalidHookError, useState: throwInvalidHookError, useDebugValue: throwInvalidHookError, useDeferredValue: throwInvalidHookError, useTransition: throwInvalidHookError, useSyncExternalStore: throwInvalidHookError, useId: throwInvalidHookError, useHostTransitionStatus: throwInvalidHookError, useFormState: throwInvalidHookError, useActionState: throwInvalidHookError, useOptimistic: throwInvalidHookError, useMemoCache: throwInvalidHookError, useCacheRefresh: throwInvalidHookError }.useEffectEvent = throwInvalidHookError;
let closure_210 = {
  readContext,
  use,
  useCallback(fn, items) {
    const obj = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    if (null === obj) {
      c165.memoizedState = obj;
    } else {
      tmp.next = obj;
    }
    items = [fn, ];
    let tmp4 = null;
    if (undefined !== items) {
      tmp4 = items;
    }
    items[1] = tmp4;
    obj.memoizedState = items;
    return fn;
  },
  useContext: readContext,
  useEffect: mountEffect,
  useImperativeHandle(ref, chatInputRefObjectCallback, items) {
    let combined = null;
    if (null != items) {
      items = [ref];
      combined = items.concat(items);
    }
    let obj = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    if (null === obj) {
      _null2.memoizedState = obj;
    } else {
      tmp3.next = obj;
    }
    _null2.flags = _null2.flags | 4194308;
    let tmp6 = null;
    if (undefined !== combined) {
      tmp6 = combined;
    }
    obj = { tag: 5, create: imperativeHandleEffect.bind(null, chatInputRefObjectCallback, ref), deps: tmp6, inst: { destroy: "r" }, next: null };
    let updateQueue = _null2.updateQueue;
    if (null === updateQueue) {
      obj = { lastEffect: null, events: null, stores: null, memoCache: null };
      _null2.updateQueue = obj;
      updateQueue = obj;
    }
    if (null === updateQueue.lastEffect) {
      obj.next = obj;
      updateQueue.lastEffect = obj;
    } else {
      iter.next = obj;
      obj.next = iter.next;
      updateQueue.lastEffect = obj;
    }
    obj.memoizedState = obj;
    const bindResult = imperativeHandleEffect.bind(null, chatInputRefObjectCallback, ref);
  },
  useLayoutEffect(create, items) {
    let obj = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    if (null === obj) {
      _null2.memoizedState = obj;
    } else {
      tmp.next = obj;
    }
    _null2.flags = _null2.flags | 4194308;
    let tmp4 = null;
    if (undefined !== items) {
      tmp4 = items;
    }
    obj = { tag: 5, create, deps: tmp4, inst: { destroy: "r" }, next: null };
    let updateQueue = _null2.updateQueue;
    if (null === updateQueue) {
      obj = { lastEffect: null, events: null, stores: null, memoCache: null };
      _null2.updateQueue = obj;
      updateQueue = obj;
    }
    if (null === updateQueue.lastEffect) {
      obj.next = obj;
      updateQueue.lastEffect = obj;
    } else {
      iter.next = obj;
      obj.next = iter.next;
      updateQueue.lastEffect = obj;
    }
    obj.memoizedState = obj;
  },
  useInsertionEffect(create, items) {
    let obj = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    if (null === obj) {
      _null2.memoizedState = obj;
    } else {
      tmp.next = obj;
    }
    _null2.flags = _null2.flags | 4;
    let tmp4 = null;
    if (undefined !== items) {
      tmp4 = items;
    }
    obj = { tag: 3, create, deps: tmp4, inst: { destroy: "r" }, next: null };
    let updateQueue = _null2.updateQueue;
    if (null === updateQueue) {
      obj = { lastEffect: null, events: null, stores: null, memoCache: null };
      _null2.updateQueue = obj;
      updateQueue = obj;
    }
    if (null === updateQueue.lastEffect) {
      obj.next = obj;
      updateQueue.lastEffect = obj;
    } else {
      iter.next = obj;
      obj.next = iter.next;
      updateQueue.lastEffect = obj;
    }
    obj.memoizedState = obj;
  },
  useMemo(getNextRenewalDateLabel, items) {
    let tmp4 = null;
    if (undefined !== items) {
      tmp4 = items;
    }
    const tmp5 = getNextRenewalDateLabel();
    if (c170) {
      setIsStrictModeForDevtools(true);
      try {
        getNextRenewalDateLabel();
        setIsStrictModeForDevtools(false);
      } catch (tmp10) {
        tmp(false);
        throw tmp10;
      }
    }
    items = [tmp5, tmp4];
    mountWorkInProgressHook().memoizedState = items;
    return tmp5;
  },
  useReducer(lastRenderedReducer, closure_0, fn) {
    const tmp3 = mountWorkInProgressHook();
    let tmp4 = closure_0;
    if (undefined !== fn) {
      const tmp5 = fn(closure_0);
      tmp4 = tmp5;
      if (c170) {
        setIsStrictModeForDevtools(true);
        try {
          fn(closure_0);
          setIsStrictModeForDevtools(false);
          tmp4 = tmp5;
        } catch (tmp12) {
          tmp(false);
          throw tmp12;
        }
      }
    }
    tmp3.baseState = tmp4;
    tmp3.memoizedState = tmp4;
    const obj = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer, lastRenderedState: tmp4 };
    tmp3.queue = obj;
    const bindResult = dispatchReducerAction.bind(null, c165, obj);
    obj.dispatch = bindResult;
    const items = [tmp3.memoizedState, bindResult];
    return items;
  },
  useRef(stateFromStores) {
    const obj = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    if (null === obj) {
      c165.memoizedState = obj;
    } else {
      tmp.next = obj;
    }
    obj.memoizedState = obj;
    return obj;
  },
  useState(fn) {
    const tmp = mountStateImpl(fn);
    const queue = tmp.queue;
    const bindResult = dispatchSetState.bind(null, c165, queue);
    queue.dispatch = bindResult;
    const items = [tmp.memoizedState, bindResult];
    return items;
  },
  useDebugValue: mountDebugValue,
  useDeferredValue(memoizedState) {
    const obj = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    if (null === obj) {
      _null2.memoizedState = obj;
    } else {
      tmp.next = obj;
    }
    let tmp3 = arg1;
    if (undefined !== arg1) {
      if (1073741824 & c164) {
        return tmp3;
      }
      tmp4.memoizedState = tmp3;
      if (0 === closure_291) {
        if (536870912 & c280) {
          closure_291 = 536870912;
        } else {
          c79 = tmp9;
          if (!(3932160 & c79 << 1)) {
            c79 = 262144;
          }
          closure_291 = c79;
        }
      }
      const current = closure_159.current;
      if (null !== current) {
        current.flags = current.flags | 32;
      }
      _null2.lanes = _null2.lanes | closure_291;
      closure_288 = closure_288 | closure_291;
    }
    obj.memoizedState = memoizedState;
    tmp3 = memoizedState;
  },
  useTransition() {
    const bindResult = startTransition.bind(null, c165, mountStateImpl(false).queue, true, false);
    const obj = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    if (null === obj) {
      c165.memoizedState = obj;
    } else {
      tmp2.next = obj;
    }
    obj.memoizedState = bindResult;
    const items = [false, bindResult];
    return items;
  },
  useSyncExternalStore(subscribe, get, get2) {
    let obj = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    if (null === obj2) {
      obj2 = obj;
      _null2.memoizedState = obj;
    } else {
      tmp2.next = obj;
      obj2 = obj;
    }
    const tmp4 = get();
    if (null === c278) {
      const _Error = Error;
      throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
    } else {
      if (!(127 & c280)) {
        _null2.flags = _null2.flags | 16384;
        obj = { getSnapshot: null, value: null };
        obj[0] = get;
        obj[1] = tmp4;
        const updateQueue = _null2.updateQueue;
        if (null === updateQueue) {
          obj = { lastEffect: null, events: null, stores: null, memoCache: null };
          _null2.updateQueue = obj;
          const items = [obj];
          obj.stores = items;
        } else {
          const stores = updateQueue.stores;
          if (null === stores) {
            const items1 = [obj];
            updateQueue.stores = items1;
          } else {
            stores.push(obj);
          }
        }
      }
      tmp3.memoizedState = tmp4;
      obj1 = { value: null, getSnapshot: null };
      obj1[0] = tmp4;
      obj1[1] = get;
      tmp3.queue = obj1;
      const items2 = [subscribe];
      obj2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      if (null === obj2) {
        _null2.memoizedState = obj2;
      } else {
        tmp16.next = obj2;
      }
      _null2.flags = _null2.flags | 8390656;
      obj3 = { tag: null, create: null, deps: null, inst: null, next: null };
      obj3[0] = 9;
      obj3[1] = subscribeToStore.bind(null, _null2, obj1, subscribe);
      obj3[2] = items2;
      obj3[3] = { destroy: "r" };
      let updateQueue2 = _null2.updateQueue;
      if (null === updateQueue2) {
        const obj4 = { lastEffect: null, events: null, stores: null, memoCache: null };
        _null2.updateQueue = obj4;
        updateQueue2 = obj4;
      }
      if (null === updateQueue2.lastEffect) {
        obj3.next = obj3;
        updateQueue2.lastEffect = obj3;
      } else {
        iter.next = obj3;
        obj3.next = iter.next;
        updateQueue2.lastEffect = obj3;
      }
      obj2.memoizedState = obj3;
      _null2.flags = _null2.flags | 2048;
      obj5 = { tag: 9, create: null, deps: null, inst: null, next: null };
      obj5[1] = updateStoreInstance.bind(null, _null2, obj1, tmp4, get);
      obj5[3] = { destroy: "r" };
      let updateQueue3 = _null2.updateQueue;
      if (null === updateQueue3) {
        const obj6 = { lastEffect: null, events: null, stores: null, memoCache: null };
        _null2.updateQueue = obj6;
        updateQueue3 = obj6;
      }
      if (null === updateQueue3.lastEffect) {
        obj5.next = obj5;
        updateQueue3.lastEffect = obj5;
      } else {
        iter2.next = obj5;
        obj5.next = iter2.next;
        updateQueue3.lastEffect = obj5;
      }
      return tmp4;
    }
  },
  useId() {
    const obj = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    if (null === obj) {
      c165.memoizedState = obj;
    } else {
      tmp.next = obj;
    }
    closure_173 = str + 1;
    const text = `${`_${c278.identifierPrefix}` + "r_" + str.toString(32)}_`;
    obj.memoizedState = text;
    return `${`_${c278.identifierPrefix}` + "r_" + +closure_173.toString(32)}_`;
  },
  useHostTransitionStatus,
  useFormState: mountActionState,
  useActionState: mountActionState,
  useOptimistic(baseState) {
    let obj = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    if (null === obj) {
      c165.memoizedState = obj;
    } else {
      tmp.next = obj;
    }
    obj.baseState = baseState;
    obj.memoizedState = baseState;
    obj = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    obj.queue = obj;
    const bindResult = dispatchOptimisticSetState.bind(null, c165, true, obj);
    obj.dispatch = bindResult;
    const items = [baseState, bindResult];
    return items;
  },
  useMemoCache,
  useCacheRefresh() {
    const obj = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    if (null === obj) {
      c165.memoizedState = obj;
    } else {
      tmp.next = obj;
    }
    const bindResult = refreshCache.bind(null, c165);
    obj.memoizedState = bindResult;
    return bindResult;
  },
  useEffectEvent(impl) {
    let obj = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    if (null === obj) {
      c165.memoizedState = obj;
    } else {
      tmp.next = obj;
    }
    obj = { impl };
    obj.memoizedState = obj;
    return () => {
      if (2 & closure_1_277) {
        const _Error = Error;
        throw Error("A function wrapped in useEffectEvent can't be called during rendering.");
      } else {
        const impl = obj.impl;
        const apply = impl.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(undefined);
        } else {
          applyArgumentsResult = apply(undefined, arguments);
        }
        return applyArgumentsResult;
      }
    };
  }
};
{
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
  useDeferredValue(memoizedState, memoizedState) {
    return updateDeferredValueImpl(updateWorkInProgressHook(), _null3.memoizedState, memoizedState, memoizedState);
  },
  useTransition() {
    const first = updateReducerImpl(updateWorkInProgressHook(), c166, basicStateReducer)[0];
    let tmp2 = first;
    if (typeof first !== "boolean") {
      closure_171 = closure_171 + 1;
      let tmp3 = items;
      if (null === items) {
        items = [];
        tmp3 = items;
      }
      const tmp5 = trackUsedThenable(tmp3, first, closure_171);
      tmp2 = tmp5;
      if (null === (null === _null4 ? _null2.memoizedState : _null4.next)) {
        const alternate = _null2.alternate;
        if (null !== alternate) {
          if (null !== alternate.memoizedState) {
            let tmp8 = obj9;
          }
          tmp7.H = tmp8;
        }
        tmp8 = closure_210;
      }
    }
    const items1 = [tmp2, updateWorkInProgressHook().memoizedState];
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
  useCacheRefresh: updateRefresh
}.useEffectEvent = updateEvent;
{
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
      throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");
    } else {
      queue.lastRenderedReducer = basicStateReducer;
      let memoizedState = tmp2.memoizedState;
      let tmp7 = memoizedState;
      if (null !== queue.pending) {
        queue.pending = null;
        const next = iter2.next;
        let iter = next;
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
      const items = [tmp7, queue.dispatch];
      return items;
    }
  },
  useDebugValue: mountDebugValue,
  useDeferredValue(memoizedState, memoizedState3) {
    let tmp = memoizedState3;
    const tmp2 = updateWorkInProgressHook();
    if (null === c166) {
      if (undefined !== tmp) {
        if (!(1073741824 & c164)) {
          tmp2.memoizedState = tmp;
          if (0 === closure_291) {
            if (536870912 & c280) {
              closure_291 = 536870912;
            } else {
              c79 = tmp12;
              if (!(3932160 & c79 << 1)) {
                c79 = 262144;
              }
              closure_291 = c79;
            }
          }
          const current = closure_159.current;
          if (null !== current) {
            current.flags = current.flags | 32;
          }
          _null2.lanes = _null2.lanes | closure_291;
          closure_288 = closure_288 | closure_291;
        }
      }
      tmp2.memoizedState = memoizedState;
      tmp = memoizedState;
    } else {
      return updateDeferredValueImpl(tmp2, tmp3.memoizedState, memoizedState, tmp);
    }
  },
  useTransition() {
    let actionResult;
    const tmp2 = updateWorkInProgressHook();
    const queue = tmp2.queue;
    if (null === queue) {
      const _Error = Error;
      throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");
    } else {
      queue.lastRenderedReducer = basicStateReducer;
      let memoizedState = tmp2.memoizedState;
      let tmp7 = memoizedState;
      if (null !== queue.pending) {
        queue.pending = null;
        const next = iter2.next;
        let iter = next;
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
      const items = [tmp7, queue.dispatch];
      const first = items[0];
      let tmp10 = first;
      if (typeof first !== "boolean") {
        closure_171 = closure_171 + 1;
        let tmp11 = items1;
        if (null === items1) {
          items1 = [];
          tmp11 = items1;
        }
        const tmp13 = trackUsedThenable(tmp11, first, closure_171);
        tmp10 = tmp13;
        if (null === (null === _null4 ? _null2.memoizedState : _null4.next)) {
          const alternate = _null2.alternate;
          if (null !== alternate) {
            if (null !== alternate.memoizedState) {
              let tmp16 = obj9;
            }
            tmp15.H = tmp16;
          }
          tmp16 = closure_210;
        }
      }
      const items2 = [tmp10, updateWorkInProgressHook().memoizedState];
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
      let items = updateReducerImpl(tmp, c166, tmp2);
    } else {
      tmp.baseState = baseState;
      items = [baseState, tmp.queue.dispatch];
    }
    return items;
  },
  useMemoCache,
  useCacheRefresh: updateRefresh
}.useEffectEvent = updateEvent;
let closure_213 = {
  enqueueSetState(_reactInternals, payload, callback) {
    _reactInternals = _reactInternals._reactInternals;
    const tmp = requestUpdateLane(_reactInternals);
    const obj = { lane: tmp, tag: 0, payload, callback: null, next: null };
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
          shared.lanes = tmp | shared.lanes & tmp2.pendingLanes;
          let tmp4 = tmp2.entangledLanes | tmp3;
          tmp2.entangledLanes = tmp4;
          const entanglements = tmp2.entanglements;
          while (tmp4) {
            let diff = 31 - clz32Fallback(tmp4);
            let tmp7 = 1 << diff;
            if (tmp7 & tmp3 | entanglements[diff] & tmp3) {
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
    const obj = { lane: tmp, tag: 1, payload, callback: null, next: null };
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
          shared.lanes = tmp | shared.lanes & tmp2.pendingLanes;
          let tmp4 = tmp2.entangledLanes | tmp3;
          tmp2.entangledLanes = tmp4;
          const entanglements = tmp2.entanglements;
          while (tmp4) {
            let diff = 31 - clz32Fallback(tmp4);
            let tmp7 = 1 << diff;
            if (tmp7 & tmp3 | entanglements[diff] & tmp3) {
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
    const obj = { lane: tmp, tag: 2, payload: null, callback: null, next: null };
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
          shared.lanes = tmp | shared.lanes & tmp2.pendingLanes;
          let tmp4 = tmp2.entangledLanes | tmp3;
          tmp2.entangledLanes = tmp4;
          const entanglements = tmp2.entanglements;
          while (tmp4) {
            let diff = 31 - clz32Fallback(tmp4);
            let tmp7 = 1 << diff;
            if (tmp7 & tmp3 | entanglements[diff] & tmp3) {
              entanglements[diff] = entanglements[diff] | tmp3;
            }
            tmp4 = tmp4 & ~tmp7;
          }
        }
      }
    }
  }
};
let closure_221 = Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue.");
let c222 = false;
let closure_232 = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
let c249 = false;
let c250 = false;
let closure_251 = typeof WeakSet === "function" ? WeakSet : Set;
let c252 = null;
let c270 = 8192;
let closure_275 = {
  getCacheForType(fn) {
    const _currentValue2 = closure_107._currentValue2;
    let obj = { context: closure_107, memoizedValue: _currentValue2, next: null };
    if (null === obj) {
      if (null === _null) {
        const _Error = Error;
        throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      } else {
        obj = { lanes: 0, firstContext: null };
        obj[1] = obj;
        _null.dependencies = obj;
        _null.flags = _null.flags | 524288;
      }
    } else {
      tmp2.next = obj;
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
    const _currentValue2 = closure_107._currentValue2;
    let obj = { context: closure_107, memoizedValue: _currentValue2, next: null };
    if (null === obj) {
      if (null === _null) {
        const _Error = Error;
        throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      } else {
        obj = { lanes: 0, firstContext: null };
        obj[1] = obj;
        _null.dependencies = obj;
        _null.flags = _null.flags | 524288;
      }
    } else {
      tmp2.next = obj;
    }
    return _currentValue2.controller.signal;
  }
};
let closure_276 = typeof WeakMap === "function" ? WeakMap : Map;
let c277 = 0;
let c278 = null;
let c279 = null;
let c280 = 0;
let c281 = 0;
let c282 = null;
let c283 = false;
let c284 = false;
let c285 = false;
let c286 = 0;
let c287 = 0;
let c288 = 0;
let c289 = 0;
let c290 = 0;
let c291 = 0;
let c292 = 0;
let c293 = null;
let c294 = null;
let c295 = false;
let c296 = 0;
const Infinity = Infinity;
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
let c308 = null;
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
let obj11 = { getInspectorDataForInstance: "r", getInspectorDataForViewTag: "PX_16", getInspectorDataForViewAtPoint: "TRANSPARENT" };
obj11[1] = function getInspectorDataForViewTag() {
  throw Error("getInspectorDataForViewTag() is not available in production");
};
obj11[2] = function getInspectorDataForViewAtPoint() {
  throw Error("getInspectorDataForViewAtPoint() is not available in production.");
};
const get = get_BatchedBridge.ReactNativeViewConfigRegistry.get;
let c360 = 2;
if (globalThis.nativeFabricUIManager.registerEventHandler) {
  registerEventHandler(function dispatchEvent(stateNode) {
    const _require = stateNode;
    dependencyMap = arg1;
    closure_2 = arg2;
    publicInstance = null;
    if (null != stateNode) {
      canonical = stateNode.stateNode;
      if (null != canonical) {
        if (null != canonical.canonical) {
          if (null == canonical.canonical.publicInstance) {
            let obj = require("00272_get_BatchedBridge.js") /* get BatchedBridge */;
            const nativeTag = canonical.canonical.nativeTag;
            const viewConfig = canonical.canonical.viewConfig;
            const internalInstanceHandle = canonical.canonical.internalInstanceHandle;
            const publicRootInstance = canonical.canonical.publicRootInstance;
            let tmp = null;
            if (null != publicRootInstance) {
              tmp = publicRootInstance;
            }
            canonical.canonical.publicInstance = obj.createPublicInstance(nativeTag, viewConfig, internalInstanceHandle, tmp);
            canonical.canonical.publicRootInstance = null;
          }
          ({ canonical, publicInstance } = canonical);
        } else {
          if (null != canonical.containerInfo) {
            if (null != canonical.containerInfo.publicInstance) {
              publicInstance = canonical.containerInfo.publicInstance;
            }
          }
          publicInstance = null;
          if (null != canonical._nativeTag) {
            publicInstance = canonical;
          }
        }
      }
    }
    !(function batchedUpdates$1(fn) {
      if (c69) {
        return fn(undefined);
      } else {
        c69 = true;
        try {
          c69 = false;
          return callback(fn, undefined);
        } catch (tmp2) {
          c69 = false;
          throw tmp2;
        }
      }
    })(() => {
      const obj = { eventName: dependencyMap, nativeEvent: closure_2 };
      const RawEventEmitter = stateNode(272).RawEventEmitter;
      RawEventEmitter.emit(dependencyMap, obj);
      const RawEventEmitter2 = stateNode(272).RawEventEmitter;
      RawEventEmitter2.emit("*", obj);
      let num = 0;
      let tmp4 = null;
      let tmp5 = null;
      if (0 < closure_1_60.length) {
        while (true) {
          obj2 = closure_1_60[num];
          let extractEventsResult = obj2;
          let tmp9 = obj2;
          if (obj2) {
            extractEventsResult = obj2.extractEvents(dependencyMap, stateNode, closure_2, publicInstance);
            tmp9 = extractEventsResult;
          }
          let tmp15 = tmp4;
          if (extractEventsResult) {
            if (null == tmp9) {
              break;
            } else if (null == tmp4) {
              tmp15 = tmp9;
            } else {
              let tmp17 = isArray(tmp4);
              let applyResult = isArray(tmp9);
              if (tmp17) {
                let push = tmp4.push;
                if (applyResult) {
                  applyResult = push.apply(tmp4, tmp9);
                  let combined = tmp4;
                } else {
                  applyResult = push(tmp9);
                  combined = tmp4;
                }
              } else if (applyResult) {
                let items = [tmp4];
                combined = items.concat(tmp9);
              } else {
                combined = [tmp4, tmp9];
              }
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
        } else if (null == arr4) {
          c70 = tmp5;
        } else {
          let applyResult1 = isArray(tmp5);
          if (tmp21) {
            const push2 = arr4.push;
            if (applyResult1) {
              applyResult1 = push2.apply(arr4, tmp5);
              let combined1 = arr4;
            } else {
              applyResult1 = push2(tmp5);
              combined1 = arr4;
            }
          } else if (applyResult1) {
            const items1 = [arr4];
            combined1 = items1.concat(tmp5);
          } else {
            combined1 = [arr4, tmp5];
          }
          tmp21 = isArray(arr4);
        }
      }
      c70 = null;
      if (c70) {
        const _Array = Array;
        if (Array.isArray(arr7)) {
          const item = arr7.forEach(executeDispatchesAndReleaseTopLevel, undefined);
        } else if (arr7) {
          const call = executeDispatchesAndReleaseTopLevel.call;
          if (typeof call === "unknown") {
            if (arr7) {
              ({ _dispatchListeners, _dispatchInstances } = arr7);
              if (isArray(_dispatchListeners)) {
                if (0 < _dispatchListeners.length) {
                  let num2 = 0;
                  if (!arr7.isPropagationStopped()) {
                    executeDispatch(arr7, _dispatchListeners[num2], _dispatchInstances[num2]);
                    const sum = num2 + 1;
                    while (sum < _dispatchListeners.length) {
                      num2 = sum;
                      if (arr7.isPropagationStopped()) {
                        break;
                      }
                    }
                  }
                }
              } else if (_dispatchListeners) {
                executeDispatch(arr7, _dispatchListeners, _dispatchInstances);
              }
              arr7._dispatchListeners = null;
              arr7._dispatchInstances = null;
              if (!arr7.isPersistent()) {
                const constructor = arr7.constructor;
                constructor.release(arr7);
              }
            }
          } else {
            call(undefined, arr7);
          }
        }
        if (c70) {
          const _Error = Error;
          throw Error("processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.");
        } else if (c30) {
          c30 = false;
          c31 = null;
          throw c31;
        }
      }
    });
  });
}
let closure_361 = { isInAParentText: true };
let c363 = 0;
let _queueMicrotask = setTimeout;
let closure_366 = { $$typeof: forResult, Provider: null, Consumer: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
let prop = typeof globalThis.RN$enableMicrotasksInReact !== "undefined";
if (typeof globalThis.RN$enableMicrotasksInReact !== "undefined") {
  prop = globalThis.RN$enableMicrotasksInReact;
}
if (typeof queueMicrotask === "function") {
  _queueMicrotask = queueMicrotask;
}
z = function z(arg0) {

};
A = function A(arg0) {

};
N = function N(stateNode) {
  stateNode = stateNode.stateNode;
  if (null != stateNode.canonical) {
    if (null == stateNode.canonical.publicInstance) {
      const obj = get_BatchedBridge;
      const nativeTag = stateNode.canonical.nativeTag;
      const viewConfig = stateNode.canonical.viewConfig;
      const internalInstanceHandle = stateNode.canonical.internalInstanceHandle;
      const publicRootInstance = stateNode.canonical.publicRootInstance;
      let tmp2 = null;
      if (null != publicRootInstance) {
        tmp2 = publicRootInstance;
      }
      stateNode.canonical.publicInstance = obj.createPublicInstance(nativeTag, viewConfig, internalInstanceHandle, tmp2);
      stateNode.canonical.publicRootInstance = null;
    }
    let publicInstance = stateNode.canonical.publicInstance;
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
const injection = obj3.injection;
let result2 = injection.injectGlobalResponderHandler({
  onChange(stateNode, stateNode2) {
    if (stateNode) {
      stateNode = stateNode.stateNode;
    }
    let flag = arg2;
    if (stateNode) {
      let flag2 = flag;
      if (!flag) {
        flag2 = false;
      }
      globalThis.nativeFabricUIManager.setIsJSResponder(stateNode.stateNode.node, false, flag2);
    }
    if (stateNode2) {
      stateNode2 = stateNode2.stateNode;
    }
    if (stateNode2) {
      if (!flag) {
        flag = false;
      }
      globalThis.nativeFabricUIManager.setIsJSResponder(stateNode2.stateNode.node, true, flag);
    }
  }
});
if (typeof get_BatchedBridge.ReactFiberErrorDialog.showErrorDialog !== "function") {
  let _Error2 = Error;
  throw Error("Expected ReactFiberErrorDialog.showErrorDialog to be a function.");
} else {
  batchedUpdatesImpl = function batchedUpdatesImpl(fn, closure_0) {
    c277 = c277 | 1;
    try {
      c277 = tmp2;
      if (0 === tmp2) {
        closure_297 = peek.unstable_now() + 500;
        flushSyncWorkAcrossRoots_impl(0, true);
      }
      return fn(closure_0);
    } catch (tmp10) {
      c277 = tmp;
      if (0 === tmp) {
        closure_297 = peek.unstable_now() + 500;
        flushSyncWorkAcrossRoots_impl(0, true);
      }
      throw tmp10;
    }
  };
  let _Map = Map;
  let obj13 = { bundleType: 0, version: "19.2.3", rendererPackageName: "react-native-renderer", currentDispatcherRef: null, reconcilerVersion: "19.2.3" };
  obj13[3] = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  obj13.rendererConfig = obj11;
  if (typeof globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
    __REACT_DEVTOOLS_GLOBAL_HOOK__2 = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__.isDisabled) {
      if (__REACT_DEVTOOLS_GLOBAL_HOOK__2.supportsFiber) {
        try {
          closure_72 = __REACT_DEVTOOLS_GLOBAL_HOOK__2.inject(obj13);
        } catch (err) {
        }
      }
    }
  }
  exports.createPortal = (arg0, arg1) => {
    let tmp = null;
    if (2 < arguments.length) {
      tmp = null;
      if (undefined !== arguments[2]) {
        tmp = arguments[2];
      }
    }
    return (function createPortal$1(arg0, arg1, arg2, arg3) {
      let tmp = null;
      if (3 < arguments.length) {
        tmp = null;
        if (undefined !== arguments[3]) {
          tmp = arguments[3];
        }
      }
      const obj = { $$typeof: closure_14, key: null, children: null, containerInfo: null, implementation: null };
      let text = null;
      if (null != tmp) {
        text = `${tmp}`;
      }
      obj[1] = text;
      obj[2] = arg0;
      obj[3] = arg1;
      obj[4] = arg2;
      return obj;
    })(arg0, arg1, null, tmp);
  };
  class SyntheticEvent {
    constructor(arg0, arg1, arg2, arg3) {
      obj = { dispatchConfig: global, _targetInst: require, nativeEvent: importDefault, _dispatchListeners: null, _dispatchInstances: null };
      Interface = obj.constructor.Interface;
      for (const key10014 in Interface) {
        tmp2 = key10014;
        if (!Interface.hasOwnProperty(key10014)) {
          continue;
        } else {
          tmp = Interface[key10014];
          if (tmp) {
            obj[key10014] = tmp(arg2);
            continue;
          } else {
            if ("target" === key10014) {
              obj.target = arg3;
              continue;
            } else {
              obj[key10014] = arg2[key10014];
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      if (null != importDefault.defaultPrevented) {
        defaultPrevented = importDefault.defaultPrevented;
      } else {
        flag = false;
        defaultPrevented = false === importDefault.returnValue;
      }
      obj.isDefaultPrevented = defaultPrevented ? functionThatReturnsTrue : functionThatReturnsFalse;
      obj.isPropagationStopped = functionThatReturnsFalse;
      return obj;
    }
  }
  exports.findHostInstance_DEPRECATED = (arg0) => {
    canonical = arg0;
    if (null == arg0) {
      return null;
    } else {
      if (!canonical.canonical) {
        publicInstance = canonical;
        if (!canonical._nativeTag) {
          publicInstance = findHostInstance(canonical);
        }
      }
      ({ canonical, publicInstance } = canonical);
    }
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
      let nativeTagFromPublicInstance = get_BatchedBridge.getNativeTagFromPublicInstance(_nativeTag);
      if (!nativeTagFromPublicInstance) {
        const tmp5 = findHostInstance(_nativeTag);
        if (null == tmp5) {
          nativeTagFromPublicInstance = tmp5;
        } else if (null != tmp5._nativeTag) {
          _nativeTag = tmp5._nativeTag;
        } else {
          _nativeTag = get_BatchedBridge.getNativeTagFromPublicInstance(tmp5);
          const tmpResult = get_BatchedBridge;
        }
      }
      return nativeTagFromPublicInstance;
    }
  };
  exports.getNodeFromInternalInstanceHandle = (stateNode) => {
    let node = stateNode;
    if (stateNode) {
      node = stateNode.stateNode;
    }
    if (node) {
      node = stateNode.stateNode.node;
    }
    return node;
  };
  exports.getPublicInstanceFromInternalInstanceHandle = (stateNode) => {
    stateNode = stateNode.stateNode;
    if (null == stateNode) {
      return null;
    } else if (6 === stateNode.tag) {
      if (tmp == stateNode.publicInstance) {
        stateNode.publicInstance = get_BatchedBridge.createPublicTextInstance(stateNode);
      }
      let publicInstance = stateNode.publicInstance;
    } else {
      const stateNode2 = stateNode.stateNode;
      if (tmp != stateNode2.canonical) {
        if (tmp == stateNode2.canonical.publicInstance) {
          obj2 = get_BatchedBridge;
          const nativeTag = stateNode2.canonical.nativeTag;
          const viewConfig = stateNode2.canonical.viewConfig;
          const internalInstanceHandle = stateNode2.canonical.internalInstanceHandle;
          const publicRootInstance = stateNode2.canonical.publicRootInstance;
          let tmp3 = null;
          if (tmp != publicRootInstance) {
            tmp3 = publicRootInstance;
          }
          stateNode2.canonical.publicInstance = obj2.createPublicInstance(nativeTag, viewConfig, internalInstanceHandle, tmp3);
          stateNode2.canonical.publicRootInstance = tmp;
        }
        publicInstance = stateNode2.canonical.publicInstance;
      } else {
        if (tmp != stateNode2.containerInfo) {
          if (tmp != stateNode2.containerInfo.publicInstance) {
            publicInstance = stateNode2.containerInfo.publicInstance;
          }
        }
        publicInstance = null;
        if (tmp != stateNode2._nativeTag) {
          publicInstance = stateNode2;
        }
      }
    }
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
  exports.render = (element, arg1, arg2, arg3, onUncaughtError) => {
    let obj = map;
    let value = map.get(arg1);
    if (!value) {
      onUncaughtError = nativeOnUncaughtError;
      let onCaughtError = nativeOnCaughtError;
      let onRecoverableError = defaultOnRecoverableError;
      let tmp3 = onUncaughtError;
      if (onUncaughtError) {
        tmp3 = undefined !== onUncaughtError.onUncaughtError;
      }
      if (tmp3) {
        onUncaughtError = onUncaughtError.onUncaughtError;
      }
      let tmp4 = onUncaughtError;
      if (onUncaughtError) {
        tmp4 = undefined !== onUncaughtError.onCaughtError;
      }
      if (tmp4) {
        onCaughtError = onUncaughtError.onCaughtError;
      }
      let tmp5 = onUncaughtError;
      if (onUncaughtError) {
        tmp5 = undefined !== onUncaughtError.onRecoverableError;
      }
      if (tmp5) {
        onRecoverableError = onUncaughtError.onRecoverableError;
      }
      let tmp7 = FiberRootNode;
      obj = { publicInstance: null, containerTag: null };
      obj2 = get_BatchedBridge;
      obj[0] = obj2.createPublicRootInstance(arg1);
      obj[1] = arg1;
      let num2 = 0;
      if (arg3) {
        num2 = 1;
      }
      obj = Object.create(tmp7.prototype);
      tmp7 = new tmp7(obj, num2, false, "", onUncaughtError, onCaughtError, onRecoverableError, nativeOnDefaultTransitionIndicator, null);
      let num4 = 0;
      if (1 === num2) {
        num4 = 1;
      }
      Object.create(FiberNode.prototype);
      obj2 = { tag: 3, key: null, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: null, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: num4, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null };
      obj.current = obj2;
      obj2.stateNode = obj;
      obj3 = { controller: null, data: null, refCount: 0 };
      const tmp27 = new closure_106();
      obj3[0] = tmp27;
      const _Map = Map;
      map = new Map();
      obj3[1] = map;
      obj3.refCount = obj3.refCount + 1;
      obj.pooledCache = obj3;
      obj3.refCount = obj3.refCount + 1;
      const obj4 = { element: null, isDehydrated: false, cache: null };
      obj4[2] = obj3;
      obj2.memoizedState = obj4;
      obj5 = { baseState: null, firstBaseUpdate: null, lastBaseUpdate: null, shared: null, callbacks: null };
      obj5[0] = obj2.memoizedState;
      obj5[3] = { pending: null, lanes: 0, hiddenCallbacks: null };
      obj2.updateQueue = obj5;
      const result = obj.set(arg1, obj);
      value = obj;
    }
    updateContainer(element, value, 0, arg2);
    const current = value.current;
    let stateNode = null;
    if (current.child) {
      const tag = current.child.tag;
      if (27 !== tag) {
        if (5 !== tag) {
          stateNode = current.child.stateNode;
        }
      }
      canonical = current.child.stateNode;
      if (null != canonical.canonical) {
        if (null == canonical.canonical.publicInstance) {
          obj8 = get_BatchedBridge;
          const nativeTag = canonical.canonical.nativeTag;
          const viewConfig = canonical.canonical.viewConfig;
          const internalInstanceHandle = canonical.canonical.internalInstanceHandle;
          const publicRootInstance = canonical.canonical.publicRootInstance;
          let tmp37 = null;
          if (null != publicRootInstance) {
            tmp37 = publicRootInstance;
          }
          canonical.canonical.publicInstance = obj8.createPublicInstance(nativeTag, viewConfig, internalInstanceHandle, tmp37);
          canonical.canonical.publicRootInstance = null;
        }
        ({ canonical, publicInstance } = canonical);
      } else {
        if (null != canonical.containerInfo) {
          if (null != canonical.containerInfo.publicInstance) {
            publicInstance = canonical.containerInfo.publicInstance;
          }
        }
        publicInstance = null;
        if (null != canonical._nativeTag) {
          publicInstance = canonical;
        }
      }
    }
    return stateNode;
  };
  exports.sendAccessibilityEvent = (_nativeTag) => {
    if (null != _nativeTag._nativeTag) {
      _nativeTag = _nativeTag._nativeTag;
    } else {
      _nativeTag = get_BatchedBridge.getNativeTagFromPublicInstance(_nativeTag);
    }
    if (null != _nativeTag) {
      const nodeFromPublicInstance = get_BatchedBridge.getNodeFromPublicInstance(_nativeTag);
      if (null != nodeFromPublicInstance) {
        const result = globalThis.nativeFabricUIManager.sendAccessibilityEvent(nodeFromPublicInstance, arg1);
      } else {
        const result1 = get_BatchedBridge.legacySendAccessibilityEvent(_nativeTag, arg1);
        const tmp4Result = get_BatchedBridge;
      }
    }
  };
  exports.stopSurface = (arg0) => {
    closure_0 = arg0;
    const value = map.get(arg0);
    dependencyMap = value;
    if (value) {
      updateContainer(null, value, 0, () => {
        value.containerInfo.publicInstance = null;
        map.delete(closure_0);
      });
    }
  };
  exports.unmountComponentAtNode = function(arg0) {
    this.stopSurface(arg0);
  };
  let map = new Map();
}
obj4 = {
  injectGlobalResponderHandler(GlobalResponderHandler) {
    obj3.GlobalResponderHandler = GlobalResponderHandler;
  }
};
obj7 = {
  eventTypes: {},
  extractEvents(event) {
    let _return;
    let tmp24;
    if (null == arg1) {
      return null;
    } else {
      if (!customBubblingEventTypes[event]) {
        if (!tmp30) {
          const _Error = Error;
          throw Error("Unsupported top level event type \"" + event + "\" dispatched");
        }
      }
      let tmp3 = tmp28;
      if (!customBubblingEventTypes[event]) {
        tmp3 = tmp30;
      }
      const pooled = SyntheticEvent.getPooled(tmp3, arg1, arg2, arg3);
      if (customBubblingEventTypes[event]) {
        if (null != pooled) {
          if (null != pooled.dispatchConfig.phasedRegistrationNames) {
            if (pooled.dispatchConfig.phasedRegistrationNames.skipBubbling) {
              let phasedRegistrationNames = pooled;
              if (pooled) {
                phasedRegistrationNames = pooled.dispatchConfig.phasedRegistrationNames;
              }
              if (phasedRegistrationNames) {
                let _targetInst = pooled._targetInst;
                const items = [];
                if (_targetInst) {
                  items.push(_targetInst);
                  let tmp19 = _targetInst;
                  do {
                    _return = tmp19.return;
                    while (_return) {
                      tmp19 = _return;
                      if (5 === _return.tag) {
                        break;
                      }
                    }
                    if (!_return) {
                      _return = null;
                    }
                    _targetInst = _return;
                  } while (_return);
                }
                let diff = tmp21 - 1;
                if (0 < +items.length) {
                  do {
                    let tmp17Result = accumulateDirectionalDispatches(items[diff], "captured", pooled);
                    tmp24 = +diff;
                    diff = tmp24 - 1;
                  } while (0 < tmp24);
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
          const call2 = accumulateTwoPhaseDispatchesSingle.call;
          if (typeof call2 === "unknown") {
            accumulateTwoPhaseDispatchesSingle(pooled);
          } else {
            call2(undefined, pooled);
          }
        }
      } else if (tmp30) {
        const _Array = Array;
        if (Array.isArray(pooled)) {
          const item1 = pooled.forEach(accumulateDirectDispatchesSingle, undefined);
        } else if (pooled) {
          const call = accumulateDirectDispatchesSingle.call;
          if (typeof call === "unknown") {
            accumulateDirectDispatchesSingle(pooled);
          } else {
            call(undefined, pooled);
          }
        }
      } else {
        return null;
      }
      return pooled;
    }
  }
};