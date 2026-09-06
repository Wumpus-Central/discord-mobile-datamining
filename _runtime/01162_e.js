// _runtime/01162_e.js
let fn = (fn) => {
  fn = Object.setPrototypeOf;
  if (!fn) {
    let _Array = Array;
    let fn2 = Object.create([]) instanceof Array;
    if (fn2) {
      fn2 = (arg0, arg1) => {
        arg0.__proto__ = arg1;
      };
    }
    fn = fn2;
  }
  if (!fn) {
    fn = (arg0, obj) => {
      for (const key10005 in arg1) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        let call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty(key10005);
        } else {
          hasOwnPropertyResult = call(arg1, key10005);
        }
        if (!hasOwnPropertyResult) {
          continue;
        } else {
          arg0[key10005] = arg1[key10005];
          continue;
        }
        continue;
      }
    };
  }
  function e(arg0, fn) {
    closure_0 = arg0;
    if (typeof fn !== "function") {
      if (null !== fn) {
        const _TypeError = TypeError;
        const _String = String;
        const typeError = new TypeError("Class extends value " + String(fn) + " is not a constructor or null");
        throw typeError;
      }
    }
    e(arg0, fn);
    if (null === fn) {
      const _Object = Object;
      let obj = Object.create(fn);
    } else {
      class __ {
        constructor() {
          this.constructor = closure_0;
          return;
        }
      }
      __.prototype = fn.prototype;
      obj = Object.create(__.prototype);
      obj.constructor = arg0;
    }
    arg0.prototype = obj;
  }
  let fn3 = Object.assign;
  if (!fn3) {
    fn3 = (arg0) => {
      for (let num = 1; num < length; num = num + 1) {
        let tmp = arguments[num];
        for (const key10012 in tmp) {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let hasOwnPropertyResult = hasOwnProperty(key10012);
          } else {
            hasOwnPropertyResult = call(tmp, key10012);
          }
          if (!hasOwnPropertyResult) {
            continue;
          } else {
            arg0[key10012] = tmp[key10012];
            continue;
          }
          continue;
        }
      }
      return arg0;
    };
  }
  fn = function r(obj, arr) {
    obj = {};
    for (const key10007 in arg0) {
      let _Object2 = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      let call2 = hasOwnProperty.call;
      if (typeof call2 === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty(key10007);
      } else {
        hasOwnPropertyResult = call2(arg0, key10007);
      }
      if (hasOwnPropertyResult) {
        hasOwnPropertyResult = arg1.indexOf(key10007) < 0;
      }
      if (!hasOwnPropertyResult) {
        continue;
      } else {
        obj[key10007] = arg0[key10007];
        continue;
      }
      continue;
    }
    if (null != obj) {
      const _Object3 = Object;
      if (typeof Object.getOwnPropertySymbols === "function") {
        const _Object4 = Object;
        const ownPropertySymbols = Object.getOwnPropertySymbols(obj);
        let num = 0;
        if (0 < ownPropertySymbols.length) {
          const tmp2 = arr.indexOf(ownPropertySymbols[num]) < 0;
          while (!tmp2) {
            if (tmp2) {
              obj[ownPropertySymbols[num]] = obj[ownPropertySymbols[num]];
            }
            num = num + 1;
          }
          const _Object = Object;
          const call = propertyIsEnumerable.call;
          typeof call === "unknown" ? propertyIsEnumerable(ownPropertySymbols[num]) : call(obj, ownPropertySymbols[num]);
        }
      }
    }
    return obj;
  };
  closure_3 = function n(arg0, arg1, arg2, arg3) {
    const length = arguments.length;
    let tmp = arg3;
    let tmp2 = arg1;
    if (length >= 3) {
      let ownPropertyDescriptor = arg3;
      let tmp5 = arg3;
      if (null === arg3) {
        const _Object = Object;
        ownPropertyDescriptor = Object.getOwnPropertyDescriptor(arg1, arg2);
        tmp5 = ownPropertyDescriptor;
      }
      tmp = ownPropertyDescriptor;
      tmp2 = tmp5;
    }
    if (typeof Reflect === "object") {
      const _Reflect3 = Reflect;
      if (typeof Reflect.decorate === "function") {
        const _Reflect = Reflect;
        const _Reflect2 = Reflect;
        let decorateResult = Reflect.decorate(arg0, arg1, arg2, tmp);
      }
      if (tmp19) {
        const _Object2 = Object;
        Object.defineProperty(arg1, arg2, decorateResult);
      }
      return decorateResult;
    }
    let diff = arg0.length - 1;
    let tmp8 = tmp2;
    decorateResult = tmp2;
    if (0 <= diff) {
      do {
        let tmp10 = arg0[diff];
        let tmp13 = tmp8;
        if (tmp10) {
          if (length < 3) {
            let tmp10Result = tmp10(tmp8);
          } else {
            tmp10Result = length > 3 ? tmp10(arg1, arg2, tmp8) : tmp10(arg1, arg2);
          }
          if (!tmp10Result) {
            tmp10Result = tmp8;
          }
          tmp13 = tmp10Result;
        }
        diff = diff - 1;
        tmp8 = tmp13;
        decorateResult = tmp13;
      } while (0 <= diff);
    }
  };
  function o(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    return (arg0, arg1) => {
      closure_1(arg0, arg1, closure_0);
    };
  }
  function i(arg0, arg1, arg2, kind, arr, arg5) {
    closure_0 = arg5;
    kind = kind.kind;
    let str = "get";
    if ("getter" !== kind) {
      let str2 = "value";
      if ("setter" === kind) {
        str2 = "set";
      }
      str = str2;
    }
    let tmp = null;
    if (!arg1) {
      tmp = null;
      if (arg0) {
        let prototype = arg0;
        if (!kind.static) {
          prototype = arg0.prototype;
        }
        tmp = prototype;
      }
    }
    if (arg1) {
      c1 = false;
      let diff = arg2.length - 1;
      if (0 <= diff) {
        while (true) {
          let obj = {};
          for (const key10035 in arg3) {
            if ("access" === key10035) {
              obj = {};
            } else {
              obj = arg3[key10035];
            }
            obj[key10035] = obj;
            continue;
          }
          for (const key10039 in arg3.access) {
            obj.access[key10039] = arg3.access[key10039];
            continue;
          }
          obj.addInitializer = (arg0) => {
            if (c1) {
              const _TypeError2 = TypeError;
              const typeError = new TypeError("Cannot add initializers after decoration has completed");
              throw typeError;
            } else {
              let tmp = arg0;
              if (!arg0) {
                tmp = null;
              }
              if (undefined !== tmp) {
                if (typeof tmp !== "function") {
                  const _TypeError = TypeError;
                  const typeError1 = new TypeError("Function expected");
                  throw typeError1;
                }
              }
              closure_0.push(tmp);
            }
          };
          if (tmp7) {
            let obj1 = { get: null, set: null };
            ({ get: obj4.get, set: obj4.set } = arg1);
            let tmp10 = obj1;
          } else {
            tmp10 = arg1[str];
          }
          let tmp11 = arg2[diff](tmp10, obj);
          if (tmp7) {
            if (undefined !== tmp11) {
              if (null !== tmp11) {
                if (typeof tmp11 === "object") {
                  let get = tmp11.get;
                  if (undefined !== get) {
                    if (typeof get !== "function") {
                      let tmp29 = globalThis;
                      let _TypeError4 = TypeError;
                      let tmp30 = new.target;
                      let str10 = "Function expected";
                      let tmp31 = new.target;
                      let typeError = new TypeError("Function expected");
                      throw typeError;
                    }
                  }
                  if (get) {
                    arg1.get = get;
                  }
                  let set = tmp11.set;
                  if (undefined !== set) {
                    if (typeof set !== "function") {
                      let tmp24 = globalThis;
                      let _TypeError3 = TypeError;
                      let tmp25 = new.target;
                      let str9 = "Function expected";
                      let tmp26 = new.target;
                      let typeError1 = new TypeError("Function expected");
                      throw typeError1;
                    }
                  }
                  if (set) {
                    arg1.set = set;
                  }
                  let init = tmp11.init;
                  if (undefined !== init) {
                    if (typeof init !== "function") {
                      let tmp19 = globalThis;
                      let _TypeError2 = TypeError;
                      let tmp20 = new.target;
                      let str8 = "Function expected";
                      let tmp21 = new.target;
                      let typeError2 = new TypeError("Function expected");
                      throw typeError2;
                    }
                  }
                  if (init) {
                    arr = arr.unshift(init);
                  }
                }
              }
              let tmp34 = globalThis;
              let _TypeError5 = TypeError;
              let tmp35 = new.target;
              let str11 = "Object expected";
              let tmp36 = new.target;
              let typeError3 = new TypeError("Object expected");
              throw typeError3;
            }
          } else {
            if (undefined !== tmp11) {
              if (typeof tmp11 !== "function") {
                break;
              }
            }
            if (tmp11) {
              if ("field" === kind) {
                arr = arr.unshift(tmp11);
              } else {
                arg1[str] = tmp11;
              }
            }
          }
          diff = diff - 1;
        }
        let _TypeError = TypeError;
        const typeError4 = new TypeError("Function expected");
        throw typeError4;
      }
      if (tmp) {
        const _Object2 = Object;
        Object.defineProperty(tmp, kind.name, arg1);
      }
      c1 = true;
    } else if (tmp) {
      const _Object = Object;
      let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(tmp, kind.name);
    } else {
      ownPropertyDescriptor = {};
    }
  }
  function c(arg0, arg1, arg2) {
    let tmp = arg2;
    const tmp2 = arguments.length > 2;
    let num = 0;
    let tmp3 = arg2;
    if (0 < arg1.length) {
      const call = tmp4.call;
      while (!tmp2) {
        let tmp7 = typeof call === "unknown" ? tmp4() : call(arg0);
        num = num + 1;
        tmp = tmp7;
        tmp3 = tmp7;
      }
      typeof call === "unknown" ? arg1[num](tmp) : call(arg0, tmp);
    }
    let tmp9;
    if (tmp2) {
      tmp9 = tmp3;
    }
    return tmp9;
  }
  function a(arg0) {
    let combined = arg0;
    if (typeof arg0 !== "symbol") {
      const concat = "".concat;
      combined = "".concat(arg0);
    }
    return combined;
  }
  function u(arg0, description, arg2) {
    let tmp = description;
    if (typeof description === "symbol") {
      let str3 = "";
      if (description.description) {
        const concat = "[".concat;
        str3 = "[".concat(description.description, "]");
      }
      tmp = str3;
    }
    value = tmp;
    if (arg2) {
      const concat2 = "".concat;
      value = "".concat(arg2, " ", tmp);
    }
    return Object.defineProperty(arg0, "name", { configurable: true, value });
  }
  function f(revealProgress, arg1) {
    if (typeof Reflect === "object") {
      const _Reflect2 = Reflect;
      if (typeof Reflect.metadata === "function") {
        const _Reflect = Reflect;
        return Reflect.metadata(revealProgress, arg1);
      }
    }
  }
  function s(arg0, arg1, arg2, arg3) {
    closure_0 = arg0;
    closure_1 = arg1;
    let _Promise = arg2;
    closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((fn, arg1) => {
      closure_0 = fn;
      closure_1 = arg1;
      function fulfilled(result) {
        try {
          step(iter.next(result));
        } catch (tmp5) {
          closure_1(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          closure_1(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          closure_0(done.value);
        } else {
          let tmp = done.value;
          closure_0 = tmp;
          if (!(tmp instanceof Promise)) {
            tmp = new tmp((fn) => {
              fn(value);
            });
          }
          tmp.then(fulfilled, iter);
        }
      }
      let items = closure_1;
      if (!closure_1) {
        items = [];
      }
      iter = iter.apply(closure_0, items);
      const iter2 = iter.next();
      value = iter2.value;
      if (iter2.done) {
        fn(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((fn) => {
            fn(value);
          });
        }
        tmp3.then(fulfilled, rejected);
      }
    });
    return _Promise;
  }
  function l(arg0, arg1) {
    closure_1 = arg1;
    closure_5 = {
      label: 0,
      sent() {
        if (1 & dependencyMap[0]) {
          throw tmp;
        } else {
          return tmp;
        }
      },
      trys: [],
      ops: []
    };
    let obj = Object.create(typeof globalThis.Iterator === "function" ? globalThis.Iterator : Object.prototype);
    obj.next = (arg0) => {
      let items = [c0, arg0];
      return (function step(items) {
        let iter;
        let items1 = items;
        if (c2) {
          const _TypeError = TypeError;
          const typeError = new TypeError("Generator is already executing.");
          throw typeError;
        } else {
          if (c6) {
            c6 = 0;
            if (items1[0]) {
              c5 = 0;
            }
          }
          if (c5) {
            try {
              while (true) {
                c2 = 1;
                if (c3) {
                  if (2 & items1[0]) {
                    let next = c3.return;
                  } else {
                    iter = c3;
                    if (items1[0]) {
                      break;
                    } else {
                      next = iter.next;
                    }
                  }
                  _return = next;
                  if (next) {
                    let tmp10 = next;
                    let call2 = next.call;
                    _return = c3;
                    let tmp15 = items1[1];
                    if (typeof call2 === "unknown") {
                      let iter2 = tmp10(tmp15);
                    } else {
                      iter2 = call2(_return, tmp15);
                    }
                    _return = iter2;
                    if (!iter2.done) {
                      _return = 0;
                      c2 = 0;
                      return _return;
                    }
                  }
                }
                c3 = 0;
                if (_return) {
                  items = [2 & items1[0], ];
                  items[1] = _return.value;
                  items1 = items;
                }
                let first = items1[0];
                if (0 !== first) {
                  if (1 !== first) {
                    if (4 === first) {
                      c5.label = c5.label + 1;
                      obj = { value: null, done: false };
                      obj.value = items1[1];
                      _return = 0;
                      c2 = 0;
                      return obj;
                    } else {
                      if (5 === first) {
                        c5.label = c5.label + 1;
                        c3 = items1[1];
                        items1 = [0];
                        _return = 0;
                        c2 = 0;
                      } else if (7 === first) {
                        let ops = c5.ops;
                        items1 = ops.pop();
                        let trys = c5.trys;
                        let arr = trys.pop();
                        _return = 0;
                        c2 = 0;
                      } else {
                        let trys1 = c5.trys;
                        _return = trys1;
                        let tmp26 = trys1.length > 0;
                        if (tmp26) {
                          tmp26 = _return[_return.length - 1];
                        }
                        _return = tmp26;
                        if (!tmp26) {
                          if (6 === items1[0]) {
                            c5 = 0;
                            _return = 0;
                            c2 = 0;
                          }
                        }
                        if (3 !== items1[0]) {
                          if (6 === items1[0]) {
                            if (c5.label < _return[1]) {
                              c5.label = _return[1];
                              _return = items1;
                            }
                          }
                          if (_return) {
                            if (c5.label < _return[2]) {
                              c5.label = _return[2];
                              let ops1 = c5.ops;
                              arr = ops1.push(items1);
                            }
                          }
                          if (_return[2]) {
                            let ops2 = c5.ops;
                            let arr1 = ops2.pop();
                          }
                          let trys2 = c5.trys;
                          let arr2 = trys2.pop();
                          _return = 0;
                          c2 = 0;
                        } else {
                          if (_return) {
                          }
                          c5.label = items1[1];
                        }
                      }
                      if (c6) {
                        c6 = 0;
                        if (items1[0]) {
                          c5 = 0;
                        }
                      }
                    }
                  }
                  let call3 = closure_1_1.call;
                  let tmp78 = c5;
                  if (typeof call3 === "unknown") {
                    let call3Result = closure_1_1(tmp78);
                  } else {
                    call3Result = call3(closure_1_0, tmp78);
                  }
                  _return = 0;
                  c2 = 0;
                  let items2 = [6, __exception];
                  c3 = 0;
                }
                _return = items1;
              }
              let num10 = iter.throw;
              if (!num10) {
                _return = c3.return;
                num10 = 0;
                if (_return) {
                  tmp10 = _return;
                  const call = _return.call;
                  _return = c3;
                  if (typeof call !== "unknown") {
                    call(_return);
                    num10 = 0;
                  }
                }
                _return = tmp10();
                num10 = 0;
              }
            } catch (tmp88) {
              _return = tmp;
              c2 = tmp;
              throw tmp88;
            }
          }
          if (5 & items1[0]) {
            throw items1[1];
          } else {
            let tmp87;
            if (items1[0]) {
              tmp87 = items1[1];
            }
            obj = { value: tmp87, done: true };
            return obj;
          }
        }
      })(items);
    };
    obj.throw = (arg0) => {
      let items = [c0, arg0];
      return (function step(items) {
        let iter;
        let items1 = items;
        if (c2) {
          const _TypeError = TypeError;
          const typeError = new TypeError("Generator is already executing.");
          throw typeError;
        } else {
          if (c6) {
            c6 = 0;
            if (items1[0]) {
              c5 = 0;
            }
          }
          if (c5) {
            try {
              while (true) {
                c2 = 1;
                if (c3) {
                  if (2 & items1[0]) {
                    let next = c3.return;
                  } else {
                    iter = c3;
                    if (items1[0]) {
                      break;
                    } else {
                      next = iter.next;
                    }
                  }
                  _return = next;
                  if (next) {
                    let tmp10 = next;
                    let call2 = next.call;
                    _return = c3;
                    let tmp15 = items1[1];
                    if (typeof call2 === "unknown") {
                      let iter2 = tmp10(tmp15);
                    } else {
                      iter2 = call2(_return, tmp15);
                    }
                    _return = iter2;
                    if (!iter2.done) {
                      _return = 0;
                      c2 = 0;
                      return _return;
                    }
                  }
                }
                c3 = 0;
                if (_return) {
                  items = [2 & items1[0], ];
                  items[1] = _return.value;
                  items1 = items;
                }
                let first = items1[0];
                if (0 !== first) {
                  if (1 !== first) {
                    if (4 === first) {
                      c5.label = c5.label + 1;
                      obj = { value: null, done: false };
                      obj.value = items1[1];
                      _return = 0;
                      c2 = 0;
                      return obj;
                    } else {
                      if (5 === first) {
                        c5.label = c5.label + 1;
                        c3 = items1[1];
                        items1 = [0];
                        _return = 0;
                        c2 = 0;
                      } else if (7 === first) {
                        let ops = c5.ops;
                        items1 = ops.pop();
                        let trys = c5.trys;
                        let arr = trys.pop();
                        _return = 0;
                        c2 = 0;
                      } else {
                        let trys1 = c5.trys;
                        _return = trys1;
                        let tmp26 = trys1.length > 0;
                        if (tmp26) {
                          tmp26 = _return[_return.length - 1];
                        }
                        _return = tmp26;
                        if (!tmp26) {
                          if (6 === items1[0]) {
                            c5 = 0;
                            _return = 0;
                            c2 = 0;
                          }
                        }
                        if (3 !== items1[0]) {
                          if (6 === items1[0]) {
                            if (c5.label < _return[1]) {
                              c5.label = _return[1];
                              _return = items1;
                            }
                          }
                          if (_return) {
                            if (c5.label < _return[2]) {
                              c5.label = _return[2];
                              let ops1 = c5.ops;
                              arr = ops1.push(items1);
                            }
                          }
                          if (_return[2]) {
                            let ops2 = c5.ops;
                            let arr1 = ops2.pop();
                          }
                          let trys2 = c5.trys;
                          let arr2 = trys2.pop();
                          _return = 0;
                          c2 = 0;
                        } else {
                          if (_return) {
                          }
                          c5.label = items1[1];
                        }
                      }
                      if (c6) {
                        c6 = 0;
                        if (items1[0]) {
                          c5 = 0;
                        }
                      }
                    }
                  }
                  let call3 = closure_1_1.call;
                  let tmp78 = c5;
                  if (typeof call3 === "unknown") {
                    let call3Result = closure_1_1(tmp78);
                  } else {
                    call3Result = call3(closure_1_0, tmp78);
                  }
                  _return = 0;
                  c2 = 0;
                  let items2 = [6, __exception];
                  c3 = 0;
                }
                _return = items1;
              }
              let num10 = iter.throw;
              if (!num10) {
                _return = c3.return;
                num10 = 0;
                if (_return) {
                  tmp10 = _return;
                  const call = _return.call;
                  _return = c3;
                  if (typeof call !== "unknown") {
                    call(_return);
                    num10 = 0;
                  }
                }
                _return = tmp10();
                num10 = 0;
              }
            } catch (tmp88) {
              _return = tmp;
              c2 = tmp;
              throw tmp88;
            }
          }
          if (5 & items1[0]) {
            throw items1[1];
          } else {
            let tmp87;
            if (items1[0]) {
              tmp87 = items1[1];
            }
            obj = { value: tmp87, done: true };
            return obj;
          }
        }
      })(items);
    };
    c0 = 2;
    obj.return = (arg0) => {
      let items = [c0, arg0];
      return (function step(items) {
        let iter;
        let items1 = items;
        if (c2) {
          const _TypeError = TypeError;
          const typeError = new TypeError("Generator is already executing.");
          throw typeError;
        } else {
          if (c6) {
            c6 = 0;
            if (items1[0]) {
              c5 = 0;
            }
          }
          if (c5) {
            try {
              while (true) {
                c2 = 1;
                if (c3) {
                  if (2 & items1[0]) {
                    let next = c3.return;
                  } else {
                    iter = c3;
                    if (items1[0]) {
                      break;
                    } else {
                      next = iter.next;
                    }
                  }
                  _return = next;
                  if (next) {
                    let tmp10 = next;
                    let call2 = next.call;
                    _return = c3;
                    let tmp15 = items1[1];
                    if (typeof call2 === "unknown") {
                      let iter2 = tmp10(tmp15);
                    } else {
                      iter2 = call2(_return, tmp15);
                    }
                    _return = iter2;
                    if (!iter2.done) {
                      _return = 0;
                      c2 = 0;
                      return _return;
                    }
                  }
                }
                c3 = 0;
                if (_return) {
                  items = [2 & items1[0], ];
                  items[1] = _return.value;
                  items1 = items;
                }
                let first = items1[0];
                if (0 !== first) {
                  if (1 !== first) {
                    if (4 === first) {
                      c5.label = c5.label + 1;
                      obj = { value: null, done: false };
                      obj.value = items1[1];
                      _return = 0;
                      c2 = 0;
                      return obj;
                    } else {
                      if (5 === first) {
                        c5.label = c5.label + 1;
                        c3 = items1[1];
                        items1 = [0];
                        _return = 0;
                        c2 = 0;
                      } else if (7 === first) {
                        let ops = c5.ops;
                        items1 = ops.pop();
                        let trys = c5.trys;
                        let arr = trys.pop();
                        _return = 0;
                        c2 = 0;
                      } else {
                        let trys1 = c5.trys;
                        _return = trys1;
                        let tmp26 = trys1.length > 0;
                        if (tmp26) {
                          tmp26 = _return[_return.length - 1];
                        }
                        _return = tmp26;
                        if (!tmp26) {
                          if (6 === items1[0]) {
                            c5 = 0;
                            _return = 0;
                            c2 = 0;
                          }
                        }
                        if (3 !== items1[0]) {
                          if (6 === items1[0]) {
                            if (c5.label < _return[1]) {
                              c5.label = _return[1];
                              _return = items1;
                            }
                          }
                          if (_return) {
                            if (c5.label < _return[2]) {
                              c5.label = _return[2];
                              let ops1 = c5.ops;
                              arr = ops1.push(items1);
                            }
                          }
                          if (_return[2]) {
                            let ops2 = c5.ops;
                            let arr1 = ops2.pop();
                          }
                          let trys2 = c5.trys;
                          let arr2 = trys2.pop();
                          _return = 0;
                          c2 = 0;
                        } else {
                          if (_return) {
                          }
                          c5.label = items1[1];
                        }
                      }
                      if (c6) {
                        c6 = 0;
                        if (items1[0]) {
                          c5 = 0;
                        }
                      }
                    }
                  }
                  let call3 = closure_1_1.call;
                  let tmp78 = c5;
                  if (typeof call3 === "unknown") {
                    let call3Result = closure_1_1(tmp78);
                  } else {
                    call3Result = call3(closure_1_0, tmp78);
                  }
                  _return = 0;
                  c2 = 0;
                  let items2 = [6, __exception];
                  c3 = 0;
                }
                _return = items1;
              }
              let num10 = iter.throw;
              if (!num10) {
                _return = c3.return;
                num10 = 0;
                if (_return) {
                  tmp10 = _return;
                  const call = _return.call;
                  _return = c3;
                  if (typeof call !== "unknown") {
                    call(_return);
                    num10 = 0;
                  }
                }
                _return = tmp10();
                num10 = 0;
              }
            } catch (tmp88) {
              _return = tmp;
              c2 = tmp;
              throw tmp88;
            }
          }
          if (5 & items1[0]) {
            throw items1[1];
          } else {
            let tmp87;
            if (items1[0]) {
              tmp87 = items1[1];
            }
            obj = { value: tmp87, done: true };
            return obj;
          }
        }
      })(items);
    };
    if (typeof Symbol === "function") {
      const _Symbol = Symbol;
      obj[Symbol.iterator] = function() {
        return this;
      };
    }
    return obj;
  }
  function p(obj, arg1) {
    for (const key10007 in arg0) {
      let tmp6 = "default" === key10007;
      if (tmp6) {
        if (tmp6) {
          continue;
        } else {
          let tmp4 = closure_28(arg1, arg0, key10007);
          continue;
        }
        continue;
      } else {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        let call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty(key10007);
        } else {
          hasOwnPropertyResult = call(arg1, key10007);
        }
      }
    }
  }
  closure_28 = Object.create ? ((arg0, arg1, arg2, arg3) => {
    let __esModule = arg1;
    closure_0 = arg1;
    closure_1 = arg2;
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
    if (!ownPropertyDescriptor) {
      if (!ownPropertyDescriptor) {
        const obj = {
          enumerable: true,
          get() {
                return closure_0[closure_1];
              }
        };
        ownPropertyDescriptor = obj;
      }
      const _Object = Object;
      Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
    } else if ("get" in ownPropertyDescriptor) {
      __esModule = __esModule.__esModule;
      let tmp3 = !__esModule;
    } else {
      tmp3 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
    }
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
  function y(arg0) {
    closure_0 = arg0;
    let iterator = typeof Symbol === "function";
    if (typeof Symbol === "function") {
      const _Symbol = Symbol;
      iterator = Symbol.iterator;
    }
    let tmp = iterator;
    if (iterator) {
      tmp = closure_0[iterator];
    }
    c1 = 0;
    if (tmp) {
      const call = tmp.call;
      return typeof call === "unknown" ? tmp() : call(closure_0);
    } else {
      if (closure_0) {
        if (typeof closure_0.length === "number") {
          const obj = {
            next() {
                    let tmp = c0;
                    if (c0) {
                      tmp = closure_1 >= arr.length;
                    }
                    if (tmp) {
                      c0 = undefined;
                    }
                    let tmp4 = c0;
                    if (c0) {
                      closure_1 = tmp6 + 1;
                      tmp4 = tmp3[tmp6];
                    }
                    return { value: tmp4, done: !c0 };
                  }
          };
          return obj;
        }
      }
      let str = "Symbol.iterator is not defined.";
      if (iterator) {
        str = "Object is not iterable.";
      }
      const typeError = new TypeError(str);
      throw typeError;
    }
  }
  function d(arg0, arg1) {
    let tmp3 = typeof Symbol === "function";
    if (typeof Symbol === "function") {
      const _Symbol = Symbol;
      tmp3 = arg0[Symbol.iterator];
    }
    if (tmp3) {
      let items = tmp3;
      const call = tmp3.call;
      if (typeof call === "unknown") {
        items();
      } else {
        call(arg0);
      }
      try {
        items = [];
      } catch (tmp5) {
        try {
          let tmp6 = iter;
          if (iter) {
            tmp6 = !iter.done;
          }
          if (tmp6) {
            const _return = tmp2.return;
            tmp6 = _return;
          }
          if (tmp6) {
            const call2 = _return.call;
            if (typeof call2 === "unknown") {
              _return();
            } else {
              call2(tmp2);
            }
          }
          if (tmp) {
            throw tmp.error;
          } else {
            throw tmp5;
          }
        } catch (tmp11) {
          if (tmp) {
            throw tmp.error;
          } else {
            throw tmp11;
          }
        }
      }
    } else {
      return arg0;
    }
  }
  function b() {
    let length;
    let items = [];
    let num = 0;
    let tmp = items;
    if (0 < arguments.length) {
      do {
        items = items.concat(d(arguments[num]));
        num = num + 1;
        tmp = items;
        length = arguments.length;
      } while (num < length);
    }
    return tmp;
  }
  function v() {
    const length = arguments.length;
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    if (0 < length) {
      do {
        num2 = num2 + arguments[num].length;
        num = num + 1;
        num3 = num2;
      } while (num < length);
    }
    const ArrayResult = Array(num3);
    let num4 = 0;
    let num5 = 0;
    if (0 < length) {
      do {
        let arr = arguments[num5];
        let length2 = arr.length;
        let sum = num4;
        let num6 = 0;
        let tmp4 = num4;
        if (0 < length2) {
          do {
            ArrayResult[sum] = arr[num6];
            num6 = num6 + 1;
            sum = sum + 1;
            tmp4 = sum;
          } while (num6 < length2);
        }
        num5 = num5 + 1;
        num4 = tmp4;
      } while (num5 < length);
    }
    return ArrayResult;
  }
  function h(arr, arg1, arg2) {
    let tmp;
    if (arg2) {
      let num4 = 0;
      if (0 < arg1.length) {
        while (true) {
          let tmp4 = !tmp3;
          let tmp6 = tmp3;
          if (!tmp3) {
            tmp4 = num4 in arg1;
          }
          let tmp7 = tmp3;
          if (!tmp4) {
            if (!tmp3) {
              break;
            } else {
              tmp6[num4] = arg1[num4];
              tmp7 = tmp6;
            }
          }
          num4 = num4 + 1;
          tmp3 = tmp7;
          tmp = tmp7;
        }
        const _Array = Array;
        const call = slice.call;
        typeof call === "unknown" ? slice(0, num4) : call(arg1, 0, num4);
      }
    }
    if (tmp) {
      return arr.concat(tmp);
    } else {
      const _Array2 = Array;
      const call2 = slice2.call;
      typeof call2 === "unknown" ? slice2() : call2(arg1);
    }
  }
  function _(v) {
    const self = this;
    if (this instanceof _) {
      self.v = v;
      let tmp3 = self;
    } else {
      tmp3 = _(v);
    }
    return tmp3;
  }
  function w(arg0, arg1, apply) {
    function resume(arg0, arg1) {
      try {
        (function step(value) {
          if (value.value instanceof closure_2_18) {
            const resolved = Promise.resolve(value.value.v);
            resolved.then(fulfill, reject);
          } else {
            closure_1_1[0][2](value);
            closure_1_1.shift();
            if (closure_1_1.length) {
              resume(closure_1_1[0][0], closure_1_1[0][1]);
            }
          }
        })(_return[arg0](arg1));
      } catch (tmp5) {
        settle(closure_1[0][3], tmp5);
      }
    }
    function fulfill(arg0) {
      resume("next", arg0);
    }
    function reject(arg0) {
      resume("throw", arg0);
    }
    function settle(fn, value) {
      fn(value);
      closure_1.shift();
      if (closure_1.length) {
        resume(closure_1[0][0], closure_1[0][1]);
      }
    }
    if (Symbol.asyncIterator) {
      let items = arg1;
      if (!arg1) {
        items = [];
      }
      const iter = apply.apply(arg0, items);
      closure_1 = [];
      const obj = Object.create(typeof globalThis.AsyncIterator === "function" ? globalThis.AsyncIterator : Object.prototype);
      let _return = "next";
      if (iter.next) {
        obj.next = (arg0) => {
          closure_0 = arg0;
          return new Promise((arg0, arg1) => {
            const items = [_return, closure_0, arg0, arg1];
            if (closure_1.push(items) <= 1) {
              fn(_return, closure_0);
            }
          });
        };
      }
      _return = "throw";
      if (iter.throw) {
        obj.throw = (arg0) => {
          closure_0 = arg0;
          return new Promise((arg0, arg1) => {
            const items = [_return, closure_0, arg0, arg1];
            if (closure_1.push(items) <= 1) {
              fn(_return, closure_0);
            }
          });
        };
      }
      _return = "return";
      if (iter.return) {
        obj.return = (arg0) => {
          closure_0 = arg0;
          return new Promise((arg0, arg1) => {
            const items = [_return, closure_0, arg0, arg1];
            if (closure_1.push(items) <= 1) {
              fn(_return, closure_0);
            }
          });
        };
        _return = obj.return;
        obj.return = (arg0) => {
          const resolved = Promise.resolve(arg0);
          return resolved.then(_return, o);
        };
      }
      const _Symbol = Symbol;
      obj[Symbol.asyncIterator] = function() {
        return this;
      };
      return obj;
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError("Symbol.asyncIterator is not defined.");
      throw typeError;
    }
  }
  function m(next) {
    let _return = "next";
    next = undefined;
    if (next.next) {
      next = (arg0) => {
        closure_1 = !closure_1;
        if (closure_1) {
          let obj = arg0;
          if (c1) {
            if (typeof c1 === "function") {
              throw arg0;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        } else {
          const tmp4 = e[return](arg0);
          if (typeof collapsedCategories === "function") {
            if (globalThis instanceof closure_128_18) {
              globalThis.v = tmp4;
              let tmp12 = globalThis;
            } else if (typeof closure_128_18 === "function") {
              if (tmp8 instanceof _) {
                tmp8.v = tmp4;
                tmp12 = tmp8;
              } else {
                tmp12 = _(tmp4);
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
            obj = { value: tmp12, done: false };
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        return obj;
      };
    }
    let obj = { next };
    let fn2 = (arg0) => {
      throw arg0;
    };
    _return = "throw";
    c1 = fn2;
    if (next.throw) {
      fn2 = (arg0) => {
        closure_1 = !closure_1;
        if (closure_1) {
          let obj = arg0;
          if (c1) {
            if (typeof c1 === "function") {
              throw arg0;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        } else {
          const tmp4 = e[return](arg0);
          if (typeof collapsedCategories === "function") {
            if (globalThis instanceof closure_128_18) {
              globalThis.v = tmp4;
              let tmp12 = globalThis;
            } else if (typeof closure_128_18 === "function") {
              if (tmp8 instanceof _) {
                tmp8.v = tmp4;
                tmp12 = tmp8;
              } else {
                tmp12 = _(tmp4);
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
            obj = { value: tmp12, done: false };
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        return obj;
      };
    }
    obj.throw = fn2;
    _return = "return";
    c1 = undefined;
    let fn3;
    if (next.return) {
      fn3 = (arg0) => {
        closure_1 = !closure_1;
        if (closure_1) {
          let obj = arg0;
          if (c1) {
            if (typeof c1 === "function") {
              throw arg0;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        } else {
          const tmp4 = e[return](arg0);
          if (typeof collapsedCategories === "function") {
            if (globalThis instanceof closure_128_18) {
              globalThis.v = tmp4;
              let tmp12 = globalThis;
            } else if (typeof closure_128_18 === "function") {
              if (tmp8 instanceof _) {
                tmp8.v = tmp4;
                tmp12 = tmp8;
              } else {
                tmp12 = _(tmp4);
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
            obj = { value: tmp12, done: false };
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        return obj;
      };
    }
    obj.return = fn3;
    obj[Symbol.iterator] = function() {
      return this;
    };
    return obj;
  }
  function j(arg0) {
    c0 = arg0;
    if (Symbol.asyncIterator) {
      const _Symbol = Symbol;
      if (arg0[Symbol.asyncIterator]) {
        const call2 = tmp5.call;
        typeof call2 === "unknown" ? tmp5() : call2(arg0);
      } else if (typeof y === "function") {
        c0 = arg0;
        const _Symbol2 = Symbol;
        let iterator = typeof Symbol === "function";
        if (typeof Symbol === "function") {
          const _Symbol4 = Symbol;
          iterator = Symbol.iterator;
        }
        let tmp7 = iterator;
        if (iterator) {
          tmp7 = c0[iterator];
        }
        closure_1 = 0;
        if (tmp7) {
          const call = tmp7.call;
          typeof call === "unknown" ? tmp7() : call(c0);
        } else {
          if (c0) {
            if (typeof c0.length === "number") {
              let obj = {
                next() {
                            let tmp = c0;
                            if (c0) {
                              tmp = closure_1 >= arr.length;
                            }
                            if (tmp) {
                              c0 = undefined;
                            }
                            let tmp4 = c0;
                            if (c0) {
                              closure_1 = tmp6 + 1;
                              tmp4 = tmp3[tmp6];
                            }
                            return { value: tmp4, done: !c0 };
                          }
              };
              c0 = "next";
              obj = {};
              obj.next = obj.next && ((arg0) => new Promise((arg0, arg1) => {
                iter = e[c0](iter);
                closure_0 = arg0;
                const done = iter.done;
                const resolved = Promise.resolve(iter.value);
                resolved.then((value) => {
                  closure_0({ value, done });
                }, arg1);
              }));
              c0 = "throw";
              obj.throw = obj.throw && ((arg0) => new Promise((arg0, arg1) => {
                iter = e[c0](iter);
                closure_0 = arg0;
                const done = iter.done;
                const resolved = Promise.resolve(iter.value);
                resolved.then((value) => {
                  closure_0({ value, done });
                }, arg1);
              }));
              c0 = "return";
              obj.return = obj.return && ((arg0) => new Promise((arg0, arg1) => {
                iter = e[c0](iter);
                closure_0 = arg0;
                const done = iter.done;
                const resolved = Promise.resolve(iter.value);
                resolved.then((value) => {
                  closure_0({ value, done });
                }, arg1);
              }));
              const _Symbol3 = Symbol;
              obj[Symbol.asyncIterator] = function() {
                return this;
              };
              return obj;
            }
          }
          let str2 = "Symbol.iterator is not defined.";
          if (iterator) {
            str2 = "Object is not iterable.";
          }
          const typeError = new TypeError(str2);
          throw typeError;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      const _TypeError = TypeError;
      const typeError1 = new TypeError("Symbol.asyncIterator is not defined.");
      throw typeError1;
    }
  }
  function O(arg0, value) {
    if (Object.defineProperty) {
      const _Object = Object;
      const obj = { value };
      Object.defineProperty(arg0, "raw", obj);
    } else {
      arg0.raw = value;
    }
    return arg0;
  }
  closure_1 = Object.create ? ((arg0, value) => {
    Object.defineProperty(arg0, "default", { enumerable: true, value });
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
  fn = function ownKeys(__addDisposableResource) {
    fn = Object.getOwnPropertyNames;
    if (!fn) {
      fn = (obj) => {
        const items = [];
        for (const key10005 in arg0) {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let hasOwnPropertyResult = hasOwnProperty(key10005);
          } else {
            hasOwnPropertyResult = call(arg0, key10005);
          }
          if (!hasOwnPropertyResult) {
            continue;
          } else {
            items[items.length] = key10005;
            continue;
          }
          continue;
        }
        return items;
      };
    }
    return fn(__addDisposableResource);
  };
  function g(__esModule) {
    if (__esModule) {
      if (__esModule.__esModule) {
        return __esModule;
      }
    }
    const obj = {};
    if (null != __esModule) {
      const arr = fn(__esModule);
      for (let num = 0; num < arr.length; num = num + 1) {
        if ("default" !== arr[num]) {
          let tmp4 = __initData6(obj, __esModule, arr[num]);
        }
      }
    }
    closure_1(obj, __esModule);
    return obj;
  }
  function P(__esModule) {
    if (!__esModule) {
      const obj = { default: __esModule };
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  }
  function x(arg0, has, arg2, value) {
    if ("a" === arg2) {
      if (!value) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Private accessor was defined without a getter");
        throw typeError;
      }
    }
    if (typeof has === "function") {
      let tmp8 = arg0 !== has || !value;
      const tmp7 = arg0 !== has || !value;
    } else {
      tmp8 = !has.has(arg0);
    }
    if (tmp8) {
      const _TypeError2 = TypeError;
      const typeError1 = new TypeError("Cannot read private member from an object whose class did not declare it");
      throw typeError1;
    } else if ("m" === arg2) {
      return value;
    } else {
      if (!tmp) {
        if (value) {
          value = value.value;
        } else {
          value = has.get(arg0);
        }
      }
      const call = value.call;
      typeof call === "unknown" ? value() : call(arg0);
    }
  }
  function E(arg0, has, value, arg3, call) {
    if ("m" === arg3) {
      const _TypeError3 = TypeError;
      const typeError = new TypeError("Private method is not writable");
      throw typeError;
    } else {
      if ("a" === arg3) {
        if (!call) {
          const _TypeError = TypeError;
          const typeError1 = new TypeError("Private accessor was defined without a setter");
          throw typeError1;
        }
      }
      if (typeof has === "function") {
        let tmp9 = arg0 !== has || !call;
        const tmp8 = arg0 !== has || !call;
      } else {
        tmp9 = !has.has(arg0);
      }
      if (tmp9) {
        const _TypeError2 = TypeError;
        const typeError2 = new TypeError("Cannot write private member to an object whose class did not declare it");
        throw typeError2;
      } else {
        if (tmp24) {
          call = call.call;
          if (typeof call === "unknown") {
            call(value);
          } else {
            call(arg0, value);
          }
        } else if (call) {
          call.value = value;
        } else {
          const result = has.set(arg0, value);
        }
        return value;
      }
    }
  }
  function S(has, obj) {
    if (null !== obj) {
      if (typeof has === "function") {
        let hasItem = obj === has;
      } else {
        hasItem = has.has(obj);
      }
      return hasItem;
    }
    const typeError = new TypeError("Cannot use 'in' operator on non-object");
    throw typeError;
  }
  function I(stack, value, async) {
    if (null != value) {
      if (typeof value !== "object") {
        if (typeof value !== "function") {
          const _TypeError4 = TypeError;
          const typeError = new TypeError("Object expected.");
          throw typeError;
        }
      }
      let dispose;
      if (async) {
        const _Symbol = Symbol;
        if (Symbol.asyncDispose) {
          const _Symbol2 = Symbol;
          dispose = value[Symbol.asyncDispose];
        } else {
          const _TypeError = TypeError;
          const typeError1 = new TypeError("Symbol.asyncDispose is not defined.");
          throw typeError1;
        }
      }
      if (undefined === dispose) {
        const _Symbol3 = Symbol;
        if (Symbol.dispose) {
          const _Symbol4 = Symbol;
          dispose = tmp13;
          if (async) {
            closure_0 = tmp13;
            dispose = tmp13;
            const tmp7 = tmp13;
          }
        } else {
          const _TypeError2 = TypeError;
          const typeError2 = new TypeError("Symbol.dispose is not defined.");
          throw typeError2;
        }
      }
      if (typeof dispose !== "function") {
        const _TypeError3 = TypeError;
        const typeError3 = new TypeError("Object not disposable.");
        throw typeError3;
      } else {
        if (tmp7) {
          dispose = function n() {
            try {
              const self = this;
              const call = closure_0.call;
              if (typeof call === "unknown") {
                closure_0();
              } else {
                call(self);
              }
            } catch (tmp3) {
              return Promise.reject(tmp3);
            }
          };
        }
        stack = stack.stack;
        const obj = { value, dispose, async };
        stack.push(obj);
      }
    } else if (async) {
      const stack1 = stack.stack;
      stack1.push({ async: true });
    }
    return value;
  }
  closure_3 = typeof globalThis.SuppressedError === "function" ? globalThis.SuppressedError : ((error, suppressed, arg2) => {
    error = new Error(arg2);
    error.name = "SuppressedError";
    error.error = error;
    error.suppressed = suppressed;
    return error;
  });
  function k(arg0) {
    closure_0 = arg0;
    function fail(arg0) {
      let tmp2 = arg0;
      if (closure_0.hasError) {
        tmp2 = new closure_3(arg0, closure_0.error, "An error was suppressed during disposal.");
      }
      closure_0.error = tmp2;
      closure_0.hasError = true;
    }
    closure_3 = 0;
    function next() {
      let tmp2 = hasError;
      const stack = hasError.stack;
      let arr = stack.pop();
      arr1 = arr;
      if (arr) {
        try {
          if (!arr1.async) {
            if (1 === closure_3) {
              closure_3 = 0;
              const stack1 = hasError.stack;
              arr = stack1.push(arr1);
              const resolved = Promise.resolve();
              return resolved.then(next);
            }
          }
          if (arr1.dispose) {
            const dispose = arr1.dispose;
            const call = dispose.call;
            value = arr1.value;
            if (typeof call === "unknown") {
              let disposeResult = dispose();
            } else {
              disposeResult = call(value);
            }
            if (arr1.async) {
              closure_3 = closure_3 | 2;
              const resolved1 = Promise.resolve(tmp16);
              return resolved1.then(next, (arg0) => {
                let tmp2 = arg0;
                if (hasError.hasError) {
                  tmp2 = new closure_3(arg0, hasError.error, "An error was suppressed during disposal.");
                }
                hasError.error = tmp2;
                hasError.hasError = true;
                return next();
              });
            }
          } else {
            closure_3 = closure_3 | 1;
          }
          tmp2 = hasError;
          const stack2 = hasError.stack;
          arr1 = stack2.pop();
        } catch (tmp21) {
          fail(tmp21);
        }
      }
      if (1 === closure_3) {
        if (tmp2.hasError) {
          let rejectResult = _Promise3.reject(tmp2.error);
        } else {
          rejectResult = _Promise3.resolve();
        }
        return rejectResult;
      } else if (tmp2.hasError) {
        throw tmp2.error;
      }
    }
    return next();
  }
  function D(str, arg1) {
    closure_0 = arg1;
    let replaced = str;
    if (typeof str === "string") {
      replaced = str;
      if (obj.test(str)) {
        replaced = str.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (arg0, arg1, arg2, arg3, arg4) => {
          if (arg1) {
            let str3 = ".js";
            if (closure_0) {
              str3 = ".jsx";
            }
            let text = str3;
          } else if (!arg2) {
            const sum = arg2 + arg3;
            text = `${tmp6 + "." + arg4.toLowerCase()}js`;
          } else {
            text = arg0;
            if (arg3) {
              text = arg0;
            }
          }
          return text;
        });
      }
      obj = /^\.\.?\//;
    }
    return replaced;
  }
  fn("__extends", e);
  fn("__assign", closure_1);
  fn("__rest", fn);
  fn("__decorate", closure_3);
  fn("__param", o);
  fn("__esDecorate", i);
  fn("__runInitializers", c);
  fn("__propKey", a);
  fn("__setFunctionName", u);
  fn("__metadata", f);
  fn("__awaiter", s);
  fn("__generator", l);
  fn("__exportStar", p);
  fn("__createBinding", closure_28);
  fn("__values", y);
  fn("__read", d);
  fn("__spread", b);
  fn("__spreadArrays", v);
  fn("__spreadArray", h);
  fn("__await", _);
  fn("__asyncGenerator", w);
  fn("__asyncDelegator", m);
  fn("__asyncValues", j);
  fn("__makeTemplateObject", O);
  fn("__importStar", g);
  fn("__importDefault", P);
  fn("__classPrivateFieldGet", x);
  fn("__classPrivateFieldSet", E);
  fn("__classPrivateFieldIn", S);
  fn("__addDisposableResource", I);
  fn("__disposeResources", k);
  fn("__rewriteRelativeImportExtension", D);
};
if (typeof obj === "object") {
  const global = obj;
  if (typeof globalThis.define === "function") {
    if (globalThis.define.amd) {
      globalThis.define("tslib", ["exports"], (arg0) => {
        closure_0 = arg0;
        if (arg0 !== global) {
          const _Object = Object;
          if (typeof Object.create === "function") {
            const _Object2 = Object;
          } else {
            arg0.__esModule = true;
          }
        }
        closure_0 = global;
        const f108308 = (arg0, arg1) => {
          let tmp2Result = arg1;
          if (f108308) {
            tmp2Result = tmp2(arg0, arg1);
          }
          closure_0[arg0] = tmp2Result;
          return tmp2Result;
        };
        // // eliminated: always false
        fn((arg0, arg1) => {
          let tmp2Result = arg1;
          if (f108308) {
            tmp2Result = tmp2(arg0, arg1);
          }
          closure_0[arg0] = tmp2Result;
          return tmp2Result;
        });
      });
    }
  }
  if (typeof exports === "object") {
    if (typeof exports.exports === "object") {
      const _exports = exports.exports;
      let closure_130_0 = _exports;
      let closure_130_1;
      if (_exports !== obj) {
        let _Object3 = Object;
        if (typeof Object.create === "function") {
          let _Object4 = Object;
        } else {
          _exports.__esModule = true;
        }
      }
      let closure_131_0 = obj;
      let closure_131_1 = (arg0, arg1) => {
        let tmp2Result = arg1;
        if (f108308) {
          tmp2Result = tmp2(arg0, arg1);
        }
        closure_0[arg0] = tmp2Result;
        return tmp2Result;
      };
      if (obj !== obj) {
        const _Object5 = Object;
        if (typeof Object.create === "function") {
          const _Object6 = Object;
        } else {
          obj.__esModule = true;
        }
      }
      fn((arg0, arg1) => {
        let tmp2Result = arg1;
        if (f108308) {
          tmp2Result = tmp2(arg0, arg1);
        }
        closure_0[arg0] = tmp2Result;
        return tmp2Result;
      });
    }
  }
  let closure_129_0 = obj;
  if (obj !== obj) {
    let _Object = Object;
    if (typeof Object.create === "function") {
      let _Object2 = Object;
    } else {
      obj.__esModule = true;
    }
  }
  fn((arg0, arg1) => {
    let tmp2Result = arg1;
    if (f108308) {
      tmp2Result = tmp2(arg0, arg1);
    }
    closure_0[arg0] = tmp2Result;
    return tmp2Result;
  });
} else {
  let _self = self;
  if (typeof self === "object") {
    _self = self;
  } else {
    _self = globalThis;
    if (typeof globalThis !== "object") {
      _self = {};
    }
  }
}