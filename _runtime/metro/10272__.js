// === Module 10272: ? ===

// Module 10272
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10168 */;
import _mod10269 from "module_10269" /* 10269 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let obj;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const keys = Object.keys(_mod10269.NUMBER);
const text = `(?:从|自)?(?:(今|明|前|大前|后|大后|昨)(早|朝|晚)|(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|后|大后|昨)(?:日|天)(?:[\\s,，]*)(?:(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[${obj.join("")}`;
const keys1 = Object.keys(_mod10269.NUMBER);
const text1 = `${`(?:从|自)?(?:(今|明|前|大前|后|大后|昨)(早|朝|晚)|(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|后|大后|昨)(?:日|天)(?:[\\s,，]*)(?:(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[${obj.join("")}`}]+)(?:\\s*)(?:点|时|:|：)(?:\\s*)(\\d+|半|正|整|[${obj2.join("")}`;
const keys2 = Object.keys(_mod10269.NUMBER);
const regExp = new RegExp(text1 + "]+)?(?:\\s*)(?:\u5206|:|\uFF1A)?(?:\\s*)(\\d+|[" + keys2.join("") + "]+)?(?:\\s*)(?:\u79D2)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i");
const keys3 = Object.keys(_mod10269.NUMBER);
const text2 = `(?:^\\s*(?:到|至|\\-|\\–|\\~|\\〜)\\s*)(?:(今|明|前|大前|后|大后|昨)(早|朝|晚)|(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|后|大后|昨)(?:日|天)(?:[\\s,，]*)(?:(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[${obj4.join("")}`;
const keys4 = Object.keys(_mod10269.NUMBER);
const text3 = `${`(?:^\\s*(?:到|至|\\-|\\–|\\~|\\〜)\\s*)(?:(今|明|前|大前|后|大后|昨)(早|朝|晚)|(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|后|大后|昨)(?:日|天)(?:[\\s,，]*)(?:(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[${obj4.join("")}`}]+)(?:\\s*)(?:点|时|:|：)(?:\\s*)(\\d+|半|正|整|[${obj5.join("")}`;
const keys5 = Object.keys(_mod10269.NUMBER);
const regExp1 = new RegExp(text3 + "]+)?(?:\\s*)(?:\u5206|:|\uFF1A)?(?:\\s*)(\\d+|[" + keys5.join("") + "]+)?(?:\\s*)(?:\u79D2)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i");
class ZHHansTimeExpressionParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZHHansTimeExpressionParser);
    const obj = _getPrototypeOf(ZHHansTimeExpressionParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(ZHHansTimeExpressionParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return regExp;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingResult, index) {
      let end16;
      let end17;
      let num17;
      let rounded;
      let start18;
      let start19;
      if (index.index > 0) {
        const str = createParsingResult.text[index.index - 1];
        if (str.match(/\w/)) {
          return null;
        }
      }
      const parsingResult = createParsingResult.createParsingResult(index.index, index[0]);
      const refDate = createParsingResult.refDate;
      const date = new Date(refDate.getTime());
      if (index[1]) {
        if ("\u660E" == index[1]) {
          const refDate2 = createParsingResult.refDate;
          if (refDate2.getHours() > 1) {
            date.setDate(date.getDate() + 1);
          }
        } else if ("\u6628" == index[1]) {
          date.setDate(date.getDate() - 1);
        } else if ("\u524D" == index[1]) {
          date.setDate(date.getDate() - 2);
        } else if ("\u5927\u524D" == index[1]) {
          date.setDate(date.getDate() - 3);
        } else if ("\u540E" == index[1]) {
          date.setDate(date.getDate() + 2);
        } else if ("\u5927\u540E" == index[1]) {
          date.setDate(date.getDate() + 3);
        }
        const start7 = parsingResult.start;
        start7.assign("day", date.getDate());
        const start8 = parsingResult.start;
        start8.assign("month", date.getMonth() + 1);
        const start9 = parsingResult.start;
        start9.assign("year", date.getFullYear());
      } else if (index[4]) {
        if ("\u660E" == index[4]) {
          date.setDate(date.getDate() + 1);
        } else if ("\u6628" == index[4]) {
          date.setDate(date.getDate() - 1);
        } else if ("\u524D" == index[4]) {
          date.setDate(date.getDate() - 2);
        } else if ("\u5927\u524D" == index[4]) {
          date.setDate(date.getDate() - 3);
        } else if ("\u540E" == index[4]) {
          date.setDate(date.getDate() + 2);
        } else if ("\u5927\u540E" == index[4]) {
          date.setDate(date.getDate() + 3);
        }
        const start4 = parsingResult.start;
        start4.assign("day", date.getDate());
        const start5 = parsingResult.start;
        start5.assign("month", date.getMonth() + 1);
        const start6 = parsingResult.start;
        start6.assign("year", date.getFullYear());
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
          zhStringToNumberResult = _mod10269.zhStringToNumber(index[8]);
        }
        if (zhStringToNumberResult >= 60) {
          return null;
        } else {
          const start27 = parsingResult.start;
          start27.assign("second", zhStringToNumberResult);
        }
      }
      let parsed1 = parseInt(index[6]);
      if (isNaN(parsed1)) {
        parsed1 = _mod10269.zhStringToNumber(index[6]);
      }
      if (index[7]) {
        num17 = 30;
        rounded = parsed1;
        if ("\u534A" != index[7]) {
          num17 = 0;
          rounded = parsed1;
          if ("\u6B63" != index[7]) {
            num17 = 0;
            rounded = parsed1;
            if ("\u6574" != index[7]) {
              const _parseInt2 = parseInt;
              const parsed2 = parseInt(index[7]);
              const _isNaN2 = isNaN;
              num17 = parsed2;
              rounded = parsed1;
              if (isNaN(parsed2)) {
                num17 = _mod10269.zhStringToNumber(index[7]);
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
        return null;
      } else if (rounded > 24) {
        return null;
      } else {
        let num19;
        let num20;
        let num38 = -1;
        let num18 = -1;
        if (rounded >= 12) {
          num18 = 1;
        }
        if (index[9]) {
          if (rounded > 12) {
            return null;
          } else {
            const str82 = index[9][0];
            const formatted = str82.toLowerCase();
            let tmp42 = rounded;
            if ("a" == formatted) {
              let num21 = rounded;
              if (12 == rounded) {
                num21 = 0;
              }
              tmp42 = num21;
              num18 = 0;
            }
            num19 = num18;
            num20 = tmp42;
            if ("p" == formatted) {
              let sum = tmp42;
              if (12 != tmp42) {
                sum = tmp42 + 12;
              }
              num19 = 1;
              num20 = sum;
            }
          }
        } else if (index[2]) {
          const first = index[2][0];
          if ("\u65E9" == first) {
            num19 = 0;
            num20 = rounded;
            if (12 == rounded) {
              num19 = 0;
              num20 = 0;
            }
          } else {
            num19 = num18;
            num20 = rounded;
            if ("\u665A" == first) {
              let sum1 = rounded;
              if (12 != rounded) {
                sum1 = rounded + 12;
              }
              num19 = 1;
              num20 = sum1;
            }
          }
        } else if (index[3]) {
          const first1 = index[3][0];
          if ("\u4E0A" != first1) {
            if ("\u65E9" != first1) {
              if ("\u51CC" != first1) {
                num19 = num18;
                num20 = rounded;
                const tmp38 = "\u4E0B" != first1 && "\u665A" != first1;
                if (!tmp38) {
                  let sum2 = rounded;
                  if (12 != rounded) {
                    sum2 = rounded + 12;
                  }
                  num19 = 1;
                  num20 = sum2;
                }
              }
            }
          }
          num19 = 0;
          num20 = rounded;
          if (12 == rounded) {
            num19 = 0;
            num20 = 0;
          }
        } else {
          num19 = num18;
          num20 = rounded;
          if (index[5]) {
            const first2 = index[5][0];
            if ("\u4E0A" != first2) {
              if ("\u65E9" != first2) {
                if ("\u51CC" != first2) {
                  num19 = num18;
                  num20 = rounded;
                  const tmp35 = "\u4E0B" != first2 && "\u665A" != first2;
                  if (!tmp35) {
                    let sum3 = rounded;
                    if (12 != rounded) {
                      sum3 = rounded + 12;
                    }
                    num19 = 1;
                    num20 = sum3;
                  }
                }
              }
            }
            num19 = 0;
            num20 = rounded;
            if (12 == rounded) {
              num19 = 0;
              num20 = 0;
            }
          }
        }
        const start10 = parsingResult.start;
        start10.assign("hour", num20);
        const start11 = parsingResult.start;
        start11.assign("minute", num17);
        if (0 <= num19) {
          const start14 = parsingResult.start;
          start14.assign("meridiem", num19);
        } else if (num20 < 12) {
          const start13 = parsingResult.start;
          start13.imply("meridiem", 0);
        } else {
          const start12 = parsingResult.start;
          start12.imply("meridiem", 1);
        }
        const str38 = createParsingResult.text;
        const match = regExp1.exec(str38.substring(parsingResult.index + parsingResult.text.length));
        if (match) {
          let num37;
          let rounded1;
          const _Date = Date;
          const self = this;
          const self2 = this;
          const date1 = new Date(date.getTime());
          parsingResult.end = createParsingResult.createParsingComponents();
          if (match[1]) {
            if ("\u660E" == match[1]) {
              const refDate3 = createParsingResult.refDate;
              if (refDate3.getHours() > 1) {
                date1.setDate(date1.getDate() + 1);
              }
            } else if ("\u6628" == match[1]) {
              date1.setDate(date1.getDate() - 1);
            } else if ("\u524D" == match[1]) {
              date1.setDate(date1.getDate() - 2);
            } else if ("\u5927\u524D" == match[1]) {
              date1.setDate(date1.getDate() - 3);
            } else if ("\u540E" == match[1]) {
              date1.setDate(date1.getDate() + 2);
            } else if ("\u5927\u540E" == match[1]) {
              date1.setDate(date1.getDate() + 3);
            }
            const end7 = parsingResult.end;
            end7.assign("day", date1.getDate());
            const end8 = parsingResult.end;
            end8.assign("month", date1.getMonth() + 1);
            const end9 = parsingResult.end;
            end9.assign("year", date1.getFullYear());
          } else if (match[4]) {
            if ("\u660E" == match[4]) {
              date1.setDate(date1.getDate() + 1);
            } else if ("\u6628" == match[4]) {
              date1.setDate(date1.getDate() - 1);
            } else if ("\u524D" == match[4]) {
              date1.setDate(date1.getDate() - 2);
            } else if ("\u5927\u524D" == match[4]) {
              date1.setDate(date1.getDate() - 3);
            } else if ("\u540E" == match[4]) {
              date1.setDate(date1.getDate() + 2);
            } else if ("\u5927\u540E" == match[4]) {
              date1.setDate(date1.getDate() + 3);
            }
            const end4 = parsingResult.end;
            end4.assign("day", date1.getDate());
            const end5 = parsingResult.end;
            end5.assign("month", date1.getMonth() + 1);
            const end6 = parsingResult.end;
            end6.assign("year", date1.getFullYear());
          } else {
            const end = parsingResult.end;
            end.imply("day", date1.getDate());
            const end2 = parsingResult.end;
            end2.imply("month", date1.getMonth() + 1);
            const end3 = parsingResult.end;
            end3.imply("year", date1.getFullYear());
          }
          if (match[8]) {
            const _parseInt3 = parseInt;
            const parsed3 = parseInt(match[8]);
            const _isNaN3 = isNaN;
            let zhStringToNumberResult1 = parsed3;
            if (isNaN(parsed3)) {
              zhStringToNumberResult1 = _mod10269.zhStringToNumber(match[8]);
            }
            if (zhStringToNumberResult1 >= 60) {
              return null;
            } else {
              const end18 = parsingResult.end;
              end18.assign("second", zhStringToNumberResult1);
            }
          }
          const _parseInt4 = parseInt;
          let parsed4 = parseInt(match[6]);
          const _isNaN4 = isNaN;
          if (isNaN(parsed4)) {
            parsed4 = _mod10269.zhStringToNumber(match[6]);
          }
          if (match[7]) {
            num37 = 30;
            rounded1 = parsed4;
            if ("\u534A" != match[7]) {
              num37 = 0;
              rounded1 = parsed4;
              if ("\u6B63" != match[7]) {
                num37 = 0;
                rounded1 = parsed4;
                if ("\u6574" != match[7]) {
                  const _parseInt5 = parseInt;
                  const parsed5 = parseInt(match[7]);
                  const _isNaN5 = isNaN;
                  num37 = parsed5;
                  rounded1 = parsed4;
                  if (isNaN(parsed5)) {
                    num37 = _mod10269.zhStringToNumber(match[7]);
                    rounded1 = parsed4;
                  }
                }
              }
            }
          } else {
            num37 = 0;
            rounded1 = parsed4;
            if (parsed4 > 100) {
              num37 = parsed4 % 100;
              const _Math2 = Math;
              rounded1 = Math.floor(parsed4 / 100);
            }
          }
          if (num37 >= 60) {
            return null;
          } else if (rounded1 > 24) {
            return null;
          } else {
            let num39;
            let num40;
            if (rounded1 >= 12) {
              num38 = 1;
            }
            if (match[9]) {
              if (rounded1 > 12) {
                return null;
              } else {
                const str91 = match[9][0];
                const formatted1 = str91.toLowerCase();
                let tmp93 = rounded1;
                if ("a" == formatted1) {
                  let num41 = rounded1;
                  if (12 == rounded1) {
                    num41 = 0;
                  }
                  tmp93 = num41;
                  num38 = 0;
                }
                let tmp94 = tmp93;
                if ("p" == formatted1) {
                  let sum4 = tmp93;
                  if (12 != tmp93) {
                    sum4 = tmp93 + 12;
                  }
                  num38 = 1;
                  tmp94 = sum4;
                }
                const start15 = parsingResult.start;
                num39 = num38;
                num40 = tmp94;
                if (!start15.isCertain("meridiem")) {
                  if (0 === num38) {
                    const start20 = parsingResult.start;
                    start20.imply("meridiem", 0);
                    const start21 = parsingResult.start;
                    num39 = num38;
                    num40 = tmp94;
                    if (12 == start21.get("hour")) {
                      const start22 = parsingResult.start;
                      start22.assign("hour", 0);
                      num39 = num38;
                      num40 = tmp94;
                    }
                  } else {
                    const start16 = parsingResult.start;
                    start16.imply("meridiem", 1);
                    const start17 = parsingResult.start;
                    num39 = num38;
                    num40 = tmp94;
                    if (12 != start17.get("hour")) {
                      ({ start: start18, start: start19 } = parsingResult);
                      start18.assign("hour", start19.get("hour") + 12);
                      num39 = num38;
                      num40 = tmp94;
                    }
                  }
                }
              }
            } else if (match[2]) {
              const first3 = match[2][0];
              if ("\u65E9" == first3) {
                num39 = 0;
                num40 = rounded1;
                if (12 == rounded1) {
                  num39 = 0;
                  num40 = 0;
                }
              } else {
                num39 = num38;
                num40 = rounded1;
                if ("\u665A" == first3) {
                  let sum5 = rounded1;
                  if (12 != rounded1) {
                    sum5 = rounded1 + 12;
                  }
                  num39 = 1;
                  num40 = sum5;
                }
              }
            } else if (match[3]) {
              const first4 = match[3][0];
              if ("\u4E0A" != first4) {
                if ("\u65E9" != first4) {
                  if ("\u51CC" != first4) {
                    num39 = num38;
                    num40 = rounded1;
                    const tmp89 = "\u4E0B" != first4 && "\u665A" != first4;
                    if (!tmp89) {
                      let sum6 = rounded1;
                      if (12 != rounded1) {
                        sum6 = rounded1 + 12;
                      }
                      num39 = 1;
                      num40 = sum6;
                    }
                  }
                }
              }
              num39 = 0;
              num40 = rounded1;
              if (12 == rounded1) {
                num39 = 0;
                num40 = 0;
              }
            } else {
              num39 = num38;
              num40 = rounded1;
              if (match[5]) {
                const first5 = match[5][0];
                if ("\u4E0A" != first5) {
                  if ("\u65E9" != first5) {
                    if ("\u51CC" != first5) {
                      num39 = num38;
                      num40 = rounded1;
                      const tmp86 = "\u4E0B" != first5 && "\u665A" != first5;
                      if (!tmp86) {
                        let sum7 = rounded1;
                        if (12 != rounded1) {
                          sum7 = rounded1 + 12;
                        }
                        num39 = 1;
                        num40 = sum7;
                      }
                    }
                  }
                }
                num39 = 0;
                num40 = rounded1;
                if (12 == rounded1) {
                  num39 = 0;
                  num40 = 0;
                }
              }
            }
            parsingResult.text = parsingResult.text + match[0];
            const end10 = parsingResult.end;
            end10.assign("hour", num40);
            const end11 = parsingResult.end;
            end11.assign("minute", num37);
            if (0 <= num39) {
              const end14 = parsingResult.end;
              end14.assign("meridiem", num39);
            } else {
              const start23 = parsingResult.start;
              if (start23.isCertain("meridiem")) {
                const start24 = parsingResult.start;
                if (1 == start24.get("meridiem")) {
                  const start25 = parsingResult.start;
                  if (start25.get("hour") > num40) {
                    const end13 = parsingResult.end;
                    end13.imply("meridiem", 0);
                  }
                }
              }
              if (num40 > 12) {
                const end12 = parsingResult.end;
                end12.imply("meridiem", 1);
              }
            }
            const end15 = parsingResult.end;
            const start26 = parsingResult.start;
            const dateResult = end15.date();
            const time = dateResult.getTime();
            const dateResult1 = start26.date();
            if (time < dateResult1.getTime()) {
              ({ end: end16, end: end17 } = parsingResult);
              end16.imply("day", end17.get("day") + 1);
            }
            return parsingResult;
          }
        } else {
          let tmp51 = null;
          const str39 = parsingResult.text;
          if (!str39.match(/^\d+$/)) {
            tmp51 = parsingResult;
          }
          return tmp51;
        }
      }
    }
  }
];

export default _createClass(ZHHansTimeExpressionParser, items);