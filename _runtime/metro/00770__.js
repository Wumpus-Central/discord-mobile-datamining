// _runtime/metro/00770__.js
import getNative2 from "../00747_getNative.js";
import getNative3 from "../00772_getNative.js";
import getNative4 from "../00773_getNative.js";
import getNative5 from "../00774_getNative.js";
import toSource from "../00742_toSource.js";
import toStringTag from "../00607_toStringTag.js";
import getNative from "../00771_getNative.js";

toSource(getNative);
toSource(getNative2);
toSource(getNative3);
toSource(getNative4);
toSource(getNative5);
if (getNative) {
  const _ArrayBuffer = ArrayBuffer;
  let _module6 = getNative;
  const arrayBuffer = new ArrayBuffer(1);
  _module6 = new _module6(arrayBuffer);
  getNative = toStringTag(_module6) != "[object DataView]";
}
if (!getNative) {
  let _module7 = getNative2;
  if (_module7) {
    const tmp20 = new getNative2();
    _module7 = toStringTag(tmp20) != "[object Map]";
  }
  getNative = _module7;
}
if (!getNative) {
  let _module8 = getNative3;
  if (_module8) {
    const _module9 = getNative3;
    _module8 = toStringTag(_module9.resolve()) != "[object Promise]";
  }
  getNative = _module8;
}
if (!getNative) {
  let _module10 = getNative4;
  if (_module10) {
    const tmp26 = new getNative4();
    _module10 = toStringTag(tmp26) != "[object Set]";
  }
  getNative = _module10;
}
if (!getNative) {
  let _module11 = getNative5;
  if (_module11) {
    const tmp31 = new getNative5();
    _module11 = toStringTag(tmp31) != "[object WeakMap]";
  }
  getNative = _module11;
}
if (getNative) {
  toStringTag = function v(_module6) {
    const tmp3 = toStringTag(_module6);
    let constructor;
    if ("[object Object]" == tmp3) {
      constructor = _module6.constructor;
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

export default toStringTag;