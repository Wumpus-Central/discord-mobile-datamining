// _runtime/10439_AbstractParserWithWordBoundaryChecking.js
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

class AbstractParserWithWordBoundaryChecking {
  constructor() {
    tmp = closure_0(this, AbstractParserWithWordBoundaryChecking);
    this.cachedInnerPattern = null;
    this.cachedPattern = null;
    return;
  }
}
_classCallCheck = AbstractParserWithWordBoundaryChecking;
const entry = {
  key: "innerPatternHasChange",
  value: function innerPatternHasChange(arg0, arg1) {
    return this.innerPattern(arg0) !== arg1;
  },
};
const items = [
  entry,
  {
    key: "patternLeftBoundary",
    value: function patternLeftBoundary() {
      return "(\\W|^)";
    },
  },
  {
    key: "pattern",
    value: function pattern(arg0) {
      const self = this;
      if (!tmp) {
        self.cachedInnerPattern = self.innerPattern(arg0);
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp(
          "" + self.patternLeftBoundary() + self.cachedInnerPattern.source,
          self.cachedInnerPattern.flags,
        );
        self.cachedPattern = regExp;
      }
      return self.cachedPattern;
    },
  },
  {
    key: "extract",
    value: function extract(arg0, index) {
      let length;
      let str = "";
      if (null !== index[1]) {
        str = "";
        if (undefined !== tmp) {
          str = tmp;
        }
      }
      index.index = index.index + str.length;
      index[0] = index[0].substring(str.length);
      let num = 2;
      if (2 < index.length) {
        do {
          index[num - 1] = index[num];
          num = num + 1;
          length = index.length;
        } while (num < length);
      }
      return this.innerExtract(arg0, index);
    },
  },
];

export const AbstractParserWithWordBoundaryChecking = _createClass(AbstractParserWithWordBoundaryChecking, items);
