// _runtime/17052_SyntaxError.js
class SyntaxError {
  constructor(arg0, arg1, arg2, arg3, arg4, arg5) {
    return;
  }
}
class ctor {
  constructor() {
    this.constructor = SyntaxError;
    return;
  }
}
ctor.prototype = Error.prototype;
let obj = Object.create(ctor.prototype);
obj.constructor = SyntaxError;
SyntaxError.prototype = obj;
obj = {
  SyntaxError,
  parse(str) {
    let length;
    let sum;
    closure_0 = str;
    function peg$parsemessageFormatElement() {
      let num = 0;
      let throwTypeErrorResult = c70;
      const tmp2 = peg$parse_();
      let tmp4 = obj;
      if (tmp2 !== obj) {
        throwTypeErrorResult = peg$parsechar;
        let tmp9 = peg$parsechar();
        throwTypeErrorResult = tmp9 !== tmp3;
        if (throwTypeErrorResult) {
          const items = [];
          let tmp5 = tmp3;
          obj = items;
          let tmp6 = tmp3;
          if (throwTypeErrorResult) {
            do {
              let arr = items.push(tmp9);
              let tmp8 = peg$parsechar;
              tmp9 = peg$parsechar();
              tmp5 = obj;
              obj = items;
              tmp6 = obj;
            } while (tmp9 !== obj);
          }
        } else {
          tmp5 = tmp3;
          tmp6 = tmp3;
        }
        let joined = obj;
        if (obj !== tmp6) {
          if (typeof peg$c68 !== "function") {
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          joined = obj.join("");
        }
        tmp4 = tmp5;
        if (joined !== tmp5) {
          const tmp13 = peg$parse_();
          tmp4 = tmp5;
          if (tmp13 !== tmp5) {
            const items1 = [tmp2, joined, tmp13];
            tmp4 = tmp5;
            let tmp14 = items1;
          }
          if (tmp14 !== tmp4) {
            const items2 = [];
            let tmp16 = tmp4;
            let arr2 = items2;
            if (tmp15) {
              while (true) {
                arr = items2.push(tmp14);
                let tmp19 = peg$parse_;
                let tmp18 = c70;
                let tmp20 = peg$parse_();
                let tmp21 = obj;
                let tmp22 = obj;
                if (tmp20 !== obj) {
                  throwTypeErrorResult = peg$parsechar;
                  let tmp27 = peg$parsechar();
                  throwTypeErrorResult = tmp27 !== tmp21;
                  if (throwTypeErrorResult) {
                    let items3 = [];
                    let tmp23 = tmp21;
                    obj1 = items3;
                    let tmp24 = tmp21;
                    if (throwTypeErrorResult) {
                      do {
                        let arr1 = items3.push(tmp27);
                        let tmp26 = peg$parsechar;
                        tmp27 = peg$parsechar();
                        tmp23 = obj;
                        obj1 = items3;
                        tmp24 = obj;
                      } while (tmp27 !== obj);
                    }
                  } else {
                    obj1 = obj;
                    tmp23 = tmp21;
                    tmp24 = tmp21;
                  }
                  let joined1 = obj1;
                  if (obj1 !== tmp24) {
                    let tmp29 = peg$c68;
                    if (typeof peg$c68 !== "function") {
                      let str13 = "Trying to call a non-function";
                      throwTypeErrorResult = HermesBuiltin.throwTypeError();
                    }
                    joined1 = obj1.join("");
                  }
                  tmp22 = tmp23;
                  if (joined1 !== tmp23) {
                    let tmp30 = peg$parse_;
                    let tmp31 = peg$parse_();
                    tmp22 = tmp23;
                    if (tmp31 !== tmp23) {
                      let items4 = [tmp20, joined1, tmp31];
                      tmp22 = tmp23;
                      let tmp32 = items4;
                      tmp16 = tmp22;
                      tmp14 = tmp32;
                      arr2 = items2;
                      if (tmp32 === tmp22) {
                        break;
                      }
                    }
                  }
                }
                c70 = tmp18;
                tmp32 = obj;
              }
            }
          } else {
            arr2 = obj;
            tmp16 = tmp4;
          }
          let tmp33 = arr2;
          if (arr2 !== tmp16) {
            if (typeof peg$c3 !== "function") {
              throwTypeErrorResult = HermesBuiltin.throwTypeError();
            }
            let str3 = "";
            let num3 = 0;
            let str4 = "";
            if (num < arr2.length) {
              do {
                let arr6 = arr2[num3];
                let length2 = arr6.length;
                let sum = str3;
                let tmp36 = num3;
                let num4 = 0;
                let tmp37 = str3;
                if (num < length2) {
                  do {
                    sum = sum + arr6[num4];
                    num4 = num4 + 1;
                    tmp37 = sum;
                  } while (num4 < length2);
                }
                num3 = num3 + 1;
                str3 = tmp37;
                str4 = tmp37;
              } while (num3 < length);
            }
            tmp33 = str4;
          }
          let tmp80Result = obj;
          if (tmp33 === obj) {
            let substr = peg$parsews();
            if (substr !== tmp80Result) {
              substr = str.substring(tmp39, c70);
            }
            tmp33 = substr;
            tmp39 = c70;
          }
          let tmp44 = tmp33;
          if (tmp33 !== tmp80Result) {
            if (typeof peg$c4 !== "function") {
              throwTypeErrorResult = HermesBuiltin.throwTypeError();
            }
            obj = { type: "messageTextElement", value: null };
            obj[1] = tmp33;
            tmp44 = obj;
          }
          if (tmp44 !== tmp80Result) {
            return tmp44;
          } else {
            throwTypeErrorResult = c70;
            let str8 = str;
            throwTypeErrorResult = c70;
            if (123 === str.charCodeAt(c70)) {
              let tmp47 = c8;
              c70 = c70 + 1;
            } else {
              tmp47 = tmp80Result;
              if (num === c73) {
                tmp47 = tmp80Result;
                if (c70 >= throwTypeErrorResult) {
                  if (tmp49 > throwTypeErrorResult) {
                    throwTypeErrorResult = tmp49;
                    arr = [];
                  }
                  arr2 = arr.push(tmp48);
                  tmp47 = tmp80Result;
                }
              }
            }
            if (tmp47 === tmp80Result) {
              c70 = throwTypeErrorResult;
              let tmp54 = obj;
              throwTypeErrorResult = tmp54;
            }
            let tmp56 = peg$parsenumber();
            let str5 = str8;
            let tmp57 = tmp80Result;
            if (tmp56 === tmp80Result) {
              throwTypeErrorResult = regex;
              throwTypeErrorResult = c70;
              throwTypeErrorResult = c70;
              if (regex.test(str8.charAt(c70))) {
                let charAtResult = str8.charAt(c70);
                c70 = c70 + 1;
              } else {
                charAtResult = tmp80Result;
                if (num === c73) {
                  charAtResult = tmp80Result;
                  if (c70 >= throwTypeErrorResult) {
                    if (tmp61 > throwTypeErrorResult) {
                      throwTypeErrorResult = tmp61;
                      arr = [];
                    }
                    arr.push(tmp60);
                    charAtResult = tmp80Result;
                  }
                }
              }
              if (charAtResult !== tmp80Result) {
                const items5 = [];
                let str6 = str8;
                let tmp68 = tmp80Result;
                let substr1 = items5;
                if (tmp66) {
                  do {
                    let arr4 = items5.push(charAtResult);
                    let tmp70 = regex;
                    let str7 = str;
                    let tmp71 = c70;
                    if (regex.test(str.charAt(c70))) {
                      let tmp77 = c70;
                      str8 = str7.charAt(c70);
                      let tmp78 = c70;
                      c70 = c70 + 1;
                    } else {
                      tmp80Result = obj;
                      let tmp72 = c73;
                      str8 = obj;
                      if (num === c73) {
                        let tmp74 = c70;
                        str8 = tmp80Result;
                        if (c70 >= throwTypeErrorResult) {
                          if (tmp74 > throwTypeErrorResult) {
                            throwTypeErrorResult = tmp74;
                            arr = [];
                          }
                          let tmp75 = arr;
                          let arr5 = arr.push(tmp73);
                          str8 = tmp80Result;
                        }
                      }
                    }
                    tmp68 = obj;
                    charAtResult = str8;
                    str6 = str7;
                    substr1 = items5;
                  } while (str8 !== obj);
                }
              } else {
                substr1 = obj;
                str6 = str8;
                tmp68 = tmp80Result;
              }
              if (substr1 !== tmp68) {
                substr1 = str6.substring(throwTypeErrorResult, c70);
              }
              tmp56 = substr1;
              str5 = str6;
              tmp57 = tmp68;
            }
            if (tmp56 !== tmp57) {
              if (peg$parse_() !== tmp57) {
                let num5 = 44;
                if (44 === str5.charCodeAt(c70)) {
                  str8 = c11;
                  c70 = c70 + 1;
                } else {
                  str8 = tmp57;
                  if (num === c73) {
                    str8 = tmp57;
                    if (c70 >= throwTypeErrorResult) {
                      if (tmp85 > throwTypeErrorResult) {
                        throwTypeErrorResult = tmp85;
                        arr = [];
                      }
                      arr6 = arr.push(tmp84);
                      str8 = tmp57;
                    }
                  }
                }
                if (str8 !== tmp57) {
                  tmp80Result = tmp80();
                  if (tmp80Result !== tmp57) {
                    if (str5.substr(c70, 6) === number) {
                      throwTypeErrorResult = c70;
                      c70 = c70 + 6;
                      let tmp95 = tmp93;
                    } else {
                      tmp95 = tmp57;
                      if (num === c73) {
                        tmp95 = tmp57;
                        if (c70 >= throwTypeErrorResult) {
                          if (tmp97 > throwTypeErrorResult) {
                            throwTypeErrorResult = tmp97;
                            arr = [];
                          }
                          arr.push(tmp96);
                          tmp95 = tmp57;
                        }
                      }
                    }
                    if (tmp95 === tmp57) {
                      throwTypeErrorResult = c70;
                      let num7 = 4;
                      if (str5.substr(c70, 4) === date) {
                        throwTypeErrorResult = c70;
                        c70 = c70 + num7;
                      } else {
                        throwTypeErrorResult = c73;
                        throwTypeErrorResult = tmp57;
                        if (num === c73) {
                          throwTypeErrorResult = c70;
                          throwTypeErrorResult = tmp57;
                          if (c70 >= throwTypeErrorResult) {
                            if (throwTypeErrorResult > throwTypeErrorResult) {
                              arr = [];
                            }
                            throwTypeErrorResult = arr;
                            throwTypeErrorResult = arr.push(throwTypeErrorResult);
                            throwTypeErrorResult = tmp57;
                          }
                        }
                      }
                      if (throwTypeErrorResult !== tmp57) {
                        tmp95 = throwTypeErrorResult;
                      } else {
                        throwTypeErrorResult = c70;
                        if (str5.substr(c70, num7) === time) {
                          throwTypeErrorResult = c70;
                          num7 = c70 + num7;
                          c70 = num7;
                        } else {
                          throwTypeErrorResult = c73;
                          throwTypeErrorResult = tmp57;
                          if (num === c73) {
                            throwTypeErrorResult = c70;
                            throwTypeErrorResult = tmp57;
                            if (c70 >= throwTypeErrorResult) {
                              if (throwTypeErrorResult > throwTypeErrorResult) {
                                arr = [];
                              }
                              throwTypeErrorResult = arr;
                              throwTypeErrorResult = arr.push(throwTypeErrorResult);
                              throwTypeErrorResult = tmp57;
                            }
                          }
                        }
                      }
                    }
                    if (tmp95 !== tmp57) {
                      if (tmp80() !== tmp57) {
                        throwTypeErrorResult = c70;
                        throwTypeErrorResult = c70;
                        if (num5 === str5.charCodeAt(c70)) {
                          throwTypeErrorResult = c11;
                          throwTypeErrorResult = c70;
                          c70 = c70 + 1;
                        } else {
                          throwTypeErrorResult = c73;
                          throwTypeErrorResult = tmp57;
                          if (num === c73) {
                            throwTypeErrorResult = c70;
                            throwTypeErrorResult = tmp57;
                            if (c70 >= throwTypeErrorResult) {
                              if (throwTypeErrorResult > throwTypeErrorResult) {
                                arr = [];
                              }
                              throwTypeErrorResult = arr;
                              throwTypeErrorResult = arr.push(throwTypeErrorResult);
                              throwTypeErrorResult = tmp57;
                            }
                          }
                        }
                        throwTypeErrorResult = tmp57;
                        if (throwTypeErrorResult !== tmp57) {
                          throwTypeErrorResult = tmp80();
                          throwTypeErrorResult = tmp57;
                          if (throwTypeErrorResult !== tmp57) {
                            throwTypeErrorResult = peg$parsechar;
                            throwTypeErrorResult = peg$parsechar();
                            throwTypeErrorResult = throwTypeErrorResult !== tmp57;
                            if (throwTypeErrorResult) {
                              const items6 = [];
                              throwTypeErrorResult = tmp57;
                              let obj3 = items6;
                              throwTypeErrorResult = tmp57;
                              if (throwTypeErrorResult) {
                                do {
                                  throwTypeErrorResult = items6.push(throwTypeErrorResult);
                                  throwTypeErrorResult = peg$parsechar;
                                  throwTypeErrorResult = peg$parsechar();
                                  throwTypeErrorResult = obj;
                                  obj3 = items6;
                                  throwTypeErrorResult = obj;
                                } while (throwTypeErrorResult !== obj);
                              }
                            } else {
                              obj3 = obj;
                              throwTypeErrorResult = tmp57;
                              throwTypeErrorResult = tmp57;
                            }
                            throwTypeErrorResult = obj3;
                            if (obj3 !== throwTypeErrorResult) {
                              throwTypeErrorResult = peg$c68;
                              if (typeof peg$c68 !== "function") {
                                throwTypeErrorResult = HermesBuiltin.throwTypeError();
                              }
                              throwTypeErrorResult = obj3.join("");
                            }
                            if (throwTypeErrorResult !== throwTypeErrorResult) {
                              const items7 = [throwTypeErrorResult, throwTypeErrorResult, throwTypeErrorResult];
                              throwTypeErrorResult = items7;
                              if (throwTypeErrorResult === throwTypeErrorResult) {
                                throwTypeErrorResult = c10;
                              }
                              if (throwTypeErrorResult !== throwTypeErrorResult) {
                                throwTypeErrorResult = peg$c21;
                                if (typeof peg$c21 !== "function") {
                                  throwTypeErrorResult = HermesBuiltin.throwTypeError();
                                }
                                obj = { type: null, style: null };
                                obj[0] = `${tmp95}Format`;
                                if (throwTypeErrorResult) {
                                  throwTypeErrorResult = throwTypeErrorResult[2];
                                }
                                obj[1] = throwTypeErrorResult;
                                throwTypeErrorResult = obj;
                              } else {
                                c70 = tmp91;
                                throwTypeErrorResult = obj;
                              }
                              if (throwTypeErrorResult === throwTypeErrorResult) {
                                throwTypeErrorResult = c70;
                                let str11 = str;
                                throwTypeErrorResult = c70;
                                if (str.substr(c70, 6) === plural) {
                                  throwTypeErrorResult = c70;
                                  c70 = c70 + 6;
                                } else {
                                  throwTypeErrorResult = c73;
                                  if (num === c73) {
                                    throwTypeErrorResult = c70;
                                    if (c70 >= throwTypeErrorResult) {
                                      if (throwTypeErrorResult > throwTypeErrorResult) {
                                        arr = [];
                                      }
                                      throwTypeErrorResult = arr;
                                      throwTypeErrorResult = arr.push(throwTypeErrorResult);
                                    }
                                  }
                                }
                                if (throwTypeErrorResult !== throwTypeErrorResult) {
                                  throwTypeErrorResult = peg$parse_;
                                  if (peg$parse_() !== throwTypeErrorResult) {
                                    throwTypeErrorResult = c70;
                                    if (num5 === str11.charCodeAt(c70)) {
                                      throwTypeErrorResult = c11;
                                      throwTypeErrorResult = c70;
                                      c70 = c70 + 1;
                                    } else {
                                      throwTypeErrorResult = c73;
                                      if (num === c73) {
                                        throwTypeErrorResult = c70;
                                        if (c70 >= throwTypeErrorResult) {
                                          if (throwTypeErrorResult > throwTypeErrorResult) {
                                            arr = [];
                                          }
                                          throwTypeErrorResult = arr;
                                          throwTypeErrorResult = arr.push(throwTypeErrorResult);
                                        }
                                      }
                                    }
                                    if (throwTypeErrorResult !== throwTypeErrorResult) {
                                      if (throwTypeErrorResult() !== throwTypeErrorResult) {
                                        throwTypeErrorResult = peg$parsepluralStyle;
                                        throwTypeErrorResult = peg$parsepluralStyle();
                                        if (throwTypeErrorResult !== throwTypeErrorResult) {
                                          throwTypeErrorResult = peg$c24;
                                          if (typeof peg$c24 !== "function") {
                                            throwTypeErrorResult = HermesBuiltin.throwTypeError();
                                          }
                                          obj1 = { type: null, ordinal: false, offset: null, options: null };
                                          obj1[0] = throwTypeErrorResult.type;
                                          obj1[2] = throwTypeErrorResult.offset || 0;
                                          obj1[3] = throwTypeErrorResult.options;
                                          throwTypeErrorResult = obj1;
                                          if (throwTypeErrorResult === throwTypeErrorResult) {
                                            throwTypeErrorResult = c70;
                                            throwTypeErrorResult = c70;
                                            if (str11.substr(c70, 13) === selectordinal) {
                                              throwTypeErrorResult = c70;
                                              c70 = c70 + 13;
                                            } else {
                                              throwTypeErrorResult = c73;
                                              if (num === c73) {
                                                throwTypeErrorResult = c70;
                                                if (c70 >= throwTypeErrorResult) {
                                                  if (throwTypeErrorResult > throwTypeErrorResult) {
                                                    arr = [];
                                                  }
                                                  throwTypeErrorResult = arr;
                                                  throwTypeErrorResult = arr.push(throwTypeErrorResult);
                                                }
                                              }
                                            }
                                            if (throwTypeErrorResult !== throwTypeErrorResult) {
                                              throwTypeErrorResult = peg$parse_;
                                              if (peg$parse_() !== throwTypeErrorResult) {
                                                throwTypeErrorResult = c70;
                                                if (num5 === str11.charCodeAt(c70)) {
                                                  throwTypeErrorResult = c11;
                                                  throwTypeErrorResult = c70;
                                                  c70 = c70 + 1;
                                                } else {
                                                  throwTypeErrorResult = c73;
                                                  if (num === c73) {
                                                    throwTypeErrorResult = c70;
                                                    if (c70 >= throwTypeErrorResult) {
                                                      if (throwTypeErrorResult > throwTypeErrorResult) {
                                                        arr = [];
                                                      }
                                                      throwTypeErrorResult = arr;
                                                      throwTypeErrorResult = arr.push(throwTypeErrorResult);
                                                    }
                                                  }
                                                }
                                                if (throwTypeErrorResult !== throwTypeErrorResult) {
                                                  if (throwTypeErrorResult() !== throwTypeErrorResult) {
                                                    throwTypeErrorResult = peg$parsepluralStyle;
                                                    throwTypeErrorResult = peg$parsepluralStyle();
                                                    if (throwTypeErrorResult !== throwTypeErrorResult) {
                                                      throwTypeErrorResult = peg$c27;
                                                      if (typeof peg$c27 !== "function") {
                                                        throwTypeErrorResult = HermesBuiltin.throwTypeError();
                                                      }
                                                      const obj2 = {
                                                        type: null,
                                                        ordinal: true,
                                                        offset: null,
                                                        options: null,
                                                      };
                                                      obj2[0] = throwTypeErrorResult.type;
                                                      obj2[2] = throwTypeErrorResult.offset || 0;
                                                      obj2[3] = throwTypeErrorResult.options;
                                                      throwTypeErrorResult = obj2;
                                                      if (throwTypeErrorResult === throwTypeErrorResult) {
                                                        throwTypeErrorResult = c70;
                                                        throwTypeErrorResult = c70;
                                                        if (str11.substr(c70, 6) === select) {
                                                          throwTypeErrorResult = c70;
                                                          c70 = c70 + 6;
                                                        } else {
                                                          throwTypeErrorResult = c73;
                                                          if (num === c73) {
                                                            throwTypeErrorResult = c70;
                                                            if (c70 >= throwTypeErrorResult) {
                                                              if (throwTypeErrorResult > throwTypeErrorResult) {
                                                                arr = [];
                                                              }
                                                              throwTypeErrorResult = arr;
                                                              throwTypeErrorResult = arr.push(throwTypeErrorResult);
                                                            }
                                                          }
                                                        }
                                                        if (throwTypeErrorResult !== throwTypeErrorResult) {
                                                          throwTypeErrorResult = peg$parse_;
                                                          if (peg$parse_() !== throwTypeErrorResult) {
                                                            throwTypeErrorResult = c70;
                                                            if (num5 === str11.charCodeAt(c70)) {
                                                              throwTypeErrorResult = c11;
                                                              throwTypeErrorResult = c70;
                                                              num5 = c70 + 1;
                                                              c70 = num5;
                                                            } else {
                                                              throwTypeErrorResult = c73;
                                                              if (num === c73) {
                                                                throwTypeErrorResult = c70;
                                                                if (c70 >= throwTypeErrorResult) {
                                                                  if (throwTypeErrorResult > throwTypeErrorResult) {
                                                                    arr = [];
                                                                  }
                                                                  throwTypeErrorResult = arr;
                                                                  str11 = arr.push(throwTypeErrorResult);
                                                                }
                                                              }
                                                            }
                                                            if (throwTypeErrorResult !== throwTypeErrorResult) {
                                                              if (throwTypeErrorResult() !== throwTypeErrorResult) {
                                                                throwTypeErrorResult = peg$parseoptionalFormatPattern;
                                                                throwTypeErrorResult = peg$parseoptionalFormatPattern();
                                                                throwTypeErrorResult =
                                                                  throwTypeErrorResult !== throwTypeErrorResult;
                                                                if (throwTypeErrorResult) {
                                                                  const items8 = [];
                                                                  str11 = items8;
                                                                  if (throwTypeErrorResult) {
                                                                    do {
                                                                      throwTypeErrorResult =
                                                                        items8.push(throwTypeErrorResult);
                                                                      throwTypeErrorResult =
                                                                        peg$parseoptionalFormatPattern;
                                                                      throwTypeErrorResult =
                                                                        peg$parseoptionalFormatPattern();
                                                                      throwTypeErrorResult = obj;
                                                                      str11 = items8;
                                                                    } while (throwTypeErrorResult !== obj);
                                                                  }
                                                                } else {
                                                                  str11 = obj;
                                                                }
                                                                if (str11 !== throwTypeErrorResult) {
                                                                  throwTypeErrorResult = peg$c30;
                                                                  if (typeof peg$c30 !== "function") {
                                                                    throwTypeErrorResult =
                                                                      HermesBuiltin.throwTypeError();
                                                                  }
                                                                  obj3 = { type: "selectFormat", options: null };
                                                                  obj3[1] = str11;
                                                                  throwTypeErrorResult = obj3;
                                                                } else {
                                                                  c70 = throwTypeErrorResult;
                                                                  throwTypeErrorResult = obj;
                                                                }
                                                              } else {
                                                                c70 = throwTypeErrorResult;
                                                                throwTypeErrorResult = obj;
                                                              }
                                                            } else {
                                                              c70 = throwTypeErrorResult;
                                                              throwTypeErrorResult = obj;
                                                            }
                                                          } else {
                                                            c70 = throwTypeErrorResult;
                                                            throwTypeErrorResult = obj;
                                                          }
                                                        } else {
                                                          c70 = throwTypeErrorResult;
                                                          throwTypeErrorResult = obj;
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                                c70 = throwTypeErrorResult;
                                                throwTypeErrorResult = obj;
                                              }
                                            }
                                            c70 = throwTypeErrorResult;
                                            throwTypeErrorResult = obj;
                                          }
                                        }
                                      }
                                    }
                                    c70 = throwTypeErrorResult;
                                    throwTypeErrorResult = obj;
                                  }
                                }
                                c70 = throwTypeErrorResult;
                                throwTypeErrorResult = obj;
                              }
                              if (throwTypeErrorResult !== throwTypeErrorResult) {
                                const items9 = [str8, tmp80Result, throwTypeErrorResult];
                                let tmp90 = throwTypeErrorResult;
                                let tmp89 = items9;
                              } else {
                                c70 = tmp81;
                                tmp89 = obj;
                                tmp90 = throwTypeErrorResult;
                              }
                              if (tmp89 === tmp90) {
                                tmp89 = c10;
                              }
                              if (tmp89 !== tmp90) {
                                throwTypeErrorResult = peg$parse_;
                                if (peg$parse_() !== tmp90) {
                                  throwTypeErrorResult = str;
                                  throwTypeErrorResult = c70;
                                  if (125 === str.charCodeAt(c70)) {
                                    throwTypeErrorResult = c13;
                                    throwTypeErrorResult = c70;
                                    num = c70 + 1;
                                    c70 = num;
                                  } else {
                                    throwTypeErrorResult = c73;
                                    throwTypeErrorResult = tmp90;
                                    if (num === c73) {
                                      tmp80Result = closure_14;
                                      throwTypeErrorResult = c70;
                                      throwTypeErrorResult = tmp90;
                                      if (c70 >= throwTypeErrorResult) {
                                        if (throwTypeErrorResult > throwTypeErrorResult) {
                                          arr = [];
                                        }
                                        throwTypeErrorResult = arr;
                                        throwTypeErrorResult = arr.push(tmp80Result);
                                        throwTypeErrorResult = tmp90;
                                      }
                                    }
                                  }
                                  if (throwTypeErrorResult !== tmp90) {
                                    throwTypeErrorResult = peg$c14;
                                    if (typeof peg$c14 !== "function") {
                                      throwTypeErrorResult = HermesBuiltin.throwTypeError();
                                    }
                                    const obj4 = { type: "argumentElement", id: null, format: null };
                                    obj4[1] = tmp56;
                                    throwTypeErrorResult = tmp89;
                                    if (tmp89) {
                                      throwTypeErrorResult = tmp89[2];
                                    }
                                    obj4[2] = throwTypeErrorResult;
                                    tmp54 = obj4;
                                  } else {
                                    c70 = throwTypeErrorResult;
                                    tmp54 = obj;
                                  }
                                }
                              }
                              c70 = throwTypeErrorResult;
                              tmp54 = obj;
                            }
                          }
                        }
                        c70 = throwTypeErrorResult;
                        throwTypeErrorResult = obj;
                      }
                    }
                    c70 = tmp91;
                    throwTypeErrorResult = obj;
                    throwTypeErrorResult = tmp57;
                  }
                }
                c70 = tmp81;
                tmp89 = obj;
                tmp90 = tmp57;
              }
            }
            c70 = throwTypeErrorResult;
            tmp54 = obj;
          }
        }
      }
      c70 = throwTypeErrorResult;
      tmp14 = obj;
    }
    function peg$parseoptionalFormatPattern() {
      if (peg$parse_() !== obj) {
        if (61 === str.charCodeAt(closure_70)) {
          let tmp8 = c32;
          closure_70 = closure_70 + 1;
        } else {
          tmp8 = tmp3;
          if (0 === c73) {
            tmp8 = tmp3;
            if (closure_70 >= closure_71) {
              if (tmp10 > closure_71) {
                closure_71 = tmp10;
                let arr = [];
              }
              arr = arr.push(tmp9);
              tmp8 = tmp3;
            }
          }
        }
        if (tmp8 !== tmp3) {
          const tmp15 = peg$parsenumber();
          if (tmp15 !== tmp3) {
            const items = [tmp8, tmp15];
            let substr = items;
          }
          if (substr !== tmp3) {
            substr = str.substring(tmp5, closure_70);
          }
          let tmp18 = tmp3;
          if (substr === tmp3) {
            let tmp23 = peg$parsechar();
            if (tmp23 !== tmp3) {
              const items1 = [];
              let tmp19 = tmp3;
              obj = items1;
              let tmp20 = tmp3;
              if (tmp50) {
                do {
                  arr = items1.push(tmp23);
                  let tmp22 = peg$parsechar;
                  tmp23 = peg$parsechar();
                  tmp19 = obj;
                  obj = items1;
                  tmp20 = obj;
                } while (tmp23 !== obj);
              }
            } else {
              tmp19 = tmp3;
              tmp20 = tmp3;
            }
            let joined = obj;
            if (obj !== tmp20) {
              if (typeof peg$c68 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              joined = obj.join("");
            }
            substr = joined;
            tmp18 = tmp19;
          }
          if (substr !== tmp3) {
            if (tmp2() !== tmp3) {
              if (123 === str.charCodeAt(closure_70)) {
                let tmp28 = c8;
                closure_70 = closure_70 + 1;
              } else {
                tmp28 = tmp3;
                if (0 === c73) {
                  tmp28 = tmp3;
                  if (closure_70 >= closure_71) {
                    if (tmp30 > closure_71) {
                      closure_71 = tmp30;
                      arr = [];
                    }
                    arr.push(tmp29);
                    tmp28 = tmp3;
                  }
                }
              }
              if (tmp28 !== tmp3) {
                if (tmp2() !== tmp3) {
                  const items2 = [];
                  let tmp35 = peg$parsemessageFormatElement();
                  if (tmp35 !== tmp18) {
                    do {
                      let arr2 = items2.push(tmp35);
                      let tmp37 = peg$parsemessageFormatElement;
                      tmp35 = peg$parsemessageFormatElement();
                      tmp18 = obj;
                    } while (tmp35 !== obj);
                  }
                  let tmp38 = items2;
                  if (items2 !== tmp18) {
                    if (typeof peg$c1 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    obj = { type: "messageFormatPattern", elements: null };
                    obj[1] = items2;
                    tmp38 = obj;
                  }
                  if (tmp38 !== tmp3) {
                    if (tmp2() !== tmp3) {
                      if (125 === obj2.charCodeAt(closure_70)) {
                        let tmp42 = c13;
                        closure_70 = closure_70 + 1;
                      } else {
                        tmp42 = tmp3;
                        if (0 === c73) {
                          tmp42 = tmp3;
                          if (closure_70 >= closure_71) {
                            if (tmp44 > closure_71) {
                              closure_71 = tmp44;
                              arr = [];
                            }
                            arr.push(tmp43);
                            tmp42 = tmp3;
                          }
                        }
                      }
                      if (tmp42 !== tmp3) {
                        if (typeof peg$c33 !== "function") {
                          HermesBuiltin.throwTypeError();
                        }
                        obj = { type: "optionalFormatPattern", selector: null, value: null };
                        obj[1] = substr;
                        obj[2] = tmp38;
                        let tmp4 = obj;
                      } else {
                        closure_70 = tmp;
                        tmp4 = obj;
                      }
                    }
                  }
                }
              }
              closure_70 = tmp;
              tmp4 = obj;
              obj2 = str;
            }
          }
          closure_70 = tmp;
          tmp4 = obj;
        }
        closure_70 = tmp5;
        substr = obj;
      } else {
        closure_70 = tmp;
        tmp4 = obj;
      }
      return tmp4;
    }
    function peg$parsepluralStyle() {
      if (str.substr(closure_70, 7) === c35) {
        closure_70 = closure_70 + 7;
        let tmp5 = tmp2;
      } else {
        tmp5 = obj;
        if (0 === c73) {
          tmp5 = tmp3;
          if (closure_70 >= closure_71) {
            if (tmp7 > closure_71) {
              closure_71 = tmp7;
              let arr = [];
            }
            arr = arr.push(tmp6);
            tmp5 = tmp3;
          }
        }
      }
      if (tmp5 !== obj) {
        if (peg$parse_() !== tmp11) {
          const tmp14 = peg$parsenumber();
          if (tmp14 !== tmp11) {
            let tmp15 = tmp14;
            if (typeof peg$c36 !== "function") {
              HermesBuiltin.throwTypeError();
            }
          }
          if (tmp15 === tmp11) {
            tmp15 = c10;
          }
          if (tmp15 !== tmp11) {
            if (peg$parse_() !== tmp11) {
              let tmp20 = peg$parseoptionalFormatPattern();
              if (tmp20 !== tmp11) {
                const items = [];
                let tmp22 = items;
                let tmp23 = tmp11;
                if (tmp21) {
                  do {
                    arr = items.push(tmp20);
                    let tmp25 = peg$parseoptionalFormatPattern;
                    tmp20 = peg$parseoptionalFormatPattern();
                    tmp23 = obj;
                    tmp22 = items;
                  } while (tmp20 !== obj);
                }
              } else {
                tmp22 = obj;
                tmp23 = tmp11;
              }
              if (tmp22 !== tmp23) {
                if (typeof peg$c37 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                obj = { type: "pluralFormat", offset: null, options: null };
                obj[1] = tmp15;
                obj[2] = tmp22;
                let tmp17 = obj;
              } else {
                closure_70 = tmp;
                tmp17 = obj;
              }
            } else {
              closure_70 = tmp;
              tmp17 = obj;
            }
          } else {
            closure_70 = tmp;
            tmp17 = obj;
          }
          return tmp17;
        }
      }
      closure_70 = tmp;
      tmp15 = obj;
    }
    function peg$parsews() {
      let charAtResult1;
      c73 = c73 + 1;
      if (regex2.test(str.charAt(closure_70))) {
        let charAtResult = str.charAt(closure_70);
        closure_70 = closure_70 + 1;
      } else {
        charAtResult = obj;
        if (0 === c73) {
          charAtResult = tmp;
          if (closure_70 >= closure_71) {
            if (tmp5 > closure_71) {
              closure_71 = tmp5;
              let arr = [];
            }
            arr = arr.push(tmp4);
            charAtResult = tmp;
          }
        }
      }
      if (charAtResult !== obj) {
        const items = [];
        let tmp12 = items;
        let tmp13 = tmp10;
        if (tmp11) {
          do {
            arr = items.push(charAtResult);
            let tmp15 = regex2;
            let str2 = str;
            let tmp16 = closure_70;
            if (regex2.test(str.charAt(closure_70))) {
              let tmp24 = closure_70;
              charAtResult1 = str2.charAt(closure_70);
              let tmp25 = closure_70;
              closure_70 = closure_70 + 1;
            } else {
              let tmp17 = obj;
              let tmp18 = c73;
              charAtResult1 = obj;
              if (0 === c73) {
                let tmp21 = closure_70;
                charAtResult1 = tmp17;
                if (closure_70 >= closure_71) {
                  if (tmp21 > closure_71) {
                    closure_71 = tmp21;
                    arr = [];
                  }
                  let tmp22 = arr;
                  let arr1 = arr.push(tmp20);
                  charAtResult1 = tmp17;
                }
              }
            }
            tmp13 = obj;
            charAtResult = charAtResult1;
            tmp12 = items;
          } while (charAtResult1 !== obj);
        }
      } else {
        tmp12 = obj;
        tmp13 = tmp10;
      }
      const diff = c73 - 1;
      c73 = diff;
      if (tmp12 === tmp13) {
        if (0 === diff) {
          if (closure_70 >= closure_71) {
            if (tmp28 > closure_71) {
              closure_71 = tmp28;
              arr = [];
            }
            arr.push(tmp27);
          }
        }
      }
      return tmp12;
    }
    function peg$parse_() {
      c73 = c73 + 1;
      let items = [];
      let tmp2 = peg$parsews();
      let tmp3 = obj;
      if (tmp2 !== obj) {
        do {
          let arr = items.push(tmp2);
          let tmp5 = peg$parsews;
          tmp2 = peg$parsews();
          tmp3 = obj;
        } while (tmp2 !== obj);
      }
      if (items !== tmp3) {
        items = str.substring(c70, c70);
      }
      const diff = c73 - 1;
      c73 = diff;
      if (items === tmp3) {
        if (0 === diff) {
          if (c70 >= closure_71) {
            if (tmp10 > closure_71) {
              closure_71 = tmp10;
              arr = [];
            }
            arr = arr.push(tmp9);
          }
        }
      }
      return items;
    }
    function peg$parsenumber() {
      let charAtResult2;
      if (48 === str.charCodeAt(closure_70)) {
        let tmp3 = c47;
        closure_70 = closure_70 + 1;
      } else {
        tmp3 = obj;
        if (0 === c73) {
          tmp3 = tmp;
          if (closure_70 >= closure_71) {
            if (tmp5 > closure_71) {
              closure_71 = tmp5;
              let arr = [];
            }
            arr = arr.push(tmp4);
            tmp3 = tmp;
          }
        }
      }
      let tmp10 = obj;
      if (tmp3 === obj) {
        if (regex5.test(str.charAt(closure_70))) {
          let charAtResult = str.charAt(closure_70);
          closure_70 = closure_70 + 1;
        } else {
          charAtResult = tmp9;
          if (0 === c73) {
            charAtResult = tmp9;
            if (closure_70 >= closure_71) {
              if (tmp14 > closure_71) {
                closure_71 = tmp14;
                arr = [];
              }
              arr = arr.push(tmp13);
              charAtResult = tmp9;
            }
          }
        }
        if (charAtResult !== tmp9) {
          if (regex3.test(str.charAt(closure_70))) {
            let charAtResult1 = str.charAt(closure_70);
            closure_70 = closure_70 + 1;
          } else {
            charAtResult1 = tmp9;
            if (0 === c73) {
              charAtResult1 = tmp9;
              if (closure_70 >= closure_71) {
                if (tmp26 > closure_71) {
                  closure_71 = tmp26;
                  arr = [];
                }
                arr.push(tmp25);
                charAtResult1 = tmp9;
              }
            }
          }
          const items = [];
          let tmp31 = str;
          let tmp32 = tmp9;
          if (charAtResult1 !== tmp9) {
            do {
              let arr2 = items.push(charAtResult1);
              let tmp34 = regex3;
              let str3 = str;
              let tmp35 = closure_70;
              if (regex3.test(str.charAt(closure_70))) {
                let tmp43 = closure_70;
                charAtResult2 = str3.charAt(closure_70);
                let tmp44 = closure_70;
                closure_70 = closure_70 + 1;
              } else {
                let tmp36 = obj;
                let tmp37 = c73;
                charAtResult2 = obj;
                if (0 === c73) {
                  let tmp40 = closure_70;
                  charAtResult2 = tmp36;
                  if (closure_70 >= closure_71) {
                    if (tmp40 > closure_71) {
                      closure_71 = tmp40;
                      arr = [];
                    }
                    let tmp41 = arr;
                    let arr3 = arr.push(tmp39);
                    charAtResult2 = tmp36;
                  }
                }
              }
              tmp32 = obj;
              charAtResult1 = charAtResult2;
              tmp31 = str3;
            } while (charAtResult2 !== obj);
          }
          if (items !== tmp32) {
            const items1 = [charAtResult, items];
            let str2 = tmp31;
            let substr = items1;
            let tmp20 = tmp32;
          } else {
            closure_70 = tmp49;
            substr = obj;
            str2 = tmp31;
            tmp20 = tmp32;
          }
        } else {
          closure_70 = tmp49;
          substr = obj;
          str2 = str;
          tmp20 = tmp9;
        }
        if (substr !== tmp20) {
          substr = str2.substring(tmp49, closure_70);
        }
        tmp3 = substr;
        tmp10 = tmp20;
      }
      let parsed = tmp3;
      if (tmp3 !== tmp10) {
        if (typeof peg$c50 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _parseInt = parseInt;
        parsed = parseInt(tmp3, 10);
      }
      return parsed;
    }
    function peg$parsechar() {
      if (regex6.test(str.charAt(closure_70))) {
        let charAtResult = str.charAt(closure_70);
        closure_70 = closure_70 + 1;
      } else {
        let throwTypeErrorResult4 = obj;
        charAtResult = obj;
        if (0 === c73) {
          charAtResult = throwTypeErrorResult4;
          if (closure_70 >= closure_71) {
            if (tmp5 > closure_71) {
              closure_71 = tmp5;
              let arr = [];
            }
            arr = arr.push(tmp4);
            charAtResult = throwTypeErrorResult4;
          }
        }
      }
      if (charAtResult === obj) {
        if (str.substr(closure_70, 2) === c54) {
          closure_70 = closure_70 + 2;
          let str2 = tmp88;
        } else {
          str2 = tmp10;
          if (0 === c73) {
            str2 = tmp10;
            if (closure_70 >= closure_71) {
              if (tmp13 > closure_71) {
                closure_71 = tmp13;
                arr = [];
              }
              arr = arr.push(tmp12);
              str2 = tmp10;
            }
          }
        }
        if (str2 !== tmp10) {
          str2 = "\\";
          if (typeof peg$c55 !== "function") {
            HermesBuiltin.throwTypeError();
          }
        }
        if (str2 === tmp10) {
          if (str.substr(closure_70, 2) === c57) {
            closure_70 = closure_70 + 2;
            let str3 = tmp91;
          } else {
            str3 = tmp10;
            if (0 === c73) {
              str3 = tmp10;
              if (closure_70 >= closure_71) {
                if (tmp20 > closure_71) {
                  closure_71 = tmp20;
                  arr = [];
                }
                arr.push(tmp19);
                str3 = tmp10;
              }
            }
          }
          if (str3 !== tmp10) {
            str3 = "\\#";
            if (typeof peg$c58 !== "function") {
              HermesBuiltin.throwTypeError();
            }
          }
          if (str3 === tmp10) {
            if (str.substr(closure_70, 2) === c60) {
              closure_70 = closure_70 + 2;
              let str4 = tmp94;
            } else {
              str4 = tmp10;
              if (0 === c73) {
                str4 = tmp10;
                if (closure_70 >= closure_71) {
                  if (tmp27 > closure_71) {
                    closure_71 = tmp27;
                    arr = [];
                  }
                  arr.push(tmp26);
                  str4 = tmp10;
                }
              }
            }
            if (str4 !== tmp10) {
              str4 = "{";
              if (typeof peg$c61 !== "function") {
                HermesBuiltin.throwTypeError();
              }
            }
            if (str4 === tmp10) {
              if (str.substr(closure_70, 2) === c63) {
                closure_70 = closure_70 + 2;
                let str5 = tmp97;
              } else {
                str5 = tmp10;
                if (0 === c73) {
                  str5 = tmp10;
                  if (closure_70 >= closure_71) {
                    if (tmp34 > closure_71) {
                      closure_71 = tmp34;
                      arr = [];
                    }
                    arr.push(tmp33);
                    str5 = tmp10;
                  }
                }
              }
              if (str5 !== tmp10) {
                str5 = "}";
                if (typeof peg$c64 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
              }
              if (str5 !== tmp10) {
                str4 = str5;
              } else {
                throwTypeErrorResult4 = closure_70;
                if (str.substr(closure_70, 2) === c66) {
                  closure_70 = closure_70 + 2;
                  let tmp40 = throwTypeErrorResult4;
                } else {
                  tmp40 = tmp10;
                  if (0 === c73) {
                    tmp40 = tmp10;
                    if (closure_70 >= closure_71) {
                      if (tmp42 > closure_71) {
                        closure_71 = tmp42;
                        arr = [];
                      }
                      arr.push(tmp41);
                      tmp40 = tmp10;
                    }
                  }
                }
                if (tmp40 === tmp10) {
                  closure_70 = tmp99;
                }
                if (regex4.test(str.charAt(closure_70))) {
                  let charAtResult1 = str.charAt(closure_70);
                  closure_70 = closure_70 + 1;
                } else {
                  charAtResult1 = tmp10;
                  if (0 === c73) {
                    charAtResult1 = tmp10;
                    if (closure_70 >= closure_71) {
                      if (tmp51 > closure_71) {
                        closure_71 = tmp51;
                        arr = [];
                      }
                      arr.push(tmp50);
                      charAtResult1 = tmp10;
                    }
                  }
                }
                if (charAtResult1 !== tmp10) {
                  throwTypeErrorResult4 = closure_70;
                  if (obj.test(str.charAt(closure_70))) {
                    let charAtResult2 = str.charAt(closure_70);
                    closure_70 = closure_70 + 1;
                  } else {
                    charAtResult2 = tmp10;
                    if (0 === c73) {
                      charAtResult2 = tmp10;
                      if (closure_70 >= closure_71) {
                        if (tmp59 > closure_71) {
                          closure_71 = tmp59;
                          arr = [];
                        }
                        arr.push(tmp58);
                        charAtResult2 = tmp10;
                      }
                    }
                  }
                  if (charAtResult2 !== tmp10) {
                    throwTypeErrorResult4 = closure_70;
                    if (obj.test(str.charAt(closure_70))) {
                      let charAtResult3 = str.charAt(closure_70);
                      closure_70 = closure_70 + 1;
                    } else {
                      charAtResult3 = tmp10;
                      if (0 === c73) {
                        charAtResult3 = tmp10;
                        if (closure_70 >= closure_71) {
                          if (tmp67 > closure_71) {
                            closure_71 = tmp67;
                            arr = [];
                          }
                          arr.push(tmp66);
                          charAtResult3 = tmp10;
                        }
                      }
                    }
                    if (charAtResult3 !== tmp10) {
                      throwTypeErrorResult4 = closure_70;
                      if (obj.test(str.charAt(closure_70))) {
                        let charAtResult4 = str.charAt(closure_70);
                        closure_70 = closure_70 + 1;
                      } else {
                        charAtResult4 = tmp10;
                        if (0 === c73) {
                          charAtResult4 = tmp10;
                          if (closure_70 >= closure_71) {
                            if (tmp75 > closure_71) {
                              closure_71 = tmp75;
                              arr = [];
                            }
                            arr.push(tmp74);
                            charAtResult4 = tmp10;
                          }
                        }
                      }
                      if (charAtResult4 !== tmp10) {
                        const items = [charAtResult1, charAtResult2, charAtResult3, charAtResult4];
                        let substr = items;
                      }
                      if (substr !== tmp10) {
                        substr = str.substring(tmp46, closure_70);
                      }
                      if (substr !== tmp10) {
                        if (typeof peg$c67 !== "function") {
                          throwTypeErrorResult4 = HermesBuiltin.throwTypeError();
                        }
                        const _String = String;
                        const _parseInt = parseInt;
                        let fromCharCodeResult = String.fromCharCode(parseInt(substr, 16));
                      } else {
                        closure_70 = tmp99;
                        fromCharCodeResult = obj;
                      }
                    }
                  }
                }
                closure_70 = tmp46;
                substr = obj;
              }
            }
            str3 = str4;
          }
          str2 = str3;
        }
        charAtResult = str2;
      }
      return charAtResult;
    }
    let tmp = arguments.length > 1 ? arguments[1] : {};
    function peg$parsestart() {
      const items = [];
      let tmp = peg$parsemessageFormatElement();
      let tmp2 = obj;
      if (tmp !== obj) {
        do {
          let arr = items.push(tmp);
          let tmp4 = peg$parsemessageFormatElement;
          tmp = peg$parsemessageFormatElement();
          tmp2 = obj;
        } while (tmp !== obj);
      }
      let tmp5 = items;
      if (items !== tmp2) {
        if (typeof peg$c1 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        obj = { type: "messageFormatPattern", elements: null };
        obj[1] = items;
        tmp5 = obj;
      }
      return tmp5;
    }
    let obj = {};
    obj = { start: peg$parsestart };
    function peg$c1(arg0) {}
    function peg$c3(arg0) {}
    function peg$c4(arg0) {}
    const re6 = /^[^ \t\n\r,.+={}#]/;
    closure_7 = { type: "class", value: "[^ \\t\\n\\r,.+={}#]", description: "[^ \\t\\n\\r,.+={}#]" };
    c8 = "{";
    closure_9 = { type: "literal", value: "{", description: '"{"' };
    c10 = null;
    c11 = ",";
    closure_12 = { type: "literal", value: ",", description: '","' };
    c13 = "}";
    closure_14 = { type: "literal", value: "}", description: '"}"' };
    function peg$c14(arg0, arg1) {}
    const number = "number";
    closure_17 = { type: "literal", value: "number", description: '"number"' };
    closure_19 = { type: "literal", value: "date", description: '"date"' };
    const time = "time";
    closure_21 = { type: "literal", value: "time", description: '"time"' };
    function peg$c21(arg0, arg1) {}
    const plural = "plural";
    closure_24 = { type: "literal", value: "plural", description: '"plural"' };
    function peg$c24(arg0) {}
    const selectordinal = "selectordinal";
    closure_27 = { type: "literal", value: "selectordinal", description: '"selectordinal"' };
    function peg$c27(arg0) {}
    const select = "select";
    closure_30 = { type: "literal", value: "select", description: '"select"' };
    function peg$c30(arg0) {}
    c32 = "=";
    closure_33 = { type: "literal", value: "=", description: '"="' };
    function peg$c33(arg0, arg1) {}
    c35 = "offset:";
    closure_36 = { type: "literal", value: "offset:", description: '"offset:"' };
    function peg$c36(arg0) {}
    function peg$c37(arg0, arg1) {}
    closure_39 = { type: "other", description: "whitespace" };
    const re40 = /^[ \t\n\r]/;
    closure_41 = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" };
    closure_42 = { type: "other", description: "optionalWhitespace" };
    const re43 = /^[0-9]/;
    closure_44 = { type: "class", value: "[0-9]", description: "[0-9]" };
    const re45 = /^[0-9a-f]/i;
    closure_46 = { type: "class", value: "[0-9a-f]i", description: "[0-9a-f]i" };
    c47 = "0";
    closure_48 = { type: "literal", value: "0", description: '"0"' };
    const re49 = /^[1-9]/;
    closure_50 = { type: "class", value: "[1-9]", description: "[1-9]" };
    function peg$c50(arg0) {}
    const re52 = /^[^{}\\\0-\x1F \t\n\r]/;
    closure_53 = {
      type: "class",
      value: "[^{}\\\\\\0-\\x1F\u007F \\t\\n\\r]",
      description: "[^{}\\\\\\0-\\x1F\u007F \\t\\n\\r]",
    };
    c54 = "\\\\";
    closure_55 = { type: "literal", value: "\\\\", description: '"\\\\\\\\"' };
    function peg$c55() {}
    c57 = "\\#";
    closure_58 = { type: "literal", value: "\\#", description: '"\\\\#"' };
    function peg$c58() {}
    c60 = "\\{";
    closure_61 = { type: "literal", value: "\\{", description: '"\\\\{"' };
    function peg$c61() {}
    c63 = "\\}";
    closure_64 = { type: "literal", value: "\\}", description: '"\\\\}"' };
    function peg$c64() {}
    c66 = "\\u";
    closure_67 = { type: "literal", value: "\\u", description: '"\\\\u"' };
    function peg$c67(arg0) {}
    function peg$c68(arg0) {}
    c70 = 0;
    closure_71 = 0;
    let arr = [];
    c73 = 0;
    if ("startRule" in tmp) {
      if (tmp.startRule in obj) {
        peg$parsestart = obj[tmp.startRule];
      } else {
        const _Error = Error;
        error = new Error("Can't start parsing from rule \"" + tmp.startRule + '".');
        throw error;
      }
    }
    const result = peg$parsestart();
    let tmp8 = result !== obj;
    if (tmp8) {
      if (c70 === str.length) {
        return result;
      }
    }
    if (tmp8) {
      tmp8 = c70 < str.length;
    }
    if (tmp8) {
      if (c70 >= closure_71) {
        if (tmp11 > closure_71) {
          closure_71 = tmp11;
          arr = [];
        }
        arr = arr.push({ type: "end", description: "end of input" });
      }
    }
    obj = { line: 1, column: 1, seenCR: false };
    let tmp15 = obj;
    if (0 !== closure_71) {
      if (0 > tmp14) {
        obj = { line: 1, column: 1, seenCR: false };
      }
      let num = 0;
      tmp15 = obj;
      if (0 < tmp14) {
        do {
          let charAtResult = str.charAt(num);
          let tmp17 = num;
          if ("\n" === charAtResult) {
            if (!obj.seenCR) {
              obj.line = obj.line + 1;
            }
            obj.column = 1;
            obj.seenCR = false;
          } else {
            if ("\r" !== charAtResult) {
              if ("\u2028" !== charAtResult) {
                if ("\u2029" !== charAtResult) {
                  obj.column = obj.column + 1;
                  obj.seenCR = false;
                }
              }
            }
            obj.line = obj.line + 1;
            obj.column = 1;
            obj.seenCR = true;
          }
          num = num + 1;
          tmp15 = obj;
        } while (num < tmp14);
      }
    }
    let charAtResult1 = null;
    if (closure_71 < str.length) {
      charAtResult1 = str.charAt(tmp14);
    }
    const sorted = arr.sort((description, description2) => {
      let num = -1;
      if (description.description >= description2.description) {
        let num2 = 0;
        if (description.description > description2.description) {
          num2 = 1;
        }
        num = num2;
      }
      return num;
    });
    let num2 = 1;
    if (1 < arr.length) {
      do {
        let tmp20 = num2;
        if (arr[num2 - 1] === arr[num2]) {
          let spliceResult = arr.splice(num2, 1);
          sum = num2;
        } else {
          sum = num2 + 1;
        }
        num2 = sum;
      } while (sum < arr.length);
    }
    const array = new Array(arr.length);
    let num3 = 0;
    if (0 < arr.length) {
      do {
        array[num3] = arr[num3].description;
        num3 = num3 + 1;
        length = arr.length;
      } while (num3 < length);
    }
    if (arr.length > 1) {
      let substr = array.slice(0, -1);
      let text = `${obj4.join(", ")} or ${arr2[arr.length - 1]}`;
    } else {
      text = array[0];
    }
    let str9 = "end of input";
    const text1 = `Expected ${tmp24}`;
    if (charAtResult1) {
      const str10 = charAtResult1.replace(/\\/g, "\\\\");
      const str12 = charAtResult1.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
      const str14 = charAtResult1.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b");
      const str16 = charAtResult1
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/\x08/g, "\\b")
        .replace(/\t/g, "\\t");
      const str18 = charAtResult1
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/\x08/g, "\\b")
        .replace(/\t/g, "\\t")
        .replace(/\n/g, "\\n");
      const str20 = charAtResult1
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/\x08/g, "\\b")
        .replace(/\t/g, "\\t")
        .replace(/\n/g, "\\n")
        .replace(/\f/g, "\\f");
      const str22 = charAtResult1
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/\x08/g, "\\b")
        .replace(/\t/g, "\\t")
        .replace(/\n/g, "\\n")
        .replace(/\f/g, "\\f")
        .replace(/\r/g, "\\r");
      const str23 = charAtResult1
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/\x08/g, "\\b")
        .replace(/\t/g, "\\t")
        .replace(/\n/g, "\\n")
        .replace(/\f/g, "\\f")
        .replace(/\r/g, "\\r")
        .replace(/[\x00-\x07\x0B\x0E\x0F]/g, (str) => {
          str = str.charCodeAt(0);
          return "\\x0" + str.charCodeAt(0).toString(16).toUpperCase();
        });
      const str24 = charAtResult1
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/\x08/g, "\\b")
        .replace(/\t/g, "\\t")
        .replace(/\n/g, "\\n")
        .replace(/\f/g, "\\f")
        .replace(/\r/g, "\\r")
        .replace(/[\x00-\x07\x0B\x0E\x0F]/g, (str) => {
          str = str.charCodeAt(0);
          return "\\x0" + str.charCodeAt(0).toString(16).toUpperCase();
        })
        .replace(/[\x10-\x1F\x80-\xFF]/g, (str) => {
          str = str.charCodeAt(0);
          return "\\x" + str.charCodeAt(0).toString(16).toUpperCase();
        });
      str9 = `${
        '"' +
        charAtResult1
          .replace(/\\/g, "\\\\")
          .replace(/"/g, '\\"')
          .replace(/\x08/g, "\\b")
          .replace(/\t/g, "\\t")
          .replace(/\n/g, "\\n")
          .replace(/\f/g, "\\f")
          .replace(/\r/g, "\\r")
          .replace(/[\x00-\x07\x0B\x0E\x0F]/g, (str) => {
            str = str.charCodeAt(0);
            return "\\x0" + str.charCodeAt(0).toString(16).toUpperCase();
          })
          .replace(/[\x10-\x1F\x80-\xFF]/g, (str) => {
            str = str.charCodeAt(0);
            return "\\x" + str.charCodeAt(0).toString(16).toUpperCase();
          })
          .replace(/[\u0180-\u0FFF]/g, (str) => {
            str = str.charCodeAt(0);
            return "\\u0" + str.charCodeAt(0).toString(16).toUpperCase();
          })
          .replace(/[\u1080-\uFFFF]/g, (str) => {
            str = str.charCodeAt(0);
            return "\\u" + str.charCodeAt(0).toString(16).toUpperCase();
          })
      }"`;
      const str25 = charAtResult1
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/\x08/g, "\\b")
        .replace(/\t/g, "\\t")
        .replace(/\n/g, "\\n")
        .replace(/\f/g, "\\f")
        .replace(/\r/g, "\\r")
        .replace(/[\x00-\x07\x0B\x0E\x0F]/g, (str) => {
          str = str.charCodeAt(0);
          return "\\x0" + str.charCodeAt(0).toString(16).toUpperCase();
        })
        .replace(/[\x10-\x1F\x80-\xFF]/g, (str) => {
          str = str.charCodeAt(0);
          return "\\x" + str.charCodeAt(0).toString(16).toUpperCase();
        })
        .replace(/[\u0180-\u0FFF]/g, (str) => {
          str = str.charCodeAt(0);
          return "\\u0" + str.charCodeAt(0).toString(16).toUpperCase();
        });
    }
    const combined = text1 + " but " + str9 + " found.";
    ({ line, column } = tmp15);
    Object.create(closure_0.prototype);
    let obj2 = {
      message: combined,
      expected: arr,
      found: charAtResult1,
      offset: closure_71,
      line,
      column,
      name: "SyntaxError",
    };
    throw obj2;
  },
};
arg5.default = obj;
