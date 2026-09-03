// === Module 10479: regExp ===

// Module 10479 (regExp)
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const SlashDateFormatParser = require;
const regExp = new RegExp("([^\\d]|^)([0-3]{0,1}[0-9]{1})[\\/\\.\\-]([0-3]{0,1}[0-9]{1})(?:[\\/\\.\\-]([0-9]{4}|[0-9]{2}))?(\\W|$)", "i");
class SlashDateFormatParser {
  constructor(arg0) {
    self = this;
    tmp = closure_2(this, SlashDateFormatParser);
    num = 2;
    if (global) {
      num = 3;
    }
    self.groupNumberMonth = num;
    num2 = 3;
    if (global) {
      num2 = 2;
    }
    self.groupNumberDay = num2;
    return;
  }
}
let items = [
  {
    key: "pattern",
    value: function pattern() {
      return regExp;
    }
  },
  {
    key: "extract",
    value: function extract(text, index) {
      const sum = index.index + index[1].length;
      const diff = index.index + index[0].length - index[5].length;
      if (sum > 0) {
        const str = text.text;
        const str2 = text.text.substring(0, sum);
      }
      if (diff < text.text.length) {
        const str4 = text.text;
        const str5 = text.text.substring(diff);
      }
      const str8 = text.text.substring(sum, diff);
      if (!str8.match(/^\d\.\d$/)) {
        if (!str8.match(/^\d\.\d{1,2}\.\d{1,2}\s*$/)) {
          const self = this;
          const parsingResult = text.createParsingResult(sum, str8);
          const _parseInt = parseInt;
          const parsed = parseInt(index[this.groupNumberMonth]);
          const _parseInt2 = parseInt;
          const parsed1 = parseInt(index[this.groupNumberDay]);
          if (parsed < 1) {
            tmp6 = parsed1;
            tmp7 = parsed;
            if (parsed > 12) {
              if (parsed1 >= 1) {
                if (parsed1 <= 12) {
                  if (parsed <= 31) {
                    const items = [parsed, parsed1];
                    [tmp6, tmp7] = items;
                  }
                }
              }
              return null;
            }
          } else {
            tmp6 = parsed1;
            tmp7 = parsed;
          }
          if (tmp6 >= 1) {
            if (tmp6 <= 31) {
              const start3 = parsingResult.start;
              start3.assign("day", tmp6);
              const start4 = parsingResult.start;
              start4.assign("month", tmp7);
              if (index[4]) {
                const _parseInt3 = parseInt;
                const parsed2 = parseInt(index[4]);
                const start2 = parsingResult.start;
                start2.assign("year", SlashDateFormatParser(10451).findMostLikelyADYear(parsed2));
              } else {
                const start = parsingResult.start;
                start.imply("year", SlashDateFormatParser(10451).findYearClosestToRef(text.refDate, tmp6, tmp7));
              }
              return parsingResult.addTag("parser/SlashDateFormatParser");
            }
          }
          return null;
        }
      }
    }
  }
];

export default _createClass(SlashDateFormatParser, items);