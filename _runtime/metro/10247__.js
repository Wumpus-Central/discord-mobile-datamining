// === Module 10247: ? ===

// Module 10247
import _mod10201 from "module_10201" /* 10201 */;
import NUMBER from "NUMBER" /* 10244 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const keys = Object.keys(NUMBER.WEEKDAY_OFFSET);
const regExp = new RegExp("((?<prefix>\u524D\u306E|\u6B21\u306E|\u4ECA\u9031))?(?<weekday>" + keys.join("|") + ")(?:\u66DC\u65E5|\u66DC)", "i");
class JPWeekdayParser {
  constructor() {
    _classCallCheck(this, JPWeekdayParser);
  }
}
const entry = {
  key: "pattern",
  value: function pattern() {
    return regExp;
  }
};
const items = [
  entry,
  {
    key: "extract",
    value: function extract(reference, groups) {
      const tmp3 = NUMBER.WEEKDAY_OFFSET[groups.groups.weekday];
      if (undefined === tmp3) {
        return null;
      } else {
        let str2 = "last";
        if (!(groups.groups.prefix || "").match(/前の/)) {
          str2 = "next";
          if (!(groups.groups.prefix || "").match(/次の/)) {
            str2 = null;
            if ((groups.groups.prefix || "").match(/今週/)) {
              str2 = "this";
            }
          }
        }
        return _mod10201.createParsingComponentsAtWeekday(reference.reference, tmp3, str2);
      }
    }
  }
];

export default _createClass(JPWeekdayParser, items);