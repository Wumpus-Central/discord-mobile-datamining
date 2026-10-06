// _runtime/metro/10171__.js
import _mod10172 from "10172__.js";
import _mod10182 from "10182__.js";
import _mod10183 from "10183__.js";
import _mod10184 from "10184__.js";
import _mod10185 from "10185__.js";
import _mod10186 from "10186__.js";
import _mod10187 from "10187__.js";
import _mod10189 from "10189__.js";
import _mod10190 from "10190__.js";
import _mod10191 from "10191__.js";
import _mod10194 from "10194__.js";
import _mod10197 from "10197__.js";
import _mod10199 from "10199__.js";
import _mod10200 from "10200__.js";
import _mod10202 from "10202__.js";
import _mod10203 from "10203__.js";
import _mod10204 from "10204__.js";
import _mod10205 from "10205__.js";
import _mod10206 from "10206__.js";
import _mod10207 from "10207__.js";
import _mod10208 from "10208__.js";
import _mod10209 from "10209__.js";
import includeCommonConfiguration2 from "../10210_includeCommonConfiguration.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    let tmp2;
    const tmp = __esModule;
    if (!tmp) {
      tmp2 = { default: __esModule };
      const obj = { default: __esModule };
    } else {
      tmp2 = __esModule;
    }
    return tmp2;
  };
}
const module_10172 = fn(_mod10172);
const module_10182 = fn(_mod10182);
const module_10183 = fn(_mod10183);
const module_10184 = fn(_mod10184);
const module_10185 = fn(_mod10185);
const module_10186 = fn(_mod10186);
const module_10187 = fn(_mod10187);
const module_10189 = fn(_mod10189);
const module_10190 = fn(_mod10190);
const module_10191 = fn(_mod10191);
const module_10194 = fn(_mod10194);
const module_10197 = fn(_mod10197);
const module_10199 = fn(_mod10199);
const module_10200 = fn(_mod10200);
const module_10202 = fn(_mod10202);
const module_10203 = fn(_mod10203);
const module_10204 = fn(_mod10204);
const module_10205 = fn(_mod10205);
const module_10206 = fn(_mod10206);
const module_10207 = fn(_mod10207);
const module_10208 = fn(_mod10208);
const module_10209 = fn(_mod10209);
class ENDefaultConfiguration {
  constructor() {
    _classCallCheck(this, ENDefaultConfiguration);
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
    const push = parsers.push;
    const _default = new module_10197.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10199.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10184.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10202.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10204.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10209.default();
    push6(_default5);
    return configuration;
  },
};
let items = [
  entry,
  {
    key: "createConfiguration",
    value: function createConfiguration() {
      let items;
      let items1;
      let flag2 = arg1;
      if (arg1 === undefined) {
        flag2 = false;
      }
      const obj = { parsers: items, refiners: items1 };
      const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
      items = [new module_10203.default(flag2), , , , , , , ,];
      new module_10203.default(flag2);
      items[1] = new module_10172.default(flag);
      new module_10172.default(flag);
      items[2] = new module_10182.default();
      new module_10182.default();
      items[3] = new module_10183.default(flag2);
      new module_10183.default(flag2);
      items[4] = new module_10200.default();
      new module_10200.default();
      items[5] = new module_10186.default();
      new module_10186.default();
      items[6] = new module_10187.default(flag);
      new module_10187.default(flag);
      items[7] = new module_10189.default(flag);
      new module_10189.default(flag);
      items[8] = new module_10190.default(flag);
      new module_10190.default(flag);
      items1 = [new module_10194.default()];
      new module_10194.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10185.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10206.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10205.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10207.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10194.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10208.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10191.default();
      push3(_default16);
      return result;
    },
  },
];

export default _createClass(ENDefaultConfiguration, items);
