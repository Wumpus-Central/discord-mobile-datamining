// discord_app/modules/safety_flows/native/LogOutDisclaimer.tsx
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import util from "../../../intl/index.native.tsx";
import _modDef2690 from "../SafetyFlows.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AuthenticationActionCreatorsDefault from "../../../actions/AuthenticationActionCreators.tsx";
import ModalDisclaimer from "../../../design/components/Modal/native/ModalDisclaimer.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  let obj = { children: null };
  obj = { variant: "text-xs/medium", children: null };
  const intl = util.intl;
  obj = {
    handleLogOut() {
      AuthenticationActionCreatorsDefault.logout("safety_flows_enter_email_screen");
    },
  };
  obj.children = intl.format(_modDef2690["0DHxym"], obj);
  obj.children = jsx(Text_Text.Text, {
    handleLogOut() {
      AuthenticationActionCreatorsDefault.logout("safety_flows_enter_email_screen");
    },
  });
  return jsx(ModalDisclaimer.ModalDisclaimer, {
    handleLogOut() {
      AuthenticationActionCreatorsDefault.logout("safety_flows_enter_email_screen");
    },
  });
}
