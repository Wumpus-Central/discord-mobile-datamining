// discord_app/modules/chat_input/native/guard/ChatInputGuardQuarantineDM.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl3 from "../../../../intl/index.native.tsx";
import ChatInputGuardDefault from "ChatInputGuard.tsx";
import QuarantineConstants from "../../../quarantine/QuarantineConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const QUARANTINE_APPEAL_LINK = QuarantineConstants.QUARANTINE_APPEAL_LINK;
const jsx = Fragment.jsx;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let first;
        const obj = react2;
        const cResult = obj.c(1);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          ChatInputGuardDefault;
          const intl = intl3.intl;
          const intl2 = intl3.intl;
          const obj3 = { appealLink: QUARANTINE_APPEAL_LINK };
          const tmp9 = (
            <tmp7
              type="simple-action"
              icon={null}
              message={intl.string(intl3.t.EouHwv)}
              subtext={intl2.format(intl3.t.PThBel, obj3)}
            />
          );
          cResult[0] = tmp9;
          first = tmp9;
        } else {
          first = cResult[0];
        }
        return first;
      }
    : () => {
        ChatInputGuardDefault;
        const intl = intl3.intl;
        const intl2 = intl3.intl;
        const obj2 = { appealLink: QUARANTINE_APPEAL_LINK };
        return (
          <tmp
            type="simple-action"
            icon={null}
            message={intl.string(intl3.t.EouHwv)}
            subtext={intl2.format(intl3.t.PThBel, obj2)}
          />
        );
      },
);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardQuarantineDM.tsx");

export default memoResult;
