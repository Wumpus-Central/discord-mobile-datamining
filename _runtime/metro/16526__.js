// === Module 16526: ? ===

// Module 16526
import _mod16471 from "module_16471" /* 16471 */;
import _mod16472 from "module_16472" /* 16472 */;
import _mod16475 from "module_16475" /* 16475 */;
import _mod16491 from "module_16491" /* 16491 */;
import _mod16494 from "module_16494" /* 16494 */;
import _mod16528 from "module_16528" /* 16528 */;
import state from "state" /* 16529 */;
import prop from "module_16527" /* 16527 */;

let closure_5 = _mod16475("".slice);
let closure_6 = _mod16475("".replace);
let closure_7 = _mod16475([].join);
let closure_8 = _mod16471 && !_mod16472(() => 8 !== defineProperty(() => {

}, "length", { value: 8 }).length);
const tmp = _mod16471 && !_mod16472(() => 8 !== defineProperty(() => {

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
  const tmp8 = _mod16491(toString, "name");
  let tmp9 = !tmp8;
  if (tmp8) {
    tmp9 = _mod16528.CONFIGURABLE && toString.name !== text2;
    const tmp10 = _mod16528.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp9) {
    if (_mod16471) {
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
    tmp13 = _mod16491(arg2, "arity");
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
      if (_mod16491(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod16471) {
            defineProperty(toString, "prototype", { writable: false });
          }
        }
        const enforceResult = state.enforce(toString);
        if (!_mod16491(enforceResult, "source")) {
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
  let source = _mod16494(this);
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