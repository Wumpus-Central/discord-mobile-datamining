// === Module 8584: peg$SyntaxError ===

// Module 8584 (peg$SyntaxError)
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
            let num = 0;
            let str = "";
            let str2 = "";
            let str3 = "";
            if (0 < parts.parts.length) {
              do {
                let _Array = Array;
                let str4 = parts.parts[num];
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
                    return "\\x0" + str.toString(16).toUpperCase();
                  });
                  let str24 = parts.parts[num][1];
                  let text = `${str23.replace(/[\x10-\x1F\x7F-\x9F]/g, (str) => {
                    str = str.charCodeAt(0);
                    return "\\x" + str.toString(16).toUpperCase();
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
                    return "\\x0" + str.toString(16).toUpperCase();
                  });
                  let text1 = `${str23.replace(/[\x10-\x1F\x7F-\x9F]/g, (str) => {
                    str = str.charCodeAt(0);
                    return "\\x" + str.toString(16).toUpperCase();
                  })}-${str33.replace(/[\x10-\x1F\x7F-\x9F]/g, (str) => {
                    str = str.charCodeAt(0);
                    return "\\x" + str.toString(16).toUpperCase();
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
                    return "\\x0" + str.toString(16).toUpperCase();
                  });
                  text1 = str13.replace(/[\x10-\x1F\x7F-\x9F]/g, (str) => {
                    str = str.charCodeAt(0);
                    return "\\x" + str.toString(16).toUpperCase();
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
        substr = arr.slice(0, -1);
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
class ctor {
  constructor() {
    this.constructor = peg$SyntaxError;
    return;
  }
}
ctor.prototype = Error.prototype;
let obj2 = Object.create(ctor.prototype);
obj2.constructor = peg$SyntaxError;
peg$SyntaxError.prototype = obj2;

export default {
  SyntaxError: peg$SyntaxError,
  parse: function peg$parse(str, arg1) {
    let obj = arg1;
    function peg$parsetransforms() {
      const tmp2 = peg$parsetransform();
      if (tmp2 !== obj2) {
        const items = [];
        let tmp7 = peg$parsecommaWsp();
        let tmp8 = obj2;
        if (tmp7 !== obj2) {
          do {
            let arr = items.push(tmp7);
            tmp7 = peg$parsecommaWsp();
            tmp8 = obj2;
          } while (tmp7 !== obj2);
        }
        if (items !== tmp8) {
          const tmp12 = peg$parsetransforms();
          if (tmp12 !== tmp8) {
            if (typeof peg$c1 === "function") {
              const first = tmp2[0];
              [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = tmp12;
              items1 = [first * tmp18 + tmp2[1] * tmp21, first * tmp19 + tmp2[1] * tmp22, first * tmp20 + tmp2[1] * tmp23 + tmp2[2], tmp2[3] * tmp18 + tmp2[4] * tmp21, tmp2[3] * tmp19 + tmp2[4] * tmp22, tmp2[3] * tmp20 + tmp2[4] * tmp23 + tmp2[5]];
              let tmp4 = items1;
              let tmp5 = tmp8;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
        closure_48 = tmp;
        tmp4 = tmp8;
        tmp5 = tmp8;
      } else {
        closure_48 = tmp;
        tmp4 = obj2;
        tmp5 = obj2;
      }
      if (tmp4 === tmp5) {
        tmp4 = peg$parsetransform();
      }
      return tmp4;
    }
    function peg$parsetransform() {
      let charAtResult1;
      let charAtResult11;
      let charAtResult13;
      let charAtResult15;
      let charAtResult17;
      let charAtResult19;
      let charAtResult23;
      let charAtResult25;
      let charAtResult27;
      let charAtResult29;
      let charAtResult3;
      let charAtResult31;
      let charAtResult33;
      let charAtResult35;
      let charAtResult5;
      let charAtResult7;
      let charAtResult9;
      if (str.substr(closure_48, 6) === matrix) {
        closure_48 = closure_48 + 6;
        let tmp5 = tmp2;
      } else {
        tmp5 = obj2;
        if (0 === diff) {
          tmp5 = tmp3;
          if (closure_48 >= closure_50) {
            if (tmp7 > closure_50) {
              closure_50 = tmp7;
              closure_51 = [];
            }
            closure_51.push(tmp6);
            tmp5 = tmp3;
          }
        }
      }
      if (tmp5 !== obj2) {
        if (re46.test(str.charAt(closure_48))) {
          let charAtResult = str.charAt(closure_48);
          closure_48 = closure_48 + 1;
        } else {
          charAtResult = tmp11;
          if (0 === diff) {
            charAtResult = tmp11;
            if (closure_48 >= closure_50) {
              if (tmp19 > closure_50) {
                closure_50 = tmp19;
                closure_51 = [];
              }
              closure_51.push(tmp18);
              charAtResult = tmp11;
            }
          }
        }
        const items = [];
        let obj = re46;
        let tmp24 = tmp11;
        if (charAtResult !== tmp11) {
          do {
            let arr3 = items.push(charAtResult);
            let str3 = str;
            if (re46.test(str.charAt(closure_48))) {
              charAtResult1 = str3.charAt(closure_48);
              closure_48 = closure_48 + 1;
            } else {
              let tmp28 = obj2;
              charAtResult1 = obj2;
              if (0 === diff) {
                let tmp32 = closure_48;
                charAtResult1 = tmp28;
                if (closure_48 >= closure_50) {
                  if (tmp32 > closure_50) {
                    closure_50 = tmp32;
                    closure_51 = [];
                  }
                  let arr4 = closure_51.push(tmp31);
                  charAtResult1 = tmp28;
                }
              }
            }
            tmp24 = obj2;
            charAtResult = charAtResult1;
            obj = re46;
            str = str3;
          } while (charAtResult1 !== obj2);
        }
        if (items !== tmp24) {
          if (40 === str.charCodeAt(closure_48)) {
            let tmp39 = c6;
            closure_48 = closure_48 + 1;
          } else {
            tmp39 = tmp24;
            if (0 === diff) {
              tmp39 = tmp24;
              if (closure_48 >= closure_50) {
                if (tmp41 > closure_50) {
                  closure_50 = tmp41;
                  closure_51 = [];
                }
                closure_51.push(tmp40);
                tmp39 = tmp24;
              }
            }
          }
          if (tmp39 !== tmp24) {
            if (obj.test(str.charAt(closure_48))) {
              let charAtResult2 = str.charAt(closure_48);
              closure_48 = closure_48 + 1;
            } else {
              charAtResult2 = tmp24;
              if (0 === diff) {
                charAtResult2 = tmp24;
                if (closure_48 >= closure_50) {
                  if (tmp49 > closure_50) {
                    closure_50 = tmp49;
                    closure_51 = [];
                  }
                  closure_51.push(tmp48);
                  charAtResult2 = tmp24;
                }
              }
            }
            items1 = [];
            obj2 = obj;
            let tmp54 = tmp24;
            if (charAtResult2 !== tmp24) {
              do {
                let arr7 = items1.push(charAtResult2);
                let str4 = str;
                if (re46.test(str.charAt(closure_48))) {
                  charAtResult3 = str4.charAt(closure_48);
                  closure_48 = closure_48 + 1;
                } else {
                  let tmp58 = obj2;
                  charAtResult3 = obj2;
                  if (0 === diff) {
                    let tmp62 = closure_48;
                    charAtResult3 = tmp58;
                    if (closure_48 >= closure_50) {
                      if (tmp62 > closure_50) {
                        closure_50 = tmp62;
                        closure_51 = [];
                      }
                      let arr8 = closure_51.push(tmp61);
                      charAtResult3 = tmp58;
                    }
                  }
                }
                tmp54 = obj2;
                charAtResult2 = charAtResult3;
                obj2 = re46;
                str = str4;
              } while (charAtResult3 !== obj2);
            }
            if (items1 !== tmp54) {
              const tmp68 = peg$parsenumber();
              if (tmp68 !== tmp54) {
                if (peg$parsecommaWsp() !== tmp54) {
                  const tmp67Result = peg$parsenumber();
                  if (tmp67Result !== tmp54) {
                    if (peg$parsecommaWsp() !== tmp54) {
                      const tmp67Result5 = peg$parsenumber();
                      if (tmp67Result5 !== tmp54) {
                        if (peg$parsecommaWsp() !== tmp54) {
                          const tmp67Result6 = peg$parsenumber();
                          if (tmp67Result6 !== tmp54) {
                            if (peg$parsecommaWsp() !== tmp54) {
                              const tmp67Result7 = peg$parsenumber();
                              if (tmp67Result7 !== tmp54) {
                                if (peg$parsecommaWsp() !== tmp54) {
                                  const tmp67Result8 = peg$parsenumber();
                                  if (tmp67Result8 !== tmp54) {
                                    if (obj2.test(str.charAt(closure_48))) {
                                      let charAtResult4 = str.charAt(closure_48);
                                      closure_48 = closure_48 + 1;
                                    } else {
                                      charAtResult4 = tmp54;
                                      if (0 === diff) {
                                        charAtResult4 = tmp54;
                                        if (closure_48 >= closure_50) {
                                          if (tmp79 > closure_50) {
                                            closure_50 = tmp79;
                                            closure_51 = [];
                                          }
                                          closure_51.push(tmp78);
                                          charAtResult4 = tmp54;
                                        }
                                      }
                                    }
                                    const items2 = [];
                                    let obj3 = str;
                                    let tmp84 = tmp54;
                                    if (charAtResult4 !== tmp54) {
                                      do {
                                        let arr10 = items2.push(charAtResult4);
                                        let str5 = str;
                                        if (re46.test(str.charAt(closure_48))) {
                                          charAtResult5 = str5.charAt(closure_48);
                                          closure_48 = closure_48 + 1;
                                        } else {
                                          let tmp88 = obj2;
                                          charAtResult5 = obj2;
                                          if (0 === diff) {
                                            let tmp92 = closure_48;
                                            charAtResult5 = tmp88;
                                            if (closure_48 >= closure_50) {
                                              if (tmp92 > closure_50) {
                                                closure_50 = tmp92;
                                                closure_51 = [];
                                              }
                                              let arr11 = closure_51.push(tmp91);
                                              charAtResult5 = tmp88;
                                            }
                                          }
                                        }
                                        tmp84 = obj2;
                                        charAtResult4 = charAtResult5;
                                        obj3 = str5;
                                      } while (charAtResult5 !== obj2);
                                    }
                                    if (items2 !== tmp84) {
                                      if (41 === obj3.charCodeAt(closure_48)) {
                                        let tmp99 = c8;
                                        closure_48 = closure_48 + 1;
                                      } else {
                                        tmp99 = tmp84;
                                        if (0 === diff) {
                                          tmp99 = tmp84;
                                          if (closure_48 >= closure_50) {
                                            if (tmp101 > closure_50) {
                                              closure_50 = tmp101;
                                              closure_51 = [];
                                            }
                                            closure_51.push(tmp100);
                                            tmp99 = tmp84;
                                          }
                                        }
                                      }
                                      if (tmp99 !== tmp84) {
                                        if (typeof peg$c8 === "function") {
                                          const items3 = [tmp68, tmp67Result5, tmp67Result7, tmp67Result, tmp67Result6, tmp67Result8];
                                          let str2 = obj3;
                                          let tmp12 = tmp84;
                                          let tmp13 = items3;
                                        } else {
                                          throw new TypeError("Trying to call a non-function");
                                        }
                                      } else {
                                        closure_48 = tmp;
                                        str2 = obj3;
                                        tmp12 = tmp84;
                                        tmp13 = tmp84;
                                      }
                                    } else {
                                      closure_48 = tmp;
                                      str2 = obj3;
                                      tmp12 = tmp84;
                                      tmp13 = tmp84;
                                    }
                                  } else {
                                    closure_48 = tmp;
                                    str2 = str;
                                    tmp12 = tmp54;
                                    tmp13 = tmp54;
                                  }
                                } else {
                                  closure_48 = tmp;
                                  str2 = str;
                                  tmp12 = tmp54;
                                  tmp13 = tmp54;
                                }
                              } else {
                                closure_48 = tmp;
                                str2 = str;
                                tmp12 = tmp54;
                                tmp13 = tmp54;
                              }
                            } else {
                              closure_48 = tmp;
                              str2 = str;
                              tmp12 = tmp54;
                              tmp13 = tmp54;
                            }
                          } else {
                            closure_48 = tmp;
                            str2 = str;
                            tmp12 = tmp54;
                            tmp13 = tmp54;
                          }
                        } else {
                          closure_48 = tmp;
                          str2 = str;
                          tmp12 = tmp54;
                          tmp13 = tmp54;
                        }
                      } else {
                        closure_48 = tmp;
                        str2 = str;
                        tmp12 = tmp54;
                        tmp13 = tmp54;
                      }
                    } else {
                      closure_48 = tmp;
                      str2 = str;
                      tmp12 = tmp54;
                      tmp13 = tmp54;
                    }
                  } else {
                    closure_48 = tmp;
                    str2 = str;
                    tmp12 = tmp54;
                    tmp13 = tmp54;
                  }
                } else {
                  closure_48 = tmp;
                  str2 = str;
                  tmp12 = tmp54;
                  tmp13 = tmp54;
                }
              } else {
                closure_48 = tmp;
                str2 = str;
                tmp12 = tmp54;
                tmp13 = tmp54;
              }
            } else {
              closure_48 = tmp;
              str2 = str;
              tmp12 = tmp54;
              tmp13 = tmp54;
            }
          } else {
            closure_48 = tmp;
            str2 = str;
            tmp12 = tmp24;
            tmp13 = tmp24;
          }
        } else {
          closure_48 = tmp;
          str2 = str;
          tmp12 = tmp24;
          tmp13 = tmp24;
        }
      } else {
        closure_48 = tmp;
        str2 = str;
        tmp12 = tmp11;
        tmp13 = tmp11;
      }
      let str6 = str2;
      let charAtResult28 = tmp12;
      if (tmp13 !== tmp12) {
        let str10 = str6;
        let charAtResult21 = charAtResult28;
        if (!tmp106) {
          let str14 = str10;
          let tmp317 = charAtResult21;
          if (!tmp106) {
            let items7 = str14;
            let tmp430 = tmp317;
            if (!tmp106) {
              if (!tmp106) {
                return tmp13;
              } else {
                let tmp528 = closure_48;
                if (items7.substr(closure_48, 5) === skewY) {
                  closure_48 = closure_48 + 5;
                  let tmp532 = tmp530;
                } else {
                  tmp532 = tmp430;
                  if (0 === diff) {
                    tmp532 = tmp430;
                    if (closure_48 >= closure_50) {
                      if (tmp534 > closure_50) {
                        closure_50 = tmp534;
                        closure_51 = [];
                      }
                      closure_51.push(tmp533);
                      tmp532 = tmp430;
                    }
                  }
                }
                if (tmp532 !== tmp430) {
                  if (re46.test(items7.charAt(closure_48))) {
                    let charAtResult6 = items7.charAt(closure_48);
                    closure_48 = closure_48 + 1;
                  } else {
                    charAtResult6 = tmp430;
                    if (0 === diff) {
                      charAtResult6 = tmp430;
                      if (closure_48 >= closure_50) {
                        if (tmp544 > closure_50) {
                          closure_50 = tmp544;
                          closure_51 = [];
                        }
                        closure_51.push(tmp543);
                        charAtResult6 = tmp430;
                      }
                    }
                  }
                  const items4 = [];
                  let obj14 = re46;
                  let tmp549 = tmp430;
                  if (charAtResult6 !== tmp430) {
                    do {
                      let arr15 = items4.push(charAtResult6);
                      let str21 = str;
                      if (re46.test(str.charAt(closure_48))) {
                        charAtResult7 = str21.charAt(closure_48);
                        closure_48 = closure_48 + 1;
                      } else {
                        tmp430 = obj2;
                        charAtResult7 = obj2;
                        if (0 === diff) {
                          let tmp556 = closure_48;
                          charAtResult7 = tmp430;
                          if (closure_48 >= closure_50) {
                            if (tmp556 > closure_50) {
                              closure_50 = tmp556;
                              closure_51 = [];
                            }
                            let arr16 = closure_51.push(tmp555);
                            charAtResult7 = tmp430;
                          }
                        }
                      }
                      tmp549 = obj2;
                      charAtResult6 = charAtResult7;
                      obj14 = re46;
                      items7 = str21;
                    } while (charAtResult7 !== obj2);
                  }
                  if (items4 !== tmp549) {
                    if (40 === items7.charCodeAt(closure_48)) {
                      let tmp563 = c6;
                      closure_48 = closure_48 + 1;
                    } else {
                      tmp563 = tmp549;
                      if (0 === diff) {
                        tmp563 = tmp549;
                        if (closure_48 >= closure_50) {
                          if (tmp565 > closure_50) {
                            closure_50 = tmp565;
                            closure_51 = [];
                          }
                          tmp430 = closure_51;
                          closure_51.push(tmp564);
                          tmp563 = tmp549;
                        }
                      }
                    }
                    if (tmp563 !== tmp549) {
                      if (obj14.test(items7.charAt(closure_48))) {
                        let charAtResult8 = items7.charAt(closure_48);
                        closure_48 = closure_48 + 1;
                      } else {
                        charAtResult8 = tmp549;
                        if (0 === diff) {
                          charAtResult8 = tmp549;
                          if (closure_48 >= closure_50) {
                            if (tmp572 > closure_50) {
                              closure_50 = tmp572;
                              closure_51 = [];
                            }
                            closure_51.push(tmp571);
                            charAtResult8 = tmp549;
                          }
                        }
                      }
                      const items5 = [];
                      tmp430 = tmp549;
                      if (charAtResult8 !== tmp549) {
                        do {
                          let arr19 = items5.push(charAtResult8);
                          let str22 = str;
                          if (re46.test(str.charAt(closure_48))) {
                            charAtResult9 = str22.charAt(closure_48);
                            closure_48 = closure_48 + 1;
                          } else {
                            let tmp580 = obj2;
                            charAtResult9 = obj2;
                            if (0 === diff) {
                              let tmp584 = closure_48;
                              charAtResult9 = tmp580;
                              if (closure_48 >= closure_50) {
                                if (tmp584 > closure_50) {
                                  closure_50 = tmp584;
                                  closure_51 = [];
                                }
                                let arr20 = closure_51.push(tmp583);
                                charAtResult9 = tmp580;
                              }
                            }
                          }
                          tmp430 = obj2;
                          charAtResult8 = charAtResult9;
                          obj14 = re46;
                          items7 = str22;
                        } while (charAtResult9 !== obj2);
                      }
                      if (items5 !== tmp430) {
                        const tmp590 = peg$parsenumber();
                        if (tmp590 !== tmp430) {
                          if (obj14.test(items7.charAt(closure_48))) {
                            let charAtResult10 = items7.charAt(closure_48);
                            closure_48 = closure_48 + 1;
                          } else {
                            charAtResult10 = tmp430;
                            if (0 === diff) {
                              charAtResult10 = tmp430;
                              if (closure_48 >= closure_50) {
                                if (tmp595 > closure_50) {
                                  closure_50 = tmp595;
                                  closure_51 = [];
                                }
                                closure_51.push(tmp594);
                                charAtResult10 = tmp430;
                              }
                            }
                          }
                          const items6 = [];
                          let obj15 = items7;
                          items7 = tmp430;
                          if (charAtResult10 !== tmp430) {
                            do {
                              let arr22 = items6.push(charAtResult10);
                              let str23 = str;
                              if (re46.test(str.charAt(closure_48))) {
                                charAtResult11 = str23.charAt(closure_48);
                                closure_48 = closure_48 + 1;
                              } else {
                                tmp430 = obj2;
                                charAtResult11 = obj2;
                                if (0 === diff) {
                                  let tmp606 = closure_48;
                                  charAtResult11 = tmp430;
                                  if (closure_48 >= closure_50) {
                                    if (tmp606 > closure_50) {
                                      closure_50 = tmp606;
                                      closure_51 = [];
                                    }
                                    let arr23 = closure_51.push(tmp605);
                                    charAtResult11 = tmp430;
                                  }
                                }
                              }
                              items7 = obj2;
                              charAtResult10 = charAtResult11;
                              obj15 = str23;
                            } while (charAtResult11 !== obj2);
                          }
                          if (items6 !== items7) {
                            if (41 === obj15.charCodeAt(closure_48)) {
                              let tmp613 = c8;
                              closure_48 = closure_48 + 1;
                            } else {
                              tmp613 = items7;
                              if (0 === diff) {
                                tmp430 = closure_9;
                                tmp613 = items7;
                                if (closure_48 >= closure_50) {
                                  if (tmp614 > closure_50) {
                                    closure_50 = tmp614;
                                    closure_51 = [];
                                  }
                                  closure_51.push(tmp430);
                                  tmp613 = items7;
                                }
                              }
                            }
                            if (tmp613 !== items7) {
                              if (typeof peg$c23 === "function") {
                                const _Math4 = Math;
                                tmp528 = closure_60;
                                items7 = [1, 0, 0, Math.tan(closure_60 * tmp590), 1, 0];
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            } else {
                              closure_48 = tmp528;
                            }
                          } else {
                            closure_48 = tmp528;
                          }
                        } else {
                          closure_48 = tmp528;
                        }
                      } else {
                        closure_48 = tmp528;
                      }
                    } else {
                      closure_48 = tmp528;
                    }
                  } else {
                    closure_48 = tmp528;
                  }
                } else {
                  closure_48 = tmp528;
                }
              }
            } else {
              let tmp431 = closure_48;
              if (str14.substr(closure_48, 5) === skewX) {
                closure_48 = closure_48 + 5;
                let tmp435 = tmp433;
              } else {
                tmp435 = tmp317;
                if (0 === diff) {
                  tmp435 = tmp317;
                  if (closure_48 >= closure_50) {
                    if (tmp437 > closure_50) {
                      closure_50 = tmp437;
                      closure_51 = [];
                    }
                    closure_51.push(tmp436);
                    tmp435 = tmp317;
                  }
                }
              }
              if (tmp435 !== tmp317) {
                let obj12 = re46;
                if (re46.test(str14.charAt(closure_48))) {
                  let charAtResult12 = str14.charAt(closure_48);
                  closure_48 = closure_48 + 1;
                } else {
                  charAtResult12 = tmp317;
                  if (0 === diff) {
                    charAtResult12 = tmp317;
                    if (closure_48 >= closure_50) {
                      if (tmp448 > closure_50) {
                        closure_50 = tmp448;
                        closure_51 = [];
                      }
                      closure_51.push(tmp447);
                      charAtResult12 = tmp317;
                    }
                  }
                }
                const items8 = [];
                let tmp453 = tmp317;
                if (charAtResult12 !== tmp317) {
                  do {
                    let arr97 = items8.push(charAtResult12);
                    let str18 = str;
                    if (re46.test(str.charAt(closure_48))) {
                      charAtResult13 = str18.charAt(closure_48);
                      closure_48 = closure_48 + 1;
                    } else {
                      tmp317 = obj2;
                      charAtResult13 = obj2;
                      if (0 === diff) {
                        let tmp460 = closure_48;
                        charAtResult13 = tmp317;
                        if (closure_48 >= closure_50) {
                          if (tmp460 > closure_50) {
                            closure_50 = tmp460;
                            closure_51 = [];
                          }
                          let arr98 = closure_51.push(tmp459);
                          charAtResult13 = tmp317;
                        }
                      }
                    }
                    tmp453 = obj2;
                    charAtResult12 = charAtResult13;
                    obj12 = re46;
                    str14 = str18;
                  } while (charAtResult13 !== obj2);
                }
                if (items8 !== tmp453) {
                  if (40 === str14.charCodeAt(closure_48)) {
                    let tmp467 = c6;
                    closure_48 = closure_48 + 1;
                  } else {
                    tmp467 = tmp453;
                    if (0 === diff) {
                      tmp467 = tmp453;
                      if (closure_48 >= closure_50) {
                        if (tmp469 > closure_50) {
                          closure_50 = tmp469;
                          closure_51 = [];
                        }
                        tmp317 = closure_51;
                        closure_51.push(tmp468);
                        tmp467 = tmp453;
                      }
                    }
                  }
                  if (tmp467 !== tmp453) {
                    if (obj12.test(str14.charAt(closure_48))) {
                      let charAtResult14 = str14.charAt(closure_48);
                      closure_48 = closure_48 + 1;
                    } else {
                      charAtResult14 = tmp453;
                      if (0 === diff) {
                        charAtResult14 = tmp453;
                        if (closure_48 >= closure_50) {
                          if (tmp476 > closure_50) {
                            closure_50 = tmp476;
                            closure_51 = [];
                          }
                          closure_51.push(tmp475);
                          charAtResult14 = tmp453;
                        }
                      }
                    }
                    const items9 = [];
                    tmp317 = tmp453;
                    if (charAtResult14 !== tmp453) {
                      do {
                        let arr101 = items9.push(charAtResult14);
                        let str19 = str;
                        if (re46.test(str.charAt(closure_48))) {
                          charAtResult15 = str19.charAt(closure_48);
                          closure_48 = closure_48 + 1;
                        } else {
                          let tmp484 = obj2;
                          charAtResult15 = obj2;
                          if (0 === diff) {
                            let tmp488 = closure_48;
                            charAtResult15 = tmp484;
                            if (closure_48 >= closure_50) {
                              if (tmp488 > closure_50) {
                                closure_50 = tmp488;
                                closure_51 = [];
                              }
                              let arr102 = closure_51.push(tmp487);
                              charAtResult15 = tmp484;
                            }
                          }
                        }
                        tmp317 = obj2;
                        charAtResult14 = charAtResult15;
                        obj12 = re46;
                        str14 = str19;
                      } while (charAtResult15 !== obj2);
                    }
                    if (items9 !== tmp317) {
                      const tmp494 = peg$parsenumber();
                      if (tmp494 !== tmp317) {
                        if (obj12.test(str14.charAt(closure_48))) {
                          let charAtResult16 = str14.charAt(closure_48);
                          closure_48 = closure_48 + 1;
                        } else {
                          charAtResult16 = tmp317;
                          if (0 === diff) {
                            charAtResult16 = tmp317;
                            if (closure_48 >= closure_50) {
                              if (tmp499 > closure_50) {
                                closure_50 = tmp499;
                                closure_51 = [];
                              }
                              closure_51.push(tmp498);
                              charAtResult16 = tmp317;
                            }
                          }
                        }
                        const items10 = [];
                        let obj13 = str14;
                        str14 = tmp317;
                        if (charAtResult16 !== tmp317) {
                          do {
                            let arr104 = items10.push(charAtResult16);
                            let str20 = str;
                            if (re46.test(str.charAt(closure_48))) {
                              charAtResult17 = str20.charAt(closure_48);
                              closure_48 = closure_48 + 1;
                            } else {
                              tmp317 = obj2;
                              charAtResult17 = obj2;
                              if (0 === diff) {
                                let tmp510 = closure_48;
                                charAtResult17 = tmp317;
                                if (closure_48 >= closure_50) {
                                  if (tmp510 > closure_50) {
                                    closure_50 = tmp510;
                                    closure_51 = [];
                                  }
                                  let arr105 = closure_51.push(tmp509);
                                  charAtResult17 = tmp317;
                                }
                              }
                            }
                            str14 = obj2;
                            charAtResult16 = charAtResult17;
                            obj13 = str20;
                          } while (charAtResult17 !== obj2);
                        }
                        if (items10 !== str14) {
                          if (41 === obj13.charCodeAt(closure_48)) {
                            let tmp517 = c8;
                            closure_48 = closure_48 + 1;
                          } else {
                            tmp517 = str14;
                            if (0 === diff) {
                              tmp517 = str14;
                              if (closure_48 >= closure_50) {
                                if (tmp519 > closure_50) {
                                  closure_50 = tmp519;
                                  closure_51 = [];
                                }
                                tmp317 = closure_51;
                                closure_51.push(tmp518);
                                tmp517 = str14;
                              }
                            }
                          }
                          if (tmp517 !== str14) {
                            if (typeof peg$c20 === "function") {
                              const _Math3 = Math;
                              tmp431 = closure_60;
                              const items11 = [1, Math.tan(closure_60 * tmp494), 0, 0, 1, 0];
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            closure_48 = tmp431;
                          }
                        } else {
                          closure_48 = tmp431;
                        }
                      } else {
                        closure_48 = tmp431;
                      }
                    } else {
                      closure_48 = tmp431;
                    }
                  } else {
                    closure_48 = tmp431;
                  }
                } else {
                  closure_48 = tmp431;
                }
              } else {
                closure_48 = tmp431;
              }
            }
          } else {
            if (str10.substr(closure_48, 6) === rotate) {
              closure_48 = closure_48 + 6;
              let tmp322 = tmp320;
            } else {
              tmp322 = charAtResult21;
              if (0 === diff) {
                tmp322 = charAtResult21;
                if (closure_48 >= closure_50) {
                  if (tmp324 > closure_50) {
                    closure_50 = tmp324;
                    closure_51 = [];
                  }
                  closure_51.push(tmp323);
                  tmp322 = charAtResult21;
                }
              }
            }
            if (tmp322 !== charAtResult21) {
              if (re46.test(str10.charAt(closure_48))) {
                let charAtResult18 = str10.charAt(closure_48);
                closure_48 = closure_48 + 1;
              } else {
                charAtResult18 = charAtResult21;
                if (0 === diff) {
                  charAtResult18 = charAtResult21;
                  if (closure_48 >= closure_50) {
                    if (tmp336 > closure_50) {
                      closure_50 = tmp336;
                      closure_51 = [];
                    }
                    closure_51.push(tmp335);
                    charAtResult18 = charAtResult21;
                  }
                }
              }
              const items12 = [];
              let obj10 = re46;
              let tmp341 = charAtResult21;
              if (charAtResult18 !== charAtResult21) {
                do {
                  let arr109 = items12.push(charAtResult18);
                  let str15 = str;
                  if (re46.test(str.charAt(closure_48))) {
                    charAtResult19 = str15.charAt(closure_48);
                    closure_48 = closure_48 + 1;
                  } else {
                    charAtResult21 = obj2;
                    charAtResult19 = obj2;
                    if (0 === diff) {
                      let tmp348 = closure_48;
                      charAtResult19 = charAtResult21;
                      if (closure_48 >= closure_50) {
                        if (tmp348 > closure_50) {
                          closure_50 = tmp348;
                          closure_51 = [];
                        }
                        let arr110 = closure_51.push(tmp347);
                        charAtResult19 = charAtResult21;
                      }
                    }
                  }
                  tmp341 = obj2;
                  charAtResult18 = charAtResult19;
                  obj10 = re46;
                  str10 = str15;
                } while (charAtResult19 !== obj2);
              }
              if (items12 !== tmp341) {
                if (40 === str10.charCodeAt(closure_48)) {
                  let tmp355 = c6;
                  closure_48 = closure_48 + 1;
                } else {
                  tmp355 = tmp341;
                  if (0 === diff) {
                    tmp355 = tmp341;
                    if (closure_48 >= closure_50) {
                      if (tmp357 > closure_50) {
                        closure_50 = tmp357;
                        closure_51 = [];
                      }
                      charAtResult21 = closure_51;
                      closure_51.push(tmp356);
                      tmp355 = tmp341;
                    }
                  }
                }
                if (tmp355 !== tmp341) {
                  if (obj10.test(str10.charAt(closure_48))) {
                    let charAtResult20 = str10.charAt(closure_48);
                    closure_48 = closure_48 + 1;
                  } else {
                    charAtResult20 = tmp341;
                    if (0 === diff) {
                      charAtResult20 = tmp341;
                      if (closure_48 >= closure_50) {
                        if (tmp364 > closure_50) {
                          closure_50 = tmp364;
                          closure_51 = [];
                        }
                        charAtResult21 = closure_51;
                        closure_51.push(tmp363);
                        charAtResult20 = tmp341;
                      }
                    }
                  }
                  const items13 = [];
                  let tmp368 = tmp341;
                  if (charAtResult20 !== tmp341) {
                    do {
                      let arr113 = items13.push(charAtResult20);
                      let str16 = str;
                      if (re46.test(str.charAt(closure_48))) {
                        charAtResult21 = str16.charAt(closure_48);
                        closure_48 = closure_48 + 1;
                      } else {
                        let tmp372 = obj2;
                        charAtResult21 = obj2;
                        if (0 === diff) {
                          let tmp375 = closure_48;
                          charAtResult21 = tmp372;
                          if (closure_48 >= closure_50) {
                            if (tmp375 > closure_50) {
                              closure_50 = tmp375;
                              closure_51 = [];
                            }
                            let arr114 = closure_51.push(tmp374);
                            charAtResult21 = tmp372;
                          }
                        }
                      }
                      tmp368 = obj2;
                      charAtResult20 = charAtResult21;
                      obj10 = re46;
                      str10 = str16;
                    } while (charAtResult21 !== obj2);
                  }
                  if (items13 !== tmp368) {
                    charAtResult21 = peg$parsenumber();
                    if (charAtResult21 !== tmp368) {
                      if (peg$parsecommaWsp() !== tmp368) {
                        const tmp380Result = peg$parsenumber();
                        if (tmp380Result !== tmp368) {
                          if (peg$parsecommaWsp() !== tmp368) {
                            const tmp380Result2 = peg$parsenumber();
                            if (tmp380Result2 !== tmp368) {
                              if (typeof peg$c27 === "function") {
                                const items14 = [tmp380Result, tmp380Result2];
                                let items16 = items14;
                                if (items16 === tmp368) {
                                  items16 = null;
                                }
                                if (items16 !== tmp368) {
                                  if (obj10.test(str10.charAt(closure_48))) {
                                    let charAtResult22 = str10.charAt(closure_48);
                                    closure_48 = closure_48 + 1;
                                  } else {
                                    charAtResult22 = tmp368;
                                    if (0 === diff) {
                                      charAtResult22 = tmp368;
                                      if (closure_48 >= closure_50) {
                                        if (tmp390 > closure_50) {
                                          closure_50 = tmp390;
                                          closure_51 = [];
                                        }
                                        closure_51.push(tmp389);
                                        charAtResult22 = tmp368;
                                      }
                                    }
                                  }
                                  const items15 = [];
                                  let obj11 = str10;
                                  str10 = tmp368;
                                  if (charAtResult22 !== tmp368) {
                                    do {
                                      let arr116 = items15.push(charAtResult22);
                                      let str17 = str;
                                      if (re46.test(str.charAt(closure_48))) {
                                        charAtResult23 = str17.charAt(closure_48);
                                        closure_48 = closure_48 + 1;
                                      } else {
                                        let tmp398 = obj2;
                                        charAtResult23 = obj2;
                                        if (0 === diff) {
                                          let tmp402 = closure_48;
                                          charAtResult23 = tmp398;
                                          if (closure_48 >= closure_50) {
                                            if (tmp402 > closure_50) {
                                              closure_50 = tmp402;
                                              closure_51 = [];
                                            }
                                            let arr117 = closure_51.push(tmp401);
                                            charAtResult23 = tmp398;
                                          }
                                        }
                                      }
                                      str10 = obj2;
                                      charAtResult22 = charAtResult23;
                                      obj11 = str17;
                                    } while (charAtResult23 !== obj2);
                                  }
                                  if (items15 !== str10) {
                                    if (41 === obj11.charCodeAt(closure_48)) {
                                      let tmp409 = c8;
                                      closure_48 = closure_48 + 1;
                                    } else {
                                      tmp409 = str10;
                                      if (0 === diff) {
                                        tmp409 = str10;
                                        if (closure_48 >= closure_50) {
                                          if (tmp411 > closure_50) {
                                            closure_50 = tmp411;
                                            closure_51 = [];
                                          }
                                          closure_51.push(tmp410);
                                          tmp409 = str10;
                                        }
                                      }
                                    }
                                    if (tmp409 !== str10) {
                                      if (typeof peg$c17 === "function") {
                                        const _Math = Math;
                                        const cosResult = Math.cos(closure_60 * charAtResult21);
                                        const _Math2 = Math;
                                        let sinResult = Math.sin(closure_60 * charAtResult21);
                                        if (null !== items16) {
                                          [tmp421, tmp422] = items16;
                                          items16 = [cosResult, -sinResult, cosResult * -tmp421 + -sinResult * -tmp422 + tmp421, sinResult, cosResult, ];
                                          sinResult = sinResult * -tmp421;
                                          items16[5] = sinResult + cosResult * -tmp422 + tmp422;
                                          let items17 = items16;
                                        } else {
                                          items17 = [cosResult, -sinResult, 0, sinResult, cosResult, 0];
                                        }
                                      } else {
                                        throw new TypeError("Trying to call a non-function");
                                      }
                                    } else {
                                      closure_48 = tmp318;
                                    }
                                  } else {
                                    closure_48 = tmp318;
                                  }
                                } else {
                                  closure_48 = tmp318;
                                }
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            }
                          }
                        }
                      }
                      items16 = tmp368;
                    } else {
                      closure_48 = tmp318;
                    }
                  } else {
                    closure_48 = tmp318;
                  }
                } else {
                  closure_48 = tmp318;
                }
              } else {
                closure_48 = tmp318;
              }
            } else {
              closure_48 = tmp318;
            }
          }
        } else {
          let tmp214 = closure_48;
          if (str6.substr(closure_48, 5) === scale) {
            closure_48 = closure_48 + 5;
            let tmp218 = tmp216;
          } else {
            tmp218 = charAtResult28;
            if (0 === diff) {
              tmp218 = charAtResult28;
              if (closure_48 >= closure_50) {
                if (tmp220 > closure_50) {
                  closure_50 = tmp220;
                  closure_51 = [];
                }
                closure_51.push(tmp219);
                tmp218 = charAtResult28;
              }
            }
          }
          if (tmp218 !== charAtResult28) {
            if (re46.test(str6.charAt(closure_48))) {
              let charAtResult24 = str6.charAt(closure_48);
              closure_48 = closure_48 + 1;
            } else {
              charAtResult24 = charAtResult28;
              if (0 === diff) {
                charAtResult24 = charAtResult28;
                if (closure_48 >= closure_50) {
                  if (tmp232 > closure_50) {
                    closure_50 = tmp232;
                    closure_51 = [];
                  }
                  closure_51.push(tmp231);
                  charAtResult24 = charAtResult28;
                }
              }
            }
            const items18 = [];
            let obj8 = re46;
            let tmp237 = charAtResult28;
            if (charAtResult24 !== charAtResult28) {
              do {
                let arr121 = items18.push(charAtResult24);
                let str11 = str;
                if (re46.test(str.charAt(closure_48))) {
                  charAtResult25 = str11.charAt(closure_48);
                  closure_48 = closure_48 + 1;
                } else {
                  charAtResult28 = obj2;
                  charAtResult25 = obj2;
                  if (0 === diff) {
                    let tmp244 = closure_48;
                    charAtResult25 = charAtResult28;
                    if (closure_48 >= closure_50) {
                      if (tmp244 > closure_50) {
                        closure_50 = tmp244;
                        closure_51 = [];
                      }
                      let arr122 = closure_51.push(tmp243);
                      charAtResult25 = charAtResult28;
                    }
                  }
                }
                tmp237 = obj2;
                charAtResult24 = charAtResult25;
                obj8 = re46;
                str6 = str11;
              } while (charAtResult25 !== obj2);
            }
            if (items18 !== tmp237) {
              if (40 === str6.charCodeAt(closure_48)) {
                let tmp251 = c6;
                closure_48 = closure_48 + 1;
              } else {
                tmp251 = tmp237;
                if (0 === diff) {
                  tmp251 = tmp237;
                  if (closure_48 >= closure_50) {
                    if (tmp253 > closure_50) {
                      closure_50 = tmp253;
                      closure_51 = [];
                    }
                    charAtResult28 = closure_51;
                    closure_51.push(tmp252);
                    tmp251 = tmp237;
                  }
                }
              }
              if (tmp251 !== tmp237) {
                if (obj8.test(str6.charAt(closure_48))) {
                  let charAtResult26 = str6.charAt(closure_48);
                  closure_48 = closure_48 + 1;
                } else {
                  charAtResult26 = tmp237;
                  if (0 === diff) {
                    charAtResult26 = tmp237;
                    if (closure_48 >= closure_50) {
                      if (tmp260 > closure_50) {
                        closure_50 = tmp260;
                        closure_51 = [];
                      }
                      closure_51.push(tmp259);
                      charAtResult26 = tmp237;
                    }
                  }
                }
                const items19 = [];
                charAtResult28 = obj8;
                let tmp265 = tmp237;
                if (charAtResult26 !== tmp237) {
                  do {
                    let arr125 = items19.push(charAtResult26);
                    let str12 = str;
                    if (re46.test(str.charAt(closure_48))) {
                      charAtResult27 = str12.charAt(closure_48);
                      closure_48 = closure_48 + 1;
                    } else {
                      let tmp269 = obj2;
                      charAtResult27 = obj2;
                      if (0 === diff) {
                        let tmp273 = closure_48;
                        charAtResult27 = tmp269;
                        if (closure_48 >= closure_50) {
                          if (tmp273 > closure_50) {
                            closure_50 = tmp273;
                            closure_51 = [];
                          }
                          let arr126 = closure_51.push(tmp272);
                          charAtResult27 = tmp269;
                        }
                      }
                    }
                    tmp265 = obj2;
                    charAtResult26 = charAtResult27;
                    charAtResult28 = re46;
                    str6 = str12;
                  } while (charAtResult27 !== obj2);
                }
                if (items19 !== tmp265) {
                  const tmp279 = peg$parsenumber();
                  if (tmp279 !== tmp265) {
                    if (peg$parsecommaWsp() !== tmp265) {
                      const tmp278Result = peg$parsenumber();
                      if (tmp278Result !== tmp265) {
                        let tmp283 = tmp278Result;
                        if (typeof peg$c26 === "function") {
                          if (tmp283 === tmp265) {
                            tmp283 = null;
                          }
                          if (tmp283 !== tmp265) {
                            if (charAtResult28.test(str6.charAt(closure_48))) {
                              charAtResult28 = str6.charAt(closure_48);
                              closure_48 = closure_48 + 1;
                            } else {
                              charAtResult28 = tmp265;
                              if (0 === diff) {
                                charAtResult28 = tmp265;
                                if (closure_48 >= closure_50) {
                                  if (tmp288 > closure_50) {
                                    closure_50 = tmp288;
                                    closure_51 = [];
                                  }
                                  closure_51.push(tmp287);
                                  charAtResult28 = tmp265;
                                }
                              }
                            }
                            const items20 = [];
                            let obj9 = str6;
                            str6 = tmp265;
                            if (charAtResult28 !== tmp265) {
                              do {
                                let arr128 = items20.push(charAtResult28);
                                let str13 = str;
                                if (re46.test(str.charAt(closure_48))) {
                                  charAtResult29 = str13.charAt(closure_48);
                                  closure_48 = closure_48 + 1;
                                } else {
                                  let tmp296 = obj2;
                                  charAtResult29 = obj2;
                                  if (0 === diff) {
                                    let tmp300 = closure_48;
                                    charAtResult29 = tmp296;
                                    if (closure_48 >= closure_50) {
                                      if (tmp300 > closure_50) {
                                        closure_50 = tmp300;
                                        closure_51 = [];
                                      }
                                      let arr129 = closure_51.push(tmp299);
                                      charAtResult29 = tmp296;
                                    }
                                  }
                                }
                                str6 = obj2;
                                charAtResult28 = charAtResult29;
                                obj9 = str13;
                              } while (charAtResult29 !== obj2);
                            }
                            if (items20 !== str6) {
                              if (41 === obj9.charCodeAt(closure_48)) {
                                let tmp307 = c8;
                                closure_48 = closure_48 + 1;
                              } else {
                                tmp307 = str6;
                                if (0 === diff) {
                                  tmp307 = str6;
                                  if (closure_48 >= closure_50) {
                                    if (tmp309 > closure_50) {
                                      closure_50 = tmp309;
                                      closure_51 = [];
                                    }
                                    charAtResult28 = closure_51.push(tmp308);
                                    tmp307 = str6;
                                  }
                                }
                              }
                              if (tmp307 !== str6) {
                                if (typeof peg$c14 === "function") {
                                  const items21 = [tmp279, 0, 0, 0, , ];
                                  tmp214 = null;
                                  if (null === tmp283) {
                                    tmp283 = tmp279;
                                  }
                                  items21[4] = tmp283;
                                  items21[5] = 0;
                                } else {
                                  throw new TypeError("Trying to call a non-function");
                                }
                              } else {
                                closure_48 = tmp214;
                              }
                            } else {
                              closure_48 = tmp214;
                            }
                          } else {
                            closure_48 = tmp214;
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      }
                    }
                    tmp283 = tmp265;
                  } else {
                    closure_48 = tmp214;
                  }
                } else {
                  closure_48 = tmp214;
                }
              } else {
                closure_48 = tmp214;
              }
            } else {
              closure_48 = tmp214;
            }
          } else {
            closure_48 = tmp214;
          }
        }
      } else {
        if (str2.substr(closure_48, 9) === translate) {
          closure_48 = closure_48 + 9;
          let tmp111 = tmp109;
        } else {
          tmp111 = tmp12;
          if (0 === diff) {
            tmp111 = tmp12;
            if (closure_48 >= closure_50) {
              if (tmp113 > closure_50) {
                closure_50 = tmp113;
                closure_51 = [];
              }
              closure_51.push(tmp112);
              tmp111 = tmp12;
            }
          }
        }
        if (tmp111 !== tmp12) {
          if (re46.test(str2.charAt(closure_48))) {
            let charAtResult30 = str2.charAt(closure_48);
            closure_48 = closure_48 + 1;
          } else {
            charAtResult30 = tmp12;
            if (0 === diff) {
              charAtResult30 = tmp12;
              if (closure_48 >= closure_50) {
                if (tmp125 > closure_50) {
                  closure_50 = tmp125;
                  closure_51 = [];
                }
                closure_51.push(tmp124);
                charAtResult30 = tmp12;
              }
            }
          }
          const items22 = [];
          let obj5 = re46;
          let tmp130 = tmp12;
          if (charAtResult30 !== tmp12) {
            do {
              let arr132 = items22.push(charAtResult30);
              let str7 = str;
              if (re46.test(str.charAt(closure_48))) {
                charAtResult31 = str7.charAt(closure_48);
                closure_48 = closure_48 + 1;
              } else {
                let tmp134 = obj2;
                charAtResult31 = obj2;
                if (0 === diff) {
                  let tmp138 = closure_48;
                  charAtResult31 = tmp134;
                  if (closure_48 >= closure_50) {
                    if (tmp138 > closure_50) {
                      closure_50 = tmp138;
                      closure_51 = [];
                    }
                    let arr133 = closure_51.push(tmp137);
                    charAtResult31 = tmp134;
                  }
                }
              }
              tmp130 = obj2;
              charAtResult30 = charAtResult31;
              obj5 = re46;
              str2 = str7;
            } while (charAtResult31 !== obj2);
          }
          if (items22 !== tmp130) {
            if (40 === str2.charCodeAt(closure_48)) {
              let tmp145 = c6;
              closure_48 = closure_48 + 1;
            } else {
              tmp145 = tmp130;
              if (0 === diff) {
                tmp145 = tmp130;
                if (closure_48 >= closure_50) {
                  if (tmp147 > closure_50) {
                    closure_50 = tmp147;
                    closure_51 = [];
                  }
                  closure_51.push(tmp146);
                  tmp145 = tmp130;
                }
              }
            }
            if (tmp145 !== tmp130) {
              if (obj5.test(str2.charAt(closure_48))) {
                let charAtResult32 = str2.charAt(closure_48);
                closure_48 = closure_48 + 1;
              } else {
                charAtResult32 = tmp130;
                if (0 === diff) {
                  charAtResult32 = tmp130;
                  if (closure_48 >= closure_50) {
                    if (tmp155 > closure_50) {
                      closure_50 = tmp155;
                      closure_51 = [];
                    }
                    closure_51.push(tmp154);
                    charAtResult32 = tmp130;
                  }
                }
              }
              const items23 = [];
              let obj6 = obj5;
              let tmp160 = tmp130;
              if (charAtResult32 !== tmp130) {
                do {
                  let arr136 = items23.push(charAtResult32);
                  let str8 = str;
                  if (re46.test(str.charAt(closure_48))) {
                    charAtResult33 = str8.charAt(closure_48);
                    closure_48 = closure_48 + 1;
                  } else {
                    let tmp164 = obj2;
                    charAtResult33 = obj2;
                    if (0 === diff) {
                      let tmp168 = closure_48;
                      charAtResult33 = tmp164;
                      if (closure_48 >= closure_50) {
                        if (tmp168 > closure_50) {
                          closure_50 = tmp168;
                          closure_51 = [];
                        }
                        let arr137 = closure_51.push(tmp167);
                        charAtResult33 = tmp164;
                      }
                    }
                  }
                  tmp160 = obj2;
                  charAtResult32 = charAtResult33;
                  obj6 = re46;
                  str2 = str8;
                } while (charAtResult33 !== obj2);
              }
              if (items23 !== tmp160) {
                const tmp174 = peg$parsenumber();
                if (tmp174 !== tmp160) {
                  if (peg$parsecommaWsp() !== tmp160) {
                    const tmp173Result = peg$parsenumber();
                    if (tmp173Result !== tmp160) {
                      let num11 = tmp173Result;
                      if (typeof peg$c26 === "function") {
                        if (num11 === tmp160) {
                          num11 = null;
                        }
                        if (num11 !== tmp160) {
                          if (obj6.test(str2.charAt(closure_48))) {
                            let charAtResult34 = str2.charAt(closure_48);
                            closure_48 = closure_48 + 1;
                          } else {
                            charAtResult34 = tmp160;
                            if (0 === diff) {
                              charAtResult34 = tmp160;
                              if (closure_48 >= closure_50) {
                                if (tmp183 > closure_50) {
                                  closure_50 = tmp183;
                                  closure_51 = [];
                                }
                                closure_51.push(tmp182);
                                charAtResult34 = tmp160;
                              }
                            }
                          }
                          const items24 = [];
                          let obj7 = str2;
                          str2 = tmp160;
                          if (charAtResult34 !== tmp160) {
                            do {
                              let arr139 = items24.push(charAtResult34);
                              let str9 = str;
                              if (re46.test(str.charAt(closure_48))) {
                                charAtResult35 = str9.charAt(closure_48);
                                closure_48 = closure_48 + 1;
                              } else {
                                let tmp191 = obj2;
                                charAtResult35 = obj2;
                                if (0 === diff) {
                                  let tmp195 = closure_48;
                                  charAtResult35 = tmp191;
                                  if (closure_48 >= closure_50) {
                                    if (tmp195 > closure_50) {
                                      closure_50 = tmp195;
                                      closure_51 = [];
                                    }
                                    let arr140 = closure_51.push(tmp194);
                                    charAtResult35 = tmp191;
                                  }
                                }
                              }
                              str2 = obj2;
                              charAtResult34 = charAtResult35;
                              obj7 = str9;
                            } while (charAtResult35 !== obj2);
                          }
                          if (items24 !== str2) {
                            if (41 === obj7.charCodeAt(closure_48)) {
                              let tmp202 = c8;
                              closure_48 = closure_48 + 1;
                            } else {
                              tmp202 = str2;
                              if (0 === diff) {
                                tmp202 = str2;
                                if (closure_48 >= closure_50) {
                                  if (tmp204 > closure_50) {
                                    closure_50 = tmp204;
                                    closure_51 = [];
                                  }
                                  closure_51.push(tmp203);
                                  tmp202 = str2;
                                }
                              }
                            }
                            if (tmp202 !== str2) {
                              if (typeof peg$c11 === "function") {
                                const items25 = [1, 0, tmp174, 0, 1];
                                if (!num11) {
                                  num11 = 0;
                                }
                                items25[5] = num11;
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            } else {
                              closure_48 = tmp107;
                            }
                          } else {
                            closure_48 = tmp107;
                          }
                        } else {
                          closure_48 = tmp107;
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                  }
                  num11 = tmp160;
                } else {
                  closure_48 = tmp107;
                }
              } else {
                closure_48 = tmp107;
              }
            } else {
              closure_48 = tmp107;
            }
          } else {
            closure_48 = tmp107;
          }
        } else {
          closure_48 = tmp107;
        }
      }
    }
    function peg$parsenumber() {
      if (re42.test(str.charAt(closure_48))) {
        let charAtResult = str.charAt(closure_48);
        closure_48 = closure_48 + 1;
      } else {
        charAtResult = obj2;
        if (0 === diff) {
          charAtResult = tmp2;
          if (closure_48 >= closure_50) {
            if (tmp6 > closure_50) {
              closure_50 = tmp6;
              closure_51 = [];
            }
            closure_51.push(tmp5);
            charAtResult = tmp2;
          }
        }
      }
      if (charAtResult === obj2) {
        charAtResult = null;
      }
      if (charAtResult !== obj2) {
        diff = diff + 1;
        let tmp15 = peg$parsedigitSequence();
        if (tmp15 === tmp11) {
          tmp15 = null;
        }
        if (tmp15 !== tmp11) {
          if (46 === str.charCodeAt(closure_48)) {
            let tmp19 = c36;
            closure_48 = closure_48 + 1;
          } else {
            tmp19 = tmp11;
            if (0 === diff) {
              tmp19 = tmp11;
              if (closure_48 >= closure_50) {
                if (tmp21 > closure_50) {
                  closure_50 = tmp21;
                  closure_51 = [];
                }
                closure_51.push(tmp20);
                tmp19 = tmp11;
              }
            }
          }
          if (tmp19 !== tmp11) {
            const tmp14Result = peg$parsedigitSequence();
            if (tmp14Result !== tmp11) {
              if (typeof peg$c36 === "function") {
                let joined = null;
                if (tmp15) {
                  joined = tmp15.join("");
                }
                const items = [joined, ".", tmp14Result.join("")];
                let joined1 = items.join("");
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
          closure_48 = tmp12;
          joined1 = tmp11;
        } else {
          closure_48 = tmp12;
          joined1 = tmp11;
        }
        if (joined1 !== tmp11) {
          diff = diff - 1;
          if (joined1 === tmp11) {
            if (0 === diff) {
              if (closure_48 >= closure_50) {
                if (tmp43 > closure_50) {
                  closure_50 = tmp43;
                  closure_51 = [];
                }
                closure_51.push(tmp42);
              }
            }
          }
          if (joined1 !== tmp11) {
            let tmp47 = peg$parseexponent();
            if (tmp47 === tmp11) {
              tmp47 = null;
            }
            if (tmp47 !== tmp11) {
              items1 = [joined1, tmp47];
              let obj4 = items1;
            } else {
              closure_48 = tmp12;
              obj4 = tmp11;
            }
          } else {
            closure_48 = tmp12;
            obj4 = tmp11;
          }
          let joined2 = obj4;
          if (obj4 !== tmp11) {
            if (typeof peg$c31 === "function") {
              joined2 = obj4.join("");
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          if (joined2 === tmp11) {
            const tmp14Result3 = peg$parsedigitSequence();
            if (tmp14Result3 !== tmp11) {
              const tmp53 = peg$parseexponent();
              if (tmp53 !== tmp11) {
                const items2 = [tmp14Result3, tmp53];
                let obj5 = items2;
              }
              let joined3 = obj5;
              if (obj5 !== tmp11) {
                if (typeof peg$c32 === "function") {
                  joined3 = obj5.join("");
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              joined2 = joined3;
            }
            obj5 = tmp11;
          }
          if (joined2 !== tmp11) {
            const items3 = [charAtResult, joined2];
            obj2 = items3;
          } else {
            closure_48 = tmp;
            obj2 = tmp11;
          }
        } else {
          const tmp14Result4 = peg$parsedigitSequence();
          if (tmp14Result4 === tmp11) {
            closure_48 = tmp73;
          }
          if (46 === str.charCodeAt(closure_48)) {
            let tmp30 = c36;
            closure_48 = closure_48 + 1;
          } else {
            tmp30 = tmp11;
            if (0 === diff) {
              tmp30 = tmp11;
              if (closure_48 >= closure_50) {
                if (tmp32 > closure_50) {
                  closure_50 = tmp32;
                  closure_51 = [];
                }
                closure_51.push(tmp31);
                tmp30 = tmp11;
              }
            }
          }
          if (tmp30 !== tmp11) {
            if (typeof peg$c32 === "function") {
              let joined4 = tmp14Result4.join("");
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            closure_48 = tmp73;
            joined4 = tmp11;
          }
        }
      } else {
        closure_48 = tmp;
        obj2 = tmp11;
      }
      let parsed = obj2;
      if (obj2 !== obj2) {
        if (typeof peg$c24 === "function") {
          const _parseFloat = parseFloat;
          parsed = parseFloat(obj2.join(""));
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      if (parsed === obj2) {
        if (re42.test(str.charAt(closure_48))) {
          let charAtResult1 = str.charAt(closure_48);
          closure_48 = closure_48 + 1;
        } else {
          charAtResult1 = tmp11;
          if (0 === diff) {
            charAtResult1 = tmp11;
            if (closure_48 >= closure_50) {
              if (tmp62 > closure_50) {
                closure_50 = tmp62;
                closure_51 = [];
              }
              closure_51.push(tmp61);
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
            if (typeof peg$c30 === "function") {
              joined5 = obj7.join("");
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          if (joined5 !== tmp11) {
            const items4 = [charAtResult1, joined5];
            let obj6 = items4;
          } else {
            closure_48 = tmp74;
            obj6 = tmp11;
          }
        } else {
          closure_48 = tmp74;
          obj6 = tmp11;
        }
        let parsed1 = obj6;
        if (obj6 !== tmp11) {
          if (typeof peg$c25 === "function") {
            const _parseInt = parseInt;
            parsed1 = parseInt(obj6.join(""));
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        parsed = parsed1;
      }
      return parsed;
    }
    function peg$parsecommaWsp() {
      let charAtResult1;
      let charAtResult2;
      let charAtResult3;
      if (re46.test(str.charAt(closure_48))) {
        let charAtResult = str.charAt(closure_48);
        closure_48 = closure_48 + 1;
      } else {
        charAtResult = obj2;
        if (0 === diff) {
          charAtResult = tmp3;
          if (closure_48 >= closure_50) {
            if (tmp7 > closure_50) {
              closure_50 = tmp7;
              closure_51 = [];
            }
            closure_51.push(tmp6);
            charAtResult = tmp3;
          }
        }
      }
      let obj = str;
      let tmp14 = obj2;
      let tmp15 = obj2;
      let tmp16 = peg$parsewsp;
      let tmp17 = obj2;
      if (charAtResult !== obj2) {
        const items = [];
        obj = str;
        tmp14 = tmp12;
        tmp15 = items;
        tmp16 = peg$parsewsp;
        tmp17 = tmp12;
        if (tmp13) {
          do {
            let arr2 = items.push(charAtResult);
            if (re46.test(str.charAt(closure_48))) {
              charAtResult1 = str.charAt(closure_48);
              closure_48 = closure_48 + 1;
            } else {
              let tmp22 = obj2;
              charAtResult1 = obj2;
              if (0 === diff) {
                let tmp26 = closure_48;
                charAtResult1 = tmp22;
                if (closure_48 >= closure_50) {
                  if (tmp26 > closure_50) {
                    closure_50 = tmp26;
                    closure_51 = [];
                  }
                  let arr3 = closure_51.push(tmp25);
                  charAtResult1 = tmp22;
                }
              }
            }
            tmp14 = obj2;
            charAtResult = charAtResult1;
            obj = str;
            tmp15 = items;
            tmp16 = peg$parsewsp;
            tmp17 = obj2;
          } while (charAtResult1 !== obj2);
        }
      }
      if (tmp15 !== tmp17) {
        if (44 === obj.charCodeAt(closure_48)) {
          let tmp37 = c30;
          closure_48 = closure_48 + 1;
        } else {
          tmp37 = tmp14;
          if (0 === diff) {
            tmp37 = tmp14;
            if (closure_48 >= closure_50) {
              if (tmp39 > closure_50) {
                closure_50 = tmp39;
                closure_51 = [];
              }
              closure_51.push(tmp38);
              tmp37 = tmp14;
            }
          }
        }
        if (tmp37 === tmp17) {
          tmp37 = null;
        }
        if (tmp37 !== tmp17) {
          items1 = [];
          let tmp16Result = tmp16();
          let tmp44 = obj;
          let tmp45 = tmp16;
          let tmp46 = tmp17;
          if (tmp16Result !== tmp17) {
            do {
              let arr5 = items1.push(tmp16Result);
              if (re46.test(str.charAt(closure_48))) {
                charAtResult2 = str.charAt(closure_48);
                closure_48 = closure_48 + 1;
              } else {
                let tmp51 = obj2;
                charAtResult2 = obj2;
                if (0 === diff) {
                  let tmp55 = closure_48;
                  charAtResult2 = tmp51;
                  if (closure_48 >= closure_50) {
                    if (tmp55 > closure_50) {
                      closure_50 = tmp55;
                      closure_51 = [];
                    }
                    let arr14 = closure_51.push(tmp54);
                    charAtResult2 = tmp51;
                  }
                }
              }
              tmp14 = obj2;
              tmp16Result = charAtResult2;
              tmp44 = str;
              tmp45 = peg$parsewsp;
              tmp46 = obj2;
            } while (charAtResult2 !== obj2);
          }
          if (items1 !== tmp46) {
            const items2 = [tmp15, tmp37, items1];
            obj2 = tmp44;
            let tmp31 = tmp14;
            let tmp32 = items2;
            let tmp33 = tmp45;
            let tmp34 = tmp46;
          } else {
            closure_48 = tmp;
            obj2 = tmp44;
            tmp31 = tmp14;
            tmp32 = tmp46;
            tmp33 = tmp45;
            tmp34 = tmp46;
          }
        } else {
          closure_48 = tmp;
          obj2 = obj;
          tmp31 = tmp14;
          tmp32 = tmp17;
          tmp33 = tmp16;
          tmp34 = tmp17;
        }
      } else {
        closure_48 = tmp;
        obj2 = obj;
        tmp31 = tmp14;
        tmp32 = tmp17;
        tmp33 = tmp16;
        tmp34 = tmp17;
      }
      if (tmp32 === tmp34) {
        if (44 === obj2.charCodeAt(closure_48)) {
          let tmp61 = c30;
          closure_48 = closure_48 + 1;
        } else {
          tmp61 = tmp31;
          if (0 === diff) {
            tmp61 = tmp31;
            if (closure_48 >= closure_50) {
              if (tmp63 > closure_50) {
                closure_50 = tmp63;
                closure_51 = [];
              }
              closure_51.push(tmp62);
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
              let arr16 = items3.push(tmp33Result);
              if (re46.test(str.charAt(closure_48))) {
                charAtResult3 = str.charAt(closure_48);
                closure_48 = closure_48 + 1;
              } else {
                let tmp72 = obj2;
                charAtResult3 = obj2;
                if (0 === diff) {
                  let tmp76 = closure_48;
                  charAtResult3 = tmp72;
                  if (closure_48 >= closure_50) {
                    if (tmp76 > closure_50) {
                      closure_50 = tmp76;
                      closure_51 = [];
                    }
                    let arr17 = closure_51.push(tmp75);
                    charAtResult3 = tmp72;
                  }
                }
              }
              tmp68 = obj2;
              tmp33Result = charAtResult3;
            } while (charAtResult3 !== obj2);
          }
          if (items3 !== tmp68) {
            const items4 = [tmp61, items3];
            tmp32 = items4;
          } else {
            closure_48 = tmp81;
            tmp32 = tmp68;
          }
        } else {
          closure_48 = tmp81;
          tmp32 = tmp34;
        }
      }
      return tmp32;
    }
    function peg$parseexponent() {
      if (re39.test(str.charAt(closure_48))) {
        let charAtResult = str.charAt(closure_48);
        closure_48 = closure_48 + 1;
      } else {
        charAtResult = obj2;
        if (0 === diff) {
          charAtResult = obj2;
          if (closure_48 >= closure_50) {
            if (tmp6 > closure_50) {
              closure_50 = tmp6;
              closure_51 = [];
            }
            closure_51.push(tmp5);
            charAtResult = obj2;
          }
        }
      }
      if (charAtResult !== obj2) {
        if (re42.test(str.charAt(closure_48))) {
          let charAtResult1 = str.charAt(closure_48);
          closure_48 = closure_48 + 1;
        } else {
          charAtResult1 = obj2;
          if (0 === diff) {
            charAtResult1 = obj2;
            if (closure_48 >= closure_50) {
              if (tmp18 > closure_50) {
                closure_50 = tmp18;
                closure_51 = [];
              }
              closure_51.push(tmp17);
              charAtResult1 = obj2;
            }
          }
        }
        if (charAtResult1 === obj2) {
          charAtResult1 = null;
        }
        if (charAtResult1 !== obj2) {
          const tmp24 = peg$parsedigitSequence();
          if (tmp24 !== obj2) {
            const items = [charAtResult, charAtResult1, tmp24];
            let tmp12 = items;
          }
        }
        closure_48 = tmp;
        tmp12 = obj2;
      } else {
        closure_48 = tmp;
        tmp12 = obj2;
      }
      let joined = tmp12;
      if (tmp12 !== obj2) {
        if (typeof peg$c39 === "function") {
          items1 = [, , ];
          [arr2[0], arr2[1], obj] = tmp12;
          items1[2] = obj.join("");
          joined = items1.join("");
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      return joined;
    }
    function peg$parsedigitSequence() {
      let charAtResult1;
      if (re44.test(str.charAt(closure_48))) {
        let charAtResult = str.charAt(closure_48);
        closure_48 = closure_48 + 1;
      } else {
        charAtResult = obj2;
        if (0 === diff) {
          charAtResult = obj2;
          if (closure_48 >= closure_50) {
            if (tmp5 > closure_50) {
              closure_50 = tmp5;
              closure_51 = [];
            }
            closure_51.push(tmp4);
            charAtResult = obj2;
          }
        }
      }
      let tmp10 = obj2;
      if (charAtResult !== obj2) {
        const items = [];
        tmp10 = items;
        if (tmp11) {
          do {
            let arr4 = items.push(charAtResult);
            if (re44.test(str.charAt(closure_48))) {
              charAtResult1 = str.charAt(closure_48);
              closure_48 = closure_48 + 1;
            } else {
              charAtResult1 = obj2;
              if (0 === diff) {
                let tmp19 = closure_48;
                charAtResult1 = obj2;
                if (closure_48 >= closure_50) {
                  if (tmp19 > closure_50) {
                    closure_50 = tmp19;
                    closure_51 = [];
                  }
                  let arr5 = closure_51.push(tmp18);
                  charAtResult1 = obj2;
                }
              }
            }
            charAtResult = charAtResult1;
            tmp10 = items;
          } while (charAtResult1 !== obj2);
        }
      }
      return tmp10;
    }
    function peg$parsewsp() {
      if (re46.test(str.charAt(closure_48))) {
        let charAtResult = str.charAt(closure_48);
        closure_48 = closure_48 + 1;
      } else {
        charAtResult = obj2;
        if (0 === diff) {
          charAtResult = obj2;
          if (closure_48 >= closure_50) {
            if (tmp5 > closure_50) {
              closure_50 = tmp5;
              closure_51 = [];
            }
            closure_51.push(tmp4);
            charAtResult = obj2;
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
      if (re46.test(str.charAt(closure_48))) {
        let charAtResult = str.charAt(closure_48);
        closure_48 = closure_48 + 1;
      } else {
        charAtResult = obj2;
        if (0 === diff) {
          charAtResult = obj2;
          if (closure_48 >= closure_50) {
            if (tmp7 > closure_50) {
              closure_50 = tmp7;
              closure_51 = [];
            }
            closure_51.push(tmp6);
            charAtResult = obj2;
          }
        }
      }
      const items = [];
      let tmp12 = obj2;
      if (charAtResult !== obj2) {
        do {
          let arr2 = items.push(charAtResult);
          if (re46.test(str.charAt(closure_48))) {
            charAtResult1 = str.charAt(closure_48);
            closure_48 = closure_48 + 1;
          } else {
            charAtResult1 = obj2;
            if (0 === diff) {
              let tmp21 = closure_48;
              charAtResult1 = obj2;
              if (closure_48 >= closure_50) {
                if (tmp21 > closure_50) {
                  closure_50 = tmp21;
                  closure_51 = [];
                }
                let arr7 = closure_51.push(tmp20);
                charAtResult1 = obj2;
              }
            }
          }
          tmp12 = obj2;
          charAtResult = charAtResult1;
          tmp2 = peg$parsewsp;
        } while (charAtResult1 !== obj2);
      }
      if (items !== tmp12) {
        let tmp28 = peg$parsetransforms();
        if (tmp28 === tmp12) {
          tmp28 = null;
        }
        if (tmp28 !== tmp12) {
          items1 = [];
          let tmp2Result = tmp2();
          let tmp30 = tmp12;
          if (tmp2Result !== tmp12) {
            do {
              let arr8 = items1.push(tmp2Result);
              if (re46.test(str.charAt(closure_48))) {
                charAtResult2 = str.charAt(closure_48);
                closure_48 = closure_48 + 1;
              } else {
                charAtResult2 = obj2;
                if (0 === diff) {
                  let tmp38 = closure_48;
                  charAtResult2 = obj2;
                  if (closure_48 >= closure_50) {
                    if (tmp38 > closure_50) {
                      closure_50 = tmp38;
                      closure_51 = [];
                    }
                    let arr9 = closure_51.push(tmp37);
                    charAtResult2 = obj2;
                  }
                }
              }
              tmp30 = obj2;
              tmp2Result = charAtResult2;
            } while (charAtResult2 !== obj2);
          }
          if (items1 !== tmp30) {
            let tmp26 = tmp28;
            if (typeof peg$c0 !== "function") {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            closure_48 = tmp;
            tmp26 = tmp30;
          }
        } else {
          closure_48 = tmp;
          tmp26 = tmp12;
        }
      } else {
        closure_48 = tmp;
        tmp26 = tmp12;
      }
      return tmp26;
    }
    let obj3 = { transformList: peg$parsetransformList };
    function peg$c0(arg0) {

    }
    function peg$c1(arg0, arg1) {

    }
    const matrix = "matrix";
    closure_5 = { type: "literal", text: "matrix", ignoreCase: false };
    c6 = "(";
    closure_7 = { type: "literal", text: "(", ignoreCase: false };
    c8 = ")";
    closure_9 = { type: "literal", text: ")", ignoreCase: false };
    function peg$c8(arg0, arg1, arg2, arg3, arg4, arg5) {

    }
    const translate = "translate";
    closure_12 = { type: "literal", text: "translate", ignoreCase: false };
    function peg$c11(arg0, arg1) {

    }
    const scale = "scale";
    closure_15 = { type: "literal", text: "scale", ignoreCase: false };
    function peg$c14(arg0, arg1) {

    }
    const rotate = "rotate";
    closure_18 = { type: "literal", text: "rotate", ignoreCase: false };
    function peg$c17(arg0, arg1) {

    }
    const skewX = "skewX";
    closure_21 = { type: "literal", text: "skewX", ignoreCase: false };
    function peg$c20(arg0) {

    }
    const skewY = "skewY";
    closure_24 = { type: "literal", text: "skewY", ignoreCase: false };
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
    c30 = ",";
    closure_31 = { type: "literal", text: ",", ignoreCase: false };
    function peg$c30(arg0) {

    }
    function peg$c31(arg0) {

    }
    function peg$c32(arg0) {

    }
    closure_35 = { type: "other", description: "fractionalConstant" };
    c36 = ".";
    closure_37 = { type: "literal", text: ".", ignoreCase: false };
    function peg$c36(arg0, arg1) {

    }
    const re39 = /^[eE]/;
    closure_40 = { type: "class", parts: ["e", "E"], inverted: false, ignoreCase: false };
    function peg$c39(arg0) {

    }
    const re42 = /^[+\-]/;
    closure_43 = { type: "class", parts: ["+", "-"], inverted: false, ignoreCase: false };
    const re44 = /^[0-9]/;
    let items = [["0", "9"]];
    closure_45 = { type: "class", parts: items, inverted: false, ignoreCase: false };
    const re46 = /^[ \t\r\n]/;
    closure_47 = { type: "class", parts: [" ", "\t", "\r", "\n"], inverted: false, ignoreCase: false };
    closure_48 = 0;
    let items1 = [{ line: 1, column: 1 }];
    closure_50 = 0;
    expected = [];
    let diff = 0;
    if ("startRule" in obj) {
      if (obj.startRule in obj3) {
        peg$parsetransformList = obj3[obj.startRule];
      } else {
        const _Error = Error;
        str = "Can't start parsing from rule \"";
        const error = new Error("Can't start parsing from rule \"" + obj.startRule + "\".");
        throw error;
      }
    }
    closure_60 = Math.PI / 180;
    const result = peg$parsetransformList();
    let tmp7 = result !== {};
    if (tmp7) {
      if (closure_48 === str.length) {
        return result;
      }
    }
    if (tmp7) {
      tmp7 = closure_48 < str.length;
    }
    if (tmp7) {
      if (closure_48 >= closure_50) {
        if (tmp10 > closure_50) {
          closure_50 = tmp10;
          expected = [];
        }
        expected.push({ type: "end" });
      }
    }
    let charAtResult = null;
    if (closure_50 < str.length) {
      charAtResult = str.charAt(closure_50);
    }
    function peg$computeLocation(offset, offset2) {
      let tmp19;
      let tmp9;
      let tmp = items1;
      let tmp2 = items1[offset];
      let tmp3 = items1;
      if (!tmp2) {
        diff = offset - 1;
        let tmp5 = diff;
        let sum = diff;
        if (!tmp[diff]) {
          do {
            let diff1 = tmp5 - 1;
            tmp5 = diff1;
            sum = diff1;
            tmp = items1;
            tmp9 = items1[diff1];
          } while (!tmp9);
        }
        const obj = { line: null, column: null };
        ({ line: obj.line, column: obj.column } = tmp[sum]);
        if (sum < offset) {
          do {
            if (10 === str.charCodeAt(sum)) {
              obj.line = obj.line + 1;
              obj.column = 1;
            } else {
              obj.column = obj.column + 1;
            }
            sum = sum + 1;
          } while (sum < offset);
        }
        items1[offset] = obj;
        tmp3 = items1;
        tmp2 = obj;
      }
      let tmp13 = tmp3[offset2];
      if (!tmp13) {
        const diff2 = offset2 - 1;
        let tmp15 = diff2;
        let sum1 = diff2;
        if (!tmp3[diff2]) {
          do {
            let diff3 = tmp15 - 1;
            tmp15 = diff3;
            sum1 = diff3;
            tmp3 = items1;
            tmp19 = items1[diff3];
          } while (!tmp19);
        }
        const obj3 = { line: null, column: null };
        ({ line: obj2.line, column: obj2.column } = tmp3[sum1]);
        if (sum1 < offset2) {
          do {
            if (10 === str.charCodeAt(sum1)) {
              obj3.line = obj3.line + 1;
              obj3.column = 1;
            } else {
              obj3.column = obj3.column + 1;
            }
            sum1 = sum1 + 1;
          } while (sum1 < offset2);
        }
        items1[offset2] = obj3;
        tmp13 = obj3;
      }
      return { start: { offset, line: tmp2.line, column: tmp2.column }, end: { offset: offset2, line: tmp13.line, column: tmp13.column } };
    }
    if (closure_50 < str.length) {
      let result1 = peg$computeLocation(closure_50, closure_50 + 1);
    } else {
      result1 = peg$computeLocation(closure_50, closure_50);
    }
    const message = peg$SyntaxError.buildMessage(tmp13, charAtResult);
    Object.create(peg$SyntaxError.prototype);
    let obj8 = { message, expected, found: charAtResult, location: result1, name: "SyntaxError" };
    if (typeof Error.captureStackTrace === "function") {
      const _Error2 = Error;
      Error.captureStackTrace(obj8, peg$SyntaxError);
    }
    throw obj8;
  }
};