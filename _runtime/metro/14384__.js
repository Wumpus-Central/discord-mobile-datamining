// === Module 14384: ? ===

// Module 14384
let fn = function _typeof(arg0) {
  if (typeof Symbol === "function") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "symbol") {
      fn = (arg0) => typeof arg0;
    }
    return fn(arg0);
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
function _defineProperties(arr, arg1) {
  let num = 0;
  if (0 < arg1.length) {
    while (true) {
      let tmp = arg1[num];
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
      if (typeof key === "object") {
        StringResult = key;
        if (null !== key) {
          let _Symbol = Symbol;
          let tmp4 = key[Symbol.toPrimitive];
          if (undefined !== tmp4) {
            let call = tmp4.call;
            let tmp5 = typeof call === "unknown" ? tmp4("string") : call(key, "string");
            StringResult = tmp5;
            if (typeof tmp5 === "object") {
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
      let definePropertyResult = Object.defineProperty(arr, StringResult1, tmp);
      num = num + 1;
    }
    const _TypeError = TypeError;
    const typeError = new TypeError("@@toPrimitive must return a primitive value.");
    throw typeError;
  }
}
function canonicalizeLocaleList(arg0) {
  let str3;
  if (arg0) {
    const _Array = Array;
    let arr = arg0;
    if (!Array.isArray(arg0)) {
      const items = [arg0];
      arr = items;
    }
    const obj = {};
    let num3 = 0;
    if (0 < arr.length) {
      while (true) {
        let tmp3 = arr[num3];
        let tmp5 = tmp3;
        if (tmp3) {
          tmp5 = "object" === fn(tmp3);
        }
        str3 = tmp3;
        if (tmp5) {
          let _String = String;
          str3 = String(tmp3);
        }
        if (typeof str3 !== "string") {
          break;
        } else {
          let parts = str3.split("-");
          if (parts.every((item) => /[a-z0-9]+/i.test(item))) {
            let str6 = parts[0];
            let formatted = str6.toLowerCase();
            let tmp12 = { in: "id", iw: "he", ji: "yi" }[formatted];
            let tmp13 = formatted;
            if (null !== tmp12) {
              tmp13 = formatted;
              if (undefined !== tmp12) {
                tmp13 = tmp12;
              }
            }
            parts[0] = tmp13;
            obj[parts.join("-")] = true;
            num3 = num3 + 1;
          } else {
            let _JSON = JSON;
            let str4 = "The locale ";
            let concat = "The locale ".concat;
            let str5 = " is not a structurally valid BCP 47 language tag.";
            let _RangeError = RangeError;
            let tmp7 = new.target;
            let tmp8 = new.target;
            let rangeError = new RangeError("The locale ".concat(JSON.stringify(str3), " is not a structurally valid BCP 47 language tag."));
            throw rangeError;
          }
        }
      }
      const concat2 = "Locales should be strings, ".concat;
      const _JSON2 = JSON;
      const _TypeError = TypeError;
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
  const PluralRules = arg0;
  _defineProperties = arg1;
  closure_2 = arg2;
  closure_3 = arg3;
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
          first = arguments[0];
        }
        num = 1;
        if (arguments.length > 1) {
          if (undefined !== arguments[1]) {
            obj = arguments[1];
          }
          self = this;
          tmp2 = PluralRules;
          if (this instanceof PluralRules) {
            obj2 = closure_2_5;
            if (closure_2_5.has(self)) {
              tmp128 = globalThis;
              _TypeError18 = TypeError;
              tmp129 = new.target;
              str27 = "Cannot initialize the same private elements twice on an object";
              tmp130 = new.target;
              typeError = new TypeError("Cannot initialize the same private elements twice on an object");
              tmp132 = typeError;
              throw typeError;
            } else {
              result = obj2.set(self, { writable: true, value: "a" });
              obj3 = closure_2_6;
              if (closure_2_6.has(self)) {
                tmp123 = globalThis;
                _TypeError17 = TypeError;
                tmp124 = new.target;
                str26 = "Cannot initialize the same private elements twice on an object";
                tmp125 = new.target;
                typeError1 = new TypeError("Cannot initialize the same private elements twice on an object");
                tmp127 = typeError1;
                throw typeError1;
              } else {
                result1 = obj3.set(self, { writable: true, value: "a" });
                obj4 = closure_2_7;
                if (closure_2_7.has(self)) {
                  tmp118 = globalThis;
                  _TypeError16 = TypeError;
                  tmp119 = new.target;
                  str25 = "Cannot initialize the same private elements twice on an object";
                  tmp120 = new.target;
                  typeError2 = new TypeError("Cannot initialize the same private elements twice on an object");
                  tmp122 = typeError2;
                  throw typeError2;
                } else {
                  result2 = obj4.set(self, { writable: true, value: "a" });
                  obj5 = closure_2_8;
                  if (closure_2_8.has(self)) {
                    tmp113 = globalThis;
                    _TypeError15 = TypeError;
                    tmp114 = new.target;
                    str24 = "Cannot initialize the same private elements twice on an object";
                    tmp115 = new.target;
                    typeError3 = new TypeError("Cannot initialize the same private elements twice on an object");
                    tmp117 = typeError3;
                    throw typeError3;
                  } else {
                    result3 = obj5.set(self, { writable: true, value: "a" });
                    obj6 = closure_2_9;
                    if (closure_2_9.has(self)) {
                      tmp108 = globalThis;
                      _TypeError14 = TypeError;
                      tmp109 = new.target;
                      str23 = "Cannot initialize the same private elements twice on an object";
                      tmp110 = new.target;
                      typeError4 = new TypeError("Cannot initialize the same private elements twice on an object");
                      tmp112 = typeError4;
                      throw typeError4;
                    } else {
                      result4 = obj6.set(self, { writable: true, value: "a" });
                      tmp13 = c2;
                      arr = c2([]);
                      str2 = "";
                      num2 = 0;
                      if (0 >= arr.length) {
                        tmp19 = f97028;
                        tmp20 = new.target;
                        tmp21 = new.target;
                        obj7 = new f97028();
                        tmp22 = obj7;
                        str4 = obj7.resolvedOptions().locale;
                        tmp23 = _defineProperties;
                        tmp24 = str4;
                        tmp25 = str4;
                        while (!_defineProperties(str4)) {
                          str4 = str4.replace(/-?[^-]*$/, "");
                          tmp25 = null;
                          if (!str4) {
                            break;
                          }
                        }
                        tmp17 = tmp25;
                        tmp18 = tmp23;
                      } else {
                        str3 = arr[num2];
                        tmp14 = num2;
                        while (true) {
                          tmp15 = _defineProperties;
                          tmp16 = str3;
                          tmp17 = str3;
                          while (!_defineProperties(str3)) {
                            str3 = str3.replace(/-?[^-]*$/, "");
                            tmp17 = null;
                            if (!str3) {
                              break;
                            }
                          }
                          tmp18 = tmp15;
                          if (tmp17) {
                            break;
                          } else {
                            num2 = num2 + 1;
                            break;
                          }
                        }
                      }
                      if (obj2.has(self)) {
                        value = obj2.get(self);
                        if (value.set) {
                          set = value.set;
                          call = set.call;
                          if (typeof call === "unknown") {
                            result5 = set(tmp17);
                          } else {
                            callResult = call(self, tmp17);
                          }
                        } else if (value.writable) {
                          value.value = tmp17;
                        } else {
                          tmp32 = globalThis;
                          _TypeError3 = TypeError;
                          tmp33 = new.target;
                          str6 = "attempted to set read only private field";
                          tmp34 = new.target;
                          typeError5 = new TypeError("attempted to set read only private field");
                          tmp36 = typeError5;
                          throw typeError5;
                        }
                        obj8 = closure_2_7;
                        obj9 = closure_2_5;
                        if (closure_2_5.has(self)) {
                          iter = obj9.get(self);
                          if (iter.get) {
                            get = iter.get;
                            call2 = get.call;
                            tmp43 = typeof call2 === "unknown" ? get() : call2(self);
                          } else {
                            tmp18Result = tmp18(iter.value);
                            if (obj8.has(self)) {
                              value1 = obj8.get(self);
                              if (value1.set) {
                                set2 = value1.set;
                                call3 = set2.call;
                                if (typeof call3 === "unknown") {
                                  set2Result = set2(tmp18Result);
                                } else {
                                  call3Result = call3(self, tmp18Result);
                                }
                              } else if (value1.writable) {
                                value1.value = tmp18Result;
                              } else {
                                tmp51 = globalThis;
                                _TypeError6 = TypeError;
                                tmp52 = new.target;
                                str9 = "attempted to set read only private field";
                                tmp53 = new.target;
                                typeError6 = new TypeError("attempted to set read only private field");
                                tmp55 = typeError6;
                                throw typeError6;
                              }
                              obj10 = closure_2_6;
                              tmp57 = closure_2_3;
                              if (obj9.has(self)) {
                                iter2 = obj9.get(self);
                                if (iter2.get) {
                                  get2 = iter2.get;
                                  call4 = get2.call;
                                  tmp63 = typeof call4 === "unknown" ? get2() : call4(self);
                                } else {
                                  tmp57Result = tmp57(iter2.value);
                                  if (obj10.has(self)) {
                                    value2 = obj10.get(self);
                                    if (value2.set) {
                                      set3 = value2.set;
                                      call5 = set3.call;
                                      if (typeof call5 === "unknown") {
                                        set3Result = set3(tmp57Result);
                                      } else {
                                        call5Result = call5(self, tmp57Result);
                                      }
                                    } else if (value2.writable) {
                                      value2.value = tmp57Result;
                                    } else {
                                      tmp71 = globalThis;
                                      _TypeError9 = TypeError;
                                      tmp72 = new.target;
                                      str12 = "attempted to set read only private field";
                                      tmp73 = new.target;
                                      typeError7 = new TypeError("attempted to set read only private field");
                                      tmp75 = typeError7;
                                      throw typeError7;
                                    }
                                    obj11 = closure_2_8;
                                    tmp77 = globalThis;
                                    _Object = Object;
                                    hasOwnProperty = Object.prototype.hasOwnProperty;
                                    call6 = hasOwnProperty.call;
                                    if (typeof call6 === "unknown") {
                                      str13 = "type";
                                      type = hasOwnProperty("type");
                                    } else {
                                      str28 = "type";
                                      type = call6(obj, "type");
                                    }
                                    if (type) {
                                      type = obj.type;
                                    }
                                    str14 = "cardinal";
                                    str15 = "cardinal";
                                    if (type) {
                                      str15 = type;
                                      if ("cardinal" !== type) {
                                        str16 = "ordinal";
                                        str15 = type;
                                        if ("ordinal" !== type) {
                                          _RangeError = RangeError;
                                          _JSON = JSON;
                                          str17 = "Not a valid plural type: ";
                                          tmp78 = new.target;
                                          tmp79 = new.target;
                                          rangeError = new RangeError("Not a valid plural type: " + JSON.stringify(type));
                                          tmp81 = rangeError;
                                          throw rangeError;
                                        }
                                      }
                                    }
                                    if (obj11.has(self)) {
                                      value3 = obj11.get(self);
                                      if (value3.set) {
                                        set4 = value3.set;
                                        call7 = set4.call;
                                        if (typeof call7 === "unknown") {
                                          set4Result = set4(str15);
                                        } else {
                                          call7Result = call7(self, str15);
                                        }
                                      } else if (value3.writable) {
                                        value3.value = str15;
                                      } else {
                                        _TypeError11 = TypeError;
                                        tmp87 = new.target;
                                        str19 = "attempted to set read only private field";
                                        tmp88 = new.target;
                                        typeError8 = new TypeError("attempted to set read only private field");
                                        tmp90 = typeError8;
                                        throw typeError8;
                                      }
                                      obj12 = closure_2_9;
                                      tmp92 = f97028;
                                      tmp93 = new.target;
                                      str20 = "en";
                                      tmp94 = new.target;
                                      tmp95 = obj;
                                      tmp96 = new f97028("en", obj);
                                      if (closure_2_9.has(self)) {
                                        tmp101 = tmp96;
                                        value4 = obj12.get(self);
                                        if (value4.set) {
                                          set5 = value4.set;
                                          call8 = set5.call;
                                          if (typeof call8 === "unknown") {
                                            set5Result = set5(tmp96);
                                          } else {
                                            call8Result = call8(self, tmp96);
                                          }
                                        } else if (value4.writable) {
                                          value4.value = tmp96;
                                        } else {
                                          _TypeError13 = TypeError;
                                          tmp103 = new.target;
                                          str22 = "attempted to set read only private field";
                                          tmp104 = new.target;
                                          typeError9 = new TypeError("attempted to set read only private field");
                                          tmp106 = typeError9;
                                          throw typeError9;
                                        }
                                        return;
                                      } else {
                                        _TypeError12 = TypeError;
                                        tmp97 = new.target;
                                        str21 = "attempted to set private field on non-instance";
                                        tmp98 = new.target;
                                        typeError10 = new TypeError("attempted to set private field on non-instance");
                                        tmp100 = typeError10;
                                        throw typeError10;
                                      }
                                    } else {
                                      _TypeError10 = TypeError;
                                      tmp82 = new.target;
                                      str18 = "attempted to set private field on non-instance";
                                      tmp83 = new.target;
                                      typeError11 = new TypeError("attempted to set private field on non-instance");
                                      tmp85 = typeError11;
                                      throw typeError11;
                                    }
                                  } else {
                                    tmp65 = globalThis;
                                    _TypeError8 = TypeError;
                                    tmp66 = new.target;
                                    str11 = "attempted to set private field on non-instance";
                                    tmp67 = new.target;
                                    typeError12 = new TypeError("attempted to set private field on non-instance");
                                    tmp69 = typeError12;
                                    throw typeError12;
                                  }
                                }
                              } else {
                                tmp58 = globalThis;
                                _TypeError7 = TypeError;
                                tmp59 = new.target;
                                str10 = "attempted to get private field on non-instance";
                                tmp60 = new.target;
                                typeError13 = new TypeError("attempted to get private field on non-instance");
                                tmp62 = typeError13;
                                throw typeError13;
                              }
                            } else {
                              tmp45 = globalThis;
                              _TypeError5 = TypeError;
                              tmp46 = new.target;
                              str8 = "attempted to set private field on non-instance";
                              tmp47 = new.target;
                              typeError14 = new TypeError("attempted to set private field on non-instance");
                              tmp49 = typeError14;
                              throw typeError14;
                            }
                          }
                        } else {
                          tmp38 = globalThis;
                          _TypeError4 = TypeError;
                          tmp39 = new.target;
                          str7 = "attempted to get private field on non-instance";
                          tmp40 = new.target;
                          typeError15 = new TypeError("attempted to get private field on non-instance");
                          tmp42 = typeError15;
                          throw typeError15;
                        }
                      } else {
                        tmp26 = globalThis;
                        _TypeError2 = TypeError;
                        tmp27 = new.target;
                        str5 = "attempted to set private field on non-instance";
                        tmp28 = new.target;
                        typeError16 = new TypeError("attempted to set private field on non-instance");
                        tmp30 = typeError16;
                        throw typeError16;
                      }
                    }
                  }
                }
              }
            }
          } else {
            tmp3 = globalThis;
            _TypeError = TypeError;
            tmp4 = new.target;
            str = "Cannot call a class as a function";
            tmp5 = new.target;
            typeError17 = new TypeError("Cannot call a class as a function");
            tmp7 = typeError17;
            throw typeError17;
          }
        }
        obj = {};
      }
      return;
    }
  }
  const entry = {
    key: "resolvedOptions",
    value: function resolvedOptions() {
      const self = this;
      let obj = weakMap4;
      if (weakMap4.has(this)) {
        const iter = obj.get(self);
        if (iter.get) {
          const get = iter.get;
          const call = get.call;
          typeof call === "unknown" ? get() : call(self);
        } else {
          value = iter.value;
          const resolvedOptionsResult = value.resolvedOptions();
          ({ minimumSignificantDigits, roundingPriority } = resolvedOptionsResult);
          ({ minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits, maximumSignificantDigits } = resolvedOptionsResult);
          if (weakMap.has(self)) {
            const iter2 = obj2.get(self);
            if (iter2.get) {
              const get2 = iter2.get;
              const call2 = get2.call;
              typeof call2 === "unknown" ? get2() : call2(self);
            } else {
              obj = { locale: iter2.value, type: null, minimumIntegerDigits: null, minimumFractionDigits: null, maximumFractionDigits: null };
              if (weakMap3.has(self)) {
                const iter3 = obj4.get(self);
                if (iter3.get) {
                  const get3 = iter3.get;
                  const call3 = get3.call;
                  typeof call3 === "unknown" ? get3() : call3(self);
                } else {
                  obj.type = iter3.value;
                  obj.minimumIntegerDigits = minimumIntegerDigits;
                  obj.minimumFractionDigits = minimumFractionDigits;
                  obj.maximumFractionDigits = maximumFractionDigits;
                  if (typeof minimumSignificantDigits === "number") {
                    obj.minimumSignificantDigits = minimumSignificantDigits;
                    obj.maximumSignificantDigits = maximumSignificantDigits;
                  }
                  if (obj2.has(self)) {
                    const iter4 = obj2.get(self);
                    if (iter4.get) {
                      const get4 = iter4.get;
                      const call4 = get4.call;
                      typeof call4 === "unknown" ? get4() : call4(self);
                    } else if (obj4.has(self)) {
                      const iter5 = obj4.get(self);
                      if (iter5.get) {
                        const get5 = iter5.get;
                        const call5 = get5.call;
                        typeof call5 === "unknown" ? get5() : call5(self);
                      } else {
                        obj.pluralCategories = tmp20(iter4.value, "ordinal" === iter5.value).slice(0);
                        if (!roundingPriority) {
                          roundingPriority = "auto";
                        }
                        obj.roundingPriority = roundingPriority;
                        return obj;
                      }
                    } else {
                      const _TypeError5 = TypeError;
                      const typeError = new TypeError("attempted to get private field on non-instance");
                      throw typeError;
                    }
                  } else {
                    const _TypeError4 = TypeError;
                    const typeError1 = new TypeError("attempted to get private field on non-instance");
                    throw typeError1;
                  }
                  tmp20 = closure_2;
                }
              } else {
                const _TypeError3 = TypeError;
                const typeError2 = new TypeError("attempted to get private field on non-instance");
                throw typeError2;
              }
            }
          } else {
            const _TypeError2 = TypeError;
            const typeError3 = new TypeError("attempted to get private field on non-instance");
            throw typeError3;
          }
        }
      } else {
        const _TypeError = TypeError;
        const typeError4 = new TypeError("attempted to get private field on non-instance");
        throw typeError4;
      }
    }
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
            if (set5.has(self)) {
              const iter = obj.get(self);
              if (iter.get) {
                const get = iter.get;
                const call = get.call;
                typeof call === "unknown" ? get() : call(self);
              } else {
                value = iter.value;
                const _Math = Math;
                const formatResult = value.format(Math.abs(NumberResult));
                if (set3.has(self)) {
                  const iter2 = obj2.get(self);
                  if (iter2.get) {
                    const get2 = iter2.get;
                    const call2 = get2.call;
                    typeof call2 === "unknown" ? get2() : call2(self);
                  } else {
                    value = iter2.value;
                    const call3 = value.call;
                    if (set4.has(self)) {
                      const iter3 = obj3.get(self);
                      if (iter3.get) {
                        const get3 = iter3.get;
                        const call4 = get3.call;
                        typeof call4 === "unknown" ? get3() : call4(self);
                      } else {
                        return typeof call3 === "unknown" ? value(formatResult, "ordinal" === iter3.value) : call3(self, formatResult, "ordinal" === iter3.value);
                      }
                    } else {
                      const _TypeError4 = TypeError;
                      const typeError = new TypeError("attempted to get private field on non-instance");
                      throw typeError;
                    }
                    obj3 = set4;
                  }
                } else {
                  const _TypeError3 = TypeError;
                  const typeError1 = new TypeError("attempted to get private field on non-instance");
                  throw typeError1;
                }
                obj2 = set3;
              }
            } else {
              const _TypeError2 = TypeError;
              const typeError2 = new TypeError("attempted to get private field on non-instance");
              throw typeError2;
            }
            obj = set5;
          } else {
            return "other";
          }
        } else {
          const _TypeError = TypeError;
          const concat = "select() called on incompatible ".concat;
          const typeError3 = new TypeError("select() called on incompatible ".concat(self));
          throw typeError3;
        }
      }
    },
    {
      key: "selectRange",
      value: function selectRange(arg0, arg1) {
        const self = this;
        if (this instanceof PluralRules) {
          if (undefined === arg0) {
            const _TypeError6 = TypeError;
            const typeError = new TypeError("start is undefined");
            throw typeError;
          } else if (undefined === arg1) {
            const _TypeError5 = TypeError;
            const typeError1 = new TypeError("end is undefined");
            throw typeError1;
          } else {
            const tmp51 = PluralRules(arg0);
            let NumberResult = arg0;
            if ("number" !== tmp51) {
              if ("bigint" === tmp51) {
                const _TypeError2 = TypeError;
                const typeError2 = new TypeError("Cannot convert a BigInt value to a number");
                throw typeError2;
              } else {
                const _Number = Number;
                NumberResult = Number(arg0);
              }
            }
            const tmp15 = PluralRules(arg1);
            let NumberResult1 = arg1;
            if ("number" !== tmp15) {
              if ("bigint" === tmp15) {
                const _TypeError3 = TypeError;
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
                if (set2.has(self)) {
                  const iter = obj.get(self);
                  if (iter.get) {
                    const get = iter.get;
                    const call = get.call;
                    typeof call === "unknown" ? get() : call(self);
                  } else {
                    value = iter.value;
                    const call2 = value.call;
                    const selectResult = self.select(NumberResult);
                    const selectResult1 = self.select(NumberResult1);
                    return typeof call2 === "unknown" ? value(selectResult, selectResult1) : call2(self, selectResult, selectResult1);
                  }
                } else {
                  const _TypeError4 = TypeError;
                  const typeError4 = new TypeError("attempted to get private field on non-instance");
                  throw typeError4;
                }
                obj = set2;
              } else {
                const _RangeError2 = RangeError;
                const rangeError = new RangeError("end must be finite");
                throw rangeError;
              }
            } else {
              const _RangeError = RangeError;
              const rangeError1 = new RangeError("start must be finite");
              throw rangeError1;
            }
          }
        } else {
          const _TypeError = TypeError;
          const concat = "selectRange() called on incompatible ".concat;
          const typeError5 = new TypeError("selectRange() called on incompatible ".concat(self));
          throw typeError5;
        }
      }
    }
  ];
  const entry1 = {
    key: "supportedLocalesOf",
    value: function supportedLocalesOf(arg0) {
      return canonicalizeLocaleList(arg0).filter(findLocale);
    }
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
    Object.defineProperty(PluralRules.prototype, Symbol.toStringTag, { value: "Intl.PluralRules", writable: false, configurable: true });
  }
  Object.defineProperty(PluralRules, "prototype", { writable: false });
  return PluralRules;
};