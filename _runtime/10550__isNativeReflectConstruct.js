// === Module 10550: _isNativeReflectConstruct ===

// Module 10550 (_isNativeReflectConstruct)
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import zhStringToNumber from "zhStringToNumber" /* 10547 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const ZHHantTimeExpressionParser = require;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const keys = Object.keys(zhStringToNumber.NUMBER);
const text = `(?:由|從|自)?(?:(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)(?:[\\s,，]*)(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[${obj.join("")}`;
const keys1 = Object.keys(zhStringToNumber.NUMBER);
const text1 = `${`(?:由|從|自)?(?:(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)(?:[\\s,，]*)(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[${obj.join("")}`}]+)(?:\\s*)(?:點|時|:|：)(?:\\s*)(\\d+|半|正|整|[${obj2.join("")}`;
const keys2 = Object.keys(zhStringToNumber.NUMBER);
const regExp = new RegExp(text1 + "]+)?(?:\\s*)(?:\u5206|:|\uFF1A)?(?:\\s*)(\\d+|[" + keys2.join("") + "]+)?(?:\\s*)(?:\u79D2)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i");
const keys3 = Object.keys(zhStringToNumber.NUMBER);
const text2 = `(?:^\\s*(?:到|至|\\-|\\–|\\~|\\〜)\\s*)(?:(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)(?:[\\s,，]*)(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[${obj4.join("")}`;
const keys4 = Object.keys(zhStringToNumber.NUMBER);
const text3 = `${`(?:^\\s*(?:到|至|\\-|\\–|\\~|\\〜)\\s*)(?:(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)(?:[\\s,，]*)(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[${obj4.join("")}`}]+)(?:\\s*)(?:點|時|:|：)(?:\\s*)(\\d+|半|正|整|[${obj5.join("")}`;
const keys5 = Object.keys(zhStringToNumber.NUMBER);
const regExp1 = new RegExp(text3 + "]+)?(?:\\s*)(?:\u5206|:|\uFF1A)?(?:\\s*)(\\d+|[" + keys5.join("") + "]+)?(?:\\s*)(?:\u79D2)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i");
class ZHHantTimeExpressionParser {
  constructor() {
    self = this;
    tmp = closure_2(this, ZHHantTimeExpressionParser);
    tmp2 = closure_4;
    obj = closure_4(ZHHantTimeExpressionParser);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZHHantTimeExpressionParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
obj = {
  key: "innerPattern",
  value: function innerPattern() {
    return regExp;
  }
};
const items = [
  obj,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingResult, index) {
      if (index.index > 0) {
        let str = createParsingResult.text[index.index - 1];
        if (str.match(/\w/)) {
          let parsingResult = null;
          return null;
        }
      }
      parsingResult = createParsingResult.createParsingResult(index.index, index[0]);
      const refDate = createParsingResult.refDate;
      const date = new Date(refDate.getTime());
      if (index[1]) {
        if ("\u660E" != index[1]) {
          if ("\u807D" != tmp14) {
            if ("\u6628" != tmp14) {
              if ("\u5C0B" != tmp14) {
                if ("\u7434" != tmp14) {
                  if ("\u524D" == tmp14) {
                    date.setDate(date.getDate() - 2);
                  } else {
                    if ("\u5927\u524D" == tmp14) {
                      date.setDate(date.getDate() - 3);
                    } else if ("\u5F8C" != tmp14) {
                      if ("\u5927\u5F8C" == tmp14) {
                        parsingResult = date.setDate(date.getDate() + 3);
                      }
                    }
                    date.setDate(date.getDate() + 2);
                  }
                }
              }
            }
            date.setDate(date.getDate() - 1);
          }
          const start7 = parsingResult.start;
          start7.assign("day", date.getDate());
          const start8 = parsingResult.start;
          start8.assign("month", date.getMonth() + 1);
          const start9 = parsingResult.start;
          start9.assign("year", date.getFullYear());
        }
        const refDate2 = createParsingResult.refDate;
        if (refDate2.getHours() > 1) {
          date.setDate(date.getDate() + 1);
        }
      } else {
        if (index[4]) {
          if ("\u660E" != index[4]) {
            if ("\u807D" != tmp5) {
              if ("\u6628" != tmp5) {
                if ("\u5C0B" != tmp5) {
                  if ("\u7434" != tmp5) {
                    if ("\u524D" == tmp5) {
                      date.setDate(date.getDate() - 2);
                    } else if ("\u5927\u524D" == tmp5) {
                      date.setDate(date.getDate() - 3);
                    } else if ("\u5F8C" == tmp5) {
                      date.setDate(date.getDate() + 2);
                    } else if ("\u5927\u5F8C" == tmp5) {
                      parsingResult = date.setDate(date.getDate() + 3);
                    }
                  }
                }
              }
              date.setDate(date.getDate() - 1);
            }
            const start4 = parsingResult.start;
            start4.assign("day", date.getDate());
            const start5 = parsingResult.start;
            start5.assign("month", date.getMonth() + 1);
            const start6 = parsingResult.start;
            start6.assign("year", date.getFullYear());
          }
          date.setDate(date.getDate() + 1);
        } else {
          const start = parsingResult.start;
          start.imply("day", date.getDate());
          const start2 = parsingResult.start;
          start2.imply("month", date.getMonth() + 1);
          const start3 = parsingResult.start;
          start3.imply("year", date.getFullYear());
        }
        if (index[8]) {
          const _parseInt = parseInt;
          const parsed = parseInt(index[8]);
          const _isNaN = isNaN;
          let zhStringToNumberResult = parsed;
          if (isNaN(parsed)) {
            zhStringToNumberResult = ZHHantTimeExpressionParser(10547).zhStringToNumber(index[8]);
          }
          if (zhStringToNumberResult >= 60) {
            parsingResult = null;
            return null;
          } else {
            const start27 = parsingResult.start;
            parsingResult = start27.assign("second", zhStringToNumberResult);
          }
        }
        const _parseInt2 = parseInt;
        let parsed1 = parseInt(index[6]);
        const _isNaN2 = isNaN;
        if (isNaN(parsed1)) {
          parsed1 = ZHHantTimeExpressionParser(10547).zhStringToNumber(index[6]);
        }
        if (index[7]) {
          let num17 = 30;
          let rounded = parsed1;
          if ("\u534A" != index[7]) {
            num17 = 0;
            rounded = parsed1;
            if ("\u6B63" != index[7]) {
              num17 = 0;
              rounded = parsed1;
              if ("\u6574" != index[7]) {
                const _parseInt3 = parseInt;
                const parsed2 = parseInt(index[7]);
                const _isNaN3 = isNaN;
                num17 = parsed2;
                rounded = parsed1;
                if (isNaN(parsed2)) {
                  num17 = ZHHantTimeExpressionParser(10547).zhStringToNumber(index[7]);
                  rounded = parsed1;
                }
              }
            }
          }
        } else {
          num17 = 0;
          rounded = parsed1;
          if (parsed1 > 100) {
            num17 = parsed1 % 100;
            const _Math = Math;
            rounded = Math.floor(parsed1 / 100);
          }
        }
        if (num17 >= 60) {
          parsingResult = null;
          return null;
        } else if (rounded > 24) {
          parsingResult = null;
          return null;
        } else {
          let num39 = -1;
          let num19 = -1;
          if (rounded >= 12) {
            num19 = 1;
          }
          if (index[9]) {
            if (rounded > 12) {
              parsingResult = null;
              return null;
            } else {
              parsingResult = index[9][0].toLowerCase();
              let tmp42 = rounded;
              if ("a" == parsingResult) {
                let num22 = rounded;
                if (12 == rounded) {
                  num22 = 0;
                }
                tmp42 = num22;
                num19 = 0;
              }
              let num20 = num19;
              let num21 = tmp42;
              if ("p" == parsingResult) {
                let sum = tmp42;
                if (12 != tmp42) {
                  sum = tmp42 + 12;
                }
                num20 = 1;
                num21 = sum;
              }
              const str98 = index[9][0];
            }
          } else if (index[2]) {
            const first = index[2][0];
            if ("\u671D" != first) {
              if ("\u65E9" != first) {
                num20 = num19;
                num21 = rounded;
                if ("\u665A" == first) {
                  let sum1 = rounded;
                  if (12 != rounded) {
                    sum1 = rounded + 12;
                  }
                  num20 = 1;
                  num21 = sum1;
                }
              }
            }
            num20 = 0;
            num21 = rounded;
            if (12 == rounded) {
              num20 = 0;
              num21 = 0;
            }
          } else if (index[3]) {
            const first1 = index[3][0];
            if ("\u4E0A" != first1) {
              if ("\u671D" != first1) {
                if ("\u65E9" != first1) {
                  if ("\u51CC" != first1) {
                    let tmp38 = "\u4E0B" != first1;
                    if (tmp38) {
                      tmp38 = "\u664F" != first1;
                    }
                    if (tmp38) {
                      tmp38 = "\u665A" != first1;
                    }
                    num20 = num19;
                    num21 = rounded;
                    if (!tmp38) {
                      let sum2 = rounded;
                      if (12 != rounded) {
                        sum2 = rounded + 12;
                      }
                      num20 = 1;
                      num21 = sum2;
                    }
                  }
                }
              }
            }
            num20 = 0;
            num21 = rounded;
            if (12 == rounded) {
              num20 = 0;
              num21 = 0;
            }
          } else {
            num20 = num19;
            num21 = rounded;
            if (index[5]) {
              const first2 = index[5][0];
              if ("\u4E0A" != first2) {
                if ("\u671D" != first2) {
                  if ("\u65E9" != first2) {
                    if ("\u51CC" != first2) {
                      let tmp35 = "\u4E0B" != first2;
                      if (tmp35) {
                        tmp35 = "\u664F" != first2;
                      }
                      if (tmp35) {
                        tmp35 = "\u665A" != first2;
                      }
                      num20 = num19;
                      num21 = rounded;
                      if (!tmp35) {
                        let sum3 = rounded;
                        if (12 != rounded) {
                          sum3 = rounded + 12;
                        }
                        num20 = 1;
                        num21 = sum3;
                      }
                    }
                  }
                }
              }
              num20 = 0;
              num21 = rounded;
              if (12 == rounded) {
                num20 = 0;
                num21 = 0;
              }
            }
          }
          const start10 = parsingResult.start;
          start10.assign("hour", num21);
          const start11 = parsingResult.start;
          start11.assign("minute", num17);
          if (0 <= num20) {
            const start14 = parsingResult.start;
            start14.assign("meridiem", num20);
          } else if (num21 < 12) {
            const start13 = parsingResult.start;
            start13.imply("meridiem", 0);
          } else {
            const start12 = parsingResult.start;
            start12.imply("meridiem", 1);
          }
          const match = regExp1.exec(createParsingResult.text.substring(parsingResult.index + parsingResult.text.length));
          if (match) {
            const _Date = Date;
            let date1 = new Date(date.getTime());
            parsingResult.end = createParsingResult.createParsingComponents();
            if (match[1]) {
              if ("\u660E" != match[1]) {
                str = "\u807D";
                if ("\u807D" != tmp66) {
                  str = "\u6628";
                  if ("\u6628" != tmp66) {
                    str = "\u5C0B";
                    if ("\u5C0B" != tmp66) {
                      str = "\u7434";
                      if ("\u7434" != tmp66) {
                        str = "\u524D";
                        if ("\u524D" == tmp66) {
                          date1.setDate(date1.getDate() - 2);
                        } else {
                          str = "\u5927\u524D";
                          if ("\u5927\u524D" == tmp66) {
                            date1.setDate(date1.getDate() - 3);
                          } else if ("\u5F8C" != tmp66) {
                            if ("\u5927\u5F8C" == tmp66) {
                              parsingResult = date1.setDate(date1.getDate() + 3);
                            }
                          }
                          date1.setDate(date1.getDate() + 2);
                        }
                      }
                    }
                  }
                  date1.setDate(date1.getDate() - 1);
                }
                const end7 = parsingResult.end;
                end7.assign("day", date1.getDate());
                const end8 = parsingResult.end;
                end8.assign("month", date1.getMonth() + 1);
                const end9 = parsingResult.end;
                date1 = date1.getFullYear();
                end9.assign("year", date1);
              }
              const refDate3 = createParsingResult.refDate;
              if (refDate3.getHours() > 1) {
                date1.setDate(date1.getDate() + 1);
              }
            } else {
              if (match[4]) {
                if ("\u660E" != match[4]) {
                  str = "\u807D";
                  if ("\u807D" != tmp57) {
                    str = "\u6628";
                    if ("\u6628" != tmp57) {
                      str = "\u5C0B";
                      if ("\u5C0B" != tmp57) {
                        str = "\u7434";
                        if ("\u7434" != tmp57) {
                          str = "\u524D";
                          if ("\u524D" == tmp57) {
                            date1.setDate(date1.getDate() - 2);
                          } else {
                            str = "\u5927\u524D";
                            if ("\u5927\u524D" == tmp57) {
                              date1.setDate(date1.getDate() - 3);
                            } else if ("\u5F8C" == tmp57) {
                              date1.setDate(date1.getDate() + 2);
                            } else if ("\u5927\u5F8C" == tmp57) {
                              parsingResult = date1.setDate(date1.getDate() + 3);
                            }
                          }
                        }
                      }
                    }
                    date1.setDate(date1.getDate() - 1);
                  }
                  const end4 = parsingResult.end;
                  end4.assign("day", date1.getDate());
                  const end5 = parsingResult.end;
                  end5.assign("month", date1.getMonth() + 1);
                  const end6 = parsingResult.end;
                  end6.assign("year", date1.getFullYear());
                }
                date1.setDate(date1.getDate() + 1);
              } else {
                const end = parsingResult.end;
                end.imply("day", date1.getDate());
                const end2 = parsingResult.end;
                end2.imply("month", date1.getMonth() + 1);
                const end3 = parsingResult.end;
                end3.imply("year", date1.getFullYear());
              }
              if (match[8]) {
                const _parseInt4 = parseInt;
                const parsed3 = parseInt(match[8]);
                const _isNaN4 = isNaN;
                let zhStringToNumberResult1 = parsed3;
                if (isNaN(parsed3)) {
                  zhStringToNumberResult1 = ZHHantTimeExpressionParser(10547).zhStringToNumber(match[8]);
                }
                if (zhStringToNumberResult1 >= 60) {
                  parsingResult = null;
                  return null;
                } else {
                  const end18 = parsingResult.end;
                  str = "second";
                  parsingResult = end18.assign("second", zhStringToNumberResult1);
                }
              }
              const _parseInt5 = parseInt;
              let parsed4 = parseInt(match[6]);
              const _isNaN5 = isNaN;
              if (isNaN(parsed4)) {
                parsed4 = ZHHantTimeExpressionParser(10547).zhStringToNumber(match[6]);
              }
              if (match[7]) {
                let num38 = 30;
                let rounded1 = parsed4;
                if ("\u534A" != match[7]) {
                  num38 = 0;
                  rounded1 = parsed4;
                  if ("\u6B63" != match[7]) {
                    num38 = 0;
                    rounded1 = parsed4;
                    if ("\u6574" != match[7]) {
                      const _parseInt6 = parseInt;
                      const parsed5 = parseInt(match[7]);
                      const _isNaN6 = isNaN;
                      num38 = parsed5;
                      rounded1 = parsed4;
                      if (isNaN(parsed5)) {
                        num38 = ZHHantTimeExpressionParser(10547).zhStringToNumber(match[7]);
                        rounded1 = parsed4;
                      }
                    }
                  }
                }
              } else {
                num38 = 0;
                rounded1 = parsed4;
                if (parsed4 > 100) {
                  num38 = parsed4 % 100;
                  const _Math2 = Math;
                  rounded1 = Math.floor(parsed4 / 100);
                }
              }
              if (num38 >= 60) {
                parsingResult = null;
                return null;
              } else if (rounded1 > 24) {
                parsingResult = null;
                return null;
              } else {
                if (rounded1 >= 12) {
                  num39 = 1;
                }
                if (match[9]) {
                  if (rounded1 > 12) {
                    parsingResult = null;
                    return null;
                  } else {
                    str = match[9][0];
                    parsingResult = str.toLowerCase();
                    str = "a";
                    let tmp94 = rounded1;
                    if ("a" == parsingResult) {
                      let num42 = rounded1;
                      if (12 == rounded1) {
                        num42 = 0;
                      }
                      tmp94 = num42;
                      num39 = 0;
                    }
                    let tmp95 = tmp94;
                    if ("p" == parsingResult) {
                      let sum4 = tmp94;
                      if (12 != tmp94) {
                        sum4 = tmp94 + 12;
                      }
                      num39 = 1;
                      tmp95 = sum4;
                    }
                    const start15 = parsingResult.start;
                    let num40 = num39;
                    let num41 = tmp95;
                    if (!start15.isCertain("meridiem")) {
                      if (0 === num39) {
                        const start20 = parsingResult.start;
                        start20.imply("meridiem", 0);
                        const start21 = parsingResult.start;
                        num40 = num39;
                        num41 = tmp95;
                        if (12 == start21.get("hour")) {
                          const start22 = parsingResult.start;
                          parsingResult = start22.assign("hour", 0);
                          num40 = num39;
                          num41 = tmp95;
                        }
                      } else {
                        const start16 = parsingResult.start;
                        start16.imply("meridiem", 1);
                        const start17 = parsingResult.start;
                        num40 = num39;
                        num41 = tmp95;
                        if (12 != start17.get("hour")) {
                          ({ start: start18, start: start19 } = parsingResult);
                          start18.assign("hour", start19.get("hour") + 12);
                          num40 = num39;
                          num41 = tmp95;
                        }
                      }
                    }
                  }
                } else if (match[2]) {
                  const first3 = match[2][0];
                  if ("\u671D" != first3) {
                    if ("\u65E9" != first3) {
                      num40 = num39;
                      num41 = rounded1;
                      if ("\u665A" == first3) {
                        let sum5 = rounded1;
                        if (12 != rounded1) {
                          sum5 = rounded1 + 12;
                        }
                        num40 = 1;
                        num41 = sum5;
                      }
                    }
                  }
                  num40 = 0;
                  num41 = rounded1;
                  if (12 == rounded1) {
                    num40 = 0;
                    num41 = 0;
                  }
                } else if (match[3]) {
                  const first4 = match[3][0];
                  if ("\u4E0A" != first4) {
                    if ("\u671D" != first4) {
                      if ("\u65E9" != first4) {
                        if ("\u51CC" != first4) {
                          let tmp90 = "\u4E0B" != first4;
                          if (tmp90) {
                            tmp90 = "\u664F" != first4;
                          }
                          if (tmp90) {
                            tmp90 = "\u665A" != first4;
                          }
                          num40 = num39;
                          num41 = rounded1;
                          if (!tmp90) {
                            let sum6 = rounded1;
                            if (12 != rounded1) {
                              sum6 = rounded1 + 12;
                            }
                            num40 = 1;
                            num41 = sum6;
                          }
                        }
                      }
                    }
                  }
                  num40 = 0;
                  num41 = rounded1;
                  if (12 == rounded1) {
                    num40 = 0;
                    num41 = 0;
                  }
                } else {
                  num40 = num39;
                  num41 = rounded1;
                  if (match[5]) {
                    const first5 = match[5][0];
                    if ("\u4E0A" != first5) {
                      if ("\u671D" != first5) {
                        if ("\u65E9" != first5) {
                          if ("\u51CC" != first5) {
                            let tmp87 = "\u4E0B" != first5;
                            if (tmp87) {
                              tmp87 = "\u664F" != first5;
                            }
                            if (tmp87) {
                              tmp87 = "\u665A" != first5;
                            }
                            num40 = num39;
                            num41 = rounded1;
                            if (!tmp87) {
                              let sum7 = rounded1;
                              if (12 != rounded1) {
                                sum7 = rounded1 + 12;
                              }
                              num40 = 1;
                              num41 = sum7;
                            }
                          }
                        }
                      }
                    }
                    num40 = 0;
                    num41 = rounded1;
                    if (12 == rounded1) {
                      num40 = 0;
                      num41 = 0;
                    }
                  }
                }
                parsingResult.text = parsingResult.text + match[0];
                const end10 = parsingResult.end;
                parsingResult = end10.assign("hour", num41);
                const end11 = parsingResult.end;
                parsingResult = end11.assign("minute", num38);
                if (0 <= num40) {
                  const end14 = parsingResult.end;
                  parsingResult = end14.assign("meridiem", num40);
                } else {
                  const start23 = parsingResult.start;
                  if (start23.isCertain("meridiem")) {
                    const start24 = parsingResult.start;
                    if (1 == start24.get("meridiem")) {
                      const start25 = parsingResult.start;
                      if (start25.get("hour") > num41) {
                        const end13 = parsingResult.end;
                        parsingResult = end13.imply("meridiem", 0);
                      }
                    }
                  }
                  if (num41 > 12) {
                    const end12 = parsingResult.end;
                    parsingResult = end12.imply("meridiem", 1);
                  }
                }
                const end15 = parsingResult.end;
                const start26 = parsingResult.start;
                parsingResult = end15.date().getTime();
                const dateResult = end15.date();
                if (parsingResult < dateResult1.getTime()) {
                  ({ end: end16, end: end17 } = parsingResult);
                  parsingResult = end16.imply("day", end17.get("day") + 1);
                }
                return parsingResult;
              }
            }
          } else {
            let tmp51 = null;
            if (!str44.match(/^\d+$/)) {
              tmp51 = parsingResult;
            }
            return tmp51;
          }
          const str43 = createParsingResult.text;
        }
      }
    }
  }
];

export default _createClass(ZHHantTimeExpressionParser, items);