// === Module 10085: ENDefaultConfiguration ===

// Module 10085 (ENDefaultConfiguration)
import _mod10086 from "module_10086" /* 10086 */;
import _mod10096 from "module_10096" /* 10096 */;
import _mod10097 from "module_10097" /* 10097 */;
import _mod10098 from "module_10098" /* 10098 */;
import _mod10099 from "module_10099" /* 10099 */;
import _mod10100 from "module_10100" /* 10100 */;
import _mod10101 from "module_10101" /* 10101 */;
import _mod10103 from "module_10103" /* 10103 */;
import _mod10104 from "module_10104" /* 10104 */;
import _mod10105 from "module_10105" /* 10105 */;
import _mod10108 from "module_10108" /* 10108 */;
import _mod10111 from "module_10111" /* 10111 */;
import _mod10113 from "module_10113" /* 10113 */;
import _mod10114 from "module_10114" /* 10114 */;
import _mod10116 from "module_10116" /* 10116 */;
import _mod10117 from "module_10117" /* 10117 */;
import _mod10118 from "module_10118" /* 10118 */;
import _mod10119 from "module_10119" /* 10119 */;
import _mod10120 from "module_10120" /* 10120 */;
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 10121 */;
import _mod10122 from "module_10122" /* 10122 */;
import _mod10123 from "module_10123" /* 10123 */;
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
fn(_mod10086);
fn(_mod10096);
fn(_mod10097);
fn(_mod10098);
fn(_mod10099);
fn(_mod10100);
fn(_mod10101);
fn(_mod10103);
fn(_mod10104);
fn(_mod10105);
fn(_mod10108);
fn(_mod10111);
fn(_mod10113);
fn(_mod10114);
fn(_mod10116);
fn(_mod10117);
fn(_mod10118);
fn(_mod10119);
fn(_mod10120);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const regExp = fn(_mod10122);
const _isNativeReflectConstruct = fn(_mod10123);
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
      const items = [new regExp.default(flag2), , , , , , , , ];
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
      const result = ENDefaultConfiguration(10124).includeCommonConfiguration(obj, flag);
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