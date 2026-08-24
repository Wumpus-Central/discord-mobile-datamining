// === Module 770: ? ===

// Module 770
import getNative2 from "getNative" /* 747 */;
import getNative3 from "getNative" /* 772 */;
import getNative4 from "getNative" /* 773 */;
import getNative5 from "getNative" /* 774 */;
import toSource from "toSource" /* 742 */;
import toStringTag from "toStringTag" /* 607 */;
import getNative from "getNative" /* 771 */;

let closure_2 = toSource(getNative);
let closure_3 = toSource(getNative2);
let closure_4 = toSource(getNative3);
let closure_5 = toSource(getNative4);
let closure_6 = toSource(getNative5);
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
      if (closure_2 === str) {
        return "[object DataView]";
      } else if (closure_3 === str) {
        return "[object Map]";
      } else if (closure_4 === str) {
        return "[object Promise]";
      } else if (closure_5 === str) {
        return "[object Set]";
      } else if (closure_6 === str) {
        return "[object WeakMap]";
      }
    }
    return tmp3;
  };
}

export default toStringTag;