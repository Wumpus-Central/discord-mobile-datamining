// _runtime/metro/10506__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

const JPSlashDateFormatParser = require;
const regExp = new RegExp(
  "([0-9\uFF10-\uFF19]{4}[\\/|\\\uFF0F])?([0-1\uFF10-\uFF11]{0,1}[0-9\uFF10-\uFF19]{1})(?:[\\/|\\\uFF0F]([0-3\uFF10-\uFF13]{0,1}[0-9\uFF10-\uFF19]{1}))",
  "i",
);
class JPSlashDateFormatParser {
  constructor() {
    tmp = c2(this, JPSlashDateFormatParser);
    return;
  }
}
const entry = {
  key: "pattern",
  value: function pattern() {
    return regExp;
  },
};
const items = [
  entry,
  {
    key: "extract",
    value: function extract(createParsingComponents, arg1) {
      const parsingComponents = createParsingComponents.createParsingComponents();
      const parsed = parseInt(JPSlashDateFormatParser(10502).toHankaku(arg1[2]));
      const parsed1 = parseInt(JPSlashDateFormatParser(10502).toHankaku(arg1[3]));
      if (parsed >= 1) {
        if (parsed <= 12) {
          if (parsed1 >= 1) {
            if (parsed1 <= 31) {
              parsingComponents.assign("day", parsed1);
              parsingComponents.assign("month", parsed);
              if (arg1[1]) {
                const _parseInt = parseInt;
                const parsed2 = parseInt(tmp(10502).toHankaku(arg1[1]));
                parsingComponents.assign("year", tmp(10433).findMostLikelyADYear(parsed2));
              } else {
                parsingComponents.imply(
                  "year",
                  tmp(10433).findYearClosestToRef(createParsingComponents.reference.instant, parsed1, parsed),
                );
              }
              return parsingComponents;
            }
          }
          return null;
        }
      }
      return null;
    },
  },
];

export default _createClass(JPSlashDateFormatParser, items);
