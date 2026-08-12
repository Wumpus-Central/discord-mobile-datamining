// _runtime/07886_peg_SyntaxError.js
class peg$SyntaxError {
  constructor(arg0, arg1, arg2, arg3) {
    obj = { message: global, expected: require, found: importDefault, location: importAll, name: "SyntaxError" };
    if (typeof Error.captureStackTrace === "function") {
      _Error = Error;
      tmp = peg$SyntaxError;
      captureStackTraceResult = Error.captureStackTrace(obj, peg$SyntaxError);
    }
    return;
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
            let num = 0;
            let str = "";
            let str2 = "";
            let str3 = "";
            if (0 < parts.parts.length) {
              do {
                let _Array = Array;
                let str4 = parts.parts[num];
                let tmp = str2;
                let tmp2 = num;
                if (parts.parts[num] instanceof Array) {
                  let str14 = str4[0];
                  let str15 = str14.replace(/\\/g, "\\\\");
                  let str16 = str15.replace(/\]/g, "\\]");
                  let str17 = str16.replace(/\^/g, "\\^");
                  let str18 = str17.replace(/-/g, "\\-");
                  let str19 = str18.replace(/\0/g, "\\0");
                  let str20 = str19.replace(/\t/g, "\\t");
                  let str21 = str20.replace(/\n/g, "\\n");
                  let str22 = str21.replace(/\r/g, "\\r");
                  let str23 = str22.replace(/[\x00-\x0F]/g, (str) => {
                    str = str.charCodeAt(0);
                    return "\\x0" + str.charCodeAt(0).toString(16).toUpperCase();
                  });
                  let str24 = parts.parts[num][1];
                  let text = `${str23.replace(/[\x10-\x1F\x7F-\x9F]/g, (str) => {
                    str = str.charCodeAt(0);
                    return "\\x" + str.charCodeAt(0).toString(16).toUpperCase();
                  })}-`;
                  let str25 = str24.replace(/\\/g, "\\\\");
                  let str26 = str25.replace(/\]/g, "\\]");
                  let str27 = str26.replace(/\^/g, "\\^");
                  let str28 = str27.replace(/-/g, "\\-");
                  let str29 = str28.replace(/\0/g, "\\0");
                  let str30 = str29.replace(/\t/g, "\\t");
                  let str31 = str30.replace(/\n/g, "\\n");
                  let str32 = str31.replace(/\r/g, "\\r");
                  let str33 = str32.replace(/[\x00-\x0F]/g, (str) => {
                    str = str.charCodeAt(0);
                    return "\\x0" + str.charCodeAt(0).toString(16).toUpperCase();
                  });
                  let text1 = `${str23.replace(/[\x10-\x1F\x7F-\x9F]/g, (str) => {
                    str = str.charCodeAt(0);
                    return "\\x" + str.charCodeAt(0).toString(16).toUpperCase();
                  })}-${str33.replace(/[\x10-\x1F\x7F-\x9F]/g, (str) => {
                    str = str.charCodeAt(0);
                    return "\\x" + str.charCodeAt(0).toString(16).toUpperCase();
                  })}`;
                } else {
                  let str5 = str4.replace(/\\/g, "\\\\");
                  let str6 = str5.replace(/\]/g, "\\]");
                  let str7 = str6.replace(/\^/g, "\\^");
                  let str8 = str7.replace(/-/g, "\\-");
                  let str9 = str8.replace(/\0/g, "\\0");
                  let str10 = str9.replace(/\t/g, "\\t");
                  let str11 = str10.replace(/\n/g, "\\n");
                  let str12 = str11.replace(/\r/g, "\\r");
                  let str13 = str12.replace(/[\x00-\x0F]/g, (str) => {
                    str = str.charCodeAt(0);
                    return "\\x0" + str.charCodeAt(0).toString(16).toUpperCase();
                  });
                  text1 = str13.replace(/[\x10-\x1F\x7F-\x9F]/g, (str) => {
                    str = str.charCodeAt(0);
                    return "\\x" + str.charCodeAt(0).toString(16).toUpperCase();
                  });
                }
                str2 = str2 + text1;
                num = num + 1;
                str3 = str2;
              } while (num < parts.parts.length);
            }
            if (parts.inverted) {
              str = "^";
            }
            return "[" + str + str3 + "]";
          },
      any(arg0) {
            return "any character";
          },
      end(arg0) {
            return "end of input";
          },
      other(description) {
            return description.description;
          }
    };
    arr = new Array(global.length);
    num = 0;
    if (0 < global.length) {
      do {
        tmp = global[num];
        arr[num] = obj[tmp.type](tmp);
        num = num + 1;
        length = global.length;
      } while (num < length);
    }
    sorted = arr.sort();
    if (arr.length > 0) {
      num2 = 1;
      num3 = 1;
      num4 = 1;
      if (1 < arr.length) {
        do {
          tmp3 = num2;
          tmp4 = num3;
          sum = num2;
          if (arr[num3 - 1] !== arr[num3]) {
            arr[num2] = arr[num3];
            sum = num2 + 1;
          }
          num3 = num3 + 1;
          num2 = sum;
          num4 = sum;
        } while (num3 < arr.length);
      }
      arr.length = num4;
    }
    length2 = arr.length;
    if (1 === length2) {
      first = arr[0];
    } else {
      num5 = 2;
      if (2 === length2) {
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
    text = `Expected ${tmp6}`;
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
class ctor {
  constructor() {
    this.constructor = peg$SyntaxError;
    return;
  }
}
ctor.prototype = Error.prototype;
let obj = Object.create(ctor.prototype);
obj.constructor = peg$SyntaxError;
peg$SyntaxError.prototype = obj;
obj = {
  SyntaxError: peg$SyntaxError,
  parse: function peg$parse(str) {
    const pegSyntaxError = str;
    let obj = arg1;
    function peg$parsetransforms() {
      let tmp18;
      let tmp19;
      let tmp20;
      let tmp21;
      let tmp22;
      let tmp23;
      const tmp2 = peg$parsetransform();
      if (tmp2 !== obj) {
        const items = [];
        let tmp7 = peg$parsecommaWsp();
        let tmp8 = tmp3;
        if (tmp7 !== tmp3) {
          do {
            let arr = items.push(tmp7);
            let tmp10 = peg$parsecommaWsp;
            tmp7 = peg$parsecommaWsp();
            tmp8 = obj;
          } while (tmp7 !== obj);
        }
        if (items !== tmp8) {
          const tmp12 = peg$parsetransforms();
          if (tmp12 !== tmp8) {
            if (typeof peg$c1 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            const first = tmp2[0];
            [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = tmp12;
            const items1 = [first * tmp18 + tmp2[1] * tmp21, first * tmp19 + tmp2[1] * tmp22, first * tmp20 + tmp2[1] * tmp23 + tmp2[2], tmp2[3] * tmp18 + tmp2[4] * tmp21, tmp2[3] * tmp19 + tmp2[4] * tmp22, tmp2[3] * tmp20 + tmp2[4] * tmp23 + tmp2[5]];
            let tmp4 = items1;
            let tmp5 = tmp8;
          }
        }
        let c48 = tmp;
        tmp4 = tmp8;
        tmp5 = tmp8;
      } else {
        c48 = tmp;
        tmp4 = tmp3;
        tmp5 = tmp3;
      }
      if (tmp4 === tmp5) {
        tmp4 = peg$parsetransform();
      }
      return tmp4;
    }
    function peg$parsetransform() {
      let charAtResult1;
      let charAtResult3;
      let charAtResult5;
      let str;
      let tmp;
      if (str.substr(arr10, 6) === matrix) {
        arr10 = arr10 + 6;
        let tmp5 = tmp2;
      } else {
        tmp5 = obj;
        if (0 === c52) {
          tmp5 = tmp3;
          if (arr10 >= arr10) {
            if (tmp7 > arr10) {
              arr10 = tmp7;
              let arr = [];
            }
            arr = arr.push(tmp6);
            tmp5 = tmp3;
          }
        }
      }
      if (tmp5 !== obj) {
        if (regex4.test(str.charAt(arr10))) {
          let charAtResult = str.charAt(arr10);
          arr10 = arr10 + 1;
        } else {
          charAtResult = tmp11;
          if (0 === c52) {
            charAtResult = tmp11;
            if (arr10 >= arr10) {
              if (tmp19 > arr10) {
                arr10 = tmp19;
                arr = [];
              }
              arr = arr.push(tmp18);
              charAtResult = tmp11;
            }
          }
        }
        const items = [];
        obj = regex4;
        let tmp24 = tmp11;
        if (charAtResult !== tmp11) {
          do {
            let arr1 = items.push(charAtResult);
            let str3 = str;
            let tmp27 = arr10;
            let tmp26 = regex4;
            if (regex4.test(str.charAt(arr10))) {
              let tmp35 = arr10;
              charAtResult1 = str3.charAt(arr10);
              let tmp36 = arr10;
              arr10 = arr10 + 1;
            } else {
              let tmp28 = obj;
              let tmp29 = c52;
              charAtResult1 = obj;
              if (0 === c52) {
                let tmp32 = arr10;
                charAtResult1 = tmp28;
                if (arr10 >= arr10) {
                  if (tmp32 > arr10) {
                    arr10 = tmp32;
                    arr = [];
                  }
                  let tmp33 = arr;
                  let arr2 = arr.push(tmp31);
                  charAtResult1 = tmp28;
                }
              }
            }
            tmp24 = obj;
            charAtResult = charAtResult1;
            obj = tmp26;
            str = str3;
          } while (charAtResult1 !== obj);
        }
        if (items !== tmp24) {
          if (40 === str.charCodeAt(arr10)) {
            let tmp39 = c6;
            arr10 = arr10 + 1;
          } else {
            tmp39 = tmp24;
            if (0 === c52) {
              tmp39 = tmp24;
              if (arr10 >= arr10) {
                if (tmp41 > arr10) {
                  arr10 = tmp41;
                  arr = [];
                }
                arr.push(tmp40);
                tmp39 = tmp24;
              }
            }
          }
          if (tmp39 !== tmp24) {
            if (obj.test(str.charAt(arr10))) {
              let charAtResult2 = str.charAt(arr10);
              arr10 = arr10 + 1;
            } else {
              charAtResult2 = tmp24;
              if (0 === c52) {
                charAtResult2 = tmp24;
                if (arr10 >= arr10) {
                  if (tmp49 > arr10) {
                    arr10 = tmp49;
                    arr = [];
                  }
                  arr.push(tmp48);
                  charAtResult2 = tmp24;
                }
              }
            }
            const items1 = [];
            let obj2 = obj;
            let tmp54 = tmp24;
            if (charAtResult2 !== tmp24) {
              do {
                let arr5 = items1.push(charAtResult2);
                let str4 = str;
                let tmp57 = arr10;
                let tmp56 = regex4;
                if (regex4.test(str.charAt(arr10))) {
                  let tmp65 = arr10;
                  charAtResult3 = str4.charAt(arr10);
                  let tmp66 = arr10;
                  arr10 = arr10 + 1;
                } else {
                  let tmp58 = obj;
                  let tmp59 = c52;
                  charAtResult3 = obj;
                  if (0 === c52) {
                    let tmp62 = arr10;
                    charAtResult3 = tmp58;
                    if (arr10 >= arr10) {
                      if (tmp62 > arr10) {
                        arr10 = tmp62;
                        arr = [];
                      }
                      let tmp63 = arr;
                      let arr6 = arr.push(tmp61);
                      charAtResult3 = tmp58;
                    }
                  }
                }
                tmp54 = obj;
                charAtResult2 = charAtResult3;
                obj2 = tmp56;
                str = str4;
              } while (charAtResult3 !== obj);
            }
            if (items1 !== tmp54) {
              const tmp68 = peg$parsenumber();
              if (tmp68 !== tmp54) {
                if (peg$parsecommaWsp() !== tmp54) {
                  let tmp67Result = tmp67();
                  if (tmp67Result !== tmp54) {
                    if (tmp69() !== tmp54) {
                      tmp67Result = tmp67();
                      if (tmp67Result !== tmp54) {
                        if (tmp69() !== tmp54) {
                          const tmp67Result1 = tmp67();
                          if (tmp67Result1 !== tmp54) {
                            if (tmp69() !== tmp54) {
                              const tmp67Result2 = tmp67();
                              if (tmp67Result2 !== tmp54) {
                                if (tmp69() !== tmp54) {
                                  const tmp67Result3 = tmp67();
                                  if (tmp67Result3 !== tmp54) {
                                    if (obj2.test(str.charAt(arr10))) {
                                      let charAtResult4 = str.charAt(arr10);
                                      arr10 = arr10 + 1;
                                    } else {
                                      charAtResult4 = tmp54;
                                      if (0 === c52) {
                                        charAtResult4 = tmp54;
                                        if (arr10 >= arr10) {
                                          if (tmp79 > arr10) {
                                            arr10 = tmp79;
                                            arr = [];
                                          }
                                          arr.push(tmp78);
                                          charAtResult4 = tmp54;
                                        }
                                      }
                                    }
                                    const items2 = [];
                                    let obj3 = str;
                                    let tmp84 = tmp54;
                                    if (charAtResult4 !== tmp54) {
                                      do {
                                        let arr8 = items2.push(charAtResult4);
                                        let tmp86 = regex4;
                                        let str5 = str;
                                        let tmp87 = arr10;
                                        if (regex4.test(str.charAt(arr10))) {
                                          let tmp95 = arr10;
                                          charAtResult5 = str5.charAt(arr10);
                                          let tmp96 = arr10;
                                          arr10 = arr10 + 1;
                                        } else {
                                          let tmp88 = obj;
                                          let tmp89 = c52;
                                          charAtResult5 = obj;
                                          if (0 === c52) {
                                            let tmp92 = arr10;
                                            charAtResult5 = tmp88;
                                            if (arr10 >= arr10) {
                                              if (tmp92 > arr10) {
                                                arr10 = tmp92;
                                                arr = [];
                                              }
                                              let tmp93 = arr;
                                              let arr9 = arr.push(tmp91);
                                              charAtResult5 = tmp88;
                                            }
                                          }
                                        }
                                        tmp84 = obj;
                                        charAtResult4 = charAtResult5;
                                        obj3 = str5;
                                      } while (charAtResult5 !== obj);
                                    }
                                    if (items2 !== tmp84) {
                                      if (41 === obj3.charCodeAt(arr10)) {
                                        let tmp99 = c8;
                                        arr10 = arr10 + 1;
                                      } else {
                                        tmp99 = tmp84;
                                        if (0 === c52) {
                                          tmp99 = tmp84;
                                          if (arr10 >= arr10) {
                                            if (arr10 > arr10) {
                                              arr = [];
                                            }
                                            arr10 = arr;
                                            arr10 = arr.push(arr10);
                                            tmp99 = tmp84;
                                          }
                                        }
                                      }
                                      if (tmp99 !== tmp84) {
                                        arr10 = peg$c8;
                                        if (typeof peg$c8 !== "function") {
                                          arr10 = HermesBuiltin.throwTypeError();
                                        }
                                        const items3 = [tmp68, tmp67Result, tmp67Result2, tmp67Result, tmp67Result1, tmp67Result3];
                                        let str2 = obj3;
                                        let tmp12 = tmp84;
                                        let tmp13 = items3;
                                      } else {
                                        str2 = obj3;
                                        tmp12 = tmp84;
                                        tmp13 = tmp84;
                                      }
                                    } else {
                                      str2 = obj3;
                                      tmp12 = tmp84;
                                      tmp13 = tmp84;
                                    }
                                  } else {
                                    str2 = str;
                                    tmp12 = tmp54;
                                    tmp13 = tmp54;
                                  }
                                } else {
                                  str2 = str;
                                  tmp12 = tmp54;
                                  tmp13 = tmp54;
                                }
                              } else {
                                str2 = str;
                                tmp12 = tmp54;
                                tmp13 = tmp54;
                              }
                            } else {
                              str2 = str;
                              tmp12 = tmp54;
                              tmp13 = tmp54;
                            }
                          } else {
                            str2 = str;
                            tmp12 = tmp54;
                            tmp13 = tmp54;
                          }
                        } else {
                          str2 = str;
                          tmp12 = tmp54;
                          tmp13 = tmp54;
                        }
                      } else {
                        str2 = str;
                        tmp12 = tmp54;
                        tmp13 = tmp54;
                      }
                    } else {
                      str2 = str;
                      tmp12 = tmp54;
                      tmp13 = tmp54;
                    }
                  } else {
                    str2 = str;
                    tmp12 = tmp54;
                    tmp13 = tmp54;
                  }
                } else {
                  str2 = str;
                  tmp12 = tmp54;
                  tmp13 = tmp54;
                }
              } else {
                str2 = str;
                tmp12 = tmp54;
                tmp13 = tmp54;
              }
            } else {
              str2 = str;
              tmp12 = tmp54;
              tmp13 = tmp54;
            }
          } else {
            str2 = str;
            tmp12 = tmp24;
            tmp13 = tmp24;
          }
        } else {
          str2 = str;
          tmp12 = tmp24;
          tmp13 = tmp24;
        }
        const tmp14 = regex4;
      } else {
        str2 = str;
        tmp12 = tmp11;
        tmp13 = tmp11;
      }
      arr10 = tmp13 === tmp12;
      let str6 = str2;
      let charAtResult6 = tmp12;
      if (!arr10) {
        let str10 = str6;
        arr10 = charAtResult6;
        if (!arr10) {
          let str14 = str10;
          if (!arr10) {
            let items7 = str14;
            if (!arr10) {
              if (!arr10) {
                return tmp13;
              } else {
                if (items7.substr(arr10, 5) === skewY) {
                  arr10 = arr10 + 5;
                } else {
                  arr10 = c52;
                  if (0 === c52) {
                    if (arr10 >= arr10) {
                      if (arr10 > arr10) {
                        arr = [];
                      }
                      arr10 = arr;
                      arr10 = arr.push(arr10);
                    }
                  }
                }
                if (arr10 !== arr10) {
                  arr10 = regex4;
                  if (regex4.test(items7.charAt(arr10))) {
                    arr10 = items7.charAt(arr10);
                    arr10 = arr10 + 1;
                  } else {
                    arr10 = c52;
                    if (0 === c52) {
                      if (arr10 >= arr10) {
                        if (arr10 > arr10) {
                          arr = [];
                        }
                        arr10 = arr;
                        arr10 = arr.push(arr10);
                      }
                    }
                  }
                  const items4 = [];
                  let obj14 = arr10;
                  if (arr10 !== arr10) {
                    do {
                      arr10 = items4.push(arr10);
                      let str21 = str;
                      arr10 = regex4;
                      if (regex4.test(str.charAt(arr10))) {
                        arr10 = str21.charAt(arr10);
                        arr10 = arr10 + 1;
                      } else {
                        arr10 = obj;
                        arr10 = c52;
                        arr10 = obj;
                        if (0 === c52) {
                          if (arr10 >= arr10) {
                            if (arr10 > arr10) {
                              arr = [];
                            }
                            arr10 = arr;
                            arr10 = arr.push(arr10);
                          }
                        }
                      }
                      arr10 = obj;
                      obj14 = arr10;
                      items7 = str21;
                    } while (arr10 !== obj);
                  }
                  if (items4 !== arr10) {
                    if (40 === items7.charCodeAt(arr10)) {
                      arr10 = c6;
                      arr10 = arr10 + 1;
                    } else {
                      arr10 = c52;
                      if (0 === c52) {
                        if (arr10 >= arr10) {
                          if (arr10 > arr10) {
                            arr = [];
                          }
                          arr10 = arr;
                          arr10 = arr.push(arr10);
                        }
                      }
                    }
                    if (arr10 !== arr10) {
                      if (obj14.test(items7.charAt(arr10))) {
                        arr10 = items7.charAt(arr10);
                        arr10 = arr10 + 1;
                      } else {
                        arr10 = c52;
                        if (0 === c52) {
                          if (arr10 >= arr10) {
                            if (arr10 > arr10) {
                              arr = [];
                            }
                            arr10 = arr;
                            arr10 = arr.push(arr10);
                          }
                        }
                      }
                      const items5 = [];
                      if (arr10 !== arr10) {
                        do {
                          arr10 = items5.push(arr10);
                          let str22 = str;
                          arr10 = regex4;
                          if (regex4.test(str.charAt(arr10))) {
                            arr10 = str22.charAt(arr10);
                            arr10 = arr10 + 1;
                          } else {
                            arr10 = obj;
                            arr10 = c52;
                            arr10 = obj;
                            if (0 === c52) {
                              if (arr10 >= arr10) {
                                if (arr10 > arr10) {
                                  arr = [];
                                }
                                arr10 = arr;
                                arr10 = arr.push(arr10);
                              }
                            }
                          }
                          arr10 = obj;
                          obj14 = arr10;
                          items7 = str22;
                        } while (arr10 !== obj);
                      }
                      if (items5 !== arr10) {
                        arr10 = peg$parsenumber;
                        arr10 = peg$parsenumber();
                        if (arr10 !== arr10) {
                          if (obj14.test(items7.charAt(arr10))) {
                            arr10 = items7.charAt(arr10);
                            arr10 = arr10 + 1;
                          } else {
                            arr10 = c52;
                            if (0 === c52) {
                              if (arr10 >= arr10) {
                                if (arr10 > arr10) {
                                  arr = [];
                                }
                                arr10 = arr;
                                arr10 = arr.push(arr10);
                              }
                            }
                          }
                          const items6 = [];
                          let obj15 = items7;
                          items7 = arr10;
                          if (arr10 !== arr10) {
                            do {
                              arr10 = items6.push(arr10);
                              arr10 = regex4;
                              let str23 = str;
                              if (regex4.test(str.charAt(arr10))) {
                                arr10 = str23.charAt(arr10);
                                arr10 = arr10 + 1;
                              } else {
                                arr10 = obj;
                                arr10 = c52;
                                arr10 = obj;
                                if (0 === c52) {
                                  if (arr10 >= arr10) {
                                    if (arr10 > arr10) {
                                      arr = [];
                                    }
                                    arr10 = arr;
                                    arr10 = arr.push(arr10);
                                  }
                                }
                              }
                              items7 = obj;
                              obj15 = str23;
                            } while (arr10 !== obj);
                          }
                          if (items6 !== items7) {
                            if (41 === obj15.charCodeAt(arr10)) {
                              arr10 = c8;
                              arr10 = arr10 + 1;
                            } else {
                              arr10 = c52;
                              arr10 = items7;
                              if (0 === c52) {
                                arr10 = closure_9;
                                arr10 = items7;
                                if (arr10 >= arr10) {
                                  if (arr10 > arr10) {
                                    arr = [];
                                  }
                                  arr10 = arr;
                                  arr10 = arr.push(arr10);
                                  arr10 = items7;
                                }
                              }
                            }
                            if (arr10 !== items7) {
                              arr10 = peg$c23;
                              if (typeof peg$c23 !== "function") {
                                arr10 = HermesBuiltin.throwTypeError();
                              }
                              arr10 = globalThis;
                              const _Math4 = Math;
                              arr10 = closure_60;
                              items7 = [1, 0, 0, Math.tan(closure_60 * arr10), 1, 0];
                              arr10 = items7;
                            } else {
                              arr10 = items7;
                            }
                          } else {
                            arr10 = items7;
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              if (str14.substr(arr10, 5) === skewX) {
                arr10 = arr10 + 5;
              } else {
                arr10 = c52;
                if (0 === c52) {
                  if (arr10 >= arr10) {
                    if (arr10 > arr10) {
                      arr = [];
                    }
                    arr10 = arr;
                    arr10 = arr.push(arr10);
                  }
                }
              }
              if (arr10 !== arr10) {
                let obj12 = regex4;
                if (regex4.test(str14.charAt(arr10))) {
                  arr10 = str14.charAt(arr10);
                  arr10 = arr10 + 1;
                } else {
                  arr10 = c52;
                  if (0 === c52) {
                    if (arr10 >= arr10) {
                      if (arr10 > arr10) {
                        arr = [];
                      }
                      arr10 = arr;
                      arr10 = arr.push(arr10);
                    }
                  }
                }
                const items8 = [];
                if (arr10 !== arr10) {
                  do {
                    arr10 = items8.push(arr10);
                    let str18 = str;
                    arr10 = regex4;
                    if (regex4.test(str.charAt(arr10))) {
                      arr10 = str18.charAt(arr10);
                      arr10 = arr10 + 1;
                    } else {
                      arr10 = obj;
                      arr10 = c52;
                      arr10 = obj;
                      if (0 === c52) {
                        if (arr10 >= arr10) {
                          if (arr10 > arr10) {
                            arr = [];
                          }
                          arr10 = arr;
                          arr10 = arr.push(arr10);
                        }
                      }
                    }
                    arr10 = obj;
                    obj12 = arr10;
                    str14 = str18;
                  } while (arr10 !== obj);
                }
                if (items8 !== arr10) {
                  if (40 === str14.charCodeAt(arr10)) {
                    arr10 = c6;
                    arr10 = arr10 + 1;
                  } else {
                    arr10 = c52;
                    if (0 === c52) {
                      if (arr10 >= arr10) {
                        if (arr10 > arr10) {
                          arr = [];
                        }
                        arr10 = arr;
                        arr10 = arr.push(arr10);
                      }
                    }
                  }
                  if (arr10 !== arr10) {
                    if (obj12.test(str14.charAt(arr10))) {
                      arr10 = str14.charAt(arr10);
                      arr10 = arr10 + 1;
                    } else {
                      arr10 = c52;
                      if (0 === c52) {
                        if (arr10 >= arr10) {
                          if (arr10 > arr10) {
                            arr = [];
                          }
                          arr10 = arr;
                          arr10 = arr.push(arr10);
                        }
                      }
                    }
                    const items9 = [];
                    if (arr10 !== arr10) {
                      do {
                        arr10 = items9.push(arr10);
                        let str19 = str;
                        arr10 = regex4;
                        if (regex4.test(str.charAt(arr10))) {
                          arr10 = str19.charAt(arr10);
                          arr10 = arr10 + 1;
                        } else {
                          arr10 = obj;
                          arr10 = c52;
                          arr10 = obj;
                          if (0 === c52) {
                            if (arr10 >= arr10) {
                              if (arr10 > arr10) {
                                arr = [];
                              }
                              arr10 = arr;
                              arr10 = arr.push(arr10);
                            }
                          }
                        }
                        arr10 = obj;
                        obj12 = arr10;
                        str14 = str19;
                      } while (arr10 !== obj);
                    }
                    if (items9 !== arr10) {
                      arr10 = peg$parsenumber;
                      arr10 = peg$parsenumber();
                      if (arr10 !== arr10) {
                        if (obj12.test(str14.charAt(arr10))) {
                          arr10 = str14.charAt(arr10);
                          arr10 = arr10 + 1;
                        } else {
                          arr10 = c52;
                          if (0 === c52) {
                            if (arr10 >= arr10) {
                              if (arr10 > arr10) {
                                arr = [];
                              }
                              arr10 = arr;
                              arr10 = arr.push(arr10);
                            }
                          }
                        }
                        const items10 = [];
                        let obj13 = str14;
                        str14 = arr10;
                        if (arr10 !== arr10) {
                          do {
                            arr10 = items10.push(arr10);
                            arr10 = regex4;
                            let str20 = str;
                            if (regex4.test(str.charAt(arr10))) {
                              arr10 = str20.charAt(arr10);
                              arr10 = arr10 + 1;
                            } else {
                              arr10 = obj;
                              arr10 = c52;
                              arr10 = obj;
                              if (0 === c52) {
                                if (arr10 >= arr10) {
                                  if (arr10 > arr10) {
                                    arr = [];
                                  }
                                  arr10 = arr;
                                  arr10 = arr.push(arr10);
                                }
                              }
                            }
                            str14 = obj;
                            obj13 = str20;
                          } while (arr10 !== obj);
                        }
                        if (items10 !== str14) {
                          if (41 === obj13.charCodeAt(arr10)) {
                            arr10 = c8;
                            arr10 = arr10 + 1;
                          } else {
                            arr10 = c52;
                            arr10 = str14;
                            if (0 === c52) {
                              arr10 = str14;
                              if (arr10 >= arr10) {
                                if (arr10 > arr10) {
                                  arr = [];
                                }
                                arr10 = arr;
                                arr10 = arr.push(arr10);
                                arr10 = str14;
                              }
                            }
                          }
                          if (arr10 !== str14) {
                            arr10 = peg$c20;
                            if (typeof peg$c20 !== "function") {
                              arr10 = HermesBuiltin.throwTypeError();
                            }
                            arr10 = globalThis;
                            const _Math3 = Math;
                            arr10 = closure_60;
                            const items11 = [1, Math.tan(closure_60 * arr10), 0, 0, 1, 0];
                            arr10 = obj13;
                            arr10 = str14;
                            arr10 = items11;
                          } else {
                            arr10 = obj13;
                            arr10 = str14;
                            arr10 = str14;
                          }
                        } else {
                          arr10 = obj13;
                          arr10 = str14;
                          arr10 = str14;
                        }
                      } else {
                        arr10 = str14;
                      }
                    } else {
                      arr10 = str14;
                    }
                  } else {
                    arr10 = str14;
                  }
                } else {
                  arr10 = str14;
                }
              } else {
                arr10 = str14;
              }
              arr10 = arr10 === tmp12;
            }
          } else {
            if (str10.substr(arr10, 6) === rotate) {
              arr10 = arr10 + 6;
            } else {
              arr10 = c52;
              if (0 === c52) {
                if (arr10 >= arr10) {
                  if (arr10 > arr10) {
                    arr = [];
                  }
                  arr10 = arr;
                  arr10 = arr.push(arr10);
                }
              }
            }
            if (arr10 !== arr10) {
              arr10 = regex4;
              if (regex4.test(str10.charAt(arr10))) {
                arr10 = str10.charAt(arr10);
                arr10 = arr10 + 1;
              } else {
                arr10 = c52;
                if (0 === c52) {
                  if (arr10 >= arr10) {
                    if (arr10 > arr10) {
                      arr = [];
                    }
                    arr10 = arr;
                    arr10 = arr.push(arr10);
                  }
                }
              }
              const items12 = [];
              let obj10 = arr10;
              if (arr10 !== arr10) {
                do {
                  arr10 = items12.push(arr10);
                  let str15 = str;
                  arr10 = regex4;
                  if (regex4.test(str.charAt(arr10))) {
                    arr10 = str15.charAt(arr10);
                    arr10 = arr10 + 1;
                  } else {
                    arr10 = obj;
                    arr10 = c52;
                    arr10 = obj;
                    if (0 === c52) {
                      if (arr10 >= arr10) {
                        if (arr10 > arr10) {
                          arr = [];
                        }
                        arr10 = arr;
                        arr10 = arr.push(arr10);
                      }
                    }
                  }
                  arr10 = obj;
                  obj10 = arr10;
                  str10 = str15;
                } while (arr10 !== obj);
              }
              if (items12 !== arr10) {
                if (40 === str10.charCodeAt(arr10)) {
                  arr10 = c6;
                  arr10 = arr10 + 1;
                } else {
                  arr10 = c52;
                  if (0 === c52) {
                    if (arr10 >= arr10) {
                      if (arr10 > arr10) {
                        arr = [];
                      }
                      arr10 = arr;
                      arr10 = arr.push(arr10);
                    }
                  }
                }
                if (arr10 !== arr10) {
                  if (obj10.test(str10.charAt(arr10))) {
                    arr10 = str10.charAt(arr10);
                    arr10 = arr10 + 1;
                  } else {
                    arr10 = c52;
                    if (0 === c52) {
                      if (arr10 >= arr10) {
                        if (arr10 > arr10) {
                          arr = [];
                        }
                        arr10 = arr;
                        arr10 = arr.push(arr10);
                      }
                    }
                  }
                  const items13 = [];
                  if (arr10 !== arr10) {
                    do {
                      arr10 = items13.push(arr10);
                      let str16 = str;
                      arr10 = regex4;
                      if (regex4.test(str.charAt(arr10))) {
                        arr10 = str16.charAt(arr10);
                        arr10 = arr10 + 1;
                      } else {
                        arr10 = obj;
                        arr10 = c52;
                        arr10 = obj;
                        if (0 === c52) {
                          if (arr10 >= arr10) {
                            if (arr10 > arr10) {
                              arr = [];
                            }
                            arr10 = arr;
                            arr10 = arr.push(arr10);
                          }
                        }
                      }
                      arr10 = obj;
                      obj10 = arr10;
                      str10 = str16;
                    } while (arr10 !== obj);
                  }
                  if (items13 !== arr10) {
                    arr10 = peg$parsenumber;
                    arr10 = peg$parsenumber();
                    if (arr10 !== arr10) {
                      arr10 = peg$parsecommaWsp;
                      if (peg$parsecommaWsp() !== arr10) {
                        arr10 = arr10();
                        if (arr10 !== arr10) {
                          if (arr10() !== arr10) {
                            arr10 = arr10();
                            if (arr10 !== arr10) {
                              arr10 = peg$c27;
                              if (typeof peg$c27 !== "function") {
                                arr10 = HermesBuiltin.throwTypeError();
                              }
                              const items14 = [arr10, arr10];
                              let items16 = items14;
                              if (items16 === arr10) {
                                items16 = null;
                              }
                              if (items16 !== arr10) {
                                if (obj10.test(str10.charAt(arr10))) {
                                  arr10 = str10.charAt(arr10);
                                  arr10 = arr10 + 1;
                                } else {
                                  arr10 = c52;
                                  if (0 === c52) {
                                    if (arr10 >= arr10) {
                                      if (arr10 > arr10) {
                                        arr = [];
                                      }
                                      arr10 = arr;
                                      arr10 = arr.push(arr10);
                                    }
                                  }
                                }
                                const items15 = [];
                                let obj11 = str10;
                                str10 = arr10;
                                if (arr10 !== arr10) {
                                  do {
                                    arr10 = items15.push(arr10);
                                    arr10 = regex4;
                                    let str17 = str;
                                    if (regex4.test(str.charAt(arr10))) {
                                      arr10 = str17.charAt(arr10);
                                      arr10 = arr10 + 1;
                                    } else {
                                      arr10 = obj;
                                      arr10 = c52;
                                      arr10 = obj;
                                      if (0 === c52) {
                                        if (arr10 >= arr10) {
                                          if (arr10 > arr10) {
                                            arr = [];
                                          }
                                          arr10 = arr;
                                          arr10 = arr.push(arr10);
                                        }
                                      }
                                    }
                                    str10 = obj;
                                    obj11 = str17;
                                  } while (arr10 !== obj);
                                }
                                if (items15 !== str10) {
                                  if (41 === obj11.charCodeAt(arr10)) {
                                    arr10 = c8;
                                    arr10 = arr10 + 1;
                                  } else {
                                    arr10 = c52;
                                    arr10 = str10;
                                    if (0 === c52) {
                                      arr10 = str10;
                                      if (arr10 >= arr10) {
                                        if (arr10 > arr10) {
                                          arr = [];
                                        }
                                        arr10 = arr;
                                        arr10 = arr.push(arr10);
                                        arr10 = str10;
                                      }
                                    }
                                  }
                                  if (arr10 !== str10) {
                                    arr10 = peg$c17;
                                    if (typeof peg$c17 !== "function") {
                                      arr10 = HermesBuiltin.throwTypeError();
                                    }
                                    arr10 = globalThis;
                                    const _Math = Math;
                                    arr10 = closure_60;
                                    arr10 = Math.cos(closure_60 * arr10);
                                    const _Math2 = Math;
                                    arr10 = Math.sin(closure_60 * arr10);
                                    arr10 = null;
                                    if (null !== items16) {
                                      [tmp, tmp] = items16;
                                      items16 = [arr10, -arr10, arr10 * -arr10 + -arr10 * -arr10 + arr10, arr10, arr10, ];
                                      arr10 = arr10 * -arr10;
                                      items16[5] = arr10 + arr10 * -arr10 + arr10;
                                      let items17 = items16;
                                    } else {
                                      items17 = [arr10, -arr10, 0, arr10, arr10, 0];
                                    }
                                    arr10 = items17;
                                    arr10 = obj11;
                                    arr10 = str10;
                                  } else {
                                    arr10 = obj11;
                                    arr10 = str10;
                                    arr10 = str10;
                                  }
                                } else {
                                  arr10 = obj11;
                                  arr10 = str10;
                                  arr10 = str10;
                                }
                              } else {
                                arr10 = str10;
                              }
                            }
                          }
                        }
                      }
                      items16 = arr10;
                    } else {
                      arr10 = str10;
                    }
                  } else {
                    arr10 = str10;
                  }
                } else {
                  arr10 = str10;
                }
              } else {
                arr10 = str10;
              }
            } else {
              arr10 = str10;
            }
            arr10 = arr10 === tmp12;
          }
        } else {
          if (str6.substr(arr10, 5) === scale) {
            arr10 = arr10 + 5;
          } else {
            arr10 = c52;
            arr10 = charAtResult6;
            if (0 === c52) {
              arr10 = charAtResult6;
              if (arr10 >= arr10) {
                if (arr10 > arr10) {
                  arr = [];
                }
                arr10 = arr;
                arr10 = arr.push(arr10);
                arr10 = charAtResult6;
              }
            }
          }
          if (arr10 !== charAtResult6) {
            arr10 = regex4;
            if (regex4.test(str6.charAt(arr10))) {
              arr10 = str6.charAt(arr10);
              arr10 = arr10 + 1;
            } else {
              arr10 = c52;
              arr10 = charAtResult6;
              if (0 === c52) {
                arr10 = charAtResult6;
                if (arr10 >= arr10) {
                  if (arr10 > arr10) {
                    arr = [];
                  }
                  arr10 = arr;
                  arr10 = arr.push(arr10);
                  arr10 = charAtResult6;
                }
              }
            }
            const items18 = [];
            let obj8 = arr10;
            arr10 = charAtResult6;
            if (arr10 !== charAtResult6) {
              do {
                arr10 = items18.push(arr10);
                let str11 = str;
                arr10 = regex4;
                if (regex4.test(str.charAt(arr10))) {
                  arr10 = str11.charAt(arr10);
                  arr10 = arr10 + 1;
                } else {
                  charAtResult6 = obj;
                  arr10 = c52;
                  arr10 = obj;
                  if (0 === c52) {
                    arr10 = charAtResult6;
                    if (arr10 >= arr10) {
                      if (arr10 > arr10) {
                        arr = [];
                      }
                      arr10 = arr;
                      arr10 = arr.push(arr10);
                      arr10 = charAtResult6;
                    }
                  }
                }
                arr10 = obj;
                obj8 = arr10;
                str6 = str11;
              } while (arr10 !== obj);
            }
            if (items18 !== arr10) {
              if (40 === str6.charCodeAt(arr10)) {
                arr10 = c6;
                arr10 = arr10 + 1;
              } else {
                arr10 = c52;
                if (0 === c52) {
                  if (arr10 >= arr10) {
                    if (arr10 > arr10) {
                      arr = [];
                    }
                    charAtResult6 = arr;
                    arr10 = arr.push(arr10);
                  }
                }
              }
              if (arr10 !== arr10) {
                if (obj8.test(str6.charAt(arr10))) {
                  arr10 = str6.charAt(arr10);
                  arr10 = arr10 + 1;
                } else {
                  arr10 = c52;
                  if (0 === c52) {
                    if (arr10 >= arr10) {
                      if (arr10 > arr10) {
                        arr = [];
                      }
                      arr10 = arr;
                      arr10 = arr.push(arr10);
                    }
                  }
                }
                const items19 = [];
                charAtResult6 = obj8;
                if (arr10 !== arr10) {
                  do {
                    arr10 = items19.push(arr10);
                    let str12 = str;
                    arr10 = regex4;
                    if (regex4.test(str.charAt(arr10))) {
                      arr10 = str12.charAt(arr10);
                      arr10 = arr10 + 1;
                    } else {
                      arr10 = obj;
                      arr10 = c52;
                      arr10 = obj;
                      if (0 === c52) {
                        if (arr10 >= arr10) {
                          if (arr10 > arr10) {
                            arr = [];
                          }
                          arr10 = arr;
                          arr10 = arr.push(arr10);
                        }
                      }
                    }
                    arr10 = obj;
                    charAtResult6 = arr10;
                    str6 = str12;
                  } while (arr10 !== obj);
                }
                if (items19 !== arr10) {
                  arr10 = peg$parsenumber;
                  arr10 = peg$parsenumber();
                  if (arr10 !== arr10) {
                    arr10 = peg$parsecommaWsp;
                    if (peg$parsecommaWsp() !== arr10) {
                      arr10 = arr10();
                      if (arr10 !== arr10) {
                        arr10 = peg$c26;
                        if (typeof peg$c26 !== "function") {
                          arr10 = HermesBuiltin.throwTypeError();
                        }
                        if (arr10 === arr10) {
                          arr10 = null;
                        }
                        if (arr10 !== arr10) {
                          if (charAtResult6.test(str6.charAt(arr10))) {
                            charAtResult6 = str6.charAt(arr10);
                            arr10 = arr10 + 1;
                          } else {
                            arr10 = c52;
                            charAtResult6 = arr10;
                            if (0 === c52) {
                              charAtResult6 = arr10;
                              if (arr10 >= arr10) {
                                if (arr10 > arr10) {
                                  arr = [];
                                }
                                arr10 = arr;
                                arr10 = arr.push(arr10);
                                charAtResult6 = arr10;
                              }
                            }
                          }
                          const items20 = [];
                          let obj9 = str6;
                          str6 = arr10;
                          if (charAtResult6 !== arr10) {
                            do {
                              arr10 = items20.push(charAtResult6);
                              arr10 = regex4;
                              let str13 = str;
                              if (regex4.test(str.charAt(arr10))) {
                                arr10 = str13.charAt(arr10);
                                arr10 = arr10 + 1;
                              } else {
                                arr10 = obj;
                                arr10 = c52;
                                arr10 = obj;
                                if (0 === c52) {
                                  if (arr10 >= arr10) {
                                    if (arr10 > arr10) {
                                      arr = [];
                                    }
                                    arr10 = arr;
                                    arr10 = arr.push(arr10);
                                  }
                                }
                              }
                              str6 = obj;
                              charAtResult6 = arr10;
                              obj9 = str13;
                            } while (arr10 !== obj);
                          }
                          if (items20 !== str6) {
                            if (41 === obj9.charCodeAt(arr10)) {
                              arr10 = c8;
                              arr10 = arr10 + 1;
                            } else {
                              arr10 = c52;
                              arr10 = str6;
                              if (0 === c52) {
                                arr10 = str6;
                                if (arr10 >= arr10) {
                                  if (arr10 > arr10) {
                                    arr = [];
                                  }
                                  arr10 = arr;
                                  charAtResult6 = arr.push(arr10);
                                  arr10 = str6;
                                }
                              }
                            }
                            if (arr10 !== str6) {
                              arr10 = peg$c14;
                              if (typeof peg$c14 !== "function") {
                                arr10 = HermesBuiltin.throwTypeError();
                              }
                              const items21 = [arr10, 0, 0, 0, , ];
                              arr10 = null;
                              items21[4] = arr10;
                              items21[5] = 0;
                              arr10 = obj9;
                              arr10 = str6;
                              arr10 = items21;
                            } else {
                              arr10 = obj9;
                              arr10 = str6;
                              arr10 = str6;
                            }
                          } else {
                            arr10 = obj9;
                            arr10 = str6;
                            arr10 = str6;
                          }
                        } else {
                          arr10 = str6;
                        }
                      }
                    }
                  } else {
                    arr10 = str6;
                  }
                } else {
                  arr10 = str6;
                }
              } else {
                arr10 = str6;
              }
            } else {
              arr10 = str6;
            }
          } else {
            arr10 = str6;
            arr10 = charAtResult6;
            arr10 = charAtResult6;
          }
          arr10 = arr10 === tmp12;
        }
      } else {
        if (str2.substr(arr10, 9) === translate) {
          arr10 = arr10 + 9;
        } else {
          arr10 = c52;
          arr10 = tmp12;
          if (0 === c52) {
            arr10 = tmp12;
            if (arr10 >= arr10) {
              if (arr10 > arr10) {
                arr = [];
              }
              arr10 = arr;
              arr10 = arr.push(arr10);
              arr10 = tmp12;
            }
          }
        }
        if (arr10 !== tmp12) {
          arr10 = regex4;
          if (regex4.test(str2.charAt(arr10))) {
            arr10 = str2.charAt(arr10);
            arr10 = arr10 + 1;
          } else {
            arr10 = c52;
            arr10 = tmp12;
            if (0 === c52) {
              arr10 = tmp12;
              if (arr10 >= arr10) {
                if (arr10 > arr10) {
                  arr = [];
                }
                arr10 = arr;
                arr10 = arr.push(arr10);
                arr10 = tmp12;
              }
            }
          }
          const items22 = [];
          let obj5 = arr10;
          arr10 = tmp12;
          if (arr10 !== tmp12) {
            do {
              arr10 = items22.push(arr10);
              let str7 = str;
              arr10 = regex4;
              if (regex4.test(str.charAt(arr10))) {
                arr10 = str7.charAt(arr10);
                arr10 = arr10 + 1;
              } else {
                arr10 = obj;
                arr10 = c52;
                arr10 = obj;
                if (0 === c52) {
                  if (arr10 >= arr10) {
                    if (arr10 > arr10) {
                      arr = [];
                    }
                    arr10 = arr;
                    arr10 = arr.push(arr10);
                  }
                }
              }
              arr10 = obj;
              obj5 = arr10;
              str2 = str7;
            } while (arr10 !== obj);
          }
          if (items22 !== arr10) {
            if (40 === str2.charCodeAt(arr10)) {
              arr10 = c6;
              arr10 = arr10 + 1;
            } else {
              arr10 = c52;
              if (0 === c52) {
                if (arr10 >= arr10) {
                  if (arr10 > arr10) {
                    arr = [];
                  }
                  arr10 = arr;
                  arr10 = arr.push(arr10);
                }
              }
            }
            if (arr10 !== arr10) {
              if (obj5.test(str2.charAt(arr10))) {
                arr10 = str2.charAt(arr10);
                arr10 = arr10 + 1;
              } else {
                arr10 = c52;
                if (0 === c52) {
                  if (arr10 >= arr10) {
                    if (arr10 > arr10) {
                      arr = [];
                    }
                    arr10 = arr;
                    arr10 = arr.push(arr10);
                  }
                }
              }
              const items23 = [];
              let obj6 = obj5;
              if (arr10 !== arr10) {
                do {
                  arr10 = items23.push(arr10);
                  let str8 = str;
                  arr10 = regex4;
                  if (regex4.test(str.charAt(arr10))) {
                    arr10 = str8.charAt(arr10);
                    arr10 = arr10 + 1;
                  } else {
                    arr10 = obj;
                    arr10 = c52;
                    arr10 = obj;
                    if (0 === c52) {
                      if (arr10 >= arr10) {
                        if (arr10 > arr10) {
                          arr = [];
                        }
                        arr10 = arr;
                        arr10 = arr.push(arr10);
                      }
                    }
                  }
                  arr10 = obj;
                  obj6 = arr10;
                  str2 = str8;
                } while (arr10 !== obj);
              }
              if (items23 !== arr10) {
                arr10 = peg$parsenumber;
                arr10 = peg$parsenumber();
                if (arr10 !== arr10) {
                  arr10 = peg$parsecommaWsp;
                  if (peg$parsecommaWsp() !== arr10) {
                    arr10 = arr10();
                    if (arr10 !== arr10) {
                      arr10 = peg$c26;
                      let num11 = arr10;
                      if (typeof peg$c26 !== "function") {
                        arr10 = HermesBuiltin.throwTypeError();
                      }
                      if (num11 === arr10) {
                        num11 = null;
                      }
                      if (num11 !== arr10) {
                        if (obj6.test(str2.charAt(arr10))) {
                          arr10 = str2.charAt(arr10);
                          arr10 = arr10 + 1;
                        } else {
                          arr10 = c52;
                          if (0 === c52) {
                            if (arr10 >= arr10) {
                              if (arr10 > arr10) {
                                arr = [];
                              }
                              arr10 = arr;
                              arr10 = arr.push(arr10);
                            }
                          }
                        }
                        const items24 = [];
                        let obj7 = str2;
                        str2 = arr10;
                        if (arr10 !== arr10) {
                          do {
                            arr10 = items24.push(arr10);
                            arr10 = regex4;
                            let str9 = str;
                            if (regex4.test(str.charAt(arr10))) {
                              arr10 = str9.charAt(arr10);
                              arr10 = arr10 + 1;
                            } else {
                              arr10 = obj;
                              arr10 = c52;
                              arr10 = obj;
                              if (0 === c52) {
                                if (arr10 >= arr10) {
                                  if (arr10 > arr10) {
                                    arr = [];
                                  }
                                  arr10 = arr;
                                  arr10 = arr.push(arr10);
                                }
                              }
                            }
                            str2 = obj;
                            obj7 = str9;
                          } while (arr10 !== obj);
                        }
                        if (items24 !== str2) {
                          if (41 === obj7.charCodeAt(arr10)) {
                            arr10 = c8;
                            arr10 = arr10 + 1;
                          } else {
                            arr10 = c52;
                            arr10 = str2;
                            if (0 === c52) {
                              arr10 = str2;
                              if (arr10 >= arr10) {
                                if (arr10 > arr10) {
                                  arr = [];
                                }
                                arr10 = arr;
                                arr10 = arr.push(arr10);
                                arr10 = str2;
                              }
                            }
                          }
                          if (arr10 !== str2) {
                            arr10 = peg$c11;
                            if (typeof peg$c11 !== "function") {
                              arr10 = HermesBuiltin.throwTypeError();
                            }
                            const items25 = [1, 0, arr10, 0, 1];
                            if (!num11) {
                              num11 = 0;
                            }
                            items25[5] = num11;
                            arr10 = obj7;
                            arr10 = str2;
                            arr10 = items25;
                          } else {
                            arr10 = obj7;
                            arr10 = str2;
                            arr10 = str2;
                          }
                        } else {
                          arr10 = obj7;
                          arr10 = str2;
                          arr10 = str2;
                        }
                      } else {
                        arr10 = str2;
                      }
                    }
                  }
                  num11 = arr10;
                } else {
                  arr10 = str2;
                }
              } else {
                arr10 = str2;
              }
            } else {
              arr10 = str2;
            }
          } else {
            arr10 = str2;
          }
        } else {
          arr10 = str2;
          arr10 = tmp12;
          arr10 = tmp12;
        }
        arr10 = arr10 === tmp12;
      }
    }
    function peg$parsenumber() {
      if (regex2.test(str.charAt(c48))) {
        let charAtResult = str.charAt(c48);
        c48 = c48 + 1;
      } else {
        charAtResult = obj;
        if (0 === c52) {
          charAtResult = tmp2;
          if (c48 >= c50) {
            if (tmp6 > c50) {
              c50 = tmp6;
              let arr = [];
            }
            arr = arr.push(tmp5);
            charAtResult = tmp2;
          }
        }
      }
      if (charAtResult === regex2) {
        charAtResult = null;
      }
      if (charAtResult !== regex2) {
        c52 = c52 + 1;
        let tmp15 = peg$parsedigitSequence();
        if (tmp15 === tmp11) {
          tmp15 = null;
        }
        if (tmp15 !== tmp11) {
          if (46 === str.charCodeAt(c48)) {
            let tmp19 = c36;
            c48 = c48 + 1;
          } else {
            tmp19 = tmp11;
            if (0 === c52) {
              tmp19 = tmp11;
              if (c48 >= c50) {
                if (tmp21 > c50) {
                  c50 = tmp21;
                  arr = [];
                }
                arr = arr.push(tmp20);
                tmp19 = tmp11;
              }
            }
          }
          if (tmp19 !== tmp11) {
            let tmp14Result = tmp14();
            if (tmp14Result !== tmp11) {
              if (typeof peg$c36 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              let joined = null;
              if (tmp15) {
                joined = tmp15.join("");
              }
              const items = [joined, ".", tmp14Result.join("")];
              let joined1 = items.join("");
            }
          }
          c48 = tmp12;
          joined1 = tmp11;
        } else {
          c48 = tmp12;
          joined1 = tmp11;
        }
        if (joined1 !== tmp11) {
          const diff = c52 - 1;
          c52 = diff;
          if (joined1 === tmp11) {
            if (0 === diff) {
              if (c48 >= c50) {
                if (tmp43 > c50) {
                  c50 = tmp43;
                  arr = [];
                }
                arr.push(tmp42);
              }
            }
          }
          if (joined1 !== tmp11) {
            let tmp47 = peg$parseexponent();
            if (tmp47 === tmp11) {
              tmp47 = null;
            }
            if (tmp47 !== tmp11) {
              const items1 = [joined1, tmp47];
              let obj4 = items1;
            } else {
              c48 = tmp12;
              obj4 = tmp11;
            }
          } else {
            c48 = tmp12;
            obj4 = tmp11;
          }
          let joined2 = obj4;
          if (obj4 !== tmp11) {
            if (typeof peg$c31 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            joined2 = obj4.join("");
          }
          if (joined2 === tmp11) {
            tmp14Result = tmp14();
            if (tmp14Result !== tmp11) {
              const tmp53 = peg$parseexponent();
              if (tmp53 !== tmp11) {
                const items2 = [tmp14Result, tmp53];
                let obj5 = items2;
              }
              let joined3 = obj5;
              if (obj5 !== tmp11) {
                if (typeof peg$c32 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                joined3 = obj5.join("");
              }
              joined2 = joined3;
            }
            obj5 = tmp11;
            const tmp50 = c48;
          }
          if (joined2 !== tmp11) {
            const items3 = [charAtResult, joined2];
            let obj2 = items3;
          } else {
            c48 = tmp;
            obj2 = tmp11;
          }
        } else {
          const tmp14Result1 = tmp14();
          if (tmp14Result1 === tmp11) {
            c48 = tmp74;
          }
          if (46 === str.charCodeAt(c48)) {
            let tmp30 = c36;
            c48 = c48 + 1;
          } else {
            tmp30 = tmp11;
            if (0 === c52) {
              tmp30 = tmp11;
              if (c48 >= c50) {
                if (tmp32 > c50) {
                  c50 = tmp32;
                  arr = [];
                }
                arr.push(tmp31);
                tmp30 = tmp11;
              }
            }
          }
          if (tmp30 !== tmp11) {
            if (typeof peg$c32 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            let joined4 = tmp14Result1.join("");
          } else {
            c48 = tmp74;
            joined4 = tmp11;
          }
        }
      } else {
        c48 = tmp;
        obj2 = tmp11;
      }
      let parsed = obj2;
      if (obj2 !== regex2) {
        if (typeof peg$c24 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _parseFloat = parseFloat;
        parsed = parseFloat(obj2.join(""));
      }
      if (parsed === regex2) {
        if (obj.test(str.charAt(c48))) {
          let charAtResult1 = str.charAt(c48);
          c48 = c48 + 1;
        } else {
          charAtResult1 = tmp11;
          if (0 === c52) {
            charAtResult1 = tmp11;
            if (c48 >= c50) {
              if (tmp62 > c50) {
                c50 = tmp62;
                arr = [];
              }
              arr.push(tmp61);
              charAtResult1 = tmp11;
            }
          }
        }
        if (charAtResult1 === tmp11) {
          charAtResult1 = null;
        }
        if (charAtResult1 !== tmp11) {
          const obj7 = peg$parsedigitSequence();
          let joined5 = obj7;
          if (obj7 !== tmp11) {
            if (typeof peg$c30 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            joined5 = obj7.join("");
          }
          if (joined5 !== tmp11) {
            const items4 = [charAtResult1, joined5];
            let obj6 = items4;
          } else {
            c48 = tmp79;
            obj6 = tmp11;
          }
        } else {
          c48 = tmp79;
          obj6 = tmp11;
        }
        let parsed1 = obj6;
        if (obj6 !== tmp11) {
          if (typeof peg$c25 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const _parseInt = parseInt;
          parsed1 = parseInt(obj6.join(""));
        }
        parsed = parsed1;
      }
      return parsed;
    }
    function peg$parsecommaWsp() {
      let charAtResult1;
      let charAtResult2;
      let charAtResult3;
      if (regex4.test(str.charAt(c48))) {
        let charAtResult = str.charAt(c48);
        c48 = c48 + 1;
      } else {
        charAtResult = obj;
        if (0 === c52) {
          charAtResult = tmp3;
          if (c48 >= c50) {
            if (tmp7 > c50) {
              c50 = tmp7;
              let arr = [];
            }
            arr = arr.push(tmp6);
            charAtResult = tmp3;
          }
        }
      }
      obj = str;
      let tmp14 = obj;
      let tmp15 = obj;
      let tmp16 = tmp2;
      let tmp17 = obj;
      if (charAtResult !== obj) {
        const items = [];
        obj = str;
        tmp14 = tmp12;
        tmp15 = items;
        tmp16 = tmp2;
        tmp17 = tmp12;
        if (tmp13) {
          do {
            arr = items.push(charAtResult);
            let tmp20 = regex4;
            let str2 = str;
            let tmp21 = c48;
            let tmp19 = peg$parsewsp;
            if (regex4.test(str.charAt(c48))) {
              let tmp29 = c48;
              charAtResult1 = str2.charAt(c48);
              let tmp30 = c48;
              c48 = c48 + 1;
            } else {
              let tmp22 = obj;
              let tmp23 = c52;
              charAtResult1 = obj;
              if (0 === c52) {
                let tmp26 = c48;
                charAtResult1 = tmp22;
                if (c48 >= c50) {
                  if (tmp26 > c50) {
                    c50 = tmp26;
                    arr = [];
                  }
                  let tmp27 = arr;
                  let arr1 = arr.push(tmp25);
                  charAtResult1 = tmp22;
                }
              }
            }
            tmp14 = obj;
            charAtResult = charAtResult1;
            obj = str2;
            tmp15 = items;
            tmp16 = tmp19;
            tmp17 = obj;
          } while (charAtResult1 !== obj);
        }
      }
      if (tmp15 !== tmp17) {
        if (44 === obj.charCodeAt(c48)) {
          let tmp37 = c30;
          c48 = c48 + 1;
        } else {
          tmp37 = tmp14;
          if (0 === c52) {
            tmp37 = tmp14;
            if (c48 >= c50) {
              if (tmp39 > c50) {
                c50 = tmp39;
                arr = [];
              }
              arr.push(tmp38);
              tmp37 = tmp14;
            }
          }
        }
        if (tmp37 === tmp17) {
          tmp37 = null;
        }
        if (tmp37 !== tmp17) {
          const items1 = [];
          let tmp16Result = tmp16();
          let tmp44 = obj;
          let tmp45 = tmp16;
          let tmp46 = tmp17;
          if (tmp16Result !== tmp17) {
            do {
              let arr3 = items1.push(tmp16Result);
              let tmp49 = regex4;
              let str3 = str;
              let tmp50 = c48;
              let tmp48 = peg$parsewsp;
              if (regex4.test(str.charAt(c48))) {
                let tmp58 = c48;
                charAtResult2 = str3.charAt(c48);
                let tmp59 = c48;
                c48 = c48 + 1;
              } else {
                let tmp51 = obj;
                let tmp52 = c52;
                charAtResult2 = obj;
                if (0 === c52) {
                  let tmp55 = c48;
                  charAtResult2 = tmp51;
                  if (c48 >= c50) {
                    if (tmp55 > c50) {
                      c50 = tmp55;
                      arr = [];
                    }
                    let tmp56 = arr;
                    let arr4 = arr.push(tmp54);
                    charAtResult2 = tmp51;
                  }
                }
              }
              tmp14 = obj;
              tmp16Result = charAtResult2;
              tmp44 = str3;
              tmp45 = tmp48;
              tmp46 = obj;
            } while (charAtResult2 !== obj);
          }
          if (items1 !== tmp46) {
            const items2 = [tmp15, tmp37, items1];
            let obj2 = tmp44;
            let tmp31 = tmp14;
            let tmp32 = items2;
            let tmp33 = tmp45;
            let tmp34 = tmp46;
          } else {
            c48 = tmp;
            obj2 = tmp44;
            tmp31 = tmp14;
            tmp32 = tmp46;
            tmp33 = tmp45;
            tmp34 = tmp46;
          }
        } else {
          c48 = tmp;
          obj2 = obj;
          tmp31 = tmp14;
          tmp32 = tmp17;
          tmp33 = tmp16;
          tmp34 = tmp17;
        }
      } else {
        c48 = tmp;
        obj2 = obj;
        tmp31 = tmp14;
        tmp32 = tmp17;
        tmp33 = tmp16;
        tmp34 = tmp17;
      }
      if (tmp32 === tmp34) {
        if (44 === obj2.charCodeAt(c48)) {
          let tmp61 = c30;
          c48 = c48 + 1;
        } else {
          tmp61 = tmp31;
          if (0 === c52) {
            tmp61 = tmp31;
            if (c48 >= c50) {
              if (tmp63 > c50) {
                c50 = tmp63;
                arr = [];
              }
              arr.push(tmp62);
              tmp61 = tmp31;
            }
          }
        }
        if (tmp61 !== tmp34) {
          const items3 = [];
          let tmp33Result = tmp33();
          let tmp68 = tmp34;
          if (tmp33Result !== tmp34) {
            do {
              let arr6 = items3.push(tmp33Result);
              let tmp70 = regex4;
              let str4 = str;
              let tmp71 = c48;
              if (regex4.test(str.charAt(c48))) {
                let tmp79 = c48;
                charAtResult3 = str4.charAt(c48);
                let tmp80 = c48;
                c48 = c48 + 1;
              } else {
                let tmp72 = obj;
                let tmp73 = c52;
                charAtResult3 = obj;
                if (0 === c52) {
                  let tmp76 = c48;
                  charAtResult3 = tmp72;
                  if (c48 >= c50) {
                    if (tmp76 > c50) {
                      c50 = tmp76;
                      arr = [];
                    }
                    let tmp77 = arr;
                    let arr7 = arr.push(tmp75);
                    charAtResult3 = tmp72;
                  }
                }
              }
              tmp68 = obj;
              tmp33Result = charAtResult3;
            } while (charAtResult3 !== obj);
          }
          if (items3 !== tmp68) {
            const items4 = [tmp61, items3];
            tmp32 = items4;
          } else {
            c48 = tmp81;
            tmp32 = tmp68;
          }
        } else {
          c48 = tmp81;
          tmp32 = tmp34;
        }
      }
      return tmp32;
    }
    function peg$parseexponent() {
      let obj;
      if (regex.test(str.charAt(c48))) {
        let charAtResult = str.charAt(c48);
        c48 = c48 + 1;
      } else {
        charAtResult = obj;
        if (0 === c52) {
          charAtResult = tmp2;
          if (c48 >= c50) {
            if (tmp6 > c50) {
              c50 = tmp6;
              let arr = [];
            }
            arr = arr.push(tmp5);
            charAtResult = tmp2;
          }
        }
      }
      if (charAtResult !== obj) {
        if (regex2.test(str.charAt(c48))) {
          let charAtResult1 = str.charAt(c48);
          c48 = c48 + 1;
        } else {
          charAtResult1 = tmp11;
          if (0 === c52) {
            charAtResult1 = tmp11;
            if (c48 >= c50) {
              if (tmp18 > c50) {
                c50 = tmp18;
                arr = [];
              }
              arr = arr.push(tmp17);
              charAtResult1 = tmp11;
            }
          }
        }
        if (charAtResult1 === tmp11) {
          charAtResult1 = null;
        }
        if (charAtResult1 !== tmp11) {
          const tmp24 = peg$parsedigitSequence();
          if (tmp24 !== tmp11) {
            const items = [charAtResult, charAtResult1, tmp24];
            let tmp12 = items;
          }
        }
        c48 = tmp;
        tmp12 = tmp11;
      } else {
        c48 = tmp;
        tmp12 = tmp11;
      }
      let joined = tmp12;
      if (tmp12 !== obj) {
        if (typeof peg$c39 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const items1 = [, , ];
        [arr2[0], arr2[1], obj] = tmp12;
        items1[2] = obj.join("");
        joined = items1.join("");
      }
      return joined;
    }
    function peg$parsedigitSequence() {
      let charAtResult1;
      if (regex3.test(str.charAt(closure_48))) {
        let charAtResult = str.charAt(closure_48);
        closure_48 = closure_48 + 1;
      } else {
        charAtResult = obj;
        if (0 === c52) {
          charAtResult = tmp;
          if (closure_48 >= c50) {
            if (tmp5 > c50) {
              c50 = tmp5;
              let arr = [];
            }
            arr = arr.push(tmp4);
            charAtResult = tmp;
          }
        }
      }
      let tmp10 = obj;
      if (charAtResult !== obj) {
        const items = [];
        tmp10 = items;
        if (tmp11) {
          do {
            arr = items.push(charAtResult);
            let tmp13 = regex3;
            let str2 = str;
            let tmp14 = closure_48;
            if (regex3.test(str.charAt(closure_48))) {
              let tmp22 = closure_48;
              charAtResult1 = str2.charAt(closure_48);
              let tmp23 = closure_48;
              closure_48 = closure_48 + 1;
            } else {
              let tmp15 = obj;
              let tmp16 = c52;
              charAtResult1 = obj;
              if (0 === c52) {
                let tmp19 = closure_48;
                charAtResult1 = tmp15;
                if (closure_48 >= c50) {
                  if (tmp19 > c50) {
                    c50 = tmp19;
                    arr = [];
                  }
                  let tmp20 = arr;
                  let arr1 = arr.push(tmp18);
                  charAtResult1 = tmp15;
                }
              }
            }
            let tmp24 = obj;
            charAtResult = charAtResult1;
            tmp10 = items;
          } while (charAtResult1 !== obj);
        }
      }
      return tmp10;
    }
    function peg$parsewsp() {
      if (regex4.test(str.charAt(closure_48))) {
        let charAtResult = str.charAt(closure_48);
        closure_48 = closure_48 + 1;
      } else {
        charAtResult = obj;
        if (0 === c52) {
          charAtResult = tmp;
          if (closure_48 >= c50) {
            if (tmp5 > c50) {
              c50 = tmp5;
              let arr = [];
            }
            arr = arr.push(tmp4);
            charAtResult = tmp;
          }
        }
      }
      return charAtResult;
    }
    if (undefined === arg1) {
      obj = {};
    }
    function peg$parsetransformList() {
      let charAtResult1;
      let charAtResult2;
      let tmp2 = peg$parsewsp;
      if (regex4.test(str.charAt(c48))) {
        let charAtResult = str.charAt(c48);
        c48 = c48 + 1;
      } else {
        charAtResult = obj;
        if (0 === c52) {
          charAtResult = tmp3;
          if (c48 >= c50) {
            if (tmp7 > c50) {
              c50 = tmp7;
              let arr = [];
            }
            arr = arr.push(tmp6);
            charAtResult = tmp3;
          }
        }
      }
      const items = [];
      let tmp12 = obj;
      if (charAtResult !== obj) {
        do {
          arr = items.push(charAtResult);
          let tmp15 = regex4;
          let str2 = str;
          let tmp16 = c48;
          let tmp14 = peg$parsewsp;
          if (regex4.test(str.charAt(c48))) {
            let tmp24 = c48;
            charAtResult1 = str2.charAt(c48);
            let tmp25 = c48;
            c48 = c48 + 1;
          } else {
            let tmp17 = obj;
            let tmp18 = c52;
            charAtResult1 = obj;
            if (0 === c52) {
              let tmp21 = c48;
              charAtResult1 = tmp17;
              if (c48 >= c50) {
                if (tmp21 > c50) {
                  c50 = tmp21;
                  arr = [];
                }
                let tmp22 = arr;
                let arr1 = arr.push(tmp20);
                charAtResult1 = tmp17;
              }
            }
          }
          tmp12 = obj;
          charAtResult = charAtResult1;
          tmp2 = tmp14;
        } while (charAtResult1 !== obj);
      }
      if (items !== tmp12) {
        let tmp28 = peg$parsetransforms();
        if (tmp28 === tmp12) {
          tmp28 = null;
        }
        if (tmp28 !== tmp12) {
          const items1 = [];
          let tmp2Result = tmp2();
          let tmp30 = tmp12;
          if (tmp2Result !== tmp12) {
            do {
              let arr2 = items1.push(tmp2Result);
              let tmp32 = regex4;
              let str3 = str;
              let tmp33 = c48;
              if (regex4.test(str.charAt(c48))) {
                let tmp41 = c48;
                charAtResult2 = str3.charAt(c48);
                let tmp42 = c48;
                c48 = c48 + 1;
              } else {
                let tmp34 = obj;
                let tmp35 = c52;
                charAtResult2 = obj;
                if (0 === c52) {
                  let tmp38 = c48;
                  charAtResult2 = tmp34;
                  if (c48 >= c50) {
                    if (tmp38 > c50) {
                      c50 = tmp38;
                      arr = [];
                    }
                    let tmp39 = arr;
                    let arr3 = arr.push(tmp37);
                    charAtResult2 = tmp34;
                  }
                }
              }
              tmp30 = obj;
              tmp2Result = charAtResult2;
            } while (charAtResult2 !== obj);
          }
          if (items1 !== tmp30) {
            let tmp26 = tmp28;
            if (typeof peg$c0 !== "function") {
              HermesBuiltin.throwTypeError();
            }
          } else {
            c48 = tmp;
            tmp26 = tmp30;
          }
        } else {
          c48 = tmp;
          tmp26 = tmp12;
        }
      } else {
        c48 = tmp;
        tmp26 = tmp12;
      }
      return tmp26;
    }
    obj = {};
    obj = { transformList: peg$parsetransformList };
    function peg$c0(arg0) {

    }
    function peg$c1(arg0, arg1) {

    }
    const matrix = "matrix";
    let closure_5 = { type: "literal", text: "matrix", ignoreCase: false };
    let c6 = "(";
    let closure_7 = { type: "literal", text: "(", ignoreCase: false };
    let c8 = ")";
    let closure_9 = { type: "literal", text: ")", ignoreCase: false };
    function peg$c8(arg0, arg1, arg2, arg3, arg4, arg5) {

    }
    const translate = "translate";
    let closure_12 = { type: "literal", text: "translate", ignoreCase: false };
    function peg$c11(arg0, arg1) {

    }
    const scale = "scale";
    let closure_15 = { type: "literal", text: "scale", ignoreCase: false };
    function peg$c14(arg0, arg1) {

    }
    const rotate = "rotate";
    let closure_18 = { type: "literal", text: "rotate", ignoreCase: false };
    function peg$c17(arg0, arg1) {

    }
    const skewX = "skewX";
    let closure_21 = { type: "literal", text: "skewX", ignoreCase: false };
    function peg$c20(arg0) {

    }
    const skewY = "skewY";
    let closure_24 = { type: "literal", text: "skewY", ignoreCase: false };
    function peg$c23(arg0) {

    }
    function peg$c24(arg0) {

    }
    function peg$c25(arg0) {

    }
    function peg$c26(arg0) {

    }
    function peg$c27(arg0, arg1) {

    }
    let c30 = ",";
    let closure_31 = { type: "literal", text: ",", ignoreCase: false };
    function peg$c30(arg0) {

    }
    function peg$c31(arg0) {

    }
    function peg$c32(arg0) {

    }
    let closure_35 = { type: "other", description: "fractionalConstant" };
    let c36 = ".";
    let closure_37 = { type: "literal", text: ".", ignoreCase: false };
    function peg$c36(arg0, arg1) {

    }
    const re39 = /^[eE]/;
    let closure_40 = { type: "class", parts: ["e", "E"], inverted: false, ignoreCase: false };
    function peg$c39(arg0) {

    }
    const re42 = /^[+\-]/;
    let closure_43 = { type: "class", parts: ["+", "-"], inverted: false, ignoreCase: false };
    const re44 = /^[0-9]/;
    let items = [["0", "9"]];
    let closure_45 = { type: "class", parts: items, inverted: false, ignoreCase: false };
    const re46 = /^[ \t\r\n]/;
    let closure_47 = { type: "class", parts: [" ", "\t", "\r", "\n"], inverted: false, ignoreCase: false };
    let c48 = 0;
    let items1 = [{ line: 1, column: 1 }];
    let c50 = 0;
    let arr = [];
    let c52 = 0;
    if ("startRule" in obj) {
      if (obj.startRule in obj) {
        peg$parsetransformList = obj[obj.startRule];
      } else {
        const _Error = Error;
        const error = new Error("Can't start parsing from rule \"" + obj.startRule + "\".");
        throw error;
      }
    }
    let closure_60 = Math.PI / 180;
    const result = peg$parsetransformList();
    let tmp7 = result !== obj;
    if (tmp7) {
      if (c48 === str.length) {
        return result;
      }
    }
    if (tmp7) {
      tmp7 = c48 < str.length;
    }
    if (tmp7) {
      if (c48 >= c50) {
        if (tmp10 > c50) {
          c50 = tmp10;
          arr = [];
        }
        arr = arr.push({ type: "end" });
      }
    }
    let charAtResult = null;
    if (c50 < str.length) {
      charAtResult = str.charAt(c50);
    }
    function peg$computeLocation(c50, c502) {
      let tmp19;
      let tmp9;
      let tmp = items1;
      let tmp2 = items1[c50];
      let tmp3 = items1;
      if (!tmp2) {
        const diff = c50 - 1;
        let tmp5 = diff;
        let sum = diff;
        if (!tmp[diff]) {
          do {
            let diff1 = tmp5 - 1;
            let tmp8 = items1;
            tmp5 = diff1;
            sum = diff1;
            tmp = items1;
            tmp9 = items1[diff1];
          } while (!tmp9);
        }
        let obj = { line: null, column: null };
        ({ line: obj[0], column: obj[1] } = tmp[sum]);
        if (sum < c50) {
          do {
            let tmp10 = str;
            let tmp11 = sum;
            if (10 === str.charCodeAt(sum)) {
              obj.line = obj.line + 1;
              obj.column = 1;
            } else {
              obj.column = obj.column + 1;
            }
            sum = sum + 1;
          } while (sum < c50);
        }
        items1[c50] = obj;
        tmp3 = items1;
        tmp2 = obj;
      }
      let tmp13 = tmp3[c502];
      if (!tmp13) {
        const diff2 = c502 - 1;
        let tmp15 = diff2;
        let sum1 = diff2;
        if (!tmp3[diff2]) {
          do {
            let diff3 = tmp15 - 1;
            let tmp18 = items1;
            tmp15 = diff3;
            sum1 = diff3;
            tmp3 = items1;
            tmp19 = items1[diff3];
          } while (!tmp19);
        }
        obj = { line: null, column: null };
        ({ line: obj2[0], column: obj2[1] } = tmp3[sum1]);
        if (sum1 < c502) {
          do {
            let tmp20 = str;
            let tmp21 = sum1;
            if (10 === str.charCodeAt(sum1)) {
              obj.line = obj.line + 1;
              obj.column = 1;
            } else {
              obj.column = obj.column + 1;
            }
            sum1 = sum1 + 1;
          } while (sum1 < c502);
        }
        items1[c502] = obj;
        tmp13 = obj;
      }
      obj = { offset: c50, line: tmp2.line, column: tmp2.column };
      return { start: obj, end: { offset: c502, line: tmp13.line, column: tmp13.column } };
    }
    if (c50 < str.length) {
      let result1 = peg$computeLocation(c50, c50 + 1);
    } else {
      result1 = peg$computeLocation(c50, c50);
    }
    const message = pegSyntaxError.buildMessage(tmp13, charAtResult);
    Object.create(pegSyntaxError.prototype);
    let obj2 = { message, expected: arr, found: charAtResult, location: result1, name: "SyntaxError" };
    if (typeof Error.captureStackTrace === "function") {
      const _Error2 = Error;
      Error.captureStackTrace(obj2, pegSyntaxError);
    }
    throw obj2;
  }
};

export default obj;