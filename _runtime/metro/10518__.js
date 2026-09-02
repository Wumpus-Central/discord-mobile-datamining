// === Module 10518: ? ===

// Module 10518
import now from "now" /* 10470 */;
import closure_3 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const self = this;
const JPCasualDateParser = require;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__importStar;
    }
    if (!fn) {
      function t(arg0) {
        let fn = Object.getOwnPropertyNames;
        if (!fn) {
          fn = (obj) => {
            const items = [];
            for (const key10005 in arg0) {
              let tmp2 = key10005;
              let _Object = Object;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10005);
              } else {
                hasOwnPropertyResult = call(arg0, key10005);
              }
              if (!hasOwnPropertyResult) {
                continue;
              } else {
                items[items.length] = key10005;
                continue;
              }
              continue;
            }
            return items;
          };
        }
        return fn(arg0);
      }
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          const arr = t(__esModule);
          for (let num = 0; num < arr.length; num = num + 1) {
            let tmp2 = num;
            if ("default" !== arr[num]) {
              let tmp3 = self2;
              let tmp4 = self2(obj, __esModule, arr[num]);
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    let closure_6 = fn(now);
    const re7 = /今日|きょう|本日|ほんじつ|昨日|きのう|明日|あした|今夜|こんや|今夕|こんゆう|今晩|こんばん|今朝|けさ/i;
    class JPCasualDateParser {
      constructor() {
        tmp = closure_3(this, JPCasualDateParser);
        return;
      }
    }
    let obj = { key: "pattern", value: null };
    obj[1] = function pattern() {
      return closure_7;
    };
    let items = [obj, ];
    obj = { key: "extract", value: null };
    obj[1] = function extract(createParsingComponents) {
      const first = arg1[0];
      if ("\u304D\u3087\u3046" === first) {
        let str6 = "\u4ECA\u65E5";
      } else if ("\u307B\u3093\u3058\u3064" === first) {
        str6 = "\u672C\u65E5";
      } else if ("\u304D\u306E\u3046" === first) {
        str6 = "\u6628\u65E5";
      } else if ("\u3042\u3057\u305F" === first) {
        str6 = "\u660E\u65E5";
      } else if ("\u3053\u3093\u3084" === first) {
        str6 = "\u4ECA\u591C";
      } else if ("\u3053\u3093\u3086\u3046" === first) {
        str6 = "\u4ECA\u5915";
      } else if ("\u3053\u3093\u3070\u3093" === first) {
        str6 = "\u4ECA\u6669";
      } else {
        str6 = "\u4ECA\u671D";
        if ("\u3051\u3055" !== first) {
          str6 = first;
        }
      }
      const parsingComponents = createParsingComponents.createParsingComponents();
      if ("\u6628\u65E5" === str6) {
        return closure_6.yesterday(createParsingComponents.reference);
      } else if ("\u660E\u65E5" === str6) {
        return closure_6.tomorrow(createParsingComponents.reference);
      } else {
        if ("\u672C\u65E5" !== str6) {
          if ("\u4ECA\u65E5" !== str6) {
            if ("\u4ECA\u591C" != str6) {
              if ("\u4ECA\u5915" != str6) {
                if ("\u4ECA\u6669" != str6) {
                  if (str6.match("\u4ECA\u671D")) {
                    parsingComponents.imply("hour", 6);
                    parsingComponents.assign("meridiem", JPCasualDateParser(10451).Meridiem.AM);
                  }
                }
                const refDate = createParsingComponents.refDate;
                parsingComponents.assign("day", refDate.getDate());
                parsingComponents.assign("month", refDate.getMonth() + 1);
                parsingComponents.assign("year", refDate.getFullYear());
                return parsingComponents;
              }
            }
            parsingComponents.imply("hour", 22);
            parsingComponents.assign("meridiem", JPCasualDateParser(10451).Meridiem.PM);
          }
        }
        return closure_6.today(createParsingComponents.reference);
      }
    };
    items[1] = obj;
    exports.default = _createClass(JPCasualDateParser, items);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}