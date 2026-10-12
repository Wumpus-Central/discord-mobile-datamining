// === Module 14609: ? ===

// Module 14609
import _mod14554 from "module_14554" /* 14554 */;
import _mod14555 from "module_14555" /* 14555 */;
import _mod14558 from "module_14558" /* 14558 */;
import _mod14574 from "module_14574" /* 14574 */;
import _mod14577 from "module_14577" /* 14577 */;
import _mod14611 from "module_14611" /* 14611 */;
import state from "state" /* 14612 */;
import prop from "module_14610" /* 14610 */;

let closure_5 = _mod14558("".slice);
let closure_6 = _mod14558("".replace);
let closure_7 = _mod14558([].join);
let closure_8 = _mod14554 && !_mod14555(() => 8 !== defineProperty(() => {

}, "length", { value: 8 }).length);
const tmp = _mod14554 && !_mod14555(() => 8 !== defineProperty(() => {

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
  const tmp8 = _mod14574(toString, "name");
  let tmp9 = !tmp8;
  if (tmp8) {
    tmp9 = _mod14611.CONFIGURABLE && toString.name !== text2;
    const tmp10 = _mod14611.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp9) {
    if (_mod14554) {
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
    tmp13 = _mod14574(arg2, "arity");
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
      if (_mod14574(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod14554) {
            defineProperty(toString, "prototype", { writable: false });
          }
        }
        const enforceResult = state.enforce(toString);
        if (!_mod14574(enforceResult, "source")) {
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
  let source = _mod14577(this);
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