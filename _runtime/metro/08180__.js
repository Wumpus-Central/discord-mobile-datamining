// _runtime/metro/08180__.js
let closure_50, closure_53, closure_54, pegcurrPos, pegmaxFailExpected, pegmaxFailPos;

class peg$SyntaxError {
  constructor(arg0, expected, found, location) {
    const callResult = Error.call(this, arg0);
    if (Object.setPrototypeOf) {
      const _Object = Object;
      Object.setPrototypeOf(callResult, peg$SyntaxError.prototype);
    }
    callResult.expected = expected;
    callResult.found = found;
    callResult.location = location;
    callResult.name = "SyntaxError";
    return callResult;
  }
  format(arg0) {
    const self = this;
    const text = `Error: ${this.message}`;
    let combined = text;
    if (this.location) {
      let num3 = 0;
      let parts = null;
      if (0 < arg0.length) {
        while (arg0[num3].source !== self.location.source) {
          let sum = num3 + 1;
          num3 = sum;
          parts = null;
        }
        const str = arg0[num3].text;
        parts = str.split(/\r\n|\n|\r/g);
      }
      const start = self.location.start;
      let offsetResult = start;
      if (self.location.source) {
        offsetResult = start;
        if (typeof self.location.source.offset === "function") {
          const source = self.location.source;
          offsetResult = source.offset(start);
        }
      }
      const text1 = `${self.location.source}:${tmp7.line}:${tmp7.column}`;
      if (parts) {
        let column;
        const end = self.location.end;
        const str4 = offsetResult.line;
        const length = str4.toString().length;
        let str6 = "";
        if ("".length <= length) {
          const diff = length - "".length;
          const repeat = " ".repeat;
          const text2 = ` ${" ".repeat(tmp10)}`;
          str6 = `${` ${" ".repeat(tmp10)}`.slice(0, tmp10)}`;
        }
        if (start.line === end.line) {
          column = end.column;
        } else {
          column = arr.length + 1;
        }
        const _HermesInternal2 = HermesInternal;
        const text3 = `${"\n --> " + tmp8 + "\n" + str6 + " |\n"}${tmp7.line} | ${arr}`;
        const diff1 = start.column - 1;
        let str13 = "";
        if ("".length <= diff1) {
          const diff2 = diff1 - "".length;
          const repeat2 = " ".repeat;
          const text4 = ` ${" ".repeat(tmp18)}`;
          str13 = `${` ${" ".repeat(tmp18)}`.slice(0, tmp18)}`;
        }
        let str15 = "";
        if ("".length <= (column - start.column || 1)) {
          const diff3 = tmp12 - "".length;
          const repeat3 = "^".repeat;
          const text5 = `^${"^".repeat(tmp20)}`;
          str15 = `${`^${"^".repeat(tmp20)}`.slice(0, tmp20)}`;
        }
        const _HermesInternal3 = HermesInternal;
        combined = text + text3 + "\n" + str6 + " | " + str13 + str15;
      } else {
        const _HermesInternal = HermesInternal;
        combined = text + "\n at " + text1;
      }
    }
    return combined;
  }
  static buildMessage(arr, str) {
    const f138870 = (str) => {
      str = str.charCodeAt(0);
      const str2 = str.toString(16);
      return "\\x0" + str2.toUpperCase();
    };
    const f138871 = (str) => {
      str = str.charCodeAt(0);
      const str2 = str.toString(16);
      return "\\x" + str2.toUpperCase();
    };
    const obj = {
      literal(text) {
        let str = text.text;
        let str2 = str.replace(/\\/g, "\\\\");
        const str3 = str2.replace(/"/g, '\\"');
        const str4 = str3.replace(/\0/g, "\\0");
        const str5 = str4.replace(/\t/g, "\\t");
        const str6 = str5.replace(/\n/g, "\\n");
        const str7 = str6.replace(/\r/g, "\\r");
        const str8 = str7.replace(/[\x00-\x0F]/g, f138870);
        return '"' + str8.replace(/[\x10-\x1F\x7F-\x9F]/g, f138871) + '"';
      },
      class: (parts) => {
        parts = parts.parts;
        const mapped = parts.map((item) => {
          let text1;
          const f138872 = (str) => {
            str = str.charCodeAt(0);
            const str2 = str.toString(16);
            return "\\x0" + str2.toUpperCase();
          };
          const f138873 = (str) => {
            str = str.charCodeAt(0);
            const str2 = str.toString(16);
            return "\\x" + str2.toUpperCase();
          };
          if (Array.isArray(item)) {
            const str18 = item[0];
            const str20 = str18.replace(/\\/g, "\\\\");
            const str22 = str20.replace(/\]/g, "\\]");
            const str24 = str22.replace(/\^/g, "\\^");
            const str26 = str24.replace(/-/g, "\\-");
            const str28 = str26.replace(/\0/g, "\\0");
            const str30 = str28.replace(/\t/g, "\\t");
            const str32 = str30.replace(/\n/g, "\\n");
            const str34 = str32.replace(/\r/g, "\\r");
            const str35 = str34.replace(/[\x00-\x0F]/g, f138872);
            const str37 = item[1];
            const text = `${str35.replace(/[\x10-\x1F\x7F-\x9F]/g, f138873)}-`;
            const str38 = str37.replace(/\\/g, "\\\\");
            const str39 = str38.replace(/\]/g, "\\]");
            const str40 = str39.replace(/\^/g, "\\^");
            const str41 = str40.replace(/-/g, "\\-");
            const str42 = str41.replace(/\0/g, "\\0");
            const str43 = str42.replace(/\t/g, "\\t");
            const str44 = str43.replace(/\n/g, "\\n");
            const str45 = str44.replace(/\r/g, "\\r");
            const str46 = str45.replace(/[\x00-\x0F]/g, f138872);
            text1 = `${str35.replace(/[\x10-\x1F\x7F-\x9F]/g, f138873)}-${str46.replace(/[\x10-\x1F\x7F-\x9F]/g, f138873)}`;
          } else {
            let str = "\\\\";
            let str2 = item.replace(/\\/g, "\\\\");
            const str4 = str2.replace(/\]/g, "\\]");
            const str6 = str4.replace(/\^/g, "\\^");
            const str8 = str6.replace(/-/g, "\\-");
            const str10 = str8.replace(/\0/g, "\\0");
            const str12 = str10.replace(/\t/g, "\\t");
            const str14 = str12.replace(/\n/g, "\\n");
            const str16 = str14.replace(/\r/g, "\\r");
            const str17 = str16.replace(/[\x00-\x0F]/g, f138872);
            text1 = str17.replace(/[\x10-\x1F\x7F-\x9F]/g, f138873);
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
      },
    };
    let mapped = arr.map(function describeExpectation(item) {
      return obj[item.type](item);
    });
    const sorted = mapped.sort();
    if (mapped.length > 0) {
      let num2 = 1;
      let num3 = 1;
      let num4 = 1;
      if (1 < mapped.length) {
        do {
          let sum = num2;
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
    if (1 === mapped.length) {
      let first = mapped[0];
    } else if (2 === mapped.length) {
      let str3 = " or ";
      first = `${arr[0]} or ${arr[1]}`;
    } else {
      const substr = mapped.slice(0, -1);
      str = ", ";
      let str2 = ", or ";
      first = `${obj2.join(", ")}, or ${arr[arr.length - 1]}`;
    }
    let str4 = "end of input";
    let text = `Expected ${tmp5}`;
    if (str) {
      let str5 = "\\\\";
      let str6 = str.replace(/\\/g, "\\\\");
      let str7 = '\\"';
      let str8 = str6.replace(/"/g, '\\"');
      let str10 = str8.replace(/\0/g, "\\0");
      let str12 = str10.replace(/\t/g, "\\t");
      let str14 = str12.replace(/\n/g, "\\n");
      let str16 = str14.replace(/\r/g, "\\r");
      let str17 = str16.replace(/[\x00-\x0F]/g, f138870);
      let str18 = '"';
      str4 = `${'"' + str17.replace(/[\x10-\x1F\x7F-\x9F]/g, f138871)}"`;
    }
    return text + " but " + str4 + " found.";
  }
}
class C {
  constructor() {
    this.constructor = peg$SyntaxError;
  }
}
C.prototype = Error.prototype;
let obj2 = Object.create(C.prototype);
obj2.constructor = peg$SyntaxError;
peg$SyntaxError.prototype = obj2;
let obj = {
  StartRules: ["start"],
  SyntaxError: peg$SyntaxError,
  parse: function peg$parse(str, arg1) {
    let closure_0 = str;
    let obj = arg1;
    function peg$parsefunction() {
      let items;
      let tmp14;
      let tmp7;
      diff = diff + 1 + 1;
      peg$parse_();
      if (closure_0.substr(closure_50, 7) === c3) {
        closure_50 = closure_50 + 7;
        tmp7 = tmp4;
      } else {
        tmp7 = obj2;
        if (0 === diff) {
          tmp7 = tmp5;
          if (closure_50 >= closure_53) {
            if (closure_50 > closure_53) {
              closure_53 = tmp9;
              closure_54 = [];
            }
            closure_54.push(tmp8);
            tmp7 = tmp5;
          }
        }
      }
      const tmp13 = obj2;
      if (tmp7 !== obj2) {
        peg$parse_();
        const tmp17 = peg$parseNUM();
        if (tmp17 !== tmp13) {
          peg$parsespaceOrComma();
          const tmp16Result = peg$parseNUM();
          if (tmp16Result !== tmp13) {
            peg$parsespaceOrComma();
            const tmp16Result8 = peg$parseNUM();
            if (tmp16Result8 !== tmp13) {
              peg$parsespaceOrComma();
              const tmp16Result9 = peg$parseNUM();
              if (tmp16Result9 !== tmp13) {
                peg$parsespaceOrComma();
                const tmp16Result10 = peg$parseNUM();
                if (tmp16Result10 !== tmp13) {
                  peg$parsespaceOrComma();
                  const tmp16Result11 = peg$parseNUM();
                  if (tmp16Result11 !== tmp13) {
                    peg$parsespaceOrComma();
                    const tmp16Result12 = peg$parseNUM();
                    if (tmp16Result12 !== tmp13) {
                      peg$parsespaceOrComma();
                      const tmp16Result13 = peg$parseNUM();
                      if (tmp16Result13 !== tmp13) {
                        peg$parsespaceOrComma();
                        const tmp16Result14 = peg$parseNUM();
                        if (tmp16Result14 !== tmp13) {
                          let tmp38;
                          peg$parse_();
                          if (41 === closure_0.charCodeAt(closure_50)) {
                            tmp38 = c4;
                            closure_50 = closure_50 + 1;
                          } else {
                            tmp38 = tmp13;
                            if (0 === diff) {
                              tmp38 = tmp13;
                              if (closure_50 >= closure_53) {
                                if (closure_50 > closure_53) {
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
                              const obj = { matrix: items };
                              items = [
                                tmp17,
                                tmp16Result,
                                tmp16Result8,
                                tmp16Result9,
                                tmp16Result10,
                                tmp16Result11,
                                tmp16Result12,
                                tmp16Result13,
                                tmp16Result14,
                              ];
                              tmp14 = obj;
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
            if (closure_50 > closure_53) {
              closure_53 = tmp49;
              closure_54 = [];
            }
            closure_54.push(tmp48);
          }
        }
      }
      if (tmp47) {
        let tmp58;
        let tmp64;
        diff = diff + 1;
        peg$parse_();
        if (closure_0.substr(closure_50, 10) === c5) {
          closure_50 = closure_50 + 10;
          tmp58 = tmp56;
        } else {
          tmp58 = tmp13;
          if (0 === diff) {
            tmp58 = tmp13;
            if (closure_50 >= closure_53) {
              if (closure_50 > closure_53) {
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
            let tmp74;
            peg$parsespaceOrComma();
            let tmp66Result = peg$parseNUM();
            if (tmp66Result === tmp13) {
              tmp66Result = null;
            }
            peg$parse_();
            if (41 === closure_0.charCodeAt(closure_50)) {
              tmp74 = c4;
              closure_50 = closure_50 + 1;
            } else {
              tmp74 = tmp13;
              if (0 === diff) {
                tmp74 = tmp13;
                if (closure_50 >= closure_53) {
                  if (closure_50 > closure_53) {
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
                let obj3;
                if (null == tmp66Result) {
                  obj2 = { translate: tmp67 };
                  obj3 = obj2;
                } else {
                  obj3 = { translate: items1 };
                  items1 = [tmp67, tmp66Result];
                }
                tmp64 = obj3;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              closure_50 = tmp53;
              tmp64 = tmp13;
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
        tmp47 = tmp85;
        tmp14 = tmp64;
        if (tmp64 === tmp13) {
          tmp47 = tmp85;
          tmp14 = tmp64;
          if (0 === diff1) {
            tmp47 = tmp85;
            tmp14 = tmp64;
            if (closure_50 >= closure_53) {
              if (closure_50 > closure_53) {
                closure_53 = tmp87;
                closure_54 = [];
              }
              closure_54.push(tmp86);
              tmp47 = tmp85;
              tmp14 = tmp64;
            }
          }
        }
      }
      if (tmp47) {
        let tmp96;
        let tmp102;
        diff = diff + 1;
        peg$parse_();
        if (closure_0.substr(closure_50, 6) === c6) {
          closure_50 = closure_50 + 6;
          tmp96 = tmp94;
        } else {
          tmp96 = tmp13;
          if (0 === diff) {
            tmp96 = tmp13;
            if (closure_50 >= closure_53) {
              if (closure_50 > closure_53) {
                closure_53 = tmp98;
                closure_54 = [];
              }
              closure_54.push(tmp97);
              tmp96 = tmp13;
            }
          }
        }
        if (tmp96 !== tmp13) {
          peg$parse_();
          const tmp105 = peg$parseNUM();
          if (tmp105 !== tmp13) {
            let tmp112;
            peg$parsespaceOrComma();
            let tmp104Result = peg$parseNUM();
            if (tmp104Result === tmp13) {
              tmp104Result = null;
            }
            peg$parse_();
            if (41 === closure_0.charCodeAt(closure_50)) {
              tmp112 = c4;
              closure_50 = closure_50 + 1;
            } else {
              tmp112 = tmp13;
              if (0 === diff) {
                tmp112 = tmp13;
                if (closure_50 >= closure_53) {
                  if (closure_50 > closure_53) {
                    closure_53 = tmp114;
                    closure_54 = [];
                  }
                  closure_54.push(tmp113);
                  tmp112 = tmp13;
                }
              }
            }
            if (tmp112 !== tmp13) {
              peg$parse_();
              closure_51 = tmp91;
              if (typeof peg$f3 === "function") {
                let items2;
                if (null == tmp104Result) {
                  items2 = { scale: tmp105 };
                  const obj4 = { scale: tmp105 };
                } else {
                  items2 = [{ scaleX: tmp105 }];
                  const obj5 = { scaleX: tmp105 };
                  const obj6 = { scaleY: tmp104Result };
                  items2[1] = obj6;
                }
                tmp102 = items2;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              closure_50 = tmp91;
              tmp102 = tmp13;
            }
          } else {
            closure_50 = tmp91;
            tmp102 = tmp13;
          }
        } else {
          closure_50 = tmp91;
          tmp102 = tmp13;
        }
        const diff2 = diff - 1;
        diff = diff2;
        tmp47 = tmp123;
        tmp14 = tmp102;
        if (tmp102 === tmp13) {
          tmp47 = tmp123;
          tmp14 = tmp102;
          if (0 === diff2) {
            tmp47 = tmp123;
            tmp14 = tmp102;
            if (closure_50 >= closure_53) {
              if (closure_50 > closure_53) {
                closure_53 = tmp125;
                closure_54 = [];
              }
              closure_54.push(tmp124);
              tmp47 = tmp123;
              tmp14 = tmp102;
            }
          }
        }
      }
      if (tmp47) {
        let tmp134;
        let tmp140;
        diff = diff + 1;
        peg$parse_();
        if (closure_0.substr(closure_50, 7) === c7) {
          closure_50 = closure_50 + 7;
          tmp134 = tmp132;
        } else {
          tmp134 = tmp13;
          if (0 === diff) {
            tmp134 = tmp13;
            if (closure_50 >= closure_53) {
              if (closure_50 > closure_53) {
                closure_53 = tmp136;
                closure_54 = [];
              }
              closure_54.push(tmp135);
              tmp134 = tmp13;
            }
          }
        }
        if (tmp134 !== tmp13) {
          peg$parse_();
          const tmp143 = peg$parseNUM();
          if (tmp143 !== tmp13) {
            let tmp149;
            let tmp163;
            diff = diff + 1;
            peg$parsespaceOrComma();
            const tmp142Result = peg$parseNUM();
            if (tmp142Result !== tmp13) {
              peg$parsespaceOrComma();
              const tmp142Result2 = peg$parseNUM();
              if (tmp142Result2 !== tmp13) {
                closure_51 = tmp145;
                if (typeof peg$f5 === "function") {
                  const items3 = [tmp142Result, tmp142Result2];
                  tmp149 = items3;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                closure_50 = tmp145;
                tmp149 = tmp13;
              }
            } else {
              closure_50 = tmp145;
              tmp149 = tmp13;
            }
            const diff3 = diff - 1;
            diff = diff3;
            if (tmp149 === tmp13) {
              if (0 === diff3) {
                if (closure_50 >= closure_53) {
                  if (closure_50 > closure_53) {
                    closure_53 = tmp157;
                    closure_54 = [];
                  }
                  closure_54.push(tmp156);
                }
              }
            }
            if (tmp149 === tmp13) {
              tmp149 = null;
            }
            peg$parse_();
            if (41 === closure_0.charCodeAt(closure_50)) {
              tmp163 = c4;
              closure_50 = closure_50 + 1;
            } else {
              tmp163 = tmp13;
              if (0 === diff) {
                tmp163 = tmp13;
                if (closure_50 >= closure_53) {
                  if (closure_50 > closure_53) {
                    closure_53 = tmp165;
                    closure_54 = [];
                  }
                  closure_54.push(tmp164);
                  tmp163 = tmp13;
                }
              }
            }
            if (tmp163 !== tmp13) {
              peg$parse_();
              closure_51 = tmp129;
              if (typeof peg$f4 === "function") {
                let items4;
                if (null !== tmp149) {
                  const _HermesInternal2 = HermesInternal;
                  items4 = { rotate: "" + tmp143 + "deg" };
                  const obj7 = { rotate: "" + tmp143 + "deg" };
                } else {
                  const _HermesInternal = HermesInternal;
                  items4 = [{ rotate: "" + tmp143 + "deg" }];
                  const obj8 = { rotate: "" + tmp143 + "deg" };
                }
                tmp140 = items4;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              closure_50 = tmp129;
              tmp140 = tmp13;
            }
          } else {
            closure_50 = tmp129;
            tmp140 = tmp13;
          }
        } else {
          closure_50 = tmp129;
          tmp140 = tmp13;
        }
        const diff4 = diff - 1;
        diff = diff4;
        tmp47 = tmp176;
        tmp14 = tmp140;
        if (tmp140 === tmp13) {
          tmp47 = tmp176;
          tmp14 = tmp140;
          if (0 === diff4) {
            tmp47 = tmp176;
            tmp14 = tmp140;
            if (closure_50 >= closure_53) {
              if (closure_50 > closure_53) {
                closure_53 = tmp178;
                closure_54 = [];
              }
              closure_54.push(tmp177);
              tmp47 = tmp176;
              tmp14 = tmp140;
            }
          }
        }
      }
      if (tmp47) {
        let tmp187;
        let tmp193;
        diff = diff + 1;
        peg$parse_();
        if (closure_0.substr(closure_50, 6) === c8) {
          closure_50 = closure_50 + 6;
          tmp187 = tmp185;
        } else {
          tmp187 = tmp13;
          if (0 === diff) {
            tmp187 = tmp13;
            if (closure_50 >= closure_53) {
              if (closure_50 > closure_53) {
                closure_53 = tmp189;
                closure_54 = [];
              }
              closure_54.push(tmp188);
              tmp187 = tmp13;
            }
          }
        }
        if (tmp187 !== tmp13) {
          peg$parse_();
          const tmp196 = peg$parseNUM();
          if (tmp196 !== tmp13) {
            let tmp200;
            peg$parse_();
            if (41 === closure_0.charCodeAt(closure_50)) {
              tmp200 = c4;
              closure_50 = closure_50 + 1;
            } else {
              tmp200 = tmp13;
              if (0 === diff) {
                tmp200 = tmp13;
                if (closure_50 >= closure_53) {
                  if (closure_50 > closure_53) {
                    closure_53 = tmp202;
                    closure_54 = [];
                  }
                  closure_54.push(tmp201);
                  tmp200 = tmp13;
                }
              }
            }
            if (tmp200 !== tmp13) {
              peg$parse_();
              closure_51 = tmp182;
              if (typeof peg$f6 === "function") {
                const _HermesInternal3 = HermesInternal;
                const items5 = [{ skewX: "" + tmp196 + "deg" }];
                tmp193 = items5;
                const obj9 = { skewX: "" + tmp196 + "deg" };
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              closure_50 = tmp182;
              tmp193 = tmp13;
            }
          } else {
            closure_50 = tmp182;
            tmp193 = tmp13;
          }
        } else {
          closure_50 = tmp182;
          tmp193 = tmp13;
        }
        const diff5 = diff - 1;
        diff = diff5;
        tmp47 = tmp211;
        tmp14 = tmp193;
        if (tmp193 === tmp13) {
          tmp47 = tmp211;
          tmp14 = tmp193;
          if (0 === diff5) {
            tmp47 = tmp211;
            tmp14 = tmp193;
            if (closure_50 >= closure_53) {
              if (closure_50 > closure_53) {
                closure_53 = tmp213;
                closure_54 = [];
              }
              closure_54.push(tmp212);
              tmp47 = tmp211;
              tmp14 = tmp193;
            }
          }
        }
      }
      if (tmp47) {
        let tmp222;
        let tmp228;
        diff = diff + 1;
        peg$parse_();
        if (closure_0.substr(closure_50, 6) === c9) {
          closure_50 = closure_50 + 6;
          tmp222 = tmp220;
        } else {
          tmp222 = tmp13;
          if (0 === diff) {
            tmp222 = tmp13;
            if (closure_50 >= closure_53) {
              if (closure_50 > closure_53) {
                closure_53 = tmp224;
                closure_54 = [];
              }
              closure_54.push(tmp223);
              tmp222 = tmp13;
            }
          }
        }
        if (tmp222 !== tmp13) {
          peg$parse_();
          const tmp231 = peg$parseNUM();
          if (tmp231 !== tmp13) {
            let tmp235;
            peg$parse_();
            if (41 === closure_0.charCodeAt(closure_50)) {
              tmp235 = c4;
              closure_50 = closure_50 + 1;
            } else {
              tmp235 = tmp13;
              if (0 === diff) {
                tmp235 = tmp13;
                if (closure_50 >= closure_53) {
                  if (closure_50 > closure_53) {
                    closure_53 = tmp237;
                    closure_54 = [];
                  }
                  closure_54.push(tmp236);
                  tmp235 = tmp13;
                }
              }
            }
            if (tmp235 !== tmp13) {
              peg$parse_();
              closure_51 = tmp217;
              if (typeof peg$f7 === "function") {
                const _HermesInternal4 = HermesInternal;
                const items6 = [{ skewY: "" + tmp231 + "deg" }];
                tmp228 = items6;
                const obj10 = { skewY: "" + tmp231 + "deg" };
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              closure_50 = tmp217;
              tmp228 = tmp13;
            }
          } else {
            closure_50 = tmp217;
            tmp228 = tmp13;
          }
        } else {
          closure_50 = tmp217;
          tmp228 = tmp13;
        }
        const diff6 = diff - 1;
        diff = diff6;
        tmp14 = tmp228;
        if (tmp228 === tmp13) {
          tmp14 = tmp228;
          if (0 === diff6) {
            tmp14 = tmp228;
            if (closure_50 >= closure_53) {
              if (closure_50 > closure_53) {
                closure_53 = tmp247;
                closure_54 = [];
              }
              closure_54.push(tmp246);
              tmp14 = tmp228;
            }
          }
        }
      }
      const diff7 = diff - 1;
      diff = diff7;
      if (tmp14 === tmp13) {
        if (0 === diff7) {
          if (closure_50 >= closure_53) {
            if (closure_50 > closure_53) {
              closure_53 = tmp252;
              closure_54 = [];
            }
            closure_54.push(tmp251);
          }
        }
      }
      return tmp14;
    }
    function peg$parsespaceOrComma() {
      let tmp17;
      let tmp4;
      diff = diff + 1;
      const charAtResult = closure_0.charAt(closure_50);
      if (re12.test(charAtResult)) {
        closure_50 = closure_50 + 1;
        tmp4 = charAtResult;
      } else {
        tmp4 = obj2;
        if (0 === diff) {
          tmp4 = obj2;
          if (closure_50 >= closure_53) {
            if (closure_50 > closure_53) {
              closure_53 = tmp6;
              closure_54 = [];
            }
            closure_54.push(tmp5);
            tmp4 = obj2;
          }
        }
      }
      const items = [];
      if (tmp4 !== obj2) {
        do {
          let arr5 = items.push(tmp4);
          let charAtResult1 = closure_0.charAt(closure_50);
          if (re12.test(charAtResult1)) {
            closure_50 = closure_50 + 1;
            tmp17 = charAtResult1;
          } else {
            tmp17 = obj2;
            if (0 === diff) {
              let tmp19 = closure_50;
              tmp17 = obj2;
              if (closure_50 >= closure_53) {
                if (tmp19 > closure_53) {
                  closure_53 = tmp19;
                  closure_54 = [];
                }
                let arr6 = closure_54.push(tmp18);
                tmp17 = obj2;
              }
            }
          }
          tmp4 = tmp17;
        } while (tmp17 !== obj2);
      }
      diff = diff - 1;
      if (0 === diff) {
        if (closure_50 >= closure_53) {
          if (closure_50 > closure_53) {
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
      let tmp4;
      diff = diff + 1;
      const charAtResult = closure_0.charAt(closure_50);
      if (re13.test(charAtResult)) {
        closure_50 = closure_50 + 1;
        tmp4 = charAtResult;
      } else {
        tmp4 = obj2;
        if (0 === diff) {
          tmp4 = obj2;
          if (closure_50 >= closure_53) {
            if (closure_50 > closure_53) {
              closure_53 = tmp6;
              closure_54 = [];
            }
            closure_54.push(tmp5);
            tmp4 = obj2;
          }
        }
      }
      const items = [];
      if (tmp4 !== obj2) {
        do {
          let arr5 = items.push(tmp4);
          let charAtResult1 = closure_0.charAt(closure_50);
          if (re13.test(charAtResult1)) {
            closure_50 = closure_50 + 1;
            tmp17 = charAtResult1;
          } else {
            tmp17 = obj2;
            if (0 === diff) {
              let tmp19 = closure_50;
              tmp17 = obj2;
              if (closure_50 >= closure_53) {
                if (tmp19 > closure_53) {
                  closure_53 = tmp19;
                  closure_54 = [];
                }
                let arr6 = closure_54.push(tmp18);
                tmp17 = obj2;
              }
            }
          }
          tmp4 = tmp17;
        } while (tmp17 !== obj2);
      }
      diff = diff - 1;
      if (0 === diff) {
        if (closure_50 >= closure_53) {
          if (closure_50 > closure_53) {
            closure_53 = tmp26;
            closure_54 = [];
          }
          closure_54.push(tmp25);
        }
      }
      return items;
    }
    function peg$parseNUM() {
      let parsed;
      let str3;
      let tmp13;
      let tmp134;
      let tmp27;
      let tmp34;
      let tmp40;
      let tmp41;
      let tmp42;
      let tmp65;
      let tmp88;
      if (re14.test(closure_0.charAt(closure_50))) {
        closure_50 = closure_50 + 1;
      } else if (0 === diff) {
        if (closure_50 >= closure_53) {
          if (closure_50 > closure_53) {
            closure_53 = tmp4;
            closure_54 = [];
          }
          closure_54.push(tmp3);
        }
      }
      let tmp8 = obj2;
      const charAtResult = closure_0.charAt(closure_50);
      if (re15.test(charAtResult)) {
        closure_50 = closure_50 + 1;
        tmp13 = charAtResult;
      } else {
        tmp13 = tmp8;
        if (0 === diff) {
          tmp13 = tmp8;
          if (closure_50 >= closure_53) {
            if (closure_50 > closure_53) {
              closure_53 = tmp15;
              closure_54 = [];
            }
            closure_54.push(tmp14);
            tmp13 = tmp8;
          }
        }
      }
      const items = [];
      let tmp19 = closure_0;
      let obj = re15;
      let str2 = closure_0;
      if (tmp13 !== tmp8) {
        do {
          let arr3 = items.push(tmp13);
          let charAtResult1 = closure_0.charAt(closure_50);
          if (re15.test(charAtResult1)) {
            closure_50 = closure_50 + 1;
            tmp27 = charAtResult1;
          } else {
            let tmp25 = obj2;
            tmp27 = obj2;
            if (0 === diff) {
              let tmp29 = closure_50;
              tmp27 = tmp25;
              if (closure_50 >= closure_53) {
                if (tmp29 > closure_53) {
                  closure_53 = tmp29;
                  closure_54 = [];
                }
                let arr4 = closure_54.push(tmp28);
                tmp27 = tmp25;
              }
            }
          }
          tmp8 = obj2;
          tmp13 = tmp27;
          tmp19 = closure_0;
          obj = re15;
          str2 = closure_0;
        } while (tmp27 !== obj2);
      }
      if (46 === str2.charCodeAt(closure_50)) {
        tmp34 = c10;
        closure_50 = closure_50 + 1;
      } else {
        tmp34 = tmp8;
        if (0 === diff) {
          tmp34 = tmp8;
          if (closure_50 >= closure_53) {
            if (closure_50 > closure_53) {
              closure_53 = tmp36;
              closure_54 = [];
            }
            closure_54.push(tmp35);
            tmp34 = tmp8;
          }
        }
      }
      if (tmp34 !== tmp8) {
        let tmp46;
        const charAtResult2 = str2.charAt(closure_50);
        if (obj.test(charAtResult2)) {
          closure_50 = closure_50 + 1;
          tmp46 = charAtResult2;
        } else {
          tmp46 = tmp8;
          if (0 === diff) {
            tmp46 = tmp8;
            if (closure_50 >= closure_53) {
              if (closure_50 > closure_53) {
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
          if (tmp46 !== tmp8) {
            do {
              let arr22 = items1.push(tmp46);
              let charAtResult3 = closure_0.charAt(closure_50);
              if (re15.test(charAtResult3)) {
                closure_50 = closure_50 + 1;
                tmp65 = charAtResult3;
              } else {
                let tmp63 = obj2;
                tmp65 = obj2;
                if (0 === diff) {
                  let tmp67 = closure_50;
                  tmp65 = tmp63;
                  if (closure_50 >= closure_53) {
                    if (tmp67 > closure_53) {
                      closure_53 = tmp67;
                      closure_54 = [];
                    }
                    let arr23 = closure_54.push(tmp66);
                    tmp65 = tmp63;
                  }
                }
              }
              tmp57 = obj2;
              tmp46 = tmp65;
              tmp53 = closure_0;
              tmp54 = items1;
              tmp55 = re15;
              tmp56 = closure_0;
            } while (tmp65 !== obj2);
          }
        }
        if (tmp54 !== tmp57) {
          const items2 = [items, tmp34, tmp54];
          tmp40 = tmp53;
          tmp41 = items2;
          obj2 = tmp55;
          str3 = tmp56;
          tmp42 = tmp57;
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
        let tmp74;
        const charAtResult4 = str3.charAt(closure_50);
        if (obj2.test(charAtResult4)) {
          closure_50 = closure_50 + 1;
          tmp74 = charAtResult4;
        } else {
          tmp74 = tmp42;
          if (0 === diff) {
            tmp74 = tmp42;
            if (closure_50 >= closure_53) {
              if (closure_50 > closure_53) {
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
          if (tmp74 !== tmp42) {
            do {
              let arr25 = items3.push(tmp74);
              let charAtResult5 = closure_0.charAt(closure_50);
              if (re15.test(charAtResult5)) {
                closure_50 = closure_50 + 1;
                tmp88 = charAtResult5;
              } else {
                let tmp86 = obj2;
                tmp88 = obj2;
                if (0 === diff) {
                  let tmp90 = closure_50;
                  tmp88 = tmp86;
                  if (closure_50 >= closure_53) {
                    if (tmp90 > closure_53) {
                      closure_53 = tmp90;
                      closure_54 = [];
                    }
                    let arr26 = closure_54.push(tmp89);
                    tmp88 = tmp86;
                  }
                }
              }
              tmp72 = obj2;
              tmp74 = tmp88;
              tmp71 = closure_0;
              tmp41 = items3;
              obj3 = re15;
              str4 = closure_0;
            } while (tmp88 !== obj2);
          }
        }
      }
      if (tmp41 !== tmp72) {
        let tmp98;
        let str5;
        if (101 === str4.charCodeAt(closure_50)) {
          tmp98 = closure_11;
          closure_50 = closure_50 + 1;
        } else {
          tmp98 = tmp72;
          if (0 === diff) {
            tmp98 = tmp72;
            if (closure_50 >= closure_53) {
              if (closure_50 > closure_53) {
                closure_53 = tmp100;
                closure_54 = [];
              }
              closure_54.push(tmp99);
              tmp98 = tmp72;
            }
          }
        }
        if (tmp98 !== tmp72) {
          let tmp108;
          let tmp117;
          const charAtResult6 = str4.charAt(closure_50);
          if (re14.test(charAtResult6)) {
            closure_50 = closure_50 + 1;
            tmp108 = charAtResult6;
          } else {
            tmp108 = tmp72;
            if (0 === diff) {
              tmp108 = tmp72;
              if (closure_50 >= closure_53) {
                if (closure_50 > closure_53) {
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
            tmp117 = charAtResult7;
          } else {
            tmp117 = tmp72;
            if (0 === diff) {
              tmp117 = tmp72;
              if (closure_50 >= closure_53) {
                if (closure_50 > closure_53) {
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
            if (tmp117 !== tmp72) {
              do {
                let arr30 = items4.push(tmp117);
                let charAtResult8 = closure_0.charAt(closure_50);
                if (re15.test(charAtResult8)) {
                  closure_50 = closure_50 + 1;
                  tmp134 = charAtResult8;
                } else {
                  let tmp132 = obj2;
                  tmp134 = obj2;
                  if (0 === diff) {
                    let tmp136 = closure_50;
                    tmp134 = tmp132;
                    if (closure_50 >= closure_53) {
                      if (tmp136 > closure_53) {
                        closure_53 = tmp136;
                        closure_54 = [];
                      }
                      let arr31 = closure_54.push(tmp135);
                      tmp134 = tmp132;
                    }
                  }
                }
                tmp126 = obj2;
                tmp117 = tmp134;
                tmp124 = closure_0;
                tmp125 = items4;
              } while (tmp134 !== obj2);
            }
          }
          if (tmp125 !== tmp126) {
            const items5 = [tmp98, tmp108, tmp125];
            str5 = tmp124;
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
          parsed = parseFloat(str5.substring(closure_51, closure_50));
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        closure_50 = tmp;
        parsed = tmp72;
      }
      return parsed;
    }
    let obj2 = {};
    if (undefined === arg1) {
      obj = {};
    }
    function peg$parsestart() {
      let tmp20;
      let tmp5;
      let tmp6;
      diff = diff + 1 + 1;
      const tmp3 = peg$parsefunction();
      if (tmp3 !== obj2) {
        let tmp11;
        const tmp9 = peg$parse_();
        const tmp2Result = peg$parsefunction();
        const tmp7 = closure_50;
        if (tmp2Result !== obj2) {
          let items = [tmp9, tmp2Result];
          tmp11 = items;
        } else {
          closure_50 = tmp7;
          tmp11 = obj2;
        }
        items1 = [];
        let tmp12 = obj2;
        if (tmp11 !== obj2) {
          do {
            let arr = items1.push(tmp11);
            let tmp14 = closure_50;
            let tmp16 = peg$parse_();
            let tmp18 = peg$parsefunction();
            if (tmp18 !== obj2) {
              let items2 = [tmp16, tmp18];
              tmp20 = items2;
            } else {
              closure_50 = tmp14;
              tmp20 = obj2;
            }
            tmp11 = tmp20;
            tmp12 = obj2;
          } while (tmp20 !== obj2);
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
              HermesBuiltin.arraySpread(items, item[1], 0);
              HermesBuiltin.apply(push, items, items3);
            } else {
              push(item[1]);
            }
          });
          tmp6 = tmp23;
          tmp5 = tmp12;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        closure_50 = tmp;
        tmp5 = obj2;
        tmp6 = obj2;
      }
      diff = diff - 1;
      if (tmp6 === tmp5) {
        if (0 === diff) {
          if (closure_50 >= closure_53) {
            if (closure_50 > closure_53) {
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
            if (closure_50 > closure_53) {
              closure_53 = tmp33;
              closure_54 = [];
            }
            closure_54.push(tmp32);
          }
        }
      }
      return tmp6;
    }
    const grammarSource = obj.grammarSource;
    let obj3 = { start: peg$parsestart };
    let c3 = "matrix(";
    let c4 = ")";
    let c5 = "translate(";
    let c6 = "scale(";
    let c7 = "rotate(";
    let c8 = "skewX(";
    let c9 = "skewY(";
    let c10 = ".";
    let closure_11 = "e";
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
    function peg$f0(arg0, arg1) {}
    function peg$f1(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {}
    function peg$f2(arg0, arg1) {}
    function peg$f3(arg0, arg1) {}
    function peg$f4(arg0, arg1) {}
    function peg$f5(arg0, arg1) {}
    function peg$f6(arg0) {}
    function peg$f7(arg0) {}
    function peg$f8() {}
    let tmp = obj.peg$currPos | 0;
    pegcurrPos = tmp;
    let closure_51 = tmp;
    let items1 = [{ line: 1, column: 1 }];
    pegmaxFailPos = tmp;
    pegmaxFailExpected = obj.peg$maxFailExpected || [];
    let diff = obj.peg$silentFails | 0;
    if (obj.startRule) {
      if (obj.startRule in obj3) {
        peg$parsestart = obj3[obj.startRule];
      } else {
        const _Error = Error;
        const self = this;
        let str2 = '".';
        const self2 = this;
        const error = new Error("Can't start parsing from rule \"" + obj.startRule + '".');
        let tmp4 = error;
        throw error;
      }
    }
    const result = peg$parsestart();
    if (obj.peg$library) {
      let obj4 = {
        peg$result: result,
        peg$currPos: pegcurrPos,
        peg$FAILED: obj2,
        peg$maxFailExpected: pegmaxFailExpected,
        peg$maxFailPos: pegmaxFailPos,
      };
      const tmp26 = pegcurrPos;
      let tmp27 = pegmaxFailExpected;
      const tmp28 = pegmaxFailPos;
      return obj4;
    } else {
      let result1;
      let tmp6 = result !== obj2;
      if (tmp6) {
        let tmp7 = pegcurrPos;
        if (pegcurrPos === str.length) {
          return result;
        }
      }
      if (tmp6) {
        let tmp8 = pegcurrPos;
        tmp6 = pegcurrPos < str.length;
      }
      if (tmp6) {
        let tmp9 = pegcurrPos;
        if (pegcurrPos >= pegmaxFailPos) {
          if (tmp9 > pegmaxFailPos) {
            pegmaxFailPos = tmp9;
            pegmaxFailExpected = [];
          }
          let arr = pegmaxFailExpected.push({ type: "end" });
        }
      }
      let tmp12 = pegmaxFailExpected;
      let tmp13 = pegmaxFailPos;
      let charAtResult = null;
      if (pegmaxFailPos < str.length) {
        let tmp15 = pegmaxFailPos;
        charAtResult = str.charAt(pegmaxFailPos);
      }
      function peg$computeLocation(offset, offset2, arg2) {
        let tmp = items1[offset];
        let arr2 = items1;
        if (!tmp) {
          let tmp5;
          if (offset >= items1.length) {
            diff = items1.length - 1;
            tmp5 = items1;
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
          const obj = { line: null, column: null };
          ({ line: obj.line, column: obj.column } = tmp5[diff]);
          if (diff < offset) {
            do {
              if (10 === closure_0.charCodeAt(diff)) {
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
          let diff3;
          let tmp15;
          if (offset2 >= arr2.length) {
            diff3 = arr2.length - 1;
            tmp15 = arr2;
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
          const obj3 = { line: null, column: null };
          ({ line: obj2.line, column: obj2.column } = tmp15[diff3]);
          if (diff3 < offset2) {
            do {
              if (10 === closure_0.charCodeAt(diff3)) {
                obj3.line = obj3.line + 1;
                obj3.column = 1;
              } else {
                obj3.column = obj3.column + 1;
              }
              diff3 = diff3 + 1;
            } while (diff3 < offset2);
          }
          items1[offset2] = obj3;
          tmp11 = obj3;
        }
        return {
          source: grammarSource,
          start: { offset, line: tmp.line, column: tmp.column },
          end: { offset: offset2, line: tmp11.line, column: tmp11.column },
        };
      }
      let tmp16 = pegmaxFailPos;
      if (pegmaxFailPos < str.length) {
        let tmp19 = pegmaxFailPos;
        result1 = peg$computeLocation(pegmaxFailPos, pegmaxFailPos + 1);
      } else {
        let tmp17 = pegmaxFailPos;
        result1 = peg$computeLocation(pegmaxFailPos, pegmaxFailPos);
      }
      const message = peg$SyntaxError.buildMessage(tmp12, charAtResult);
      let tmp22 = globalThis;
      const callResult = Error.call(Object.create(peg$SyntaxError.prototype), message);
      const _Object = Object;
      if (Object.setPrototypeOf) {
        const _Object2 = Object;
        Object.setPrototypeOf(callResult, peg$SyntaxError.prototype);
      }
      callResult.expected = tmp12;
      callResult.found = charAtResult;
      callResult.location = result1;
      let str3 = "SyntaxError";
      callResult.name = "SyntaxError";
      let tmp25 = callResult;
      throw callResult;
    }
  },
};

export default obj;
