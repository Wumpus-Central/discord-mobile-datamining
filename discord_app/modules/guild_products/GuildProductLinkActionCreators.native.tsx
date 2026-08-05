// discord_app/modules/guild_products/GuildProductLinkActionCreators.native.tsx
import { AlertActionCreators } from "../../actions/native/AlertActionCreators.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
const result = require("set").fileFinishedImporting("modules/guild_products/GuildProductLinkActionCreators.native.tsx");

export const openGuildProductLink = function openGuildProductLink(closure_0, closure_1) {
  let obj = AlertActionCreators;
  obj = { body: null, confirmText: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["mYlo/T"]);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.BddRzS);
  obj.show(obj);
};