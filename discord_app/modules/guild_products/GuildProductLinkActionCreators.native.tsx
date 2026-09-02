// === Module 13029: openGuildProductLink ===

// Module 13029 (openGuildProductLink)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import _modDef4858 from "module_4858" /* 4858 */;

const result = set.fileFinishedImporting("modules/guild_products/GuildProductLinkActionCreators.native.tsx");

export const openGuildProductLink = function openGuildProductLink(closure_0, closure_1) {
  let obj = _modDef4858;
  obj = { body: null, confirmText: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["mYlo/T"]);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.BddRzS);
  obj.show(obj);
};