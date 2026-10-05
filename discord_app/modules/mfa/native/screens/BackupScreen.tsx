// === Module 15510: BackupScreen ===

// Module 15510 (BackupScreen)
import intl6 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import useWideAuthViewDefault from "useWideAuthView" /* 6432 */;
import MFA from "MFA" /* 15508 */;
import ClipboardCopyInputDefault from "ClipboardCopyInput" /* 15509 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c6, c7, closure_3, importDefault;

let metroImportAll;
let metroImportDefault;
let metroRequire;
function removeDashes(str) {
  return str.replace(/-/g, "");
}
function isValidClipboardCode(arg0) {
  const tmp3 = arg0.length >= MFA.BACKUP_CODE_MIN_LENGTH && arg0.length <= MFA.BACKUP_CODE_MAX_LENGTH;
  return tmp3;
}
function getFormattedExplainer(first1) {
  let items;
  let items1;
  let obj3;
  const Text = Text_Text.Text;
  if (first1 > 0) {
    const obj = { variant: "text-md/normal", children: items };
    const intl = intl6.intl;
    items = [intl.string(intl6.t.RRtlLg), ];
    const intl2 = intl6.intl;
    const obj2 = { countdown: first1 };
    items[1] = intl2.format(intl6.t.tsWkAE, obj2);
    obj3 = obj;
  } else {
    obj3 = { variant: "text-md/normal", children: items1 };
    const intl3 = intl6.intl;
    items1 = [intl3.string(intl6.t.RRtlLg), ];
    const intl4 = intl6.intl;
    items1[1] = intl4.string(intl6.t.v3a6Pd);
  }
  return metroRequire(Text, obj3);
}
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ jsxs: metroRequire, jsx: metroImportDefault, Fragment: metroImportAll } = Fragment);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_7;
  let finish;
  let first;
  let mfaChallenge;
  let obj3;
  let obj4;
  let tmp10;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp19;
  let tmp26;
  let tmp27;
  let tmp7;
  let obj = finish(576);
  const cResult = obj.c(34);
  ({ mfaChallenge, finish } = arg0);
  const tmp5 = useWideAuthViewDefault();
  [tmp7, importDefault] = _slicedToArray(react.useState(false), 2);
  const tmp6 = _slicedToArray(react.useState(false), 2);
  [dependencyMap, _asyncToGenerator] = react.useState("");
  const tmp9 = _slicedToArray(react.useState(undefined), 2);
  [tmp10, _slicedToArray] = tmp9;
  const tmp11 = _slicedToArray(react.useState(false), 2);
  [tmp12, react] = tmp11;
  [first, closure_7] = react.useState(10);
  if (cResult[0] !== first) {
    const fn = function f() {
      let closure_0;
      if (first > 0) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          closure_1_7((arg0) => arg0 - 1);
        }, 1000);
        return () => clearTimeout(closure_0);
      }
    };
    const items = [first];
    cResult[0] = first;
    cResult[1] = fn;
    cResult[2] = items;
    tmp16 = items;
    tmp15 = fn;
  } else {
    tmp15 = cResult[1];
    tmp16 = cResult[2];
  }
  const effect = react.useEffect(tmp15, tmp16);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(arg0) {
        closure_3(arg0);
        _slicedToArray(undefined);
      }
    }
    cResult[3] = C;
  } else {
    class C {
      constructor(arg0) {
        closure_3(arg0);
        _slicedToArray(undefined);
      }
    }
  }
  if (cResult[4] !== finish) {
    class C {
      constructor(arg0) {
        closure_3(arg0);
        _slicedToArray(undefined);
      }
    }
    let closure_0 = _asyncToGenerator(async (arg0) => {
      let closure_4;
      let message2;
      closure_0 = arg0;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let v0;
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              closure_0 = undefined;
              tmp28(undefined);
              message2(true);
              v0 = 1;
              const obj4 = { mfaType: "backup", data: removeDashes(closure_0) };
              c6 = 2;
              c7 = 1;
              const obj5 = { value: closure_0(obj4), done: false };
              return obj5;
            }
          } else {
            if (1 === c6) {
              v0 = 0;
              closure_0 = tmp28;
              let message;
              if (closure_0 != null) {
                const body = closure_0.body;
                if (body != null) {
                  message = body.message;
                }
              }
              message2 = message;
              if (message == null) {
                message2 = closure_0.message;
              }
              tmp28(message2);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c7 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              v0(true);
              v0 = 0;
            }
            message2(false);
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp28) {
          if (0 === v0) {
            c7 = 3;
            throw tmp28;
          } else {
            c6 = 1;
          }
        }
      }
    });
    let fn2 = function() {
      return closure_0(...arguments);
    };
    cResult[4] = finish;
    cResult[5] = fn2;
    tmp19 = fn2;
  } else {
    class C {
      constructor(arg0) {
        closure_3(arg0);
        _slicedToArray(undefined);
      }
    }
  }
  fn2 = tmp19;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(arg0) {
        closure_3(arg0);
        _slicedToArray(undefined);
      }
    }
    const stringResult = obj3.string(finish(1126).t.B2T1HD);
    const intl = finish(1126).intl;
    const stringResult1 = intl.string(finish(1126).t.c5J7O0);
    cResult[6] = stringResult;
    cResult[7] = stringResult1;
  } else {
    class C {
      constructor(arg0) {
        closure_3(arg0);
        _slicedToArray(undefined);
      }
    }
  }
  if (cResult[8] !== first) {
    class C {
      constructor(arg0) {
        closure_3(arg0);
        _slicedToArray(undefined);
      }
    }
    const tmp25 = getFormattedExplainer(first);
    cResult[8] = first;
    cResult[9] = tmp25;
  } else {
    class C {
      constructor(arg0) {
        closure_3(arg0);
        _slicedToArray(undefined);
      }
    }
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(arg0) {
        closure_3(arg0);
        _slicedToArray(undefined);
      }
    }
    const stringResult2 = obj4.string(finish(1126).t["C/ZAw/"]);
    const intl2 = finish(1126).intl;
    const stringResult3 = intl2.string(finish(1126).t.fZSi1D);
    cResult[10] = stringResult2;
    cResult[11] = stringResult3;
    tmp27 = stringResult3;
    tmp26 = stringResult2;
  } else {
    class C {
      constructor(arg0) {
        closure_3(arg0);
        _slicedToArray(undefined);
      }
    }
    tmp27 = cResult[11];
  }
  if (cResult[12] === tmp10) {
    class C {
      constructor(arg0) {
        closure_3(arg0);
        _slicedToArray(undefined);
      }
    }
  }
  let obj5 = { label: tmp26, placeholder: tmp27, isValidClipboardCode, maxLength: finish(15508).BACKUP_CODE_MAX_LENGTH, onChangeCode: C, error: tmp10, isDisabled: tmp30, autoFocus: tmp31 };
  const tmp4Result = ClipboardCopyInputDefault;
  cResult[12] = tmp10;
  cResult[13] = tmp7 || tmp12;
  cResult[14] = !tmp5;
  cResult[15] = closure_7(tmp4Result, obj5);
  closure_7(tmp4Result, obj5);
}) : ((finish) => {
  let _undefined;
  let c1;
  let c4;
  let c5;
  let closure_7;
  let first;
  let first1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let obj3;
  let obj4;
  let tmp10;
  let tmp18;
  let tmp20;
  let tmp5;
  let tmp8;
  let tmpResult;
  finish = finish.finish;
  importDefault = undefined;
  first = undefined;
  _asyncToGenerator = undefined;
  _slicedToArray = undefined;
  react = undefined;
  first1 = undefined;
  closure_7 = undefined;
  const mfaChallenge = finish.mfaChallenge;
  const tmp = importDefault;
  const tmp3 = require("useWideAuthView")();
  const tmp4 = _slicedToArray(react.useState(false), 2);
  [tmp5, c1] = tmp4;
  [first, _asyncToGenerator] = react.useState("");
  [tmp8, c4] = _slicedToArray(react.useState(undefined), 2);
  const tmp7 = _slicedToArray(react.useState(undefined), 2);
  [tmp10, c5] = _slicedToArray(react.useState(false), 2);
  const tmp9 = _slicedToArray(react.useState(false), 2);
  [first1, closure_7] = react.useState(10);
  const items = [first1];
  const effect = react.useEffect(() => {
    let closure_0;
    if (first1 > 0) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_7((arg0) => arg0 - 1);
      }, 1000);
      return () => clearTimeout(closure_0);
    }
  }, items);
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0) => {
    let closure_4;
    let message2;
    closure_0 = arg0;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let v0;
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp;
            let closure_2 = tmp4;
            tmp28(undefined);
            message2(true);
            v0 = 1;
            const obj4 = { mfaType: "backup", data: removeDashes(closure_0) };
            c6 = 2;
            c7 = 1;
            const obj5 = { value: closure_0(obj4), done: false };
            return obj5;
          }
        } else {
          if (1 === c6) {
            v0 = 0;
            closure_0 = tmp28;
            let message;
            if (closure_0 != null) {
              const body = closure_0.body;
              if (body != null) {
                message = body.message;
              }
            }
            message2 = message;
            if (message == null) {
              message2 = closure_0.message;
            }
            tmp28(message2);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            v0(true);
            v0 = 0;
          }
          message2(false);
          c7 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp28) {
        if (0 === v0) {
          c7 = 3;
          throw tmp28;
        } else {
          c6 = 1;
        }
      }
    }
  });
  const items1 = [finish];
  let closure_8 = useCallback(function() {
    return closure_0(...arguments);
  }, items1);
  let obj = { headerText: intl.string(finish(first[6]).t.B2T1HD), subtitle: intl2.string(finish(first[6]).t.c5J7O0), input: first1(tmp18, obj3), submit: tmp14(tmpResult, obj4), screenProps: { mfaChallenge, finish }, mfaMethod: "backup" };
  const tmp15 = require("MfaOptionScreen");
  intl = finish(first[6]).intl;
  intl2 = finish(first[6]).intl;
  const items2 = [getFormattedExplainer(first1), ];
  let obj2 = {
    label: intl3.string(finish(first[6]).t["C/ZAw/"]),
    placeholder: intl4.string(finish(first[6]).t.fZSi1D),
    isValidClipboardCode,
    maxLength: finish(first[4]).BACKUP_CODE_MAX_LENGTH,
    onChangeCode(arg0) {
      closure_3(arg0);
      _undefined(undefined);
    },
    error: tmp8,
    isDisabled: tmp20,
    autoFocus: !tmp3
  };
  const tmp19 = require("ClipboardCopyInput");
  intl3 = finish(first[6]).intl;
  intl4 = finish(first[6]).intl;
  obj3 = { children: items2 };
  tmp20 = tmp5 || tmp10;
  items2[1] = closure_7(tmp19, obj2);
  obj4 = {
    variant: "primary",
    text: intl5.string(tmp16(tmp2[6]).t.geKm7t),
    loading: tmp5 || tmp10,
    onPress() {
      return closure_8(first);
    },
    disabled: tmp5
  };
  tmpResult = tmp(first[11]);
  intl5 = tmp16(tmp2[6]).intl;
  tmp18 = closure_8;
  if (!tmp5) {
    tmp5 = tmp10;
  }
  if (!tmp5) {
    tmp5 = first.length < tmp16(tmp2[4]).BACKUP_CODE_MIN_LENGTH;
  }
  if (!tmp5) {
    tmp5 = first1 > 0;
  }
  return closure_7(tmp15, obj);
});
const result = size.fileFinishedImporting("modules/mfa/native/screens/BackupScreen.tsx");

export default tmp3;