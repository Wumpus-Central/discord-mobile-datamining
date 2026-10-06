// === Module 10170: ? ===

// Module 10170
import _mod10171 from "module_10171" /* 10171 */;
import ReferenceWithTimezone2 from "ReferenceWithTimezone" /* 10177 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let tmp2 = this && this.__importDefault || ((__esModule) => {
  let tmp2;
  const tmp = __esModule;
  if (!tmp) {
    tmp2 = { default: __esModule };
    const obj = { default: __esModule };
  } else {
    tmp2 = __esModule;
  }
  return tmp2;
});
const module_10171 = tmp2(_mod10171);
class Chrono {
  constructor(configuration) {
    const self = this;
    let casualConfiguration = configuration;
    _classCallCheck(this, Chrono);
    this.defaultConfig = new module_10171.default();
    new module_10171.default();
    if (!configuration) {
      const defaultConfig = self.defaultConfig;
      casualConfiguration = defaultConfig.createCasualConfiguration();
    }
    const items = [...casualConfiguration.parsers];
    self.parsers = items;
    self.refiners = [...casualConfiguration.refiners];
  }
}
const entry = {
  key: "clone",
  value: function clone() {
    let items;
    const obj = { parsers: items, refiners: [...this.refiners] };
    items = [...this.parsers];
    const obj2 = Object.create(Chrono.prototype);
    _classCallCheck(obj2, Chrono);
    obj2.defaultConfig = new module_10171.default();
    obj2.parsers = [...obj.parsers];
    obj2.refiners = [...obj.refiners];
    new module_10171.default();
    return obj2;
  }
};
let items = [
  entry,
  {
    key: "parseDate",
    value: function parseDate(arg0, arg1, arg2) {
      const parsed = this.parse(arg0, arg1, arg2);
      let dateResult = null;
      if (parsed.length > 0) {
        const start = parsed[0].start;
        dateResult = start.date();
      }
      return dateResult;
    }
  },
  {
    key: "parse",
    value: function parse(arg0, arg1, arg2) {
      let closure_0 = new closure_1_4(arg0, arg1, arg2);
      let closure_1 = [];
      const parsers = this.parsers;
      new closure_1_4(arg0, arg1, arg2);
      const item = parsers.forEach((item) => {
        closure_1 = closure_1.concat(Chrono.executeParser(closure_0, item));
      });
      const sorted = closure_1.sort((index, index2) => index.index - index2.index);
      const refiners = this.refiners;
      const item1 = refiners.forEach((refine) => {
        closure_1 = refine.refine(closure_0, closure_1);
      });
      return closure_1;
    }
  }
];
const entry1 = {
  key: "executeParser",
  value: function executeParser(createParsingResult, pattern) {
    let match1;
    let text;
    let text2;
    const constructor = pattern;
    const items = [];
    const patternResult = pattern.pattern(createParsingResult);
    ({ text, text: text2 } = createParsingResult);
    let match = patternResult.exec(text2);
    if (match) {
      do {
        let substr1;
        match.index = match.index + text.length - text2.length;
        let extractResult = pattern.extract(createParsingResult, match);
        if (extractResult) {
          let parsingResult1 = extractResult;
          if (!(extractResult instanceof ReferenceWithTimezone2.ParsingResult)) {
            createParsingResult = createParsingResult.createParsingResult;
            let index = match.index;
            let first = match[0];
            if (extractResult instanceof ReferenceWithTimezone2.ParsingComponents) {
              let parsingResult = createParsingResult(index, first);
              parsingResult.start = extractResult;
              parsingResult1 = parsingResult;
            } else {
              parsingResult1 = createParsingResult(index, first, extractResult);
            }
          }
          let index2 = parsingResult1.index;
          let text1 = parsingResult1.text;
          let debugResult = createParsingResult.debug(() => console.log("" + constructor.constructor.name + " extracted (at index=" + index2 + ") '" + text1 + "'"));
          let arr = items.push(parsingResult1);
          let substr = text.substring(index2 + text1.length);
          match1 = patternResult.exec(substr);
          substr1 = substr;
        } else {
          substr1 = text.substring(match.index + 1);
          match1 = patternResult.exec(substr1);
        }
        match = match1;
        text2 = substr1;
      } while (match1);
    }
    return items;
  }
};
const items1 = [entry1];
class ParsingContext {
  constructor(text, instant, arg2) {
    const self = this;
    let obj = arg2;
    _classCallCheck(this, ParsingContext);
    this.text = text;
    if (null == arg2) {
      obj = {};
    }
    self.option = obj;
    const ReferenceWithTimezone = ReferenceWithTimezone2.ReferenceWithTimezone;
    self.reference = ReferenceWithTimezone.fromInput(instant, self.option.timezones);
    self.refDate = self.reference.instant;
  }
}
const entry2 = {
  key: "createParsingComponents",
  value: function createParsingComponents(date) {
    let parsingComponents = date;
    if (!(date instanceof ReferenceWithTimezone2.ParsingComponents)) {
      const self = this;
      const self2 = this;
      const self3 = this;
      parsingComponents = new ReferenceWithTimezone2.ParsingComponents(this.reference, date);
    }
    return parsingComponents;
  }
};
const items2 = [
  entry2,
  {
    key: "createParsingResult",
    value: function createParsingResult(sum, length2, extractResult, date) {
      const self = this;
      let substr = length2;
      if (typeof length2 !== "string") {
        const str = self.text;
        substr = str.substring(sum, length2);
      }
      let parsingComponents = null;
      if (extractResult) {
        parsingComponents = self.createParsingComponents(extractResult);
      }
      let parsingComponents1 = null;
      if (date) {
        parsingComponents1 = self.createParsingComponents(date);
      }
      const parsingResult = new ReferenceWithTimezone2.ParsingResult(self.reference, sum, substr, parsingComponents, parsingComponents1);
      return parsingResult;
    }
  },
  {
    key: "debug",
    value: function debug(arg0) {
      const self = this;
      if (this.option.debug) {
        const _Function = Function;
        const option = self.option;
        const debug = option.debug;
        if (self.option.debug instanceof Function) {
          debug(arg0);
        } else {
          debug.debug(arg0);
        }
      }
    }
  }
];
const _moduleResult = _createClass(ParsingContext, items2);
const Chrono_export = _createClass(Chrono, items, items1);
const ParsingContext_export = _createClass(ParsingContext, items2);

export { Chrono_export as Chrono };
export { ParsingContext_export as ParsingContext };