// _runtime/metro/10428__.js
import ENDefaultConfiguration2 from "../10429_ENDefaultConfiguration.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

let ParsingContext = require;
let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: __esModule };
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
const ENDefaultConfiguration = fn(ENDefaultConfiguration2);
class Chrono {
  constructor(arg0) {
    self = this;
    casualConfiguration = global;
    tmp2 = c2(this, ParsingContext);
    _default = new closure_3.default();
    this.defaultConfig = _default;
    if (!global) {
      defaultConfig = self.defaultConfig;
      casualConfiguration = defaultConfig.createCasualConfiguration();
    }
    items = [...casualConfiguration.parsers];
    self.parsers = items;
    self.refiners = [...casualConfiguration.refiners];
    return;
  }
}
ParsingContext = Chrono;
const entry = {
  key: "clone",
  value: function clone() {
    let obj = { parsers: null, refiners: [...this.refiners] };
    const items = [...this.parsers];
    obj.parsers = items;
    obj = Object.create(ParsingContext.prototype);
    _classCallCheck(obj, ParsingContext);
    obj.defaultConfig = new ENDefaultConfiguration.default();
    obj.parsers = [...obj.parsers];
    obj.refiners = [...obj.refiners];
    return obj;
  },
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
    },
  },
  {
    key: "parse",
    value: function parse(arg0, arg1, arg2) {
      closure_0 = new _moduleResult(arg0, arg1, arg2);
      dependencyMap = [];
      const parsers = this.parsers;
      const item = parsers.forEach((item) => {
        closure_1 = closure_1.concat(ParsingContext.executeParser(closure_0, item));
      });
      const sorted = dependencyMap.sort((index, index2) => index.index - index2.index);
      const refiners = this.refiners;
      const item1 = refiners.forEach((refine) => {
        closure_1 = refine.refine(closure_0, closure_1);
      });
      return dependencyMap;
    },
  },
];
const entry1 = {
  key: "executeParser",
  value: function executeParser(debug, pattern) {
    let index = pattern;
    const items = [];
    const patternResult = pattern.pattern(debug);
    ({ text, text: text2 } = debug);
    let match = patternResult.exec(text2);
    if (match) {
      match.index = match.index + text.length - text2.length;
      const extractResult = pattern.extract(debug, match);
      while (!extractResult) {
        let substr = text.substring(match.index + 1);
        let match1 = patternResult.exec(substr);
        match = match1;
        text2 = substr;
      }
      let parsingResult = extractResult;
      if (extractResult instanceof ParsingContext(10435).ParsingResult) {
        index = parsingResult.index;
        text = parsingResult.text;
        dependencyMap = text;
        debug.debug(() =>
          console.log("" + ParsingContext.constructor.name + " extracted (at index=" + index + ") '" + text + "'"),
        );
        items.push(parsingResult);
        const substr1 = text.substring(index + text.length);
        const match2 = patternResult.exec(substr1);
      } else if (!(extractResult instanceof tmp6(10435).ParsingComponents)) {
        parsingResult = debug.createParsingResult(match.index, match[0], extractResult);
      }
      const tmp9Result = tmp9(index, substr1);
      tmp9Result.start = extractResult;
      parsingResult = tmp9Result;
      tmp6 = ParsingContext;
    }
    return items;
  },
};
const items1 = [entry1];
class ParsingContext {
  constructor(arg0, arg1, arg2) {
    self = this;
    obj = importDefault;
    tmp = c2(this, ParsingContext);
    this.text = global;
    if (null == importDefault) {
      obj = {};
    }
    self.option = obj;
    ReferenceWithTimezone = closure_0(closure_1[3]).ReferenceWithTimezone;
    self.reference = ReferenceWithTimezone.fromInput(require, self.option.timezones);
    self.refDate = self.reference.instant;
    return;
  }
}
const entry2 = {
  key: "createParsingComponents",
  value: function createParsingComponents(date) {
    let parsingComponents = date;
    if (!(date instanceof ParsingContext(10435).ParsingComponents)) {
      const self = this;
      parsingComponents = new ParsingContext(10435).ParsingComponents(this.reference, date);
    }
    return parsingComponents;
  },
};
const items2 = [
  entry2,
  {
    key: "createParsingResult",
    value: function createParsingResult(sum, match, extractResult, date) {
      const self = this;
      let substr = match;
      if (typeof match !== "string") {
        substr = self.text.substring(sum, match);
      }
      let parsingComponents = null;
      if (extractResult) {
        parsingComponents = self.createParsingComponents(extractResult);
      }
      let parsingComponents1 = null;
      if (date) {
        parsingComponents1 = self.createParsingComponents(date);
      }
      return new ParsingContext(10435).ParsingResult(
        self.reference,
        sum,
        substr,
        parsingComponents,
        parsingComponents1,
      );
    },
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
    },
  },
];
const _moduleResult = _createClass(ParsingContext, items2);

export const Chrono = _createClass(Chrono, items, items1);
export const ParsingContext = _moduleResult;
