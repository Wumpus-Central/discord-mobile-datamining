// _runtime/metro/15428__.js
import _mod15373 from "15373__.js";
import _mod15374 from "15374__.js";
import _mod15377 from "15377__.js";
import _mod15393 from "15393__.js";
import _mod15396 from "15396__.js";
import _mod15430 from "15430__.js";
import state from "../15431_state.js";
import prop from "15429__.js";

let closure_5 = _mod15377("".slice);
let closure_6 = _mod15377("".replace);
let closure_7 = _mod15377([].join);
let closure_8 = _mod15373 && !_mod15374(() => 8 !== defineProperty(() => {}, "length", { value: 8 }).length);
const tmp = _mod15373 && !_mod15374(() => 8 !== defineProperty(() => {}, "length", { value: 8 }).length);
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
  const tmp8 = _mod15393(toString, "name");
  let tmp9 = !tmp8;
  if (tmp8) {
    tmp9 = _mod15430.CONFIGURABLE && toString.name !== text2;
    const tmp10 = _mod15430.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp9) {
    if (_mod15373) {
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
    tmp13 = _mod15393(arg2, "arity");
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
      if (_mod15393(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15373) {
            defineProperty(toString, "prototype", { writable: false });
          }
        }
        const enforceResult = state.enforce(toString);
        if (!_mod15393(enforceResult, "source")) {
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
  let source = _mod15396(this);
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
