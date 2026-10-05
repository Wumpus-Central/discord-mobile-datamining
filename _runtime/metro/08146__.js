// _runtime/metro/08146__.js
let closure_12;

class peg$SyntaxError {
  constructor(message, expected, found, location) {
    const obj = { message, expected, found, location, name: "SyntaxError" };
    if (typeof Error.captureStackTrace === "function") {
      const _Error = Error;
      Error.captureStackTrace(obj, peg$SyntaxError);
    }
  }
  static buildMessage(arg0, str) {
    let length;
    const f138646 = (str) => {
      str = str.charCodeAt(0);
      const str2 = str.toString(16);
      return "\\x0" + str2.toUpperCase();
    };
    const f138647 = (str) => {
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
        const str8 = str7.replace(/[\x00-\x0F]/g, f138646);
        return '"' + str8.replace(/[\x10-\x1F\x7F-\x9F]/g, f138647) + '"';
      },
      class: (parts) => {
        const f138648 = (str) => {
          str = str.charCodeAt(0);
          const str2 = str.toString(16);
          return "\\x0" + str2.toUpperCase();
        };
        const f138649 = (str) => {
          str = str.charCodeAt(0);
          const str2 = str.toString(16);
          return "\\x" + str2.toUpperCase();
        };
        let num = 0;
        let str = "";
        let str2 = "";
        let str3 = "";
        if (0 < parts.parts.length) {
          do {
            let text1;
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
              let str23 = str22.replace(/[\x00-\x0F]/g, f138648);
              let str24 = parts.parts[num][1];
              let text = `${str23.replace(/[\x10-\x1F\x7F-\x9F]/g, f138649)}-`;
              let str25 = str24.replace(/\\/g, "\\\\");
              let str26 = str25.replace(/\]/g, "\\]");
              let str27 = str26.replace(/\^/g, "\\^");
              let str28 = str27.replace(/-/g, "\\-");
              let str29 = str28.replace(/\0/g, "\\0");
              let str30 = str29.replace(/\t/g, "\\t");
              let str31 = str30.replace(/\n/g, "\\n");
              let str32 = str31.replace(/\r/g, "\\r");
              let str33 = str32.replace(/[\x00-\x0F]/g, f138648);
              text1 = `${str23.replace(/[\x10-\x1F\x7F-\x9F]/g, f138649)}-${str33.replace(/[\x10-\x1F\x7F-\x9F]/g, f138649)}`;
            } else {
              let str5 = str4.replace(/\\/g, "\\\\");
              let str6 = str5.replace(/\]/g, "\\]");
              let str7 = str6.replace(/\^/g, "\\^");
              let str8 = str7.replace(/-/g, "\\-");
              let str9 = str8.replace(/\0/g, "\\0");
              let str10 = str9.replace(/\t/g, "\\t");
              let str11 = str10.replace(/\n/g, "\\n");
              let str12 = str11.replace(/\r/g, "\\r");
              let str13 = str12.replace(/[\x00-\x0F]/g, f138648);
              text1 = str13.replace(/[\x10-\x1F\x7F-\x9F]/g, f138649);
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
      },
    };
    const arr = new Array(arg0.length);
    let num = 0;
    if (0 < arg0.length) {
      do {
        let tmp = arg0[num];
        arr[num] = obj[tmp.type](tmp);
        num = num + 1;
        length = arg0.length;
      } while (num < length);
    }
    const sorted = arr.sort();
    if (arr.length > 0) {
      let num2 = 1;
      let num3 = 1;
      let num4 = 1;
      if (1 < arr.length) {
        do {
          let sum = num2;
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
    if (1 === arr.length) {
      let first = arr[0];
    } else if (2 === arr.length) {
      let str3 = " or ";
      first = `${arr[0]} or ${arr[1]}`;
    } else {
      const substr = arr.slice(0, -1);
      str = ", ";
      let str2 = ", or ";
      first = `${obj2.join(", ")}, or ${arr[arr.length - 1]}`;
    }
    let str4 = "end of input";
    let text = `Expected ${tmp6}`;
    if (str) {
      let str5 = "\\\\";
      let str6 = str.replace(/\\/g, "\\\\");
      let str7 = '\\"';
      let str8 = str6.replace(/"/g, '\\"');
      let str9 = "\\0";
      let str10 = str8.replace(/\0/g, "\\0");
      let str11 = "\\t";
      let str12 = str10.replace(/\t/g, "\\t");
      let str13 = "\\n";
      let str14 = str12.replace(/\n/g, "\\n");
      let str15 = "\\r";
      let str16 = str14.replace(/\r/g, "\\r");
      let str17 = str16.replace(/[\x00-\x0F]/g, f138646);
      let str18 = '"';
      str4 = `${'"' + str17.replace(/[\x10-\x1F\x7F-\x9F]/g, f138647)}"`;
    }
    return text + " but " + str4 + " found.";
  }
}
class ctor {
  constructor() {
    this.constructor = peg$SyntaxError;
  }
}
ctor.prototype = Error.prototype;
let obj2 = Object.create(ctor.prototype);
obj2.constructor = peg$SyntaxError;
peg$SyntaxError.prototype = obj2;
let obj = {
  SyntaxError: peg$SyntaxError,
  parse: function peg$parse(str, arg1) {
    let result1;
    let closure_0 = str;
    let obj = arg1;
    function peg$parsetransforms() {
      let tmp18;
      let tmp19;
      let tmp20;
      let tmp21;
      let tmp22;
      let tmp23;
      let tmp4;
      let tmp5;
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
              items1 = [
                first * tmp18 + tmp2[1] * tmp21,
                first * tmp19 + tmp2[1] * tmp22,
                first * tmp20 + tmp2[1] * tmp23 + tmp2[2],
                tmp2[3] * tmp18 + tmp2[4] * tmp21,
                tmp2[3] * tmp19 + tmp2[4] * tmp22,
                tmp2[3] * tmp20 + tmp2[4] * tmp23 + tmp2[5],
              ];
              tmp4 = items1;
              tmp5 = tmp8;
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
      let charAtResult21;
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
      let str2;
      let tmp12;
      let tmp13;
      let tmp428;
      let tmp429;
      let tmp5;
      let str = closure_0;
      if (closure_0.substr(closure_48, 6) === matrix) {
        closure_48 = closure_48 + 6;
        tmp5 = tmp2;
      } else {
        tmp5 = obj2;
        if (0 === diff) {
          tmp5 = tmp3;
          if (closure_48 >= closure_50) {
            if (closure_48 > closure_50) {
              closure_50 = tmp7;
              closure_51 = [];
            }
            closure_51.push(tmp6);
            tmp5 = tmp3;
          }
        }
      }
      if (tmp5 !== obj2) {
        let charAtResult;
        if (re46.test(str.charAt(closure_48))) {
          charAtResult = str.charAt(closure_48);
          closure_48 = closure_48 + 1;
        } else {
          charAtResult = tmp11;
          if (0 === diff) {
            charAtResult = tmp11;
            if (closure_48 >= closure_50) {
              if (closure_48 > closure_50) {
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
        if (charAtResult !== obj2) {
          do {
            let arr3 = items.push(charAtResult);
            if (re46.test(closure_0.charAt(closure_48))) {
              charAtResult1 = closure_0.charAt(closure_48);
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
            str = closure_0;
          } while (charAtResult1 !== obj2);
        }
        if (items !== tmp24) {
          let tmp39;
          if (40 === str.charCodeAt(closure_48)) {
            tmp39 = c6;
            closure_48 = closure_48 + 1;
          } else {
            tmp39 = tmp24;
            if (0 === diff) {
              tmp39 = tmp24;
              if (closure_48 >= closure_50) {
                if (closure_48 > closure_50) {
                  closure_50 = tmp41;
                  closure_51 = [];
                }
                closure_51.push(tmp40);
                tmp39 = tmp24;
              }
            }
          }
          if (tmp39 !== tmp24) {
            let charAtResult2;
            if (obj.test(str.charAt(closure_48))) {
              charAtResult2 = str.charAt(closure_48);
              closure_48 = closure_48 + 1;
            } else {
              charAtResult2 = tmp24;
              if (0 === diff) {
                charAtResult2 = tmp24;
                if (closure_48 >= closure_50) {
                  if (closure_48 > closure_50) {
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
                if (re46.test(closure_0.charAt(closure_48))) {
                  charAtResult3 = closure_0.charAt(closure_48);
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
                str = closure_0;
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
                                    let charAtResult4;
                                    if (obj2.test(str.charAt(closure_48))) {
                                      charAtResult4 = str.charAt(closure_48);
                                      closure_48 = closure_48 + 1;
                                    } else {
                                      charAtResult4 = tmp54;
                                      if (0 === diff) {
                                        charAtResult4 = tmp54;
                                        if (closure_48 >= closure_50) {
                                          if (closure_48 > closure_50) {
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
                                        if (re46.test(closure_0.charAt(closure_48))) {
                                          charAtResult5 = closure_0.charAt(closure_48);
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
                                        obj3 = closure_0;
                                      } while (charAtResult5 !== obj2);
                                    }
                                    if (items2 !== tmp84) {
                                      let tmp99;
                                      if (41 === obj3.charCodeAt(closure_48)) {
                                        tmp99 = c8;
                                        closure_48 = closure_48 + 1;
                                      } else {
                                        tmp99 = tmp84;
                                        if (0 === diff) {
                                          tmp99 = tmp84;
                                          if (closure_48 >= closure_50) {
                                            if (closure_48 > closure_50) {
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
                                          const items3 = [
                                            tmp68,
                                            tmp67Result5,
                                            tmp67Result7,
                                            tmp67Result,
                                            tmp67Result6,
                                            tmp67Result8,
                                          ];
                                          str2 = obj3;
                                          tmp12 = tmp84;
                                          tmp13 = items3;
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
      let tmp106 = tmp13 === tmp12;
      let str6 = str2;
      let tmp107 = tmp12;
      if (tmp106) {
        let tmp112;
        let tmp118;
        let tmp119;
        let tmp120;
        if (str2.substr(closure_48, 9) === translate) {
          closure_48 = closure_48 + 9;
          tmp112 = tmp110;
        } else {
          tmp112 = tmp12;
          if (0 === diff) {
            tmp112 = tmp12;
            if (closure_48 >= closure_50) {
              if (closure_48 > closure_50) {
                closure_50 = tmp114;
                closure_51 = [];
              }
              closure_51.push(tmp113);
              tmp112 = tmp12;
            }
          }
        }
        if (tmp112 !== tmp12) {
          let charAtResult6;
          if (re46.test(str2.charAt(closure_48))) {
            charAtResult6 = str2.charAt(closure_48);
            closure_48 = closure_48 + 1;
          } else {
            charAtResult6 = tmp12;
            if (0 === diff) {
              charAtResult6 = tmp12;
              if (closure_48 >= closure_50) {
                if (closure_48 > closure_50) {
                  closure_50 = tmp126;
                  closure_51 = [];
                }
                closure_51.push(tmp125);
                charAtResult6 = tmp12;
              }
            }
          }
          const items4 = [];
          let obj4 = re46;
          let tmp131 = tmp12;
          if (charAtResult6 !== tmp12) {
            do {
              let arr15 = items4.push(charAtResult6);
              if (re46.test(closure_0.charAt(closure_48))) {
                charAtResult7 = closure_0.charAt(closure_48);
                closure_48 = closure_48 + 1;
              } else {
                let tmp135 = obj2;
                charAtResult7 = obj2;
                if (0 === diff) {
                  let tmp139 = closure_48;
                  charAtResult7 = tmp135;
                  if (closure_48 >= closure_50) {
                    if (tmp139 > closure_50) {
                      closure_50 = tmp139;
                      closure_51 = [];
                    }
                    let arr16 = closure_51.push(tmp138);
                    charAtResult7 = tmp135;
                  }
                }
              }
              tmp131 = obj2;
              charAtResult6 = charAtResult7;
              obj4 = re46;
              str2 = closure_0;
            } while (charAtResult7 !== obj2);
          }
          if (items4 !== tmp131) {
            let tmp146;
            if (40 === str2.charCodeAt(closure_48)) {
              tmp146 = c6;
              closure_48 = closure_48 + 1;
            } else {
              tmp146 = tmp131;
              if (0 === diff) {
                tmp146 = tmp131;
                if (closure_48 >= closure_50) {
                  if (closure_48 > closure_50) {
                    closure_50 = tmp148;
                    closure_51 = [];
                  }
                  closure_51.push(tmp147);
                  tmp146 = tmp131;
                }
              }
            }
            if (tmp146 !== tmp131) {
              let charAtResult8;
              if (obj4.test(str2.charAt(closure_48))) {
                charAtResult8 = str2.charAt(closure_48);
                closure_48 = closure_48 + 1;
              } else {
                charAtResult8 = tmp131;
                if (0 === diff) {
                  charAtResult8 = tmp131;
                  if (closure_48 >= closure_50) {
                    if (closure_48 > closure_50) {
                      closure_50 = tmp156;
                      closure_51 = [];
                    }
                    closure_51.push(tmp155);
                    charAtResult8 = tmp131;
                  }
                }
              }
              const items5 = [];
              let obj5 = obj4;
              let tmp161 = tmp131;
              if (charAtResult8 !== tmp131) {
                do {
                  let arr19 = items5.push(charAtResult8);
                  if (re46.test(closure_0.charAt(closure_48))) {
                    charAtResult9 = closure_0.charAt(closure_48);
                    closure_48 = closure_48 + 1;
                  } else {
                    let tmp165 = obj2;
                    charAtResult9 = obj2;
                    if (0 === diff) {
                      let tmp169 = closure_48;
                      charAtResult9 = tmp165;
                      if (closure_48 >= closure_50) {
                        if (tmp169 > closure_50) {
                          closure_50 = tmp169;
                          closure_51 = [];
                        }
                        let arr20 = closure_51.push(tmp168);
                        charAtResult9 = tmp165;
                      }
                    }
                  }
                  tmp161 = obj2;
                  charAtResult8 = charAtResult9;
                  obj5 = re46;
                  str2 = closure_0;
                } while (charAtResult9 !== obj2);
              }
              if (items5 !== tmp161) {
                const tmp175 = peg$parsenumber();
                if (tmp175 !== tmp161) {
                  const tmp176 = closure_48;
                  if (peg$parsecommaWsp() !== tmp161) {
                    let num11;
                    const tmp174Result = peg$parsenumber();
                    if (tmp174Result !== tmp161) {
                      num11 = tmp174Result;
                      if (typeof peg$c26 !== "function") {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                    if (num11 === tmp161) {
                      num11 = null;
                    }
                    if (num11 !== tmp161) {
                      let charAtResult10;
                      if (obj5.test(str2.charAt(closure_48))) {
                        charAtResult10 = str2.charAt(closure_48);
                        closure_48 = closure_48 + 1;
                      } else {
                        charAtResult10 = tmp161;
                        if (0 === diff) {
                          charAtResult10 = tmp161;
                          if (closure_48 >= closure_50) {
                            if (closure_48 > closure_50) {
                              closure_50 = tmp184;
                              closure_51 = [];
                            }
                            closure_51.push(tmp183);
                            charAtResult10 = tmp161;
                          }
                        }
                      }
                      const items6 = [];
                      let obj6 = str2;
                      let tmp189 = tmp161;
                      if (charAtResult10 !== tmp161) {
                        do {
                          let arr22 = items6.push(charAtResult10);
                          if (re46.test(closure_0.charAt(closure_48))) {
                            charAtResult11 = closure_0.charAt(closure_48);
                            closure_48 = closure_48 + 1;
                          } else {
                            let tmp193 = obj2;
                            charAtResult11 = obj2;
                            if (0 === diff) {
                              let tmp197 = closure_48;
                              charAtResult11 = tmp193;
                              if (closure_48 >= closure_50) {
                                if (tmp197 > closure_50) {
                                  closure_50 = tmp197;
                                  closure_51 = [];
                                }
                                let arr23 = closure_51.push(tmp196);
                                charAtResult11 = tmp193;
                              }
                            }
                          }
                          tmp189 = obj2;
                          charAtResult10 = charAtResult11;
                          obj6 = closure_0;
                        } while (charAtResult11 !== obj2);
                      }
                      if (items6 !== tmp189) {
                        let tmp204;
                        if (41 === obj6.charCodeAt(closure_48)) {
                          tmp204 = c8;
                          closure_48 = closure_48 + 1;
                        } else {
                          tmp204 = tmp189;
                          if (0 === diff) {
                            tmp204 = tmp189;
                            if (closure_48 >= closure_50) {
                              if (closure_48 > closure_50) {
                                closure_50 = tmp206;
                                closure_51 = [];
                              }
                              closure_51.push(tmp205);
                              tmp204 = tmp189;
                            }
                          }
                        }
                        if (tmp204 !== tmp189) {
                          if (typeof peg$c11 === "function") {
                            const items7 = [1, 0, tmp175, 0, 1];
                            if (!num11) {
                              num11 = 0;
                            }
                            items7[5] = num11;
                            tmp118 = obj6;
                            tmp119 = tmp189;
                            tmp120 = items7;
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          closure_48 = tmp108;
                          tmp118 = obj6;
                          tmp119 = tmp189;
                          tmp120 = tmp189;
                        }
                      } else {
                        closure_48 = tmp108;
                        tmp118 = obj6;
                        tmp119 = tmp189;
                        tmp120 = tmp189;
                      }
                    } else {
                      closure_48 = tmp108;
                      tmp118 = str2;
                      tmp119 = tmp161;
                      tmp120 = tmp161;
                    }
                  }
                  closure_48 = tmp176;
                  num11 = tmp161;
                } else {
                  closure_48 = tmp108;
                  tmp118 = str2;
                  tmp119 = tmp161;
                  tmp120 = tmp161;
                }
              } else {
                closure_48 = tmp108;
                tmp118 = str2;
                tmp119 = tmp161;
                tmp120 = tmp161;
              }
            } else {
              closure_48 = tmp108;
              tmp118 = str2;
              tmp119 = tmp131;
              tmp120 = tmp131;
            }
          } else {
            closure_48 = tmp108;
            tmp118 = str2;
            tmp119 = tmp131;
            tmp120 = tmp131;
          }
        } else {
          closure_48 = tmp108;
          tmp118 = str2;
          tmp119 = tmp12;
          tmp120 = tmp12;
        }
        tmp106 = tmp120 === tmp12;
        str6 = tmp118;
        tmp107 = tmp119;
        tmp13 = tmp120;
      }
      let str10 = str6;
      let tmp211 = tmp107;
      if (tmp106) {
        let tmp216;
        let tmp222;
        let tmp223;
        let tmp224;
        if (str6.substr(closure_48, 5) === scale) {
          closure_48 = closure_48 + 5;
          tmp216 = tmp214;
        } else {
          tmp216 = tmp107;
          if (0 === diff) {
            tmp216 = tmp107;
            if (closure_48 >= closure_50) {
              if (closure_48 > closure_50) {
                closure_50 = tmp218;
                closure_51 = [];
              }
              closure_51.push(tmp217);
              tmp216 = tmp107;
            }
          }
        }
        if (tmp216 !== tmp107) {
          let charAtResult12;
          if (re46.test(str6.charAt(closure_48))) {
            charAtResult12 = str6.charAt(closure_48);
            closure_48 = closure_48 + 1;
          } else {
            charAtResult12 = tmp107;
            if (0 === diff) {
              charAtResult12 = tmp107;
              if (closure_48 >= closure_50) {
                if (closure_48 > closure_50) {
                  closure_50 = tmp230;
                  closure_51 = [];
                }
                closure_51.push(tmp229);
                charAtResult12 = tmp107;
              }
            }
          }
          const items8 = [];
          let obj7 = re46;
          let tmp235 = tmp107;
          if (charAtResult12 !== tmp107) {
            do {
              let arr98 = items8.push(charAtResult12);
              if (re46.test(closure_0.charAt(closure_48))) {
                charAtResult13 = closure_0.charAt(closure_48);
                closure_48 = closure_48 + 1;
              } else {
                let tmp239 = obj2;
                charAtResult13 = obj2;
                if (0 === diff) {
                  let tmp243 = closure_48;
                  charAtResult13 = tmp239;
                  if (closure_48 >= closure_50) {
                    if (tmp243 > closure_50) {
                      closure_50 = tmp243;
                      closure_51 = [];
                    }
                    let arr99 = closure_51.push(tmp242);
                    charAtResult13 = tmp239;
                  }
                }
              }
              tmp235 = obj2;
              charAtResult12 = charAtResult13;
              obj7 = re46;
              str6 = closure_0;
            } while (charAtResult13 !== obj2);
          }
          if (items8 !== tmp235) {
            let tmp250;
            if (40 === str6.charCodeAt(closure_48)) {
              tmp250 = c6;
              closure_48 = closure_48 + 1;
            } else {
              tmp250 = tmp235;
              if (0 === diff) {
                tmp250 = tmp235;
                if (closure_48 >= closure_50) {
                  if (closure_48 > closure_50) {
                    closure_50 = tmp252;
                    closure_51 = [];
                  }
                  closure_51.push(tmp251);
                  tmp250 = tmp235;
                }
              }
            }
            if (tmp250 !== tmp235) {
              let charAtResult14;
              if (obj7.test(str6.charAt(closure_48))) {
                charAtResult14 = str6.charAt(closure_48);
                closure_48 = closure_48 + 1;
              } else {
                charAtResult14 = tmp235;
                if (0 === diff) {
                  charAtResult14 = tmp235;
                  if (closure_48 >= closure_50) {
                    if (closure_48 > closure_50) {
                      closure_50 = tmp260;
                      closure_51 = [];
                    }
                    closure_51.push(tmp259);
                    charAtResult14 = tmp235;
                  }
                }
              }
              const items9 = [];
              let obj8 = obj7;
              let tmp265 = tmp235;
              if (charAtResult14 !== tmp235) {
                do {
                  let arr102 = items9.push(charAtResult14);
                  if (re46.test(closure_0.charAt(closure_48))) {
                    charAtResult15 = closure_0.charAt(closure_48);
                    closure_48 = closure_48 + 1;
                  } else {
                    let tmp269 = obj2;
                    charAtResult15 = obj2;
                    if (0 === diff) {
                      let tmp273 = closure_48;
                      charAtResult15 = tmp269;
                      if (closure_48 >= closure_50) {
                        if (tmp273 > closure_50) {
                          closure_50 = tmp273;
                          closure_51 = [];
                        }
                        let arr103 = closure_51.push(tmp272);
                        charAtResult15 = tmp269;
                      }
                    }
                  }
                  tmp265 = obj2;
                  charAtResult14 = charAtResult15;
                  obj8 = re46;
                  str6 = closure_0;
                } while (charAtResult15 !== obj2);
              }
              if (items9 !== tmp265) {
                const tmp279 = peg$parsenumber();
                if (tmp279 !== tmp265) {
                  const tmp280 = closure_48;
                  if (peg$parsecommaWsp() !== tmp265) {
                    let tmp283;
                    const tmp278Result = peg$parsenumber();
                    if (tmp278Result !== tmp265) {
                      tmp283 = tmp278Result;
                      if (typeof peg$c26 !== "function") {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                    if (tmp283 === tmp265) {
                      tmp283 = null;
                    }
                    if (tmp283 !== tmp265) {
                      let charAtResult16;
                      if (obj8.test(str6.charAt(closure_48))) {
                        charAtResult16 = str6.charAt(closure_48);
                        closure_48 = closure_48 + 1;
                      } else {
                        charAtResult16 = tmp265;
                        if (0 === diff) {
                          charAtResult16 = tmp265;
                          if (closure_48 >= closure_50) {
                            if (closure_48 > closure_50) {
                              closure_50 = tmp289;
                              closure_51 = [];
                            }
                            closure_51.push(tmp288);
                            charAtResult16 = tmp265;
                          }
                        }
                      }
                      const items10 = [];
                      let obj9 = str6;
                      let tmp294 = tmp265;
                      if (charAtResult16 !== tmp265) {
                        do {
                          let arr105 = items10.push(charAtResult16);
                          if (re46.test(closure_0.charAt(closure_48))) {
                            charAtResult17 = closure_0.charAt(closure_48);
                            closure_48 = closure_48 + 1;
                          } else {
                            let tmp298 = obj2;
                            charAtResult17 = obj2;
                            if (0 === diff) {
                              let tmp302 = closure_48;
                              charAtResult17 = tmp298;
                              if (closure_48 >= closure_50) {
                                if (tmp302 > closure_50) {
                                  closure_50 = tmp302;
                                  closure_51 = [];
                                }
                                let arr106 = closure_51.push(tmp301);
                                charAtResult17 = tmp298;
                              }
                            }
                          }
                          tmp294 = obj2;
                          charAtResult16 = charAtResult17;
                          obj9 = closure_0;
                        } while (charAtResult17 !== obj2);
                      }
                      if (items10 !== tmp294) {
                        let tmp309;
                        if (41 === obj9.charCodeAt(closure_48)) {
                          tmp309 = c8;
                          closure_48 = closure_48 + 1;
                        } else {
                          tmp309 = tmp294;
                          if (0 === diff) {
                            tmp309 = tmp294;
                            if (closure_48 >= closure_50) {
                              if (closure_48 > closure_50) {
                                closure_50 = tmp311;
                                closure_51 = [];
                              }
                              closure_51.push(tmp310);
                              tmp309 = tmp294;
                            }
                          }
                        }
                        if (tmp309 !== tmp294) {
                          if (typeof peg$c14 === "function") {
                            const items11 = [tmp279, 0, 0, 0, ,];
                            if (null === tmp283) {
                              tmp283 = tmp279;
                            }
                            items11[4] = tmp283;
                            items11[5] = 0;
                            tmp222 = obj9;
                            tmp223 = tmp294;
                            tmp224 = items11;
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          closure_48 = tmp212;
                          tmp222 = obj9;
                          tmp223 = tmp294;
                          tmp224 = tmp294;
                        }
                      } else {
                        closure_48 = tmp212;
                        tmp222 = obj9;
                        tmp223 = tmp294;
                        tmp224 = tmp294;
                      }
                    } else {
                      closure_48 = tmp212;
                      tmp222 = str6;
                      tmp223 = tmp265;
                      tmp224 = tmp265;
                    }
                  }
                  closure_48 = tmp280;
                  tmp283 = tmp265;
                } else {
                  closure_48 = tmp212;
                  tmp222 = str6;
                  tmp223 = tmp265;
                  tmp224 = tmp265;
                }
              } else {
                closure_48 = tmp212;
                tmp222 = str6;
                tmp223 = tmp265;
                tmp224 = tmp265;
              }
            } else {
              closure_48 = tmp212;
              tmp222 = str6;
              tmp223 = tmp235;
              tmp224 = tmp235;
            }
          } else {
            closure_48 = tmp212;
            tmp222 = str6;
            tmp223 = tmp235;
            tmp224 = tmp235;
          }
        } else {
          closure_48 = tmp212;
          tmp222 = str6;
          tmp223 = tmp107;
          tmp224 = tmp107;
        }
        tmp106 = tmp224 === tmp12;
        str10 = tmp222;
        tmp211 = tmp223;
        tmp13 = tmp224;
      }
      let str14 = str10;
      let tmp317 = tmp211;
      if (tmp106) {
        let tmp322;
        let tmp330;
        let tmp328;
        let tmp329;
        if (str10.substr(closure_48, 6) === rotate) {
          closure_48 = closure_48 + 6;
          tmp322 = tmp320;
        } else {
          tmp322 = tmp211;
          if (0 === diff) {
            tmp322 = tmp211;
            if (closure_48 >= closure_50) {
              if (closure_48 > closure_50) {
                closure_50 = tmp324;
                closure_51 = [];
              }
              closure_51.push(tmp323);
              tmp322 = tmp211;
            }
          }
        }
        if (tmp322 !== tmp211) {
          let charAtResult18;
          if (re46.test(str10.charAt(closure_48))) {
            charAtResult18 = str10.charAt(closure_48);
            closure_48 = closure_48 + 1;
          } else {
            charAtResult18 = tmp211;
            if (0 === diff) {
              charAtResult18 = tmp211;
              if (closure_48 >= closure_50) {
                if (closure_48 > closure_50) {
                  closure_50 = tmp336;
                  closure_51 = [];
                }
                closure_51.push(tmp335);
                charAtResult18 = tmp211;
              }
            }
          }
          const items12 = [];
          let obj10 = re46;
          let tmp341 = tmp211;
          if (charAtResult18 !== tmp211) {
            do {
              let arr110 = items12.push(charAtResult18);
              if (re46.test(closure_0.charAt(closure_48))) {
                charAtResult19 = closure_0.charAt(closure_48);
                closure_48 = closure_48 + 1;
              } else {
                let tmp345 = obj2;
                charAtResult19 = obj2;
                if (0 === diff) {
                  let tmp349 = closure_48;
                  charAtResult19 = tmp345;
                  if (closure_48 >= closure_50) {
                    if (tmp349 > closure_50) {
                      closure_50 = tmp349;
                      closure_51 = [];
                    }
                    let arr111 = closure_51.push(tmp348);
                    charAtResult19 = tmp345;
                  }
                }
              }
              tmp341 = obj2;
              charAtResult18 = charAtResult19;
              obj10 = re46;
              str10 = closure_0;
            } while (charAtResult19 !== obj2);
          }
          if (items12 !== tmp341) {
            let tmp356;
            if (40 === str10.charCodeAt(closure_48)) {
              tmp356 = c6;
              closure_48 = closure_48 + 1;
            } else {
              tmp356 = tmp341;
              if (0 === diff) {
                tmp356 = tmp341;
                if (closure_48 >= closure_50) {
                  if (closure_48 > closure_50) {
                    closure_50 = tmp358;
                    closure_51 = [];
                  }
                  closure_51.push(tmp357);
                  tmp356 = tmp341;
                }
              }
            }
            if (tmp356 !== tmp341) {
              let charAtResult20;
              if (obj10.test(str10.charAt(closure_48))) {
                charAtResult20 = str10.charAt(closure_48);
                closure_48 = closure_48 + 1;
              } else {
                charAtResult20 = tmp341;
                if (0 === diff) {
                  charAtResult20 = tmp341;
                  if (closure_48 >= closure_50) {
                    if (closure_48 > closure_50) {
                      closure_50 = tmp366;
                      closure_51 = [];
                    }
                    closure_51.push(tmp365);
                    charAtResult20 = tmp341;
                  }
                }
              }
              const items13 = [];
              let tmp371 = tmp341;
              if (charAtResult20 !== tmp341) {
                do {
                  let arr114 = items13.push(charAtResult20);
                  if (re46.test(closure_0.charAt(closure_48))) {
                    charAtResult21 = closure_0.charAt(closure_48);
                    closure_48 = closure_48 + 1;
                  } else {
                    let tmp375 = obj2;
                    charAtResult21 = obj2;
                    if (0 === diff) {
                      let tmp379 = closure_48;
                      charAtResult21 = tmp375;
                      if (closure_48 >= closure_50) {
                        if (tmp379 > closure_50) {
                          closure_50 = tmp379;
                          closure_51 = [];
                        }
                        let arr115 = closure_51.push(tmp378);
                        charAtResult21 = tmp375;
                      }
                    }
                  }
                  tmp371 = obj2;
                  charAtResult20 = charAtResult21;
                  obj10 = re46;
                  str10 = closure_0;
                } while (charAtResult21 !== obj2);
              }
              if (items13 !== tmp371) {
                const tmp385 = peg$parsenumber();
                if (tmp385 !== tmp371) {
                  const tmp386 = closure_48;
                  if (peg$parsecommaWsp() !== tmp371) {
                    const tmp384Result = peg$parsenumber();
                    if (tmp384Result !== tmp371) {
                      if (peg$parsecommaWsp() !== tmp371) {
                        let tmp390;
                        const tmp384Result2 = peg$parsenumber();
                        if (tmp384Result2 !== tmp371) {
                          if (typeof peg$c27 === "function") {
                            const items14 = [tmp384Result, tmp384Result2];
                            tmp390 = items14;
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        }
                        if (tmp390 === tmp371) {
                          tmp390 = null;
                        }
                        if (tmp390 !== tmp371) {
                          let charAtResult22;
                          if (obj10.test(str10.charAt(closure_48))) {
                            charAtResult22 = str10.charAt(closure_48);
                            closure_48 = closure_48 + 1;
                          } else {
                            charAtResult22 = tmp371;
                            if (0 === diff) {
                              charAtResult22 = tmp371;
                              if (closure_48 >= closure_50) {
                                if (closure_48 > closure_50) {
                                  closure_50 = tmp396;
                                  closure_51 = [];
                                }
                                closure_51.push(tmp395);
                                charAtResult22 = tmp371;
                              }
                            }
                          }
                          const items15 = [];
                          let obj11 = str10;
                          let tmp401 = tmp371;
                          if (charAtResult22 !== tmp371) {
                            do {
                              let arr117 = items15.push(charAtResult22);
                              if (re46.test(closure_0.charAt(closure_48))) {
                                charAtResult23 = closure_0.charAt(closure_48);
                                closure_48 = closure_48 + 1;
                              } else {
                                let tmp405 = obj2;
                                charAtResult23 = obj2;
                                if (0 === diff) {
                                  let tmp409 = closure_48;
                                  charAtResult23 = tmp405;
                                  if (closure_48 >= closure_50) {
                                    if (tmp409 > closure_50) {
                                      closure_50 = tmp409;
                                      closure_51 = [];
                                    }
                                    let arr118 = closure_51.push(tmp408);
                                    charAtResult23 = tmp405;
                                  }
                                }
                              }
                              tmp401 = obj2;
                              charAtResult22 = charAtResult23;
                              obj11 = closure_0;
                            } while (charAtResult23 !== obj2);
                          }
                          if (items15 !== tmp401) {
                            let tmp416;
                            if (41 === obj11.charCodeAt(closure_48)) {
                              tmp416 = c8;
                              closure_48 = closure_48 + 1;
                            } else {
                              tmp416 = tmp401;
                              if (0 === diff) {
                                tmp416 = tmp401;
                                if (closure_48 >= closure_50) {
                                  if (closure_48 > closure_50) {
                                    closure_50 = tmp418;
                                    closure_51 = [];
                                  }
                                  closure_51.push(tmp417);
                                  tmp416 = tmp401;
                                }
                              }
                            }
                            if (tmp416 !== tmp401) {
                              if (typeof peg$c17 === "function") {
                                let items17;
                                const _Math = Math;
                                const cosResult = Math.cos(closure_60 * tmp385);
                                const _Math2 = Math;
                                const sinResult = Math.sin(closure_60 * tmp385);
                                if (null !== tmp390) {
                                  [tmp428, tmp429] = tmp390;
                                  const items16 = [
                                    cosResult,
                                    -sinResult,
                                    cosResult * -tmp428 + -sinResult * -tmp429 + tmp428,
                                    sinResult,
                                    cosResult,
                                    sinResult * -tmp428 + cosResult * -tmp429 + tmp429,
                                  ];
                                  items17 = items16;
                                } else {
                                  items17 = [cosResult, -sinResult, 0, sinResult, cosResult, 0];
                                }
                                tmp330 = items17;
                                tmp328 = obj11;
                                tmp329 = tmp401;
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            } else {
                              closure_48 = tmp318;
                              tmp328 = obj11;
                              tmp329 = tmp401;
                              tmp330 = tmp401;
                            }
                          } else {
                            closure_48 = tmp318;
                            tmp328 = obj11;
                            tmp329 = tmp401;
                            tmp330 = tmp401;
                          }
                        } else {
                          closure_48 = tmp318;
                          tmp328 = str10;
                          tmp329 = tmp371;
                          tmp330 = tmp371;
                        }
                      }
                    }
                  }
                  closure_48 = tmp386;
                  tmp390 = tmp371;
                } else {
                  closure_48 = tmp318;
                  tmp328 = str10;
                  tmp329 = tmp371;
                  tmp330 = tmp371;
                }
              } else {
                closure_48 = tmp318;
                tmp328 = str10;
                tmp329 = tmp371;
                tmp330 = tmp371;
              }
            } else {
              closure_48 = tmp318;
              tmp328 = str10;
              tmp329 = tmp341;
              tmp330 = tmp341;
            }
          } else {
            closure_48 = tmp318;
            tmp328 = str10;
            tmp329 = tmp341;
            tmp330 = tmp341;
          }
        } else {
          closure_48 = tmp318;
          tmp328 = str10;
          tmp329 = tmp211;
          tmp330 = tmp211;
        }
        tmp106 = tmp330 === tmp12;
        str14 = tmp328;
        tmp317 = tmp329;
        tmp13 = tmp330;
      }
      let str18 = str14;
      let tmp430 = tmp317;
      if (tmp106) {
        let tmp435;
        let tmp441;
        let tmp442;
        let tmp443;
        if (str14.substr(closure_48, 5) === skewX) {
          closure_48 = closure_48 + 5;
          tmp435 = tmp433;
        } else {
          tmp435 = tmp317;
          if (0 === diff) {
            tmp435 = tmp317;
            if (closure_48 >= closure_50) {
              if (closure_48 > closure_50) {
                closure_50 = tmp437;
                closure_51 = [];
              }
              closure_51.push(tmp436);
              tmp435 = tmp317;
            }
          }
        }
        if (tmp435 !== tmp317) {
          let charAtResult24;
          let obj12 = re46;
          if (re46.test(str14.charAt(closure_48))) {
            charAtResult24 = str14.charAt(closure_48);
            closure_48 = closure_48 + 1;
          } else {
            charAtResult24 = tmp317;
            if (0 === diff) {
              charAtResult24 = tmp317;
              if (closure_48 >= closure_50) {
                if (closure_48 > closure_50) {
                  closure_50 = tmp448;
                  closure_51 = [];
                }
                closure_51.push(tmp447);
                charAtResult24 = tmp317;
              }
            }
          }
          const items18 = [];
          let tmp453 = tmp317;
          if (charAtResult24 !== tmp317) {
            do {
              let arr122 = items18.push(charAtResult24);
              if (re46.test(closure_0.charAt(closure_48))) {
                charAtResult25 = closure_0.charAt(closure_48);
                closure_48 = closure_48 + 1;
              } else {
                let tmp457 = obj2;
                charAtResult25 = obj2;
                if (0 === diff) {
                  let tmp461 = closure_48;
                  charAtResult25 = tmp457;
                  if (closure_48 >= closure_50) {
                    if (tmp461 > closure_50) {
                      closure_50 = tmp461;
                      closure_51 = [];
                    }
                    let arr123 = closure_51.push(tmp460);
                    charAtResult25 = tmp457;
                  }
                }
              }
              tmp453 = obj2;
              charAtResult24 = charAtResult25;
              obj12 = re46;
              str14 = closure_0;
            } while (charAtResult25 !== obj2);
          }
          if (items18 !== tmp453) {
            let tmp468;
            if (40 === str14.charCodeAt(closure_48)) {
              tmp468 = c6;
              closure_48 = closure_48 + 1;
            } else {
              tmp468 = tmp453;
              if (0 === diff) {
                tmp468 = tmp453;
                if (closure_48 >= closure_50) {
                  if (closure_48 > closure_50) {
                    closure_50 = tmp470;
                    closure_51 = [];
                  }
                  closure_51.push(tmp469);
                  tmp468 = tmp453;
                }
              }
            }
            if (tmp468 !== tmp453) {
              let charAtResult26;
              if (obj12.test(str14.charAt(closure_48))) {
                charAtResult26 = str14.charAt(closure_48);
                closure_48 = closure_48 + 1;
              } else {
                charAtResult26 = tmp453;
                if (0 === diff) {
                  charAtResult26 = tmp453;
                  if (closure_48 >= closure_50) {
                    if (closure_48 > closure_50) {
                      closure_50 = tmp478;
                      closure_51 = [];
                    }
                    closure_51.push(tmp477);
                    charAtResult26 = tmp453;
                  }
                }
              }
              const items19 = [];
              let tmp483 = tmp453;
              if (charAtResult26 !== tmp453) {
                do {
                  let arr126 = items19.push(charAtResult26);
                  if (re46.test(closure_0.charAt(closure_48))) {
                    charAtResult27 = closure_0.charAt(closure_48);
                    closure_48 = closure_48 + 1;
                  } else {
                    let tmp487 = obj2;
                    charAtResult27 = obj2;
                    if (0 === diff) {
                      let tmp491 = closure_48;
                      charAtResult27 = tmp487;
                      if (closure_48 >= closure_50) {
                        if (tmp491 > closure_50) {
                          closure_50 = tmp491;
                          closure_51 = [];
                        }
                        let arr127 = closure_51.push(tmp490);
                        charAtResult27 = tmp487;
                      }
                    }
                  }
                  tmp483 = obj2;
                  charAtResult26 = charAtResult27;
                  obj12 = re46;
                  str14 = closure_0;
                } while (charAtResult27 !== obj2);
              }
              if (items19 !== tmp483) {
                const tmp497 = peg$parsenumber();
                if (tmp497 !== tmp483) {
                  let charAtResult28;
                  if (obj12.test(str14.charAt(closure_48))) {
                    charAtResult28 = str14.charAt(closure_48);
                    closure_48 = closure_48 + 1;
                  } else {
                    charAtResult28 = tmp483;
                    if (0 === diff) {
                      charAtResult28 = tmp483;
                      if (closure_48 >= closure_50) {
                        if (closure_48 > closure_50) {
                          closure_50 = tmp502;
                          closure_51 = [];
                        }
                        closure_51.push(tmp501);
                        charAtResult28 = tmp483;
                      }
                    }
                  }
                  const items20 = [];
                  let obj13 = str14;
                  let tmp507 = tmp483;
                  if (charAtResult28 !== tmp483) {
                    do {
                      let arr129 = items20.push(charAtResult28);
                      if (re46.test(closure_0.charAt(closure_48))) {
                        charAtResult29 = closure_0.charAt(closure_48);
                        closure_48 = closure_48 + 1;
                      } else {
                        let tmp511 = obj2;
                        charAtResult29 = obj2;
                        if (0 === diff) {
                          let tmp515 = closure_48;
                          charAtResult29 = tmp511;
                          if (closure_48 >= closure_50) {
                            if (tmp515 > closure_50) {
                              closure_50 = tmp515;
                              closure_51 = [];
                            }
                            let arr130 = closure_51.push(tmp514);
                            charAtResult29 = tmp511;
                          }
                        }
                      }
                      tmp507 = obj2;
                      charAtResult28 = charAtResult29;
                      obj13 = closure_0;
                    } while (charAtResult29 !== obj2);
                  }
                  if (items20 !== tmp507) {
                    let tmp522;
                    if (41 === obj13.charCodeAt(closure_48)) {
                      tmp522 = c8;
                      closure_48 = closure_48 + 1;
                    } else {
                      tmp522 = tmp507;
                      if (0 === diff) {
                        tmp522 = tmp507;
                        if (closure_48 >= closure_50) {
                          if (closure_48 > closure_50) {
                            closure_50 = tmp524;
                            closure_51 = [];
                          }
                          closure_51.push(tmp523);
                          tmp522 = tmp507;
                        }
                      }
                    }
                    if (tmp522 !== tmp507) {
                      if (typeof peg$c20 === "function") {
                        const _Math3 = Math;
                        const items21 = [1, Math.tan(closure_60 * tmp497), 0, 0, 1, 0];
                        tmp441 = obj13;
                        tmp442 = tmp507;
                        tmp443 = items21;
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      closure_48 = tmp431;
                      tmp441 = obj13;
                      tmp442 = tmp507;
                      tmp443 = tmp507;
                    }
                  } else {
                    closure_48 = tmp431;
                    tmp441 = obj13;
                    tmp442 = tmp507;
                    tmp443 = tmp507;
                  }
                } else {
                  closure_48 = tmp431;
                  tmp441 = str14;
                  tmp442 = tmp483;
                  tmp443 = tmp483;
                }
              } else {
                closure_48 = tmp431;
                tmp441 = str14;
                tmp442 = tmp483;
                tmp443 = tmp483;
              }
            } else {
              closure_48 = tmp431;
              tmp441 = str14;
              tmp442 = tmp453;
              tmp443 = tmp453;
            }
          } else {
            closure_48 = tmp431;
            tmp441 = str14;
            tmp442 = tmp453;
            tmp443 = tmp453;
          }
        } else {
          closure_48 = tmp431;
          tmp441 = str14;
          tmp442 = tmp317;
          tmp443 = tmp317;
        }
        tmp106 = tmp443 === tmp12;
        str18 = tmp441;
        tmp430 = tmp442;
        tmp13 = tmp443;
      }
      if (tmp106) {
        let tmp535;
        let tmp541;
        if (str18.substr(closure_48, 5) === skewY) {
          closure_48 = closure_48 + 5;
          tmp535 = tmp533;
        } else {
          tmp535 = tmp430;
          if (0 === diff) {
            tmp535 = tmp430;
            if (closure_48 >= closure_50) {
              if (closure_48 > closure_50) {
                closure_50 = tmp537;
                closure_51 = [];
              }
              closure_51.push(tmp536);
              tmp535 = tmp430;
            }
          }
        }
        if (tmp535 !== tmp430) {
          let charAtResult30;
          if (re46.test(str18.charAt(closure_48))) {
            charAtResult30 = str18.charAt(closure_48);
            closure_48 = closure_48 + 1;
          } else {
            charAtResult30 = tmp430;
            if (0 === diff) {
              charAtResult30 = tmp430;
              if (closure_48 >= closure_50) {
                if (closure_48 > closure_50) {
                  closure_50 = tmp547;
                  closure_51 = [];
                }
                closure_51.push(tmp546);
                charAtResult30 = tmp430;
              }
            }
          }
          const items22 = [];
          let obj14 = re46;
          let tmp552 = tmp430;
          if (charAtResult30 !== tmp430) {
            do {
              let arr134 = items22.push(charAtResult30);
              if (re46.test(closure_0.charAt(closure_48))) {
                charAtResult31 = closure_0.charAt(closure_48);
                closure_48 = closure_48 + 1;
              } else {
                let tmp556 = obj2;
                charAtResult31 = obj2;
                if (0 === diff) {
                  let tmp560 = closure_48;
                  charAtResult31 = tmp556;
                  if (closure_48 >= closure_50) {
                    if (tmp560 > closure_50) {
                      closure_50 = tmp560;
                      closure_51 = [];
                    }
                    let arr135 = closure_51.push(tmp559);
                    charAtResult31 = tmp556;
                  }
                }
              }
              tmp552 = obj2;
              charAtResult30 = charAtResult31;
              obj14 = re46;
              str18 = closure_0;
            } while (charAtResult31 !== obj2);
          }
          if (items22 !== tmp552) {
            let tmp567;
            if (40 === str18.charCodeAt(closure_48)) {
              tmp567 = c6;
              closure_48 = closure_48 + 1;
            } else {
              tmp567 = tmp552;
              if (0 === diff) {
                tmp567 = tmp552;
                if (closure_48 >= closure_50) {
                  if (closure_48 > closure_50) {
                    closure_50 = tmp569;
                    closure_51 = [];
                  }
                  closure_51.push(tmp568);
                  tmp567 = tmp552;
                }
              }
            }
            if (tmp567 !== tmp552) {
              let charAtResult32;
              if (obj14.test(str18.charAt(closure_48))) {
                charAtResult32 = str18.charAt(closure_48);
                closure_48 = closure_48 + 1;
              } else {
                charAtResult32 = tmp552;
                if (0 === diff) {
                  charAtResult32 = tmp552;
                  if (closure_48 >= closure_50) {
                    if (closure_48 > closure_50) {
                      closure_50 = tmp577;
                      closure_51 = [];
                    }
                    closure_51.push(tmp576);
                    charAtResult32 = tmp552;
                  }
                }
              }
              const items23 = [];
              let tmp582 = tmp552;
              if (charAtResult32 !== tmp552) {
                do {
                  let arr138 = items23.push(charAtResult32);
                  if (re46.test(closure_0.charAt(closure_48))) {
                    charAtResult33 = closure_0.charAt(closure_48);
                    closure_48 = closure_48 + 1;
                  } else {
                    let tmp586 = obj2;
                    charAtResult33 = obj2;
                    if (0 === diff) {
                      let tmp590 = closure_48;
                      charAtResult33 = tmp586;
                      if (closure_48 >= closure_50) {
                        if (tmp590 > closure_50) {
                          closure_50 = tmp590;
                          closure_51 = [];
                        }
                        let arr139 = closure_51.push(tmp589);
                        charAtResult33 = tmp586;
                      }
                    }
                  }
                  tmp582 = obj2;
                  charAtResult32 = charAtResult33;
                  obj14 = re46;
                  str18 = closure_0;
                } while (charAtResult33 !== obj2);
              }
              if (items23 !== tmp582) {
                const tmp596 = peg$parsenumber();
                if (tmp596 !== tmp582) {
                  let charAtResult34;
                  if (obj14.test(str18.charAt(closure_48))) {
                    charAtResult34 = str18.charAt(closure_48);
                    closure_48 = closure_48 + 1;
                  } else {
                    charAtResult34 = tmp582;
                    if (0 === diff) {
                      charAtResult34 = tmp582;
                      if (closure_48 >= closure_50) {
                        if (closure_48 > closure_50) {
                          closure_50 = tmp601;
                          closure_51 = [];
                        }
                        closure_51.push(tmp600);
                        charAtResult34 = tmp582;
                      }
                    }
                  }
                  const items24 = [];
                  let obj15 = str18;
                  let tmp606 = tmp582;
                  if (charAtResult34 !== tmp582) {
                    do {
                      let arr141 = items24.push(charAtResult34);
                      if (re46.test(closure_0.charAt(closure_48))) {
                        charAtResult35 = closure_0.charAt(closure_48);
                        closure_48 = closure_48 + 1;
                      } else {
                        let tmp610 = obj2;
                        charAtResult35 = obj2;
                        if (0 === diff) {
                          let tmp614 = closure_48;
                          charAtResult35 = tmp610;
                          if (closure_48 >= closure_50) {
                            if (tmp614 > closure_50) {
                              closure_50 = tmp614;
                              closure_51 = [];
                            }
                            let arr142 = closure_51.push(tmp613);
                            charAtResult35 = tmp610;
                          }
                        }
                      }
                      tmp606 = obj2;
                      charAtResult34 = charAtResult35;
                      obj15 = closure_0;
                    } while (charAtResult35 !== obj2);
                  }
                  if (items24 !== tmp606) {
                    let tmp621;
                    if (41 === obj15.charCodeAt(closure_48)) {
                      tmp621 = c8;
                      closure_48 = closure_48 + 1;
                    } else {
                      tmp621 = tmp606;
                      if (0 === diff) {
                        tmp621 = tmp606;
                        if (closure_48 >= closure_50) {
                          if (closure_48 > closure_50) {
                            closure_50 = tmp623;
                            closure_51 = [];
                          }
                          closure_51.push(tmp622);
                          tmp621 = tmp606;
                        }
                      }
                    }
                    if (tmp621 !== tmp606) {
                      if (typeof peg$c23 === "function") {
                        const _Math4 = Math;
                        const items25 = [1, 0, 0, Math.tan(closure_60 * tmp596), 1, 0];
                        tmp541 = items25;
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      closure_48 = tmp531;
                      tmp541 = tmp606;
                    }
                  } else {
                    closure_48 = tmp531;
                    tmp541 = tmp606;
                  }
                } else {
                  closure_48 = tmp531;
                  tmp541 = tmp582;
                }
              } else {
                closure_48 = tmp531;
                tmp541 = tmp582;
              }
            } else {
              closure_48 = tmp531;
              tmp541 = tmp552;
            }
          } else {
            closure_48 = tmp531;
            tmp541 = tmp552;
          }
        } else {
          closure_48 = tmp531;
          tmp541 = tmp430;
        }
        tmp13 = tmp541;
      }
      return tmp13;
    }
    function peg$parsenumber() {
      let charAtResult;
      if (re42.test(closure_0.charAt(closure_48))) {
        charAtResult = closure_0.charAt(closure_48);
        closure_48 = closure_48 + 1;
      } else {
        charAtResult = obj2;
        if (0 === diff) {
          charAtResult = tmp2;
          if (closure_48 >= closure_50) {
            if (closure_48 > closure_50) {
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
        let joined1;
        let obj4;
        diff = diff + 1;
        let tmp15 = peg$parsedigitSequence();
        if (tmp15 === obj2) {
          tmp15 = null;
        }
        if (tmp15 !== obj2) {
          let tmp19;
          if (46 === closure_0.charCodeAt(closure_48)) {
            tmp19 = c36;
            closure_48 = closure_48 + 1;
          } else {
            tmp19 = tmp11;
            if (0 === diff) {
              tmp19 = tmp11;
              if (closure_48 >= closure_50) {
                if (closure_48 > closure_50) {
                  closure_50 = tmp21;
                  closure_51 = [];
                }
                closure_51.push(tmp20);
                tmp19 = tmp11;
              }
            }
          }
          if (tmp19 !== obj2) {
            const tmp14Result = peg$parsedigitSequence();
            if (tmp14Result !== obj2) {
              if (typeof peg$c36 === "function") {
                let joined = null;
                if (tmp15) {
                  joined = tmp15.join("");
                }
                const items = [joined, ".", tmp14Result.join("")];
                joined1 = items.join("");
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
        if (joined1 === obj2) {
          let tmp27;
          const tmp14Result3 = peg$parsedigitSequence();
          if (tmp14Result3 !== obj2) {
            let tmp30;
            let joined2;
            if (46 === closure_0.charCodeAt(closure_48)) {
              tmp30 = c36;
              closure_48 = closure_48 + 1;
            } else {
              tmp30 = tmp11;
              if (0 === diff) {
                tmp30 = tmp11;
                if (closure_48 >= closure_50) {
                  if (closure_48 > closure_50) {
                    closure_50 = tmp32;
                    closure_51 = [];
                  }
                  closure_51.push(tmp31);
                  tmp30 = tmp11;
                }
              }
            }
            if (tmp30 !== obj2) {
              if (typeof peg$c32 === "function") {
                joined2 = tmp14Result3.join("");
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              closure_48 = tmp71;
              joined2 = tmp11;
            }
            tmp27 = joined2;
          } else {
            closure_48 = tmp71;
            tmp27 = tmp11;
          }
          joined1 = tmp27;
        }
        diff = diff - 1;
        if (joined1 === obj2) {
          if (0 === diff) {
            if (closure_48 >= closure_50) {
              if (closure_48 > closure_50) {
                closure_50 = tmp41;
                closure_51 = [];
              }
              closure_51.push(tmp40);
            }
          }
        }
        if (joined1 !== obj2) {
          let tmp45 = peg$parseexponent();
          if (tmp45 === obj2) {
            tmp45 = null;
          }
          if (tmp45 !== obj2) {
            items1 = [joined1, tmp45];
            obj4 = items1;
          } else {
            closure_48 = tmp12;
            obj4 = tmp11;
          }
        } else {
          closure_48 = tmp12;
          obj4 = tmp11;
        }
        let joined3 = obj4;
        if (obj4 !== obj2) {
          if (typeof peg$c31 === "function") {
            joined3 = obj4.join("");
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        if (joined3 === obj2) {
          const tmp14Result4 = peg$parsedigitSequence();
          const tmp48 = closure_48;
          if (tmp14Result4 !== obj2) {
            let obj5;
            const tmp51 = peg$parseexponent();
            if (tmp51 !== obj2) {
              const items2 = [tmp14Result4, tmp51];
              obj5 = items2;
            }
            let joined4 = obj5;
            if (obj5 !== obj2) {
              if (typeof peg$c32 === "function") {
                joined4 = obj5.join("");
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            joined3 = joined4;
          }
          closure_48 = tmp48;
          obj5 = tmp11;
        }
        if (joined3 !== obj2) {
          const items3 = [charAtResult, joined3];
          obj2 = items3;
        } else {
          closure_48 = tmp;
          obj2 = tmp11;
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
        let charAtResult1;
        let obj6;
        if (re42.test(closure_0.charAt(closure_48))) {
          charAtResult1 = closure_0.charAt(closure_48);
          closure_48 = closure_48 + 1;
        } else {
          charAtResult1 = tmp11;
          if (0 === diff) {
            charAtResult1 = tmp11;
            if (closure_48 >= closure_50) {
              if (closure_48 > closure_50) {
                closure_50 = tmp60;
                closure_51 = [];
              }
              closure_51.push(tmp59);
              charAtResult1 = tmp11;
            }
          }
        }
        if (charAtResult1 === obj2) {
          charAtResult1 = null;
        }
        if (charAtResult1 !== obj2) {
          const obj7 = peg$parsedigitSequence();
          let joined5 = obj7;
          if (obj7 !== obj2) {
            if (typeof peg$c30 === "function") {
              joined5 = obj7.join("");
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          if (joined5 !== obj2) {
            const items4 = [charAtResult1, joined5];
            obj6 = items4;
          } else {
            closure_48 = tmp72;
            obj6 = tmp11;
          }
        } else {
          closure_48 = tmp72;
          obj6 = tmp11;
        }
        let parsed1 = obj6;
        if (obj6 !== obj2) {
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
      let charAtResult;
      let charAtResult1;
      let charAtResult2;
      let charAtResult3;
      let tmp31;
      let tmp32;
      let tmp33;
      let tmp34;
      if (re46.test(closure_0.charAt(closure_48))) {
        charAtResult = closure_0.charAt(closure_48);
        closure_48 = closure_48 + 1;
      } else {
        charAtResult = obj2;
        if (0 === diff) {
          charAtResult = tmp3;
          if (closure_48 >= closure_50) {
            if (closure_48 > closure_50) {
              closure_50 = tmp7;
              closure_51 = [];
            }
            closure_51.push(tmp6);
            charAtResult = tmp3;
          }
        }
      }
      let obj = closure_0;
      let tmp14 = obj2;
      let tmp15 = obj2;
      let tmp16 = peg$parsewsp;
      let tmp17 = obj2;
      if (charAtResult !== obj2) {
        const items = [];
        obj = closure_0;
        tmp14 = tmp12;
        tmp15 = items;
        tmp16 = peg$parsewsp;
        tmp17 = tmp12;
        if (charAtResult !== obj2) {
          do {
            let arr2 = items.push(charAtResult);
            if (re46.test(closure_0.charAt(closure_48))) {
              charAtResult1 = closure_0.charAt(closure_48);
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
            obj = closure_0;
            tmp15 = items;
            tmp16 = peg$parsewsp;
            tmp17 = obj2;
          } while (charAtResult1 !== obj2);
        }
      }
      if (tmp15 !== tmp17) {
        let tmp37;
        if (44 === obj.charCodeAt(closure_48)) {
          tmp37 = c30;
          closure_48 = closure_48 + 1;
        } else {
          tmp37 = tmp14;
          if (0 === diff) {
            tmp37 = tmp14;
            if (closure_48 >= closure_50) {
              if (closure_48 > closure_50) {
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
              if (re46.test(closure_0.charAt(closure_48))) {
                charAtResult2 = closure_0.charAt(closure_48);
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
              tmp44 = closure_0;
              tmp45 = peg$parsewsp;
              tmp46 = obj2;
            } while (charAtResult2 !== obj2);
          }
          if (items1 !== tmp46) {
            const items2 = [tmp15, tmp37, items1];
            obj2 = tmp44;
            tmp31 = tmp14;
            tmp32 = items2;
            tmp33 = tmp45;
            tmp34 = tmp46;
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
        let tmp61;
        if (44 === obj2.charCodeAt(closure_48)) {
          tmp61 = c30;
          closure_48 = closure_48 + 1;
        } else {
          tmp61 = tmp31;
          if (0 === diff) {
            tmp61 = tmp31;
            if (closure_48 >= closure_50) {
              if (closure_48 > closure_50) {
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
              if (re46.test(closure_0.charAt(closure_48))) {
                charAtResult3 = closure_0.charAt(closure_48);
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
      let charAtResult;
      let obj;
      let tmp12;
      if (re39.test(closure_0.charAt(closure_48))) {
        charAtResult = closure_0.charAt(closure_48);
        closure_48 = closure_48 + 1;
      } else {
        charAtResult = obj2;
        if (0 === diff) {
          charAtResult = obj2;
          if (closure_48 >= closure_50) {
            if (closure_48 > closure_50) {
              closure_50 = tmp6;
              closure_51 = [];
            }
            closure_51.push(tmp5);
            charAtResult = obj2;
          }
        }
      }
      if (charAtResult !== obj2) {
        let charAtResult1;
        if (re42.test(closure_0.charAt(closure_48))) {
          charAtResult1 = closure_0.charAt(closure_48);
          closure_48 = closure_48 + 1;
        } else {
          charAtResult1 = obj2;
          if (0 === diff) {
            charAtResult1 = obj2;
            if (closure_48 >= closure_50) {
              if (closure_48 > closure_50) {
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
            tmp12 = items;
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
          items1 = [, ,];
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
      let charAtResult;
      let charAtResult1;
      if (re44.test(closure_0.charAt(closure_48))) {
        charAtResult = closure_0.charAt(closure_48);
        closure_48 = closure_48 + 1;
      } else {
        charAtResult = obj2;
        if (0 === diff) {
          charAtResult = obj2;
          if (closure_48 >= closure_50) {
            if (closure_48 > closure_50) {
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
        if (charAtResult !== obj2) {
          do {
            let arr4 = items.push(charAtResult);
            if (re44.test(closure_0.charAt(closure_48))) {
              charAtResult1 = closure_0.charAt(closure_48);
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
      let charAtResult;
      if (re46.test(closure_0.charAt(closure_48))) {
        charAtResult = closure_0.charAt(closure_48);
        closure_48 = closure_48 + 1;
      } else {
        charAtResult = obj2;
        if (0 === diff) {
          charAtResult = obj2;
          if (closure_48 >= closure_50) {
            if (closure_48 > closure_50) {
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
      let charAtResult;
      let charAtResult1;
      let charAtResult2;
      let tmp26;
      let tmp2 = peg$parsewsp;
      if (re46.test(closure_0.charAt(closure_48))) {
        charAtResult = closure_0.charAt(closure_48);
        closure_48 = closure_48 + 1;
      } else {
        charAtResult = obj2;
        if (0 === diff) {
          charAtResult = obj2;
          if (closure_48 >= closure_50) {
            if (closure_48 > closure_50) {
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
          if (re46.test(closure_0.charAt(closure_48))) {
            charAtResult1 = closure_0.charAt(closure_48);
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
              if (re46.test(closure_0.charAt(closure_48))) {
                charAtResult2 = closure_0.charAt(closure_48);
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
            tmp26 = tmp28;
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
    let obj2 = {};
    let obj3 = { transformList: peg$parsetransformList };
    function peg$c0(arg0) {}
    function peg$c1(arg0, arg1) {}
    const matrix = "matrix";
    let closure_5 = { type: "literal", text: "matrix", ignoreCase: false };
    let c6 = "(";
    let closure_7 = { type: "literal", text: "(", ignoreCase: false };
    let c8 = ")";
    let closure_9 = { type: "literal", text: ")", ignoreCase: false };
    function peg$c8(arg0, arg1, arg2, arg3, arg4, arg5) {}
    const translate = "translate";
    closure_12 = { type: "literal", text: "translate", ignoreCase: false };
    function peg$c11(arg0, arg1) {}
    const scale = "scale";
    let closure_15 = { type: "literal", text: "scale", ignoreCase: false };
    function peg$c14(arg0, arg1) {}
    const rotate = "rotate";
    let closure_18 = { type: "literal", text: "rotate", ignoreCase: false };
    function peg$c17(arg0, arg1) {}
    const skewX = "skewX";
    let closure_21 = { type: "literal", text: "skewX", ignoreCase: false };
    function peg$c20(arg0) {}
    const skewY = "skewY";
    let closure_24 = { type: "literal", text: "skewY", ignoreCase: false };
    function peg$c23(arg0) {}
    function peg$c24(arg0) {}
    function peg$c25(arg0) {}
    function peg$c26(arg0) {}
    function peg$c27(arg0, arg1) {}
    let c30 = ",";
    let closure_31 = { type: "literal", text: ",", ignoreCase: false };
    function peg$c30(arg0) {}
    function peg$c31(arg0) {}
    function peg$c32(arg0) {}
    let closure_35 = { type: "other", description: "fractionalConstant" };
    let c36 = ".";
    let closure_37 = { type: "literal", text: ".", ignoreCase: false };
    function peg$c36(arg0, arg1) {}
    const re39 = /^[eE]/;
    let closure_40 = { type: "class", parts: ["e", "E"], inverted: false, ignoreCase: false };
    function peg$c39(arg0) {}
    const re42 = /^[+\-]/;
    let closure_43 = { type: "class", parts: ["+", "-"], inverted: false, ignoreCase: false };
    const re44 = /^[0-9]/;
    let items = [["0", "9"]];
    let closure_45 = { type: "class", parts: items, inverted: false, ignoreCase: false };
    const re46 = /^[ \t\r\n]/;
    let closure_47 = { type: "class", parts: [" ", "\t", "\r", "\n"], inverted: false, ignoreCase: false };
    let closure_48 = 0;
    let items1 = [{ line: 1, column: 1 }];
    let closure_50 = 0;
    let closure_51 = [];
    let diff = 0;
    if ("startRule" in obj) {
      if (obj.startRule in obj3) {
        peg$parsetransformList = obj3[obj.startRule];
      } else {
        let tmp = globalThis;
        const _Error = Error;
        str = "Can't start parsing from rule \"";
        const self = this;
        let str2 = '".';
        const self2 = this;
        const error = new Error("Can't start parsing from rule \"" + obj.startRule + '".');
        let tmp3 = error;
        throw error;
      }
    }
    let closure_60 = Math.PI / 180;
    const result = peg$parsetransformList();
    let tmp5 = result !== obj2;
    if (tmp5) {
      const tmp6 = closure_48;
      if (closure_48 === str.length) {
        return result;
      }
    }
    if (tmp5) {
      let tmp7 = closure_48;
      tmp5 = closure_48 < str.length;
    }
    if (tmp5) {
      let tmp8 = closure_48;
      if (closure_48 >= closure_50) {
        if (tmp8 > closure_50) {
          closure_50 = tmp8;
          closure_51 = [];
        }
        let tmp9 = closure_51;
        let arr = closure_51.push({ type: "end" });
      }
    }
    let tmp11 = closure_51;
    let charAtResult = null;
    if (closure_50 < str.length) {
      let tmp13 = closure_50;
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
            if (10 === closure_0.charCodeAt(sum)) {
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
            if (10 === closure_0.charCodeAt(sum1)) {
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
      return {
        start: { offset, line: tmp2.line, column: tmp2.column },
        end: { offset: offset2, line: tmp13.line, column: tmp13.column },
      };
    }
    if (closure_50 < str.length) {
      let tmp16 = closure_50;
      result1 = peg$computeLocation(closure_50, closure_50 + 1);
    } else {
      let tmp14 = closure_50;
      result1 = peg$computeLocation(closure_50, closure_50);
    }
    const message = peg$SyntaxError.buildMessage(tmp11, charAtResult);
    let obj4 = Object.create(peg$SyntaxError.prototype);
    let obj8 = { message, expected: tmp11, found: charAtResult, location: result1, name: "SyntaxError" };
    if (typeof Error.captureStackTrace === "function") {
      const _Error2 = Error;
      Error.captureStackTrace(obj8, peg$SyntaxError);
    }
    throw obj8;
  },
};

export default obj;
