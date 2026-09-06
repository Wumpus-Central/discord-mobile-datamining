// === Module 14045: ? ===

// Module 14045
import _createClass from "_createClass" /* 42 */;
import LRUCache from "LRUCache" /* 14046 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const Range = require;
const re3 = /\s+/g;
class Range {
  constructor(arg0, arg1) {
    self = this;
    self = this;
    tmp = Range;
    tmp2 = c2(this, Range);
    tmp3 = closure_0;
    tmp4 = closure_1;
    tmp5 = closure_0(closure_1[2])(require);
    if (global instanceof Range) {
      if (global.loose !== tmp5.loose) {
        tmpResult = tmp(global.raw, tmp5);
      } else {
        tmpResult = global;
      }
      return tmpResult;
    } else if (global instanceof tmp3(tmp4[3])) {
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
      tmp6 = closure_3;
      str2 = " ";
      self.raw = str.replace(closure_3, " ");
      str3 = self.raw;
      str4 = "||";
      parts = str3.split("||");
      mapped = parts.map((item) => self.parseRange(item.trim()));
      self.set = mapped.filter((item) => item.length);
      if (self.set.length) {
        num = 1;
        if (self.set.length > 1) {
          set = self.set;
          self.set = set.filter((item) => {
            if (typeof isNullSet === "function") {
              return "<0.0.0-0" !== item[0].value;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
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
                tmp15 = metroRequire;
                tmp16 = item10061;
                if (metroRequire(tmp14[0])) {
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
          if (0 < num2) {
            self.formatted = `${self.formatted}||`;
          }
          let arr = self.set[num2];
          for (let num = 0; num < arr.length; num = num + 1) {
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
      const self = this;
      let FLAG_INCLUDE_PRERELEASE = this.options.includePrerelease;
      if (FLAG_INCLUDE_PRERELEASE) {
        FLAG_INCLUDE_PRERELEASE = self(14018).FLAG_INCLUDE_PRERELEASE;
      }
      let FLAG_LOOSE = self.options.loose;
      if (FLAG_LOOSE) {
        FLAG_LOOSE = self(14018).FLAG_LOOSE;
      }
      const text = `${FLAG_INCLUDE_PRERELEASE | FLAG_LOOSE}:${str}`;
      value = closure_4.get(text);
      if (value) {
        return value;
      } else {
        const loose = self.options.loose;
        let safeRe = self(14020).safeRe;
        let t = self(14020).t;
        if (loose) {
          let tmp9 = safeRe[t.HYPHENRANGELOOSE];
          let tmp11 = tmp7;
        } else {
          tmp9 = safeRe[t.HYPHENRANGE];
          tmp11 = tmp7;
        }
        str = str.replace(tmp9, hyphenReplace(self.options.includePrerelease));
        tmp11(14019)("hyphen replace", str);
        let str3 = str.replace(tmp11(14020).safeRe[tmp11(undefined, 14020).t.COMPARATORTRIM], tmp11(14020).comparatorTrimReplace);
        tmp11(14019)("comparator trim", str3);
        const str5 = str3.replace(tmp11(14020).safeRe[tmp11(undefined, 14020).t.TILDETRIM], tmp11(14020).tildeTrimReplace);
        tmp11(14019)("tilde trim", str5);
        let str7 = str5.replace(tmp11(14020).safeRe[tmp11(undefined, 14020).t.CARETTRIM], tmp11(14020).caretTrimReplace);
        tmp11(14019)("caret trim", str7);
        let parts = str7.split(" ");
        let mapped = parts.map((item) => {
          const options = self.options;
          if (typeof parseComparator === "function") {
            Range(14019)("comp", item, options);
            if (typeof replaceCarets === "function") {
              const parts = item.trim().split(/\s+/);
              const mapped = parts.map((item) => {
                if (typeof replaceCaret === "function") {
                  closure_0 = item;
                  self(14019)("caret", item, tmp);
                  const safeRe = self(14020).safeRe;
                  const t = self(14020).t;
                  if (tmp.loose) {
                    let tmp6 = safeRe[t.CARETLOOSE];
                  } else {
                    tmp6 = safeRe[t.CARET];
                  }
                  let str2 = "";
                  if (tmp.includePrerelease) {
                    str2 = "-0";
                  }
                  return item.replace(tmp6, (arg0, str, str2, str3, arg4) => {
                    options(14019)("caret", closure_0, arg0, str, str2, str3, arg4);
                    if (typeof closure_2_9 === "function") {
                      let tmp5 = !str;
                      if (str) {
                        tmp5 = "x" === str.toLowerCase();
                      }
                      if (!tmp5) {
                        tmp5 = "*" === str;
                      }
                      str3 = "";
                      if (!tmp5) {
                        if (typeof tmp4 === "function") {
                          let tmp6 = !str2;
                          if (str2) {
                            tmp6 = "x" === str2.toLowerCase();
                          }
                          if (!tmp6) {
                            tmp6 = "*" === str2;
                          }
                          if (tmp6) {
                            const _HermesInternal9 = HermesInternal;
                            str3 = ">=" + str + ".0.0" + str2 + " <" + +str + 1 + ".0.0-0";
                          } else if (typeof tmp4 === "function") {
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
                                let combined = ">=" + str + "." + str2 + ".0" + str2 + " <" + str + "." + +str2 + 1 + ".0-0";
                              } else {
                                const _HermesInternal7 = HermesInternal;
                                combined = ">=" + str + "." + str2 + ".0" + str2 + " <" + +str + 1 + ".0.0-0";
                              }
                              str3 = combined;
                            } else {
                              const tmpResult = tmp(14019);
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
                                    let combined2 = ">=" + str + "." + str2 + "." + str3 + str2 + " <" + str + "." + str2 + "." + +str3 + 1 + "-0";
                                  } else {
                                    const _HermesInternal2 = HermesInternal;
                                    combined2 = ">=" + str + "." + str2 + "." + str3 + str2 + " <" + str + "." + +str2 + 1 + ".0-0";
                                  }
                                } else {
                                  const _HermesInternal = HermesInternal;
                                  str3 = ">=" + str + "." + str2 + "." + str3 + " <" + +str + 1 + ".0.0-0";
                                }
                              }
                            }
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      }
                      tmp(14019)("caret return", str3);
                      return str3;
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  });
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              });
              const str4 = mapped.join(" ");
              tmp2(14019)("caret", str4);
              if (typeof replaceTildes === "function") {
                const parts1 = str4.trim().split(/\s+/);
                const mapped1 = parts1.map((item) => {
                  if (typeof replaceTilde === "function") {
                    closure_0 = item;
                    const safeRe = self(14020).safeRe;
                    const t = self(14020).t;
                    if (tmp.loose) {
                      let tmp5 = safeRe[t.TILDELOOSE];
                    } else {
                      tmp5 = safeRe[t.TILDE];
                    }
                    return item.replace(tmp5, (arg0, str, str2, str3, arg4) => {
                      options(14019)("tilde", closure_0, arg0, str, str2, str3, arg4);
                      if (typeof closure_2_9 === "function") {
                        let tmp5 = !str;
                        if (str) {
                          tmp5 = "x" === str.toLowerCase();
                        }
                        if (!tmp5) {
                          tmp5 = "*" === str;
                        }
                        str3 = "";
                        if (!tmp5) {
                          if (typeof tmp4 === "function") {
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
                            } else if (typeof tmp4 === "function") {
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
                                tmp(14019)("replaceTilde pr", arg4);
                                const _HermesInternal2 = HermesInternal;
                                str3 = ">=" + str + "." + str2 + "." + str3 + "-" + arg4 + " <" + str + "." + +str2 + 1 + ".0-0";
                              } else {
                                const _HermesInternal = HermesInternal;
                                str3 = ">=" + str + "." + str2 + "." + str3 + " <" + str + "." + +str2 + 1 + ".0-0";
                              }
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        }
                        tmp(14019)("tilde return", str3);
                        return str3;
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    });
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                });
                const str7 = mapped1.join(" ");
                tmp2(14019)("tildes", str7);
                if (typeof replaceXRanges === "function") {
                  tmp2(14019)("replaceXRanges", str7, options);
                  const parts2 = str7.split(/\s+/);
                  const mapped2 = parts2.map((item) => {
                    if (typeof replaceXRange === "function") {
                      const includePrerelease = tmp;
                      let str = item.trim();
                      const safeRe = self(14020).safeRe;
                      const t = self(14020).t;
                      if (tmp.loose) {
                        let tmp5 = safeRe[t.XRANGELOOSE];
                      } else {
                        tmp5 = safeRe[t.XRANGE];
                      }
                      return str.replace(tmp5, (arg0, arg1, str, str2, str3, arg5) => {
                        let combined = arg0;
                        str = arg1;
                        options(14019)("xRange", str, arg0, arg1, str, str2, str3, arg5);
                        if (typeof closure_2_9 === "function") {
                          let tmp6 = !str;
                          if (str) {
                            tmp6 = "x" === str.toLowerCase();
                          }
                          if (!tmp6) {
                            tmp6 = "*" === str;
                          }
                          let tmp7 = tmp6;
                          if (!tmp6) {
                            if (typeof tmp5 === "function") {
                              let tmp8 = !str2;
                              if (str2) {
                                tmp8 = "x" === str2.toLowerCase();
                              }
                              if (!tmp8) {
                                tmp8 = "*" === str2;
                              }
                              tmp7 = tmp8;
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                          let tmp9 = tmp7;
                          if (!tmp7) {
                            if (typeof tmp5 === "function") {
                              let tmp10 = !str3;
                              if (str3) {
                                tmp10 = "x" === str3.toLowerCase();
                              }
                              if (!tmp10) {
                                tmp10 = "*" === str3;
                              }
                              tmp9 = tmp10;
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                          if (tmp11) {
                            str = "";
                          }
                          let str10 = "";
                          if (includePrerelease.includePrerelease) {
                            str10 = "-0";
                          }
                          if (tmp6) {
                            if (">" === str) {
                              let str31 = "<0.0.0-0";
                            } else {
                              str31 = "*";
                            }
                            combined = str31;
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
                                    let str24 = ">=";
                                  } else {
                                    num4 = +num3 + 1;
                                    str24 = ">=";
                                    sum = str;
                                  }
                                } else {
                                  num4 = num3;
                                  sum = str;
                                  str24 = str;
                                  if ("<=" === str) {
                                    if (tmp7) {
                                      let sum1 = +str + 1;
                                      let sum2 = num3;
                                    } else {
                                      sum2 = +num3 + 1;
                                      sum1 = str;
                                    }
                                    str24 = "<";
                                    num4 = sum2;
                                    sum = sum1;
                                  }
                                }
                                if ("<" === str24) {
                                  str10 = "-0";
                                }
                                const _HermesInternal3 = HermesInternal;
                                combined = "" + str24 + sum + "." + num4 + "." + 0 + str10;
                              }
                            }
                            if (tmp7) {
                              const _HermesInternal2 = HermesInternal;
                              combined = ">=" + str + ".0.0" + str10 + " <" + +str + 1 + ".0.0-0";
                            } else if (tmp9) {
                              const _HermesInternal = HermesInternal;
                              combined = ">=" + str + "." + str2 + ".0" + str10 + " <" + str + "." + +str2 + 1 + ".0-0";
                            }
                          }
                          tmp2(14019)("xRange return", combined);
                          return combined;
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                        tmp2 = options;
                      });
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  });
                  let str10 = mapped2.join(" ");
                  tmp2(14019)("xrange", str10);
                  if (typeof replaceStars === "function") {
                    tmp2(14019)("replaceStars", str10, options);
                    const replaced = str10.trim().replace(tmp2(14020).safeRe[tmp2(undefined, 14020).t.STAR], "");
                    tmp2(14019)("stars", replaced);
                    return replaced;
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
                const str6 = str4.trim();
              } else {
                throw new TypeError("Trying to call a non-function");
              }
              let str2 = item.trim();
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        });
        let parts1 = mapped.join(" ").split(/\s+/);
        let mapped1 = parts1.map((item) => {
          const options = self.options;
          if (typeof replaceGTE0 === "function") {
            Range(14019)("replaceGTE0", item, options);
            const t = Range(14020).t;
            return item.trim().replace(Range(14020).safeRe[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        });
        let found = mapped1;
        if (loose) {
          found = mapped1.filter((item) => {
            Range(14019)("loose invalid filter", item, self.options);
            return item.match(Range(14020).safeRe[Range(undefined, 14020).t.COMPARATORLOOSE]);
          });
        }
        tmp11(14019)("range list", found);
        const _Map = Map;
        const map = new Map();
        let mapped2 = found.map((item) => new Range(14044)(item, self.options));
        for (const item10132 of mapped2) {
          let iter = item10132;
          if (isNullSet(item10132)) {
            let items = [iter];
            obj3.return();
            return items;
          } else {
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
        const result1 = closure_4.set(text, items1);
        return items1;
      }
    }
  },
  {
    key: "intersects",
    value: function intersects(arg0, arg1) {
      let set = arg0;
      closure_1 = arg1;
      if (arg0 instanceof Range) {
        const self = this;
        set = this.set;
        return set.some((arr) => {
          set = arr;
          if (typeof isSatisfiable === "function") {
            set = closure_1;
            let substr = arr.slice();
            closure_1 = substr.pop();
            let flag = true;
            if (substr.length) {
              let everyResult = substr.every((item) => closure_1.intersects(item, closure_0));
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
                if (typeof isSatisfiable === "function") {
                  closure_0 = closure_1;
                  const substr = arr.slice();
                  closure_1 = substr.pop();
                  let flag = true;
                  if (substr.length) {
                    const everyResult = substr.every((item) => closure_1.intersects(item, closure_0));
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
                    flag = closure_0.every((item) => item.every((item) => item.intersects(item, closure_1)));
                  }
                  return flag;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              });
            }
            return flag;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
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
            tmp = new Range(14016)(tmp, self.options);
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
  return (arg0, arg1, str, str2, str3, arg5, arg6, arg7, arg8, str4, str5, arg11) => {
    if (typeof isX === "function") {
      let tmp3 = !str;
      if (str) {
        tmp3 = "x" === str.toLowerCase();
      }
      if (!tmp3) {
        tmp3 = "*" === str;
      }
      if (tmp3) {
        if (typeof tmp === "function") {
          let str19 = arg8;
          let tmp22 = !arg8;
          if (arg8) {
            tmp22 = "x" === str19.toLowerCase();
          }
          if (!tmp22) {
            tmp22 = "*" === str19;
          }
          if (tmp22) {
            const _HermesInternal10 = HermesInternal;
            return "" + "" + " " + "".trim();
          } else if (typeof tmp === "function") {
            let tmp24 = !str4;
            if (str4) {
              tmp24 = "x" === str4.toLowerCase();
            }
            if (!tmp24) {
              tmp24 = "*" === str4;
            }
            if (tmp24) {
              const _HermesInternal9 = HermesInternal;
              str19 = "<";
              let combined = "<" + +str19 + 1 + ".0.0-0";
              const tmp39 = +str19;
            } else if (typeof tmp === "function") {
              let tmp26 = !str5;
              if (str5) {
                tmp26 = "x" === str5.toLowerCase();
              }
              if (!tmp26) {
                tmp26 = "*" === str5;
              }
              if (tmp26) {
                const _HermesInternal8 = HermesInternal;
                combined = "<" + str19 + "." + +str4 + 1 + ".0-0";
              } else if (arg11) {
                const _HermesInternal7 = HermesInternal;
                combined = "<=" + str19 + "." + str4 + "." + str5 + "-" + arg11;
              } else if (closure_0) {
                const _HermesInternal6 = HermesInternal;
                combined = "<" + str19 + "." + str4 + "." + +str5 + 1 + "-0";
              } else {
                const _HermesInternal5 = HermesInternal;
                combined = "<=" + arg7;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if (typeof tmp === "function") {
        let tmp5 = !str2;
        if (str2) {
          tmp5 = "x" === str2.toLowerCase();
        }
        if (!tmp5) {
          tmp5 = "*" === str2;
        }
        if (tmp5) {
          let str16 = "";
          if (closure_0) {
            str16 = "-0";
          }
          const _HermesInternal4 = HermesInternal;
          let combined1 = ">=" + str + ".0.0" + str16;
        } else if (typeof tmp === "function") {
          let tmp7 = !str3;
          if (str3) {
            tmp7 = "x" === str3.toLowerCase();
          }
          if (!tmp7) {
            tmp7 = "*" === str3;
          }
          if (tmp7) {
            let str12 = "";
            if (closure_0) {
              str12 = "-0";
            }
            const _HermesInternal3 = HermesInternal;
            combined1 = ">=" + str + "." + str2 + ".0" + str12;
          } else if (arg5) {
            const _HermesInternal2 = HermesInternal;
            combined1 = ">=" + arg1;
          } else {
            let str9 = "";
            if (closure_0) {
              str9 = "-0";
            }
            const _HermesInternal = HermesInternal;
            combined1 = ">=" + arg1 + str9;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
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
          let tmp5 = Range(14019)(arg0[num2].semver);
          if (arg0[num2].semver !== Range(14044).ANY) {
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