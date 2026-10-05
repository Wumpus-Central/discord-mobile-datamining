// === Module 10168: AbstractParserWithWordBoundaryChecking ===

// Module 10168 (AbstractParserWithWordBoundaryChecking)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

class AbstractParserWithWordBoundaryChecking {
  constructor() {
    _classCallCheck(this, AbstractParserWithWordBoundaryChecking);
    this.cachedInnerPattern = null;
    this.cachedPattern = null;
  }
}
const entry = {
  key: "innerPatternHasChange",
  value: function innerPatternHasChange(arg0, arg1) {
    return this.innerPattern(arg0) !== arg1;
  }
};
const items = [
  entry,
  {
    key: "patternLeftBoundary",
    value: function patternLeftBoundary() {
      return "(\\W|^)";
    }
  },
  {
    key: "pattern",
    value: function pattern(arg0) {
      const self = this;
      const tmp = this.cachedInnerPattern && !self.innerPatternHasChange(arg0, self.cachedInnerPattern);
      if (!tmp) {
        self.cachedInnerPattern = self.innerPattern(arg0);
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const regExp = new RegExp("" + self.patternLeftBoundary() + self.cachedInnerPattern.source, self.cachedInnerPattern.flags);
        self.cachedPattern = regExp;
      }
      return self.cachedPattern;
    }
  },
  {
    key: "extract",
    value: function extract(arg0, index) {
      let length;
      let str = "";
      if (null !== index[1]) {
        str = "";
        if (undefined !== index[1]) {
          str = tmp;
        }
      }
      index.index = index.index + str.length;
      const str2 = index[0];
      index[0] = str2.substring(str.length);
      let num = 2;
      if (2 < index.length) {
        do {
          index[num - 1] = index[num];
          num = num + 1;
          length = index.length;
        } while (num < length);
      }
      return this.innerExtract(arg0, index);
    }
  }
];
const AbstractParserWithWordBoundaryChecking_export = _createClass(AbstractParserWithWordBoundaryChecking, items);

export { AbstractParserWithWordBoundaryChecking_export as AbstractParserWithWordBoundaryChecking };