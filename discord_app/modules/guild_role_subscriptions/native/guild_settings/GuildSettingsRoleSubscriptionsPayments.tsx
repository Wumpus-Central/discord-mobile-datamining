// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import UnavailableNoticeDefault from "../components/UnavailableNotice.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = arg1;
const forwardRefResult = importAllResult.forwardRef(() => {
  const obj = { title: null, description: null, brightTitle: true };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.qAMb9K);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.pRuzXJ);
  return jsx(UnavailableNoticeDefault, { title: null, description: null, brightTitle: true });
});
const result = require("set").fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx",
);

export default forwardRefResult;
