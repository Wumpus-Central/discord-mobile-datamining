// === Module 10613: createConfiguration ===

// Module 10613 (createConfiguration)
import Chrono from "Chrono" /* 10442 */;
import regExp from "regExp" /* 10475 */;
import includeCommonConfiguration from "includeCommonConfiguration" /* 10482 */;
import _isNativeReflectConstruct2 from "_isNativeReflectConstruct" /* 10614 */;
import _isNativeReflectConstruct3 from "_isNativeReflectConstruct" /* 10616 */;
import _isNativeReflectConstruct4 from "_isNativeReflectConstruct" /* 10617 */;
import _isNativeReflectConstruct5 from "_isNativeReflectConstruct" /* 10618 */;
import _isNativeReflectConstruct6 from "_isNativeReflectConstruct" /* 10619 */;
import _isNativeReflectConstruct7 from "_isNativeReflectConstruct" /* 10620 */;
import _isNativeReflectConstruct8 from "_isNativeReflectConstruct" /* 10621 */;
import _isNativeReflectConstruct9 from "_isNativeReflectConstruct" /* 10622 */;
import _isNativeReflectConstruct10 from "_isNativeReflectConstruct" /* 10623 */;
import _isNativeReflectConstruct11 from "_isNativeReflectConstruct" /* 10624 */;
import _isNativeReflectConstruct12 from "_isNativeReflectConstruct" /* 10625 */;
import _isNativeReflectConstruct13 from "_isNativeReflectConstruct" /* 10626 */;
import _isNativeReflectConstruct14 from "_isNativeReflectConstruct" /* 10627 */;
import _isNativeReflectConstruct15 from "_isNativeReflectConstruct" /* 10628 */;
import _isNativeReflectConstruct16 from "_isNativeReflectConstruct" /* 10629 */;
import _isNativeReflectConstruct17 from "_isNativeReflectConstruct" /* 10630 */;
import _isNativeReflectConstruct18 from "_isNativeReflectConstruct" /* 10631 */;

function createConfiguration(flag, arg1) {
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = false;
  }
  const obj = { parsers: null, refiners: null };
  const items = [new mod12.default(flag2), , , , , , , , , ];
  const _default = new mod12.default(flag2);
  items[1] = new mod.default();
  const _default1 = new mod.default();
  items[2] = new mod2.default();
  const _default2 = new mod2.default();
  items[3] = new mod3.default();
  const _default3 = new mod3.default();
  items[4] = new mod11.default();
  const _default4 = new mod11.default();
  items[5] = new mod4.default();
  const _default5 = new mod4.default();
  items[6] = new mod5.default();
  const _default6 = new mod5.default();
  items[7] = new mod6.default(flag);
  const _default7 = new mod6.default(flag);
  items[8] = new mod7.default(flag);
  const _default8 = new mod7.default(flag);
  items[9] = new mod8.default(flag);
  obj[0] = items;
  const _default9 = new mod8.default(flag);
  const items1 = [new mod13.default(), , ];
  const _default10 = new mod13.default();
  items1[1] = new mod10.default();
  const _default11 = new mod10.default();
  items1[2] = new mod9.default();
  obj[1] = items1;
  return includeCommonConfiguration.includeCommonConfiguration(obj, flag);
}
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
function createCasualConfiguration() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const tmp = createConfiguration(false, flag);
  const parsers = tmp.parsers;
  parsers.unshift(new _isNativeReflectConstruct.default());
  const parsers1 = tmp.parsers;
  const _default = new _isNativeReflectConstruct.default();
  parsers1.unshift(new _isNativeReflectConstruct.default());
  const parsers2 = tmp.parsers;
  const _default1 = new _isNativeReflectConstruct.default();
  parsers2.unshift(new _isNativeReflectConstruct.default());
  const parsers3 = tmp.parsers;
  const _default2 = new _isNativeReflectConstruct.default();
  parsers3.unshift(new _isNativeReflectConstruct.default());
  const parsers4 = tmp.parsers;
  const _default3 = new _isNativeReflectConstruct.default();
  parsers4.unshift(new _isNativeReflectConstruct.default());
  return tmp;
}
let closure_3 = fn(_isNativeReflectConstruct2);
let closure_4 = fn(_isNativeReflectConstruct3);
let closure_5 = fn(_isNativeReflectConstruct4);
let _isNativeReflectConstruct = fn(_isNativeReflectConstruct5);
let closure_7 = fn(_isNativeReflectConstruct6);
let closure_8 = fn(_isNativeReflectConstruct7);
let closure_9 = fn(_isNativeReflectConstruct8);
let closure_10 = fn(_isNativeReflectConstruct9);
let closure_11 = fn(_isNativeReflectConstruct10);
let closure_12 = fn(_isNativeReflectConstruct11);
let closure_13 = fn(_isNativeReflectConstruct12);
_isNativeReflectConstruct = fn(_isNativeReflectConstruct13);
_isNativeReflectConstruct = fn(_isNativeReflectConstruct14);
let closure_16 = fn(_isNativeReflectConstruct15);
_isNativeReflectConstruct = fn(_isNativeReflectConstruct16);
let closure_18 = fn(regExp);
_isNativeReflectConstruct = fn(_isNativeReflectConstruct17);
let closure_20 = fn(_isNativeReflectConstruct18);
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
parsers.unshift(new _isNativeReflectConstruct.default());
let parsers1 = configuration.parsers;
let _default = new _isNativeReflectConstruct.default();
parsers1.unshift(new _isNativeReflectConstruct.default());
let parsers2 = configuration.parsers;
let _default1 = new _isNativeReflectConstruct.default();
parsers2.unshift(new _isNativeReflectConstruct.default());
let parsers3 = configuration.parsers;
let _default2 = new _isNativeReflectConstruct.default();
parsers3.unshift(new _isNativeReflectConstruct.default());
let parsers4 = configuration.parsers;
let _default3 = new _isNativeReflectConstruct.default();
parsers4.unshift(new _isNativeReflectConstruct.default());
const chrono = new Chrono.Chrono(configuration);
const chrono1 = new Chrono.Chrono(createConfiguration(true, false));
const chrono2 = new Chrono.Chrono(createConfiguration(false, true));

export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
export { createCasualConfiguration };
export { createConfiguration };
export const casual = chrono;
export const strict = chrono1;
export const GB = chrono2;