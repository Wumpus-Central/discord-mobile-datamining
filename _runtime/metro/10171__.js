// === Module 10171: ? ===

// Module 10171
import _mod10172 from "module_10172" /* 10172 */;
import _mod10182 from "module_10182" /* 10182 */;
import _mod10183 from "module_10183" /* 10183 */;
import _mod10184 from "module_10184" /* 10184 */;
import _mod10185 from "module_10185" /* 10185 */;
import _mod10186 from "module_10186" /* 10186 */;
import _mod10187 from "module_10187" /* 10187 */;
import _mod10189 from "module_10189" /* 10189 */;
import _mod10190 from "module_10190" /* 10190 */;
import _mod10191 from "module_10191" /* 10191 */;
import _mod10194 from "module_10194" /* 10194 */;
import _mod10197 from "module_10197" /* 10197 */;
import _mod10199 from "module_10199" /* 10199 */;
import _mod10200 from "module_10200" /* 10200 */;
import _mod10202 from "module_10202" /* 10202 */;
import _mod10203 from "module_10203" /* 10203 */;
import _mod10204 from "module_10204" /* 10204 */;
import _mod10205 from "module_10205" /* 10205 */;
import _mod10206 from "module_10206" /* 10206 */;
import _mod10207 from "module_10207" /* 10207 */;
import _mod10208 from "module_10208" /* 10208 */;
import _mod10209 from "module_10209" /* 10209 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10210 */;
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
      items = [new module_10203.default(flag2), , , , , , , , ];
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
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);