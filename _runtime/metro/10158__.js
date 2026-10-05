// === Module 10158: ? ===

// Module 10158
import _mod10159 from "module_10159" /* 10159 */;
import _mod10169 from "module_10169" /* 10169 */;
import _mod10170 from "module_10170" /* 10170 */;
import _mod10171 from "module_10171" /* 10171 */;
import _mod10172 from "module_10172" /* 10172 */;
import _mod10173 from "module_10173" /* 10173 */;
import _mod10174 from "module_10174" /* 10174 */;
import _mod10176 from "module_10176" /* 10176 */;
import _mod10177 from "module_10177" /* 10177 */;
import _mod10178 from "module_10178" /* 10178 */;
import _mod10181 from "module_10181" /* 10181 */;
import _mod10184 from "module_10184" /* 10184 */;
import _mod10186 from "module_10186" /* 10186 */;
import _mod10187 from "module_10187" /* 10187 */;
import _mod10189 from "module_10189" /* 10189 */;
import _mod10190 from "module_10190" /* 10190 */;
import _mod10191 from "module_10191" /* 10191 */;
import _mod10192 from "module_10192" /* 10192 */;
import _mod10193 from "module_10193" /* 10193 */;
import _mod10194 from "module_10194" /* 10194 */;
import _mod10195 from "module_10195" /* 10195 */;
import _mod10196 from "module_10196" /* 10196 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10197 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

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
const module_10159 = fn(_mod10159);
const module_10169 = fn(_mod10169);
const module_10170 = fn(_mod10170);
const module_10171 = fn(_mod10171);
const module_10172 = fn(_mod10172);
const module_10173 = fn(_mod10173);
const module_10174 = fn(_mod10174);
const module_10176 = fn(_mod10176);
const module_10177 = fn(_mod10177);
const module_10178 = fn(_mod10178);
const module_10181 = fn(_mod10181);
const module_10184 = fn(_mod10184);
const module_10186 = fn(_mod10186);
const module_10187 = fn(_mod10187);
const module_10189 = fn(_mod10189);
const module_10190 = fn(_mod10190);
const module_10191 = fn(_mod10191);
const module_10192 = fn(_mod10192);
const module_10193 = fn(_mod10193);
const module_10194 = fn(_mod10194);
const module_10195 = fn(_mod10195);
const module_10196 = fn(_mod10196);
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
    const _default = new module_10184.default();
    push(_default);
    const parsers1 = configuration.parsers;
    const push2 = parsers1.push;
    const _default1 = new module_10186.default();
    push2(_default1);
    const parsers2 = configuration.parsers;
    const push3 = parsers2.push;
    const _default2 = new module_10171.default();
    push3(_default2);
    const parsers3 = configuration.parsers;
    const push4 = parsers3.push;
    const _default3 = new module_10189.default();
    push4(_default3);
    const parsers4 = configuration.parsers;
    const push5 = parsers4.push;
    const _default4 = new module_10191.default();
    push5(_default4);
    const refiners = configuration.refiners;
    const push6 = refiners.push;
    const _default5 = new module_10196.default();
    push6(_default5);
    return configuration;
  }
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
      items = [new module_10190.default(flag2), , , , , , , , ];
      new module_10190.default(flag2);
      items[1] = new module_10159.default(flag);
      new module_10159.default(flag);
      items[2] = new module_10169.default();
      new module_10169.default();
      items[3] = new module_10170.default(flag2);
      new module_10170.default(flag2);
      items[4] = new module_10187.default();
      new module_10187.default();
      items[5] = new module_10173.default();
      new module_10173.default();
      items[6] = new module_10174.default(flag);
      new module_10174.default(flag);
      items[7] = new module_10176.default(flag);
      new module_10176.default(flag);
      items[8] = new module_10177.default(flag);
      new module_10177.default(flag);
      items1 = [new module_10181.default()];
      new module_10181.default();
      const result = includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const unshift = parsers.unshift;
      const _default10 = new module_10172.default(flag);
      unshift(_default10);
      const refiners = result.refiners;
      const unshift2 = refiners.unshift;
      const _default11 = new module_10193.default();
      unshift2(_default11);
      const refiners1 = result.refiners;
      const unshift3 = refiners1.unshift;
      const _default12 = new module_10192.default();
      unshift3(_default12);
      const refiners2 = result.refiners;
      const unshift4 = refiners2.unshift;
      const _default13 = new module_10194.default();
      unshift4(_default13);
      const refiners3 = result.refiners;
      const push = refiners3.push;
      const _default14 = new module_10181.default();
      push(_default14);
      const refiners4 = result.refiners;
      const push2 = refiners4.push;
      const _default15 = new module_10195.default();
      push2(_default15);
      const refiners5 = result.refiners;
      const push3 = refiners5.push;
      const _default16 = new module_10178.default();
      push3(_default16);
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);