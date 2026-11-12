// === Module 11359: ENDefaultConfiguration ===

// Module 11359 (ENDefaultConfiguration)
import _mod11360 from "module_11360" /* 11360 */;
import _mod11370 from "module_11370" /* 11370 */;
import _mod11371 from "module_11371" /* 11371 */;
import _mod11372 from "module_11372" /* 11372 */;
import _mod11373 from "module_11373" /* 11373 */;
import _mod11374 from "module_11374" /* 11374 */;
import _mod11375 from "module_11375" /* 11375 */;
import _mod11377 from "module_11377" /* 11377 */;
import _mod11378 from "module_11378" /* 11378 */;
import _mod11379 from "module_11379" /* 11379 */;
import _mod11382 from "module_11382" /* 11382 */;
import _mod11385 from "module_11385" /* 11385 */;
import _mod11387 from "module_11387" /* 11387 */;
import _mod11388 from "module_11388" /* 11388 */;
import _mod11390 from "module_11390" /* 11390 */;
import _mod11391 from "module_11391" /* 11391 */;
import _mod11392 from "module_11392" /* 11392 */;
import _mod11393 from "module_11393" /* 11393 */;
import _mod11394 from "module_11394" /* 11394 */;
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 11395 */;
import _mod11396 from "module_11396" /* 11396 */;
import _mod11397 from "module_11397" /* 11397 */;
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
fn(_mod11360);
fn(_mod11370);
fn(_mod11371);
fn(_mod11372);
fn(_mod11373);
fn(_mod11374);
fn(_mod11375);
fn(_mod11377);
fn(_mod11378);
fn(_mod11379);
fn(_mod11382);
fn(_mod11385);
fn(_mod11387);
fn(_mod11388);
fn(_mod11390);
fn(_mod11391);
fn(_mod11392);
fn(_mod11393);
fn(_mod11394);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const regExp = fn(_mod11396);
const _isNativeReflectConstruct = fn(_mod11397);
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
      const result = ENDefaultConfiguration(11398).includeCommonConfiguration(obj, flag);
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