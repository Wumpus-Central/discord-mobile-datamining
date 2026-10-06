// discord_app/modules/safety_flows/native/LogOutDisclaimer.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react from "../../../../_runtime/00576_react.js";
import intl2 from "../../../intl/index.native.tsx";
import _modDef2815 from "../SafetyFlows.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AuthenticationActionCreatorsDefault from "../../../actions/AuthenticationActionCreators.tsx";
import ModalDisclaimer2 from "../../../design/components/Modal/native/ModalDisclaimer.native.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      let obj4;
      let obj = react;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const ModalDisclaimer = ModalDisclaimer2.ModalDisclaimer;
        ({ variant: "text-xs/medium", children: intl.format(_modDef2815["0DHxym"], obj4) });
        const Text = Text_Text.Text;
        intl = intl2.intl;
        const tmp7 = <ModalDisclaimer>{null}</ModalDisclaimer>;
        obj4 = {
          handleLogOut() {
            const obj = AuthenticationActionCreatorsDefault;
            obj.logout("safety_flows_enter_email_screen");
          },
        };
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      let intl;
      const ModalDisclaimer = ModalDisclaimer2.ModalDisclaimer;
      ({ variant: "text-xs/medium", children: intl.format(_modDef2815["0DHxym"], obj3) });
      const Text = Text_Text.Text;
      intl = intl2.intl;
      return <ModalDisclaimer>{null}</ModalDisclaimer>;
    };
const result = size.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default tmp2;
