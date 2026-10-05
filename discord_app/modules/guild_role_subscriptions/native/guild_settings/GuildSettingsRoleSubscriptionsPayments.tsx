// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl3 from "../../../../intl/index.native.tsx";
import UnavailableNoticeDefault from "../components/UnavailableNotice.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let first;
        const obj = react2;
        const cResult = obj.c(1);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          UnavailableNoticeDefault;
          const intl = intl3.intl;
          const intl2 = intl3.intl;
          const tmp8 = (
            <tmp7 title={intl.string(intl3.t.qAMb9K)} description={intl2.string(intl3.t.pRuzXJ)} brightTitle />
          );
          cResult[0] = tmp8;
          first = tmp8;
        } else {
          first = cResult[0];
        }
        return first;
      }
    : () => {
        UnavailableNoticeDefault;
        const intl = intl3.intl;
        const intl2 = intl3.intl;
        return <tmp title={intl.string(intl3.t.qAMb9K)} description={intl2.string(intl3.t.pRuzXJ)} brightTitle />;
      },
);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx",
);

export default forwardRefResult;
