// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx
import { jsx } from "jsxProd";
import importAllResult from "noop";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { UnavailableNotice } from "../components/UnavailableNotice.tsx";

const require = arg1;
const forwardRefResult = require("noop").forwardRef(() => {
  const obj = { title: null, description: null, brightTitle: true };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.qAMb9K);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.pRuzXJ);
  return jsx(UnavailableNotice, { title: null, description: null, brightTitle: true });
});
const result = require("UnavailableNotice").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx");

export default forwardRefResult;