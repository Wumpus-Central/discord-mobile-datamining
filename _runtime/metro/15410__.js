// === Module 15410: ? ===

// Module 15410
import _mod15355 from "module_15355" /* 15355 */;
import _mod15356 from "module_15356" /* 15356 */;
import _mod15359 from "module_15359" /* 15359 */;
import _mod15375 from "module_15375" /* 15375 */;
import _mod15378 from "module_15378" /* 15378 */;
import _mod15412 from "module_15412" /* 15412 */;
import state from "state" /* 15413 */;
import prop from "module_15411" /* 15411 */;

let closure_5 = _mod15359("".slice);
let closure_6 = _mod15359("".replace);
let closure_7 = _mod15359([].join);
let closure_8 = _mod15355 && !_mod15356(() => 8 !== defineProperty(() => {

}, "length", { value: 8 }).length);
const tmp = _mod15355 && !_mod15356(() => 8 !== defineProperty(() => {

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
  const tmp8 = _mod15375(toString, "name");
  let tmp9 = !tmp8;
  if (tmp8) {
    tmp9 = _mod15412.CONFIGURABLE && toString.name !== text2;
    const tmp10 = _mod15412.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp9) {
    if (_mod15355) {
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
    tmp13 = _mod15375(arg2, "arity");
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
      if (_mod15375(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15355) {
            defineProperty(toString, "prototype", { writable: false });
          }
        }
        const enforceResult = state.enforce(toString);
        if (!_mod15375(enforceResult, "source")) {
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
  let source = _mod15378(this);
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