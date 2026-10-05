// _runtime/metro/14119__.js
import _mod14064 from "14064__.js";
import _mod14065 from "14065__.js";
import _mod14068 from "14068__.js";
import _mod14084 from "14084__.js";
import _mod14087 from "14087__.js";
import _mod14121 from "14121__.js";
import _mod14122 from "14122__.js";
import prop from "14120__.js";

let closure_5 = _mod14068("".slice);
let closure_6 = _mod14068("".replace);
let closure_7 = _mod14068([].join);
const tmp = _mod14064 && !_mod14065(() => 8 !== defineProperty(() => {}, "length", { value: 8 }).length);
let closure_8 = tmp;
const str = String(String);
let closure_9 = str.split("String");
const fn = (toString, toString2, arg2) => {
  let text = toString2;
  if ("Symbol(" === closure_5(String(toString2), 0, 7)) {
    text = `${"[" + closure_6(tmp(toString2), /^Symbol\(([^)]*)\).*$/, "$1")}]`;
  }
  let text1 = text;
  const tmp4 = arg2 && arg2.getter;
  if (tmp4) {
    text1 = `get ${tmp2}`;
  }
  let text2 = text1;
  const tmp6 = arg2 && arg2.setter;
  if (tmp6) {
    text2 = `set ${tmp5}`;
  }
  const tmp10 = _mod14084(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod14121.CONFIGURABLE && toString.name !== text2;
    _mod14121.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod14064) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && _mod14084(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod14084(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod14064) {
            defineProperty(toString, "prototype", { writable: false });
          }
        }
      }
    }
    if (toString.prototype) {
      toString.prototype = undefined;
    }
  } catch (err) {}
  const tmp8Result = _mod14122;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod14084(enforceResult, "source")) {
    let str10 = "";
    if (typeof text2 === "string") {
      str10 = text2;
    }
    enforceResult.source = closure_7(closure_9, str10);
  }
  return toString;
};
function toString() {
  const self = this;
  let source = _mod14087(this);
  if (source) {
    const tmpResult = _mod14122;
    source = tmpResult.get(self).source;
  }
  if (!source) {
    source = prop(self);
  }
  return source;
}
fn(toString, "toString");
prototype.toString = toString;

export default fn;
