// === Module 14137: ? ===

// Module 14137
import _mod14082 from "module_14082" /* 14082 */;
import _mod14083 from "module_14083" /* 14083 */;
import _mod14086 from "module_14086" /* 14086 */;
import _mod14102 from "module_14102" /* 14102 */;
import _mod14105 from "module_14105" /* 14105 */;
import _mod14139 from "module_14139" /* 14139 */;
import _mod14140 from "module_14140" /* 14140 */;
import prop from "module_14138" /* 14138 */;

let closure_5 = _mod14086("".slice);
let closure_6 = _mod14086("".replace);
let closure_7 = _mod14086([].join);
const tmp = _mod14082 && !_mod14083(() => 8 !== defineProperty(() => {

}, "length", { value: 8 }).length);
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
  const tmp10 = _mod14102(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod14139.CONFIGURABLE && toString.name !== text2;
    _mod14139.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod14082) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && _mod14102(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod14102(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod14082) {
            defineProperty(toString, "prototype", { writable: false });
          }
        }
      }
    }
    if (toString.prototype) {
      toString.prototype = undefined;
    }
  } catch (err) {
  }
  const tmp8Result = _mod14140;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod14102(enforceResult, "source")) {
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
  let source = _mod14105(this);
  if (source) {
    const tmpResult = _mod14140;
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