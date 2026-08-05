import { AlertActionCreators } from "../../actions/native/AlertActionCreators.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
// discord_app/modules/guild_products/GuildProductLinkActionCreators.native.tsx
const result = require("set").fileFinishedImporting("modules/guild_products/GuildProductLinkActionCreators.native.tsx");

export const openGuildProductLink = function openGuildProductLink(closure_0, closure_1) {
  let obj = AlertActionCreators;
  obj = { body: null, confirmText: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t["mYlo/T"]);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.BddRzS);
  obj.show(obj);
};