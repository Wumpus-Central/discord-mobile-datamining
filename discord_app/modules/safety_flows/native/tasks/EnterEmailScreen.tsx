// === Module 18561: EnterEmailScreen ===

// Module 18561 (EnterEmailScreen)
import _modDef2859 from "module_2859" /* 2859 */;
import types from "types" /* 18553 */;
import SafetyFlowTaskScreenDefault from "SafetyFlowTaskScreen" /* 18562 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/tasks/EnterEmailScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function EnterEmailScreen() {
  const cResult = navigation(576).c(9);
  const obj = navigation(576);
  navigation = navigation(1503).useNavigation();
  const tmp5 = _slicedToArray(noop.useState(""), 2);
  const first = tmp5[0];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(_modDef2859.bFbsV6);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(_modDef2859.RRBNpv);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp7 = stringResult;
    tmp8 = stringResult1;
  } else {
    [tmp7, tmp8] = cResult;
  }
  if (cResult[2] !== navigation) {
    const fn = function o() {
      navigation.push(types.SafetyFlowScreens.VERIFY_EMAIL);
    };
    cResult[2] = navigation;
    cResult[3] = fn;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== first) {
    const obj3 = { children: null };
    const obj4 = { label: "Email", value: first, onChange: tmp5[1] };
    obj3.children = jsx(tmp(6290).TextInput, { label: "Email", value: first, onChange: tmp5[1] });
    const tmp15 = jsx(tmp(5374).Stack, { children: null });
    cResult[4] = first;
    cResult[5] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === tmp12) {
    if (cResult[7] === tmp13) {
      let tmp16 = cResult[8];
    }
    return tmp16;
  }
  const tmp17 = jsx(SafetyFlowTaskScreenDefault, { title: tmp7, action: tmp8, onAction: tmp12, children: tmp13 });
  cResult[6] = tmp12;
  cResult[7] = tmp13;
  cResult[8] = tmp17;
  tmp16 = tmp17;
  const obj2 = navigation(1503);
}) : (function EnterEmailScreen() {
  _require = require("useNavigation").useNavigation();
  const obj = require("useNavigation");
  [tmp2, tmp3] = noop.useState("");
  const obj2 = { title: null, action: null, onAction: null, children: null };
  const tmp = _slicedToArray(noop.useState(""), 2);
  const intl = require("util").intl;
  obj2.title = intl.string(_modDef2859.bFbsV6);
  const intl2 = require("util").intl;
  obj2.action = intl2.string(_modDef2859.RRBNpv);
  obj2.onAction = function onAction() {
    closure_0.push(types.SafetyFlowScreens.VERIFY_EMAIL);
  };
  obj2.children = jsx(require("Stack/Stack").Stack, { children: jsx(require("TextInput").TextInput, { label: "Email", value: tmp2, onChange: tmp3 }) });
  return <tmp4 title={null} action={null} onAction={null}>{null}</tmp4>;
});