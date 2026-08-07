// _runtime/16413_Events.js
class Events {
  constructor() {
    return;
  }
}
function EE(fn, context) {
  let flag = arg2;
  if (!arg2) {
    flag = false;
  }
  { fn, context }.once = flag;
}
let flag = "~";
let c1 = "~";
let str = "~";
if (Object.create) {
  let _Object = Object;
  class Events {
    constructor() {
      return;
    }
  }
  Events.prototype = Object.create(null);
  if (!Object.create(Events.prototype).__proto__) {
    class Events {
      constructor() {
        return;
      }
    }
    flag = false;
  }
  str = flag;
}
class EventEmitter {
  constructor() {
    obj = { _events: Object.create(Events.prototype), _eventsCount: 0 };
    return;
  }
  eventNames() {
    items = [];
    if (0 === this._eventsCount) {
      return items;
    } else {
      _events = tmp._events;
      tmp8 = _events;
      num = 1;
      for (const key10004 in _events) {
        tmp9 = key10004;
        tmp10 = hasOwnProperty;
        call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          tmp10Result = tmp10(key10004);
        } else {
          tmp10Result = call(_events, key10004);
        }
        if (!tmp10Result) {
          continue;
        } else {
          tmp3 = c1;
          substr = key10004;
          if (!c1) {
          } else {
            substr = require("module_1");
          }
          arr = items.push(substr);
          continue;
        }
        continue;
      }
      tmp6 = globalThis;
      _Object = Object;
      combined = items;
      if (Object.getOwnPropertySymbols) {
        _Object2 = Object;
        combined = items.concat(Object.getOwnPropertySymbols(_events));
      }
      return combined;
    }
  }
  listeners(arg0) {
    sum = global;
    if (c1) {
      sum = c1 + global;
    }
    arr = this._events[sum];
    if (arr) {
      if (arr.fn) {
        items = [];
        items[0] = arr.fn;
        return items;
      } else {
        length = arr.length;
        tmp2 = globalThis;
        _Array = Array;
        tmp3 = new.target;
        tmp4 = new.target;
        tmp5 = length;
        array = new Array(length);
        tmp7 = array;
        num = 0;
        num2 = 1;
        if (0 < length) {
          do {
            array[num] = arr[num].fn;
            num = num + 1;
          } while (num < length);
        }
        return array;
      }
    } else {
      return [];
    }
  }
  listenerCount(arg0) {
    sum = global;
    if (c1) {
      sum = c1 + global;
    }
    arr = this._events[sum];
    num = 0;
    if (arr) {
      num2 = 1;
      if (!arr.fn) {
        num2 = arr.length;
      }
      num = num2;
    }
    return num;
  }
  emit(arg0, arg1, arg2, arg3, arg4, arg5) {
    sum = global;
    if (c1) {
      sum = c1 + global;
    }
    self = this;
    if (this._events[sum]) {
      tmp2 = require;
      tmp3 = importDefault;
      tmp4 = importAll;
      arr = self._events[sum];
      length = arguments.length;
      if (arr.fn) {
        if (arr.once) {
          flag3 = true;
          tmp22 = self;
          tmp23 = global;
          removeListenerResult = self.removeListener(global, arr.fn, undefined, true);
        }
        num7 = 1;
        if (1 === length) {
          fn12 = arr.fn;
          call10 = fn12.call;
          context10 = arr.context;
          if (typeof call10 === "unknown") {
            fn12Result = fn12();
          } else {
            call10Result = call10(context10);
          }
          flag10 = true;
          return true;
        } else {
          num9 = 2;
          if (2 === length) {
            fn11 = arr.fn;
            call9 = fn11.call;
            context9 = arr.context;
            if (typeof call9 === "unknown") {
              fn11Result = fn11(require);
            } else {
              call9Result = call9(context9, require);
            }
            flag9 = true;
            return true;
          } else {
            num10 = 3;
            if (3 === length) {
              fn10 = arr.fn;
              call8 = fn10.call;
              context8 = arr.context;
              if (typeof call8 === "unknown") {
                fn10Result = fn10(require, importDefault);
              } else {
                call8Result = call8(context8, require, importDefault);
              }
              flag8 = true;
              return true;
            } else {
              num11 = 4;
              if (4 === length) {
                fn9 = arr.fn;
                call7 = fn9.call;
                context7 = arr.context;
                if (typeof call7 === "unknown") {
                  fn9Result = fn9(require, importDefault, importAll);
                } else {
                  tmp74 = fn9;
                  tmp75 = context7;
                  tmp76 = require;
                  tmp77 = importDefault;
                  tmp78 = importAll;
                  call7Result = call7(context7, require, importDefault, importAll);
                }
                flag7 = true;
                return true;
              } else {
                tmp58 = module;
                num12 = 5;
                if (5 === length) {
                  fn8 = arr.fn;
                  call6 = fn8.call;
                  context6 = arr.context;
                  if (typeof call6 === "unknown") {
                    tmp39 = context6;
                    tmp40 = require;
                    tmp41 = importDefault;
                    tmp42 = importAll;
                    tmp43 = module;
                    fn8Result = fn8(require, importDefault, importAll, module);
                  } else {
                    tmp67 = fn8;
                    tmp68 = context6;
                    tmp69 = require;
                    tmp70 = importDefault;
                    tmp71 = importAll;
                    tmp72 = module;
                    call6Result = call6(context6, require, importDefault, importAll, module);
                  }
                  flag6 = true;
                  return true;
                } else {
                  num13 = 6;
                  if (6 === length) {
                    tmp31 = exports;
                    fn7 = arr.fn;
                    call5 = fn7.call;
                    context5 = arr.context;
                    if (typeof call5 === "unknown") {
                      tmp32 = context5;
                      tmp33 = require;
                      tmp34 = importDefault;
                      tmp35 = importAll;
                      tmp36 = module;
                      tmp37 = exports;
                      fn7Result = fn7(require, importDefault, importAll, module, exports);
                    } else {
                      tmp59 = fn7;
                      tmp60 = context5;
                      tmp61 = require;
                      tmp62 = importDefault;
                      tmp63 = importAll;
                      tmp64 = module;
                      tmp65 = exports;
                      call5Result = call5(context5, require, importDefault, importAll, module, exports);
                    }
                    flag5 = true;
                    return true;
                  } else {
                    tmp25 = globalThis;
                    _Array2 = Array;
                    tmp26 = new.target;
                    tmp27 = new.target;
                    array = new Array(length - 1);
                    tmp29 = array;
                    for (let num8 = 1; num8 < length; num8 = num8 + 1) {
                      array[num8 - 1] = arguments[num8];
                    }
                    fn6 = arr.fn;
                    applyResult = fn6.apply(arr.context, array);
                  }
                }
              }
            }
          }
        }
      } else {
        length2 = arr.length;
        num = 0;
        num2 = 1;
        tmp5 = globalThis;
        num3 = 4;
        num4 = 3;
        num5 = 2;
        if (0 < length2) {
          do {
            tmp7 = num;
            tmp8 = tmp6;
            if (arr[num].once) {
              tmp9 = self;
              tmp10 = global;
              flag2 = true;
              removeListenerResult1 = self.removeListener(global, arr[num].fn, undefined, true);
            }
            if (1 === length) {
              fn5 = arr[num].fn;
              call4 = fn5.call;
              context4 = arr[num].context;
              if (typeof call4 === "unknown") {
                fn5Result = fn5();
                tmp12 = tmp6;
              } else {
                call4Result = call4(context4);
                tmp12 = tmp6;
              }
            } else if (2 === length) {
              fn4 = arr[num].fn;
              call3 = fn4.call;
              context3 = arr[num].context;
              if (typeof call3 === "unknown") {
                fn4Result = fn4(require);
                tmp12 = tmp6;
              } else {
                call3Result = call3(context3, require);
                tmp12 = tmp6;
              }
            } else if (3 === length) {
              fn3 = arr[num].fn;
              call2 = fn3.call;
              context2 = arr[num].context;
              if (typeof call2 === "unknown") {
                fn3Result = fn3(require, importDefault);
                tmp12 = tmp6;
              } else {
                call2Result = call2(context2, require, importDefault);
                tmp12 = tmp6;
              }
            } else if (4 === length) {
              fn2 = arr[num].fn;
              call = fn2.call;
              context = arr[num].context;
              if (typeof call === "unknown") {
                fn2Result = fn2(require, importDefault, importAll);
                tmp12 = tmp6;
              } else {
                tmp49 = fn2;
                tmp50 = context;
                tmp51 = require;
                tmp52 = importDefault;
                tmp53 = importAll;
                callResult = call(context, require, importDefault, importAll);
                tmp12 = tmp6;
              }
            } else {
              tmp12 = tmp6;
              if (!tmp6) {
                _Array = Array;
                tmp13 = new.target;
                tmp14 = new.target;
                array1 = new Array(length - 1);
                tmp16 = array1;
                num6 = 1;
                tmp12 = array1;
                if (1 < length) {
                  do {
                    array1[num6 - 1] = arguments[num6];
                    num6 = num6 + 1;
                    tmp12 = array1;
                  } while (num6 < length);
                }
              }
              fn = arr[num].fn;
              applyResult1 = fn.apply(arr[num].context, tmp12);
            }
            num = num + 1;
            tmp6 = tmp12;
          } while (num < length2);
        }
      }
      flag4 = true;
      return true;
    } else {
      flag = false;
      return false;
    }
  }
  on(arg0, arg1, arg2) {
    if (typeof require !== "function") {
      tmp6 = globalThis;
      _TypeError = TypeError;
      tmp7 = new.target;
      str = "The listener must be a function";
      tmp8 = new.target;
      typeError = new TypeError("The listener must be a function");
      tmp10 = typeError;
      throw typeError;
    } else {
      self = this;
      tmp = importDefault;
      tmp11 = EE;
      if (!importDefault) {
        tmp = self;
      }
      tmp2 = global;
      obj = Object.create(tmp11.prototype);
      obj = {};
      obj.fn = require;
      obj.context = tmp;
      flag = false;
      obj.once = false;
      sum = global;
      if (c1) {
        sum = c1 + global;
      }
      _events = self._events;
      if (self._events[sum]) {
        _events2 = self._events;
        if (_events[sum].fn) {
          items = [, ];
          items[0] = self._events[sum];
          items[1] = obj;
          _events2[sum] = items;
        } else {
          arr = _events2[sum];
          arr = arr.push(obj);
        }
      } else {
        _events[sum] = obj;
        self._eventsCount = self._eventsCount + 1;
      }
      return self;
    }
  }
  once(arg0, arg1, arg2) {
    if (typeof require !== "function") {
      tmp6 = globalThis;
      _TypeError = TypeError;
      tmp7 = new.target;
      str = "The listener must be a function";
      tmp8 = new.target;
      typeError = new TypeError("The listener must be a function");
      tmp10 = typeError;
      throw typeError;
    } else {
      self = this;
      tmp = importDefault;
      tmp11 = EE;
      if (!importDefault) {
        tmp = self;
      }
      tmp2 = global;
      obj = Object.create(tmp11.prototype);
      obj = {};
      obj.fn = require;
      obj.context = tmp;
      flag = true;
      obj.once = true;
      sum = global;
      if (c1) {
        sum = c1 + global;
      }
      _events = self._events;
      if (self._events[sum]) {
        _events2 = self._events;
        if (_events[sum].fn) {
          items = [, ];
          items[0] = self._events[sum];
          items[1] = obj;
          _events2[sum] = items;
        } else {
          arr = _events2[sum];
          arr = arr.push(obj);
        }
      } else {
        _events[sum] = obj;
        self._eventsCount = self._eventsCount + 1;
      }
      return self;
    }
  }
  removeListener(arg0, arg1, arg2, arg3) {
    sum = global;
    if (c1) {
      sum = c1 + global;
    }
    self = this;
    if (this._events[sum]) {
      tmp4 = require;
      if (require) {
        tmp7 = importDefault;
        tmp8 = importAll;
        arr = self._events[sum];
        if (arr.fn) {
          tmp17 = arr.fn !== require;
          if (!tmp17) {
            if (tmp8) {
              tmp8 = !arr.once;
            }
            tmp17 = tmp8;
          }
          if (!tmp17) {
            tmp18 = importDefault;
            if (importDefault) {
              tmp18 = arr.context !== importDefault;
            }
            tmp17 = tmp18;
          }
          if (!tmp17) {
            diff = self._eventsCount - 1;
            self._eventsCount = diff;
            num5 = 0;
            if (0 == diff) {
              tmp20 = Events;
              self._events = Object.create(Events.prototype);
            } else {
              _events3 = self._events;
              delete tmp[tmp2];
            }
          }
        } else {
          items = [];
          length = arr.length;
          num2 = 0;
          num3 = 1;
          for (let num4 = 0; num4 < length; num4 = num4 + 1) {
            tmp9 = arr[num4].fn !== require;
            tmp10 = num4;
            if (!tmp9) {
              tmp11 = tmp8;
              if (tmp8) {
                tmp11 = !arr[num4].once;
              }
              tmp9 = tmp11;
            }
            if (!tmp9) {
              tmp12 = importDefault;
              if (importDefault) {
                tmp12 = arr[num4].context !== importDefault;
              }
              tmp9 = tmp12;
            }
            if (tmp9) {
              arr = items.push(arr[num4]);
            }
          }
          if (items.length) {
            first = items;
            if (1 === items.length) {
              first = items[0];
            }
            self._events[sum] = first;
          } else {
            diff1 = self._eventsCount - 1;
            self._eventsCount = diff1;
            if (0 == diff1) {
              tmp15 = Events;
              self._events = Object.create(Events.prototype);
            } else {
              _events2 = self._events;
              delete tmp[tmp2];
            }
          }
        }
        return self;
      } else {
        diff2 = self._eventsCount - 1;
        self._eventsCount = diff2;
        num = 0;
        if (0 == diff2) {
          tmp6 = Events;
          self._events = Object.create(Events.prototype);
        } else {
          _events = self._events;
          delete tmp[tmp2];
        }
        return self;
      }
    } else {
      return self;
    }
  }
  removeAllListeners(arg0) {
    self = this;
    if (global) {
      sum = global;
      if (c1) {
        sum = c1 + global;
      }
      if (self._events[sum]) {
        diff = self._eventsCount - 1;
        self._eventsCount = diff;
        num2 = 0;
        if (0 == diff) {
          tmp6 = Events;
          self._events = Object.create(Events.prototype);
        } else {
          _events = self._events;
          delete tmp[tmp2];
        }
      }
    } else {
      tmp3 = Events;
      self._events = Object.create(Events.prototype);
      num = 0;
      self._eventsCount = 0;
    }
    return self;
  }
}
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
EventEmitter.prefixed = str;
EventEmitter.EventEmitter = EventEmitter;
if (undefined !== module) {
  module.exports = EventEmitter;
}