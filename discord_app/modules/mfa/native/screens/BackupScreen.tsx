// discord_app/modules/mfa/native/screens/BackupScreen.tsx
import finishMFACheck from "../../../../../discord_common/js/shared/MFA.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../../_runtime/00019_noop.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

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

export default function BackupScreen() {
  let obj = _require(first[7]);
  const finish = obj.useMfaChallenge().finish;
  _require = finish;
  const tmp4 = importDefault(first[8])();
  [tmp6, importDefault] = callback2(React.useState(false), 2);
  const tmp7 = callback2(React.useState(""), 2);
  first = tmp7[0];
  const callback = tmp7[1];
  const tmp5 = callback2(React.useState(false), 2);
  [tmp9, closure_4] = callback2(React.useState(undefined), 2);
  const tmp8 = callback2(React.useState(undefined), 2);
  [tmp11, closure_5] = callback2(React.useState(false), 2);
  const tmp12 = callback2(React.useState(10), 2);
  const first1 = tmp12[0];
  closure_7 = tmp12[1];
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
    return (function* (arg0) {
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
  closure_8 = React.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  obj = { headerText: null, subtitle: null, input: null, submit: null, mfaMethod: "backup" };
  const tmp10 = callback2(React.useState(false), 2);
  const intl = _require(first[6]).intl;
  obj[0] = intl.string(_require(first[6]).t.B2T1HD);
  const intl2 = _require(first[6]).intl;
  obj[1] = intl2.string(_require(first[6]).t.c5J7O0);
  if (first1 > 0) {
    obj = { variant: "text-md/normal", children: null };
    const intl3 = tmp(tmp2[6]).intl;
    const items2 = [intl3.string(tmp(tmp2[6]).t.RRtlLg)];
    const intl4 = tmp(tmp2[6]).intl;
    obj1 = { countdown: null };
    obj1[0] = first1;
    items2[1] = intl4.format(tmp(tmp2[6]).t.tsWkAE, obj1);
    obj[1] = items2;
    let obj2 = obj;
  } else {
    obj2 = { variant: "text-md/normal", children: null };
    const intl8 = tmp(tmp2[6]).intl;
    const items3 = [intl8.string(tmp(tmp2[6]).t.RRtlLg)];
    const intl9 = tmp(tmp2[6]).intl;
    items3[1] = intl9.string(tmp(tmp2[6]).t.v3a6Pd);
    obj2[1] = items3;
  }
  const items4 = [first1(_require(first[5]).Text, obj2)];
  const obj3 = {
    label: null,
    placeholder: null,
    isValidClipboardCode: null,
    maxLength: null,
    onChangeCode: null,
    error: null,
    isDisabled: null,
    autoFocus: null,
  };
  let tmp3Result = tmp3(tmp2[10]);
  const intl5 = tmp(tmp2[6]).intl;
  obj3[0] = intl5.string(_require(first[6]).t["C/ZAw/"]);
  const intl6 = tmp(tmp2[6]).intl;
  obj3[1] = intl6.string(_require(first[6]).t.fZSi1D);
  obj3[2] = isValidClipboardCode;
  obj3[3] = _require(first[4]).BACKUP_CODE_MAX_LENGTH;
  obj3[4] = function onChangeCode(arg0) {
    callback(arg0);
    callback2(undefined);
  };
  obj3[5] = tmp9;
  let tmp20 = tmp6;
  if (!tmp6) {
    tmp20 = tmp11;
  }
  const obj4 = { children: null };
  obj3[6] = tmp20;
  obj3[7] = !tmp4;
  items4[1] = closure_7(tmp3Result, obj3);
  obj4[0] = items4;
  obj[2] = first1(closure_8, obj4);
  const obj5 = { variant: "primary", text: null, loading: null, onPress: null, disabled: null };
  tmp3Result = tmp3(tmp2[11]);
  const intl7 = tmp(tmp2[6]).intl;
  obj5[1] = intl7.string(_require(first[6]).t.geKm7t);
  let tmp22 = tmp6;
  if (!tmp6) {
    tmp22 = tmp11;
  }
  obj5[2] = tmp22;
  obj5[3] = function onPress() {
    return callback3(first);
  };
  if (!tmp6) {
    tmp6 = tmp11;
  }
  if (!tmp6) {
    tmp6 = first.length < tmp(tmp2[4]).BACKUP_CODE_MIN_LENGTH;
  }
  if (!tmp6) {
    tmp6 = first1 > 0;
  }
  obj5[4] = tmp6;
  obj[3] = closure_7(tmp3Result, obj5);
  return closure_7(importDefault(first[9]), obj);
}
