// _runtime/00117_describeBuiltInComponentFrame.js
import setUpDefaltReactNativeEnvironment from "setUpDefaltReactNativeEnvironment";
import { __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE } from "noop";
import closure_158 from "setUpDefaltReactNativeEnvironment";
import closure_162 from "setUpDefaltReactNativeEnvironment";
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
      const str = tmp2.stack;
      const str2 = tmp2.stack.trim();
    }
  }
}
function describeNativeComponentFrame(type, arg1) {
  let closure_0 = type;
  let closure_1 = arg1;
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
                if (typeof tmp2.call === "unknown") {
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
                const prototype = tmp2.prototype;
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
                  let tmp20 = parts;
                  let tmp21 = num2;
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
                  let tmp29 = parts1;
                  let tmp30 = num3;
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
                      let tmp45 = num3;
                      if (0 > num3) {
                        break;
                      } else {
                        let tmp46 = parts;
                        let tmp47 = num2;
                        let tmp48 = parts1;
                        let tmp49 = num3;
                        if (arr2[num2] === parts1[num3]) {
                          break;
                        }
                      }
                    }
                  }
                }
              }
            }
            if (1 <= num2) {
              if (0 <= num3) {
                while (arr2[num2] === parts1[num3]) {
                  let tmp55 = num2;
                  let diff1 = num2 - 1;
                  num2 = diff1;
                  let tmp57 = num3;
                  num3 = num3 - 1;
                  if (1 <= diff1) {
                    let tmp58 = num3;
                  }
                }
                if (1 !== num2) {
                  num2 = num2 - 1;
                  const diff2 = num3 - 1;
                  num3 = diff2;
                  while (0 <= diff2) {
                    let tmp64 = parts;
                    let tmp65 = num2;
                    let tmp66 = parts1;
                    let tmp67 = num3;
                    if (arr2[num2] !== parts1[num3]) {
                      break;
                    } else {
                      let tmp68 = num2;
                      if (1 <= num2) {
                        let tmp69 = num3;
                      }
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
      let tmp2 = str;
      let tmp3 = describeFiber;
      let tmp4 = _return;
      let tmp5 = tmp;
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
      const tmp14 = type.displayName || type.name || null;
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
      let c31 = tmp3;
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
  let timeStamp;
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
      const tmp2 = timestampForTouch;
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
    const tmp2 = obj1;
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
    const tmp2 = obj1;
  }
}
function accumulateDirectionalDispatches$1(stateNode, arg1, _dispatchListeners) {
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
          let tmp3Result = tmp3(items[diff], "captured", dispatchConfig);
          tmp10 = +diff;
          diff = tmp10 - 1;
        } while (0 < tmp10);
      }
      let num4 = 0;
      if (0 < items.length) {
        do {
          tmp3Result = tmp3(items[num4], "bubbled", dispatchConfig);
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
        let tmpResult = tmp(items[diff], "captured", dispatchConfig);
        tmp8 = +diff;
        diff = tmp8 - 1;
      } while (0 < tmp8);
    }
    let num4 = 0;
    if (0 < items.length) {
      do {
        tmpResult = tmp(items[num4], "bubbled", dispatchConfig);
        num4 = num4 + 1;
        length = items.length;
      } while (num4 < length);
    }
  }
}
function accumulateDirectionalDispatches(stateNode, arg1, _dispatchListeners) {
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
        let tmpResult = tmp(items[diff], "captured", dispatchConfig);
        tmp8 = +diff;
        diff = tmp8 - 1;
      } while (0 < tmp8);
    }
    let num4 = 0;
    if (0 < items.length) {
      do {
        tmpResult = tmp(items[num4], "bubbled", dispatchConfig);
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
function batchedUpdatesImpl(arg0, arg1) {
  return arg0(arg1);
}
function executeDispatchesAndReleaseTopLevel(isPropagationStopped) {
  let _dispatchInstances;
  let _dispatchListeners;
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
    if (typeof obj.setStrictMode === "function") {
      try {
        obj.setStrictMode(closure_72, arg0);
      } catch (err) {
      }
    }
  }
}
function getNextLanes(pendingLanes) {
  let pingedLanes;
  let suspendedLanes;
  let warmLanes;
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
      if (0 !== arg1) {
        tmp8 = num14;
        if (arg1 !== num14) {
          tmp8 = num14;
          if (!(arg1 & suspendedLanes)) {
            if ((num14 & -num14) >= (arg1 & -arg1)) {
              tmp8 = arg1;
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
function pushHostContainer(current, current2) {
  const sum = sum3 + 1;
  sum3 = sum;
  closure_85[sum] = ref3.current;
  ref3.current = current2;
  const sum1 = sum3 + 1;
  sum3 = sum1;
  closure_85[sum1] = ref2.current;
  ref2.current = current;
  const sum2 = sum3 + 1;
  sum3 = sum2;
  closure_85[sum2] = ref.current;
  ref.current = null;
  let tmp7 = sum3;
  if (0 <= sum3) {
    tmp4.current = tmp2[sum3];
    tmp2[sum3] = null;
    const diff = sum3 - 1;
    sum3 = diff;
    tmp7 = diff;
  }
  sum3 = tmp7 + 1;
  closure_85[sum3] = ref.current;
  ref.current = closure_361;
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
function popHostContext(arg0) {
  if (ref2.current === arg0) {
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
  if (ref4.current === arg0) {
    if (0 <= closure_86) {
      tmp14.current = dependencyMap3[tmp15];
      dependencyMap3[closure_86] = null;
      closure_86 = closure_86 - 1;
    }
    closure_366._currentValue2 = null;
  }
}
function propagateContextChanges(child, arg1, c286, arg3) {
  child = child.child;
  if (null !== child) {
    child.return = child;
  }
  if (null !== child) {
    while (true) {
      let dependencies = child.dependencies;
      let tmp2 = child;
      if (null !== dependencies) {
        let child2 = child.child;
        let iter = dependencies.firstContext;
        child = child2;
        if (null !== iter) {
          while (true) {
            let tmp7 = iter;
            let num = 0;
            if (0 < arg1.length) {
              let tmp8 = num;
              while (iter.context !== arg1[num]) {
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
                  let tmp9 = _return2;
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
              let tmp4 = _return;
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
          let tmp12 = _return3;
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
      let tmp3 = flag;
      let tmp4 = _return;
      let tmp5 = tmp;
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
          let tmp20 = globalThis;
          let _Error2 = Error;
          let str2 = "Should have a current fiber. This is a bug in React.";
          throw Error("Should have a current fiber. This is a bug in React.");
        } else {
          let iter = alternate.memoizedProps;
          let tmp6 = tmp;
          if (null !== iter) {
            let type = _return.type;
            let tmp11 = is;
            tmp6 = tmp;
            if (!is(_return.pendingProps.value, iter.value)) {
              if (null !== tmp) {
                let arr = tmp.push(type);
                let items = tmp;
              } else {
                items = [type];
              }
              let tmp13 = items;
            }
          }
        }
      } else {
        let tmp21 = ref4;
        tmp6 = tmp;
        if (_return === ref4.current) {
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
                let tmp8 = closure_366;
                arr = tmp.push(closure_366);
                let items1 = tmp;
              } else {
                let tmp7 = closure_366;
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
function releaseCache(refCount) {
  const _require = refCount;
  refCount.refCount = refCount.refCount - 1;
  if (0 === refCount.refCount) {
    const result = _peek.unstable_scheduleCallback(_peek.unstable_NormalPriority, () => {
      const controller = pooledCache.controller;
      controller.abort();
    });
    const obj = _peek;
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
      let closure_110 = next;
    } else {
      tmp3.next = next;
      closure_111 = next;
    }
  }
  let c113 = true;
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
      const obj = peek;
    }
  }
}
function flushSyncWorkAcrossRoots_impl(arg0, arg1) {
  let pingedLanes;
  let suspendedLanes;
  if (!c114) {
    if (c113) {
      c114 = true;
      while (true) {
        let iter = c110;
        let flag3 = false;
        let flag4 = false;
        if (null !== c110) {
          while (true) {
            let tmp4 = iter;
            let tmp5 = flag3;
            if (!arg1) {
              {
                let tmp25 = c278;
                let num9 = 0;
                let tmp24 = getNextLanes;
                if (iter === c278) {
                  num9 = c280;
                }
                let tmp6 = null !== iter.cancelPendingCommit || -1 !== iter.timeoutHandle;
                let tmp24Result = tmp24(iter, num9, tmp6);
                let tmp8 = 3 & tmp24Result;
                let tmp9 = !tmp8;
                if (tmp8) {
                  tmp9 = !(iter.pendingLanes & ~iter.suspendedLanes & ~iter.pingedLanes & tmp24Result);
                }
                let flag5 = flag3;
                if (!tmp9) {
                  let tmp10 = flushMutationEffects;
                  let tmp11 = flushMutationEffects();
                  let tmp12 = flushLayoutEffects;
                  let tmp13 = flushLayoutEffects();
                  let tmp14 = flushSpawnedWork;
                  let tmp15 = flushSpawnedWork();
                  let tmp16 = flushPassiveEffects;
                  flag5 = true;
                  if (!flushPassiveEffects()) {
                    let tmp17 = performWorkOnRoot;
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
          let tmp20 = clz32Fallback;
          ({ suspendedLanes, pingedLanes } = iter);
          let tmp21 = (1 << 31 - clz32Fallback(tmp3) + 1) - 1 & (tmp19 & ~suspendedLanes & ~pingedLanes);
          let tmp22 = 201326741 & tmp21;
          if (tmp22) {
            let num10 = tmp22 | 1;
          } else {
            num10 = 0;
            if (tmp21) {
              num10 = 2 | tmp21;
            }
          }
          let tmp23 = num10;
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
  let c110;
  let next;
  let c112 = false;
  let c113 = false;
  peek;
  let iter = c110;
  let tmp3 = null;
  if (null !== c110) {
    do {
      next = iter.next;
      let tmp4 = scheduleTaskForRootDuringMicrotask;
      let tmp5 = scheduleTaskForRootDuringMicrotask(iter, tmp2);
      let tmp6 = iter;
      let tmp7 = tmp3;
      if (0 === tmp5) {
        iter.next = null;
        if (null === tmp3) {
          c110 = next;
        } else {
          tmp3.next = next;
        }
        let tmp8 = tmp3;
        if (null === next) {
          let c111 = tmp3;
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
      let tmp4 = clz32Fallback;
      let diff = 31 - clz32Fallback(tmp3);
      tmp6 = 1 << diff;
      let tmp7 = expirationTimes[diff];
      let tmp8 = tmp3;
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
              const obj = peek;
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
            const obj2 = peek;
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
    const obj4 = peek;
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
    const obj = peek;
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
      let c124 = 0;
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
                  let tmp2 = hasOwnProperty;
                  let call = hasOwnProperty.call;
                  let tmp3 = num;
                  if (!(typeof call === "unknown" ? tmp2(tmp) : call(obj2, tmp))) {
                    break;
                  } else {
                    let tmp4 = is;
                    if (!is(obj[tmp], obj2[tmp])) {
                      break;
                    } else {
                      num = num + 1;
                    }
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
function trackUsedThenable(arr, first, arg2) {
  let closure_0 = first;
  if (undefined === arr[arg2]) {
    arr.push(first);
    let iter = first;
  } else {
    iter = first;
    if (tmp !== first) {
      first.then(noop, noop);
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
      iter.then((value) => {
        if ("pending" === closure_0.status) {
          tmp.status = "fulfilled";
          tmp.value = value;
        }
      }, (reason) => {
        if ("pending" === closure_0.status) {
          tmp.status = "rejected";
          tmp.reason = reason;
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
function resolveLazy(_init) {
  try {
    return _init._init(_init._payload);
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
  let c143 = 0;
  let c144 = 0;
  let num = 0;
  if (0 < c143) {
    while (true) {
      let tmp2 = dependencyMap4;
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
        let tmp9 = markUpdateLaneFromFiberToRoot;
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
  let closure_143 = tmp + 1;
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
  let closure_143 = tmp2 + 1;
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
    let c308 = null;
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
function enqueueConcurrentRenderForLane(lanes, arg1) {
  let tmp = lanes;
  let closure_143 = tmp2 + 1;
  closure_142[+closure_143] = lanes;
  closure_143 = tmp3 + 1;
  closure_142[+closure_143] = null;
  closure_143 = tmp4 + 1;
  closure_142[+closure_143] = null;
  closure_143 = tmp5 + 1;
  closure_142[+closure_143] = arg1;
  closure_144 = closure_144 | arg1;
  lanes.lanes = lanes.lanes | arg1;
  const alternate = lanes.alternate;
  if (null !== alternate) {
    alternate.lanes = alternate.lanes | arg1;
  }
  if (50 < c307) {
    c307 = 0;
    let c308 = null;
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
function markUpdateLaneFromFiberToRoot(lanes, arg1, c291) {
  let tmp = lanes;
  lanes.lanes = lanes.lanes | c291;
  const alternate = lanes.alternate;
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
        let c308 = null;
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
      let closure_143 = tmp3 + 1;
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
  let alternate;
  let tmp7;
  let updateQueue;
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
          let tmp4 = tmp;
          let tmp5 = tmp3;
          let tmp6 = iter;
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
function processUpdateQueue(updateQueue, memoizedProps, stateNode, c280) {
  let firstBaseUpdate;
  let lastBaseUpdate;
  let payload;
  let c153 = false;
  updateQueue = updateQueue.updateQueue;
  let c150 = false;
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
      let tmp6 = baseState;
      let tmp7 = tmp27;
      let tmp8 = tmp28;
      let tmp9 = tmp29;
      let tmp10 = iter2;
      let tmp11 = num;
      if (tmp5) {
        let tmp13 = c280;
        let tmp12 = (c280 & tmp4) === tmp4;
      } else {
        tmp12 = (c280 & tmp4) === tmp4;
      }
      if (tmp12) {
        let tmp18 = 0 !== tmp4;
        if (0 !== tmp4) {
          let tmp19 = c124;
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
            let tmp25 = typeof call2 === "unknown" ? payload2(baseState, memoizedProps) : call2(stateNode, baseState, memoizedProps);
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
          let tmp22 = payload;
          if (typeof payload === "function") {
            break;
          } else {
            tmp21 = baseState;
            if (null != payload) {
              let tmp24 = assign;
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
          let tmp30 = closure_288;
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
    typeof call === "unknown" ? payload(baseState, memoizedProps) : call(stateNode, baseState, memoizedProps);
  }
}
function callCallback(fn) {
  if (typeof fn !== "function") {
    const _Error = Error;
    throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + fn);
  } else {
    const call = fn.call;
    if (typeof call === "unknown") {
      fn();
    } else {
      call(arg1);
    }
  }
}
function commitCallbacks(updateQueue, arg1) {
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
          let callResult = call(arg1);
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
  let sibling;
  let tmp = alternate4;
  if (null !== alternate4) {
    while (true) {
      let tmp2 = tmp;
      if (13 === tmp.tag) {
        let memoizedState = tmp.memoizedState;
        if (null !== memoizedState) {
          if (null === memoizedState.dehydrated) {
            return tmp;
          } else {
            let tmp6 = globalThis;
            let _Error = Error;
            let str = "The current renderer does not support hydration. This error is likely caused by a bug in React. Please file an issue.";
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
          let tmp5 = tmp3;
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
function renderWithHooks(memoizedState, updateQueue, render, pendingProps, ref, c280) {
  let c169;
  let closure_164 = c280;
  let closure_165 = updateQueue;
  updateQueue.memoizedState = null;
  updateQueue.updateQueue = null;
  updateQueue.lanes = 0;
  if (null !== memoizedState) {
    if (null !== memoizedState.memoizedState) {
      let tmp2 = obj9;
    }
    tmp.H = tmp2;
    let c170 = false;
    let tmp6 = render(pendingProps, ref);
    c170 = false;
    if (c169) {
      closure_165 = updateQueue;
      let num3 = 0;
      while (true) {
        let tmp8 = c169;
        let tmp9 = num3;
        if (c169) {
          let c172 = null;
        }
        let c171 = 0;
        c169 = false;
        if (25 <= num3) {
          break;
        } else {
          let c166 = null;
          let c167 = null;
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
          let tmp10 = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
          let tmp11 = obj10;
          __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = obj10;
          tmp6 = render(pendingProps, ref);
          let tmp12 = c169;
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
  let c164 = 0;
  let c165 = null;
  const _null3 = null;
  let c167 = null;
  let c168 = false;
  let c171 = 0;
  let c172 = null;
  if (tmp) {
    const _Error = Error;
    throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
  } else if (!tmp3) {
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
      let c222 = true;
    }
  }
  tmp = null !== _null3 && null !== _null3.next;
}
function TransitionAwareHostComponent() {
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
      const alternate = tmp6.alternate;
      if (null !== alternate) {
        if (null !== alternate.memoizedState) {
          let tmp7 = obj9;
        }
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = tmp7;
      }
      tmp7 = closure_210;
    }
    const tmp11 = closure_171;
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
        let tmp3 = iter;
        if (null !== queue) {
          queue.pending = null;
        }
        iter = iter.next;
      } while (null !== iter);
    }
    c168 = false;
  }
  let c164 = 0;
  let c165 = null;
  let c166 = null;
  let c167 = null;
  let c169 = false;
  let c171 = 0;
  let c172 = null;
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
function useThenable(first) {
  closure_171 = closure_171 + 1;
  let tmp2 = items;
  if (null === items) {
    items = [];
    tmp2 = items;
  }
  if (null !== (null === _null4 ? c165.memoizedState : _null4.next)) {
    return trackUsedThenable(tmp2, first, closure_171);
  } else {
    const alternate = tmp3.alternate;
    if (null !== alternate) {
      if (null !== alternate.memoizedState) {
        let tmp5 = obj9;
      }
      tmp4.H = tmp5;
    }
    tmp5 = closure_210;
  }
}
function basicStateReducer(arg0, fn) {
  let tmp = fn;
  if (typeof fn === "function") {
    tmp = fn(arg0);
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
        let tmp9 = iter2;
        let tmp10 = tmp3;
        let tmp11 = tmp4;
        let tmp12 = tmp5;
        let tmp8 = flag2;
        let tmp13 = tmp6;
        if (tmp7 !== iter2.lane) {
          let tmp16 = c280;
          let tmp15 = (c280 & tmp7) === tmp7;
        } else {
          let tmp14 = c164;
          tmp15 = (c164 & tmp7) === tmp7;
        }
        if (!tmp15) {
          let obj = { lane: null, revertLane: null, gesture: null, action: null, hasEagerState: null, eagerState: null, next: null };
          obj[0] = tmp7;
          ({ revertLane: obj[1], gesture: obj[2], action: obj[3], hasEagerState: obj[4], eagerState: obj[5] } = iter2);
          let tmp17 = obj;
          let tmp18 = tmp6;
          if (null !== tmp3) {
            tmp3.next = obj;
            tmp17 = tmp4;
            tmp18 = tmp5;
          }
          let tmp19 = _null2;
          _null2.lanes = _null2.lanes | tmp7;
          let tmp20 = closure_288;
          closure_288 = closure_288 | tmp7;
          let tmp21 = flag2;
          let tmp22 = tmp6;
          let next3 = iter2.next;
          let tmp42 = tmp8;
          let tmp43 = obj;
          let tmp44 = tmp17;
          let tmp45 = tmp18;
          let tmp46 = tmp13;
        }
        let revertLane = iter2.revertLane;
        if (0 === revertLane) {
          break;
        } else {
          let tmp51 = c164;
          if ((c164 & revertLane) === revertLane) {
            let next2 = iter2.next;
            let tmp27 = c124;
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
            let tmp48 = is;
            if (!is(tmp32, queue.memoizedState)) {
              let c222 = true;
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
            let tmp23 = obj;
            let tmp24 = tmp6;
            if (null !== tmp3) {
              tmp3.next = obj;
              tmp23 = tmp4;
              tmp24 = tmp5;
            }
            let tmp25 = _null2;
            _null2.lanes = _null2.lanes | revertLane;
            let tmp26 = closure_288;
            closure_288 = closure_288 | revertLane;
            let flag3 = flag2;
          }
          let action = iter2.action;
          let tmp35 = c170;
          if (c170) {
            let tmp36 = basicStateReducer(tmp6, action);
          }
          let tmp37 = iter2.hasEagerState ? iter2.eagerState : basicStateReducer(tmp6, action);
          let tmp38 = flag3;
          let tmp39 = obj;
          let tmp40 = tmp23;
          let tmp41 = tmp24;
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
      tmp23 = tmp4;
      tmp24 = tmp5;
      if (tmp7 === c124) {
        flag3 = true;
        obj = tmp33;
        tmp23 = tmp4;
        tmp24 = tmp5;
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
function subscribeToStore(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return arg2(() => {
    if (outer1_187(closure_1)) {
      const tmp3 = outer1_148(closure_0, 2);
      if (null !== tmp3) {
        outer1_310(tmp3, tmp, 2);
      }
      tmp = closure_0;
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
        tmp5(false);
        tmp4 = tmp11;
      } catch (tmp9) {
        tmp(false);
        throw tmp9;
      }
      tmp5 = setIsStrictModeForDevtools;
    }
  }
  tmp3.baseState = tmp4;
  tmp3.memoizedState = tmp4;
  tmp3.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: basicStateReducer, lastRenderedState: tmp4 };
  return tmp3;
}
function dispatchActionState(alternate, action) {
  alternate = alternate.alternate;
  let tmp2 = alternate === c165;
  if (!tmp2) {
    tmp2 = null !== alternate && alternate === tmp;
    const tmp4 = null !== alternate && alternate === tmp;
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
        arg2(true);
      } else {
        obj.isTransition = false;
      }
      arg3(obj);
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
  let action;
  let payload;
  ({ action, payload } = next);
  state = state.state;
  if (next.isTransition) {
    const T = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
    const obj = {};
    __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = obj;
    try {
      const actionResult = action(state, payload);
      const S = tmp13.S;
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
      tmp13.T = T;
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
  let closure_0 = pending;
  let closure_1 = listeners;
  if (null !== actionResult) {
    if (typeof actionResult === "object") {
      if (typeof actionResult.then === "function") {
        actionResult.then((value) => {
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
          closure_0.state = value;
          if (null !== closure_0.pending) {
            if (iter.next === iter) {
              tmp.pending = null;
            } else {
              const next = iter2.next;
              iter.next = next;
              outer1_190(tmp, next);
            }
          }
        }, (reason) => {
          let iter = closure_1;
          pending.pending = null;
          if (null !== pending.pending) {
            do {
              iter.status = "rejected";
              iter.reason = reason;
              let listeners = iter.listeners;
              let tmp3 = iter;
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
      let tmp2 = iter;
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
function pushSimpleEffect(arg0, inst, actionStateActionEffect, arg3) {
  let obj = { tag: 9, create: actionStateActionEffect, deps: null, inst, next: null };
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
function updateEffectImpl(arg0, arg1, imperativeHandleEffect, combined) {
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
        obj[1] = imperativeHandleEffect;
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
  obj = { tag: 1 | arg1, create: imperativeHandleEffect, deps: tmp2, inst, next: null };
  let updateQueue = _null2.updateQueue;
  if (null === updateQueue) {
    const obj1 = { lastEffect: null, events: null, stores: null, memoCache: null };
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
function imperativeHandleEffect(arg0, fn) {
  let closure_0 = fn;
  if (typeof fn === "function") {
    let closure_1 = fn(arg0());
    return () => {
      if (typeof closure_1 === "function") {
        tmp();
      } else {
        callback(null);
      }
    };
  } else if (null != fn) {
    fn.current = arg0();
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
          if (0 === c291) {
            if (536870912 & c280) {
              c291 = 536870912;
            } else {
              let c79 = tmp21;
              if (!(3932160 & c79 << 1)) {
                c79 = 262144;
              }
              c291 = c79;
              const tmp20 = c79;
            }
          }
          const current2 = closure_159.current;
          if (tmp4 !== current2) {
            current2.flags = current2.flags | 32;
          }
          _null2.lanes = _null2.lanes | c291;
          tmp4 = closure_288;
          closure_288 = closure_288 | c291;
          tmp = tmp(tmp16, memoizedState);
          let tmp7 = tmp16;
          if (!tmp) {
            let c222 = true;
            tmp7 = tmp16;
          }
        }
      }
      arg0.memoizedState = memoizedState;
      tmp16 = memoizedState;
    } else {
      if (42 & c164) {
        if (0 === c291) {
          if (536870912 & c280) {
            c291 = 536870912;
          } else {
            c79 = tmp11;
            if (!(3932160 & c79 << 1)) {
              c79 = 262144;
            }
            c291 = c79;
            const tmp10 = c79;
          }
        }
        const current = closure_159.current;
        if (tmp4 !== current) {
          current.flags = current.flags | 32;
        }
        _null2.lanes = _null2.lanes | c291;
        closure_288 = closure_288 | c291;
        tmp7 = memoizedState;
      }
      c222 = true;
      arg0.memoizedState = memoizedState;
      tmp7 = memoizedState;
    }
  }
}
function startTransition(alternate, pending, action, action) {
  let num = 8;
  if (0 !== num) {
    num = 8;
    if (8 > tmp5) {
      num = tmp5;
    }
  }
  const T = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
  let obj = {};
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = obj;
  dispatchOptimisticSetState(alternate, false, pending, action);
  try {
    const promise = arg4();
    const S = tmp6.S;
    if (null !== S) {
      tmp9(obj, promise);
    }
    if (null !== promise) {
      if (typeof promise === "object") {
        if (typeof promise.then === "function") {
          dispatchSetStateInternal(alternate, pending, (function chainThenableValue(promise, action) {
            let closure_0 = action;
            let closure_1 = [];
            const obj = {
              status: "pending",
              value: null,
              reason: null,
              then(arg0) {

              }
            };
            promise.then(() => {
              let length;
              obj.status = "fulfilled";
              obj.value = closure_0;
              let num = 0;
              if (0 < arr.length) {
                do {
                  let tmp = arr;
                  let tmp2 = closure_0;
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
                  let tmp = arr;
                  let tmp2 = arr[num](undefined);
                  num = num + 1;
                  length = arr.length;
                } while (num < length);
              }
            });
            return obj;
          })(promise, action), requestUpdateLane(alternate));
          const tmp25 = (function chainThenableValue(promise, action) {
            let closure_0 = action;
            let closure_1 = [];
            const obj = {
              status: "pending",
              value: null,
              reason: null,
              then(arg0) {

              }
            };
            promise.then(() => {
              let length;
              obj.status = "fulfilled";
              obj.value = closure_0;
              let num = 0;
              if (0 < arr.length) {
                do {
                  let tmp = arr;
                  let tmp2 = closure_0;
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
                  let tmp = arr;
                  let tmp2 = arr[num](undefined);
                  num = num + 1;
                  length = arr.length;
                } while (num < length);
              }
            });
            return obj;
          })(promise, action);
        }
        num = tmp5;
        let tmp31 = null !== T;
        if (tmp31) {
          tmp31 = null !== obj.types;
        }
        if (tmp31) {
          T.types = obj.types;
        }
        tmp6.T = T;
      }
    }
    dispatchSetStateInternal(alternate, pending, action, requestUpdateLane(alternate));
  } catch (tmp32) {
    num = tmp4;
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
            let tmp8 = clz32Fallback;
            let diff = 31 - clz32Fallback(tmp7);
            let tmp10 = 1 << diff;
            let tmp11 = tmp7;
            if (tmp10 & tmp6 | entanglements[diff] & tmp6) {
              entanglements[diff] = entanglements[diff] | tmp6;
            }
            tmp7 = tmp7 & ~tmp10;
          }
        }
      }
    }
    obj = { cache: null };
    obj = { controller: null, data: null, refCount: 0 };
    const tmp15 = new closure_106();
    obj[0] = tmp15;
    const _Map = Map;
    const map = new Map();
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
    const tmp5 = null !== alternate && alternate === tmp2;
  }
  if (tmp3) {
    let c168 = true;
    let c169 = true;
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
          let tmp15 = clz32Fallback;
          let diff = 31 - clz32Fallback(tmp14);
          let tmp17 = 1 << diff;
          let tmp18 = tmp14;
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
      let c78 = tmp4;
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
    const tmp8 = null !== alternate && alternate === tmp5;
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
    const tmp4 = null !== alternate && alternate === tmp;
  }
  return tmp2;
}
function enqueueRenderPhaseUpdate(pending, next) {
  let c168 = true;
  let c169 = true;
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
      let tmp5 = clz32Fallback;
      let diff = 31 - clz32Fallback(tmp4);
      let tmp7 = 1 << diff;
      let tmp8 = tmp4;
      if (tmp7 & tmp3 | entanglements[diff] & tmp3) {
        entanglements[diff] = entanglements[diff] | tmp3;
      }
      tmp4 = tmp4 & ~tmp7;
    }
  }
}
function checkShouldComponentUpdate(stateNode, defaultProps, obj, memoizedProps, memoizedState, memoizedState2, arg6) {
  stateNode = stateNode.stateNode;
  if (typeof stateNode.shouldComponentUpdate === "function") {
    let result = stateNode.shouldComponentUpdate(memoizedProps, memoizedState2, arg6);
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
                      let tmp5 = hasOwnProperty;
                      let call = hasOwnProperty.call;
                      let tmp6 = num;
                      flag = false;
                      if (!(typeof call === "unknown" ? tmp5(tmp4) : call(memoizedProps, tmp4))) {
                        break;
                      } else {
                        let tmp7 = is;
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
                        let tmp13 = hasOwnProperty;
                        let call2 = hasOwnProperty.call;
                        let tmp14 = num3;
                        flag2 = false;
                        if (!(typeof call2 === "unknown" ? tmp13(tmp12) : call2(memoizedState2, tmp12))) {
                          break;
                        } else {
                          let tmp15 = is;
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
function constructClassInstance(_reactInternals, contextType, memoizedProps) {
  let tmp = closure_87;
  contextType = contextType.contextType;
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
      if (null === tmp3) {
        const _Error = Error;
        throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      } else {
        obj = { lanes: 0, firstContext: null };
        obj[1] = obj;
        tmp3.dependencies = obj;
        tmp3.flags = tmp3.flags | 524288;
        tmp = _currentValue2;
      }
    } else {
      tmp4.next = obj;
      tmp = _currentValue2;
    }
  }
  const tmp6 = new contextType(memoizedProps, tmp);
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
function mountClassInstance(baseState, contextType, props, c280) {
  const stateNode = baseState.stateNode;
  stateNode.props = props;
  stateNode.state = baseState.memoizedState;
  stateNode.refs = {};
  baseState.updateQueue = { baseState: baseState.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  contextType = contextType.contextType;
  if (typeof contextType === "object") {
    if (null !== contextType) {
      const _currentValue2 = contextType._currentValue2;
      let obj = { context: null, memoizedValue: null, next: null };
      obj[0] = contextType;
      obj[1] = _currentValue2;
      if (null === obj) {
        if (null === tmp2) {
          const _Error = Error;
          throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        } else {
          obj = { lanes: 0, firstContext: null };
          obj[1] = obj;
          tmp2.dependencies = obj;
          tmp2.flags = tmp2.flags | 524288;
          let tmp = _currentValue2;
        }
      } else {
        tmp3.next = obj;
        tmp = _currentValue2;
      }
    }
    stateNode.context = tmp;
    stateNode.state = baseState.memoizedState;
    const getDerivedStateFromProps = contextType.getDerivedStateFromProps;
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
    const getDerivedStateFromProps2 = contextType.getDerivedStateFromProps;
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
      processUpdateQueue(baseState, props, stateNode, c280);
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
        let tmp12 = tmp5;
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
        let tmp13 = tmp11;
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
    const require = tmp4;
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
    const require = tmp6;
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      throw closure_0;
    });
  }
}
function updateForwardRef(updateQueue, dependencies, render, pendingProps, c280) {
  let tmp2 = pendingProps;
  if ("ref" in pendingProps) {
    const obj = {};
    tmp2 = obj;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp2 = obj;
      while (keys[tmp] !== undefined) {
        let tmp20 = tmp5;
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
  let closure_102 = dependencies;
  let c103 = null;
  dependencies = dependencies.dependencies;
  if (null !== dependencies) {
    dependencies.firstContext = null;
  }
  const tmp6 = renderWithHooks(updateQueue, dependencies, render.render, tmp2, dependencies.ref, c280);
  if (null !== updateQueue) {
    if (!c222) {
      dependencies.updateQueue = updateQueue.updateQueue;
      dependencies.flags = dependencies.flags & -2053;
      updateQueue.lanes = updateQueue.lanes & ~c280;
      return bailoutOnAlreadyFinishedWork(updateQueue, dependencies, c280);
    }
  }
  dependencies.flags = dependencies.flags | 1;
  if (null === updateQueue) {
    let tmp14 = callback4(dependencies, null, tmp6, c280);
  } else {
    tmp14 = callback3(dependencies, updateQueue.child, tmp6, c280);
  }
  dependencies.child = tmp14;
}
function updateMemoComponent(child, mode, type, pendingProps, c280) {
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
            let tmp15 = updateSimpleMemoComponent(child, mode, type, pendingProps, c280);
          }
          return tmp15;
        }
      }
    }
    const tmp20 = createFiberFromTypeAndProps(type.type, null, pendingProps, 0, mode.mode, c280);
    tmp20.ref = mode.ref;
    tmp20.return = mode;
    mode.child = tmp20;
    tmp15 = tmp20;
  } else {
    child = child.child;
    let tmp4 = child.lanes & c280;
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
          return bailoutOnAlreadyFinishedWork(child, mode, c280);
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
function updateSimpleMemoComponent(memoizedProps, ref, type, pendingProps, c280) {
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
                    let tmp3 = hasOwnProperty;
                    let call = hasOwnProperty.call;
                    let tmp4 = num;
                    flag = false;
                    if (!(typeof call === "unknown" ? tmp3(tmp2) : call(pendingProps, tmp2))) {
                      break;
                    } else {
                      let tmp5 = is;
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
        let c222 = false;
        ref.pendingProps = memoizedProps;
        let tmp10 = memoizedProps.lanes & c280;
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
          return bailoutOnAlreadyFinishedWork(memoizedProps, ref, c280);
        }
      }
    }
  }
  let closure_102 = ref;
  let c103 = null;
  const dependencies2 = ref.dependencies;
  if (null !== dependencies2) {
    dependencies2.firstContext = null;
  }
  const tmp12 = renderWithHooks(memoizedProps, ref, type, tmp, undefined, c280);
  if (null !== memoizedProps) {
    if (!c222) {
      ref.updateQueue = memoizedProps.updateQueue;
      ref.flags = ref.flags & -2053;
      memoizedProps.lanes = memoizedProps.lanes & ~c280;
      return bailoutOnAlreadyFinishedWork(memoizedProps, ref, c280);
    }
  }
  ref.flags = ref.flags | 1;
  if (null === memoizedProps) {
    let tmp20 = callback4(ref, null, tmp12, c280);
  } else {
    tmp20 = callback3(ref, memoizedProps.child, tmp12, c280);
  }
  ref.child = tmp20;
}
function updateOffscreenComponent(memoizedState, stateNode, c286, pendingProps) {
  const children = pendingProps.children;
  let tmp = null !== memoizedState;
  memoizedState = null;
  if (tmp) {
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
      tmp = num8;
      tmp = deferHiddenOffscreenComponent(memoizedState, stateNode, tmp94, c286, num8);
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
    ({ current: closure_85[tmp7], current: tmp.current } = tmp);
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
function retryActivityComponentWithoutHydrating(child, mode) {
  callback3(mode, child.child, null, arg2);
  const pendingProps = mode.pendingProps;
  let obj = { mode: pendingProps.mode, children: pendingProps.children };
  obj = Object.create(FiberNode.prototype);
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
  let closure_102 = dependencies;
  let c103 = null;
  dependencies = dependencies.dependencies;
  if (null !== dependencies) {
    dependencies.firstContext = null;
  }
  dependencies.updateQueue = null;
  let closure_165 = dependencies;
  let num = 0;
  while (true) {
    let tmp = c169;
    let tmp2 = num;
    if (c169) {
      let c172 = null;
    }
    let c171 = 0;
    c169 = false;
    if (25 <= num) {
      break;
    } else {
      let c166 = null;
      let c167 = null;
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
      let tmp3 = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      let tmp4 = obj10;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = obj10;
      let tmp5 = render(pendingProps, ref);
      let tmp6 = c169;
      if (c169) {
        continue;
      } else {
        let tmp7 = alternate;
        let tmp8 = c280;
        let tmp9 = finishRenderingHooks;
        let tmp10 = finishRenderingHooks(alternate);
        let tmp11 = null === alternate;
        if (!tmp11) {
          let tmp12 = c222;
          if (!c222) {
            dependencies.updateQueue = alternate.updateQueue;
            let num2 = -2053;
            dependencies.flags = dependencies.flags & -2053;
            alternate.lanes = alternate.lanes & ~c280;
            let tmp13 = bailoutOnAlreadyFinishedWork;
            return bailoutOnAlreadyFinishedWork(alternate, dependencies, c280);
          }
        }
        dependencies.flags = dependencies.flags | 1;
        if (tmp11) {
          let tmp19 = callback4;
          let tmp20 = dependencies;
          let tmp21 = null;
          let tmp22 = tmp5;
          let tmp23 = c280;
          let tmp18 = callback4(dependencies, null, tmp5, c280);
        } else {
          let tmp14 = callback3;
          let tmp15 = dependencies;
          let tmp16 = tmp5;
          let tmp17 = c280;
          tmp18 = callback3(dependencies, alternate.child, tmp5, c280);
        }
        dependencies.child = tmp18;
        let child = dependencies.child;
      }
    }
  }
  throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
}
function updateClassComponent(updateQueue, dependencies, defaultProps, memoizedProps, c280) {
  let memoizedProps2;
  let stateNode;
  let closure_102 = dependencies;
  let obj3 = null;
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
    let result = constructClassInstance(dependencies, defaultProps, memoizedProps);
    result = mountClassInstance;
    result = dependencies;
    result = defaultProps;
    result = memoizedProps;
    result = c280;
    result = mountClassInstance(dependencies, defaultProps, memoizedProps, c280);
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
        while (keys[result] !== undefined) {
          result = tmp58;
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
        while (keys1[result] !== undefined) {
          result = tmp64;
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
          const obj1 = { lanes: 0, firstContext: null };
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
          result = stateNode.componentWillReceiveProps(memoizedProps, tmp65);
        }
        if (typeof stateNode.UNSAFE_componentWillReceiveProps === "function") {
          result = stateNode.UNSAFE_componentWillReceiveProps(memoizedProps, tmp65);
        }
        if (stateNode.state !== stateNode.state) {
          closure_213.enqueueReplaceState(stateNode, stateNode.state, null);
        }
      }
    }
    let c150 = false;
    const memoizedState3 = dependencies.memoizedState;
    stateNode.state = memoizedState3;
    processUpdateQueue(dependencies, memoizedProps, stateNode, c280);
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
      result = getDerivedStateFromProps2(memoizedProps, memoizedState6);
      let tmp85 = memoizedState6;
      if (null != result) {
        tmp85 = assign({}, memoizedState6, result);
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
          result = stateNode.componentWillMount();
        }
        if (typeof stateNode.UNSAFE_componentWillMount === "function") {
          result = stateNode.UNSAFE_componentWillMount();
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
      const obj2 = {};
      tmp2 = obj2;
      const keys2 = Object.keys();
      if (keys2 !== undefined) {
        tmp2 = obj2;
        while (keys2[result] !== undefined) {
          result = tmp5;
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
        while (keys3[result] !== undefined) {
          result = tmp11;
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
          result = stateNode2.componentWillReceiveProps(memoizedProps, tmp12);
        }
        if (typeof stateNode2.UNSAFE_componentWillReceiveProps === "function") {
          result = stateNode2.UNSAFE_componentWillReceiveProps(memoizedProps, tmp12);
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
    processUpdateQueue(dependencies, memoizedProps, stateNode2, c280);
    if (c153) {
      if (null !== c125) {
        throw c125;
      }
    }
    let memoizedState2 = dependencies.memoizedState;
    if (memoizedProps === pendingProps) {
      if (memoizedState === memoizedState2) {
        result = c150;
        if (!c150) {
          if (null !== updateQueue) {
            if (null !== updateQueue.dependencies) {
              let iter = updateQueue.dependencies.firstContext;
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
            }
          }
          const componentDidUpdate = stateNode2.componentDidUpdate;
          let tmp31 = typeof componentDidUpdate !== "function";
          if (typeof componentDidUpdate === "function") {
            tmp31 = memoizedProps === updateQueue.memoizedProps && memoizedState === updateQueue.memoizedState;
            const tmp32 = memoizedProps === updateQueue.memoizedProps && memoizedState === updateQueue.memoizedState;
          }
          if (!tmp31) {
            dependencies.flags = dependencies.flags | 4;
          }
          const getSnapshotBeforeUpdate = stateNode2.getSnapshotBeforeUpdate;
          let tmp33 = typeof getSnapshotBeforeUpdate !== "function";
          if (typeof getSnapshotBeforeUpdate === "function") {
            tmp33 = memoizedProps === updateQueue.memoizedProps && memoizedState === updateQueue.memoizedState;
            const tmp34 = memoizedProps === updateQueue.memoizedProps && memoizedState === updateQueue.memoizedState;
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
      result = getDerivedStateFromProps(memoizedProps, memoizedState5);
      let tmp36 = memoizedState5;
      if (null != result) {
        tmp36 = assign({}, memoizedState5, result);
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
          result = stateNode2.componentWillUpdate(memoizedProps, memoizedState2, tmp12);
        }
        if (typeof stateNode2.UNSAFE_componentWillUpdate === "function") {
          result = stateNode2.UNSAFE_componentWillUpdate(memoizedProps, memoizedState2, tmp12);
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
        const tmp50 = memoizedProps === updateQueue.memoizedProps && memoizedState === updateQueue.memoizedState;
      }
      if (!tmp49) {
        dependencies.flags = dependencies.flags | 4;
      }
      const getSnapshotBeforeUpdate2 = stateNode2.getSnapshotBeforeUpdate;
      let tmp51 = typeof getSnapshotBeforeUpdate2 !== "function";
      if (typeof getSnapshotBeforeUpdate2 === "function") {
        tmp51 = memoizedProps === updateQueue.memoizedProps && memoizedState === updateQueue.memoizedState;
        const tmp52 = memoizedProps === updateQueue.memoizedProps && memoizedState === updateQueue.memoizedState;
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
  return finishClassComponent(updateQueue, dependencies, defaultProps, flag3, 0, c280);
}
function finishClassComponent(updateQueue, ref, getDerivedStateFromError, flag3, arg4, c280) {
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
      return bailoutOnAlreadyFinishedWork(tmp, ref, c280);
    }
  }
  let state = ref.stateNode;
  if (!(128 & ref.flags)) {
    let renderResult = state.render();
  } else {
    renderResult = null;
  }
  ref.flags = ref.flags | 1;
  if (null === tmp) {
    if (null === tmp) {
      let tmp13 = callback4(ref, null, renderResult, c280);
    } else {
      tmp13 = callback3(ref, tmp.child, renderResult, c280);
    }
    ref.child = tmp13;
    state = state.state;
    ref.memoizedState = state;
    const child = ref.child;
  }
  tmp = callback3(ref, tmp.child, null, c280);
  ref.child = tmp;
  ref.child = callback3(ref, null, renderResult, c280);
}
function updateSuspenseComponent(memoizedState, pendingProps, lanes) {
  let child7;
  let mode2;
  pendingProps = pendingProps.pendingProps;
  let sum = 128 & pendingProps.flags;
  let tmp2 = sum;
  if (!sum) {
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
      sum = closure_162;
      sum = sum11;
      sum = sum11 + 1;
      sum11 = sum;
      sum = closure_85;
      ({ current: closure_85[tmp], current: closure_162.current } = closure_162);
      sum = closure_159;
      sum = sum11;
      sum = sum11 + 1;
      sum11 = sum;
      ({ current: closure_85[tmp], current: closure_159.current } = closure_159);
      ({ mode: mode2, child: child7 } = pendingProps);
      let obj = { mode: "hidden", children: null };
      obj[1] = children;
      if (!(1 & mode2)) {
        if (null !== child7) {
          child7.childLanes = 0;
          child7.pendingProps = obj;
        }
        sum = FiberNode;
        sum = Object.create(FiberNode.prototype);
        obj = { tag: 7, key: null, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: tmp94, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: mode2, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
        child7.return = pendingProps;
        obj.return = pendingProps;
        child7.sibling = obj;
        pendingProps.child = child7;
        const child8 = pendingProps.child;
        const obj1 = { baseLanes: null, cachePool: null };
        obj1[0] = lanes;
        sum = closure_128;
        let pooledCache4 = closure_128.current;
        if (null === pooledCache4) {
          sum = _null6;
          pooledCache4 = _null6.pooledCache;
        }
        sum = null;
        if (null !== pooledCache4) {
          const obj2 = { parent: null, pool: null };
          sum = closure_107;
          obj2[0] = closure_107._currentValue2;
          obj2[1] = pooledCache4;
          sum = obj2;
        }
        obj1[1] = sum;
        child8.memoizedState = obj1;
        let num30 = 0;
        if (null !== memoizedState) {
          num30 = memoizedState.childLanes & ~lanes;
        }
        sum = num30;
        if (tmp6) {
          sum = c291;
          sum = num30 | c291;
        }
        child8.childLanes = sum;
        sum = closure_232;
        pendingProps.memoizedState = closure_232;
        if (null === child8.stateNode) {
          child8.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null };
        }
        let sibling = child8.sibling;
      }
      sum = FiberNode;
      sum = Object.create(FiberNode.prototype);
      const obj3 = { tag: 22, key: null, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: obj, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: mode2, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null };
      child7 = obj3;
    } else {
      const alternate4 = pendingProps.alternate;
      const sum1 = sum11 + 1;
      sum11 = sum1;
      closure_85[sum1] = closure_162.current;
      closure_162.current = 1 & closure_162.current;
      sum = sum11;
      sum = sum11 + 1;
      sum11 = sum;
      closure_85[sum] = closure_159.current;
      closure_159.current = pendingProps;
      sum = closure_160;
      sum = null === closure_160;
      if (sum) {
        sum = null === alternate4;
        if (!sum) {
          sum = closure_157;
          sum = null !== closure_157.current;
        }
        if (!sum) {
          sum = null !== alternate4.memoizedState;
        }
      }
      if (sum) {
        closure_160 = pendingProps;
      }
      const obj4 = { mode: "visible", children: null };
      obj4[1] = children;
      sum = FiberNode;
      sum = Object.create(FiberNode.prototype);
      sibling = { tag: 22, key: null, elementType: null, type: null, stateNode: null, return: pendingProps, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: obj4, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: pendingProps.mode, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null };
      pendingProps.child = sibling;
    }
    return sibling;
  } else {
    const memoizedState2 = memoizedState.memoizedState;
    if (null !== memoizedState2) {
      if (null !== memoizedState2.dehydrated) {
        if (sum) {
          if (256 & pendingProps.flags) {
            const alternate3 = pendingProps.alternate;
            const sum2 = sum11 + 1;
            sum11 = sum2;
            closure_85[sum2] = closure_162.current;
            closure_162.current = 1 & closure_162.current;
            const sum3 = sum11 + 1;
            sum11 = sum3;
            closure_85[sum3] = closure_159.current;
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
            const obj5 = { mode: "visible", children: null };
            obj5[1] = pendingProps.pendingProps.children;
            Object.create(FiberNode.prototype);
            const obj7 = { tag: 22, key: null, elementType: null, type: null, stateNode: null, return: pendingProps, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: obj5, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: pendingProps.mode, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null };
            pendingProps.child = obj7;
            obj7.flags = obj7.flags | 2;
            pendingProps.memoizedState = null;
            let sibling1 = obj7;
          } else if (null !== pendingProps.memoizedState) {
            const sum4 = sum11 + 1;
            sum11 = sum4;
            ({ current: closure_85[tmp71], current: closure_162.current } = closure_162);
            const sum5 = sum11 + 1;
            sum11 = sum5;
            ({ current: closure_85[tmp75], current: closure_159.current } = closure_159);
            pendingProps.child = memoizedState.child;
            pendingProps.flags = pendingProps.flags | 128;
            sibling1 = null;
          } else {
            sum = closure_162;
            sum = sum11;
            sum = sum11 + 1;
            sum11 = sum;
            sum = closure_85;
            ({ current: closure_85[tmp], current: closure_162.current } = closure_162);
            sum = closure_159;
            sum = sum11;
            sum = sum11 + 1;
            sum11 = sum;
            ({ current: closure_85[tmp], current: closure_159.current } = closure_159);
            const mode3 = pendingProps.mode;
            const obj8 = { mode: "visible", children: null };
            obj8[1] = pendingProps.children;
            sum = FiberNode;
            sum = Object.create(FiberNode.prototype);
            const obj9 = { tag: 22, key: null, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: obj8, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: mode3, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null };
            sum = Object.create(FiberNode.prototype);
            const obj10 = { tag: 7, key: null, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: pendingProps.fallback, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: mode3, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
            obj10.flags = obj10.flags | 2;
            obj9.return = pendingProps;
            obj10.return = pendingProps;
            obj9.sibling = obj10;
            pendingProps.child = obj9;
            if (1 & pendingProps.mode) {
              callback3(pendingProps, memoizedState.child, null, lanes);
            }
            const child6 = pendingProps.child;
            const obj11 = { baseLanes: null, cachePool: null };
            obj11[0] = lanes;
            let pooledCache3 = closure_128.current;
            if (null === pooledCache3) {
              pooledCache3 = _null6.pooledCache;
            }
            let tmp63 = null;
            if (null !== pooledCache3) {
              const obj12 = { parent: null, pool: null };
              obj12[0] = closure_107._currentValue2;
              obj12[1] = pooledCache3;
              tmp63 = obj12;
            }
            obj11[1] = tmp63;
            child6.memoizedState = obj11;
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
          const sum6 = sum11 + 1;
          sum11 = sum6;
          closure_85[sum6] = closure_162.current;
          closure_162.current = 1 & closure_162.current;
          const sum7 = sum11 + 1;
          sum11 = sum7;
          closure_85[sum7] = closure_159.current;
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
      const sum8 = sum11 + 1;
      sum11 = sum8;
      ({ current: closure_85[tmp23], current: closure_162.current } = closure_162);
      const sum9 = sum11 + 1;
      sum11 = sum9;
      ({ current: closure_85[tmp27], current: closure_159.current } = closure_159);
      const fallback = pendingProps.fallback;
      const mode = pendingProps.mode;
      const child2 = memoizedState.child;
      const sibling2 = child2.sibling;
      const obj13 = { mode: "hidden", children: null };
      obj13[1] = pendingProps.children;
      if (!(1 & mode)) {
        if (pendingProps.child !== child2) {
          let child3 = pendingProps.child;
          child3.childLanes = 0;
          child3.pendingProps = obj13;
          pendingProps.deletions = null;
        }
        if (null !== sibling2) {
          let obj14 = createWorkInProgress(sibling2, fallback);
        } else {
          sum = FiberNode;
          sum = Object.create(FiberNode.prototype);
          obj14 = { tag: 7, key: null, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: fallback, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
          obj14.flags = obj14.flags | 2;
        }
        obj14.return = pendingProps;
        child3.return = pendingProps;
        child3.sibling = obj14;
        pendingProps.child = child3;
        if (null === child3.stateNode) {
          child3.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null };
        }
        const sibling3 = child3.sibling;
        const child4 = pendingProps.child;
        memoizedState = memoizedState.child.memoizedState;
        if (null === memoizedState) {
          const obj15 = { baseLanes: null, cachePool: null };
          obj15[0] = lanes;
          let pooledCache2 = closure_128.current;
          if (null === pooledCache2) {
            pooledCache2 = _null6.pooledCache;
          }
          let tmp38 = null;
          if (null !== pooledCache2) {
            const obj16 = { parent: null, pool: null };
            obj16[0] = closure_107._currentValue2;
            obj16[1] = pooledCache2;
            tmp38 = obj16;
          }
          obj15[1] = tmp38;
          let obj19 = obj15;
        } else {
          let cachePool = memoizedState.cachePool;
          if (null !== cachePool) {
            const _currentValue2 = closure_107._currentValue2;
            if (cachePool.parent !== _currentValue2) {
              const obj17 = { parent: null, pool: null };
              obj17[0] = _currentValue2;
              obj17[1] = _currentValue2;
              cachePool = obj17;
            }
            let tmp33 = cachePool;
          } else {
            let pooledCache = closure_128.current;
            if (null === pooledCache) {
              pooledCache = _null6.pooledCache;
            }
            tmp33 = null;
            if (null !== pooledCache) {
              const obj18 = { parent: null, pool: null };
              obj18[0] = closure_107._currentValue2;
              obj18[1] = pooledCache;
              tmp33 = obj18;
            }
          }
          obj19 = { baseLanes: null, cachePool: null };
          obj19[0] = memoizedState.baseLanes | lanes;
          obj19[1] = tmp33;
        }
        child4.memoizedState = obj19;
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
      const tmp29 = createWorkInProgress(child2, obj13);
      tmp29.subtreeFlags = 65011712 & child2.subtreeFlags;
      child3 = tmp29;
    } else {
      const alternate = pendingProps.alternate;
      const sum10 = sum11 + 1;
      sum11 = sum10;
      closure_85[sum10] = closure_162.current;
      closure_162.current = 1 & closure_162.current;
      sum11 = sum11 + 1;
      closure_85[sum11] = closure_159.current;
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
function updateSuspenseListComponent(child, pendingProps) {
  let children;
  let revealOrder;
  let sibling;
  let tail;
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
    let tmp9 = callback4(pendingProps, null, children, arg2);
  } else {
    tmp9 = callback3(pendingProps, child.child, children, arg2);
  }
  pendingProps.child = tmp9;
  if (!(2 & current)) {
    if (null !== child) {
      if (128 & child.flags) {
        child = pendingProps.child;
        if (null !== child) {
          while (true) {
            let tmp15 = child;
            if (13 === child.tag) {
              if (null !== child.memoizedState) {
                child.lanes = child.lanes | arg2;
                let alternate6 = child.alternate;
                if (null !== alternate6) {
                  alternate6.lanes = alternate6.lanes | arg2;
                }
                let _return2 = child.return;
                if (null !== _return2) {
                  while (true) {
                    let alternate3 = _return2.alternate;
                    let tmp18 = _return2;
                    if ((_return2.childLanes & arg2) !== arg2) {
                      _return2.childLanes = _return2.childLanes | arg2;
                      if (null !== alternate3) {
                        alternate3.childLanes = alternate3.childLanes | arg2;
                      }
                    } else {
                      let tmp19 = null !== alternate3 && (alternate3.childLanes & arg2) !== arg2;
                      if (tmp19) {
                        alternate3.childLanes = alternate3.childLanes | arg2;
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
              child.lanes = child.lanes | arg2;
              let alternate = child.alternate;
              if (null !== alternate) {
                alternate.lanes = alternate.lanes | arg2;
              }
              let _return = child.return;
              if (null !== _return) {
                while (true) {
                  let alternate2 = _return.alternate;
                  let tmp16 = _return;
                  if ((_return.childLanes & arg2) !== arg2) {
                    _return.childLanes = _return.childLanes | arg2;
                    if (null !== alternate2) {
                      alternate2.childLanes = alternate2.childLanes | arg2;
                    }
                  } else {
                    let tmp17 = null !== alternate2 && (alternate2.childLanes & arg2) !== arg2;
                    if (tmp17) {
                      alternate2.childLanes = alternate2.childLanes | arg2;
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
                let tmp22 = tmp20;
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
          let tmp32 = sibling3;
          if (tmp30) {
            let tmp33 = findFirstSuspended;
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
              pendingProps.memoizedState = { isBackwards: false, rendering: null, renderingStartTime: 0, last: null, tail: null, tailMode: "sa", treeForkCount: false };
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
          let tmp26 = tmp23;
          if (null !== alternate4) {
            let tmp27 = findFirstSuspended;
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
        let tmp10 = createWorkInProgress;
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
function beginWork(alternate, c279, c286) {
  if (null !== alternate) {
    if (alternate.memoizedProps !== c279.pendingProps) {
      let c222 = true;
    } else {
      let tmp4 = alternate.lanes & c286;
      if (!tmp4) {
        const dependencies = alternate.dependencies;
        let tmp = null === dependencies;
        if (!tmp) {
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
          tmp = !flag2;
        }
        tmp4 = !tmp;
      }
      if (!tmp4) {
        if (!(128 & c279.flags)) {
          const sum = c86 + 1;
          c86 = sum;
          closure_85[sum] = closure_101.current;
          closure_101.current = closure_107._currentValue2;
          closure_107._currentValue2 = alternate.memoizedState.cache;
          bailoutOnAlreadyFinishedWork(alternate, c279, c286);
          c279.lanes = 0;
          updateOffscreenComponent(alternate, c279, c286, c279.pendingProps);
        }
      }
      c222 = 131072 & alternate.flags;
    }
  } else {
    c222 = false;
  }
  throw c279.pendingProps;
}
function appendAllChildren(node, child, arg2, arg3) {
  let sibling;
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
          let tmp11 = require;
          let tmp12 = dependencyMap;
          let obj = require("00272_get_BatchedBridge.js") /* get BatchedBridge */ /* get BatchedBridge */;
          obj = { style: null };
          obj[0] = { display: "none" };
          obj = { node: null, canonical: null };
          let tmp13 = cloneNodeWithNewProps;
          obj[0] = cloneNodeWithNewProps(stateNode.node, obj.createAttributePayload(obj, stateNode.canonical.viewConfig.validAttributes));
          obj[1] = stateNode.canonical;
          tmp10 = obj;
        }
        let tmp14 = appendChild;
        let tmp15 = appendChild(node.node, tmp10.node);
      } else if (6 === child.tag) {
        if (arg2) {
          if (arg3) {
            break;
          }
        }
        let tmp6 = appendChild;
        let tmp7 = appendChild(node.node, child.stateNode.node);
      } else if (4 !== child.tag) {
        if (22 === child.tag) {
          if (null !== child.memoizedState) {
            let child2 = child.child;
            if (null !== child2) {
              child2.return = child;
            }
            let tmp2 = appendAllChildren;
            let num = 0;
            let tmp3 = node;
            let tmp4 = child;
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
          let tmp18 = tmp16;
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
  let sibling;
  child = child.child;
  let flag = false;
  let flag2 = false;
  if (null !== child) {
    while (true) {
      let tmp2 = flag;
      if (5 === child.tag) {
        let stateNode = child.stateNode;
        let tmp10 = arg2;
        if (arg2) {
          tmp10 = arg3;
        }
        let tmp11 = stateNode;
        if (tmp10) {
          let tmp12 = require;
          let tmp13 = dependencyMap;
          let obj = require("00272_get_BatchedBridge.js") /* get BatchedBridge */ /* get BatchedBridge */;
          obj = { style: null };
          obj[0] = { display: "none" };
          obj = { node: null, canonical: null };
          let tmp14 = cloneNodeWithNewProps;
          obj[0] = cloneNodeWithNewProps(stateNode.node, obj.createAttributePayload(obj, stateNode.canonical.viewConfig.validAttributes));
          obj[1] = stateNode.canonical;
          tmp11 = obj;
        }
        let tmp15 = appendChildToSet;
        let tmp16 = appendChildToSet(arg0, tmp11.node);
        let flag3 = flag;
      } else if (6 === child.tag) {
        if (arg2) {
          if (arg3) {
            break;
          }
        }
        let tmp7 = appendChildToSet;
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
              let tmp3 = appendAllChildrenToContainer;
              let num = 0;
              let tmp4 = arg0;
              let tmp5 = child;
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
          let tmp19 = tmp17;
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
  closure_107._currentValue2 = closure_101.current;
  if (0 <= closure_86) {
    tmp.current = dependencyMap3[tmp2];
    dependencyMap3[closure_86] = null;
    closure_86 = closure_86 - 1;
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
        let tmp8 = iter2;
        if ((iter2.tag & arg0) === arg0) {
          let tmp9 = iter2;
          let obj = iter2.create();
          let tmp11 = obj;
          iter2.inst.destroy = obj;
        }
        let tmp12 = iter2;
        next2 = iter2.next;
        iter2 = next2;
        let tmp13 = next;
      } while (next2 !== tmp7);
    }
  } catch (tmp14) {
    captureCommitPhaseError(tmp, tmp.return, tmp14);
  }
}
function commitHookEffectListUnmount(arg0, sibling, current) {
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
      const tmp30 = next2;
    }
  } catch (tmp26) {
    captureCommitPhaseError(tmp2, tmp2.return, tmp26);
  }
}
function commitClassCallbacks(updateQueue) {
  updateQueue = updateQueue.updateQueue;
  if (null !== updateQueue) {
    try {
      commitCallbacks(updateQueue, tmp2);
    } catch (tmp5) {
      captureCommitPhaseError(tmp, tmp.return, tmp5);
    }
  }
}
function safelyCallComponentWillUnmount(sibling, _reactInternals, stateNode) {
  stateNode.props = resolveClassComponentProps(sibling.type, sibling.memoizedProps);
  stateNode.state = sibling.memoizedState;
  try {
    stateNode.componentWillUnmount();
  } catch (tmp4) {
    captureCommitPhaseError(tmp2, _reactInternals, tmp4);
  }
}
function safelyAttachRef(ref, _reactInternals) {
  try {
    if (null !== ref.ref) {
      const tag = ref.tag;
      if (26 !== tag) {
        if (27 !== tag) {
          if (5 !== tag) {
            let stateNode = ref.stateNode;
          }
          if (typeof tmp2 === "function") {
            ref.refCleanup = ref(stateNode);
          } else {
            tmp2.current = stateNode;
          }
        }
      }
      stateNode = getPublicInstance(ref.stateNode);
    }
  } catch (tmp6) {
    captureCommitPhaseError(tmp, _reactInternals, tmp6);
  }
}
function safelyDetachRef(sibling, arg1) {
  let ref;
  let refCleanup;
  ({ ref, refCleanup } = sibling);
  if (null !== ref) {
    if (typeof refCleanup === "function") {
      try {
        refCleanup();
        sibling.refCleanup = null;
        const alternate = sibling.alternate;
        if (null != alternate) {
          alternate.refCleanup = null;
        }
      } catch (tmp10) {
        tmp.refCleanup = tmp2;
        const alternate2 = tmp.alternate;
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
function commitHostMount(tag) {
  try {
    const _Error = Error;
    throw Error("The current renderer does not support mutation. This error is likely caused by a bug in React. Please file an issue.");
  } catch (tmp2) {
    captureCommitPhaseError(tag, tag.return, tmp2);
  }
}
function commitHostPortalContainerChildren(arg0, tag) {
  try {
    completeRoot(tmp.containerTag, arg2);
  } catch (tmp5) {
    captureCommitPhaseError(tag, tag.return, tmp5);
  }
}
function commitLayoutEffectOnFiber(arg0, alternate, sibling) {
  if (1 & tmp2.mode) {
    if (!(null !== tmp2.memoizedState || c249)) {
      c249 = tmp7;
      let c250 = tmp8;
      if (null !== tmp && null !== tmp.memoizedState || c250) {
        if (!tmp10) {
          recursivelyTraverseReappearLayoutEffects(tmp3, tmp2, 8772 & tmp2.subtreeFlags);
        }
        c249 = tmp9;
        c250 = tmp10;
      }
      recursivelyTraverseLayoutEffects(tmp3, tmp2);
    }
  } else {
    recursivelyTraverseLayoutEffects(tmp3, tmp2);
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
function recursivelyTraverseDeletionEffects(arg0, deletions, child) {
  let sibling = child.child;
  if (null !== sibling) {
    do {
      let tmp = commitDeletionEffectsOnFiber;
      let tmp2 = commitDeletionEffectsOnFiber(arg0, deletions, sibling);
      sibling = sibling.sibling;
    } while (null !== sibling);
  }
}
function commitDeletionEffectsOnFiber(arg0, deletions, sibling) {
  if (__REACT_DEVTOOLS_GLOBAL_HOOK__2) {
    if (typeof obj.onCommitFiberUnmount === "function") {
      try {
        obj.onCommitFiberUnmount(closure_72, sibling);
      } catch (err) {
      }
    }
  }
  if (1 & sibling.mode) {
    let tmp7 = c250;
    if (!c250) {
      tmp7 = null !== sibling.memoizedState;
    }
    c250 = tmp7;
    recursivelyTraverseDeletionEffects(obj, tmp, sibling);
    const tmp6 = c250;
  } else {
    recursivelyTraverseDeletionEffects(obj, tmp, sibling);
  }
}
function attachSuspenseRetryListeners(handler, retryQueue) {
  let closure_0 = handler;
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
      const item = retryQueue.forEach((promise) => {
        if (!_retryCache.has(promise)) {
          _retryCache.add(promise);
          const bindResult = outer1_337.bind(null, closure_0, promise);
          promise.then(bindResult, bindResult);
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
function recursivelyTraverseMutationEffects(arg0, deletions) {
  deletions = deletions.deletions;
  if (null !== deletions) {
    for (let num3 = 0; num3 < deletions.length; num3 = num3 + 1) {
      let tmp = deletions[num3];
      let tmp2 = commitDeletionEffectsOnFiber;
      let tmp3 = commitDeletionEffectsOnFiber(arg0, deletions, tmp);
      let alternate = tmp.alternate;
      let tmp4 = num3;
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
        let tmp5 = commitMutationEffectsOnFiber;
        let tmp6 = commitMutationEffectsOnFiber(sibling, arg0);
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
  }
}
function commitMutationEffectsOnFiber(sibling, arg1) {
  let tmp5 = null !== tmp4;
  if (tmp5) {
    tmp5 = null !== tmp4.memoizedState;
  }
  if (1 & tmp.mode) {
    let tmp11 = c249;
    if (!c249) {
      tmp11 = tmp6;
    }
    c249 = tmp11;
    let tmp12 = tmp10;
    if (!c250) {
      tmp12 = tmp5;
    }
    c250 = tmp12;
    recursivelyTraverseMutationEffects(tmp3, tmp);
    c250 = tmp10;
    const tmp9 = c249;
  } else {
    recursivelyTraverseMutationEffects(tmp3, tmp);
  }
  commitReconciliationEffects(tmp);
  if (8192 & tmp2) {
    const stateNode = tmp.stateNode;
    const _visibility = stateNode._visibility;
    if (tmp6) {
      let tmp16 = -2 & _visibility;
    } else {
      tmp16 = 1 | _visibility;
    }
    stateNode._visibility = tmp16;
    if (tmp6) {
      if (!tmp17) {
        if (1 & tmp.mode) {
          recursivelyTraverseDisappearLayoutEffects(tmp);
        }
      }
      tmp17 = null === tmp4 || tmp5 || c249 || c250;
    }
  }
  if (4 & tmp2) {
    const updateQueue = tmp.updateQueue;
    if (null !== updateQueue) {
      const retryQueue = updateQueue.retryQueue;
      if (null !== retryQueue) {
        updateQueue.retryQueue = null;
        attachSuspenseRetryListeners(tmp, retryQueue);
      }
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
        let tmp2 = commitLayoutEffectOnFiber;
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
      let tmp = sibling;
      if (0 !== tag) {
        if (11 !== tag) {
          if (14 !== tag) {
            if (15 !== tag) {
              if (1 === tag) {
                let tmp8 = safelyDetachRef;
                let tmp9 = safelyDetachRef(sibling, sibling.return);
                let stateNode = sibling.stateNode;
                if (typeof stateNode.componentWillUnmount === "function") {
                  let tmp18 = safelyCallComponentWillUnmount;
                  let tmp19 = safelyCallComponentWillUnmount(sibling, sibling.return, stateNode);
                }
                let tmp10 = recursivelyTraverseDisappearLayoutEffects;
                let tmp11 = recursivelyTraverseDisappearLayoutEffects(sibling);
              } else {
                if (27 !== tag) {
                  if (26 !== tag) {
                    if (5 !== tag) {
                      if (22 === tag) {
                        if (null === sibling.memoizedState) {
                          let tmp16 = recursivelyTraverseDisappearLayoutEffects;
                          let tmp17 = recursivelyTraverseDisappearLayoutEffects(sibling);
                        }
                      } else {
                        let tmp2 = recursivelyTraverseDisappearLayoutEffects;
                        let tmp3 = recursivelyTraverseDisappearLayoutEffects(sibling);
                      }
                    }
                  }
                }
                let tmp4 = safelyDetachRef;
                let tmp5 = safelyDetachRef(sibling, sibling.return);
                let tmp6 = recursivelyTraverseDisappearLayoutEffects;
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
      let tmp12 = commitHookEffectListUnmount;
      let tmp13 = commitHookEffectListUnmount(4, sibling, sibling.return);
      let tmp14 = recursivelyTraverseDisappearLayoutEffects;
      let tmp15 = recursivelyTraverseDisappearLayoutEffects(sibling);
    }
  }
}
function recursivelyTraverseReappearLayoutEffects(arg0, subtreeFlags, arg2) {
  let tmp2 = arg2;
  if (arg2) {
    tmp2 = 8772 & subtreeFlags.subtreeFlags;
  }
  if (null !== subtreeFlags.child) {
    if (null === tmp.memoizedState) {
      recursivelyTraverseReappearLayoutEffects(tmp3, tmp, tmp2);
    }
    safelyAttachRef(tmp, tmp.return);
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
        let tmp2 = commitPassiveMountOnFiber;
        let num = 0;
        let tmp3 = arg0;
        let tmp4 = sibling;
        let tmp5 = arg2;
        let tmp6 = arg3;
        let tmp7 = commitPassiveMountOnFiber(arg0, sibling, arg2, arg3);
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
  }
}
function commitPassiveMountOnFiber(arg0, current, arg2, arg3) {
  recursivelyTraversePassiveMountEffects(tmp4, tmp3, tmp2, tmp);
  if (2048 & tmp5) {
    const alternate = tmp3.alternate;
    commitCachePassiveMountEffect(0, tmp3);
  }
}
function recursivelyTraverseReconnectPassiveEffects(arg0, subtreeFlags, arg2, arg3, arg4) {
  let flags;
  let tag;
  let tmp = arg4;
  if (arg4) {
    tmp = 10256 & subtreeFlags.subtreeFlags || false;
    const tmp2 = 10256 & subtreeFlags.subtreeFlags || false;
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
                    let tmp36 = recursivelyTraverseReconnectPassiveEffects;
                    let num6 = 0;
                    let tmp37 = arg0;
                    let tmp38 = sibling;
                    let tmp39 = arg2;
                    let tmp40 = arg3;
                    let tmp41 = tmp;
                    let tmp42 = recursivelyTraverseReconnectPassiveEffects(arg0, tmp3, arg2, arg3, tmp);
                  } else if (1 & sibling.mode) {
                    let tmp34 = recursivelyTraverseAtomicPassiveEffects;
                    let tmp35 = recursivelyTraverseAtomicPassiveEffects(arg0, sibling);
                  } else {
                    stateNode._visibility = stateNode._visibility | 2;
                    let tmp27 = recursivelyTraverseReconnectPassiveEffects;
                    let num5 = 0;
                    let tmp28 = arg0;
                    let tmp29 = sibling;
                    let tmp30 = arg2;
                    let tmp31 = arg3;
                    let tmp32 = tmp;
                    let tmp33 = recursivelyTraverseReconnectPassiveEffects(arg0, tmp3, arg2, arg3, tmp);
                  }
                } else {
                  stateNode._visibility = stateNode._visibility | 2;
                  let tmp20 = recursivelyTraverseReconnectPassiveEffects;
                  let num4 = 0;
                  let tmp21 = arg0;
                  let tmp22 = sibling;
                  let tmp23 = arg2;
                  let tmp24 = arg3;
                  let tmp25 = tmp;
                  let tmp26 = recursivelyTraverseReconnectPassiveEffects(arg0, tmp3, arg2, arg3, tmp);
                }
                let tmp43 = tmp;
                if (tmp) {
                  tmp43 = 2048 & flags;
                }
                if (tmp43) {
                  let tmp44 = commitOffscreenPassiveMountEffects;
                  let tmp45 = commitOffscreenPassiveMountEffects(sibling.alternate, sibling);
                }
              } else if (24 === tag) {
                let tmp11 = recursivelyTraverseReconnectPassiveEffects;
                let num3 = 0;
                let tmp12 = arg0;
                let tmp13 = sibling;
                let tmp14 = arg2;
                let tmp15 = arg3;
                let tmp16 = tmp;
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
                        let tmp55 = cache;
                        let tmp56 = dependencyMap;
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
                let tmp4 = recursivelyTraverseReconnectPassiveEffects;
                let num2 = 0;
                let tmp5 = arg0;
                let tmp6 = sibling;
                let tmp7 = arg2;
                let tmp8 = arg3;
                let tmp9 = tmp;
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
      let tmp46 = recursivelyTraverseReconnectPassiveEffects;
      let num7 = 0;
      let tmp47 = arg0;
      let tmp48 = sibling;
      let tmp49 = arg2;
      let tmp50 = arg3;
      let tmp51 = tmp;
      let tmp52 = recursivelyTraverseReconnectPassiveEffects(arg0, tmp3, arg2, arg3, tmp);
      let tmp53 = commitHookEffectListMount;
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
        let tmp2 = sibling;
        if (22 === tag) {
          let tmp11 = recursivelyTraverseAtomicPassiveEffects;
          let tmp12 = recursivelyTraverseAtomicPassiveEffects(arg0, sibling);
          if (2048 & flags) {
            let tmp13 = commitOffscreenPassiveMountEffects;
            let tmp14 = commitOffscreenPassiveMountEffects(sibling.alternate, sibling);
          }
        } else if (24 === tag) {
          let tmp5 = recursivelyTraverseAtomicPassiveEffects;
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
                let require = cache;
                cache.refCount = cache.refCount - 1;
                if (0 === cache.refCount) {
                  let tmp8 = require;
                  let tmp9 = dependencyMap;
                  let obj = peek;
                  let result = obj.unstable_scheduleCallback(peek.unstable_NormalPriority, () => {
                    const controller = pooledCache.controller;
                    controller.abort();
                  });
                }
              }
            }
          }
        } else {
          let tmp3 = recursivelyTraverseAtomicPassiveEffects;
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
    if (sibling.subtreeFlags & c270) {
      let sibling4 = sibling.child;
      if (null !== sibling4) {
        do {
          let tmp14 = accumulateSuspenseyCommitOnFiber;
          let tmp15 = accumulateSuspenseyCommitOnFiber(sibling4);
          sibling4 = sibling4.sibling;
        } while (null !== sibling4);
      }
    }
    let tmp17 = sibling.flags & c270;
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
                  c270 = 16777216;
                  if (sibling.subtreeFlags & c270) {
                    let sibling2 = sibling.child;
                    if (null !== sibling2) {
                      do {
                        let tmp6 = accumulateSuspenseyCommitOnFiber;
                        let tmp7 = accumulateSuspenseyCommitOnFiber(sibling2);
                        sibling2 = sibling2.sibling;
                      } while (null !== sibling2);
                    }
                  }
                  const tmp4 = c270;
                }
              }
              if (sibling.subtreeFlags & c270) {
                sibling = sibling.child;
                if (null !== sibling) {
                  do {
                    let tmp2 = accumulateSuspenseyCommitOnFiber;
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
    if (sibling.subtreeFlags & c270) {
      let sibling3 = sibling.child;
      if (null !== sibling3) {
        do {
          let tmp10 = accumulateSuspenseyCommitOnFiber;
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
                      let tmp2 = commitPassiveUnmountEffectsInsideOfDeletedTree_begin;
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
                    let tmp5 = commitPassiveUnmountOnFiber;
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
                let tmp11 = commitPassiveUnmountEffectsInsideOfDeletedTree_begin;
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
              let tmp15 = commitPassiveUnmountOnFiber;
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
          let tmp19 = commitPassiveUnmountEffectsInsideOfDeletedTree_begin;
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
        let tmp23 = commitPassiveUnmountOnFiber;
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
          let tmp3 = commitPassiveUnmountEffectsInsideOfDeletedTree_begin;
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
      let tmp6 = sibling2;
      if (0 !== tag) {
        if (11 !== tag) {
          if (15 !== tag) {
            if (22 === tag) {
              let stateNode = sibling2.stateNode;
              if (2 & stateNode._visibility) {
                stateNode._visibility = stateNode._visibility & -3;
                let tmp9 = recursivelyTraverseDisconnectPassiveEffects;
                let tmp10 = recursivelyTraverseDisconnectPassiveEffects(sibling2);
              }
            } else {
              let tmp7 = recursivelyTraverseDisconnectPassiveEffects;
              let tmp8 = recursivelyTraverseDisconnectPassiveEffects(sibling2);
            }
          }
          sibling2 = sibling2.sibling;
          if (null === sibling2) {
            break;
          }
        }
      }
      let tmp11 = commitHookEffectListUnmount;
      let tmp12 = commitHookEffectListUnmount(8, sibling2, sibling2.return);
      let tmp13 = recursivelyTraverseDisconnectPassiveEffects;
      let tmp14 = recursivelyTraverseDisconnectPassiveEffects(sibling2);
    }
  }
}
function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(arg0, current) {
  let _null5;
  let _return;
  let alternate;
  let sibling;
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
                    let tmp8 = cache;
                    let tmp9 = dependencyMap;
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
                    let tmp5 = detachFiberAfterEffects;
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
      let tmp2 = commitHookEffectListUnmount;
      let tmp3 = commitHookEffectListUnmount(8, tmp, current);
    }
  }
}
function requestUpdateLane(_reactInternals) {
  if (!(1 & _reactInternals.mode)) {
    return 2;
  } else {
    if (!(2 & c277)) {
      if (null !== __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T) {
        let tmp10 = c115;
        if (0 === c115) {
          let tmp11 = c124;
          if (0 === c124) {
            let c78 = tmp13;
            tmp11 = c78;
            if (!(261888 & c78 << 1)) {
              c78 = 256;
              tmp11 = tmp12;
            }
          }
          c115 = tmp11;
          tmp10 = tmp11;
        }
        let num2 = tmp10;
      } else {
        num2 = c363;
        if (0 === c363) {
          let tmp5Result = null;
          if (closure_358) {
            tmp5Result = tmp5();
          }
          num2 = 32;
          if (null != tmp5Result) {
            num2 = 2;
            if (closure_355 !== tmp5Result) {
              num2 = 8;
              if (closure_356 !== tmp5Result) {
                num2 = 32;
                if (closure_357 === tmp5Result) {
                  num2 = 268435456;
                }
              }
            }
          }
        }
      }
    }
    num2 = tmp2 & -tmp2;
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
        let closure_110 = cancelPendingCommit;
      } else {
        tmp26.next = cancelPendingCommit;
        closure_111 = cancelPendingCommit;
      }
    }
    let c113 = true;
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
        const obj = peek;
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
      let closure_297 = peek.unstable_now() + 500;
      flushSyncWorkAcrossRoots_impl(0, true);
      const obj2 = peek;
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
            let closure_284 = callback2(iter, tmp3);
          }
          try {
            if (0 !== c281) {
              let tmp31 = memoizedState;
              let tmp68 = null;
              if (null !== memoizedState) {
                tmp3 = tmp31;
                if (1 === tmp12) {
                  c281 = 0;
                  let closure_282 = tmp68;
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
                          closure_282 = tmp68;
                          if (callback3(promise)) {
                            callback10(tmp3);
                          } else {
                            callback11(iter, tmp3, promise, 7);
                          }
                        } else if (5 !== tmp12) {
                          if (6 === tmp12) {
                            c281 = 0;
                            closure_282 = tmp68;
                            callback11(iter, tmp3, promise, 6);
                          } else if (8 === tmp12) {
                            callback5();
                            let c287 = 6;
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
                            closure_282 = tmp68;
                            callback11(iter, tmp3, promise, 5);
                          }
                        }
                        tmp31 = memoizedState;
                        if (memoizedState) {
                          callback13();
                        } else {
                          c281 = 0;
                          closure_282 = tmp68;
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
                    let c102 = null;
                    let c103 = null;
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
                    closure_282 = tmp68;
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
                      let tmp5 = iter !== outer1_111;
                      if (tmp5) {
                        tmp5 = null === iter.next;
                      }
                      if (tmp5) {
                        if (null === outer1_111) {
                          outer1_111 = iter;
                          const outer1_110 = iter;
                        } else {
                          tmp7.next = iter;
                          outer1_111 = iter;
                        }
                      }
                      const outer1_113 = true;
                      if (!outer1_112) {
                        outer1_112 = true;
                        if (outer1_367) {
                          outer1_368(() => {
                            if (6 & closure_277) {
                              const result = callback(287).unstable_scheduleCallback(callback(287).unstable_ImmediatePriority, closure_118);
                              const obj = callback(287);
                            } else {
                              callback2();
                            }
                          });
                        } else {
                          let result = iter(outer1_1[3]).unstable_scheduleCallback(iter(outer1_1[3]).unstable_ImmediatePriority, outer1_118);
                          let obj = iter(outer1_1[3]);
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
        let c298 = null;
        tmp4 = closure_277;
        tmp5 = callback8();
        let closure_297 = callback(table[3]).unstable_now() + 500;
        callback6(iter, tmp3);
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
      const obj = peek;
    }
  }
  (function commitRoot(current, lanes, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
    current.cancelPendingCommit = null;
    do {
      let tmp5 = callback5;
      let tmp6 = callback5();
      let tmp7 = c300;
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
              let tmp4 = callback2;
              let diff = 31 - callback2(tmp3);
              tmp[diff] = 0;
              tmp2[diff] = -1;
              let arr = hiddenUpdates[diff];
              let tmp6 = tmp3;
              if (null !== arr) {
                hiddenUpdates[diff] = null;
                for (let num = 0; num < arr.length; num = num + 1) {
                  let tmp7 = arr[num];
                  let tmp8 = num;
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
          let c279 = null;
          let c280 = 0;
        }
        let closure_302 = lanes;
        let closure_301 = current;
        let closure_303 = arg2;
        let closure_304 = tmp34;
        let closure_305 = arg4;
        let closure_306 = arg3;
        if (!(10256 & lanes.subtreeFlags)) {
          if (!(10256 & lanes.flags)) {
            current.callbackNode = null;
            current.callbackPriority = 0;
          }
          if (13878 & lanes.subtreeFlags) {
            closure_5.T = null;
            let c363 = 2;
            closure_277 = closure_277 | 4;
            try {
              (function commitBeforeMutationEffects(arg0, lanes) {
                let alternate;
                let flags;
                let length;
                let child = lanes;
                if (null !== lanes) {
                  child = child.child;
                  if (1028 & child.subtreeFlags) {
                    if (null !== child) {
                      child.return = tmp3;
                      let tmp5 = child;
                    }
                  }
                  tmp5 = child;
                  if (null !== child) {
                    ({ alternate, flags } = child);
                    switch (child.tag) {
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
                                let tmp19 = events;
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
                          child = tmp23;
                          tmp5 = tmp23;
                        } else {
                          const _return = tmp6.return;
                          child = _return;
                          tmp5 = _return;
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
  let sibling;
  sibling = arg0;
  while (true) {
    let tag = sibling.tag;
    let tmp = sibling;
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
          let tmp9 = tmp7;
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
            let tmp2 = stores[num];
            let tmp5 = num;
            while (true) {
              try {
                let tmp6 = is;
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
function markRootSuspended(suspendedLanes, c280, c291, arg3) {
  suspendedLanes.suspendedLanes = suspendedLanes.suspendedLanes | c280 & ~c290 & ~c289;
  suspendedLanes.pingedLanes = suspendedLanes.pingedLanes & ~c280 & ~c290 & ~c289;
  if (arg3) {
    suspendedLanes.warmLanes = suspendedLanes.warmLanes | tmp;
  }
  let tmp3 = tmp;
  if (0 < (c280 & ~c290 & ~c289)) {
    do {
      let tmp4 = clz32Fallback;
      let diff = 31 - clz32Fallback(tmp3);
      tmp2[diff] = -1;
      tmp3 = tmp3 & ~1 << diff;
    } while (0 < tmp3);
  }
  if (0 !== c291) {
    suspendedLanes.pendingLanes = suspendedLanes.pendingLanes | c291;
    suspendedLanes.suspendedLanes = suspendedLanes.suspendedLanes & ~c291;
    const diff1 = 31 - clz32Fallback(c291);
    suspendedLanes.entangledLanes = suspendedLanes.entangledLanes | c291;
    suspendedLanes.entanglements[diff1] = 1073741824 | suspendedLanes.entanglements[diff1] | 261930 & tmp;
  }
}
function resetWorkInProgressStack() {
  if (null !== c279) {
    if (0 === c281) {
      let _return = tmp.return;
    } else {
      let c102 = null;
      let c103 = null;
      if (c168) {
        let iter = tmp.memoizedState;
        if (null !== iter) {
          do {
            let queue = iter.queue;
            let tmp3 = iter;
            if (null !== queue) {
              queue.pending = null;
            }
            iter = iter.next;
          } while (null !== iter);
        }
        c168 = false;
      }
      let c164 = 0;
      let c165 = null;
      let c166 = null;
      let c167 = null;
      let c169 = false;
      let c171 = 0;
      let c172 = null;
      let c138 = null;
      let c139 = 0;
      _return = c279;
    }
    if (null !== _return) {
      do {
        let tmp4 = unwindInterruptedWork;
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
  let c303 = 0;
  resetWorkInProgressStack();
  let closure_278 = timeoutHandle;
  const tmp5 = createWorkInProgress(timeoutHandle.current, null);
  let c279 = tmp5;
  let closure_280 = tmp24Result;
  let c281 = 0;
  let c282 = null;
  let c283 = false;
  let closure_284 = !(timeoutHandle.pendingLanes & ~timeoutHandle.suspendedLanes & ~timeoutHandle.pingedLanes & tmp24Result);
  let c285 = false;
  let c287 = 0;
  let c288 = 0;
  let c289 = 0;
  let c290 = 0;
  let c291 = 0;
  let c292 = 0;
  let c293 = null;
  let c294 = null;
  let c295 = false;
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
        let tmp11 = clz32Fallback;
        let diff = 31 - clz32Fallback(tmp9);
        tmp10 = tmp10 | tmp8[diff];
        tmp9 = tmp9 & ~1 << diff;
        tmp7 = tmp10;
      } while (0 < tmp9);
    }
  }
  let c286 = tmp7;
  let c143 = 0;
  let c144 = 0;
  let num4 = 0;
  if (0 < c143) {
    while (true) {
      let tmp14 = dependencyMap4;
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
        let tmp21 = markUpdateLaneFromFiberToRoot;
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
  let c165 = null;
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = obj8;
  if (arg1 !== closure_130) {
    if (promise !== closure_132) {
      if (promise === closure_131) {
        if (null === c137) {
          const _Error = Error;
          throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
        } else {
          c137 = null;
          let c281 = 4;
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
      let c287 = 1;
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
        const result = obj2.set(promise, obj);
        value = obj;
      }
      obj = value;
      obj2 = weakMap;
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
  c277 = c277 | 2;
  let tmp6 = c278 === shellSuspendCounter;
  const tmp3 = c277;
  const tmp4 = pushDispatcher();
  if (tmp6) {
    tmp6 = c280 === tmp24Result;
  }
  if (!tmp6) {
    let c298 = null;
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
                  let c282 = null;
                  throwAndUnwindWorkLoop(shellSuspendCounter, tmp43, tmp44, tmp13);
                }
              }
            }
          }
          if (null === closure_159.current) {
            flag = true;
          }
          c281 = 0;
          c282 = null;
          throwAndUnwindWorkLoop(shellSuspendCounter, tmp43, tmp44, c281);
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
      let c102 = null;
      let c103 = null;
      c277 = tmp3;
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
}
function workLoopSync() {
  let _null7;
  if (null !== _null7) {
    do {
      let tmp2 = beginWork;
      let tmp3 = c286;
      let tmp = _null7;
      let tmp4 = beginWork(_null7.alternate, _null7, c286);
      _null7.memoizedProps = _null7.pendingProps;
      if (null === tmp4) {
        let tmp5 = completeUnitOfWork;
        let tmp6 = completeUnitOfWork(tmp);
      } else {
        _null7 = tmp4;
      }
      let tmp7 = _null7;
    } while (null !== _null7);
  }
}
function workLoopConcurrentByScheduler() {
  let _null7;
  if (null !== _null7) {
    if (!obj2.unstable_shouldYield()) {
      while (true) {
        let tmp2 = beginWork;
        let tmp3 = c286;
        let tmp = _null7;
        let tmp4 = beginWork(_null7.alternate, _null7, c286);
        _null7.memoizedProps = _null7.pendingProps;
        if (null === tmp4) {
          let tmp5 = completeUnitOfWork;
          let tmp6 = completeUnitOfWork(tmp);
        } else {
          _null7 = tmp4;
        }
        let tmp7 = _null7;
        if (null === _null7) {
          break;
        } else {
          let tmp8 = require;
          let tmp9 = dependencyMap;
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
  let alternate;
  let dependencies;
  let tag;
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
                let tmp3 = iter;
                if (null !== queue) {
                  queue.pending = null;
                }
                iter = iter.next;
              } while (null !== iter);
            }
            c168 = false;
          }
          let c164 = 0;
          let c165 = null;
          let c166 = null;
          let c167 = null;
          let c169 = false;
          let c171 = 0;
          let c172 = null;
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
        let closure_279 = pendingProps;
        tmp7Result = beginWork(alternate, pendingProps, c286);
        const tmp7 = beginWork;
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
  let c102 = null;
  let c103 = null;
  resetHooksOnUnwind(memoizedState);
  let c138 = null;
  let c139 = 0;
  const _return = memoizedState.return;
  try {
    if ((function throwException(pingCache, _return, flags, cache, c280) {
      flags.flags = flags.flags | 32768;
      let set4 = cache;
      if (null !== cache) {
        set4 = cache;
        if (typeof cache === "object") {
          set4 = cache;
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
                          let c285 = true;
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
                set4 = closure_160;
                if (null === closure_160) {
                  let c287 = 4;
                  set4 = c283;
                  if (!c283) {
                    set4 = closure_280;
                    set4 = closure_280;
                    set4 = (4194048 & closure_280) !== closure_280 && null !== tmp8.current;
                  }
                  if (!set4) {
                    let c284 = true;
                  }
                  set4 = closure_288;
                  set4 = 134217727 & closure_288;
                  set4 = !set4;
                  if (!set4) {
                    set4 = closure_289;
                    set4 = !(134217727 & closure_289);
                  }
                  if (!set4) {
                    set4 = closure_278;
                    set4 = null === closure_278;
                  }
                  if (!set4) {
                    set4 = callback4;
                    set4 = closure_278;
                    set4 = closure_280;
                    set4 = closure_291;
                    set4 = callback4(closure_278, closure_280, closure_291, false);
                  }
                } else {
                  set4 = null === current.alternate;
                  if (set4) {
                    set4 = c287;
                    set4 = 0 === c287;
                  }
                  if (set4) {
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
                    set4 = callback3;
                    set4 = callback3(flags, obj, 2);
                  }
                } else {
                  set4 = 0 === flags.tag && null === flags.alternate;
                  if (set4) {
                    flags.tag = 28;
                  }
                }
                flags.lanes = flags.lanes | 2;
              }
              set4 = closure_133;
              if (cache === closure_133) {
                current.flags = current.flags | 16384;
              } else {
                const updateQueue2 = current.updateQueue;
                if (null === updateQueue2) {
                  set4 = globalThis;
                  const _Set7 = Set;
                  const items2 = [cache];
                  set4 = new.target;
                  set4 = new.target;
                  set4 = items2;
                  set4 = new Set(items2);
                  current.updateQueue = set4;
                } else {
                  set4 = updateQueue2.add(cache);
                }
                if (1 & current.mode) {
                  const pingCache3 = pingCache.pingCache;
                  if (null === pingCache3) {
                    set4 = closure_276;
                    set4 = new.target;
                    set4 = new.target;
                    const obj14 = new closure_276();
                    set4 = obj14;
                    pingCache.pingCache = obj14;
                    set4 = globalThis;
                    const _Set9 = Set;
                    set4 = new.target;
                    set4 = new.target;
                    set4 = new Set();
                    set4 = obj14.set(cache, set4);
                    value = set4;
                  } else {
                    value = pingCache3.get(cache);
                    if (undefined === value) {
                      set4 = globalThis;
                      const _Set8 = Set;
                      set4 = new.target;
                      set4 = new.target;
                      set4 = new Set();
                      set4 = pingCache3.set(cache, set4);
                      value = set4;
                    }
                  }
                  if (!value.has(c280)) {
                    c285 = true;
                    set4 = value.add(c280);
                    set4 = callback5;
                    set4 = callback5;
                    set4 = null;
                    set4 = pingCache;
                    set4 = cache;
                    set4 = c280;
                    set4 = callback5.bind(null, pingCache, cache, c280);
                    set4 = cache.then(set4, set4);
                  }
                }
              }
              return false;
            } else if (1 === pingCache.tag) {
              pingCache = pingCache.pingCache;
              if (null === pingCache) {
                const obj8 = new closure_276();
                pingCache.pingCache = obj8;
                const _Set2 = Set;
                const set5 = new Set();
                const result2 = obj8.set(cache, set5);
                let value1 = set5;
              } else {
                value1 = pingCache.get(cache);
                if (undefined === value1) {
                  const _Set = Set;
                  const set6 = new Set();
                  const result3 = pingCache.set(cache, set6);
                  value1 = set6;
                }
              }
              if (!value1.has(c280)) {
                c285 = true;
                value1.add(c280);
                const bindResult1 = callback5.bind(null, pingCache, cache, c280);
                cache.then(bindResult1, bindResult1);
              }
              c287 = 4;
              let tmp46 = c283;
              if (!c283) {
                tmp46 = (4194048 & closure_280) !== closure_280 && null !== tmp8.current;
                const tmp49 = (4194048 & closure_280) !== closure_280 && null !== tmp8.current;
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
              set4 = globalThis;
              const _Error2 = Error;
              set4 = Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
            }
          }
        }
      }
      const ErrorResult = Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.", { cause: set4 });
      if (typeof ErrorResult === "object") {
        if (null !== ErrorResult) {
          let obj1 = store;
          let value2 = store.get(ErrorResult);
          if (undefined === value2) {
            obj1 = { value: null, source: null, stack: null };
            obj1[0] = ErrorResult;
            obj1[1] = flags;
            obj1[2] = callback(flags);
            const result4 = obj1.set(ErrorResult, obj1);
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
          if (typeof set4 !== "object") {
            const obj2 = { value: null, source: null, stack: null };
            obj2[0] = set4;
            obj2[1] = flags;
            obj2[2] = callback(flags);
          }
          let value3 = store.get(set4);
          if (undefined === value3) {
            const obj3 = { value: null, source: null, stack: null };
            obj3[0] = set4;
            obj3[1] = flags;
            obj3[2] = callback(flags);
            const result5 = obj5.set(set4, obj3);
            value3 = obj3;
          }
          obj5 = store;
        }
      }
      obj = { value: ErrorResult, source: flags, stack: callback(flags) };
    })(current, _return, memoizedState, value, c280)) {
      let c287 = 1;
      logUncaughtError(current, createCapturedValueAtFiber(value, current.current));
      let c279 = null;
    } else if (32768 & memoizedState.flags) {
      let flag2 = true;
      if (1 !== c281) {
        flag2 = false;
        if (!c284) {
          flag2 = false;
          if (!(536870912 & c280)) {
            let c283 = true;
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
  let tmp2 = pendingProps;
  while (!(32768 & tmp2.flags)) {
    let cache = null;
    if (null !== sibling) {
      cache = sibling.memoizedState.cache;
    }
    if (tmp2.memoizedState.cache !== cache) {
      tmp2.flags = tmp2.flags | 2048;
    }
    let tmp4 = closure_107;
    closure_107._currentValue2 = closure_101.current;
    if (0 <= closure_86) {
      let tmp7 = dependencyMap3;
      tmp5.current = dependencyMap3[tmp6];
      let tmp8 = closure_86;
      dependencyMap3[closure_86] = null;
      let tmp9 = closure_86;
      closure_86 = closure_86 - 1;
    }
    let tmp10 = bubbleProperties;
    let tmp11 = bubbleProperties(tmp2);
    let tmp12 = null;
    while (true) {
      if (null !== tmp12) {
        sibling = tmp12;
      } else {
        sibling = tmp2.sibling;
        if (null === sibling) {
          sibling = tmp;
          tmp2 = tmp;
          if (null !== tmp) {
            continue label0;
          } else {
            let tmp14 = c287;
            if (0 === c287) {
              let num = 5;
              c287 = 5;
            }
          }
        }
      }
    }
  }
  unwindUnitOfWork(tmp2, c283);
}
function unwindUnitOfWork(pendingProps, c283) {
  while (true) {
    let tmp = closure_107;
    closure_107._currentValue2 = closure_101.current;
    let tmp4 = null;
    if (0 <= closure_86) {
      let tmp8 = dependencyMap3;
      tmp2.current = dependencyMap3[tmp3];
      let tmp9 = closure_86;
      dependencyMap3[closure_86] = null;
      let tmp10 = closure_86;
      closure_86 = closure_86 - 1;
      tmp4 = null;
    }
    while (true) {
      if (null !== tmp4) {
        let num2 = 32767;
        tmp4.flags = tmp4.flags & 32767;
        let c279 = tmp4;
      } else {
        let _return = sibling.return;
        let tmp6 = null !== _return;
        if (tmp6) {
          _return.flags = _return.flags | 32768;
          _return.subtreeFlags = 0;
          _return.deletions = null;
        }
        if (!c283) {
          sibling = sibling.sibling;
          if (null !== sibling) {
            c279 = sibling;
          }
        }
        c279 = _return;
        let tmp7 = _return;
        if (tmp6) {
          continue label0;
        } else {
          let num = 6;
          let c287 = 6;
          c279 = null;
        }
      }
    }
  }
  Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
}
function flushMutationEffects() {
  if (1 === c300) {
    c300 = 0;
    if (13878 & _null8.subtreeFlags) {
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
      let c363 = 2;
      c277 = c277 | 4;
      try {
        commitMutationEffectsOnFiber(tmp14, tmp13);
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
      let c363 = 2;
      c277 = c277 | 4;
      try {
        commitLayoutEffectOnFiber(tmp13, tmp14.alternate, tmp14);
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
  let c300 = 0;
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
      let c299 = null;
    }
    lanesToEventPriority(tmp7);
    const stateNode = tmp6.stateNode;
    if (__REACT_DEVTOOLS_GLOBAL_HOOK__2) {
      if (typeof obj2.onCommitFiberRoot === "function") {
        try {
          obj2.onCommitFiberRoot(closure_72, stateNode, undefined, !(128 & ~stateNode.current.flags));
        } catch (err) {
        }
      }
    }
    if (null !== arr) {
      let c363 = 2;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
      try {
        const onRecoverableError = tmp5.onRecoverableError;
        let num4 = 0;
        if (0 < arr.length) {
          do {
            let tmp22 = num4;
            let iter = arr[num4];
            let tmp23 = onRecoverableError;
            obj = { componentStack: null };
            obj[0] = iter.stack;
            let onRecoverableErrorResult = onRecoverableError(iter.value, obj);
            sum = num4 + 1;
            num4 = sum;
            length = arr.length;
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
    if (!(261930 & tmp7)) {
      let c307 = 0;
      tmp5 = flushSyncWorkAcrossRoots_impl(0, false);
    }
    if (tmp5 === c308) {
      c307 = c307 + 1;
    } else {
      c307 = 0;
      c308 = tmp5;
    }
    tmp28 = 3 & c303 && 0 !== tmp5.tag;
  }
  c300 = 5;
}
function releaseRootPooledCache(pooledCacheLanes, pendingLanes) {
  pooledCacheLanes.pooledCacheLanes = pooledCacheLanes.pooledCacheLanes & pendingLanes;
  if (0 == (pooledCacheLanes.pooledCacheLanes & pendingLanes)) {
    const pooledCache = pooledCacheLanes.pooledCache;
    if (null != pooledCache) {
      pooledCacheLanes.pooledCache = null;
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
    let c304 = 0;
    const tmp35 = lanesToEventPriority(c303);
    try {
      let num = 32;
      if (32 <= tmp35) {
        num = tmp35;
      }
      tmp36.T = null;
      let c305 = null;
      c300 = 0;
      let c301 = null;
      let c302 = null;
      c303 = 0;
      if (6 & c277) {
        const _Error = Error;
        throw Error("Cannot flush passive effects while already rendering.");
      } else {
        c277 = tmp12 | 4;
        commitPassiveUnmountOnFiber(tmp10.current);
        commitPassiveMountOnFiber(tmp10, tmp10.current, tmp11, tmp9);
        c277 = tmp12;
        flushSyncWorkAcrossRoots_impl(0, false);
        if (__REACT_DEVTOOLS_GLOBAL_HOOK__2) {
          if (typeof obj.onPostCommitFiberRoot === "function") {
            try {
              const result = obj.onPostCommitFiberRoot(closure_72, tmp10);
            } catch (err) {
            }
          }
        }
        num = tmp38;
        tmp36.T = tmp37;
        releaseRootPooledCache(tmp31, tmp32);
        return true;
      }
    } catch (tmp28) {
      num = tmp6;
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
        const result = obj2.set(value, obj);
        value = obj;
      }
      obj = value;
      obj2 = weakMap;
    }
    const stateNode = _return.stateNode;
    obj = {
      lane: 2,
      tag: 3,
      payload: { element: null },
      () => {
          outer1_219(stateNode, obj);
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
      let c113 = true;
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
          const obj5 = stateNode(obj[3]);
        }
      }
      tmp7 = iter !== iter && null === iter.next;
    }
  }
  obj = { value, source, stack: getStackByFiberInDevAndProd(source) };
}
function captureCommitPhaseError(tag, _reactInternals, value) {
  if (3 === tag.tag) {
    captureCommitPhaseErrorOnRoot(tag, tag, value);
  } else {
    let _return = _reactInternals;
    if (null !== _reactInternals) {
      while (3 !== _return.tag) {
        if (1 === _return.tag) {
          let stateNode = _return.stateNode;
          if (typeof _return.type.getDerivedStateFromError !== "function") {
            if (typeof stateNode.componentDidCatch === "function") {
              let obj6 = c299;
            }
          }
          if (typeof value === "object") {
            if (null !== value) {
              let obj2 = weakMap;
              value = weakMap.get(value);
              if (undefined === value) {
                let obj = { value: null, source: null, stack: null };
                obj[0] = value;
                obj[1] = tag;
                let tmp4 = getStackByFiberInDevAndProd;
                let num2 = 0;
                obj[2] = getStackByFiberInDevAndProd(tag);
                let result = obj2.set(value, obj);
                value = obj;
              }
              obj = value;
            }
            let tmp6 = enqueueUpdate;
            obj = { lane: 2, tag: 3, payload: null, callback: null, next: null };
            let num3 = 2;
            let num4 = 0;
            let iter = enqueueUpdate(_return, obj, 2);
            if (null !== iter) {
              let getDerivedStateFromError = _return.type.getDerivedStateFromError;
              if (typeof getDerivedStateFromError === "function") {
                let isArray = obj.value;
                obj.payload = () => getDerivedStateFromError(closure_4);
                obj.callback = () => {
                  outer1_220(iter, _return, obj);
                };
              }
              let stateNode2 = _return.stateNode;
              let tmp7 = null !== stateNode2 && typeof stateNode2.componentDidCatch === "function";
              if (tmp7) {
                obj.callback = function() {
                  const self = this;
                  outer1_220(obj, _return, obj);
                  if (typeof getDerivedStateFromError !== "function") {
                    if (null === outer1_299) {
                      const _Set = Set;
                      const items = [self];
                      const set = new Set(items);
                      outer1_299 = set;
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
              let tmp8 = iter;
              let tmp9 = iter !== iter && null === iter.next;
              if (tmp9) {
                if (null !== iter) {
                  tmp10.next = iter;
                }
              }
              let flag = true;
              let c113 = true;
              let tmp11 = c112;
              if (!c112) {
                c112 = true;
                let tmp12 = prop;
                if (prop) {
                  let tmp17 = _queueMicrotask;
                  let tmp18 = _queueMicrotask(() => {
                    if (6 & closure_277) {
                      const result = callback(287).unstable_scheduleCallback(callback(287).unstable_ImmediatePriority, closure_118);
                      const obj = callback(287);
                    } else {
                      callback2();
                    }
                  });
                } else {
                  let tmp13 = iter;
                  let tmp14 = _return;
                  let obj5 = iter(_return[3]);
                  let tmp15 = processRootScheduleInImmediateTask;
                  let result1 = obj5.unstable_scheduleCallback(iter(_return[3]).unstable_ImmediatePriority, processRootScheduleInImmediateTask);
                }
              }
            }
          }
          obj = { value: null, source: null, stack: null };
          obj[0] = value;
          obj[1] = tag;
          let tmp2 = getStackByFiberInDevAndProd;
          let num = 0;
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
          const obj = peek;
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
      let closure_110 = pingCache;
    } else {
      tmp18.next = pingCache;
      closure_111 = pingCache;
    }
  }
  let c113 = true;
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
      const obj2 = peek;
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
      let c80 = tmp2;
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
    let c113 = true;
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
        const obj = peek;
      }
    }
    tmp4 = iter !== iter && null === iter.next;
  }
}
function resolveRetryWakeable(tag) {
  let memoizedState;
  let stateNode;
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
        let c80 = tmp6;
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
      let c113 = true;
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
          const obj = peek;
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
  let obj = Object.create(FiberNode.prototype);
  obj = { tag: 29, key: null, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null };
  return obj;
}
function createWorkInProgress(child, pendingProps) {
  let dependencies;
  let key;
  let mode;
  let tag;
  let alternate = child.alternate;
  if (null === alternate) {
    ({ tag, key, mode } = child);
    let obj = Object.create(FiberNode.prototype);
    obj = { tag, key, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null };
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
        let obj = Object.create(FiberNode.prototype);
        obj = { tag: 31, key, elementType: tmp26, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
        return obj;
      } else if (closure_15 === type) {
        Object.create(FiberNode.prototype);
        const obj2 = { tag: 7, key, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: pendingProps.children, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
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
  const obj9 = { tag: num, key, elementType: type, type: tmp3, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: ErrorResult, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: tmp2, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
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
  let canonical;
  let publicInstance;
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
            let tmp20 = sibling3;
            while (sibling3 !== tmp19) {
              if (sibling3 === _return6) {
                let num3 = 4098;
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
                let num4 = 3;
                let tmp26 = null;
                if (3 === tmp23.tag) {
                  tmp26 = tmp24;
                }
                let tmp6 = alternate;
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
            let num5 = 4098;
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
            let num6 = 3;
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
          let str3 = "Unable to find node on an unmounted component.";
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
              let tmp10 = sibling;
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
                let tmp17 = sibling2;
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
                let str2 = "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.";
                throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
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
            let str7 = "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.";
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
                  let tmp35 = sibling4;
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
                            let tmp37 = findCurrentHostFiberImpl;
                            tmp36 = findCurrentHostFiberImpl(sibling5);
                            let tmp38 = sibling5;
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
          const obj = require("00272_get_BatchedBridge.js") /* get BatchedBridge */ /* get BatchedBridge */;
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
          let tmp8 = clz32Fallback;
          let diff = 31 - clz32Fallback(tmp7);
          let tmp10 = 1 << diff;
          let tmp11 = tmp7;
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
      const obj = require("00272_get_BatchedBridge.js") /* get BatchedBridge */ /* get BatchedBridge */;
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
  const ReactFiberErrorDialog = require("00272_get_BatchedBridge.js") /* get BatchedBridge */ /* get BatchedBridge */.ReactFiberErrorDialog;
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
  const ReactFiberErrorDialog = require("00272_get_BatchedBridge.js") /* get BatchedBridge */ /* get BatchedBridge */.ReactFiberErrorDialog;
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
      let tmp2 = key10006;
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
obj = assign(SyntheticEvent.prototype, obj);
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
let obj1 = { touchBank: items3, numberActiveTouches: 0, indexOfSingleActiveTouch: -1, mostRecentTimeStamp: 0 };
let closure_49 = {
  instrument(arg0) {
    let closure_48 = arg0;
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
            let tmp7 = num2;
            let arr2 = items3;
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
  touchHistory: obj1
};
let c50 = null;
let c51 = 0;
let obj2 = { startShouldSetResponder: { phasedRegistrationNames: { bubbled: "onStartShouldSetResponder", captured: "onStartShouldSetResponderCapture" }, dependencies: items }, scrollShouldSetResponder: { phasedRegistrationNames: { bubbled: "onScrollShouldSetResponder", captured: "onScrollShouldSetResponderCapture" }, dependencies: ["topScroll"] }, selectionChangeShouldSetResponder: { phasedRegistrationNames: { bubbled: "onSelectionChangeShouldSetResponder", captured: "onSelectionChangeShouldSetResponderCapture" }, dependencies: ["topSelectionChange"] }, moveShouldSetResponder: { phasedRegistrationNames: { bubbled: "onMoveShouldSetResponder", captured: "onMoveShouldSetResponderCapture" }, dependencies: items1 }, responderStart: { registrationName: "onResponderStart", dependencies: items }, responderMove: { registrationName: "onResponderMove", dependencies: items1 }, responderEnd: { registrationName: "onResponderEnd", dependencies: items2 }, responderRelease: { registrationName: "onResponderRelease", dependencies: items2 }, responderTerminationRequest: { registrationName: "onResponderTerminationRequest", dependencies: [] }, responderGrant: { registrationName: "onResponderGrant", dependencies: [] }, responderReject: { registrationName: "onResponderReject", dependencies: [] }, responderTerminate: { registrationName: "onResponderTerminate", dependencies: [] } };
let obj3 = {
  _getResponder() {
    return c50;
  },
  eventTypes: obj2,
  extractEvents(arg0, arg1, responderIgnoreScroll) {
    let _dispatchInstances;
    let _dispatchInstances2;
    let _dispatchInstances3;
    let _dispatchListeners;
    let _dispatchListeners2;
    let _dispatchListeners4;
    let _return;
    let _return1;
    let diff;
    let diff1;
    let callResult = "topTouchStart" === arg0;
    if (callResult) {
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
          if (!callResult) {
            tmp5 = null;
          }
        }
      }
      if (callResult) {
        let scrollShouldSetResponder = obj2.startShouldSetResponder;
      } else if ("topTouchMove" === arg0) {
        scrollShouldSetResponder = obj2.moveShouldSetResponder;
      } else if ("topSelectionChange" === arg0) {
        scrollShouldSetResponder = obj2.selectionChangeShouldSetResponder;
      } else {
        scrollShouldSetResponder = obj2.scrollShouldSetResponder;
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
          callResult = call(undefined, pooled);
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
          callResult = obj2;
          callResult = store;
          callResult = tmp55;
          callResult = responderIgnoreScroll;
          callResult = arg3;
          const pooled1 = store.getPooled(obj2.responderGrant, tmp55, responderIgnoreScroll, arg3);
          callResult = closure_49;
          pooled1.touchHistory = closure_49.touchHistory;
          callResult = accumulateDirectDispatchesSingle$1;
          const _Array7 = Array;
          if (Array.isArray(pooled1)) {
            const item1 = pooled1.forEach(callResult, undefined);
          } else if (pooled1) {
            const call2 = callResult.call;
            if (typeof call2 === "unknown") {
              callResult(pooled1);
            } else {
              callResult = call2(undefined, pooled1);
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
              const pooled2 = obj2.getPooled(callResult.responderTerminationRequest, c50, responderIgnoreScroll, arg3);
              pooled2.touchHistory = callResult.touchHistory;
              const _Array2 = Array;
              if (Array.isArray(pooled2)) {
                const item2 = pooled2.forEach(callResult, undefined);
              } else if (pooled2) {
                const call3 = callResult.call;
                if (typeof call3 === "unknown") {
                  callResult(pooled2);
                } else {
                  callResult = call3(undefined, pooled2);
                }
              }
              const _dispatchListeners3 = pooled2._dispatchListeners;
              let tmp75 = !_dispatchListeners3;
              if (_dispatchListeners3) {
                ({ _dispatchListeners: _dispatchListeners4, _dispatchInstances: _dispatchInstances3 } = pooled2);
                if (tmp62(_dispatchListeners4)) {
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
              const getPooled = obj2.getPooled;
              if (tmp75) {
                const pooled3 = getPooled(callResult.responderTerminate, c50, responderIgnoreScroll, arg3);
                pooled3.touchHistory = callResult.touchHistory;
                const _Array4 = Array;
                if (Array.isArray(pooled3)) {
                  const item3 = pooled3.forEach(callResult, undefined);
                } else if (pooled3) {
                  const call5 = callResult.call;
                  if (typeof call5 === "unknown") {
                    callResult(pooled3);
                  } else {
                    callResult = call5(undefined, pooled3);
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
                const pooled4 = getPooled(callResult.responderReject, tmp55, responderIgnoreScroll, arg3);
                pooled4.touchHistory = callResult.touchHistory;
                const _Array3 = Array;
                if (Array.isArray(pooled4)) {
                  const item4 = pooled4.forEach(callResult, undefined);
                } else if (pooled4) {
                  const call4 = callResult.call;
                  if (typeof call4 === "unknown") {
                    callResult(pooled4);
                  } else {
                    callResult = call4(undefined, pooled4);
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
                callResult = obj3.GlobalResponderHandler.onChange(tmp68, tmp55, tmp66);
                tmp5 = pooled1;
                const GlobalResponderHandler3 = obj3.GlobalResponderHandler;
              }
            }
          }
          tmp62 = isArray;
        }
      }
    }
    let tmp94 = c50;
    let tmp95 = c50;
    if (c50) {
      tmp95 = callResult;
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
      callResult = obj2;
      let responderStart = obj2.responderStart;
    } else if (tmp96) {
      callResult = obj2;
      responderStart = obj2.responderMove;
    } else {
      responderStart = null;
      if (tmp94) {
        responderStart = obj2.responderEnd;
      }
    }
    let obj = tmp5;
    if (responderStart) {
      callResult = store;
      callResult = c50;
      callResult = store;
      callResult = responderStart;
      callResult = responderIgnoreScroll;
      callResult = arg3;
      const pooled5 = store.getPooled(responderStart, c50, responderIgnoreScroll, arg3);
      callResult = closure_49;
      pooled5.touchHistory = closure_49.touchHistory;
      callResult = accumulateDirectDispatchesSingle$1;
      callResult = globalThis;
      const _Array5 = Array;
      if (Array.isArray(pooled5)) {
        callResult = pooled5.forEach(callResult, undefined);
      } else if (pooled5) {
        const call6 = callResult.call;
        if (typeof call6 === "unknown") {
          callResult = callResult(pooled5);
        } else {
          callResult = call6(undefined, pooled5);
        }
      }
      if (null == pooled5) {
        const _Error3 = Error;
        throw Error("Accumulated items must not be null or undefined.");
      } else {
        callResult = pooled5;
        if (null == tmp5) {
          obj = pooled5;
        } else {
          callResult = isArray;
          if (isArray(tmp5)) {
            let combined = tmp5.concat(pooled5);
          } else if (callResult(pooled5)) {
            const items1 = [tmp5];
            combined = items1.concat(pooled5);
          } else {
            combined = [tmp5, pooled5];
          }
          callResult = combined;
        }
      }
    }
    let flag2 = c50;
    callResult = c50;
    if (c50) {
      callResult = "topTouchCancel" === arg0;
    }
    if (flag2) {
      flag2 = !callResult;
    }
    if (flag2) {
      callResult = "topTouchEnd" === arg0;
      if (!callResult) {
        callResult = "topTouchCancel" === arg0;
      }
      flag2 = callResult;
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
              callResult = num17;
              if (null != target) {
                if (0 !== target) {
                  callResult = A;
                  if (typeof A !== "function") {
                    let str20 = "Trying to call a non-function";
                    callResult = HermesBuiltin.throwTypeError();
                  }
                  let internalInstanceHandle = target;
                  if (null != target.canonical) {
                    internalInstanceHandle = target;
                    if (null != target.canonical.internalInstanceHandle) {
                      internalInstanceHandle = target.canonical.internalInstanceHandle;
                    }
                  }
                  callResult = c50;
                  let flag3 = false;
                  if (internalInstanceHandle) {
                    callResult = internalInstanceHandle;
                    flag3 = true;
                    while (callResult !== internalInstanceHandle) {
                      flag3 = true;
                      if (callResult === callResult.alternate) {
                        break;
                      } else {
                        callResult = callResult.return;
                        while (callResult) {
                          if (5 === callResult.tag) {
                            break;
                          }
                        }
                        if (!callResult) {
                          callResult = null;
                        }
                        internalInstanceHandle = callResult;
                        flag3 = false;
                        if (!callResult) {
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
              callResult = num17 + 1;
              num17 = callResult;
              flag2 = true;
              if (callResult >= touches.length) {
                break;
              }
            }
          }
        }
      }
    }
    if (callResult) {
      callResult = obj2;
      callResult = obj2.responderTerminate;
    } else {
      callResult = null;
      if (flag2) {
        callResult = obj2;
        callResult = obj2.responderRelease;
      }
    }
    callResult = obj;
    if (callResult) {
      callResult = store;
      callResult = c50;
      callResult = store;
      callResult = responderIgnoreScroll;
      callResult = arg3;
      const pooled6 = store.getPooled(callResult, c50, responderIgnoreScroll, arg3);
      callResult = closure_49;
      pooled6.touchHistory = closure_49.touchHistory;
      callResult = accumulateDirectDispatchesSingle$1;
      callResult = globalThis;
      const _Array6 = Array;
      if (Array.isArray(pooled6)) {
        callResult = pooled6.forEach(callResult, undefined);
      } else if (pooled6) {
        const call7 = callResult.call;
        if (typeof call7 === "unknown") {
          callResult = callResult(pooled6);
        } else {
          callResult = call7(undefined, pooled6);
        }
      }
      if (null == pooled6) {
        const _Error2 = Error;
        throw Error("Accumulated items must not be null or undefined.");
      } else {
        callResult = pooled6;
        if (null == obj) {
          c50 = null;
          callResult = pooled6;
          if (null !== obj3.GlobalResponderHandler) {
            callResult = obj3.GlobalResponderHandler.onChange(callResult, null, undefined);
            callResult = pooled6;
            const GlobalResponderHandler2 = obj3.GlobalResponderHandler;
          }
        } else {
          callResult = isArray;
          if (isArray(obj)) {
            let combined1 = obj.concat(pooled6);
          } else if (callResult(pooled6)) {
            const items2 = [obj];
            combined1 = items2.concat(pooled6);
          } else {
            combined1 = [obj, pooled6];
          }
          callResult = combined1;
        }
      }
    }
    return callResult;
  },
  GlobalResponderHandler: null,
  injection: obj4
};
let closure_58 = null;
let obj5 = {};
let closure_60 = [];
let closure_61 = {};
let closure_62 = {};
const customBubblingEventTypes = require("get BatchedBridge").ReactNativeViewConfigRegistry.customBubblingEventTypes;
const customDirectEventTypes = require("get BatchedBridge").ReactNativeViewConfigRegistry.customDirectEventTypes;
let call = slice.call;
let items4 = ["ResponderEventPlugin", "ReactNativeBridgeEventPlugin"];
function recomputePluginOrdering() {
  if (closure_58) {
    for (const key10004 in obj5) {
      let tmp19 = key10004;
      let tmp20 = obj5;
      let tmp21 = obj5[key10004];
      let tmp22 = closure_58;
      let index = closure_58.indexOf(key10004);
      if (-1 >= index) {
        let tmp18 = globalThis;
        let _Error6 = Error;
        let str12 = "EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `";
        let str13 = "`.";
        throw Error("EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `" + key10004 + "`.");
      } else {
        if (table[index]) {
          continue;
        } else if (tmp21.extractEvents) {
          tmp24[index] = tmp21;
          let eventTypes = tmp21.eventTypes;
          let tmp5 = eventTypes;
          let keys = Object.keys();
          if (keys === undefined) {
            continue;
          } else {
            let tmp7 = keys[tmp2];
            while (tmp7 !== undefined) {
              let tmp25 = tmp7;
              let tmp26 = eventTypes[tmp7];
              let tmp27 = closure_61;
              if (closure_61.hasOwnProperty(tmp7)) {
                let tmp17 = globalThis;
                let _Error5 = Error;
                let str10 = "EventPluginRegistry: More than one plugin attempted to publish the same event name, `";
                let str11 = "`.";
                throw Error("EventPluginRegistry: More than one plugin attempted to publish the same event name, `" + tmp7 + "`.");
              } else {
                tmp27[tmp7] = tmp26;
                let phasedRegistrationNames = tmp26.phasedRegistrationNames;
                if (phasedRegistrationNames) {
                  let tmp10 = phasedRegistrationNames;
                  let flag = true;
                  let keys1 = Object.keys();
                  if (keys1 !== undefined) {
                    flag = true;
                    let tmp12 = keys1[tmp];
                    while (tmp12 !== undefined) {
                      let tmp28 = tmp12;
                      if (!phasedRegistrationNames.hasOwnProperty(tmp12)) {
                        continue;
                      } else {
                        let tmp13 = phasedRegistrationNames[tmp12];
                        if (dependencyMap2[tmp13]) {
                          let tmp15 = globalThis;
                          let _Error3 = Error;
                          let str5 = "EventPluginRegistry: More than one plugin attempted to publish the same registration name, `";
                          let str6 = "`.";
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
                      let tmp9 = globalThis;
                      let _Error2 = Error;
                      let str3 = "EventPluginRegistry: More than one plugin attempted to publish the same registration name, `";
                      let str4 = "`.";
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
                  let tmp16 = globalThis;
                  let _Error4 = Error;
                  let str7 = "EventPluginRegistry: Failed to publish event `";
                  let str8 = "` for plugin `";
                  let str9 = "`.";
                  throw Error("EventPluginRegistry: Failed to publish event `" + tmp7 + "` for plugin `" + key10004 + "`.");
                }
              }
            }
          }
          continue;
        } else {
          let tmp4 = globalThis;
          let _Error = Error;
          let str = "EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `";
          let str2 = "` does not.";
          throw Error("EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `" + key10004 + "` does not.");
        }
        continue;
      }
    }
  }
}
closure_58 = typeof call === "unknown" ? slice() : call(items4);
let result = recomputePluginOrdering();
let obj6 = { ResponderEventPlugin: obj3, ReactNativeBridgeEventPlugin: obj7 };
let flag = false;
let flag2 = false;
let keys = Object.keys();
if (keys !== undefined) {
  flag2 = flag;
  while (keys[tmp] !== undefined) {
    let tmp21 = tmp13;
    if (!obj6.hasOwnProperty(tmp13)) {
      continue;
    } else {
      let tmp14 = obj6[tmp13];
      if (!obj5.hasOwnProperty(tmp13)) {
        if (obj5[tmp13]) {
          let _Error = Error;
          let str = "EventPluginRegistry: Cannot inject two different event plugins using the same name, `";
          let str2 = "`.";
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
      const tmp3 = arg0 != arg0 && arg1 != arg1;
    }
    return tmp;
  };
}
function createCursor(current) {
  return { current };
}
let closure_89 = typeof reportError === "function" ? reportError : ((obj) => {
  if (typeof window === "object") {
    const _window3 = window;
    if (typeof window.ErrorEvent === "function") {
      const _window = window;
      if (typeof obj === "object") {
        if (null !== obj) {
          if (typeof obj.message === "string") {
            const _String2 = String;
            let StringResult = String(obj.message);
          }
          obj = { bubbles: true, cancelable: true, message: null, error: null };
          obj[2] = StringResult;
          obj[3] = obj;
          tmp = new tmp("error", obj);
          const _window2 = window;
        }
      }
      const _String = String;
      StringResult = String(obj);
    }
    const _console = console;
    console.error(obj);
  }
  if (typeof process === "object") {
    const _process = process;
    if (typeof process.emit === "function") {
      const _process2 = process;
      process.emit("uncaughtException", obj);
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
    if (null === tmp) {
      const _Error = Error;
      throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    } else {
      obj = { lanes: 0, firstContext: null };
      obj[1] = obj;
      tmp.dependencies = obj;
      tmp.flags = tmp.flags | 524288;
    }
  } else {
    tmp2.next = obj;
  }
  return _currentValue2;
}
function createChildReconciler(arg0) {
  let closure_0 = arg0;
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
    let obj = Object.create(ctor.prototype);
    obj = { tag: 6, key: null, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: mode.mode, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null, lanes, return: mode };
    tmp2 = obj;
  }
  function updateElement(dependencies, elementType, type, lanes) {
    type = type.type;
    if (type === outer1_15) {
      let tmp5 = updateFragment(dependencies, elementType, type.props.children, lanes, type.key);
    } else {
      if (null !== elementType) {
        if (elementType.elementType === type) {
          const tmp8 = outer1_340(elementType, type.props);
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
      tmp5 = outer1_341(type.type, type.key, type.props, 0, dependencies.mode, lanes);
      let tmp6 = null;
      if (undefined !== type.props.ref) {
        tmp6 = ref;
      }
      tmp5.ref = tmp6;
      tmp5.return = dependencies;
    }
    return tmp5;
  }
  function updatePortal(dependencies, tag, value, lanes) {
    let containerInfo;
    let implementation;
    implementation = value;
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
    let obj = Object.create(ctor.prototype);
    obj = { tag: 4, key: implementation.key, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: null !== implementation.children ? implementation.children : [], memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: containerInfo, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
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
    let obj = Object.create(ctor.prototype);
    obj = { tag: 7, key, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: children2, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: children.mode, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null, lanes, return: children };
    tmp2 = obj;
  }
  function createChild(BaseFramework, value, lanes) {
    if (typeof value !== "string") {
      if (typeof value !== "number") {
        if (typeof value !== "bigint") {
          if (typeof value === "object") {
            if (null !== value) {
              const $$typeof = value.$$typeof;
              if (outer1_13 === $$typeof) {
                const tmp24 = outer1_341(value.type, value.key, value.props, 0, BaseFramework.mode, lanes);
                let tmp25 = null;
                if (undefined !== value.props.ref) {
                  tmp25 = ref;
                }
                tmp24.ref = tmp25;
                tmp24.return = BaseFramework;
                return tmp24;
              } else if (outer1_14 === $$typeof) {
                let obj = Object.create(outer1_338.prototype);
                obj = { tag: 4, key: value.key, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: null !== value.children ? value.children : [], memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: BaseFramework.mode, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
                ({ containerInfo: obj6[0], implementation: obj6[2] } = value);
                obj.stateNode = { containerInfo: null, pendingChildren: null, implementation: null };
                obj.return = BaseFramework;
                return obj;
              } else if (outer1_24 === $$typeof) {
                return createChild(BaseFramework, outer1_136(value), lanes);
              } else {
                if (!updateFragment(value)) {
                  let tmp3 = null;
                  if (null !== value) {
                    tmp3 = null;
                    if (typeof value === "object") {
                      iterable = outer1_27;
                      if (outer1_27) {
                        iterable = value[outer1_27];
                      }
                      if (!iterable) {
                        iterable = value[Symbol.iterator];
                      }
                      let tmp4 = null;
                      if (typeof iterable === "function") {
                        tmp4 = iterable;
                      }
                      tmp3 = tmp4;
                    }
                  }
                  if (!tmp3) {
                    if (typeof value.then === "function") {
                      outer1_139 = outer1_139 + 1;
                      let tmp13 = outer1_138;
                      if (null === outer1_138) {
                        const items = [];
                        outer1_138 = items;
                        tmp13 = items;
                      }
                      return createChild(BaseFramework, outer1_135(tmp13, value, outer1_139), lanes);
                    } else if (value.$$typeof === outer1_19) {
                      if (null === outer1_102) {
                        outer1_102 = BaseFramework;
                        let outer1_103 = null;
                        const dependencies = BaseFramework.dependencies;
                        if (null !== dependencies) {
                          dependencies.firstContext = null;
                        }
                      }
                      const _currentValue2 = value._currentValue2;
                      const obj2 = { context: null, memoizedValue: null, next: null };
                      obj2[0] = value;
                      obj2[1] = _currentValue2;
                      if (null === outer1_103) {
                        if (null === BaseFramework) {
                          const _Error2 = Error;
                          throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
                        } else {
                          outer1_103 = obj2;
                          const obj3 = { lanes: 0, firstContext: null };
                          obj3[1] = obj2;
                          BaseFramework.dependencies = obj3;
                          BaseFramework.flags = BaseFramework.flags | 524288;
                        }
                      } else {
                        tmp9.next = obj2;
                        outer1_103 = obj2;
                      }
                      return createChild(BaseFramework, _currentValue2, lanes);
                    } else if (value.$$typeof === outer1_12) {
                      const _Error = Error;
                      throw Error("A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the \"react\" package is used.\n- A library pre-bundled an old copy of \"react\" or \"react/jsx-runtime\".\n- A compiler tries to \"inline\" JSX instead of using the runtime.");
                    } else {
                      const _Object2 = Object;
                      const call = toString.call;
                      let text = typeof call === "unknown" ? toString() : call(value);
                      if ("[object Object]" === text) {
                        const _Object = Object;
                        const keys = Object.keys(value);
                        text = `${"object with keys {" + obj.join(", ")}}`;
                      }
                      throw Error("Objects are not valid as a React child (found: " + text + "). If you meant to render a collection of children, use an array instead.");
                    }
                  }
                }
                Object.create(outer1_338.prototype);
                const obj5 = { tag: 7, key: null, elementType: null, type: null, stateNode: null, return: BaseFramework, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: value, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: BaseFramework.mode, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
                return obj5;
              }
            }
          }
          return null;
        }
      }
    }
    const text1 = `${value}`;
    const obj6 = Object.create(outer1_338.prototype);
    return { tag: 6, key: null, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: text1, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: BaseFramework.mode, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null, lanes, return: BaseFramework };
  }
  function updateSlot(dependencies, key, value, lanes) {
    key = null;
    if (null !== key) {
      key = key.key;
    }
    if (typeof value !== "string") {
      if (typeof value !== "number") {
        if (typeof value !== "bigint") {
          if (typeof value === "object") {
            if (null !== value) {
              const $$typeof = value.$$typeof;
              if (outer1_13 === $$typeof) {
                let tmp40 = null;
                if (value.key === key) {
                  tmp40 = updateElement(dependencies, key, value, lanes);
                }
                return tmp40;
              } else if (outer1_14 === $$typeof) {
                let tmp34 = null;
                if (value.key === key) {
                  tmp34 = updatePortal(dependencies, key, value, lanes);
                }
                return tmp34;
              } else if (outer1_24 === $$typeof) {
                return updateSlot(dependencies, key, outer1_136(value), lanes);
              } else {
                if (!updateFragment(value)) {
                  let tmp3 = null;
                  if (null !== value) {
                    tmp3 = null;
                    if (typeof value === "object") {
                      iterable = outer1_27;
                      if (outer1_27) {
                        iterable = value[outer1_27];
                      }
                      if (!iterable) {
                        iterable = value[Symbol.iterator];
                      }
                      let tmp4 = null;
                      if (typeof iterable === "function") {
                        tmp4 = iterable;
                      }
                      tmp3 = tmp4;
                    }
                  }
                  if (!tmp3) {
                    if (typeof value.then === "function") {
                      outer1_139 = outer1_139 + 1;
                      let tmp17 = outer1_138;
                      if (null === outer1_138) {
                        const items = [];
                        outer1_138 = items;
                        tmp17 = items;
                      }
                      return updateSlot(dependencies, key, outer1_135(tmp17, value, outer1_139), lanes);
                    } else if (value.$$typeof === outer1_19) {
                      if (null === outer1_102) {
                        outer1_102 = dependencies;
                        let outer1_103 = null;
                        dependencies = dependencies.dependencies;
                        if (null !== dependencies) {
                          dependencies.firstContext = null;
                        }
                      }
                      const _currentValue2 = value._currentValue2;
                      let obj = { context: null, memoizedValue: null, next: null };
                      obj[0] = value;
                      obj[1] = _currentValue2;
                      if (null === outer1_103) {
                        if (null === dependencies) {
                          const _Error2 = Error;
                          throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
                        } else {
                          outer1_103 = obj;
                          obj = { lanes: 0, firstContext: null };
                          obj[1] = obj;
                          dependencies.dependencies = obj;
                          dependencies.flags = dependencies.flags | 524288;
                        }
                      } else {
                        tmp9.next = obj;
                        outer1_103 = obj;
                      }
                      return updateSlot(dependencies, key, _currentValue2, lanes);
                    } else if (value.$$typeof === outer1_12) {
                      const _Error = Error;
                      throw Error("A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the \"react\" package is used.\n- A library pre-bundled an old copy of \"react\" or \"react/jsx-runtime\".\n- A compiler tries to \"inline\" JSX instead of using the runtime.");
                    } else {
                      const _Object2 = Object;
                      const call = toString.call;
                      let text = typeof call === "unknown" ? toString() : call(value);
                      if ("[object Object]" === text) {
                        const _Object = Object;
                        const keys = Object.keys(value);
                        text = `${"object with keys {" + obj.join(", ")}}`;
                      }
                      throw Error("Objects are not valid as a React child (found: " + text + "). If you meant to render a collection of children, use an array instead.");
                    }
                  }
                }
                let tmp22 = null;
                if (null === key) {
                  tmp22 = updateFragment(dependencies, key, value, lanes, null);
                }
                return tmp22;
              }
            }
          }
          return null;
        }
      }
    }
    let tmp46 = null;
    if (null === key) {
      tmp46 = updateTextNode(dependencies, key, "" + value, lanes);
    }
    return tmp46;
  }
  function updateFromMap(get, dependencies, sum1, value, lanes) {
    if (typeof value !== "string") {
      if (typeof value !== "number") {
        if (typeof value !== "bigint") {
          if (typeof value === "object") {
            if (null !== value) {
              const $$typeof = value.$$typeof;
              if (outer1_13 === $$typeof) {
                let key2 = sum1;
                if (null !== value.key) {
                  key2 = value.key;
                }
                const tmp44 = get.get(key2) || null;
                return updateElement(dependencies, tmp44, value, lanes);
              } else if (outer1_14 === $$typeof) {
                let key = sum1;
                if (null !== value.key) {
                  key = value.key;
                }
                const tmp38 = get.get(key) || null;
                return updatePortal(dependencies, tmp38, value, lanes);
              } else if (outer1_24 === $$typeof) {
                return updateFromMap(get, dependencies, sum1, outer1_136(value), lanes);
              } else {
                if (!updateFragment(value)) {
                  let tmp3 = null;
                  if (null !== value) {
                    tmp3 = null;
                    if (typeof value === "object") {
                      iterable = outer1_27;
                      if (outer1_27) {
                        iterable = value[outer1_27];
                      }
                      if (!iterable) {
                        iterable = value[Symbol.iterator];
                      }
                      let tmp4 = null;
                      if (typeof iterable === "function") {
                        tmp4 = iterable;
                      }
                      tmp3 = tmp4;
                    }
                  }
                  if (!tmp3) {
                    if (typeof value.then === "function") {
                      outer1_139 = outer1_139 + 1;
                      let tmp18 = outer1_138;
                      if (null === outer1_138) {
                        const items = [];
                        outer1_138 = items;
                        tmp18 = items;
                      }
                      return updateFromMap(get, dependencies, sum1, outer1_135(tmp18, value, outer1_139), lanes);
                    } else if (value.$$typeof === outer1_19) {
                      if (null === outer1_102) {
                        outer1_102 = dependencies;
                        let outer1_103 = null;
                        dependencies = dependencies.dependencies;
                        if (null !== dependencies) {
                          dependencies.firstContext = null;
                        }
                      }
                      const _currentValue2 = value._currentValue2;
                      let obj = { context: null, memoizedValue: null, next: null };
                      obj[0] = value;
                      obj[1] = _currentValue2;
                      if (null === outer1_103) {
                        if (null === dependencies) {
                          const _Error2 = Error;
                          throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
                        } else {
                          outer1_103 = obj;
                          obj = { lanes: 0, firstContext: null };
                          obj[1] = obj;
                          dependencies.dependencies = obj;
                          dependencies.flags = dependencies.flags | 524288;
                        }
                      } else {
                        tmp9.next = obj;
                        outer1_103 = obj;
                      }
                      return updateFromMap(get, dependencies, sum1, _currentValue2, lanes);
                    } else if (value.$$typeof === outer1_12) {
                      const _Error = Error;
                      throw Error("A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the \"react\" package is used.\n- A library pre-bundled an old copy of \"react\" or \"react/jsx-runtime\".\n- A compiler tries to \"inline\" JSX instead of using the runtime.");
                    } else {
                      const _Object2 = Object;
                      const call = toString.call;
                      let text = typeof call === "unknown" ? toString() : call(value);
                      if ("[object Object]" === text) {
                        const _Object = Object;
                        const keys = Object.keys(value);
                        text = `${"object with keys {" + obj.join(", ")}}`;
                      }
                      throw Error("Objects are not valid as a React child (found: " + text + "). If you meant to render a collection of children, use an array instead.");
                    }
                  }
                }
                const tmp25 = get.get(sum1) || null;
                return updateFragment(dependencies, tmp25, value, lanes, null);
              }
            }
          }
          return null;
        }
      }
    }
    return updateTextNode(dependencies, get.get(sum1) || null, "" + value, lanes);
  }
  function reconcileChildFibersImpl(deletions, sibling, children, lanes) {
    let arr;
    let iter7;
    let sibling5;
    let sibling9;
    let tmp52;
    let tmp83;
    let obj = typeof children === "object";
    if (typeof children === "object") {
      obj = null;
      obj = null !== children;
    }
    if (obj) {
      obj = children.type === outer1_15;
    }
    if (obj) {
      obj = null === children.key;
    }
    if (obj) {
      children = children.props.children;
    }
    if (typeof children === "object") {
      obj = null;
      if (null !== children) {
        const $$typeof = children.$$typeof;
        if (outer1_13 === $$typeof) {
          if (null !== sibling) {
            obj = sibling;
            while (sibling.key !== obj) {
              obj = closure_0;
              if (closure_0) {
                deletions = deletions.deletions;
                if (null === deletions) {
                  let items = [sibling];
                  deletions.deletions = items;
                  deletions.flags = deletions.flags | 16;
                } else {
                  obj = deletions.push(sibling);
                }
              }
              sibling = sibling.sibling;
            }
            const type = children.type;
            obj = outer1_15;
            if (type === outer1_15) {
              if (7 === sibling.tag) {
                let sibling16 = sibling.sibling;
                obj = closure_0;
                if (closure_0) {
                  if (null !== sibling16) {
                    do {
                      obj = closure_0;
                      obj = sibling16;
                      if (closure_0) {
                        let deletions1 = deletions.deletions;
                        if (null === deletions1) {
                          let items1 = [sibling16];
                          deletions.deletions = items1;
                          deletions.flags = deletions.flags | 16;
                        } else {
                          obj = deletions1.push(sibling16);
                        }
                      }
                      sibling16 = sibling16.sibling;
                    } while (null !== sibling16);
                  }
                }
                obj = outer1_340;
                obj = outer1_340(sibling, children.props.children);
                obj.index = 0;
                obj.sibling = null;
                obj.return = deletions;
              }
              obj = closure_0;
              if (closure_0) {
                obj = null === obj.alternate;
              }
              if (obj) {
                obj.flags = obj.flags | 67108866;
              }
              return obj;
            } else if (sibling.elementType === type) {
              let sibling14 = sibling.sibling;
              obj = closure_0;
              if (closure_0) {
                if (null !== sibling14) {
                  do {
                    obj = closure_0;
                    obj = sibling14;
                    if (closure_0) {
                      let deletions2 = deletions.deletions;
                      if (null === deletions2) {
                        let items2 = [sibling14];
                        deletions.deletions = items2;
                        deletions.flags = deletions.flags | 16;
                      } else {
                        obj = deletions2.push(sibling14);
                      }
                    }
                    sibling14 = sibling14.sibling;
                  } while (null !== sibling14);
                }
              }
              obj = outer1_340;
              obj = outer1_340(sibling, children.props);
              obj.index = 0;
              obj.sibling = null;
              obj = null;
              if (undefined !== children.props.ref) {
                obj = ref;
              }
              obj.ref = obj;
              obj.return = deletions;
            } else if (typeof type === "object") {
              if (null !== type) {
                obj = outer1_24;
                if (type.$$typeof === outer1_24) {
                  obj = outer1_136;
                }
              }
            }
            obj = closure_0;
            if (closure_0) {
              let sibling15 = sibling;
              if (null !== sibling) {
                do {
                  obj = closure_0;
                  obj = sibling15;
                  if (closure_0) {
                    let deletions3 = deletions.deletions;
                    if (null === deletions3) {
                      let items3 = [sibling15];
                      deletions.deletions = items3;
                      deletions.flags = deletions.flags | 16;
                    } else {
                      obj = deletions3.push(sibling15);
                    }
                  }
                  sibling15 = sibling15.sibling;
                } while (null !== sibling15);
              }
            }
          }
          obj = outer1_15;
          if (children.type === outer1_15) {
            obj = outer1_338;
            obj = Object.create(outer1_338.prototype);
            obj = { tag: 7, key: children.key, elementType: null, type: null, stateNode: null, return: deletions, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: children.props.children, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: deletions.mode, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
          } else {
            obj = outer1_341;
            obj = lanes;
            obj = outer1_341(children.type, children.key, children.props, 0, deletions.mode, lanes);
            obj = null;
            if (undefined !== children.props.ref) {
              obj = ref2;
            }
            obj.ref = obj;
            obj.return = deletions;
          }
        } else {
          obj = outer1_14;
          if (outer1_14 === $$typeof) {
            let sibling11 = sibling;
            if (null !== sibling) {
              obj = sibling11;
              while (sibling11.key !== obj) {
                obj = closure_0;
                if (closure_0) {
                  let deletions4 = deletions.deletions;
                  if (null === deletions4) {
                    let items4 = [sibling11];
                    deletions.deletions = items4;
                    deletions.flags = deletions.flags | 16;
                  } else {
                    obj = deletions4.push(sibling11);
                  }
                }
                sibling11 = sibling11.sibling;
              }
              if (4 === sibling11.tag) {
                if (sibling11.stateNode.containerInfo === children.containerInfo) {
                  if (sibling11.stateNode.implementation === children.implementation) {
                    let sibling13 = sibling11.sibling;
                    obj = closure_0;
                    if (closure_0) {
                      if (null !== sibling13) {
                        do {
                          obj = closure_0;
                          obj = sibling13;
                          if (closure_0) {
                            let deletions5 = deletions.deletions;
                            if (null === deletions5) {
                              let items5 = [sibling13];
                              deletions.deletions = items5;
                              deletions.flags = deletions.flags | 16;
                            } else {
                              obj = deletions5.push(sibling13);
                            }
                          }
                          sibling13 = sibling13.sibling;
                        } while (null !== sibling13);
                      }
                    }
                    obj = children.children || [];
                    obj = outer1_340;
                    obj = outer1_340(sibling11, obj);
                    obj.index = 0;
                    obj.sibling = null;
                    obj.return = deletions;
                    let obj1 = obj;
                  }
                  obj = closure_0;
                  if (closure_0) {
                    obj = null === obj1.alternate;
                  }
                  if (obj) {
                    obj1.flags = obj1.flags | 67108866;
                  }
                  return obj1;
                }
              }
              obj = closure_0;
              if (closure_0) {
                let sibling12 = sibling11;
                if (null !== sibling11) {
                  do {
                    obj = closure_0;
                    obj = sibling12;
                    if (closure_0) {
                      let deletions6 = deletions.deletions;
                      if (null === deletions6) {
                        let items6 = [sibling12];
                        deletions.deletions = items6;
                        deletions.flags = deletions.flags | 16;
                      } else {
                        obj = deletions6.push(sibling12);
                      }
                    }
                    sibling12 = sibling12.sibling;
                  } while (null !== sibling12);
                }
              }
            }
            obj = outer1_338;
            obj = null !== children.children ? children.children : [];
            obj = Object.create(outer1_338.prototype);
            obj1 = { tag: 4, key: children.key, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: obj, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: deletions.mode, flags: 0, subtreeFlags: 0, deletions: null, lanes, childLanes: 0, alternate: null };
            const obj2 = { containerInfo: null, pendingChildren: null, implementation: null };
            ({ containerInfo: obj6[0], implementation: obj6[2] } = children);
            obj1.stateNode = obj2;
            obj1.return = deletions;
          } else {
            obj = outer1_24;
            if (outer1_24 === $$typeof) {
              obj = reconcileChildFibersImpl;
              obj = outer1_136;
              obj = deletions;
              obj = sibling;
              obj = lanes;
              return reconcileChildFibersImpl(deletions, sibling, outer1_136(children), lanes);
            } else {
              obj = updateFragment;
              if (updateFragment(children)) {
                closure_0 = deletions;
                let num26 = 0;
                let sibling8 = sibling;
                obj = null;
                obj = null;
                let num27 = 0;
                if (null !== sibling) {
                  let num29 = 0;
                  obj = sibling;
                  obj = null;
                  obj = null;
                  let num30 = 0;
                  num26 = 0;
                  sibling8 = sibling;
                  obj = null;
                  obj = null;
                  num27 = 0;
                  if (0 < children.length) {
                    while (true) {
                      obj = num29;
                      obj = num30;
                      sibling9 = obj;
                      obj = null;
                      if (obj.index <= num29) {
                        sibling9 = obj.sibling;
                      }
                      obj = updateSlot;
                      let num28 = 0;
                      obj = deletions;
                      obj = lanes;
                      obj = updateSlot(deletions, obj, children[num29], lanes);
                      if (null === obj) {
                        break;
                      } else {
                        obj = closure_0;
                        obj = closure_0;
                        if (obj) {
                          obj = null === obj.alternate;
                        }
                        if (obj) {
                          if (obj) {
                            let deletions7 = deletions.deletions;
                            if (null === deletions7) {
                              let items7 = [obj];
                              deletions.deletions = items7;
                              deletions.flags = deletions.flags | 16;
                            } else {
                              obj = deletions7.push(obj);
                            }
                          }
                        }
                        obj.index = num29;
                        if (obj) {
                          let index4 = obj.alternate;
                          if (null !== index4) {
                            index4 = index4.index;
                            if (index4 < num30) {
                              obj.flags = obj.flags | 67108866;
                              index4 = num30;
                            }
                            obj = index4;
                          } else {
                            obj.flags = obj.flags | 67108866;
                            obj = num30;
                          }
                        } else {
                          obj.flags = obj.flags | 1048576;
                          obj = num30;
                          if (null !== obj) {
                            obj.sibling = obj;
                          }
                          obj = num29 + 1;
                          num26 = obj;
                          sibling8 = sibling9;
                          num27 = obj;
                          if (null !== sibling9) {
                            num29 = obj;
                            obj = sibling9;
                            num30 = obj;
                            sibling8 = sibling9;
                            num27 = obj;
                            num26 = obj;
                          }
                        }
                      }
                    }
                    num26 = num29;
                    num27 = num30;
                    sibling8 = obj;
                    if (null === obj) {
                      num26 = num29;
                      sibling8 = sibling9;
                      num27 = num30;
                    }
                  }
                }
                if (num26 === children.length) {
                  obj = closure_0;
                  if (closure_0) {
                    if (null !== sibling8) {
                      do {
                        obj = closure_0;
                        obj = sibling8;
                        if (closure_0) {
                          let deletions8 = deletions.deletions;
                          if (null === deletions8) {
                            let items8 = [sibling8];
                            deletions.deletions = items8;
                            deletions.flags = deletions.flags | 16;
                          } else {
                            obj = deletions8.push(sibling8);
                          }
                        }
                        sibling8 = sibling8.sibling;
                      } while (null !== sibling8);
                    }
                  }
                } else if (null === sibling8) {
                  if (num26 < children.length) {
                    do {
                      obj = createChild;
                      obj = createChild(deletions, children[num26], lanes);
                      obj = num26;
                      obj = num27;
                      if (null !== obj) {
                        obj.index = num26;
                        obj = closure_0;
                        if (closure_0) {
                          let index6 = obj.alternate;
                          if (null !== index6) {
                            index6 = index6.index;
                            if (index6 < num27) {
                              obj.flags = obj.flags | 67108866;
                              index6 = num27;
                            }
                            obj = index6;
                          } else {
                            obj.flags = obj.flags | 67108866;
                            obj = num27;
                          }
                        } else {
                          obj.flags = obj.flags | 1048576;
                          obj = num27;
                          if (null !== obj) {
                            obj.sibling = obj;
                          }
                        }
                      }
                      num26 = num26 + 1;
                      num27 = obj;
                    } while (num26 < children.length);
                  }
                } else {
                  obj = globalThis;
                  const _Map2 = Map;
                  obj = new.target;
                  obj = new.target;
                  const map = new Map();
                  let sibling10 = sibling8;
                  obj = map;
                  if (null !== sibling8) {
                    do {
                      obj = sibling10;
                      if (null !== sibling10.key) {
                        obj = map.set(sibling10.key, sibling10);
                      } else {
                        obj = map.set(sibling10.index, sibling10);
                      }
                      sibling10 = sibling10.sibling;
                    } while (null !== sibling10);
                  }
                  obj = num26;
                  obj = num27;
                  if (num26 < children.length) {
                    while (true) {
                      obj = updateFromMap;
                      let num34 = 0;
                      obj = map;
                      obj = deletions;
                      obj = lanes;
                      obj = updateFromMap(obj, deletions, obj, children[obj], lanes);
                      if (null !== obj) {
                        obj = closure_0;
                        obj = closure_0;
                        if (closure_0) {
                          obj = null !== obj.alternate;
                        }
                        if (obj) {
                          let key2 = obj;
                          if (null !== obj.key) {
                            key2 = obj.key;
                          }
                          obj = map.delete(key2);
                        }
                        obj.index = obj;
                        if (obj) {
                          break;
                        } else {
                          obj.flags = obj.flags | 1048576;
                          if (null !== obj) {
                            obj.sibling = obj;
                          }
                        }
                      }
                      obj = obj + 1;
                    }
                    let index5 = obj.alternate;
                    if (null !== index5) {
                      index5 = index5.index;
                      if (index5 < obj) {
                        obj.flags = obj.flags | 67108866;
                        index5 = obj;
                      }
                      obj = index5;
                    } else {
                      obj.flags = obj.flags | 67108866;
                    }
                  }
                  obj = closure_0;
                  if (closure_0) {
                    obj = map.forEach((arg0) => {
                      if (closure_0) {
                        const deletions = tmp.deletions;
                        if (null === deletions) {
                          const items = [arg0];
                          tmp.deletions = items;
                          tmp.flags = tmp.flags | 16;
                        } else {
                          deletions.push(arg0);
                        }
                      }
                    });
                  }
                }
                return obj;
              } else {
                let tmp25 = null;
                if (null !== children) {
                  tmp25 = null;
                  if (typeof children === "object") {
                    iterable = outer1_27;
                    if (outer1_27) {
                      iterable = children[outer1_27];
                    }
                    if (!iterable) {
                      iterable = children[Symbol.iterator];
                    }
                    let tmp26 = null;
                    if (typeof iterable === "function") {
                      tmp26 = iterable;
                    }
                    tmp25 = tmp26;
                  }
                }
                if (tmp25) {
                  let tmp44 = null;
                  if (!tmp24) {
                    tmp44 = null;
                    if (typeof children === "object") {
                      Symbol_iterator2 = outer1_27;
                      if (outer1_27) {
                        Symbol_iterator2 = children[outer1_27];
                      }
                      if (!Symbol_iterator2) {
                        Symbol_iterator2 = children[Symbol.iterator];
                      }
                      let tmp45 = null;
                      if (typeof Symbol_iterator2 === "function") {
                        tmp45 = Symbol_iterator2;
                      }
                      tmp44 = tmp45;
                    }
                  }
                  if (typeof tmp44 !== "function") {
                    obj = globalThis;
                    const _Error4 = Error;
                    throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
                  } else {
                    const call2 = tmp44.call;
                    const iter = typeof call2 === "unknown" ? tmp44() : call2(children);
                    closure_0 = deletions;
                    if (null == iter) {
                      obj = globalThis;
                      const _Error3 = Error;
                      throw Error("An iterable object provided no iterator.");
                    } else {
                      const iter8 = iter.next();
                      let iter3 = iter8;
                      let num13 = 0;
                      let sibling6 = sibling;
                      let tmp65 = null;
                      let tmp66 = null;
                      let num14 = 0;
                      if (null !== sibling) {
                        let iter4 = iter8;
                        let num15 = 0;
                        let tmp67 = sibling;
                        let tmp68 = null;
                        let tmp69 = null;
                        let num16 = 0;
                        iter3 = iter8;
                        num13 = 0;
                        sibling6 = sibling;
                        tmp65 = null;
                        tmp66 = null;
                        num14 = 0;
                        if (!iter8.done) {
                          while (true) {
                            let tmp46 = iter4;
                            let tmp47 = num15;
                            let tmp48 = tmp67;
                            let tmp49 = tmp68;
                            let tmp50 = tmp69;
                            let tmp51 = num16;
                            sibling5 = tmp67;
                            tmp52 = null;
                            if (tmp67.index <= num15) {
                              sibling5 = tmp67.sibling;
                              tmp52 = tmp67;
                            }
                            let tmp53 = updateSlot;
                            let num12 = 0;
                            let tmp54 = deletions;
                            let tmp55 = tmp52;
                            let tmp56 = lanes;
                            let tmp57 = updateSlot(deletions, tmp52, iter4.value, lanes);
                            if (null === tmp57) {
                              break;
                            } else {
                              obj = closure_0;
                              let tmp58 = closure_0;
                              if (closure_0) {
                                tmp58 = tmp52;
                              }
                              if (tmp58) {
                                tmp58 = null === tmp57.alternate;
                              }
                              if (tmp58) {
                                if (obj) {
                                  let deletions9 = deletions.deletions;
                                  if (null === deletions9) {
                                    let items9 = [tmp52];
                                    deletions.deletions = items9;
                                    deletions.flags = deletions.flags | 16;
                                  } else {
                                    arr = deletions9.push(tmp52);
                                  }
                                }
                              }
                              tmp57.index = num15;
                              if (obj) {
                                let index = tmp57.alternate;
                                if (null !== index) {
                                  index = index.index;
                                  if (index < num16) {
                                    tmp57.flags = tmp57.flags | 67108866;
                                    index = num16;
                                  }
                                  let tmp61 = index;
                                } else {
                                  tmp57.flags = tmp57.flags | 67108866;
                                  tmp61 = num16;
                                }
                                let tmp62 = tmp61;
                              } else {
                                tmp57.flags = tmp57.flags | 1048576;
                                let tmp60 = num16;
                                let tmp63 = tmp57;
                                if (null !== tmp68) {
                                  tmp68.sibling = tmp57;
                                  tmp63 = tmp69;
                                }
                                let sum = num15 + 1;
                                let iter2 = iter.next();
                                iter3 = iter2;
                                num13 = sum;
                                sibling6 = sibling5;
                                tmp65 = tmp57;
                                tmp66 = tmp63;
                                num14 = tmp51;
                                if (null !== sibling5) {
                                  iter4 = iter2;
                                  num15 = sum;
                                  tmp67 = sibling5;
                                  tmp68 = tmp57;
                                  tmp69 = tmp63;
                                  num16 = tmp51;
                                  iter3 = iter2;
                                  num13 = sum;
                                  sibling6 = sibling5;
                                  tmp65 = tmp57;
                                  tmp66 = tmp63;
                                  num14 = tmp51;
                                }
                              }
                            }
                          }
                          iter3 = iter4;
                          num13 = num15;
                          tmp65 = tmp68;
                          tmp66 = tmp69;
                          num14 = num16;
                          sibling6 = tmp52;
                          if (null === tmp52) {
                            iter3 = iter4;
                            num13 = num15;
                            sibling6 = sibling5;
                            tmp65 = tmp68;
                            tmp66 = tmp69;
                            num14 = num16;
                          }
                        }
                      }
                      if (iter3.done) {
                        obj = closure_0;
                        let tmp98 = tmp66;
                        if (closure_0) {
                          tmp98 = tmp66;
                          if (null !== sibling6) {
                            do {
                              obj = closure_0;
                              obj = sibling6;
                              if (closure_0) {
                                let deletions10 = deletions.deletions;
                                if (null === deletions10) {
                                  let items10 = [sibling6];
                                  deletions.deletions = items10;
                                  deletions.flags = deletions.flags | 16;
                                } else {
                                  obj = deletions10.push(sibling6);
                                }
                              }
                              sibling6 = sibling6.sibling;
                              tmp98 = tmp66;
                            } while (null !== sibling6);
                          }
                        }
                      } else if (null === sibling6) {
                        obj = tmp66;
                        obj = tmp66;
                        if (!iter3.done) {
                          do {
                            obj = createChild;
                            obj = createChild(deletions, iter3.value, lanes);
                            obj = num13;
                            obj = tmp65;
                            obj = tmp65;
                            obj = num14;
                            if (null !== obj) {
                              obj.index = num13;
                              obj = closure_0;
                              if (closure_0) {
                                let index3 = obj.alternate;
                                if (null !== index3) {
                                  index3 = index3.index;
                                  if (index3 < num14) {
                                    obj.flags = obj.flags | 67108866;
                                    index3 = num14;
                                  }
                                  obj = index3;
                                } else {
                                  obj.flags = obj.flags | 67108866;
                                  obj = num14;
                                }
                              } else {
                                obj.flags = obj.flags | 1048576;
                                obj = num14;
                                if (null !== tmp65) {
                                  tmp65.sibling = obj;
                                }
                              }
                            }
                            num13 = num13 + 1;
                            iter7 = iter.next();
                            tmp65 = obj;
                            num14 = obj;
                            iter3 = iter7;
                          } while (!iter7.done);
                        }
                        tmp98 = obj;
                      } else {
                        obj = globalThis;
                        const _Map = Map;
                        obj = new.target;
                        obj = new.target;
                        const map1 = new Map();
                        let sibling7 = sibling6;
                        obj = map1;
                        if (null !== sibling6) {
                          do {
                            let tmp70 = sibling7;
                            if (null !== sibling7.key) {
                              let result = map1.set(sibling7.key, sibling7);
                            } else {
                              let result1 = map1.set(sibling7.index, sibling7);
                            }
                            sibling7 = sibling7.sibling;
                          } while (null !== sibling7);
                        }
                        let iter5 = iter3;
                        let sum1 = num13;
                        let tmp74 = tmp65;
                        let tmp75 = tmp66;
                        let tmp76 = num14;
                        let tmp77 = tmp66;
                        if (!iter3.done) {
                          while (true) {
                            let tmp78 = updateFromMap;
                            let num20 = 0;
                            let tmp79 = map1;
                            let tmp80 = deletions;
                            let tmp81 = sum1;
                            let tmp82 = lanes;
                            tmp83 = updateFromMap(obj, deletions, sum1, iter5.value, lanes);
                            let tmp84 = sum1;
                            let tmp85 = tmp74;
                            let tmp86 = tmp75;
                            let tmp88 = tmp74;
                            let tmp89 = tmp75;
                            let tmp90 = tmp76;
                            if (null !== tmp83) {
                              let tmp91 = closure_0;
                              obj = closure_0;
                              if (closure_0) {
                                tmp91 = null !== tmp83.alternate;
                              }
                              if (tmp91) {
                                let key = sum1;
                                if (null !== tmp83.key) {
                                  key = tmp83.key;
                                }
                                let deleteResult = map1.delete(key);
                              }
                              tmp83.index = sum1;
                              if (obj) {
                                break;
                              } else {
                                tmp83.flags = tmp83.flags | 1048576;
                                let tmp93 = tmp76;
                                let tmp96 = tmp83;
                                if (null !== tmp74) {
                                  tmp74.sibling = tmp83;
                                  tmp96 = tmp75;
                                }
                                tmp89 = tmp96;
                                tmp88 = tmp83;
                                tmp90 = tmp87;
                              }
                            }
                            sum1 = sum1 + 1;
                            let iter6 = iter.next();
                            tmp74 = tmp88;
                            tmp75 = tmp89;
                            tmp76 = tmp90;
                            iter5 = iter6;
                            tmp77 = tmp89;
                          }
                          let index2 = tmp83.alternate;
                          if (null !== index2) {
                            index2 = index2.index;
                            if (index2 < tmp76) {
                              tmp83.flags = tmp83.flags | 67108866;
                              index2 = tmp76;
                            }
                            let tmp94 = index2;
                          } else {
                            tmp83.flags = tmp83.flags | 67108866;
                            tmp94 = tmp76;
                          }
                        }
                        tmp98 = tmp77;
                        if (closure_0) {
                          const item = map1.forEach((arg0) => {
                            if (closure_0) {
                              const deletions = tmp.deletions;
                              if (null === deletions) {
                                const items = [arg0];
                                tmp.deletions = items;
                                tmp.flags = tmp.flags | 16;
                              } else {
                                deletions.push(arg0);
                              }
                            }
                          });
                          tmp98 = tmp77;
                        }
                      }
                      return tmp98;
                    }
                  }
                } else if (typeof children.then === "function") {
                  outer1_139 = outer1_139 + 1;
                  let tmp39 = outer1_138;
                  if (null === outer1_138) {
                    const items11 = [];
                    outer1_138 = items11;
                    tmp39 = items11;
                  }
                  return reconcileChildFibersImpl(deletions, sibling, outer1_135(tmp39, children, outer1_139), lanes);
                } else {
                  obj = outer1_19;
                  if (children.$$typeof === outer1_19) {
                    if (null === outer1_102) {
                      outer1_102 = deletions;
                      let outer1_103 = null;
                      const dependencies = deletions.dependencies;
                      if (null !== dependencies) {
                        dependencies.firstContext = null;
                      }
                    }
                    const _currentValue2 = children._currentValue2;
                    const obj3 = { context: null, memoizedValue: null, next: null };
                    obj3[0] = children;
                    obj3[1] = _currentValue2;
                    if (null === outer1_103) {
                      if (null === deletions) {
                        const _Error2 = Error;
                        throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
                      } else {
                        outer1_103 = obj3;
                        const obj4 = { lanes: 0, firstContext: null };
                        obj4[1] = obj3;
                        deletions.dependencies = obj4;
                        deletions.flags = deletions.flags | 524288;
                      }
                    } else {
                      tmp31.next = obj3;
                      outer1_103 = obj3;
                    }
                    return reconcileChildFibersImpl(deletions, sibling, _currentValue2, lanes);
                  } else {
                    obj = outer1_12;
                    if (children.$$typeof === outer1_12) {
                      const _Error = Error;
                      throw Error("A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the \"react\" package is used.\n- A library pre-bundled an old copy of \"react\" or \"react/jsx-runtime\".\n- A compiler tries to \"inline\" JSX instead of using the runtime.");
                    } else {
                      obj = globalThis;
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
            }
          }
        }
      }
    }
    if (typeof children !== "string") {
      if (typeof children !== "number") {
        if (typeof children !== "bigint") {
          obj = closure_0;
          obj = null;
          let tmp4 = null;
          if (closure_0) {
            let sibling2 = sibling;
            tmp4 = null;
            if (null !== sibling) {
              do {
                let tmp5 = closure_0;
                let tmp6 = sibling2;
                if (closure_0) {
                  let deletions11 = deletions.deletions;
                  if (null === deletions11) {
                    let items12 = [sibling2];
                    deletions.deletions = items12;
                    deletions.flags = deletions.flags | 16;
                  } else {
                    let arr1 = deletions11.push(sibling2);
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
              let tmp19 = sibling4;
              let tmp18 = closure_0;
              if (closure_0) {
                let deletions12 = deletions.deletions;
                if (null === deletions12) {
                  let items13 = [sibling4];
                  deletions.deletions = items13;
                  deletions.flags = deletions.flags | 16;
                } else {
                  let arr2 = deletions12.push(sibling4);
                }
              }
              sibling4 = sibling4.sibling;
              tmp16 = tmp18;
            } while (null !== sibling4);
          }
          tmp17 = tmp16;
        }
        const tmp22 = outer1_340(sibling, text1);
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
          let tmp13 = sibling3;
          let tmp12 = closure_0;
          if (closure_0) {
            let deletions13 = deletions.deletions;
            if (null === deletions13) {
              let items14 = [sibling3];
              deletions.deletions = items14;
              deletions.flags = deletions.flags | 16;
            } else {
              let arr3 = deletions13.push(sibling3);
            }
          }
          sibling3 = sibling3.sibling;
          tmp10 = tmp12;
        } while (null !== sibling3);
      }
      tmp11 = tmp10;
    }
    Object.create(outer1_338.prototype);
    obj = { tag: 6, key: null, elementType: null, type: null, stateNode: null, return: null, child: null, sibling: null, index: 0, ref: null, refCleanup: null, pendingProps: text1, memoizedProps: null, updateQueue: null, memoizedState: null, dependencies: null, mode: deletions.mode, flags: 0, subtreeFlags: 0, deletions: null, lanes: 0, childLanes: 0, alternate: null, lanes, return: deletions };
  }
  return (deletions, sibling, children, lanes) => {
    try {
      const outer1_139 = 0;
      const outer1_138 = null;
      return reconcileChildFibersImpl(deletions, sibling, children, lanes);
    } catch (promise) {
      if (promise !== outer1_130) {
        if (promise !== outer1_132) {
          const tmp14 = outer1_339(29, promise, null, tmp.mode);
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
function use(passed) {
  if (null !== passed) {
    if (typeof passed === "object") {
      if (typeof passed.then === "function") {
        closure_171 = closure_171 + 1;
        let tmp5 = items;
        if (null === items) {
          items = [];
          tmp5 = items;
        }
        if (null !== (null === _null4 ? c165.memoizedState : _null4.next)) {
          return trackUsedThenable(tmp5, passed, tmp4);
        } else {
          const alternate = tmp7.alternate;
          if (null !== alternate) {
            if (null !== alternate.memoizedState) {
              let tmp9 = obj9;
            }
            tmp8.H = tmp9;
          }
          tmp9 = closure_210;
        }
        tmp4 = closure_171;
      } else if (passed.$$typeof === closure_19) {
        const _currentValue2 = passed._currentValue2;
        let obj = { context: null, memoizedValue: null, next: null };
        obj[0] = passed;
        obj[1] = _currentValue2;
        if (null === obj) {
          if (null === tmp) {
            const _Error = Error;
            throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          } else {
            obj = { lanes: 0, firstContext: null };
            obj[1] = obj;
            tmp.dependencies = obj;
            tmp.flags = tmp.flags | 524288;
          }
        } else {
          tmp2.next = obj;
        }
        return _currentValue2;
      }
    }
  }
  throw Error("An unsupported type was passed to use(): " + String(passed));
}
function useMemoCache(arg0) {
  let data;
  let index;
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
          obj[0] = data.map((arr) => arr.slice());
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
        let tmp10 = closure_26;
        ArrayResult[num] = closure_26;
        num = num + 1;
        tmp6 = ArrayResult;
      } while (num < arg0);
    }
  }
  tmp2.index = tmp2.index + 1;
  return tmp6;
}
function updateSyncExternalStore(serializer, bindResult) {
  const tmp2 = updateWorkInProgressHook();
  const tmp3 = bindResult();
  let tmp5 = c166;
  if (!c166) {
    tmp5 = tmp2;
  }
  const tmp4Result = is(tmp5.memoizedState, tmp3);
  if (!tmp4Result) {
    tmp2.memoizedState = tmp3;
    let c222 = true;
  }
  const queue = tmp2.queue;
  const items = [serializer];
  updateEffectImpl(2048, 8, subscribeToStore.bind(null, _null2, queue, serializer), items);
  if (queue.getSnapshot === bindResult) {
    return tmp3;
  }
  _null2.flags = _null2.flags | 2048;
  let obj = { tag: 9, create: updateStoreInstance.bind(null, tmp, queue, tmp3, bindResult), deps: null, inst: { destroy: "r" }, next: null };
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
    tmp.flags = tmp.flags | 16384;
    obj = { getSnapshot: null, value: null };
    obj[0] = bindResult;
    obj[1] = tmp3;
    const updateQueue2 = _null2.updateQueue;
    if (null === updateQueue2) {
      const obj1 = { lastEffect: null, events: null, stores: null, memoCache: null };
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
    let tmpResult = tmp();
    tmpResult = tmp();
    tmpResult.memoizedState = memoizedState;
    const items = [tmp2.memoizedState, tmpResult.queue.dispatch, false];
    return items;
  }
}
function updateRef() {
  return updateWorkInProgressHook().memoizedState;
}
function updateEffect(imperativeHandleEffect, combined) {
  updateEffectImpl(2048, 8, imperativeHandleEffect, combined);
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
    if (2 & outer1_277) {
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
function updateInsertionEffect(imperativeHandleEffect, combined) {
  updateEffectImpl(4, 2, imperativeHandleEffect, combined);
}
function updateLayoutEffect(imperativeHandleEffect, combined) {
  updateEffectImpl(4, 4, imperativeHandleEffect, combined);
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
function updateMemo(arg0, arg1) {
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
  const tmp6 = arg0();
  if (c170) {
    setIsStrictModeForDevtools(true);
    try {
      arg0();
      tmp7(false);
    } catch (tmp11) {
      tmp(false);
      throw tmp11;
    }
    tmp7 = setIsStrictModeForDevtools;
  }
  const items = [tmp6, tmp4];
  tmp3.memoizedState = items;
  return tmp6;
}
function useHostTransitionStatus() {
  _currentValue2 = _currentValue2._currentValue2;
  let obj = { context: _currentValue2, memoizedValue: _currentValue2, next: null };
  if (null === obj) {
    if (null === tmp) {
      const _Error = Error;
      throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    } else {
      obj = { lanes: 0, firstContext: null };
      obj[1] = obj;
      tmp.dependencies = obj;
      tmp.flags = tmp.flags | 524288;
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
  let closure_0 = [];
  const obj = {
    aborted: false,
    addEventListener(arg0, arg1) {

    }
  };
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
      let closure_123 = 0;
      let tmp5 = c115;
      if (0 === c115) {
        let tmp6 = c124;
        if (0 === c124) {
          let c78 = tmp8;
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
      obj = { status: "pending", value: "Array", then: false };
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
        let c222 = true;
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
let obj8 = { readContext, use, useCallback: throwInvalidHookError, useContext: throwInvalidHookError, useEffect: throwInvalidHookError, useImperativeHandle: throwInvalidHookError, useLayoutEffect: throwInvalidHookError, useInsertionEffect: throwInvalidHookError, useMemo: throwInvalidHookError, useReducer: throwInvalidHookError, useRef: throwInvalidHookError, useState: throwInvalidHookError, useDebugValue: throwInvalidHookError, useDeferredValue: throwInvalidHookError, useTransition: throwInvalidHookError, useSyncExternalStore: throwInvalidHookError, useId: throwInvalidHookError, useHostTransitionStatus: throwInvalidHookError, useFormState: throwInvalidHookError, useActionState: throwInvalidHookError, useOptimistic: throwInvalidHookError, useMemoCache: throwInvalidHookError, useCacheRefresh: throwInvalidHookError, useEffectEvent: throwInvalidHookError };
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
        tmp6(false);
      } catch (tmp10) {
        tmp(false);
        throw tmp10;
      }
      tmp6 = setIsStrictModeForDevtools;
    }
    items = [tmp5, tmp4];
    mountWorkInProgressHook().memoizedState = items;
    return tmp5;
  },
  useReducer(lastRenderedReducer, arg1, arg2) {
    const tmp3 = mountWorkInProgressHook();
    let tmp4 = arg1;
    if (undefined !== arg2) {
      const tmp5 = arg2(arg1);
      tmp4 = tmp5;
      if (c170) {
        setIsStrictModeForDevtools(true);
        try {
          arg2(arg1);
          tmp7(false);
          tmp4 = tmp5;
        } catch (tmp12) {
          tmp(false);
          throw tmp12;
        }
        tmp7 = setIsStrictModeForDevtools;
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
    let obj = { current: stateFromStores };
    obj = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
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
      if (0 === c291) {
        if (536870912 & c280) {
          c291 = 536870912;
        } else {
          let c79 = tmp9;
          if (!(3932160 & c79 << 1)) {
            c79 = 262144;
          }
          c291 = c79;
          const tmp8 = c79;
        }
      }
      const current = closure_159.current;
      if (null !== current) {
        current.flags = current.flags | 32;
      }
      _null2.lanes = _null2.lanes | c291;
      closure_288 = closure_288 | c291;
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
      tmp.memoizedState = obj;
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
        tmp.flags = tmp.flags | 16384;
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
      const obj1 = { value: null, getSnapshot: null };
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
      const obj3 = { tag: null, create: null, deps: null, inst: null, next: null };
      obj3[0] = 9;
      obj3[1] = subscribeToStore.bind(null, tmp, obj1, subscribe);
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
      tmp.flags = tmp.flags | 2048;
      const obj5 = { tag: 9, create: null, deps: null, inst: null, next: null };
      obj5[1] = updateStoreInstance.bind(null, tmp, obj1, tmp4, get);
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
    let closure_173 = str + 1;
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
      if (2 & outer1_277) {
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
let obj9 = {
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
      if (null === (null === _null4 ? c165.memoizedState : _null4.next)) {
        const alternate = tmp6.alternate;
        if (null !== alternate) {
          if (null !== alternate.memoizedState) {
            let tmp8 = obj9;
          }
          tmp7.H = tmp8;
        }
        tmp8 = closure_210;
      }
      const tmp10 = closure_171;
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
  useCacheRefresh: updateRefresh,
  useEffectEvent: updateEvent
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
      queue.lastRenderedReducer = tmp;
      let memoizedState = tmp2.memoizedState;
      let tmp7 = memoizedState;
      if (null !== queue.pending) {
        queue.pending = null;
        const next = iter2.next;
        let iter = next;
        do {
          let action = iter.action;
          let tmp3 = iter;
          let tmp4 = memoizedState;
          actionResult = action;
          if (typeof action === "function") {
            actionResult = action(memoizedState);
          }
          iter = iter.next;
          memoizedState = actionResult;
        } while (iter !== next);
        if (!is(actionResult, tmp2.memoizedState)) {
          let c222 = true;
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
    tmp = basicStateReducer;
  },
  useDebugValue: mountDebugValue,
  useDeferredValue(memoizedState) {
    let tmp = arg1;
    const tmp2 = updateWorkInProgressHook();
    if (null === c166) {
      if (undefined !== tmp) {
        if (!(1073741824 & c164)) {
          tmp2.memoizedState = tmp;
          if (0 === c291) {
            if (536870912 & c280) {
              c291 = 536870912;
            } else {
              let c79 = tmp12;
              if (!(3932160 & c79 << 1)) {
                c79 = 262144;
              }
              c291 = c79;
              const tmp11 = c79;
            }
          }
          const current = closure_159.current;
          if (null !== current) {
            current.flags = current.flags | 32;
          }
          _null2.lanes = _null2.lanes | c291;
          closure_288 = closure_288 | c291;
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
      queue.lastRenderedReducer = tmp;
      let memoizedState = tmp2.memoizedState;
      let tmp7 = memoizedState;
      if (null !== queue.pending) {
        queue.pending = null;
        const next = iter2.next;
        let iter = next;
        do {
          let action = iter.action;
          let tmp3 = iter;
          let tmp4 = memoizedState;
          actionResult = action;
          if (typeof action === "function") {
            actionResult = action(memoizedState);
          }
          iter = iter.next;
          memoizedState = actionResult;
        } while (iter !== next);
        if (!is(actionResult, tmp2.memoizedState)) {
          let c222 = true;
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
        if (null === (null === _null4 ? c165.memoizedState : _null4.next)) {
          const alternate = tmp14.alternate;
          if (null !== alternate) {
            if (null !== alternate.memoizedState) {
              let tmp16 = obj9;
            }
            tmp15.H = tmp16;
          }
          tmp16 = closure_210;
        }
        const tmp19 = closure_171;
      }
      const items2 = [tmp10, updateWorkInProgressHook().memoizedState];
      return items2;
    }
    tmp = basicStateReducer;
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
      const tmp3 = updateReducerImpl;
      const tmp4 = c166;
    } else {
      tmp.baseState = baseState;
      items = [baseState, tmp.queue.dispatch];
    }
    return items;
  },
  useMemoCache,
  useCacheRefresh: updateRefresh,
  useEffectEvent: updateEvent
};
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
            let tmp5 = clz32Fallback;
            let diff = 31 - clz32Fallback(tmp4);
            let tmp7 = 1 << diff;
            let tmp8 = tmp4;
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
            let tmp5 = clz32Fallback;
            let diff = 31 - clz32Fallback(tmp4);
            let tmp7 = 1 << diff;
            let tmp8 = tmp4;
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
            let tmp5 = clz32Fallback;
            let diff = 31 - clz32Fallback(tmp4);
            let tmp7 = 1 << diff;
            let tmp8 = tmp4;
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
  getCacheForType(arg0) {
    const _currentValue2 = closure_107._currentValue2;
    let obj = { context: closure_107, memoizedValue: _currentValue2, next: null };
    if (null === obj) {
      if (null === tmp) {
        const _Error = Error;
        throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      } else {
        obj = { lanes: 0, firstContext: null };
        obj[1] = obj;
        tmp.dependencies = obj;
        tmp.flags = tmp.flags | 524288;
      }
    } else {
      tmp2.next = obj;
    }
    const data = _currentValue2.data;
    let value = data.get(arg0);
    if (undefined === value) {
      const tmp4 = arg0();
      const data2 = _currentValue2.data;
      const result = data2.set(arg0, tmp4);
      value = tmp4;
    }
    return value;
  },
  cacheSignal() {
    const _currentValue2 = closure_107._currentValue2;
    let obj = { context: closure_107, memoizedValue: _currentValue2, next: null };
    if (null === obj) {
      if (null === tmp) {
        const _Error = Error;
        throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      } else {
        obj = { lanes: 0, firstContext: null };
        obj[1] = obj;
        tmp.dependencies = obj;
        tmp.flags = tmp.flags | 524288;
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
let obj11 = { getInspectorDataForInstance: "r", getInspectorDataForViewTag: "Path", getInspectorDataForViewAtPoint: "TRANSPARENT" };
obj11[1] = function getInspectorDataForViewTag() {
  throw Error("getInspectorDataForViewTag() is not available in production");
};
obj11[2] = function getInspectorDataForViewAtPoint() {
  throw Error("getInspectorDataForViewAtPoint() is not available in production.");
};
const get = require("get BatchedBridge").ReactNativeViewConfigRegistry.get;
let c360 = 2;
if (globalThis.nativeFabricUIManager.registerEventHandler) {
  registerEventHandler(function dispatchEvent(stateNode) {
    let canonical;
    let publicInstance;
    const _require = stateNode;
    const dependencyMap = arg1;
    let closure_2 = arg2;
    publicInstance = null;
    if (null != stateNode) {
      canonical = stateNode.stateNode;
      if (null != canonical) {
        if (null != canonical.canonical) {
          if (null == canonical.canonical.publicInstance) {
            let obj = _require("00272_get_BatchedBridge.js") /* get BatchedBridge */;
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
    !(function batchedUpdates$1(arg0) {
      if (c69) {
        return arg0(undefined);
      } else {
        c69 = true;
        try {
          c69 = false;
          return callback(arg0, undefined);
        } catch (tmp2) {
          c69 = false;
          throw tmp2;
        }
      }
    })(() => {
      let _dispatchInstances;
      let _dispatchListeners;
      const obj = { eventName: dependencyMap, nativeEvent: closure_2 };
      const RawEventEmitter = stateNode(272).RawEventEmitter;
      RawEventEmitter.emit(dependencyMap, obj);
      const RawEventEmitter2 = stateNode(272).RawEventEmitter;
      RawEventEmitter2.emit("*", obj);
      let num = 0;
      let tmp4 = null;
      let tmp5 = null;
      if (0 < outer1_60.length) {
        while (true) {
          let obj2 = arr[num];
          let tmp6 = num;
          let tmp7 = tmp4;
          let extractEventsResult = obj2;
          let tmp9 = obj2;
          if (obj2) {
            let tmp10 = dependencyMap;
            let tmp11 = stateNode;
            let tmp12 = closure_2;
            let tmp13 = obj2;
            let tmp14 = tmp3;
            extractEventsResult = obj2.extractEvents(dependencyMap, stateNode, closure_2, tmp3);
            tmp9 = extractEventsResult;
          }
          let tmp15 = tmp4;
          if (extractEventsResult) {
            if (null == tmp9) {
              break;
            } else {
              let tmp39 = tmp9;
              if (null == tmp4) {
                tmp15 = tmp9;
              } else {
                let tmp16 = outer1_4;
                let tmp17 = outer1_4(tmp4);
                let applyResult = outer1_4(tmp9);
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
                let tmp19 = combined;
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
          let outer1_70 = tmp5;
        } else {
          let applyResult1 = outer1_4(tmp5);
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
          tmp21 = outer1_4(arr4);
        }
      }
      outer1_70 = null;
      if (outer1_70) {
        const _Array = Array;
        if (Array.isArray(arr7)) {
          const item = arr7.forEach(tmp24, undefined);
        } else if (arr7) {
          const call = tmp24.call;
          if (typeof call === "unknown") {
            if (arr7) {
              ({ _dispatchListeners, _dispatchInstances } = arr7);
              if (outer1_4(_dispatchListeners)) {
                if (0 < _dispatchListeners.length) {
                  let num2 = 0;
                  if (!arr7.isPropagationStopped()) {
                    outer1_35(arr7, _dispatchListeners[num2], _dispatchInstances[num2]);
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
                outer1_35(arr7, _dispatchListeners, _dispatchInstances);
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
        if (outer1_70) {
          const _Error = Error;
          throw Error("processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.");
        } else if (outer1_30) {
          outer1_30 = false;
          const outer1_31 = null;
          throw outer1_31;
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
      const obj = require("00272_get_BatchedBridge.js") /* get BatchedBridge */ /* get BatchedBridge */;
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
if (typeof require("get BatchedBridge").ReactFiberErrorDialog.showErrorDialog !== "function") {
  let _Error2 = Error;
  throw Error("Expected ReactFiberErrorDialog.showErrorDialog to be a function.");
} else {
  batchedUpdatesImpl = function batchedUpdatesImpl(arg0, arg1) {
    c277 = c277 | 1;
    try {
      c277 = tmp2;
      if (0 === tmp2) {
        let closure_297 = peek.unstable_now() + 500;
        flushSyncWorkAcrossRoots_impl(0, true);
        const obj = peek;
      }
      return arg0(arg1);
    } catch (tmp10) {
      c277 = tmp;
      if (0 === tmp) {
        closure_297 = peek.unstable_now() + 500;
        flushSyncWorkAcrossRoots_impl(0, true);
        const obj2 = peek;
      }
      throw tmp10;
    }
  };
  let _Map = Map;
  let map = new Map();
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
    let canonical;
    let publicInstance;
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
  exports.findNodeHandle = (__nativeTag) => {
    if (null == __nativeTag) {
      return null;
    } else if (typeof __nativeTag === "number") {
      return __nativeTag;
    } else if (__nativeTag._nativeTag) {
      return __nativeTag._nativeTag;
    } else {
      if (null != __nativeTag.canonical) {
        if (null != __nativeTag.canonical.nativeTag) {
          return __nativeTag.canonical.nativeTag;
        }
      }
      let nativeTagFromPublicInstance = require("00272_get_BatchedBridge.js") /* get BatchedBridge */ /* get BatchedBridge */.getNativeTagFromPublicInstance(__nativeTag);
      if (!nativeTagFromPublicInstance) {
        const tmp5 = findHostInstance(__nativeTag);
        if (null == tmp5) {
          nativeTagFromPublicInstance = tmp5;
        } else if (null != tmp5._nativeTag) {
          let _nativeTag = tmp5._nativeTag;
        } else {
          _nativeTag = require("00272_get_BatchedBridge.js") /* get BatchedBridge */ /* get BatchedBridge */.getNativeTagFromPublicInstance(tmp5);
          const tmpResult = require("00272_get_BatchedBridge.js") /* get BatchedBridge */ /* get BatchedBridge */;
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
        stateNode.publicInstance = require("00272_get_BatchedBridge.js") /* get BatchedBridge */ /* get BatchedBridge */.createPublicTextInstance(stateNode);
        const obj = require("00272_get_BatchedBridge.js") /* get BatchedBridge */ /* get BatchedBridge */;
      }
      let publicInstance = stateNode.publicInstance;
    } else {
      const stateNode2 = stateNode.stateNode;
      if (tmp != stateNode2.canonical) {
        if (tmp == stateNode2.canonical.publicInstance) {
          const obj2 = require("00272_get_BatchedBridge.js") /* get BatchedBridge */ /* get BatchedBridge */;
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
    let canonical;
    let publicInstance;
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
      let obj2 = require("00272_get_BatchedBridge.js") /* get BatchedBridge */ /* get BatchedBridge */;
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
      const obj3 = { controller: null, data: null, refCount: 0 };
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
      const obj5 = { baseState: null, firstBaseUpdate: null, lastBaseUpdate: null, shared: null, callbacks: null };
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
          const obj8 = require("00272_get_BatchedBridge.js") /* get BatchedBridge */ /* get BatchedBridge */;
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
      _nativeTag = require("00272_get_BatchedBridge.js") /* get BatchedBridge */ /* get BatchedBridge */.getNativeTagFromPublicInstance(_nativeTag);
      const obj = require("00272_get_BatchedBridge.js") /* get BatchedBridge */ /* get BatchedBridge */;
    }
    if (null != _nativeTag) {
      const nodeFromPublicInstance = require("00272_get_BatchedBridge.js") /* get BatchedBridge */ /* get BatchedBridge */.getNodeFromPublicInstance(_nativeTag);
      if (null != nodeFromPublicInstance) {
        const result = globalThis.nativeFabricUIManager.sendAccessibilityEvent(nodeFromPublicInstance, arg1);
      } else {
        const result1 = tmp4(272).legacySendAccessibilityEvent(_nativeTag, arg1);
        const tmp4Result = tmp4(272);
      }
      const obj2 = require("00272_get_BatchedBridge.js") /* get BatchedBridge */ /* get BatchedBridge */;
      tmp4 = require;
    }
  };
  exports.stopSurface = (arg0) => {
    let closure_0 = arg0;
    const value = map.get(arg0);
    const dependencyMap = value;
    if (value) {
      updateContainer(null, value, 0, () => {
        value.containerInfo.publicInstance = null;
        outer1_372.delete(closure_0);
      });
    }
  };
  exports.unmountComponentAtNode = function(arg0) {
    this.stopSurface(arg0);
  };
}
let obj12 = {
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
};
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
                    let tmp17Result = tmp17(items[diff], "captured", pooled);
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
          const item = pooled.forEach(tmp13, undefined);
        } else if (pooled) {
          const call2 = tmp13.call;
          if (typeof call2 === "unknown") {
            tmp13(pooled);
          } else {
            call2(undefined, pooled);
          }
        }
      } else if (tmp30) {
        const _Array = Array;
        if (Array.isArray(pooled)) {
          const item1 = pooled.forEach(tmp9, undefined);
        } else if (pooled) {
          const call = tmp9.call;
          if (typeof call === "unknown") {
            tmp9(pooled);
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