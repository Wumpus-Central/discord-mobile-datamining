// === Module 10130: ENDefaultConfiguration ===

// Module 10130 (ENDefaultConfiguration)
import _mod10131 from "module_10131" /* 10131 */;
import _mod10141 from "module_10141" /* 10141 */;
import _mod10142 from "module_10142" /* 10142 */;
import _mod10143 from "module_10143" /* 10143 */;
import _mod10144 from "module_10144" /* 10144 */;
import _mod10145 from "module_10145" /* 10145 */;
import _mod10146 from "module_10146" /* 10146 */;
import _mod10148 from "module_10148" /* 10148 */;
import _mod10149 from "module_10149" /* 10149 */;
import _mod10150 from "module_10150" /* 10150 */;
import _mod10153 from "module_10153" /* 10153 */;
import _mod10156 from "module_10156" /* 10156 */;
import _mod10158 from "module_10158" /* 10158 */;
import _mod10159 from "module_10159" /* 10159 */;
import _mod10161 from "module_10161" /* 10161 */;
import _mod10162 from "module_10162" /* 10162 */;
import _mod10163 from "module_10163" /* 10163 */;
import _mod10164 from "module_10164" /* 10164 */;
import _mod10165 from "module_10165" /* 10165 */;
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 10166 */;
import _mod10167 from "module_10167" /* 10167 */;
import _mod10168 from "module_10168" /* 10168 */;
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
fn(_mod10131);
fn(_mod10141);
fn(_mod10142);
fn(_mod10143);
fn(_mod10144);
fn(_mod10145);
fn(_mod10146);
fn(_mod10148);
fn(_mod10149);
fn(_mod10150);
fn(_mod10153);
fn(_mod10156);
fn(_mod10158);
fn(_mod10159);
fn(_mod10161);
fn(_mod10162);
fn(_mod10163);
fn(_mod10164);
fn(_mod10165);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const regExp = fn(_mod10167);
const _isNativeReflectConstruct = fn(_mod10168);
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
      const result = ENDefaultConfiguration(10169).includeCommonConfiguration(obj, flag);
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