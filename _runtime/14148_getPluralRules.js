// _runtime/14148_getPluralRules.js
let hasOwnProperty, set, set2, set3, set4, set5;

let fn = function _typeof(arg0) {
  if (typeof Symbol === "function") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "symbol") {
      fn = (arg0) => typeof arg0;
    }
    let tmp = arg0;
    return fn(arg0);
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
function _defineProperties(PluralRules, items) {
  let num = 0;
  if (0 < items.length) {
    while (true) {
      let tmp = items[num];
      let flag = tmp.enumerable;
      if (!flag) {
        flag = false;
      }
      tmp.enumerable = flag;
      tmp.configurable = true;
      if ("value" in tmp) {
        tmp.writable = true;
      }
      let key = tmp.key;
      let StringResult = key;
      let _Object = Object;
      if (typeof key === "object") {
        StringResult = key;
        if (null !== key) {
          let _Symbol = Symbol;
          let obj = key[Symbol.toPrimitive];
          if (undefined !== obj) {
            let callResult = obj.call(key, "string");
            StringResult = callResult;
            if (typeof callResult === "object") {
              break;
            }
          } else {
            let _String = String;
            StringResult = String(key);
          }
        }
      }
      let StringResult1 = StringResult;
      if (typeof StringResult !== "symbol") {
        let _String2 = String;
        StringResult1 = String(StringResult);
      }
      let definePropertyResult = defineProperty(PluralRules, StringResult1, tmp);
      num = num + 1;
    }
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("@@toPrimitive must return a primitive value.");
    throw typeError;
  }
}
function canonicalizeLocaleList(arg0) {
  let str3;
  const tmp = arg0;
  if (tmp) {
    const _Array = Array;
    let arr = arg0;
    if (!Array.isArray(arg0)) {
      const items = [arg0];
      arr = items;
    }
    let obj = {};
    let num3 = 0;
    if (0 < arr.length) {
      while (true) {
        let tmp4 = arr[num3];
        let tmp6 = tmp4 && "object" === fn(tmp4);
        str3 = tmp4;
        if (tmp6) {
          let _String = String;
          str3 = String(tmp4);
        }
        if (typeof str3 !== "string") {
          break;
        } else {
          let parts = str3.split("-");
          if (
            parts.every((item) => {
              const obj = /[a-z0-9]+/i;
              return obj.test(item);
            })
          ) {
            let str6 = parts[0];
            let formatted = str6.toLowerCase();
            let tmp11 = { in: "id", iw: "he", ji: "yi" }[formatted];
            let tmp12 = formatted;
            if (null !== tmp11) {
              tmp12 = formatted;
              if (undefined !== tmp11) {
                tmp12 = tmp11;
              }
            }
            parts[0] = tmp12;
            obj[parts.join("-")] = true;
            num3 = num3 + 1;
          } else {
            let _JSON = JSON;
            let str4 = "The locale ";
            let concat = "The locale ".concat;
            let str5 = " is not a structurally valid BCP 47 language tag.";
            let _RangeError = RangeError;
            let self = this;
            let self2 = this;
            let rangeError = new RangeError(
              "The locale ".concat(JSON.stringify(str3), " is not a structurally valid BCP 47 language tag."),
            );
            throw rangeError;
          }
        }
      }
      const concat2 = "Locales should be strings, ".concat;
      const _JSON2 = JSON;
      const _TypeError = TypeError;
      const self3 = this;
      const self4 = this;
      const typeError = new TypeError("Locales should be strings, ".concat(JSON.stringify(str3), " isn't."));
      throw typeError;
    }
    const _Object = Object;
    return Object.keys(obj);
  } else {
    return [];
  }
}

export default function getPluralRules(arg0, arg1, arg2, arg3) {
  let closure_1;
  let closure_0 = arg0;
  _defineProperties = arg1;
  let closure_2 = arg2;
  let closure_3 = arg3;
  function findLocale(arg0) {
    let str = arg0;
    while (!closure_1(str)) {
      str = str.replace(/-?[^-]*$/, "");
      if (str) {
        continue;
      } else {
        return null;
      }
    }
    return str;
  }
  const weakMap = new WeakMap();
  const weakMap1 = new WeakMap();
  const weakMap2 = new WeakMap();
  const weakMap3 = new WeakMap();
  const weakMap4 = new WeakMap();
  class PluralRules {
    constructor() {
      if (arguments.length > 0) {
        if (undefined !== arguments[0]) {
          const first = arguments[0];
        }
        if (arguments.length > 1) {
          let obj;
          if (undefined !== arguments[1]) {
            obj = arguments[1];
          }
          const self = this;
          if (this instanceof PluralRules) {
            if (weakMap.has(self)) {
              const _TypeError18 = TypeError;
              const self42 = this;
              const self43 = this;
              const typeError = new TypeError("Cannot initialize the same private elements twice on an object");
              throw typeError;
            } else {
              const result = weakMap.set(self, { writable: true, value: "a" });
              if (weakMap1.has(self)) {
                const _TypeError17 = TypeError;
                const self40 = this;
                const self41 = this;
                const typeError1 = new TypeError("Cannot initialize the same private elements twice on an object");
                throw typeError1;
              } else {
                const result1 = weakMap1.set(self, { writable: true, value: "a" });
                if (weakMap2.has(self)) {
                  const _TypeError16 = TypeError;
                  const self38 = this;
                  const self39 = this;
                  const typeError2 = new TypeError("Cannot initialize the same private elements twice on an object");
                  throw typeError2;
                } else {
                  const result2 = weakMap2.set(self, { writable: true, value: "a" });
                  if (weakMap3.has(self)) {
                    const _TypeError15 = TypeError;
                    const self36 = this;
                    const self37 = this;
                    const typeError3 = new TypeError("Cannot initialize the same private elements twice on an object");
                    throw typeError3;
                  } else {
                    const result3 = weakMap3.set(self, { writable: true, value: "a" });
                    if (weakMap4.has(self)) {
                      const _TypeError14 = TypeError;
                      const self34 = this;
                      const self35 = this;
                      const typeError4 = new TypeError(
                        "Cannot initialize the same private elements twice on an object",
                      );
                      throw typeError4;
                    } else {
                      let tmp15;
                      let tmp16;
                      const result4 = weakMap4.set(self, { writable: true, value: "a" });
                      const arr = canonicalizeLocaleList([]);
                      let num2 = 0;
                      if (0 >= arr.length) {
                        const self4 = this;
                        const self5 = this;
                        const obj7 = new closure_0();
                        let str4 = obj7.resolvedOptions().locale;
                        let tmp21 = str4;
                        while (!closure_1(str4)) {
                          str4 = str4.replace(/-?[^-]*$/, "");
                          tmp21 = null;
                          if (!str4) {
                            break;
                          }
                        }
                        tmp15 = tmp21;
                        tmp16 = closure_1;
                      } else {
                        let str3 = arr[num2];
                        while (true) {
                          tmp15 = str3;
                          while (!closure_1(str3)) {
                            str3 = str3.replace(/-?[^-]*$/, "");
                            tmp15 = null;
                            if (!str3) {
                              break;
                            }
                          }
                          tmp16 = closure_1;
                          if (tmp15) {
                            break;
                          } else {
                            num2 = num2 + 1;
                            break;
                          }
                        }
                      }
                      if (weakMap.has(self)) {
                        const value = weakMap.get(self);
                        if (value.set) {
                          set = value.set;
                          set.call(self, tmp15);
                        } else if (value.writable) {
                          value.value = tmp15;
                        } else {
                          const _TypeError3 = TypeError;
                          const self8 = this;
                          const self9 = this;
                          const typeError5 = new TypeError("attempted to set read only private field");
                          throw typeError5;
                        }
                        if (weakMap.has(self)) {
                          let callResult1;
                          const iter = weakMap.get(self);
                          if (iter.get) {
                            const get = iter.get;
                            callResult1 = get.call(self);
                          } else {
                            callResult1 = iter.value;
                          }
                          const tmp16Result = tmp16(callResult1);
                          if (weakMap2.has(self)) {
                            const value2 = weakMap2.get(self);
                            if (value2.set) {
                              set2 = value2.set;
                              set2.call(self, tmp16Result);
                            } else if (value2.writable) {
                              value2.value = tmp16Result;
                            } else {
                              const _TypeError6 = TypeError;
                              const self14 = this;
                              const self15 = this;
                              const typeError6 = new TypeError("attempted to set read only private field");
                              throw typeError6;
                            }
                            if (weakMap.has(self)) {
                              let callResult3;
                              const iter2 = weakMap.get(self);
                              if (iter2.get) {
                                const get2 = iter2.get;
                                callResult3 = get2.call(self);
                              } else {
                                callResult3 = iter2.value;
                              }
                              const tmp40Result = closure_3(callResult3);
                              if (weakMap1.has(self)) {
                                const value7 = weakMap1.get(self);
                                if (value7.set) {
                                  set3 = value7.set;
                                  set3.call(self, tmp40Result);
                                } else if (value7.writable) {
                                  value7.value = tmp40Result;
                                } else {
                                  const _TypeError9 = TypeError;
                                  const self20 = this;
                                  const self21 = this;
                                  const typeError7 = new TypeError("attempted to set read only private field");
                                  throw typeError7;
                                }
                                const _Object = Object;
                                hasOwnProperty = Object.prototype.hasOwnProperty;
                                const tmp53 = hasOwnProperty.call(obj, "type") && obj.type;
                                let str14 = "cardinal";
                                if (tmp53) {
                                  str14 = tmp53;
                                  if ("cardinal" !== tmp53) {
                                    str14 = tmp53;
                                    if ("ordinal" !== tmp53) {
                                      const _RangeError = RangeError;
                                      const _JSON = JSON;
                                      const self22 = this;
                                      const self23 = this;
                                      const rangeError = new RangeError(
                                        "Not a valid plural type: " + JSON.stringify(tmp53),
                                      );
                                      throw rangeError;
                                    }
                                  }
                                }
                                if (weakMap3.has(self)) {
                                  const value8 = weakMap3.get(self);
                                  if (value8.set) {
                                    set4 = value8.set;
                                    set4.call(self, str14);
                                  } else if (value8.writable) {
                                    value8.value = str14;
                                  } else {
                                    const _TypeError11 = TypeError;
                                    const self26 = this;
                                    const self27 = this;
                                    const typeError8 = new TypeError("attempted to set read only private field");
                                    throw typeError8;
                                  }
                                  const self28 = this;
                                  const self29 = this;
                                  const tmp63 = new closure_0("en", obj);
                                  if (weakMap4.has(self)) {
                                    const value9 = weakMap4.get(self);
                                    if (value9.set) {
                                      set5 = value9.set;
                                      set5.call(self, tmp63);
                                    } else if (value9.writable) {
                                      value9.value = tmp63;
                                    } else {
                                      const _TypeError13 = TypeError;
                                      const self32 = this;
                                      const self33 = this;
                                      const typeError9 = new TypeError("attempted to set read only private field");
                                      throw typeError9;
                                    }
                                  } else {
                                    const _TypeError12 = TypeError;
                                    const self30 = this;
                                    const self31 = this;
                                    const typeError10 = new TypeError("attempted to set private field on non-instance");
                                    throw typeError10;
                                  }
                                } else {
                                  const _TypeError10 = TypeError;
                                  const self24 = this;
                                  const self25 = this;
                                  const typeError11 = new TypeError("attempted to set private field on non-instance");
                                  throw typeError11;
                                }
                              } else {
                                const _TypeError8 = TypeError;
                                const self18 = this;
                                const self19 = this;
                                const typeError12 = new TypeError("attempted to set private field on non-instance");
                                throw typeError12;
                              }
                            } else {
                              const _TypeError7 = TypeError;
                              const self16 = this;
                              const self17 = this;
                              const typeError13 = new TypeError("attempted to get private field on non-instance");
                              throw typeError13;
                            }
                          } else {
                            const _TypeError5 = TypeError;
                            const self12 = this;
                            const self13 = this;
                            const typeError14 = new TypeError("attempted to set private field on non-instance");
                            throw typeError14;
                          }
                        } else {
                          const _TypeError4 = TypeError;
                          const self10 = this;
                          const self11 = this;
                          const typeError15 = new TypeError("attempted to get private field on non-instance");
                          throw typeError15;
                        }
                      } else {
                        const _TypeError2 = TypeError;
                        const self6 = this;
                        const self7 = this;
                        const typeError16 = new TypeError("attempted to set private field on non-instance");
                        throw typeError16;
                      }
                    }
                  }
                }
              }
            }
          } else {
            const _TypeError = TypeError;
            const self2 = this;
            const self3 = this;
            const typeError17 = new TypeError("Cannot call a class as a function");
            throw typeError17;
          }
        }
        obj = {};
      }
    }
  }
  const entry = {
    key: "resolvedOptions",
    value: function resolvedOptions() {
      let maximumFractionDigits;
      let maximumSignificantDigits;
      let minimumFractionDigits;
      let minimumIntegerDigits;
      let minimumSignificantDigits;
      let roundingPriority;
      const self = this;
      if (weakMap4.has(this)) {
        let callResult;
        const iter = weakMap4.get(self);
        if (iter.get) {
          const get = iter.get;
          callResult = get.call(self);
        } else {
          callResult = iter.value;
        }
        const resolvedOptionsResult = callResult.resolvedOptions();
        ({ minimumSignificantDigits, roundingPriority } = resolvedOptionsResult);
        ({ minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits, maximumSignificantDigits } =
          resolvedOptionsResult);
        if (weakMap.has(self)) {
          let callResult1;
          const iter2 = weakMap.get(self);
          if (iter2.get) {
            const get2 = iter2.get;
            callResult1 = get2.call(self);
          } else {
            callResult1 = iter2.value;
          }
          const obj3 = {
            locale: callResult1,
            type: null,
            minimumIntegerDigits: null,
            minimumFractionDigits: null,
            maximumFractionDigits: null,
          };
          if (weakMap3.has(self)) {
            let callResult2;
            const iter3 = weakMap3.get(self);
            if (iter3.get) {
              const get3 = iter3.get;
              callResult2 = get3.call(self);
            } else {
              callResult2 = iter3.value;
            }
            obj3.type = callResult2;
            obj3.minimumIntegerDigits = minimumIntegerDigits;
            obj3.minimumFractionDigits = minimumFractionDigits;
            obj3.maximumFractionDigits = maximumFractionDigits;
            if (typeof minimumSignificantDigits === "number") {
              obj3.minimumSignificantDigits = minimumSignificantDigits;
              obj3.maximumSignificantDigits = maximumSignificantDigits;
            }
            if (weakMap.has(self)) {
              let callResult3;
              const iter4 = weakMap.get(self);
              if (iter4.get) {
                const get4 = iter4.get;
                callResult3 = get4.call(self);
              } else {
                callResult3 = iter4.value;
              }
              if (weakMap3.has(self)) {
                let callResult4;
                const iter5 = weakMap3.get(self);
                if (iter5.get) {
                  const get5 = iter5.get;
                  callResult4 = get5.call(self);
                } else {
                  callResult4 = iter5.value;
                }
                const tmp11Result = closure_2(callResult3, "ordinal" === callResult4);
                obj3.pluralCategories = tmp11Result.slice(0);
                if (!roundingPriority) {
                  roundingPriority = "auto";
                }
                obj3.roundingPriority = roundingPriority;
                return obj3;
              } else {
                const _TypeError5 = TypeError;
                const self10 = this;
                const self11 = this;
                const typeError = new TypeError("attempted to get private field on non-instance");
                throw typeError;
              }
            } else {
              const _TypeError4 = TypeError;
              const self8 = this;
              const self9 = this;
              const typeError1 = new TypeError("attempted to get private field on non-instance");
              throw typeError1;
            }
          } else {
            const _TypeError3 = TypeError;
            const self6 = this;
            const self7 = this;
            const typeError2 = new TypeError("attempted to get private field on non-instance");
            throw typeError2;
          }
        } else {
          const _TypeError2 = TypeError;
          const self4 = this;
          const self5 = this;
          const typeError3 = new TypeError("attempted to get private field on non-instance");
          throw typeError3;
        }
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError4 = new TypeError("attempted to get private field on non-instance");
        throw typeError4;
      }
    },
  };
  const items = [
    entry,
    {
      key: "select",
      value: function select(num) {
        const self = this;
        if (this instanceof PluralRules) {
          let NumberResult = num;
          if (typeof num !== "number") {
            const _Number = Number;
            NumberResult = Number(num);
          }
          const _isFinite = isFinite;
          if (isFinite(NumberResult)) {
            if (weakMap4.has(self)) {
              let callResult;
              const iter = weakMap4.get(self);
              if (iter.get) {
                const get = iter.get;
                callResult = get.call(self);
              } else {
                callResult = iter.value;
              }
              const _Math = Math;
              const formatResult = callResult.format(Math.abs(NumberResult));
              if (weakMap2.has(self)) {
                let callResult1;
                const iter2 = weakMap2.get(self);
                if (iter2.get) {
                  const get2 = iter2.get;
                  callResult1 = get2.call(self);
                } else {
                  callResult1 = iter2.value;
                }
                const call = callResult1.call;
                if (weakMap3.has(self)) {
                  let callResult2;
                  const iter3 = weakMap3.get(self);
                  if (iter3.get) {
                    const get3 = iter3.get;
                    callResult2 = get3.call(self);
                  } else {
                    callResult2 = iter3.value;
                  }
                  return call(self, formatResult, "ordinal" === callResult2);
                } else {
                  const _TypeError4 = TypeError;
                  const self8 = this;
                  const self9 = this;
                  const typeError = new TypeError("attempted to get private field on non-instance");
                  throw typeError;
                }
              } else {
                const _TypeError3 = TypeError;
                const self6 = this;
                const self7 = this;
                const typeError1 = new TypeError("attempted to get private field on non-instance");
                throw typeError1;
              }
            } else {
              const _TypeError2 = TypeError;
              const self4 = this;
              const self5 = this;
              const typeError2 = new TypeError("attempted to get private field on non-instance");
              throw typeError2;
            }
          } else {
            return "other";
          }
        } else {
          const _TypeError = TypeError;
          const concat = "select() called on incompatible ".concat;
          const self2 = this;
          const self3 = this;
          const typeError3 = new TypeError("select() called on incompatible ".concat(self));
          throw typeError3;
        }
      },
    },
    {
      key: "selectRange",
      value: function selectRange(arg0, arg1) {
        const self = this;
        if (this instanceof PluralRules) {
          if (undefined === arg0) {
            const _TypeError6 = TypeError;
            const self16 = this;
            const self17 = this;
            const typeError = new TypeError("start is undefined");
            throw typeError;
          } else if (undefined === arg1) {
            const _TypeError5 = TypeError;
            const self14 = this;
            const self15 = this;
            const typeError1 = new TypeError("end is undefined");
            throw typeError1;
          } else {
            const tmp33 = fn(arg0);
            let NumberResult = arg0;
            if ("number" !== tmp33) {
              if ("bigint" === tmp33) {
                const _TypeError2 = TypeError;
                const self4 = this;
                const self5 = this;
                const typeError2 = new TypeError("Cannot convert a BigInt value to a number");
                throw typeError2;
              } else {
                const _Number = Number;
                NumberResult = Number(arg0);
              }
            }
            const tmp11 = fn(arg1);
            let NumberResult1 = arg1;
            if ("number" !== tmp11) {
              if ("bigint" === tmp11) {
                const _TypeError3 = TypeError;
                const self6 = this;
                const self7 = this;
                const typeError3 = new TypeError("Cannot convert a BigInt value to a number");
                throw typeError3;
              } else {
                const _Number2 = Number;
                NumberResult1 = Number(arg1);
              }
            }
            const _isFinite = isFinite;
            if (isFinite(NumberResult)) {
              const _isFinite2 = isFinite;
              if (isFinite(NumberResult1)) {
                if (weakMap1.has(self)) {
                  let callResult;
                  const iter = weakMap1.get(self);
                  if (iter.get) {
                    const get = iter.get;
                    callResult = get.call(self);
                  } else {
                    callResult = iter.value;
                  }
                  const call = callResult.call;
                  const selectResult = self.select(NumberResult);
                  return call(self, selectResult, self.select(NumberResult1));
                } else {
                  const _TypeError4 = TypeError;
                  const self12 = this;
                  const self13 = this;
                  const typeError4 = new TypeError("attempted to get private field on non-instance");
                  throw typeError4;
                }
              } else {
                const _RangeError2 = RangeError;
                const self10 = this;
                const self11 = this;
                const rangeError = new RangeError("end must be finite");
                throw rangeError;
              }
            } else {
              const _RangeError = RangeError;
              const self8 = this;
              const self9 = this;
              const rangeError1 = new RangeError("start must be finite");
              throw rangeError1;
            }
          }
        } else {
          const _TypeError = TypeError;
          const concat = "selectRange() called on incompatible ".concat;
          const self2 = this;
          const self3 = this;
          const typeError5 = new TypeError("selectRange() called on incompatible ".concat(self));
          throw typeError5;
        }
      },
    },
  ];
  const entry1 = {
    key: "supportedLocalesOf",
    value: function supportedLocalesOf(arg0) {
      const arr = canonicalizeLocaleList(arg0);
      return arr.filter(findLocale);
    },
  };
  const items1 = [entry1];
  _defineProperties(PluralRules.prototype, items);
  _defineProperties(PluralRules, items1);
  Object.defineProperty(PluralRules, "prototype", { writable: false });
  let toStringTag = typeof Symbol !== "undefined";
  if (typeof Symbol !== "undefined") {
    const _Symbol2 = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  if (toStringTag) {
    let _Object = Object;
    const _Symbol = Symbol;
    Object.defineProperty(PluralRules.prototype, Symbol.toStringTag, {
      value: "Intl.PluralRules",
      writable: false,
      configurable: true,
    });
  }
  Object.defineProperty(PluralRules, "prototype", { writable: false });
  return PluralRules;
}
