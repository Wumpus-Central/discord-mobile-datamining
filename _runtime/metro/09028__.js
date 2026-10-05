// === Module 9028: ? ===

// Module 9028
let _inner2, _valids2, _valids3, arr1, constants, empty, empty2, falsySet, hasItem, hasOwnProperty, lazyResult, map, message, obj1, refResult, rules, set, slice, tmp25, tmp37, tmp38, tmp39, tmp45, tmp46, tmp48, tmp51, tmp53, tmp54, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp64, tmp65, tmp66, tmp68, tmp69, tmp70, tmp71, truthySet, value1, values, values1;

let fn = () => {
  let _exports;
  let _exports2;
  let _exports3;
  let items = [
    (arg0, arg1, fn) => {
      module.exports = fn(1);
    },
    (arg0, arg1, fn) => {
      let closure_0 = fn;
      fn = Object.assign || (function(arg0) {
        let num;
        for (let num = 1; num < arguments.length; num = num + 1) {
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
      let closure_2 = fn(2);
      let closure_3 = fn(14);
      let closure_4 = fn(19);
      let closure_5 = fn(16);
      let closure_6 = fn(32);
      let closure_7 = fn(15);
      obj = { alternatives: fn(28), array: fn(33), boolean: fn(27), binary: fn(34), date: fn(20), number: fn(26), object: fn(29), string: fn(21) };
      obj.root = () => {
        let _funcResult;
        let _funcResult1;
        let _funcResult2;
        let _funcResult3;
        let _funcResult4;
        let array;
        let array2;
        let items1;
        let items2;
        let items3;
        let keys2Result;
        let object;
        let object10;
        let object12;
        let object2;
        let object5;
        let object6;
        let object9;
        let ref;
        let string;
        let string2;
        obj = new closure_3();
        const cloneResult = obj.clone();
        cloneResult.any = function() {
          closure_2.assert(0 === arguments.length, "Joi.any() does not allow arguments.");
          return obj;
        };
        fn = function() {
          let applyResult;
          const alternatives = obj.alternatives;
          if (arguments.length) {
            const _try = alternatives.try;
            applyResult = _try(...arguments);
          } else {
            applyResult = alternatives;
          }
          return applyResult;
        };
        cloneResult.alt = fn;
        cloneResult.alternatives = fn;
        cloneResult.array = function() {
          closure_1_2.assert(0 === arguments.length, "Joi.array() does not allow arguments.");
          return obj.array;
        };
        const fn2 = function() {
          closure_1_2.assert(0 === arguments.length, "Joi.boolean() does not allow arguments.");
          return obj.boolean;
        };
        cloneResult.bool = fn2;
        cloneResult.boolean = fn2;
        cloneResult.binary = function() {
          closure_1_2.assert(0 === arguments.length, "Joi.binary() does not allow arguments.");
          return obj.binary;
        };
        cloneResult.date = function() {
          closure_1_2.assert(0 === arguments.length, "Joi.date() does not allow arguments.");
          return obj.date;
        };
        cloneResult.func = function() {
          closure_1_2.assert(0 === arguments.length, "Joi.func() does not allow arguments.");
          const object = obj.object;
          return object._func();
        };
        cloneResult.number = function() {
          closure_1_2.assert(0 === arguments.length, "Joi.number() does not allow arguments.");
          return obj.number;
        };
        cloneResult.object = function() {
          let applyResult;
          const object = obj.object;
          if (arguments.length) {
            const keys = object.keys;
            applyResult = keys(...arguments);
          } else {
            applyResult = object;
          }
          return applyResult;
        };
        cloneResult.string = function() {
          closure_1_2.assert(0 === arguments.length, "Joi.string() does not allow arguments.");
          return obj.string;
        };
        cloneResult.ref = function() {
          const create = ref.create;
          return create(...arguments);
        };
        cloneResult.isRef = (arg0) => ref.isRef(arg0);
        cloneResult.validate = function(arg0) {
          const tmp = arguments[arguments.length - 1];
          let tmp2 = null;
          if (typeof tmp === "function") {
            tmp2 = tmp;
          }
          let num = 0;
          const length = arguments.length;
          if (tmp2) {
            num = 1;
          }
          const diff = length - num;
          if (1 === diff) {
            return obj.validate(arg0, tmp2);
          } else {
            if (3 === diff) {
              obj = arguments[2];
            } else {
              obj = {};
            }
            const compileResult = fn.compile(arguments[1]);
            return compileResult._validateWithOptions(arg0, obj, tmp2);
          }
        };
        cloneResult.describe = function() {
          let compileResult;
          if (arguments.length) {
            compileResult = fn.compile(arguments[0]);
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
          fn.attempt(arg0, arg1, arg2);
        };
        cloneResult.attempt = (arg0, arg1, arg2) => {
          const iter = fn.validate(arg0, arg1);
          const error = iter.error;
          if (error) {
            const tmp = arg2;
            if (tmp) {
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
          const assert = closure_1_2.assert;
          if (_inner) {
            tmp = _inner instanceof closure_1_3;
          }
          assert(tmp, "you must provide a joi schema");
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
                return this.reach(children[num].schema, ".".substr(first.length + 1));
              }
            }
          }
        };
        cloneResult.lazy = (arg0) => closure_1_6.set(arg0);
        cloneResult.extend = function() {
          let obj6;
          let sum;
          let self = this;
          const flattenResult = closure_2.flatten(slice.call(arguments));
          closure_2.assert(flattenResult.length > 0, "You need to provide at least one extension");
          this.assert(flattenResult, fn.extensionsSchema);
          let obj2 = Object.create(this);
          let num = 0;
          if (0 < flattenResult.length) {
            while (true) {
              let tmp4 = flattenResult[num];
              let base = tmp4.base;
              let tmp5 = num;
              if (!base) {
                base = self.any();
              }
              fn = base.clone();
              let constructor = fn.constructor;
              class type {
                constructor() {
                  let language2;
                  let name;
                  const self = this;
                  if (this instanceof type) {
                    const callResult = constructor.call(self);
                    if (self) {
                      let tmp8 = self;
                      if (callResult) {
                        if (typeof callResult === "object") {
                          tmp8 = callResult;
                        } else {
                          tmp8 = self;
                        }
                      }
                      if (base.base) {
                        fn(tmp8, closure_2_1);
                      }
                      tmp8._type = base.name;
                      if (base.language) {
                        let _settings = tmp8._settings;
                        if (!_settings) {
                          _settings = { language: {} };
                          obj = { language: {} };
                        }
                        tmp8._settings = _settings;
                        const obj2 = {};
                        ({ name, language: language2 } = base);
                        const _settings2 = tmp8._settings;
                        applyToDefaults = applyToDefaults.applyToDefaults;
                        const language = tmp8._settings.language;
                        if (name in obj2) {
                          const _Object = Object;
                          const obj3 = { value: language2, enumerable: true, configurable: true, writable: true };
                          Object.defineProperty(obj2, name, obj3);
                        } else {
                          obj2[name] = language2;
                        }
                        _settings2.language = applyToDefaults(language, obj2);
                      }
                      return tmp8;
                    } else {
                      const _ReferenceError = ReferenceError;
                      const self4 = this;
                      const self5 = this;
                      const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      throw referenceError;
                    }
                  } else {
                    const _TypeError = TypeError;
                    const self2 = this;
                    const self3 = this;
                    const typeError = new TypeError("Cannot call a class as a function");
                    throw typeError;
                  }
                }
              }
              if (typeof constructor !== "function") {
                if (null !== constructor) {
                  let _TypeError = TypeError;
                  let self2 = this;
                  let str = "Super expression must either be null or a function, not ";
                  let self3 = this;
                  let typeError = new TypeError("Super expression must either be null or a function, not " + typeof constructor);
                  throw typeError;
                }
              }
              let prototype = constructor;
              let _Object = Object;
              if (constructor) {
                prototype = constructor.prototype;
              }
              let obj3 = { constructor: obj6 };
              obj6 = { value: type, enumerable: false, writable: true, configurable: true };
              type.prototype = create(prototype, obj3);
              if (constructor) {
                let _Object2 = Object;
                let _Object3 = Object;
                if (Object.setPrototypeOf) {
                  let setPrototypeOfResult = _Object3.setPrototypeOf(type, constructor);
                } else {
                  let num2;
                  let ownPropertyNames = _Object3.getOwnPropertyNames(constructor);
                  for (let num2 = 0; num2 < ownPropertyNames.length; num2 = num2 + 1) {
                    let tmp7 = ownPropertyNames[num2];
                    let _Object4 = Object;
                    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(constructor, tmp7);
                    let tmp10 = ownPropertyDescriptor && ownPropertyDescriptor.configurable && undefined === type[tmp7];
                    if (tmp10) {
                      let _Object5 = Object;
                      let definePropertyResult = Object.defineProperty(type, tmp7, ownPropertyDescriptor);
                    }
                  }
                }
              }
              if (tmp4.coerce) {
                class type {
                  constructor() {
                    let language2;
                    let name;
                    const self = this;
                    if (this instanceof type) {
                      const callResult = constructor.call(self);
                      if (self) {
                        let tmp8 = self;
                        if (callResult) {
                          if (typeof callResult === "object") {
                            tmp8 = callResult;
                          } else {
                            tmp8 = self;
                          }
                        }
                        if (base.base) {
                          fn(tmp8, closure_2_1);
                        }
                        tmp8._type = base.name;
                        if (base.language) {
                          let _settings = tmp8._settings;
                          if (!_settings) {
                            _settings = { language: {} };
                            obj = { language: {} };
                          }
                          tmp8._settings = _settings;
                          const obj2 = {};
                          ({ name, language: language2 } = base);
                          const _settings2 = tmp8._settings;
                          applyToDefaults = applyToDefaults.applyToDefaults;
                          const language = tmp8._settings.language;
                          if (name in obj2) {
                            const _Object = Object;
                            const obj3 = { value: language2, enumerable: true, configurable: true, writable: true };
                            Object.defineProperty(obj2, name, obj3);
                          } else {
                            obj2[name] = language2;
                          }
                          _settings2.language = applyToDefaults(language, obj2);
                        }
                        return tmp8;
                      } else {
                        const _ReferenceError = ReferenceError;
                        const self4 = this;
                        const self5 = this;
                        const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        throw referenceError;
                      }
                    } else {
                      const _TypeError = TypeError;
                      const self2 = this;
                      const self3 = this;
                      const typeError = new TypeError("Cannot call a class as a function");
                      throw typeError;
                    }
                  }
                  _coerce(arg0, arg1, arg2) {
                    const self = this;
                    let value = arg0;
                    if (constructor.prototype._coerce) {
                      const _coerce = constructor.prototype._coerce;
                      const iter = _coerce.call(self, arg0, arg1, arg2);
                      if (iter.errors) {
                        return iter;
                      } else {
                        value = iter.value;
                      }
                    }
                    const coerce = closure_0.coerce;
                    const callResult = coerce.call(self, value, arg1, arg2);
                    if (callResult instanceof closure_3_5.Err) {
                      obj = { value, errors: callResult };
                      const obj2 = { value, errors: callResult };
                    } else {
                      obj = { value: callResult };
                    }
                    return obj;
                  }
                }
              }
              if (tmp4.pre) {
                class type {
                  constructor() {
                    let language2;
                    let name;
                    const self = this;
                    if (this instanceof type) {
                      const callResult = constructor.call(self);
                      if (self) {
                        let tmp8 = self;
                        if (callResult) {
                          if (typeof callResult === "object") {
                            tmp8 = callResult;
                          } else {
                            tmp8 = self;
                          }
                        }
                        if (base.base) {
                          fn(tmp8, closure_2_1);
                        }
                        tmp8._type = base.name;
                        if (base.language) {
                          let _settings = tmp8._settings;
                          if (!_settings) {
                            _settings = { language: {} };
                            obj = { language: {} };
                          }
                          tmp8._settings = _settings;
                          const obj2 = {};
                          ({ name, language: language2 } = base);
                          const _settings2 = tmp8._settings;
                          applyToDefaults = applyToDefaults.applyToDefaults;
                          const language = tmp8._settings.language;
                          if (name in obj2) {
                            const _Object = Object;
                            const obj3 = { value: language2, enumerable: true, configurable: true, writable: true };
                            Object.defineProperty(obj2, name, obj3);
                          } else {
                            obj2[name] = language2;
                          }
                          _settings2.language = applyToDefaults(language, obj2);
                        }
                        return tmp8;
                      } else {
                        const _ReferenceError = ReferenceError;
                        const self4 = this;
                        const self5 = this;
                        const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        throw referenceError;
                      }
                    } else {
                      const _TypeError = TypeError;
                      const self2 = this;
                      const self3 = this;
                      const typeError = new TypeError("Cannot call a class as a function");
                      throw typeError;
                    }
                  }
                  _coerce(arg0, arg1, arg2) {
                    const self = this;
                    let value = arg0;
                    if (constructor.prototype._coerce) {
                      const _coerce = constructor.prototype._coerce;
                      const iter = _coerce.call(self, arg0, arg1, arg2);
                      if (iter.errors) {
                        return iter;
                      } else {
                        value = iter.value;
                      }
                    }
                    const coerce = closure_0.coerce;
                    const callResult = coerce.call(self, value, arg1, arg2);
                    if (callResult instanceof closure_3_5.Err) {
                      obj = { value, errors: callResult };
                      const obj2 = { value, errors: callResult };
                    } else {
                      obj = { value: callResult };
                    }
                    return obj;
                  }
                  _base(arg0, arg1, arg2) {
                    const self = this;
                    let value = arg0;
                    if (constructor.prototype._base) {
                      const _base = constructor.prototype._base;
                      const iter = _base.call(self, arg0, arg1, arg2);
                      if (iter.errors) {
                        return iter;
                      } else {
                        value = iter.value;
                      }
                    }
                    const pre = closure_0.pre;
                    const callResult = pre.call(self, value, arg1, arg2);
                    if (callResult instanceof closure_3_5.Err) {
                      obj = { value, errors: callResult };
                      const obj2 = { value, errors: callResult };
                    } else {
                      obj = { value: callResult };
                    }
                    return obj;
                  }
                }
              }
              if (tmp4.rules) {
                class type {
                  constructor() {
                    let language2;
                    let name;
                    const self = this;
                    if (this instanceof type) {
                      const callResult = constructor.call(self);
                      if (self) {
                        let tmp8 = self;
                        if (callResult) {
                          if (typeof callResult === "object") {
                            tmp8 = callResult;
                          } else {
                            tmp8 = self;
                          }
                        }
                        if (base.base) {
                          fn(tmp8, closure_2_1);
                        }
                        tmp8._type = base.name;
                        if (base.language) {
                          let _settings = tmp8._settings;
                          if (!_settings) {
                            _settings = { language: {} };
                            obj = { language: {} };
                          }
                          tmp8._settings = _settings;
                          const obj2 = {};
                          ({ name, language: language2 } = base);
                          const _settings2 = tmp8._settings;
                          applyToDefaults = applyToDefaults.applyToDefaults;
                          const language = tmp8._settings.language;
                          if (name in obj2) {
                            const _Object = Object;
                            const obj3 = { value: language2, enumerable: true, configurable: true, writable: true };
                            Object.defineProperty(obj2, name, obj3);
                          } else {
                            obj2[name] = language2;
                          }
                          _settings2.language = applyToDefaults(language, obj2);
                        }
                        return tmp8;
                      } else {
                        const _ReferenceError = ReferenceError;
                        const self4 = this;
                        const self5 = this;
                        const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        throw referenceError;
                      }
                    } else {
                      const _TypeError = TypeError;
                      const self2 = this;
                      const self3 = this;
                      const typeError = new TypeError("Cannot call a class as a function");
                      throw typeError;
                    }
                  }
                  _coerce(arg0, arg1, arg2) {
                    const self = this;
                    let value = arg0;
                    if (constructor.prototype._coerce) {
                      const _coerce = constructor.prototype._coerce;
                      const iter = _coerce.call(self, arg0, arg1, arg2);
                      if (iter.errors) {
                        return iter;
                      } else {
                        value = iter.value;
                      }
                    }
                    const coerce = closure_0.coerce;
                    const callResult = coerce.call(self, value, arg1, arg2);
                    if (callResult instanceof closure_3_5.Err) {
                      obj = { value, errors: callResult };
                      const obj2 = { value, errors: callResult };
                    } else {
                      obj = { value: callResult };
                    }
                    return obj;
                  }
                  _base(arg0, arg1, arg2) {
                    const self = this;
                    let value = arg0;
                    if (constructor.prototype._base) {
                      const _base = constructor.prototype._base;
                      const iter = _base.call(self, arg0, arg1, arg2);
                      if (iter.errors) {
                        return iter;
                      } else {
                        value = iter.value;
                      }
                    }
                    const pre = closure_0.pre;
                    const callResult = pre.call(self, value, arg1, arg2);
                    if (callResult instanceof closure_3_5.Err) {
                      obj = { value, errors: callResult };
                      const obj2 = { value, errors: callResult };
                    } else {
                      obj = { value: callResult };
                    }
                    return obj;
                  }
                }
                if (0 < tmp4.rules.length) {
                  class type {
                    constructor() {
                      let language2;
                      let name;
                      const self = this;
                      if (this instanceof type) {
                        const callResult = constructor.call(self);
                        if (self) {
                          let tmp8 = self;
                          if (callResult) {
                            if (typeof callResult === "object") {
                              tmp8 = callResult;
                            } else {
                              tmp8 = self;
                            }
                          }
                          if (base.base) {
                            fn(tmp8, closure_2_1);
                          }
                          tmp8._type = base.name;
                          if (base.language) {
                            let _settings = tmp8._settings;
                            if (!_settings) {
                              _settings = { language: {} };
                              obj = { language: {} };
                            }
                            tmp8._settings = _settings;
                            const obj2 = {};
                            ({ name, language: language2 } = base);
                            const _settings2 = tmp8._settings;
                            applyToDefaults = applyToDefaults.applyToDefaults;
                            const language = tmp8._settings.language;
                            if (name in obj2) {
                              const _Object = Object;
                              const obj3 = { value: language2, enumerable: true, configurable: true, writable: true };
                              Object.defineProperty(obj2, name, obj3);
                            } else {
                              obj2[name] = language2;
                            }
                            _settings2.language = applyToDefaults(language, obj2);
                          }
                          return tmp8;
                        } else {
                          const _ReferenceError = ReferenceError;
                          const self4 = this;
                          const self5 = this;
                          const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          throw referenceError;
                        }
                      } else {
                        const _TypeError = TypeError;
                        const self2 = this;
                        const self3 = this;
                        const typeError = new TypeError("Cannot call a class as a function");
                        throw typeError;
                      }
                    }
                    _coerce(arg0, arg1, arg2) {
                      const self = this;
                      let value = arg0;
                      if (constructor.prototype._coerce) {
                        const _coerce = constructor.prototype._coerce;
                        const iter = _coerce.call(self, arg0, arg1, arg2);
                        if (iter.errors) {
                          return iter;
                        } else {
                          value = iter.value;
                        }
                      }
                      const coerce = closure_0.coerce;
                      const callResult = coerce.call(self, value, arg1, arg2);
                      if (callResult instanceof closure_3_5.Err) {
                        obj = { value, errors: callResult };
                        const obj2 = { value, errors: callResult };
                      } else {
                        obj = { value: callResult };
                      }
                      return obj;
                    }
                    _base(arg0, arg1, arg2) {
                      const self = this;
                      let value = arg0;
                      if (constructor.prototype._base) {
                        const _base = constructor.prototype._base;
                        const iter = _base.call(self, arg0, arg1, arg2);
                        if (iter.errors) {
                          return iter;
                        } else {
                          value = iter.value;
                        }
                      }
                      const pre = closure_0.pre;
                      const callResult = pre.call(self, value, arg1, arg2);
                      if (callResult instanceof closure_3_5.Err) {
                        obj = { value, errors: callResult };
                        const obj2 = { value, errors: callResult };
                      } else {
                        obj = { value: callResult };
                      }
                      return obj;
                    }
                  }
                  while (true) {
                    let tmp16;
                    class type {
                      constructor() {
                        let language2;
                        let name;
                        const self = this;
                        if (this instanceof type) {
                          const callResult = constructor.call(self);
                          if (self) {
                            let tmp8 = self;
                            if (callResult) {
                              if (typeof callResult === "object") {
                                tmp8 = callResult;
                              } else {
                                tmp8 = self;
                              }
                            }
                            if (base.base) {
                              fn(tmp8, closure_2_1);
                            }
                            tmp8._type = base.name;
                            if (base.language) {
                              let _settings = tmp8._settings;
                              if (!_settings) {
                                _settings = { language: {} };
                                obj = { language: {} };
                              }
                              tmp8._settings = _settings;
                              const obj2 = {};
                              ({ name, language: language2 } = base);
                              const _settings2 = tmp8._settings;
                              applyToDefaults = applyToDefaults.applyToDefaults;
                              const language = tmp8._settings.language;
                              if (name in obj2) {
                                const _Object = Object;
                                const obj3 = { value: language2, enumerable: true, configurable: true, writable: true };
                                Object.defineProperty(obj2, name, obj3);
                              } else {
                                obj2[name] = language2;
                              }
                              _settings2.language = applyToDefaults(language, obj2);
                            }
                            return tmp8;
                          } else {
                            const _ReferenceError = ReferenceError;
                            const self4 = this;
                            const self5 = this;
                            const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            throw referenceError;
                          }
                        } else {
                          const _TypeError = TypeError;
                          const self2 = this;
                          const self3 = this;
                          const typeError = new TypeError("Cannot call a class as a function");
                          throw typeError;
                        }
                      }
                      _coerce(arg0, arg1, arg2) {
                        const self = this;
                        let value = arg0;
                        if (constructor.prototype._coerce) {
                          const _coerce = constructor.prototype._coerce;
                          const iter = _coerce.call(self, arg0, arg1, arg2);
                          if (iter.errors) {
                            return iter;
                          } else {
                            value = iter.value;
                          }
                        }
                        const coerce = closure_0.coerce;
                        const callResult = coerce.call(self, value, arg1, arg2);
                        if (callResult instanceof closure_3_5.Err) {
                          obj = { value, errors: callResult };
                          const obj2 = { value, errors: callResult };
                        } else {
                          obj = { value: callResult };
                        }
                        return obj;
                      }
                      _base(arg0, arg1, arg2) {
                        const self = this;
                        let value = arg0;
                        if (constructor.prototype._base) {
                          const _base = constructor.prototype._base;
                          const iter = _base.call(self, arg0, arg1, arg2);
                          if (iter.errors) {
                            return iter;
                          } else {
                            value = iter.value;
                          }
                        }
                        const pre = closure_0.pre;
                        const callResult = pre.call(self, value, arg1, arg2);
                        if (callResult instanceof closure_3_5.Err) {
                          obj = { value, errors: callResult };
                          const obj2 = { value, errors: callResult };
                        } else {
                          obj = { value: callResult };
                        }
                        return obj;
                      }
                    }
                    base = tmp14;
                    if (tmp14.params) {
                      let mapped;
                      class type {
                        constructor() {
                          let language2;
                          let name;
                          const self = this;
                          if (this instanceof type) {
                            const callResult = constructor.call(self);
                            if (self) {
                              let tmp8 = self;
                              if (callResult) {
                                if (typeof callResult === "object") {
                                  tmp8 = callResult;
                                } else {
                                  tmp8 = self;
                                }
                              }
                              if (base.base) {
                                fn(tmp8, closure_2_1);
                              }
                              tmp8._type = base.name;
                              if (base.language) {
                                let _settings = tmp8._settings;
                                if (!_settings) {
                                  _settings = { language: {} };
                                  obj = { language: {} };
                                }
                                tmp8._settings = _settings;
                                const obj2 = {};
                                ({ name, language: language2 } = base);
                                const _settings2 = tmp8._settings;
                                applyToDefaults = applyToDefaults.applyToDefaults;
                                const language = tmp8._settings.language;
                                if (name in obj2) {
                                  const _Object = Object;
                                  const obj3 = { value: language2, enumerable: true, configurable: true, writable: true };
                                  Object.defineProperty(obj2, name, obj3);
                                } else {
                                  obj2[name] = language2;
                                }
                                _settings2.language = applyToDefaults(language, obj2);
                              }
                              return tmp8;
                            } else {
                              const _ReferenceError = ReferenceError;
                              const self4 = this;
                              const self5 = this;
                              const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                              throw referenceError;
                            }
                          } else {
                            const _TypeError = TypeError;
                            const self2 = this;
                            const self3 = this;
                            const typeError = new TypeError("Cannot call a class as a function");
                            throw typeError;
                          }
                        }
                        _coerce(arg0, arg1, arg2) {
                          const self = this;
                          let value = arg0;
                          if (constructor.prototype._coerce) {
                            const _coerce = constructor.prototype._coerce;
                            const iter = _coerce.call(self, arg0, arg1, arg2);
                            if (iter.errors) {
                              return iter;
                            } else {
                              value = iter.value;
                            }
                          }
                          const coerce = closure_0.coerce;
                          const callResult = coerce.call(self, value, arg1, arg2);
                          if (callResult instanceof closure_3_5.Err) {
                            obj = { value, errors: callResult };
                            const obj2 = { value, errors: callResult };
                          } else {
                            obj = { value: callResult };
                          }
                          return obj;
                        }
                        _base(arg0, arg1, arg2) {
                          const self = this;
                          let value = arg0;
                          if (constructor.prototype._base) {
                            const _base = constructor.prototype._base;
                            const iter = _base.call(self, arg0, arg1, arg2);
                            if (iter.errors) {
                              return iter;
                            } else {
                              value = iter.value;
                            }
                          }
                          const pre = closure_0.pre;
                          const callResult = pre.call(self, value, arg1, arg2);
                          if (callResult instanceof closure_3_5.Err) {
                            obj = { value, errors: callResult };
                            const obj2 = { value, errors: callResult };
                          } else {
                            obj = { value: callResult };
                          }
                          return obj;
                        }
                      }
                      if (tmp14.params instanceof closure_3) {
                        class type {
                          constructor() {
                            let language2;
                            let name;
                            const self = this;
                            if (this instanceof type) {
                              const callResult = constructor.call(self);
                              if (self) {
                                let tmp8 = self;
                                if (callResult) {
                                  if (typeof callResult === "object") {
                                    tmp8 = callResult;
                                  } else {
                                    tmp8 = self;
                                  }
                                }
                                if (base.base) {
                                  fn(tmp8, closure_2_1);
                                }
                                tmp8._type = base.name;
                                if (base.language) {
                                  let _settings = tmp8._settings;
                                  if (!_settings) {
                                    _settings = { language: {} };
                                    obj = { language: {} };
                                  }
                                  tmp8._settings = _settings;
                                  const obj2 = {};
                                  ({ name, language: language2 } = base);
                                  const _settings2 = tmp8._settings;
                                  applyToDefaults = applyToDefaults.applyToDefaults;
                                  const language = tmp8._settings.language;
                                  if (name in obj2) {
                                    const _Object = Object;
                                    const obj3 = { value: language2, enumerable: true, configurable: true, writable: true };
                                    Object.defineProperty(obj2, name, obj3);
                                  } else {
                                    obj2[name] = language2;
                                  }
                                  _settings2.language = applyToDefaults(language, obj2);
                                }
                                return tmp8;
                              } else {
                                const _ReferenceError = ReferenceError;
                                const self4 = this;
                                const self5 = this;
                                const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                throw referenceError;
                              }
                            } else {
                              const _TypeError = TypeError;
                              const self2 = this;
                              const self3 = this;
                              const typeError = new TypeError("Cannot call a class as a function");
                              throw typeError;
                            }
                          }
                          _coerce(arg0, arg1, arg2) {
                            const self = this;
                            let value = arg0;
                            if (constructor.prototype._coerce) {
                              const _coerce = constructor.prototype._coerce;
                              const iter = _coerce.call(self, arg0, arg1, arg2);
                              if (iter.errors) {
                                return iter;
                              } else {
                                value = iter.value;
                              }
                            }
                            const coerce = closure_0.coerce;
                            const callResult = coerce.call(self, value, arg1, arg2);
                            if (callResult instanceof closure_3_5.Err) {
                              obj = { value, errors: callResult };
                              const obj2 = { value, errors: callResult };
                            } else {
                              obj = { value: callResult };
                            }
                            return obj;
                          }
                          _base(arg0, arg1, arg2) {
                            const self = this;
                            let value = arg0;
                            if (constructor.prototype._base) {
                              const _base = constructor.prototype._base;
                              const iter = _base.call(self, arg0, arg1, arg2);
                              if (iter.errors) {
                                return iter;
                              } else {
                                value = iter.value;
                              }
                            }
                            const pre = closure_0.pre;
                            const callResult = pre.call(self, value, arg1, arg2);
                            if (callResult instanceof closure_3_5.Err) {
                              obj = { value, errors: callResult };
                              const obj2 = { value, errors: callResult };
                            } else {
                              obj = { value: callResult };
                            }
                            return obj;
                          }
                        }
                        mapped = arr3.map((key) => key.key);
                      } else {
                        class type {
                          constructor() {
                            let language2;
                            let name;
                            const self = this;
                            if (this instanceof type) {
                              const callResult = constructor.call(self);
                              if (self) {
                                let tmp8 = self;
                                if (callResult) {
                                  if (typeof callResult === "object") {
                                    tmp8 = callResult;
                                  } else {
                                    tmp8 = self;
                                  }
                                }
                                if (base.base) {
                                  fn(tmp8, closure_2_1);
                                }
                                tmp8._type = base.name;
                                if (base.language) {
                                  let _settings = tmp8._settings;
                                  if (!_settings) {
                                    _settings = { language: {} };
                                    obj = { language: {} };
                                  }
                                  tmp8._settings = _settings;
                                  const obj2 = {};
                                  ({ name, language: language2 } = base);
                                  const _settings2 = tmp8._settings;
                                  applyToDefaults = applyToDefaults.applyToDefaults;
                                  const language = tmp8._settings.language;
                                  if (name in obj2) {
                                    const _Object = Object;
                                    const obj3 = { value: language2, enumerable: true, configurable: true, writable: true };
                                    Object.defineProperty(obj2, name, obj3);
                                  } else {
                                    obj2[name] = language2;
                                  }
                                  _settings2.language = applyToDefaults(language, obj2);
                                }
                                return tmp8;
                              } else {
                                const _ReferenceError = ReferenceError;
                                const self4 = this;
                                const self5 = this;
                                const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                throw referenceError;
                              }
                            } else {
                              const _TypeError = TypeError;
                              const self2 = this;
                              const self3 = this;
                              const typeError = new TypeError("Cannot call a class as a function");
                              throw typeError;
                            }
                          }
                          _coerce(arg0, arg1, arg2) {
                            const self = this;
                            let value = arg0;
                            if (constructor.prototype._coerce) {
                              const _coerce = constructor.prototype._coerce;
                              const iter = _coerce.call(self, arg0, arg1, arg2);
                              if (iter.errors) {
                                return iter;
                              } else {
                                value = iter.value;
                              }
                            }
                            const coerce = closure_0.coerce;
                            const callResult = coerce.call(self, value, arg1, arg2);
                            if (callResult instanceof closure_3_5.Err) {
                              obj = { value, errors: callResult };
                              const obj2 = { value, errors: callResult };
                            } else {
                              obj = { value: callResult };
                            }
                            return obj;
                          }
                          _base(arg0, arg1, arg2) {
                            const self = this;
                            let value = arg0;
                            if (constructor.prototype._base) {
                              const _base = constructor.prototype._base;
                              const iter = _base.call(self, arg0, arg1, arg2);
                              if (iter.errors) {
                                return iter;
                              } else {
                                value = iter.value;
                              }
                            }
                            const pre = closure_0.pre;
                            const callResult = pre.call(self, value, arg1, arg2);
                            if (callResult instanceof closure_3_5.Err) {
                              obj = { value, errors: callResult };
                              const obj2 = { value, errors: callResult };
                            } else {
                              obj = { value: callResult };
                            }
                            return obj;
                          }
                        }
                        mapped = Object.keys(tmp14.params);
                      }
                      tmp16 = mapped;
                    } else {
                      class type {
                        constructor() {
                          let language2;
                          let name;
                          const self = this;
                          if (this instanceof type) {
                            const callResult = constructor.call(self);
                            if (self) {
                              let tmp8 = self;
                              if (callResult) {
                                if (typeof callResult === "object") {
                                  tmp8 = callResult;
                                } else {
                                  tmp8 = self;
                                }
                              }
                              if (base.base) {
                                fn(tmp8, closure_2_1);
                              }
                              tmp8._type = base.name;
                              if (base.language) {
                                let _settings = tmp8._settings;
                                if (!_settings) {
                                  _settings = { language: {} };
                                  obj = { language: {} };
                                }
                                tmp8._settings = _settings;
                                const obj2 = {};
                                ({ name, language: language2 } = base);
                                const _settings2 = tmp8._settings;
                                applyToDefaults = applyToDefaults.applyToDefaults;
                                const language = tmp8._settings.language;
                                if (name in obj2) {
                                  const _Object = Object;
                                  const obj3 = { value: language2, enumerable: true, configurable: true, writable: true };
                                  Object.defineProperty(obj2, name, obj3);
                                } else {
                                  obj2[name] = language2;
                                }
                                _settings2.language = applyToDefaults(language, obj2);
                              }
                              return tmp8;
                            } else {
                              const _ReferenceError = ReferenceError;
                              const self4 = this;
                              const self5 = this;
                              const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                              throw referenceError;
                            }
                          } else {
                            const _TypeError = TypeError;
                            const self2 = this;
                            const self3 = this;
                            const typeError = new TypeError("Cannot call a class as a function");
                            throw typeError;
                          }
                        }
                        _coerce(arg0, arg1, arg2) {
                          const self = this;
                          let value = arg0;
                          if (constructor.prototype._coerce) {
                            const _coerce = constructor.prototype._coerce;
                            const iter = _coerce.call(self, arg0, arg1, arg2);
                            if (iter.errors) {
                              return iter;
                            } else {
                              value = iter.value;
                            }
                          }
                          const coerce = closure_0.coerce;
                          const callResult = coerce.call(self, value, arg1, arg2);
                          if (callResult instanceof closure_3_5.Err) {
                            obj = { value, errors: callResult };
                            const obj2 = { value, errors: callResult };
                          } else {
                            obj = { value: callResult };
                          }
                          return obj;
                        }
                        _base(arg0, arg1, arg2) {
                          const self = this;
                          let value = arg0;
                          if (constructor.prototype._base) {
                            const _base = constructor.prototype._base;
                            const iter = _base.call(self, arg0, arg1, arg2);
                            if (iter.errors) {
                              return iter;
                            } else {
                              value = iter.value;
                            }
                          }
                          const pre = closure_0.pre;
                          const callResult = pre.call(self, value, arg1, arg2);
                          if (callResult instanceof closure_3_5.Err) {
                            obj = { value, errors: callResult };
                            const obj2 = { value, errors: callResult };
                          } else {
                            obj = { value: callResult };
                          }
                          return obj;
                        }
                      }
                    }
                    mapped = tmp16;
                    let schemaResult = null;
                    if (tmp14.params) {
                      class type {
                        constructor() {
                          let language2;
                          let name;
                          const self = this;
                          if (this instanceof type) {
                            const callResult = constructor.call(self);
                            if (self) {
                              let tmp8 = self;
                              if (callResult) {
                                if (typeof callResult === "object") {
                                  tmp8 = callResult;
                                } else {
                                  tmp8 = self;
                                }
                              }
                              if (base.base) {
                                fn(tmp8, closure_2_1);
                              }
                              tmp8._type = base.name;
                              if (base.language) {
                                let _settings = tmp8._settings;
                                if (!_settings) {
                                  _settings = { language: {} };
                                  obj = { language: {} };
                                }
                                tmp8._settings = _settings;
                                const obj2 = {};
                                ({ name, language: language2 } = base);
                                const _settings2 = tmp8._settings;
                                applyToDefaults = applyToDefaults.applyToDefaults;
                                const language = tmp8._settings.language;
                                if (name in obj2) {
                                  const _Object = Object;
                                  const obj3 = { value: language2, enumerable: true, configurable: true, writable: true };
                                  Object.defineProperty(obj2, name, obj3);
                                } else {
                                  obj2[name] = language2;
                                }
                                _settings2.language = applyToDefaults(language, obj2);
                              }
                              return tmp8;
                            } else {
                              const _ReferenceError = ReferenceError;
                              const self4 = this;
                              const self5 = this;
                              const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                              throw referenceError;
                            }
                          } else {
                            const _TypeError = TypeError;
                            const self2 = this;
                            const self3 = this;
                            const typeError = new TypeError("Cannot call a class as a function");
                            throw typeError;
                          }
                        }
                        _coerce(arg0, arg1, arg2) {
                          const self = this;
                          let value = arg0;
                          if (constructor.prototype._coerce) {
                            const _coerce = constructor.prototype._coerce;
                            const iter = _coerce.call(self, arg0, arg1, arg2);
                            if (iter.errors) {
                              return iter;
                            } else {
                              value = iter.value;
                            }
                          }
                          const coerce = closure_0.coerce;
                          const callResult = coerce.call(self, value, arg1, arg2);
                          if (callResult instanceof closure_3_5.Err) {
                            obj = { value, errors: callResult };
                            const obj2 = { value, errors: callResult };
                          } else {
                            obj = { value: callResult };
                          }
                          return obj;
                        }
                        _base(arg0, arg1, arg2) {
                          const self = this;
                          let value = arg0;
                          if (constructor.prototype._base) {
                            const _base = constructor.prototype._base;
                            const iter = _base.call(self, arg0, arg1, arg2);
                            if (iter.errors) {
                              return iter;
                            } else {
                              value = iter.value;
                            }
                          }
                          const pre = closure_0.pre;
                          const callResult = pre.call(self, value, arg1, arg2);
                          if (callResult instanceof closure_3_5.Err) {
                            obj = { value, errors: callResult };
                            const obj2 = { value, errors: callResult };
                          } else {
                            obj = { value: callResult };
                          }
                          return obj;
                        }
                      }
                      schemaResult = closure_4.schema(tmp14.params);
                    }
                    type.prototype[tmp14.name] = function() {
                      let validate;
                      if (arguments.length > mapped.length) {
                        const _Error = Error;
                        const self2 = this;
                        const self3 = this;
                        const error = new Error("Unexpected number of arguments");
                        throw error;
                      } else {
                        let _testResult;
                        const _Array = Array;
                        const callResult = slice.call(arguments);
                        obj = {};
                        let num = 0;
                        let flag = false;
                        let flag2 = false;
                        if (0 < arr.length) {
                          do {
                            obj[mapped[num]] = callResult[num];
                            let isRefResult = !flag;
                            let flag3 = flag;
                            if (!flag3) {
                              isRefResult = ref.isRef(callResult[num]);
                            }
                            if (isRefResult) {
                              flag3 = true;
                            }
                            num = num + 1;
                            flag = flag3;
                            flag2 = flag3;
                          } while (num < mapped.length);
                        }
                        if (closure_2) {
                          validate.assert(obj, tmp5);
                        }
                        let self = this;
                        if (obj.validate) {
                          const obj2 = { description: obj.description, hasRef: flag2 };
                          _testResult = self._test(tmp8.name, obj, function validate(arg0, arg1, arg2) {
                            const self = this;
                            validate = validate.validate;
                            return validate.call(self, obj, arg0, arg1, arg2);
                          }, obj2);
                        } else {
                          _testResult = self.clone();
                        }
                        if (obj.setup) {
                          const setup = tmp8.setup;
                          setup.call(_testResult, obj);
                        }
                        return _testResult;
                      }
                    };
                    sum = sum + 1;
                  }
                }
              }
              if (tmp4.describe) {
                class type {
                  constructor() {
                    let language2;
                    let name;
                    const self = this;
                    if (this instanceof type) {
                      const callResult = constructor.call(self);
                      if (self) {
                        let tmp8 = self;
                        if (callResult) {
                          if (typeof callResult === "object") {
                            tmp8 = callResult;
                          } else {
                            tmp8 = self;
                          }
                        }
                        if (base.base) {
                          fn(tmp8, closure_2_1);
                        }
                        tmp8._type = base.name;
                        if (base.language) {
                          let _settings = tmp8._settings;
                          if (!_settings) {
                            _settings = { language: {} };
                            obj = { language: {} };
                          }
                          tmp8._settings = _settings;
                          const obj2 = {};
                          ({ name, language: language2 } = base);
                          const _settings2 = tmp8._settings;
                          applyToDefaults = applyToDefaults.applyToDefaults;
                          const language = tmp8._settings.language;
                          if (name in obj2) {
                            const _Object = Object;
                            const obj3 = { value: language2, enumerable: true, configurable: true, writable: true };
                            Object.defineProperty(obj2, name, obj3);
                          } else {
                            obj2[name] = language2;
                          }
                          _settings2.language = applyToDefaults(language, obj2);
                        }
                        return tmp8;
                      } else {
                        const _ReferenceError = ReferenceError;
                        const self4 = this;
                        const self5 = this;
                        const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        throw referenceError;
                      }
                    } else {
                      const _TypeError = TypeError;
                      const self2 = this;
                      const self3 = this;
                      const typeError = new TypeError("Cannot call a class as a function");
                      throw typeError;
                    }
                  }
                  _coerce(arg0, arg1, arg2) {
                    const self = this;
                    let value = arg0;
                    if (constructor.prototype._coerce) {
                      const _coerce = constructor.prototype._coerce;
                      const iter = _coerce.call(self, arg0, arg1, arg2);
                      if (iter.errors) {
                        return iter;
                      } else {
                        value = iter.value;
                      }
                    }
                    const coerce = closure_0.coerce;
                    const callResult = coerce.call(self, value, arg1, arg2);
                    if (callResult instanceof closure_3_5.Err) {
                      obj = { value, errors: callResult };
                      const obj2 = { value, errors: callResult };
                    } else {
                      obj = { value: callResult };
                    }
                    return obj;
                  }
                  _base(arg0, arg1, arg2) {
                    const self = this;
                    let value = arg0;
                    if (constructor.prototype._base) {
                      const _base = constructor.prototype._base;
                      const iter = _base.call(self, arg0, arg1, arg2);
                      if (iter.errors) {
                        return iter;
                      } else {
                        value = iter.value;
                      }
                    }
                    const pre = closure_0.pre;
                    const callResult = pre.call(self, value, arg1, arg2);
                    if (callResult instanceof closure_3_5.Err) {
                      obj = { value, errors: callResult };
                      const obj2 = { value, errors: callResult };
                    } else {
                      obj = { value: callResult };
                    }
                    return obj;
                  }
                  describe() {
                    const self = this;
                    const describe = constructor.prototype.describe;
                    const describe2 = closure_0.describe;
                    return describe2.call(self, describe.call(self));
                  }
                }
              }
              let typeResult = type();
              obj2[tmp4.name] = () => typeResult;
              num = num + 1;
              if (num >= flattenResult.length) {
                class type {
                  constructor() {
                    let language2;
                    let name;
                    const self = this;
                    if (this instanceof type) {
                      const callResult = constructor.call(self);
                      if (self) {
                        let tmp8 = self;
                        if (callResult) {
                          if (typeof callResult === "object") {
                            tmp8 = callResult;
                          } else {
                            tmp8 = self;
                          }
                        }
                        if (base.base) {
                          fn(tmp8, closure_2_1);
                        }
                        tmp8._type = base.name;
                        if (base.language) {
                          let _settings = tmp8._settings;
                          if (!_settings) {
                            _settings = { language: {} };
                            obj = { language: {} };
                          }
                          tmp8._settings = _settings;
                          const obj2 = {};
                          ({ name, language: language2 } = base);
                          const _settings2 = tmp8._settings;
                          applyToDefaults = applyToDefaults.applyToDefaults;
                          const language = tmp8._settings.language;
                          if (name in obj2) {
                            const _Object = Object;
                            const obj3 = { value: language2, enumerable: true, configurable: true, writable: true };
                            Object.defineProperty(obj2, name, obj3);
                          } else {
                            obj2[name] = language2;
                          }
                          _settings2.language = applyToDefaults(language, obj2);
                        }
                        return tmp8;
                      } else {
                        const _ReferenceError = ReferenceError;
                        const self4 = this;
                        const self5 = this;
                        const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        throw referenceError;
                      }
                    } else {
                      const _TypeError = TypeError;
                      const self2 = this;
                      const self3 = this;
                      const typeError = new TypeError("Cannot call a class as a function");
                      throw typeError;
                    }
                  }
                  _coerce(arg0, arg1, arg2) {
                    const self = this;
                    let value = arg0;
                    if (constructor.prototype._coerce) {
                      const _coerce = constructor.prototype._coerce;
                      const iter = _coerce.call(self, arg0, arg1, arg2);
                      if (iter.errors) {
                        return iter;
                      } else {
                        value = iter.value;
                      }
                    }
                    const coerce = closure_0.coerce;
                    const callResult = coerce.call(self, value, arg1, arg2);
                    if (callResult instanceof closure_3_5.Err) {
                      obj = { value, errors: callResult };
                      const obj2 = { value, errors: callResult };
                    } else {
                      obj = { value: callResult };
                    }
                    return obj;
                  }
                  _base(arg0, arg1, arg2) {
                    const self = this;
                    let value = arg0;
                    if (constructor.prototype._base) {
                      const _base = constructor.prototype._base;
                      const iter = _base.call(self, arg0, arg1, arg2);
                      if (iter.errors) {
                        return iter;
                      } else {
                        value = iter.value;
                      }
                    }
                    const pre = closure_0.pre;
                    const callResult = pre.call(self, value, arg1, arg2);
                    if (callResult instanceof closure_3_5.Err) {
                      obj = { value, errors: callResult };
                      const obj2 = { value, errors: callResult };
                    } else {
                      obj = { value: callResult };
                    }
                    return obj;
                  }
                  describe() {
                    const self = this;
                    const describe = constructor.prototype.describe;
                    const describe2 = closure_0.describe;
                    return describe2.call(self, describe.call(self));
                  }
                }
              } else {
                class type {
                  constructor() {
                    let language2;
                    let name;
                    const self = this;
                    if (this instanceof type) {
                      const callResult = constructor.call(self);
                      if (self) {
                        let tmp8 = self;
                        if (callResult) {
                          if (typeof callResult === "object") {
                            tmp8 = callResult;
                          } else {
                            tmp8 = self;
                          }
                        }
                        if (base.base) {
                          fn(tmp8, closure_2_1);
                        }
                        tmp8._type = base.name;
                        if (base.language) {
                          let _settings = tmp8._settings;
                          if (!_settings) {
                            _settings = { language: {} };
                            obj = { language: {} };
                          }
                          tmp8._settings = _settings;
                          const obj2 = {};
                          ({ name, language: language2 } = base);
                          const _settings2 = tmp8._settings;
                          applyToDefaults = applyToDefaults.applyToDefaults;
                          const language = tmp8._settings.language;
                          if (name in obj2) {
                            const _Object = Object;
                            const obj3 = { value: language2, enumerable: true, configurable: true, writable: true };
                            Object.defineProperty(obj2, name, obj3);
                          } else {
                            obj2[name] = language2;
                          }
                          _settings2.language = applyToDefaults(language, obj2);
                        }
                        return tmp8;
                      } else {
                        const _ReferenceError = ReferenceError;
                        const self4 = this;
                        const self5 = this;
                        const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        throw referenceError;
                      }
                    } else {
                      const _TypeError = TypeError;
                      const self2 = this;
                      const self3 = this;
                      const typeError = new TypeError("Cannot call a class as a function");
                      throw typeError;
                    }
                  }
                  _coerce(arg0, arg1, arg2) {
                    const self = this;
                    let value = arg0;
                    if (constructor.prototype._coerce) {
                      const _coerce = constructor.prototype._coerce;
                      const iter = _coerce.call(self, arg0, arg1, arg2);
                      if (iter.errors) {
                        return iter;
                      } else {
                        value = iter.value;
                      }
                    }
                    const coerce = closure_0.coerce;
                    const callResult = coerce.call(self, value, arg1, arg2);
                    if (callResult instanceof closure_3_5.Err) {
                      obj = { value, errors: callResult };
                      const obj2 = { value, errors: callResult };
                    } else {
                      obj = { value: callResult };
                    }
                    return obj;
                  }
                  _base(arg0, arg1, arg2) {
                    const self = this;
                    let value = arg0;
                    if (constructor.prototype._base) {
                      const _base = constructor.prototype._base;
                      const iter = _base.call(self, arg0, arg1, arg2);
                      if (iter.errors) {
                        return iter;
                      } else {
                        value = iter.value;
                      }
                    }
                    const pre = closure_0.pre;
                    const callResult = pre.call(self, value, arg1, arg2);
                    if (callResult instanceof closure_3_5.Err) {
                      obj = { value, errors: callResult };
                      const obj2 = { value, errors: callResult };
                    } else {
                      obj = { value: callResult };
                    }
                    return obj;
                  }
                  describe() {
                    const self = this;
                    const describe = constructor.prototype.describe;
                    const describe2 = closure_0.describe;
                    return describe2.call(self, describe.call(self));
                  }
                }
              }
            }
          }
          return obj2;
        };
        ({ array, object } = obj);
        let obj3 = { base: object2.type(closure_3, "Joi object"), name: string.required(), coerce: _funcResult.arity(3), pre: _funcResult1.arity(3), language: null, describe: _funcResult2.arity(1), rules: items2(keys2Result.or("setup", "validate")) };
        object2 = obj.object;
        items = array.items;
        let keys = object.keys;
        string = obj.string;
        const object3 = obj.object;
        const object4 = obj.object;
        _funcResult = object3._func();
        ({ object: obj2.language, object: object5 } = obj);
        _funcResult1 = object4._func();
        ({ array: array2, object: object6 } = obj);
        _funcResult2 = object5._func();
        const obj4 = { name: string2.required(), setup: _funcResult3.arity(1), validate: _funcResult4.arity(4), params: items1, description: items3 };
        string2 = obj.string;
        items2 = array2.items;
        const keys2 = object6.keys;
        const object7 = obj.object;
        const object8 = obj.object;
        _funcResult3 = object7._func();
        ({ object: object9, object: object10 } = obj);
        _funcResult4 = object8._func();
        items1 = [object9.pattern(/.*/, object10.type(closure_3, "Joi object")), ];
        const object11 = obj.object;
        items1[1] = object11.type(obj.object.constructor, "Joi object");
        items3 = [, ];
        ({ string: arr2[0], object: object12 } = obj);
        const _funcResult5 = object12._func();
        items3[1] = _funcResult5.arity(1);
        keys2Result = keys2(obj4);
        const itemsResult = items(keys(obj3));
        cloneResult.extensionsSchema = itemsResult.strict();
        cloneResult.version = obj(35).version;
        return cloneResult;
      };
      module.exports = obj.root();
    },
    (arg0, arg1, fn) => {
      let closure_0 = arg1;
      let closure_1 = fn;
      fn = (arg0, arg1) => {
        closure_0 = arg0;
        let closure_1 = arg1;
        if (typeof Symbol === "function") {
          let _Symbol = Symbol;
          if (typeof Symbol.iterator === "symbol") {
            fn = (arg0) => typeof arg0;
          }
          let tmp = closure_1;
          let num = 8;
          let closure_3 = closure_1(8);
          let num2 = 9;
          let closure_4 = closure_1(9);
          let num3 = 10;
          let tmp2 = closure_1(10);
          let num4 = 13;
          let closure_5 = closure_1(13);
          obj = {};
          let tmp3 = closure_0;
          closure_0.clone = function(getTime, arg1) {
            let str = "undefined";
            if (undefined !== getTime) {
              str = fn(getTime);
            }
            if ("object" === str) {
              if (null !== getTime) {
                map = arg1;
                if (!map) {
                  const _Map = Map;
                  const self = this;
                  const self2 = this;
                  map = new Map();
                }
                const value = map.get(getTime);
                if (value) {
                  return value;
                } else {
                  let flag;
                  const _Array = Array;
                  if (Array.isArray(getTime)) {
                    items = [];
                    flag = true;
                  } else if (closure_0.isBuffer(getTime)) {
                    const self7 = this;
                    const self8 = this;
                    items = new closure_0(getTime);
                    flag = false;
                  } else {
                    const _Date = Date;
                    if (getTime instanceof Date) {
                      const _Date2 = Date;
                      const self5 = this;
                      const self6 = this;
                      items = new Date(getTime.getTime());
                      flag = false;
                    } else {
                      const _RegExp = RegExp;
                      if (getTime instanceof RegExp) {
                        const _RegExp2 = RegExp;
                        const self3 = this;
                        const self4 = this;
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
                    let num;
                    const _Object3 = Object;
                    const ownPropertyNames = Object.getOwnPropertyNames(getTime);
                    for (let num = 0; num < ownPropertyNames.length; num = num + 1) {
                      let tmp11 = ownPropertyNames[num];
                      let _Object4 = Object;
                      let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(getTime, tmp11);
                      if (!ownPropertyDescriptor) {
                        items[tmp11] = closure_0.clone(getTime[tmp11], map);
                      } else {
                        let _Object5 = Object;
                        let definePropertyResult = Object.defineProperty(items, tmp11, ownPropertyDescriptor);
                      }
                    }
                  }
                  return items;
                }
              }
            }
            return getTime;
          };
          closure_0.merge = (arr, arg1, arg2, arg3) => {
            let length;
            let tmp = arr;
            const assert = closure_0.assert;
            if (arr) {
              let str = "undefined";
              if (undefined !== arr) {
                str = fn(arr);
              }
              tmp = "object" === str;
            }
            assert(tmp, "Invalid target value: must be an object");
            let tmp4 = null == arg1;
            const assert2 = closure_0.assert;
            if (!tmp4) {
              let str3 = "undefined";
              if (undefined !== arg1) {
                str3 = fn(arg1);
              }
              tmp4 = "object" === str3;
            }
            assert2(tmp4, "Invalid source value: must be null, undefined, or an object");
            if (arg1) {
              const _Array = Array;
              if (Array.isArray(arg1)) {
                const _Array4 = Array;
                closure_0.assert(Array.isArray(arr), "Cannot merge array onto an object");
                if (false === arg3) {
                  arr.length = 0;
                }
                let num4 = 0;
                if (0 < arg1.length) {
                  do {
                    arr = arr.push(closure_0.clone(arg1[num4]));
                    num4 = num4 + 1;
                    length = arg1.length;
                  } while (num4 < length);
                }
                return arr;
              } else {
                const _Object = Object;
                const keys = Object.keys(arg1);
                let num = 0;
                if (0 < keys.length) {
                  while (true) {
                    let tmp10 = keys[num];
                    let tmp11 = arg1[tmp10];
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
                                if (!closure_0.isBuffer(tmp11)) {
                                  let _RegExp = RegExp;
                                  if (!(tmp11 instanceof RegExp)) {
                                    let mergeResult = closure_0.merge(arr[tmp10], tmp11, arg2, arg3);
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
                        arr[tmp10] = closure_0.clone(tmp11);
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
          closure_0.applyToDefaults = (arg0, arg1, arg2) => {
            let tmp = arg0;
            const assert = closure_0.assert;
            if (arg0) {
              let str = "undefined";
              if (undefined !== arg0) {
                str = fn(arg0);
              }
              tmp = "object" === str;
            }
            assert(tmp, "Invalid defaults value: must be an object");
            let tmp4 = !arg1;
            const assert2 = closure_0.assert;
            if (arg1) {
              tmp4 = true === arg1;
            }
            if (!tmp4) {
              let str3 = "undefined";
              if (undefined !== arg1) {
                str3 = fn(arg1);
              }
              tmp4 = "object" === str3;
            }
            assert2(tmp4, "Invalid options value: must be true, falsy or an object");
            if (arg1) {
              const cloneResult = closure_0.clone(arg0);
              let mergeResult = cloneResult;
              if (true !== arg1) {
                mergeResult = closure_0.merge(cloneResult, arg1, true === arg2, false);
              }
              return mergeResult;
            } else {
              return null;
            }
          };
          closure_0.cloneWithShallow = (arg0, arg1) => {
            const tmp = arg0;
            if (tmp) {
              let str = "undefined";
              if (undefined !== arg0) {
                str = fn(arg0);
              }
              if ("object" === str) {
                const storeResult = obj.store(arg0, arg1);
                const cloneResult = closure_0.clone(arg0);
                obj.restore(cloneResult, arg0, storeResult);
                return cloneResult;
              }
            }
            return arg0;
          };
          obj.store = (arg0, arg1) => {
            let num;
            obj = {};
            for (let num = 0; num < arg1.length; num = num + 1) {
              let tmp = arg1[num];
              let reachResult = closure_0.reach(arg0, tmp);
              if (undefined !== reachResult) {
                obj[tmp] = reachResult;
                let reachSetResult = obj.reachSet(arg0, tmp, undefined);
              }
            }
            return obj;
          };
          obj.restore = (arg0, arg1, arg2) => {
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
          obj.reachSet = (arg0, str, arg2) => {
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
          closure_0.applyToDefaultsWithShallow = (arg0, arg1, arg2) => {
            let tmp = arg0;
            const assert = closure_0.assert;
            if (arg0) {
              let str = "undefined";
              if (undefined !== arg0) {
                str = fn(arg0);
              }
              tmp = "object" === str;
            }
            assert(tmp, "Invalid defaults value: must be an object");
            let tmp4 = !arg1;
            const assert2 = closure_0.assert;
            if (arg1) {
              tmp4 = true === arg1;
            }
            if (!tmp4) {
              let str3 = "undefined";
              if (undefined !== arg1) {
                str3 = fn(arg1);
              }
              tmp4 = "object" === str3;
            }
            assert2(tmp4, "Invalid options value: must be true, falsy or an object");
            let isArray = arg2;
            const assert3 = closure_0.assert;
            if (arg2) {
              const _Array = Array;
              isArray = Array.isArray(arg2);
            }
            assert3(isArray, "Invalid keys");
            if (arg1) {
              const cloneWithShallowResult = closure_0.cloneWithShallow(arg0, arg2);
              if (true === arg1) {
                return cloneWithShallowResult;
              } else {
                const storeResult = closure_0.store(arg1, arg2);
                closure_0.merge(cloneWithShallowResult, arg1, false, false);
                closure_0.restore(cloneWithShallowResult, arg1, storeResult);
                return cloneWithShallowResult;
              }
            } else {
              return null;
            }
          };
          closure_0.deepEqual = (getTime, getTime2, arg2, arg3) => {
            const tmp = arg2 || { prototype: true };
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
              let tmp27;
              if ("object" === str2) {
                if (null !== getTime) {
                  if (null !== getTime2) {
                    const arr = arg3 || [];
                    if (-1 !== arr.indexOf(getTime)) {
                      return true;
                    } else {
                      arr.push(getTime);
                      const _Array2 = Array;
                      if (Array.isArray(getTime)) {
                        const _Array = Array;
                        if (Array.isArray(getTime2)) {
                          if (!tmp.part) {
                            if (getTime.length !== getTime2.length) {
                              return false;
                            }
                          }
                          let num8 = 0;
                          if (0 < getTime.length) {
                            while (!tmp.part) {
                              if (closure_0.deepEqual(getTime[num8], getTime2[num8], tmp)) {
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
                              while (!closure_0.deepEqual(getTime[num8], getTime2[num9], tmp)) {
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
                      } else if (closure_0.isBuffer(getTime)) {
                        if (closure_0.isBuffer(getTime2)) {
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
                          let tmp19 = getTime2 instanceof Date;
                          if (tmp19) {
                            const time = getTime.getTime();
                            tmp19 = time === getTime2.getTime();
                          }
                          return tmp19;
                        } else {
                          const _RegExp = RegExp;
                          if (getTime instanceof RegExp) {
                            const _RegExp2 = RegExp;
                            let tmp17 = getTime2 instanceof RegExp;
                            if (tmp17) {
                              const str1 = getTime.toString();
                              tmp17 = str1 === getTime2.toString();
                            }
                            return tmp17;
                          } else {
                            if (tmp.prototype) {
                              const _Object = Object;
                              const _Object2 = Object;
                              const prototypeOf = Object.getPrototypeOf(getTime);
                              if (prototypeOf !== Object.getPrototypeOf(getTime2)) {
                                return false;
                              }
                            }
                            const _Object3 = Object;
                            const ownPropertyNames = Object.getOwnPropertyNames(getTime);
                            if (!tmp.part) {
                              const _Object4 = Object;
                              if (ownPropertyNames.length !== Object.getOwnPropertyNames(getTime2).length) {
                                return false;
                              }
                            }
                            let num2 = 0;
                            if (0 < ownPropertyNames.length) {
                              while (true) {
                                let tmp6 = ownPropertyNames[num2];
                                let _Object5 = Object;
                                let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(getTime, tmp6);
                                let deepEqual = closure_0.deepEqual;
                                if (ownPropertyDescriptor.get) {
                                  let _Object6 = Object;
                                  if (!deepEqual(ownPropertyDescriptor, Object.getOwnPropertyDescriptor(getTime2, tmp6), tmp, tmp4)) {
                                    let flag3 = false;
                                    return false;
                                  }
                                } else if (!deepEqual(getTime[tmp6], getTime2[tmp6], tmp, tmp4)) {
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
                tmp27 = 0 !== getTime || 1 / getTime === 1 / getTime2;
                const tmp28 = 0 !== getTime || 1 / getTime === 1 / getTime2;
              } else {
                tmp27 = getTime != getTime && getTime2 != getTime2;
              }
              return tmp27;
            }
          };
          closure_0.unique = function(arr, arg1) {
            let fromResult;
            closure_0 = arg1;
            if (closure_0) {
              items = [];
              const _Set2 = Set;
              const self3 = this;
              const self4 = this;
              set = new Set();
              const item = arr.forEach((item) => {
                if (!set.has(item[closure_0])) {
                  set.add(item[closure_0]);
                  items.push(item);
                }
              });
              fromResult = items;
            } else {
              const _Array = Array;
              const _Set = Set;
              const self = this;
              const self2 = this;
              const set1 = new Set(arr);
              fromResult = from(set1);
              items = fromResult;
            }
            return fromResult;
          };
          closure_0.mapToObject = (arg0, arg1) => {
            if (arg0) {
              let num;
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
          closure_0.intersect = (arg0, arg1, arg2) => {
            const tmp = arg0;
            if (tmp) {
              const tmp2 = arg1;
              if (tmp2) {
                const _Array = Array;
                let mapToObjectResult = arg0;
                if (Array.isArray(arg0)) {
                  mapToObjectResult = closure_0.mapToObject(arg0);
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
                let tmp9 = null;
                if (!arg2) {
                  tmp9 = items;
                }
                return tmp9;
              }
            }
            return [];
          };
          closure_0.contain = function(headers, arg1, arg2) {
            let length;
            let combined = arg1;
            let str = "undefined";
            let str2 = "undefined";
            if (undefined !== headers) {
              str2 = fn(headers);
            }
            if ("object" === str2) {
              let tmp3 = str;
              if (undefined !== arg1) {
                tmp3 = fn(arg1);
              }
              if ("object" === tmp3) {
                const _Array = Array;
                if (!Array.isArray(headers)) {
                  let tmp7;
                  let arr;
                  let compare;
                  let flag3;
                  const _Array2 = Array;
                  if (!Array.isArray(arg1)) {
                    const _Object = Object;
                    const keys = Object.keys(arg1);
                    combined = keys;
                    tmp7 = arg1;
                    arr = keys;
                  }
                  obj = arg2 || {};
                  closure_0.assert(arguments.length >= 2, "Insufficient arguments");
                  let tmp10 = typeof headers === "string";
                  const assert = closure_0.assert;
                  if (typeof headers !== "string") {
                    if (undefined !== headers) {
                      str = fn(headers);
                    }
                    tmp10 = "object" === str;
                  }
                  assert(tmp10, "Reference must be string or an object");
                  closure_0.assert(arr.length, "Values array cannot be empty");
                  if (obj.deep) {
                    const deepEqual = closure_0.deepEqual;
                    const hasOwnPropertyResult = obj.hasOwnProperty("only");
                    const hasOwnPropertyResult1 = obj.hasOwnProperty("part");
                    if (hasOwnPropertyResult) {
                      let only = obj.only;
                    } else {
                      only = hasOwnPropertyResult1 && !obj.part;
                    }
                    if (hasOwnPropertyResult) {
                      let part = !obj.only;
                    } else {
                      part = !hasOwnPropertyResult1;
                      if (hasOwnPropertyResult1) {
                        part = obj.part;
                      }
                    }
                    compare = deepEqual;
                  } else {
                    compare = function compare(arr, headers) {
                      return arr === headers;
                    };
                  }
                  const _Array3 = Array;
                  const self = this;
                  const self2 = this;
                  const array = new Array(arr.length);
                  let num4 = 0;
                  if (0 < array.length) {
                    do {
                      array[num4] = 0;
                      num4 = num4 + 1;
                      length = array.length;
                    } while (num4 < length);
                  }
                  if (typeof headers === "string") {
                    let str8 = "(";
                    let num9 = 0;
                    let str12 = "(";
                    if (0 < arr.length) {
                      do {
                        let tmp28 = arr[num9];
                        let assertResult3 = closure_0.assert(typeof tmp28 === "string", "Cannot compare string reference to non-string value");
                        let str13 = "";
                        if (num9) {
                          str13 = "|";
                        }
                        str8 = str8 + (str13 + closure_0.escapeRegex(tmp28));
                        num9 = num9 + 1;
                        str12 = str8;
                      } while (num9 < arr.length);
                    }
                    const _RegExp = RegExp;
                    const self3 = this;
                    const self4 = this;
                    const regExp = new RegExp(str12 + ")", "g");
                    flag3 = headers.replace(regExp, (arg0, arg1) => {
                      const index = combined.indexOf(arg1);
                      array[index] = array[index] + 1;
                      return "";
                    });
                  } else {
                    const _Array4 = Array;
                    if (Array.isArray(headers)) {
                      let num7 = 0;
                      let flag6 = false;
                      flag3 = false;
                      if (0 < headers.length) {
                        do {
                          let num8 = 0;
                          let flag7 = false;
                          if (0 < arr.length) {
                            while (true) {
                              let compareResult = compare(arr[num8], headers[num7], tmp14);
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
                        } while (num7 < headers.length);
                      }
                    } else {
                      const _Object2 = Object;
                      const ownPropertyNames = Object.getOwnPropertyNames(headers);
                      let num6 = 0;
                      let flag2 = false;
                      flag3 = false;
                      if (0 < ownPropertyNames.length) {
                        while (true) {
                          let tmp19 = ownPropertyNames[num6];
                          let index = arr.indexOf(tmp19);
                          let flag4 = true;
                          if (-1 !== index) {
                            if (tmp7) {
                              if (!compare(tmp7[tmp19], headers[tmp19], tmp14)) {
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
                      let tmp35 = flag10 || array[num10];
                      if (!obj.once) {
                        if (obj.part) {
                          num10 = num10 + 1;
                          flag10 = tmp35;
                          flag11 = tmp35;
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
                  let tmp36 = !only2;
                  if (only2) {
                    tmp36 = !flag3;
                  }
                  if (tmp36) {
                    tmp36 = flag11;
                  }
                  return tmp36;
                }
              }
            }
            items = [];
            combined = items.concat(arg1);
            tmp7 = null;
            arr = combined;
          };
          closure_0.flatten = (arg0, arg1) => {
            let num;
            const arr = arg1 || [];
            for (let num = 0; num < arg0.length; num = num + 1) {
              let _Array = Array;
              if (Array.isArray(arg0[num])) {
                let flattenResult = closure_0.flatten(arg0[num], arr);
              } else {
                let arr2 = arr.push(arg0[num]);
              }
            }
            return arr;
          };
          closure_0.reach = (arg0, arg1, arg2) => {
            if (false !== arg1) {
              if (null != arg1) {
                const tmp = arg2 || {};
                let tmp2 = tmp;
                if (typeof tmp === "string") {
                  tmp2 = { separator: tmp };
                  obj = { separator: tmp };
                }
                let str = tmp2.separator;
                const split = arg1.split;
                if (!str) {
                  str = ".";
                }
                const parts = split(str);
                let num = 0;
                let str3 = "undefined";
                let arr2 = arg0;
                let _default = arg0;
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
                      let tmp8 = undefined === arr2;
                      let tmp9 = str3;
                      if (!tmp8) {
                        tmp9 = fn(arr2);
                      }
                      if ("object" === tmp9) {
                        if (!(diff in arr2)) {
                          break;
                        } else {
                          let tmp11 = str3;
                          if (!tmp8) {
                            tmp11 = fn(arr2);
                          }
                          if ("object" === tmp11) {
                            arr2 = arr2[diff];
                            num = num + 1;
                            _default = arr2;
                          } else if (false === tmp2.functions) {
                            break;
                          }
                          break;
                        }
                      } else if (typeof arr2 !== "function") {
                        break;
                      }
                      let strict = tmp2.strict;
                      let tmp14 = !strict;
                      let assert = closure_0.assert;
                      if (strict) {
                        tmp14 = num + 1 === parts.length;
                      }
                      let str5 = "in reach path ";
                      let str6 = "Missing segment";
                      let str7 = "in reach path ";
                      let assertResult = assert(tmp14, "Missing segment", diff, "in reach path ", arg1);
                      let assert2 = closure_0.assert;
                      if (undefined !== arr2) {
                        str3 = fn(arr2);
                      }
                      let tmp21 = "object" === str3;
                      if (!tmp21) {
                        let flag = true;
                        tmp21 = true === tmp2.functions;
                      }
                      if (!tmp21) {
                        tmp21 = typeof arr2 !== "function";
                      }
                      let str8 = "Invalid segment";
                      let str9 = "in reach path ";
                      let assert2Result = assert2(tmp21, "Invalid segment", diff, "in reach path ", arg1);
                      _default = tmp2.default;
                    }
                  }
                }
                return _default;
              }
            }
            return arg0;
          };
          closure_0.reachTemplate = (arg0, str, arg2) => {
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
          closure_0.formatStack = (arg0) => {
            let length;
            items = [];
            let num = 0;
            if (0 < arg0.length) {
              do {
                obj = arg0[num];
                let push = items.push;
                let items1 = [obj.getFileName(), obj.getLineNumber(), obj.getColumnNumber(), obj.getFunctionName(), obj.isConstructor()];
                let arr = push(items1);
                num = num + 1;
                length = arg0.length;
              } while (num < length);
            }
            return items;
          };
          closure_0.formatTrace = (arg0) => {
            let num;
            items = [];
            for (let num = 0; num < arg0.length; num = num + 1) {
              let tmp = arg0[num];
              let str = "";
              let push = items.push;
              if (tmp[4]) {
                str = "new ";
              }
              let arr = push(`${str}${tmp[3]} (${tmp[0]}:${tmp[1]}:${tmp[2]})`);
            }
            return items;
          };
          closure_0.callStack = function(arg0) {
            Error.prepareStackTrace = (arg0, arg1) => arg1;
            obj = {};
            Error.captureStackTrace(obj, this);
            Error.prepareStackTrace = prepareStackTrace;
            const formatStackResult = closure_0.formatStack(obj.stack);
            return formatStackResult.slice(1 + arg0);
          };
          closure_0.displayStack = (arg0) => {
            let num = 1;
            const callStack = closure_0.callStack;
            if (undefined !== arg0) {
              num = arg0 + 1;
            }
            return closure_0.formatTrace(callStack(num));
          };
          let flag = false;
          closure_0.abortThrow = false;
          closure_0.abort = (arg0, arg1) => {
            let str = arg0;
            if ("test" !== closure_1.env.NODE_ENV) {
              if (true !== closure_0.abortThrow) {
                let str2 = "";
                if (!arg1) {
                  const displayStackResult = closure_0.displayStack(1);
                  str2 = displayStackResult.join("\n\t");
                }
                const _console = console;
                console.log(`ABORT: ${str}
            	${str2}`);
                closure_1.exit(1);
              }
            }
            const _Error = Error;
            if (!str) {
              str = "Unknown error";
            }
            const _Error1 = new _Error(str);
            throw _Error1;
          };
          closure_0.assert = function(arg0) {
            let tmp = arg0;
            if (!tmp) {
              let num4;
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
                let tmp = message;
                if (typeof message !== "string") {
                  const _Error = Error;
                  if (message instanceof Error) {
                    message = message.message;
                  } else {
                    message = closure_1_0.stringify(message);
                  }
                  tmp = message;
                }
                return tmp;
              });
              const _Error2 = Error;
              const self = this;
              const self2 = this;
              const tmp6 = mapped.join(" ") || "Unknown error";
              const _Error21 = new _Error2(tmp6);
              throw _Error21;
            }
          };
          closure_0.Timer = function() {
            this.ts = 0;
            this.reset();
          };
          closure_0.Timer.prototype.reset = function() {
            this.ts = Date.now();
          };
          closure_0.Timer.prototype.elapsed = function() {
            return Date.now() - this.ts;
          };
          closure_0.Bench = function() {
            this.ts = 0;
            this.reset();
          };
          closure_0.Bench.prototype.reset = function() {
            const Bench = closure_0.Bench;
            this.ts = Bench.now();
          };
          closure_0.Bench.prototype.elapsed = function() {
            const Bench = closure_0.Bench;
            return Bench.now() - this.ts;
          };
          closure_0.Bench.now = () => {
            const hrtimeResult = closure_1.hrtime();
            return 1000 * hrtimeResult[0] + hrtimeResult[1] / 1000000;
          };
          closure_0.escapeRegex = (str) => str.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, "\\$&");
          closure_0.base64urlEncode = function(str, arg1) {
            let isBufferResult = typeof str === "string";
            const assert = closure_0.assert;
            if (typeof str !== "string") {
              isBufferResult = closure_0.isBuffer(str);
            }
            assert(isBufferResult, "value must be string or buffer");
            if (!closure_0.isBuffer(str)) {
              const self = this;
              const self2 = this;
              str = new closure_0(str, tmp5);
            }
            const str2 = str.toString("base64");
            const str3 = str2.replace(/\+/g, "-");
            const str4 = str3.replace(/\//g, "_");
            return str4.replace(/\=/g, "");
          };
          closure_0.base64urlDecode = function(str, arg1) {
            if (typeof str !== "string") {
              const _Error2 = Error;
              const self5 = this;
              const self6 = this;
              const error = new Error("Value not a string");
              return error;
            } else {
              obj = /^[\w\-]*$/;
              if (obj.test(str)) {
                let str2 = arg1;
                const self3 = this;
                const self4 = this;
                const str4 = new closure_0(str, "base64");
                let str1 = str4;
                if ("buffer" !== arg1) {
                  const toString = str4.toString;
                  if (!str2) {
                    str2 = "binary";
                  }
                  str1 = toString(str2);
                }
                return str1;
              } else {
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error1 = new Error("Invalid character");
                return error1;
              }
            }
          };
          closure_0.escapeHeaderAttribute = (str) => {
            obj = /^[ \w\!#\$%&'\(\)\*\+,\-\.\/\:;<\=>\?@\[\]\^`\{\|\}~\"\\]*$/;
            closure_0.assert(obj.test(str), `Bad attribute value (${str})`);
            str = str.replace(/\\/g, "\\\\");
            return str.replace(/\"/g, "\\\"");
          };
          closure_0.escapeHtml = (arg0) => closure_5.escapeHtml(arg0);
          closure_0.escapeJavaScript = (arg0) => closure_5.escapeJavaScript(arg0);
          closure_0.nextTick = (arg0) => {
            closure_0 = arg0;
            return function() {
              closure_0 = arguments;
              closure_1_1.nextTick(() => {
                closure_0.apply(null, closure_0);
              });
            };
          };
          closure_0.once = (_hoekOnce) => {
            if (_hoekOnce._hoekOnce) {
              return _hoekOnce;
            } else {
              let c1 = false;
              function wrapped() {
                const tmp = c1;
                if (!tmp) {
                  c1 = true;
                  _hoekOnce(...arguments);
                }
              }
              wrapped._hoekOnce = true;
              return wrapped;
            }
          };
          closure_0.isInteger = (match) => {
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
          closure_0.ignore = () => {

          };
          ({ inherits: closure_0.inherits, format: closure_0.format } = tmp2);
          closure_0.transform = (arg0, arg1, separator) => {
            let length;
            let isArray = null == arg0;
            const assert = closure_0.assert;
            if (!isArray) {
              let str = "undefined";
              if (undefined !== arg0) {
                str = fn(arg0);
              }
              isArray = "object" === str;
            }
            if (!isArray) {
              const _Array = Array;
              isArray = Array.isArray(arg0);
            }
            assert(isArray, "Invalid source object: must be null, undefined, an object, or an array");
            let str3 = "undefined";
            if (undefined !== separator) {
              str3 = fn(separator);
            }
            const tmp7 = "object" === str3 && null !== separator && separator.separator || ".";
            if (Array.isArray(arg0)) {
              items = [];
              let num3 = 0;
              if (0 < arg0.length) {
                do {
                  let arr = items.push(closure_0.transform(arg0[num3], arg1, separator));
                  num3 = num3 + 1;
                  length = arg0.length;
                } while (num3 < length);
              }
              return items;
            } else {
              let num;
              obj = {};
              const _Object = Object;
              const keys = Object.keys(arg1);
              for (let num = 0; num < keys.length; num = num + 1) {
                let str5 = keys[num];
                let parts = str5.split(tmp7);
                let tmp8 = arg1[str5];
                let assertResult1 = closure_0.assert(typeof tmp8 === "string", "All mappings must be \".\" delineated strings");
                let tmp12 = obj;
                let tmp13 = obj;
                if (parts.length > 1) {
                  do {
                    let arr2 = parts.shift();
                    if (!tmp12[arr2]) {
                      tmp12[arr2] = {};
                    }
                    tmp12 = tmp12[arr2];
                    tmp13 = tmp12;
                  } while (parts.length > 1);
                }
                let arr3 = parts.shift();
                tmp13[arr3] = closure_0.reach(arg0, tmp8, separator);
              }
              return obj;
            }
          };
          closure_0.uniqueFilename = (arg0, arg1) => {
            let str = "";
            if (arg1) {
              let text = arg1;
              if ("." !== arg1[0]) {
                text = `.${arg1}`;
              }
              str = text;
            }
            items = [, , ];
            const resolveResult = closure_4.resolve(arg0);
            items[0] = Date.now();
            items[1] = closure_1.pid;
            const str3 = closure_3.randomBytes(8);
            items[2] = str3.toString("hex");
            return closure_4.join(resolveResult, items.join("-") + str);
          };
          closure_0.stringify = function() {
            try {
              const _JSON = JSON;
              return stringify(...arguments);
            } catch (tmp2) {
              return "[Cannot display object: " + tmp2.message + "]";
            }
          };
          closure_0.shallow = (arg0) => {
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
          const tmp = arg0;
          if (tmp) {
            const _Symbol = Symbol;
            if (typeof Symbol === "function") {
              let str;
              const _Symbol3 = Symbol;
              if (arg0.constructor === Symbol) {
                const _Symbol2 = Symbol;
                str = "symbol";
              }
              return str;
            }
          }
          str = typeof arg0;
        };
      };
      const call = fn.call;
      call(arg1, fn(3).Buffer, fn(7));
    },
    (arg0, arg1, arg2) => {
      constants = arg1;
      let closure_1 = arg2;
      const fn = (TYPED_ARRAY_SUPPORT) => {
        let closure_0;
        function typedArraySupport() {
          try {
            const _Uint8Array = Uint8Array;
            const self = this;
            const self2 = this;
            const uint8Array = new Uint8Array(1);
            const _Uint8Array2 = Uint8Array;
            const merged = Object.assign({ foo: null });
            merged[0] = function foo() {
              return 42;
            };
            uint8Array.__proto__ = merged;
            const tmp4 = 42 === uint8Array.foo() && typeof obj2.subarray === "function" && 0 === obj2.subarray(1, 1).byteLength;
            return tmp4;
          } catch (err) {
            return false;
          }
        }
        function createBuffer(arg0, num) {
          num = 1073741823;
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            num = 2147483647;
          }
          if (num < num) {
            const _RangeError = RangeError;
            const self7 = this;
            const self8 = this;
            const rangeError = new RangeError("Invalid typed array length");
            throw rangeError;
          } else {
            let tmp2;
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              const _Uint8Array = Uint8Array;
              const self5 = this;
              const self6 = this;
              const uint8Array = new Uint8Array(num);
              uint8Array.__proto__ = Buffer.prototype;
              tmp2 = uint8Array;
            } else {
              tmp2 = arg0;
              if (null === arg0) {
                let tmp6;
                obj = Object.create(Buffer.prototype);
                if (!Buffer.TYPED_ARRAY_SUPPORT) {
                  if (!(obj instanceof Buffer)) {
                    let tmpResult;
                    const obj2 = Object.create(Buffer.prototype);
                    if (!Buffer.TYPED_ARRAY_SUPPORT) {
                      if (!(obj2 instanceof Buffer)) {
                        tmpResult = Buffer(num, undefined, undefined);
                      }
                      tmp6 = tmpResult;
                    }
                    if (typeof num === "number") {
                      if (typeof undefined === "string") {
                        const _Error = Error;
                        const self = this;
                        const self2 = this;
                        const error = new Error("If encoding is specified then the first argument must be a string");
                        throw error;
                      } else {
                        tmpResult = allocUnsafe(obj2, num);
                      }
                    } else {
                      tmpResult = from(obj2, num, undefined, undefined);
                    }
                  }
                  tmp2 = tmp6;
                }
                if (typeof num === "number") {
                  if (typeof undefined === "string") {
                    const _Error2 = Error;
                    const self3 = this;
                    const self4 = this;
                    const error1 = new Error("If encoding is specified then the first argument must be a string");
                    throw error1;
                  } else {
                    tmp6 = allocUnsafe(obj, num);
                  }
                } else {
                  tmp6 = from(obj, num, undefined, undefined);
                }
              }
              tmp2.length = num;
            }
            return tmp2;
          }
        }
        class Buffer {
          constructor(num, str, arg2) {
            const self = this;
            if (!Buffer.TYPED_ARRAY_SUPPORT) {
              if (!(self instanceof Buffer)) {
                const tmpResult = Buffer(num, str, arg2);
                return tmpResult;
              }
            }
            if (typeof num === "number") {
              if (typeof str === "string") {
                const _Error = Error;
                const self2 = this;
                const self3 = this;
                const error = new Error("If encoding is specified then the first argument must be a string");
                throw error;
              } else {
                return allocUnsafe(self, num);
              }
            } else {
              return from(self, 0, str, arg2);
            }
          }
          static _augment(arg0) {
            arg0.__proto__ = Buffer.prototype;
            return arg0;
          }
          static from(arg0, arg1, arg2) {
          return from(null, arg0, arg1, arg2);
        }
          static alloc(num, arg1, str) {
            if (typeof num !== "number") {
              const _TypeError = TypeError;
              const self3 = this;
              const self4 = this;
              const typeError = new TypeError("\"size\" argument must be a number");
              throw typeError;
            } else if (0 < 0) {
              const _RangeError = RangeError;
              const self = this;
              const self2 = this;
              const rangeError = new RangeError("\"size\" argument must not be negative");
              throw rangeError;
            } else {
              let tmp4;
              if (0 <= 0) {
                tmp4 = createBuffer(null, num);
              } else if (undefined !== arg1) {
                let fillResult;
                if (typeof str === "string") {
                  obj = createBuffer(null, 0);
                  fillResult = obj.fill(arg1, str);
                } else {
                  const obj2 = createBuffer(null, 0);
                  fillResult = obj2.fill(arg1);
                }
                tmp4 = fillResult;
              } else {
                tmp4 = createBuffer(null, num);
              }
              return tmp4;
            }
          }
          static allocUnsafe(arg0) {
          return allocUnsafe(null, arg0);
        }
          static allocUnsafeSlow(arg0) {
          return allocUnsafe(null, arg0);
        }
          static isBuffer(_isBuffer) {
            return !(null == _isBuffer || !_isBuffer._isBuffer);
          }
          static compare(arg0, arg1) {
            if (Buffer.isBuffer(arg0)) {
              if (Buffer.isBuffer(arg1)) {
                if (arg0 === arg1) {
                  return 0;
                } else {
                  const _Math = Math;
                  const bound = Math.min(length, length2);
                  let num3 = 0;
                  let tmp5 = length2;
                  let tmp6 = length;
                  if (0 < bound) {
                    while (arg0[num3] === arg1[num3]) {
                      num3 = num3 + 1;
                      tmp5 = length2;
                      tmp6 = length;
                    }
                    tmp6 = arg0[num3];
                    tmp5 = arg1[num3];
                  }
                  let num4 = -1;
                  if (tmp6 >= tmp5) {
                    let num5 = 0;
                    if (tmp5 < tmp6) {
                      num5 = 1;
                    }
                    num4 = num5;
                  }
                  return num4;
                }
              }
            }
            const typeError = new TypeError("Arguments must be Buffers");
            throw typeError;
          }
          static isEncoding(arg0) {
            const str = String(arg0);
            switch (str.toLowerCase()) {
              case "hex":
              {
                return true;
              }
              case "utf8":
              {
                return true;
              }
              case "utf-8":
              {
                return true;
              }
              case "ascii":
              {
                return true;
              }
              case "latin1":
              {
                return true;
              }
              case "binary":
              {
                return true;
              }
              case "base64":
              {
                return true;
              }
              case "ucs2":
              {
                return true;
              }
              case "ucs-2":
              {
                return true;
              }
              case "utf16le":
              {
                return true;
              }
              case "utf-16le":
              {
                return true;
              }
              default:
              {
                return false;
              }
            }
          }
          static concat(arg0, arg1) {
            let length;
            if (closure_2(arg0)) {
              if (0 === arg0.length) {
                return Buffer.alloc(0);
              } else {
                let num5 = arg1;
                if (undefined === arg1) {
                  let num3 = 0;
                  let num4 = 0;
                  num5 = 0;
                  if (0 < arg0.length) {
                    do {
                      num4 = num4 + arg0[num3].length;
                      num3 = num3 + 1;
                      num5 = num4;
                      length = arg0.length;
                    } while (num3 < length);
                  }
                }
                const allocUnsafeResult = Buffer.allocUnsafe(num5);
                let num7 = 0;
                let num8 = 0;
                if (0 < arg0.length) {
                  while (Buffer.isBuffer(arg0[num8])) {
                    let copyResult = arr.copy(allocUnsafeResult, num7);
                    num7 = num7 + arr.length;
                    num8 = num8 + 1;
                  }
                  const _TypeError2 = TypeError;
                  const self3 = this;
                  const self4 = this;
                  const typeError = new TypeError("\"list\" argument must be an Array of Buffers");
                  throw typeError;
                }
                return allocUnsafeResult;
              }
            } else {
              const _TypeError = TypeError;
              const self = this;
              const self2 = this;
              const typeError1 = new TypeError("\"list\" argument must be an Array of Buffers");
              throw typeError1;
            }
          }
          swap16() {
            const self = this;
            if (this.length % 2 !== 0) {
              const _RangeError = RangeError;
              const self2 = this;
              const self3 = this;
              const rangeError = new RangeError("Buffer size must be a multiple of 16-bits");
              throw rangeError;
            } else {
              let num2;
              for (let num2 = 0; num2 < length; num2 = num2 + 2) {
                let sum = num2 + 1;
                self[num2] = self[sum];
                self[sum] = self[num2];
              }
              return self;
            }
          }
          swap32() {
            const self = this;
            if (this.length % 4 !== 0) {
              const _RangeError = RangeError;
              const self2 = this;
              const self3 = this;
              const rangeError = new RangeError("Buffer size must be a multiple of 32-bits");
              throw rangeError;
            } else {
              let num4;
              for (let num4 = 0; num4 < length; num4 = num4 + 4) {
                let sum = num4 + 3;
                self[num4] = self[sum];
                self[sum] = self[num4];
                let sum1 = num4 + 1;
                let sum2 = num4 + 2;
                self[sum1] = self[sum2];
                self[sum2] = self[sum1];
              }
              return self;
            }
          }
          swap64() {
            const self = this;
            if (this.length % 8 !== 0) {
              const _RangeError = RangeError;
              const self2 = this;
              const self3 = this;
              const rangeError = new RangeError("Buffer size must be a multiple of 64-bits");
              throw rangeError;
            } else {
              let num;
              for (let num = 0; num < length; num = num + 8) {
                let sum = num + 7;
                self[num] = self[sum];
                self[sum] = self[num];
                let sum1 = num + 1;
                let sum2 = num + 6;
                self[sum1] = self[sum2];
                self[sum2] = self[sum1];
                let sum3 = num + 2;
                let sum4 = num + 5;
                self[sum3] = self[sum4];
                self[sum4] = self[sum3];
                let sum5 = num + 3;
                let sum6 = num + 4;
                self[sum5] = self[sum6];
                self[sum6] = self[sum5];
              }
              return self;
            }
          }
          toString() {
            const self = this;
            let str = "";
            if (0 !== (this.length | 0)) {
              let applyResult;
              if (0 === arguments.length) {
                applyResult = utf8Slice(self, 0, tmp);
              } else {
                applyResult = slowToString(...arguments);
              }
              str = applyResult;
            }
            return str;
          }
          equals(arg0) {
            if (Buffer.isBuffer(arg0)) {
              const tmp5 = this === arg0 || 0 === Buffer.compare(tmp4, arg0);
              return tmp5;
            } else {
              const _TypeError = TypeError;
              const self = this;
              const self2 = this;
              const typeError = new TypeError("Argument must be a Buffer");
              throw typeError;
            }
          }
          inspect() {
            const self = this;
            const INSPECT_MAX_BYTES = closure_0.INSPECT_MAX_BYTES;
            let str = "";
            if (this.length > 0) {
              const str3 = self.toString("hex", 0, INSPECT_MAX_BYTES);
              const match = str3.match(/.{2}/g);
              const joined = match.join(" ");
              let text = joined;
              if (self.length > INSPECT_MAX_BYTES) {
                text = `${tmp} ... `;
              }
              str = text;
            }
            return "<Buffer " + str + ">";
          }
          compare(arr, arg1, arg2, arg3, arg4) {
            if (Buffer.isBuffer(arr)) {
              let num = arg1;
              if (undefined === arg1) {
                num = 0;
              }
              let tmp4 = arg2;
              if (undefined === arg2) {
                let num2 = 0;
                if (arr) {
                  num2 = arr.length;
                }
                tmp4 = num2;
              }
              let num3 = arg3;
              if (undefined === arg3) {
                num3 = 0;
              }
              const self3 = this;
              let length = arg4;
              if (undefined === arg4) {
                length = self3.length;
              }
              if (num >= 0) {
                if (tmp4 <= arr.length) {
                  if (num3 >= 0) {
                    if (length <= self3.length) {
                      if (num3 >= length) {
                        if (num >= tmp4) {
                          return 0;
                        }
                      }
                      if (num3 >= length) {
                        return -1;
                      } else if (num >= tmp4) {
                        return 1;
                      } else if (self3 === arr) {
                        return 0;
                      } else {
                        const diff = tmp11 - tmp12;
                        const diff1 = tmp14 - tmp15;
                        const _Math = Math;
                        const bound = Math.min(diff, diff1);
                        const substr = self3.slice(tmp12, tmp11);
                        const substr1 = arr.slice(tmp15, tmp14);
                        let num5 = 0;
                        let tmp6 = diff1;
                        let tmp7 = diff;
                        if (0 < bound) {
                          while (substr[num5] === substr1[num5]) {
                            num5 = num5 + 1;
                            tmp6 = diff1;
                            tmp7 = diff;
                          }
                          tmp7 = substr[num5];
                          tmp6 = substr1[num5];
                        }
                        let num6 = -1;
                        if (tmp7 >= tmp6) {
                          let num7 = 0;
                          if (tmp6 < tmp7) {
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
              const _RangeError = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError = new RangeError("out of range index");
              throw rangeError;
            } else {
              const _TypeError = TypeError;
              const self = this;
              const self2 = this;
              const typeError = new TypeError("Argument must be a Buffer");
              throw typeError;
            }
          }
          includes(arg0, arg1, arg2) {
            return -1 !== this.indexOf(arg0, arg1, arg2);
          }
          indexOf(arg0, arg1, arg2) {
            return bidirectionalIndexOf(this, arg0, arg1, arg2, true);
          }
          lastIndexOf(arg0, arg1, arg2) {
            return bidirectionalIndexOf(this, arg0, arg1, arg2, false);
          }
          write(arg0, str, arg2, arg3) {
            let length;
            let num;
            let str2;
            const self = this;
            if (undefined === str) {
              length = self.length;
              str2 = "utf8";
              num = 0;
            } else {
              if (undefined === arg2) {
                if (typeof str === "string") {
                  length = self.length;
                  num = 0;
                  str2 = str;
                }
              }
              const _isFinite = isFinite;
              if (isFinite(str)) {
                const _isFinite2 = isFinite;
                str2 = arg2;
                num = tmp4;
                if (isFinite(arg2)) {
                  str2 = arg3;
                  length = tmp5;
                  num = tmp4;
                  if (undefined === arg3) {
                    str2 = "utf8";
                    length = tmp5;
                    num = tmp4;
                  }
                }
              } else {
                const _Error = Error;
                const self2 = this;
                const self3 = this;
                const error = new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                throw error;
              }
            }
            const diff = self.length - num;
            const tmp7 = undefined === length || length > diff;
            if (tmp7) {
              length = diff;
            }
            if (arg0.length <= 0) {
              if (num <= self.length) {
                if (!str2) {
                  str2 = "utf8";
                }
              }
            }
            const rangeError = new RangeError("Attempt to write outside buffer bounds");
            throw rangeError;
          }
          toJSON() {
            let self = this._arr;
            const call = slice.call;
            if (!self) {
              self = this;
            }
            obj = { type: "Buffer", data: call(self, 0) };
            return obj;
          }
          slice(arg0, arg1) {
            let num;
            let num2;
            let tmp13;
            const self = this;
            if (~(~arg0) < 0) {
              num = tmp + length;
              if (num < 0) {
                num = 0;
              }
            } else {
              num = tmp;
              if (~(~arg0) > this.length) {
                num = length;
              }
            }
            let tmp2 = length;
            if (undefined !== arg1) {
              tmp2 = ~(~arg1);
            }
            if (tmp2 < 0) {
              num2 = tmp2 + length;
              if (num2 < 0) {
                num2 = 0;
              }
            } else {
              num2 = tmp2;
              if (tmp2 > this.length) {
                num2 = length;
              }
            }
            if (num2 < num) {
              num2 = num;
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              const subarrayResult = self.subarray(num, num2);
              subarrayResult.__proto__ = Buffer.prototype;
              tmp13 = subarrayResult;
            } else {
              let tmp8;
              const diff = num2 - num;
              obj = Object.create(Buffer.prototype);
              if (!Buffer.TYPED_ARRAY_SUPPORT) {
                if (!(obj instanceof Buffer)) {
                  let tmp3Result;
                  const obj2 = Object.create(Buffer.prototype);
                  if (!Buffer.TYPED_ARRAY_SUPPORT) {
                    if (!(obj2 instanceof Buffer)) {
                      tmp3Result = Buffer(diff, undefined, undefined);
                    }
                    tmp8 = tmp3Result;
                  }
                  if (typeof diff === "number") {
                    if (typeof undefined === "string") {
                      const _Error = Error;
                      const self2 = this;
                      const self3 = this;
                      const error = new Error("If encoding is specified then the first argument must be a string");
                      throw error;
                    } else {
                      tmp3Result = allocUnsafe(obj2, diff);
                    }
                  } else {
                    tmp3Result = from(obj2, diff, undefined, undefined);
                  }
                }
                tmp13 = tmp8;
                let num4 = 0;
                if (0 < diff) {
                  do {
                    tmp8[num4] = self[num4 + num];
                    num4 = num4 + 1;
                    tmp13 = tmp8;
                  } while (num4 < diff);
                }
              }
              if (typeof diff === "number") {
                if (typeof undefined === "string") {
                  const _Error2 = Error;
                  const self4 = this;
                  const self5 = this;
                  const error1 = new Error("If encoding is specified then the first argument must be a string");
                  throw error1;
                } else {
                  tmp8 = allocUnsafe(obj, diff);
                }
              } else {
                tmp8 = from(obj, diff, undefined, undefined);
              }
            }
            return tmp13;
          }
          readUIntLE(arg0, arg1, arg2) {
            const self = this;
            const tmp3 = arg2;
            if (!tmp3) {
              if ((arg0 | 0) % 1 === 0) {
                if ((arg0 | 0) >= 0) {
                  if ((arg0 | 0) + (arg1 | 0) > tmp4) {
                    const _RangeError = RangeError;
                    const self2 = this;
                    const self3 = this;
                    const rangeError = new RangeError("Trying to access beyond buffer length");
                    throw rangeError;
                  }
                }
              }
              const _RangeError2 = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError1 = new RangeError("offset is not uint");
              throw rangeError1;
            }
            let tmp11 = self[tmp];
            let num3 = 256;
            let tmp12 = tmp11;
            let num4 = 1;
            if (1 < (arg1 | 0)) {
              const sum = tmp11 + self[tmp + num4] * num3;
              const sum1 = num4 + 1;
              tmp12 = sum;
              while (sum1 < (arg1 | 0)) {
                num3 = num3 * 256;
                num4 = sum1;
                tmp11 = sum;
                tmp12 = sum;
                if (!num3) {
                  break;
                }
              }
            }
            return tmp12;
          }
          readUIntBE(arg0, arg1, arg2) {
            const self = this;
            const tmp3 = arg2;
            if (!tmp3) {
              if ((arg0 | 0) % 1 === 0) {
                if ((arg0 | 0) >= 0) {
                  if ((arg0 | 0) + (arg1 | 0) > tmp4) {
                    const _RangeError = RangeError;
                    const self2 = this;
                    const self3 = this;
                    const rangeError = new RangeError("Trying to access beyond buffer length");
                    throw rangeError;
                  }
                }
              }
              const _RangeError2 = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError1 = new RangeError("offset is not uint");
              throw rangeError1;
            }
            let diff = tmp2 - 1;
            let tmp12 = self[tmp + diff];
            let num3 = 256;
            let tmp13 = tmp12;
            if (0 < diff) {
              const diff1 = diff - 1;
              const sum = tmp12 + self[tmp + diff1] * num3;
              tmp13 = sum;
              while (0 < diff1) {
                num3 = num3 * 256;
                tmp12 = sum;
                diff = diff1;
                tmp13 = sum;
                if (!num3) {
                  break;
                }
              }
            }
            return tmp13;
          }
          readUInt8(arg0, arg1) {
            const tmp = arg1;
            if (!tmp) {
              if (arg0 % 1 === 0) {
                if (arg0 >= 0) {
                  if (arg0 + 1 > tmp2) {
                    const _RangeError = RangeError;
                    const self = this;
                    const self2 = this;
                    const rangeError = new RangeError("Trying to access beyond buffer length");
                    throw rangeError;
                  }
                }
              }
              const _RangeError2 = RangeError;
              const self3 = this;
              const self4 = this;
              const rangeError1 = new RangeError("offset is not uint");
              throw rangeError1;
            }
            return this[arg0];
          }
          readUInt16LE(arg0, arg1) {
            const self = this;
            const tmp = arg1;
            if (!tmp) {
              if (arg0 % 1 === 0) {
                if (arg0 >= 0) {
                  if (arg0 + 2 > tmp2) {
                    const _RangeError = RangeError;
                    const self2 = this;
                    const self3 = this;
                    const rangeError = new RangeError("Trying to access beyond buffer length");
                    throw rangeError;
                  }
                }
              }
              const _RangeError2 = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError1 = new RangeError("offset is not uint");
              throw rangeError1;
            }
            return self[arg0] | self[arg0 + 1] << 8;
          }
          readUInt16BE(arg0, arg1) {
            const self = this;
            const tmp = arg1;
            if (!tmp) {
              if (arg0 % 1 === 0) {
                if (arg0 >= 0) {
                  if (arg0 + 2 > tmp2) {
                    const _RangeError = RangeError;
                    const self2 = this;
                    const self3 = this;
                    const rangeError = new RangeError("Trying to access beyond buffer length");
                    throw rangeError;
                  }
                }
              }
              const _RangeError2 = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError1 = new RangeError("offset is not uint");
              throw rangeError1;
            }
            return self[arg0] << 8 | self[arg0 + 1];
          }
          readUInt32LE(arg0, arg1) {
            const self = this;
            const tmp = arg1;
            if (!tmp) {
              if (arg0 % 1 === 0) {
                if (arg0 >= 0) {
                  if (arg0 + 4 > tmp2) {
                    const _RangeError = RangeError;
                    const self2 = this;
                    const self3 = this;
                    const rangeError = new RangeError("Trying to access beyond buffer length");
                    throw rangeError;
                  }
                }
              }
              const _RangeError2 = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError1 = new RangeError("offset is not uint");
              throw rangeError1;
            }
            return (self[arg0] | self[arg0 + 1] << 8 | self[arg0 + 2] << 16) + 16777216 * self[arg0 + 3];
          }
          readUInt32BE(arg0, arg1) {
            const self = this;
            const tmp = arg1;
            if (!tmp) {
              if (arg0 % 1 === 0) {
                if (arg0 >= 0) {
                  if (arg0 + 4 > tmp2) {
                    const _RangeError = RangeError;
                    const self2 = this;
                    const self3 = this;
                    const rangeError = new RangeError("Trying to access beyond buffer length");
                    throw rangeError;
                  }
                }
              }
              const _RangeError2 = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError1 = new RangeError("offset is not uint");
              throw rangeError1;
            }
            return 16777216 * self[arg0] + (self[arg0 + 1] << 16 | self[arg0 + 2] << 8 | self[arg0 + 3]);
          }
          readIntLE(arg0, arg1, arg2) {
            const self = this;
            const tmp3 = arg2;
            if (!tmp3) {
              if ((arg0 | 0) % 1 === 0) {
                if ((arg0 | 0) >= 0) {
                  if ((arg0 | 0) + (arg1 | 0) > tmp4) {
                    const _RangeError = RangeError;
                    const self2 = this;
                    const self3 = this;
                    const rangeError = new RangeError("Trying to access beyond buffer length");
                    throw rangeError;
                  }
                }
              }
              const _RangeError2 = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError1 = new RangeError("offset is not uint");
              throw rangeError1;
            }
            let tmp11 = self[tmp];
            let num3 = 1;
            let num4 = 256;
            let tmp12 = tmp11;
            let num5 = 1;
            if (1 < (arg1 | 0)) {
              const sum = tmp11 + self[tmp + num3] * num4;
              const sum1 = num3 + 1;
              num5 = num4;
              tmp12 = sum;
              while (sum1 < (arg1 | 0)) {
                num4 = num4 * 256;
                num3 = sum1;
                tmp11 = sum;
                tmp12 = sum;
                num5 = num4;
                if (!num5) {
                  break;
                }
              }
            }
            let diff = tmp12;
            if (tmp12 >= num5 * 128) {
              const _Math = Math;
              diff = tmp12 - Math.pow(2, 8 * tmp2);
            }
            return diff;
          }
          readIntBE(arg0, arg1, arg2) {
            const self = this;
            const tmp3 = arg2;
            if (!tmp3) {
              if ((arg0 | 0) % 1 === 0) {
                if ((arg0 | 0) >= 0) {
                  if ((arg0 | 0) + (arg1 | 0) > tmp4) {
                    const _RangeError = RangeError;
                    const self2 = this;
                    const self3 = this;
                    const rangeError = new RangeError("Trying to access beyond buffer length");
                    throw rangeError;
                  }
                }
              }
              const _RangeError2 = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError1 = new RangeError("offset is not uint");
              throw rangeError1;
            }
            let diff = tmp2 - 1;
            let tmp12 = self[tmp + diff];
            let num3 = 256;
            let tmp13 = tmp12;
            let num4 = 1;
            if (0 < diff) {
              const diff1 = diff - 1;
              const sum = tmp12 + self[tmp + diff1] * num3;
              tmp13 = sum;
              num4 = num3;
              while (0 < diff1) {
                num3 = num3 * 256;
                tmp12 = sum;
                diff = diff1;
                tmp13 = sum;
                num4 = num3;
                if (!num4) {
                  break;
                }
              }
            }
            let diff2 = tmp13;
            if (tmp13 >= num4 * 128) {
              const _Math = Math;
              diff2 = tmp13 - Math.pow(2, 8 * tmp2);
            }
            return diff2;
          }
          readInt8(arg0, arg1) {
            let result;
            const self = this;
            const tmp = arg1;
            if (!tmp) {
              if (arg0 % 1 === 0) {
                if (arg0 >= 0) {
                  if (arg0 + 1 > tmp2) {
                    const _RangeError = RangeError;
                    const self2 = this;
                    const self3 = this;
                    const rangeError = new RangeError("Trying to access beyond buffer length");
                    throw rangeError;
                  }
                }
              }
              const _RangeError2 = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError1 = new RangeError("offset is not uint");
              throw rangeError1;
            }
            if (128 & self[arg0]) {
              result = -1 * (255 - tmp9 + 1);
            } else {
              result = tmp9;
            }
            return result;
          }
          readInt16LE(arg0, arg1) {
            const self = this;
            const tmp = arg1;
            if (!tmp) {
              if (arg0 % 1 === 0) {
                if (arg0 >= 0) {
                  if (arg0 + 2 > tmp2) {
                    const _RangeError = RangeError;
                    const self2 = this;
                    const self3 = this;
                    const rangeError = new RangeError("Trying to access beyond buffer length");
                    throw rangeError;
                  }
                }
              }
              const _RangeError2 = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError1 = new RangeError("offset is not uint");
              throw rangeError1;
            }
            let tmp10 = tmp9;
            if (32768 & (self[arg0] | self[arg0 + 1] << 8)) {
              tmp10 = 4294901760 | tmp9;
            }
            return tmp10;
          }
          readInt16BE(arg0, arg1) {
            const self = this;
            const tmp = arg1;
            if (!tmp) {
              if (arg0 % 1 === 0) {
                if (arg0 >= 0) {
                  if (arg0 + 2 > tmp2) {
                    const _RangeError = RangeError;
                    const self2 = this;
                    const self3 = this;
                    const rangeError = new RangeError("Trying to access beyond buffer length");
                    throw rangeError;
                  }
                }
              }
              const _RangeError2 = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError1 = new RangeError("offset is not uint");
              throw rangeError1;
            }
            let tmp10 = tmp9;
            if (32768 & (self[arg0 + 1] | self[arg0] << 8)) {
              tmp10 = 4294901760 | tmp9;
            }
            return tmp10;
          }
          readInt32LE(arg0, arg1) {
            const self = this;
            const tmp = arg1;
            if (!tmp) {
              if (arg0 % 1 === 0) {
                if (arg0 >= 0) {
                  if (arg0 + 4 > tmp2) {
                    const _RangeError = RangeError;
                    const self2 = this;
                    const self3 = this;
                    const rangeError = new RangeError("Trying to access beyond buffer length");
                    throw rangeError;
                  }
                }
              }
              const _RangeError2 = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError1 = new RangeError("offset is not uint");
              throw rangeError1;
            }
            return self[arg0] | self[arg0 + 1] << 8 | self[arg0 + 2] << 16 | self[arg0 + 3] << 24;
          }
          readInt32BE(arg0, arg1) {
            const self = this;
            const tmp = arg1;
            if (!tmp) {
              if (arg0 % 1 === 0) {
                if (arg0 >= 0) {
                  if (arg0 + 4 > tmp2) {
                    const _RangeError = RangeError;
                    const self2 = this;
                    const self3 = this;
                    const rangeError = new RangeError("Trying to access beyond buffer length");
                    throw rangeError;
                  }
                }
              }
              const _RangeError2 = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError1 = new RangeError("offset is not uint");
              throw rangeError1;
            }
            return self[arg0] << 24 | self[arg0 + 1] << 16 | self[arg0 + 2] << 8 | self[arg0 + 3];
          }
          readFloatLE(arg0, arg1) {
            const self = this;
            const tmp = arg1;
            if (!tmp) {
              if (arg0 % 1 === 0) {
                if (arg0 >= 0) {
                  if (arg0 + 4 > tmp2) {
                    const _RangeError = RangeError;
                    const self2 = this;
                    const self3 = this;
                    const rangeError = new RangeError("Trying to access beyond buffer length");
                    throw rangeError;
                  }
                }
              }
              const _RangeError2 = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError1 = new RangeError("offset is not uint");
              throw rangeError1;
            }
            return closure_1.read(self, arg0, true, 23, 4);
          }
          readFloatBE(arg0, arg1) {
            const self = this;
            const tmp = arg1;
            if (!tmp) {
              if (arg0 % 1 === 0) {
                if (arg0 >= 0) {
                  if (arg0 + 4 > tmp2) {
                    const _RangeError = RangeError;
                    const self2 = this;
                    const self3 = this;
                    const rangeError = new RangeError("Trying to access beyond buffer length");
                    throw rangeError;
                  }
                }
              }
              const _RangeError2 = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError1 = new RangeError("offset is not uint");
              throw rangeError1;
            }
            return closure_1.read(self, arg0, false, 23, 4);
          }
          readDoubleLE(arg0, arg1) {
            const self = this;
            const tmp = arg1;
            if (!tmp) {
              if (arg0 % 1 === 0) {
                if (arg0 >= 0) {
                  if (arg0 + 8 > tmp2) {
                    const _RangeError = RangeError;
                    const self2 = this;
                    const self3 = this;
                    const rangeError = new RangeError("Trying to access beyond buffer length");
                    throw rangeError;
                  }
                }
              }
              const _RangeError2 = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError1 = new RangeError("offset is not uint");
              throw rangeError1;
            }
            return closure_1.read(self, arg0, true, 52, 8);
          }
          readDoubleBE(arg0, arg1) {
            const self = this;
            const tmp = arg1;
            if (!tmp) {
              if (arg0 % 1 === 0) {
                if (arg0 >= 0) {
                  if (arg0 + 8 > tmp2) {
                    const _RangeError = RangeError;
                    const self2 = this;
                    const self3 = this;
                    const rangeError = new RangeError("Trying to access beyond buffer length");
                    throw rangeError;
                  }
                }
              }
              const _RangeError2 = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError1 = new RangeError("offset is not uint");
              throw rangeError1;
            }
            return closure_1.read(self, arg0, false, 52, 8);
          }
          writeUIntLE(arg0, arg1, arg2, arg3) {
            const self = this;
            const tmp4 = arg3;
            if (!tmp4) {
              const _Math = Math;
              const diff = Math.pow(2, 8 * tmp3) - 1;
              if (Buffer.isBuffer(self)) {
                if (diff >= +arg0) {
                  if (+arg0 >= 0) {
                    if ((arg1 | 0) + (arg2 | 0) > self.length) {
                      const _RangeError = RangeError;
                      const self4 = this;
                      const self5 = this;
                      const rangeError = new RangeError("Index out of range");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self6 = this;
                const self7 = this;
                const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                throw rangeError1;
              } else {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                throw typeError;
              }
            }
            self[arg1 | 0] = 255 & +arg0;
            let num5 = 256;
            let num6 = 1;
            if (1 < (arg2 | 0)) {
              self[(arg1 | 0) + num6] = +arg0 / num5 & 255;
              const sum = num6 + 1;
              while (sum < (arg2 | 0)) {
                num5 = num5 * 256;
                num6 = sum;
                if (!num5) {
                  break;
                }
              }
            }
            return (arg1 | 0) + (arg2 | 0);
          }
          writeUIntBE(arg0, arg1, arg2, arg3) {
            const self = this;
            const tmp4 = arg3;
            if (!tmp4) {
              const _Math = Math;
              const diff = Math.pow(2, 8 * tmp3) - 1;
              if (Buffer.isBuffer(self)) {
                if (diff >= +arg0) {
                  if (+arg0 >= 0) {
                    if ((arg1 | 0) + (arg2 | 0) > self.length) {
                      const _RangeError = RangeError;
                      const self4 = this;
                      const self5 = this;
                      const rangeError = new RangeError("Index out of range");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self6 = this;
                const self7 = this;
                const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                throw rangeError1;
              } else {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                throw typeError;
              }
            }
            const diff1 = tmp3 - 1;
            self[(arg1 | 0) + diff1] = 255 & +arg0;
            let diff2 = diff1 - 1;
            let num5 = 256;
            if (0 <= diff2) {
              self[(arg1 | 0) + diff2] = +arg0 / num5 & 255;
              const diff3 = diff2 - 1;
              while (0 <= diff3) {
                num5 = num5 * 256;
                diff2 = diff3;
                if (!num5) {
                  break;
                }
              }
            }
            return (arg1 | 0) + (arg2 | 0);
          }
          writeUInt8(arg0, arg1, arg2) {
            const self = this;
            const tmp3 = arg2;
            if (!tmp3) {
              if (Buffer.isBuffer(self)) {
                if (255 >= +arg0) {
                  if (+arg0 >= 0) {
                    if ((arg1 | 0) + 1 > self.length) {
                      const _RangeError = RangeError;
                      const self4 = this;
                      const self5 = this;
                      const rangeError = new RangeError("Index out of range");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self6 = this;
                const self7 = this;
                const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                throw rangeError1;
              } else {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                throw typeError;
              }
            }
            let rounded = tmp;
            if (!Buffer.TYPED_ARRAY_SUPPORT) {
              const _Math = Math;
              rounded = Math.floor(tmp);
            }
            self[arg1 | 0] = 255 & rounded;
            return (arg1 | 0) + 1;
          }
          writeUInt16LE(arg0, arg1, arg2) {
            const self = this;
            const tmp3 = arg2;
            if (!tmp3) {
              if (Buffer.isBuffer(self)) {
                if (65535 >= +arg0) {
                  if (+arg0 >= 0) {
                    if ((arg1 | 0) + 2 > self.length) {
                      const _RangeError = RangeError;
                      const self4 = this;
                      const self5 = this;
                      const rangeError = new RangeError("Index out of range");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self6 = this;
                const self7 = this;
                const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                throw rangeError1;
              } else {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                throw typeError;
              }
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              self[arg1 | 0] = 255 & +arg0;
              self[(arg1 | 0) + 1] = +arg0 >>> 8;
            } else {
              let num11;
              let sum = tmp;
              if (+arg0 < 0) {
                sum = 65535 + tmp + 1;
              }
              const _Math = Math;
              const bound = Math.min(self.length - tmp2, 2);
              for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                let result = 8 * num11;
                self[tmp2 + num11] = (sum & 255 << result) >>> result;
              }
            }
            return (arg1 | 0) + 2;
          }
          writeUInt16BE(arg0, arg1, arg2) {
            const self = this;
            const tmp3 = arg2;
            if (!tmp3) {
              if (Buffer.isBuffer(self)) {
                if (65535 >= +arg0) {
                  if (+arg0 >= 0) {
                    if ((arg1 | 0) + 2 > self.length) {
                      const _RangeError = RangeError;
                      const self4 = this;
                      const self5 = this;
                      const rangeError = new RangeError("Index out of range");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self6 = this;
                const self7 = this;
                const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                throw rangeError1;
              } else {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                throw typeError;
              }
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              self[arg1 | 0] = +arg0 >>> 8;
              self[(arg1 | 0) + 1] = 255 & +arg0;
            } else {
              let num11;
              let sum = tmp;
              if (+arg0 < 0) {
                sum = 65535 + tmp + 1;
              }
              const _Math = Math;
              const bound = Math.min(self.length - tmp2, 2);
              for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                let result = 8 * (1 - num11);
                self[tmp2 + num11] = (sum & 255 << result) >>> result;
              }
            }
            return (arg1 | 0) + 2;
          }
          writeUInt32LE(arg0, arg1, arg2) {
            const self = this;
            const tmp3 = arg2;
            if (!tmp3) {
              if (Buffer.isBuffer(self)) {
                if (4294967295 >= +arg0) {
                  if (+arg0 >= 0) {
                    if ((arg1 | 0) + 4 > self.length) {
                      const _RangeError = RangeError;
                      const self4 = this;
                      const self5 = this;
                      const rangeError = new RangeError("Index out of range");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self6 = this;
                const self7 = this;
                const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                throw rangeError1;
              } else {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                throw typeError;
              }
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              self[(arg1 | 0) + 3] = +arg0 >>> 24;
              self[(arg1 | 0) + 2] = +arg0 >>> 16;
              self[(arg1 | 0) + 1] = +arg0 >>> 8;
              self[arg1 | 0] = 255 & +arg0;
            } else {
              let num11;
              let sum = tmp;
              if (+arg0 < 0) {
                sum = 4294967295 + tmp + 1;
              }
              const _Math = Math;
              const bound = Math.min(self.length - tmp2, 4);
              for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                self[tmp2 + num11] = sum >>> 8 * num11 & 255;
              }
            }
            return (arg1 | 0) + 4;
          }
          writeUInt32BE(arg0, arg1, arg2) {
            const self = this;
            const tmp3 = arg2;
            if (!tmp3) {
              if (Buffer.isBuffer(self)) {
                if (4294967295 >= +arg0) {
                  if (+arg0 >= 0) {
                    if ((arg1 | 0) + 4 > self.length) {
                      const _RangeError = RangeError;
                      const self4 = this;
                      const self5 = this;
                      const rangeError = new RangeError("Index out of range");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self6 = this;
                const self7 = this;
                const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                throw rangeError1;
              } else {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                throw typeError;
              }
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              self[arg1 | 0] = +arg0 >>> 24;
              self[(arg1 | 0) + 1] = +arg0 >>> 16;
              self[(arg1 | 0) + 2] = +arg0 >>> 8;
              self[(arg1 | 0) + 3] = 255 & +arg0;
            } else {
              let num12;
              let sum = tmp;
              if (+arg0 < 0) {
                sum = 4294967295 + tmp + 1;
              }
              const _Math = Math;
              const bound = Math.min(self.length - tmp2, 4);
              for (let num12 = 0; num12 < bound; num12 = num12 + 1) {
                self[tmp2 + num12] = sum >>> 8 * (3 - num12) & 255;
              }
            }
            return (arg1 | 0) + 4;
          }
          writeIntLE(arg0, arg1, arg2, arg3) {
            const self = this;
            const tmp3 = arg3;
            if (!tmp3) {
              const _Math = Math;
              const powResult = Math.pow(2, 8 * arg2 - 1);
              const diff = powResult - 1;
              const tmp7 = -powResult;
              if (Buffer.isBuffer(self)) {
                if (diff >= +arg0) {
                  if (+arg0 >= tmp7) {
                    if ((arg1 | 0) + arg2 > self.length) {
                      const _RangeError = RangeError;
                      const self4 = this;
                      const self5 = this;
                      const rangeError = new RangeError("Index out of range");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self6 = this;
                const self7 = this;
                const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                throw rangeError1;
              } else {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                throw typeError;
              }
            }
            self[arg1 | 0] = 255 & +arg0;
            let num4 = 0;
            let num5 = 256;
            let num6 = 1;
            if (1 < arg2) {
              while (true) {
                let num7 = num4;
                let tmp18 = tmp15;
                if (tmp < 0) {
                  tmp18 = 0 === num7;
                }
                if (tmp18) {
                  tmp18 = 0 !== self[tmp2 + num6 - 1];
                }
                if (tmp18) {
                  num7 = 1;
                }
                self[tmp2 + num6] = (tmp / num5 | 0) - num7 & 255;
                let sum = num6 + 1;
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
            return (arg1 | 0) + arg2;
          }
          writeIntBE(arg0, arg1, arg2, arg3) {
            const self = this;
            const tmp3 = arg3;
            if (!tmp3) {
              const _Math = Math;
              const powResult = Math.pow(2, 8 * arg2 - 1);
              const diff = powResult - 1;
              const tmp7 = -powResult;
              if (Buffer.isBuffer(self)) {
                if (diff >= +arg0) {
                  if (+arg0 >= tmp7) {
                    if ((arg1 | 0) + arg2 > self.length) {
                      const _RangeError = RangeError;
                      const self4 = this;
                      const self5 = this;
                      const rangeError = new RangeError("Index out of range");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self6 = this;
                const self7 = this;
                const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                throw rangeError1;
              } else {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                throw typeError;
              }
            }
            const diff1 = arg2 - 1;
            self[(arg1 | 0) + diff1] = 255 & +arg0;
            let diff2 = diff1 - 1;
            let num4 = 256;
            let num5 = 0;
            if (0 <= diff2) {
              while (true) {
                let num6 = num5;
                let tmp20 = tmp17;
                if (tmp < 0) {
                  tmp20 = 0 === num6;
                }
                if (tmp20) {
                  tmp20 = 0 !== self[tmp2 + diff2 + 1];
                }
                if (tmp20) {
                  num6 = 1;
                }
                self[tmp2 + diff2] = (tmp / num4 | 0) - num6 & 255;
                let diff3 = diff2 - 1;
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
            return (arg1 | 0) + arg2;
          }
          writeInt8(arg0, arg1, arg2) {
            const self = this;
            const tmp3 = arg2;
            if (!tmp3) {
              if (Buffer.isBuffer(self)) {
                if (127 >= +arg0) {
                  if (+arg0 >= -128) {
                    if ((arg1 | 0) + 1 > self.length) {
                      const _RangeError = RangeError;
                      const self4 = this;
                      const self5 = this;
                      const rangeError = new RangeError("Index out of range");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self6 = this;
                const self7 = this;
                const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                throw rangeError1;
              } else {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                throw typeError;
              }
            }
            let rounded = tmp;
            if (!Buffer.TYPED_ARRAY_SUPPORT) {
              const _Math = Math;
              rounded = Math.floor(tmp);
            }
            let sum = rounded;
            if (rounded < 0) {
              sum = 255 + rounded + 1;
            }
            self[arg1 | 0] = 255 & sum;
            return (arg1 | 0) + 1;
          }
          writeInt16LE(arg0, arg1, arg2) {
            const self = this;
            const tmp3 = arg2;
            if (!tmp3) {
              if (Buffer.isBuffer(self)) {
                if (32767 >= +arg0) {
                  if (+arg0 >= -32768) {
                    if ((arg1 | 0) + 2 > self.length) {
                      const _RangeError = RangeError;
                      const self4 = this;
                      const self5 = this;
                      const rangeError = new RangeError("Index out of range");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self6 = this;
                const self7 = this;
                const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                throw rangeError1;
              } else {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                throw typeError;
              }
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              self[arg1 | 0] = 255 & +arg0;
              self[(arg1 | 0) + 1] = +arg0 >>> 8;
            } else {
              let num11;
              let sum = tmp;
              if (+arg0 < 0) {
                sum = 65535 + tmp + 1;
              }
              const _Math = Math;
              const bound = Math.min(self.length - tmp2, 2);
              for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                let result = 8 * num11;
                self[tmp2 + num11] = (sum & 255 << result) >>> result;
              }
            }
            return (arg1 | 0) + 2;
          }
          writeInt16BE(arg0, arg1, arg2) {
            const self = this;
            const tmp3 = arg2;
            if (!tmp3) {
              if (Buffer.isBuffer(self)) {
                if (32767 >= +arg0) {
                  if (+arg0 >= -32768) {
                    if ((arg1 | 0) + 2 > self.length) {
                      const _RangeError = RangeError;
                      const self4 = this;
                      const self5 = this;
                      const rangeError = new RangeError("Index out of range");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self6 = this;
                const self7 = this;
                const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                throw rangeError1;
              } else {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                throw typeError;
              }
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              self[arg1 | 0] = +arg0 >>> 8;
              self[(arg1 | 0) + 1] = 255 & +arg0;
            } else {
              let num11;
              let sum = tmp;
              if (+arg0 < 0) {
                sum = 65535 + tmp + 1;
              }
              const _Math = Math;
              const bound = Math.min(self.length - tmp2, 2);
              for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                let result = 8 * (1 - num11);
                self[tmp2 + num11] = (sum & 255 << result) >>> result;
              }
            }
            return (arg1 | 0) + 2;
          }
          writeInt32LE(arg0, arg1, arg2) {
            const self = this;
            const tmp3 = arg2;
            if (!tmp3) {
              if (Buffer.isBuffer(self)) {
                if (2147483647 >= +arg0) {
                  if (+arg0 >= -2147483648) {
                    if ((arg1 | 0) + 4 > self.length) {
                      const _RangeError = RangeError;
                      const self4 = this;
                      const self5 = this;
                      const rangeError = new RangeError("Index out of range");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self6 = this;
                const self7 = this;
                const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                throw rangeError1;
              } else {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                throw typeError;
              }
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              self[arg1 | 0] = 255 & +arg0;
              self[(arg1 | 0) + 1] = +arg0 >>> 8;
              self[(arg1 | 0) + 2] = +arg0 >>> 16;
              self[(arg1 | 0) + 3] = +arg0 >>> 24;
            } else {
              let num11;
              let sum = tmp;
              if (+arg0 < 0) {
                sum = 4294967295 + tmp + 1;
              }
              const _Math = Math;
              const bound = Math.min(self.length - tmp2, 4);
              for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                self[tmp2 + num11] = sum >>> 8 * num11 & 255;
              }
            }
            return (arg1 | 0) + 4;
          }
          writeInt32BE(arg0, arg1, arg2) {
            const self = this;
            const tmp3 = arg2;
            if (!tmp3) {
              if (Buffer.isBuffer(self)) {
                if (2147483647 >= +arg0) {
                  if (+arg0 >= -2147483648) {
                    if ((arg1 | 0) + 4 > self.length) {
                      const _RangeError = RangeError;
                      const self4 = this;
                      const self5 = this;
                      const rangeError = new RangeError("Index out of range");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self6 = this;
                const self7 = this;
                const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                throw rangeError1;
              } else {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                throw typeError;
              }
            }
            let sum = tmp;
            if (+arg0 < 0) {
              sum = 4294967295 + tmp + 1;
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              self[arg1 | 0] = sum >>> 24;
              self[(arg1 | 0) + 1] = sum >>> 16;
              self[(arg1 | 0) + 2] = sum >>> 8;
              self[(arg1 | 0) + 3] = 255 & sum;
            } else {
              let num13;
              let sum1 = sum;
              if (sum < 0) {
                sum1 = 4294967295 + sum + 1;
              }
              const _Math = Math;
              const bound = Math.min(self.length - tmp2, 4);
              for (let num13 = 0; num13 < bound; num13 = num13 + 1) {
                self[tmp2 + num13] = sum1 >>> 8 * (3 - num13) & 255;
              }
            }
            return (arg1 | 0) + 4;
          }
          writeFloatLE(arg0, arg1, arg2) {
            const self = this;
            const tmp = arg2;
            if (!tmp) {
              if (arg1 + 4 > self.length) {
                const _RangeError2 = RangeError;
                const self4 = this;
                const self5 = this;
                const rangeError = new RangeError("Index out of range");
                throw rangeError;
              } else if (arg1 < 0) {
                const _RangeError = RangeError;
                const self2 = this;
                const self3 = this;
                const rangeError1 = new RangeError("Index out of range");
                throw rangeError1;
              }
            }
            closure_1.write(self, arg0, arg1, true, 23, 4);
            return arg1 + 4;
          }
          writeFloatBE(arg0, arg1, arg2) {
            const self = this;
            const tmp = arg2;
            if (!tmp) {
              if (arg1 + 4 > self.length) {
                const _RangeError2 = RangeError;
                const self4 = this;
                const self5 = this;
                const rangeError = new RangeError("Index out of range");
                throw rangeError;
              } else if (arg1 < 0) {
                const _RangeError = RangeError;
                const self2 = this;
                const self3 = this;
                const rangeError1 = new RangeError("Index out of range");
                throw rangeError1;
              }
            }
            closure_1.write(self, arg0, arg1, false, 23, 4);
            return arg1 + 4;
          }
          writeDoubleLE(arg0, arg1, arg2) {
            const self = this;
            const tmp = arg2;
            if (!tmp) {
              if (arg1 + 8 > self.length) {
                const _RangeError2 = RangeError;
                const self4 = this;
                const self5 = this;
                const rangeError = new RangeError("Index out of range");
                throw rangeError;
              } else if (arg1 < 0) {
                const _RangeError = RangeError;
                const self2 = this;
                const self3 = this;
                const rangeError1 = new RangeError("Index out of range");
                throw rangeError1;
              }
            }
            closure_1.write(self, arg0, arg1, true, 52, 8);
            return arg1 + 8;
          }
          writeDoubleBE(arg0, arg1, arg2) {
            const self = this;
            const tmp = arg2;
            if (!tmp) {
              if (arg1 + 8 > self.length) {
                const _RangeError2 = RangeError;
                const self4 = this;
                const self5 = this;
                const rangeError = new RangeError("Index out of range");
                throw rangeError;
              } else if (arg1 < 0) {
                const _RangeError = RangeError;
                const self2 = this;
                const self3 = this;
                const rangeError1 = new RangeError("Index out of range");
                throw rangeError1;
              }
            }
            closure_1.write(self, arg0, arg1, false, 52, 8);
            return arg1 + 8;
          }
          copy(arg0, arg1, arg2, arg3) {
            let length = arg3;
            const self = this;
            const tmp2 = arg3 || 0 === length;
            if (!tmp2) {
              length = self.length;
            }
            let num2 = arg1;
            if (arg1 >= arg0.length) {
              num2 = arg0.length;
            }
            if (!num2) {
              num2 = 0;
            }
            const tmp3 = length > 0 && length < (arg2 || 0);
            if (tmp3) {
              length = tmp;
            }
            if (length === (arg2 || 0)) {
              return 0;
            } else {
              if (0 !== arg0.length) {
                if (0 !== self.length) {
                  if (num2 < 0) {
                    const _RangeError3 = RangeError;
                    const self6 = this;
                    const self7 = this;
                    const rangeError = new RangeError("targetStart out of bounds");
                    throw rangeError;
                  } else {
                    if ((arg2 || 0) >= 0) {
                      if ((arg2 || 0) < self.length) {
                        if (length < 0) {
                          const _RangeError = RangeError;
                          const self2 = this;
                          const self3 = this;
                          const rangeError1 = new RangeError("sourceEnd out of bounds");
                          throw rangeError1;
                        } else {
                          if (length > self.length) {
                            length = self.length;
                          }
                          if (arg0.length - num2 < length - (arg2 || 0)) {
                            length = arg0.length - num2 + tmp;
                          }
                          const diff = length - tmp;
                          if (self === arg0) {
                            if ((arg2 || 0) < num2) {
                              if (num2 < length) {
                                let diff1 = diff - 1;
                                if (0 <= diff1) {
                                  do {
                                    arg0[diff1 + num2] = self[diff1 + tmp];
                                    diff1 = diff1 - 1;
                                  } while (0 <= diff1);
                                }
                              }
                              return diff;
                            }
                          }
                          if (diff >= 1000) {
                            if (Buffer.TYPED_ARRAY_SUPPORT) {
                              const _Uint8Array = Uint8Array;
                              set = Uint8Array.prototype.set;
                              set.call(arg0, self.subarray(arg2 || 0, (arg2 || 0) + diff), num2);
                            }
                          }
                          let num5 = 0;
                          if (0 < diff) {
                            do {
                              arg0[num5 + num2] = self[num5 + tmp];
                              num5 = num5 + 1;
                            } while (num5 < diff);
                          }
                        }
                      }
                    }
                    const _RangeError2 = RangeError;
                    const self4 = this;
                    const self5 = this;
                    const rangeError2 = new RangeError("sourceStart out of bounds");
                    throw rangeError2;
                  }
                }
              }
              return 0;
            }
          }
          fill(str, str2, str3, arg3) {
            let diff;
            let num5;
            let tmp4;
            let tmp5;
            let tmp6;
            const self = this;
            let tmp = arg3;
            if (typeof str === "string") {
              let length;
              let num;
              if (typeof str2 === "string") {
                length = self.length;
                num = 0;
                tmp = str2;
              } else {
                length = str3;
                num = str2;
                if (typeof str3 === "string") {
                  length = self.length;
                  tmp = str3;
                  num = str2;
                }
              }
              let tmp2 = str;
              if (1 === str.length) {
                const charCodeAtResult = str.charCodeAt(0);
                tmp2 = str;
                if (charCodeAtResult < 256) {
                  tmp2 = charCodeAtResult;
                }
              }
              if (undefined !== tmp) {
                if (typeof tmp !== "string") {
                  const _TypeError2 = TypeError;
                  const self8 = this;
                  const self9 = this;
                  const typeError = new TypeError("encoding must be a string");
                  throw typeError;
                }
              }
              tmp4 = tmp;
              tmp5 = length;
              tmp6 = num;
              num5 = tmp2;
              if (typeof tmp === "string") {
                tmp4 = tmp;
                tmp5 = length;
                tmp6 = num;
                num5 = tmp2;
                if (!Buffer.isEncoding(tmp)) {
                  const _TypeError = TypeError;
                  const self2 = this;
                  const self3 = this;
                  const typeError1 = new TypeError("Unknown encoding: " + tmp);
                  throw typeError1;
                }
              }
            } else {
              tmp4 = tmp;
              tmp5 = str3;
              tmp6 = str2;
              num5 = str;
              if (typeof str === "number") {
                num5 = str & 255;
                tmp4 = tmp;
                tmp5 = str3;
                tmp6 = str2;
              }
            }
            if (tmp6 >= 0) {
              if (self.length >= tmp6) {
                if (self.length >= tmp5) {
                  if (tmp5 <= tmp6) {
                    return self;
                  } else {
                    let sum = tmp6 >>> 0;
                    const tmp10 = undefined === tmp5 ? self.length : tmp5 >>> 0;
                    if (!num5) {
                      num5 = 0;
                    }
                    if (typeof num5 === "number") {
                      if (sum < tmp10) {
                        do {
                          self[sum] = num5;
                          sum = sum + 1;
                        } while (sum < tmp10);
                      }
                    } else {
                      let tmp11Result = num5;
                      if (!Buffer.isBuffer(num5)) {
                        obj = Object.create(Buffer.prototype);
                        if (!Buffer.TYPED_ARRAY_SUPPORT) {
                          if (!(obj instanceof Buffer)) {
                            let tmp29Result;
                            const obj2 = Object.create(Buffer.prototype);
                            if (!Buffer.TYPED_ARRAY_SUPPORT) {
                              if (!(obj2 instanceof Buffer)) {
                                tmp29Result = Buffer(num5, tmp4, undefined);
                              }
                              str2 = tmp29Result;
                            }
                            if (typeof num5 === "number") {
                              if (typeof tmp4 === "string") {
                                const _Error = Error;
                                const self4 = this;
                                const self5 = this;
                                const error = new Error("If encoding is specified then the first argument must be a string");
                                throw error;
                              } else {
                                tmp29Result = allocUnsafe(obj2, num5);
                              }
                            } else {
                              tmp29Result = from(obj2, num5, tmp4, undefined);
                            }
                          }
                          tmp11Result = utf8ToBytes(str2.toString());
                        }
                        if (typeof num5 === "number") {
                          if (typeof tmp4 === "string") {
                            const _Error2 = Error;
                            const self6 = this;
                            const self7 = this;
                            const error1 = new Error("If encoding is specified then the first argument must be a string");
                            throw error1;
                          } else {
                            str2 = allocUnsafe(obj, num5);
                          }
                        } else {
                          str2 = from(obj, num5, tmp4, undefined);
                        }
                      }
                      let num7 = 0;
                      if (0 < tmp10 - sum) {
                        do {
                          self[num7 + sum] = tmp11Result[num7 % tmp11Result.length];
                          num7 = num7 + 1;
                          diff = tmp10 - sum;
                        } while (num7 < diff);
                      }
                    }
                    return self;
                  }
                }
              }
            }
            const rangeError = new RangeError("Out of range index");
            throw rangeError;
          }
        }
        function from(arg0, byteLength, str, arg3) {
          if (typeof byteLength === "number") {
            const _TypeError3 = TypeError;
            const self23 = this;
            const self24 = this;
            const typeError = new TypeError("\"value\" argument must not be a number");
            throw typeError;
          } else {
            let tmp8;
            const _ArrayBuffer2 = ArrayBuffer;
            if (typeof ArrayBuffer !== "undefined") {
              const _ArrayBuffer3 = ArrayBuffer;
              if (byteLength instanceof ArrayBuffer) {
                byteLength = byteLength.byteLength;
                if (str >= 0) {
                  if (byteLength.byteLength >= str) {
                    let num25 = arg3;
                    const byteLength2 = byteLength.byteLength;
                    if (!arg3) {
                      num25 = 0;
                    }
                    if (byteLength2 < str + num25) {
                      const _RangeError5 = RangeError;
                      const self19 = this;
                      const self20 = this;
                      const rangeError = new RangeError("'length' is out of bounds");
                      throw rangeError;
                    } else {
                      let uint8Array;
                      if (undefined === str) {
                        let tmp43;
                        if (undefined === arg3) {
                          const _Uint8Array3 = Uint8Array;
                          const self15 = this;
                          const self16 = this;
                          uint8Array = new Uint8Array(byteLength);
                        }
                        if (Buffer.TYPED_ARRAY_SUPPORT) {
                          uint8Array.__proto__ = Buffer.prototype;
                          tmp43 = uint8Array;
                        } else {
                          let num26 = 0;
                          if (uint8Array.length >= 0) {
                            let num27 = 1073741823;
                            let num28 = 1073741823;
                            if (Buffer.TYPED_ARRAY_SUPPORT) {
                              num28 = 2147483647;
                            }
                            if (uint8Array.length >= num28) {
                              const _RangeError4 = RangeError;
                              if (Buffer.TYPED_ARRAY_SUPPORT) {
                                num27 = 2147483647;
                              }
                              const self17 = this;
                              const self18 = this;
                              const _RangeError41 = new _RangeError4("Attempt to allocate Buffer larger than maximum size: 0x" + num27.toString(16) + " bytes");
                              throw _RangeError41;
                            } else {
                              num26 = length4 | 0 | 0;
                            }
                          }
                          const tmp42 = createBuffer(arg0, num26);
                          tmp43 = tmp42;
                          let num32 = 0;
                          if (0 < num26) {
                            do {
                              tmp42[num32] = 255 & uint8Array[num32];
                              num32 = num32 + 1;
                              tmp43 = tmp42;
                            } while (num32 < num26);
                          }
                        }
                        tmp8 = tmp43;
                      }
                      if (undefined === arg3) {
                        const _Uint8Array2 = Uint8Array;
                        const self13 = this;
                        const self14 = this;
                        uint8Array = new Uint8Array(byteLength, str);
                      } else {
                        const _Uint8Array = Uint8Array;
                        const self11 = this;
                        const self12 = this;
                        uint8Array = new Uint8Array(byteLength, str, arg3);
                      }
                    }
                  }
                }
                const _RangeError6 = RangeError;
                const self21 = this;
                const self22 = this;
                const rangeError1 = new RangeError("'offset' is out of bounds");
                throw rangeError1;
              }
              return tmp8;
            }
            if (typeof byteLength === "string") {
              let tmp23 = typeof str === "string";
              if (typeof str === "string") {
                tmp23 = "" !== str;
              }
              let str10 = str;
              if (!tmp23) {
                str10 = "utf8";
              }
              if (Buffer.isEncoding(str10)) {
                const tmp28 = byteLength(byteLength, str10) | 0;
                const arr3 = createBuffer(arg0, tmp28);
                const writeResult = arr3.write(byteLength, str10);
                let substr = arr3;
                if (writeResult !== tmp28) {
                  substr = arr3.slice(0, writeResult);
                }
                tmp8 = substr;
              } else {
                const _TypeError2 = TypeError;
                const self9 = this;
                const self10 = this;
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
                const _RangeError3 = RangeError;
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  num17 = 2147483647;
                }
                const self7 = this;
                const self8 = this;
                const _RangeError31 = new _RangeError3("Attempt to allocate Buffer larger than maximum size: 0x" + num17.toString(16) + " bytes");
                throw _RangeError31;
              } else {
                const arr2 = createBuffer(arg0, byteLength.length | 0 | 0);
                tmp8 = arr2;
                if (0 !== arr2.length) {
                  byteLength.copy(arr2, 0, 0, byteLength.length | 0 | 0);
                  tmp8 = arr2;
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
                            const _RangeError = RangeError;
                            if (Buffer.TYPED_ARRAY_SUPPORT) {
                              num3 = 2147483647;
                            }
                            const self3 = this;
                            const self4 = this;
                            const _RangeError1 = new _RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + num3.toString(16) + " bytes");
                            throw _RangeError1;
                          } else {
                            num2 = length | 0 | 0;
                          }
                        }
                        const tmp7 = createBuffer(arg0, num2);
                        tmp8 = tmp7;
                        let num8 = 0;
                        if (0 < num2) {
                          do {
                            tmp7[num8] = 255 & data[num8];
                            num8 = num8 + 1;
                            tmp8 = tmp7;
                          } while (num8 < num2);
                        }
                      }
                    }
                  }
                } else {
                  const _ArrayBuffer4 = ArrayBuffer;
                }
                if (typeof byteLength.length === "number") {
                  let tmp13;
                  if (byteLength.length == byteLength.length) {
                    let num11 = 0;
                    if (byteLength.length >= 0) {
                      let num9 = 1073741823;
                      let num10 = 1073741823;
                      if (Buffer.TYPED_ARRAY_SUPPORT) {
                        num10 = 2147483647;
                      }
                      if (byteLength.length >= num10) {
                        const _RangeError2 = RangeError;
                        if (Buffer.TYPED_ARRAY_SUPPORT) {
                          num9 = 2147483647;
                        }
                        const self5 = this;
                        const self6 = this;
                        const _RangeError21 = new _RangeError2("Attempt to allocate Buffer larger than maximum size: 0x" + num9.toString(16) + " bytes");
                        throw _RangeError21;
                      } else {
                        num11 = length2 | 0 | 0;
                      }
                    }
                    const tmp12 = createBuffer(arg0, num11);
                    tmp13 = tmp12;
                    let num15 = 0;
                    if (0 < num11) {
                      do {
                        tmp12[num15] = 255 & byteLength[num15];
                        num15 = num15 + 1;
                        tmp13 = tmp12;
                      } while (num15 < num11);
                    }
                  }
                  tmp8 = tmp13;
                }
                tmp13 = createBuffer(arg0, 0);
              }
              const _TypeError = TypeError;
              const self = this;
              const self2 = this;
              const typeError2 = new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
              throw typeError2;
            }
          }
        }
        function allocUnsafe(arg0, num) {
          if (typeof num !== "number") {
            const _TypeError = TypeError;
            const self5 = this;
            const self6 = this;
            const typeError = new TypeError("\"size\" argument must be a number");
            throw typeError;
          } else if (num < 0) {
            const _RangeError2 = RangeError;
            const self3 = this;
            const self4 = this;
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
                const _RangeError = RangeError;
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  num = 2147483647;
                }
                const self = this;
                const self2 = this;
                const _RangeError1 = new _RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + num.toString(16) + " bytes");
                throw _RangeError1;
              } else {
                num3 = num | 0 | 0;
              }
            }
            const tmp14Result = createBuffer(arg0, num3);
            if (!Buffer.TYPED_ARRAY_SUPPORT) {
              let num6;
              for (let num6 = 0; num6 < num; num6 = num6 + 1) {
                tmp14Result[num6] = 0;
              }
            }
            return tmp14Result;
          }
        }
        function byteLength(byteLength, arg1) {
          let result;
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
                                  let str13;
                                  let toByteArray = closure_0.toByteArray;
                                  if (text.trim) {
                                    str13 = text.trim();
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
                                  return toByteArray(str14).length;
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
              return text.length;
            }
          }
        }
        function slowToString(arg0, arg1, arg2) {
          let num = arg1;
          const tmp = undefined === arg1 || num < 0;
          if (tmp) {
            num = 0;
          }
          const self = this;
          if (num > this.length) {
            return "";
          } else {
            let length = arg2;
            const tmp2 = undefined === arg2 || length > self.length;
            if (tmp2) {
              length = self.length;
            }
            if (length <= 0) {
              return "";
            } else if (length >>> 0 <= num >>> 0) {
              return "";
            }
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
                let tmp14;
                const _Uint8Array = Uint8Array;
                if (typeof Uint8Array.prototype.indexOf === "function") {
                  let callResult;
                  const _Uint8Array2 = Uint8Array;
                  if (arg4) {
                    const indexOf = prototype.indexOf;
                    callResult = indexOf.call(arg0, tmp7, num5);
                  } else {
                    const lastIndexOf = prototype.lastIndexOf;
                    callResult = lastIndexOf.call(arg0, tmp7, num5);
                  }
                  tmp14 = callResult;
                }
                return tmp14;
              }
              items = [fromResult & 255];
              tmp14 = arrayIndexOf(arg0, items, num5, tmp, arg4);
            } else {
              const _TypeError = TypeError;
              const self = this;
              const self2 = this;
              const typeError = new TypeError("val must be string, number or Buffer");
              throw typeError;
            }
          }
        }
        function arrayIndexOf(readUInt16BE, readUInt16BE2, arg2, arg3, arg4) {
          let tmp12;
          let num = 1;
          let result1 = length2;
          let result = length;
          let num2 = 1;
          let result2 = arg2;
          if (undefined !== arg3) {
            const _String = String;
            const str4 = String(arg3);
            const formatted = str4.toLowerCase();
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
          const tmp4 = arg4;
          if (tmp4) {
            let num7 = -1;
            if (result2 < result) {
              while (true) {
                let uInt16BE;
                let uInt16BE1;
                let num9;
                let diff;
                tmp12 = num7;
                if (1 === num) {
                  uInt16BE = readUInt16BE[result2];
                } else {
                  uInt16BE = readUInt16BE.readUInt16BE(result2 * num);
                }
                let tmp15 = -1 === tmp12;
                let num8 = 0;
                if (!tmp15) {
                  num8 = result2 - tmp12;
                }
                if (1 === num) {
                  uInt16BE1 = readUInt16BE2[num8];
                } else {
                  uInt16BE1 = readUInt16BE2.readUInt16BE(num8 * num);
                }
                if (uInt16BE === uInt16BE1) {
                  if (tmp15) {
                    tmp12 = result2;
                  }
                  num9 = tmp12;
                  diff = result2;
                  if (result2 - tmp12 + 1 === result1) {
                    break;
                  }
                } else {
                  diff = result2;
                  if (-1 !== tmp12) {
                    diff = result2 - (result2 - tmp12);
                  }
                  num9 = -1;
                }
                result2 = diff + 1;
                num7 = num9;
              }
              return tmp12 * num2;
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
                    let uInt16BE2;
                    let uInt16BE3;
                    let sum = diff1 + num5;
                    if (1 === num) {
                      uInt16BE2 = readUInt16BE[sum];
                    } else {
                      uInt16BE2 = readUInt16BE.readUInt16BE(sum * num);
                    }
                    if (1 === num) {
                      uInt16BE3 = readUInt16BE2[num5];
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
          let str2;
          let sum1;
          let tmp3;
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
                    let tmp29 = arg0[sum + 1];
                    let tmp30 = arg0[sum + 2];
                    let tmp31 = arg0[sum + 3];
                    let tmp32 = 192 & tmp29;
                    let tmp9 = 128 === tmp32;
                    if (128 === tmp32) {
                      tmp9 = 128 === (192 & tmp30);
                    }
                    if (tmp9) {
                      tmp9 = 128 === (192 & tmp31);
                    }
                    let tmp10 = tmp3;
                    if (tmp9) {
                      let tmp11 = (15 & tmp4) << 18 | (63 & tmp29) << 12 | (63 & tmp30) << 6 | 63 & tmp31;
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
                  let arr3 = items.push(diff >>> 10 & 1023 | 55296);
                  num5 = 56320 | 1023 & diff;
                  num4 = num;
                }
              }
              let arr4 = items.push(num5);
              sum = sum + num4;
              tmp3 = tmp8;
            } while (sum < bound);
          }
          if (items.length <= c12) {
            const _String3 = String;
            const fromCharCode2 = String.fromCharCode;
            const _String4 = String;
            str2 = fromCharCode2.apply(String, items);
          } else {
            let num6 = 0;
            let str = "";
            str2 = "";
            if (0 < items.length) {
              do {
                let _String = String;
                let _String2 = String;
                sum1 = num6 + c12;
                let apply = fromCharCode.apply;
                str = `${apply(String, arr.slice(num6, tmp28))}`;
                str2 = str;
                num6 = sum1;
              } while (sum1 < items.length);
            }
          }
          return str2;
        }
        function utf8ToBytes(str, arg1) {
          let tmp = arg1 || Infinity;
          items = [];
          let num = 0;
          let tmp2 = null;
          if (0 < str.length) {
            while (true) {
              let sum;
              let tmp11;
              let charCodeAtResult = str.charCodeAt(num);
              if (charCodeAtResult > 55295) {
                if (charCodeAtResult < 57344) {
                  let tmp13;
                  let tmp14;
                  if (tmp2) {
                    if (charCodeAtResult < 56320) {
                      let diff = tmp - 3;
                      tmp13 = charCodeAtResult;
                      tmp14 = diff;
                      if (-1 < diff) {
                        let arr = items.push(239, 191, 189);
                        tmp13 = charCodeAtResult;
                        tmp14 = diff;
                      }
                    } else {
                      sum = 65536 + (tmp2 - 55296 << 10 | charCodeAtResult - 56320);
                      tmp11 = tmp;
                    }
                    if (sum < 128) {
                      let diff1 = tmp11 - 1;
                      if (diff1 >= 0) {
                        let arr9 = items.push(sum);
                        tmp13 = null;
                        tmp14 = diff1;
                      }
                    } else if (sum < 2048) {
                      let diff2 = tmp11 - 2;
                      if (diff2 >= 0) {
                        let arr10 = items.push(sum >> 6 | 192, 63 & sum | 128);
                        tmp13 = null;
                        tmp14 = diff2;
                      }
                    } else if (sum < 65536) {
                      let diff3 = tmp11 - 3;
                      if (diff3 >= 0) {
                        let arr11 = items.push(sum >> 12 | 224, sum >> 6 & 63 | 128, 63 & sum | 128);
                        tmp13 = null;
                        tmp14 = diff3;
                      }
                    } else if (sum >= 1114112) {
                      break;
                    } else {
                      let diff4 = tmp11 - 4;
                      if (diff4 >= 0) {
                        let arr12 = items.push(sum >> 18 | 240, sum >> 12 & 63 | 128, sum >> 6 & 63 | 128, 63 & sum | 128);
                        tmp13 = null;
                        tmp14 = diff4;
                      }
                    }
                  } else if (charCodeAtResult > 56319) {
                    let diff5 = tmp - 3;
                    tmp13 = tmp2;
                    tmp14 = diff5;
                    if (-1 < diff5) {
                      let arr13 = items.push(239, 191, 189);
                      tmp13 = tmp2;
                      tmp14 = diff5;
                    }
                  } else {
                    tmp13 = charCodeAtResult;
                    tmp14 = tmp;
                    if (num + 1 === length) {
                      let diff6 = tmp - 3;
                      tmp13 = tmp2;
                      tmp14 = diff6;
                      if (-1 < diff6) {
                        let arr14 = items.push(239, 191, 189);
                        tmp13 = tmp2;
                        tmp14 = diff6;
                      }
                    }
                  }
                  num = num + 1;
                  tmp2 = tmp13;
                  tmp = tmp14;
                }
              }
              let tmp7 = tmp2;
              let tmp8 = tmp;
              if (tmp2) {
                let diff7 = tmp - 3;
                tmp7 = diff7 > -1;
                tmp8 = diff7;
              }
              sum = charCodeAtResult;
              tmp11 = tmp8;
              if (tmp7) {
                let arr15 = items.push(239, 191, 189);
                sum = charCodeAtResult;
                tmp11 = tmp8;
              }
            }
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("Invalid code point");
            throw error;
          }
          return items;
        }
        constants = closure_1(4);
        closure_1 = closure_1(5);
        let closure_2 = closure_1(6);
        constants.Buffer = Buffer;
        constants.SlowBuffer = function SlowBuffer(arg0) {
          let num = arg0;
          if (+arg0 != arg0) {
            num = 0;
          }
          return Buffer.alloc(+num);
        };
        constants.INSPECT_MAX_BYTES = 50;
        let tmp = constants;
        if (undefined !== TYPED_ARRAY_SUPPORT.TYPED_ARRAY_SUPPORT) {
          TYPED_ARRAY_SUPPORT = TYPED_ARRAY_SUPPORT.TYPED_ARRAY_SUPPORT;
        } else {
          let num = 0;
          TYPED_ARRAY_SUPPORT = typedArraySupport();
        }
        Buffer.TYPED_ARRAY_SUPPORT = TYPED_ARRAY_SUPPORT;
        let num2 = 1073741823;
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          num2 = 2147483647;
        }
        tmp.kMaxLength = num2;
        Buffer.poolSize = 8192;
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          let tmp2 = globalThis;
          let _Uint8Array = Uint8Array;
          class Buffer {
            constructor(num, str, arg2) {
              const self = this;
              if (!Buffer.TYPED_ARRAY_SUPPORT) {
                if (!(self instanceof Buffer)) {
                  const tmpResult = Buffer(num, str, arg2);
                  return tmpResult;
                }
              }
              if (typeof num === "number") {
                if (typeof str === "string") {
                  const _Error = Error;
                  const self2 = this;
                  const self3 = this;
                  const error = new Error("If encoding is specified then the first argument must be a string");
                  throw error;
                } else {
                  return allocUnsafe(self, num);
                }
              } else {
                return from(self, 0, str, arg2);
              }
            }
            static _augment(arg0) {
              arg0.__proto__ = Buffer.prototype;
              return arg0;
            }
            static from(arg0, arg1, arg2) {
          return from(null, arg0, arg1, arg2);
        }
            static alloc(num, arg1, str) {
              if (typeof num !== "number") {
                const _TypeError = TypeError;
                const self3 = this;
                const self4 = this;
                const typeError = new TypeError("\"size\" argument must be a number");
                throw typeError;
              } else if (0 < 0) {
                const _RangeError = RangeError;
                const self = this;
                const self2 = this;
                const rangeError = new RangeError("\"size\" argument must not be negative");
                throw rangeError;
              } else {
                let tmp4;
                if (0 <= 0) {
                  tmp4 = createBuffer(null, num);
                } else if (undefined !== arg1) {
                  let fillResult;
                  if (typeof str === "string") {
                    obj = createBuffer(null, 0);
                    fillResult = obj.fill(arg1, str);
                  } else {
                    const obj2 = createBuffer(null, 0);
                    fillResult = obj2.fill(arg1);
                  }
                  tmp4 = fillResult;
                } else {
                  tmp4 = createBuffer(null, num);
                }
                return tmp4;
              }
            }
            static allocUnsafe(arg0) {
          return allocUnsafe(null, arg0);
        }
            static allocUnsafeSlow(arg0) {
          return allocUnsafe(null, arg0);
        }
            static isBuffer(_isBuffer) {
              return !(null == _isBuffer || !_isBuffer._isBuffer);
            }
            static compare(arg0, arg1) {
              if (Buffer.isBuffer(arg0)) {
                if (Buffer.isBuffer(arg1)) {
                  if (arg0 === arg1) {
                    return 0;
                  } else {
                    const _Math = Math;
                    const bound = Math.min(length, length2);
                    let num3 = 0;
                    let tmp5 = length2;
                    let tmp6 = length;
                    if (0 < bound) {
                      while (arg0[num3] === arg1[num3]) {
                        num3 = num3 + 1;
                        tmp5 = length2;
                        tmp6 = length;
                      }
                      tmp6 = arg0[num3];
                      tmp5 = arg1[num3];
                    }
                    let num4 = -1;
                    if (tmp6 >= tmp5) {
                      let num5 = 0;
                      if (tmp5 < tmp6) {
                        num5 = 1;
                      }
                      num4 = num5;
                    }
                    return num4;
                  }
                }
              }
              const typeError = new TypeError("Arguments must be Buffers");
              throw typeError;
            }
            static isEncoding(arg0) {
              const str = String(arg0);
              switch (str.toLowerCase()) {
                case "hex":
                {
                  return true;
                }
                case "utf8":
                {
                  return true;
                }
                case "utf-8":
                {
                  return true;
                }
                case "ascii":
                {
                  return true;
                }
                case "latin1":
                {
                  return true;
                }
                case "binary":
                {
                  return true;
                }
                case "base64":
                {
                  return true;
                }
                case "ucs2":
                {
                  return true;
                }
                case "ucs-2":
                {
                  return true;
                }
                case "utf16le":
                {
                  return true;
                }
                case "utf-16le":
                {
                  return true;
                }
                default:
                {
                  return false;
                }
              }
            }
            static concat(arg0, arg1) {
              let length;
              if (closure_2(arg0)) {
                if (0 === arg0.length) {
                  return Buffer.alloc(0);
                } else {
                  let num5 = arg1;
                  if (undefined === arg1) {
                    let num3 = 0;
                    let num4 = 0;
                    num5 = 0;
                    if (0 < arg0.length) {
                      do {
                        num4 = num4 + arg0[num3].length;
                        num3 = num3 + 1;
                        num5 = num4;
                        length = arg0.length;
                      } while (num3 < length);
                    }
                  }
                  const allocUnsafeResult = Buffer.allocUnsafe(num5);
                  let num7 = 0;
                  let num8 = 0;
                  if (0 < arg0.length) {
                    while (Buffer.isBuffer(arg0[num8])) {
                      let copyResult = arr.copy(allocUnsafeResult, num7);
                      num7 = num7 + arr.length;
                      num8 = num8 + 1;
                    }
                    const _TypeError2 = TypeError;
                    const self3 = this;
                    const self4 = this;
                    const typeError = new TypeError("\"list\" argument must be an Array of Buffers");
                    throw typeError;
                  }
                  return allocUnsafeResult;
                }
              } else {
                const _TypeError = TypeError;
                const self = this;
                const self2 = this;
                const typeError1 = new TypeError("\"list\" argument must be an Array of Buffers");
                throw typeError1;
              }
            }
            swap16() {
              const self = this;
              if (this.length % 2 !== 0) {
                const _RangeError = RangeError;
                const self2 = this;
                const self3 = this;
                const rangeError = new RangeError("Buffer size must be a multiple of 16-bits");
                throw rangeError;
              } else {
                let num2;
                for (let num2 = 0; num2 < length; num2 = num2 + 2) {
                  let sum = num2 + 1;
                  self[num2] = self[sum];
                  self[sum] = self[num2];
                }
                return self;
              }
            }
            swap32() {
              const self = this;
              if (this.length % 4 !== 0) {
                const _RangeError = RangeError;
                const self2 = this;
                const self3 = this;
                const rangeError = new RangeError("Buffer size must be a multiple of 32-bits");
                throw rangeError;
              } else {
                let num4;
                for (let num4 = 0; num4 < length; num4 = num4 + 4) {
                  let sum = num4 + 3;
                  self[num4] = self[sum];
                  self[sum] = self[num4];
                  let sum1 = num4 + 1;
                  let sum2 = num4 + 2;
                  self[sum1] = self[sum2];
                  self[sum2] = self[sum1];
                }
                return self;
              }
            }
            swap64() {
              const self = this;
              if (this.length % 8 !== 0) {
                const _RangeError = RangeError;
                const self2 = this;
                const self3 = this;
                const rangeError = new RangeError("Buffer size must be a multiple of 64-bits");
                throw rangeError;
              } else {
                let num;
                for (let num = 0; num < length; num = num + 8) {
                  let sum = num + 7;
                  self[num] = self[sum];
                  self[sum] = self[num];
                  let sum1 = num + 1;
                  let sum2 = num + 6;
                  self[sum1] = self[sum2];
                  self[sum2] = self[sum1];
                  let sum3 = num + 2;
                  let sum4 = num + 5;
                  self[sum3] = self[sum4];
                  self[sum4] = self[sum3];
                  let sum5 = num + 3;
                  let sum6 = num + 4;
                  self[sum5] = self[sum6];
                  self[sum6] = self[sum5];
                }
                return self;
              }
            }
            toString() {
              const self = this;
              let str = "";
              if (0 !== (this.length | 0)) {
                let applyResult;
                if (0 === arguments.length) {
                  applyResult = utf8Slice(self, 0, tmp);
                } else {
                  applyResult = slowToString(...arguments);
                }
                str = applyResult;
              }
              return str;
            }
            equals(arg0) {
              if (Buffer.isBuffer(arg0)) {
                const tmp5 = this === arg0 || 0 === Buffer.compare(tmp4, arg0);
                return tmp5;
              } else {
                const _TypeError = TypeError;
                const self = this;
                const self2 = this;
                const typeError = new TypeError("Argument must be a Buffer");
                throw typeError;
              }
            }
            inspect() {
              const self = this;
              const INSPECT_MAX_BYTES = closure_0.INSPECT_MAX_BYTES;
              let str = "";
              if (this.length > 0) {
                const str3 = self.toString("hex", 0, INSPECT_MAX_BYTES);
                const match = str3.match(/.{2}/g);
                const joined = match.join(" ");
                let text = joined;
                if (self.length > INSPECT_MAX_BYTES) {
                  text = `${tmp} ... `;
                }
                str = text;
              }
              return "<Buffer " + str + ">";
            }
            compare(arr, arg1, arg2, arg3, arg4) {
              if (Buffer.isBuffer(arr)) {
                let num = arg1;
                if (undefined === arg1) {
                  num = 0;
                }
                let tmp4 = arg2;
                if (undefined === arg2) {
                  let num2 = 0;
                  if (arr) {
                    num2 = arr.length;
                  }
                  tmp4 = num2;
                }
                let num3 = arg3;
                if (undefined === arg3) {
                  num3 = 0;
                }
                const self3 = this;
                let length = arg4;
                if (undefined === arg4) {
                  length = self3.length;
                }
                if (num >= 0) {
                  if (tmp4 <= arr.length) {
                    if (num3 >= 0) {
                      if (length <= self3.length) {
                        if (num3 >= length) {
                          if (num >= tmp4) {
                            return 0;
                          }
                        }
                        if (num3 >= length) {
                          return -1;
                        } else if (num >= tmp4) {
                          return 1;
                        } else if (self3 === arr) {
                          return 0;
                        } else {
                          const diff = tmp11 - tmp12;
                          const diff1 = tmp14 - tmp15;
                          const _Math = Math;
                          const bound = Math.min(diff, diff1);
                          const substr = self3.slice(tmp12, tmp11);
                          const substr1 = arr.slice(tmp15, tmp14);
                          let num5 = 0;
                          let tmp6 = diff1;
                          let tmp7 = diff;
                          if (0 < bound) {
                            while (substr[num5] === substr1[num5]) {
                              num5 = num5 + 1;
                              tmp6 = diff1;
                              tmp7 = diff;
                            }
                            tmp7 = substr[num5];
                            tmp6 = substr1[num5];
                          }
                          let num6 = -1;
                          if (tmp7 >= tmp6) {
                            let num7 = 0;
                            if (tmp6 < tmp7) {
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
                const _RangeError = RangeError;
                const self4 = this;
                const self5 = this;
                const rangeError = new RangeError("out of range index");
                throw rangeError;
              } else {
                const _TypeError = TypeError;
                const self = this;
                const self2 = this;
                const typeError = new TypeError("Argument must be a Buffer");
                throw typeError;
              }
            }
            includes(arg0, arg1, arg2) {
              return -1 !== this.indexOf(arg0, arg1, arg2);
            }
            indexOf(arg0, arg1, arg2) {
              return bidirectionalIndexOf(this, arg0, arg1, arg2, true);
            }
            lastIndexOf(arg0, arg1, arg2) {
              return bidirectionalIndexOf(this, arg0, arg1, arg2, false);
            }
            write(arg0, str, arg2, arg3) {
              let length;
              let num;
              let str2;
              const self = this;
              if (undefined === str) {
                length = self.length;
                str2 = "utf8";
                num = 0;
              } else {
                if (undefined === arg2) {
                  if (typeof str === "string") {
                    length = self.length;
                    num = 0;
                    str2 = str;
                  }
                }
                const _isFinite = isFinite;
                if (isFinite(str)) {
                  const _isFinite2 = isFinite;
                  str2 = arg2;
                  num = tmp4;
                  if (isFinite(arg2)) {
                    str2 = arg3;
                    length = tmp5;
                    num = tmp4;
                    if (undefined === arg3) {
                      str2 = "utf8";
                      length = tmp5;
                      num = tmp4;
                    }
                  }
                } else {
                  const _Error = Error;
                  const self2 = this;
                  const self3 = this;
                  const error = new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                  throw error;
                }
              }
              const diff = self.length - num;
              const tmp7 = undefined === length || length > diff;
              if (tmp7) {
                length = diff;
              }
              if (arg0.length <= 0) {
                if (num <= self.length) {
                  if (!str2) {
                    str2 = "utf8";
                  }
                }
              }
              const rangeError = new RangeError("Attempt to write outside buffer bounds");
              throw rangeError;
            }
            toJSON() {
              let self = this._arr;
              const call = slice.call;
              if (!self) {
                self = this;
              }
              obj = { type: "Buffer", data: call(self, 0) };
              return obj;
            }
            slice(arg0, arg1) {
              let num;
              let num2;
              let tmp13;
              const self = this;
              if (~(~arg0) < 0) {
                num = tmp + length;
                if (num < 0) {
                  num = 0;
                }
              } else {
                num = tmp;
                if (~(~arg0) > this.length) {
                  num = length;
                }
              }
              let tmp2 = length;
              if (undefined !== arg1) {
                tmp2 = ~(~arg1);
              }
              if (tmp2 < 0) {
                num2 = tmp2 + length;
                if (num2 < 0) {
                  num2 = 0;
                }
              } else {
                num2 = tmp2;
                if (tmp2 > this.length) {
                  num2 = length;
                }
              }
              if (num2 < num) {
                num2 = num;
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                const subarrayResult = self.subarray(num, num2);
                subarrayResult.__proto__ = Buffer.prototype;
                tmp13 = subarrayResult;
              } else {
                let tmp8;
                const diff = num2 - num;
                obj = Object.create(Buffer.prototype);
                if (!Buffer.TYPED_ARRAY_SUPPORT) {
                  if (!(obj instanceof Buffer)) {
                    let tmp3Result;
                    const obj2 = Object.create(Buffer.prototype);
                    if (!Buffer.TYPED_ARRAY_SUPPORT) {
                      if (!(obj2 instanceof Buffer)) {
                        tmp3Result = Buffer(diff, undefined, undefined);
                      }
                      tmp8 = tmp3Result;
                    }
                    if (typeof diff === "number") {
                      if (typeof undefined === "string") {
                        const _Error = Error;
                        const self2 = this;
                        const self3 = this;
                        const error = new Error("If encoding is specified then the first argument must be a string");
                        throw error;
                      } else {
                        tmp3Result = allocUnsafe(obj2, diff);
                      }
                    } else {
                      tmp3Result = from(obj2, diff, undefined, undefined);
                    }
                  }
                  tmp13 = tmp8;
                  let num4 = 0;
                  if (0 < diff) {
                    do {
                      tmp8[num4] = self[num4 + num];
                      num4 = num4 + 1;
                      tmp13 = tmp8;
                    } while (num4 < diff);
                  }
                }
                if (typeof diff === "number") {
                  if (typeof undefined === "string") {
                    const _Error2 = Error;
                    const self4 = this;
                    const self5 = this;
                    const error1 = new Error("If encoding is specified then the first argument must be a string");
                    throw error1;
                  } else {
                    tmp8 = allocUnsafe(obj, diff);
                  }
                } else {
                  tmp8 = from(obj, diff, undefined, undefined);
                }
              }
              return tmp13;
            }
            readUIntLE(arg0, arg1, arg2) {
              const self = this;
              const tmp3 = arg2;
              if (!tmp3) {
                if ((arg0 | 0) % 1 === 0) {
                  if ((arg0 | 0) >= 0) {
                    if ((arg0 | 0) + (arg1 | 0) > tmp4) {
                      const _RangeError = RangeError;
                      const self2 = this;
                      const self3 = this;
                      const rangeError = new RangeError("Trying to access beyond buffer length");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self4 = this;
                const self5 = this;
                const rangeError1 = new RangeError("offset is not uint");
                throw rangeError1;
              }
              let tmp11 = self[tmp];
              let num3 = 256;
              let tmp12 = tmp11;
              let num4 = 1;
              if (1 < (arg1 | 0)) {
                const sum = tmp11 + self[tmp + num4] * num3;
                const sum1 = num4 + 1;
                tmp12 = sum;
                while (sum1 < (arg1 | 0)) {
                  num3 = num3 * 256;
                  num4 = sum1;
                  tmp11 = sum;
                  tmp12 = sum;
                  if (!num3) {
                    break;
                  }
                }
              }
              return tmp12;
            }
            readUIntBE(arg0, arg1, arg2) {
              const self = this;
              const tmp3 = arg2;
              if (!tmp3) {
                if ((arg0 | 0) % 1 === 0) {
                  if ((arg0 | 0) >= 0) {
                    if ((arg0 | 0) + (arg1 | 0) > tmp4) {
                      const _RangeError = RangeError;
                      const self2 = this;
                      const self3 = this;
                      const rangeError = new RangeError("Trying to access beyond buffer length");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self4 = this;
                const self5 = this;
                const rangeError1 = new RangeError("offset is not uint");
                throw rangeError1;
              }
              let diff = tmp2 - 1;
              let tmp12 = self[tmp + diff];
              let num3 = 256;
              let tmp13 = tmp12;
              if (0 < diff) {
                const diff1 = diff - 1;
                const sum = tmp12 + self[tmp + diff1] * num3;
                tmp13 = sum;
                while (0 < diff1) {
                  num3 = num3 * 256;
                  tmp12 = sum;
                  diff = diff1;
                  tmp13 = sum;
                  if (!num3) {
                    break;
                  }
                }
              }
              return tmp13;
            }
            readUInt8(arg0, arg1) {
              const tmp = arg1;
              if (!tmp) {
                if (arg0 % 1 === 0) {
                  if (arg0 >= 0) {
                    if (arg0 + 1 > tmp2) {
                      const _RangeError = RangeError;
                      const self = this;
                      const self2 = this;
                      const rangeError = new RangeError("Trying to access beyond buffer length");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self3 = this;
                const self4 = this;
                const rangeError1 = new RangeError("offset is not uint");
                throw rangeError1;
              }
              return this[arg0];
            }
            readUInt16LE(arg0, arg1) {
              const self = this;
              const tmp = arg1;
              if (!tmp) {
                if (arg0 % 1 === 0) {
                  if (arg0 >= 0) {
                    if (arg0 + 2 > tmp2) {
                      const _RangeError = RangeError;
                      const self2 = this;
                      const self3 = this;
                      const rangeError = new RangeError("Trying to access beyond buffer length");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self4 = this;
                const self5 = this;
                const rangeError1 = new RangeError("offset is not uint");
                throw rangeError1;
              }
              return self[arg0] | self[arg0 + 1] << 8;
            }
            readUInt16BE(arg0, arg1) {
              const self = this;
              const tmp = arg1;
              if (!tmp) {
                if (arg0 % 1 === 0) {
                  if (arg0 >= 0) {
                    if (arg0 + 2 > tmp2) {
                      const _RangeError = RangeError;
                      const self2 = this;
                      const self3 = this;
                      const rangeError = new RangeError("Trying to access beyond buffer length");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self4 = this;
                const self5 = this;
                const rangeError1 = new RangeError("offset is not uint");
                throw rangeError1;
              }
              return self[arg0] << 8 | self[arg0 + 1];
            }
            readUInt32LE(arg0, arg1) {
              const self = this;
              const tmp = arg1;
              if (!tmp) {
                if (arg0 % 1 === 0) {
                  if (arg0 >= 0) {
                    if (arg0 + 4 > tmp2) {
                      const _RangeError = RangeError;
                      const self2 = this;
                      const self3 = this;
                      const rangeError = new RangeError("Trying to access beyond buffer length");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self4 = this;
                const self5 = this;
                const rangeError1 = new RangeError("offset is not uint");
                throw rangeError1;
              }
              return (self[arg0] | self[arg0 + 1] << 8 | self[arg0 + 2] << 16) + 16777216 * self[arg0 + 3];
            }
            readUInt32BE(arg0, arg1) {
              const self = this;
              const tmp = arg1;
              if (!tmp) {
                if (arg0 % 1 === 0) {
                  if (arg0 >= 0) {
                    if (arg0 + 4 > tmp2) {
                      const _RangeError = RangeError;
                      const self2 = this;
                      const self3 = this;
                      const rangeError = new RangeError("Trying to access beyond buffer length");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self4 = this;
                const self5 = this;
                const rangeError1 = new RangeError("offset is not uint");
                throw rangeError1;
              }
              return 16777216 * self[arg0] + (self[arg0 + 1] << 16 | self[arg0 + 2] << 8 | self[arg0 + 3]);
            }
            readIntLE(arg0, arg1, arg2) {
              const self = this;
              const tmp3 = arg2;
              if (!tmp3) {
                if ((arg0 | 0) % 1 === 0) {
                  if ((arg0 | 0) >= 0) {
                    if ((arg0 | 0) + (arg1 | 0) > tmp4) {
                      const _RangeError = RangeError;
                      const self2 = this;
                      const self3 = this;
                      const rangeError = new RangeError("Trying to access beyond buffer length");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self4 = this;
                const self5 = this;
                const rangeError1 = new RangeError("offset is not uint");
                throw rangeError1;
              }
              let tmp11 = self[tmp];
              let num3 = 1;
              let num4 = 256;
              let tmp12 = tmp11;
              let num5 = 1;
              if (1 < (arg1 | 0)) {
                const sum = tmp11 + self[tmp + num3] * num4;
                const sum1 = num3 + 1;
                num5 = num4;
                tmp12 = sum;
                while (sum1 < (arg1 | 0)) {
                  num4 = num4 * 256;
                  num3 = sum1;
                  tmp11 = sum;
                  tmp12 = sum;
                  num5 = num4;
                  if (!num5) {
                    break;
                  }
                }
              }
              let diff = tmp12;
              if (tmp12 >= num5 * 128) {
                const _Math = Math;
                diff = tmp12 - Math.pow(2, 8 * tmp2);
              }
              return diff;
            }
            readIntBE(arg0, arg1, arg2) {
              const self = this;
              const tmp3 = arg2;
              if (!tmp3) {
                if ((arg0 | 0) % 1 === 0) {
                  if ((arg0 | 0) >= 0) {
                    if ((arg0 | 0) + (arg1 | 0) > tmp4) {
                      const _RangeError = RangeError;
                      const self2 = this;
                      const self3 = this;
                      const rangeError = new RangeError("Trying to access beyond buffer length");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self4 = this;
                const self5 = this;
                const rangeError1 = new RangeError("offset is not uint");
                throw rangeError1;
              }
              let diff = tmp2 - 1;
              let tmp12 = self[tmp + diff];
              let num3 = 256;
              let tmp13 = tmp12;
              let num4 = 1;
              if (0 < diff) {
                const diff1 = diff - 1;
                const sum = tmp12 + self[tmp + diff1] * num3;
                tmp13 = sum;
                num4 = num3;
                while (0 < diff1) {
                  num3 = num3 * 256;
                  tmp12 = sum;
                  diff = diff1;
                  tmp13 = sum;
                  num4 = num3;
                  if (!num4) {
                    break;
                  }
                }
              }
              let diff2 = tmp13;
              if (tmp13 >= num4 * 128) {
                const _Math = Math;
                diff2 = tmp13 - Math.pow(2, 8 * tmp2);
              }
              return diff2;
            }
            readInt8(arg0, arg1) {
              let result;
              const self = this;
              const tmp = arg1;
              if (!tmp) {
                if (arg0 % 1 === 0) {
                  if (arg0 >= 0) {
                    if (arg0 + 1 > tmp2) {
                      const _RangeError = RangeError;
                      const self2 = this;
                      const self3 = this;
                      const rangeError = new RangeError("Trying to access beyond buffer length");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self4 = this;
                const self5 = this;
                const rangeError1 = new RangeError("offset is not uint");
                throw rangeError1;
              }
              if (128 & self[arg0]) {
                result = -1 * (255 - tmp9 + 1);
              } else {
                result = tmp9;
              }
              return result;
            }
            readInt16LE(arg0, arg1) {
              const self = this;
              const tmp = arg1;
              if (!tmp) {
                if (arg0 % 1 === 0) {
                  if (arg0 >= 0) {
                    if (arg0 + 2 > tmp2) {
                      const _RangeError = RangeError;
                      const self2 = this;
                      const self3 = this;
                      const rangeError = new RangeError("Trying to access beyond buffer length");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self4 = this;
                const self5 = this;
                const rangeError1 = new RangeError("offset is not uint");
                throw rangeError1;
              }
              let tmp10 = tmp9;
              if (32768 & (self[arg0] | self[arg0 + 1] << 8)) {
                tmp10 = 4294901760 | tmp9;
              }
              return tmp10;
            }
            readInt16BE(arg0, arg1) {
              const self = this;
              const tmp = arg1;
              if (!tmp) {
                if (arg0 % 1 === 0) {
                  if (arg0 >= 0) {
                    if (arg0 + 2 > tmp2) {
                      const _RangeError = RangeError;
                      const self2 = this;
                      const self3 = this;
                      const rangeError = new RangeError("Trying to access beyond buffer length");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self4 = this;
                const self5 = this;
                const rangeError1 = new RangeError("offset is not uint");
                throw rangeError1;
              }
              let tmp10 = tmp9;
              if (32768 & (self[arg0 + 1] | self[arg0] << 8)) {
                tmp10 = 4294901760 | tmp9;
              }
              return tmp10;
            }
            readInt32LE(arg0, arg1) {
              const self = this;
              const tmp = arg1;
              if (!tmp) {
                if (arg0 % 1 === 0) {
                  if (arg0 >= 0) {
                    if (arg0 + 4 > tmp2) {
                      const _RangeError = RangeError;
                      const self2 = this;
                      const self3 = this;
                      const rangeError = new RangeError("Trying to access beyond buffer length");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self4 = this;
                const self5 = this;
                const rangeError1 = new RangeError("offset is not uint");
                throw rangeError1;
              }
              return self[arg0] | self[arg0 + 1] << 8 | self[arg0 + 2] << 16 | self[arg0 + 3] << 24;
            }
            readInt32BE(arg0, arg1) {
              const self = this;
              const tmp = arg1;
              if (!tmp) {
                if (arg0 % 1 === 0) {
                  if (arg0 >= 0) {
                    if (arg0 + 4 > tmp2) {
                      const _RangeError = RangeError;
                      const self2 = this;
                      const self3 = this;
                      const rangeError = new RangeError("Trying to access beyond buffer length");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self4 = this;
                const self5 = this;
                const rangeError1 = new RangeError("offset is not uint");
                throw rangeError1;
              }
              return self[arg0] << 24 | self[arg0 + 1] << 16 | self[arg0 + 2] << 8 | self[arg0 + 3];
            }
            readFloatLE(arg0, arg1) {
              const self = this;
              const tmp = arg1;
              if (!tmp) {
                if (arg0 % 1 === 0) {
                  if (arg0 >= 0) {
                    if (arg0 + 4 > tmp2) {
                      const _RangeError = RangeError;
                      const self2 = this;
                      const self3 = this;
                      const rangeError = new RangeError("Trying to access beyond buffer length");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self4 = this;
                const self5 = this;
                const rangeError1 = new RangeError("offset is not uint");
                throw rangeError1;
              }
              return closure_1.read(self, arg0, true, 23, 4);
            }
            readFloatBE(arg0, arg1) {
              const self = this;
              const tmp = arg1;
              if (!tmp) {
                if (arg0 % 1 === 0) {
                  if (arg0 >= 0) {
                    if (arg0 + 4 > tmp2) {
                      const _RangeError = RangeError;
                      const self2 = this;
                      const self3 = this;
                      const rangeError = new RangeError("Trying to access beyond buffer length");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self4 = this;
                const self5 = this;
                const rangeError1 = new RangeError("offset is not uint");
                throw rangeError1;
              }
              return closure_1.read(self, arg0, false, 23, 4);
            }
            readDoubleLE(arg0, arg1) {
              const self = this;
              const tmp = arg1;
              if (!tmp) {
                if (arg0 % 1 === 0) {
                  if (arg0 >= 0) {
                    if (arg0 + 8 > tmp2) {
                      const _RangeError = RangeError;
                      const self2 = this;
                      const self3 = this;
                      const rangeError = new RangeError("Trying to access beyond buffer length");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self4 = this;
                const self5 = this;
                const rangeError1 = new RangeError("offset is not uint");
                throw rangeError1;
              }
              return closure_1.read(self, arg0, true, 52, 8);
            }
            readDoubleBE(arg0, arg1) {
              const self = this;
              const tmp = arg1;
              if (!tmp) {
                if (arg0 % 1 === 0) {
                  if (arg0 >= 0) {
                    if (arg0 + 8 > tmp2) {
                      const _RangeError = RangeError;
                      const self2 = this;
                      const self3 = this;
                      const rangeError = new RangeError("Trying to access beyond buffer length");
                      throw rangeError;
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const self4 = this;
                const self5 = this;
                const rangeError1 = new RangeError("offset is not uint");
                throw rangeError1;
              }
              return closure_1.read(self, arg0, false, 52, 8);
            }
            writeUIntLE(arg0, arg1, arg2, arg3) {
              const self = this;
              const tmp4 = arg3;
              if (!tmp4) {
                const _Math = Math;
                const diff = Math.pow(2, 8 * tmp3) - 1;
                if (Buffer.isBuffer(self)) {
                  if (diff >= +arg0) {
                    if (+arg0 >= 0) {
                      if ((arg1 | 0) + (arg2 | 0) > self.length) {
                        const _RangeError = RangeError;
                        const self4 = this;
                        const self5 = this;
                        const rangeError = new RangeError("Index out of range");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self6 = this;
                  const self7 = this;
                  const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  throw rangeError1;
                } else {
                  const _TypeError = TypeError;
                  const self2 = this;
                  const self3 = this;
                  const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  throw typeError;
                }
              }
              self[arg1 | 0] = 255 & +arg0;
              let num5 = 256;
              let num6 = 1;
              if (1 < (arg2 | 0)) {
                self[(arg1 | 0) + num6] = +arg0 / num5 & 255;
                const sum = num6 + 1;
                while (sum < (arg2 | 0)) {
                  num5 = num5 * 256;
                  num6 = sum;
                  if (!num5) {
                    break;
                  }
                }
              }
              return (arg1 | 0) + (arg2 | 0);
            }
            writeUIntBE(arg0, arg1, arg2, arg3) {
              const self = this;
              const tmp4 = arg3;
              if (!tmp4) {
                const _Math = Math;
                const diff = Math.pow(2, 8 * tmp3) - 1;
                if (Buffer.isBuffer(self)) {
                  if (diff >= +arg0) {
                    if (+arg0 >= 0) {
                      if ((arg1 | 0) + (arg2 | 0) > self.length) {
                        const _RangeError = RangeError;
                        const self4 = this;
                        const self5 = this;
                        const rangeError = new RangeError("Index out of range");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self6 = this;
                  const self7 = this;
                  const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  throw rangeError1;
                } else {
                  const _TypeError = TypeError;
                  const self2 = this;
                  const self3 = this;
                  const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  throw typeError;
                }
              }
              const diff1 = tmp3 - 1;
              self[(arg1 | 0) + diff1] = 255 & +arg0;
              let diff2 = diff1 - 1;
              let num5 = 256;
              if (0 <= diff2) {
                self[(arg1 | 0) + diff2] = +arg0 / num5 & 255;
                const diff3 = diff2 - 1;
                while (0 <= diff3) {
                  num5 = num5 * 256;
                  diff2 = diff3;
                  if (!num5) {
                    break;
                  }
                }
              }
              return (arg1 | 0) + (arg2 | 0);
            }
            writeUInt8(arg0, arg1, arg2) {
              const self = this;
              const tmp3 = arg2;
              if (!tmp3) {
                if (Buffer.isBuffer(self)) {
                  if (255 >= +arg0) {
                    if (+arg0 >= 0) {
                      if ((arg1 | 0) + 1 > self.length) {
                        const _RangeError = RangeError;
                        const self4 = this;
                        const self5 = this;
                        const rangeError = new RangeError("Index out of range");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self6 = this;
                  const self7 = this;
                  const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  throw rangeError1;
                } else {
                  const _TypeError = TypeError;
                  const self2 = this;
                  const self3 = this;
                  const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  throw typeError;
                }
              }
              let rounded = tmp;
              if (!Buffer.TYPED_ARRAY_SUPPORT) {
                const _Math = Math;
                rounded = Math.floor(tmp);
              }
              self[arg1 | 0] = 255 & rounded;
              return (arg1 | 0) + 1;
            }
            writeUInt16LE(arg0, arg1, arg2) {
              const self = this;
              const tmp3 = arg2;
              if (!tmp3) {
                if (Buffer.isBuffer(self)) {
                  if (65535 >= +arg0) {
                    if (+arg0 >= 0) {
                      if ((arg1 | 0) + 2 > self.length) {
                        const _RangeError = RangeError;
                        const self4 = this;
                        const self5 = this;
                        const rangeError = new RangeError("Index out of range");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self6 = this;
                  const self7 = this;
                  const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  throw rangeError1;
                } else {
                  const _TypeError = TypeError;
                  const self2 = this;
                  const self3 = this;
                  const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  throw typeError;
                }
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                self[arg1 | 0] = 255 & +arg0;
                self[(arg1 | 0) + 1] = +arg0 >>> 8;
              } else {
                let num11;
                let sum = tmp;
                if (+arg0 < 0) {
                  sum = 65535 + tmp + 1;
                }
                const _Math = Math;
                const bound = Math.min(self.length - tmp2, 2);
                for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                  let result = 8 * num11;
                  self[tmp2 + num11] = (sum & 255 << result) >>> result;
                }
              }
              return (arg1 | 0) + 2;
            }
            writeUInt16BE(arg0, arg1, arg2) {
              const self = this;
              const tmp3 = arg2;
              if (!tmp3) {
                if (Buffer.isBuffer(self)) {
                  if (65535 >= +arg0) {
                    if (+arg0 >= 0) {
                      if ((arg1 | 0) + 2 > self.length) {
                        const _RangeError = RangeError;
                        const self4 = this;
                        const self5 = this;
                        const rangeError = new RangeError("Index out of range");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self6 = this;
                  const self7 = this;
                  const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  throw rangeError1;
                } else {
                  const _TypeError = TypeError;
                  const self2 = this;
                  const self3 = this;
                  const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  throw typeError;
                }
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                self[arg1 | 0] = +arg0 >>> 8;
                self[(arg1 | 0) + 1] = 255 & +arg0;
              } else {
                let num11;
                let sum = tmp;
                if (+arg0 < 0) {
                  sum = 65535 + tmp + 1;
                }
                const _Math = Math;
                const bound = Math.min(self.length - tmp2, 2);
                for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                  let result = 8 * (1 - num11);
                  self[tmp2 + num11] = (sum & 255 << result) >>> result;
                }
              }
              return (arg1 | 0) + 2;
            }
            writeUInt32LE(arg0, arg1, arg2) {
              const self = this;
              const tmp3 = arg2;
              if (!tmp3) {
                if (Buffer.isBuffer(self)) {
                  if (4294967295 >= +arg0) {
                    if (+arg0 >= 0) {
                      if ((arg1 | 0) + 4 > self.length) {
                        const _RangeError = RangeError;
                        const self4 = this;
                        const self5 = this;
                        const rangeError = new RangeError("Index out of range");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self6 = this;
                  const self7 = this;
                  const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  throw rangeError1;
                } else {
                  const _TypeError = TypeError;
                  const self2 = this;
                  const self3 = this;
                  const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  throw typeError;
                }
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                self[(arg1 | 0) + 3] = +arg0 >>> 24;
                self[(arg1 | 0) + 2] = +arg0 >>> 16;
                self[(arg1 | 0) + 1] = +arg0 >>> 8;
                self[arg1 | 0] = 255 & +arg0;
              } else {
                let num11;
                let sum = tmp;
                if (+arg0 < 0) {
                  sum = 4294967295 + tmp + 1;
                }
                const _Math = Math;
                const bound = Math.min(self.length - tmp2, 4);
                for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                  self[tmp2 + num11] = sum >>> 8 * num11 & 255;
                }
              }
              return (arg1 | 0) + 4;
            }
            writeUInt32BE(arg0, arg1, arg2) {
              const self = this;
              const tmp3 = arg2;
              if (!tmp3) {
                if (Buffer.isBuffer(self)) {
                  if (4294967295 >= +arg0) {
                    if (+arg0 >= 0) {
                      if ((arg1 | 0) + 4 > self.length) {
                        const _RangeError = RangeError;
                        const self4 = this;
                        const self5 = this;
                        const rangeError = new RangeError("Index out of range");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self6 = this;
                  const self7 = this;
                  const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  throw rangeError1;
                } else {
                  const _TypeError = TypeError;
                  const self2 = this;
                  const self3 = this;
                  const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  throw typeError;
                }
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                self[arg1 | 0] = +arg0 >>> 24;
                self[(arg1 | 0) + 1] = +arg0 >>> 16;
                self[(arg1 | 0) + 2] = +arg0 >>> 8;
                self[(arg1 | 0) + 3] = 255 & +arg0;
              } else {
                let num12;
                let sum = tmp;
                if (+arg0 < 0) {
                  sum = 4294967295 + tmp + 1;
                }
                const _Math = Math;
                const bound = Math.min(self.length - tmp2, 4);
                for (let num12 = 0; num12 < bound; num12 = num12 + 1) {
                  self[tmp2 + num12] = sum >>> 8 * (3 - num12) & 255;
                }
              }
              return (arg1 | 0) + 4;
            }
            writeIntLE(arg0, arg1, arg2, arg3) {
              const self = this;
              const tmp3 = arg3;
              if (!tmp3) {
                const _Math = Math;
                const powResult = Math.pow(2, 8 * arg2 - 1);
                const diff = powResult - 1;
                const tmp7 = -powResult;
                if (Buffer.isBuffer(self)) {
                  if (diff >= +arg0) {
                    if (+arg0 >= tmp7) {
                      if ((arg1 | 0) + arg2 > self.length) {
                        const _RangeError = RangeError;
                        const self4 = this;
                        const self5 = this;
                        const rangeError = new RangeError("Index out of range");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self6 = this;
                  const self7 = this;
                  const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  throw rangeError1;
                } else {
                  const _TypeError = TypeError;
                  const self2 = this;
                  const self3 = this;
                  const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  throw typeError;
                }
              }
              self[arg1 | 0] = 255 & +arg0;
              let num4 = 0;
              let num5 = 256;
              let num6 = 1;
              if (1 < arg2) {
                while (true) {
                  let num7 = num4;
                  let tmp18 = tmp15;
                  if (tmp < 0) {
                    tmp18 = 0 === num7;
                  }
                  if (tmp18) {
                    tmp18 = 0 !== self[tmp2 + num6 - 1];
                  }
                  if (tmp18) {
                    num7 = 1;
                  }
                  self[tmp2 + num6] = (tmp / num5 | 0) - num7 & 255;
                  let sum = num6 + 1;
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
              return (arg1 | 0) + arg2;
            }
            writeIntBE(arg0, arg1, arg2, arg3) {
              const self = this;
              const tmp3 = arg3;
              if (!tmp3) {
                const _Math = Math;
                const powResult = Math.pow(2, 8 * arg2 - 1);
                const diff = powResult - 1;
                const tmp7 = -powResult;
                if (Buffer.isBuffer(self)) {
                  if (diff >= +arg0) {
                    if (+arg0 >= tmp7) {
                      if ((arg1 | 0) + arg2 > self.length) {
                        const _RangeError = RangeError;
                        const self4 = this;
                        const self5 = this;
                        const rangeError = new RangeError("Index out of range");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self6 = this;
                  const self7 = this;
                  const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  throw rangeError1;
                } else {
                  const _TypeError = TypeError;
                  const self2 = this;
                  const self3 = this;
                  const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  throw typeError;
                }
              }
              const diff1 = arg2 - 1;
              self[(arg1 | 0) + diff1] = 255 & +arg0;
              let diff2 = diff1 - 1;
              let num4 = 256;
              let num5 = 0;
              if (0 <= diff2) {
                while (true) {
                  let num6 = num5;
                  let tmp20 = tmp17;
                  if (tmp < 0) {
                    tmp20 = 0 === num6;
                  }
                  if (tmp20) {
                    tmp20 = 0 !== self[tmp2 + diff2 + 1];
                  }
                  if (tmp20) {
                    num6 = 1;
                  }
                  self[tmp2 + diff2] = (tmp / num4 | 0) - num6 & 255;
                  let diff3 = diff2 - 1;
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
              return (arg1 | 0) + arg2;
            }
            writeInt8(arg0, arg1, arg2) {
              const self = this;
              const tmp3 = arg2;
              if (!tmp3) {
                if (Buffer.isBuffer(self)) {
                  if (127 >= +arg0) {
                    if (+arg0 >= -128) {
                      if ((arg1 | 0) + 1 > self.length) {
                        const _RangeError = RangeError;
                        const self4 = this;
                        const self5 = this;
                        const rangeError = new RangeError("Index out of range");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self6 = this;
                  const self7 = this;
                  const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  throw rangeError1;
                } else {
                  const _TypeError = TypeError;
                  const self2 = this;
                  const self3 = this;
                  const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  throw typeError;
                }
              }
              let rounded = tmp;
              if (!Buffer.TYPED_ARRAY_SUPPORT) {
                const _Math = Math;
                rounded = Math.floor(tmp);
              }
              let sum = rounded;
              if (rounded < 0) {
                sum = 255 + rounded + 1;
              }
              self[arg1 | 0] = 255 & sum;
              return (arg1 | 0) + 1;
            }
            writeInt16LE(arg0, arg1, arg2) {
              const self = this;
              const tmp3 = arg2;
              if (!tmp3) {
                if (Buffer.isBuffer(self)) {
                  if (32767 >= +arg0) {
                    if (+arg0 >= -32768) {
                      if ((arg1 | 0) + 2 > self.length) {
                        const _RangeError = RangeError;
                        const self4 = this;
                        const self5 = this;
                        const rangeError = new RangeError("Index out of range");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self6 = this;
                  const self7 = this;
                  const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  throw rangeError1;
                } else {
                  const _TypeError = TypeError;
                  const self2 = this;
                  const self3 = this;
                  const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  throw typeError;
                }
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                self[arg1 | 0] = 255 & +arg0;
                self[(arg1 | 0) + 1] = +arg0 >>> 8;
              } else {
                let num11;
                let sum = tmp;
                if (+arg0 < 0) {
                  sum = 65535 + tmp + 1;
                }
                const _Math = Math;
                const bound = Math.min(self.length - tmp2, 2);
                for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                  let result = 8 * num11;
                  self[tmp2 + num11] = (sum & 255 << result) >>> result;
                }
              }
              return (arg1 | 0) + 2;
            }
            writeInt16BE(arg0, arg1, arg2) {
              const self = this;
              const tmp3 = arg2;
              if (!tmp3) {
                if (Buffer.isBuffer(self)) {
                  if (32767 >= +arg0) {
                    if (+arg0 >= -32768) {
                      if ((arg1 | 0) + 2 > self.length) {
                        const _RangeError = RangeError;
                        const self4 = this;
                        const self5 = this;
                        const rangeError = new RangeError("Index out of range");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self6 = this;
                  const self7 = this;
                  const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  throw rangeError1;
                } else {
                  const _TypeError = TypeError;
                  const self2 = this;
                  const self3 = this;
                  const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  throw typeError;
                }
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                self[arg1 | 0] = +arg0 >>> 8;
                self[(arg1 | 0) + 1] = 255 & +arg0;
              } else {
                let num11;
                let sum = tmp;
                if (+arg0 < 0) {
                  sum = 65535 + tmp + 1;
                }
                const _Math = Math;
                const bound = Math.min(self.length - tmp2, 2);
                for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                  let result = 8 * (1 - num11);
                  self[tmp2 + num11] = (sum & 255 << result) >>> result;
                }
              }
              return (arg1 | 0) + 2;
            }
            writeInt32LE(arg0, arg1, arg2) {
              const self = this;
              const tmp3 = arg2;
              if (!tmp3) {
                if (Buffer.isBuffer(self)) {
                  if (2147483647 >= +arg0) {
                    if (+arg0 >= -2147483648) {
                      if ((arg1 | 0) + 4 > self.length) {
                        const _RangeError = RangeError;
                        const self4 = this;
                        const self5 = this;
                        const rangeError = new RangeError("Index out of range");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self6 = this;
                  const self7 = this;
                  const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  throw rangeError1;
                } else {
                  const _TypeError = TypeError;
                  const self2 = this;
                  const self3 = this;
                  const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  throw typeError;
                }
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                self[arg1 | 0] = 255 & +arg0;
                self[(arg1 | 0) + 1] = +arg0 >>> 8;
                self[(arg1 | 0) + 2] = +arg0 >>> 16;
                self[(arg1 | 0) + 3] = +arg0 >>> 24;
              } else {
                let num11;
                let sum = tmp;
                if (+arg0 < 0) {
                  sum = 4294967295 + tmp + 1;
                }
                const _Math = Math;
                const bound = Math.min(self.length - tmp2, 4);
                for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                  self[tmp2 + num11] = sum >>> 8 * num11 & 255;
                }
              }
              return (arg1 | 0) + 4;
            }
            writeInt32BE(arg0, arg1, arg2) {
              const self = this;
              const tmp3 = arg2;
              if (!tmp3) {
                if (Buffer.isBuffer(self)) {
                  if (2147483647 >= +arg0) {
                    if (+arg0 >= -2147483648) {
                      if ((arg1 | 0) + 4 > self.length) {
                        const _RangeError = RangeError;
                        const self4 = this;
                        const self5 = this;
                        const rangeError = new RangeError("Index out of range");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self6 = this;
                  const self7 = this;
                  const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                  throw rangeError1;
                } else {
                  const _TypeError = TypeError;
                  const self2 = this;
                  const self3 = this;
                  const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                  throw typeError;
                }
              }
              let sum = tmp;
              if (+arg0 < 0) {
                sum = 4294967295 + tmp + 1;
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                self[arg1 | 0] = sum >>> 24;
                self[(arg1 | 0) + 1] = sum >>> 16;
                self[(arg1 | 0) + 2] = sum >>> 8;
                self[(arg1 | 0) + 3] = 255 & sum;
              } else {
                let num13;
                let sum1 = sum;
                if (sum < 0) {
                  sum1 = 4294967295 + sum + 1;
                }
                const _Math = Math;
                const bound = Math.min(self.length - tmp2, 4);
                for (let num13 = 0; num13 < bound; num13 = num13 + 1) {
                  self[tmp2 + num13] = sum1 >>> 8 * (3 - num13) & 255;
                }
              }
              return (arg1 | 0) + 4;
            }
            writeFloatLE(arg0, arg1, arg2) {
              const self = this;
              const tmp = arg2;
              if (!tmp) {
                if (arg1 + 4 > self.length) {
                  const _RangeError2 = RangeError;
                  const self4 = this;
                  const self5 = this;
                  const rangeError = new RangeError("Index out of range");
                  throw rangeError;
                } else if (arg1 < 0) {
                  const _RangeError = RangeError;
                  const self2 = this;
                  const self3 = this;
                  const rangeError1 = new RangeError("Index out of range");
                  throw rangeError1;
                }
              }
              closure_1.write(self, arg0, arg1, true, 23, 4);
              return arg1 + 4;
            }
            writeFloatBE(arg0, arg1, arg2) {
              const self = this;
              const tmp = arg2;
              if (!tmp) {
                if (arg1 + 4 > self.length) {
                  const _RangeError2 = RangeError;
                  const self4 = this;
                  const self5 = this;
                  const rangeError = new RangeError("Index out of range");
                  throw rangeError;
                } else if (arg1 < 0) {
                  const _RangeError = RangeError;
                  const self2 = this;
                  const self3 = this;
                  const rangeError1 = new RangeError("Index out of range");
                  throw rangeError1;
                }
              }
              closure_1.write(self, arg0, arg1, false, 23, 4);
              return arg1 + 4;
            }
            writeDoubleLE(arg0, arg1, arg2) {
              const self = this;
              const tmp = arg2;
              if (!tmp) {
                if (arg1 + 8 > self.length) {
                  const _RangeError2 = RangeError;
                  const self4 = this;
                  const self5 = this;
                  const rangeError = new RangeError("Index out of range");
                  throw rangeError;
                } else if (arg1 < 0) {
                  const _RangeError = RangeError;
                  const self2 = this;
                  const self3 = this;
                  const rangeError1 = new RangeError("Index out of range");
                  throw rangeError1;
                }
              }
              closure_1.write(self, arg0, arg1, true, 52, 8);
              return arg1 + 8;
            }
            writeDoubleBE(arg0, arg1, arg2) {
              const self = this;
              const tmp = arg2;
              if (!tmp) {
                if (arg1 + 8 > self.length) {
                  const _RangeError2 = RangeError;
                  const self4 = this;
                  const self5 = this;
                  const rangeError = new RangeError("Index out of range");
                  throw rangeError;
                } else if (arg1 < 0) {
                  const _RangeError = RangeError;
                  const self2 = this;
                  const self3 = this;
                  const rangeError1 = new RangeError("Index out of range");
                  throw rangeError1;
                }
              }
              closure_1.write(self, arg0, arg1, false, 52, 8);
              return arg1 + 8;
            }
            copy(arg0, arg1, arg2, arg3) {
              let length = arg3;
              const self = this;
              const tmp2 = arg3 || 0 === length;
              if (!tmp2) {
                length = self.length;
              }
              let num2 = arg1;
              if (arg1 >= arg0.length) {
                num2 = arg0.length;
              }
              if (!num2) {
                num2 = 0;
              }
              const tmp3 = length > 0 && length < (arg2 || 0);
              if (tmp3) {
                length = tmp;
              }
              if (length === (arg2 || 0)) {
                return 0;
              } else {
                if (0 !== arg0.length) {
                  if (0 !== self.length) {
                    if (num2 < 0) {
                      const _RangeError3 = RangeError;
                      const self6 = this;
                      const self7 = this;
                      const rangeError = new RangeError("targetStart out of bounds");
                      throw rangeError;
                    } else {
                      if ((arg2 || 0) >= 0) {
                        if ((arg2 || 0) < self.length) {
                          if (length < 0) {
                            const _RangeError = RangeError;
                            const self2 = this;
                            const self3 = this;
                            const rangeError1 = new RangeError("sourceEnd out of bounds");
                            throw rangeError1;
                          } else {
                            if (length > self.length) {
                              length = self.length;
                            }
                            if (arg0.length - num2 < length - (arg2 || 0)) {
                              length = arg0.length - num2 + tmp;
                            }
                            const diff = length - tmp;
                            if (self === arg0) {
                              if ((arg2 || 0) < num2) {
                                if (num2 < length) {
                                  let diff1 = diff - 1;
                                  if (0 <= diff1) {
                                    do {
                                      arg0[diff1 + num2] = self[diff1 + tmp];
                                      diff1 = diff1 - 1;
                                    } while (0 <= diff1);
                                  }
                                }
                                return diff;
                              }
                            }
                            if (diff >= 1000) {
                              if (Buffer.TYPED_ARRAY_SUPPORT) {
                                const _Uint8Array = Uint8Array;
                                set = Uint8Array.prototype.set;
                                set.call(arg0, self.subarray(arg2 || 0, (arg2 || 0) + diff), num2);
                              }
                            }
                            let num5 = 0;
                            if (0 < diff) {
                              do {
                                arg0[num5 + num2] = self[num5 + tmp];
                                num5 = num5 + 1;
                              } while (num5 < diff);
                            }
                          }
                        }
                      }
                      const _RangeError2 = RangeError;
                      const self4 = this;
                      const self5 = this;
                      const rangeError2 = new RangeError("sourceStart out of bounds");
                      throw rangeError2;
                    }
                  }
                }
                return 0;
              }
            }
            fill(str, str2, str3, arg3) {
              let diff;
              let num5;
              let tmp4;
              let tmp5;
              let tmp6;
              const self = this;
              let tmp = arg3;
              if (typeof str === "string") {
                let length;
                let num;
                if (typeof str2 === "string") {
                  length = self.length;
                  num = 0;
                  tmp = str2;
                } else {
                  length = str3;
                  num = str2;
                  if (typeof str3 === "string") {
                    length = self.length;
                    tmp = str3;
                    num = str2;
                  }
                }
                let tmp2 = str;
                if (1 === str.length) {
                  const charCodeAtResult = str.charCodeAt(0);
                  tmp2 = str;
                  if (charCodeAtResult < 256) {
                    tmp2 = charCodeAtResult;
                  }
                }
                if (undefined !== tmp) {
                  if (typeof tmp !== "string") {
                    const _TypeError2 = TypeError;
                    const self8 = this;
                    const self9 = this;
                    const typeError = new TypeError("encoding must be a string");
                    throw typeError;
                  }
                }
                tmp4 = tmp;
                tmp5 = length;
                tmp6 = num;
                num5 = tmp2;
                if (typeof tmp === "string") {
                  tmp4 = tmp;
                  tmp5 = length;
                  tmp6 = num;
                  num5 = tmp2;
                  if (!Buffer.isEncoding(tmp)) {
                    const _TypeError = TypeError;
                    const self2 = this;
                    const self3 = this;
                    const typeError1 = new TypeError("Unknown encoding: " + tmp);
                    throw typeError1;
                  }
                }
              } else {
                tmp4 = tmp;
                tmp5 = str3;
                tmp6 = str2;
                num5 = str;
                if (typeof str === "number") {
                  num5 = str & 255;
                  tmp4 = tmp;
                  tmp5 = str3;
                  tmp6 = str2;
                }
              }
              if (tmp6 >= 0) {
                if (self.length >= tmp6) {
                  if (self.length >= tmp5) {
                    if (tmp5 <= tmp6) {
                      return self;
                    } else {
                      let sum = tmp6 >>> 0;
                      const tmp10 = undefined === tmp5 ? self.length : tmp5 >>> 0;
                      if (!num5) {
                        num5 = 0;
                      }
                      if (typeof num5 === "number") {
                        if (sum < tmp10) {
                          do {
                            self[sum] = num5;
                            sum = sum + 1;
                          } while (sum < tmp10);
                        }
                      } else {
                        let tmp11Result = num5;
                        if (!Buffer.isBuffer(num5)) {
                          obj = Object.create(Buffer.prototype);
                          if (!Buffer.TYPED_ARRAY_SUPPORT) {
                            if (!(obj instanceof Buffer)) {
                              let tmp29Result;
                              const obj2 = Object.create(Buffer.prototype);
                              if (!Buffer.TYPED_ARRAY_SUPPORT) {
                                if (!(obj2 instanceof Buffer)) {
                                  tmp29Result = Buffer(num5, tmp4, undefined);
                                }
                                str2 = tmp29Result;
                              }
                              if (typeof num5 === "number") {
                                if (typeof tmp4 === "string") {
                                  const _Error = Error;
                                  const self4 = this;
                                  const self5 = this;
                                  const error = new Error("If encoding is specified then the first argument must be a string");
                                  throw error;
                                } else {
                                  tmp29Result = allocUnsafe(obj2, num5);
                                }
                              } else {
                                tmp29Result = from(obj2, num5, tmp4, undefined);
                              }
                            }
                            tmp11Result = utf8ToBytes(str2.toString());
                          }
                          if (typeof num5 === "number") {
                            if (typeof tmp4 === "string") {
                              const _Error2 = Error;
                              const self6 = this;
                              const self7 = this;
                              const error1 = new Error("If encoding is specified then the first argument must be a string");
                              throw error1;
                            } else {
                              str2 = allocUnsafe(obj, num5);
                            }
                          } else {
                            str2 = from(obj, num5, tmp4, undefined);
                          }
                        }
                        let num7 = 0;
                        if (0 < tmp10 - sum) {
                          do {
                            self[num7 + sum] = tmp11Result[num7 % tmp11Result.length];
                            num7 = num7 + 1;
                            diff = tmp10 - sum;
                          } while (num7 < diff);
                        }
                      }
                      return self;
                    }
                  }
                }
              }
              const rangeError = new RangeError("Out of range index");
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
              constructor(num, str, arg2) {
                const self = this;
                if (!Buffer.TYPED_ARRAY_SUPPORT) {
                  if (!(self instanceof Buffer)) {
                    const tmpResult = Buffer(num, str, arg2);
                    return tmpResult;
                  }
                }
                if (typeof num === "number") {
                  if (typeof str === "string") {
                    const _Error = Error;
                    const self2 = this;
                    const self3 = this;
                    const error = new Error("If encoding is specified then the first argument must be a string");
                    throw error;
                  } else {
                    return allocUnsafe(self, num);
                  }
                } else {
                  return from(self, 0, str, arg2);
                }
              }
              static _augment(arg0) {
                arg0.__proto__ = Buffer.prototype;
                return arg0;
              }
              static from(arg0, arg1, arg2) {
          return from(null, arg0, arg1, arg2);
        }
              static alloc(num, arg1, str) {
                if (typeof num !== "number") {
                  const _TypeError = TypeError;
                  const self3 = this;
                  const self4 = this;
                  const typeError = new TypeError("\"size\" argument must be a number");
                  throw typeError;
                } else if (0 < 0) {
                  const _RangeError = RangeError;
                  const self = this;
                  const self2 = this;
                  const rangeError = new RangeError("\"size\" argument must not be negative");
                  throw rangeError;
                } else {
                  let tmp4;
                  if (0 <= 0) {
                    tmp4 = createBuffer(null, num);
                  } else if (undefined !== arg1) {
                    let fillResult;
                    if (typeof str === "string") {
                      obj = createBuffer(null, 0);
                      fillResult = obj.fill(arg1, str);
                    } else {
                      const obj2 = createBuffer(null, 0);
                      fillResult = obj2.fill(arg1);
                    }
                    tmp4 = fillResult;
                  } else {
                    tmp4 = createBuffer(null, num);
                  }
                  return tmp4;
                }
              }
              static allocUnsafe(arg0) {
          return allocUnsafe(null, arg0);
        }
              static allocUnsafeSlow(arg0) {
          return allocUnsafe(null, arg0);
        }
              static isBuffer(_isBuffer) {
                return !(null == _isBuffer || !_isBuffer._isBuffer);
              }
              static compare(arg0, arg1) {
                if (Buffer.isBuffer(arg0)) {
                  if (Buffer.isBuffer(arg1)) {
                    if (arg0 === arg1) {
                      return 0;
                    } else {
                      const _Math = Math;
                      const bound = Math.min(length, length2);
                      let num3 = 0;
                      let tmp5 = length2;
                      let tmp6 = length;
                      if (0 < bound) {
                        while (arg0[num3] === arg1[num3]) {
                          num3 = num3 + 1;
                          tmp5 = length2;
                          tmp6 = length;
                        }
                        tmp6 = arg0[num3];
                        tmp5 = arg1[num3];
                      }
                      let num4 = -1;
                      if (tmp6 >= tmp5) {
                        let num5 = 0;
                        if (tmp5 < tmp6) {
                          num5 = 1;
                        }
                        num4 = num5;
                      }
                      return num4;
                    }
                  }
                }
                const typeError = new TypeError("Arguments must be Buffers");
                throw typeError;
              }
              static isEncoding(arg0) {
                const str = String(arg0);
                switch (str.toLowerCase()) {
                  case "hex":
                  {
                    return true;
                  }
                  case "utf8":
                  {
                    return true;
                  }
                  case "utf-8":
                  {
                    return true;
                  }
                  case "ascii":
                  {
                    return true;
                  }
                  case "latin1":
                  {
                    return true;
                  }
                  case "binary":
                  {
                    return true;
                  }
                  case "base64":
                  {
                    return true;
                  }
                  case "ucs2":
                  {
                    return true;
                  }
                  case "ucs-2":
                  {
                    return true;
                  }
                  case "utf16le":
                  {
                    return true;
                  }
                  case "utf-16le":
                  {
                    return true;
                  }
                  default:
                  {
                    return false;
                  }
                }
              }
              static concat(arg0, arg1) {
                let length;
                if (closure_2(arg0)) {
                  if (0 === arg0.length) {
                    return Buffer.alloc(0);
                  } else {
                    let num5 = arg1;
                    if (undefined === arg1) {
                      let num3 = 0;
                      let num4 = 0;
                      num5 = 0;
                      if (0 < arg0.length) {
                        do {
                          num4 = num4 + arg0[num3].length;
                          num3 = num3 + 1;
                          num5 = num4;
                          length = arg0.length;
                        } while (num3 < length);
                      }
                    }
                    const allocUnsafeResult = Buffer.allocUnsafe(num5);
                    let num7 = 0;
                    let num8 = 0;
                    if (0 < arg0.length) {
                      while (Buffer.isBuffer(arg0[num8])) {
                        let copyResult = arr.copy(allocUnsafeResult, num7);
                        num7 = num7 + arr.length;
                        num8 = num8 + 1;
                      }
                      const _TypeError2 = TypeError;
                      const self3 = this;
                      const self4 = this;
                      const typeError = new TypeError("\"list\" argument must be an Array of Buffers");
                      throw typeError;
                    }
                    return allocUnsafeResult;
                  }
                } else {
                  const _TypeError = TypeError;
                  const self = this;
                  const self2 = this;
                  const typeError1 = new TypeError("\"list\" argument must be an Array of Buffers");
                  throw typeError1;
                }
              }
              swap16() {
                const self = this;
                if (this.length % 2 !== 0) {
                  const _RangeError = RangeError;
                  const self2 = this;
                  const self3 = this;
                  const rangeError = new RangeError("Buffer size must be a multiple of 16-bits");
                  throw rangeError;
                } else {
                  let num2;
                  for (let num2 = 0; num2 < length; num2 = num2 + 2) {
                    let sum = num2 + 1;
                    self[num2] = self[sum];
                    self[sum] = self[num2];
                  }
                  return self;
                }
              }
              swap32() {
                const self = this;
                if (this.length % 4 !== 0) {
                  const _RangeError = RangeError;
                  const self2 = this;
                  const self3 = this;
                  const rangeError = new RangeError("Buffer size must be a multiple of 32-bits");
                  throw rangeError;
                } else {
                  let num4;
                  for (let num4 = 0; num4 < length; num4 = num4 + 4) {
                    let sum = num4 + 3;
                    self[num4] = self[sum];
                    self[sum] = self[num4];
                    let sum1 = num4 + 1;
                    let sum2 = num4 + 2;
                    self[sum1] = self[sum2];
                    self[sum2] = self[sum1];
                  }
                  return self;
                }
              }
              swap64() {
                const self = this;
                if (this.length % 8 !== 0) {
                  const _RangeError = RangeError;
                  const self2 = this;
                  const self3 = this;
                  const rangeError = new RangeError("Buffer size must be a multiple of 64-bits");
                  throw rangeError;
                } else {
                  let num;
                  for (let num = 0; num < length; num = num + 8) {
                    let sum = num + 7;
                    self[num] = self[sum];
                    self[sum] = self[num];
                    let sum1 = num + 1;
                    let sum2 = num + 6;
                    self[sum1] = self[sum2];
                    self[sum2] = self[sum1];
                    let sum3 = num + 2;
                    let sum4 = num + 5;
                    self[sum3] = self[sum4];
                    self[sum4] = self[sum3];
                    let sum5 = num + 3;
                    let sum6 = num + 4;
                    self[sum5] = self[sum6];
                    self[sum6] = self[sum5];
                  }
                  return self;
                }
              }
              toString() {
                const self = this;
                let str = "";
                if (0 !== (this.length | 0)) {
                  let applyResult;
                  if (0 === arguments.length) {
                    applyResult = utf8Slice(self, 0, tmp);
                  } else {
                    applyResult = slowToString(...arguments);
                  }
                  str = applyResult;
                }
                return str;
              }
              equals(arg0) {
                if (Buffer.isBuffer(arg0)) {
                  const tmp5 = this === arg0 || 0 === Buffer.compare(tmp4, arg0);
                  return tmp5;
                } else {
                  const _TypeError = TypeError;
                  const self = this;
                  const self2 = this;
                  const typeError = new TypeError("Argument must be a Buffer");
                  throw typeError;
                }
              }
              inspect() {
                const self = this;
                const INSPECT_MAX_BYTES = closure_0.INSPECT_MAX_BYTES;
                let str = "";
                if (this.length > 0) {
                  const str3 = self.toString("hex", 0, INSPECT_MAX_BYTES);
                  const match = str3.match(/.{2}/g);
                  const joined = match.join(" ");
                  let text = joined;
                  if (self.length > INSPECT_MAX_BYTES) {
                    text = `${tmp} ... `;
                  }
                  str = text;
                }
                return "<Buffer " + str + ">";
              }
              compare(arr, arg1, arg2, arg3, arg4) {
                if (Buffer.isBuffer(arr)) {
                  let num = arg1;
                  if (undefined === arg1) {
                    num = 0;
                  }
                  let tmp4 = arg2;
                  if (undefined === arg2) {
                    let num2 = 0;
                    if (arr) {
                      num2 = arr.length;
                    }
                    tmp4 = num2;
                  }
                  let num3 = arg3;
                  if (undefined === arg3) {
                    num3 = 0;
                  }
                  const self3 = this;
                  let length = arg4;
                  if (undefined === arg4) {
                    length = self3.length;
                  }
                  if (num >= 0) {
                    if (tmp4 <= arr.length) {
                      if (num3 >= 0) {
                        if (length <= self3.length) {
                          if (num3 >= length) {
                            if (num >= tmp4) {
                              return 0;
                            }
                          }
                          if (num3 >= length) {
                            return -1;
                          } else if (num >= tmp4) {
                            return 1;
                          } else if (self3 === arr) {
                            return 0;
                          } else {
                            const diff = tmp11 - tmp12;
                            const diff1 = tmp14 - tmp15;
                            const _Math = Math;
                            const bound = Math.min(diff, diff1);
                            const substr = self3.slice(tmp12, tmp11);
                            const substr1 = arr.slice(tmp15, tmp14);
                            let num5 = 0;
                            let tmp6 = diff1;
                            let tmp7 = diff;
                            if (0 < bound) {
                              while (substr[num5] === substr1[num5]) {
                                num5 = num5 + 1;
                                tmp6 = diff1;
                                tmp7 = diff;
                              }
                              tmp7 = substr[num5];
                              tmp6 = substr1[num5];
                            }
                            let num6 = -1;
                            if (tmp7 >= tmp6) {
                              let num7 = 0;
                              if (tmp6 < tmp7) {
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
                  const _RangeError = RangeError;
                  const self4 = this;
                  const self5 = this;
                  const rangeError = new RangeError("out of range index");
                  throw rangeError;
                } else {
                  const _TypeError = TypeError;
                  const self = this;
                  const self2 = this;
                  const typeError = new TypeError("Argument must be a Buffer");
                  throw typeError;
                }
              }
              includes(arg0, arg1, arg2) {
                return -1 !== this.indexOf(arg0, arg1, arg2);
              }
              indexOf(arg0, arg1, arg2) {
                return bidirectionalIndexOf(this, arg0, arg1, arg2, true);
              }
              lastIndexOf(arg0, arg1, arg2) {
                return bidirectionalIndexOf(this, arg0, arg1, arg2, false);
              }
              write(arg0, str, arg2, arg3) {
                let length;
                let num;
                let str2;
                const self = this;
                if (undefined === str) {
                  length = self.length;
                  str2 = "utf8";
                  num = 0;
                } else {
                  if (undefined === arg2) {
                    if (typeof str === "string") {
                      length = self.length;
                      num = 0;
                      str2 = str;
                    }
                  }
                  const _isFinite = isFinite;
                  if (isFinite(str)) {
                    const _isFinite2 = isFinite;
                    str2 = arg2;
                    num = tmp4;
                    if (isFinite(arg2)) {
                      str2 = arg3;
                      length = tmp5;
                      num = tmp4;
                      if (undefined === arg3) {
                        str2 = "utf8";
                        length = tmp5;
                        num = tmp4;
                      }
                    }
                  } else {
                    const _Error = Error;
                    const self2 = this;
                    const self3 = this;
                    const error = new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    throw error;
                  }
                }
                const diff = self.length - num;
                const tmp7 = undefined === length || length > diff;
                if (tmp7) {
                  length = diff;
                }
                if (arg0.length <= 0) {
                  if (num <= self.length) {
                    if (!str2) {
                      str2 = "utf8";
                    }
                  }
                }
                const rangeError = new RangeError("Attempt to write outside buffer bounds");
                throw rangeError;
              }
              toJSON() {
                let self = this._arr;
                const call = slice.call;
                if (!self) {
                  self = this;
                }
                obj = { type: "Buffer", data: call(self, 0) };
                return obj;
              }
              slice(arg0, arg1) {
                let num;
                let num2;
                let tmp13;
                const self = this;
                if (~(~arg0) < 0) {
                  num = tmp + length;
                  if (num < 0) {
                    num = 0;
                  }
                } else {
                  num = tmp;
                  if (~(~arg0) > this.length) {
                    num = length;
                  }
                }
                let tmp2 = length;
                if (undefined !== arg1) {
                  tmp2 = ~(~arg1);
                }
                if (tmp2 < 0) {
                  num2 = tmp2 + length;
                  if (num2 < 0) {
                    num2 = 0;
                  }
                } else {
                  num2 = tmp2;
                  if (tmp2 > this.length) {
                    num2 = length;
                  }
                }
                if (num2 < num) {
                  num2 = num;
                }
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  const subarrayResult = self.subarray(num, num2);
                  subarrayResult.__proto__ = Buffer.prototype;
                  tmp13 = subarrayResult;
                } else {
                  let tmp8;
                  const diff = num2 - num;
                  obj = Object.create(Buffer.prototype);
                  if (!Buffer.TYPED_ARRAY_SUPPORT) {
                    if (!(obj instanceof Buffer)) {
                      let tmp3Result;
                      const obj2 = Object.create(Buffer.prototype);
                      if (!Buffer.TYPED_ARRAY_SUPPORT) {
                        if (!(obj2 instanceof Buffer)) {
                          tmp3Result = Buffer(diff, undefined, undefined);
                        }
                        tmp8 = tmp3Result;
                      }
                      if (typeof diff === "number") {
                        if (typeof undefined === "string") {
                          const _Error = Error;
                          const self2 = this;
                          const self3 = this;
                          const error = new Error("If encoding is specified then the first argument must be a string");
                          throw error;
                        } else {
                          tmp3Result = allocUnsafe(obj2, diff);
                        }
                      } else {
                        tmp3Result = from(obj2, diff, undefined, undefined);
                      }
                    }
                    tmp13 = tmp8;
                    let num4 = 0;
                    if (0 < diff) {
                      do {
                        tmp8[num4] = self[num4 + num];
                        num4 = num4 + 1;
                        tmp13 = tmp8;
                      } while (num4 < diff);
                    }
                  }
                  if (typeof diff === "number") {
                    if (typeof undefined === "string") {
                      const _Error2 = Error;
                      const self4 = this;
                      const self5 = this;
                      const error1 = new Error("If encoding is specified then the first argument must be a string");
                      throw error1;
                    } else {
                      tmp8 = allocUnsafe(obj, diff);
                    }
                  } else {
                    tmp8 = from(obj, diff, undefined, undefined);
                  }
                }
                return tmp13;
              }
              readUIntLE(arg0, arg1, arg2) {
                const self = this;
                const tmp3 = arg2;
                if (!tmp3) {
                  if ((arg0 | 0) % 1 === 0) {
                    if ((arg0 | 0) >= 0) {
                      if ((arg0 | 0) + (arg1 | 0) > tmp4) {
                        const _RangeError = RangeError;
                        const self2 = this;
                        const self3 = this;
                        const rangeError = new RangeError("Trying to access beyond buffer length");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self4 = this;
                  const self5 = this;
                  const rangeError1 = new RangeError("offset is not uint");
                  throw rangeError1;
                }
                let tmp11 = self[tmp];
                let num3 = 256;
                let tmp12 = tmp11;
                let num4 = 1;
                if (1 < (arg1 | 0)) {
                  const sum = tmp11 + self[tmp + num4] * num3;
                  const sum1 = num4 + 1;
                  tmp12 = sum;
                  while (sum1 < (arg1 | 0)) {
                    num3 = num3 * 256;
                    num4 = sum1;
                    tmp11 = sum;
                    tmp12 = sum;
                    if (!num3) {
                      break;
                    }
                  }
                }
                return tmp12;
              }
              readUIntBE(arg0, arg1, arg2) {
                const self = this;
                const tmp3 = arg2;
                if (!tmp3) {
                  if ((arg0 | 0) % 1 === 0) {
                    if ((arg0 | 0) >= 0) {
                      if ((arg0 | 0) + (arg1 | 0) > tmp4) {
                        const _RangeError = RangeError;
                        const self2 = this;
                        const self3 = this;
                        const rangeError = new RangeError("Trying to access beyond buffer length");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self4 = this;
                  const self5 = this;
                  const rangeError1 = new RangeError("offset is not uint");
                  throw rangeError1;
                }
                let diff = tmp2 - 1;
                let tmp12 = self[tmp + diff];
                let num3 = 256;
                let tmp13 = tmp12;
                if (0 < diff) {
                  const diff1 = diff - 1;
                  const sum = tmp12 + self[tmp + diff1] * num3;
                  tmp13 = sum;
                  while (0 < diff1) {
                    num3 = num3 * 256;
                    tmp12 = sum;
                    diff = diff1;
                    tmp13 = sum;
                    if (!num3) {
                      break;
                    }
                  }
                }
                return tmp13;
              }
              readUInt8(arg0, arg1) {
                const tmp = arg1;
                if (!tmp) {
                  if (arg0 % 1 === 0) {
                    if (arg0 >= 0) {
                      if (arg0 + 1 > tmp2) {
                        const _RangeError = RangeError;
                        const self = this;
                        const self2 = this;
                        const rangeError = new RangeError("Trying to access beyond buffer length");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self3 = this;
                  const self4 = this;
                  const rangeError1 = new RangeError("offset is not uint");
                  throw rangeError1;
                }
                return this[arg0];
              }
              readUInt16LE(arg0, arg1) {
                const self = this;
                const tmp = arg1;
                if (!tmp) {
                  if (arg0 % 1 === 0) {
                    if (arg0 >= 0) {
                      if (arg0 + 2 > tmp2) {
                        const _RangeError = RangeError;
                        const self2 = this;
                        const self3 = this;
                        const rangeError = new RangeError("Trying to access beyond buffer length");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self4 = this;
                  const self5 = this;
                  const rangeError1 = new RangeError("offset is not uint");
                  throw rangeError1;
                }
                return self[arg0] | self[arg0 + 1] << 8;
              }
              readUInt16BE(arg0, arg1) {
                const self = this;
                const tmp = arg1;
                if (!tmp) {
                  if (arg0 % 1 === 0) {
                    if (arg0 >= 0) {
                      if (arg0 + 2 > tmp2) {
                        const _RangeError = RangeError;
                        const self2 = this;
                        const self3 = this;
                        const rangeError = new RangeError("Trying to access beyond buffer length");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self4 = this;
                  const self5 = this;
                  const rangeError1 = new RangeError("offset is not uint");
                  throw rangeError1;
                }
                return self[arg0] << 8 | self[arg0 + 1];
              }
              readUInt32LE(arg0, arg1) {
                const self = this;
                const tmp = arg1;
                if (!tmp) {
                  if (arg0 % 1 === 0) {
                    if (arg0 >= 0) {
                      if (arg0 + 4 > tmp2) {
                        const _RangeError = RangeError;
                        const self2 = this;
                        const self3 = this;
                        const rangeError = new RangeError("Trying to access beyond buffer length");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self4 = this;
                  const self5 = this;
                  const rangeError1 = new RangeError("offset is not uint");
                  throw rangeError1;
                }
                return (self[arg0] | self[arg0 + 1] << 8 | self[arg0 + 2] << 16) + 16777216 * self[arg0 + 3];
              }
              readUInt32BE(arg0, arg1) {
                const self = this;
                const tmp = arg1;
                if (!tmp) {
                  if (arg0 % 1 === 0) {
                    if (arg0 >= 0) {
                      if (arg0 + 4 > tmp2) {
                        const _RangeError = RangeError;
                        const self2 = this;
                        const self3 = this;
                        const rangeError = new RangeError("Trying to access beyond buffer length");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self4 = this;
                  const self5 = this;
                  const rangeError1 = new RangeError("offset is not uint");
                  throw rangeError1;
                }
                return 16777216 * self[arg0] + (self[arg0 + 1] << 16 | self[arg0 + 2] << 8 | self[arg0 + 3]);
              }
              readIntLE(arg0, arg1, arg2) {
                const self = this;
                const tmp3 = arg2;
                if (!tmp3) {
                  if ((arg0 | 0) % 1 === 0) {
                    if ((arg0 | 0) >= 0) {
                      if ((arg0 | 0) + (arg1 | 0) > tmp4) {
                        const _RangeError = RangeError;
                        const self2 = this;
                        const self3 = this;
                        const rangeError = new RangeError("Trying to access beyond buffer length");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self4 = this;
                  const self5 = this;
                  const rangeError1 = new RangeError("offset is not uint");
                  throw rangeError1;
                }
                let tmp11 = self[tmp];
                let num3 = 1;
                let num4 = 256;
                let tmp12 = tmp11;
                let num5 = 1;
                if (1 < (arg1 | 0)) {
                  const sum = tmp11 + self[tmp + num3] * num4;
                  const sum1 = num3 + 1;
                  num5 = num4;
                  tmp12 = sum;
                  while (sum1 < (arg1 | 0)) {
                    num4 = num4 * 256;
                    num3 = sum1;
                    tmp11 = sum;
                    tmp12 = sum;
                    num5 = num4;
                    if (!num5) {
                      break;
                    }
                  }
                }
                let diff = tmp12;
                if (tmp12 >= num5 * 128) {
                  const _Math = Math;
                  diff = tmp12 - Math.pow(2, 8 * tmp2);
                }
                return diff;
              }
              readIntBE(arg0, arg1, arg2) {
                const self = this;
                const tmp3 = arg2;
                if (!tmp3) {
                  if ((arg0 | 0) % 1 === 0) {
                    if ((arg0 | 0) >= 0) {
                      if ((arg0 | 0) + (arg1 | 0) > tmp4) {
                        const _RangeError = RangeError;
                        const self2 = this;
                        const self3 = this;
                        const rangeError = new RangeError("Trying to access beyond buffer length");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self4 = this;
                  const self5 = this;
                  const rangeError1 = new RangeError("offset is not uint");
                  throw rangeError1;
                }
                let diff = tmp2 - 1;
                let tmp12 = self[tmp + diff];
                let num3 = 256;
                let tmp13 = tmp12;
                let num4 = 1;
                if (0 < diff) {
                  const diff1 = diff - 1;
                  const sum = tmp12 + self[tmp + diff1] * num3;
                  tmp13 = sum;
                  num4 = num3;
                  while (0 < diff1) {
                    num3 = num3 * 256;
                    tmp12 = sum;
                    diff = diff1;
                    tmp13 = sum;
                    num4 = num3;
                    if (!num4) {
                      break;
                    }
                  }
                }
                let diff2 = tmp13;
                if (tmp13 >= num4 * 128) {
                  const _Math = Math;
                  diff2 = tmp13 - Math.pow(2, 8 * tmp2);
                }
                return diff2;
              }
              readInt8(arg0, arg1) {
                let result;
                const self = this;
                const tmp = arg1;
                if (!tmp) {
                  if (arg0 % 1 === 0) {
                    if (arg0 >= 0) {
                      if (arg0 + 1 > tmp2) {
                        const _RangeError = RangeError;
                        const self2 = this;
                        const self3 = this;
                        const rangeError = new RangeError("Trying to access beyond buffer length");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self4 = this;
                  const self5 = this;
                  const rangeError1 = new RangeError("offset is not uint");
                  throw rangeError1;
                }
                if (128 & self[arg0]) {
                  result = -1 * (255 - tmp9 + 1);
                } else {
                  result = tmp9;
                }
                return result;
              }
              readInt16LE(arg0, arg1) {
                const self = this;
                const tmp = arg1;
                if (!tmp) {
                  if (arg0 % 1 === 0) {
                    if (arg0 >= 0) {
                      if (arg0 + 2 > tmp2) {
                        const _RangeError = RangeError;
                        const self2 = this;
                        const self3 = this;
                        const rangeError = new RangeError("Trying to access beyond buffer length");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self4 = this;
                  const self5 = this;
                  const rangeError1 = new RangeError("offset is not uint");
                  throw rangeError1;
                }
                let tmp10 = tmp9;
                if (32768 & (self[arg0] | self[arg0 + 1] << 8)) {
                  tmp10 = 4294901760 | tmp9;
                }
                return tmp10;
              }
              readInt16BE(arg0, arg1) {
                const self = this;
                const tmp = arg1;
                if (!tmp) {
                  if (arg0 % 1 === 0) {
                    if (arg0 >= 0) {
                      if (arg0 + 2 > tmp2) {
                        const _RangeError = RangeError;
                        const self2 = this;
                        const self3 = this;
                        const rangeError = new RangeError("Trying to access beyond buffer length");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self4 = this;
                  const self5 = this;
                  const rangeError1 = new RangeError("offset is not uint");
                  throw rangeError1;
                }
                let tmp10 = tmp9;
                if (32768 & (self[arg0 + 1] | self[arg0] << 8)) {
                  tmp10 = 4294901760 | tmp9;
                }
                return tmp10;
              }
              readInt32LE(arg0, arg1) {
                const self = this;
                const tmp = arg1;
                if (!tmp) {
                  if (arg0 % 1 === 0) {
                    if (arg0 >= 0) {
                      if (arg0 + 4 > tmp2) {
                        const _RangeError = RangeError;
                        const self2 = this;
                        const self3 = this;
                        const rangeError = new RangeError("Trying to access beyond buffer length");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self4 = this;
                  const self5 = this;
                  const rangeError1 = new RangeError("offset is not uint");
                  throw rangeError1;
                }
                return self[arg0] | self[arg0 + 1] << 8 | self[arg0 + 2] << 16 | self[arg0 + 3] << 24;
              }
              readInt32BE(arg0, arg1) {
                const self = this;
                const tmp = arg1;
                if (!tmp) {
                  if (arg0 % 1 === 0) {
                    if (arg0 >= 0) {
                      if (arg0 + 4 > tmp2) {
                        const _RangeError = RangeError;
                        const self2 = this;
                        const self3 = this;
                        const rangeError = new RangeError("Trying to access beyond buffer length");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self4 = this;
                  const self5 = this;
                  const rangeError1 = new RangeError("offset is not uint");
                  throw rangeError1;
                }
                return self[arg0] << 24 | self[arg0 + 1] << 16 | self[arg0 + 2] << 8 | self[arg0 + 3];
              }
              readFloatLE(arg0, arg1) {
                const self = this;
                const tmp = arg1;
                if (!tmp) {
                  if (arg0 % 1 === 0) {
                    if (arg0 >= 0) {
                      if (arg0 + 4 > tmp2) {
                        const _RangeError = RangeError;
                        const self2 = this;
                        const self3 = this;
                        const rangeError = new RangeError("Trying to access beyond buffer length");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self4 = this;
                  const self5 = this;
                  const rangeError1 = new RangeError("offset is not uint");
                  throw rangeError1;
                }
                return closure_1.read(self, arg0, true, 23, 4);
              }
              readFloatBE(arg0, arg1) {
                const self = this;
                const tmp = arg1;
                if (!tmp) {
                  if (arg0 % 1 === 0) {
                    if (arg0 >= 0) {
                      if (arg0 + 4 > tmp2) {
                        const _RangeError = RangeError;
                        const self2 = this;
                        const self3 = this;
                        const rangeError = new RangeError("Trying to access beyond buffer length");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self4 = this;
                  const self5 = this;
                  const rangeError1 = new RangeError("offset is not uint");
                  throw rangeError1;
                }
                return closure_1.read(self, arg0, false, 23, 4);
              }
              readDoubleLE(arg0, arg1) {
                const self = this;
                const tmp = arg1;
                if (!tmp) {
                  if (arg0 % 1 === 0) {
                    if (arg0 >= 0) {
                      if (arg0 + 8 > tmp2) {
                        const _RangeError = RangeError;
                        const self2 = this;
                        const self3 = this;
                        const rangeError = new RangeError("Trying to access beyond buffer length");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self4 = this;
                  const self5 = this;
                  const rangeError1 = new RangeError("offset is not uint");
                  throw rangeError1;
                }
                return closure_1.read(self, arg0, true, 52, 8);
              }
              readDoubleBE(arg0, arg1) {
                const self = this;
                const tmp = arg1;
                if (!tmp) {
                  if (arg0 % 1 === 0) {
                    if (arg0 >= 0) {
                      if (arg0 + 8 > tmp2) {
                        const _RangeError = RangeError;
                        const self2 = this;
                        const self3 = this;
                        const rangeError = new RangeError("Trying to access beyond buffer length");
                        throw rangeError;
                      }
                    }
                  }
                  const _RangeError2 = RangeError;
                  const self4 = this;
                  const self5 = this;
                  const rangeError1 = new RangeError("offset is not uint");
                  throw rangeError1;
                }
                return closure_1.read(self, arg0, false, 52, 8);
              }
              writeUIntLE(arg0, arg1, arg2, arg3) {
                const self = this;
                const tmp4 = arg3;
                if (!tmp4) {
                  const _Math = Math;
                  const diff = Math.pow(2, 8 * tmp3) - 1;
                  if (Buffer.isBuffer(self)) {
                    if (diff >= +arg0) {
                      if (+arg0 >= 0) {
                        if ((arg1 | 0) + (arg2 | 0) > self.length) {
                          const _RangeError = RangeError;
                          const self4 = this;
                          const self5 = this;
                          const rangeError = new RangeError("Index out of range");
                          throw rangeError;
                        }
                      }
                    }
                    const _RangeError2 = RangeError;
                    const self6 = this;
                    const self7 = this;
                    const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    throw rangeError1;
                  } else {
                    const _TypeError = TypeError;
                    const self2 = this;
                    const self3 = this;
                    const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    throw typeError;
                  }
                }
                self[arg1 | 0] = 255 & +arg0;
                let num5 = 256;
                let num6 = 1;
                if (1 < (arg2 | 0)) {
                  self[(arg1 | 0) + num6] = +arg0 / num5 & 255;
                  const sum = num6 + 1;
                  while (sum < (arg2 | 0)) {
                    num5 = num5 * 256;
                    num6 = sum;
                    if (!num5) {
                      break;
                    }
                  }
                }
                return (arg1 | 0) + (arg2 | 0);
              }
              writeUIntBE(arg0, arg1, arg2, arg3) {
                const self = this;
                const tmp4 = arg3;
                if (!tmp4) {
                  const _Math = Math;
                  const diff = Math.pow(2, 8 * tmp3) - 1;
                  if (Buffer.isBuffer(self)) {
                    if (diff >= +arg0) {
                      if (+arg0 >= 0) {
                        if ((arg1 | 0) + (arg2 | 0) > self.length) {
                          const _RangeError = RangeError;
                          const self4 = this;
                          const self5 = this;
                          const rangeError = new RangeError("Index out of range");
                          throw rangeError;
                        }
                      }
                    }
                    const _RangeError2 = RangeError;
                    const self6 = this;
                    const self7 = this;
                    const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    throw rangeError1;
                  } else {
                    const _TypeError = TypeError;
                    const self2 = this;
                    const self3 = this;
                    const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    throw typeError;
                  }
                }
                const diff1 = tmp3 - 1;
                self[(arg1 | 0) + diff1] = 255 & +arg0;
                let diff2 = diff1 - 1;
                let num5 = 256;
                if (0 <= diff2) {
                  self[(arg1 | 0) + diff2] = +arg0 / num5 & 255;
                  const diff3 = diff2 - 1;
                  while (0 <= diff3) {
                    num5 = num5 * 256;
                    diff2 = diff3;
                    if (!num5) {
                      break;
                    }
                  }
                }
                return (arg1 | 0) + (arg2 | 0);
              }
              writeUInt8(arg0, arg1, arg2) {
                const self = this;
                const tmp3 = arg2;
                if (!tmp3) {
                  if (Buffer.isBuffer(self)) {
                    if (255 >= +arg0) {
                      if (+arg0 >= 0) {
                        if ((arg1 | 0) + 1 > self.length) {
                          const _RangeError = RangeError;
                          const self4 = this;
                          const self5 = this;
                          const rangeError = new RangeError("Index out of range");
                          throw rangeError;
                        }
                      }
                    }
                    const _RangeError2 = RangeError;
                    const self6 = this;
                    const self7 = this;
                    const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    throw rangeError1;
                  } else {
                    const _TypeError = TypeError;
                    const self2 = this;
                    const self3 = this;
                    const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    throw typeError;
                  }
                }
                let rounded = tmp;
                if (!Buffer.TYPED_ARRAY_SUPPORT) {
                  const _Math = Math;
                  rounded = Math.floor(tmp);
                }
                self[arg1 | 0] = 255 & rounded;
                return (arg1 | 0) + 1;
              }
              writeUInt16LE(arg0, arg1, arg2) {
                const self = this;
                const tmp3 = arg2;
                if (!tmp3) {
                  if (Buffer.isBuffer(self)) {
                    if (65535 >= +arg0) {
                      if (+arg0 >= 0) {
                        if ((arg1 | 0) + 2 > self.length) {
                          const _RangeError = RangeError;
                          const self4 = this;
                          const self5 = this;
                          const rangeError = new RangeError("Index out of range");
                          throw rangeError;
                        }
                      }
                    }
                    const _RangeError2 = RangeError;
                    const self6 = this;
                    const self7 = this;
                    const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    throw rangeError1;
                  } else {
                    const _TypeError = TypeError;
                    const self2 = this;
                    const self3 = this;
                    const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    throw typeError;
                  }
                }
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  self[arg1 | 0] = 255 & +arg0;
                  self[(arg1 | 0) + 1] = +arg0 >>> 8;
                } else {
                  let num11;
                  let sum = tmp;
                  if (+arg0 < 0) {
                    sum = 65535 + tmp + 1;
                  }
                  const _Math = Math;
                  const bound = Math.min(self.length - tmp2, 2);
                  for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                    let result = 8 * num11;
                    self[tmp2 + num11] = (sum & 255 << result) >>> result;
                  }
                }
                return (arg1 | 0) + 2;
              }
              writeUInt16BE(arg0, arg1, arg2) {
                const self = this;
                const tmp3 = arg2;
                if (!tmp3) {
                  if (Buffer.isBuffer(self)) {
                    if (65535 >= +arg0) {
                      if (+arg0 >= 0) {
                        if ((arg1 | 0) + 2 > self.length) {
                          const _RangeError = RangeError;
                          const self4 = this;
                          const self5 = this;
                          const rangeError = new RangeError("Index out of range");
                          throw rangeError;
                        }
                      }
                    }
                    const _RangeError2 = RangeError;
                    const self6 = this;
                    const self7 = this;
                    const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    throw rangeError1;
                  } else {
                    const _TypeError = TypeError;
                    const self2 = this;
                    const self3 = this;
                    const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    throw typeError;
                  }
                }
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  self[arg1 | 0] = +arg0 >>> 8;
                  self[(arg1 | 0) + 1] = 255 & +arg0;
                } else {
                  let num11;
                  let sum = tmp;
                  if (+arg0 < 0) {
                    sum = 65535 + tmp + 1;
                  }
                  const _Math = Math;
                  const bound = Math.min(self.length - tmp2, 2);
                  for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                    let result = 8 * (1 - num11);
                    self[tmp2 + num11] = (sum & 255 << result) >>> result;
                  }
                }
                return (arg1 | 0) + 2;
              }
              writeUInt32LE(arg0, arg1, arg2) {
                const self = this;
                const tmp3 = arg2;
                if (!tmp3) {
                  if (Buffer.isBuffer(self)) {
                    if (4294967295 >= +arg0) {
                      if (+arg0 >= 0) {
                        if ((arg1 | 0) + 4 > self.length) {
                          const _RangeError = RangeError;
                          const self4 = this;
                          const self5 = this;
                          const rangeError = new RangeError("Index out of range");
                          throw rangeError;
                        }
                      }
                    }
                    const _RangeError2 = RangeError;
                    const self6 = this;
                    const self7 = this;
                    const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    throw rangeError1;
                  } else {
                    const _TypeError = TypeError;
                    const self2 = this;
                    const self3 = this;
                    const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    throw typeError;
                  }
                }
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  self[(arg1 | 0) + 3] = +arg0 >>> 24;
                  self[(arg1 | 0) + 2] = +arg0 >>> 16;
                  self[(arg1 | 0) + 1] = +arg0 >>> 8;
                  self[arg1 | 0] = 255 & +arg0;
                } else {
                  let num11;
                  let sum = tmp;
                  if (+arg0 < 0) {
                    sum = 4294967295 + tmp + 1;
                  }
                  const _Math = Math;
                  const bound = Math.min(self.length - tmp2, 4);
                  for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                    self[tmp2 + num11] = sum >>> 8 * num11 & 255;
                  }
                }
                return (arg1 | 0) + 4;
              }
              writeUInt32BE(arg0, arg1, arg2) {
                const self = this;
                const tmp3 = arg2;
                if (!tmp3) {
                  if (Buffer.isBuffer(self)) {
                    if (4294967295 >= +arg0) {
                      if (+arg0 >= 0) {
                        if ((arg1 | 0) + 4 > self.length) {
                          const _RangeError = RangeError;
                          const self4 = this;
                          const self5 = this;
                          const rangeError = new RangeError("Index out of range");
                          throw rangeError;
                        }
                      }
                    }
                    const _RangeError2 = RangeError;
                    const self6 = this;
                    const self7 = this;
                    const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    throw rangeError1;
                  } else {
                    const _TypeError = TypeError;
                    const self2 = this;
                    const self3 = this;
                    const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    throw typeError;
                  }
                }
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  self[arg1 | 0] = +arg0 >>> 24;
                  self[(arg1 | 0) + 1] = +arg0 >>> 16;
                  self[(arg1 | 0) + 2] = +arg0 >>> 8;
                  self[(arg1 | 0) + 3] = 255 & +arg0;
                } else {
                  let num12;
                  let sum = tmp;
                  if (+arg0 < 0) {
                    sum = 4294967295 + tmp + 1;
                  }
                  const _Math = Math;
                  const bound = Math.min(self.length - tmp2, 4);
                  for (let num12 = 0; num12 < bound; num12 = num12 + 1) {
                    self[tmp2 + num12] = sum >>> 8 * (3 - num12) & 255;
                  }
                }
                return (arg1 | 0) + 4;
              }
              writeIntLE(arg0, arg1, arg2, arg3) {
                const self = this;
                const tmp3 = arg3;
                if (!tmp3) {
                  const _Math = Math;
                  const powResult = Math.pow(2, 8 * arg2 - 1);
                  const diff = powResult - 1;
                  const tmp7 = -powResult;
                  if (Buffer.isBuffer(self)) {
                    if (diff >= +arg0) {
                      if (+arg0 >= tmp7) {
                        if ((arg1 | 0) + arg2 > self.length) {
                          const _RangeError = RangeError;
                          const self4 = this;
                          const self5 = this;
                          const rangeError = new RangeError("Index out of range");
                          throw rangeError;
                        }
                      }
                    }
                    const _RangeError2 = RangeError;
                    const self6 = this;
                    const self7 = this;
                    const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    throw rangeError1;
                  } else {
                    const _TypeError = TypeError;
                    const self2 = this;
                    const self3 = this;
                    const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    throw typeError;
                  }
                }
                self[arg1 | 0] = 255 & +arg0;
                let num4 = 0;
                let num5 = 256;
                let num6 = 1;
                if (1 < arg2) {
                  while (true) {
                    let num7 = num4;
                    let tmp18 = tmp15;
                    if (tmp < 0) {
                      tmp18 = 0 === num7;
                    }
                    if (tmp18) {
                      tmp18 = 0 !== self[tmp2 + num6 - 1];
                    }
                    if (tmp18) {
                      num7 = 1;
                    }
                    self[tmp2 + num6] = (tmp / num5 | 0) - num7 & 255;
                    let sum = num6 + 1;
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
                return (arg1 | 0) + arg2;
              }
              writeIntBE(arg0, arg1, arg2, arg3) {
                const self = this;
                const tmp3 = arg3;
                if (!tmp3) {
                  const _Math = Math;
                  const powResult = Math.pow(2, 8 * arg2 - 1);
                  const diff = powResult - 1;
                  const tmp7 = -powResult;
                  if (Buffer.isBuffer(self)) {
                    if (diff >= +arg0) {
                      if (+arg0 >= tmp7) {
                        if ((arg1 | 0) + arg2 > self.length) {
                          const _RangeError = RangeError;
                          const self4 = this;
                          const self5 = this;
                          const rangeError = new RangeError("Index out of range");
                          throw rangeError;
                        }
                      }
                    }
                    const _RangeError2 = RangeError;
                    const self6 = this;
                    const self7 = this;
                    const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    throw rangeError1;
                  } else {
                    const _TypeError = TypeError;
                    const self2 = this;
                    const self3 = this;
                    const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    throw typeError;
                  }
                }
                const diff1 = arg2 - 1;
                self[(arg1 | 0) + diff1] = 255 & +arg0;
                let diff2 = diff1 - 1;
                let num4 = 256;
                let num5 = 0;
                if (0 <= diff2) {
                  while (true) {
                    let num6 = num5;
                    let tmp20 = tmp17;
                    if (tmp < 0) {
                      tmp20 = 0 === num6;
                    }
                    if (tmp20) {
                      tmp20 = 0 !== self[tmp2 + diff2 + 1];
                    }
                    if (tmp20) {
                      num6 = 1;
                    }
                    self[tmp2 + diff2] = (tmp / num4 | 0) - num6 & 255;
                    let diff3 = diff2 - 1;
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
                return (arg1 | 0) + arg2;
              }
              writeInt8(arg0, arg1, arg2) {
                const self = this;
                const tmp3 = arg2;
                if (!tmp3) {
                  if (Buffer.isBuffer(self)) {
                    if (127 >= +arg0) {
                      if (+arg0 >= -128) {
                        if ((arg1 | 0) + 1 > self.length) {
                          const _RangeError = RangeError;
                          const self4 = this;
                          const self5 = this;
                          const rangeError = new RangeError("Index out of range");
                          throw rangeError;
                        }
                      }
                    }
                    const _RangeError2 = RangeError;
                    const self6 = this;
                    const self7 = this;
                    const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    throw rangeError1;
                  } else {
                    const _TypeError = TypeError;
                    const self2 = this;
                    const self3 = this;
                    const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    throw typeError;
                  }
                }
                let rounded = tmp;
                if (!Buffer.TYPED_ARRAY_SUPPORT) {
                  const _Math = Math;
                  rounded = Math.floor(tmp);
                }
                let sum = rounded;
                if (rounded < 0) {
                  sum = 255 + rounded + 1;
                }
                self[arg1 | 0] = 255 & sum;
                return (arg1 | 0) + 1;
              }
              writeInt16LE(arg0, arg1, arg2) {
                const self = this;
                const tmp3 = arg2;
                if (!tmp3) {
                  if (Buffer.isBuffer(self)) {
                    if (32767 >= +arg0) {
                      if (+arg0 >= -32768) {
                        if ((arg1 | 0) + 2 > self.length) {
                          const _RangeError = RangeError;
                          const self4 = this;
                          const self5 = this;
                          const rangeError = new RangeError("Index out of range");
                          throw rangeError;
                        }
                      }
                    }
                    const _RangeError2 = RangeError;
                    const self6 = this;
                    const self7 = this;
                    const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    throw rangeError1;
                  } else {
                    const _TypeError = TypeError;
                    const self2 = this;
                    const self3 = this;
                    const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    throw typeError;
                  }
                }
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  self[arg1 | 0] = 255 & +arg0;
                  self[(arg1 | 0) + 1] = +arg0 >>> 8;
                } else {
                  let num11;
                  let sum = tmp;
                  if (+arg0 < 0) {
                    sum = 65535 + tmp + 1;
                  }
                  const _Math = Math;
                  const bound = Math.min(self.length - tmp2, 2);
                  for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                    let result = 8 * num11;
                    self[tmp2 + num11] = (sum & 255 << result) >>> result;
                  }
                }
                return (arg1 | 0) + 2;
              }
              writeInt16BE(arg0, arg1, arg2) {
                const self = this;
                const tmp3 = arg2;
                if (!tmp3) {
                  if (Buffer.isBuffer(self)) {
                    if (32767 >= +arg0) {
                      if (+arg0 >= -32768) {
                        if ((arg1 | 0) + 2 > self.length) {
                          const _RangeError = RangeError;
                          const self4 = this;
                          const self5 = this;
                          const rangeError = new RangeError("Index out of range");
                          throw rangeError;
                        }
                      }
                    }
                    const _RangeError2 = RangeError;
                    const self6 = this;
                    const self7 = this;
                    const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    throw rangeError1;
                  } else {
                    const _TypeError = TypeError;
                    const self2 = this;
                    const self3 = this;
                    const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    throw typeError;
                  }
                }
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  self[arg1 | 0] = +arg0 >>> 8;
                  self[(arg1 | 0) + 1] = 255 & +arg0;
                } else {
                  let num11;
                  let sum = tmp;
                  if (+arg0 < 0) {
                    sum = 65535 + tmp + 1;
                  }
                  const _Math = Math;
                  const bound = Math.min(self.length - tmp2, 2);
                  for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                    let result = 8 * (1 - num11);
                    self[tmp2 + num11] = (sum & 255 << result) >>> result;
                  }
                }
                return (arg1 | 0) + 2;
              }
              writeInt32LE(arg0, arg1, arg2) {
                const self = this;
                const tmp3 = arg2;
                if (!tmp3) {
                  if (Buffer.isBuffer(self)) {
                    if (2147483647 >= +arg0) {
                      if (+arg0 >= -2147483648) {
                        if ((arg1 | 0) + 4 > self.length) {
                          const _RangeError = RangeError;
                          const self4 = this;
                          const self5 = this;
                          const rangeError = new RangeError("Index out of range");
                          throw rangeError;
                        }
                      }
                    }
                    const _RangeError2 = RangeError;
                    const self6 = this;
                    const self7 = this;
                    const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    throw rangeError1;
                  } else {
                    const _TypeError = TypeError;
                    const self2 = this;
                    const self3 = this;
                    const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    throw typeError;
                  }
                }
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  self[arg1 | 0] = 255 & +arg0;
                  self[(arg1 | 0) + 1] = +arg0 >>> 8;
                  self[(arg1 | 0) + 2] = +arg0 >>> 16;
                  self[(arg1 | 0) + 3] = +arg0 >>> 24;
                } else {
                  let num11;
                  let sum = tmp;
                  if (+arg0 < 0) {
                    sum = 4294967295 + tmp + 1;
                  }
                  const _Math = Math;
                  const bound = Math.min(self.length - tmp2, 4);
                  for (let num11 = 0; num11 < bound; num11 = num11 + 1) {
                    self[tmp2 + num11] = sum >>> 8 * num11 & 255;
                  }
                }
                return (arg1 | 0) + 4;
              }
              writeInt32BE(arg0, arg1, arg2) {
                const self = this;
                const tmp3 = arg2;
                if (!tmp3) {
                  if (Buffer.isBuffer(self)) {
                    if (2147483647 >= +arg0) {
                      if (+arg0 >= -2147483648) {
                        if ((arg1 | 0) + 4 > self.length) {
                          const _RangeError = RangeError;
                          const self4 = this;
                          const self5 = this;
                          const rangeError = new RangeError("Index out of range");
                          throw rangeError;
                        }
                      }
                    }
                    const _RangeError2 = RangeError;
                    const self6 = this;
                    const self7 = this;
                    const rangeError1 = new RangeError("\"value\" argument is out of bounds");
                    throw rangeError1;
                  } else {
                    const _TypeError = TypeError;
                    const self2 = this;
                    const self3 = this;
                    const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
                    throw typeError;
                  }
                }
                let sum = tmp;
                if (+arg0 < 0) {
                  sum = 4294967295 + tmp + 1;
                }
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  self[arg1 | 0] = sum >>> 24;
                  self[(arg1 | 0) + 1] = sum >>> 16;
                  self[(arg1 | 0) + 2] = sum >>> 8;
                  self[(arg1 | 0) + 3] = 255 & sum;
                } else {
                  let num13;
                  let sum1 = sum;
                  if (sum < 0) {
                    sum1 = 4294967295 + sum + 1;
                  }
                  const _Math = Math;
                  const bound = Math.min(self.length - tmp2, 4);
                  for (let num13 = 0; num13 < bound; num13 = num13 + 1) {
                    self[tmp2 + num13] = sum1 >>> 8 * (3 - num13) & 255;
                  }
                }
                return (arg1 | 0) + 4;
              }
              writeFloatLE(arg0, arg1, arg2) {
                const self = this;
                const tmp = arg2;
                if (!tmp) {
                  if (arg1 + 4 > self.length) {
                    const _RangeError2 = RangeError;
                    const self4 = this;
                    const self5 = this;
                    const rangeError = new RangeError("Index out of range");
                    throw rangeError;
                  } else if (arg1 < 0) {
                    const _RangeError = RangeError;
                    const self2 = this;
                    const self3 = this;
                    const rangeError1 = new RangeError("Index out of range");
                    throw rangeError1;
                  }
                }
                closure_1.write(self, arg0, arg1, true, 23, 4);
                return arg1 + 4;
              }
              writeFloatBE(arg0, arg1, arg2) {
                const self = this;
                const tmp = arg2;
                if (!tmp) {
                  if (arg1 + 4 > self.length) {
                    const _RangeError2 = RangeError;
                    const self4 = this;
                    const self5 = this;
                    const rangeError = new RangeError("Index out of range");
                    throw rangeError;
                  } else if (arg1 < 0) {
                    const _RangeError = RangeError;
                    const self2 = this;
                    const self3 = this;
                    const rangeError1 = new RangeError("Index out of range");
                    throw rangeError1;
                  }
                }
                closure_1.write(self, arg0, arg1, false, 23, 4);
                return arg1 + 4;
              }
              writeDoubleLE(arg0, arg1, arg2) {
                const self = this;
                const tmp = arg2;
                if (!tmp) {
                  if (arg1 + 8 > self.length) {
                    const _RangeError2 = RangeError;
                    const self4 = this;
                    const self5 = this;
                    const rangeError = new RangeError("Index out of range");
                    throw rangeError;
                  } else if (arg1 < 0) {
                    const _RangeError = RangeError;
                    const self2 = this;
                    const self3 = this;
                    const rangeError1 = new RangeError("Index out of range");
                    throw rangeError1;
                  }
                }
                closure_1.write(self, arg0, arg1, true, 52, 8);
                return arg1 + 8;
              }
              writeDoubleBE(arg0, arg1, arg2) {
                const self = this;
                const tmp = arg2;
                if (!tmp) {
                  if (arg1 + 8 > self.length) {
                    const _RangeError2 = RangeError;
                    const self4 = this;
                    const self5 = this;
                    const rangeError = new RangeError("Index out of range");
                    throw rangeError;
                  } else if (arg1 < 0) {
                    const _RangeError = RangeError;
                    const self2 = this;
                    const self3 = this;
                    const rangeError1 = new RangeError("Index out of range");
                    throw rangeError1;
                  }
                }
                closure_1.write(self, arg0, arg1, false, 52, 8);
                return arg1 + 8;
              }
              copy(arg0, arg1, arg2, arg3) {
                let length = arg3;
                const self = this;
                const tmp2 = arg3 || 0 === length;
                if (!tmp2) {
                  length = self.length;
                }
                let num2 = arg1;
                if (arg1 >= arg0.length) {
                  num2 = arg0.length;
                }
                if (!num2) {
                  num2 = 0;
                }
                const tmp3 = length > 0 && length < (arg2 || 0);
                if (tmp3) {
                  length = tmp;
                }
                if (length === (arg2 || 0)) {
                  return 0;
                } else {
                  if (0 !== arg0.length) {
                    if (0 !== self.length) {
                      if (num2 < 0) {
                        const _RangeError3 = RangeError;
                        const self6 = this;
                        const self7 = this;
                        const rangeError = new RangeError("targetStart out of bounds");
                        throw rangeError;
                      } else {
                        if ((arg2 || 0) >= 0) {
                          if ((arg2 || 0) < self.length) {
                            if (length < 0) {
                              const _RangeError = RangeError;
                              const self2 = this;
                              const self3 = this;
                              const rangeError1 = new RangeError("sourceEnd out of bounds");
                              throw rangeError1;
                            } else {
                              if (length > self.length) {
                                length = self.length;
                              }
                              if (arg0.length - num2 < length - (arg2 || 0)) {
                                length = arg0.length - num2 + tmp;
                              }
                              const diff = length - tmp;
                              if (self === arg0) {
                                if ((arg2 || 0) < num2) {
                                  if (num2 < length) {
                                    let diff1 = diff - 1;
                                    if (0 <= diff1) {
                                      do {
                                        arg0[diff1 + num2] = self[diff1 + tmp];
                                        diff1 = diff1 - 1;
                                      } while (0 <= diff1);
                                    }
                                  }
                                  return diff;
                                }
                              }
                              if (diff >= 1000) {
                                if (Buffer.TYPED_ARRAY_SUPPORT) {
                                  const _Uint8Array = Uint8Array;
                                  set = Uint8Array.prototype.set;
                                  set.call(arg0, self.subarray(arg2 || 0, (arg2 || 0) + diff), num2);
                                }
                              }
                              let num5 = 0;
                              if (0 < diff) {
                                do {
                                  arg0[num5 + num2] = self[num5 + tmp];
                                  num5 = num5 + 1;
                                } while (num5 < diff);
                              }
                            }
                          }
                        }
                        const _RangeError2 = RangeError;
                        const self4 = this;
                        const self5 = this;
                        const rangeError2 = new RangeError("sourceStart out of bounds");
                        throw rangeError2;
                      }
                    }
                  }
                  return 0;
                }
              }
              fill(str, str2, str3, arg3) {
                let diff;
                let num5;
                let tmp4;
                let tmp5;
                let tmp6;
                const self = this;
                let tmp = arg3;
                if (typeof str === "string") {
                  let length;
                  let num;
                  if (typeof str2 === "string") {
                    length = self.length;
                    num = 0;
                    tmp = str2;
                  } else {
                    length = str3;
                    num = str2;
                    if (typeof str3 === "string") {
                      length = self.length;
                      tmp = str3;
                      num = str2;
                    }
                  }
                  let tmp2 = str;
                  if (1 === str.length) {
                    const charCodeAtResult = str.charCodeAt(0);
                    tmp2 = str;
                    if (charCodeAtResult < 256) {
                      tmp2 = charCodeAtResult;
                    }
                  }
                  if (undefined !== tmp) {
                    if (typeof tmp !== "string") {
                      const _TypeError2 = TypeError;
                      const self8 = this;
                      const self9 = this;
                      const typeError = new TypeError("encoding must be a string");
                      throw typeError;
                    }
                  }
                  tmp4 = tmp;
                  tmp5 = length;
                  tmp6 = num;
                  num5 = tmp2;
                  if (typeof tmp === "string") {
                    tmp4 = tmp;
                    tmp5 = length;
                    tmp6 = num;
                    num5 = tmp2;
                    if (!Buffer.isEncoding(tmp)) {
                      const _TypeError = TypeError;
                      const self2 = this;
                      const self3 = this;
                      const typeError1 = new TypeError("Unknown encoding: " + tmp);
                      throw typeError1;
                    }
                  }
                } else {
                  tmp4 = tmp;
                  tmp5 = str3;
                  tmp6 = str2;
                  num5 = str;
                  if (typeof str === "number") {
                    num5 = str & 255;
                    tmp4 = tmp;
                    tmp5 = str3;
                    tmp6 = str2;
                  }
                }
                if (tmp6 >= 0) {
                  if (self.length >= tmp6) {
                    if (self.length >= tmp5) {
                      if (tmp5 <= tmp6) {
                        return self;
                      } else {
                        let sum = tmp6 >>> 0;
                        const tmp10 = undefined === tmp5 ? self.length : tmp5 >>> 0;
                        if (!num5) {
                          num5 = 0;
                        }
                        if (typeof num5 === "number") {
                          if (sum < tmp10) {
                            do {
                              self[sum] = num5;
                              sum = sum + 1;
                            } while (sum < tmp10);
                          }
                        } else {
                          let tmp11Result = num5;
                          if (!Buffer.isBuffer(num5)) {
                            obj = Object.create(Buffer.prototype);
                            if (!Buffer.TYPED_ARRAY_SUPPORT) {
                              if (!(obj instanceof Buffer)) {
                                let tmp29Result;
                                const obj2 = Object.create(Buffer.prototype);
                                if (!Buffer.TYPED_ARRAY_SUPPORT) {
                                  if (!(obj2 instanceof Buffer)) {
                                    tmp29Result = Buffer(num5, tmp4, undefined);
                                  }
                                  str2 = tmp29Result;
                                }
                                if (typeof num5 === "number") {
                                  if (typeof tmp4 === "string") {
                                    const _Error = Error;
                                    const self4 = this;
                                    const self5 = this;
                                    const error = new Error("If encoding is specified then the first argument must be a string");
                                    throw error;
                                  } else {
                                    tmp29Result = allocUnsafe(obj2, num5);
                                  }
                                } else {
                                  tmp29Result = from(obj2, num5, tmp4, undefined);
                                }
                              }
                              tmp11Result = utf8ToBytes(str2.toString());
                            }
                            if (typeof num5 === "number") {
                              if (typeof tmp4 === "string") {
                                const _Error2 = Error;
                                const self6 = this;
                                const self7 = this;
                                const error1 = new Error("If encoding is specified then the first argument must be a string");
                                throw error1;
                              } else {
                                str2 = allocUnsafe(obj, num5);
                              }
                            } else {
                              str2 = from(obj, num5, tmp4, undefined);
                            }
                          }
                          let num7 = 0;
                          if (0 < tmp10 - sum) {
                            do {
                              self[num7 + sum] = tmp11Result[num7 % tmp11Result.length];
                              num7 = num7 + 1;
                              diff = tmp10 - sum;
                            } while (num7 < diff);
                          }
                        }
                        return self;
                      }
                    }
                  }
                }
                const rangeError = new RangeError("Out of range index");
                throw rangeError;
              }
            }
          }
        }
        Buffer.byteLength = byteLength;
        Buffer.prototype._isBuffer = true;
        let c12 = 4096;
        const re13 = /[^+\/0-9A-Za-z-_]/g;
      };
      let callResult = fn.call(arg1, globalThis);
    },
    (arg0, arg1) => {
      arg1.byteLength = function byteLength(arg0) {
        if (0 < arg0.length % 4) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("Invalid string. Length must be a multiple of 4");
          throw error;
        } else {
          let num = 2;
          if ("=" !== arg0[arg0.length - 2]) {
            let num3 = 0;
            if ("=" === arg0[arg0.length - 1]) {
              num3 = 1;
            }
            num = num3;
          }
          return tmp / 4 - num;
        }
      };
      arg1.toByteArray = function toByteArray(arg0) {
        let length;
        let length2;
        ({ length, length: length2 } = arg0);
        if (0 < length2 % 4) {
          const _Error = Error;
          const self3 = this;
          const self4 = this;
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
          const self = this;
          const self2 = this;
          const tmp2 = new closure_2(3 * length / 4 - num3);
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
              let tmp6 = items1[arg0.charCodeAt(arg0, num14)] << 18;
              let tmp7 = items1[arg0.charCodeAt(arg0, num14 + 1)] << 12;
              let tmp8 = items1[arg0.charCodeAt(arg0, num14 + 2)] << 6;
              let tmp9 = tmp6 | tmp7 | tmp8 | items1[arg0.charCodeAt(arg0, num14 + 3)];
              let sum = num12 + 1;
              tmp2[num12] = tmp9 >> 16 & 255;
              let sum1 = sum + 1;
              tmp2[sum] = tmp9 >> 8 & 255;
              num12 = sum1 + 1;
              tmp2[sum1] = 255 & tmp9;
              num14 = num14 + 4;
              num13 = num13 + 3;
              num15 = num12;
              num16 = num14;
            } while (num14 < diff);
          }
          if (2 === num3) {
            const tmp13 = items1[arg0.charCodeAt(arg0, num16)] << 2;
            tmp2[num15] = 255 & (tmp13 | items1[arg0.charCodeAt(arg0, num16 + 1)] >> 4);
          } else if (1 === num3) {
            const tmp18 = items1[arg0.charCodeAt(arg0, num16)] << 10;
            const tmp19 = items1[arg0.charCodeAt(arg0, num16 + 1)] << 4;
            const tmp20 = tmp18 | tmp19 | items1[arg0.charCodeAt(arg0, num16 + 2)] >> 2;
            tmp2[num15] = tmp20 >> 8 & 255;
            tmp2[num15 + 1] = 255 & tmp20;
          }
          return tmp2;
        }
      };
      arg1.fromByteArray = function fromByteArray(arg0) {
        let str;
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
            let push = items.push;
            if (diff < sum) {
              tmp5 = diff;
            }
            items1 = [];
            if (sum2 < tmp5) {
              do {
                let sum1 = (arg0[sum2] << 16) + (arg0[sum2 + 1] << 8) + arg0[sum2 + 2];
                let arr = items1.push(items[sum1 >> 18 & 63] + items[sum1 >> 12 & 63] + items[sum1 >> 6 & 63] + items[63 & sum1]);
                sum2 = sum2 + 3;
              } while (sum2 < tmp5);
            }
            let arr2 = push(items1.join(""));
            num = sum;
          } while (sum < diff);
        }
        if (1 === result) {
          str = `${"" + items[tmp10 >> 2] + items[tmp10 << 4 & 63]}==`;
        } else {
          str = "";
          if (2 === result) {
            const sum3 = (arg0[length - 2] << 8) + arg0[length - 1];
            str = `${"" + items[tmp13 >> 10] + items[tmp13 >> 4 & 63] + items[tmp13 << 2 & 63]}=`;
          }
        }
        items.push(str);
        return items.join("");
      };
      items = [];
      let items1 = [];
      let closure_2 = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
      let num = 0;
      do {
        items[num] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[num];
        let charCodeAt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt;
        items1["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(num)] = num;
        num = num + 1;
      } while (num < 64);
      items1["-".charCodeAt(0)] = 62;
      items1["_".charCodeAt(0)] = 63;
    },
    (arg0, arg1) => {
      arg1.read = (arg0, arg1, arg2, exponent, arg4) => {
        let diff3;
        let sum6;
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
          diff3 = num3 - tmp17;
          sum6 = tmp15;
        } else if (tmp10 >> -tmp11 === diff2) {
          let num6 = NaN;
          if (!tmp15) {
            let num7 = num3;
            if (arg0[arg1 + num] >> 7) {
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
        let num8;
        let num = 0;
        const diff = 8 * arg5 - exponent;
        if (23 === exponent) {
          const _Math = Math;
          const _Math2 = Math;
          const powResult = Math.pow(2, -24);
          num = powResult - Math.pow(2, -77);
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
          num8 = 1;
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
          let num11;
          let num12;
          if (absolute !== Infinity) {
            let result1;
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
              result1 = num / result;
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
            num11 = 0;
            num12 = diff2;
            if (sum1 + (diff2 >> 1) < diff2) {
              if (sum1 + (diff2 >> 1) >= 1) {
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
      const tmp = Array.isArray || ((arg0) => "[object Array]" == toString.call(arg0));
      arg0.exports = tmp;
    },
    (arg0, arg1) => {
      function runClearTimeout(arg0) {
        if (clearTimeout === clearTimeout) {
          const _clearTimeout4 = clearTimeout;
          return clearTimeout(arg0);
        } else {
          if (clearTimeout === defaultClearTimeout) {
            if (clearTimeout) {
              const _clearTimeout = clearTimeout;
              const _clearTimeout2 = clearTimeout;
              const _clearTimeout3 = clearTimeout;
              return clearTimeout(arg0);
            }
          }
          try {
            return clearTimeout(arg0);
          } catch (err) {
            try {
              return clearTimeout.call(null, arg0);
            } catch (err) {
              return clearTimeout.call(this, arg0);
            }
          }
        }
      }
      function defaultSetTimout() {
        const error = new Error("setTimeout has not been defined");
        throw error;
      }
      function defaultClearTimeout() {
        const error = new Error("clearTimeout has not been defined");
        throw error;
      }
      function runTimeout(cleanUpNextTick) {
        let _setTimeout5;
        if (_setTimeout5 === setTimeout) {
          const _setTimeout4 = setTimeout;
          return setTimeout(cleanUpNextTick, 0);
        } else {
          if (_setTimeout5 === defaultSetTimout) {
            if (setTimeout) {
              const _setTimeout = setTimeout;
              const _setTimeout2 = setTimeout;
              _setTimeout5 = setTimeout;
              const _setTimeout3 = setTimeout;
              return setTimeout(cleanUpNextTick, 0);
            }
          }
          try {
            return _setTimeout5(cleanUpNextTick, 0);
          } catch (err) {
            try {
              return _setTimeout5.call(null, cleanUpNextTick, 0);
            } catch (err) {
              return _setTimeout5.call(this, cleanUpNextTick, 0);
            }
          }
        }
      }
      function cleanUpNextTick() {
        let sum1;
        const tmp = c7 && _null;
        if (tmp) {
          c7 = false;
          if (_null.length) {
            closure_6 = _null.concat(closure_6);
          } else {
            c8 = -1;
          }
          if (closure_6.length) {
            const tmp6 = c7;
            if (!tmp6) {
              c7 = true;
              let length = closure_6.length;
              const tmp9 = runTimeout(cleanUpNextTick);
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
              runClearTimeout(tmp9);
            }
          }
        }
      }
      function drainQueue() {
        let clearTimeout;
        let sum1;
        const tmp = c7;
        if (!tmp) {
          c7 = true;
          let length = closure_6.length;
          const tmp4 = runTimeout(cleanUpNextTick);
          while (length) {
            let c5 = closure_6;
            closure_6 = [];
            let sum = c8 + 1;
            c8 = sum;
            if (sum < length) {
              do {
                if (c5) {
                  obj = tmp10[c8];
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
          runClearTimeout(tmp4);
        }
      }
      class Item {
        constructor(arg0, arg1) {

        }
        run() {
          const fun = this.fun;
          fun.apply(null, this.array);
        }
      }
      function noop() {

      }
      const exports = {
        nextTick: function(fun) {
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
          const push = closure_6.push;
          Object.create(Item.prototype);
          obj = { fun, array };
          push(obj);
          const tmp4 = 1 !== closure_6.length || c7;
          if (!tmp4) {
            runTimeout(drainQueue);
          }
        },
        title: "browser",
        browser: true,
        env: {},
        argv: [],
        version: "",
        versions: {},
        on: noop,
        addListener: noop,
        once: noop,
        off: noop,
        removeListener: noop,
        removeAllListeners: noop,
        emit: noop,
        binding: (arg0) => {
          const error = new Error("process.binding is not supported");
          throw error;
        },
        cwd: () => "/",
        chdir: (arg0) => {
          const error = new Error("process.chdir is not supported");
          throw error;
        },
        umask: () => 0
      };
      arg0.exports = exports;
      let tmp = (() => {
        try {
          let _setTimeout2;
          const _setTimeout = setTimeout;
          if (typeof setTimeout === "function") {
            _setTimeout2 = setTimeout;
          } else {
            _setTimeout2 = defaultSetTimout;
          }
          closure_0 = _setTimeout2;
          try {
            let _clearTimeout2;
            const _clearTimeout = clearTimeout;
            if (typeof clearTimeout === "function") {
              _clearTimeout2 = clearTimeout;
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
      let closure_6 = [];
      let c7 = false;
      let c8 = -1;
    },
    (arg0, arg1) => {

    },
    (arg0, arg1, fn) => {
      let closure_0 = arg1;
      fn = (arg0) => {
        closure_0 = arg0;
        const re1 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        closure_0.resolve = function() {
          let found;
          let tmp20;
          let diff = arguments.length - 1;
          let flag = false;
          let str = "";
          let str2 = "";
          let flag2 = false;
          let str3 = "";
          if (-1 <= diff) {
            while (true) {
              let str4;
              let tmp3 = flag;
              if (0 <= diff) {
                str4 = arguments[diff];
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
            const self = this;
            const self2 = this;
            const typeError = new TypeError("Arguments to path.resolve must be strings");
            throw typeError;
          }
          if (flag2) {
            str = "/";
          }
          const parts = str3.split("/");
          if (parts.filter) {
            found = parts.filter((item) => item);
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
              let sum;
              let tmp11 = found[diff2];
              if ("." === tmp11) {
                let spliceResult = found.splice(diff2, 1);
                sum = num2;
              } else if (".." === tmp11) {
                let spliceResult1 = found.splice(diff2, 1);
                sum = num2 + 1;
              } else {
                sum = num2;
                if (sum) {
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
                let arr2 = found.unshift("..");
                tmp20 = diff3;
                diff3 = diff3 - 1;
              } while (tmp20);
            }
          }
          const tmp21 = str + found.join("/") || ".";
          return tmp21;
        };
        closure_0.normalize = (str) => {
          let found;
          let tmp15;
          const isAbsoluteResult = closure_0.isAbsolute(str);
          const tmp2 = closure_2(str, -1);
          const parts = str.split("/");
          if (parts.filter) {
            found = parts.filter((item) => item);
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
              let sum;
              let tmp6 = found[diff];
              if ("." === tmp6) {
                let spliceResult = found.splice(diff, 1);
                sum = num3;
              } else if (".." === tmp6) {
                let spliceResult1 = found.splice(diff, 1);
                sum = num3 + 1;
              } else {
                sum = num3;
                if (sum) {
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
                let arr2 = found.unshift("..");
                tmp15 = diff1;
                diff1 = diff1 - 1;
              } while (tmp15);
            }
          }
          str = found.join("/");
          const tmp16 = str || isAbsoluteResult;
          if (!tmp16) {
            str = ".";
          }
          let text = str;
          const tmp17 = str && "/" === tmp2;
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
        closure_0.join = function() {
          let found;
          const callResult = slice.call(arguments, 0);
          const normalize = closure_0.normalize;
          if (callResult.filter) {
            found = callResult.filter(function(item, index) {
              if (typeof item !== "string") {
                const _TypeError = TypeError;
                const self = this;
                const self2 = this;
                const typeError = new TypeError("Arguments to path.join must be strings");
                throw typeError;
              } else {
                return item;
              }
            });
          } else {
            items = [];
            let num = 0;
            found = items;
            if (0 < callResult.length) {
              while (typeof callResult[num] === "string") {
                if (tmp2) {
                  let arr = items.push(callResult[num]);
                }
                num = num + 1;
                found = items;
              }
              let _TypeError = TypeError;
              let self = this;
              let self2 = this;
              let typeError = new TypeError("Arguments to path.join must be strings");
              throw typeError;
            }
          }
          return normalize(found.join("/"));
        };
        closure_0.relative = (arg0, arg1) => {
          let items1;
          let length;
          const str = closure_0.resolve(arg0);
          const str2 = str.substr(1);
          const str3 = closure_0.resolve(arg1);
          const str4 = str3.substr(1);
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
          const parts1 = str4.split("/");
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
            items1 = [];
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
          let str;
          let str2;
          let tmp2;
          const match = re1.exec(arg0);
          const substr = match.slice(1);
          [tmp2, str] = substr;
          if (tmp2) {
            const substr1 = str && str.substr(0, str.length - 1);
            str2 = tmp2 + substr1;
          } else {
            str2 = ".";
          }
          return str2;
        };
        closure_0.basename = (arg0, arg1) => {
          const match = re1.exec(arg0);
          const str = match.slice(1)[2];
          let substr = str;
          const tmp = arg1 && str.substr(-1 * arg1.length) === arg1;
          if (tmp) {
            substr = str.substr(0, str.length - arg1.length);
          }
          return substr;
        };
        closure_0.extname = (arg0) => {
          const match = re1.exec(arg0);
          return match.slice(1)[3];
        };
        let closure_2 = "b" === "ab".substr(-1) ? ((str, arg1, arg2) => str.substr(arg1, arg2)) : ((str, arg1, arg2) => {
          let sum = arg1;
          if (arg1 < 0) {
            sum = str.length + arg1;
          }
          return str.substr(sum, arg2);
        });
      };
      let callResult = fn.call(arg1, fn(7));
    },
    (arg0, arg1, fn) => {
      let closure_0 = arg1;
      let closure_1 = fn;
      fn = (arg0, arg1) => {
        closure_0 = arg0;
        let closure_1 = arg1;
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
          let stylizeResult;
          closure_0 = customInspect;
          closure_1 = inspect;
          let closure_2 = arg2;
          if (customInspect.customInspect) {
            if (inspect) {
              if (typeof inspect.inspect === "function") {
                if (inspect.inspect !== closure_0.inspect) {
                  const inspectResult = inspect.inspect(arg2, customInspect);
                  let tmp35 = inspectResult;
                  if (typeof inspectResult !== "string") {
                    tmp35 = formatValue(customInspect, inspectResult, arg2);
                  }
                  return tmp35;
                }
              }
            }
          }
          if (undefined === inspect) {
            stylizeResult = customInspect.stylize("undefined", "undefined");
          } else if (typeof inspect === "string") {
            const _JSON = JSON;
            const str3 = JSON.stringify(inspect);
            const str5 = str3.replace(/^"|"$/g, "");
            const str7 = str5.replace(/'/g, "\\'");
            stylizeResult = customInspect.stylize(`'${str7.replace(/\\"/g, "\"")}'`, "string");
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
            let sum2;
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
              let tmp7 = "[object Error]" === toString.call(inspect);
              if (!tmp7) {
                const _Error = Error;
                tmp7 = inspect instanceof Error;
              }
              tmp6 = tmp7;
            }
            if (tmp6) {
              const _Error6 = Error;
              const toString15 = Error.prototype.toString;
              return "[" + toString15.call(inspect) + "]";
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
                let tmp8 = tmp5;
                if (typeof inspect === "object") {
                  tmp8 = null !== inspect;
                }
                if (tmp8) {
                  const _Object4 = Object;
                  const toString2 = Object.prototype.toString;
                  tmp8 = "[object RegExp]" === toString2.call(inspect);
                }
                if (tmp8) {
                  const _RegExp3 = RegExp;
                  const toString14 = RegExp.prototype.toString;
                  return customInspect.stylize(toString14.call(inspect), "regexp");
                } else {
                  let tmp9 = tmp5;
                  if (typeof inspect === "object") {
                    tmp9 = null !== inspect;
                  }
                  if (tmp9) {
                    const _Object5 = Object;
                    const toString3 = Object.prototype.toString;
                    tmp9 = "[object Date]" === toString3.call(inspect);
                  }
                  if (tmp9) {
                    const _Date2 = Date;
                    const toString13 = Date.prototype.toString;
                    return customInspect.stylize(toString13.call(inspect), "date");
                  } else {
                    let tmp10 = tmp5;
                    if (typeof inspect === "object") {
                      tmp10 = null !== inspect;
                    }
                    if (tmp10) {
                      const _Object6 = Object;
                      const toString4 = Object.prototype.toString;
                      let tmp11 = "[object Error]" === toString4.call(inspect);
                      if (!tmp11) {
                        const _Error2 = Error;
                        tmp11 = inspect instanceof Error;
                      }
                      tmp10 = tmp11;
                    }
                    if (tmp10) {
                      const _Error5 = Error;
                      const toString12 = Error.prototype.toString;
                      return "[" + toString12.call(inspect) + "]";
                    }
                  }
                }
              }
            }
            let flag = false;
            let c4 = false;
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
            let tmp13 = tmp5;
            if (typeof inspect === "object") {
              tmp13 = null !== inspect;
            }
            if (tmp13) {
              const _Object7 = Object;
              const toString5 = Object.prototype.toString;
              tmp13 = "[object RegExp]" === toString5.call(inspect);
            }
            if (tmp13) {
              const _RegExp = RegExp;
              const toString6 = RegExp.prototype.toString;
              str18 = ` ${toString6.call(inspect)}`;
            }
            let tmp14 = tmp5;
            if (typeof inspect === "object") {
              tmp14 = null !== inspect;
            }
            if (tmp14) {
              const _Object8 = Object;
              const toString7 = Object.prototype.toString;
              tmp14 = "[object Date]" === toString7.call(inspect);
            }
            if (tmp14) {
              const _Date = Date;
              str18 = ` ${toUTCString.call(inspect)}`;
            }
            let tmp15 = tmp5;
            if (typeof inspect === "object") {
              tmp15 = null !== inspect;
            }
            if (tmp15) {
              const _Object9 = Object;
              const toString8 = Object.prototype.toString;
              let tmp16 = "[object Error]" === toString8.call(inspect);
              if (!tmp16) {
                const _Error3 = Error;
                tmp16 = inspect instanceof Error;
              }
              tmp15 = tmp16;
            }
            if (tmp15) {
              const _Error4 = Error;
              const toString9 = Error.prototype.toString;
              const _HermesInternal2 = HermesInternal;
              str18 = " " + `[${toString9.call(inspect)}` + "]";
            }
            if (0 !== ownPropertyNames.length) {
              let text1;
              if (arg2 < 0) {
                let stylizeResult1;
                if (typeof inspect === "object") {
                  tmp5 = null !== inspect;
                }
                if (tmp5) {
                  const _Object11 = Object;
                  const toString10 = Object.prototype.toString;
                  tmp5 = "[object RegExp]" === toString10.call(inspect);
                }
                const stylize = customInspect.stylize;
                if (tmp5) {
                  const _RegExp2 = RegExp;
                  const toString11 = RegExp.prototype.toString;
                  stylizeResult1 = stylize(toString11.call(inspect), "regexp");
                } else {
                  stylizeResult1 = stylize("[Object]", "special");
                }
                text1 = stylizeResult1;
              } else {
                let mapped;
                const seen = customInspect.seen;
                const arr = seen.push(inspect);
                if (flag) {
                  let num4;
                  closure_0 = customInspect;
                  closure_1 = inspect;
                  closure_2 = arg2;
                  const items1 = [];
                  const length = inspect.length;
                  for (let num4 = 0; num4 < length; num4 = num4 + 1) {
                    let _String = String;
                    let _Object10 = Object;
                    hasOwnProperty = Object.prototype.hasOwnProperty;
                    let push = items1.push;
                    if (hasOwnProperty.call(inspect, String(num4))) {
                      let _String2 = String;
                      let flag3 = true;
                      let arr2 = push(formatProperty(customInspect, inspect, arg2, obj, String(num4), true));
                    } else {
                      let arr5 = push(str17);
                    }
                  }
                  const item1 = ownPropertyNames.forEach((item) => {
                    if (!item.match(/^\d+$/)) {
                      items1.push(formatProperty(closure_0, closure_1, closure_2, obj, item, true));
                    }
                  });
                  mapped = items1;
                } else {
                  mapped = ownPropertyNames.map((item) => formatProperty(customInspect, inspect, closure_2, obj, item, c4));
                }
                const seen1 = customInspect.seen;
                seen1.pop();
                if (mapped.reduce((acc, arr) => {
                  arr.indexOf("\n") >= 0;
                  return acc + arr.replace(/\u001b\[\d\d?m/g, "").length + 1;
                }, 0) > 60) {
                  const first = items[0];
                  if (str17 !== str18) {
                    str17 = `${str18}
           `;
                  }
                  const sum = first + str17;
                  text1 = `${tmp32} ${arr4.join(",\n  ")} ${arr3[1]}`;
                } else {
                  const sum1 = items[0] + str18;
                  text1 = `${tmp29} ${arr4.join(", ")} ${arr3[1]}`;
                }
              }
              sum2 = text1;
            } else {
              sum2 = items[0] + str18 + items[1];
            }
            return sum2;
          }
        }
        function formatProperty(stylize, arg1, arg2, arg3, str, arg5) {
          let stylizeResult1;
          let iter = Object.getOwnPropertyDescriptor(arg1, str);
          if (!iter) {
            iter = { value: arg1[str] };
            obj = { value: arg1[str] };
          }
          if (iter.get) {
            let stylizeResult;
            stylize = stylize.stylize;
            if (iter.set) {
              stylizeResult = stylize("[Getter/Setter]", "special");
            } else {
              stylizeResult = stylize("[Getter]", "special");
            }
            stylizeResult1 = stylizeResult;
          } else if (iter.set) {
            stylizeResult1 = stylize.stylize("[Setter]", "special");
          }
          hasOwnProperty = Object.prototype.hasOwnProperty;
          let text;
          if (!hasOwnProperty.call(arg3, str)) {
            text = `${"[" + str}]`;
          }
          if (!stylizeResult1) {
            let stylizeResult2;
            const seen = stylize.seen;
            if (seen.indexOf(iter.value) < 0) {
              let arr2;
              if (null === arg2) {
                arr2 = formatValue(stylize, iter.value, null);
              } else {
                arr2 = formatValue(stylize, iter.value, arg2 - 1);
              }
              let tmp10 = arr2;
              if (arr2.indexOf("\n") > -1) {
                let substr;
                const parts = arr2.split("\n");
                if (arg5) {
                  const mapped = map((arg0) => "  " + arg0);
                  const str12 = mapped.join("\n");
                  substr = str12.substr(2);
                } else {
                  const mapped1 = map((arg0) => "   " + arg0);
                  substr = `
          ${obj2.join("\n")}`;
                }
                tmp10 = substr;
              }
              stylizeResult2 = tmp10;
            } else {
              stylizeResult2 = stylize.stylize("[Circular]", "special");
            }
            stylizeResult1 = stylizeResult2;
          }
          if (undefined === text) {
            if (arg5) {
              if (str.match(/^\d+$/)) {
                return stylizeResult1;
              }
            }
            const _JSON = JSON;
            const str13 = JSON.stringify("" + str);
            if (str13.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
              text = stylize.stylize(str13.substr(1, str13.length - 2), "name");
            } else {
              const str15 = str13.replace(/'/g, "\\'");
              const str17 = str15.replace(/\\"/g, "\"");
              text = stylize.stylize(str17.replace(/(^"|"$)/g, "'"), "string");
            }
          }
          return text + ": " + stylizeResult1;
        }
        const re2 = /%[sdj%]/g;
        closure_0.format = function(str) {
          let length;
          let sum1;
          if (typeof str === "string") {
            closure_0 = 1;
            closure_1 = arguments;
            const tmp8 = arguments;
            const length2 = arguments.length;
            let _String = String;
            const str2 = String(str);
            let replaced = str2.replace(re2, (arg0) => {
              if ("%%" === arg0) {
                return "%";
              } else if (closure_0 >= length2) {
                return arg0;
              } else if ("%s" === arg0) {
                const _String = String;
                closure_0 = tmp12 + 1;
                return String(closure_1[+closure_0]);
              } else if ("%d" === arg0) {
                const _Number = Number;
                closure_0 = tmp8 + 1;
                return Number(closure_1[+closure_0]);
              } else if ("%j" === arg0) {
                try {
                  const _JSON = JSON;
                  closure_0 = tmp4 + 1;
                  return JSON.stringify(closure_1[+closure_0]);
                } catch (err) {
                  return "[Circular]";
                }
              } else {
                return arg0;
              }
            });
            const tmp12 = closure_0;
            let tmp13 = arguments[closure_0];
            let tmp16 = replaced;
            if (closure_0 < length2) {
              while (true) {
                if (null !== tmp13) {
                  let text;
                  let tmp19 = typeof tmp13 === "object";
                  if (typeof tmp13 === "object") {
                    tmp19 = null !== tmp13;
                  }
                  if (tmp19) {
                    text = `${tmp11} ${inspect(tmp13)}`;
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
                let tmp4 = closure_0;
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
              const deprecateResult = closure_0.deprecate(closure_0, throwDeprecation);
              return deprecateResult(...arguments);
            };
          } else {
            let tmp = throwDeprecation;
            if (true === throwDeprecation.noDeprecation) {
              return arg0;
            } else {
              let c2 = false;
              return function deprecated() {
                const tmp = c2;
                if (!tmp) {
                  if (throwDeprecation.throwDeprecation) {
                    const _Error = Error;
                    const self = this;
                    const self2 = this;
                    const error = new Error(throwDeprecation);
                    throw error;
                  } else {
                    const _console = console;
                    if (tmp2.traceDeprecation) {
                      _console.trace(throwDeprecation);
                    } else {
                      _console.error(throwDeprecation);
                    }
                    c2 = true;
                  }
                }
                return closure_0(...arguments);
              };
            }
          }
        };
        let closure_4 = {};
        closure_0.debuglog = function(str) {
          let formatted = str;
          if (undefined === closure_3) {
            closure_3 = closure_1.env.NODE_DEBUG || "";
          }
          formatted = str.toUpperCase();
          if (!closure_4[formatted]) {
            const _RegExp = RegExp;
            const self = this;
            const self2 = this;
            const regExp = new RegExp("\\b" + formatted + "\\b", "i");
            if (regExp.test(closure_3)) {
              const pid = closure_1.pid;
              closure_4[formatted] = function() {
                format = format.format;
                const applyResult = format(...arguments);
                console.error("%s %d: %s", formatted, pid, applyResult);
              };
            } else {
              closure_4[formatted] = () => {

              };
            }
          }
          return closure_4[formatted];
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
          if (tmp) {
            const _Object = Object;
            tmp = "[object RegExp]" === toString.call(obj);
          }
          return tmp;
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
          if (tmp) {
            const _Object = Object;
            tmp = "[object Date]" === toString.call(obj);
          }
          return tmp;
        };
        closure_0.isError = function isError(obj) {
          let tmp = typeof obj === "object";
          if (typeof obj === "object") {
            tmp = null !== obj;
          }
          if (tmp) {
            const _Object = Object;
            let tmp3 = "[object Error]" === toString.call(obj);
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
          return null === flag || typeof flag === "boolean" || typeof flag === "number" || typeof flag === "string" || typeof flag === "symbol" || undefined === flag;
        };
        closure_0.isBuffer = closure_1(11);
        let closure_10 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        closure_0.log = function() {
          let text;
          let text1;
          let text2;
          const _console = console;
          const date = new Date();
          const str = date.getHours();
          if (str < 10) {
            text = `0${str.toString(10)}`;
          } else {
            text = str.toString(10);
          }
          items = [text, , ];
          const str3 = date.getMinutes();
          if (str3 < 10) {
            text1 = `0${str3.toString(10)}`;
          } else {
            text1 = str3.toString(10);
          }
          items[1] = text1;
          const str5 = date.getSeconds();
          if (str5 < 10) {
            text2 = `0${str5.toString(10)}`;
          } else {
            text2 = str5.toString(10);
          }
          items[2] = text2;
          const joined = items.join(":");
          const items1 = [date.getDate(), closure_10[date.getMonth(date)], joined];
          const format = closure_0.format;
          const joined1 = items1.join(" ");
          log("%s - %s", joined1, format(...arguments));
        };
        closure_0.inherits = closure_1(12);
        closure_0._extend = (arg0, obj) => {
          let tmp6;
          const tmp = obj;
          if (tmp) {
            let tmp2 = typeof obj === "object";
            if (typeof obj === "object") {
              tmp2 = null !== obj;
            }
            if (tmp2) {
              const _Object = Object;
              const keys = Object.keys(obj);
              let diff = tmp4 - 1;
              if (+keys.length) {
                do {
                  arg0[keys[diff]] = obj[keys[diff]];
                  tmp6 = +diff;
                  diff = tmp6 - 1;
                } while (tmp6);
              }
              return arg0;
            }
          }
          return arg0;
        };
      };
      fn.call(arg1, globalThis, fn(7));
    },
    (arg0, arg1) => {
      arg0.exports = function isBuffer(copy) {
        return copy && typeof copy === "object" && typeof copy.copy === "function" && typeof copy.fill === "function" && typeof copy.readUInt8 === "function";
      };
    },
    (arg0, arg1) => {
      if (typeof Object.create === "function") {
        arg0.exports = function inherits(value, super_) {
          value.super_ = super_;
          obj = { constructor: { value, enumerable: false, writable: true, configurable: true } };
          value.prototype = Object.create(super_.prototype, obj);
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
      let closure_0 = arg1;
      fn = (arg0) => {
        let obj2;
        closure_0 = arg0;
        obj = {
          escapeJavaScriptChar: function(arg0) {
            if (arg0 >= 256) {
              return "\\u" + obj.padLeft("" + arg0, 4);
            } else {
              const _String = String;
              const self = this;
              const self2 = this;
              const str2 = new closure_0(String.fromCharCode(arg0), "ascii");
              return "\\x" + obj.padLeft(str2.toString("hex"), 2);
            }
          },
          escapeHtmlChar: function(arg0) {
            if (undefined !== obj.namedHtml[arg0]) {
              return obj.namedHtml[arg0];
            } else if (arg0 >= 256) {
              return "&#" + arg0 + ";";
            } else {
              const _String = String;
              const self = this;
              const self2 = this;
              const str2 = new closure_0(String.fromCharCode(arg0), "ascii");
              return "&#x" + obj.padLeft(str2.toString("hex"), 2) + ";";
            }
          },
          padLeft: (arg0, arg1) => {
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
          },
          isSafe: (arg0) => undefined !== obj.safeCharCodes[arg0],
          namedHtml: { 38: "&amp;", 60: "&lt;", 62: "&gt;", 34: "&quot;", 160: "&nbsp;", 162: "&cent;", 163: "&pound;", 164: "&curren;", 169: "&copy;", 174: "&reg;" },
          safeCharCodes: obj2
        };
        closure_0.escapeJavaScript = (str) => {
          if (str) {
            let num = 0;
            str = "";
            let str2 = "";
            if (0 < str.length) {
              do {
                let text;
                let charCodeAtResult = str.charCodeAt(num);
                if (obj.isSafe(charCodeAtResult)) {
                  text = `${str[num]}`;
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
                let text;
                let charCodeAtResult = str.charCodeAt(num);
                if (obj.isSafe(charCodeAtResult)) {
                  text = `${str[num]}`;
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
        obj2 = {};
        let num = 32;
        do {
          let tmp = num >= 97;
          let tmp2 = num;
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
            obj2[num] = null;
          }
          num = num + 1;
        } while (num < 123);
      };
      fn.call(arg1, fn(3).Buffer);
    },
    (arg0, arg1, fn) => {
      let obj2;
      items = fn;
      fn = Object.assign || (function(arg0) {
        let num;
        for (let num = 1; num < arguments.length; num = num + 1) {
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
      if (typeof Symbol === "function") {
        let _Symbol = Symbol;
        if (typeof Symbol.iterator === "symbol") {
          let fn2 = (arg0) => typeof arg0;
        }
        let num = 2;
        let closure_3 = fn(2);
        let closure_4 = fn(15);
        const num3 = 16;
        let closure_5 = fn(16);
        let tmp2 = null;
        let closure_7 = null;
        obj = {
          Set: fn(18),
          defaults: obj2,
          Any: _class,
          _try: (apply, arg1) => {
              let value;
              try {
                value = apply.apply(null, arg1);
              } catch (error) {
              }
              return { value, error };
            },
          concatSettings: (arg0, arg1) => {
              if (!arg0) {
                if (!arg1) {
                  return null;
                }
              }
              obj = {};
              if (arg0) {
                fn(obj, arg0);
              }
              if (arg1) {
                const _Object = Object;
                const keys = Object.keys(arg1);
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
            }
        };
        let num4 = 18;
        obj2 = { abortEarly: true, convert: true, allowUnknown: false, skipFunctions: false, stripUnknown: false, language: {}, presence: "optional", strip: false, noDefaults: false };
        class _class {
          constructor() {
            const self = this;
            if (this instanceof _class) {
              const tmp4 = closure_7 || _class(19);
              closure_7 = tmp4;
              self.isJoi = true;
              self._type = "any";
              self._settings = null;
              const self4 = this;
              const self5 = this;
              self._valids = new obj.Set();
              const self6 = this;
              const self7 = this;
              set = new obj.Set();
              self._invalids = new obj.Set();
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
              const set1 = new obj.Set();
            } else {
              const _TypeError = TypeError;
              const self2 = this;
              const self3 = this;
              const typeError = new TypeError("Cannot call a class as a function");
              throw typeError;
            }
          }
          createError(arg0, error, mergeResult, concatSettingsResult) {
            return closure_5.create(arg0, error, mergeResult, concatSettingsResult, this._flags);
          }
          checkOptions(context) {
            const options = fn(31).options;
            const validateResult = options.validate(context);
            if (validateResult.error) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error(validateResult.error.details[0].message);
              throw error;
            }
          }
          clone() {
            let _notes;
            let num;
            const self = this;
            obj = Object.create(Object.getPrototypeOf(this));
            obj.isJoi = true;
            obj._type = this._type;
            obj._settings = obj.concatSettings(this._settings);
            obj._valids = closure_3.clone(this._valids);
            obj._invalids = closure_3.clone(this._invalids);
            const _tests = this._tests;
            obj._tests = _tests.slice();
            const _refs = this._refs;
            obj._refs = _refs.slice();
            obj._flags = closure_3.clone(this._flags);
            ({ _description: tmp._description, _unit: tmp._unit, _notes } = this);
            obj._notes = _notes.slice();
            const _tags = this._tags;
            obj._tags = _tags.slice();
            const _examples = this._examples;
            obj._examples = _examples.slice();
            const _meta = this._meta;
            obj._meta = _meta.slice();
            obj._inner = {};
            const keys = Object.keys(this._inner);
            for (let num = 0; num < keys.length; num = num + 1) {
              let tmp2 = keys[num];
              let substr = null;
              let _inner = obj._inner;
              if (self._inner[tmp2]) {
                let arr7 = self._inner[tmp2];
                substr = arr7.slice();
              }
              _inner[tmp2] = substr;
            }
            return obj;
          }
          concat(_type) {
            let _settings;
            let length;
            let length2;
            let num3;
            let schema;
            const self = this;
            closure_3.assert(_type instanceof obj.Any, "Invalid schema object");
            let tmp3 = "any" === this._type;
            const assert = closure_3.assert;
            if (!tmp3) {
              tmp3 = "any" === _type._type;
            }
            if (!tmp3) {
              tmp3 = _type._type === self._type;
            }
            assert(tmp3, "Cannot merge type", self._type, "with another type:", _type._type);
            const cloneResult = self.clone();
            let tmp6 = cloneResult;
            if ("any" === self._type) {
              tmp6 = cloneResult;
              if ("any" !== _type._type) {
                const cloneResult1 = _type.clone();
                items = ["_settings", "_valids", "_invalids", "_tests", "_refs", "_flags", "_description", "_unit", "_notes", "_tags", "_examples", "_meta", "_inner"];
                let num = 0;
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
              _settings = obj.concatSettings(tmp6._settings, _type._settings);
            } else {
              _settings = _type._settings;
            }
            tmp6._settings = _settings;
            const _valids = tmp6._valids;
            _valids.merge(_type._valids, _type._invalids);
            const _invalids = tmp6._invalids;
            _invalids.merge(_type._invalids, _type._valids);
            const _tests = tmp6._tests;
            tmp6._tests = _tests.concat(_type._tests);
            const _refs = tmp6._refs;
            tmp6._refs = _refs.concat(_type._refs);
            closure_3.merge(tmp6._flags, _type._flags);
            tmp6._description = _type._description || tmp6._description;
            tmp6._unit = _type._unit || tmp6._unit;
            const _notes = tmp6._notes;
            tmp6._notes = _notes.concat(_type._notes);
            const _tags = tmp6._tags;
            tmp6._tags = _tags.concat(_type._tags);
            const _examples = tmp6._examples;
            tmp6._examples = _examples.concat(_type._examples);
            const _meta = tmp6._meta;
            tmp6._meta = _meta.concat(_type._meta);
            const keys = Object.keys(_type._inner);
            for (let num3 = 0; num3 < keys.length; num3 = num3 + 1) {
              let tmp13 = keys[num3];
              let arr3 = _type._inner[tmp13];
              if (arr3) {
                let arr4 = tmp6._inner[tmp13];
                if (arr4) {
                  if ("object" === tmp12) {
                    if ("children" === tmp13) {
                      let num5;
                      let obj2 = {};
                      let num4 = 0;
                      if (0 < arr4.length) {
                        do {
                          obj2[arr4[num4].key] = num4;
                          num4 = num4 + 1;
                          length2 = arr4.length;
                        } while (num4 < length2);
                      }
                      for (let num5 = 0; num5 < arr3.length; num5 = num5 + 1) {
                        let key = arr3[num5].key;
                        if (obj2[key] >= 0) {
                          let obj3 = { key, schema: schema.concat(arr3[num5].schema) };
                          schema = arr4[obj2[key]].schema;
                          let tmp17 = obj2[key];
                          arr4[tmp17] = obj3;
                        } else {
                          let arr = arr4.push(arr3[num5]);
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
          _test(length, toDateResult, func, options) {
            const cloneResult = this.clone();
            const _tests = cloneResult._tests;
            obj = { func, name: length, arg: toDateResult, options };
            _tests.push(obj);
            return cloneResult;
          }
          options(context) {
            closure_3.assert(!context.context, "Cannot override context");
            this.checkOptions(context);
            const cloneResult = this.clone();
            cloneResult._settings = obj.concatSettings(cloneResult._settings, context);
            return cloneResult;
          }
          strict(arg0) {
            const cloneResult = this.clone();
            const tmp2 = cloneResult._settings || {};
            cloneResult._settings = tmp2;
            let tmp3 = undefined !== arg0;
            const _settings = cloneResult._settings;
            if (tmp3) {
              tmp3 = !arg0;
            }
            _settings.convert = tmp3;
            return cloneResult;
          }
          raw(arg0) {
            const cloneResult = this.clone();
            let tmp2 = undefined === arg0;
            const _flags = cloneResult._flags;
            if (!tmp2) {
              tmp2 = arg0;
            }
            _flags.raw = tmp2;
            return cloneResult;
          }
          error(error) {
            let tmp2 = error;
            const assert = closure_3.assert;
            if (error) {
              const _Error = Error;
              tmp2 = error instanceof Error;
            }
            assert(tmp2, "Must provide a valid Error object");
            const cloneResult = this.clone();
            cloneResult._flags.error = error;
            return cloneResult;
          }
          allow() {
            let length;
            const cloneResult = this.clone();
            const flattenResult = closure_3.flatten(slice.call(arguments));
            let num = 0;
            if (0 < flattenResult.length) {
              do {
                let tmp3 = flattenResult[num];
                let assertResult = closure_3.assert(undefined !== tmp3, "Cannot call allow/valid/invalid with undefined");
                let _invalids = cloneResult._invalids;
                let removeResult = _invalids.remove(tmp3);
                let _valids = cloneResult._valids;
                let addResult = _valids.add(tmp3, cloneResult._refs);
                num = num + 1;
                length = flattenResult.length;
              } while (num < length);
            }
            return cloneResult;
          }
          valid() {
            const allow = this.allow;
            const applyResult = allow(...arguments);
            applyResult._flags.allowOnly = true;
            return applyResult;
          }
          invalid(arg0) {
            let length;
            const cloneResult = this.clone();
            const flattenResult = closure_3.flatten(slice.call(arguments));
            let num = 0;
            if (0 < flattenResult.length) {
              do {
                let tmp3 = flattenResult[num];
                let assertResult = closure_3.assert(undefined !== tmp3, "Cannot call allow/valid/invalid with undefined");
                let _valids = cloneResult._valids;
                let removeResult = _valids.remove(tmp3);
                let _invalids = cloneResult._invalids;
                let addResult = _invalids.add(tmp3, this._refs);
                num = num + 1;
                length = flattenResult.length;
              } while (num < length);
            }
            return cloneResult;
          }
          required() {
            const cloneResult = this.clone();
            cloneResult._flags.presence = "required";
            return cloneResult;
          }
          optional() {
            const cloneResult = this.clone();
            cloneResult._flags.presence = "optional";
            return cloneResult;
          }
          forbidden() {
            const cloneResult = this.clone();
            cloneResult._flags.presence = "forbidden";
            return cloneResult;
          }
          strip() {
            const cloneResult = this.clone();
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
          default(description, description2) {
            const self = this;
            const isRefResult = typeof description !== "function" || closure_4.isRef(description);
            if (!isRefResult) {
              const tmp3 = !description.description && description2;
              if (tmp3) {
                description.description = description2;
              }
              if (!self._flags.func) {
                description = description.description;
                let tmp5 = typeof description === "string";
                const assert = closure_3.assert;
                if (typeof description === "string") {
                  tmp5 = description.description.length > 0;
                }
                assert(tmp5, "description must be provided when default value is a function");
              }
            }
            const cloneResult = self.clone();
            cloneResult._flags.default = description;
            closure_4.push(cloneResult._refs, description);
            return cloneResult;
          }
          empty(otherwise) {
            const cloneResult = this.clone();
            let schemaResult;
            const _flags = cloneResult._flags;
            if (undefined !== otherwise) {
              schemaResult = closure_7.schema(otherwise);
            }
            _flags.empty = schemaResult;
            return cloneResult;
          }
          when(arg0, is) {
            let tmp2 = is;
            const assert = closure_3.assert;
            if (is) {
              let str = "undefined";
              if (undefined !== is) {
                str = fn2(is);
              }
              tmp2 = "object" === str;
            }
            assert(tmp2, "Invalid options");
            let tmp5 = undefined !== is.then;
            const assert2 = closure_3.assert;
            if (!tmp5) {
              tmp5 = undefined !== is.otherwise;
            }
            const self = this;
            assert2(tmp5, "options must have at least one of \"then\" or \"otherwise\"");
            let combined;
            if (is.hasOwnProperty("then")) {
              combined = self.concat(closure_7.schema(is.then));
            }
            let combined1;
            if (is.hasOwnProperty("otherwise")) {
              combined1 = self.concat(closure_7.schema(is.otherwise));
            }
            if (!obj) {
              obj = fn(28);
            }
            const obj2 = { is: is.is, then: combined, otherwise: combined1 };
            const whenResult = obj.when(arg0, obj2);
            whenResult._flags.presence = "ignore";
            whenResult._settings = obj.concatSettings(whenResult._settings, { baseType: self });
            return whenResult;
          }
          description(_description) {
            let tmp2 = _description;
            const assert = closure_3.assert;
            if (_description) {
              tmp2 = typeof _description === "string";
            }
            assert(tmp2, "Description must be a non-empty string");
            const cloneResult = this.clone();
            cloneResult._description = _description;
            return cloneResult;
          }
          notes(str) {
            let tmp2 = str;
            const assert = closure_3.assert;
            if (str) {
              let isArray = typeof str === "string";
              if (!isArray) {
                const _Array = Array;
                isArray = Array.isArray(str);
              }
              tmp2 = isArray;
            }
            assert(tmp2, "Notes must be a non-empty string or array");
            const cloneResult = this.clone();
            const _notes = cloneResult._notes;
            cloneResult._notes = _notes.concat(str);
            return cloneResult;
          }
          tags(str) {
            let tmp2 = str;
            const assert = closure_3.assert;
            if (str) {
              let isArray = typeof str === "string";
              if (!isArray) {
                const _Array = Array;
                isArray = Array.isArray(str);
              }
              tmp2 = isArray;
            }
            assert(tmp2, "Tags must be a non-empty string or array");
            const cloneResult = this.clone();
            const _tags = cloneResult._tags;
            cloneResult._tags = _tags.concat(str);
            return cloneResult;
          }
          meta(arg0) {
            closure_3.assert(undefined !== arg0, "Meta cannot be undefined");
            const cloneResult = this.clone();
            const _meta = cloneResult._meta;
            cloneResult._meta = _meta.concat(arg0);
            return cloneResult;
          }
          example(arg0) {
            const self = this;
            closure_3.assert(arguments.length, "Missing example");
            const _validateResult = this._validate(arg0, null, obj.defaults);
            let errors = _validateResult.errors;
            const assert = closure_3.assert;
            const tmp4 = !_validateResult.errors;
            if (errors) {
              errors = closure_5.process(_validateResult.errors, arg0);
            }
            assert(tmp4, "Bad example:", errors);
            const cloneResult = self.clone();
            const _examples = cloneResult._examples;
            _examples.push(arg0);
            return cloneResult;
          }
          unit(_unit) {
            let tmp2 = _unit;
            const assert = closure_3.assert;
            if (_unit) {
              tmp2 = typeof _unit === "string";
            }
            assert(tmp2, "Unit name must be a non-empty string");
            const cloneResult = this.clone();
            cloneResult._unit = _unit;
            return cloneResult;
          }
          _prepareEmptyValue(value) {
            let trimmed = value;
            if (typeof value === "string") {
              const self = this;
              trimmed = value;
              if (this._flags.trim) {
                trimmed = value.trim();
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
              let tmp17;
              let _defaultResult;
              if (!self._flags.strip) {
                let tmp2 = value3;
                if (undefined !== value3) {
                  if (self._flags.raw) {
                    tmp2 = value;
                  }
                  _defaultResult = tmp2;
                } else if (concatSettingsResult.noDefaults) {
                  _defaultResult = value;
                } else {
                  const _flags = self._flags;
                  if (value.isRef(self._flags.default)) {
                    _defaultResult = _default(self.parent, concatSettingsResult);
                  } else {
                    if (typeof _flags.default === "function") {
                      let tmp7;
                      const tmp6 = null !== self.parent && self._flags.default.length > 0;
                      if (tmp6) {
                        items = [_self.clone(self.parent), concatSettingsResult];
                        tmp7 = items;
                      }
                      const iter = self._try(self._flags.default, tmp7);
                      value = iter.value;
                      _defaultResult = value;
                      if (iter.error) {
                        closure_5.push(self.createError("any.default", iter.error, self, concatSettingsResult));
                        _defaultResult = value;
                      }
                    }
                    _defaultResult = _self.clone(self._flags.default);
                  }
                }
              }
              const obj2 = { value: _defaultResult, errors: tmp17 };
              tmp17 = null;
              if (closure_5.length) {
                tmp17 = closure_5;
              }
              return obj2;
            };
            tmp6 = module;
            if (self._coerce) {
              _coerce = self._coerce;
              tmp53 = _coerce;
              tmp54 = self;
              tmp55 = module;
              tmp56 = tmp;
              tmp57 = tmp3;
              iter = _coerce.call(self, module, tmp, tmp3);
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
                      obj1 = {};
                      closure_0 = obj1;
                      tmp10 = obj1;
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
                  arr1 = items.push(self.createError("any.required", null, tmp, tmp3));
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
                  arr2 = items.push(self.createError("any.unknown", null, tmp, tmp3));
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
                push = items.push;
                createError = self.createError;
                if ("" === tmp10) {
                  str5 = "any.empty";
                }
                tmp26 = null;
                tmp27 = self;
                tmp28 = str5;
                tmp29 = tmp;
                tmp30 = tmp3;
                arr3 = push(createError(str5, null, tmp, tmp3));
                if (!tmp3.abortEarly) {
                }
                num10 = 0;
                return finish();
              }
              tmp32 = tmp10;
              if (self._base) {
                _base = self._base;
                tmp58 = _base;
                tmp59 = self;
                tmp60 = tmp10;
                tmp61 = tmp;
                tmp62 = tmp3;
                iter2 = _base.call(self, tmp21, tmp, tmp3);
                value1 = iter2.value;
                if (iter2.errors) {
                  closure_0 = value1;
                  closure_5 = items.concat(iter2.errors);
                  num9 = 0;
                  return finish();
                } else {
                  tmp32 = tmp10;
                  if (value1 !== tmp10) {
                    value4 = iter2.value;
                    closure_0 = value4;
                    _valids3 = self._valids;
                    tmp63 = _valids3;
                    tmp64 = value4;
                    tmp65 = tmp;
                    tmp66 = tmp3;
                    if (_valids3.has(value4, tmp, tmp3, self._flags.insensitive)) {
                      num8 = 0;
                      return finish();
                    } else {
                      _invalids2 = self._invalids;
                      tmp33 = _invalids2;
                      tmp34 = value4;
                      tmp35 = tmp;
                      tmp36 = tmp3;
                      tmp32 = value4;
                      if (_invalids2.has(value4, tmp, tmp3, self._flags.insensitive)) {
                        str7 = "any.invalid";
                        str8 = "";
                        push2 = items.push;
                        createError2 = self.createError;
                        if ("" === value4) {
                          str7 = "any.empty";
                        }
                        tmp37 = null;
                        tmp38 = self;
                        tmp39 = str7;
                        tmp40 = tmp;
                        tmp41 = tmp3;
                        push2Result = push2(createError2(str7, null, tmp, tmp3));
                        tmp32 = value4;
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
                obj4 = { valids: null };
                _valids2 = self._valids;
                push3 = items.push;
                createError3 = self.createError;
                obj4.valids = _valids2.values({ stripUndefined: true });
                str9 = "any.allowOnly";
                tmp43 = self;
                tmp44 = obj4;
                tmp45 = tmp;
                tmp46 = tmp3;
                push3Result = push3(createError3("any.allowOnly", obj4, tmp, tmp3));
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
                  tmp48 = num5;
                  tmp67 = func;
                  tmp68 = self;
                  tmp69 = tmp32;
                  tmp70 = tmp;
                  tmp71 = tmp3;
                  callResult = func.call(self, tmp32, tmp, tmp3);
                  tmp50 = closure_5;
                  if (callResult instanceof closure_5.Err) {
                    arr4 = items.push(callResult);
                    tmp51 = tmp32;
                    if (tmp3.abortEarly) {
                      break;
                    }
                  } else {
                    closure_0 = callResult;
                    tmp51 = callResult;
                  }
                  num5 = num5 + 1;
                  tmp32 = tmp51;
                }
                return finish();
              }
              return finish();
            }
          }
          _validateWithOptions(arg0, fn, fn2) {
            const self = this;
            const tmp = fn;
            if (tmp) {
              self.checkOptions(fn);
            }
            const iter = self._validate(arg0, null, obj.concatSettings(obj.defaults, fn));
            const processResult = closure_5.process(iter.errors, arg0);
            if (fn) {
              obj = fn(processResult, iter.value);
            } else {
              obj = { error: processResult, value: iter.value };
            }
            return obj;
          }
          validate(arg0, fn, fn2) {
            let _validateWithOptionsResult;
            const self = this;
            if (typeof fn === "function") {
              _validateWithOptionsResult = self._validateWithOptions(arg0, null, fn);
            } else {
              _validateWithOptionsResult = self._validateWithOptions(arg0, fn, fn);
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
                    tmp = keys[num];
                    tmp2 = num;
                    if ("empty" === tmp) {
                      obj2 = self._flags[tmp];
                      obj.flags[tmp] = obj2.describe();
                    } else if ("default" === tmp) {
                      tmp4 = closure_4;
                      if (closure_4.isRef(self._flags[tmp])) {
                        str5 = self._flags[tmp];
                        obj.flags[tmp] = str5.toString();
                      } else if (typeof self._flags[tmp] === "function") {
                        obj.flags[tmp] = self._flags[tmp].description;
                      } else {
                        obj.flags[tmp] = self._flags[tmp];
                      }
                    } else {
                      tmp3 = "lazy" === tmp || "label" === tmp;
                      if (!tmp3) {
                        obj.flags[tmp] = self._flags[tmp];
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
            for (let num3 = 0; num3 < self._tests.length; num3 = num3 + 1) {
              tmp5 = self._tests[num3];
              obj1 = { name: null };
              obj1.name = tmp5.name;
              tmp6 = num3;
              if (undefined !== tmp5.arg) {
                tmp7 = closure_4;
                str6 = tmp5.arg;
                if (closure_4.isRef(tmp5.arg)) {
                  str1 = str6.toString();
                } else {
                  str1 = str6;
                }
                obj1.arg = str1;
              }
              options = tmp5.options;
              if (options) {
                if (options.hasRef) {
                  obj1.arg = {};
                  _Object = Object;
                  keys1 = Object.keys(tmp5.arg);
                  for (let num4 = 0; num4 < keys1.length; num4 = num4 + 1) {
                    tmp9 = keys1[num4];
                    str7 = tmp5.arg[tmp9];
                    tmp10 = closure_4;
                    arg = obj1.arg;
                    tmp11 = num4;
                    str8 = str7;
                    if (closure_4.isRef(str7)) {
                      str8 = str7.toString();
                    }
                    arg[tmp9] = str8;
                  }
                }
                if (typeof options.description === "string") {
                  obj1.description = options.description;
                } else if (typeof options.description === "function") {
                  obj1.description = options.description(obj1.arg);
                }
              }
              rules = obj.rules;
              arr1 = rules.push(obj1);
            }
            if (!obj.rules.length) {
              delete obj["rules"];
            }
            _getLabelResult = self._getLabel();
            if (_getLabelResult) {
              obj.label = _getLabelResult;
            }
            return obj;
          }
          label(label) {
            let tmp2 = label;
            const assert = closure_3.assert;
            if (label) {
              tmp2 = typeof label === "string";
            }
            assert(tmp2, "Label name must be a non-empty string");
            const cloneResult = this.clone();
            cloneResult._flags.label = label;
            return cloneResult;
          }
          _getLabel(key) {
            return this._flags.label || key;
          }
        }
        module.exports = _class;
        obj.Any.prototype.isImmutable = true;
        const valid = obj.Any.prototype.valid;
        obj.Any.prototype.equal = valid;
        obj.Any.prototype.only = valid;
        const invalid = obj.Any.prototype.invalid;
        obj.Any.prototype.not = invalid;
        obj.Any.prototype.disallow = invalid;
        obj.Any.prototype.exist = obj.Any.prototype.required;
      }
      fn2 = (arg0) => {
        const tmp = arg0;
        if (tmp) {
          const _Symbol = Symbol;
          if (typeof Symbol === "function") {
            let str;
            const _Symbol3 = Symbol;
            if (arg0.constructor === Symbol) {
              const _Symbol2 = Symbol;
              str = "symbol";
            }
            return str;
          }
        }
        str = typeof arg0;
      };
    },
    (arg0, arg1, fn) => {
      let ref = arg1;
      let closure_1 = fn(2);
      arg1.create = (str, arg1) => {
        ref.assert(typeof str === "string", "Invalid reference key:", str);
        const cloneResult = ref.clone(arg1);
        let closure_0 = cloneResult;
        ref = function ref(arg0, context) {
          context = arg0;
          const reach = ref.reach;
          if (ref.isContext) {
            context = context.context;
          }
          return reach(context, ref.key, closure_0);
        };
        str = cloneResult;
        const first = str[0];
        if (cloneResult) {
          str = cloneResult.contextPrefix;
        }
        if (!str) {
          str = "$";
        }
        ref.isContext = first === str;
        let substr = str;
        if (ref.isContext) {
          substr = str.slice(1);
        }
        ref.key = substr;
        let str3 = cloneResult;
        const split = ref.key.split;
        if (cloneResult) {
          str3 = cloneResult.separator;
        }
        if (!str3) {
          str3 = ".";
        }
        ref.path = split(str3);
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
        const tmp = ref.isRef(isContext) && !isContext.isContext;
        if (tmp) {
          arr = arr.push(isContext.root);
        }
      };
    },
    (arg0, arg1, fn) => {
      let closure_0 = arg1;
      if (typeof Symbol === "function") {
        let _Symbol = Symbol;
        if (typeof Symbol.iterator === "symbol") {
          fn = (arg0) => typeof arg0;
        }
        let tmp = fn;
        let num = 2;
        let closure_2 = fn(2);
        let closure_3 = fn(17);
        let context = {
          stringify(arg0, arg1) {
              let str = "undefined";
              if (undefined !== arg0) {
                str = fn(arg0);
              }
              if (null === arg0) {
                return "null";
              } else if ("string" === str) {
                return arg0;
              } else {
                if (!(arg0 instanceof closure_0.Err)) {
                  if ("function" !== str) {
                    if ("object" === str) {
                      const _Array = Array;
                      if (Array.isArray(arg0)) {
                        let num = 0;
                        let str5 = "";
                        let str6 = "";
                        if (0 < arg0.length) {
                          do {
                            let str7 = "";
                            if (``.length) {
                              str7 = ", ";
                            }
                            str5 = str5 + str7 + obj.stringify(arg0[num], arg1);
                            num = num + 1;
                            str6 = str5;
                          } while (num < arg0.length);
                        }
                        let combined = str6;
                        if (arg1) {
                          const _HermesInternal = HermesInternal;
                          combined = "[" + str6 + "]";
                        }
                        return combined;
                      } else {
                        return arg0.toString();
                      }
                    } else {
                      const _JSON = JSON;
                      return JSON.stringify(arg0);
                    }
                  }
                }
                return arg0.toString();
              }
            }
        };
        class _class {
          constructor(type, arg1, arg2, options, flags) {
            const self = this;
            if (this instanceof _class) {
              context = arg1;
              self.isJoi = true;
              self.type = type;
              if (!arg1) {
                context = {};
              }
              self.context = context;
              ({ key: self.context.key, path: self.path } = arg2);
              self.options = options;
              self.flags = flags;
            } else {
              const _TypeError = TypeError;
              const self2 = this;
              const self3 = this;
              const typeError = new TypeError("Cannot call a class as a function");
              throw typeError;
            }
          }
          toString() {
            const self = this;
            const language = this.options.language;
            context = this.context;
            if (this.flags.label) {
              context.key = self.flags.label;
            } else {
              const tmp = "" !== context.key && null !== self.context.key;
              if (!tmp) {
                let root = language.root;
                const context2 = self.context;
                if (!root) {
                  root = closure_3.errors.root;
                }
                context2.key = root;
              }
            }
            const reachResult = closure_2.reach(language, self.type) || closure_2.reach(closure_3.errors, self.type);
            const obj2 = /\{\{\!?key\}\}/;
            let isMatch = obj2.test(reachResult);
            let substr = reachResult;
            if (reachResult.length > 2 && "!" === reachResult[0] && "!" === reachResult[1]) {
              substr = reachResult.slice(2);
            }
            if (!isMatch) {
              isMatch = tmp6;
            }
            let str4 = substr;
            if (!isMatch) {
              str4 = (closure_2.reach(language, "key") || closure_2.reach(closure_3.errors, "key")) + substr;
              const reachResult1 = closure_2.reach(language, "key") || closure_2.reach(closure_3.errors, "key");
            }
            const reachResult2 = closure_2.reach(language, "messages.wrapArrays");
            let wrapArrays = reachResult2;
            if (typeof reachResult2 !== "boolean") {
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
        arg1.create = (arg0, arg1, arg2, arg3, arg4) => {
          const err = new closure_0.Err(arg0, arg1, arg2, arg3, arg4);
          return err;
        };
        arg1.process = function(reason, _object) {
          const tmp = reason;
          if (tmp) {
            if (reason.length) {
              const str = "";
              closure_0 = "";
              items = [];
              function processErrors(reason, path) {
                let num = 0;
                if (0 < reason.length) {
                  while (!reason[num].flags.error) {
                    let str3;
                    if (undefined === path) {
                      let str1 = str.toString();
                      let str2 = "";
                      let tmp4 = closure_0;
                      if (tmp4) {
                        str2 = ". ";
                      }
                      closure_0 = tmp4 + str2 + str1;
                      str3 = str1;
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
                    let push = items.push;
                    if (!str3) {
                      str3 = str.toString();
                    }
                    obj = { message: str3, path: obj.getPath(str), type: null, context: null };
                    ({ type: obj.type, context: obj.context } = str);
                    let arr = push(obj);
                  }
                  return reason[num].flags.error;
                }
              }
              let num = 0;
              const processErrorsResult = processErrors(reason);
              if (processErrorsResult) {
                return processErrorsResult;
              } else {
                let tmp4 = globalThis;
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error = new Error(closure_0);
                error.isJoi = true;
                let str2 = "ValidationError";
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
          const length = [];
          function cycleReplacer(arg0, arg1) {
            let str = "[Circular ~]";
            if (length[0] !== arg1) {
              const substr = closure_0.slice(0, length.indexOf(arg1));
              str = `${"[Circular ~." + obj.join(".")}]`;
            }
            return str;
          }
          return function(arg0, arg1) {
            let callResult;
            if (length.length > 0) {
              const self = this;
              const index = length.indexOf(this);
              if (~index) {
                length.length = index + 1;
                closure_0.length = index + 1;
                closure_0[index] = arg0;
              } else {
                length.push(self);
                closure_0.push(arg0);
              }
              callResult = arg1;
              if (~length.indexOf(arg1)) {
                callResult = cycleReplacer.call(self, arg0, arg1);
              }
            } else {
              length.push(arg1);
              callResult = arg1;
            }
            let str = callResult;
            if (Array.isArray(callResult)) {
              str = callResult;
              if (callResult.placeholders) {
                const placeholders = callResult.placeholders;
                items = [];
                let num3 = 0;
                str = items;
                if (0 < callResult.length) {
                  do {
                    if (placeholders[num3]) {
                      let arr9 = items.push(placeholders[num3]);
                    }
                    let arr10 = items.push(callResult[num3]);
                    num3 = num3 + 1;
                    str = items;
                  } while (num3 < callResult.length);
                }
              }
            }
            if (str !== Infinity) {
              if (str !== -Infinity) {
                const _Number = Number;
                if (!Number.isNaN(str)) {
                  let text;
                  if (typeof str !== "function") {
                    if (undefined !== str) {
                      fn(str);
                    }
                    text = str;
                  }
                  return text;
                }
              }
            }
            text = `${"[" + str.toString()}]`;
          };
        };
        context.annotate = function(arg0) {
          let length;
          let sum2;
          let str = "\u001B[31m";
          if (arg0) {
            str = "";
          }
          let str2 = "\u001B[41m";
          if (arg0) {
            str2 = "";
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
            const clone = closure_2.clone;
            if (!_object) {
              _object = {};
            }
            const cloneResult = clone(_object);
            obj = {};
            let diff = self.details.length - 1;
            if (0 <= diff) {
              do {
                let sum = diff + 1;
                let tmp5 = self.details[diff];
                let str12 = tmp5.path;
                let parts = str12.split(".");
                if (0 < parts.length) {
                  let text = `, ${tmp4}`;
                  let num3 = 0;
                  let tmp13 = cloneResult;
                  if (tmp13) {
                    while (true) {
                      let tmp10;
                      let tmp7 = parts[num3];
                      let sum1 = num3 + 1;
                      let tmp9 = tmp13;
                      if (sum1 < parts.length) {
                        tmp10 = tmp13[tmp7];
                      } else {
                        let tmp21 = tmp13[tmp7];
                        let _Array = Array;
                        if (Array.isArray(tmp13)) {
                          if (!tmp13.placeholders) {
                            tmp13.placeholders = {};
                          }
                          let placeholders = tmp13.placeholders;
                          if (tmp13.placeholders[tmp7]) {
                            let str14 = tmp13.placeholders[tmp7];
                            placeholders[tmp7] = str14.replace("_$end$_", `${tmp19}_$end$_`);
                            tmp10 = tmp13;
                          } else {
                            placeholders[tmp7] = `${tmp20}_$end$_`;
                            tmp10 = tmp13;
                          }
                        } else if (undefined !== tmp21) {
                          delete tmp9[tmp7];
                          let text1 = `${tmp7 + "_$key$_" + tmp4}_$end$_`;
                          tmp13[`${tmp7 + "_$key$_" + tmp4}_$end$_`] = tmp21;
                          obj[tmp5.path] = text1;
                          tmp10 = tmp13;
                        } else if (obj[tmp5.path]) {
                          let str13 = obj[tmp5.path];
                          let replaced = str13.replace("_$end$_", `${tmp19}_$end$_`);
                          tmp13[replaced] = tmp13[str13];
                          obj[tmp5.path] = replaced;
                          delete tmp9[str13];
                          tmp10 = tmp13;
                        } else {
                          tmp13["_$miss$_" + tmp7 + "|" + sum + "_$end$_"] = "__missing__";
                          tmp10 = tmp13;
                        }
                      }
                      if (sum1 >= parts.length) {
                        break;
                      } else {
                        num3 = sum1;
                        tmp13 = tmp10;
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
            const str16 = str15.replace(/_\$key\$_([, \d]+)_\$end\$_\"/g, (arg0, arg1) => "\" " + str + "[" + arg1 + "]" + str3);
            const str17 = str16.replace(/\"_\$miss\$_([^\|]+)\|(\d+)_\$end\$_\"\: \"__missing__\"/g, (arg0, arg1, arg2) => str2 + "\"" + arg1 + "\"" + str3 + str + " [" + arg2 + "]: -- missing --" + str3);
            const str18 = str17.replace(/\s*\"_\$idx\$_([, \d]+)_\$end\$_\",?\n(.*)/g, (arg0, arg1, arg2) => "\n" + arg2 + " " + str + "[" + arg1 + "]" + str3);
            let text2 = `${str18.replace(/"\[(NaN|Symbol.*|-?Infinity|function.*|\(.*)\]"/g, (arg0, arg1) => arg1)}
          ${str}`;
            let num5 = 0;
            let tmp16 = text2;
            if (0 < self.details.length) {
              do {
                sum2 = num5 + 1;
                text2 = text2 + "\n[" + sum2 + "] " + self.details[num5].message;
                tmp16 = text2;
                num5 = sum2;
                length = self.details.length;
              } while (sum2 < length);
            }
            return tmp16 + str3;
          }
        };
      }
      fn = (arg0) => {
        const tmp = arg0;
        if (tmp) {
          const _Symbol = Symbol;
          if (typeof Symbol === "function") {
            let str;
            const _Symbol3 = Symbol;
            if (arg0.constructor === Symbol) {
              const _Symbol2 = Symbol;
              str = "symbol";
            }
            return str;
          }
        }
        str = typeof arg0;
      };
    },
    (arg0, arg1) => {
      let range;
      const errors = { root: "value", key: "\"{{!key}}\" ", messages: { wrapArrays: true }, any: { unknown: "is not allowed", invalid: "contains an invalid value", empty: "is not allowed to be empty", required: "is required", allowOnly: "must be one of {{valids}}", default: "threw an error when running default method" }, alternatives: { base: "not matching any of the allowed alternatives" }, array: { base: "must be an array", includes: "at position {{pos}} does not match any of the allowed types", includesSingle: "single value of \"{{!key}}\" does not match any of the allowed types", includesOne: "at position {{pos}} fails because {{reason}}", includesOneSingle: "single value of \"{{!key}}\" fails because {{reason}}", includesRequiredUnknowns: "does not contain {{unknownMisses}} required value(s)", includesRequiredKnowns: "does not contain {{knownMisses}}", includesRequiredBoth: "does not contain {{knownMisses}} and {{unknownMisses}} other required value(s)", excludes: "at position {{pos}} contains an excluded value", excludesSingle: "single value of \"{{!key}}\" contains an excluded value", min: "must contain at least {{limit}} items", max: "must contain less than or equal to {{limit}} items", length: "must contain {{limit}} items", ordered: "at position {{pos}} fails because {{reason}}", orderedLength: "at position {{pos}} fails because array must contain at most {{limit}} items", sparse: "must not be a sparse array", unique: "position {{pos}} contains a duplicate value" }, boolean: { base: "must be a boolean" }, binary: { base: "must be a buffer or a string", min: "must be at least {{limit}} bytes", max: "must be less than or equal to {{limit}} bytes", length: "must be {{limit}} bytes" }, date: { base: "must be a number of milliseconds or valid date string", format: "must be a string with one of the following formats {{format}}", strict: "must be a valid date", min: "must be larger than or equal to \"{{limit}}\"", max: "must be less than or equal to \"{{limit}}\"", isoDate: "must be a valid ISO 8601 date", timestamp: { javascript: "must be a valid timestamp or number of milliseconds", unix: "must be a valid timestamp or number of seconds" }, ref: "references \"{{ref}}\" which is not a date" }, function: { base: "must be a Function", arity: "must have an arity of {{n}}", minArity: "must have an arity greater or equal to {{n}}", maxArity: "must have an arity lesser or equal to {{n}}", ref: "must be a Joi reference" }, lazy: { base: "!!schema error: lazy schema must be set", schema: "!!schema error: lazy schema function must return a schema" }, object: { base: "must be an object", child: "!!child \"{{!child}}\" fails because {{reason}}", min: "must have at least {{limit}} children", max: "must have less than or equal to {{limit}} children", length: "must have {{limit}} children", allowUnknown: "!!\"{{!child}}\" is not allowed", with: "missing required peer \"{{peer}}\"", without: "conflict with forbidden peer \"{{peer}}\"", missing: "must contain at least one of {{peers}}", xor: "contains a conflict between exclusive peers {{peers}}", or: "must contain at least one of {{peers}}", and: "contains {{present}} without its required peers {{missing}}", nand: "!!\"{{main}}\" must not exist simultaneously with {{peers}}", assert: "!!\"{{ref}}\" validation failed because \"{{ref}}\" failed to {{message}}", rename: { multiple: "cannot rename child \"{{from}}\" because multiple renames are disabled and another key was already renamed to \"{{to}}\"", override: "cannot rename child \"{{from}}\" because override is disabled and target \"{{to}}\" exists" }, type: "must be an instance of \"{{type}}\"", schema: "must be a Joi instance" }, number: { base: "must be a number", min: "must be larger than or equal to {{limit}}", max: "must be less than or equal to {{limit}}", less: "must be less than {{limit}}", greater: "must be greater than {{limit}}", float: "must be a float or double", integer: "must be an integer", negative: "must be a negative number", positive: "must be a positive number", precision: "must have no more than {{limit}} decimal places", ref: "references \"{{ref}}\" which is not a number", multiple: "must be a multiple of {{multiple}}" }, string: range };
      range = { base: "must be a string", min: "length must be at least {{limit}} characters long", max: "length must be less than or equal to {{limit}} characters long", length: "length must be {{limit}} characters long", alphanum: "must only contain alpha-numeric characters", token: "must only contain alpha-numeric and underscore characters", regex: { base: "with value \"{{!value}}\" fails to match the required pattern: {{pattern}}", name: "with value \"{{!value}}\" fails to match the {{name}} pattern", invert: { base: "with value \"{{!value}}\" matches the inverted pattern: {{pattern}}", name: "with value \"{{!value}}\" matches the inverted {{name}} pattern" } }, email: "must be a valid email", uri: "must be a valid uri", uriRelativeOnly: "must be a valid relative uri", uriCustomScheme: "must be a valid uri with a scheme matching the {{scheme}} pattern", isoDate: "must be a valid ISO 8601 date", guid: "must be a valid GUID", hex: "must only contain hexadecimal characters", base64: "must be a valid base64 string", hostname: "must be a valid hostname", lowercase: "must only contain lowercase characters", uppercase: "must only contain uppercase characters", trim: "must not have leading or trailing whitespace", creditCard: "must be a credit card", ref: "references \"{{ref}}\" which is not a number", ip: "must be a valid ip address with a {{cidr}} CIDR", ipVersion: "must be a valid ip address of one of the following versions {{version}} with a {{cidr}} CIDR" };
      arg1.errors = errors;
    },
    (arg0, arg1, fn) => {
      let buffer = arg0;
      let closure_1 = fn;
      fn = (arg0) => {
        buffer = arg0;
        if (typeof Symbol === "function") {
          let _Symbol = Symbol;
          if (typeof Symbol.iterator === "symbol") {
            fn = (arg0) => typeof arg0;
          }
          let num = 15;
          let closure_2 = fn(15);
          let tmp2 = buffer;
          class Set {
            constructor() {
              if (this instanceof Set) {
                tmp._set = [];
              } else {
                const _TypeError = TypeError;
                const self = this;
                const self2 = this;
                const typeError = new TypeError("Cannot call a class as a function");
                throw typeError;
              }
            }
            add(arg0, arg1) {
              const self = this;
              if (undefined !== arg1) {
                closure_2.push(arg1, arg0);
              }
              const _set = self._set;
              _set.push(arg0);
              return self;
            }
            merge(_set, _set2) {
              let length;
              let length2;
              const self = this;
              let num = 0;
              if (0 < _set._set.length) {
                do {
                  let addResult = self.add(_set._set[num]);
                  num = num + 1;
                  length = _set._set.length;
                } while (num < length);
              }
              let num2 = 0;
              if (0 < _set2._set.length) {
                do {
                  let removeResult = self.remove(_set2._set[num2]);
                  num2 = num2 + 1;
                  length2 = _set2._set.length;
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
            has(getTime, reference, arg2, arg3) {
              const self = this;
              let num = 0;
              if (0 < this._set.length) {
                while (true) {
                  let tmp = self._set[num];
                  let isRefResult = reference && closure_2.isRef(tmp);
                  let tmpResult = tmp;
                  if (isRefResult) {
                    let tmp6 = reference.reference || reference.parent;
                    tmpResult = tmp(tmp6, arg2);
                  }
                  let _Array = Array;
                  let arr = tmpResult;
                  if (!Array.isArray(tmpResult)) {
                    items = [tmpResult];
                    arr = items;
                  }
                  let num2 = 0;
                  if (0 < arr.length) {
                    while (true) {
                      let str = arr[num2];
                      let str2 = "undefined";
                      if (undefined !== getTime) {
                        str2 = fn(getTime);
                      }
                      let str3 = "undefined";
                      if (undefined !== str) {
                        str3 = fn(str);
                      }
                      if (str2 === str3) {
                        if (getTime === str) {
                          break;
                        } else {
                          let _Date2 = Date;
                          if (getTime instanceof Date) {
                            let _Date = Date;
                            if (str instanceof Date) {
                              let time = getTime.getTime();
                              if (time === str.getTime()) {
                                break;
                              }
                            }
                            let flag = true;
                            return true;
                          }
                          if (arg3) {
                            if (typeof getTime === "string") {
                              let formatted = getTime.toLowerCase();
                              if (formatted === str.toLowerCase()) {
                                break;
                              }
                            }
                            break;
                          }
                          if (buffer.isBuffer(getTime)) {
                            if (buffer.isBuffer(str)) {
                              if (getTime.length === str.length) {
                                let str1 = getTime.toString("binary");
                                if (str1 === str.toString("binary")) {
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
            values(stripUndefined) {
              const self = this;
              const tmp = stripUndefined;
              if (tmp) {
                if (stripUndefined.stripUndefined) {
                  let num;
                  items = [];
                  for (let num = 0; num < self._set.length; num = num + 1) {
                    let tmp2 = self._set[num];
                    if (undefined !== tmp2) {
                      let arr = items.push(tmp2);
                    }
                  }
                  return items;
                }
              }
              const _set = self._set;
              return _set.slice();
            }
            slice() {
              obj = Object.create(Set.prototype);
              if (obj instanceof Set) {
                const self3 = this;
                obj._set = [];
                const _set = this._set;
                obj._set = _set.slice();
                return obj;
              } else {
                const _TypeError = TypeError;
                const self = this;
                const self2 = this;
                const typeError = new TypeError("Cannot call a class as a function");
                throw typeError;
              }
            }
            concat(_set) {
              obj = Object.create(Set.prototype);
              if (obj instanceof Set) {
                const self3 = this;
                obj._set = [];
                _set = this._set;
                obj._set = _set.concat(_set._set);
                return obj;
              } else {
                const _TypeError = TypeError;
                const self = this;
                const self2 = this;
                const typeError = new TypeError("Cannot call a class as a function");
                throw typeError;
              }
            }
          }
          buffer.exports = Set;
        }
        fn = (arg0) => {
          const tmp = arg0;
          if (tmp) {
            const _Symbol = Symbol;
            if (typeof Symbol === "function") {
              let str;
              const _Symbol3 = Symbol;
              if (arg0.constructor === Symbol) {
                const _Symbol2 = Symbol;
                str = "symbol";
              }
              return str;
            }
          }
          str = typeof arg0;
        };
      };
      fn.call(arg1, fn(3).Buffer);
    },
    (arg0, arg1, fn) => {
      let closure_0 = fn;
      if (typeof Symbol === "function") {
        let _Symbol = Symbol;
        if (typeof Symbol.iterator === "symbol") {
          fn = (arg0) => typeof arg0;
        }
        let tmp = arg1;
        let closure_2 = fn(2);
        let closure_3 = fn(15);
        obj = { any: null, date: fn(20), string: fn(21), number: fn(26), boolean: fn(27), alt: null, object: null };
        arg1.schema = function(isJoi) {
          let validResult;
          let any = obj.any;
          if (!any) {
            const self = this;
            const self2 = this;
            any = new closure_0(14)();
          }
          obj.any = any;
          const alt = obj.alt || closure_0(28);
          obj.alt = alt;
          const object = obj.object || closure_0(29);
          obj.object = object;
          if (null != isJoi) {
            let str = "undefined";
            if (undefined !== isJoi) {
              str = fn(isJoi);
            }
            if ("object" === str) {
              let tmp9 = isJoi;
              if (!isJoi.isJoi) {
                let tryResult;
                const _Array = Array;
                if (Array.isArray(isJoi)) {
                  const alt2 = obj.alt;
                  tryResult = alt2.try(isJoi);
                } else {
                  const _RegExp = RegExp;
                  if (isJoi instanceof RegExp) {
                    const string2 = obj.string;
                    tryResult = string2.regex(isJoi);
                  } else {
                    const _Date = Date;
                    if (isJoi instanceof Date) {
                      const date = obj.date;
                      tryResult = date.valid(isJoi);
                    } else {
                      const object2 = obj.object;
                      tryResult = object2.keys(isJoi);
                    }
                  }
                }
                tmp9 = tryResult;
              }
              validResult = tmp9;
            }
            return validResult;
          }
          if (typeof isJoi === "string") {
            const string = obj.string;
            validResult = string.valid(isJoi);
          } else if (typeof isJoi === "number") {
            const number = obj.number;
            validResult = number.valid(isJoi);
          } else if (typeof isJoi === "boolean") {
            const boolean = obj.boolean;
            validResult = boolean.valid(isJoi);
          } else if (closure_3.isRef(isJoi)) {
            const any3 = obj.any;
            validResult = any3.valid(isJoi);
          } else {
            closure_2.assert(null === isJoi, "Invalid schema content:", isJoi);
            const any2 = obj.any;
            validResult = any2.valid(null);
          }
        };
        arg1.ref = (arg0) => {
          let obj2 = arg0;
          if (!closure_3.isRef(arg0)) {
            obj2 = closure_3.create(arg0);
          }
          return obj2;
        };
      }
      fn = (arg0) => {
        const tmp = arg0;
        if (tmp) {
          const _Symbol = Symbol;
          if (typeof Symbol === "function") {
            let str;
            const _Symbol3 = Symbol;
            if (arg0.constructor === Symbol) {
              const _Symbol2 = Symbol;
              str = "symbol";
            }
            return str;
          }
        }
        str = typeof arg0;
      };
    },
    function(arg0, arg1, fn) {
      let date;
      let tmp = fn(14);
      let closure_1 = fn(15);
      let assert = fn(2);
      obj = {
        isoDate: /^(?:\d{4}(?!\d{2}\b))(?:(-?)(?:(?:0[1-9]|1[0-2])(?:\1(?:[12]\d|0[1-9]|3[01]))?|W(?:[0-4]\d|5[0-2])(?:-?[1-7])?|(?:00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[1-6])))(?![T]$|[T][\d]+Z$)(?:[T\s](?:(?:(?:[01]\d|2[0-3])(?:(:?)[0-5]\d)?|24\:?00)(?:[.,]\d+(?!:))?)(?:\2[0-5]\d(?:[.,]\d+)?)?(?:[Z]|(?:[+-])(?:[01]\d|2[0-3])(?::?[0-5]\d)?)?)?)?$/,
        invalidDate: date,
        isIsoDate: (arg0) => {
          const tmp = arg0 && arg0.toString() === closure_0;
          return tmp;
        },
        Date: _class,
        compare: (arg0, arg1) => {
          let ref;
          closure_0 = arg0;
          return function(length) {
            let tmp = "now" === length;
            const isRefResult = tmp.isRef(length);
            let closure_2 = isRefResult;
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
            assert.assert(tmp3, "Invalid date format");
            return this._test(length, tmp3, function(getTime, reference, concatSettingsResult) {
              let date;
              let timestamp;
              const self = this;
              if (closure_1) {
                const _Date2 = Date;
                timestamp = Date.now();
              } else if (closure_2) {
                _Date = obj.Date;
                let parent = reference.reference;
                const toDate = _Date.toDate;
                if (!parent) {
                  parent = reference.parent;
                }
                const toDateResult = toDate(length(parent, concatSettingsResult));
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
                const _Date3 = Date;
                const self2 = this;
                const self3 = this;
                const createError = self.createError;
                const obj2 = { limit: date };
                date = new Date(tmp13);
                error = createError(`date.${closure_0}`, obj2, reference, concatSettingsResult);
              }
              return error;
            });
          };
        }
      };
      date = new Date("");
      const str = obj.isoDate;
      str.toString();
      items = tmp;
      class _class {
        constructor() {
          const self = this;
          if (this instanceof _class) {
            const callResult = closure_0.call(self);
            if (self) {
              let tmp8 = self;
              if (callResult) {
                if (typeof callResult === "object") {
                  tmp8 = callResult;
                } else {
                  tmp8 = self;
                }
              }
              tmp8._type = "date";
              return tmp8;
            } else {
              const _ReferenceError = ReferenceError;
              const self4 = this;
              const self5 = this;
              const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
              throw referenceError;
            }
          } else {
            const _TypeError = TypeError;
            const self2 = this;
            const self3 = this;
            const typeError = new TypeError("Cannot call a class as a function");
            throw typeError;
          }
        }
        _base(concatSettingsResult, mergeResult, convert) {
          const self = this;
          convert = convert.convert;
          if (convert) {
            const _Date = obj.Date;
            convert = _Date.toDate(concatSettingsResult, self._flags.format, self._flags.timestamp, self._flags.multiplier);
          }
          if (!convert) {
            convert = concatSettingsResult;
          }
          obj = { value: convert };
          if (obj.value instanceof Date) {
            const _isNaN = isNaN;
            const value = obj.value;
            if (!isNaN(value.getTime())) {
              obj.errors = null;
            }
            return obj;
          }
          if (convert.convert) {
            let str2 = "isoDate";
            if (!obj.isIsoDate(self._flags.format)) {
              let str3 = "base";
              if (self._flags.timestamp) {
                str3 = `timestamp.${self._flags.timestamp}`;
              }
              str2 = str3;
            }
            obj.errors = self.createError(`date.${str2}`, null, mergeResult, convert);
          } else {
            obj.errors = self.createError("date.strict", null, mergeResult, convert);
          }
        }
        static toDate(str, test, arg2, arg3) {
          if (str instanceof Date) {
            return str;
          } else {
            if (typeof str === "string") {
              let date;
              let isMatch = typeof str === "string";
              if (typeof str === "string") {
                const obj2 = /^[+-]?\d+(\.\d+)?$/;
                isMatch = obj2.test(str);
              }
              let parsed = str;
              if (isMatch) {
                const _parseFloat = parseFloat;
                parsed = parseFloat(str);
              }
              const tmp3 = test;
              if (tmp3) {
                if (obj.isIsoDate(test)) {
                  let invalidDate;
                  if (test.test(parsed)) {
                    const _Date3 = Date;
                    const self5 = this;
                    const self6 = this;
                    invalidDate = new Date(parsed);
                  } else {
                    invalidDate = obj.invalidDate;
                  }
                  date = invalidDate;
                }
                const _isNaN = isNaN;
                if (!isNaN(date.getTime())) {
                  return date;
                }
              }
              const tmp5 = arg2;
              if (tmp5) {
                const tmp6 = arg3;
                if (tmp6) {
                  const _Date2 = Date;
                  const self3 = this;
                  const self4 = this;
                  date = new Date(parsed * arg3);
                }
              }
              const _Date = Date;
              const self = this;
              const self2 = this;
              date = new Date(parsed);
            } else if (typeof str === "number") {
              const _isNaN2 = isNaN;
              if (!isNaN(str)) {
                const _isFinite = isFinite;
              }
            }
            return null;
          }
        }
        iso() {
          const cloneResult = this.clone();
          cloneResult._flags.format = obj.isoDate;
          return cloneResult;
        }
        timestamp(dependencyMap) {
          items = ["javascript", "unix"];
          assert = assert.assert;
          const index = items.indexOf(tmp);
          assert(-1 !== index, `"type" must be one of "${arr.join("\", \"")}"`);
          const cloneResult = this.clone();
          cloneResult._flags.timestamp = dependencyMap || "javascript";
          let num = 1;
          const _flags = cloneResult._flags;
          if ("unix" === (dependencyMap || "javascript")) {
            num = 1000;
          }
          _flags.multiplier = num;
          return cloneResult;
        }
        _isIsoDate(value) {
          const isoDate = obj.isoDate;
          return isoDate.test(value);
        }
      }
      if (typeof tmp !== "function") {
        if (null !== tmp) {
          let _TypeError = TypeError;
          let self = this;
          let str2 = "Super expression must either be null or a function, not ";
          let self2 = this;
          let typeError = new TypeError("Super expression must either be null or a function, not " + typeof tmp);
          throw typeError;
        }
      }
      let prototype = tmp;
      const _Object = Object;
      if (tmp) {
        prototype = tmp.prototype;
      }
      let obj2 = { constructor: { value: _class, enumerable: false, writable: true, configurable: true } };
      _class.prototype = create(prototype, obj2);
      if (tmp) {
        const _Object2 = Object;
        const _Object3 = Object;
        if (Object.setPrototypeOf) {
          _Object3.setPrototypeOf(_class, tmp);
        } else {
          let num;
          const ownPropertyNames = _Object3.getOwnPropertyNames(tmp);
          for (let num = 0; num < ownPropertyNames.length; num = num + 1) {
            let tmp3 = ownPropertyNames[num];
            let _Object4 = Object;
            let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(tmp, tmp3);
            let tmp5 = num;
            let tmp6 = ownPropertyDescriptor && ownPropertyDescriptor.configurable && undefined === _class[tmp3];
            if (tmp6) {
              let _Object5 = Object;
              let definePropertyResult = Object.defineProperty(_class, tmp3, ownPropertyDescriptor);
            }
          }
        }
      }
      obj.Date.prototype.min = obj.compare("min", (arg0, arg1) => arg0 >= arg1);
      obj.Date.prototype.max = obj.compare("max", (arg0, arg1) => arg0 <= arg1);
      module.exports = new obj.Date();
      new obj.Date();
    },
    (arg0, arg1, fn) => {
      let closure_0 = arg0;
      let closure_1 = fn;
      fn = function(arg0) {
        let obj5;
        closure_0 = arg0;
        if (typeof Symbol === "function") {
          let _Symbol = Symbol;
          if (typeof Symbol.iterator === "symbol") {
            fn = (arg0) => typeof arg0;
          }
          let num = 8;
          let closure_2 = fn(8);
          let num2 = 2;
          let closure_3 = fn(2);
          let num3 = 22;
          let closure_4 = fn(22);
          let tmp2 = fn(14);
          let num5 = 15;
          let closure_5 = fn(15);
          let closure_6 = fn(20);
          obj = fn(23);
          let obj2 = fn(25);
          let obj3 = {
            uriRegex: obj.createUriRegex(),
            ipRegex: obj2.createIpRegex(["ipv4", "ipv6", "ipvfuture"], "optional"),
            String: _class,
            compare: (arg0, arg1) => {
                let integer;
                let ref;
                let encoding = arg0;
                let closure_1 = arg1;
                return function(length, encoding) {
                  encoding = length;
                  const isRefResult = ref.isRef(length);
                  closure_2 = isRefResult;
                  const assert = integer.assert;
                  const isIntegerResult = integer.isInteger(length) && length >= 0 || isRefResult;
                  assert(isIntegerResult, "limit must be a positive integer or reference");
                  let isEncodingResult = !encoding;
                  const assert2 = integer.assert;
                  if (encoding) {
                    isEncodingResult = encoding.isEncoding(encoding);
                  }
                  assert2(isEncodingResult, "Invalid encoding:", encoding);
                  return this._test(encoding, length, function(value, reference, concatSettingsResult) {
                    let tmp2;
                    const self = this;
                    if (closure_2) {
                      const tmp3 = reference.reference || reference.parent;
                      const tmpResult = length(tmp3, concatSettingsResult);
                      tmp2 = tmpResult;
                      if (!integer.isInteger(tmpResult)) {
                        obj = { ref: length.key };
                        return self.createError("string.ref", obj, reference, concatSettingsResult);
                      }
                    } else {
                      tmp2 = length;
                    }
                    let error = value;
                    if (!encoding(value, tmp2, encoding)) {
                      obj2 = { limit: tmp2, value, encoding };
                      error = self.createError(`string.${closure_0}`, obj2, reference, concatSettingsResult);
                    }
                    return error;
                  });
                };
              }
          };
          let str = "optional";
          closure_0 = tmp2;
          class _class {
            constructor() {
              const self = this;
              if (this instanceof _class) {
                const callResult = closure_0.call(self);
                if (self) {
                  let tmp8 = self;
                  if (callResult) {
                    if (typeof callResult === "object") {
                      tmp8 = callResult;
                    } else {
                      tmp8 = self;
                    }
                  }
                  tmp8._type = "string";
                  const _invalids = tmp8._invalids;
                  _invalids.add("");
                  return tmp8;
                } else {
                  const _ReferenceError = ReferenceError;
                  const self4 = this;
                  const self5 = this;
                  const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  throw referenceError;
                }
              } else {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("Cannot call a class as a function");
                throw typeError;
              }
            }
            _base(toLocaleUpperCase, mergeResult, convert) {
              let error;
              let length;
              const self = this;
              let substr = toLocaleUpperCase;
              if (typeof toLocaleUpperCase === "string") {
                substr = toLocaleUpperCase;
                if (convert.convert) {
                  let str = toLocaleUpperCase;
                  if (self._flags.case) {
                    let toLocaleUpperCaseResult;
                    if ("upper" === self._flags.case) {
                      toLocaleUpperCaseResult = toLocaleUpperCase.toLocaleUpperCase();
                    } else {
                      toLocaleUpperCaseResult = toLocaleUpperCase.toLocaleLowerCase();
                    }
                    str = toLocaleUpperCaseResult;
                  }
                  let trimmed = str;
                  if (self._flags.trim) {
                    trimmed = str.trim();
                  }
                  let arr = trimmed;
                  if (self._inner.replacements) {
                    let num = 0;
                    let str3 = trimmed;
                    arr = trimmed;
                    if (0 < self._inner.replacements.length) {
                      do {
                        let tmp4 = self._inner.replacements[num];
                        str3 = str3.replace(tmp4.pattern, tmp4.replacement);
                        num = num + 1;
                        arr = str3;
                        length = self._inner.replacements.length;
                      } while (num < length);
                    }
                  }
                  substr = arr;
                  if (self._flags.truncate) {
                    let num5 = 0;
                    substr = arr;
                    if (0 < self._tests.length) {
                      while ("max" !== self._tests[num5].name) {
                        num5 = num5 + 1;
                        substr = arr;
                      }
                      substr = arr.slice(0, tmp5.arg);
                    }
                  }
                }
              }
              obj = { value: substr, errors: error };
              error = null;
              if (typeof substr !== "string") {
                const obj2 = { value: substr };
                error = self.createError("string.base", obj2, mergeResult, convert);
              }
              return obj;
            }
            insensitive() {
              const cloneResult = this.clone();
              cloneResult._flags.insensitive = true;
              return cloneResult;
            }
            creditCard() {
              return this._test("creditCard", undefined, function(value, mergeResult, concatSettingsResult) {
                let error;
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
                  const self2 = this;
                  obj = { value };
                  error = this.createError("string.creditCard", obj, mergeResult, concatSettingsResult);
                } else {
                  error = value;
                }
                return error;
              });
            }
            regex(source, name) {
              let _RegExp1;
              closure_3.assert(source instanceof RegExp, "pattern must be a RegExp");
              source = source.source;
              let str;
              const _RegExp = RegExp;
              if (source.ignoreCase) {
                str = "i";
              }
              obj = { pattern: _RegExp1 };
              _RegExp1 = new _RegExp(source, str);
              if (typeof name === "string") {
                obj.name = name;
              } else {
                let str2 = "undefined";
                if (undefined !== name) {
                  str2 = fn(name);
                }
                if ("object" === str2) {
                  obj.invert = name.invert;
                  if (name.name) {
                    obj.name = name.name;
                  }
                }
              }
              let str4 = "";
              if (obj.invert) {
                str4 = ".invert";
              }
              items = ["string.regex", str4];
              let str5 = ".base";
              if (obj.name) {
                str5 = ".name";
              }
              items[2] = str5;
              let closure_1 = items.join("");
              return this._test("regex", obj, function(value, mergeResult, concatSettingsResult) {
                const pattern = obj.pattern;
                let error = value;
                const tmp = obj;
                if (!(pattern.test(value) ^ obj.invert)) {
                  const self = this;
                  obj = { name: null, pattern: null, value };
                  ({ name: obj.name, pattern: obj.pattern } = tmp);
                  const self2 = this;
                  error = this.createError(closure_1, obj, mergeResult, concatSettingsResult);
                }
                return error;
              });
            }
            alphanum() {
              return this._test("alphanum", undefined, function(value, mergeResult, concatSettingsResult) {
                let error = value;
                obj = /^[a-zA-Z0-9]+$/;
                if (!obj.test(value)) {
                  const self = this;
                  const self2 = this;
                  const obj2 = { value };
                  error = this.createError("string.alphanum", obj2, mergeResult, concatSettingsResult);
                }
                return error;
              });
            }
            token() {
              return this._test("token", undefined, function(value, mergeResult, concatSettingsResult) {
                let error = value;
                obj = /^\w+$/;
                if (!obj.test(value)) {
                  const self = this;
                  const self2 = this;
                  const obj2 = { value };
                  error = this.createError("string.token", obj2, mergeResult, concatSettingsResult);
                }
                return error;
              });
            }
            email(checkDNS) {
              closure_0 = checkDNS;
              if (closure_0) {
                let str = "undefined";
                const assert = closure_3.assert;
                if (undefined !== checkDNS) {
                  str = fn(checkDNS);
                }
                assert("object" === str, "email options must be an object");
                closure_3.assert(undefined === checkDNS.checkDNS, "checkDNS option is not supported");
                let tmp4 = undefined === checkDNS.tldWhitelist;
                const assert2 = closure_3.assert;
                if (!tmp4) {
                  tmp4 = "object" === fn(checkDNS.tldWhitelist);
                }
                assert2(tmp4, "tldWhitelist must be an array or object");
                let tmp7 = undefined === checkDNS.minDomainAtoms;
                const assert3 = closure_3.assert;
                if (!tmp7) {
                  let isIntegerResult = closure_3.isInteger(checkDNS.minDomainAtoms);
                  if (isIntegerResult) {
                    isIntegerResult = checkDNS.minDomainAtoms > 0;
                  }
                  tmp7 = isIntegerResult;
                }
                assert3(tmp7, "minDomainAtoms must be a positive integer");
                let tmp10 = undefined === checkDNS.errorLevel;
                const assert4 = closure_3.assert;
                if (!tmp10) {
                  tmp10 = typeof checkDNS.errorLevel === "boolean";
                }
                if (!tmp10) {
                  tmp10 = closure_3.isInteger(checkDNS.errorLevel) && checkDNS.errorLevel >= 0;
                  const isIntegerResult1 = closure_3.isInteger(checkDNS.errorLevel) && checkDNS.errorLevel >= 0;
                }
                assert4(tmp10, "errorLevel must be a non-negative integer or boolean");
              }
              return this._test("email", checkDNS, function(value, mergeResult, concatSettingsResult) {
                try {
                  const validateResult = closure_4.validate(value, checkDNS);
                  if (true !== validateResult) {
                    if (0 !== tmp4) {
                      const self = this;
                      const self2 = this;
                      obj = { value };
                      return this.createError("string.email", obj, mergeResult, concatSettingsResult);
                    }
                  }
                  return value;
                } catch (err) {
                }
              });
            }
            ip(toDateResult) {
              let length;
              obj = toDateResult;
              let ipRegex = closure_3.ipRegex;
              if (!toDateResult) {
                obj = {};
              }
              let str = "undefined";
              const assert = closure_3.assert;
              if (undefined !== obj) {
                str = fn(obj);
              }
              assert("object" === str, "options must be an object");
              if (obj.cidr) {
                closure_3.assert(typeof obj.cidr === "string", "cidr must be a string");
                const str4 = obj.cidr;
                obj.cidr = str4.toLowerCase();
                const _Object = Object;
                const assert2 = closure_3.assert;
                const tmp4 = obj.cidr in closure_3.cidrs;
                const keys = Object.keys(closure_3.cidrs);
                assert2(tmp4, `cidr must be one of ${obj4.join(", ")}`);
                const version = obj.version || "optional" === obj.cidr;
                if (!version) {
                  ipRegex = closure_3.createIpRegex(["ipv4", "ipv6", "ipvfuture"], obj.cidr);
                }
              } else {
                obj.cidr = "optional";
              }
              let items1;
              if (obj.version) {
                const _Array = Array;
                if (!Array.isArray(obj.version)) {
                  items = [obj.version];
                  obj.version = items;
                }
                closure_3.assert(obj.version.length >= 1, "version must have at least 1 version specified");
                items1 = [];
                let num2 = 0;
                let obj5 = closure_3;
                if (0 < obj.version.length) {
                  do {
                    let str13 = obj.version[num2];
                    let text = `version at position ${num2}`;
                    let assertResult3 = closure_3.assert(typeof str13 === "string", `version at position ${num2}` + " must be a string");
                    let formatted = str13.toLowerCase();
                    let _Object2 = Object;
                    let assert3 = closure_3.assert;
                    let tmp14 = closure_3.versions[formatted];
                    let keys1 = Object.keys(closure_3.versions);
                    let assert3Result = assert3(tmp14, `version at position ${num2}` + " must be one of " + keys1.join(", "));
                    let arr = items1.push(formatted);
                    num2 = num2 + 1;
                    obj5 = closure_3;
                    length = obj.version.length;
                  } while (num2 < length);
                }
                const uniqueResult = obj5.unique(items1);
                items1 = uniqueResult;
                ipRegex = closure_3.createIpRegex(uniqueResult, obj.cidr);
              }
              return this._test("ip", obj, function(value, mergeResult, concatSettingsResult) {
                let tmp = value;
                if (!regex.test(value)) {
                  let error;
                  const self = this;
                  const createError = this.createError;
                  if (items1) {
                    obj2 = { value, cidr: obj.cidr, version: tmp4 };
                    error = createError("string.ipVersion", obj2, mergeResult, concatSettingsResult);
                  } else {
                    obj = { value, cidr: obj.cidr };
                    error = createError("string.ip", obj, mergeResult, concatSettingsResult);
                  }
                  tmp = error;
                }
                return tmp;
              });
            }
            uri(isFavoriteGIF) {
              let sum2 = "";
              let c1 = false;
              let uriRegex = obj3.uriRegex;
              let flag = false;
              let flag2 = false;
              let str = "";
              if (isFavoriteGIF) {
                let str2 = "undefined";
                const assert = closure_3.assert;
                if (undefined !== isFavoriteGIF) {
                  str2 = fn(isFavoriteGIF);
                }
                assert("object" === str2, "options must be an object");
                let str5 = "";
                if (isFavoriteGIF.scheme) {
                  const _RegExp = RegExp;
                  let isArray = isFavoriteGIF.scheme instanceof RegExp;
                  const assert2 = closure_3.assert;
                  if (!isArray) {
                    isArray = typeof isFavoriteGIF.scheme === "string";
                  }
                  if (!isArray) {
                    const _Array = Array;
                    isArray = Array.isArray(isFavoriteGIF.scheme);
                  }
                  assert2(isArray, "scheme must be a RegExp, String, or Array");
                  const _Array2 = Array;
                  if (!Array.isArray(isFavoriteGIF.scheme)) {
                    items = [isFavoriteGIF.scheme];
                    isFavoriteGIF.scheme = items;
                  }
                  closure_3.assert(isFavoriteGIF.scheme.length >= 1, "scheme must have at least 1 scheme specified");
                  let num2 = 0;
                  let str12 = "";
                  str5 = "";
                  if (0 < isFavoriteGIF.scheme.length) {
                    do {
                      let tmp7 = isFavoriteGIF.scheme[num2];
                      let _RegExp2 = RegExp;
                      let tmp8 = tmp7 instanceof RegExp;
                      let assert3 = closure_3.assert;
                      if (!tmp8) {
                        tmp8 = typeof tmp7 === "string";
                      }
                      let text = `scheme at position ${num2}`;
                      let assert3Result = assert3(tmp8, `${`scheme at position ${num2}`} must be a RegExp or String`);
                      let str13 = "";
                      if (str12) {
                        str13 = "|";
                      }
                      let sum = str12 + str13;
                      sum2 = sum;
                      let _RegExp3 = RegExp;
                      if (tmp7 instanceof RegExp) {
                        let sum1 = sum + tmp7.source;
                        sum2 = sum1;
                      } else {
                        obj3 = /[a-zA-Z][a-zA-Z0-9+-\.]*/;
                        let assertResult2 = closure_3.assert(obj3.test(tmp7), `${tmp11} must be a valid scheme`);
                        sum2 = sum + closure_3.escapeRegex(tmp7);
                      }
                      num2 = num2 + 1;
                      str12 = sum2;
                      str5 = sum2;
                    } while (num2 < isFavoriteGIF.scheme.length);
                  }
                }
                let flag3 = false;
                if (isFavoriteGIF.allowRelative) {
                  flag3 = true;
                }
                flag = false;
                flag2 = flag3;
                str = str5;
                if (isFavoriteGIF.relativeOnly) {
                  c1 = true;
                  flag = true;
                  flag2 = flag3;
                  str = str5;
                }
              }
              const tmp17 = str || flag2 || flag;
              if (tmp17) {
                uriRegex = closure_3.createUriRegex(str, flag2, flag);
              }
              return this._test("uri", isFavoriteGIF, function(value, mergeResult, concatSettingsResult) {
                let tmp = value;
                if (!regex.test(value)) {
                  let error;
                  const self = this;
                  if (c1) {
                    obj2 = { value };
                    error = self.createError("string.uriRelativeOnly", obj2, mergeResult, concatSettingsResult);
                  } else {
                    const createError = self.createError;
                    if (sum2) {
                      obj3 = { scheme: tmp5, value };
                      error = createError("string.uriCustomScheme", obj3, mergeResult, concatSettingsResult);
                    } else {
                      obj = { value };
                      error = createError("string.uri", obj, mergeResult, concatSettingsResult);
                    }
                  }
                  tmp = error;
                }
                return tmp;
              });
            }
            isoDate() {
              return this._test("isoDate", undefined, function(value, mergeResult, concatSettingsResult) {
                let error = value;
                if (!closure_1_6._isIsoDate(value)) {
                  const self = this;
                  const self2 = this;
                  obj = { value };
                  error = this.createError("string.isoDate", obj, mergeResult, concatSettingsResult);
                }
                return error;
              });
            }
            guid(version) {
              let length;
              closure_0 = { "{": "}", "[": "]", "(": ")", "": "" };
              obj = { uuidv1: "1", uuidv2: "2", uuidv3: "3", uuidv4: "4", uuidv5: "5" };
              items = [];
              if (version) {
                if (version.version) {
                  const _Array = Array;
                  if (!Array.isArray(version.version)) {
                    const items1 = [version.version];
                    version.version = items1;
                  }
                  closure_3.assert(version.version.length >= 1, "version must have at least 1 valid version specified");
                  let num2 = 0;
                  if (0 < version.version.length) {
                    do {
                      let str7 = version.version[num2];
                      let text = `version at position ${num2}`;
                      let assertResult1 = closure_3.assert(typeof str7 === "string", `version at position ${num2}` + " must be a string");
                      let formatted = str7.toLowerCase();
                      let _Object = Object;
                      let assert = closure_3.assert;
                      let tmp8 = obj[formatted];
                      let keys = Object.keys(obj);
                      let assertResult2 = assert(tmp8, `version at position ${num2}` + " must be one of " + keys.join(", "));
                      let assertResult3 = closure_3.assert(-1 === items.indexOf(formatted), `version at position ${num2}` + " must not be a duplicate.");
                      let arr = items.push(formatted);
                      num2 = num2 + 1;
                      length = version.version.length;
                    } while (num2 < length);
                  }
                }
              }
              const re3 = /^([\[{\(]?)([0-9A-F]{8})([:-]?)([0-9A-F]{4})([:-]?)([0-9A-F]{4})([:-]?)([0-9A-F]{4})([:-]?)([0-9A-F]{12})([\]}\)]?)$/i;
              return this._test("guid", version, function(value, mergeResult, concatSettingsResult) {
                const self = this;
                const match = regex.exec(value);
                if (match) {
                  if (match[match[1]] !== match[11]) {
                    const obj4 = { value };
                    return self.createError("string.guid", obj4, mergeResult, concatSettingsResult);
                  } else {
                    if (match[3] === match[5]) {
                      if (match[3] === match[7]) {
                        if (match[3] === match[9]) {
                          if (items.length) {
                            const obj5 = { value };
                            return self.createError("string.guid", obj5, mergeResult, concatSettingsResult);
                          }
                          return value;
                        }
                      }
                    }
                    const obj6 = { value };
                    return self.createError("string.guid", obj6, mergeResult, concatSettingsResult);
                  }
                } else {
                  obj = { value };
                  return self.createError("string.guid", obj, mergeResult, concatSettingsResult);
                }
              });
            }
            hex() {
              const tmp = /^[a-f0-9]+$/i;
              const re0 = tmp;
              return this._test("hex", tmp, function(value, mergeResult, concatSettingsResult) {
                let error = value;
                if (!re0.test(value)) {
                  const self = this;
                  const self2 = this;
                  obj = { value };
                  error = this.createError("string.hex", obj, mergeResult, concatSettingsResult);
                }
                return error;
              });
            }
            base64() {
              const tmp = /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;
              const re0 = tmp;
              return this._test("base64", tmp, function(value, mergeResult, concatSettingsResult) {
                let error = value;
                if (!re0.test(value)) {
                  const self = this;
                  const self2 = this;
                  obj = { value };
                  error = this.createError("string.base64", obj, mergeResult, concatSettingsResult);
                }
                return error;
              });
            }
            hostname() {
              let iPv6;
              const re0 = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;
              return this._test("hostname", undefined, function(value, mergeResult, concatSettingsResult) {
                let error;
                if (value.length > 255) {
                  error = value;
                  if (!iPv6.isIPv6(value)) {
                    const self = this;
                    const self2 = this;
                    obj = { value };
                    error = this.createError("string.hostname", obj, mergeResult, concatSettingsResult);
                  }
                } else {
                  error = value;
                }
                return error;
              });
            }
            lowercase() {
              const _testResult = this._test("lowercase", undefined, function(toLocaleLowerCase, mergeResult, convert) {
                let error = toLocaleLowerCase;
                if (!convert.convert) {
                  error = toLocaleLowerCase;
                  if (toLocaleLowerCase !== toLocaleLowerCase.toLocaleLowerCase()) {
                    const self = this;
                    const self2 = this;
                    obj = { value: toLocaleLowerCase };
                    error = this.createError("string.lowercase", obj, mergeResult, convert);
                  }
                }
                return error;
              });
              _testResult._flags.case = "lower";
              return _testResult;
            }
            uppercase() {
              const _testResult = this._test("uppercase", undefined, function(toLocaleUpperCase, mergeResult, convert) {
                let error = toLocaleUpperCase;
                if (!convert.convert) {
                  error = toLocaleUpperCase;
                  if (toLocaleUpperCase !== toLocaleUpperCase.toLocaleUpperCase()) {
                    const self = this;
                    const self2 = this;
                    obj = { value: toLocaleUpperCase };
                    error = this.createError("string.uppercase", obj, mergeResult, convert);
                  }
                }
                return error;
              });
              _testResult._flags.case = "upper";
              return _testResult;
            }
            trim() {
              const _testResult = this._test("trim", undefined, function(value, mergeResult, convert) {
                let error = value;
                if (!convert.convert) {
                  error = value;
                  if (value !== value.trim()) {
                    const self = this;
                    const self2 = this;
                    obj = { value };
                    error = this.createError("string.trim", obj, mergeResult, convert);
                  }
                }
                return error;
              });
              _testResult._flags.trim = true;
              return _testResult;
            }
            replace(includes, replacement) {
              let regExp = includes;
              if (typeof includes === "string") {
                const _RegExp = RegExp;
                const self = this;
                const self2 = this;
                regExp = new RegExp(closure_3.escapeRegex(includes), "g");
              }
              closure_3.assert(regExp instanceof RegExp, "pattern must be a RegExp");
              closure_3.assert(typeof replacement === "string", "replacement must be a String");
              const cloneResult = this.clone();
              if (!cloneResult._inner.replacements) {
                cloneResult._inner.replacements = [];
              }
              const replacements = cloneResult._inner.replacements;
              obj = { pattern: regExp, replacement };
              replacements.push(obj);
              return cloneResult;
            }
            truncate(arg0) {
              const cloneResult = this.clone();
              let tmp2 = undefined === arg0;
              const _flags = cloneResult._flags;
              if (!tmp2) {
                tmp2 = arg0;
              }
              _flags.truncate = tmp2;
              return cloneResult;
            }
          }
          if (typeof tmp2 !== "function") {
            let tmp14 = null;
            if (null !== tmp2) {
              let _TypeError = TypeError;
              let self3 = this;
              let str5 = "Super expression must either be null or a function, not ";
              let self4 = this;
              let typeError = new TypeError("Super expression must either be null or a function, not " + typeof tmp2);
              throw typeError;
            }
          }
          let prototype = tmp2;
          let _Object = Object;
          if (tmp2) {
            prototype = tmp2.prototype;
          }
          let obj4 = { constructor: obj5 };
          obj5 = { value: _class, enumerable: false, writable: true, configurable: true };
          _class.prototype = create(prototype, obj4);
          if (tmp2) {
            let _Object2 = Object;
            const _Object3 = Object;
            if (Object.setPrototypeOf) {
              _Object3.setPrototypeOf(_class, tmp2);
            } else {
              let num9;
              const ownPropertyNames = _Object3.getOwnPropertyNames(tmp2);
              for (let num9 = 0; num9 < ownPropertyNames.length; num9 = num9 + 1) {
                let tmp3 = ownPropertyNames[num9];
                let _Object4 = Object;
                let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(tmp2, tmp3);
                let tmp5 = num9;
                let tmp6 = ownPropertyDescriptor && ownPropertyDescriptor.configurable && undefined === _class[tmp3];
                if (tmp6) {
                  let _Object5 = Object;
                  let definePropertyResult = Object.defineProperty(_class, tmp3, ownPropertyDescriptor);
                }
              }
            }
          }
          let str2 = "min";
          obj3.String.prototype.min = obj3.compare("min", (arg0, arg1, arg2) => {
            let length;
            const tmp = arg2;
            if (tmp) {
              length = closure_0.byteLength(arg0, arg2);
            } else {
              length = arg0.length;
            }
            return length >= arg1;
          });
          let str3 = "max";
          obj3.String.prototype.max = obj3.compare("max", (arg0, arg1, arg2) => {
            let length;
            const tmp = arg2;
            if (tmp) {
              length = closure_0.byteLength(arg0, arg2);
            } else {
              length = arg0.length;
            }
            return length <= arg1;
          });
          let str4 = "length";
          obj3.String.prototype.length = obj3.compare("length", (arg0, arg1, arg2) => {
            let length;
            const tmp = arg2;
            if (tmp) {
              length = closure_0.byteLength(arg0, arg2);
            } else {
              length = arg0.length;
            }
            return length === arg1;
          });
          obj3.String.prototype.uuid = obj3.String.prototype.guid;
          let tmp9 = closure_0;
          let self = this;
          let self2 = this;
          const string = new obj3.String();
          const tmp11 = string;
          closure_0.exports = string;
        }
        fn = (arg0) => {
          const tmp = arg0;
          if (tmp) {
            const _Symbol = Symbol;
            if (typeof Symbol === "function") {
              let str;
              const _Symbol3 = Symbol;
              if (arg0.constructor === Symbol) {
                const _Symbol2 = Symbol;
                str = "symbol";
              }
              return str;
            }
          }
          str = typeof arg0;
        };
      };
      let callResult = fn.call(arg1, fn(3).Buffer);
    },
    (arg0, arg1, fn) => {
      let closure_0 = arg1;
      let closure_1 = fn;
      fn = function(nextTick) {
        let length;
        let num7;
        if (typeof Symbol === "function") {
          let _Symbol = Symbol;
          if (typeof Symbol.iterator === "symbol") {
            fn = (arg0) => typeof arg0;
          }
          let tmp = nextTick;
          let tmp2 = closure_1;
          let num = 8;
          closure_1 = closure_1(8);
          obj = { hasOwn: Object.prototype.hasOwnProperty, indexOf: Array.prototype.indexOf, defaultThreshold: 16, maxIPv6Groups: 8, categories: { valid: 1, dnsWarn: 7, rfc5321: 15, cfws: 31, deprecated: 63, rfc5322: 127, error: 255 }, diagnoses: { valid: 0, dnsWarnNoMXRecord: 5, dnsWarnNoRecord: 6, rfc5321TLD: 9, rfc5321TLDNumeric: 10, rfc5321QuotedString: 11, rfc5321AddressLiteral: 12, cfwsComment: 17, cfwsFWS: 18, deprecatedLocalPart: 33, deprecatedFWS: 34, deprecatedQTEXT: 35, deprecatedQP: 36, deprecatedComment: 37, deprecatedCTEXT: 38, deprecatedIPv6: 39, deprecatedCFWSNearAt: 49, rfc5322Domain: 65, rfc5322TooLong: 66, rfc5322LocalTooLong: 67, rfc5322DomainTooLong: 68, rfc5322LabelTooLong: 69, rfc5322DomainLiteral: 70, rfc5322DomainLiteralOBSDText: 71, rfc5322IPv6GroupCount: 72, rfc5322IPv62x2xColon: 73, rfc5322IPv6BadCharacter: 74, rfc5322IPv6MaxGroups: 75, rfc5322IPv6ColonStart: 76, rfc5322IPv6ColonEnd: 77, errExpectingDTEXT: 129, errNoLocalPart: 130, errNoDomain: 131, errConsecutiveDots: 132, errATEXTAfterCFWS: 133, errATEXTAfterQS: 134, errATEXTAfterDomainLiteral: 135, errExpectingQPair: 136, errExpectingATEXT: 137, errExpectingQTEXT: 138, errExpectingCTEXT: 139, errBackslashEnd: 140, errDotStart: 141, errDotEnd: 142, errDomainHyphenStart: 143, errDomainHyphenEnd: 144, errUnclosedQuotedString: 145, errUnclosedComment: 146, errUnclosedDomainLiteral: 147, errFWSCRLFx2: 148, errFWSCRLFEnd: 149, errCRNoLF: 150, errUnknownTLD: 160, errDomainTooShort: 161 }, components: { localpart: 0, domain: 1, literal: 2, contextComment: 3, contextFWS: 4, contextQuotedString: 5, contextQuotedPair: 6 } };
          const _Object = Object;
          let _Array = Array;
          if (undefined !== nextTick) {
            if (nextTick) {
              let fn2;
              if (typeof nextTick.nextTick === "function") {
                nextTick = nextTick.nextTick;
                fn2 = nextTick.bind(nextTick);
              }
              obj.defer = fn2;
              const _Array2 = Array;
              let self = this;
              let num2 = 256;
              let self2 = this;
              const array = new Array(256);
              let num3 = 255;
              let flag = false;
              let num4 = 1;
              let num5 = 0;
              let str = "()<>[]:;@\\,.\"";
              let flag2 = true;
              let num6 = 13;
              do {
                array[num3] = false;
                num3 = num3 - 1;
                num7 = 0;
              } while (0 <= num3);
              do {
                let charCodeAt = "()<>[]:;@\\,.\"".charCodeAt;
                array["()<>[]:;@\\,.\"".charCodeAt(num7)] = true;
                num7 = num7 + 1;
              } while (num7 < 13);
              obj.specials = (arg0) => array[arg0];
              let obj2 = { ipV4: /\b(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipV6: /^[a-fA-F\d]{0,4}$/ };
              obj.regex = obj2;
              obj.checkIpV6 = (arr) => {
                let regex;
                return arr.every((item) => {
                  const ipV6 = regex.regex.ipV6;
                  return ipV6.test(item);
                });
              };
              obj.validDomain = (arg0, tldBlacklist) => {
                let callResult;
                const _Array = Array;
                if (tldBlacklist.tldBlacklist) {
                  let tmp2;
                  if (isArray(tldBlacklist.tldBlacklist)) {
                    const indexOf2 = obj.indexOf;
                    tmp2 = -1 === indexOf2.call(tldBlacklist.tldBlacklist, arg0);
                  } else {
                    const hasOwn2 = obj.hasOwn;
                    tmp2 = !hasOwn2.call(tldBlacklist.tldBlacklist, arg0);
                  }
                  callResult = tmp2;
                } else if (isArray(tldBlacklist.tldWhitelist)) {
                  const indexOf = obj.indexOf;
                  callResult = -1 !== indexOf.call(tldBlacklist.tldWhitelist, arg0);
                } else {
                  const hasOwn = obj.hasOwn;
                  callResult = hasOwn.call(tldBlacklist.tldWhitelist, arg0);
                }
                return callResult;
              };
              const fn3 = function(arg0, arg1, arg2) {
                let _null;
                let tmp10;
                obj = arg1;
                let tmp = arg2;
                let c0 = arg2;
                if (!arg1) {
                  obj = {};
                }
                let obj2 = obj;
                if (typeof obj === "function") {
                  c0 = obj;
                  obj2 = {};
                  tmp = obj;
                }
                if (typeof tmp !== "function") {
                  if (obj2.checkDNS) {
                    const _TypeError4 = TypeError;
                    const self17 = this;
                    const self18 = this;
                    const typeError = new TypeError("expected callback function for checkDNS option");
                    throw typeError;
                  } else {
                    c0 = null;
                  }
                }
                let errorLevel;
                let valid;
                if (typeof obj2.errorLevel === "number") {
                  const flag = true;
                  errorLevel = true;
                  valid = obj2.errorLevel;
                } else {
                  errorLevel = obj2.errorLevel;
                  valid = valid.diagnoses.valid;
                }
                if (obj2.tldWhitelist) {
                  if (typeof obj2.tldWhitelist === "string") {
                    items = [obj2.tldWhitelist];
                    obj2.tldWhitelist = items;
                  } else if ("object" !== c0(obj2.tldWhitelist)) {
                    let tmp3 = globalThis;
                    const _TypeError = TypeError;
                    const self = this;
                    const str = "expected array or object tldWhitelist";
                    const self2 = this;
                    const typeError1 = new TypeError("expected array or object tldWhitelist");
                    throw typeError1;
                  }
                }
                if (obj2.tldBlacklist) {
                  if (typeof obj2.tldBlacklist === "string") {
                    const items1 = [obj2.tldBlacklist];
                    obj2.tldBlacklist = items1;
                  } else if ("object" !== c0(obj2.tldBlacklist)) {
                    const _TypeError2 = TypeError;
                    const self3 = this;
                    const self4 = this;
                    const typeError2 = new TypeError("expected array or object tldBlacklist");
                    throw typeError2;
                  }
                }
                if (obj2.minDomainAtoms) {
                  const _TypeError3 = TypeError;
                  const self15 = this;
                  const self16 = this;
                  const typeError3 = new TypeError("expected positive integer minDomainAtoms");
                  throw typeError3;
                }
                let obj3 = valid;
                let dnsWarnNoMXRecord = valid.diagnoses.valid;
                function updateResult(arg0) {

                }
                let localpart = valid.components.localpart;
                let localpart2 = valid.components.localpart;
                const items2 = [valid.components.localpart];
                const obj5 = { local: "", domain: "" };
                const obj10 = { locals: [""], domains: [""] };
                let sum2 = 0;
                let num = 0;
                let num2 = 0;
                let flag2 = false;
                let flag3 = false;
                let num3 = 0;
                let num4 = 0;
                let num5 = 0;
                let str3 = "";
                let tmp9 = localpart;
                let num6 = 0;
                let flag4 = false;
                let num7 = 0;
                let num8 = 0;
                if (0 < arg0.length) {
                  while (true) {
                    let contextFWS;
                    let flag5;
                    let tmp26;
                    let num11;
                    let diff;
                    let tmp32;
                    let tmp33;
                    let num10;
                    let num12;
                    let num13;
                    let tmp34;
                    let obj6 = arg0[num2];
                    let obj7 = valid;
                    let tmp13 = num;
                    let tmp15 = flag2;
                    if (valid.components.localpart === localpart) {
                      if ("(" === obj6) {
                        let flag10;
                        if (0 === num4) {
                          let deprecatedComment2;
                          if (0 === num5) {
                            deprecatedComment2 = obj7.diagnoses.cfwsComment;
                          } else {
                            deprecatedComment2 = obj7.diagnoses.deprecatedComment;
                          }
                          flag10 = flag2;
                          if (deprecatedComment2 > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = deprecatedComment2;
                            flag10 = flag2;
                          }
                        } else {
                          let cfwsComment2 = obj7.diagnoses.cfwsComment;
                          flag10 = true;
                          if (cfwsComment2 > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = cfwsComment2;
                            flag10 = true;
                          }
                        }
                        let arr = items2.push(localpart);
                        contextFWS = obj7.components.contextComment;
                        flag5 = flag10;
                        tmp26 = localpart2;
                        num11 = num;
                        diff = num2;
                        tmp32 = obj6;
                        tmp33 = flag3;
                        num10 = num3;
                        num12 = num4;
                        num13 = num5;
                        tmp34 = str3;
                      } else if ("." === obj6) {
                        if (0 === num4) {
                          let errConsecutiveDots2;
                          if (0 === num5) {
                            errConsecutiveDots2 = obj7.diagnoses.errDotStart;
                          } else {
                            errConsecutiveDots2 = obj7.diagnoses.errConsecutiveDots;
                          }
                          tmp26 = localpart2;
                          contextFWS = localpart;
                          num11 = num;
                          diff = num2;
                          tmp32 = obj6;
                          flag5 = flag2;
                          tmp33 = flag3;
                          num10 = num3;
                          num12 = num4;
                          num13 = num5;
                          tmp34 = str3;
                          if (errConsecutiveDots2 > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = errConsecutiveDots2;
                            tmp26 = localpart2;
                            contextFWS = localpart;
                            num11 = num;
                            diff = num2;
                            tmp32 = obj6;
                            flag5 = flag2;
                            tmp33 = flag3;
                            num10 = num3;
                            num12 = num4;
                            num13 = num5;
                            tmp34 = str3;
                          }
                        } else {
                          if (flag2) {
                            let deprecatedLocalPart2 = obj7.diagnoses.deprecatedLocalPart;
                            if (deprecatedLocalPart2 > dnsWarnNoMXRecord) {
                              dnsWarnNoMXRecord = deprecatedLocalPart2;
                            }
                          }
                          let sum = num5 + 1;
                          sum2 = sum;
                          obj5.local = obj5.local + obj6;
                          obj10.locals[sum] = "";
                          tmp26 = localpart2;
                          contextFWS = localpart;
                          num11 = sum;
                          diff = num2;
                          tmp32 = obj6;
                          flag5 = false;
                          tmp33 = flag3;
                          num10 = num3;
                          num12 = 0;
                          num13 = sum;
                          tmp34 = str3;
                        }
                      } else if ("\"" === obj6) {
                        if (0 === num4) {
                          let deprecatedLocalPart;
                          if (0 === num5) {
                            deprecatedLocalPart = obj7.diagnoses.rfc5321QuotedString;
                          } else {
                            deprecatedLocalPart = obj7.diagnoses.deprecatedLocalPart;
                          }
                          if (deprecatedLocalPart > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = deprecatedLocalPart;
                          }
                          obj5.local = obj5.local + obj6;
                          let locals6 = obj10.locals;
                          locals6[num5] = locals6[num5] + obj6;
                          num12 = num4 + 1;
                          let arr2 = items2.push(localpart);
                          contextFWS = obj7.components.contextQuotedString;
                          tmp26 = localpart2;
                          num11 = num;
                          diff = num2;
                          tmp32 = obj6;
                          flag5 = true;
                          tmp33 = flag3;
                          num10 = num3;
                          num13 = num5;
                          tmp34 = str3;
                        } else {
                          let errExpectingATEXT4 = obj7.diagnoses.errExpectingATEXT;
                          tmp26 = localpart2;
                          contextFWS = localpart;
                          num11 = num;
                          diff = num2;
                          tmp32 = obj6;
                          flag5 = flag2;
                          tmp33 = flag3;
                          num10 = num3;
                          num12 = num4;
                          num13 = num5;
                          tmp34 = str3;
                          if (errExpectingATEXT4 > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = errExpectingATEXT4;
                            tmp26 = localpart2;
                            contextFWS = localpart;
                            num11 = num;
                            diff = num2;
                            tmp32 = obj6;
                            flag5 = flag2;
                            tmp33 = flag3;
                            num10 = num3;
                            num12 = num4;
                            num13 = num5;
                            tmp34 = str3;
                          }
                        }
                      } else {
                        let tmp177;
                        if ("\r" === obj6) {
                          let sum1 = num2 + 1;
                          if (length !== sum1) {
                            tmp177 = sum1;
                          }
                          let errCRNoLF6 = obj7.diagnoses.errCRNoLF;
                          tmp26 = localpart2;
                          contextFWS = localpart;
                          num11 = num;
                          diff = sum1;
                          tmp32 = obj6;
                          flag5 = flag2;
                          tmp33 = flag3;
                          num10 = num3;
                          num12 = num4;
                          num13 = num5;
                          tmp34 = str3;
                          if (errCRNoLF6 > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = errCRNoLF6;
                            tmp26 = localpart2;
                            contextFWS = localpart;
                            num11 = num;
                            diff = sum1;
                            tmp32 = obj6;
                            flag5 = flag2;
                            tmp33 = flag3;
                            num10 = num3;
                            num12 = num4;
                            num13 = num5;
                            tmp34 = str3;
                          }
                        } else {
                          tmp177 = num2;
                          if (" " !== obj6) {
                            tmp177 = num2;
                            if ("\t" !== obj6) {
                              if ("@" === obj6) {
                                if (1 !== items2.length) {
                                  let tmp127 = globalThis;
                                  let _Error5 = Error;
                                  let self13 = this;
                                  let str8 = "unexpected item on context stack";
                                  let self14 = this;
                                  let error = new Error("unexpected item on context stack");
                                  throw error;
                                } else {
                                  if (0 === obj5.local.length) {
                                    let errNoLocalPart = obj7.diagnoses.errNoLocalPart;
                                    if (errNoLocalPart > dnsWarnNoMXRecord) {
                                      dnsWarnNoMXRecord = errNoLocalPart;
                                    }
                                  } else if (0 === num4) {
                                    let errDotEnd = obj7.diagnoses.errDotEnd;
                                    if (errDotEnd > dnsWarnNoMXRecord) {
                                      dnsWarnNoMXRecord = errDotEnd;
                                    }
                                  } else if (obj5.local.length > 64) {
                                    let rfc5322LocalTooLong = obj7.diagnoses.rfc5322LocalTooLong;
                                    if (rfc5322LocalTooLong > dnsWarnNoMXRecord) {
                                      dnsWarnNoMXRecord = rfc5322LocalTooLong;
                                    }
                                  } else {
                                    let tmp122 = localpart2 !== obj7.components.contextComment && localpart2 !== obj7.components.contextFWS;
                                    if (!tmp122) {
                                      let deprecatedCFWSNearAt = obj7.diagnoses.deprecatedCFWSNearAt;
                                      if (deprecatedCFWSNearAt > dnsWarnNoMXRecord) {
                                        dnsWarnNoMXRecord = deprecatedCFWSNearAt;
                                      }
                                    }
                                  }
                                  contextFWS = obj7.components.domain;
                                  items2[0] = obj7.components.domain;
                                  sum2 = 0;
                                  tmp26 = localpart2;
                                  num11 = 0;
                                  diff = num2;
                                  tmp32 = obj6;
                                  flag5 = false;
                                  tmp33 = flag3;
                                  num10 = num3;
                                  num12 = 0;
                                  num13 = 0;
                                  tmp34 = str3;
                                }
                              } else if (flag2) {
                                if (obj7.components.contextComment !== localpart2) {
                                  if (obj7.components.contextFWS !== localpart2) {
                                    if (obj7.components.contextQuotedString === localpart2) {
                                      let errATEXTAfterQS = obj7.diagnoses.errATEXTAfterQS;
                                      tmp26 = localpart2;
                                      contextFWS = localpart;
                                      num11 = num;
                                      diff = num2;
                                      tmp32 = obj6;
                                      flag5 = flag2;
                                      tmp33 = flag3;
                                      num10 = num3;
                                      num12 = num4;
                                      num13 = num5;
                                      tmp34 = str3;
                                      if (errATEXTAfterQS > dnsWarnNoMXRecord) {
                                        dnsWarnNoMXRecord = errATEXTAfterQS;
                                        tmp26 = localpart2;
                                        contextFWS = localpart;
                                        num11 = num;
                                        diff = num2;
                                        tmp32 = obj6;
                                        flag5 = flag2;
                                        tmp33 = flag3;
                                        num10 = num3;
                                        num12 = num4;
                                        num13 = num5;
                                        tmp34 = str3;
                                      }
                                    } else {
                                      let tmp117 = globalThis;
                                      let _Error4 = Error;
                                      let str7 = "more atext found where none is allowed, but unrecognized prev context: ";
                                      let self11 = this;
                                      let self12 = this;
                                      let error1 = new Error("more atext found where none is allowed, but unrecognized prev context: " + localpart2);
                                      throw error1;
                                    }
                                  }
                                }
                                let errATEXTAfterCFWS2 = obj7.diagnoses.errATEXTAfterCFWS;
                                tmp26 = localpart2;
                                contextFWS = localpart;
                                num11 = num;
                                diff = num2;
                                tmp32 = obj6;
                                flag5 = flag2;
                                tmp33 = flag3;
                                num10 = num3;
                                num12 = num4;
                                num13 = num5;
                                tmp34 = str3;
                                if (errATEXTAfterCFWS2 > dnsWarnNoMXRecord) {
                                  dnsWarnNoMXRecord = errATEXTAfterCFWS2;
                                  tmp26 = localpart2;
                                  contextFWS = localpart;
                                  num11 = num;
                                  diff = num2;
                                  tmp32 = obj6;
                                  flag5 = flag2;
                                  tmp33 = flag3;
                                  num10 = num3;
                                  num12 = num4;
                                  num13 = num5;
                                  tmp34 = str3;
                                }
                              } else {
                                let charCodeAtResult = obj6.charCodeAt(0);
                                let tmp115 = charCodeAtResult < 33 || charCodeAtResult > 126 || obj7.specials(charCodeAtResult);
                                if (tmp115) {
                                  let errExpectingATEXT3 = obj7.diagnoses.errExpectingATEXT;
                                  if (errExpectingATEXT3 > dnsWarnNoMXRecord) {
                                    dnsWarnNoMXRecord = errExpectingATEXT3;
                                  }
                                }
                                obj5.local = obj5.local + obj6;
                                let locals5 = obj10.locals;
                                locals5[num5] = locals5[num5] + obj6;
                                num12 = num4 + 1;
                                tmp26 = localpart;
                                contextFWS = localpart;
                                num11 = num;
                                diff = num2;
                                tmp32 = obj6;
                                flag5 = flag2;
                                tmp33 = flag3;
                                num10 = num3;
                                num13 = num5;
                                tmp34 = str3;
                              }
                            }
                          }
                        }
                        let flag9 = true;
                        if (0 === num4) {
                          let deprecatedFWS3;
                          if (0 === num5) {
                            deprecatedFWS3 = obj7.diagnoses.cfwsFWS;
                          } else {
                            deprecatedFWS3 = obj7.diagnoses.deprecatedFWS;
                          }
                          flag9 = flag2;
                          if (deprecatedFWS3 > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = deprecatedFWS3;
                            flag9 = flag2;
                          }
                        }
                        let arr3 = items2.push(localpart);
                        contextFWS = obj7.components.contextFWS;
                        flag5 = flag9;
                        tmp26 = localpart2;
                        num11 = num;
                        diff = tmp177;
                        tmp32 = obj6;
                        tmp33 = flag3;
                        num10 = num3;
                        num12 = num4;
                        num13 = num5;
                        tmp34 = obj6;
                      }
                    } else if (obj7.components.domain === localpart) {
                      if ("(" === obj6) {
                        let flag8;
                        if (0 === num4) {
                          let deprecatedComment;
                          if (0 === num5) {
                            deprecatedComment = obj7.diagnoses.deprecatedCFWSNearAt;
                          } else {
                            deprecatedComment = obj7.diagnoses.deprecatedComment;
                          }
                          flag8 = flag2;
                          if (deprecatedComment > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = deprecatedComment;
                            flag8 = flag2;
                          }
                        } else {
                          let cfwsComment = obj7.diagnoses.cfwsComment;
                          flag8 = true;
                          if (cfwsComment > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = cfwsComment;
                            flag8 = true;
                          }
                        }
                        let arr5 = items2.push(localpart);
                        contextFWS = obj7.components.contextComment;
                        flag5 = flag8;
                        tmp26 = localpart2;
                        num11 = num;
                        diff = num2;
                        tmp32 = obj6;
                        tmp33 = flag3;
                        num10 = num3;
                        num12 = num4;
                        num13 = num5;
                        tmp34 = str3;
                      } else if ("." === obj6) {
                        if (0 === num4) {
                          let errConsecutiveDots;
                          if (0 === num5) {
                            errConsecutiveDots = obj7.diagnoses.errDotStart;
                          } else {
                            errConsecutiveDots = obj7.diagnoses.errConsecutiveDots;
                          }
                          if (errConsecutiveDots > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = errConsecutiveDots;
                          }
                        } else if (flag3) {
                          let errDomainHyphenEnd = obj7.diagnoses.errDomainHyphenEnd;
                          if (errDomainHyphenEnd > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = errDomainHyphenEnd;
                          }
                        } else if (63 < num4) {
                          let rfc5322LabelTooLong = obj7.diagnoses.rfc5322LabelTooLong;
                          if (rfc5322LabelTooLong > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = rfc5322LabelTooLong;
                          }
                        }
                        sum2 = num5 + 1;
                        obj10.domains[sum2] = "";
                        obj5.domain = obj5.domain + obj6;
                        tmp26 = localpart2;
                        contextFWS = localpart;
                        num11 = sum2;
                        diff = num2;
                        tmp32 = obj6;
                        flag5 = false;
                        tmp33 = flag3;
                        num10 = num3;
                        num12 = 0;
                        num13 = sum2;
                        tmp34 = str3;
                      } else if ("[" === obj6) {
                        if (0 === obj5.domain.length) {
                          num12 = num4 + 1;
                          let arr6 = items2.push(localpart);
                          contextFWS = obj7.components.literal;
                          obj5.domain = obj5.domain + obj6;
                          let domains5 = obj10.domains;
                          domains5[num5] = domains5[num5] + obj6;
                          obj5.literal = "";
                          tmp26 = localpart2;
                          num11 = num;
                          diff = num2;
                          tmp32 = obj6;
                          flag5 = true;
                          tmp33 = flag3;
                          num10 = num3;
                          num13 = num5;
                          tmp34 = str3;
                        } else {
                          let errExpectingATEXT2 = obj7.diagnoses.errExpectingATEXT;
                          tmp26 = localpart2;
                          contextFWS = localpart;
                          num11 = num;
                          diff = num2;
                          tmp32 = obj6;
                          flag5 = flag2;
                          tmp33 = flag3;
                          num10 = num3;
                          num12 = num4;
                          num13 = num5;
                          tmp34 = str3;
                          if (errExpectingATEXT2 > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = errExpectingATEXT2;
                            tmp26 = localpart2;
                            contextFWS = localpart;
                            num11 = num;
                            diff = num2;
                            tmp32 = obj6;
                            flag5 = flag2;
                            tmp33 = flag3;
                            num10 = num3;
                            num12 = num4;
                            num13 = num5;
                            tmp34 = str3;
                          }
                        }
                      } else {
                        let tmp176;
                        let flag7;
                        if ("\r" === obj6) {
                          let sum3 = num2 + 1;
                          if (length !== sum3) {
                            tmp176 = sum3;
                          }
                          let errCRNoLF5 = obj7.diagnoses.errCRNoLF;
                          tmp26 = localpart2;
                          contextFWS = localpart;
                          num11 = num;
                          diff = sum3;
                          tmp32 = obj6;
                          flag5 = flag2;
                          tmp33 = flag3;
                          num10 = num3;
                          num12 = num4;
                          num13 = num5;
                          tmp34 = str3;
                          if (errCRNoLF5 > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = errCRNoLF5;
                            tmp26 = localpart2;
                            contextFWS = localpart;
                            num11 = num;
                            diff = sum3;
                            tmp32 = obj6;
                            flag5 = flag2;
                            tmp33 = flag3;
                            num10 = num3;
                            num12 = num4;
                            num13 = num5;
                            tmp34 = str3;
                          }
                        } else {
                          tmp176 = num2;
                          if (" " !== obj6) {
                            tmp176 = num2;
                            if ("\t" !== obj6) {
                              let flag6;
                              if (flag2) {
                                if (obj7.components.contextComment !== localpart2) {
                                  if (obj7.components.contextFWS !== localpart2) {
                                    if (obj7.components.literal !== localpart2) {
                                      break;
                                    } else {
                                      let errATEXTAfterDomainLiteral = obj7.diagnoses.errATEXTAfterDomainLiteral;
                                      if (errATEXTAfterDomainLiteral > dnsWarnNoMXRecord) {
                                        dnsWarnNoMXRecord = errATEXTAfterDomainLiteral;
                                      }
                                    }
                                  }
                                }
                                let errATEXTAfterCFWS = obj7.diagnoses.errATEXTAfterCFWS;
                                if (errATEXTAfterCFWS > dnsWarnNoMXRecord) {
                                  dnsWarnNoMXRecord = errATEXTAfterCFWS;
                                }
                              }
                              let charCodeAtResult1 = obj6.charCodeAt(0);
                              if (charCodeAtResult1 >= 33) {
                                if (charCodeAtResult1 <= 126) {
                                  if (!obj7.specials(charCodeAtResult1)) {
                                    if ("-" === obj6) {
                                      flag6 = true;
                                      if (0 === num4) {
                                        let errDomainHyphenStart = obj7.diagnoses.errDomainHyphenStart;
                                        flag6 = true;
                                        if (errDomainHyphenStart > dnsWarnNoMXRecord) {
                                          dnsWarnNoMXRecord = errDomainHyphenStart;
                                          flag6 = true;
                                        }
                                      }
                                    } else {
                                      let tmp94 = charCodeAtResult1 < 48 || charCodeAtResult1 > 122;
                                      if (!tmp94) {
                                        let tmp95 = charCodeAtResult1 > 57 && charCodeAtResult1 < 65;
                                        tmp94 = tmp95;
                                      }
                                      if (!tmp94) {
                                        let tmp96 = charCodeAtResult1 > 90 && charCodeAtResult1 < 97;
                                        tmp94 = tmp96;
                                      }
                                      flag6 = false;
                                      if (tmp94) {
                                        let rfc5322Domain = obj7.diagnoses.rfc5322Domain;
                                        flag6 = false;
                                        if (rfc5322Domain > dnsWarnNoMXRecord) {
                                          dnsWarnNoMXRecord = rfc5322Domain;
                                          flag6 = false;
                                        }
                                      }
                                    }
                                  }
                                  obj5.domain = obj5.domain + obj6;
                                  let domains4 = obj10.domains;
                                  domains4[num5] = domains4[num5] + obj6;
                                  num12 = num4 + 1;
                                  tmp33 = flag6;
                                  tmp26 = localpart2;
                                  contextFWS = localpart;
                                  num11 = num;
                                  diff = num2;
                                  tmp32 = obj6;
                                  flag5 = flag2;
                                  num10 = num3;
                                  num13 = num5;
                                  tmp34 = str3;
                                }
                              }
                              let errExpectingATEXT = obj7.diagnoses.errExpectingATEXT;
                              flag6 = false;
                              if (errExpectingATEXT > dnsWarnNoMXRecord) {
                                dnsWarnNoMXRecord = errExpectingATEXT;
                                flag6 = false;
                              }
                            }
                          }
                        }
                        if (0 === num4) {
                          let deprecatedFWS2;
                          if (0 === num5) {
                            deprecatedFWS2 = obj7.diagnoses.deprecatedCFWSNearAt;
                          } else {
                            deprecatedFWS2 = obj7.diagnoses.deprecatedFWS;
                          }
                          flag7 = flag2;
                          if (deprecatedFWS2 > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = deprecatedFWS2;
                            flag7 = flag2;
                          }
                        } else {
                          let cfwsFWS4 = obj7.diagnoses.cfwsFWS;
                          flag7 = true;
                          if (cfwsFWS4 > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = cfwsFWS4;
                            flag7 = true;
                          }
                        }
                        let arr20 = items2.push(localpart);
                        contextFWS = obj7.components.contextFWS;
                        flag5 = flag7;
                        tmp26 = localpart2;
                        num11 = num;
                        diff = tmp176;
                        tmp32 = obj6;
                        tmp33 = flag3;
                        num10 = num3;
                        num12 = num4;
                        num13 = num5;
                        tmp34 = obj6;
                      }
                    } else if (obj7.components.literal === localpart) {
                      if ("]" === obj6) {
                        if (dnsWarnNoMXRecord < obj7.categories.deprecated) {
                          let literal = obj5.literal;
                          let ipV4 = obj7.regex.ipV4;
                          let match = ipV4.exec(literal);
                          let num14 = -1;
                          let tmp76 = match;
                          if (tmp76) {
                            let index = match.index;
                            tmp76 = 0 !== index;
                            num14 = index;
                          }
                          let text = literal;
                          if (tmp76) {
                            text = `${arr4.slice(0, num14)}0:0`;
                          }
                          if (0 === num14) {
                            let rfc5321AddressLiteral2 = obj7.diagnoses.rfc5321AddressLiteral;
                            if (rfc5321AddressLiteral2 > dnsWarnNoMXRecord) {
                              dnsWarnNoMXRecord = rfc5321AddressLiteral2;
                            }
                          } else {
                            let str13 = text.slice(0, 5);
                            if ("ipv6:" !== str13.toLowerCase()) {
                              let rfc5322DomainLiteral2 = obj7.diagnoses.rfc5322DomainLiteral;
                              if (rfc5322DomainLiteral2 > dnsWarnNoMXRecord) {
                                dnsWarnNoMXRecord = rfc5322DomainLiteral2;
                              }
                            } else {
                              let str14 = text.slice(5);
                              let maxIPv6Groups = obj7.maxIPv6Groups;
                              let parts = str14.split(":");
                              let index1 = str14.indexOf("::");
                              if (~index1) {
                                if (index1 !== str14.lastIndexOf("::")) {
                                  let rfc5322IPv62x2xColon = obj7.diagnoses.rfc5322IPv62x2xColon;
                                  if (rfc5322IPv62x2xColon > dnsWarnNoMXRecord) {
                                    dnsWarnNoMXRecord = rfc5322IPv62x2xColon;
                                  }
                                } else {
                                  let tmp77 = 0 !== index1 && index1 !== str14.length - 2;
                                  let sum4 = maxIPv6Groups;
                                  if (!tmp77) {
                                    sum4 = maxIPv6Groups + 1;
                                  }
                                  if (parts.length > sum4) {
                                    let rfc5322IPv6MaxGroups = obj7.diagnoses.rfc5322IPv6MaxGroups;
                                    if (rfc5322IPv6MaxGroups > dnsWarnNoMXRecord) {
                                      dnsWarnNoMXRecord = rfc5322IPv6MaxGroups;
                                    }
                                  } else if (parts.length === sum4) {
                                    let deprecatedIPv6 = obj7.diagnoses.deprecatedIPv6;
                                    if (deprecatedIPv6 > dnsWarnNoMXRecord) {
                                      dnsWarnNoMXRecord = deprecatedIPv6;
                                    }
                                  }
                                }
                              } else if (parts.length !== maxIPv6Groups) {
                                let rfc5322IPv6GroupCount = obj7.diagnoses.rfc5322IPv6GroupCount;
                                if (rfc5322IPv6GroupCount > dnsWarnNoMXRecord) {
                                  dnsWarnNoMXRecord = rfc5322IPv6GroupCount;
                                }
                              }
                              if (":" === str14[0]) {
                                if (":" !== str14[1]) {
                                  let rfc5322IPv6ColonStart = obj7.diagnoses.rfc5322IPv6ColonStart;
                                  if (rfc5322IPv6ColonStart > dnsWarnNoMXRecord) {
                                    dnsWarnNoMXRecord = rfc5322IPv6ColonStart;
                                  }
                                }
                              }
                              if (":" === str14[str14.length - 1]) {
                                if (":" !== str14[str14.length - 2]) {
                                  let rfc5322IPv6ColonEnd = obj7.diagnoses.rfc5322IPv6ColonEnd;
                                  if (rfc5322IPv6ColonEnd > dnsWarnNoMXRecord) {
                                    dnsWarnNoMXRecord = rfc5322IPv6ColonEnd;
                                  }
                                }
                              }
                              let diagnoses = obj7.diagnoses;
                              if (obj7.checkIpV6(parts)) {
                                let rfc5321AddressLiteral = diagnoses.rfc5321AddressLiteral;
                                if (rfc5321AddressLiteral > dnsWarnNoMXRecord) {
                                  dnsWarnNoMXRecord = rfc5321AddressLiteral;
                                }
                              } else {
                                let rfc5322IPv6BadCharacter = diagnoses.rfc5322IPv6BadCharacter;
                                if (rfc5322IPv6BadCharacter > dnsWarnNoMXRecord) {
                                  dnsWarnNoMXRecord = rfc5322IPv6BadCharacter;
                                }
                              }
                            }
                          }
                        } else {
                          let rfc5322DomainLiteral = obj7.diagnoses.rfc5322DomainLiteral;
                          if (rfc5322DomainLiteral > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = rfc5322DomainLiteral;
                          }
                        }
                        obj5.domain = obj5.domain + obj6;
                        let domains3 = obj10.domains;
                        domains3[num5] = domains3[num5] + obj6;
                        num12 = num4 + 1;
                        contextFWS = items2.pop();
                        tmp26 = localpart;
                        num11 = num;
                        diff = num2;
                        tmp32 = obj6;
                        flag5 = flag2;
                        tmp33 = flag3;
                        num10 = num3;
                        num13 = num5;
                        tmp34 = str3;
                      } else if ("\\" === obj6) {
                        let rfc5322DomainLiteralOBSDText2 = obj7.diagnoses.rfc5322DomainLiteralOBSDText;
                        if (rfc5322DomainLiteralOBSDText2 > dnsWarnNoMXRecord) {
                          dnsWarnNoMXRecord = rfc5322DomainLiteralOBSDText2;
                        }
                        let arr21 = items2.push(localpart);
                        contextFWS = obj7.components.contextQuotedPair;
                        tmp26 = localpart2;
                        num11 = num;
                        diff = num2;
                        tmp32 = obj6;
                        flag5 = flag2;
                        tmp33 = flag3;
                        num10 = num3;
                        num12 = num4;
                        num13 = num5;
                        tmp34 = str3;
                      } else {
                        let tmp67;
                        if ("\r" === obj6) {
                          let sum5 = num2 + 1;
                          if (length !== sum5) {
                            tmp67 = sum5;
                          }
                          let errCRNoLF4 = obj7.diagnoses.errCRNoLF;
                          tmp26 = localpart2;
                          contextFWS = localpart;
                          num11 = num;
                          diff = sum5;
                          tmp32 = obj6;
                          flag5 = flag2;
                          tmp33 = flag3;
                          num10 = num3;
                          num12 = num4;
                          num13 = num5;
                          tmp34 = str3;
                          if (errCRNoLF4 > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = errCRNoLF4;
                            tmp26 = localpart2;
                            contextFWS = localpart;
                            num11 = num;
                            diff = sum5;
                            tmp32 = obj6;
                            flag5 = flag2;
                            tmp33 = flag3;
                            num10 = num3;
                            num12 = num4;
                            num13 = num5;
                            tmp34 = str3;
                          }
                        } else {
                          tmp67 = num2;
                          if (" " !== obj6) {
                            tmp67 = num2;
                            if ("\t" !== obj6) {
                              let charCodeAtResult2 = obj6.charCodeAt(0);
                              if (charCodeAtResult2 <= 127) {
                                if (0 !== charCodeAtResult2) {
                                  if ("[" !== obj6) {
                                    let tmp63 = charCodeAtResult2 < 33 || 127 === charCodeAtResult2;
                                    if (tmp63) {
                                      let rfc5322DomainLiteralOBSDText = obj7.diagnoses.rfc5322DomainLiteralOBSDText;
                                      if (rfc5322DomainLiteralOBSDText > dnsWarnNoMXRecord) {
                                        dnsWarnNoMXRecord = rfc5322DomainLiteralOBSDText;
                                      }
                                    }
                                    obj5.literal = obj5.literal + obj6;
                                    obj5.domain = obj5.domain + obj6;
                                    let domains2 = obj10.domains;
                                    domains2[num5] = domains2[num5] + obj6;
                                    num12 = num4 + 1;
                                    tmp26 = localpart2;
                                    contextFWS = localpart;
                                    num11 = num;
                                    diff = num2;
                                    tmp32 = obj6;
                                    flag5 = flag2;
                                    tmp33 = flag3;
                                    num10 = num3;
                                    num13 = num5;
                                    tmp34 = str3;
                                  }
                                }
                              }
                              let errExpectingDTEXT = obj7.diagnoses.errExpectingDTEXT;
                              tmp26 = localpart2;
                              contextFWS = localpart;
                              num11 = num;
                              diff = num2;
                              tmp32 = obj6;
                              flag5 = flag2;
                              tmp33 = flag3;
                              num10 = num3;
                              num12 = num4;
                              num13 = num5;
                              tmp34 = str3;
                              if (errExpectingDTEXT > dnsWarnNoMXRecord) {
                                dnsWarnNoMXRecord = errExpectingDTEXT;
                                tmp26 = localpart2;
                                contextFWS = localpart;
                                num11 = num;
                                diff = num2;
                                tmp32 = obj6;
                                flag5 = flag2;
                                tmp33 = flag3;
                                num10 = num3;
                                num12 = num4;
                                num13 = num5;
                                tmp34 = str3;
                              }
                            }
                          }
                        }
                        let cfwsFWS3 = obj7.diagnoses.cfwsFWS;
                        if (cfwsFWS3 > dnsWarnNoMXRecord) {
                          dnsWarnNoMXRecord = cfwsFWS3;
                        }
                        let arr22 = items2.push(localpart);
                        contextFWS = obj7.components.contextFWS;
                        tmp26 = localpart2;
                        num11 = num;
                        diff = tmp67;
                        tmp32 = obj6;
                        flag5 = flag2;
                        tmp33 = flag3;
                        num10 = num3;
                        num12 = num4;
                        num13 = num5;
                        tmp34 = obj6;
                      }
                    } else if (obj7.components.contextQuotedString === localpart) {
                      if ("\\" === obj6) {
                        let arr23 = items2.push(localpart);
                        contextFWS = obj7.components.contextQuotedPair;
                        tmp26 = localpart2;
                        num11 = num;
                        diff = num2;
                        tmp32 = obj6;
                        flag5 = flag2;
                        tmp33 = flag3;
                        num10 = num3;
                        num12 = num4;
                        num13 = num5;
                        tmp34 = str3;
                      } else {
                        let tmp171;
                        if ("\r" === obj6) {
                          let sum6 = num2 + 1;
                          if (length !== sum6) {
                            tmp171 = sum6;
                          }
                          let errCRNoLF3 = obj7.diagnoses.errCRNoLF;
                          tmp26 = localpart2;
                          contextFWS = localpart;
                          num11 = num;
                          diff = sum6;
                          tmp32 = obj6;
                          flag5 = flag2;
                          tmp33 = flag3;
                          num10 = num3;
                          num12 = num4;
                          num13 = num5;
                          tmp34 = str3;
                          if (errCRNoLF3 > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = errCRNoLF3;
                            tmp26 = localpart2;
                            contextFWS = localpart;
                            num11 = num;
                            diff = sum6;
                            tmp32 = obj6;
                            flag5 = flag2;
                            tmp33 = flag3;
                            num10 = num3;
                            num12 = num4;
                            num13 = num5;
                            tmp34 = str3;
                          }
                        } else {
                          tmp171 = num2;
                          if ("\t" !== obj6) {
                            if ("\"" === obj6) {
                              obj5.local = obj5.local + obj6;
                              let locals3 = obj10.locals;
                              locals3[num5] = locals3[num5] + obj6;
                              num12 = num4 + 1;
                              contextFWS = items2.pop();
                              tmp26 = localpart;
                              num11 = num;
                              diff = num2;
                              tmp32 = obj6;
                              flag5 = flag2;
                              tmp33 = flag3;
                              num10 = num3;
                              num13 = num5;
                              tmp34 = str3;
                            } else {
                              let charCodeAtResult3 = obj6.charCodeAt(0);
                              if (charCodeAtResult3 <= 127) {
                                if (0 !== charCodeAtResult3) {
                                  if (10 !== charCodeAtResult3) {
                                    let tmp55 = charCodeAtResult3 < 32 || 127 === charCodeAtResult3;
                                    if (tmp55) {
                                      let deprecatedQTEXT = obj7.diagnoses.deprecatedQTEXT;
                                      if (deprecatedQTEXT > dnsWarnNoMXRecord) {
                                        dnsWarnNoMXRecord = deprecatedQTEXT;
                                      }
                                    }
                                  }
                                  obj5.local = obj5.local + obj6;
                                  let locals2 = obj10.locals;
                                  locals2[num5] = locals2[num5] + obj6;
                                  num12 = num4 + 1;
                                  tmp26 = localpart2;
                                  contextFWS = localpart;
                                  num11 = num;
                                  diff = num2;
                                  tmp32 = obj6;
                                  flag5 = flag2;
                                  tmp33 = flag3;
                                  num10 = num3;
                                  num13 = num5;
                                  tmp34 = str3;
                                }
                              }
                              let errExpectingQTEXT = obj7.diagnoses.errExpectingQTEXT;
                              if (errExpectingQTEXT > dnsWarnNoMXRecord) {
                                dnsWarnNoMXRecord = errExpectingQTEXT;
                              }
                            }
                          }
                        }
                        obj5.local = `${obj4.local} `;
                        let locals4 = obj10.locals;
                        locals4[num5] = `${locals4[num5]} `;
                        let cfwsFWS2 = obj7.diagnoses.cfwsFWS;
                        if (cfwsFWS2 > dnsWarnNoMXRecord) {
                          dnsWarnNoMXRecord = cfwsFWS2;
                        }
                        num12 = num4 + 1;
                        let arr24 = items2.push(localpart);
                        contextFWS = obj7.components.contextFWS;
                        tmp26 = localpart2;
                        num11 = num;
                        diff = tmp171;
                        tmp32 = obj6;
                        flag5 = flag2;
                        tmp33 = flag3;
                        num10 = num3;
                        num13 = num5;
                        tmp34 = obj6;
                      }
                    } else if (obj7.components.contextQuotedPair === localpart) {
                      let charCodeAtResult4 = obj6.charCodeAt(0);
                      if (charCodeAtResult4 > 127) {
                        let errExpectingQPair = obj7.diagnoses.errExpectingQPair;
                        if (errExpectingQPair > dnsWarnNoMXRecord) {
                          dnsWarnNoMXRecord = errExpectingQPair;
                        }
                      } else {
                        let tmp47 = charCodeAtResult4 < 31 && 9 !== charCodeAtResult4 || 127 === charCodeAtResult4;
                        if (tmp47) {
                          let deprecatedQP = obj7.diagnoses.deprecatedQP;
                          if (deprecatedQP > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = deprecatedQP;
                          }
                        }
                      }
                      let arr25 = items2.pop();
                      let text1 = `\\${obj6}`;
                      tmp26 = localpart;
                      contextFWS = arr25;
                      num11 = num;
                      diff = num2;
                      tmp32 = text1;
                      flag5 = flag2;
                      tmp33 = flag3;
                      num10 = num3;
                      num12 = num4;
                      num13 = num5;
                      tmp34 = str3;
                      if (obj7.components.contextComment !== arr25) {
                        if (obj7.components.contextQuotedString === arr25) {
                          obj5.local = obj5.local + `\\${obj6}`;
                          let locals = obj10.locals;
                          locals[num5] = locals[num5] + `\\${obj6}`;
                          num12 = num4 + 2;
                          tmp26 = localpart;
                          contextFWS = arr25;
                          num11 = num;
                          diff = num2;
                          tmp32 = text1;
                          flag5 = flag2;
                          tmp33 = flag3;
                          num10 = num3;
                          num13 = num5;
                          tmp34 = str3;
                        } else if (obj7.components.literal === arr25) {
                          obj5.domain = obj5.domain + `\\${obj6}`;
                          let domains = obj10.domains;
                          domains[num5] = domains[num5] + `\\${obj6}`;
                          num12 = num4 + 2;
                          tmp26 = localpart;
                          contextFWS = arr25;
                          num11 = num;
                          diff = num2;
                          tmp32 = text1;
                          flag5 = flag2;
                          tmp33 = flag3;
                          num10 = num3;
                          num13 = num5;
                          tmp34 = str3;
                        } else {
                          let tmp52 = globalThis;
                          let _Error2 = Error;
                          let str5 = "quoted pair logic invoked in an invalid context: ";
                          let self7 = this;
                          let self8 = this;
                          let error2 = new Error("quoted pair logic invoked in an invalid context: " + arr25);
                          throw error2;
                        }
                      }
                    } else if (obj7.components.contextComment === localpart) {
                      if ("(" === obj6) {
                        let arr26 = items2.push(localpart);
                        contextFWS = obj7.components.contextComment;
                        tmp26 = localpart2;
                        num11 = num;
                        diff = num2;
                        tmp32 = obj6;
                        flag5 = flag2;
                        tmp33 = flag3;
                        num10 = num3;
                        num12 = num4;
                        num13 = num5;
                        tmp34 = str3;
                      } else if (")" === obj6) {
                        contextFWS = items2.pop();
                        tmp26 = localpart;
                        num11 = num;
                        diff = num2;
                        tmp32 = obj6;
                        flag5 = flag2;
                        tmp33 = flag3;
                        num10 = num3;
                        num12 = num4;
                        num13 = num5;
                        tmp34 = str3;
                      } else if ("\\" === obj6) {
                        let arr27 = items2.push(localpart);
                        contextFWS = obj7.components.contextQuotedPair;
                        tmp26 = localpart2;
                        num11 = num;
                        diff = num2;
                        tmp32 = obj6;
                        flag5 = flag2;
                        tmp33 = flag3;
                        num10 = num3;
                        num12 = num4;
                        num13 = num5;
                        tmp34 = str3;
                      } else {
                        let tmp40;
                        if ("\r" === obj6) {
                          let sum7 = num2 + 1;
                          if (length !== sum7) {
                            tmp40 = sum7;
                          }
                          let errCRNoLF2 = obj7.diagnoses.errCRNoLF;
                          tmp26 = localpart2;
                          contextFWS = localpart;
                          num11 = num;
                          diff = sum7;
                          tmp32 = obj6;
                          flag5 = flag2;
                          tmp33 = flag3;
                          num10 = num3;
                          num12 = num4;
                          num13 = num5;
                          tmp34 = str3;
                          if (errCRNoLF2 > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = errCRNoLF2;
                            tmp26 = localpart2;
                            contextFWS = localpart;
                            num11 = num;
                            diff = sum7;
                            tmp32 = obj6;
                            flag5 = flag2;
                            tmp33 = flag3;
                            num10 = num3;
                            num12 = num4;
                            num13 = num5;
                            tmp34 = str3;
                          }
                        } else {
                          tmp40 = num2;
                          if (" " !== obj6) {
                            tmp40 = num2;
                            if ("\t" !== obj6) {
                              let charCodeAtResult5 = obj6.charCodeAt(0);
                              if (charCodeAtResult5 <= 127) {
                                if (0 !== charCodeAtResult5) {
                                  if (10 !== charCodeAtResult5) {
                                    let tmp36 = charCodeAtResult5 < 32 || 127 === charCodeAtResult5;
                                    tmp26 = localpart2;
                                    contextFWS = localpart;
                                    num11 = num;
                                    diff = num2;
                                    tmp32 = obj6;
                                    flag5 = flag2;
                                    tmp33 = flag3;
                                    num10 = num3;
                                    num12 = num4;
                                    num13 = num5;
                                    tmp34 = str3;
                                    if (tmp36) {
                                      let deprecatedCTEXT = obj7.diagnoses.deprecatedCTEXT;
                                      tmp26 = localpart2;
                                      contextFWS = localpart;
                                      num11 = num;
                                      diff = num2;
                                      tmp32 = obj6;
                                      flag5 = flag2;
                                      tmp33 = flag3;
                                      num10 = num3;
                                      num12 = num4;
                                      num13 = num5;
                                      tmp34 = str3;
                                      if (deprecatedCTEXT > dnsWarnNoMXRecord) {
                                        dnsWarnNoMXRecord = deprecatedCTEXT;
                                        tmp26 = localpart2;
                                        contextFWS = localpart;
                                        num11 = num;
                                        diff = num2;
                                        tmp32 = obj6;
                                        flag5 = flag2;
                                        tmp33 = flag3;
                                        num10 = num3;
                                        num12 = num4;
                                        num13 = num5;
                                        tmp34 = str3;
                                      }
                                    }
                                  }
                                }
                              }
                              let errExpectingCTEXT = obj7.diagnoses.errExpectingCTEXT;
                              tmp26 = localpart2;
                              contextFWS = localpart;
                              num11 = num;
                              diff = num2;
                              tmp32 = obj6;
                              flag5 = flag2;
                              tmp33 = flag3;
                              num10 = num3;
                              num12 = num4;
                              num13 = num5;
                              tmp34 = str3;
                              if (errExpectingCTEXT > dnsWarnNoMXRecord) {
                                dnsWarnNoMXRecord = errExpectingCTEXT;
                                tmp26 = localpart2;
                                contextFWS = localpart;
                                num11 = num;
                                diff = num2;
                                tmp32 = obj6;
                                flag5 = flag2;
                                tmp33 = flag3;
                                num10 = num3;
                                num12 = num4;
                                num13 = num5;
                                tmp34 = str3;
                              }
                            }
                          }
                        }
                        let cfwsFWS = obj7.diagnoses.cfwsFWS;
                        if (cfwsFWS > dnsWarnNoMXRecord) {
                          dnsWarnNoMXRecord = cfwsFWS;
                        }
                        let arr28 = items2.push(localpart);
                        contextFWS = obj7.components.contextFWS;
                        tmp26 = localpart2;
                        num11 = num;
                        diff = tmp40;
                        tmp32 = obj6;
                        flag5 = flag2;
                        tmp33 = flag3;
                        num10 = num3;
                        num12 = num4;
                        num13 = num5;
                        tmp34 = obj6;
                      }
                    } else if (obj7.components.contextFWS === localpart) {
                      let tmp24 = "\r" === str3;
                      let num9 = num3;
                      if (!tmp24) {
                        if ("\r" === obj6) {
                          let sum8 = num2 + 1;
                          let tmp30 = length !== sum8 && "\n" === arg0[sum8];
                          tmp26 = localpart2;
                          contextFWS = localpart;
                          diff = sum8;
                          num10 = num9;
                          if (!tmp30) {
                            let errCRNoLF = obj7.diagnoses.errCRNoLF;
                            tmp26 = localpart2;
                            contextFWS = localpart;
                            diff = sum8;
                            num10 = num9;
                            if (errCRNoLF > dnsWarnNoMXRecord) {
                              dnsWarnNoMXRecord = errCRNoLF;
                              tmp26 = localpart2;
                              contextFWS = localpart;
                              diff = sum8;
                              num10 = num9;
                            }
                          }
                        } else {
                          tmp26 = localpart2;
                          contextFWS = localpart;
                          diff = num2;
                          num10 = num9;
                          if (" " !== obj6) {
                            tmp26 = localpart2;
                            contextFWS = localpart;
                            diff = num2;
                            num10 = num9;
                            if ("\t" !== obj6) {
                              if (tmp24) {
                                let errFWSCRLFEnd = obj7.diagnoses.errFWSCRLFEnd;
                                if (errFWSCRLFEnd > dnsWarnNoMXRecord) {
                                  dnsWarnNoMXRecord = errFWSCRLFEnd;
                                }
                              }
                              contextFWS = items2.pop();
                              diff = num2 - 1;
                              tmp26 = localpart;
                              num10 = 0;
                            }
                          }
                        }
                        num11 = num;
                        tmp32 = obj6;
                        flag5 = flag2;
                        tmp33 = flag3;
                        num12 = num4;
                        num13 = num5;
                        tmp34 = obj6;
                      } else if ("\r" === obj6) {
                        let errFWSCRLFx2 = obj7.diagnoses.errFWSCRLFx2;
                        tmp26 = localpart2;
                        contextFWS = localpart;
                        num11 = num;
                        diff = num2;
                        tmp32 = obj6;
                        flag5 = flag2;
                        tmp33 = flag3;
                        num10 = num3;
                        num12 = num4;
                        num13 = num5;
                        tmp34 = str3;
                        if (errFWSCRLFx2 > dnsWarnNoMXRecord) {
                          dnsWarnNoMXRecord = errFWSCRLFx2;
                          tmp26 = localpart2;
                          contextFWS = localpart;
                          num11 = num;
                          diff = num2;
                          tmp32 = obj6;
                          flag5 = flag2;
                          tmp33 = flag3;
                          num10 = num3;
                          num12 = num4;
                          num13 = num5;
                          tmp34 = str3;
                        }
                      } else {
                        let sum9 = num3 + 1;
                        num9 = 1;
                        if (1 < sum9) {
                          let deprecatedFWS = obj7.diagnoses.deprecatedFWS;
                          num9 = sum9;
                          if (deprecatedFWS > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = deprecatedFWS;
                            num9 = sum9;
                          }
                        }
                      }
                    } else {
                      let tmp21 = globalThis;
                      let _Error = Error;
                      let str4 = "unknown context: ";
                      let self5 = this;
                      let self6 = this;
                      let error3 = new Error("unknown context: " + localpart);
                      throw error3;
                    }
                    tmp9 = contextFWS;
                    num6 = num11;
                    tmp10 = tmp32;
                    flag4 = tmp33;
                    num7 = num12;
                    num8 = num13;
                    obj3 = obj7;
                    if (dnsWarnNoMXRecord <= obj7.categories.rfc5322) {
                      num2 = diff + 1;
                      localpart2 = tmp26;
                      localpart = contextFWS;
                      num = num11;
                      flag2 = flag5;
                      flag3 = tmp33;
                      num3 = num10;
                      num4 = num12;
                      num5 = num13;
                      str3 = tmp34;
                      tmp9 = contextFWS;
                      num6 = num11;
                      tmp10 = tmp32;
                      flag4 = tmp33;
                      num7 = num12;
                      num8 = num13;
                      obj3 = obj7;
                    }
                  }
                  const _Error3 = Error;
                  const self9 = this;
                  const self10 = this;
                  const error4 = new Error("more atext found where none is allowed, but unrecognized prev context: " + localpart2);
                  throw error4;
                }
                if (dnsWarnNoMXRecord < obj3.categories.rfc5322) {
                  if (tmp9 === obj3.components.contextQuotedString) {
                    const errUnclosedQuotedString = obj3.diagnoses.errUnclosedQuotedString;
                    if (errUnclosedQuotedString > dnsWarnNoMXRecord) {
                      dnsWarnNoMXRecord = errUnclosedQuotedString;
                    }
                  } else if (tmp9 === obj3.components.contextQuotedPair) {
                    const errBackslashEnd = obj3.diagnoses.errBackslashEnd;
                    if (errBackslashEnd > dnsWarnNoMXRecord) {
                      dnsWarnNoMXRecord = errBackslashEnd;
                    }
                  } else if (tmp9 === obj3.components.contextComment) {
                    const errUnclosedComment = obj3.diagnoses.errUnclosedComment;
                    if (errUnclosedComment > dnsWarnNoMXRecord) {
                      dnsWarnNoMXRecord = errUnclosedComment;
                    }
                  } else if (tmp9 === obj3.components.literal) {
                    const errUnclosedDomainLiteral = obj3.diagnoses.errUnclosedDomainLiteral;
                    if (errUnclosedDomainLiteral > dnsWarnNoMXRecord) {
                      dnsWarnNoMXRecord = errUnclosedDomainLiteral;
                    }
                  } else if ("\r" === tmp10) {
                    const errFWSCRLFEnd2 = obj3.diagnoses.errFWSCRLFEnd;
                    if (errFWSCRLFEnd2 > dnsWarnNoMXRecord) {
                      dnsWarnNoMXRecord = errFWSCRLFEnd2;
                    }
                  } else if (0 === obj5.domain.length) {
                    const errNoDomain = obj3.diagnoses.errNoDomain;
                    if (errNoDomain > dnsWarnNoMXRecord) {
                      dnsWarnNoMXRecord = errNoDomain;
                    }
                  } else if (0 === num7) {
                    const errDotEnd2 = obj3.diagnoses.errDotEnd;
                    if (errDotEnd2 > dnsWarnNoMXRecord) {
                      dnsWarnNoMXRecord = errDotEnd2;
                    }
                  } else if (flag4) {
                    const errDomainHyphenEnd2 = obj3.diagnoses.errDomainHyphenEnd;
                    if (errDomainHyphenEnd2 > dnsWarnNoMXRecord) {
                      dnsWarnNoMXRecord = errDomainHyphenEnd2;
                    }
                  } else if (obj5.domain.length > 255) {
                    const rfc5322DomainTooLong = obj3.diagnoses.rfc5322DomainTooLong;
                    if (rfc5322DomainTooLong > dnsWarnNoMXRecord) {
                      dnsWarnNoMXRecord = rfc5322DomainTooLong;
                    }
                  } else if (obj5.local.length + obj5.domain.length + 1 > 254) {
                    const rfc5322TooLong = obj3.diagnoses.rfc5322TooLong;
                    if (rfc5322TooLong > dnsWarnNoMXRecord) {
                      dnsWarnNoMXRecord = rfc5322TooLong;
                    }
                  } else if (63 < num7) {
                    const rfc5322LabelTooLong2 = obj3.diagnoses.rfc5322LabelTooLong;
                    if (rfc5322LabelTooLong2 > dnsWarnNoMXRecord) {
                      dnsWarnNoMXRecord = rfc5322LabelTooLong2;
                    }
                  } else {
                    if (obj2.minDomainAtoms) {
                      if (obj10.domains.length < obj2.minDomainAtoms) {
                        const errDomainTooShort = obj3.diagnoses.errDomainTooShort;
                        if (errDomainTooShort > dnsWarnNoMXRecord) {
                          dnsWarnNoMXRecord = errDomainTooShort;
                        }
                      }
                    }
                    if (obj2.tldWhitelist) {
                      if (!obj3.validDomain(obj10.domains[num8], obj2)) {
                        const errUnknownTLD = obj3.diagnoses.errUnknownTLD;
                        if (errUnknownTLD > dnsWarnNoMXRecord) {
                          dnsWarnNoMXRecord = errUnknownTLD;
                        }
                      }
                    }
                  }
                }
                let c7 = false;
                let c8 = false;
                function finish() {
                  let tmp15;
                  const tmp = !c7 && dnsWarnNoMXRecord < obj.categories.dnsWarn;
                  if (tmp) {
                    if (obj10.domains[sum2].charCodeAt(0) <= 57) {
                      const rfc5321TLDNumeric = obj.diagnoses.rfc5321TLDNumeric;
                      if (typeof updateResult === "function") {
                        if (rfc5321TLDNumeric > dnsWarnNoMXRecord) {
                          dnsWarnNoMXRecord = rfc5321TLDNumeric;
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else if (0 === sum2) {
                      const rfc5321TLD = obj.diagnoses.rfc5321TLD;
                      if (typeof updateResult === "function") {
                        if (rfc5321TLD > dnsWarnNoMXRecord) {
                          dnsWarnNoMXRecord = rfc5321TLD;
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                  }
                  if (dnsWarnNoMXRecord < valid) {
                    dnsWarnNoMXRecord = obj.diagnoses.valid;
                  }
                  if (errorLevel) {
                    tmp15 = tmp13;
                  } else {
                    tmp15 = tmp13 < obj.defaultThreshold;
                  }
                  if (_null) {
                    if (c8) {
                      _null(tmp15);
                    } else {
                      obj.defer(_null.bind(null, tmp15));
                    }
                  }
                  return tmp15;
                }
                if (obj2.checkDNS) {
                  if (dnsWarnNoMXRecord < obj3.categories.dnsWarn) {
                    if (0 === num6) {
                      obj5.domain = `${obj4.domain}.`;
                    }
                    const domain = obj5.domain;
                    const mx = errorLevel.resolveMx(domain, (code, arg1) => {
                      let tmp = code;
                      if (tmp) {
                        if (code.code !== closure_1.NODATA) {
                          let dnsWarnNoRecord = obj.diagnoses.dnsWarnNoRecord;
                          if (typeof updateResult === "function") {
                            if (dnsWarnNoRecord > dnsWarnNoMXRecord) {
                              dnsWarnNoMXRecord = dnsWarnNoRecord;
                            }
                            return finish();
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        }
                      }
                      const tmp3 = arg1;
                      if (tmp3) {
                        if (arg1.length) {
                          c7 = true;
                          return finish();
                        }
                      }
                      closure_0 = 3;
                      let c1 = false;
                      dnsWarnNoMXRecord = obj.diagnoses.dnsWarnNoMXRecord;
                      if (typeof updateResult === "function") {
                        function handleRecords(arg0, arg1) {
                          const tmp = c1;
                          if (!tmp) {
                            closure_0 = closure_0 - 1;
                            if (arg1) {
                              if (arg1.length) {
                                c1 = true;
                                return closure_2_9();
                              }
                            }
                            if (0 === closure_0) {
                              dnsWarnNoRecord = diagnoses.diagnoses.dnsWarnNoRecord;
                              if (typeof closure_2_4 === "function") {
                                c1 = true;
                                closure_2_9();
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            }
                          }
                        }
                        const cname = closure_1.resolveCname(domain, handleRecords);
                        closure_1.resolve4(domain, handleRecords);
                        closure_1.resolve6(domain, handleRecords);
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    });
                    c8 = true;
                  }
                }
                c8 = true;
                return finish();
              };
              obj.validate = fn3;
              closure_0.validate = fn3;
              let obj3 = {};
              const _Object2 = Object;
              const validate = obj.validate;
              const keys = Object.keys(obj.diagnoses);
              let num8 = 0;
              if (0 < keys.length) {
                do {
                  let tmp6 = keys[num8];
                  obj3[tmp6] = obj.diagnoses[tmp6];
                  num8 = num8 + 1;
                  length = keys.length;
                } while (num8 < length);
              }
              validate.diagnoses = obj3;
              closure_0.diagnoses = obj3;
            }
          }
          fn2 = (arg0) => setTimeout(arg0, 0);
        }
        fn = (arg0) => {
          const tmp = arg0;
          if (tmp) {
            const _Symbol = Symbol;
            if (typeof Symbol === "function") {
              let str;
              const _Symbol3 = Symbol;
              if (arg0.constructor === Symbol) {
                const _Symbol2 = Symbol;
                str = "symbol";
              }
              return str;
            }
          }
          str = typeof arg0;
        };
      };
      let callResult = fn.call(arg1, fn(7));
    },
    (arg0, arg1, fn) => {
      let scheme = fn(24);
      const exports = {
        createUriRegex(arg0, flag2, flag) {
          let text;
          scheme = scheme.scheme;
          const tmp2 = flag;
          if (tmp2) {
            text = `${"(?:" + tmp.relativeRef})`;
          } else {
            const tmp3 = arg0;
            if (tmp3) {
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
      let obj2;
      let obj3;
      const tmp = fn(24);
      obj = { Ip: obj2 };
      obj2 = { cidrs: obj3, versions: { ipv4: tmp.IPv4address, ipv6: tmp.IPv6address, ipvfuture: tmp.IPvFuture } };
      obj3 = { required: `\\/(?:${tmp.cidr})`, optional: `(?:\\/(?:${tmp.cidr}))?`, forbidden: "" };
      obj.Ip.createIpRegex = (arg0, arg1) => {
        let text1;
        let num = 0;
        let tmp2;
        if (0 < arg0.length) {
          do {
            let tmp3 = arg0[num];
            let text = text1 || `^(?:${obj.Ip.versions[tmp3]}`;
            text1 = `${tmp5}|${obj.Ip.versions[tmp3]}`;
            num = num + 1;
            tmp2 = text1;
          } while (num < arg0.length);
        }
        const regExp = new RegExp(tmp2 + ")" + obj.Ip.cidrs[arg1] + "$");
        return regExp;
      };
      module.exports = obj.Ip;
    },
    function(arg0, arg1, fn) {
      const tmp = fn(14);
      fn(15);
      let closure_1 = fn(2);
      obj = {
        precisionRx: /(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/,
        Number: _class,
        compare: (arg0, arg1) => {
          ref = arg0;
          let assert = arg1;
          return function(length) {
            const isRefResult = ref.isRef(length);
            assert = isRefResult;
            let tmp2 = typeof length === "number";
            if (typeof length === "number") {
              let _isNaN = isNaN;
              tmp2 = !isNaN(length);
            }
            let tmp3 = assert;
            assert = assert.assert;
            if (!tmp2) {
              tmp2 = isRefResult;
            }
            assert(tmp2, "limit must be a number or reference");
            return this._test(length, length, function(value, reference, concatSettingsResult) {
              let tmp2;
              const self = this;
              if (isRefResult) {
                const tmp3 = reference.reference || reference.parent;
                const tmpResult = length(tmp3, concatSettingsResult);
                if (typeof tmpResult === "number") {
                  const _isNaN = isNaN;
                  tmp2 = tmpResult;
                }
                const obj2 = { ref: length.key };
                return self.createError("number.ref", obj2, reference, concatSettingsResult);
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
        }
      };
      items = tmp;
      class _class {
        constructor() {
          const self = this;
          if (this instanceof _class) {
            const callResult = closure_0.call(self);
            if (self) {
              let tmp8 = self;
              if (callResult) {
                if (typeof callResult === "object") {
                  tmp8 = callResult;
                } else {
                  tmp8 = self;
                }
              }
              tmp8._type = "number";
              const _invalids = tmp8._invalids;
              _invalids.add(Infinity);
              const _invalids2 = tmp8._invalids;
              _invalids2.add(-Infinity);
              return tmp8;
            } else {
              const _ReferenceError = ReferenceError;
              const self4 = this;
              const self5 = this;
              const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
              throw referenceError;
            }
          } else {
            const _TypeError = TypeError;
            const self2 = this;
            const self3 = this;
            const typeError = new TypeError("Cannot call a class as a function");
            throw typeError;
          }
        }
        _base(value, mergeResult, convert) {
          let error;
          obj = { errors: error, value };
          if (typeof value === "string") {
            if (convert.convert) {
              const _parseFloat = parseFloat;
              const parsed = parseFloat(value);
              const _isNaN = isNaN;
              let num2 = NaN;
              if (!isNaN(parsed)) {
                const _isFinite = isFinite;
                num2 = NaN;
                if (isFinite(value)) {
                  num2 = parsed;
                }
              }
              obj.value = num2;
            }
          }
          value = obj.value;
          let tmp3 = typeof value === "number";
          if (typeof value === "number") {
            const _isNaN2 = isNaN;
            tmp3 = !isNaN(obj.value);
          }
          const self = this;
          if (convert.convert) {
            if ("precision" in self._flags) {
              if (tmp3) {
                const _Math = Math;
                const powResult = Math.pow(10, self._flags.precision);
                const _Math2 = Math;
                obj.value = Math.round(obj.value * powResult) / powResult;
              }
            }
          }
          error = null;
          if (!tmp3) {
            error = self.createError("number.base", null, mergeResult, convert);
          }
          return obj;
        }
        multiple(toDateResult) {
          const isRefResult = toDateResult.isRef(toDateResult);
          if (!isRefResult) {
            let isFiniteResult = typeof toDateResult === "number";
            const assert = closure_1.assert;
            if (typeof toDateResult === "number") {
              let tmp5 = globalThis;
              let _isFinite = isFinite;
              isFiniteResult = isFinite(toDateResult);
            }
            assert(isFiniteResult, "multiple must be a number");
            closure_1.assert(toDateResult > 0, "multiple must be greater than 0");
          }
          return this._test("multiple", toDateResult, function(value, reference, concatSettingsResult) {
            let error1;
            let tmp2Result;
            let tmp3;
            if (isRefResult) {
              const tmp5 = reference.reference || reference.parent;
              tmp2Result = closure_0(tmp5, concatSettingsResult);
              tmp3 = closure_0;
            } else {
              tmp3 = closure_0;
              tmp2Result = closure_0;
            }
            const self = this;
            if (!isRefResult) {
              let error = value;
              if (value % tmp2Result != 0) {
                const obj2 = { multiple: tmp3, value };
                error = self.createError("number.multiple", obj2, reference, concatSettingsResult);
              }
              error1 = error;
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
          let integer;
          return this._test("integer", undefined, function(value, mergeResult, concatSettingsResult) {
            let error = value;
            if (!integer.isInteger(value)) {
              const self = this;
              const self2 = this;
              obj = { value };
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
              const self2 = this;
              obj = { value };
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
              const self2 = this;
              obj = { value };
              error = this.createError("number.positive", obj, mergeResult, concatSettingsResult);
            }
            return error;
          });
        }
        precision(precision) {
          let closure_0 = precision;
          closure_1.assert(closure_1.isInteger(precision), "limit must be an integer");
          closure_1.assert(!("precision" in this._flags), "precision already set");
          const _testResult = this._test("precision", precision, function(value, mergeResult, concatSettingsResult) {
            const str = value.toString();
            const match = str.match(obj.precisionRx);
            let num = 0;
            const _Math = Math;
            if (match[1]) {
              num = match[1].length;
            }
            let num2 = 0;
            if (match[2]) {
              const _parseInt = parseInt;
              num2 = parseInt(match[2], 10);
            }
            let error = value;
            if (max(num - num2, 0) > precision) {
              const self = this;
              obj = { limit: tmp2, value };
              const self2 = this;
              error = this.createError("number.precision", obj, mergeResult, concatSettingsResult);
            }
            return error;
          });
          _testResult._flags.precision = precision;
          return _testResult;
        }
      }
      if (typeof tmp !== "function") {
        if (null !== tmp) {
          let _TypeError = TypeError;
          let self = this;
          let str = "Super expression must either be null or a function, not ";
          let self2 = this;
          let typeError = new TypeError("Super expression must either be null or a function, not " + typeof tmp);
          throw typeError;
        }
      }
      let prototype = tmp;
      const _Object = Object;
      if (tmp) {
        prototype = tmp.prototype;
      }
      let obj2 = { constructor: { value: _class, enumerable: false, writable: true, configurable: true } };
      _class.prototype = create(prototype, obj2);
      if (tmp) {
        const _Object2 = Object;
        const _Object3 = Object;
        if (Object.setPrototypeOf) {
          _Object3.setPrototypeOf(_class, tmp);
        } else {
          const ownPropertyNames = _Object3.getOwnPropertyNames(tmp);
          let num = 0;
          let num2 = 1;
          if (0 < ownPropertyNames.length) {
            do {
              let tmp2 = ownPropertyNames[num];
              let _Object4 = Object;
              let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(tmp, tmp2);
              let tmp5 = ownPropertyDescriptor && ownPropertyDescriptor.configurable && undefined === _class[tmp2];
              if (tmp5) {
                let _Object5 = Object;
                let definePropertyResult = Object.defineProperty(_class, tmp2, ownPropertyDescriptor);
              }
              num = num + 1;
            } while (num < ownPropertyNames.length);
          }
        }
      }
      obj.Number.prototype.min = obj.compare("min", (arg0, arg1) => arg0 >= arg1);
      obj.Number.prototype.max = obj.compare("max", (arg0, arg1) => arg0 <= arg1);
      obj.Number.prototype.greater = obj.compare("greater", (arg0, arg1) => arg0 > arg1);
      obj.Number.prototype.less = obj.compare("less", (arg0, arg1) => arg0 < arg1);
      const number = new obj.Number();
      module.exports = number;
    },
    function(arg0, arg1, fn) {
      let closure_0;
      const tmp = fn(14);
      let closure_1 = fn(2);
      obj = { Set: fn(18), Boolean: _class };
      items = tmp;
      class _class {
        constructor() {
          self = this;
          if (this instanceof _class) {
            callResult = closure_0.call(self);
            if (self) {
              tmp8 = self;
              if (callResult) {
                if (typeof callResult === "object") {
                  tmp8 = callResult;
                } else {
                  tmp8 = self;
                }
              }
              str3 = "boolean";
              tmp8._type = "boolean";
              flag = true;
              tmp8._flags.insensitive = true;
              tmp9 = closure_2;
              self6 = this;
              self7 = this;
              _inner = tmp8._inner;
              set = new closure_2.Set();
              tmp11 = set;
              _inner.truthySet = set;
              self8 = this;
              self9 = this;
              _inner2 = tmp8._inner;
              set1 = new closure_2.Set();
              tmp13 = set1;
              _inner2.falsySet = set1;
              return tmp8;
            } else {
              tmp5 = globalThis;
              _ReferenceError = ReferenceError;
              self4 = this;
              str2 = "this hasn't been initialised - super() hasn't been called";
              self5 = this;
              referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
              tmp7 = referenceError;
              throw referenceError;
            }
          } else {
            tmp = globalThis;
            _TypeError = TypeError;
            self2 = this;
            str = "Cannot call a class as a function";
            self3 = this;
            typeError = new TypeError("Cannot call a class as a function");
            tmp3 = typeError;
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
            tmp7 = !hasItem && module;
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
          tmp2 = closure_1;
          flattenResult = closure_1.flatten(slice.call(arguments));
          num = 0;
          if (0 < flattenResult.length) {
            do {
              tmp3 = flattenResult[num];
              tmp4 = closure_1;
              assertResult = closure_1.assert(undefined !== tmp3, "Cannot call truthy with undefined");
              truthySet = cloneResult._inner.truthySet;
              addResult = truthySet.add(tmp3);
              num = num + 1;
              length = flattenResult.length;
            } while (num < length);
          }
          return cloneResult;
        }
        falsy() {
          cloneResult = this.clone();
          slice = Array.prototype.slice;
          tmp2 = closure_1;
          flattenResult = closure_1.flatten(slice.call(arguments));
          num = 0;
          if (0 < flattenResult.length) {
            do {
              tmp3 = flattenResult[num];
              tmp4 = closure_1;
              assertResult = closure_1.assert(undefined !== tmp3, "Cannot call falsy with undefined");
              falsySet = cloneResult._inner.falsySet;
              addResult = falsySet.add(tmp3);
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
          callResult = describe.call(self);
          items = [];
          items[0] = true;
          truthySet = self._inner.truthySet;
          callResult.truthy = items.concat(truthySet.values());
          items1 = [];
          items1[0] = false;
          falsySet = self._inner.falsySet;
          callResult.falsy = items1.concat(falsySet.values());
          return callResult;
        }
      }
      if (typeof tmp !== "function") {
        if (null !== tmp) {
          let _TypeError = TypeError;
          let self = this;
          let self2 = this;
          let typeError = new TypeError("Super expression must either be null or a function, not " + typeof tmp);
          throw typeError;
        }
      }
      let prototype = tmp;
      const _Object = Object;
      if (tmp) {
        prototype = tmp.prototype;
      }
      const obj2 = { constructor: { value: _class, enumerable: false, writable: true, configurable: true } };
      _class.prototype = create(prototype, obj2);
      if (tmp) {
        const _Object2 = Object;
        const _Object3 = Object;
        if (Object.setPrototypeOf) {
          _Object3.setPrototypeOf(_class, tmp);
        } else {
          let num;
          const ownPropertyNames = _Object3.getOwnPropertyNames(tmp);
          for (let num = 0; num < ownPropertyNames.length; num = num + 1) {
            let tmp2 = ownPropertyNames[num];
            let _Object4 = Object;
            let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(tmp, tmp2);
            let tmp5 = ownPropertyDescriptor && ownPropertyDescriptor.configurable && undefined === _class[tmp2];
            if (tmp5) {
              let _Object5 = Object;
              let definePropertyResult = Object.defineProperty(_class, tmp2, ownPropertyDescriptor);
            }
          }
        }
      }
      const boolean = new obj.Boolean();
      module.exports = boolean;
    },
    function(arg0, arg1, fn) {
      let obj2;
      if (typeof Symbol === "function") {
        let _Symbol = Symbol;
        if (typeof Symbol.iterator === "symbol") {
          fn = (arg0) => typeof arg0;
        }
        let tmp = fn;
        let num = 2;
        let closure_1 = fn(2);
        let tmp2 = fn(14);
        let closure_2 = tmp2;
        let closure_3 = fn(19);
        let ref = fn(15);
        items = tmp2;
        class _class {
          constructor() {
            const self = this;
            if (this instanceof _class) {
              const callResult = closure_0.call(self);
              if (self) {
                let tmp8 = self;
                if (callResult) {
                  if (typeof callResult === "object") {
                    tmp8 = callResult;
                  } else {
                    tmp8 = self;
                  }
                }
                tmp8._type = "alternatives";
                const _invalids = tmp8._invalids;
                _invalids.remove(null);
                tmp8._inner.matches = [];
                return tmp8;
              } else {
                const _ReferenceError = ReferenceError;
                const self4 = this;
                const self5 = this;
                const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                throw referenceError;
              }
            } else {
              const _TypeError = TypeError;
              const self2 = this;
              const self3 = this;
              const typeError = new TypeError("Cannot call a class as a function");
              throw typeError;
            }
          }
          _base(arg0, reference, concatSettingsResult) {
            let promise;
            const self = this;
            items = [];
            let num = 0;
            let errors = items;
            if (0 < this._inner.matches.length) {
              while (true) {
                let combined;
                promise = self._inner.matches[num];
                let schema = promise.schema;
                if (schema) {
                  let _validateResult = schema._validate(arg0, reference, concatSettingsResult);
                  if (_validateResult.errors) {
                    combined = items.concat(_validateResult.errors);
                  } else {
                    return _validateResult;
                  }
                } else {
                  let is = promise.is;
                  let parent = reference.reference;
                  let _validate = is._validate;
                  ref = promise.ref;
                  if (!parent) {
                    parent = reference.parent;
                  }
                  if (_validate(ref(parent, concatSettingsResult), null, concatSettingsResult, reference.parent).errors) {
                    if (promise.otherwise) {
                      let otherwise = promise.otherwise;
                      return otherwise._validate(arg0, reference, concatSettingsResult);
                    } else {
                      combined = items;
                      if (obj) {
                        combined = items;
                        if (num === length - 1) {
                          return obj._validate(arg0, reference, concatSettingsResult);
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
                errors = combined;
              }
              const obj2 = promise.then || this._settings && self._settings.baseType;
              return obj2._validate(arg0, reference, concatSettingsResult);
            }
            if (!errors.length) {
              errors = self.createError("alternatives.base", null, reference, concatSettingsResult);
            }
            return { errors };
          }
          try() {
            let num;
            const flattenResult = closure_1.flatten(slice.call(arguments));
            closure_1.assert(flattenResult.length, "Cannot add other alternatives without at least one schema");
            const cloneResult = this.clone();
            for (let num = 0; num < flattenResult.length; num = num + 1) {
              let schemaResult = closure_3.schema(flattenResult[num]);
              if (schemaResult._refs.length) {
                let _refs = cloneResult._refs;
                cloneResult._refs = _refs.concat(schemaResult._refs);
              }
              let matches = cloneResult._inner.matches;
              let obj2 = { schema: schemaResult };
              let arr = matches.push(obj2);
            }
            return cloneResult;
          }
          when(str, otherwise) {
            let schemaResult1;
            let schemaResult2;
            const assert = closure_1.assert;
            const tmp = ref.isRef(str) || typeof str === "string";
            assert(tmp, "Invalid reference:", str);
            closure_1.assert(otherwise, "Missing options");
            str = "undefined";
            const assert2 = closure_1.assert;
            if (undefined !== otherwise) {
              str = fn(otherwise);
            }
            assert2("object" === str, "Invalid options");
            closure_1.assert(otherwise.hasOwnProperty("is"), "Missing \"is\" directive");
            let tmp7 = undefined !== otherwise.then;
            const assert3 = closure_1.assert;
            if (!tmp7) {
              tmp7 = undefined !== otherwise.otherwise;
            }
            assert3(tmp7, "options must have at least one of \"then\" or \"otherwise\"");
            const cloneResult = this.clone();
            const schemaResult = closure_3.schema(otherwise.is);
            let tmp10 = null !== otherwise.is;
            if (tmp10) {
              tmp10 = ref.isRef(otherwise.is) || otherwise.is instanceof closure_2;
              const isRefResult = ref.isRef(otherwise.is) || otherwise.is instanceof closure_2;
            }
            let requiredResult = schemaResult;
            if (!tmp10) {
              requiredResult = schemaResult.required();
            }
            const obj3 = { ref: closure_3.ref(str), is: requiredResult, then: schemaResult1, otherwise: schemaResult2 };
            schemaResult1 = undefined;
            if (undefined !== otherwise.then) {
              schemaResult1 = closure_3.schema(otherwise.then);
            }
            schemaResult2 = undefined;
            if (undefined !== otherwise.otherwise) {
              schemaResult2 = closure_3.schema(otherwise.otherwise);
            }
            const tmp16 = cloneResult._settings && cloneResult._settings.baseType;
            if (tmp16) {
              let then = obj3.then;
              if (then) {
                const baseType = cloneResult._settings.baseType;
                then = baseType.concat(obj3.then);
              }
              obj3.then = then;
              otherwise = obj3.otherwise;
              if (otherwise) {
                const baseType2 = cloneResult._settings.baseType;
                otherwise = baseType2.concat(obj3.otherwise);
              }
              obj3.otherwise = otherwise;
            }
            ref.push(cloneResult._refs, obj3.ref);
            const _refs = cloneResult._refs;
            cloneResult._refs = _refs.concat(obj3.is._refs);
            const tmp18 = obj3.then && obj3.then._refs;
            if (tmp18) {
              const _refs2 = cloneResult._refs;
              cloneResult._refs = _refs2.concat(obj3.then._refs);
            }
            const tmp19 = obj3.otherwise && obj3.otherwise._refs;
            if (tmp19) {
              const _refs3 = cloneResult._refs;
              cloneResult._refs = _refs3.concat(obj3.otherwise._refs);
            }
            const matches = cloneResult._inner.matches;
            matches.push(obj3);
            return cloneResult;
          }
          describe() {
            let is;
            let num;
            let str;
            const self = this;
            const describe = closure_2.prototype.describe;
            const callResult = describe.call(self);
            items = [];
            for (let num = 0; num < self._inner.matches.length; num = num + 1) {
              let promise = self._inner.matches[num];
              if (promise.schema) {
                let schema = promise.schema;
                let arr = items.push(schema.describe());
              } else {
                obj = { ref: str.toString(), is: is.describe() };
                str = promise.ref;
                is = promise.is;
                if (promise.then) {
                  let then = promise.then;
                  obj.then = then.describe();
                }
                if (promise.otherwise) {
                  let otherwise = promise.otherwise;
                  obj.otherwise = otherwise.describe();
                }
                let arr3 = items.push(obj);
              }
            }
            callResult.alternatives = items;
            return callResult;
          }
        }
        if (typeof tmp2 !== "function") {
          if (null !== tmp2) {
            let _TypeError = TypeError;
            let self3 = this;
            let str = "Super expression must either be null or a function, not ";
            let self4 = this;
            let typeError = new TypeError("Super expression must either be null or a function, not " + typeof tmp2);
            throw typeError;
          }
        }
        let prototype = tmp2;
        const _Object = Object;
        if (tmp2) {
          prototype = tmp2.prototype;
        }
        obj = { constructor: obj2 };
        obj2 = { value: _class, enumerable: false, writable: true, configurable: true };
        _class.prototype = create(prototype, obj);
        if (tmp2) {
          const _Object2 = Object;
          const _Object3 = Object;
          if (Object.setPrototypeOf) {
            _Object3.setPrototypeOf(_class, tmp2);
          } else {
            let num5;
            const ownPropertyNames = _Object3.getOwnPropertyNames(tmp2);
            for (let num5 = 0; num5 < ownPropertyNames.length; num5 = num5 + 1) {
              let tmp3 = ownPropertyNames[num5];
              let _Object4 = Object;
              let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(tmp2, tmp3);
              let tmp5 = num5;
              let tmp6 = ownPropertyDescriptor && ownPropertyDescriptor.configurable && undefined === _class[tmp3];
              if (tmp6) {
                let _Object5 = Object;
                let definePropertyResult = Object.defineProperty(_class, tmp3, ownPropertyDescriptor);
              }
            }
          }
        }
        let obj3 = { Alternatives: _class };
        let self = this;
        let self2 = this;
        const alternatives = new obj3.Alternatives();
        module.exports = alternatives;
      }
      fn = (arg0) => {
        const tmp = arg0;
        if (tmp) {
          const _Symbol = Symbol;
          if (typeof Symbol === "function") {
            let str;
            const _Symbol3 = Symbol;
            if (arg0.constructor === Symbol) {
              const _Symbol2 = Symbol;
              str = "symbol";
            }
            return str;
          }
        }
        str = typeof arg0;
      };
    },
    function(arg0, arg1, fn) {
      let closure_7;
      let obj3;
      if (typeof Symbol === "function") {
        let _Symbol = Symbol;
        if (typeof Symbol.iterator === "symbol") {
          fn = (arg0) => typeof arg0;
        }
        let tmp = fn;
        let num = 2;
        let closure_1 = fn(2);
        const num2 = 30;
        let closure_2 = fn(30);
        let num3 = 14;
        let tmp2 = fn(14);
        let closure_3 = tmp2;
        let num4 = 16;
        const Err = fn(16);
        let num5 = 19;
        let closure_5 = fn(19);
        let num6 = 15;
        let closure_6 = fn(15);
        let arg = {
          Object: _class,
          safeParse: (arg0) => {
              try {
                const _JSON = JSON;
                return JSON.parse(arg0);
              } catch (err) {
                return arg0;
              }
            },
          renameDefaults: { alias: false, multiple: false, override: false },
          groupChildren: (arr) => {
              let num;
              const sorted = arr.sort();
              obj = {};
              for (let num = 0; num < arr.length; num = num + 1) {
                let str = arr[num];
                let assertResult = closure_1.assert(typeof str === "string", "children must be strings");
                let first = str.split(".")[0];
                items = obj[first];
                if (!items) {
                  items = [];
                }
                obj[first] = items;
                arr = items.push(str.substring(first.length + 1));
              }
              return obj;
            },
          with: function(arg0, arg1, arg2, mergeResult, concatSettingsResult) {
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
                    if (!hasOwnProperty.call(arg2, tmp)) {
                      break;
                    } else if (undefined === arg2[tmp]) {
                      break;
                    } else {
                      num = num + 1;
                    }
                  }
                  const self = this;
                  const self2 = this;
                  obj = { peer: tmp };
                  return this.createError("object.with", obj, mergeResult, concatSettingsResult);
                }
                return arg0;
              }
            },
          without: function(arg0, arg1, arg2, mergeResult, concatSettingsResult) {
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
                    if (hasOwnProperty.call(arg2, tmp)) {
                      if (undefined !== arg2[tmp]) {
                        break;
                      }
                    }
                    num = num + 1;
                  }
                  const self = this;
                  const self2 = this;
                  obj = { peer: tmp };
                  return this.createError("object.without", obj, mergeResult, concatSettingsResult);
                }
                return arg0;
              }
            },
          xor: function(arg0, peers, arg2, mergeResult, concatSettingsResult) {
              let num;
              items = [];
              for (let num = 0; num < peers.length; num = num + 1) {
                let tmp = peers[num];
                let _Object = Object;
                hasOwnProperty = Object.prototype.hasOwnProperty;
                let tmp3 = hasOwnProperty.call(arg2, tmp) && undefined !== arg2[tmp];
                if (tmp3) {
                  let arr = items.push(tmp);
                }
              }
              let tmp5 = arg0;
              if (1 !== items.length) {
                let error;
                const self = this;
                if (0 === items.length) {
                  const obj2 = { peers };
                  error = self.createError("object.missing", obj2, mergeResult, concatSettingsResult);
                } else {
                  obj = { peers };
                  error = self.createError("object.xor", obj, mergeResult, concatSettingsResult);
                }
                tmp5 = error;
              }
              return tmp5;
            },
          or: function(arg0, peers, arg2, mergeResult, concatSettingsResult) {
              let num = 0;
              if (0 < peers.length) {
                while (true) {
                  let tmp = peers[num];
                  let _Object = Object;
                  hasOwnProperty = Object.prototype.hasOwnProperty;
                  if (hasOwnProperty.call(arg2, tmp)) {
                    if (undefined !== arg2[tmp]) {
                      break;
                    }
                  }
                  num = num + 1;
                }
                return arg0;
              }
              obj = { peers };
              return this.createError("object.missing", obj, mergeResult, concatSettingsResult);
            },
          and: function(arg0, arg1, arg2, mergeResult, concatSettingsResult) {
              items = [];
              const items1 = [];
              let num = 0;
              if (0 < arg1.length) {
                while (true) {
                  let tmp = arg1[num];
                  let _Object = Object;
                  hasOwnProperty = Object.prototype.hasOwnProperty;
                  if (hasOwnProperty.call(arg2, tmp)) {
                    if (undefined !== arg2[tmp]) {
                      let arr = items1.push(tmp);
                      num = num + 1;
                      if (num >= length) {
                        break;
                      }
                    }
                  }
                  let arr2 = items.push(tmp);
                }
              }
              let error = null;
              if (items.length !== arg1.length) {
                error = null;
                if (items1.length !== arg1.length) {
                  const self = this;
                  const self2 = this;
                  obj = { present: items1, missing: items };
                  error = this.createError("object.and", obj, mergeResult, concatSettingsResult);
                }
              }
              return error;
            },
          nand: function(arg0, arg1, arg2, mergeResult, concatSettingsResult) {
              let num;
              items = [];
              for (let num = 0; num < arg1.length; num = num + 1) {
                let tmp = arg1[num];
                let _Object = Object;
                hasOwnProperty = Object.prototype.hasOwnProperty;
                let tmp3 = hasOwnProperty.call(arg2, tmp) && undefined !== arg2[tmp];
                if (tmp3) {
                  let arr = items.push(tmp);
                }
              }
              let error = null;
              const cloneResult = closure_1.clone(arg1);
              if (items.length === arg1.length) {
                const self = this;
                const self2 = this;
                obj = { main: tmp6, peers: cloneResult };
                error = this.createError("object.nand", obj, mergeResult, concatSettingsResult);
              }
              return error;
            }
        };
        items = tmp2;
        class _class {
          constructor() {
            const self = this;
            if (this instanceof _class) {
              const callResult = closure_0.call(self);
              if (self) {
                let tmp8 = self;
                if (callResult) {
                  if (typeof callResult === "object") {
                    tmp8 = callResult;
                  } else {
                    tmp8 = self;
                  }
                }
                tmp8._type = "object";
                tmp8._inner.children = null;
                tmp8._inner.renames = [];
                tmp8._inner.dependencies = [];
                tmp8._inner.patterns = [];
                return tmp8;
              } else {
                const _ReferenceError = ReferenceError;
                const self4 = this;
                const self5 = this;
                const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                throw referenceError;
              }
            } else {
              const _TypeError = TypeError;
              const self2 = this;
              const self3 = this;
              const typeError = new TypeError("Cannot call a class as a function");
              throw typeError;
            }
          }
          _base(value, path, convert) {
            let str11;
            let str15;
            let str7;
            let tmp44;
            let tmp49;
            let tmp5;
            let closure_0 = value;
            convert = typeof value === "string";
            if (typeof value === "string") {
              convert = convert.convert;
            }
            let tmp = value;
            if (convert) {
              const safeParseResult = obj.safeParse(value);
              closure_0 = safeParseResult;
              tmp = safeParseResult;
            }
            const self = this;
            let str = "object";
            if (this._flags.func) {
              str = "function";
            }
            items = [];
            if (tmp) {
              let str2 = "undefined";
              if (undefined !== tmp) {
                str2 = fn(tmp);
              }
              if (str2 === str) {
                const _Array = Array;
                if (!Array.isArray(tmp)) {
                  if (!self._inner.renames.length) {
                    if (!self._inner.dependencies.length) {
                      if (!self._inner.children) {
                        if (!self._inner.patterns.length) {
                          obj = { value: tmp, errors: tmp5 };
                          tmp5 = null;
                          if (items.length) {
                            tmp5 = items;
                          }
                          return obj;
                        }
                      }
                    }
                  }
                  let tmp6 = tmp;
                  let tmp7 = tmp;
                  if (value === tmp) {
                    let obj2;
                    let tmp10;
                    if ("object" === str) {
                      const _Object = Object;
                      const _Object2 = Object;
                      obj2 = Object.create(Object.getPrototypeOf(tmp));
                      tmp10 = obj2;
                    } else {
                      class target {
                        constructor() {
                          return closure_0(...arguments);
                        }
                      }
                      target.prototype = closure_1.clone(tmp.prototype);
                      obj2 = target;
                      tmp10 = target;
                    }
                    const _Object3 = Object;
                    const keys = Object.keys(tmp);
                    tmp6 = obj2;
                    tmp7 = tmp10;
                    if (0 < keys.length) {
                      class target {
                        constructor() {
                          return closure_0(...arguments);
                        }
                      }
                    }
                  }
                  let num5 = 0;
                  const obj3 = {};
                  if (0 < self._inner.renames.length) {
                    class target {
                      constructor() {
                        return closure_0(...arguments);
                      }
                    }
                    while (true) {
                      class target {
                        constructor() {
                          return closure_0(...arguments);
                        }
                      }
                      if (!tmp11.options.ignoreUndefined) {
                        class target {
                          constructor() {
                            return closure_0(...arguments);
                          }
                        }
                        let _Object4 = Object;
                        hasOwnProperty = Object.prototype.hasOwnProperty;
                        if (hasOwnProperty.call(tmp7, tmp11.to)) {
                          class target {
                            constructor() {
                              return closure_0(...arguments);
                            }
                          }
                        }
                        if (undefined === tmp7[tmp11.from]) {
                          class target {
                            constructor() {
                              return closure_0(...arguments);
                            }
                          }
                        } else {
                          class target {
                            constructor() {
                              return closure_0(...arguments);
                            }
                          }
                        }
                        obj3[tmp11.to] = true;
                        if (!tmp11.options.alias) {
                          class target {
                            constructor() {
                              return closure_0(...arguments);
                            }
                          }
                        }
                      } else {
                        class target {
                          constructor() {
                            return closure_0(...arguments);
                          }
                        }
                      }
                      num5 = num5 + 1;
                      if (num5 < self._inner.renames.length) {
                        class target {
                          constructor() {
                            return closure_0(...arguments);
                          }
                        }
                      }
                    }
                    const obj4 = { value: tmp6, errors: null };
                    if (items.length) {
                      class target {
                        constructor() {
                          return closure_0(...arguments);
                        }
                      }
                    }
                    return obj4;
                  }
                  if (!self._inner.children) {
                    class target {
                      constructor() {
                        return closure_0(...arguments);
                      }
                    }
                  }
                  const _Object5 = Object;
                  const mapToObjectResult = closure_1.mapToObject(Object.keys(tmp7));
                  if (self._inner.children) {
                    class target {
                      constructor() {
                        return closure_0(...arguments);
                      }
                    }
                    let num6 = 0;
                    if (0 < self._inner.children.length) {
                      class target {
                        constructor() {
                          return closure_0(...arguments);
                        }
                      }
                      while (true) {
                        class target {
                          constructor() {
                            return closure_0(...arguments);
                          }
                        }
                        let key = tmp16.key;
                        let tmp17 = tmp7[key];
                        delete tmp15[key];
                        let obj5 = { key, path: path + str7 + key, parent: tmp7, reference: path.reference };
                        path = path.path;
                        if (!path) {
                          class target {
                            constructor() {
                              return closure_0(...arguments);
                            }
                          }
                        }
                        str7 = "";
                        if (path.path) {
                          class target {
                            constructor() {
                              return closure_0(...arguments);
                            }
                          }
                          if (key) {
                            class target {
                              constructor() {
                                return closure_0(...arguments);
                              }
                            }
                          }
                        }
                        let schema = tmp16.schema;
                        let _validateResult = schema._validate(tmp17, obj5, convert);
                        if (_validateResult.errors) {
                          class target {
                            constructor() {
                              return closure_0(...arguments);
                            }
                          }
                          tmp20[0] = key;
                          let schema2 = tmp16.schema;
                          let push = items.push;
                          let createError = self.createError;
                          tmp20[1] = schema2._getLabel(key);
                          tmp20[2] = _validateResult.errors;
                          let str8 = "object.child";
                          let arr = push(createError("object.child", tmp20, obj5, convert));
                          if (convert.abortEarly) {
                            class target {
                              constructor() {
                                return closure_0(...arguments);
                              }
                            }
                          }
                        }
                        if (tmp16.schema._flags.strip) {
                          class target {
                            constructor() {
                              return closure_0(...arguments);
                            }
                          }
                        } else {
                          class target {
                            constructor() {
                              return closure_0(...arguments);
                            }
                          }
                        }
                        num6 = num6 + 1;
                        if (num6 < self._inner.children.length) {
                          class target {
                            constructor() {
                              return closure_0(...arguments);
                            }
                          }
                        }
                      }
                      const obj6 = { value: tmp6, errors: null };
                      if (items.length) {
                        class target {
                          constructor() {
                            return closure_0(...arguments);
                          }
                        }
                      }
                      return obj6;
                    }
                  }
                  const _Object6 = Object;
                  const keys1 = Object.keys(mapToObjectResult);
                  let keys2 = keys1;
                  if (keys1.length) {
                    class target {
                      constructor() {
                        return closure_0(...arguments);
                      }
                    }
                    if (self._inner.patterns.length) {
                      class target {
                        constructor() {
                          return closure_0(...arguments);
                        }
                      }
                      let num7 = 0;
                      if (0 < keys1.length) {
                        class target {
                          constructor() {
                            return closure_0(...arguments);
                          }
                        }
                        while (true) {
                          class target {
                            constructor() {
                              return closure_0(...arguments);
                            }
                          }
                          let obj7 = { key: tmp27, path: str11 + tmp27, parent: tmp7, reference: path.reference };
                          str11 = "";
                          if (path.path) {
                            class target {
                              constructor() {
                                return closure_0(...arguments);
                              }
                            }
                          }
                          let num8 = 0;
                          if (0 < self._inner.patterns.length) {
                            class target {
                              constructor() {
                                return closure_0(...arguments);
                              }
                            }
                            while (true) {
                              class target {
                                constructor() {
                                  return closure_0(...arguments);
                                }
                              }
                              let regex = tmp30.regex;
                              if (regex.test(tmp27)) {
                                class target {
                                  constructor() {
                                    return closure_0(...arguments);
                                  }
                                }
                                let rule = tmp30.rule;
                                let iter = rule._validate(tmp29, obj7, convert);
                                if (iter.errors) {
                                  class target {
                                    constructor() {
                                      return closure_0(...arguments);
                                    }
                                  }
                                  tmp32[0] = tmp27;
                                  let rule2 = tmp30.rule;
                                  let push2 = items.push;
                                  let createError2 = self.createError;
                                  tmp32[1] = rule2._getLabel(tmp27);
                                  tmp32[2] = iter.errors;
                                  let str12 = "object.child";
                                  let push2Result = push2(createError2("object.child", tmp32, obj7, convert));
                                  if (convert.abortEarly) {
                                    class target {
                                      constructor() {
                                        return closure_0(...arguments);
                                      }
                                    }
                                  }
                                }
                                if (undefined !== iter.value) {
                                  class target {
                                    constructor() {
                                      return closure_0(...arguments);
                                    }
                                  }
                                }
                              }
                              num8 = num8 + 1;
                              if (num8 < self._inner.patterns.length) {
                                class target {
                                  constructor() {
                                    return closure_0(...arguments);
                                  }
                                }
                              }
                              continue;
                            }
                            let obj8 = { value: tmp6, errors: tmp49 };
                            tmp49 = null;
                            if (items.length) {
                              class target {
                                constructor() {
                                  return closure_0(...arguments);
                                }
                              }
                            }
                            return obj8;
                          }
                          num7 = num7 + 1;
                          if (num7 < keys1.length) {
                            class target {
                              constructor() {
                                return closure_0(...arguments);
                              }
                            }
                          }
                        }
                      }
                      const _Object7 = Object;
                      keys2 = Object.keys(mapToObjectResult);
                    }
                  }
                  if (self._inner.children) {
                    class target {
                      constructor() {
                        return closure_0(...arguments);
                      }
                    }
                  } else {
                    class target {
                      constructor() {
                        return closure_0(...arguments);
                      }
                    }
                  }
                  let num9 = 0;
                  if (0 < self._inner.dependencies.length) {
                    class target {
                      constructor() {
                        return closure_0(...arguments);
                      }
                    }
                    while (true) {
                      class target {
                        constructor() {
                          return closure_0(...arguments);
                        }
                      }
                      let tmp41 = obj[tmp39.type];
                      let tmp42 = null !== tmp39.key;
                      let call = tmp41.call;
                      if (tmp42) {
                        class target {
                          constructor() {
                            return closure_0(...arguments);
                          }
                        }
                      }
                      let peers = tmp39.peers;
                      let obj9 = { key: tmp39.key, path: tmp44 + str15 };
                      tmp44 = path.path || "";
                      str15 = "";
                      if (tmp39.key) {
                        class target {
                          constructor() {
                            return closure_0(...arguments);
                          }
                        }
                      }
                      let callResult = call(self, tmp42, peers, tmp7, obj9, convert);
                      if (callResult instanceof Err.Err) {
                        class target {
                          constructor() {
                            return closure_0(...arguments);
                          }
                        }
                        if (convert.abortEarly) {
                          class target {
                            constructor() {
                              return closure_0(...arguments);
                            }
                          }
                        }
                      }
                      num9 = num9 + 1;
                      if (num9 < self._inner.dependencies.length) {
                        class target {
                          constructor() {
                            return closure_0(...arguments);
                          }
                        }
                      }
                    }
                    const obj10 = { value: tmp6, errors: null };
                    if (items.length) {
                      class target {
                        constructor() {
                          return closure_0(...arguments);
                        }
                      }
                    }
                    return obj10;
                  }
                  const obj11 = { value: tmp6, errors: null };
                  if (items.length) {
                    class target {
                      constructor() {
                        return closure_0(...arguments);
                      }
                    }
                  }
                  return obj11;
                }
              }
            }
            items.push(self.createError(`${str}.base`, null, path, convert));
            const obj22 = { value, errors: null };
            if (items.length) {
              class target {
                constructor() {
                  return closure_0(...arguments);
                }
              }
            }
            return obj22;
          }
          _func() {
            const cloneResult = this.clone();
            cloneResult._flags.func = true;
            return cloneResult;
          }
          keys(arg0) {
            let tmp2 = null == arg0;
            const assert = closure_1.assert;
            if (!tmp2) {
              let str = "undefined";
              if (undefined !== arg0) {
                str = fn(arg0);
              }
              tmp2 = "object" === str;
            }
            assert(tmp2, "Object schema must be a valid object");
            let tmp5 = arg0;
            const assert2 = closure_1.assert;
            if (arg0) {
              tmp5 = arg0 instanceof closure_3;
            }
            assert2(!tmp5, "Object schema cannot be a joi schema");
            const cloneResult = this.clone();
            if (arg0) {
              const _Object = Object;
              const keys = Object.keys(arg0);
              if (keys.length) {
                const self = this;
                const self2 = this;
                obj = new closure_2();
                if (cloneResult._inner.children) {
                  let num;
                  for (let num = 0; num < cloneResult._inner.children.length; num = num + 1) {
                    let tmp12 = cloneResult._inner.children[num];
                    if (-1 === keys.indexOf(tmp12.key)) {
                      let obj3 = { after: null, group: null };
                      ({ _refs: obj2.after, key: obj2.group } = tmp12);
                      let addResult = obj.add(tmp12, obj3);
                    }
                  }
                }
                let num4 = 0;
                if (0 < keys.length) {
                  while (true) {
                    try {
                      let schemaResult = closure_5.schema(tmp16);
                      let obj4 = { key: tmp15, schema: schemaResult };
                      let obj8 = { after: schemaResult._refs, group: tmp15 };
                      let addResult1 = obj.add(obj4, obj8);
                      num4 = num4 + 1;
                      if (num4 >= keys.length) {
                        break;
                      }
                    } catch (obj5) {
                      let str3 = "path";
                      if (obj5.hasOwnProperty("path")) {
                        let str4 = ".";
                        obj5.path = tmp15 + "." + obj5.path;
                      } else {
                        obj5.path = tmp15;
                      }
                      throw obj5;
                    }
                  }
                }
                cloneResult._inner.children = obj.nodes;
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
            const cloneResult = this.clone();
            cloneResult._flags.allowUnknown = false !== arg0;
            return cloneResult;
          }
          length(arg0) {
            closure_0 = module;
            tmp = closure_1;
            assert = closure_1.assert;
            isIntegerResult = closure_1.isInteger(module);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = module >= 0;
            }
            assertResult = assert(isIntegerResult, "limit must be a positive integer");
            return this._test("length", module, function(arg0, mergeResult, concatSettingsResult) {
              let error = arg0;
              if (Object.keys(arg0).length !== closure_0) {
                const self = this;
                const self2 = this;
                obj = { limit: tmp2 };
                error = this.createError("object.length", obj, mergeResult, concatSettingsResult);
              }
              return error;
            });
          }
          arity(arg0) {
            closure_0 = module;
            tmp = closure_1;
            assert = closure_1.assert;
            isIntegerResult = closure_1.isInteger(module);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = module >= 0;
            }
            assertResult = assert(isIntegerResult, "n must be a positive integer");
            return this._test("arity", module, function(arg0, mergeResult, concatSettingsResult) {
              let error = arg0;
              if (arg0.length !== closure_0) {
                const self = this;
                const self2 = this;
                obj = { n: tmp2 };
                error = this.createError("function.arity", obj, mergeResult, concatSettingsResult);
              }
              return error;
            });
          }
          minArity(arg0) {
            closure_0 = module;
            tmp = closure_1;
            assert = closure_1.assert;
            isIntegerResult = closure_1.isInteger(module);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = module > 0;
            }
            assertResult = assert(isIntegerResult, "n must be a strict positive integer");
            return this._test("minArity", module, function(arg0, mergeResult, concatSettingsResult) {
              let error = arg0;
              if (arg0.length < closure_0) {
                const self = this;
                const self2 = this;
                obj = { n: tmp2 };
                error = this.createError("function.minArity", obj, mergeResult, concatSettingsResult);
              }
              return error;
            });
          }
          maxArity(arg0) {
            closure_0 = module;
            tmp = closure_1;
            assert = closure_1.assert;
            isIntegerResult = closure_1.isInteger(module);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = module >= 0;
            }
            assertResult = assert(isIntegerResult, "n must be a positive integer");
            return this._test("maxArity", module, function(arg0, mergeResult, concatSettingsResult) {
              let error = arg0;
              if (arg0.length > closure_0) {
                const self = this;
                const self2 = this;
                obj = { n: tmp2 };
                error = this.createError("function.maxArity", obj, mergeResult, concatSettingsResult);
              }
              return error;
            });
          }
          min(arg0) {
            closure_0 = module;
            tmp = closure_1;
            assert = closure_1.assert;
            isIntegerResult = closure_1.isInteger(module);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = module >= 0;
            }
            assertResult = assert(isIntegerResult, "limit must be a positive integer");
            return this._test("min", module, function(arg0, mergeResult, concatSettingsResult) {
              let error = arg0;
              if (Object.keys(arg0).length < closure_0) {
                const self = this;
                const self2 = this;
                obj = { limit: tmp2 };
                error = this.createError("object.min", obj, mergeResult, concatSettingsResult);
              }
              return error;
            });
          }
          max(arg0) {
            closure_0 = module;
            tmp = closure_1;
            assert = closure_1.assert;
            isIntegerResult = closure_1.isInteger(module);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = module >= 0;
            }
            assertResult = assert(isIntegerResult, "limit must be a positive integer");
            return this._test("max", module, function(arg0, mergeResult, concatSettingsResult) {
              let error = arg0;
              if (Object.keys(arg0).length > closure_0) {
                const self = this;
                const self2 = this;
                obj = { limit: tmp2 };
                error = this.createError("object.max", obj, mergeResult, concatSettingsResult);
              }
              return error;
            });
          }
          pattern(source, otherwise) {
            closure_1.assert(source instanceof RegExp, "Invalid regular expression");
            let str;
            closure_1.assert(undefined !== otherwise, "Invalid rule");
            source = source.source;
            const _RegExp = RegExp;
            if (source.ignoreCase) {
              str = "i";
            }
            const _RegExp1 = new _RegExp(source, str);
            try {
              const self = this;
              const schemaResult = closure_5.schema(otherwise);
              const cloneResult = this.clone();
              const patterns = cloneResult._inner.patterns;
              obj = { regex: _RegExp1, rule: schemaResult };
              patterns.push(obj);
              return cloneResult;
            } catch (obj2) {
              if (obj2.hasOwnProperty("path")) {
                obj2.message = obj2.message + "(" + obj2.path + ")";
              }
              throw obj2;
            }
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
          with(key, Q) {
            return this._dependency("with", key, Q);
          }
          without(recipients, id2) {
            return this._dependency("without", recipients, id2);
          }
          xor() {
            return this._dependency("xor", null, closure_1.flatten(slice.call(arguments)));
          }
          or() {
            return this._dependency("or", null, closure_1.flatten(slice.call(arguments)));
          }
          and() {
            return this._dependency("and", null, closure_1.flatten(slice.call(arguments)));
          }
          nand() {
            return this._dependency("nand", null, closure_1.flatten(slice.call(arguments)));
          }
          requiredKeys(arg0) {
            return this.applyFunctionToChildren(closure_1.flatten(slice.call(arguments)), "required");
          }
          optionalKeys(arg0) {
            return this.applyFunctionToChildren(closure_1.flatten(slice.call(arguments)), "optional");
          }
          rename(from, to, arg2) {
            let applyToDefaults;
            let length;
            let renameDefaults;
            const self = this;
            closure_1.assert(typeof from === "string", "Rename missing the from argument");
            closure_1.assert(typeof to === "string", "Rename missing the to argument");
            closure_1.assert(to !== from, "Cannot rename key to same name:", from);
            let num = 0;
            let tmp4 = closure_1;
            if (0 < this._inner.renames.length) {
              do {
                let assertResult3 = closure_1.assert(self._inner.renames[num].from !== from, "Cannot rename the same key multiple times");
                num = num + 1;
                tmp4 = closure_1;
                length = self._inner.renames.length;
              } while (num < length);
            }
            obj = arg2;
            const cloneResult = self.clone();
            const renames = cloneResult._inner.renames;
            const push = renames.push;
            const obj2 = { from, to, options: applyToDefaults(renameDefaults, obj) };
            applyToDefaults = tmp4.applyToDefaults;
            renameDefaults = obj.renameDefaults;
            if (!arg2) {
              obj = {};
            }
            push(obj2);
            return cloneResult;
          }
          applyFunctionToChildren(arg0, arg1, arg2, arg3) {
            let applyResult;
            let schema;
            const self = this;
            items = [];
            const combined = items.concat(arg0);
            closure_1.assert(combined.length > 0, "expected at least one children");
            const groupChildrenResult = obj.groupChildren(combined);
            let str = "";
            if ("" in groupChildrenResult) {
              applyResult = obj.apply(self, arg2);
              delete tmp2[``];
            } else {
              applyResult = self.clone();
            }
            if (applyResult._inner.children) {
              let num2;
              const tmp4 = arg3;
              if (tmp4) {
                str = `${arg3}.`;
              }
              for (let num2 = 0; num2 < applyResult._inner.children.length; num2 = num2 + 1) {
                let tmp5 = applyResult._inner.children[num2];
                let tmp6 = groupChildrenResult[tmp5.key];
                if (tmp6) {
                  let obj3 = { key: null, _refs: null, schema: schema.applyFunctionToChildren(tmp6, arg1, arg2, str + tmp5.key) };
                  ({ key: obj2.key, _refs: obj2._refs, schema } = tmp5);
                  let children = applyResult._inner.children;
                  children[num2] = obj3;
                  delete tmp2[tmp5.key];
                }
              }
            }
            const keys = Object.keys(groupChildrenResult);
            closure_1.assert(0 === keys.length, "unknown key(s)", keys.join(", "));
            return applyResult;
          }
          _dependency(and, key, Q) {
            let length;
            items = [];
            const combined = items.concat(Q);
            let num = 0;
            if (0 < combined.length) {
              do {
                let assertResult = closure_1.assert(typeof combined[num] === "string", and, "peers must be a string or array of strings");
                num = num + 1;
                length = combined.length;
              } while (num < length);
            }
            const cloneResult = this.clone();
            const dependencies = cloneResult._inner.dependencies;
            obj = { type: and, key, peers: combined };
            dependencies.push(obj);
            return cloneResult;
          }
          describe(arg0) {
            let length;
            let length2;
            let rule;
            let schema;
            let str2;
            let str3;
            const self = this;
            const describe = closure_3.prototype.describe;
            const callResult = describe.call(self);
            if (callResult.rules) {
              let num;
              for (let num = 0; num < callResult.rules.length; num = num + 1) {
                let tmp2 = callResult.rules[num];
                let ref = tmp2.arg;
                if (ref) {
                  ref = "object" === fn(tmp2.arg);
                }
                if (ref) {
                  ref = tmp2.arg.schema;
                }
                if (ref) {
                  ref = tmp2.arg.ref;
                }
                if (ref) {
                  let arg = { schema: schema.describe(), ref: str2.toString() };
                  schema = tmp2.arg.schema;
                  str2 = tmp2.arg.ref;
                  tmp2.arg = arg;
                }
              }
            }
            if (self._inner.children) {
              const tmp5 = arg0;
              if (!tmp5) {
                callResult.children = {};
                let num3 = 0;
                if (0 < self._inner.children.length) {
                  do {
                    let tmp6 = self._inner.children[num3];
                    let schema2 = tmp6.schema;
                    callResult.children[tmp6.key] = schema2.describe();
                    num3 = num3 + 1;
                    length = self._inner.children.length;
                  } while (num3 < length);
                }
              }
            }
            if (self._inner.dependencies.length) {
              callResult.dependencies = closure_1.clone(self._inner.dependencies);
            }
            if (self._inner.patterns.length) {
              callResult.patterns = [];
              let num5 = 0;
              if (0 < self._inner.patterns.length) {
                do {
                  let tmp8 = self._inner.patterns[num5];
                  let patterns = callResult.patterns;
                  let obj2 = { regex: str3.toString(), rule: rule.describe() };
                  str3 = tmp8.regex;
                  let push = patterns.push;
                  rule = tmp8.rule;
                  let arr = push(obj2);
                  num5 = num5 + 1;
                  length2 = self._inner.patterns.length;
                } while (num5 < length2);
              }
            }
            if (self._inner.renames.length > 0) {
              callResult.renames = closure_1.clone(self._inner.renames);
            }
            return callResult;
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
            assert = closure_1.assert;
            if (!isContext) {
              num = 1;
              isContext = refResult.depth > 1;
            }
            assertResult = assert(isContext, "Cannot use assertions for root level references - use direct key rules instead");
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
              obj1 = { schema: null, ref: null };
              obj1.schema = schemaResult;
              obj1.ref = refResult;
              str3 = "assert";
              return this._test("assert", obj1, function(arg0, arg1, concatSettingsResult) {
                if (otherwise._validate(closure_0(arg0), null, concatSettingsResult, arg0).errors) {
                  const self = this;
                  const mergeResult = otherwise.merge({}, arg1);
                  mergeResult.key = key;
                  mergeResult.path = path;
                  const self2 = this;
                  obj = { ref: mergeResult.path, message: str };
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
            assertResult = closure_1.assert(typeof module === "function", "type must be a constructor function");
            if (!exports) {
              name = module.name;
            }
            obj = { name, ctor: module };
            closure_1 = obj;
            return this._test("type", obj, function(arg0, mergeResult, concatSettingsResult) {
              let error = arg0;
              if (!(arg0 instanceof closure_0)) {
                const self = this;
                obj = { type: obj.name };
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
            let self3 = this;
            let str = "Super expression must either be null or a function, not ";
            let self4 = this;
            let typeError = new TypeError("Super expression must either be null or a function, not " + typeof tmp2);
            let tmp13 = typeError;
            throw typeError;
          }
        }
        let prototype = tmp2;
        let _Object = Object;
        if (tmp2) {
          prototype = tmp2.prototype;
        }
        let obj2 = { constructor: obj3 };
        obj3 = { value: _class, enumerable: false, writable: true, configurable: true };
        _class.prototype = create(prototype, obj2);
        if (tmp2) {
          let _Object2 = Object;
          let _Object3 = Object;
          if (Object.setPrototypeOf) {
            _Object3.setPrototypeOf(_class, tmp2);
          } else {
            const ownPropertyNames = _Object3.getOwnPropertyNames(tmp2);
            let num7 = 0;
            let num8 = 1;
            if (0 < ownPropertyNames.length) {
              do {
                let tmp3 = ownPropertyNames[num7];
                let _Object4 = Object;
                let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(tmp2, tmp3);
                let tmp5 = num7;
                let tmp6 = ownPropertyDescriptor && ownPropertyDescriptor.configurable && undefined === _class[tmp3];
                if (tmp6) {
                  let _Object5 = Object;
                  let definePropertyResult = Object.defineProperty(_class, tmp3, ownPropertyDescriptor);
                }
                num7 = num7 + 1;
              } while (num7 < ownPropertyNames.length);
            }
          }
        }
        let self = this;
        let self2 = this;
        const object = new arg.Object();
        let tmp11 = object;
        module.exports = object;
      }
      fn = (arg0) => {
        const tmp = arg0;
        if (tmp) {
          const _Symbol = Symbol;
          if (typeof Symbol === "function") {
            let str;
            const _Symbol3 = Symbol;
            if (arg0.constructor === Symbol) {
              const _Symbol2 = Symbol;
              str = "symbol";
            }
            return str;
          }
        }
        str = typeof arg0;
      };
    },
    (arg0, arg1, fn) => {
      let closure_0 = fn(2);
      obj = {
        Topo: fn,
        mergeSort: (arg0, arg1) => {
          let num = 0;
          if (arg0.sort !== arg1.sort) {
            let num2 = 1;
            if (arg0.sort < arg1.sort) {
              num2 = -1;
            }
            num = num2;
          }
          return num;
        }
      };
      fn = () => {

      };
      module.exports = fn;
      obj.Topo.prototype.add = function(arg0, arg1) {
        obj = arg1;
        const self = this;
        items = [];
        const concat = items.concat;
        if (!arg1) {
          obj = {};
        }
        const tmp = obj.before || [];
        const combined = concat(tmp);
        const items1 = [];
        let after = obj.after;
        const concat2 = items1.concat;
        if (!after) {
          after = [];
        }
        const concat2Result = concat2(after);
        let closure_3 = tmp2;
        let closure_4 = obj.sort || 0;
        closure_0.assert(-1 === combined.indexOf(obj.group || "?"), "Item cannot come before itself:", obj.group || "?");
        closure_0.assert(-1 === combined.indexOf("?"), "Item cannot come before unassociated items");
        closure_0.assert(-1 === concat2Result.indexOf(obj.group || "?"), "Item cannot come after itself:", obj.group || "?");
        closure_0.assert(-1 === concat2Result.indexOf("?"), "Item cannot come after unassociated items");
        const items2 = [];
        const combined1 = items2.concat(arg0);
        const item = combined1.forEach((node, index) => {
          const _items = self._items;
          obj = { seq: self._items.length, sort, before: combined, after: concat2Result, group, node };
          _items.push(obj);
        });
        let str = "";
        const assert = closure_0.assert;
        const tmp10 = !self._sort();
        if ("?" !== (obj.group || "?")) {
          str = `added into group ${tmp2}`;
        }
        assert(tmp10, "item", str, "created a dependencies error");
        return self.nodes;
      };
      obj.Topo.prototype.merge = function(arg0) {
        let length;
        let length2;
        let num;
        const self = this;
        items = [];
        const combined = items.concat(arg0);
        for (let num = 0; num < combined.length; num = num + 1) {
          let tmp = combined[num];
          if (tmp) {
            let num2 = 0;
            if (0 < tmp._items.length) {
              do {
                let _items1 = self._items;
                let arr = _items1.push(closure_0.shallow(tmp._items[num2]));
                num2 = num2 + 1;
                length = tmp._items.length;
              } while (num2 < length);
            }
          }
        }
        const _items = self._items;
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
      obj.Topo.prototype._sort = function() {
        let after;
        let group;
        let length;
        let length2;
        let length4;
        let num10;
        let num3;
        let num6;
        let num8;
        let seq;
        const self = this;
        obj = {};
        const obj3 = Object.create(null);
        const obj4 = Object.create(null);
        let num = 0;
        if (0 < this._items.length) {
          do {
            let num2;
            let tmp3 = self._items[num];
            ({ seq, group } = tmp3);
            items = obj4[group];
            if (!items) {
              items = [];
            }
            obj4[group] = items;
            let arr2 = obj4[group];
            let arr = arr2.push(seq);
            ({ before: obj[seq], after } = tmp3);
            for (let num2 = 0; num2 < after.length; num2 = num2 + 1) {
              let items1 = obj3[after[num2]];
              let tmp6 = after[num2];
              if (!items1) {
                items1 = [];
              }
              obj3[tmp6] = items1.concat(seq);
            }
            num = num + 1;
          } while (num < self._items.length);
        }
        const keys = Object.keys(obj);
        for (let num3 = 0; num3 < keys.length; num3 = num3 + 1) {
          let num4;
          let tmp8 = keys[num3];
          let items2 = [];
          let _Object = Object;
          let keys1 = Object.keys(obj[tmp8]);
          for (let num4 = 0; num4 < keys1.length; num4 = num4 + 1) {
            let tmp10 = obj[tmp8][keys1[num4]];
            let items3 = obj4[tmp10];
            if (!items3) {
              items3 = [];
            }
            obj4[tmp10] = items3;
            let num5 = 0;
            if (0 < obj4[tmp10].length) {
              do {
                let arr3 = items2.push(obj4[tmp10][num5]);
                num5 = num5 + 1;
                length = obj4[tmp10].length;
              } while (num5 < length);
            }
          }
          obj[tmp8] = items2;
        }
        const keys2 = Object.keys(obj3);
        for (let num6 = 0; num6 < keys2.length; num6 = num6 + 1) {
          let tmp13 = keys2[num6];
          if (obj4[tmp13]) {
            let num7 = 0;
            if (0 < obj4[tmp13].length) {
              do {
                let tmp15 = obj4[tmp13][num7];
                let obj2 = obj[tmp15];
                obj[tmp15] = obj2.concat(obj3[tmp13]);
                num7 = num7 + 1;
                length2 = obj4[tmp13].length;
              } while (num7 < length2);
            }
          }
        }
        const obj5 = {};
        const keys3 = Object.keys(obj);
        for (let num8 = 0; num8 < keys3.length; num8 = num8 + 1) {
          let num9;
          let tmp16 = keys3[num8];
          let arr10 = obj[tmp16];
          for (let num9 = 0; num9 < arr10.length; num9 = num9 + 1) {
            let items4 = obj5[arr10[num9]];
            let tmp18 = arr10[num9];
            if (!items4) {
              items4 = [];
            }
            obj5[tmp18] = items4.concat(tmp16);
          }
        }
        const obj10 = {};
        const items5 = [];
        for (let num10 = 0; num10 < self._items.length; num10 = num10 + 1) {
          let tmp21 = num10;
          if (obj5[num10]) {
            let num11 = 0;
            tmp21 = null;
            if (0 < self._items.length) {
              while (true) {
                if (true === obj10[num11]) {
                  let sum = num11 + 1;
                  num11 = sum;
                  tmp21 = null;
                  if (sum >= self._items.length) {
                    break;
                  }
                } else {
                  if (!obj5[num11]) {
                    obj5[num11] = [];
                  }
                  let length3 = obj5[num11].length;
                  let num12 = 0;
                  let num13 = 0;
                  let num14 = 0;
                  if (0 < length3) {
                    do {
                      let sum1 = num13;
                      if (items5.indexOf(obj5[num11][num12]) >= 0) {
                        sum1 = num13 + 1;
                      }
                      num12 = num12 + 1;
                      num13 = sum1;
                      num14 = sum1;
                    } while (num12 < length3);
                  }
                  tmp21 = num11;
                  if (num14 === length3) {
                    break;
                  }
                }
                break;
              }
            }
          }
          if (null !== tmp21) {
            let str1 = tmp21.toString();
            obj10[str1] = true;
            let arr4 = items5.push(str1);
          }
        }
        if (items5.length !== self._items.length) {
          const _Error = Error;
          const self2 = this;
          const self3 = this;
          const error = new Error("Invalid dependencies");
          return error;
        } else {
          const obj11 = {};
          let num15 = 0;
          if (0 < self._items.length) {
            do {
              let tmp29 = self._items[num15];
              obj11[tmp29.seq] = tmp29;
              num15 = num15 + 1;
              length4 = self._items.length;
            } while (num15 < length4);
          }
          const items6 = [];
          self._items = items5.map((item) => {
            items6.push(obj11[item].node);
            return obj11[item];
          });
          self.nodes = items6;
        }
      };
    },
    (arg0, arg1, fn) => {
      let stringResult;
      obj = fn(1);
      const object = obj.object;
      const obj2 = { abortEarly: obj.boolean(), convert: obj.boolean(), allowUnknown: obj.boolean(), skipFunctions: obj.boolean(), stripUnknown: items, language: obj.object(), presence: stringResult.only("required", "optional", "forbidden", "ignore"), raw: obj.boolean(), context: obj.object(), strip: obj.boolean(), noDefaults: obj.boolean() };
      items = [obj.boolean(), ];
      const obj3 = { arrays: obj.boolean(), objects: obj.boolean() };
      const objectResult = obj.object(obj3);
      items[1] = objectResult.or("arrays", "objects");
      stringResult = obj.string();
      const objectResult2 = object(obj2);
      arg1.options = objectResult2.strict();
    },
    function(arg0, arg1, fn) {
      let closure_0;
      const tmp = fn(14);
      let closure_1 = fn(2);
      items = tmp;
      class _class {
        constructor() {
          self = this;
          if (this instanceof _class) {
            callResult = closure_0.call(self);
            if (self) {
              tmp8 = self;
              if (callResult) {
                if (typeof callResult === "object") {
                  tmp8 = callResult;
                } else {
                  tmp8 = self;
                }
              }
              str3 = "lazy";
              tmp8._type = "lazy";
              return tmp8;
            } else {
              tmp5 = globalThis;
              _ReferenceError = ReferenceError;
              self4 = this;
              str2 = "this hasn't been initialised - super() hasn't been called";
              self5 = this;
              referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
              tmp7 = referenceError;
              throw referenceError;
            }
          } else {
            tmp = globalThis;
            _TypeError = TypeError;
            self2 = this;
            str = "Cannot call a class as a function";
            self3 = this;
            typeError = new TypeError("Cannot call a class as a function");
            tmp3 = typeError;
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
          assertResult = closure_1.assert(typeof module === "function", "You must provide a function as first argument");
          cloneResult = this.clone();
          cloneResult._flags.lazy = module;
          return cloneResult;
        }
      }
      if (typeof tmp !== "function") {
        if (null !== tmp) {
          let _TypeError = TypeError;
          let self = this;
          let self2 = this;
          let typeError = new TypeError("Super expression must either be null or a function, not " + typeof tmp);
          throw typeError;
        }
      }
      let prototype = tmp;
      const _Object = Object;
      if (tmp) {
        prototype = tmp.prototype;
      }
      obj = { constructor: { value: _class, enumerable: false, writable: true, configurable: true } };
      _class.prototype = create(prototype, obj);
      if (tmp) {
        const _Object2 = Object;
        const _Object3 = Object;
        if (Object.setPrototypeOf) {
          _Object3.setPrototypeOf(_class, tmp);
        } else {
          let num;
          const ownPropertyNames = _Object3.getOwnPropertyNames(tmp);
          for (let num = 0; num < ownPropertyNames.length; num = num + 1) {
            let tmp2 = ownPropertyNames[num];
            let _Object4 = Object;
            let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(tmp, tmp2);
            let tmp5 = ownPropertyDescriptor && ownPropertyDescriptor.configurable && undefined === _class[tmp2];
            if (tmp5) {
              let _Object5 = Object;
              let definePropertyResult = Object.defineProperty(_class, tmp2, ownPropertyDescriptor);
            }
          }
        }
      }
      const obj2 = { Lazy: _class };
      let lazy = new obj2.Lazy();
      module.exports = lazy;
    },
    function(arg0, arg1, fn) {
      let obj3;
      if (typeof Symbol === "function") {
        let _Symbol = Symbol;
        if (typeof Symbol.iterator === "symbol") {
          fn = (arg0) => typeof arg0;
        }
        let tmp = fn;
        let num = 14;
        let tmp2 = fn(14);
        let closure_1 = tmp2;
        let num2 = 19;
        let closure_2 = fn(19);
        let num3 = 2;
        let closure_3 = fn(2);
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
            },
          Array: _class,
          safeParse: (arg0, arg1) => {
              try {
                const _JSON = JSON;
                const parsed = JSON.parse(arg0);
                const _Array = Array;
                if (Array.isArray(parsed)) {
                  arg1.value = parsed;
                }
              } catch (err) {
              }
            }
        };
        items = tmp2;
        class _class {
          constructor() {
            const self = this;
            if (this instanceof _class) {
              const callResult = closure_0.call(self);
              if (self) {
                let tmp8 = self;
                if (callResult) {
                  if (typeof callResult === "object") {
                    tmp8 = callResult;
                  } else {
                    tmp8 = self;
                  }
                }
                tmp8._type = "array";
                tmp8._inner.items = [];
                tmp8._inner.ordereds = [];
                tmp8._inner.inclusions = [];
                tmp8._inner.exclusions = [];
                tmp8._inner.requireds = [];
                tmp8._flags.sparse = false;
                return tmp8;
              } else {
                const _ReferenceError = ReferenceError;
                const self4 = this;
                const self5 = this;
                const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                throw referenceError;
              }
            } else {
              const _TypeError = TypeError;
              const self2 = this;
              const self3 = this;
              const typeError = new TypeError("Cannot call a class as a function");
              throw typeError;
            }
          }
          _base(value, mergeResult, convert) {
            obj = { value };
            convert = typeof value === "string";
            if (typeof value === "string") {
              convert = convert.convert;
            }
            if (convert) {
              obj.safeParse(value, obj);
            }
            const self = this;
            const isArray = Array.isArray(obj.value);
            let flag = isArray;
            const tmp4 = convert.convert && self._flags.single && !isArray;
            if (tmp4) {
              items = [obj.value];
              obj.value = items;
              flag = true;
            }
            if (flag) {
              if (!self._inner.inclusions.length) {
                if (!self._inner.exclusions.length) {
                  if (!self._inner.requireds.length) {
                    return obj;
                  }
                }
              }
              if (isArray) {
                const value2 = obj.value;
                obj.value = value2.slice(0);
              }
              const _checkItems = self._checkItems;
              value = obj.value;
              obj.errors = _checkItems.call(self, value, isArray, mergeResult, convert);
              if (obj.errors) {
                if (isArray) {
                  if (convert.convert) {
                    if (self._flags.single) {
                      const items1 = [obj.value];
                      obj.value = items1;
                      const _checkItems2 = self._checkItems;
                      const value4 = obj.value;
                      const errors = obj.errors;
                      obj.errors = _checkItems2.call(self, value4, isArray, mergeResult, convert);
                      if (obj.errors) {
                        obj.errors = errors;
                        obj.value = obj.value[0];
                      }
                    }
                  }
                }
              }
            } else {
              obj.errors = self.createError("array.base", null, mergeResult, convert);
              return obj;
            }
          }
          _checkItems(substr, arg1, key, abortEarly) {
            let sum;
            const self = this;
            items = [];
            const requireds = this._inner.requireds;
            substr = requireds.slice();
            const ordereds = this._inner.ordereds;
            const substr1 = ordereds.slice();
            const inclusions = this._inner.inclusions;
            const combined = inclusions.concat(substr);
            let length = substr.length;
            let num = 0;
            if (0 < length) {
              while (true) {
                let diff;
                let diff1;
                let tmp = substr[num];
                key = num;
                if (!arg1) {
                  key = key.key;
                }
                obj = { key, path: sum, parent: null, reference: null };
                let path = key.path;
                if (arg1) {
                  let str = "";
                  if (path) {
                    str = `${key.path}.`;
                  }
                  sum = str + num;
                } else {
                  sum = path;
                }
                ({ parent: obj.parent, reference: obj.reference } = key);
                if (!self._flags.sparse) {
                  if (undefined === tmp) {
                    let obj2 = { key: key.key, path: obj.path, pos: num };
                    let str2 = "array.sparse";
                    let arr = items.push(self.createError("array.sparse", null, obj2, abortEarly));
                    diff = num;
                    diff1 = length;
                    if (abortEarly.abortEarly) {
                      break;
                    }
                  }
                  num = diff + 1;
                  length = diff1;
                }
                let num2 = 0;
                let flag = false;
                if (0 < self._inner.exclusions.length) {
                  let obj3 = self._inner.exclusions[num2];
                  while (obj3._validate(tmp, obj, {}).errors) {
                    let sum1 = num2 + 1;
                    num2 = sum1;
                    flag = false;
                  }
                  let str3 = "array.excludesSingle";
                  let push = items.push;
                  let createError = self.createError;
                  if (arg1) {
                    str3 = "array.excludes";
                  }
                  let obj4 = { pos: num, value: tmp };
                  let obj5 = { key: key.key, path: obj.path };
                  let arr2 = push(createError(str3, obj4, obj5, abortEarly));
                  flag = true;
                  if (abortEarly.abortEarly) {
                    return items;
                  }
                }
                diff = num;
                diff1 = length;
                if (!flag) {
                  if (self._inner.ordereds.length) {
                    if (substr1.length > 0) {
                      let arr3 = substr1.shift();
                      let iter2 = arr3._validate(tmp, obj, abortEarly);
                      if (iter2.errors) {
                        let obj6 = { pos: num, reason: iter2.errors, value: tmp };
                        let obj7 = { key: key.key, path: obj.path };
                        let str10 = "array.ordered";
                        let arr4 = items.push(self.createError("array.ordered", obj6, obj7, abortEarly));
                        diff = num;
                        diff1 = length;
                        if (abortEarly.abortEarly) {
                          return items;
                        }
                      } else if (arr3._flags.strip) {
                        let fastSpliceResult = obj.fastSplice(substr, num);
                        diff = num - 1;
                        diff1 = length - 1;
                      } else {
                        if (!self._flags.sparse) {
                          if (undefined === iter2.value) {
                            let obj9 = { key: key.key, path: obj.path, pos: num };
                            let str9 = "array.sparse";
                            let arr5 = items.push(self.createError("array.sparse", null, obj9, abortEarly));
                            diff = num;
                            diff1 = length;
                            if (abortEarly.abortEarly) {
                              return items;
                            }
                          }
                        }
                        substr[num] = iter2.value;
                        diff = num;
                        diff1 = length;
                      }
                    } else if (!self._inner.items.length) {
                      let obj11 = { pos: num, limit: self._inner.ordereds.length };
                      let obj12 = { key: key.key, path: obj.path };
                      let str4 = "array.orderedLength";
                      let arr6 = items.push(self.createError("array.orderedLength", obj11, obj12, abortEarly));
                      diff = num;
                      diff1 = length;
                      if (abortEarly.abortEarly) {
                        return items;
                      }
                    }
                  }
                  let items1 = [];
                  let length2 = substr.length;
                  let num3 = 0;
                  let flag2 = false;
                  if (0 < length2) {
                    let obj8 = substr[num3];
                    let iter = obj8._validate(tmp, obj, abortEarly);
                    items1[num3] = iter;
                    while (iter.errors) {
                      let sum2 = num3 + 1;
                      num3 = sum2;
                      flag2 = false;
                    }
                    substr[num] = iter.value;
                    let fastSpliceResult1 = obj.fastSplice(substr, num3);
                    let diff2 = length2 - 1;
                    flag2 = true;
                    if (!self._flags.sparse) {
                      flag2 = true;
                      if (undefined === iter.value) {
                        let obj13 = { key: key.key, path: obj.path, pos: num };
                        let str5 = "array.sparse";
                        let arr7 = items.push(self.createError("array.sparse", null, obj13, abortEarly));
                        flag2 = true;
                        if (abortEarly.abortEarly) {
                          return items;
                        }
                      }
                    }
                  }
                  diff = num;
                  diff1 = length;
                  if (!flag2) {
                    let stripUnknown = abortEarly.stripUnknown;
                    if (stripUnknown) {
                      let tmp36 = true === abortEarly.stripUnknown || abortEarly.stripUnknown.arrays;
                      stripUnknown = tmp36;
                    }
                    let length3 = combined.length;
                    let num4 = 0;
                    let flag3 = flag2;
                    let diff5 = num;
                    let diff6 = length;
                    let flag4 = flag;
                    if (0 < length3) {
                      let tmp50;
                      while (true) {
                        let obj10 = combined[num4];
                        let index = substr.indexOf(obj10);
                        if (-1 !== index) {
                          tmp50 = items1[index];
                        } else {
                          let iter3 = obj10._validate(tmp, obj, abortEarly);
                          tmp50 = iter3;
                          if (!iter3.errors) {
                            let diff3;
                            let diff4;
                            let flag5;
                            if (obj10._flags.strip) {
                              let fastSpliceResult2 = obj.fastSplice(substr, num);
                              diff3 = num - 1;
                              diff4 = length - 1;
                              flag5 = flag;
                            } else {
                              if (!self._flags.sparse) {
                                if (undefined === iter3.value) {
                                  let obj14 = { key: key.key, path: obj.path, pos: num };
                                  let str6 = "array.sparse";
                                  let arr15 = items.push(self.createError("array.sparse", null, obj14, abortEarly));
                                  diff3 = num;
                                  diff4 = length;
                                  flag5 = true;
                                }
                              }
                              substr[num] = iter3.value;
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
                      if (stripUnknown) {
                        let fastSpliceResult3 = obj.fastSplice(substr, num);
                        diff5 = num - 1;
                        diff6 = length - 1;
                        flag3 = true;
                        flag4 = flag;
                      } else {
                        let str7 = "array.includesOneSingle";
                        let push2 = items.push;
                        let createError2 = self.createError;
                        if (arg1) {
                          str7 = "array.includesOne";
                        }
                        let obj15 = { pos: num, reason: tmp50.errors, value: tmp };
                        let obj16 = { key: key.key, path: obj.path };
                        let push2Result = push2(createError2(str7, obj15, obj16, abortEarly));
                        flag3 = flag2;
                        diff5 = num;
                        diff6 = length;
                        flag4 = true;
                        if (abortEarly.abortEarly) {
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
                          if (stripUnknown) {
                            let fastSpliceResult4 = obj.fastSplice(substr, diff5);
                            diff = diff5 - 1;
                            diff1 = diff6 - 1;
                          } else {
                            let str8 = "array.includesSingle";
                            let push3 = items.push;
                            let createError3 = self.createError;
                            if (arg1) {
                              str8 = "array.includes";
                            }
                            let obj17 = { pos: diff5, value: tmp };
                            let obj18 = { key: key.key, path: obj.path };
                            let push3Result = push3(createError3(str8, obj17, obj18, abortEarly));
                            diff = diff5;
                            diff1 = diff6;
                            if (abortEarly.abortEarly) {
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
              const _fillMissedErrors = self._fillMissedErrors;
              _fillMissedErrors.call(self, items, substr, key, abortEarly);
            }
            if (substr1.length) {
              const _fillOrderedErrors = self._fillOrderedErrors;
              _fillOrderedErrors.call(self, items, substr1, key, abortEarly);
            }
            let tmp79 = null;
            if (items.length) {
              tmp79 = items;
            }
            return tmp79;
          }
          describe() {
            let length;
            let length2;
            const self = this;
            const describe = closure_1.prototype.describe;
            const callResult = describe.call(self);
            if (self._inner.ordereds.length) {
              callResult.orderedItems = [];
              let num = 0;
              if (0 < self._inner.ordereds.length) {
                do {
                  let orderedItems = callResult.orderedItems;
                  obj = self._inner.ordereds[num];
                  let arr = orderedItems.push(obj.describe());
                  num = num + 1;
                  length = self._inner.ordereds.length;
                } while (num < length);
              }
            }
            if (self._inner.items.length) {
              callResult.items = [];
              let num3 = 0;
              if (0 < self._inner.items.length) {
                do {
                  items = callResult.items;
                  let obj2 = self._inner.items[num3];
                  let arr2 = items.push(obj2.describe());
                  num3 = num3 + 1;
                  length2 = self._inner.items.length;
                } while (num3 < length2);
              }
            }
            return callResult;
          }
          items() {
            cloneResult = this.clone();
            closure_0 = cloneResult;
            slice = Array.prototype.slice;
            tmp2 = closure_3;
            flattenResult = closure_3.flatten(slice.call(arguments));
            item = flattenResult.forEach((item, path) => {
              try {
                const schemaResult = closure_2.schema(item);
                items = fn._inner.items;
                items.push(schemaResult);
                if ("required" === schemaResult._flags.presence) {
                  const requireds = fn._inner.requireds;
                  requireds.push(schemaResult);
                } else if ("forbidden" === schemaResult._flags.presence) {
                  const exclusions = fn._inner.exclusions;
                  exclusions.push(schemaResult.optional());
                } else {
                  const inclusions = fn._inner.inclusions;
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
            tmp2 = closure_3;
            flattenResult = closure_3.flatten(slice.call(arguments));
            item = flattenResult.forEach((item, path) => {
              try {
                const ordereds = fn._inner.ordereds;
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
            assert = closure_3.assert;
            isIntegerResult = closure_3.isInteger(module);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = module >= 0;
            }
            assertResult = assert(isIntegerResult, "limit must be a positive integer");
            return this._test("min", module, function(value, mergeResult, concatSettingsResult) {
              let error = value;
              if (value.length < closure_0) {
                const self = this;
                const self2 = this;
                obj = { limit: tmp, value };
                error = this.createError("array.min", obj, mergeResult, concatSettingsResult);
              }
              return error;
            });
          }
          max(arg0) {
            closure_0 = module;
            tmp = closure_3;
            assert = closure_3.assert;
            isIntegerResult = closure_3.isInteger(module);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = module >= 0;
            }
            assertResult = assert(isIntegerResult, "limit must be a positive integer");
            return this._test("max", module, function(value, mergeResult, concatSettingsResult) {
              let error = value;
              if (value.length > closure_0) {
                const self = this;
                const self2 = this;
                obj = { limit: tmp, value };
                error = this.createError("array.max", obj, mergeResult, concatSettingsResult);
              }
              return error;
            });
          }
          length(arg0) {
            closure_0 = module;
            tmp = closure_3;
            assert = closure_3.assert;
            isIntegerResult = closure_3.isInteger(module);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = module >= 0;
            }
            assertResult = assert(isIntegerResult, "limit must be a positive integer");
            return this._test("length", module, function(value, mergeResult, concatSettingsResult) {
              let error = value;
              if (value.length !== closure_0) {
                const self = this;
                const self2 = this;
                obj = { limit: tmp, value };
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
                    str = fn(tmp);
                  }
                  let arr = items1 ? obj.custom : obj[str];
                  if (arr) {
                    let _Array = Array;
                    if (Array.isArray(arr)) {
                      let num2 = 0;
                      if (0 < arr.length) {
                        while (!deepEqual(arr[num2], tmp)) {
                          num2 = num2 + 1;
                          continue;
                        }
                        let obj2 = { pos: num, value: tmp };
                        let str3 = "array.unique";
                        return self.createError("array.unique", obj2, mergeResult, concatSettingsResult);
                      }
                      let arr2 = arr.push(tmp);
                    } else if (arr[tmp]) {
                      break;
                    } else {
                      arr[tmp] = true;
                    }
                  }
                  num = num + 1;
                }
                const obj3 = { pos: num, value: tmp };
                return self.createError("array.unique", obj3, mergeResult, concatSettingsResult);
              }
              return arg0;
            });
          }
          sparse(arg0) {
            const cloneResult = this.clone();
            let tmp2 = undefined === arg0;
            const _flags = cloneResult._flags;
            if (!tmp2) {
              tmp2 = arg0;
            }
            _flags.sparse = tmp2;
            return cloneResult;
          }
          single(arg0) {
            const cloneResult = this.clone();
            let tmp2 = undefined === arg0;
            const _flags = cloneResult._flags;
            if (!tmp2) {
              tmp2 = arg0;
            }
            _flags.single = tmp2;
            return cloneResult;
          }
          _fillMissedErrors(arg0, arg1, arg2, concatSettingsResult) {
            items = [];
            let num = 0;
            let num2 = 0;
            let num3 = 0;
            if (0 < arg1.length) {
              do {
                let sum;
                obj = arg1[num2];
                let _getLabelResult = obj._getLabel();
                if (_getLabelResult) {
                  let arr = items.push(_getLabelResult);
                  sum = num3;
                } else {
                  sum = num3 + 1;
                }
                num2 = num2 + 1;
                num3 = sum;
                num = sum;
              } while (num2 < arg1.length);
            }
            const self = this;
            const push = arg0.push;
            const createError = this.createError;
            if (items.length) {
              if (num) {
                const obj2 = { knownMisses: items, unknownMisses: num };
                const obj4 = { key: null, path: null };
                ({ key: obj7.key, path: obj7.path } = arg2);
                push(createError("array.includesRequiredBoth", obj2, obj4, concatSettingsResult));
              } else {
                const obj13 = { key: null, path: null };
                const obj6 = { knownMisses: items };
                ({ key: obj5.key, path: obj5.path } = arg2);
                push(createError("array.includesRequiredKnowns", obj6, obj13, concatSettingsResult));
              }
            } else {
              const obj14 = { unknownMisses: num };
              const obj15 = { key: null, path: null };
              ({ key: obj3.key, path: obj3.path } = arg2);
              push(createError("array.includesRequiredUnknowns", obj14, obj15, concatSettingsResult));
            }
          }
          _fillOrderedErrors(arg0, arg1, arg2, arg3) {
            let num;
            items = [];
            for (let num = 0; num < arg1.length; num = num + 1) {
              if ("required" === closure_3.reach(arg1[num], "_flags.presence")) {
                let arr = items.push(arg1[num]);
              }
            }
            if (items.length) {
              const self = this;
              const _fillMissedErrors = this._fillMissedErrors;
              _fillMissedErrors.call(self, arg0, items, arg2, arg3);
            }
          }
        }
        if (typeof tmp2 !== "function") {
          let tmp14 = null;
          if (null !== tmp2) {
            let _TypeError = TypeError;
            let self3 = this;
            let str = "Super expression must either be null or a function, not ";
            let self4 = this;
            let typeError = new TypeError("Super expression must either be null or a function, not " + typeof tmp2);
            let tmp13 = typeError;
            throw typeError;
          }
        }
        let prototype = tmp2;
        const _Object = Object;
        if (tmp2) {
          prototype = tmp2.prototype;
        }
        let obj2 = { constructor: obj3 };
        obj3 = { value: _class, enumerable: false, writable: true, configurable: true };
        _class.prototype = create(prototype, obj2);
        if (tmp2) {
          const _Object2 = Object;
          const _Object3 = Object;
          if (Object.setPrototypeOf) {
            _Object3.setPrototypeOf(_class, tmp2);
          } else {
            let num4;
            const ownPropertyNames = _Object3.getOwnPropertyNames(tmp2);
            for (let num4 = 0; num4 < ownPropertyNames.length; num4 = num4 + 1) {
              let tmp3 = ownPropertyNames[num4];
              let _Object4 = Object;
              let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(tmp2, tmp3);
              let tmp5 = num4;
              let tmp6 = ownPropertyDescriptor && ownPropertyDescriptor.configurable && undefined === _class[tmp3];
              if (tmp6) {
                let _Object5 = Object;
                let definePropertyResult = Object.defineProperty(_class, tmp3, ownPropertyDescriptor);
              }
            }
          }
        }
        let self = this;
        let self2 = this;
        const array = new obj.Array();
        module.exports = array;
      }
      fn = (arg0) => {
        const tmp = arg0;
        if (tmp) {
          const _Symbol = Symbol;
          if (typeof Symbol === "function") {
            let str;
            const _Symbol3 = Symbol;
            if (arg0.constructor === Symbol) {
              const _Symbol2 = Symbol;
              str = "symbol";
            }
            return str;
          }
        }
        str = typeof arg0;
      };
    },
    (arg0, arg1, fn) => {
      let closure_0 = arg0;
      let closure_1 = fn;
      fn = function(arg0) {
        const tmp = closure_1(14);
        closure_1 = closure_1(2);
        closure_0 = tmp;
        class _class {
          constructor() {
            self = this;
            if (this instanceof _class) {
              callResult = closure_0.call(self);
              if (self) {
                tmp8 = self;
                if (callResult) {
                  if (typeof callResult === "object") {
                    tmp8 = callResult;
                  } else {
                    tmp8 = self;
                  }
                }
                str3 = "binary";
                tmp8._type = "binary";
                return tmp8;
              } else {
                tmp5 = globalThis;
                _ReferenceError = ReferenceError;
                self4 = this;
                str2 = "this hasn't been initialised - super() hasn't been called";
                self5 = this;
                referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                tmp7 = referenceError;
                throw referenceError;
              }
            } else {
              tmp = globalThis;
              _TypeError = TypeError;
              self2 = this;
              str = "Cannot call a class as a function";
              self3 = this;
              typeError = new TypeError("Cannot call a class as a function");
              tmp3 = typeError;
              throw typeError;
            }
          }
          _base(arg0, arg1, arg2) {
            self = this;
            obj = { value: arg0 };
            if (typeof arg0 === "string") {
              if (arg2.convert) {
                try {
                  tmp = closure_0;
                  self2 = this;
                  self3 = this;
                  tmp2 = arg0;
                  tmp3 = new closure_0(arg0, self._flags.encoding);
                  tmp4 = tmp3;
                  obj.value = tmp3;
                } catch (err) {
                }
              }
            }
            error = null;
            if (!closure_0.isBuffer(obj.value)) {
              tmp6 = arg1;
              str = "binary.base";
              tmp7 = self;
              tmp8 = null;
              tmp9 = arg2;
              error = self.createError("binary.base", null, arg1, arg2);
            }
            obj.errors = error;
            return obj;
          }
          encoding(arg0) {
            assertResult = closure_1.assert(closure_0.isEncoding(arg0), "Invalid encoding:", arg0);
            cloneResult = this.clone();
            cloneResult._flags.encoding = arg0;
            return cloneResult;
          }
          min(arg0) {
            closure_0 = arg0;
            tmp = closure_1;
            assert = closure_1.assert;
            isIntegerResult = closure_1.isInteger(arg0);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = arg0 >= 0;
            }
            assertResult = assert(isIntegerResult, "limit must be a positive integer");
            return this._test("min", arg0, () => { /* body not rendered: F155402 */ });
          }
          max(arg0) {
            closure_0 = arg0;
            tmp = closure_1;
            assert = closure_1.assert;
            isIntegerResult = closure_1.isInteger(arg0);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = arg0 >= 0;
            }
            assertResult = assert(isIntegerResult, "limit must be a positive integer");
            return this._test("max", arg0, () => { /* body not rendered: F155403 */ });
          }
          length(arg0) {
            closure_0 = arg0;
            tmp = closure_1;
            assert = closure_1.assert;
            isIntegerResult = closure_1.isInteger(arg0);
            if (isIntegerResult) {
              num = 0;
              isIntegerResult = arg0 >= 0;
            }
            assertResult = assert(isIntegerResult, "limit must be a positive integer");
            return this._test("length", arg0, () => { /* body not rendered: F155404 */ });
          }
        }
        if (typeof tmp !== "function") {
          if (null !== tmp) {
            let _TypeError = TypeError;
            let self = this;
            let self2 = this;
            let typeError = new TypeError("Super expression must either be null or a function, not " + typeof tmp);
            throw typeError;
          }
        }
        let prototype = tmp;
        const _Object = Object;
        if (tmp) {
          prototype = tmp.prototype;
        }
        obj = { constructor: { value: _class, enumerable: false, writable: true, configurable: true } };
        _class.prototype = create(prototype, obj);
        if (tmp) {
          const _Object2 = Object;
          const _Object3 = Object;
          if (Object.setPrototypeOf) {
            _Object3.setPrototypeOf(_class, tmp);
          } else {
            let num;
            const ownPropertyNames = _Object3.getOwnPropertyNames(tmp);
            for (let num = 0; num < ownPropertyNames.length; num = num + 1) {
              let tmp2 = ownPropertyNames[num];
              let _Object4 = Object;
              let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(tmp, tmp2);
              let tmp5 = ownPropertyDescriptor && ownPropertyDescriptor.configurable && undefined === _class[tmp2];
              if (tmp5) {
                let _Object5 = Object;
                let definePropertyResult = Object.defineProperty(_class, tmp2, ownPropertyDescriptor);
              }
            }
          }
        }
        const obj2 = { Binary: _class };
        const binary = new obj2.Binary();
        closure_0.exports = binary;
      };
      let callResult = fn.call(arg1, fn(3).Buffer);
    },
    (arg0, arg1) => {
      let items1;
      let items2;
      const exports = { _args: items1, _from: "joi@10.0.5", _id: "joi@10.0.5", _inCache: true, _location: "/joi", _nodeVersion: "6.9.1", _npmOperationalInternal: { host: "packages-12-west.internal.npmjs.com", tmp: "tmp/joi-10.0.5.tgz_1480956525182_0.0934728232678026" }, _npmUser: { name: "marsup", email: "nicolas@morel.io" }, _npmVersion: "3.10.10", _phantomChildren: {}, _requested: { raw: "joi@10.0.5", scope: null, escapedName: "joi", name: "joi", rawSpec: "10.0.5", spec: "10.0.5", type: "version" }, _requiredBy: ["#DEV:/"], _resolved: "https://registry.npmjs.org/joi/-/joi-10.0.5.tgz", _shasum: "2e43af9bf24d2d5745852e9ab968c85be357bd6a", _shrinkwrap: null, _spec: "joi@10.0.5", _where: "/Users/jeff/projects/joi-browser", bugs: { url: "https://github.com/hapijs/joi/issues" }, dependencies: { hoek: "4.x.x", isemail: "2.x.x", items: "2.x.x", topo: "2.x.x" }, description: "Object schema validation", devDependencies: { code: "4.x.x", lab: "11.x.x", "markdown-toc": "0.13.x" }, directories: {}, dist: { shasum: "2e43af9bf24d2d5745852e9ab968c85be357bd6a", tarball: "https://registry.npmjs.org/joi/-/joi-10.0.5.tgz" }, engines: { node: ">=4.0.0" }, gitHead: "abfe727885af779a676e6a205ee15cdc8b435691", homepage: "https://github.com/hapijs/joi", keywords: ["hapi", "schema", "validation"], license: "BSD-3-Clause", main: "lib/index.js", maintainers: items2, name: "joi", optionalDependencies: {}, readme: "ERROR: No README data found!", repository: { type: "git", url: "git://github.com/hapijs/joi.git" }, scripts: { test: "lab -t 100 -a code -L", "test-cov-html": "lab -r html -o coverage.html -a code", "test-debug": "node $NODE_DEBUG_OPTION ./node_modules/.bin/lab -a code", toc: "node generate-readme-toc.js", version: "npm run toc && git add API.md README.md" }, version: "10.0.5" };
      items = [{ raw: "joi@10.0.5", scope: null, escapedName: "joi", name: "joi", rawSpec: "10.0.5", spec: "10.0.5", type: "version" }, "/Users/jeff/projects/joi-browser"];
      items1 = [items];
      items2 = [{ name: "hueniverse", email: "eran@hueniverse.com" }, { name: "marsup", email: "marsup@gmail.com" }];
      arg0.exports = exports;
    }
  ];
  function __webpack_require__(id) {
    let _exports;
    let _exports2;
    if (obj[id]) {
      return obj[id].exports;
    } else {
      obj = { exports: {}, id, loaded: true };
      obj[id] = obj;
      ({ exports: _exports, exports: _exports2 } = obj);
      items[id].call(_exports, obj, _exports2, __webpack_require__);
      return obj.exports;
    }
  }
  const c = {};
  __webpack_require__.m = items;
  __webpack_require__.c = c;
  __webpack_require__.p = "";
  if (c[0]) {
    _exports3 = c[0].exports;
  } else {
    let obj2 = { exports: {}, id: 0, loaded: true };
    let num = 0;
    c[0] = obj2;
    let first = items[0];
    ({ exports: _exports, exports: _exports2 } = obj2);
    let tmp = first;
    let tmp3 = obj2;
    let tmp5 = __webpack_require__;
    let callResult = first.call(_exports, obj2, _exports2, __webpack_require__);
    let flag = true;
    _exports3 = obj2.exports;
  }
  return _exports3;
};
if (typeof exports === "object") {
  if (typeof module === "object") {
    module.exports = fn();
  }
}
if (typeof globalThis.define === "function") {
  const define2 = globalThis.define;
  if (globalThis.define.amd) {
    globalThis.define([], fn);
  }
}
const fnResult = fn();
for (const key10009 in fnResult) {
  let self = this;
  if (typeof exports === "object") {
    self = exports;
  }
  self[key10009] = fnResult[key10009];
  continue;
}