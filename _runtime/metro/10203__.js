// _runtime/metro/10203__.js
import findMostLikelyADYear from "../10175_findMostLikelyADYear.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

const regExp = new RegExp(
  "([^\\d]|^)([0-3]{0,1}[0-9]{1})[\\/\\.\\-]([0-3]{0,1}[0-9]{1})(?:[\\/\\.\\-]([0-9]{4}|[0-9]{2}))?(\\W|$)",
  "i",
);
class SlashDateFormatParser {
  constructor(arg0) {
    const self = this;
    _classCallCheck(this, SlashDateFormatParser);
    let num = 2;
    if (arg0) {
      num = 3;
    }
    self.groupNumberMonth = num;
    let num2 = 3;
    if (arg0) {
      num2 = 2;
    }
    self.groupNumberDay = num2;
  }
}
const entry = {
  key: "pattern",
  value: function pattern() {
    return regExp;
  },
};
let items = [
  entry,
  {
    key: "extract",
    value: function extract(text, index) {
      let tmp6;
      let tmp7;
      const sum = index.index + index[1].length;
      const diff = index.index + index[0].length - index[5].length;
      if (sum > 0) {
        const str = text.text;
        str.substring(0, sum);
      }
      if (diff < text.text.length) {
        const str4 = text.text;
        str4.substring(diff);
      }
      const str7 = text.text;
      const str8 = str7.substring(sum, diff);
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
                start2.assign("year", findMostLikelyADYear.findMostLikelyADYear(parsed2));
              } else {
                const start = parsingResult.start;
                start.imply("year", findMostLikelyADYear.findYearClosestToRef(text.refDate, tmp6, tmp7));
              }
              return parsingResult.addTag("parser/SlashDateFormatParser");
            }
          }
          return null;
        }
      }
    },
  },
];

export default _createClass(SlashDateFormatParser, items);
