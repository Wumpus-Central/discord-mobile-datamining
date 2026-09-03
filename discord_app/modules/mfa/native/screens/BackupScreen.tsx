// === Module 15519: isValidClipboardCode ===

// Module 15519 (isValidClipboardCode)
import finishMFACheck from "finishMFACheck" /* 15517 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
function isValidClipboardCode(arg0) {
  let tmp3 = arg0.length >= finishMFACheck.BACKUP_CODE_MIN_LENGTH;
  if (tmp3) {
    tmp3 = arg0.length <= finishMFACheck.BACKUP_CODE_MAX_LENGTH;
  }
  return tmp3;
}
({ jsxs: closure_6, jsx: error, Fragment: closure_8 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/mfa/native/screens/BackupScreen.tsx");

export default function BackupScreen(finish) {
  finish = finish.finish;
  let _require = finish;
  importDefault = undefined;
  let first;
  let callback;
  let callback2;
  let React;
  let first1;
  closure_7 = undefined;
  closure_8 = undefined;
  const tmp3 = importDefault(first[7])();
  [tmp5, c1] = callback2(React.useState(false), 2);
  const tmp6 = callback2(React.useState(""), 2);
  first = tmp6[0];
  callback = tmp6[1];
  const tmp4 = callback2(React.useState(false), 2);
  [tmp8, c4] = callback2(React.useState(undefined), 2);
  const tmp7 = callback2(React.useState(undefined), 2);
  [tmp10, c5] = callback2(React.useState(false), 2);
  const tmp11 = callback2(React.useState(10), 2);
  first1 = tmp11[0];
  closure_7 = tmp11[1];
  const items = [first1];
  const effect = React.useEffect(() => {
    if (first1 > 0) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        callback((arg0) => arg0 - 1);
      }, 1000);
      return () => clearTimeout(closure_0);
    }
  }, items);
  _require = undefined;
  _require = callback((arg0) => {
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0) {
      closure_3 = tmp3;
      closure_1_4(undefined);
      closure_1_1(true);
      let v0 = 1;
      obj1 = { mfaType: "backup", data: null };
      obj1[1] = lib.replace(/-/g, "");
      yield lib(obj1);
      if (1 === tmp7) {
        v0 = 0;
        lib = closure_4;
        let message;
        if (lib != null) {
          const body = lib.body;
          if (body != null) {
            message = body.message;
          }
        }
        if (message == null) {
          message = lib.message;
        }
        closure_1_4(message);
        closure_1_1(false);
        c7 = 3;
        const tmp15 = closure_1_4;
      } else if (arg0 === 1) {
        c7 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        v0(true);
        v0 = 0;
      }
      v0 = 0;
      return arg1;
    })();
  });
  const items1 = [finish];
  closure_8 = React.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  let obj = { headerText: null, subtitle: null, input: null, submit: null, screenProps: null, mfaMethod: "backup" };
  const tmp9 = callback2(React.useState(false), 2);
  const intl = _require(first[6]).intl;
  obj[0] = intl.string(_require(first[6]).t.B2T1HD);
  const intl2 = _require(first[6]).intl;
  obj[1] = intl2.string(_require(first[6]).t.c5J7O0);
  if (first1 > 0) {
    obj = { variant: "text-md/normal", children: null };
    const intl3 = tmp16(tmp2[6]).intl;
    const items2 = [intl3.string(tmp16(tmp2[6]).t.RRtlLg), ];
    const intl4 = tmp16(tmp2[6]).intl;
    obj = { countdown: null };
    obj[0] = first1;
    items2[1] = intl4.format(tmp16(tmp2[6]).t.tsWkAE, obj);
    obj[1] = items2;
    obj1 = obj;
  } else {
    obj1 = { variant: "text-md/normal", children: null };
    const intl8 = tmp16(tmp2[6]).intl;
    const items3 = [intl8.string(tmp16(tmp2[6]).t.RRtlLg), ];
    const intl9 = tmp16(tmp2[6]).intl;
    items3[1] = intl9.string(tmp16(tmp2[6]).t.v3a6Pd);
    obj1[1] = items3;
  }
  const items4 = [first1(_require(first[5]).Text, obj1), ];
  const obj2 = { label: null, placeholder: null, isValidClipboardCode: null, maxLength: null, onChangeCode: null, error: null, isDisabled: null, autoFocus: null };
  let tmpResult = tmp(tmp2[9]);
  const intl5 = tmp16(tmp2[6]).intl;
  obj2[0] = intl5.string(_require(first[6]).t["C/ZAw/"]);
  const intl6 = tmp16(tmp2[6]).intl;
  obj2[1] = intl6.string(_require(first[6]).t.fZSi1D);
  obj2[2] = isValidClipboardCode;
  obj2[3] = _require(first[4]).BACKUP_CODE_MAX_LENGTH;
  obj2[4] = function onChangeCode(arg0) {
    callback(arg0);
    _undefined(undefined);
  };
  obj2[5] = tmp8;
  let tmp20 = tmp5;
  if (!tmp5) {
    tmp20 = tmp10;
  }
  const obj3 = { children: null };
  obj2[6] = tmp20;
  obj2[7] = !tmp3;
  items4[1] = closure_7(tmpResult, obj2);
  obj3[0] = items4;
  obj[2] = first1(closure_8, obj3);
  const obj4 = { variant: "primary", text: null, loading: null, onPress: null, disabled: null };
  tmpResult = tmp(tmp2[10]);
  const intl7 = tmp16(tmp2[6]).intl;
  obj4[1] = intl7.string(_require(first[6]).t.geKm7t);
  let tmp22 = tmp5;
  if (!tmp5) {
    tmp22 = tmp10;
  }
  obj4[2] = tmp22;
  obj4[3] = function onPress() {
    return callback2(first);
  };
  if (!tmp5) {
    tmp5 = tmp10;
  }
  if (!tmp5) {
    tmp5 = first.length < tmp16(tmp2[4]).BACKUP_CODE_MIN_LENGTH;
  }
  if (!tmp5) {
    tmp5 = first1 > 0;
  }
  obj4[4] = tmp5;
  obj[3] = closure_7(tmpResult, obj4);
  obj[4] = { mfaChallenge: finish.mfaChallenge, finish };
  return closure_7(importDefault(first[8]), obj);
};