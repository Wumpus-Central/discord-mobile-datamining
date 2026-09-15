// discord_app/modules/safety_flows/native/LogOutDisclaimer.tsx
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import util from "../../../intl/index.native.tsx";
import _modDef2691 from "../SafetyFlows.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AuthenticationActionCreatorsDefault from "../../../actions/AuthenticationActionCreators.tsx";
import ModalDisclaimer from "../../../design/components/Modal/native/ModalDisclaimer.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  const obj = { children: null };
  const obj2 = { variant: "text-xs/medium", children: null };
  const intl = util.intl;
  obj2.children = intl.format(_modDef2691["0DHxym"], {
    handleLogOut() {
      AuthenticationActionCreatorsDefault.logout("safety_flows_enter_email_screen");
    },
  });
  obj.children = jsx(Text_Text.Text, { variant: "text-xs/medium", children: null });
  return jsx(ModalDisclaimer.ModalDisclaimer, { children: null });
}
