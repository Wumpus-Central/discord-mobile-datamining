// === Module 14408: ? ===

// Module 14408
import _mod14353 from "module_14353" /* 14353 */;
import _mod14354 from "module_14354" /* 14354 */;
import _mod14357 from "module_14357" /* 14357 */;
import _mod14373 from "module_14373" /* 14373 */;
import _mod14376 from "module_14376" /* 14376 */;
import _mod14410 from "module_14410" /* 14410 */;
import state from "state" /* 14411 */;
import prop from "module_14409" /* 14409 */;

let closure_5 = _mod14357("".slice);
let closure_6 = _mod14357("".replace);
let closure_7 = _mod14357([].join);
let closure_8 = _mod14353 && !_mod14354(() => 8 !== defineProperty(() => {

}, "length", { value: 8 }).length);
const tmp = _mod14353 && !_mod14354(() => 8 !== defineProperty(() => {

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
  const tmp8 = _mod14373(toString, "name");
  let tmp9 = !tmp8;
  if (tmp8) {
    tmp9 = _mod14410.CONFIGURABLE && toString.name !== text2;
    const tmp10 = _mod14410.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp9) {
    if (_mod14353) {
      let obj = { value: text2, configurable: true };
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
    tmp13 = _mod14373(arg2, "arity");
  }
  if (tmp13) {
    tmp13 = toString.length !== arg2.arity;
  }
  if (tmp13) {
    obj = { value: arg2.arity };
    defineProperty(toString, "length", obj);
  }
  try {
    if (arg2) {
      if (_mod14373(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod14353) {
            defineProperty(toString, "prototype", { writable: false });
          }
        }
        const enforceResult = state.enforce(toString);
        if (!_mod14373(enforceResult, "source")) {
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
  let source = _mod14376(this);
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