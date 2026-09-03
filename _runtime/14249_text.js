// _runtime/14249_text.js
import getOwnPropertyDescriptor from "14194_getOwnPropertyDescriptor.js";
import _mod14195 from "metro/14195__.js";
import call from "14198_call.js";
import call2 from "14214_call.js";
import all from "14217_all.js";
import state from "14252_state.js";
import closure_2 from "14250___core-js_shared__.js";

let closure_5 = call("".slice);
let closure_6 = call("".replace);
let closure_7 = call([].join);
let closure_8 =
  getOwnPropertyDescriptor && !_mod14195(() => 8 !== defineProperty(() => {}, "length", { value: 8 }).length);
const tmp = getOwnPropertyDescriptor && !_mod14195(() => 8 !== defineProperty(() => {}, "length", { value: 8 }).length);
let closure_9 = String(String).split("String");
const fn = (toString, toString2) => {
  let text = toString2;
  if ("Symbol(" === callback2(String(toString2), 0, 7)) {
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
  const tmp8 = call2(toString, "name");
  let tmp9 = !tmp8;
  if (tmp8) {
    tmp9 = tmp6(14251).CONFIGURABLE && toString.name !== text2;
    const tmp10 = tmp6(14251).CONFIGURABLE && toString.name !== text2;
  }
  if (tmp9) {
    if (tmp6(14194)) {
      let obj = { value: null, configurable: true };
      obj[0] = text2;
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
    tmp13 = tmp6(14214)(arg2, "arity");
  }
  if (tmp13) {
    tmp13 = toString.length !== arg2.arity;
  }
  if (tmp13) {
    obj = { value: null };
    obj[0] = arg2.arity;
    defineProperty(toString, "length", obj);
  }
  try {
    if (arg2) {
      if (tmp6(14214)(arg2, "constructor")) {
        if (arg2.constructor) {
          if (tmp6(14194)) {
            defineProperty(toString, "prototype", { writable: false });
          }
        }
        const enforceResult = tmp6(14252).enforce(toString);
        if (!tmp6(14214)(enforceResult, "source")) {
          let str11 = "";
          if (typeof text2 === "string") {
            str11 = text2;
          }
          enforceResult.source = closure_7(closure_9, str11);
          const tmp19 = closure_7;
          const tmp20 = closure_9;
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
  let source = all(this);
  if (source) {
    source = state.get(self).source;
    const tmpResult = state;
  }
  if (!source) {
    source = callback(self);
  }
  return source;
}
fn(toString, "toString");
Function.prototype.toString = toString;

export default fn;
