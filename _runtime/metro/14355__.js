// _runtime/metro/14355__.js
import _mod14300 from "14300__.js";
import _mod14301 from "14301__.js";
import _mod14304 from "14304__.js";
import _mod14320 from "14320__.js";
import _mod14323 from "14323__.js";
import state from "../14358_state.js";
import prop from "14356__.js";

let closure_5 = _mod14304("".slice);
let closure_6 = _mod14304("".replace);
let closure_7 = _mod14304([].join);
let closure_8 = _mod14300 && !_mod14301(() => 8 !== defineProperty(() => {}, "length", { value: 8 }).length);
const tmp = _mod14300 && !_mod14301(() => 8 !== defineProperty(() => {}, "length", { value: 8 }).length);
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
  const tmp8 = _mod14320(toString, "name");
  let tmp9 = !tmp8;
  if (tmp8) {
    tmp9 = tmp6(14357).CONFIGURABLE && toString.name !== text2;
    const tmp10 = tmp6(14357).CONFIGURABLE && toString.name !== text2;
  }
  if (tmp9) {
    if (tmp6(14300)) {
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
    tmp13 = tmp6(14320)(arg2, "arity");
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
      if (tmp6(14320)(arg2, "constructor")) {
        if (arg2.constructor) {
          if (tmp6(14300)) {
            defineProperty(toString, "prototype", { writable: false });
          }
        }
        const enforceResult = tmp6(14358).enforce(toString);
        if (!tmp6(14320)(enforceResult, "source")) {
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
  let source = _mod14323(this);
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
