// === Module 10246: ? ===

// Module 10246
import Meridiem from "Meridiem" /* 10179 */;
import now2 from "now" /* 10198 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let hasOwnProperty;

const self = this;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (!self2) {
  let _Object = Object;
  self2 = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    let closure_0 = __esModule;
    let closure_1 = arg2;
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
    let tmp3 = ownPropertyDescriptor;
    if (tmp3) {
      let tmp4;
      if ("get" in ownPropertyDescriptor) {
        tmp4 = !__esModule.__esModule;
      } else {
        tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
      }
      tmp3 = !tmp4;
    }
    if (!tmp3) {
      ownPropertyDescriptor = { enumerable: true, get };
      const obj = { enumerable: true, get };
    }
    Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
}
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  const _Object2 = Object;
  tmp3 = Object.create ? ((arg0, value) => {
    const obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_5 = tmp3;
let fn = self && self.__importStar;
if (!fn) {
  fn = function t(arg0) {
    fn = Object.getOwnPropertyNames || ((obj) => {
      const items = [];
      for (const key10005 in obj) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        if (!hasOwnProperty.call(obj, key10005)) {
          continue;
        } else {
          items[items.length] = key10005;
          continue;
        }
        continue;
      }
      return items;
    });
    return fn(arg0);
  };
  fn = (__esModule) => {
    const tmp = __esModule;
    if (tmp) {
      if (__esModule.__esModule) {
        return __esModule;
      }
    }
    const obj = {};
    if (null != __esModule) {
      let num;
      const arr = fn(__esModule);
      for (let num = 0; num < arr.length; num = num + 1) {
        if ("default" !== arr[num]) {
          let tmp5 = self2(obj, __esModule, arr[num]);
        }
      }
    }
    closure_5(obj, __esModule);
    return obj;
  };
}
const now = fn(now2);
const re7 = /今日|きょう|本日|ほんじつ|昨日|きのう|明日|あした|今夜|こんや|今夕|こんゆう|今晩|こんばん|今朝|けさ/i;
class JPCasualDateParser {
  constructor() {
    _classCallCheck(this, JPCasualDateParser);
  }
}
const entry = {
  key: "pattern",
  value: function pattern() {
    return re7;
  }
};
let items = [
  entry,
  {
    key: "extract",
    value: function extract(createParsingComponents, arg1) {
      let str6;
      const first = arg1[0];
      if ("\u304D\u3087\u3046" === first) {
        str6 = "\u4ECA\u65E5";
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
        return now.yesterday(createParsingComponents.reference);
      } else if ("\u660E\u65E5" === str6) {
        return now.tomorrow(createParsingComponents.reference);
      } else {
        if ("\u672C\u65E5" !== str6) {
          if ("\u4ECA\u65E5" !== str6) {
            if ("\u4ECA\u591C" != str6) {
              if ("\u4ECA\u5915" != str6) {
                if ("\u4ECA\u6669" != str6) {
                  if (str6.match("\u4ECA\u671D")) {
                    parsingComponents.imply("hour", 6);
                    parsingComponents.assign("meridiem", Meridiem.Meridiem.AM);
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
            parsingComponents.assign("meridiem", Meridiem.Meridiem.PM);
          }
        }
        return now.today(createParsingComponents.reference);
      }
    }
  }
];

export default _createClass(JPCasualDateParser, items);