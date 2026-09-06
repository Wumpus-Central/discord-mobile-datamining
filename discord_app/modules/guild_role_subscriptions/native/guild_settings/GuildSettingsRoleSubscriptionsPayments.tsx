// === Module 17778: GuildSettingsRoleSubscriptionsPayments ===

// Module 17778 (GuildSettingsRoleSubscriptionsPayments)
import util from "util" /* 1114 */;
import UnavailableNoticeDefault from "UnavailableNotice" /* 16534 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx");

export default noop.forwardRef(() => {
  const obj = { title: null, description: null, brightTitle: true };
  const intl = util.intl;
  obj.title = intl.string(util.t.qAMb9K);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.pRuzXJ);
  return jsx(UnavailableNoticeDefault, { title: null, description: null, brightTitle: true });
});