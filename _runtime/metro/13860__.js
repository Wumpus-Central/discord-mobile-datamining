// === Module 13860: ? ===

// Module 13860
import _createClass from "_createClass" /* 42 */;
import _mod13831 from "module_13831" /* 13831 */;
import _mod13832 from "module_13832" /* 13832 */;
import _mod13834 from "module_13834" /* 13834 */;
import _mod13835 from "module_13835" /* 13835 */;
import _mod13859 from "module_13859" /* 13859 */;
import _mod13861 from "module_13861" /* 13861 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

let map, set;

const re3 = /\s+/g;
class Range {
  constructor(loose, arg1) {
    const self = this;
    _classCallCheck(this, Range);
    const tmp5 = _mod13832(arg1);
    if (loose instanceof Range) {
      let tmpResult;
      if (loose.loose !== tmp5.loose) {
        tmpResult = Range(loose.raw, tmp5);
      } else {
        tmpResult = loose;
      }
      return tmpResult;
    } else if (loose instanceof _mod13859) {
      self.raw = loose.value;
      const items = [loose];
      const items1 = [items];
      self.set = items1;
      self.formatted = undefined;
      return self;
    } else {
      self.options = tmp5;
      self.loose = tmp5.loose;
      self.includePrerelease = tmp5.includePrerelease;
      const str = loose.trim();
      self.raw = str.replace(re3, " ");
      const str3 = self.raw;
      const parts = str3.split("||");
      const mapped = parts.map((item) => self.parseRange(item.trim()));
      self.set = mapped.filter((item) => item.length);
      if (self.set.length) {
        if (self.set.length > 1) {
          const first = self.set[0];
          const set1 = self.set;
          self.set = set1.filter((item) => {
            if (typeof closure_1_5 === "function") {
              return "<0.0.0-0" !== item[0].value;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          });
          if (0 === self.set.length) {
            const items2 = [first];
            self.set = items2;
          } else if (self.set.length > 1) {
            for (const item10061 of set) {
              if (1 === item10061.length) {
                if (isAny(item10061[0])) {
                  let items3 = [item10061];
                  self.set = items3;
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
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError("Invalid SemVer Range: " + self.raw);
        throw typeError;
      }
    }
  }
}
let obj = {
  key: "range",
  get() {
    const self = this;
    if (undefined === this.formatted) {
      let num2;
      self.formatted = "";
      for (let num2 = 0; num2 < self.set.length; num2 = num2 + 1) {
        let num;
        if (0 < num2) {
          self.formatted = `${self.formatted}||`;
        }
        let arr = self.set[num2];
        for (let num = 0; num < arr.length; num = num + 1) {
          if (0 < num) {
            self.formatted = `${self.formatted} `;
          }
          let str = arr[num];
          let formatted = self.formatted;
          let str2 = str.toString();
          self.formatted = formatted + str2.trim();
        }
      }
    }
    return self.formatted;
  }
};
let items = [
  obj,
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
        let tmp = self;
        FLAG_INCLUDE_PRERELEASE = self(13833).FLAG_INCLUDE_PRERELEASE;
      }
      let FLAG_LOOSE = self.options.loose;
      if (FLAG_LOOSE) {
        FLAG_LOOSE = self(13833).FLAG_LOOSE;
      }
      const text = `${FLAG_INCLUDE_PRERELEASE | FLAG_LOOSE}:${str}`;
      const value = closure_4.get(text);
      if (value) {
        return value;
      } else {
        let tmp9;
        let tmp11;
        let loose = self.options.loose;
        let tmp7 = self;
        let safeRe = self(13835).safeRe;
        let t = self(13835).t;
        if (loose) {
          tmp9 = safeRe[t.HYPHENRANGELOOSE];
          let tmp10 = dependencyMap;
          tmp11 = tmp7;
        } else {
          tmp9 = safeRe[t.HYPHENRANGE];
          tmp10 = dependencyMap;
          tmp11 = tmp7;
        }
        str = str.replace(tmp9, hyphenReplace(self.options.includePrerelease));
        let str2 = "hyphen replace";
        const tmp13 = tmp11(13834)("hyphen replace", str);
        let replace = str.replace;
        let str3 = replace(tmp11(13835).safeRe[tmp11(undefined, 13835).t.COMPARATORTRIM], tmp11(13835).comparatorTrimReplace);
        let str4 = "comparator trim";
        tmp11(13834)("comparator trim", str3);
        const replace2 = str3.replace;
        const str5 = replace2(tmp11(13835).safeRe[tmp11(undefined, 13835).t.TILDETRIM], tmp11(13835).tildeTrimReplace);
        let str6 = "tilde trim";
        const tmp15 = tmp11(13834)("tilde trim", str5);
        const replace3 = str5.replace;
        let str7 = replace3(tmp11(13835).safeRe[tmp11(undefined, 13835).t.CARETTRIM], tmp11(13835).caretTrimReplace);
        const str8 = "caret trim";
        tmp11(13834)("caret trim", str7);
        const str9 = " ";
        let parts = str7.split(" ");
        let mapped = parts.map((item) => {
          const options = self.options;
          if (typeof parseComparator === "function") {
            const tmp = item;
            let str = "comp";
            _mod13834("comp", item, options);
            if (typeof replaceCarets === "function") {
              let str2 = item.trim();
              const parts = str2.split(/\s+/);
              const mapped = parts.map((item) => {
                if (typeof closure_2_13 === "function") {
                  let tmp6;
                  let closure_0 = item;
                  const str = "caret";
                  let tmp5 = self(closure_2_1[6])("caret", item, options);
                  const loose = options.loose;
                  const safeRe = self(closure_2_1[5]).safeRe;
                  const t = self(closure_2_1[5]).t;
                  if (loose) {
                    tmp6 = safeRe[t.CARETLOOSE];
                  } else {
                    tmp6 = safeRe[t.CARET];
                  }
                  let str2 = "";
                  if (options.includePrerelease) {
                    str2 = "-0";
                  }
                  return item.replace(tmp6, (arg0, str, str2, str3, arg4) => {
                    options(closure_2_1[6])("caret", closure_0, arg0, str, str2, str3, arg4);
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
                        if (typeof closure_2_9 === "function") {
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
                          } else if (typeof closure_2_9 === "function") {
                            let tmp7 = !str3;
                            if (str3) {
                              tmp7 = "x" === str3.toLowerCase();
                            }
                            if (!tmp7) {
                              tmp7 = "*" === str3;
                            }
                            if (tmp7) {
                              let combined;
                              if ("0" === str) {
                                const _HermesInternal8 = HermesInternal;
                                combined = ">=" + str + "." + str2 + ".0" + str2 + " <" + str + "." + +str2 + 1 + ".0-0";
                              } else {
                                const _HermesInternal7 = HermesInternal;
                                combined = ">=" + str + "." + str2 + ".0" + str2 + " <" + +str + 1 + ".0.0-0";
                              }
                              str3 = combined;
                            } else {
                              const tmpResult = options(closure_2_1[6]);
                              if (arg4) {
                                let combined2;
                                tmpResult("replaceCaret pr", arg4);
                                if ("0" === str) {
                                  let combined1;
                                  if ("0" === str2) {
                                    const _HermesInternal6 = HermesInternal;
                                    combined1 = ">=" + str + "." + str2 + "." + str3 + "-" + arg4 + " <" + str + "." + str2 + "." + +str3 + 1 + "-0";
                                  } else {
                                    const _HermesInternal5 = HermesInternal;
                                    combined1 = ">=" + str + "." + str2 + "." + str3 + "-" + arg4 + " <" + str + "." + +str2 + 1 + ".0-0";
                                  }
                                  combined2 = combined1;
                                } else {
                                  const _HermesInternal4 = HermesInternal;
                                  combined2 = ">=" + str + "." + str2 + "." + str3 + "-" + arg4 + " <" + +str + 1 + ".0.0-0";
                                }
                                str3 = combined2;
                              } else {
                                let combined4;
                                tmpResult("no pr");
                                if ("0" === str) {
                                  let combined3;
                                  if ("0" === str2) {
                                    const _HermesInternal3 = HermesInternal;
                                    combined3 = ">=" + str + "." + str2 + "." + str3 + str2 + " <" + str + "." + str2 + "." + +str3 + 1 + "-0";
                                  } else {
                                    const _HermesInternal2 = HermesInternal;
                                    combined3 = ">=" + str + "." + str2 + "." + str3 + str2 + " <" + str + "." + +str2 + 1 + ".0-0";
                                  }
                                  combined4 = combined3;
                                } else {
                                  const _HermesInternal = HermesInternal;
                                  combined4 = ">=" + str + "." + str2 + "." + str3 + " <" + +str + 1 + ".0.0-0";
                                }
                                str3 = combined4;
                              }
                            }
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      }
                      options(closure_2_1[6])("caret return", str3);
                      return str3;
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  });
                } else {
                  let str3 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              });
              let str3 = " ";
              const str4 = mapped.join(" ");
              let tmp6 = _mod13834("caret", str4);
              if (typeof replaceTildes === "function") {
                const str6 = str4.trim();
                const parts1 = str6.split(/\s+/);
                const mapped1 = parts1.map((item) => {
                  if (typeof closure_2_11 === "function") {
                    let tmp5;
                    let closure_0 = item;
                    const loose = tmp.loose;
                    const safeRe = self(closure_2_1[5]).safeRe;
                    const t = self(closure_2_1[5]).t;
                    if (loose) {
                      tmp5 = safeRe[t.TILDELOOSE];
                    } else {
                      tmp5 = safeRe[t.TILDE];
                    }
                    return item.replace(tmp5, (arg0, str, str2, str3, arg4) => {
                      options(closure_2_1[6])("tilde", closure_0, arg0, str, str2, str3, arg4);
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
                          if (typeof closure_2_9 === "function") {
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
                            } else if (typeof closure_2_9 === "function") {
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
                                options(closure_2_1[6])("replaceTilde pr", arg4);
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
                        options(closure_2_1[6])("tilde return", str3);
                        return str3;
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    });
                  } else {
                    const str = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                });
                const str7 = mapped1.join(" ");
                let tmp8 = _mod13834("tildes", str7);
                if (typeof replaceXRanges === "function") {
                  let tmp10 = _mod13834("replaceXRanges", str7, options);
                  const parts2 = str7.split(/\s+/);
                  const mapped2 = parts2.map((item) => {
                    if (typeof closure_2_15 === "function") {
                      let tmp5;
                      let closure_1 = options;
                      let str = item.trim();
                      const loose = options.loose;
                      const safeRe = self(closure_2_1[5]).safeRe;
                      const t = self(closure_2_1[5]).t;
                      if (loose) {
                        tmp5 = safeRe[t.XRANGELOOSE];
                      } else {
                        tmp5 = safeRe[t.XRANGE];
                      }
                      return str.replace(tmp5, (arg0, arg1, str, str2, str3, arg5) => {
                        let combined = arg0;
                        str = arg1;
                        options(closure_2_1[6])("xRange", str, arg0, arg1, str, str2, str3, arg5);
                        if (typeof closure_2_9 === "function") {
                          let tmp6 = !str;
                          if (str) {
                            tmp6 = "x" === str.toLowerCase();
                          }
                          if (!tmp6) {
                            tmp6 = "*" === str;
                          }
                          let tmp7 = tmp6;
                          if (!tmp7) {
                            if (typeof closure_2_9 === "function") {
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
                          if (!tmp9) {
                            if (typeof closure_2_9 === "function") {
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
                          const tmp11 = "=" === str && tmp9;
                          if (tmp11) {
                            str = "";
                          }
                          let str10 = "";
                          if (includePrerelease.includePrerelease) {
                            str10 = "-0";
                          }
                          if (tmp6) {
                            let str31;
                            if (">" === str) {
                              str31 = "<0.0.0-0";
                            } else {
                              str31 = "*";
                            }
                            combined = str31;
                          } else {
                            if (str) {
                              if (tmp9) {
                                let sum;
                                let num4;
                                let str24;
                                let num3 = str2;
                                if (tmp7) {
                                  num3 = 0;
                                }
                                if (">" === str) {
                                  if (tmp7) {
                                    sum = +str + 1;
                                    num4 = 0;
                                    str24 = ">=";
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
                                    let sum1;
                                    let sum2;
                                    if (tmp7) {
                                      sum1 = +str + 1;
                                      sum2 = num3;
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
                          options(closure_2_1[6])("xRange return", combined);
                          return combined;
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      });
                    } else {
                      const str2 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  });
                  let str10 = mapped2.join(" ");
                  let tmp11 = _mod13834("xrange", str10);
                  if (typeof replaceStars === "function") {
                    _mod13834("replaceStars", str10, options);
                    const replace = str10.trim().replace;
                    const str13 = str10.trim();
                    const replaced = replace(_mod13835.safeRe[_mod13835.t.STAR], "");
                    _mod13834("stars", replaced);
                    return replaced;
                  } else {
                    throw new TypeError("Trying to call a non-function");
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
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        });
        let str10 = mapped.join(" ");
        let parts1 = str10.split(/\s+/);
        let mapped1 = parts1.map((item) => {
          const options = self.options;
          if (typeof replaceGTE0 === "function") {
            _mod13834("replaceGTE0", item, options);
            const replace = item.trim().replace;
            item.trim();
            const safeRe = _mod13835.safeRe;
            const includePrerelease = options.includePrerelease;
            const t = _mod13835.t;
            return replace(safeRe[includePrerelease ? t.GTE0PRE : t.GTE0], "");
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        });
        let found = mapped1;
        if (loose) {
          found = mapped1.filter((item) => {
            _mod13834("loose invalid filter", item, self.options);
            const match = item.match;
            return match(_mod13835.safeRe[_mod13835.t.COMPARATORLOOSE]);
          });
        }
        const str11 = "range list";
        tmp11(13834)("range list", found);
        const _Map = Map;
        const self3 = this;
        const self2 = this;
        map = new Map();
        let mapped2 = found.map((item) => {
          const tmp = new _mod13859(item, self.options);
          return tmp;
        });
        for (const item10132 of mapped2) {
          if (isNullSet(item10132)) {
            let items = [item10132];
            obj3.return();
            return items;
          } else {
            let result = map.set(item10132.value, item10132);
            continue;
          }
        }
        let hasItem = map.size > 1;
        if (hasItem) {
          const str12 = "";
          hasItem = map.has("");
        }
        if (hasItem) {
          let str13 = "";
          map.delete("");
        }
        const items1 = [];
        HermesBuiltin.arraySpread(items1, map.values(), 0);
        const result1 = closure_4.set(text, items1);
        return items1;
      }
    }
  },
  {
    key: "intersects",
    value: function intersects(arg0, arg1) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      if (arg0 instanceof Range) {
        const self3 = this;
        set = this.set;
        return set.some((arr) => {
          set = arr;
          if (typeof closure_1_7 === "function") {
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
                let closure_0 = arr;
                if (typeof closure_3_7 === "function") {
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
                    flag = closure_0.every((item) => {
                      closure_0 = item;
                      return closure_0.every((item) => closure_0.intersects(item, closure_2_1));
                    });
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
        const self = this;
        const str = "a Range is required";
        const self2 = this;
        const typeError = new TypeError("a Range is required");
        throw typeError;
      }
    }
  },
  {
    key: "test",
    value: function test(prerelease) {
      let tmp = prerelease;
      if (tmp) {
        const self = this;
        if (typeof tmp === "string") {
          try {
            const self2 = this;
            const self3 = this;
            tmp = new _mod13831(tmp, self.options);
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
let tmp = new _mod13861();
let closure_4 = tmp;
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
  let closure_0 = includePrerelease;
  return (arg0, arg1, str, str2, str3, arg5, arg6, arg7, str4, str5, str6, arg11) => {
    if (typeof isX === "function") {
      let tmp3 = !str;
      if (str) {
        tmp3 = "x" === str.toLowerCase();
      }
      if (!tmp3) {
        tmp3 = "*" === str;
      }
      str4 = "";
      if (!tmp3) {
        if (typeof isX === "function") {
          let combined;
          let tmp5 = !str2;
          if (str2) {
            tmp5 = "x" === str2.toLowerCase();
          }
          if (!tmp5) {
            tmp5 = "*" === str2;
          }
          if (tmp5) {
            let str16 = "";
            if (includePrerelease) {
              str16 = "-0";
            }
            const _HermesInternal4 = HermesInternal;
            combined = ">=" + str + ".0.0" + str16;
          } else if (typeof isX === "function") {
            let tmp7 = !str3;
            if ("") {
              tmp7 = "x" === str3.toLowerCase();
            }
            if (!tmp7) {
              tmp7 = "*" === str3;
            }
            if (tmp7) {
              let str12 = "";
              if (includePrerelease) {
                str12 = "-0";
              }
              const _HermesInternal3 = HermesInternal;
              combined = ">=" + str + "." + str2 + ".0" + str12;
            } else {
              const tmp9 = arg5;
              if (tmp9) {
                const _HermesInternal2 = HermesInternal;
                combined = ">=" + arg1;
              } else {
                let str9 = "";
                if (includePrerelease) {
                  str9 = "-0";
                }
                const _HermesInternal = HermesInternal;
                combined = ">=" + arg1 + str9;
              }
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
          str4 = combined;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      if (typeof isX === "function") {
        let tmp22 = !str4;
        if (str4) {
          tmp22 = "x" === str4.toLowerCase();
        }
        if (!tmp22) {
          tmp22 = "*" === str4;
        }
        let str21 = "";
        if (!tmp22) {
          if (typeof isX === "function") {
            let combined1;
            let tmp24 = !str5;
            if (str5) {
              tmp24 = "x" === str5.toLowerCase();
            }
            if (!tmp24) {
              tmp24 = "*" === str5;
            }
            if (tmp24) {
              const _HermesInternal9 = HermesInternal;
              combined1 = "<" + +str4 + 1 + ".0.0-0";
            } else if (typeof isX === "function") {
              let tmp26 = !str6;
              if (str6) {
                tmp26 = "x" === str6.toLowerCase();
              }
              if (!tmp26) {
                tmp26 = "*" === str6;
              }
              if (tmp26) {
                const _HermesInternal8 = HermesInternal;
                combined1 = "<" + str4 + "." + +str5 + 1 + ".0-0";
              } else {
                const tmp28 = arg11;
                if (tmp28) {
                  const _HermesInternal7 = HermesInternal;
                  combined1 = "<=" + str4 + "." + str5 + "." + str6 + "-" + arg11;
                } else if (includePrerelease) {
                  const _HermesInternal6 = HermesInternal;
                  combined1 = "<" + str4 + "." + str5 + "." + +str6 + 1 + "-0";
                } else {
                  const _HermesInternal5 = HermesInternal;
                  combined1 = "<=" + arg7;
                }
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
            str21 = combined1;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        const _HermesInternal10 = HermesInternal;
        const str43 = "" + str4 + " " + str21;
        return str43.trim();
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
    const obj = arg0[num];
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
          let tmp5 = _mod13834(arg0[num2].semver);
          if (arg0[num2].semver !== _mod13859.ANY) {
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