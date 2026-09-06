// === Module 8464: ? ===

// Module 8464
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
          str6 = `${` ${" ".repeat(tmp10)}`.slice(0, tmp10)}`;
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
          str13 = `${` ${" ".repeat(tmp18)}`.slice(0, tmp18)}`;
        }
        length6 = "".length;
        str15 = "";
        if ("".length <= tmp12) {
          length7 = "".length;
          diff3 = tmp12 - "".length;
          str16 = "^";
          repeat3 = "^".repeat;
          text5 = `^${"^".repeat(tmp20)}`;
          str15 = `${`^${"^".repeat(tmp20)}`.slice(0, tmp20)}`;
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
            const str2 = text.text.replace(/\\/g, "\\\\");
            const str3 = text.text.replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
            const str4 = text.text.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0");
            const str5 = text.text.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t");
            const str6 = text.text.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n");
            const str7 = text.text.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r");
            return "\"" + text.text.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (str) => {
              str = str.charCodeAt(0);
              return "\\x0" + str.toString(16).toUpperCase();
            }).replace(/[\x10-\x1F\x7F-\x9F]/g, (str) => {
              str = str.charCodeAt(0);
              return "\\x" + str.toString(16).toUpperCase();
            }) + "\"";
          },
      class(parts) {
            parts = parts.parts;
            const mapped = parts.map((item) => {
              if (Array.isArray(item)) {
                const str20 = item[0].replace(/\\/g, "\\\\");
                const str22 = item[0].replace(/\\/g, "\\\\").replace(/\]/g, "\\]");
                const str24 = item[0].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^");
                const str26 = item[0].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-");
                const str28 = item[0].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0");
                const str30 = item[0].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t");
                const str32 = item[0].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n");
                const str35 = item[0].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (str) => {
                  str = str.charCodeAt(0);
                  return "\\x0" + str.toString(16).toUpperCase();
                });
                const text = `${str35.replace(/[\x10-\x1F\x7F-\x9F]/g, (str) => {
                  str = str.charCodeAt(0);
                  return "\\x" + str.toString(16).toUpperCase();
                })}-`;
                const str34 = item[0].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r");
                const str38 = item[1].replace(/\\/g, "\\\\");
                const str39 = item[1].replace(/\\/g, "\\\\").replace(/\]/g, "\\]");
                const str40 = item[1].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^");
                const str41 = item[1].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-");
                const str42 = item[1].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0");
                const str43 = item[1].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t");
                const str44 = item[1].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n");
                const str45 = item[1].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r");
                let text1 = `${str35.replace(/[\x10-\x1F\x7F-\x9F]/g, (str) => {
                  str = str.charCodeAt(0);
                  return "\\x" + str.toString(16).toUpperCase();
                })}-${item[1].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (str) => {
                  str = str.charCodeAt(0);
                  return "\\x0" + str.toString(16).toUpperCase();
                }).replace(/[\x10-\x1F\x7F-\x9F]/g, (str) => {
                  str = str.charCodeAt(0);
                  return "\\x" + str.toString(16).toUpperCase();
                })}`;
                const str46 = item[1].replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (str) => {
                  str = str.charCodeAt(0);
                  return "\\x0" + str.toString(16).toUpperCase();
                });
              } else {
                const str2 = item.replace(/\\/g, "\\\\");
                const str4 = item.replace(/\\/g, "\\\\").replace(/\]/g, "\\]");
                const str6 = item.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^");
                const str8 = item.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-");
                const str10 = item.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0");
                const str12 = item.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t");
                const str14 = item.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n");
                const str16 = item.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r");
                text1 = item.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (str) => {
                  str = str.charCodeAt(0);
                  return "\\x0" + str.toString(16).toUpperCase();
                }).replace(/[\x10-\x1F\x7F-\x9F]/g, (str) => {
                  str = str.charCodeAt(0);
                  return "\\x" + str.toString(16).toUpperCase();
                });
                const str17 = item.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (str) => {
                  str = str.charCodeAt(0);
                  return "\\x0" + str.toString(16).toUpperCase();
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
    closure_0 = obj;
    mapped = global.map(function describeExpectation(item) {
      return obj[item.type](item);
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
        substr = mapped.slice(0, -1);
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
        return "\\x0" + str.toString(16).toUpperCase();
      });
      str18 = "\"";
      str4 = `${"\"" + str17.replace(/[\x10-\x1F\x7F-\x9F]/g, (str) => {
        str = str.charCodeAt(0);
        return "\\x" + str.toString(16).toUpperCase();
      })}"`;
    }
    return text + " but " + str4 + " found.";
  }
}
let closure_129_0 = peg$SyntaxError;
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
  parse: function peg$parse(str, peg$FAILED) {
    function peg$parsefunction() {
      diff = diff + 1 + 1;
      peg$parse_();
      if (str.substr(closure_50, 7) === c3) {
        closure_50 = closure_50 + 7;
        let tmp7 = tmp4;
      } else {
        tmp7 = obj;
        if (0 === diff) {
          tmp7 = tmp5;
          if (closure_50 >= closure_53) {
            if (tmp9 > closure_53) {
              closure_53 = tmp9;
              closure_54 = [];
            }
            closure_54.push(tmp8);
            tmp7 = tmp5;
          }
        }
      }
      const tmp13 = obj;
      if (tmp7 !== obj) {
        peg$parse_();
        const tmp17 = peg$parseNUM();
        if (tmp17 !== tmp13) {
          peg$parsespaceOrComma();
          let tmp16Result = peg$parseNUM();
          if (tmp16Result !== tmp13) {
            peg$parsespaceOrComma();
            tmp16Result = peg$parseNUM();
            if (tmp16Result !== tmp13) {
              peg$parsespaceOrComma();
              const tmp16Result1 = peg$parseNUM();
              if (tmp16Result1 !== tmp13) {
                peg$parsespaceOrComma();
                const tmp16Result2 = peg$parseNUM();
                if (tmp16Result2 !== tmp13) {
                  peg$parsespaceOrComma();
                  const tmp16Result3 = peg$parseNUM();
                  if (tmp16Result3 !== tmp13) {
                    peg$parsespaceOrComma();
                    const tmp16Result4 = peg$parseNUM();
                    if (tmp16Result4 !== tmp13) {
                      peg$parsespaceOrComma();
                      const tmp16Result5 = peg$parseNUM();
                      if (tmp16Result5 !== tmp13) {
                        peg$parsespaceOrComma();
                        const tmp16Result6 = peg$parseNUM();
                        if (tmp16Result6 !== tmp13) {
                          peg$parse_();
                          if (41 === str.charCodeAt(closure_50)) {
                            let tmp38 = c4;
                            closure_50 = closure_50 + 1;
                          } else {
                            tmp38 = tmp13;
                            if (0 === diff) {
                              tmp38 = tmp13;
                              if (closure_50 >= closure_53) {
                                if (tmp40 > closure_53) {
                                  closure_53 = tmp40;
                                  closure_54 = [];
                                }
                                closure_54.push(tmp39);
                                tmp38 = tmp13;
                              }
                            }
                          }
                          if (tmp38 !== tmp13) {
                            peg$parse_();
                            closure_51 = tmp;
                            if (typeof peg$f1 === "function") {
                              obj = { matrix: null };
                              const items = [tmp17, tmp16Result, tmp16Result, tmp16Result1, tmp16Result2, tmp16Result3, tmp16Result4, tmp16Result5, tmp16Result6];
                              obj.matrix = items;
                              let tmp14 = obj;
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            closure_50 = tmp;
                            tmp14 = tmp13;
                          }
                        } else {
                          closure_50 = tmp;
                          tmp14 = tmp13;
                        }
                      } else {
                        closure_50 = tmp;
                        tmp14 = tmp13;
                      }
                    } else {
                      closure_50 = tmp;
                      tmp14 = tmp13;
                    }
                  } else {
                    closure_50 = tmp;
                    tmp14 = tmp13;
                  }
                } else {
                  closure_50 = tmp;
                  tmp14 = tmp13;
                }
              } else {
                closure_50 = tmp;
                tmp14 = tmp13;
              }
            } else {
              closure_50 = tmp;
              tmp14 = tmp13;
            }
          } else {
            closure_50 = tmp;
            tmp14 = tmp13;
          }
        } else {
          closure_50 = tmp;
          tmp14 = tmp13;
        }
      } else {
        closure_50 = tmp;
        tmp14 = tmp13;
      }
      diff = diff - 1;
      let tmp47 = tmp14 === tmp13;
      if (tmp47) {
        if (0 === diff) {
          if (closure_50 >= closure_53) {
            if (tmp49 > closure_53) {
              closure_53 = tmp49;
              closure_54 = [];
            }
            closure_54.push(tmp48);
          }
        }
      }
      if (tmp47) {
        diff = diff + 1;
        peg$parse_();
        if (str.substr(closure_50, 10) === c5) {
          closure_50 = closure_50 + 10;
          let tmp58 = tmp56;
        } else {
          tmp58 = tmp13;
          if (0 === diff) {
            tmp58 = tmp13;
            if (closure_50 >= closure_53) {
              if (tmp60 > closure_53) {
                closure_53 = tmp60;
                closure_54 = [];
              }
              closure_54.push(tmp59);
              tmp58 = tmp13;
            }
          }
        }
        if (tmp58 !== tmp13) {
          peg$parse_();
          const tmp67 = peg$parseNUM();
          if (tmp67 !== tmp13) {
            peg$parsespaceOrComma();
            let tmp66Result = peg$parseNUM();
            if (tmp66Result === tmp13) {
              tmp66Result = null;
            }
            peg$parse_();
            if (41 === str.charCodeAt(closure_50)) {
              let tmp74 = c4;
              closure_50 = closure_50 + 1;
            } else {
              tmp74 = tmp13;
              if (0 === diff) {
                tmp74 = tmp13;
                if (closure_50 >= closure_53) {
                  if (tmp76 > closure_53) {
                    closure_53 = tmp76;
                    closure_54 = [];
                  }
                  closure_54.push(tmp75);
                  tmp74 = tmp13;
                }
              }
            }
            if (tmp74 !== tmp13) {
              peg$parse_();
              closure_51 = tmp53;
              if (typeof peg$f2 === "function") {
                if (null == tmp66Result) {
                  obj = { translate: tmp67 };
                } else {
                  obj = { translate: null };
                  items1 = [tmp67, tmp66Result];
                  obj.translate = items1;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              closure_50 = tmp53;
              let tmp64 = tmp13;
            }
          } else {
            closure_50 = tmp53;
            tmp64 = tmp13;
          }
        } else {
          closure_50 = tmp53;
          tmp64 = tmp13;
        }
        const diff1 = diff - 1;
        diff = diff1;
        tmp47 = tmp86;
        tmp14 = tmp64;
        if (tmp64 === tmp13) {
          tmp47 = tmp86;
          tmp14 = tmp64;
          if (0 === diff1) {
            tmp47 = tmp86;
            tmp14 = tmp64;
            if (closure_50 >= closure_53) {
              if (tmp88 > closure_53) {
                closure_53 = tmp88;
                closure_54 = [];
              }
              closure_54.push(tmp87);
              tmp47 = tmp86;
              tmp14 = tmp64;
            }
          }
        }
      }
      if (tmp47) {
        diff = diff + 1;
        peg$parse_();
        if (str.substr(closure_50, 6) === c6) {
          closure_50 = closure_50 + 6;
          let tmp97 = tmp95;
        } else {
          tmp97 = tmp13;
          if (0 === diff) {
            tmp97 = tmp13;
            if (closure_50 >= closure_53) {
              if (tmp99 > closure_53) {
                closure_53 = tmp99;
                closure_54 = [];
              }
              closure_54.push(tmp98);
              tmp97 = tmp13;
            }
          }
        }
        if (tmp97 !== tmp13) {
          peg$parse_();
          const tmp106 = peg$parseNUM();
          if (tmp106 !== tmp13) {
            peg$parsespaceOrComma();
            let tmp105Result = peg$parseNUM();
            if (tmp105Result === tmp13) {
              tmp105Result = null;
            }
            peg$parse_();
            if (41 === str.charCodeAt(closure_50)) {
              let tmp113 = c4;
              closure_50 = closure_50 + 1;
            } else {
              tmp113 = tmp13;
              if (0 === diff) {
                tmp113 = tmp13;
                if (closure_50 >= closure_53) {
                  if (tmp115 > closure_53) {
                    closure_53 = tmp115;
                    closure_54 = [];
                  }
                  closure_54.push(tmp114);
                  tmp113 = tmp13;
                }
              }
            }
            if (tmp113 !== tmp13) {
              peg$parse_();
              closure_51 = tmp92;
              if (typeof peg$f3 === "function") {
                if (null == tmp105Result) {
                  const obj1 = { scale: tmp106 };
                  let items2 = obj1;
                } else {
                  const obj2 = { scaleX: tmp106 };
                  items2 = [obj2, ];
                  const obj3 = { scaleY: tmp105Result };
                  items2[1] = obj3;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              closure_50 = tmp92;
              let tmp103 = tmp13;
            }
          } else {
            closure_50 = tmp92;
            tmp103 = tmp13;
          }
        } else {
          closure_50 = tmp92;
          tmp103 = tmp13;
        }
        const diff2 = diff - 1;
        diff = diff2;
        tmp47 = tmp125;
        tmp14 = tmp103;
        if (tmp103 === tmp13) {
          tmp47 = tmp125;
          tmp14 = tmp103;
          if (0 === diff2) {
            tmp47 = tmp125;
            tmp14 = tmp103;
            if (closure_50 >= closure_53) {
              if (tmp127 > closure_53) {
                closure_53 = tmp127;
                closure_54 = [];
              }
              closure_54.push(tmp126);
              tmp47 = tmp125;
              tmp14 = tmp103;
            }
          }
        }
      }
      if (tmp47) {
        diff = diff + 1;
        peg$parse_();
        if (str.substr(closure_50, 7) === c7) {
          closure_50 = closure_50 + 7;
          let tmp136 = tmp134;
        } else {
          tmp136 = tmp13;
          if (0 === diff) {
            tmp136 = tmp13;
            if (closure_50 >= closure_53) {
              if (tmp138 > closure_53) {
                closure_53 = tmp138;
                closure_54 = [];
              }
              closure_54.push(tmp137);
              tmp136 = tmp13;
            }
          }
        }
        if (tmp136 !== tmp13) {
          peg$parse_();
          const tmp145 = peg$parseNUM();
          if (tmp145 !== tmp13) {
            diff = diff + 1;
            peg$parsespaceOrComma();
            let tmp144Result = peg$parseNUM();
            if (tmp144Result !== tmp13) {
              peg$parsespaceOrComma();
              tmp144Result = peg$parseNUM();
              if (tmp144Result !== tmp13) {
                closure_51 = tmp147;
                if (typeof peg$f5 === "function") {
                  const items3 = [tmp144Result, tmp144Result];
                  let tmp151 = items3;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                closure_50 = tmp147;
                tmp151 = tmp13;
              }
            } else {
              closure_50 = tmp147;
              tmp151 = tmp13;
            }
            const diff3 = diff - 1;
            diff = diff3;
            if (tmp151 === tmp13) {
              if (0 === diff3) {
                if (closure_50 >= closure_53) {
                  if (tmp159 > closure_53) {
                    closure_53 = tmp159;
                    closure_54 = [];
                  }
                  closure_54.push(tmp158);
                }
              }
            }
            if (tmp151 === tmp13) {
              tmp151 = null;
            }
            peg$parse_();
            if (41 === str.charCodeAt(closure_50)) {
              let tmp165 = c4;
              closure_50 = closure_50 + 1;
            } else {
              tmp165 = tmp13;
              if (0 === diff) {
                tmp165 = tmp13;
                if (closure_50 >= closure_53) {
                  if (tmp167 > closure_53) {
                    closure_53 = tmp167;
                    closure_54 = [];
                  }
                  closure_54.push(tmp166);
                  tmp165 = tmp13;
                }
              }
            }
            if (tmp165 !== tmp13) {
              peg$parse_();
              closure_51 = tmp131;
              if (typeof peg$f4 === "function") {
                if (null !== tmp151) {
                  const obj4 = { rotate: null };
                  const _HermesInternal2 = HermesInternal;
                  obj4.rotate = "" + tmp145 + "deg";
                  let items4 = obj4;
                } else {
                  const obj5 = { rotate: null };
                  const _HermesInternal = HermesInternal;
                  obj5.rotate = "" + tmp145 + "deg";
                  items4 = [obj5];
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              closure_50 = tmp131;
              let tmp142 = tmp13;
            }
          } else {
            closure_50 = tmp131;
            tmp142 = tmp13;
          }
        } else {
          closure_50 = tmp131;
          tmp142 = tmp13;
        }
        const diff4 = diff - 1;
        diff = diff4;
        tmp47 = tmp179;
        tmp14 = tmp142;
        if (tmp142 === tmp13) {
          tmp47 = tmp179;
          tmp14 = tmp142;
          if (0 === diff4) {
            tmp47 = tmp179;
            tmp14 = tmp142;
            if (closure_50 >= closure_53) {
              if (tmp181 > closure_53) {
                closure_53 = tmp181;
                closure_54 = [];
              }
              closure_54.push(tmp180);
              tmp47 = tmp179;
              tmp14 = tmp142;
            }
          }
        }
      }
      if (tmp47) {
        diff = diff + 1;
        peg$parse_();
        if (str.substr(closure_50, 6) === c8) {
          closure_50 = closure_50 + 6;
          let tmp190 = tmp188;
        } else {
          tmp190 = tmp13;
          if (0 === diff) {
            tmp190 = tmp13;
            if (closure_50 >= closure_53) {
              if (tmp192 > closure_53) {
                closure_53 = tmp192;
                closure_54 = [];
              }
              closure_54.push(tmp191);
              tmp190 = tmp13;
            }
          }
        }
        if (tmp190 !== tmp13) {
          peg$parse_();
          const tmp199 = peg$parseNUM();
          if (tmp199 !== tmp13) {
            peg$parse_();
            if (41 === str.charCodeAt(closure_50)) {
              let tmp203 = c4;
              closure_50 = closure_50 + 1;
            } else {
              tmp203 = tmp13;
              if (0 === diff) {
                tmp203 = tmp13;
                if (closure_50 >= closure_53) {
                  if (tmp205 > closure_53) {
                    closure_53 = tmp205;
                    closure_54 = [];
                  }
                  closure_54.push(tmp204);
                  tmp203 = tmp13;
                }
              }
            }
            if (tmp203 !== tmp13) {
              peg$parse_();
              closure_51 = tmp185;
              if (typeof peg$f6 === "function") {
                const obj6 = { skewX: null };
                const _HermesInternal3 = HermesInternal;
                obj6.skewX = "" + tmp199 + "deg";
                const items5 = [obj6];
                let tmp196 = items5;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              closure_50 = tmp185;
              tmp196 = tmp13;
            }
          } else {
            closure_50 = tmp185;
            tmp196 = tmp13;
          }
        } else {
          closure_50 = tmp185;
          tmp196 = tmp13;
        }
        const diff5 = diff - 1;
        diff = diff5;
        tmp47 = tmp214;
        tmp14 = tmp196;
        if (tmp196 === tmp13) {
          tmp47 = tmp214;
          tmp14 = tmp196;
          if (0 === diff5) {
            tmp47 = tmp214;
            tmp14 = tmp196;
            if (closure_50 >= closure_53) {
              if (tmp216 > closure_53) {
                closure_53 = tmp216;
                closure_54 = [];
              }
              closure_54.push(tmp215);
              tmp47 = tmp214;
              tmp14 = tmp196;
            }
          }
        }
      }
      if (tmp47) {
        diff = diff + 1;
        peg$parse_();
        if (str.substr(closure_50, 6) === c9) {
          closure_50 = closure_50 + 6;
          let tmp225 = tmp223;
        } else {
          tmp225 = tmp13;
          if (0 === diff) {
            tmp225 = tmp13;
            if (closure_50 >= closure_53) {
              if (tmp227 > closure_53) {
                closure_53 = tmp227;
                closure_54 = [];
              }
              closure_54.push(tmp226);
              tmp225 = tmp13;
            }
          }
        }
        if (tmp225 !== tmp13) {
          peg$parse_();
          const tmp234 = peg$parseNUM();
          if (tmp234 !== tmp13) {
            peg$parse_();
            if (41 === str.charCodeAt(closure_50)) {
              let tmp238 = c4;
              closure_50 = closure_50 + 1;
            } else {
              tmp238 = tmp13;
              if (0 === diff) {
                tmp238 = tmp13;
                if (closure_50 >= closure_53) {
                  if (tmp240 > closure_53) {
                    closure_53 = tmp240;
                    closure_54 = [];
                  }
                  closure_54.push(tmp239);
                  tmp238 = tmp13;
                }
              }
            }
            if (tmp238 !== tmp13) {
              peg$parse_();
              closure_51 = tmp220;
              if (typeof peg$f7 === "function") {
                const obj7 = { skewY: null };
                const _HermesInternal4 = HermesInternal;
                obj7.skewY = "" + tmp234 + "deg";
                const items6 = [obj7];
                let tmp231 = items6;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              closure_50 = tmp220;
              tmp231 = tmp13;
            }
          } else {
            closure_50 = tmp220;
            tmp231 = tmp13;
          }
        } else {
          closure_50 = tmp220;
          tmp231 = tmp13;
        }
        const diff6 = diff - 1;
        diff = diff6;
        tmp14 = tmp231;
        if (tmp231 === tmp13) {
          tmp14 = tmp231;
          if (0 === diff6) {
            tmp14 = tmp231;
            if (closure_50 >= closure_53) {
              if (tmp250 > closure_53) {
                closure_53 = tmp250;
                closure_54 = [];
              }
              closure_54.push(tmp249);
              tmp14 = tmp231;
            }
          }
        }
      }
      const diff7 = diff - 1;
      diff = diff7;
      if (tmp14 === tmp13) {
        if (0 === diff7) {
          if (closure_50 >= closure_53) {
            if (tmp255 > closure_53) {
              closure_53 = tmp255;
              closure_54 = [];
            }
            closure_54.push(tmp254);
          }
        }
      }
      return tmp14;
    }
    function peg$parsespaceOrComma() {
      let tmp17;
      diff = diff + 1;
      const charAtResult = str.charAt(closure_50);
      if (re12.test(charAtResult)) {
        closure_50 = closure_50 + 1;
        let tmp4 = charAtResult;
      } else {
        tmp4 = obj;
        if (0 === diff) {
          tmp4 = obj;
          if (closure_50 >= closure_53) {
            if (tmp6 > closure_53) {
              closure_53 = tmp6;
              closure_54 = [];
            }
            closure_54.push(tmp5);
            tmp4 = obj;
          }
        }
      }
      const items = [];
      if (tmp4 !== obj) {
        do {
          let arr = items.push(tmp4);
          let charAtResult1 = str.charAt(closure_50);
          if (re12.test(charAtResult1)) {
            closure_50 = closure_50 + 1;
            tmp17 = charAtResult1;
          } else {
            tmp17 = obj;
            if (0 === diff) {
              let tmp19 = closure_50;
              tmp17 = obj;
              if (closure_50 >= closure_53) {
                if (tmp19 > closure_53) {
                  closure_53 = tmp19;
                  closure_54 = [];
                }
                let arr1 = closure_54.push(tmp18);
                tmp17 = obj;
              }
            }
          }
          tmp4 = tmp17;
        } while (tmp17 !== obj);
      }
      diff = diff - 1;
      if (0 === diff) {
        if (closure_50 >= closure_53) {
          if (tmp26 > closure_53) {
            closure_53 = tmp26;
            closure_54 = [];
          }
          closure_54.push(tmp25);
        }
      }
      return items;
    }
    function peg$parse_() {
      let tmp17;
      diff = diff + 1;
      const charAtResult = str.charAt(closure_50);
      if (re13.test(charAtResult)) {
        closure_50 = closure_50 + 1;
        let tmp4 = charAtResult;
      } else {
        tmp4 = obj;
        if (0 === diff) {
          tmp4 = obj;
          if (closure_50 >= closure_53) {
            if (tmp6 > closure_53) {
              closure_53 = tmp6;
              closure_54 = [];
            }
            closure_54.push(tmp5);
            tmp4 = obj;
          }
        }
      }
      const items = [];
      if (tmp4 !== obj) {
        do {
          let arr = items.push(tmp4);
          let charAtResult1 = str.charAt(closure_50);
          if (re13.test(charAtResult1)) {
            closure_50 = closure_50 + 1;
            tmp17 = charAtResult1;
          } else {
            tmp17 = obj;
            if (0 === diff) {
              let tmp19 = closure_50;
              tmp17 = obj;
              if (closure_50 >= closure_53) {
                if (tmp19 > closure_53) {
                  closure_53 = tmp19;
                  closure_54 = [];
                }
                let arr1 = closure_54.push(tmp18);
                tmp17 = obj;
              }
            }
          }
          tmp4 = tmp17;
        } while (tmp17 !== obj);
      }
      diff = diff - 1;
      if (0 === diff) {
        if (closure_50 >= closure_53) {
          if (tmp26 > closure_53) {
            closure_53 = tmp26;
            closure_54 = [];
          }
          closure_54.push(tmp25);
        }
      }
      return items;
    }
    function peg$parseNUM() {
      let tmp134;
      let tmp27;
      let tmp65;
      let tmp88;
      if (re14.test(str.charAt(closure_50))) {
        closure_50 = closure_50 + 1;
      } else if (0 === diff) {
        if (closure_50 >= closure_53) {
          if (tmp4 > closure_53) {
            closure_53 = tmp4;
            closure_54 = [];
          }
          closure_54.push(tmp3);
        }
      }
      let tmp8 = obj;
      const charAtResult = str.charAt(closure_50);
      if (re15.test(charAtResult)) {
        closure_50 = closure_50 + 1;
        let tmp13 = charAtResult;
      } else {
        tmp13 = tmp8;
        if (0 === diff) {
          tmp13 = tmp8;
          if (closure_50 >= closure_53) {
            if (tmp15 > closure_53) {
              closure_53 = tmp15;
              closure_54 = [];
            }
            closure_54.push(tmp14);
            tmp13 = tmp8;
          }
        }
      }
      const items = [];
      let tmp19 = str;
      obj = re15;
      let str2 = str;
      if (tmp13 !== tmp8) {
        do {
          let arr1 = items.push(tmp13);
          let charAtResult1 = str.charAt(closure_50);
          if (re15.test(charAtResult1)) {
            closure_50 = closure_50 + 1;
            tmp27 = charAtResult1;
          } else {
            let tmp25 = obj;
            tmp27 = obj;
            if (0 === diff) {
              let tmp29 = closure_50;
              tmp27 = tmp25;
              if (closure_50 >= closure_53) {
                if (tmp29 > closure_53) {
                  closure_53 = tmp29;
                  closure_54 = [];
                }
                let arr2 = closure_54.push(tmp28);
                tmp27 = tmp25;
              }
            }
          }
          tmp8 = obj;
          tmp13 = tmp27;
          tmp19 = str;
          obj = re15;
          str2 = str;
        } while (tmp27 !== obj);
      }
      if (46 === str2.charCodeAt(closure_50)) {
        let tmp34 = c10;
        closure_50 = closure_50 + 1;
      } else {
        tmp34 = tmp8;
        if (0 === diff) {
          tmp34 = tmp8;
          if (closure_50 >= closure_53) {
            if (tmp36 > closure_53) {
              closure_53 = tmp36;
              closure_54 = [];
            }
            closure_54.push(tmp35);
            tmp34 = tmp8;
          }
        }
      }
      if (tmp34 !== tmp8) {
        const charAtResult2 = str2.charAt(closure_50);
        if (obj.test(charAtResult2)) {
          closure_50 = closure_50 + 1;
          let tmp46 = charAtResult2;
        } else {
          tmp46 = tmp8;
          if (0 === diff) {
            tmp46 = tmp8;
            if (closure_50 >= closure_53) {
              if (tmp48 > closure_53) {
                closure_53 = tmp48;
                closure_54 = [];
              }
              closure_54.push(tmp47);
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
          items1 = [];
          tmp53 = tmp19;
          tmp54 = items1;
          tmp55 = obj;
          tmp56 = str2;
          tmp57 = tmp8;
          if (tmp52) {
            do {
              let arr5 = items1.push(tmp46);
              let charAtResult3 = str.charAt(closure_50);
              if (re15.test(charAtResult3)) {
                closure_50 = closure_50 + 1;
                tmp65 = charAtResult3;
              } else {
                let tmp63 = obj;
                tmp65 = obj;
                if (0 === diff) {
                  let tmp67 = closure_50;
                  tmp65 = tmp63;
                  if (closure_50 >= closure_53) {
                    if (tmp67 > closure_53) {
                      closure_53 = tmp67;
                      closure_54 = [];
                    }
                    let arr6 = closure_54.push(tmp66);
                    tmp65 = tmp63;
                  }
                }
              }
              tmp57 = obj;
              tmp46 = tmp65;
              tmp53 = str;
              tmp54 = items1;
              tmp55 = re15;
              tmp56 = str;
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
          closure_50 = tmp9;
          tmp40 = tmp53;
          tmp41 = tmp57;
          obj2 = tmp55;
          str3 = tmp56;
          tmp42 = tmp57;
        }
      } else {
        closure_50 = tmp9;
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
        const charAtResult4 = str3.charAt(closure_50);
        if (obj2.test(charAtResult4)) {
          closure_50 = closure_50 + 1;
          let tmp74 = charAtResult4;
        } else {
          tmp74 = tmp42;
          if (0 === diff) {
            tmp74 = tmp42;
            if (closure_50 >= closure_53) {
              if (tmp76 > closure_53) {
                closure_53 = tmp76;
                closure_54 = [];
              }
              closure_54.push(tmp75);
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
              let charAtResult5 = str.charAt(closure_50);
              if (re15.test(charAtResult5)) {
                closure_50 = closure_50 + 1;
                tmp88 = charAtResult5;
              } else {
                let tmp86 = obj;
                tmp88 = obj;
                if (0 === diff) {
                  let tmp90 = closure_50;
                  tmp88 = tmp86;
                  if (closure_50 >= closure_53) {
                    if (tmp90 > closure_53) {
                      closure_53 = tmp90;
                      closure_54 = [];
                    }
                    let arr9 = closure_54.push(tmp89);
                    tmp88 = tmp86;
                  }
                }
              }
              tmp72 = obj;
              tmp74 = tmp88;
              tmp71 = str;
              tmp41 = items3;
              obj3 = re15;
              str4 = str;
            } while (tmp88 !== obj);
          }
        }
      }
      if (tmp41 !== tmp72) {
        if (101 === str4.charCodeAt(closure_50)) {
          let tmp98 = e;
          closure_50 = closure_50 + 1;
        } else {
          tmp98 = tmp72;
          if (0 === diff) {
            tmp98 = tmp72;
            if (closure_50 >= closure_53) {
              if (tmp100 > closure_53) {
                closure_53 = tmp100;
                closure_54 = [];
              }
              closure_54.push(tmp99);
              tmp98 = tmp72;
            }
          }
        }
        if (tmp98 !== tmp72) {
          const charAtResult6 = str4.charAt(closure_50);
          if (re14.test(charAtResult6)) {
            closure_50 = closure_50 + 1;
            let tmp108 = charAtResult6;
          } else {
            tmp108 = tmp72;
            if (0 === diff) {
              tmp108 = tmp72;
              if (closure_50 >= closure_53) {
                if (tmp110 > closure_53) {
                  closure_53 = tmp110;
                  closure_54 = [];
                }
                closure_54.push(tmp109);
                tmp108 = tmp72;
              }
            }
          }
          if (tmp108 === tmp72) {
            tmp108 = null;
          }
          const charAtResult7 = str4.charAt(closure_50);
          if (obj3.test(charAtResult7)) {
            closure_50 = closure_50 + 1;
            let tmp117 = charAtResult7;
          } else {
            tmp117 = tmp72;
            if (0 === diff) {
              tmp117 = tmp72;
              if (closure_50 >= closure_53) {
                if (tmp119 > closure_53) {
                  closure_53 = tmp119;
                  closure_54 = [];
                }
                closure_54.push(tmp118);
                tmp117 = tmp72;
              }
            }
          }
          let tmp124 = tmp71;
          let tmp125 = tmp72;
          let tmp126 = tmp72;
          if (tmp117 !== tmp72) {
            const items4 = [];
            tmp124 = tmp71;
            tmp125 = items4;
            tmp126 = tmp72;
            if (tmp123) {
              do {
                let arr13 = items4.push(tmp117);
                let charAtResult8 = str.charAt(closure_50);
                if (re15.test(charAtResult8)) {
                  closure_50 = closure_50 + 1;
                  tmp134 = charAtResult8;
                } else {
                  let tmp132 = obj;
                  tmp134 = obj;
                  if (0 === diff) {
                    let tmp136 = closure_50;
                    tmp134 = tmp132;
                    if (closure_50 >= closure_53) {
                      if (tmp136 > closure_53) {
                        closure_53 = tmp136;
                        closure_54 = [];
                      }
                      let arr14 = closure_54.push(tmp135);
                      tmp134 = tmp132;
                    }
                  }
                }
                tmp126 = obj;
                tmp117 = tmp134;
                tmp124 = str;
                tmp125 = items4;
              } while (tmp134 !== obj);
            }
          }
          if (tmp125 !== tmp126) {
            const items5 = [tmp98, tmp108, tmp125];
            let str5 = tmp124;
          } else {
            closure_50 = tmp95;
            str5 = tmp124;
          }
        } else {
          closure_50 = tmp95;
          str5 = tmp71;
        }
        closure_51 = tmp;
        if (typeof peg$f8 === "function") {
          const _parseFloat = parseFloat;
          let parsed = parseFloat(str5.substring(closure_51, closure_50));
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        closure_50 = tmp;
        parsed = tmp72;
      }
      return parsed;
    }
    peg$FAILED = {};
    if (undefined === peg$FAILED) {
      peg$FAILED = {};
    }
    function peg$parsestart() {
      let tmp20;
      diff = diff + 1 + 1;
      const tmp3 = peg$parsefunction();
      if (tmp3 !== obj) {
        const tmp2Result = peg$parsefunction();
        if (tmp2Result !== obj) {
          let items = [tmp9, tmp2Result];
          let tmp11 = items;
        } else {
          closure_50 = tmp7;
          tmp11 = obj;
        }
        items1 = [];
        let tmp12 = obj;
        if (tmp11 !== obj) {
          do {
            let arr = items1.push(tmp11);
            let tmp14 = closure_50;
            let tmp16 = peg$parse_();
            let tmp18 = peg$parsefunction();
            if (tmp18 !== obj) {
              let items2 = [tmp16, tmp18];
              tmp20 = items2;
            } else {
              closure_50 = tmp14;
              tmp20 = obj;
            }
            tmp11 = tmp20;
            tmp12 = obj;
          } while (tmp20 !== obj);
        }
        closure_51 = tmp;
        if (typeof peg$f0 === "function") {
          const _Array = Array;
          let tmp23 = tmp3;
          if (!Array.isArray(tmp3)) {
            let items3 = [tmp3];
            tmp23 = items3;
          }
          items3 = tmp23;
          const item = items1.forEach((item) => {
            const push = items3.push;
            if (Array.isArray(item[1])) {
              const items = [];
              HermesBuiltin.arraySpread(tmp2, 0);
              HermesBuiltin.apply(items, items3);
            } else {
              push(tmp2);
            }
          });
          let tmp6 = tmp23;
          let tmp5 = tmp12;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        tmp7 = closure_50;
        tmp9 = peg$parse_();
      } else {
        closure_50 = tmp;
        tmp5 = obj;
        tmp6 = obj;
      }
      diff = diff - 1;
      if (tmp6 === tmp5) {
        if (0 === diff) {
          if (closure_50 >= closure_53) {
            if (tmp28 > closure_53) {
              closure_53 = tmp28;
              closure_54 = [];
            }
            closure_54.push(tmp27);
          }
        }
      }
      const diff1 = diff - 1;
      diff = diff1;
      if (tmp6 === tmp5) {
        if (0 === diff1) {
          if (closure_50 >= closure_53) {
            if (tmp33 > closure_53) {
              closure_53 = tmp33;
              closure_54 = [];
            }
            closure_54.push(tmp32);
          }
        }
      }
      return tmp6;
    }
    const grammarSource = peg$FAILED.grammarSource;
    peg$FAILED = { start: peg$parsestart };
    c3 = "matrix(";
    c4 = ")";
    c5 = "translate(";
    c6 = "scale(";
    c7 = "rotate(";
    c8 = "skewX(";
    c9 = "skewY(";
    c10 = ".";
    const e = "e";
    const re12 = /^[ \t\n\r,]/;
    const re13 = /^[ \t\n\r]/;
    const re14 = /^[+\-]/;
    const re15 = /^[0-9]/;
    closure_16 = { type: "other", description: "transform functions" };
    closure_17 = { type: "other", description: "transformFunctions" };
    closure_18 = { type: "other", description: "transform function" };
    closure_19 = { type: "other", description: "matrix" };
    closure_20 = { type: "literal", text: "matrix(", ignoreCase: false };
    closure_21 = { type: "literal", text: ")", ignoreCase: false };
    closure_22 = { type: "other", description: "translate" };
    closure_23 = { type: "literal", text: "translate(", ignoreCase: false };
    closure_24 = { type: "other", description: "scale" };
    closure_25 = { type: "literal", text: "scale(", ignoreCase: false };
    closure_26 = { type: "other", description: "rotate" };
    closure_27 = { type: "literal", text: "rotate(", ignoreCase: false };
    closure_28 = { type: "other", description: "x, y" };
    closure_29 = { type: "other", description: "skewX" };
    closure_30 = { type: "literal", text: "skewX(", ignoreCase: false };
    closure_31 = { type: "other", description: "skewY" };
    closure_32 = { type: "literal", text: "skewY(", ignoreCase: false };
    closure_33 = { type: "other", description: "space or comma" };
    closure_34 = { type: "class", parts: [" ", "\t", "\n", "\r", ","], inverted: false, ignoreCase: false };
    closure_35 = { type: "other", description: "whitespace" };
    closure_36 = { type: "class", parts: [" ", "\t", "\n", "\r"], inverted: false, ignoreCase: false };
    closure_37 = { type: "class", parts: ["+", "-"], inverted: false, ignoreCase: false };
    let items = [["0", "9"]];
    closure_38 = { type: "class", parts: items, inverted: false, ignoreCase: false };
    closure_39 = { type: "literal", text: ".", ignoreCase: false };
    closure_40 = { type: "literal", text: "e", ignoreCase: false };
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
    pegcurrPos = tmp;
    closure_51 = tmp;
    let items1 = [{ line: 1, column: 1 }];
    pegmaxFailPos = tmp;
    pegmaxFailExpected = peg$FAILED.peg$maxFailExpected || [];
    let diff = peg$FAILED.peg$silentFails | 0;
    if (peg$FAILED.startRule) {
      if (peg$FAILED.startRule in peg$FAILED) {
        peg$parsestart = peg$FAILED[peg$FAILED.startRule];
      } else {
        const _Error = Error;
        str = "Can't start parsing from rule \"";
        const error = new Error("Can't start parsing from rule \"" + peg$FAILED.startRule + "\".");
        throw error;
      }
    }
    const result = peg$parsestart();
    if (peg$FAILED.peg$library) {
      let obj1 = { peg$result: result, peg$currPos: pegcurrPos, peg$FAILED, peg$maxFailExpected: pegmaxFailExpected, peg$maxFailPos: pegmaxFailPos };
      return obj1;
    } else {
      let tmp8 = result !== peg$FAILED;
      if (tmp8) {
        if (pegcurrPos === str.length) {
          return result;
        }
      }
      if (tmp8) {
        tmp8 = pegcurrPos < str.length;
      }
      if (tmp8) {
        if (pegcurrPos >= pegmaxFailPos) {
          if (tmp11 > pegmaxFailPos) {
            pegmaxFailPos = tmp11;
            pegmaxFailExpected = [];
          }
          pegmaxFailExpected.push({ type: "end" });
        }
      }
      let charAtResult = null;
      if (pegmaxFailPos < str.length) {
        charAtResult = str.charAt(pegmaxFailPos);
      }
      function peg$computeLocation(offset, offset2, arg2) {
        let tmp = items1[offset];
        let arr2 = items1;
        if (!tmp) {
          if (offset >= items1.length) {
            diff = items1.length - 1;
            let tmp5 = items1;
          } else {
            const diff1 = offset - 1;
            let tmp3 = diff1;
            diff = diff1;
            tmp5 = items1;
            if (!items1[diff1]) {
              const diff2 = tmp3 - 1;
              tmp3 = diff2;
              diff = diff2;
              tmp5 = items1;
            }
          }
          let obj = { line: null, column: null };
          ({ line: obj.line, column: obj.column } = tmp5[diff]);
          if (diff < offset) {
            do {
              if (10 === str.charCodeAt(diff)) {
                obj.line = obj.line + 1;
                obj.column = 1;
              } else {
                obj.column = obj.column + 1;
              }
              diff = diff + 1;
            } while (diff < offset);
          }
          items1[offset] = obj;
          arr2 = items1;
          tmp = obj;
        }
        let tmp11 = arr2[offset2];
        if (!tmp11) {
          if (offset2 >= arr2.length) {
            let diff3 = arr2.length - 1;
            let tmp15 = arr2;
          } else {
            const diff4 = offset2 - 1;
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
          ({ line: obj2.line, column: obj2.column } = tmp15[diff3]);
          if (diff3 < offset2) {
            do {
              if (10 === str.charCodeAt(diff3)) {
                obj.line = obj.line + 1;
                obj.column = 1;
              } else {
                obj.column = obj.column + 1;
              }
              diff3 = diff3 + 1;
            } while (diff3 < offset2);
          }
          items1[offset2] = obj;
          tmp11 = obj;
        }
        obj = { source: grammarSource, start: { offset, line: tmp.line, column: tmp.column }, end: { offset: offset2, line: tmp11.line, column: tmp11.column } };
        return obj;
      }
      if (pegmaxFailPos < str.length) {
        let result1 = peg$computeLocation(pegmaxFailPos, pegmaxFailPos + 1);
      } else {
        result1 = peg$computeLocation(pegmaxFailPos, pegmaxFailPos);
      }
      const message = peg$SyntaxError.buildMessage(tmp14, charAtResult);
      const _Error2 = Error;
      const tmp26 = typeof call === "unknown" ? _Error2(message) : call(Object.create(peg$SyntaxError.prototype), message);
      const _Object = Object;
      if (Object.setPrototypeOf) {
        const _Object2 = Object;
        Object.setPrototypeOf(tmp26, peg$SyntaxError.prototype);
      }
      tmp26.expected = pegmaxFailExpected;
      tmp26.found = charAtResult;
      tmp26.location = result1;
      tmp26.name = "SyntaxError";
      throw tmp26;
    }
  }
};

export default obj;