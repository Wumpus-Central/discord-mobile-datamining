// === Module 14015: ? ===

// Module 14015
import _mod13960 from "module_13960" /* 13960 */;
import _mod13961 from "module_13961" /* 13961 */;
import _mod13964 from "module_13964" /* 13964 */;
import _mod13980 from "module_13980" /* 13980 */;
import _mod13983 from "module_13983" /* 13983 */;
import _mod14017 from "module_14017" /* 14017 */;
import state from "state" /* 14018 */;
import prop from "module_14016" /* 14016 */;

let closure_5 = _mod13964("".slice);
let closure_6 = _mod13964("".replace);
let closure_7 = _mod13964([].join);
let closure_8 = _mod13960 && !_mod13961(() => 8 !== defineProperty(() => {

}, "length", { value: 8 }).length);
const tmp = _mod13960 && !_mod13961(() => 8 !== defineProperty(() => {

}, "length", { value: 8 }).length);
let closure_9 = String(String).split("String");
const fn = (toString, toString2, arg2) => {
  let text = toString2;
  if ("Symbol(" === closure_5(String(toString2), 0, 7)) {
    text = `${"[" + closure_6(tmp(toString2), /^Symbol\(([^)]*)\).*$/, "$1")}]`;
  }
  let getter = arg2;
  if (arg2) {
    getter = arg2.getter;
  }
  let text1 = text;
  if (getter) {
    text1 = `get ${tmp2}`;
  }
  let setter = arg2;
  if (arg2) {
    setter = arg2.setter;
  }
  let text2 = text1;
  if (setter) {
    text2 = `set ${tmp4}`;
  }
  const tmp8 = _mod13980(toString, "name");
  let tmp9 = !tmp8;
  if (tmp8) {
    tmp9 = _mod14017.CONFIGURABLE && toString.name !== text2;
    const tmp10 = _mod14017.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp9) {
    if (_mod13960) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  let tmp13 = closure_8;
  if (closure_8) {
    tmp13 = arg2;
  }
  if (tmp13) {
    tmp13 = _mod13980(arg2, "arity");
  }
  if (tmp13) {
    tmp13 = toString.length !== arg2.arity;
  }
  if (tmp13) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod13980(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod13960) {
            defineProperty(toString, "prototype", { writable: false });
          }
        }
        const enforceResult = state.enforce(toString);
        if (!_mod13980(enforceResult, "source")) {
          let str11 = "";
          if (typeof text2 === "string") {
            str11 = text2;
          }
          enforceResult.source = closure_7(closure_9, str11);
        }
        return toString;
      }
    }
    if (toString.prototype) {
      toString.prototype = undefined;
    }
  } catch (err) {
  }
};
function toString() {
  const self = this;
  let source = _mod13983(this);
  if (source) {
    source = state.get(self).source;
    const tmpResult = state;
  }
  if (!source) {
    source = prop(self);
  }
  return source;
}
fn(toString, "toString");
Function.prototype.toString = toString;

export default fn;