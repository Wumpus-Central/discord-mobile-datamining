// === Module 10506: regExp ===

// Module 10506 (regExp)
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const JPSlashDateFormatParser = require;
const regExp = new RegExp("([0-9\uFF10-\uFF19]{4}[\\/|\\\uFF0F])?([0-1\uFF10-\uFF11]{0,1}[0-9\uFF10-\uFF19]{1})(?:[\\/|\\\uFF0F]([0-3\uFF10-\uFF13]{0,1}[0-9\uFF10-\uFF19]{1}))", "i");
class JPSlashDateFormatParser {
  constructor() {
    tmp = closure_2(this, JPSlashDateFormatParser);
    return;
  }
}
const items = [
  {
    key: "pattern",
    value: function pattern() {
      return regExp;
    }
  },
  {
    key: "extract",
    value: function extract(createParsingComponents) {
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
                parsingComponents.imply("year", tmp(10433).findYearClosestToRef(createParsingComponents.reference.instant, parsed1, parsed));
              }
              return parsingComponents;
            }
          }
          return null;
        }
      }
      return null;
    }
  }
];

export default _createClass(JPSlashDateFormatParser, items);