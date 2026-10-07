// discord_app/modules/safety_flows/native/LogOutDisclaimer.tsx
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import _modDef2815 from "../SafetyFlows.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AuthenticationActionCreatorsDefault from "../../../actions/AuthenticationActionCreators.tsx";
import ModalDisclaimer from "../../../design/components/Modal/native/ModalDisclaimer.native.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { children: null };
        const obj3 = { variant: "text-xs/medium", children: null };
        const intl = util.intl;
        const obj4 = {
          handleLogOut() {
            AuthenticationActionCreatorsDefault.logout("safety_flows_enter_email_screen");
          },
        };
        obj3.children = intl.format(_modDef2815["0DHxym"], obj4);
        obj2.children = jsx(Text_Text.Text, { variant: "text-xs/medium", children: null });
        const tmp7 = jsx(ModalDisclaimer.ModalDisclaimer, { children: null });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      const obj = { children: null };
      const obj2 = { variant: "text-xs/medium", children: null };
      const intl = util.intl;
      obj2.children = intl.format(_modDef2815["0DHxym"], {
        handleLogOut() {
          AuthenticationActionCreatorsDefault.logout("safety_flows_enter_email_screen");
        },
      });
      obj.children = jsx(Text_Text.Text, { variant: "text-xs/medium", children: null });
      return jsx(ModalDisclaimer.ModalDisclaimer, { children: null });
    };
