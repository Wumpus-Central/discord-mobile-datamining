// === Module 17666: EnterEmailScreen ===

// Module 17666 (EnterEmailScreen)
import _modDef2780 from "module_2780" /* 2780 */;
import types from "types" /* 17658 */;
import SafetyFlowTaskScreenDefault from "SafetyFlowTaskScreen" /* 17667 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/tasks/EnterEmailScreen.tsx");

export default function EnterEmailScreen() {
  _require = require("useNavigation").useNavigation();
  const obj = require("useNavigation");
  [tmp2, tmp3] = noop.useState("");
  const obj2 = { title: null, action: null, onAction: null, children: null };
  const tmp = _slicedToArray(noop.useState(""), 2);
  const intl = require("util").intl;
  obj2.title = intl.string(_modDef2780.bFbsV6);
  const intl2 = require("util").intl;
  obj2.action = intl2.string(_modDef2780.RRBNpv);
  obj2.onAction = function onAction() {
    closure_0.push(types.SafetyFlowScreens.VERIFY_EMAIL);
  };
  obj2.children = jsx(require("Stack/Stack").Stack, { children: jsx(require("TextInput").TextInput, { label: "Email", value: tmp2, onChange: tmp3 }) });
  return <tmp4 title={null} action={null} onAction={null}>{null}</tmp4>;
};