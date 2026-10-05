// === Module 15510: BackupScreen ===

// Module 15510 (BackupScreen)
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import useWideAuthViewDefault from "useWideAuthView" /* 6432 */;
import MFA from "MFA" /* 15508 */;
import ClipboardCopyInputDefault from "ClipboardCopyInput" /* 15509 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function removeDashes(str) {
  return str.replace(/-/g, "");
}
function isValidClipboardCode(arg0) {
  let tmp3 = arg0.length >= MFA.BACKUP_CODE_MIN_LENGTH;
  if (tmp3) {
    tmp3 = arg0.length <= MFA.BACKUP_CODE_MAX_LENGTH;
  }
  return tmp3;
}
function getFormattedExplainer(first1) {
  if (first1 > 0) {
    const obj = { variant: "text-md/normal", children: null };
    const intl = util.intl;
    const items = [intl.string(util.t.RRtlLg), ];
    const intl2 = util.intl;
    const obj2 = { countdown: first1 };
    items[1] = intl2.format(util.t.tsWkAE, obj2);
    obj.children = items;
    let obj3 = obj;
  } else {
    obj3 = { variant: "text-md/normal", children: null };
    const intl3 = util.intl;
    const items1 = [intl3.string(util.t.RRtlLg), ];
    const intl4 = util.intl;
    items1[1] = intl4.string(util.t.v3a6Pd);
    obj3.children = items1;
  }
  return timestampProducer(Text_Text.Text, obj3);
}
const jsxProd = fn(21);
({ jsxs: metroRequire, jsx: closure_7, Fragment: closure_8 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/mfa/native/screens/BackupScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(34);
  ({ mfaChallenge, finish } = arg0);
  _require = finish;
  const obj = require("c");
  const tmp5 = useWideAuthViewDefault();
  [tmp7, importDefault] = noop.useState(false);
  [dependencyMap, asyncGeneratorStep] = noop.useState("");
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  [tmp10, _slicedToArray] = noop.useState(undefined);
  const tmp9 = _slicedToArray(noop.useState(undefined), 2);
  [r10038, noop] = noop.useState(false);
  [first, closure_7] = noop.useState(10);
  if (cResult[0] !== first) {
    const fn = function f() {
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
    let tmp15 = items;
    let tmp14 = fn;
  } else {
    tmp14 = cResult[1];
    tmp15 = cResult[2];
  }
  const effect = noop.useEffect(tmp14, tmp15);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(arg0) {
        tmp = closure_3(arg0);
        tmp2 = closure_4(undefined);
        return;
      }
    }
    cResult[3] = C;
  } else {
    class C {
      constructor(arg0) {
        tmp = closure_3(arg0);
        tmp2 = closure_4(undefined);
        return;
      }
    }
  }
  if (cResult[4] !== finish) {
    class C {
      constructor(arg0) {
        tmp = closure_3(arg0);
        tmp2 = closure_4(undefined);
        return;
      }
    }
    _require = asyncGeneratorStep(async (arg0) => {
      closure_3 = tmp3;
      tmp31(undefined);
      message(true);
      let v0 = 1;
      await closure_0({ mfaType: "backup", data: removeDashes(closure_0) });
      if (1 === tmp7) {
        v0 = 0;
        closure_130_0 = tmp31;
        message = undefined;
        if (closure_130_0 != null) {
          const body = closure_130_0.body;
          if (body != null) {
            message = body.message;
          }
        }
        if (message == null) {
          message = closure_130_0.message;
        }
        tmp31(message);
        message(false);
        c7 = 3;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 !== 2) {
        v0(true);
        v0 = 0;
      }
      v0 = 0;
      return value;
    });
    let fn2 = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    cResult[4] = finish;
    cResult[5] = fn2;
    const tmp18 = fn2;
  } else {
    class C {
      constructor(arg0) {
        tmp = closure_3(arg0);
        tmp2 = closure_4(undefined);
        return;
      }
    }
  }
  fn2 = tmp18;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(arg0) {
        tmp = closure_3(arg0);
        tmp2 = closure_4(undefined);
        return;
      }
    }
    const stringResult = obj3.string(tmp(1126).t.B2T1HD);
    const intl = tmp(1126).intl;
    const stringResult1 = intl.string(tmp(1126).t.c5J7O0);
    cResult[6] = stringResult;
    cResult[7] = stringResult1;
  } else {
    class C {
      constructor(arg0) {
        tmp = closure_3(arg0);
        tmp2 = closure_4(undefined);
        return;
      }
    }
  }
  if (cResult[8] !== first) {
    class C {
      constructor(arg0) {
        tmp = closure_3(arg0);
        tmp2 = closure_4(undefined);
        return;
      }
    }
    const tmp24 = getFormattedExplainer(first);
    cResult[8] = first;
    cResult[9] = tmp24;
  } else {
    class C {
      constructor(arg0) {
        tmp = closure_3(arg0);
        tmp2 = closure_4(undefined);
        return;
      }
    }
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(arg0) {
        tmp = closure_3(arg0);
        tmp2 = closure_4(undefined);
        return;
      }
    }
    const stringResult2 = obj4.string(tmp(1126).t["C/ZAw/"]);
    const intl2 = tmp(1126).intl;
    const stringResult3 = intl2.string(tmp(1126).t.fZSi1D);
    cResult[10] = stringResult2;
    cResult[11] = stringResult3;
    let tmp26 = stringResult3;
    const tmp25 = stringResult2;
  } else {
    class C {
      constructor(arg0) {
        tmp = closure_3(arg0);
        tmp2 = closure_4(undefined);
        return;
      }
    }
    tmp26 = cResult[11];
  }
  if (!tmp7) {
    class C {
      constructor(arg0) {
        tmp = closure_3(arg0);
        tmp2 = closure_4(undefined);
        return;
      }
    }
  }
  if (cResult[12] === tmp10) {
    class C {
      constructor(arg0) {
        tmp = closure_3(arg0);
        tmp2 = closure_4(undefined);
        return;
      }
    }
  }
  const obj5 = { label: tmp25, placeholder: tmp26, isValidClipboardCode, maxLength: null, onChangeCode: null, error: null, isDisabled: null, autoFocus: null };
  const tmp11 = _slicedToArray(noop.useState(false), 2);
  obj5.maxLength = require("MFA").BACKUP_CODE_MAX_LENGTH;
  obj5.onChangeCode = C;
  obj5.error = tmp10;
  obj5.isDisabled = tmp7;
  obj5.autoFocus = !tmp5;
  const tmp4Result = ClipboardCopyInputDefault;
  cResult[12] = tmp10;
  cResult[13] = tmp7;
  cResult[14] = !tmp5;
  cResult[15] = closure_7(ClipboardCopyInputDefault, obj5);
  const tmp32 = closure_7(ClipboardCopyInputDefault, obj5);
}) : ((finish) => {
  finish = finish.finish;
  importDefault = undefined;
  first = undefined;
  asyncGeneratorStep = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  first1 = undefined;
  closure_7 = undefined;
  const tmp = importDefault;
  const tmp3 = require("useWideAuthView")();
  [tmp5, c1] = noop.useState(false);
  [first, asyncGeneratorStep] = noop.useState("");
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  [tmp8, c4] = noop.useState(undefined);
  const tmp7 = _slicedToArray(noop.useState(undefined), 2);
  [tmp10, c5] = noop.useState(false);
  [first1, closure_7] = noop.useState(10);
  const items = [first1];
  const effect = noop.useEffect(() => {
    if (first1 > 0) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_7((arg0) => arg0 - 1);
      }, 1000);
      return () => clearTimeout(closure_0);
    }
  }, items);
  _require = asyncGeneratorStep(async (arg0) => {
    closure_3 = tmp3;
    tmp31(undefined);
    message(true);
    let v0 = 1;
    await closure_0({ mfaType: "backup", data: removeDashes(closure_0) });
    if (1 === tmp7) {
      v0 = 0;
      closure_130_0 = tmp31;
      message = undefined;
      if (closure_130_0 != null) {
        const body = closure_130_0.body;
        if (body != null) {
          message = body.message;
        }
      }
      if (message == null) {
        message = closure_130_0.message;
      }
      tmp31(message);
      message(false);
      c7 = 3;
    } else if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 !== 2) {
      v0(true);
      v0 = 0;
    }
    v0 = 0;
    return value;
  });
  const items1 = [finish];
  closure_8 = noop.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  const obj = { headerText: null, subtitle: null, input: null, submit: null, screenProps: null, mfaMethod: "backup" };
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  const intl = require("util").intl;
  obj.headerText = intl.string(require("util").t.B2T1HD);
  const intl2 = require("util").intl;
  obj.subtitle = intl2.string(require("util").t.c5J7O0);
  const items2 = [getFormattedExplainer(first1), ];
  const obj2 = { label: null, placeholder: null, isValidClipboardCode: null, maxLength: null, onChangeCode: null, error: null, isDisabled: null, autoFocus: null };
  const tmp15 = require("MfaOptionScreen");
  const tmp17 = first1;
  const tmp18 = closure_8;
  const intl3 = require("util").intl;
  obj2.label = intl3.string(require("util").t["C/ZAw/"]);
  const intl4 = require("util").intl;
  obj2.placeholder = intl4.string(require("util").t.fZSi1D);
  obj2.isValidClipboardCode = isValidClipboardCode;
  obj2.maxLength = require("MFA").BACKUP_CODE_MAX_LENGTH;
  obj2.onChangeCode = function onChangeCode(arg0) {
    closure_3(arg0);
    _undefined(undefined);
  };
  obj2.error = tmp8;
  let tmp20 = tmp5;
  if (!tmp5) {
    tmp20 = tmp10;
  }
  const obj3 = { children: null };
  obj2.isDisabled = tmp20;
  obj2.autoFocus = !tmp3;
  items2[1] = closure_7(require("ClipboardCopyInput"), obj2);
  obj3.children = items2;
  obj.input = tmp17(tmp18, obj3);
  const obj4 = { variant: "primary", text: null, loading: null, onPress: null, disabled: null };
  const tmp19 = require("ClipboardCopyInput");
  const intl5 = tmp16(tmp2[6]).intl;
  obj4.text = intl5.string(require("util").t.geKm7t);
  let tmp22 = tmp5;
  if (!tmp5) {
    tmp22 = tmp10;
  }
  obj4.loading = tmp22;
  obj4.onPress = function onPress() {
    return closure_8(first);
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
  obj4.disabled = tmp5;
  obj.submit = closure_7(tmp(first[11]), obj4);
  obj.screenProps = { mfaChallenge: finish.mfaChallenge, finish };
  return closure_7(tmp15, obj);
});