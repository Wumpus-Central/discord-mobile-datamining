// _runtime/10304_ENDefaultConfiguration.js
import _mod10305 from "metro/10305__.js";
import _mod10315 from "metro/10315__.js";
import _mod10316 from "metro/10316__.js";
import _mod10317 from "metro/10317__.js";
import _mod10318 from "metro/10318__.js";
import _mod10319 from "metro/10319__.js";
import _mod10320 from "metro/10320__.js";
import _mod10322 from "metro/10322__.js";
import _mod10323 from "metro/10323__.js";
import _mod10324 from "metro/10324__.js";
import _mod10327 from "metro/10327__.js";
import _mod10330 from "metro/10330__.js";
import _mod10332 from "metro/10332__.js";
import _mod10333 from "metro/10333__.js";
import _mod10335 from "metro/10335__.js";
import _mod10336 from "metro/10336__.js";
import _mod10337 from "metro/10337__.js";
import _mod10338 from "metro/10338__.js";
import _mod10339 from "metro/10339__.js";
import OverlapRemovalRefiner2 from "10340_OverlapRemovalRefiner.js";
import _mod10341 from "metro/10341__.js";
import _mod10342 from "metro/10342__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

const ENDefaultConfiguration = require;
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
fn(_mod10305);
fn(_mod10315);
fn(_mod10316);
fn(_mod10317);
fn(_mod10318);
fn(_mod10319);
fn(_mod10320);
fn(_mod10322);
fn(_mod10323);
fn(_mod10324);
fn(_mod10327);
fn(_mod10330);
fn(_mod10332);
fn(_mod10333);
fn(_mod10335);
fn(_mod10336);
fn(_mod10337);
fn(_mod10338);
fn(_mod10339);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const regExp = fn(_mod10341);
const _isNativeReflectConstruct = fn(_mod10342);
class ENDefaultConfiguration {
  constructor() {
    tmp = c2(this, ENDefaultConfiguration);
    return;
  }
}
const entry = {
  key: "createCasualConfiguration",
  value: function createCasualConfiguration() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    const configuration = this.createConfiguration(false, flag);
    const parsers = configuration.parsers;
    parsers.push(new _isNativeReflectConstruct.default());
    const parsers1 = configuration.parsers;
    const _default = new _isNativeReflectConstruct.default();
    parsers1.push(new _isNativeReflectConstruct.default());
    const parsers2 = configuration.parsers;
    const _default1 = new _isNativeReflectConstruct.default();
    parsers2.push(new _isNativeReflectConstruct.default());
    const parsers3 = configuration.parsers;
    const _default2 = new _isNativeReflectConstruct.default();
    parsers3.push(new _isNativeReflectConstruct.default());
    const parsers4 = configuration.parsers;
    const _default3 = new _isNativeReflectConstruct.default();
    parsers4.push(new _isNativeReflectConstruct.default());
    const refiners = configuration.refiners;
    const _default4 = new _isNativeReflectConstruct.default();
    refiners.push(new _isNativeReflectConstruct.default());
    return configuration;
  },
};
let items = [
  entry,
  {
    key: "createConfiguration",
    value: function createConfiguration() {
      if (flag === undefined) {
        flag = true;
      }
      let flag2 = arg1;
      if (arg1 === undefined) {
        flag2 = false;
      }
      const obj = { parsers: null, refiners: null };
      const items = [new regExp.default(flag2), , , , , , , ,];
      const _default = new regExp.default(flag2);
      items[1] = new _isNativeReflectConstruct.default(flag);
      const _default1 = new _isNativeReflectConstruct.default(flag);
      items[2] = new _isNativeReflectConstruct.default();
      const _default2 = new _isNativeReflectConstruct.default();
      items[3] = new _isNativeReflectConstruct.default(flag2);
      const _default3 = new _isNativeReflectConstruct.default(flag2);
      items[4] = new _isNativeReflectConstruct.default();
      const _default4 = new _isNativeReflectConstruct.default();
      items[5] = new _isNativeReflectConstruct.default();
      const _default5 = new _isNativeReflectConstruct.default();
      items[6] = new _isNativeReflectConstruct.default(flag);
      const _default6 = new _isNativeReflectConstruct.default(flag);
      items[7] = new _isNativeReflectConstruct.default(flag);
      const _default7 = new _isNativeReflectConstruct.default(flag);
      items[8] = new _isNativeReflectConstruct.default(flag);
      obj.parsers = items;
      const _default8 = new _isNativeReflectConstruct.default(flag);
      const items1 = [new _isNativeReflectConstruct.default()];
      obj.refiners = items1;
      const result = ENDefaultConfiguration(10343).includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const _default9 = new _isNativeReflectConstruct.default();
      parsers.unshift(new _isNativeReflectConstruct.default(flag));
      const refiners = result.refiners;
      const _default10 = new _isNativeReflectConstruct.default(flag);
      refiners.unshift(new _isNativeReflectConstruct.default());
      const refiners1 = result.refiners;
      const _default11 = new _isNativeReflectConstruct.default();
      refiners1.unshift(new _isNativeReflectConstruct.default());
      const refiners2 = result.refiners;
      const _default12 = new _isNativeReflectConstruct.default();
      refiners2.unshift(new OverlapRemovalRefiner.default());
      const refiners3 = result.refiners;
      const _default13 = new OverlapRemovalRefiner.default();
      refiners3.push(new _isNativeReflectConstruct.default());
      const refiners4 = result.refiners;
      const _default14 = new _isNativeReflectConstruct.default();
      refiners4.push(new regExp.default());
      const refiners5 = result.refiners;
      const _default15 = new regExp.default();
      refiners5.push(new _isNativeReflectConstruct.default());
      return result;
    },
  },
];

export default _createClass(ENDefaultConfiguration, items);
