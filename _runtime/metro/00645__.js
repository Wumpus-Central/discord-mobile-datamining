// _runtime/metro/00645__.js
import getNative2 from "../00622_getNative.js";
import getNative3 from "../00647_getNative.js";
import getNative4 from "../00648_getNative.js";
import getNative5 from "../00649_getNative.js";
import toSource_mod from "../00617_toSource.js";
import baseGetTag_mod from "../00522_baseGetTag.js";
import getNative_mod from "../00646_getNative.js";

let getNative;
let toSource = toSource_mod;
toSource(getNative);
toSource = toSource_mod;
toSource(getNative2);
toSource = toSource_mod;
toSource(getNative3);
toSource = toSource_mod;
toSource(getNative4);
toSource = toSource_mod;
toSource(getNative5);
let baseGetTag = baseGetTag_mod;
getNative = getNative_mod;
if (getNative) {
  const _ArrayBuffer = ArrayBuffer;
  const self = this;
  const self2 = this;
  const _module6 = getNative;
  const arrayBuffer = new ArrayBuffer(1);
  const self3 = this;
  const self4 = this;
  const _module61 = new _module6(arrayBuffer);
  let str = "[object DataView]";
  getNative = baseGetTag(_module61) != "[object DataView]";
}
if (!getNative) {
  let _module7 = getNative2;
  if (_module7) {
    const self5 = this;
    const self6 = this;
    const tmp14 = new getNative2();
    _module7 = baseGetTag(tmp14) != "[object Map]";
  }
  getNative = _module7;
}
if (!getNative) {
  let _module8 = getNative3;
  if (_module8) {
    const _module9 = getNative3;
    _module8 = baseGetTag(_module9.resolve()) != "[object Promise]";
  }
  getNative = _module8;
}
if (!getNative) {
  let _module10 = getNative4;
  if (_module10) {
    const self7 = this;
    const self8 = this;
    const tmp18 = new getNative4();
    _module10 = baseGetTag(tmp18) != "[object Set]";
  }
  getNative = _module10;
}
if (!getNative) {
  let _module11 = getNative5;
  if (_module11) {
    const self9 = this;
    const self10 = this;
    const tmp21 = new getNative5();
    _module11 = baseGetTag(tmp21) != "[object WeakMap]";
  }
  getNative = _module11;
}
if (getNative) {
  baseGetTag = function v(_module61) {
    const tmp3 = baseGetTag(_module61);
    let constructor;
    if ("[object Object]" == tmp3) {
      constructor = _module61.constructor;
    }
    let str = "";
    if (constructor) {
      str = toSource(constructor);
    }
    if (str) {
      if (getNative === str) {
        return "[object DataView]";
      } else if (getNative === str) {
        return "[object Map]";
      } else if (getNative === str) {
        return "[object Promise]";
      } else if (getNative === str) {
        return "[object Set]";
      } else if (getNative === str) {
        return "[object WeakMap]";
      }
    }
    return tmp3;
  };
}

export default baseGetTag;
