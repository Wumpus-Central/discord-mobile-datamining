// === Module 12090: ENDefaultConfiguration ===

// Module 12090 (ENDefaultConfiguration)
import _mod12091 from "module_12091" /* 12091 */;
import _mod12101 from "module_12101" /* 12101 */;
import _mod12102 from "module_12102" /* 12102 */;
import _mod12103 from "module_12103" /* 12103 */;
import _mod12104 from "module_12104" /* 12104 */;
import _mod12105 from "module_12105" /* 12105 */;
import _mod12106 from "module_12106" /* 12106 */;
import _mod12108 from "module_12108" /* 12108 */;
import _mod12109 from "module_12109" /* 12109 */;
import _mod12110 from "module_12110" /* 12110 */;
import _mod12113 from "module_12113" /* 12113 */;
import _mod12116 from "module_12116" /* 12116 */;
import _mod12118 from "module_12118" /* 12118 */;
import _mod12119 from "module_12119" /* 12119 */;
import _mod12121 from "module_12121" /* 12121 */;
import _mod12122 from "module_12122" /* 12122 */;
import _mod12123 from "module_12123" /* 12123 */;
import _mod12124 from "module_12124" /* 12124 */;
import _mod12125 from "module_12125" /* 12125 */;
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 12126 */;
import _mod12127 from "module_12127" /* 12127 */;
import _mod12128 from "module_12128" /* 12128 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

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
fn(_mod12091);
fn(_mod12101);
fn(_mod12102);
fn(_mod12103);
fn(_mod12104);
fn(_mod12105);
fn(_mod12106);
fn(_mod12108);
fn(_mod12109);
fn(_mod12110);
fn(_mod12113);
fn(_mod12116);
fn(_mod12118);
fn(_mod12119);
fn(_mod12121);
fn(_mod12122);
fn(_mod12123);
fn(_mod12124);
fn(_mod12125);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const regExp = fn(_mod12127);
const _isNativeReflectConstruct = fn(_mod12128);
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
  }
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
      items = [new regExp.default(flag2), , , , , , , , ];
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
      const result = ENDefaultConfiguration(12129).includeCommonConfiguration(obj, flag);
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
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);