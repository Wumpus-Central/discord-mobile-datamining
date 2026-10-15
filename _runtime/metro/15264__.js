// === Module 15264: ? ===

// Module 15264
import _mod15209 from "module_15209" /* 15209 */;
import _mod15210 from "module_15210" /* 15210 */;
import _mod15213 from "module_15213" /* 15213 */;
import _mod15229 from "module_15229" /* 15229 */;
import _mod15232 from "module_15232" /* 15232 */;
import _mod15266 from "module_15266" /* 15266 */;
import state from "state" /* 15267 */;
import prop from "module_15265" /* 15265 */;

let closure_5 = _mod15213("".slice);
let closure_6 = _mod15213("".replace);
let closure_7 = _mod15213([].join);
let closure_8 = _mod15209 && !_mod15210(() => 8 !== defineProperty(() => {

}, "length", { value: 8 }).length);
const tmp = _mod15209 && !_mod15210(() => 8 !== defineProperty(() => {

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
  const tmp8 = _mod15229(toString, "name");
  let tmp9 = !tmp8;
  if (tmp8) {
    tmp9 = _mod15266.CONFIGURABLE && toString.name !== text2;
    const tmp10 = _mod15266.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp9) {
    if (_mod15209) {
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
    tmp13 = _mod15229(arg2, "arity");
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
      if (_mod15229(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15209) {
            defineProperty(toString, "prototype", { writable: false });
          }
        }
        const enforceResult = state.enforce(toString);
        if (!_mod15229(enforceResult, "source")) {
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
  let source = _mod15232(this);
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