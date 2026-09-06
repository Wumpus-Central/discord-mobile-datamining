// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx
import util from "../../../../intl/index.native.tsx";
import UnavailableNoticeDefault from "../components/UnavailableNotice.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx",
);

export default noop.forwardRef(() => {
  const obj = { title: null, description: null, brightTitle: true };
  const intl = util.intl;
  obj.title = intl.string(util.t.qAMb9K);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.pRuzXJ);
  return jsx(UnavailableNoticeDefault, { title: null, description: null, brightTitle: true });
});
