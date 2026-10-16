// _runtime/metro/15299__.js
import _mod15244 from "15244__.js";
import _mod15245 from "15245__.js";
import _mod15248 from "15248__.js";
import _mod15264 from "15264__.js";
import _mod15267 from "15267__.js";
import _mod15301 from "15301__.js";
import state from "../15302_state.js";
import prop from "15300__.js";

let closure_5 = _mod15248("".slice);
let closure_6 = _mod15248("".replace);
let closure_7 = _mod15248([].join);
let closure_8 = _mod15244 && !_mod15245(() => 8 !== defineProperty(() => {}, "length", { value: 8 }).length);
const tmp = _mod15244 && !_mod15245(() => 8 !== defineProperty(() => {}, "length", { value: 8 }).length);
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
  const tmp8 = _mod15264(toString, "name");
  let tmp9 = !tmp8;
  if (tmp8) {
    tmp9 = _mod15301.CONFIGURABLE && toString.name !== text2;
    const tmp10 = _mod15301.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp9) {
    if (_mod15244) {
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
    tmp13 = _mod15264(arg2, "arity");
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
      if (_mod15264(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15244) {
            defineProperty(toString, "prototype", { writable: false });
          }
        }
        const enforceResult = state.enforce(toString);
        if (!_mod15264(enforceResult, "source")) {
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
  let source = _mod15267(this);
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
