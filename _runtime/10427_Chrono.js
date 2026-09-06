// _runtime/10427_Chrono.js
import ENDefaultConfiguration from "10429_ENDefaultConfiguration.js";

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
const configuration = exports.configuration;
const chrono = new require("metro/10428__.js").Chrono(configuration.createCasualConfiguration(false));
const configuration2 = exports.configuration;
const chrono1 = new require("metro/10428__.js").Chrono(configuration2.createConfiguration(true, false));
const configuration3 = exports.configuration;
const chrono2 = new require("metro/10428__.js").Chrono(configuration3.createCasualConfiguration(true));

export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
export const Chrono = require("ReferenceWithTimezone").ParsingComponents;
export const ParsingResult = require("ReferenceWithTimezone").ParsingComponents;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const configuration = new fn(ENDefaultConfiguration).default();
export const casual = chrono;
export const strict = chrono1;
export const GB = chrono2;
