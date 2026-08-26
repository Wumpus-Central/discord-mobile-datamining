// _runtime/04043_hooks.js
let fn = () => {
  function hooks() {
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(null);
    } else {
      applyArgumentsResult = apply(null, arguments);
    }
    return applyArgumentsResult;
  }
  let year = hooks;
  let s = function extend(arg0, obj) {
    for (const key10005 in arg1) {
      let tmp4 = key10005;
      let _Object = Object;
      let call3 = hasOwnProperty3.call;
      if (typeof call3 === "unknown") {
        let hasOwnProperty3Result = hasOwnProperty3(key10005);
      } else {
        hasOwnProperty3Result = call3(arg1, key10005);
      }
      if (!hasOwnProperty3Result) {
        continue;
      } else {
        arg0[key10005] = arg1[key10005];
        continue;
      }
      continue;
    }
    const call = hasOwnProperty.call;
    if (typeof call === "unknown") {
      let hasOwnPropertyResult = hasOwnProperty("toString");
    } else {
      hasOwnPropertyResult = call(obj, "toString");
    }
    if (hasOwnPropertyResult) {
      arg0.toString = obj.toString;
    }
    const call2 = hasOwnProperty2.call;
    if (typeof call2 === "unknown") {
      let hasOwnProperty2Result = hasOwnProperty2("valueOf");
    } else {
      hasOwnProperty2Result = call2(obj, "valueOf");
    }
    if (hasOwnProperty2Result) {
      arg0.valueOf = obj.valueOf;
    }
    return arg0;
  };
  function isValid(_d) {
    _d = _d._d;
    if (_d) {
      const _isNaN = isNaN;
      const _d2 = _d._d;
      _d = !isNaN(_d2.getTime());
    }
    if (_d) {
      if (null == _d._pf) {
        obj = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
        obj[1] = [];
        obj[2] = [];
        obj[11] = [];
        _d._pf = obj;
      }
      const _pf = _d._pf;
      const call = closure_1.call;
      const parsedDateParts = _pf.parsedDateParts;
      const fn = (arg0) => null != arg0;
      let tmp5 = _pf.overflow < 0;
      if (tmp5) {
        tmp5 = !_pf.empty;
      }
      if (tmp5) {
        tmp5 = !_pf.invalidEra;
      }
      if (tmp5) {
        tmp5 = !_pf.invalidMonth;
      }
      if (tmp5) {
        tmp5 = !_pf.invalidWeekday;
      }
      if (tmp5) {
        tmp5 = !_pf.weekdayMismatch;
      }
      if (tmp5) {
        tmp5 = !_pf.nullInput;
      }
      if (tmp5) {
        tmp5 = !_pf.invalidFormat;
      }
      if (tmp5) {
        tmp5 = !_pf.userInvalidated;
      }
      if (tmp5) {
        const meridiem = _pf.meridiem;
        let tmp6 = !meridiem;
        if (meridiem) {
          tmp6 = _pf.meridiem && tmp4;
          const tmp7 = _pf.meridiem && tmp4;
        }
        tmp5 = tmp6;
      }
      let tmp8 = tmp5;
      if (_d._strict) {
        let tmp9 = tmp5;
        if (tmp5) {
          tmp9 = 0 === _pf.charsLeftOver;
        }
        if (tmp9) {
          tmp9 = 0 === _pf.unusedTokens.length;
        }
        if (tmp9) {
          tmp9 = undefined === _pf.bigHour;
        }
        tmp8 = tmp9;
      }
      _d = tmp8;
      const tmp3 = closure_1;
      tmp4 = typeof call === "unknown" ? closure_1(fn) : call(parsedDateParts, fn);
    }
    if (null == Object.isFrozen) {
      _d._isValid = _d;
      let _isValid = _d._isValid;
    } else {
      const _Object = Object;
      _isValid = _d;
    }
    return _isValid;
  }
  function copyConfig(arg0, self) {
    if (undefined !== self._isAMomentObject) {
      arg0._isAMomentObject = self._isAMomentObject;
    }
    if (undefined !== self._i) {
      arg0._i = self._i;
    }
    if (undefined !== self._f) {
      arg0._f = self._f;
    }
    if (undefined !== self._l) {
      arg0._l = self._l;
    }
    if (undefined !== self._strict) {
      arg0._strict = self._strict;
    }
    if (undefined !== self._tzm) {
      arg0._tzm = self._tzm;
    }
    if (undefined !== self._isUTC) {
      arg0._isUTC = self._isUTC;
    }
    if (undefined !== self._offset) {
      arg0._offset = self._offset;
    }
    if (undefined !== self._pf) {
      if (null == self._pf) {
        obj = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
        obj[1] = [];
        obj[2] = [];
        obj[11] = [];
        self._pf = obj;
      }
      arg0._pf = self._pf;
    }
    if (undefined !== self._locale) {
      arg0._locale = self._locale;
    }
    if (items.length > 0) {
      for (let num2 = 0; num2 < length; num2 = num2 + 1) {
        let tmp2 = items;
        let tmp3 = items[num2];
        let tmp4 = self[tmp3];
        let tmp5 = num2;
        if (undefined !== tmp4) {
          arg0[tmp3] = tmp4;
        }
      }
    }
    return arg0;
  }
  class Moment {
    constructor(arg0) {
      self = this;
      tmp = copyConfig(this, arg0);
      num = NaN;
      if (null != arg0._d) {
        _d = arg0._d;
        num = _d.getTime();
      }
      date = new Date(num);
      self._d = date;
      if (!self.isValid()) {
        _Date = Date;
        tmp3 = new.target;
        tmp4 = new.target;
        num2 = NaN;
        date1 = new Date(NaN);
        tmp6 = date1;
        self._d = date1;
      }
      if (false === c6) {
        flag = true;
        c6 = true;
        tmp7 = valueOf;
        updateOffsetResult = valueOf.updateOffset(self);
        c6 = false;
      }
      return;
    }
  }
  function mergeConfigs(_config, parentLocale) {
    obj = {};
    s(obj, _config);
    for (const key10011 in arg1) {
      let tmp25 = key10011;
      let _Object5 = Object;
      let call5 = hasOwnProperty2.call;
      if (typeof call5 === "unknown") {
        let hasOwnProperty2Result = hasOwnProperty2(key10011);
      } else {
        hasOwnProperty2Result = call5(arg1, key10011);
      }
      if (!hasOwnProperty2Result) {
        continue;
      } else {
        let tmp5 = arg0[key10011];
        let tmp6 = null != tmp5;
        if (!tmp6) {
          if (tmp6) {
            let tmp9 = arg1[key10011];
            let tmp10 = null != tmp9;
            if (!tmp10) {
              if (tmp10) {
                obj[key10011] = {};
                let tmp13 = s;
                let tmp14 = s(obj[key10011], arg0[key10011]);
                let tmp15 = s(obj[key10011], arg1[key10011]);
                continue;
              }
            } else {
              let _Object2 = Object;
              let call2 = toString2.call;
              if (typeof call2 === "unknown") {
                let toString2Result = toString2();
              } else {
                toString2Result = call2(tmp9);
              }
              let tmp12 = "[object Object]" === toString2Result;
            }
          }
          if (null != arg1[key10011]) {
            obj[key10011] = arg1[key10011];
            continue;
          } else {
            delete tmp[tmp2];
            continue;
          }
          continue;
        } else {
          let _Object = Object;
          let call = toString.call;
          if (typeof call === "unknown") {
            let str = toString();
          } else {
            str = call(tmp5);
          }
          let tmp8 = "[object Object]" === str;
        }
      }
      continue;
    }
    for (const key10041 in arg0) {
      let tmp26 = key10041;
      let _Object6 = Object;
      let call6 = hasOwnProperty3.call;
      if (typeof call6 === "unknown") {
        let hasOwnProperty3Result = hasOwnProperty3(key10041);
      } else {
        hasOwnProperty3Result = call6(arg0, key10041);
      }
      if (!hasOwnProperty3Result) {
        if (hasOwnProperty3Result) {
          let tmp19 = arg0[key10041];
          let tmp20 = null != tmp19;
          if (!tmp20) {
            hasOwnProperty3Result = tmp20;
          } else {
            let _Object4 = Object;
            let call4 = toString3.call;
            if (typeof call4 === "unknown") {
              let toString3Result = toString3();
            } else {
              toString3Result = call4(tmp19);
            }
            let tmp22 = "[object Object]" === toString3Result;
          }
        }
        if (!hasOwnProperty3Result) {
          continue;
        } else {
          let tmp23 = s;
          obj = {};
          let tmp24 = s(obj, obj[key10041]);
          obj[key10041] = obj;
          continue;
        }
        continue;
      } else {
        let _Object3 = Object;
        let call3 = hasOwnProperty.call;
        if (typeof call3 === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty(key10041);
        } else {
          hasOwnPropertyResult = call3(arg1, key10041);
        }
        let tmp18 = !hasOwnPropertyResult;
      }
    }
    return obj;
  }
  class Locale {
    constructor(arg0) {
      if (null != arg0) {
        self = this;
        result = this.set(arg0);
      }
      return;
    }
  }
  function formatMoment(self, Z) {
    const localeDataResult = self.localeData();
    if (isValidResult) {
      let str2 = localeDataResult;
      regex.lastIndex = 0;
      function replaceLongDateFormatTokens(arg0) {
        return closure_0.longDateFormat(arg0) || arg0;
      }
      let num2 = 5;
      let str = Z;
      str2 = Z;
      if (regex.test(Z)) {
        const replaced = str.replace(regex, replaceLongDateFormatTokens);
        regex.lastIndex = 0;
        const diff = num2 - 1;
        str2 = replaced;
        while (0 <= diff) {
          num2 = diff;
          str = replaced;
          str2 = replaced;
          if (!obj2.test(replaced)) {
            break;
          }
        }
        obj2 = regex;
      }
      let fn = table[str2];
      if (!fn) {
        const match = str2.match(closure_13);
        const length = match.length;
        for (let num4 = 0; num4 < length; num4 = num4 + 1) {
          let str4 = match[num4];
          let tmp9 = num4;
          if (obj[match[num4]]) {
            match[num4] = obj[str4];
          } else {
            let replace = str4.replace;
            if (str4.match(/\[[\s\S]/)) {
              let replaced1 = replace(/^\[|\]$/g, "");
            } else {
              replaced1 = replace(/\\/g, "");
            }
            match[num4] = replaced1;
          }
        }
        fn = (arg0) => {
          let num = 0;
          let str = "";
          str2 = "";
          if (0 < length) {
            while (true) {
              let _Function = Function;
              let tmp3 = typeof Function !== "undefined";
              let tmp4 = str;
              let tmp5 = num;
              let tmp = match;
              if (typeof Function !== "undefined") {
                let _Function2 = Function;
                tmp3 = match[num] instanceof Function;
              }
              if (!tmp3) {
                break;
              } else {
                let tmp7 = tmp[num];
                if (tmp3) {
                  let call2 = tmp7.call;
                  let tmp9 = str2;
                  let tmp10 = typeof call2 === "unknown" ? tmp7(tmp9) : call2(arg0, tmp9);
                } else {
                  let tmp8 = tmp7;
                  str = str + tmp7;
                  num = num + 1;
                  let tmp11 = length;
                  str2 = str;
                }
              }
            }
            const _Object = Object;
            const call = toString.call;
            "[object Function]" === (typeof call === "unknown" ? toString() : call(tmp2));
          }
          return str2;
        };
      }
      table[str2] = fn;
      let invalidDateResult = tmp7[str2](self);
    } else {
      invalidDateResult = localeDataResult.invalidDate();
    }
    return invalidDateResult;
  }
  function get(isValid) {
    if (isValid.isValid()) {
      ({ _d, _isUTC } = isValid);
      if ("Milliseconds" === arg1) {
        if (_isUTC) {
          let uTCMilliseconds = _d.getUTCMilliseconds();
        } else {
          uTCMilliseconds = _d.getMilliseconds();
        }
        return uTCMilliseconds;
      } else if ("Seconds" === arg1) {
        if (_isUTC) {
          let uTCSeconds = _d.getUTCSeconds();
        } else {
          uTCSeconds = _d.getSeconds();
        }
        return uTCSeconds;
      } else if ("Minutes" === arg1) {
        if (_isUTC) {
          let uTCMinutes = _d.getUTCMinutes();
        } else {
          uTCMinutes = _d.getMinutes();
        }
        return uTCMinutes;
      } else if ("Hours" === arg1) {
        if (_isUTC) {
          let uTCHours = _d.getUTCHours();
        } else {
          uTCHours = _d.getHours();
        }
        return uTCHours;
      } else if ("Date" === arg1) {
        if (_isUTC) {
          let uTCDate = _d.getUTCDate();
        } else {
          uTCDate = _d.getDate();
        }
        return uTCDate;
      } else if ("Day" === arg1) {
        if (_isUTC) {
          let uTCDay = _d.getUTCDay();
        } else {
          uTCDay = _d.getDay();
        }
        return uTCDay;
      } else if ("Month" === arg1) {
        if (_isUTC) {
          let uTCMonth = _d.getUTCMonth();
        } else {
          uTCMonth = _d.getMonth();
        }
        return uTCMonth;
      } else if ("FullYear" === arg1) {
        if (_isUTC) {
          let uTCFullYear = _d.getUTCFullYear();
        } else {
          uTCFullYear = _d.getFullYear();
        }
        return uTCFullYear;
      } else {
        return NaN;
      }
    } else {
      return NaN;
    }
  }
  function set$1(self, Date, toInteger) {
    if (self.isValid()) {
      const _isNaN = isNaN;
      if (!isNaN(toInteger)) {
        ({ _d, _isUTC } = self);
        if ("Milliseconds" === Date) {
          if (_isUTC) {
            _d.setUTCMilliseconds(toInteger);
          } else {
            _d.setMilliseconds(toInteger);
          }
        } else if ("Seconds" === Date) {
          if (_isUTC) {
            _d.setUTCSeconds(toInteger);
          } else {
            _d.setSeconds(toInteger);
          }
        } else if ("Minutes" === Date) {
          if (_isUTC) {
            _d.setUTCMinutes(toInteger);
          } else {
            _d.setMinutes(toInteger);
          }
        } else if ("Hours" === Date) {
          if (_isUTC) {
            _d.setUTCHours(toInteger);
          } else {
            _d.setHours(toInteger);
          }
        } else if ("Date" === Date) {
          if (_isUTC) {
            _d.setUTCDate(toInteger);
          } else {
            _d.setDate(toInteger);
          }
        } else if ("FullYear" === Date) {
          const monthResult = self.month();
          const dateResult = self.date();
          if (29 === dateResult) {
            if (1 === monthResult) {
              const result = toInteger % 4;
              let tmp7 = result === 0;
              if (result === 0) {
                tmp7 = toInteger % 100 !== 0;
              }
              if (!tmp7) {
                tmp7 = toInteger % 400 === 0;
              }
              let num7 = 28;
            }
            if (_isUTC) {
              _d.setUTCFullYear(toInteger, monthResult, num7);
            } else {
              _d.setFullYear(toInteger, monthResult, num7);
            }
          }
          num7 = dateResult;
        }
      }
    }
  }
  function handleStrictParse(toLocaleLowerCase) {
    let tmp = this;
    const toLocaleLowerCaseResult = toLocaleLowerCase.toLocaleLowerCase();
    if (!this._monthsParse) {
      tmp._monthsParse = [];
      tmp._longMonthsParse = [];
      tmp._shortMonthsParse = [];
      let num3 = 0;
      do {
        items = [2000, num3];
        let tmp3 = createLocalOrUTC;
        let num4 = 0;
        let tmp4 = items;
        let flag = true;
        obj = createLocalOrUTC(items, undefined, undefined, undefined, true);
        let utcResult = obj.utc();
        let monthsShortResult = tmp.monthsShort(utcResult, "");
        tmp._shortMonthsParse[num3] = monthsShortResult.toLocaleLowerCase();
        let monthsResult = tmp.months(utcResult, "");
        tmp._longMonthsParse[num3] = monthsResult.toLocaleLowerCase();
        num3 = num3 + 1;
      } while (num3 < 12);
    }
    if (arg2) {
      if ("MMM" === arg1) {
        const call6 = closure_35.call;
        const _shortMonthsParse3 = tmp._shortMonthsParse;
        const tmp18 = typeof call6 === "unknown" ? closure_35(toLocaleLowerCaseResult) : call6(_shortMonthsParse3, toLocaleLowerCaseResult);
        tmp = null;
        if (-1 !== tmp18) {
          tmp = tmp18;
        }
        let tmp16 = tmp;
        const tmp17 = closure_35;
      } else {
        const call5 = closure_35.call;
        const _longMonthsParse3 = tmp._longMonthsParse;
        const tmp15 = typeof call5 === "unknown" ? closure_35(toLocaleLowerCaseResult) : call5(_longMonthsParse3, toLocaleLowerCaseResult);
        tmp16 = null;
        if (-1 !== tmp15) {
          tmp16 = tmp15;
        }
        const tmp14 = closure_35;
      }
    } else {
      if ("MMM" === arg1) {
        const call3 = closure_35.call;
        const _shortMonthsParse2 = tmp._shortMonthsParse;
        let tmp11 = typeof call3 === "unknown" ? tmp10(toLocaleLowerCaseResult) : call3(_shortMonthsParse2, toLocaleLowerCaseResult);
        if (-1 !== tmp11) {
          let tmp13 = tmp11;
        } else {
          const call4 = tmp10.call;
          const _longMonthsParse2 = tmp._longMonthsParse;
          const tmp12 = typeof call4 === "unknown" ? tmp10(toLocaleLowerCaseResult) : call4(_longMonthsParse2, toLocaleLowerCaseResult);
          tmp11 = tmp12;
          tmp13 = null;
        }
        let tmp9 = tmp13;
      } else {
        const call = closure_35.call;
        const _longMonthsParse = tmp._longMonthsParse;
        let tmp7 = typeof call === "unknown" ? tmp6(toLocaleLowerCaseResult) : call(_longMonthsParse, toLocaleLowerCaseResult);
        if (-1 !== tmp7) {
          tmp9 = tmp7;
        } else {
          const call2 = tmp6.call;
          const _shortMonthsParse = tmp._shortMonthsParse;
          const tmp8 = typeof call2 === "unknown" ? tmp6(toLocaleLowerCaseResult) : call2(_shortMonthsParse, toLocaleLowerCaseResult);
          tmp7 = tmp8;
          tmp9 = null;
        }
      }
      return tmp9;
    }
  }
  function setMonth(isValid, str) {
    if (isValid.isValid()) {
      let num = str;
      if (typeof str === "string") {
        if (obj2.test(str)) {
          let isFiniteResult = 0 !== tmp6;
          if (0 !== +str) {
            const _isFinite = isFinite;
            isFiniteResult = isFinite(tmp6);
          }
          if (!isFiniteResult) {
            num = 0;
          } else if (tmp6 < 0) {
            const _Math2 = Math;
            let rounded = Math.ceil(tmp6) || 0;
            const tmp12 = Math.ceil(tmp6) || 0;
          } else {
            const _Math = Math;
            rounded = Math.floor(tmp6);
          }
        } else {
          const monthsParseResult = isValid.localeData().monthsParse(str);
          if (typeof monthsParseResult === "number") {
            num = monthsParseResult;
            if (!tmp3) {
              return isValid;
            }
          } else {
            const _Object = Object;
            str = Object.prototype.toString;
            const call = str.call;
            str = "[object Number]";
            const tmp4 = typeof call === "unknown" ? str() : call(monthsParseResult);
          }
          const localeDataResult = isValid.localeData();
        }
        obj2 = /^\d+$/;
      }
      const dateResult = isValid.date();
      let bound = dateResult;
      if (dateResult >= 29) {
        const yearResult = isValid.year();
        const _isNaN2 = isNaN;
        let num5 = NaN;
        if (!isNaN(yearResult)) {
          const _isNaN = isNaN;
          num5 = NaN;
          if (!isNaN(num)) {
            const result = (num % 12 + 12) % 12;
            const sum = yearResult + (num - result) / 12;
            if (1 === result) {
              const result1 = sum % 4;
              let tmp20 = result1 === 0;
              if (result1 === 0) {
                tmp20 = sum % 100 !== 0;
              }
              if (!tmp20) {
                tmp20 = sum % 400 === 0;
              }
              let num15 = 28;
              if (tmp20) {
                num15 = 29;
              }
              let diff = num15;
            } else {
              diff = 31 - result % 7 % 2;
            }
          }
        }
        bound = Math.min(dateResult, num5);
      }
      const _d = isValid._d;
      if (isValid._isUTC) {
        _d.setUTCMonth(num, bound);
      } else {
        _d.setMonth(num, bound);
      }
      return isValid;
    } else {
      return isValid;
    }
  }
  function computeMonthsParse() {
    const self = this;
    items = [];
    const items1 = [];
    const items2 = [];
    let num = 0;
    do {
      let items3 = [2000, num];
      let tmp = createLocalOrUTC;
      let num2 = 0;
      let tmp2 = items3;
      let flag = true;
      obj = createLocalOrUTC(items3, undefined, undefined, undefined, true);
      let utcResult = obj.utc();
      let str = self.monthsShort(utcResult, "");
      let replaced = str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      let str2 = self.months(utcResult, "");
      let replaced1 = str2.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      let arr = items.push(replaced);
      arr = items1.push(replaced1);
      let arr1 = items2.push(replaced1);
      let arr2 = items2.push(replaced);
      num = num + 1;
    } while (num < 12);
    function cmpLenRev(arg0, arg1) {
      return arg1.length - arg0.length;
    }
    const sorted = items.sort(cmpLenRev);
    const sorted1 = items1.sort(cmpLenRev);
    const sorted2 = items2.sort(cmpLenRev);
    const regExp = new RegExp("^(" + items2.join("|") + ")", "i");
    self._monthsRegex = regExp;
    self._monthsShortRegex = self._monthsRegex;
    const regExp1 = new RegExp("^(" + items1.join("|") + ")", "i");
    self._monthsStrictRegex = regExp1;
    const regExp2 = new RegExp("^(" + items.join("|") + ")", "i");
    self._monthsShortStrictRegex = regExp2;
  }
  function createDate(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    if (arg0 < 100) {
      if (arg0 >= 0) {
        const _Date = Date;
        const date = new Date(arg0 + 400, arg1, arg2, arg3, arg4, arg5, arg6);
        const _isFinite = isFinite;
        let date1 = date;
        if (isFinite(date.getFullYear())) {
          date.setFullYear(arg0);
          date1 = date;
        }
      }
      return date1;
    }
    date1 = new Date(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
  }
  function createUTCDate(year, arg1, dayOfYear) {
    if (year < 100) {
      if (year >= 0) {
        const _Array = Array;
        const call = slice.call;
        if (typeof call === "unknown") {
          let substr = slice();
        } else {
          substr = call(arguments);
        }
        substr[0] = year + 400;
        const _Date = Date;
        const _Date2 = Date;
        const date = new Date(UTC2.apply(null, substr));
        const _isFinite = isFinite;
        let date1 = date;
        if (isFinite(date.getUTCFullYear())) {
          date.setUTCFullYear(year);
          date1 = date;
        }
      }
      return date1;
    }
    date1 = new Date(UTC(...arguments));
  }
  function dayOfYearFromWeeks(year, arg1, isoWeekdayResult, dow, doy) {
    const diff = 7 + dow - doy;
    const diff1 = arg1 - 1;
    const diff2 = 7 + isoWeekdayResult - dow;
    const sum = 1 + 7 * diff1 + diff2 % 7 + (-(7 + createUTCDate(year, 0, diff).getUTCDay() - dow) % 7 + diff - 1);
    if (sum <= 0) {
      const diff3 = year - 1;
      const result = diff3 % 4;
      let tmp11 = result === 0;
      if (result === 0) {
        tmp11 = diff3 % 100 !== 0;
      }
      if (!tmp11) {
        tmp11 = diff3 % 400 === 0;
      }
      let num10 = 365;
      if (tmp11) {
        num10 = 366;
      }
      let dayOfYear = num10 + sum;
      year = diff3;
    } else {
      const result1 = year % 4;
      let tmp5 = result1 === 0;
      if (result1 === 0) {
        tmp5 = year % 100 !== 0;
      }
      if (!tmp5) {
        tmp5 = year % 400 === 0;
      }
      let num3 = 365;
      let num4 = 365;
      if (tmp5) {
        num4 = 366;
      }
      dayOfYear = sum;
      if (num4 < sum) {
        const result2 = year % 4;
        let tmp8 = result2 === 0;
        const sum2 = year + 1;
        if (result2 === 0) {
          tmp8 = year % 100 !== 0;
        }
        if (!tmp8) {
          tmp8 = year % 400 === 0;
        }
        if (tmp8) {
          num3 = 366;
        }
        dayOfYear = sum - num3;
        year = sum2;
      }
    }
    return { year, dayOfYear };
  }
  function weekOfYear(self, dow, doy) {
    const diff = 7 + dow - doy;
    const diff1 = 7 + createUTCDate(self.year(), 0, diff).getUTCDay() - dow;
    const sum = Math.floor((self.dayOfYear() - (-diff1 % 7 + diff - 1) - 1) / 7) + 1;
    if (sum < 1) {
      const diff2 = self.year() - 1;
      let week = sum + weeksInYear(diff2, dow, doy);
      year = diff2;
    } else {
      if (sum > weeksInYear(self.year(), dow, doy)) {
        week = sum - tmp4(self.year(), dow, doy);
        year = self.year() + 1;
      } else {
        year = self.year();
        week = sum;
      }
      tmp4 = weeksInYear;
    }
    return { week, year };
  }
  function weeksInYear(diff2, dow, doy) {
    const diff = 7 + dow - doy;
    const diff1 = 7 + dow - doy;
    diff2 = 7 + createUTCDate(diff2, 0, diff).getUTCDay() - dow;
    obj = createUTCDate(diff2, 0, diff);
    const result = diff2 % 4;
    let tmp6 = result === 0;
    const diff3 = 7 + createUTCDate(diff2 + 1, 0, diff1).getUTCDay() - dow;
    if (result === 0) {
      tmp6 = diff2 % 100 !== 0;
    }
    if (!tmp6) {
      tmp6 = diff2 % 400 === 0;
    }
    let num3 = 365;
    if (tmp6) {
      num3 = 366;
    }
    return (num3 - (-diff2 % 7 + diff - 1) + (-diff3 % 7 + diff1 - 1)) / 7;
  }
  function handleStrictParse$1(toLocaleLowerCase) {
    let tmp = this;
    const toLocaleLowerCaseResult = toLocaleLowerCase.toLocaleLowerCase();
    if (!this._weekdaysParse) {
      tmp._weekdaysParse = [];
      tmp._shortWeekdaysParse = [];
      tmp._minWeekdaysParse = [];
      let num3 = 0;
      do {
        let tmp3 = createLocalOrUTC;
        let num4 = 0;
        let flag = true;
        obj = createLocalOrUTC([2000, 1], undefined, undefined, undefined, true);
        let utcResult = obj.utc();
        let dayResult = utcResult.day(num3);
        let weekdaysMinResult = tmp.weekdaysMin(dayResult, "");
        tmp._minWeekdaysParse[num3] = weekdaysMinResult.toLocaleLowerCase();
        let weekdaysShortResult = tmp.weekdaysShort(dayResult, "");
        tmp._shortWeekdaysParse[num3] = weekdaysShortResult.toLocaleLowerCase();
        let weekdaysResult = tmp.weekdays(dayResult, "");
        tmp._weekdaysParse[num3] = weekdaysResult.toLocaleLowerCase();
        num3 = num3 + 1;
      } while (num3 < 7);
    }
    if (arg2) {
      if ("dddd" === arg1) {
        const call12 = closure_35.call;
        const _weekdaysParse4 = tmp._weekdaysParse;
        const tmp27 = typeof call12 === "unknown" ? closure_35(toLocaleLowerCaseResult) : call12(_weekdaysParse4, toLocaleLowerCaseResult);
        tmp = null;
        if (-1 !== tmp27) {
          tmp = tmp27;
        }
        let tmp22 = tmp;
        const tmp26 = closure_35;
      } else if ("ddd" === arg1) {
        const call11 = closure_35.call;
        const _shortWeekdaysParse4 = tmp._shortWeekdaysParse;
        const tmp24 = typeof call11 === "unknown" ? closure_35(toLocaleLowerCaseResult) : call11(_shortWeekdaysParse4, toLocaleLowerCaseResult);
        let tmp25 = null;
        if (-1 !== tmp24) {
          tmp25 = tmp24;
        }
        tmp22 = tmp25;
        const tmp23 = closure_35;
      } else {
        const call10 = closure_35.call;
        const _minWeekdaysParse4 = tmp._minWeekdaysParse;
        const tmp21 = typeof call10 === "unknown" ? closure_35(toLocaleLowerCaseResult) : call10(_minWeekdaysParse4, toLocaleLowerCaseResult);
        tmp22 = null;
        if (-1 !== tmp21) {
          tmp22 = tmp21;
        }
        const tmp20 = closure_35;
      }
    } else {
      if ("dddd" === arg1) {
        const call7 = closure_35.call;
        const _weekdaysParse3 = tmp._weekdaysParse;
        let tmp16 = typeof call7 === "unknown" ? tmp15(toLocaleLowerCaseResult) : call7(_weekdaysParse3, toLocaleLowerCaseResult);
        if (-1 === tmp16) {
          const call8 = tmp15.call;
          const _shortWeekdaysParse3 = tmp._shortWeekdaysParse;
          const tmp17 = typeof call8 === "unknown" ? tmp15(toLocaleLowerCaseResult) : call8(_shortWeekdaysParse3, toLocaleLowerCaseResult);
          tmp16 = tmp17;
          if (-1 === tmp17) {
            const call9 = tmp15.call;
            const _minWeekdaysParse3 = tmp._minWeekdaysParse;
            const tmp18 = typeof call9 === "unknown" ? tmp15(toLocaleLowerCaseResult) : call9(_minWeekdaysParse3, toLocaleLowerCaseResult);
            tmp16 = tmp18;
            let tmp19 = null;
          }
          let tmp9 = tmp19;
        }
        tmp19 = tmp16;
      } else if ("ddd" === arg1) {
        const call4 = closure_35.call;
        const _shortWeekdaysParse2 = tmp._shortWeekdaysParse;
        let tmp11 = typeof call4 === "unknown" ? tmp10(toLocaleLowerCaseResult) : call4(_shortWeekdaysParse2, toLocaleLowerCaseResult);
        if (-1 === tmp11) {
          const call5 = tmp10.call;
          const _weekdaysParse2 = tmp._weekdaysParse;
          const tmp12 = typeof call5 === "unknown" ? tmp10(toLocaleLowerCaseResult) : call5(_weekdaysParse2, toLocaleLowerCaseResult);
          tmp11 = tmp12;
          if (-1 === tmp12) {
            const call6 = tmp10.call;
            const _minWeekdaysParse2 = tmp._minWeekdaysParse;
            const tmp13 = typeof call6 === "unknown" ? tmp10(toLocaleLowerCaseResult) : call6(_minWeekdaysParse2, toLocaleLowerCaseResult);
            tmp11 = tmp13;
            let tmp14 = null;
          }
          tmp9 = tmp14;
        }
        tmp14 = tmp11;
      } else {
        const call = closure_35.call;
        const _minWeekdaysParse = tmp._minWeekdaysParse;
        let tmp6 = typeof call === "unknown" ? tmp5(toLocaleLowerCaseResult) : call(_minWeekdaysParse, toLocaleLowerCaseResult);
        if (-1 === tmp6) {
          const call2 = tmp5.call;
          const _weekdaysParse = tmp._weekdaysParse;
          const tmp7 = typeof call2 === "unknown" ? tmp5(toLocaleLowerCaseResult) : call2(_weekdaysParse, toLocaleLowerCaseResult);
          tmp6 = tmp7;
          if (-1 === tmp7) {
            const call3 = tmp5.call;
            const _shortWeekdaysParse = tmp._shortWeekdaysParse;
            const tmp8 = typeof call3 === "unknown" ? tmp5(toLocaleLowerCaseResult) : call3(_shortWeekdaysParse, toLocaleLowerCaseResult);
            tmp6 = tmp8;
            tmp9 = null;
          }
        }
        tmp9 = tmp6;
      }
      return tmp9;
    }
  }
  function computeWeekdaysParse() {
    const self = this;
    items = [];
    const items1 = [];
    const items2 = [];
    const items3 = [];
    let num = 0;
    do {
      let tmp = createLocalOrUTC;
      let num2 = 0;
      let flag = true;
      obj = createLocalOrUTC([2000, 1], undefined, undefined, undefined, true);
      let utcResult = obj.utc();
      let dayResult = utcResult.day(num);
      let str = self.weekdaysMin(dayResult, "");
      let replaced = str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      let str2 = self.weekdaysShort(dayResult, "");
      let replaced1 = str2.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      let str3 = self.weekdays(dayResult, "");
      let replaced2 = str3.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      let arr = items.push(replaced);
      arr = items1.push(replaced1);
      let arr1 = items2.push(replaced2);
      let arr2 = items3.push(replaced);
      let arr3 = items3.push(replaced1);
      let arr4 = items3.push(replaced2);
      num = num + 1;
    } while (num < 7);
    function cmpLenRev(arg0, arg1) {
      return arg1.length - arg0.length;
    }
    const sorted = items.sort(cmpLenRev);
    const sorted1 = items1.sort(cmpLenRev);
    const sorted2 = items2.sort(cmpLenRev);
    const sorted3 = items3.sort(cmpLenRev);
    const regExp = new RegExp("^(" + items3.join("|") + ")", "i");
    self._weekdaysRegex = regExp;
    ({ _weekdaysRegex: self._weekdaysShortRegex, _weekdaysRegex: self._weekdaysMinRegex } = self);
    const regExp1 = new RegExp("^(" + items2.join("|") + ")", "i");
    self._weekdaysStrictRegex = regExp1;
    const regExp2 = new RegExp("^(" + items1.join("|") + ")", "i");
    self._weekdaysShortStrictRegex = regExp2;
    const regExp3 = new RegExp("^(" + items.join("|") + ")", "i");
    self._weekdaysMinStrictRegex = regExp3;
  }
  function hFormat() {
    return this.hours() % 12 || 12;
  }
  function loadLocale(_abbr2) {
    if (undefined === dependencyMap4[_abbr2]) {
      if (undefined !== closure_1) {
        if (tmp4) {
          if (tmp4.exports) {
            if ((function isLocaleNameSane(_abbr2) {
              let tmp = !_abbr2;
              if (_abbr2) {
                tmp = !_abbr2.match("^[^/\\\\]*$");
              }
              return !tmp;
            })(_abbr2)) {
              try {
                callback("./locale/" + _abbr2);
                getSetGlobalLocale(closure_57._abbr);
              } catch (err) {
                tmp[tmp2] = null;
              }
            }
          }
        }
      }
    }
    return dependencyMap4[_abbr2];
  }
  function getSetGlobalLocale(_abbr, parentLocale) {
    if (_abbr) {
      if (undefined === parentLocale) {
        let tmp3 = getLocale(_abbr);
      } else {
        tmp3 = defineLocale(_abbr, parentLocale);
      }
      if (tmp3) {
        closure_57 = tmp3;
      } else {
        const _console = console;
        let warn = typeof console !== "undefined";
        if (typeof console !== "undefined") {
          const _console3 = console;
          warn = console.warn;
        }
        if (warn) {
          const _console2 = console;
          console.warn(`Locale ${_abbr} not found. Did you forget to load it?`);
        }
      }
    }
    return closure_57._abbr;
  }
  function defineLocale(bg, parentLocale) {
    if (null !== parentLocale) {
      let _config = closure_58;
      parentLocale.abbr = bg;
      if (null != dependencyMap4[bg]) {
        if (null != year.deprecationHandler) {
          obj2.deprecationHandler("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
        }
        if (!defineLocaleOverride.defineLocaleOverride) {
          let warn = false === obj2.suppressDeprecationWarnings;
          if (warn) {
            const _console = console;
            warn = typeof console !== "undefined";
          }
          if (warn) {
            const _console2 = console;
            warn = console.warn;
          }
          if (warn) {
            const _console3 = console;
            console.warn("Deprecation warning: use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
          }
          tmp10.defineLocaleOverride = true;
        }
        _config = tmp4[bg]._config;
      } else if (null != parentLocale.parentLocale) {
        if (null != tmp4[parentLocale.parentLocale]) {
          _config = tmp4[parentLocale.parentLocale]._config;
        } else {
          const tmp6 = loadLocale(parentLocale.parentLocale);
          if (null == tmp6) {
            if (!dependencyMap5[parentLocale.parentLocale]) {
              tmp7[parentLocale.parentLocale] = [];
            }
            let arr = tmp7[parentLocale.parentLocale];
            obj = { name: null, config: null };
            obj[0] = bg;
            obj[1] = parentLocale;
            arr = arr.push(obj);
            return null;
          } else {
            _config = tmp6._config;
          }
        }
      }
      obj = Object.create(Locale.prototype);
      const result = obj.set(mergeConfigs(_config, parentLocale));
      dependencyMap4[bg] = obj;
      if (dependencyMap5[bg]) {
        const item = dependencyMap5[bg].forEach((name) => {
          callback(name.name, name.config);
        });
        const arr2 = dependencyMap5[bg];
      }
      if (bg) {
        const tmp21 = getLocale(bg);
        if (tmp21) {
          closure_57 = tmp21;
        } else {
          const _console4 = console;
          let warn2 = typeof console !== "undefined";
          if (typeof console !== "undefined") {
            const _console6 = console;
            warn2 = console.warn;
          }
          if (warn2) {
            const _console5 = console;
            console.warn(`Locale ${bg} not found. Did you forget to load it?`);
          }
        }
      }
      const _abbr = closure_57._abbr;
      return dependencyMap4[bg];
    } else {
      delete tmp[tmp2];
      return null;
    }
  }
  function getLocale(_locale) {
    let _abbr = _locale;
    if (_locale) {
      _abbr = _locale._locale;
    }
    if (_abbr) {
      _abbr = _locale._locale._abbr;
    }
    let _abbr2 = _locale;
    if (_abbr) {
      _abbr2 = _locale._locale._abbr;
    }
    if (_abbr2) {
      const _Array = Array;
      if (_abbr2 instanceof Array) {
        let arr = _abbr2;
        if (!tmp3) {
          const tmp7 = loadLocale(_abbr2);
          if (tmp7) {
            return tmp7;
          } else {
            items = [_abbr2];
            arr = items;
          }
        }
        let num4 = 0;
        if (0 < arr.length) {
          while (true) {
            let str4 = arr[num4];
            let tmp8 = num4;
            let str5 = str4;
            if (str4) {
              let str6 = str4.toLowerCase();
              str5 = str6.replace("_", "-");
            }
            let parts = str5.split("-");
            let length = parts.length;
            let sum = num4 + 1;
            let str7 = arr[sum];
            let str8 = str7;
            if (str7) {
              let str9 = str7.toLowerCase();
              str8 = str9.replace("_", "-");
            }
            let parts1 = null;
            if (str8) {
              parts1 = str8.split("-");
            }
            if (length <= 0) {
              num4 = sum;
              break;
            } else {
              let tmp11 = loadLocale;
              let substr = parts.slice(0, length);
              let tmp12 = loadLocale(substr.join("-"));
              let tmp13 = length;
              while (!tmp12) {
                if (parts1) {
                  if (parts1.length >= length) {
                    let _Math = Math;
                    let bound = Math.min(parts.length, parts1.length);
                    let num5 = 0;
                    let tmp15 = bound;
                    if (0 < bound) {
                      let tmp16 = num5;
                      tmp15 = num5;
                      while (parts[num5] === parts1[num5]) {
                        num5 = num5 + 1;
                        tmp15 = bound;
                        if (num5 >= bound) {
                          break;
                        }
                      }
                    }
                  }
                }
                length = length - 1;
              }
            }
            return tmp12;
          }
        }
        tmp12 = closure_57;
      } else {
        const _Object = Object;
        let str = Object.prototype.toString;
        const call = str.call;
        str = "[object Array]";
        const tmp4 = typeof call === "unknown" ? str() : call(_abbr2);
      }
    } else {
      return closure_57;
    }
  }
  function checkOverflow(_a) {
    _a = _a._a;
    let tmp = _a;
    if (_a) {
      if (null == _a._pf) {
        obj = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
        obj[1] = [];
        obj[2] = [];
        obj[11] = [];
        _a._pf = obj;
      }
      tmp = -2 === _a._pf.overflow;
    }
    if (tmp) {
      let tmp4 = c27;
      if (_a[c27] >= 0) {
        tmp4 = tmp3;
        if (_a[tmp3] <= 11) {
          let tmp11 = c28;
          if (_a[c28] >= 1) {
            const _isNaN2 = isNaN;
            let num3 = NaN;
            if (!isNaN(_a[c26])) {
              const _isNaN = isNaN;
              num3 = NaN;
              if (!isNaN(tmp27)) {
                const result = (tmp27 % 12 + 12) % 12;
                const sum = tmp26 + (tmp27 - result) / 12;
                if (1 === result) {
                  const result1 = sum % 4;
                  let tmp9 = result1 === 0;
                  if (result1 === 0) {
                    tmp9 = sum % 100 !== 0;
                  }
                  if (!tmp9) {
                    tmp9 = sum % 400 === 0;
                  }
                  let num11 = 28;
                  if (tmp9) {
                    num11 = 29;
                  }
                  let diff = num11;
                } else {
                  diff = 31 - result % 7 % 2;
                }
              }
            }
            tmp11 = tmp24;
            if (_a[tmp24] <= num3) {
              let tmp13 = c29;
              if (_a[c29] >= 0) {
                tmp13 = tmp29;
                if (_a[tmp29] <= 24) {
                  if (24 !== _a[tmp29]) {
                    let tmp16 = c30;
                    if (_a[c30] >= 0) {
                      tmp16 = tmp15;
                      if (_a[tmp15] <= 59) {
                        let tmp18 = c31;
                        if (_a[c31] >= 0) {
                          tmp18 = tmp17;
                          if (_a[tmp17] <= 59) {
                            if (_a[c32] < 0) {
                              let num14 = tmp19;
                            } else {
                              num14 = -1;
                            }
                            tmp18 = num14;
                          }
                        }
                        tmp16 = tmp18;
                      }
                    }
                    tmp13 = tmp16;
                  } else {
                    tmp13 = tmp29;
                    if (0 === _a[c30]) {
                      tmp13 = tmp29;
                      if (0 === _a[c31]) {
                        tmp13 = tmp29;
                      }
                    }
                  }
                }
              }
              tmp11 = tmp13;
            }
          }
          tmp4 = tmp11;
        }
      }
      if (null == _a._pf) {
        obj = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
        obj[1] = [];
        obj[2] = [];
        obj[11] = [];
        _a._pf = obj;
      }
      let _overflowDayOfYear = _a._pf._overflowDayOfYear;
      if (_overflowDayOfYear) {
        let tmp22 = tmp4 < c26;
        if (!tmp22) {
          tmp22 = tmp4 > c28;
        }
        _overflowDayOfYear = tmp22;
      }
      if (_overflowDayOfYear) {
        tmp4 = c28;
      }
      if (null == _a._pf) {
        obj = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
        obj[1] = [];
        obj[2] = [];
        obj[11] = [];
        _a._pf = obj;
      }
      let _overflowWeeks = _a._pf._overflowWeeks;
      if (_overflowWeeks) {
        _overflowWeeks = -1 === tmp4;
      }
      if (_overflowWeeks) {
        tmp4 = c33;
      }
      if (null == _a._pf) {
        obj1 = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
        obj1[1] = [];
        obj1[2] = [];
        obj1[11] = [];
        _a._pf = obj1;
      }
      let _overflowWeekday = _a._pf._overflowWeekday;
      if (_overflowWeekday) {
        _overflowWeekday = -1 === tmp4;
      }
      if (_overflowWeekday) {
        tmp4 = c34;
      }
      if (null == _a._pf) {
        const obj2 = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
        obj2[1] = [];
        obj2[2] = [];
        obj2[11] = [];
        _a._pf = obj2;
      }
      _a._pf.overflow = tmp4;
    }
    return _a;
  }
  function configFromISO(_i) {
    _i = _i._i;
    let match = regex3.exec(_i);
    if (!match) {
      match = regex4.exec(_i);
    }
    if (match) {
      if (null == _i._pf) {
        obj = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
        obj[1] = [];
        obj[2] = [];
        obj[11] = [];
        _i._pf = obj;
      }
      _i._pf.iso = true;
      let num3 = 0;
      let first;
      if (0 < length) {
        while (!obj2.exec(match[1])) {
          let sum = num3 + 1;
          num3 = sum;
        }
        first = tmp6[num3][0];
        obj2 = length[num3][1];
        const tmp5 = false !== length[num3][2];
      }
      if (null == first) {
        _i._isValid = false;
      } else {
        let str;
        if (match[3]) {
          let num4 = 0;
          let sum2;
          if (0 < length2) {
            while (!obj3.exec(match[3])) {
              let sum1 = num4 + 1;
              num4 = sum1;
            }
            sum2 = (match[2] || " ") + length2[num4][0];
            obj3 = length2[num4][1];
            const tmp10 = length2;
            const tmp13 = match[2] || " ";
          }
          str = sum2;
          if (null == sum2) {
            _i._isValid = false;
          }
        }
        if (!tmp5) {
          if (null != str) {
            _i._isValid = false;
          }
        }
        let str2;
        if (match[4]) {
          str2 = "Z";
          if (!regex5.exec(match[4])) {
            _i._isValid = false;
          }
        }
        if (!str) {
          str = "";
        }
        const sum3 = first + str;
        if (!str2) {
          str2 = "";
        }
        _i._f = sum3 + str2;
        configFromStringAndFormat(_i);
      }
    } else {
      _i._isValid = false;
    }
  }
  function configFromRFC2822(_i) {
    const str = _i._i;
    const str2 = _i._i.replace(/\([^()]*\)|[\n\t]/g, " ");
    const str3 = _i._i.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ");
    const match = regex7.exec(_i._i.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
    if (match) {
      const _parseInt = parseInt;
      const parsed = parseInt(match[4], 10);
      if (parsed <= 49) {
        let sum = 2000 + parsed;
      } else {
        sum = parsed;
        if (parsed <= 999) {
          sum = 1900 + parsed;
        }
      }
      items = [sum, closure_38.indexOf(match[3]), , , ];
      const _parseInt2 = parseInt;
      items[2] = parseInt(match[2], 10);
      const _parseInt3 = parseInt;
      items[3] = parseInt(match[5], 10);
      const _parseInt4 = parseInt;
      items[4] = parseInt(match[6], 10);
      if (match[7]) {
        const _parseInt5 = parseInt;
        items.push(parseInt(tmp2, 10));
      }
      let flag2 = !tmp8;
      if (match[1]) {
        const _Date = Date;
        const index = closure_50.indexOf(tmp8);
        const date = new Date(items[0], items[1], items[2]);
        flag2 = index === date.getDay();
      }
      if (!flag2) {
        if (null == _i._pf) {
          obj = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
          obj[1] = [];
          obj[2] = [];
          obj[11] = [];
          _i._pf = obj;
        }
        _i._pf.weekdayMismatch = true;
        _i._isValid = false;
        flag2 = false;
      }
      if (flag2) {
        _i._a = items;
        if (match[8]) {
          let num6 = table3[tmp15];
        } else {
          num6 = 0;
          if (!tmp16) {
            const _parseInt6 = parseInt;
            const parsed1 = parseInt(tmp17, 10);
            const result = parsed1 % 100;
            num6 = (parsed1 - result) / 100 * 60 + result;
          }
        }
        _i._tzm = num6;
        _i._d = createUTCDate.apply(null, _i._a);
        ({ _d, _d: _d2 } = _i);
        _d.setUTCMinutes(_d2.getUTCMinutes() - _i._tzm);
        if (null == _i._pf) {
          obj = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
          obj[1] = [];
          obj[2] = [];
          obj[11] = [];
          _i._pf = obj;
        }
        _i._pf.rfc2822 = true;
      }
    } else {
      _i._isValid = false;
    }
  }
  function configFromArray(_d) {
    if (!_d._d) {
      const _Date = Date;
      const date = new Date(year.now());
      if (_d._useUTC) {
        items = [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()];
        let items1 = items;
      } else {
        items1 = [date.getFullYear(), date.getMonth(), date.getDate()];
      }
      let _w = _d._w;
      if (_w) {
        _w = null == _d._a[c28];
      }
      if (_w) {
        _w = null == _d._a[c27];
      }
      if (_w) {
        const _w2 = _d._w;
        if (null == _w2.GG) {
          if (null == _w2.W) {
            if (null == _w2.E) {
              const dow = _d._locale._week.dow;
              const doy = _d._locale._week.doy;
              const tmp53 = weekOfYear(createLocalOrUTC(undefined, undefined, undefined, undefined, false), dow, doy);
              let gg = _w2.gg;
              year = tmp53.year;
              if (null == gg) {
                if (null != tmp55) {
                  year = tmp55;
                }
                gg = year;
              }
              let w = _w2.w;
              const week = tmp53.week;
              if (null == w) {
                let tmp11;
                if (null != week) {
                  tmp11 = week;
                }
                w = tmp11;
              }
              if (null != _w2.d) {
                const d = _w2.d;
                let tmp18 = d < 0;
                if (!tmp18) {
                  tmp18 = d > 6;
                }
                let tmp12 = tmp54;
                let num = doy;
                let num2 = dow;
                let tmp13 = d;
                let tmp14 = w;
                let tmp15 = gg;
                if (tmp18) {
                  let flag = true;
                  tmp12 = tmp54;
                  num = doy;
                  num2 = dow;
                  tmp13 = d;
                  tmp14 = w;
                  tmp15 = gg;
                }
              } else {
                tmp12 = tmp54;
                num = doy;
                num2 = dow;
                tmp13 = dow;
                tmp14 = w;
                tmp15 = gg;
                if (null != _w2.e) {
                  const sum = _w2.e + dow;
                  let tmp17 = _w2.e < 0;
                  if (!tmp17) {
                    tmp17 = _w2.e > 6;
                  }
                  tmp12 = tmp54;
                  num = doy;
                  num2 = dow;
                  tmp13 = sum;
                  tmp14 = w;
                  tmp15 = gg;
                  if (tmp17) {
                    flag = true;
                    tmp12 = tmp54;
                    num = doy;
                    num2 = dow;
                    tmp13 = sum;
                    tmp14 = w;
                    tmp15 = gg;
                  }
                }
              }
            }
            if (tmp14 >= 1) {
              if (tmp14 <= weeksInYear(tmp15, num2, num)) {
                if (null != flag) {
                  if (null == _d._pf) {
                    obj = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
                    obj[1] = [];
                    obj[2] = [];
                    obj[11] = [];
                    _d._pf = obj;
                  }
                  _d._pf._overflowWeekday = true;
                } else {
                  ({ year: _d._a[tmp12], dayOfYear: _d._dayOfYear } = dayOfYearFromWeeks(tmp15, tmp14, tmp13, num2, num));
                  const tmp30 = dayOfYearFromWeeks(tmp15, tmp14, tmp13, num2, num);
                }
              }
            }
            if (null == _d._pf) {
              obj = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
              obj[1] = [];
              obj[2] = [];
              obj[11] = [];
              _d._pf = obj;
            }
            _d._pf._overflowWeeks = true;
          }
        }
        let GG = _w2.GG;
        let year2 = weekOfYear(createLocalOrUTC(undefined, undefined, undefined, undefined, false), 1, 4).year;
        if (null == GG) {
          if (null != tmp20) {
            year2 = tmp20;
          }
          GG = year2;
        }
        let num9 = _w2.W;
        if (null == num9) {
          num9 = 1;
        }
        let num10 = _w2.E;
        if (null == num10) {
          num10 = 1;
        }
        let tmp23 = num10 < 1;
        if (!tmp23) {
          tmp23 = num10 > 7;
        }
        tmp12 = tmp19;
        num = 4;
        num2 = 1;
        tmp13 = num10;
        tmp14 = num9;
        tmp15 = GG;
        if (tmp23) {
          flag = true;
          tmp12 = tmp19;
          num = 4;
          num2 = 1;
          tmp13 = num10;
          tmp14 = num9;
          tmp15 = GG;
        }
      }
      if (null != _d._dayOfYear) {
        let tmp33 = _d._a[c26];
        if (null == tmp33) {
          let tmp32;
          if (null != tmp58) {
            tmp32 = tmp58;
          }
          tmp33 = tmp32;
        }
        const result = tmp33 % 4;
        let tmp35 = result === 0;
        if (result === 0) {
          tmp35 = tmp33 % 100 !== 0;
        }
        if (!tmp35) {
          tmp35 = tmp33 % 400 === 0;
        }
        let num18 = 365;
        if (tmp35) {
          num18 = 366;
        }
        if (tmp36) {
          if (null == _d._pf) {
            obj1 = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
            obj1[1] = [];
            obj1[2] = [];
            obj1[11] = [];
            _d._pf = obj1;
          }
          _d._pf._overflowDayOfYear = true;
        }
        const obj5 = createUTCDate(tmp33, 0, _d._dayOfYear);
        _d._a[c27] = obj5.getUTCMonth();
        _d._a[c28] = obj5.getUTCDate();
        tmp36 = _d._dayOfYear > num18 || 0 === _d._dayOfYear;
      }
      const items2 = [];
      let num22 = 0;
      let num23 = 0;
      if (null == _d._a[0]) {
        items2[num22] = items1[num22];
        _d._a[num22] = items1[num22];
        const sum1 = num22 + 1;
        num23 = sum1;
        while (sum1 < 3) {
          num22 = sum1;
          num23 = sum1;
          if (null != _d._a[sum1]) {
            break;
          }
        }
      }
      if (num23 < 7) {
        do {
          let tmp42 = num23;
          if (null == _d._a[num23]) {
            let num26 = 0;
            if (2 === num23) {
              num26 = 1;
            }
            let tmp43 = num26;
          } else {
            tmp43 = _d._a[num23];
          }
          items2[num23] = tmp43;
          _d._a[num23] = tmp43;
          num23 = num23 + 1;
        } while (num23 < 7);
      }
      let tmp45 = 24 === _d._a[c29];
      if (tmp45) {
        tmp45 = 0 === _d._a[c30];
      }
      if (tmp45) {
        tmp45 = 0 === _d._a[c31];
      }
      if (tmp45) {
        tmp45 = 0 === _d._a[c32];
      }
      if (tmp45) {
        _d._nextDay = true;
        _d._a[tmp44] = 0;
      }
      _d._d = _d._useUTC ? createUTCDate : createDate.apply(null, items2);
      _d = _d._d;
      if (_d._useUTC) {
        let uTCDay = _d.getUTCDay();
      } else {
        uTCDay = _d.getDay();
      }
      if (null != _d._tzm) {
        ({ _d: _d2, _d: _d3 } = _d);
        _d2.setUTCMinutes(_d3.getUTCMinutes() - _d._tzm);
      }
      if (_d._nextDay) {
        _d._a[tmp44] = 24;
      }
      let _w3 = _d._w;
      if (_w3) {
        _w3 = undefined !== _d._w.d;
      }
      if (_w3) {
        _w3 = _d._w.d !== uTCDay;
      }
      if (_w3) {
        if (null == _d._pf) {
          const obj2 = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
          obj2[1] = [];
          obj2[2] = [];
          obj2[11] = [];
          _d._pf = obj2;
        }
        _d._pf.weekdayMismatch = true;
      }
      const obj6 = _d._useUTC ? createUTCDate : createDate;
    }
  }
  function configFromStringAndFormat(_f) {
    let str7;
    if (_f._f !== year.ISO_8601) {
      if (_f._f !== tmp.RFC_2822) {
        _f._a = [];
        if (null == _f._pf) {
          obj = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
          obj[1] = [];
          obj[2] = [];
          obj[11] = [];
          _f._pf = obj;
        }
        _f._pf.empty = true;
        const text = `${_f._i}`;
        ({ _f, _locale: closure_0 } = _f);
        regex.lastIndex = 0;
        function replaceLongDateFormatTokens(arg0) {
          return closure_0.longDateFormat(arg0) || arg0;
        }
        let num4 = 5;
        let str = _f;
        let str2 = _f;
        if (regex.test(_f)) {
          obj1 = regex;
          const replaced = str.replace(regex, replaceLongDateFormatTokens);
          regex.lastIndex = 0;
          const diff = num4 - 1;
          str2 = replaced;
          while (0 <= diff) {
            num4 = diff;
            str = replaced;
            str2 = replaced;
            if (!obj1.test(replaced)) {
              break;
            }
          }
        }
        let arr = str2.match(closure_13) || [];
        let num6 = 0;
        let str6 = text;
        let num7 = 0;
        let num8 = 0;
        let arr1 = text;
        if (0 < arr.length) {
          while (true) {
            str7 = arr[num7];
            let tmp13 = obj;
            let _Object = Object;
            let call = hasOwnProperty.call;
            let tmp14 = num6;
            let tmp15 = str6;
            let tmp16 = num7;
            if (typeof call === "unknown" ? hasOwnProperty(str7) : call(tmp13, str7)) {
              let regExp = tmp13[str7](_f._strict, _f._locale);
            } else {
              let _RegExp = RegExp;
              let str8 = str7.replace("\\", "");
              let str9 = str8.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (arg0, arg1, arg2, arg3, arg4) => {
                let tmp = arg1;
                if (!arg1) {
                  tmp = arg2;
                }
                if (!tmp) {
                  tmp = arg3;
                }
                if (!tmp) {
                  tmp = arg4;
                }
                return tmp;
              });
              let tmp17 = new.target;
              let tmp18 = new.target;
              regExp = new RegExp(str9.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
            }
            let tmp20 = str6.match(regExp) || [];
            let first = tmp20[0];
            let sum = num6;
            let substr1 = str6;
            if (first) {
              let substr = str6.substr(0, str6.indexOf(first));
              if (substr.length > 0) {
                if (null == _f._pf) {
                  obj = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
                  obj[1] = [];
                  obj[2] = [];
                  obj[11] = [];
                  _f._pf = obj;
                }
                let unusedInput = _f._pf.unusedInput;
                arr = unusedInput.push(substr);
              }
              substr1 = str6.slice(str6.indexOf(first) + first.length);
              sum = num6 + first.length;
            }
            let tmp24 = obj;
            if (obj[str7]) {
              let _pf = _f._pf;
              if (first) {
                if (null == _pf) {
                  obj = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
                  obj[1] = [];
                  obj[2] = [];
                  obj[11] = [];
                  _f._pf = obj;
                }
                _f._pf.empty = false;
              } else {
                if (null == _pf) {
                  obj1 = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
                  obj1[1] = [];
                  obj1[2] = [];
                  obj1[11] = [];
                  _f._pf = obj1;
                }
                let unusedTokens = _f._pf.unusedTokens;
                arr = unusedTokens.push(str7);
              }
              let tmp28 = null != first;
              if (tmp28) {
                break;
              } else if (tmp28) {
                let tmp31 = dependencyMap3;
                let tmp32 = dependencyMap3;
                let tmp33 = first;
                let tmp34 = _f;
                let tmp35 = str7;
                let tmp36 = dependencyMap3[str7](first, _f._a, _f, str7);
              }
            } else {
              let tmp25 = _f._strict && !first;
              if (tmp25) {
                if (null == _f._pf) {
                  let obj2 = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
                  obj2[1] = [];
                  obj2[2] = [];
                  obj2[11] = [];
                  _f._pf = obj2;
                }
                let unusedTokens1 = _f._pf.unusedTokens;
                arr1 = unusedTokens1.push(str7);
              }
            }
            num7 = num7 + 1;
            num6 = sum;
            str6 = substr1;
            num8 = sum;
            arr1 = substr1;
          }
          const _Object2 = Object;
          const call2 = hasOwnProperty2.call;
          typeof call2 === "unknown" ? hasOwnProperty2(str7) : call2(dependencyMap3, str7);
          const tmp29 = dependencyMap3;
        }
        if (null == _f._pf) {
          const obj3 = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
          obj3[1] = [];
          obj3[2] = [];
          obj3[11] = [];
          _f._pf = obj3;
        }
        _f._pf.charsLeftOver = `${_f._i}`.length - num8;
        if (arr1.length > 0) {
          if (null == _f._pf) {
            const obj4 = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
            obj4[1] = [];
            obj4[2] = [];
            obj4[11] = [];
            _f._pf = obj4;
          }
          const unusedInput1 = _f._pf.unusedInput;
          unusedInput1.push(arr1);
        }
        let tmp39 = _f._a[c29] <= 12;
        if (tmp39) {
          if (null == _f._pf) {
            const obj5 = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
            obj5[1] = [];
            obj5[2] = [];
            obj5[11] = [];
            _f._pf = obj5;
          }
          tmp39 = true === _f._pf.bigHour;
        }
        if (tmp39) {
          tmp39 = _f._a[tmp38] > 0;
        }
        if (tmp39) {
          if (null == _f._pf) {
            const obj6 = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
            obj6[1] = [];
            obj6[2] = [];
            obj6[11] = [];
            _f._pf = obj6;
          }
          _f._pf.bigHour = undefined;
        }
        if (null == _f._pf) {
          const obj7 = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
          obj7[1] = [];
          obj7[2] = [];
          obj7[11] = [];
          _f._pf = obj7;
        }
        ({ _a, _pf: _pf2 } = _f);
        _pf2.parsedDateParts = _a.slice(0);
        if (null == _f._pf) {
          const obj8 = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
          obj8[1] = [];
          obj8[2] = [];
          obj8[11] = [];
          _f._pf = obj8;
        }
        ({ _meridiem: _f._pf.meridiem, _locale } = _f);
        const _meridiem = _f._meridiem;
        if (null == _meridiem) {
          _f._a[tmp38] = tmp40;
          if (null == _f._pf) {
            const obj9 = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
            obj9[1] = [];
            obj9[2] = [];
            obj9[11] = [];
            _f._pf = obj9;
          }
          const era = _f._pf.era;
          if (null !== era) {
            ({ _locale: _locale2, _a: _a2 } = _f);
            _a2[c26] = _locale2.erasConvertYear(era, _f._a[c26]);
          }
          configFromArray(_f);
          checkOverflow(_f);
        } else if (null != _locale.meridiemHour) {
          let meridiemHourResult = _locale.meridiemHour(tmp40, _meridiem);
        } else {
          meridiemHourResult = tmp40;
          if (null != _locale.isPM) {
            let isPMResult = _locale.isPM(_meridiem);
            let tmp44 = isPMResult;
            if (isPMResult) {
              tmp44 = tmp40 < 12;
            }
            let num10 = tmp40;
            if (tmp44) {
              num10 = tmp40 + 12;
            }
            if (!isPMResult) {
              isPMResult = 12 !== num10;
            }
            if (!isPMResult) {
              num10 = 0;
            }
            meridiemHourResult = num10;
          }
        }
      } else {
        configFromRFC2822(_f);
      }
    } else {
      configFromISO(_f);
    }
  }
  function prepareConfig(_l) {
    let tmp33;
    let tmp87;
    ({ _i, _f, _locale } = _l);
    if (!_locale) {
      _locale = getLocale(_l._l);
    }
    _l._locale = _locale;
    if (null !== _i) {
      if (undefined === _f) {
        return tmp95;
      }
      let tmp5 = _i;
      if (typeof _i === "string") {
        const _locale2 = _l._locale;
        let preparseResult = _locale2.preparse(_i);
        _l._i = preparseResult;
        tmp5 = preparseResult;
      }
      let tmp7 = tmp5 instanceof Moment;
      if (!tmp7) {
        tmp7 = null != tmp5 && null != tmp5._isAMomentObject;
        const tmp8 = null != tmp5 && null != tmp5._isAMomentObject;
      }
      if (tmp7) {
        checkOverflow(tmp5);
        obj = Object.create(tmp6.prototype);
        copyConfig(obj, tmp5);
        preparseResult = globalThis;
        let num17 = NaN;
        if (null != tmp5._d) {
          const _d = tmp5._d;
          num17 = _d.getTime();
        }
        preparseResult = new.target;
        preparseResult = new.target;
        preparseResult = num17;
        preparseResult = new Date(num17);
        obj._d = preparseResult;
        if (!obj.isValid()) {
          const _Date7 = Date;
          preparseResult = new.target;
          preparseResult = new.target;
          preparseResult = new Date(NaN);
          obj._d = preparseResult;
        }
        preparseResult = c6;
        tmp95 = obj;
        if (false === c6) {
          c6 = true;
          preparseResult = year;
          preparseResult = year.updateOffset(obj);
          c6 = false;
          tmp95 = obj;
        }
      } else {
        const _Date = Date;
        if (tmp5 instanceof Date) {
          if (tmp10) {
            _l._d = tmp5;
          } else {
            const _Array = Array;
            if (_f instanceof Array) {
              if (tmp13) {
                if (0 === _l._f.length) {
                  if (null == _l._pf) {
                    obj = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
                    obj[1] = [];
                    obj[2] = [];
                    obj[11] = [];
                    _l._pf = obj;
                  }
                  _l._pf.invalidFormat = true;
                  const _Date6 = Date;
                  const date = new Date(NaN);
                  _l._d = date;
                } else {
                  let flag4 = false;
                  let num12 = 0;
                  let tmp86;
                  if (0 < length3) {
                    do {
                      let tmp69 = copyConfig;
                      obj1 = {};
                      let tmp70 = copyConfig(obj1, _l);
                      let tmp71 = flag4;
                      let tmp72 = num12;
                      let tmp73 = tmp84;
                      let tmp74 = tmp85;
                      if (null != _l._useUTC) {
                        obj1._useUTC = _l._useUTC;
                      }
                      obj1._f = _l._f[num12];
                      let tmp75 = configFromStringAndFormat;
                      let tmp76 = configFromStringAndFormat(obj1);
                      let tmp77 = isValid;
                      let flag2 = false;
                      if (isValid(obj1)) {
                        flag2 = true;
                      }
                      if (null == obj1._pf) {
                        let obj2 = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
                        obj2[1] = [];
                        obj2[2] = [];
                        obj2[11] = [];
                        obj1._pf = obj2;
                      }
                      if (null == obj1._pf) {
                        let obj3 = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
                        obj3[1] = [];
                        obj3[2] = [];
                        obj3[11] = [];
                        obj1._pf = obj3;
                      }
                      let result = 10 * obj1._pf.unusedTokens.length;
                      if (null == obj1._pf) {
                        let obj4 = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
                        obj4[1] = [];
                        obj4[2] = [];
                        obj4[11] = [];
                        obj1._pf = obj4;
                      }
                      let sum = obj1._pf.charsLeftOver + result;
                      obj1._pf.score = sum;
                      if (flag4) {
                        let tmp81 = flag4;
                        let tmp83 = tmp85;
                        let tmp82 = tmp84;
                        if (sum < tmp84) {
                          tmp81 = flag4;
                          tmp82 = sum;
                          tmp83 = obj1;
                        }
                      } else {
                        let tmp80 = null == tmp84 || sum < tmp84 || flag2;
                        tmp81 = flag4;
                        tmp82 = tmp84;
                        tmp83 = tmp85;
                        if (tmp80) {
                          let flag3 = flag4;
                          if (flag2) {
                            flag3 = true;
                          }
                          tmp81 = flag3;
                          tmp82 = sum;
                          tmp83 = obj1;
                        }
                      }
                      num12 = num12 + 1;
                      flag4 = tmp81;
                      tmp84 = tmp82;
                      tmp85 = tmp83;
                      tmp86 = tmp83;
                      tmp87 = obj1;
                    } while (num12 < length3);
                  }
                  if (!tmp86) {
                    tmp86 = tmp87;
                  }
                  s(_l, tmp86);
                  const tmp88 = s;
                }
              } else if (_f) {
                configFromStringAndFormat(_l);
              } else {
                _i = _l._i;
                if (undefined === _i) {
                  const _Date5 = Date;
                  const date1 = new Date(year.now());
                  _l._d = date1;
                } else {
                  const _Date8 = Date;
                  preparseResult = _i instanceof Date;
                  if (preparseResult) {
                    if (preparseResult) {
                      const _Date4 = Date;
                      const date2 = new Date(_i.valueOf());
                      _l._d = date2;
                    } else if (typeof _i === "string") {
                      const match = regex6.exec(_l._i);
                      if (null === match) {
                        configFromISO(_l);
                        if (false === _l._isValid) {
                          delete tmp2[tmp3];
                          preparseResult = configFromRFC2822;
                          preparseResult = configFromRFC2822(_l);
                          if (false === _l._isValid) {
                            delete tmp2[tmp3];
                            if (_l._strict) {
                              _l._isValid = false;
                            } else {
                              const fromInputFallback = year.createFromInputFallback(_l);
                            }
                          }
                        }
                      } else {
                        const _Date3 = Date;
                        const date3 = new Date(+match[1]);
                        _l._d = date3;
                      }
                    } else {
                      const _Array2 = Array;
                      preparseResult = _i instanceof Array;
                      if (preparseResult) {
                        if (preparseResult) {
                          const substr = _i.slice(0);
                          items = [];
                          for (let num8 = 0; num8 < length2; num8 = num8 + 1) {
                            let _parseInt2 = parseInt;
                            let arr = items.push(parseInt(substr[num8], 10));
                          }
                          _l._a = items;
                          configFromArray(_l);
                          length2 = substr.length;
                        } else if (null == _i) {
                          if (tmp20) {
                            if (!_l._d) {
                              const _i2 = _l._i;
                              obj = {};
                              const keys = Object.keys();
                              if (keys !== undefined) {
                                let tmp35 = tmp33;
                                while (keys[preparseResult] !== undefined) {
                                  preparseResult = str8;
                                  let _Object7 = Object;
                                  let call7 = hasOwnProperty.call;
                                  let tmp36 = typeof call7 === "unknown" ? hasOwnProperty(str8) : call7(_i2, str8);
                                  if (tmp36) {
                                    let tmp37;
                                    if (typeof str8 === "string") {
                                      let tmp38 = dependencyMap2[str8] || preparseResult[str8.toLowerCase(str8)];
                                      tmp37 = tmp38;
                                    }
                                    tmp36 = tmp37;
                                    tmp35 = tmp37;
                                  }
                                  tmp33 = tmp35;
                                  if (!tmp36) {
                                    continue;
                                  } else {
                                    obj[tmp35] = _i2[str8];
                                    tmp33 = tmp35;
                                    continue;
                                  }
                                  continue;
                                }
                              }
                              const items1 = [, , , , , , ];
                              ({ year: arr2[0], month: arr2[1] } = obj);
                              items1[2] = undefined === obj.day ? obj.date : obj.day;
                              ({ hour: arr2[3], minute: arr2[4], second: arr2[5], millisecond: arr2[6] } = obj);
                              const items2 = [];
                              for (let num4 = 0; num4 < length; num4 = num4 + 1) {
                                let tmp39 = items1[num4];
                                let tmp40 = num4;
                                let parsed = tmp39;
                                if (tmp39) {
                                  let _parseInt = parseInt;
                                  parsed = parseInt(tmp39, 10);
                                }
                                arr = items2.push(parsed);
                              }
                              _l._a = items2;
                              configFromArray(_l);
                              length = items1.length;
                            }
                          } else if (typeof _i === "number") {
                            if (typeof _i === "number") {
                              const _Date2 = Date;
                              const date4 = new Date(_i);
                              _l._d = date4;
                            } else {
                              const fromInputFallback1 = year.createFromInputFallback(_l);
                            }
                          } else {
                            const _Object6 = Object;
                            let str7 = Object.prototype.toString;
                            const call6 = str7.call;
                            str7 = "[object Number]";
                            const tmp23 = typeof call6 === "unknown" ? str7() : call6(_i);
                          }
                        } else {
                          const _Object5 = Object;
                          let str6 = Object.prototype.toString;
                          const call5 = str6.call;
                          str6 = "[object Object]";
                          const tmp21 = typeof call5 === "unknown" ? str6() : call5(_i);
                        }
                      } else {
                        const _Object4 = Object;
                        let str5 = Object.prototype.toString;
                        const call4 = str5.call;
                        str5 = "[object Array]";
                        const tmp18 = typeof call4 === "unknown" ? str5() : call4(_i);
                      }
                    }
                  } else {
                    const _Object3 = Object;
                    let str4 = Object.prototype.toString;
                    const call3 = str4.call;
                    str4 = "[object Date]";
                    const tmp16 = typeof call3 === "unknown" ? str4() : call3(_i);
                  }
                }
              }
            } else {
              const _Object2 = Object;
              let str3 = Object.prototype.toString;
              const call2 = str3.call;
              str3 = "[object Array]";
              const tmp14 = typeof call2 === "unknown" ? str3() : call2(_f);
            }
          }
          tmp95 = _l;
          if (!isValid(_l)) {
            _l._d = null;
            tmp95 = _l;
          }
        } else {
          const _Object = Object;
          let str2 = Object.prototype.toString;
          const call = str2.call;
          str2 = "[object Date]";
          const tmp11 = typeof call === "unknown" ? str2() : call(tmp5);
        }
      }
      tmp6 = Moment;
    }
    preparseResult = createLocalOrUTC(NaN, undefined, undefined, undefined, true).utc();
    preparseResult = s;
    if (null == preparseResult._pf) {
      const obj5 = { empty: false, unusedTokens: null, unusedInput: null, overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: null, era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
      obj5[1] = [];
      obj5[2] = [];
      obj5[11] = [];
      preparseResult._pf = obj5;
    }
    preparseResult = preparseResult(preparseResult._pf, { nullInput: true });
    tmp95 = preparseResult;
  }
  function createLocalOrUTC(_d, arg1, arg2, arg3, _isUTC) {
    let tmp2 = true !== arg1;
    if (tmp2) {
      tmp2 = false !== arg1;
    }
    let tmp3 = arg3;
    if (!tmp2) {
      tmp3 = arg1;
    }
    let tmp5 = true !== arg2;
    if (tmp5) {
      tmp5 = false !== arg2;
    }
    if (!tmp5) {
      tmp3 = arg2;
    }
    let tmp7 = null != _d;
    if (!tmp7) {
      if (tmp7) {
        const _Object2 = Object;
        if (Object.getOwnPropertyNames) {
          const _Object3 = Object;
          let flag3 = 0 === Object.getOwnPropertyNames(_d).length;
        } else {
          flag3 = true;
          const keys = Object.keys();
          if (keys !== undefined) {
            flag3 = true;
            while (keys[tmp] !== undefined) {
              let tmp42 = tmp14;
              let _Object5 = Object;
              let call3 = hasOwnProperty.call;
              flag3 = false;
              if (typeof call3 === "unknown" ? hasOwnProperty(tmp14) : call3(_d, tmp14)) {
                break;
              }
            }
          }
        }
        tmp7 = flag3;
      }
      if (!tmp7) {
        const _Array = Array;
        let tmp16 = _d instanceof Array;
        if (tmp16) {
          if (tmp16) {
            tmp16 = 0 === _d.length;
          }
          tmp7 = tmp16;
        } else {
          const _Object4 = Object;
          let str2 = Object.prototype.toString;
          const call2 = str2.call;
          str2 = "[object Array]";
          const tmp17 = typeof call2 === "unknown" ? str2() : call2(_d);
        }
      }
      obj = { _isAMomentObject: true, _isUTC, _useUTC: _isUTC, _l: arg2, _i: _d, _f: arg1, _strict: tmp3 };
      const tmp24 = prepareConfig(obj);
      checkOverflow(tmp24);
      obj = Object.create(Moment.prototype);
      copyConfig(obj, tmp24);
      let num5 = NaN;
      if (null != tmp24._d) {
        _d = tmp24._d;
        num5 = _d.getTime();
      }
      const date = new Date(num5);
      obj._d = date;
      if (!obj.isValid()) {
        const _Date = Date;
        const date1 = new Date(NaN);
        obj._d = date1;
      }
      if (false === c6) {
        c6 = true;
        year.updateOffset(obj);
        c6 = false;
      }
      if (obj._nextDay) {
        obj.add(1, "d");
        obj._nextDay = undefined;
      }
      return obj;
    } else {
      const _Object = Object;
      let str = Object.prototype.toString;
      const call = str.call;
      str = "[object Object]";
      const tmp9 = typeof call === "unknown" ? str() : call(_d);
    }
  }
  function createLocal(_d) {
    return createLocalOrUTC(_d, arg1, arg2, arg3, false);
  }
  function pickBy(arg0, arg1) {
    let tmp = 1 === arg1.length;
    if (tmp) {
      const first = arg1[0];
      const _Array = Array;
      if (first instanceof Array) {
        tmp = tmp4;
      } else {
        const _Object = Object;
        let str = Object.prototype.toString;
        const call = str.call;
        str = "[object Array]";
        const tmp5 = typeof call === "unknown" ? str() : call(first);
      }
    }
    let first1 = arg1;
    if (tmp) {
      first1 = arg1[0];
    }
    if (first1.length) {
      let first2 = first1[0];
      let num2 = 1;
      let tmp9 = first2;
      if (1 < first1.length) {
        do {
          obj = first1[num2];
          let isValidResult = obj.isValid();
          let tmp11 = num2;
          let tmp12 = first2;
          if (isValidResult) {
            let tmp13 = first1[num2];
            isValidResult = !tmp13[arg0](tmp12);
          }
          if (!isValidResult) {
            tmp12 = first1[num2];
          }
          num2 = num2 + 1;
          first2 = tmp12;
          tmp9 = tmp12;
        } while (num2 < first1.length);
      }
      return tmp9;
    } else {
      return createLocalOrUTC(undefined, undefined, undefined, undefined, false);
    }
  }
  class Duration {
    constructor(arg0) {
      obj = {};
      obj = {};
      keys = Object.keys();
      if (keys !== undefined) {
        tmp4 = tmp2;
        str = keys[tmp];
        while (str !== undefined) {
          tmp33 = str;
          _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          call2 = hasOwnProperty.call;
          tmp5 = typeof call2 === "unknown" ? hasOwnProperty(str) : call2(arg0, str);
          if (tmp5) {
            tmp6 = undefined;
            if (typeof str === "string") {
              tmp7 = closure_18[str] || tmp34[str.toLowerCase(str)];
              tmp6 = tmp7;
            }
            tmp5 = tmp6;
            tmp4 = tmp6;
          }
          tmp2 = tmp4;
          if (!tmp5) {
            continue;
          } else {
            obj[tmp4] = arg0[str];
            tmp2 = tmp4;
            continue;
          }
          continue;
        }
      }
      tmp8 = obj.year || 0;
      tmp9 = obj.quarter || 0;
      tmp10 = obj.month || 0;
      tmp11 = obj.week || obj.isoWeek || 0;
      tmp12 = obj.day || 0;
      tmp13 = obj.hour || 0;
      tmp14 = obj.minute || 0;
      tmp15 = obj.second || 0;
      tmp16 = obj.millisecond || 0;
      length = closure_82.length;
      for (const key10033 in obj) {
        tmp35 = key10033;
        _Object2 = Object;
        hasOwnProperty2 = Object.prototype.hasOwnProperty;
        call3 = hasOwnProperty2.call;
        if (typeof call3 === "unknown") {
          hasOwnProperty2Result = hasOwnProperty2(key10033);
        } else {
          hasOwnProperty2Result = call3(obj, key10033);
        }
        if (!hasOwnProperty2Result) {
          continue;
        } else {
          tmp18 = f74762;
          call = f74762.call;
          tmp19 = closure_82;
          if (typeof call === "unknown") {
            tmp18Result = tmp18(key10033);
          } else {
            tmp18Result = call(tmp19, key10033);
          }
          flag = false;
          if (-1 === tmp18Result) {
          } else if (null == obj[key10033]) {
            continue;
          } else {
            _isNaN = isNaN;
            flag = false;
          }
        }
        obj._isValid = flag;
        num3 = 1000;
        num4 = 60000;
        num5 = 60;
        obj._milliseconds = +tmp16 + 1000 * tmp15 + 60000 * tmp14 + 1000 * tmp13 * 60 * 60;
        num6 = 7;
        obj._days = +tmp12 + 7 * tmp11;
        num7 = 3;
        num8 = 12;
        obj._months = +tmp10 + 3 * tmp9 + 12 * tmp8;
        obj._data = {};
        tmp31 = getLocale;
        obj._locale = getLocale();
        _bubbleResult = obj._bubble();
        return;
      }
      flag2 = false;
      num = 0;
      flag = true;
      if (0 < length) {
        while (true) {
          tmp21 = closure_82;
          tmp22 = flag2;
          tmp23 = num;
          flag3 = flag2;
          if (!obj[closure_82[num]]) {
            sum = num + 1;
            flag2 = flag3;
            num = sum;
            flag = true;
            if (sum >= length) {
              break;
            }
          } else {
            flag = false;
            if (flag2) {
              break;
            } else {
              _parseFloat = parseFloat;
              tmp25 = +obj[tmp21[num]];
              isFiniteResult = 0 !== tmp25;
              parsed = parseFloat(obj[tmp21[num]]);
              if (0 !== tmp25) {
                _isFinite = isFinite;
                isFiniteResult = isFinite(tmp25);
              }
              num2 = 0;
              if (!isFiniteResult) {
                flag3 = flag2;
                if (parsed !== 0) {
                  flag3 = true;
                }
              } else {
                if (tmp25 < 0) {
                  _Math2 = Math;
                  tmp28 = Math.ceil(tmp25) || 0;
                  rounded = tmp28;
                } else {
                  _Math = Math;
                  rounded = Math.floor(tmp25);
                }
                tmp29 = rounded;
              }
            }
          }
          break;
        }
      }
      return;
    }
  }
  function offsetFromString(closure_24, _i) {
    let str = _i;
    if (!_i) {
      str = "";
    }
    const match = str.match(closure_24);
    let tmp = null;
    if (null !== match) {
      const tmp2 = match[match.length - 1] || [];
      const text = `${tmp2}`;
      const tmp5 = `${tmp2}`.match(closure_84) || ["-", 0, 0];
      let isFiniteResult = 0 !== tmp7;
      const result = 60 * tmp5[1];
      if (0 !== +tmp5[2]) {
        const _isFinite = isFinite;
        isFiniteResult = isFinite(tmp7);
      }
      if (!isFiniteResult) {
        let num4 = 0;
        if (0 !== result) {
          let tmp16 = tmp15;
          if ("+" !== tmp5[0]) {
            tmp16 = -tmp15;
          }
          num4 = tmp16;
        }
        tmp = num4;
      } else if (tmp7 < 0) {
        const _Math2 = Math;
        let rounded = Math.ceil(tmp7) || 0;
        const tmp13 = Math.ceil(tmp7) || 0;
      } else {
        const _Math = Math;
        rounded = Math.floor(tmp7);
      }
    }
    return tmp;
  }
  function cloneWithOffset(_d, add) {
    if (add._isUTC) {
      const cloneResult = add.clone();
      let tmp4 = _d instanceof Moment;
      if (!tmp4) {
        tmp4 = null != _d && null != _d._isAMomentObject;
        const tmp6 = null != _d && null != _d._isAMomentObject;
      }
      if (!tmp4) {
        const _Date = Date;
        if (_d instanceof Date) {
          if (!tmp8) {
            let valueOfResult = createLocalOrUTC(_d, undefined, undefined, undefined, false).valueOf();
            const obj3 = createLocalOrUTC(_d, undefined, undefined, undefined, false);
          }
          ({ _d, _d: _d2 } = cloneResult);
          const diff = valueOfResult - cloneResult.valueOf();
          _d.setTime(_d2.valueOf() + diff);
          year.updateOffset(cloneResult, false);
        } else {
          const _Object = Object;
          let str = Object.prototype.toString;
          const call = str.call;
          str = "[object Date]";
          const tmp9 = typeof call === "unknown" ? str() : call(_d);
        }
      }
      valueOfResult = _d.valueOf();
    } else {
      return createLocalOrUTC(_d, undefined, undefined, undefined, false).local();
    }
  }
  function createDuration(self, m) {
    let tmp = Duration;
    if (self instanceof Duration) {
      obj = { ms: null, d: null, M: null };
      ({ _milliseconds: obj15[0], _days: obj15[1], _months: obj15[2] } = self);
    } else if (typeof self === "number") {
      if (typeof self !== "number") {
        let tmp4 = globalThis;
        const _isNaN = isNaN;
        if (isNaN(+self)) {
          const match = regex8.exec(self);
          if (match) {
            let isFiniteResult = 0 !== tmp38;
            if (0 !== +match[c28]) {
              const _isFinite = isFinite;
              isFiniteResult = isFinite(tmp38);
            }
            if (!isFiniteResult) {
              obj = { y: 0, d: null, h: null, m: null, s: null, ms: null };
              obj[1] = 0;
              let isFiniteResult1 = 0 !== tmp44;
              if (0 !== +match[c29]) {
                const _isFinite2 = isFinite;
                isFiniteResult1 = isFinite(tmp44);
              }
              if (!isFiniteResult1) {
                obj[2] = 0;
                let isFiniteResult2 = 0 !== tmp50;
                if (0 !== +match[c30]) {
                  const _isFinite3 = isFinite;
                  isFiniteResult2 = isFinite(tmp50);
                }
                if (!isFiniteResult2) {
                  obj[3] = 0;
                  let isFiniteResult3 = 0 !== tmp56;
                  if (0 !== +match[c31]) {
                    const _isFinite4 = isFinite;
                    isFiniteResult3 = isFinite(tmp56);
                  }
                  if (!isFiniteResult3) {
                    obj[4] = 0;
                    const result = 1000 * match[c32];
                    if (result < 0) {
                      const _Math10 = Math;
                      let result1 = -1 * Math.round(-1 * result);
                    } else {
                      const _Math9 = Math;
                      result1 = Math.round(result);
                    }
                    let isFiniteResult4 = 0 !== tmp64;
                    if (0 !== +result1) {
                      const _isFinite5 = isFinite;
                      isFiniteResult4 = isFinite(tmp64);
                    }
                    if (!isFiniteResult4) {
                      obj[5] = 0;
                    } else if (tmp64 < 0) {
                      const _Math12 = tmp4.Math;
                      tmp4 = _Math12.ceil(tmp64) || 0;
                      let rounded = tmp4;
                    } else {
                      const _Math11 = Math;
                      rounded = Math.floor(tmp64);
                    }
                  } else if (tmp56 < 0) {
                    const _Math8 = Math;
                    let rounded1 = Math.ceil(tmp56) || 0;
                    const tmp59 = Math.ceil(tmp56) || 0;
                  } else {
                    const _Math7 = Math;
                    rounded1 = Math.floor(tmp56);
                  }
                } else if (tmp50 < 0) {
                  const _Math6 = Math;
                  let rounded2 = Math.ceil(tmp50) || 0;
                  const tmp53 = Math.ceil(tmp50) || 0;
                } else {
                  const _Math5 = Math;
                  rounded2 = Math.floor(tmp50);
                }
              } else if (tmp44 < 0) {
                const _Math4 = Math;
                let rounded3 = Math.ceil(tmp44) || 0;
                const tmp47 = Math.ceil(tmp44) || 0;
              } else {
                const _Math3 = Math;
                rounded3 = Math.floor(tmp44);
              }
            } else if (tmp38 < 0) {
              const _Math2 = Math;
              let rounded4 = Math.ceil(tmp38) || 0;
              const tmp41 = Math.ceil(tmp38) || 0;
            } else {
              const _Math = Math;
              rounded4 = Math.floor(tmp38);
            }
          } else {
            const match1 = regex9.exec(self);
            if (match1) {
              let num5 = 1;
              if ("-" === match1[1]) {
                num5 = -1;
              }
              let parsed = str6;
              if (match1[2]) {
                const _parseFloat = parseFloat;
                parsed = parseFloat(str6.replace(",", "."));
              }
              const _isNaN2 = isNaN;
              let num6 = 0;
              if (!isNaN(parsed)) {
                num6 = parsed;
              }
              obj1 = { y: null, M: null, w: null, d: null, h: null, m: null, s: null };
              obj1[0] = num6 * num5;
              let parsed1 = str9;
              if (match1[3]) {
                const _parseFloat2 = parseFloat;
                parsed1 = parseFloat(str9.replace(",", "."));
              }
              const _isNaN3 = isNaN;
              let num7 = 0;
              if (!isNaN(parsed1)) {
                num7 = parsed1;
              }
              obj1[1] = num7 * num5;
              let parsed2 = str12;
              if (match1[4]) {
                const _parseFloat3 = parseFloat;
                parsed2 = parseFloat(str12.replace(",", "."));
              }
              const _isNaN4 = isNaN;
              let num8 = 0;
              if (!isNaN(parsed2)) {
                num8 = parsed2;
              }
              obj1[2] = num8 * num5;
              let parsed3 = str15;
              if (match1[5]) {
                const _parseFloat4 = parseFloat;
                parsed3 = parseFloat(str15.replace(",", "."));
              }
              const _isNaN5 = isNaN;
              let num9 = 0;
              if (!isNaN(parsed3)) {
                num9 = parsed3;
              }
              obj1[3] = num9 * num5;
              let parsed4 = str18;
              if (match1[6]) {
                const _parseFloat5 = parseFloat;
                parsed4 = parseFloat(str18.replace(",", "."));
              }
              const _isNaN6 = isNaN;
              let num10 = 0;
              if (!isNaN(parsed4)) {
                num10 = parsed4;
              }
              obj1[4] = num10 * num5;
              let parsed5 = str21;
              if (match1[7]) {
                const _parseFloat6 = parseFloat;
                parsed5 = parseFloat(str21.replace(",", "."));
              }
              const _isNaN7 = isNaN;
              let num11 = 0;
              if (!isNaN(parsed5)) {
                num11 = parsed5;
              }
              obj1[5] = num11 * num5;
              let parsed6 = str24;
              if (match1[8]) {
                const _parseFloat7 = parseFloat;
                parsed6 = parseFloat(str24.replace(",", "."));
              }
              const _isNaN8 = isNaN;
              let num12 = 0;
              if (!isNaN(parsed6)) {
                num12 = parsed6;
              }
              obj1[6] = num12 * num5;
              obj = obj1;
            } else if (null == self) {
              obj = {};
            } else {
              let tmp11 = typeof self === "object";
              if (typeof self === "object") {
                let tmp10 = "from" in self;
                if (!tmp10) {
                  tmp10 = "to" in self;
                }
                tmp11 = tmp10;
              }
              obj = self;
              if (tmp11) {
                let add = createLocalOrUTC(self.from, undefined, undefined, undefined, false);
                obj1 = createLocalOrUTC(self.to, undefined, undefined, undefined, false);
                if (add.isValid()) {
                  if (obj1.isValid()) {
                    let addResult1 = cloneWithOffset(obj1, add);
                    const obj2 = {};
                    if (add.isBefore(addResult1)) {
                      const diff = addResult1.month() - add.month();
                      const monthResult = addResult1.month();
                      obj2.months = diff + 12 * (addResult1.year() - add.year());
                      const yearResult = addResult1.year();
                      const cloneResult = add.clone();
                      if (addResult.isAfter(addResult1)) {
                        obj2.months = obj2.months - 1;
                      }
                      addResult = add.clone().add(obj2.months, "M");
                      const tmp22 = +addResult1;
                      add = add.clone().add;
                      addResult1 = add(obj2.months, "M");
                      obj2.milliseconds = tmp22 - +addResult1;
                      let tmp18 = obj2;
                      const cloneResult1 = add.clone();
                    } else {
                      const diff1 = add.month() - addResult1.month();
                      const monthResult1 = add.month();
                      obj2.months = diff1 + 12 * (add.year() - addResult1.year());
                      const yearResult1 = add.year();
                      const cloneResult2 = addResult1.clone();
                      if (addResult2.isAfter(add)) {
                        obj2.months = obj2.months - 1;
                      }
                      addResult2 = addResult1.clone().add(obj2.months, "M");
                      const tmp17 = +add;
                      obj2.milliseconds = tmp17 - +addResult1.clone().add(obj2.months, "M");
                      obj2.milliseconds = -obj2.milliseconds;
                      obj2.months = -obj2.months;
                      tmp18 = obj2;
                      const cloneResult3 = addResult1.clone();
                    }
                  }
                }
                ({ milliseconds: obj11.ms, months: obj11.M } = { milliseconds: 0, months: 0 });
                obj = {};
                const obj3 = { milliseconds: 0, months: 0 };
                const obj4 = {};
              }
            }
          }
        }
      }
      const obj5 = {};
      if (m) {
        obj5[m] = tmp69;
        obj = obj5;
      } else {
        obj5.milliseconds = tmp69;
        obj = obj5;
      }
    } else {
      const _Object3 = Object;
      let str = Object.prototype.toString;
      const call3 = str.call;
      str = "[object Number]";
      const tmp2 = typeof call3 === "unknown" ? str() : call3(self);
    }
    const obj6 = Object.create(tmp.prototype);
    tmp = new tmp(obj);
    if (!(self instanceof tmp)) {
      if (tmp72) {
        obj6._locale = self._locale;
      }
      if (!(self instanceof tmp)) {
        if (tmp76) {
          obj6._isValid = self._isValid;
        }
        return obj6;
      } else {
        const _Object2 = Object;
        const call2 = hasOwnProperty2.call;
        if (typeof call2 === "unknown") {
          let hasOwnProperty2Result = hasOwnProperty2("_isValid");
        } else {
          hasOwnProperty2Result = call2(self, "_isValid");
        }
      }
    } else {
      const _Object = Object;
      const call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty("_locale");
      } else {
        hasOwnPropertyResult = call(self, "_locale");
      }
    }
  }
  function addSubtract(self, duration, closure_0, arg3) {
    ({ _milliseconds, _days } = duration);
    if (_days < 0) {
      const _Math2 = Math;
      let result = -1 * Math.round(-1 * _days);
    } else {
      const _Math = Math;
      result = Math.round(_days);
    }
    const _months = duration._months;
    if (_months < 0) {
      const _Math4 = Math;
      let result1 = -1 * Math.round(-1 * _months);
    } else {
      const _Math3 = Math;
      result1 = Math.round(_months);
    }
    if (self.isValid()) {
      if (result1) {
        setMonth(self, get(self, "Month") + result1 * closure_0);
      }
      if (result) {
        set$1(self, "Date", get(self, "Date") + result * closure_0);
      }
      if (_milliseconds) {
        ({ _d, _d: _d2 } = self);
        _d.setTime(_d2.valueOf() + _milliseconds * closure_0);
      }
      if (tmp9) {
        if (!result) {
          result = result1;
        }
        year.updateOffset(self, result);
      }
      tmp9 = null == arg3 || arg3;
    }
  }
  function monthDiff(self, date2) {
    if (dateResult < date2.date()) {
      return -monthDiff(date2, self);
    } else {
      const result = 12 * (date2.year() - self.year());
      const yearResult = date2.year();
      const sum = result + (date2.month() - self.month());
      const monthResult = date2.month();
      const addResult = self.clone().add(sum, "months");
      if (date2 - addResult < 0) {
        const diff = date2 - addResult;
        let result1 = diff / (addResult - self.clone().add(sum - 1, "months"));
        const cloneResult1 = self.clone();
      } else {
        const diff1 = date2 - addResult;
        result1 = diff1 / (self.clone().add(sum + 1, "months") - addResult);
        const cloneResult2 = self.clone();
      }
      return -sum + result1 || 0;
    }
    dateResult = self.date();
  }
  function localStartOfDate(arg0, arg1, arg2) {
    if (arg0 < 100) {
      if (arg0 >= 0) {
        const _Date = Date;
        const date = new Date(arg0 + 400, arg1, arg2);
        let diff = date - closure_95;
      }
      return diff;
    }
    diff = new Date(arg0, arg1, arg2).valueOf();
  }
  function utcStartOfDate(arg0, arg1, arg2) {
    if (arg0 < 100) {
      if (arg0 >= 0) {
        const _Date = Date;
        let diff = Date.UTC(arg0 + 400, arg1, arg2) - closure_95;
      }
      return diff;
    }
    diff = Date.UTC(arg0, arg1, arg2);
  }
  function computeErasParse() {
    const self = this;
    items = [];
    const items1 = [];
    const items2 = [];
    const items3 = [];
    const erasResult = this.eras();
    for (let num = 0; num < length; num = num + 1) {
      let str = erasResult[num].name;
      let replaced = str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      let str2 = erasResult[num].abbr;
      let replaced1 = str2.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      let str3 = erasResult[num].narrow;
      let replaced2 = str3.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      let arr = items1.push(replaced);
      arr = items.push(replaced1);
      let arr1 = items2.push(replaced2);
      let arr2 = items3.push(replaced);
      let arr3 = items3.push(replaced1);
      let arr4 = items3.push(replaced2);
    }
    const regExp = new RegExp("^(" + items3.join("|") + ")", "i");
    self._erasRegex = regExp;
    const regExp1 = new RegExp("^(" + items1.join("|") + ")", "i");
    self._erasNameRegex = regExp1;
    const regExp2 = new RegExp("^(" + items.join("|") + ")", "i");
    self._erasAbbrRegex = regExp2;
    const regExp3 = new RegExp("^(" + items2.join("|") + ")", "i");
    self._erasNarrowRegex = regExp3;
  }
  function getSetWeekYearHelper(diff2, arg1, isoWeekdayResult, dow, doy) {
    const self = this;
    if (null == diff2) {
      year = weekOfYear(self, dow, doy).year;
    } else {
      let tmp = arg1;
      const tmp17 = weeksInYear(diff2, dow, doy);
      if (arg1 > tmp17) {
        tmp = tmp17;
      }
      const call = setWeekAll.call;
      if (typeof call === "unknown") {
        const tmp10 = dayOfYearFromWeeks(diff2, tmp, isoWeekdayResult, dow, doy);
        obj = createUTCDate(tmp10.year, 0, tmp10.dayOfYear);
        self.year(obj.getUTCFullYear());
        self.month(obj.getUTCMonth());
        self.date(obj.getUTCDate());
        year = self;
      } else {
        year = call(self, diff2, tmp, isoWeekdayResult, dow, doy);
      }
      const tmp3 = setWeekAll;
    }
    return year;
  }
  function setWeekAll(year, arg1, isoWeekdayResult, dow, doy) {
    const tmp = dayOfYearFromWeeks(year, arg1, isoWeekdayResult, dow, doy);
    obj = createUTCDate(tmp.year, 0, tmp.dayOfYear);
    this.year(obj.getUTCFullYear());
    this.month(obj.getUTCMonth());
    this.date(obj.getUTCDate());
    return this;
  }
  function listMonthsImpl(num, arg1, months) {
    if (typeof num === "number") {
      let tmp4 = arg1;
      let str2 = num;
      if (tmp) {
        tmp4 = num;
      }
      if (!str2) {
        str2 = "";
      }
      if (null != tmp4) {
        const tmp11 = getLocale();
        const obj3 = createLocalOrUTC(undefined, undefined, undefined, undefined, true);
        return tmp11[months](createLocalOrUTC(undefined, undefined, undefined, undefined, true).utc().set("month", tmp4), str2);
      } else {
        items = [];
        let num3 = 0;
        do {
          let tmp7 = getLocale;
          let tmp8 = getLocale();
          let tmp9 = createLocalOrUTC;
          let num4 = 0;
          let flag = true;
          obj = createLocalOrUTC(undefined, undefined, undefined, undefined, true);
          let utcResult1 = obj.utc();
          items[num3] = tmp8[months](utcResult1.set("month", num3), str2);
          num3 = num3 + 1;
        } while (num3 < 12);
        return items;
      }
    } else {
      const _Object = Object;
      let str = Object.prototype.toString;
      const call = str.call;
      str = "[object Number]";
      const tmp2 = typeof call === "unknown" ? str() : call(num);
    }
  }
  function listWeekdaysImpl(flag, num, arg2, weekdays) {
    if (typeof flag === "boolean") {
      if (typeof num === "number") {
        let tmp8 = arg2;
        let str4 = num;
        if (tmp5) {
          tmp8 = num;
        }
        if (!str4) {
          str4 = "";
        }
        let str2 = str4;
        let tmp3 = tmp8;
      } else {
        const _Object2 = Object;
        let str3 = Object.prototype.toString;
        const call2 = str3.call;
        str3 = "[object Number]";
        const tmp6 = typeof call2 === "unknown" ? str3() : call2(num);
      }
    } else if (typeof flag === "number") {
      str2 = flag;
      if (!str2) {
        str2 = "";
      }
      tmp3 = flag;
      flag = false;
    } else {
      const _Object = Object;
      let str = Object.prototype.toString;
      const call = str.call;
      str = "[object Number]";
      const tmp = typeof call === "unknown" ? str() : call(flag);
    }
    num = 0;
    if (flag) {
      num = getLocale()._week.dow;
    }
    items = [];
    let num2 = 0;
    if (null != tmp3) {
      const result = (tmp3 + num) % 7;
      const tmp9Result = tmp9();
      const obj3 = createLocalOrUTC(undefined, undefined, undefined, undefined, true);
      return tmp9Result[weekdays](createLocalOrUTC(undefined, undefined, undefined, undefined, true).utc().set("day", result), str2);
    } else {
      do {
        let tmp11 = getLocale;
        let sum = num2 + num;
        let tmp12 = getLocale();
        let tmp13 = createLocalOrUTC;
        let num3 = 0;
        let flag2 = true;
        obj = createLocalOrUTC(undefined, undefined, undefined, undefined, true);
        let utcResult1 = obj.utc();
        items[num2] = tmp12[weekdays](utcResult1.set("day", sum % 7), str2);
        num2 = num2 + 1;
      } while (num2 < 7);
      return items;
    }
    tmp9 = getLocale;
  }
  function substituteTimeAgo(arg0, arg1, arg2, arg3, relativeTime) {
    let num = arg1;
    if (!arg1) {
      num = 1;
    }
    return relativeTime.relativeTime(num, arg2, arg0, arg3);
  }
  if (Array.prototype.some) {
    let _Array = Array;
    let fn = Array.prototype.some;
  } else {
    fn = function(call) {
      const self = this;
      const ObjectResult = Object(this);
      let num = 0;
      if (0 < ObjectResult.length >>> 0) {
        while (true) {
          if (num in ObjectResult) {
            call = call.call;
            let tmp3 = ObjectResult[num];
            if (typeof call === "unknown") {
              let callResult = call(tmp3, num, ObjectResult);
            } else {
              let tmp5 = call;
              let tmp6 = self;
              let tmp7 = tmp3;
              let tmp8 = num;
              let tmp9 = ObjectResult;
              callResult = call(self, tmp3, tmp2, ObjectResult);
            }
            if (callResult) {
              break;
            }
          }
          num = num + 1;
        }
        return true;
      }
      return false;
    };
  }
  closure_1 = fn;
  let items = [];
  hooks.momentProperties = items;
  c6 = false;
  closure_10 = {};
  hooks.suppressDeprecationWarnings = false;
  hooks.deprecationHandler = null;
  if (Object.keys) {
    let _Object = Object;
    let fn2 = Object.keys;
  } else {
    fn2 = (obj) => {
      items = [];
      for (const key10005 in arg0) {
        let tmp3 = key10005;
        let _Object = Object;
        let call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty(key10005);
        } else {
          hasOwnPropertyResult = call(arg0, key10005);
        }
        if (!hasOwnPropertyResult) {
          continue;
        } else {
          let arr = items.push(key10005);
          continue;
        }
        continue;
      }
      return items;
    };
  }
  const re13 = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
  const re14 = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
  closure_15 = {};
  let obj = {};
  closure_18 = { D: "date", dates: "date", date: "date", d: "day", days: "day", day: "day", e: "weekday", weekdays: "weekday", weekday: "weekday", E: "isoWeekday", isoweekdays: "isoWeekday", isoweekday: "isoWeekday", DDD: "dayOfYear", dayofyears: "dayOfYear", dayofyear: "dayOfYear", h: "hour", hours: "hour", hour: "hour", ms: "millisecond", milliseconds: "millisecond", millisecond: "millisecond", m: "minute", minutes: "minute", minute: "minute", M: "month", months: "month", month: "month", Q: "quarter", quarters: "quarter", quarter: "quarter", s: "second", seconds: "second", second: "second", gg: "weekYear", weekyears: "weekYear", weekyear: "weekYear", GG: "isoWeekYear", isoweekyears: "isoWeekYear", isoweekyear: "isoWeekYear", w: "week", weeks: "week", week: "week", W: "isoWeek", isoweeks: "isoWeek", isoweek: "isoWeek", y: "year", years: "year", year: "year" };
  closure_19 = { date: 9, day: 11, weekday: 11, isoWeekday: 11, dayOfYear: 4, hour: 13, millisecond: 16, minute: 14, month: 8, quarter: 7, second: 15, weekYear: 1, isoWeekYear: 1, week: 5, isoWeek: 5, year: 1 };
  let tmp = /\d\d?/;
  const re21 = tmp;
  const re22 = /\d+/;
  const re23 = /Z|[+-]\d\d:?\d\d/gi;
  const re24 = /Z|[+-]\d\d(?::?\d\d)?/gi;
  obj = {};
  closure_25 = {};
  c26 = 0;
  c27 = 1;
  c28 = 2;
  c29 = 3;
  c30 = 4;
  c31 = 5;
  c32 = 6;
  c33 = 7;
  c34 = 8;
  const fn3 = function() {
    const yearResult = this.year();
    if (yearResult <= 9999) {
      const _Math = Math;
      const text = `${Math.abs(tmp)}`;
      let str2 = "-";
      const diff = 4 - `${Math.abs(tmp)}`.length;
      if (yearResult >= 0) {
        str2 = "";
      }
      const _Math2 = Math;
      const _Math3 = Math;
      const str3 = Math.pow(10, Math.max(0, diff));
      let sum = str2 + Math.pow(10, Math.max(0, diff)).toString().substr(1) + text;
      const str4 = Math.pow(10, Math.max(0, diff)).toString();
    } else {
      sum = `+${tmp}`;
    }
    return sum;
  };
  closure_0 = "Y";
  closure_1 = 0;
  year = fn3;
  s = fn3;
  obj.Y = fn3;
  let items1 = ["YY", 2];
  const fn4 = function() {
    return this.year() % 100;
  };
  closure_0 = 0;
  closure_1 = items1;
  year = fn4;
  s = fn4;
  obj[items1[0]] = function() {
    const self = this;
    const apply = s.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    const text = `${Math.abs(tmp4)}`;
    let str = "-";
    const diff = dependencyMap[1] - `${Math.abs(tmp4)}`.length;
    if (applyArgumentsResult >= 0) {
      let str2 = "";
      if (dependencyMap[2]) {
        str2 = "+";
      }
      str = str2;
    }
    const str3 = Math.pow(10, Math.max(0, diff));
    const tmp = s;
    return str + Math.pow(10, Math.max(0, diff)).toString().substr(1) + text;
  };
  let items2 = ["YYYY", 4];
  closure_0 = 0;
  closure_1 = items2;
  year = "year";
  s = "year";
  if (typeof "year" === "string") {
    s = function s() {
      return this[year]();
    };
  }
  obj[items2[0]] = function() {
    const self = this;
    const apply = s.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    const text = `${Math.abs(tmp4)}`;
    let str = "-";
    const diff = dependencyMap[1] - `${Math.abs(tmp4)}`.length;
    if (applyArgumentsResult >= 0) {
      let str2 = "";
      if (dependencyMap[2]) {
        str2 = "+";
      }
      str = str2;
    }
    const str3 = Math.pow(10, Math.max(0, diff));
    const tmp = s;
    return str + Math.pow(10, Math.max(0, diff)).toString().substr(1) + text;
  };
  let items3 = ["YYYYY", 5];
  closure_0 = 0;
  closure_1 = items3;
  year = "year";
  s = "year";
  if (typeof "year" === "string") {
    s = function s() {
      return this[year]();
    };
  }
  obj[items3[0]] = function() {
    const self = this;
    const apply = s.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    const text = `${Math.abs(tmp4)}`;
    let str = "-";
    const diff = dependencyMap[1] - `${Math.abs(tmp4)}`.length;
    if (applyArgumentsResult >= 0) {
      let str2 = "";
      if (dependencyMap[2]) {
        str2 = "+";
      }
      str = str2;
    }
    const str3 = Math.pow(10, Math.max(0, diff));
    const tmp = s;
    return str + Math.pow(10, Math.max(0, diff)).toString().substr(1) + text;
  };
  let items4 = ["YYYYYY", 6, true];
  closure_0 = 0;
  closure_1 = items4;
  year = "year";
  s = "year";
  if (typeof "year" === "string") {
    s = function s() {
      return this[year]();
    };
  }
  let tmp2 = /[+-]?\d+/;
  obj[items4[0]] = function() {
    const self = this;
    const apply = s.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    const text = `${Math.abs(tmp4)}`;
    let str = "-";
    const diff = dependencyMap[1] - `${Math.abs(tmp4)}`.length;
    if (applyArgumentsResult >= 0) {
      let str2 = "";
      if (dependencyMap[2]) {
        str2 = "+";
      }
      str = str2;
    }
    const str3 = Math.pow(10, Math.max(0, diff));
    const tmp = s;
    return str + Math.pow(10, Math.max(0, diff)).toString().substr(1) + text;
  };
  closure_0 = tmp2;
  closure_1 = undefined;
  let tmp3 = typeof Function !== "undefined";
  if (typeof Function !== "undefined") {
    let _Function2 = Function;
    tmp3 = tmp2 instanceof Function;
  }
  if (tmp3) {
    let fn5 = tmp2;
    if (!tmp3) {
      fn5 = (arg0, arg1) => {
        if (!arg0) {
          let tmp = closure_0;
        } else {
          tmp = closure_1;
        }
        return tmp;
      };
    }
    obj.Y = fn5;
    closure_0 = tmp;
    closure_1 = /\d\d/;
    let _Function = Function;
    class Moment {
      constructor(arg0) {
        self = this;
        tmp = copyConfig(this, arg0);
        num = NaN;
        if (null != arg0._d) {
          _d = arg0._d;
          num = _d.getTime();
        }
        date = new Date(num);
        self._d = date;
        if (!self.isValid()) {
          _Date = Date;
          tmp3 = new.target;
          tmp4 = new.target;
          num2 = NaN;
          date1 = new Date(NaN);
          tmp6 = date1;
          self._d = date1;
        }
        if (false === c6) {
          flag = true;
          c6 = true;
          tmp7 = valueOf;
          updateOffsetResult = valueOf.updateOffset(self);
          c6 = false;
        }
        return;
      }
    }
    if (typeof Function !== "undefined") {
      const _Function3 = Function;
    }
    if (tmp7) {
      let fn6 = tmp;
      if (!tmp7) {
        fn6 = (arg0, arg1) => {
          if (!arg0) {
            let tmp = closure_0;
          } else {
            tmp = closure_1;
          }
          return tmp;
        };
      }
      let tmp11 = /\d{1,4}/;
      obj.YY = fn6;
      closure_0 = tmp11;
      closure_1 = /\d{4}/;
      class Moment {
        constructor(arg0) {
          self = this;
          tmp = copyConfig(this, arg0);
          num = NaN;
          if (null != arg0._d) {
            _d = arg0._d;
            num = _d.getTime();
          }
          date = new Date(num);
          self._d = date;
          if (!self.isValid()) {
            _Date = Date;
            tmp3 = new.target;
            tmp4 = new.target;
            num2 = NaN;
            date1 = new Date(NaN);
            tmp6 = date1;
            self._d = date1;
          }
          if (false === c6) {
            flag = true;
            c6 = true;
            tmp7 = valueOf;
            updateOffsetResult = valueOf.updateOffset(self);
            c6 = false;
          }
          return;
        }
      }
      if (typeof Function !== "undefined") {
        const _Function4 = Function;
      }
      class Locale {
        constructor(arg0) {
          if (null != arg0) {
            self = this;
            result = this.set(arg0);
          }
          return;
        }
      }
      let tmp10 = /\d{4}/;
    } else {
      let _Object3 = Object;
      let str2 = Object.prototype.toString;
      let call2 = str2.call;
      str2 = "[object Function]";
      let tmp8 = typeof call2 === "unknown" ? str2() : call2(tmp);
    }
    let tmp6 = /\d\d/;
  } else {
    let _Object2 = Object;
    let str = Object.prototype.toString;
    let call = str.call;
    str = "[object Function]";
    let tmp4 = typeof call === "unknown" ? str() : call(tmp2);
  }
};
if (typeof exports === "object") {
  if (undefined !== module) {
    module.exports = fn();
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(fn);
  }
}
this.moment = fn();