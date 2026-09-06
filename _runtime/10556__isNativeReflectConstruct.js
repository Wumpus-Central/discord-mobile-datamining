// === Module 10556: _isNativeReflectConstruct ===

// Module 10556 (_isNativeReflectConstruct)
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import ZHHansCasualDateParser from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_1 from "_possibleConstructorReturn" /* 93 */;
import closure_2 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
class ZHHansCasualDateParser {
  constructor() {
    self = this;
    tmp = ZHHansCasualDateParser(this, ZHHansCasualDateParser);
    tmp2 = closure_2;
    obj = closure_2(ZHHansCasualDateParser);
    tmp3 = closure_1;
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
_inherits(ZHHansCasualDateParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern(arg0) {
      const regExp = new RegExp("(\u73B0\u5728|\u7ACB(?:\u523B|\u5373)|\u5373\u523B)|(\u4ECA|\u660E|\u524D|\u5927\u524D|\u540E|\u5927\u540E|\u6628)(\u65E9|\u665A)|(\u4E0A(?:\u5348)|\u65E9(?:\u4E0A)|\u4E0B(?:\u5348)|\u665A(?:\u4E0A)|\u591C(?:\u665A)?|\u4E2D(?:\u5348)|\u51CC(?:\u6668))|(\u4ECA|\u660E|\u524D|\u5927\u524D|\u540E|\u5927\u540E|\u6628)(?:\u65E5|\u5929)(?:[\\s|,|\uFF0C]*)(?:(\u4E0A(?:\u5348)|\u65E9(?:\u4E0A)|\u4E0B(?:\u5348)|\u665A(?:\u4E0A)|\u591C(?:\u665A)?|\u4E2D(?:\u5348)|\u51CC(?:\u6668)))?", "i");
      return regExp;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(createParsingResult, index) {
      const parsingResult = createParsingResult.createParsingResult(index.index, index[0]);
      const refDate = createParsingResult.refDate;
      const date = new Date(refDate.getTime());
      if (index[1]) {
        const start16 = parsingResult.start;
        start16.imply("hour", refDate.getHours());
        const start17 = parsingResult.start;
        start17.imply("minute", refDate.getMinutes());
        const start18 = parsingResult.start;
        start18.imply("second", refDate.getSeconds());
        const start19 = parsingResult.start;
        start19.imply("millisecond", refDate.getMilliseconds());
      } else if (index[2]) {
        if ("\u660E" == index[2]) {
          if (refDate.getHours() > 1) {
            date.setDate(date.getDate() + 1);
          }
        } else if ("\u6628" == tmp25) {
          date.setDate(date.getDate() - 1);
        } else if ("\u524D" == tmp25) {
          date.setDate(date.getDate() - 2);
        } else if ("\u5927\u524D" == tmp25) {
          date.setDate(date.getDate() - 3);
        } else if ("\u540E" == tmp25) {
          date.setDate(date.getDate() + 2);
        } else if ("\u5927\u540E" == tmp25) {
          date.setDate(date.getDate() + 3);
        }
        if ("\u65E9" == index[3]) {
          const start15 = parsingResult.start;
          start15.imply("hour", 6);
        } else if ("\u665A" == tmp26) {
          const start25 = parsingResult.start;
          start25.imply("hour", 22);
          const start26 = parsingResult.start;
          start26.imply("meridiem", 1);
        }
      } else if (index[4]) {
        const first = index[4][0];
        if ("\u65E9" != first) {
          if ("\u4E0A" != first) {
            if ("\u4E0B" == first) {
              const start12 = parsingResult.start;
              start12.imply("hour", 15);
              const start13 = parsingResult.start;
              start13.imply("meridiem", 1);
            } else if ("\u4E2D" == first) {
              const start10 = parsingResult.start;
              start10.imply("hour", 12);
              const start11 = parsingResult.start;
              start11.imply("meridiem", 1);
            } else {
              if ("\u591C" != first) {
                if ("\u665A" != first) {
                  if ("\u51CC" == first) {
                    const start24 = parsingResult.start;
                    start24.imply("hour", 0);
                  }
                }
              }
              const start8 = parsingResult.start;
              start8.imply("hour", 22);
              const start9 = parsingResult.start;
              start9.imply("meridiem", 1);
            }
          }
        }
        const start14 = parsingResult.start;
        start14.imply("hour", 6);
      } else if (index[5]) {
        if ("\u660E" == index[5]) {
          if (refDate.getHours() > 1) {
            date.setDate(date.getDate() + 1);
          }
        } else if ("\u6628" == tmp2) {
          date.setDate(date.getDate() - 1);
        } else if ("\u524D" == tmp2) {
          date.setDate(date.getDate() - 2);
        } else if ("\u5927\u524D" == tmp2) {
          date.setDate(date.getDate() - 3);
        } else if ("\u540E" == tmp2) {
          date.setDate(date.getDate() + 2);
        } else if ("\u5927\u540E" == tmp2) {
          date.setDate(date.getDate() + 3);
        }
        if (index[6]) {
          const first1 = tmp8[0];
          if ("\u65E9" != first1) {
            if ("\u4E0A" != first1) {
              if ("\u4E0B" == first1) {
                const start5 = parsingResult.start;
                start5.imply("hour", 15);
                const start6 = parsingResult.start;
                start6.imply("meridiem", 1);
              } else if ("\u4E2D" == first1) {
                const start3 = parsingResult.start;
                start3.imply("hour", 12);
                const start4 = parsingResult.start;
                start4.imply("meridiem", 1);
              } else {
                if ("\u591C" != first1) {
                  if ("\u665A" != first1) {
                    if ("\u51CC" == first1) {
                      const start23 = parsingResult.start;
                      start23.imply("hour", 0);
                    }
                  }
                }
                const start = parsingResult.start;
                start.imply("hour", 22);
                const start2 = parsingResult.start;
                start2.imply("meridiem", 1);
              }
            }
          }
          const start7 = parsingResult.start;
          start7.imply("hour", 6);
        }
      }
      const start20 = parsingResult.start;
      start20.assign("day", date.getDate());
      const start21 = parsingResult.start;
      start21.assign("month", date.getMonth() + 1);
      const start22 = parsingResult.start;
      start22.assign("year", date.getFullYear());
      return parsingResult;
    }
  }
];

export default _createClass(ZHHansCasualDateParser, items);