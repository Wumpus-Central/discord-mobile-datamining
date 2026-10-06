// === Module 1172: ? ===

// Module 1172
let arr3, c2, c4, c5, c6, error, hasOwnProperty, navigation, set;

let _self1;
let tmp = global;
let fn = (fn) => {
  function next() {
    const tmp = c0 && closure_1 >= arr.length;
    if (tmp) {
      c0 = undefined;
    }
    let tmp4 = c0;
    if (tmp4) {
      closure_1 = tmp6 + 1;
      tmp4 = tmp3[tmp6];
    }
    return { value: tmp4, done: !c0 };
  }
  fn = Object.setPrototypeOf;
  if (!fn) {
    let _Array = Array;
    let fn2 = Object.create([]) instanceof Array && ((arg0, arg1) => {
      arg0.__proto__ = arg1;
    });
    fn = fn2;
  }
  if (!fn) {
    fn = (arg0, obj) => {
      for (const key10005 in obj) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        if (!hasOwnProperty.call(obj, key10005)) {
          continue;
        } else {
          arg0[key10005] = obj[key10005];
          continue;
        }
        continue;
      }
    };
  }
  function e(arg0, fn) {
    let obj;
    let closure_0 = arg0;
    if (typeof fn !== "function") {
      if (null !== fn) {
        const _TypeError = TypeError;
        const _String = String;
        const self = this;
        const self2 = this;
        const typeError = new TypeError("Class extends value " + String(fn) + " is not a constructor or null");
        throw typeError;
      }
    }
    e(arg0, fn);
    if (null === fn) {
      const _Object = Object;
      obj = Object.create(fn);
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
  let fn3 = Object.assign || (function(arg0) {
    let num;
    const length = arguments.length;
    for (let num = 1; num < length; num = num + 1) {
      let tmp = arguments[num];
      for (const key10012 in tmp) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        if (!hasOwnProperty.call(tmp, key10012)) {
          continue;
        } else {
          arg0[key10012] = tmp[key10012];
          continue;
        }
        continue;
      }
    }
    return arg0;
  });
  fn = function r(obj, arr) {
    obj = {};
    for (const key10007 in obj) {
      let _Object2 = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      let callResult = hasOwnProperty.call(obj, key10007) && arr.indexOf(key10007) < 0;
      if (!callResult) {
        continue;
      } else {
        obj[key10007] = obj[key10007];
        continue;
      }
      continue;
    }
    if (null != obj) {
      const _Object3 = Object;
      if (typeof Object.getOwnPropertySymbols === "function") {
        let num;
        const _Object4 = Object;
        const ownPropertySymbols = Object.getOwnPropertySymbols(obj);
        for (let num = 0; num < ownPropertySymbols.length; num = num + 1) {
          let callResult1 = arr.indexOf(ownPropertySymbols[num]) < 0;
          if (callResult1) {
            let _Object = Object;
            callResult1 = propertyIsEnumerable.call(obj, ownPropertySymbols[num]);
          }
          if (callResult1) {
            obj[ownPropertySymbols[num]] = obj[ownPropertySymbols[num]];
          }
        }
      }
    }
    return obj;
  };
  let closure_3 = function n(arg0, arg1, arg2, arg3) {
    let decorateResult;
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
        decorateResult = Reflect.decorate(arg0, arg1, arg2, tmp);
      }
      const tmp19 = length > 3 && decorateResult;
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
          let tmp10Result;
          if (length < 3) {
            tmp10Result = tmp10(tmp8);
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
    let closure_0 = arg0;
    closure_1 = arg1;
    return (arg0, arg1) => {
      closure_1(arg0, arg1, closure_0);
    };
  }
  function i(arg0, arg1, arg2, kind, arr, arg5) {
    navigation = arg5;
    kind = kind.kind;
    let str = "get";
    if ("getter" !== kind) {
      let str2 = "value";
      if ("setter" === kind) {
        str2 = "set";
      }
      str = str2;
    }
    let tmp = arg1;
    let tmp2 = null;
    if (!arg1) {
      tmp2 = null;
      if (arg0) {
        let prototype = arg0;
        if (!kind.static) {
          prototype = arg0.prototype;
        }
        tmp2 = prototype;
      }
    }
    if (!tmp) {
      let ownPropertyDescriptor;
      if (tmp2) {
        const _Object = Object;
        ownPropertyDescriptor = Object.getOwnPropertyDescriptor(tmp2, kind.name);
      } else {
        ownPropertyDescriptor = {};
      }
      tmp = ownPropertyDescriptor;
    }
    let c1 = false;
    let diff = arg2.length - 1;
    if (0 <= diff) {
      while (true) {
        let tmp10;
        let obj = {
          addInitializer: function(arg0) {
                if (c1) {
                  const _TypeError2 = TypeError;
                  const self3 = this;
                  const self4 = this;
                  const typeError = new TypeError("Cannot add initializers after decoration has completed");
                  throw typeError;
                } else {
                  let tmp2 = arg0;
                  const push = navigation.push;
                  if (!arg0) {
                    tmp2 = null;
                  }
                  if (undefined !== tmp2) {
                    if (typeof tmp2 !== "function") {
                      const _TypeError = TypeError;
                      const self = this;
                      const self2 = this;
                      const typeError1 = new TypeError("Function expected");
                      throw typeError1;
                    }
                  }
                  push(tmp2);
                }
              }
        };
        for (const key10034 in kind) {
          let obj2;
          if ("access" === key10034) {
            obj2 = {};
          } else {
            obj2 = kind[key10034];
          }
          obj[key10034] = obj2;
          continue;
        }
        for (const key10038 in kind.access) {
          obj.access[key10038] = kind.access[key10038];
          continue;
        }
        let tmp9 = arg2[diff];
        if (tmp6) {
          let obj3 = { get: null, set: null };
          ({ get: obj4.get, set: obj4.set } = tmp);
          tmp10 = obj3;
        } else {
          tmp10 = tmp[str];
        }
        let tmp9Result = tmp9(tmp10, obj);
        if (tmp6) {
          if (undefined !== tmp9Result) {
            if (null !== tmp9Result) {
              if (typeof tmp9Result === "object") {
                let get = tmp9Result.get;
                if (undefined !== get) {
                  if (typeof get !== "function") {
                    let tmp23 = globalThis;
                    let _TypeError4 = TypeError;
                    let self7 = this;
                    let str7 = "Function expected";
                    let self8 = this;
                    let typeError = new TypeError("Function expected");
                    throw typeError;
                  }
                }
                if (get) {
                  tmp.get = get;
                }
                set = tmp9Result.set;
                if (undefined !== set) {
                  if (typeof set !== "function") {
                    let tmp20 = globalThis;
                    let _TypeError3 = TypeError;
                    let self5 = this;
                    let str6 = "Function expected";
                    let self6 = this;
                    let typeError1 = new TypeError("Function expected");
                    throw typeError1;
                  }
                }
                if (set) {
                  tmp.set = set;
                }
                let init = tmp9Result.init;
                if (undefined !== init) {
                  if (typeof init !== "function") {
                    let tmp17 = globalThis;
                    let _TypeError2 = TypeError;
                    let self3 = this;
                    let str5 = "Function expected";
                    let self4 = this;
                    let typeError2 = new TypeError("Function expected");
                    throw typeError2;
                  }
                }
                if (init) {
                  arr = arr.unshift(init);
                }
              }
            }
            let tmp26 = globalThis;
            let _TypeError5 = TypeError;
            let self9 = this;
            let str8 = "Object expected";
            let self10 = this;
            let typeError3 = new TypeError("Object expected");
            throw typeError3;
          }
        } else {
          if (undefined !== tmp9Result) {
            if (typeof tmp9Result !== "function") {
              break;
            }
          }
          if (tmp9Result) {
            if ("field" === kind) {
              let arr2 = arr.unshift(tmp9Result);
            } else {
              tmp[str] = tmp9Result;
            }
          }
        }
        diff = diff - 1;
      }
      let _TypeError = TypeError;
      let self = this;
      let self2 = this;
      const typeError4 = new TypeError("Function expected");
      throw typeError4;
    }
    if (tmp2) {
      const _Object2 = Object;
      Object.defineProperty(tmp2, kind.name, tmp);
    }
    c1 = true;
  }
  function c(arg0, arg1, arg2) {
    let tmp = arg2;
    const tmp2 = arguments.length > 2;
    let num = 0;
    let tmp3 = arg2;
    if (0 < arg1.length) {
      do {
        let callResult;
        let tmp4 = arg1[num];
        let call = tmp4.call;
        if (tmp2) {
          callResult = call(arg0, tmp);
        } else {
          callResult = call(arg0);
        }
        num = num + 1;
        tmp = callResult;
        tmp3 = callResult;
      } while (num < arg1.length);
    }
    let tmp8;
    if (tmp2) {
      tmp8 = tmp3;
    }
    return tmp8;
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
    let value = tmp;
    const _Object = Object;
    if (arg2) {
      const concat2 = "".concat;
      value = "".concat(arg2, " ", tmp);
    }
    return defineProperty(arg0, "name", { configurable: true, value });
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
    let closure_0 = arg0;
    closure_1 = arg1;
    let _Promise = arg2;
    const Promise = arg2;
    closure_3 = arg3;
    if (!arg2) {
      let tmp = globalThis;
      _Promise = Promise;
    }
    const _Promise1 = new _Promise(function(fn, arg1) {
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
          fn(done.value);
        } else {
          let tmp1 = done.value;
          const value = tmp1;
          if (!(tmp1 instanceof Promise)) {
            const self = this;
            const self2 = this;
            tmp1 = new tmp((fn) => {
              fn(value);
            });
          }
          tmp1.then(fulfilled, iter);
        }
      }
      let items = closure_1;
      const tmp = iter;
      const apply = iter.apply;
      const tmp2 = closure_0;
      if (!closure_1) {
        items = [];
      }
      iter = apply(tmp2, items);
      const iter2 = iter.next();
      let value = iter2.value;
      if (iter2.done) {
        const tmp5 = fn(value);
      } else {
        let tmp32 = value;
        if (!(value instanceof fulfilled)) {
          let self = this;
          let self2 = this;
          tmp32 = new tmp3((fn) => {
            fn(value);
          });
        }
        tmp32.then(fulfilled, rejected);
      }
    });
    return _Promise1;
  }
  function l(arg0, arg1) {
    const next = (arg0) => {
      function step(items) {
        let items1 = items;
        const tmp = c2;
        if (tmp) {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError("Generator is already executing.");
          throw typeError;
        } else {
          const tmp2 = c6;
          if (tmp2) {
            c6 = 0;
            if (items1[0]) {
              c5 = 0;
            }
          }
          if (c5) {
            try {
              c2 = 1;
              const tmp5 = closure_3;
              if (tmp5) {
                let next;
                if (2 & items1[0]) {
                  next = closure_3.return;
                } else if (items1[0]) {
                  let num10 = iter.throw;
                  if (!num10) {
                    const _return = closure_3.return;
                    c4 = _return;
                    num10 = 0;
                    if (_return) {
                      _return.call(closure_3);
                      num10 = 0;
                    }
                  }
                  next = num10;
                } else {
                  next = iter.next;
                }
                c4 = next;
                if (next) {
                  const iter2 = next.call(closure_3, items1[1]);
                  c4 = iter2;
                  if (!iter2.done) {
                    c4 = 0;
                    c2 = 0;
                    return c4;
                  }
                }
              }
              closure_3 = 0;
              const tmp16 = c4;
              if (tmp16) {
                items = [2 & items1[0], c4.value];
                items1 = items;
              }
              const first = items1[0];
              if (0 !== first) {
                if (1 !== first) {
                  if (4 === first) {
                    c5.label = c5.label + 1;
                    c4 = 0;
                    c2 = 0;
                    return { value: items1[1], done: false };
                  } else if (5 === first) {
                    c5.label = c5.label + 1;
                    closure_3 = items1[1];
                    items1 = [0];
                    c4 = 0;
                    c2 = 0;
                  } else {
                    if (7 === first) {
                      const ops = c5.ops;
                      items1 = ops.pop();
                      const trys = c5.trys;
                      trys.pop();
                      c4 = 0;
                      c2 = 0;
                    } else {
                      const trys1 = c5.trys;
                      c4 = trys1;
                      const tmp24 = trys1.length > 0 && c4[c4.length - 1];
                      c4 = tmp24;
                      if (!c4) {
                        if (6 === items1[0]) {
                          c5 = 0;
                          c4 = 0;
                          c2 = 0;
                        }
                      }
                      if (3 !== items1[0]) {
                        if (6 === items1[0]) {
                          if (c5.label < c4[1]) {
                            c5.label = c4[1];
                            c4 = items1;
                          }
                        }
                        const tmp42 = c4;
                        if (tmp42) {
                          if (c5.label < c4[2]) {
                            c5.label = c4[2];
                            const ops1 = c5.ops;
                            ops1.push(items1);
                          }
                        }
                        if (c4[2]) {
                          const ops2 = c5.ops;
                          ops2.pop();
                        }
                        const trys2 = c5.trys;
                        trys2.pop();
                        c4 = 0;
                        c2 = 0;
                      } else {
                        const tmp30 = c4;
                        if (!tmp30) {
                          c5.label = items1[1];
                        }
                      }
                    }
                    items1 = closure_1_1.call(closure_1_0, c5);
                    c4 = 0;
                    c2 = 0;
                  }
                }
                const tmp74 = c6;
                if (tmp74) {
                  c6 = 0;
                  if (items1[0]) {
                    c5 = 0;
                  }
                }
              }
              c4 = items1;
            } catch (tmp80) {
              c4 = 0;
              c2 = 0;
              throw tmp80;
            }
          }
          if (5 & items1[0]) {
            throw items1[1];
          } else {
            let tmp79;
            if (items1[0]) {
              tmp79 = items1[1];
            }
            return { value: tmp79, done: true };
          }
        }
      }
      let items = [c0, arg0];
      return step(items);
    };
    let closure_0 = arg0;
    closure_1 = arg1;
    let closure_5 = {
      label: 0,
      sent() {
        if (1 & closure_1_4[0]) {
          throw closure_1_4[1];
        } else {
          return closure_1_4[1];
        }
      },
      trys: [],
      ops: []
    };
    const obj = Object.create((typeof globalThis.Iterator === "function" ? globalThis.Iterator : Object).prototype);
    obj.next = next;
    obj.throw = next;
    let c0 = 2;
    obj.return = next;
    if (typeof Symbol === "function") {
      let tmp2 = obj;
      const _Symbol = Symbol;
      obj[Symbol.iterator] = function() {
        return this;
      };
    }
    return obj;
  }
  function p(obj, arg1) {
    for (const key10007 in obj) {
      let callResult = "default" === key10007;
      if (!callResult) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(arg1, key10007);
      }
      if (callResult) {
        continue;
      } else {
        let tmp3 = closure_28(arg1, obj, key10007);
        continue;
      }
      continue;
    }
  }
  let closure_28 = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    let closure_0 = __esModule;
    closure_1 = arg2;
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
    let tmp3 = ownPropertyDescriptor;
    if (tmp3) {
      let tmp4;
      if ("get" in ownPropertyDescriptor) {
        tmp4 = !__esModule.__esModule;
      } else {
        tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
      }
      tmp3 = !tmp4;
    }
    if (!tmp3) {
      ownPropertyDescriptor = { enumerable: true, get };
      const obj = { enumerable: true, get };
    }
    Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
  function y(arg0) {
    let closure_0 = arg0;
    let iterator = typeof Symbol === "function";
    if (typeof Symbol === "function") {
      const _Symbol = Symbol;
      iterator = Symbol.iterator;
    }
    let c1 = 0;
    if (iterator && closure_0[iterator]) {
      return (iterator && closure_0[iterator]).call(closure_0);
    } else {
      if (closure_0) {
        if (typeof closure_0.length === "number") {
          return { next };
        }
      }
      let str = "Symbol.iterator is not defined.";
      const _TypeError = TypeError;
      if (iterator) {
        str = "Object is not iterable.";
      }
      const self = this;
      const self2 = this;
      const _TypeError1 = new _TypeError(str);
      throw _TypeError1;
    }
  }
  function d(arg0, arg1) {
    let diff = arg1;
    let tmp3 = typeof Symbol === "function";
    if (typeof Symbol === "function") {
      const _Symbol = Symbol;
      tmp3 = arg0[Symbol.iterator];
    }
    let obj = tmp3;
    if (obj) {
      let iter;
      const iter2 = obj.call(arg0);
      try {
        const items = [];
        try {
          if (undefined === diff) {
            const iter3 = iter2.next();
            iter = iter3;
            if (!iter3.done) {
              while (true) {
                let arr = items.push(iter.value);
                if (undefined === diff) {
                  let iter4 = iter2.next();
                  iter = iter4;
                  if (iter4.done) {
                    break;
                  }
                } else {
                  let tmp12 = +diff;
                  diff = tmp12 - 1;
                  if (tmp12 <= 0) {
                    break;
                  }
                }
                break;
              }
            }
          } else {
            diff = tmp7 - 1;
          }
        } catch (tmp13) {
        }
        try {
          let tmp14 = iter && !iter.done;
          if (tmp14) {
            const _return = iter2.return;
            obj = _return;
            tmp14 = _return;
          }
          if (tmp14) {
            obj.call(iter2);
          }
          const tmp17 = tmp2;
          if (tmp17) {
            throw tmp2.error;
          } else {
            return items;
          }
        } catch (tmp19) {
          const tmp20 = tmp2;
          if (tmp20) {
            throw tmp2.error;
          } else {
            throw tmp19;
          }
        }
      } catch (tmp22) {
        try {
          let tmp23 = iter && !iter.done;
          if (tmp23) {
            const _return2 = iter2.return;
            obj = _return2;
            tmp23 = _return2;
          }
          if (tmp23) {
            obj.call(iter2);
          }
          const tmp24 = tmp2;
          if (tmp24) {
            throw tmp2.error;
          } else {
            throw tmp22;
          }
        } catch (tmp26) {
          const tmp27 = tmp2;
          if (tmp27) {
            throw tmp2.error;
          } else {
            throw tmp26;
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
  function h(arg0, arg1, arg2) {
    let callResult1;
    let tmp4;
    const tmp = arg2;
    if (tmp) {
      let num4 = 0;
      if (0 < arg1.length) {
        do {
          let tmp5 = !tmp4;
          let tmp7 = tmp4;
          if (!tmp7) {
            tmp5 = num4 in arg1;
          }
          let tmp8 = tmp4;
          if (!tmp5) {
            let callResult = tmp4;
            if (!callResult) {
              let _Array = Array;
              callResult = slice.call(arg1, 0, num4);
            }
            callResult[num4] = arg1[num4];
            tmp8 = callResult;
          }
          num4 = num4 + 1;
          tmp4 = tmp8;
          callResult1 = tmp8;
        } while (num4 < arg1.length);
      }
    }
    const concat = arg0.concat;
    if (!callResult1) {
      const _Array2 = Array;
      const slice2 = Array.prototype.slice;
      callResult1 = slice2.call(arg1);
    }
    return concat(callResult1);
  }
  function _(v) {
    let tmp2;
    const self = this;
    if (this instanceof _) {
      self.v = v;
      tmp2 = self;
    } else {
      const self2 = this;
      tmp2 = _(v);
    }
    return tmp2;
  }
  function w(arg0, arg1, apply) {
    const next = (arg0) => {
      let closure_0 = arg0;
      const promise = new Promise((arg0, arg1) => {
        const items = [return_str, closure_0, arg0, arg1];
        if (closure_1.push(items) <= 1) {
          resume(return_str, closure_0);
        }
      });
      return promise;
    };
    function resume(arg0, arg1) {
      function step(iter) {
        if (iter.value instanceof closure_2_18) {
          const resolved = Promise.resolve(iter.value.v);
          resolved.then(fulfill, reject);
        } else {
          closure_1_1[0][2](iter);
          closure_1_1.shift();
          if (closure_1_1.length) {
            resume(closure_1_1[0][0], closure_1_1[0][1]);
          }
        }
      }
      try {
        step(iter[arg0](arg1));
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
    function settle(fn, arg1) {
      fn(arg1);
      closure_1.shift();
      if (closure_1.length) {
        resume(closure_1[0][0], closure_1[0][1]);
      }
    }
    if (Symbol.asyncIterator) {
      let items = arg1;
      apply = apply.apply;
      if (!arg1) {
        items = [];
      }
      const iter = apply(arg0, items);
      closure_1 = [];
      const obj = Object.create((typeof globalThis.AsyncIterator === "function" ? globalThis.AsyncIterator : Object).prototype);
      const next_str = "next";
      if (iter.next) {
        obj.next = next;
      }
      const throw_str = "throw";
      if (iter.throw) {
        obj.throw = next;
      }
      const return_str = "return";
      if (iter.return) {
        obj.return = next;
        const _return = obj.return;
        obj.return = (arg0) => {
          const resolved = Promise.resolve(arg0);
          return resolved.then(_return, reject);
        };
      }
      const _Symbol = Symbol;
      obj[Symbol.asyncIterator] = function() {
        return this;
      };
      return obj;
    } else {
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("Symbol.asyncIterator is not defined.");
      throw typeError;
    }
  }
  function m(next) {
    let fn2;
    let fn3;
    const f150262 = function(arg0) {
      let obj;
      closure_1 = !closure_1;
      if (closure_1) {
        obj = arg0;
        if (c1) {
          if (typeof c1 === "function") {
            throw arg0;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      } else {
        const tmp4 = _return[_return2](arg0);
        if (typeof _ === "function") {
          let tmp10;
          if (globalThis instanceof closure_128_18) {
            globalThis.v = tmp4;
            tmp10 = globalThis;
          } else {
            const self = this;
            if (typeof closure_128_18 === "function") {
              if (self instanceof closure_2_18) {
                self.v = tmp4;
                tmp10 = self;
              } else {
                const self2 = this;
                tmp10 = closure_2_18(tmp4);
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          obj = { value: tmp10, done: false };
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      return obj;
    };
    let closure_0 = next;
    next = "next";
    next = undefined;
    if (next.next) {
      next = f150262;
    }
    let obj = { next, throw: fn2, return: fn3 };
    fn2 = (arg0) => {
      throw arg0;
    };
    const _throw = "throw";
    if (next.throw) {
      fn2 = f150262;
    }
    const _return = "return";
    let c1;
    fn3 = undefined;
    if (next.return) {
      fn3 = f150262;
    }
    obj[Symbol.iterator] = function() {
      return this;
    };
    return obj;
  }
  function j(arg0) {
    let tmp8;
    const f150263 = (arg0) => {
      let iter = arg0;
      const promise = new Promise((arg0, arg1) => {
        iter = closure_3_0[return_str](iter);
        let closure_0 = arg0;
        const done = iter.done;
        const resolved = Promise.resolve(iter.value);
        resolved.then((value) => {
          const obj = { value, done };
          closure_0(obj);
        }, arg1);
      });
      return promise;
    };
    let callResult1 = arg0;
    if (Symbol.asyncIterator) {
      let callResult;
      const _Symbol = Symbol;
      let obj = arg0[Symbol.asyncIterator];
      if (obj) {
        callResult = obj.call(arg0);
      } else if (typeof y === "function") {
        let c0 = arg0;
        const _Symbol2 = Symbol;
        let iterator = typeof Symbol === "function";
        if (typeof Symbol === "function") {
          const _Symbol4 = Symbol;
          iterator = Symbol.iterator;
        }
        let obj2 = iterator;
        if (obj2) {
          let tmp4 = c0;
          obj2 = c0[iterator];
        }
        closure_1 = 0;
        if (obj2) {
          callResult1 = obj2.call(c0);
        } else {
          if (c0) {
            if (typeof c0.length === "number") {
              callResult1 = { next };
            }
          }
          let str2 = "Symbol.iterator is not defined.";
          const _TypeError2 = TypeError;
          if (iterator) {
            str2 = "Object is not iterable.";
          }
          const self3 = this;
          const self4 = this;
          const _TypeError21 = new _TypeError2(str2);
          throw _TypeError21;
        }
        const next_str = "next";
        callResult = { next: tmp8, throw: callResult1.throw && f150263, return: callResult1.return && f150263 };
        const throw_str = "throw";
        const return_str = "return";
        const _Symbol3 = Symbol;
        tmp8 = callResult1.next && f150263;
        callResult[Symbol.asyncIterator] = function() {
          return this;
        };
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      return callResult;
    } else {
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("Symbol.asyncIterator is not defined.");
      throw typeError;
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
  let closure_1 = Object.create ? ((arg0, value) => {
    const obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
  fn = function ownKeys(__addDisposableResource) {
    fn = Object.getOwnPropertyNames || ((__addDisposableResource) => {
      const items = [];
      for (const key10005 in obj) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        if (!hasOwnProperty.call(obj, key10005)) {
          continue;
        } else {
          items[items.length] = key10005;
          continue;
        }
        continue;
      }
      return items;
    });
    return fn(__addDisposableResource);
  };
  function g(__esModule) {
    const tmp = __esModule;
    if (tmp) {
      if (__esModule.__esModule) {
        return __esModule;
      }
    }
    const obj = {};
    if (null != __esModule) {
      let num;
      const arr = fn(__esModule);
      for (let num = 0; num < arr.length; num = num + 1) {
        if ("default" !== arr[num]) {
          let tmp5 = closure_2_28(obj, __esModule, arr[num]);
        }
      }
    }
    closure_1(obj, __esModule);
    return obj;
  }
  function P(__esModule) {
    let tmp2;
    const tmp = __esModule;
    if (!tmp) {
      tmp2 = { default: __esModule };
      const obj = { default: __esModule };
    } else {
      tmp2 = __esModule;
    }
    return tmp2;
  }
  function x(arg0, has, arg2, call) {
    let tmp6;
    if ("a" === arg2) {
      if (!call) {
        const _TypeError = TypeError;
        const self = this;
        const self2 = this;
        const typeError = new TypeError("Private accessor was defined without a getter");
        throw typeError;
      }
    }
    if (typeof has === "function") {
      tmp6 = arg0 !== has || !call;
    } else {
      tmp6 = !has.has(arg0);
    }
    if (tmp6) {
      const _TypeError2 = TypeError;
      const self3 = this;
      const self4 = this;
      const typeError1 = new TypeError("Cannot read private member from an object whose class did not declare it");
      throw typeError1;
    } else {
      let tmp7 = call;
      if ("m" !== arg2) {
        let callResult;
        if ("a" === arg2) {
          callResult = call.call(arg0);
        } else if (call) {
          callResult = call.value;
        } else {
          callResult = has.get(arg0);
        }
        tmp7 = callResult;
      }
      return tmp7;
    }
  }
  function E(arg0, has, value, arg3, call) {
    if ("m" === arg3) {
      const _TypeError3 = TypeError;
      const self5 = this;
      const self6 = this;
      const typeError = new TypeError("Private method is not writable");
      throw typeError;
    } else {
      let tmp7;
      if ("a" === arg3) {
        if (!call) {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError1 = new TypeError("Private accessor was defined without a setter");
          throw typeError1;
        }
      }
      if (typeof has === "function") {
        tmp7 = arg0 !== has || !call;
      } else {
        tmp7 = !has.has(arg0);
      }
      if (tmp7) {
        const _TypeError2 = TypeError;
        const self3 = this;
        const self4 = this;
        const typeError2 = new TypeError("Cannot write private member to an object whose class did not declare it");
        throw typeError2;
      } else {
        if ("a" === arg3) {
          call.call(arg0, value);
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
      let hasItem;
      if (typeof has === "function") {
        hasItem = obj === has;
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
      let tmp5;
      if (typeof value !== "object") {
        if (typeof value !== "function") {
          const _TypeError4 = TypeError;
          const self7 = this;
          const self8 = this;
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
          const self = this;
          const self2 = this;
          const typeError1 = new TypeError("Symbol.asyncDispose is not defined.");
          throw typeError1;
        }
      }
      if (undefined === dispose) {
        const _Symbol3 = Symbol;
        if (Symbol.dispose) {
          const _Symbol4 = Symbol;
          dispose = tmp9;
          if (async) {
            let closure_0 = tmp9;
            dispose = tmp9;
            tmp5 = value[Symbol.dispose];
          }
        } else {
          const _TypeError2 = TypeError;
          const self3 = this;
          const self4 = this;
          const typeError2 = new TypeError("Symbol.dispose is not defined.");
          throw typeError2;
        }
      }
      if (typeof dispose !== "function") {
        const _TypeError3 = TypeError;
        const self5 = this;
        const self6 = this;
        const typeError3 = new TypeError("Object not disposable.");
        throw typeError3;
      } else {
        if (tmp5) {
          dispose = function n() {
            try {
              closure_0.call(this);
            } catch (tmp) {
              return Promise.reject(tmp);
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
    let closure_0 = arg0;
    function fail(arg0) {
      let tmp2 = arg0;
      if (closure_0.hasError) {
        const self = this;
        const self2 = this;
        tmp2 = new closure_3(arg0, closure_0.error, "An error was suppressed during disposal.");
      }
      closure_0.error = tmp2;
      closure_0.hasError = true;
    }
    closure_3 = 0;
    function next() {
      let tmp = hasError;
      const stack = hasError.stack;
      arr3 = stack.pop();
      const arr = stack.pop();
      if (arr3) {
        try {
          if (!arr3.async) {
            if (1 === closure_3) {
              closure_3 = 0;
              const stack1 = hasError.stack;
              stack1.push(arr3);
              const resolved = Promise.resolve();
              return resolved.then(next);
            }
          }
          if (arr3.dispose) {
            const dispose = arr3.dispose;
            dispose.call(arr3.value);
            if (arr3.async) {
              closure_3 = closure_3 | 2;
              const resolved1 = Promise.resolve(tmp15);
              return resolved1.then(next, function(arg0) {
                let tmp2 = arg0;
                if (hasError.hasError) {
                  const self = this;
                  const self2 = this;
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
          tmp = hasError;
          const stack2 = hasError.stack;
          arr3 = stack2.pop();
        } catch (tmp20) {
          fail(tmp20);
        }
      }
      if (1 === closure_3) {
        let rejectResult;
        if (tmp.hasError) {
          rejectResult = _Promise3.reject(tmp.error);
        } else {
          rejectResult = _Promise3.resolve();
        }
        return rejectResult;
      } else if (tmp.hasError) {
        throw tmp.error;
      }
    }
    return next();
  }
  function D(str, arg1) {
    let closure_0 = arg1;
    let replaced = str;
    if (typeof str === "string") {
      replaced = str;
      const obj = /^\.\.?\//;
      if (obj.test(str)) {
        replaced = str.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (arg0, arg1, arg2, arg3, arg4) => {
          let text;
          const tmp = arg1;
          if (tmp) {
            let str3 = ".js";
            if (closure_0) {
              str3 = ".jsx";
            }
            text = str3;
          } else if (!arg2) {
            const sum = arg2 + arg3;
            text = `${tmp7 + "." + arg4.toLowerCase()}js`;
          } else {
            text = arg0;
            if (arg3) {
              text = arg0;
            }
          }
          return text;
        });
      }
    }
    return replaced;
  }
  let tmp = fn("__extends", e);
  let tmp2 = fn("__assign", closure_1);
  let tmp3 = fn("__rest", fn);
  let tmp4 = fn("__decorate", closure_3);
  let tmp5 = fn("__param", o);
  let tmp6 = fn("__esDecorate", i);
  let tmp7 = fn("__runInitializers", c);
  let tmp8 = fn("__propKey", a);
  let tmp9 = fn("__setFunctionName", u);
  let tmp10 = fn("__metadata", f);
  let tmp11 = fn("__awaiter", s);
  let tmp12 = fn("__generator", l);
  let tmp13 = fn("__exportStar", p);
  let tmp14 = fn("__createBinding", closure_28);
  const tmp15 = fn("__values", y);
  let tmp16 = fn("__read", d);
  let tmp17 = fn("__spread", b);
  fn("__spreadArrays", v);
  let tmp19 = fn("__spreadArray", h);
  let tmp20 = fn("__await", _);
  fn("__asyncGenerator", w);
  let tmp22 = fn("__asyncDelegator", m);
  let tmp23 = fn("__asyncValues", j);
  let tmp24 = fn("__makeTemplateObject", O);
  let tmp25 = fn("__importStar", g);
  let tmp26 = fn("__importDefault", P);
  let tmp27 = fn("__classPrivateFieldGet", x);
  let tmp28 = fn("__classPrivateFieldSet", E);
  fn("__classPrivateFieldIn", S);
  let tmp30 = fn("__addDisposableResource", I);
  fn("__disposeResources", k);
  let tmp32 = fn("__rewriteRelativeImportExtension", D);
};
if (typeof global !== "object") {
  let tmp6 = globalThis;
  const _self = self;
  if (typeof self === "object") {
    _self1 = self;
  } else {
    _self1 = globalThis;
    if (typeof globalThis !== "object") {
      _self1 = {};
    }
  }
  tmp = _self1;
}
_self1 = tmp;
if (typeof globalThis.define === "function") {
  const define2 = globalThis.define;
  if (globalThis.define.amd) {
    let str2 = "tslib";
    globalThis.define("tslib", ["exports"], (arg0) => {
      let closure_0 = arg0;
      if (arg0 !== _self1) {
        const _Object = Object;
        if (typeof Object.create === "function") {
          const _Object2 = Object;
        } else {
          arg0.__esModule = true;
        }
      }
      closure_0 = _self1;
      const f135008 = (arg0, arg1) => {
        let tmp2Result = arg1;
        if (f135008) {
          tmp2Result = tmp2(arg0, arg1);
        }
        closure_0[arg0] = tmp2Result;
        return tmp2Result;
      };
      // // eliminated: always false
      fn((arg0, arg1) => {
        let tmp2Result = arg1;
        if (f135008) {
          tmp2Result = tmp2(arg0, arg1);
        }
        closure_0[arg0] = tmp2Result;
        return tmp2Result;
      });
    });
  }
}
if (typeof module === "object") {
  if (typeof module.exports === "object") {
    const _exports = module.exports;
    let c1;
    if (_exports !== tmp) {
      let _Object = Object;
      if (typeof Object.create === "function") {
        let _Object2 = Object;
        let str = "__esModule";
      } else {
        _exports.__esModule = true;
      }
    }
    _self1 = tmp;
    let f135008 = (arg0, arg1) => {
      let tmp2Result = arg1;
      if (f135008) {
        tmp2Result = tmp2(arg0, arg1);
      }
      closure_0[arg0] = tmp2Result;
      return tmp2Result;
    };
    // // eliminated: always false
    fn((arg0, arg1) => {
      let tmp2Result = arg1;
      if (f135008) {
        tmp2Result = tmp2(arg0, arg1);
      }
      closure_0[arg0] = tmp2Result;
      return tmp2Result;
    });
  }
}
_self1 = tmp;
// // eliminated: always false
fn((arg0, arg1) => {
  let tmp2Result = arg1;
  if (f135008) {
    tmp2Result = tmp2(arg0, arg1);
  }
  closure_0[arg0] = tmp2Result;
  return tmp2Result;
});