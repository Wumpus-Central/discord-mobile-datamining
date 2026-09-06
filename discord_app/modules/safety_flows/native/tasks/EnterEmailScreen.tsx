// discord_app/modules/safety_flows/native/tasks/EnterEmailScreen.tsx
import _modDef2690 from "../../SafetyFlows.messages.js";
import types from "../../types.tsx";
import SafetyFlowTaskScreenDefault from "../SafetyFlowTaskScreen.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  obj.children = jsx(require("Stack/Stack").Stack, {
    children: jsx(require("TextInput").TextInput, { label: "Email", value: tmp2, onChange: tmp3 }),
  });
  return jsx(SafetyFlowTaskScreenDefault, {
    children: jsx(require("TextInput").TextInput, { label: "Email", value: tmp2, onChange: tmp3 }),
  });
}
