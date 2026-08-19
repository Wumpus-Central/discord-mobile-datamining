// === Module 16999: ? ===

// Module 16999
import getSystemLocale from "getSystemLocale" /* 1236 */;
import UnavailableNoticeDefault from "UnavailableNotice" /* 15790 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = fn;
const forwardRefResult = importAllResult.forwardRef(() => {
  const obj = { title: null, description: null, brightTitle: true };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.qAMb9K);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.pRuzXJ);
  return jsx(UnavailableNoticeDefault, { title: null, description: null, brightTitle: true });
});
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx");

export default forwardRefResult;