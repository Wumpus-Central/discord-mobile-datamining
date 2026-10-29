// === Module 12674: ? ===

// Module 12674
const require = arg1;
const dependencyMap = arg6;
function readMultiplierRange(min) {
  min.eat(123);
  let pos = min.pos;
  let tmp2 = pos;
  if (pos < min.str.length) {
    const charCodeAtResult = min.str.charCodeAt(pos);
    tmp2 = pos;
    while (charCodeAtResult >= 48) {
      tmp2 = pos;
      if (charCodeAtResult > 57) {
        break;
      } else {
        pos = pos + 1;
        tmp2 = pos;
        if (pos >= min.str.length) {
          break;
        }
      }
    }
  }
  if (min.pos === tmp2) {
    min.error("Expect a number");
  }
  const substringToPosResult = min.substringToPos(tmp2);
  let substringToPosResult1 = substringToPosResult;
  if (44 === min.charCode()) {
    min.pos = min.pos + 1;
    substringToPosResult1 = null;
    if (125 !== min.charCode()) {
      let pos2 = min.pos;
      let tmp8 = pos2;
      if (pos2 < min.str.length) {
        const charCodeAtResult1 = min.str.charCodeAt(pos2);
        tmp8 = pos2;
        while (charCodeAtResult1 >= 48) {
          tmp8 = pos2;
          if (charCodeAtResult1 > 57) {
            break;
          } else {
            pos2 = pos2 + 1;
            tmp8 = pos2;
            if (pos2 >= min.str.length) {
              break;
            }
          }
        }
      }
      if (min.pos === tmp8) {
        min.error("Expect a number");
      }
      substringToPosResult1 = min.substringToPos(tmp8);
    }
  }
  min.eat(125);
  const range = { min: Number(substringToPosResult), max: null };
  let num = 0;
  if (substringToPosResult1) {
    const _Number = Number;
    num = Number(substringToPosResult1);
  }
  range.max = num;
  return range;
}
function maybeMultiplied(charCode, implicitGroup) {
  let min = charCode;
  const charCodeResult = charCode.charCode();
  if (42 === charCodeResult) {
    min.pos = min.pos + 1;
    let range = { min: 0, max: 0 };
    let flag = false;
  } else if (43 === charCodeResult) {
    min.pos = min.pos + 1;
    range = { min: 1, max: 0 };
    flag = false;
  } else {
    if (63 === charCodeResult) {
      min.pos = min.pos + 1;
      range = { min: 0, max: 1 };
      flag = false;
    } else if (35 !== charCodeResult) {
      if (123 !== charCodeResult) {
        // // eliminated: always false
        return implicitGroup;
      } else {
        range = readMultiplierRange(min);
        flag = false;
      }
    }
    min.pos = min.pos + 1;
    if (min.charCode() === 123) {
      let range1 = readMultiplierRange(min);
    } else {
      range1 = { min: 1, max: 0 };
    }
    flag = true;
    range = range1;
  }
  const range2 = { type: "Multiplier", comma: flag, min: null, max: range.max, term: null };
  min = range.min;
  range2.min = min;
}
function readImplicitGroup(pos) {
  const items = [];
  const obj = {};
  pos = pos.pos;
  let iter = peek(pos);
  let tmp = null;
  let tmp2 = pos;
  if (iter) {
    let arr2 = pos;
    let type = tmp;
    while ("Spaces" === iter.type) {
      iter = peek(pos);
      pos = arr2;
      tmp = type;
      tmp2 = arr2;
    }
    if ("Combinator" === iter.type) {
      let tmp10 = null !== type;
      if (tmp10) {
        type = type.type;
        tmp10 = "Combinator" !== type;
      }
      if (!tmp10) {
        pos.pos = arr2;
        pos.error("Unexpected combinator");
      }
      obj[iter.value] = true;
    } else {
      if (tmp8) {
        obj[" "] = true;
        items.push({ type: "Combinator", value: " " });
      }
      tmp8 = null !== type && "Combinator" !== type.type;
    }
    arr2 = items.push(iter);
    const pos2 = pos.pos;
  }
  if (tmp14) {
    pos.pos = pos.pos - tmp2;
    pos.error("Unexpected combinator");
  }
  const obj2 = { type: "Group", terms: items, combinator: null, disallowEmpty: false, explicit: false };
  const keys = Object.keys(obj);
  const sorted = keys.sort((arg0, arg1) => dependencyMap[arg0] - dependencyMap[arg1]);
  let str;
  if (sorted.length > 0) {
    while (true) {
      let arr5 = sorted.shift();
      let num = 0;
      let num2 = 0;
      let num3 = 0;
      let num4 = 0;
      if (0 < items.length) {
        let iter2 = items[num2];
        let tmp17 = num;
        while ("Combinator" !== iter2.type) {
          num2 = num2 + 1;
          num = tmp17;
          num3 = tmp17;
          num4 = num2;
          continue;
        }
        if (iter2.value === arr5) {
          let diff = num;
          if (-1 === num) {
            diff = num2 - 1;
          }
          let spliceResult = items.splice(num2, 1);
          let diff1 = num2 - 1;
        } else {
          let tmp20 = -1 !== num;
          if (-1 !== num) {
            tmp20 = num2 - num > 1;
          }
          diff1 = num2;
          if (tmp20) {
            let obj3 = { type: "Group", terms: items.slice(num, num2), combinator: arr5, disallowEmpty: false, explicit: false };
            let spliceResult1 = items.splice(num, num2 - num, obj3);
            diff1 = num + 1;
          }
        }
      }
      let length = -1 !== num3;
      if (-1 !== num3) {
        length = sorted.length;
      }
      if (length) {
        let obj4 = { type: "Group", terms: items.slice(num3, num4), combinator: arr5, disallowEmpty: false, explicit: false };
        let spliceResult2 = items.splice(num3, num4 - num3, obj4);
      }
      str = arr5;
    }
  }
  if (!str) {
    str = " ";
  }
  obj2.combinator = str;
  return obj2;
}
function peek(charCode) {
  const charCodeResult = charCode.charCode();
  if (charCodeResult < 128) {
    if (1 === dependencyMap[charCodeResult]) {
      let pos6 = charCode.pos;
      let tmp72 = pos6;
      if (pos6 < charCode.str.length) {
        const charCodeAtResult = charCode.str.charCodeAt(pos6);
        tmp72 = pos6;
        while (charCodeAtResult < 128) {
          tmp72 = pos6;
          if (0 === dependencyMap[charCodeAtResult]) {
            break;
          } else {
            pos6 = pos6 + 1;
            tmp72 = pos6;
            if (pos6 >= charCode.str.length) {
              break;
            }
          }
        }
      }
      if (charCode.pos === tmp72) {
        charCode.error("Expect a keyword");
      }
      const substringToPosResult = charCode.substringToPos(tmp72);
      if (40 === charCode.charCode()) {
        charCode.pos = charCode.pos + 1;
        const obj2 = { type: "Function", name: substringToPosResult };
        let tmp79 = obj2;
      } else {
        const obj3 = { type: "Keyword", name: substringToPosResult };
        tmp79 = maybeMultiplied(charCode, obj3);
      }
      return tmp79;
    }
  }
  if (93 !== charCodeResult) {
    if (91 === charCodeResult) {
      charCode.eat(91);
      const tmp70 = readImplicitGroup(charCode);
      charCode.eat(93);
      tmp70.explicit = true;
      if (33 === charCode.charCode()) {
        charCode.pos = charCode.pos + 1;
        tmp70.disallowEmpty = true;
      }
      return maybeMultiplied(charCode, tmp70);
    } else if (60 === charCodeResult) {
      if (39 === charCode.nextCharCode()) {
        charCode.eat(60);
        charCode.eat(39);
        let pos5 = charCode.pos;
        let tmp58 = pos5;
        if (pos5 < charCode.str.length) {
          const charCodeAtResult1 = charCode.str.charCodeAt(pos5);
          tmp58 = pos5;
          while (charCodeAtResult1 < 128) {
            tmp58 = pos5;
            if (0 === dependencyMap[charCodeAtResult1]) {
              break;
            } else {
              pos5 = pos5 + 1;
              tmp58 = pos5;
              if (pos5 >= charCode.str.length) {
                break;
              }
            }
          }
        }
        if (charCode.pos === tmp58) {
          charCode.error("Expect a keyword");
        }
        charCode.eat(39);
        charCode.eat(62);
        const obj4 = { type: "Property", name: charCode.substringToPos(tmp58) };
        let tmp55 = maybeMultiplied(charCode, obj4);
        const substringToPosResult1 = charCode.substringToPos(tmp58);
      } else {
        charCode.eat(60);
        let pos2 = charCode.pos;
        let tmp24 = pos2;
        if (pos2 < charCode.str.length) {
          const charCodeAtResult2 = charCode.str.charCodeAt(pos2);
          tmp24 = pos2;
          while (charCodeAtResult2 < 128) {
            tmp24 = pos2;
            if (0 === dependencyMap[charCodeAtResult2]) {
              break;
            } else {
              pos2 = pos2 + 1;
              tmp24 = pos2;
              if (pos2 >= charCode.str.length) {
                break;
              }
            }
          }
        }
        if (charCode.pos === tmp24) {
          charCode.error("Expect a keyword");
        }
        let tmp28 = 40 === charCode.charCode();
        if (tmp28) {
          tmp28 = 41 === charCode.nextCharCode();
        }
        let text = charCode.substringToPos(tmp24);
        if (tmp28) {
          charCode.pos = charCode.pos + 2;
          text = `${tmp27}()`;
        }
        let tmp31 = null;
        if (91 === charCode.charCodeAt(charCode.findWsEnd(charCode.pos))) {
          charCode.substringToPos(charCode.findWsEnd(charCode.pos));
          charCode.eat(91);
          let num21 = 1;
          let num14 = 1;
          if (45 === charCode.charCode()) {
            charCode.peek();
            num14 = -1;
          }
          if (-1 === num14) {
            if (8734 === charCode.charCode()) {
              charCode.peek();
              let result1 = null;
            }
            charCode.substringToPos(charCode.findWsEnd(charCode.pos));
            charCode.eat(44);
            charCode.substringToPos(charCode.findWsEnd(charCode.pos));
            if (8734 === charCode.charCode()) {
              charCode.peek();
              let result = null;
            } else {
              if (45 === charCode.charCode()) {
                charCode.peek();
                num21 = -1;
              }
              let pos4 = charCode.pos;
              let tmp45 = pos4;
              if (pos4 < charCode.str.length) {
                const charCodeAtResult3 = charCode.str.charCodeAt(pos4);
                tmp45 = pos4;
                while (charCodeAtResult3 >= 48) {
                  tmp45 = pos4;
                  if (charCodeAtResult3 > 57) {
                    break;
                  } else {
                    pos4 = pos4 + 1;
                    tmp45 = pos4;
                    if (pos4 >= charCode.str.length) {
                      break;
                    }
                  }
                }
              }
              if (charCode.pos === tmp45) {
                charCode.error("Expect a number");
              }
              result = num21 * Number(charCode.substringToPos(tmp45));
            }
            charCode.eat(93);
            if (null !== result1) {
              const range = { type: "Range", min: result1, max: result };
              let tmp52 = range;
            } else {
              tmp52 = null;
            }
            tmp31 = tmp52;
          }
          let pos3 = charCode.pos;
          let tmp34 = pos3;
          if (pos3 < charCode.str.length) {
            const charCodeAtResult4 = charCode.str.charCodeAt(pos3);
            tmp34 = pos3;
            while (charCodeAtResult4 >= 48) {
              tmp34 = pos3;
              if (charCodeAtResult4 > 57) {
                break;
              } else {
                pos3 = pos3 + 1;
                tmp34 = pos3;
                if (pos3 >= charCode.str.length) {
                  break;
                }
              }
            }
          }
          if (charCode.pos === tmp34) {
            charCode.error("Expect a number");
          }
          result1 = num14 * Number(charCode.substringToPos(tmp34));
        }
        charCode.eat(62);
        const obj5 = { type: "Type", name: text, opts: tmp31 };
        tmp55 = maybeMultiplied(charCode, obj5);
        const substringToPosResult2 = charCode.substringToPos(tmp24);
      }
      return tmp55;
    } else if (124 === charCodeResult) {
      if (124 === charCode.nextCharCode()) {
        let sum = charCode.pos + 2;
      } else {
        sum = charCode.pos + 1;
      }
      const obj6 = { type: "Combinator", value: charCode.substringToPos(sum) };
      return obj6;
    } else if (38 === charCodeResult) {
      charCode.pos = charCode.pos + 1;
      charCode.eat(38);
      return { type: "Combinator", value: "&&" };
    } else if (44 === charCodeResult) {
      charCode.pos = charCode.pos + 1;
      return { type: "Comma" };
    } else if (39 === charCodeResult) {
      const index = charCode.str.indexOf("'", charCode.pos + 1);
      if (-1 === index) {
        charCode.pos = charCode.str.length;
        charCode.error("Expect an apostrophe");
      }
      const obj7 = { type: "String", value: charCode.substringToPos(index + 1) };
      return maybeMultiplied(charCode, obj7);
    } else {
      if (32 !== charCodeResult) {
        if (9 !== charCodeResult) {
          if (10 !== charCodeResult) {
            if (13 !== charCodeResult) {
              if (12 !== charCodeResult) {
                if (64 === charCodeResult) {
                  const nextCharCodeResult = charCode.nextCharCode();
                  if (nextCharCodeResult < 128) {
                    if (1 === dependencyMap[nextCharCodeResult]) {
                      charCode.pos = charCode.pos + 1;
                      let pos = charCode.pos;
                      let tmp12 = pos;
                      if (pos < charCode.str.length) {
                        const charCodeAtResult5 = charCode.str.charCodeAt(pos);
                        tmp12 = pos;
                        while (charCodeAtResult5 < 128) {
                          tmp12 = pos;
                          if (0 === dependencyMap[charCodeAtResult5]) {
                            break;
                          } else {
                            pos = pos + 1;
                            tmp12 = pos;
                            if (pos >= charCode.str.length) {
                              break;
                            }
                          }
                        }
                      }
                      if (charCode.pos === tmp12) {
                        charCode.error("Expect a keyword");
                      }
                      const obj8 = { type: "AtKeyword", name: charCode.substringToPos(tmp12) };
                      let tmp11 = obj8;
                    }
                    return tmp11;
                  }
                  const peekResult4 = charCode.peek();
                  tmp11 = null;
                  if ("" !== peekResult4) {
                    const obj9 = { type: "Token", value: peekResult4 };
                    tmp11 = obj9;
                  }
                } else if (42 !== charCodeResult) {
                  if (43 !== charCodeResult) {
                    if (63 !== charCodeResult) {
                      if (35 !== charCodeResult) {
                        if (33 !== charCodeResult) {
                          if (123 === charCodeResult) {
                            const peekResult5 = charCode.peek();
                            let tmp7 = null;
                            if ("" !== peekResult5) {
                              const obj10 = { type: "Token", value: peekResult5 };
                              tmp7 = obj10;
                            }
                            return tmp7;
                          } else {
                            const peekResult6 = charCode.peek();
                            let tmp4 = null;
                            if ("" !== peekResult6) {
                              const obj = { type: "Token", value: peekResult6 };
                              tmp4 = obj;
                            }
                            return tmp4;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const obj11 = { type: "Spaces", value: charCode.substringToPos(charCode.findWsEnd(charCode.pos)) };
      return obj11;
    }
  }
}
if (typeof Uint32Array === "function") {
  const _Uint32Array = Uint32Array;
  const uint32Array = new Uint32Array(128);
} else {
  const _Array = Array;
  const array = new Array(128);
}