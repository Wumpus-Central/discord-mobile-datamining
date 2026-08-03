import toSource from "toSource";
import getNative from "getNative";
import toSource from "toSource";
import getNative from "getNative";
import toSource from "toSource";
import getNative from "getNative";
import toSource from "toSource";
import getNative from "getNative";
import toSource from "toSource";
import getNative from "getNative";
import toStringTag from "toStringTag";
import getNative from "getNative";

if (getNative) {
  const _ArrayBuffer = ArrayBuffer;
  let _module6 = require("getNative");
  const arrayBuffer = new ArrayBuffer(1);
  _module6 = new _module6(arrayBuffer);
  getNative = toStringTag(_module6) != "[object DataView]";
}
if (!getNative) {
  let _module7 = require("getNative");
  if (_module7) {
    const tmp20 = new require("getNative")();
    _module7 = toStringTag(tmp20) != "[object Map]";
  }
  getNative = _module7;
}
if (!getNative) {
  let _module8 = require("getNative");
  if (_module8) {
    const _module9 = require("getNative");
    _module8 = toStringTag(_module9.resolve()) != "[object Promise]";
  }
  getNative = _module8;
}
if (!getNative) {
  let _module10 = require("getNative");
  if (_module10) {
    const tmp26 = new require("getNative")();
    _module10 = toStringTag(tmp26) != "[object Set]";
  }
  getNative = _module10;
}
if (!getNative) {
  let _module11 = require("getNative");
  if (_module11) {
    const tmp31 = new require("getNative")();
    _module11 = toStringTag(tmp31) != "[object WeakMap]";
  }
  getNative = _module11;
}
if (getNative) {
  toStringTag = function v(_module6) {
    const tmp3 = require(607) /* toStringTag */(_module6);
    let constructor;
    if ("[object Object]" == tmp3) {
      constructor = _module6.constructor;
    }
    let str = "";
    if (constructor) {
      str = require(742) /* toSource */(constructor);
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