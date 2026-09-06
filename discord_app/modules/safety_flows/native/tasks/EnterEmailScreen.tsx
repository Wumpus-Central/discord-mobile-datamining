// === Module 17875: EnterEmailScreen ===

// Module 17875 (EnterEmailScreen)
import _modDef2690 from "module_2690" /* 2690 */;
import types from "types" /* 17867 */;
import SafetyFlowTaskScreenDefault from "SafetyFlowTaskScreen" /* 17876 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/tasks/EnterEmailScreen.tsx");

export default function EnterEmailScreen() {
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  [tmp2, tmp3] = _slicedToArray(noop.useState(""), 2);
  obj = { title: null, action: null, onAction: null, children: null };
  const tmp = _slicedToArray(noop.useState(""), 2);
  const intl = require("util").intl;
  obj.title = intl.string(_modDef2690.bFbsV6);
  const intl2 = require("util").intl;
  obj.action = intl2.string(_modDef2690.RRBNpv);
  obj.onAction = function onAction() {
    closure_0.push(types.SafetyFlowScreens.VERIFY_EMAIL);
  };
  obj = { children: jsx(require("TextInput").TextInput, { label: "Email", value: tmp2, onChange: tmp3 }) };
  obj.children = jsx(require("Stack/Stack").Stack, { children: jsx(require("TextInput").TextInput, { label: "Email", value: tmp2, onChange: tmp3 }) });
  return jsx(SafetyFlowTaskScreenDefault, { children: jsx(require("TextInput").TextInput, { label: "Email", value: tmp2, onChange: tmp3 }) });
};