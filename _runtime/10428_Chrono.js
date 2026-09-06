// _runtime/10428_Chrono.js
import ENDefaultConfiguration from "10429_ENDefaultConfiguration.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

let ParsingContext = require;
let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: null };
      obj[0] = __esModule;
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
let closure_3 = fn(ENDefaultConfiguration);
class Chrono {
  constructor(arg0) {
    self = this;
    casualConfiguration = global;
    tmp2 = closure_2(this, ParsingContext);
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
let obj = {
  key: "clone",
  value: function clone() {
    let obj = { parsers: items, refiners: [...this.refiners] };
    items = [...this.parsers];
    obj = Object.create(ParsingContext.prototype);
    callback(obj, ParsingContext);
    obj.defaultConfig = new mod.default();
    obj.parsers = [...obj.parsers];
    obj.refiners = [...obj.refiners];
    return obj;
  },
};
let items = [
  obj,
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
      const item = parsers.forEach((pattern) => {
        closure_1 = closure_1.concat(closure_0.executeParser(closure_0, pattern));
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
obj = {
  key: "executeParser",
  value: function executeParser(closure_0, pattern) {
    let index = pattern;
    const items = [];
    const patternResult = pattern.pattern(closure_0);
    ({ text, text: text2 } = closure_0);
    let match = patternResult.exec(text2);
    if (match) {
      match.index = match.index + text.length - text2.length;
      const extractResult = pattern.extract(closure_0, match);
      while (!extractResult) {
        let substr = text.substring(match.index + 1);
        let match1 = patternResult.exec(substr);
        match = match1;
        text2 = substr;
      }
      let parsingResult = extractResult;
      if (extractResult instanceof index(10435).ParsingResult) {
        index = parsingResult.index;
        text = parsingResult.text;
        dependencyMap = text;
        closure_0.debug(() =>
          console.log("" + index.constructor.name + " extracted (at index=" + index + ") '" + closure_1 + "'"),
        );
        items.push(parsingResult);
        const substr1 = text.substring(index + text.length);
        const match2 = patternResult.exec(substr1);
      } else if (!(extractResult instanceof tmp6(10435).ParsingComponents)) {
        parsingResult = closure_0.createParsingResult(match.index, match[0], extractResult);
      }
      const tmp9Result = tmp9(index, substr1);
      tmp9Result.start = extractResult;
      parsingResult = tmp9Result;
      tmp6 = index;
    }
    return items;
  },
};
const items1 = [obj];
class ParsingContext {
  constructor(arg0, arg1, arg2) {
    self = this;
    obj = importDefault;
    tmp = closure_2(this, ParsingContext);
    this.text = global;
    if (null == importDefault) {
      obj = {};
    }
    self.option = obj;
    ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
    self.reference = ReferenceWithTimezone.fromInput(require, self.option.timezones);
    self.refDate = self.reference.instant;
    return;
  }
}
obj = {
  key: "createParsingComponents",
  value: function createParsingComponents(extractResult) {
    let parsingComponents = extractResult;
    if (!(extractResult instanceof ParsingContext(10435).ParsingComponents)) {
      const self = this;
      parsingComponents = new ParsingContext(10435).ParsingComponents(this.reference, extractResult);
    }
    return parsingComponents;
  },
};
const items2 = [
  obj,
  {
    key: "createParsingResult",
    value: function createParsingResult(index, length2, extractResult, extractResult) {
      const self = this;
      let substr = length2;
      if (typeof length2 !== "string") {
        substr = self.text.substring(index, length2);
        const str = self.text;
      }
      let parsingComponents = null;
      if (extractResult) {
        parsingComponents = self.createParsingComponents(extractResult);
      }
      let parsingComponents1 = null;
      if (extractResult) {
        parsingComponents1 = self.createParsingComponents(extractResult);
      }
      return new ParsingContext(10435).ParsingResult(
        self.reference,
        index,
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
let c4 = _moduleResult;

export const Chrono = _createClass(Chrono, items, items1);
export const ParsingContext = _moduleResult;
