// _runtime/09556_root.js
let fn = () => {
  let items = [
    (arg0, arg1, fn) => {
      module.exports = fn(1);
    },
    (arg0, arg1, fn) => {
      closure_0 = fn;
      fn = Object.assign;
      if (!fn) {
        fn = (arg0) => {
          for (let num = 1; num < arguments.length; num = num + 1) {
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
      closure_2 = fn(2);
      closure_3 = fn(14);
      closure_4 = fn(19);
      closure_5 = fn(16);
      closure_6 = fn(32);
      closure_7 = fn(15);
      obj = { alternatives: fn(28), array: fn(33), boolean: fn(27), binary: fn(34), date: fn(20), number: fn(26), object: fn(29), string: fn(21) };
      obj.root = () => {
        obj = new closure_3();
        let cloneResult = obj.clone();
        cloneResult.any = () => {
          closure_2.assert(0 === arguments.length, "Joi.any() does not allow arguments.");
          return obj;
        };
        fn = () => {
          const alternatives = obj.alternatives;
          if (arguments.length) {
            const _try = alternatives.try;
            let applyResult = _try(...arguments);
          } else {
            applyResult = alternatives;
          }
          return applyResult;
        };
        cloneResult.alt = fn;
        cloneResult.alternatives = fn;
        cloneResult.array = () => {
          closure_1_2.assert(0 === arguments.length, "Joi.array() does not allow arguments.");
          return obj.array;
        };
        const fn2 = () => {
          closure_1_2.assert(0 === arguments.length, "Joi.boolean() does not allow arguments.");
          return obj.boolean;
        };
        cloneResult.bool = fn2;
        cloneResult.boolean = fn2;
        cloneResult.binary = () => {
          closure_1_2.assert(0 === arguments.length, "Joi.binary() does not allow arguments.");
          return obj.binary;
        };
        cloneResult.date = () => {
          closure_1_2.assert(0 === arguments.length, "Joi.date() does not allow arguments.");
          return obj.date;
        };
        cloneResult.func = () => {
          closure_1_2.assert(0 === arguments.length, "Joi.func() does not allow arguments.");
          const object = obj.object;
          return object._func();
        };
        cloneResult.number = () => {
          closure_1_2.assert(0 === arguments.length, "Joi.number() does not allow arguments.");
          return obj.number;
        };
        cloneResult.object = () => {
          const object = obj.object;
          if (arguments.length) {
            const keys = object.keys;
            let applyResult = keys(...arguments);
          } else {
            applyResult = object;
          }
          return applyResult;
        };
        cloneResult.string = () => {
          closure_1_2.assert(0 === arguments.length, "Joi.string() does not allow arguments.");
          return obj.string;
        };
        cloneResult.ref = () => {
          const create = closure_1_7.create;
          const apply = create.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(null);
          } else {
            applyArgumentsResult = apply(null, arguments);
          }
          return applyArgumentsResult;
        };
        cloneResult.isRef = (arg0) => closure_1_7.isRef(arg0);
        cloneResult.validate = (arg0) => {
          const tmp = arguments[arguments.length - 1];
          let tmp2 = null;
          if (typeof tmp === "function") {
            tmp2 = tmp;
          }
          let num = 0;
          if (tmp2) {
            num = 1;
          }
          const diff = arguments.length - num;
          if (1 === diff) {
            return obj.validate(arg0, tmp2);
          } else {
            if (3 === diff) {
              obj = arguments[2];
            } else {
              obj = {};
            }
            return cloneResult.compile(arguments[1])._validateWithOptions(arg0, obj, tmp2);
          }
        };
        cloneResult.describe = () => {
          if (arguments.length) {
            let compileResult = cloneResult.compile(arguments[0]);
          } else {
            compileResult = obj;
          }
          return compileResult.describe();
        };
        cloneResult.compile = (otherwise) => {
          try {
            return closure_1_4.schema(otherwise);
          } catch (obj) {
            if (obj.hasOwnProperty("path")) {
              obj.message = obj.message + "(" + obj.path + ")";
            }
            throw obj;
          }
        };
        cloneResult.assert = (arg0, arg1, arg2) => {
          cloneResult.attempt(arg0, arg1, arg2);
        };
        cloneResult.attempt = (arg0, arg1, arg2) => {
          const iter = cloneResult.validate(arg0, arg1);
          const error = iter.error;
          if (error) {
            if (arg2) {
              const _Error = Error;
              if (arg2 instanceof Error) {
                throw arg2;
              } else {
                const text = `${arg2} `;
                error.message = `${arg2} ` + error.annotate();
                throw error;
              }
            } else {
              error.message = error.annotate();
              throw error;
            }
          } else {
            return iter.value;
          }
        };
        cloneResult.reach = function(_inner, str) {
          let tmp = _inner;
          if (_inner) {
            tmp = _inner instanceof closure_1_3;
          }
          closure_1_2.assert(tmp, "you must provide a joi schema");
          closure_1_2.assert(typeof str === "string", "path must be a string");
          if ("" === str) {
            return _inner;
          } else {
            const children = _inner._inner.children;
            if (children) {
              const first = str.split(".")[0];
              let num = 0;
              if (0 < children.length) {
                while (children[num].key !== first) {
                  num = num + 1;
                }
                const self = this;
                return this.reach(children[num].schema, str.substr(first.length + 1));
              }
            }
          }
        };
        cloneResult.lazy = (arg0) => closure_1_6.set(arg0);
        cloneResult.extend = function() {
          obj = closure_2;
          let call = slice.call;
          if (typeof call === "unknown") {
            let substr = slice();
          } else {
            substr = call(arguments);
          }
          let self = this;
          const flattenResult = closure_2.flatten(substr);
          obj.assert(flattenResult.length > 0, "You need to provide at least one extension");
          this.assert(flattenResult, cloneResult.extensionsSchema);
          obj = Object.create(this);
          closure_0 = obj;
          let num = 0;
          if (0 < flattenResult.length) {
            while (true) {
              let tmp6 = flattenResult[num];
              closure_0 = tmp6;
              let base = tmp6.base;
              if (!base) {
                base = self.any();
              }
              cloneResult = base.clone();
              let type = cloneResult;
              let constructor = cloneResult.constructor;
              closure_0 = constructor;
              class type {
                constructor() {
                  self = this;
                  if (this instanceof closure_1) {
                    tmp6 = closure_0;
                    call = closure_0.call;
                    tmp7 = typeof call === "unknown" ? tmp6() : call(self);
                    if (self) {
                      tmp13 = self;
                      if (tmp7) {
                        if (typeof tmp7 === "object") {
                          tmp13 = tmp7;
                        } else {
                          tmp13 = self;
                        }
                      }
                      tmp14 = closure_0;
                      if (closure_0.base) {
                        tmp15 = closure_1;
                        tmp16 = closure_1;
                        tmp17 = closure_1(tmp13, closure_1);
                      }
                      tmp13._type = tmp14.name;
                      if (!tmp14.language) {
                        return tmp13;
                      } else {
                        _settings = tmp13._settings;
                        if (!_settings) {
                          obj = { language: null };
                          obj.language = {};
                          _settings = obj;
                        }
                        tmp13._settings = _settings;
                        obj = {};
                        ({ name, language } = tmp14);
                        tmp18 = __webpack_require__;
                        if (name in obj) {
                          tmp19 = globalThis;
                          _Object = Object;
                          obj1 = { value: null, enumerable: true, configurable: true, writable: true };
                          obj1.value = language;
                          definePropertyResult = Object.defineProperty(obj, name, obj1);
                        } else {
                          obj[name] = language;
                        }
                        obj = __webpack_require__.applyToDefaults(tmp13._settings.language, obj);
                        tmp13._settings.language = obj;
                      }
                    } else {
                      tmp8 = globalThis;
                      _ReferenceError = ReferenceError;
                      tmp9 = new.target;
                      str2 = "this hasn't been initialised - super() hasn't been called";
                      tmp10 = new.target;
                      referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      tmp12 = referenceError;
                      throw referenceError;
                    }
                  } else {
                    tmp = globalThis;
                    _TypeError = TypeError;
                    tmp2 = new.target;
                    str = "Cannot call a class as a function";
                    tmp3 = new.target;
                    typeError = new TypeError("Cannot call a class as a function");
                    tmp5 = typeError;
                    throw typeError;
                  }
                  return;
                }
              }
              if (typeof constructor !== "function") {
                if (null !== constructor) {
                  let _TypeError = TypeError;
                  let tmp23 = new.target;
                  let str = "Super expression must either be null or a function, not ";
                  let tmp24 = new.target;
                  let typeError = new TypeError("Super expression must either be null or a function, not " + typeof constructor);
                  throw typeError;
                }
              }
              let prototype = constructor;
              if (constructor) {
                prototype = constructor.prototype;
              }
              obj = { constructor: null };
              let obj1 = { value: type, enumerable: false, writable: true, configurable: true };
              obj.constructor = obj1;
              type.prototype = Object.create(prototype, obj);
              if (constructor) {
                let _Object = Object;
                let _Object2 = Object;
                if (Object.setPrototypeOf) {
                  let setPrototypeOfResult = _Object2.setPrototypeOf(type, constructor);
                } else {
                  let ownPropertyNames = _Object2.getOwnPropertyNames(constructor);
                  for (let num2 = 0; num2 < ownPropertyNames.length; num2 = num2 + 1) {
                    let tmp9 = ownPropertyNames[num2];
                    let _Object3 = Object;
                    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(constructor, tmp9);
                    let configurable = ownPropertyDescriptor;
                    if (ownPropertyDescriptor) {
                      configurable = ownPropertyDescriptor.configurable;
                    }
                    if (configurable) {
                      configurable = undefined === type[tmp9];
                    }
                    if (configurable) {
                      let _Object4 = Object;
                      let definePropertyResult = Object.defineProperty(type, tmp9, ownPropertyDescriptor);
                    }
                  }
                }
              }
              if (tmp6.coerce) {
                class type {
                  constructor() {
                    self = this;
                    if (this instanceof closure_1) {
                      tmp6 = closure_0;
                      call = closure_0.call;
                      tmp7 = typeof call === "unknown" ? tmp6() : call(self);
                      if (self) {
                        tmp13 = self;
                        if (tmp7) {
                          if (typeof tmp7 === "object") {
                            tmp13 = tmp7;
                          } else {
                            tmp13 = self;
                          }
                        }
                        tmp14 = closure_0;
                        if (closure_0.base) {
                          tmp15 = closure_1;
                          tmp16 = closure_1;
                          tmp17 = closure_1(tmp13, closure_1);
                        }
                        tmp13._type = tmp14.name;
                        if (!tmp14.language) {
                          return tmp13;
                        } else {
                          _settings = tmp13._settings;
                          if (!_settings) {
                            obj = { language: null };
                            obj.language = {};
                            _settings = obj;
                          }
                          tmp13._settings = _settings;
                          obj = {};
                          ({ name, language } = tmp14);
                          tmp18 = __webpack_require__;
                          if (name in obj) {
                            tmp19 = globalThis;
                            _Object = Object;
                            obj1 = { value: null, enumerable: true, configurable: true, writable: true };
                            obj1.value = language;
                            definePropertyResult = Object.defineProperty(obj, name, obj1);
                          } else {
                            obj[name] = language;
                          }
                          obj = __webpack_require__.applyToDefaults(tmp13._settings.language, obj);
                          tmp13._settings.language = obj;
                        }
                      } else {
                        tmp8 = globalThis;
                        _ReferenceError = ReferenceError;
                        tmp9 = new.target;
                        str2 = "this hasn't been initialised - super() hasn't been called";
                        tmp10 = new.target;
                        referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        tmp12 = referenceError;
                        throw referenceError;
                      }
                    } else {
                      tmp = globalThis;
                      _TypeError = TypeError;
                      tmp2 = new.target;
                      str = "Cannot call a class as a function";
                      tmp3 = new.target;
                      typeError = new TypeError("Cannot call a class as a function");
                      tmp5 = typeError;
                      throw typeError;
                    }
                    return;
                  }
                  _coerce(arg0, arg1, arg2) {
                    self = this;
                    value = arg0;
                    if (closure_2.prototype._coerce) {
                      _coerce = closure_2.prototype._coerce;
                      call = _coerce.call;
                      if (typeof call === "unknown") {
                        iter = _coerce(arg0, arg1, arg2);
                      } else {
                        tmp2 = _coerce;
                        tmp3 = self;
                        tmp4 = arg0;
                        tmp5 = arg1;
                        tmp6 = arg2;
                        iter = call(self, arg0, arg1, arg2);
                      }
                      if (iter.errors) {
                        return iter;
                      } else {
                        value = iter.value;
                      }
                    }
                    coerce = closure_0.coerce;
                    call2 = coerce.call;
                    if (typeof call2 === "unknown") {
                      coerceResult = coerce(value, arg1, arg2);
                    } else {
                      tmp7 = coerce;
                      tmp8 = self;
                      tmp9 = value;
                      tmp10 = arg1;
                      tmp11 = arg2;
                      coerceResult = call2(self, value, arg1, arg2);
                    }
                    if (coerceResult instanceof closure_5.Err) {
                      obj = { value: null, errors: null };
                      obj.value = value;
                      obj.errors = coerceResult;
                    } else {
                      obj = { value: null };
                      obj.value = coerceResult;
                    }
                    return obj;
                  }
                }
              }
              if (tmp6.pre) {
                class type {
                  constructor() {
                    self = this;
                    if (this instanceof closure_1) {
                      tmp6 = closure_0;
                      call = closure_0.call;
                      tmp7 = typeof call === "unknown" ? tmp6() : call(self);
                      if (self) {
                        tmp13 = self;
                        if (tmp7) {
                          if (typeof tmp7 === "object") {
                            tmp13 = tmp7;
                          } else {
                            tmp13 = self;
                          }
                        }
                        tmp14 = closure_0;
                        if (closure_0.base) {
                          tmp15 = closure_1;
                          tmp16 = closure_1;
                          tmp17 = closure_1(tmp13, closure_1);
                        }
                        tmp13._type = tmp14.name;
                        if (!tmp14.language) {
                          return tmp13;
                        } else {
                          _settings = tmp13._settings;
                          if (!_settings) {
                            obj = { language: null };
                            obj.language = {};
                            _settings = obj;
                          }
                          tmp13._settings = _settings;
                          obj = {};
                          ({ name, language } = tmp14);
                          tmp18 = __webpack_require__;
                          if (name in obj) {
                            tmp19 = globalThis;
                            _Object = Object;
                            obj1 = { value: null, enumerable: true, configurable: true, writable: true };
                            obj1.value = language;
                            definePropertyResult = Object.defineProperty(obj, name, obj1);
                          } else {
                            obj[name] = language;
                          }
                          obj = __webpack_require__.applyToDefaults(tmp13._settings.language, obj);
                          tmp13._settings.language = obj;
                        }
                      } else {
                        tmp8 = globalThis;
                        _ReferenceError = ReferenceError;
                        tmp9 = new.target;
                        str2 = "this hasn't been initialised - super() hasn't been called";
                        tmp10 = new.target;
                        referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        tmp12 = referenceError;
                        throw referenceError;
                      }
                    } else {
                      tmp = globalThis;
                      _TypeError = TypeError;
                      tmp2 = new.target;
                      str = "Cannot call a class as a function";
                      tmp3 = new.target;
                      typeError = new TypeError("Cannot call a class as a function");
                      tmp5 = typeError;
                      throw typeError;
                    }
                    return;
                  }
                  _coerce(arg0, arg1, arg2) {
                    self = this;
                    value = arg0;
                    if (closure_2.prototype._coerce) {
                      _coerce = closure_2.prototype._coerce;
                      call = _coerce.call;
                      if (typeof call === "unknown") {
                        iter = _coerce(arg0, arg1, arg2);
                      } else {
                        tmp2 = _coerce;
                        tmp3 = self;
                        tmp4 = arg0;
                        tmp5 = arg1;
                        tmp6 = arg2;
                        iter = call(self, arg0, arg1, arg2);
                      }
                      if (iter.errors) {
                        return iter;
                      } else {
                        value = iter.value;
                      }
                    }
                    coerce = closure_0.coerce;
                    call2 = coerce.call;
                    if (typeof call2 === "unknown") {
                      coerceResult = coerce(value, arg1, arg2);
                    } else {
                      tmp7 = coerce;
                      tmp8 = self;
                      tmp9 = value;
                      tmp10 = arg1;
                      tmp11 = arg2;
                      coerceResult = call2(self, value, arg1, arg2);
                    }
                    if (coerceResult instanceof closure_5.Err) {
                      obj = { value: null, errors: null };
                      obj.value = value;
                      obj.errors = coerceResult;
                    } else {
                      obj = { value: null };
                      obj.value = coerceResult;
                    }
                    return obj;
                  }
                  _base(arg0, arg1, arg2) {
                    self = this;
                    value = arg0;
                    if (closure_2.prototype._base) {
                      _base = closure_2.prototype._base;
                      call = _base.call;
                      if (typeof call === "unknown") {
                        iter = _base(arg0, arg1, arg2);
                      } else {
                        tmp2 = _base;
                        tmp3 = self;
                        tmp4 = arg0;
                        tmp5 = arg1;
                        tmp6 = arg2;
                        iter = call(self, arg0, arg1, arg2);
                      }
                      if (iter.errors) {
                        return iter;
                      } else {
                        value = iter.value;
                      }
                    }
                    pre = closure_0.pre;
                    call2 = pre.call;
                    if (typeof call2 === "unknown") {
                      preResult = pre(value, arg1, arg2);
                    } else {
                      tmp7 = pre;
                      tmp8 = self;
                      tmp9 = value;
                      tmp10 = arg1;
                      tmp11 = arg2;
                      preResult = call2(self, value, arg1, arg2);
                    }
                    if (preResult instanceof closure_5.Err) {
                      obj = { value: null, errors: null };
                      obj.value = value;
                      obj.errors = preResult;
                    } else {
                      obj = { value: null };
                      obj.value = preResult;
                    }
                    return obj;
                  }
                }
              }
              if (tmp6.rules) {
                class type {
                  constructor() {
                    self = this;
                    if (this instanceof closure_1) {
                      tmp6 = closure_0;
                      call = closure_0.call;
                      tmp7 = typeof call === "unknown" ? tmp6() : call(self);
                      if (self) {
                        tmp13 = self;
                        if (tmp7) {
                          if (typeof tmp7 === "object") {
                            tmp13 = tmp7;
                          } else {
                            tmp13 = self;
                          }
                        }
                        tmp14 = closure_0;
                        if (closure_0.base) {
                          tmp15 = closure_1;
                          tmp16 = closure_1;
                          tmp17 = closure_1(tmp13, closure_1);
                        }
                        tmp13._type = tmp14.name;
                        if (!tmp14.language) {
                          return tmp13;
                        } else {
                          _settings = tmp13._settings;
                          if (!_settings) {
                            obj = { language: null };
                            obj.language = {};
                            _settings = obj;
                          }
                          tmp13._settings = _settings;
                          obj = {};
                          ({ name, language } = tmp14);
                          tmp18 = __webpack_require__;
                          if (name in obj) {
                            tmp19 = globalThis;
                            _Object = Object;
                            obj1 = { value: null, enumerable: true, configurable: true, writable: true };
                            obj1.value = language;
                            definePropertyResult = Object.defineProperty(obj, name, obj1);
                          } else {
                            obj[name] = language;
                          }
                          obj = __webpack_require__.applyToDefaults(tmp13._settings.language, obj);
                          tmp13._settings.language = obj;
                        }
                      } else {
                        tmp8 = globalThis;
                        _ReferenceError = ReferenceError;
                        tmp9 = new.target;
                        str2 = "this hasn't been initialised - super() hasn't been called";
                        tmp10 = new.target;
                        referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        tmp12 = referenceError;
                        throw referenceError;
                      }
                    } else {
                      tmp = globalThis;
                      _TypeError = TypeError;
                      tmp2 = new.target;
                      str = "Cannot call a class as a function";
                      tmp3 = new.target;
                      typeError = new TypeError("Cannot call a class as a function");
                      tmp5 = typeError;
                      throw typeError;
                    }
                    return;
                  }
                  _coerce(arg0, arg1, arg2) {
                    self = this;
                    value = arg0;
                    if (closure_2.prototype._coerce) {
                      _coerce = closure_2.prototype._coerce;
                      call = _coerce.call;
                      if (typeof call === "unknown") {
                        iter = _coerce(arg0, arg1, arg2);
                      } else {
                        tmp2 = _coerce;
                        tmp3 = self;
                        tmp4 = arg0;
                        tmp5 = arg1;
                        tmp6 = arg2;
                        iter = call(self, arg0, arg1, arg2);
                      }
                      if (iter.errors) {
                        return iter;
                      } else {
                        value = iter.value;
                      }
                    }
                    coerce = closure_0.coerce;
                    call2 = coerce.call;
                    if (typeof call2 === "unknown") {
                      coerceResult = coerce(value, arg1, arg2);
                    } else {
                      tmp7 = coerce;
                      tmp8 = self;
                      tmp9 = value;
                      tmp10 = arg1;
                      tmp11 = arg2;
                      coerceResult = call2(self, value, arg1, arg2);
                    }
                    if (coerceResult instanceof closure_5.Err) {
                      obj = { value: null, errors: null };
                      obj.value = value;
                      obj.errors = coerceResult;
                    } else {
                      obj = { value: null };
                      obj.value = coerceResult;
                    }
                    return obj;
                  }
                  _base(arg0, arg1, arg2) {
                    self = this;
                    value = arg0;
                    if (closure_2.prototype._base) {
                      _base = closure_2.prototype._base;
                      call = _base.call;
                      if (typeof call === "unknown") {
                        iter = _base(arg0, arg1, arg2);
                      } else {
                        tmp2 = _base;
                        tmp3 = self;
                        tmp4 = arg0;
                        tmp5 = arg1;
                        tmp6 = arg2;
                        iter = call(self, arg0, arg1, arg2);
                      }
                      if (iter.errors) {
                        return iter;
                      } else {
                        value = iter.value;
                      }
                    }
                    pre = closure_0.pre;
                    call2 = pre.call;
                    if (typeof call2 === "unknown") {
                      preResult = pre(value, arg1, arg2);
                    } else {
                      tmp7 = pre;
                      tmp8 = self;
                      tmp9 = value;
                      tmp10 = arg1;
                      tmp11 = arg2;
                      preResult = call2(self, value, arg1, arg2);
                    }
                    if (preResult instanceof closure_5.Err) {
                      obj = { value: null, errors: null };
                      obj.value = value;
                      obj.errors = preResult;
                    } else {
                      obj = { value: null };
                      obj.value = preResult;
                    }
                    return obj;
                  }
                }
                if (0 < tmp6.rules.length) {
                  class type {
                    constructor() {
                      self = this;
                      if (this instanceof closure_1) {
                        tmp6 = closure_0;
                        call = closure_0.call;
                        tmp7 = typeof call === "unknown" ? tmp6() : call(self);
                        if (self) {
                          tmp13 = self;
                          if (tmp7) {
                            if (typeof tmp7 === "object") {
                              tmp13 = tmp7;
                            } else {
                              tmp13 = self;
                            }
                          }
                          tmp14 = closure_0;
                          if (closure_0.base) {
                            tmp15 = closure_1;
                            tmp16 = closure_1;
                            tmp17 = closure_1(tmp13, closure_1);
                          }
                          tmp13._type = tmp14.name;
                          if (!tmp14.language) {
                            return tmp13;
                          } else {
                            _settings = tmp13._settings;
                            if (!_settings) {
                              obj = { language: null };
                              obj.language = {};
                              _settings = obj;
                            }
                            tmp13._settings = _settings;
                            obj = {};
                            ({ name, language } = tmp14);
                            tmp18 = __webpack_require__;
                            if (name in obj) {
                              tmp19 = globalThis;
                              _Object = Object;
                              obj1 = { value: null, enumerable: true, configurable: true, writable: true };
                              obj1.value = language;
                              definePropertyResult = Object.defineProperty(obj, name, obj1);
                            } else {
                              obj[name] = language;
                            }
                            obj = __webpack_require__.applyToDefaults(tmp13._settings.language, obj);
                            tmp13._settings.language = obj;
                          }
                        } else {
                          tmp8 = globalThis;
                          _ReferenceError = ReferenceError;
                          tmp9 = new.target;
                          str2 = "this hasn't been initialised - super() hasn't been called";
                          tmp10 = new.target;
                          referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          tmp12 = referenceError;
                          throw referenceError;
                        }
                      } else {
                        tmp = globalThis;
                        _TypeError = TypeError;
                        tmp2 = new.target;
                        str = "Cannot call a class as a function";
                        tmp3 = new.target;
                        typeError = new TypeError("Cannot call a class as a function");
                        tmp5 = typeError;
                        throw typeError;
                      }
                      return;
                    }
                    _coerce(arg0, arg1, arg2) {
                      self = this;
                      value = arg0;
                      if (closure_2.prototype._coerce) {
                        _coerce = closure_2.prototype._coerce;
                        call = _coerce.call;
                        if (typeof call === "unknown") {
                          iter = _coerce(arg0, arg1, arg2);
                        } else {
                          tmp2 = _coerce;
                          tmp3 = self;
                          tmp4 = arg0;
                          tmp5 = arg1;
                          tmp6 = arg2;
                          iter = call(self, arg0, arg1, arg2);
                        }
                        if (iter.errors) {
                          return iter;
                        } else {
                          value = iter.value;
                        }
                      }
                      coerce = closure_0.coerce;
                      call2 = coerce.call;
                      if (typeof call2 === "unknown") {
                        coerceResult = coerce(value, arg1, arg2);
                      } else {
                        tmp7 = coerce;
                        tmp8 = self;
                        tmp9 = value;
                        tmp10 = arg1;
                        tmp11 = arg2;
                        coerceResult = call2(self, value, arg1, arg2);
                      }
                      if (coerceResult instanceof closure_5.Err) {
                        obj = { value: null, errors: null };
                        obj.value = value;
                        obj.errors = coerceResult;
                      } else {
                        obj = { value: null };
                        obj.value = coerceResult;
                      }
                      return obj;
                    }
                    _base(arg0, arg1, arg2) {
                      self = this;
                      value = arg0;
                      if (closure_2.prototype._base) {
                        _base = closure_2.prototype._base;
                        call = _base.call;
                        if (typeof call === "unknown") {
                          iter = _base(arg0, arg1, arg2);
                        } else {
                          tmp2 = _base;
                          tmp3 = self;
                          tmp4 = arg0;
                          tmp5 = arg1;
                          tmp6 = arg2;
                          iter = call(self, arg0, arg1, arg2);
                        }
                        if (iter.errors) {
                          return iter;
                        } else {
                          value = iter.value;
                        }
                      }
                      pre = closure_0.pre;
                      call2 = pre.call;
                      if (typeof call2 === "unknown") {
                        preResult = pre(value, arg1, arg2);
                      } else {
                        tmp7 = pre;
                        tmp8 = self;
                        tmp9 = value;
                        tmp10 = arg1;
                        tmp11 = arg2;
                        preResult = call2(self, value, arg1, arg2);
                      }
                      if (preResult instanceof closure_5.Err) {
                        obj = { value: null, errors: null };
                        obj.value = value;
                        obj.errors = preResult;
                      } else {
                        obj = { value: null };
                        obj.value = preResult;
                      }
                      return obj;
                    }
                  }
                  closure_0 = tmp15;
                  while (!tmp15.params) {
                    class type {
                      constructor() {
                        self = this;
                        if (this instanceof closure_1) {
                          tmp6 = closure_0;
                          call = closure_0.call;
                          tmp7 = typeof call === "unknown" ? tmp6() : call(self);
                          if (self) {
                            tmp13 = self;
                            if (tmp7) {
                              if (typeof tmp7 === "object") {
                                tmp13 = tmp7;
                              } else {
                                tmp13 = self;
                              }
                            }
                            tmp14 = closure_0;
                            if (closure_0.base) {
                              tmp15 = closure_1;
                              tmp16 = closure_1;
                              tmp17 = closure_1(tmp13, closure_1);
                            }
                            tmp13._type = tmp14.name;
                            if (!tmp14.language) {
                              return tmp13;
                            } else {
                              _settings = tmp13._settings;
                              if (!_settings) {
                                obj = { language: null };
                                obj.language = {};
                                _settings = obj;
                              }
                              tmp13._settings = _settings;
                              obj = {};
                              ({ name, language } = tmp14);
                              tmp18 = __webpack_require__;
                              if (name in obj) {
                                tmp19 = globalThis;
                                _Object = Object;
                                obj1 = { value: null, enumerable: true, configurable: true, writable: true };
                                obj1.value = language;
                                definePropertyResult = Object.defineProperty(obj, name, obj1);
                              } else {
                                obj[name] = language;
                              }
                              obj = __webpack_require__.applyToDefaults(tmp13._settings.language, obj);
                              tmp13._settings.language = obj;
                            }
                          } else {
                            tmp8 = globalThis;
                            _ReferenceError = ReferenceError;
                            tmp9 = new.target;
                            str2 = "this hasn't been initialised - super() hasn't been called";
                            tmp10 = new.target;
                            referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            tmp12 = referenceError;
                            throw referenceError;
                          }
                        } else {
                          tmp = globalThis;
                          _TypeError = TypeError;
                          tmp2 = new.target;
                          str = "Cannot call a class as a function";
                          tmp3 = new.target;
                          typeError = new TypeError("Cannot call a class as a function");
                          tmp5 = typeError;
                          throw typeError;
                        }
                        return;
                      }
                      _coerce(arg0, arg1, arg2) {
                        self = this;
                        value = arg0;
                        if (closure_2.prototype._coerce) {
                          _coerce = closure_2.prototype._coerce;
                          call = _coerce.call;
                          if (typeof call === "unknown") {
                            iter = _coerce(arg0, arg1, arg2);
                          } else {
                            tmp2 = _coerce;
                            tmp3 = self;
                            tmp4 = arg0;
                            tmp5 = arg1;
                            tmp6 = arg2;
                            iter = call(self, arg0, arg1, arg2);
                          }
                          if (iter.errors) {
                            return iter;
                          } else {
                            value = iter.value;
                          }
                        }
                        coerce = closure_0.coerce;
                        call2 = coerce.call;
                        if (typeof call2 === "unknown") {
                          coerceResult = coerce(value, arg1, arg2);
                        } else {
                          tmp7 = coerce;
                          tmp8 = self;
                          tmp9 = value;
                          tmp10 = arg1;
                          tmp11 = arg2;
                          coerceResult = call2(self, value, arg1, arg2);
                        }
                        if (coerceResult instanceof closure_5.Err) {
                          obj = { value: null, errors: null };
                          obj.value = value;
                          obj.errors = coerceResult;
                        } else {
                          obj = { value: null };
                          obj.value = coerceResult;
                        }
                        return obj;
                      }
                      _base(arg0, arg1, arg2) {
                        self = this;
                        value = arg0;
                        if (closure_2.prototype._base) {
                          _base = closure_2.prototype._base;
                          call = _base.call;
                          if (typeof call === "unknown") {
                            iter = _base(arg0, arg1, arg2);
                          } else {
                            tmp2 = _base;
                            tmp3 = self;
                            tmp4 = arg0;
                            tmp5 = arg1;
                            tmp6 = arg2;
                            iter = call(self, arg0, arg1, arg2);
                          }
                          if (iter.errors) {
                            return iter;
                          } else {
                            value = iter.value;
                          }
                        }
                        pre = closure_0.pre;
                        call2 = pre.call;
                        if (typeof call2 === "unknown") {
                          preResult = pre(value, arg1, arg2);
                        } else {
                          tmp7 = pre;
                          tmp8 = self;
                          tmp9 = value;
                          tmp10 = arg1;
                          tmp11 = arg2;
                          preResult = call2(self, value, arg1, arg2);
                        }
                        if (preResult instanceof closure_5.Err) {
                          obj = { value: null, errors: null };
                          obj.value = value;
                          obj.errors = preResult;
                        } else {
                          obj = { value: null };
                          obj.value = preResult;
                        }
                        return obj;
                      }
                    }
                    let schemaResult = null;
                    if (tmp15.params) {
                      class type {
                        constructor() {
                          self = this;
                          if (this instanceof closure_1) {
                            tmp6 = closure_0;
                            call = closure_0.call;
                            tmp7 = typeof call === "unknown" ? tmp6() : call(self);
                            if (self) {
                              tmp13 = self;
                              if (tmp7) {
                                if (typeof tmp7 === "object") {
                                  tmp13 = tmp7;
                                } else {
                                  tmp13 = self;
                                }
                              }
                              tmp14 = closure_0;
                              if (closure_0.base) {
                                tmp15 = closure_1;
                                tmp16 = closure_1;
                                tmp17 = closure_1(tmp13, closure_1);
                              }
                              tmp13._type = tmp14.name;
                              if (!tmp14.language) {
                                return tmp13;
                              } else {
                                _settings = tmp13._settings;
                                if (!_settings) {
                                  obj = { language: null };
                                  obj.language = {};
                                  _settings = obj;
                                }
                                tmp13._settings = _settings;
                                obj = {};
                                ({ name, language } = tmp14);
                                tmp18 = __webpack_require__;
                                if (name in obj) {
                                  tmp19 = globalThis;
                                  _Object = Object;
                                  obj1 = { value: null, enumerable: true, configurable: true, writable: true };
                                  obj1.value = language;
                                  definePropertyResult = Object.defineProperty(obj, name, obj1);
                                } else {
                                  obj[name] = language;
                                }
                                obj = __webpack_require__.applyToDefaults(tmp13._settings.language, obj);
                                tmp13._settings.language = obj;
                              }
                            } else {
                              tmp8 = globalThis;
                              _ReferenceError = ReferenceError;
                              tmp9 = new.target;
                              str2 = "this hasn't been initialised - super() hasn't been called";
                              tmp10 = new.target;
                              referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                              tmp12 = referenceError;
                              throw referenceError;
                            }
                          } else {
                            tmp = globalThis;
                            _TypeError = TypeError;
                            tmp2 = new.target;
                            str = "Cannot call a class as a function";
                            tmp3 = new.target;
                            typeError = new TypeError("Cannot call a class as a function");
                            tmp5 = typeError;
                            throw typeError;
                          }
                          return;
                        }
                        _coerce(arg0, arg1, arg2) {
                          self = this;
                          value = arg0;
                          if (closure_2.prototype._coerce) {
                            _coerce = closure_2.prototype._coerce;
                            call = _coerce.call;
                            if (typeof call === "unknown") {
                              iter = _coerce(arg0, arg1, arg2);
                            } else {
                              tmp2 = _coerce;
                              tmp3 = self;
                              tmp4 = arg0;
                              tmp5 = arg1;
                              tmp6 = arg2;
                              iter = call(self, arg0, arg1, arg2);
                            }
                            if (iter.errors) {
                              return iter;
                            } else {
                              value = iter.value;
                            }
                          }
                          coerce = closure_0.coerce;
                          call2 = coerce.call;
                          if (typeof call2 === "unknown") {
                            coerceResult = coerce(value, arg1, arg2);
                          } else {
                            tmp7 = coerce;
                            tmp8 = self;
                            tmp9 = value;
                            tmp10 = arg1;
                            tmp11 = arg2;
                            coerceResult = call2(self, value, arg1, arg2);
                          }
                          if (coerceResult instanceof closure_5.Err) {
                            obj = { value: null, errors: null };
                            obj.value = value;
                            obj.errors = coerceResult;
                          } else {
                            obj = { value: null };
                            obj.value = coerceResult;
                          }
                          return obj;
                        }
                        _base(arg0, arg1, arg2) {
                          self = this;
                          value = arg0;
                          if (closure_2.prototype._base) {
                            _base = closure_2.prototype._base;
                            call = _base.call;
                            if (typeof call === "unknown") {
                              iter = _base(arg0, arg1, arg2);
                            } else {
                              tmp2 = _base;
                              tmp3 = self;
                              tmp4 = arg0;
                              tmp5 = arg1;
                              tmp6 = arg2;
                              iter = call(self, arg0, arg1, arg2);
                            }
                            if (iter.errors) {
                              return iter;
                            } else {
                              value = iter.value;
                            }
                          }
                          pre = closure_0.pre;
                          call2 = pre.call;
                          if (typeof call2 === "unknown") {
                            preResult = pre(value, arg1, arg2);
                          } else {
                            tmp7 = pre;
                            tmp8 = self;
                            tmp9 = value;
                            tmp10 = arg1;
                            tmp11 = arg2;
                            preResult = call2(self, value, arg1, arg2);
                          }
                          if (preResult instanceof closure_5.Err) {
                            obj = { value: null, errors: null };
                            obj.value = value;
                            obj.errors = preResult;
                          } else {
                            obj = { value: null };
                            obj.value = preResult;
                          }
                          return obj;
                        }
                      }
                      schemaResult = closure_4.schema(tmp15.params);
                    }
                    constructor = schemaResult;
                    type.prototype[tmp15.name] = function() {
                      if (arguments.length > type.length) {
                        const _Error = Error;
                        const error = new Error("Unexpected number of arguments");
                        throw error;
                      } else {
                        const _Array = Array;
                        const call2 = slice.call;
                        if (typeof call2 === "unknown") {
                          let substr = slice();
                        } else {
                          substr = call2(arguments);
                        }
                        obj = {};
                        let num = 0;
                        let flag = false;
                        let flag2 = false;
                        if (0 < arr.length) {
                          do {
                            obj[type[num]] = substr[num];
                            let isRefResult = !flag;
                            let flag3 = flag;
                            if (!flag) {
                              isRefResult = closure_2_7.isRef(substr[num]);
                            }
                            if (isRefResult) {
                              flag3 = true;
                            }
                            num = num + 1;
                            flag = flag3;
                            flag2 = flag3;
                          } while (num < type.length);
                        }
                        if (constructor) {
                          closure_0.assert(obj, tmp6);
                        }
                        let self = this;
                        if (obj.validate) {
                          obj = { description: tmp9.description, hasRef: flag2 };
                          let _testResult = self._test(tmp9.name, obj, function validate() { ... }, obj);
                        } else {
                          _testResult = self.clone();
                        }
                        if (obj.setup) {
                          const setup = tmp9.setup;
                          let call = setup.call;
                          if (typeof call === "unknown") {
                            setup(obj);
                          } else {
                            call(_testResult, obj);
                          }
                        }
                        return _testResult;
                      }
                    };
                    sum = sum + 1;
                    if (sum < tmp6.rules.length) {
                      class type {
                        constructor() {
                          self = this;
                          if (this instanceof closure_1) {
                            tmp6 = closure_0;
                            call = closure_0.call;
                            tmp7 = typeof call === "unknown" ? tmp6() : call(self);
                            if (self) {
                              tmp13 = self;
                              if (tmp7) {
                                if (typeof tmp7 === "object") {
                                  tmp13 = tmp7;
                                } else {
                                  tmp13 = self;
                                }
                              }
                              tmp14 = closure_0;
                              if (closure_0.base) {
                                tmp15 = closure_1;
                                tmp16 = closure_1;
                                tmp17 = closure_1(tmp13, closure_1);
                              }
                              tmp13._type = tmp14.name;
                              if (!tmp14.language) {
                                return tmp13;
                              } else {
                                _settings = tmp13._settings;
                                if (!_settings) {
                                  obj = { language: null };
                                  obj.language = {};
                                  _settings = obj;
                                }
                                tmp13._settings = _settings;
                                obj = {};
                                ({ name, language } = tmp14);
                                tmp18 = __webpack_require__;
                                if (name in obj) {
                                  tmp19 = globalThis;
                                  _Object = Object;
                                  obj1 = { value: null, enumerable: true, configurable: true, writable: true };
                                  obj1.value = language;
                                  definePropertyResult = Object.defineProperty(obj, name, obj1);
                                } else {
                                  obj[name] = language;
                                }
                                obj = __webpack_require__.applyToDefaults(tmp13._settings.language, obj);
                                tmp13._settings.language = obj;
                              }
                            } else {
                              tmp8 = globalThis;
                              _ReferenceError = ReferenceError;
                              tmp9 = new.target;
                              str2 = "this hasn't been initialised - super() hasn't been called";
                              tmp10 = new.target;
                              referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                              tmp12 = referenceError;
                              throw referenceError;
                            }
                          } else {
                            tmp = globalThis;
                            _TypeError = TypeError;
                            tmp2 = new.target;
                            str = "Cannot call a class as a function";
                            tmp3 = new.target;
                            typeError = new TypeError("Cannot call a class as a function");
                            tmp5 = typeError;
                            throw typeError;
                          }
                          return;
                        }
                        _coerce(arg0, arg1, arg2) {
                          self = this;
                          value = arg0;
                          if (closure_2.prototype._coerce) {
                            _coerce = closure_2.prototype._coerce;
                            call = _coerce.call;
                            if (typeof call === "unknown") {
                              iter = _coerce(arg0, arg1, arg2);
                            } else {
                              tmp2 = _coerce;
                              tmp3 = self;
                              tmp4 = arg0;
                              tmp5 = arg1;
                              tmp6 = arg2;
                              iter = call(self, arg0, arg1, arg2);
                            }
                            if (iter.errors) {
                              return iter;
                            } else {
                              value = iter.value;
                            }
                          }
                          coerce = closure_0.coerce;
                          call2 = coerce.call;
                          if (typeof call2 === "unknown") {
                            coerceResult = coerce(value, arg1, arg2);
                          } else {
                            tmp7 = coerce;
                            tmp8 = self;
                            tmp9 = value;
                            tmp10 = arg1;
                            tmp11 = arg2;
                            coerceResult = call2(self, value, arg1, arg2);
                          }
                          if (coerceResult instanceof closure_5.Err) {
                            obj = { value: null, errors: null };
                            obj.value = value;
                            obj.errors = coerceResult;
                          } else {
                            obj = { value: null };
                            obj.value = coerceResult;
                          }
                          return obj;
                        }
                        _base(arg0, arg1, arg2) {
                          self = this;
                          value = arg0;
                          if (closure_2.prototype._base) {
                            _base = closure_2.prototype._base;
                            call = _base.call;
                            if (typeof call === "unknown") {
                              iter = _base(arg0, arg1, arg2);
                            } else {
                              tmp2 = _base;
                              tmp3 = self;
                              tmp4 = arg0;
                              tmp5 = arg1;
                              tmp6 = arg2;
                              iter = call(self, arg0, arg1, arg2);
                            }
                            if (iter.errors) {
                              return iter;
                            } else {
                              value = iter.value;
                            }
                          }
                          pre = closure_0.pre;
                          call2 = pre.call;
                          if (typeof call2 === "unknown") {
                            preResult = pre(value, arg1, arg2);
                          } else {
                            tmp7 = pre;
                            tmp8 = self;
                            tmp9 = value;
                            tmp10 = arg1;
                            tmp11 = arg2;
                            preResult = call2(self, value, arg1, arg2);
                          }
                          if (preResult instanceof closure_5.Err) {
                            obj = { value: null, errors: null };
                            obj.value = value;
                            obj.errors = preResult;
                          } else {
                            obj = { value: null };
                            obj.value = preResult;
                          }
                          return obj;
                        }
                      }
                    }
                    continue;
                  }
                  if (tmp15.params instanceof closure_3) {
                    class type {
                      constructor() {
                        self = this;
                        if (this instanceof closure_1) {
                          tmp6 = closure_0;
                          call = closure_0.call;
                          tmp7 = typeof call === "unknown" ? tmp6() : call(self);
                          if (self) {
                            tmp13 = self;
                            if (tmp7) {
                              if (typeof tmp7 === "object") {
                                tmp13 = tmp7;
                              } else {
                                tmp13 = self;
                              }
                            }
                            tmp14 = closure_0;
                            if (closure_0.base) {
                              tmp15 = closure_1;
                              tmp16 = closure_1;
                              tmp17 = closure_1(tmp13, closure_1);
                            }
                            tmp13._type = tmp14.name;
                            if (!tmp14.language) {
                              return tmp13;
                            } else {
                              _settings = tmp13._settings;
                              if (!_settings) {
                                obj = { language: null };
                                obj.language = {};
                                _settings = obj;
                              }
                              tmp13._settings = _settings;
                              obj = {};
                              ({ name, language } = tmp14);
                              tmp18 = __webpack_require__;
                              if (name in obj) {
                                tmp19 = globalThis;
                                _Object = Object;
                                obj1 = { value: null, enumerable: true, configurable: true, writable: true };
                                obj1.value = language;
                                definePropertyResult = Object.defineProperty(obj, name, obj1);
                              } else {
                                obj[name] = language;
                              }
                              obj = __webpack_require__.applyToDefaults(tmp13._settings.language, obj);
                              tmp13._settings.language = obj;
                            }
                          } else {
                            tmp8 = globalThis;
                            _ReferenceError = ReferenceError;
                            tmp9 = new.target;
                            str2 = "this hasn't been initialised - super() hasn't been called";
                            tmp10 = new.target;
                            referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            tmp12 = referenceError;
                            throw referenceError;
                          }
                        } else {
                          tmp = globalThis;
                          _TypeError = TypeError;
                          tmp2 = new.target;
                          str = "Cannot call a class as a function";
                          tmp3 = new.target;
                          typeError = new TypeError("Cannot call a class as a function");
                          tmp5 = typeError;
                          throw typeError;
                        }
                        return;
                      }
                      _coerce(arg0, arg1, arg2) {
                        self = this;
                        value = arg0;
                        if (closure_2.prototype._coerce) {
                          _coerce = closure_2.prototype._coerce;
                          call = _coerce.call;
                          if (typeof call === "unknown") {
                            iter = _coerce(arg0, arg1, arg2);
                          } else {
                            tmp2 = _coerce;
                            tmp3 = self;
                            tmp4 = arg0;
                            tmp5 = arg1;
                            tmp6 = arg2;
                            iter = call(self, arg0, arg1, arg2);
                          }
                          if (iter.errors) {
                            return iter;
                          } else {
                            value = iter.value;
                          }
                        }
                        coerce = closure_0.coerce;
                        call2 = coerce.call;
                        if (typeof call2 === "unknown") {
                          coerceResult = coerce(value, arg1, arg2);
                        } else {
                          tmp7 = coerce;
                          tmp8 = self;
                          tmp9 = value;
                          tmp10 = arg1;
                          tmp11 = arg2;
                          coerceResult = call2(self, value, arg1, arg2);
                        }
                        if (coerceResult instanceof closure_5.Err) {
                          obj = { value: null, errors: null };
                          obj.value = value;
                          obj.errors = coerceResult;
                        } else {
                          obj = { value: null };
                          obj.value = coerceResult;
                        }
                        return obj;
                      }
                      _base(arg0, arg1, arg2) {
                        self = this;
                        value = arg0;
                        if (closure_2.prototype._base) {
                          _base = closure_2.prototype._base;
                          call = _base.call;
                          if (typeof call === "unknown") {
                            iter = _base(arg0, arg1, arg2);
                          } else {
                            tmp2 = _base;
                            tmp3 = self;
                            tmp4 = arg0;
                            tmp5 = arg1;
                            tmp6 = arg2;
                            iter = call(self, arg0, arg1, arg2);
                          }
                          if (iter.errors) {
                            return iter;
                          } else {
                            value = iter.value;
                          }
                        }
                        pre = closure_0.pre;
                        call2 = pre.call;
                        if (typeof call2 === "unknown") {
                          preResult = pre(value, arg1, arg2);
                        } else {
                          tmp7 = pre;
                          tmp8 = self;
                          tmp9 = value;
                          tmp10 = arg1;
                          tmp11 = arg2;
                          preResult = call2(self, value, arg1, arg2);
                        }
                        if (preResult instanceof closure_5.Err) {
                          obj = { value: null, errors: null };
                          obj.value = value;
                          obj.errors = preResult;
                        } else {
                          obj = { value: null };
                          obj.value = preResult;
                        }
                        return obj;
                      }
                    }
                    let mapped = arr3.map((key) => key.key);
                  } else {
                    class type {
                      constructor() {
                        self = this;
                        if (this instanceof closure_1) {
                          tmp6 = closure_0;
                          call = closure_0.call;
                          tmp7 = typeof call === "unknown" ? tmp6() : call(self);
                          if (self) {
                            tmp13 = self;
                            if (tmp7) {
                              if (typeof tmp7 === "object") {
                                tmp13 = tmp7;
                              } else {
                                tmp13 = self;
                              }
                            }
                            tmp14 = closure_0;
                            if (closure_0.base) {
                              tmp15 = closure_1;
                              tmp16 = closure_1;
                              tmp17 = closure_1(tmp13, closure_1);
                            }
                            tmp13._type = tmp14.name;
                            if (!tmp14.language) {
                              return tmp13;
                            } else {
                              _settings = tmp13._settings;
                              if (!_settings) {
                                obj = { language: null };
                                obj.language = {};
                                _settings = obj;
                              }
                              tmp13._settings = _settings;
                              obj = {};
                              ({ name, language } = tmp14);
                              tmp18 = __webpack_require__;
                              if (name in obj) {
                                tmp19 = globalThis;
                                _Object = Object;
                                obj1 = { value: null, enumerable: true, configurable: true, writable: true };
                                obj1.value = language;
                                definePropertyResult = Object.defineProperty(obj, name, obj1);
                              } else {
                                obj[name] = language;
                              }
                              obj = __webpack_require__.applyToDefaults(tmp13._settings.language, obj);
                              tmp13._settings.language = obj;
                            }
                          } else {
                            tmp8 = globalThis;
                            _ReferenceError = ReferenceError;
                            tmp9 = new.target;
                            str2 = "this hasn't been initialised - super() hasn't been called";
                            tmp10 = new.target;
                            referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            tmp12 = referenceError;
                            throw referenceError;
                          }
                        } else {
                          tmp = globalThis;
                          _TypeError = TypeError;
                          tmp2 = new.target;
                          str = "Cannot call a class as a function";
                          tmp3 = new.target;
                          typeError = new TypeError("Cannot call a class as a function");
                          tmp5 = typeError;
                          throw typeError;
                        }
                        return;
                      }
                      _coerce(arg0, arg1, arg2) {
                        self = this;
                        value = arg0;
                        if (closure_2.prototype._coerce) {
                          _coerce = closure_2.prototype._coerce;
                          call = _coerce.call;
                          if (typeof call === "unknown") {
                            iter = _coerce(arg0, arg1, arg2);
                          } else {
                            tmp2 = _coerce;
                            tmp3 = self;
                            tmp4 = arg0;
                            tmp5 = arg1;
                            tmp6 = arg2;
                            iter = call(self, arg0, arg1, arg2);
                          }
                          if (iter.errors) {
                            return iter;
                          } else {
                            value = iter.value;
                          }
                        }
                        coerce = closure_0.coerce;
                        call2 = coerce.call;
                        if (typeof call2 === "unknown") {
                          coerceResult = coerce(value, arg1, arg2);
                        } else {
                          tmp7 = coerce;
                          tmp8 = self;
                          tmp9 = value;
                          tmp10 = arg1;
                          tmp11 = arg2;
                          coerceResult = call2(self, value, arg1, arg2);
                        }
                        if (coerceResult instanceof closure_5.Err) {
                          obj = { value: null, errors: null };
                          obj.value = value;
                          obj.errors = coerceResult;
                        } else {
                          obj = { value: null };
                          obj.value = coerceResult;
                        }
                        return obj;
                      }
                      _base(arg0, arg1, arg2) {
                        self = this;
                        value = arg0;
                        if (closure_2.prototype._base) {
                          _base = closure_2.prototype._base;
                          call = _base.call;
                          if (typeof call === "unknown") {
                            iter = _base(arg0, arg1, arg2);
                          } else {
                            tmp2 = _base;
                            tmp3 = self;
                            tmp4 = arg0;
                            tmp5 = arg1;
                            tmp6 = arg2;
                            iter = call(self, arg0, arg1, arg2);
                          }
                          if (iter.errors) {
                            return iter;
                          } else {
                            value = iter.value;
                          }
                        }
                        pre = closure_0.pre;
                        call2 = pre.call;
                        if (typeof call2 === "unknown") {
                          preResult = pre(value, arg1, arg2);
                        } else {
                          tmp7 = pre;
                          tmp8 = self;
                          tmp9 = value;
                          tmp10 = arg1;
                          tmp11 = arg2;
                          preResult = call2(self, value, arg1, arg2);
                        }
                        if (preResult instanceof closure_5.Err) {
                          obj = { value: null, errors: null };
                          obj.value = value;
                          obj.errors = preResult;
                        } else {
                          obj = { value: null };
                          obj.value = preResult;
                        }
                        return obj;
                      }
                    }
                    mapped = Object.keys(tmp15.params);
                  }
                }
              }
              if (tmp6.describe) {
                class type {
                  constructor() {
                    self = this;
                    if (this instanceof closure_1) {
                      tmp6 = closure_0;
                      call = closure_0.call;
                      tmp7 = typeof call === "unknown" ? tmp6() : call(self);
                      if (self) {
                        tmp13 = self;
                        if (tmp7) {
                          if (typeof tmp7 === "object") {
                            tmp13 = tmp7;
                          } else {
                            tmp13 = self;
                          }
                        }
                        tmp14 = closure_0;
                        if (closure_0.base) {
                          tmp15 = closure_1;
                          tmp16 = closure_1;
                          tmp17 = closure_1(tmp13, closure_1);
                        }
                        tmp13._type = tmp14.name;
                        if (!tmp14.language) {
                          return tmp13;
                        } else {
                          _settings = tmp13._settings;
                          if (!_settings) {
                            obj = { language: null };
                            obj.language = {};
                            _settings = obj;
                          }
                          tmp13._settings = _settings;
                          obj = {};
                          ({ name, language } = tmp14);
                          tmp18 = __webpack_require__;
                          if (name in obj) {
                            tmp19 = globalThis;
                            _Object = Object;
                            obj1 = { value: null, enumerable: true, configurable: true, writable: true };
                            obj1.value = language;
                            definePropertyResult = Object.defineProperty(obj, name, obj1);
                          } else {
                            obj[name] = language;
                          }
                          obj = __webpack_require__.applyToDefaults(tmp13._settings.language, obj);
                          tmp13._settings.language = obj;
                        }
                      } else {
                        tmp8 = globalThis;
                        _ReferenceError = ReferenceError;
                        tmp9 = new.target;
                        str2 = "this hasn't been initialised - super() hasn't been called";
                        tmp10 = new.target;
                        referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        tmp12 = referenceError;
                        throw referenceError;
                      }
                    } else {
                      tmp = globalThis;
                      _TypeError = TypeError;
                      tmp2 = new.target;
                      str = "Cannot call a class as a function";
                      tmp3 = new.target;
                      typeError = new TypeError("Cannot call a class as a function");
                      tmp5 = typeError;
                      throw typeError;
                    }
                    return;
                  }
                  _coerce(arg0, arg1, arg2) {
                    self = this;
                    value = arg0;
                    if (closure_2.prototype._coerce) {
                      _coerce = closure_2.prototype._coerce;
                      call = _coerce.call;
                      if (typeof call === "unknown") {
                        iter = _coerce(arg0, arg1, arg2);
                      } else {
                        tmp2 = _coerce;
                        tmp3 = self;
                        tmp4 = arg0;
                        tmp5 = arg1;
                        tmp6 = arg2;
                        iter = call(self, arg0, arg1, arg2);
                      }
                      if (iter.errors) {
                        return iter;
                      } else {
                        value = iter.value;
                      }
                    }
                    coerce = closure_0.coerce;
                    call2 = coerce.call;
                    if (typeof call2 === "unknown") {
                      coerceResult = coerce(value, arg1, arg2);
                    } else {
                      tmp7 = coerce;
                      tmp8 = self;
                      tmp9 = value;
                      tmp10 = arg1;
                      tmp11 = arg2;
                      coerceResult = call2(self, value, arg1, arg2);
                    }
                    if (coerceResult instanceof closure_5.Err) {
                      obj = { value: null, errors: null };
                      obj.value = value;
                      obj.errors = coerceResult;
                    } else {
                      obj = { value: null };
                      obj.value = coerceResult;
                    }
                    return obj;
                  }
                  _base(arg0, arg1, arg2) {
                    self = this;
                    value = arg0;
                    if (closure_2.prototype._base) {
                      _base = closure_2.prototype._base;
                      call = _base.call;
                      if (typeof call === "unknown") {
                        iter = _base(arg0, arg1, arg2);
                      } else {
                        tmp2 = _base;
                        tmp3 = self;
                        tmp4 = arg0;
                        tmp5 = arg1;
                        tmp6 = arg2;
                        iter = call(self, arg0, arg1, arg2);
                      }
                      if (iter.errors) {
                        return iter;
                      } else {
                        value = iter.value;
                      }
                    }
                    pre = closure_0.pre;
                    call2 = pre.call;
                    if (typeof call2 === "unknown") {
                      preResult = pre(value, arg1, arg2);
                    } else {
                      tmp7 = pre;
                      tmp8 = self;
                      tmp9 = value;
                      tmp10 = arg1;
                      tmp11 = arg2;
                      preResult = call2(self, value, arg1, arg2);
                    }
                    if (preResult instanceof closure_5.Err) {
                      obj = { value: null, errors: null };
                      obj.value = value;
                      obj.errors = preResult;
                    } else {
                      obj = { value: null };
                      obj.value = preResult;
                    }
                    return obj;
                  }
                  describe() {
                    self = this;
                    describe = closure_2.prototype.describe;
                    call = describe.call;
                    tmp = typeof call === "unknown" ? describe() : call(self);
                    describe2 = closure_0.describe;
                    call2 = describe2.call;
                    return typeof call2 === "unknown" ? describe2(tmp) : call2(self, tmp);
                  }
                }
              }
              let typeResult = type();
              closure_3 = typeResult;
              obj[tmp6.name] = () => typeResult;
              num = num + 1;
              if (num < flattenResult.length) {
                class type {
                  constructor() {
                    self = this;
                    if (this instanceof closure_1) {
                      tmp6 = closure_0;
                      call = closure_0.call;
                      tmp7 = typeof call === "unknown" ? tmp6() : call(self);
                      if (self) {
                        tmp13 = self;
                        if (tmp7) {
                          if (typeof tmp7 === "object") {
                            tmp13 = tmp7;
                          } else {
                            tmp13 = self;
                          }
                        }
                        tmp14 = closure_0;
                        if (closure_0.base) {
                          tmp15 = closure_1;
                          tmp16 = closure_1;
                          tmp17 = closure_1(tmp13, closure_1);
                        }
                        tmp13._type = tmp14.name;
                        if (!tmp14.language) {
                          return tmp13;
                        } else {
                          _settings = tmp13._settings;
                          if (!_settings) {
                            obj = { language: null };
                            obj.language = {};
                            _settings = obj;
                          }
                          tmp13._settings = _settings;
                          obj = {};
                          ({ name, language } = tmp14);
                          tmp18 = __webpack_require__;
                          if (name in obj) {
                            tmp19 = globalThis;
                            _Object = Object;
                            obj1 = { value: null, enumerable: true, configurable: true, writable: true };
                            obj1.value = language;
                            definePropertyResult = Object.defineProperty(obj, name, obj1);
                          } else {
                            obj[name] = language;
                          }
                          obj = __webpack_require__.applyToDefaults(tmp13._settings.language, obj);
                          tmp13._settings.language = obj;
                        }
                      } else {
                        tmp8 = globalThis;
                        _ReferenceError = ReferenceError;
                        tmp9 = new.target;
                        str2 = "this hasn't been initialised - super() hasn't been called";
                        tmp10 = new.target;
                        referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        tmp12 = referenceError;
                        throw referenceError;
                      }
                    } else {
                      tmp = globalThis;
                      _TypeError = TypeError;
                      tmp2 = new.target;
                      str = "Cannot call a class as a function";
                      tmp3 = new.target;
                      typeError = new TypeError("Cannot call a class as a function");
                      tmp5 = typeError;
                      throw typeError;
                    }
                    return;
                  }
                  _coerce(arg0, arg1, arg2) {
                    self = this;
                    value = arg0;
                    if (closure_2.prototype._coerce) {
                      _coerce = closure_2.prototype._coerce;
                      call = _coerce.call;
                      if (typeof call === "unknown") {
                        iter = _coerce(arg0, arg1, arg2);
                      } else {
                        tmp2 = _coerce;
                        tmp3 = self;
                        tmp4 = arg0;
                        tmp5 = arg1;
                        tmp6 = arg2;
                        iter = call(self, arg0, arg1, arg2);
                      }
                      if (iter.errors) {
                        return iter;
                      } else {
                        value = iter.value;
                      }
                    }
                    coerce = closure_0.coerce;
                    call2 = coerce.call;
                    if (typeof call2 === "unknown") {
                      coerceResult = coerce(value, arg1, arg2);
                    } else {
                      tmp7 = coerce;
                      tmp8 = self;
                      tmp9 = value;
                      tmp10 = arg1;
                      tmp11 = arg2;
                      coerceResult = call2(self, value, arg1, arg2);
                    }
                    if (coerceResult instanceof closure_5.Err) {
                      obj = { value: null, errors: null };
                      obj.value = value;
                      obj.errors = coerceResult;
                    } else {
                      obj = { value: null };
                      obj.value = coerceResult;
                    }
                    return obj;
                  }
                  _base(arg0, arg1, arg2) {
                    self = this;
                    value = arg0;
                    if (closure_2.prototype._base) {
                      _base = closure_2.prototype._base;
                      call = _base.call;
                      if (typeof call === "unknown") {
                        iter = _base(arg0, arg1, arg2);
                      } else {
                        tmp2 = _base;
                        tmp3 = self;
                        tmp4 = arg0;
                        tmp5 = arg1;
                        tmp6 = arg2;
                        iter = call(self, arg0, arg1, arg2);
                      }
                      if (iter.errors) {
                        return iter;
                      } else {
                        value = iter.value;
                      }
                    }
                    pre = closure_0.pre;
                    call2 = pre.call;
                    if (typeof call2 === "unknown") {
                      preResult = pre(value, arg1, arg2);
                    } else {
                      tmp7 = pre;
                      tmp8 = self;
                      tmp9 = value;
                      tmp10 = arg1;
                      tmp11 = arg2;
                      preResult = call2(self, value, arg1, arg2);
                    }
                    if (preResult instanceof closure_5.Err) {
                      obj = { value: null, errors: null };
                      obj.value = value;
                      obj.errors = preResult;
                    } else {
                      obj = { value: null };
                      obj.value = preResult;
                    }
                    return obj;
                  }
                  describe() {
                    self = this;
                    describe = closure_2.prototype.describe;
                    call = describe.call;
                    tmp = typeof call === "unknown" ? describe() : call(self);
                    describe2 = closure_0.describe;
                    call2 = describe2.call;
                    return typeof call2 === "unknown" ? describe2(tmp) : call2(self, tmp);
                  }
                }
              }
            }
          }
          return obj;
        };
        ({ array, object } = obj);
        obj = { base: null, name: null, coerce: null, pre: null, language: null, describe: null, rules: null };
        object = obj.object;
        obj.base = object.type(closure_3, "Joi object");
        const string = obj.string;
        obj.name = string.required();
        object = obj.object;
        obj.coerce = object._func().arity(3);
        const object1 = obj.object;
        const _funcResult = object._func();
        obj.pre = object1._func().arity(3);
        ({ object: obj2.language, object: object5 } = obj);
        const _funcResult1 = object1._func();
        obj.describe = object4._func().arity(1);
        ({ array: array2, object: object6 } = obj);
        obj = { name: null, setup: null, validate: null, params: null, description: null };
        const string2 = obj.string;
        obj.name = string2.required();
        const object2 = obj.object;
        const _funcResult2 = object4._func();
        obj.setup = object2._func().arity(1);
        const object3 = obj.object;
        const _funcResult3 = object2._func();
        obj.validate = object3._func().arity(4);
        ({ object: object9, object: object10 } = obj);
        items = [object9.pattern(/.*/, object10.type(closure_3, "Joi object")), ];
        object4 = obj.object;
        items[1] = object4.type(obj.object.constructor, "Joi object");
        obj.params = items;
        const items1 = [, ];
        ({ string: arr2[0], object: object12 } = obj);
        const _funcResult4 = object3._func();
        items1[1] = object12._func().arity(1);
        obj.description = items1;
        let keys = object6.keys(obj);
        obj.rules = array2.items(keys.or("setup", "validate"));
        const _funcResult5 = object12._func();
        cloneResult.extensionsSchema = array.items(object.keys(obj)).strict();
        cloneResult.version = obj(35).version;
        return cloneResult;
      };
      module.exports = obj.root();
    },
    (arg0, arg1, fn) => {
      closure_0 = arg1;
      closure_1 = fn;
      fn = (_Buffer, arg1) => {
        closure_1 = arg1;
        if (typeof Symbol === "function") {
          let _Symbol = Symbol;
          if (typeof Symbol.iterator === "symbol") {
            fn = (arg0) => typeof arg0;
          }
          closure_3 = closure_1(8);
          closure_4 = closure_1(9);
          closure_5 = closure_1(13);
          let separator = {};
          _Buffer.clone = (getTime, arg1) => {
            let str = "undefined";
            if (undefined !== getTime) {
              str = fn(getTime);
            }
            if ("object" === str) {
              if (null !== getTime) {
                let map = arg1;
                if (!arg1) {
                  const _Map = Map;
                  map = new Map();
                }
                value = map.get(getTime);
                if (value) {
                  return value;
                } else {
                  const _Array = Array;
                  if (Array.isArray(getTime)) {
                    items = [];
                    let flag = true;
                  } else if (_Buffer.isBuffer(getTime)) {
                    items = new _Buffer(getTime);
                    flag = false;
                  } else {
                    const _Date = Date;
                    if (getTime instanceof Date) {
                      const _Date2 = Date;
                      items = new Date(getTime.getTime());
                      flag = false;
                    } else {
                      const _RegExp = RegExp;
                      if (getTime instanceof RegExp) {
                        const _RegExp2 = RegExp;
                        items = new RegExp(getTime);
                        flag = false;
                      } else {
                        const _Object = Object;
                        const prototypeOf = Object.getPrototypeOf(getTime);
                        if (!prototypeOf) {
                          const _Object2 = Object;
                          items = Object.create(prototypeOf);
                          flag = true;
                        } else {
                          flag = false;
                          items = getTime;
                        }
                      }
                    }
                  }
                  const result = map.set(getTime, items);
                  if (flag) {
                    const _Object3 = Object;
                    const ownPropertyNames = Object.getOwnPropertyNames(getTime);
                    for (let num = 0; num < ownPropertyNames.length; num = num + 1) {
                      let tmp19 = ownPropertyNames[num];
                      let _Object4 = Object;
                      let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(getTime, tmp19);
                      if (!ownPropertyDescriptor) {
                        items[tmp19] = _Buffer.clone(getTime[tmp19], map);
                      } else {
                        let _Object5 = Object;
                        let definePropertyResult = Object.defineProperty(items, tmp19, ownPropertyDescriptor);
                      }
                    }
                  }
                  return items;
                }
              }
            }
            return getTime;
          };
          _Buffer.merge = (arr, D, arg2, arg3) => {
            let length;
            let tmp = arr;
            if (arr) {
              let str = "undefined";
              if (undefined !== arr) {
                str = fn(arr);
              }
              tmp = "object" === str;
            }
            _Buffer.assert(tmp, "Invalid target value: must be an object");
            let tmp4 = null == D;
            if (!tmp4) {
              let str3 = "undefined";
              if (undefined !== D) {
                str3 = fn(D);
              }
              tmp4 = "object" === str3;
            }
            _Buffer.assert(tmp4, "Invalid source value: must be null, undefined, or an object");
            if (D) {
              const _Array = Array;
              if (Array.isArray(D)) {
                const _Array4 = Array;
                _Buffer.assert(Array.isArray(arr), "Cannot merge array onto an object");
                if (false === arg3) {
                  arr.length = 0;
                }
                let num4 = 0;
                if (0 < D.length) {
                  do {
                    arr = arr.push(_Buffer.clone(D[num4]));
                    num4 = num4 + 1;
                    length = D.length;
                  } while (num4 < length);
                }
                return arr;
              } else {
                const _Object = Object;
                const keys = Object.keys(D);
                let num = 0;
                if (0 < keys.length) {
                  while (true) {
                    let tmp10 = keys[num];
                    let tmp11 = D[tmp10];
                    if (tmp11) {
                      let str7 = "undefined";
                      if (undefined !== tmp11) {
                        str7 = fn(tmp11);
                      }
                      if ("object" === str7) {
                        if (arr[tmp10]) {
                          if ("object" === fn(arr[tmp10])) {
                            let _Array2 = Array;
                            let _Array3 = Array;
                            let isArray = Array.isArray(arr[tmp10]);
                            if (isArray === Array.isArray(tmp11)) {
                              let _Date = Date;
                              if (!(tmp11 instanceof Date)) {
                                if (!_Buffer.isBuffer(tmp11)) {
                                  let _RegExp = RegExp;
                                  if (!(tmp11 instanceof RegExp)) {
                                    let mergeResult = _Buffer.merge(arr[tmp10], tmp11, arg2, arg3);
                                  }
                                  num = num + 1;
                                  if (num >= keys.length) {
                                    break;
                                  }
                                }
                              }
                            }
                          }
                        }
                        arr[tmp10] = _Buffer.clone(tmp11);
                      }
                    }
                    let tmp14 = null != tmp11 || tmp9;
                    if (tmp14) {
                      arr[tmp10] = tmp11;
                    }
                  }
                }
                return arr;
              }
            } else {
              return arr;
            }
          };
          _Buffer.applyToDefaults = (D, D, arg2) => {
            let tmp = D;
            if (D) {
              let str = "undefined";
              if (undefined !== D) {
                str = fn(D);
              }
              tmp = "object" === str;
            }
            _Buffer.assert(tmp, "Invalid defaults value: must be an object");
            let tmp4 = !D;
            if (D) {
              tmp4 = true === D;
            }
            if (!tmp4) {
              let str3 = "undefined";
              if (undefined !== D) {
                str3 = fn(D);
              }
              tmp4 = "object" === str3;
            }
            _Buffer.assert(tmp4, "Invalid options value: must be true, falsy or an object");
            if (D) {
              const cloneResult = _Buffer.clone(D);
              let mergeResult = cloneResult;
              if (true !== D) {
                mergeResult = _Buffer.merge(cloneResult, D, true === arg2, false);
              }
              return mergeResult;
            } else {
              return null;
            }
          };
          _Buffer.cloneWithShallow = (D, arg1) => {
            if (D) {
              let str = "undefined";
              if (undefined !== D) {
                str = fn(D);
              }
              if ("object" === str) {
                const cloneResult = _Buffer.clone(D);
                obj.restore(cloneResult, D, obj.store(D, arg1));
                return cloneResult;
              }
            }
            return D;
          };
          separator.store = (arg0, arg1) => {
            obj = {};
            for (let num = 0; num < arg1.length; num = num + 1) {
              let tmp = arg1[num];
              let reachResult = _Buffer.reach(arg0, tmp);
              if (undefined !== reachResult) {
                obj[tmp] = reachResult;
                let reachSetResult = obj.reachSet(arg0, tmp, undefined);
              }
            }
            return obj;
          };
          separator.restore = (arg0, arg1, arg2) => {
            let length;
            const keys = Object.keys(arg2);
            let num = 0;
            if (0 < keys.length) {
              do {
                let tmp = keys[num];
                let reachSetResult = obj.reachSet(arg0, tmp, arg2[tmp]);
                let reachSetResult1 = obj.reachSet(arg1, tmp, arg2[tmp]);
                num = num + 1;
                length = keys.length;
              } while (num < length);
            }
          };
          separator.reachSet = (arg0, str, arg2) => {
            let sum;
            let tmp = arg0;
            const parts = str.split(".");
            let num = 0;
            if (0 < parts.length) {
              do {
                let tmp2 = parts[num];
                sum = num + 1;
                if (sum === parts.length) {
                  tmp[tmp2] = arg2;
                }
                tmp = tmp[tmp2];
                num = sum;
              } while (sum < parts.length);
            }
          };
          _Buffer.applyToDefaultsWithShallow = (D, D, arg2) => {
            let tmp = D;
            if (D) {
              let str = "undefined";
              if (undefined !== D) {
                str = fn(D);
              }
              tmp = "object" === str;
            }
            _Buffer.assert(tmp, "Invalid defaults value: must be an object");
            let tmp4 = !D;
            if (D) {
              tmp4 = true === D;
            }
            if (!tmp4) {
              let str3 = "undefined";
              if (undefined !== D) {
                str3 = fn(D);
              }
              tmp4 = "object" === str3;
            }
            _Buffer.assert(tmp4, "Invalid options value: must be true, falsy or an object");
            let isArray = arg2;
            if (arg2) {
              const _Array = Array;
              isArray = Array.isArray(arg2);
            }
            _Buffer.assert(isArray, "Invalid keys");
            if (D) {
              const cloneWithShallowResult = _Buffer.cloneWithShallow(D, arg2);
              if (true === D) {
                return cloneWithShallowResult;
              } else {
                _Buffer.merge(cloneWithShallowResult, D, false, false);
                _Buffer.restore(cloneWithShallowResult, D, _Buffer.store(D, arg2));
                return cloneWithShallowResult;
              }
            } else {
              return null;
            }
          };
          _Buffer.deepEqual = (getTime, getTime2, arg2, arg3) => {
            obj = arg2;
            if (!arg2) {
              obj = { prototype: true };
            }
            let str = "undefined";
            let str2 = "undefined";
            if (undefined !== getTime) {
              str2 = fn(getTime);
            }
            if (undefined !== getTime2) {
              str = fn(getTime2);
            }
            if (str2 !== str) {
              return false;
            } else {
              if ("object" === str2) {
                if (null !== getTime) {
                  if (null !== getTime2) {
                    items = arg3;
                    if (!arg3) {
                      items = [];
                    }
                    if (-1 !== items.indexOf(getTime)) {
                      return true;
                    } else {
                      items.push(getTime);
                      const _Array2 = Array;
                      if (Array.isArray(getTime)) {
                        const _Array = Array;
                        if (Array.isArray(getTime2)) {
                          if (!obj.part) {
                            if (getTime.length !== getTime2.length) {
                              return false;
                            }
                          }
                          let num8 = 0;
                          if (0 < getTime.length) {
                            while (!obj.part) {
                              if (_Buffer.deepEqual(getTime[num8], getTime2[num8], obj)) {
                                num8 = num8 + 1;
                              } else {
                                let flag12 = false;
                                return false;
                              }
                            }
                            let num9 = 0;
                            let flag14 = false;
                            if (0 < getTime2.length) {
                              flag14 = true;
                              while (!_Buffer.deepEqual(getTime[num8], getTime2[num9], obj)) {
                                let sum = num9 + 1;
                                num9 = sum;
                                flag14 = false;
                                if (sum >= getTime2.length) {
                                  break;
                                }
                              }
                            }
                            return flag14;
                          }
                          return true;
                        } else {
                          return false;
                        }
                      } else if (_Buffer.isBuffer(getTime)) {
                        if (_Buffer.isBuffer(getTime2)) {
                          if (getTime.length !== getTime2.length) {
                            return false;
                          } else {
                            let num4 = 0;
                            if (0 < getTime.length) {
                              while (getTime[num4] === getTime2[num4]) {
                                num4 = num4 + 1;
                              }
                              return false;
                            }
                            return true;
                          }
                        } else {
                          return false;
                        }
                      } else {
                        const _Date = Date;
                        if (getTime instanceof Date) {
                          const _Date2 = Date;
                          let tmp18 = getTime2 instanceof Date;
                          if (tmp18) {
                            const time = getTime.getTime();
                            tmp18 = time === getTime2.getTime();
                          }
                          return tmp18;
                        } else {
                          const _RegExp = RegExp;
                          if (getTime instanceof RegExp) {
                            const _RegExp2 = RegExp;
                            let tmp16 = getTime2 instanceof RegExp;
                            if (tmp16) {
                              str = getTime.toString();
                              tmp16 = str === getTime2.toString();
                            }
                            return tmp16;
                          } else {
                            if (obj.prototype) {
                              const _Object = Object;
                              const _Object2 = Object;
                              const prototypeOf = Object.getPrototypeOf(getTime);
                              if (prototypeOf !== Object.getPrototypeOf(getTime2)) {
                                return false;
                              }
                            }
                            const _Object3 = Object;
                            const ownPropertyNames = Object.getOwnPropertyNames(getTime);
                            if (!obj.part) {
                              const _Object4 = Object;
                              if (ownPropertyNames.length !== Object.getOwnPropertyNames(getTime2).length) {
                                return false;
                              }
                            }
                            let num2 = 0;
                            if (0 < ownPropertyNames.length) {
                              while (true) {
                                let tmp5 = ownPropertyNames[num2];
                                let _Object5 = Object;
                                let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(getTime, tmp5);
                                let deepEqual = _Buffer.deepEqual;
                                if (ownPropertyDescriptor.get) {
                                  let _Object6 = Object;
                                  if (!deepEqual(ownPropertyDescriptor, Object.getOwnPropertyDescriptor(getTime2, tmp5), obj, tmp3)) {
                                    let flag3 = false;
                                    return false;
                                  }
                                } else if (!deepEqual(getTime[tmp5], getTime2[tmp5], obj, tmp3)) {
                                  break;
                                }
                                num2 = num2 + 1;
                              }
                              return false;
                            }
                            return true;
                          }
                        }
                      }
                    }
                  }
                }
              }
              if (getTime === getTime2) {
                let tmp27 = 0 !== getTime;
                if (!tmp27) {
                  tmp27 = 1 / getTime === 1 / getTime2;
                }
                let tmp26 = tmp27;
              } else {
                tmp26 = getTime != getTime && getTime2 != getTime2;
              }
              return tmp26;
            }
          };
          _Buffer.unique = (arr, arg1) => {
            let set = arg1;
            if (arg1) {
              items = [];
              arr = items;
              const _Set2 = Set;
              set = new Set();
              const item = arr.forEach((item) => {
                if (!set.has(item[closure_0])) {
                  set.add(tmp);
                  closure_1.push(item);
                }
              });
              arr = items;
            } else {
              const _Array = Array;
              const _Set = Set;
              const set1 = new Set(arr);
              arr = Array.from(set1);
            }
            return arr;
          };
          _Buffer.mapToObject = (arg0, arg1) => {
            if (arg0) {
              obj = {};
              for (let num = 0; num < arg0.length; num = num + 1) {
                let tmp2 = arg0[num];
                if (arg1) {
                  if (tmp2[arg1]) {
                    obj[arg0[num][arg1]] = true;
                  }
                } else {
                  obj[tmp2] = true;
                }
              }
              return obj;
            } else {
              return null;
            }
          };
          _Buffer.intersect = (arg0, arg1, arg2) => {
            if (arg0) {
              if (arg1) {
                const _Array = Array;
                let mapToObjectResult = arg0;
                if (Array.isArray(arg0)) {
                  mapToObjectResult = _Buffer.mapToObject(arg0);
                }
                items = [];
                obj = {};
                let num = 0;
                if (0 < arg1.length) {
                  while (true) {
                    if (mapToObjectResult[arg1[num]]) {
                      if (!obj[arg1[num]]) {
                        if (arg2) {
                          break;
                        } else {
                          let arr = items.push(arg1[num]);
                          obj[arg1[num]] = true;
                        }
                      }
                    }
                    num = num + 1;
                  }
                  return arg1[num];
                }
                let tmp8 = null;
                if (!arg2) {
                  tmp8 = items;
                }
                return tmp8;
              }
            }
            return [];
          };
          _Buffer.contain = (D, D, arg2) => {
            let length;
            let combined = D;
            let str = "undefined";
            let str2 = "undefined";
            if (undefined !== D) {
              str2 = fn(D);
            }
            if ("object" === str2) {
              let tmp3 = str;
              if (undefined !== D) {
                tmp3 = fn(D);
              }
              if ("object" === tmp3) {
                const _Array = Array;
                if (!Array.isArray(D)) {
                  const _Array2 = Array;
                  if (!Array.isArray(D)) {
                    const _Object = Object;
                    const keys = Object.keys(D);
                    combined = keys;
                    let tmp7 = D;
                    let arr = keys;
                  }
                  obj = arg2;
                  if (!arg2) {
                    obj = {};
                  }
                  _Buffer.assert(arguments.length >= 2, "Insufficient arguments");
                  let tmp10 = typeof D === "string";
                  if (typeof D !== "string") {
                    if (!tmp) {
                      str = fn(D);
                    }
                    tmp10 = "object" === str;
                  }
                  _Buffer.assert(tmp10, "Reference must be string or an object");
                  _Buffer.assert(arr.length, "Values array cannot be empty");
                  if (obj.deep) {
                    const hasOwnPropertyResult = obj.hasOwnProperty("only");
                    const hasOwnPropertyResult1 = obj.hasOwnProperty("part");
                    if (hasOwnPropertyResult) {
                      let only = obj.only;
                    } else {
                      only = hasOwnPropertyResult1 && !obj.part;
                    }
                    obj = { prototype: only, part: null };
                    if (hasOwnPropertyResult) {
                      let part = !obj.only;
                    } else {
                      part = !hasOwnPropertyResult1;
                      if (hasOwnPropertyResult1) {
                        part = obj.part;
                      }
                    }
                    obj.part = part;
                    const deepEqual = _Buffer.deepEqual;
                  } else {
                    function compare(arr, D) {
                      return arr === D;
                    }
                    const _Array3 = Array;
                    const array = new Array(arr.length);
                    let num4 = 0;
                    if (0 < array.length) {
                      do {
                        array[num4] = 0;
                        num4 = num4 + 1;
                        length = array.length;
                      } while (num4 < length);
                    }
                    if (typeof D === "string") {
                      let str8 = "(";
                      let num9 = 0;
                      let str12 = "(";
                      if (0 < arr.length) {
                        do {
                          let tmp30 = arr[num9];
                          let assertResult3 = _Buffer.assert(typeof tmp30 === "string", "Cannot compare string reference to non-string value");
                          let str13 = "";
                          if (num9) {
                            str13 = "|";
                          }
                          str8 = str8 + (str13 + _Buffer.escapeRegex(tmp30));
                          num9 = num9 + 1;
                          str12 = str8;
                        } while (num9 < arr.length);
                      }
                      const _RegExp = RegExp;
                      const regExp = new RegExp(str12 + ")", "g");
                      let flag3 = D.replace(regExp, (arg0, arg1) => {
                        const index = combined.indexOf(arg1);
                        array[index] = array[index] + 1;
                        return "";
                      });
                    } else {
                      const _Array4 = Array;
                      if (Array.isArray(D)) {
                        let num7 = 0;
                        let flag6 = false;
                        flag3 = false;
                        if (0 < D.length) {
                          do {
                            let num8 = 0;
                            let flag7 = false;
                            if (0 < arr.length) {
                              while (true) {
                                let compareResult = compare(arr[num8], D[num7], undefined);
                                if (compareResult) {
                                  compareResult = num8;
                                }
                                let sum = num8 + 1;
                                flag7 = compareResult;
                                if (sum >= arr.length) {
                                  break;
                                } else {
                                  num8 = sum;
                                  flag7 = compareResult;
                                  if (false !== compareResult) {
                                    break;
                                  }
                                }
                              }
                            }
                            let flag8 = true;
                            if (false !== flag7) {
                              array[flag7] = array[flag7] + 1;
                              flag8 = flag6;
                            }
                            num7 = num7 + 1;
                            flag6 = flag8;
                            flag3 = flag8;
                          } while (num7 < D.length);
                        }
                      } else {
                        const _Object2 = Object;
                        const ownPropertyNames = Object.getOwnPropertyNames(D);
                        let num6 = 0;
                        let flag2 = false;
                        flag3 = false;
                        if (0 < ownPropertyNames.length) {
                          while (true) {
                            let tmp21 = ownPropertyNames[num6];
                            let index = arr.indexOf(tmp21);
                            let flag4 = true;
                            if (-1 !== index) {
                              if (tmp7) {
                                if (!compare(tmp7[tmp21], D[tmp21], undefined)) {
                                  break;
                                }
                              }
                              array[index] = array[index] + 1;
                              flag4 = flag2;
                            }
                            num6 = num6 + 1;
                            flag2 = flag4;
                            flag3 = flag4;
                          }
                          return false;
                        }
                      }
                    }
                    let num10 = 0;
                    let flag10 = false;
                    let flag11 = false;
                    if (0 < array.length) {
                      while (true) {
                        let tmp39 = flag10;
                        if (!flag10) {
                          tmp39 = array[num10];
                        }
                        if (!obj.once) {
                          if (obj.part) {
                            num10 = num10 + 1;
                            flag10 = tmp39;
                            flag11 = tmp39;
                          } else if (!array[num10]) {
                            break;
                          }
                          break;
                        } else if (array[num10] > 1) {
                          break;
                        }
                        return false;
                      }
                    }
                    const only2 = obj.only;
                    let tmp40 = !only2;
                    if (only2) {
                      tmp40 = !flag3;
                    }
                    if (tmp40) {
                      tmp40 = flag11;
                    }
                    return tmp40;
                  }
                }
              }
            }
            items = [];
            combined = items.concat(D);
            tmp7 = null;
            arr = combined;
          };
          _Buffer.flatten = (arg0, arg1) => {
            items = arg1;
            if (!arg1) {
              items = [];
            }
            for (let num = 0; num < arg0.length; num = num + 1) {
              let _Array = Array;
              if (Array.isArray(arg0[num])) {
                let flattenResult = _Buffer.flatten(arg0[num], items);
              } else {
                let arr = items.push(arg0[num]);
              }
            }
            return items;
          };
          _Buffer.reach = (D, str, arg2) => {
            if (false !== str) {
              if (null != str) {
                separator = arg2;
                if (!arg2) {
                  separator = {};
                }
                let tmp = separator;
                if (typeof separator === "string") {
                  separator = { separator: null };
                  separator.separator = separator;
                  tmp = separator;
                }
                str = tmp.separator;
                if (!str) {
                  str = ".";
                }
                const parts = str.split(str);
                let num = 0;
                let str3 = "undefined";
                let arr2 = D;
                let _default = D;
                if (0 < parts.length) {
                  while (true) {
                    let arr3 = parts[num];
                    let isArray = "-" === arr3[0];
                    if (isArray) {
                      let _Array = Array;
                      isArray = Array.isArray(arr2);
                    }
                    let diff = arr3;
                    if (isArray) {
                      diff = arr2.length - arr3.slice(1, arr3.length);
                    }
                    if (!arr2) {
                      break;
                    } else {
                      let tmp7 = undefined === arr2;
                      let tmp8 = str3;
                      if (!tmp7) {
                        tmp8 = fn(arr2);
                      }
                      if ("object" === tmp8) {
                        if (!(diff in arr2)) {
                          break;
                        } else {
                          let tmp10 = str3;
                          if (!tmp7) {
                            tmp10 = fn(arr2);
                          }
                          if ("object" === tmp10) {
                            arr2 = arr2[diff];
                            num = num + 1;
                            _default = arr2;
                          } else if (false === tmp.functions) {
                            break;
                          }
                          break;
                        }
                      } else if (typeof arr2 !== "function") {
                        break;
                      }
                      let strict = tmp.strict;
                      let tmp12 = !strict;
                      if (strict) {
                        tmp12 = num + 1 === parts.length;
                      }
                      let str5 = "in reach path ";
                      let str6 = "Missing segment";
                      let str7 = "in reach path ";
                      let assertResult = _Buffer.assert(tmp12, "Missing segment", diff, "in reach path ", str);
                      if (undefined !== arr2) {
                        str3 = fn(arr2);
                      }
                      let tmp19 = "object" === str3;
                      if (!tmp19) {
                        let flag = true;
                        tmp19 = true === tmp.functions;
                      }
                      if (!tmp19) {
                        tmp19 = typeof arr2 !== "function";
                      }
                      let str8 = "Invalid segment";
                      let str9 = "in reach path ";
                      let assertResult1 = _Buffer.assert(tmp19, "Invalid segment", diff, "in reach path ", str);
                      _default = tmp.default;
                    }
                  }
                }
                return _default;
              }
            }
            return D;
          };
          _Buffer.reachTemplate = (arg0, str, arg2) => {
            closure_0 = arg0;
            closure_1 = arg2;
            return str.replace(/{([^}]+)}/g, (arg0, arg1) => {
              const reachResult = closure_0.reach(closure_0, arg1, closure_1);
              let str = "";
              if (null != reachResult) {
                str = reachResult;
              }
              return str;
            });
          };
          _Buffer.formatStack = (arg0) => {
            let length;
            items = [];
            let num = 0;
            if (0 < arg0.length) {
              do {
                obj = arg0[num];
                let items1 = [obj.getFileName(), obj.getLineNumber(), obj.getColumnNumber(), obj.getFunctionName(), obj.isConstructor()];
                let arr = items.push(items1);
                num = num + 1;
                length = arg0.length;
              } while (num < length);
            }
            return items;
          };
          _Buffer.formatTrace = (arg0) => {
            items = [];
            for (let num = 0; num < arg0.length; num = num + 1) {
              let tmp = arg0[num];
              let str = "";
              if (tmp[4]) {
                str = "new ";
              }
              let arr = items.push(`${str}${tmp[3]} (${tmp[0]}:${tmp[1]}:${tmp[2]})`);
            }
            return items;
          };
          _Buffer.callStack = function(arg0) {
            Error.prepareStackTrace = (arg0, arg1) => arg1;
            obj = {};
            Error.captureStackTrace(obj, this);
            Error.prepareStackTrace = Error.prepareStackTrace;
            return _Buffer.formatStack(obj.stack).slice(1 + arg0);
          };
          _Buffer.displayStack = (arg0) => {
            let num = 1;
            if (undefined !== arg0) {
              num = arg0 + 1;
            }
            return _Buffer.formatTrace(_Buffer.callStack(num));
          };
          _Buffer.abortThrow = false;
          _Buffer.abort = (arg0, arg1) => {
            let str = arg0;
            if ("test" !== closure_1.env.NODE_ENV) {
              if (true !== _Buffer.abortThrow) {
                let str2 = "";
                if (!arg1) {
                  str2 = _Buffer.displayStack(1).join("\n\t");
                  const displayStackResult = _Buffer.displayStack(1);
                }
                const _console = console;
                console.log(`ABORT: ${str}
            	${str2}`);
                closure_1.exit(1);
              }
            }
            if (!str) {
              str = "Unknown error";
            }
            const error = new Error(str);
            throw error;
          };
          _Buffer.assert = (arg0) => {
            if (!arg0) {
              if (2 === arguments.length) {
                let _Error = Error;
                if (arguments[1] instanceof Error) {
                  throw arguments[1];
                }
              }
              items = [];
              for (let num4 = 1; num4 < arguments.length; num4 = num4 + 1) {
                if ("" !== arguments[num4]) {
                  let arr = items.push(arguments[num4]);
                }
              }
              const mapped = items.map((message) => {
                if (typeof message === "string") {
                  return message;
                } else {
                  const _Error = Error;
                  if (message instanceof Error) {
                    message = message.message;
                  } else {
                    message = _Buffer.stringify(message);
                  }
                }
              });
              const tmp5 = mapped.join(" ") || "Unknown error";
              const error = new Error(tmp5);
              throw error;
            }
          };
          _Buffer.Timer = function() {
            this.ts = 0;
            this.reset();
          };
          _Buffer.Timer.prototype.reset = function() {
            this.ts = Date.now();
          };
          _Buffer.Timer.prototype.elapsed = function() {
            return Date.now() - this.ts;
          };
          _Buffer.Bench = function() {
            this.ts = 0;
            this.reset();
          };
          _Buffer.Bench.prototype.reset = function() {
            const Bench = _Buffer.Bench;
            this.ts = Bench.now();
          };
          _Buffer.Bench.prototype.elapsed = function() {
            const Bench = _Buffer.Bench;
            return Bench.now() - this.ts;
          };
          _Buffer.Bench.now = () => {
            const hrtimeResult = closure_1.hrtime();
            return 1000 * hrtimeResult[0] + hrtimeResult[1] / 1000000;
          };
          _Buffer.escapeRegex = (str) => str.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, "\\$&");
          _Buffer.base64urlEncode = (str, arg1) => {
            let isBufferResult = typeof str === "string";
            if (typeof str !== "string") {
              isBufferResult = _Buffer.isBuffer(str);
            }
            _Buffer.assert(isBufferResult, "value must be string or buffer");
            if (!_Buffer.isBuffer(str)) {
              let str2 = arg1;
              if (!arg1) {
                str2 = "binary";
              }
              str = new _Buffer(str, str2);
            }
            const str3 = str.toString("base64");
            const str4 = str.toString("base64").replace(/\+/g, "-");
            return str.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
          };
          _Buffer.base64urlDecode = (str, arg1) => {
            if (typeof str !== "string") {
              const _Error2 = Error;
              const error = new Error("Value not a string");
              return error;
            } else {
              if (obj.test(str)) {
                let str2 = arg1;
                const str4 = new closure_0(str, "base64");
                str = str4;
                if ("buffer" !== arg1) {
                  if (!str2) {
                    str2 = "binary";
                  }
                  str = str4.toString(str2);
                }
                return str;
              } else {
                const _Error = Error;
                str = "Invalid character";
                const error1 = new Error("Invalid character");
                return error1;
              }
              obj = /^[\w\-]*$/;
            }
          };
          _Buffer.escapeHeaderAttribute = (str) => {
            _Buffer.assert(/^[ \w\!#\$%&'\(\)\*\+,\-\.\/\:;<\=>\?@\[\]\^`\{\|\}~\"\\]*$/.test(str), `Bad attribute value (${str})`);
            str = str.replace(/\\/g, "\\\\");
            return str.replace(/\"/g, "\\\"");
          };
          _Buffer.escapeHtml = (arg0) => closure_5.escapeHtml(arg0);
          _Buffer.escapeJavaScript = (arg0) => closure_5.escapeJavaScript(arg0);
          _Buffer.nextTick = (arg0) => {
            closure_0 = arg0;
            return () => {
              closure_0 = arguments;
              closure_1_1.nextTick(() => { ... });
            };
          };
          _Buffer.once = (_hoekOnce) => {
            closure_0 = _hoekOnce;
            if (_hoekOnce._hoekOnce) {
              return _hoekOnce;
            } else {
              c1 = false;
              function wrapped() {
                if (!c1) {
                  c1 = true;
                  const apply = closure_0.apply;
                  if (typeof apply === "unknown") {
                    HermesBuiltin.applyArguments(null);
                  } else {
                    apply(null, arguments);
                  }
                }
              }
              wrapped._hoekOnce = true;
              return wrapped;
            }
          };
          _Buffer.isInteger = (match) => {
            let tmp = typeof match === "number";
            if (typeof match === "number") {
              const _parseFloat = parseFloat;
              const _parseInt = parseInt;
              const parsed = parseFloat(match);
              tmp = parsed === parseInt(match, 10);
            }
            if (tmp) {
              const _isNaN = isNaN;
              tmp = !isNaN(match);
            }
            return tmp;
          };
          _Buffer.ignore = () => {

          };
          ({ inherits: closure_0.inherits, format: closure_0.format } = closure_1(10));
          _Buffer.transform = (D, arg1, separator) => {
            let length;
            let isArray = null == D;
            if (!isArray) {
              let str = "undefined";
              if (undefined !== D) {
                str = fn(D);
              }
              isArray = "object" === str;
            }
            if (!isArray) {
              const _Array = Array;
              isArray = Array.isArray(D);
            }
            _Buffer.assert(isArray, "Invalid source object: must be null, undefined, an object, or an array");
            let str3 = "undefined";
            if (undefined !== separator) {
              str3 = fn(separator);
            }
            if (Array.isArray(D)) {
              items = [];
              let num3 = 0;
              if (0 < D.length) {
                do {
                  let arr = items.push(_Buffer.transform(D[num3], arg1, separator));
                  num3 = num3 + 1;
                  length = D.length;
                } while (num3 < length);
              }
              return items;
            } else {
              obj = {};
              const _Object = Object;
              const keys = Object.keys(arg1);
              for (let num = 0; num < keys.length; num = num + 1) {
                let str5 = keys[num];
                let parts = str5.split(tmp7);
                let tmp8 = arg1[str5];
                let assertResult1 = _Buffer.assert(typeof tmp8 === "string", "All mappings must be \".\" delineated strings");
                let tmp12 = obj;
                let tmp13 = obj;
                if (parts.length > 1) {
                  do {
                    arr = parts.shift();
                    if (!tmp12[arr]) {
                      tmp12[arr] = {};
                    }
                    tmp12 = tmp12[arr];
                    tmp13 = tmp12;
                  } while (parts.length > 1);
                }
                let arr1 = parts.shift();
                tmp13[arr1] = _Buffer.reach(D, tmp8, separator);
              }
              return obj;
            }
            tmp7 = "object" === str3 && null !== separator && separator.separator || ".";
          };
          _Buffer.uniqueFilename = (arg0, arg1) => {
            let str = "";
            if (arg1) {
              let text = arg1;
              if ("." !== arg1[0]) {
                text = `.${arg1}`;
              }
              str = text;
            }
            items = [Date.now(), closure_1.pid, ];
            const resolveResult = closure_4.resolve(arg0);
            items[2] = closure_3.randomBytes(8).toString("hex");
            return closure_4.join(resolveResult, items.join("-") + str);
          };
          _Buffer.stringify = () => {
            try {
              const _JSON = JSON;
              const apply = stringify.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(null);
              } else {
                applyArgumentsResult = apply(null, arguments);
              }
              return applyArgumentsResult;
            } catch (tmp5) {
              return "[Cannot display object: " + tmp5.message + "]";
            }
          };
          _Buffer.shallow = (arg0) => {
            let length;
            obj = {};
            const keys = Object.keys(arg0);
            let num = 0;
            if (0 < keys.length) {
              do {
                let tmp = keys[num];
                obj[tmp] = arg0[tmp];
                num = num + 1;
                length = keys.length;
              } while (num < length);
            }
            return obj;
          };
        }
        fn = (arg0) => {
          if (arg0) {
            const _Symbol = Symbol;
            if (typeof Symbol === "function") {
              const _Symbol3 = Symbol;
              if (arg0.constructor === Symbol) {
                const _Symbol2 = Symbol;
                let str = "symbol";
              }
              return str;
            }
          }
          str = typeof arg0;
        };
      };
      const call = fn.call;
      const _Buffer = fn(3).Buffer;
      let tmp = fn(7);
      if (typeof call === "unknown") {
        fn(_Buffer, tmp);
      } else {
        call(arg1, _Buffer, tmp);
      }
    },
    (arg0, arg1, arg2) => {
      constants = arg1;
      closure_1 = arg2;
      const fn = (TYPED_ARRAY_SUPPORT) => {
        function createBuffer(arg0, num) {
          num = 1073741823;
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            num = 2147483647;
          }
          if (num < num) {
            const _RangeError = RangeError;
            const rangeError = new RangeError("Invalid typed array length");
            throw rangeError;
          } else {
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              const _Uint8Array = Uint8Array;
              const uint8Array = new Uint8Array(num);
              uint8Array.__proto__ = Buffer.prototype;
              let tmp2 = uint8Array;
            } else {
              tmp2 = arg0;
              if (null !== arg0) {
                tmp2.length = num;
              } else {
                obj = Object.create(Buffer.prototype);
                if (!Buffer.TYPED_ARRAY_SUPPORT) {
                  if (!(obj instanceof Buffer)) {
                    obj = Object.create(Buffer.prototype);
                    if (!Buffer.TYPED_ARRAY_SUPPORT) {
                      if (!(obj instanceof Buffer)) {
                        let tmpResult = Buffer(num, undefined, undefined);
                      }
                    }
                    if (typeof num === "number") {
                      if (typeof undefined !== "string") {
                        tmpResult = allocUnsafe(obj, num);
                      }
                    } else {
                      tmpResult = from(obj, num, undefined, undefined);
                    }
                  }
                  const _Error = Error;
                  const error = new Error("If encoding is specified then the first argument must be a string");
                  throw error;
                }
                if (typeof num === "number") {
                  if (typeof undefined === "string") {
                    const _Error2 = Error;
                    const error1 = new Error("If encoding is specified then the first argument must be a string");
                    throw error1;
                  } else {
                    let tmp6 = allocUnsafe(obj, num);
                  }
                } else {
                  tmp6 = from(obj, num, undefined, undefined);
                }
              }
            }
            return tmp2;
          }
        }
        class Buffer {
          constructor(arg0, arg1, arg2) {
            self = this;
            tmp = Buffer;
            if (!Buffer.TYPED_ARRAY_SUPPORT) {
              if (!(self instanceof tmp)) {
                tmpResult = tmp(TYPED_ARRAY_SUPPORT, arg1, arg2);
                tmp3 = tmpResult;
                return tmpResult;
              }
            }
            if (typeof TYPED_ARRAY_SUPPORT === "number") {
              if (typeof arg1 === "string") {
                tmp4 = globalThis;
                _Error = Error;
                tmp5 = new.target;
                str = "If encoding is specified then the first argument must be a string";
                tmp6 = new.target;
                error = new Error("If encoding is specified then the first argument must be a string");
                tmp8 = error;
                throw error;
              } else {
                tmp14 = allocUnsafe;
                num2 = 0;
                return allocUnsafe(self, TYPED_ARRAY_SUPPORT);
              }
            } else {
              tmp9 = from;
              num = 0;
              tmp10 = self;
              tmp11 = TYPED_ARRAY_SUPPORT;
              tmp12 = arg1;
              tmp13 = arg2;
              return from(self, TYPED_ARRAY_SUPPORT, arg1, arg2);
            }
          }
          static _augment(arg0) {
            TYPED_ARRAY_SUPPORT.__proto__ = Buffer.prototype;
            return TYPED_ARRAY_SUPPORT;
          }
          static from(arg0, arg1, arg2) {
            return from(null, TYPED_ARRAY_SUPPORT, arg1, arg2);
          }
          static alloc(arg0, arg1, arg2) {
            if (typeof TYPED_ARRAY_SUPPORT !== "number") {
              tmp17 = globalThis;
              _TypeError = TypeError;
              tmp18 = new.target;
              str2 = "\"size\" argument must be a number";
              tmp19 = new.target;
              typeError = new TypeError("\"size\" argument must be a number");
              tmp21 = typeError;
              throw typeError;
            } else {
              num = 0;
              if (TYPED_ARRAY_SUPPORT < 0) {
                tmp12 = globalThis;
                _RangeError = RangeError;
                tmp13 = new.target;
                str = "\"size\" argument must not be negative";
                tmp14 = new.target;
                rangeError = new RangeError("\"size\" argument must not be negative");
                tmp16 = rangeError;
                throw rangeError;
              } else {
                if (TYPED_ARRAY_SUPPORT <= 0) {
                  tmp10 = createBuffer;
                  tmp11 = null;
                  tmp4 = createBuffer(null, TYPED_ARRAY_SUPPORT);
                } else {
                  tmp = arg1;
                  if (undefined !== arg1) {
                    tmp5 = arg2;
                    if (typeof arg2 === "string") {
                      tmp6 = createBuffer;
                      tmp7 = null;
                      obj = createBuffer(null, TYPED_ARRAY_SUPPORT);
                      fillResult = obj.fill(arg1, arg2);
                    } else {
                      tmp22 = createBuffer;
                      tmp23 = null;
                      obj2 = createBuffer(null, TYPED_ARRAY_SUPPORT);
                      fillResult = obj2.fill(arg1);
                    }
                    tmp9 = fillResult;
                  } else {
                    tmp2 = createBuffer;
                    tmp3 = null;
                    tmp4 = createBuffer(null, TYPED_ARRAY_SUPPORT);
                  }
                }
                return tmp4;
              }
            }
          }
          static allocUnsafe(arg0) {
            return allocUnsafe(null, TYPED_ARRAY_SUPPORT);
          }
          static allocUnsafeSlow(arg0) {
            return allocUnsafe(null, TYPED_ARRAY_SUPPORT);
          }
          static isBuffer(arg0) {
            tmp = null == TYPED_ARRAY_SUPPORT || !TYPED_ARRAY_SUPPORT._isBuffer;
            return !tmp;
          }
          static compare(arg0, arg1) {
            obj = Buffer;
            if (Buffer.isBuffer(TYPED_ARRAY_SUPPORT)) {
              tmp = arg1;
              if (obj.isBuffer(arg1)) {
                if (TYPED_ARRAY_SUPPORT === arg1) {
                  num6 = 0;
                  return 0;
                } else {
                  length = TYPED_ARRAY_SUPPORT.length;
                  length2 = arg1.length;
                  tmp3 = globalThis;
                  _Math = Math;
                  bound = Math.min(length, length2);
                  num = 0;
                  num2 = 1;
                  num3 = 0;
                  tmp5 = length2;
                  tmp6 = length;
                  if (0 < bound) {
                    tmp7 = num3;
                    while (TYPED_ARRAY_SUPPORT[num3] === arg1[num3]) {
                      num3 = num3 + 1;
                      tmp5 = length2;
                      tmp6 = length;
                    }
                    tmp6 = TYPED_ARRAY_SUPPORT[num3];
                    tmp5 = arg1[num3];
                  }
                  num4 = -1;
                  if (tmp6 >= tmp5) {
                    num5 = 0;
                    if (tmp5 < tmp6) {
                      num5 = 1;
                    }
                    num4 = num5;
                  }
                  return num4;
                }
              }
            }
            typeError = new TypeError("Arguments must be Buffers");
            throw typeError;
          }
          static isEncoding(arg0) {
            str = String(TYPED_ARRAY_SUPPORT);
            switch (str.toLowerCase()) {
              case "hex":
                flag = true;
                return true;
              case "utf8":
                flag = true;
                return true;
              case "utf-8":
                flag = true;
                return true;
              case "ascii":
                flag = true;
                return true;
              case "latin1":
                flag = true;
                return true;
              case "binary":
                flag = true;
                return true;
              case "base64":
                flag = true;
                return true;
              case "ucs2":
                flag = true;
                return true;
              case "ucs-2":
                flag = true;
                return true;
              case "utf16le":
                flag = true;
                return true;
              case "utf-16le":
                flag = true;
                return true;
              default:
                flag2 = false;
                return false;
            }
            return;
          }
          static concat(arg0, arg1) {
            if (closure_2(TYPED_ARRAY_SUPPORT)) {
              num = 0;
              if (0 === TYPED_ARRAY_SUPPORT.length) {
                tmp17 = Buffer;
                return Buffer.alloc(0);
              } else {
                num5 = arg1;
                if (undefined === arg1) {
                  num2 = 1;
                  num3 = 0;
                  num4 = 0;
                  num5 = 0;
                  if (0 < TYPED_ARRAY_SUPPORT.length) {
                    do {
                      num4 = num4 + TYPED_ARRAY_SUPPORT[num3].length;
                      num3 = num3 + 1;
                      num5 = num4;
                      length = TYPED_ARRAY_SUPPORT.length;
                    } while (num3 < length);
                  }
                }
                tmp6 = Buffer;
                allocUnsafeResult = Buffer.allocUnsafe(num5);
                num6 = 1;
                num7 = 0;
                num8 = 0;
                if (0 < TYPED_ARRAY_SUPPORT.length) {
                  arr = TYPED_ARRAY_SUPPORT[num8];
                  tmp8 = Buffer;
                  tmp9 = num7;
                  tmp10 = num8;
                  while (Buffer.isBuffer(arr)) {
                    copyResult = arr.copy(allocUnsafeResult, num7);
                    num7 = num7 + arr.length;
                    num8 = num8 + 1;
                  }
                  tmp11 = globalThis;
                  _TypeError2 = TypeError;
                  tmp12 = new.target;
                  str2 = "\"list\" argument must be an Array of Buffers";
                  tmp13 = new.target;
                  typeError = new TypeError("\"list\" argument must be an Array of Buffers");
                  tmp15 = typeError;
                  throw typeError;
                }
                return allocUnsafeResult;
              }
            } else {
              tmp = globalThis;
              _TypeError = TypeError;
              tmp2 = new.target;
              str = "\"list\" argument must be an Array of Buffers";
              tmp3 = new.target;
              typeError1 = new TypeError("\"list\" argument must be an Array of Buffers");
              tmp5 = typeError1;
              throw typeError1;
            }
          }
          swap16() {
            self = this;
            length = this.length;
            if (length % 2 !== 0) {
              tmp2 = globalThis;
              _RangeError = RangeError;
              tmp3 = new.target;
              str = "Buffer size must be a multiple of 16-bits";
              tmp4 = new.target;
              rangeError = new RangeError("Buffer size must be a multiple of 16-bits");
              tmp6 = rangeError;
              throw rangeError;
            } else {
              num = 1;
              for (let num2 = 0; num2 < length; num2 = num2 + 2) {
                sum = num2 + 1;
                self[num2] = self[sum];
                self[sum] = self[num2];
              }
              return self;
            }
          }
          swap32() {
            self = this;
            length = this.length;
            if (length % 4 !== 0) {
              tmp4 = globalThis;
              _RangeError = RangeError;
              tmp5 = new.target;
              str = "Buffer size must be a multiple of 32-bits";
              tmp6 = new.target;
              rangeError = new RangeError("Buffer size must be a multiple of 32-bits");
              tmp8 = rangeError;
              throw rangeError;
            } else {
              num = 3;
              num2 = 1;
              num3 = 2;
              for (let num4 = 0; num4 < length; num4 = num4 + 4) {
                sum = num4 + 3;
                self[num4] = self[sum];
                self[sum] = self[num4];
                sum1 = num4 + 1;
                sum2 = num4 + 2;
                self[sum1] = self[sum2];
                self[sum2] = self[sum1];
              }
              return self;
            }
          }
          swap64() {
            self = this;
            length = this.length;
            if (length % 8 !== 0) {
              tmp8 = globalThis;
              _RangeError = RangeError;
              tmp9 = new.target;
              str = "Buffer size must be a multiple of 64-bits";
              tmp10 = new.target;
              rangeError = new RangeError("Buffer size must be a multiple of 64-bits");
              tmp12 = rangeError;
              throw rangeError;
            } else {
              num2 = 7;
              num3 = 1;
              num4 = 6;
              num5 = 2;
              num6 = 5;
              num7 = 3;
              num8 = 4;
              for (let num = 0; num < length; num = num + 8) {
                sum = num + 7;
                self[num] = self[sum];
                self[sum] = self[num];
                sum1 = num + 1;
                sum2 = num + 6;
                self[sum1] = self[sum2];
                self[sum2] = self[sum1];
                sum3 = num + 2;
                sum4 = num + 5;
                self[sum3] = self[sum4];
                self[sum4] = self[sum3];
                sum5 = num + 3;
                sum6 = num + 4;
                self[sum5] = self[sum6];
                self[sum6] = self[sum5];
              }
              return self;
            }
          }
          toString() {
            self = this;
            tmp = this.length | 0;
            if (0 === tmp) {
              return "";
            } else {
              if (0 === arguments.length) {
                tmp5 = utf8Slice;
                applyResult = utf8Slice(self, 0, tmp);
              } else {
                tmp2 = slowToString;
                tmp3 = arguments;
                applyResult = slowToString(...arguments);
              }
              tmp6 = applyResult;
            }
            return;
          }
          equals(arg0) {
            obj = Buffer;
            if (Buffer.isBuffer(TYPED_ARRAY_SUPPORT)) {
              tmp7 = this === TYPED_ARRAY_SUPPORT;
              if (!tmp7) {
                num = 0;
                tmp7 = 0 === obj.compare(tmp6, TYPED_ARRAY_SUPPORT);
              }
              return tmp7;
            } else {
              tmp = globalThis;
              _TypeError = TypeError;
              tmp2 = new.target;
              str = "Argument must be a Buffer";
              tmp3 = new.target;
              typeError = new TypeError("Argument must be a Buffer");
              tmp5 = typeError;
              throw typeError;
            }
          }
          inspect() {
            self = this;
            INSPECT_MAX_BYTES = closure_0.INSPECT_MAX_BYTES;
            str = "";
            if (this.length > 0) {
              str2 = "hex";
              str3 = self.toString("hex", 0, INSPECT_MAX_BYTES);
              match = str3.match(/.{2}/g);
              str4 = " ";
              joined = match.join(" ");
              text = joined;
              if (self.length > INSPECT_MAX_BYTES) {
                str5 = " ... ";
                text = `${tmp} ... `;
              }
              str = text;
            }
            return "<Buffer " + str + ">";
          }
          compare(arg0, arg1, arg2, arg3, arg4) {
            if (Buffer.isBuffer(TYPED_ARRAY_SUPPORT)) {
              num = arg1;
              if (undefined === arg1) {
                num = 0;
              }
              tmp6 = arg2;
              if (undefined === arg2) {
                num2 = 0;
                if (TYPED_ARRAY_SUPPORT) {
                  num2 = TYPED_ARRAY_SUPPORT.length;
                }
                tmp6 = num2;
              }
              num3 = arg3;
              if (undefined === arg3) {
                num3 = 0;
              }
              self = this;
              length = arg4;
              if (undefined === arg4) {
                length = self.length;
              }
              num4 = 0;
              if (num >= 0) {
                if (tmp6 <= TYPED_ARRAY_SUPPORT.length) {
                  if (num3 >= 0) {
                    if (length <= self.length) {
                      if (num3 >= length) {
                        if (num >= tmp6) {
                          return 0;
                        }
                      }
                      if (num3 >= length) {
                        num9 = -1;
                        return -1;
                      } else if (num >= tmp6) {
                        num8 = 1;
                        return 1;
                      } else if (self === TYPED_ARRAY_SUPPORT) {
                        return 0;
                      } else {
                        tmp15 = length >>> 0;
                        tmp16 = num3 >>> 0;
                        diff = tmp15 - tmp16;
                        tmp18 = tmp6 >>> 0;
                        tmp19 = num >>> 0;
                        diff1 = tmp18 - tmp19;
                        tmp21 = globalThis;
                        _Math = Math;
                        bound = Math.min(diff, diff1);
                        substr = self.slice(tmp16, tmp15);
                        substr1 = TYPED_ARRAY_SUPPORT.slice(tmp19, tmp18);
                        num10 = 1;
                        num5 = 0;
                        tmp8 = diff1;
                        tmp9 = diff;
                        if (0 < bound) {
                          tmp7 = num5;
                          while (substr[num5] === substr1[num5]) {
                            num5 = num5 + 1;
                            tmp8 = diff1;
                            tmp9 = diff;
                          }
                          tmp9 = substr[num5];
                          tmp8 = substr1[num5];
                        }
                        num6 = -1;
                        if (tmp9 >= tmp8) {
                          num7 = 0;
                          if (tmp8 < tmp9) {
                            num7 = 1;
                          }
                          num6 = num7;
                        }
                        return num6;
                      }
                    }
                  }
                }
              }
              tmp10 = globalThis;
              _RangeError = RangeError;
              tmp11 = new.target;
              str2 = "out of range index";
              tmp12 = new.target;
              rangeError = new RangeError("out of range index");
              tmp14 = rangeError;
              throw rangeError;
            } else {
              tmp = globalThis;
              _TypeError = TypeError;
              tmp2 = new.target;
              str = "Argument must be a Buffer";
              tmp3 = new.target;
              typeError = new TypeError("Argument must be a Buffer");
              tmp5 = typeError;
              throw typeError;
            }
          }
          includes(arg0, arg1, arg2) {
            return -1 !== this.indexOf(TYPED_ARRAY_SUPPORT, arg1, arg2);
          }
          indexOf(arg0, arg1, arg2) {
            return bidirectionalIndexOf(this, TYPED_ARRAY_SUPPORT, arg1, arg2, true);
          }
          lastIndexOf(arg0, arg1, arg2) {
            return bidirectionalIndexOf(this, TYPED_ARRAY_SUPPORT, arg1, arg2, false);
          }
          write(arg0, arg1, arg2, arg3) {
            self = this;
            if (undefined === arg1) {
              length = self.length;
              str2 = "utf8";
              num = 0;
            } else {
              tmp12 = arg2;
              if (undefined === arg2) {
                if (typeof arg1 === "string") {
                  length = self.length;
                  num = 0;
                  str2 = arg1;
                }
              }
              tmp = globalThis;
              _isFinite = isFinite;
              if (isFinite(arg1)) {
                tmp6 = arg1 | 0;
                _isFinite2 = isFinite;
                str2 = arg2;
                num = tmp6;
                if (isFinite(arg2)) {
                  str2 = arg3;
                  tmp7 = arg2 | 0;
                  length = tmp7;
                  num = tmp6;
                  if (undefined === arg3) {
                    str2 = "utf8";
                    length = tmp7;
                    num = tmp6;
                  }
                }
              } else {
                _Error = Error;
                tmp2 = new.target;
                str = "Buffer.write(string, encoding, offset[, length]) is no longer supported";
                tmp3 = new.target;
                error = new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                tmp5 = error;
                throw error;
              }
            }
            diff = self.length - num;
            tmp9 = undefined === length || length > diff;
            if (tmp9) {
              length = diff;
            }
            if (TYPED_ARRAY_SUPPORT.length <= 0) {
              if (num <= self.length) {
                if (!str2) {
                  str2 = "utf8";
                }
                flag = false;
                tmp10 = str2;
              }
            } else if (length >= 0) {
            }
            rangeError = new RangeError("Attempt to write outside buffer bounds");
            throw rangeError;
          }
          toJSON() {
            slice = Array.prototype.slice;
            call = slice.call;
            tmp = this._arr || this;
            if (typeof call === "unknown") {
              num = 0;
              substr = slice(0);
            } else {
              num2 = 0;
              substr = call(tmp, 0);
            }
            return { type: "Buffer", data: substr };
          }
          slice(arg0, arg1) {
            self = this;
            length = this.length;
            tmp = ~~TYPED_ARRAY_SUPPORT;
            if (tmp < 0) {
              num = tmp + length;
              if (num < 0) {
                num = 0;
              }
            } else {
              num = tmp;
              if (tmp > length) {
                num = length;
              }
            }
            tmp2 = length;
            if (undefined !== arg1) {
              tmp2 = ~~arg1;
            }
            if (tmp2 < 0) {
              num2 = tmp2 + length;
              if (num2 < 0) {
                num2 = 0;
              }
            } else {
              num2 = tmp2;
              if (tmp2 > length) {
                num2 = length;
              }
            }
            if (num2 < num) {
              num2 = num;
            }
            tmp3 = Buffer;
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              subarrayResult = self.subarray(num, num2);
              subarrayResult.__proto__ = tmp3.prototype;
              tmp15 = subarrayResult;
            } else {
              diff = num2 - num;
              obj = Object.create(tmp3.prototype);
              if (!tmp3.TYPED_ARRAY_SUPPORT) {
                if (!(obj instanceof tmp3)) {
                  obj1 = Object.create(tmp3.prototype);
                  if (!tmp3.TYPED_ARRAY_SUPPORT) {
                    if (!(obj1 instanceof tmp3)) {
                      tmp3Result = tmp3(diff, undefined, undefined);
                    }
                    tmp8 = tmp3Result;
                  }
                  if (typeof diff === "number") {
                    if (typeof undefined === "string") {
                      tmp9 = globalThis;
                      _Error = Error;
                      tmp10 = new.target;
                      str = "If encoding is specified then the first argument must be a string";
                      tmp11 = new.target;
                      error = new Error("If encoding is specified then the first argument must be a string");
                      tmp13 = error;
                      throw error;
                    } else {
                      tmp25 = allocUnsafe;
                      tmp3Result = allocUnsafe(obj1, diff);
                    }
                  } else {
                    tmp22 = from;
                    num5 = 0;
                    tmp23 = obj1;
                    tmp24 = diff;
                    tmp3Result = from(obj1, diff, undefined, undefined);
                  }
                }
                tmp14 = tmp8;
                num3 = 1;
                tmp15 = tmp8;
                num4 = 0;
                if (0 < diff) {
                  do {
                    tmp8[num4] = self[num4 + num];
                    num4 = num4 + 1;
                    tmp15 = tmp8;
                  } while (num4 < diff);
                }
              }
              if (typeof diff === "number") {
                if (typeof undefined === "string") {
                  tmp16 = globalThis;
                  _Error2 = Error;
                  tmp17 = new.target;
                  str2 = "If encoding is specified then the first argument must be a string";
                  tmp18 = new.target;
                  error1 = new Error("If encoding is specified then the first argument must be a string");
                  tmp20 = error1;
                  throw error1;
                } else {
                  tmp29 = allocUnsafe;
                  tmp8 = allocUnsafe(obj, diff);
                }
              } else {
                tmp26 = from;
                num6 = 0;
                tmp27 = obj;
                tmp28 = diff;
                tmp8 = from(obj, diff, undefined, undefined);
              }
            }
            return tmp15;
          }
          readUIntLE(arg0, arg1, arg2) {
            self = this;
            tmp = TYPED_ARRAY_SUPPORT | 0;
            tmp2 = arg1 | 0;
            if (!arg2) {
              num = 1;
              num2 = 0;
              if (tmp % 1 === 0) {
                if (tmp >= 0) {
                  if (tmp + tmp2 > tmp3) {
                    tmp4 = globalThis;
                    _RangeError = RangeError;
                    tmp5 = new.target;
                    str = "Trying to access beyond buffer length";
                    tmp6 = new.target;
                    rangeError = new RangeError("Trying to access beyond buffer length");
                    tmp8 = rangeError;
                    throw rangeError;
                  }
                }
              }
              tmp9 = globalThis;
              _RangeError2 = RangeError;
              tmp10 = new.target;
              str2 = "offset is not uint";
              tmp11 = new.target;
              rangeError1 = new RangeError("offset is not uint");
              tmp13 = rangeError1;
              throw rangeError1;
            }
            tmp14 = self[tmp];
            num3 = 256;
            tmp15 = tmp14;
            num4 = 1;
            if (1 < tmp2) {
              sum = tmp14 + self[tmp + num4] * num3;
              sum1 = num4 + 1;
              tmp18 = num3;
              tmp15 = sum;
              while (sum1 < tmp2) {
                num3 = num3 * 256;
                num4 = sum1;
                tmp14 = sum;
                tmp15 = sum;
                if (!num3) {
                  break;
                }
              }
            }
            return tmp15;
          }
          readUIntBE(arg0, arg1, arg2) {
            self = this;
            tmp = TYPED_ARRAY_SUPPORT | 0;
            tmp2 = arg1 | 0;
            if (!arg2) {
              num = 1;
              num2 = 0;
              if (tmp % 1 === 0) {
                if (tmp >= 0) {
                  if (tmp + tmp2 > tmp3) {
                    tmp4 = globalThis;
                    _RangeError = RangeError;
                    tmp5 = new.target;
                    str = "Trying to access beyond buffer length";
                    tmp6 = new.target;
                    rangeError = new RangeError("Trying to access beyond buffer length");
                    tmp8 = rangeError;
                    throw rangeError;
                  }
                }
              }
              tmp9 = globalThis;
              _RangeError2 = RangeError;
              tmp10 = new.target;
              str2 = "offset is not uint";
              tmp11 = new.target;
              rangeError1 = new RangeError("offset is not uint");
              tmp13 = rangeError1;
              throw rangeError1;
            }
            diff = tmp2 - 1;
            tmp15 = self[tmp + diff];
            num3 = 256;
            tmp16 = tmp15;
            if (0 < diff) {
              diff1 = diff - 1;
              sum = tmp15 + self[tmp + diff1] * num3;
              tmp19 = num3;
              tmp16 = sum;
              while (0 < diff1) {
                num3 = num3 * 256;
                tmp15 = sum;
                diff = diff1;
                tmp16 = sum;
                if (!num3) {
                  break;
                }
              }
            }
            return tmp16;
          }
          readUInt8(arg0, arg1) {
            if (!arg1) {
              num = 1;
              num2 = 0;
              if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                if (TYPED_ARRAY_SUPPORT >= 0) {
                  if (TYPED_ARRAY_SUPPORT + 1 > tmp) {
                    tmp2 = globalThis;
                    _RangeError = RangeError;
                    tmp3 = new.target;
                    str = "Trying to access beyond buffer length";
                    tmp4 = new.target;
                    rangeError = new RangeError("Trying to access beyond buffer length");
                    tmp6 = rangeError;
                    throw rangeError;
                  }
                }
              }
              tmp7 = globalThis;
              _RangeError2 = RangeError;
              tmp8 = new.target;
              str2 = "offset is not uint";
              tmp9 = new.target;
              rangeError1 = new RangeError("offset is not uint");
              tmp11 = rangeError1;
              throw rangeError1;
            }
            return this[TYPED_ARRAY_SUPPORT];
          }
          readUInt16LE(arg0, arg1) {
            self = this;
            if (!arg1) {
              num = 1;
              num2 = 0;
              if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                if (TYPED_ARRAY_SUPPORT >= 0) {
                  num3 = 2;
                  if (TYPED_ARRAY_SUPPORT + 2 > tmp) {
                    tmp2 = globalThis;
                    _RangeError = RangeError;
                    tmp3 = new.target;
                    str = "Trying to access beyond buffer length";
                    tmp4 = new.target;
                    rangeError = new RangeError("Trying to access beyond buffer length");
                    tmp6 = rangeError;
                    throw rangeError;
                  }
                }
              }
              tmp7 = globalThis;
              _RangeError2 = RangeError;
              tmp8 = new.target;
              str2 = "offset is not uint";
              tmp9 = new.target;
              rangeError1 = new RangeError("offset is not uint");
              tmp11 = rangeError1;
              throw rangeError1;
            }
            return self[TYPED_ARRAY_SUPPORT] | self[TYPED_ARRAY_SUPPORT + 1] << 8;
          }
          readUInt16BE(arg0, arg1) {
            self = this;
            if (!arg1) {
              num = 1;
              num2 = 0;
              if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                if (TYPED_ARRAY_SUPPORT >= 0) {
                  num3 = 2;
                  if (TYPED_ARRAY_SUPPORT + 2 > tmp) {
                    tmp2 = globalThis;
                    _RangeError = RangeError;
                    tmp3 = new.target;
                    str = "Trying to access beyond buffer length";
                    tmp4 = new.target;
                    rangeError = new RangeError("Trying to access beyond buffer length");
                    tmp6 = rangeError;
                    throw rangeError;
                  }
                }
              }
              tmp7 = globalThis;
              _RangeError2 = RangeError;
              tmp8 = new.target;
              str2 = "offset is not uint";
              tmp9 = new.target;
              rangeError1 = new RangeError("offset is not uint");
              tmp11 = rangeError1;
              throw rangeError1;
            }
            return self[TYPED_ARRAY_SUPPORT] << 8 | self[TYPED_ARRAY_SUPPORT + 1];
          }
          readUInt32LE(arg0, arg1) {
            self = this;
            if (!arg1) {
              num = 1;
              num2 = 0;
              if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                if (TYPED_ARRAY_SUPPORT >= 0) {
                  num3 = 4;
                  if (TYPED_ARRAY_SUPPORT + 4 > tmp) {
                    tmp2 = globalThis;
                    _RangeError = RangeError;
                    tmp3 = new.target;
                    str = "Trying to access beyond buffer length";
                    tmp4 = new.target;
                    rangeError = new RangeError("Trying to access beyond buffer length");
                    tmp6 = rangeError;
                    throw rangeError;
                  }
                }
              }
              tmp7 = globalThis;
              _RangeError2 = RangeError;
              tmp8 = new.target;
              str2 = "offset is not uint";
              tmp9 = new.target;
              rangeError1 = new RangeError("offset is not uint");
              tmp11 = rangeError1;
              throw rangeError1;
            }
            return (self[TYPED_ARRAY_SUPPORT] | self[TYPED_ARRAY_SUPPORT + 1] << 8 | self[TYPED_ARRAY_SUPPORT + 2] << 16) + 16777216 * self[TYPED_ARRAY_SUPPORT + 3];
          }
          readUInt32BE(arg0, arg1) {
            self = this;
            if (!arg1) {
              num = 1;
              num2 = 0;
              if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                if (TYPED_ARRAY_SUPPORT >= 0) {
                  num3 = 4;
                  if (TYPED_ARRAY_SUPPORT + 4 > tmp) {
                    tmp2 = globalThis;
                    _RangeError = RangeError;
                    tmp3 = new.target;
                    str = "Trying to access beyond buffer length";
                    tmp4 = new.target;
                    rangeError = new RangeError("Trying to access beyond buffer length");
                    tmp6 = rangeError;
                    throw rangeError;
                  }
                }
              }
              tmp7 = globalThis;
              _RangeError2 = RangeError;
              tmp8 = new.target;
              str2 = "offset is not uint";
              tmp9 = new.target;
              rangeError1 = new RangeError("offset is not uint");
              tmp11 = rangeError1;
              throw rangeError1;
            }
            return 16777216 * self[TYPED_ARRAY_SUPPORT] + (self[TYPED_ARRAY_SUPPORT + 1] << 16 | self[TYPED_ARRAY_SUPPORT + 2] << 8 | self[TYPED_ARRAY_SUPPORT + 3]);
          }
          readIntLE(arg0, arg1, arg2) {
            self = this;
            tmp = TYPED_ARRAY_SUPPORT | 0;
            tmp2 = arg1 | 0;
            if (!arg2) {
              num = 1;
              num2 = 0;
              if (tmp % 1 === 0) {
                if (tmp >= 0) {
                  if (tmp + tmp2 > tmp3) {
                    tmp4 = globalThis;
                    _RangeError = RangeError;
                    tmp5 = new.target;
                    str = "Trying to access beyond buffer length";
                    tmp6 = new.target;
                    rangeError = new RangeError("Trying to access beyond buffer length");
                    tmp8 = rangeError;
                    throw rangeError;
                  }
                }
              }
              tmp9 = globalThis;
              _RangeError2 = RangeError;
              tmp10 = new.target;
              str2 = "offset is not uint";
              tmp11 = new.target;
              rangeError1 = new RangeError("offset is not uint");
              tmp13 = rangeError1;
              throw rangeError1;
            }
            tmp14 = self[tmp];
            num3 = 1;
            num4 = 256;
            tmp15 = tmp14;
            num5 = 1;
            if (1 < tmp2) {
              sum = tmp14 + self[tmp + num3] * num4;
              sum1 = num3 + 1;
              tmp18 = num4;
              num5 = num4;
              tmp15 = sum;
              while (sum1 < tmp2) {
                num4 = num4 * 256;
                num3 = sum1;
                tmp14 = sum;
                tmp15 = sum;
                num5 = num4;
                if (!num4) {
                  break;
                }
              }
            }
            diff = tmp15;
            if (tmp15 >= num5 * 128) {
              tmp20 = globalThis;
              _Math = Math;
              num6 = 2;
              num7 = 8;
              diff = tmp15 - Math.pow(2, 8 * tmp2);
            }
            return diff;
          }
          readIntBE(arg0, arg1, arg2) {
            self = this;
            tmp = TYPED_ARRAY_SUPPORT | 0;
            tmp2 = arg1 | 0;
            if (!arg2) {
              num = 1;
              num2 = 0;
              if (tmp % 1 === 0) {
                if (tmp >= 0) {
                  if (tmp + tmp2 > tmp3) {
                    tmp4 = globalThis;
                    _RangeError = RangeError;
                    tmp5 = new.target;
                    str = "Trying to access beyond buffer length";
                    tmp6 = new.target;
                    rangeError = new RangeError("Trying to access beyond buffer length");
                    tmp8 = rangeError;
                    throw rangeError;
                  }
                }
              }
              tmp9 = globalThis;
              _RangeError2 = RangeError;
              tmp10 = new.target;
              str2 = "offset is not uint";
              tmp11 = new.target;
              rangeError1 = new RangeError("offset is not uint");
              tmp13 = rangeError1;
              throw rangeError1;
            }
            diff = tmp2 - 1;
            tmp15 = self[tmp + diff];
            num3 = 256;
            tmp16 = tmp15;
            num4 = 1;
            if (0 < diff) {
              diff1 = diff - 1;
              sum = tmp15 + self[tmp + diff1] * num3;
              tmp19 = num3;
              tmp16 = sum;
              num4 = num3;
              while (0 < diff1) {
                num3 = num3 * 256;
                tmp15 = sum;
                diff = diff1;
                tmp16 = sum;
                num4 = num3;
                if (!num3) {
                  break;
                }
              }
            }
            diff2 = tmp16;
            if (tmp16 >= num4 * 128) {
              tmp21 = globalThis;
              _Math = Math;
              num5 = 2;
              num6 = 8;
              diff2 = tmp16 - Math.pow(2, 8 * tmp2);
            }
            return diff2;
          }
          readInt8(arg0, arg1) {
            self = this;
            if (!arg1) {
              num = 1;
              num2 = 0;
              if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                if (TYPED_ARRAY_SUPPORT >= 0) {
                  if (TYPED_ARRAY_SUPPORT + 1 > tmp) {
                    tmp2 = globalThis;
                    _RangeError = RangeError;
                    tmp3 = new.target;
                    str = "Trying to access beyond buffer length";
                    tmp4 = new.target;
                    rangeError = new RangeError("Trying to access beyond buffer length");
                    tmp6 = rangeError;
                    throw rangeError;
                  }
                }
              }
              tmp7 = globalThis;
              _RangeError2 = RangeError;
              tmp8 = new.target;
              str2 = "offset is not uint";
              tmp9 = new.target;
              rangeError1 = new RangeError("offset is not uint");
              tmp11 = rangeError1;
              throw rangeError1;
            }
            tmp12 = self[TYPED_ARRAY_SUPPORT];
            if (128 & self[TYPED_ARRAY_SUPPORT]) {
              num3 = 255;
              num4 = -1;
              num5 = 1;
              result = -1 * (255 - tmp12 + 1);
            } else {
              result = tmp12;
            }
            return result;
          }
          readInt16LE(arg0, arg1) {
            self = this;
            if (!arg1) {
              num = 1;
              num2 = 0;
              if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                if (TYPED_ARRAY_SUPPORT >= 0) {
                  num3 = 2;
                  if (TYPED_ARRAY_SUPPORT + 2 > tmp) {
                    tmp2 = globalThis;
                    _RangeError = RangeError;
                    tmp3 = new.target;
                    str = "Trying to access beyond buffer length";
                    tmp4 = new.target;
                    rangeError = new RangeError("Trying to access beyond buffer length");
                    tmp6 = rangeError;
                    throw rangeError;
                  }
                }
              }
              tmp7 = globalThis;
              _RangeError2 = RangeError;
              tmp8 = new.target;
              str2 = "offset is not uint";
              tmp9 = new.target;
              rangeError1 = new RangeError("offset is not uint");
              tmp11 = rangeError1;
              throw rangeError1;
            }
            tmp12 = self[TYPED_ARRAY_SUPPORT] | self[TYPED_ARRAY_SUPPORT + 1] << 8;
            tmp13 = tmp12;
            if (32768 & tmp12) {
              num4 = 4294901760;
              tmp13 = 4294901760 | tmp12;
            }
            return tmp13;
          }
          readInt16BE(arg0, arg1) {
            self = this;
            if (!arg1) {
              num = 1;
              num2 = 0;
              if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                if (TYPED_ARRAY_SUPPORT >= 0) {
                  num3 = 2;
                  if (TYPED_ARRAY_SUPPORT + 2 > tmp) {
                    tmp2 = globalThis;
                    _RangeError = RangeError;
                    tmp3 = new.target;
                    str = "Trying to access beyond buffer length";
                    tmp4 = new.target;
                    rangeError = new RangeError("Trying to access beyond buffer length");
                    tmp6 = rangeError;
                    throw rangeError;
                  }
                }
              }
              tmp7 = globalThis;
              _RangeError2 = RangeError;
              tmp8 = new.target;
              str2 = "offset is not uint";
              tmp9 = new.target;
              rangeError1 = new RangeError("offset is not uint");
              tmp11 = rangeError1;
              throw rangeError1;
            }
            tmp12 = self[TYPED_ARRAY_SUPPORT + 1] | self[TYPED_ARRAY_SUPPORT] << 8;
            tmp13 = tmp12;
            if (32768 & tmp12) {
              num4 = 4294901760;
              tmp13 = 4294901760 | tmp12;
            }
            return tmp13;
          }
          readInt32LE(arg0, arg1) {
            self = this;
            if (!arg1) {
              num = 1;
              num2 = 0;
              if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                if (TYPED_ARRAY_SUPPORT >= 0) {
                  num3 = 4;
                  if (TYPED_ARRAY_SUPPORT + 4 > tmp) {
                    tmp2 = globalThis;
                    _RangeError = RangeError;
                    tmp3 = new.target;
                    str = "Trying to access beyond buffer length";
                    tmp4 = new.target;
                    rangeError = new RangeError("Trying to access beyond buffer length");
                    tmp6 = rangeError;
                    throw rangeError;
                  }
                }
              }
              tmp7 = globalThis;
              _RangeError2 = RangeError;
              tmp8 = new.target;
              str2 = "offset is not uint";
              tmp9 = new.target;
              rangeError1 = new RangeError("offset is not uint");
              tmp11 = rangeError1;
              throw rangeError1;
            }
            return self[TYPED_ARRAY_SUPPORT] | self[TYPED_ARRAY_SUPPORT + 1] << 8 | self[TYPED_ARRAY_SUPPORT + 2] << 16 | self[TYPED_ARRAY_SUPPORT + 3] << 24;
          }
          readInt32BE(arg0, arg1) {
            self = this;
            if (!arg1) {
              num = 1;
              num2 = 0;
              if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                if (TYPED_ARRAY_SUPPORT >= 0) {
                  num3 = 4;
                  if (TYPED_ARRAY_SUPPORT + 4 > tmp) {
                    tmp2 = globalThis;
                    _RangeError = RangeError;
                    tmp3 = new.target;
                    str = "Trying to access beyond buffer length";
                    tmp4 = new.target;
                    rangeError = new RangeError("Trying to access beyond buffer length");
                    tmp6 = rangeError;
                    throw rangeError;
                  }
                }
              }
              tmp7 = globalThis;
              _RangeError2 = RangeError;
              tmp8 = new.target;
              str2 = "offset is not uint";
              tmp9 = new.target;
              rangeError1 = new RangeError("offset is not uint");
              tmp11 = rangeError1;
              throw rangeError1;
            }
            return self[TYPED_ARRAY_SUPPORT] << 24 | self[TYPED_ARRAY_SUPPORT + 1] << 16 | self[TYPED_ARRAY_SUPPORT + 2] << 8 | self[TYPED_ARRAY_SUPPORT + 3];
          }
          readFloatLE(arg0, arg1) {
            self = this;
            if (!arg1) {
              num = 1;
              num2 = 0;
              if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                if (TYPED_ARRAY_SUPPORT >= 0) {
                  num3 = 4;
                  if (TYPED_ARRAY_SUPPORT + 4 > tmp) {
                    tmp2 = globalThis;
                    _RangeError = RangeError;
                    tmp3 = new.target;
                    str = "Trying to access beyond buffer length";
                    tmp4 = new.target;
                    rangeError = new RangeError("Trying to access beyond buffer length");
                    tmp6 = rangeError;
                    throw rangeError;
                  }
                }
              }
              tmp7 = globalThis;
              _RangeError2 = RangeError;
              tmp8 = new.target;
              str2 = "offset is not uint";
              tmp9 = new.target;
              rangeError1 = new RangeError("offset is not uint");
              tmp11 = rangeError1;
              throw rangeError1;
            }
            return closure_1.read(self, TYPED_ARRAY_SUPPORT, true, 23, 4);
          }
          readFloatBE(arg0, arg1) {
            self = this;
            if (!arg1) {
              num = 1;
              num2 = 0;
              if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                if (TYPED_ARRAY_SUPPORT >= 0) {
                  num3 = 4;
                  if (TYPED_ARRAY_SUPPORT + 4 > tmp) {
                    tmp2 = globalThis;
                    _RangeError = RangeError;
                    tmp3 = new.target;
                    str = "Trying to access beyond buffer length";
                    tmp4 = new.target;
                    rangeError = new RangeError("Trying to access beyond buffer length");
                    tmp6 = rangeError;
                    throw rangeError;
                  }
                }
              }
              tmp7 = globalThis;
              _RangeError2 = RangeError;
              tmp8 = new.target;
              str2 = "offset is not uint";
              tmp9 = new.target;
              rangeError1 = new RangeError("offset is not uint");
              tmp11 = rangeError1;
              throw rangeError1;
            }
            return closure_1.read(self, TYPED_ARRAY_SUPPORT, false, 23, 4);
          }
          readDoubleLE(arg0, arg1) {
            self = this;
            if (!arg1) {
              num = 1;
              num2 = 0;
              if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                if (TYPED_ARRAY_SUPPORT >= 0) {
                  num3 = 8;
                  if (TYPED_ARRAY_SUPPORT + 8 > tmp) {
                    tmp2 = globalThis;
                    _RangeError = RangeError;
                    tmp3 = new.target;
                    str = "Trying to access beyond buffer length";
                    tmp4 = new.target;
                    rangeError = new RangeError("Trying to access beyond buffer length");
                    tmp6 = rangeError;
                    throw rangeError;
                  }
                }
              }
              tmp7 = globalThis;
              _RangeError2 = RangeError;
              tmp8 = new.target;
              str2 = "offset is not uint";
              tmp9 = new.target;
              rangeError1 = new RangeError("offset is not uint");
              tmp11 = rangeError1;
              throw rangeError1;
            }
            return closure_1.read(self, TYPED_ARRAY_SUPPORT, true, 52, 8);
          }
          readDoubleBE(arg0, arg1) {
            self = this;
            if (!arg1) {
              num = 1;
              num2 = 0;
              if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                if (TYPED_ARRAY_SUPPORT >= 0) {
                  num3 = 8;
                  if (TYPED_ARRAY_SUPPORT + 8 > tmp) {
                    tmp2 = globalThis;
                    _RangeError = RangeError;
                    tmp3 = new.target;
                    str = "Trying to access beyond buffer length";
                    tmp4 = new.target;
                    rangeError = new RangeError("Trying to access beyond buffer length");
                    tmp6 = rangeError;
                    throw rangeError;
                  }
                }
              }
              tmp7 = globalThis;
              _RangeError2 = RangeError;
              tmp8 = new.target;
              str2 = "offset is not uint";
              tmp9 = new.target;
              rangeError1 = new RangeError("offset is not uint");
              tmp11 = rangeError1;
              throw rangeError1;
            }
            return closure_1.read(self, TYPED_ARRAY_SUPPORT, false, 52, 8);
          }
          writeUIntLE(arg0, arg1, arg2, arg3) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            tmp3 = arg2 | 0;
            if (!arg3) {
              tmp4 = globalThis;
              _Math = Math;
              num = 2;
              num2 = 8;
              num3 = 1;
              tmp6 = Buffer;
              diff = Math.pow(2, 8 * tmp3) - 1;
              if (Buffer.isBuffer(self)) {
                if (diff >= tmp) {
                  num4 = 0;
                  if (tmp >= 0) {
                    if (tmp2 + tmp3 > self.length) {
                      _RangeError = RangeError;
                      tmp11 = new.target;
                      str2 = "Index out of range";
                      tmp12 = new.target;
                      rangeError = new RangeError("Index out of range");
                      tmp14 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                _RangeError2 = RangeError;
                tmp15 = new.target;
                str3 = "\"value\" argument is out of bounds";
                tmp16 = new.target;
                rangeError1 = new RangeError("\"value\" argument is out of bounds");
                tmp18 = rangeError1;
                throw rangeError1;
              } else {
                _TypeError = TypeError;
                tmp7 = new.target;
                str = "\"buffer\" argument must be a Buffer instance";
                tmp8 = new.target;
                typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                tmp10 = typeError;
                throw typeError;
              }
            }
            self[tmp2] = 255 & tmp;
            num5 = 256;
            num6 = 1;
            if (1 < tmp3) {
              self[tmp2 + num6] = tmp / num5 & 255;
              sum = num6 + 1;
              tmp20 = num5;
              while (sum < tmp3) {
                num5 = num5 * 256;
                num6 = sum;
                if (!num5) {
                  break;
                }
              }
            }
            return tmp2 + tmp3;
          }
          writeUIntBE(arg0, arg1, arg2, arg3) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            tmp3 = arg2 | 0;
            if (!arg3) {
              tmp4 = globalThis;
              _Math = Math;
              num = 2;
              num2 = 8;
              num3 = 1;
              tmp6 = Buffer;
              diff = Math.pow(2, 8 * tmp3) - 1;
              if (Buffer.isBuffer(self)) {
                if (diff >= tmp) {
                  num4 = 0;
                  if (tmp >= 0) {
                    if (tmp2 + tmp3 > self.length) {
                      _RangeError = RangeError;
                      tmp11 = new.target;
                      str2 = "Index out of range";
                      tmp12 = new.target;
                      rangeError = new RangeError("Index out of range");
                      tmp14 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                _RangeError2 = RangeError;
                tmp15 = new.target;
                str3 = "\"value\" argument is out of bounds";
                tmp16 = new.target;
                rangeError1 = new RangeError("\"value\" argument is out of bounds");
                tmp18 = rangeError1;
                throw rangeError1;
              } else {
                _TypeError = TypeError;
                tmp7 = new.target;
                str = "\"buffer\" argument must be a Buffer instance";
                tmp8 = new.target;
                typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                tmp10 = typeError;
                throw typeError;
              }
            }
            diff1 = tmp3 - 1;
            self[tmp2 + diff1] = 255 & tmp;
            diff2 = diff1 - 1;
            num5 = 256;
            if (0 <= diff2) {
              self[tmp2 + diff2] = tmp / num5 & 255;
              diff3 = diff2 - 1;
              tmp22 = num5;
              while (0 <= diff3) {
                num5 = num5 * 256;
                diff2 = diff3;
                if (!num5) {
                  break;
                }
              }
            }
            return tmp2 + tmp3;
          }
          writeUInt8(arg0, arg1, arg2) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = Buffer;
              if (Buffer.isBuffer(self)) {
                num = 255;
                if (255 >= tmp) {
                  num2 = 0;
                  if (tmp >= 0) {
                    num3 = 1;
                    if (tmp2 + 1 > self.length) {
                      tmp9 = globalThis;
                      _RangeError = RangeError;
                      tmp10 = new.target;
                      str2 = "Index out of range";
                      tmp11 = new.target;
                      rangeError = new RangeError("Index out of range");
                      tmp13 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp14 = globalThis;
                _RangeError2 = RangeError;
                tmp15 = new.target;
                str3 = "\"value\" argument is out of bounds";
                tmp16 = new.target;
                rangeError1 = new RangeError("\"value\" argument is out of bounds");
                tmp18 = rangeError1;
                throw rangeError1;
              } else {
                tmp4 = globalThis;
                _TypeError = TypeError;
                tmp5 = new.target;
                str = "\"buffer\" argument must be a Buffer instance";
                tmp6 = new.target;
                typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                tmp8 = typeError;
                throw typeError;
              }
            }
            rounded = tmp;
            if (!Buffer.TYPED_ARRAY_SUPPORT) {
              tmp20 = globalThis;
              _Math = Math;
              rounded = Math.floor(tmp);
            }
            self[tmp2] = 255 & rounded;
            return tmp2 + 1;
          }
          writeUInt16LE(arg0, arg1, arg2) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = Buffer;
              if (Buffer.isBuffer(self)) {
                num = 65535;
                if (65535 >= tmp) {
                  num2 = 0;
                  if (tmp >= 0) {
                    num3 = 2;
                    if (tmp2 + 2 > self.length) {
                      tmp9 = globalThis;
                      _RangeError = RangeError;
                      tmp10 = new.target;
                      str2 = "Index out of range";
                      tmp11 = new.target;
                      rangeError = new RangeError("Index out of range");
                      tmp13 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp14 = globalThis;
                _RangeError2 = RangeError;
                tmp15 = new.target;
                str3 = "\"value\" argument is out of bounds";
                tmp16 = new.target;
                rangeError1 = new RangeError("\"value\" argument is out of bounds");
                tmp18 = rangeError1;
                throw rangeError1;
              } else {
                tmp4 = globalThis;
                _TypeError = TypeError;
                tmp5 = new.target;
                str = "\"buffer\" argument must be a Buffer instance";
                tmp6 = new.target;
                typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                tmp8 = typeError;
                throw typeError;
              }
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              num12 = 255;
              self[tmp2] = 255 & tmp;
              num13 = 8;
              num14 = 1;
              self[tmp2 + 1] = tmp >>> 8;
            } else {
              num4 = 0;
              sum = tmp;
              if (tmp < 0) {
                num5 = 1;
                num6 = 65535;
                sum = 65535 + tmp + 1;
              }
              tmp20 = globalThis;
              _Math = Math;
              num7 = 2;
              bound = Math.min(self.length - tmp2, 2);
              num8 = 8;
              num9 = 255;
              num10 = 1;
              for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                result = 8 * num11;
                self[tmp2 + num11] = (sum & 255 << result) >>> result;
              }
            }
            return tmp2 + 2;
          }
          writeUInt16BE(arg0, arg1, arg2) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = Buffer;
              if (Buffer.isBuffer(self)) {
                num = 65535;
                if (65535 >= tmp) {
                  num2 = 0;
                  if (tmp >= 0) {
                    num3 = 2;
                    if (tmp2 + 2 > self.length) {
                      tmp9 = globalThis;
                      _RangeError = RangeError;
                      tmp10 = new.target;
                      str2 = "Index out of range";
                      tmp11 = new.target;
                      rangeError = new RangeError("Index out of range");
                      tmp13 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp14 = globalThis;
                _RangeError2 = RangeError;
                tmp15 = new.target;
                str3 = "\"value\" argument is out of bounds";
                tmp16 = new.target;
                rangeError1 = new RangeError("\"value\" argument is out of bounds");
                tmp18 = rangeError1;
                throw rangeError1;
              } else {
                tmp4 = globalThis;
                _TypeError = TypeError;
                tmp5 = new.target;
                str = "\"buffer\" argument must be a Buffer instance";
                tmp6 = new.target;
                typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                tmp8 = typeError;
                throw typeError;
              }
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              num12 = 8;
              self[tmp2] = tmp >>> 8;
              num13 = 255;
              num14 = 1;
              self[tmp2 + 1] = 255 & tmp;
            } else {
              num4 = 0;
              sum = tmp;
              if (tmp < 0) {
                num5 = 1;
                num6 = 65535;
                sum = 65535 + tmp + 1;
              }
              tmp20 = globalThis;
              _Math = Math;
              num7 = 2;
              bound = Math.min(self.length - tmp2, 2);
              num8 = 8;
              num9 = 1;
              num10 = 255;
              for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                result = 8 * (1 - num11);
                self[tmp2 + num11] = (sum & 255 << result) >>> result;
              }
            }
            return tmp2 + 2;
          }
          writeUInt32LE(arg0, arg1, arg2) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = Buffer;
              if (Buffer.isBuffer(self)) {
                num = 4294967295;
                if (4294967295 >= tmp) {
                  num2 = 0;
                  if (tmp >= 0) {
                    num3 = 4;
                    if (tmp2 + 4 > self.length) {
                      tmp9 = globalThis;
                      _RangeError = RangeError;
                      tmp10 = new.target;
                      str2 = "Index out of range";
                      tmp11 = new.target;
                      rangeError = new RangeError("Index out of range");
                      tmp13 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp14 = globalThis;
                _RangeError2 = RangeError;
                tmp15 = new.target;
                str3 = "\"value\" argument is out of bounds";
                tmp16 = new.target;
                rangeError1 = new RangeError("\"value\" argument is out of bounds");
                tmp18 = rangeError1;
                throw rangeError1;
              } else {
                tmp4 = globalThis;
                _TypeError = TypeError;
                tmp5 = new.target;
                str = "\"buffer\" argument must be a Buffer instance";
                tmp6 = new.target;
                typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                tmp8 = typeError;
                throw typeError;
              }
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              num12 = 24;
              num13 = 3;
              self[tmp2 + 3] = tmp >>> 24;
              num14 = 16;
              num15 = 2;
              self[tmp2 + 2] = tmp >>> 16;
              num16 = 8;
              num17 = 1;
              self[tmp2 + 1] = tmp >>> 8;
              num18 = 255;
              self[tmp2] = 255 & tmp;
            } else {
              num4 = 0;
              sum = tmp;
              if (tmp < 0) {
                num5 = 1;
                num6 = 4294967295;
                sum = 4294967295 + tmp + 1;
              }
              tmp20 = globalThis;
              _Math = Math;
              num7 = 4;
              bound = Math.min(self.length - tmp2, 4);
              num8 = 255;
              num9 = 8;
              num10 = 1;
              for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                self[tmp2 + num11] = sum >>> 8 * num11 & 255;
              }
            }
            return tmp2 + 4;
          }
          writeUInt32BE(arg0, arg1, arg2) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = Buffer;
              if (Buffer.isBuffer(self)) {
                num = 4294967295;
                if (4294967295 >= tmp) {
                  num2 = 0;
                  if (tmp >= 0) {
                    num3 = 4;
                    if (tmp2 + 4 > self.length) {
                      tmp9 = globalThis;
                      _RangeError = RangeError;
                      tmp10 = new.target;
                      str2 = "Index out of range";
                      tmp11 = new.target;
                      rangeError = new RangeError("Index out of range");
                      tmp13 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp14 = globalThis;
                _RangeError2 = RangeError;
                tmp15 = new.target;
                str3 = "\"value\" argument is out of bounds";
                tmp16 = new.target;
                rangeError1 = new RangeError("\"value\" argument is out of bounds");
                tmp18 = rangeError1;
                throw rangeError1;
              } else {
                tmp4 = globalThis;
                _TypeError = TypeError;
                tmp5 = new.target;
                str = "\"buffer\" argument must be a Buffer instance";
                tmp6 = new.target;
                typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                tmp8 = typeError;
                throw typeError;
              }
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              num13 = 24;
              self[tmp2] = tmp >>> 24;
              num14 = 16;
              num15 = 1;
              self[tmp2 + 1] = tmp >>> 16;
              num16 = 8;
              num17 = 2;
              self[tmp2 + 2] = tmp >>> 8;
              num18 = 255;
              num19 = 3;
              self[tmp2 + 3] = 255 & tmp;
            } else {
              num4 = 0;
              sum = tmp;
              if (tmp < 0) {
                num5 = 1;
                num6 = 4294967295;
                sum = 4294967295 + tmp + 1;
              }
              tmp20 = globalThis;
              _Math = Math;
              num7 = 4;
              bound = Math.min(self.length - tmp2, 4);
              num8 = 255;
              num9 = 8;
              num10 = 3;
              num11 = 1;
              for (let num12 = 0; num12 < bound; num12 = num12 + 1) {
                self[tmp2 + num12] = sum >>> 8 * (3 - num12) & 255;
              }
            }
            return tmp2 + 4;
          }
          writeIntLE(arg0, arg1, arg2, arg3) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg3) {
              tmp3 = globalThis;
              _Math = Math;
              num = 8;
              num2 = 2;
              num3 = 1;
              powResult = Math.pow(2, 8 * arg2 - 1);
              tmp7 = Buffer;
              diff = powResult - 1;
              tmp6 = -powResult;
              if (Buffer.isBuffer(self)) {
                if (diff >= tmp) {
                  if (tmp >= tmp6) {
                    if (tmp2 + arg2 > self.length) {
                      _RangeError = RangeError;
                      tmp12 = new.target;
                      str2 = "Index out of range";
                      tmp13 = new.target;
                      rangeError = new RangeError("Index out of range");
                      tmp15 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                _RangeError2 = RangeError;
                tmp16 = new.target;
                str3 = "\"value\" argument is out of bounds";
                tmp17 = new.target;
                rangeError1 = new RangeError("\"value\" argument is out of bounds");
                tmp19 = rangeError1;
                throw rangeError1;
              } else {
                _TypeError = TypeError;
                tmp8 = new.target;
                str = "\"buffer\" argument must be a Buffer instance";
                tmp9 = new.target;
                typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                tmp11 = typeError;
                throw typeError;
              }
            }
            self[tmp2] = 255 & tmp;
            num4 = 0;
            num5 = 256;
            num6 = 1;
            if (1 < arg2) {
              while (true) {
                num7 = num4;
                tmp21 = num5;
                tmp22 = num6;
                tmp23 = tmp20;
                if (tmp < 0) {
                  tmp23 = 0 === num7;
                }
                if (tmp23) {
                  tmp23 = 0 !== self[tmp2 + num6 - 1];
                }
                if (tmp23) {
                  num7 = 1;
                }
                self[tmp2 + num6] = (tmp / num5 | 0) - num7 & 255;
                sum = num6 + 1;
                if (sum >= arg2) {
                  break;
                } else {
                  num5 = num5 * 256;
                  num4 = num7;
                  num6 = sum;
                  if (!num5) {
                    break;
                  }
                }
              }
            }
            return tmp2 + arg2;
          }
          writeIntBE(arg0, arg1, arg2, arg3) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg3) {
              tmp3 = globalThis;
              _Math = Math;
              num = 8;
              num2 = 2;
              num3 = 1;
              powResult = Math.pow(2, 8 * arg2 - 1);
              tmp7 = Buffer;
              diff = powResult - 1;
              tmp6 = -powResult;
              if (Buffer.isBuffer(self)) {
                if (diff >= tmp) {
                  if (tmp >= tmp6) {
                    if (tmp2 + arg2 > self.length) {
                      _RangeError = RangeError;
                      tmp12 = new.target;
                      str2 = "Index out of range";
                      tmp13 = new.target;
                      rangeError = new RangeError("Index out of range");
                      tmp15 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                _RangeError2 = RangeError;
                tmp16 = new.target;
                str3 = "\"value\" argument is out of bounds";
                tmp17 = new.target;
                rangeError1 = new RangeError("\"value\" argument is out of bounds");
                tmp19 = rangeError1;
                throw rangeError1;
              } else {
                _TypeError = TypeError;
                tmp8 = new.target;
                str = "\"buffer\" argument must be a Buffer instance";
                tmp9 = new.target;
                typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                tmp11 = typeError;
                throw typeError;
              }
            }
            diff1 = arg2 - 1;
            self[tmp2 + diff1] = 255 & tmp;
            diff2 = diff1 - 1;
            num4 = 256;
            num5 = 0;
            if (0 <= diff2) {
              while (true) {
                num6 = num5;
                tmp23 = num4;
                tmp24 = diff2;
                tmp25 = tmp22;
                if (tmp < 0) {
                  tmp25 = 0 === num6;
                }
                if (tmp25) {
                  tmp25 = 0 !== self[tmp2 + diff2 + 1];
                }
                if (tmp25) {
                  num6 = 1;
                }
                self[tmp2 + diff2] = (tmp / num4 | 0) - num6 & 255;
                diff3 = diff2 - 1;
                if (0 > diff3) {
                  break;
                } else {
                  num4 = num4 * 256;
                  num5 = num6;
                  diff2 = diff3;
                  if (!num4) {
                    break;
                  }
                }
              }
            }
            return tmp2 + arg2;
          }
          writeInt8(arg0, arg1, arg2) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = Buffer;
              if (Buffer.isBuffer(self)) {
                num = 127;
                if (127 >= tmp) {
                  num2 = -128;
                  if (tmp >= -128) {
                    num3 = 1;
                    if (tmp2 + 1 > self.length) {
                      tmp9 = globalThis;
                      _RangeError = RangeError;
                      tmp10 = new.target;
                      str2 = "Index out of range";
                      tmp11 = new.target;
                      rangeError = new RangeError("Index out of range");
                      tmp13 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp14 = globalThis;
                _RangeError2 = RangeError;
                tmp15 = new.target;
                str3 = "\"value\" argument is out of bounds";
                tmp16 = new.target;
                rangeError1 = new RangeError("\"value\" argument is out of bounds");
                tmp18 = rangeError1;
                throw rangeError1;
              } else {
                tmp4 = globalThis;
                _TypeError = TypeError;
                tmp5 = new.target;
                str = "\"buffer\" argument must be a Buffer instance";
                tmp6 = new.target;
                typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                tmp8 = typeError;
                throw typeError;
              }
            }
            rounded = tmp;
            if (!Buffer.TYPED_ARRAY_SUPPORT) {
              tmp20 = globalThis;
              _Math = Math;
              rounded = Math.floor(tmp);
            }
            sum = rounded;
            if (rounded < 0) {
              num4 = 255;
              num5 = 1;
              sum = 255 + rounded + 1;
            }
            self[tmp2] = 255 & sum;
            return tmp2 + 1;
          }
          writeInt16LE(arg0, arg1, arg2) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = Buffer;
              if (Buffer.isBuffer(self)) {
                num = 32767;
                if (32767 >= tmp) {
                  num2 = -32768;
                  if (tmp >= -32768) {
                    num3 = 2;
                    if (tmp2 + 2 > self.length) {
                      tmp9 = globalThis;
                      _RangeError = RangeError;
                      tmp10 = new.target;
                      str2 = "Index out of range";
                      tmp11 = new.target;
                      rangeError = new RangeError("Index out of range");
                      tmp13 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp14 = globalThis;
                _RangeError2 = RangeError;
                tmp15 = new.target;
                str3 = "\"value\" argument is out of bounds";
                tmp16 = new.target;
                rangeError1 = new RangeError("\"value\" argument is out of bounds");
                tmp18 = rangeError1;
                throw rangeError1;
              } else {
                tmp4 = globalThis;
                _TypeError = TypeError;
                tmp5 = new.target;
                str = "\"buffer\" argument must be a Buffer instance";
                tmp6 = new.target;
                typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                tmp8 = typeError;
                throw typeError;
              }
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              num12 = 255;
              self[tmp2] = 255 & tmp;
              num13 = 8;
              num14 = 1;
              self[tmp2 + 1] = tmp >>> 8;
            } else {
              num4 = 0;
              sum = tmp;
              if (tmp < 0) {
                num5 = 1;
                num6 = 65535;
                sum = 65535 + tmp + 1;
              }
              tmp20 = globalThis;
              _Math = Math;
              num7 = 2;
              bound = Math.min(self.length - tmp2, 2);
              num8 = 8;
              num9 = 255;
              num10 = 1;
              for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                result = 8 * num11;
                self[tmp2 + num11] = (sum & 255 << result) >>> result;
              }
            }
            return tmp2 + 2;
          }
          writeInt16BE(arg0, arg1, arg2) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = Buffer;
              if (Buffer.isBuffer(self)) {
                num = 32767;
                if (32767 >= tmp) {
                  num2 = -32768;
                  if (tmp >= -32768) {
                    num3 = 2;
                    if (tmp2 + 2 > self.length) {
                      tmp9 = globalThis;
                      _RangeError = RangeError;
                      tmp10 = new.target;
                      str2 = "Index out of range";
                      tmp11 = new.target;
                      rangeError = new RangeError("Index out of range");
                      tmp13 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp14 = globalThis;
                _RangeError2 = RangeError;
                tmp15 = new.target;
                str3 = "\"value\" argument is out of bounds";
                tmp16 = new.target;
                rangeError1 = new RangeError("\"value\" argument is out of bounds");
                tmp18 = rangeError1;
                throw rangeError1;
              } else {
                tmp4 = globalThis;
                _TypeError = TypeError;
                tmp5 = new.target;
                str = "\"buffer\" argument must be a Buffer instance";
                tmp6 = new.target;
                typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                tmp8 = typeError;
                throw typeError;
              }
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              num12 = 8;
              self[tmp2] = tmp >>> 8;
              num13 = 255;
              num14 = 1;
              self[tmp2 + 1] = 255 & tmp;
            } else {
              num4 = 0;
              sum = tmp;
              if (tmp < 0) {
                num5 = 1;
                num6 = 65535;
                sum = 65535 + tmp + 1;
              }
              tmp20 = globalThis;
              _Math = Math;
              num7 = 2;
              bound = Math.min(self.length - tmp2, 2);
              num8 = 8;
              num9 = 1;
              num10 = 255;
              for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                result = 8 * (1 - num11);
                self[tmp2 + num11] = (sum & 255 << result) >>> result;
              }
            }
            return tmp2 + 2;
          }
          writeInt32LE(arg0, arg1, arg2) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = Buffer;
              if (Buffer.isBuffer(self)) {
                num = 2147483647;
                if (2147483647 >= tmp) {
                  num2 = -2147483648;
                  if (tmp >= -2147483648) {
                    num3 = 4;
                    if (tmp2 + 4 > self.length) {
                      tmp9 = globalThis;
                      _RangeError = RangeError;
                      tmp10 = new.target;
                      str2 = "Index out of range";
                      tmp11 = new.target;
                      rangeError = new RangeError("Index out of range");
                      tmp13 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp14 = globalThis;
                _RangeError2 = RangeError;
                tmp15 = new.target;
                str3 = "\"value\" argument is out of bounds";
                tmp16 = new.target;
                rangeError1 = new RangeError("\"value\" argument is out of bounds");
                tmp18 = rangeError1;
                throw rangeError1;
              } else {
                tmp4 = globalThis;
                _TypeError = TypeError;
                tmp5 = new.target;
                str = "\"buffer\" argument must be a Buffer instance";
                tmp6 = new.target;
                typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                tmp8 = typeError;
                throw typeError;
              }
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              num12 = 255;
              self[tmp2] = 255 & tmp;
              num13 = 8;
              num14 = 1;
              self[tmp2 + 1] = tmp >>> 8;
              num15 = 16;
              num16 = 2;
              self[tmp2 + 2] = tmp >>> 16;
              num17 = 24;
              num18 = 3;
              self[tmp2 + 3] = tmp >>> 24;
            } else {
              num4 = 0;
              sum = tmp;
              if (tmp < 0) {
                num5 = 1;
                num6 = 4294967295;
                sum = 4294967295 + tmp + 1;
              }
              tmp20 = globalThis;
              _Math = Math;
              num7 = 4;
              bound = Math.min(self.length - tmp2, 4);
              num8 = 255;
              num9 = 8;
              num10 = 1;
              for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                self[tmp2 + num11] = sum >>> 8 * num11 & 255;
              }
            }
            return tmp2 + 4;
          }
          writeInt32BE(arg0, arg1, arg2) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = Buffer;
              if (Buffer.isBuffer(self)) {
                num = 2147483647;
                if (2147483647 >= tmp) {
                  num2 = -2147483648;
                  if (tmp >= -2147483648) {
                    num3 = 4;
                    if (tmp2 + 4 > self.length) {
                      tmp9 = globalThis;
                      _RangeError = RangeError;
                      tmp10 = new.target;
                      str2 = "Index out of range";
                      tmp11 = new.target;
                      rangeError = new RangeError("Index out of range");
                      tmp13 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp14 = globalThis;
                _RangeError2 = RangeError;
                tmp15 = new.target;
                str3 = "\"value\" argument is out of bounds";
                tmp16 = new.target;
                rangeError1 = new RangeError("\"value\" argument is out of bounds");
                tmp18 = rangeError1;
                throw rangeError1;
              } else {
                tmp4 = globalThis;
                _TypeError = TypeError;
                tmp5 = new.target;
                str = "\"buffer\" argument must be a Buffer instance";
                tmp6 = new.target;
                typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                tmp8 = typeError;
                throw typeError;
              }
            }
            sum = tmp;
            if (tmp < 0) {
              num4 = 1;
              num5 = 4294967295;
              sum = 4294967295 + tmp + 1;
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              num14 = 24;
              self[tmp2] = sum >>> 24;
              num15 = 16;
              num16 = 1;
              self[tmp2 + 1] = sum >>> 16;
              num17 = 8;
              num18 = 2;
              self[tmp2 + 2] = sum >>> 8;
              num19 = 255;
              num20 = 3;
              self[tmp2 + 3] = 255 & sum;
            } else {
              sum1 = sum;
              if (sum < 0) {
                num6 = 1;
                num7 = 4294967295;
                sum1 = 4294967295 + sum + 1;
              }
              tmp21 = globalThis;
              _Math = Math;
              num8 = 4;
              bound = Math.min(self.length - tmp2, 4);
              num9 = 255;
              num10 = 8;
              num11 = 3;
              num12 = 1;
              for (let num13 = 0; num13 < bound; num13 = num13 + 1) {
                self[tmp2 + num13] = sum1 >>> 8 * (3 - num13) & 255;
              }
            }
            return tmp2 + 4;
          }
          writeFloatLE(arg0, arg1, arg2) {
            self = this;
            if (!arg2) {
              num = 4;
              if (arg1 + 4 > self.length) {
                tmp6 = globalThis;
                _RangeError2 = RangeError;
                tmp7 = new.target;
                str2 = "Index out of range";
                tmp8 = new.target;
                rangeError = new RangeError("Index out of range");
                tmp10 = rangeError;
                throw rangeError;
              } else {
                num2 = 0;
                if (arg1 < 0) {
                  tmp = globalThis;
                  _RangeError = RangeError;
                  tmp2 = new.target;
                  str = "Index out of range";
                  tmp3 = new.target;
                  rangeError1 = new RangeError("Index out of range");
                  tmp5 = rangeError1;
                  throw rangeError1;
                }
              }
            }
            writeResult = closure_1.write(self, TYPED_ARRAY_SUPPORT, arg1, true, 23, 4);
            return arg1 + 4;
          }
          writeFloatBE(arg0, arg1, arg2) {
            self = this;
            if (!arg2) {
              num = 4;
              if (arg1 + 4 > self.length) {
                tmp6 = globalThis;
                _RangeError2 = RangeError;
                tmp7 = new.target;
                str2 = "Index out of range";
                tmp8 = new.target;
                rangeError = new RangeError("Index out of range");
                tmp10 = rangeError;
                throw rangeError;
              } else {
                num2 = 0;
                if (arg1 < 0) {
                  tmp = globalThis;
                  _RangeError = RangeError;
                  tmp2 = new.target;
                  str = "Index out of range";
                  tmp3 = new.target;
                  rangeError1 = new RangeError("Index out of range");
                  tmp5 = rangeError1;
                  throw rangeError1;
                }
              }
            }
            writeResult = closure_1.write(self, TYPED_ARRAY_SUPPORT, arg1, false, 23, 4);
            return arg1 + 4;
          }
          writeDoubleLE(arg0, arg1, arg2) {
            self = this;
            if (!arg2) {
              num = 8;
              if (arg1 + 8 > self.length) {
                tmp6 = globalThis;
                _RangeError2 = RangeError;
                tmp7 = new.target;
                str2 = "Index out of range";
                tmp8 = new.target;
                rangeError = new RangeError("Index out of range");
                tmp10 = rangeError;
                throw rangeError;
              } else {
                num2 = 0;
                if (arg1 < 0) {
                  tmp = globalThis;
                  _RangeError = RangeError;
                  tmp2 = new.target;
                  str = "Index out of range";
                  tmp3 = new.target;
                  rangeError1 = new RangeError("Index out of range");
                  tmp5 = rangeError1;
                  throw rangeError1;
                }
              }
            }
            writeResult = closure_1.write(self, TYPED_ARRAY_SUPPORT, arg1, true, 52, 8);
            return arg1 + 8;
          }
          writeDoubleBE(arg0, arg1, arg2) {
            self = this;
            if (!arg2) {
              num = 8;
              if (arg1 + 8 > self.length) {
                tmp6 = globalThis;
                _RangeError2 = RangeError;
                tmp7 = new.target;
                str2 = "Index out of range";
                tmp8 = new.target;
                rangeError = new RangeError("Index out of range");
                tmp10 = rangeError;
                throw rangeError;
              } else {
                num2 = 0;
                if (arg1 < 0) {
                  tmp = globalThis;
                  _RangeError = RangeError;
                  tmp2 = new.target;
                  str = "Index out of range";
                  tmp3 = new.target;
                  rangeError1 = new RangeError("Index out of range");
                  tmp5 = rangeError1;
                  throw rangeError1;
                }
              }
            }
            writeResult = closure_1.write(self, TYPED_ARRAY_SUPPORT, arg1, false, 52, 8);
            return arg1 + 8;
          }
          copy(arg0, arg1, arg2, arg3) {
            num = arg2;
            if (!arg2) {
              num = 0;
            }
            length = arg3;
            tmp = arg3;
            if (!arg3) {
              num2 = 0;
              tmp = 0 === length;
            }
            self = this;
            if (!tmp) {
              length = self.length;
            }
            num3 = arg1;
            if (arg1 >= TYPED_ARRAY_SUPPORT.length) {
              num3 = TYPED_ARRAY_SUPPORT.length;
            }
            if (!num3) {
              num3 = 0;
            }
            tmp2 = length > 0 && length < num;
            if (tmp2) {
              length = num;
            }
            if (length === num) {
              return 0;
            } else {
              if (0 !== TYPED_ARRAY_SUPPORT.length) {
                if (0 !== self.length) {
                  if (num3 < 0) {
                    tmp19 = globalThis;
                    _RangeError3 = RangeError;
                    tmp20 = new.target;
                    str3 = "targetStart out of bounds";
                    tmp21 = new.target;
                    rangeError = new RangeError("targetStart out of bounds");
                    tmp23 = rangeError;
                    throw rangeError;
                  } else {
                    if (num >= 0) {
                      if (num < self.length) {
                        if (length < 0) {
                          tmp9 = globalThis;
                          _RangeError = RangeError;
                          tmp10 = new.target;
                          str = "sourceEnd out of bounds";
                          tmp11 = new.target;
                          rangeError1 = new RangeError("sourceEnd out of bounds");
                          tmp13 = rangeError1;
                          throw rangeError1;
                        } else {
                          if (length > self.length) {
                            length = self.length;
                          }
                          if (TYPED_ARRAY_SUPPORT.length - num3 < length - num) {
                            length = TYPED_ARRAY_SUPPORT.length - num3 + num;
                          }
                          diff = length - num;
                          if (self === TYPED_ARRAY_SUPPORT) {
                            if (num < num3) {
                              if (num3 < length) {
                                num7 = 1;
                                diff1 = diff - 1;
                                if (0 <= diff1) {
                                  do {
                                    TYPED_ARRAY_SUPPORT[diff1 + num3] = self[diff1 + num];
                                    diff1 = diff1 - 1;
                                  } while (0 <= diff1);
                                }
                              }
                              return diff;
                            }
                          }
                          num4 = 1000;
                          if (diff >= 1000) {
                            tmp4 = Buffer;
                            if (Buffer.TYPED_ARRAY_SUPPORT) {
                              tmp5 = globalThis;
                              _Uint8Array = Uint8Array;
                              set = Uint8Array.prototype.set;
                              call = set.call;
                              subarrayResult = self.subarray(num, num + diff);
                              if (typeof call === "unknown") {
                                result = set(subarrayResult, num3);
                              } else {
                                callResult = call(TYPED_ARRAY_SUPPORT, subarrayResult, num3);
                              }
                            }
                          }
                          num5 = 1;
                          num6 = 0;
                          if (0 < diff) {
                            do {
                              TYPED_ARRAY_SUPPORT[num6 + num3] = self[num6 + num];
                              num6 = num6 + 1;
                            } while (num6 < diff);
                          }
                        }
                      }
                    }
                    tmp14 = globalThis;
                    _RangeError2 = RangeError;
                    tmp15 = new.target;
                    str2 = "sourceStart out of bounds";
                    tmp16 = new.target;
                    rangeError2 = new RangeError("sourceStart out of bounds");
                    tmp18 = rangeError2;
                    throw rangeError2;
                  }
                }
              }
              return 0;
            }
          }
          fill(arg0, arg1, arg2, arg3) {
            self = this;
            tmp = arg3;
            if (typeof TYPED_ARRAY_SUPPORT === "string") {
              if (typeof arg1 === "string") {
                length = self.length;
                num = 0;
                tmp = arg1;
              } else {
                length = arg2;
                num = arg1;
                if (typeof arg2 === "string") {
                  length = self.length;
                  tmp = arg2;
                  num = arg1;
                }
              }
              num2 = 1;
              tmp2 = TYPED_ARRAY_SUPPORT;
              if (1 === TYPED_ARRAY_SUPPORT.length) {
                num3 = 0;
                charCodeAtResult = TYPED_ARRAY_SUPPORT.charCodeAt(0);
                num4 = 256;
                tmp2 = TYPED_ARRAY_SUPPORT;
                if (charCodeAtResult < 256) {
                  tmp2 = charCodeAtResult;
                }
              }
              if (undefined !== tmp) {
                if (typeof tmp !== "string") {
                  tmp31 = globalThis;
                  _TypeError2 = TypeError;
                  tmp32 = new.target;
                  str5 = "encoding must be a string";
                  tmp33 = new.target;
                  typeError = new TypeError("encoding must be a string");
                  tmp35 = typeError;
                  throw typeError;
                }
              }
              tmp4 = tmp;
              tmp5 = length;
              tmp6 = num;
              num5 = tmp2;
              if (typeof tmp === "string") {
                tmp36 = Buffer;
                tmp4 = tmp;
                tmp5 = length;
                tmp6 = num;
                num5 = tmp2;
                if (!Buffer.isEncoding(tmp)) {
                  tmp7 = globalThis;
                  _TypeError = TypeError;
                  str = "Unknown encoding: ";
                  tmp8 = new.target;
                  tmp9 = new.target;
                  typeError1 = new TypeError("Unknown encoding: " + tmp);
                  tmp11 = typeError1;
                  throw typeError1;
                }
              }
            } else {
              tmp4 = tmp;
              tmp5 = arg2;
              tmp6 = arg1;
              num5 = TYPED_ARRAY_SUPPORT;
              if (typeof TYPED_ARRAY_SUPPORT === "number") {
                num9 = 255;
                num5 = TYPED_ARRAY_SUPPORT & 255;
                tmp4 = tmp;
                tmp5 = arg2;
                tmp6 = arg1;
              }
            }
            if (tmp6 >= 0) {
              if (self.length >= tmp6) {
                if (self.length >= tmp5) {
                  if (tmp5 <= tmp6) {
                    return self;
                  } else {
                    sum = tmp6 >>> 0;
                    tmp12 = undefined === tmp5 ? self.length : tmp5 >>> 0;
                    if (!num5) {
                      num5 = 0;
                    }
                    if (typeof num5 === "number") {
                      num8 = 1;
                      if (sum < tmp12) {
                        do {
                          self[sum] = num5;
                          sum = sum + 1;
                        } while (sum < tmp12);
                      }
                    } else {
                      tmp37 = Buffer;
                      tmp13Result = num5;
                      if (!Buffer.isBuffer(num5)) {
                        tmp13 = utf8ToBytes;
                        obj = Object.create(tmp37.prototype);
                        if (!tmp37.TYPED_ARRAY_SUPPORT) {
                          if (!(obj instanceof tmp37)) {
                            obj1 = Object.create(tmp37.prototype);
                            if (!tmp37.TYPED_ARRAY_SUPPORT) {
                              if (!(obj1 instanceof tmp37)) {
                                tmp37Result = tmp37(num5, tmp4, undefined);
                              }
                              str2 = tmp37Result;
                            }
                            if (typeof num5 === "number") {
                              if (typeof tmp4 === "string") {
                                tmp17 = globalThis;
                                _Error = Error;
                                tmp18 = new.target;
                                str3 = "If encoding is specified then the first argument must be a string";
                                tmp19 = new.target;
                                error = new Error("If encoding is specified then the first argument must be a string");
                                tmp21 = error;
                                throw error;
                              } else {
                                tmp42 = allocUnsafe;
                                tmp37Result = allocUnsafe(obj1, num5);
                              }
                            } else {
                              tmp38 = from;
                              num10 = 0;
                              tmp39 = obj1;
                              tmp40 = num5;
                              tmp41 = tmp4;
                              tmp37Result = from(obj1, num5, tmp4, undefined);
                            }
                          }
                          tmp22 = str2;
                          tmp13Result = tmp13(str2.toString());
                        }
                        if (typeof num5 === "number") {
                          if (typeof tmp4 === "string") {
                            tmp23 = globalThis;
                            _Error2 = Error;
                            tmp24 = new.target;
                            str4 = "If encoding is specified then the first argument must be a string";
                            tmp25 = new.target;
                            error1 = new Error("If encoding is specified then the first argument must be a string");
                            tmp27 = error1;
                            throw error1;
                          } else {
                            tmp47 = allocUnsafe;
                            str2 = allocUnsafe(obj, num5);
                          }
                        } else {
                          tmp43 = from;
                          num11 = 0;
                          tmp44 = obj;
                          tmp45 = num5;
                          tmp46 = tmp4;
                          str2 = from(obj, num5, tmp4, undefined);
                        }
                      }
                      num6 = 1;
                      num7 = 0;
                      if (0 < tmp12 - sum) {
                        do {
                          self[num7 + sum] = tmp13Result[num7 % tmp13Result.length];
                          num7 = num7 + 1;
                          diff = tmp12 - sum;
                        } while (num7 < diff);
                      }
                    }
                    return self;
                  }
                }
              }
            }
            rangeError = new RangeError("Out of range index");
            throw rangeError;
          }
        }
        function from(arg0, byteLength, str, arg3) {
          if (typeof byteLength === "number") {
            const _TypeError3 = TypeError;
            const typeError = new TypeError("\"value\" argument must not be a number");
            throw typeError;
          } else {
            const _ArrayBuffer2 = ArrayBuffer;
            if (typeof ArrayBuffer !== "undefined") {
              const _ArrayBuffer3 = ArrayBuffer;
              if (byteLength instanceof ArrayBuffer) {
                byteLength = byteLength.byteLength;
                if (str >= 0) {
                  if (byteLength.byteLength >= str) {
                    let num25 = arg3;
                    if (!arg3) {
                      num25 = 0;
                    }
                    if (byteLength.byteLength < str + num25) {
                      const _RangeError = RangeError;
                      const rangeError = new RangeError("'length' is out of bounds");
                      throw rangeError;
                    } else {
                      if (undefined === str) {
                        if (undefined === arg3) {
                          const _Uint8Array3 = Uint8Array;
                          let uint8Array = new Uint8Array(byteLength);
                        }
                        let prototype = Buffer;
                        if (Buffer.TYPED_ARRAY_SUPPORT) {
                          prototype = prototype.prototype;
                          uint8Array.__proto__ = prototype;
                        } else {
                          let num26 = 0;
                          if (uint8Array.length >= 0) {
                            let num27 = 1073741823;
                            let num28 = 1073741823;
                            if (prototype.TYPED_ARRAY_SUPPORT) {
                              num28 = 2147483647;
                            }
                            if (uint8Array.length >= num28) {
                              if (prototype.TYPED_ARRAY_SUPPORT) {
                                num27 = 2147483647;
                              }
                              const rangeError1 = new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + num27.toString(16) + " bytes");
                              throw rangeError1;
                            } else {
                              num26 = length4 | 0 | 0;
                            }
                          }
                          const tmp59 = createBuffer(arg0, num26);
                          let num32 = 0;
                          if (0 < num26) {
                            do {
                              tmp59[num32] = 255 & uint8Array[num32];
                              num32 = num32 + 1;
                            } while (num32 < num26);
                          }
                        }
                      }
                      if (undefined === arg3) {
                        const _Uint8Array2 = Uint8Array;
                        uint8Array = new Uint8Array(byteLength, str);
                      } else {
                        const _Uint8Array = Uint8Array;
                        uint8Array = new Uint8Array(byteLength, str, arg3);
                      }
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const rangeError2 = new RangeError("'offset' is out of bounds");
                throw rangeError2;
              }
            }
            if (typeof byteLength === "string") {
              let tmp31 = typeof str === "string";
              if (typeof str === "string") {
                tmp31 = "" !== str;
              }
              let str10 = str;
              if (!tmp31) {
                str10 = "utf8";
              }
              if (Buffer.isEncoding(str10)) {
                const tmp38 = byteLength(byteLength, str10) | 0;
                const arr3 = createBuffer(arg0, tmp38);
                const writeResult = arr3.write(byteLength, str10);
                let substr = arr3;
                if (writeResult !== tmp38) {
                  substr = arr3.slice(0, writeResult);
                }
                let tmp12 = substr;
              } else {
                const _TypeError2 = TypeError;
                const typeError1 = new TypeError("\"encoding\" must be a valid string encoding");
                throw typeError1;
              }
            } else if (Buffer.isBuffer(byteLength)) {
              let num17 = 1073741823;
              let num18 = 1073741823;
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                num18 = 2147483647;
              }
              if (byteLength.length >= num18) {
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  num17 = 2147483647;
                }
                const rangeError3 = new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + num17.toString(16) + " bytes");
                throw rangeError3;
              } else {
                const arr2 = createBuffer(arg0, length3 | 0 | 0);
                tmp12 = arr2;
                if (0 !== arr2.length) {
                  byteLength.copy(arr2, 0, 0, tmp21);
                  tmp12 = arr2;
                }
              }
            } else {
              if (byteLength) {
                const _ArrayBuffer = ArrayBuffer;
                if (typeof ArrayBuffer === "undefined") {
                  if (!("length" in byteLength)) {
                    if ("Buffer" === byteLength.type) {
                      if (closure_2(byteLength.data)) {
                        const data = byteLength.data;
                        let num2 = 0;
                        if (data.length >= 0) {
                          let num3 = 1073741823;
                          let num4 = 1073741823;
                          if (Buffer.TYPED_ARRAY_SUPPORT) {
                            num4 = 2147483647;
                          }
                          if (data.length >= num4) {
                            if (Buffer.TYPED_ARRAY_SUPPORT) {
                              num3 = 2147483647;
                            }
                            const rangeError4 = new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + num3.toString(16) + " bytes");
                            throw rangeError4;
                          } else {
                            num2 = length | 0 | 0;
                          }
                        }
                        const tmp11 = createBuffer(arg0, num2);
                        tmp12 = tmp11;
                        let num8 = 0;
                        if (0 < num2) {
                          do {
                            tmp11[num8] = 255 & data[num8];
                            num8 = num8 + 1;
                            tmp12 = tmp11;
                          } while (num8 < num2);
                        }
                      }
                    }
                  }
                } else {
                  const _ArrayBuffer4 = ArrayBuffer;
                }
                if (typeof byteLength.length === "number") {
                  if (byteLength.length == byteLength.length) {
                    let num11 = 0;
                    if (byteLength.length >= 0) {
                      let num9 = 1073741823;
                      let num10 = 1073741823;
                      if (Buffer.TYPED_ARRAY_SUPPORT) {
                        num10 = 2147483647;
                      }
                      if (byteLength.length >= num10) {
                        if (Buffer.TYPED_ARRAY_SUPPORT) {
                          num9 = 2147483647;
                        }
                        const rangeError5 = new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + num9.toString(16) + " bytes");
                        throw rangeError5;
                      } else {
                        num11 = length2 | 0 | 0;
                      }
                    }
                    const tmp18 = createBuffer(arg0, num11);
                    let tmp19 = tmp18;
                    let num15 = 0;
                    if (0 < num11) {
                      do {
                        tmp18[num15] = 255 & byteLength[num15];
                        num15 = num15 + 1;
                        tmp19 = tmp18;
                      } while (num15 < num11);
                    }
                  }
                  tmp12 = tmp19;
                }
                tmp19 = createBuffer(arg0, 0);
              }
              const _TypeError = TypeError;
              const typeError2 = new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
              throw typeError2;
            }
            return tmp12;
          }
        }
        function allocUnsafe(arg0, num) {
          if (typeof num !== "number") {
            const _TypeError = TypeError;
            const typeError = new TypeError("\"size\" argument must be a number");
            throw typeError;
          } else if (num < 0) {
            const _RangeError = RangeError;
            const rangeError = new RangeError("\"size\" argument must not be negative");
            throw rangeError;
          } else {
            let num3 = 0;
            if (num >= 0) {
              num = 1073741823;
              let num2 = 1073741823;
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                num2 = 2147483647;
              }
              if (num >= num2) {
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  num = 2147483647;
                }
                const rangeError1 = new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + num.toString(16) + " bytes");
                throw rangeError1;
              } else {
                num3 = num | 0 | 0;
              }
            }
            const tmp20Result = createBuffer(arg0, num3);
            if (!Buffer.TYPED_ARRAY_SUPPORT) {
              for (let num6 = 0; num6 < num; num6 = num6 + 1) {
                tmp20Result[num6] = 0;
              }
            }
            return tmp20Result;
          }
        }
        function byteLength(byteLength, arg1) {
          if (Buffer.isBuffer(byteLength)) {
            return byteLength.length;
          } else {
            const _ArrayBuffer = ArrayBuffer;
            if (typeof ArrayBuffer !== "undefined") {
              const _ArrayBuffer3 = ArrayBuffer;
              if (typeof ArrayBuffer.isView === "function") {
                const _ArrayBuffer4 = ArrayBuffer;
                if (!ArrayBuffer.isView(byteLength)) {
                  const _ArrayBuffer2 = ArrayBuffer;
                }
                return byteLength.byteLength;
              }
            }
            let text = byteLength;
            if (typeof byteLength !== "string") {
              text = `${byteLength}`;
            }
            let formatted = arg1;
            let flag = false;
            if (0 === text.length) {
              return 0;
            } else {
              while ("ascii" !== formatted) {
                if ("latin1" === formatted) {
                  break;
                } else if ("binary" === formatted) {
                  break;
                } else {
                  if ("utf8" !== formatted) {
                    if ("utf-8" !== formatted) {
                      if (undefined !== formatted) {
                        if ("ucs2" !== formatted) {
                          if ("ucs-2" !== formatted) {
                            if ("utf16le" !== formatted) {
                              if ("utf-16le" !== formatted) {
                                if ("hex" === formatted) {
                                  return length >>> 1;
                                } else if ("base64" === formatted) {
                                  if (text.trim) {
                                    let str13 = text.trim();
                                  } else {
                                    let str12 = "";
                                    str13 = text.replace(/^\s+|\s+$/g, "");
                                  }
                                  let str14 = "";
                                  let replaced = str13.replace(re13, "");
                                  if (replaced.length >= 2) {
                                    let str15 = "=";
                                    let tmp9 = replaced;
                                    let tmp10 = replaced;
                                    if (replaced.length % 4 !== 0) {
                                      do {
                                        let text1 = `${tmp9}=`;
                                        tmp9 = text1;
                                        tmp10 = text1;
                                        result = `${tmp9}=`.length % 4;
                                      } while (result !== 0);
                                    }
                                    str14 = tmp10;
                                  }
                                  return closure_0.toByteArray(str14).length;
                                } else if (flag) {
                                  return utf8ToBytes(text).length;
                                } else {
                                  let text2 = `${tmp2}`;
                                  formatted = `${tmp2}`.toLowerCase();
                                  flag = true;
                                  continue;
                                }
                              }
                            }
                          }
                        }
                        return 2 * length;
                      }
                    }
                  }
                  return utf8ToBytes(text).length;
                }
              }
              return length;
            }
          }
        }
        function slowToString(arg0, arg1, arg2) {
          let num = arg1;
          let tmp = undefined === arg1;
          if (!tmp) {
            tmp = num < 0;
          }
          if (tmp) {
            num = 0;
          }
          const self = this;
          if (num > this.length) {
            return "";
          } else {
            let length = arg2;
            if (tmp2) {
              length = self.length;
            }
            if (length <= 0) {
              return "";
            } else if (length >>> 0 <= num >>> 0) {
              return "";
            } else {
              let flag = false;
              if (!arg0) {
                const str = "utf8";
                flag = false;
              }
            }
            tmp2 = undefined === arg2 || length > self.length;
          }
        }
        function bidirectionalIndexOf(arg0, str, str2, arg3, arg4) {
          if (0 === arg0.length) {
            return -1;
          } else {
            let tmp = str2;
            let num2 = 0;
            if (typeof str2 !== "string") {
              tmp = arg3;
              num2 = 2147483647;
              if (str2 <= 2147483647) {
                tmp = arg3;
                num2 = str2;
                if (str2 < -2147483648) {
                  tmp = arg3;
                  num2 = -2147483648;
                }
              }
            }
            let tmp3 = +num2;
            const _isNaN = isNaN;
            if (isNaN(tmp3)) {
              let num3 = 0;
              if (!arg4) {
                num3 = arg0.length - 1;
              }
              tmp3 = num3;
            }
            let num5 = tmp3;
            if (tmp3 < 0) {
              num5 = arg0.length + tmp3;
            }
            if (num5 >= arg0.length) {
              if (arg4) {
                return -1;
              } else {
                num5 = arg0.length - 1;
              }
            } else if (num5 < 0) {
              num5 = 0;
              if (!arg4) {
                return -1;
              }
            }
            let fromResult = str;
            if (typeof str === "string") {
              fromResult = Buffer.from(str, tmp);
            }
            if (Buffer.isBuffer(fromResult)) {
              let num10 = -1;
              if (0 !== fromResult.length) {
                num10 = arrayIndexOf(arg0, fromResult, num5, tmp, arg4);
              }
              return num10;
            } else if (typeof fromResult === "number") {
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                const _Uint8Array = Uint8Array;
                if (typeof Uint8Array.prototype.indexOf === "function") {
                  const _Uint8Array2 = Uint8Array;
                  if (!arg4) {
                    const lastIndexOf = prototype.lastIndexOf;
                    const call = lastIndexOf.call;
                    typeof call === "unknown" ? lastIndexOf(tmp7, num5) : call(arg0, tmp7, num5);
                  }
                  const indexOf = prototype.indexOf;
                  const call2 = indexOf.call;
                  typeof call2 === "unknown" ? indexOf(tmp7, num5) : call2(arg0, tmp7, num5);
                }
              }
              items = [fromResult & 255];
              return arrayIndexOf(arg0, items, num5, tmp, arg4);
            } else {
              const _TypeError = TypeError;
              const typeError = new TypeError("val must be string, number or Buffer");
              throw typeError;
            }
          }
        }
        function arrayIndexOf(readUInt16BE, readUInt16BE2, arg2, arg3, arg4) {
          let tmp13;
          let num = 1;
          let result1 = length2;
          let result = length;
          let num2 = 1;
          let result2 = arg2;
          if (undefined !== arg3) {
            const _String = String;
            const formatted = String(arg3).toLowerCase();
            if ("ucs2" !== formatted) {
              if ("ucs-2" !== formatted) {
                if ("utf16le" !== formatted) {
                  num = 1;
                  result1 = length2;
                  result = length;
                  num2 = 1;
                  result2 = arg2;
                }
              }
            }
            if (readUInt16BE.length >= 2) {
              if (readUInt16BE2.length >= 2) {
                result = length / 2;
                result1 = length2 / 2;
                result2 = arg2 / 2;
                num = 2;
                num2 = 2;
              }
            }
            return -1;
          }
          if (arg4) {
            let num7 = -1;
            if (result2 < result) {
              while (true) {
                tmp13 = num7;
                if (1 === num) {
                  let uInt16BE = readUInt16BE[result2];
                } else {
                  uInt16BE = readUInt16BE.readUInt16BE(result2 * num);
                }
                let tmp16 = -1 === tmp13;
                let num8 = 0;
                if (!tmp16) {
                  num8 = result2 - tmp13;
                }
                if (1 === num) {
                  let uInt16BE1 = readUInt16BE2[num8];
                } else {
                  uInt16BE1 = readUInt16BE2.readUInt16BE(num8 * num);
                }
                if (uInt16BE === uInt16BE1) {
                  if (tmp16) {
                    tmp13 = result2;
                  }
                  let num9 = tmp13;
                  let diff = result2;
                  if (result2 - tmp13 + 1 === result1) {
                    break;
                  }
                } else {
                  diff = result2;
                  if (-1 !== tmp13) {
                    diff = result2 - (result2 - tmp13);
                  }
                  num9 = -1;
                }
                result2 = diff + 1;
                num7 = num9;
              }
              return tmp13 * num2;
            }
          } else {
            let diff1 = result2;
            if (result2 + result1 > result) {
              diff1 = result - result1;
            }
            if (diff1 >= 0) {
              while (true) {
                let num5 = 0;
                let flag = true;
                if (0 < result1) {
                  while (true) {
                    let sum = diff1 + num5;
                    if (1 === num) {
                      let uInt16BE2 = readUInt16BE[sum];
                    } else {
                      uInt16BE2 = readUInt16BE.readUInt16BE(sum * num);
                    }
                    if (1 === num) {
                      let uInt16BE3 = readUInt16BE2[num5];
                    } else {
                      uInt16BE3 = readUInt16BE2.readUInt16BE(num5 * num);
                    }
                    flag = false;
                    if (uInt16BE2 !== uInt16BE3) {
                      break;
                    } else {
                      let sum1 = num5 + 1;
                      num5 = sum1;
                      flag = true;
                      if (sum1 >= result1) {
                        break;
                      }
                    }
                  }
                }
                if (flag) {
                  break;
                } else {
                  diff1 = diff1 - 1;
                }
              }
              return diff1;
            }
          }
          return -1;
        }
        function utf8Slice(arg0, arg1, arg2) {
          let sum1;
          let sum = arg1;
          const bound = Math.min(arg0.length, arg2);
          items = [];
          if (arg1 < bound) {
            do {
              let tmp4 = arg0[sum];
              let num = 4;
              if (tmp4 <= 239) {
                let num2 = 3;
                if (tmp4 <= 223) {
                  let num3 = 1;
                  if (tmp4 > 191) {
                    num3 = 2;
                  }
                  num2 = num3;
                }
                num = num2;
              }
              let tmp7 = null;
              let tmp8 = tmp3;
              if (sum + num <= bound) {
                if (1 === num) {
                  tmp7 = null;
                  tmp8 = tmp3;
                  if (tmp4 < 128) {
                    tmp7 = tmp4;
                    tmp8 = tmp3;
                  }
                } else if (2 === num) {
                  let tmp19 = arg0[sum + 1];
                  let tmp20 = 192 & tmp19;
                  let tmp21 = 128 === tmp20;
                  let tmp22 = tmp3;
                  if (128 === tmp20) {
                    let tmp23 = (31 & tmp4) << 6 | 63 & tmp19;
                    tmp21 = tmp23 > 127;
                    tmp22 = tmp23;
                  }
                  tmp7 = null;
                  tmp8 = tmp22;
                  if (tmp21) {
                    tmp7 = tmp22;
                    tmp8 = tmp22;
                  }
                } else if (3 === num) {
                  let tmp12 = arg0[sum + 1];
                  let tmp13 = arg0[sum + 2];
                  let tmp14 = 192 & tmp12;
                  let tmp15 = 128 === tmp14;
                  if (128 === tmp14) {
                    tmp15 = 128 === (192 & tmp13);
                  }
                  let tmp16 = tmp3;
                  if (tmp15) {
                    let tmp17 = (15 & tmp4) << 12 | (63 & tmp12) << 6 | 63 & tmp13;
                    tmp15 = tmp17 > 2047;
                    tmp16 = tmp17;
                  }
                  if (tmp15) {
                    let tmp18 = tmp16 < 55296 || tmp16 > 57343;
                    tmp15 = tmp18;
                  }
                  tmp7 = null;
                  tmp8 = tmp16;
                  if (tmp15) {
                    tmp7 = tmp16;
                    tmp8 = tmp16;
                  }
                } else {
                  tmp7 = null;
                  tmp8 = tmp3;
                  if (4 === num) {
                    let tmp30 = arg0[sum + 1];
                    let tmp31 = arg0[sum + 2];
                    let tmp32 = arg0[sum + 3];
                    let tmp33 = 192 & tmp30;
                    let tmp9 = 128 === tmp33;
                    if (128 === tmp33) {
                      tmp9 = 128 === (192 & tmp31);
                    }
                    if (tmp9) {
                      tmp9 = 128 === (192 & tmp32);
                    }
                    let tmp10 = tmp3;
                    if (tmp9) {
                      let tmp11 = (15 & tmp4) << 18 | (63 & tmp30) << 12 | (63 & tmp31) << 6 | 63 & tmp32;
                      tmp9 = tmp11 > 65535;
                      tmp10 = tmp11;
                    }
                    if (tmp9) {
                      tmp9 = tmp10 < 1114112;
                    }
                    tmp7 = null;
                    tmp8 = tmp10;
                    if (tmp9) {
                      tmp7 = tmp10;
                      tmp8 = tmp10;
                    }
                  }
                }
              }
              let num4 = 1;
              let num5 = 65533;
              if (null !== tmp7) {
                num4 = num;
                num5 = tmp7;
                if (tmp7 > 65535) {
                  let diff = tmp7 - 65536;
                  let arr = items.push(diff >>> 10 & 1023 | 55296);
                  num5 = 56320 | 1023 & diff;
                  num4 = num;
                }
              }
              arr = items.push(num5);
              sum = sum + num4;
              tmp3 = tmp8;
            } while (sum < bound);
          }
          if (items.length <= c12) {
            const _String3 = String;
            const _String4 = String;
            let str2 = fromCharCode2.apply(String, items);
          } else {
            let num6 = 0;
            let str = "";
            str2 = "";
            if (0 < length) {
              do {
                let _String = String;
                let _String2 = String;
                sum1 = num6 + c12;
                str = `${tmp27(String, arr.slice(num6, tmp29))}`;
                str2 = str;
                num6 = sum1;
              } while (sum1 < length);
            }
          }
          return str2;
        }
        function utf8ToBytes(str, arg1) {
          let num = arg1;
          if (!arg1) {
            num = Infinity;
          }
          items = [];
          let num2 = 0;
          let tmp = null;
          if (0 < str.length) {
            while (true) {
              let charCodeAtResult = str.charCodeAt(num2);
              if (charCodeAtResult > 55295) {
                if (charCodeAtResult < 57344) {
                  if (tmp) {
                    if (charCodeAtResult < 56320) {
                      let diff = num - 3;
                      let tmp12 = charCodeAtResult;
                      let tmp13 = diff;
                      if (-1 < diff) {
                        let arr = items.push(239, 191, 189);
                        tmp12 = charCodeAtResult;
                        tmp13 = diff;
                      }
                    } else {
                      let sum = 65536 + (tmp - 55296 << 10 | charCodeAtResult - 56320);
                      let tmp10 = num;
                    }
                    if (sum < 128) {
                      let diff1 = tmp10 - 1;
                      if (diff1 >= 0) {
                        arr = items.push(sum);
                        tmp12 = null;
                        tmp13 = diff1;
                      }
                    } else if (sum < 2048) {
                      let diff2 = tmp10 - 2;
                      if (diff2 >= 0) {
                        let arr1 = items.push(sum >> 6 | 192, 63 & sum | 128);
                        tmp12 = null;
                        tmp13 = diff2;
                      }
                    } else if (sum < 65536) {
                      let diff3 = tmp10 - 3;
                      if (diff3 >= 0) {
                        let arr2 = items.push(sum >> 12 | 224, sum >> 6 & 63 | 128, 63 & sum | 128);
                        tmp12 = null;
                        tmp13 = diff3;
                      }
                    } else if (sum >= 1114112) {
                      break;
                    } else {
                      let diff4 = tmp10 - 4;
                      if (diff4 >= 0) {
                        let arr3 = items.push(sum >> 18 | 240, sum >> 12 & 63 | 128, sum >> 6 & 63 | 128, 63 & sum | 128);
                        tmp12 = null;
                        tmp13 = diff4;
                      }
                    }
                  } else if (charCodeAtResult > 56319) {
                    let diff5 = num - 3;
                    tmp12 = tmp;
                    tmp13 = diff5;
                    if (-1 < diff5) {
                      let arr4 = items.push(239, 191, 189);
                      tmp12 = tmp;
                      tmp13 = diff5;
                    }
                  } else {
                    tmp12 = charCodeAtResult;
                    tmp13 = num;
                    if (num2 + 1 === length) {
                      let diff6 = num - 3;
                      tmp12 = tmp;
                      tmp13 = diff6;
                      if (-1 < diff6) {
                        let arr5 = items.push(239, 191, 189);
                        tmp12 = tmp;
                        tmp13 = diff6;
                      }
                    }
                  }
                  num2 = num2 + 1;
                  tmp = tmp12;
                  num = tmp13;
                }
              }
              let tmp6 = tmp;
              let tmp7 = num;
              if (tmp) {
                let diff7 = num - 3;
                tmp6 = diff7 > -1;
                tmp7 = diff7;
              }
              sum = charCodeAtResult;
              tmp10 = tmp7;
              if (tmp6) {
                let arr6 = items.push(239, 191, 189);
                sum = charCodeAtResult;
                tmp10 = tmp7;
              }
            }
            const _Error = Error;
            const error = new Error("Invalid code point");
            throw error;
          }
          return items;
        }
        constants = closure_1(4);
        closure_1 = closure_1(5);
        closure_2 = closure_1(6);
        constants.Buffer = Buffer;
        constants.SlowBuffer = function SlowBuffer(arg0) {
          let num = arg0;
          if (+arg0 != arg0) {
            num = 0;
          }
          return Buffer.alloc(+num);
        };
        constants.INSPECT_MAX_BYTES = 50;
        if (undefined !== TYPED_ARRAY_SUPPORT.TYPED_ARRAY_SUPPORT) {
          TYPED_ARRAY_SUPPORT = TYPED_ARRAY_SUPPORT.TYPED_ARRAY_SUPPORT;
        } else {
          TYPED_ARRAY_SUPPORT = (function typedArraySupport() {
            try {
              const _Uint8Array = Uint8Array;
              const uint8Array = new Uint8Array(1);
              const _Uint8Array2 = Uint8Array;
              const merged = Object.assign({ foo: null });
              merged[0] = function foo() {
                return 42;
              };
              uint8Array.__proto__ = merged;
              let tmp6 = 42 === uint8Array.foo();
              if (tmp6) {
                tmp6 = typeof obj2.subarray === "function";
              }
              if (tmp6) {
                tmp6 = 0 === obj2.subarray(1, 1).byteLength;
              }
              return tmp6;
            } catch (err) {
              return false;
            }
          })();
        }
        Buffer.TYPED_ARRAY_SUPPORT = TYPED_ARRAY_SUPPORT;
        let num2 = 1073741823;
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          num2 = 2147483647;
        }
        constants.kMaxLength = num2;
        Buffer.poolSize = 8192;
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          let _Uint8Array = Uint8Array;
          class Buffer {
            constructor(arg0, arg1, arg2) {
              self = this;
              tmp = Buffer;
              if (!Buffer.TYPED_ARRAY_SUPPORT) {
                if (!(self instanceof tmp)) {
                  tmpResult = tmp(TYPED_ARRAY_SUPPORT, arg1, arg2);
                  tmp3 = tmpResult;
                  return tmpResult;
                }
              }
              if (typeof TYPED_ARRAY_SUPPORT === "number") {
                if (typeof arg1 === "string") {
                  tmp4 = globalThis;
                  _Error = Error;
                  tmp5 = new.target;
                  str = "If encoding is specified then the first argument must be a string";
                  tmp6 = new.target;
                  error = new Error("If encoding is specified then the first argument must be a string");
                  tmp8 = error;
                  throw error;
                } else {
                  tmp14 = allocUnsafe;
                  num2 = 0;
                  return allocUnsafe(self, TYPED_ARRAY_SUPPORT);
                }
              } else {
                tmp9 = from;
                num = 0;
                tmp10 = self;
                tmp11 = TYPED_ARRAY_SUPPORT;
                tmp12 = arg1;
                tmp13 = arg2;
                return from(self, TYPED_ARRAY_SUPPORT, arg1, arg2);
              }
            }
            static _augment(arg0) {
              TYPED_ARRAY_SUPPORT.__proto__ = Buffer.prototype;
              return TYPED_ARRAY_SUPPORT;
            }
            static from(arg0, arg1, arg2) {
              return from(null, TYPED_ARRAY_SUPPORT, arg1, arg2);
            }
            static alloc(arg0, arg1, arg2) {
              if (typeof TYPED_ARRAY_SUPPORT !== "number") {
                tmp17 = globalThis;
                _TypeError = TypeError;
                tmp18 = new.target;
                str2 = "\"size\" argument must be a number";
                tmp19 = new.target;
                typeError = new TypeError("\"size\" argument must be a number");
                tmp21 = typeError;
                throw typeError;
              } else {
                num = 0;
                if (TYPED_ARRAY_SUPPORT < 0) {
                  tmp12 = globalThis;
                  _RangeError = RangeError;
                  tmp13 = new.target;
                  str = "\"size\" argument must not be negative";
                  tmp14 = new.target;
                  rangeError = new RangeError("\"size\" argument must not be negative");
                  tmp16 = rangeError;
                  throw rangeError;
                } else {
                  if (TYPED_ARRAY_SUPPORT <= 0) {
                    tmp10 = createBuffer;
                    tmp11 = null;
                    tmp4 = createBuffer(null, TYPED_ARRAY_SUPPORT);
                  } else {
                    tmp = arg1;
                    if (undefined !== arg1) {
                      tmp5 = arg2;
                      if (typeof arg2 === "string") {
                        tmp6 = createBuffer;
                        tmp7 = null;
                        obj = createBuffer(null, TYPED_ARRAY_SUPPORT);
                        fillResult = obj.fill(arg1, arg2);
                      } else {
                        tmp22 = createBuffer;
                        tmp23 = null;
                        obj2 = createBuffer(null, TYPED_ARRAY_SUPPORT);
                        fillResult = obj2.fill(arg1);
                      }
                      tmp9 = fillResult;
                    } else {
                      tmp2 = createBuffer;
                      tmp3 = null;
                      tmp4 = createBuffer(null, TYPED_ARRAY_SUPPORT);
                    }
                  }
                  return tmp4;
                }
              }
            }
            static allocUnsafe(arg0) {
              return allocUnsafe(null, TYPED_ARRAY_SUPPORT);
            }
            static allocUnsafeSlow(arg0) {
              return allocUnsafe(null, TYPED_ARRAY_SUPPORT);
            }
            static isBuffer(arg0) {
              tmp = null == TYPED_ARRAY_SUPPORT || !TYPED_ARRAY_SUPPORT._isBuffer;
              return !tmp;
            }
            static compare(arg0, arg1) {
              obj = Buffer;
              if (Buffer.isBuffer(TYPED_ARRAY_SUPPORT)) {
                tmp = arg1;
                if (obj.isBuffer(arg1)) {
                  if (TYPED_ARRAY_SUPPORT === arg1) {
                    num6 = 0;
                    return 0;
                  } else {
                    length = TYPED_ARRAY_SUPPORT.length;
                    length2 = arg1.length;
                    tmp3 = globalThis;
                    _Math = Math;
                    bound = Math.min(length, length2);
                    num = 0;
                    num2 = 1;
                    num3 = 0;
                    tmp5 = length2;
                    tmp6 = length;
                    if (0 < bound) {
                      tmp7 = num3;
                      while (TYPED_ARRAY_SUPPORT[num3] === arg1[num3]) {
                        num3 = num3 + 1;
                        tmp5 = length2;
                        tmp6 = length;
                      }
                      tmp6 = TYPED_ARRAY_SUPPORT[num3];
                      tmp5 = arg1[num3];
                    }
                    num4 = -1;
                    if (tmp6 >= tmp5) {
                      num5 = 0;
                      if (tmp5 < tmp6) {
                        num5 = 1;
                      }
                      num4 = num5;
                    }
                    return num4;
                  }
                }
              }
              typeError = new TypeError("Arguments must be Buffers");
              throw typeError;
            }
            static isEncoding(arg0) {
              str = String(TYPED_ARRAY_SUPPORT);
              switch (str.toLowerCase()) {
                case "hex":
                  flag = true;
                  return true;
                case "utf8":
                  flag = true;
                  return true;
                case "utf-8":
                  flag = true;
                  return true;
                case "ascii":
                  flag = true;
                  return true;
                case "latin1":
                  flag = true;
                  return true;
                case "binary":
                  flag = true;
                  return true;
                case "base64":
                  flag = true;
                  return true;
                case "ucs2":
                  flag = true;
                  return true;
                case "ucs-2":
                  flag = true;
                  return true;
                case "utf16le":
                  flag = true;
                  return true;
                case "utf-16le":
                  flag = true;
                  return true;
                default:
                  flag2 = false;
                  return false;
              }
              return;
            }
            static concat(arg0, arg1) {
              if (closure_2(TYPED_ARRAY_SUPPORT)) {
                num = 0;
                if (0 === TYPED_ARRAY_SUPPORT.length) {
                  tmp17 = Buffer;
                  return Buffer.alloc(0);
                } else {
                  num5 = arg1;
                  if (undefined === arg1) {
                    num2 = 1;
                    num3 = 0;
                    num4 = 0;
                    num5 = 0;
                    if (0 < TYPED_ARRAY_SUPPORT.length) {
                      do {
                        num4 = num4 + TYPED_ARRAY_SUPPORT[num3].length;
                        num3 = num3 + 1;
                        num5 = num4;
                        length = TYPED_ARRAY_SUPPORT.length;
                      } while (num3 < length);
                    }
                  }
                  tmp6 = Buffer;
                  allocUnsafeResult = Buffer.allocUnsafe(num5);
                  num6 = 1;
                  num7 = 0;
                  num8 = 0;
                  if (0 < TYPED_ARRAY_SUPPORT.length) {
                    arr = TYPED_ARRAY_SUPPORT[num8];
                    tmp8 = Buffer;
                    tmp9 = num7;
                    tmp10 = num8;
                    while (Buffer.isBuffer(arr)) {
                      copyResult = arr.copy(allocUnsafeResult, num7);
                      num7 = num7 + arr.length;
                      num8 = num8 + 1;
                    }
                    tmp11 = globalThis;
                    _TypeError2 = TypeError;
                    tmp12 = new.target;
                    str2 = "\"list\" argument must be an Array of Buffers";
                    tmp13 = new.target;
                    typeError = new TypeError("\"list\" argument must be an Array of Buffers");
                    tmp15 = typeError;
                    throw typeError;
                  }
                  return allocUnsafeResult;
                }
              } else {
                tmp = globalThis;
                _TypeError = TypeError;
                tmp2 = new.target;
                str = "\"list\" argument must be an Array of Buffers";
                tmp3 = new.target;
                typeError1 = new TypeError("\"list\" argument must be an Array of Buffers");
                tmp5 = typeError1;
                throw typeError1;
              }
            }
            swap16() {
              self = this;
              length = this.length;
              if (length % 2 !== 0) {
                tmp2 = globalThis;
                _RangeError = RangeError;
                tmp3 = new.target;
                str = "Buffer size must be a multiple of 16-bits";
                tmp4 = new.target;
                rangeError = new RangeError("Buffer size must be a multiple of 16-bits");
                tmp6 = rangeError;
                throw rangeError;
              } else {
                num = 1;
                for (let num2 = 0; num2 < length; num2 = num2 + 2) {
                  sum = num2 + 1;
                  self[num2] = self[sum];
                  self[sum] = self[num2];
                }
                return self;
              }
            }
            swap32() {
              self = this;
              length = this.length;
              if (length % 4 !== 0) {
                tmp4 = globalThis;
                _RangeError = RangeError;
                tmp5 = new.target;
                str = "Buffer size must be a multiple of 32-bits";
                tmp6 = new.target;
                rangeError = new RangeError("Buffer size must be a multiple of 32-bits");
                tmp8 = rangeError;
                throw rangeError;
              } else {
                num = 3;
                num2 = 1;
                num3 = 2;
                for (let num4 = 0; num4 < length; num4 = num4 + 4) {
                  sum = num4 + 3;
                  self[num4] = self[sum];
                  self[sum] = self[num4];
                  sum1 = num4 + 1;
                  sum2 = num4 + 2;
                  self[sum1] = self[sum2];
                  self[sum2] = self[sum1];
                }
                return self;
              }
            }
            swap64() {
              self = this;
              length = this.length;
              if (length % 8 !== 0) {
                tmp8 = globalThis;
                _RangeError = RangeError;
                tmp9 = new.target;
                str = "Buffer size must be a multiple of 64-bits";
                tmp10 = new.target;
                rangeError = new RangeError("Buffer size must be a multiple of 64-bits");
                tmp12 = rangeError;
                throw rangeError;
              } else {
                num2 = 7;
                num3 = 1;
                num4 = 6;
                num5 = 2;
                num6 = 5;
                num7 = 3;
                num8 = 4;
                for (let num = 0; num < length; num = num + 8) {
                  sum = num + 7;
                  self[num] = self[sum];
                  self[sum] = self[num];
                  sum1 = num + 1;
                  sum2 = num + 6;
                  self[sum1] = self[sum2];
                  self[sum2] = self[sum1];
                  sum3 = num + 2;
                  sum4 = num + 5;
                  self[sum3] = self[sum4];
                  self[sum4] = self[sum3];
                  sum5 = num + 3;
                  sum6 = num + 4;
                  self[sum5] = self[sum6];
                  self[sum6] = self[sum5];
                }
                return self;
              }
            }
            toString() {
              self = this;
              tmp = this.length | 0;
              if (0 === tmp) {
                return "";
              } else {
                if (0 === arguments.length) {
                  tmp5 = utf8Slice;
                  applyResult = utf8Slice(self, 0, tmp);
                } else {
                  tmp2 = slowToString;
                  tmp3 = arguments;
                  applyResult = slowToString(...arguments);
                }
                tmp6 = applyResult;
              }
              return;
            }
            equals(arg0) {
              obj = Buffer;
              if (Buffer.isBuffer(TYPED_ARRAY_SUPPORT)) {
                tmp7 = this === TYPED_ARRAY_SUPPORT;
                if (!tmp7) {
                  num = 0;
                  tmp7 = 0 === obj.compare(tmp6, TYPED_ARRAY_SUPPORT);
                }
                return tmp7;
              } else {
                tmp = globalThis;
                _TypeError = TypeError;
                tmp2 = new.target;
                str = "Argument must be a Buffer";
                tmp3 = new.target;
                typeError = new TypeError("Argument must be a Buffer");
                tmp5 = typeError;
                throw typeError;
              }
            }
            inspect() {
              self = this;
              INSPECT_MAX_BYTES = closure_0.INSPECT_MAX_BYTES;
              str = "";
              if (this.length > 0) {
                str2 = "hex";
                str3 = self.toString("hex", 0, INSPECT_MAX_BYTES);
                match = str3.match(/.{2}/g);
                str4 = " ";
                joined = match.join(" ");
                text = joined;
                if (self.length > INSPECT_MAX_BYTES) {
                  str5 = " ... ";
                  text = `${tmp} ... `;
                }
                str = text;
              }
              return "<Buffer " + str + ">";
            }
            compare(arg0, arg1, arg2, arg3, arg4) {
              if (Buffer.isBuffer(TYPED_ARRAY_SUPPORT)) {
                num = arg1;
                if (undefined === arg1) {
                  num = 0;
                }
                tmp6 = arg2;
                if (undefined === arg2) {
                  num2 = 0;
                  if (TYPED_ARRAY_SUPPORT) {
                    num2 = TYPED_ARRAY_SUPPORT.length;
                  }
                  tmp6 = num2;
                }
                num3 = arg3;
                if (undefined === arg3) {
                  num3 = 0;
                }
                self = this;
                length = arg4;
                if (undefined === arg4) {
                  length = self.length;
                }
                num4 = 0;
                if (num >= 0) {
                  if (tmp6 <= TYPED_ARRAY_SUPPORT.length) {
                    if (num3 >= 0) {
                      if (length <= self.length) {
                        if (num3 >= length) {
                          if (num >= tmp6) {
                            return 0;
                          }
                        }
                        if (num3 >= length) {
                          num9 = -1;
                          return -1;
                        } else if (num >= tmp6) {
                          num8 = 1;
                          return 1;
                        } else if (self === TYPED_ARRAY_SUPPORT) {
                          return 0;
                        } else {
                          tmp15 = length >>> 0;
                          tmp16 = num3 >>> 0;
                          diff = tmp15 - tmp16;
                          tmp18 = tmp6 >>> 0;
                          tmp19 = num >>> 0;
                          diff1 = tmp18 - tmp19;
                          tmp21 = globalThis;
                          _Math = Math;
                          bound = Math.min(diff, diff1);
                          substr = self.slice(tmp16, tmp15);
                          substr1 = TYPED_ARRAY_SUPPORT.slice(tmp19, tmp18);
                          num10 = 1;
                          num5 = 0;
                          tmp8 = diff1;
                          tmp9 = diff;
                          if (0 < bound) {
                            tmp7 = num5;
                            while (substr[num5] === substr1[num5]) {
                              num5 = num5 + 1;
                              tmp8 = diff1;
                              tmp9 = diff;
                            }
                            tmp9 = substr[num5];
                            tmp8 = substr1[num5];
                          }
                          num6 = -1;
                          if (tmp9 >= tmp8) {
                            num7 = 0;
                            if (tmp8 < tmp9) {
                              num7 = 1;
                            }
                            num6 = num7;
                          }
                          return num6;
                        }
                      }
                    }
                  }
                }
                tmp10 = globalThis;
                _RangeError = RangeError;
                tmp11 = new.target;
                str2 = "out of range index";
                tmp12 = new.target;
                rangeError = new RangeError("out of range index");
                tmp14 = rangeError;
                throw rangeError;
              } else {
                tmp = globalThis;
                _TypeError = TypeError;
                tmp2 = new.target;
                str = "Argument must be a Buffer";
                tmp3 = new.target;
                typeError = new TypeError("Argument must be a Buffer");
                tmp5 = typeError;
                throw typeError;
              }
            }
            includes(arg0, arg1, arg2) {
              return -1 !== this.indexOf(TYPED_ARRAY_SUPPORT, arg1, arg2);
            }
            indexOf(arg0, arg1, arg2) {
              return bidirectionalIndexOf(this, TYPED_ARRAY_SUPPORT, arg1, arg2, true);
            }
            lastIndexOf(arg0, arg1, arg2) {
              return bidirectionalIndexOf(this, TYPED_ARRAY_SUPPORT, arg1, arg2, false);
            }
            write(arg0, arg1, arg2, arg3) {
              self = this;
              if (undefined === arg1) {
                length = self.length;
                str2 = "utf8";
                num = 0;
              } else {
                tmp12 = arg2;
                if (undefined === arg2) {
                  if (typeof arg1 === "string") {
                    length = self.length;
                    num = 0;
                    str2 = arg1;
                  }
                }
                tmp = globalThis;
                _isFinite = isFinite;
                if (isFinite(arg1)) {
                  tmp6 = arg1 | 0;
                  _isFinite2 = isFinite;
                  str2 = arg2;
                  num = tmp6;
                  if (isFinite(arg2)) {
                    str2 = arg3;
                    tmp7 = arg2 | 0;
                    length = tmp7;
                    num = tmp6;
                    if (undefined === arg3) {
                      str2 = "utf8";
                      length = tmp7;
                      num = tmp6;
                    }
                  }
                } else {
                  _Error = Error;
                  tmp2 = new.target;
                  str = "Buffer.write(string, encoding, offset[, length]) is no longer supported";
                  tmp3 = new.target;
                  error = new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                  tmp5 = error;
                  throw error;
                }
              }
              diff = self.length - num;
              tmp9 = undefined === length || length > diff;
              if (tmp9) {
                length = diff;
              }
              if (TYPED_ARRAY_SUPPORT.length <= 0) {
                if (num <= self.length) {
                  if (!str2) {
                    str2 = "utf8";
                  }
                  flag = false;
                  tmp10 = str2;
                }
              } else if (length >= 0) {
              }
              rangeError = new RangeError("Attempt to write outside buffer bounds");
              throw rangeError;
            }
            toJSON() {
              slice = Array.prototype.slice;
              call = slice.call;
              tmp = this._arr || this;
              if (typeof call === "unknown") {
                num = 0;
                substr = slice(0);
              } else {
                num2 = 0;
                substr = call(tmp, 0);
              }
              return { type: "Buffer", data: substr };
            }
            slice(arg0, arg1) {
              self = this;
              length = this.length;
              tmp = ~~TYPED_ARRAY_SUPPORT;
              if (tmp < 0) {
                num = tmp + length;
                if (num < 0) {
                  num = 0;
                }
              } else {
                num = tmp;
                if (tmp > length) {
                  num = length;
                }
              }
              tmp2 = length;
              if (undefined !== arg1) {
                tmp2 = ~~arg1;
              }
              if (tmp2 < 0) {
                num2 = tmp2 + length;
                if (num2 < 0) {
                  num2 = 0;
                }
              } else {
                num2 = tmp2;
                if (tmp2 > length) {
                  num2 = length;
                }
              }
              if (num2 < num) {
                num2 = num;
              }
              tmp3 = Buffer;
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                subarrayResult = self.subarray(num, num2);
                subarrayResult.__proto__ = tmp3.prototype;
                tmp15 = subarrayResult;
              } else {
                diff = num2 - num;
                obj = Object.create(tmp3.prototype);
                if (!tmp3.TYPED_ARRAY_SUPPORT) {
                  if (!(obj instanceof tmp3)) {
                    obj1 = Object.create(tmp3.prototype);
                    if (!tmp3.TYPED_ARRAY_SUPPORT) {
                      if (!(obj1 instanceof tmp3)) {
                        tmp3Result = tmp3(diff, undefined, undefined);
                      }
                      tmp8 = tmp3Result;
                    }
                    if (typeof diff === "number") {
                      if (typeof undefined === "string") {
                        tmp9 = globalThis;
                        _Error = Error;
                        tmp10 = new.target;
                        str = "If encoding is specified then the first argument must be a string";
                        tmp11 = new.target;
                        error = new Error("If encoding is specified then the first argument must be a string");
                        tmp13 = error;
                        throw error;
                      } else {
                        tmp25 = allocUnsafe;
                        tmp3Result = allocUnsafe(obj1, diff);
                      }
                    } else {
                      tmp22 = from;
                      num5 = 0;
                      tmp23 = obj1;
                      tmp24 = diff;
                      tmp3Result = from(obj1, diff, undefined, undefined);
                    }
                  }
                  tmp14 = tmp8;
                  num3 = 1;
                  tmp15 = tmp8;
                  num4 = 0;
                  if (0 < diff) {
                    do {
                      tmp8[num4] = self[num4 + num];
                      num4 = num4 + 1;
                      tmp15 = tmp8;
                    } while (num4 < diff);
                  }
                }
                if (typeof diff === "number") {
                  if (typeof undefined === "string") {
                    tmp16 = globalThis;
                    _Error2 = Error;
                    tmp17 = new.target;
                    str2 = "If encoding is specified then the first argument must be a string";
                    tmp18 = new.target;
                    error1 = new Error("If encoding is specified then the first argument must be a string");
                    tmp20 = error1;
                    throw error1;
                  } else {
                    tmp29 = allocUnsafe;
                    tmp8 = allocUnsafe(obj, diff);
                  }
                } else {
                  tmp26 = from;
                  num6 = 0;
                  tmp27 = obj;
                  tmp28 = diff;
                  tmp8 = from(obj, diff, undefined, undefined);
                }
              }
              return tmp15;
            }
            readUIntLE(arg0, arg1, arg2) {
              self = this;
              tmp = TYPED_ARRAY_SUPPORT | 0;
              tmp2 = arg1 | 0;
              if (!arg2) {
                num = 1;
                num2 = 0;
                if (tmp % 1 === 0) {
                  if (tmp >= 0) {
                    if (tmp + tmp2 > tmp3) {
                      tmp4 = globalThis;
                      _RangeError = RangeError;
                      tmp5 = new.target;
                      str = "Trying to access beyond buffer length";
                      tmp6 = new.target;
                      rangeError = new RangeError("Trying to access beyond buffer length");
                      tmp8 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp9 = globalThis;
                _RangeError2 = RangeError;
                tmp10 = new.target;
                str2 = "offset is not uint";
                tmp11 = new.target;
                rangeError1 = new RangeError("offset is not uint");
                tmp13 = rangeError1;
                throw rangeError1;
              }
              tmp14 = self[tmp];
              num3 = 256;
              tmp15 = tmp14;
              num4 = 1;
              if (1 < tmp2) {
                sum = tmp14 + self[tmp + num4] * num3;
                sum1 = num4 + 1;
                tmp18 = num3;
                tmp15 = sum;
                while (sum1 < tmp2) {
                  num3 = num3 * 256;
                  num4 = sum1;
                  tmp14 = sum;
                  tmp15 = sum;
                  if (!num3) {
                    break;
                  }
                }
              }
              return tmp15;
            }
            readUIntBE(arg0, arg1, arg2) {
              self = this;
              tmp = TYPED_ARRAY_SUPPORT | 0;
              tmp2 = arg1 | 0;
              if (!arg2) {
                num = 1;
                num2 = 0;
                if (tmp % 1 === 0) {
                  if (tmp >= 0) {
                    if (tmp + tmp2 > tmp3) {
                      tmp4 = globalThis;
                      _RangeError = RangeError;
                      tmp5 = new.target;
                      str = "Trying to access beyond buffer length";
                      tmp6 = new.target;
                      rangeError = new RangeError("Trying to access beyond buffer length");
                      tmp8 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp9 = globalThis;
                _RangeError2 = RangeError;
                tmp10 = new.target;
                str2 = "offset is not uint";
                tmp11 = new.target;
                rangeError1 = new RangeError("offset is not uint");
                tmp13 = rangeError1;
                throw rangeError1;
              }
              diff = tmp2 - 1;
              tmp15 = self[tmp + diff];
              num3 = 256;
              tmp16 = tmp15;
              if (0 < diff) {
                diff1 = diff - 1;
                sum = tmp15 + self[tmp + diff1] * num3;
                tmp19 = num3;
                tmp16 = sum;
                while (0 < diff1) {
                  num3 = num3 * 256;
                  tmp15 = sum;
                  diff = diff1;
                  tmp16 = sum;
                  if (!num3) {
                    break;
                  }
                }
              }
              return tmp16;
            }
            readUInt8(arg0, arg1) {
              if (!arg1) {
                num = 1;
                num2 = 0;
                if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                  if (TYPED_ARRAY_SUPPORT >= 0) {
                    if (TYPED_ARRAY_SUPPORT + 1 > tmp) {
                      tmp2 = globalThis;
                      _RangeError = RangeError;
                      tmp3 = new.target;
                      str = "Trying to access beyond buffer length";
                      tmp4 = new.target;
                      rangeError = new RangeError("Trying to access beyond buffer length");
                      tmp6 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp7 = globalThis;
                _RangeError2 = RangeError;
                tmp8 = new.target;
                str2 = "offset is not uint";
                tmp9 = new.target;
                rangeError1 = new RangeError("offset is not uint");
                tmp11 = rangeError1;
                throw rangeError1;
              }
              return this[TYPED_ARRAY_SUPPORT];
            }
            readUInt16LE(arg0, arg1) {
              self = this;
              if (!arg1) {
                num = 1;
                num2 = 0;
                if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                  if (TYPED_ARRAY_SUPPORT >= 0) {
                    num3 = 2;
                    if (TYPED_ARRAY_SUPPORT + 2 > tmp) {
                      tmp2 = globalThis;
                      _RangeError = RangeError;
                      tmp3 = new.target;
                      str = "Trying to access beyond buffer length";
                      tmp4 = new.target;
                      rangeError = new RangeError("Trying to access beyond buffer length");
                      tmp6 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp7 = globalThis;
                _RangeError2 = RangeError;
                tmp8 = new.target;
                str2 = "offset is not uint";
                tmp9 = new.target;
                rangeError1 = new RangeError("offset is not uint");
                tmp11 = rangeError1;
                throw rangeError1;
              }
              return self[TYPED_ARRAY_SUPPORT] | self[TYPED_ARRAY_SUPPORT + 1] << 8;
            }
            readUInt16BE(arg0, arg1) {
              self = this;
              if (!arg1) {
                num = 1;
                num2 = 0;
                if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                  if (TYPED_ARRAY_SUPPORT >= 0) {
                    num3 = 2;
                    if (TYPED_ARRAY_SUPPORT + 2 > tmp) {
                      tmp2 = globalThis;
                      _RangeError = RangeError;
                      tmp3 = new.target;
                      str = "Trying to access beyond buffer length";
                      tmp4 = new.target;
                      rangeError = new RangeError("Trying to access beyond buffer length");
                      tmp6 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp7 = globalThis;
                _RangeError2 = RangeError;
                tmp8 = new.target;
                str2 = "offset is not uint";
                tmp9 = new.target;
                rangeError1 = new RangeError("offset is not uint");
                tmp11 = rangeError1;
                throw rangeError1;
              }
              return self[TYPED_ARRAY_SUPPORT] << 8 | self[TYPED_ARRAY_SUPPORT + 1];
            }
            readUInt32LE(arg0, arg1) {
              self = this;
              if (!arg1) {
                num = 1;
                num2 = 0;
                if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                  if (TYPED_ARRAY_SUPPORT >= 0) {
                    num3 = 4;
                    if (TYPED_ARRAY_SUPPORT + 4 > tmp) {
                      tmp2 = globalThis;
                      _RangeError = RangeError;
                      tmp3 = new.target;
                      str = "Trying to access beyond buffer length";
                      tmp4 = new.target;
                      rangeError = new RangeError("Trying to access beyond buffer length");
                      tmp6 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp7 = globalThis;
                _RangeError2 = RangeError;
                tmp8 = new.target;
                str2 = "offset is not uint";
                tmp9 = new.target;
                rangeError1 = new RangeError("offset is not uint");
                tmp11 = rangeError1;
                throw rangeError1;
              }
              return (self[TYPED_ARRAY_SUPPORT] | self[TYPED_ARRAY_SUPPORT + 1] << 8 | self[TYPED_ARRAY_SUPPORT + 2] << 16) + 16777216 * self[TYPED_ARRAY_SUPPORT + 3];
            }
            readUInt32BE(arg0, arg1) {
              self = this;
              if (!arg1) {
                num = 1;
                num2 = 0;
                if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                  if (TYPED_ARRAY_SUPPORT >= 0) {
                    num3 = 4;
                    if (TYPED_ARRAY_SUPPORT + 4 > tmp) {
                      tmp2 = globalThis;
                      _RangeError = RangeError;
                      tmp3 = new.target;
                      str = "Trying to access beyond buffer length";
                      tmp4 = new.target;
                      rangeError = new RangeError("Trying to access beyond buffer length");
                      tmp6 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp7 = globalThis;
                _RangeError2 = RangeError;
                tmp8 = new.target;
                str2 = "offset is not uint";
                tmp9 = new.target;
                rangeError1 = new RangeError("offset is not uint");
                tmp11 = rangeError1;
                throw rangeError1;
              }
              return 16777216 * self[TYPED_ARRAY_SUPPORT] + (self[TYPED_ARRAY_SUPPORT + 1] << 16 | self[TYPED_ARRAY_SUPPORT + 2] << 8 | self[TYPED_ARRAY_SUPPORT + 3]);
            }
            readIntLE(arg0, arg1, arg2) {
              self = this;
              tmp = TYPED_ARRAY_SUPPORT | 0;
              tmp2 = arg1 | 0;
              if (!arg2) {
                num = 1;
                num2 = 0;
                if (tmp % 1 === 0) {
                  if (tmp >= 0) {
                    if (tmp + tmp2 > tmp3) {
                      tmp4 = globalThis;
                      _RangeError = RangeError;
                      tmp5 = new.target;
                      str = "Trying to access beyond buffer length";
                      tmp6 = new.target;
                      rangeError = new RangeError("Trying to access beyond buffer length");
                      tmp8 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp9 = globalThis;
                _RangeError2 = RangeError;
                tmp10 = new.target;
                str2 = "offset is not uint";
                tmp11 = new.target;
                rangeError1 = new RangeError("offset is not uint");
                tmp13 = rangeError1;
                throw rangeError1;
              }
              tmp14 = self[tmp];
              num3 = 1;
              num4 = 256;
              tmp15 = tmp14;
              num5 = 1;
              if (1 < tmp2) {
                sum = tmp14 + self[tmp + num3] * num4;
                sum1 = num3 + 1;
                tmp18 = num4;
                num5 = num4;
                tmp15 = sum;
                while (sum1 < tmp2) {
                  num4 = num4 * 256;
                  num3 = sum1;
                  tmp14 = sum;
                  tmp15 = sum;
                  num5 = num4;
                  if (!num4) {
                    break;
                  }
                }
              }
              diff = tmp15;
              if (tmp15 >= num5 * 128) {
                tmp20 = globalThis;
                _Math = Math;
                num6 = 2;
                num7 = 8;
                diff = tmp15 - Math.pow(2, 8 * tmp2);
              }
              return diff;
            }
            readIntBE(arg0, arg1, arg2) {
              self = this;
              tmp = TYPED_ARRAY_SUPPORT | 0;
              tmp2 = arg1 | 0;
              if (!arg2) {
                num = 1;
                num2 = 0;
                if (tmp % 1 === 0) {
                  if (tmp >= 0) {
                    if (tmp + tmp2 > tmp3) {
                      tmp4 = globalThis;
                      _RangeError = RangeError;
                      tmp5 = new.target;
                      str = "Trying to access beyond buffer length";
                      tmp6 = new.target;
                      rangeError = new RangeError("Trying to access beyond buffer length");
                      tmp8 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp9 = globalThis;
                _RangeError2 = RangeError;
                tmp10 = new.target;
                str2 = "offset is not uint";
                tmp11 = new.target;
                rangeError1 = new RangeError("offset is not uint");
                tmp13 = rangeError1;
                throw rangeError1;
              }
              diff = tmp2 - 1;
              tmp15 = self[tmp + diff];
              num3 = 256;
              tmp16 = tmp15;
              num4 = 1;
              if (0 < diff) {
                diff1 = diff - 1;
                sum = tmp15 + self[tmp + diff1] * num3;
                tmp19 = num3;
                tmp16 = sum;
                num4 = num3;
                while (0 < diff1) {
                  num3 = num3 * 256;
                  tmp15 = sum;
                  diff = diff1;
                  tmp16 = sum;
                  num4 = num3;
                  if (!num3) {
                    break;
                  }
                }
              }
              diff2 = tmp16;
              if (tmp16 >= num4 * 128) {
                tmp21 = globalThis;
                _Math = Math;
                num5 = 2;
                num6 = 8;
                diff2 = tmp16 - Math.pow(2, 8 * tmp2);
              }
              return diff2;
            }
            readInt8(arg0, arg1) {
              self = this;
              if (!arg1) {
                num = 1;
                num2 = 0;
                if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                  if (TYPED_ARRAY_SUPPORT >= 0) {
                    if (TYPED_ARRAY_SUPPORT + 1 > tmp) {
                      tmp2 = globalThis;
                      _RangeError = RangeError;
                      tmp3 = new.target;
                      str = "Trying to access beyond buffer length";
                      tmp4 = new.target;
                      rangeError = new RangeError("Trying to access beyond buffer length");
                      tmp6 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp7 = globalThis;
                _RangeError2 = RangeError;
                tmp8 = new.target;
                str2 = "offset is not uint";
                tmp9 = new.target;
                rangeError1 = new RangeError("offset is not uint");
                tmp11 = rangeError1;
                throw rangeError1;
              }
              tmp12 = self[TYPED_ARRAY_SUPPORT];
              if (128 & self[TYPED_ARRAY_SUPPORT]) {
                num3 = 255;
                num4 = -1;
                num5 = 1;
                result = -1 * (255 - tmp12 + 1);
              } else {
                result = tmp12;
              }
              return result;
            }
            readInt16LE(arg0, arg1) {
              self = this;
              if (!arg1) {
                num = 1;
                num2 = 0;
                if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                  if (TYPED_ARRAY_SUPPORT >= 0) {
                    num3 = 2;
                    if (TYPED_ARRAY_SUPPORT + 2 > tmp) {
                      tmp2 = globalThis;
                      _RangeError = RangeError;
                      tmp3 = new.target;
                      str = "Trying to access beyond buffer length";
                      tmp4 = new.target;
                      rangeError = new RangeError("Trying to access beyond buffer length");
                      tmp6 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp7 = globalThis;
                _RangeError2 = RangeError;
                tmp8 = new.target;
                str2 = "offset is not uint";
                tmp9 = new.target;
                rangeError1 = new RangeError("offset is not uint");
                tmp11 = rangeError1;
                throw rangeError1;
              }
              tmp12 = self[TYPED_ARRAY_SUPPORT] | self[TYPED_ARRAY_SUPPORT + 1] << 8;
              tmp13 = tmp12;
              if (32768 & tmp12) {
                num4 = 4294901760;
                tmp13 = 4294901760 | tmp12;
              }
              return tmp13;
            }
            readInt16BE(arg0, arg1) {
              self = this;
              if (!arg1) {
                num = 1;
                num2 = 0;
                if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                  if (TYPED_ARRAY_SUPPORT >= 0) {
                    num3 = 2;
                    if (TYPED_ARRAY_SUPPORT + 2 > tmp) {
                      tmp2 = globalThis;
                      _RangeError = RangeError;
                      tmp3 = new.target;
                      str = "Trying to access beyond buffer length";
                      tmp4 = new.target;
                      rangeError = new RangeError("Trying to access beyond buffer length");
                      tmp6 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp7 = globalThis;
                _RangeError2 = RangeError;
                tmp8 = new.target;
                str2 = "offset is not uint";
                tmp9 = new.target;
                rangeError1 = new RangeError("offset is not uint");
                tmp11 = rangeError1;
                throw rangeError1;
              }
              tmp12 = self[TYPED_ARRAY_SUPPORT + 1] | self[TYPED_ARRAY_SUPPORT] << 8;
              tmp13 = tmp12;
              if (32768 & tmp12) {
                num4 = 4294901760;
                tmp13 = 4294901760 | tmp12;
              }
              return tmp13;
            }
            readInt32LE(arg0, arg1) {
              self = this;
              if (!arg1) {
                num = 1;
                num2 = 0;
                if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                  if (TYPED_ARRAY_SUPPORT >= 0) {
                    num3 = 4;
                    if (TYPED_ARRAY_SUPPORT + 4 > tmp) {
                      tmp2 = globalThis;
                      _RangeError = RangeError;
                      tmp3 = new.target;
                      str = "Trying to access beyond buffer length";
                      tmp4 = new.target;
                      rangeError = new RangeError("Trying to access beyond buffer length");
                      tmp6 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp7 = globalThis;
                _RangeError2 = RangeError;
                tmp8 = new.target;
                str2 = "offset is not uint";
                tmp9 = new.target;
                rangeError1 = new RangeError("offset is not uint");
                tmp11 = rangeError1;
                throw rangeError1;
              }
              return self[TYPED_ARRAY_SUPPORT] | self[TYPED_ARRAY_SUPPORT + 1] << 8 | self[TYPED_ARRAY_SUPPORT + 2] << 16 | self[TYPED_ARRAY_SUPPORT + 3] << 24;
            }
            readInt32BE(arg0, arg1) {
              self = this;
              if (!arg1) {
                num = 1;
                num2 = 0;
                if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                  if (TYPED_ARRAY_SUPPORT >= 0) {
                    num3 = 4;
                    if (TYPED_ARRAY_SUPPORT + 4 > tmp) {
                      tmp2 = globalThis;
                      _RangeError = RangeError;
                      tmp3 = new.target;
                      str = "Trying to access beyond buffer length";
                      tmp4 = new.target;
                      rangeError = new RangeError("Trying to access beyond buffer length");
                      tmp6 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp7 = globalThis;
                _RangeError2 = RangeError;
                tmp8 = new.target;
                str2 = "offset is not uint";
                tmp9 = new.target;
                rangeError1 = new RangeError("offset is not uint");
                tmp11 = rangeError1;
                throw rangeError1;
              }
              return self[TYPED_ARRAY_SUPPORT] << 24 | self[TYPED_ARRAY_SUPPORT + 1] << 16 | self[TYPED_ARRAY_SUPPORT + 2] << 8 | self[TYPED_ARRAY_SUPPORT + 3];
            }
            readFloatLE(arg0, arg1) {
              self = this;
              if (!arg1) {
                num = 1;
                num2 = 0;
                if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                  if (TYPED_ARRAY_SUPPORT >= 0) {
                    num3 = 4;
                    if (TYPED_ARRAY_SUPPORT + 4 > tmp) {
                      tmp2 = globalThis;
                      _RangeError = RangeError;
                      tmp3 = new.target;
                      str = "Trying to access beyond buffer length";
                      tmp4 = new.target;
                      rangeError = new RangeError("Trying to access beyond buffer length");
                      tmp6 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp7 = globalThis;
                _RangeError2 = RangeError;
                tmp8 = new.target;
                str2 = "offset is not uint";
                tmp9 = new.target;
                rangeError1 = new RangeError("offset is not uint");
                tmp11 = rangeError1;
                throw rangeError1;
              }
              return closure_1.read(self, TYPED_ARRAY_SUPPORT, true, 23, 4);
            }
            readFloatBE(arg0, arg1) {
              self = this;
              if (!arg1) {
                num = 1;
                num2 = 0;
                if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                  if (TYPED_ARRAY_SUPPORT >= 0) {
                    num3 = 4;
                    if (TYPED_ARRAY_SUPPORT + 4 > tmp) {
                      tmp2 = globalThis;
                      _RangeError = RangeError;
                      tmp3 = new.target;
                      str = "Trying to access beyond buffer length";
                      tmp4 = new.target;
                      rangeError = new RangeError("Trying to access beyond buffer length");
                      tmp6 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp7 = globalThis;
                _RangeError2 = RangeError;
                tmp8 = new.target;
                str2 = "offset is not uint";
                tmp9 = new.target;
                rangeError1 = new RangeError("offset is not uint");
                tmp11 = rangeError1;
                throw rangeError1;
              }
              return closure_1.read(self, TYPED_ARRAY_SUPPORT, false, 23, 4);
            }
            readDoubleLE(arg0, arg1) {
              self = this;
              if (!arg1) {
                num = 1;
                num2 = 0;
                if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                  if (TYPED_ARRAY_SUPPORT >= 0) {
                    num3 = 8;
                    if (TYPED_ARRAY_SUPPORT + 8 > tmp) {
                      tmp2 = globalThis;
                      _RangeError = RangeError;
                      tmp3 = new.target;
                      str = "Trying to access beyond buffer length";
                      tmp4 = new.target;
                      rangeError = new RangeError("Trying to access beyond buffer length");
                      tmp6 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp7 = globalThis;
                _RangeError2 = RangeError;
                tmp8 = new.target;
                str2 = "offset is not uint";
                tmp9 = new.target;
                rangeError1 = new RangeError("offset is not uint");
                tmp11 = rangeError1;
                throw rangeError1;
              }
              return closure_1.read(self, TYPED_ARRAY_SUPPORT, true, 52, 8);
            }
            readDoubleBE(arg0, arg1) {
              self = this;
              if (!arg1) {
                num = 1;
                num2 = 0;
                if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                  if (TYPED_ARRAY_SUPPORT >= 0) {
                    num3 = 8;
                    if (TYPED_ARRAY_SUPPORT + 8 > tmp) {
                      tmp2 = globalThis;
                      _RangeError = RangeError;
                      tmp3 = new.target;
                      str = "Trying to access beyond buffer length";
                      tmp4 = new.target;
                      rangeError = new RangeError("Trying to access beyond buffer length");
                      tmp6 = rangeError;
                      throw rangeError;
                    }
                  }
                }
                tmp7 = globalThis;
                _RangeError2 = RangeError;
                tmp8 = new.target;
                str2 = "offset is not uint";
                tmp9 = new.target;
                rangeError1 = new RangeError("offset is not uint");
                tmp11 = rangeError1;
                throw rangeError1;
              }
              return closure_1.read(self, TYPED_ARRAY_SUPPORT, false, 52, 8);
            }
            writeUIntLE(arg0, arg1, arg2, arg3) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              tmp3 = arg2 | 0;
              if (!arg3) {
                tmp4 = globalThis;
                _Math = Math;
                num = 2;
                num2 = 8;
                num3 = 1;
                tmp6 = Buffer;
                diff = Math.pow(2, 8 * tmp3) - 1;
                if (Buffer.isBuffer(self)) {
                  if (diff >= tmp) {
                    num4 = 0;
                    if (tmp >= 0) {
                      if (tmp2 + tmp3 > self.length) {
                        _RangeError = RangeError;
                        tmp11 = new.target;
                        str2 = "Index out of range";
                        tmp12 = new.target;
                        rangeError = new RangeError("Index out of range");
                        tmp14 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  _RangeError2 = RangeError;
                  tmp15 = new.target;
                  str3 = "\"value\" argument is out of bounds";
                  tmp16 = new.target;
                  rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  tmp18 = rangeError1;
                  throw rangeError1;
                } else {
                  _TypeError = TypeError;
                  tmp7 = new.target;
                  str = "\"buffer\" argument must be a Buffer instance";
                  tmp8 = new.target;
                  typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  tmp10 = typeError;
                  throw typeError;
                }
              }
              self[tmp2] = 255 & tmp;
              num5 = 256;
              num6 = 1;
              if (1 < tmp3) {
                self[tmp2 + num6] = tmp / num5 & 255;
                sum = num6 + 1;
                tmp20 = num5;
                while (sum < tmp3) {
                  num5 = num5 * 256;
                  num6 = sum;
                  if (!num5) {
                    break;
                  }
                }
              }
              return tmp2 + tmp3;
            }
            writeUIntBE(arg0, arg1, arg2, arg3) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              tmp3 = arg2 | 0;
              if (!arg3) {
                tmp4 = globalThis;
                _Math = Math;
                num = 2;
                num2 = 8;
                num3 = 1;
                tmp6 = Buffer;
                diff = Math.pow(2, 8 * tmp3) - 1;
                if (Buffer.isBuffer(self)) {
                  if (diff >= tmp) {
                    num4 = 0;
                    if (tmp >= 0) {
                      if (tmp2 + tmp3 > self.length) {
                        _RangeError = RangeError;
                        tmp11 = new.target;
                        str2 = "Index out of range";
                        tmp12 = new.target;
                        rangeError = new RangeError("Index out of range");
                        tmp14 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  _RangeError2 = RangeError;
                  tmp15 = new.target;
                  str3 = "\"value\" argument is out of bounds";
                  tmp16 = new.target;
                  rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  tmp18 = rangeError1;
                  throw rangeError1;
                } else {
                  _TypeError = TypeError;
                  tmp7 = new.target;
                  str = "\"buffer\" argument must be a Buffer instance";
                  tmp8 = new.target;
                  typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  tmp10 = typeError;
                  throw typeError;
                }
              }
              diff1 = tmp3 - 1;
              self[tmp2 + diff1] = 255 & tmp;
              diff2 = diff1 - 1;
              num5 = 256;
              if (0 <= diff2) {
                self[tmp2 + diff2] = tmp / num5 & 255;
                diff3 = diff2 - 1;
                tmp22 = num5;
                while (0 <= diff3) {
                  num5 = num5 * 256;
                  diff2 = diff3;
                  if (!num5) {
                    break;
                  }
                }
              }
              return tmp2 + tmp3;
            }
            writeUInt8(arg0, arg1, arg2) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = Buffer;
                if (Buffer.isBuffer(self)) {
                  num = 255;
                  if (255 >= tmp) {
                    num2 = 0;
                    if (tmp >= 0) {
                      num3 = 1;
                      if (tmp2 + 1 > self.length) {
                        tmp9 = globalThis;
                        _RangeError = RangeError;
                        tmp10 = new.target;
                        str2 = "Index out of range";
                        tmp11 = new.target;
                        rangeError = new RangeError("Index out of range");
                        tmp13 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp14 = globalThis;
                  _RangeError2 = RangeError;
                  tmp15 = new.target;
                  str3 = "\"value\" argument is out of bounds";
                  tmp16 = new.target;
                  rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  tmp18 = rangeError1;
                  throw rangeError1;
                } else {
                  tmp4 = globalThis;
                  _TypeError = TypeError;
                  tmp5 = new.target;
                  str = "\"buffer\" argument must be a Buffer instance";
                  tmp6 = new.target;
                  typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  tmp8 = typeError;
                  throw typeError;
                }
              }
              rounded = tmp;
              if (!Buffer.TYPED_ARRAY_SUPPORT) {
                tmp20 = globalThis;
                _Math = Math;
                rounded = Math.floor(tmp);
              }
              self[tmp2] = 255 & rounded;
              return tmp2 + 1;
            }
            writeUInt16LE(arg0, arg1, arg2) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = Buffer;
                if (Buffer.isBuffer(self)) {
                  num = 65535;
                  if (65535 >= tmp) {
                    num2 = 0;
                    if (tmp >= 0) {
                      num3 = 2;
                      if (tmp2 + 2 > self.length) {
                        tmp9 = globalThis;
                        _RangeError = RangeError;
                        tmp10 = new.target;
                        str2 = "Index out of range";
                        tmp11 = new.target;
                        rangeError = new RangeError("Index out of range");
                        tmp13 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp14 = globalThis;
                  _RangeError2 = RangeError;
                  tmp15 = new.target;
                  str3 = "\"value\" argument is out of bounds";
                  tmp16 = new.target;
                  rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  tmp18 = rangeError1;
                  throw rangeError1;
                } else {
                  tmp4 = globalThis;
                  _TypeError = TypeError;
                  tmp5 = new.target;
                  str = "\"buffer\" argument must be a Buffer instance";
                  tmp6 = new.target;
                  typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  tmp8 = typeError;
                  throw typeError;
                }
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                num12 = 255;
                self[tmp2] = 255 & tmp;
                num13 = 8;
                num14 = 1;
                self[tmp2 + 1] = tmp >>> 8;
              } else {
                num4 = 0;
                sum = tmp;
                if (tmp < 0) {
                  num5 = 1;
                  num6 = 65535;
                  sum = 65535 + tmp + 1;
                }
                tmp20 = globalThis;
                _Math = Math;
                num7 = 2;
                bound = Math.min(self.length - tmp2, 2);
                num8 = 8;
                num9 = 255;
                num10 = 1;
                for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                  result = 8 * num11;
                  self[tmp2 + num11] = (sum & 255 << result) >>> result;
                }
              }
              return tmp2 + 2;
            }
            writeUInt16BE(arg0, arg1, arg2) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = Buffer;
                if (Buffer.isBuffer(self)) {
                  num = 65535;
                  if (65535 >= tmp) {
                    num2 = 0;
                    if (tmp >= 0) {
                      num3 = 2;
                      if (tmp2 + 2 > self.length) {
                        tmp9 = globalThis;
                        _RangeError = RangeError;
                        tmp10 = new.target;
                        str2 = "Index out of range";
                        tmp11 = new.target;
                        rangeError = new RangeError("Index out of range");
                        tmp13 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp14 = globalThis;
                  _RangeError2 = RangeError;
                  tmp15 = new.target;
                  str3 = "\"value\" argument is out of bounds";
                  tmp16 = new.target;
                  rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  tmp18 = rangeError1;
                  throw rangeError1;
                } else {
                  tmp4 = globalThis;
                  _TypeError = TypeError;
                  tmp5 = new.target;
                  str = "\"buffer\" argument must be a Buffer instance";
                  tmp6 = new.target;
                  typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  tmp8 = typeError;
                  throw typeError;
                }
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                num12 = 8;
                self[tmp2] = tmp >>> 8;
                num13 = 255;
                num14 = 1;
                self[tmp2 + 1] = 255 & tmp;
              } else {
                num4 = 0;
                sum = tmp;
                if (tmp < 0) {
                  num5 = 1;
                  num6 = 65535;
                  sum = 65535 + tmp + 1;
                }
                tmp20 = globalThis;
                _Math = Math;
                num7 = 2;
                bound = Math.min(self.length - tmp2, 2);
                num8 = 8;
                num9 = 1;
                num10 = 255;
                for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                  result = 8 * (1 - num11);
                  self[tmp2 + num11] = (sum & 255 << result) >>> result;
                }
              }
              return tmp2 + 2;
            }
            writeUInt32LE(arg0, arg1, arg2) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = Buffer;
                if (Buffer.isBuffer(self)) {
                  num = 4294967295;
                  if (4294967295 >= tmp) {
                    num2 = 0;
                    if (tmp >= 0) {
                      num3 = 4;
                      if (tmp2 + 4 > self.length) {
                        tmp9 = globalThis;
                        _RangeError = RangeError;
                        tmp10 = new.target;
                        str2 = "Index out of range";
                        tmp11 = new.target;
                        rangeError = new RangeError("Index out of range");
                        tmp13 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp14 = globalThis;
                  _RangeError2 = RangeError;
                  tmp15 = new.target;
                  str3 = "\"value\" argument is out of bounds";
                  tmp16 = new.target;
                  rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  tmp18 = rangeError1;
                  throw rangeError1;
                } else {
                  tmp4 = globalThis;
                  _TypeError = TypeError;
                  tmp5 = new.target;
                  str = "\"buffer\" argument must be a Buffer instance";
                  tmp6 = new.target;
                  typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  tmp8 = typeError;
                  throw typeError;
                }
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                num12 = 24;
                num13 = 3;
                self[tmp2 + 3] = tmp >>> 24;
                num14 = 16;
                num15 = 2;
                self[tmp2 + 2] = tmp >>> 16;
                num16 = 8;
                num17 = 1;
                self[tmp2 + 1] = tmp >>> 8;
                num18 = 255;
                self[tmp2] = 255 & tmp;
              } else {
                num4 = 0;
                sum = tmp;
                if (tmp < 0) {
                  num5 = 1;
                  num6 = 4294967295;
                  sum = 4294967295 + tmp + 1;
                }
                tmp20 = globalThis;
                _Math = Math;
                num7 = 4;
                bound = Math.min(self.length - tmp2, 4);
                num8 = 255;
                num9 = 8;
                num10 = 1;
                for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                  self[tmp2 + num11] = sum >>> 8 * num11 & 255;
                }
              }
              return tmp2 + 4;
            }
            writeUInt32BE(arg0, arg1, arg2) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = Buffer;
                if (Buffer.isBuffer(self)) {
                  num = 4294967295;
                  if (4294967295 >= tmp) {
                    num2 = 0;
                    if (tmp >= 0) {
                      num3 = 4;
                      if (tmp2 + 4 > self.length) {
                        tmp9 = globalThis;
                        _RangeError = RangeError;
                        tmp10 = new.target;
                        str2 = "Index out of range";
                        tmp11 = new.target;
                        rangeError = new RangeError("Index out of range");
                        tmp13 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp14 = globalThis;
                  _RangeError2 = RangeError;
                  tmp15 = new.target;
                  str3 = "\"value\" argument is out of bounds";
                  tmp16 = new.target;
                  rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  tmp18 = rangeError1;
                  throw rangeError1;
                } else {
                  tmp4 = globalThis;
                  _TypeError = TypeError;
                  tmp5 = new.target;
                  str = "\"buffer\" argument must be a Buffer instance";
                  tmp6 = new.target;
                  typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  tmp8 = typeError;
                  throw typeError;
                }
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                num13 = 24;
                self[tmp2] = tmp >>> 24;
                num14 = 16;
                num15 = 1;
                self[tmp2 + 1] = tmp >>> 16;
                num16 = 8;
                num17 = 2;
                self[tmp2 + 2] = tmp >>> 8;
                num18 = 255;
                num19 = 3;
                self[tmp2 + 3] = 255 & tmp;
              } else {
                num4 = 0;
                sum = tmp;
                if (tmp < 0) {
                  num5 = 1;
                  num6 = 4294967295;
                  sum = 4294967295 + tmp + 1;
                }
                tmp20 = globalThis;
                _Math = Math;
                num7 = 4;
                bound = Math.min(self.length - tmp2, 4);
                num8 = 255;
                num9 = 8;
                num10 = 3;
                num11 = 1;
                for (let num12 = 0; num12 < bound; num12 = num12 + 1) {
                  self[tmp2 + num12] = sum >>> 8 * (3 - num12) & 255;
                }
              }
              return tmp2 + 4;
            }
            writeIntLE(arg0, arg1, arg2, arg3) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg3) {
                tmp3 = globalThis;
                _Math = Math;
                num = 8;
                num2 = 2;
                num3 = 1;
                powResult = Math.pow(2, 8 * arg2 - 1);
                tmp7 = Buffer;
                diff = powResult - 1;
                tmp6 = -powResult;
                if (Buffer.isBuffer(self)) {
                  if (diff >= tmp) {
                    if (tmp >= tmp6) {
                      if (tmp2 + arg2 > self.length) {
                        _RangeError = RangeError;
                        tmp12 = new.target;
                        str2 = "Index out of range";
                        tmp13 = new.target;
                        rangeError = new RangeError("Index out of range");
                        tmp15 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  _RangeError2 = RangeError;
                  tmp16 = new.target;
                  str3 = "\"value\" argument is out of bounds";
                  tmp17 = new.target;
                  rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  tmp19 = rangeError1;
                  throw rangeError1;
                } else {
                  _TypeError = TypeError;
                  tmp8 = new.target;
                  str = "\"buffer\" argument must be a Buffer instance";
                  tmp9 = new.target;
                  typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  tmp11 = typeError;
                  throw typeError;
                }
              }
              self[tmp2] = 255 & tmp;
              num4 = 0;
              num5 = 256;
              num6 = 1;
              if (1 < arg2) {
                while (true) {
                  num7 = num4;
                  tmp21 = num5;
                  tmp22 = num6;
                  tmp23 = tmp20;
                  if (tmp < 0) {
                    tmp23 = 0 === num7;
                  }
                  if (tmp23) {
                    tmp23 = 0 !== self[tmp2 + num6 - 1];
                  }
                  if (tmp23) {
                    num7 = 1;
                  }
                  self[tmp2 + num6] = (tmp / num5 | 0) - num7 & 255;
                  sum = num6 + 1;
                  if (sum >= arg2) {
                    break;
                  } else {
                    num5 = num5 * 256;
                    num4 = num7;
                    num6 = sum;
                    if (!num5) {
                      break;
                    }
                  }
                }
              }
              return tmp2 + arg2;
            }
            writeIntBE(arg0, arg1, arg2, arg3) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg3) {
                tmp3 = globalThis;
                _Math = Math;
                num = 8;
                num2 = 2;
                num3 = 1;
                powResult = Math.pow(2, 8 * arg2 - 1);
                tmp7 = Buffer;
                diff = powResult - 1;
                tmp6 = -powResult;
                if (Buffer.isBuffer(self)) {
                  if (diff >= tmp) {
                    if (tmp >= tmp6) {
                      if (tmp2 + arg2 > self.length) {
                        _RangeError = RangeError;
                        tmp12 = new.target;
                        str2 = "Index out of range";
                        tmp13 = new.target;
                        rangeError = new RangeError("Index out of range");
                        tmp15 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  _RangeError2 = RangeError;
                  tmp16 = new.target;
                  str3 = "\"value\" argument is out of bounds";
                  tmp17 = new.target;
                  rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  tmp19 = rangeError1;
                  throw rangeError1;
                } else {
                  _TypeError = TypeError;
                  tmp8 = new.target;
                  str = "\"buffer\" argument must be a Buffer instance";
                  tmp9 = new.target;
                  typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  tmp11 = typeError;
                  throw typeError;
                }
              }
              diff1 = arg2 - 1;
              self[tmp2 + diff1] = 255 & tmp;
              diff2 = diff1 - 1;
              num4 = 256;
              num5 = 0;
              if (0 <= diff2) {
                while (true) {
                  num6 = num5;
                  tmp23 = num4;
                  tmp24 = diff2;
                  tmp25 = tmp22;
                  if (tmp < 0) {
                    tmp25 = 0 === num6;
                  }
                  if (tmp25) {
                    tmp25 = 0 !== self[tmp2 + diff2 + 1];
                  }
                  if (tmp25) {
                    num6 = 1;
                  }
                  self[tmp2 + diff2] = (tmp / num4 | 0) - num6 & 255;
                  diff3 = diff2 - 1;
                  if (0 > diff3) {
                    break;
                  } else {
                    num4 = num4 * 256;
                    num5 = num6;
                    diff2 = diff3;
                    if (!num4) {
                      break;
                    }
                  }
                }
              }
              return tmp2 + arg2;
            }
            writeInt8(arg0, arg1, arg2) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = Buffer;
                if (Buffer.isBuffer(self)) {
                  num = 127;
                  if (127 >= tmp) {
                    num2 = -128;
                    if (tmp >= -128) {
                      num3 = 1;
                      if (tmp2 + 1 > self.length) {
                        tmp9 = globalThis;
                        _RangeError = RangeError;
                        tmp10 = new.target;
                        str2 = "Index out of range";
                        tmp11 = new.target;
                        rangeError = new RangeError("Index out of range");
                        tmp13 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp14 = globalThis;
                  _RangeError2 = RangeError;
                  tmp15 = new.target;
                  str3 = "\"value\" argument is out of bounds";
                  tmp16 = new.target;
                  rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  tmp18 = rangeError1;
                  throw rangeError1;
                } else {
                  tmp4 = globalThis;
                  _TypeError = TypeError;
                  tmp5 = new.target;
                  str = "\"buffer\" argument must be a Buffer instance";
                  tmp6 = new.target;
                  typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  tmp8 = typeError;
                  throw typeError;
                }
              }
              rounded = tmp;
              if (!Buffer.TYPED_ARRAY_SUPPORT) {
                tmp20 = globalThis;
                _Math = Math;
                rounded = Math.floor(tmp);
              }
              sum = rounded;
              if (rounded < 0) {
                num4 = 255;
                num5 = 1;
                sum = 255 + rounded + 1;
              }
              self[tmp2] = 255 & sum;
              return tmp2 + 1;
            }
            writeInt16LE(arg0, arg1, arg2) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = Buffer;
                if (Buffer.isBuffer(self)) {
                  num = 32767;
                  if (32767 >= tmp) {
                    num2 = -32768;
                    if (tmp >= -32768) {
                      num3 = 2;
                      if (tmp2 + 2 > self.length) {
                        tmp9 = globalThis;
                        _RangeError = RangeError;
                        tmp10 = new.target;
                        str2 = "Index out of range";
                        tmp11 = new.target;
                        rangeError = new RangeError("Index out of range");
                        tmp13 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp14 = globalThis;
                  _RangeError2 = RangeError;
                  tmp15 = new.target;
                  str3 = "\"value\" argument is out of bounds";
                  tmp16 = new.target;
                  rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  tmp18 = rangeError1;
                  throw rangeError1;
                } else {
                  tmp4 = globalThis;
                  _TypeError = TypeError;
                  tmp5 = new.target;
                  str = "\"buffer\" argument must be a Buffer instance";
                  tmp6 = new.target;
                  typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  tmp8 = typeError;
                  throw typeError;
                }
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                num12 = 255;
                self[tmp2] = 255 & tmp;
                num13 = 8;
                num14 = 1;
                self[tmp2 + 1] = tmp >>> 8;
              } else {
                num4 = 0;
                sum = tmp;
                if (tmp < 0) {
                  num5 = 1;
                  num6 = 65535;
                  sum = 65535 + tmp + 1;
                }
                tmp20 = globalThis;
                _Math = Math;
                num7 = 2;
                bound = Math.min(self.length - tmp2, 2);
                num8 = 8;
                num9 = 255;
                num10 = 1;
                for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                  result = 8 * num11;
                  self[tmp2 + num11] = (sum & 255 << result) >>> result;
                }
              }
              return tmp2 + 2;
            }
            writeInt16BE(arg0, arg1, arg2) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = Buffer;
                if (Buffer.isBuffer(self)) {
                  num = 32767;
                  if (32767 >= tmp) {
                    num2 = -32768;
                    if (tmp >= -32768) {
                      num3 = 2;
                      if (tmp2 + 2 > self.length) {
                        tmp9 = globalThis;
                        _RangeError = RangeError;
                        tmp10 = new.target;
                        str2 = "Index out of range";
                        tmp11 = new.target;
                        rangeError = new RangeError("Index out of range");
                        tmp13 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp14 = globalThis;
                  _RangeError2 = RangeError;
                  tmp15 = new.target;
                  str3 = "\"value\" argument is out of bounds";
                  tmp16 = new.target;
                  rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  tmp18 = rangeError1;
                  throw rangeError1;
                } else {
                  tmp4 = globalThis;
                  _TypeError = TypeError;
                  tmp5 = new.target;
                  str = "\"buffer\" argument must be a Buffer instance";
                  tmp6 = new.target;
                  typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  tmp8 = typeError;
                  throw typeError;
                }
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                num12 = 8;
                self[tmp2] = tmp >>> 8;
                num13 = 255;
                num14 = 1;
                self[tmp2 + 1] = 255 & tmp;
              } else {
                num4 = 0;
                sum = tmp;
                if (tmp < 0) {
                  num5 = 1;
                  num6 = 65535;
                  sum = 65535 + tmp + 1;
                }
                tmp20 = globalThis;
                _Math = Math;
                num7 = 2;
                bound = Math.min(self.length - tmp2, 2);
                num8 = 8;
                num9 = 1;
                num10 = 255;
                for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                  result = 8 * (1 - num11);
                  self[tmp2 + num11] = (sum & 255 << result) >>> result;
                }
              }
              return tmp2 + 2;
            }
            writeInt32LE(arg0, arg1, arg2) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = Buffer;
                if (Buffer.isBuffer(self)) {
                  num = 2147483647;
                  if (2147483647 >= tmp) {
                    num2 = -2147483648;
                    if (tmp >= -2147483648) {
                      num3 = 4;
                      if (tmp2 + 4 > self.length) {
                        tmp9 = globalThis;
                        _RangeError = RangeError;
                        tmp10 = new.target;
                        str2 = "Index out of range";
                        tmp11 = new.target;
                        rangeError = new RangeError("Index out of range");
                        tmp13 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp14 = globalThis;
                  _RangeError2 = RangeError;
                  tmp15 = new.target;
                  str3 = "\"value\" argument is out of bounds";
                  tmp16 = new.target;
                  rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  tmp18 = rangeError1;
                  throw rangeError1;
                } else {
                  tmp4 = globalThis;
                  _TypeError = TypeError;
                  tmp5 = new.target;
                  str = "\"buffer\" argument must be a Buffer instance";
                  tmp6 = new.target;
                  typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  tmp8 = typeError;
                  throw typeError;
                }
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                num12 = 255;
                self[tmp2] = 255 & tmp;
                num13 = 8;
                num14 = 1;
                self[tmp2 + 1] = tmp >>> 8;
                num15 = 16;
                num16 = 2;
                self[tmp2 + 2] = tmp >>> 16;
                num17 = 24;
                num18 = 3;
                self[tmp2 + 3] = tmp >>> 24;
              } else {
                num4 = 0;
                sum = tmp;
                if (tmp < 0) {
                  num5 = 1;
                  num6 = 4294967295;
                  sum = 4294967295 + tmp + 1;
                }
                tmp20 = globalThis;
                _Math = Math;
                num7 = 4;
                bound = Math.min(self.length - tmp2, 4);
                num8 = 255;
                num9 = 8;
                num10 = 1;
                for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                  self[tmp2 + num11] = sum >>> 8 * num11 & 255;
                }
              }
              return tmp2 + 4;
            }
            writeInt32BE(arg0, arg1, arg2) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = Buffer;
                if (Buffer.isBuffer(self)) {
                  num = 2147483647;
                  if (2147483647 >= tmp) {
                    num2 = -2147483648;
                    if (tmp >= -2147483648) {
                      num3 = 4;
                      if (tmp2 + 4 > self.length) {
                        tmp9 = globalThis;
                        _RangeError = RangeError;
                        tmp10 = new.target;
                        str2 = "Index out of range";
                        tmp11 = new.target;
                        rangeError = new RangeError("Index out of range");
                        tmp13 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp14 = globalThis;
                  _RangeError2 = RangeError;
                  tmp15 = new.target;
                  str3 = "\"value\" argument is out of bounds";
                  tmp16 = new.target;
                  rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  tmp18 = rangeError1;
                  throw rangeError1;
                } else {
                  tmp4 = globalThis;
                  _TypeError = TypeError;
                  tmp5 = new.target;
                  str = "\"buffer\" argument must be a Buffer instance";
                  tmp6 = new.target;
                  typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  tmp8 = typeError;
                  throw typeError;
                }
              }
              sum = tmp;
              if (tmp < 0) {
                num4 = 1;
                num5 = 4294967295;
                sum = 4294967295 + tmp + 1;
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                num14 = 24;
                self[tmp2] = sum >>> 24;
                num15 = 16;
                num16 = 1;
                self[tmp2 + 1] = sum >>> 16;
                num17 = 8;
                num18 = 2;
                self[tmp2 + 2] = sum >>> 8;
                num19 = 255;
                num20 = 3;
                self[tmp2 + 3] = 255 & sum;
              } else {
                sum1 = sum;
                if (sum < 0) {
                  num6 = 1;
                  num7 = 4294967295;
                  sum1 = 4294967295 + sum + 1;
                }
                tmp21 = globalThis;
                _Math = Math;
                num8 = 4;
                bound = Math.min(self.length - tmp2, 4);
                num9 = 255;
                num10 = 8;
                num11 = 3;
                num12 = 1;
                for (let num13 = 0; num13 < bound; num13 = num13 + 1) {
                  self[tmp2 + num13] = sum1 >>> 8 * (3 - num13) & 255;
                }
              }
              return tmp2 + 4;
            }
            writeFloatLE(arg0, arg1, arg2) {
              self = this;
              if (!arg2) {
                num = 4;
                if (arg1 + 4 > self.length) {
                  tmp6 = globalThis;
                  _RangeError2 = RangeError;
                  tmp7 = new.target;
                  str2 = "Index out of range";
                  tmp8 = new.target;
                  rangeError = new RangeError("Index out of range");
                  tmp10 = rangeError;
                  throw rangeError;
                } else {
                  num2 = 0;
                  if (arg1 < 0) {
                    tmp = globalThis;
                    _RangeError = RangeError;
                    tmp2 = new.target;
                    str = "Index out of range";
                    tmp3 = new.target;
                    rangeError1 = new RangeError("Index out of range");
                    tmp5 = rangeError1;
                    throw rangeError1;
                  }
                }
              }
              writeResult = closure_1.write(self, TYPED_ARRAY_SUPPORT, arg1, true, 23, 4);
              return arg1 + 4;
            }
            writeFloatBE(arg0, arg1, arg2) {
              self = this;
              if (!arg2) {
                num = 4;
                if (arg1 + 4 > self.length) {
                  tmp6 = globalThis;
                  _RangeError2 = RangeError;
                  tmp7 = new.target;
                  str2 = "Index out of range";
                  tmp8 = new.target;
                  rangeError = new RangeError("Index out of range");
                  tmp10 = rangeError;
                  throw rangeError;
                } else {
                  num2 = 0;
                  if (arg1 < 0) {
                    tmp = globalThis;
                    _RangeError = RangeError;
                    tmp2 = new.target;
                    str = "Index out of range";
                    tmp3 = new.target;
                    rangeError1 = new RangeError("Index out of range");
                    tmp5 = rangeError1;
                    throw rangeError1;
                  }
                }
              }
              writeResult = closure_1.write(self, TYPED_ARRAY_SUPPORT, arg1, false, 23, 4);
              return arg1 + 4;
            }
            writeDoubleLE(arg0, arg1, arg2) {
              self = this;
              if (!arg2) {
                num = 8;
                if (arg1 + 8 > self.length) {
                  tmp6 = globalThis;
                  _RangeError2 = RangeError;
                  tmp7 = new.target;
                  str2 = "Index out of range";
                  tmp8 = new.target;
                  rangeError = new RangeError("Index out of range");
                  tmp10 = rangeError;
                  throw rangeError;
                } else {
                  num2 = 0;
                  if (arg1 < 0) {
                    tmp = globalThis;
                    _RangeError = RangeError;
                    tmp2 = new.target;
                    str = "Index out of range";
                    tmp3 = new.target;
                    rangeError1 = new RangeError("Index out of range");
                    tmp5 = rangeError1;
                    throw rangeError1;
                  }
                }
              }
              writeResult = closure_1.write(self, TYPED_ARRAY_SUPPORT, arg1, true, 52, 8);
              return arg1 + 8;
            }
            writeDoubleBE(arg0, arg1, arg2) {
              self = this;
              if (!arg2) {
                num = 8;
                if (arg1 + 8 > self.length) {
                  tmp6 = globalThis;
                  _RangeError2 = RangeError;
                  tmp7 = new.target;
                  str2 = "Index out of range";
                  tmp8 = new.target;
                  rangeError = new RangeError("Index out of range");
                  tmp10 = rangeError;
                  throw rangeError;
                } else {
                  num2 = 0;
                  if (arg1 < 0) {
                    tmp = globalThis;
                    _RangeError = RangeError;
                    tmp2 = new.target;
                    str = "Index out of range";
                    tmp3 = new.target;
                    rangeError1 = new RangeError("Index out of range");
                    tmp5 = rangeError1;
                    throw rangeError1;
                  }
                }
              }
              writeResult = closure_1.write(self, TYPED_ARRAY_SUPPORT, arg1, false, 52, 8);
              return arg1 + 8;
            }
            copy(arg0, arg1, arg2, arg3) {
              num = arg2;
              if (!arg2) {
                num = 0;
              }
              length = arg3;
              tmp = arg3;
              if (!arg3) {
                num2 = 0;
                tmp = 0 === length;
              }
              self = this;
              if (!tmp) {
                length = self.length;
              }
              num3 = arg1;
              if (arg1 >= TYPED_ARRAY_SUPPORT.length) {
                num3 = TYPED_ARRAY_SUPPORT.length;
              }
              if (!num3) {
                num3 = 0;
              }
              tmp2 = length > 0 && length < num;
              if (tmp2) {
                length = num;
              }
              if (length === num) {
                return 0;
              } else {
                if (0 !== TYPED_ARRAY_SUPPORT.length) {
                  if (0 !== self.length) {
                    if (num3 < 0) {
                      tmp19 = globalThis;
                      _RangeError3 = RangeError;
                      tmp20 = new.target;
                      str3 = "targetStart out of bounds";
                      tmp21 = new.target;
                      rangeError = new RangeError("targetStart out of bounds");
                      tmp23 = rangeError;
                      throw rangeError;
                    } else {
                      if (num >= 0) {
                        if (num < self.length) {
                          if (length < 0) {
                            tmp9 = globalThis;
                            _RangeError = RangeError;
                            tmp10 = new.target;
                            str = "sourceEnd out of bounds";
                            tmp11 = new.target;
                            rangeError1 = new RangeError("sourceEnd out of bounds");
                            tmp13 = rangeError1;
                            throw rangeError1;
                          } else {
                            if (length > self.length) {
                              length = self.length;
                            }
                            if (TYPED_ARRAY_SUPPORT.length - num3 < length - num) {
                              length = TYPED_ARRAY_SUPPORT.length - num3 + num;
                            }
                            diff = length - num;
                            if (self === TYPED_ARRAY_SUPPORT) {
                              if (num < num3) {
                                if (num3 < length) {
                                  num7 = 1;
                                  diff1 = diff - 1;
                                  if (0 <= diff1) {
                                    do {
                                      TYPED_ARRAY_SUPPORT[diff1 + num3] = self[diff1 + num];
                                      diff1 = diff1 - 1;
                                    } while (0 <= diff1);
                                  }
                                }
                                return diff;
                              }
                            }
                            num4 = 1000;
                            if (diff >= 1000) {
                              tmp4 = Buffer;
                              if (Buffer.TYPED_ARRAY_SUPPORT) {
                                tmp5 = globalThis;
                                _Uint8Array = Uint8Array;
                                set = Uint8Array.prototype.set;
                                call = set.call;
                                subarrayResult = self.subarray(num, num + diff);
                                if (typeof call === "unknown") {
                                  result = set(subarrayResult, num3);
                                } else {
                                  callResult = call(TYPED_ARRAY_SUPPORT, subarrayResult, num3);
                                }
                              }
                            }
                            num5 = 1;
                            num6 = 0;
                            if (0 < diff) {
                              do {
                                TYPED_ARRAY_SUPPORT[num6 + num3] = self[num6 + num];
                                num6 = num6 + 1;
                              } while (num6 < diff);
                            }
                          }
                        }
                      }
                      tmp14 = globalThis;
                      _RangeError2 = RangeError;
                      tmp15 = new.target;
                      str2 = "sourceStart out of bounds";
                      tmp16 = new.target;
                      rangeError2 = new RangeError("sourceStart out of bounds");
                      tmp18 = rangeError2;
                      throw rangeError2;
                    }
                  }
                }
                return 0;
              }
            }
            fill(arg0, arg1, arg2, arg3) {
              self = this;
              tmp = arg3;
              if (typeof TYPED_ARRAY_SUPPORT === "string") {
                if (typeof arg1 === "string") {
                  length = self.length;
                  num = 0;
                  tmp = arg1;
                } else {
                  length = arg2;
                  num = arg1;
                  if (typeof arg2 === "string") {
                    length = self.length;
                    tmp = arg2;
                    num = arg1;
                  }
                }
                num2 = 1;
                tmp2 = TYPED_ARRAY_SUPPORT;
                if (1 === TYPED_ARRAY_SUPPORT.length) {
                  num3 = 0;
                  charCodeAtResult = TYPED_ARRAY_SUPPORT.charCodeAt(0);
                  num4 = 256;
                  tmp2 = TYPED_ARRAY_SUPPORT;
                  if (charCodeAtResult < 256) {
                    tmp2 = charCodeAtResult;
                  }
                }
                if (undefined !== tmp) {
                  if (typeof tmp !== "string") {
                    tmp31 = globalThis;
                    _TypeError2 = TypeError;
                    tmp32 = new.target;
                    str5 = "encoding must be a string";
                    tmp33 = new.target;
                    typeError = new TypeError("encoding must be a string");
                    tmp35 = typeError;
                    throw typeError;
                  }
                }
                tmp4 = tmp;
                tmp5 = length;
                tmp6 = num;
                num5 = tmp2;
                if (typeof tmp === "string") {
                  tmp36 = Buffer;
                  tmp4 = tmp;
                  tmp5 = length;
                  tmp6 = num;
                  num5 = tmp2;
                  if (!Buffer.isEncoding(tmp)) {
                    tmp7 = globalThis;
                    _TypeError = TypeError;
                    str = "Unknown encoding: ";
                    tmp8 = new.target;
                    tmp9 = new.target;
                    typeError1 = new TypeError("Unknown encoding: " + tmp);
                    tmp11 = typeError1;
                    throw typeError1;
                  }
                }
              } else {
                tmp4 = tmp;
                tmp5 = arg2;
                tmp6 = arg1;
                num5 = TYPED_ARRAY_SUPPORT;
                if (typeof TYPED_ARRAY_SUPPORT === "number") {
                  num9 = 255;
                  num5 = TYPED_ARRAY_SUPPORT & 255;
                  tmp4 = tmp;
                  tmp5 = arg2;
                  tmp6 = arg1;
                }
              }
              if (tmp6 >= 0) {
                if (self.length >= tmp6) {
                  if (self.length >= tmp5) {
                    if (tmp5 <= tmp6) {
                      return self;
                    } else {
                      sum = tmp6 >>> 0;
                      tmp12 = undefined === tmp5 ? self.length : tmp5 >>> 0;
                      if (!num5) {
                        num5 = 0;
                      }
                      if (typeof num5 === "number") {
                        num8 = 1;
                        if (sum < tmp12) {
                          do {
                            self[sum] = num5;
                            sum = sum + 1;
                          } while (sum < tmp12);
                        }
                      } else {
                        tmp37 = Buffer;
                        tmp13Result = num5;
                        if (!Buffer.isBuffer(num5)) {
                          tmp13 = utf8ToBytes;
                          obj = Object.create(tmp37.prototype);
                          if (!tmp37.TYPED_ARRAY_SUPPORT) {
                            if (!(obj instanceof tmp37)) {
                              obj1 = Object.create(tmp37.prototype);
                              if (!tmp37.TYPED_ARRAY_SUPPORT) {
                                if (!(obj1 instanceof tmp37)) {
                                  tmp37Result = tmp37(num5, tmp4, undefined);
                                }
                                str2 = tmp37Result;
                              }
                              if (typeof num5 === "number") {
                                if (typeof tmp4 === "string") {
                                  tmp17 = globalThis;
                                  _Error = Error;
                                  tmp18 = new.target;
                                  str3 = "If encoding is specified then the first argument must be a string";
                                  tmp19 = new.target;
                                  error = new Error("If encoding is specified then the first argument must be a string");
                                  tmp21 = error;
                                  throw error;
                                } else {
                                  tmp42 = allocUnsafe;
                                  tmp37Result = allocUnsafe(obj1, num5);
                                }
                              } else {
                                tmp38 = from;
                                num10 = 0;
                                tmp39 = obj1;
                                tmp40 = num5;
                                tmp41 = tmp4;
                                tmp37Result = from(obj1, num5, tmp4, undefined);
                              }
                            }
                            tmp22 = str2;
                            tmp13Result = tmp13(str2.toString());
                          }
                          if (typeof num5 === "number") {
                            if (typeof tmp4 === "string") {
                              tmp23 = globalThis;
                              _Error2 = Error;
                              tmp24 = new.target;
                              str4 = "If encoding is specified then the first argument must be a string";
                              tmp25 = new.target;
                              error1 = new Error("If encoding is specified then the first argument must be a string");
                              tmp27 = error1;
                              throw error1;
                            } else {
                              tmp47 = allocUnsafe;
                              str2 = allocUnsafe(obj, num5);
                            }
                          } else {
                            tmp43 = from;
                            num11 = 0;
                            tmp44 = obj;
                            tmp45 = num5;
                            tmp46 = tmp4;
                            str2 = from(obj, num5, tmp4, undefined);
                          }
                        }
                        num6 = 1;
                        num7 = 0;
                        if (0 < tmp12 - sum) {
                          do {
                            self[num7 + sum] = tmp13Result[num7 % tmp13Result.length];
                            num7 = num7 + 1;
                            diff = tmp12 - sum;
                          } while (num7 < diff);
                        }
                      }
                      return self;
                    }
                  }
                }
              }
              rangeError = new RangeError("Out of range index");
              throw rangeError;
            }
          }
          let _Uint8Array2 = Uint8Array;
          Buffer.__proto__ = Uint8Array;
          const _Symbol = Symbol;
          let species = typeof Symbol !== "undefined";
          if (typeof Symbol !== "undefined") {
            const _Symbol4 = Symbol;
            species = Symbol.species;
          }
          if (species) {
            const _Symbol2 = Symbol;
            species = Buffer[Symbol.species] === Buffer;
          }
          if (species) {
            const _Object = Object;
            const _Symbol3 = Symbol;
            class Buffer {
              constructor(arg0, arg1, arg2) {
                self = this;
                tmp = Buffer;
                if (!Buffer.TYPED_ARRAY_SUPPORT) {
                  if (!(self instanceof tmp)) {
                    tmpResult = tmp(TYPED_ARRAY_SUPPORT, arg1, arg2);
                    tmp3 = tmpResult;
                    return tmpResult;
                  }
                }
                if (typeof TYPED_ARRAY_SUPPORT === "number") {
                  if (typeof arg1 === "string") {
                    tmp4 = globalThis;
                    _Error = Error;
                    tmp5 = new.target;
                    str = "If encoding is specified then the first argument must be a string";
                    tmp6 = new.target;
                    error = new Error("If encoding is specified then the first argument must be a string");
                    tmp8 = error;
                    throw error;
                  } else {
                    tmp14 = allocUnsafe;
                    num2 = 0;
                    return allocUnsafe(self, TYPED_ARRAY_SUPPORT);
                  }
                } else {
                  tmp9 = from;
                  num = 0;
                  tmp10 = self;
                  tmp11 = TYPED_ARRAY_SUPPORT;
                  tmp12 = arg1;
                  tmp13 = arg2;
                  return from(self, TYPED_ARRAY_SUPPORT, arg1, arg2);
                }
              }
              static _augment(arg0) {
                TYPED_ARRAY_SUPPORT.__proto__ = Buffer.prototype;
                return TYPED_ARRAY_SUPPORT;
              }
              static from(arg0, arg1, arg2) {
                return from(null, TYPED_ARRAY_SUPPORT, arg1, arg2);
              }
              static alloc(arg0, arg1, arg2) {
                if (typeof TYPED_ARRAY_SUPPORT !== "number") {
                  tmp17 = globalThis;
                  _TypeError = TypeError;
                  tmp18 = new.target;
                  str2 = "\"size\" argument must be a number";
                  tmp19 = new.target;
                  typeError = new TypeError("\"size\" argument must be a number");
                  tmp21 = typeError;
                  throw typeError;
                } else {
                  num = 0;
                  if (TYPED_ARRAY_SUPPORT < 0) {
                    tmp12 = globalThis;
                    _RangeError = RangeError;
                    tmp13 = new.target;
                    str = "\"size\" argument must not be negative";
                    tmp14 = new.target;
                    rangeError = new RangeError("\"size\" argument must not be negative");
                    tmp16 = rangeError;
                    throw rangeError;
                  } else {
                    if (TYPED_ARRAY_SUPPORT <= 0) {
                      tmp10 = createBuffer;
                      tmp11 = null;
                      tmp4 = createBuffer(null, TYPED_ARRAY_SUPPORT);
                    } else {
                      tmp = arg1;
                      if (undefined !== arg1) {
                        tmp5 = arg2;
                        if (typeof arg2 === "string") {
                          tmp6 = createBuffer;
                          tmp7 = null;
                          obj = createBuffer(null, TYPED_ARRAY_SUPPORT);
                          fillResult = obj.fill(arg1, arg2);
                        } else {
                          tmp22 = createBuffer;
                          tmp23 = null;
                          obj2 = createBuffer(null, TYPED_ARRAY_SUPPORT);
                          fillResult = obj2.fill(arg1);
                        }
                        tmp9 = fillResult;
                      } else {
                        tmp2 = createBuffer;
                        tmp3 = null;
                        tmp4 = createBuffer(null, TYPED_ARRAY_SUPPORT);
                      }
                    }
                    return tmp4;
                  }
                }
              }
              static allocUnsafe(arg0) {
                return allocUnsafe(null, TYPED_ARRAY_SUPPORT);
              }
              static allocUnsafeSlow(arg0) {
                return allocUnsafe(null, TYPED_ARRAY_SUPPORT);
              }
              static isBuffer(arg0) {
                tmp = null == TYPED_ARRAY_SUPPORT || !TYPED_ARRAY_SUPPORT._isBuffer;
                return !tmp;
              }
              static compare(arg0, arg1) {
                obj = Buffer;
                if (Buffer.isBuffer(TYPED_ARRAY_SUPPORT)) {
                  tmp = arg1;
                  if (obj.isBuffer(arg1)) {
                    if (TYPED_ARRAY_SUPPORT === arg1) {
                      num6 = 0;
                      return 0;
                    } else {
                      length = TYPED_ARRAY_SUPPORT.length;
                      length2 = arg1.length;
                      tmp3 = globalThis;
                      _Math = Math;
                      bound = Math.min(length, length2);
                      num = 0;
                      num2 = 1;
                      num3 = 0;
                      tmp5 = length2;
                      tmp6 = length;
                      if (0 < bound) {
                        tmp7 = num3;
                        while (TYPED_ARRAY_SUPPORT[num3] === arg1[num3]) {
                          num3 = num3 + 1;
                          tmp5 = length2;
                          tmp6 = length;
                        }
                        tmp6 = TYPED_ARRAY_SUPPORT[num3];
                        tmp5 = arg1[num3];
                      }
                      num4 = -1;
                      if (tmp6 >= tmp5) {
                        num5 = 0;
                        if (tmp5 < tmp6) {
                          num5 = 1;
                        }
                        num4 = num5;
                      }
                      return num4;
                    }
                  }
                }
                typeError = new TypeError("Arguments must be Buffers");
                throw typeError;
              }
              static isEncoding(arg0) {
                str = String(TYPED_ARRAY_SUPPORT);
                switch (str.toLowerCase()) {
                  case "hex":
                    flag = true;
                    return true;
                  case "utf8":
                    flag = true;
                    return true;
                  case "utf-8":
                    flag = true;
                    return true;
                  case "ascii":
                    flag = true;
                    return true;
                  case "latin1":
                    flag = true;
                    return true;
                  case "binary":
                    flag = true;
                    return true;
                  case "base64":
                    flag = true;
                    return true;
                  case "ucs2":
                    flag = true;
                    return true;
                  case "ucs-2":
                    flag = true;
                    return true;
                  case "utf16le":
                    flag = true;
                    return true;
                  case "utf-16le":
                    flag = true;
                    return true;
                  default:
                    flag2 = false;
                    return false;
                }
                return;
              }
              static concat(arg0, arg1) {
                if (closure_2(TYPED_ARRAY_SUPPORT)) {
                  num = 0;
                  if (0 === TYPED_ARRAY_SUPPORT.length) {
                    tmp17 = Buffer;
                    return Buffer.alloc(0);
                  } else {
                    num5 = arg1;
                    if (undefined === arg1) {
                      num2 = 1;
                      num3 = 0;
                      num4 = 0;
                      num5 = 0;
                      if (0 < TYPED_ARRAY_SUPPORT.length) {
                        do {
                          num4 = num4 + TYPED_ARRAY_SUPPORT[num3].length;
                          num3 = num3 + 1;
                          num5 = num4;
                          length = TYPED_ARRAY_SUPPORT.length;
                        } while (num3 < length);
                      }
                    }
                    tmp6 = Buffer;
                    allocUnsafeResult = Buffer.allocUnsafe(num5);
                    num6 = 1;
                    num7 = 0;
                    num8 = 0;
                    if (0 < TYPED_ARRAY_SUPPORT.length) {
                      arr = TYPED_ARRAY_SUPPORT[num8];
                      tmp8 = Buffer;
                      tmp9 = num7;
                      tmp10 = num8;
                      while (Buffer.isBuffer(arr)) {
                        copyResult = arr.copy(allocUnsafeResult, num7);
                        num7 = num7 + arr.length;
                        num8 = num8 + 1;
                      }
                      tmp11 = globalThis;
                      _TypeError2 = TypeError;
                      tmp12 = new.target;
                      str2 = "\"list\" argument must be an Array of Buffers";
                      tmp13 = new.target;
                      typeError = new TypeError("\"list\" argument must be an Array of Buffers");
                      tmp15 = typeError;
                      throw typeError;
                    }
                    return allocUnsafeResult;
                  }
                } else {
                  tmp = globalThis;
                  _TypeError = TypeError;
                  tmp2 = new.target;
                  str = "\"list\" argument must be an Array of Buffers";
                  tmp3 = new.target;
                  typeError1 = new TypeError("\"list\" argument must be an Array of Buffers");
                  tmp5 = typeError1;
                  throw typeError1;
                }
              }
              swap16() {
                self = this;
                length = this.length;
                if (length % 2 !== 0) {
                  tmp2 = globalThis;
                  _RangeError = RangeError;
                  tmp3 = new.target;
                  str = "Buffer size must be a multiple of 16-bits";
                  tmp4 = new.target;
                  rangeError = new RangeError("Buffer size must be a multiple of 16-bits");
                  tmp6 = rangeError;
                  throw rangeError;
                } else {
                  num = 1;
                  for (let num2 = 0; num2 < length; num2 = num2 + 2) {
                    sum = num2 + 1;
                    self[num2] = self[sum];
                    self[sum] = self[num2];
                  }
                  return self;
                }
              }
              swap32() {
                self = this;
                length = this.length;
                if (length % 4 !== 0) {
                  tmp4 = globalThis;
                  _RangeError = RangeError;
                  tmp5 = new.target;
                  str = "Buffer size must be a multiple of 32-bits";
                  tmp6 = new.target;
                  rangeError = new RangeError("Buffer size must be a multiple of 32-bits");
                  tmp8 = rangeError;
                  throw rangeError;
                } else {
                  num = 3;
                  num2 = 1;
                  num3 = 2;
                  for (let num4 = 0; num4 < length; num4 = num4 + 4) {
                    sum = num4 + 3;
                    self[num4] = self[sum];
                    self[sum] = self[num4];
                    sum1 = num4 + 1;
                    sum2 = num4 + 2;
                    self[sum1] = self[sum2];
                    self[sum2] = self[sum1];
                  }
                  return self;
                }
              }
              swap64() {
                self = this;
                length = this.length;
                if (length % 8 !== 0) {
                  tmp8 = globalThis;
                  _RangeError = RangeError;
                  tmp9 = new.target;
                  str = "Buffer size must be a multiple of 64-bits";
                  tmp10 = new.target;
                  rangeError = new RangeError("Buffer size must be a multiple of 64-bits");
                  tmp12 = rangeError;
                  throw rangeError;
                } else {
                  num2 = 7;
                  num3 = 1;
                  num4 = 6;
                  num5 = 2;
                  num6 = 5;
                  num7 = 3;
                  num8 = 4;
                  for (let num = 0; num < length; num = num + 8) {
                    sum = num + 7;
                    self[num] = self[sum];
                    self[sum] = self[num];
                    sum1 = num + 1;
                    sum2 = num + 6;
                    self[sum1] = self[sum2];
                    self[sum2] = self[sum1];
                    sum3 = num + 2;
                    sum4 = num + 5;
                    self[sum3] = self[sum4];
                    self[sum4] = self[sum3];
                    sum5 = num + 3;
                    sum6 = num + 4;
                    self[sum5] = self[sum6];
                    self[sum6] = self[sum5];
                  }
                  return self;
                }
              }
              toString() {
                self = this;
                tmp = this.length | 0;
                if (0 === tmp) {
                  return "";
                } else {
                  if (0 === arguments.length) {
                    tmp5 = utf8Slice;
                    applyResult = utf8Slice(self, 0, tmp);
                  } else {
                    tmp2 = slowToString;
                    tmp3 = arguments;
                    applyResult = slowToString(...arguments);
                  }
                  tmp6 = applyResult;
                }
                return;
              }
              equals(arg0) {
                obj = Buffer;
                if (Buffer.isBuffer(TYPED_ARRAY_SUPPORT)) {
                  tmp7 = this === TYPED_ARRAY_SUPPORT;
                  if (!tmp7) {
                    num = 0;
                    tmp7 = 0 === obj.compare(tmp6, TYPED_ARRAY_SUPPORT);
                  }
                  return tmp7;
                } else {
                  tmp = globalThis;
                  _TypeError = TypeError;
                  tmp2 = new.target;
                  str = "Argument must be a Buffer";
                  tmp3 = new.target;
                  typeError = new TypeError("Argument must be a Buffer");
                  tmp5 = typeError;
                  throw typeError;
                }
              }
              inspect() {
                self = this;
                INSPECT_MAX_BYTES = closure_0.INSPECT_MAX_BYTES;
                str = "";
                if (this.length > 0) {
                  str2 = "hex";
                  str3 = self.toString("hex", 0, INSPECT_MAX_BYTES);
                  match = str3.match(/.{2}/g);
                  str4 = " ";
                  joined = match.join(" ");
                  text = joined;
                  if (self.length > INSPECT_MAX_BYTES) {
                    str5 = " ... ";
                    text = `${tmp} ... `;
                  }
                  str = text;
                }
                return "<Buffer " + str + ">";
              }
              compare(arg0, arg1, arg2, arg3, arg4) {
                if (Buffer.isBuffer(TYPED_ARRAY_SUPPORT)) {
                  num = arg1;
                  if (undefined === arg1) {
                    num = 0;
                  }
                  tmp6 = arg2;
                  if (undefined === arg2) {
                    num2 = 0;
                    if (TYPED_ARRAY_SUPPORT) {
                      num2 = TYPED_ARRAY_SUPPORT.length;
                    }
                    tmp6 = num2;
                  }
                  num3 = arg3;
                  if (undefined === arg3) {
                    num3 = 0;
                  }
                  self = this;
                  length = arg4;
                  if (undefined === arg4) {
                    length = self.length;
                  }
                  num4 = 0;
                  if (num >= 0) {
                    if (tmp6 <= TYPED_ARRAY_SUPPORT.length) {
                      if (num3 >= 0) {
                        if (length <= self.length) {
                          if (num3 >= length) {
                            if (num >= tmp6) {
                              return 0;
                            }
                          }
                          if (num3 >= length) {
                            num9 = -1;
                            return -1;
                          } else if (num >= tmp6) {
                            num8 = 1;
                            return 1;
                          } else if (self === TYPED_ARRAY_SUPPORT) {
                            return 0;
                          } else {
                            tmp15 = length >>> 0;
                            tmp16 = num3 >>> 0;
                            diff = tmp15 - tmp16;
                            tmp18 = tmp6 >>> 0;
                            tmp19 = num >>> 0;
                            diff1 = tmp18 - tmp19;
                            tmp21 = globalThis;
                            _Math = Math;
                            bound = Math.min(diff, diff1);
                            substr = self.slice(tmp16, tmp15);
                            substr1 = TYPED_ARRAY_SUPPORT.slice(tmp19, tmp18);
                            num10 = 1;
                            num5 = 0;
                            tmp8 = diff1;
                            tmp9 = diff;
                            if (0 < bound) {
                              tmp7 = num5;
                              while (substr[num5] === substr1[num5]) {
                                num5 = num5 + 1;
                                tmp8 = diff1;
                                tmp9 = diff;
                              }
                              tmp9 = substr[num5];
                              tmp8 = substr1[num5];
                            }
                            num6 = -1;
                            if (tmp9 >= tmp8) {
                              num7 = 0;
                              if (tmp8 < tmp9) {
                                num7 = 1;
                              }
                              num6 = num7;
                            }
                            return num6;
                          }
                        }
                      }
                    }
                  }
                  tmp10 = globalThis;
                  _RangeError = RangeError;
                  tmp11 = new.target;
                  str2 = "out of range index";
                  tmp12 = new.target;
                  rangeError = new RangeError("out of range index");
                  tmp14 = rangeError;
                  throw rangeError;
                } else {
                  tmp = globalThis;
                  _TypeError = TypeError;
                  tmp2 = new.target;
                  str = "Argument must be a Buffer";
                  tmp3 = new.target;
                  typeError = new TypeError("Argument must be a Buffer");
                  tmp5 = typeError;
                  throw typeError;
                }
              }
              includes(arg0, arg1, arg2) {
                return -1 !== this.indexOf(TYPED_ARRAY_SUPPORT, arg1, arg2);
              }
              indexOf(arg0, arg1, arg2) {
                return bidirectionalIndexOf(this, TYPED_ARRAY_SUPPORT, arg1, arg2, true);
              }
              lastIndexOf(arg0, arg1, arg2) {
                return bidirectionalIndexOf(this, TYPED_ARRAY_SUPPORT, arg1, arg2, false);
              }
              write(arg0, arg1, arg2, arg3) {
                self = this;
                if (undefined === arg1) {
                  length = self.length;
                  str2 = "utf8";
                  num = 0;
                } else {
                  tmp12 = arg2;
                  if (undefined === arg2) {
                    if (typeof arg1 === "string") {
                      length = self.length;
                      num = 0;
                      str2 = arg1;
                    }
                  }
                  tmp = globalThis;
                  _isFinite = isFinite;
                  if (isFinite(arg1)) {
                    tmp6 = arg1 | 0;
                    _isFinite2 = isFinite;
                    str2 = arg2;
                    num = tmp6;
                    if (isFinite(arg2)) {
                      str2 = arg3;
                      tmp7 = arg2 | 0;
                      length = tmp7;
                      num = tmp6;
                      if (undefined === arg3) {
                        str2 = "utf8";
                        length = tmp7;
                        num = tmp6;
                      }
                    }
                  } else {
                    _Error = Error;
                    tmp2 = new.target;
                    str = "Buffer.write(string, encoding, offset[, length]) is no longer supported";
                    tmp3 = new.target;
                    error = new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    tmp5 = error;
                    throw error;
                  }
                }
                diff = self.length - num;
                tmp9 = undefined === length || length > diff;
                if (tmp9) {
                  length = diff;
                }
                if (TYPED_ARRAY_SUPPORT.length <= 0) {
                  if (num <= self.length) {
                    if (!str2) {
                      str2 = "utf8";
                    }
                    flag = false;
                    tmp10 = str2;
                  }
                } else if (length >= 0) {
                }
                rangeError = new RangeError("Attempt to write outside buffer bounds");
                throw rangeError;
              }
              toJSON() {
                slice = Array.prototype.slice;
                call = slice.call;
                tmp = this._arr || this;
                if (typeof call === "unknown") {
                  num = 0;
                  substr = slice(0);
                } else {
                  num2 = 0;
                  substr = call(tmp, 0);
                }
                return { type: "Buffer", data: substr };
              }
              slice(arg0, arg1) {
                self = this;
                length = this.length;
                tmp = ~~TYPED_ARRAY_SUPPORT;
                if (tmp < 0) {
                  num = tmp + length;
                  if (num < 0) {
                    num = 0;
                  }
                } else {
                  num = tmp;
                  if (tmp > length) {
                    num = length;
                  }
                }
                tmp2 = length;
                if (undefined !== arg1) {
                  tmp2 = ~~arg1;
                }
                if (tmp2 < 0) {
                  num2 = tmp2 + length;
                  if (num2 < 0) {
                    num2 = 0;
                  }
                } else {
                  num2 = tmp2;
                  if (tmp2 > length) {
                    num2 = length;
                  }
                }
                if (num2 < num) {
                  num2 = num;
                }
                tmp3 = Buffer;
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  subarrayResult = self.subarray(num, num2);
                  subarrayResult.__proto__ = tmp3.prototype;
                  tmp15 = subarrayResult;
                } else {
                  diff = num2 - num;
                  obj = Object.create(tmp3.prototype);
                  if (!tmp3.TYPED_ARRAY_SUPPORT) {
                    if (!(obj instanceof tmp3)) {
                      obj1 = Object.create(tmp3.prototype);
                      if (!tmp3.TYPED_ARRAY_SUPPORT) {
                        if (!(obj1 instanceof tmp3)) {
                          tmp3Result = tmp3(diff, undefined, undefined);
                        }
                        tmp8 = tmp3Result;
                      }
                      if (typeof diff === "number") {
                        if (typeof undefined === "string") {
                          tmp9 = globalThis;
                          _Error = Error;
                          tmp10 = new.target;
                          str = "If encoding is specified then the first argument must be a string";
                          tmp11 = new.target;
                          error = new Error("If encoding is specified then the first argument must be a string");
                          tmp13 = error;
                          throw error;
                        } else {
                          tmp25 = allocUnsafe;
                          tmp3Result = allocUnsafe(obj1, diff);
                        }
                      } else {
                        tmp22 = from;
                        num5 = 0;
                        tmp23 = obj1;
                        tmp24 = diff;
                        tmp3Result = from(obj1, diff, undefined, undefined);
                      }
                    }
                    tmp14 = tmp8;
                    num3 = 1;
                    tmp15 = tmp8;
                    num4 = 0;
                    if (0 < diff) {
                      do {
                        tmp8[num4] = self[num4 + num];
                        num4 = num4 + 1;
                        tmp15 = tmp8;
                      } while (num4 < diff);
                    }
                  }
                  if (typeof diff === "number") {
                    if (typeof undefined === "string") {
                      tmp16 = globalThis;
                      _Error2 = Error;
                      tmp17 = new.target;
                      str2 = "If encoding is specified then the first argument must be a string";
                      tmp18 = new.target;
                      error1 = new Error("If encoding is specified then the first argument must be a string");
                      tmp20 = error1;
                      throw error1;
                    } else {
                      tmp29 = allocUnsafe;
                      tmp8 = allocUnsafe(obj, diff);
                    }
                  } else {
                    tmp26 = from;
                    num6 = 0;
                    tmp27 = obj;
                    tmp28 = diff;
                    tmp8 = from(obj, diff, undefined, undefined);
                  }
                }
                return tmp15;
              }
              readUIntLE(arg0, arg1, arg2) {
                self = this;
                tmp = TYPED_ARRAY_SUPPORT | 0;
                tmp2 = arg1 | 0;
                if (!arg2) {
                  num = 1;
                  num2 = 0;
                  if (tmp % 1 === 0) {
                    if (tmp >= 0) {
                      if (tmp + tmp2 > tmp3) {
                        tmp4 = globalThis;
                        _RangeError = RangeError;
                        tmp5 = new.target;
                        str = "Trying to access beyond buffer length";
                        tmp6 = new.target;
                        rangeError = new RangeError("Trying to access beyond buffer length");
                        tmp8 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp9 = globalThis;
                  _RangeError2 = RangeError;
                  tmp10 = new.target;
                  str2 = "offset is not uint";
                  tmp11 = new.target;
                  rangeError1 = new RangeError("offset is not uint");
                  tmp13 = rangeError1;
                  throw rangeError1;
                }
                tmp14 = self[tmp];
                num3 = 256;
                tmp15 = tmp14;
                num4 = 1;
                if (1 < tmp2) {
                  sum = tmp14 + self[tmp + num4] * num3;
                  sum1 = num4 + 1;
                  tmp18 = num3;
                  tmp15 = sum;
                  while (sum1 < tmp2) {
                    num3 = num3 * 256;
                    num4 = sum1;
                    tmp14 = sum;
                    tmp15 = sum;
                    if (!num3) {
                      break;
                    }
                  }
                }
                return tmp15;
              }
              readUIntBE(arg0, arg1, arg2) {
                self = this;
                tmp = TYPED_ARRAY_SUPPORT | 0;
                tmp2 = arg1 | 0;
                if (!arg2) {
                  num = 1;
                  num2 = 0;
                  if (tmp % 1 === 0) {
                    if (tmp >= 0) {
                      if (tmp + tmp2 > tmp3) {
                        tmp4 = globalThis;
                        _RangeError = RangeError;
                        tmp5 = new.target;
                        str = "Trying to access beyond buffer length";
                        tmp6 = new.target;
                        rangeError = new RangeError("Trying to access beyond buffer length");
                        tmp8 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp9 = globalThis;
                  _RangeError2 = RangeError;
                  tmp10 = new.target;
                  str2 = "offset is not uint";
                  tmp11 = new.target;
                  rangeError1 = new RangeError("offset is not uint");
                  tmp13 = rangeError1;
                  throw rangeError1;
                }
                diff = tmp2 - 1;
                tmp15 = self[tmp + diff];
                num3 = 256;
                tmp16 = tmp15;
                if (0 < diff) {
                  diff1 = diff - 1;
                  sum = tmp15 + self[tmp + diff1] * num3;
                  tmp19 = num3;
                  tmp16 = sum;
                  while (0 < diff1) {
                    num3 = num3 * 256;
                    tmp15 = sum;
                    diff = diff1;
                    tmp16 = sum;
                    if (!num3) {
                      break;
                    }
                  }
                }
                return tmp16;
              }
              readUInt8(arg0, arg1) {
                if (!arg1) {
                  num = 1;
                  num2 = 0;
                  if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                    if (TYPED_ARRAY_SUPPORT >= 0) {
                      if (TYPED_ARRAY_SUPPORT + 1 > tmp) {
                        tmp2 = globalThis;
                        _RangeError = RangeError;
                        tmp3 = new.target;
                        str = "Trying to access beyond buffer length";
                        tmp4 = new.target;
                        rangeError = new RangeError("Trying to access beyond buffer length");
                        tmp6 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp7 = globalThis;
                  _RangeError2 = RangeError;
                  tmp8 = new.target;
                  str2 = "offset is not uint";
                  tmp9 = new.target;
                  rangeError1 = new RangeError("offset is not uint");
                  tmp11 = rangeError1;
                  throw rangeError1;
                }
                return this[TYPED_ARRAY_SUPPORT];
              }
              readUInt16LE(arg0, arg1) {
                self = this;
                if (!arg1) {
                  num = 1;
                  num2 = 0;
                  if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                    if (TYPED_ARRAY_SUPPORT >= 0) {
                      num3 = 2;
                      if (TYPED_ARRAY_SUPPORT + 2 > tmp) {
                        tmp2 = globalThis;
                        _RangeError = RangeError;
                        tmp3 = new.target;
                        str = "Trying to access beyond buffer length";
                        tmp4 = new.target;
                        rangeError = new RangeError("Trying to access beyond buffer length");
                        tmp6 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp7 = globalThis;
                  _RangeError2 = RangeError;
                  tmp8 = new.target;
                  str2 = "offset is not uint";
                  tmp9 = new.target;
                  rangeError1 = new RangeError("offset is not uint");
                  tmp11 = rangeError1;
                  throw rangeError1;
                }
                return self[TYPED_ARRAY_SUPPORT] | self[TYPED_ARRAY_SUPPORT + 1] << 8;
              }
              readUInt16BE(arg0, arg1) {
                self = this;
                if (!arg1) {
                  num = 1;
                  num2 = 0;
                  if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                    if (TYPED_ARRAY_SUPPORT >= 0) {
                      num3 = 2;
                      if (TYPED_ARRAY_SUPPORT + 2 > tmp) {
                        tmp2 = globalThis;
                        _RangeError = RangeError;
                        tmp3 = new.target;
                        str = "Trying to access beyond buffer length";
                        tmp4 = new.target;
                        rangeError = new RangeError("Trying to access beyond buffer length");
                        tmp6 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp7 = globalThis;
                  _RangeError2 = RangeError;
                  tmp8 = new.target;
                  str2 = "offset is not uint";
                  tmp9 = new.target;
                  rangeError1 = new RangeError("offset is not uint");
                  tmp11 = rangeError1;
                  throw rangeError1;
                }
                return self[TYPED_ARRAY_SUPPORT] << 8 | self[TYPED_ARRAY_SUPPORT + 1];
              }
              readUInt32LE(arg0, arg1) {
                self = this;
                if (!arg1) {
                  num = 1;
                  num2 = 0;
                  if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                    if (TYPED_ARRAY_SUPPORT >= 0) {
                      num3 = 4;
                      if (TYPED_ARRAY_SUPPORT + 4 > tmp) {
                        tmp2 = globalThis;
                        _RangeError = RangeError;
                        tmp3 = new.target;
                        str = "Trying to access beyond buffer length";
                        tmp4 = new.target;
                        rangeError = new RangeError("Trying to access beyond buffer length");
                        tmp6 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp7 = globalThis;
                  _RangeError2 = RangeError;
                  tmp8 = new.target;
                  str2 = "offset is not uint";
                  tmp9 = new.target;
                  rangeError1 = new RangeError("offset is not uint");
                  tmp11 = rangeError1;
                  throw rangeError1;
                }
                return (self[TYPED_ARRAY_SUPPORT] | self[TYPED_ARRAY_SUPPORT + 1] << 8 | self[TYPED_ARRAY_SUPPORT + 2] << 16) + 16777216 * self[TYPED_ARRAY_SUPPORT + 3];
              }
              readUInt32BE(arg0, arg1) {
                self = this;
                if (!arg1) {
                  num = 1;
                  num2 = 0;
                  if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                    if (TYPED_ARRAY_SUPPORT >= 0) {
                      num3 = 4;
                      if (TYPED_ARRAY_SUPPORT + 4 > tmp) {
                        tmp2 = globalThis;
                        _RangeError = RangeError;
                        tmp3 = new.target;
                        str = "Trying to access beyond buffer length";
                        tmp4 = new.target;
                        rangeError = new RangeError("Trying to access beyond buffer length");
                        tmp6 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp7 = globalThis;
                  _RangeError2 = RangeError;
                  tmp8 = new.target;
                  str2 = "offset is not uint";
                  tmp9 = new.target;
                  rangeError1 = new RangeError("offset is not uint");
                  tmp11 = rangeError1;
                  throw rangeError1;
                }
                return 16777216 * self[TYPED_ARRAY_SUPPORT] + (self[TYPED_ARRAY_SUPPORT + 1] << 16 | self[TYPED_ARRAY_SUPPORT + 2] << 8 | self[TYPED_ARRAY_SUPPORT + 3]);
              }
              readIntLE(arg0, arg1, arg2) {
                self = this;
                tmp = TYPED_ARRAY_SUPPORT | 0;
                tmp2 = arg1 | 0;
                if (!arg2) {
                  num = 1;
                  num2 = 0;
                  if (tmp % 1 === 0) {
                    if (tmp >= 0) {
                      if (tmp + tmp2 > tmp3) {
                        tmp4 = globalThis;
                        _RangeError = RangeError;
                        tmp5 = new.target;
                        str = "Trying to access beyond buffer length";
                        tmp6 = new.target;
                        rangeError = new RangeError("Trying to access beyond buffer length");
                        tmp8 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp9 = globalThis;
                  _RangeError2 = RangeError;
                  tmp10 = new.target;
                  str2 = "offset is not uint";
                  tmp11 = new.target;
                  rangeError1 = new RangeError("offset is not uint");
                  tmp13 = rangeError1;
                  throw rangeError1;
                }
                tmp14 = self[tmp];
                num3 = 1;
                num4 = 256;
                tmp15 = tmp14;
                num5 = 1;
                if (1 < tmp2) {
                  sum = tmp14 + self[tmp + num3] * num4;
                  sum1 = num3 + 1;
                  tmp18 = num4;
                  num5 = num4;
                  tmp15 = sum;
                  while (sum1 < tmp2) {
                    num4 = num4 * 256;
                    num3 = sum1;
                    tmp14 = sum;
                    tmp15 = sum;
                    num5 = num4;
                    if (!num4) {
                      break;
                    }
                  }
                }
                diff = tmp15;
                if (tmp15 >= num5 * 128) {
                  tmp20 = globalThis;
                  _Math = Math;
                  num6 = 2;
                  num7 = 8;
                  diff = tmp15 - Math.pow(2, 8 * tmp2);
                }
                return diff;
              }
              readIntBE(arg0, arg1, arg2) {
                self = this;
                tmp = TYPED_ARRAY_SUPPORT | 0;
                tmp2 = arg1 | 0;
                if (!arg2) {
                  num = 1;
                  num2 = 0;
                  if (tmp % 1 === 0) {
                    if (tmp >= 0) {
                      if (tmp + tmp2 > tmp3) {
                        tmp4 = globalThis;
                        _RangeError = RangeError;
                        tmp5 = new.target;
                        str = "Trying to access beyond buffer length";
                        tmp6 = new.target;
                        rangeError = new RangeError("Trying to access beyond buffer length");
                        tmp8 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp9 = globalThis;
                  _RangeError2 = RangeError;
                  tmp10 = new.target;
                  str2 = "offset is not uint";
                  tmp11 = new.target;
                  rangeError1 = new RangeError("offset is not uint");
                  tmp13 = rangeError1;
                  throw rangeError1;
                }
                diff = tmp2 - 1;
                tmp15 = self[tmp + diff];
                num3 = 256;
                tmp16 = tmp15;
                num4 = 1;
                if (0 < diff) {
                  diff1 = diff - 1;
                  sum = tmp15 + self[tmp + diff1] * num3;
                  tmp19 = num3;
                  tmp16 = sum;
                  num4 = num3;
                  while (0 < diff1) {
                    num3 = num3 * 256;
                    tmp15 = sum;
                    diff = diff1;
                    tmp16 = sum;
                    num4 = num3;
                    if (!num3) {
                      break;
                    }
                  }
                }
                diff2 = tmp16;
                if (tmp16 >= num4 * 128) {
                  tmp21 = globalThis;
                  _Math = Math;
                  num5 = 2;
                  num6 = 8;
                  diff2 = tmp16 - Math.pow(2, 8 * tmp2);
                }
                return diff2;
              }
              readInt8(arg0, arg1) {
                self = this;
                if (!arg1) {
                  num = 1;
                  num2 = 0;
                  if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                    if (TYPED_ARRAY_SUPPORT >= 0) {
                      if (TYPED_ARRAY_SUPPORT + 1 > tmp) {
                        tmp2 = globalThis;
                        _RangeError = RangeError;
                        tmp3 = new.target;
                        str = "Trying to access beyond buffer length";
                        tmp4 = new.target;
                        rangeError = new RangeError("Trying to access beyond buffer length");
                        tmp6 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp7 = globalThis;
                  _RangeError2 = RangeError;
                  tmp8 = new.target;
                  str2 = "offset is not uint";
                  tmp9 = new.target;
                  rangeError1 = new RangeError("offset is not uint");
                  tmp11 = rangeError1;
                  throw rangeError1;
                }
                tmp12 = self[TYPED_ARRAY_SUPPORT];
                if (128 & self[TYPED_ARRAY_SUPPORT]) {
                  num3 = 255;
                  num4 = -1;
                  num5 = 1;
                  result = -1 * (255 - tmp12 + 1);
                } else {
                  result = tmp12;
                }
                return result;
              }
              readInt16LE(arg0, arg1) {
                self = this;
                if (!arg1) {
                  num = 1;
                  num2 = 0;
                  if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                    if (TYPED_ARRAY_SUPPORT >= 0) {
                      num3 = 2;
                      if (TYPED_ARRAY_SUPPORT + 2 > tmp) {
                        tmp2 = globalThis;
                        _RangeError = RangeError;
                        tmp3 = new.target;
                        str = "Trying to access beyond buffer length";
                        tmp4 = new.target;
                        rangeError = new RangeError("Trying to access beyond buffer length");
                        tmp6 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp7 = globalThis;
                  _RangeError2 = RangeError;
                  tmp8 = new.target;
                  str2 = "offset is not uint";
                  tmp9 = new.target;
                  rangeError1 = new RangeError("offset is not uint");
                  tmp11 = rangeError1;
                  throw rangeError1;
                }
                tmp12 = self[TYPED_ARRAY_SUPPORT] | self[TYPED_ARRAY_SUPPORT + 1] << 8;
                tmp13 = tmp12;
                if (32768 & tmp12) {
                  num4 = 4294901760;
                  tmp13 = 4294901760 | tmp12;
                }
                return tmp13;
              }
              readInt16BE(arg0, arg1) {
                self = this;
                if (!arg1) {
                  num = 1;
                  num2 = 0;
                  if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                    if (TYPED_ARRAY_SUPPORT >= 0) {
                      num3 = 2;
                      if (TYPED_ARRAY_SUPPORT + 2 > tmp) {
                        tmp2 = globalThis;
                        _RangeError = RangeError;
                        tmp3 = new.target;
                        str = "Trying to access beyond buffer length";
                        tmp4 = new.target;
                        rangeError = new RangeError("Trying to access beyond buffer length");
                        tmp6 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp7 = globalThis;
                  _RangeError2 = RangeError;
                  tmp8 = new.target;
                  str2 = "offset is not uint";
                  tmp9 = new.target;
                  rangeError1 = new RangeError("offset is not uint");
                  tmp11 = rangeError1;
                  throw rangeError1;
                }
                tmp12 = self[TYPED_ARRAY_SUPPORT + 1] | self[TYPED_ARRAY_SUPPORT] << 8;
                tmp13 = tmp12;
                if (32768 & tmp12) {
                  num4 = 4294901760;
                  tmp13 = 4294901760 | tmp12;
                }
                return tmp13;
              }
              readInt32LE(arg0, arg1) {
                self = this;
                if (!arg1) {
                  num = 1;
                  num2 = 0;
                  if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                    if (TYPED_ARRAY_SUPPORT >= 0) {
                      num3 = 4;
                      if (TYPED_ARRAY_SUPPORT + 4 > tmp) {
                        tmp2 = globalThis;
                        _RangeError = RangeError;
                        tmp3 = new.target;
                        str = "Trying to access beyond buffer length";
                        tmp4 = new.target;
                        rangeError = new RangeError("Trying to access beyond buffer length");
                        tmp6 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp7 = globalThis;
                  _RangeError2 = RangeError;
                  tmp8 = new.target;
                  str2 = "offset is not uint";
                  tmp9 = new.target;
                  rangeError1 = new RangeError("offset is not uint");
                  tmp11 = rangeError1;
                  throw rangeError1;
                }
                return self[TYPED_ARRAY_SUPPORT] | self[TYPED_ARRAY_SUPPORT + 1] << 8 | self[TYPED_ARRAY_SUPPORT + 2] << 16 | self[TYPED_ARRAY_SUPPORT + 3] << 24;
              }
              readInt32BE(arg0, arg1) {
                self = this;
                if (!arg1) {
                  num = 1;
                  num2 = 0;
                  if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                    if (TYPED_ARRAY_SUPPORT >= 0) {
                      num3 = 4;
                      if (TYPED_ARRAY_SUPPORT + 4 > tmp) {
                        tmp2 = globalThis;
                        _RangeError = RangeError;
                        tmp3 = new.target;
                        str = "Trying to access beyond buffer length";
                        tmp4 = new.target;
                        rangeError = new RangeError("Trying to access beyond buffer length");
                        tmp6 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp7 = globalThis;
                  _RangeError2 = RangeError;
                  tmp8 = new.target;
                  str2 = "offset is not uint";
                  tmp9 = new.target;
                  rangeError1 = new RangeError("offset is not uint");
                  tmp11 = rangeError1;
                  throw rangeError1;
                }
                return self[TYPED_ARRAY_SUPPORT] << 24 | self[TYPED_ARRAY_SUPPORT + 1] << 16 | self[TYPED_ARRAY_SUPPORT + 2] << 8 | self[TYPED_ARRAY_SUPPORT + 3];
              }
              readFloatLE(arg0, arg1) {
                self = this;
                if (!arg1) {
                  num = 1;
                  num2 = 0;
                  if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                    if (TYPED_ARRAY_SUPPORT >= 0) {
                      num3 = 4;
                      if (TYPED_ARRAY_SUPPORT + 4 > tmp) {
                        tmp2 = globalThis;
                        _RangeError = RangeError;
                        tmp3 = new.target;
                        str = "Trying to access beyond buffer length";
                        tmp4 = new.target;
                        rangeError = new RangeError("Trying to access beyond buffer length");
                        tmp6 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp7 = globalThis;
                  _RangeError2 = RangeError;
                  tmp8 = new.target;
                  str2 = "offset is not uint";
                  tmp9 = new.target;
                  rangeError1 = new RangeError("offset is not uint");
                  tmp11 = rangeError1;
                  throw rangeError1;
                }
                return closure_1.read(self, TYPED_ARRAY_SUPPORT, true, 23, 4);
              }
              readFloatBE(arg0, arg1) {
                self = this;
                if (!arg1) {
                  num = 1;
                  num2 = 0;
                  if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                    if (TYPED_ARRAY_SUPPORT >= 0) {
                      num3 = 4;
                      if (TYPED_ARRAY_SUPPORT + 4 > tmp) {
                        tmp2 = globalThis;
                        _RangeError = RangeError;
                        tmp3 = new.target;
                        str = "Trying to access beyond buffer length";
                        tmp4 = new.target;
                        rangeError = new RangeError("Trying to access beyond buffer length");
                        tmp6 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp7 = globalThis;
                  _RangeError2 = RangeError;
                  tmp8 = new.target;
                  str2 = "offset is not uint";
                  tmp9 = new.target;
                  rangeError1 = new RangeError("offset is not uint");
                  tmp11 = rangeError1;
                  throw rangeError1;
                }
                return closure_1.read(self, TYPED_ARRAY_SUPPORT, false, 23, 4);
              }
              readDoubleLE(arg0, arg1) {
                self = this;
                if (!arg1) {
                  num = 1;
                  num2 = 0;
                  if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                    if (TYPED_ARRAY_SUPPORT >= 0) {
                      num3 = 8;
                      if (TYPED_ARRAY_SUPPORT + 8 > tmp) {
                        tmp2 = globalThis;
                        _RangeError = RangeError;
                        tmp3 = new.target;
                        str = "Trying to access beyond buffer length";
                        tmp4 = new.target;
                        rangeError = new RangeError("Trying to access beyond buffer length");
                        tmp6 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp7 = globalThis;
                  _RangeError2 = RangeError;
                  tmp8 = new.target;
                  str2 = "offset is not uint";
                  tmp9 = new.target;
                  rangeError1 = new RangeError("offset is not uint");
                  tmp11 = rangeError1;
                  throw rangeError1;
                }
                return closure_1.read(self, TYPED_ARRAY_SUPPORT, true, 52, 8);
              }
              readDoubleBE(arg0, arg1) {
                self = this;
                if (!arg1) {
                  num = 1;
                  num2 = 0;
                  if (TYPED_ARRAY_SUPPORT % 1 === 0) {
                    if (TYPED_ARRAY_SUPPORT >= 0) {
                      num3 = 8;
                      if (TYPED_ARRAY_SUPPORT + 8 > tmp) {
                        tmp2 = globalThis;
                        _RangeError = RangeError;
                        tmp3 = new.target;
                        str = "Trying to access beyond buffer length";
                        tmp4 = new.target;
                        rangeError = new RangeError("Trying to access beyond buffer length");
                        tmp6 = rangeError;
                        throw rangeError;
                      }
                    }
                  }
                  tmp7 = globalThis;
                  _RangeError2 = RangeError;
                  tmp8 = new.target;
                  str2 = "offset is not uint";
                  tmp9 = new.target;
                  rangeError1 = new RangeError("offset is not uint");
                  tmp11 = rangeError1;
                  throw rangeError1;
                }
                return closure_1.read(self, TYPED_ARRAY_SUPPORT, false, 52, 8);
              }
              writeUIntLE(arg0, arg1, arg2, arg3) {
                self = this;
                tmp = +TYPED_ARRAY_SUPPORT;
                tmp2 = arg1 | 0;
                tmp3 = arg2 | 0;
                if (!arg3) {
                  tmp4 = globalThis;
                  _Math = Math;
                  num = 2;
                  num2 = 8;
                  num3 = 1;
                  tmp6 = Buffer;
                  diff = Math.pow(2, 8 * tmp3) - 1;
                  if (Buffer.isBuffer(self)) {
                    if (diff >= tmp) {
                      num4 = 0;
                      if (tmp >= 0) {
                        if (tmp2 + tmp3 > self.length) {
                          _RangeError = RangeError;
                          tmp11 = new.target;
                          str2 = "Index out of range";
                          tmp12 = new.target;
                          rangeError = new RangeError("Index out of range");
                          tmp14 = rangeError;
                          throw rangeError;
                        }
                      }
                    }
                    _RangeError2 = RangeError;
                    tmp15 = new.target;
                    str3 = "\"value\" argument is out of bounds";
                    tmp16 = new.target;
                    rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    tmp18 = rangeError1;
                    throw rangeError1;
                  } else {
                    _TypeError = TypeError;
                    tmp7 = new.target;
                    str = "\"buffer\" argument must be a Buffer instance";
                    tmp8 = new.target;
                    typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    tmp10 = typeError;
                    throw typeError;
                  }
                }
                self[tmp2] = 255 & tmp;
                num5 = 256;
                num6 = 1;
                if (1 < tmp3) {
                  self[tmp2 + num6] = tmp / num5 & 255;
                  sum = num6 + 1;
                  tmp20 = num5;
                  while (sum < tmp3) {
                    num5 = num5 * 256;
                    num6 = sum;
                    if (!num5) {
                      break;
                    }
                  }
                }
                return tmp2 + tmp3;
              }
              writeUIntBE(arg0, arg1, arg2, arg3) {
                self = this;
                tmp = +TYPED_ARRAY_SUPPORT;
                tmp2 = arg1 | 0;
                tmp3 = arg2 | 0;
                if (!arg3) {
                  tmp4 = globalThis;
                  _Math = Math;
                  num = 2;
                  num2 = 8;
                  num3 = 1;
                  tmp6 = Buffer;
                  diff = Math.pow(2, 8 * tmp3) - 1;
                  if (Buffer.isBuffer(self)) {
                    if (diff >= tmp) {
                      num4 = 0;
                      if (tmp >= 0) {
                        if (tmp2 + tmp3 > self.length) {
                          _RangeError = RangeError;
                          tmp11 = new.target;
                          str2 = "Index out of range";
                          tmp12 = new.target;
                          rangeError = new RangeError("Index out of range");
                          tmp14 = rangeError;
                          throw rangeError;
                        }
                      }
                    }
                    _RangeError2 = RangeError;
                    tmp15 = new.target;
                    str3 = "\"value\" argument is out of bounds";
                    tmp16 = new.target;
                    rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    tmp18 = rangeError1;
                    throw rangeError1;
                  } else {
                    _TypeError = TypeError;
                    tmp7 = new.target;
                    str = "\"buffer\" argument must be a Buffer instance";
                    tmp8 = new.target;
                    typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    tmp10 = typeError;
                    throw typeError;
                  }
                }
                diff1 = tmp3 - 1;
                self[tmp2 + diff1] = 255 & tmp;
                diff2 = diff1 - 1;
                num5 = 256;
                if (0 <= diff2) {
                  self[tmp2 + diff2] = tmp / num5 & 255;
                  diff3 = diff2 - 1;
                  tmp22 = num5;
                  while (0 <= diff3) {
                    num5 = num5 * 256;
                    diff2 = diff3;
                    if (!num5) {
                      break;
                    }
                  }
                }
                return tmp2 + tmp3;
              }
              writeUInt8(arg0, arg1, arg2) {
                self = this;
                tmp = +TYPED_ARRAY_SUPPORT;
                tmp2 = arg1 | 0;
                if (!arg2) {
                  tmp3 = Buffer;
                  if (Buffer.isBuffer(self)) {
                    num = 255;
                    if (255 >= tmp) {
                      num2 = 0;
                      if (tmp >= 0) {
                        num3 = 1;
                        if (tmp2 + 1 > self.length) {
                          tmp9 = globalThis;
                          _RangeError = RangeError;
                          tmp10 = new.target;
                          str2 = "Index out of range";
                          tmp11 = new.target;
                          rangeError = new RangeError("Index out of range");
                          tmp13 = rangeError;
                          throw rangeError;
                        }
                      }
                    }
                    tmp14 = globalThis;
                    _RangeError2 = RangeError;
                    tmp15 = new.target;
                    str3 = "\"value\" argument is out of bounds";
                    tmp16 = new.target;
                    rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    tmp18 = rangeError1;
                    throw rangeError1;
                  } else {
                    tmp4 = globalThis;
                    _TypeError = TypeError;
                    tmp5 = new.target;
                    str = "\"buffer\" argument must be a Buffer instance";
                    tmp6 = new.target;
                    typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    tmp8 = typeError;
                    throw typeError;
                  }
                }
                rounded = tmp;
                if (!Buffer.TYPED_ARRAY_SUPPORT) {
                  tmp20 = globalThis;
                  _Math = Math;
                  rounded = Math.floor(tmp);
                }
                self[tmp2] = 255 & rounded;
                return tmp2 + 1;
              }
              writeUInt16LE(arg0, arg1, arg2) {
                self = this;
                tmp = +TYPED_ARRAY_SUPPORT;
                tmp2 = arg1 | 0;
                if (!arg2) {
                  tmp3 = Buffer;
                  if (Buffer.isBuffer(self)) {
                    num = 65535;
                    if (65535 >= tmp) {
                      num2 = 0;
                      if (tmp >= 0) {
                        num3 = 2;
                        if (tmp2 + 2 > self.length) {
                          tmp9 = globalThis;
                          _RangeError = RangeError;
                          tmp10 = new.target;
                          str2 = "Index out of range";
                          tmp11 = new.target;
                          rangeError = new RangeError("Index out of range");
                          tmp13 = rangeError;
                          throw rangeError;
                        }
                      }
                    }
                    tmp14 = globalThis;
                    _RangeError2 = RangeError;
                    tmp15 = new.target;
                    str3 = "\"value\" argument is out of bounds";
                    tmp16 = new.target;
                    rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    tmp18 = rangeError1;
                    throw rangeError1;
                  } else {
                    tmp4 = globalThis;
                    _TypeError = TypeError;
                    tmp5 = new.target;
                    str = "\"buffer\" argument must be a Buffer instance";
                    tmp6 = new.target;
                    typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    tmp8 = typeError;
                    throw typeError;
                  }
                }
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  num12 = 255;
                  self[tmp2] = 255 & tmp;
                  num13 = 8;
                  num14 = 1;
                  self[tmp2 + 1] = tmp >>> 8;
                } else {
                  num4 = 0;
                  sum = tmp;
                  if (tmp < 0) {
                    num5 = 1;
                    num6 = 65535;
                    sum = 65535 + tmp + 1;
                  }
                  tmp20 = globalThis;
                  _Math = Math;
                  num7 = 2;
                  bound = Math.min(self.length - tmp2, 2);
                  num8 = 8;
                  num9 = 255;
                  num10 = 1;
                  for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                    result = 8 * num11;
                    self[tmp2 + num11] = (sum & 255 << result) >>> result;
                  }
                }
                return tmp2 + 2;
              }
              writeUInt16BE(arg0, arg1, arg2) {
                self = this;
                tmp = +TYPED_ARRAY_SUPPORT;
                tmp2 = arg1 | 0;
                if (!arg2) {
                  tmp3 = Buffer;
                  if (Buffer.isBuffer(self)) {
                    num = 65535;
                    if (65535 >= tmp) {
                      num2 = 0;
                      if (tmp >= 0) {
                        num3 = 2;
                        if (tmp2 + 2 > self.length) {
                          tmp9 = globalThis;
                          _RangeError = RangeError;
                          tmp10 = new.target;
                          str2 = "Index out of range";
                          tmp11 = new.target;
                          rangeError = new RangeError("Index out of range");
                          tmp13 = rangeError;
                          throw rangeError;
                        }
                      }
                    }
                    tmp14 = globalThis;
                    _RangeError2 = RangeError;
                    tmp15 = new.target;
                    str3 = "\"value\" argument is out of bounds";
                    tmp16 = new.target;
                    rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    tmp18 = rangeError1;
                    throw rangeError1;
                  } else {
                    tmp4 = globalThis;
                    _TypeError = TypeError;
                    tmp5 = new.target;
                    str = "\"buffer\" argument must be a Buffer instance";
                    tmp6 = new.target;
                    typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    tmp8 = typeError;
                    throw typeError;
                  }
                }
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  num12 = 8;
                  self[tmp2] = tmp >>> 8;
                  num13 = 255;
                  num14 = 1;
                  self[tmp2 + 1] = 255 & tmp;
                } else {
                  num4 = 0;
                  sum = tmp;
                  if (tmp < 0) {
                    num5 = 1;
                    num6 = 65535;
                    sum = 65535 + tmp + 1;
                  }
                  tmp20 = globalThis;
                  _Math = Math;
                  num7 = 2;
                  bound = Math.min(self.length - tmp2, 2);
                  num8 = 8;
                  num9 = 1;
                  num10 = 255;
                  for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                    result = 8 * (1 - num11);
                    self[tmp2 + num11] = (sum & 255 << result) >>> result;
                  }
                }
                return tmp2 + 2;
              }
              writeUInt32LE(arg0, arg1, arg2) {
                self = this;
                tmp = +TYPED_ARRAY_SUPPORT;
                tmp2 = arg1 | 0;
                if (!arg2) {
                  tmp3 = Buffer;
                  if (Buffer.isBuffer(self)) {
                    num = 4294967295;
                    if (4294967295 >= tmp) {
                      num2 = 0;
                      if (tmp >= 0) {
                        num3 = 4;
                        if (tmp2 + 4 > self.length) {
                          tmp9 = globalThis;
                          _RangeError = RangeError;
                          tmp10 = new.target;
                          str2 = "Index out of range";
                          tmp11 = new.target;
                          rangeError = new RangeError("Index out of range");
                          tmp13 = rangeError;
                          throw rangeError;
                        }
                      }
                    }
                    tmp14 = globalThis;
                    _RangeError2 = RangeError;
                    tmp15 = new.target;
                    str3 = "\"value\" argument is out of bounds";
                    tmp16 = new.target;
                    rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    tmp18 = rangeError1;
                    throw rangeError1;
                  } else {
                    tmp4 = globalThis;
                    _TypeError = TypeError;
                    tmp5 = new.target;
                    str = "\"buffer\" argument must be a Buffer instance";
                    tmp6 = new.target;
                    typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    tmp8 = typeError;
                    throw typeError;
                  }
                }
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  num12 = 24;
                  num13 = 3;
                  self[tmp2 + 3] = tmp >>> 24;
                  num14 = 16;
                  num15 = 2;
                  self[tmp2 + 2] = tmp >>> 16;
                  num16 = 8;
                  num17 = 1;
                  self[tmp2 + 1] = tmp >>> 8;
                  num18 = 255;
                  self[tmp2] = 255 & tmp;
                } else {
                  num4 = 0;
                  sum = tmp;
                  if (tmp < 0) {
                    num5 = 1;
                    num6 = 4294967295;
                    sum = 4294967295 + tmp + 1;
                  }
                  tmp20 = globalThis;
                  _Math = Math;
                  num7 = 4;
                  bound = Math.min(self.length - tmp2, 4);
                  num8 = 255;
                  num9 = 8;
                  num10 = 1;
                  for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                    self[tmp2 + num11] = sum >>> 8 * num11 & 255;
                  }
                }
                return tmp2 + 4;
              }
              writeUInt32BE(arg0, arg1, arg2) {
                self = this;
                tmp = +TYPED_ARRAY_SUPPORT;
                tmp2 = arg1 | 0;
                if (!arg2) {
                  tmp3 = Buffer;
                  if (Buffer.isBuffer(self)) {
                    num = 4294967295;
                    if (4294967295 >= tmp) {
                      num2 = 0;
                      if (tmp >= 0) {
                        num3 = 4;
                        if (tmp2 + 4 > self.length) {
                          tmp9 = globalThis;
                          _RangeError = RangeError;
                          tmp10 = new.target;
                          str2 = "Index out of range";
                          tmp11 = new.target;
                          rangeError = new RangeError("Index out of range");
                          tmp13 = rangeError;
                          throw rangeError;
                        }
                      }
                    }
                    tmp14 = globalThis;
                    _RangeError2 = RangeError;
                    tmp15 = new.target;
                    str3 = "\"value\" argument is out of bounds";
                    tmp16 = new.target;
                    rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    tmp18 = rangeError1;
                    throw rangeError1;
                  } else {
                    tmp4 = globalThis;
                    _TypeError = TypeError;
                    tmp5 = new.target;
                    str = "\"buffer\" argument must be a Buffer instance";
                    tmp6 = new.target;
                    typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    tmp8 = typeError;
                    throw typeError;
                  }
                }
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  num13 = 24;
                  self[tmp2] = tmp >>> 24;
                  num14 = 16;
                  num15 = 1;
                  self[tmp2 + 1] = tmp >>> 16;
                  num16 = 8;
                  num17 = 2;
                  self[tmp2 + 2] = tmp >>> 8;
                  num18 = 255;
                  num19 = 3;
                  self[tmp2 + 3] = 255 & tmp;
                } else {
                  num4 = 0;
                  sum = tmp;
                  if (tmp < 0) {
                    num5 = 1;
                    num6 = 4294967295;
                    sum = 4294967295 + tmp + 1;
                  }
                  tmp20 = globalThis;
                  _Math = Math;
                  num7 = 4;
                  bound = Math.min(self.length - tmp2, 4);
                  num8 = 255;
                  num9 = 8;
                  num10 = 3;
                  num11 = 1;
                  for (let num12 = 0; num12 < bound; num12 = num12 + 1) {
                    self[tmp2 + num12] = sum >>> 8 * (3 - num12) & 255;
                  }
                }
                return tmp2 + 4;
              }
              writeIntLE(arg0, arg1, arg2, arg3) {
                self = this;
                tmp = +TYPED_ARRAY_SUPPORT;
                tmp2 = arg1 | 0;
                if (!arg3) {
                  tmp3 = globalThis;
                  _Math = Math;
                  num = 8;
                  num2 = 2;
                  num3 = 1;
                  powResult = Math.pow(2, 8 * arg2 - 1);
                  tmp7 = Buffer;
                  diff = powResult - 1;
                  tmp6 = -powResult;
                  if (Buffer.isBuffer(self)) {
                    if (diff >= tmp) {
                      if (tmp >= tmp6) {
                        if (tmp2 + arg2 > self.length) {
                          _RangeError = RangeError;
                          tmp12 = new.target;
                          str2 = "Index out of range";
                          tmp13 = new.target;
                          rangeError = new RangeError("Index out of range");
                          tmp15 = rangeError;
                          throw rangeError;
                        }
                      }
                    }
                    _RangeError2 = RangeError;
                    tmp16 = new.target;
                    str3 = "\"value\" argument is out of bounds";
                    tmp17 = new.target;
                    rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    tmp19 = rangeError1;
                    throw rangeError1;
                  } else {
                    _TypeError = TypeError;
                    tmp8 = new.target;
                    str = "\"buffer\" argument must be a Buffer instance";
                    tmp9 = new.target;
                    typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    tmp11 = typeError;
                    throw typeError;
                  }
                }
                self[tmp2] = 255 & tmp;
                num4 = 0;
                num5 = 256;
                num6 = 1;
                if (1 < arg2) {
                  while (true) {
                    num7 = num4;
                    tmp21 = num5;
                    tmp22 = num6;
                    tmp23 = tmp20;
                    if (tmp < 0) {
                      tmp23 = 0 === num7;
                    }
                    if (tmp23) {
                      tmp23 = 0 !== self[tmp2 + num6 - 1];
                    }
                    if (tmp23) {
                      num7 = 1;
                    }
                    self[tmp2 + num6] = (tmp / num5 | 0) - num7 & 255;
                    sum = num6 + 1;
                    if (sum >= arg2) {
                      break;
                    } else {
                      num5 = num5 * 256;
                      num4 = num7;
                      num6 = sum;
                      if (!num5) {
                        break;
                      }
                    }
                  }
                }
                return tmp2 + arg2;
              }
              writeIntBE(arg0, arg1, arg2, arg3) {
                self = this;
                tmp = +TYPED_ARRAY_SUPPORT;
                tmp2 = arg1 | 0;
                if (!arg3) {
                  tmp3 = globalThis;
                  _Math = Math;
                  num = 8;
                  num2 = 2;
                  num3 = 1;
                  powResult = Math.pow(2, 8 * arg2 - 1);
                  tmp7 = Buffer;
                  diff = powResult - 1;
                  tmp6 = -powResult;
                  if (Buffer.isBuffer(self)) {
                    if (diff >= tmp) {
                      if (tmp >= tmp6) {
                        if (tmp2 + arg2 > self.length) {
                          _RangeError = RangeError;
                          tmp12 = new.target;
                          str2 = "Index out of range";
                          tmp13 = new.target;
                          rangeError = new RangeError("Index out of range");
                          tmp15 = rangeError;
                          throw rangeError;
                        }
                      }
                    }
                    _RangeError2 = RangeError;
                    tmp16 = new.target;
                    str3 = "\"value\" argument is out of bounds";
                    tmp17 = new.target;
                    rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    tmp19 = rangeError1;
                    throw rangeError1;
                  } else {
                    _TypeError = TypeError;
                    tmp8 = new.target;
                    str = "\"buffer\" argument must be a Buffer instance";
                    tmp9 = new.target;
                    typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    tmp11 = typeError;
                    throw typeError;
                  }
                }
                diff1 = arg2 - 1;
                self[tmp2 + diff1] = 255 & tmp;
                diff2 = diff1 - 1;
                num4 = 256;
                num5 = 0;
                if (0 <= diff2) {
                  while (true) {
                    num6 = num5;
                    tmp23 = num4;
                    tmp24 = diff2;
                    tmp25 = tmp22;
                    if (tmp < 0) {
                      tmp25 = 0 === num6;
                    }
                    if (tmp25) {
                      tmp25 = 0 !== self[tmp2 + diff2 + 1];
                    }
                    if (tmp25) {
                      num6 = 1;
                    }
                    self[tmp2 + diff2] = (tmp / num4 | 0) - num6 & 255;
                    diff3 = diff2 - 1;
                    if (0 > diff3) {
                      break;
                    } else {
                      num4 = num4 * 256;
                      num5 = num6;
                      diff2 = diff3;
                      if (!num4) {
                        break;
                      }
                    }
                  }
                }
                return tmp2 + arg2;
              }
              writeInt8(arg0, arg1, arg2) {
                self = this;
                tmp = +TYPED_ARRAY_SUPPORT;
                tmp2 = arg1 | 0;
                if (!arg2) {
                  tmp3 = Buffer;
                  if (Buffer.isBuffer(self)) {
                    num = 127;
                    if (127 >= tmp) {
                      num2 = -128;
                      if (tmp >= -128) {
                        num3 = 1;
                        if (tmp2 + 1 > self.length) {
                          tmp9 = globalThis;
                          _RangeError = RangeError;
                          tmp10 = new.target;
                          str2 = "Index out of range";
                          tmp11 = new.target;
                          rangeError = new RangeError("Index out of range");
                          tmp13 = rangeError;
                          throw rangeError;
                        }
                      }
                    }
                    tmp14 = globalThis;
                    _RangeError2 = RangeError;
                    tmp15 = new.target;
                    str3 = "\"value\" argument is out of bounds";
                    tmp16 = new.target;
                    rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    tmp18 = rangeError1;
                    throw rangeError1;
                  } else {
                    tmp4 = globalThis;
                    _TypeError = TypeError;
                    tmp5 = new.target;
                    str = "\"buffer\" argument must be a Buffer instance";
                    tmp6 = new.target;
                    typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    tmp8 = typeError;
                    throw typeError;
                  }
                }
                rounded = tmp;
                if (!Buffer.TYPED_ARRAY_SUPPORT) {
                  tmp20 = globalThis;
                  _Math = Math;
                  rounded = Math.floor(tmp);
                }
                sum = rounded;
                if (rounded < 0) {
                  num4 = 255;
                  num5 = 1;
                  sum = 255 + rounded + 1;
                }
                self[tmp2] = 255 & sum;
                return tmp2 + 1;
              }
              writeInt16LE(arg0, arg1, arg2) {
                self = this;
                tmp = +TYPED_ARRAY_SUPPORT;
                tmp2 = arg1 | 0;
                if (!arg2) {
                  tmp3 = Buffer;
                  if (Buffer.isBuffer(self)) {
                    num = 32767;
                    if (32767 >= tmp) {
                      num2 = -32768;
                      if (tmp >= -32768) {
                        num3 = 2;
                        if (tmp2 + 2 > self.length) {
                          tmp9 = globalThis;
                          _RangeError = RangeError;
                          tmp10 = new.target;
                          str2 = "Index out of range";
                          tmp11 = new.target;
                          rangeError = new RangeError("Index out of range");
                          tmp13 = rangeError;
                          throw rangeError;
                        }
                      }
                    }
                    tmp14 = globalThis;
                    _RangeError2 = RangeError;
                    tmp15 = new.target;
                    str3 = "\"value\" argument is out of bounds";
                    tmp16 = new.target;
                    rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    tmp18 = rangeError1;
                    throw rangeError1;
                  } else {
                    tmp4 = globalThis;
                    _TypeError = TypeError;
                    tmp5 = new.target;
                    str = "\"buffer\" argument must be a Buffer instance";
                    tmp6 = new.target;
                    typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    tmp8 = typeError;
                    throw typeError;
                  }
                }
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  num12 = 255;
                  self[tmp2] = 255 & tmp;
                  num13 = 8;
                  num14 = 1;
                  self[tmp2 + 1] = tmp >>> 8;
                } else {
                  num4 = 0;
                  sum = tmp;
                  if (tmp < 0) {
                    num5 = 1;
                    num6 = 65535;
                    sum = 65535 + tmp + 1;
                  }
                  tmp20 = globalThis;
                  _Math = Math;
                  num7 = 2;
                  bound = Math.min(self.length - tmp2, 2);
                  num8 = 8;
                  num9 = 255;
                  num10 = 1;
                  for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                    result = 8 * num11;
                    self[tmp2 + num11] = (sum & 255 << result) >>> result;
                  }
                }
                return tmp2 + 2;
              }
              writeInt16BE(arg0, arg1, arg2) {
                self = this;
                tmp = +TYPED_ARRAY_SUPPORT;
                tmp2 = arg1 | 0;
                if (!arg2) {
                  tmp3 = Buffer;
                  if (Buffer.isBuffer(self)) {
                    num = 32767;
                    if (32767 >= tmp) {
                      num2 = -32768;
                      if (tmp >= -32768) {
                        num3 = 2;
                        if (tmp2 + 2 > self.length) {
                          tmp9 = globalThis;
                          _RangeError = RangeError;
                          tmp10 = new.target;
                          str2 = "Index out of range";
                          tmp11 = new.target;
                          rangeError = new RangeError("Index out of range");
                          tmp13 = rangeError;
                          throw rangeError;
                        }
                      }
                    }
                    tmp14 = globalThis;
                    _RangeError2 = RangeError;
                    tmp15 = new.target;
                    str3 = "\"value\" argument is out of bounds";
                    tmp16 = new.target;
                    rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    tmp18 = rangeError1;
                    throw rangeError1;
                  } else {
                    tmp4 = globalThis;
                    _TypeError = TypeError;
                    tmp5 = new.target;
                    str = "\"buffer\" argument must be a Buffer instance";
                    tmp6 = new.target;
                    typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    tmp8 = typeError;
                    throw typeError;
                  }
                }
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  num12 = 8;
                  self[tmp2] = tmp >>> 8;
                  num13 = 255;
                  num14 = 1;
                  self[tmp2 + 1] = 255 & tmp;
                } else {
                  num4 = 0;
                  sum = tmp;
                  if (tmp < 0) {
                    num5 = 1;
                    num6 = 65535;
                    sum = 65535 + tmp + 1;
                  }
                  tmp20 = globalThis;
                  _Math = Math;
                  num7 = 2;
                  bound = Math.min(self.length - tmp2, 2);
                  num8 = 8;
                  num9 = 1;
                  num10 = 255;
                  for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                    result = 8 * (1 - num11);
                    self[tmp2 + num11] = (sum & 255 << result) >>> result;
                  }
                }
                return tmp2 + 2;
              }
              writeInt32LE(arg0, arg1, arg2) {
                self = this;
                tmp = +TYPED_ARRAY_SUPPORT;
                tmp2 = arg1 | 0;
                if (!arg2) {
                  tmp3 = Buffer;
                  if (Buffer.isBuffer(self)) {
                    num = 2147483647;
                    if (2147483647 >= tmp) {
                      num2 = -2147483648;
                      if (tmp >= -2147483648) {
                        num3 = 4;
                        if (tmp2 + 4 > self.length) {
                          tmp9 = globalThis;
                          _RangeError = RangeError;
                          tmp10 = new.target;
                          str2 = "Index out of range";
                          tmp11 = new.target;
                          rangeError = new RangeError("Index out of range");
                          tmp13 = rangeError;
                          throw rangeError;
                        }
                      }
                    }
                    tmp14 = globalThis;
                    _RangeError2 = RangeError;
                    tmp15 = new.target;
                    str3 = "\"value\" argument is out of bounds";
                    tmp16 = new.target;
                    rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    tmp18 = rangeError1;
                    throw rangeError1;
                  } else {
                    tmp4 = globalThis;
                    _TypeError = TypeError;
                    tmp5 = new.target;
                    str = "\"buffer\" argument must be a Buffer instance";
                    tmp6 = new.target;
                    typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    tmp8 = typeError;
                    throw typeError;
                  }
                }
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  num12 = 255;
                  self[tmp2] = 255 & tmp;
                  num13 = 8;
                  num14 = 1;
                  self[tmp2 + 1] = tmp >>> 8;
                  num15 = 16;
                  num16 = 2;
                  self[tmp2 + 2] = tmp >>> 16;
                  num17 = 24;
                  num18 = 3;
                  self[tmp2 + 3] = tmp >>> 24;
                } else {
                  num4 = 0;
                  sum = tmp;
                  if (tmp < 0) {
                    num5 = 1;
                    num6 = 4294967295;
                    sum = 4294967295 + tmp + 1;
                  }
                  tmp20 = globalThis;
                  _Math = Math;
                  num7 = 4;
                  bound = Math.min(self.length - tmp2, 4);
                  num8 = 255;
                  num9 = 8;
                  num10 = 1;
                  for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                    self[tmp2 + num11] = sum >>> 8 * num11 & 255;
                  }
                }
                return tmp2 + 4;
              }
              writeInt32BE(arg0, arg1, arg2) {
                self = this;
                tmp = +TYPED_ARRAY_SUPPORT;
                tmp2 = arg1 | 0;
                if (!arg2) {
                  tmp3 = Buffer;
                  if (Buffer.isBuffer(self)) {
                    num = 2147483647;
                    if (2147483647 >= tmp) {
                      num2 = -2147483648;
                      if (tmp >= -2147483648) {
                        num3 = 4;
                        if (tmp2 + 4 > self.length) {
                          tmp9 = globalThis;
                          _RangeError = RangeError;
                          tmp10 = new.target;
                          str2 = "Index out of range";
                          tmp11 = new.target;
                          rangeError = new RangeError("Index out of range");
                          tmp13 = rangeError;
                          throw rangeError;
                        }
                      }
                    }
                    tmp14 = globalThis;
                    _RangeError2 = RangeError;
                    tmp15 = new.target;
                    str3 = "\"value\" argument is out of bounds";
                    tmp16 = new.target;
                    rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    tmp18 = rangeError1;
                    throw rangeError1;
                  } else {
                    tmp4 = globalThis;
                    _TypeError = TypeError;
                    tmp5 = new.target;
                    str = "\"buffer\" argument must be a Buffer instance";
                    tmp6 = new.target;
                    typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    tmp8 = typeError;
                    throw typeError;
                  }
                }
                sum = tmp;
                if (tmp < 0) {
                  num4 = 1;
                  num5 = 4294967295;
                  sum = 4294967295 + tmp + 1;
                }
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  num14 = 24;
                  self[tmp2] = sum >>> 24;
                  num15 = 16;
                  num16 = 1;
                  self[tmp2 + 1] = sum >>> 16;
                  num17 = 8;
                  num18 = 2;
                  self[tmp2 + 2] = sum >>> 8;
                  num19 = 255;
                  num20 = 3;
                  self[tmp2 + 3] = 255 & sum;
                } else {
                  sum1 = sum;
                  if (sum < 0) {
                    num6 = 1;
                    num7 = 4294967295;
                    sum1 = 4294967295 + sum + 1;
                  }
                  tmp21 = globalThis;
                  _Math = Math;
                  num8 = 4;
                  bound = Math.min(self.length - tmp2, 4);
                  num9 = 255;
                  num10 = 8;
                  num11 = 3;
                  num12 = 1;
                  for (let num13 = 0; num13 < bound; num13 = num13 + 1) {
                    self[tmp2 + num13] = sum1 >>> 8 * (3 - num13) & 255;
                  }
                }
                return tmp2 + 4;
              }
              writeFloatLE(arg0, arg1, arg2) {
                self = this;
                if (!arg2) {
                  num = 4;
                  if (arg1 + 4 > self.length) {
                    tmp6 = globalThis;
                    _RangeError2 = RangeError;
                    tmp7 = new.target;
                    str2 = "Index out of range";
                    tmp8 = new.target;
                    rangeError = new RangeError("Index out of range");
                    tmp10 = rangeError;
                    throw rangeError;
                  } else {
                    num2 = 0;
                    if (arg1 < 0) {
                      tmp = globalThis;
                      _RangeError = RangeError;
                      tmp2 = new.target;
                      str = "Index out of range";
                      tmp3 = new.target;
                      rangeError1 = new RangeError("Index out of range");
                      tmp5 = rangeError1;
                      throw rangeError1;
                    }
                  }
                }
                writeResult = closure_1.write(self, TYPED_ARRAY_SUPPORT, arg1, true, 23, 4);
                return arg1 + 4;
              }
              writeFloatBE(arg0, arg1, arg2) {
                self = this;
                if (!arg2) {
                  num = 4;
                  if (arg1 + 4 > self.length) {
                    tmp6 = globalThis;
                    _RangeError2 = RangeError;
                    tmp7 = new.target;
                    str2 = "Index out of range";
                    tmp8 = new.target;
                    rangeError = new RangeError("Index out of range");
                    tmp10 = rangeError;
                    throw rangeError;
                  } else {
                    num2 = 0;
                    if (arg1 < 0) {
                      tmp = globalThis;
                      _RangeError = RangeError;
                      tmp2 = new.target;
                      str = "Index out of range";
                      tmp3 = new.target;
                      rangeError1 = new RangeError("Index out of range");
                      tmp5 = rangeError1;
                      throw rangeError1;
                    }
                  }
                }
                writeResult = closure_1.write(self, TYPED_ARRAY_SUPPORT, arg1, false, 23, 4);
                return arg1 + 4;
              }
              writeDoubleLE(arg0, arg1, arg2) {
                self = this;
                if (!arg2) {
                  num = 8;
                  if (arg1 + 8 > self.length) {
                    tmp6 = globalThis;
                    _RangeError2 = RangeError;
                    tmp7 = new.target;
                    str2 = "Index out of range";
                    tmp8 = new.target;
                    rangeError = new RangeError("Index out of range");
                    tmp10 = rangeError;
                    throw rangeError;
                  } else {
                    num2 = 0;
                    if (arg1 < 0) {
                      tmp = globalThis;
                      _RangeError = RangeError;
                      tmp2 = new.target;
                      str = "Index out of range";
                      tmp3 = new.target;
                      rangeError1 = new RangeError("Index out of range");
                      tmp5 = rangeError1;
                      throw rangeError1;
                    }
                  }
                }
                writeResult = closure_1.write(self, TYPED_ARRAY_SUPPORT, arg1, true, 52, 8);
                return arg1 + 8;
              }
              writeDoubleBE(arg0, arg1, arg2) {
                self = this;
                if (!arg2) {
                  num = 8;
                  if (arg1 + 8 > self.length) {
                    tmp6 = globalThis;
                    _RangeError2 = RangeError;
                    tmp7 = new.target;
                    str2 = "Index out of range";
                    tmp8 = new.target;
                    rangeError = new RangeError("Index out of range");
                    tmp10 = rangeError;
                    throw rangeError;
                  } else {
                    num2 = 0;
                    if (arg1 < 0) {
                      tmp = globalThis;
                      _RangeError = RangeError;
                      tmp2 = new.target;
                      str = "Index out of range";
                      tmp3 = new.target;
                      rangeError1 = new RangeError("Index out of range");
                      tmp5 = rangeError1;
                      throw rangeError1;
                    }
                  }
                }
                writeResult = closure_1.write(self, TYPED_ARRAY_SUPPORT, arg1, false, 52, 8);
                return arg1 + 8;
              }
              copy(arg0, arg1, arg2, arg3) {
                num = arg2;
                if (!arg2) {
                  num = 0;
                }
                length = arg3;
                tmp = arg3;
                if (!arg3) {
                  num2 = 0;
                  tmp = 0 === length;
                }
                self = this;
                if (!tmp) {
                  length = self.length;
                }
                num3 = arg1;
                if (arg1 >= TYPED_ARRAY_SUPPORT.length) {
                  num3 = TYPED_ARRAY_SUPPORT.length;
                }
                if (!num3) {
                  num3 = 0;
                }
                tmp2 = length > 0 && length < num;
                if (tmp2) {
                  length = num;
                }
                if (length === num) {
                  return 0;
                } else {
                  if (0 !== TYPED_ARRAY_SUPPORT.length) {
                    if (0 !== self.length) {
                      if (num3 < 0) {
                        tmp19 = globalThis;
                        _RangeError3 = RangeError;
                        tmp20 = new.target;
                        str3 = "targetStart out of bounds";
                        tmp21 = new.target;
                        rangeError = new RangeError("targetStart out of bounds");
                        tmp23 = rangeError;
                        throw rangeError;
                      } else {
                        if (num >= 0) {
                          if (num < self.length) {
                            if (length < 0) {
                              tmp9 = globalThis;
                              _RangeError = RangeError;
                              tmp10 = new.target;
                              str = "sourceEnd out of bounds";
                              tmp11 = new.target;
                              rangeError1 = new RangeError("sourceEnd out of bounds");
                              tmp13 = rangeError1;
                              throw rangeError1;
                            } else {
                              if (length > self.length) {
                                length = self.length;
                              }
                              if (TYPED_ARRAY_SUPPORT.length - num3 < length - num) {
                                length = TYPED_ARRAY_SUPPORT.length - num3 + num;
                              }
                              diff = length - num;
                              if (self === TYPED_ARRAY_SUPPORT) {
                                if (num < num3) {
                                  if (num3 < length) {
                                    num7 = 1;
                                    diff1 = diff - 1;
                                    if (0 <= diff1) {
                                      do {
                                        TYPED_ARRAY_SUPPORT[diff1 + num3] = self[diff1 + num];
                                        diff1 = diff1 - 1;
                                      } while (0 <= diff1);
                                    }
                                  }
                                  return diff;
                                }
                              }
                              num4 = 1000;
                              if (diff >= 1000) {
                                tmp4 = Buffer;
                                if (Buffer.TYPED_ARRAY_SUPPORT) {
                                  tmp5 = globalThis;
                                  _Uint8Array = Uint8Array;
                                  set = Uint8Array.prototype.set;
                                  call = set.call;
                                  subarrayResult = self.subarray(num, num + diff);
                                  if (typeof call === "unknown") {
                                    result = set(subarrayResult, num3);
                                  } else {
                                    callResult = call(TYPED_ARRAY_SUPPORT, subarrayResult, num3);
                                  }
                                }
                              }
                              num5 = 1;
                              num6 = 0;
                              if (0 < diff) {
                                do {
                                  TYPED_ARRAY_SUPPORT[num6 + num3] = self[num6 + num];
                                  num6 = num6 + 1;
                                } while (num6 < diff);
                              }
                            }
                          }
                        }
                        tmp14 = globalThis;
                        _RangeError2 = RangeError;
                        tmp15 = new.target;
                        str2 = "sourceStart out of bounds";
                        tmp16 = new.target;
                        rangeError2 = new RangeError("sourceStart out of bounds");
                        tmp18 = rangeError2;
                        throw rangeError2;
                      }
                    }
                  }
                  return 0;
                }
              }
              fill(arg0, arg1, arg2, arg3) {
                self = this;
                tmp = arg3;
                if (typeof TYPED_ARRAY_SUPPORT === "string") {
                  if (typeof arg1 === "string") {
                    length = self.length;
                    num = 0;
                    tmp = arg1;
                  } else {
                    length = arg2;
                    num = arg1;
                    if (typeof arg2 === "string") {
                      length = self.length;
                      tmp = arg2;
                      num = arg1;
                    }
                  }
                  num2 = 1;
                  tmp2 = TYPED_ARRAY_SUPPORT;
                  if (1 === TYPED_ARRAY_SUPPORT.length) {
                    num3 = 0;
                    charCodeAtResult = TYPED_ARRAY_SUPPORT.charCodeAt(0);
                    num4 = 256;
                    tmp2 = TYPED_ARRAY_SUPPORT;
                    if (charCodeAtResult < 256) {
                      tmp2 = charCodeAtResult;
                    }
                  }
                  if (undefined !== tmp) {
                    if (typeof tmp !== "string") {
                      tmp31 = globalThis;
                      _TypeError2 = TypeError;
                      tmp32 = new.target;
                      str5 = "encoding must be a string";
                      tmp33 = new.target;
                      typeError = new TypeError("encoding must be a string");
                      tmp35 = typeError;
                      throw typeError;
                    }
                  }
                  tmp4 = tmp;
                  tmp5 = length;
                  tmp6 = num;
                  num5 = tmp2;
                  if (typeof tmp === "string") {
                    tmp36 = Buffer;
                    tmp4 = tmp;
                    tmp5 = length;
                    tmp6 = num;
                    num5 = tmp2;
                    if (!Buffer.isEncoding(tmp)) {
                      tmp7 = globalThis;
                      _TypeError = TypeError;
                      str = "Unknown encoding: ";
                      tmp8 = new.target;
                      tmp9 = new.target;
                      typeError1 = new TypeError("Unknown encoding: " + tmp);
                      tmp11 = typeError1;
                      throw typeError1;
                    }
                  }
                } else {
                  tmp4 = tmp;
                  tmp5 = arg2;
                  tmp6 = arg1;
                  num5 = TYPED_ARRAY_SUPPORT;
                  if (typeof TYPED_ARRAY_SUPPORT === "number") {
                    num9 = 255;
                    num5 = TYPED_ARRAY_SUPPORT & 255;
                    tmp4 = tmp;
                    tmp5 = arg2;
                    tmp6 = arg1;
                  }
                }
                if (tmp6 >= 0) {
                  if (self.length >= tmp6) {
                    if (self.length >= tmp5) {
                      if (tmp5 <= tmp6) {
                        return self;
                      } else {
                        sum = tmp6 >>> 0;
                        tmp12 = undefined === tmp5 ? self.length : tmp5 >>> 0;
                        if (!num5) {
                          num5 = 0;
                        }
                        if (typeof num5 === "number") {
                          num8 = 1;
                          if (sum < tmp12) {
                            do {
                              self[sum] = num5;
                              sum = sum + 1;
                            } while (sum < tmp12);
                          }
                        } else {
                          tmp37 = Buffer;
                          tmp13Result = num5;
                          if (!Buffer.isBuffer(num5)) {
                            tmp13 = utf8ToBytes;
                            obj = Object.create(tmp37.prototype);
                            if (!tmp37.TYPED_ARRAY_SUPPORT) {
                              if (!(obj instanceof tmp37)) {
                                obj1 = Object.create(tmp37.prototype);
                                if (!tmp37.TYPED_ARRAY_SUPPORT) {
                                  if (!(obj1 instanceof tmp37)) {
                                    tmp37Result = tmp37(num5, tmp4, undefined);
                                  }
                                  str2 = tmp37Result;
                                }
                                if (typeof num5 === "number") {
                                  if (typeof tmp4 === "string") {
                                    tmp17 = globalThis;
                                    _Error = Error;
                                    tmp18 = new.target;
                                    str3 = "If encoding is specified then the first argument must be a string";
                                    tmp19 = new.target;
                                    error = new Error("If encoding is specified then the first argument must be a string");
                                    tmp21 = error;
                                    throw error;
                                  } else {
                                    tmp42 = allocUnsafe;
                                    tmp37Result = allocUnsafe(obj1, num5);
                                  }
                                } else {
                                  tmp38 = from;
                                  num10 = 0;
                                  tmp39 = obj1;
                                  tmp40 = num5;
                                  tmp41 = tmp4;
                                  tmp37Result = from(obj1, num5, tmp4, undefined);
                                }
                              }
                              tmp22 = str2;
                              tmp13Result = tmp13(str2.toString());
                            }
                            if (typeof num5 === "number") {
                              if (typeof tmp4 === "string") {
                                tmp23 = globalThis;
                                _Error2 = Error;
                                tmp24 = new.target;
                                str4 = "If encoding is specified then the first argument must be a string";
                                tmp25 = new.target;
                                error1 = new Error("If encoding is specified then the first argument must be a string");
                                tmp27 = error1;
                                throw error1;
                              } else {
                                tmp47 = allocUnsafe;
                                str2 = allocUnsafe(obj, num5);
                              }
                            } else {
                              tmp43 = from;
                              num11 = 0;
                              tmp44 = obj;
                              tmp45 = num5;
                              tmp46 = tmp4;
                              str2 = from(obj, num5, tmp4, undefined);
                            }
                          }
                          num6 = 1;
                          num7 = 0;
                          if (0 < tmp12 - sum) {
                            do {
                              self[num7 + sum] = tmp13Result[num7 % tmp13Result.length];
                              num7 = num7 + 1;
                              diff = tmp12 - sum;
                            } while (num7 < diff);
                          }
                        }
                        return self;
                      }
                    }
                  }
                }
                rangeError = new RangeError("Out of range index");
                throw rangeError;
              }
            }
          }
        }
        Buffer.byteLength = byteLength;
        Buffer.prototype._isBuffer = true;
        c12 = 4096;
        const re13 = /[^+\/0-9A-Za-z-_]/g;
      };
      let call = fn.call;
      if (typeof call === "unknown") {
        fn(globalThis);
      } else {
        call(arg1, globalThis);
      }
    },
    (arg0, arg1) => {
      arg1.byteLength = function byteLength(arg0) {
        if (0 < arg0.length % 4) {
          const _Error = Error;
          const error = new Error("Invalid string. Length must be a multiple of 4");
          throw error;
        } else {
          let num = 2;
          if ("=" !== arg0[length - 2]) {
            let num3 = 0;
            if ("=" === arg0[length - 1]) {
              num3 = 1;
            }
            num = num3;
          }
          return tmp / 4 - num;
        }
      };
      arg1.toByteArray = function toByteArray(arg0) {
        ({ length, length: length2 } = arg0);
        if (0 < length2 % 4) {
          const _Error = Error;
          const error = new Error("Invalid string. Length must be a multiple of 4");
          throw error;
        } else {
          let num3 = 2;
          if ("=" !== arg0[length2 - 2]) {
            let num2 = 0;
            if ("=" === arg0[length2 - 1]) {
              num2 = 1;
            }
            num3 = num2;
          }
          const tmp4 = new closure_2(3 * length / 4 - num3);
          let diff = length;
          if (0 < num3) {
            diff = length - 4;
          }
          let num12 = 0;
          let num13 = 0;
          let num14 = 0;
          let num15 = 0;
          let num16 = 0;
          if (0 < diff) {
            do {
              let tmp8 = dependencyMap2[arg0.charCodeAt(arg0, num14)] << 18;
              let tmp9 = dependencyMap2[arg0.charCodeAt(arg0, num14 + 1)] << 12;
              let tmp10 = dependencyMap2[arg0.charCodeAt(arg0, num14 + 2)] << 6;
              let tmp11 = tmp8 | tmp9 | tmp10 | dependencyMap2[arg0.charCodeAt(arg0, num14 + 3)];
              let sum = num12 + 1;
              tmp4[num12] = tmp11 >> 16 & 255;
              let sum1 = sum + 1;
              tmp4[sum] = tmp11 >> 8 & 255;
              num12 = sum1 + 1;
              tmp4[sum1] = 255 & tmp11;
              num14 = num14 + 4;
              num13 = num13 + 3;
              num15 = num12;
              num16 = num14;
            } while (num14 < diff);
          }
          if (2 === num3) {
            tmp4[num15] = 255 & (dependencyMap2[arg0.charCodeAt(arg0, num16)] << 2 | dependencyMap2[arg0.charCodeAt(arg0, num16 + 1)] >> 4);
            const tmp15 = dependencyMap2[arg0.charCodeAt(arg0, num16)] << 2;
          } else if (1 === num3) {
            const tmp22 = dependencyMap2[arg0.charCodeAt(arg0, num16)] << 10;
            const tmp24 = tmp22 | dependencyMap2[arg0.charCodeAt(arg0, num16 + 1)] << 4 | dependencyMap2[arg0.charCodeAt(arg0, num16 + 2)] >> 2;
            tmp4[num15] = tmp24 >> 8 & 255;
            tmp4[num15 + 1] = 255 & tmp24;
            const tmp23 = dependencyMap2[arg0.charCodeAt(arg0, num16 + 1)] << 4;
          }
          return tmp4;
        }
      };
      arg1.fromByteArray = function fromByteArray(arg0) {
        let sum;
        const result = length % 3;
        items = [];
        const diff = length - result;
        let num = 0;
        if (0 < diff) {
          do {
            sum = num + 16383;
            let sum2 = num;
            let tmp5 = sum;
            if (diff < sum) {
              tmp5 = diff;
            }
            let items1 = [];
            if (sum2 < tmp5) {
              do {
                let sum1 = (arg0[sum2] << 16) + (arg0[sum2 + 1] << 8) + arg0[sum2 + 2];
                let arr = items1.push(dependencyMap[sum1 >> 18 & 63] + dependencyMap[sum1 >> 12 & 63] + dependencyMap[sum1 >> 6 & 63] + dependencyMap[63 & sum1]);
                sum2 = sum2 + 3;
              } while (sum2 < tmp5);
            }
            arr = items.push(items1.join(""));
            num = sum;
          } while (sum < diff);
        }
        if (1 === result) {
          let str = `${"" + closure_0[tmp10 >> 2] + closure_0[tmp10 << 4 & 63]}==`;
        } else {
          str = "";
          if (2 === result) {
            const sum3 = (arg0[length - 2] << 8) + arg0[length - 1];
            str = `${"" + closure_0[tmp13 >> 10] + closure_0[tmp13 >> 4 & 63] + closure_0[tmp13 << 2 & 63]}=`;
          }
        }
        items.push(str);
        return items.join("");
      };
      dependencyMap = [];
      const dependencyMap2 = [];
      closure_2 = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    },
    (arg0, arg1) => {
      arg1.read = (arg0, arg1, arg2, exponent, arg4) => {
        let num = 0;
        const diff = 8 * arg4 - exponent;
        if (arg2) {
          num = arg4 - 1;
        }
        let num3 = 1;
        let num4 = 1;
        if (arg2) {
          num4 = -1;
        }
        const diff1 = diff - num3;
        let sum = num + num4;
        let sum1 = -7 + diff1;
        let sum2 = tmp5;
        let sum5 = sum;
        let tmp10 = tmp5;
        let tmp11 = sum1;
        if (0 < sum1) {
          do {
            sum2 = 256 * sum2 + arg0[arg1 + sum];
            sum = sum + num4;
            sum1 = sum1 - 8;
            sum5 = sum;
            tmp10 = sum2;
            tmp11 = sum1;
          } while (0 < sum1);
        }
        let sum4 = tmp10 & (num3 << tmp12) - num3;
        let sum3 = tmp11 + exponent;
        let tmp15 = sum4;
        if (sum3 > 0) {
          do {
            sum4 = 256 * sum4 + arg0[arg1 + sum5];
            sum5 = sum5 + num4;
            sum3 = sum3 - 8;
            tmp15 = sum4;
          } while (0 < sum3);
        }
        const diff2 = (num3 << diff1) - num3;
        if (0 === tmp10 >> -tmp11) {
          let diff3 = num3 - tmp17;
          let sum6 = tmp15;
        } else if (tmp18 === diff2) {
          let num6 = NaN;
          if (!tmp15) {
            let num7 = num3;
            if (tmp6) {
              num7 = -1;
            }
            num6 = Infinity * num7;
          }
          return num6;
        } else {
          const _Math = Math;
          sum6 = tmp15 + Math.pow(2, exponent);
          diff3 = tmp18 - tmp17;
        }
        if (arg0[arg1 + num] >> 7) {
          num3 = -1;
        }
        return num3 * sum6 * Math.pow(2, diff3 - exponent);
      };
      arg1.write = (arg0, arg1, arg2, arg3, exponent, arg5) => {
        let num = 0;
        const diff = 8 * arg5 - exponent;
        if (23 === exponent) {
          const _Math = Math;
          const _Math2 = Math;
          num = Math.pow(2, -24) - Math.pow(2, -77);
          const powResult = Math.pow(2, -24);
        }
        let num5 = 0;
        if (!arg3) {
          num5 = arg5 - 1;
        }
        let num7 = -1;
        if (arg3) {
          num7 = 1;
        }
        if (arg1 < 0) {
          let num8 = 1;
        } else {
          num8 = 0;
          if (0 === arg1) {
            num8 = 0;
          }
        }
        const diff1 = diff - 1;
        const diff2 = (1 << diff1) - 1;
        const absolute = Math.abs(arg1);
        if (!isNaN(absolute)) {
          if (absolute !== Infinity) {
            const _Math7 = Math;
            const _Math8 = Math;
            const _Math9 = Math;
            const rounded = Math.floor(Math.log(absolute) / Math.LN2);
            const _Math10 = Math;
            const powResult1 = Math.pow(2, -rounded);
            let result = powResult1;
            let diff3 = rounded;
            if (absolute * powResult1 < 1) {
              diff3 = rounded - 1;
              result = powResult1 * 2;
            }
            if (diff3 + (diff2 >> 1) >= 1) {
              let result1 = num / result;
            } else {
              const _Math3 = Math;
              result1 = num * Math.pow(2, 1 - tmp9);
            }
            const sum = absolute + result1;
            let result2 = result;
            let sum1 = diff3;
            if (sum * result >= 2) {
              sum1 = diff3 + 1;
              result2 = result / 2;
            }
            let num11 = 0;
            let num12 = diff2;
            if (sum1 + (diff2 >> 1) < diff2) {
              if (sum1 + tmp9 >= 1) {
                const _Math6 = Math;
                const diff4 = sum * result2 - 1;
                num11 = diff4 * Math.pow(2, exponent);
                num12 = sum1 + tmp9;
              } else {
                const _Math4 = Math;
                const _Math5 = Math;
                const result3 = sum * Math.pow(2, tmp9 - 1);
                num11 = result3 * Math.pow(2, exponent);
                num12 = 0;
              }
            }
          }
          let result4 = num11;
          let sum2 = num5;
          let diff5 = exponent;
          let tmp21 = num5;
          let tmp22 = num11;
          let tmp23 = exponent;
          if (exponent >= 8) {
            do {
              arg0[arg2 + sum2] = 255 & result4;
              sum2 = sum2 + num7;
              result4 = result4 / 256;
              diff5 = diff5 - 8;
              tmp21 = sum2;
              tmp22 = result4;
              tmp23 = diff5;
            } while (8 <= diff5);
          }
          let result5 = num12 << tmp23 | tmp22;
          let sum3 = diff1 + tmp23;
          let sum4 = tmp21;
          let tmp27 = tmp21;
          if (sum3 > 0) {
            do {
              arg0[arg2 + sum4] = 255 & result5;
              sum4 = sum4 + num7;
              result5 = result5 / 256;
              sum3 = sum3 - 8;
              tmp27 = sum4;
            } while (0 < sum3);
          }
          const diff6 = arg2 + tmp27 - num7;
          arg0[diff6] = arg0[diff6] | 128 * num8;
        }
        let num13 = 0;
        if (isNaN(absolute)) {
          num13 = 1;
        }
        num11 = num13;
        num12 = diff2;
      };
    },
    (arg0, arg1) => {
      const toString = {}.toString;
      arg0.exports = Array.isArray || ((arg0) => {
        const call = toString.call;
        return "[object Array]" == (typeof call === "unknown" ? toString() : call(arg0));
      });
    },
    (arg0, arg1) => {
      function defaultSetTimout() {
        const error = new Error("setTimeout has not been defined");
        throw error;
      }
      function defaultClearTimeout() {
        const error = new Error("clearTimeout has not been defined");
        throw error;
      }
      function runTimeout(cleanUpNextTick) {
        if (_setTimeout6 === setTimeout) {
          const _setTimeout5 = setTimeout;
          return setTimeout(cleanUpNextTick, 0);
        } else {
          if (_setTimeout6 === defaultSetTimout) {
            const _setTimeout = setTimeout;
            if (setTimeout) {
              const _setTimeout2 = setTimeout;
              const _setTimeout3 = setTimeout;
              _setTimeout6 = setTimeout;
              const _setTimeout4 = setTimeout;
              return setTimeout(cleanUpNextTick, 0);
            }
          }
          try {
            return _setTimeout6(cleanUpNextTick, 0);
          } catch (err) {
            try {
              const call = _setTimeout6.call;
              if (typeof call === "unknown") {
                let callResult = _setTimeout6(tmp, 0);
              } else {
                callResult = call(null, tmp, 0);
              }
              return callResult;
            } catch (err) {
              const self = this;
              const call2 = _setTimeout6.call;
              if (typeof call2 === "unknown") {
                let call2Result = _setTimeout6(tmp, 0);
              } else {
                call2Result = call2(self, tmp, 0);
              }
              return call2Result;
            }
          }
        }
      }
      function cleanUpNextTick() {
        let tmp = c7;
        if (c7) {
          tmp = _null;
        }
        if (tmp) {
          c7 = false;
          if (_null.length) {
            closure_6 = _null.concat(closure_6);
          } else {
            c8 = -1;
          }
          if (closure_6.length) {
            if (!c7) {
              c7 = true;
              let length = closure_6.length;
              while (length) {
                _null = closure_6;
                closure_6 = [];
                let sum = c8 + 1;
                c8 = sum;
                if (sum < length) {
                  do {
                    if (_null) {
                      obj = tmp15[c8];
                      let runResult = obj.run();
                    }
                    sum1 = c8 + 1;
                    c8 = sum1;
                  } while (sum1 < length);
                }
                c8 = -1;
                length = closure_6.length;
              }
              _null = null;
              c7 = false;
              (function runClearTimeout(arg0) {
                if (clearTimeout === clearTimeout) {
                  const _clearTimeout5 = clearTimeout;
                  return clearTimeout(arg0);
                } else {
                  if (clearTimeout === defaultClearTimeout) {
                    const _clearTimeout = clearTimeout;
                    if (clearTimeout) {
                      const _clearTimeout2 = clearTimeout;
                      const _clearTimeout3 = clearTimeout;
                      const _clearTimeout4 = clearTimeout;
                      return clearTimeout(arg0);
                    }
                  }
                  try {
                    return clearTimeout(arg0);
                  } catch (err) {
                    try {
                      const call = clearTimeout.call;
                      if (typeof call === "unknown") {
                        let callResult = clearTimeout(tmp);
                      } else {
                        callResult = call(null, tmp);
                      }
                      return callResult;
                    } catch (err) {
                      const self = this;
                      const call2 = clearTimeout.call;
                      if (typeof call2 === "unknown") {
                        let call2Result = clearTimeout(tmp);
                      } else {
                        call2Result = call2(self, tmp);
                      }
                      return call2Result;
                    }
                  }
                }
              })(runTimeout(cleanUpNextTick));
              const tmp9 = runTimeout(cleanUpNextTick);
            }
          }
        }
      }
      function drainQueue() {
        if (!c7) {
          c7 = true;
          let length = closure_6.length;
          while (length) {
            c5 = closure_6;
            closure_6 = [];
            let sum = c8 + 1;
            c8 = sum;
            if (sum < length) {
              do {
                if (c5) {
                  obj = tmp9[c8];
                  let runResult = obj.run();
                }
                sum1 = c8 + 1;
                c8 = sum1;
              } while (sum1 < length);
            }
            c8 = -1;
            length = closure_6.length;
          }
          c5 = null;
          c7 = false;
          (function runClearTimeout(arg0) {
            if (clearTimeout === clearTimeout) {
              const _clearTimeout5 = clearTimeout;
              return clearTimeout(arg0);
            } else {
              if (clearTimeout === defaultClearTimeout) {
                const _clearTimeout = clearTimeout;
                if (clearTimeout) {
                  const _clearTimeout2 = clearTimeout;
                  const _clearTimeout3 = clearTimeout;
                  const _clearTimeout4 = clearTimeout;
                  return clearTimeout(arg0);
                }
              }
              try {
                return clearTimeout(arg0);
              } catch (err) {
                try {
                  const call = clearTimeout.call;
                  if (typeof call === "unknown") {
                    let callResult = clearTimeout(tmp);
                  } else {
                    callResult = call(null, tmp);
                  }
                  return callResult;
                } catch (err) {
                  const self = this;
                  const call2 = clearTimeout.call;
                  if (typeof call2 === "unknown") {
                    let call2Result = clearTimeout(tmp);
                  } else {
                    call2Result = call2(self, tmp);
                  }
                  return call2Result;
                }
              }
            }
          })(runTimeout(cleanUpNextTick));
          const tmp3 = runTimeout(cleanUpNextTick);
        }
      }
      class Item {
        constructor(arg0, arg1) {
          return;
        }
        run() {
          fun = this.fun;
          applyResult = fun.apply(null, this.array);
          return;
        }
      }
      function noop() {

      }
      const exports = {};
      arg0.exports = exports;
      (() => {
        try {
          const _setTimeout = setTimeout;
          if (typeof setTimeout === "function") {
            let _setTimeout2 = setTimeout;
          } else {
            _setTimeout2 = defaultSetTimout;
          }
          closure_0 = _setTimeout2;
          try {
            const _clearTimeout = clearTimeout;
            if (typeof clearTimeout === "function") {
              let _clearTimeout2 = clearTimeout;
            } else {
              _clearTimeout2 = defaultClearTimeout;
            }
            closure_1 = _clearTimeout2;
          } catch (err) {
            closure_1 = defaultClearTimeout;
          }
        } catch (err) {
          closure_0 = defaultSetTimout;
        }
      })();
      closure_6 = [];
      c7 = false;
      c8 = -1;
      exports.nextTick = (fun) => {
        let length;
        const array = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          let num = 1;
          if (1 < arguments.length) {
            do {
              array[num - 1] = arguments[num];
              num = num + 1;
              length = arguments.length;
            } while (num < length);
          }
        }
        Object.create(Item.prototype);
        obj = { fun, array };
        closure_6.push(obj);
        if (!tmp4) {
          runTimeout(drainQueue);
        }
        tmp4 = 1 !== closure_6.length || c7;
      };
      exports.title = "browser";
      exports.browser = true;
      exports.env = {};
      exports.argv = [];
      exports.version = "";
      exports.versions = {};
      exports.on = noop;
      exports.addListener = noop;
      exports.once = noop;
      exports.off = noop;
      exports.removeListener = noop;
      exports.removeAllListeners = noop;
      exports.emit = noop;
      exports.binding = (arg0) => {
        const error = new Error("process.binding is not supported");
        throw error;
      };
      exports.cwd = () => "/";
      exports.chdir = (arg0) => {
        const error = new Error("process.chdir is not supported");
        throw error;
      };
      exports.umask = () => 0;
    },
    (arg0, arg1) => {

    },
    (arg0, arg1, fn) => {
      closure_0 = arg1;
      fn = (arg0) => {
        closure_0 = arg0;
        re1 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        closure_0.resolve = () => {
          let tmp20;
          let diff = arguments.length - 1;
          let flag = false;
          let str = "";
          let str2 = "";
          let flag2 = false;
          let str3 = "";
          if (-1 <= diff) {
            while (true) {
              let tmp3 = flag;
              if (0 <= diff) {
                let str4 = arguments[diff];
              } else {
                str4 = closure_0.cwd();
              }
              if (typeof str4 !== "string") {
                break;
              } else {
                let text = str2;
                if (str4) {
                  text = `${str4}/${str2}`;
                  tmp3 = "/" === str4.charAt(0);
                }
                let diff1 = diff - 1;
                flag2 = tmp3;
                str3 = text;
                if (-1 <= diff1) {
                  diff = diff1;
                  flag = tmp3;
                  str2 = text;
                  str3 = text;
                  flag2 = tmp3;
                }
              }
            }
            const _TypeError = TypeError;
            const typeError = new TypeError("Arguments to path.resolve must be strings");
            throw typeError;
          }
          if (flag2) {
            str = "/";
          }
          const parts = str3.split("/");
          if (parts.filter) {
            let found = parts.filter((item) => item);
          } else {
            items = [];
            let num = 0;
            found = items;
            if (0 < parts.length) {
              do {
                if (parts[num]) {
                  let arr = items.push(parts[num]);
                }
                num = num + 1;
                found = items;
              } while (num < parts.length);
            }
          }
          let diff2 = found.length - 1;
          let num2 = 0;
          let num3 = 0;
          if (0 <= diff2) {
            do {
              let tmp11 = found[diff2];
              if ("." === tmp11) {
                let spliceResult = found.splice(diff2, 1);
                let sum = num2;
              } else if (".." === tmp11) {
                let spliceResult1 = found.splice(diff2, 1);
                sum = num2 + 1;
              } else {
                sum = num2;
                if (num2) {
                  let spliceResult2 = found.splice(diff2, 1);
                  sum = num2 - 1;
                }
              }
              diff2 = diff2 - 1;
              num2 = sum;
              num3 = sum;
            } while (0 <= diff2);
          }
          if (!flag2) {
            let diff3 = num3 - 1;
            if (num3) {
              do {
                arr = found.unshift("..");
                tmp20 = diff3;
                diff3 = diff3 - 1;
              } while (tmp20);
            }
          }
          return str + found.join("/") || ".";
        };
        closure_0.normalize = (str) => {
          let tmp15;
          const isAbsoluteResult = closure_0.isAbsolute(str);
          const parts = str.split("/");
          if (parts.filter) {
            let found = parts.filter((item) => item);
          } else {
            items = [];
            let num = 0;
            found = items;
            if (0 < parts.length) {
              do {
                if (parts[num]) {
                  let arr = items.push(parts[num]);
                }
                num = num + 1;
                found = items;
              } while (num < parts.length);
            }
          }
          let diff = found.length - 1;
          let num3 = 0;
          let num4 = 0;
          if (0 <= diff) {
            do {
              let tmp6 = found[diff];
              if ("." === tmp6) {
                let spliceResult = found.splice(diff, 1);
                let sum = num3;
              } else if (".." === tmp6) {
                let spliceResult1 = found.splice(diff, 1);
                sum = num3 + 1;
              } else {
                sum = num3;
                if (num3) {
                  let spliceResult2 = found.splice(diff, 1);
                  sum = num3 - 1;
                }
              }
              diff = diff - 1;
              num3 = sum;
              num4 = sum;
            } while (0 <= diff);
          }
          if (!isAbsoluteResult) {
            let diff1 = num4 - 1;
            if (num4) {
              do {
                arr = found.unshift("..");
                tmp15 = diff1;
                diff1 = diff1 - 1;
              } while (tmp15);
            }
          }
          str = found.join("/");
          let tmp16 = str;
          if (!str) {
            tmp16 = isAbsoluteResult;
          }
          if (!tmp16) {
            str = ".";
          }
          let tmp17 = str;
          if (str) {
            tmp17 = "/" === tmp2;
          }
          let text = str;
          if (tmp17) {
            text = `${str}/`;
          }
          let str2 = "";
          if (isAbsoluteResult) {
            str2 = "/";
          }
          return str2 + text;
        };
        closure_0.isAbsolute = (str) => "/" === str.charAt(0);
        closure_0.join = () => {
          const call = slice.call;
          if (typeof call === "unknown") {
            let substr = slice(0);
          } else {
            substr = call(arguments, 0);
          }
          if (substr.filter) {
            let found = substr.filter((item, index) => {
              if (typeof item !== "string") {
                const _TypeError = TypeError;
                const typeError = new TypeError("Arguments to path.join must be strings");
                throw typeError;
              } else {
                return item;
              }
            });
          } else {
            items = [];
            let num2 = 0;
            found = items;
            if (0 < substr.length) {
              while (typeof substr[num2] === "string") {
                if (tmp3) {
                  let arr = items.push(substr[num2]);
                }
                num2 = num2 + 1;
                found = items;
              }
              let _TypeError = TypeError;
              let typeError = new TypeError("Arguments to path.join must be strings");
              throw typeError;
            }
          }
          return closure_0.normalize(found.join("/"));
        };
        closure_0.relative = (arg0, arg1) => {
          let length;
          const str = closure_0.resolve(arg0);
          const str2 = closure_0.resolve(arg0).substr(1);
          const str3 = closure_0.resolve(arg1);
          const parts = str2.split("/");
          let num = 0;
          if (0 < parts.length) {
            let num2 = 0;
            num = 0;
            if ("" === parts[0]) {
              const sum = num2 + 1;
              num = sum;
              while (sum < parts.length) {
                num2 = sum;
                num = sum;
                if ("" !== parts[sum]) {
                  break;
                }
              }
            }
          }
          const diff = parts.length - 1;
          let tmp3 = diff;
          if (0 <= diff) {
            let tmp4 = diff;
            tmp3 = diff;
            if ("" === parts[diff]) {
              const diff1 = tmp4 - 1;
              tmp3 = diff1;
              while (0 <= diff1) {
                tmp4 = diff1;
                tmp3 = diff1;
                if ("" !== parts[diff1]) {
                  break;
                }
              }
            }
          }
          if (tmp3 < num) {
            items = [];
          } else {
            items = parts.slice(num, tmp3 - num + 1);
          }
          const parts1 = closure_0.resolve(arg1).substr(1).split("/");
          let num3 = 0;
          if (0 < parts1.length) {
            let num4 = 0;
            num3 = 0;
            if ("" === parts1[0]) {
              const sum1 = num4 + 1;
              num3 = sum1;
              while (sum1 < parts1.length) {
                num4 = sum1;
                num3 = sum1;
                if ("" !== parts1[sum1]) {
                  break;
                }
              }
            }
          }
          const diff2 = parts1.length - 1;
          let tmp8 = diff2;
          if (0 <= diff2) {
            let tmp9 = diff2;
            tmp8 = diff2;
            if ("" === parts1[diff2]) {
              const diff3 = tmp9 - 1;
              tmp8 = diff3;
              while (0 <= diff3) {
                tmp9 = diff3;
                tmp8 = diff3;
                if ("" !== parts1[diff3]) {
                  break;
                }
              }
            }
          }
          if (tmp8 < num3) {
            let items1 = [];
          } else {
            items1 = parts1.slice(num3, tmp8 - num3 + 1);
          }
          const bound = Math.min(items.length, items1.length);
          let num5 = 0;
          let tmp12 = bound;
          if (0 < bound) {
            tmp12 = num5;
            while (items[num5] === items1[num5]) {
              num5 = num5 + 1;
              tmp12 = bound;
              if (num5 >= bound) {
                break;
              }
            }
          }
          const items2 = [];
          let sum2 = tmp12;
          if (tmp12 < items.length) {
            do {
              let arr = items2.push("..");
              sum2 = sum2 + 1;
              length = items.length;
            } while (sum2 < length);
          }
          const combined = items2.concat(items1.slice(tmp12));
          return combined.join("/");
        };
        closure_0.sep = "/";
        closure_0.delimiter = ":";
        closure_0.dirname = (arg0) => {
          const match = re1.exec(arg0);
          const substr = match.slice(1);
          [tmp2, str] = substr;
          if (tmp2) {
            let substr1 = str;
            if (str) {
              substr1 = str.substr(0, str.length - 1);
            }
            let str2 = tmp2 + substr1;
          } else {
            str2 = ".";
          }
          return str2;
        };
        closure_0.basename = (arg0, arg1) => {
          const match = re1.exec(arg0);
          const str = match.slice(1)[2];
          let tmp = arg1;
          if (arg1) {
            tmp = str.substr(-1 * arg1.length) === arg1;
          }
          let substr = str;
          if (tmp) {
            substr = str.substr(0, str.length - arg1.length);
          }
          return substr;
        };
        closure_0.extname = (arg0) => {
          const match = re1.exec(arg0);
          return match.slice(1)[3];
        };
        closure_2 = "b" === "ab".substr(-1) ? ((str, arg1, arg2) => str.substr(arg1, arg2)) : ((str, arg1, arg2) => {
          let sum = arg1;
          if (arg1 < 0) {
            sum = str.length + arg1;
          }
          return str.substr(sum, arg2);
        });
      };
      let call = fn.call;
      let tmp = fn(7);
      if (typeof call === "unknown") {
        closure_0 = tmp;
        let re1 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        arg1.resolve = () => {
          let tmp20;
          let diff = arguments.length - 1;
          let flag = false;
          let str = "";
          let str2 = "";
          let flag2 = false;
          let str3 = "";
          if (-1 <= diff) {
            while (true) {
              let tmp3 = flag;
              if (0 <= diff) {
                let str4 = arguments[diff];
              } else {
                str4 = closure_0.cwd();
              }
              if (typeof str4 !== "string") {
                break;
              } else {
                let text = str2;
                if (str4) {
                  text = `${str4}/${str2}`;
                  tmp3 = "/" === str4.charAt(0);
                }
                let diff1 = diff - 1;
                flag2 = tmp3;
                str3 = text;
                if (-1 <= diff1) {
                  diff = diff1;
                  flag = tmp3;
                  str2 = text;
                  str3 = text;
                  flag2 = tmp3;
                }
              }
            }
            const _TypeError = TypeError;
            const typeError = new TypeError("Arguments to path.resolve must be strings");
            throw typeError;
          }
          if (flag2) {
            str = "/";
          }
          const parts = str3.split("/");
          if (parts.filter) {
            let found = parts.filter((item) => item);
          } else {
            items = [];
            let num = 0;
            found = items;
            if (0 < parts.length) {
              do {
                if (parts[num]) {
                  let arr = items.push(parts[num]);
                }
                num = num + 1;
                found = items;
              } while (num < parts.length);
            }
          }
          let diff2 = found.length - 1;
          let num2 = 0;
          let num3 = 0;
          if (0 <= diff2) {
            do {
              let tmp11 = found[diff2];
              if ("." === tmp11) {
                let spliceResult = found.splice(diff2, 1);
                let sum = num2;
              } else if (".." === tmp11) {
                let spliceResult1 = found.splice(diff2, 1);
                sum = num2 + 1;
              } else {
                sum = num2;
                if (num2) {
                  let spliceResult2 = found.splice(diff2, 1);
                  sum = num2 - 1;
                }
              }
              diff2 = diff2 - 1;
              num2 = sum;
              num3 = sum;
            } while (0 <= diff2);
          }
          if (!flag2) {
            let diff3 = num3 - 1;
            if (num3) {
              do {
                arr = found.unshift("..");
                tmp20 = diff3;
                diff3 = diff3 - 1;
              } while (tmp20);
            }
          }
          return str + found.join("/") || ".";
        };
        arg1.normalize = (str) => {
          let tmp15;
          const isAbsoluteResult = closure_0.isAbsolute(str);
          const parts = str.split("/");
          if (parts.filter) {
            let found = parts.filter((item) => item);
          } else {
            items = [];
            let num = 0;
            found = items;
            if (0 < parts.length) {
              do {
                if (parts[num]) {
                  let arr = items.push(parts[num]);
                }
                num = num + 1;
                found = items;
              } while (num < parts.length);
            }
          }
          let diff = found.length - 1;
          let num3 = 0;
          let num4 = 0;
          if (0 <= diff) {
            do {
              let tmp6 = found[diff];
              if ("." === tmp6) {
                let spliceResult = found.splice(diff, 1);
                let sum = num3;
              } else if (".." === tmp6) {
                let spliceResult1 = found.splice(diff, 1);
                sum = num3 + 1;
              } else {
                sum = num3;
                if (num3) {
                  let spliceResult2 = found.splice(diff, 1);
                  sum = num3 - 1;
                }
              }
              diff = diff - 1;
              num3 = sum;
              num4 = sum;
            } while (0 <= diff);
          }
          if (!isAbsoluteResult) {
            let diff1 = num4 - 1;
            if (num4) {
              do {
                arr = found.unshift("..");
                tmp15 = diff1;
                diff1 = diff1 - 1;
              } while (tmp15);
            }
          }
          str = found.join("/");
          let tmp16 = str;
          if (!str) {
            tmp16 = isAbsoluteResult;
          }
          if (!tmp16) {
            str = ".";
          }
          let tmp17 = str;
          if (str) {
            tmp17 = "/" === tmp2;
          }
          let text = str;
          if (tmp17) {
            text = `${str}/`;
          }
          let str2 = "";
          if (isAbsoluteResult) {
            str2 = "/";
          }
          return str2 + text;
        };
        arg1.isAbsolute = (str) => "/" === str.charAt(0);
        arg1.join = () => {
          const call = slice.call;
          if (typeof call === "unknown") {
            let substr = slice(0);
          } else {
            substr = call(arguments, 0);
          }
          if (substr.filter) {
            let found = substr.filter((item, index) => {
              if (typeof item !== "string") {
                const _TypeError = TypeError;
                const typeError = new TypeError("Arguments to path.join must be strings");
                throw typeError;
              } else {
                return item;
              }
            });
          } else {
            items = [];
            let num2 = 0;
            found = items;
            if (0 < substr.length) {
              while (typeof substr[num2] === "string") {
                if (tmp3) {
                  let arr = items.push(substr[num2]);
                }
                num2 = num2 + 1;
                found = items;
              }
              let _TypeError = TypeError;
              let typeError = new TypeError("Arguments to path.join must be strings");
              throw typeError;
            }
          }
          return closure_0.normalize(found.join("/"));
        };
        arg1.relative = (arg0, arg1) => {
          let length;
          const str = closure_0.resolve(arg0);
          const str2 = closure_0.resolve(arg0).substr(1);
          const str3 = closure_0.resolve(arg1);
          const parts = str2.split("/");
          let num = 0;
          if (0 < parts.length) {
            let num2 = 0;
            num = 0;
            if ("" === parts[0]) {
              const sum = num2 + 1;
              num = sum;
              while (sum < parts.length) {
                num2 = sum;
                num = sum;
                if ("" !== parts[sum]) {
                  break;
                }
              }
            }
          }
          const diff = parts.length - 1;
          let tmp3 = diff;
          if (0 <= diff) {
            let tmp4 = diff;
            tmp3 = diff;
            if ("" === parts[diff]) {
              const diff1 = tmp4 - 1;
              tmp3 = diff1;
              while (0 <= diff1) {
                tmp4 = diff1;
                tmp3 = diff1;
                if ("" !== parts[diff1]) {
                  break;
                }
              }
            }
          }
          if (tmp3 < num) {
            items = [];
          } else {
            items = parts.slice(num, tmp3 - num + 1);
          }
          const parts1 = closure_0.resolve(arg1).substr(1).split("/");
          let num3 = 0;
          if (0 < parts1.length) {
            let num4 = 0;
            num3 = 0;
            if ("" === parts1[0]) {
              const sum1 = num4 + 1;
              num3 = sum1;
              while (sum1 < parts1.length) {
                num4 = sum1;
                num3 = sum1;
                if ("" !== parts1[sum1]) {
                  break;
                }
              }
            }
          }
          const diff2 = parts1.length - 1;
          let tmp8 = diff2;
          if (0 <= diff2) {
            let tmp9 = diff2;
            tmp8 = diff2;
            if ("" === parts1[diff2]) {
              const diff3 = tmp9 - 1;
              tmp8 = diff3;
              while (0 <= diff3) {
                tmp9 = diff3;
                tmp8 = diff3;
                if ("" !== parts1[diff3]) {
                  break;
                }
              }
            }
          }
          if (tmp8 < num3) {
            let items1 = [];
          } else {
            items1 = parts1.slice(num3, tmp8 - num3 + 1);
          }
          const bound = Math.min(items.length, items1.length);
          let num5 = 0;
          let tmp12 = bound;
          if (0 < bound) {
            tmp12 = num5;
            while (items[num5] === items1[num5]) {
              num5 = num5 + 1;
              tmp12 = bound;
              if (num5 >= bound) {
                break;
              }
            }
          }
          const items2 = [];
          let sum2 = tmp12;
          if (tmp12 < items.length) {
            do {
              let arr = items2.push("..");
              sum2 = sum2 + 1;
              length = items.length;
            } while (sum2 < length);
          }
          const combined = items2.concat(items1.slice(tmp12));
          return combined.join("/");
        };
        arg1.sep = "/";
        arg1.delimiter = ":";
        arg1.dirname = (arg0) => {
          const match = re1.exec(arg0);
          const substr = match.slice(1);
          [tmp2, str] = substr;
          if (tmp2) {
            let substr1 = str;
            if (str) {
              substr1 = str.substr(0, str.length - 1);
            }
            let str2 = tmp2 + substr1;
          } else {
            str2 = ".";
          }
          return str2;
        };
        arg1.basename = (arg0, arg1) => {
          const match = re1.exec(arg0);
          const str = match.slice(1)[2];
          let tmp = arg1;
          if (arg1) {
            tmp = str.substr(-1 * arg1.length) === arg1;
          }
          let substr = str;
          if (tmp) {
            substr = str.substr(0, str.length - arg1.length);
          }
          return substr;
        };
        arg1.extname = (arg0) => {
          const match = re1.exec(arg0);
          return match.slice(1)[3];
        };
        let substr = "ab".substr;
        closure_2 = "b" === "ab".substr(-1) ? ((str, arg1, arg2) => str.substr(arg1, arg2)) : ((str, arg1, arg2) => {
          let sum = arg1;
          if (arg1 < 0) {
            sum = str.length + arg1;
          }
          return str.substr(sum, arg2);
        });
      } else {
        call(arg1, tmp);
      }
    },
    (arg0, arg1, fn) => {
      closure_0 = arg1;
      closure_1 = fn;
      fn = (arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        function inspect(arg0, showHidden) {
          obj = { seen: [], stylize: stylizeNoColor };
          if (arguments.length >= 3) {
            obj.depth = arguments[2];
          }
          if (arguments.length >= 4) {
            obj.colors = arguments[3];
          }
          if (typeof showHidden === "boolean") {
            obj.showHidden = showHidden;
          } else if (showHidden) {
            closure_0._extend(obj, showHidden);
          }
          if (undefined === obj.showHidden) {
            obj.showHidden = false;
          }
          if (undefined === obj.depth) {
            obj.depth = 2;
          }
          if (undefined === obj.colors) {
            obj.colors = false;
          }
          if (undefined === obj.customInspect) {
            obj.customInspect = true;
          }
          if (obj.colors) {
            obj.stylize = stylizeWithColor;
          }
          return formatValue(obj, arg0, obj.depth);
        }
        function stylizeWithColor(arg0, arg1) {
          let text = arg0;
          if (inspect.styles[arg1]) {
            text = `${"\u001B[" + tmp.colors[tmp2][0] + "m" + arg0 + "\u001B[" + tmp.colors[tmp2][1]}m`;
          }
          return text;
        }
        function stylizeNoColor(arg0, arg1) {
          return arg0;
        }
        function formatValue(customInspect, inspect, arg2) {
          obj = customInspect;
          closure_1 = inspect;
          closure_2 = arg2;
          if (customInspect.customInspect) {
            if (inspect) {
              if (typeof inspect.inspect === "function") {
                if (inspect.inspect !== closure_0.inspect) {
                  const inspectResult = inspect.inspect(arg2, customInspect);
                  let tmp52 = inspectResult;
                  if (typeof inspectResult !== "string") {
                    tmp52 = formatValue(customInspect, inspectResult, arg2);
                  }
                  return tmp52;
                }
              }
            }
          }
          if (undefined === inspect) {
            let stylizeResult = customInspect.stylize("undefined", "undefined");
          } else if (typeof inspect === "string") {
            const _JSON = JSON;
            const str3 = JSON.stringify(inspect);
            const str5 = JSON.stringify(inspect).replace(/^"|"$/g, "");
            stylizeResult = customInspect.stylize(`'${JSON.stringify(inspect).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\"")}'`, "string");
            const str7 = JSON.stringify(inspect).replace(/^"|"$/g, "").replace(/'/g, "\\'");
          } else if (typeof inspect === "number") {
            stylizeResult = customInspect.stylize("" + inspect, "number");
          } else if (typeof inspect === "boolean") {
            stylizeResult = customInspect.stylize("" + inspect, "boolean");
          } else if (null === inspect) {
            stylizeResult = customInspect.stylize("null", "null");
          }
          if (stylizeResult) {
            return stylizeResult;
          } else {
            const _Object = Object;
            const keys = Object.keys(inspect);
            obj = {};
            const item = keys.forEach((item, index) => {
              obj[item] = true;
            });
            let ownPropertyNames = keys;
            if (customInspect.showHidden) {
              const _Object2 = Object;
              ownPropertyNames = Object.getOwnPropertyNames(inspect);
            }
            let tmp5 = typeof inspect === "object";
            let tmp6 = tmp5;
            if (typeof inspect === "object") {
              tmp6 = null !== inspect;
            }
            if (tmp6) {
              const _Object3 = Object;
              const call = toString.call;
              let tmp7 = "[object Error]" === (typeof call === "unknown" ? toString() : call(inspect));
              if (!tmp7) {
                const _Error = Error;
                tmp7 = inspect instanceof Error;
              }
              tmp6 = tmp7;
            }
            if (tmp6) {
              const _Error6 = Error;
              const call17 = toString7.call;
              return "[" + (typeof call17 === "unknown" ? toString7() : call17(inspect)) + "]";
            }
            if (0 === ownPropertyNames.length) {
              if (typeof inspect === "function") {
                let str43 = "";
                if (inspect.name) {
                  str43 = `: ${inspect.name}`;
                }
                const _HermesInternal3 = HermesInternal;
                return customInspect.stylize("[Function" + str43 + "]", "special");
              } else {
                let tmp56 = tmp5;
                if (typeof inspect === "object") {
                  tmp56 = null !== inspect;
                }
                if (!tmp56) {
                  if (tmp56) {
                    const _RegExp3 = RegExp;
                    const call16 = toString6.call;
                    return customInspect.stylize(typeof call16 === "unknown" ? toString6() : call16(inspect), "regexp");
                  } else {
                    let tmp10 = tmp5;
                    if (typeof inspect === "object") {
                      tmp10 = null !== inspect;
                    }
                    if (!tmp10) {
                      if (tmp10) {
                        const _Date2 = Date;
                        const call15 = toString5.call;
                        return customInspect.stylize(typeof call15 === "unknown" ? toString5() : call15(inspect), "date");
                      } else {
                        let tmp13 = tmp5;
                        if (typeof inspect === "object") {
                          tmp13 = null !== inspect;
                        }
                        if (tmp13) {
                          const _Object6 = Object;
                          const call4 = toString2.call;
                          let tmp14 = "[object Error]" === (typeof call4 === "unknown" ? toString2() : call4(inspect));
                          if (!tmp14) {
                            const _Error2 = Error;
                            tmp14 = inspect instanceof Error;
                          }
                          tmp13 = tmp14;
                        }
                        if (tmp13) {
                          const _Error5 = Error;
                          const call14 = toString4.call;
                          return "[" + (typeof call14 === "unknown" ? toString4() : call14(inspect)) + "]";
                        }
                      }
                    } else {
                      const _Object5 = Object;
                      let str15 = Object.prototype.toString;
                      const call3 = str15.call;
                      str15 = "[object Date]";
                      const tmp11 = typeof call3 === "unknown" ? str15() : call3(inspect);
                    }
                  }
                } else {
                  const _Object4 = Object;
                  let str14 = Object.prototype.toString;
                  const call2 = str14.call;
                  str14 = "[object RegExp]";
                  const tmp8 = typeof call2 === "unknown" ? str14() : call2(inspect);
                }
              }
            }
            let flag = false;
            c4 = false;
            items = ["{", "}"];
            const _Array = Array;
            if (Array.isArray(inspect)) {
              c4 = true;
              items = ["[", "]"];
              flag = true;
            }
            let str17 = "";
            let str18 = "";
            if (typeof inspect === "function") {
              let text = str17;
              if (inspect.name) {
                text = `: ${inspect.name}`;
              }
              const _HermesInternal = HermesInternal;
              str18 = " [Function" + text + "]";
            }
            let tmp16 = tmp5;
            if (typeof inspect === "object") {
              tmp16 = null !== inspect;
            }
            if (!tmp16) {
              if (!tmp16) {
                let tmp21 = tmp5;
                if (typeof inspect === "object") {
                  tmp21 = null !== inspect;
                }
                if (!tmp21) {
                  if (!tmp21) {
                    let tmp26 = tmp5;
                    if (typeof inspect === "object") {
                      tmp26 = null !== inspect;
                    }
                    if (tmp26) {
                      const _Object9 = Object;
                      const call9 = toString3.call;
                      let tmp27 = "[object Error]" === (typeof call9 === "unknown" ? toString3() : call9(inspect));
                      if (!tmp27) {
                        const _Error3 = Error;
                        tmp27 = inspect instanceof Error;
                      }
                      tmp26 = tmp27;
                    }
                    if (!tmp26) {
                      if (0 === ownPropertyNames.length) {
                        return items[0] + str18 + items[1];
                      }
                      if (arg2 >= 0) {
                        const seen = customInspect.seen;
                        seen.push(inspect);
                        if (flag) {
                          closure_129_0 = customInspect;
                          closure_129_1 = inspect;
                          closure_129_2 = arg2;
                          closure_129_3 = obj;
                          const items1 = [];
                          closure_129_4 = items1;
                          for (let num4 = 0; num4 < length; num4 = num4 + 1) {
                            let _String = String;
                            let StringResult = String(num4);
                            let _Object10 = Object;
                            hasOwnProperty = Object.prototype.hasOwnProperty;
                            let call11 = hasOwnProperty.call;
                            let push = items1.push;
                            if (typeof call11 === "unknown" ? hasOwnProperty(StringResult) : call11(inspect, StringResult)) {
                              let _String2 = String;
                              let flag3 = true;
                              let arr = push(formatProperty(customInspect, inspect, arg2, obj, String(num4), true));
                            } else {
                              let arr1 = push(str17);
                            }
                          }
                          const item1 = ownPropertyNames.forEach((item) => {
                            if (!item.match(/^\d+$/)) {
                              _true.push(formatProperty(obj, closure_1, closure_2, obj, item, true));
                            }
                          });
                          let mapped = items1;
                          length = inspect.length;
                        } else {
                          mapped = ownPropertyNames.map((item) => formatProperty(obj, closure_1, closure_2, obj, item, c4));
                        }
                        const seen1 = customInspect.seen;
                        seen1.pop();
                        if (mapped.reduce((acc, arr) => {
                          arr.indexOf("\n") >= 0;
                          return acc + arr.replace(/\u001b\[\d\d?m/g, "").length + 1;
                        }, 0) > 60) {
                          if (str17 !== str18) {
                            str17 = `${str18}
           `;
                          }
                          const sum = items[0] + str17;
                          let text1 = `${tmp44} ${arr4.join(",\n  ")} ${arr3[1]}`;
                        } else {
                          const sum1 = items[0] + str18;
                          text1 = `${tmp42} ${arr4.join(", ")} ${arr3[1]}`;
                        }
                      }
                      if (typeof inspect === "object") {
                        tmp5 = null !== inspect;
                      }
                      if (!tmp5) {
                        const stylize = customInspect.stylize;
                        if (!tmp5) {
                          stylize("[Object]", "special");
                        }
                        const _RegExp2 = RegExp;
                        let str38 = RegExp.prototype.toString;
                        const call13 = str38.call;
                        str38 = "regexp";
                        stylize(typeof call13 === "unknown" ? str38() : call13(inspect), "regexp");
                        const tmp47 = typeof call13 === "unknown" ? str38() : call13(inspect);
                      } else {
                        const _Object11 = Object;
                        let str35 = Object.prototype.toString;
                        const call12 = str35.call;
                        str35 = "[object RegExp]";
                        const tmp45 = typeof call12 === "unknown" ? str35() : call12(inspect);
                      }
                    } else {
                      const _Error4 = Error;
                      let str27 = Error.prototype.toString;
                      const call10 = str27.call;
                      const _HermesInternal2 = HermesInternal;
                      const text2 = `[${typeof call10 === "unknown" ? str27() : call10(inspect)}`;
                      str27 = " ";
                      const combined = " " + `[${typeof call10 === "unknown" ? str27() : call10(inspect)}` + "]";
                    }
                  } else {
                    const _Date = Date;
                    let str25 = Date.prototype.toUTCString;
                    const call8 = str25.call;
                    str25 = " ";
                    const text3 = ` ${typeof call8 === "unknown" ? str25() : call8(inspect)}`;
                    const tmp24 = typeof call8 === "unknown" ? str25() : call8(inspect);
                  }
                } else {
                  const _Object8 = Object;
                  let str24 = Object.prototype.toString;
                  const call7 = str24.call;
                  str24 = "[object Date]";
                  const tmp22 = typeof call7 === "unknown" ? str24() : call7(inspect);
                }
              } else {
                const _RegExp = RegExp;
                let str23 = RegExp.prototype.toString;
                const call6 = str23.call;
                str23 = " ";
                const text4 = ` ${typeof call6 === "unknown" ? str23() : call6(inspect)}`;
                const tmp19 = typeof call6 === "unknown" ? str23() : call6(inspect);
              }
            } else {
              const _Object7 = Object;
              let str22 = Object.prototype.toString;
              const call5 = str22.call;
              str22 = "[object RegExp]";
              const tmp17 = typeof call5 === "unknown" ? str22() : call5(inspect);
            }
          }
        }
        function formatProperty(stylize, arg1, arg2, arg3, key10009, arg5) {
          let iter = Object.getOwnPropertyDescriptor(arg1, key10009);
          if (!iter) {
            obj = { value: arg1[key10009] };
            iter = obj;
          }
          if (iter.get) {
            stylize = stylize.stylize;
            if (set) {
              let stylizeResult = stylize("[Getter/Setter]", "special");
            } else {
              stylizeResult = stylize("[Getter]", "special");
            }
          } else {
            let stylizeResult1;
            if (set) {
              stylizeResult1 = stylize.stylize("[Setter]", "special");
            }
            const _Object = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
            const call = hasOwnProperty.call;
            if (!(typeof call === "unknown" ? hasOwnProperty(key10009) : call(arg3, key10009))) {
              let text = `${"[" + key10009}]`;
            }
            if (stylizeResult1) {
              if (undefined === text) {
                if (arg5) {
                  if (key10009.match(/^\d+$/)) {
                    return stylizeResult1;
                  }
                }
                const _JSON = JSON;
                const str13 = JSON.stringify("" + key10009);
                if (str13.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                  text = stylize.stylize(str13.substr(1, str13.length - 2), "name");
                } else {
                  const str15 = str13.replace(/'/g, "\\'");
                  text = stylize.stylize(str13.replace(/'/g, "\\'").replace(/\\"/g, "\"").replace(/(^"|"$)/g, "'"), "string");
                  const str17 = str13.replace(/'/g, "\\'").replace(/\\"/g, "\"");
                }
              }
              return text + ": " + stylizeResult1;
            } else {
              const seen = stylize.seen;
              if (seen.indexOf(iter.value) < 0) {
                if (null === arg2) {
                  let arr2 = formatValue(stylize, iter.value, null);
                } else {
                  arr2 = formatValue(stylize, iter.value, arg2 - 1);
                }
                iter = arr2.indexOf("\n");
                if (iter <= -1) {
                  let stylizeResult2 = arr2;
                } else {
                  const parts = arr2.split("\n");
                  let str12 = parts.map;
                  if (arg5) {
                    str12 = str12((arg0) => "  " + arg0).join("\n");
                    let substr = str12.substr(2);
                    const str12Result = str12((arg0) => "  " + arg0);
                  } else {
                    str12((arg0) => "   " + arg0);
                    substr = `
          ${obj2.join("\n")}`;
                  }
                }
              } else {
                stylizeResult2 = stylize.stylize("[Circular]", "special");
              }
            }
          }
        }
        const re2 = /%[sdj%]/g;
        closure_0.format = (str) => {
          let length;
          let sum1;
          if (typeof str === "string") {
            closure_0 = 1;
            dependencyMap = arguments;
            const length2 = arguments.length;
            let _String = String;
            let replaced = String(str).replace(re2, (arg0) => {
              if ("%%" === arg0) {
                return "%";
              } else if (closure_0 >= length2) {
                return arg0;
              } else if ("%s" === arg0) {
                const _String = String;
                closure_0 = tmp12 + 1;
                return String(dependencyMap[+closure_0]);
              } else if ("%d" === arg0) {
                const _Number = Number;
                closure_0 = tmp8 + 1;
                return Number(dependencyMap[+closure_0]);
              } else if ("%j" === arg0) {
                try {
                  const _JSON = JSON;
                  closure_0 = tmp4 + 1;
                  return JSON.stringify(dependencyMap[+closure_0]);
                } catch (err) {
                  return "[Circular]";
                }
              } else {
                return arg0;
              }
            });
            let tmp13 = arguments[closure_0];
            let tmp16 = replaced;
            if (closure_0 < length2) {
              while (true) {
                if (null !== tmp13) {
                  let tmp19 = typeof tmp13 === "object";
                  if (typeof tmp13 === "object") {
                    tmp19 = null !== tmp13;
                  }
                  if (tmp19) {
                    let text = `${tmp11} ${inspect(tmp13)}`;
                  }
                  let sum = closure_0 + 1;
                  closure_0 = sum;
                  tmp13 = arguments[sum];
                  replaced = text;
                  tmp16 = text;
                  if (closure_0 >= length2) {
                    break;
                  }
                }
                text = `${tmp11} ${tmp13}`;
              }
            }
            return tmp16;
          } else {
            items = [];
            closure_0 = 0;
            if (0 < arguments.length) {
              do {
                let arr = items.push(inspect(arguments[closure_0]));
                sum1 = closure_0 + 1;
                closure_0 = sum1;
                length = arguments.length;
              } while (sum1 < length);
            }
            return items.join(" ");
          }
        };
        closure_0.deprecate = (arg0, arg1) => {
          closure_0 = arg0;
          const throwDeprecation = arg1;
          if (undefined === closure_0.process) {
            return function() {
              const self = this;
              const deprecateResult = closure_0.deprecate(closure_0, closure_1);
              const apply = deprecateResult.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
          } else if (true === throwDeprecation.noDeprecation) {
            return arg0;
          } else {
            c2 = false;
            return function deprecated() {
              if (!c2) {
                if (throwDeprecation.throwDeprecation) {
                  const _Error = Error;
                  const error = new Error(throwDeprecation);
                  throw error;
                } else {
                  const _console = console;
                  if (tmp.traceDeprecation) {
                    _console.trace(throwDeprecation);
                  } else {
                    _console.error(throwDeprecation);
                  }
                  c2 = true;
                }
              }
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
          }
        };
        dependencyMap = {};
        closure_0.debuglog = (str) => {
          let formatted = str;
          if (undefined === closure_3) {
            closure_3 = closure_1.env.NODE_DEBUG || "";
          }
          formatted = str.toUpperCase();
          if (!dependencyMap[formatted]) {
            const _RegExp = RegExp;
            const regExp = new RegExp("\\b" + formatted + "\\b", "i");
            if (regExp.test(closure_3)) {
              const pid = closure_1.pid;
              dependencyMap[formatted] = () => {
                format = format.format;
                const apply = format.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(tmp);
                } else {
                  applyArgumentsResult = apply(tmp, arguments);
                }
                console.error("%s %d: %s", formatted, pid, applyArgumentsResult);
              };
            } else {
              dependencyMap[formatted] = () => {

              };
            }
          }
          return dependencyMap[formatted];
        };
        closure_0.inspect = inspect;
        inspect.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] };
        inspect.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" };
        closure_0.isArray = function isArray(arg0) {
          return Array.isArray(arg0);
        };
        closure_0.isBoolean = function isBoolean(flag) {
          return typeof flag === "boolean";
        };
        closure_0.isNull = function isNull(arg0) {
          return null === arg0;
        };
        closure_0.isNullOrUndefined = function isNullOrUndefined(arg0) {
          return null == arg0;
        };
        closure_0.isNumber = function isNumber(num) {
          return typeof num === "number";
        };
        closure_0.isString = function isString(str) {
          return typeof str === "string";
        };
        closure_0.isSymbol = function isSymbol(arg0) {
          return typeof arg0 === "symbol";
        };
        closure_0.isUndefined = function isUndefined(arg0) {
          return undefined === arg0;
        };
        closure_0.isRegExp = function isRegExp(obj) {
          let tmp = typeof obj === "object";
          if (typeof obj === "object") {
            tmp = null !== obj;
          }
          if (!tmp) {
            return tmp;
          } else {
            const _Object = Object;
            let str = Object.prototype.toString;
            const call = str.call;
            str = "[object RegExp]";
            const tmp3 = typeof call === "unknown" ? str() : call(obj);
          }
        };
        closure_0.isObject = function isObject(obj) {
          let tmp = typeof obj === "object";
          if (typeof obj === "object") {
            tmp = null !== obj;
          }
          return tmp;
        };
        closure_0.isDate = function isDate(obj) {
          let tmp = typeof obj === "object";
          if (typeof obj === "object") {
            tmp = null !== obj;
          }
          if (!tmp) {
            return tmp;
          } else {
            const _Object = Object;
            let str = Object.prototype.toString;
            const call = str.call;
            str = "[object Date]";
            const tmp3 = typeof call === "unknown" ? str() : call(obj);
          }
        };
        closure_0.isError = function isError(obj) {
          let tmp = typeof obj === "object";
          if (typeof obj === "object") {
            tmp = null !== obj;
          }
          if (tmp) {
            const _Object = Object;
            const call = toString.call;
            let tmp3 = "[object Error]" === (typeof call === "unknown" ? toString() : call(obj));
            if (!tmp3) {
              const _Error = Error;
              tmp3 = obj instanceof Error;
            }
            tmp = tmp3;
          }
          return tmp;
        };
        closure_0.isFunction = function isFunction(fn) {
          return typeof fn === "function";
        };
        closure_0.isPrimitive = function isPrimitive(flag) {
          let tmp = null === flag || typeof flag === "boolean" || typeof flag === "number" || typeof flag === "string" || typeof flag === "symbol";
          if (!tmp) {
            tmp = undefined === flag;
          }
          return tmp;
        };
        closure_0.isBuffer = closure_1(11);
        closure_10 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        closure_0.log = () => {
          const date = new Date();
          const str = date.getHours();
          if (str < 10) {
            let text = `0${str.toString(10)}`;
          } else {
            text = str.toString(10);
          }
          items = [text, , ];
          const str3 = date.getMinutes();
          if (str3 < 10) {
            let text1 = `0${str3.toString(10)}`;
          } else {
            text1 = str3.toString(10);
          }
          items[1] = text1;
          const str5 = date.getSeconds();
          if (str5 < 10) {
            let text2 = `0${str5.toString(10)}`;
          } else {
            text2 = str5.toString(10);
          }
          items[2] = text2;
          const joined = items.join(":");
          const items1 = [date.getDate(), closure_10[date.getMonth(date)], joined];
          const format = closure_0.format;
          const apply = format.apply;
          const joined1 = items1.join(" ");
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(closure_0);
          } else {
            applyArgumentsResult = apply(closure_0, arguments);
          }
          console.log("%s - %s", joined1, applyArgumentsResult);
        };
        closure_0.inherits = closure_1(12);
        closure_0._extend = (arg0, obj) => {
          let tmp5;
          if (obj) {
            let tmp = typeof obj === "object";
            if (typeof obj === "object") {
              tmp = null !== obj;
            }
            if (tmp) {
              const _Object = Object;
              const keys = Object.keys(obj);
              let diff = tmp3 - 1;
              if (+keys.length) {
                do {
                  arg0[keys[diff]] = obj[keys[diff]];
                  tmp5 = +diff;
                  diff = tmp5 - 1;
                } while (tmp5);
              }
              return arg0;
            }
          }
          return arg0;
        };
      };
      let call = fn.call;
      let tmp = fn(7);
      if (typeof call === "unknown") {
        fn(globalThis, tmp);
      } else {
        call(arg1, globalThis, tmp);
      }
    },
    (arg0, arg1) => {
      arg0.exports = function isBuffer(copy) {
        let tmp = copy;
        if (copy) {
          tmp = typeof copy === "object";
        }
        if (tmp) {
          tmp = typeof copy.copy === "function";
        }
        if (tmp) {
          tmp = typeof copy.fill === "function";
        }
        if (tmp) {
          tmp = typeof copy.readUInt8 === "function";
        }
        return tmp;
      };
    },
    (arg0, arg1) => {
      if (typeof Object.create === "function") {
        arg0.exports = function inherits(value, super_) {
          value.super_ = super_;
          value.prototype = Object.create(super_.prototype, { constructor: { value, enumerable: false, writable: true, configurable: true } });
        };
      } else {
        arg0.exports = function inherits(arg0, super_) {
          arg0.super_ = super_;
          class TempCtor {
            constructor() {
              return;
            }
          }
          TempCtor.prototype = super_.prototype;
          arg0.prototype = Object.create(TempCtor.prototype);
          arg0.prototype.constructor = arg0;
        };
      }
    },
    (arg0, arg1, fn) => {
      closure_0 = arg1;
      fn = (_Buffer) => {
        closure_0 = _Buffer;
        let safeCharCodes = {};
        closure_0.escapeJavaScript = (str) => {
          if (str) {
            let num = 0;
            str = "";
            let str2 = "";
            if (0 < str.length) {
              do {
                let charCodeAtResult = str.charCodeAt(num);
                if (obj.isSafe(charCodeAtResult)) {
                  let text = `${str[num]}`;
                } else {
                  text = `${obj.escapeJavaScriptChar(tmp)}`;
                }
                num = num + 1;
                str = text;
                str2 = text;
              } while (num < str.length);
            }
            return str2;
          } else {
            return "";
          }
        };
        closure_0.escapeHtml = (str) => {
          if (str) {
            let num = 0;
            str = "";
            let str2 = "";
            if (0 < str.length) {
              do {
                let charCodeAtResult = str.charCodeAt(num);
                if (obj.isSafe(charCodeAtResult)) {
                  let text = `${str[num]}`;
                } else {
                  text = `${obj.escapeHtmlChar(tmp)}`;
                }
                num = num + 1;
                str = text;
                str2 = text;
              } while (num < str.length);
            }
            return str2;
          } else {
            return "";
          }
        };
        safeCharCodes.escapeJavaScriptChar = (arg0) => {
          if (arg0 >= 256) {
            return "\\u" + obj.padLeft("" + arg0, 4);
          } else {
            const _String = String;
            const str2 = new closure_0(String.fromCharCode(arg0), "ascii");
            return "\\x" + obj.padLeft(str2.toString("hex"), 2);
          }
        };
        safeCharCodes.escapeHtmlChar = (arg0) => {
          if (undefined !== obj.namedHtml[arg0]) {
            return tmp;
          } else if (arg0 >= 256) {
            return "&#" + arg0 + ";";
          } else {
            const _String = String;
            const str2 = new closure_0(String.fromCharCode(arg0), "ascii");
            return "&#x" + obj.padLeft(str2.toString("hex"), 2) + ";";
          }
        };
        safeCharCodes.padLeft = (arg0, arg1) => {
          let length;
          let tmp = arg0;
          let tmp2 = arg0;
          if (arg0.length < arg1) {
            do {
              let text = `0${tmp}`;
              tmp = text;
              tmp2 = text;
              length = `0${tmp}`.length;
            } while (length < arg1);
          }
          return tmp2;
        };
        safeCharCodes.isSafe = (arg0) => undefined !== obj.safeCharCodes[arg0];
        safeCharCodes.namedHtml = { 38: "&amp;", 60: "&lt;", 62: "&gt;", 34: "&quot;", 160: "&nbsp;", 162: "&cent;", 163: "&pound;", 164: "&curren;", 169: "&copy;", 174: "&reg;" };
        safeCharCodes = {};
        let num = 32;
        do {
          let tmp = num >= 97;
          if (97 > num) {
            let tmp3 = num >= 65;
            if (65 <= num) {
              tmp3 = num <= 90;
            }
            tmp = tmp3;
          }
          if (!tmp) {
            let tmp4 = num >= 48;
            if (48 <= num) {
              tmp4 = num <= 57;
            }
            tmp = tmp4;
          }
          if (!tmp) {
            tmp = 32 === num;
          }
          if (!tmp) {
            tmp = 46 === num;
          }
          if (!tmp) {
            tmp = 44 === num;
          }
          if (!tmp) {
            tmp = 45 === num;
          }
          if (!tmp) {
            tmp = 58 === num;
          }
          if (!tmp) {
            tmp = 95 === num;
          }
          if (tmp) {
            safeCharCodes[num] = null;
          }
          num = num + 1;
        } while (num < 123);
        safeCharCodes.safeCharCodes = safeCharCodes;
      };
      const call = fn.call;
      const _Buffer = fn(3).Buffer;
      if (typeof call === "unknown") {
        fn(_Buffer);
      } else {
        call(arg1, _Buffer);
      }
    },
    (arg0, arg1, fn) => {
      const _class = fn;
      fn = Object.assign;
      if (!fn) {
        fn = (arg0) => {
          for (let num = 1; num < arguments.length; num = num + 1) {
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
      if (typeof Symbol === "function") {
        let _Symbol = Symbol;
        if (typeof Symbol.iterator === "symbol") {
          let fn2 = (arg0) => typeof arg0;
        }
        closure_3 = fn(2);
        closure_4 = fn(15);
        closure_5 = fn(16);
        c7 = null;
        let defaults = { Set: fn(18), defaults: null };
        defaults = { abortEarly: true, convert: true, allowUnknown: false, skipFunctions: false, stripUnknown: false, language: {}, presence: "optional", strip: false, noDefaults: false };
        defaults.defaults = defaults;
        class _class {
          constructor() {
            self = this;
            if (this instanceof _class) {
              tmp6 = closure_7;
              if (!closure_7) {
                tmp7 = closure_0;
                num = 19;
                tmp6 = closure_0(19);
              }
              closure_7 = tmp6;
              flag = true;
              self.isJoi = true;
              str2 = "any";
              self._type = "any";
              tmp8 = null;
              self._settings = null;
              tmp9 = closure_2_8;
              tmp10 = new.target;
              tmp11 = new.target;
              set = new closure_2_8.Set();
              tmp13 = set;
              self._valids = set;
              tmp14 = new.target;
              tmp15 = new.target;
              set1 = new closure_2_8.Set();
              tmp17 = set1;
              self._invalids = set1;
              self._tests = [];
              self._refs = [];
              self._flags = {};
              self._description = null;
              self._unit = null;
              self._notes = [];
              self._tags = [];
              self._examples = [];
              self._meta = [];
              self._inner = {};
              return;
            } else {
              tmp = globalThis;
              _TypeError = TypeError;
              tmp2 = new.target;
              str = "Cannot call a class as a function";
              tmp3 = new.target;
              typeError = new TypeError("Cannot call a class as a function");
              tmp5 = typeError;
              throw typeError;
            }
          }
          createError(arg0, arg1, arg2, arg3) {
            return closure_5.create(module, exports, fn, arg3, this._flags);
          }
          checkOptions(arg0) {
            options = _class(31).options;
            validateResult = options.validate(module);
            if (validateResult.error) {
              tmp2 = globalThis;
              _Error = Error;
              tmp3 = new.target;
              tmp4 = new.target;
              error = new Error(validateResult.error.details[0].message);
              tmp6 = error;
              throw error;
            } else {
              return;
            }
          }
          clone() {
            self = this;
            obj = Object.create(Object.getPrototypeOf(this));
            obj.isJoi = true;
            obj._type = this._type;
            obj._settings = closure_8.concatSettings(this._settings);
            obj._valids = closure_3.clone(this._valids);
            obj._invalids = closure_3.clone(this._invalids);
            _tests = this._tests;
            obj._tests = _tests.slice();
            _refs = this._refs;
            obj._refs = _refs.slice();
            obj._flags = closure_3.clone(this._flags);
            ({ _description: tmp._description, _unit: tmp._unit, _notes } = this);
            obj._notes = _notes.slice();
            _tags = this._tags;
            obj._tags = _tags.slice();
            _examples = this._examples;
            obj._examples = _examples.slice();
            _meta = this._meta;
            obj._meta = _meta.slice();
            obj._inner = {};
            keys = Object.keys(this._inner);
            for (let num = 0; num < keys.length; num = num + 1) {
              tmp2 = keys[num];
              tmp3 = num;
              substr = null;
              if (self._inner[tmp2]) {
                arr7 = self._inner[tmp2];
                substr = arr7.slice();
              }
              obj._inner[tmp2] = substr;
            }
            return obj;
          }
          concat(arg0) {
            self = this;
            tmp = closure_3;
            assertResult = closure_3.assert(module instanceof closure_8.Any, "Invalid schema object");
            tmp3 = "any" === this._type;
            if (!tmp3) {
              tmp3 = "any" === module._type;
            }
            if (!tmp3) {
              tmp3 = module._type === self._type;
            }
            assertResult1 = closure_3.assert(tmp3, "Cannot merge type", self._type, "with another type:", module._type);
            cloneResult = self.clone();
            tmp6 = cloneResult;
            if ("any" === self._type) {
              tmp6 = cloneResult;
              if ("any" !== module._type) {
                cloneResult1 = module.clone();
                items = ["_settings", "_valids", "_invalids", "_tests", "_refs", "_flags", "_description", "_unit", "_notes", "_tags", "_examples", "_meta", "_inner"];
                num = 0;
                num2 = 1;
                tmp6 = cloneResult1;
                if (0 < items.length) {
                  do {
                    cloneResult1[items[num]] = cloneResult[items[num]];
                    num = num + 1;
                    tmp6 = cloneResult1;
                    length = items.length;
                  } while (num < length);
                }
              }
            }
            if (tmp6._settings) {
              tmp8 = closure_8;
              _settings = closure_8.concatSettings(tmp6._settings, module._settings);
            } else {
              _settings = module._settings;
            }
            tmp6._settings = _settings;
            _valids = tmp6._valids;
            mergeResult = _valids.merge(module._valids, module._invalids);
            _invalids = tmp6._invalids;
            mergeResult1 = _invalids.merge(module._invalids, module._valids);
            _tests = tmp6._tests;
            tmp6._tests = _tests.concat(module._tests);
            _refs = tmp6._refs;
            tmp6._refs = _refs.concat(module._refs);
            mergeResult2 = closure_3.merge(tmp6._flags, module._flags);
            tmp6._description = module._description || tmp6._description;
            tmp6._unit = module._unit || tmp6._unit;
            _notes = tmp6._notes;
            tmp6._notes = _notes.concat(module._notes);
            _tags = tmp6._tags;
            tmp6._tags = _tags.concat(module._tags);
            _examples = tmp6._examples;
            tmp6._examples = _examples.concat(module._examples);
            _meta = tmp6._meta;
            tmp6._meta = _meta.concat(module._meta);
            keys = Object.keys(module._inner);
            for (let num3 = 0; num3 < keys.length; num3 = num3 + 1) {
              tmp13 = keys[num3];
              arr3 = module._inner[tmp13];
              tmp14 = num3;
              if (arr3) {
                arr4 = tmp6._inner[tmp13];
                if (arr4) {
                  if ("object" === tmp12) {
                    if ("children" === tmp13) {
                      obj = {};
                      num4 = 0;
                      if (0 < arr4.length) {
                        do {
                          obj[arr4[num4].key] = num4;
                          num4 = num4 + 1;
                          length2 = arr4.length;
                        } while (num4 < length2);
                      }
                      for (let num5 = 0; num5 < arr3.length; num5 = num5 + 1) {
                        key = arr3[num5].key;
                        tmp15 = num5;
                        if (obj[key] >= 0) {
                          obj1 = { key: null, schema: null };
                          obj1.key = key;
                          schema = arr4[obj[key]].schema;
                          obj1.schema = schema.concat(arr3[num5].schema);
                          arr4[obj[key]] = obj1;
                        } else {
                          arr = arr4.push(arr3[num5]);
                        }
                      }
                    }
                  }
                  obj = tmp6._inner[tmp13];
                  tmp6._inner[tmp13] = obj.concat(arr3);
                } else {
                  tmp6._inner[tmp13] = arr3.slice();
                }
              }
            }
            return tmp6;
          }
          _test(arg0, arg1, arg2, arg3) {
            cloneResult = this.clone();
            _tests = cloneResult._tests;
            obj = { func: fn, name: module, arg: exports, options: arg3 };
            arr = _tests.push(obj);
            return cloneResult;
          }
          options(arg0) {
            assertResult = closure_3.assert(!module.context, "Cannot override context");
            checkOptionsResult = this.checkOptions(module);
            cloneResult = this.clone();
            cloneResult._settings = closure_8.concatSettings(cloneResult._settings, module);
            return cloneResult;
          }
          strict(arg0) {
            cloneResult = this.clone();
            tmp2 = cloneResult._settings || {};
            cloneResult._settings = tmp2;
            tmp3 = undefined !== module;
            if (tmp3) {
              tmp3 = !module;
            }
            cloneResult._settings.convert = tmp3;
            return cloneResult;
          }
          raw(arg0) {
            cloneResult = this.clone();
            tmp2 = undefined === module;
            if (!tmp2) {
              tmp2 = module;
            }
            cloneResult._flags.raw = tmp2;
            return cloneResult;
          }
          error(arg0) {
            tmp2 = module;
            tmp = closure_3;
            if (module) {
              tmp3 = globalThis;
              _Error = Error;
              tmp2 = module instanceof Error;
            }
            assertResult = closure_3.assert(tmp2, "Must provide a valid Error object");
            cloneResult = this.clone();
            cloneResult._flags.error = module;
            return cloneResult;
          }
          allow() {
            cloneResult = this.clone();
            slice = Array.prototype.slice;
            call = slice.call;
            tmp2 = closure_3;
            if (typeof call === "unknown") {
              tmp3 = arguments;
              substr = slice();
            } else {
              tmp10 = arguments;
              tmp11 = arguments;
              substr = call(arguments);
            }
            flattenResult = closure_3.flatten(substr);
            num = 0;
            if (0 < flattenResult.length) {
              do {
                tmp5 = flattenResult[num];
                tmp6 = closure_3;
                assertResult = closure_3.assert(undefined !== tmp5, "Cannot call allow/valid/invalid with undefined");
                _invalids = cloneResult._invalids;
                removeResult = _invalids.remove(tmp5);
                _valids = cloneResult._valids;
                addResult = _valids.add(tmp5, cloneResult._refs);
                num = num + 1;
                length = flattenResult.length;
              } while (num < length);
            }
            return cloneResult;
          }
          valid() {
            self = this;
            allow = this.allow;
            apply = allow.apply;
            if (typeof apply === "unknown") {
              tmp = allow;
              tmp2 = self;
              applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              tmp4 = arguments;
              applyArgumentsResult = apply(self, arguments);
            }
            applyArgumentsResult._flags.allowOnly = true;
            return applyArgumentsResult;
          }
          invalid(arg0) {
            cloneResult = this.clone();
            slice = Array.prototype.slice;
            call = slice.call;
            tmp2 = closure_3;
            if (typeof call === "unknown") {
              tmp3 = arguments;
              substr = slice();
            } else {
              tmp10 = arguments;
              tmp11 = arguments;
              substr = call(arguments);
            }
            flattenResult = closure_3.flatten(substr);
            num = 0;
            if (0 < flattenResult.length) {
              do {
                tmp5 = flattenResult[num];
                tmp6 = closure_3;
                assertResult = closure_3.assert(undefined !== tmp5, "Cannot call allow/valid/invalid with undefined");
                _valids = cloneResult._valids;
                removeResult = _valids.remove(tmp5);
                _invalids = cloneResult._invalids;
                addResult = _invalids.add(tmp5, this._refs);
                num = num + 1;
                length = flattenResult.length;
              } while (num < length);
            }
            return cloneResult;
          }
          required() {
            cloneResult = this.clone();
            cloneResult._flags.presence = "required";
            return cloneResult;
          }
          optional() {
            cloneResult = this.clone();
            cloneResult._flags.presence = "optional";
            return cloneResult;
          }
          forbidden() {
            cloneResult = this.clone();
            cloneResult._flags.presence = "forbidden";
            return cloneResult;
          }
          strip() {
            cloneResult = this.clone();
            cloneResult._flags.strip = true;
            return cloneResult;
          }
          applyFunctionToChildren(arg0, arg1, arg2, arg3) {
            closure_0 = arg3;
            items = [];
            combined = items.concat(module);
            if (1 === combined.length) {
              str = "";
              if ("" === combined[0]) {
                self = this;
                tmp = exports;
                tmp2 = fn;
                obj = this[exports];
                return obj.apply(this, fn);
              }
            }
            str2 = "";
            if (arg3) {
              str3 = ".";
              str2 = `${arg3}.`;
            }
            closure_0 = str2;
            substr = combined;
            if ("" === combined[0]) {
              substr = combined.slice(1);
            }
            mapped = substr.map((item) => str2 + item);
            error = new Error("unknown key(s) " + mapped.join(", "));
            throw error;
          }
          default(arg0, arg1) {
            isRefResult = typeof module !== "function";
            if (typeof module === "function") {
              tmp9 = closure_4;
              isRefResult = closure_4.isRef(module);
            }
            self = this;
            if (!isRefResult) {
              tmp2 = exports;
              description = module.description;
              tmp3 = !description;
              if (!description) {
                tmp3 = exports;
              }
              if (tmp3) {
                module.description = exports;
              }
              if (!self._flags.func) {
                description2 = module.description;
                tmp5 = typeof description2 === "string";
                tmp4 = closure_3;
                if (typeof description2 === "string") {
                  num = 0;
                  tmp5 = module.description.length > 0;
                }
                str = "description must be provided when default value is a function";
                assertResult = closure_3.assert(tmp5, "description must be provided when default value is a function");
              }
            }
            cloneResult = self.clone();
            cloneResult._flags.default = module;
            arr = closure_4.push(cloneResult._refs, module);
            return cloneResult;
          }
          empty(arg0) {
            cloneResult = this.clone();
            schemaResult = undefined;
            if (undefined !== module) {
              tmp3 = c7;
              schemaResult = c7.schema(module);
            }
            cloneResult._flags.empty = schemaResult;
            return cloneResult;
          }
          when(arg0, arg1) {
            obj = closure_3;
            tmp = exports;
            if (exports) {
              str = "undefined";
              if (undefined !== exports) {
                tmp2 = f112540;
                str = f112540(exports);
              }
              str2 = "object";
              tmp = "object" === str;
            }
            assertResult = closure_3.assert(tmp, "Invalid options");
            tmp4 = undefined !== exports.then;
            if (!tmp4) {
              tmp4 = undefined !== exports.otherwise;
            }
            self = this;
            assertResult1 = obj.assert(tmp4, "options must have at least one of \"then\" or \"otherwise\"");
            combined = undefined;
            if (exports.hasOwnProperty("then")) {
              tmp7 = c7;
              combined = self.concat(c7.schema(exports.then));
            }
            combined1 = undefined;
            if (exports.hasOwnProperty("otherwise")) {
              tmp9 = c7;
              combined1 = self.concat(c7.schema(exports.otherwise));
            }
            obj2 = closure_6;
            if (!closure_6) {
              tmp10 = _class;
              num = 28;
              obj2 = _class(28);
            }
            closure_6 = obj2;
            obj = { is: exports.is, then: combined, otherwise: combined1 };
            whenResult = obj2.when(module, obj);
            whenResult._flags.presence = "ignore";
            whenResult._settings = closure_8.concatSettings(whenResult._settings, { baseType: self });
            return whenResult;
          }
          description(arg0) {
            tmp2 = module;
            tmp = closure_3;
            if (module) {
              tmp2 = typeof module === "string";
            }
            assertResult = closure_3.assert(tmp2, "Description must be a non-empty string");
            cloneResult = this.clone();
            cloneResult._description = module;
            return cloneResult;
          }
          notes(arg0) {
            tmp2 = module;
            tmp = closure_3;
            if (module) {
              isArray = typeof module === "string";
              if (typeof module !== "string") {
                tmp6 = globalThis;
                _Array = Array;
                isArray = Array.isArray(module);
              }
              tmp2 = isArray;
            }
            assertResult = closure_3.assert(tmp2, "Notes must be a non-empty string or array");
            cloneResult = this.clone();
            _notes = cloneResult._notes;
            cloneResult._notes = _notes.concat(module);
            return cloneResult;
          }
          tags(arg0) {
            tmp2 = module;
            tmp = closure_3;
            if (module) {
              isArray = typeof module === "string";
              if (typeof module !== "string") {
                tmp6 = globalThis;
                _Array = Array;
                isArray = Array.isArray(module);
              }
              tmp2 = isArray;
            }
            assertResult = closure_3.assert(tmp2, "Tags must be a non-empty string or array");
            cloneResult = this.clone();
            _tags = cloneResult._tags;
            cloneResult._tags = _tags.concat(module);
            return cloneResult;
          }
          meta(arg0) {
            assertResult = closure_3.assert(undefined !== module, "Meta cannot be undefined");
            cloneResult = this.clone();
            _meta = cloneResult._meta;
            cloneResult._meta = _meta.concat(module);
            return cloneResult;
          }
          example(arg0) {
            self = this;
            tmp = closure_3;
            assertResult = closure_3.assert(arguments.length, "Missing example");
            _validateResult = this._validate(module, null, closure_8.defaults);
            errors = _validateResult.errors;
            tmp4 = !_validateResult.errors;
            if (errors) {
              tmp5 = closure_5;
              errors = closure_5.process(_validateResult.errors, module);
            }
            assertResult1 = closure_3.assert(tmp4, "Bad example:", errors);
            cloneResult = self.clone();
            _examples = cloneResult._examples;
            arr = _examples.push(module);
            return cloneResult;
          }
          unit(arg0) {
            tmp2 = module;
            tmp = closure_3;
            if (module) {
              tmp2 = typeof module === "string";
            }
            assertResult = closure_3.assert(tmp2, "Unit name must be a non-empty string");
            cloneResult = this.clone();
            cloneResult._unit = module;
            return cloneResult;
          }
          _prepareEmptyValue(arg0) {
            trimmed = module;
            if (typeof module === "string") {
              self = this;
              trimmed = module;
              if (this._flags.trim) {
                trimmed = module.trim();
              }
            }
            return trimmed;
          }
          _validate(arg0, arg1, arg2, arg3) {
            self = this;
            closure_0 = module;
            tmp = exports;
            closure_1 = exports;
            closure_2 = fn;
            self = this;
            closure_4 = module;
            if (!exports) {
              tmp2 = arg3;
              obj = { key: "", path: "", parent: null, reference: null };
              obj.reference = arg3;
              tmp = obj;
            }
            closure_1 = tmp;
            tmp3 = fn;
            if (self._settings) {
              tmp4 = closure_8;
              concatSettingsResult = closure_8.concatSettings(fn, self._settings);
              closure_2 = concatSettingsResult;
              tmp3 = concatSettingsResult;
            }
            items = [];
            closure_5 = items;
            finish = function finish() {
              obj = self;
              let _defaultResult;
              if (!self._flags.strip) {
                let tmp2 = obj;
                if (undefined !== obj) {
                  if (obj._flags.raw) {
                    tmp2 = value;
                  }
                  _defaultResult = tmp2;
                } else if (noDefaults.noDefaults) {
                  _defaultResult = value;
                } else {
                  const _flags = obj._flags;
                  if (value.isRef(obj._flags.default)) {
                    _defaultResult = _default(obj.parent, noDefaults);
                  } else {
                    if (typeof _default === "function") {
                      let tmp6 = null !== obj.parent;
                      if (tmp6) {
                        tmp6 = obj._flags.default.length > 0;
                      }
                      let tmp7;
                      if (tmp6) {
                        items = [_self.clone(tmp4.parent), noDefaults];
                        tmp7 = items;
                      }
                      const iter = obj._try(obj._flags.default, tmp7);
                      value = iter.value;
                      _defaultResult = value;
                      if (iter.error) {
                        closure_5.push(obj.createError("any.default", iter.error, tmp4, noDefaults));
                        _defaultResult = value;
                      }
                    }
                    _defaultResult = _self.clone(obj._flags.default);
                  }
                }
              }
              obj = { value: _defaultResult, errors: null };
              let tmp17 = null;
              if (closure_5.length) {
                tmp17 = closure_5;
              }
              obj.errors = tmp17;
              return obj;
            };
            tmp6 = module;
            if (self._coerce) {
              _coerce = self._coerce;
              call = _coerce.call;
              if (typeof call === "unknown") {
                iter = _coerce(module, tmp, tmp3);
              } else {
                tmp54 = _coerce;
                tmp55 = self;
                tmp56 = module;
                tmp57 = tmp;
                tmp58 = tmp3;
                iter = call(self, module, tmp, tmp3);
              }
              value = iter.value;
              closure_0 = value;
              if (iter.errors) {
                closure_5 = items.concat(iter.errors);
                num13 = 0;
                return finish();
              } else {
                tmp6 = value;
              }
            }
            empty = self._flags.empty;
            if (empty) {
              empty2 = self._flags.empty;
              tmp7 = closure_8;
              tmp8 = null;
              empty = !empty2._validate(self._prepareEmptyValue(tmp6), null, closure_8.defaults).errors;
            }
            if (empty) {
              closure_0 = undefined;
            }
            tmp9 = self._flags.presence || tmp3.presence;
            if ("optional" === tmp9) {
              tmp10 = tmp6;
              if (undefined === tmp6) {
                _flags = self._flags;
                str4 = "default";
                if (_flags.hasOwnProperty("default")) {
                  if (undefined === self._flags.default) {
                    str11 = "object";
                    if ("object" === self._type) {
                      obj = {};
                      closure_0 = obj;
                      tmp10 = obj;
                    }
                  }
                }
                num12 = 0;
                return finish();
              }
            } else {
              str10 = "required";
              if ("required" === tmp9) {
                if (undefined === tmp6) {
                  tmp16 = null;
                  str3 = "any.required";
                  tmp17 = self;
                  tmp18 = tmp;
                  tmp19 = tmp3;
                  arr = items.push(self.createError("any.required", null, tmp, tmp3));
                  num2 = 0;
                  return finish();
                }
              }
              str = "forbidden";
              tmp10 = tmp6;
              if ("forbidden" === tmp9) {
                if (undefined !== tmp6) {
                  tmp11 = null;
                  str2 = "any.unknown";
                  tmp12 = self;
                  tmp13 = tmp;
                  tmp14 = tmp3;
                  arr1 = items.push(self.createError("any.unknown", null, tmp, tmp3));
                }
                num = 0;
                return finish();
              }
            }
            _valids = self._valids;
            tmp21 = tmp10;
            if (_valids.has(tmp10, tmp, tmp3, self._flags.insensitive)) {
              num11 = 0;
              return finish();
            } else {
              _invalids = self._invalids;
              tmp22 = _invalids;
              tmp23 = tmp10;
              tmp24 = tmp;
              tmp25 = tmp3;
              if (_invalids.has(tmp21, tmp, tmp3, self._flags.insensitive)) {
                str5 = "any.invalid";
                str6 = "";
                if ("" === tmp10) {
                  str5 = "any.empty";
                }
                tmp26 = null;
                tmp27 = self;
                tmp28 = str5;
                tmp29 = tmp;
                tmp30 = tmp3;
                arr2 = items.push(self.createError(str5, null, tmp, tmp3));
                if (!tmp3.abortEarly) {
                }
                num10 = 0;
                return finish();
              }
              tmp32 = tmp10;
              if (self._base) {
                _base = self._base;
                call2 = _base.call;
                if (typeof call2 === "unknown") {
                  iter2 = _base(tmp10, tmp, tmp3);
                } else {
                  tmp59 = _base;
                  tmp60 = self;
                  tmp61 = tmp10;
                  tmp62 = tmp;
                  tmp63 = tmp3;
                  iter2 = call2(self, tmp21, tmp, tmp3);
                }
                value = iter2.value;
                if (iter2.errors) {
                  closure_0 = value;
                  closure_5 = items.concat(iter2.errors);
                  num9 = 0;
                  return finish();
                } else {
                  tmp32 = tmp10;
                  if (value !== tmp10) {
                    value1 = iter2.value;
                    closure_0 = value1;
                    _valids3 = self._valids;
                    tmp64 = _valids3;
                    tmp65 = value1;
                    tmp66 = tmp;
                    tmp67 = tmp3;
                    if (_valids3.has(value1, tmp, tmp3, self._flags.insensitive)) {
                      num8 = 0;
                      return finish();
                    } else {
                      _invalids2 = self._invalids;
                      tmp33 = _invalids2;
                      tmp34 = value1;
                      tmp35 = tmp;
                      tmp36 = tmp3;
                      tmp32 = value1;
                      if (_invalids2.has(value1, tmp, tmp3, self._flags.insensitive)) {
                        str7 = "any.invalid";
                        str8 = "";
                        if ("" === value1) {
                          str7 = "any.empty";
                        }
                        tmp37 = null;
                        tmp38 = self;
                        tmp39 = str7;
                        tmp40 = tmp;
                        tmp41 = tmp3;
                        arr3 = items.push(self.createError(str7, null, tmp, tmp3));
                        tmp32 = value1;
                        if (tmp3.abortEarly) {
                          num7 = 0;
                          return finish();
                        }
                      }
                    }
                  }
                }
              }
              if (self._flags.allowOnly) {
                obj1 = { valids: null };
                _valids2 = self._valids;
                obj1.valids = _valids2.values({ stripUndefined: true });
                str9 = "any.allowOnly";
                tmp43 = self;
                tmp44 = obj1;
                tmp45 = tmp;
                tmp46 = tmp3;
                arr4 = items.push(self.createError("any.allowOnly", obj1, tmp, tmp3));
                if (tmp3.abortEarly) {
                  num6 = 0;
                  return finish();
                }
              }
              num3 = 0;
              num4 = 1;
              num5 = 0;
              if (0 < self._tests.length) {
                while (true) {
                  func = self._tests[num5].func;
                  call3 = func.call;
                  tmp48 = num5;
                  if (typeof call3 === "unknown") {
                    funcResult = func(tmp32, tmp, tmp3);
                  } else {
                    tmp68 = func;
                    tmp69 = self;
                    tmp70 = tmp32;
                    tmp71 = tmp;
                    tmp72 = tmp3;
                    funcResult = call3(self, tmp49, tmp, tmp3);
                  }
                  tmp51 = closure_5;
                  if (funcResult instanceof closure_5.Err) {
                    arr5 = items.push(funcResult);
                    tmp52 = tmp32;
                    if (tmp3.abortEarly) {
                      break;
                    }
                  } else {
                    closure_0 = funcResult;
                    tmp52 = funcResult;
                  }
                  num5 = num5 + 1;
                  tmp32 = tmp52;
                }
                return finish();
              }
              return finish();
            }
          }
          _validateWithOptions(arg0, arg1, arg2) {
            self = this;
            if (exports) {
              checkOptionsResult = self.checkOptions(exports);
            }
            iter = self._validate(module, null, closure_8.concatSettings(closure_8.defaults, exports));
            processResult = closure_5.process(iter.errors, module);
            if (fn) {
              obj = fn(processResult, iter.value);
            } else {
              obj = { error: null, value: null };
              obj.error = processResult;
              obj.value = iter.value;
            }
            return obj;
          }
          validate(arg0, arg1, arg2) {
            self = this;
            if (typeof exports === "function") {
              tmp = null;
              _validateWithOptionsResult = self._validateWithOptions(module, null, exports);
            } else {
              tmp3 = fn;
              _validateWithOptionsResult = self._validateWithOptions(module, exports, fn);
            }
            return _validateWithOptionsResult;
          }
          describe() {
            self = this;
            self = this;
            obj = { type: this._type };
            keys = Object.keys(this._flags);
            if (keys.length) {
              items = ["empty", "default", "lazy", "label"];
              if (items.some((item) => {
                const _flags = self._flags;
                return _flags.hasOwnProperty(item);
              })) {
                obj.flags = {};
                num = 0;
                num2 = 1;
                str = "label";
                str2 = "lazy";
                str3 = "default";
                str4 = "empty";
                if (0 < keys.length) {
                  do {
                    tmp3 = keys[num];
                    tmp4 = num;
                    if ("empty" === tmp3) {
                      obj2 = self._flags[tmp3];
                      obj.flags[tmp3] = obj2.describe();
                    } else if ("default" === tmp3) {
                      tmp6 = closure_4;
                      if (closure_4.isRef(self._flags[tmp3])) {
                        str5 = self._flags[tmp3];
                        obj.flags[tmp3] = str5.toString();
                      } else if (typeof self._flags[tmp3] === "function") {
                        obj.flags[tmp3] = self._flags[tmp3].description;
                      } else {
                        obj.flags[tmp3] = self._flags[tmp3];
                      }
                    } else {
                      tmp5 = "lazy" === tmp3 || "label" === tmp3;
                      if (!tmp5) {
                        obj.flags[tmp3] = self._flags[tmp3];
                      }
                    }
                    num = num + 1;
                  } while (num < keys.length);
                }
              } else {
                obj.flags = self._flags;
              }
            }
            if (self._description) {
              obj.description = self._description;
            }
            if (self._notes.length) {
              obj.notes = self._notes;
            }
            if (self._tags.length) {
              obj.tags = self._tags;
            }
            if (self._meta.length) {
              obj.meta = self._meta;
            }
            if (self._examples.length) {
              obj.examples = self._examples;
            }
            if (self._unit) {
              obj.unit = self._unit;
            }
            _valids = self._valids;
            values = _valids.values();
            if (values.length) {
              obj.valids = values.map((item) => {
                let str = item;
                if (closure_1_4.isRef(item)) {
                  str = item.toString();
                }
                return str;
              });
            }
            _invalids = self._invalids;
            values1 = _invalids.values();
            if (values1.length) {
              obj.invalids = values1.map((item) => {
                let str = item;
                if (closure_1_4.isRef(item)) {
                  str = item.toString();
                }
                return str;
              });
            }
            obj.rules = [];
            num3 = 0;
            if (0 < self._tests.length) {
              tmp7 = self._tests[num3];
              obj = { name: null };
              obj.name = tmp7.name;
              tmp8 = num3;
              while (undefined === tmp7.arg) {
                options = tmp7.options;
                if (options) {
                  if (options.hasRef) {
                    obj.arg = {};
                    _Object = Object;
                    keys1 = Object.keys(tmp7.arg);
                    for (let num4 = 0; num4 < keys1.length; num4 = num4 + 1) {
                      tmp11 = keys1[num4];
                      str7 = tmp7.arg[tmp11];
                      tmp12 = closure_4;
                      tmp13 = num4;
                      str = str7;
                      if (closure_4.isRef(str7)) {
                        str = str7.toString();
                      }
                      obj.arg[tmp11] = str;
                    }
                  }
                  if (typeof options.description === "string") {
                    obj.description = options.description;
                  } else if (typeof options.description === "function") {
                    obj.description = options.description(obj.arg);
                  }
                }
                rules = obj.rules;
                arr = rules.push(obj);
                num3 = num3 + 1;
              }
              tmp9 = closure_4;
              str6 = tmp7.arg;
              if (closure_4.isRef(tmp7.arg)) {
                str1 = str6.toString();
              } else {
                str1 = str6;
              }
              obj.arg = str1;
            }
            if (!obj.rules.length) {
              str8 = "rules";
              delete tmp[tmp2];
            }
            _getLabelResult = self._getLabel();
            if (_getLabelResult) {
              obj.label = _getLabelResult;
            }
            return obj;
          }
          label(arg0) {
            tmp2 = module;
            tmp = closure_3;
            if (module) {
              tmp2 = typeof module === "string";
            }
            assertResult = closure_3.assert(tmp2, "Label name must be a non-empty string");
            cloneResult = this.clone();
            cloneResult._flags.label = module;
            return cloneResult;
          }
          _getLabel(arg0) {
            tmp = this._flags.label || module;
            return tmp;
          }
        }
        defaults.Any = _class;
        module.exports = _class;
        defaults.Any.prototype.isImmutable = true;
        const valid = defaults.Any.prototype.valid;
        defaults.Any.prototype.equal = valid;
        defaults.Any.prototype.only = valid;
        const invalid = defaults.Any.prototype.invalid;
        defaults.Any.prototype.not = invalid;
        defaults.Any.prototype.disallow = invalid;
        defaults.Any.prototype.exist = defaults.Any.prototype.required;
        defaults._try = (apply, arg1) => {
          try {
            obj = { value: apply.apply(null, arg1), error: undefined };
            return obj;
          } catch (err) {
          }
        };
        defaults.concatSettings = (keys, arg1) => {
          if (!keys) {
            if (!arg1) {
              return null;
            }
          }
          obj = {};
          if (keys) {
            fn(obj, keys);
          }
          if (arg1) {
            const _Object = Object;
            keys = Object.keys(arg1);
            let num = 0;
            if (0 < keys.length) {
              while (true) {
                let tmp5 = keys[num];
                if ("language" === tmp5) {
                  if (obj.hasOwnProperty(tmp5)) {
                    obj[tmp5] = closure_3.applyToDefaults(obj[tmp5], arg1[tmp5]);
                    num = num + 1;
                    if (num >= keys.length) {
                      break;
                    }
                  }
                }
                obj[tmp5] = arg1[tmp5];
              }
            }
          }
          return obj;
        };
      }
      fn2 = (arg0) => {
        if (arg0) {
          const _Symbol = Symbol;
          if (typeof Symbol === "function") {
            const _Symbol3 = Symbol;
            if (arg0.constructor === Symbol) {
              const _Symbol2 = Symbol;
              let str = "symbol";
            }
            return str;
          }
        }
        str = typeof arg0;
      };
    },
    (arg0, arg1, fn) => {
      closure_1 = fn(2);
      arg1.create = (str, arg1) => {
        ref.assert(typeof str === "string", "Invalid reference key:", str);
        const cloneResult = ref.clone(arg1);
        closure_0 = cloneResult;
        ref = function ref(arg0, context) {
          context = arg0;
          if (ref.isContext) {
            context = context.context;
          }
          return closure_1.reach(context, ref.key, cloneResult);
        };
        str = cloneResult;
        if (cloneResult) {
          str = cloneResult.contextPrefix;
        }
        if (!str) {
          str = "$";
        }
        ref.isContext = str[0] === str;
        let substr = str;
        if (ref.isContext) {
          substr = str.slice(1);
        }
        ref.key = substr;
        let str3 = cloneResult;
        if (cloneResult) {
          str3 = cloneResult.separator;
        }
        if (!str3) {
          str3 = ".";
        }
        ref.path = ref.key.split(str3);
        ref.depth = ref.path.length;
        ref.root = ref.path[0];
        ref.isJoi = true;
        ref.toString = () => {
          let str = "ref:";
          if (ref.isContext) {
            str = "context:";
          }
          return str + ref.key;
        };
        return ref;
      };
      arg1.isRef = (isJoi) => {
        isJoi = typeof isJoi === "function";
        if (typeof isJoi === "function") {
          isJoi = isJoi.isJoi;
        }
        return isJoi;
      };
      arg1.push = (arr, isContext) => {
        if (tmp) {
          arr = arr.push(isContext.root);
        }
      };
    },
    (arg0, arg1, fn) => {
      const _class = arg1;
      if (typeof Symbol === "function") {
        let _Symbol = Symbol;
        if (typeof Symbol.iterator === "symbol") {
          fn = (arg0) => typeof arg0;
        }
        closure_2 = fn(2);
        closure_3 = fn(17);
        let context = {
          stringify(D, arg1) {
              let str = "undefined";
              if (undefined !== D) {
                str = fn(D);
              }
              if (null === D) {
                return "null";
              } else if ("string" === str) {
                return D;
              } else {
                if (!(D instanceof _class.Err)) {
                  if ("function" !== str) {
                    if ("object" === str) {
                      const _Array = Array;
                      if (Array.isArray(D)) {
                        let num = 0;
                        let str5 = "";
                        let str6 = "";
                        if (0 < D.length) {
                          do {
                            let str7 = "";
                            if (``.length) {
                              str7 = ", ";
                            }
                            str5 = str5 + str7 + obj.stringify(D[num], arg1);
                            num = num + 1;
                            str6 = str5;
                          } while (num < D.length);
                        }
                        let combined = str6;
                        if (arg1) {
                          const _HermesInternal = HermesInternal;
                          combined = "[" + str6 + "]";
                        }
                        return combined;
                      } else {
                        return D.toString();
                      }
                    } else {
                      const _JSON = JSON;
                      return JSON.stringify(D);
                    }
                  }
                }
                return D.toString();
              }
            }
        };
        class _class {
          constructor(arg0, arg1, arg2, arg3, arg4) {
            self = this;
            if (this instanceof _class) {
              tmp6 = arg0;
              obj = arg1;
              flag = true;
              self.isJoi = true;
              self.type = arg0;
              if (!arg1) {
                obj = {};
              }
              tmp7 = fn;
              tmp8 = arg3;
              tmp9 = arg4;
              self.context = obj;
              ({ key: self.context.key, path: self.path } = fn);
              self.options = arg3;
              self.flags = arg4;
              return;
            } else {
              tmp = globalThis;
              _TypeError = TypeError;
              tmp2 = new.target;
              str = "Cannot call a class as a function";
              tmp3 = new.target;
              typeError = new TypeError("Cannot call a class as a function");
              tmp5 = typeError;
              throw typeError;
            }
          }
          toString() {
            self = this;
            self = this;
            language = this.options.language;
            context = this.context;
            if (this.flags.label) {
              context.key = self.flags.label;
            } else {
              str = "";
              tmp = "" !== context.key;
              if (tmp) {
                tmp2 = null;
                tmp = null !== self.context.key;
              }
              if (!tmp) {
                root = language.root;
                if (!root) {
                  tmp3 = closure_3;
                  root = closure_3.errors.root;
                }
                self.context.key = root;
              }
            }
            obj = closure_2;
            reachResult = closure_2.reach(language, self.type);
            if (!reachResult) {
              tmp4 = closure_3;
              reachResult = obj.reach(closure_3.errors, self.type);
            }
            obj2 = /\{\{\!?key\}\}/;
            isMatch = obj2.test(reachResult);
            tmp6 = reachResult.length > 2;
            if (tmp6) {
              str2 = "!";
              tmp6 = "!" === reachResult[0];
            }
            if (tmp6) {
              str3 = "!";
              tmp6 = "!" === reachResult[1];
            }
            substr = reachResult;
            if (tmp6) {
              substr = reachResult.slice(2);
            }
            if (!isMatch) {
              isMatch = tmp6;
            }
            str4 = substr;
            if (!isMatch) {
              str5 = "key";
              reachResult1 = obj.reach(language, "key");
              if (!reachResult1) {
                tmp9 = closure_3;
                reachResult1 = obj.reach(closure_3.errors, "key");
              }
              str4 = reachResult1 + substr;
            }
            reachResult2 = obj.reach(language, "messages.wrapArrays");
            wrapArrays = reachResult2;
            if (typeof reachResult2 !== "boolean") {
              tmp11 = closure_3;
              wrapArrays = closure_3.errors.messages.wrapArrays;
            }
            return str4.replace(/\{\{(\!?)([^}]+)\}\}/g, (arg0, arg1, arg2) => {
              const json = closure_2.stringify(closure_2.reach(self.context, arg2), wrapArrays);
              let escapeHtmlResult = json;
              if (arg1) {
                escapeHtmlResult = closure_2.escapeHtml(json);
              }
              return escapeHtmlResult;
            });
          }
        }
        arg1.Err = _class;
        arg1.create = (arg0, arg1, arg2, arg3, arg4) => new _class.Err(arg0, arg1, arg2, arg3, arg4);
        arg1.process = (reason, _object) => {
          if (reason) {
            if (reason.length) {
              closure_0 = "";
              items = [];
              function processErrors(reason, path) {
                let num = 0;
                if (0 < reason.length) {
                  let str = reason[num];
                  while (!str.flags.error) {
                    let str1;
                    if (undefined === path) {
                      str = str.toString();
                      let str2 = "";
                      let tmp4 = closure_0;
                      if (closure_0) {
                        str2 = ". ";
                      }
                      closure_0 = tmp4 + str2 + str;
                      str1 = str;
                    }
                    if (str.context.reason) {
                      if (str.context.reason.length) {
                        let tmp9 = processErrors(str.context.reason, str.path);
                        if (tmp9) {
                          return tmp9;
                        } else {
                          num = num + 1;
                        }
                      }
                    }
                    if (!str1) {
                      str1 = str.toString();
                    }
                    obj = { message: str1, path: null, type: null, context: null };
                    obj.path = obj.getPath(str);
                    ({ type: obj.type, context: obj.context } = str);
                    let arr = items.push(obj);
                  }
                  return str.flags.error;
                }
              }
              const processErrorsResult = processErrors(reason);
              if (processErrorsResult) {
                return processErrorsResult;
              } else {
                const _Error = Error;
                const error = new Error(closure_0);
                error.isJoi = true;
                error.name = "ValidationError";
                error.details = items;
                error._object = _object;
                error.annotate = obj.annotate;
                return error;
              }
            }
          }
          return null;
        };
        context.getPath = (path) => path.path || path.context.key;
        context.safeStringify = (arg0, arg1) => JSON.stringify(arg0, obj.serializer(), arg1);
        context.serializer = () => {
          closure_0 = [];
          function cycleReplacer(arg0, arg1) {
            let str = "[Circular ~]";
            if (length[0] !== arg1) {
              const substr = closure_0.slice(0, length.indexOf(arg1));
              str = `${"[Circular ~." + obj.join(".")}]`;
            }
            return str;
          }
          return function(arg0, arg1) {
            let arr3;
            let arr = length;
            if (length.length > 0) {
              const self = this;
              const index = arr.indexOf(this);
              if (~index) {
                arr.length = index + 1;
                closure_0.length = index + 1;
                closure_0[index] = arg0;
                let substr = closure_0;
              } else {
                arr.push(self);
                arr = closure_0.push(arg0);
                substr = closure_0;
              }
              let arr1 = arg1;
              if (~arr.indexOf(arg1)) {
                const call = cycleReplacer.call;
                if (typeof call === "unknown") {
                  let str = "[Circular ~]";
                  if (arr[0] !== arg1) {
                    substr = substr.slice(0, arr.indexOf(arg1));
                    str = `${"[Circular ~." + arr3.join(".")}]`;
                  }
                  let callResult = str;
                } else {
                  callResult = call(self, arg0, arg1);
                }
              }
            } else {
              arr.push(arg1);
              arr1 = arg1;
            }
            let str5 = arr1;
            if (Array.isArray(arr1)) {
              str5 = arr1;
              if (arr1.placeholders) {
                const placeholders = arr1.placeholders;
                items = [];
                let num3 = 0;
                str5 = items;
                if (0 < arr1.length) {
                  do {
                    if (placeholders[num3]) {
                      let arr2 = items.push(placeholders[num3]);
                    }
                    arr3 = items.push(arr1[num3]);
                    num3 = num3 + 1;
                    str5 = items;
                  } while (num3 < arr1.length);
                }
              }
            }
            if (str5 !== Infinity) {
              if (str5 !== -Infinity) {
                const _Number = Number;
                if (!Number.isNaN(str5)) {
                  if (typeof str5 !== "function") {
                    if (undefined !== str5) {
                      fn(str5);
                    }
                    let text = str5;
                  }
                  return text;
                }
              }
            }
            text = `${"[" + str5.toString()}]`;
          };
        };
        context.annotate = function(arg0) {
          let length;
          let sum2;
          let str = "\u001B[31m";
          if (arg0) {
            str = "";
          }
          let str3 = "\u001B[0m";
          if (arg0) {
            str3 = "";
          }
          const self = this;
          if ("object" !== fn(this._object)) {
            return self.details[0].message;
          } else {
            let _object = self._object;
            if (!_object) {
              _object = {};
            }
            const cloneResult = closure_2.clone(_object);
            obj = {};
            let diff = self.details.length - 1;
            if (0 <= diff) {
              do {
                let sum = diff + 1;
                let tmp8 = self.details[diff];
                let str12 = tmp8.path;
                let parts = str12.split(".");
                if (0 < parts.length) {
                  let text = `, ${tmp7}`;
                  let num3 = 0;
                  let tmp16 = cloneResult;
                  if (cloneResult) {
                    while (true) {
                      let tmp10 = parts[num3];
                      let sum1 = num3 + 1;
                      if (sum1 < parts.length) {
                        let tmp13 = tmp16[tmp10];
                      } else {
                        let tmp24 = tmp16[tmp10];
                        let _Array = Array;
                        if (Array.isArray(tmp16)) {
                          if (!tmp16.placeholders) {
                            tmp16.placeholders = {};
                          }
                          let placeholders = tmp16.placeholders;
                          if (tmp16.placeholders[tmp10]) {
                            let str14 = tmp16.placeholders[tmp10];
                            placeholders[tmp10] = str14.replace("_$end$_", `${tmp22}_$end$_`);
                            tmp13 = tmp16;
                          } else {
                            placeholders[tmp10] = `${tmp23}_$end$_`;
                            tmp13 = tmp16;
                          }
                        } else if (undefined !== tmp24) {
                          delete tmp[tmp2];
                          let text1 = `${tmp10 + "_$key$_" + tmp7}_$end$_`;
                          tmp16[`${tmp10 + "_$key$_" + tmp7}_$end$_`] = tmp24;
                          obj[tmp8.path] = text1;
                          tmp13 = tmp16;
                        } else if (obj[tmp8.path]) {
                          let str13 = obj[tmp8.path];
                          let replaced = str13.replace("_$end$_", `${tmp22}_$end$_`);
                          tmp16[replaced] = tmp16[str13];
                          obj[tmp8.path] = replaced;
                          delete tmp[tmp3];
                          tmp13 = tmp16;
                        } else {
                          tmp16["_$miss$_" + tmp10 + "|" + sum + "_$end$_"] = "__missing__";
                          tmp13 = tmp16;
                        }
                      }
                      if (sum1 >= parts.length) {
                        break;
                      } else {
                        num3 = sum1;
                        tmp16 = tmp13;
                        if (!tmp13) {
                          break;
                        }
                      }
                    }
                  }
                }
                diff = diff - 1;
              } while (0 <= diff);
            }
            const str15 = obj.safeStringify(cloneResult, 2);
            const str16 = obj.safeStringify(cloneResult, 2).replace(/_\$key\$_([, \d]+)_\$end\$_\"/g, (arg0, arg1) => "\" " + str + "[" + arg1 + "]" + str3);
            const str17 = obj.safeStringify(cloneResult, 2).replace(/_\$key\$_([, \d]+)_\$end\$_\"/g, (arg0, arg1) => "\" " + str + "[" + arg1 + "]" + str3).replace(/\"_\$miss\$_([^\|]+)\|(\d+)_\$end\$_\"\: \"__missing__\"/g, (arg0, arg1, arg2) => str2 + "\"" + arg1 + "\"" + str3 + str + " [" + arg2 + "]: -- missing --" + str3);
            let text2 = `${obj.safeStringify(cloneResult, 2).replace(/_\$key\$_([, \d]+)_\$end\$_\"/g, (arg0, arg1) => "\" " + str + "[" + arg1 + "]" + str3).replace(/\"_\$miss\$_([^\|]+)\|(\d+)_\$end\$_\"\: \"__missing__\"/g, (arg0, arg1, arg2) => str2 + "\"" + arg1 + "\"" + str3 + str + " [" + arg2 + "]: -- missing --" + str3).replace(/\s*\"_\$idx\$_([, \d]+)_\$end\$_\",?\n(.*)/g, (arg0, arg1, arg2) => "\n" + arg2 + " " + str + "[" + arg1 + "]" + str3).replace(/"\[(NaN|Symbol.*|-?Infinity|function.*|\(.*)\]"/g, (arg0, arg1) => arg1)}
          ${str}`;
            let num5 = 0;
            let tmp19 = text2;
            if (0 < self.details.length) {
              do {
                sum2 = num5 + 1;
                text2 = text2 + "\n[" + sum2 + "] " + self.details[num5].message;
                tmp19 = text2;
                num5 = sum2;
                length = self.details.length;
              } while (sum2 < length);
            }
            return tmp19 + str3;
          }
        };
      }
      fn = (arg0) => {
        if (arg0) {
          const _Symbol = Symbol;
          if (typeof Symbol === "function") {
            const _Symbol3 = Symbol;
            if (arg0.constructor === Symbol) {
              const _Symbol2 = Symbol;
              let str = "symbol";
            }
            return str;
          }
        }
        str = typeof arg0;
      };
    },
    (arg0, arg1) => {
      const errors = { root: "value", key: "\"{{!key}}\" ", messages: { wrapArrays: true }, any: { unknown: "is not allowed", invalid: "contains an invalid value", empty: "is not allowed to be empty", required: "is required", allowOnly: "must be one of {{valids}}", default: "threw an error when running default method" }, alternatives: { base: "not matching any of the allowed alternatives" }, array: { base: "must be an array", includes: "at position {{pos}} does not match any of the allowed types", includesSingle: "single value of \"{{!key}}\" does not match any of the allowed types", includesOne: "at position {{pos}} fails because {{reason}}", includesOneSingle: "single value of \"{{!key}}\" fails because {{reason}}", includesRequiredUnknowns: "does not contain {{unknownMisses}} required value(s)", includesRequiredKnowns: "does not contain {{knownMisses}}", includesRequiredBoth: "does not contain {{knownMisses}} and {{unknownMisses}} other required value(s)", excludes: "at position {{pos}} contains an excluded value", excludesSingle: "single value of \"{{!key}}\" contains an excluded value", min: "must contain at least {{limit}} items", max: "must contain less than or equal to {{limit}} items", length: "must contain {{limit}} items", ordered: "at position {{pos}} fails because {{reason}}", orderedLength: "at position {{pos}} fails because array must contain at most {{limit}} items", sparse: "must not be a sparse array", unique: "position {{pos}} contains a duplicate value" }, boolean: { base: "must be a boolean" }, binary: { base: "must be a buffer or a string", min: "must be at least {{limit}} bytes", max: "must be less than or equal to {{limit}} bytes", length: "must be {{limit}} bytes" }, date: { base: "must be a number of milliseconds or valid date string", format: "must be a string with one of the following formats {{format}}", strict: "must be a valid date", min: "must be larger than or equal to \"{{limit}}\"", max: "must be less than or equal to \"{{limit}}\"", isoDate: "must be a valid ISO 8601 date", timestamp: { javascript: "must be a valid timestamp or number of milliseconds", unix: "must be a valid timestamp or number of seconds" }, ref: "references \"{{ref}}\" which is not a date" }, function: { base: "must be a Function", arity: "must have an arity of {{n}}", minArity: "must have an arity greater or equal to {{n}}", maxArity: "must have an arity lesser or equal to {{n}}", ref: "must be a Joi reference" }, lazy: { base: "!!schema error: lazy schema must be set", schema: "!!schema error: lazy schema function must return a schema" }, object: { base: "must be an object", child: "!!child \"{{!child}}\" fails because {{reason}}", min: "must have at least {{limit}} children", max: "must have less than or equal to {{limit}} children", length: "must have {{limit}} children", allowUnknown: "!!\"{{!child}}\" is not allowed", with: "missing required peer \"{{peer}}\"", without: "conflict with forbidden peer \"{{peer}}\"", missing: "must contain at least one of {{peers}}", xor: "contains a conflict between exclusive peers {{peers}}", or: "must contain at least one of {{peers}}", and: "contains {{present}} without its required peers {{missing}}", nand: "!!\"{{main}}\" must not exist simultaneously with {{peers}}", assert: "!!\"{{ref}}\" validation failed because \"{{ref}}\" failed to {{message}}", rename: { multiple: "cannot rename child \"{{from}}\" because multiple renames are disabled and another key was already renamed to \"{{to}}\"", override: "cannot rename child \"{{from}}\" because override is disabled and target \"{{to}}\" exists" }, type: "must be an instance of \"{{type}}\"", schema: "must be a Joi instance" }, number: { base: "must be a number", min: "must be larger than or equal to {{limit}}", max: "must be less than or equal to {{limit}}", less: "must be less than {{limit}}", greater: "must be greater than {{limit}}", float: "must be a float or double", integer: "must be an integer", negative: "must be a negative number", positive: "must be a positive number", precision: "must have no more than {{limit}} decimal places", ref: "references \"{{ref}}\" which is not a number", multiple: "must be a multiple of {{multiple}}" }, string: null };
      const range = { base: "must be a string", min: "length must be at least {{limit}} characters long", max: "length must be less than or equal to {{limit}} characters long", length: "length must be {{limit}} characters long", alphanum: "must only contain alpha-numeric characters", token: "must only contain alpha-numeric and underscore characters", regex: { base: "with value \"{{!value}}\" fails to match the required pattern: {{pattern}}", name: "with value \"{{!value}}\" fails to match the {{name}} pattern", invert: { base: "with value \"{{!value}}\" matches the inverted pattern: {{pattern}}", name: "with value \"{{!value}}\" matches the inverted {{name}} pattern" } }, email: "must be a valid email", uri: "must be a valid uri", uriRelativeOnly: "must be a valid relative uri", uriCustomScheme: "must be a valid uri with a scheme matching the {{scheme}} pattern", isoDate: "must be a valid ISO 8601 date", guid: "must be a valid GUID", hex: "must only contain hexadecimal characters", base64: "must be a valid base64 string", hostname: "must be a valid hostname", lowercase: "must only contain lowercase characters", uppercase: "must only contain uppercase characters", trim: "must not have leading or trailing whitespace", creditCard: "must be a credit card", ref: "references \"{{ref}}\" which is not a number", ip: "must be a valid ip address with a {{cidr}} CIDR", ipVersion: "must be a valid ip address of one of the following versions {{version}} with a {{cidr}} CIDR" };
      errors.string = range;
      arg1.errors = errors;
    },
    (arg0, arg1, fn) => {
      let Set = fn;
      closure_1 = fn;
      fn = (arg0) => {
        Set = arg0;
        if (typeof Symbol === "function") {
          let _Symbol = Symbol;
          if (typeof Symbol.iterator === "symbol") {
            fn = (arg0) => typeof arg0;
          }
          const ref = closure_1(15);
          class Set {
            constructor() {
              if (this instanceof Set) {
                tmp._set = [];
                return;
              } else {
                tmp2 = globalThis;
                _TypeError = TypeError;
                tmp3 = new.target;
                str = "Cannot call a class as a function";
                tmp4 = new.target;
                typeError = new TypeError("Cannot call a class as a function");
                tmp6 = typeError;
                throw typeError;
              }
            }
            add(arg0, arg1) {
              self = this;
              arr = closure_2;
              if (!closure_2.isRef(arg0)) {
                flag = false;
                tmp = self;
                tmp2 = arg0;
                tmp3 = null;
                tmp4 = null;
                if (self.has(arg0, null, null, false)) {
                  return;
                }
              }
              if (undefined !== arg1) {
                arr = arr.push(arg1, arg0);
              }
              _set = self._set;
              arr1 = _set.push(arg0);
              return self;
            }
            merge(arg0, arg1) {
              self = this;
              num = 0;
              if (0 < arg0._set.length) {
                do {
                  addResult = self.add(arg0._set[num]);
                  num = num + 1;
                  length = arg0._set.length;
                } while (num < length);
              }
              num2 = 0;
              if (0 < arg1._set.length) {
                do {
                  removeResult = self.remove(arg1._set[num2]);
                  num2 = num2 + 1;
                  length2 = arg1._set.length;
                } while (num2 < length2);
              }
              return self;
            }
            remove(arg0) {
              closure_0 = arg0;
              _set = this._set;
              this._set = _set.filter((item) => closure_0 !== item);
              return this;
            }
            has(arg0, arg1, arg2, arg3) {
              self = this;
              num = 0;
              if (0 < this._set.length) {
                while (true) {
                  tmp = self._set[num];
                  tmp2 = num;
                  isRefResult = arg1;
                  if (arg1) {
                    tmp4 = closure_2;
                    isRefResult = closure_2.isRef(tmp);
                  }
                  tmpResult = tmp;
                  if (isRefResult) {
                    tmp6 = arg1.reference || arg1.parent;
                    tmpResult = tmp(tmp6, arg2);
                  }
                  _Array = Array;
                  tmp7 = tmpResult;
                  arr = tmpResult;
                  if (!Array.isArray(tmpResult)) {
                    items = [];
                    items[0] = tmpResult;
                    arr = items;
                  }
                  num2 = 0;
                  if (0 < arr.length) {
                    while (true) {
                      str = arr[num2];
                      tmp8 = num2;
                      str2 = "undefined";
                      if (undefined !== arg0) {
                        tmp9 = f122221;
                        str2 = f122221(arg0);
                      }
                      str3 = "undefined";
                      if (undefined !== str) {
                        tmp10 = f122221;
                        str3 = f122221(str);
                      }
                      if (str2 === str3) {
                        if (arg0 === str) {
                          break;
                        } else {
                          _Date2 = Date;
                          if (arg0 instanceof Date) {
                            _Date = Date;
                            if (str instanceof Date) {
                              time = arg0.getTime();
                              if (time === str.getTime()) {
                                break;
                              }
                            }
                            flag = true;
                            return true;
                          }
                          if (arg3) {
                            if (typeof arg0 === "string") {
                              formatted = arg0.toLowerCase();
                              if (formatted === str.toLowerCase()) {
                                break;
                              }
                            }
                            break;
                          }
                          obj = Set;
                          if (Set.isBuffer(arg0)) {
                            if (obj.isBuffer(str)) {
                              if (arg0.length === str.length) {
                                str = arg0.toString("binary");
                                if (str === str.toString("binary")) {
                                  break;
                                }
                              }
                              break;
                            }
                          }
                        }
                      }
                      num2 = num2 + 1;
                      continue;
                    }
                  }
                  num = num + 1;
                }
              }
              return false;
            }
            values(arg0) {
              self = this;
              if (arg0) {
                if (arg0.stripUndefined) {
                  items = [];
                  num = 0;
                  num2 = 1;
                  if (0 < self._set.length) {
                    do {
                      tmp = self._set[num];
                      tmp2 = num;
                      if (undefined !== tmp) {
                        arr = items.push(tmp);
                      }
                      num = num + 1;
                    } while (num < self._set.length);
                  }
                  return items;
                }
              }
              _set = self._set;
              return _set.slice();
            }
            slice() {
              obj = Object.create(Set.prototype);
              if (obj instanceof Set) {
                self = this;
                obj._set = [];
                _set = this._set;
                obj._set = _set.slice();
                return obj;
              } else {
                tmp2 = globalThis;
                _TypeError = TypeError;
                tmp3 = new.target;
                str = "Cannot call a class as a function";
                tmp4 = new.target;
                typeError = new TypeError("Cannot call a class as a function");
                tmp6 = typeError;
                throw typeError;
              }
            }
            concat(arg0) {
              obj = Object.create(Set.prototype);
              if (obj instanceof Set) {
                self = this;
                tmp7 = arg0;
                obj._set = [];
                _set = this._set;
                obj._set = _set.concat(arg0._set);
                return obj;
              } else {
                tmp2 = globalThis;
                _TypeError = TypeError;
                tmp3 = new.target;
                str = "Cannot call a class as a function";
                tmp4 = new.target;
                typeError = new TypeError("Cannot call a class as a function");
                tmp6 = typeError;
                throw typeError;
              }
            }
          }
          Set.exports = Set;
        }
        fn = (arg0) => {
          if (arg0) {
            const _Symbol = Symbol;
            if (typeof Symbol === "function") {
              const _Symbol3 = Symbol;
              if (arg0.constructor === Symbol) {
                const _Symbol2 = Symbol;
                let str = "symbol";
              }
              return str;
            }
          }
          str = typeof arg0;
        };
      };
      const call = fn.call;
      const _Buffer = fn(3).Buffer;
      if (typeof call === "unknown") {
        closure_129_0 = _Buffer;
        let _Symbol = Symbol;
        if (typeof Symbol !== "function") {
          closure_129_1 = (arg0) => {
            if (arg0) {
              const _Symbol = Symbol;
              if (typeof Symbol === "function") {
                const _Symbol3 = Symbol;
                if (arg0.constructor === Symbol) {
                  const _Symbol2 = Symbol;
                  let str = "symbol";
                }
                return str;
              }
            }
            str = typeof arg0;
          };
          closure_129_2 = Set(15);
          class Set {
            constructor() {
              if (this instanceof Set) {
                tmp._set = [];
                return;
              } else {
                tmp2 = globalThis;
                _TypeError = TypeError;
                tmp3 = new.target;
                str = "Cannot call a class as a function";
                tmp4 = new.target;
                typeError = new TypeError("Cannot call a class as a function");
                tmp6 = typeError;
                throw typeError;
              }
            }
            add(arg0, arg1) {
              self = this;
              arr = closure_2;
              if (!closure_2.isRef(module)) {
                flag = false;
                tmp = self;
                tmp2 = module;
                tmp3 = null;
                tmp4 = null;
                if (self.has(module, null, null, false)) {
                  return;
                }
              }
              if (undefined !== exports) {
                arr = arr.push(exports, module);
              }
              _set = self._set;
              arr1 = _set.push(module);
              return self;
            }
            merge(arg0, arg1) {
              self = this;
              num = 0;
              if (0 < module._set.length) {
                do {
                  addResult = self.add(module._set[num]);
                  num = num + 1;
                  length = module._set.length;
                } while (num < length);
              }
              num2 = 0;
              if (0 < exports._set.length) {
                do {
                  removeResult = self.remove(exports._set[num2]);
                  num2 = num2 + 1;
                  length2 = exports._set.length;
                } while (num2 < length2);
              }
              return self;
            }
            remove(arg0) {
              closure_0 = module;
              _set = this._set;
              this._set = _set.filter((item) => closure_0 !== item);
              return this;
            }
            has(arg0, arg1, arg2, arg3) {
              self = this;
              num = 0;
              if (0 < this._set.length) {
                while (true) {
                  tmp = self._set[num];
                  tmp2 = num;
                  isRefResult = exports;
                  if (exports) {
                    tmp4 = closure_2;
                    isRefResult = closure_2.isRef(tmp);
                  }
                  tmpResult = tmp;
                  if (isRefResult) {
                    tmp6 = exports.reference || exports.parent;
                    tmpResult = tmp(tmp6, fn);
                  }
                  _Array = Array;
                  tmp7 = tmpResult;
                  arr = tmpResult;
                  if (!Array.isArray(tmpResult)) {
                    items = [];
                    items[0] = tmpResult;
                    arr = items;
                  }
                  num2 = 0;
                  if (0 < arr.length) {
                    while (true) {
                      str = arr[num2];
                      tmp8 = num2;
                      str2 = "undefined";
                      if (undefined !== module) {
                        tmp9 = f122221;
                        str2 = f122221(module);
                      }
                      str3 = "undefined";
                      if (undefined !== str) {
                        tmp10 = f122221;
                        str3 = f122221(str);
                      }
                      if (str2 === str3) {
                        if (module === str) {
                          break;
                        } else {
                          _Date2 = Date;
                          if (module instanceof Date) {
                            _Date = Date;
                            if (str instanceof Date) {
                              time = module.getTime();
                              if (time === str.getTime()) {
                                break;
                              }
                            }
                            flag = true;
                            return true;
                          }
                          if (arg3) {
                            if (typeof module === "string") {
                              formatted = module.toLowerCase();
                              if (formatted === str.toLowerCase()) {
                                break;
                              }
                            }
                            break;
                          }
                          obj = Set;
                          if (Set.isBuffer(module)) {
                            if (obj.isBuffer(str)) {
                              if (module.length === str.length) {
                                str = module.toString("binary");
                                if (str === str.toString("binary")) {
                                  break;
                                }
                              }
                              break;
                            }
                          }
                        }
                      }
                      num2 = num2 + 1;
                      continue;
                    }
                  }
                  num = num + 1;
                }
              }
              return false;
            }
            values(arg0) {
              self = this;
              if (module) {
                if (module.stripUndefined) {
                  items = [];
                  num = 0;
                  num2 = 1;
                  if (0 < self._set.length) {
                    do {
                      tmp = self._set[num];
                      tmp2 = num;
                      if (undefined !== tmp) {
                        arr = items.push(tmp);
                      }
                      num = num + 1;
                    } while (num < self._set.length);
                  }
                  return items;
                }
              }
              _set = self._set;
              return _set.slice();
            }
            slice() {
              obj = Object.create(Set.prototype);
              if (obj instanceof Set) {
                self = this;
                obj._set = [];
                _set = this._set;
                obj._set = _set.slice();
                return obj;
              } else {
                tmp2 = globalThis;
                _TypeError = TypeError;
                tmp3 = new.target;
                str = "Cannot call a class as a function";
                tmp4 = new.target;
                typeError = new TypeError("Cannot call a class as a function");
                tmp6 = typeError;
                throw typeError;
              }
            }
            concat(arg0) {
              obj = Object.create(Set.prototype);
              if (obj instanceof Set) {
                self = this;
                tmp7 = module;
                obj._set = [];
                _set = this._set;
                obj._set = _set.concat(module._set);
                return obj;
              } else {
                tmp2 = globalThis;
                _TypeError = TypeError;
                tmp3 = new.target;
                str = "Cannot call a class as a function";
                tmp4 = new.target;
                typeError = new TypeError("Cannot call a class as a function");
                tmp6 = typeError;
                throw typeError;
              }
            }
          }
          module.exports = Set;
        } else {
          let _Symbol2 = Symbol;
        }
      } else {
        call(exports, _Buffer);
      }
    },
    (arg0, arg1, fn) => {
      closure_0 = fn;
      if (typeof Symbol === "function") {
        let _Symbol = Symbol;
        if (typeof Symbol.iterator === "symbol") {
          fn = (arg0) => typeof arg0;
        }
        closure_2 = fn(2);
        closure_3 = fn(15);
        obj = { any: null, date: fn(20), string: fn(21), number: fn(26), boolean: fn(27), alt: null, object: null };
        arg1.schema = (isJoi) => {
          let _try = obj;
          let any = obj.any;
          if (!any) {
            any = new closure_0(14)();
          }
          _try.any = any;
          let alt = _try.alt;
          if (!alt) {
            alt = closure_0(28);
          }
          _try.alt = alt;
          let object = _try.object;
          if (!object) {
            object = closure_0(29);
          }
          _try.object = object;
          if (null != isJoi) {
            let str = "undefined";
            if (undefined !== isJoi) {
              str = fn(isJoi);
            }
            if ("object" === str) {
              if (isJoi.isJoi) {
                let validResult = isJoi;
              } else {
                const _Array = Array;
                if (Array.isArray(isJoi)) {
                  const alt2 = _try.alt;
                  _try = alt2.try;
                  let _tryResult = _try(isJoi);
                } else {
                  const _RegExp = RegExp;
                  if (isJoi instanceof RegExp) {
                    const string2 = _try.string;
                    _tryResult = string2.regex(isJoi);
                  } else {
                    const _Date = Date;
                    if (isJoi instanceof Date) {
                      _tryResult = _try.date.valid(isJoi);
                      const date = _try.date;
                    } else {
                      object = _try.object;
                      _tryResult = object.keys(isJoi);
                    }
                  }
                }
              }
            }
            return validResult;
          }
          if (typeof isJoi === "string") {
            const string = _try.string;
            validResult = string.valid(isJoi);
          } else if (typeof isJoi === "number") {
            const number = _try.number;
            validResult = number.valid(isJoi);
          } else if (typeof isJoi === "boolean") {
            const boolean = _try.boolean;
            validResult = boolean.valid(isJoi);
          } else if (closure_3.isRef(isJoi)) {
            const any3 = _try.any;
            validResult = any3.valid(isJoi);
          } else {
            closure_2.assert(null === isJoi, "Invalid schema content:", isJoi);
            const any2 = _try.any;
            validResult = any2.valid(null);
          }
        };
        arg1.ref = (arg0) => {
          obj = arg0;
          if (!closure_3.isRef(arg0)) {
            obj = obj.create(arg0);
          }
          return obj;
        };
      }
      fn = (arg0) => {
        if (arg0) {
          const _Symbol = Symbol;
          if (typeof Symbol === "function") {
            const _Symbol3 = Symbol;
            if (arg0.constructor === Symbol) {
              const _Symbol2 = Symbol;
              let str = "symbol";
            }
            return str;
          }
        }
        str = typeof arg0;
      };
    },
    (arg0, arg1, fn) => {
      let tmp = fn(14);
      const _class = fn(15);
      closure_2 = fn(2);
      obj = { isoDate: /^(?:\d{4}(?!\d{2}\b))(?:(-?)(?:(?:0[1-9]|1[0-2])(?:\1(?:[12]\d|0[1-9]|3[01]))?|W(?:[0-4]\d|5[0-2])(?:-?[1-7])?|(?:00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[1-6])))(?![T]$|[T][\d]+Z$)(?:[T\s](?:(?:(?:[01]\d|2[0-3])(?:(:?)[0-5]\d)?|24\:?00)(?:[.,]\d+(?!:))?)(?:\2[0-5]\d(?:[.,]\d+)?)?(?:[Z]|(?:[+-])(?:[01]\d|2[0-3])(?::?[0-5]\d)?)?)?)?$/, invalidDate: new Date("") };
      obj.isoDate.toString();
      obj.isIsoDate = (arg0) => {
        let tmp = arg0;
        if (arg0) {
          tmp = arg0.toString() === closure_0;
        }
        return tmp;
      };
      closure_0 = tmp;
      class _class {
        constructor() {
          self = this;
          if (this instanceof _class) {
            tmp6 = closure_0;
            call = closure_0.call;
            tmp7 = typeof call === "unknown" ? tmp6() : call(self);
            if (self) {
              tmp13 = self;
              if (tmp7) {
                if (typeof tmp7 === "object") {
                  tmp13 = tmp7;
                } else {
                  tmp13 = self;
                }
              }
              str3 = "date";
              tmp13._type = "date";
              return tmp13;
            } else {
              tmp8 = globalThis;
              _ReferenceError = ReferenceError;
              tmp9 = new.target;
              str2 = "this hasn't been initialised - super() hasn't been called";
              tmp10 = new.target;
              referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
              tmp12 = referenceError;
              throw referenceError;
            }
          } else {
            tmp = globalThis;
            _TypeError = TypeError;
            tmp2 = new.target;
            str = "Cannot call a class as a function";
            tmp3 = new.target;
            typeError = new TypeError("Cannot call a class as a function");
            tmp5 = typeError;
            throw typeError;
          }
        }
        _base(arg0, arg1, arg2) {
          self = this;
          convert = fn.convert;
          if (convert) {
            tmp = closure_3;
            _Date = closure_3.Date;
            tmp2 = _Date;
            tmp3 = module;
            convert = _Date.toDate(module, self._flags.format, self._flags.timestamp, self._flags.multiplier);
          }
          if (!convert) {
            convert = module;
          }
          obj = { value: convert };
          if (obj.value instanceof Date) {
            _isNaN = isNaN;
            value = obj.value;
            if (!isNaN(value.getTime())) {
              tmp4 = null;
              obj.errors = null;
            }
            return obj;
          }
          if (fn.convert) {
            tmp9 = closure_3;
            str2 = "isoDate";
            if (!closure_3.isIsoDate(self._flags.format)) {
              str3 = "base";
              if (self._flags.timestamp) {
                str4 = "timestamp.";
                str3 = `timestamp.${self._flags.timestamp}`;
              }
              str2 = str3;
            }
            tmp10 = null;
            str5 = "date.";
            tmp11 = self;
            tmp12 = exports;
            tmp13 = fn;
            obj.errors = self.createError(`date.${str2}`, null, exports, fn);
          } else {
            tmp5 = null;
            str = "date.strict";
            tmp6 = self;
            tmp7 = exports;
            tmp8 = fn;
            obj.errors = self.createError("date.strict", null, exports, fn);
          }
          return;
        }
        static toDate(arg0, arg1, arg2, arg3) {
          if (module instanceof Date) {
            return module;
          } else {
            if (typeof module === "string") {
              isMatch = typeof module === "string";
              if (typeof module === "string") {
                obj2 = /^[+-]?\d+(\.\d+)?$/;
                isMatch = obj2.test(module);
              }
              parsed = module;
              if (isMatch) {
                _parseFloat = parseFloat;
                parsed = parseFloat(module);
              }
              tmp3 = exports;
              if (exports) {
                tmp4 = closure_3;
                if (closure_3.isIsoDate(exports)) {
                  if (exports.test(parsed)) {
                    _Date3 = Date;
                    tmp12 = new.target;
                    tmp13 = new.target;
                    tmp14 = parsed;
                    invalidDate = new Date(parsed);
                  } else {
                    invalidDate = tmp4.invalidDate;
                  }
                  tmp15 = invalidDate;
                }
              }
              tmp5 = fn;
              if (fn) {
                tmp6 = arg3;
                if (arg3) {
                  _Date2 = Date;
                  tmp10 = new.target;
                  tmp11 = new.target;
                  date = new Date(parsed * arg3);
                }
                _isNaN = isNaN;
                if (!isNaN(date.getTime())) {
                  return date;
                }
              }
              _Date = Date;
              tmp7 = new.target;
              tmp8 = new.target;
              tmp9 = parsed;
              date = new Date(parsed);
            } else if (typeof module === "number") {
              _isNaN2 = isNaN;
              if (!isNaN(module)) {
                _isFinite = isFinite;
              }
            }
            tmp16 = null;
            return null;
          }
        }
        iso() {
          cloneResult = this.clone();
          cloneResult._flags.format = closure_3.isoDate;
          return cloneResult;
        }
        timestamp(arg0) {
          str = module;
          if (!module) {
            str = "javascript";
          }
          items = ["javascript", "unix"];
          index = items.indexOf(str);
          assertResult = closure_2.assert(-1 !== index, `"type" must be one of "${arr.join("\", \"")}"`);
          cloneResult = this.clone();
          cloneResult._flags.timestamp = str;
          num = 1;
          if ("unix" === str) {
            num = 1000;
          }
          cloneResult._flags.multiplier = num;
          return cloneResult;
        }
        _isIsoDate(arg0) {
          isoDate = closure_3.isoDate;
          return isoDate.test(module);
        }
      }
      if (typeof tmp !== "function") {
        if (null !== tmp) {
          let _TypeError = TypeError;
          let typeError = new TypeError("Super expression must either be null or a function, not " + typeof tmp);
          throw typeError;
        }
      }
      let prototype = tmp;
      if (tmp) {
        prototype = tmp.prototype;
      }
      obj = { constructor: { value: _class, enumerable: false, writable: true, configurable: true } };
      _class.prototype = Object.create(prototype, obj);
      if (tmp) {
        const _Object = Object;
        const _Object2 = Object;
        if (Object.setPrototypeOf) {
          _Object2.setPrototypeOf(_class, tmp);
        } else {
          const ownPropertyNames = _Object2.getOwnPropertyNames(tmp);
          for (let num = 0; num < ownPropertyNames.length; num = num + 1) {
            let tmp3 = ownPropertyNames[num];
            let _Object3 = Object;
            let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(tmp, tmp3);
            let configurable = ownPropertyDescriptor;
            if (ownPropertyDescriptor) {
              configurable = ownPropertyDescriptor.configurable;
            }
            if (configurable) {
              configurable = undefined === _class[tmp3];
            }
            if (configurable) {
              let _Object4 = Object;
              let definePropertyResult = Object.defineProperty(_class, tmp3, ownPropertyDescriptor);
            }
          }
        }
      }
      obj.Date = _class;
      obj.compare = (arg0, arg1) => {
        closure_0 = arg0;
        return function(length) {
          let tmp = "now" === length;
          const isRefResult = tmp.isRef(length);
          closure_2 = isRefResult;
          if (!tmp) {
            tmp = isRefResult;
          }
          let tmp3 = length;
          if (!tmp) {
            _Date = _Date.Date;
            let toDateResult = _Date.toDate(length);
            length = toDateResult;
            tmp3 = toDateResult;
          }
          closure_1_2.assert(tmp3, "Invalid date format");
          return this._test(length, tmp3, function(getTime, reference, concatSettingsResult) {
            const self = this;
            if (closure_1) {
              const _Date2 = Date;
              let timestamp = Date.now();
            } else if (isRefResult) {
              _Date = obj.Date;
              let parent = reference.reference;
              if (!parent) {
                parent = reference.parent;
              }
              const toDateResult = _Date.toDate(length(parent, concatSettingsResult));
              if (toDateResult) {
                timestamp = toDateResult.getTime();
              } else {
                obj = { ref: length.key };
                return self.createError("date.ref", obj, reference, concatSettingsResult);
              }
            } else {
              timestamp = length.getTime();
            }
            let error = getTime;
            if (!closure_1(getTime.getTime(), timestamp)) {
              const text = `date.${closure_0}`;
              obj = { limit: null };
              const _Date3 = Date;
              const date = new Date(tmp12);
              obj.limit = date;
              error = self.createError(`date.${closure_0}`, obj, reference, concatSettingsResult);
            }
            return error;
          });
        };
      };
      obj.Date.prototype.min = obj.compare("min", (arg0, arg1) => arg0 >= arg1);
      obj.Date.prototype.max = obj.compare("max", (arg0, arg1) => arg0 <= arg1);
      let date = new Date("");
      module.exports = new obj.Date();
    },
    (arg0, arg1, fn) => {
      closure_0 = arg0;
      closure_1 = fn;
      fn = (_Buffer) => {
        closure_0 = _Buffer;
        if (typeof Symbol === "function") {
          let _Symbol = Symbol;
          if (typeof Symbol.iterator === "symbol") {
            fn = (arg0) => typeof arg0;
          }
          const _class = fn;
          closure_2 = closure_1(8);
          closure_3 = closure_1(2);
          closure_4 = closure_1(22);
          let tmp2 = closure_1(14);
          closure_5 = closure_1(15);
          closure_6 = closure_1(20);
          closure_1(23);
          let obj1 = closure_1(25);
          obj = { uriRegex: null, ipRegex: null };
          obj.uriRegex = obj.createUriRegex();
          obj.ipRegex = obj1.createIpRegex(["ipv4", "ipv6", "ipvfuture"], "optional");
          closure_0 = tmp2;
          class _class {
            constructor() {
              self = this;
              if (this instanceof _class) {
                tmp6 = closure_0;
                call = closure_0.call;
                tmp7 = typeof call === "unknown" ? tmp6() : call(self);
                if (self) {
                  tmp13 = self;
                  if (tmp7) {
                    if (typeof tmp7 === "object") {
                      tmp13 = tmp7;
                    } else {
                      tmp13 = self;
                    }
                  }
                  str3 = "string";
                  tmp13._type = "string";
                  _invalids = tmp13._invalids;
                  str4 = "";
                  addResult = _invalids.add("");
                  return tmp13;
                } else {
                  tmp8 = globalThis;
                  _ReferenceError = ReferenceError;
                  tmp9 = new.target;
                  str2 = "this hasn't been initialised - super() hasn't been called";
                  tmp10 = new.target;
                  referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  tmp12 = referenceError;
                  throw referenceError;
                }
              } else {
                tmp = globalThis;
                _TypeError = TypeError;
                tmp2 = new.target;
                str = "Cannot call a class as a function";
                tmp3 = new.target;
                typeError = new TypeError("Cannot call a class as a function");
                tmp5 = typeError;
                throw typeError;
              }
            }
            _base(arg0, arg1, arg2) {
              self = this;
              substr = _Buffer;
              if (typeof _Buffer === "string") {
                substr = _Buffer;
                if (arg2.convert) {
                  tmp2 = _Buffer;
                  if (!self._flags.case) {
                    trimmed = _Buffer;
                    if (self._flags.trim) {
                      trimmed = _Buffer.trim();
                    }
                    arr = trimmed;
                    if (self._inner.replacements) {
                      num = 0;
                      num2 = 1;
                      str2 = trimmed;
                      arr = trimmed;
                      if (0 < self._inner.replacements.length) {
                        do {
                          tmp6 = self._inner.replacements[num];
                          str2 = str2.replace(tmp6.pattern, tmp6.replacement);
                          num = num + 1;
                          arr = str2;
                          length = self._inner.replacements.length;
                        } while (num < length);
                      }
                    }
                    substr = arr;
                    if (self._flags.truncate) {
                      num3 = 0;
                      num4 = 1;
                      str3 = "max";
                      num5 = 0;
                      substr = arr;
                      if (0 < self._tests.length) {
                        tmp7 = self._tests[num5];
                        tmp8 = num5;
                        while ("max" !== tmp7.name) {
                          num5 = num5 + 1;
                          substr = arr;
                        }
                        substr = arr.slice(0, tmp7.arg);
                      }
                    }
                  } else {
                    str = "upper";
                    if ("upper" === self._flags.case) {
                      toLocaleUpperCaseResult = _Buffer.toLocaleUpperCase();
                    } else {
                      toLocaleUpperCaseResult = _Buffer.toLocaleLowerCase();
                    }
                    tmp4 = toLocaleUpperCaseResult;
                  }
                }
              }
              obj = { value: substr, errors: null };
              error = null;
              if (typeof substr !== "string") {
                tmp10 = arg1;
                obj = { value: null };
                obj.value = substr;
                str4 = "string.base";
                tmp11 = self;
                tmp12 = obj;
                tmp13 = arg2;
                error = self.createError("string.base", obj, arg1, arg2);
              }
              obj.errors = error;
              return obj;
            }
            insensitive() {
              cloneResult = this.clone();
              cloneResult._flags.insensitive = true;
              return cloneResult;
            }
            creditCard() {
              return this._test("creditCard", undefined, function(value, mergeResult, concatSettingsResult) {
                let tmp4;
                let diff = tmp - 1;
                let num = 1;
                let num2 = 0;
                let num3 = 0;
                if (+value.length) {
                  do {
                    let result = value.charAt(diff) * num;
                    num2 = num2 + (result - 9 * (result > 9));
                    num = num ^ 3;
                    tmp4 = +diff;
                    diff = tmp4 - 1;
                    num3 = num2;
                  } while (tmp4);
                }
                if (num3 % 10 !== 0) {
                  const self = this;
                  obj = { value };
                  const self2 = this;
                  let error = this.createError("string.creditCard", obj, mergeResult, concatSettingsResult);
                } else {
                  error = value;
                }
                return error;
              });
            }
            regex(arg0, arg1) {
              assertResult = closure_3.assert(_Buffer instanceof RegExp, "pattern must be a RegExp");
              str = undefined;
              if (_Buffer.ignoreCase) {
                str = "i";
              }
              obj = { pattern: null };
              regExp = new RegExp(_Buffer.source, str);
              obj.pattern = regExp;
              closure_0 = obj;
              if (typeof arg1 === "string") {
                obj.name = arg1;
              } else {
                str2 = "undefined";
                if (undefined !== arg1) {
                  tmp3 = _class;
                  str2 = _class(arg1);
                }
                str3 = "object";
                if ("object" === str2) {
                  obj.invert = arg1.invert;
                  if (arg1.name) {
                    obj.name = arg1.name;
                  }
                }
              }
              str4 = "";
              if (obj.invert) {
                str4 = ".invert";
              }
              items = ["string.regex"];
              items[1] = str4;
              str5 = ".base";
              if (obj.name) {
                str5 = ".name";
              }
              items[2] = str5;
              closure_1 = items.join("");
              return this._test("regex", obj, function(value, mergeResult, concatSettingsResult) {
                const pattern = obj.pattern;
                let error = value;
                if (!(pattern.test(value) ^ obj.invert)) {
                  const self = this;
                  obj = { name: null, pattern: null, value: null };
                  ({ name: obj.name, pattern: obj.pattern } = obj);
                  obj.value = value;
                  const self2 = this;
                  error = this.createError(closure_1, obj, mergeResult, concatSettingsResult);
                }
                return error;
              });
            }
            alphanum() {
              return this._test("alphanum", undefined, function(value, mergeResult, concatSettingsResult) {
                obj = /^[a-zA-Z0-9]+$/;
                let error = value;
                if (!obj.test(value)) {
                  const self = this;
                  obj = { value };
                  const self2 = this;
                  error = this.createError("string.alphanum", obj, mergeResult, concatSettingsResult);
                }
                return error;
              });
            }
            token() {
              return this._test("token", undefined, function(value, mergeResult, concatSettingsResult) {
                obj = /^\w+$/;
                let error = value;
                if (!obj.test(value)) {
                  const self = this;
                  obj = { value };
                  const self2 = this;
                  error = this.createError("string.token", obj, mergeResult, concatSettingsResult);
                }
                return error;
              });
            }
            email(arg0) {
              closure_0 = _Buffer;
              if (_Buffer) {
                obj = closure_3;
                str = "undefined";
                if (undefined !== _Buffer) {
                  tmp = _class;
                  str = _class(_Buffer);
                }
                str2 = "email options must be an object";
                str3 = "object";
                assertResult = closure_3.assert("object" === str, "email options must be an object");
                str4 = "checkDNS option is not supported";
                assertResult1 = obj.assert(undefined === _Buffer.checkDNS, "checkDNS option is not supported");
                tmp4 = undefined === _Buffer.tldWhitelist;
                if (!tmp4) {
                  tmp5 = _class;
                  tmp4 = "object" === _class(_Buffer.tldWhitelist);
                }
                str5 = "tldWhitelist must be an array or object";
                assertResult2 = obj.assert(tmp4, "tldWhitelist must be an array or object");
                tmp7 = undefined === _Buffer.minDomainAtoms;
                if (!tmp7) {
                  isIntegerResult = obj.isInteger(_Buffer.minDomainAtoms);
                  if (isIntegerResult) {
                    num = 0;
                    isIntegerResult = _Buffer.minDomainAtoms > 0;
                  }
                  tmp7 = isIntegerResult;
                }
                str6 = "minDomainAtoms must be a positive integer";
                assertResult3 = obj.assert(tmp7, "minDomainAtoms must be a positive integer");
                tmp10 = undefined === _Buffer.errorLevel;
                if (!tmp10) {
                  tmp10 = typeof _Buffer.errorLevel === "boolean";
                }
                if (!tmp10) {
                  isIntegerResult1 = obj.isInteger(_Buffer.errorLevel);
                  if (isIntegerResult1) {
                    num2 = 0;
                    isIntegerResult1 = _Buffer.errorLevel >= 0;
                  }
                  tmp10 = isIntegerResult1;
                }
                str7 = "errorLevel must be a non-negative integer or boolean";
                assertResult4 = obj.assert(tmp10, "errorLevel must be a non-negative integer or boolean");
              }
              return this._test("email", _Buffer, function(value, mergeResult, concatSettingsResult) {
                try {
                  const validateResult = closure_4.validate(value, closure_0);
                  if (true !== validateResult) {
                    if (0 !== tmp4) {
                      const self = this;
                      obj = { value };
                      const self2 = this;
                      return this.createError("string.email", obj, mergeResult, concatSettingsResult);
                    }
                  }
                  return value;
                } catch (err) {
                }
              });
            }
            ip(arg0) {
              obj = _Buffer;
              closure_0 = _Buffer;
              closure_1 = closure_9.ipRegex;
              if (!_Buffer) {
                obj = {};
              }
              closure_0 = obj;
              obj2 = closure_3;
              str = "undefined";
              if (undefined !== obj) {
                tmp = _class;
                str = _class(obj);
              }
              assertResult = closure_3.assert("object" === str, "options must be an object");
              if (obj.cidr) {
                str3 = "cidr must be a string";
                assertResult1 = obj2.assert(typeof obj.cidr === "string", "cidr must be a string");
                str4 = obj.cidr;
                obj.cidr = str4.toLowerCase();
                obj3 = closure_8;
                tmp5 = globalThis;
                _Object = Object;
                tmp4 = obj.cidr in closure_8.cidrs;
                keys = Object.keys(closure_8.cidrs);
                str5 = ", ";
                str6 = "cidr must be one of ";
                assertResult2 = obj2.assert(tmp4, `cidr must be one of ${obj4.join(", ")}`);
                version = obj.version;
                if (!version) {
                  str7 = "optional";
                  version = "optional" === obj.cidr;
                }
                if (!version) {
                  closure_1 = obj3.createIpRegex(["ipv4", "ipv6", "ipvfuture"], obj.cidr);
                }
              } else {
                str2 = "optional";
                obj.cidr = "optional";
              }
              closure_2 = undefined;
              if (obj.version) {
                tmp7 = globalThis;
                _Array = Array;
                if (!Array.isArray(obj.version)) {
                  items = [];
                  items[0] = obj.version;
                  obj.version = items;
                }
                num = 1;
                str8 = "version must have at least 1 version specified";
                assertResult3 = obj2.assert(obj.version.length >= 1, "version must have at least 1 version specified");
                items1 = [];
                closure_2 = items1;
                num2 = 0;
                str9 = "version at position ";
                str10 = " must be a string";
                str11 = ", ";
                str12 = " must be one of ";
                obj5 = obj2;
                if (0 < obj.version.length) {
                  do {
                    str13 = obj.version[num2];
                    tmp9 = closure_3;
                    text = `version at position ${num2}`;
                    assertResult4 = closure_3.assert(typeof str13 === "string", `version at position ${num2}` + " must be a string");
                    formatted = str13.toLowerCase();
                    tmp13 = closure_8;
                    _Object2 = Object;
                    keys1 = Object.keys(closure_8.versions);
                    assertResult5 = closure_3.assert(closure_8.versions[formatted], `version at position ${num2}` + " must be one of " + keys1.join(", "));
                    arr = items1.push(formatted);
                    num2 = num2 + 1;
                    obj5 = closure_3;
                    length = obj.version.length;
                  } while (num2 < length);
                }
                uniqueResult = obj5.unique(items1);
                closure_2 = uniqueResult;
                tmp17 = closure_8;
                closure_1 = closure_8.createIpRegex(uniqueResult, obj.cidr);
              }
              return this._test("ip", obj, function(value, mergeResult, concatSettingsResult) {
                if (regex.test(value)) {
                  return value;
                } else {
                  const self = this;
                  const createError = this.createError;
                  if (items1) {
                    obj = { value, cidr: null, version: null };
                    obj.cidr = obj.cidr;
                    obj.version = tmp3;
                    let error = createError("string.ipVersion", obj, mergeResult, concatSettingsResult);
                  } else {
                    obj = { value, cidr: null };
                    obj.cidr = obj.cidr;
                    error = createError("string.ip", obj, mergeResult, concatSettingsResult);
                  }
                }
              });
            }
            uri(arg0) {
              closure_0 = "";
              c1 = false;
              closure_2 = closure_9.uriRegex;
              flag = false;
              flag2 = false;
              str = "";
              if (_Buffer) {
                obj = closure_3;
                str2 = "undefined";
                if (undefined !== _Buffer) {
                  tmp = _class;
                  str2 = _class(_Buffer);
                }
                str3 = "options must be an object";
                str4 = "object";
                assertResult = closure_3.assert("object" === str2, "options must be an object");
                str5 = "";
                if (_Buffer.scheme) {
                  tmp3 = globalThis;
                  _RegExp = RegExp;
                  isArray = _Buffer.scheme instanceof RegExp;
                  if (!isArray) {
                    isArray = typeof _Buffer.scheme === "string";
                  }
                  if (!isArray) {
                    _Array = Array;
                    isArray = Array.isArray(_Buffer.scheme);
                  }
                  str6 = "scheme must be a RegExp, String, or Array";
                  assertResult1 = obj.assert(isArray, "scheme must be a RegExp, String, or Array");
                  _Array2 = Array;
                  if (!Array.isArray(_Buffer.scheme)) {
                    items = [];
                    items[0] = _Buffer.scheme;
                    _Buffer.scheme = items;
                  }
                  num = 1;
                  str7 = "scheme must have at least 1 scheme specified";
                  assertResult2 = obj.assert(_Buffer.scheme.length >= 1, "scheme must have at least 1 scheme specified");
                  num2 = 0;
                  str8 = " must be a valid scheme";
                  str9 = "|";
                  str10 = "scheme at position ";
                  str11 = " must be a RegExp or String";
                  str12 = "";
                  str5 = "";
                  if (0 < _Buffer.scheme.length) {
                    do {
                      tmp7 = _Buffer.scheme[num2];
                      obj2 = closure_3;
                      _RegExp2 = RegExp;
                      tmp8 = tmp7 instanceof RegExp;
                      tmp9 = num2;
                      tmp10 = str12;
                      if (!tmp8) {
                        tmp8 = typeof tmp7 === "string";
                      }
                      text = `scheme at position ${num2}`;
                      assertResult3 = closure_3.assert(tmp8, `${`scheme at position ${num2}`} must be a RegExp or String`);
                      str13 = "";
                      if (str12) {
                        str13 = "|";
                      }
                      sum = str12 + str13;
                      closure_0 = sum;
                      _RegExp3 = RegExp;
                      if (tmp7 instanceof RegExp) {
                        sum1 = sum + tmp7.source;
                        closure_0 = sum1;
                        sum2 = sum1;
                      } else {
                        obj3 = /[a-zA-Z][a-zA-Z0-9+-\.]*/;
                        assertResult4 = obj2.assert(obj3.test(tmp7), `${tmp11} must be a valid scheme`);
                        sum2 = sum + obj2.escapeRegex(tmp7);
                        closure_0 = sum2;
                      }
                      num2 = num2 + 1;
                      str12 = sum2;
                      str5 = sum2;
                    } while (num2 < _Buffer.scheme.length);
                  }
                }
                flag3 = false;
                if (_Buffer.allowRelative) {
                  flag3 = true;
                }
                flag = false;
                flag2 = flag3;
                str = str5;
                if (_Buffer.relativeOnly) {
                  flag4 = true;
                  c1 = true;
                  flag = true;
                  flag2 = flag3;
                  str = str5;
                }
              }
              tmp17 = str;
              if (!str) {
                tmp17 = flag2;
              }
              if (!tmp17) {
                tmp17 = flag;
              }
              if (tmp17) {
                tmp18 = closure_7;
                closure_2 = closure_7.createUriRegex(str, flag2, flag);
              }
              return this._test("uri", _Buffer, function(value, mergeResult, concatSettingsResult) {
                if (regex.test(value)) {
                  return value;
                } else {
                  const self = this;
                  if (c1) {
                    obj = { value };
                    let error = self.createError("string.uriRelativeOnly", obj, mergeResult, concatSettingsResult);
                  } else {
                    const createError = self.createError;
                    if (sum2) {
                      obj = { scheme: tmp4, value };
                      error = createError("string.uriCustomScheme", obj, mergeResult, concatSettingsResult);
                    } else {
                      obj = { value };
                      error = createError("string.uri", obj, mergeResult, concatSettingsResult);
                    }
                  }
                }
              });
            }
            isoDate() {
              return this._test("isoDate", undefined, function(value, mergeResult, concatSettingsResult) {
                let error = value;
                if (!closure_1_6._isIsoDate(value)) {
                  const self = this;
                  obj = { value };
                  const self2 = this;
                  error = this.createError("string.isoDate", obj, mergeResult, concatSettingsResult);
                }
                return error;
              });
            }
            guid(arg0) {
              closure_0 = { "{": "}", "[": "]", "(": ")", "": "" };
              obj = { uuidv1: "1", uuidv2: "2", uuidv3: "3", uuidv4: "4", uuidv5: "5" };
              closure_1 = obj;
              items = [];
              closure_2 = items;
              if (_Buffer) {
                if (_Buffer.version) {
                  tmp = globalThis;
                  _Array = Array;
                  if (!Array.isArray(_Buffer.version)) {
                    items1 = [];
                    items1[0] = _Buffer.version;
                    _Buffer.version = items1;
                  }
                  tmp2 = closure_3;
                  num = 1;
                  str = "version must have at least 1 valid version specified";
                  assertResult = closure_3.assert(_Buffer.version.length >= 1, "version must have at least 1 valid version specified");
                  num2 = 0;
                  str2 = "version at position ";
                  str3 = " must be a string";
                  str4 = ", ";
                  str5 = " must be one of ";
                  str6 = " must not be a duplicate.";
                  num3 = -1;
                  if (0 < _Buffer.version.length) {
                    do {
                      str7 = _Buffer.version[num2];
                      tmp4 = closure_3;
                      text = `version at position ${num2}`;
                      assertResult1 = closure_3.assert(typeof str7 === "string", `version at position ${num2}` + " must be a string");
                      formatted = str7.toLowerCase();
                      _Object = Object;
                      keys = Object.keys(obj);
                      assertResult2 = closure_3.assert(obj[formatted], `version at position ${num2}` + " must be one of " + keys.join(", "));
                      assertResult3 = closure_3.assert(-1 === items.indexOf(formatted), `version at position ${num2}` + " must not be a duplicate.");
                      arr = items.push(formatted);
                      num2 = num2 + 1;
                      length = _Buffer.version.length;
                    } while (num2 < length);
                  }
                }
              }
              re3 = /^([\[{\(]?)([0-9A-F]{8})([:-]?)([0-9A-F]{4})([:-]?)([0-9A-F]{4})([:-]?)([0-9A-F]{4})([:-]?)([0-9A-F]{12})([\]}\)]?)$/i;
              return this._test("guid", _Buffer, function(value, mergeResult, concatSettingsResult) {
                const self = this;
                const match = regex.exec(value);
                if (match) {
                  if (match[match[1]] !== match[11]) {
                    obj = { value };
                    return self.createError("string.guid", obj, mergeResult, concatSettingsResult);
                  } else {
                    if (match[3] === match[5]) {
                      if (match[3] === match[7]) {
                        if (match[3] === match[9]) {
                          obj1 = items;
                          if (items.length) {
                            if (obj1.some((item) => match[6][0] === obj[item])) {
                              const obj3 = /[89AB]/i;
                            }
                            obj = { value };
                            return self.createError("string.guid", obj, mergeResult, concatSettingsResult);
                          }
                          return value;
                        }
                      }
                    }
                    obj1 = { value };
                    return self.createError("string.guid", obj1, mergeResult, concatSettingsResult);
                  }
                } else {
                  obj = { value };
                  return self.createError("string.guid", obj, mergeResult, concatSettingsResult);
                }
              });
            }
            hex() {
              tmp = /^[a-f0-9]+$/i;
              re0 = tmp;
              return this._test("hex", tmp, function(value, mergeResult, concatSettingsResult) {
                let error = value;
                if (!re0.test(value)) {
                  const self = this;
                  obj = { value };
                  const self2 = this;
                  error = this.createError("string.hex", obj, mergeResult, concatSettingsResult);
                }
                return error;
              });
            }
            base64() {
              tmp = /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;
              re0 = tmp;
              return this._test("base64", tmp, function(value, mergeResult, concatSettingsResult) {
                let error = value;
                if (!re0.test(value)) {
                  const self = this;
                  obj = { value };
                  const self2 = this;
                  error = this.createError("string.base64", obj, mergeResult, concatSettingsResult);
                }
                return error;
              });
            }
            hostname() {
              re0 = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;
              return this._test("hostname", undefined, function(value, mergeResult, concatSettingsResult) {
                if (value.length > 255) {
                  let error = value;
                  if (!iPv6.isIPv6(value)) {
                    const self = this;
                    obj = { value };
                    const self2 = this;
                    error = this.createError("string.hostname", obj, mergeResult, concatSettingsResult);
                  }
                } else {
                  error = value;
                }
                return error;
              });
            }
            lowercase() {
              _testResult = this._test("lowercase", undefined, function(toLocaleLowerCase, mergeResult, convert) {
                let error = toLocaleLowerCase;
                if (!convert.convert) {
                  error = toLocaleLowerCase;
                  if (toLocaleLowerCase !== toLocaleLowerCase.toLocaleLowerCase()) {
                    const self = this;
                    obj = { value: toLocaleLowerCase };
                    const self2 = this;
                    error = this.createError("string.lowercase", obj, mergeResult, convert);
                  }
                }
                return error;
              });
              _testResult._flags.case = "lower";
              return _testResult;
            }
            uppercase() {
              _testResult = this._test("uppercase", undefined, function(toLocaleUpperCase, mergeResult, convert) {
                let error = toLocaleUpperCase;
                if (!convert.convert) {
                  error = toLocaleUpperCase;
                  if (toLocaleUpperCase !== toLocaleUpperCase.toLocaleUpperCase()) {
                    const self = this;
                    obj = { value: toLocaleUpperCase };
                    const self2 = this;
                    error = this.createError("string.uppercase", obj, mergeResult, convert);
                  }
                }
                return error;
              });
              _testResult._flags.case = "upper";
              return _testResult;
            }
            trim() {
              _testResult = this._test("trim", undefined, function(value, mergeResult, convert) {
                let error = value;
                if (!convert.convert) {
                  error = value;
                  if (value !== value.trim()) {
                    const self = this;
                    obj = { value };
                    const self2 = this;
                    error = this.createError("string.trim", obj, mergeResult, convert);
                  }
                }
                return error;
              });
              _testResult._flags.trim = true;
              return _testResult;
            }
            replace(arg0, arg1) {
              regExp = _Buffer;
              if (typeof _Buffer === "string") {
                tmp6 = globalThis;
                _RegExp = RegExp;
                tmp7 = closure_3;
                tmp8 = new.target;
                str = "g";
                tmp9 = new.target;
                regExp = new RegExp(closure_3.escapeRegex(_Buffer), "g");
              }
              assertResult = closure_3.assert(regExp instanceof RegExp, "pattern must be a RegExp");
              assertResult1 = closure_3.assert(typeof arg1 === "string", "replacement must be a String");
              cloneResult = this.clone();
              if (!cloneResult._inner.replacements) {
                cloneResult._inner.replacements = [];
              }
              replacements = cloneResult._inner.replacements;
              obj = { pattern: regExp, replacement: arg1 };
              arr = replacements.push(obj);
              return cloneResult;
            }
            truncate(arg0) {
              cloneResult = this.clone();
              tmp2 = undefined === _Buffer;
              if (!tmp2) {
                tmp2 = _Buffer;
              }
              cloneResult._flags.truncate = tmp2;
              return cloneResult;
            }
          }
          if (typeof tmp2 !== "function") {
            if (null !== tmp2) {
              let _TypeError = TypeError;
              let typeError = new TypeError("Super expression must either be null or a function, not " + typeof tmp2);
              throw typeError;
            }
          }
          let prototype = tmp2;
          if (tmp2) {
            prototype = tmp2.prototype;
          }
          obj = { constructor: null };
          obj1 = { value: _class, enumerable: false, writable: true, configurable: true };
          obj.constructor = obj1;
          _class.prototype = Object.create(prototype, obj);
          if (tmp2) {
            let _Object = Object;
            let _Object2 = Object;
            if (Object.setPrototypeOf) {
              _Object2.setPrototypeOf(_class, tmp2);
            } else {
              const ownPropertyNames = _Object2.getOwnPropertyNames(tmp2);
              for (let num9 = 0; num9 < ownPropertyNames.length; num9 = num9 + 1) {
                let tmp3 = ownPropertyNames[num9];
                let _Object3 = Object;
                let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(tmp2, tmp3);
                let configurable = ownPropertyDescriptor;
                if (ownPropertyDescriptor) {
                  configurable = ownPropertyDescriptor.configurable;
                }
                if (configurable) {
                  configurable = undefined === _class[tmp3];
                }
                if (configurable) {
                  let _Object4 = Object;
                  let definePropertyResult = Object.defineProperty(_class, tmp3, ownPropertyDescriptor);
                }
              }
            }
          }
          obj.String = _class;
          obj.compare = (arg0, arg1) => {
            let encoding = arg0;
            closure_1 = arg1;
            return function(length, encoding) {
              encoding = length;
              const isRefResult = ref.isRef(length);
              closure_2 = isRefResult;
              let isIntegerResult = closure_1_3.isInteger(length);
              if (isIntegerResult) {
                isIntegerResult = length >= 0;
              }
              if (!isIntegerResult) {
                isIntegerResult = isRefResult;
              }
              closure_1_3.assert(isIntegerResult, "limit must be a positive integer or reference");
              let isEncodingResult = !encoding;
              if (encoding) {
                isEncodingResult = encoding.isEncoding(encoding);
              }
              closure_1_3.assert(isEncodingResult, "Invalid encoding:", encoding);
              return this._test(encoding, length, () => { ... });
            };
          };
          obj.String.prototype.min = obj.compare("min", (arg0, arg1, arg2) => {
            if (arg2) {
              let length = closure_0.byteLength(arg0, arg2);
            } else {
              length = arg0.length;
            }
            return length >= arg1;
          });
          obj.String.prototype.max = obj.compare("max", (arg0, arg1, arg2) => {
            if (arg2) {
              let length = closure_0.byteLength(arg0, arg2);
            } else {
              length = arg0.length;
            }
            return length <= arg1;
          });
          obj.String.prototype.length = obj.compare("length", (arg0, arg1, arg2) => {
            if (arg2) {
              let length = closure_0.byteLength(arg0, arg2);
            } else {
              length = arg0.length;
            }
            return length === arg1;
          });
          obj.String.prototype.uuid = obj.String.prototype.guid;
          const string = new obj.String();
          closure_0.exports = string;
        }
        fn = (arg0) => {
          if (arg0) {
            const _Symbol = Symbol;
            if (typeof Symbol === "function") {
              const _Symbol3 = Symbol;
              if (arg0.constructor === Symbol) {
                const _Symbol2 = Symbol;
                let str = "symbol";
              }
              return str;
            }
          }
          str = typeof arg0;
        };
      };
      let call = fn.call;
      const _Buffer = fn(3).Buffer;
      if (typeof call === "unknown") {
        fn(_Buffer);
      } else {
        call(arg1, _Buffer);
      }
    },
    (arg0, arg1, fn) => {
      closure_0 = arg1;
      closure_1 = fn;
      fn = (nextTick) => {
        if (typeof Symbol === "function") {
          let _Symbol = Symbol;
          if (typeof Symbol.iterator === "symbol") {
            fn = (arg0) => typeof arg0;
          }
          let array = fn;
          closure_1 = closure_1(8);
          obj = { hasOwn: null, indexOf: null, defaultThreshold: 16, maxIPv6Groups: 8, categories: null, diagnoses: null, components: null };
          const _Object = Object;
          obj.hasOwn = Object.prototype.hasOwnProperty;
          const _Array = Array;
          obj.indexOf = Array.prototype.indexOf;
          obj.categories = { valid: 1, dnsWarn: 7, rfc5321: 15, cfws: 31, deprecated: 63, rfc5322: 127, error: 255 };
          obj.diagnoses = { valid: 0, dnsWarnNoMXRecord: 5, dnsWarnNoRecord: 6, rfc5321TLD: 9, rfc5321TLDNumeric: 10, rfc5321QuotedString: 11, rfc5321AddressLiteral: 12, cfwsComment: 17, cfwsFWS: 18, deprecatedLocalPart: 33, deprecatedFWS: 34, deprecatedQTEXT: 35, deprecatedQP: 36, deprecatedComment: 37, deprecatedCTEXT: 38, deprecatedIPv6: 39, deprecatedCFWSNearAt: 49, rfc5322Domain: 65, rfc5322TooLong: 66, rfc5322LocalTooLong: 67, rfc5322DomainTooLong: 68, rfc5322LabelTooLong: 69, rfc5322DomainLiteral: 70, rfc5322DomainLiteralOBSDText: 71, rfc5322IPv6GroupCount: 72, rfc5322IPv62x2xColon: 73, rfc5322IPv6BadCharacter: 74, rfc5322IPv6MaxGroups: 75, rfc5322IPv6ColonStart: 76, rfc5322IPv6ColonEnd: 77, errExpectingDTEXT: 129, errNoLocalPart: 130, errNoDomain: 131, errConsecutiveDots: 132, errATEXTAfterCFWS: 133, errATEXTAfterQS: 134, errATEXTAfterDomainLiteral: 135, errExpectingQPair: 136, errExpectingATEXT: 137, errExpectingQTEXT: 138, errExpectingCTEXT: 139, errBackslashEnd: 140, errDotStart: 141, errDotEnd: 142, errDomainHyphenStart: 143, errDomainHyphenEnd: 144, errUnclosedQuotedString: 145, errUnclosedComment: 146, errUnclosedDomainLiteral: 147, errFWSCRLFx2: 148, errFWSCRLFEnd: 149, errCRNoLF: 150, errUnknownTLD: 160, errDomainTooShort: 161 };
          obj.components = { localpart: 0, domain: 1, literal: 2, contextComment: 3, contextFWS: 4, contextQuotedString: 5, contextQuotedPair: 6 };
          if (undefined !== nextTick) {
            if (nextTick) {
              obj.defer = fn2;
              const _Array2 = Array;
              array = new Array(256);
            }
            nextTick = nextTick.nextTick;
            fn2 = nextTick.bind(nextTick);
          }
          fn2 = (arg0) => setTimeout(arg0, 0);
        }
        fn = (arg0) => {
          if (arg0) {
            const _Symbol = Symbol;
            if (typeof Symbol === "function") {
              const _Symbol3 = Symbol;
              if (arg0.constructor === Symbol) {
                const _Symbol2 = Symbol;
                let str = "symbol";
              }
              return str;
            }
          }
          str = typeof arg0;
        };
      };
      const call = fn.call;
      const tmp = fn(7);
      if (typeof call === "unknown") {
        fn(tmp);
      } else {
        call(arg1, tmp);
      }
    },
    (arg0, arg1, fn) => {
      let scheme = fn(24);
      const exports = {
        createUriRegex(arg0, flag2, flag) {
          scheme = scheme.scheme;
          if (flag) {
            let text = `${"(?:" + tmp.relativeRef})`;
          } else {
            if (arg0) {
              scheme = `${"(?:" + arg0})`;
            }
            const text1 = `${"(?:" + scheme + ":" + tmp.hierPart})`;
            text = text1;
            if (flag2) {
              const _HermesInternal = HermesInternal;
              text = `${"(?:" + `${"(?:" + scheme + ":" + tmp.hierPart})` + "|" + tmp.relativeRef})`;
            }
          }
          const regExp = new RegExp("^" + text + "(?:\\?" + tmp.query + ")?(?:#" + tmp.fragment + ")?$");
          return regExp;
        }
      };
      module.exports = exports;
    },
    (arg0, arg1) => {
      obj = {
        rfc3986: {},
        generate() {
          obj.rfc3986.cidr = "[0-9]|[1-2][0-9]|3[0-2]";
          obj.rfc3986.IPv4address = "(?:(?:0?0?[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\\.){3}(?:0?0?[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
          const text = `${"(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|" + obj.rfc3986.IPv4address})`;
          obj.rfc3986.IPv6address = "(?:(?:[0-9A-Fa-f]{1,4}:){6}" + `${"(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|" + obj.rfc3986.IPv4address})` + "|::(?:[0-9A-Fa-f]{1,4}:){5}" + `${"(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|" + obj.rfc3986.IPv4address})` + "|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}" + `${"(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|" + obj.rfc3986.IPv4address})` + "|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}" + `${"(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|" + obj.rfc3986.IPv4address})` + "|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}" + `${"(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|" + obj.rfc3986.IPv4address})` + "|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:" + `${"(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|" + obj.rfc3986.IPv4address})` + "|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::" + `${"(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|" + obj.rfc3986.IPv4address})` + "|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)";
          obj.rfc3986.IPvFuture = "v[0-9A-Fa-f]+\\.[a-zA-Z0-9-\\._~!\\$&'\\(\\)\\*\\+,;=:]+";
          obj.rfc3986.scheme = "[a-zA-Z][a-zA-Z0-9+-\\.]*";
          const combined = "(?:[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:]*@)?" + "(?:" + `\\[(?:${obj.rfc3986.IPv6address}|${obj.rfc3986.IPvFuture}` + ")\\]|" + obj.rfc3986.IPv4address + "|[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=]{0,255})(?::[0-9]*)?";
          obj.rfc3986.hierPart = "(?:(?:\\/\\/" + combined + "(?:\\/[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*)|\\/(?:[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]+(?:\\/[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*)?|[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]+(?:\\/[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*)";
          obj.rfc3986.relativeRef = "(?:(?:\\/\\/" + combined + "(?:\\/[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*)|\\/(?:[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]+(?:\\/[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*)?|[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=@]+(?:\\/[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*|)";
          obj.rfc3986.query = "[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@\\/\\?]*(?=#|$)";
          obj.rfc3986.fragment = "[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@\\/\\?]*";
        }
      };
      obj.generate();
      arg0.exports = obj.rfc3986;
    },
    (arg0, arg1, fn) => {
      const tmp = fn(24);
      let Ip = { Ip: null };
      Ip = { cidrs: null, versions: { ipv4: tmp.IPv4address, ipv6: tmp.IPv6address, ipvfuture: tmp.IPvFuture } };
      Ip = { required: `\\/(?:${tmp.cidr})`, optional: `(?:\\/(?:${tmp.cidr}))?`, forbidden: "" };
      Ip.cidrs = Ip;
      Ip.Ip = Ip;
      Ip.Ip.createIpRegex = (arg0, arg1) => {
        let num = 0;
        let tmp2;
        if (0 < arg0.length) {
          do {
            let tmp3 = arg0[num];
            let text = text1;
            if (!text1) {
              text = `^(?:${obj.Ip.versions[tmp3]}`;
            }
            text1 = `${tmp5}|${obj.Ip.versions[tmp3]}`;
            num = num + 1;
            tmp2 = text1;
          } while (num < arg0.length);
        }
        const regExp = new RegExp(tmp2 + ")" + obj.Ip.cidrs[arg1] + "$");
        return regExp;
      };
      module.exports = Ip.Ip;
    },
    (arg0, arg1, fn) => {
      const tmp = fn(14);
      fn(15);
      let _class = fn(2);
      obj = { precisionRx: /(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/ };
      items = tmp;
      class _class {
        constructor() {
          self = this;
          if (this instanceof _class) {
            tmp6 = closure_0;
            call = closure_0.call;
            tmp7 = typeof call === "unknown" ? tmp6() : call(self);
            if (self) {
              tmp13 = self;
              if (tmp7) {
                if (typeof tmp7 === "object") {
                  tmp13 = tmp7;
                } else {
                  tmp13 = self;
                }
              }
              str3 = "number";
              tmp13._type = "number";
              _invalids = tmp13._invalids;
              num = Infinity;
              addResult = _invalids.add(Infinity);
              _invalids2 = tmp13._invalids;
              num2 = -Infinity;
              addResult1 = _invalids2.add(-Infinity);
              return tmp13;
            } else {
              tmp8 = globalThis;
              _ReferenceError = ReferenceError;
              tmp9 = new.target;
              str2 = "this hasn't been initialised - super() hasn't been called";
              tmp10 = new.target;
              referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
              tmp12 = referenceError;
              throw referenceError;
            }
          } else {
            tmp = globalThis;
            _TypeError = TypeError;
            tmp2 = new.target;
            str = "Cannot call a class as a function";
            tmp3 = new.target;
            typeError = new TypeError("Cannot call a class as a function");
            tmp5 = typeError;
            throw typeError;
          }
        }
        _base(arg0, arg1, arg2) {
          obj = { errors: null, value: module };
          if (typeof module === "string") {
            if (fn.convert) {
              tmp = globalThis;
              _parseFloat = parseFloat;
              parsed = parseFloat(module);
              _isNaN = isNaN;
              num = NaN;
              num2 = NaN;
              if (!isNaN(parsed)) {
                _isFinite = isFinite;
                num2 = NaN;
                if (isFinite(module)) {
                  num2 = parsed;
                }
              }
              obj.value = num2;
            }
          }
          value = obj.value;
          tmp3 = typeof value === "number";
          if (typeof value === "number") {
            tmp11 = globalThis;
            _isNaN2 = isNaN;
            tmp3 = !isNaN(obj.value);
          }
          self = this;
          if (fn.convert) {
            str = "precision";
            if ("precision" in self._flags) {
              if (tmp3) {
                tmp4 = globalThis;
                _Math = Math;
                num3 = 10;
                powResult = Math.pow(10, self._flags.precision);
                _Math2 = Math;
                obj.value = Math.round(obj.value * powResult) / powResult;
              }
            }
          }
          error = null;
          if (!tmp3) {
            tmp7 = exports;
            str2 = "number.base";
            tmp8 = self;
            tmp9 = null;
            tmp10 = fn;
            error = self.createError("number.base", null, exports, fn);
          }
          obj.errors = error;
          return obj;
        }
        multiple(arg0) {
          closure_0 = module;
          isRefResult = closure_0.isRef(module);
          closure_1 = isRefResult;
          if (!isRefResult) {
            obj = _class;
            isFiniteResult = typeof module === "number";
            if (typeof module === "number") {
              tmp5 = globalThis;
              _isFinite = isFinite;
              isFiniteResult = isFinite(module);
            }
            str = "multiple must be a number";
            assertResult = _class.assert(isFiniteResult, "multiple must be a number");
            num = 0;
            str2 = "multiple must be greater than 0";
            assertResult1 = obj.assert(module > 0, "multiple must be greater than 0");
          }
          return this._test("multiple", module, function(value, reference, concatSettingsResult) {
            if (isRefResult) {
              let tmp2Result = toDateResult(reference.reference || reference.parent, concatSettingsResult);
              let tmp3 = toDateResult;
              const tmp5 = reference.reference || reference.parent;
            } else {
              tmp3 = toDateResult;
              tmp2Result = toDateResult;
            }
            const self = this;
            if (!isRefResult) {
              let error = value;
              if (value % tmp2Result != 0) {
                obj = { multiple: tmp3, value };
                error = self.createError("number.multiple", obj, reference, concatSettingsResult);
              }
              let error1 = error;
            } else {
              if (typeof tmp2Result === "number") {
                const _isFinite = isFinite;
              }
              obj = { ref: tmp3.key };
              error1 = self.createError("number.ref", obj, reference, concatSettingsResult);
            }
            return error1;
          });
        }
        integer() {
          return this._test("integer", undefined, function(value, mergeResult, concatSettingsResult) {
            let error = value;
            if (!integer.isInteger(value)) {
              const self = this;
              obj = { value };
              const self2 = this;
              error = this.createError("number.integer", obj, mergeResult, concatSettingsResult);
            }
            return error;
          });
        }
        negative() {
          return this._test("negative", undefined, function(value, mergeResult, concatSettingsResult) {
            let error = value;
            if (value >= 0) {
              const self = this;
              obj = { value };
              const self2 = this;
              error = this.createError("number.negative", obj, mergeResult, concatSettingsResult);
            }
            return error;
          });
        }
        positive() {
          return this._test("positive", undefined, function(value, mergeResult, concatSettingsResult) {
            let error = value;
            if (value <= 0) {
              const self = this;
              obj = { value };
              const self2 = this;
              error = this.createError("number.positive", obj, mergeResult, concatSettingsResult);
            }
            return error;
          });
        }
        precision(arg0) {
          closure_0 = module;
          assertResult = _class.assert(_class.isInteger(module), "limit must be an integer");
          assertResult1 = _class.assert(!("precision" in this._flags), "precision already set");
          _testResult = this._test("precision", module, function(value, mergeResult, concatSettingsResult) {
            const match = value.toString().match(obj.precisionRx);
            let num = 0;
            if (match[1]) {
              num = match[1].length;
            }
            let num2 = 0;
            if (match[2]) {
              const _parseInt = parseInt;
              num2 = parseInt(match[2], 10);
            }
            let error = value;
            if (Math.max(num - num2, 0) > closure_0) {
              const self = this;
              obj = { limit: tmp2, value };
              const self2 = this;
              error = this.createError("number.precision", obj, mergeResult, concatSettingsResult);
            }
            return error;
          });
          _testResult._flags.precision = module;
          return _testResult;
        }
      }
      if (typeof tmp !== "function") {
        if (null !== tmp) {
          let _TypeError = TypeError;
          let typeError = new TypeError("Super expression must either be null or a function, not " + typeof tmp);
          throw typeError;
        }
      }
      let prototype = tmp;
      if (tmp) {
        prototype = tmp.prototype;
      }
      obj = { constructor: { value: _class, enumerable: false, writable: true, configurable: true } };
      _class.prototype = Object.create(prototype, obj);
      if (tmp) {
        const _Object = Object;
        const _Object2 = Object;
        if (Object.setPrototypeOf) {
          _Object2.setPrototypeOf(_class, tmp);
        } else {
          const ownPropertyNames = _Object2.getOwnPropertyNames(tmp);
          for (let num = 0; num < ownPropertyNames.length; num = num + 1) {
            let tmp2 = ownPropertyNames[num];
            let _Object3 = Object;
            let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(tmp, tmp2);
            let configurable = ownPropertyDescriptor;
            if (ownPropertyDescriptor) {
              configurable = ownPropertyDescriptor.configurable;
            }
            if (configurable) {
              configurable = undefined === _class[tmp2];
            }
            if (configurable) {
              let _Object4 = Object;
              let definePropertyResult = Object.defineProperty(_class, tmp2, ownPropertyDescriptor);
            }
          }
        }
      }
      obj.Number = _class;
      obj.compare = (arg0, arg1) => {
        closure_1 = arg1;
        return function(length) {
          const isRefResult = ref.isRef(length);
          let tmp2 = typeof length === "number";
          if (typeof length === "number") {
            let _isNaN = isNaN;
            tmp2 = !isNaN(length);
          }
          if (!tmp2) {
            tmp2 = isRefResult;
          }
          isRefResult.assert(tmp2, "limit must be a number or reference");
          return this._test(length, length, function(value, reference, concatSettingsResult) {
            const self = this;
            if (isRefResult) {
              const tmpResult = length(reference.reference || reference.parent, concatSettingsResult);
              if (typeof tmpResult === "number") {
                const _isNaN = isNaN;
                let tmp2 = tmpResult;
              }
              obj = { ref: length.key };
              return self.createError("number.ref", obj, reference, concatSettingsResult);
            } else {
              tmp2 = length;
            }
            let error = value;
            if (!isRefResult(value, tmp2)) {
              obj = { limit: tmp2, value };
              error = self.createError(`number.${closure_0}`, obj, reference, concatSettingsResult);
            }
            return error;
          });
        };
      };
      obj.Number.prototype.min = obj.compare("min", (arg0, arg1) => arg0 >= arg1);
      obj.Number.prototype.max = obj.compare("max", (arg0, arg1) => arg0 <= arg1);
      obj.Number.prototype.greater = obj.compare("greater", (arg0, arg1) => arg0 > arg1);
      obj.Number.prototype.less = obj.compare("less", (arg0, arg1) => arg0 < arg1);
      const number = new obj.Number();
      module.exports = number;
    },
    (arg0, arg1, fn) => {
      let tmp = fn(14);
      const _class = fn(2);
      obj = { Set: fn(18) };
      items = tmp;
      class _class {
        constructor() {
          self = this;
          if (this instanceof _class) {
            tmp6 = closure_0;
            call = closure_0.call;
            tmp7 = typeof call === "unknown" ? tmp6() : call(self);
            if (self) {
              tmp13 = self;
              if (tmp7) {
                if (typeof tmp7 === "object") {
                  tmp13 = tmp7;
                } else {
                  tmp13 = self;
                }
              }
              str3 = "boolean";
              tmp13._type = "boolean";
              flag = true;
              tmp13._flags.insensitive = true;
              tmp14 = __webpack_require__;
              tmp15 = new.target;
              tmp16 = new.target;
              set = new __webpack_require__.Set();
              tmp18 = set;
              tmp13._inner.truthySet = set;
              tmp19 = new.target;
              tmp20 = new.target;
              set1 = new __webpack_require__.Set();
              tmp22 = set1;
              tmp13._inner.falsySet = set1;
              return tmp13;
            } else {
              tmp8 = globalThis;
              _ReferenceError = ReferenceError;
              tmp9 = new.target;
              str2 = "this hasn't been initialised - super() hasn't been called";
              tmp10 = new.target;
              referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
              tmp12 = referenceError;
              throw referenceError;
            }
          } else {
            tmp = globalThis;
            _TypeError = TypeError;
            tmp2 = new.target;
            str = "Cannot call a class as a function";
            tmp3 = new.target;
            typeError = new TypeError("Cannot call a class as a function");
            tmp5 = typeError;
            throw typeError;
          }
        }
        _base(arg0, arg1, arg2) {
          self = this;
          obj = { value: module };
          truthySet = this._inner.truthySet;
          tmp = truthySet.has(module, null, null, this._flags.insensitive);
          if (!tmp) {
            falsySet = self._inner.falsySet;
            tmp2 = falsySet;
            tmp3 = module;
            tmp4 = null;
            tmp5 = null;
            hasItem = falsySet.has(module, null, null, self._flags.insensitive);
            tmp7 = !hasItem;
            if (!hasItem) {
              tmp7 = module;
            }
            tmp = tmp7;
          }
          obj.value = tmp;
          error = null;
          if (typeof obj.value !== "boolean") {
            tmp9 = exports;
            tmp10 = fn;
            str = "boolean.base";
            tmp11 = self;
            tmp12 = null;
            error = self.createError("boolean.base", null, exports, fn);
          }
          obj.errors = error;
          return obj;
        }
        truthy() {
          cloneResult = this.clone();
          slice = Array.prototype.slice;
          call = slice.call;
          tmp2 = _class;
          if (typeof call === "unknown") {
            tmp3 = arguments;
            substr = slice();
          } else {
            tmp9 = arguments;
            tmp10 = arguments;
            substr = call(arguments);
          }
          flattenResult = _class.flatten(substr);
          num = 0;
          if (0 < flattenResult.length) {
            do {
              tmp5 = flattenResult[num];
              tmp6 = _class;
              assertResult = _class.assert(undefined !== tmp5, "Cannot call truthy with undefined");
              truthySet = cloneResult._inner.truthySet;
              addResult = truthySet.add(tmp5);
              num = num + 1;
              length = flattenResult.length;
            } while (num < length);
          }
          return cloneResult;
        }
        falsy() {
          cloneResult = this.clone();
          slice = Array.prototype.slice;
          call = slice.call;
          tmp2 = _class;
          if (typeof call === "unknown") {
            tmp3 = arguments;
            substr = slice();
          } else {
            tmp9 = arguments;
            tmp10 = arguments;
            substr = call(arguments);
          }
          flattenResult = _class.flatten(substr);
          num = 0;
          if (0 < flattenResult.length) {
            do {
              tmp5 = flattenResult[num];
              tmp6 = _class;
              assertResult = _class.assert(undefined !== tmp5, "Cannot call falsy with undefined");
              falsySet = cloneResult._inner.falsySet;
              addResult = falsySet.add(tmp5);
              num = num + 1;
              length = flattenResult.length;
            } while (num < length);
          }
          return cloneResult;
        }
        insensitive(arg0) {
          tmp = undefined === module || module;
          self = this;
          if (tmp !== this._flags.insensitive) {
            cloneResult = self.clone();
            cloneResult._flags.insensitive = tmp;
            return cloneResult;
          } else {
            return self;
          }
        }
        describe() {
          self = this;
          describe = closure_0.prototype.describe;
          call = describe.call;
          tmp = typeof call === "unknown" ? describe() : call(self);
          items = [];
          items[0] = true;
          truthySet = self._inner.truthySet;
          tmp.truthy = items.concat(truthySet.values());
          items1 = [];
          items1[0] = false;
          falsySet = self._inner.falsySet;
          tmp.falsy = items1.concat(falsySet.values());
          return tmp;
        }
      }
      if (typeof tmp !== "function") {
        if (null !== tmp) {
          let _TypeError = TypeError;
          let typeError = new TypeError("Super expression must either be null or a function, not " + typeof tmp);
          throw typeError;
        }
      }
      let prototype = tmp;
      if (tmp) {
        prototype = tmp.prototype;
      }
      obj = { constructor: { value: _class, enumerable: false, writable: true, configurable: true } };
      _class.prototype = Object.create(prototype, obj);
      if (tmp) {
        const _Object = Object;
        const _Object2 = Object;
        if (Object.setPrototypeOf) {
          _Object2.setPrototypeOf(_class, tmp);
        } else {
          const ownPropertyNames = _Object2.getOwnPropertyNames(tmp);
          for (let num = 0; num < ownPropertyNames.length; num = num + 1) {
            let tmp2 = ownPropertyNames[num];
            let _Object3 = Object;
            let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(tmp, tmp2);
            let configurable = ownPropertyDescriptor;
            if (ownPropertyDescriptor) {
              configurable = ownPropertyDescriptor.configurable;
            }
            if (configurable) {
              configurable = undefined === _class[tmp2];
            }
            if (configurable) {
              let _Object4 = Object;
              let definePropertyResult = Object.defineProperty(_class, tmp2, ownPropertyDescriptor);
            }
          }
        }
      }
      obj.Boolean = _class;
      const boolean = new obj.Boolean();
      module.exports = boolean;
    },
    (arg0, arg1, fn) => {
      if (typeof Symbol === "function") {
        let _Symbol = Symbol;
        if (typeof Symbol.iterator === "symbol") {
          fn = (arg0) => typeof arg0;
        }
        const _class = fn(2);
        let tmp2 = fn(14);
        closure_2 = tmp2;
        closure_3 = fn(19);
        fn(15);
        items = tmp2;
        class _class {
          constructor() {
            self = this;
            if (this instanceof _class) {
              tmp6 = closure_0;
              call = closure_0.call;
              tmp7 = typeof call === "unknown" ? tmp6() : call(self);
              if (self) {
                tmp13 = self;
                if (tmp7) {
                  if (typeof tmp7 === "object") {
                    tmp13 = tmp7;
                  } else {
                    tmp13 = self;
                  }
                }
                str3 = "alternatives";
                tmp13._type = "alternatives";
                _invalids = tmp13._invalids;
                tmp14 = null;
                removeResult = _invalids.remove(null);
                tmp13._inner.matches = [];
                return tmp13;
              } else {
                tmp8 = globalThis;
                _ReferenceError = ReferenceError;
                tmp9 = new.target;
                str2 = "this hasn't been initialised - super() hasn't been called";
                tmp10 = new.target;
                referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                tmp12 = referenceError;
                throw referenceError;
              }
            } else {
              tmp = globalThis;
              _TypeError = TypeError;
              tmp2 = new.target;
              str = "Cannot call a class as a function";
              tmp3 = new.target;
              typeError = new TypeError("Cannot call a class as a function");
              tmp5 = typeError;
              throw typeError;
            }
          }
          _base(arg0, arg1, arg2) {
            self = this;
            length = this._inner.matches.length;
            obj = this._settings && self._settings.baseType;
            items = [];
            num = 0;
            error = items;
            if (0 < length) {
              while (true) {
                promise = self._inner.matches[num];
                schema = promise.schema;
                tmp = num;
                tmp2 = items;
                if (schema) {
                  _validateResult = schema._validate(module, exports, fn);
                  if (_validateResult.errors) {
                    combined = items.concat(_validateResult.errors);
                  } else {
                    return _validateResult;
                  }
                } else {
                  is = promise.is;
                  parent = exports.reference;
                  if (!parent) {
                    parent = exports.parent;
                  }
                  tmp3 = is;
                  tmp4 = null;
                  tmp5 = fn;
                  if (is._validate(promise.ref(parent, fn), null, fn, exports.parent).errors) {
                    if (promise.otherwise) {
                      otherwise = promise.otherwise;
                      return otherwise._validate(module, exports, fn);
                    } else {
                      combined = items;
                      if (obj) {
                        combined = items;
                        if (num === length - 1) {
                          return obj._validate(module, exports, fn);
                        }
                      }
                    }
                  } else if (promise.then) {
                    break;
                  } else {
                    combined = items;
                    if (obj) {
                      break;
                    }
                  }
                }
                num = num + 1;
                items = combined;
                error = combined;
              }
              obj2 = promise.then || obj;
              return obj2._validate(module, exports, fn);
            }
            if (!error.length) {
              str = "alternatives.base";
              tmp8 = self;
              tmp9 = null;
              tmp10 = exports;
              tmp11 = fn;
              error = self.createError("alternatives.base", null, exports, fn);
            }
            return { errors: error };
          }
          try() {
            obj = _class;
            slice = Array.prototype.slice;
            call = slice.call;
            if (typeof call === "unknown") {
              tmp = arguments;
              substr = slice();
            } else {
              tmp9 = arguments;
              tmp10 = arguments;
              substr = call(arguments);
            }
            flattenResult = _class.flatten(substr);
            assertResult = obj.assert(flattenResult.length, "Cannot add other alternatives without at least one schema");
            cloneResult = this.clone();
            for (let num = 0; num < flattenResult.length; num = num + 1) {
              tmp5 = closure_3;
              schemaResult = closure_3.schema(flattenResult[num]);
              tmp7 = num;
              if (schemaResult._refs.length) {
                _refs = cloneResult._refs;
                cloneResult._refs = _refs.concat(schemaResult._refs);
              }
              matches = cloneResult._inner.matches;
              obj = { schema: null };
              obj.schema = schemaResult;
              arr = matches.push(obj);
            }
            return cloneResult;
          }
          when(arg0, arg1) {
            obj = _class;
            arr = closure_4;
            tmp = closure_4.isRef(module) || typeof module === "string";
            assertResult = _class.assert(tmp, "Invalid reference:", module);
            assertResult1 = obj.assert(exports, "Missing options");
            str = "undefined";
            if (undefined !== exports) {
              tmp4 = closure_0;
              str = closure_0(exports);
            }
            assertResult2 = obj.assert("object" === str, "Invalid options");
            assertResult3 = obj.assert(exports.hasOwnProperty("is"), "Missing \"is\" directive");
            tmp7 = undefined !== exports.then;
            if (!tmp7) {
              tmp7 = undefined !== exports.otherwise;
            }
            assertResult4 = obj.assert(tmp7, "options must have at least one of \"then\" or \"otherwise\"");
            cloneResult = this.clone();
            obj2 = closure_3;
            schemaResult = closure_3.schema(exports.is);
            tmp10 = null !== exports.is;
            if (tmp10) {
              isRefResult = arr.isRef(exports.is);
              if (!isRefResult) {
                tmp12 = closure_2;
                isRefResult = exports.is instanceof closure_2;
              }
              tmp10 = isRefResult;
            }
            requiredResult = schemaResult;
            if (!tmp10) {
              requiredResult = schemaResult.required();
            }
            obj = { ref: obj2.ref(module), is: requiredResult, then: null, otherwise: null };
            schemaResult1 = undefined;
            if (undefined !== exports.then) {
              schemaResult1 = obj2.schema(exports.then);
            }
            obj.then = schemaResult1;
            schemaResult2 = undefined;
            if (undefined !== exports.otherwise) {
              schemaResult2 = obj2.schema(exports.otherwise);
            }
            obj.otherwise = schemaResult2;
            tmp16 = cloneResult._settings && cloneResult._settings.baseType;
            if (tmp16) {
              then = obj.then;
              if (then) {
                baseType = cloneResult._settings.baseType;
                then = baseType.concat(obj.then);
              }
              obj.then = then;
              otherwise = obj.otherwise;
              if (otherwise) {
                baseType2 = cloneResult._settings.baseType;
                otherwise = baseType2.concat(obj.otherwise);
              }
              obj.otherwise = otherwise;
            }
            arr = arr.push(cloneResult._refs, obj.ref);
            _refs = cloneResult._refs;
            cloneResult._refs = _refs.concat(obj.is._refs);
            tmp18 = obj.then && obj.then._refs;
            if (tmp18) {
              _refs2 = cloneResult._refs;
              cloneResult._refs = _refs2.concat(obj.then._refs);
            }
            tmp19 = obj.otherwise && obj.otherwise._refs;
            if (tmp19) {
              _refs3 = cloneResult._refs;
              cloneResult._refs = _refs3.concat(obj.otherwise._refs);
            }
            matches = cloneResult._inner.matches;
            arr1 = matches.push(obj);
            return cloneResult;
          }
          describe() {
            self = this;
            describe = closure_2.prototype.describe;
            call = describe.call;
            tmp = typeof call === "unknown" ? describe() : call(self);
            items = [];
            for (let num = 0; num < self._inner.matches.length; num = num + 1) {
              promise = self._inner.matches[num];
              tmp2 = num;
              if (promise.schema) {
                schema = promise.schema;
                arr = items.push(schema.describe());
              } else {
                obj = { ref: null, is: null };
                str = promise.ref;
                obj.ref = str.toString();
                is = promise.is;
                obj.is = is.describe();
                if (promise.then) {
                  then = promise.then;
                  obj.then = then.describe();
                }
                if (promise.otherwise) {
                  otherwise = promise.otherwise;
                  obj.otherwise = otherwise.describe();
                }
                arr1 = items.push(obj);
              }
            }
            tmp.alternatives = items;
            return tmp;
          }
        }
        if (typeof tmp2 !== "function") {
          if (null !== tmp2) {
            let _TypeError = TypeError;
            let typeError = new TypeError("Super expression must either be null or a function, not " + typeof tmp2);
            throw typeError;
          }
        }
        let prototype = tmp2;
        if (tmp2) {
          prototype = tmp2.prototype;
        }
        obj = { constructor: null };
        obj = { value: _class, enumerable: false, writable: true, configurable: true };
        obj.constructor = obj;
        _class.prototype = Object.create(prototype, obj);
        if (tmp2) {
          const _Object = Object;
          const _Object2 = Object;
          if (Object.setPrototypeOf) {
            _Object2.setPrototypeOf(_class, tmp2);
          } else {
            const ownPropertyNames = _Object2.getOwnPropertyNames(tmp2);
            for (let num5 = 0; num5 < ownPropertyNames.length; num5 = num5 + 1) {
              let tmp3 = ownPropertyNames[num5];
              let _Object3 = Object;
              let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(tmp2, tmp3);
              let configurable = ownPropertyDescriptor;
              if (ownPropertyDescriptor) {
                configurable = ownPropertyDescriptor.configurable;
              }
              if (configurable) {
                configurable = undefined === _class[tmp3];
              }
              if (configurable) {
                let _Object4 = Object;
                let definePropertyResult = Object.defineProperty(_class, tmp3, ownPropertyDescriptor);
              }
            }
          }
        }
        obj = { Alternatives: _class };
        const alternatives = new obj.Alternatives();
        module.exports = alternatives;
      }
      fn = (arg0) => {
        if (arg0) {
          const _Symbol = Symbol;
          if (typeof Symbol === "function") {
            const _Symbol3 = Symbol;
            if (arg0.constructor === Symbol) {
              const _Symbol2 = Symbol;
              let str = "symbol";
            }
            return str;
          }
        }
        str = typeof arg0;
      };
    },
    (arg0, arg1, fn) => {
      if (typeof Symbol === "function") {
        let _Symbol = Symbol;
        if (typeof Symbol.iterator === "symbol") {
          fn = (arg0) => typeof arg0;
        }
        let _class = fn(2);
        closure_2 = fn(30);
        let tmp2 = fn(14);
        closure_3 = tmp2;
        const Err = fn(16);
        closure_5 = fn(19);
        closure_6 = fn(15);
        let arg = {};
        items = tmp2;
        class _class {
          constructor() {
            self = this;
            if (this instanceof _class) {
              tmp6 = closure_0;
              call = closure_0.call;
              tmp7 = typeof call === "unknown" ? tmp6() : call(self);
              if (self) {
                tmp13 = self;
                if (tmp7) {
                  if (typeof tmp7 === "object") {
                    tmp13 = tmp7;
                  } else {
                    tmp13 = self;
                  }
                }
                str3 = "object";
                tmp13._type = "object";
                tmp14 = null;
                tmp13._inner.children = null;
                tmp13._inner.renames = [];
                tmp13._inner.dependencies = [];
                tmp13._inner.patterns = [];
                return tmp13;
              } else {
                tmp8 = globalThis;
                _ReferenceError = ReferenceError;
                tmp9 = new.target;
                str2 = "this hasn't been initialised - super() hasn't been called";
                tmp10 = new.target;
                referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                tmp12 = referenceError;
                throw referenceError;
              }
            } else {
              tmp = globalThis;
              _TypeError = TypeError;
              tmp2 = new.target;
              str = "Cannot call a class as a function";
              tmp3 = new.target;
              typeError = new TypeError("Cannot call a class as a function");
              tmp5 = typeError;
              throw typeError;
            }
          }
          _base(arg0, arg1, arg2) {
            closure_0 = module;
            convert = typeof module === "string";
            if (typeof module === "string") {
              convert = fn.convert;
            }
            tmp5 = module;
            if (convert) {
              tmp6 = closure_7;
              safeParseResult = closure_7.safeParse(module);
              closure_0 = safeParseResult;
              tmp5 = safeParseResult;
            }
            self = this;
            str = "object";
            if (this._flags.func) {
              str = "function";
            }
            items = [];
            if (tmp5) {
              str2 = "undefined";
              if (undefined !== tmp5) {
                tmp8 = closure_0;
                str2 = closure_0(tmp5);
              }
              if (str2 === str) {
                tmp60 = globalThis;
                _Array = Array;
                if (!Array.isArray(tmp5)) {
                  if (!self._inner.renames.length) {
                    if (!self._inner.dependencies.length) {
                      if (!self._inner.children) {
                        if (!self._inner.patterns.length) {
                          obj = { value: null, errors: null };
                          obj.value = tmp5;
                          tmp9 = null;
                          if (items.length) {
                            tmp9 = items;
                          }
                          obj.errors = tmp9;
                          return obj;
                        }
                      }
                    }
                  }
                  tmp10 = tmp5;
                  tmp11 = tmp5;
                  if (module === tmp5) {
                    if ("object" === str) {
                      _Object = Object;
                      _Object2 = Object;
                      obj = Object.create(Object.getPrototypeOf(tmp5));
                      tmp14 = obj;
                    } else {
                      class target {
                        constructor() {
                          self = this;
                          tmp = closure_0;
                          apply = closure_0.apply;
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
                      tmp12 = _class;
                      target.prototype = _class.clone(tmp5.prototype);
                      obj = target;
                      tmp14 = target;
                    }
                    _Object3 = Object;
                    keys = Object.keys(tmp5);
                    num = 0;
                    num2 = 1;
                    tmp10 = obj;
                    tmp11 = tmp14;
                    if (0 < keys.length) {
                      class target {
                        constructor() {
                          self = this;
                          tmp = closure_0;
                          apply = closure_0.apply;
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
                    }
                  }
                  obj1 = {};
                  num3 = 0;
                  num4 = 1;
                  flag = true;
                  str3 = "object.rename.override";
                  str4 = "object.rename.multiple";
                  num5 = 0;
                  if (0 < self._inner.renames.length) {
                    class target {
                      constructor() {
                        self = this;
                        tmp = closure_0;
                        apply = closure_0.apply;
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
                    while (true) {
                      class target {
                        constructor() {
                          self = this;
                          tmp = closure_0;
                          apply = closure_0.apply;
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
                      tmp16 = num5;
                      if (!tmp15.options.ignoreUndefined) {
                        class target {
                          constructor() {
                            self = this;
                            tmp = closure_0;
                            apply = closure_0.apply;
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
                        _Object4 = Object;
                        hasOwnProperty = Object.prototype.hasOwnProperty;
                        call = hasOwnProperty.call;
                        to = tmp15.to;
                        if (typeof call === "unknown" ? hasOwnProperty(to) : call(tmp11, to)) {
                          class target {
                            constructor() {
                              self = this;
                              tmp = closure_0;
                              apply = closure_0.apply;
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
                        }
                        if (undefined === tmp11[tmp15.from]) {
                          class target {
                            constructor() {
                              self = this;
                              tmp = closure_0;
                              apply = closure_0.apply;
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
                          delete tmp3[tmp4];
                        } else {
                          class target {
                            constructor() {
                              self = this;
                              tmp = closure_0;
                              apply = closure_0.apply;
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
                        }
                        obj1[tmp15.to] = true;
                        if (!tmp15.options.alias) {
                          class target {
                            constructor() {
                              self = this;
                              tmp = closure_0;
                              apply = closure_0.apply;
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
                          delete tmp3[tmp];
                        }
                      } else {
                        class target {
                          constructor() {
                            self = this;
                            tmp = closure_0;
                            apply = closure_0.apply;
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
                      }
                      num5 = num5 + 1;
                      if (num5 < self._inner.renames.length) {
                        class target {
                          constructor() {
                            self = this;
                            tmp = closure_0;
                            apply = closure_0.apply;
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
                      }
                    }
                    obj2 = { value: null, errors: null };
                    obj2.value = tmp10;
                    tmp17 = null;
                    if (items.length) {
                      class target {
                        constructor() {
                          self = this;
                          tmp = closure_0;
                          apply = closure_0.apply;
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
                    }
                    obj2.errors = tmp17;
                    return obj2;
                  }
                  if (!self._inner.children) {
                    class target {
                      constructor() {
                        self = this;
                        tmp = closure_0;
                        apply = closure_0.apply;
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
                  }
                  tmp18 = _class;
                  _Object5 = Object;
                  mapToObjectResult = _class.mapToObject(Object.keys(tmp11));
                  if (self._inner.children) {
                    class target {
                      constructor() {
                        self = this;
                        tmp = closure_0;
                        apply = closure_0.apply;
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
                    str5 = ".";
                    str6 = "";
                    num6 = 0;
                    if (0 < self._inner.children.length) {
                      class target {
                        constructor() {
                          self = this;
                          tmp = closure_0;
                          apply = closure_0.apply;
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
                      while (true) {
                        class target {
                          constructor() {
                            self = this;
                            tmp = closure_0;
                            apply = closure_0.apply;
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
                        key = tmp20.key;
                        delete tmp2[tmp];
                        obj3 = { key: null, path: null, parent: null, reference: null };
                        obj3.key = key;
                        path = exports.path;
                        tmp21 = num6;
                        if (!path) {
                          class target {
                            constructor() {
                              self = this;
                              tmp = closure_0;
                              apply = closure_0.apply;
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
                        }
                        str7 = "";
                        if (exports.path) {
                          class target {
                            constructor() {
                              self = this;
                              tmp = closure_0;
                              apply = closure_0.apply;
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
                          if (key) {
                            class target {
                              constructor() {
                                self = this;
                                tmp = closure_0;
                                apply = closure_0.apply;
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
                          }
                        }
                        obj3.path = path + str7 + key;
                        obj3.parent = tmp11;
                        obj3.reference = exports.reference;
                        schema = tmp20.schema;
                        _validateResult = schema._validate(tmp11[key], obj3, fn);
                        if (_validateResult.errors) {
                          class target {
                            constructor() {
                              self = this;
                              tmp = closure_0;
                              apply = closure_0.apply;
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
                          tmp23[0] = key;
                          schema2 = tmp20.schema;
                          tmp23[1] = schema2._getLabel(key);
                          tmp23[2] = _validateResult.errors;
                          tmp24 = self;
                          str8 = "object.child";
                          tmp25 = tmp23;
                          tmp26 = obj3;
                          tmp27 = fn;
                          arr = items.push(self.createError("object.child", tmp23, obj3, fn));
                          if (fn.abortEarly) {
                            class target {
                              constructor() {
                                self = this;
                                tmp = closure_0;
                                apply = closure_0.apply;
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
                          }
                        }
                        if (tmp20.schema._flags.strip) {
                          class target {
                            constructor() {
                              self = this;
                              tmp = closure_0;
                              apply = closure_0.apply;
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
                        } else {
                          class target {
                            constructor() {
                              self = this;
                              tmp = closure_0;
                              apply = closure_0.apply;
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
                        }
                        num6 = num6 + 1;
                        if (num6 < self._inner.children.length) {
                          class target {
                            constructor() {
                              self = this;
                              tmp = closure_0;
                              apply = closure_0.apply;
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
                        }
                      }
                      obj4 = { value: null, errors: null };
                      obj4.value = tmp10;
                      tmp58 = null;
                      if (items.length) {
                        class target {
                          constructor() {
                            self = this;
                            tmp = closure_0;
                            apply = closure_0.apply;
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
                      }
                      obj4.errors = tmp58;
                      return obj4;
                    }
                  }
                  _Object6 = Object;
                  keys1 = Object.keys(mapToObjectResult);
                  keys2 = keys1;
                  if (keys1.length) {
                    class target {
                      constructor() {
                        self = this;
                        tmp = closure_0;
                        apply = closure_0.apply;
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
                    if (self._inner.patterns.length) {
                      class target {
                        constructor() {
                          self = this;
                          tmp = closure_0;
                          apply = closure_0.apply;
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
                      str9 = ".";
                      str10 = "";
                      num7 = 0;
                      if (0 < keys1.length) {
                        class target {
                          constructor() {
                            self = this;
                            tmp = closure_0;
                            apply = closure_0.apply;
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
                        while (true) {
                          class target {
                            constructor() {
                              self = this;
                              tmp = closure_0;
                              apply = closure_0.apply;
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
                          obj5 = { key: null, path: null, parent: null, reference: null };
                          obj5.key = tmp30;
                          tmp31 = num7;
                          str11 = "";
                          if (exports.path) {
                            class target {
                              constructor() {
                                self = this;
                                tmp = closure_0;
                                apply = closure_0.apply;
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
                          }
                          obj5.path = str11 + tmp30;
                          obj5.parent = tmp11;
                          obj5.reference = exports.reference;
                          num8 = 0;
                          if (0 < self._inner.patterns.length) {
                            class target {
                              constructor() {
                                self = this;
                                tmp = closure_0;
                                apply = closure_0.apply;
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
                            while (true) {
                              class target {
                                constructor() {
                                  self = this;
                                  tmp = closure_0;
                                  apply = closure_0.apply;
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
                              regex = tmp33.regex;
                              tmp34 = num8;
                              if (regex.test(tmp30)) {
                                class target {
                                  constructor() {
                                    self = this;
                                    tmp = closure_0;
                                    apply = closure_0.apply;
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
                                rule = tmp33.rule;
                                iter = rule._validate(tmp32, obj5, fn);
                                if (iter.errors) {
                                  class target {
                                    constructor() {
                                      self = this;
                                      tmp = closure_0;
                                      apply = closure_0.apply;
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
                                  tmp35[0] = tmp30;
                                  rule2 = tmp33.rule;
                                  tmp35[1] = rule2._getLabel(tmp30);
                                  tmp35[2] = iter.errors;
                                  tmp36 = self;
                                  str12 = "object.child";
                                  tmp37 = tmp35;
                                  tmp38 = obj5;
                                  tmp39 = fn;
                                  arr1 = items.push(self.createError("object.child", tmp35, obj5, fn));
                                  if (fn.abortEarly) {
                                    class target {
                                      constructor() {
                                        self = this;
                                        tmp = closure_0;
                                        apply = closure_0.apply;
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
                                  }
                                }
                                if (undefined !== iter.value) {
                                  class target {
                                    constructor() {
                                      self = this;
                                      tmp = closure_0;
                                      apply = closure_0.apply;
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
                                }
                              }
                              num8 = num8 + 1;
                              if (num8 < self._inner.patterns.length) {
                                class target {
                                  constructor() {
                                    self = this;
                                    tmp = closure_0;
                                    apply = closure_0.apply;
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
                              }
                              continue;
                            }
                            obj6 = { value: null, errors: null };
                            obj6.value = tmp10;
                            tmp57 = null;
                            if (items.length) {
                              class target {
                                constructor() {
                                  self = this;
                                  tmp = closure_0;
                                  apply = closure_0.apply;
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
                            }
                            obj6.errors = tmp57;
                            return obj6;
                          }
                          num7 = num7 + 1;
                          if (num7 < keys1.length) {
                            class target {
                              constructor() {
                                self = this;
                                tmp = closure_0;
                                apply = closure_0.apply;
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
                          }
                        }
                      }
                      _Object7 = Object;
                      keys2 = Object.keys(mapToObjectResult);
                    }
                  }
                  if (self._inner.children) {
                    class target {
                      constructor() {
                        self = this;
                        tmp = closure_0;
                        apply = closure_0.apply;
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
                  } else {
                    class target {
                      constructor() {
                        self = this;
                        tmp = closure_0;
                        apply = closure_0.apply;
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
                  }
                  str13 = ".";
                  str14 = "";
                  tmp41 = null;
                  num9 = 0;
                  if (0 < self._inner.dependencies.length) {
                    class target {
                      constructor() {
                        self = this;
                        tmp = closure_0;
                        apply = closure_0.apply;
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
                    while (true) {
                      class target {
                        constructor() {
                          self = this;
                          tmp = closure_0;
                          apply = closure_0.apply;
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
                      tmp43 = closure_7;
                      tmp44 = closure_7[tmp42.type];
                      call2 = tmp44.call;
                      tmp45 = null !== tmp42.key;
                      tmp46 = num9;
                      if (tmp45) {
                        class target {
                          constructor() {
                            self = this;
                            tmp = closure_0;
                            apply = closure_0.apply;
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
                      }
                      peers = tmp42.peers;
                      obj7 = { key: null, path: null };
                      obj7.key = tmp42.key;
                      tmp47 = exports.path || "";
                      str15 = "";
                      if (tmp42.key) {
                        class target {
                          constructor() {
                            self = this;
                            tmp = closure_0;
                            apply = closure_0.apply;
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
                      }
                      obj7.path = tmp47 + str15;
                      if (typeof call2 === "unknown") {
                        class target {
                          constructor() {
                            self = this;
                            tmp = closure_0;
                            apply = closure_0.apply;
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
                        tmp48 = tmp45;
                        tmp49 = peers;
                        tmp50 = tmp11;
                        tmp51 = obj7;
                        tmp52 = fn;
                        tmp44Result = tmp44(tmp45, peers, tmp11, obj7, fn);
                      } else {
                        class target {
                          constructor() {
                            self = this;
                            tmp = closure_0;
                            apply = closure_0.apply;
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
                        tmp61 = self;
                        tmp62 = tmp45;
                        tmp63 = peers;
                        tmp64 = tmp11;
                        tmp65 = obj7;
                        tmp66 = fn;
                        tmp44Result = call2(self, tmp45, peers, tmp11, obj7, fn);
                      }
                      tmp54 = closure_4;
                      if (tmp44Result instanceof closure_4.Err) {
                        class target {
                          constructor() {
                            self = this;
                            tmp = closure_0;
                            apply = closure_0.apply;
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
                        if (fn.abortEarly) {
                          class target {
                            constructor() {
                              self = this;
                              tmp = closure_0;
                              apply = closure_0.apply;
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
                        }
                      }
                      num9 = num9 + 1;
                      if (num9 < self._inner.dependencies.length) {
                        class target {
                          constructor() {
                            self = this;
                            tmp = closure_0;
                            apply = closure_0.apply;
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
                      }
                    }
                    obj8 = { value: null, errors: null };
                    obj8.value = tmp10;
                    tmp56 = null;
                    if (items.length) {
                      class target {
                        constructor() {
                          self = this;
                          tmp = closure_0;
                          apply = closure_0.apply;
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
                    }
                    obj8.errors = tmp56;
                    return obj8;
                  }
                  obj9 = { value: null, errors: null };
                  obj9.value = tmp10;
                  tmp55 = null;
                  if (items.length) {
                    class target {
                      constructor() {
                        self = this;
                        tmp = closure_0;
                        apply = closure_0.apply;
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
                  }
                  obj9.errors = tmp55;
                  return obj9;
                }
              }
            }
            arr2 = items.push(self.createError(`${str}.base`, null, exports, fn));
            obj10 = { value: module, errors: null };
            if (items.length) {
              class target {
                constructor() {
                  self = this;
                  tmp = closure_0;
                  apply = closure_0.apply;
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
            }
            obj10.errors = null;
            return obj10;
          }
          _func() {
            cloneResult = this.clone();
            cloneResult._flags.func = true;
            return cloneResult;
          }
          keys(arg0) {
            obj = _class;
            tmp2 = null == module;
            if (!tmp2) {
              str = "undefined";
              if (undefined !== module) {
                tmp3 = closure_0;
                str = closure_0(module);
              }
              str2 = "object";
              tmp2 = "object" === str;
            }
            assertResult = _class.assert(tmp2, "Object schema must be a valid object");
            tmp5 = module;
            if (module) {
              tmp6 = closure_3;
              tmp5 = module instanceof closure_3;
            }
            assertResult1 = obj.assert(!tmp5, "Object schema cannot be a joi schema");
            cloneResult = this.clone();
            if (module) {
              tmp9 = globalThis;
              _Object = Object;
              keys = Object.keys(module);
              if (keys.length) {
                tmp10 = closure_2;
                tmp11 = new.target;
                tmp12 = new.target;
                obj2 = new closure_2();
                tmp13 = obj2;
                if (cloneResult._inner.children) {
                  num = 0;
                  num2 = 1;
                  num3 = -1;
                  if (0 < cloneResult._inner.children.length) {
                    do {
                      tmp14 = cloneResult._inner.children[num];
                      tmp15 = num;
                      if (-1 === keys.indexOf(tmp14.key)) {
                        obj = { after: null, group: null };
                        ({ _refs: obj3.after, key: obj3.group } = tmp14);
                        addResult = obj2.add(tmp14, obj);
                      }
                      num = num + 1;
                    } while (num < cloneResult._inner.children.length);
                  }
                }
                num4 = 0;
                num5 = 1;
                if (0 < keys.length) {
                  tmp17 = keys[num4];
                  tmp19 = num4;
                  while (true) {
                    try {
                      tmp20 = closure_5;
                      schemaResult = closure_5.schema(tmp18);
                      obj1 = { key: null, schema: null };
                      obj1.key = tmp17;
                      obj1.schema = schemaResult;
                      obj2 = { after: null, group: null };
                      obj2.after = schemaResult._refs;
                      obj2.group = tmp17;
                      addResult1 = obj2.add(obj1, obj2);
                      num4 = num4 + 1;
                      if (num4 >= keys.length) {
                        break;
                      }
                    } catch (obj6) {
                      str3 = "path";
                      if (obj6.hasOwnProperty("path")) {
                        str4 = ".";
                        obj6.path = tmp + "." + obj6.path;
                      } else {
                        obj6.path = tmp;
                      }
                      throw obj6;
                    }
                  }
                }
                cloneResult._inner.children = obj2.nodes;
                return cloneResult;
              } else {
                cloneResult._inner.children = [];
                return cloneResult;
              }
            } else {
              cloneResult._inner.children = null;
              return cloneResult;
            }
          }
          unknown(arg0) {
            cloneResult = this.clone();
            cloneResult._flags.allowUnknown = false !== module;
            return cloneResult;
          }
          length(arg0) {
            closure_0 = module;
            tmp = _class;
            isIntegerResult = _class.isInteger(module);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = module >= 0;
            }
            assertResult = _class.assert(isIntegerResult, "limit must be a positive integer");
            return this._test("length", module, function(arg0, mergeResult, concatSettingsResult) {
              let error = arg0;
              if (Object.keys(arg0).length !== closure_0) {
                const self = this;
                obj = { limit: tmp2 };
                const self2 = this;
                error = this.createError("object.length", obj, mergeResult, concatSettingsResult);
              }
              return error;
            });
          }
          arity(arg0) {
            closure_0 = module;
            tmp = _class;
            isIntegerResult = _class.isInteger(module);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = module >= 0;
            }
            assertResult = _class.assert(isIntegerResult, "n must be a positive integer");
            return this._test("arity", module, function(arg0, mergeResult, concatSettingsResult) {
              let error = arg0;
              if (arg0.length !== closure_0) {
                const self = this;
                obj = { n: tmp2 };
                const self2 = this;
                error = this.createError("function.arity", obj, mergeResult, concatSettingsResult);
              }
              return error;
            });
          }
          minArity(arg0) {
            closure_0 = module;
            tmp = _class;
            isIntegerResult = _class.isInteger(module);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = module > 0;
            }
            assertResult = _class.assert(isIntegerResult, "n must be a strict positive integer");
            return this._test("minArity", module, function(arg0, mergeResult, concatSettingsResult) {
              let error = arg0;
              if (arg0.length < closure_0) {
                const self = this;
                obj = { n: tmp2 };
                const self2 = this;
                error = this.createError("function.minArity", obj, mergeResult, concatSettingsResult);
              }
              return error;
            });
          }
          maxArity(arg0) {
            closure_0 = module;
            tmp = _class;
            isIntegerResult = _class.isInteger(module);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = module >= 0;
            }
            assertResult = _class.assert(isIntegerResult, "n must be a positive integer");
            return this._test("maxArity", module, function(arg0, mergeResult, concatSettingsResult) {
              let error = arg0;
              if (arg0.length > closure_0) {
                const self = this;
                obj = { n: tmp2 };
                const self2 = this;
                error = this.createError("function.maxArity", obj, mergeResult, concatSettingsResult);
              }
              return error;
            });
          }
          min(arg0) {
            closure_0 = module;
            tmp = _class;
            isIntegerResult = _class.isInteger(module);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = module >= 0;
            }
            assertResult = _class.assert(isIntegerResult, "limit must be a positive integer");
            return this._test("min", module, function(arg0, mergeResult, concatSettingsResult) {
              let error = arg0;
              if (Object.keys(arg0).length < closure_0) {
                const self = this;
                obj = { limit: tmp2 };
                const self2 = this;
                error = this.createError("object.min", obj, mergeResult, concatSettingsResult);
              }
              return error;
            });
          }
          max(arg0) {
            closure_0 = module;
            tmp = _class;
            isIntegerResult = _class.isInteger(module);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = module >= 0;
            }
            assertResult = _class.assert(isIntegerResult, "limit must be a positive integer");
            return this._test("max", module, function(arg0, mergeResult, concatSettingsResult) {
              let error = arg0;
              if (Object.keys(arg0).length > closure_0) {
                const self = this;
                obj = { limit: tmp2 };
                const self2 = this;
                error = this.createError("object.max", obj, mergeResult, concatSettingsResult);
              }
              return error;
            });
          }
          pattern(arg0, arg1) {
            assertResult = _class.assert(module instanceof RegExp, "Invalid regular expression");
            str = undefined;
            assertResult1 = _class.assert(undefined !== exports, "Invalid rule");
            if (module.ignoreCase) {
              str = "i";
            }
            regExp = new RegExp(module.source, str);
            try {
              tmp4 = closure_5;
              tmp5 = exports;
              self = this;
              tmp7 = regExp;
              schemaResult = closure_5.schema(exports);
              cloneResult = this.clone();
              patterns = cloneResult._inner.patterns;
              obj = { regex: null, rule: null };
              obj.regex = regExp;
              obj.rule = schemaResult;
              arr = patterns.push(obj);
              return cloneResult;
            } catch (obj2) {
              str2 = "path";
              if (!obj2.hasOwnProperty("path")) {
              } else {
                str3 = "(";
                str4 = ")";
                obj2.message = obj2.message + "(" + obj2.path + ")";
              }
              throw obj2;
            }
            return;
          }
          schema() {
            return this._test("schema", null, function(arg0, mergeResult, concatSettingsResult) {
              let error = arg0;
              if (!(arg0 instanceof closure_1_3)) {
                const self = this;
                const self2 = this;
                error = this.createError("object.schema", null, mergeResult, concatSettingsResult);
              }
              return error;
            });
          }
          with(arg0, arg1) {
            return this._dependency("with", module, exports);
          }
          without(arg0, arg1) {
            return this._dependency("without", module, exports);
          }
          xor() {
            slice = Array.prototype.slice;
            call = slice.call;
            tmp = _class;
            if (typeof call === "unknown") {
              tmp2 = arguments;
              substr = slice();
            } else {
              tmp4 = arguments;
              tmp5 = arguments;
              substr = call(arguments);
            }
            return this._dependency("xor", null, _class.flatten(substr));
          }
          or() {
            slice = Array.prototype.slice;
            call = slice.call;
            tmp = _class;
            if (typeof call === "unknown") {
              tmp2 = arguments;
              substr = slice();
            } else {
              tmp4 = arguments;
              tmp5 = arguments;
              substr = call(arguments);
            }
            return this._dependency("or", null, _class.flatten(substr));
          }
          and() {
            slice = Array.prototype.slice;
            call = slice.call;
            tmp = _class;
            if (typeof call === "unknown") {
              tmp2 = arguments;
              substr = slice();
            } else {
              tmp4 = arguments;
              tmp5 = arguments;
              substr = call(arguments);
            }
            return this._dependency("and", null, _class.flatten(substr));
          }
          nand() {
            slice = Array.prototype.slice;
            call = slice.call;
            tmp = _class;
            if (typeof call === "unknown") {
              tmp2 = arguments;
              substr = slice();
            } else {
              tmp4 = arguments;
              tmp5 = arguments;
              substr = call(arguments);
            }
            return this._dependency("nand", null, _class.flatten(substr));
          }
          requiredKeys(arg0) {
            slice = Array.prototype.slice;
            call = slice.call;
            tmp = _class;
            if (typeof call === "unknown") {
              tmp2 = arguments;
              substr = slice();
            } else {
              tmp4 = arguments;
              tmp5 = arguments;
              substr = call(arguments);
            }
            return this.applyFunctionToChildren(_class.flatten(substr), "required");
          }
          optionalKeys(arg0) {
            slice = Array.prototype.slice;
            call = slice.call;
            tmp = _class;
            if (typeof call === "unknown") {
              tmp2 = arguments;
              substr = slice();
            } else {
              tmp4 = arguments;
              tmp5 = arguments;
              substr = call(arguments);
            }
            return this.applyFunctionToChildren(_class.flatten(substr), "optional");
          }
          rename(arg0, arg1, arg2) {
            self = this;
            assertResult = _class.assert(typeof module === "string", "Rename missing the from argument");
            assertResult1 = _class.assert(typeof exports === "string", "Rename missing the to argument");
            assertResult2 = _class.assert(exports !== module, "Cannot rename key to same name:", module);
            num = 0;
            obj = _class;
            if (0 < this._inner.renames.length) {
              do {
                tmp4 = _class;
                assertResult3 = _class.assert(self._inner.renames[num].from !== module, "Cannot rename the same key multiple times");
                num = num + 1;
                obj = _class;
                length = self._inner.renames.length;
              } while (num < length);
            }
            obj1 = fn;
            cloneResult = self.clone();
            renames = cloneResult._inner.renames;
            obj = { from: module, to: exports, options: null };
            if (!fn) {
              obj1 = {};
            }
            obj.options = obj.applyToDefaults(closure_7.renameDefaults, obj1);
            arr = renames.push(obj);
            return cloneResult;
          }
          applyFunctionToChildren(arg0, arg1, arg2, arg3) {
            self = this;
            items = [];
            combined = items.concat(module);
            assertResult = _class.assert(combined.length > 0, "expected at least one children");
            groupChildrenResult = closure_7.groupChildren(combined);
            str = "";
            if ("" in groupChildrenResult) {
              obj = self[exports];
              applyResult = obj.apply(self, fn);
              delete tmp3[tmp2];
            } else {
              applyResult = self.clone();
            }
            if (applyResult._inner.children) {
              tmp7 = arg3;
              if (arg3) {
                str2 = ".";
                str = `${arg3}.`;
              }
              num = 1;
              for (let num2 = 0; num2 < applyResult._inner.children.length; num2 = num2 + 1) {
                tmp8 = applyResult._inner.children[num2];
                tmp9 = groupChildrenResult[tmp8.key];
                tmp10 = num2;
                if (tmp9) {
                  obj = { key: null, _refs: null, schema: null };
                  ({ key: obj2.key, _refs: obj2._refs, schema } = tmp8);
                  tmp11 = schema;
                  tmp12 = tmp9;
                  tmp13 = exports;
                  tmp14 = fn;
                  obj.schema = schema.applyFunctionToChildren(tmp9, exports, fn, str + tmp8.key);
                  applyResult._inner.children[num2] = obj;
                  key = tmp8.key;
                  delete tmp3[tmp];
                }
              }
            }
            keys = Object.keys(groupChildrenResult);
            assertResult1 = _class.assert(0 === keys.length, "unknown key(s)", keys.join(", "));
            return applyResult;
          }
          _dependency(arg0, arg1, arg2) {
            items = [];
            combined = items.concat(fn);
            num = 0;
            if (0 < combined.length) {
              do {
                tmp = _class;
                assertResult = _class.assert(typeof combined[num] === "string", module, "peers must be a string or array of strings");
                num = num + 1;
                length = combined.length;
              } while (num < length);
            }
            cloneResult = this.clone();
            dependencies = cloneResult._inner.dependencies;
            obj = { type: module, key: exports, peers: combined };
            arr = dependencies.push(obj);
            return cloneResult;
          }
          describe(arg0) {
            self = this;
            describe = closure_3.prototype.describe;
            call = describe.call;
            tmp = typeof call === "unknown" ? describe() : call(self);
            if (tmp.rules) {
              num = 0;
              num2 = 1;
              str = "object";
              if (0 < tmp.rules.length) {
                do {
                  tmp2 = tmp.rules[num];
                  ref = tmp2.arg;
                  tmp3 = num;
                  if (ref) {
                    tmp4 = closure_0;
                    ref = "object" === closure_0(tmp2.arg);
                  }
                  if (ref) {
                    ref = tmp2.arg.schema;
                  }
                  if (ref) {
                    ref = tmp2.arg.ref;
                  }
                  if (ref) {
                    obj = { schema: null, ref: null };
                    schema = tmp2.arg.schema;
                    obj.schema = schema.describe();
                    str2 = tmp2.arg.ref;
                    obj.ref = str2.toString();
                    tmp2.arg = obj;
                  }
                  num = num + 1;
                } while (num < tmp.rules.length);
              }
            }
            if (self._inner.children) {
              tmp5 = module;
              if (!module) {
                tmp.children = {};
                num3 = 0;
                num4 = 1;
                if (0 < self._inner.children.length) {
                  do {
                    tmp6 = self._inner.children[num3];
                    schema2 = tmp6.schema;
                    tmp.children[tmp6.key] = schema2.describe();
                    num3 = num3 + 1;
                    length = self._inner.children.length;
                  } while (num3 < length);
                }
              }
            }
            if (self._inner.dependencies.length) {
              tmp7 = _class;
              tmp.dependencies = _class.clone(self._inner.dependencies);
            }
            if (self._inner.patterns.length) {
              tmp.patterns = [];
              num5 = 0;
              num6 = 1;
              if (0 < self._inner.patterns.length) {
                do {
                  tmp8 = self._inner.patterns[num5];
                  patterns = tmp.patterns;
                  obj = { regex: null, rule: null };
                  str3 = tmp8.regex;
                  obj.regex = str3.toString();
                  rule = tmp8.rule;
                  obj.rule = rule.describe();
                  arr = patterns.push(obj);
                  num5 = num5 + 1;
                  length2 = self._inner.patterns.length;
                } while (num5 < length2);
              }
            }
            if (self._inner.renames.length > 0) {
              tmp10 = _class;
              tmp.renames = _class.clone(self._inner.renames);
            }
            return tmp;
          }
          assert(arg0, arg1, arg2) {
            closure_0 = module;
            closure_1 = exports;
            str = fn;
            c2 = fn;
            obj = closure_5;
            refResult = closure_5.ref(module);
            closure_0 = refResult;
            isContext = refResult.isContext;
            tmp2 = closure_1;
            if (!isContext) {
              num = 1;
              isContext = refResult.depth > 1;
            }
            assertResult = closure_1.assert(isContext, "Cannot use assertions for root level references - use direct key rules instead");
            if (!str) {
              str = "pass the assertion test";
            }
            c2 = str;
            try {
              tmp4 = exports;
              schemaResult = obj.schema(exports);
              tmp6 = schemaResult;
              closure_1 = schemaResult;
              self = this;
              num2 = 1;
              closure_3 = refResult.path[refResult.path.length - 1];
              path = refResult.path;
              str2 = ".";
              closure_4 = path.join(".");
              obj = { schema: null, ref: null };
              obj.schema = schemaResult;
              obj.ref = refResult;
              str3 = "assert";
              return this._test("assert", obj, function(arg0, arg1, concatSettingsResult) {
                if (otherwise._validate(closure_0(arg0), null, concatSettingsResult, arg0).errors) {
                  const self = this;
                  const mergeResult = _class.merge({}, arg1);
                  mergeResult.key = key;
                  mergeResult.path = path;
                  obj = { ref: mergeResult.path, message: str };
                  const self2 = this;
                  return this.createError("object.assert", obj, mergeResult, concatSettingsResult);
                } else {
                  return arg0;
                }
              });
            } catch (obj3) {
              str4 = "path";
              if (!obj3.hasOwnProperty("path")) {
              } else {
                str5 = "(";
                str6 = ")";
                obj3.message = obj3.message + "(" + obj3.path + ")";
              }
              throw obj3;
            }
            return;
          }
          type(arg0, arg1) {
            closure_0 = module;
            name = exports;
            assertResult = _class.assert(typeof module === "function", "type must be a constructor function");
            if (!exports) {
              name = module.name;
            }
            obj = { name, ctor: module };
            closure_1 = obj;
            return this._test("type", obj, function(arg0, mergeResult, concatSettingsResult) {
              let error = arg0;
              if (!(arg0 instanceof closure_0)) {
                const self = this;
                obj = { type: null };
                obj.type = obj.name;
                const self2 = this;
                error = this.createError("object.type", obj, mergeResult, concatSettingsResult);
              }
              return error;
            });
          }
          ref() {
            return this._test("ref", null, function(arg0, mergeResult, concatSettingsResult) {
              let error = arg0;
              if (!ref.isRef(arg0)) {
                const self = this;
                const self2 = this;
                error = this.createError("function.ref", null, mergeResult, concatSettingsResult);
              }
              return error;
            });
          }
        }
        if (typeof tmp2 !== "function") {
          if (null !== tmp2) {
            let _TypeError = TypeError;
            let typeError = new TypeError("Super expression must either be null or a function, not " + typeof tmp2);
            throw typeError;
          }
        }
        let prototype = tmp2;
        if (tmp2) {
          prototype = tmp2.prototype;
        }
        arg = { constructor: null };
        arg = { value: _class, enumerable: false, writable: true, configurable: true };
        arg.constructor = arg;
        _class.prototype = Object.create(prototype, arg);
        if (tmp2) {
          let _Object = Object;
          let _Object2 = Object;
          if (Object.setPrototypeOf) {
            _Object2.setPrototypeOf(_class, tmp2);
          } else {
            const ownPropertyNames = _Object2.getOwnPropertyNames(tmp2);
            for (let num7 = 0; num7 < ownPropertyNames.length; num7 = num7 + 1) {
              let tmp3 = ownPropertyNames[num7];
              let _Object3 = Object;
              let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(tmp2, tmp3);
              let configurable = ownPropertyDescriptor;
              if (ownPropertyDescriptor) {
                configurable = ownPropertyDescriptor.configurable;
              }
              if (configurable) {
                configurable = undefined === _class[tmp3];
              }
              if (configurable) {
                let _Object4 = Object;
                let definePropertyResult = Object.defineProperty(_class, tmp3, ownPropertyDescriptor);
              }
            }
          }
        }
        arg.Object = _class;
        arg.safeParse = (arg0) => {
          try {
            const _JSON = JSON;
            return JSON.parse(arg0);
          } catch (err) {
            return tmp;
          }
        };
        arg.renameDefaults = { alias: false, multiple: false, override: false };
        arg.groupChildren = (arr) => {
          const sorted = arr.sort();
          obj = {};
          for (let num = 0; num < arr.length; num = num + 1) {
            let str = arr[num];
            let assertResult = _class.assert(typeof str === "string", "children must be strings");
            let first = str.split(".")[0];
            items = obj[first];
            if (!items) {
              items = [];
            }
            obj[first] = items;
            arr = items.push(str.substring(first.length + 1));
          }
          return obj;
        };
        arg.with = function(arg0, arg1, arg2, mergeResult, concatSettingsResult) {
          let tmp;
          if (undefined === arg0) {
            return arg0;
          } else {
            let num = 0;
            if (0 < arg1.length) {
              while (true) {
                tmp = arg1[num];
                let _Object = Object;
                hasOwnProperty = Object.prototype.hasOwnProperty;
                let call = hasOwnProperty.call;
                if (!(typeof call === "unknown" ? hasOwnProperty(tmp) : call(arg2, tmp))) {
                  break;
                } else if (undefined === arg2[tmp]) {
                  break;
                } else {
                  num = num + 1;
                }
              }
              const self = this;
              obj = { peer: tmp };
              const self2 = this;
              return this.createError("object.with", obj, mergeResult, concatSettingsResult);
            }
            return arg0;
          }
        };
        arg.without = function(arg0, arg1, arg2, mergeResult, concatSettingsResult) {
          let tmp;
          if (undefined === arg0) {
            return arg0;
          } else {
            let num = 0;
            if (0 < arg1.length) {
              while (true) {
                tmp = arg1[num];
                let _Object = Object;
                hasOwnProperty = Object.prototype.hasOwnProperty;
                let call = hasOwnProperty.call;
                if (typeof call === "unknown" ? hasOwnProperty(tmp) : call(arg2, tmp)) {
                  if (undefined !== arg2[tmp]) {
                    break;
                  }
                }
                num = num + 1;
              }
              const self = this;
              obj = { peer: tmp };
              const self2 = this;
              return this.createError("object.without", obj, mergeResult, concatSettingsResult);
            }
            return arg0;
          }
        };
        arg.xor = function(arg0, peers, arg2, mergeResult, concatSettingsResult) {
          items = [];
          for (let num = 0; num < peers.length; num = num + 1) {
            let tmp = peers[num];
            let _Object = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
            let call = hasOwnProperty.call;
            let tmp3 = (typeof call === "unknown" ? hasOwnProperty(tmp) : call(arg2, tmp)) && undefined !== arg2[tmp];
            if (tmp3) {
              let arr = items.push(tmp);
            }
          }
          if (1 === items.length) {
            return arg0;
          } else {
            const self = this;
            if (0 === items.length) {
              obj = { peers };
              let error = self.createError("object.missing", obj, mergeResult, concatSettingsResult);
            } else {
              obj = { peers };
              error = self.createError("object.xor", obj, mergeResult, concatSettingsResult);
            }
          }
        };
        arg.or = function(arg0, peers, arg2, mergeResult, concatSettingsResult) {
          let num = 0;
          if (0 < peers.length) {
            while (true) {
              let tmp = peers[num];
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown" ? hasOwnProperty(tmp) : call(arg2, tmp)) {
                if (undefined !== arg2[tmp]) {
                  break;
                }
              }
              num = num + 1;
            }
            return arg0;
          }
          return this.createError("object.missing", { peers }, mergeResult, concatSettingsResult);
        };
        arg.and = function(arg0, arg1, arg2, mergeResult, concatSettingsResult) {
          items = [];
          const items1 = [];
          let num = 0;
          if (0 < arg1.length) {
            while (true) {
              let tmp = arg1[num];
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown" ? hasOwnProperty(tmp) : call(arg2, tmp)) {
                if (undefined !== arg2[tmp]) {
                  let arr = items1.push(tmp);
                  num = num + 1;
                  if (num >= length) {
                    break;
                  }
                }
              }
              arr = items.push(tmp);
            }
          }
          let error = null;
          if (items.length !== arg1.length) {
            error = null;
            if (items1.length !== length) {
              const self = this;
              obj = { present: items1, missing: items };
              const self2 = this;
              error = this.createError("object.and", obj, mergeResult, concatSettingsResult);
            }
          }
          return error;
        };
        arg.nand = function(arg0, arg1, arg2, mergeResult, concatSettingsResult) {
          items = [];
          for (let num = 0; num < arg1.length; num = num + 1) {
            let tmp = arg1[num];
            let _Object = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
            let call = hasOwnProperty.call;
            let tmp3 = (typeof call === "unknown" ? hasOwnProperty(tmp) : call(arg2, tmp)) && undefined !== arg2[tmp];
            if (tmp3) {
              let arr = items.push(tmp);
            }
          }
          let error = null;
          if (items.length === arg1.length) {
            const self = this;
            obj = { main: tmp6, peers: cloneResult };
            const self2 = this;
            error = this.createError("object.nand", obj, mergeResult, concatSettingsResult);
          }
          return error;
        };
        const object = new arg.Object();
        module.exports = object;
      }
      fn = (arg0) => {
        if (arg0) {
          const _Symbol = Symbol;
          if (typeof Symbol === "function") {
            const _Symbol3 = Symbol;
            if (arg0.constructor === Symbol) {
              const _Symbol2 = Symbol;
              let str = "symbol";
            }
            return str;
          }
        }
        str = typeof arg0;
      };
    },
    (arg0, arg1, fn) => {
      closure_0 = fn(2);
      obj = {};
      fn = () => {

      };
      obj.Topo = fn;
      module.exports = fn;
      obj.Topo.prototype.add = function(arg0, arg1) {
        obj = arg1;
        const self = this;
        items = [];
        if (!arg1) {
          obj = {};
        }
        const combined = items.concat(obj.before || []);
        const items1 = [];
        let after = obj.after;
        if (!after) {
          after = [];
        }
        const combined1 = items1.concat(after);
        const group = tmp2;
        const sort = obj.sort || 0;
        closure_0.assert(-1 === combined.indexOf(obj.group || "?"), "Item cannot come before itself:", obj.group || "?");
        closure_0.assert(-1 === combined.indexOf("?"), "Item cannot come before unassociated items");
        closure_0.assert(-1 === combined1.indexOf(obj.group || "?"), "Item cannot come after itself:", obj.group || "?");
        closure_0.assert(-1 === combined1.indexOf("?"), "Item cannot come after unassociated items");
        const items2 = [];
        const combined2 = items2.concat(arg0);
        const item = combined2.forEach((node, index) => {
          const _items = self._items;
          _items.push({ seq: self._items.length, sort, before: combined, after: combined1, group, node });
        });
        let str = "";
        if ("?" !== (obj.group || "?")) {
          str = `added into group ${tmp2}`;
        }
        closure_0.assert(!self._sort(), "item", str, "created a dependencies error");
        return self.nodes;
      };
      obj.Topo.prototype.merge = function(arg0) {
        let length2;
        const self = this;
        items = [];
        const combined = items.concat(arg0);
        for (let num = 0; num < combined.length; num = num + 1) {
          let tmp = combined[num];
          if (tmp) {
            let num2 = 0;
            if (0 < tmp._items.length) {
              do {
                let _items = self._items;
                let arr = _items.push(closure_0.shallow(tmp._items[num2]));
                num2 = num2 + 1;
                length = tmp._items.length;
              } while (num2 < length);
            }
          }
        }
        _items = self._items;
        const sorted = _items.sort(obj.mergeSort);
        let num3 = 0;
        if (0 < self._items.length) {
          do {
            self._items[num3].seq = num3;
            num3 = num3 + 1;
            length2 = self._items.length;
          } while (num3 < length2);
        }
        closure_0.assert(!self._sort(), "merge created a dependencies error");
        return self.nodes;
      };
      obj.mergeSort = (arg0, arg1) => {
        let num = 0;
        if (arg0.sort !== arg1.sort) {
          let num2 = 1;
          if (arg0.sort < arg1.sort) {
            num2 = -1;
          }
          num = num2;
        }
        return num;
      };
      obj.Topo.prototype._sort = function() {
        let length4;
        const self = this;
        obj = {};
        Object.create(null);
        obj = Object.create(null);
        let num = 0;
        if (0 < this._items.length) {
          do {
            let tmp3 = self._items[num];
            ({ seq, group } = tmp3);
            items = obj[group];
            if (!items) {
              items = [];
            }
            obj[group] = items;
            let arr1 = obj[group];
            let arr = arr1.push(seq);
            ({ before: obj[seq], after } = tmp3);
            for (let num2 = 0; num2 < after.length; num2 = num2 + 1) {
              let items1 = obj[after[num2]];
              if (!items1) {
                items1 = [];
              }
              obj[after[num2]] = items1.concat(seq);
            }
            num = num + 1;
          } while (num < self._items.length);
        }
        const keys = Object.keys(obj);
        for (let num3 = 0; num3 < keys.length; num3 = num3 + 1) {
          let tmp7 = keys[num3];
          let items2 = [];
          let _Object = Object;
          let keys1 = Object.keys(obj[tmp7]);
          for (let num4 = 0; num4 < keys1.length; num4 = num4 + 1) {
            let tmp9 = obj[tmp7][keys1[num4]];
            let items3 = obj[tmp9];
            if (!items3) {
              items3 = [];
            }
            obj[tmp9] = items3;
            let num5 = 0;
            if (0 < obj[tmp9].length) {
              do {
                arr = items2.push(obj[tmp9][num5]);
                num5 = num5 + 1;
                length = obj[tmp9].length;
              } while (num5 < length);
            }
          }
          obj[tmp7] = items2;
        }
        const keys2 = Object.keys(obj);
        for (let num6 = 0; num6 < keys2.length; num6 = num6 + 1) {
          let tmp12 = keys2[num6];
          if (obj[tmp12]) {
            let num7 = 0;
            if (0 < obj[tmp12].length) {
              do {
                let tmp14 = obj[tmp12][num7];
                let obj1 = obj[tmp14];
                obj[tmp14] = obj1.concat(obj[tmp12]);
                num7 = num7 + 1;
                length2 = obj[tmp12].length;
              } while (num7 < length2);
            }
          }
        }
        obj1 = {};
        const keys3 = Object.keys(obj);
        for (let num8 = 0; num8 < keys3.length; num8 = num8 + 1) {
          let tmp15 = keys3[num8];
          let arr10 = obj[tmp15];
          for (let num9 = 0; num9 < arr10.length; num9 = num9 + 1) {
            let items4 = obj1[arr10[num9]];
            if (!items4) {
              items4 = [];
            }
            obj1[arr10[num9]] = items4.concat(tmp15);
          }
        }
        const obj2 = {};
        const items5 = [];
        for (let num10 = 0; num10 < self._items.length; num10 = num10 + 1) {
          let tmp19 = num10;
          if (obj1[num10]) {
            let num11 = 0;
            tmp19 = null;
            if (0 < self._items.length) {
              while (true) {
                if (true === obj2[num11]) {
                  let sum = num11 + 1;
                  num11 = sum;
                  tmp19 = null;
                  if (sum >= self._items.length) {
                    break;
                  }
                } else {
                  if (!obj1[num11]) {
                    obj1[num11] = [];
                  }
                  let length3 = obj1[num11].length;
                  let num12 = 0;
                  let num13 = 0;
                  let num14 = 0;
                  if (0 < length3) {
                    do {
                      let sum1 = num13;
                      if (items5.indexOf(obj1[num11][num12]) >= 0) {
                        sum1 = num13 + 1;
                      }
                      num12 = num12 + 1;
                      num13 = sum1;
                      num14 = sum1;
                    } while (num12 < length3);
                  }
                  tmp19 = num11;
                  if (num14 === length3) {
                    break;
                  }
                }
                break;
              }
            }
          }
          if (null !== tmp19) {
            let str = tmp19.toString();
            obj2[str] = true;
            arr1 = items5.push(str);
          }
        }
        if (items5.length !== self._items.length) {
          const _Error = Error;
          str = "Invalid dependencies";
          const error = new Error("Invalid dependencies");
          return error;
        } else {
          const obj3 = {};
          let num15 = 0;
          if (0 < self._items.length) {
            do {
              let tmp27 = self._items[num15];
              obj3[tmp27.seq] = tmp27;
              num15 = num15 + 1;
              length4 = self._items.length;
            } while (num15 < length4);
          }
          const items6 = [];
          self._items = items5.map((item) => {
            items6.push(obj3[item].node);
            return obj3[item];
          });
          self.nodes = items6;
        }
      };
    },
    (arg0, arg1, fn) => {
      obj = fn(1);
      obj = { abortEarly: obj.boolean(), convert: obj.boolean(), allowUnknown: obj.boolean(), skipFunctions: obj.boolean(), stripUnknown: null, language: null, presence: null, raw: null, context: null, strip: null, noDefaults: null };
      items = [obj.boolean(), ];
      obj = { arrays: obj.boolean(), objects: obj.boolean() };
      let objectResult = obj.object(obj);
      items[1] = objectResult.or("arrays", "objects");
      obj.stripUnknown = items;
      obj.language = obj.object();
      obj.presence = obj.string().only("required", "optional", "forbidden", "ignore");
      obj.raw = obj.boolean();
      obj.context = obj.object();
      obj.strip = obj.boolean();
      obj.noDefaults = obj.boolean();
      objectResult = obj.object(obj);
      arg1.options = objectResult.strict();
    },
    (arg0, arg1, fn) => {
      const tmp = fn(14);
      const _class = fn(2);
      closure_0 = tmp;
      class _class {
        constructor() {
          self = this;
          if (this instanceof _class) {
            tmp6 = closure_0;
            call = closure_0.call;
            tmp7 = typeof call === "unknown" ? tmp6() : call(self);
            if (self) {
              tmp13 = self;
              if (tmp7) {
                if (typeof tmp7 === "object") {
                  tmp13 = tmp7;
                } else {
                  tmp13 = self;
                }
              }
              str3 = "lazy";
              tmp13._type = "lazy";
              return tmp13;
            } else {
              tmp8 = globalThis;
              _ReferenceError = ReferenceError;
              tmp9 = new.target;
              str2 = "this hasn't been initialised - super() hasn't been called";
              tmp10 = new.target;
              referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
              tmp12 = referenceError;
              throw referenceError;
            }
          } else {
            tmp = globalThis;
            _TypeError = TypeError;
            tmp2 = new.target;
            str = "Cannot call a class as a function";
            tmp3 = new.target;
            typeError = new TypeError("Cannot call a class as a function");
            tmp5 = typeError;
            throw typeError;
          }
        }
        _base(arg0, arg1, arg2) {
          self = this;
          _validateResult = { value: module };
          lazy = this._flags.lazy;
          if (lazy) {
            lazyResult = lazy();
            tmp5 = closure_0;
            if (lazyResult instanceof closure_0) {
              _validateResult = lazyResult._validate(module, exports, fn);
            } else {
              tmp6 = null;
              str2 = "lazy.schema";
              tmp7 = self;
              tmp8 = exports;
              tmp9 = fn;
              _validateResult.errors = self.createError("lazy.schema", null, exports, fn);
            }
            return _validateResult;
          } else {
            tmp = null;
            str = "lazy.base";
            tmp2 = self;
            tmp3 = exports;
            tmp4 = fn;
            _validateResult.errors = self.createError("lazy.base", null, exports, fn);
            return _validateResult;
          }
        }
        set(arg0) {
          assertResult = _class.assert(typeof module === "function", "You must provide a function as first argument");
          cloneResult = this.clone();
          cloneResult._flags.lazy = module;
          return cloneResult;
        }
      }
      if (typeof tmp !== "function") {
        if (null !== tmp) {
          let _TypeError = TypeError;
          let typeError = new TypeError("Super expression must either be null or a function, not " + typeof tmp);
          throw typeError;
        }
      }
      let prototype = tmp;
      if (tmp) {
        prototype = tmp.prototype;
      }
      obj = { constructor: { value: _class, enumerable: false, writable: true, configurable: true } };
      _class.prototype = Object.create(prototype, obj);
      if (tmp) {
        const _Object = Object;
        const _Object2 = Object;
        if (Object.setPrototypeOf) {
          _Object2.setPrototypeOf(_class, tmp);
        } else {
          const ownPropertyNames = _Object2.getOwnPropertyNames(tmp);
          if (0 < ownPropertyNames.length) {
            do {
              let tmp2 = ownPropertyNames[num];
              let _Object3 = Object;
              let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(tmp, tmp2);
              let configurable = ownPropertyDescriptor;
              if (ownPropertyDescriptor) {
                configurable = ownPropertyDescriptor.configurable;
              }
              if (configurable) {
                configurable = undefined === _class[tmp2];
              }
              if (configurable) {
                let _Object4 = Object;
                let definePropertyResult = Object.defineProperty(_class, tmp2, ownPropertyDescriptor);
              }
              class _class {
                constructor() {
                  self = this;
                  if (this instanceof _class) {
                    tmp6 = closure_0;
                    call = closure_0.call;
                    tmp7 = typeof call === "unknown" ? tmp6() : call(self);
                    if (self) {
                      tmp13 = self;
                      if (tmp7) {
                        if (typeof tmp7 === "object") {
                          tmp13 = tmp7;
                        } else {
                          tmp13 = self;
                        }
                      }
                      str3 = "lazy";
                      tmp13._type = "lazy";
                      return tmp13;
                    } else {
                      tmp8 = globalThis;
                      _ReferenceError = ReferenceError;
                      tmp9 = new.target;
                      str2 = "this hasn't been initialised - super() hasn't been called";
                      tmp10 = new.target;
                      referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      tmp12 = referenceError;
                      throw referenceError;
                    }
                  } else {
                    tmp = globalThis;
                    _TypeError = TypeError;
                    tmp2 = new.target;
                    str = "Cannot call a class as a function";
                    tmp3 = new.target;
                    typeError = new TypeError("Cannot call a class as a function");
                    tmp5 = typeError;
                    throw typeError;
                  }
                }
                _base(arg0, arg1, arg2) {
                  self = this;
                  _validateResult = { value: module };
                  lazy = this._flags.lazy;
                  if (lazy) {
                    lazyResult = lazy();
                    tmp5 = closure_0;
                    if (lazyResult instanceof closure_0) {
                      _validateResult = lazyResult._validate(module, exports, fn);
                    } else {
                      tmp6 = null;
                      str2 = "lazy.schema";
                      tmp7 = self;
                      tmp8 = exports;
                      tmp9 = fn;
                      _validateResult.errors = self.createError("lazy.schema", null, exports, fn);
                    }
                    return _validateResult;
                  } else {
                    tmp = null;
                    str = "lazy.base";
                    tmp2 = self;
                    tmp3 = exports;
                    tmp4 = fn;
                    _validateResult.errors = self.createError("lazy.base", null, exports, fn);
                    return _validateResult;
                  }
                }
                set(arg0) {
                  assertResult = _class.assert(typeof module === "function", "You must provide a function as first argument");
                  cloneResult = this.clone();
                  cloneResult._flags.lazy = module;
                  return cloneResult;
                }
              }
            } while (num < ownPropertyNames.length);
          }
        }
      }
      obj = { Lazy: _class };
      let lazy = new obj.Lazy();
      module.exports = lazy;
    },
    (arg0, arg1, fn) => {
      if (typeof Symbol === "function") {
        let _Symbol = Symbol;
        if (typeof Symbol.iterator === "symbol") {
          fn = (arg0) => typeof arg0;
        }
        let tmp2 = fn(14);
        const _class = tmp2;
        closure_2 = fn(19);
        closure_3 = fn(2);
        obj = {
          fastSplice(substr, diff5) {
              let length;
              let sum;
              let tmp = diff5;
              if (diff5 < substr.length) {
                do {
                  let tmp2 = +tmp;
                  sum = tmp2 + 1;
                  substr[tmp2] = substr[sum];
                  tmp = sum;
                  length = substr.length;
                } while (sum < length);
              }
              substr.length = substr.length - 1;
            }
        };
        closure_0 = tmp2;
        class _class {
          constructor() {
            self = this;
            if (this instanceof _class) {
              tmp6 = closure_0;
              call = closure_0.call;
              tmp7 = typeof call === "unknown" ? tmp6() : call(self);
              if (self) {
                tmp13 = self;
                if (tmp7) {
                  if (typeof tmp7 === "object") {
                    tmp13 = tmp7;
                  } else {
                    tmp13 = self;
                  }
                }
                str3 = "array";
                tmp13._type = "array";
                tmp13._inner.items = [];
                tmp13._inner.ordereds = [];
                tmp13._inner.inclusions = [];
                tmp13._inner.exclusions = [];
                tmp13._inner.requireds = [];
                flag = false;
                tmp13._flags.sparse = false;
                return tmp13;
              } else {
                tmp8 = globalThis;
                _ReferenceError = ReferenceError;
                tmp9 = new.target;
                str2 = "this hasn't been initialised - super() hasn't been called";
                tmp10 = new.target;
                referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                tmp12 = referenceError;
                throw referenceError;
              }
            } else {
              tmp = globalThis;
              _TypeError = TypeError;
              tmp2 = new.target;
              str = "Cannot call a class as a function";
              tmp3 = new.target;
              typeError = new TypeError("Cannot call a class as a function");
              tmp5 = typeError;
              throw typeError;
            }
          }
          _base(arg0, arg1, arg2) {
            obj = { value: module };
            convert = typeof module === "string";
            if (typeof module === "string") {
              convert = fn.convert;
            }
            if (convert) {
              tmp = closure_4;
              safeParseResult = closure_4.safeParse(module, obj);
            }
            self = this;
            isArray = Array.isArray(obj.value);
            tmp4 = fn.convert && self._flags.single && !isArray;
            flag = isArray;
            if (tmp4) {
              items = [];
              items[0] = obj.value;
              obj.value = items;
              flag = true;
            }
            if (flag) {
              if (!self._inner.inclusions.length) {
                if (!self._inner.exclusions.length) {
                  if (!self._inner.requireds.length) {
                    if (!self._inner.ordereds.length) {
                    }
                    return obj;
                  }
                }
              }
              if (isArray) {
                value = obj.value;
                num = 0;
                obj.value = value.slice(0);
              }
              _checkItems = self._checkItems;
              call = _checkItems.call;
              value = obj.value;
              if (typeof call === "unknown") {
                tmp9 = self;
                tmp10 = value;
                tmp11 = isArray;
                tmp12 = exports;
                tmp13 = fn;
                _checkItemsResult = _checkItems(value, isArray, exports, fn);
              } else {
                tmp21 = _checkItems;
                tmp22 = self;
                tmp23 = value;
                tmp24 = isArray;
                tmp25 = exports;
                tmp26 = fn;
                _checkItemsResult = call(self, value, isArray, exports, fn);
              }
              obj.errors = _checkItemsResult;
              if (obj.errors) {
                if (isArray) {
                  if (fn.convert) {
                    if (self._flags.single) {
                      items1 = [];
                      items1[0] = obj.value;
                      obj.value = items1;
                      _checkItems2 = self._checkItems;
                      call2 = _checkItems2.call;
                      ({ value: value2, errors } = obj);
                      if (typeof call2 === "unknown") {
                        tmp15 = self;
                        tmp16 = value2;
                        tmp17 = isArray;
                        tmp18 = exports;
                        tmp19 = fn;
                        _checkItems2Result = _checkItems2(value2, isArray, exports, fn);
                      } else {
                        tmp27 = _checkItems2;
                        tmp28 = self;
                        tmp29 = value2;
                        tmp30 = isArray;
                        tmp31 = exports;
                        tmp32 = fn;
                        _checkItems2Result = call2(self, value2, isArray, exports, fn);
                      }
                      obj.errors = _checkItems2Result;
                      if (obj.errors) {
                        obj.errors = errors;
                        obj.value = obj.value[0];
                      }
                    }
                  }
                }
              }
            } else {
              tmp5 = null;
              str = "array.base";
              tmp6 = self;
              tmp7 = exports;
              tmp8 = fn;
              obj.errors = self.createError("array.base", null, exports, fn);
              return obj;
            }
            return;
          }
          _checkItems(arg0, arg1, arg2, arg3) {
            self = this;
            items = [];
            requireds = this._inner.requireds;
            substr = requireds.slice();
            ordereds = this._inner.ordereds;
            substr1 = ordereds.slice();
            inclusions = this._inner.inclusions;
            combined = inclusions.concat(substr);
            length = module.length;
            num = 0;
            if (0 < length) {
              while (true) {
                tmp = module[num];
                tmp2 = num;
                tmp3 = length;
                key = num;
                if (!exports) {
                  key = fn.key;
                }
                obj = { key: null, path: null, parent: null, reference: null };
                obj.key = key;
                path = fn.path;
                if (exports) {
                  str = "";
                  if (path) {
                    str = `${fn.path}.`;
                  }
                  sum = str + num;
                } else {
                  sum = path;
                }
                obj.path = sum;
                ({ parent: obj.parent, reference: obj.reference } = fn);
                if (!self._flags.sparse) {
                  if (undefined === tmp) {
                    obj = { key: null, path: null, pos: null };
                    obj.key = fn.key;
                    obj.path = obj.path;
                    obj.pos = num;
                    tmp5 = self;
                    str2 = "array.sparse";
                    tmp6 = null;
                    tmp7 = obj;
                    tmp8 = arg3;
                    arr = items.push(self.createError("array.sparse", null, obj, arg3));
                    diff = num;
                    diff1 = length;
                    if (arg3.abortEarly) {
                      break;
                    }
                  }
                  num = diff + 1;
                  length = diff1;
                }
                num2 = 0;
                flag = false;
                if (0 < self._inner.exclusions.length) {
                  obj3 = self._inner.exclusions[num2];
                  tmp12 = num2;
                  while (obj3._validate(tmp, obj, {}).errors) {
                    sum1 = num2 + 1;
                    num2 = sum1;
                    flag = false;
                  }
                  str3 = "array.excludesSingle";
                  if (exports) {
                    str3 = "array.excludes";
                  }
                  obj1 = { pos: null, value: null };
                  obj1.pos = num;
                  obj1.value = tmp;
                  obj2 = { key: null, path: null };
                  obj2.key = fn.key;
                  obj2.path = obj.path;
                  tmp13 = self;
                  tmp14 = str3;
                  tmp15 = obj1;
                  tmp16 = obj2;
                  tmp17 = arg3;
                  arr1 = items.push(self.createError(str3, obj1, obj2, arg3));
                  flag = true;
                  if (arg3.abortEarly) {
                    return items;
                  }
                }
                diff = num;
                diff1 = length;
                if (!flag) {
                  if (self._inner.ordereds.length) {
                    if (substr1.length > 0) {
                      arr2 = substr1.shift();
                      iter2 = arr2._validate(tmp, obj, arg3);
                      if (iter2.errors) {
                        obj3 = { pos: null, reason: null, value: null };
                        obj3.pos = num;
                        obj3.reason = iter2.errors;
                        obj3.value = tmp;
                        obj4 = { key: null, path: null };
                        obj4.key = fn.key;
                        obj4.path = obj.path;
                        tmp74 = self;
                        str10 = "array.ordered";
                        tmp75 = obj3;
                        tmp76 = obj4;
                        tmp77 = arg3;
                        arr3 = items.push(self.createError("array.ordered", obj3, obj4, arg3));
                        diff = num;
                        diff1 = length;
                        if (arg3.abortEarly) {
                          return items;
                        }
                      } else if (arr2._flags.strip) {
                        tmp72 = closure_4;
                        fastSpliceResult = closure_4.fastSplice(module, num);
                        diff = num - 1;
                        diff1 = length - 1;
                      } else {
                        if (!self._flags.sparse) {
                          if (undefined === iter2.value) {
                            obj5 = { key: null, path: null, pos: null };
                            obj5.key = fn.key;
                            obj5.path = obj.path;
                            obj5.pos = num;
                            tmp67 = self;
                            str9 = "array.sparse";
                            tmp68 = null;
                            tmp69 = obj5;
                            tmp70 = arg3;
                            arr4 = items.push(self.createError("array.sparse", null, obj5, arg3));
                            diff = num;
                            diff1 = length;
                            if (arg3.abortEarly) {
                              return items;
                            }
                          }
                        }
                        module[num] = iter2.value;
                        diff = num;
                        diff1 = length;
                      }
                    } else if (!self._inner.items.length) {
                      obj6 = { pos: null, limit: null };
                      obj6.pos = num;
                      obj6.limit = self._inner.ordereds.length;
                      obj7 = { key: null, path: null };
                      obj7.key = fn.key;
                      obj7.path = obj.path;
                      tmp20 = self;
                      str4 = "array.orderedLength";
                      tmp21 = obj6;
                      tmp22 = obj7;
                      tmp23 = arg3;
                      arr5 = items.push(self.createError("array.orderedLength", obj6, obj7, arg3));
                      diff = num;
                      diff1 = length;
                      if (arg3.abortEarly) {
                        return items;
                      }
                    }
                  }
                  items1 = [];
                  length2 = substr.length;
                  num3 = 0;
                  flag2 = false;
                  if (0 < length2) {
                    obj8 = substr[num3];
                    iter = obj8._validate(tmp, obj, arg3);
                    items1[num3] = iter;
                    tmp25 = num3;
                    while (iter.errors) {
                      sum2 = num3 + 1;
                      num3 = sum2;
                      flag2 = false;
                    }
                    module[num] = iter.value;
                    tmp26 = closure_4;
                    fastSpliceResult1 = closure_4.fastSplice(substr, num3);
                    diff2 = length2 - 1;
                    flag2 = true;
                    if (!self._flags.sparse) {
                      flag2 = true;
                      if (undefined === iter.value) {
                        obj8 = { key: null, path: null, pos: null };
                        obj8.key = fn.key;
                        obj8.path = obj.path;
                        obj8.pos = num;
                        tmp29 = self;
                        str5 = "array.sparse";
                        tmp30 = null;
                        tmp31 = obj8;
                        tmp32 = arg3;
                        arr6 = items.push(self.createError("array.sparse", null, obj8, arg3));
                        flag2 = true;
                        if (arg3.abortEarly) {
                          return items;
                        }
                      }
                    }
                  }
                  diff = num;
                  diff1 = length;
                  if (!flag2) {
                    tmp35 = arg3.stripUnknown;
                    if (tmp35) {
                      tmp36 = true === arg3.stripUnknown || arg3.stripUnknown.arrays;
                      tmp35 = tmp36;
                    }
                    length3 = combined.length;
                    num4 = 0;
                    flag3 = flag2;
                    diff5 = num;
                    diff6 = length;
                    flag4 = flag;
                    if (0 < length3) {
                      while (true) {
                        obj10 = combined[num4];
                        index = substr.indexOf(obj10);
                        tmp40 = num4;
                        if (-1 !== index) {
                          tmp50 = items1[index];
                        } else {
                          iter3 = obj10._validate(tmp, obj, arg3);
                          tmp50 = iter3;
                          if (!iter3.errors) {
                            if (obj10._flags.strip) {
                              tmp48 = closure_4;
                              fastSpliceResult2 = closure_4.fastSplice(module, num);
                              diff3 = num - 1;
                              diff4 = length - 1;
                              flag5 = flag;
                            } else {
                              if (!self._flags.sparse) {
                                if (undefined === iter3.value) {
                                  obj9 = { key: null, path: null, pos: null };
                                  obj9.key = fn.key;
                                  obj9.path = obj.path;
                                  obj9.pos = num;
                                  tmp41 = self;
                                  str6 = "array.sparse";
                                  tmp42 = null;
                                  tmp43 = obj9;
                                  tmp44 = arg3;
                                  arr7 = items.push(self.createError("array.sparse", null, obj9, arg3));
                                  diff3 = num;
                                  diff4 = length;
                                  flag5 = true;
                                }
                              }
                              module[num] = iter3.value;
                              diff3 = num;
                              diff4 = length;
                              flag5 = flag;
                            }
                            diff5 = diff3;
                            diff6 = diff4;
                            flag4 = flag5;
                            flag3 = true;
                          }
                        }
                        if (1 === length3) {
                          break;
                        } else {
                          num4 = num4 + 1;
                          flag3 = flag2;
                          diff5 = num;
                          diff6 = length;
                          flag4 = flag;
                        }
                      }
                      if (tmp35) {
                        tmp57 = closure_4;
                        fastSpliceResult3 = closure_4.fastSplice(module, num);
                        diff5 = num - 1;
                        diff6 = length - 1;
                        flag3 = true;
                        flag4 = flag;
                      } else {
                        str7 = "array.includesOneSingle";
                        if (exports) {
                          str7 = "array.includesOne";
                        }
                        obj10 = { pos: null, reason: null, value: null };
                        obj10.pos = num;
                        obj10.reason = tmp50.errors;
                        obj10.value = tmp;
                        obj11 = { key: null, path: null };
                        obj11.key = fn.key;
                        obj11.path = obj.path;
                        tmp51 = self;
                        tmp52 = str7;
                        tmp53 = obj10;
                        tmp54 = obj11;
                        tmp55 = arg3;
                        arr8 = items.push(self.createError(str7, obj10, obj11, arg3));
                        flag3 = flag2;
                        diff5 = num;
                        diff6 = length;
                        flag4 = true;
                        if (arg3.abortEarly) {
                          return items;
                        }
                      }
                    }
                    diff = diff5;
                    diff1 = diff6;
                    if (!flag4) {
                      diff = diff5;
                      diff1 = diff6;
                      if (self._inner.inclusions.length) {
                        diff = diff5;
                        diff1 = diff6;
                        if (!flag3) {
                          if (tmp35) {
                            tmp65 = closure_4;
                            fastSpliceResult4 = closure_4.fastSplice(module, diff5);
                            diff = diff5 - 1;
                            diff1 = diff6 - 1;
                          } else {
                            str8 = "array.includesSingle";
                            if (exports) {
                              str8 = "array.includes";
                            }
                            obj12 = { pos: null, value: null };
                            obj12.pos = diff5;
                            obj12.value = tmp;
                            obj13 = { key: null, path: null };
                            obj13.key = fn.key;
                            obj13.path = obj.path;
                            tmp59 = self;
                            tmp60 = str8;
                            tmp61 = obj12;
                            tmp62 = obj13;
                            tmp63 = arg3;
                            arr9 = items.push(self.createError(str8, obj12, obj13, arg3));
                            diff = diff5;
                            diff1 = diff6;
                            if (arg3.abortEarly) {
                              return items;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              return items;
            }
            if (substr.length) {
              _fillMissedErrors = self._fillMissedErrors;
              call = _fillMissedErrors.call;
              if (typeof call === "unknown") {
                tmp79 = self;
                tmp80 = items;
                tmp81 = substr;
                tmp82 = fn;
                tmp83 = arg3;
                _fillMissedErrorsResult = _fillMissedErrors(items, substr, fn, arg3);
              } else {
                tmp92 = _fillMissedErrors;
                tmp93 = self;
                tmp94 = items;
                tmp95 = substr;
                tmp96 = fn;
                tmp97 = arg3;
                callResult = call(self, items, substr, fn, arg3);
              }
            }
            if (substr1.length) {
              _fillOrderedErrors = self._fillOrderedErrors;
              call2 = _fillOrderedErrors.call;
              if (typeof call2 === "unknown") {
                tmp85 = self;
                tmp86 = items;
                tmp87 = substr1;
                tmp88 = fn;
                tmp89 = arg3;
                _fillOrderedErrorsResult = _fillOrderedErrors(items, substr1, fn, arg3);
              } else {
                tmp99 = _fillOrderedErrors;
                tmp100 = self;
                tmp101 = items;
                tmp102 = substr1;
                tmp103 = fn;
                tmp104 = arg3;
                call2Result = call2(self, items, substr1, fn, arg3);
              }
            }
            tmp91 = null;
            if (items.length) {
              tmp91 = items;
            }
            return tmp91;
          }
          describe() {
            self = this;
            describe = _class.prototype.describe;
            call = describe.call;
            tmp = typeof call === "unknown" ? describe() : call(self);
            if (self._inner.ordereds.length) {
              tmp.orderedItems = [];
              num = 0;
              num2 = 1;
              if (0 < self._inner.ordereds.length) {
                do {
                  orderedItems = tmp.orderedItems;
                  obj = self._inner.ordereds[num];
                  arr = orderedItems.push(obj.describe());
                  num = num + 1;
                  length = self._inner.ordereds.length;
                } while (num < length);
              }
            }
            if (self._inner.items.length) {
              tmp.items = [];
              num3 = 0;
              num4 = 1;
              if (0 < self._inner.items.length) {
                do {
                  items = tmp.items;
                  obj2 = self._inner.items[num3];
                  arr1 = items.push(obj2.describe());
                  num3 = num3 + 1;
                  length2 = self._inner.items.length;
                } while (num3 < length2);
              }
            }
            return tmp;
          }
          items() {
            cloneResult = this.clone();
            closure_0 = cloneResult;
            slice = Array.prototype.slice;
            call = slice.call;
            tmp2 = closure_3;
            if (typeof call === "unknown") {
              tmp3 = arguments;
              substr = slice();
            } else {
              tmp6 = arguments;
              tmp7 = arguments;
              substr = call(arguments);
            }
            flattenResult = closure_3.flatten(substr);
            item = flattenResult.forEach((item, path) => {
              try {
                const schemaResult = closure_2.schema(item);
                items = cloneResult._inner.items;
                items.push(schemaResult);
                if ("required" === schemaResult._flags.presence) {
                  const requireds = cloneResult._inner.requireds;
                  requireds.push(schemaResult);
                } else if ("forbidden" === schemaResult._flags.presence) {
                  const exclusions = cloneResult._inner.exclusions;
                  exclusions.push(schemaResult.optional());
                } else {
                  const inclusions = cloneResult._inner.inclusions;
                  inclusions.push(schemaResult);
                }
              } catch (obj2) {
                if (obj2.hasOwnProperty("path")) {
                  obj2.path = path + "." + obj2.path;
                } else {
                  obj2.path = path;
                }
                obj2.message = obj2.message + "(" + obj2.path + ")";
                throw obj2;
              }
            });
            return cloneResult;
          }
          ordered() {
            cloneResult = this.clone();
            closure_0 = cloneResult;
            slice = Array.prototype.slice;
            call = slice.call;
            tmp2 = closure_3;
            if (typeof call === "unknown") {
              tmp3 = arguments;
              substr = slice();
            } else {
              tmp6 = arguments;
              tmp7 = arguments;
              substr = call(arguments);
            }
            flattenResult = closure_3.flatten(substr);
            item = flattenResult.forEach((item, path) => {
              try {
                const ordereds = cloneResult._inner.ordereds;
                ordereds.push(closure_2.schema(item));
              } catch (obj) {
                if (obj.hasOwnProperty("path")) {
                  obj.path = path + "." + obj.path;
                } else {
                  obj.path = path;
                }
                obj.message = obj.message + "(" + obj.path + ")";
                throw obj;
              }
            });
            return cloneResult;
          }
          min(arg0) {
            closure_0 = module;
            tmp = closure_3;
            isIntegerResult = closure_3.isInteger(module);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = module >= 0;
            }
            assertResult = closure_3.assert(isIntegerResult, "limit must be a positive integer");
            return this._test("min", module, function(value, mergeResult, concatSettingsResult) {
              let error = value;
              if (value.length < closure_0) {
                const self = this;
                obj = { limit: tmp, value };
                const self2 = this;
                error = this.createError("array.min", obj, mergeResult, concatSettingsResult);
              }
              return error;
            });
          }
          max(arg0) {
            closure_0 = module;
            tmp = closure_3;
            isIntegerResult = closure_3.isInteger(module);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = module >= 0;
            }
            assertResult = closure_3.assert(isIntegerResult, "limit must be a positive integer");
            return this._test("max", module, function(value, mergeResult, concatSettingsResult) {
              let error = value;
              if (value.length > closure_0) {
                const self = this;
                obj = { limit: tmp, value };
                const self2 = this;
                error = this.createError("array.max", obj, mergeResult, concatSettingsResult);
              }
              return error;
            });
          }
          length(arg0) {
            closure_0 = module;
            tmp = closure_3;
            isIntegerResult = closure_3.isInteger(module);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = module >= 0;
            }
            assertResult = closure_3.assert(isIntegerResult, "limit must be a positive integer");
            return this._test("length", module, function(value, mergeResult, concatSettingsResult) {
              let error = value;
              if (value.length !== closure_0) {
                const self = this;
                obj = { limit: tmp, value };
                const self2 = this;
                error = this.createError("array.length", obj, mergeResult, concatSettingsResult);
              }
              return error;
            });
          }
          unique(arg0) {
            deepEqual = module;
            deepEqual = module;
            closure_1 = module;
            if (!module) {
              tmp = closure_3;
              deepEqual = closure_3.deepEqual;
            }
            assertResult = closure_3.assert(typeof deepEqual === "function", "comparator must be a function");
            return this._test("unique", undefined, function(arg0, mergeResult, concatSettingsResult) {
              let tmp;
              const self = this;
              obj = { string: {}, number: {}, undefined: {}, boolean: {}, object: [], function: [], custom: [] };
              let num = 0;
              if (0 < arg0.length) {
                while (true) {
                  tmp = arg0[num];
                  let str = "undefined";
                  if (undefined !== tmp) {
                    str = deepEqual(tmp);
                  }
                  let arr = closure_1 ? obj.custom : obj[str];
                  if (arr) {
                    let _Array = Array;
                    if (Array.isArray(arr)) {
                      let num2 = 0;
                      if (0 < arr.length) {
                        while (!deepEqual(arr[num2], tmp)) {
                          num2 = num2 + 1;
                          continue;
                        }
                        obj = { pos: num, value: tmp };
                        let str3 = "array.unique";
                        return self.createError("array.unique", obj, mergeResult, concatSettingsResult);
                      }
                      arr = arr.push(tmp);
                    } else if (arr[tmp]) {
                      break;
                    } else {
                      arr[tmp] = true;
                    }
                  }
                  num = num + 1;
                }
                obj = { pos: num, value: tmp };
                return self.createError("array.unique", obj, mergeResult, concatSettingsResult);
              }
              return arg0;
            });
          }
          sparse(arg0) {
            cloneResult = this.clone();
            tmp2 = undefined === module;
            if (!tmp2) {
              tmp2 = module;
            }
            cloneResult._flags.sparse = tmp2;
            return cloneResult;
          }
          single(arg0) {
            cloneResult = this.clone();
            tmp2 = undefined === module;
            if (!tmp2) {
              tmp2 = module;
            }
            cloneResult._flags.single = tmp2;
            return cloneResult;
          }
          _fillMissedErrors(arg0, arg1, arg2, arg3) {
            items = [];
            num = 0;
            num2 = 0;
            num3 = 0;
            if (0 < exports.length) {
              do {
                obj = exports[num2];
                _getLabelResult = obj._getLabel();
                tmp2 = num2;
                tmp3 = num3;
                if (_getLabelResult) {
                  arr = items.push(_getLabelResult);
                  sum = num3;
                } else {
                  sum = num3 + 1;
                }
                num2 = num2 + 1;
                num3 = sum;
                num = sum;
              } while (num2 < exports.length);
            }
            self = this;
            push = module.push;
            createError = this.createError;
            if (items.length) {
              if (num) {
                obj = { knownMisses: null, unknownMisses: null };
                obj.knownMisses = items;
                obj.unknownMisses = num;
                obj1 = { key: null, path: null };
                ({ key: obj7.key, path: obj7.path } = fn);
                str3 = "array.includesRequiredBoth";
                tmp16 = self;
                tmp17 = obj;
                tmp18 = obj1;
                tmp19 = arg3;
                arr1 = push(createError("array.includesRequiredBoth", obj, obj1, arg3));
              } else {
                obj2 = { knownMisses: null };
                obj2.knownMisses = items;
                obj3 = { key: null, path: null };
                ({ key: obj5.key, path: obj5.path } = fn);
                str2 = "array.includesRequiredKnowns";
                tmp11 = self;
                tmp12 = obj2;
                tmp13 = obj3;
                tmp14 = arg3;
                arr2 = push(createError("array.includesRequiredKnowns", obj2, obj3, arg3));
              }
            } else {
              obj4 = { unknownMisses: null };
              obj4.unknownMisses = num;
              obj5 = { key: null, path: null };
              ({ key: obj3.key, path: obj3.path } = fn);
              str = "array.includesRequiredUnknowns";
              tmp6 = self;
              tmp7 = obj4;
              tmp8 = obj5;
              tmp9 = arg3;
              arr3 = push(createError("array.includesRequiredUnknowns", obj4, obj5, arg3));
            }
            return;
          }
          _fillOrderedErrors(arg0, arg1, arg2, arg3) {
            items = [];
            for (let num = 0; num < exports.length; num = num + 1) {
              tmp = closure_3;
              tmp2 = num;
              if ("required" === closure_3.reach(exports[num], "_flags.presence")) {
                arr = items.push(exports[num]);
              }
            }
            if (items.length) {
              self = this;
              tmp4 = module;
              tmp5 = fn;
              tmp6 = arg3;
              _fillMissedErrors = this._fillMissedErrors;
              call = _fillMissedErrors.call;
              if (typeof call === "unknown") {
                tmp7 = self;
                tmp8 = module;
                tmp9 = items;
                tmp10 = fn;
                tmp11 = arg3;
                _fillMissedErrorsResult = _fillMissedErrors(module, items, fn, arg3);
              } else {
                tmp13 = _fillMissedErrors;
                tmp14 = self;
                tmp15 = module;
                tmp16 = items;
                tmp17 = fn;
                tmp18 = arg3;
                callResult = call(self, module, items, fn, arg3);
              }
            }
            return;
          }
        }
        if (typeof tmp2 !== "function") {
          if (null !== tmp2) {
            let _TypeError = TypeError;
            let typeError = new TypeError("Super expression must either be null or a function, not " + typeof tmp2);
            throw typeError;
          }
        }
        let prototype = tmp2;
        if (tmp2) {
          prototype = tmp2.prototype;
        }
        obj = { constructor: null };
        obj = { value: _class, enumerable: false, writable: true, configurable: true };
        obj.constructor = obj;
        _class.prototype = Object.create(prototype, obj);
        if (tmp2) {
          const _Object = Object;
          const _Object2 = Object;
          if (Object.setPrototypeOf) {
            _Object2.setPrototypeOf(_class, tmp2);
          } else {
            const ownPropertyNames = _Object2.getOwnPropertyNames(tmp2);
            for (let num4 = 0; num4 < ownPropertyNames.length; num4 = num4 + 1) {
              let tmp3 = ownPropertyNames[num4];
              let _Object3 = Object;
              let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(tmp2, tmp3);
              let configurable = ownPropertyDescriptor;
              if (ownPropertyDescriptor) {
                configurable = ownPropertyDescriptor.configurable;
              }
              if (configurable) {
                configurable = undefined === _class[tmp3];
              }
              if (configurable) {
                let _Object4 = Object;
                let definePropertyResult = Object.defineProperty(_class, tmp3, ownPropertyDescriptor);
              }
            }
          }
        }
        obj.Array = _class;
        obj.safeParse = (arg0, arg1) => {
          try {
            const _JSON = JSON;
            const parsed = JSON.parse(arg0);
            const _Array = Array;
            if (Array.isArray(parsed)) {
              arg1.value = parsed;
            }
          } catch (err) {
          }
        };
        const array = new obj.Array();
        module.exports = array;
      }
      fn = (arg0) => {
        if (arg0) {
          const _Symbol = Symbol;
          if (typeof Symbol === "function") {
            const _Symbol3 = Symbol;
            if (arg0.constructor === Symbol) {
              const _Symbol2 = Symbol;
              let str = "symbol";
            }
            return str;
          }
        }
        str = typeof arg0;
      };
    },
    (arg0, arg1, fn) => {
      closure_0 = arg0;
      closure_1 = fn;
      fn = (_Buffer) => {
        const tmp = closure_1(14);
        const _class = closure_1(2);
        closure_0 = tmp;
        class _class {
          constructor() {
            self = this;
            if (this instanceof _class) {
              tmp6 = closure_0;
              call = closure_0.call;
              tmp7 = typeof call === "unknown" ? tmp6() : call(self);
              if (self) {
                tmp13 = self;
                if (tmp7) {
                  if (typeof tmp7 === "object") {
                    tmp13 = tmp7;
                  } else {
                    tmp13 = self;
                  }
                }
                str3 = "binary";
                tmp13._type = "binary";
                return tmp13;
              } else {
                tmp8 = globalThis;
                _ReferenceError = ReferenceError;
                tmp9 = new.target;
                str2 = "this hasn't been initialised - super() hasn't been called";
                tmp10 = new.target;
                referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                tmp12 = referenceError;
                throw referenceError;
              }
            } else {
              tmp = globalThis;
              _TypeError = TypeError;
              tmp2 = new.target;
              str = "Cannot call a class as a function";
              tmp3 = new.target;
              typeError = new TypeError("Cannot call a class as a function");
              tmp5 = typeError;
              throw typeError;
            }
          }
          _base(arg0, arg1, arg2) {
            self = this;
            obj = { value: _Buffer };
            if (typeof _Buffer === "string") {
              if (arg2.convert) {
                try {
                  tmp = closure_0;
                  tmp2 = new.target;
                  tmp3 = new.target;
                  tmp4 = _Buffer;
                  tmp5 = new closure_0(_Buffer, self._flags.encoding);
                  tmp6 = tmp5;
                  obj.value = tmp5;
                } catch (err) {
                }
              }
            }
            error = null;
            if (!closure_0.isBuffer(obj.value)) {
              tmp8 = arg1;
              str = "binary.base";
              tmp9 = self;
              tmp10 = null;
              tmp11 = arg2;
              error = self.createError("binary.base", null, arg1, arg2);
            }
            obj.errors = error;
            return obj;
          }
          encoding(arg0) {
            assertResult = _class.assert(closure_0.isEncoding(_Buffer), "Invalid encoding:", _Buffer);
            cloneResult = this.clone();
            cloneResult._flags.encoding = _Buffer;
            return cloneResult;
          }
          min(arg0) {
            closure_0 = _Buffer;
            tmp = _class;
            isIntegerResult = _class.isInteger(_Buffer);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = _Buffer >= 0;
            }
            assertResult = _class.assert(isIntegerResult, "limit must be a positive integer");
            return this._test("min", _Buffer, () => { ... });
          }
          max(arg0) {
            closure_0 = _Buffer;
            tmp = _class;
            isIntegerResult = _class.isInteger(_Buffer);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = _Buffer >= 0;
            }
            assertResult = _class.assert(isIntegerResult, "limit must be a positive integer");
            return this._test("max", _Buffer, () => { ... });
          }
          length(arg0) {
            closure_0 = _Buffer;
            tmp = _class;
            isIntegerResult = _class.isInteger(_Buffer);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = _Buffer >= 0;
            }
            assertResult = _class.assert(isIntegerResult, "limit must be a positive integer");
            return this._test("length", _Buffer, () => { ... });
          }
        }
        if (typeof tmp !== "function") {
          if (null !== tmp) {
            let _TypeError = TypeError;
            let typeError = new TypeError("Super expression must either be null or a function, not " + typeof tmp);
            throw typeError;
          }
        }
        let prototype = tmp;
        if (tmp) {
          prototype = tmp.prototype;
        }
        obj = { constructor: { value: _class, enumerable: false, writable: true, configurable: true } };
        _class.prototype = Object.create(prototype, obj);
        if (tmp) {
          const _Object = Object;
          const _Object2 = Object;
          if (Object.setPrototypeOf) {
            _Object2.setPrototypeOf(_class, tmp);
          } else {
            const ownPropertyNames = _Object2.getOwnPropertyNames(tmp);
            let num = 0;
            if (0 < ownPropertyNames.length) {
              while (true) {
                let tmp2 = ownPropertyNames[num];
                let _Object3 = Object;
                let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(tmp, tmp2);
                let configurable = ownPropertyDescriptor;
                if (ownPropertyDescriptor) {
                  configurable = ownPropertyDescriptor.configurable;
                }
                if (configurable) {
                  configurable = undefined === _class[tmp2];
                }
                if (configurable) {
                  let _Object4 = Object;
                  let definePropertyResult = Object.defineProperty(_class, tmp2, ownPropertyDescriptor);
                }
                num = num + 1;
                class _class {
                  constructor() {
                    self = this;
                    if (this instanceof _class) {
                      tmp6 = closure_0;
                      call = closure_0.call;
                      tmp7 = typeof call === "unknown" ? tmp6() : call(self);
                      if (self) {
                        tmp13 = self;
                        if (tmp7) {
                          if (typeof tmp7 === "object") {
                            tmp13 = tmp7;
                          } else {
                            tmp13 = self;
                          }
                        }
                        str3 = "binary";
                        tmp13._type = "binary";
                        return tmp13;
                      } else {
                        tmp8 = globalThis;
                        _ReferenceError = ReferenceError;
                        tmp9 = new.target;
                        str2 = "this hasn't been initialised - super() hasn't been called";
                        tmp10 = new.target;
                        referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        tmp12 = referenceError;
                        throw referenceError;
                      }
                    } else {
                      tmp = globalThis;
                      _TypeError = TypeError;
                      tmp2 = new.target;
                      str = "Cannot call a class as a function";
                      tmp3 = new.target;
                      typeError = new TypeError("Cannot call a class as a function");
                      tmp5 = typeError;
                      throw typeError;
                    }
                  }
                  _base(arg0, arg1, arg2) {
                    self = this;
                    obj = { value: _Buffer };
                    if (typeof _Buffer === "string") {
                      if (arg2.convert) {
                        try {
                          tmp = closure_0;
                          tmp2 = new.target;
                          tmp3 = new.target;
                          tmp4 = _Buffer;
                          tmp5 = new closure_0(_Buffer, self._flags.encoding);
                          tmp6 = tmp5;
                          obj.value = tmp5;
                        } catch (err) {
                        }
                      }
                    }
                    error = null;
                    if (!closure_0.isBuffer(obj.value)) {
                      tmp8 = arg1;
                      str = "binary.base";
                      tmp9 = self;
                      tmp10 = null;
                      tmp11 = arg2;
                      error = self.createError("binary.base", null, arg1, arg2);
                    }
                    obj.errors = error;
                    return obj;
                  }
                  encoding(arg0) {
                    assertResult = _class.assert(closure_0.isEncoding(_Buffer), "Invalid encoding:", _Buffer);
                    cloneResult = this.clone();
                    cloneResult._flags.encoding = _Buffer;
                    return cloneResult;
                  }
                  min(arg0) {
                    closure_0 = _Buffer;
                    tmp = _class;
                    isIntegerResult = _class.isInteger(_Buffer);
                    if (isIntegerResult) {
                      num = 0;
                      isIntegerResult = _Buffer >= 0;
                    }
                    assertResult = _class.assert(isIntegerResult, "limit must be a positive integer");
                    return this._test("min", _Buffer, () => { ... });
                  }
                  max(arg0) {
                    closure_0 = _Buffer;
                    tmp = _class;
                    isIntegerResult = _class.isInteger(_Buffer);
                    if (isIntegerResult) {
                      num = 0;
                      isIntegerResult = _Buffer >= 0;
                    }
                    assertResult = _class.assert(isIntegerResult, "limit must be a positive integer");
                    return this._test("max", _Buffer, () => { ... });
                  }
                  length(arg0) {
                    closure_0 = _Buffer;
                    tmp = _class;
                    isIntegerResult = _class.isInteger(_Buffer);
                    if (isIntegerResult) {
                      num = 0;
                      isIntegerResult = _Buffer >= 0;
                    }
                    assertResult = _class.assert(isIntegerResult, "limit must be a positive integer");
                    return this._test("length", _Buffer, () => { ... });
                  }
                }
              }
            }
          }
        }
        obj = { Binary: _class };
        const binary = new obj.Binary();
        closure_0.exports = binary;
      };
      let call = fn.call;
      const _Buffer = fn(3).Buffer;
      if (typeof call === "unknown") {
        fn(_Buffer);
      } else {
        call(arg1, _Buffer);
      }
    },
    (arg0, arg1) => {
      const exports = { _args: null, _from: "joi@10.0.5", _id: "joi@10.0.5", _inCache: true, _location: "/joi", _nodeVersion: "6.9.1", _npmOperationalInternal: { host: "packages-12-west.internal.npmjs.com", tmp: "tmp/joi-10.0.5.tgz_1480956525182_0.0934728232678026" }, _npmUser: { name: "marsup", email: "nicolas@morel.io" }, _npmVersion: "3.10.10", _phantomChildren: {}, _requested: { raw: "joi@10.0.5", scope: null, escapedName: "joi", name: "joi", rawSpec: "10.0.5", spec: "10.0.5", type: "version" }, _requiredBy: ["#DEV:/"], _resolved: "https://registry.npmjs.org/joi/-/joi-10.0.5.tgz", _shasum: "2e43af9bf24d2d5745852e9ab968c85be357bd6a", _shrinkwrap: null, _spec: "joi@10.0.5", _where: "/Users/jeff/projects/joi-browser", bugs: { url: "https://github.com/hapijs/joi/issues" }, dependencies: { hoek: "4.x.x", isemail: "2.x.x", items: "2.x.x", topo: "2.x.x" }, description: "Object schema validation", devDependencies: { code: "4.x.x", lab: "11.x.x", "markdown-toc": "0.13.x" }, directories: {}, dist: { shasum: "2e43af9bf24d2d5745852e9ab968c85be357bd6a", tarball: "https://registry.npmjs.org/joi/-/joi-10.0.5.tgz" }, engines: { node: ">=4.0.0" }, gitHead: "abfe727885af779a676e6a205ee15cdc8b435691", homepage: "https://github.com/hapijs/joi", keywords: ["hapi", "schema", "validation"], license: "BSD-3-Clause", main: "lib/index.js", maintainers: null, name: "joi", optionalDependencies: {}, readme: "ERROR: No README data found!", repository: { type: "git", url: "git://github.com/hapijs/joi.git" }, scripts: { test: "lab -t 100 -a code -L", "test-cov-html": "lab -r html -o coverage.html -a code", "test-debug": "node $NODE_DEBUG_OPTION ./node_modules/.bin/lab -a code", toc: "node generate-readme-toc.js", version: "npm run toc && git add API.md README.md" }, version: "10.0.5" };
      items = [{ raw: "joi@10.0.5", scope: null, escapedName: "joi", name: "joi", rawSpec: "10.0.5", spec: "10.0.5", type: "version" }, "/Users/jeff/projects/joi-browser"];
      const items1 = [items];
      exports._args = items1;
      const items2 = [{ name: "hueniverse", email: "eran@hueniverse.com" }, { name: "marsup", email: "marsup@gmail.com" }];
      exports.maintainers = items2;
      arg0.exports = exports;
    }
  ];
  function __webpack_require__(id) {
    if (obj[id]) {
      return tmp[id].exports;
    } else {
      obj = { exports: {}, id, loaded: false };
      tmp[id] = obj;
      const call = tmp3.call;
      ({ exports: _exports, exports: _exports2 } = obj);
      if (typeof call === "unknown") {
        tmp3(obj, _exports2, __webpack_require__);
      } else {
        call(_exports, obj, _exports2, __webpack_require__);
      }
      obj.loaded = true;
      return obj.exports;
    }
  }
  let exports = {};
  __webpack_require__.m = items;
  __webpack_require__.c = exports;
  __webpack_require__.p = "";
  if (exports[0]) {
    let _exports3 = exports[0].exports;
  } else {
    exports = { exports: {}, id: 0, loaded: false };
    exports.exports = exports;
    let first = items[0];
    let call = first.call;
    ({ exports: _exports, exports: _exports2 } = exports);
    if (typeof call === "unknown") {
      first(exports, _exports2, __webpack_require__);
    } else {
      call(_exports, exports, _exports2, __webpack_require__);
    }
    exports.loaded = true;
    _exports3 = exports.exports;
  }
  return _exports3;
};
if (typeof exports === "object") {
  if (typeof module === "object") {
    module.exports = fn();
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define([], fn);
  }
}
const fnResult = fn();
for (const key10009 in fnResult) {
  let self = this;
  if (typeof arg5 === "object") {
    self = arg5;
  }
  self[key10009] = fnResult[key10009];
  continue;
}