// _runtime/metro/10504__.js
import now from "../10456_now.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

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
      fn = function t(arg0) {
        fn = Object.getOwnPropertyNames;
        if (!fn) {
          fn = (obj) => {
            const items = [];
            for (const key10005 in arg0) {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
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
      };
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          const arr = fn(__esModule);
          for (let num = 0; num < arr.length; num = num + 1) {
            if ("default" !== arr[num]) {
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
    const entry = {
      key: "pattern",
      value: function pattern() {
        return re7;
      },
    };
    let items = [entry];
    const entry1 = {
      key: "extract",
      value: function extract(createParsingComponents, arg1) {
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
                      parsingComponents.assign("meridiem", JPCasualDateParser(10437).Meridiem.AM);
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
              parsingComponents.assign("meridiem", JPCasualDateParser(10437).Meridiem.PM);
            }
          }
          return closure_6.today(createParsingComponents.reference);
        }
      },
    };
    items[1] = entry1;
    exports.default = _createClass(JPCasualDateParser, items);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
