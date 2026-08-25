// === Module 13347: Range ===

// Module 13347 (Range)
import _createClass from "_createClass" /* 42 */;
import LRUCache from "LRUCache" /* 13348 */;
import closure_2 from "_classCallCheck" /* 41 */;

const Range = require;
const re3 = /\s+/g;
class Range {
  constructor(arg0, arg1) {
    self = this;
    self = this;
    tmp = self;
    tmp2 = closure_2(this, self);
    tmp3 = Range;
    tmp4 = closure_1;
    tmp5 = require("module_13319")(require);
    if (global instanceof self) {
      if (global.loose !== tmp5.loose) {
        tmpResult = tmp(global.raw, tmp5);
      } else {
        tmpResult = global;
      }
      return tmpResult;
    } else if (global instanceof require("Comparator")) {
      self.raw = global.value;
      items = [];
      items[0] = global;
      items1 = [];
      items1[0] = items;
      self.set = items1;
      self.formatted = undefined;
      return self;
    } else {
      self.options = tmp5;
      self.loose = tmp5.loose;
      self.includePrerelease = tmp5.includePrerelease;
      str = global.trim();
      tmp6 = re3;
      str2 = " ";
      self.raw = str.replace(re3, " ");
      str3 = self.raw;
      str4 = "||";
      parts = str3.split("||");
      mapped = parts.map((str) => self.parseRange(str.trim()));
      self.set = mapped.filter((arg0) => arg0.length);
      if (self.set.length) {
        num = 1;
        if (self.set.length > 1) {
          set = self.set;
          self.set = set.filter((arg0) => {
            if (typeof closure_5 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            return "<0.0.0-0" !== arg0[0].value;
          });
          num2 = 0;
          if (0 === self.set.length) {
            items2 = [];
            items2[0] = self.set[0];
            self.set = items2;
          } else if (self.set.length > 1) {
            set = self.set;
            tmp12 = set;
            tmp13 = set;
            for (const item10061 of set) {
              tmp14 = item10061;
              if (1 !== item10061.length) {
              } else {
                tmp15 = isAny;
                tmp16 = item10061;
                if (require("_classCallCheck")) {
                  tmp17 = item10061;
                  items3 = [];
                  items3[0] = tmp14;
                  self.set = items3;
                  tmp18 = obj;
                  obj.return();
                  break;
                }
                break;
              }
              continue;
            }
          }
        }
        self.formatted = undefined;
        return;
      } else {
        tmp7 = globalThis;
        _TypeError = TypeError;
        _HermesInternal = HermesInternal;
        str5 = "Invalid SemVer Range: ";
        tmp8 = new.target;
        tmp9 = new.target;
        typeError = new TypeError("Invalid SemVer Range: " + self.raw);
        tmp11 = typeError;
        throw typeError;
      }
    }
  }
}
let items = [
  {
    key: "range",
    get() {
      const self = this;
      if (undefined === this.formatted) {
        self.formatted = "";
        for (let num2 = 0; num2 < self.set.length; num2 = num2 + 1) {
          let tmp = num2;
          if (0 < num2) {
            self.formatted = `${self.formatted}||`;
          }
          let arr = self.set[num2];
          for (let num = 0; num < arr.length; num = num + 1) {
            let tmp2 = num;
            if (0 < num) {
              self.formatted = `${self.formatted} `;
            }
            let str = arr[num];
            let str2 = str.toString();
            self.formatted = self.formatted + str2.trim();
          }
        }
      }
      return self.formatted;
    }
  },
  {
    key: "format",
    value: function format() {
      return this.range;
    }
  },
  {
    key: "toString",
    value: function toString() {
      return this.range;
    }
  },
  {
    key: "parseRange",
    value: function parseRange(str) {
      let self = this;
      self = this;
      let FLAG_INCLUDE_PRERELEASE = this.options.includePrerelease;
      if (FLAG_INCLUDE_PRERELEASE) {
        FLAG_INCLUDE_PRERELEASE = self(13320).FLAG_INCLUDE_PRERELEASE;
      }
      let FLAG_LOOSE = self.options.loose;
      if (FLAG_LOOSE) {
        FLAG_LOOSE = self(13320).FLAG_LOOSE;
      }
      const text = `${FLAG_INCLUDE_PRERELEASE | FLAG_LOOSE}:${str}`;
      const value = store.get(text);
      if (value) {
        return value;
      } else {
        const loose = self.options.loose;
        let safeRe = self(13322).safeRe;
        let t = self(13322).t;
        if (loose) {
          let tmp9 = safeRe[t.HYPHENRANGELOOSE];
          let tmp11 = tmp7;
        } else {
          tmp9 = safeRe[t.HYPHENRANGE];
          tmp11 = tmp7;
        }
        str = str.replace(tmp9, hyphenReplace(self.options.includePrerelease));
        tmp11(13321)("hyphen replace", str);
        let str3 = str.replace(tmp11(13322).safeRe[tmp11(undefined, 13322).t.COMPARATORTRIM], tmp11(13322).comparatorTrimReplace);
        tmp11(13321)("comparator trim", str3);
        let str5 = str3.replace(tmp11(13322).safeRe[tmp11(undefined, 13322).t.TILDETRIM], tmp11(13322).tildeTrimReplace);
        tmp11(13321)("tilde trim", str5);
        const str7 = str5.replace(tmp11(13322).safeRe[tmp11(undefined, 13322).t.CARETTRIM], tmp11(13322).caretTrimReplace);
        tmp11(13321)("caret trim", str7);
        let parts = str7.split(" ");
        let mapped = parts.map((str) => {
          options = options.options;
          if (typeof closure_1_8 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          self(closure_1_1[6])("comp", str, options);
          if (typeof closure_1_12 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const parts = str.trim().split(/\s+/);
          const mapped = parts.map((str) => {
            if (typeof closure_1_13 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            closure_0 = str;
            options(closure_1_1[6])("caret", str, closure_0);
            const safeRe = options(closure_1_1[5]).safeRe;
            const t = options(closure_1_1[5]).t;
            if (closure_0.loose) {
              let tmp3 = safeRe[t.CARETLOOSE];
            } else {
              tmp3 = safeRe[t.CARET];
            }
            str = "";
            if (closure_0.includePrerelease) {
              str = "-0";
            }
            return str.replace(tmp3, (arg0, str, str2, str3) => {
              str(str[6])("caret", str, arg0, str, str2, str3, arg4);
              if (typeof closure_1_9 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              let tmp5 = !str;
              if (str) {
                tmp5 = "x" === str.toLowerCase();
              }
              if (!tmp5) {
                tmp5 = "*" === str;
              }
              str3 = "";
              if (!tmp5) {
                if (typeof tmp4 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                let tmp6 = !str2;
                if (str2) {
                  tmp6 = "x" === str2.toLowerCase();
                }
                if (!tmp6) {
                  tmp6 = "*" === str2;
                }
                if (tmp6) {
                  const _HermesInternal9 = HermesInternal;
                  str3 = ">=" + str + ".0.0" + str + " <" + +str + 1 + ".0.0-0";
                } else {
                  if (typeof tmp4 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  let tmp7 = !str3;
                  if (str3) {
                    tmp7 = "x" === str3.toLowerCase();
                  }
                  if (!tmp7) {
                    tmp7 = "*" === str3;
                  }
                  if (tmp7) {
                    if ("0" === str) {
                      const _HermesInternal8 = HermesInternal;
                      let combined = ">=" + str + "." + str2 + ".0" + str + " <" + str + "." + +str2 + 1 + ".0-0";
                    } else {
                      const _HermesInternal7 = HermesInternal;
                      combined = ">=" + str + "." + str2 + ".0" + str + " <" + +str + 1 + ".0.0-0";
                    }
                    str3 = combined;
                  } else {
                    const tmpResult = tmp(tmp2[6]);
                    if (arg4) {
                      tmpResult("replaceCaret pr", arg4);
                      if ("0" === str) {
                        if ("0" === str2) {
                          const _HermesInternal6 = HermesInternal;
                          let combined1 = ">=" + str + "." + str2 + "." + str3 + "-" + arg4 + " <" + str + "." + str2 + "." + +str3 + 1 + "-0";
                        } else {
                          const _HermesInternal5 = HermesInternal;
                          combined1 = ">=" + str + "." + str2 + "." + str3 + "-" + arg4 + " <" + str + "." + +str2 + 1 + ".0-0";
                        }
                      } else {
                        const _HermesInternal4 = HermesInternal;
                        str3 = ">=" + str + "." + str2 + "." + str3 + "-" + arg4 + " <" + +str + 1 + ".0.0-0";
                      }
                    } else {
                      tmpResult("no pr");
                      if ("0" === str) {
                        if ("0" === str2) {
                          const _HermesInternal3 = HermesInternal;
                          let combined2 = ">=" + str + "." + str2 + "." + str3 + str + " <" + str + "." + str2 + "." + +str3 + 1 + "-0";
                        } else {
                          const _HermesInternal2 = HermesInternal;
                          combined2 = ">=" + str + "." + str2 + "." + str3 + str + " <" + str + "." + +str2 + 1 + ".0-0";
                        }
                      } else {
                        const _HermesInternal = HermesInternal;
                        str3 = ">=" + str + "." + str2 + "." + str3 + " <" + +str + 1 + ".0.0-0";
                      }
                    }
                  }
                }
              }
              str(str[6])("caret return", str3);
              return str3;
            });
          });
          const str2 = mapped.join(" ");
          self(closure_1_1[6])("caret", str2);
          if (typeof closure_1_10 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          str = str.trim();
          const parts1 = str2.trim().split(/\s+/);
          const mapped1 = parts1.map((str) => {
            if (typeof closure_1_11 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            closure_0 = str;
            const safeRe = options(closure_1_1[5]).safeRe;
            const t = options(closure_1_1[5]).t;
            if (closure_0.loose) {
              let tmp2 = safeRe[t.TILDELOOSE];
            } else {
              tmp2 = safeRe[t.TILDE];
            }
            return str.replace(tmp2, (arg0, str, str2, str3) => {
              str(closure_1_1[6])("tilde", str, arg0, str, str2, str3, arg4);
              if (typeof closure_1_9 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              let tmp5 = !str;
              if (str) {
                tmp5 = "x" === str.toLowerCase();
              }
              if (!tmp5) {
                tmp5 = "*" === str;
              }
              str3 = "";
              if (!tmp5) {
                if (typeof tmp4 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                let tmp6 = !str2;
                if (str2) {
                  tmp6 = "x" === str2.toLowerCase();
                }
                if (!tmp6) {
                  tmp6 = "*" === str2;
                }
                if (tmp6) {
                  const _HermesInternal4 = HermesInternal;
                  str3 = ">=" + str + ".0.0 <" + +str + 1 + ".0.0-0";
                } else {
                  if (typeof tmp4 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  let tmp7 = !str3;
                  if (str3) {
                    tmp7 = "x" === str3.toLowerCase();
                  }
                  if (!tmp7) {
                    tmp7 = "*" === str3;
                  }
                  if (tmp7) {
                    const _HermesInternal3 = HermesInternal;
                    str3 = ">=" + str + "." + str2 + ".0 <" + str + "." + +str2 + 1 + ".0-0";
                  } else if (arg4) {
                    tmp(tmp2[6])("replaceTilde pr", arg4);
                    const _HermesInternal2 = HermesInternal;
                    str3 = ">=" + str + "." + str2 + "." + str3 + "-" + arg4 + " <" + str + "." + +str2 + 1 + ".0-0";
                  } else {
                    const _HermesInternal = HermesInternal;
                    str3 = ">=" + str + "." + str2 + "." + str3 + " <" + str + "." + +str2 + 1 + ".0-0";
                  }
                }
              }
              str(closure_1_1[6])("tilde return", str3);
              return str3;
            });
          });
          const str4 = mapped1.join(" ");
          self(closure_1_1[6])("tildes", str4);
          if (typeof closure_1_14 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          self(closure_1_1[6])("replaceXRanges", str4, options);
          const parts2 = str4.split(/\s+/);
          const mapped2 = parts2.map((str) => {
            if (typeof closure_1_15 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            closure_1 = tmp;
            str = str.trim();
            const safeRe = options(closure_1_1[5]).safeRe;
            const t = options(closure_1_1[5]).t;
            if (str.loose) {
              let tmp2 = safeRe[t.XRANGELOOSE];
            } else {
              tmp2 = safeRe[t.XRANGE];
            }
            return str.replace(tmp2, (arg0, arg1, str, str2, str3) => {
              let combined = arg0;
              str = arg1;
              str(includePrerelease[6])("xRange", str, arg0, arg1, str, str2, str3, arg5);
              if (typeof closure_1_9 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              let tmp6 = !str;
              if (str) {
                tmp6 = "x" === str.toLowerCase();
              }
              if (!tmp6) {
                tmp6 = "*" === str;
              }
              let tmp7 = tmp6;
              if (!tmp6) {
                if (typeof tmp5 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                let tmp8 = !str2;
                if (str2) {
                  tmp8 = "x" === str2.toLowerCase();
                }
                if (!tmp8) {
                  tmp8 = "*" === str2;
                }
                tmp7 = tmp8;
              }
              let tmp9 = tmp7;
              if (!tmp7) {
                if (typeof tmp5 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                let tmp10 = !str3;
                if (str3) {
                  tmp10 = "x" === str3.toLowerCase();
                }
                if (!tmp10) {
                  tmp10 = "*" === str3;
                }
                tmp9 = tmp10;
              }
              if (tmp11) {
                str = "";
              }
              let str8 = "";
              if (includePrerelease.includePrerelease) {
                str8 = "-0";
              }
              if (tmp6) {
                if (">" === str) {
                  let str29 = "<0.0.0-0";
                } else {
                  str29 = "*";
                }
                combined = str29;
              } else {
                if (str) {
                  if (tmp9) {
                    let num3 = str2;
                    if (tmp7) {
                      num3 = 0;
                    }
                    if (">" === str) {
                      if (tmp7) {
                        let sum = +str + 1;
                        let num4 = 0;
                        let str22 = ">=";
                      } else {
                        num4 = +num3 + 1;
                        str22 = ">=";
                        sum = str;
                      }
                    } else {
                      num4 = num3;
                      sum = str;
                      str22 = str;
                      if ("<=" === str) {
                        if (tmp7) {
                          let sum1 = +str + 1;
                          let sum2 = num3;
                        } else {
                          sum2 = +num3 + 1;
                          sum1 = str;
                        }
                        str22 = "<";
                        num4 = sum2;
                        sum = sum1;
                      }
                    }
                    if ("<" === str22) {
                      str8 = "-0";
                    }
                    const _HermesInternal3 = HermesInternal;
                    combined = "" + str22 + sum + "." + num4 + "." + 0 + str8;
                  }
                }
                if (tmp7) {
                  const _HermesInternal2 = HermesInternal;
                  combined = ">=" + str + ".0.0" + str8 + " <" + +str + 1 + ".0.0-0";
                } else if (tmp9) {
                  const _HermesInternal = HermesInternal;
                  combined = ">=" + str + "." + str2 + ".0" + str8 + " <" + str + "." + +str2 + 1 + ".0-0";
                }
              }
              str(includePrerelease[6])("xRange return", combined);
              return combined;
            });
          });
          const str5 = mapped2.join(" ");
          self(closure_1_1[6])("xrange", str5);
          if (typeof closure_1_16 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          self(closure_1_1[6])("replaceStars", str5, options);
          let str3 = str2.trim();
          const replaced = str5.trim().replace(tmp(tmp2[5]).safeRe[tmp(undefined, tmp2[5]).t.STAR], "");
          self(closure_1_1[6])("stars", replaced);
          return replaced;
        });
        let parts1 = mapped.join(" ").split(/\s+/);
        let mapped1 = parts1.map((str) => {
          const options = self.options;
          if (typeof closure_1_17 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          self(closure_1_1[6])("replaceGTE0", str, options);
          const t = self(closure_1_1[5]).t;
          return str.trim().replace(self(closure_1_1[5]).safeRe[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
        });
        let found = mapped1;
        if (loose) {
          found = mapped1.filter((str) => {
            self(closure_1_1[6])("loose invalid filter", str, self.options);
            return str.match(self(closure_1_1[5]).safeRe[self(undefined, closure_1_1[5]).t.COMPARATORLOOSE]);
          });
        }
        tmp11(13321)("range list", found);
        const _Map = Map;
        const map = new Map();
        let mapped2 = found.map((arg0) => new self(closure_1_1[3])(arg0, self.options));
        for (const item10132 of mapped2) {
          let iter = item10132;
          let tmp25 = isNullSet;
          if (isNullSet(item10132)) {
            let tmp28 = item10132;
            let items = [iter];
            let tmp29 = obj3;
            obj3.return();
            return items;
          } else {
            let tmp26 = item10132;
            let result = map.set(iter.value, iter);
            continue;
          }
        }
        let hasItem = map.size > 1;
        if (hasItem) {
          hasItem = map.has("");
        }
        if (hasItem) {
          map.delete("");
        }
        const items1 = [];
        HermesBuiltin.arraySpread(map.values(), 0);
        const result1 = store.set(text, items1);
        return items1;
      }
    }
  },
  {
    key: "intersects",
    value: function intersects(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      if (arg0 instanceof closure_0) {
        const self = this;
        return this.set.some((arr) => {
          let set = arr;
          if (typeof closure_1_7 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          set = closure_1;
          let substr = arr.slice();
          closure_1 = substr.pop();
          let flag = true;
          if (substr.length) {
            let everyResult = substr.every((arg0) => closure_1.intersects(arg0, closure_0));
            closure_1 = substr.pop();
            flag = everyResult;
            while (everyResult) {
              flag = everyResult;
              if (!substr.length) {
                break;
              }
            }
          }
          if (flag) {
            set = set.set;
            flag = set.some((arr) => {
              closure_0 = arr;
              if (typeof closure_2_7 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              closure_0 = closure_1;
              const substr = arr.slice();
              closure_1 = substr.pop();
              let flag = true;
              if (substr.length) {
                const everyResult = substr.every((arg0) => closure_1.intersects(arg0, closure_0));
                closure_1 = substr.pop();
                flag = everyResult;
                while (everyResult) {
                  flag = everyResult;
                  if (!substr.length) {
                    break;
                  }
                }
              }
              if (flag) {
                flag = closure_0.every((arg0) => {
                  closure_0 = arg0;
                  return closure_0.every((arg0) => closure_0.intersects(arg0, closure_1_1));
                });
              }
              return flag;
            });
          }
          return flag;
        });
      } else {
        const _TypeError = TypeError;
        const typeError = new TypeError("a Range is required");
        throw typeError;
      }
    }
  },
  {
    key: "test",
    value: function test(prerelease) {
      let tmp = prerelease;
      if (prerelease) {
        const self = this;
        if (typeof tmp === "string") {
          try {
            tmp = new Range(13318)(tmp, self.options);
          } catch (err) {
            return false;
          }
        }
        let num = 0;
        if (0 < self.set.length) {
          while (!testSet(self.set[num], tmp, self.options)) {
            num = num + 1;
          }
          return true;
        }
        return false;
      } else {
        return false;
      }
    }
  }
];
let closure_4 = new LRUCache();
function isNullSet(item10132) {
  return "<0.0.0-0" === item10132.value;
}
function isAny(value) {
  return "" === value.value;
}
function isSatisfiable(arg0, arg1) {

}
function parseComparator(arg0, arg1) {

}
function isX(arg0) {

}
function replaceTildes(arg0, arg1) {

}
function replaceTilde(arg0, arg1) {

}
function replaceCarets(arg0, arg1) {

}
function replaceCaret(arg0, arg1) {

}
function replaceXRanges(arg0, arg1) {

}
function replaceXRange(arg0, arg1) {

}
function replaceStars(arg0, arg1) {

}
function replaceGTE0(arg0, arg1) {

}
function hyphenReplace(includePrerelease) {
  closure_0 = includePrerelease;
  return (arg0, arg1, str, str2, str3, arg5, arg6, arg7, arg8, str4, str5) => {
    if (typeof closure_1_9 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let tmp2 = !str;
    if (str) {
      tmp2 = "x" === str.toLowerCase();
    }
    if (!tmp2) {
      tmp2 = "*" === str;
    }
    if (tmp2) {
      if (typeof tmp !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let str17 = arg8;
      let tmp21 = !arg8;
      if (arg8) {
        tmp21 = "x" === str17.toLowerCase();
      }
      if (!tmp21) {
        tmp21 = "*" === str17;
      }
      if (tmp21) {
        const _HermesInternal10 = HermesInternal;
        return "" + "" + " " + "".trim();
      } else {
        if (typeof tmp !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let tmp23 = !str4;
        if (str4) {
          tmp23 = "x" === str4.toLowerCase();
        }
        if (!tmp23) {
          tmp23 = "*" === str4;
        }
        if (tmp23) {
          const _HermesInternal9 = HermesInternal;
          str17 = "<";
          let combined = "<" + +str17 + 1 + ".0.0-0";
          const tmp38 = +str17;
        } else {
          if (typeof tmp !== "function") {
            HermesBuiltin.throwTypeError();
          }
          let tmp25 = !str5;
          if (str5) {
            tmp25 = "x" === str5.toLowerCase();
          }
          if (!tmp25) {
            tmp25 = "*" === str5;
          }
          if (tmp25) {
            const _HermesInternal8 = HermesInternal;
            combined = "<" + str17 + "." + +str4 + 1 + ".0-0";
          } else if (arg11) {
            const _HermesInternal7 = HermesInternal;
            combined = "<=" + str17 + "." + str4 + "." + str5 + "-" + arg11;
          } else if (closure_0) {
            const _HermesInternal6 = HermesInternal;
            combined = "<" + str17 + "." + str4 + "." + +str5 + 1 + "-0";
          } else {
            const _HermesInternal5 = HermesInternal;
            combined = "<=" + arg7;
          }
        }
      }
    } else {
      if (typeof tmp !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let tmp4 = !str2;
      if (str2) {
        tmp4 = "x" === str2.toLowerCase();
      }
      if (!tmp4) {
        tmp4 = "*" === str2;
      }
      if (tmp4) {
        let str14 = "";
        if (closure_0) {
          str14 = "-0";
        }
        const _HermesInternal4 = HermesInternal;
        let combined1 = ">=" + str + ".0.0" + str14;
      } else {
        if (typeof tmp !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let tmp6 = !str3;
        if (str3) {
          tmp6 = "x" === str3.toLowerCase();
        }
        if (!tmp6) {
          tmp6 = "*" === str3;
        }
        if (tmp6) {
          let str10 = "";
          if (closure_0) {
            str10 = "-0";
          }
          const _HermesInternal3 = HermesInternal;
          combined1 = ">=" + str + "." + str2 + ".0" + str10;
        } else if (arg5) {
          const _HermesInternal2 = HermesInternal;
          combined1 = ">=" + arg1;
        } else {
          let str7 = "";
          if (closure_0) {
            str7 = "-0";
          }
          const _HermesInternal = HermesInternal;
          combined1 = ">=" + arg1 + str7;
        }
      }
    }
  };
}
function testSet(arg0, prerelease, options) {
  let num = 0;
  if (0 < arg0.length) {
    while (obj.test(prerelease)) {
      num = num + 1;
    }
    return false;
  }
  if (prerelease.prerelease.length) {
    if (!options.includePrerelease) {
      let num2 = 0;
      if (0 < arg0.length) {
        while (true) {
          let tmp3 = Range;
          let tmp4 = dependencyMap;
          let tmp5 = Range(13321)(arg0[num2].semver);
          let tmp6 = num2;
          if (arg0[num2].semver !== Range(13346).ANY) {
            if (arg0[num2].semver.prerelease.length > 0) {
              let semver = arg0[num2].semver;
              if (semver.major === prerelease.major) {
                if (semver.minor === prerelease.minor) {
                  if (semver.patch === prerelease.patch) {
                    break;
                  }
                }
              }
            }
          }
          num2 = num2 + 1;
        }
        return true;
      }
      return false;
    }
  }
  return true;
}

export default _createClass(Range, items);