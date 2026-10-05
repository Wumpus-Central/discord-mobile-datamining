// _runtime/metro/01898__.js
let closure_12;

class SyntaxError {
  constructor(arg0, arg1, arg2, arg3, arg4, arg5) {}
}
class ctor {
  constructor() {
    this.constructor = SyntaxError;
  }
}
ctor.prototype = Error.prototype;
let obj2 = Object.create(ctor.prototype);
obj2.constructor = SyntaxError;
SyntaxError.prototype = obj2;
let obj = {
  SyntaxError,
  parse(str) {
    let arr2;
    let column;
    let length;
    let line;
    let obj4;
    let sum;
    let tmp22;
    let closure_0 = str;
    function peg$parsemessageFormatElement() {
      let charAtResult1;
      const tmp2 = peg$parse_();
      let tmp4 = obj;
      const tmp = closure_70;
      if (tmp2 !== obj) {
        let tmp5;
        let tmp6;
        let tmp9 = peg$parsechar();
        if (tmp9 !== obj) {
          const items = [];
          tmp5 = tmp3;
          obj = items;
          tmp6 = tmp3;
          while (tmp9 !== obj) {
            let arr = items.push(tmp9);
            tmp9 = peg$parsechar();
            tmp5 = obj;
            obj = items;
            tmp6 = obj;
          }
        } else {
          tmp5 = tmp3;
          tmp6 = tmp3;
        }
        let joined = obj;
        if (obj !== tmp6) {
          if (typeof peg$c68 === "function") {
            joined = obj.join("");
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        tmp4 = tmp5;
        if (joined !== tmp5) {
          let tmp14;
          let tmp16;
          let arr3;
          const tmp13 = peg$parse_();
          tmp4 = tmp5;
          if (tmp13 !== tmp5) {
            const items1 = [tmp2, joined, tmp13];
            tmp4 = tmp5;
            tmp14 = items1;
          }
          if (tmp14 !== tmp4) {
            const items2 = [];
            tmp16 = tmp4;
            arr3 = items2;
            if (tmp14 !== tmp4) {
              while (true) {
                let arr2 = items2.push(tmp14);
                let tmp18 = closure_70;
                let tmp20 = peg$parse_();
                let tmp21 = obj;
                let tmp22 = obj;
                if (tmp20 !== obj) {
                  let tmp23;
                  let obj2;
                  let tmp24;
                  let tmp27 = peg$parsechar();
                  let tmp225 = tmp27 !== tmp21;
                  if (tmp225) {
                    let items3 = [];
                    tmp23 = tmp21;
                    obj2 = items3;
                    tmp24 = tmp21;
                    if (tmp225) {
                      do {
                        let arr4 = items3.push(tmp27);
                        tmp27 = peg$parsechar();
                        tmp23 = obj;
                        obj2 = items3;
                        tmp24 = obj;
                      } while (tmp27 !== obj);
                    }
                  } else {
                    obj2 = obj;
                    tmp23 = tmp21;
                    tmp24 = tmp21;
                  }
                  let joined1 = obj2;
                  if (obj2 !== tmp24) {
                    if (typeof peg$c68 !== "function") {
                      break;
                    } else {
                      joined1 = obj2.join("");
                    }
                  }
                  tmp22 = tmp23;
                  if (joined1 !== tmp23) {
                    let tmp31 = peg$parse_();
                    tmp22 = tmp23;
                    if (tmp31 !== tmp23) {
                      let items4 = [tmp20, joined1, tmp31];
                      tmp22 = tmp23;
                      let tmp32 = items4;
                      tmp16 = tmp22;
                      tmp14 = tmp32;
                      arr3 = items2;
                    }
                  }
                }
                closure_70 = tmp18;
                tmp32 = obj;
              }
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            arr3 = obj;
            tmp16 = tmp4;
          }
          let tmp33 = arr3;
          if (arr3 !== tmp16) {
            if (typeof peg$c3 === "function") {
              let str3 = "";
              let num2 = 0;
              let str4 = "";
              if (0 < arr3.length) {
                do {
                  let arr7 = arr3[num2];
                  let length2 = arr7.length;
                  let sum = str3;
                  let num3 = 0;
                  let tmp37 = str3;
                  if (0 < length2) {
                    do {
                      sum = sum + arr7[num3];
                      num3 = num3 + 1;
                      tmp37 = sum;
                    } while (num3 < length2);
                  }
                  num2 = num2 + 1;
                  str3 = tmp37;
                  str4 = tmp37;
                } while (num2 < arr3.length);
              }
              tmp33 = str4;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          if (tmp33 === obj) {
            let substr = peg$parsews();
            const tmp39 = closure_70;
            if (substr !== obj) {
              substr = closure_0.substring(tmp39, closure_70);
            }
            tmp33 = substr;
          }
          let tmp44 = tmp33;
          if (tmp33 !== obj) {
            if (typeof peg$c4 === "function") {
              tmp44 = { type: "messageTextElement", value: tmp33 };
              const obj3 = { type: "messageTextElement", value: tmp33 };
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          if (tmp44 === obj) {
            let tmp47;
            if (123 === closure_0.charCodeAt(closure_70)) {
              tmp47 = c8;
              closure_70 = closure_70 + 1;
            } else {
              tmp47 = tmp38;
              if (0 === diff) {
                tmp47 = tmp38;
                if (closure_70 >= closure_71) {
                  if (closure_70 > closure_71) {
                    closure_71 = tmp49;
                    closure_72 = [];
                  }
                  closure_72.push(tmp48);
                  tmp47 = tmp38;
                }
              }
            }
            if (tmp47 !== obj) {
              let tmp54;
              if (peg$parse_() !== obj) {
                let tmp56 = peg$parsenumber();
                let str5 = closure_0;
                let tmp57 = tmp38;
                if (tmp56 === obj) {
                  let charAtResult;
                  let str6;
                  let tmp68;
                  let substr1;
                  const tmp228 = closure_70;
                  if (re6.test(closure_0.charAt(closure_70))) {
                    charAtResult = closure_0.charAt(closure_70);
                    closure_70 = closure_70 + 1;
                  } else {
                    charAtResult = tmp38;
                    if (0 === diff) {
                      charAtResult = tmp38;
                      if (closure_70 >= closure_71) {
                        if (closure_70 > closure_71) {
                          closure_71 = tmp61;
                          closure_72 = [];
                        }
                        closure_72.push(tmp60);
                        charAtResult = tmp38;
                      }
                    }
                  }
                  if (charAtResult !== obj) {
                    const items5 = [];
                    str6 = closure_0;
                    tmp68 = tmp38;
                    substr1 = items5;
                    if (charAtResult !== obj) {
                      do {
                        let arr8 = items5.push(charAtResult);
                        if (re6.test(closure_0.charAt(closure_70))) {
                          charAtResult1 = closure_0.charAt(closure_70);
                          closure_70 = closure_70 + 1;
                        } else {
                          let tmp72 = obj;
                          charAtResult1 = obj;
                          if (0 === diff) {
                            let tmp76 = closure_70;
                            charAtResult1 = tmp72;
                            if (closure_70 >= closure_71) {
                              if (tmp76 > closure_71) {
                                closure_71 = tmp76;
                                closure_72 = [];
                              }
                              let arr9 = closure_72.push(tmp75);
                              charAtResult1 = tmp72;
                            }
                          }
                        }
                        tmp68 = obj;
                        charAtResult = charAtResult1;
                        str6 = closure_0;
                        substr1 = items5;
                      } while (charAtResult1 !== obj);
                    }
                  } else {
                    substr1 = obj;
                    str6 = closure_0;
                    tmp68 = tmp38;
                  }
                  if (substr1 !== tmp68) {
                    substr1 = str6.substring(tmp228, closure_70);
                  }
                  tmp56 = substr1;
                  str5 = str6;
                  tmp57 = tmp68;
                }
                if (tmp56 !== tmp57) {
                  if (peg$parse_() !== tmp57) {
                    let tmp86;
                    if (44 === str5.charCodeAt(closure_70)) {
                      tmp86 = c11;
                      closure_70 = closure_70 + 1;
                    } else {
                      tmp86 = tmp57;
                      if (0 === diff) {
                        tmp86 = tmp57;
                        if (closure_70 >= closure_71) {
                          if (closure_70 > closure_71) {
                            closure_71 = tmp88;
                            closure_72 = [];
                          }
                          closure_72.push(tmp87);
                          tmp86 = tmp57;
                        }
                      }
                    }
                    if (tmp86 !== tmp57) {
                      let tmp94;
                      let tmp93;
                      const tmp82Result = peg$parse_();
                      if (tmp82Result !== tmp57) {
                        let tmp99;
                        if (str5.substr(closure_70, 6) === number) {
                          closure_70 = closure_70 + 6;
                          tmp99 = tmp97;
                        } else {
                          tmp99 = tmp57;
                          if (0 === diff) {
                            tmp99 = tmp57;
                            if (closure_70 >= closure_71) {
                              if (closure_70 > closure_71) {
                                closure_71 = tmp101;
                                closure_72 = [];
                              }
                              closure_72.push(tmp100);
                              tmp99 = tmp57;
                            }
                          }
                        }
                        if (tmp99 === tmp57) {
                          let tmp106;
                          if (str5.substr(closure_70, 4) === date) {
                            closure_70 = closure_70 + 4;
                            tmp106 = tmp232;
                          } else {
                            tmp106 = tmp57;
                            if (0 === diff) {
                              tmp106 = tmp57;
                              if (closure_70 >= closure_71) {
                                if (closure_70 > closure_71) {
                                  closure_71 = tmp108;
                                  closure_72 = [];
                                }
                                closure_72.push(tmp107);
                                tmp106 = tmp57;
                              }
                            }
                          }
                          if (tmp106 === tmp57) {
                            let tmp115;
                            if (str5.substr(closure_70, 4) === time) {
                              closure_70 = closure_70 + 4;
                              tmp115 = tmp113;
                            } else {
                              tmp115 = tmp57;
                              if (0 === diff) {
                                tmp115 = tmp57;
                                if (closure_70 >= closure_71) {
                                  if (closure_70 > closure_71) {
                                    closure_71 = tmp117;
                                    closure_72 = [];
                                  }
                                  closure_72.push(tmp116);
                                  tmp115 = tmp57;
                                }
                              }
                            }
                            tmp106 = tmp115;
                          }
                          tmp99 = tmp106;
                        }
                        if (tmp99 !== tmp57) {
                          let tmp122;
                          let tmp121;
                          if (peg$parse_() !== tmp57) {
                            let tmp126;
                            const tmp123 = closure_70;
                            if (44 === str5.charCodeAt(closure_70)) {
                              tmp126 = c11;
                              closure_70 = closure_70 + 1;
                            } else {
                              tmp126 = tmp57;
                              if (0 === diff) {
                                tmp126 = tmp57;
                                if (closure_70 >= closure_71) {
                                  if (closure_70 > closure_71) {
                                    closure_71 = tmp128;
                                    closure_72 = [];
                                  }
                                  closure_72.push(tmp127);
                                  tmp126 = tmp57;
                                }
                              }
                            }
                            let tmp132 = tmp57;
                            if (tmp126 !== tmp57) {
                              const tmp82Result2 = peg$parse_();
                              tmp132 = tmp57;
                              if (tmp82Result2 !== tmp57) {
                                let tmp133;
                                let obj4;
                                let tmp134;
                                let tmp140;
                                let tmp137 = peg$parsechar();
                                if (tmp137 !== tmp57) {
                                  const items6 = [];
                                  tmp133 = tmp57;
                                  obj4 = items6;
                                  tmp134 = tmp57;
                                  if (tmp137 !== tmp57) {
                                    do {
                                      let arr35 = items6.push(tmp137);
                                      tmp137 = peg$parsechar();
                                      tmp133 = obj;
                                      obj4 = items6;
                                      tmp134 = obj;
                                    } while (tmp137 !== obj);
                                  }
                                } else {
                                  obj4 = obj;
                                  tmp133 = tmp57;
                                  tmp134 = tmp57;
                                }
                                let joined2 = obj4;
                                if (obj4 !== tmp134) {
                                  if (typeof peg$c68 === "function") {
                                    joined2 = obj4.join("");
                                  } else {
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                }
                                tmp132 = tmp133;
                                if (joined2 !== tmp133) {
                                  const items7 = [tmp126, tmp82Result2, joined2];
                                  tmp132 = tmp133;
                                  tmp140 = items7;
                                }
                                if (tmp140 === tmp132) {
                                  tmp140 = c10;
                                }
                                if (tmp140 !== tmp132) {
                                  if (typeof peg$c21 === "function") {
                                    tmp122 = tmp132;
                                    tmp121 = { type: `${tmp99}Format`, style: tmp140 && tmp140[2] };
                                    const obj5 = { type: `${tmp99}Format`, style: tmp140 && tmp140[2] };
                                  } else {
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                } else {
                                  closure_70 = tmp95;
                                  tmp121 = obj;
                                  tmp122 = tmp132;
                                }
                              }
                            }
                            closure_70 = tmp123;
                            tmp140 = obj;
                          }
                          let tmp142 = tmp122;
                          if (tmp121 === tmp122) {
                            let tmp144;
                            if (closure_0.substr(closure_70, 6) === plural) {
                              closure_70 = closure_70 + 6;
                              tmp144 = tmp238;
                            } else {
                              tmp144 = tmp122;
                              if (0 === diff) {
                                tmp144 = tmp122;
                                if (closure_70 >= closure_71) {
                                  if (closure_70 > closure_71) {
                                    closure_71 = tmp146;
                                    closure_72 = [];
                                  }
                                  closure_72.push(tmp145);
                                  tmp144 = tmp122;
                                }
                              }
                            }
                            if (tmp144 !== tmp122) {
                              let tmp151;
                              if (peg$parse_() !== tmp122) {
                                let tmp154;
                                if (44 === closure_0.charCodeAt(closure_70)) {
                                  tmp154 = c11;
                                  closure_70 = closure_70 + 1;
                                } else {
                                  tmp154 = tmp122;
                                  if (0 === diff) {
                                    tmp154 = tmp122;
                                    if (closure_70 >= closure_71) {
                                      if (closure_70 > closure_71) {
                                        closure_71 = tmp156;
                                        closure_72 = [];
                                      }
                                      closure_72.push(tmp155);
                                      tmp154 = tmp122;
                                    }
                                  }
                                }
                                if (tmp154 !== tmp122) {
                                  if (peg$parse_() !== tmp122) {
                                    const tmp161 = peg$parsepluralStyle();
                                    if (tmp161 !== tmp122) {
                                      if (typeof peg$c24 === "function") {
                                        tmp151 = {
                                          type: tmp161.type,
                                          ordinal: false,
                                          offset: tmp161.offset || 0,
                                          options: tmp161.options,
                                        };
                                        const obj6 = {
                                          type: tmp161.type,
                                          ordinal: false,
                                          offset: tmp161.offset || 0,
                                          options: tmp161.options,
                                        };
                                      } else {
                                        throw new TypeError("Trying to call a non-function");
                                      }
                                    }
                                  }
                                }
                                closure_70 = tmp236;
                                tmp151 = obj;
                              }
                              let tmp163 = tmp122;
                              if (tmp151 === tmp122) {
                                let tmp165;
                                if (closure_0.substr(closure_70, 13) === selectordinal) {
                                  closure_70 = closure_70 + 13;
                                  tmp165 = tmp241;
                                } else {
                                  tmp165 = tmp122;
                                  if (0 === diff) {
                                    tmp165 = tmp122;
                                    if (closure_70 >= closure_71) {
                                      if (closure_70 > closure_71) {
                                        closure_71 = tmp167;
                                        closure_72 = [];
                                      }
                                      closure_72.push(tmp166);
                                      tmp165 = tmp122;
                                    }
                                  }
                                }
                                if (tmp165 !== tmp122) {
                                  let tmp172;
                                  if (peg$parse_() !== tmp122) {
                                    let tmp175;
                                    if (44 === closure_0.charCodeAt(closure_70)) {
                                      tmp175 = c11;
                                      closure_70 = closure_70 + 1;
                                    } else {
                                      tmp175 = tmp122;
                                      if (0 === diff) {
                                        tmp175 = tmp122;
                                        if (closure_70 >= closure_71) {
                                          if (closure_70 > closure_71) {
                                            closure_71 = tmp177;
                                            closure_72 = [];
                                          }
                                          closure_72.push(tmp176);
                                          tmp175 = tmp122;
                                        }
                                      }
                                    }
                                    if (tmp175 !== tmp122) {
                                      if (peg$parse_() !== tmp122) {
                                        const tmp182 = peg$parsepluralStyle();
                                        if (tmp182 !== tmp122) {
                                          if (typeof peg$c27 === "function") {
                                            tmp172 = {
                                              type: tmp182.type,
                                              ordinal: true,
                                              offset: tmp182.offset || 0,
                                              options: tmp182.options,
                                            };
                                            const obj7 = {
                                              type: tmp182.type,
                                              ordinal: true,
                                              offset: tmp182.offset || 0,
                                              options: tmp182.options,
                                            };
                                          } else {
                                            throw new TypeError("Trying to call a non-function");
                                          }
                                        }
                                      }
                                    }
                                    closure_70 = tmp239;
                                    tmp172 = obj;
                                  }
                                  let tmp184 = tmp122;
                                  if (tmp172 === tmp122) {
                                    let tmp186;
                                    let tmp193;
                                    let tmp192;
                                    if (closure_0.substr(closure_70, 6) === select) {
                                      closure_70 = closure_70 + 6;
                                      tmp186 = tmp244;
                                    } else {
                                      tmp186 = tmp122;
                                      if (0 === diff) {
                                        tmp186 = tmp122;
                                        if (closure_70 >= closure_71) {
                                          if (closure_70 > closure_71) {
                                            closure_71 = tmp188;
                                            closure_72 = [];
                                          }
                                          closure_72.push(tmp187);
                                          tmp186 = tmp122;
                                        }
                                      }
                                    }
                                    if (tmp186 !== tmp122) {
                                      if (peg$parse_() !== tmp122) {
                                        let tmp197;
                                        if (44 === closure_0.charCodeAt(closure_70)) {
                                          tmp197 = c11;
                                          closure_70 = closure_70 + 1;
                                        } else {
                                          tmp197 = tmp122;
                                          if (0 === diff) {
                                            tmp197 = tmp122;
                                            if (closure_70 >= closure_71) {
                                              if (closure_70 > closure_71) {
                                                closure_71 = tmp199;
                                                closure_72 = [];
                                              }
                                              closure_72.push(tmp198);
                                              tmp197 = tmp122;
                                            }
                                          }
                                        }
                                        if (tmp197 !== tmp122) {
                                          if (peg$parse_() !== tmp122) {
                                            let tmp207;
                                            let tmp206;
                                            let tmp204 = peg$parseoptionalFormatPattern();
                                            if (tmp204 !== tmp122) {
                                              const items8 = [];
                                              tmp207 = tmp122;
                                              tmp206 = items8;
                                              if (tmp204 !== tmp122) {
                                                do {
                                                  let arr42 = items8.push(tmp204);
                                                  tmp204 = peg$parseoptionalFormatPattern();
                                                  tmp207 = obj;
                                                  tmp206 = items8;
                                                } while (tmp204 !== obj);
                                              }
                                            } else {
                                              tmp206 = obj;
                                              tmp207 = tmp122;
                                            }
                                            if (tmp206 !== tmp207) {
                                              if (typeof peg$c30 === "function") {
                                                tmp193 = tmp207;
                                                tmp192 = { type: "selectFormat", options: tmp206 };
                                                const obj8 = { type: "selectFormat", options: tmp206 };
                                              } else {
                                                throw new TypeError("Trying to call a non-function");
                                              }
                                            } else {
                                              closure_70 = tmp242;
                                              tmp192 = obj;
                                              tmp193 = tmp207;
                                            }
                                          } else {
                                            closure_70 = tmp242;
                                            tmp192 = obj;
                                            tmp193 = tmp122;
                                          }
                                        } else {
                                          closure_70 = tmp242;
                                          tmp192 = obj;
                                          tmp193 = tmp122;
                                        }
                                      } else {
                                        closure_70 = tmp242;
                                        tmp192 = obj;
                                        tmp193 = tmp122;
                                      }
                                    } else {
                                      closure_70 = tmp242;
                                      tmp192 = obj;
                                      tmp193 = tmp122;
                                    }
                                    tmp184 = tmp193;
                                    tmp172 = tmp192;
                                  }
                                  tmp163 = tmp184;
                                  tmp151 = tmp172;
                                }
                                closure_70 = tmp239;
                                tmp172 = obj;
                              }
                              tmp142 = tmp163;
                              tmp121 = tmp151;
                            }
                            closure_70 = tmp236;
                            tmp151 = obj;
                          }
                          if (tmp121 !== tmp142) {
                            const items9 = [tmp86, tmp82Result, tmp121];
                            tmp94 = tmp142;
                            tmp93 = items9;
                          } else {
                            closure_70 = tmp83;
                            tmp93 = obj;
                            tmp94 = tmp142;
                          }
                        }
                        closure_70 = tmp95;
                        tmp121 = obj;
                        tmp122 = tmp57;
                      }
                      if (tmp93 === tmp94) {
                        tmp93 = c10;
                      }
                      if (tmp93 !== tmp94) {
                        if (peg$parse_() !== tmp94) {
                          let tmp215;
                          if (125 === closure_0.charCodeAt(closure_70)) {
                            tmp215 = c13;
                            closure_70 = closure_70 + 1;
                          } else {
                            tmp215 = tmp94;
                            if (0 === diff) {
                              tmp215 = tmp94;
                              if (closure_70 >= closure_71) {
                                if (closure_70 > closure_71) {
                                  closure_71 = tmp217;
                                  closure_72 = [];
                                }
                                closure_72.push(tmp216);
                                tmp215 = tmp94;
                              }
                            }
                          }
                          if (tmp215 !== tmp94) {
                            if (typeof peg$c14 === "function") {
                              tmp54 = { type: "argumentElement", id: tmp56, format: tmp93 && tmp93[2] };
                              const obj9 = { type: "argumentElement", id: tmp56, format: tmp93 && tmp93[2] };
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            closure_70 = tmp226;
                            tmp54 = obj;
                          }
                        }
                      }
                      closure_70 = tmp226;
                      tmp54 = obj;
                    }
                    closure_70 = tmp83;
                    tmp93 = obj;
                    tmp94 = tmp57;
                  }
                }
                closure_70 = tmp226;
                tmp54 = obj;
              }
              tmp44 = tmp54;
            }
            closure_70 = tmp226;
            tmp54 = obj;
          }
          return tmp44;
        }
      }
      closure_70 = tmp;
      tmp14 = obj;
    }
    function peg$parseoptionalFormatPattern() {
      let tmp4;
      if (peg$parse_() !== obj) {
        let tmp8;
        if (61 === closure_0.charCodeAt(closure_70)) {
          tmp8 = c32;
          closure_70 = closure_70 + 1;
        } else {
          tmp8 = tmp3;
          if (0 === diff) {
            tmp8 = tmp3;
            if (closure_70 >= closure_71) {
              if (closure_70 > closure_71) {
                closure_71 = tmp10;
                closure_72 = [];
              }
              closure_72.push(tmp9);
              tmp8 = tmp3;
            }
          }
        }
        if (tmp8 !== obj) {
          let substr;
          const tmp15 = peg$parsenumber();
          if (tmp15 !== obj) {
            const items = [tmp8, tmp15];
            substr = items;
          }
          if (substr !== obj) {
            substr = closure_0.substring(tmp5, closure_70);
          }
          let tmp18 = tmp3;
          if (substr === obj) {
            let tmp19;
            let tmp20;
            let tmp23 = peg$parsechar();
            if (tmp23 !== obj) {
              const items1 = [];
              tmp19 = tmp3;
              obj = items1;
              tmp20 = tmp3;
              while (tmp23 !== obj) {
                let arr2 = items1.push(tmp23);
                tmp23 = peg$parsechar();
                tmp19 = obj;
                obj = items1;
                tmp20 = obj;
              }
            } else {
              tmp19 = tmp3;
              tmp20 = tmp3;
            }
            let joined = obj;
            if (obj !== tmp20) {
              if (typeof peg$c68 === "function") {
                joined = obj.join("");
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            substr = joined;
            tmp18 = tmp19;
          }
          if (substr !== obj) {
            if (peg$parse_() !== obj) {
              let tmp28;
              if (123 === closure_0.charCodeAt(closure_70)) {
                tmp28 = c8;
                closure_70 = closure_70 + 1;
              } else {
                tmp28 = tmp3;
                if (0 === diff) {
                  tmp28 = tmp3;
                  if (closure_70 >= closure_71) {
                    if (closure_70 > closure_71) {
                      closure_71 = tmp30;
                      closure_72 = [];
                    }
                    closure_72.push(tmp29);
                    tmp28 = tmp3;
                  }
                }
              }
              if (tmp28 !== obj) {
                if (peg$parse_() !== obj) {
                  const items2 = [];
                  let tmp35 = peg$parsemessageFormatElement();
                  if (tmp35 !== tmp18) {
                    do {
                      let arr8 = items2.push(tmp35);
                      tmp35 = peg$parsemessageFormatElement();
                      tmp18 = obj;
                    } while (tmp35 !== obj);
                  }
                  let tmp38 = items2;
                  if (items2 !== tmp18) {
                    if (typeof peg$c1 === "function") {
                      tmp38 = { type: "messageFormatPattern", elements: items2 };
                      const obj3 = { type: "messageFormatPattern", elements: items2 };
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
                  if (tmp38 !== obj) {
                    if (peg$parse_() !== obj) {
                      let tmp42;
                      if (125 === closure_0.charCodeAt(closure_70)) {
                        tmp42 = c13;
                        closure_70 = closure_70 + 1;
                      } else {
                        tmp42 = tmp3;
                        if (0 === diff) {
                          tmp42 = tmp3;
                          if (closure_70 >= closure_71) {
                            if (closure_70 > closure_71) {
                              closure_71 = tmp44;
                              closure_72 = [];
                            }
                            closure_72.push(tmp43);
                            tmp42 = tmp3;
                          }
                        }
                      }
                      if (tmp42 !== obj) {
                        if (typeof peg$c33 === "function") {
                          tmp4 = { type: "optionalFormatPattern", selector: substr, value: tmp38 };
                          const obj4 = { type: "optionalFormatPattern", selector: substr, value: tmp38 };
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
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
      let tmp5;
      if (closure_0.substr(closure_70, 7) === c35) {
        closure_70 = closure_70 + 7;
        tmp5 = tmp2;
      } else {
        tmp5 = obj;
        if (0 === diff) {
          tmp5 = tmp3;
          if (closure_70 >= closure_71) {
            if (closure_70 > closure_71) {
              closure_71 = tmp7;
              closure_72 = [];
            }
            closure_72.push(tmp6);
            tmp5 = tmp3;
          }
        }
      }
      if (tmp5 !== obj) {
        if (peg$parse_() !== obj) {
          let tmp15;
          let tmp17;
          const tmp14 = peg$parsenumber();
          if (tmp14 !== obj) {
            tmp15 = tmp14;
            if (typeof peg$c36 !== "function") {
              throw new TypeError("Trying to call a non-function");
            }
          }
          if (tmp15 === obj) {
            tmp15 = c10;
          }
          if (tmp15 !== obj) {
            if (peg$parse_() !== obj) {
              let tmp22;
              let tmp23;
              let tmp20 = peg$parseoptionalFormatPattern();
              if (tmp20 !== obj) {
                const items = [];
                tmp22 = items;
                tmp23 = tmp11;
                while (tmp20 !== obj) {
                  let arr3 = items.push(tmp20);
                  tmp20 = peg$parseoptionalFormatPattern();
                  tmp23 = obj;
                  tmp22 = items;
                }
              } else {
                tmp22 = obj;
                tmp23 = tmp11;
              }
              if (tmp22 !== tmp23) {
                if (typeof peg$c37 === "function") {
                  obj = { type: "pluralFormat", offset: tmp15, options: tmp22 };
                  tmp17 = obj;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
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
      let charAtResult;
      let charAtResult1;
      let tmp12;
      let tmp13;
      diff = diff + 1;
      if (re40.test(closure_0.charAt(closure_70))) {
        charAtResult = closure_0.charAt(closure_70);
        closure_70 = closure_70 + 1;
      } else {
        charAtResult = obj;
        if (0 === diff) {
          charAtResult = obj;
          if (closure_70 >= closure_71) {
            if (closure_70 > closure_71) {
              closure_71 = tmp5;
              closure_72 = [];
            }
            closure_72.push(tmp4);
            charAtResult = obj;
          }
        }
      }
      if (charAtResult !== obj) {
        const items = [];
        tmp12 = items;
        tmp13 = obj;
        if (charAtResult !== obj) {
          do {
            let arr5 = items.push(charAtResult);
            if (re40.test(closure_0.charAt(closure_70))) {
              charAtResult1 = closure_0.charAt(closure_70);
              closure_70 = closure_70 + 1;
            } else {
              charAtResult1 = obj;
              if (0 === diff) {
                let tmp21 = closure_70;
                charAtResult1 = obj;
                if (closure_70 >= closure_71) {
                  if (tmp21 > closure_71) {
                    closure_71 = tmp21;
                    closure_72 = [];
                  }
                  let arr6 = closure_72.push(tmp20);
                  charAtResult1 = obj;
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
        tmp13 = obj;
      }
      diff = diff - 1;
      if (tmp12 === tmp13) {
        if (0 === diff) {
          if (closure_70 >= closure_71) {
            if (closure_70 > closure_71) {
              closure_71 = tmp28;
              closure_72 = [];
            }
            closure_72.push(tmp27);
          }
        }
      }
      return tmp12;
    }
    function peg$parse_() {
      diff = diff + 1;
      let items = [];
      let tmp2 = peg$parsews();
      let tmp3 = obj;
      if (tmp2 !== obj) {
        do {
          let arr = items.push(tmp2);
          tmp2 = peg$parsews();
          tmp3 = obj;
        } while (tmp2 !== obj);
      }
      if (items !== tmp3) {
        items = closure_0.substring(closure_70, closure_70);
      }
      diff = diff - 1;
      if (items === tmp3) {
        if (0 === diff) {
          if (closure_70 >= closure_71) {
            if (closure_70 > closure_71) {
              closure_71 = closure_70;
              closure_72 = [];
            }
            closure_72.push(tmp9);
          }
        }
      }
      return items;
    }
    function peg$parsenumber() {
      let charAtResult2;
      let tmp3;
      if (48 === closure_0.charCodeAt(closure_70)) {
        tmp3 = c47;
        closure_70 = closure_70 + 1;
      } else {
        tmp3 = obj;
        if (0 === diff) {
          tmp3 = obj;
          if (closure_70 >= closure_71) {
            if (closure_70 > closure_71) {
              closure_71 = tmp5;
              closure_72 = [];
            }
            closure_72.push(tmp4);
            tmp3 = obj;
          }
        }
      }
      let tmp10 = obj;
      if (tmp3 === obj) {
        let charAtResult;
        let str2;
        let substr;
        let tmp20;
        if (re49.test(closure_0.charAt(closure_70))) {
          charAtResult = closure_0.charAt(closure_70);
          closure_70 = closure_70 + 1;
        } else {
          charAtResult = obj;
          if (0 === diff) {
            charAtResult = obj;
            if (closure_70 >= closure_71) {
              if (closure_70 > closure_71) {
                closure_71 = tmp14;
                closure_72 = [];
              }
              closure_72.push(tmp13);
              charAtResult = obj;
            }
          }
        }
        if (charAtResult !== obj) {
          let charAtResult1;
          if (re43.test(closure_0.charAt(closure_70))) {
            charAtResult1 = closure_0.charAt(closure_70);
            closure_70 = closure_70 + 1;
          } else {
            charAtResult1 = obj;
            if (0 === diff) {
              charAtResult1 = obj;
              if (closure_70 >= closure_71) {
                if (closure_70 > closure_71) {
                  closure_71 = tmp26;
                  closure_72 = [];
                }
                closure_72.push(tmp25);
                charAtResult1 = obj;
              }
            }
          }
          const items = [];
          let tmp31 = closure_0;
          let tmp32 = obj;
          if (charAtResult1 !== obj) {
            do {
              let arr8 = items.push(charAtResult1);
              if (re43.test(closure_0.charAt(closure_70))) {
                charAtResult2 = closure_0.charAt(closure_70);
                closure_70 = closure_70 + 1;
              } else {
                charAtResult2 = obj;
                if (0 === diff) {
                  let tmp40 = closure_70;
                  charAtResult2 = obj;
                  if (closure_70 >= closure_71) {
                    if (tmp40 > closure_71) {
                      closure_71 = tmp40;
                      closure_72 = [];
                    }
                    let arr9 = closure_72.push(tmp39);
                    charAtResult2 = obj;
                  }
                }
              }
              tmp32 = obj;
              charAtResult1 = charAtResult2;
              tmp31 = closure_0;
            } while (charAtResult2 !== obj);
          }
          if (items !== tmp32) {
            const items1 = [charAtResult, items];
            str2 = tmp31;
            substr = items1;
            tmp20 = tmp32;
          } else {
            closure_70 = tmp49;
            substr = obj;
            str2 = tmp31;
            tmp20 = tmp32;
          }
        } else {
          closure_70 = tmp49;
          substr = obj;
          str2 = closure_0;
          tmp20 = obj;
        }
        if (substr !== tmp20) {
          substr = str2.substring(tmp49, closure_70);
        }
        tmp3 = substr;
        tmp10 = tmp20;
      }
      let parsed = tmp3;
      if (tmp3 !== tmp10) {
        if (typeof peg$c50 === "function") {
          const _parseInt = parseInt;
          parsed = parseInt(tmp3, 10);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      return parsed;
    }
    function peg$parsechar() {
      let charAtResult;
      if (re52.test(closure_0.charAt(closure_70))) {
        charAtResult = closure_0.charAt(closure_70);
        closure_70 = closure_70 + 1;
      } else {
        charAtResult = re45;
        if (0 === diff) {
          charAtResult = re45;
          if (closure_70 >= closure_71) {
            if (closure_70 > closure_71) {
              closure_71 = tmp5;
              closure_72 = [];
            }
            closure_72.push(tmp4);
            charAtResult = re45;
          }
        }
      }
      if (charAtResult === re45) {
        let str2;
        if (closure_0.substr(closure_70, 2) === c54) {
          closure_70 = closure_70 + 2;
          str2 = tmp87;
        } else {
          str2 = re45;
          if (0 === diff) {
            str2 = re45;
            if (closure_70 >= closure_71) {
              if (closure_70 > closure_71) {
                closure_71 = tmp13;
                closure_72 = [];
              }
              closure_72.push(tmp12);
              str2 = re45;
            }
          }
        }
        if (str2 !== re45) {
          str2 = "\\";
          if (typeof peg$c55 !== "function") {
            throw new TypeError("Trying to call a non-function");
          }
        }
        if (str2 === re45) {
          let str3;
          if (closure_0.substr(closure_70, 2) === c57) {
            closure_70 = closure_70 + 2;
            str3 = tmp89;
          } else {
            str3 = re45;
            if (0 === diff) {
              str3 = re45;
              if (closure_70 >= closure_71) {
                if (closure_70 > closure_71) {
                  closure_71 = tmp20;
                  closure_72 = [];
                }
                closure_72.push(tmp19);
                str3 = re45;
              }
            }
          }
          if (str3 !== re45) {
            str3 = "\\#";
            if (typeof peg$c58 !== "function") {
              throw new TypeError("Trying to call a non-function");
            }
          }
          if (str3 === re45) {
            let str4;
            if (closure_0.substr(closure_70, 2) === c60) {
              closure_70 = closure_70 + 2;
              str4 = tmp91;
            } else {
              str4 = re45;
              if (0 === diff) {
                str4 = re45;
                if (closure_70 >= closure_71) {
                  if (closure_70 > closure_71) {
                    closure_71 = tmp27;
                    closure_72 = [];
                  }
                  closure_72.push(tmp26);
                  str4 = re45;
                }
              }
            }
            if (str4 !== re45) {
              str4 = "{";
              if (typeof peg$c61 !== "function") {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (str4 === re45) {
              let str5;
              if (closure_0.substr(closure_70, 2) === c63) {
                closure_70 = closure_70 + 2;
                str5 = tmp93;
              } else {
                str5 = re45;
                if (0 === diff) {
                  str5 = re45;
                  if (closure_70 >= closure_71) {
                    if (closure_70 > closure_71) {
                      closure_71 = tmp34;
                      closure_72 = [];
                    }
                    closure_72.push(tmp33);
                    str5 = re45;
                  }
                }
              }
              if (str5 !== re45) {
                str5 = "}";
                if (typeof peg$c64 !== "function") {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              if (str5 === re45) {
                let tmp40;
                let tmp46;
                if (closure_0.substr(closure_70, 2) === c66) {
                  closure_70 = closure_70 + 2;
                  tmp40 = tmp96;
                } else {
                  tmp40 = re45;
                  if (0 === diff) {
                    tmp40 = re45;
                    if (closure_70 >= closure_71) {
                      if (closure_70 > closure_71) {
                        closure_71 = tmp42;
                        closure_72 = [];
                      }
                      closure_72.push(tmp41);
                      tmp40 = re45;
                    }
                  }
                }
                if (tmp40 !== re45) {
                  let charAtResult1;
                  if (re45.test(closure_0.charAt(closure_70))) {
                    charAtResult1 = closure_0.charAt(closure_70);
                    closure_70 = closure_70 + 1;
                  } else {
                    charAtResult1 = re45;
                    if (0 === diff) {
                      charAtResult1 = re45;
                      if (closure_70 >= closure_71) {
                        if (closure_70 > closure_71) {
                          closure_71 = tmp52;
                          closure_72 = [];
                        }
                        closure_72.push(tmp51);
                        charAtResult1 = re45;
                      }
                    }
                  }
                  if (charAtResult1 !== re45) {
                    let charAtResult2;
                    if (re45.test(closure_0.charAt(closure_70))) {
                      charAtResult2 = closure_0.charAt(closure_70);
                      closure_70 = closure_70 + 1;
                    } else {
                      charAtResult2 = re45;
                      if (0 === diff) {
                        charAtResult2 = re45;
                        if (closure_70 >= closure_71) {
                          if (closure_70 > closure_71) {
                            closure_71 = tmp60;
                            closure_72 = [];
                          }
                          closure_72.push(tmp59);
                          charAtResult2 = re45;
                        }
                      }
                    }
                    if (charAtResult2 !== re45) {
                      let charAtResult3;
                      if (re45.test(closure_0.charAt(closure_70))) {
                        charAtResult3 = closure_0.charAt(closure_70);
                        closure_70 = closure_70 + 1;
                      } else {
                        charAtResult3 = re45;
                        if (0 === diff) {
                          charAtResult3 = re45;
                          if (closure_70 >= closure_71) {
                            if (closure_70 > closure_71) {
                              closure_71 = tmp68;
                              closure_72 = [];
                            }
                            closure_72.push(tmp67);
                            charAtResult3 = re45;
                          }
                        }
                      }
                      if (charAtResult3 !== re45) {
                        let charAtResult4;
                        let substr;
                        let fromCharCodeResult;
                        if (re45.test(closure_0.charAt(closure_70))) {
                          charAtResult4 = closure_0.charAt(closure_70);
                          closure_70 = closure_70 + 1;
                        } else {
                          charAtResult4 = re45;
                          if (0 === diff) {
                            charAtResult4 = re45;
                            if (closure_70 >= closure_71) {
                              if (closure_70 > closure_71) {
                                closure_71 = tmp76;
                                closure_72 = [];
                              }
                              closure_72.push(tmp75);
                              charAtResult4 = re45;
                            }
                          }
                        }
                        if (charAtResult4 !== re45) {
                          const items = [charAtResult1, charAtResult2, charAtResult3, charAtResult4];
                          substr = items;
                        }
                        if (substr !== re45) {
                          substr = closure_0.substring(tmp47, closure_70);
                        }
                        if (substr !== re45) {
                          if (typeof peg$c67 === "function") {
                            const _String = String;
                            const _parseInt = parseInt;
                            fromCharCodeResult = String.fromCharCode(parseInt(substr, 16));
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          closure_70 = tmp94;
                          fromCharCodeResult = re45;
                        }
                        tmp46 = fromCharCodeResult;
                      }
                    }
                  }
                  closure_70 = tmp47;
                  substr = re45;
                } else {
                  closure_70 = tmp94;
                  tmp46 = re45;
                }
                str5 = tmp46;
              }
              str4 = str5;
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
          tmp = peg$parsemessageFormatElement();
          tmp2 = obj;
        } while (tmp !== obj);
      }
      let tmp5 = items;
      if (items !== tmp2) {
        if (typeof peg$c1 === "function") {
          obj = { type: "messageFormatPattern", elements: items };
          tmp5 = obj;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      return tmp5;
    }
    let obj = {};
    let obj2 = { start: peg$parsestart };
    function peg$c1(arg0) {}
    function peg$c3(arg0) {}
    function peg$c4(arg0) {}
    const re6 = /^[^ \t\n\r,.+={}#]/;
    let closure_7 = { type: "class", value: "[^ \\t\\n\\r,.+={}#]", description: "[^ \\t\\n\\r,.+={}#]" };
    let c8 = "{";
    let closure_9 = { type: "literal", value: "{", description: '"{"' };
    let c10 = null;
    let c11 = ",";
    closure_12 = { type: "literal", value: ",", description: '","' };
    let c13 = "}";
    let closure_14 = { type: "literal", value: "}", description: '"}"' };
    function peg$c14(arg0, arg1) {}
    const number = "number";
    let closure_17 = { type: "literal", value: "number", description: '"number"' };
    const date = "date";
    let closure_19 = { type: "literal", value: "date", description: '"date"' };
    const time = "time";
    let closure_21 = { type: "literal", value: "time", description: '"time"' };
    function peg$c21(arg0, arg1) {}
    const plural = "plural";
    let closure_24 = { type: "literal", value: "plural", description: '"plural"' };
    function peg$c24(arg0) {}
    const selectordinal = "selectordinal";
    let closure_27 = { type: "literal", value: "selectordinal", description: '"selectordinal"' };
    function peg$c27(arg0) {}
    const select = "select";
    let closure_30 = { type: "literal", value: "select", description: '"select"' };
    function peg$c30(arg0) {}
    let c32 = "=";
    let closure_33 = { type: "literal", value: "=", description: '"="' };
    function peg$c33(arg0, arg1) {}
    let c35 = "offset:";
    let closure_36 = { type: "literal", value: "offset:", description: '"offset:"' };
    function peg$c36(arg0) {}
    function peg$c37(arg0, arg1) {}
    let closure_39 = { type: "other", description: "whitespace" };
    const re40 = /^[ \t\n\r]/;
    let closure_41 = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" };
    let closure_42 = { type: "other", description: "optionalWhitespace" };
    const re43 = /^[0-9]/;
    let closure_44 = { type: "class", value: "[0-9]", description: "[0-9]" };
    const re45 = /^[0-9a-f]/i;
    let closure_46 = { type: "class", value: "[0-9a-f]i", description: "[0-9a-f]i" };
    let c47 = "0";
    let closure_48 = { type: "literal", value: "0", description: '"0"' };
    const re49 = /^[1-9]/;
    let closure_50 = { type: "class", value: "[1-9]", description: "[1-9]" };
    function peg$c50(arg0) {}
    const re52 = /^[^{}\\\0-\x1F \t\n\r]/;
    let closure_53 = {
      type: "class",
      value: "[^{}\\\\\\0-\\x1F\u007F \\t\\n\\r]",
      description: "[^{}\\\\\\0-\\x1F\u007F \\t\\n\\r]",
    };
    let c54 = "\\\\";
    let closure_55 = { type: "literal", value: "\\\\", description: '"\\\\\\\\"' };
    function peg$c55() {}
    let c57 = "\\#";
    let closure_58 = { type: "literal", value: "\\#", description: '"\\\\#"' };
    function peg$c58() {}
    let c60 = "\\{";
    let closure_61 = { type: "literal", value: "\\{", description: '"\\\\{"' };
    function peg$c61() {}
    let c63 = "\\}";
    let closure_64 = { type: "literal", value: "\\}", description: '"\\\\}"' };
    function peg$c64() {}
    let c66 = "\\u";
    let closure_67 = { type: "literal", value: "\\u", description: '"\\\\u"' };
    function peg$c67(arg0) {}
    function peg$c68(arg0) {}
    let closure_70 = 0;
    let closure_71 = 0;
    let closure_72 = [];
    let diff = 0;
    if ("startRule" in tmp) {
      if (tmp.startRule in obj2) {
        peg$parsestart = obj2[tmp.startRule];
      } else {
        let tmp2 = globalThis;
        const _Error = Error;
        str = "Can't start parsing from rule \"";
        const self = this;
        let str2 = '".';
        const self2 = this;
        const error = new Error("Can't start parsing from rule \"" + tmp.startRule + '".');
        let tmp4 = error;
        throw error;
      }
    }
    const result = peg$parsestart();
    let tmp6 = result !== obj;
    if (tmp6) {
      const tmp7 = closure_70;
      if (closure_70 === str.length) {
        return result;
      }
    }
    if (tmp6) {
      let tmp8 = closure_70;
      tmp6 = closure_70 < str.length;
    }
    if (tmp6) {
      let tmp9 = closure_70;
      if (closure_70 >= closure_71) {
        if (tmp9 > closure_71) {
          closure_71 = tmp9;
          closure_72 = [];
        }
        let tmp10 = closure_72;
        let arr3 = closure_72.push({ type: "end", description: "end of input" });
      }
    }
    let obj3 = { line: 1, column: 1, seenCR: false };
    let arr = closure_72;
    let tmp12 = closure_71;
    let tmp13 = obj3;
    if (0 !== closure_71) {
      if (0 > tmp12) {
        obj3 = { line: 1, column: 1, seenCR: false };
      }
      let str3 = "\u2029";
      let str4 = "\u2028";
      let str5 = "\r";
      let str6 = "\n";
      let num = 0;
      tmp13 = obj3;
      if (0 < tmp12) {
        do {
          let charAtResult = str.charAt(num);
          let tmp15 = num;
          if ("\n" === charAtResult) {
            if (!obj3.seenCR) {
              obj3.line = obj3.line + 1;
            }
            obj3.column = 1;
            obj3.seenCR = false;
          } else {
            if ("\r" !== charAtResult) {
              if ("\u2028" !== charAtResult) {
                if ("\u2029" !== charAtResult) {
                  obj3.column = obj3.column + 1;
                  obj3.seenCR = false;
                }
              }
            }
            obj3.line = obj3.line + 1;
            obj3.column = 1;
            obj3.seenCR = true;
          }
          num = num + 1;
          tmp13 = obj3;
        } while (num < tmp12);
      }
    }
    let charAtResult1 = null;
    if (tmp12 < str.length) {
      charAtResult1 = str.charAt(tmp12);
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
        let tmp18 = num2;
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
    const text1 = `Expected ${tmp22}`;
    if (charAtResult1) {
      const str10 = charAtResult1.replace(/\\/g, "\\\\");
      const str12 = str10.replace(/"/g, '\\"');
      const str14 = str12.replace(/\x08/g, "\\b");
      const str16 = str14.replace(/\t/g, "\\t");
      const str18 = str16.replace(/\n/g, "\\n");
      const str20 = str18.replace(/\f/g, "\\f");
      const str22 = str20.replace(/\r/g, "\\r");
      const str23 = str22.replace(/[\x00-\x07\x0B\x0E\x0F]/g, (str) => {
        str = str.charCodeAt(0);
        const str2 = str.toString(16);
        return "\\x0" + str2.toUpperCase();
      });
      const str24 = str23.replace(/[\x10-\x1F\x80-\xFF]/g, (str) => {
        str = str.charCodeAt(0);
        const str2 = str.toString(16);
        return "\\x" + str2.toUpperCase();
      });
      const str25 = str24.replace(/[\u0180-\u0FFF]/g, (str) => {
        str = str.charCodeAt(0);
        const str2 = str.toString(16);
        return "\\u0" + str2.toUpperCase();
      });
      str9 = `${
        '"' +
        str25.replace(/[\u1080-\uFFFF]/g, (str) => {
          str = str.charCodeAt(0);
          const str2 = str.toString(16);
          return "\\u" + str2.toUpperCase();
        })
      }"`;
    }
    const combined = text1 + " but " + str9 + " found.";
    ({ line, column } = tmp13);
    let obj5 = Object.create(SyntaxError.prototype);
    let obj9 = {
      message: combined,
      expected: arr,
      found: charAtResult1,
      offset: tmp12,
      line,
      column,
      name: "SyntaxError",
    };
    throw obj9;
  },
};

export default obj;
