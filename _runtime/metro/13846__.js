// _runtime/metro/13846__.js
import _mod13791 from "13791__.js";
import _mod13792 from "13792__.js";
import _mod13795 from "13795__.js";
import _mod13811 from "13811__.js";
import _mod13814 from "13814__.js";
import _mod13848 from "13848__.js";
import state from "../13849_state.js";
import prop from "13847__.js";

let closure_5 = _mod13795("".slice);
let closure_6 = _mod13795("".replace);
let closure_7 = _mod13795([].join);
let closure_8 = _mod13791 && !_mod13792(() => 8 !== defineProperty(() => {}, "length", { value: 8 }).length);
const tmp = _mod13791 && !_mod13792(() => 8 !== defineProperty(() => {}, "length", { value: 8 }).length);
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
  const tmp8 = _mod13811(toString, "name");
  let tmp9 = !tmp8;
  if (tmp8) {
    tmp9 = _mod13848.CONFIGURABLE && toString.name !== text2;
    const tmp10 = _mod13848.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp9) {
    if (_mod13791) {
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
    tmp13 = _mod13811(arg2, "arity");
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
      if (_mod13811(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod13791) {
            defineProperty(toString, "prototype", { writable: false });
          }
        }
        const enforceResult = state.enforce(toString);
        if (!_mod13811(enforceResult, "source")) {
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
  } catch (err) {}
};
function toString() {
  const self = this;
  let source = _mod13814(this);
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
