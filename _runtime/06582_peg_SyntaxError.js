// _runtime/06582_peg_SyntaxError.js
class peg$SyntaxError {
  constructor(arg0, arg1, arg2, arg3) {
    self = this;
    _Error = Error;
    call = Error.call;
    tmp = typeof call === "unknown" ? _Error(global) : call(self, global);
    if (Object.setPrototypeOf) {
      _Object = Object;
      tmp2 = peg$SyntaxError;
      setPrototypeOfResult = Object.setPrototypeOf(tmp, peg$SyntaxError.prototype);
    }
    tmp.expected = require;
    tmp.found = importDefault;
    tmp.location = importAll;
    tmp.name = "SyntaxError";
    return tmp;
  }
  format(arg0) {
    self = this;
    text = `Error: ${this.message}`;
    combined = text;
    if (this.location) {
      tmp3 = global;
      num = 0;
      num2 = 1;
      num3 = 0;
      parts = null;
      if (0 < global.length) {
        tmp5 = num3;
        while (global[num3].source !== self.location.source) {
          sum = num3 + 1;
          num3 = sum;
          parts = null;
        }
        str = global[num3].text;
        parts = str.split(/\r\n|\n|\r/g);
      }
      start = self.location.start;
      offsetResult = start;
      if (self.location.source) {
        offsetResult = start;
        if (typeof self.location.source.offset === "function") {
          source = self.location.source;
          offsetResult = source.offset(start);
        }
      }
      str2 = ":";
      text1 = `${self.location.source}:${tmp7.line}:${tmp7.column}`;
      if (parts) {
        end = self.location.end;
        str4 = offsetResult.line;
        length = str4.toString().length;
        str5 = "";
        length2 = "".length;
        str6 = "";
        if ("".length <= length) {
          length3 = "".length;
          diff = length - "".length;
          str7 = " ";
          repeat = " ".repeat;
          text2 = ` ${" ".repeat(tmp10)}`;
          str6 = `${require("module_0")}`;
        }
        arr = parts[start.line - 1];
        if (start.line === end.line) {
          column = end.column;
        } else {
          column = arr.length + 1;
        }
        tmp12 = column - start.column || 1;
        tmp13 = globalThis;
        _HermesInternal2 = HermesInternal;
        str8 = " |\n";
        str9 = "\n";
        str10 = "\n --> ";
        tmp14 = text1;
        str11 = "\n";
        tmp15 = str6;
        str12 = " | ";
        text3 = `${"\n --> " + tmp8 + "\n" + str6 + " |\n"}${tmp7.line} | ${arr}`;
        diff1 = start.column - 1;
        length4 = "".length;
        str13 = "";
        if ("".length <= diff1) {
          length5 = "".length;
          diff2 = diff1 - "".length;
          str14 = " ";
          repeat2 = " ".repeat;
          text4 = ` ${" ".repeat(tmp18)}`;
          str13 = `${require("module_0")}`;
        }
        length6 = "".length;
        str15 = "";
        if ("".length <= tmp12) {
          length7 = "".length;
          diff3 = tmp12 - "".length;
          str16 = "^";
          repeat3 = "^".repeat;
          text5 = `^${"^".repeat(tmp20)}`;
          str15 = `${require("module_0")}`;
        }
        _HermesInternal3 = HermesInternal;
        tmp22 = text;
        tmp23 = text3;
        str17 = "\n";
        tmp24 = str6;
        str18 = " | ";
        tmp25 = str13;
        tmp26 = str15;
        combined = text + text3 + "\n" + str6 + " | " + str13 + str15;
      } else {
        tmp9 = globalThis;
        _HermesInternal = HermesInternal;
        str3 = "\n at ";
        combined = text + "\n at " + text1;
      }
    }
    return combined;
  }
  static buildMessage(arg0, arg1) {
    obj = {
      literal(text) {
            let str = text.text;
            const str2 = text.text.replace(/\\/g, "\\\\");
            const str3 = text.text.replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
            const str4 = text.text.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0");
            const str5 = text.text.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t");
            const str6 = text.text.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n");
            const str7 = text.text.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r");
            return "\"" + text.text.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (str) => {
              str = str.charCodeAt(0);
              return "\\x0" + str.charCodeAt(0).toString(16).toUpperCase();
            }).replace(/[\x10-\x1F\x7F-\x9F]/g, (str) => {
              str = str.charCodeAt(0);
              return "\\x" + str.charCodeAt(0).toString(16).toUpperCase();
            }) + "\"";
          },
      class(parts) {
            parts = parts.parts;
            const mapped = parts.map((str) => {
              if (Array.isArray(str)) {
                const str18 = str[0];
                const str20 = str[0].replace(/\\/g, "\\\\");
                const str22 = str[0].replace(/\\/g, "\\\\").replace(/\]/g, "\\]");
                const str24 = str[0].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^");
                const str26 = str[0].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-");
                const str28 = str[0].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0");
                const str30 = str[0].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t");
                const str32 = str[0].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n");
                const str35 = str[0].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (str) => {
                  str = str.charCodeAt(0);
                  return "\\x0" + str.charCodeAt(0).toString(16).toUpperCase();
                });
                const text = `${str35.replace(/[\x10-\x1F\x7F-\x9F]/g, (str) => {
                  str = str.charCodeAt(0);
                  return "\\x" + str.charCodeAt(0).toString(16).toUpperCase();
                })}-`;
                const str34 = str[0].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r");
                const str37 = str[1];
                const str38 = str[1].replace(/\\/g, "\\\\");
                const str39 = str[1].replace(/\\/g, "\\\\").replace(/\]/g, "\\]");
                const str40 = str[1].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^");
                const str41 = str[1].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-");
                const str42 = str[1].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0");
                const str43 = str[1].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t");
                const str44 = str[1].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n");
                const str45 = str[1].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r");
                let text1 = `${str35.replace(/[\x10-\x1F\x7F-\x9F]/g, (str) => {
                  str = str.charCodeAt(0);
                  return "\\x" + str.charCodeAt(0).toString(16).toUpperCase();
                })}-${str[1].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (str) => {
                  str = str.charCodeAt(0);
                  return "\\x0" + str.charCodeAt(0).toString(16).toUpperCase();
                }).replace(/[\x10-\x1F\x7F-\x9F]/g, (str) => {
                  str = str.charCodeAt(0);
                  return "\\x" + str.charCodeAt(0).toString(16).toUpperCase();
                })}`;
                const str46 = str[1].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (str) => {
                  str = str.charCodeAt(0);
                  return "\\x0" + str.charCodeAt(0).toString(16).toUpperCase();
                });
              } else {
                const str2 = str.replace(/\\/g, "\\\\");
                const str4 = str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]");
                const str6 = str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^");
                const str8 = str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-");
                const str10 = str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0");
                const str12 = str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t");
                const str14 = str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n");
                const str16 = str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r");
                text1 = str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (str) => {
                  str = str.charCodeAt(0);
                  return "\\x0" + str.charCodeAt(0).toString(16).toUpperCase();
                }).replace(/[\x10-\x1F\x7F-\x9F]/g, (str) => {
                  str = str.charCodeAt(0);
                  return "\\x" + str.charCodeAt(0).toString(16).toUpperCase();
                });
                const str17 = str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (str) => {
                  str = str.charCodeAt(0);
                  return "\\x0" + str.charCodeAt(0).toString(16).toUpperCase();
                });
              }
              return text1;
            });
            let str = "";
            if (parts.inverted) {
              str = "^";
            }
            return "[" + str + mapped.join("") + "]";
          },
      any() {
            return "any character";
          },
      end() {
            return "end of input";
          },
      other(description) {
            return description.description;
          }
    };
    peg$SyntaxError = obj;
    mapped = global.map(function describeExpectation(arg0) {
      return obj[arg0.type](arg0);
    });
    sorted = mapped.sort();
    if (mapped.length > 0) {
      num = 1;
      num2 = 1;
      num3 = 1;
      num4 = 1;
      if (1 < mapped.length) {
        do {
          tmp2 = num2;
          tmp3 = num3;
          sum = num2;
          if (mapped[num3 - 1] !== mapped[num3]) {
            mapped[num2] = mapped[num3];
            sum = num2 + 1;
          }
          num3 = num3 + 1;
          num2 = sum;
          num4 = sum;
        } while (num3 < mapped.length);
      }
      mapped.length = num4;
    }
    length = mapped.length;
    if (1 === length) {
      first = mapped[0];
    } else {
      num5 = 2;
      if (2 === length) {
        str3 = " or ";
        first = `${arr[0]} or ${arr[1]}`;
      } else {
        num6 = -1;
        substr = require("module_0");
        str = ", ";
        str2 = ", or ";
        first = `${obj2.join(", ")}, or ${arr[arr.length - 1]}`;
      }
    }
    str4 = "end of input";
    text = `Expected ${tmp5}`;
    if (require) {
      str5 = "\\\\";
      str6 = require.replace(/\\/g, "\\\\");
      str7 = "\\\"";
      str8 = str6.replace(/"/g, "\\\"");
      str9 = "\\0";
      str10 = str8.replace(/\0/g, "\\0");
      str11 = "\\t";
      str12 = str10.replace(/\t/g, "\\t");
      str13 = "\\n";
      str14 = str12.replace(/\n/g, "\\n");
      str15 = "\\r";
      str16 = str14.replace(/\r/g, "\\r");
      str17 = str16.replace(/[\x00-\x0F]/g, (str) => {
        str = str.charCodeAt(0);
        return "\\x0" + str.charCodeAt(0).toString(16).toUpperCase();
      });
      str18 = "\"";
      str4 = `${"\"" + str17.replace(/[\x10-\x1F\x7F-\x9F]/g, (str) => {
        str = str.charCodeAt(0);
        return "\\x" + str.charCodeAt(0).toString(16).toUpperCase();
      })}"`;
    }
    return text + " but " + str4 + " found.";
  }
}
class C {
  constructor() {
    this.constructor = peg$SyntaxError;
    return;
  }
}
C.prototype = Error.prototype;
let obj = Object.create(C.prototype);
obj.constructor = peg$SyntaxError;
peg$SyntaxError.prototype = obj;
obj = {
  StartRules: ["start"],
  SyntaxError: peg$SyntaxError,
  parse: function peg$parse(str) {
    const pegSyntaxError = str;
    let obj = arg1;
    function peg$parsefunction() {
      throwTypeErrorResult = throwTypeErrorResult + 1 + 1;
      peg$parse_();
      if (str.substr(throwTypeErrorResult, 7) === c3) {
        throwTypeErrorResult = throwTypeErrorResult + 7;
        let tmp7 = tmp4;
      } else {
        tmp7 = obj;
        if (0 === throwTypeErrorResult) {
          tmp7 = tmp5;
          if (throwTypeErrorResult >= throwTypeErrorResult) {
            if (tmp9 > throwTypeErrorResult) {
              throwTypeErrorResult = tmp9;
              let arr = [];
            }
            arr = arr.push(tmp8);
            tmp7 = tmp5;
          }
        }
      }
      const tmp13 = obj;
      if (tmp7 !== obj) {
        tmp2();
        const tmp17 = peg$parseNUM();
        if (tmp17 !== tmp13) {
          peg$parsespaceOrComma();
          let tmp16Result = tmp16();
          if (tmp16Result !== tmp13) {
            tmp18();
            tmp16Result = tmp16();
            if (tmp16Result !== tmp13) {
              tmp18();
              const tmp16Result1 = tmp16();
              if (tmp16Result1 !== tmp13) {
                tmp18();
                const tmp16Result2 = tmp16();
                if (tmp16Result2 !== tmp13) {
                  tmp18();
                  const tmp16Result3 = tmp16();
                  if (tmp16Result3 !== tmp13) {
                    tmp18();
                    const tmp16Result4 = tmp16();
                    if (tmp16Result4 !== tmp13) {
                      tmp18();
                      const tmp16Result5 = tmp16();
                      if (tmp16Result5 !== tmp13) {
                        tmp18();
                        const tmp16Result6 = tmp16();
                        if (tmp16Result6 !== tmp13) {
                          tmp2();
                          if (41 === str.charCodeAt(throwTypeErrorResult)) {
                            let tmp38 = c4;
                            throwTypeErrorResult = throwTypeErrorResult + 1;
                          } else {
                            tmp38 = tmp13;
                            if (0 === throwTypeErrorResult) {
                              tmp38 = tmp13;
                              if (throwTypeErrorResult >= throwTypeErrorResult) {
                                if (tmp40 > throwTypeErrorResult) {
                                  throwTypeErrorResult = tmp40;
                                  arr = [];
                                }
                                arr = arr.push(tmp39);
                                tmp38 = tmp13;
                              }
                            }
                          }
                          if (tmp38 !== tmp13) {
                            tmp2();
                            if (typeof peg$f1 !== "function") {
                              throwTypeErrorResult = HermesBuiltin.throwTypeError();
                            }
                            obj = { matrix: null };
                            const items = [tmp17, tmp16Result, tmp16Result, tmp16Result1, tmp16Result2, tmp16Result3, tmp16Result4, tmp16Result5, tmp16Result6];
                            obj[0] = items;
                            let tmp14 = obj;
                          } else {
                            tmp14 = tmp13;
                          }
                        } else {
                          tmp14 = tmp13;
                        }
                      } else {
                        tmp14 = tmp13;
                      }
                    } else {
                      tmp14 = tmp13;
                    }
                  } else {
                    tmp14 = tmp13;
                  }
                } else {
                  tmp14 = tmp13;
                }
              } else {
                tmp14 = tmp13;
              }
            } else {
              tmp14 = tmp13;
            }
          } else {
            tmp14 = tmp13;
          }
        } else {
          tmp14 = tmp13;
        }
      } else {
        tmp14 = tmp13;
      }
      const diff = throwTypeErrorResult - 1;
      throwTypeErrorResult = diff;
      let tmp47 = tmp14 === tmp13;
      if (tmp47) {
        if (0 === diff) {
          if (throwTypeErrorResult >= throwTypeErrorResult) {
            if (tmp49 > throwTypeErrorResult) {
              throwTypeErrorResult = tmp49;
              arr = [];
            }
            arr.push(tmp48);
          }
        }
      }
      if (tmp47) {
        throwTypeErrorResult = throwTypeErrorResult + 1;
        tmp2();
        if (str.substr(throwTypeErrorResult, 10) === c5) {
          throwTypeErrorResult = throwTypeErrorResult + 10;
          let tmp58 = tmp56;
        } else {
          tmp58 = tmp13;
          if (0 === throwTypeErrorResult) {
            tmp58 = tmp13;
            if (throwTypeErrorResult >= throwTypeErrorResult) {
              if (tmp60 > throwTypeErrorResult) {
                throwTypeErrorResult = tmp60;
                arr = [];
              }
              arr.push(tmp59);
              tmp58 = tmp13;
            }
          }
        }
        if (tmp58 !== tmp13) {
          tmp2();
          const tmp67 = peg$parseNUM();
          if (tmp67 !== tmp13) {
            peg$parsespaceOrComma();
            let tmp66Result = tmp66();
            if (tmp66Result === tmp13) {
              tmp66Result = null;
            }
            tmp2();
            if (41 === str.charCodeAt(throwTypeErrorResult)) {
              let tmp74 = c4;
              throwTypeErrorResult = throwTypeErrorResult + 1;
            } else {
              tmp74 = tmp13;
              if (0 === throwTypeErrorResult) {
                tmp74 = tmp13;
                if (throwTypeErrorResult >= throwTypeErrorResult) {
                  if (tmp76 > throwTypeErrorResult) {
                    throwTypeErrorResult = tmp76;
                    arr = [];
                  }
                  arr.push(tmp75);
                  tmp74 = tmp13;
                }
              }
            }
            if (tmp74 !== tmp13) {
              tmp2();
              throwTypeErrorResult = tmp53;
              if (typeof peg$f2 !== "function") {
                throwTypeErrorResult = HermesBuiltin.throwTypeError();
              }
              if (null == tmp66Result) {
                obj = { translate: null };
                obj[0] = tmp67;
              } else {
                obj = { translate: null };
                const items1 = [tmp67, tmp66Result];
                obj[0] = items1;
              }
            } else {
              throwTypeErrorResult = tmp53;
              let tmp64 = tmp13;
            }
          } else {
            throwTypeErrorResult = tmp53;
            tmp64 = tmp13;
          }
          tmp66 = peg$parseNUM;
        } else {
          throwTypeErrorResult = tmp53;
          tmp64 = tmp13;
        }
        const diff1 = throwTypeErrorResult - 1;
        throwTypeErrorResult = diff1;
        tmp47 = tmp86;
        tmp14 = tmp64;
        if (tmp64 === tmp13) {
          tmp47 = tmp86;
          tmp14 = tmp64;
          if (0 === diff1) {
            tmp47 = tmp86;
            tmp14 = tmp64;
            if (throwTypeErrorResult >= throwTypeErrorResult) {
              if (tmp88 > throwTypeErrorResult) {
                throwTypeErrorResult = tmp88;
                arr = [];
              }
              arr.push(tmp87);
              tmp47 = tmp86;
              tmp14 = tmp64;
            }
          }
        }
      }
      if (tmp47) {
        throwTypeErrorResult = throwTypeErrorResult + 1;
        tmp2();
        if (str.substr(throwTypeErrorResult, 6) === c6) {
          throwTypeErrorResult = throwTypeErrorResult + 6;
          let tmp97 = tmp95;
        } else {
          tmp97 = tmp13;
          if (0 === throwTypeErrorResult) {
            tmp97 = tmp13;
            if (throwTypeErrorResult >= throwTypeErrorResult) {
              if (tmp99 > throwTypeErrorResult) {
                throwTypeErrorResult = tmp99;
                arr = [];
              }
              throwTypeErrorResult = arr;
              throwTypeErrorResult = arr.push(tmp98);
              tmp97 = tmp13;
            }
          }
        }
        if (tmp97 !== tmp13) {
          throwTypeErrorResult = tmp2();
          throwTypeErrorResult = peg$parseNUM;
          throwTypeErrorResult = peg$parseNUM();
          if (throwTypeErrorResult !== tmp13) {
            throwTypeErrorResult = peg$parsespaceOrComma;
            throwTypeErrorResult = peg$parsespaceOrComma();
            throwTypeErrorResult = throwTypeErrorResult();
            if (throwTypeErrorResult === tmp13) {
              throwTypeErrorResult = null;
            }
            throwTypeErrorResult = tmp2();
            if (41 === str.charCodeAt(throwTypeErrorResult)) {
              throwTypeErrorResult = c4;
              throwTypeErrorResult = throwTypeErrorResult + 1;
            } else {
              throwTypeErrorResult = tmp13;
              if (0 === throwTypeErrorResult) {
                throwTypeErrorResult = tmp13;
                if (throwTypeErrorResult >= throwTypeErrorResult) {
                  if (throwTypeErrorResult > throwTypeErrorResult) {
                    arr = [];
                  }
                  throwTypeErrorResult = arr;
                  throwTypeErrorResult = arr.push(throwTypeErrorResult);
                  throwTypeErrorResult = tmp13;
                }
              }
            }
            if (throwTypeErrorResult !== tmp13) {
              throwTypeErrorResult = tmp2();
              throwTypeErrorResult = tmp92;
              throwTypeErrorResult = peg$f3;
              if (typeof peg$f3 !== "function") {
                throwTypeErrorResult = HermesBuiltin.throwTypeError();
              }
              throwTypeErrorResult = null;
              if (null == throwTypeErrorResult) {
                const obj1 = { scale: null };
                obj1[0] = throwTypeErrorResult;
                let items2 = obj1;
              } else {
                const obj2 = { scaleX: null };
                obj2[0] = throwTypeErrorResult;
                items2 = [obj2, ];
                const obj3 = { scaleY: null };
                obj3[0] = throwTypeErrorResult;
                items2[1] = obj3;
              }
              throwTypeErrorResult = items2;
            } else {
              throwTypeErrorResult = tmp92;
              throwTypeErrorResult = tmp13;
            }
          } else {
            throwTypeErrorResult = tmp92;
            throwTypeErrorResult = tmp13;
          }
        } else {
          throwTypeErrorResult = tmp92;
          throwTypeErrorResult = tmp13;
        }
        throwTypeErrorResult = throwTypeErrorResult - 1;
        throwTypeErrorResult = throwTypeErrorResult === tmp13;
        tmp47 = throwTypeErrorResult;
        tmp14 = throwTypeErrorResult;
        if (throwTypeErrorResult) {
          tmp47 = throwTypeErrorResult;
          tmp14 = throwTypeErrorResult;
          if (0 === throwTypeErrorResult) {
            tmp47 = throwTypeErrorResult;
            tmp14 = throwTypeErrorResult;
            if (throwTypeErrorResult >= throwTypeErrorResult) {
              if (throwTypeErrorResult > throwTypeErrorResult) {
                arr = [];
              }
              throwTypeErrorResult = arr;
              throwTypeErrorResult = arr.push(throwTypeErrorResult);
              tmp47 = throwTypeErrorResult;
              tmp14 = throwTypeErrorResult;
            }
          }
        }
      }
      if (tmp47) {
        throwTypeErrorResult = throwTypeErrorResult + 1;
        throwTypeErrorResult = tmp2();
        if (str.substr(throwTypeErrorResult, 7) === c7) {
          throwTypeErrorResult = throwTypeErrorResult + 7;
        } else {
          throwTypeErrorResult = tmp13;
          if (0 === throwTypeErrorResult) {
            throwTypeErrorResult = tmp13;
            if (throwTypeErrorResult >= throwTypeErrorResult) {
              if (throwTypeErrorResult > throwTypeErrorResult) {
                arr = [];
              }
              throwTypeErrorResult = arr;
              throwTypeErrorResult = arr.push(throwTypeErrorResult);
              throwTypeErrorResult = tmp13;
            }
          }
        }
        if (throwTypeErrorResult !== tmp13) {
          throwTypeErrorResult = tmp2();
          throwTypeErrorResult = peg$parseNUM;
          throwTypeErrorResult = peg$parseNUM();
          if (throwTypeErrorResult !== tmp13) {
            throwTypeErrorResult = throwTypeErrorResult + 1;
            throwTypeErrorResult = peg$parsespaceOrComma;
            throwTypeErrorResult = peg$parsespaceOrComma();
            throwTypeErrorResult = throwTypeErrorResult();
            if (throwTypeErrorResult !== tmp13) {
              throwTypeErrorResult = throwTypeErrorResult();
              throwTypeErrorResult = throwTypeErrorResult();
              if (throwTypeErrorResult !== tmp13) {
                throwTypeErrorResult = peg$f5;
                if (typeof peg$f5 !== "function") {
                  throwTypeErrorResult = HermesBuiltin.throwTypeError();
                }
                const items3 = [throwTypeErrorResult, throwTypeErrorResult];
                throwTypeErrorResult = items3;
              } else {
                throwTypeErrorResult = tmp13;
              }
            } else {
              throwTypeErrorResult = tmp13;
            }
            throwTypeErrorResult = throwTypeErrorResult - 1;
            throwTypeErrorResult = throwTypeErrorResult === tmp13;
            if (throwTypeErrorResult) {
              if (0 === throwTypeErrorResult) {
                if (throwTypeErrorResult >= throwTypeErrorResult) {
                  if (throwTypeErrorResult > throwTypeErrorResult) {
                    arr = [];
                  }
                  throwTypeErrorResult = arr;
                  throwTypeErrorResult = arr.push(throwTypeErrorResult);
                }
              }
            }
            if (throwTypeErrorResult) {
              throwTypeErrorResult = null;
            }
            throwTypeErrorResult = tmp2();
            if (41 === str.charCodeAt(throwTypeErrorResult)) {
              throwTypeErrorResult = c4;
              throwTypeErrorResult = throwTypeErrorResult + 1;
            } else {
              throwTypeErrorResult = tmp13;
              if (0 === throwTypeErrorResult) {
                throwTypeErrorResult = tmp13;
                if (throwTypeErrorResult >= throwTypeErrorResult) {
                  if (throwTypeErrorResult > throwTypeErrorResult) {
                    arr = [];
                  }
                  throwTypeErrorResult = arr;
                  throwTypeErrorResult = arr.push(throwTypeErrorResult);
                  throwTypeErrorResult = tmp13;
                }
              }
            }
            if (throwTypeErrorResult !== tmp13) {
              throwTypeErrorResult = tmp2();
              throwTypeErrorResult = peg$f4;
              if (typeof peg$f4 !== "function") {
                throwTypeErrorResult = HermesBuiltin.throwTypeError();
              }
              throwTypeErrorResult = null;
              if (null !== throwTypeErrorResult) {
                const obj4 = { rotate: null };
                throwTypeErrorResult = globalThis;
                const _HermesInternal2 = HermesInternal;
                obj4[0] = "" + throwTypeErrorResult + "deg";
                let items4 = obj4;
              } else {
                const obj5 = { rotate: null };
                throwTypeErrorResult = globalThis;
                const _HermesInternal = HermesInternal;
                obj5[0] = "" + throwTypeErrorResult + "deg";
                items4 = [obj5];
              }
              throwTypeErrorResult = items4;
            } else {
              throwTypeErrorResult = tmp13;
            }
          } else {
            throwTypeErrorResult = tmp13;
          }
        } else {
          throwTypeErrorResult = tmp13;
        }
        throwTypeErrorResult = throwTypeErrorResult - 1;
        throwTypeErrorResult = throwTypeErrorResult === tmp13;
        tmp47 = throwTypeErrorResult;
        tmp14 = throwTypeErrorResult;
        if (throwTypeErrorResult) {
          tmp47 = throwTypeErrorResult;
          tmp14 = throwTypeErrorResult;
          if (0 === throwTypeErrorResult) {
            tmp47 = throwTypeErrorResult;
            tmp14 = throwTypeErrorResult;
            if (throwTypeErrorResult >= throwTypeErrorResult) {
              if (throwTypeErrorResult > throwTypeErrorResult) {
                arr = [];
              }
              throwTypeErrorResult = arr;
              throwTypeErrorResult = arr.push(throwTypeErrorResult);
              tmp47 = throwTypeErrorResult;
              tmp14 = throwTypeErrorResult;
            }
          }
        }
      }
      if (tmp47) {
        throwTypeErrorResult = throwTypeErrorResult + 1;
        throwTypeErrorResult = tmp2();
        if (str.substr(throwTypeErrorResult, 6) === c8) {
          throwTypeErrorResult = throwTypeErrorResult + 6;
        } else {
          throwTypeErrorResult = tmp13;
          if (0 === throwTypeErrorResult) {
            throwTypeErrorResult = tmp13;
            if (throwTypeErrorResult >= throwTypeErrorResult) {
              if (throwTypeErrorResult > throwTypeErrorResult) {
                arr = [];
              }
              throwTypeErrorResult = arr;
              throwTypeErrorResult = arr.push(throwTypeErrorResult);
              throwTypeErrorResult = tmp13;
            }
          }
        }
        if (throwTypeErrorResult !== tmp13) {
          throwTypeErrorResult = tmp2();
          throwTypeErrorResult = peg$parseNUM;
          throwTypeErrorResult = peg$parseNUM();
          if (throwTypeErrorResult !== tmp13) {
            throwTypeErrorResult = tmp2();
            if (41 === str.charCodeAt(throwTypeErrorResult)) {
              throwTypeErrorResult = c4;
              throwTypeErrorResult = throwTypeErrorResult + 1;
            } else {
              throwTypeErrorResult = tmp13;
              if (0 === throwTypeErrorResult) {
                throwTypeErrorResult = tmp13;
                if (throwTypeErrorResult >= throwTypeErrorResult) {
                  if (throwTypeErrorResult > throwTypeErrorResult) {
                    arr = [];
                  }
                  throwTypeErrorResult = arr;
                  throwTypeErrorResult = arr.push(throwTypeErrorResult);
                  throwTypeErrorResult = tmp13;
                }
              }
            }
            if (throwTypeErrorResult !== tmp13) {
              throwTypeErrorResult = tmp2();
              throwTypeErrorResult = peg$f6;
              if (typeof peg$f6 !== "function") {
                throwTypeErrorResult = HermesBuiltin.throwTypeError();
              }
              const obj6 = { skewX: null };
              throwTypeErrorResult = globalThis;
              const _HermesInternal3 = HermesInternal;
              obj6[0] = "" + throwTypeErrorResult + "deg";
              const items5 = [obj6];
              throwTypeErrorResult = items5;
            } else {
              throwTypeErrorResult = tmp13;
            }
          } else {
            throwTypeErrorResult = tmp13;
          }
        } else {
          throwTypeErrorResult = tmp13;
        }
        throwTypeErrorResult = throwTypeErrorResult - 1;
        throwTypeErrorResult = throwTypeErrorResult === tmp13;
        tmp47 = throwTypeErrorResult;
        tmp14 = throwTypeErrorResult;
        if (throwTypeErrorResult) {
          tmp47 = throwTypeErrorResult;
          tmp14 = throwTypeErrorResult;
          if (0 === throwTypeErrorResult) {
            tmp47 = throwTypeErrorResult;
            tmp14 = throwTypeErrorResult;
            if (throwTypeErrorResult >= throwTypeErrorResult) {
              if (throwTypeErrorResult > throwTypeErrorResult) {
                arr = [];
              }
              throwTypeErrorResult = arr;
              throwTypeErrorResult = arr.push(throwTypeErrorResult);
              tmp47 = throwTypeErrorResult;
              tmp14 = throwTypeErrorResult;
            }
          }
        }
      }
      if (tmp47) {
        throwTypeErrorResult = throwTypeErrorResult + 1;
        throwTypeErrorResult = tmp2();
        if (str.substr(throwTypeErrorResult, 6) === c9) {
          throwTypeErrorResult = throwTypeErrorResult + 6;
        } else {
          throwTypeErrorResult = tmp13;
          if (0 === throwTypeErrorResult) {
            throwTypeErrorResult = tmp13;
            if (throwTypeErrorResult >= throwTypeErrorResult) {
              if (throwTypeErrorResult > throwTypeErrorResult) {
                arr = [];
              }
              throwTypeErrorResult = arr;
              throwTypeErrorResult = arr.push(throwTypeErrorResult);
              throwTypeErrorResult = tmp13;
            }
          }
        }
        if (throwTypeErrorResult !== tmp13) {
          throwTypeErrorResult = tmp2();
          throwTypeErrorResult = peg$parseNUM;
          throwTypeErrorResult = peg$parseNUM();
          if (throwTypeErrorResult !== tmp13) {
            throwTypeErrorResult = tmp2();
            if (41 === str.charCodeAt(throwTypeErrorResult)) {
              throwTypeErrorResult = c4;
              throwTypeErrorResult = throwTypeErrorResult + 1;
            } else {
              throwTypeErrorResult = tmp13;
              if (0 === throwTypeErrorResult) {
                throwTypeErrorResult = tmp13;
                if (throwTypeErrorResult >= throwTypeErrorResult) {
                  if (throwTypeErrorResult > throwTypeErrorResult) {
                    arr = [];
                  }
                  throwTypeErrorResult = arr;
                  throwTypeErrorResult = arr.push(throwTypeErrorResult);
                  throwTypeErrorResult = tmp13;
                }
              }
            }
            if (throwTypeErrorResult !== tmp13) {
              throwTypeErrorResult = tmp2();
              throwTypeErrorResult = peg$f7;
              if (typeof peg$f7 !== "function") {
                throwTypeErrorResult = HermesBuiltin.throwTypeError();
              }
              const obj7 = { skewY: null };
              throwTypeErrorResult = globalThis;
              const _HermesInternal4 = HermesInternal;
              obj7[0] = "" + throwTypeErrorResult + "deg";
              const items6 = [obj7];
              throwTypeErrorResult = items6;
            } else {
              throwTypeErrorResult = tmp13;
            }
          } else {
            throwTypeErrorResult = tmp13;
          }
        } else {
          throwTypeErrorResult = tmp13;
        }
        throwTypeErrorResult = throwTypeErrorResult - 1;
        tmp14 = throwTypeErrorResult;
        if (throwTypeErrorResult === tmp13) {
          tmp14 = throwTypeErrorResult;
          if (0 === throwTypeErrorResult) {
            tmp14 = throwTypeErrorResult;
            if (throwTypeErrorResult >= throwTypeErrorResult) {
              if (throwTypeErrorResult > throwTypeErrorResult) {
                arr = [];
              }
              throwTypeErrorResult = arr;
              throwTypeErrorResult = arr.push(throwTypeErrorResult);
              tmp14 = throwTypeErrorResult;
            }
          }
        }
      }
      throwTypeErrorResult = throwTypeErrorResult - 1;
      if (tmp14 === tmp13) {
        if (0 === throwTypeErrorResult) {
          if (throwTypeErrorResult >= throwTypeErrorResult) {
            if (throwTypeErrorResult > throwTypeErrorResult) {
              arr = [];
            }
            throwTypeErrorResult = arr;
            throwTypeErrorResult = arr.push(throwTypeErrorResult);
          }
        }
      }
      return tmp14;
    }
    function peg$parsespaceOrComma() {
      let tmp17;
      diff = diff + 1;
      const charAtResult = str.charAt(closure_50);
      if (regex.test(charAtResult)) {
        closure_50 = closure_50 + 1;
        let tmp4 = charAtResult;
      } else {
        tmp4 = obj;
        if (0 === diff) {
          tmp4 = tmp2;
          if (closure_50 >= closure_53) {
            if (tmp6 > closure_53) {
              closure_53 = tmp6;
              let arr = [];
            }
            arr = arr.push(tmp5);
            tmp4 = tmp2;
          }
        }
      }
      const items = [];
      if (tmp4 !== obj) {
        do {
          arr = items.push(tmp4);
          let tmp11 = str;
          let tmp12 = closure_50;
          let charAtResult1 = str.charAt(closure_50);
          let tmp14 = regex;
          if (regex.test(charAtResult1)) {
            let tmp22 = closure_50;
            closure_50 = closure_50 + 1;
            tmp17 = charAtResult1;
          } else {
            let tmp15 = obj;
            let tmp16 = diff;
            tmp17 = obj;
            if (0 === diff) {
              let tmp19 = closure_50;
              tmp17 = tmp15;
              if (closure_50 >= closure_53) {
                if (tmp19 > closure_53) {
                  closure_53 = tmp19;
                  arr = [];
                }
                let tmp20 = arr;
                let arr1 = arr.push(tmp18);
                tmp17 = tmp15;
              }
            }
          }
          let tmp23 = obj;
          tmp4 = tmp17;
        } while (tmp17 !== obj);
      }
      diff = diff - 1;
      if (0 === diff) {
        if (closure_50 >= closure_53) {
          if (tmp26 > closure_53) {
            closure_53 = tmp26;
            arr = [];
          }
          arr.push(tmp25);
        }
      }
      return items;
    }
    function peg$parse_() {
      let tmp17;
      diff = diff + 1;
      const charAtResult = str.charAt(closure_50);
      if (regex2.test(charAtResult)) {
        closure_50 = closure_50 + 1;
        let tmp4 = charAtResult;
      } else {
        tmp4 = obj;
        if (0 === diff) {
          tmp4 = tmp2;
          if (closure_50 >= closure_53) {
            if (tmp6 > closure_53) {
              closure_53 = tmp6;
              let arr = [];
            }
            arr = arr.push(tmp5);
            tmp4 = tmp2;
          }
        }
      }
      const items = [];
      if (tmp4 !== obj) {
        do {
          arr = items.push(tmp4);
          let tmp11 = str;
          let tmp12 = closure_50;
          let charAtResult1 = str.charAt(closure_50);
          let tmp14 = regex2;
          if (regex2.test(charAtResult1)) {
            let tmp22 = closure_50;
            closure_50 = closure_50 + 1;
            tmp17 = charAtResult1;
          } else {
            let tmp15 = obj;
            let tmp16 = diff;
            tmp17 = obj;
            if (0 === diff) {
              let tmp19 = closure_50;
              tmp17 = tmp15;
              if (closure_50 >= closure_53) {
                if (tmp19 > closure_53) {
                  closure_53 = tmp19;
                  arr = [];
                }
                let tmp20 = arr;
                let arr1 = arr.push(tmp18);
                tmp17 = tmp15;
              }
            }
          }
          let tmp23 = obj;
          tmp4 = tmp17;
        } while (tmp17 !== obj);
      }
      diff = diff - 1;
      if (0 === diff) {
        if (closure_50 >= closure_53) {
          if (tmp26 > closure_53) {
            closure_53 = tmp26;
            arr = [];
          }
          arr.push(tmp25);
        }
      }
      return items;
    }
    function peg$parseNUM() {
      let tmp27;
      let tmp65;
      let tmp88;
      if (regex3.test(str.charAt(charAtResult4))) {
        charAtResult4 = charAtResult4 + 1;
      } else if (0 === closure_55) {
        if (charAtResult4 >= charAtResult4) {
          if (tmp4 > charAtResult4) {
            charAtResult4 = tmp4;
            let arr = [];
          }
          arr = arr.push(tmp3);
        }
      }
      let tmp8 = obj;
      const charAtResult = str.charAt(charAtResult4);
      if (regex4.test(charAtResult)) {
        charAtResult4 = charAtResult4 + 1;
        let tmp13 = charAtResult;
      } else {
        tmp13 = tmp8;
        if (0 === closure_55) {
          tmp13 = tmp8;
          if (charAtResult4 >= charAtResult4) {
            if (tmp15 > charAtResult4) {
              charAtResult4 = tmp15;
              arr = [];
            }
            arr = arr.push(tmp14);
            tmp13 = tmp8;
          }
        }
      }
      const items = [];
      let tmp19 = str;
      obj = regex4;
      let str2 = str;
      if (tmp13 !== tmp8) {
        do {
          let arr1 = items.push(tmp13);
          let tmp21 = str;
          let tmp22 = charAtResult4;
          let charAtResult1 = str.charAt(charAtResult4);
          let tmp24 = regex4;
          if (regex4.test(charAtResult1)) {
            let tmp32 = charAtResult4;
            charAtResult4 = charAtResult4 + 1;
            tmp27 = charAtResult1;
          } else {
            let tmp25 = obj;
            let tmp26 = closure_55;
            tmp27 = obj;
            if (0 === closure_55) {
              let tmp29 = charAtResult4;
              tmp27 = tmp25;
              if (charAtResult4 >= charAtResult4) {
                if (tmp29 > charAtResult4) {
                  charAtResult4 = tmp29;
                  arr = [];
                }
                let tmp30 = arr;
                let arr2 = arr.push(tmp28);
                tmp27 = tmp25;
              }
            }
          }
          tmp8 = obj;
          tmp13 = tmp27;
          tmp19 = tmp21;
          obj = tmp24;
          str2 = tmp21;
        } while (tmp27 !== obj);
      }
      if (46 === str2.charCodeAt(charAtResult4)) {
        let tmp34 = c10;
        charAtResult4 = charAtResult4 + 1;
      } else {
        tmp34 = tmp8;
        if (0 === closure_55) {
          tmp34 = tmp8;
          if (charAtResult4 >= charAtResult4) {
            if (tmp36 > charAtResult4) {
              charAtResult4 = tmp36;
              arr = [];
            }
            arr.push(tmp35);
            tmp34 = tmp8;
          }
        }
      }
      if (tmp34 !== tmp8) {
        const charAtResult2 = str2.charAt(charAtResult4);
        if (obj.test(charAtResult2)) {
          charAtResult4 = charAtResult4 + 1;
          let tmp46 = charAtResult2;
        } else {
          tmp46 = tmp8;
          if (0 === closure_55) {
            tmp46 = tmp8;
            if (charAtResult4 >= charAtResult4) {
              if (tmp48 > charAtResult4) {
                charAtResult4 = tmp48;
                arr = [];
              }
              arr.push(tmp47);
              tmp46 = tmp8;
            }
          }
        }
        let tmp53 = tmp19;
        let tmp54 = tmp8;
        let tmp55 = obj;
        let tmp56 = str2;
        let tmp57 = tmp8;
        if (tmp46 !== tmp8) {
          const items1 = [];
          tmp53 = tmp19;
          tmp54 = items1;
          tmp55 = obj;
          tmp56 = str2;
          tmp57 = tmp8;
          if (tmp52) {
            do {
              let arr5 = items1.push(tmp46);
              let tmp59 = str;
              let tmp60 = charAtResult4;
              let charAtResult3 = str.charAt(charAtResult4);
              let tmp62 = regex4;
              if (regex4.test(charAtResult3)) {
                let tmp70 = charAtResult4;
                charAtResult4 = charAtResult4 + 1;
                tmp65 = charAtResult3;
              } else {
                let tmp63 = obj;
                let tmp64 = closure_55;
                tmp65 = obj;
                if (0 === closure_55) {
                  let tmp67 = charAtResult4;
                  tmp65 = tmp63;
                  if (charAtResult4 >= charAtResult4) {
                    if (tmp67 > charAtResult4) {
                      charAtResult4 = tmp67;
                      arr = [];
                    }
                    let tmp68 = arr;
                    let arr6 = arr.push(tmp66);
                    tmp65 = tmp63;
                  }
                }
              }
              tmp57 = obj;
              tmp46 = tmp65;
              tmp53 = tmp59;
              tmp54 = items1;
              tmp55 = tmp62;
              tmp56 = tmp59;
            } while (tmp65 !== obj);
          }
        }
        if (tmp54 !== tmp57) {
          const items2 = [items, tmp34, tmp54];
          let tmp40 = tmp53;
          let tmp41 = items2;
          let obj2 = tmp55;
          let str3 = tmp56;
          let tmp42 = tmp57;
        } else {
          charAtResult4 = tmp9;
          tmp40 = tmp53;
          tmp41 = tmp57;
          obj2 = tmp55;
          str3 = tmp56;
          tmp42 = tmp57;
        }
      } else {
        charAtResult4 = tmp9;
        tmp40 = tmp19;
        tmp41 = tmp8;
        obj2 = obj;
        str3 = str2;
        tmp42 = tmp8;
      }
      let tmp71 = tmp40;
      let obj3 = obj2;
      let str4 = str3;
      let tmp72 = tmp42;
      if (tmp41 === tmp42) {
        charAtResult4 = str3.charAt(charAtResult4);
        if (obj2.test(charAtResult4)) {
          charAtResult4 = charAtResult4 + 1;
          let tmp74 = charAtResult4;
        } else {
          tmp74 = tmp42;
          if (0 === closure_55) {
            tmp74 = tmp42;
            if (charAtResult4 >= charAtResult4) {
              if (tmp76 > charAtResult4) {
                charAtResult4 = tmp76;
                arr = [];
              }
              arr.push(tmp75);
              tmp74 = tmp42;
            }
          }
        }
        tmp71 = tmp40;
        tmp41 = tmp42;
        obj3 = obj2;
        str4 = str3;
        tmp72 = tmp42;
        if (tmp74 !== tmp42) {
          const items3 = [];
          tmp71 = tmp40;
          tmp41 = items3;
          obj3 = obj2;
          str4 = str3;
          tmp72 = tmp42;
          if (tmp80) {
            do {
              let arr8 = items3.push(tmp74);
              let tmp82 = str;
              let tmp83 = charAtResult4;
              let charAtResult5 = str.charAt(charAtResult4);
              let tmp85 = regex4;
              if (regex4.test(charAtResult5)) {
                let tmp93 = charAtResult4;
                charAtResult4 = charAtResult4 + 1;
                tmp88 = charAtResult5;
              } else {
                let tmp86 = obj;
                let tmp87 = closure_55;
                tmp88 = obj;
                if (0 === closure_55) {
                  let tmp90 = charAtResult4;
                  tmp88 = tmp86;
                  if (charAtResult4 >= charAtResult4) {
                    if (tmp90 > charAtResult4) {
                      charAtResult4 = tmp90;
                      arr = [];
                    }
                    let tmp91 = arr;
                    let arr9 = arr.push(tmp89);
                    tmp88 = tmp86;
                  }
                }
              }
              tmp72 = obj;
              tmp74 = tmp88;
              tmp71 = tmp82;
              tmp41 = items3;
              obj3 = tmp85;
              str4 = tmp82;
            } while (tmp88 !== obj);
          }
        }
      }
      if (tmp41 !== tmp72) {
        if (101 === str4.charCodeAt(charAtResult4)) {
          let tmp98 = e;
          charAtResult4 = charAtResult4 + 1;
        } else {
          tmp98 = tmp72;
          if (0 === closure_55) {
            tmp98 = tmp72;
            if (charAtResult4 >= charAtResult4) {
              if (charAtResult4 > charAtResult4) {
                arr = [];
              }
              charAtResult4 = arr;
              charAtResult4 = arr.push(tmp99);
              tmp98 = tmp72;
            }
          }
        }
        if (tmp98 !== tmp72) {
          charAtResult4 = str4.charAt(charAtResult4);
          charAtResult4 = regex3;
          if (regex3.test(charAtResult4)) {
            charAtResult4 = charAtResult4 + 1;
          } else {
            charAtResult4 = closure_55;
            charAtResult4 = tmp72;
            if (0 === closure_55) {
              charAtResult4 = tmp72;
              if (charAtResult4 >= charAtResult4) {
                if (charAtResult4 > charAtResult4) {
                  arr = [];
                }
                charAtResult4 = arr;
                charAtResult4 = arr.push(charAtResult4);
                charAtResult4 = tmp72;
              }
            }
          }
          if (charAtResult4 === tmp72) {
            charAtResult4 = null;
          }
          charAtResult4 = str4.charAt(charAtResult4);
          if (obj3.test(charAtResult4)) {
            charAtResult4 = charAtResult4 + 1;
          } else {
            charAtResult4 = closure_55;
            charAtResult4 = tmp72;
            if (0 === closure_55) {
              charAtResult4 = tmp72;
              if (charAtResult4 >= charAtResult4) {
                if (charAtResult4 > charAtResult4) {
                  arr = [];
                }
                charAtResult4 = arr;
                charAtResult4 = arr.push(charAtResult4);
                charAtResult4 = tmp72;
              }
            }
          }
          charAtResult4 = charAtResult4 !== tmp72;
          charAtResult4 = tmp71;
          charAtResult4 = tmp72;
          charAtResult4 = tmp72;
          if (charAtResult4) {
            const items4 = [];
            charAtResult4 = tmp71;
            charAtResult4 = items4;
            charAtResult4 = tmp72;
            if (charAtResult4) {
              do {
                charAtResult4 = items4.push(charAtResult4);
                charAtResult4 = str;
                charAtResult4 = str.charAt(charAtResult4);
                charAtResult4 = regex4;
                if (regex4.test(charAtResult4)) {
                  charAtResult4 = charAtResult4 + 1;
                } else {
                  charAtResult4 = obj;
                  charAtResult4 = closure_55;
                  charAtResult4 = obj;
                  if (0 === closure_55) {
                    if (charAtResult4 >= charAtResult4) {
                      if (charAtResult4 > charAtResult4) {
                        arr = [];
                      }
                      charAtResult4 = arr;
                      charAtResult4 = arr.push(charAtResult4);
                    }
                  }
                }
                charAtResult4 = obj;
                charAtResult4 = items4;
              } while (charAtResult4 !== obj);
            }
          }
          if (charAtResult4 !== charAtResult4) {
            const items5 = [tmp98, charAtResult4, charAtResult4];
            let str5 = charAtResult4;
          } else {
            charAtResult4 = tmp95;
            str5 = charAtResult4;
          }
        } else {
          charAtResult4 = tmp95;
          str5 = tmp71;
        }
        charAtResult4 = peg$f8;
        if (typeof peg$f8 !== "function") {
          charAtResult4 = HermesBuiltin.throwTypeError();
        }
        charAtResult4 = globalThis;
        const _parseFloat = parseFloat;
        let parsed = parseFloat(str5.substring(charAtResult4, charAtResult4));
      } else {
        parsed = tmp72;
      }
      return parsed;
    }
    obj = {};
    if (undefined === arg1) {
      obj = {};
    }
    function peg$parsestart() {
      let tmp19;
      let tmp20;
      diff1 = diff1 + 1 + 1;
      const tmp3 = peg$parsefunction();
      if (tmp3 !== obj) {
        const tmp2Result = peg$parsefunction();
        if (tmp2Result !== tmp4) {
          let items = [tmp9, tmp2Result];
          let tmp11 = items;
        } else {
          let closure_50 = tmp7;
          tmp11 = tmp4;
        }
        const items1 = [];
        let tmp12 = tmp4;
        if (tmp11 !== tmp4) {
          do {
            let arr = items1.push(tmp11);
            let tmp15 = peg$parse_;
            let tmp14 = closure_50;
            let tmp17 = peg$parsefunction;
            let tmp16 = peg$parse_();
            let tmp18 = peg$parsefunction();
            tmp19 = obj;
            if (tmp18 !== obj) {
              let items2 = [tmp16, tmp18];
              tmp20 = items2;
            } else {
              closure_50 = tmp14;
              tmp20 = tmp19;
            }
            tmp11 = tmp20;
            tmp12 = tmp19;
          } while (tmp20 !== tmp19);
        }
        let closure_51 = tmp;
        if (typeof peg$f0 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _Array = Array;
        let tmp23 = tmp3;
        if (!Array.isArray(tmp3)) {
          const items3 = [tmp3];
          tmp23 = items3;
        }
        let closure_0 = tmp23;
        const item = items1.forEach((arg0) => {
          const push = tmp23.push;
          if (Array.isArray(arg0[1])) {
            const items = [];
            HermesBuiltin.arraySpread(tmp2, 0);
            HermesBuiltin.apply(items, tmp);
          } else {
            push(tmp2);
          }
        });
        let tmp6 = tmp23;
        let tmp5 = tmp12;
        tmp7 = closure_50;
        tmp9 = peg$parse_();
      } else {
        closure_50 = tmp;
        tmp5 = tmp4;
        tmp6 = tmp4;
      }
      const diff = diff1 - 1;
      diff1 = diff;
      if (tmp6 === tmp5) {
        if (0 === diff) {
          if (closure_50 >= closure_53) {
            if (tmp28 > closure_53) {
              closure_53 = tmp28;
              arr = [];
            }
            arr = arr.push(tmp27);
          }
        }
      }
      diff1 = diff1 - 1;
      if (tmp6 === tmp5) {
        if (0 === diff1) {
          if (closure_50 >= closure_53) {
            if (tmp33 > closure_53) {
              closure_53 = tmp33;
              arr = [];
            }
            arr.push(tmp32);
          }
        }
      }
      return tmp6;
    }
    const grammarSource = obj.grammarSource;
    obj = { start: peg$parsestart };
    let c3 = "matrix(";
    let c4 = ")";
    let c5 = "translate(";
    let c6 = "scale(";
    let c7 = "rotate(";
    let c8 = "skewX(";
    let c9 = "skewY(";
    let c10 = ".";
    const e = "e";
    const re12 = /^[ \t\n\r,]/;
    const re13 = /^[ \t\n\r]/;
    const re14 = /^[+\-]/;
    const re15 = /^[0-9]/;
    let closure_16 = { type: "other", description: "transform functions" };
    let closure_17 = { type: "other", description: "transformFunctions" };
    let closure_18 = { type: "other", description: "transform function" };
    let closure_19 = { type: "other", description: "matrix" };
    let closure_20 = { type: "literal", text: "matrix(", ignoreCase: false };
    let closure_21 = { type: "literal", text: ")", ignoreCase: false };
    let closure_22 = { type: "other", description: "translate" };
    let closure_23 = { type: "literal", text: "translate(", ignoreCase: false };
    let closure_24 = { type: "other", description: "scale" };
    let closure_25 = { type: "literal", text: "scale(", ignoreCase: false };
    let closure_26 = { type: "other", description: "rotate" };
    let closure_27 = { type: "literal", text: "rotate(", ignoreCase: false };
    let closure_28 = { type: "other", description: "x, y" };
    let closure_29 = { type: "other", description: "skewX" };
    let closure_30 = { type: "literal", text: "skewX(", ignoreCase: false };
    let closure_31 = { type: "other", description: "skewY" };
    let closure_32 = { type: "literal", text: "skewY(", ignoreCase: false };
    let closure_33 = { type: "other", description: "space or comma" };
    let closure_34 = { type: "class", parts: [" ", "\t", "\n", "\r", ","], inverted: false, ignoreCase: false };
    let closure_35 = { type: "other", description: "whitespace" };
    let closure_36 = { type: "class", parts: [" ", "\t", "\n", "\r"], inverted: false, ignoreCase: false };
    let closure_37 = { type: "class", parts: ["+", "-"], inverted: false, ignoreCase: false };
    let items = [["0", "9"]];
    let closure_38 = { type: "class", parts: items, inverted: false, ignoreCase: false };
    let closure_39 = { type: "literal", text: ".", ignoreCase: false };
    let closure_40 = { type: "literal", text: "e", ignoreCase: false };
    function peg$f0(arg0, arg1) {

    }
    function peg$f1(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {

    }
    function peg$f2(arg0, arg1) {

    }
    function peg$f3(arg0, arg1) {

    }
    function peg$f4(arg0, arg1) {

    }
    function peg$f5(arg0, arg1) {

    }
    function peg$f6(arg0) {

    }
    function peg$f7(arg0) {

    }
    function peg$f8() {

    }
    let closure_50 = tmp;
    let closure_51 = tmp;
    let items1 = [{ line: 1, column: 1 }];
    let closure_53 = tmp;
    let arr = obj.peg$maxFailExpected || [];
    let closure_55 = obj.peg$silentFails | 0;
    if (obj.startRule) {
      if (obj.startRule in obj) {
        peg$parsestart = obj[obj.startRule];
      } else {
        const _Error = Error;
        const error = new Error("Can't start parsing from rule \"" + obj.startRule + "\".");
        throw error;
      }
    }
    const result = peg$parsestart();
    if (obj.peg$library) {
      let obj1 = { peg$result: null, peg$currPos: null, peg$FAILED: null, peg$maxFailExpected: null, peg$maxFailPos: null };
      obj1[0] = result;
      obj1[1] = closure_50;
      obj1[2] = obj;
      obj1[3] = arr;
      obj1[4] = closure_53;
      return obj1;
    } else {
      let tmp8 = result !== obj;
      if (tmp8) {
        if (closure_50 === str.length) {
          return result;
        }
      }
      if (tmp8) {
        tmp8 = closure_50 < str.length;
      }
      if (tmp8) {
        if (closure_50 >= closure_53) {
          if (tmp11 > closure_53) {
            closure_53 = tmp11;
            arr = [];
          }
          arr = arr.push({ type: "end" });
        }
      }
      let charAtResult = null;
      if (closure_53 < str.length) {
        charAtResult = str.charAt(closure_53);
      }
      function peg$computeLocation(closure_53, closure_532) {
        let tmp = items1[closure_53];
        let arr2 = items1;
        if (!tmp) {
          if (closure_53 >= arr.length) {
            let diff = arr.length - 1;
            let tmp5 = arr;
          } else {
            const diff1 = closure_53 - 1;
            let tmp3 = diff1;
            diff = diff1;
            tmp5 = arr;
            if (!arr[diff1]) {
              const diff2 = tmp3 - 1;
              tmp3 = diff2;
              diff = diff2;
              tmp5 = items1;
            }
          }
          let obj = { line: null, column: null };
          ({ line: obj[0], column: obj[1] } = tmp5[diff]);
          if (diff < closure_53) {
            do {
              let tmp8 = str;
              let tmp9 = diff;
              if (10 === str.charCodeAt(diff)) {
                obj.line = obj.line + 1;
                obj.column = 1;
              } else {
                obj.column = obj.column + 1;
              }
              diff = diff + 1;
            } while (diff < closure_53);
          }
          items1[closure_53] = obj;
          arr2 = items1;
          tmp = obj;
        }
        let tmp11 = arr2[closure_532];
        if (!tmp11) {
          if (closure_532 >= arr2.length) {
            let diff3 = arr2.length - 1;
            let tmp15 = arr2;
          } else {
            const diff4 = closure_532 - 1;
            let tmp13 = diff4;
            diff3 = diff4;
            tmp15 = arr2;
            if (!arr2[diff4]) {
              const diff5 = tmp13 - 1;
              tmp13 = diff5;
              diff3 = diff5;
              tmp15 = items1;
            }
          }
          obj = { line: null, column: null };
          ({ line: obj2[0], column: obj2[1] } = tmp15[diff3]);
          if (diff3 < closure_532) {
            do {
              let tmp18 = str;
              let tmp19 = diff3;
              if (10 === str.charCodeAt(diff3)) {
                obj.line = obj.line + 1;
                obj.column = 1;
              } else {
                obj.column = obj.column + 1;
              }
              diff3 = diff3 + 1;
            } while (diff3 < closure_532);
          }
          items1[closure_532] = obj;
          tmp11 = obj;
        }
        obj = { source: grammarSource, start: obj1, end: obj2 };
        obj2 = { offset: closure_532, line: tmp11.line, column: tmp11.column };
        return obj;
      }
      if (closure_53 < str.length) {
        let result1 = peg$computeLocation(closure_53, closure_53 + 1);
      } else {
        result1 = peg$computeLocation(closure_53, closure_53);
      }
      const message = pegSyntaxError.buildMessage(tmp14, charAtResult);
      const _Error2 = Error;
      let tmp26 = typeof call === "unknown" ? _Error2(message) : call(Object.create(pegSyntaxError.prototype), message);
      const _Object = Object;
      if (Object.setPrototypeOf) {
        const _Object2 = Object;
        Object.setPrototypeOf(tmp26, pegSyntaxError.prototype);
      }
      tmp26.expected = arr;
      tmp26.found = charAtResult;
      tmp26.location = result1;
      tmp26.name = "SyntaxError";
      throw tmp26;
    }
  }
};

export default obj;