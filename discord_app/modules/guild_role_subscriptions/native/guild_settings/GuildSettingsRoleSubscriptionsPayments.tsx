// === Module 19929: GuildSettingsRoleSubscriptionsPayments ===

// Module 19929 (GuildSettingsRoleSubscriptionsPayments)
import util from "util" /* 1114 */;
import UnavailableNoticeDefault from "UnavailableNotice" /* 18560 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx");

export default function GuildSettingsRoleSubscriptionPayments(arg0) {
  const merged = Object.assign(arg0, Object.assign({ ref: 0 }));
  const obj = { title: null, description: null, brightTitle: true };
  const intl = util.intl;
  obj.title = intl.string(util.t.qAMb9K);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.pRuzXJ);
  return jsx(UnavailableNoticeDefault, { title: null, description: null, brightTitle: true });
};