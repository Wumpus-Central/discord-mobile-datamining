// discord_app/modules/mfa/native/screens/BackupScreen.tsx
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useWideAuthViewDefault from "../../../auth/native/useWideAuthView.tsx";
import MfaOptionScreenDefault from "MfaOptionScreen.tsx";
import buttonDefault from "../components/button.tsx";
import MFA from "../../../../../discord_common/js/shared/MFA.tsx";
import ClipboardCopyInputDefault from "../components/ClipboardCopyInput.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function isValidClipboardCode(arg0) {
  let tmp3 = arg0.length >= MFA.BACKUP_CODE_MIN_LENGTH;
  if (tmp3) {
    tmp3 = arg0.length <= MFA.BACKUP_CODE_MAX_LENGTH;
  }
  return tmp3;
}
const jsxProd = fn(21);
({ jsxs: metroRequire, jsx: closure_7, Fragment: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/mfa/native/screens/BackupScreen.tsx");

export default function BackupScreen(finish) {
  finish = finish.finish;
  c1 = undefined;
  c4 = undefined;
  c5 = undefined;
  const tmp3 = useWideAuthViewDefault();
  [tmp5, c1] = _slicedToArray(noop.useState(false), 2);
  const tmp6 = _slicedToArray(noop.useState(""), 2);
  const first = tmp6[0];
  closure_3 = tmp6[1];
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  [tmp8, c4] = _slicedToArray(noop.useState(undefined), 2);
  const tmp7 = _slicedToArray(noop.useState(undefined), 2);
  [tmp10, c5] = _slicedToArray(noop.useState(false), 2);
  const tmp11 = _slicedToArray(noop.useState(10), 2);
  const first1 = tmp11[0];
  closure_7 = tmp11[1];
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
  closure_0 = asyncGeneratorStep(async (arg0) => {
    closure_3 = tmp3;
    tmp30(undefined);
    message(true);
    let v0 = 1;
    await closure_0({ mfaType: "backup", data: closure_0.replace(/-/g, "") });
    if (1 === tmp7) {
      v0 = 0;
      closure_130_0 = tmp30;
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
      tmp30(message);
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
  closure_8 = noop.useCallback(function () {
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
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  const intl = util.intl;
  obj.headerText = intl.string(util.t.B2T1HD);
  const intl2 = util.intl;
  obj.subtitle = intl2.string(util.t.c5J7O0);
  if (first1 > 0) {
    obj = { variant: "text-md/normal", children: null };
    const intl3 = util.intl;
    const items2 = [intl3.string(util.t.RRtlLg)];
    const intl4 = util.intl;
    obj = { countdown: first1 };
    items2[1] = intl4.format(util.t.tsWkAE, obj);
    obj.children = items2;
    let obj1 = obj;
  } else {
    obj1 = { variant: "text-md/normal", children: null };
    const intl8 = util.intl;
    const items3 = [intl8.string(util.t.RRtlLg)];
    const intl9 = util.intl;
    items3[1] = intl9.string(util.t.v3a6Pd);
    obj1.children = items3;
  }
  const items4 = [timestampProducer(Text_Text.Text, obj1)];
  const obj2 = {
    label: null,
    placeholder: null,
    isValidClipboardCode: null,
    maxLength: null,
    onChangeCode: null,
    error: null,
    isDisabled: null,
    autoFocus: null,
  };
  let tmpResult = ClipboardCopyInputDefault;
  const intl5 = util.intl;
  obj2.label = intl5.string(util.t["C/ZAw/"]);
  const intl6 = util.intl;
  obj2.placeholder = intl6.string(util.t.fZSi1D);
  obj2.isValidClipboardCode = isValidClipboardCode;
  obj2.maxLength = MFA.BACKUP_CODE_MAX_LENGTH;
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
  items4[1] = React5(tmpResult, obj2);
  obj3.children = items4;
  obj.input = timestampProducer(React6, obj3);
  const obj4 = { variant: "primary", text: null, loading: null, onPress: null, disabled: null };
  tmpResult = buttonDefault;
  const intl7 = util.intl;
  obj4.text = intl7.string(util.t.geKm7t);
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
    tmp5 = first.length < MFA.BACKUP_CODE_MIN_LENGTH;
  }
  if (!tmp5) {
    tmp5 = first1 > 0;
  }
  obj4.disabled = tmp5;
  obj.submit = React5(tmpResult, obj4);
  obj.screenProps = { mfaChallenge: finish.mfaChallenge, finish };
  return React5(MfaOptionScreenDefault, obj);
}
