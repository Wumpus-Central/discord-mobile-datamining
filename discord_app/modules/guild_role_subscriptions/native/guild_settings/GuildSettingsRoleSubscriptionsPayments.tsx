// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import UnavailableNoticeDefault from "../components/UnavailableNotice.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx",
);

export default noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(1);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { title: null, description: null, brightTitle: true };
          const intl = util.intl;
          obj2.title = intl.string(util.t.qAMb9K);
          const intl2 = util.intl;
          obj2.description = intl2.string(util.t.pRuzXJ);
          const tmp8 = jsx(UnavailableNoticeDefault, { title: null, description: null, brightTitle: true });
          cResult[0] = tmp8;
          let first = tmp8;
        } else {
          first = cResult[0];
        }
        return first;
      }
    : () => {
        const obj = { title: null, description: null, brightTitle: true };
        const intl = util.intl;
        obj.title = intl.string(util.t.qAMb9K);
        const intl2 = util.intl;
        obj.description = intl2.string(util.t.pRuzXJ);
        return jsx(UnavailableNoticeDefault, { title: null, description: null, brightTitle: true });
      },
);
