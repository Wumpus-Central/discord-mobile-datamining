// === Module 10429: ENDefaultConfiguration ===

// Module 10429 (ENDefaultConfiguration)
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 10430 */;
import _isNativeReflectConstruct2 from "_isNativeReflectConstruct" /* 10440 */;
import _isNativeReflectConstruct3 from "_isNativeReflectConstruct" /* 10441 */;
import _isNativeReflectConstruct4 from "_isNativeReflectConstruct" /* 10442 */;
import _isNativeReflectConstruct5 from "_isNativeReflectConstruct" /* 10443 */;
import _isNativeReflectConstruct6 from "_isNativeReflectConstruct" /* 10444 */;
import _isNativeReflectConstruct7 from "_isNativeReflectConstruct" /* 10445 */;
import _isNativeReflectConstruct8 from "_isNativeReflectConstruct" /* 10447 */;
import _isNativeReflectConstruct9 from "_isNativeReflectConstruct" /* 10448 */;
import _isNativeReflectConstruct10 from "_isNativeReflectConstruct" /* 10449 */;
import _isNativeReflectConstruct11 from "_isNativeReflectConstruct" /* 10452 */;
import _isNativeReflectConstruct12 from "_isNativeReflectConstruct" /* 10455 */;
import _isNativeReflectConstruct13 from "_isNativeReflectConstruct" /* 10457 */;
import _isNativeReflectConstruct14 from "_isNativeReflectConstruct" /* 10458 */;
import _isNativeReflectConstruct15 from "_isNativeReflectConstruct" /* 10460 */;
import regExp from "regExp" /* 10461 */;
import _isNativeReflectConstruct16 from "_isNativeReflectConstruct" /* 10462 */;
import _isNativeReflectConstruct17 from "_isNativeReflectConstruct" /* 10463 */;
import _isNativeReflectConstruct18 from "_isNativeReflectConstruct" /* 10464 */;
import OverlapRemovalRefiner from "OverlapRemovalRefiner" /* 10465 */;
import regExp2 from "regExp" /* 10466 */;
import _isNativeReflectConstruct19 from "_isNativeReflectConstruct" /* 10467 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const ENDefaultConfiguration = require;
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
let closure_3 = fn(_isNativeReflectConstruct);
let closure_4 = fn(_isNativeReflectConstruct2);
let closure_5 = fn(_isNativeReflectConstruct3);
let closure_6 = fn(_isNativeReflectConstruct4);
let closure_7 = fn(_isNativeReflectConstruct5);
let closure_8 = fn(_isNativeReflectConstruct6);
let closure_9 = fn(_isNativeReflectConstruct7);
let closure_10 = fn(_isNativeReflectConstruct8);
let closure_11 = fn(_isNativeReflectConstruct9);
let closure_12 = fn(_isNativeReflectConstruct10);
let closure_13 = fn(_isNativeReflectConstruct11);
let closure_14 = fn(_isNativeReflectConstruct12);
let closure_15 = fn(_isNativeReflectConstruct13);
let closure_16 = fn(_isNativeReflectConstruct14);
let closure_17 = fn(_isNativeReflectConstruct15);
let closure_18 = fn(regExp);
let closure_19 = fn(_isNativeReflectConstruct16);
let closure_20 = fn(_isNativeReflectConstruct17);
let closure_21 = fn(_isNativeReflectConstruct18);
let closure_22 = fn(OverlapRemovalRefiner);
let closure_23 = fn(regExp2);
let closure_24 = fn(_isNativeReflectConstruct19);
class ENDefaultConfiguration {
  constructor() {
    tmp = closure_2(this, ENDefaultConfiguration);
    return;
  }
}
let items = [
  {
    key: "createCasualConfiguration",
    value: function createCasualConfiguration() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      const configuration = this.createConfiguration(false, flag);
      const parsers = configuration.parsers;
      parsers.push(new mod12.default());
      const parsers1 = configuration.parsers;
      const _default = new mod12.default();
      parsers1.push(new mod13.default());
      const parsers2 = configuration.parsers;
      const _default1 = new mod13.default();
      parsers2.push(new mod4.default());
      const parsers3 = configuration.parsers;
      const _default2 = new mod4.default();
      parsers3.push(new mod15.default());
      const parsers4 = configuration.parsers;
      const _default3 = new mod15.default();
      parsers4.push(new mod17.default());
      const refiners = configuration.refiners;
      const _default4 = new mod17.default();
      refiners.push(new mod22.default());
      return configuration;
    }
  },
  {
    key: "createConfiguration",
    value: function createConfiguration(flag) {
      if (flag === undefined) {
        flag = true;
      }
      let flag2 = arg1;
      if (arg1 === undefined) {
        flag2 = false;
      }
      const obj = { parsers: null, refiners: null };
      const items = [new mod16.default(flag2), , , , , , , , ];
      const _default = new mod16.default(flag2);
      items[1] = new mod.default(flag);
      const _default1 = new mod.default(flag);
      items[2] = new mod2.default();
      const _default2 = new mod2.default();
      items[3] = new mod3.default(flag2);
      const _default3 = new mod3.default(flag2);
      items[4] = new mod14.default();
      const _default4 = new mod14.default();
      items[5] = new mod6.default();
      const _default5 = new mod6.default();
      items[6] = new mod7.default(flag);
      const _default6 = new mod7.default(flag);
      items[7] = new mod8.default(flag);
      const _default7 = new mod8.default(flag);
      items[8] = new mod9.default(flag);
      obj[0] = items;
      const _default8 = new mod9.default(flag);
      const items1 = [new mod11.default()];
      obj[1] = items1;
      const result = ENDefaultConfiguration(10468).includeCommonConfiguration(obj, flag);
      const parsers = result.parsers;
      const _default9 = new mod11.default();
      parsers.unshift(new mod5.default(flag));
      const refiners = result.refiners;
      const _default10 = new mod5.default(flag);
      refiners.unshift(new mod19.default());
      const refiners1 = result.refiners;
      const _default11 = new mod19.default();
      refiners1.unshift(new mod18.default());
      const refiners2 = result.refiners;
      const _default12 = new mod18.default();
      refiners2.unshift(new mod20.default());
      const refiners3 = result.refiners;
      const _default13 = new mod20.default();
      refiners3.push(new mod11.default());
      const refiners4 = result.refiners;
      const _default14 = new mod11.default();
      refiners4.push(new mod21.default());
      const refiners5 = result.refiners;
      const _default15 = new mod21.default();
      refiners5.push(new mod10.default());
      return result;
    }
  }
];

export default _createClass(ENDefaultConfiguration, items);